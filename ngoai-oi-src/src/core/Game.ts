import * as THREE from "three";
import { GameState, DAY_MIN, REAL_DAY_SEC, hourOf, day, HOTBAR } from "./State";
import { bus } from "./Events";
import { Input } from "./Input";
import { World, Interactable } from "../world/World";
import { Environment } from "../world/Environment";
import { Critters } from "../world/Critters";
import { TIME } from "../world/materials";
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
import { greetLine, giftLine, seedLine, STORIES } from "../data/dialogue";
import { saveGame, wipeSave } from "../save/SaveSystem";
type Q = "low" | "medium" | "high";
const SHADOW: Record<Q, number> = { low: 0, medium: 1024, high: 2048 }, PR: Record<Q, number> = { low: 1, medium: 1.5, high: 2 };
type Near = { kind: string; label: string; it?: Interactable } | null;
/** Wires systems together and runs the frame loop. Game rules live in the systems; this file only orchestrates. */
export class Game {
  renderer: THREE.WebGLRenderer; scene = new THREE.Scene(); cam = new THREE.PerspectiveCamera(55, 1, 0.1, 220); rig: CameraRig; input: Input;
  world: World; env: Environment; critters: Critters; fx: Effects; grandma = new Grandma(); ui: UI;
  s: GameState | null = null; player!: Player; inv!: Inventory; farming!: Farming;
  mode: "title" | "play" = "title"; running = true; runBtn = false; elapsed = 0; clock = new THREE.Clock(); hiddenAt = 0;
  plotMats: THREE.MeshStandardMaterial[] = []; crops: (THREE.Object3D | null)[] = []; ridges: THREE.Group[] = []; bounce = [0, 0, 0, 0, 0, 0];
  near: Near = null; saveT = 0; saveSoonT = -1; hudT = 0; sparkT = 0; fpsT = 0; fpsN = 0; fps = 0; v = new THREE.Vector3();
  constructor(canvas: HTMLCanvasElement, public quality: Q, ui: UI) {
    this.ui = ui;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: quality !== "low", powerPreference: "high-performance" });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, PR[quality])); this.renderer.shadowMap.enabled = SHADOW[quality] > 0;
    this.world = new World(quality); this.scene.add(this.world.group);
    this.env = new Environment(this.scene, this.world.smokeAt, SHADOW[quality]);
    this.critters = new Critters(this.scene, this.world.flowerSpots, this.world.roofPerches, quality === "low" ? 4 : 8);
    this.fx = new Effects(this.scene); this.scene.add(this.grandma.av.root);
    this.rig = new CameraRig(this.cam); this.rig.occluders = this.world.occluders; this.input = new Input(canvas, document.getElementById("joy")!, document.querySelector("#joy .knob")!);
    this.world.plotMeshes.forEach((m, i) => { const pm = new THREE.MeshStandardMaterial({ color: SOIL.untilled, roughness: 1, flatShading: true }); m.material = pm; this.plotMats.push(pm); this.crops.push(null);
      const rg = new THREE.Group(); const rm = new THREE.MeshStandardMaterial({ color: 0x7a5236, roughness: 1, flatShading: true }); [-0.75, 0, 0.75].forEach(z => { const r = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.09, 0.32), rm); r.position.set(0, 0.24, z); r.receiveShadow = true; rg.add(r); });
      rg.visible = false; this.world.plotAnchors[i].add(rg); this.ridges.push(rg); });
    bus.on("plot", (p: any, why: string) => { this.refreshPlot(p.id); if (why !== "water") this.bounce[p.id] = 1; });
    bus.on("plotGrow", (p: any) => { this.refreshPlot(p.id); this.bounce[p.id] = 1; if (this.mode === "play" && this.player && this.player.pos.distanceTo(this.world.plotAnchors[p.id].position) < 14) { audio.grow(); if (p.stage >= RIPE) this.ui.toast(`${CROPS[p.crop].name} chín rồi, hái được rồi nè!`, "good"); } });
    addEventListener("resize", () => this.resize()); this.resize();
    document.addEventListener("visibilitychange", () => this.visibility());
    (window as any).__game = this;
    requestAnimationFrame(() => this.frame());
  }
  resize() { const w = innerWidth, h = innerHeight; this.renderer.setSize(w, h); this.cam.aspect = w / h; this.cam.fov = w < h ? 68 : 55; this.cam.updateProjectionMatrix(); }
  visibility() {
    if (document.hidden) { this.running = false; this.hiddenAt = performance.now(); audio.pause(true); if (this.s) this.save(); }
    else if (!this.running) { this.running = true; const away = (performance.now() - this.hiddenAt) / 1000; if (this.s && away > 1) this.farming.tick(away); this.clock.getDelta(); audio.pause(false); requestAnimationFrame(() => this.frame()); }
  }
  /** Enter play mode with a fresh or loaded state. */
  start(s: GameState, fresh: boolean) {
    this.s = s; this.inv = new Inventory(s); this.farming = new Farming(s, this.inv);
    this.player = new Player(s.look); this.scene.add(this.player.av.root); this.player.pos.set(s.player.x, 0, s.player.z); this.player.ry = s.player.ry;
    this.rig.yaw = s.player.ry - Math.PI; this.cam.position.set(s.player.x, 4, s.player.z + 8);
    if (!fresh) { const off = (Date.now() - s.savedAt) / 1000, before = s.plots.map(p => p.stage).join(); if (off > 3) this.farming.tick(off); if (before !== s.plots.map(p => p.stage).join()) setTimeout(() => this.ui.toast("Lúc con đi vắng, rau ngoài vườn đã lớn thêm đó!", "good"), 1200); }
    this.grandma.greet = !s.flags.talk; if (this.grandma.greet) { this.grandma.pos.set(0, 0, 19); this.grandma.ry = 0; }
    this.ui.mountHUD(s, this); this.applySettings(); s.plots.forEach(p => this.refreshPlot(p.id)); this.mode = "play";
    this.ui.toast(fresh ? "Đi về phía ngoại nha — bấm E để chào!" : `Chào mừng ${s.look.name} quay lại!`);
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
  restart() { sessionStorage.setItem("ngoai-new", "1"); wipeSave().then(() => location.reload()); }
  // ---------- plots
  refreshPlot(i: number) { if (!this.s) return; const p = this.s.plots[i], m = this.plotMats[i], a = this.world.plotAnchors[i];
    m.color.setHex(!p.tilled ? SOIL.untilled : p.wet ? SOIL.wet : SOIL.dry); m.roughness = p.wet ? 0.55 : 1; this.ridges[i].visible = p.tilled;
    (this.ridges[i].children[0] as THREE.Mesh).material && ((this.ridges[i].children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial).color.setHex(p.wet ? 0x4e3420 : 0x7a5236);
    const key = p.crop ? p.crop + p.stage : ""; if (this.crops[i]?.userData.key === key) return;
    if (this.crops[i]) a.remove(this.crops[i]!); this.crops[i] = null;
    if (p.crop) { const c = cropModel(p.crop, p.stage); c.userData.key = key; a.add(c); this.crops[i] = c; } }
  // ---------- interaction
  findNear(): Near { const pp = this.player.pos, g = this.grandma;
    if (this.player.seat) return { kind: "stand", label: "Đứng dậy (đi để đứng)" };
    if (g.visible && Math.hypot(g.pos.x - pp.x, g.pos.z - pp.z) < 2.4) return { kind: "npc", label: g.greet ? "Chào ngoại" : "Nói chuyện với ngoại" };
    const fx = Math.sin(this.player.ry), fz = Math.cos(this.player.ry); let best: Interactable | null = null, bs = 1e9;
    for (const it of this.world.items) { const dx = it.x - pp.x, dz = it.z - pp.z, d = Math.hypot(dx, dz); if (d > it.r) continue;
      const score = d - (d > 0.01 ? (dx * fx + dz * fz) / d : 1) * 0.6; if (score < bs) { bs = score; best = it; } }
    if (!best) return null;
    if (best.kind === "plot") return { kind: "plot", label: this.farming.actionFor(this.s!.plots[best.data]).label, it: best };
    return { kind: best.kind, label: best.label || "", it: best }; }
  private selectTool(id: string) { const i = this.s!.inv.findIndex(x => x.id === id); if (i >= 0 && i < HOTBAR && this.s!.hotbar !== i) { this.s!.hotbar = i; this.ui.renderHotbar(); } }
  private face(x: number, z: number) { this.player.ry = Math.atan2(x - this.player.pos.x, z - this.player.pos.z); }
  interact() {
    const n = this.near; if (!n || this.player.busy()) return; const s = this.s!;
    if (n.kind === "npc") return this.talk();
    const it = n.it!;
    if (n.kind === "plot") { const p = s.plots[it.data], act = this.farming.actionFor(p), at = this.world.plotAnchors[it.data].position; this.face(at.x, at.z);
      const top = at.clone().setY(0.3);
      if (act.kind === "till") { this.selectTool("hoe"); this.player.doAction("till", 1.0, "hoe", () => { this.farming.till(p); audio.hoe(); this.fx.burst(top, 14, 0x8a6040, { up: 2.5, speed: 1.2, size: 0.07 }); this.flag("till"); this.saveSoon(); }); }
      else if (act.kind === "plant") { const sid = CROPS[act.crop!].seedItem; this.selectTool(sid); this.player.doAction("plant", 0.85, "seeds", () => { if (this.farming.plant(p, act.crop!)) { audio.seed(); this.fx.burst(top, 10, 0xd8b47a, { up: 1.5, speed: 0.8, size: 0.04 }); this.flag("plant"); this.saveSoon(); } }); }
      else if (act.kind === "water") { this.selectTool("can"); this.player.doAction("water", 1.3, "can", () => { this.farming.water(p); audio.water(); this.flag("water"); this.saveSoon(); }); }
      else if (act.kind === "harvest") { this.selectTool("hand"); this.player.doAction("harvest", 0.85, "veg", () => { const crop = p.crop!, got = this.farming.harvest(p);
          if (!got) { this.ui.toast("Kho đồ đầy rồi, bán bớt nha!", "bad"); audio.error(); return; }
          audio.harvest(); this.fx.burst(top.clone().setY(0.6), 12, 0x7fd05a, { up: 2.4, speed: 1, size: 0.05 }); this.fx.burst(top.clone().setY(0.8), 8, 0xfff2a0, { up: 1.5, speed: 0.6, size: 0.04, grav: 1 });
          const pop = cropModel(crop, RIPE); pop.scale.setScalar(0.5); this.fx.popItem(pop, top.clone().setY(0.4), () => this.player.pos.clone().setY(1));
          this.floatAt(top.clone().setY(1.4), `+${got} ${ITEMS[CROPS[crop].produceItem].name}`); setTimeout(() => audio.pickup(), 700);
          this.flag("harvest"); s.flags.harvestN = (s.flags.harvestN || 0) + 1; this.saveSoon(); }); }
      else { this.ui.toast(act.label); }
      return; }
    switch (n.kind) {
      case "shop": this.ui.toggleShop(); break;
      case "sit": this.player.sit(it.data); this.flag("sit"); this.ui.toast("Gió ngoài hiên mát rượi…"); audio.place(); break;
      case "jar": this.selectTool("can"); this.player.doAction("water", 0.8, "can", () => { audio.water(); this.ui.toast("Múc nước lu đổ đầy bình tưới rồi!"); }); break;
      case "door": this.ui.toast("Ngoại đang dọn trong nhà — bản sau mới vô được nghen!"); break;
      case "pond": this.ui.toast(hourOf(s.time) >= 18.5 ? "Đom đóm bay lập lòe trên mặt ao sen…" : "Sen nở thơm ngát. Có con cá rô vừa quẫy nước!"); break;
      case "build": this.ui.toast("Khu xây dựng sẽ mở ở bản 0.3 nha!"); break;
    }
  }
  floatAt(p: THREE.Vector3, text: string) { const v = p.clone().project(this.cam); this.ui.float((v.x + 1) / 2 * innerWidth, (1 - v.y) / 2 * innerHeight, text); }
  // ---------- dialogue with Ngoại
  talk() {
    const s = this.s!, g = this.grandma, first = !s.flags.talk; g.talking = true; this.face(g.pos.x, g.pos.z);
    if (first) this.player.doAction("wave", 1.2, null);
    const line = greetLine(s); if (first) { this.flag("talk"); g.greet = false; s.friend = Math.min(100, s.friend + 5); }
    this.showTalk(line); this.saveSoon();
  }
  private showTalk(text: string) { const s = this.s!, today = day(s.time), prod = s.inv.find(x => x.id && ITEMS[x.id].kind === "produce");
    this.ui.dialog(text, [{ k: "chat", t: "Ngoại kể chuyện đi", icon: "chat" }, { k: "gift", t: prod ? `Tặng ngoại ${ITEMS[prod.id].name.toLowerCase()}` : "Tặng rau (chưa có rau)", icon: "gift", off: !prod },
      { k: "seed", t: s.seedDay === today ? "Đã xin hạt hôm nay rồi" : "Xin ngoại hạt giống", icon: "seed_raumuong", off: s.seedDay === today }, { k: "bye", t: "Dạ, con đi chơi nghen", icon: "wave" }], k => this.pick(k)); }
  private pick(k: string) { const s = this.s!, today = day(s.time);
    if (k === "bye") return this.endTalk();
    if (k === "chat") { const line = s.talks % 2 ? greetLine(s) : STORIES[Math.floor(s.talks / 2) % STORIES.length]; s.talks++; if (s.flags["chat" + today] == null) { s.flags["chat" + today] = s.time; s.friend = Math.min(100, s.friend + 2); } this.showTalk(line); }
    if (k === "gift") { const prod = s.inv.find(x => x.id && ITEMS[x.id].kind === "produce"); if (!prod) return; const id = prod.id; this.inv.remove(id, 1);
      s.friend = Math.min(100, s.friend + (s.giftDay === today ? 2 : 10)); s.giftDay = today; this.flag("gift"); audio.chime(); this.showTalk(giftLine(ITEMS[id].name.toLowerCase())); }
    if (k === "seed") { if (s.seedDay === today) return; s.seedDay = today; this.inv.add("seed_raumuong", 3); this.inv.add("seed_caixanh", 2); audio.pickup(); this.ui.toast("Ngoại cho 3 hạt rau muống + 2 hạt cải", "good"); this.showTalk(seedLine()); }
    this.ui.renderHUD(); this.saveSoon(); }
  endTalk() { this.ui.closeDialog(); this.grandma.talking = false; this.saveSoon(); }
  // ---------- frame loop
  private surface(): "grass" | "dirt" | "brick" { const p = this.player.pos; if (p.x > -8 && p.x < 8 && p.z > -9 && p.z < 0) return "brick"; if ((Math.abs(p.x) < 1.6 && p.z > -2) || (p.x > 8 && p.x < 14.5 && p.z > 2 && p.z < 12)) return "dirt"; return "grass"; }
  frame() {
    if (!this.running) return; requestAnimationFrame(() => this.frame());
    const dt = Math.min(this.clock.getDelta(), 0.05); this.elapsed += dt; TIME.value = this.elapsed;
    this.fpsN++; this.fpsT += dt; if (this.fpsT > 0.5) { this.fps = Math.round(this.fpsN / this.fpsT); this.fpsN = 0; this.fpsT = 0; if (this.ui.fpsEl) this.ui.fpsEl.textContent = this.fps + " FPS"; }
    if (this.mode === "title" || !this.s) { const a = this.elapsed * 0.05; this.cam.position.set(Math.sin(a) * 30, 13, Math.cos(a) * 30 + 2); this.cam.lookAt(0, 1.5, -2);
      const tt = 16.6 * 60; this.env.update(dt, tt, new THREE.Vector3(), this.elapsed); this.critters.update(dt, this.elapsed, 0, new THREE.Vector3(99, 0, 99));
      this.grandma.update(dt, 8 * 60, new THREE.Vector3(99, 0, 99), this.world.colliders); this.renderer.render(this.scene, this.cam); this.input.endFrame(); return; }
    const s = this.s, inp = this.input, ui = this.ui;
    s.time += dt * DAY_MIN / REAL_DAY_SEC; audio.hour = hourOf(s.time);
    this.farming.tick(dt);
    // keys
    if (inp.hit("Escape")) { if (ui.panel === "dialog") this.endTalk(); else if (ui.panel) ui.closeAll(); else ui.toggleMenu(); }
    if (ui.panel === "dialog") { if (inp.hit("KeyE") || inp.hit("Enter")) ui.dialogKey(-1); for (let i = 0; i < 4; i++) if (inp.hit("Digit" + (i + 1))) ui.dialogKey(i); }
    else {
      if (inp.hit("KeyI") && (ui.panel === null || ui.panel === "inv")) ui.toggleInv();
      if (!ui.panel) {
        for (let i = 0; i < HOTBAR; i++) if (inp.hit("Digit" + (i + 1))) { s.hotbar = i; ui.renderHotbar(); }
        if (inp.hit("KeyV")) { this.rig.toggle(); ui.toast(this.rig.pov ? "Góc nhìn thứ nhất" : "Góc nhìn thứ ba"); }
        if (inp.hit("KeyB")) ui.toast("Chế độ xây dựng sẽ có ở bản 0.3 — khu đất đã chừa sẵn cạnh vườn!");
        if (inp.hit("KeyE")) this.interact();
      }
    }
    const blocked = !!ui.panel, mv = blocked ? { x: 0, z: 0 } : inp.moveVec(), jump = !blocked && inp.hit("Space");
    if (!blocked) this.rig.input(inp.look.x, inp.look.y, inp.zoom);
    if (jump && !this.player.air && !this.player.busy() && !this.player.seat) audio.jump();
    const wasAir = this.player.air;
    this.player.update(dt, mv, inp.running(this.runBtn), jump, this.rig.basis(), this.world.colliders, this.rig.pov ? this.rig.yaw : null, run => audio.step(this.surface(), run));
    if (wasAir && !this.player.air) audio.land();
    if (this.player.action === "water" && this.player.at > 0.15 && this.player.at < 0.9) { this.player.av.handR.getWorldPosition(this.v); const d = new THREE.Vector3(Math.sin(this.player.ry) * 0.8, -0.4, Math.cos(this.player.ry) * 0.8); this.fx.pour(this.v.add(d.clone().multiplyScalar(0.35)), d); }
    // NPC
    const g = this.grandma; g.update(dt, s.time, this.player.pos, this.world.colliders);
    if (g.greet && !g.talking && !ui.panel && Math.hypot(g.pos.x - this.player.pos.x, g.pos.z - this.player.pos.z) < 3 && g.speed === 0) this.talk();
    if (g.talking && ui.panel !== "dialog") g.talking = false;
    this.near = blocked ? null : this.findNear(); ui.prompt(this.near?.label || null);
    // world
    this.env.update(dt, s.time, this.player.pos, this.elapsed); this.critters.update(dt, this.elapsed, this.env.night, this.player.pos); this.fx.update(dt);
    this.bounce.forEach((b, i) => { if (b <= 0 || !this.crops[i]) return; this.bounce[i] = Math.max(0, b - dt * 2.2); const k = this.bounce[i]; this.crops[i]!.scale.set(1 + Math.sin(k * 9) * 0.12 * k, 1 + Math.sin(k * 9 + 1) * 0.25 * k, 1 + Math.sin(k * 9) * 0.12 * k); });
    this.sparkT -= dt; if (this.sparkT < 0) { this.sparkT = 0.9; s.plots.forEach(p => { if (p.crop && p.stage >= RIPE) this.fx.burst(this.world.plotAnchors[p.id].position.clone().setY(0.9), 2, 0xfff2a0, { up: 0.6, speed: 0.5, grav: -0.4, size: 0.035, life: 1.2, spread: 3 }); }); }
    this.rig.update(dt, this.player.pos, 1.42); this.player.av.root.visible = !this.rig.pov;
    // HUD + saves
    this.hudT -= dt; if (this.hudT < 0) { this.hudT = 0.5; ui.renderHUD(); }
    this.saveT += dt; if (this.saveT > 30) this.save();
    if (this.saveSoonT > 0) { this.saveSoonT -= dt; if (this.saveSoonT <= 0) this.save(); }
    this.renderer.render(this.scene, this.cam); inp.endFrame();
  }
}
