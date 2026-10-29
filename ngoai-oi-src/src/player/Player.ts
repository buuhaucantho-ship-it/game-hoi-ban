import * as THREE from "three";
import { Avatar, Action } from "./Avatar";
import { Collider } from "../world/World";
import { Look } from "../core/State";
/** Player controller: camera-relative movement, run, jump, collisions, one-shot actions. */
export class Player {
  av: Avatar; pos = new THREE.Vector3(); vel = new THREE.Vector3(); vy = 0; ry = 0; air = false; speed = 0;
  action: Action = null; at = 0; dur = 1; onActionHit: (() => void) | null = null; hitDone = false; seat: any = null; stepAcc = 0;
  constructor(look: Look) { this.av = new Avatar(look); }
  rebuild(look: Look, scene: THREE.Scene) { scene.remove(this.av.root); this.av = new Avatar(look); scene.add(this.av.root); }
  busy() { return !!this.action && this.at < 1; }
  doAction(a: Action, dur: number, hold: string | null, onHit?: () => void) {
    this.action = a; this.at = 0; this.dur = dur; this.av.hold(hold); this.onActionHit = onHit || null; this.hitDone = false; }
  sit(seat: any) { this.seat = seat; this.av.sitting = true; this.pos.set(seat.x, 0, seat.z); this.ry = seat.ry; }
  stand() { if (!this.seat) return; this.pos.z += 0.8 * Math.cos(this.ry); this.pos.x += 0.8 * Math.sin(this.ry); this.seat = null; this.av.sitting = false; }
  update(dt: number, mv: { x: number; z: number }, run: boolean, jump: boolean, basis: any, colliders: Collider[], povYaw: number | null, onStep: (run: boolean) => void) {
    if (this.seat) { if (mv.x || mv.z || jump) this.stand(); else { this.av.root.position.set(this.seat.x, (this.seat.y ?? 0.95) - 0.32, this.seat.z); this.av.root.rotation.y = this.seat.ry; this.av.update(dt, 0, false, this.action, this.at); this.tickAction(dt); return; } }
    const locked = this.busy() && this.action !== "talk" && this.action !== "wave";
    const want = new THREE.Vector3((basis.rx * mv.x - basis.fx * mv.z), 0, (basis.rz * mv.x - basis.fz * mv.z));
    const mag = Math.min(1, Math.hypot(mv.x, mv.z)); const top = run ? 6 : 3.2;
    if (locked) want.set(0, 0, 0); else if (want.lengthSq() > 0) want.normalize().multiplyScalar(top * mag);
    this.vel.lerp(want, 1 - Math.pow(0.0001, dt));
    this.pos.addScaledVector(this.vel, dt); this.collide(colliders);
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    if (povYaw != null) this.ry = povYaw + Math.PI; else if (this.speed > 0.3) { const tr = Math.atan2(this.vel.x, this.vel.z); let d = tr - this.ry; d = Math.atan2(Math.sin(d), Math.cos(d)); this.ry += d * (1 - Math.pow(0.0005, dt)); }
    if (jump && !this.air && !locked) { this.vy = 5.4; this.air = true; }
    if (this.air) { this.vy -= 15 * dt; this.pos.y += this.vy * dt; if (this.pos.y <= 0) { this.pos.y = 0; this.vy = 0; this.air = false; onStep(true); } }
    if (!this.air && this.speed > 0.6) { this.stepAcc += dt * this.speed; if (this.stepAcc > (run ? 1.3 : 1.05)) { this.stepAcc = 0; onStep(run); } }
    this.av.root.position.copy(this.pos); this.av.root.rotation.y = this.ry;
    this.av.update(dt, this.air ? 0 : this.speed, this.air, this.action, this.at); this.tickAction(dt);
  }
  private tickAction(dt: number) {
    if (!this.action) return; this.at += dt / this.dur;
    if (!this.hitDone && this.at > 0.55) { this.hitDone = true; this.onActionHit?.(); }
    if (this.at >= 1) { this.action = null; this.av.hold(null); }
  }
  collide(cs: Collider[]) { const r = 0.36;
    for (const c of cs) {
      if (c.t === "c") { const dx = this.pos.x - c.x, dz = this.pos.z - c.z, d = Math.hypot(dx, dz), m = c.r + r; if (d < m && d > 1e-4) { this.pos.x = c.x + dx / d * m; this.pos.z = c.z + dz / d * m; } }
      else { const nx = Math.max(c.x0, Math.min(this.pos.x, c.x1)), nz = Math.max(c.z0, Math.min(this.pos.z, c.z1)), dx = this.pos.x - nx, dz = this.pos.z - nz, d = Math.hypot(dx, dz);
        if (d < r) { if (d > 1e-4) { this.pos.x = nx + dx / d * r; this.pos.z = nz + dz / d * r; } else { const l = this.pos.x - c.x0, rr = c.x1 - this.pos.x, t = this.pos.z - c.z0, b = c.z1 - this.pos.z, mn = Math.min(l, rr, t, b);
          if (mn === l) this.pos.x = c.x0 - r; else if (mn === rr) this.pos.x = c.x1 + r; else if (mn === t) this.pos.z = c.z0 - r; else this.pos.z = c.z1 + r; } } } }
  }
}
