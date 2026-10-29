import { icon } from "./icons";
import { ITEMS } from "../data/items";
import { CROPS } from "../data/crops";
import { GameState, Look, HOTBAR, day, clock, hourOf, isMobile } from "../core/State";
import { HAIRS, HAIR_COLORS, SKINS, OUTFITS } from "../player/Avatar";
import { audio } from "../audio/AudioManager";
import { bus } from "../core/Events";
/** All 2D interface: title, story, character creator, HUD, hotbar, dialogue, inventory, shop, menu, mobile buttons. */
const $ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector(sel) as T;
const h = (html: string) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild as HTMLElement; };
const hex = (n: number) => "#" + n.toString(16).padStart(6, "0");
export type Panel = null | "inv" | "shop" | "menu" | "dialog" | "title" | "story" | "creator";
const NGOAI = `<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="20" fill="#f0c8a0" stroke="#4a3220" stroke-width="2.4"/><path d="M12 32c0-14 10-20 20-20s20 6 20 20c-4-6-10-9-20-9s-16 3-20 9z" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="32" cy="10" r="7" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="24" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="40" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="24" cy="37" r="1.8" fill="#241a16"/><circle cx="40" cy="37" r="1.8" fill="#241a16"/><path d="M27 46q5 4 10 0" stroke="#8a3a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="18" cy="44" r="3" fill="#ff9f9f" opacity=".6"/><circle cx="46" cy="44" r="3" fill="#ff9f9f" opacity=".6"/></svg>`;
export class UI {
  root = $("#ui"); panel: Panel = null; s!: GameState; g: any; private typing = 0; selSlot = -1; shopQty: Record<string, number> = {};
  private promptEl!: HTMLElement; private hotEl!: HTMLElement; private hudEl!: HTMLElement; private toastEl!: HTMLElement; fpsEl!: HTMLElement;
  constructor() {
    document.addEventListener("pointerdown", e => { const b = (e.target as HTMLElement).closest("button,.slot,.sw"); if (b) audio.click(); }, true);
  }
  blocking() { return !!this.panel; }
  // ---------- title / story / creator
  title(hasSave: boolean, onContinue: () => void, onNew: () => void) {
    this.panel = "title";
    const el = h(`<div class="screen title"><div class="logo"><small>một mùa hè ở miền Tây</small><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div>
      <div class="col">${hasSave ? `<button class="btn big" data-k="c">Chơi tiếp</button>` : ""}<button class="btn ${hasSave ? "" : "big"}" data-k="n">Chơi mới</button>
      <a class="btn ghost" href="../index.html">← Game Hội Bạn</a></div><p class="hint">${isMobile() ? "Cần xoay ngang để chơi thoải mái nhất" : "WASD đi · kéo chuột xoay · E tương tác"} · bản 0.1</p></div>`);
    el.addEventListener("click", e => { const k = (e.target as HTMLElement).closest("[data-k]")?.getAttribute("data-k"); if (!k) return; audio.unlock();
      if (k === "n" && hasSave && !confirm("Bắt đầu lại sẽ xoá lần chơi cũ. Chắc chưa?")) return;
      el.classList.add("out"); setTimeout(() => el.remove(), 400); k === "c" ? onContinue() : onNew(); });
    this.root.append(el);
  }
  story(onDone: () => void) {
    this.panel = "story";
    const lines = ["Hè năm nay, ba má bận làm ăn trên thành phố.", "Cháu được gửi về quê ngoại ở miền Tây — nơi có ao sen, vườn rau và tiếng gà gáy mỗi sáng.", "Ngoại đã đứng đợi ở cổng từ sớm…"];
    let i = 0; const el = h(`<div class="screen story"><p></p><button class="btn">Tiếp →</button><button class="skip">Bỏ qua</button></div>`), p = $("p", el);
    const show = () => { p.classList.remove("in"); void p.offsetWidth; p.textContent = lines[i]; p.classList.add("in"); };
    const done = () => { el.classList.add("out"); setTimeout(() => el.remove(), 400); onDone(); };
    $("button.btn", el).onclick = () => { i++; i >= lines.length ? done() : show(); }; $(".skip", el).onclick = done;
    this.root.append(el); show();
  }
  creator(preview: (look: Look) => void, onDone: (look: Look) => void) {
    this.panel = "creator";
    const look: Look = { gender: "nu", hair: 2, hairColor: 0, skin: 0, outfit: 0, name: "" };
    const sw = (arr: number[], key: keyof Look) => arr.map((c, i) => `<button class="sw" data-key="${key}" data-v="${i}" style="--c:${hex(c)}"></button>`).join("");
    const chips = (arr: string[], key: keyof Look) => arr.map((n, i) => `<button class="chip" data-key="${key}" data-v="${i}">${n}</button>`).join("");
    const el = h(`<div class="screen creator"><div class="pv"><canvas id="pv"></canvas><div class="spin">↻ kéo để xoay</div></div><div class="card">
      <h2>Cháu ngoại là ai?</h2>
      <label>Tên<input id="cname" maxlength="14" placeholder="Bé Na"></label>
      <div class="row"><span>Cháu là</span><button class="chip" data-key="gender" data-v="nam">Bé trai</button><button class="chip" data-key="gender" data-v="nu">Bé gái</button></div>
      <div class="row"><span>Kiểu tóc</span>${chips(HAIRS, "hair")}</div>
      <div class="row"><span>Màu tóc</span>${sw(HAIR_COLORS, "hairColor")}</div>
      <div class="row"><span>Màu da</span>${sw(SKINS, "skin")}</div>
      <div class="row"><span>Trang phục</span>${chips(OUTFITS.map(o => o.name), "outfit")}</div>
      <button class="btn big" id="go">Về nhà ngoại →</button></div></div>`);
    const sync = () => { el.querySelectorAll<HTMLElement>("[data-key]").forEach(b => b.classList.toggle("on", String((look as any)[b.dataset.key!]) === b.dataset.v)); preview(look); };
    el.addEventListener("click", e => { const b = (e.target as HTMLElement).closest<HTMLElement>("[data-key]"); if (!b) return; const k = b.dataset.key as keyof Look;
      (look as any)[k] = k === "gender" ? b.dataset.v : +b.dataset.v!; if (k === "gender") { look.hair = look.gender === "nam" ? 0 : 2; look.outfit = look.gender === "nam" ? 0 : 4; } sync(); });
    $("#go", el).onclick = () => { look.name = ($("#cname", el) as HTMLInputElement).value.trim() || (look.gender === "nam" ? "Bé Tí" : "Bé Na"); el.classList.add("out"); setTimeout(() => el.remove(), 400); onDone(look); };
    this.root.append(el); look.outfit = 4; sync();
  }
  // ---------- HUD
  mountHUD(s: GameState, g: any) {
    this.s = s; this.g = g; this.panel = null;
    this.root.querySelectorAll(".hudwrap").forEach(e => e.remove());
    const w = h(`<div class="hudwrap"><div class="hud"><div class="clock"><i class="ic"></i><div><b class="day"></b><span class="time"></span></div></div><div class="money"><i>${icon("coin")}</i><b></b></div></div>
      <div class="hudr"><div class="hearts" title="Tình cảm với ngoại"></div><button class="rb" data-a="Escape" aria-label="Menu">${icon("menu")}</button></div>
      <div class="hotbar"></div><div class="prompt"></div><div class="toasts"></div><div class="fps"></div>
      <div class="mob">
        <div class="btns"><button class="mb act" data-a="KeyE">${icon("act")}<span>Làm</span></button><button class="mb jump" data-a="Space">${icon("jump")}</button>
        <button class="mb run" data-hold="run">${icon("run")}</button><button class="mb sm bag" data-a="KeyI">${icon("bag")}</button><button class="mb sm build" data-a="KeyB">${icon("hammer")}</button><button class="mb sm view" data-a="KeyV">${icon("eye")}</button></div></div>
      <div class="rot">Xoay ngang điện thoại để chơi thoải mái hơn <button>OK</button></div></div>`);
    this.root.append(w); this.hudEl = w; this.hotEl = $(".hotbar", w); this.promptEl = $(".prompt", w); this.toastEl = $(".toasts", w); this.fpsEl = $(".fps", w);
    if (isMobile()) document.body.classList.add("touch");
    w.querySelectorAll<HTMLElement>("[data-a]").forEach(b => b.addEventListener("pointerdown", e => { e.preventDefault(); e.stopPropagation(); audio.unlock(); g.input.tap(b.dataset.a); if (b.dataset.a === "Space") g.input.keys.add("Space"); }));
    w.querySelectorAll<HTMLElement>("[data-a=Space]").forEach(b => { const up = () => g.input.keys.delete("Space"); b.addEventListener("pointerup", up); b.addEventListener("pointerleave", up); });
    const run = $("[data-hold=run]", w); run.addEventListener("pointerdown", e => { e.preventDefault(); e.stopPropagation(); g.runBtn = !g.runBtn; run.classList.toggle("on", g.runBtn); });
    $(".rot button", w).onclick = () => $(".rot", w).remove();
    this.hotEl.addEventListener("click", e => { const sl = (e.target as HTMLElement).closest<HTMLElement>(".slot"); if (sl) { s.hotbar = +sl.dataset.i!; this.renderHotbar(); } });
    bus.on("inv", () => { this.renderHotbar(); if (this.panel === "inv") this.renderInv(); if (this.panel === "shop") this.renderShop(); });
    bus.on("money", (d: number) => { this.renderHUD(); const m = $(".money", w); m.classList.remove("bump"); void m.offsetWidth; m.classList.add("bump"); if (d > 0) audio.coin(); });
    this.renderHotbar(); this.renderHUD();
  }
  renderHUD() { if (!this.hudEl) return; const s = this.s, hr = hourOf(s.time), night = hr < 5.5 || hr >= 18.5;
    $(".day", this.hudEl).textContent = `Ngày ${day(s.time)} · Mùa hè`; $(".time", this.hudEl).textContent = clock(s.time);
    $(".clock .ic", this.hudEl).innerHTML = icon(night ? "moon" : "sun"); $(".money b", this.hudEl).textContent = String(s.money);
    const n = Math.floor(s.friend / 20); $(".hearts", this.hudEl).innerHTML = Array.from({ length: 5 }, (_, i) => `<i>${icon(i < n ? "heart" : "heartE")}</i>`).join(""); }
  slotHTML(sl: { id: string; qty: number }, i: number, sel: boolean) { const d = ITEMS[sl.id];
    return `<div class="slot${sel ? " sel" : ""}${sl.id ? "" : " empty"}" data-i="${i}" title="${d ? d.name : ""}">${d ? icon(sl.id) : ""}${d && d.stack > 1 ? `<b>${sl.qty}</b>` : ""}${i < HOTBAR ? `<em>${i + 1}</em>` : ""}</div>`; }
  renderHotbar() { if (!this.hotEl) return; const s = this.s; this.hotEl.innerHTML = s.inv.slice(0, HOTBAR).map((sl, i) => this.slotHTML(sl, i, i === s.hotbar)).join("") + `<div class="selname">${ITEMS[s.inv[s.hotbar]?.id]?.name || "Trống"}</div>`; }
  prompt(text: string | null) { if (!this.promptEl) return; const t = text || ""; if (this.promptEl.dataset.t === t) return; this.promptEl.dataset.t = t;
    this.promptEl.innerHTML = t ? `<kbd>${isMobile() ? "Làm" : "E"}</kbd>${t}` : ""; this.promptEl.classList.toggle("on", !!t); $(".mb.act span", this.hudEl).textContent = t ? t.split(" ").slice(0, 2).join(" ") : "Làm"; }
  toast(msg: string, kind = "") { if (!this.toastEl) return; const t = h(`<div class="toast ${kind}">${msg}</div>`); this.toastEl.append(t); setTimeout(() => t.classList.add("out"), 2600); setTimeout(() => t.remove(), 3100); }
  float(x: number, y: number, text: string, cls = "") { const t = h(`<div class="float ${cls}" style="left:${x}px;top:${y}px">${text}</div>`); this.root.append(t); setTimeout(() => t.remove(), 1400); }
  // ---------- modal panels
  private modal(cls: string, title: string, body: string, onClose?: () => void) {
    this.closeModal(); const el = h(`<div class="modal ${cls}"><div class="sheet"><header><h3>${title}</h3><button class="x" aria-label="Đóng">${icon("close")}</button></header><div class="body">${body}</div></div></div>`);
    el.addEventListener("pointerdown", e => { if (e.target === el) this.closeAll(); }); $(".x", el).onclick = () => this.closeAll(); (el as any)._close = onClose;
    this.root.append(el); audio.open(); return el; }
  closeModal() { this.root.querySelectorAll(".modal").forEach(m => { (m as any)._close?.(); m.remove(); }); }
  closeAll() { if (this.root.querySelector(".modal")) audio.close(); this.closeModal(); this.panel = null; this.selSlot = -1; }
  toggleInv() { if (this.panel === "inv") return this.closeAll(); this.panel = "inv"; this.modal("inv", "Kho đồ", `<div class="grid"></div><div class="desc"></div><p class="tip">Bấm một ô rồi bấm ô khác để đổi chỗ. Hàng trên cùng là thanh công cụ.</p>`); this.renderInv(); }
  renderInv() { const el = $(".modal.inv"); if (!el) return; const g = $(".grid", el);
    g.innerHTML = this.s.inv.map((sl, i) => this.slotHTML(sl, i, i === this.selSlot)).join("");
    g.onclick = e => { const sl = (e.target as HTMLElement).closest<HTMLElement>(".slot"); if (!sl) return; const i = +sl.dataset.i!;
      if (this.selSlot >= 0 && this.selSlot !== i) { this.g.inv.swap(this.selSlot, i); this.selSlot = -1; audio.place(); } else this.selSlot = this.selSlot === i ? -1 : i; this.renderInv(); };
    const d = ITEMS[this.s.inv[this.selSlot]?.id]; $(".desc", el).innerHTML = d ? `<b>${d.name}</b> — ${d.desc}${d.sell ? ` <span class="pr">${icon("coin")}${d.sell}</span>` : ""}` : "Chọn một món để xem."; }
  toggleShop() { if (this.panel === "shop") return this.closeAll(); this.panel = "shop"; this.modal("shop", "Sạp cô Út", `<div class="shopbody"></div>`); this.renderShop(); }
  renderShop() { const el = $(".modal.shop"); if (!el) return; const b = $(".shopbody", el), inv = this.g.inv;
    const buy = Object.values(ITEMS).filter(d => d.buy != null && (!d.crop || CROPS[d.crop]?.enabled));
    const sell = Object.values(ITEMS).filter(d => d.kind === "produce");
    b.innerHTML = `<p class="who">“Hạt giống mới về nè con, rau trồng được thì đem ra cô mua cho!”</p><h4>Mua hạt giống</h4>${buy.map(d => { const q = this.shopQty[d.id] || 1;
      return `<div class="line"><i>${icon(d.id)}</i><div><b>${d.name}</b><small>${d.desc}</small></div><div class="qty"><button data-q="-" data-id="${d.id}">−</button><span>${q}</span><button data-q="+" data-id="${d.id}">+</button></div><button class="btn sm" data-buy="${d.id}">${icon("coin")}${d.buy! * q}</button></div>`; }).join("")}
      <h4>Bán nông sản</h4>${sell.map(d => { const n = inv.count(d.id); return `<div class="line${n ? "" : " dim"}"><i>${icon(d.id)}</i><div><b>${d.name}</b><small>Đang có ${n} · ${d.sell} xu/món</small></div><button class="btn sm" data-sell="${d.id}" ${n ? "" : "disabled"}>Bán 1</button><button class="btn sm" data-sellall="${d.id}" ${n ? "" : "disabled"}>Bán hết</button></div>`; }).join("")}
      <p class="wallet">${icon("coin")} Con đang có <b>${this.s.money}</b> xu</p>`;
    b.onclick = e => { const t = (e.target as HTMLElement).closest<HTMLElement>("button"); if (!t) return; const id = t.dataset.id || t.dataset.buy || t.dataset.sell || t.dataset.sellall!;
      if (t.dataset.q) { this.shopQty[id] = Math.max(1, Math.min(20, (this.shopQty[id] || 1) + (t.dataset.q === "+" ? 1 : -1))); return this.renderShop(); }
      let err: string | null = null, n = 0;
      if (t.dataset.buy) { n = this.shopQty[id] || 1; err = inv.buy(id, n); if (!err) { this.toast(`Đã mua ${n} ${ITEMS[id].name.toLowerCase()}`); audio.coin(); this.g.flag("buy"); } }
      if (t.dataset.sell) { err = inv.sell(id, 1); n = 1; }
      if (t.dataset.sellall) { n = inv.count(id); err = inv.sell(id, n); }
      if ((t.dataset.sell || t.dataset.sellall) && !err) { this.toast(`Bán ${n} ${ITEMS[id].name.toLowerCase()} · +${ITEMS[id].sell! * n} xu`, "good"); this.g.flag("sell"); }
      if (err) { this.toast(err, "bad"); audio.error(); } this.renderShop(); this.g.saveSoon(); };
  }
  toggleMenu() { if (this.panel === "menu") return this.closeAll(); this.panel = "menu";
    const el = this.modal("menu", "Tạm nghỉ", `<nav class="tabs"><button data-t="j" class="on">${icon("book")}Nhật ký</button><button data-t="s">${icon("gear")}Cài đặt</button><button data-t="h">Phím</button></nav><div class="tab"></div>
      <div class="acts"><button class="btn" data-m="resume">Chơi tiếp</button><button class="btn" data-m="save">${icon("save")}Lưu game</button><button class="btn ghost" data-m="new">Chơi mới</button><a class="btn ghost" href="../index.html">${icon("home")}Game Hội Bạn</a></div>`);
    const tab = $(".tab", el), show = (t: string) => { el.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", (b as HTMLElement).dataset.t === t)); tab.innerHTML = t === "j" ? this.journal() : t === "s" ? this.settingsHTML() : this.keysHTML(); if (t === "s") this.bindSettings(tab); };
    $(".tabs", el).onclick = e => { const b = (e.target as HTMLElement).closest<HTMLElement>("button"); if (b) show(b.dataset.t!); };
    $(".acts", el).onclick = async e => { const b = (e.target as HTMLElement).closest<HTMLElement>("[data-m]"); if (!b) return; const m = b.dataset.m;
      if (m === "resume") this.closeAll(); if (m === "save") { const ok = await this.g.save(); this.toast(ok ? "Đã lưu vào máy" : "Lưu tạm (trình duyệt chặn IndexedDB)", ok ? "good" : ""); }
      if (m === "new" && confirm("Chơi lại từ đầu? Lần chơi hiện tại sẽ bị xoá.")) this.g.restart(); };
    show("j"); }
  journal() { const f = this.s.flags, s = this.s; const done = (k: string, t: string) => `<li class="${f[k] != null ? "ok" : ""}">${f[k] != null ? "✔" : "○"} ${t}${f[k] != null ? ` <small>ngày ${day(f[k])}</small>` : ""}</li>`;
    return `<h4>Nhật ký mùa hè của ${s.look.name}</h4><ul class="jr">${done("talk", "Gặp ngoại ở cổng")}${done("till", "Xới luống đất đầu tiên")}${done("plant", "Gieo hạt giống")}${done("water", "Tưới nước cho cây")}${done("harvest", "Thu hoạch lần đầu")}${done("gift", "Tặng rau cho ngoại")}${done("sell", "Bán rau ở sạp cô Út")}${done("sit", "Ngồi nghỉ ngoài hiên")}</ul>
      <p class="stat">Đã thu hoạch: <b>${f.harvestN || 0}</b> lần · Tình cảm với ngoại: <b>${s.friend}</b>/100 · Ngày ${day(s.time)}</p>
      <p class="soon">Sắp có: thú cưng, mưa, xây dựng (bản 0.3), chơi chung với bạn.</p>`; }
  settingsHTML() { const st = this.s.settings, sl = (k: string, n: string) => `<label class="sl">${n}<input type="range" min="0" max="1" step="0.05" data-s="${k}" value="${(st as any)[k]}"></label>`;
    return `${sl("music", "Nhạc nền")}${sl("ambient", "Âm thanh môi trường")}${sl("sfx", "Hiệu ứng")}${sl("ui", "Giao diện")}
      <label class="ck"><input type="checkbox" data-s="muted" ${st.muted ? "checked" : ""}> Tắt toàn bộ âm thanh</label>
      <label class="sl">Đồ hoạ<select data-s="quality">${["low", "medium", "high"].map(q => `<option value="${q}" ${st.quality === q ? "selected" : ""}>${{ low: "Thấp (máy yếu)", medium: "Vừa", high: "Cao" }[q]}</option>`).join("")}</select></label>
      <label class="sl">Độ nhạy xoay camera<input type="range" min="0.3" max="2.5" step="0.1" data-s="sens" value="${st.sens}"></label>
      <label class="ck"><input type="checkbox" data-s="fps" ${st.fps ? "checked" : ""}> Hiện FPS</label><p class="tip">Đổi đồ hoạ: độ nét và bóng đổ áp dụng ngay; mật độ cỏ hoa áp dụng khi tải lại trang.</p>`; }
  bindSettings(tab: HTMLElement) { tab.querySelectorAll<HTMLInputElement>("[data-s]").forEach(i => i.oninput = i.onchange = () => { const k = i.dataset.s!, st = this.s.settings as any;
    st[k] = i.type === "checkbox" ? i.checked : i.tagName === "SELECT" ? i.value : +i.value; this.g.applySettings(); this.g.saveSoon(); }); }
  keysHTML() { return `<table class="keys"><tr><td>W A S D</td><td>Đi</td></tr><tr><td>Kéo chuột / vuốt phải</td><td>Xoay camera · lăn chuột: phóng to</td></tr><tr><td>Shift</td><td>Chạy</td></tr><tr><td>Space</td><td>Nhảy</td></tr><tr><td>E</td><td>Tương tác (xới · gieo · tưới · hái · nói chuyện)</td></tr><tr><td>1 – 8</td><td>Chọn món trên thanh công cụ</td></tr><tr><td>I</td><td>Kho đồ</td></tr><tr><td>V</td><td>Đổi góc nhìn thứ ba / thứ nhất</td></tr><tr><td>B</td><td>Xây dựng (bản 0.3)</td></tr><tr><td>Esc</td><td>Menu</td></tr></table>`; }
  // ---------- dialogue
  dialog(text: string, choices: { k: string; t: string; icon?: string; off?: boolean }[], onPick: (k: string) => void) {
    this.panel = "dialog"; let el = $(".dlg"); if (!el) { el = h(`<div class="dlg"><div class="face">${NGOAI}</div><div class="box"><b class="who">Ngoại</b><p></p><div class="ch"></div></div></div>`); this.root.append(el); }
    const p = $("p", el), ch = $(".ch", el); clearInterval(this.typing); p.textContent = ""; ch.innerHTML = ""; let i = 0; audio.npc();
    const finish = () => { clearInterval(this.typing); p.textContent = text; ch.innerHTML = choices.map((c, n) => `<button class="opt" data-k="${c.k}" ${c.off ? "disabled" : ""}>${c.icon ? icon(c.icon) : ""}<span>${isMobile() ? "" : `<kbd>${n + 1}</kbd>`}${c.t}</span></button>`).join(""); };
    this.typing = window.setInterval(() => { i += 2; p.textContent = text.slice(0, i); if (i >= text.length) finish(); }, 22);
    p.onclick = finish; (el as any)._finish = finish; (el as any)._choices = choices;
    ch.onclick = e => { const b = (e.target as HTMLElement).closest<HTMLElement>(".opt"); if (b && !b.hasAttribute("disabled")) onPick(b.dataset.k!); }; (el as any)._pick = onPick;
  }
  dialogKey(n: number) { const el = $(".dlg") as any; if (!el) return; if (!el.querySelector(".opt")) return el._finish(); const c = el._choices[n]; if (c && !c.off) el._pick(c.k); }
  closeDialog() { clearInterval(this.typing); $(".dlg")?.remove(); if (this.panel === "dialog") this.panel = null; }
  loading(on: boolean, text = "") { let el = $(".loading"); if (on && !el) { el = h(`<div class="loading"><div class="pot"></div><p>${text}</p></div>`); this.root.append(el); } else if (!on && el) { el.classList.add("out"); setTimeout(() => el.remove(), 500); } }
}
