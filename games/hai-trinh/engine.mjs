// Pure helpers for Hải Trình Kỳ Thú. No DOM, deterministic inputs.
export const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
export function stormPenalty(storm){return storm>=4?2:storm>=2?1:0}
export function score(player){return player.fame+player.hand.reduce((n,f)=>n+f.prestige,0)+player.display.reduce((n,f)=>n+2*f.prestige,0)+Math.floor(player.gold/3)-(player.storm===6?2:0)}
export function questEligible(quest,player){
 const fish=player.hand;
 switch(quest.id){
 case 'M1':return fish.filter(f=>f.depth===1).length>=2;
 case 'M2':return fish.some(f=>f.id==='F07');
 case 'M3':return fish.some(f=>f.id==='F08');
 case 'M4':return [1,2,3].every(depth=>fish.some(f=>f.depth===depth));
 case 'M5':return player.gold>=8;
 case 'M6':return fish.some(f=>f.id==='F14');
 default:return false;
 }
}
export function questPayment(quest,player){
 if(!questEligible(quest,player))return null;
 if(quest.id==='M5')return {gold:8,fishIds:[]};
 const remaining=[...player.hand],selected=[];
 const take=predicate=>{const i=remaining.findIndex(predicate);if(i<0)return false;selected.push(remaining.splice(i,1)[0].id);return true};
 if(quest.id==='M1'){take(f=>f.depth===1);take(f=>f.depth===1)}
 if(quest.id==='M2')take(f=>f.id==='F07');
 if(quest.id==='M3')take(f=>f.id==='F08');
 if(quest.id==='M4')[1,2,3].forEach(depth=>take(f=>f.depth===depth));
 if(quest.id==='M6')take(f=>f.id==='F14');
 return {gold:0,fishIds:selected};
}
export function catchStrength(dice,storm,bonus=0,reckless=false){
 return dice.reduce((n,d)=>n+d,0)+bonus-stormPenalty(storm)+(reckless?3:0);
}
export function travelCost(from,to,compassAvailable=false){
 if(from===to||to<0||to>3)return null;
 if(to===0||to===from-1)return 0;
 if(to===from+1)return compassAvailable?0:1;
 return null;
}
export function resolveStorm(storm,change,cloakAvailable=false){
 let actual=change;
 if(actual>0&&cloakAvailable)actual--;
 return {storm:clamp(storm+actual,0,6),cloakUsed:change>0&&cloakAvailable};
}
