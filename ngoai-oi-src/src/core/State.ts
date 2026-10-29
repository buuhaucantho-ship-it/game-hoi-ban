/** Pure, serialisable world state. Rendering reads it; it never holds Three.js objects (multiplayer-ready). */
export interface Look { gender: "nam" | "nu"; hair: number; hairColor: number; skin: number; outfit: number; name: string; }
export interface PlotState { id: number; x: number; z: number; tilled: boolean; wet: boolean; crop: string | null; stage: number; progress: number; built?: number; }
export interface Slot { id: string; qty: number; }
export interface Built { id: number; type: string; x: number; z: number; rot: number; data?: any; }
export interface Quest { day: number; item: string; qty: number; reward: number; done: boolean; }
export interface Settings { music: number; ambient: number; sfx: number; ui: number; muted: boolean; quality: "low" | "medium" | "high"; sens: number; fps: boolean; }
export interface GameState {
  version: number; created: number; savedAt: number;
  look: Look; player: { x: number; z: number; ry: number };
  money: number; inv: Slot[]; hotbar: number;
  plots: PlotState[]; built: Built[]; nextId: number; lots: string[];
  time: number;   // game minutes since day 1 00:00
  lastDay: number; xp: number; quest: Quest | null; rain: { day: number; until: number } | null; wishDay: number;
  flags: Record<string, number>;  // milestone -> game time it happened (+ counters)
  friend: number; giftDay: number; seedDay: number; talks: number;
  settings: Settings;
}
export const INV_SIZE = 24, HOTBAR = 8;
export const DAY_MIN = 1440, REAL_DAY_SEC = 1200; // one game day ≈ 20 real minutes
export const BASE_PLOTS = [[9.5, 4], [13, 4], [9.5, 7.2], [13, 7.2], [9.5, 10.4], [13, 10.4]];
export const LEVELS = [0, 30, 90, 190, 340, 550, 830, 1200, 1700, 2400];
export const LEVEL_NAMES = ["Cháu mới về", "Phụ ngoại", "Nhà nông nhí", "Tay cuốc cừ", "Chủ vườn nhỏ", "Chủ vườn lớn", "Nông dân giỏi", "Lão nông tri điền", "Vua rau quê", "Huyền thoại miệt vườn"];
export const levelOf = (xp: number) => { let l = 1; LEVELS.forEach((t, i) => { if (xp >= t) l = i + 1; }); return l; };
export function isMobile() { return matchMedia("(pointer:coarse)").matches || /iPhone|iPad|Android/i.test(navigator.userAgent); }
export function newState(look: Look): GameState {
  const inv: Slot[] = Array.from({ length: INV_SIZE }, () => ({ id: "", qty: 0 }));
  [["hand", 1], ["hoe", 1], ["can", 1], ["seed_raumuong", 6], ["seed_caixanh", 4]].forEach(([id, q], i) => inv[i] = { id: id as string, qty: q as number });
  return {
    version: 2, created: Date.now(), savedAt: Date.now(), look, player: { x: 0, z: 31, ry: Math.PI },
    money: 200, inv, hotbar: 0,
    plots: BASE_PLOTS.map(([x, z], i) => ({ id: i, x, z, tilled: i < 2, wet: false, crop: null, stage: 0, progress: 0 })), built: [], nextId: 1, lots: [],
    time: 7 * 60, lastDay: 1, xp: 0, quest: null, rain: null, wishDay: -1, flags: {}, friend: 0, giftDay: -1, seedDay: -1, talks: 0,
    settings: { music: 0.6, ambient: 0.7, sfx: 0.8, ui: 0.7, muted: false, quality: isMobile() ? "low" : "medium", sens: 1, fps: false }
  };
}
/** Bring an older save up to the current version without losing progress. */
export function migrate(s: any): GameState | null {
  if (!s || typeof s !== "object") return null;
  if (s.version === 1) {
    s.plots = (s.plots || []).map((p: any, i: number) => ({ ...p, x: BASE_PLOTS[i]?.[0] ?? 9.5, z: BASE_PLOTS[i]?.[1] ?? 4 }));
    s.built = []; s.nextId = 1; s.lots = []; s.lastDay = Math.floor((s.time || 0) / DAY_MIN) + 1; s.xp = 0; s.quest = null; s.rain = null; s.wishDay = -1;
    while (s.inv.length < INV_SIZE) s.inv.push({ id: "", qty: 0 }); s.version = 2;
  }
  if (s.version !== 2) return null;
  // defensive defaults so a partially written save can never crash the game
  s.built ??= []; s.lots ??= []; s.nextId ??= 1 + Math.max(0, ...s.built.map((b: Built) => b.id)); s.flags ??= {}; s.xp ??= 0; s.inv ??= [];
  while (s.inv.length < INV_SIZE) s.inv.push({ id: "", qty: 0 });
  if (!s.settings) s.settings = newState(s.look).settings;
  return s as GameState;
}
export const day = (t: number) => Math.floor(t / DAY_MIN) + 1;
export const hourOf = (t: number) => (t % DAY_MIN) / 60;
export const clock = (t: number) => { const m = Math.floor(t % DAY_MIN); return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; };
