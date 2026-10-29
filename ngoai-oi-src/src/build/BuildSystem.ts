import * as THREE from "three";
import { GameState, Built, PlotState, levelOf } from "../core/State";
import { BUILD, BuildDef, footprint } from "../data/buildings";
import { World, Collider, Interactable } from "../world/World";
import * as M from "../world/models";
import { bus } from "../core/Events";
import { compact } from "../util/merge";
type Rect = [number, number, number, number];
const rotV = (x: number, z: number, rot: number) => { const a = rot * Math.PI / 2, c = Math.cos(a), s = Math.sin(a); return [x * c + z * s, -x * s + z * c]; };
/** Placing, moving and removing player-built objects. Pure data lives in state.built; this keeps meshes, colliders and interactables in sync. */
export class BuildSystem {
  group = new THREE.Group(); objs = new Map<number, THREE.Object3D>(); colliders: Collider[] = []; items: Interactable[] = []; rects = new Map<number, Rect>();
  mode: "off" | "place" | "remove" | "move" = "off"; type = ""; rot = 0; ghost: THREE.Group | null = null; pad: THREE.Mesh | null = null; gx = 0; gz = 0; valid = false; reason = "";
  moving: Built | null = null; target: Built | null = null; marker: THREE.Mesh; lampsBuilt: THREE.Object3D[] = []; fountains: THREE.Object3D[] = [];
  ghostOk = new THREE.MeshBasicMaterial({ color: 0x5ad86a, transparent: true, opacity: 0.45, depthWrite: false });
  ghostBad = new THREE.MeshBasicMaterial({ color: 0xe8433a, transparent: true, opacity: 0.45, depthWrite: false });
  constructor(private s: GameState, private world: World, scene: THREE.Scene) {
    scene.add(this.group);
    this.marker = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.1, 32), new THREE.MeshBasicMaterial({ color: 0xe8433a, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide })); this.marker.rotation.x = -Math.PI / 2; this.marker.visible = false; scene.add(this.marker);
    s.built.forEach(b => this.spawn(b));
  }
  def(b: Built | string) { return BUILD[typeof b === "string" ? b : b.type]; }
  rectOf(type: string, x: number, z: number, rot: number): Rect { const f = footprint(BUILD[type], rot); return [x - f.w / 2, z - f.d / 2, x + f.w / 2, z + f.d / 2]; }
  /** Create meshes + colliders + interactables for one built record. */
  spawn(b: Built) {
    const d = this.def(b); if (!d) return; const o = compact(d.model()); o.position.set(b.x, 0, b.z); o.rotation.y = b.rot * Math.PI / 2; o.userData.builtId = b.id; this.group.add(o); this.objs.set(b.id, o);
    this.rects.set(b.id, this.rectOf(b.type, b.x, b.z, b.rot));
    if (b.type === "lamp") this.lampsBuilt.push(o); if (b.type === "fountain") this.fountains.push(o.children[0] ? o : o);
    this.rebuildPhysics();
  }
  private physicsFor(b: Built): { cols: Collider[]; items: Interactable[] } {
    const d = this.def(b), cols: Collider[] = [], items: Interactable[] = [], P = (lx: number, lz: number) => { const [x, z] = rotV(lx, lz, b.rot); return [b.x + x, b.z + z]; };
    if (d.col === "box") { const bx = d.box ?? [-d.w / 2 + 0.1, -d.d / 2 + 0.1, d.w / 2 - 0.1, d.d / 2 - 0.1]; const [ax, az] = P(bx[0], bx[1]), [cx, cz] = P(bx[2], bx[3]);
      cols.push({ t: "b", x0: Math.min(ax, cx), z0: Math.min(az, cz), x1: Math.max(ax, cx), z1: Math.max(az, cz) }); }
    else if (d.col === "circle") cols.push({ t: "c", x: b.x, z: b.z, r: d.r ?? 0.4 });
    else if (d.col === "posts") for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const [x, z] = P(Math.cos(a) * 1.6, Math.sin(a) * 1.6); cols.push({ t: "c", x, z, r: 0.14 }); }
    const door = d.door ? P(d.door[0], d.door[1]) : [b.x, b.z], ry = b.rot * Math.PI / 2, id = "b" + b.id;
    switch (d.kind) {
      case "sit": { const seat = b.type === "gazebo" ? P(0, -0.85) : P(0, 0.05); items.push({ id, kind: "sit", x: b.type === "gazebo" ? b.x : door[0], z: b.type === "gazebo" ? b.z : door[1], r: b.type === "gazebo" ? 1.8 : 1.3, label: b.type === "gazebo" ? "Ngồi nghỉ trong chòi" : "Ngồi ghế", data: { x: seat[0], z: seat[1], ry, y: b.type === "gazebo" ? 0.8 : 0.57 } }); break; }
      case "well": items.push({ id, kind: "well", x: b.x, z: b.z, r: 2.3, label: "Kéo nước giếng tưới vườn", data: b.id }); break;
      case "coop": items.push({ id, kind: "coop", x: door[0], z: door[1], r: 1.8, label: "Lượm trứng gà", data: b.id }); break;
      case "shipbox": items.push({ id, kind: "shipbox", x: door[0], z: door[1], r: 1.4, label: "Bỏ hàng vô thùng", data: b.id }); break;
      case "fish": items.push({ id, kind: "pond", x: b.x, z: b.z, r: 2.7, label: "Câu cá ở ao nhỏ", data: { x: b.x, z: b.z, r: 1.2 } }); break;
      case "sleep": items.push({ id, kind: "sleep", x: door[0], z: door[1], r: 1.6, label: "Vô nhà nghỉ ngơi", data: b.id }); break;
      case "wish": items.push({ id, kind: "wish", x: b.x, z: b.z, r: 4.6, label: "Ước một điều (1 xu)" }); break;
      case "info": items.push({ id, kind: "info", x: b.x, z: b.z, r: 1.2, label: "Bù nhìn canh vườn", data: "Bù nhìn đuổi chim, luống gần đây lớn nhanh hơn!" }); break;
    }
    return { cols, items };
  }
  rebuildPhysics() { this.colliders = []; this.items = []; for (const b of this.s.built) { const p = this.physicsFor(b); this.colliders.push(...p.cols); this.items.push(...p.items); } bus.emit("physics"); }
  // ---------------------------------------------------------------- validation
  private hitsCollider(r: Rect, c: Collider) {
    if (c.t === "b") return r[0] < c.x1 && r[2] > c.x0 && r[1] < c.z1 && r[3] > c.z0;
    const nx = Math.max(r[0], Math.min(c.x, r[2])), nz = Math.max(r[1], Math.min(c.z, r[3])); return Math.hypot(c.x - nx, c.z - nz) < c.r; }
  check(type: string, x: number, z: number, rot: number, player: THREE.Vector3, ignore = -1): { ok: boolean; reason: string } {
    const d = BUILD[type], s = this.s; if (!d) return { ok: false, reason: "?" };
    if (levelOf(s.xp) < d.level) return { ok: false, reason: `Cần cấp ${d.level}` };
    const count = s.built.filter(b => b.type === type && b.id !== ignore).length; if (d.max && count >= d.max) return { ok: false, reason: `Tối đa ${d.max} cái` };
    const r = this.rectOf(type, x, z, rot), sh: Rect = [r[0] + 0.05, r[1] + 0.05, r[2] - 0.05, r[3] - 0.05];
    for (const [px, pz] of [[sh[0], sh[1]], [sh[2], sh[1]], [sh[0], sh[3]], [sh[2], sh[3]], [x, z]]) if (!World.owned(s.lots, px, pz, 0.2)) return { ok: false, reason: "Ngoài đất của mình" };
    for (const c of this.world.colliders) if (this.hitsCollider(sh, c)) return { ok: false, reason: "Vướng đồ vật" };
    for (const c of this.world.lotColliders) if (this.hitsCollider(sh, c)) return { ok: false, reason: "Vướng hàng rào" };
    for (const nb of this.world.noBuild) if (sh[0] < nb[2] && sh[2] > nb[0] && sh[1] < nb[3] && sh[3] > nb[1]) return { ok: false, reason: "Chỗ này để trống" };
    for (const b of s.built) { if (b.id === ignore) continue; const o = this.rects.get(b.id)!; const layered = (type === "path") !== (b.type === "path") && type !== "plot" && b.type !== "plot";
      if (!layered && sh[0] < o[2] && sh[2] > o[0] && sh[1] < o[3] && sh[3] > o[1]) return { ok: false, reason: "Đè lên công trình khác" }; }
    if (d.col !== "none" && d.col !== "posts") { const pc: Collider = { t: "c", x: player.x, z: player.z, r: 0.45 }; if (this.hitsCollider(sh, pc)) return { ok: false, reason: "Đang đứng chỗ đó" }; }
    return { ok: true, reason: "" };
  }
  // ---------------------------------------------------------------- ghost
  startPlace(type: string, moving: Built | null = null) {
    this.clearGhost(); this.mode = moving ? "move" : "place"; this.type = type; this.moving = moving; this.rot = moving ? moving.rot : this.rot;
    const d = BUILD[type], g = new THREE.Group(), m = d.model(); m.traverse(o => { const mm = o as THREE.Mesh; if (mm.isMesh) { mm.material = this.ghostOk; mm.castShadow = false; } if ((o as THREE.Sprite).isSprite) o.visible = false; }); g.add(m);
    const f = footprint(d, 0); this.pad = new THREE.Mesh(new THREE.PlaneGeometry(f.w, f.d), this.ghostOk); this.pad.rotation.x = -Math.PI / 2; this.pad.position.y = 0.05; g.add(this.pad);
    this.ghost = g; this.group.add(g);
  }
  clearGhost() { if (this.ghost) this.group.remove(this.ghost); this.ghost = null; this.pad = null; }
  rotate() { this.rot = (this.rot + 1) % 4; }
  /** Move ghost to a world point (snapped) and re-validate. */
  aim(p: THREE.Vector3, player: THREE.Vector3) {
    if (this.mode === "remove" || (this.mode === "move" && !this.moving)) { (this.marker.material as THREE.MeshBasicMaterial).color.setHex(this.mode === "remove" ? 0xe8433a : 0x3a8ae8); this.target = this.pick(p); if (this.target) { const r = this.rects.get(this.target.id)!; this.marker.visible = true; this.marker.position.set((r[0] + r[2]) / 2, 0.08, (r[1] + r[3]) / 2); this.marker.scale.setScalar(Math.max(r[2] - r[0], r[3] - r[1]) * 0.6 + 0.3); } else this.marker.visible = false; return; }
    if (!this.ghost) return; const f = footprint(BUILD[this.type], this.rot), snap = (v: number, n: number) => (Math.round(n) % 2 ? Math.floor(v) + 0.5 : Math.round(v));
    this.gx = snap(p.x, f.w); this.gz = snap(p.z, f.d);
    this.ghost.position.set(this.gx, 0, this.gz); this.ghost.rotation.y = this.rot * Math.PI / 2;
    const c = this.check(this.type, this.gx, this.gz, this.rot, player, this.moving?.id ?? -1); this.valid = c.ok; this.reason = c.reason;
    const mm = c.ok ? this.ghostOk : this.ghostBad; this.ghost.traverse(o => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = mm; });
    this.ghost.position.y = 0.02 + Math.sin(performance.now() / 200) * 0.03;
  }
  pick(p: THREE.Vector3): Built | null { let best: Built | null = null, bd = 2.2; for (const b of this.s.built) { const r = this.rects.get(b.id)!, nx = Math.max(r[0], Math.min(p.x, r[2])), nz = Math.max(r[1], Math.min(p.z, r[3])), d = Math.hypot(p.x - nx, p.z - nz); if (d < bd) { bd = d; best = b; } } return best; }
  /** Commit a placement; returns the new record. Caller has already charged money (unless moving). */
  place(): Built | null {
    if (!this.valid || !this.ghost) return null; const s = this.s;
    if (this.moving) { const b = this.moving; b.x = this.gx; b.z = this.gz; b.rot = this.rot; this.despawn(b.id); this.spawn(b);
      const p = s.plots.find(p => p.built === b.id); if (p) { p.x = b.x; p.z = b.z; } this.moving = null; this.mode = "off"; this.clearGhost(); bus.emit("built", b, "move"); return b; }
    const b: Built = { id: s.nextId++, type: this.type, x: this.gx, z: this.gz, rot: this.rot };
    if (b.type === "coop") b.data = { eggs: 0 };
    s.built.push(b); this.spawn(b);
    if (b.type === "plot") { const id = Math.max(-1, ...s.plots.map(p => p.id)) + 1; const p: PlotState = { id, x: b.x, z: b.z, tilled: false, wet: false, crop: null, stage: 0, progress: 0, built: b.id }; s.plots.push(p); bus.emit("plotAdd", p); }
    bus.emit("built", b, "place"); return b;
  }
  /** Pick up an item to move it (keeps it in state; mesh hidden until placed or cancelled). */
  beginMove(b: Built): string | null { const p = this.s.plots.find(p => p.built === b.id); if (p && p.crop) return "Luống đang có cây, thu hoạch trước nha";
    const o = this.objs.get(b.id); if (o) o.visible = false; this.startPlace(b.type, b); return null; }
  cancel() { if (this.moving) { const o = this.objs.get(this.moving.id); if (o) o.visible = true; } this.moving = null; this.clearGhost(); this.mode = "off"; this.marker.visible = false; this.target = null; }
  /** Remove; returns refund (or an error string). */
  remove(b: Built): number | string {
    const s = this.s, p = s.plots.find(p => p.built === b.id); if (p && p.crop) return "Luống đang có cây, thu hoạch trước nha";
    if (p) { s.plots.splice(s.plots.indexOf(p), 1); bus.emit("plotRemove", p); }
    s.built.splice(s.built.indexOf(b), 1); this.despawn(b.id); this.rebuildPhysics(); this.marker.visible = false; this.target = null; bus.emit("built", b, "remove");
    return Math.floor(BUILD[b.type].price * 0.5);
  }
  private despawn(id: number) { const o = this.objs.get(id); if (o) { this.group.remove(o); this.lampsBuilt = this.lampsBuilt.filter(l => l !== o); this.fountains = this.fountains.filter(f => f !== o); } this.objs.delete(id); this.rects.delete(id); }
  /** Per-frame: coop hens peck, eggs shown. */
  update(t: number) {
    for (const b of this.s.built) { if (b.type !== "coop") continue; const o = this.objs.get(b.id); if (!o) continue; const inner = o.children[0] ?? o; const hens = (o.userData.hens || inner.userData?.hens) as THREE.Object3D[] | undefined;
      hens?.forEach((h, i) => { const head = h.userData.head as THREE.Object3D; head.rotation.x = Math.max(0, Math.sin(t * 6 + i * 2)) * 0.9; h.position.x = (i ? 1.2 : 0.6) + Math.sin(t * 0.5 + i) * 0.4; h.rotation.y = Math.sin(t * 0.5 + i) > 0 ? 1.2 : -1.2; });
      const eggs = (o.userData.eggs) as THREE.Group; const n = b.data?.eggs || 0; if (eggs && eggs.children.length !== n) { eggs.clear(); for (let i = 0; i < n; i++) { const e = M.eggMesh(); e.position.set((i % 3 - 1) * 0.12, 0, Math.floor(i / 3) * 0.12 - 0.06); eggs.add(e); } } }
  }
  defOf(type: string): BuildDef { return BUILD[type]; }
}
