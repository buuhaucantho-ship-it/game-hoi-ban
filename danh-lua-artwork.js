/* Original noir raster artwork integration (prototype edition). */
(()=>{"use strict";
 const matched={
 "means:Thuốc độc":"poison","means:Thuốc ngủ":"poison",
 "clue:Ly nước":"glass","clue:Lọ thuốc":"medbottle",
 "clue:Điện thoại":"phone","clue:Bật lửa":"lighter",
 "means:Dao":"knife","means:Dao găm":"knife",
 };
 function key(name,type){return matched[type+":"+name]||null}
 function decorate(root=document){
  root.querySelectorAll(".evidence").forEach(card=>{
    const n=card.querySelector(".evidence-name")?.textContent?.trim();
    const art=card.querySelector(".evidence-art");
    if(!n||!art)return;
    const type=card.classList.contains("clue")?"clue":"means",k=key(n,type);
    if(!k)return; // Never use incorrect imagery for unmatched cards.
    if(art.dataset.raster===k)return;
    art.replaceChildren();
    const raster=document.createElement("span");
    raster.className="dl-raster dl-raster-"+k;
    raster.setAttribute("role","img");raster.setAttribute("aria-label",n);
    art.append(raster);art.dataset.raster=k;
  });
  root.querySelectorAll(".evidence-preview").forEach(pre=>{
    const n=pre.querySelector("h3")?.textContent?.trim();
    const type=(document.getElementById("dialogTitle")?.textContent||"").includes("PHƯƠNG THỨC")?"means":"clue";
    const k=key(n,type),holder=pre.firstElementChild;
    if(!k||!holder||holder.dataset.raster===k)return;
    holder.replaceChildren();
    const raster=document.createElement("span");raster.className="dl-preview-raster dl-raster-"+k;
    raster.setAttribute("role","img");raster.setAttribute("aria-label",n);
    holder.append(raster);holder.dataset.raster=k;
  });
  const modal=document.getElementById("dialog");
  if(modal&&!modal.classList.contains("hidden")){
    const title=document.getElementById("dialogTitle")?.textContent||"";
    const body=document.getElementById("dialogBody");
    if(/^Vai trò của /.test(title)&&body&&!body.querySelector(".dl-role-art")){
      const info=body.textContent||"";
      const k=/biết lời giải|gợi ý qua thẻ hiện trường/.test(info)?"forensic":/bí mật chọn một phương thức/.test(info)?"murderer":null;
      if(k){
        const box=document.createElement("div");box.className="dl-role-art";
        const portrait=document.createElement("div");portrait.className="dl-role-portrait dl-role-"+k;
        portrait.setAttribute("role","img");portrait.setAttribute("aria-label",k==="forensic"?"Giám định viên pháp y":"Hung thủ");
        const p=document.createElement("p");p.textContent=info;
        body.replaceChildren(box);box.append(portrait,p);
      }
    }
  }
 }
 let pending=false;
 const observer=new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;decorate()})});
 observer.observe(document.documentElement,{subtree:true,childList:true});
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>decorate(),{once:true});else decorate();
})();