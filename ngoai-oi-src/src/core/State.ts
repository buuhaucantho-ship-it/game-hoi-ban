/** Pure, serialisable world state. Rendering reads it; it never holds Three.js objects (multiplayer-ready). */
export interface Look { gender: "nam" | "nu"; hair: number; hairColor: number; skin: number; outfit: number; name: string; }
export interface PlotState { id: number; tilled: boolean; wet: boolean; crop: string | null; stage: number; progress: number; }
export interface Slot { id: string; qty: number; }
export interface Settings { music: number; ambient: number; sfx: number; ui: number; muted: boolean; quality: "low" | "medium" | "high"; sens: number; fps: boolean; }
export interface GameState {
  version: number; created: number; savedAt: number;
  look: Look; player: { x: number; z: number; ry: number };
  money: number; inv: Slot[]; hotbar: number;
  plots: PlotState[];
  time: number;   // game minutes since day 1 00:00
  flags: Record<string, number>;  // milestone -> game time it happened
  friend: number; giftDay: number; seedDay: number; talks: number;
  settings: Settings;
}
export const INV_SIZE = 20, HOTBAR = 8;
export const DAY_MIN = 1440, REAL_DAY_SEC = 1200; // one game day ≈ 20 real minutes
export function isMobile() { return matchMedia("(pointer:coarse)").matches || /iPhone|iPad|Android/i.test(navigator.userAgent); }
export function newState(look: Look): GameState {
  const inv: Slot[] = Array.from({ length: INV_SIZE }, () => ({ id: "", qty: 0 }));
  [["hand", 1], ["hoe", 1], ["can", 1], ["seed_raumuong", 6], ["seed_caixanh", 4]].forEach(([id, q], i) => inv[i] = { id: id as string, qty: q as number });
  return {
    version: 1, created: Date.now(), savedAt: Date.now(), look, player: { x: 0, z: 22, ry: Math.PI },
    money: 200, inv, hotbar: 0,
    plots: Array.from({ length: 6 }, (_, i) => ({ id: i, tilled: i < 2, wet: false, crop: null, stage: 0, progress: 0 })),
    time: 7 * 60, flags: {}, friend: 0, giftDay: -1, seedDay: -1, talks: 0,
    settings: { music: 0.6, ambient: 0.7, sfx: 0.8, ui: 0.7, muted: false, quality: isMobile() ? "low" : "medium", sens: 1, fps: false }
  };
}
export const day = (t: number) => Math.floor(t / DAY_MIN) + 1;
export const hourOf = (t: number) => (t % DAY_MIN) / 60;
export const clock = (t: number) => { const m = Math.floor(t % DAY_MIN); return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; };
