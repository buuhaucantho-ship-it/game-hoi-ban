import * as THREE from "three";
import { mat, PAL } from "../world/materials";
import { compact } from "../util/merge";
/** Species-specific low-poly models for each growth stage. */
const arrow = (() => { const s = new THREE.Shape(); s.moveTo(0, 0.36); s.lineTo(0.13, 0.04); s.lineTo(0.06, 0.07); s.lineTo(0, -0.02); s.lineTo(-0.06, 0.07); s.lineTo(-0.13, 0.04); s.closePath(); return new THREE.ShapeGeometry(s); })();
const stemG = new THREE.CylinderGeometry(0.018, 0.022, 1, 5); stemG.translate(0, 0.5, 0);
const seedG = new THREE.SphereGeometry(0.035, 5, 4), coty = new THREE.SphereGeometry(0.06, 6, 4), leafG = new THREE.SphereGeometry(1, 8, 6);
function seeds(g: THREE.Group, color: number) { const m = mat(color); for (let i = 0; i < 6; i++) { const s = new THREE.Mesh(seedG, m); s.position.set((i % 3 - 1) * 0.5, 0.24, (Math.floor(i / 3) - 0.5) * 0.7); g.add(s); } }
function rauMuong(g: THREE.Group, stage: number) {
  const stem = mat(0x9fd06a, { wind: 0.18 }), leaf = mat(0x3f9a3a, { wind: 0.2, side: THREE.DoubleSide });
  if (stage === 0) return seeds(g, 0x7a5a3a);
  const clumps = [[-0.7, -0.45], [0, -0.45], [0.7, -0.45], [-0.7, 0.45], [0, 0.45], [0.7, 0.45]], n = [0, 3, 5, 8][stage], hgt = [0, 0.12, 0.32, 0.55][stage];
  clumps.forEach(([cx, cz]) => { for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + cx, r = 0.06 + (i % 2) * 0.05, h = hgt * (0.75 + (i % 3) * 0.15);
    const st = new THREE.Mesh(stemG, stem); st.scale.y = h; st.position.set(cx + Math.cos(a) * r, 0.22, cz + Math.sin(a) * r); st.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35); st.castShadow = true; g.add(st);
    const lf = new THREE.Mesh(arrow, leaf); const ls = stage === 1 ? 0.45 : stage === 2 ? 0.75 : 1.05; lf.scale.setScalar(ls);
    lf.position.set(cx + Math.cos(a) * (r + h * 0.35), 0.22 + h, cz + Math.sin(a) * (r + h * 0.35)); lf.rotation.set(-0.6, a + Math.PI / 2, 0); lf.castShadow = true; g.add(lf); } });
}
function caiXanh(g: THREE.Group, stage: number) {
  if (stage === 0) return seeds(g, 0x4a3a2a);
  const pl = [[-0.6, -0.5], [0.6, -0.5], [-0.6, 0.5], [0.6, 0.5]], lm = mat(stage === 3 ? 0x2f8a3a : 0x5fb04a, { wind: 0.1 }), vein = mat(0xcfe8a8);
  pl.forEach(([cx, cz]) => { if (stage === 1) { [-1, 1].forEach(s => { const c = new THREE.Mesh(coty, lm); c.scale.set(1, 0.4, 0.7); c.position.set(cx + s * 0.06, 0.28, cz); g.add(c); }); return; }
    const n = stage === 2 ? 4 : 7, L = stage === 2 ? 0.2 : 0.34;
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + cx * 3, lf = new THREE.Mesh(leafG, lm); lf.scale.set(L * 0.55, 0.03, L);
      const up = stage === 3 ? 0.9 + (i % 2) * 0.25 : 0.6; const piv = new THREE.Group(); piv.position.set(cx, 0.24, cz); piv.rotation.set(0, a, 0); g.add(piv);
      lf.position.set(0, Math.sin(up) * L, Math.cos(up) * L * 0.9); lf.rotation.x = -up; lf.castShadow = true; piv.add(lf);
      if (stage === 3) { const v = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.01, L * 1.6), vein); v.position.copy(lf.position).add(new THREE.Vector3(0, 0.02, 0)); v.rotation.x = -up; piv.add(v); } }
    if (stage === 3) { const heart = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 5), mat(0x7fc05a)); heart.position.set(cx, 0.36, cz); g.add(heart); } });
}
const sp = (r: number) => new THREE.SphereGeometry(r, 8, 6);
const SPOTS4 = [[-0.6, -0.5], [0.6, -0.5], [-0.6, 0.5], [0.6, 0.5]];
function sprout(g: THREE.Group, color: number) { const m = mat(color, { wind: 0.12 }); SPOTS4.forEach(([x, z]) => [-1, 1].forEach(s => { const c = new THREE.Mesh(coty, m); c.scale.set(1, 0.4, 0.7); c.position.set(x + s * 0.06, 0.3, z); g.add(c); })); }
function caChua(g: THREE.Group, stage: number) {
  if (stage === 0) return seeds(g, 0xc9a060); if (stage === 1) return sprout(g, 0x6aa65a);
  const lm = mat(0x5a9a4a, { wind: 0.1 }), st = mat(0x8a6a44), fr = mat(0xe0453a), gfr = mat(0x9ac05a);
  [[-0.6, 0], [0.6, 0]].forEach(([x, z]) => { const h = stage === 2 ? 0.6 : 1.0; const stake = new THREE.Mesh(stemG, st); stake.scale.set(1.4, h + 0.25, 1.4); stake.position.set(x, 0.22, z); g.add(stake);
    for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(sp(0.16), lm); b.position.set(x + Math.cos(i * 2) * 0.18, 0.35 + i * h / 6, z + Math.sin(i * 2) * 0.18); b.scale.y = 0.7; b.castShadow = true; g.add(b); }
    if (stage === 3) for (let i = 0; i < 4; i++) { const f = new THREE.Mesh(sp(0.1), i === 3 ? gfr : fr); f.position.set(x + Math.cos(i * 1.7) * 0.26, 0.45 + i * 0.18, z + Math.sin(i * 1.7) * 0.26); g.add(f); } });
}
function dauBap(g: THREE.Group, stage: number) {
  if (stage === 0) return seeds(g, 0x8a8a5a); if (stage === 1) return sprout(g, 0x7ab05a);
  const st = mat(0x7aa04a, { wind: 0.08 }), lm = mat(0x6aa65a, { wind: 0.12, side: THREE.DoubleSide }), pod = mat(0x9ac85a), fl = mat(0xf6e28a);
  SPOTS4.forEach(([x, z]) => { const h = stage === 2 ? 0.55 : 1.05; const s = new THREE.Mesh(stemG, st); s.scale.set(1.8, h, 1.8); s.position.set(x, 0.22, z); g.add(s);
    for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(arrow, lm); l.scale.setScalar(stage === 2 ? 0.8 : 1.1); l.position.set(x, 0.3 + h * (0.4 + i * 0.25), z); l.rotation.set(-0.8, i * 2.1, 0); g.add(l); }
    if (stage === 3) { for (let i = 0; i < 2; i++) { const p = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.3, 5), pod); p.position.set(x + (i ? 0.1 : -0.1), 0.55 + i * 0.25, z); p.rotation.z = i ? 0.3 : -0.3; g.add(p); }
      const f = new THREE.Mesh(sp(0.07), fl); f.position.set(x, 0.22 + h + 0.05, z); g.add(f); } });
}
function muoiGio(g: THREE.Group, stage: number) {
  if (stage === 0) return seeds(g, 0x6a4a3a);
  const lm = mat(0x7ab84a, { wind: 0.08 }), cols = [0xe8508a, 0xf2a83a, 0xc85ad8, 0xf6e04a, 0xe8433a];
  const n = stage === 1 ? 4 : stage === 2 ? 6 : 8;
  for (let i = 0; i < n; i++) { const x = ((i % 4) - 1.5) * 0.45, z = (Math.floor(i / 4) - 0.5) * 0.7 + (i % 2) * 0.1;
    const b = new THREE.Mesh(sp(stage === 1 ? 0.1 : 0.17), lm); b.scale.y = 0.6; b.position.set(x, 0.3, z); g.add(b);
    if (stage === 3) { const f = new THREE.Mesh(new THREE.CircleGeometry(0.11, 5), mat(cols[i % cols.length], { side: THREE.DoubleSide })); f.rotation.x = -Math.PI / 2; f.position.set(x, 0.42, z); g.add(f);
      const c = new THREE.Mesh(sp(0.03), mat(0xf6e04a)); c.position.set(x, 0.43, z); g.add(c); } }
}
function biDo(g: THREE.Group, stage: number) {
  if (stage === 0) return seeds(g, 0xe8d8a8); if (stage === 1) return sprout(g, 0x7ab05a);
  const lm = mat(0x6aa65a, { wind: 0.06 }), vine = mat(0x8ab04a);
  const n = stage === 2 ? 5 : 8; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, r = stage === 2 ? 0.5 : 0.85; const l = new THREE.Mesh(sp(0.26), lm); l.scale.set(1, 0.3, 1); l.position.set(Math.cos(a) * r, 0.32, Math.sin(a) * r * 0.8); l.castShadow = true; g.add(l);
    const v = new THREE.Mesh(stemG, vine); v.scale.set(1, r, 1); v.position.set(0, 0.3, 0); v.rotation.set(Math.PI / 2, 0, -a + Math.PI / 2); g.add(v); }
  if (stage === 3) { const pm = mat(0xe9843a); const pk = new THREE.Group(); for (let k = 0; k < 6; k++) { const s = new THREE.Mesh(sp(0.32), pm); s.scale.set(0.45, 0.85, 1); s.rotation.y = k / 6 * Math.PI; pk.add(s); }
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.16, 5), mat(0x6a5a3a)); stem.position.y = 0.3; pk.add(stem); pk.position.set(0.1, 0.48, 0.05); pk.traverse(o => o.castShadow = true); g.add(pk); }
}
export function cropModel(crop: string, stage: number) { const g = new THREE.Group();
  ({ raumuong: rauMuong, caixanh: caiXanh, cachua: caChua, daubap: dauBap, muoigio: muoiGio, bido: biDo } as Record<string, (g: THREE.Group, s: number) => void>)[crop]?.(g, stage); return compact(g) as THREE.Group; }
export const SOIL = { untilled: PAL.soilRaw, dry: PAL.soilDry, wet: PAL.soilWet };
