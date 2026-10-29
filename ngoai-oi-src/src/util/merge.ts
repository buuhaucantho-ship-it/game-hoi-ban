import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
/** Bake static meshes under `root` into one mesh per material (huge draw-call saving). Objects with userData.keep stay as they are. */
export function mergeStatic(root: THREE.Object3D, keep: (o: THREE.Object3D) => boolean = () => false): THREE.Group {
  root.updateMatrixWorld(true); const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map<string, { m: THREE.Material; geos: THREE.BufferGeometry[]; cast: boolean; recv: boolean }>(), kept: THREE.Object3D[] = [];
  const visit = (o: THREE.Object3D) => {
    if (o !== root && (keep(o) || o.userData.keep)) { kept.push(o); return; }
    const mm = o as THREE.Mesh;
    if (mm.isMesh && !(mm as any).isInstancedMesh && !Array.isArray(mm.material) && o.visible) {
      const g0 = mm.geometry; if (g0.attributes.color || !g0.attributes.normal || !g0.attributes.uv) { kept.push(o); return; }
      let g = g0.index ? g0.toNonIndexed() : g0.clone(); for (const k of Object.keys(g.attributes)) if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, mm.matrixWorld)); const key = (mm.material as THREE.Material).uuid;
      const b = buckets.get(key) || { m: mm.material as THREE.Material, geos: [], cast: false, recv: false }; b.geos.push(g); b.cast ||= mm.castShadow; b.recv ||= mm.receiveShadow; buckets.set(key, b);
    } else if (o !== root && (mm.isMesh || (o as THREE.Sprite).isSprite || (o as THREE.Points).isPoints)) { kept.push(o); return; }
    o.children.forEach(visit);
  };
  visit(root);
  const out = new THREE.Group(); out.name = "merged";
  buckets.forEach(b => { const g = b.geos.length === 1 ? b.geos[0] : mergeGeometries(b.geos, false); if (!g) return; const m = new THREE.Mesh(g, b.m); m.castShadow = b.cast; m.receiveShadow = b.recv; out.add(m); b.geos.forEach(x => x !== g && x.dispose()); });
  // re-attach kept objects with their transform relative to root
  kept.forEach(o => { const mw = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld); o.parent?.remove(o); mw.decompose(o.position, o.quaternion, o.scale); out.add(o); });
  return out;
}
/** Replace a group's contents in place with its merged version (keeps the group object/transform). */
export function compact(g: THREE.Object3D, keep?: (o: THREE.Object3D) => boolean) { const saved = { p: g.position.clone(), q: g.quaternion.clone(), s: g.scale.clone(), parent: g.parent };
  const merged = mergeStatic(g, keep); g.clear(); merged.children.slice().forEach(c => g.add(c)); g.position.copy(saved.p); g.quaternion.copy(saved.q); g.scale.copy(saved.s); return g; }
