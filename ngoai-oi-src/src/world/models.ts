import * as THREE from "three";
import { mat, texRoof, texSign } from "./materials";
/** Code-built low-poly models in one consistent rounded, bright style. */
const G = THREE;
export function mesh(geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, cast = true) {
  const o = new G.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; return o;
}
const box = (w: number, h: number, d: number) => new G.BoxGeometry(w, h, d);
const cyl = (rt: number, rb: number, h: number, s = 7) => new G.CylinderGeometry(rt, rb, h, s);
const ico = (r: number, d = 0) => new G.IcosahedronGeometry(r, d);

export function mangoTree(scale = 1) {
  const g = new G.Group();
  g.add(mesh(cyl(0.22, 0.34, 2.2), mat(0x8a5a36), 0, 1.1, 0));
  const leaf = mat(0x3f9a44, { wind: 0.025 }), leaf2 = mat(0x56b04e, { wind: 0.03 });
  [[0, 3, 0, 1.6, leaf], [1, 2.6, 0.4, 1.15, leaf2], [-0.9, 2.7, -0.3, 1.2, leaf2], [0.2, 3.6, -0.6, 1.05, leaf], [-0.3, 2.5, 0.9, 1.0, leaf]].forEach(([x, y, z, r, m]: any) => {
    const c = mesh(ico(r, 1), m, x, y, z); c.scale.y = 0.85; g.add(c); });
  const fruit = mat(0xe6c23a), fg = new G.SphereGeometry(0.14, 6, 5);
  [[0.9, 2.1, 0.8], [-1, 2.2, 0.5], [0.5, 2.3, -1.1], [-0.4, 2.0, 1.2]].forEach(([x, y, z]) => { const f = mesh(fg, fruit, x, y, z); f.scale.y = 1.4; g.add(f); });
  g.scale.setScalar(scale); return g;
}
function frond(len: number, m: THREE.Material, droop = 0.9) {
  const geo = new G.PlaneGeometry(0.7, len, 1, 6); const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) + len / 2, t = y / len; p.setY(i, y); p.setZ(i, -droop * t * t * len * 0.5); p.setX(i, p.getX(i) * (1 - t * 0.85)); }
  geo.computeVertexNormals(); const o = new G.Mesh(geo, m); o.castShadow = true; return o;
}
export function coconutTree(h = 6, lean = 0.12) {
  const g = new G.Group(), bark = mat(0x9c7a52), segs = 7;
  for (let i = 0; i < segs; i++) { const s = mesh(cyl(0.18, 0.22, h / segs + 0.05, 6), bark, Math.sin(i / segs * 1.2) * lean * h * 0.4, h / segs * (i + 0.5), 0); s.rotation.z = -lean * (i / segs); g.add(s); }
  const top = new G.Group(); top.position.set(Math.sin(1.2) * lean * h * 0.4, h, 0); g.add(top);
  const fm = mat(0x4fae4a, { wind: 0.06, side: G.DoubleSide });
  for (let i = 0; i < 8; i++) { const f = frond(2.6, fm); f.rotation.set(1.05, i / 8 * Math.PI * 2, 0, "YXZ"); top.add(f); }
  const nut = mat(0x6e8a32), ng = ico(0.2, 0); [[0.25, -0.2, 0], [-0.2, -0.25, 0.15], [0, -0.22, -0.25]].forEach(([x, y, z]) => top.add(mesh(ng, nut, x, y, z)));
  return g;
}
export function bananaClump() {
  const g = new G.Group(), stem = mat(0x9ccc5a), lm = mat(0x6cc04a, { wind: 0.05, side: G.DoubleSide });
  for (let k = 0; k < 4; k++) {
    const a = k * 1.7, r = k ? 0.6 : 0, x = Math.cos(a) * r, z = Math.sin(a) * r, h = 1.8 + (k % 2) * 0.6;
    g.add(mesh(cyl(0.12, 0.18, h, 6), stem, x, h / 2, z));
    for (let i = 0; i < 4; i++) { const f = frond(2.0, lm, 0.6); f.scale.x = 1.5; f.position.set(x, h, z); f.rotation.set(0.85, a + i * 1.6, 0, "YXZ"); g.add(f); }
  }
  const bunch = mesh(new G.ConeGeometry(0.28, 0.6, 6), mat(0x9fc23a), 0.25, 1.6, 0.1); bunch.rotation.z = Math.PI; g.add(bunch);
  g.add(mesh(new G.SphereGeometry(0.14, 6, 5), mat(0x8a2e4a), 0.27, 1.15, 0.1));
  return g;
}
export function bamboo(n = 6) {
  const g = new G.Group(), cm = mat(0x8bbf4e), lm = mat(0x5fae3e, { wind: 0.08 });
  for (let i = 0; i < n; i++) { const h = 4 + Math.random() * 2.5, x = (Math.random() - .5) * 1.4, z = (Math.random() - .5) * 1.4;
    const c = mesh(cyl(0.06, 0.08, h, 5), cm, x, h / 2, z); c.rotation.z = (Math.random() - .5) * .15; g.add(c);
    for (let j = 0; j < 3; j++) g.add(mesh(ico(0.35 + Math.random() * .2, 0), lm, x + (Math.random() - .5) * .6, h * (0.6 + j * 0.15), z + (Math.random() - .5) * .6)); }
  return g;
}
export function roofedHouse(o: { w: number; d: number; h: number; wall: number; roofTex?: boolean; roofColor?: number; door?: boolean; porch?: boolean; trim?: number }) {
  const g = new G.Group(), wall = mat(o.wall), trim = mat(o.trim ?? 0x6b4a2c);
  g.add(mesh(box(o.w + 1, 0.4, o.d + (o.porch ? 3 : 1)), mat(0xb9705a), 0, 0.2, o.porch ? 1 : 0));
  // walls with door + two windows on the front (+z)
  const fz = o.d / 2, hw = o.w / 2, dw = 1.7, dh = 2.4, wy = 1.3, wh = 1.1, ww = 1.4;
  g.add(mesh(box(o.w, o.h, 0.25), wall, 0, 0.4 + o.h / 2, -fz));
  g.add(mesh(box(0.25, o.h, o.d), wall, -hw, 0.4 + o.h / 2, 0)); g.add(mesh(box(0.25, o.h, o.d), wall, hw, 0.4 + o.h / 2, 0));
  const front = (x0: number, x1: number, y0: number, y1: number) => g.add(mesh(box(x1 - x0, y1 - y0, 0.25), wall, (x0 + x1) / 2, 0.4 + (y0 + y1) / 2, fz));
  const wx = Math.min(3.4, hw - 1.2);
  front(-hw, -wx - ww / 2, 0, o.h); front(wx + ww / 2, hw, 0, o.h);
  front(-wx + ww / 2, -dw / 2, 0, o.h); front(dw / 2, wx - ww / 2, 0, o.h);
  front(-dw / 2, dw / 2, dh, o.h);
  [-wx, wx].forEach(x => { front(x - ww / 2, x + ww / 2, 0, wy); front(x - ww / 2, x + ww / 2, wy + wh, o.h);
    const sh = mat(0x3aa39a); g.add(mesh(box(0.6, wh, 0.08), sh, x - ww / 2 - 0.32, 0.4 + wy + wh / 2, fz + 0.16)); g.add(mesh(box(0.6, wh, 0.08), sh, x + ww / 2 + 0.32, 0.4 + wy + wh / 2, fz + 0.16));
    g.add(mesh(box(ww, wh, 0.05), mat(0x3a2a20), x, 0.4 + wy + wh / 2, fz - 0.05, false));
    for (let k = -1; k <= 1; k++) g.add(mesh(box(0.06, wh, 0.06), trim, x + k * 0.4, 0.4 + wy + wh / 2, fz + 0.05)); });
  g.add(mesh(box(dw, dh, 0.05), mat(0x2a1e18), 0, 0.4 + dh / 2, fz - 0.1, false));
  if (o.door !== false) { const dm = mat(0x7a4e2c); const l = mesh(box(dw / 2, dh, 0.1), dm, -dw / 2 - 0.05, 0.4 + dh / 2, fz + 0.45); l.rotation.y = 1.2; g.add(l);
    const r = mesh(box(dw / 2, dh, 0.1), dm, dw / 2 + 0.05, 0.4 + dh / 2, fz + 0.45); r.rotation.y = -1.2; g.add(r); }
  // gable roof along x
  const over = o.porch ? 3.2 : 0.8, rise = 2.4, halfD = o.d / 2;
  const rm = o.roofTex ? new G.MeshStandardMaterial({ map: texRoof(), roughness: .85, flatShading: true }) : mat(o.roofColor ?? 0x8aa0b0);
  const slope = (zFar: number, zNear: number, sign: number) => { const run = Math.abs(zNear - zFar), len = Math.hypot(run, rise);
    const p = mesh(box(o.w + 1.4, 0.18, len), rm, 0, 0.4 + o.h + rise / 2, (zFar + zNear) / 2); p.rotation.x = sign * Math.atan2(rise, run); return p; };
  g.add(slope(0, halfD + over, 1)); g.add(slope(0, -halfD - 0.8, -1));
  const ridge = mesh(cyl(0.16, 0.16, o.w + 1.5, 6), mat(o.roofTex ? 0x9e3322 : 0x6a7c8a), 0, 0.4 + o.h + rise + 0.05, 0); ridge.rotation.z = Math.PI / 2; g.add(ridge);
  const tri = new G.Shape([new G.Vector2(-halfD, 0), new G.Vector2(halfD, 0), new G.Vector2(0, rise)]);
  [-hw, hw].forEach(x => { const t = mesh(new G.ShapeGeometry(tri), mat(o.wall, { side: G.DoubleSide }), x, 0.4 + o.h, 0); t.rotation.y = Math.PI / 2; g.add(t); });
  if (o.porch) { const col = mat(0x7a4e2c); [-hw + 0.4, -1.8, 1.8, hw - 0.4].forEach(x => g.add(mesh(cyl(0.12, 0.14, o.h + 0.3), col, x, 0.4 + (o.h + 0.3) / 2 - 0.15, halfD + over - 0.4))); }
  return g;
}
export function shed() {
  const g = roofedHouse({ w: 4.4, d: 3.6, h: 2.4, wall: 0xb88a5a, roofColor: 0x7f95a8, door: false });
  g.add(mesh(box(1.5, 2.2, 0.12), mat(0x6b4a2c), 0, 1.5, 1.86)); return g;
}
export function kitchenHut() {
  const g = new G.Group(); g.add(mesh(box(3.4, 0.3, 3), mat(0xb9705a), 0, 0.15, 0));
  const w = mat(0xd8b47a); g.add(mesh(box(3, 2.2, 0.15), w, 0, 1.4, -1.3)); g.add(mesh(box(0.15, 2.2, 2.6), w, -1.45, 1.4, 0)); g.add(mesh(box(0.15, 2.2, 2.6), w, 1.45, 1.4, 0));
  const thatch = mat(0xc9a45a); const r = mesh(new G.ConeGeometry(2.7, 1.8, 4), thatch, 0, 3.4, 0); r.rotation.y = Math.PI / 4; g.add(r);
  g.add(mesh(box(0.9, 0.5, 0.9), mat(0x8a6a5a), 0.6, 0.55, -0.6));
  g.add(mesh(cyl(0.3, 0.38, 0.6, 8), mat(0x8a4e2c), -0.7, 0.6, 0.6)); return g;
}
export function waterJar(x: number, z: number) { const j = mesh(new G.SphereGeometry(0.55, 9, 7), mat(0x8a5532), x, 0.6, z); j.scale.y = 1.15; return j; }
export function bench(w = 2.2) { const g = new G.Group(), wd = mat(0x8a5a36); g.add(mesh(box(w, 0.12, 0.7), wd, 0, 0.5, 0)); [-w / 2 + 0.15, w / 2 - 0.15].forEach(x => g.add(mesh(box(0.12, 0.5, 0.6), wd, x, 0.25, 0))); return g; }
export function chair() { const g = new G.Group(), wd = mat(0x9a6a3c); g.add(mesh(box(0.6, 0.08, 0.6), wd, 0, 0.48, 0)); g.add(mesh(box(0.6, 0.6, 0.08), wd, 0, 0.8, -0.27));
  [[-.25, -.25], [.25, -.25], [-.25, .25], [.25, .25]].forEach(([x, z]) => g.add(mesh(box(0.07, 0.48, 0.07), wd, x, 0.24, z))); return g; }
