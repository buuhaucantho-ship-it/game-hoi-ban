import * as THREE from "three";
import { mat, waterMat, texPave, PAL, canvasTex } from "./materials";
import * as M from "./models";
import { LOTS, HOME_RECT } from "../data/buildings";
import { compact } from "../util/merge";
/** Builds the village (home garden, purchasable lots, south plaza) in the storybook-park style. */
export type Collider = { t: "c"; x: number; z: number; r: number } | { t: "b"; x0: number; z0: number; x1: number; z1: number };
export type IKind = "plot" | "shop" | "sit" | "sign" | "pond" | "door" | "jar" | "lot" | "wish" | "well" | "coop" | "shipbox" | "fish" | "sleep" | "info";
export interface Interactable { id: string; kind: IKind; x: number; z: number; r: number; data?: any; label?: string; }
export const PLOTS = [[9.5, 4], [13, 4], [9.5, 7.2], [13, 7.2], [9.5, 10.4], [13, 10.4]];
export const BOUNDS = { x0: -48, x1: 48, z0: -48, z1: 46 };
export const GATE_Z = 26;
export class World {
  group = new THREE.Group(); colliders: Collider[] = []; items: Interactable[] = []; noBuild: [number, number, number, number][] = [];
  smokeAt = new THREE.Vector3(9.2, 3.6, -16.4); waterMeshes: THREE.Mesh[] = []; roofPerches: THREE.Vector3[] = []; flowerSpots: THREE.Vector3[] = [];
  occluders: THREE.Object3D[] = []; lamps: THREE.Object3D[] = []; fountains: THREE.Object3D[] = [];
  lotGroup = new THREE.Group(); lotColliders: Collider[] = []; lotItems: Interactable[] = [];
  constructor(private quality: "low" | "medium" | "high") { this.build();
    // bake static scenery into a handful of meshes; occluders/fountains are compacted separately so raycasts & spray anchors still work
    const sep = new Set<THREE.Object3D>([...this.occluders, ...this.fountains]); sep.forEach(o => compact(o));
    compact(this.group, o => sep.has(o)); this.group.add(this.lotGroup); }
  private add(o: THREE.Object3D, x = 0, y = 0, z = 0, ry = 0) { o.position.set(x, y, z); o.rotation.y = ry; this.group.add(o); return o; }
  private circ(x: number, z: number, r: number) { this.colliders.push({ t: "c", x, z, r }); }
  private rect(x0: number, z0: number, x1: number, z1: number, list = this.colliders) { list.push({ t: "b", x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) }); }
  private tree(kind: M.TreeKind, x: number, z: number, s = 1) { this.add(M.autumnTree(kind, s), x, 0, z, (x * 7 + z) % 6); this.circ(x, z, 0.45 * s); this.noBuild.push([x - 1, z - 1, x + 1, z + 1]); }
  private flat(w: number, d: number, m: THREE.Material, x: number, z: number, y = 0.02, ry = 0) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m); p.rotation.set(-Math.PI / 2, 0, ry); p.position.set(x, y, z); p.receiveShadow = true; this.group.add(p); return p; }
  private build() {
    const q = this.quality;
    // ochre ground with soft colour patches; beyond the walls it rises gently into the hills
    const gg = new THREE.PlaneGeometry(280, 280, 70, 70); gg.rotateX(-Math.PI / 2);
    const pos = gg.attributes.position as THREE.BufferAttribute, col: number[] = [], c = new THREE.Color(), a = new THREE.Color(PAL.ground), b = new THREE.Color(PAL.lawn), gr = new THREE.Color(0xc9b25a);
    for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i), n = Math.sin(x * .13) * Math.cos(z * .11) * .5 + Math.sin(x * .04 + z * .05) * .5;
      const out = Math.max(Math.abs(x) - 52, z - 50, -z - 52, 0); if (out > 0) pos.setY(i, out * 0.18 + Math.max(0, n) * 1.2);
      c.copy(a).lerp(b, Math.max(0, n)); if (n < -0.35) c.lerp(gr, 0.5); col.push(c.r, c.g, c.b); }
    gg.setAttribute("color", new THREE.Float32BufferAttribute(col, 3)); gg.computeVertexNormals();
    const ground = new THREE.Mesh(gg, new THREE.MeshLambertMaterial({ vertexColors: true })); ground.receiveShadow = true; this.group.add(ground);
    // paths
    const path = mat(PAL.plaza);
    this.flat(3, 34, path, 0, 9); this.flat(2.4, 10, path, 9, 1.5); this.flat(14, 2, path, 6, -3);
    // courtyard paving (sân gạch)
    this.flat(16, 9, mat(0xffffff, { map: texPave([8, 4]) }), 0, -4.5, 0.03);
    // ---- grandma's house
    this.occluders.push(this.add(M.roofedHouse({ w: 12, d: 7, h: 3.2, roofTex: true, porch: true }), 0, 0, -15.5));
    this.rect(-6.6, -19.4, 6.6, -11.8); [-5.6, -1.8, 1.8, 5.6].forEach(x => this.circ(x, -9.4, 0.25));
    this.items.push({ id: "door", kind: "door", x: 0, z: -11.4, r: 1.6, label: "Vô nhà" });
    this.add(M.bench(2.4), -3.6, 0.4, -10.6); this.add(M.chair(), 3.4, 0.4, -10.7); this.add(M.table(), 4.4, 0.4, -10.4);
    this.items.push({ id: "bench", kind: "sit", x: -3.6, z: -10.2, r: 1.4, data: { x: -3.6, z: -10.55, ry: 0, y: 0.95 }, label: "Ngồi nghỉ trên ghế" });
    this.add(M.waterJar(), 7.2, 0, -11.2); this.circ(7.2, -11.2, 0.6); this.items.push({ id: "jar", kind: "jar", x: 7.2, z: -11.2, r: 1.5, label: "Múc nước lu" });
    this.occluders.push(this.add(M.kitchenHut(), 9.2, 0, -16.4)); this.rect(7.4, -17.9, 11, -14.9);
    this.occluders.push(this.add(M.shed(), 17, 0, -15)); this.rect(14.4, -17.2, 19.6, -12.8);
    this.roofPerches.push(new THREE.Vector3(-2.5, 6.05, -15.5), new THREE.Vector3(1.5, 6.05, -15.5), new THREE.Vector3(4, 6.05, -15.5));
    this.noBuild.push([-7, -20, 20, -8.2], [-8, -9, 8, 0], [-2, 0, 2, 25.5], [7.6, 2.2, 14.9, 12.2]);
    // base vegetable bed borders
    const bed = mat(PAL.woodDark); [[11.25, 2.35, 5.8, 0.3], [11.25, 12.05, 5.8, 0.3]].forEach(([x, z, w, d]) => this.group.add(M.mesh(new THREE.BoxGeometry(w, 0.28, d), bed, x, 0.14, z)));
    this.add(M.sign("Vườn rau", 2), 7.2, 0, 2.4, 0.4);
    this.flowers();
    // home trees + bushes
    this.tree("gold", -14, 4, 1.05); this.tree("orange", -19, 10); this.tree("tan", -10, -2, 0.9); this.tree("orange", -21, -6); this.tree("gold", -21, -15, 1.1); this.tree("tan", 22, -6, 0.95); this.tree("gold", 22, 20, 0.9);
    [[-23, -21], [23.5, -21]].forEach(([x, z]) => { this.add(M.bamboo(q === "low" ? 4 : 6), x, 0, z); this.circ(x, z, 0.9); this.noBuild.push([x - 1.5, z - 1.5, x + 1.5, z + 1.5]); });
    [[-6, 23, "tan"], [6, 23, "dots"], [-16, -10, "tan"], [3.6, 22.8, "tan"]].forEach(([x, z, k]: any) => { this.add(M.bush(k), x, 0, z); this.circ(x, z, 0.6); this.noBuild.push([x - 1, z - 1, x + 1, z + 1]); });
    // lotus pond
    const pond = new THREE.Mesh(new THREE.RingGeometry(0.01, 6, 36, 6), waterMat()); pond.rotation.x = -Math.PI / 2; pond.position.set(-12, 0.04, 16); this.group.add(pond); this.waterMeshes.push(pond);
    this.add(M.lotusPond(6), -12, 0, 16); this.circ(-12, 16, 6.1); this.noBuild.push([-18.6, 9.4, -5.4, 22.6]);
    this.items.push({ id: "pond", kind: "pond", x: -12, z: 16, r: 7.4, label: "Câu cá ở ao sen", data: { x: -12, z: 16, r: 6 } });
    // home lamps
    [[2.4, 6], [-2.4, 14], [2.4, 21]].forEach(([x, z]) => { const l = this.add(M.lamp(), x, 0, z); this.lamps.push(l); this.circ(x, z, 0.25); this.noBuild.push([x - .6, z - .6, x + .6, z + .6]); });
    // ---- wall between home/lots and the plaza, with stone gate
    this.occluders.push(this.add(M.gatePillars("Nhà Ngoại"), 0, 0, GATE_Z)); this.circ(-2.9, GATE_Z, 0.55); this.circ(2.9, GATE_Z, 0.55);
    this.wallRun(BOUNDS.x0, GATE_Z, -3.3, GATE_Z); this.wallRun(3.3, GATE_Z, BOUNDS.x1, GATE_Z);
    // ---- perimeter
    this.wallRun(BOUNDS.x0, BOUNDS.z0, BOUNDS.x1, BOUNDS.z0); this.wallRun(BOUNDS.x0, BOUNDS.z0, BOUNDS.x0, BOUNDS.z1); this.wallRun(BOUNDS.x1, BOUNDS.z0, BOUNDS.x1, BOUNDS.z1);
    this.wallRun(BOUNDS.x0, BOUNDS.z1, -14, BOUNDS.z1); this.wallRun(-10, BOUNDS.z1, 10, BOUNDS.z1); this.wallRun(14, BOUNDS.z1, BOUNDS.x1, BOUNDS.z1);
    [-12, 12].forEach(x => { this.add(M.steps(3.6, 4), x, 0, BOUNDS.z1 - 0.2, Math.PI); this.rect(x - 2, BOUNDS.z1 - 0.4, x + 2, BOUNDS.z1 + 2); });
    this.add(M.railing(26), 31, 0.95, BOUNDS.z1); this.add(M.railing(26), -31, 0.95, BOUNDS.z1);
    this.rect(-60, -60, BOUNDS.x0 - 0.3, 60); this.rect(BOUNDS.x1 + 0.3, -60, 60, 60); this.rect(-60, -60, 60, BOUNDS.z0 - 0.3); this.rect(-60, BOUNDS.z1 + 0.3, 60, 60);
    this.plaza(); this.lotFeatures(); this.outside();
  }
  /** Straight stone wall between two points (axis aligned) + its collider. */
  private wallRun(ax: number, az: number, bx: number, bz: number) {
    const L = Math.hypot(bx - ax, bz - az); if (L < 0.5) return; const w = M.stoneWall(L, 0.9); w.position.set((ax + bx) / 2, 0, (az + bz) / 2); w.rotation.y = Math.abs(bx - ax) > Math.abs(bz - az) ? 0 : Math.PI / 2; this.group.add(w);
    this.rect(Math.min(ax, bx) - 0.35, Math.min(az, bz) - 0.35, Math.max(ax, bx) + 0.35, Math.max(az, bz) + 0.35);
  }
  private plaza() {
    // paved circle + paths in the square, like the reference park
    const pave = mat(0xffffff, { map: texPave([10, 10]) });
    const disc = new THREE.Mesh(new THREE.CircleGeometry(10, 40), pave); disc.rotation.x = -Math.PI / 2; disc.position.set(0, 0.025, 36); disc.receiveShadow = true; this.group.add(disc);
    const ring = new THREE.Mesh(new THREE.RingGeometry(9.7, 10.2, 40), mat(PAL.plazaLine)); ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.03, 36); this.group.add(ring);
    this.flat(60, 3, mat(PAL.plaza), 0, 36, 0.02); this.flat(3, 20, mat(PAL.plaza), 0, 36, 0.021);
    const f = M.fountain(1); this.add(f, 0, 0, 36); this.fountains.push(f); this.circ(0, 36, 2.85);
    this.items.push({ id: "fountainP", kind: "wish", x: 0, z: 36, r: 4.6, label: "Ước một điều (1 xu)" });
    [[-6.5, 31.5, Math.PI / 4 + Math.PI], [6.5, 31.5, -Math.PI / 4 + Math.PI], [-6.5, 40.5, -Math.PI / 4], [6.5, 40.5, Math.PI / 4]].forEach(([x, z, ry], i) => {
      const bn = this.add(M.bench(2.2), x, 0, z, ry + Math.PI); const fx = Math.sin(ry + Math.PI), fz = Math.cos(ry + Math.PI);
      this.colliders.push({ t: "c", x: x - fx * 0.1, z: z - fz * 0.1, r: 0.75 });
      this.items.push({ id: "pbench" + i, kind: "sit", x: x + fx * 0.6, z: z + fz * 0.6, r: 1.3, data: { x: x + fx * 0.05, z: z + fz * 0.05, ry: ry + Math.PI, y: 0.57 }, label: "Ngồi ghế đá công viên" }); bn.userData.bench = true; });
    [[-4, 29.5], [4, 29.5], [-10.5, 36], [10.5, 36], [-4, 43], [4, 43]].forEach(([x, z]) => { const l = this.add(M.lamp(), x, 0, z); this.lamps.push(l); this.circ(x, z, 0.25); });
    [["gold", -16, 42.5, 1.1], ["orange", -22, 40], ["tan", 16, 42.5], ["orange", 22, 40, 1.05], ["tan", -30, 42], ["gold", 30, 42.5], ["gold", -40, 38, 1.1], ["orange", 40, 38], ["tan", -36, 30], ["gold", 34, 30]]
      .forEach(([k, x, z, s]: any) => this.tree(k, x, z, s || 1));
    [[-9, 44, "tan"], [9, 44, "dots"], [-19, 44.5, "tan"], [19, 44.5, "tan"], [8.5, 30, "dots"], [-26, 44, "dots"]].forEach(([x, z, k]: any) => { this.add(M.bush(k), x, 0, z); this.circ(x, z, 0.55); });
    [[3.6, 39.6], [-3.6, 32.4]].forEach(([x, z]) => { this.add(M.featherPlant(), x, 0, z); this.circ(x, z, 0.25); });
    this.occluders.push(this.add(M.stall(), -12, 0, 31.5, 0)); this.rect(-13.5, 30.8, -10.5, 32.2);
    this.items.push({ id: "shop", kind: "shop", x: -12, z: 33, r: 2.1, label: "Mua bán ở sạp cô Út" });
    this.occluders.push(this.add(M.roofedHouse({ w: 7, d: 5, h: 2.8, wall: 0xb9d8e6, roofColor: 0x7a8aa8, shutter: 0xc95a5a }), -38, 0, 34, Math.PI / 2)); this.rect(-41.5, 29.5, -34.5, 38.5);
    this.occluders.push(this.add(M.roofedHouse({ w: 6, d: 5, h: 2.6, wall: 0xf2c8b8, roofTex: true }), 40, 0, 32, -Math.PI / 2)); this.rect(37, 28, 43.5, 36);
    this.add(M.sign("Quảng trường làng", 2.8), 6, 0, 28.2, Math.PI);
  }
  private lotFeatures() {
    // East: a little creek with a plank bridge (fishing spot)
    const creek = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 50, 3, 30), waterMat(0x86c8d6)); creek.rotation.x = -Math.PI / 2; creek.position.set(40, 0.03, 1); this.group.add(creek); this.waterMeshes.push(creek);
    [-1.7, 1.7].forEach(dx => this.flat(0.5, 50, mat(0xc9a070), 40 + dx, 1, 0.035));
    this.rect(38.4, -24, 41.6, -2); this.rect(38.4, 2, 41.6, 26); this.noBuild.push([37.5, -24, 42.5, 26]);
    const br = new THREE.Group(); for (let i = 0; i < 9; i++) br.add(M.mesh(new THREE.BoxGeometry(0.42, 0.1, 3), mat(i % 2 ? PAL.wood : PAL.woodDark), -2 + i * 0.5, 0.25, 0)); br.add(M.railing(4.4)); br.children[br.children.length - 1].position.set(0, 0.3, 1.4);
    const r2 = M.railing(4.4); r2.position.set(0, 0.3, -1.4); br.add(r2); this.add(br, 40, 0, 0);
    this.items.push({ id: "creekN", kind: "pond", x: 40, z: 6, r: 3, label: "Câu cá ở rạch", data: { x: 40, z: 8, r: 1.4, lot: "east" } }, { id: "creekS", kind: "pond", x: 40, z: -6, r: 3, label: "Câu cá ở rạch", data: { x: 40, z: -8, r: 1.4, lot: "east" } });
    this.tree("gold", 33, -16); this.tree("tan", 44, 18, 0.9); this.tree("orange", 31, 20);
    // West: bamboo grove + a small paddy
    [[-43, -20], [-43, 22], [-30, 22]].forEach(([x, z]) => { this.add(M.bamboo(5), x, 0, z); this.circ(x, z, 0.9); this.noBuild.push([x - 1.5, z - 1.5, x + 1.5, z + 1.5]); });
    const pad = this.flat(10, 7, mat(0xa9c25a, { wind: 0.02 }), -38, -8, 0.04); pad.userData.k = 1; this.noBuild.push([-43, -11.5, -33, -4.5]);
    const rg = new THREE.ConeGeometry(0.06, 0.7, 3); rg.translate(0, 0.35, 0); const ri = new THREE.InstancedMesh(rg, mat(0x8fb84a, { wind: 0.2 }), 70), m4 = new THREE.Matrix4();
    for (let i = 0; i < 70; i++) { m4.makeTranslation(-42.5 + (i % 10) * 1, 0, -11 + Math.floor(i / 10) * 1); ri.setMatrixAt(i, m4); } this.group.add(ri);
    this.tree("orange", -32, -18); this.tree("gold", -40, 8);
    // North: an orchard row behind the house
    [[-36, -36, "gold"], [-24, -40, "orange"], [-12, -36, "tan"], [12, -38, "gold"], [24, -34, "orange"], [36, -40, "tan"], [0, -42, "gold"]].forEach(([x, z, k]: any) => this.tree(k, x, z));
  }
  private outside() {
    // canal and palms beyond the east wall, rice beyond the west wall, hedge of palms north
    const canal = new THREE.Mesh(new THREE.PlaneGeometry(6, 160, 4, 40), waterMat(0x7cc0cc)); canal.rotation.x = -Math.PI / 2; canal.position.set(55, 0.05, 0); this.group.add(canal); this.waterMeshes.push(canal);
    for (let z = -44; z <= 44; z += 11) this.add(M.palm(5.5 + ((z * 7) % 3), 0.12), 50.8, 0, z, Math.PI);
    for (let x = -40; x <= 40; x += 16) this.add(M.palm(6, 0.1), x, 0, -51, 0);
    const rice = this.flat(10, 90, mat(0xb9c55a, { wind: 0.02 }), -54, 0, 0.06);
  }
  private flowers() {
    const n = this.quality === "low" ? 60 : this.quality === "medium" ? 110 : 180;
    const stemG = new THREE.CylinderGeometry(0.02, 0.025, 0.5, 4); stemG.translate(0, 0.25, 0);
    const headG = new THREE.IcosahedronGeometry(0.13, 1); headG.translate(0, 0.52, 0);
    const stems = new THREE.InstancedMesh(stemG, mat(0x7a9a4a, { wind: 0.12 }), n), heads = new THREE.InstancedMesh(headG, mat(0xffffff, { wind: 0.12 }), n);
    const cols = [0xf2a8bc, 0xf2c84a, 0xe9743c, 0xd8433a, 0xfbf3e0, 0xc98ad8].map(c => new THREE.Color(c)), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const beds = [[-7.5, -8.6, 3, 1], [7.5, -8.6, 3, 1], [-8.8, -2, 1, 5], [8.8, -1.5, 0.8, 3], [-3.5, 1.2, 2.2, .7], [3.5, 1.2, 2.2, .7]];
    for (let i = 0; i < n; i++) { const [cx, cz, w, d] = beds[i % beds.length]; p.set(cx + (Math.random() - .5) * w * 2, 0, cz + (Math.random() - .5) * d * 2);
      s.setScalar(0.7 + Math.random() * 0.6); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6); m4.compose(p, q, s);
      stems.setMatrixAt(i, m4); heads.setMatrixAt(i, m4); heads.setColorAt(i, cols[i % cols.length]); if (i % 8 === 0) this.flowerSpots.push(p.clone()); }
    stems.castShadow = heads.castShadow = this.quality !== "low"; this.group.add(stems, heads);
    const gn = this.quality === "low" ? 160 : this.quality === "medium" ? 360 : 640;
    const tg = new THREE.ConeGeometry(0.08, 0.4, 3); tg.translate(0, 0.2, 0);
    const tufts = new THREE.InstancedMesh(tg, mat(0xb9a04a, { wind: 0.18 }), gn); let k = 0;
    for (let i = 0; i < gn * 3 && k < gn; i++) { const x = (Math.random() - .5) * 92, z = -46 + Math.random() * 70;
      if (Math.abs(x) < 2.2 && z > -2) continue; if (x > -9 && x < 9 && z > -20 && z < 0.5) continue; if (x > 7.5 && x < 15 && z > 2 && z < 12.5) continue; if (Math.hypot(x + 12, z - 16) < 6.4) continue; if (x > 37 && x < 43) continue;
      p.set(x, 0, z); s.set(1, 0.6 + Math.random() * 0.9, 1); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6); m4.compose(p, q, s); tufts.setMatrixAt(k++, m4); }
    tufts.count = k; this.group.add(tufts);
  }
  /** Rope barriers + overgrowth on locked lots; called whenever ownership changes. */
  applyLots(owned: string[]) {
    this.lotGroup.clear(); this.lotColliders = []; this.lotItems = [];
    const has = (id: string) => id === "home" || owned.includes(id), rope = mat(0xf2e2b0), stake = mat(PAL.woodDark);
    const barrier = (ax: number, az: number, bx: number, bz: number) => { const L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(L / 2.5));
      for (let i = 0; i <= n; i++) this.lotGroup.add(M.mesh(new THREE.CylinderGeometry(0.07, 0.08, 1, 5), stake, ax + (bx - ax) * i / n, 0.5, az + (bz - az) * i / n));
      [0.45, 0.85].forEach(y => { const r = M.mesh(new THREE.CylinderGeometry(0.025, 0.025, L, 4), rope, (ax + bx) / 2, y, (az + bz) / 2); r.rotation.z = Math.PI / 2; r.rotation.y = -Math.atan2(bz - az, bx - ax); this.lotGroup.add(r); });
      this.rect(ax - 0.25, az - 0.25, bx + 0.25, bz + 0.25, this.lotColliders); };
    const pairs: [string, string, number, number, number, number][] = [["home", "east", 26, -24, 26, GATE_Z], ["home", "west", -26, -24, -26, GATE_Z], ["home", "north", -26, -24, 26, -24], ["north", "east", 26, -24, BOUNDS.x1, -24], ["north", "west", BOUNDS.x0, -24, -26, -24]];
    pairs.forEach(([a, b, ax, az, bx, bz]) => { if (!(has(a) && has(b))) barrier(ax, az, bx, bz); });
    for (const L of LOTS) {
      if (has(L.id)) continue; const [x0, z0, x1, z1] = L.rect; let seed = x0 * 13 + z0; const r = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
      for (let i = 0; i < 26; i++) { const x = x0 + 2 + r() * (x1 - x0 - 4), z = z0 + 2 + r() * (z1 - z0 - 4); if (L.id === "east" && x > 37 && x < 43) continue; const k = r();
        const o = k < 0.5 ? M.weeds() : k < 0.8 ? M.rock(1 + r()) : M.stump(); o.position.set(x, 0, z); this.lotGroup.add(o); }
      const [sx, sz, sr] = L.sign, s = M.sign(`${L.name}: ${L.price} xu`, 2.8); s.position.set(sx, 0, sz); s.rotation.y = sr; this.lotGroup.add(s);
      const ix = sx + Math.sin(sr) * -1.3, iz = sz + Math.cos(sr) * -1.3;
      this.lotItems.push({ id: "lot_" + L.id, kind: "lot", x: L.id === "north" ? sx : sx - Math.sign(sx) * 0.8, z: L.id === "north" ? sz + 1.2 : sz, r: 2.4, data: L.id, label: `Mua ${L.name} (${L.price} xu)` });
      void ix; void iz;
    }
    compact(this.lotGroup);
  }
  /** Is a point inside an owned, buildable area? */
  static owned(owned: string[], x: number, z: number, m = 0.4) {
    const inR = (r: [number, number, number, number]) => x > r[0] + m && x < r[2] - m && z > r[1] + m && z < r[3] - m;
    return inR(HOME_RECT) || LOTS.some(L => owned.includes(L.id) && inR(L.rect));
  }
}
export const _unused = canvasTex;
