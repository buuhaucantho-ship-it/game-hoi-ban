import * as THREE from "three";
/** Flat vector "storybook" look: toon materials with a soft 3-step ramp, shared per colour, plus wind / water vertex motion. */
export const TIME = { value: 0 };
export const PAL = {
  sky: 0xf4ea8a, skyLow: 0xf8f1b4, hill: 0x8ab8a2, hillDark: 0x6f9f8c, cloud: 0xfdf6dc,
  ground: 0xdca863, lawn: 0xe4b46c, plaza: 0xe9c48a, plazaLine: 0xf3d9a4, soilDry: 0x9a6a44, soilWet: 0x6a4630, soilRaw: 0xc99550,
  gold: 0xeab83c, goldDark: 0xc9962a, orange: 0xd9743c, orangeDark: 0xbb5a2c, tan: 0xdcaa6a, tanLight: 0xf2d28c,
  trunk: 0x5e3b3b, stone: 0x5c2f4e, stone2: 0x7a4668, cap: 0xe8e1da, step: 0xd3ccc4, rail: 0xf5f3ee,
  bench: 0xc95a5a, benchDark: 0x6a3a3a, lamp: 0x7ec3e3, fountain: 0x8f98c0, fountain2: 0xb3bbdb, water: 0x8fd0dc,
  leaf: 0x6aa65a, leaf2: 0x8cbf5a, wood: 0x9a6a44, woodDark: 0x6e4a32, roof: 0xc8553c, wall: 0xf3e1b8
};
let ramp: THREE.DataTexture | null = null;
export function toonRamp() {
  if (ramp) return ramp; const d = new Uint8Array([150, 150, 150, 255, 205, 205, 205, 255, 255, 255, 255, 255]);
  ramp = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat); ramp.minFilter = ramp.magFilter = THREE.NearestFilter; ramp.generateMipmaps = false; ramp.needsUpdate = true; return ramp;
}
const cache = new Map<string, THREE.Material>();
type MO = { wind?: number; rough?: number; emissive?: number; emissiveIntensity?: number; transparent?: boolean; opacity?: number; side?: THREE.Side; flat?: boolean; map?: THREE.Texture; fog?: boolean };
export function mat(color: number | string, o: MO = {}) {
  const key = JSON.stringify([color, { ...o, map: o.map?.uuid }]); let m = cache.get(key) as THREE.MeshToonMaterial;
  if (m) return m;
  m = new THREE.MeshToonMaterial({ color, gradientMap: toonRamp(), emissive: o.emissive ?? 0, emissiveIntensity: o.emissiveIntensity ?? 1, transparent: !!o.transparent, opacity: o.opacity ?? 1, side: o.side ?? THREE.FrontSide, map: o.map ?? null, fog: o.fog ?? true });
  if (o.wind) windify(m, o.wind);
  cache.set(key, m); return m;
}
/** A fresh (uncached) toon material for things whose colour changes at runtime. */
export const tmat = (color: number, o: MO = {}) => new THREE.MeshToonMaterial({ color, gradientMap: toonRamp(), map: o.map ?? null, transparent: !!o.transparent, opacity: o.opacity ?? 1, emissive: o.emissive ?? 0 });
export function windify(m: THREE.Material, k: number) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = TIME;
    sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
      vec4 wpos = modelMatrix * vec4(position, 1.0);
      #ifdef USE_INSTANCING
        wpos = modelMatrix * instanceMatrix * vec4(position, 1.0);
      #endif
      float hh = max(position.y, 0.0);
      transformed.x += sin(uTime * 1.7 + wpos.x * 0.35 + wpos.z * 0.21) * ${k.toFixed(3)} * hh;
      transformed.z += cos(uTime * 1.3 + wpos.z * 0.31 + wpos.x * 0.1) * ${(k * 0.6).toFixed(3)} * hh;`);
  };
  m.customProgramCacheKey = () => "wind" + k;
}
export function waterMat(color = PAL.water) {
  const m = new THREE.MeshToonMaterial({ color, gradientMap: toonRamp(), transparent: true, opacity: 0.92, emissive: 0x2a5a66, emissiveIntensity: 0.25 });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = TIME;
    sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
      vec4 wq = modelMatrix * vec4(position, 1.0);
      transformed.z += (sin(uTime * 1.4 + wq.x * 0.9) + cos(uTime * 1.1 + wq.z * 0.8)) * 0.035;`);
  };
  m.customProgramCacheKey = () => "water"; return m;
}
export function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, repeat?: [number, number]) {
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h; const c = cv.getContext("2d")!; draw(c);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); } return t;
}
const hexs = (n: number) => "#" + n.toString(16).padStart(6, "0");
/** Leaf motif textures like the reference art: crosses / leaves / small triangles in a lighter or darker tone. */
const leafTexCache: Record<string, THREE.Texture> = {};
export function leafTex(kind: "gold" | "orange" | "tan") {
  if (leafTexCache[kind]) return leafTexCache[kind];
  const base = { gold: PAL.gold, orange: PAL.orange, tan: PAL.tan }[kind], mark = { gold: PAL.goldDark, orange: PAL.orangeDark, tan: PAL.tanLight }[kind];
  const t = canvasTex(256, 256, c => { c.fillStyle = hexs(base); c.fillRect(0, 0, 256, 256); c.fillStyle = hexs(mark); let seed = 7; const r = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 26; i++) { const x = r() * 256, y = r() * 256, s = 9 + r() * 9; c.save(); c.translate(x, y); c.rotate(r() * 6);
      if (kind === "tan") { for (let k = 0; k < 4; k++) { c.rotate(Math.PI / 2); c.beginPath(); c.ellipse(0, -s * 0.55, s * 0.32, s * 0.55, 0, 0, 7); c.fill(); } }
      else if (kind === "gold") { c.beginPath(); c.moveTo(0, -s); c.quadraticCurveTo(s * 0.7, 0, 0, s); c.quadraticCurveTo(-s * 0.7, 0, 0, -s); c.fill(); }
      else { c.beginPath(); c.moveTo(-s * 0.5, -s * 0.5); c.lineTo(s * 0.6, 0); c.lineTo(-s * 0.5, s * 0.5); c.closePath(); c.fill(); }
      c.restore(); } }, [2, 1]);
  return (leafTexCache[kind] = t);
}
export const texRoof = () => canvasTex(128, 128, c => {
  c.fillStyle = "#c8553c"; c.fillRect(0, 0, 128, 128); c.fillStyle = "#b0442e"; for (let x = 0; x < 128; x += 16) c.fillRect(x, 0, 5, 128);
  c.fillStyle = "#9a3a28"; for (let y = 0; y < 128; y += 22) c.fillRect(0, y, 128, 3);
}, [6, 3]);
export const texPave = (rep: [number, number] = [8, 5]) => canvasTex(128, 128, c => {
  c.fillStyle = hexs(PAL.plaza); c.fillRect(0, 0, 128, 128); c.strokeStyle = hexs(PAL.plazaLine); c.lineWidth = 4; c.strokeRect(2, 2, 124, 124);
}, rep);
export const texStone = (rep: [number, number] = [4, 1]) => canvasTex(256, 64, c => {
  c.fillStyle = hexs(PAL.stone); c.fillRect(0, 0, 256, 64); c.fillStyle = hexs(PAL.stone2); let s = 3; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 34; i++) { c.beginPath(); c.ellipse(r() * 256, 8 + r() * 48, 7 + r() * 9, 4 + r() * 4, r(), 0, 7); c.fill(); }
}, rep);
export const texSign = (text: string, bg = "#f6e2b4", fg = "#5e3b3b") => canvasTex(512, 160, c => {
  c.fillStyle = bg; c.fillRect(0, 0, 512, 160); c.strokeStyle = fg; c.lineWidth = 10; c.strokeRect(8, 8, 496, 144);
  c.fillStyle = fg; c.font = "bold 60px 'Baloo 2', 'Trebuchet MS', sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
  let size = 60; while (c.measureText(text).width > 470 && size > 26) { size -= 4; c.font = `bold ${size}px 'Baloo 2', 'Trebuchet MS', sans-serif`; } c.fillText(text, 256, 84);
});
