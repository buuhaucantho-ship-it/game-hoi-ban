import * as THREE from "three";
import { mat } from "../world/materials";
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
export function cropModel(crop: string, stage: number) { const g = new THREE.Group(); if (crop === "raumuong") rauMuong(g, stage); else caiXanh(g, stage); return g; }
export const SOIL = { untilled: 0x8a9a5a, dry: 0x9a7048, wet: 0x5e4028 };