export function table() { const g = new G.Group(), wd = mat(0x8a5a36); g.add(mesh(cyl(0.6, 0.6, 0.08, 10), wd, 0, 0.7, 0)); g.add(mesh(cyl(0.08, 0.12, 0.7, 6), wd, 0, 0.35, 0)); return g; }
export function sign(text: string, w = 2.4) {
  const g = new G.Group(); g.add(mesh(cyl(0.06, 0.06, 1.4, 5), mat(0x7a4e2c), -w / 2 + 0.2, 0.7, 0)); g.add(mesh(cyl(0.06, 0.06, 1.4, 5), mat(0x7a4e2c), w / 2 - 0.2, 0.7, 0));
  const b = mesh(box(w, w * 0.31, 0.08), [mat(0x7a4e2c), mat(0x7a4e2c), mat(0x7a4e2c), mat(0x7a4e2c), new G.MeshStandardMaterial({ map: texSign(text) }), mat(0x7a4e2c)] as any, 0, 1.3, 0); g.add(b); return g;
}
export function stall() {
  const g = new G.Group(), wd = mat(0x9a6a3c);
  g.add(mesh(box(2.8, 0.1, 1.2), wd, 0, 0.9, 0)); [[-1.3, -0.5], [1.3, -0.5], [-1.3, 0.5], [1.3, 0.5]].forEach(([x, z]) => g.add(mesh(box(0.1, 0.9, 0.1), wd, x, 0.45, z)));
  [[-1.3, -0.55], [1.3, -0.55]].forEach(([x, z]) => g.add(mesh(box(0.1, 2.3, 0.1), wd, x, 1.15, z)));
  for (let i = 0; i < 6; i++) { const a = mesh(box(0.5, 0.06, 1.6), mat(i % 2 ? 0xf2f0e6 : 0x3aa39a), -1.25 + i * 0.5, 2.3, 0.1); a.rotation.x = -0.3; g.add(a); }
  const cols = [0x6cc04a, 0xe8b23a, 0xe8604a, 0x8a5a36];
  for (let i = 0; i < 4; i++) { g.add(mesh(box(0.5, 0.3, 0.5), mat(0xb88a5a), -0.95 + i * 0.63, 1.1, 0)); g.add(mesh(box(0.42, 0.06, 0.42), mat(cols[i]), -0.95 + i * 0.63, 1.27, 0)); }
  const s = sign("Sạp hạt giống", 2.2); s.position.set(0, 1.4, -0.7); s.scale.setScalar(0.7); g.add(s); return g;
}
export function lotusPond(r: number) {
  const g = new G.Group();
  const bank = mesh(new G.TorusGeometry(r, 0.35, 5, 28), mat(0x8a7a4a), 0, 0.05, 0, false); bank.rotation.x = Math.PI / 2; g.add(bank);
  const pad = mat(0x3f9a44, { side: G.DoubleSide }), flower = mat(0xf29ab8), bud = mat(0xe86a96), center = mat(0xf2d24a);
  for (let i = 0; i < 16; i++) { const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * (r - 1);
    const p = mesh(new G.CircleGeometry(0.45 + Math.random() * 0.35, 10, 0.4, Math.PI * 1.8), pad, Math.cos(a) * d, 0.08, Math.sin(a) * d, false); p.rotation.x = -Math.PI / 2; p.rotation.z = Math.random() * 6; g.add(p);
    if (i % 3 === 0) { const f = new G.Group(); f.position.set(Math.cos(a) * d + 0.2, 0.15, Math.sin(a) * d);
      for (let k = 0; k < 6; k++) { const pe = mesh(new G.ConeGeometry(0.12, 0.38, 4), flower, Math.cos(k) * 0.1, 0.18, Math.sin(k) * 0.1); pe.rotation.set(Math.sin(k) * 0.5, 0, -Math.cos(k) * 0.5); f.add(pe); }
      f.add(mesh(new G.CylinderGeometry(0.07, 0.07, 0.06, 6), center, 0, 0.2, 0)); g.add(f); }
    if (i % 5 === 1) { const b = mesh(new G.ConeGeometry(0.1, 0.32, 5), bud, Math.cos(a) * d - 0.3, 0.45, Math.sin(a) * d); g.add(b); g.add(mesh(cyl(0.02, 0.02, 0.4, 4), mat(0x5a8a3a), Math.cos(a) * d - 0.3, 0.2, Math.sin(a) * d)); }
  }
  return g;
}
export function gateArch(text: string) {
  const g = new G.Group(), bam = mat(0x9a7a3c);
  [-2.6, 2.6].forEach(x => g.add(mesh(cyl(0.18, 0.2, 3.4, 7), bam, x, 1.7, 0)));
  const top = mesh(cyl(0.14, 0.14, 6, 6), bam, 0, 3.3, 0); top.rotation.z = Math.PI / 2; g.add(top);
  const b = new G.Mesh(new G.PlaneGeometry(3, 0.95), new G.MeshStandardMaterial({ map: texSign(text, "#f6e7c4", "#9e3322"), side: G.DoubleSide })); b.position.set(0, 2.8, 0.05); g.add(b);
  const bou = mat(0xe86aa0, { wind: 0.05 }); for (let i = 0; i < 9; i++) g.add(mesh(ico(0.28, 0), i % 2 ? bou : mat(0x5fae3e, { wind: 0.05 }), -2.6 + (i % 3) * 0.2, 3.2 + (i % 2) * 0.2, (i % 3 - 1) * 0.25));
  return g;
}
