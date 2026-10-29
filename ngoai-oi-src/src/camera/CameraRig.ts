import * as THREE from "three";
/** Third-person orbit camera with optional first-person (POV) mode. */
export class CameraRig {
  yaw = Math.PI; pitch = 0.42; dist = 7.5; pov = false; target = new THREE.Vector3(); sens = 1; occluders: THREE.Object3D[] = []; ray = new THREE.Raycaster(); cur = 7.5;
  constructor(public cam: THREE.PerspectiveCamera) {}
  input(dx: number, dy: number, zoom: number) {
    this.yaw -= dx * 0.005 * this.sens; this.pitch += dy * 0.004 * this.sens;
    this.pitch = this.pov ? Math.max(-1.2, Math.min(1.2, this.pitch)) : Math.max(-0.15, Math.min(1.25, this.pitch));
    if (zoom) this.dist = Math.max(3.2, Math.min(13, this.dist + zoom * 0.8));
  }
  toggle() { this.pov = !this.pov; this.pitch = this.pov ? 0.05 : 0.42; }
  update(dt: number, p: THREE.Vector3, headY: number) {
    const k = 1 - Math.pow(0.0005, dt);
    if (this.pov) { this.target.set(p.x, p.y + headY, p.z); this.cam.position.copy(this.target);
      this.cam.lookAt(this.target.x - Math.sin(this.yaw) * Math.cos(this.pitch), this.target.y - Math.sin(this.pitch), this.target.z - Math.cos(this.yaw) * Math.cos(this.pitch)); return; }
    this.target.lerp(new THREE.Vector3(p.x, p.y + 1.25, p.z), k);
    const off = new THREE.Vector3(Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), Math.cos(this.yaw) * Math.cos(this.pitch)).multiplyScalar(this.dist);
    // pull the camera in front of walls/roofs that would hide the player
    let d = this.dist; if (this.occluders.length) { this.ray.set(this.target, off.clone().normalize()); this.ray.far = this.dist; const hit = this.ray.intersectObjects(this.occluders, true)[0]; if (hit) d = Math.max(1.4, hit.distance - 0.35); }
    this.cur += (d - this.cur) * (d < this.cur ? 1 : Math.min(1, k * 0.8)); off.setLength(this.cur);
    const want = this.target.clone().add(off); if (want.y < 0.6) want.y = 0.6;
    this.cam.position.lerp(want, this.cur < this.dist - 0.2 ? 1 : Math.min(1, k * 1.6)); this.cam.lookAt(this.target);
  }
  /** forward/right vectors on the ground plane for camera-relative movement */
  basis() { return { fx: -Math.sin(this.yaw), fz: -Math.cos(this.yaw), rx: Math.cos(this.yaw), rz: -Math.sin(this.yaw) }; }
}
