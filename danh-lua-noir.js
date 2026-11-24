/* Đánh Lừa Noir enhancement: visual only; core game rules remain in danh-lua.html */
(()=>{"use strict";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const gold="#f2c78a",silver="#b7d2d6",red="#b75c60";
function illustration(name,type){
 const n=name.toLocaleLowerCase("vi");
 let motif="";
 if(/độc|thuốc|lọ|chai|chất|khí/.test(n)){
 motif='<path d="M55 15h50v13H55z" fill="#b5855b"/><path d="M60 30h40v21q0 8 14 27l15 32q6 19-9 27H40q-15-7-9-27l15-32Q60 59 60 51Z" fill="#6db1ba33" stroke="#d4e7df" stroke-width="4"/><path d="M46 98h68l9 21H37z" fill="#9d2e46" opacity=".85"/><rect x="59" y="75" width="42" height="37" rx="4" fill="#e2c299"/><circle cx="80" cy="88" r="9" fill="#5a2731"/><path d="M70 100l20-6m-20 0 20 6" stroke="#5a2731" stroke-width="3"/>';
 }else if(/ly|cốc|nước|rượu/.test(n)){
 motif='<path d="M43 36h74l-9 97H52Z" fill="#b7d1d433" stroke="#f1e2c4" stroke-width="5"/><path d="M50 78h60l-5 49H56Z" fill="#92ccd6" opacity=".5"/><path d="M51 59h58M64 45l7 72" stroke="#fff4d9" stroke-width="3" opacity=".6"/><ellipse cx="80" cy="136" rx="42" ry="7" fill="#f3c68f" opacity=".3"/>';
 }else if(/điện thoại|máy ảnh|tai nghe/.test(n)){
 motif='<rect x="51" y="16" width="58" height="122" rx="10" fill="#0e1720" stroke="#b8bdba" stroke-width="5"/><rect x="57" y="29" width="46" height="92" rx="3" fill="#1e4d59"/><path d="M64 52h32M64 62h32M64 72h22" stroke="#70aec1" stroke-width="3" opacity=".8"/><circle cx="80" cy="130" r="3" fill="#f9d6ab"/>';
 }else if(/dao|kéo|rìu|cưa|súng|kim|gậy|búa|sắt|vật nặng/.test(n)){
 motif='<path d="M35 104 107 22l20 20-78 77Z" fill="#9cc1c3" stroke="#dfddd3" stroke-width="3"/><path d="M35 104 107 22l-9 42Z" fill="#dbe9e4"/><path d="M43 103l-22 24 11 12 25-24Z" fill="#885637" stroke="#f6c68e" stroke-width="3"/><circle cx="37" cy="120" r="4" fill="#ebc692"/>';
 }else if(/lửa|bật lửa|diêm|sôi|nóng/.test(n)){
 motif='<rect x="47" y="58" width="66" height="77" rx="8" fill="#9b7754" stroke="#efd6a5" stroke-width="4"/><path d="M47 57V45h66v12Z" fill="#c4c5b2"/><path d="M80 13Q53 36 65 53q8 11 21 2 22-16-6-42Z" fill="#f4ae57"/><path d="M80 30q-12 17 0 26 9-10 0-26Z" fill="#ffe8a7"/>';
 }else if(/đồng hồ|thời gian/.test(n)){
 motif='<circle cx="80" cy="79" r="56" fill="#152e3b" stroke="#d2b180" stroke-width="7"/><circle cx="80" cy="79" r="45" fill="none" stroke="#ab8b69" stroke-width="2"/><path d="M80 42v37l21 13" stroke="#f1dcb5" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="80" cy="79" r="6" fill="#efbf82"/>';
 }else if(/khăn|găng|gối|vải/.test(n)){
 motif='<path d="M42 39q35-17 78 0l-11 97q-26-22-54 0Z" fill="#d1c0a5" stroke="#fff0d2" stroke-width="4"/><path d="M55 52q27 9 55 0M54 73q27 12 55 0" fill="none" stroke="#a98379" stroke-width="3"/>';
 }else if(/chìa|thẻ phòng|vé|bút|sổ|báo|thư/.test(n)){
 motif='<rect x="36" y="30" width="91" height="101" rx="4" fill="#d9bc95" stroke="#ecca97" stroke-width="4" transform="rotate(-7 80 80)"/><path d="M57 63h56M57 77h51M57 91h37" stroke="#895d4c" stroke-width="4"/><circle cx="99" cy="112" r="12" fill="#a74c48" opacity=".85"/>';
 }else if(/hoa|lá|táo|cây/.test(n)){
 motif='<path d="M81 70v65M80 102q-36-5-43-30 35-4 43 30m1 16q32-5 39-35-32-3-39 35" fill="#335f45" stroke="#75a078" stroke-width="3"/><circle cx="80" cy="54" r="22" fill="#c46b78"/><circle cx="61" cy="43" r="16" fill="#de8c8e"/><circle cx="100" cy="43" r="16" fill="#cf6a72"/><circle cx="80" cy="33" r="15" fill="#e9a2a3"/><circle cx="80" cy="53" r="10" fill="#edc683"/>';
 }else{
 motif='<circle cx="80" cy="72" r="45" fill="#bf957766" stroke="#e6ca9b" stroke-width="4"/><path d="M47 72h66M80 40v65" stroke="#eccb95" stroke-width="5"/><path d="M47 120h66" stroke="#bf886f" stroke-width="4"/>';
 }
 return '<svg aria-hidden="true" viewBox="0 0 160 155" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a"><stop stop-color="'+(type==="clue"?"#b96461":"#8bb7b5")+'" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="80" cy="81" rx="70" ry="70" fill="url(#a)"/><path d="M13 140h134" stroke="#c4976a" stroke-width="2" opacity=".4"/>'+motif+'</svg>';
}
function beautify(){
 document.querySelectorAll(".scene").forEach((el)=>{
  if(el.dataset.noir==="1")return;
  const title=el.querySelector("h3")?.textContent||"";
  const entry=(typeof scenes!=="undefined"?scenes:[]).find(s=>s.title===title);
  if(entry)el.dataset.scene=entry.id;
  el.dataset.noir="1";
 });
 document.querySelectorAll(".evidence").forEach((el)=>{
  if(el.dataset.noir==="1")return;
  const type=el.classList.contains("clue")?"clue":"means";
  const text=[...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join("").trim();
  if(!text)return;
  [...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).forEach(n=>n.remove());
  const art=document.createElement("span");art.className="evidence-art";art.innerHTML=illustration(text,type);
  const name=document.createElement("span");name.className="evidence-name";name.textContent=text;
  el.append(art,name);
  el.dataset.noir="1";el.setAttribute("aria-label",(type==="clue"?"Vật chứng: ":"Phương thức gây án: ")+text);
 });
}
let scheduled=false;
const obs=new MutationObserver(()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;beautify()})});
obs.observe(document.body,{childList:true,subtree:true});
beautify();
})();