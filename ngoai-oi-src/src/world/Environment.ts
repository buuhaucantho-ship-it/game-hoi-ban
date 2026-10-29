import * as THREE from "three";
import { hourOf } from "../core/State";
import { mat, PAL } from "./materials";
import { haloMat, lampGlass } from "./models";
/** Flat storybook sky (gradient dome), layered teal hills, cream clouds, day/night + rain. */
type Key = [number, number, number, number, number, number]; // hour, skyTop, skyLow, sun, hemi, ambient
const KEYS: Key[] = [
  [0, 0x26285a, 0x4a3a6a, 0.15, 0.55, 0.25], [4.8, 0x2e3262, 0x5a4472, 0.15, 0.55, 0.25], [6, 0xf2b98a, 0xf8dcae, 0.9, 0.8, 0.35],
  [8, 0xf0dc62, 0xf6eda8, 1.5, 1.0, 0.45], [16, 0xf0dc62, 0xf6eda8, 1.5, 1.0, 0.45], [17.8, 0xf2a86a, 0xf8d29a, 1.0, 0.85, 0.4],
  [19.2, 0x50407a, 0x8a5a7a, 0.25, 0.6, 0.3], [24, 0x26285a, 0x4a3a6a, 0.15, 0.55, 0.25]];
const RAIN_TOP = new THREE.Color(0xb9b8a8), RAIN_LOW = new THREE.Color(0xd8d6c6);
export class Environment {
  sun = new THREE.DirectionalLight(0xfff4dc, 1.5); hemi = new THREE.HemisphereLight(0xfff6d8, 0xc9a070, 1); amb = new THREE.AmbientLight(0xffffff, 0.4);
  sky: THREE.Mesh; skyU = { top: { value: new THREE.Color(PAL.sky) }, low: { value: new THREE.Color(PAL.skyLow) } };
  clouds: THREE.Group[] = []; stars: THREE.Points; ff: THREE.Points; ffBase: Float32Array; smoke: THREE.Mesh[] = []; hills: THREE.Group;
  rain: THREE.InstancedMesh; rainDrops: THREE.Vector3[] = []; raining = 0; wantRain = false;
  night = 0; c1 = new THREE.Color(); c2 = new THREE.Color(); m4 = new THREE.Matrix4();
  constructor(private scene: THREE.Scene, private smokeAt: THREE.Vector3, shadows: number, private lamps: THREE.Object3D[]) {
    scene.add(this.sun, this.sun.target, this.hemi, this.amb); this.setShadows(shadows);
    scene.fog = new THREE.Fog(PAL.skyLow, 95, 280); scene.background = new THREE.Color(PAL.skyLow);
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(400, 24, 12), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: this.skyU,
      vertexShader: "varying float vy; void main(){ vy = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
      fragmentShader: "uniform vec3 top; uniform vec3 low; varying float vy; void main(){ float t = smoothstep(-0.02, 0.45, vy); gl_FragColor = vec4(mix(low, top, t), 1.0);\n#include <colorspace_fragment>\n}" }));
    this.sky.renderOrder = -1; scene.add(this.sky);
    // hills: two rings of soft flattened domes in teal
    this.hills = new THREE.Group(); scene.add(this.hills);
    [[150, PAL.hill, 26, 34], [118, PAL.hillDark, 20, 22]].forEach(([R, col, n, h]) => { const m = mat(col, { fog: true });
      for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + (R as number) * 0.01, s = 18 + ((i * 37) % 11) * 2.4; const d = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2), m);
        d.scale.set(s * 1.8, (h as number) * (0.55 + ((i * 53) % 7) / 10), s); d.position.set(Math.cos(a) * (R as number), -2, Math.sin(a) * (R as number)); d.rotation.y = -a; this.hills.add(d); } });
    const cm = mat(PAL.cloud, { emissive: 0xfff4d8, emissiveIntensity: 0.5, fog: false });
    for (let i = 0; i < 10; i++) { const g = new THREE.Group(); const n = 3 + (i % 3); for (let k = 0; k < n; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(3 + ((i + k) % 3) * 1.4, 14, 10), cm); s.position.set(k * 4 - n * 2, (k % 2) * 1.2, 0); s.scale.set(1, 0.78, 0.6); g.add(s); }
      const fl = new THREE.Mesh(new THREE.BoxGeometry(n * 4.6, 1.8, 3.4), cm); fl.position.y = -1.6; g.add(fl);
      g.position.set(-150 + i * 32, 48 + (i % 4) * 7, -110 + (i % 5) * 50); this.clouds.push(g); scene.add(g); }
    const sg = new THREE.BufferGeometry(), sp: number[] = []; for (let i = 0; i < 360; i++) { const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2 + 0.25; sp.push(Math.cos(a) * Math.cos(e) * 300, Math.sin(e) * 300, Math.sin(a) * Math.cos(e) * 300); }
    sg.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xfff6d8, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false })); scene.add(this.stars);
    const fg = new THREE.BufferGeometry(); this.ffBase = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) { const near = i < 25, a = Math.random() * 6.28, r = Math.random() * (near ? 7.5 : 14);
      this.ffBase.set(near ? [-12 + Math.cos(a) * r, 0.5 + Math.random() * 1.5, 16 + Math.sin(a) * r] : [Math.cos(a) * r, 0.5 + Math.random() * 1.6, 36 + Math.sin(a) * r], i * 3); }
    fg.setAttribute("position", new THREE.BufferAttribute(this.ffBase.slice(), 3));
    this.ff = new THREE.Points(fg, new THREE.PointsMaterial({ color: 0xfff08a, size: 0.24, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); scene.add(this.ff);
    const smm = new THREE.MeshLambertMaterial({ color: 0xf0ebe0, transparent: true, opacity: 0.6, depthWrite: false });
    for (let i = 0; i < 10; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), smm.clone()); s.userData.t = i / 10; this.smoke.push(s); scene.add(s); }
    const rg = new THREE.BoxGeometry(0.03, 0.7, 0.03); this.rain = new THREE.InstancedMesh(rg, new THREE.MeshBasicMaterial({ color: 0xdfeef6, transparent: true, opacity: 0.6 }), 420); this.rain.frustumCulled = false; this.rain.count = 0; scene.add(this.rain);
    for (let i = 0; i < 420; i++) this.rainDrops.push(new THREE.Vector3((Math.random() - .5) * 40, Math.random() * 18, (Math.random() - .5) * 40));
  }
  setShadows(size: number) { this.sun.castShadow = size > 0; this.sun.shadow.intensity = 0.45; if (size > 0) { this.sun.shadow.mapSize.set(size, size); const c = this.sun.shadow.camera as THREE.OrthographicCamera; c.left = -30; c.right = 30; c.top = 30; c.bottom = -30; c.near = 1; c.far = 140; this.sun.shadow.bias = -0.0006; this.sun.shadow.normalBias = 0.03; c.updateProjectionMatrix(); this.sun.shadow.map?.dispose(); (this.sun.shadow as any).map = null; } }
  private sample(h: number) { let a = KEYS[0], b = KEYS[KEYS.length - 1]; for (let i = 0; i < KEYS.length - 1; i++) if (h >= KEYS[i][0] && h <= KEYS[i + 1][0]) { a = KEYS[i]; b = KEYS[i + 1]; break; }
    const t = (h - a[0]) / Math.max(0.001, b[0] - a[0]); return { a, b, s: t * t * (3 - 2 * t) }; }
  update(dt: number, time: number, focus: THREE.Vector3, elapsed: number) {
    const h = hourOf(time), { a, b, s } = this.sample(h);
    this.raining += ((this.wantRain ? 1 : 0) - this.raining) * Math.min(1, dt * 0.6); const rn = this.raining;
    const top = this.c1.setHex(a[1]).lerp(this.c2.setHex(b[1]), s).clone(), low = this.c1.setHex(a[2]).lerp(this.c2.setHex(b[2]), s).clone();
    const dayK = h > 6 && h < 18.5 ? 1 : 0.3; top.lerp(RAIN_TOP, rn * 0.7 * dayK); low.lerp(RAIN_LOW, rn * 0.7 * dayK);
    this.skyU.top.value.copy(top); this.skyU.low.value.copy(low); (this.scene.background as THREE.Color).copy(low); (this.scene.fog as THREE.Fog).color.copy(low);
    (this.scene.fog as THREE.Fog).near = 95 - rn * 55; (this.scene.fog as THREE.Fog).far = 280 - rn * 150;
    this.sun.intensity = (a[3] + (b[3] - a[3]) * s) * (1 - rn * 0.55); this.hemi.intensity = a[4] + (b[4] - a[4]) * s; this.amb.intensity = a[5] + (b[5] - a[5]) * s;
    this.night = h >= 19.2 || h < 5 ? 1 : h > 18 ? (h - 18) / 1.2 : h < 6 ? 1 - (h - 5) : 0;
    this.hemi.color.setHex(this.night > 0.5 ? 0x8a8ad0 : 0xfff6d8); this.hemi.groundColor.setHex(this.night > 0.5 ? 0x4a3a5a : 0xc9a070);
    const isDay = h > 5.6 && h < 18.6, ang = (h - 6) / 12 * Math.PI, el = Math.sin(ang);
    const dir = isDay ? new THREE.Vector3(Math.cos(ang) * 0.8, Math.max(0.3, el), 0.45) : new THREE.Vector3(-0.4, 0.8, 0.3);
    this.sun.color.setHex(isDay ? (el < 0.35 ? 0xffc89a : 0xfff4dc) : 0xa8b4ff);
    this.sun.position.copy(focus).addScaledVector(dir.normalize(), 60); this.sun.target.position.copy(focus);
    this.sky.position.copy(focus); this.hills.position.set(focus.x * 0.0, 0, focus.z * 0.0);
    (this.stars.material as THREE.PointsMaterial).opacity = this.night * 0.9 * (1 - rn);
    (this.ff.material as THREE.PointsMaterial).opacity = this.night * (0.7 + Math.sin(elapsed * 3) * 0.3) * (1 - rn);
    if (this.night > 0.05) { const p = this.ff.geometry.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) p.setXYZ(i, this.ffBase[i * 3] + Math.sin(elapsed * 0.7 + i) * 0.6, this.ffBase[i * 3 + 1] + Math.sin(elapsed * 1.3 + i * 2) * 0.3, this.ffBase[i * 3 + 2] + Math.cos(elapsed * 0.6 + i) * 0.6); p.needsUpdate = true; }
    // lamps glow at dusk
    const lampOn = this.night > 0.3 || rn > 0.6; lampGlass.color.setHex(lampOn ? 0xfff1b8 : 0xe8e4d0); haloMat.opacity += ((lampOn ? 0.85 : 0) - haloMat.opacity) * Math.min(1, dt * 2);
    this.clouds.forEach((c, i) => { c.position.x += dt * (0.8 + i * 0.06); if (c.position.x > 170) c.position.x = -170; });
    const smoky = (h > 10.3 && h < 12.5) || (h > 16.8 && h < 19.5) || (h > 5.5 && h < 7);
    this.smoke.forEach(sm => { sm.userData.t = (sm.userData.t + dt * 0.18) % 1; const t = sm.userData.t; sm.position.set(this.smokeAt.x + Math.sin(t * 6 + elapsed) * 0.3 + t * 1.2, this.smokeAt.y + t * 4, this.smokeAt.z);
      sm.scale.setScalar(0.4 + t * 1.6); (sm.material as THREE.MeshLambertMaterial).opacity = smoky ? 0.55 * (1 - t) : 0; sm.visible = smoky; });
    // rain streaks around the camera focus
    const n = Math.floor(this.rainDrops.length * rn); this.rain.count = n;
    for (let i = 0; i < n; i++) { const d = this.rainDrops[i]; d.y -= dt * 16; if (d.y < 0) { d.y = 16 + Math.random() * 4; d.x = (Math.random() - .5) * 40; d.z = (Math.random() - .5) * 40; }
      this.m4.makeTranslation(focus.x + d.x, d.y, focus.z + d.z); this.rain.setMatrixAt(i, this.m4); }
    this.rain.instanceMatrix.needsUpdate = true;
  }
}

