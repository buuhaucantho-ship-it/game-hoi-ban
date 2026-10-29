import * as THREE from "three";
import { mat } from "./materials";
import { hen } from "./models";
/** Ambient life: butterflies over the flowers, birds perched on the roof, chickens pecking in the yard. */
export class Critters {
  bf: { g: THREE.Group; wl: THREE.Mesh; wr: THREE.Mesh; home: THREE.Vector3; ph: number; tgt: THREE.Vector3 }[] = [];
  birds: { g: THREE.Group; base: THREE.Vector3; t: number; hop: number }[] = [];
  hens: { g: THREE.Group; head: THREE.Object3D; pos: THREE.Vector3; tgt: THREE.Vector3; wait: number; peck: number }[] = [];
  constructor(scene: THREE.Scene, flowers: THREE.Vector3[], perches: THREE.Vector3[], count: number) {
    const cols = [0xf2c84a, 0xf2a8bc, 0xfbf6ee, 0x9ad0e0, 0xe9743c];
    for (let i = 0; i < count; i++) { const g = new THREE.Group(), m = mat(cols[i % cols.length], { side: THREE.DoubleSide }), wg = new THREE.CircleGeometry(0.13, 6);
      const wl = new THREE.Mesh(wg, m), wr = new THREE.Mesh(wg, m); wl.position.x = -0.1; wr.position.x = 0.1; wl.rotation.x = wr.rotation.x = -Math.PI / 2; g.add(wl, wr, new THREE.Mesh(new THREE.CapsuleGeometry(0.02, 0.12, 2, 4), mat(0x3a2a20)));
      const home = flowers[i % Math.max(1, flowers.length)]?.clone() || new THREE.Vector3(); g.position.copy(home).add(new THREE.Vector3(0, 1, 0)); scene.add(g); this.bf.push({ g, wl, wr, home, ph: Math.random() * 6, tgt: g.position.clone() }); }
    perches.forEach(p => { const g = new THREE.Group(); const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(0x6a5a4a)); body.scale.set(1, 0.9, 1.3); g.add(body);
      const hd = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), mat(0x5a4a3a)); hd.position.set(0, 0.13, 0.14); g.add(hd);
      const bk = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), mat(0xf2b03a)); bk.rotation.x = Math.PI / 2; bk.position.set(0, 0.12, 0.26); g.add(bk);
      g.position.copy(p); scene.add(g); this.birds.push({ g, base: p.clone(), t: Math.random() * 5, hop: 0 }); });
    for (let i = 0; i < 3; i++) { const g = hen(i === 1), head = g.userData.head as THREE.Object3D; g.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = true; });
      const pos = new THREE.Vector3(-4 + i * 3, 0, 3 + i); g.position.copy(pos); scene.add(g); this.hens.push({ g, head, pos, tgt: pos.clone(), wait: 1 + i, peck: 0 }); }
  }
  update(dt: number, t: number, night: number, player: THREE.Vector3) {
    this.bf.forEach(b => { b.g.visible = night < 0.5; if (!b.g.visible) return; b.ph += dt * 18; const f = Math.sin(b.ph) * 1.1; b.wl.rotation.y = f; b.wr.rotation.y = -f;
      if (b.g.position.distanceTo(b.tgt) < 0.3) b.tgt.set(b.home.x + (Math.random() - .5) * 5, 0.6 + Math.random() * 1.4, b.home.z + (Math.random() - .5) * 5);
      const d = b.tgt.clone().sub(b.g.position); b.g.position.addScaledVector(d.normalize(), dt * 1.2); b.g.position.y += Math.sin(t * 5 + b.ph) * dt * 0.3; b.g.rotation.y = Math.atan2(d.x, d.z); });
    this.birds.forEach(b => { b.t -= dt; if (b.t < 0) { b.t = 2 + Math.random() * 5; b.hop = 1; b.g.rotation.y = Math.random() * 6; }
      if (b.hop > 0) { b.hop -= dt * 3; b.g.position.y = b.base.y + Math.sin(Math.max(0, b.hop) * Math.PI) * 0.25; b.g.position.x = b.base.x + (1 - Math.max(0, b.hop)) * 0.3 * Math.sin(b.g.rotation.y); } });
    this.hens.forEach(h => { const d = h.tgt.clone().sub(h.pos); d.y = 0; const pd = h.pos.distanceTo(player);
      if (pd < 1.6) { h.tgt.copy(h.pos).add(h.pos.clone().sub(player).setY(0).normalize().multiplyScalar(2.5)); }
      if (d.length() > 0.2) { h.pos.addScaledVector(d.normalize(), dt * (pd < 1.6 ? 2.6 : 0.9)); h.g.rotation.y = Math.atan2(d.x, d.z); h.g.position.y = Math.abs(Math.sin(t * 12)) * 0.03; h.head.rotation.x = 0; }
      else { h.wait -= dt; h.peck += dt * 9; h.head.rotation.x = Math.max(0, Math.sin(h.peck)) * 0.9; if (h.wait < 0) { h.wait = 2 + Math.random() * 4; h.tgt.set(-6 + Math.random() * 12, 0, -1 + Math.random() * 8); } }
      h.pos.x = Math.max(-8, Math.min(8, h.pos.x)); h.pos.z = Math.max(-2.5, Math.min(9, h.pos.z)); h.g.position.x = h.pos.x; h.g.position.z = h.pos.z; });
  }
}
