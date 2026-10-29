import * as THREE from "three";
import { Avatar, Action } from "../player/Avatar";
import { hourOf } from "../core/State";
/** Ngoại: slow walker with a daily routine (sweep, garden, cook, porch, dinner, sleep). */
type Spot = { x: number; z: number; act: Action; hold: string | null; sit?: { x: number; z: number; ry: number; y: number }; face?: number; inside?: boolean; label: string };
export const ROUTINE: { from: number; spots: Spot[] }[] = [
  { from: 5, spots: [{ x: -3, z: -4, act: "sweep", hold: "broom", label: "Ngoại đang quét sân" }, { x: 3, z: -6, act: "sweep", hold: "broom", label: "Ngoại đang quét sân" }, { x: 0, z: -2, act: "sweep", hold: "broom", label: "Ngoại đang quét sân" }] },
  { from: 8, spots: [{ x: 7.6, z: -8.6, act: "plant", hold: "can", label: "Ngoại đang tưới hoa" }, { x: -7.6, z: -8.4, act: "plant", hold: "can", label: "Ngoại đang tưới hoa" }] },
  { from: 10.5, spots: [{ x: 9.2, z: -14, act: null, hold: null, face: Math.PI, label: "Ngoại đang nấu cơm" }] },
  { from: 13, spots: [{ x: 3.4, z: -10.5, act: null, hold: null, sit: { x: 3.4, z: -10.55, ry: 0, y: 0.95 }, label: "Ngoại đang ngồi nghỉ ngoài hiên" }] },
  { from: 16.5, spots: [{ x: -9.2, z: -1, act: "plant", hold: null, label: "Ngoại đang chăm vườn" }, { x: -12, z: 3, act: "plant", hold: null, label: "Ngoại đang chăm vườn" }] },
  { from: 18, spots: [{ x: 4.4, z: -9.6, act: null, hold: null, face: Math.PI, label: "Ngoại dọn mâm cơm" }] },
  { from: 21, spots: [{ x: 0, z: -12.2, act: null, hold: null, inside: true, label: "Ngoại đã vô nhà nghỉ" }] }
];
export class Grandma {
  av = new Avatar(null, true); pos = new THREE.Vector3(0, 0, 23); ry = Math.PI; spot: Spot | null = null; idx = 0; wait = 0; talking = false; visible = true;
  speed = 0; actT = 0; greet = false; label = "";
  constructor() { this.av.root.position.copy(this.pos); }
  routine(h: number) { let r = ROUTINE[ROUTINE.length - 1]; for (const x of ROUTINE) if (h >= x.from) r = x; if (h < 5) r = ROUTINE[ROUTINE.length - 1]; return r; }
  update(dt: number, time: number, player: THREE.Vector3, colliders: any[]) {
    const h = hourOf(time), r = this.routine(h);
    if (!this.spot || !r.spots.includes(this.spot)) { this.spot = r.spots[0]; this.idx = 0; this.av.sitting = false; }
    this.label = this.spot.label;
    let target = this.greet ? new THREE.Vector3(0, 0, 23) : new THREE.Vector3(this.spot.x, 0, this.spot.z);
    const d = Math.hypot(target.x - this.pos.x, target.z - this.pos.z);
    let act: Action = null;
    if (this.talking) { this.speed = 0; const tr = Math.atan2(player.x - this.pos.x, player.z - this.pos.z); this.turn(tr, dt); act = "talk"; this.av.sitting = false; }
    else if (d > 0.35) { this.av.sitting = false; const sp = 1.5; this.speed = sp; const dx = (target.x - this.pos.x) / d, dz = (target.z - this.pos.z) / d;
      this.pos.x += dx * sp * dt; this.pos.z += dz * sp * dt; this.turn(Math.atan2(dx, dz), dt); this.collide(colliders); }
    else { this.speed = 0;
      if (this.spot.sit && !this.greet) { this.av.sitting = true; this.pos.set(this.spot.sit.x, 0, this.spot.sit.z); this.ry = this.spot.sit.ry; }
      else { if (this.spot.face != null) this.turn(this.spot.face, dt); act = this.spot.act;
        this.wait += dt; if (r.spots.length > 1 && this.wait > 9) { this.wait = 0; this.idx = (this.idx + 1) % r.spots.length; this.spot = r.spots[this.idx]; } } }
    if (!this.talking && !this.greet) { const near = Math.hypot(player.x - this.pos.x, player.z - this.pos.z); if (near < 2.2 && this.speed === 0 && !this.av.sitting) { this.turn(Math.atan2(player.x - this.pos.x, player.z - this.pos.z), dt); act = act === "sweep" ? null : act; } }
    this.visible = !(this.spot.inside && d < 0.5 && !this.talking);
    this.av.root.visible = this.visible;
    this.av.hold(this.talking ? null : act === "sweep" ? "broom" : this.spot.hold && act ? this.spot.hold : null);
    this.actT = (this.actT + dt * 0.5) % 1;
    const y = this.av.sitting && this.spot.sit ? this.spot.sit.y - 0.3 : 0;
    this.av.root.position.set(this.pos.x, y, this.pos.z); this.av.root.rotation.y = this.ry;
    this.av.update(dt, this.speed, false, act, act === "talk" ? this.actT : act === "plant" ? 0.5 : this.actT);
  }
  private turn(to: number, dt: number) { let d = to - this.ry; d = Math.atan2(Math.sin(d), Math.cos(d)); this.ry += d * (1 - Math.pow(0.01, dt)); }
  private collide(cs: any[]) { const r = 0.35; for (const c of cs) { if (c.t !== "c") continue; const dx = this.pos.x - c.x, dz = this.pos.z - c.z, d = Math.hypot(dx, dz), m = c.r + r; if (d < m && d > 1e-4) { this.pos.x = c.x + dx / d * m; this.pos.z = c.z + dz / d * m; } } }
}
