import * as THREE from "three";
/** Particle pool on a single InstancedMesh (one draw call): seeds, water, dust, leaves, sparkles. */
interface P { p: THREE.Vector3; v: THREE.Vector3; life: number; max: number; s: number; g: number; c: THREE.Color; }
export class Effects {
  im: THREE.InstancedMesh; ps: P[] = []; m4 = new THREE.Matrix4(); q = new THREE.Quaternion(); sc = new THREE.Vector3(); max: number;
  pops: { o: THREE.Object3D; t: number; from: THREE.Vector3; to: () => THREE.Vector3 }[] = [];
  constructor(private scene: THREE.Scene, max = 160) { this.max = max;
    this.im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ roughness: 0.6, flatShading: true }), max); this.im.count = 0; this.im.frustumCulled = false;
    this.im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3); scene.add(this.im); }
  burst(at: THREE.Vector3, n: number, color: number, o: { speed?: number; up?: number; size?: number; grav?: number; life?: number; spread?: number } = {}) {
    for (let i = 0; i < n && this.ps.length < this.max; i++) { const a = Math.random() * Math.PI * 2, sp = (o.speed ?? 1.5) * (0.5 + Math.random() * 0.7), sd = o.spread ?? 1;
      this.ps.push({ p: at.clone().add(new THREE.Vector3((Math.random() - .5) * 0.3 * sd, 0, (Math.random() - .5) * 0.3 * sd)), v: new THREE.Vector3(Math.cos(a) * sp * sd, (o.up ?? 2) * (0.6 + Math.random() * 0.6), Math.sin(a) * sp * sd),
        life: 0, max: (o.life ?? 0.8) * (0.7 + Math.random() * 0.6), s: (o.size ?? 0.05) * (0.7 + Math.random() * 0.6), g: o.grav ?? 9, c: new THREE.Color(color).offsetHSL(0, 0, (Math.random() - .5) * 0.1) }); } }
  pour(from: THREE.Vector3, dir: THREE.Vector3) { for (let i = 0; i < 3 && this.ps.length < this.max; i++) this.ps.push({ p: from.clone(), v: dir.clone().multiplyScalar(1.2 + Math.random() * 0.5).add(new THREE.Vector3((Math.random() - .5) * .3, 0, (Math.random() - .5) * .3)), life: 0, max: 0.6, s: 0.04, g: 9, c: new THREE.Color(0x7ad0f0) }); }
  popItem(o: THREE.Object3D, from: THREE.Vector3, to: () => THREE.Vector3) { o.position.copy(from); this.scene.add(o); this.pops.push({ o, t: 0, from: from.clone(), to }); }
  update(dt: number) {
    for (let i = this.ps.length - 1; i >= 0; i--) { const p = this.ps[i]; p.life += dt; if (p.life > p.max || p.p.y < 0.02) { this.ps.splice(i, 1); continue; } p.v.y -= p.g * dt; p.p.addScaledVector(p.v, dt); }
    this.ps.forEach((p, i) => { const k = 1 - p.life / p.max; this.sc.setScalar(p.s * (0.4 + k * 0.6)); this.m4.compose(p.p, this.q, this.sc); this.im.setMatrixAt(i, this.m4); this.im.setColorAt(i, p.c); });
    this.im.count = this.ps.length; this.im.instanceMatrix.needsUpdate = true; if (this.im.instanceColor) this.im.instanceColor.needsUpdate = true;
    for (let i = this.pops.length - 1; i >= 0; i--) { const pp = this.pops[i]; pp.t += dt; const t = pp.t;
      if (t < 0.45) { const k = t / 0.45; pp.o.position.copy(pp.from).add(new THREE.Vector3(0, Math.sin(k * Math.PI) * 1.1 + k * 0.5, 0)); pp.o.scale.setScalar(0.6 + Math.sin(k * Math.PI) * 0.6); pp.o.rotation.y += dt * 8; }
      else { const k = Math.min(1, (t - 0.45) / 0.35); pp.o.position.lerpVectors(pp.from.clone().setY(pp.from.y + 0.5), pp.to(), k); pp.o.scale.setScalar(1 - k * 0.8); }
      if (t > 0.8) { this.scene.remove(pp.o); this.pops.splice(i, 1); } }
  }
}
