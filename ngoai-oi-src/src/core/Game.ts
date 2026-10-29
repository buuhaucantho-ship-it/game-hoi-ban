import * as THREE from "three";
import { GameState, PlotState, Built, DAY_MIN, REAL_DAY_SEC, hourOf, day, HOTBAR, levelOf, LEVEL_NAMES } from "./State";
import { bus } from "./Events";
import { Input } from "./Input";
import { World, Interactable, Collider } from "../world/World";
import { Environment } from "../world/Environment";
import { Critters } from "../world/Critters";
import { TIME, tmat, PAL } from "../world/materials";
import * as M from "../world/models";
import { CameraRig } from "../camera/CameraRig";
import { Player } from "../player/Player";
import { Grandma } from "../npc/Grandma";
import { Inventory } from "../inventory/Inventory";
import { Farming } from "../farming/Farming";
import { cropModel, SOIL } from "../farming/CropModels";
import { Effects } from "../effects/Effects";
import { audio } from "../audio/AudioManager";
import { UI } from "../ui/UI";
import { ITEMS } from "../data/items";
import { CROPS, RIPE } from "../data/crops";
import { BUILD, LOTS, footprint } from "../data/buildings";
import { BuildSystem } from "../build/BuildSystem";
import * as D from "../data/dialogue";
import { saveGame, wipeSave } from "../save/SaveSystem";
type Q = "low" | "medium" | "high";
const SHADOW: Record<Q, number> = { low: 0, medium: 1024, high: 2048 }, PR: Record<Q, number> = { low: 1, medium: 1.5, high: 2 };
type Near = { kind: string; label: string; it?: Interactable } | null;
interface PlotView { a: THREE.Group; soil: THREE.Mesh; m: THREE.MeshToonMaterial; ridges: THREE.Group; rm: THREE.MeshToonMaterial; crop: THREE.Object3D | null; key: string; bounce: number; }
interface Fishing { phase: "cast" | "wait" | "bite" | "done"; t: number; bite: number; bob: THREE.Object3D; at: THREE.Vector3; }
/** Wires systems together and runs the frame loop. Game rules live in the systems; this file orchestrates. */
export class Game {
  renderer: THREE.WebGLRenderer; scene = new THREE.Scene(); cam = new THREE.PerspectiveCamera(55, 1, 0.1, 600); rig: CameraRig; input: Input;
  world: World; env: Environment; critters: Critters; fx: Effects; grandma = new Grandma(); ui: UI;
  s: GameState | null = null; player!: Player; inv!: Inventory; farming!: Farming; build!: BuildSystem;
  mode: "title" | "play" = "title"; running = true; runBtn = false; elapsed = 0; clock = new THREE.Clock(); hiddenAt = 0;
  views = new Map<number, PlotView>(); cols: Collider[] = []; near: Near = null; buildOn = false; fishing: Fishing | null = null; sleeping = false;
  saveT = 0; saveSoonT = -1; hudT = 0; sparkT = 0; fpsT = 0; fpsN = 0; fps = 0; v = new THREE.Vector3(); ray = new THREE.Raycaster(); ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  scarecrows: { x: number; z: number }[] = []; fountainT = 0;
  constructor(canvas: HTMLCanvasElement, public quality: Q, ui: UI) {
    this.ui = ui;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: quality !== "low", powerPreference: "high-performance" });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, PR[quality])); this.renderer.shadowMap.enabled = SHADOW[quality] > 0;
    this.world = new World(quality); this.scene.add(this.world.group); this.world.applyLots([]);
    this.env = new Environment(this.scene, this.world.smokeAt, SHADOW[quality], this.world.lamps);
    this.critters = new Critters(this.scene, this.world.flowerSpots, this.world.roofPerches, quality === "low" ? 4 : 8);
    this.fx = new Effects(this.scene, 220); this.scene.add(this.grandma.av.root);
    this.rig = new CameraRig(this.cam); this.rig.occluders = this.world.occluders; this.input = new Input(canvas, document.getElementById("joy")!, document.querySelector("#joy .knob")!);
    bus.on("plot", (p: PlotState, why: string) => { this.refreshPlot(p.id); const v = this.views.get(p.id); if (v && why !== "water") v.bounce = 1; });
    bus.on("plotGrow", (p: PlotState) => { this.refreshPlot(p.id); const v = this.views.get(p.id); if (v) v.bounce = 1;
      if (this.mode === "play" && this.player && Math.hypot(this.player.pos.x - p.x, this.player.pos.z - p.z) < 14) { audio.grow(); if (p.stage >= RIPE) this.ui.toast(`${CROPS[p.crop!].name} chín rồi, hái được rồi nè!`, "good"); } });
    bus.on("plotAdd", (p: PlotState) => this.makePlotView(p)); bus.on("plotRemove", (p: PlotState) => this.dropPlotView(p.id));
    bus.on("physics", () => this.rebuildCols());
    bus.on("built", () => { this.scarecrows = this.s ? this.s.built.filter(b => b.type === "scarecrow").map(b => ({ x: b.x, z: b.z })) : []; });
    addEventListener("resize", () => this.resize()); this.resize();
    document.addEventListener("visibilitychange", () => this.visibility());
    (window as any).__game = this;
    this.rebuildCols();
    requestAnimationFrame(() => this.frame());
  }
  resize() { const w = innerWidth, h = innerHeight; this.renderer.setSize(w, h); this.cam.aspect = w / h; this.cam.fov = w < h ? 68 : 55; this.cam.updateProjectionMatrix(); }
  visibility() {
    if (document.hidden) { this.running = false; this.hiddenAt = performance.now(); audio.pause(true); if (this.s) this.save(); }
    else if (!this.running) { this.running = true; const away = (performance.now() - this.hiddenAt) / 1000; if (this.s && away > 1) this.farming.tick(away); this.clock.getDelta(); audio.pause(false); requestAnimationFrame(() => this.frame()); }
  }
  rebuildCols() { this.cols = [...this.world.colliders, ...this.world.lotColliders, ...(this.build ? this.build.colliders : [])]; }
  allItems(): Interactable[] { const it = [...this.world.items, ...this.world.lotItems, ...(this.build ? this.build.items : [])];
    if (this.s) for (const p of this.s.plots) it.push({ id: "plot" + p.id, kind: "plot", x: p.x, z: p.z, r: 2.1, data: p.id }); return it; }
  /** Enter play mode with a fresh or loaded state. */
  start(s: GameState, fresh: boolean) {
    this.s = s; this.inv = new Inventory(s); this.farming = new Farming(s, this.inv);
    this.farming.boost = p => this.scarecrows.some(c => Math.hypot(c.x - p.x, c.z - p.z) < 6) ? 1.25 : 1;
    this.world.applyLots(s.lots); this.build = new BuildSystem(s, this.world, this.scene); this.scarecrows = s.built.filter(b => b.type === "scarecrow").map(b => ({ x: b.x, z: b.z })); this.rebuildCols();
    this.player = new Player(s.look); this.scene.add(this.player.av.root); this.player.pos.set(s.player.x, 0, s.player.z); this.player.ry = s.player.ry;
    this.rig.yaw = s.player.ry - Math.PI; this.cam.position.set(s.player.x, 4, s.player.z + 8);
    s.plots.forEach(p => this.makePlotView(p));
    if (!fresh) { const off = (Date.now() - s.savedAt) / 1000, before = s.plots.map(p => p.stage).join(); if (off > 3) this.farming.tick(off); if (before !== s.plots.map(p => p.stage).join()) setTimeout(() => this.ui.toast("Lúc con đi vắng, rau ngoài vườn đã lớn thêm đó!", "good"), 1200); }
    this.grandma.greet = !s.flags.talk; if (this.grandma.greet) { this.grandma.pos.set(0, 0, 23); this.grandma.ry = Math.PI; }
    if (!s.quest) this.newQuest();
    this.ui.mountHUD(s, this); this.applySettings(); this.mode = "play";
    this.ui.toast(fresh ? "Đi qua cổng gặp ngoại nha — bấm E để chào!" : `Chào mừng ${s.look.name} quay lại!`);
    if (fresh) this.save();
  }
  applySettings() { if (!this.s) return; const st = this.s.settings, q = st.quality;
    audio.set({ music: st.music, ambient: st.ambient, sfx: st.sfx, ui: st.ui }, st.muted); this.rig.sens = st.sens;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, PR[q])); this.resize();
    const sh = SHADOW[q] > 0; if (sh !== this.renderer.shadowMap.enabled) { this.renderer.shadowMap.enabled = sh; this.scene.traverse(o => { const m = (o as any).material; if (m) (Array.isArray(m) ? m : [m]).forEach((x: THREE.Material) => x.needsUpdate = true); }); }
    this.env.setShadows(SHADOW[q]); this.ui.fpsEl.style.display = st.fps ? "block" : "none"; }
  save() { if (!this.s) return Promise.resolve(false); this.s.player = { x: this.player.pos.x, z: this.player.pos.z, ry: this.player.ry }; this.saveT = 0; this.saveSoonT = -1; return saveGame(this.s); }
  saveSoon() { this.saveSoonT = 1.5; }
  flag(k: string) { if (this.s && this.s.flags[k] == null) this.s.flags[k] = this.s.time; }
  count(k: string, n = 1) { if (this.s) this.s.flags[k] = (this.s.flags[k] || 0) + n; }
  restart() { sessionStorage.setItem("ngoai-new", "1"); wipeSave().then(() => location.reload()); }
  level() { return levelOf(this.s!.xp); }
  addXP(n: number) { const s = this.s!, before = levelOf(s.xp); s.xp += n; const after = levelOf(s.xp);
    if (after > before) { audio.levelUp(); this.ui.levelUp(after, LEVEL_NAMES[after - 1], this.unlocksAt(after)); this.fx.burst(this.player.pos.clone().setY(1.6), 26, 0xf2c84a, { up: 4, speed: 2, size: 0.06, grav: 4 }); }
    this.ui.renderHUD(); }
  unlocksAt(l: number) { const a: string[] = []; Object.values(CROPS).forEach(c => c.level === l && a.push("hạt " + c.name.toLowerCase())); Object.values(BUILD).forEach(b => b.level === l && a.push(b.name.toLowerCase())); LOTS.forEach(L => L.level === l && a.push("mua " + L.name)); return a; }
  // ---------------------------------------------------------------- days, weather, quests
  private onNewDay(d: number) {
    const s = this.s!; s.lastDay = d;
    s.built.forEach(b => { if (b.type === "coop") { b.data = b.data || {}; b.data.eggs = Math.min(6, (b.data.eggs || 0) + 2); } });
    s.rain = d > 1 && Math.random() < 0.28 ? { day: d, until: 10 + Math.random() * 8 } : null;
    if (!s.quest || s.quest.day < d) this.newQuest();
    this.ui.toast(`Ngày ${d} bắt đầu${s.rain ? " · trời có mưa" : " · trời nắng đẹp"}`);
  }
  isRaining() { const s = this.s!; return !!s.rain && s.rain.day === day(s.time) && hourOf(s.time) >= 5.5 && hourOf(s.time) < s.rain.until; }
  newQuest() { const s = this.s!, l = this.level(), pool = Object.values(CROPS).filter(c => c.level <= l).map(c => c.produceItem);
    if (s.built.some(b => b.type === "coop")) pool.push("egg"); if (this.inv.count("rod")) pool.push("caro");
    const item = pool[Math.floor(Math.random() * pool.length)], qty = item === "bido" ? 1 : 2 + Math.floor(Math.random() * 3);
    s.quest = { day: day(s.time), item, qty, reward: Math.round(ITEMS[item].sell! * qty * 1.8 + 20), done: false }; }
  // ---------------------------------------------------------------- plots
  makePlotView(p: PlotState) { if (this.views.has(p.id)) return;
    const a = new THREE.Group(); a.position.set(p.x, 0, p.z); this.scene.add(a);
    const m = tmat(SOIL.untilled), soil = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 2.2), m); soil.position.y = 0.11; soil.receiveShadow = true; a.add(soil);
    const rm = tmat(0x7a5236), ridges = new THREE.Group(); [-0.75, 0, 0.75].forEach(z => { const r = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.09, 0.32), rm); r.position.set(0, 0.24, z); r.receiveShadow = true; ridges.add(r); }); a.add(ridges);
    const b = p.built != null ? this.s!.built.find(x => x.id === p.built) : null; if (b) a.rotation.y = b.rot % 2 ? Math.PI / 2 : 0;
    this.views.set(p.id, { a, soil, m, ridges, rm, crop: null, key: "-", bounce: 0 }); this.refreshPlot(p.id); }
  dropPlotView(id: number) { const v = this.views.get(id); if (v) this.scene.remove(v.a); this.views.delete(id); }
  refreshPlot(id: number) { if (!this.s) return; const p = this.s.plots.find(x => x.id === id), v = this.views.get(id); if (!p || !v) return;
    v.a.position.set(p.x, 0, p.z); v.m.color.setHex(!p.tilled ? SOIL.untilled : p.wet ? SOIL.wet : SOIL.dry); v.ridges.visible = p.tilled; v.rm.color.setHex(p.wet ? 0x553a26 : 0x84583a);
    const key = p.crop ? p.crop + p.stage : ""; if (v.key === key) return; if (v.crop) v.a.remove(v.crop); v.crop = null; v.key = key;
    if (p.crop) { v.crop = cropModel(p.crop, p.stage); v.a.add(v.crop); } }
  // ---------------------------------------------------------------- interaction
  findNear(): Near { const pp = this.player.pos, g = this.grandma, s = this.s!;
    if (this.fishing) return { kind: "fishing", label: this.fishing.phase === "bite" ? "Giật cần!" : "Đang chờ cá… (đi để thôi câu)" };
    if (this.player.seat) return { kind: "stand", label: "Đứng dậy (đi để đứng)" };
    if (g.visible && Math.hypot(g.pos.x - pp.x, g.pos.z - pp.z) < 2.4) return { kind: "npc", label: g.greet ? "Chào ngoại" : "Nói chuyện với ngoại" };
    const fx = Math.sin(this.player.ry), fz = Math.cos(this.player.ry); let best: Interactable | null = null, bs = 1e9;
    for (const it of this.allItems()) { const dx = it.x - pp.x, dz = it.z - pp.z, d = Math.hypot(dx, dz); if (d > it.r) continue;
      const score = d - (d > 0.01 ? (dx * fx + dz * fz) / d : 1) * 0.6 + (it.kind === "plot" ? 0 : 0.3); if (score < bs) { bs = score; best = it; } }
    if (!best) return null;
    if (best.kind === "plot") { const p = s.plots.find(x => x.id === best!.data); if (!p) return null; return { kind: "plot", label: this.farming.actionFor(p).label, it: best }; }
    if (best.kind === "pond") return { kind: "pond", label: this.inv.count("rod") ? best.label! : "Cần có cần câu (mua ở sạp)", it: best };
    if (best.kind === "coop") { const b = s.built.find(x => x.id === best!.data); return { kind: "coop", label: b?.data?.eggs ? `Lượm ${b.data.eggs} trứng gà` : "Gà chưa đẻ, mai quay lại nha", it: best }; }
    return { kind: best.kind, label: best.label || "", it: best }; }
  private selectTool(id: string) { const i = this.s!.inv.findIndex(x => x.id === id); if (i >= 0 && i < HOTBAR && this.s!.hotbar !== i) { this.s!.hotbar = i; this.ui.renderHotbar(); } }
  private face(x: number, z: number) { this.player.ry = Math.atan2(x - this.player.pos.x, z - this.player.pos.z); }
  interact() {
    const n = this.near; if (n?.kind === "fishing") return this.reel();
    if (!n || this.player.busy()) return; const s = this.s!;
    if (n.kind === "npc") return this.talk();
    const it = n.it!;
    if (n.kind === "plot") return this.plotAction(s.plots.find(p => p.id === it.data)!);
    switch (n.kind) {
      case "shop": this.ui.toggleShop(); break;
      case "sit": this.player.sit(it.data); this.flag("sit"); this.ui.toast("Gió mát rượi…"); audio.place(); break;
      case "jar": this.selectTool("can"); this.player.doAction("water", 0.8, "can", () => { audio.water(); this.ui.toast("Múc nước lu đổ đầy bình tưới rồi!"); }); break;
      case "door": case "sleep": this.trySleep(); break;
      case "pond": this.startFishing(it); break;
      case "lot": this.buyLot(it.data); break;
      case "wish": this.wish(); break;
      case "well": this.wellWater(it); break;
      case "coop": this.collectEggs(it.data); break;
      case "shipbox": this.ui.toggleShop(true); break;
      case "info": this.ui.toast(it.data); break;
    }
  }
  private plotAction(p: PlotState) {
    const act = this.farming.actionFor(p); this.face(p.x, p.z); const top = new THREE.Vector3(p.x, 0.3, p.z);
    if (act.kind === "till") { this.selectTool("hoe"); this.player.doAction("till", 1.0, "hoe", () => { if (this.farming.till(p)) { audio.hoe(); this.fx.burst(top, 14, 0x8a6040, { up: 2.5, speed: 1.2, size: 0.07 }); this.flag("till"); this.addXP(1); this.saveSoon(); } }); }
    else if (act.kind === "plant") { const def = CROPS[act.crop!]; if (def.level > this.level()) { this.ui.toast(`${def.name} mở ở cấp ${def.level}`, "bad"); return; } this.selectTool(def.seedItem);
      this.player.doAction("plant", 0.85, "seeds", () => { if (this.farming.plant(p, act.crop!)) { audio.seed(); this.fx.burst(top, 10, 0xd8b47a, { up: 1.5, speed: 0.8, size: 0.04 }); this.flag("plant"); this.addXP(2); this.saveSoon(); } }); }
    else if (act.kind === "water") { this.selectTool("can"); this.player.doAction("water", 1.3, "can", () => { if (this.farming.water(p)) { audio.water(); this.flag("water"); this.addXP(1); this.saveSoon(); } }); }
    else if (act.kind === "harvest") { this.selectTool("hand"); this.player.doAction("harvest", 0.85, "veg", () => { const crop = p.crop!, got = this.farming.harvest(p);
        if (!got) { this.ui.toast("Kho đồ đầy rồi, bán bớt nha!", "bad"); audio.error(); return; }
        audio.harvest(); this.fx.burst(top.clone().setY(0.6), 12, 0x7fd05a, { up: 2.4, speed: 1, size: 0.05 }); this.fx.burst(top.clone().setY(0.8), 8, 0xfff2a0, { up: 1.5, speed: 0.6, size: 0.04, grav: 1 });
        const pop = cropModel(crop, RIPE); pop.scale.setScalar(0.5); this.fx.popItem(pop, top.clone().setY(0.4), () => this.player.pos.clone().setY(1));
        this.floatAt(top.clone().setY(1.4), `+${got} ${ITEMS[CROPS[crop].produceItem].name}`); setTimeout(() => audio.pickup(), 700);
        this.flag("harvest"); this.count("harvestN"); this.addXP(3 + got); this.saveSoon(); }); }
    else this.ui.toast(act.label);
  }
  floatAt(p: THREE.Vector3, text: string) { const v = p.clone().project(this.cam); this.ui.float((v.x + 1) / 2 * innerWidth, (1 - v.y) / 2 * innerHeight, text); }
  private trySleep() { const h = hourOf(this.s!.time); if (h >= 5 && h < 17) { this.ui.toast(D.sleepLine(h)); return; } this.sleep(); }
  sleep() { if (this.sleeping) return; this.sleeping = true; const s = this.s!; audio.close();
    this.ui.sleepFade(D.sleepLine(20), () => { const target = (day(s.time) - (hourOf(s.time) < 5 ? 1 : 0)) * DAY_MIN + 6 * 60; const skipped = Math.max(0, target - s.time);
      s.time = target; this.farming.tick(skipped * REAL_DAY_SEC / DAY_MIN); this.player.stand(); this.flag("sleep"); this.count("sleepN"); }, () => { this.sleeping = false; this.save(); }); }
  private buyLot(id: string) { const L = LOTS.find(l => l.id === id)!, s = this.s!;
    if (s.lots.includes(id)) return; if (this.level() < L.level) { this.ui.toast(`Cần đạt cấp ${L.level} mới mua được ${L.name}`, "bad"); audio.error(); return; }
    this.ui.confirm(`Mua ${L.name}?`, `${L.desc} Giá ${L.price} xu. Mua xong đất được dọn sạch và mở rộng chỗ xây.`, `Mua · ${L.price} xu`, () => {
      if (s.money < L.price) { this.ui.toast("Không đủ xu rồi con", "bad"); audio.error(); return; }
      s.money -= L.price; bus.emit("money", -L.price); s.lots.push(id); this.world.applyLots(s.lots); this.rebuildCols(); this.flag("lot"); this.addXP(20); audio.chime();
      const c = new THREE.Vector3((L.rect[0] + L.rect[2]) / 2, 1, (L.rect[1] + L.rect[3]) / 2); this.fx.burst(this.player.pos.clone().setY(1.5), 30, 0xf2c84a, { up: 4, speed: 2.4, size: 0.07 }); void c;
      this.ui.toast(`Đã mua ${L.name}! Bấm B để xây trên đất mới.`, "good"); this.save(); }); }
  private wish() { const s = this.s!, d = day(s.time); if (s.wishDay === d) { this.ui.toast("Hôm nay ước rồi, mai ước tiếp nha"); return; } if (s.money < 1) { this.ui.toast("Cần 1 xu để ước", "bad"); return; }
    s.money -= 1; bus.emit("money", -1); s.wishDay = d; this.addXP(3); s.friend = Math.min(100, s.friend + 1); audio.chime(); this.flag("wish");
    const f = this.nearestFountain(); this.fx.burst(new THREE.Vector3(f.x, 1, f.z), 18, 0xfff2a0, { up: 3, speed: 1.2, size: 0.05, grav: 3 });
    this.ui.toast("“" + D.WISHES[Math.floor(Math.random() * D.WISHES.length)] + "”", "good"); }
  private nearestFountain() { const all = [...this.world.fountains, ...this.build.fountains]; let b = all[0].position, bd = 1e9; all.forEach(f => { const d = f.position.distanceTo(this.player.pos); if (d < bd) { bd = d; b = f.position; } }); return b; }
  private wellWater(it: Interactable) { const s = this.s!; this.selectTool("can"); this.face(it.x, it.z);
    this.player.doAction("water", 1.4, "can", () => { const list = s.plots.filter(p => p.crop && !p.wet && p.stage < RIPE && Math.hypot(p.x - it.x, p.z - it.z) < 7);
      if (!list.length) { this.ui.toast("Mấy luống gần giếng đều ướt rồi"); return; }
      list.forEach(p => { this.farming.water(p); this.fx.burst(new THREE.Vector3(p.x, 0.6, p.z), 10, 0x7ad0f0, { up: 1.6, speed: 0.8, size: 0.04 }); }); audio.water(); this.addXP(list.length); this.flag("water"); this.ui.toast(`Đã tưới ${list.length} luống bằng nước giếng`, "good"); this.saveSoon(); }); }
  private collectEggs(id: number) { const b = this.s!.built.find(x => x.id === id); const n = b?.data?.eggs || 0; if (!n) { this.ui.toast("Gà chưa đẻ, mai quay lại nha"); return; }
    const got = this.inv.add("egg", n); if (!got) { this.ui.toast("Kho đồ đầy rồi", "bad"); return; } b!.data.eggs = n - got; audio.pickup(); this.floatAt(this.player.pos.clone().setY(2), `+${got} trứng gà`); this.addXP(2 * got); this.flag("egg"); this.count("eggN", got); this.saveSoon(); }
  // ---------------------------------------------------------------- fishing
  private startFishing(it: Interactable) { if (!this.inv.count("rod")) { this.ui.toast("Mua cần câu ở sạp cô Út trước nha (60 xu)", "bad"); return; }
    const w = it.data as { x: number; z: number; r: number }, pp = this.player.pos, dir = new THREE.Vector3(w.x - pp.x, 0, w.z - pp.z); const dist = dir.length(); dir.normalize();
    const reach = Math.max(1.2, Math.min(3.2, dist - w.r * 0.4)); const at = pp.clone().addScaledVector(dir, reach); if (Math.hypot(at.x - w.x, at.z - w.z) > w.r) at.set(w.x, 0, w.z).addScaledVector(dir, -w.r * 0.5);
    at.y = 0.06; this.face(w.x, w.z); const bob = M.bobber(); bob.position.copy(at); this.scene.add(bob);
    this.fishing = { phase: "wait", t: 0, bite: 2.5 + Math.random() * 4, bob, at }; this.player.action = "fish"; this.player.at = 0; this.player.dur = 9999; this.player.av.hold("rod"); audio.cast(); this.fx.burst(at, 8, 0xbfe6f0, { up: 1.2, speed: 0.6, size: 0.04 }); }
  private stopFishing(msg?: string) { if (!this.fishing) return; this.scene.remove(this.fishing.bob); this.fishing = null; this.player.action = null; this.player.av.hold(null); if (msg) this.ui.toast(msg); }
  private reel() { const f = this.fishing!; if (f.phase !== "bite") { this.stopFishing("Kéo lên sớm quá, cá chưa cắn câu"); return; }
    const r = Math.random(), item = r < 0.06 ? "cavang" : r < 0.33 ? "caloc" : "caro"; const got = this.inv.add(item, 1);
    this.fx.burst(f.at.clone().setY(0.2), 14, 0xbfe6f0, { up: 2.5, speed: 1, size: 0.05 }); audio.splash(); this.stopFishing();
    this.player.doAction("reel", 0.6, "rod"); if (!got) { this.ui.toast("Kho đồ đầy, thả cá về ao", "bad"); return; }
    this.floatAt(this.player.pos.clone().setY(2), `+1 ${ITEMS[item].name}`); this.addXP(item === "cavang" ? 15 : 5); this.flag("fish"); this.count("fishN"); if (item === "cavang") this.ui.toast("Trời ơi! Cá chép vàng hiếm lắm đó!", "good"); this.saveSoon(); }
  private updateFishing(dt: number, moved: boolean) { const f = this.fishing; if (!f) return; if (moved) return this.stopFishing("Thôi câu");
    f.t += dt; const bob = f.bob; bob.position.y = f.at.y + Math.sin(this.elapsed * 3) * 0.02;
    if (f.phase === "wait" && f.t > f.bite) { f.phase = "bite"; f.t = 0; audio.bite(); this.ui.toast("Cá cắn câu! Bấm E / Làm ngay!", "good"); }
    if (f.phase === "bite") { bob.position.y = f.at.y - 0.08 - Math.abs(Math.sin(this.elapsed * 18)) * 0.06; if (f.t > 1.3) { f.phase = "wait"; f.t = 0; f.bite = 2 + Math.random() * 4; this.ui.toast("Cá sổng mất rồi… chờ con khác"); } } }
  // ---------------------------------------------------------------- build mode
  toggleBuild(on = !this.buildOn) { if (on && (this.fishing || this.player.seat)) { this.stopFishing(); this.player.stand(); }
    this.buildOn = on; if (!on) this.build.cancel(); this.ui.buildMode(on); if (on) { this.flag("buildOpen"); } }
  selectBuild(type: string) { const d = BUILD[type]; if (d.level > this.level()) { this.ui.toast(`${d.name} mở ở cấp ${d.level}`, "bad"); audio.error(); return; } this.build.startPlace(type); audio.click(); }
  setBuildTool(t: "remove" | "move" | "off") { this.build.cancel(); if (t !== "off") this.build.mode = t; this.ui.buildStatus(); }
  confirmBuild() { const b = this.build, s = this.s!;
    if (b.mode === "remove" || (b.mode === "move" && !b.moving)) { const t = b.target; if (!t) { this.ui.toast("Đưa khung tới món muốn chọn", "bad"); return; }
      if (b.mode === "move") { const err = b.beginMove(t); if (err) { this.ui.toast(err, "bad"); audio.error(); } else audio.click(); b.marker.visible = false; this.ui.buildStatus(); return; }
      const name = BUILD[t.type].name; this.ui.confirm(`Dỡ ${name}?`, `Nhận lại ${Math.floor(BUILD[t.type].price * 0.5)} xu (một nửa giá).`, "Dỡ", () => { if (t.type === "coop" && t.data?.eggs) this.inv.add("egg", t.data.eggs);
        const r = b.remove(t); if (typeof r === "string") { this.ui.toast(r, "bad"); audio.error(); return; } s.money += r; bus.emit("money", r); audio.place(); this.fx.burst(new THREE.Vector3(t.x, 0.5, t.z), 16, 0xc9a070, { up: 2, speed: 1.4, size: 0.07 }); this.ui.toast(`Đã dỡ ${name} · +${r} xu`); this.saveSoon(); });
      return; }
    if (b.mode !== "place" && b.mode !== "move") return; const d = BUILD[b.type];
    if (!b.valid) { this.ui.toast(b.reason || "Không đặt được chỗ này", "bad"); audio.error(); return; }
    const moving = !!b.moving; if (!moving && s.money < d.price) { this.ui.toast("Không đủ xu", "bad"); audio.error(); return; }
    const placed = b.place(); if (!placed) return; if (!moving) { s.money -= d.price; bus.emit("money", -d.price); this.addXP(d.cat === "house" ? 25 : d.price >= 200 ? 10 : 3); this.flag("build"); this.count("buildN"); }
    audio.build(); this.fx.burst(new THREE.Vector3(placed.x, 0.3, placed.z), 18, 0xe9c48a, { up: 2.2, speed: 1.6, size: 0.07 }); const o = b.objs.get(placed.id); if (o) { o.scale.setScalar(0.2); o.userData.pop = 0; }
    if (!moving && s.money >= d.price) b.startPlace(b.type); this.ui.buildStatus(); this.saveSoon(); }
  private buildCursor(): THREE.Vector3 { const inp = this.input;
    if (performance.now() - inp.mouse.t < 2500 && !this.rig.pov) { const ndc = new THREE.Vector2(inp.mouse.x / innerWidth * 2 - 1, -(inp.mouse.y / innerHeight) * 2 + 1); this.ray.setFromCamera(ndc, this.cam); const hit = new THREE.Vector3(); if (this.ray.ray.intersectPlane(this.ground, hit) && hit.distanceTo(this.player.pos) < 22) return hit; }
    const d = this.build.ghost && BUILD[this.build.type] ? footprint(BUILD[this.build.type], this.build.rot) : { w: 1, d: 1 }, reach = Math.max(d.w, d.d) / 2 + 1.4;
    return this.player.pos.clone().add(new THREE.Vector3(Math.sin(this.player.ry) * reach, 0, Math.cos(this.player.ry) * reach)); }
  // ---------------------------------------------------------------- dialogue with Ngoại
  talk() {
    const s = this.s!, g = this.grandma, first = !s.flags.talk; g.talking = true; this.face(g.pos.x, g.pos.z);
    if (first) this.player.doAction("wave", 1.2, null);
    const line = first ? D.greetLine(s) : this.isRaining() && Math.random() < 0.5 ? D.rainLine() : D.greetLine(s);
    if (first) { this.flag("talk"); g.greet = false; s.friend = Math.min(100, s.friend + 5); }
    this.showTalk(line); this.saveSoon();
  }
  private showTalk(text: string) { const s = this.s!, today = day(s.time), prod = s.inv.find(x => x.id && ITEMS[x.id].kind === "produce"), q = s.quest;
    const qHas = q && !q.done && this.inv.count(q.item) >= q.qty;
    this.ui.dialog(text, [
      q && !q.done ? (qHas ? { k: "qgive", t: `Đưa ngoại ${q.qty} ${ITEMS[q.item].name.toLowerCase()}`, icon: "gift" } : { k: "qask", t: "Ngoại cần con giúp gì?", icon: "book" }) : { k: "chat", t: "Ngoại kể chuyện đi", icon: "chat" },
      { k: "gift", t: prod ? `Tặng ngoại ${ITEMS[prod.id].name.toLowerCase()}` : "Tặng quà (chưa có gì)", icon: "heart", off: !prod },
      { k: "seed", t: s.seedDay === today ? "Đã xin hạt hôm nay rồi" : "Xin ngoại hạt giống", icon: "seed_raumuong", off: s.seedDay === today },
      { k: "bye", t: "Dạ, con đi chơi nghen", icon: "wave" }], k => this.pick(k)); }
  private pick(k: string) { const s = this.s!, today = day(s.time);
    if (k === "bye") return this.endTalk();
    if (k === "chat") { const line = s.talks % 2 ? D.greetLine(s) : D.STORIES[Math.floor(s.talks / 2) % D.STORIES.length]; s.talks++; if (s.flags["chat" + today] == null) { s.flags["chat" + today] = s.time; s.friend = Math.min(100, s.friend + 2); } this.showTalk(line); }
    if (k === "qask") { const q = s.quest!; this.showTalk(D.questAsk(q.qty, ITEMS[q.item].name.toLowerCase(), q.reward)); this.flag("questSeen"); }
    if (k === "qgive") { const q = s.quest!; if (!this.inv.remove(q.item, q.qty)) return; q.done = true; s.money += q.reward; bus.emit("money", q.reward); s.friend = Math.min(100, s.friend + 8); this.addXP(25); this.count("questN"); this.flag("quest"); audio.chime(); this.showTalk(D.questThanks()); }
    if (k === "gift") { const prod = s.inv.find(x => x.id && ITEMS[x.id].kind === "produce"); if (!prod) return; const id = prod.id; this.inv.remove(id, 1);
      s.friend = Math.min(100, s.friend + (s.giftDay === today ? 2 : 10)); s.giftDay = today; this.flag("gift"); this.addXP(3); audio.chime(); this.showTalk(D.giftLine(ITEMS[id].name.toLowerCase())); }
    if (k === "seed") { if (s.seedDay === today) return; s.seedDay = today; const l = this.level(), pool = Object.values(CROPS).filter(c => c.level <= l); const c2 = pool[Math.floor(Math.random() * pool.length)];
      this.inv.add("seed_raumuong", 3); this.inv.add(c2.seedItem, 2); audio.pickup(); this.ui.toast(`Ngoại cho 3 hạt rau muống + 2 ${ITEMS[c2.seedItem].name.toLowerCase()}`, "good"); this.showTalk(D.seedLine()); }
    this.ui.renderHUD(); this.saveSoon(); }
  endTalk() { this.ui.closeDialog(); this.grandma.talking = false; this.saveSoon(); }
  // ---------------------------------------------------------------- frame loop
  private surface(): "grass" | "dirt" | "brick" { const p = this.player.pos; if ((p.x > -8 && p.x < 8 && p.z > -9 && p.z < 0) || Math.hypot(p.x, p.z - 36) < 10) return "brick"; if ((Math.abs(p.x) < 1.6 && p.z > -2) || this.s!.plots.some(q => Math.abs(q.x - p.x) < 1.4 && Math.abs(q.z - p.z) < 1.2)) return "dirt"; return "grass"; }
  private fountainSpray(dt: number) { this.fountainT -= dt; if (this.fountainT > 0) return; this.fountainT = 0.12;
    for (const f of [...this.world.fountains, ...(this.build ? this.build.fountains : [])]) { if (this.player && f.position.distanceTo(this.player.pos) > 35 && this.mode === "play") continue;
      (f.userData.spouts as THREE.Vector3[] | undefined ?? (f.children[0]?.userData.spouts as THREE.Vector3[]) ?? []).forEach((sp, i) => this.fx.burst(f.position.clone().add(sp), i === 0 ? 3 : 2, 0xd8f0fa, { up: i === 0 ? 2.2 : 0.6, speed: i === 0 ? 0.5 : 1.1, size: 0.05, grav: 7, life: 0.9 })); } }
  frame() {
    if (!this.running) return; requestAnimationFrame(() => this.frame());
    const dt = Math.min(this.clock.getDelta(), 0.05); this.elapsed += dt; TIME.value = this.elapsed;
    this.fpsN++; this.fpsT += dt; if (this.fpsT > 0.5) { this.fps = Math.round(this.fpsN / this.fpsT); this.fpsN = 0; this.fpsT = 0; if (this.ui.fpsEl) this.ui.fpsEl.textContent = this.fps + " FPS"; }
    if (this.mode === "title" || !this.s) { const a = this.elapsed * 0.04; this.cam.position.set(Math.sin(a) * 26, 11, 26 + Math.cos(a) * 18); this.cam.lookAt(0, 2, 18);
      this.env.update(dt, 15.5 * 60, new THREE.Vector3(0, 0, 18), this.elapsed); this.critters.update(dt, this.elapsed, 0, new THREE.Vector3(99, 0, 99)); this.fountainSpray(dt); this.fx.update(dt);
      this.grandma.update(dt, 8 * 60, new THREE.Vector3(99, 0, 99), this.world.colliders); this.renderer.render(this.scene, this.cam); this.input.endFrame(); return; }
    const s = this.s, inp = this.input, ui = this.ui;
    if (!this.sleeping) s.time += dt * DAY_MIN / REAL_DAY_SEC; audio.hour = hourOf(s.time);
    const d = day(s.time); if (d > s.lastDay) this.onNewDay(d);
    const rain = this.isRaining(); this.farming.raining = rain; this.env.wantRain = rain; audio.rain(rain); if (rain) this.flag("rain");
    this.farming.tick(dt);
    // keys
    if (inp.hit("Escape")) { if (ui.panel === "dialog") this.endTalk(); else if (ui.panel) ui.closeAll(); else if (this.buildOn) { if (this.build.mode !== "off") { this.build.cancel(); ui.buildStatus(); } else this.toggleBuild(false); } else if (this.fishing) this.stopFishing("Thôi câu"); else ui.toggleMenu(); }
    if (ui.panel === "dialog") { if (inp.hit("KeyE") || inp.hit("Enter")) ui.dialogKey(-1); for (let i = 0; i < 4; i++) if (inp.hit("Digit" + (i + 1))) ui.dialogKey(i); }
    else if (ui.panel === "confirm") { if (inp.hit("Enter") || inp.hit("KeyE")) ui.confirmKey(true); }
    else {
      if (inp.hit("KeyI") && (ui.panel === null || ui.panel === "inv")) ui.toggleInv();
      if (!ui.panel) {
        if (inp.hit("KeyB")) this.toggleBuild();
        if (inp.hit("KeyV")) { this.rig.toggle(); ui.toast(this.rig.pov ? "Góc nhìn thứ nhất" : "Góc nhìn thứ ba"); }
        if (this.buildOn) {
          if (inp.hit("KeyR")) { this.build.rotate(); audio.click(); } if (inp.hit("KeyX")) this.setBuildTool(this.build.mode === "remove" ? "off" : "remove"); if (inp.hit("KeyM")) this.setBuildTool(this.build.mode === "move" ? "off" : "move");
          if (inp.hit("KeyE") || inp.click) this.confirmBuild();
        } else {
          for (let i = 0; i < HOTBAR; i++) if (inp.hit("Digit" + (i + 1))) { s.hotbar = i; ui.renderHotbar(); }
          if (inp.hit("KeyE")) this.interact();
        }
      }
    }
    const blocked = !!ui.panel || this.sleeping, mv = blocked ? { x: 0, z: 0 } : inp.moveVec(), jump = !blocked && inp.hit("Space") && !this.fishing;
    if (!blocked) this.rig.input(inp.look.x, inp.look.y, inp.zoom);
    if (jump && !this.player.air && !this.player.busy() && !this.player.seat) audio.jump();
    const wasAir = this.player.air;
    const fishAct = this.fishing ? this.player.action : null; if (this.fishing) this.player.at = 0.5;
    this.player.update(dt, mv, inp.running(this.runBtn), jump, this.rig.basis(), this.cols, this.rig.pov ? this.rig.yaw : null, run => audio.step(this.surface(), run));
    if (this.fishing && fishAct) { this.player.action = fishAct; this.player.av.hold("rod"); }
    this.updateFishing(dt, Math.hypot(mv.x, mv.z) > 0.2);
    if (wasAir && !this.player.air) audio.land();
    if (this.player.action === "water" && this.player.at > 0.15 && this.player.at < 0.9) { this.player.av.handR.getWorldPosition(this.v); const dd = new THREE.Vector3(Math.sin(this.player.ry) * 0.8, -0.4, Math.cos(this.player.ry) * 0.8); this.fx.pour(this.v.add(dd.clone().multiplyScalar(0.35)), dd); }
    // build ghost
    if (this.buildOn && this.build.mode !== "off") { this.build.aim(this.buildCursor(), this.player.pos); ui.buildStatus(); }
    this.build.objs.forEach(o => { if (o.userData.pop != null) { o.userData.pop += dt * 3; const k = Math.min(1, o.userData.pop); o.scale.setScalar(k < 1 ? 1 + Math.sin(k * Math.PI) * 0.15 - (1 - k) * 0.8 : 1); if (k >= 1) { o.scale.setScalar(1); delete o.userData.pop; } } });
    this.build.update(this.elapsed);
    // NPC
    const g = this.grandma; g.update(dt, s.time, this.player.pos, this.cols.filter(c => c.t === "c"));
    if (g.greet && !g.talking && !ui.panel && Math.hypot(g.pos.x - this.player.pos.x, g.pos.z - this.player.pos.z) < 3 && g.speed === 0) this.talk();
    if (g.talking && ui.panel !== "dialog") g.talking = false;
    this.near = blocked || this.buildOn ? null : this.findNear(); ui.prompt(this.buildOn ? null : this.near?.label || null);
    // world
    this.env.update(dt, s.time, this.player.pos, this.elapsed); this.critters.update(dt, this.elapsed, this.env.night, this.player.pos); this.fountainSpray(dt); this.fx.update(dt);
    this.views.forEach(v => { if (v.bounce <= 0 || !v.crop) return; v.bounce = Math.max(0, v.bounce - dt * 2.2); const k = v.bounce; v.crop.scale.set(1 + Math.sin(k * 9) * 0.12 * k, 1 + Math.sin(k * 9 + 1) * 0.25 * k, 1 + Math.sin(k * 9) * 0.12 * k); });
    this.sparkT -= dt; if (this.sparkT < 0) { this.sparkT = 0.9; s.plots.forEach(p => { if (p.crop && p.stage >= RIPE && Math.hypot(p.x - this.player.pos.x, p.z - this.player.pos.z) < 30) this.fx.burst(new THREE.Vector3(p.x, 0.9, p.z), 2, 0xfff2a0, { up: 0.6, speed: 0.5, grav: -0.4, size: 0.035, life: 1.2, spread: 3 }); }); }
    this.rig.update(dt, this.player.pos, 1.42); this.player.av.root.visible = !this.rig.pov;
    // HUD + saves
    this.hudT -= dt; if (this.hudT < 0) { this.hudT = 0.5; ui.renderHUD(); }
    this.saveT += dt; if (this.saveT > 30) this.save();
    if (this.saveSoonT > 0) { this.saveSoonT -= dt; if (this.saveSoonT <= 0) this.save(); }
    this.renderer.render(this.scene, this.cam); inp.endFrame();
  }
}
export const _pal = PAL; export type _B = Built;
