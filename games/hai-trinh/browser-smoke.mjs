import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const server=spawn('python3',['-m','http.server','8765','--bind','127.0.0.1'],{stdio:'ignore'});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
try{
 let loaded=false;
 for(let attempt=0;attempt<30;attempt++){
   try{await page.goto('http://127.0.0.1:8765/games/hai-trinh/',{waitUntil:'domcontentloaded'});loaded=true;break}catch{await new Promise(resolve=>setTimeout(resolve,200))}
 }
 assert.ok(loaded,'Local server did not start');
 await page.locator('#start').click();
 await page.locator('#game:not(.hidden)').waitFor();
 assert.match(await page.locator('#day').innerText(),/Ngày 1/);
 await page.locator('#move button').first().click();
 assert.match(await page.locator('#log').innerText(),/đến Biển Nông/);
 await page.reload();
 await page.locator('#resume').click();
 assert.match(await page.locator('#log').innerText(),/đến Biển Nông/);
 for(let day=1;day<=6;day++){
   for(let guard=0;guard<20;guard++){
     const ended=await page.locator('#status').innerText();
     if(ended.includes('Kết thúc'))break;
     const label=await page.locator('#day').innerText();
     if(!label.includes('Ngày '+day+' /'))break;
     await page.locator('#actions button').filter({hasText:'Qua lượt'}).click();
   }
 }
 assert.match(await page.locator('#status').innerText(),/Kết thúc/);
 assert.deepEqual(errors,[],'No uncaught browser errors');
 console.log('PASS: start, move, save/resume, six-day completion on mobile viewport');
}finally{
 await browser.close();
 server.kill();
}
