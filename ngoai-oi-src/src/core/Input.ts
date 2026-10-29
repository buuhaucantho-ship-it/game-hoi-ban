/** Keyboard + mouse + touch (virtual joystick left, swipe-to-look right). */
export class Input {
  keys = new Set<string>(); pressed = new Set<string>(); look = { x: 0, y: 0 }; zoom = 0;
  joy = { x: 0, y: 0, id: -1, cx: 0, cy: 0 }; touchRun = false; enabled = true;
  private lookId = -1; private lx = 0; private ly = 0; private dragging = false;
  constructor(private canvas: HTMLElement, private joyEl: HTMLElement, private knob: HTMLElement) {
    addEventListener("keydown", e => { if ((e.target as HTMLElement).closest("input,select,textarea")) return; const k = e.code;
      if (!this.keys.has(k)) this.pressed.add(k); this.keys.add(k); if (["Space", "Tab"].includes(k)) e.preventDefault(); });
    addEventListener("keyup", e => this.keys.delete(e.code));
    addEventListener("blur", () => this.keys.clear());
    canvas.addEventListener("pointerdown", e => this.down(e)); addEventListener("pointermove", e => this.move(e));
    addEventListener("pointerup", e => this.up(e)); addEventListener("pointercancel", e => this.up(e));
    canvas.addEventListener("wheel", e => { this.zoom += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
    canvas.addEventListener("contextmenu", e => e.preventDefault());
  }
  private down(e: PointerEvent) {
    if (e.pointerType === "touch" && e.clientX < innerWidth * 0.42 && this.joy.id < 0) {
      this.joy.id = e.pointerId; this.joy.cx = e.clientX; this.joy.cy = e.clientY; this.joyEl.style.left = e.clientX + "px"; this.joyEl.style.top = e.clientY + "px"; this.joyEl.classList.add("on"); return; }
    if (this.lookId < 0) { this.lookId = e.pointerId; this.lx = e.clientX; this.ly = e.clientY; this.dragging = true; }
  }
  private move(e: PointerEvent) {
    if (e.pointerId === this.joy.id) { const dx = e.clientX - this.joy.cx, dy = e.clientY - this.joy.cy, R = 54, d = Math.hypot(dx, dy), k = d > R ? R / d : 1;
      this.joy.x = dx * k / R; this.joy.y = dy * k / R; this.knob.style.transform = `translate(${dx * k}px,${dy * k}px)`; this.touchRun = d > R * 1.25; return; }
    if (e.pointerId === this.lookId && this.dragging) { this.look.x += e.clientX - this.lx; this.look.y += e.clientY - this.ly; this.lx = e.clientX; this.ly = e.clientY; }
  }
  private up(e: PointerEvent) {
    if (e.pointerId === this.joy.id) { this.joy.id = -1; this.joy.x = this.joy.y = 0; this.knob.style.transform = ""; this.joyEl.classList.remove("on"); this.touchRun = false; }
    if (e.pointerId === this.lookId) { this.lookId = -1; this.dragging = false; }
  }
  tap(code: string) { this.pressed.add(code); }
  hit(code: string) { return this.pressed.has(code); }
  moveVec() { if (!this.enabled) return { x: 0, z: 0 }; let x = 0, z = 0;
    if (this.keys.has("KeyW") || this.keys.has("ArrowUp")) z -= 1; if (this.keys.has("KeyS") || this.keys.has("ArrowDown")) z += 1;
    if (this.keys.has("KeyA") || this.keys.has("ArrowLeft")) x -= 1; if (this.keys.has("KeyD") || this.keys.has("ArrowRight")) x += 1;
    x += this.joy.x; z += this.joy.y; const l = Math.hypot(x, z); return l > 1 ? { x: x / l, z: z / l } : { x, z }; }
  running(btn: boolean) { return this.keys.has("ShiftLeft") || this.keys.has("ShiftRight") || this.touchRun || btn; }
  endFrame() { this.pressed.clear(); this.look.x = this.look.y = 0; this.zoom = 0; }
}
