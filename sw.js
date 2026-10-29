/* Game Hội Bạn — offline cache. Pages: network first (always fresh when online), cached copy when offline. */
const V="ghb-v4";
const CORE=["./","index.html","co-ty-phu.html","ma-soi.html","gian-diep.html","khai-hoang.html","hub.css","manifest.webmanifest","icon-192.png","icon-512.png","icon-180.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const put=(r,res)=>{if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res};
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
 const same=u.origin===location.origin;
 if(r.mode==="navigate"||(same&&/(\.html|\.css|\/)$/.test(u.pathname))){
  e.respondWith(fetch(r).then(res=>put(r,res)).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match("index.html"))));return}
 if(same||/(^|\.)fonts\.(googleapis|gstatic)\.com$|^unpkg\.com$/.test(u.hostname)){
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>put(r,res))))}});
