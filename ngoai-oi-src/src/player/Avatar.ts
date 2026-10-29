import * as THREE from "three";
import { mat } from "../world/materials";
import { Look } from "../core/State";
/** Chibi character built from primitives, animated procedurally with smooth pose blending. */
export const SKINS = [0xf7d2b0, 0xeebc92, 0xd99f6e, 0xb57a4e];
export const HAIR_COLORS = [0x2a1a12, 0x5a3520, 0x8a5a2a, 0xd9a04a, 0x6a6a7a];
export const HAIRS = ["Ngắn", "Xù", "Đuôi ngựa", "Hai búi", "Tóc dài"];
export const OUTFITS = [
  { name: "Áo cam, quần jean", shirt: 0xf28a3a, pants: 0x3a6ab0, skirt: false },
  { name: "Áo xanh ngọc", shirt: 0x2fb5a0, pants: 0xc9b08a, skirt: false },
  { name: "Áo bà ba hồng", shirt: 0xf29ab8, pants: 0x2a2a33, skirt: false },
  { name: "Áo sọc vàng", shirt: 0xf2c84a, pants: 0x4fae4a, skirt: false },
  { name: "Áo trắng, váy đỏ", shirt: 0xf6f4ee, pants: 0xd8433a, skirt: true }
];
export type Action = "plant" | "water" | "harvest" | "build" | "talk" | "wave" | "sweep" | "till" | "pet" | "fish" | "reel" | null;
interface Pose { by: number; bp: number; hp: number; hy: number; alx: number; alz: number; arx: number; arz: number; llx: number; lrx: number; sq: number; }
const ZERO: Pose = { by: 0, bp: 0, hp: 0, hy: 0, alx: 0, alz: 0.12, arx: 0, arz: -0.12, llx: 0, lrx: 0, sq: 1 };
const cap = (r: number, l: number) => new THREE.CapsuleGeometry(r, l, 3, 8);
const sph = (r: number, w = 12, h = 9) => new THREE.SphereGeometry(r, w, h);
function part(geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; return o; }
export class Avatar {
  root = new THREE.Group(); hips = new THREE.Group(); body = new THREE.Group(); head = new THREE.Group();
  armL = new THREE.Group(); armR = new THREE.Group(); legL = new THREE.Group(); legR = new THREE.Group();
  handR = new THREE.Group(); eyes: THREE.Mesh[] = []; held: Record<string, THREE.Object3D> = {};
  pose: Pose = { ...ZERO }; phase = 0; blinkT = 2; t = 0; elder: boolean; sitting = false;
  constructor(look: Look | null, elder = false) { this.elder = elder; this.build(look); }
  private build(look: Look | null) {
    const el = this.elder, skin = mat(el ? 0xf0c8a0 : SKINS[look?.skin ?? 0], { flat: false });
    const of = el ? { shirt: 0x8a6aa0, pants: 0x26262e, skirt: false } : OUTFITS[look?.outfit ?? 0];
    const shirt = mat(of.shirt, { flat: false }), pants = mat(of.pants, { flat: false }), shoe = mat(el ? 0x5a3a2a : 0xf6f6f6, { flat: false });
    this.root.add(this.hips); this.hips.position.y = el ? 0.52 : 0.55; this.hips.add(this.body);
    // torso
    const torso = part(cap(el ? 0.27 : 0.25, el ? 0.28 : 0.24), shirt, 0, 0.3, 0); torso.scale.set(1.05, 1, 0.85); this.body.add(torso);
    if (of.skirt) { const sk = part(new THREE.ConeGeometry(0.34, 0.36, 10), pants, 0, 0.06, 0); this.body.add(sk); }
    if (el) { for (let i = 0; i < 3; i++) this.body.add(part(sph(0.025, 6, 4), mat(0xf2e8d0), 0, 0.42 - i * 0.12, 0.23)); }
    // head
    this.head.position.y = el ? 0.86 : 0.9; this.body.add(this.head);
    const hr = el ? 0.38 : 0.42; const skull = part(sph(hr, 16, 12), skin); skull.scale.set(1, 0.95, 0.95); this.head.add(skull);
    const eyeM = mat(0x241a16, { flat: false }), white = mat(0xffffff, { flat: false });
    [-1, 1].forEach(s => { const e = part(cap(0.045, 0.05), eyeM, s * hr * 0.36, 0.02, hr * 0.86); this.head.add(e); this.eyes.push(e);
      if (!el) this.head.add(part(sph(0.018, 6, 4), white, s * hr * 0.36 + 0.015, 0.06, hr * 0.92));
      const ck = part(sph(0.06, 8, 6), mat(0xff8f8f, { flat: false }), s * hr * 0.6, -0.1, hr * 0.74); ck.scale.z = 0.3; this.head.add(ck);
      this.head.add(part(sph(0.07, 8, 6), skin, s * hr * 0.98, 0, 0)); });
    const mouth = part(new THREE.TorusGeometry(0.05, 0.012, 4, 10, Math.PI), mat(0x8a3a2a), 0, -0.13, hr * 0.9); mouth.rotation.z = Math.PI; this.head.add(mouth);
    this.buildHair(look, hr);
    if (el) { const gl = mat(0x6a4a2a); [-1, 1].forEach(s => { const r = part(new THREE.TorusGeometry(0.075, 0.012, 4, 12), gl, s * hr * 0.36, 0.02, hr * 0.93); this.head.add(r); }); }
    // arms
    [[this.armL, -1], [this.armR, 1]].forEach(([g, s]: any) => { g.position.set(s * (el ? 0.31 : 0.3), 0.48, 0); this.body.add(g);
      const up = part(cap(0.075, 0.2), shirt, 0, -0.16, 0); g.add(up); const hand = part(sph(0.085, 8, 6), skin, 0, -0.36, 0); g.add(hand); });
    this.handR.position.set(0, -0.38, 0.02); this.armR.add(this.handR);
    // legs
    [[this.legL, -1], [this.legR, 1]].forEach(([g, s]: any) => { g.position.set(s * 0.12, 0.02, 0); this.hips.add(g);
      g.add(part(cap(0.09, el ? 0.22 : 0.2), pants, 0, -0.2, 0)); const f = part(cap(0.08, 0.1), shoe, 0, -0.46, 0.05); f.rotation.x = Math.PI / 2; g.add(f); });
    // held props
    const can = new THREE.Group(); can.add(part(new THREE.CylinderGeometry(0.11, 0.13, 0.22, 10), mat(0x3aa39a), 0, -0.05, 0.12));
    const sp = part(new THREE.CylinderGeometry(0.02, 0.03, 0.3, 5), mat(0x3aa39a), 0, 0, 0.32); sp.rotation.x = 1.0; can.add(sp);
    const hoe = new THREE.Group(); hoe.add(part(new THREE.CylinderGeometry(0.025, 0.025, 1.1, 5), mat(0x9a6a3c), 0, 0, 0.1)); const bl = part(new THREE.BoxGeometry(0.22, 0.05, 0.16), mat(0x9aa0a8), 0, -0.55, 0.18); hoe.add(bl);
    const broom = new THREE.Group(); broom.add(part(new THREE.CylinderGeometry(0.025, 0.025, 1.1, 5), mat(0xc9a45a), 0, -0.15, 0.1)); broom.add(part(new THREE.ConeGeometry(0.16, 0.35, 6), mat(0xd9b46a), 0, -0.75, 0.12));
    const ham = new THREE.Group(); ham.add(part(new THREE.CylinderGeometry(0.025, 0.025, 0.4, 5), mat(0x9a6a3c), 0, 0, 0.08)); ham.add(part(new THREE.BoxGeometry(0.16, 0.08, 0.08), mat(0x8a8f98), 0, -0.2, 0.1));
    const seeds = new THREE.Group(); seeds.add(part(sph(0.1, 6, 5), mat(0xd8b47a), 0, -0.04, 0.08));
    const veg = new THREE.Group(); veg.add(part(new THREE.ConeGeometry(0.12, 0.3, 6), mat(0x4fae4a), 0, 0.05, 0.1));
    const rod = new THREE.Group(); const pole = part(new THREE.CylinderGeometry(0.015, 0.03, 2.2, 5), mat(0x9a6a3c), 0, 0, 0); pole.rotation.x = Math.PI / 2 - 0.5; pole.position.set(0, 0.5, 0.95); rod.add(pole);
    const reel = part(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 8), mat(0x5a6a7a), 0.05, 0, 0.1); reel.rotation.z = Math.PI / 2; rod.add(reel);
    Object.entries({ can, hoe, broom, ham, seeds, veg, rod }).forEach(([k, o]) => { o.visible = false; this.handR.add(o); this.held[k] = o; });
    this.root.traverse(o => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true; });
  }
  private buildHair(look: Look | null, hr: number) {
    const hc = mat(this.elder ? 0xdcdcdc : HAIR_COLORS[look?.hairColor ?? 0], { flat: false }), h = this.head;
    const capG = new THREE.SphereGeometry(hr * 1.06, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55); const c = part(capG, hc, 0, 0.04, -0.02); c.rotation.x = -0.25; h.add(c);
    const bangs = part(new THREE.SphereGeometry(hr * 1.02, 14, 6, Math.PI * 1.15, Math.PI * 0.7, 0.35, 0.5), hc, 0, 0.06, 0.02); h.add(bangs);
    if (this.elder) { h.add(part(sph(0.17, 10, 8), hc, 0, 0.05, -hr * 1.02)); return; }
    const style = look?.hair ?? 0;
    if (style === 1) for (let i = 0; i < 7; i++) { const sp = part(new THREE.ConeGeometry(0.1, 0.24, 5), hc, Math.cos(i) * 0.25, hr * 0.85, Math.sin(i) * 0.25 - 0.05); sp.rotation.set(Math.sin(i) * 0.5, 0, -Math.cos(i) * 0.5); h.add(sp); }
    if (style === 2) { const pt = part(cap(0.1, 0.3), hc, 0, -0.1, -hr * 1.05); pt.rotation.x = 0.5; h.add(pt); h.add(part(sph(0.05, 6, 5), mat(0xf26a8a), 0, 0.12, -hr * 1.0)); }
    if (style === 3) [-1, 1].forEach(s => h.add(part(sph(0.15, 10, 8), hc, s * hr * 0.75, hr * 0.62, -0.05)));
    if (style === 4) { const back = part(new THREE.CylinderGeometry(hr * 0.95, hr * 0.9, 0.6, 12, 1, true, Math.PI * 0.5, Math.PI), hc, 0, -0.2, -0.05); h.add(back); }
  }
  hold(k: string | null) { Object.entries(this.held).forEach(([n, o]) => o.visible = n === k); }
  /** speed: m/s on the ground; air: jumping; action: current one-shot action and its 0..1 progress. */
  update(dt: number, speed: number, air: boolean, action: Action, at: number) {
    this.t += dt; const run = speed > 4.2, el = this.elder, tp: Pose = { ...ZERO };
    const sp = Math.min(speed / (el ? 1.8 : 3.2), 1.6); this.phase += dt * (el ? 5 : 8.5) * (run ? 1.35 : 1) * Math.max(0.6, Math.min(speed / 3, 1.4));
    if (this.sitting) { tp.by = -0.18; tp.llx = -1.45; tp.lrx = -1.45; tp.alx = -0.35; tp.arx = -0.35; tp.hp = 0.05 + Math.sin(this.t * 1.2) * 0.03; }
    else if (air) { tp.llx = -0.9; tp.lrx = 0.3; tp.alz = 0.9; tp.arz = -0.9; tp.sq = 1.05; }
    else if (speed > 0.15) { const s = Math.sin(this.phase), a = 0.75 * Math.min(sp, 1.25);
      tp.llx = s * a; tp.lrx = -s * a; tp.alx = -s * a * 0.9; tp.arx = s * a * 0.9; tp.by = Math.abs(Math.cos(this.phase)) * (run ? 0.07 : 0.04); tp.bp = run ? 0.18 : 0.05; }
    else { tp.by = Math.sin(this.t * 2.1) * 0.012; tp.sq = 1 + Math.sin(this.t * 2.1) * 0.012; tp.hy = Math.sin(this.t * 0.6) * 0.15; }
    if (el) tp.bp += 0.16;
    if (action) { const k = Math.sin(Math.min(at, 1) * Math.PI);
      switch (action) {
        case "plant": tp.by -= 0.22 * k; tp.bp += 0.55 * k; tp.arx = -1.2 * k; tp.alx = -0.5 * k; tp.llx = -0.6 * k; tp.lrx = 0.2 * k; break;
        case "till": { const sw = Math.sin(at * Math.PI * 3); tp.bp += 0.3; tp.arx = -1.2 - sw * 0.9; tp.alx = -1.2 - sw * 0.9; tp.by -= 0.05; break; }
        case "water": tp.arx = -1.1; tp.arz = -0.15 - 0.3 * k; tp.bp += 0.15; tp.hp = 0.25; break;
        case "harvest": tp.by -= 0.2 * k; tp.bp += 0.5 * k; tp.arx = -1.3 * k + (at > 0.6 ? 1.6 * (at - 0.6) : 0); tp.alx = -1.3 * k; break;
        case "build": { const sw = Math.sin(at * Math.PI * 6); tp.arx = -1.6 - sw * 0.6; tp.bp += 0.15; break; }
        case "talk": tp.hp = Math.sin(at * 14) * 0.08; tp.arx = -0.5 - Math.sin(at * 9) * 0.2; tp.arz = -0.35; break;
        case "wave": tp.arz = -2.6; tp.arx = 0; tp.arz += Math.sin(at * 22) * 0.3; tp.hy = 0.1; break;
        case "sweep": { const sw = Math.sin(this.t * 3.2); tp.bp += 0.35; tp.arx = -0.6 + sw * 0.15; tp.alx = -0.7 + sw * 0.15; tp.arz = 0.3 + sw * 0.3; tp.alz = -0.1 + sw * 0.3; break; }
        case "fish": tp.arx = -0.9 + Math.sin(this.t * 1.5) * 0.04; tp.alx = -0.8; tp.alz = -0.3; tp.bp += 0.05; break;
        case "reel": tp.arx = -1.6 - k * 0.6; tp.alx = -1.4 - k * 0.5; tp.bp -= 0.15 * k; tp.by += 0.04 * k; break;
        case "pet": tp.by -= 0.25 * k; tp.bp += 0.5 * k; tp.arx = -1.2 * k + Math.sin(at * 18) * 0.15; break; }
    }
    const b = 1 - Math.pow(0.0008, dt), P = this.pose as any, T = tp as any;
    for (const key in P) P[key] += (T[key] - P[key]) * b;
    this.hips.position.y = (el ? 0.52 : 0.55) + P.by; this.body.rotation.x = P.bp; this.body.scale.set(1 / Math.sqrt(P.sq), P.sq, 1 / Math.sqrt(P.sq));
    this.head.rotation.set(P.hp, P.hy, 0); this.armL.rotation.set(P.alx, 0, P.alz); this.armR.rotation.set(P.arx, 0, P.arz); this.legL.rotation.x = P.llx; this.legR.rotation.x = P.lrx;
    this.blinkT -= dt; const bl = this.blinkT < 0.12 ? 0.15 : 1; if (this.blinkT < 0) this.blinkT = 2 + Math.random() * 3; this.eyes.forEach(e => e.scale.y = bl);
  }
}
