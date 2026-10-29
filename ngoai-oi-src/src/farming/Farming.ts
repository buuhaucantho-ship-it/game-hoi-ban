import { GameState, PlotState } from "../core/State";
import { CROPS, RIPE } from "../data/crops";
import { ITEMS } from "../data/items";
import { Inventory } from "../inventory/Inventory";
import { bus } from "../core/Events";
/** Farming rules, independent from rendering. Growth only advances while wet; nothing ever withers. */
export type PlotAction = { kind: "till" | "plant" | "water" | "harvest" | "wait"; label: string; crop?: string };
export class Farming {
  constructor(private s: GameState, private inv: Inventory) {}
  /** Advance growth by real seconds (also used to catch up after the game was closed). */
  boost: (p: PlotState) => number = () => 1; raining = false;
  tick(dt: number) {
    for (const p of this.s.plots) {
      if (this.raining && p.tilled && p.crop && p.stage < RIPE) p.wet = true;
      if (!p.crop || !p.wet || p.stage >= RIPE) continue;
      const def = CROPS[p.crop]; let t = dt * this.boost(p);
      while (t > 0 && p.stage < RIPE && p.wet) {
        const need = def.stageSeconds[p.stage] * (1 - p.progress), use = Math.min(t, need);
        p.progress += use / def.stageSeconds[p.stage]; t -= use;
        if (p.progress >= 0.999) { p.stage++; p.progress = 0; p.wet = p.stage < RIPE && !this.raining ? false : p.wet; if (p.stage >= RIPE) p.wet = false; bus.emit("plotGrow", p); }
      }
    }
  }
  rain() { for (const p of this.s.plots) if (p.tilled) p.wet = true; }
  /** What pressing "interact" on this plot would do, given the selected item. */
  actionFor(p: PlotState): PlotAction {
    const sel = this.inv.selected().id;
    if (!p.tilled) return { kind: "till", label: "Xới đất" };
    if (!p.crop) {
      const seedId = ITEMS[sel]?.kind === "seed" && this.inv.count(sel) > 0 ? sel : (Object.keys(ITEMS).find(id => ITEMS[id].kind === "seed" && this.inv.count(id) > 0) || "");
      if (!seedId) return { kind: "wait", label: "Hết hạt giống, ghé sạp mua nha" };
      const crop = ITEMS[seedId].crop!; return { kind: "plant", label: `Gieo ${CROPS[crop].name.toLowerCase()}`, crop };
    }
    const def = CROPS[p.crop];
    if (p.stage >= RIPE) return { kind: "harvest", label: `Thu hoạch ${def.name.toLowerCase()}` };
    if (!p.wet) return { kind: "water", label: `Tưới ${def.name.toLowerCase()}` };
    const left = Math.ceil(def.stageSeconds[p.stage] * (1 - p.progress));
    return { kind: "wait", label: `${def.name} đang lớn · còn ~${left} giây` };
  }
  till(p: PlotState) { if (p.tilled) return false; p.tilled = true; bus.emit("plot", p, "till"); return true; }
  plant(p: PlotState, crop: string) {
    const def = CROPS[crop]; if (!p.tilled || p.crop || !def?.enabled || !this.inv.remove(def.seedItem, 1)) return false;
    p.crop = crop; p.stage = 0; p.progress = 0; bus.emit("plot", p, "plant"); return true;
  }
  water(p: PlotState) { if (!p.crop || p.wet || p.stage >= RIPE) return false; p.wet = true; bus.emit("plot", p, "water"); return true; }
  harvest(p: PlotState): number {
    if (!p.crop || p.stage < RIPE) return 0; const def = CROPS[p.crop];
    const n = def.yield[0] + Math.floor(Math.random() * (def.yield[1] - def.yield[0] + 1));
    const got = this.inv.add(def.produceItem, n); if (!got) return 0;
    if (def.regrow != null) { p.stage = def.regrow; p.progress = 0; p.wet = false; } else { p.crop = null; p.stage = 0; p.progress = 0; p.wet = false; }
    bus.emit("plot", p, "harvest"); return got;
  }
}
