import * as THREE from "three";
/** Shared materials (one per colour) + wind / water vertex animation injected into standard materials. */
export const TIME = { value: 0 };
const cache = new Map<string, THREE.Material>();
export function mat(color: number | string, o: { wind?: number; rough?: number; emissive?: number; transparent?: boolean; opacity?: number; side?: THREE.Side; flat?: boolean } = {}) {
  const key = JSON.stringify([color, o]); let m = cache.get(key) as THREE.MeshStandardMaterial;
  if (m) return m;
  m = new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? 0.92, metalness: 0, flatShading: o.flat ?? true,
    emissive: o.emissive ?? 0, transparent: !!o.transparent, opacity: o.opacity ?? 1, side: o.side ?? THREE.FrontSide });
  if (o.wind) windify(m, o.wind);
  cache.set(key, m); return m;
}
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
export function waterMat(color = 0x5cc6d9) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.25, metalness: 0.05, transparent: true, opacity: 0.86, flatShading: true });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = TIME;
    sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
      vec4 wq = modelMatrix * vec4(position, 1.0);
      transformed.z += (sin(uTime * 1.4 + wq.x * 0.9) + cos(uTime * 1.1 + wq.z * 0.8)) * 0.045;`);
  };
  m.customProgramCacheKey = () => "water"; return m;
}
/** Small canvas textures for roof tiles, brick courtyard and signs (procedural, tiny). */
export function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, repeat?: [number, number]) {
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h; const c = cv.getContext("2d")!; draw(c);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); } return t;
}
export const texRoof = () => canvasTex(128, 128, c => {
  c.fillStyle = "#c4452e"; c.fillRect(0, 0, 128, 128);
  for (let x = 0; x < 128; x += 16) { const g = c.createLinearGradient(x, 0, x + 16, 0); g.addColorStop(0, "#9e3322"); g.addColorStop(.5, "#d9573c"); g.addColorStop(1, "#9e3322"); c.fillStyle = g; c.fillRect(x, 0, 16, 128); }
  c.fillStyle = "rgba(80,20,10,.35)"; for (let y = 0; y < 128; y += 22) c.fillRect(0, y, 128, 3);
}, [6, 3]);
export const texBrick = () => canvasTex(128, 128, c => {
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { const v = 200 + Math.random() * 25; c.fillStyle = `rgb(${v},${v * 0.52},${v * 0.36})`; c.fillRect(x * 32 + 1, y * 32 + 1, 30, 30); }
  c.strokeStyle = "#a8836a"; c.lineWidth = 2; for (let i = 0; i <= 128; i += 32) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, 128); c.moveTo(0, i); c.lineTo(128, i); c.stroke(); }
}, [7, 4]);
export const texSign = (text: string, bg = "#f3dcb4", fg = "#5a3a1e") => canvasTex(512, 160, c => {
  c.fillStyle = bg; c.fillRect(0, 0, 512, 160); c.strokeStyle = fg; c.lineWidth = 10; c.strokeRect(8, 8, 496, 144);
  c.fillStyle = fg; c.font = "bold 64px 'Baloo 2', 'Trebuchet MS', sans-serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(text, 256, 84);
});
