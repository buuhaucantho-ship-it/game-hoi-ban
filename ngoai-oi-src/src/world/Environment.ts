import * as THREE from "three";
import { hourOf } from "../core/State";
import { mat } from "./materials";
/** Sky colour, sun/moon light cycle, clouds, stars, fireflies and kitchen smoke. */
const KEYS: [number, number, number, number, number][] = [ // hour, sky, sun intensity, hemi, fog
  [0, 0x1b2a4a, 0, 0.35, 0x1b2a4a], [4.8, 0x223458, 0, 0.35, 0x223458], [6, 0xf4b48a, 0.8, 0.6, 0xf2c0a0], [8, 0x8fd3f4, 2.3, 0.9, 0xbfe3f2],
  [16, 0x8fd3f4, 2.3, 0.9, 0xbfe3f2], [17.8, 0xf39a6a, 1.2, 0.7, 0xf2b08a], [19.2, 0x3a3a6a, 0.1, 0.42, 0x3a3a6a], [24, 0x1b2a4a, 0, 0.35, 0x1b2a4a]];
export class Environment {
  sun = new THREE.DirectionalLight(0xfff1d6, 2); hemi = new THREE.HemisphereLight(0xbfe3ff, 0x6a8a4a, 0.9); amb = new THREE.AmbientLight(0xffffff, 0.15);
  clouds: THREE.Group[] = []; stars: THREE.Points; ff: THREE.Points; ffBase: Float32Array; smoke: THREE.Mesh[] = []; disc: THREE.Mesh;
  night = 0; c1 = new THREE.Color(); c2 = new THREE.Color();
  constructor(private scene: THREE.Scene, private smokeAt: THREE.Vector3, shadows: number) {
    scene.add(this.sun, this.sun.target, this.hemi, this.amb); this.setShadows(shadows);
    scene.fog = new THREE.Fog(0xbfe3f2, 45, 120); scene.background = new THREE.Color(0x8fd3f4);
    const cm = mat(0xffffff, { rough: 1 });
    for (let i = 0; i < 9; i++) { const g = new THREE.Group(); for (let k = 0; k < 4; k++) { const s = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6 + Math.random() * 1.4, 1), cm); s.position.set(k * 2 - 3, Math.random(), Math.random() * 1.5); s.scale.y = 0.6; g.add(s); }
      g.position.set(-80 + i * 20 + Math.random() * 8, 26 + Math.random() * 8, -60 + Math.random() * 120); this.clouds.push(g); scene.add(g); }
    const sg = new THREE.BufferGeometry(), sp: number[] = []; for (let i = 0; i < 400; i++) { const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2 + 0.2; sp.push(Math.cos(a) * Math.cos(e) * 140, Math.sin(e) * 140, Math.sin(a) * Math.cos(e) * 140); }
    sg.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0, fog: false })); scene.add(this.stars);
    const fg = new THREE.BufferGeometry(); this.ffBase = new Float32Array(45 * 3);
    for (let i = 0; i < 45; i++) { const near = i < 25, a = Math.random() * 6.28, r = Math.random() * (near ? 7.5 : 14);
      this.ffBase.set(near ? [-12 + Math.cos(a) * r, 0.5 + Math.random() * 1.5, 17 + Math.sin(a) * r] : [Math.cos(a) * r, 0.5 + Math.random() * 1.6, -2 + Math.sin(a) * r], i * 3); }
    fg.setAttribute("position", new THREE.BufferAttribute(this.ffBase.slice(), 3));
    this.ff = new THREE.Points(fg, new THREE.PointsMaterial({ color: 0xfff08a, size: 0.22, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); scene.add(this.ff);
    const smm = new THREE.MeshStandardMaterial({ color: 0xdedede, transparent: true, opacity: 0.6, roughness: 1, depthWrite: false });
    for (let i = 0; i < 10; i++) { const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35, 1), smm.clone()); s.userData.t = i / 10; this.smoke.push(s); scene.add(s); }
    this.disc = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 12), new THREE.MeshBasicMaterial({ color: 0xfff2b0, fog: false })); scene.add(this.disc);
  }
  setShadows(size: number) { this.sun.castShadow = size > 0; if (size > 0) { this.sun.shadow.mapSize.set(size, size); const c = this.sun.shadow.camera as THREE.OrthographicCamera; c.left = -28; c.right = 28; c.top = 28; c.bottom = -28; c.near = 1; c.far = 120; this.sun.shadow.bias = -0.0006; this.sun.shadow.normalBias = 0.03; c.updateProjectionMatrix(); this.sun.shadow.map?.dispose(); (this.sun.shadow as any).map = null; } }
  private sample(h: number) { let a = KEYS[0], b = KEYS[KEYS.length - 1]; for (let i = 0; i < KEYS.length - 1; i++) if (h >= KEYS[i][0] && h <= KEYS[i + 1][0]) { a = KEYS[i]; b = KEYS[i + 1]; break; }
    const t = (h - a[0]) / Math.max(0.001, b[0] - a[0]), s = t * t * (3 - 2 * t); return { a, b, s }; }
  update(dt: number, time: number, focus: THREE.Vector3, elapsed: number) {
    const h = hourOf(time), { a, b, s } = this.sample(h);
    (this.scene.background as THREE.Color).copy(this.c1.setHex(a[1]).lerp(this.c2.setHex(b[1]), s));
    (this.scene.fog as THREE.Fog).color.copy(this.c1.setHex(a[4]).lerp(this.c2.setHex(b[4]), s));
    const day = (h - 6) / 12, ang = day * Math.PI, el = Math.sin(ang), isDay = h > 5.6 && h < 18.6;
    this.sun.intensity = a[2] + (b[2] - a[2]) * s; this.hemi.intensity = a[3] + (b[3] - a[3]) * s;
    this.night = Math.max(0, Math.min(1, isDay ? 0 : 1 - Math.abs(el) * 0 + (h > 18.6 && h < 19.6 ? h - 18.6 - 1 + 1 : 1)));
    this.night = h >= 19.2 || h < 5 ? 1 : h > 18 ? (h - 18) / 1.2 : h < 6 ? 1 - (h - 5) : 0;
    const dir = isDay ? new THREE.Vector3(Math.cos(ang) * 0.9, Math.max(0.15, el), 0.35) : new THREE.Vector3(-0.4, 0.8, 0.3);
    this.sun.color.setHex(isDay ? (el < 0.35 ? 0xffc89a : 0xfff1d6) : 0x9ab0ff); if (!isDay) this.sun.intensity = 0.35;
    this.sun.position.copy(focus).addScaledVector(dir.normalize(), 50); this.sun.target.position.copy(focus);
    this.disc.position.copy(focus).addScaledVector(dir, 130); (this.disc.material as THREE.MeshBasicMaterial).color.setHex(isDay ? 0xfff2b0 : 0xeef2ff); this.disc.scale.setScalar(isDay ? 1 : 0.6);
    this.hemi.color.setHex(this.night > 0.5 ? 0x5a6aa0 : 0xbfe3ff);
    (this.stars.material as THREE.PointsMaterial).opacity = this.night * 0.9;
    const fm = this.ff.material as THREE.PointsMaterial; fm.opacity = this.night * (0.7 + Math.sin(elapsed * 3) * 0.3);
    if (this.night > 0.05) { const p = this.ff.geometry.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) p.setXYZ(i, this.ffBase[i * 3] + Math.sin(elapsed * 0.7 + i) * 0.6, this.ffBase[i * 3 + 1] + Math.sin(elapsed * 1.3 + i * 2) * 0.3, this.ffBase[i * 3 + 2] + Math.cos(elapsed * 0.6 + i) * 0.6); p.needsUpdate = true; }
    this.clouds.forEach((c, i) => { c.position.x += dt * (0.6 + i * 0.05); if (c.position.x > 90) c.position.x = -90; });
    const smoky = (h > 10.3 && h < 12.5) || (h > 16.8 && h < 19.5) || (h > 5.5 && h < 7);
    this.smoke.forEach(sm => { sm.userData.t = (sm.userData.t + dt * 0.18) % 1; const t = sm.userData.t; sm.position.set(this.smokeAt.x + Math.sin(t * 6 + elapsed) * 0.3 + t * 1.2, this.smokeAt.y + t * 4, this.smokeAt.z);
      sm.scale.setScalar(0.4 + t * 1.6); (sm.material as THREE.MeshStandardMaterial).opacity = smoky ? 0.55 * (1 - t) : 0; sm.visible = smoky; });
  }
}
