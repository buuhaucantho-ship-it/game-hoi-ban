/** Hand-drawn style SVG icons for UI (2D UI only — the 3D world uses real models). */
const S = (body: string, vb = "0 0 48 48") => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
const OUT = 'stroke="#4a3220" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
export const ICON: Record<string, string> = {
  hand: S(`<path ${OUT} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),
  hoe: S(`<path ${OUT} fill="#c98a4a" d="M33 6l4 3-22 31-4-3z"/><path ${OUT} fill="#a8b0b8" d="M30 4l12 4-3 7-12-4z"/>`),
  can: S(`<path ${OUT} fill="#3fb0a4" d="M10 18h22v20a4 4 0 01-4 4H14a4 4 0 01-4-4z"/><path ${OUT} fill="none" d="M14 18c0-6 14-6 14 0"/><path ${OUT} fill="#3fb0a4" d="M32 24l10-8 2 3-10 10z"/><circle cx="43" cy="14" r="1.6" fill="#7ad0f0"/><circle cx="46" cy="18" r="1.4" fill="#7ad0f0"/>`),
  seed_raumuong: S(`<path ${OUT} fill="#f2dcae" d="M10 12h28l-2 30H12z"/><path ${OUT} fill="#e2c48e" d="M10 12l4-5h20l4 5"/><path ${OUT} fill="#5fb04a" d="M24 36V24m0 0c-6 0-8-5-8-5s5-2 8 5zm0 0c6 0 8-6 8-6s-6-1-8 6z"/>`),
  seed_caixanh: S(`<path ${OUT} fill="#d8ecd0" d="M10 12h28l-2 30H12z"/><path ${OUT} fill="#bcd8b0" d="M10 12l4-5h20l4 5"/><ellipse ${OUT} cx="24" cy="28" rx="7" ry="8" fill="#3f9a3a"/><path stroke="#cfe8a8" stroke-width="2" d="M24 21v14"/>`),
  raumuong: S(`<g ${OUT}><path fill="#9fd06a" d="M18 44l4-22m4 22l-1-24m6 24l-4-22"/><path fill="#3f9a3a" d="M22 22l-10-10 12 2zM25 20l2-14 6 12zM28 22l12-8-4 12z"/></g><path ${OUT} fill="#e8433a" d="M16 34h18v4H16z"/>`),
  caixanh: S(`<g ${OUT}><path fill="#2f8a3a" d="M24 44c-10 0-14-10-12-22 4 2 8 8 12 22zM24 44c10 0 14-10 12-22-4 2-8 8-12 22z"/><path fill="#5fb04a" d="M24 44c-6-6-6-24 0-36 6 12 6 30 0 36z"/></g><path stroke="#dff0c0" stroke-width="2" d="M24 14v28"/>`),
  coin: S(`<circle ${OUT} cx="24" cy="24" r="17" fill="#f2c84a"/><circle cx="24" cy="24" r="11" fill="none" stroke="#c9952a" stroke-width="2.4"/><path stroke="#c9952a" stroke-width="3" d="M24 17v14M20 21h8"/>`),
  heart: S(`<path ${OUT} fill="#ef6a7a" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),
  heartE: S(`<path ${OUT} fill="#f3e2cf" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),
  sun: S(`<circle ${OUT} cx="24" cy="24" r="9" fill="#f6c33a"/><g ${OUT}><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></g>`),
  moon: S(`<path ${OUT} fill="#f2e6b0" d="M30 6a18 18 0 1012 30A15 15 0 0130 6z"/>`),
  bag: S(`<path ${OUT} fill="#c98a4a" d="M8 18h32l-3 24H11z"/><path ${OUT} fill="none" d="M17 18c0-10 14-10 14 0"/><path ${OUT} fill="#e0a868" d="M8 18h32v6H8z"/>`),
  menu: S(`<g ${OUT}><path d="M10 14h28M10 24h28M10 34h28"/></g>`),
  jump: S(`<g ${OUT} fill="none"><path d="M24 40V12M14 22l10-10 10 10"/></g>`),
  run: S(`<g ${OUT} fill="none"><circle cx="30" cy="9" r="4" fill="#4a3220"/><path d="M18 20l8-4 6 6 6 2M26 16l-4 12 8 6-2 10M22 28l-8 2-4 8"/></g>`),
  act: S(`<path ${OUT} fill="#fff6e6" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),
  eye: S(`<path ${OUT} fill="#fff6e6" d="M4 24s8-13 20-13 20 13 20 13-8 13-20 13S4 24 4 24z"/><circle cx="24" cy="24" r="6" fill="#4a3220"/>`),
  hammer: S(`<path ${OUT} fill="#c98a4a" d="M22 20l5 5-16 16-5-5z"/><path ${OUT} fill="#a8b0b8" d="M20 10l10-4 12 12-4 10-6-6-4 2-6-6 2-4z"/>`),
  close: S(`<g ${OUT}><path d="M14 14l20 20M34 14L14 34"/></g>`),
  book: S(`<path ${OUT} fill="#e8605a" d="M8 8h24a6 6 0 016 6v26H14a6 6 0 01-6-6z"/><path ${OUT} fill="#fff6e6" d="M14 34h24v6H14a3 3 0 010-6z"/>`),
  gear: S(`<circle ${OUT} cx="24" cy="24" r="7" fill="#fff6e6"/><path ${OUT} fill="none" d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/>`),
  save: S(`<path ${OUT} fill="#5a9ad8" d="M8 8h26l6 6v26H8z"/><path ${OUT} fill="#fff6e6" d="M14 8h16v10H14zM14 28h20v12H14z"/>`),
  home: S(`<path ${OUT} fill="#e8a05a" d="M6 24L24 8l18 16"/><path ${OUT} fill="#fff6e6" d="M11 21v19h26V21"/><path ${OUT} fill="#c98a4a" d="M20 40V29h8v11"/>`),
  chat: S(`<path ${OUT} fill="#fff6e6" d="M6 10h36v22H20l-8 8v-8H6z"/><g fill="#4a3220"><circle cx="16" cy="21" r="2.4"/><circle cx="24" cy="21" r="2.4"/><circle cx="32" cy="21" r="2.4"/></g>`),
  gift: S(`<path ${OUT} fill="#ef6a7a" d="M8 20h32v20H8z"/><path ${OUT} fill="#f2c84a" d="M6 14h36v6H6zM21 14h6v26h-6z"/><path ${OUT} fill="none" d="M24 14c-4-8-12-6-8 0m8 0c4-8 12-6 8 0"/>`),
  wave: S(`<path ${OUT} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/><g ${OUT} fill="none"><path d="M6 8c-3 4-3 8 0 12M42 34c3-4 3-8 0-12"/></g>`)
};
export const icon = (k: string) => ICON[k] || ICON.hand;
