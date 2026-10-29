import "./style.css";
import * as THREE from "three";
import { Game } from "./core/Game";
import { UI } from "./ui/UI";
import { loadGame } from "./save/SaveSystem";
import { newState, isMobile, Look } from "./core/State";
import { Avatar } from "./player/Avatar";
import { audio } from "./audio/AudioManager";
/** Boot: load save → build world behind the title screen → continue, or story → character creator → play. */
async function boot() {
  const ui = new UI(); ui.loading(true, "Đang về quê ngoại…");
  addEventListener("pointerdown", () => audio.unlock(), { once: true }); addEventListener("keydown", () => audio.unlock(), { once: true });
  const saved = await loadGame(), canvas = document.getElementById("c") as HTMLCanvasElement;
  let game: Game;
  try { game = new Game(canvas, saved?.settings.quality ?? (isMobile() ? "low" : "medium"), ui); }
  catch (e) { ui.loading(false); document.getElementById("ui")!.innerHTML = `<div class="screen title"><div class="logo"><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div><p class="hint">Trình duyệt này chưa bật WebGL nên không chạy được game 3D. Thử Chrome/Safari bản mới nha.</p><a class="btn" href="../index.html">← Game Hội Bạn</a></div>`; return; }
  setTimeout(() => ui.loading(false), 300);
  const fresh = () => ui.story(() => ui.creator(look => (pv ||= previewer())(look), look => { stopPreview(); game.start(newState(look), true); }));
  if (sessionStorage.getItem("ngoai-new")) { sessionStorage.removeItem("ngoai-new"); fresh(); return; }
  ui.title(!!saved, () => game.start(saved!, false), fresh);
}
let stopPreview = () => {}; let pv: ((l: Look) => void) | null = null;
/** Small separate renderer for the character creator preview. */
function previewer() {
  const cv = document.getElementById("pv") as HTMLCanvasElement | null; let av: Avatar | null = null; const sc = new THREE.Scene();
  if (!cv) return () => {};
  const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); r.setPixelRatio(Math.min(devicePixelRatio, 2)); r.outputColorSpace = THREE.SRGBColorSpace;
  const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 20); cam.position.set(0, 1.15, 5.6); cam.lookAt(0, 0.95, 0);
  sc.add(new THREE.HemisphereLight(0xfff4e0, 0x8a9a6a, 1.6)); const d = new THREE.DirectionalLight(0xffffff, 1.8); d.position.set(2, 4, 3); sc.add(d);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1, 0.12, 24), new THREE.MeshStandardMaterial({ color: 0x9ccc6a, flatShading: true })); base.position.y = -0.06; sc.add(base);
  let rot = 0.4, drag = false, lx = 0, alive = true;
  cv.addEventListener("pointerdown", e => { drag = true; lx = e.clientX; }); addEventListener("pointerup", () => drag = false);
  addEventListener("pointermove", e => { if (drag) { rot += (e.clientX - lx) * 0.01; lx = e.clientX; } });
  const loop = () => { if (!alive) return; requestAnimationFrame(loop); const w = cv.clientWidth, h = cv.clientHeight; if (cv.width !== Math.floor(w * r.getPixelRatio())) { r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
    if (av) { if (!drag) rot += 0.004; av.root.rotation.y = rot; av.update(1 / 60, 0, false, null, 0); } r.render(sc, cam); };
  loop(); stopPreview = () => { alive = false; r.dispose(); };
  return (look: Look) => { if (av) sc.remove(av.root); av = new Avatar(look); sc.add(av.root); };
}
boot();
