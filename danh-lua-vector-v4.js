/* Scalable original SVG art for Đánh Lừa. Uses no raster images. */
(()=>{"use strict";
let serial=0;
const path=(d,f="url(#metal)",s="#e8d1af",w=3)=>'<path d="'+d+'" fill="'+f+'" stroke="'+s+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round"/>';
const rect=(x,y,w,h,r=5,f="url(#metal)",s="#e8d1af")=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+f+'" stroke="'+s+'" stroke-width="3"/>';
const circ=(x,y,r,f="url(#metal)",s="#e8d1af")=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'" stroke="'+s+'" stroke-width="3"/>';
const line=(d,s="#f8ddb7",w=4)=>path(d,"none",s,w);
function drawing(name){
const n=name.toLowerCase();
const bottle=()=>rect(62,20,36,15,2,"#bb9365")+path("M64 35v23L40 104q-14 33 12 33h56q26 0 12-33L96 58V35Z","url(#glass)")+path("M47 101h66l10 25q-3 12-18 12H55q-15 0-18-12Z","#874452","none",0)+rect(60,82,40,35,3,"#f1d4a6","#b38969")+circ(80,96,8,"#5c3640","none")+line("M69 109l22-12m-22 0 22 12","#67434b",2);
const cup=()=>path("M46 36h68l-11 100H57Z","url(#glass)")+path("M52 82h56l-5 47H57Z","#5592a1aa","none",0)+line("M52 44h56M65 49l5 70","#f8eacc",3);
const blade=()=>path("M35 115L114 24l18 21-75 86Z","url(#metal)")+path("M36 111l-18 20 14 15 23-26Z","url(#wood)")+circ(34,134,3,"#ecc58f","none");
const phone=()=>rect(49,15,62,126,10,"#1b2734","#d8c8ad")+rect(57,28,46,95,3,"url(#screen)","#8aadb0")+line("M66 51h28M66 62h25M66 74h17","#b9d8d4",3)+circ(80,133,3,"#f1ce9d","none");
const flame=()=>path("M83 11Q49 50 64 74q-26-11-21-33-28 41-5 82 12 21 40 22 45 0 49-42 1-26-24-58 4 24-10 35 8-39-10-69Z","url(#fire)")+path("M82 77q-24 28-11 54 13 15 23 0 12-19-12-54Z","#f8db9d","none",0);
const lighter=()=>rect(52,62,62,74,7,"url(#wood)")+rect(50,43,62,19,3,"url(#metal)")+path("M83 9q-32 25-13 47 18 16 25-5 3-15-12-42Z","url(#fire)")+line("M59 78h47","#f0c689",2);
const paper=()=>rect(43,23,77,112,4,"#dfc4a0","#a48162")+line("M57 54h48M57 66h48M57 80h34M57 93h43","#99755b",3)+circ(101,112,11,"#9e5153","none");
const clock=()=>circ(80,80,54,"#1e3340","#daba88")+circ(80,80,43,"#0f222d","#a78e6d")+line("M80 48v33l25 17","#f2d8ac",5)+circ(80,80,5,"#f0cc97","none");
const rope=()=>'<ellipse cx="80" cy="78" rx="34" ry="46" fill="none" stroke="#d4ad76" stroke-width="13"/>'+line("M80 123q-13 22-1 23","#d6ad76",10);
const hammer=()=>rect(67,57,23,82,5,"url(#wood)")+path("M37 46q44-20 88 0v29H37Z","url(#metal)");
const key=()=>circ(57,64,22,"none","#dfbb85")+line("M73 80l47 48m-10-10 11-11m-22 0 11-11","#eac794",9);
const syringe=()=>rect(65,28,30,73,3,"url(#glass)")+rect(62,46,36,9,2,"#c77e84")+line("M80 101v41M64 22h32M80 11v11","#ead6b4",4);
const skull=()=>circ(80,72,37,"#e5d2b3","#f3dfc3")+rect(61,97,38,31,5,"#e5d2b3")+circ(63,74,8,"#4b3639","none")+circ(97,74,8,"#4b3639","none")+path("M80 83l-9 15h18Z","#594045","none",0);
const pill=()=>rect(33,52,94,52,25,"#c1b7a8","#f0ded1")+path("M80 52v52","#a75863","none",0);
const glasses=()=>circ(52,82,25,"none","#e6c18c")+circ(108,82,25,"none","#e6c18c")+line("M76 77q4-8 8 0M28 70l-15-7M132 70l15-7","#ddb986",5);
const ring=()=>'<ellipse cx="80" cy="107" rx="40" ry="30" fill="none" stroke="#dbb17e" stroke-width="12"/>'+path("M80 24l29 33-29 27-29-27Z","url(#glass)");
const flower=()=>line("M80 81v55M80 112q-37-24-45-4 20 23 45 7m0 0q35-20 46-1-24 20-46 8","#7ca782",5)+[0,72,144,216,288].map(a=>'<ellipse cx="80" cy="48" rx="15" ry="30" fill="#b76578" stroke="#e6a19f" stroke-width="2" transform="rotate('+a+' 80 75)"/>').join("")+circ(80,75,13,"#e2c18a","none");
const camera=()=>rect(28,49,104,81,8,"#253e4b","#cbb395")+rect(53,36,41,16,4,"#a48065")+circ(80,91,29,"#142630","#d7ba8a")+circ(80,91,16,"#2f6b7e","#9dcfd0");
const gadget=()=>rect(33,43,94,93,9,"#27404d","#c5ad8f")+circ(80,84,28,"#12242d","#d4b48c")+circ(80,84,14,"#6f9ea1","#d7d9c7");
const clothes=()=>path("M44 39q35-22 72 0l13 97q-46-17-97 0Z","#d7c0a3","#f4dfc4")+line("M52 60q27 10 55 0M51 81q28 8 57 0","#b28b7d",3);
const firefly=()=>path("M84 9L47 86h35l-13 63 48-84H84Z","url(#fire)");
const pillow=()=>rect(34,47,92,90,21,"#e2c7aa","#f3dfc6")+line("M49 65q30 14 62 0M49 114q32-11 63 0","#c19e86",3);
const brick=()=>rect(31,44,98,93,4,"#9b5c57","#e3a486")+line("M32 87h96M64 45v42M100 87v49","#db9d81",4);
const bag=()=>rect(33,61,94,74,9,"url(#wood)")+path("M55 61V42q0-21 25-21t25 21v19","none","#e6c59c",7)+rect(75,95,11,17,2,"#eac995","none");
const fruit=()=>circ(80,99,38,"#b65f5b","#e6ab8d")+path("M79 66q-2-22 12-40","none","#b6a474",6)+path("M91 40q18-24 36-3-13 18-36 3Z","#5d846e","#bdd0a0");
const food=()=>circ(80,95,44,"#b47e53","#efd3a4")+circ(80,95,32,"#d7a672","none")+line("M57 96q23-18 46 0","#aa7154",4);
const pistol=()=>path("M32 61h92v23H91l-9 45H58l9-45H32Z","url(#metal)")+rect(108,53,30,9,2,"#b4bfc3","#e1d1ad")+line("M67 90q12 9 20-2","#ecd9b4",3);
let out;
if(/thuốc độc|thuốc ngủ|lọ thuốc|chất tẩy|khí độc/.test(n))out=bottle();
else if(/ly nước|chai rượu|nước sôi/.test(n))out=cup();
else if(/dao|găm|rìu|kéo|cưa/.test(n))out=blade();
else if(/điện thoại/.test(n))out=phone();
else if(/bật lửa|diêm/.test(n))out=lighter();
else if(/lửa/.test(n))out=flame();
else if(/đồng hồ/.test(n))out=clock();
else if(/dây thừng|dây cáp/.test(n))out=rope();
else if(/búa|gậy|thanh sắt|vật nặng/.test(n))out=hammer();
else if(/chìa khóa/.test(n))out=key();
else if(/kim tiêm/.test(n))out=syringe();
else if(/ngạt thở|chấn thương/.test(n))out=skull();
else if(/kính mắt/.test(n))out=glasses();
else if(/nhẫn|vòng cổ/.test(n))out=ring();
else if(/hoa|chiếc lá/.test(n))out=flower();
else if(/máy ảnh/.test(n))out=camera();
else if(/tai nghe/.test(n))out=gadget();
else if(/khăn|găng|băng gạc/.test(n))out=clothes();
else if(/dây điện|điện giật/.test(n))out=firefly();
else if(/gối/.test(n))out=pillow();
else if(/gạch/.test(n))out=brick();
else if(/ví|hộp quà/.test(n))out=bag();
else if(/táo/.test(n))out=fruit();
else if(/bánh|kẹo/.test(n))out=food();
else if(/súng/.test(n))out=pistol();
else out=paper();
return out;
}
function svg(name,type){
const id="dlv"+(++serial);let shape=drawing(name).replaceAll("url(#metal)","url(#"+id+"metal)").replaceAll("url(#glass)","url(#"+id+"glass)").replaceAll("url(#wood)","url(#"+id+"wood)").replaceAll("url(#fire)","url(#"+id+"fire)").replaceAll("url(#screen)","url(#"+id+"screen)");
const hue=type==="clue"?"#c37e87":"#6faeb6";
return '<svg class="dl-v4-icon" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>'+
'<linearGradient id="'+id+'metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffefd0"/><stop offset=".4" stop-color="#b7ced0"/><stop offset=".7" stop-color="#718c99"/><stop offset="1" stop-color="#e0ae7d"/></linearGradient>'+
'<linearGradient id="'+id+'glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#bddfe1" stop-opacity=".85"/><stop offset=".55" stop-color="#4e8e9c" stop-opacity=".35"/><stop offset="1" stop-color="#bad0cb" stop-opacity=".8"/></linearGradient>'+
'<linearGradient id="'+id+'wood"><stop stop-color="#c38f72"/><stop offset=".55" stop-color="#64464a"/><stop offset="1" stop-color="#bb816a"/></linearGradient>'+
'<linearGradient id="'+id+'fire" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff0bc"/><stop offset=".55" stop-color="#edac5d"/><stop offset="1" stop-color="#ae494e"/></linearGradient>'+
'<linearGradient id="'+id+'screen"><stop stop-color="#163b52"/><stop offset="1" stop-color="#4c8994"/></linearGradient>'+
'<radialGradient id="'+id+'halo"><stop stop-color="'+hue+'" stop-opacity=".3"/><stop offset="1" stop-color="'+hue+'" stop-opacity="0"/></radialGradient>'+
'</defs><circle cx="80" cy="81" r="76" fill="url(#'+id+'halo)"/><ellipse cx="80" cy="148" rx="55" ry="6" fill="#080e15" opacity=".3"/>'+shape+'</svg>';
}
function upgrade(){
 document.querySelectorAll(".evidence").forEach(card=>{
 const name=card.querySelector(".evidence-name")?.textContent?.trim(),holder=card.querySelector(".evidence-art");
 if(!name||!holder||holder.dataset.vectorV4===name)return;
 holder.innerHTML=svg(name,card.classList.contains("clue")?"clue":"means");holder.dataset.vectorV4=name;
 });
 document.querySelectorAll(".evidence-preview").forEach(pre=>{
 const name=pre.querySelector("h3")?.textContent?.trim(),holder=pre.firstElementChild;
 if(!name||!holder||holder.dataset.vectorV4===name)return;
 holder.innerHTML=svg(name,(document.getElementById("dialogTitle")?.textContent||"").includes("PHƯƠNG THỨC")?"means":"clue");holder.dataset.vectorV4=name;
 });
}
let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;upgrade()})}).observe(document.documentElement,{subtree:true,childList:true});
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",upgrade,{once:true});else upgrade();
})();
