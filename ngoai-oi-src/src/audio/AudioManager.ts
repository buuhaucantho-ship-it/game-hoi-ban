/** Web Audio only (no files): synthesized sáo + đàn tranh music, day/night ambience, SFX. Starts after a user gesture. */
type Grp = "music" | "ambient" | "sfx" | "ui";
const PENTA = [0, 2, 5, 7, 9]; // Southern-ish five-tone scale (hò, xự, xàng, xê, cống)
const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);
export class AudioManager {
  ctx: AudioContext | null = null; master!: GainNode; g = {} as Record<Grp, GainNode>; noise!: AudioBuffer;
  vol: Record<Grp, number> = { music: 0.6, ambient: 0.7, sfx: 0.8, ui: 0.7 }; muted = false;
  hour = 8; private nextNote = 0; private stp = 0; private phrase: number[] = []; private windSrc: AudioBufferSourceNode | null = null; private windG!: GainNode;
  private amb = 0; private timer = 0; paused = false;
  unlock() {
    if (this.ctx) { if (this.ctx.state !== "running") this.ctx.resume(); return; }
    const C = (window.AudioContext || (window as any).webkitAudioContext); if (!C) return;
    const ctx = this.ctx = new C(); this.master = ctx.createGain(); this.master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.connect(this.master);
    (["music", "ambient", "sfx", "ui"] as Grp[]).forEach(k => { const n = ctx.createGain(); n.connect(comp); this.g[k] = n; });
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = this.noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.windG = ctx.createGain(); this.windG.gain.value = 0; const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 420; this.windG.connect(lp); lp.connect(this.g.ambient);
    this.windSrc = ctx.createBufferSource(); this.windSrc.buffer = this.noise; this.windSrc.loop = true; this.windSrc.connect(this.windG); this.windSrc.start();
    this.apply(); this.nextNote = ctx.currentTime + 0.3;
    this.timer = window.setInterval(() => this.schedule(), 90);
  }
  set(v: Partial<Record<Grp, number>>, muted?: boolean) { Object.assign(this.vol, v); if (muted != null) this.muted = muted; this.apply(); }
  apply() { if (!this.ctx) return; (Object.keys(this.g) as Grp[]).forEach(k => this.g[k].gain.setTargetAtTime(this.muted ? 0 : this.vol[k] * (k === "music" ? 0.45 : k === "ambient" ? 0.5 : 0.7), this.ctx!.currentTime, 0.05)); }
  pause(p: boolean) { this.paused = p; if (!this.ctx) return; p ? this.ctx.suspend() : this.ctx.resume(); }
  get t() { return this.ctx!.currentTime; }
  // ---------- instruments
  private tranh(f: number, at: number, dur = 1.6, v = 0.25, out: Grp = "music") { // plucked zither with the characteristic pitch bend ("nhấn")
    const c = this.ctx!, o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
    o.type = "triangle"; o2.type = "sawtooth"; o.frequency.setValueAtTime(f, at); o2.frequency.setValueAtTime(f, at);
    if (Math.random() < 0.35) { o.frequency.setValueAtTime(f, at + 0.25); o.frequency.linearRampToValueAtTime(f * 1.06, at + 0.45); o.frequency.linearRampToValueAtTime(f, at + 0.7); o2.frequency.setValueAtTime(f, at + 0.25); o2.frequency.linearRampToValueAtTime(f * 1.06, at + 0.45); o2.frequency.linearRampToValueAtTime(f, at + 0.7); }
    lp.type = "lowpass"; lp.frequency.setValueAtTime(f * 8, at); lp.frequency.exponentialRampToValueAtTime(f * 1.5, at + dur);
    const g2 = c.createGain(); g2.gain.value = 0.18; o2.connect(g2); g2.connect(lp); o.connect(lp); lp.connect(g); g.connect(this.g[out]);
    g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(v, at + 0.005); g.gain.exponentialRampToValueAtTime(0.0008, at + dur);
    o.start(at); o2.start(at); o.stop(at + dur + 0.05); o2.stop(at + dur + 0.05);
  }
  private sao(f: number, at: number, dur: number, v = 0.12) { // bamboo flute: sine + breath noise + delayed vibrato
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain(), vib = c.createOscillator(), vg = c.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(f * 0.97, at); o.frequency.linearRampToValueAtTime(f, at + 0.08);
    vib.frequency.value = 5.2; vg.gain.setValueAtTime(0, at); vg.gain.linearRampToValueAtTime(f * 0.012, at + dur * 0.6); vib.connect(vg); vg.connect(o.frequency);
    const n = c.createBufferSource(); n.buffer = this.noise; const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = f * 2; bp.Q.value = 3; const ng = c.createGain(); ng.gain.value = 0.25;
    n.connect(bp); bp.connect(ng); ng.connect(g); o.connect(g); g.connect(this.g.music);
    g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(v, at + 0.09); g.gain.setValueAtTime(v * 0.9, at + dur * 0.8); g.gain.linearRampToValueAtTime(0, at + dur);
    o.start(at); vib.start(at); n.start(at, Math.random()); o.stop(at + dur + 0.05); vib.stop(at + dur + 0.05); n.stop(at + dur + 0.05);
  }
  private bass(f: number, at: number) { const c = this.ctx!, o = c.createOscillator(), g = c.createGain(); o.type = "sine"; o.frequency.value = f; o.connect(g); g.connect(this.g.music);
    g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(0.18, at + 0.02); g.gain.exponentialRampToValueAtTime(0.001, at + 1.8); o.start(at); o.stop(at + 1.9); }
  private note(deg: number, base = 62) { const o = Math.floor(deg / 5), i = ((deg % 5) + 5) % 5; return midi(base + o * 12 + PENTA[i]); }
  // ---------- music scheduler: slow, gentle phrases; calmer and sparser at night
  private schedule() {
    if (!this.ctx || this.paused) return; const c = this.ctx, night = this.hour < 5.5 || this.hour >= 19;
    const beat = night ? 0.62 : 0.46;
    while (this.nextNote < c.currentTime + 0.4) {
      const at = this.nextNote, bar = Math.floor(this.stp / 8), s = this.stp % 8;
      if (s === 0) { if (!this.phrase.length || bar % 2 === 0) { let d = 5 + Math.floor(Math.random() * 3); this.phrase = Array.from({ length: 8 }, (_, i) => { d += [-1, 0, 1, 1, -1, 2, -2][Math.floor(Math.random() * 7)]; d = Math.max(2, Math.min(10, d)); return i % 2 && Math.random() < 0.3 ? -99 : d; }); this.phrase[7] = -99; }
        this.bass(this.note([0, 3, 4, 0][bar % 4], 38), at); }
      const n = this.phrase[s];
      if (n !== -99) { const lead = (bar % 8) >= 4 && !night; if (lead) this.sao(this.note(n + 2), at, beat * 1.8); else this.tranh(this.note(n), at, 1.8, night ? 0.13 : 0.18);
        if (s % 4 === 0) this.tranh(this.note(n - 5), at + beat / 2, 1.2, 0.08); }
      this.nextNote += beat * (s % 2 ? 0.9 : 1.1); this.stp++;
      if (bar % 16 === 15 && s === 7) this.nextNote += beat * 4; // breathing room
    }
    this.ambience();
  }
  // ---------- ambience
  private ambience() {
    const c = this.ctx!, h = this.hour, night = h < 5 || h >= 19; this.amb -= 0.09;
    this.windG.gain.setTargetAtTime(night ? 0.04 : 0.09, c.currentTime, 1.5);
    if (this.amb > 0) return; this.amb = 0.6 + Math.random() * 1.6;
    if (!night) { if (Math.random() < 0.7) this.bird(); if (h > 5 && h < 6.6 && Math.random() < 0.25) this.rooster(); }
    else { this.cricket(); if (Math.random() < 0.45) this.frog(); }
  }
  bird() { const c = this.ctx!, at = c.currentTime + Math.random() * 0.3, n = 2 + Math.floor(Math.random() * 4), f = 2400 + Math.random() * 1800;
    for (let i = 0; i < n; i++) { const o = c.createOscillator(), g = c.createGain(), t = at + i * 0.11; o.type = "sine"; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * (Math.random() < .5 ? 1.5 : 0.7), t + 0.08);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.01); g.gain.linearRampToValueAtTime(0, t + 0.09); o.connect(g); g.connect(this.g.ambient); o.start(t); o.stop(t + 0.1); } }
  rooster() { const c = this.ctx!, t = c.currentTime, o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = "sawtooth"; f.type = "bandpass"; f.frequency.value = 1200; f.Q.value = 2;
    [[0, 500], [0.15, 760], [0.5, 820], [0.9, 620], [1.2, 450]].forEach(([d, fr]) => o.frequency.linearRampToValueAtTime(fr, t + d));
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.06, t + 0.05); g.gain.setValueAtTime(0.06, t + 1); g.gain.linearRampToValueAtTime(0, t + 1.25); o.connect(f); f.connect(g); g.connect(this.g.ambient); o.start(t); o.stop(t + 1.3); }
  cricket() { const c = this.ctx!, t0 = c.currentTime; for (let k = 0; k < 3; k++) { const o = c.createOscillator(), g = c.createGain(), t = t0 + k * 0.32; o.frequency.value = 4300 + Math.random() * 200;
    for (let i = 0; i < 6; i++) { g.gain.setValueAtTime(0.025, t + i * 0.035); g.gain.setValueAtTime(0, t + i * 0.035 + 0.02); } o.connect(g); g.connect(this.g.ambient); g.gain.value = 0; o.start(t); o.stop(t + 0.25); } }
  frog() { const c = this.ctx!, t = c.currentTime + Math.random() * 0.4; for (let i = 0; i < 2; i++) { const o = c.createOscillator(), g = c.createGain(), s = t + i * 0.22; o.type = "square"; o.frequency.setValueAtTime(150, s); o.frequency.exponentialRampToValueAtTime(90, s + 0.12);
    const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 600; g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.05, s + 0.01); g.gain.exponentialRampToValueAtTime(0.001, s + 0.15); o.connect(lp); lp.connect(g); g.connect(this.g.ambient); o.start(s); o.stop(s + 0.16); } }
  // ---------- SFX
  private nz(dur: number, freq: number, q: number, v: number, type: BiquadFilterType = "bandpass", out: Grp = "sfx", at = 0) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + at, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.noise; f.type = type; f.frequency.value = freq; f.Q.value = q; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.g[out]); s.start(t, Math.random()); s.stop(t + dur + 0.02); }
  private tone(f0: number, f1: number, dur: number, v: number, type: OscillatorType = "sine", out: Grp = "sfx", at = 0) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + at, o = c.createOscillator(), g = c.createGain(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + 0.008); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.g[out]); o.start(t); o.stop(t + dur + 0.02); }
  step(surface: "grass" | "dirt" | "brick", run: boolean) { this.nz(0.09, surface === "brick" ? 2200 : surface === "dirt" ? 900 : 1500, 1.2, run ? 0.16 : 0.1); }
  land() { this.nz(0.15, 500, 0.8, 0.22, "lowpass"); }
  jump() { this.tone(300, 520, 0.12, 0.06, "sine"); }
  hoe() { this.nz(0.18, 400, 0.9, 0.35, "lowpass"); this.tone(160, 70, 0.15, 0.15, "triangle"); this.nz(0.12, 700, 1, 0.15, "bandpass", "sfx", 0.25); }
  seed() { for (let i = 0; i < 5; i++) this.nz(0.03, 3500 + Math.random() * 1500, 4, 0.12, "bandpass", "sfx", i * 0.05); }
  water() { this.nz(0.9, 1800, 0.7, 0.18, "highpass"); for (let i = 0; i < 6; i++) this.tone(900 + Math.random() * 900, 400, 0.06, 0.04, "sine", "sfx", 0.1 + i * 0.12); }
  harvest() { this.nz(0.08, 1200, 1.5, 0.25); this.tone(523, 784, 0.12, 0.1, "triangle", "sfx", 0.05); this.tone(784, 1046, 0.18, 0.1, "triangle", "sfx", 0.15); }
  pickup() { this.tone(880, 1320, 0.1, 0.08, "triangle"); }
  place() { this.tone(220, 110, 0.12, 0.15, "triangle"); this.nz(0.06, 800, 1, 0.12); }
  coin() { this.tone(1318, 1318, 0.08, 0.08, "square", "sfx"); this.tone(1760, 1760, 0.22, 0.07, "square", "sfx", 0.07); }
  grow() { this.tone(660, 990, 0.25, 0.05, "sine"); }
  npc() { if (!this.ctx) return; for (let i = 0; i < 4; i++) this.tone(260 + Math.random() * 90, 220 + Math.random() * 60, 0.09, 0.07, "triangle", "sfx", i * 0.1); }
  click() { this.tone(900, 700, 0.05, 0.08, "triangle", "ui"); }
  hover() { this.tone(1200, 1100, 0.03, 0.03, "sine", "ui"); }
  open() { this.tone(500, 900, 0.12, 0.07, "triangle", "ui"); }
  close() { this.tone(800, 450, 0.1, 0.06, "triangle", "ui"); }
  error() { this.tone(220, 180, 0.18, 0.08, "square", "ui"); }
  private rainG: GainNode | null = null; private rainOn = false;
  rain(on: boolean) { if (!this.ctx || on === this.rainOn) return; this.rainOn = on; const c = this.ctx;
    if (!this.rainG) { this.rainG = c.createGain(); this.rainG.gain.value = 0; const hp = c.createBiquadFilter(); hp.type = "bandpass"; hp.frequency.value = 2600; hp.Q.value = 0.4; const src = c.createBufferSource(); src.buffer = this.noise; src.loop = true; src.connect(hp); hp.connect(this.rainG); this.rainG.connect(this.g.ambient); src.start(); }
    this.rainG.gain.setTargetAtTime(on ? 0.35 : 0, c.currentTime, 1.2); }
  levelUp() { if (!this.ctx) return; [0, 2, 4, 5, 7].forEach((d, i) => this.tranh(this.note(d + 5), this.t + i * 0.09, 1.4, 0.2, "sfx")); this.tone(1046, 1568, 0.4, 0.06, "triangle", "sfx", 0.45); }
  build() { this.nz(0.1, 600, 1, 0.3, "lowpass"); this.tone(180, 90, 0.12, 0.18, "triangle"); this.nz(0.08, 900, 1, 0.2, "lowpass", "sfx", 0.16); this.tone(200, 100, 0.1, 0.12, "triangle", "sfx", 0.16); this.tone(660, 990, 0.2, 0.05, "sine", "sfx", 0.3); }
  cast() { this.nz(0.25, 2500, 1, 0.08, "highpass"); this.nz(0.2, 800, 1, 0.15, "bandpass", "sfx", 0.35); }
  bite() { this.tone(880, 440, 0.08, 0.12, "square"); this.tone(880, 440, 0.08, 0.12, "square", "sfx", 0.12); this.nz(0.15, 900, 1, 0.2, "bandpass"); }
  splash() { this.nz(0.4, 1200, 0.6, 0.35, "bandpass"); this.tone(400, 150, 0.2, 0.08, "sine"); }
  chime() { [0, 2, 4].forEach((d, i) => this.ctx && this.tranh(this.note(d + 5), this.t + i * 0.12, 1.2, 0.18, "sfx")); }
}
export const audio = new AudioManager();
