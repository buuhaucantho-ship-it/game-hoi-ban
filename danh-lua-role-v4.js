/* Vector portraits for secret roles — no bitmap art or leaked information. */
(()=>{"use strict";
const defs='<defs><linearGradient id="dl-coat" x2="1" y2="1"><stop stop-color="#354d59"/><stop offset="1" stop-color="#192631"/></linearGradient><linearGradient id="dl-face" x2="1" y2="1"><stop stop-color="#e3b49a"/><stop offset="1" stop-color="#a97c76"/></linearGradient><linearGradient id="dl-dark" x2="1" y2="1"><stop stop-color="#6e3543"/><stop offset="1" stop-color="#2b1b2b"/></linearGradient></defs>';
function portrait(role){
const villain=role==="Hung thủ"||role==="Đồng phạm";
const glasses=role==="Giám định viên pháp y";
const shirt=villain?'url(#dl-dark)':'url(#dl-coat)';
const coat='<path d="M25 187q15-64 60-66l15 25 15-25q45 2 60 66v33H25Z" fill="'+shirt+'" stroke="#c49b79" stroke-width="3"/>'+
'<path d="M76 132l24 58 24-58-24 16Z" fill="#f4ddbc"/><path d="M93 151l7 34 7-34-7-9Z" fill="#a36d76"/>';
const face='<path d="M66 64q34-37 68 0l-4 48q-7 32-30 34-23-2-30-34Z" fill="url(#dl-face)" stroke="#e6c4aa" stroke-width="2"/>'+
'<path d="M65 79q-1-49 35-55 40 0 41 48-13-8-20-32-18 23-56 24Z" fill="#241e29"/>'+
'<path d="M83 91h10m17 0h10" stroke="#513842" stroke-width="4" stroke-linecap="round"/>'+
'<path d="M100 99l-3 15h8" stroke="#ad7f78" stroke-width="2" fill="none"/>'+
'<path d="M91 124q9 5 18 0" stroke="#874e58" stroke-width="3" fill="none" stroke-linecap="round"/>';
const accessory=glasses?'<path d="M74 86q12-8 22 0q6 14-6 17-15 2-16-17Zm30 0q12-8 22 0q6 14-6 17-15 2-16-17Z" fill="none" stroke="#e2c28f" stroke-width="3"/><path d="M96 89h8" stroke="#e2c28f" stroke-width="3"/>':'';
const pin=role==="Giám định viên pháp y"?'<path d="M40 167h15M48 159v16" stroke="#b4d6d7" stroke-width="5"/>':villain?'<path d="M45 158l19 19" stroke="#e2a79f" stroke-width="5"/>':'<circle cx="51" cy="169" r="9" fill="none" stroke="#d6b881" stroke-width="3"/>';
return '<svg viewBox="0 0 200 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+role+'">'+defs+'<rect width="200" height="225" rx="8" fill="'+(villain?'#2e1d28':'#1a303b')+'"/><circle cx="150" cy="56" r="70" fill="'+(villain?'#8a4052':'#477989')+'" opacity=".23"/><path d="M12 42l48-28m85 5 40 32M17 204l60-44" stroke="#d1ac83" stroke-width="1" opacity=".3"/>'+coat+face+accessory+pin+'<path d="M10 10h30M10 10v28M190 10h-30M190 10v28M10 215h30M10 215v-28M190 215h-30M190 215v-28" stroke="#d9b47f" stroke-width="2" fill="none"/></svg>';
}
function update(){
const box=document.getElementById("dialog");if(!box||box.classList.contains("hidden"))return;
const title=document.getElementById("dialogTitle")?.textContent||"",body=document.getElementById("dialogBody");
if(!/^Vai trò của /.test(title)||!body||body.querySelector(".dl-role-v4"))return;
const txt=body.textContent||"";
let role=/biết lời giải|gợi ý qua thẻ hiện trường/.test(txt)?"Giám định viên pháp y":/bí mật chọn một phương thức/.test(txt)?"Hung thủ":/hỗ trợ hung thủ/.test(txt)?"Đồng phạm":/biết hai người phe tội phạm/.test(txt)?"Nhân chứng":"Điều tra viên";
const wrap=document.createElement("div");wrap.className="dl-role-v4";const art=document.createElement("div");art.className="dl-role-v4-art";art.innerHTML=portrait(role);
const text=document.createElement("div");const heading=document.createElement("h3");heading.textContent=role.toUpperCase();const p=document.createElement("p");p.textContent=txt;text.append(heading,p);wrap.append(art,text);body.replaceChildren(wrap);
}
let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;update()})}).observe(document.documentElement,{childList:true,subtree:true});
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",update,{once:true});else update();
})();