import test from 'node:test';import assert from 'node:assert/strict';
import {score,questEligible,questPayment,catchStrength,stormPenalty,travelCost,resolveStorm} from './engine.mjs';
const fish=(id,depth,prestige=2)=>({id,depth,prestige});
test('storm thresholds',()=>{assert.equal(stormPenalty(1),0);assert.equal(stormPenalty(2),1);assert.equal(stormPenalty(4),2);assert.equal(stormPenalty(6),2)});
test('travel costs',()=>{assert.equal(travelCost(0,1),1);assert.equal(travelCost(1,2,true),0);assert.equal(travelCost(3,0),0);assert.equal(travelCost(1,3),null)});
test('catch and reckless',()=>assert.equal(catchStrength([2,3],4,2,true),8));
test('storm clamping and cloak',()=>{assert.deepEqual(resolveStorm(5,2,true),{storm:6,cloakUsed:true});assert.equal(resolveStorm(0,-2).storm,0)});
test('score displayed double and gold floor',()=>assert.equal(score({fame:5,hand:[fish('F01',1,2)],display:[fish('F14',3,9)],gold:8,storm:6}),25));
test('mission eligibility and payment',()=>{let p={gold:8,hand:[fish('F01',1),fish('F02',1),fish('F07',2),fish('F14',3)]};assert.equal(questEligible({id:'M1'},p),true);assert.deepEqual(questPayment({id:'M4'},p).fishIds,['F01','F07','F14']);assert.deepEqual(questPayment({id:'M5'},p),{gold:8,fishIds:[]});assert.equal(questEligible({id:'M3'},p),false)});
