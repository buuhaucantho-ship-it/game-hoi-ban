/** Tiny typed-ish event bus so systems talk without importing each other. */
type Fn = (...a: any[]) => void;
export class Events {
  private m = new Map<string, Set<Fn>>();
  on(e: string, f: Fn) { if (!this.m.has(e)) this.m.set(e, new Set()); this.m.get(e)!.add(f); return () => this.m.get(e)!.delete(f); }
  emit(e: string, ...a: any[]) { this.m.get(e)?.forEach(f => { try { f(...a); } catch (err) { console.error(err); } }); }
}
export const bus = new Events();
