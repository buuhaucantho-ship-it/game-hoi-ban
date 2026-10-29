import { GameState, INV_SIZE } from "../core/State";
import { ITEMS } from "../data/items";
import { bus } from "../core/Events";
/** Inventory rules: stacking, checks for buying/selling. All changes emit "inv". */
export class Inventory {
  constructor(private s: GameState) {}
  count(id: string) { return this.s.inv.reduce((a, x) => a + (x.id === id ? x.qty : 0), 0); }
  add(id: string, qty: number): number {
    const def = ITEMS[id]; if (!def || qty <= 0) return 0; let left = qty;
    for (const sl of this.s.inv) if (sl.id === id && sl.qty < def.stack) { const k = Math.min(left, def.stack - sl.qty); sl.qty += k; left -= k; if (!left) break; }
    for (const sl of this.s.inv) { if (!left) break; if (!sl.id) { const k = Math.min(left, def.stack); sl.id = id; sl.qty = k; left -= k; } }
    bus.emit("inv"); return qty - left;
  }
  remove(id: string, qty: number): boolean {
    if (this.count(id) < qty) return false; let left = qty;
    for (let i = this.s.inv.length - 1; i >= 0 && left; i--) { const sl = this.s.inv[i]; if (sl.id !== id) continue; const k = Math.min(left, sl.qty); sl.qty -= k; left -= k; if (!sl.qty) sl.id = ""; }
    bus.emit("inv"); return true;
  }
  swap(a: number, b: number) { if (a < 0 || b < 0 || a >= INV_SIZE || b >= INV_SIZE) return; const t = this.s.inv[a]; this.s.inv[a] = this.s.inv[b]; this.s.inv[b] = t; bus.emit("inv"); }
  selected() { return this.s.inv[this.s.hotbar] || { id: "", qty: 0 }; }
  buy(id: string, qty: number): string | null {
    const def = ITEMS[id]; if (!def || def.buy == null) return "Món này không bán.";
    if (qty < 1) return "Số lượng không hợp lệ."; const cost = def.buy * qty;
    if (this.s.money < cost) return "Không đủ xu.";
    const room = this.room(id); if (room < qty) return "Kho đồ đầy rồi.";
    this.s.money -= cost; this.add(id, qty); bus.emit("money", -cost); return null;
  }
  sell(id: string, qty: number): string | null {
    const def = ITEMS[id]; if (!def || def.sell == null) return "Món này không bán được.";
    if (qty < 1 || this.count(id) < qty) return "Không đủ hàng để bán.";
    this.remove(id, qty); const gain = def.sell * qty; this.s.money += gain; bus.emit("money", gain); return null;
  }
  room(id: string) { const def = ITEMS[id]; let r = 0; for (const sl of this.s.inv) { if (!sl.id) r += def.stack; else if (sl.id === id) r += def.stack - sl.qty; } return r; }
}
