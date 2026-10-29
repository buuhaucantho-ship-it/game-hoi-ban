import * as THREE from "three";
import { mat, PAL, leafTex, texRoof, texSign, texStone, texPave, waterMat, canvasTex } from "./materials";
/** Code-built models in one flat, storybook "vector park" style (palette from the reference art). */
const G = THREE;
export function mesh(geo: THREE.BufferGeometry, m: THREE.Material | THREE.Material[], x = 0, y = 0, z = 0, cast = true) {
  const o = new G.Mesh(geo, m as any); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; return o;
}
export const box = (w: number, h: number, d: number) => new G.BoxGeometry(w, h, d);
export const cyl = (rt: number, rb: number, h: number, s = 8) => new G.CylinderGeometry(rt, rb, h, s);
const sph = (r: number, w = 12, h = 9) => new G.SphereGeometry(r, w, h);
const rx = <T extends THREE.Object3D>(o: T, x: number, z = 0) => { o.rotation.x = x; o.rotation.z = z; return o; };
const rnd = (() => { let s = 11; return () => (s = (s * 9301 + 49297) % 233280) / 233280; })();
// ---------------------------------------------------------------- nature
export type TreeKind = "gold" | "orange" | "tan";
/** Autumn tree: thin dark trunk with forked branches, puffy canopy blobs printed with leaf motifs. */
export function autumnTree(kind: TreeKind = "gold", scale = 1) {
  const g = new G.Group(), bark = mat(PAL.trunk), leaf = mat(0xffffff, { map: leafTex(kind), wind: 0.018 });
  const h = kind === "orange" ? 3.2 : 2.8;
  g.add(mesh(cyl(0.13, 0.24, h, 6), bark, 0, h / 2, 0));
  [[0.5, 0.35], [-0.55, -0.2], [0.15, -0.6]].forEach(([a, b], i) => { const br = mesh(cyl(0.05, 0.09, 1.6, 5), bark, a * 0.6, h + 0.4, b * 0.6); br.rotation.set(b * 0.9, 0, -a * 1.1); g.add(br);
    if (i < 2) { const tw = mesh(cyl(0.03, 0.05, 0.9, 4), bark, a * 1.2, h + 1.1, b * 1.1); tw.rotation.set(-b, 0, a * 1.4); g.add(tw); } });
  const blobs = kind === "orange" ? [[0, 4.6, 0, 1.25], [0.5, 3.7, 0.3, 1.1], [-0.6, 3.9, -0.2, 1.05], [0.1, 3.3, -0.5, 0.9], [0.3, 5.4, 0.1, 0.8]]
    : kind === "gold" ? [[0, 4.2, 0, 1.45], [1.05, 3.6, 0.3, 1.05], [-1.0, 3.8, -0.2, 1.1], [0.3, 5.0, -0.3, 1.0], [-0.4, 3.2, 0.7, 0.9]]
    : [[0, 4.0, 0, 1.6], [1.1, 3.5, 0.2, 1.15], [-1.1, 3.6, -0.1, 1.15], [0.1, 4.9, -0.2, 1.1], [0.3, 3.2, 0.9, 0.95]];
  blobs.forEach(([x, y, z, r]) => { const c = mesh(sph(r, 14, 10), leaf, x, y, z); c.scale.set(1, 0.92, 1); g.add(c); });
  g.scale.setScalar(scale); g.userData.r = 0.45 * scale; return g;
}
export function bush(kind: "tan" | "dots" | "green" = "tan", s = 1) {
  const g = new G.Group();
  const m = kind === "dots" ? mat(0xffffff, { map: dotsTex(), wind: 0.02 }) : kind === "green" ? mat(PAL.leaf, { wind: 0.02 }) : mat(PAL.tan, { wind: 0.02 });
  if (kind === "dots") { const b = mesh(sph(0.7, 12, 9), m, 0, 0.62, 0); b.scale.set(0.8, 1.1, 0.8); g.add(b); }
  else [[0, 0.45, 0, 0.6], [0.55, 0.35, 0.1, 0.45], [-0.5, 0.35, -0.1, 0.48], [0.1, 0.7, -0.2, 0.42]].forEach(([x, y, z, r]) => g.add(mesh(sph(r, 10, 8), m, x, y, z)));
  g.scale.setScalar(s); return g;
}
let _dots: THREE.Texture | null = null;
function dotsTex() { return _dots || (_dots = canvasTex(128, 128, c => { c.fillStyle = "#ecc43c"; c.fillRect(0, 0, 128, 128); c.fillStyle = "#c8483a"; for (let i = 0; i < 18; i++) { c.beginPath(); c.arc((i * 37) % 128, (i * 53) % 128, 3.5, 0, 7); c.fill(); } }, [2, 1])); }
/** Tall feathery ornamental leaves (the pink-veined plant in the reference) */
export function featherPlant() {
  const g = new G.Group(), m = mat(0xd77a8c, { side: G.DoubleSide, wind: 0.06 }), st = mat(0x7a4a4a);
  for (let i = 0; i < 5; i++) { const l = mesh(new G.SphereGeometry(0.22, 8, 6), m, 0, 0, 0); l.scale.set(0.5, 1.6, 0.12); const p = new G.Group(); p.add(l); l.position.y = 0.36;
    p.position.set(0, 0.6 + i * 0.15, 0); p.rotation.set(0.5, i * 1.3, 0.3); g.add(p); g.add(mesh(cyl(0.015, 0.02, 0.8 + i * 0.15, 4), st, 0, (0.8 + i * 0.15) / 2, 0)); }
  return g;
}
function frond(len: number, m: THREE.Material, droop = 0.9) {
  const geo = new G.PlaneGeometry(0.7, len, 1, 6); const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) + len / 2, t = y / len; p.setY(i, y); p.setZ(i, -droop * t * t * len * 0.5); p.setX(i, p.getX(i) * (1 - t * 0.85)); }
  geo.computeVertexNormals(); const o = new G.Mesh(geo, m); o.castShadow = true; return o;
}
export function palm(h = 6, lean = 0.12) {
  const g = new G.Group(), bark = mat(0x9a7456), segs = 6;
  for (let i = 0; i < segs; i++) { const s = mesh(cyl(0.16, 0.2, h / segs + 0.05, 6), bark, Math.sin(i / segs * 1.2) * lean * h * 0.4, h / segs * (i + 0.5), 0); s.rotation.z = -lean * (i / segs); g.add(s); }
  const top = new G.Group(); top.position.set(Math.sin(1.2) * lean * h * 0.4, h, 0); g.add(top);
  const fm = mat(0x8aa45a, { wind: 0.05, side: G.DoubleSide });
  for (let i = 0; i < 7; i++) { const f = frond(2.5, fm); f.rotation.set(1.05, i / 7 * Math.PI * 2, 0, "YXZ"); top.add(f); }
  return g;
}
export function bamboo(n = 6) {
  const g = new G.Group(), cm = mat(0xb6b05a), lm = mat(0x9aaa4a, { wind: 0.06 });
  for (let i = 0; i < n; i++) { const h = 4 + rnd() * 2.5, x = (rnd() - .5) * 1.4, z = (rnd() - .5) * 1.4;
    const c = mesh(cyl(0.06, 0.08, h, 5), cm, x, h / 2, z); c.rotation.z = (rnd() - .5) * .15; g.add(c);
    for (let j = 0; j < 3; j++) { const b = mesh(sph(0.38 + rnd() * .2, 8, 6), lm, x + (rnd() - .5) * .6, h * (0.6 + j * 0.15), z + (rnd() - .5) * .6); b.scale.y = 0.6; g.add(b); } }
  return g;
}
export function rock(s = 1) { const r = mesh(new G.DodecahedronGeometry(0.5 * s, 0), mat(0xa89a9a), 0, 0.25 * s, 0); r.scale.y = 0.6; r.rotation.y = rnd() * 6; return r; }
export function stump() { const g = new G.Group(); g.add(mesh(cyl(0.35, 0.42, 0.45, 8), mat(PAL.woodDark), 0, 0.22, 0)); g.add(mesh(cyl(0.33, 0.33, 0.02, 8), mat(0xd9b07a), 0, 0.46, 0, false)); return g; }
export function weeds() { const g = new G.Group(), m = mat(0xb5a24a, { wind: 0.15 }); for (let i = 0; i < 6; i++) { const c = mesh(new G.ConeGeometry(0.1, 0.5 + rnd() * .3, 3), m, (rnd() - .5) * 0.8, 0.28, (rnd() - .5) * 0.8); g.add(c); } return g; }
// ---------------------------------------------------------------- architecture
export function roofedHouse(o: { w: number; d: number; h: number; wall?: number; roofTex?: boolean; roofColor?: number; door?: boolean; porch?: boolean; trim?: number; shutter?: number }) {
  const g = new G.Group(), wall = mat(o.wall ?? PAL.wall), trim = mat(o.trim ?? PAL.woodDark);
  g.add(mesh(box(o.w + 1, 0.4, o.d + (o.porch ? 3 : 1)), mat(0xc58a6a), 0, 0.2, o.porch ? 1 : 0));
  const fz = o.d / 2, hw = o.w / 2, dw = 1.7, dh = 2.4, wy = 1.3, wh = 1.1, ww = 1.4;
  g.add(mesh(box(o.w, o.h, 0.25), wall, 0, 0.4 + o.h / 2, -fz));
  g.add(mesh(box(0.25, o.h, o.d), wall, -hw, 0.4 + o.h / 2, 0)); g.add(mesh(box(0.25, o.h, o.d), wall, hw, 0.4 + o.h / 2, 0));
  const front = (x0: number, x1: number, y0: number, y1: number) => { if (x1 - x0 > 0.01 && y1 - y0 > 0.01) g.add(mesh(box(x1 - x0, y1 - y0, 0.25), wall, (x0 + x1) / 2, 0.4 + (y0 + y1) / 2, fz)); };
  const wx = Math.min(3.4, hw - 1.2);
  front(-hw, -wx - ww / 2, 0, o.h); front(wx + ww / 2, hw, 0, o.h); front(-wx + ww / 2, -dw / 2, 0, o.h); front(dw / 2, wx - ww / 2, 0, o.h); front(-dw / 2, dw / 2, dh, o.h);
  const sh = mat(o.shutter ?? 0x5a9a9a);
  [-wx, wx].forEach(x => { front(x - ww / 2, x + ww / 2, 0, wy); front(x - ww / 2, x + ww / 2, wy + wh, o.h);
    g.add(mesh(box(0.6, wh, 0.08), sh, x - ww / 2 - 0.32, 0.4 + wy + wh / 2, fz + 0.16)); g.add(mesh(box(0.6, wh, 0.08), sh, x + ww / 2 + 0.32, 0.4 + wy + wh / 2, fz + 0.16));
    g.add(mesh(box(ww, wh, 0.05), mat(0x4a3a4a), x, 0.4 + wy + wh / 2, fz - 0.05, false));
    for (let k = -1; k <= 1; k++) g.add(mesh(box(0.06, wh, 0.06), trim, x + k * 0.4, 0.4 + wy + wh / 2, fz + 0.05)); });
  g.add(mesh(box(dw, dh, 0.05), mat(0x3a2a2a), 0, 0.4 + dh / 2, fz - 0.1, false));
  if (o.door !== false) { const dm = mat(PAL.woodDark); const l = mesh(box(dw / 2, dh, 0.1), dm, -dw / 2 - 0.05, 0.4 + dh / 2, fz + 0.45); l.rotation.y = 1.2; g.add(l);
    const r = mesh(box(dw / 2, dh, 0.1), dm, dw / 2 + 0.05, 0.4 + dh / 2, fz + 0.45); r.rotation.y = -1.2; g.add(r); }
  const over = o.porch ? 3.2 : 0.8, rise = 2.2, halfD = o.d / 2;
  const rm = o.roofTex ? mat(0xffffff, { map: texRoof() }) : mat(o.roofColor ?? PAL.roof);
  const slope = (zFar: number, zNear: number, sign: number) => { const run = Math.abs(zNear - zFar), len = Math.hypot(run, rise);
    const p = mesh(box(o.w + 1.4, 0.18, len), rm, 0, 0.4 + o.h + rise / 2, (zFar + zNear) / 2); p.rotation.x = sign * Math.atan2(rise, run); return p; };
  g.add(slope(0, halfD + over, 1)); g.add(slope(0, -halfD - 0.8, -1));
  const ridge = mesh(cyl(0.16, 0.16, o.w + 1.5, 6), mat(0x8a3a2a), 0, 0.4 + o.h + rise + 0.05, 0); ridge.rotation.z = Math.PI / 2; g.add(ridge);
  const tri = new G.Shape([new G.Vector2(-halfD, 0), new G.Vector2(halfD, 0), new G.Vector2(0, rise)]);
  [-hw, hw].forEach(x => { const t = mesh(new G.ShapeGeometry(tri), mat(o.wall ?? PAL.wall, { side: G.DoubleSide }), x, 0.4 + o.h, 0); t.rotation.y = Math.PI / 2; g.add(t); });
  if (o.porch) { const col = mat(PAL.woodDark); [-hw + 0.4, -1.8, 1.8, hw - 0.4].forEach(x => g.add(mesh(cyl(0.12, 0.14, o.h + 0.3), col, x, 0.4 + (o.h + 0.3) / 2 - 0.15, halfD + over - 0.4))); }
  return g;
}
export function shed() { const g = roofedHouse({ w: 4.4, d: 3.6, h: 2.4, wall: 0xc9945e, roofColor: 0x7a8aa8, door: false }); g.add(mesh(box(1.5, 2.2, 0.12), mat(PAL.woodDark), 0, 1.5, 1.86)); return g; }
export function kitchenHut() {
  const g = new G.Group(); g.add(mesh(box(3.4, 0.3, 3), mat(0xc58a6a), 0, 0.15, 0));
  const w = mat(0xe2bd82); g.add(mesh(box(3, 2.2, 0.15), w, 0, 1.4, -1.3)); g.add(mesh(box(0.15, 2.2, 2.6), w, -1.45, 1.4, 0)); g.add(mesh(box(0.15, 2.2, 2.6), w, 1.45, 1.4, 0));
  const r = mesh(new G.ConeGeometry(2.7, 1.8, 4), mat(0xd6a85a), 0, 3.4, 0); r.rotation.y = Math.PI / 4; g.add(r);
  g.add(mesh(box(0.9, 0.5, 0.9), mat(0x9a7a6a), 0.6, 0.55, -0.6)); g.add(mesh(cyl(0.3, 0.38, 0.6, 8), mat(0x8a4e2c), -0.7, 0.6, 0.6)); return g;
}
export function waterJar() { const j = mesh(sph(0.55, 10, 8), mat(0x9a5a3a), 0, 0.6, 0); j.scale.y = 1.15; const g = new G.Group(); g.add(j); g.add(mesh(cyl(0.3, 0.3, 0.05, 10), mat(0x3a2a2a), 0, 1.22, 0, false)); return g; }
/** Red park bench with backrest and curved dark legs, as in the reference. */
export function bench(w = 2.2) {
  const g = new G.Group(), red = mat(PAL.bench), dark = mat(PAL.benchDark);
  for (let i = 0; i < 3; i++) g.add(mesh(box(w, 0.07, 0.17), red, 0, 0.48, -0.2 + i * 0.2));
  for (let i = 0; i < 3; i++) { const b = mesh(box(w, 0.15, 0.06), red, 0, 0.7 + i * 0.19, -0.33 - i * 0.03); b.rotation.x = -0.12; g.add(b); }
  [-w / 2 + 0.2, w / 2 - 0.2].forEach(x => { g.add(mesh(box(0.08, 0.48, 0.08), dark, x, 0.24, 0.18)); const bl = mesh(box(0.08, 1.1, 0.08), dark, x, 0.55, -0.3); bl.rotation.x = -0.12; g.add(bl);
    g.add(mesh(box(0.08, 0.06, 0.6), dark, x, 0.44, -0.05)); });
  return g;
}
export function chair() { const g = new G.Group(), wd = mat(PAL.wood); g.add(mesh(box(0.6, 0.08, 0.6), wd, 0, 0.48, 0)); g.add(mesh(box(0.6, 0.6, 0.08), wd, 0, 0.8, -0.27));
  [[-.25, -.25], [.25, -.25], [-.25, .25], [.25, .25]].forEach(([x, z]) => g.add(mesh(box(0.07, 0.48, 0.07), wd, x, 0.24, z))); return g; }
