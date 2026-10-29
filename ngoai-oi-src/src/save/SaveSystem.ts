import { GameState } from "../core/State";
/** IndexedDB save with a localStorage mirror as fallback (private mode / old Safari). */
const DB = "ngoai-oi", STORE = "saves", KEY = "slot1", LS = "ngoai-oi-slot1";
function open(): Promise<IDBDatabase> {
  return new Promise((res, rej) => { try { const r = indexedDB.open(DB, 1); r.onupgradeneeded = () => r.result.createObjectStore(STORE); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); } catch (e) { rej(e); } });
}
export async function saveGame(s: GameState) {
  s.savedAt = Date.now(); const data = JSON.parse(JSON.stringify(s));
  try { localStorage.setItem(LS, JSON.stringify(data)); } catch {}
  try { const db = await open(); await new Promise<void>((res, rej) => { const tx = db.transaction(STORE, "readwrite"); tx.objectStore(STORE).put(data, KEY); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); }); db.close(); return true; }
  catch { return false; }
}
export async function loadGame(): Promise<GameState | null> {
  let a: GameState | null = null, b: GameState | null = null;
  try { const db = await open(); a = await new Promise(res => { const tx = db.transaction(STORE, "readonly"); const r = tx.objectStore(STORE).get(KEY); r.onsuccess = () => res(r.result || null); r.onerror = () => res(null); }); db.close(); } catch {}
  try { const t = localStorage.getItem(LS); if (t) b = JSON.parse(t); } catch {}
  const best = [a, b].filter(Boolean).sort((x, y) => (y!.savedAt || 0) - (x!.savedAt || 0))[0] || null;
  return best && best.version === 1 ? best : null;
}
export async function wipeSave() {
  try { localStorage.removeItem(LS); } catch {}
  try { const db = await open(); await new Promise<void>(res => { const tx = db.transaction(STORE, "readwrite"); tx.objectStore(STORE).delete(KEY); tx.oncomplete = () => res(); tx.onerror = () => res(); }); db.close(); } catch {}
}
