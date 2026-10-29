import * as THREE from "three";
import { mat, waterMat, texBrick } from "./materials";
import * as M from "./models";
/** Builds the Mekong-delta village and exposes colliders, interactables and points of interest. */
export type Collider = { t: "c"; x: number; z: number; r: number } | { t: "b"; x0: number; z0: number; x1: number; z1: number };
export interface Interactable { id: string; kind: "plot" | "shop" | "sit" | "sign" | "pond" | "door" | "jar" | "build"; x: number; z: number; r: number; data?: any; label?: string; }
export const PLOTS = [[9.5, 4], [13, 4], [9.5, 7.2], [13, 7.2], [9.5, 10.4], [13, 10.4]];
export const FENCE = { x0: -26, x1: 26, z0: -24, z1: 26, gate: 2.6 };
export class World {
  group = new THREE.Group(); colliders: Collider[] = []; items: Interactable[] = [];
  plotMeshes: THREE.Mesh[] = []; plotAnchors: THREE.Group[] = [];
  smokeAt = new THREE.Vector3(9.2, 3.6, -16.4); porchSeats: { x: number; z: number; ry: number }[] = [];
  waterMeshes: THREE.Mesh[] = []; roofPerches: THREE.Vector3[] = [];
  flowerSpots: THREE.Vector3[] = []; occluders: THREE.Object3D[] = [];
  constructor(private quality: "low" | "medium" | "high") { this.build(); }
  private add(o: THREE.Object3D, x = 0, y = 0, z = 0, ry = 0) { o.position.set(x, y, z); o.rotation.y = ry; this.group.add(o); return o; }
  private circ(x: number, z: number, r: number) { this.colliders.push({ t: "c", x, z, r }); }
  private rect(x0: number, z0: number, x1: number, z1: number) { this.colliders.push({ t: "b", x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) }); }
  private build() {
    const q = this.quality;
    // ground: soft grass with colour noise, big enough to reach the horizon fog
    const gg = new THREE.PlaneGeometry(160, 160, 64, 64); gg.rotateX(-Math.PI / 2);
    const pos = gg.attributes.position as THREE.BufferAttribute, col: number[] = [], c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i), n = Math.sin(x * .21) * Math.cos(z * .17) * .5 + Math.sin(x * .05 + z * .07) * .5;
      const far = Math.max(Math.abs(x), Math.abs(z)) > 45; if (far) pos.setY(i, Math.max(0, (Math.max(Math.abs(x), Math.abs(z)) - 45) * 0.12 + n * 0.8));
      c.setHSL(0.27 + n * 0.02, 0.5, 0.47 + n * 0.05); col.push(c.r, c.g, c.b); }
    gg.setAttribute("color", new THREE.Float32BufferAttribute(col, 3)); gg.computeVertexNormals();
    const ground = new THREE.Mesh(gg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true })); ground.receiveShadow = true; this.group.add(ground);
    // dirt paths
    const dirt = mat(0xc9a06a, { flat: false }), flatPath = (w: number, l: number, x: number, z: number, ry = 0) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, l), dirt); p.rotation.set(-Math.PI / 2, 0, ry); p.position.set(x, 0.015, z); p.receiveShadow = true; this.group.add(p); };
    flatPath(3, 26, 0, 14); flatPath(3, 22, 0, 37); flatPath(30, 3, 14, 38); flatPath(2.4, 12, 9, 1.5, 0); flatPath(14, 2, 6, -3);
    // brick courtyard (sân gạch tàu)
    const yard = new THREE.Mesh(new THREE.PlaneGeometry(16, 9), new THREE.MeshStandardMaterial({ map: texBrick(), roughness: .95 })); yard.rotation.x = -Math.PI / 2; yard.position.set(0, 0.03, -4.5); yard.receiveShadow = true; this.group.add(yard);
    // grandma's house with tiled roof + porch
    const house = M.roofedHouse({ w: 12, d: 7, h: 3.2, wall: 0xf1dcae, roofTex: true, porch: true, trim: 0x7a4e2c }); this.occluders.push(this.add(house, 0, 0, -15.5));
    this.rect(-6.6, -19.4, 6.6, -11.8);
    [-5.6, -1.8, 1.8, 5.6].forEach(x => this.circ(x, -9.4, 0.25));
    this.items.push({ id: "door", kind: "door", x: 0, z: -11.4, r: 1.6, label: "Vô nhà" });
    const b = M.bench(2.4); this.add(b, -3.6, 0.4, -10.6); this.porchSeats.push({ x: -3.6, z: -10.5, ry: 0 });
    const ch = M.chair(); this.add(ch, 3.4, 0.4, -10.7, 0); this.porchSeats.push({ x: 3.4, z: -10.5, ry: 0 });
    this.add(M.table(), 4.4, 0.4, -10.4);
    this.items.push({ id: "bench", kind: "sit", x: -3.6, z: -10.2, r: 1.4, data: { x: -3.6, z: -10.55, ry: 0, y: 0.95 }, label: "Ngồi nghỉ trên ghế" });
    this.add(M.waterJar(7.2, -11.2)); this.circ(7.2, -11.2, 0.6); this.items.push({ id: "jar", kind: "jar", x: 7.2, z: -11.2, r: 1.5, label: "Múc nước lu" });
    this.occluders.push(this.add(M.kitchenHut(), 9.2, 0, -16.4)); this.rect(7.4, -17.9, 11, -14.9);
    this.occluders.push(this.add(M.shed(), 17, 0, -15)); this.rect(14.4, -17.2, 19.6, -12.8);
    this.roofPerches.push(new THREE.Vector3(-2.5, 6.05, -15.5), new THREE.Vector3(1.5, 6.05, -15.5), new THREE.Vector3(4, 6.05, -15.5));
    // vegetable beds (6 luống)
    PLOTS.forEach(([x, z], i) => { const a = new THREE.Group(); a.position.set(x, 0, z); this.group.add(a); this.plotAnchors.push(a);
      const m = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 2.2), mat(0x9a7048)); m.position.y = 0.11; m.receiveShadow = true; a.add(m); this.plotMeshes.push(m);
      this.items.push({ id: "plot" + i, kind: "plot", x, z, r: 2.1, data: i }); });
    const bed = mat(0x8a6040); [[11.25, 2.35, 5.8, 0.3], [11.25, 12.05, 5.8, 0.3]].forEach(([x, z, w, d]) => { const e = M.mesh(new THREE.BoxGeometry(w, 0.28, d), bed, x, 0.14, z); this.group.add(e); });
    this.add(M.sign("Vườn rau", 2), 7.2, 0, 2.4, 0.4);
    // flower garden along the courtyard
    this.flowers();
    // fruit garden: mango, banana, papaya-ish, bamboo
    [[-14, 4, 1.15], [-19, 10, 1], [-10, -2, 0.9]].forEach(([x, z, s]) => { this.add(M.mangoTree(s), x, 0, z, Math.random() * 6); this.circ(x, z, 0.5); });
    [[-21, -6], [-23, -1], [-19.5, -12]].forEach(([x, z]) => { this.add(M.bananaClump(), x, 0, z, Math.random() * 6); this.circ(x, z, 0.8); });
    [[-24, -21], [23.5, -21], [-24, 23], [23.5, 23]].forEach(([x, z]) => { this.add(M.bamboo(q === "low" ? 4 : 7), x, 0, z); this.circ(x, z, 0.9); });
    // lotus pond
    const pond = new THREE.Mesh(new THREE.RingGeometry(0.01, 6, 36, 6), waterMat()); pond.rotation.x = -Math.PI / 2; pond.position.set(-12, 0.04, 17); this.group.add(pond); this.waterMeshes.push(pond);
    this.add(M.lotusPond(6), -12, 0, 17); this.circ(-12, 17, 6.1);
    this.items.push({ id: "pond", kind: "pond", x: -12, z: 17, r: 7.4, label: "Ngắm ao sen" });
    // canal + coconuts outside the east fence
    const canal = new THREE.Mesh(new THREE.PlaneGeometry(5, 120, 4, 40), waterMat(0x4fb3c4)); canal.rotation.x = -Math.PI / 2; canal.position.set(35, 0.03, 0); this.group.add(canal); this.waterMeshes.push(canal); this.rect(32.6, -60, 37.4, 60);
    for (let z = -34; z <= 40; z += 7) { this.add(M.coconutTree(5.5 + Math.random() * 2, 0.1 + Math.random() * .1), 30.5, 0, z + Math.random() * 2, Math.PI + Math.random() * .4); this.circ(30.5, z, 0.4); }
    for (let z = -20; z <= 20; z += 10) { this.add(M.coconutTree(6, 0.12), -28.8, 0, z, Math.random() * 6); this.circ(-28.8, z, 0.4); }
    // rice field beyond the south fence
    const rice = new THREE.Mesh(new THREE.PlaneGeometry(30, 14, 30, 1), mat(0x9ccc4a, { wind: 0.02 })); rice.rotation.x = -Math.PI / 2; rice.position.set(-20, 0.05, 38); this.group.add(rice);
    this.ricePlants();
    // neighbours
    this.occluders.push(this.add(M.roofedHouse({ w: 7, d: 5, h: 2.8, wall: 0xa9d6e8, roofColor: 0x8aa0b0, trim: 0x5a6a7a }), 15, 0, 46, Math.PI)); this.rect(10.5, 42.5, 19.5, 50);
    this.occluders.push(this.add(M.roofedHouse({ w: 6, d: 5, h: 2.6, wall: 0xf2c8b8, roofTex: true }), -34, 0, -6, Math.PI / 2)); this.rect(-37.5, -10, -30.5, -2);
    // gate, fence, stall, build zone
    this.occluders.push(this.add(M.gateArch("Nhà Ngoại"), 0, 0, FENCE.z1));
    this.fence();
    this.occluders.push(this.add(M.stall(), -7, 0, 20.5, 0)); this.rect(-8.5, 19.8, -5.5, 21.2);
    this.items.push({ id: "shop", kind: "shop", x: -7, z: 21.7, r: 2, label: "Mua bán ở sạp" });
    this.buildZone();
    // world edge
    this.rect(-60, -60, -40, 60); this.rect(40, -60, 60, 60); this.rect(-60, -60, 60, -40); this.rect(-60, 50, 60, 60);
  }
  private flowers() {
    const n = this.quality === "low" ? 60 : this.quality === "medium" ? 120 : 200;
    const stemG = new THREE.CylinderGeometry(0.02, 0.025, 0.5, 4); stemG.translate(0, 0.25, 0);
    const headG = new THREE.IcosahedronGeometry(0.13, 0); headG.translate(0, 0.52, 0);
    const stems = new THREE.InstancedMesh(stemG, mat(0x4f9a3a, { wind: 0.12 }), n), heads = new THREE.InstancedMesh(headG, mat(0xffffff, { wind: 0.12 }), n);
    const cols = [0xf28ab0, 0xf2c84a, 0xf07a3a, 0xe8434a, 0xffffff, 0xc77ae8].map(c => new THREE.Color(c)), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const beds = [[-7.5, -8.6, 3, 1], [7.5, -8.6, 3, 1], [-8.8, -2, 1, 5], [8.8, -1.5, 0.8, 3], [-3.5, 1.2, 2.2, .7], [3.5, 1.2, 2.2, .7]];
    for (let i = 0; i < n; i++) { const [cx, cz, w, d] = beds[i % beds.length]; p.set(cx + (Math.random() - .5) * w * 2, 0, cz + (Math.random() - .5) * d * 2);
      s.setScalar(0.7 + Math.random() * 0.6); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6); m4.compose(p, q, s);
      stems.setMatrixAt(i, m4); heads.setMatrixAt(i, m4); heads.setColorAt(i, cols[i % cols.length]); if (i % 8 === 0) this.flowerSpots.push(p.clone()); }
    stems.castShadow = heads.castShadow = this.quality !== "low"; this.group.add(stems, heads);
    // grass tufts
    const gn = this.quality === "low" ? 220 : this.quality === "medium" ? 520 : 900;
    const tg = new THREE.ConeGeometry(0.09, 0.45, 3); tg.translate(0, 0.22, 0);
    const tufts = new THREE.InstancedMesh(tg, mat(0x5fae3e, { wind: 0.18 }), gn); let k = 0;
    for (let i = 0; i < gn * 3 && k < gn; i++) { const x = (Math.random() - .5) * 84, z = (Math.random() - .5) * 84;
      if (Math.abs(x) < 2 && z > -2) continue; if (x > -9 && x < 9 && z > -20 && z < 0.5) continue; if (x > 8 && x < 15 && z > 2 && z < 12.5) continue; if (Math.hypot(x + 12, z - 17) < 6.4) continue; if (x > 32 && x < 38) continue;
      p.set(x, 0, z); s.set(1, 0.6 + Math.random() * 0.9, 1); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6); m4.compose(p, q, s); tufts.setMatrixAt(k++, m4); }
    tufts.count = k; this.group.add(tufts);
  }
  private ricePlants() {
    const n = this.quality === "low" ? 150 : 400, g = new THREE.ConeGeometry(0.06, 0.7, 3); g.translate(0, 0.35, 0);
    const im = new THREE.InstancedMesh(g, mat(0x7fbf3a, { wind: 0.2 }), n), m4 = new THREE.Matrix4();
    for (let i = 0; i < n; i++) { m4.makeTranslation(-34 + (i % 28) * 1.04 + Math.random() * .2, 0, 32 + Math.floor(i / 28) * 0.9 + Math.random() * .2); im.setMatrixAt(i, m4); }
    this.group.add(im);
  }
  private fence() {
    const { x0, x1, z0, z1, gate } = FENCE, posts: [number, number][] = [], rails: [number, number, number, number][] = [];
    const run = (ax: number, az: number, bx: number, bz: number) => { const L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(L / 1.2));
      for (let i = 0; i <= n; i++) posts.push([ax + (bx - ax) * i / n, az + (bz - az) * i / n]); rails.push([ax, az, bx, bz]); this.rect(ax - .15, az - .15, bx + .15, bz + .15); };
    run(x0, z0, x1, z0); run(x0, z0, x0, z1); run(x1, z0, x1, z1); run(x0, z1, -gate, z1); run(gate, z1, x1, z1);
    const pg = new THREE.CylinderGeometry(0.07, 0.08, 1.4, 5); pg.translate(0, 0.7, 0);
    const im = new THREE.InstancedMesh(pg, mat(0xb59a5a), posts.length), m4 = new THREE.Matrix4();
    posts.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); im.setMatrixAt(i, m4); }); im.castShadow = true; this.group.add(im);
    const rm = mat(0xa88a4a); rails.forEach(([ax, az, bx, bz]) => { const L = Math.hypot(bx - ax, bz - az); [0.5, 1.1].forEach(y => {
      const r = M.mesh(new THREE.CylinderGeometry(0.04, 0.04, L, 4), rm, (ax + bx) / 2, y, (az + bz) / 2); r.rotation.z = Math.PI / 2; r.rotation.y = -Math.atan2(bz - az, bx - ax); this.group.add(r); }); });
  }
  private buildZone() {
    const x0 = 16, z0 = 14, x1 = 24, z1 = 22, st = mat(0x8a5a36), rope = mat(0xf2e2b0);
    const pts = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
    pts.forEach(([x, z]) => this.group.add(M.mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 5), st, x, 0.4, z)));
    pts.forEach(([x, z], i) => { const [nx, nz] = pts[(i + 1) % 4], L = Math.hypot(nx - x, nz - z); const r = M.mesh(new THREE.CylinderGeometry(0.02, 0.02, L, 3), rope, (x + nx) / 2, 0.7, (z + nz) / 2); r.rotation.z = Math.PI / 2; r.rotation.y = -Math.atan2(nz - z, nx - x); this.group.add(r); });
    const soil = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), mat(0xb08a5a)); soil.rotation.x = -Math.PI / 2; soil.position.set(20, 0.02, 18); soil.receiveShadow = true; this.group.add(soil);
    this.add(M.sign("Đất xây dựng", 2.4), 20, 0, 13.4);
    this.items.push({ id: "build", kind: "build", x: 20, z: 13.2, r: 2, label: "Xem khu đất xây dựng" });
  }
}