export function table() { const g = new G.Group(), wd = mat(PAL.wood); g.add(mesh(cyl(0.6, 0.6, 0.08, 12), wd, 0, 0.7, 0)); g.add(mesh(cyl(0.08, 0.12, 0.7, 6), wd, 0, 0.35, 0)); return g; }
export function sign(text: string, w = 2.4) {
  const g = new G.Group(), wd = mat(PAL.woodDark); g.add(mesh(cyl(0.06, 0.06, 1.4, 5), wd, -w / 2 + 0.2, 0.7, 0)); g.add(mesh(cyl(0.06, 0.06, 1.4, 5), wd, w / 2 - 0.2, 0.7, 0));
  const face = mat(0xffffff, { map: texSign(text) }); g.add(mesh(box(w, w * 0.31, 0.08), [wd, wd, wd, wd, face, face], 0, 1.3, 0)); return g;
}
export function stall() {
  const g = new G.Group(), wd = mat(PAL.wood);
  g.add(mesh(box(2.8, 0.1, 1.2), wd, 0, 0.9, 0)); [[-1.3, -0.5], [1.3, -0.5], [-1.3, 0.5], [1.3, 0.5]].forEach(([x, z]) => g.add(mesh(box(0.1, 0.9, 0.1), wd, x, 0.45, z)));
  [[-1.3, -0.55], [1.3, -0.55]].forEach(([x, z]) => g.add(mesh(box(0.1, 2.3, 0.1), wd, x, 1.15, z)));
  for (let i = 0; i < 6; i++) { const a = mesh(box(0.5, 0.06, 1.6), mat(i % 2 ? 0xfbf3e0 : PAL.bench), -1.25 + i * 0.5, 2.3, 0.1); a.rotation.x = -0.3; g.add(a); }
  const cols = [PAL.leaf2, PAL.gold, PAL.orange, 0x8a5a36];
  for (let i = 0; i < 4; i++) { g.add(mesh(box(0.5, 0.3, 0.5), mat(0xc9945e), -0.95 + i * 0.63, 1.1, 0)); g.add(mesh(box(0.42, 0.06, 0.42), mat(cols[i]), -0.95 + i * 0.63, 1.27, 0)); }
  const s = sign("Sạp cô Út", 2.2); s.position.set(0, 1.4, -0.7); s.scale.setScalar(0.7); g.add(s); return g;
}
export function lotusPond(r: number) {
  const g = new G.Group();
  const bank = mesh(new G.TorusGeometry(r, 0.38, 6, 32), mat(PAL.fountain2), 0, 0.08, 0, false); bank.rotation.x = Math.PI / 2; g.add(bank);
  const pad = mat(0x7aae6a, { side: G.DoubleSide }), flower = mat(0xf2a8bc), center = mat(0xf2d24a);
  for (let i = 0; i < 14; i++) { const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * (r - 1);
    const p = mesh(new G.CircleGeometry(0.45 + rnd() * 0.35, 12, 0.4, Math.PI * 1.8), pad, Math.cos(a) * d, 0.1, Math.sin(a) * d, false); p.rotation.x = -Math.PI / 2; p.rotation.z = rnd() * 6; g.add(p);
    if (i % 3 === 0) { const f = new G.Group(); f.position.set(Math.cos(a) * d + 0.2, 0.15, Math.sin(a) * d);
      for (let k = 0; k < 6; k++) { const pe = mesh(new G.ConeGeometry(0.12, 0.38, 4), flower, Math.cos(k) * 0.1, 0.18, Math.sin(k) * 0.1); pe.rotation.set(Math.sin(k) * 0.5, 0, -Math.cos(k) * 0.5); f.add(pe); }
      f.add(mesh(cyl(0.07, 0.07, 0.06, 6), center, 0, 0.2, 0)); g.add(f); } }
  return g;
}
/** Low purple-stone wall with pale cap stones. Length along x, centred. */
export function stoneWall(len: number, h = 0.9) {
  const g = new G.Group(), tex = texStone([Math.max(1, Math.round(len / 3)), 1]);
  g.add(mesh(box(len, h, 0.6), [mat(PAL.stone), mat(PAL.stone), mat(PAL.cap), mat(PAL.stone), mat(0xffffff, { map: tex }), mat(0xffffff, { map: tex })], 0, h / 2, 0));
  g.add(mesh(box(len + 0.1, 0.14, 0.72), mat(PAL.cap), 0, h + 0.07, 0)); return g;
}
export function railing(len: number) {
  const g = new G.Group(), m = mat(PAL.rail), n = Math.max(1, Math.round(len / 1.4));
  for (let i = 0; i <= n; i++) g.add(mesh(cyl(0.05, 0.05, 0.75, 5), m, -len / 2 + len * i / n, 0.38, 0));
  [0.4, 0.72].forEach(y => { const r = mesh(cyl(0.045, 0.045, len, 5), m, 0, y, 0); r.rotation.z = Math.PI / 2; g.add(r); });
  for (let i = 0; i < n; i++) { const a = mesh(new G.TorusGeometry(0.22, 0.025, 4, 10, Math.PI), m, -len / 2 + len * (i + 0.5) / n, 0.42, 0, false); g.add(a); }
  return g;
}
export function steps(w = 3, n = 4) {
  const g = new G.Group(), m = mat(PAL.step);
  for (let i = 0; i < n; i++) g.add(mesh(box(w, 0.22, 0.45), m, 0, 0.11 + i * 0.22, -i * 0.45));
  [-w / 2 - 0.2, w / 2 + 0.2].forEach(x => { const s = mesh(box(0.4, 0.22 * n + 0.1, 0.45 * n), mat(PAL.rail), x, (0.22 * n + 0.1) / 2, -0.45 * (n - 1) / 2); g.add(s); });
  return g;
}
export const lampGlass = new G.MeshBasicMaterial({ color: 0xfff1b8 });
export function lamp() {
  const g = new G.Group(), m = mat(PAL.lamp), d = mat(0x4f8fb0);
  g.add(mesh(cyl(0.18, 0.24, 0.3, 8), d, 0, 0.15, 0)); g.add(mesh(cyl(0.07, 0.09, 3.4, 8), m, 0, 1.9, 0));
  g.add(mesh(cyl(0.22, 0.12, 0.18, 6), d, 0, 3.65, 0)); g.add(mesh(cyl(0.2, 0.16, 0.55, 6), lampGlass, 0, 4.0, 0, false));
  g.add(mesh(new G.ConeGeometry(0.3, 0.32, 6), d, 0, 4.42, 0)); g.add(mesh(new G.ConeGeometry(0.05, 0.25, 4), d, 0, 4.7, 0));
  const halo = new G.Sprite(haloMat); halo.position.y = 4.0; halo.scale.setScalar(2.2); halo.userData.halo = true; g.add(halo); return g;
}
export const haloMat = new G.SpriteMaterial({ map: canvasTex(64, 64, c => { const gr = c.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(255,240,180,.9)"); gr.addColorStop(1, "rgba(255,240,180,0)"); c.fillStyle = gr; c.fillRect(0, 0, 64, 64); }), transparent: true, depthWrite: false, opacity: 0, blending: G.AdditiveBlending });
/** Three-tier park fountain; userData.spouts gives water emitter points. */
export function fountain(s = 1) {
  const g = new G.Group(), a = mat(PAL.fountain), b = mat(PAL.fountain2), dot = mat(0xd9ddef);
  g.add(mesh(cyl(2.6, 2.8, 0.35, 28), a, 0, 0.18, 0)); g.add(rx(mesh(new G.TorusGeometry(2.45, 0.22, 6, 28), b, 0, 0.62, 0), Math.PI / 2));
  g.add(mesh(cyl(2.45, 2.55, 0.5, 28, ), a, 0, 0.4, 0));
  for (let i = 0; i < 12; i++) { const t = i / 12 * Math.PI * 2; g.add(mesh(sph(0.1, 6, 5), dot, Math.cos(t) * 2.72, 0.2, Math.sin(t) * 2.72, false)); }
  const water = mesh(new G.CircleGeometry(2.3, 28), waterMat(0xa9dcea), 0, 0.6, 0, false); water.rotation.x = -Math.PI / 2; g.add(water);
  g.add(mesh(cyl(0.32, 0.5, 1.3, 10), b, 0, 1.2, 0)); g.add(mesh(cyl(1.25, 0.55, 0.35, 18), a, 0, 1.95, 0)); g.add(mesh(cyl(1.18, 1.18, 0.05, 18), mat(0xa9dcea), 0, 2.12, 0, false));
  g.add(mesh(cyl(0.18, 0.3, 0.9, 10), b, 0, 2.55, 0)); g.add(mesh(cyl(0.7, 0.3, 0.25, 14), a, 0, 3.05, 0)); g.add(mesh(sph(0.22, 10, 8), b, 0, 3.4, 0));
  g.userData.spouts = [new G.Vector3(0, 3.5, 0), new G.Vector3(0, 3.1, 0), new G.Vector3(0, 2.15, 0)]; g.userData.r = 2.8; g.scale.setScalar(s); return g;
}
export function gatePillars(text: string) {
  const g = new G.Group(), st = mat(PAL.stone), cap = mat(PAL.cap);
  [-2.9, 2.9].forEach(x => { g.add(mesh(box(0.8, 2.2, 0.8), [st, st, cap, st, mat(0xffffff, { map: texStone([1, 2]) }), mat(0xffffff, { map: texStone([1, 2]) })], x, 1.1, 0)); g.add(mesh(box(1, 0.2, 1), cap, x, 2.3, 0)); g.add(mesh(sph(0.28, 10, 8), mat(PAL.lamp), x, 2.65, 0)); });
  const bar = mesh(box(6.6, 0.18, 0.2), mat(PAL.rail), 0, 3.2, 0); g.add(bar); [-2.9, 2.9].forEach(x => g.add(mesh(cyl(0.06, 0.06, 1, 5), mat(PAL.rail), x, 2.8, 0)));
  const b = new G.Mesh(new G.PlaneGeometry(3, 0.95), new G.MeshBasicMaterial({ map: texSign(text, "#f6e2b4", "#9a3a2a"), side: G.DoubleSide })); b.position.set(0, 3.2, 0.12); g.add(b);
  return g;
}
// ---------------------------------------------------------------- animals
export function hen(white = false) {
  const g = new G.Group(); const body = mesh(sph(0.26, 10, 8), mat(white ? 0xfbf6ee : 0xc9783a), 0, 0.36, 0); body.scale.set(0.9, 0.85, 1.2); g.add(body);
  const tail = mesh(new G.ConeGeometry(0.12, 0.3, 5), mat(white ? 0xeee6da : 0x5e3b3b), 0, 0.5, -0.3); tail.rotation.x = -0.6; g.add(tail);
  const head = new G.Group(); head.position.set(0, 0.6, 0.24); g.add(head); head.add(mesh(sph(0.13, 8, 6), mat(white ? 0xfbf6ee : 0xd98a4a)));
  head.add(mesh(box(0.04, 0.1, 0.12), mat(0xd8433a), 0, 0.13, 0.02)); const bk = mesh(new G.ConeGeometry(0.035, 0.1, 4), mat(0xf2b03a), 0, 0, 0.15); bk.rotation.x = Math.PI / 2; head.add(bk);
  [-0.08, 0.08].forEach(x => g.add(mesh(cyl(0.015, 0.015, 0.25, 4), mat(0xf2b03a), x, 0.12, 0)));
  g.userData.head = head; return g;
}
// ---------------------------------------------------------------- buildables
export function plotBed() { const g = new G.Group(), b = mat(PAL.woodDark); [[0, -1.2, 2.9, 0.18], [0, 1.2, 2.9, 0.18], [-1.4, 0, 0.18, 2.4], [1.4, 0, 0.18, 2.4]].forEach(([x, z, w, d]) => g.add(mesh(box(w, 0.28, d), b, x, 0.14, z))); return g; }
export function coop() {
  const g = new G.Group(), wd = mat(0xc9945e), dark = mat(PAL.woodDark);
  g.add(mesh(box(2.2, 1.6, 1.8), wd, -0.9, 1.0, -0.6)); g.add(mesh(box(2.3, 0.3, 1.9), dark, -0.9, 0.15, -0.6));
  const r = mesh(box(2.6, 0.12, 2.3), mat(PAL.roof), -0.9, 2.0, -0.6); r.rotation.x = 0.18; g.add(r);
  g.add(mesh(box(0.5, 0.6, 0.05), mat(0x3a2a2a), -0.9, 0.6, 0.31, false)); const ramp = mesh(box(0.4, 0.05, 0.9), dark, -0.9, 0.25, 0.7); ramp.rotation.x = 0.5; g.add(ramp);
  const fm = mat(PAL.rail); [[-2, 1.2], [2, 1.2], [2, -1.5], [-2, -1.5]].forEach(([x, z]) => g.add(mesh(cyl(0.04, 0.04, 0.7, 4), fm, x, 0.35, z)));
  [[0, 1.2, 4, 0], [2, -0.15, 2.7, 1]].forEach(([x, z, L, rot]) => { const rl = mesh(cyl(0.03, 0.03, L, 4), fm, x, 0.55, z); rl.rotation.set(rot ? Math.PI / 2 : 0, 0, rot ? 0 : Math.PI / 2); g.add(rl); });
  const nest = mesh(cyl(0.3, 0.25, 0.15, 10), mat(0xe2c26a), 1.1, 0.08, -0.9); g.add(nest);
  const eggs = new G.Group(); eggs.userData.keep = true; eggs.position.set(1.1, 0.16, -0.9); g.add(eggs); g.userData.eggs = eggs;
  const h1 = hen(), h2 = hen(true); h1.userData.keep = h2.userData.keep = true; h1.position.set(0.6, 0, 0.3); h2.position.set(1.2, 0, -0.2); g.add(h1, h2); g.userData.hens = [h1, h2];
  return g;
}
export const eggMesh = () => { const e = mesh(sph(0.08, 8, 6), mat(0xfbf2e0)); e.scale.y = 1.3; return e; };
export function well() {
  const g = new G.Group(), st = mat(0xb8b0b8), wd = mat(PAL.woodDark);
  g.add(mesh(cyl(0.9, 1, 0.9, 14), st, 0, 0.45, 0)); g.add(rx(mesh(new G.TorusGeometry(0.9, 0.12, 5, 16), mat(PAL.cap), 0, 0.92, 0), Math.PI / 2));
  const w = mesh(new G.CircleGeometry(0.78, 14), waterMat(0x6ab8c8), 0, 0.7, 0, false); w.rotation.x = -Math.PI / 2; g.add(w);
  [-0.85, 0.85].forEach(x => g.add(mesh(box(0.12, 1.9, 0.12), wd, x, 1.4, 0)));
  const ax = mesh(cyl(0.06, 0.06, 1.8, 6), wd, 0, 2.05, 0); ax.rotation.z = Math.PI / 2; g.add(ax);
  const r = mesh(new G.ConeGeometry(1.4, 0.8, 4), mat(PAL.roof), 0, 2.7, 0); r.rotation.y = Math.PI / 4; g.add(r);
  g.add(mesh(cyl(0.18, 0.15, 0.25, 8), mat(PAL.wood), 0.3, 1.5, 0)); return g;
}
export function scarecrow() {
  const g = new G.Group(), wd = mat(PAL.woodDark);
  g.add(mesh(cyl(0.05, 0.06, 2.2, 5), wd, 0, 1.1, 0)); const arm = mesh(cyl(0.04, 0.04, 1.6, 5), wd, 0, 1.55, 0); arm.rotation.z = Math.PI / 2; g.add(arm);
  g.add(mesh(box(0.7, 0.75, 0.3), mat(0x5a8ac0), 0, 1.4, 0)); g.add(mesh(sph(0.25, 10, 8), mat(0xf2e2b0), 0, 2.0, 0));
  g.add(mesh(new G.ConeGeometry(0.55, 0.35, 12), mat(0xe2c26a), 0, 2.3, 0)); g.add(mesh(cyl(0.55, 0.55, 0.03, 12), mat(0xe2c26a), 0, 2.13, 0));
  [-0.8, 0.8].forEach(x => g.add(rx(mesh(new G.ConeGeometry(0.1, 0.3, 5), mat(0xe2c26a), x, 1.5, 0), 0, x > 0 ? -Math.PI / 2 : Math.PI / 2)));
  [-0.08, 0.08].forEach(x => g.add(mesh(sph(0.03, 5, 4), mat(0x3a2a2a), x, 2.03, 0.22, false))); return g;
}
export function cabin() {
  const g = new G.Group(), lg = mat(0xb8794a), lg2 = mat(0xa86a3e), w = 4.2, d = 3.6, h = 2.4;
  g.add(mesh(box(w + 0.6, 0.3, d + 1.4), mat(0x9a8a8a), 0, 0.15, 0.4));
  for (let i = 0; i < 6; i++) { const y = 0.5 + i * 0.4, m = i % 2 ? lg : lg2;
    g.add(mesh(box(w, 0.4, 0.2), m, 0, y, -d / 2)); g.add(mesh(box(0.2, 0.4, d), m, -w / 2, y, 0)); g.add(mesh(box(0.2, 0.4, d), m, w / 2, y, 0));
    g.add(mesh(box(1.45, 0.4, 0.2), m, -w / 2 + 0.72, y, d / 2)); g.add(mesh(box(1.45, 0.4, 0.2), m, w / 2 - 0.72, y, d / 2)); if (y > 2.1) g.add(mesh(box(1.3, 0.4, 0.2), m, 0, y, d / 2)); }
  g.add(mesh(box(1.2, 2, 0.08), mat(0x6e4a32), 0, 1.3, d / 2 + 0.06)); g.add(mesh(box(0.7, 0.6, 0.06), mat(0xfff1b8), -1.35, 1.6, d / 2 + 0.11, false));
  const rise = 1.6; const rm = mat(0xd9743c); [1, -1].forEach(s => { const len = Math.hypot(d / 2 + 0.5, rise); const p = mesh(box(w + 0.9, 0.16, len), rm, 0, 0.3 + h + rise / 2, s * (d / 4 + 0.25)); p.rotation.x = s * Math.atan2(rise, d / 2 + 0.5); g.add(p); });
  const tri = new G.Shape([new G.Vector2(-d / 2, 0), new G.Vector2(d / 2, 0), new G.Vector2(0, rise)]); [-w / 2, w / 2].forEach(x => { const t = mesh(new G.ShapeGeometry(tri), mat(0xb8794a, { side: G.DoubleSide }), x, 0.3 + h, 0); t.rotation.y = Math.PI / 2; g.add(t); });
  g.add(mesh(box(0.5, 1.2, 0.5), mat(0x9a8a8a), 1.3, 0.3 + h + 1.2, -0.6)); return g;
}
export function villa() { const g = roofedHouse({ w: 7, d: 5, h: 3, wall: 0xf6e8cc, roofTex: true, porch: true, trim: 0x6e4a32, shutter: 0xc95a5a }); return g; }
export function gazebo() {
  const g = new G.Group(), wd = mat(PAL.woodDark);
  g.add(mesh(cyl(1.9, 2, 0.25, 8), mat(PAL.step), 0, 0.12, 0));
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; g.add(mesh(cyl(0.08, 0.1, 2.4, 6), wd, Math.cos(a) * 1.6, 1.4, Math.sin(a) * 1.6)); }
  const roof = mesh(new G.ConeGeometry(2.5, 1.5, 6), mat(0xe2b86a), 0, 3.3, 0); g.add(roof); g.add(mesh(sph(0.15, 6, 5), mat(PAL.roof), 0, 4.1, 0));
  const b = bench(1.8); b.position.set(0, 0.2, -0.9); g.add(b); g.add(mesh(cyl(0.45, 0.45, 0.06, 10), mat(PAL.wood), 0, 0.85, 0.4)); g.add(mesh(cyl(0.08, 0.1, 0.6, 6), mat(PAL.wood), 0, 0.55, 0.4)); return g;
}
export function shipBox() { const g = new G.Group(), wd = mat(PAL.wood), dk = mat(PAL.woodDark); g.add(mesh(box(1.3, 0.8, 0.9), wd, 0, 0.4, 0));
  [-0.5, 0, 0.5].forEach(x => g.add(mesh(box(0.08, 0.82, 0.92), dk, x, 0.4, 0))); const lid = mesh(box(1.4, 0.1, 1), dk, 0, 0.85, -0.05); lid.rotation.x = -0.15; g.add(lid);
  g.add(mesh(box(0.5, 0.3, 0.02), mat(0xffffff, { map: texSign("Thùng hàng") }), 0, 0.5, 0.46, false)); return g; }
export function smallPond() { const g = new G.Group(); const w = mesh(new G.CircleGeometry(1.4, 20), waterMat(), 0, 0.06, 0, false); w.rotation.x = -Math.PI / 2; g.add(w);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; const r = rock(0.6 + (i % 3) * 0.15); r.position.set(Math.cos(a) * 1.55, 0.1, Math.sin(a) * 1.55); g.add(r); }
  const p = mesh(new G.CircleGeometry(0.35, 10, 0.3, 5.5), mat(0x7aae6a, { side: G.DoubleSide }), 0.4, 0.08, -0.3, false); p.rotation.x = -Math.PI / 2; g.add(p); g.userData.water = w; return g; }
export function flowerPot(c = 0xe86a8a) { const g = new G.Group(); g.add(mesh(cyl(0.32, 0.24, 0.45, 10), mat(0xc8704a), 0, 0.22, 0)); g.add(mesh(cyl(0.34, 0.34, 0.06, 10), mat(0xb0603e), 0, 0.46, 0));
  const fm = mat(c, { wind: 0.05 }); for (let i = 0; i < 5; i++) { const a = i * 1.26; g.add(mesh(sph(0.11, 7, 5), fm, Math.cos(a) * 0.16, 0.72 + (i % 2) * 0.08, Math.sin(a) * 0.16)); } g.add(mesh(sph(0.22, 8, 6), mat(PAL.leaf, { wind: 0.04 }), 0, 0.56, 0)); return g; }
export function pathTile() { const t = mesh(new G.BoxGeometry(2, 0.05, 2), [mat(PAL.plazaLine), mat(PAL.plazaLine), mat(0xffffff, { map: texPave([1, 1]) }), mat(PAL.plazaLine), mat(PAL.plazaLine), mat(PAL.plazaLine)], 0, 0.03, 0, false); const g = new G.Group(); g.add(t); return g; }
export function fenceSeg() { return railing(2); }
export function wallSeg() { return stoneWall(2, 0.8); }
export function bobber() { const g = new G.Group(); g.add(mesh(sph(0.08, 8, 6), mat(0xe8433a), 0, 0.05, 0, false)); g.add(mesh(sph(0.07, 8, 6, ), mat(0xfbf6ee), 0, 0.12, 0, false)); return g; }
