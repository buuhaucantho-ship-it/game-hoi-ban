import * as THREE from "three";
import { BUILD } from "../data/buildings";
/** Renders each buildable model once into a small picture for the build catalog (same art as the world). */
const cache: Record<string, string> = {};
export function buildThumbs(): Record<string, string> {
  if (Object.keys(cache).length) return cache;
  let r: THREE.WebGLRenderer;
  try { r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true }); } catch { return cache; }
  r.setSize(112, 112, false); r.outputColorSpace = THREE.SRGBColorSpace;
  const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
  sc.add(new THREE.HemisphereLight(0xfff6d8, 0xc9a070, 1.4)); const d = new THREE.DirectionalLight(0xfff4dc, 1.6); d.position.set(3, 6, 4); sc.add(d); sc.add(new THREE.AmbientLight(0xffffff, 0.4));
  for (const def of Object.values(BUILD)) {
    const o = def.model(); o.traverse(x => { if ((x as THREE.Sprite).isSprite) x.visible = false; }); sc.add(o);
    const box = new THREE.Box3().setFromObject(o), c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3()), R = Math.max(sz.x, sz.y, sz.z) * 0.62 + 0.2;
    const dist = R / Math.sin(THREE.MathUtils.degToRad(15)); cam.position.set(c.x + dist * 0.55, c.y + dist * 0.5, c.z + dist * 0.67); cam.lookAt(c);
    r.render(sc, cam); cache[def.id] = r.domElement.toDataURL("image/png"); sc.remove(o);
  }
  r.dispose(); r.forceContextLoss(); return cache;
}
