(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="169",Ih=0,Qo=1,Dh=2,_l=1,xl=2,Sn=3,An=0,Be=1,$e=2,Vn=0,Mi=1,$r=2,tl=3,el=4,Uh=5,ni=100,Nh=101,Fh=102,Oh=103,zh=104,kh=200,Bh=201,Gh=202,Hh=203,qr=204,Yr=205,Vh=206,Wh=207,Xh=208,$h=209,qh=210,Yh=211,Kh=212,jh=213,Zh=214,Kr=0,jr=1,Zr=2,wi=3,Jr=4,Qr=5,ta=6,ea=7,Ga=0,Jh=1,Qh=2,Wn=0,tu=1,eu=2,nu=3,iu=4,su=5,ru=6,au=7,Ml=300,Ei=301,Ti=302,na=303,ia=304,tr=306,Gs=1e3,ii=1001,sa=1002,ke=1003,ou=1004,Ts=1005,hn=1006,Gr=1007,si=1008,Cn=1009,yl=1010,Sl=1011,as=1012,Ha=1013,ri=1014,_n=1015,hs=1016,Va=1017,Wa=1018,Ai=1020,bl=35902,wl=1021,El=1022,sn=1023,Tl=1024,Al=1025,yi=1026,Ci=1027,Xa=1028,$a=1029,Cl=1030,qa=1031,Ya=1033,Ps=33776,Ls=33777,Is=33778,Ds=33779,ra=35840,aa=35841,oa=35842,la=35843,ca=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,va=37813,_a=37814,xa=37815,Ma=37816,ya=37817,Sa=37818,ba=37819,wa=37820,Ea=37821,Us=36492,Ta=36494,Aa=36495,Rl=36283,Ca=36284,Ra=36285,Pa=36286,lu=3200,cu=3201,er=0,hu=1,Bn="",Ve="srgb",Xn="srgb-linear",Ka="display-p3",nr="display-p3-linear",Hs="linear",me="srgb",Vs="rec709",Ws="p3",mi=7680,nl=519,uu=512,du=513,fu=514,Pl=515,pu=516,mu=517,gu=518,vu=519,La=35044,il="300 es",wn=2e3,Xs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mc=1234567;const Ns=Math.PI/180,$s=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Ll(i,t){return(i%t+t)%t}function vd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _d(i,t,e){return i!==t?(e-i)/(t-i):0}function Fs(i,t,e){return(1-e)*i+e*t}function xd(i,t,e,n){return Fs(i,t,1-Math.exp(-e*n))}function Md(i,t=1){return t-Math.abs(Ll(i,t*2)-t)}function yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wd(i,t){return i+Math.random()*(t-i)}function Ed(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(mc=i);let t=mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ad(i){return i*Ns}function Cd(i){return i*$s}function Rd(i){return(i&i-1)===0&&i!==0}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Id(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _u={DEG2RAD:Ns,RAD2DEG:$s,generateUUID:Tn,clamp:Ie,euclideanModulo:Ll,mapLinear:vd,inverseLerp:_d,lerp:Fs,damp:xd,pingpong:Md,smoothstep:yd,smootherstep:Sd,randInt:bd,randFloat:wd,randFloatSpread:Ed,seededRandom:Td,degToRad:Ad,radToDeg:Cd,isPowerOfTwo:Rd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Id,normalize:he,denormalize:vn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],M=s[1],x=s[4],S=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*_+o*M+l*R,r[3]=a*p+o*x+l*T,r[6]=a*g+o*S+l*A,r[1]=c*_+h*M+u*R,r[4]=c*p+h*x+u*T,r[7]=c*g+h*S+u*A,r[2]=d*_+f*M+m*R,r[5]=d*p+f*x+m*T,r[8]=d*g+f*S+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Vt;function xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){const i=Ia("canvas");return i.style.display="block",i}const gc={};function Hr(i){i in gc||(gc[i]=!0,console.warn(i))}function Dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ud(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_c=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[Xn]:{transfer:Hs,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:me,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nr]:{transfer:Hs,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(_c),fromReference:i=>i.applyMatrix3(vc)},[Ka]:{transfer:me,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(_c),fromReference:i=>i.applyMatrix3(vc).convertLinearToSRGB()}},Fd=new Set([Xn,nr]),re={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ps[t].toReference,s=ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ps[i].primaries},getTransfer:function(i){return i===Bn?Hs:ps[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ps[t].luminanceCoefficients)}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class yu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Ia("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Od=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;class Fe extends Ii{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=ii,s=ii,r=hn,a=si,o=sn,l=Cn,c=Fe.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Tn(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Ml;Fe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,R=(g+1)/2,T=(h+d)/4,A=(u+_)/4,I=(m+p)/4;return x>S&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dl extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let p=1-o;const g=l*d+c*f+h*m+u*_,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,g*M);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}const S=o*M;if(l=l*p+d*S,c=c*p+f*S,h=h*p+m*S,u=u*p+_*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new C,xc=new oi;class $n{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),hr.subVectors(this.max,ms),Oi.subVectors(t.a,ms),zi.subVectors(t.b,ms),ki.subVectors(t.c,ms),Yn.subVectors(zi,Oi),Kn.subVectors(ki,zi),ci.subVectors(Oi,ki);let e=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-ci.z,ci.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,ci.z,0,-ci.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-ci.y,ci.x,0];return!yo(e,Oi,zi,ki,hr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Oi,zi,ki,hr))?!1:(ur.crossVectors(Yn,Kn),e=[ur.x,ur.y,ur.z],yo(e,Oi,zi,ki,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new C,new C,new C,new C,new C,new C,new C,new C],fn=new C,cr=new $n,Oi=new C,zi=new C,ki=new C,Yn=new C,Kn=new C,ci=new C,ms=new C,hr=new C,ur=new C,hi=new C;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kd=new $n,gs=new C,So=new C;class Di{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(So)),this.expandByPoint(gs.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new C,bo=new C,dr=new C,jn=new C,wo=new C,fr=new C,Eo=new C;class ja{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=jn.dot(this.direction),l=-jn.dot(dr),c=jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(dr,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){wo.subVectors(e,t),fr.subVectors(n,t),Eo.crossVectors(wo,fr);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);const l=o*this.direction.dot(fr.crossVectors(jn,fr));if(l<0)return null;const c=o*this.direction.dot(wo.cross(jn));if(c<0||l+c>a)return null;const h=-o*jn.dot(Eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,Gd)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),pr.crossVectors(tn,Zn),s[0]=Zn.x,s[4]=pr.x,s[8]=tn.x,s[1]=Zn.y,s[5]=pr.y,s[9]=tn.y,s[2]=Zn.z,s[6]=pr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],x=n[7],S=n[11],R=n[15],T=s[0],A=s[4],I=s[8],k=s[12],v=s[1],w=s[5],B=s[9],H=s[13],$=s[2],Z=s[6],V=s[10],J=s[14],X=s[3],pt=s[7],mt=s[11],wt=s[15];return r[0]=a*T+o*v+l*$+c*X,r[4]=a*A+o*w+l*Z+c*pt,r[8]=a*I+o*B+l*V+c*mt,r[12]=a*k+o*H+l*J+c*wt,r[1]=h*T+u*v+d*$+f*X,r[5]=h*A+u*w+d*Z+f*pt,r[9]=h*I+u*B+d*V+f*mt,r[13]=h*k+u*H+d*J+f*wt,r[2]=m*T+_*v+p*$+g*X,r[6]=m*A+_*w+p*Z+g*pt,r[10]=m*I+_*B+p*V+g*mt,r[14]=m*k+_*H+p*J+g*wt,r[3]=M*T+x*v+S*$+R*X,r[7]=M*A+x*w+S*Z+R*pt,r[11]=M*I+x*B+S*V+R*mt,r[15]=M*k+x*H+S*J+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=u*p*c-_*d*c+_*l*f-o*p*f-u*l*g+o*d*g,x=m*d*c-h*p*c-m*l*f+a*p*f+h*l*g-a*d*g,S=h*_*c-m*u*c+m*o*f-a*_*f-h*o*g+a*u*g,R=m*u*l-h*_*l-m*o*d+a*_*d+h*o*p-a*u*p,T=e*M+n*x+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=M*A,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*g-n*d*g)*A,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*g+n*l*g)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=x*A,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*A,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*g-e*l*g)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=S*A,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*g-e*u*g)*A,t[10]=(a*_*r-m*o*r+m*n*c-e*_*c-a*n*g+e*o*g)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*p+e*u*p)*A,t[14]=(m*o*s-a*_*s-m*n*l+e*_*l+a*n*p-e*o*p)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,p=a*u,g=o*u,M=l*c,x=l*h,S=l*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(_+g))*R,s[1]=(f+S)*R,s[2]=(m-x)*R,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+g))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(m+x)*A,s[9]=(p-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=wn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(o===wn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Xs)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=wn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let m,_;if(o===wn)m=(a+r)*u,_=-2*u;else if(o===Xs)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new C,pn=new Xt,Bd=new C(0,0,0),Gd=new C(1,1,1),Zn=new C,pr=new C,tn=new C,Mc=new Xt,yc=new oi;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hd=0;const Sc=new C,Gi=new oi,Un=new Xt,mr=new C,vs=new C,Vd=new C,Wd=new oi,bc=new C(1,0,0),wc=new C(0,1,0),Ec=new C(0,0,1),Tc={type:"added"},Xd={type:"removed"},Hi={type:"childadded",child:null},To={type:"childremoved",child:null};class Ae extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new C,e=new un,n=new oi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Vt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(vs,mr,this.up):Un.lookAt(mr,vs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Un),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new C(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new C,Nn=new C,Ao=new C,Fn=new C,Vi=new C,Wi=new C,Ac=new C,Co=new C,Ro=new C,Po=new C,Lo=new _e,Io=new _e,Do=new _e;class nn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Nn.subVectors(n,e),Ao.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Nn),l=mn.dot(Ao),c=Nn.dot(Nn),h=Nn.dot(Ao),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lo.setScalar(0),Io.setScalar(0),Do.setScalar(0),Lo.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lo,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Nn.subVectors(t,e),mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Vi.subVectors(s,n),Wi.subVectors(r,n),Co.subVectors(t,n);const l=Vi.dot(Co),c=Wi.dot(Co);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,s);const h=Vi.dot(Ro),u=Wi.dot(Ro);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Po.subVectors(t,r);const f=Vi.dot(Po),m=Wi.dot(Po);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Wi,o);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Ac.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Ac,o);const g=1/(p+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Ll(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Uo(a,r,t+1/3),this.g=Uo(a,r,t),this.b=Uo(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return re.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ie(ze.r*255,0,255))*65536+Math.round(Ie(ze.g*255,0,255))*256+Math.round(Ie(ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ve){re.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(gr);const n=Fs(Jn.h,gr.h,e),s=Fs(Jn.s,gr.s,e),r=Fs(Jn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Ct;Ct.NAMES=wu;let $d=0;class Pn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Mi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new C,vr=new rt;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class Ul extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qd=0;const an=new Xt,No=new Ae,Xi=new C,en=new $n,_s=new $n,Pe=new C;class we extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?Nl:Ul)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(en.min,_s.min),en.expandByPoint(Pe),Pe.addVectors(en.max,_s.max),en.expandByPoint(Pe)):(en.expandByPoint(_s.min),en.expandByPoint(_s.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),Pe.add(Xi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;const c=new C,h=new C,u=new C,d=new rt,f=new rt,m=new rt,_=new C,p=new C;function g(I,k,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,k),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),o[I].add(_),o[k].add(_),o[v].add(_),l[I].add(p),l[k].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,k=M.length;I<k;++I){const v=M[I],w=v.start,B=v.count;for(let H=w,$=w+B;H<$;H+=3)g(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const x=new C,S=new C,R=new C,T=new C;function A(I){R.fromBufferAttribute(s,I),T.copy(R);const k=o[I];x.copy(k),x.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(T,k);const w=S.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,w)}for(let I=0,k=M.length;I<k;++I){const v=M[I],w=v.start,B=v.count;for(let H=w,$=w+B;H<$;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new Xt,ui=new ja,_r=new Di,Rc=new C,xr=new C,Mr=new C,yr=new C,Fo=new C,Sr=new C,Pc=new C,br=new C;class bt extends Ae{constructor(t=new we,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Fo.fromBufferAttribute(u,t),a?Sr.addScaledVector(Fo,h):Sr.addScaledVector(Fo.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(_r.containsPoint(ui.origin)===!1&&(ui.intersectSphere(_r,Rc)===null||ui.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,R=x;S<R;S+=3){const T=o.getX(S),A=o.getX(S+1),I=o.getX(S+2);s=wr(this,g,t,n,c,h,u,T,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);s=wr(this,a,t,n,c,h,u,M,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,R=x;S<R;S+=3){const T=S,A=S+1,I=S+2;s=wr(this,g,t,n,c,h,u,T,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=p,x=p+1,S=p+2;s=wr(this,a,t,n,c,h,u,M,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Yd(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,yr);const h=Yd(i,t,e,n,xr,Mr,yr,Pc);if(h){const u=new C;nn.getBarycoord(Pc,xr,Mr,yr,u),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(xr,Mr,yr,d.normal),h.face=d,h.barycoord=u}return h}class Ye extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(_,p,g,M,x,S,R,T,A,I,k){const v=S/A,w=R/I,B=S/2,H=R/2,$=T/2,Z=A+1,V=I+1;let J=0,X=0;const pt=new C;for(let mt=0;mt<V;mt++){const wt=mt*w-H;for(let ie=0;ie<Z;ie++){const le=ie*v-B;pt[_]=le*M,pt[p]=wt*x,pt[g]=$,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[p]=0,pt[g]=T>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(ie/A),u.push(1-mt/I),J+=1}}for(let mt=0;mt<I;mt++)for(let wt=0;wt<A;wt++){const ie=d+wt+Z*mt,le=d+wt+Z*(mt+1),q=d+(wt+1)+Z*(mt+1),nt=d+(wt+1)+Z*mt;l.push(ie,le,nt),l.push(le,q,nt),X+=6}o.addGroup(f,X,k),f+=X,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Kd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Tu={clone:os,merge:He};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fl extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new C,Lc=new rt,Ic=new rt;class Xe extends Fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Ic),e.subVectors(Ic,Lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,qi=1;class Au extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe($i,qi,t,e);s.layers=this.layers,this.add(s);const r=new Xe($i,qi,t,e);r.layers=this.layers,this.add(r);const a=new Xe($i,qi,t,e);a.layers=this.layers,this.add(a);const o=new Xe($i,qi,t,e);o.layers=this.layers,this.add(o);const l=new Xe($i,qi,t,e);l.layers=this.layers,this.add(l);const c=new Xe($i,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ol extends Fe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ye(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Vn});r.uniforms.tEquirect.value=e;const a=new bt(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=hn),new Au(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Oo=new C,Jd=new C,Qd=new Vt;class kn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oo.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Di,Er=new C;class Ja{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],p=s[11],g=s[12],M=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,p-f,S-g).normalize(),n[1].setComponents(l+r,d+c,p+f,S+g).normalize(),n[2].setComponents(l+a,d+h,p+m,S+M).normalize(),n[3].setComponents(l-a,d-h,p-m,S-M).normalize(),n[4].setComponents(l-o,d-u,p-_,S-x).normalize(),e===wn)n[5].setComponents(l+o,d+u,p+_,S+x).normalize();else if(e===Xs)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class En extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const M=g*d-a;for(let x=0;x<c;x++){const S=x*u-r;m.push(S,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const x=M+c*g,S=M+c*(g+1),R=M+1+c*(g+1),T=M+1+c*g;f.push(x,S,T),f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.widthSegments,t.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:Mf,color_fragment:yf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Cf,displacementmap_vertex:Rf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Yf,envmap_vertex:zf,fog_vertex:kf,fog_pars_vertex:Bf,fog_fragment:Gf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:$f,lights_pars_begin:qf,lights_toon_fragment:Kf,lights_toon_pars_fragment:jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:vp,morphtarget_vertex:_p,normal_fragment_begin:xp,normal_fragment_maps:Mp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Ip,dithering_fragment:Dp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Bp,skinbase_vertex:Gp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:$p,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:Kp,transmission_pars_fragment:jp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:vm,meshlambert_frag:_m,meshmatcap_vert:xm,meshmatcap_frag:Mm,meshnormal_vert:ym,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Cm,points_vert:Rm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Um},at={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},gn={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gn.physical={uniforms:He([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Tr={r:0,b:0,g:0},fi=new un,Nm=new Xt;function Fm(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const S=m(M);S===null?g(o,l):S&&S.isColor&&(g(S,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){const S=m(x);S&&(S.isCubeTexture||S.mapping===tr)?(h===void 0&&(h=new bt(new Ye(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(x.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(fi)),h.material.toneMapped=re.getTransfer(S.colorSpace)!==me,(u!==S||d!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new bt(new En(2,2),new Rn({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(S.colorSpace)!==me,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(Tr,Eu(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(o,l)},render:_,addToRenderList:p}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,w,B,H,$){let Z=!1;const V=u(H,B,w);r!==V&&(r=V,c(r.object)),Z=f(v,H,B,$),Z&&m(v,H,B,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(v,w,B,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,B){const H=B.wireframe===!0;let $=n[v.id];$===void 0&&($={},n[v.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let V=Z[H];return V===void 0&&(V=d(l()),Z[H]=V),V}function d(v){const w=[],B=[],H=[];for(let $=0;$<e;$++)w[$]=0,B[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,w,B,H){const $=r.attributes,Z=w.attributes;let V=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){const mt=$[X];let wt=Z[X];if(wt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),mt===void 0||mt.attribute!==wt||wt&&mt.data!==wt.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function m(v,w,B,H){const $={},Z=w.attributes;let V=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){let mt=Z[X];mt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const wt={};wt.attribute=mt,mt&&mt.data&&(wt.data=mt.data),$[X]=wt,V++}r.attributes=$,r.attributesNum=V,r.index=H}function _(){const v=r.newAttributes;for(let w=0,B=v.length;w<B;w++)v[w]=0}function p(v){g(v,0)}function g(v,w){const B=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;B[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),$[v]!==w&&(i.vertexAttribDivisor(v,w),$[v]=w)}function M(){const v=r.newAttributes,w=r.enabledAttributes;for(let B=0,H=w.length;B<H;B++)w[B]!==v[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function x(v,w,B,H,$,Z,V){V===!0?i.vertexAttribIPointer(v,w,B,$,Z):i.vertexAttribPointer(v,w,B,H,$,Z)}function S(v,w,B,H){_();const $=H.attributes,Z=B.getAttributes(),V=w.defaultAttributeValues;for(const J in Z){const X=Z[J];if(X.location>=0){let pt=$[J];if(pt===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){const mt=pt.normalized,wt=pt.itemSize,ie=t.get(pt);if(ie===void 0)continue;const le=ie.buffer,q=ie.type,nt=ie.bytesPerElement,yt=q===i.INT||q===i.UNSIGNED_INT||pt.gpuType===Ha;if(pt.isInterleavedBufferAttribute){const gt=pt.data,kt=gt.stride,It=pt.offset;if(gt.isInstancedInterleavedBuffer){for(let jt=0;jt<X.locationSize;jt++)g(X.location+jt,gt.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let jt=0;jt<X.locationSize;jt++)p(X.location+jt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let jt=0;jt<X.locationSize;jt++)x(X.location+jt,wt/X.locationSize,q,mt,kt*nt,(It+wt/X.locationSize*jt)*nt,yt)}else{if(pt.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)g(X.location+gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let gt=0;gt<X.locationSize;gt++)p(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let gt=0;gt<X.locationSize;gt++)x(X.location+gt,wt/X.locationSize,q,mt,wt*nt,wt/X.locationSize*gt*nt,yt)}}else if(V!==void 0){const mt=V[J];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(X.location,mt);break;case 3:i.vertexAttrib3fv(X.location,mt);break;case 4:i.vertexAttrib4fv(X.location,mt);break;default:i.vertexAttrib1fv(X.location,mt)}}}}M()}function R(){I();for(const v in n){const w=n[v];for(const B in w){const H=w[B];for(const $ in H)h(H[$].object),delete H[$];delete w[B]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const B in w){const H=w[B];for(const $ in H)h(H[$].object),delete H[$];delete w[B]}delete n[v.id]}function A(v){for(const w in n){const B=n[w];if(B[v.id]===void 0)continue;const H=B[v.id];for(const $ in H)h(H[$].object),delete H[$];delete B[v.id]}}function I(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function zm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<d.length;_++)e.update(m,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:T}}function Bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new kn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,x=M*4;let S=g.clippingState||null;l.value=S,S=h(m,d,x,f);for(let R=0;R!==x;++R)S[R]=e[R];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=f;x!==_;++x,S+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Gm(i){let t=new WeakMap;function e(a,o){return o===na?a.mapping=Ei:o===ia&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===na||o===ia)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zl extends Fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,Dc=[.125,.215,.35,.446,.526,.582],vi=20,zo=new zl,Uc=new Ct;let ko=null,Bo=0,Go=0,Ho=!1;const gi=(1+Math.sqrt(5))/2,Yi=1/gi,Nc=[new C(-gi,Yi,0),new C(gi,Yi,0),new C(-Yi,0,gi),new C(Yi,0,gi),new C(0,gi,-Yi),new C(0,gi,Yi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Bo,Go),this._renderer.xr.enabled=Ho,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:hs,format:sn,colorSpace:Xn,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Vm(r,t,e)}return s}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,s){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uc),h.toneMapping=Wn,h.autoClear=!1;const f=new Si({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new bt(new Ye,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Uc),_=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const x=this._cubeSize;Ar(s,M*x,g>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ei||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nc[(s-r-1)%Nc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new bt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):vi;p>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const g=[];let M=0;for(let A=0;A<vi;++A){const I=A/_,k=Math.exp(-I*I/2);g.push(k),A===0?M+=k:A<p&&(M+=2*k)}for(let A=0;A<g.length;A++)g[A]=g[A]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const S=this._sizeLods[s],R=3*S*(s>x-es?s-x+es:0),T=4*(this._cubeSize-S);Ar(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(u,zo)}}function Hm(i){const t=[],e=[],n=[];let s=i;const r=i-es+1+Dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-es?l=Dc[a-i+es-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,M=new Float32Array(_*m*f),x=new Float32Array(p*m*f),S=new Float32Array(g*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,I=T>2?0:-1,k=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(k,_*m*T),x.set(d,p*m*T);const v=[T,T,T,T,T,T];S.set(v,g*m*T)}const R=new we;R.setAttribute("position",new qe(M,_)),R.setAttribute("uv",new qe(x,p)),R.setAttribute("faceIndex",new qe(S,g)),t.push(R),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){const n=new Float32Array(vi),s=new C(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Oc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function zc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===na||l===ia,h=l===Ei||l===Ti;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new sl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new sl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $m(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,S=M.length;x<S;x+=3){const R=M[x+0],T=M[x+1],A=M[x+2];d.push(R,T,T,A,A,R)}}else if(m!==void 0){const M=m.array;_=m.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const R=x+0,T=x+1,A=x+2;d.push(R,T,T,A,A,R)}}else return;const p=new(xu(d)?Nl:Ul)(d,1);p.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let M=0;M<m;M++)g+=f[M];for(let M=0;M<_.length;M++)e.update(g,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let R=o.attributes.position.count*S,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*u),I=new Dl(A,R,T,u);I.type=_n,I.needsUpdate=!0;const k=S*4;for(let w=0;w<u;w++){const B=g[w],H=M[w],$=x[w],Z=R*T*4*w;for(let V=0;V<B.count;V++){const J=V*k;m===!0&&(s.fromBufferAttribute(B,V),A[Z+J+0]=s.x,A[Z+J+1]=s.y,A[Z+J+2]=s.z,A[Z+J+3]=0),_===!0&&(s.fromBufferAttribute(H,V),A[Z+J+4]=s.x,A[Z+J+5]=s.y,A[Z+J+6]=s.z,A[Z+J+7]=0),p===!0&&(s.fromBufferAttribute($,V),A[Z+J+8]=s.x,A[Z+J+9]=s.y,A[Z+J+10]=s.z,A[Z+J+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new rt(R,T)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Bl extends Fe{constructor(t,e,n,s,r,a,o,l,c,h=yi){if(h!==yi&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yi&&(n=ri),n===void 0&&h===Ci&&(n=Ai),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pu=new Fe,kc=new Bl(1,1),Lu=new Dl,Iu=new bu,Du=new Ol,Bc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),Re(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),Re(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Re(e,n)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Pl,r=kc):r=Pu,e.setTexture2D(t||r,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Du,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lu,s)}function g0(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function v0(i,t){i.uniform1fv(this.addr,t)}function _0(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function x0(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S0(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b0(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function T0(i,t){i.uniform3iv(this.addr,t)}function A0(i,t){i.uniform4iv(this.addr,t)}function C0(i,t){i.uniform1uiv(this.addr,t)}function R0(i,t){i.uniform2uiv(this.addr,t)}function P0(i,t){i.uniform3uiv(this.addr,t)}function L0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){const n=this.cache,s=t.length,r=Qa(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Pu,r[a])}function D0(i,t,e){const n=this.cache,s=t.length,r=Qa(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function U0(i,t,e){const n=this.cache,s=t.length,r=Qa(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Du,r[a])}function N0(i,t,e){const n=this.cache,s=t.length,r=Qa(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lu,r[a])}function F0(i){switch(i){case 5126:return v0;case 35664:return _0;case 35665:return x0;case 35666:return M0;case 35674:return y0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return w0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class k0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const r=Vo.exec(n),a=Vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xc(e,c===void 0?new O0(o,i,t):new z0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new k0(o),Xc(e,u)),e=u}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);B0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const G0=37297;let H0=0;function V0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function W0(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===Ws&&e===Vs?n="LinearDisplayP3ToLinearSRGB":t===Vs&&e===Ws&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case nr:return[n,"LinearTransferOETF"];case Ve:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(t),a)}else return s}function X0(i,t){const e=W0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $0(i,t){let e;switch(t){case tu:e="Linear";break;case eu:e="Reinhard";break;case nu:e="Cineon";break;case iu:e="ACESFilmic";break;case ru:e="AgX";break;case au:e="Neutral";break;case su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new C;function q0(){re.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Z0,Q0)}const J0=new Map;function Q0(i,t){let e=Ht[t];if(e===void 0){const n=J0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function ag(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function og(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ng(e),c=ig(e),h=sg(e),u=rg(e),d=ag(e),f=Y0(e),m=K0(r),_=s.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),g.length>0&&(g+=`
`)):(p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),g=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Wn?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=rl(a),a=Yc(a,e),a=Kc(a,e),o=rl(o),o=Yc(o,e),o=Kc(o,e),a=jc(a),o=jc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=M+p+a,S=M+g+o,R=$c(s,s.VERTEX_SHADER,x),T=$c(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(w){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(R).trim(),$=s.getShaderInfoLog(T).trim();let Z=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const J=qc(s,R,"vertex"),X=qc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+J+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||$==="")&&(V=!1);V&&(w.diagnostics={runnable:Z,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:$,prefix:g}})}s.deleteShader(R),s.deleteShader(T),I=new Vr(s,_),k=j0(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let k;this.getAttributes=function(){return k===void 0&&A(this),k};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,G0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let lg=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hg(t),e.set(t,n)),n}}class hg{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}}function ug(i,t,e,n,s,r,a){const o=new Za,l=new cg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,w,B,H,$){const Z=H.fog,V=$.geometry,J=v.isMeshStandardMaterial?H.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),pt=X&&X.mapping===tr?X.image.height:null,mt=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=wt!==void 0?wt.length:0;let le=0;V.morphAttributes.position!==void 0&&(le=1),V.morphAttributes.normal!==void 0&&(le=2),V.morphAttributes.color!==void 0&&(le=3);let q,nt,yt,gt;if(mt){const je=gn[mt];q=je.vertexShader,nt=je.fragmentShader}else q=v.vertexShader,nt=v.fragmentShader,l.update(v),yt=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);const kt=i.getRenderTarget(),It=$.isInstancedMesh===!0,jt=$.isBatchedMesh===!0,fe=!!v.map,Zt=!!v.matcap,L=!!X,Ze=!!v.aoMap,$t=!!v.lightMap,te=!!v.bumpMap,Ut=!!v.normalMap,ge=!!v.displacementMap,Ot=!!v.emissiveMap,E=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,K=v.clearcoat>0,tt=v.dispersion>0,Y=v.iridescence>0,Et=v.sheen>0,lt=v.transmission>0,vt=O&&!!v.anisotropyMap,ee=K&&!!v.clearcoatMap,it=K&&!!v.clearcoatNormalMap,_t=K&&!!v.clearcoatRoughnessMap,Nt=Y&&!!v.iridescenceMap,Ft=Y&&!!v.iridescenceThicknessMap,xt=Et&&!!v.sheenColorMap,qt=Et&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,pe=!!v.specularColorMap,D=!!v.specularIntensityMap,ut=lt&&!!v.transmissionMap,W=lt&&!!v.thicknessMap,j=!!v.gradientMap,ct=!!v.alphaMap,dt=v.alphaTest>0,Jt=!!v.alphaHash,Ee=!!v.extensions;let Ke=Wn;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const se={shaderID:mt,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:nt,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:jt,batchingColor:jt&&$._colorsTexture!==null,instancing:It,instancingColor:It&&$.instanceColor!==null,instancingMorph:It&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:Xn,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:Zt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:pt,aoMap:Ze,lightMap:$t,bumpMap:te,normalMap:Ut,displacementMap:f&&ge,emissiveMap:Ot,normalMapObjectSpace:Ut&&v.normalMapType===hu,normalMapTangentSpace:Ut&&v.normalMapType===er,metalnessMap:E,roughnessMap:y,anisotropy:O,anisotropyMap:vt,clearcoat:K,clearcoatMap:ee,clearcoatNormalMap:it,clearcoatRoughnessMap:_t,dispersion:tt,iridescence:Y,iridescenceMap:Nt,iridescenceThicknessMap:Ft,sheen:Et,sheenColorMap:xt,sheenRoughnessMap:qt,specularMap:Bt,specularColorMap:pe,specularIntensityMap:D,transmission:lt,transmissionMap:ut,thicknessMap:W,gradientMap:j,opaque:v.transparent===!1&&v.blending===Mi&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Jt,combine:v.combine,mapUv:fe&&p(v.map.channel),aoMapUv:Ze&&p(v.aoMap.channel),lightMapUv:$t&&p(v.lightMap.channel),bumpMapUv:te&&p(v.bumpMap.channel),normalMapUv:Ut&&p(v.normalMap.channel),displacementMapUv:ge&&p(v.displacementMap.channel),emissiveMapUv:Ot&&p(v.emissiveMap.channel),metalnessMapUv:E&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:vt&&p(v.anisotropyMap.channel),clearcoatMapUv:ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:qt&&p(v.sheenRoughnessMap.channel),specularMapUv:Bt&&p(v.specularMap.channel),specularColorMapUv:pe&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:ut&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(fe||ct),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===Be,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function M(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)w.push(B),w.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(x(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const w=_[v.type];let B;if(w){const H=gn[w];B=Tu.clone(H.uniforms)}else B=v.uniforms;return B}function T(v,w){let B;for(let H=0,$=h.length;H<$;H++){const Z=h[H];if(Z.cacheKey===w){B=Z,++B.usedTimes;break}}return B===void 0&&(B=new og(i,w,v,r),h.push(B)),B}function A(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:k}}function dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,_,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function o(u,d,f,m,_,p){const g=a(u,d,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,m,_,p){const g=a(u,d,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(d||Jc),s.length>1&&s.sort(d||Jc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qc,i.set(n,[a])):s>=r.length?(a=new Qc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ct};break;case"SpotLight":e={position:new C,direction:new C,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vg=0;function _g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){const t=new mg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Xt,a=new Xt;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,M=0,x=0,S=0,R=0,T=0,A=0;c.sort(_g);for(let k=0,v=c.length;k<v;k++){const w=c[k],B=w.color,H=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],H);A++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,X=e.get(w);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=V,f++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(B).multiplyScalar(H),V.distance=$,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;const J=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,J.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=J.matrix,w.castShadow){const X=e.get(w);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,S++}_++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(B).multiplyScalar(H),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const J=w.shadow,X=e.get(w);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=w.shadow.matrix,x++}n.point[m]=V,m++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(H),V.groundColor.copy(w.groundColor).multiplyScalar(H),n.hemi[g]=V,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=R,I.numLightProbes=A,n.version=vg++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const x=c[g];if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function th(i){const t=new xg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Uu extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nu extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(i,t,e){let n=new Ja;const s=new rt,r=new rt,a=new _e,o=new Uu({depthPacking:cu}),l=new Nu,c={},h=e.maxTextureSize,u={[An]:Be,[Be]:An,[$e]:$e},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let g=this.type;this.render=function(T,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const k=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=g!==Sn&&this.type===Sn,$=g===Sn&&this.type!==Sn;for(let Z=0,V=T.length;Z<V;Z++){const J=T[Z],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const pt=X.getFrameExtents();if(s.multiply(pt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,X.mapSize.y=r.y)),X.map===null||H===!0||$===!0){const wt=this.type!==Sn?{minFilter:ke,magFilter:ke}:{};X.map!==null&&X.map.dispose(),X.map=new ai(s.x,s.y,wt),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const mt=X.getViewportCount();for(let wt=0;wt<mt;wt++){const ie=X.getViewport(wt);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),B.viewport(a),X.updateMatrices(J,wt),n=X.getFrustum(),S(A,I,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Sn&&M(X,I),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(k,v,w)};function M(T,A){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,_,null)}function x(T,A,I,k){let v=null;const w=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=v.uuid,H=A.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let Z=$[H];Z===void 0&&(Z=v.clone(),$[H]=Z,A.addEventListener("dispose",R)),v=Z}if(v.visible=A.visible,v.wireframe=A.wireframe,k===Sn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=i.properties.get(v);B.light=I}return v}function S(T,A,I,k,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Sn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const H=t.update(T),$=T.material;if(Array.isArray($)){const Z=H.groups;for(let V=0,J=Z.length;V<J;V++){const X=Z[V],pt=$[X.materialIndex];if(pt&&pt.visible){const mt=x(T,pt,k,v);T.onBeforeShadow(i,T,A,I,H,mt,X),i.renderBufferDirect(I,null,H,mt,T,X),T.onAfterShadow(i,T,A,I,H,mt,X)}}}else if($.visible){const Z=x(T,$,k,v);T.onBeforeShadow(i,T,A,I,H,Z,null),i.renderBufferDirect(I,null,H,Z,T,null),T.onAfterShadow(i,T,A,I,H,Z,null)}}const B=T.children;for(let H=0,$=B.length;H<$;H++)S(B[H],A,I,k,v)}function R(T){T.target.removeEventListener("dispose",R);for(const I in c){const k=c[I],v=T.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}const wg={[Kr]:jr,[Zr]:ta,[Jr]:ea,[wi]:Qr,[jr]:Kr,[ta]:Zr,[ea]:Jr,[Qr]:wi};function Eg(i){function t(){let D=!1;const ut=new _e;let W=null;const j=new _e(0,0,0,0);return{setMask:function(ct){W!==ct&&!D&&(i.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){D=ct},setClear:function(ct,dt,Jt,Ee,Ke){Ke===!0&&(ct*=Ee,dt*=Ee,Jt*=Ee),ut.set(ct,dt,Jt,Ee),j.equals(ut)===!1&&(i.clearColor(ct,dt,Jt,Ee),j.copy(ut))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function e(){let D=!1,ut=!1,W=null,j=null,ct=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?yt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!D&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=wg[dt]),j!==dt){switch(dt){case Kr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){D=dt},setClear:function(dt){ct!==dt&&(i.clearDepth(dt),ct=dt)},reset:function(){D=!1,W=null,j=null,ct=null}}}function n(){let D=!1,ut=null,W=null,j=null,ct=null,dt=null,Jt=null,Ee=null,Ke=null;return{setTest:function(se){D||(se?yt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(se){ut!==se&&!D&&(i.stencilMask(se),ut=se)},setFunc:function(se,je,Ln){(W!==se||j!==je||ct!==Ln)&&(i.stencilFunc(se,je,Ln),W=se,j=je,ct=Ln)},setOp:function(se,je,Ln){(dt!==se||Jt!==je||Ee!==Ln)&&(i.stencilOp(se,je,Ln),dt=se,Jt=je,Ee=Ln)},setLocked:function(se){D=se},setClear:function(se){Ke!==se&&(i.clearStencil(se),Ke=se)},reset:function(){D=!1,ut=null,W=null,j=null,ct=null,dt=null,Jt=null,Ee=null,Ke=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,M=null,x=null,S=null,R=null,T=new Ct(0,0,0),A=0,I=!1,k=null,v=null,w=null,B=null,H=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=V>=2);let X=null,pt={};const mt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),ie=new _e().fromArray(mt),le=new _e().fromArray(wt);function q(D,ut,W,j){const ct=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<W;Jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ut+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return dt}const nt={};nt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),r.setFunc(wi),$t(!1),te(Qo),yt(i.CULL_FACE),L(Vn);function yt(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function gt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function kt(D,ut){return h[D]!==ut?(i.bindFramebuffer(D,ut),h[D]=ut,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function It(D,ut){let W=d,j=!1;if(D){W=u.get(ut),W===void 0&&(W=[],u.set(ut,W));const ct=D.textures;if(W.length!==ct.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Jt=ct.length;dt<Jt;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=ct.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function jt(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const fe={[ni]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};fe[Oh]=i.MIN,fe[zh]=i.MAX;const Zt={[kh]:i.ZERO,[Bh]:i.ONE,[Gh]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[Kh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ut,W,j,ct,dt,Jt,Ee,Ke,se){if(D===Vn){m===!0&&(gt(i.BLEND),m=!1);return}if(m===!1&&(yt(i.BLEND),m=!0),D!==Uh){if(D!==_||se!==I){if((p!==ni||x!==ni)&&(i.blendEquation(i.FUNC_ADD),p=ni,x=ni),se)switch(D){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,M=null,S=null,R=null,T.set(0,0,0),A=0,_=D,I=se}return}ct=ct||ut,dt=dt||W,Jt=Jt||j,(ut!==p||ct!==x)&&(i.blendEquationSeparate(fe[ut],fe[ct]),p=ut,x=ct),(W!==g||j!==M||dt!==S||Jt!==R)&&(i.blendFuncSeparate(Zt[W],Zt[j],Zt[dt],Zt[Jt]),g=W,M=j,S=dt,R=Jt),(Ee.equals(T)===!1||Ke!==A)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Ke),T.copy(Ee),A=Ke),_=D,I=!1}function Ze(D,ut){D.side===$e?gt(i.CULL_FACE):yt(i.CULL_FACE);let W=D.side===Be;ut&&(W=!W),$t(W),D.blending===Mi&&D.transparent===!1?L(Vn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(D){k!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),k=D)}function te(D){D!==Ih?(yt(i.CULL_FACE),D!==v&&(D===Qo?i.cullFace(i.BACK):D===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),v=D}function Ut(D){D!==w&&(Z&&i.lineWidth(D),w=D)}function ge(D,ut,W){D?(yt(i.POLYGON_OFFSET_FILL),(B!==ut||H!==W)&&(i.polygonOffset(ut,W),B=ut,H=W)):gt(i.POLYGON_OFFSET_FILL)}function Ot(D){D?yt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+$-1),X!==D&&(i.activeTexture(D),X=D)}function y(D,ut,W){W===void 0&&(X===null?W=i.TEXTURE0+$-1:W=X);let j=pt[W];j===void 0&&(j={type:void 0,texture:void 0},pt[W]=j),(j.type!==D||j.texture!==ut)&&(X!==W&&(i.activeTexture(W),X=W),i.bindTexture(D,ut||nt[D]),j.type=D,j.texture=ut)}function O(){const D=pt[X];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){ie.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function xt(D){le.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function qt(D,ut){let W=l.get(ut);W===void 0&&(W=new WeakMap,l.set(ut,W));let j=W.get(D);j===void 0&&(j=i.getUniformBlockIndex(ut,D.name),W.set(D,j))}function Bt(D,ut){const j=l.get(ut).get(D);o.get(ut)!==j&&(i.uniformBlockBinding(ut,j,D.__bindingPointIndex),o.set(ut,j))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,pt={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,M=null,x=null,S=null,R=null,T=new Ct(0,0,0),A=0,I=!1,k=null,v=null,w=null,B=null,H=null,ie.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:yt,disable:gt,bindFramebuffer:kt,drawBuffers:It,useProgram:jt,setBlending:L,setMaterial:Ze,setFlipSided:$t,setCullFace:te,setLineWidth:Ut,setPolygonOffset:ge,setScissorTest:Ot,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Nt,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:ee,texStorage3D:it,texSubImage2D:Y,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:vt,scissor:Ft,viewport:xt,reset:pe}}function eh(i,t,e,n){const s=Tg(n);switch(e){case wl:return i*t;case Tl:return i*t;case Al:return i*t*2;case Xa:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case Cl:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case El:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Ya:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(t,8)/4;case ra:case oa:return Math.max(i,8)*Math.max(t,8)/2;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Us:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rl:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tg(i){switch(i){case Cn:case yl:return{byteLength:1,components:1};case as:case Sl:case hs:return{byteLength:2,components:1};case Va:case Wa:return{byteLength:2,components:4};case ri:case Ha:case _n:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ag(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return f?new OffscreenCanvas(E,y):Ia("canvas")}function _(E,y,O){let K=1;const tt=Ot(E);if((tt.width>O||tt.height>O)&&(K=O/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*tt.width),Et=Math.floor(K*tt.height);u===void 0&&(u=m(Y,Et));const lt=y?m(Y,Et):u;return lt.width=Y,lt.height=Et,lt.getContext("2d").drawImage(E,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+Et+")."),lt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==ke&&E.minFilter!==hn}function g(E){i.generateMipmap(E)}function M(E,y,O,K,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const Et=tt?Hs:re.getTransfer(K);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Et===me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(E,y){let O;return E?y===null||y===ri||y===Ai?O=i.DEPTH24_STENCIL8:y===_n?O=i.DEPTH32F_STENCIL8:y===as&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ri||y===Ai?O=i.DEPTH_COMPONENT24:y===_n?O=i.DEPTH_COMPONENT32F:y===as&&(O=i.DEPTH_COMPONENT16),O}function S(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&h.delete(y)}function T(E){const y=E.target;y.removeEventListener("dispose",T),k(y)}function A(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,K=d.get(O);if(K){const tt=K[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(E),Object.keys(K).length===0&&d.delete(O)}n.remove(E)}function I(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const O=E.source,K=d.get(O);delete K[y.__cacheKey],a.memory.textures--}function k(E){const y=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let tt=0;tt<y.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let K=0,tt=O.length;K<tt;K++){const Y=n.get(O[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(E)}let v=0;function w(){v=0}function B(){const E=v;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),v+=1,E}function H(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){const O=n.get(E);if(E.isVideoTexture&&Ut(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,E,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function Z(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function V(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function J(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const X={[Gs]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},pt={[ke]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},mt={[uu]:i.NEVER,[vu]:i.ALWAYS,[du]:i.LESS,[Pl]:i.LEQUAL,[fu]:i.EQUAL,[gu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function wt(E,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===hn||y.magFilter===Gr||y.magFilter===Ts||y.magFilter===si||y.minFilter===hn||y.minFilter===Gr||y.minFilter===Ts||y.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,X[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ke||y.minFilter!==Ts&&y.minFilter!==si||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ie(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));const Y=H(y);if(Y!==E.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[Y].usedTimes++;const Et=tt[E.__cacheKey];Et!==void 0&&(tt[E.__cacheKey].usedTimes--,Et.usedTimes===0&&I(y)),E.__cacheKey=Y,E.__webglTexture=tt[Y].texture}return O}function le(E,y,O){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const tt=ie(E,y),Y=y.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+O);const Et=n.get(Y);if(Y.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const lt=re.getPrimaries(re.workingColorSpace),vt=y.colorSpace===Bn?null:re.getPrimaries(y.colorSpace),ee=y.colorSpace===Bn||lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=_(y.image,!1,s.maxTextureSize);it=ge(y,it);const _t=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type);let Ft=M(y.internalFormat,_t,Nt,y.colorSpace,y.isVideoTexture);wt(K,y);let xt;const qt=y.mipmaps,Bt=y.isVideoTexture!==!0,pe=Et.__version===void 0||tt===!0,D=Y.dataReady,ut=S(y,it);if(y.isDepthTexture)Ft=x(y.format===Ci,y.type),pe&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Ft,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ft,it.width,it.height,0,_t,Nt,null));else if(y.isDataTexture)if(qt.length>0){Bt&&pe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,qt[0].width,qt[0].height);for(let W=0,j=qt.length;W<j;W++)xt=qt[W],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,_t,Nt,xt.data);y.generateMipmaps=!1}else Bt?(pe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Nt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,it.width,it.height,0,_t,Nt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ft,qt[0].width,qt[0].height,it.depth);for(let W=0,j=qt.length;W<j;W++)if(xt=qt[W],y.format!==sn)if(_t!==null)if(Bt){if(D)if(y.layerUpdates.size>0){const ct=eh(xt.width,xt.height,y.format,y.type);for(const dt of y.layerUpdates){const Jt=xt.data.subarray(dt*ct/xt.data.BYTES_PER_ELEMENT,(dt+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,xt.width,xt.height,1,_t,Jt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,it.depth,_t,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ft,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,it.depth,_t,Nt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ft,xt.width,xt.height,it.depth,0,_t,Nt,xt.data)}else{Bt&&pe&&e.texStorage2D(i.TEXTURE_2D,ut,Ft,qt[0].width,qt[0].height);for(let W=0,j=qt.length;W<j;W++)xt=qt[W],y.format!==sn?_t!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,_t,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ft,xt.width,xt.height,0,_t,Nt,xt.data)}else if(y.isDataArrayTexture)if(Bt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ft,it.width,it.height,it.depth),D)if(y.layerUpdates.size>0){const W=eh(it.width,it.height,y.format,y.type);for(const j of y.layerUpdates){const ct=it.data.subarray(j*W/it.data.BYTES_PER_ELEMENT,(j+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,_t,Nt,ct)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Nt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,it.width,it.height,it.depth,0,_t,Nt,it.data);else if(y.isData3DTexture)Bt?(pe&&e.texStorage3D(i.TEXTURE_3D,ut,Ft,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Nt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,it.width,it.height,it.depth,0,_t,Nt,it.data);else if(y.isFramebufferTexture){if(pe)if(Bt)e.texStorage2D(i.TEXTURE_2D,ut,Ft,it.width,it.height);else{let W=it.width,j=it.height;for(let ct=0;ct<ut;ct++)e.texImage2D(i.TEXTURE_2D,ct,Ft,W,j,0,_t,Nt,null),W>>=1,j>>=1}}else if(qt.length>0){if(Bt&&pe){const W=Ot(qt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ft,W.width,W.height)}for(let W=0,j=qt.length;W<j;W++)xt=qt[W],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t,Nt,xt):e.texImage2D(i.TEXTURE_2D,W,Ft,_t,Nt,xt);y.generateMipmaps=!1}else if(Bt){if(pe){const W=Ot(it);e.texStorage2D(i.TEXTURE_2D,ut,Ft,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Nt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ft,_t,Nt,it);p(y)&&g(K),Et.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function q(E,y,O){if(y.image.length!==6)return;const K=ie(E,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const Et=re.getPrimaries(re.workingColorSpace),lt=y.colorSpace===Bn?null:re.getPrimaries(y.colorSpace),vt=y.colorSpace===Bn||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ee=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!ee&&!it?_t[j]=_(y.image[j],!0,s.maxCubemapSize):_t[j]=it?y.image[j].image:y.image[j],_t[j]=ge(y,_t[j]);const Nt=_t[0],Ft=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),qt=M(y.internalFormat,Ft,xt,y.colorSpace),Bt=y.isVideoTexture!==!0,pe=Y.__version===void 0||K===!0,D=tt.dataReady;let ut=S(y,Nt);wt(i.TEXTURE_CUBE_MAP,y);let W;if(ee){Bt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,Nt.width,Nt.height);for(let j=0;j<6;j++){W=_t[j].mipmaps;for(let ct=0;ct<W.length;ct++){const dt=W[ct];y.format!==sn?Ft!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,dt.width,dt.height,Ft,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,dt.width,dt.height,Ft,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,qt,dt.width,dt.height,0,Ft,xt,dt.data)}}}else{if(W=y.mipmaps,Bt&&pe){W.length>0&&ut++;const j=Ot(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,qt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Ft,xt,_t[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,_t[j].width,_t[j].height,0,Ft,xt,_t[j].data);for(let ct=0;ct<W.length;ct++){const Jt=W[ct].image[j].image;Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Jt.width,Jt.height,Ft,xt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,qt,Jt.width,Jt.height,0,Ft,xt,Jt.data)}}else{Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,xt,_t[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Ft,xt,_t[j]);for(let ct=0;ct<W.length;ct++){const dt=W[ct];Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Ft,xt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,qt,Ft,xt,dt.image[j])}}}p(y)&&g(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function nt(E,y,O,K,tt,Y){const Et=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),vt=M(O.internalFormat,Et,lt,O.colorSpace);if(!n.get(y).__hasExternalTextures){const it=Math.max(1,y.width>>Y),_t=Math.max(1,y.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,vt,it,_t,y.depth,0,Et,lt,null):e.texImage2D(tt,Y,vt,it,_t,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),te(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(O).__webglTexture,0,$t(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(O).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,tt),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=$t(y);te(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{const K=y.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],Et=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),vt=M(Y.internalFormat,Et,lt,Y.colorSpace),ee=$t(y);O&&te(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,vt,y.width,y.height):te(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,vt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,vt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,tt=$t(y);if(y.depthTexture.format===yi)te(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Ci)te(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function kt(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[K],E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(E,y,O){const K=n.get(E);y!==void 0&&nt(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(E)}function jt(E){const y=E.texture,O=n.get(E),K=n.get(y);E.addEventListener("dispose",T);const tt=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)O.__webglFramebuffer[lt][vt]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,vt=tt.length;lt<vt;lt++){const ee=n.get(tt[lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&te(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const vt=tt[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const ee=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),_t=M(vt.internalFormat,ee,it,vt.colorSpace,E.isXRRenderTarget===!0),Nt=$t(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),wt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)nt(O.__webglFramebuffer[lt][vt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,vt);else nt(O.__webglFramebuffer[lt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,vt=tt.length;lt<vt;lt++){const ee=tt[lt],it=n.get(ee);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),wt(i.TEXTURE_2D,ee),nt(O.__webglFramebuffer,E,ee,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p(ee)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(lt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),wt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)nt(O.__webglFramebuffer[vt],E,y,i.COLOR_ATTACHMENT0,lt,vt);else nt(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,lt,0);p(y)&&g(lt),e.unbindTexture()}E.depthBuffer&&kt(E)}function fe(E){const y=E.textures;for(let O=0,K=y.length;O<K;O++){const tt=y[O];if(p(tt)){const Y=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(tt).__webglTexture;e.bindTexture(Y,Et),g(Y),e.unbindTexture()}}}const Zt=[],L=[];function Ze(E){if(E.samples>0){if(te(E)===!1){const y=E.textures,O=E.width,K=E.height;let tt=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),lt=y.length>1;if(lt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const ee=n.get(y[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,tt,i.NEAREST),l===!0&&(Zt.length=0,L.length=0,Zt.push(i.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Zt.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const ee=n.get(y[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function $t(E){return Math.min(s.maxSamples,E.samples)}function te(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ut(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ge(E,y){const O=E.colorSpace,K=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Xn&&O!==Bn&&(re.getTransfer(O)===me?(K!==sn||tt!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=It,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=te}function Fu(i,t){function e(n,s=Bn){let r;const a=re.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.BYTE;if(n===Sl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===El)return i.RGB;if(n===sn)return i.RGBA;if(n===Tl)return i.LUMINANCE;if(n===Al)return i.LUMINANCE_ALPHA;if(n===yi)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===Xa)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ds)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===aa||n===oa||n===la)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ha)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Ma||n===ya||n===Sa||n===ba||n===wa||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===Ta||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Ca||n===Ra||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ou extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Rg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=new Lg,p=e.getContextAttributes();let g=null,M=null;const x=[],S=[],R=new rt;let T=null;const A=new Xe;A.layers.enable(1),A.viewport=new _e;const I=new Xe;I.layers.enable(2),I.viewport=new _e;const k=[A,I],v=new Ou;v.layers.enable(1),v.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=x[q];return nt===void 0&&(nt=new Wo,x[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=x[q];return nt===void 0&&(nt=new Wo,x[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=x[q];return nt===void 0&&(nt=new Wo,x[q]=nt),nt.getHandSpace()};function H(q){const nt=S.indexOf(q.inputSource);if(nt===-1)return;const yt=x[nt];yt!==void 0&&(yt.update(q.inputSource,q.frame,c||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const nt=S[q];nt!==null&&(S[q]=null,x[q].disconnect(nt))}w=null,B=null,_.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,M=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ai(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,yt=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Ci:yi,yt=p.stencil?Ai:ri);const kt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ai(d.textureWidth,d.textureHeight,{format:sn,type:Cn,depthTexture:new Bl(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let nt=0;nt<q.removed.length;nt++){const yt=q.removed[nt],gt=S.indexOf(yt);gt>=0&&(S[gt]=null,x[gt].disconnect(yt))}for(let nt=0;nt<q.added.length;nt++){const yt=q.added[nt];let gt=S.indexOf(yt);if(gt===-1){for(let It=0;It<x.length;It++)if(It>=S.length){S.push(yt),gt=It;break}else if(S[It]===null){S[It]=yt,gt=It;break}if(gt===-1)break}const kt=x[gt];kt&&kt.connect(yt)}}const V=new C,J=new C;function X(q,nt,yt){V.setFromMatrixPosition(nt.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const gt=V.distanceTo(J),kt=nt.projectionMatrix.elements,It=yt.projectionMatrix.elements,jt=kt[14]/(kt[10]-1),fe=kt[14]/(kt[10]+1),Zt=(kt[9]+1)/kt[5],L=(kt[9]-1)/kt[5],Ze=(kt[8]-1)/kt[0],$t=(It[8]+1)/It[0],te=jt*Ze,Ut=jt*$t,ge=gt/(-Ze+$t),Ot=ge*-Ze;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),kt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const E=jt+ge,y=fe+ge,O=te-Ot,K=Ut+(gt-Ot),tt=Zt*fe/y*E,Y=L*fe/y*E;q.projectionMatrix.makePerspective(O,K,tt,Y,E,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,yt=q.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),v.near=I.near=A.near=nt,v.far=I.far=A.far=yt,(w!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,B=v.far);const gt=q.parent,kt=v.cameras;pt(v,gt);for(let It=0;It<kt.length;It++)pt(kt[It],gt);kt.length===2?X(v,A,I):v.projectionMatrix.copy(A.projectionMatrix),mt(q,v,gt)};function mt(q,nt,yt){yt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let wt=null;function ie(q,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let gt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let It=0;It<yt.length;It++){const jt=yt[It];let fe=null;if(f!==null)fe=f.getViewport(jt);else{const L=u.getViewSubImage(d,jt);fe=L.viewport,It===0&&(t.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let Zt=k[It];Zt===void 0&&(Zt=new Xe,Zt.layers.enable(It),Zt.viewport=new _e,k[It]=Zt),Zt.matrix.fromArray(jt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(jt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(fe.x,fe.y,fe.width,fe.height),It===0&&(v.matrix.copy(Zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(Zt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const It=u.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let yt=0;yt<x.length;yt++){const gt=S[yt],kt=x[yt];gt!==null&&kt!==void 0&&kt.update(gt,nt,c||a)}wt&&wt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const le=new Ru;le.setAnimationLoop(ie),this.setAnimationLoop=function(q){wt=q},this.dispose=function(){}}}const pi=new un,Dg=new Xt;function Ug(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Eu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,x,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Be&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Be&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),x=M.envMap,S=M.envMapRotation;x&&(p.envMap.value=x,pi.copy(S),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),p.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(pi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Be&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=s[M.id];S===void 0&&(m(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(M,R);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const S=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],S=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let k=0,v=I.length;k<v;k++){const w=I[k];if(f(w,T,k,R)===!0){const B=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<H.length;Z++){const V=H[Z],J=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+$,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,S,R){const T=M.value,A=x+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(M){const x=M.uniforms;let S=0;const R=16;for(let A=0,I=x.length;A<I;A++){const k=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,w=k.length;v<w;v++){const B=k[v],H=Array.isArray(B.value)?B.value:[B.value];for(let $=0,Z=H.length;$<Z;$++){const V=H[$],J=_(V),X=S%R,pt=X%J.boundary,mt=X+pt;S+=pt,mt!==0&&R-mt<J.storage&&(S+=R-mt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}const T=S%R;return T>0&&(S+=R-T),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}class to{constructor(t={}){const{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let S=!1,R=0,T=0,A=null,I=-1,k=null;const v=new _e,w=new _e;let B=null;const H=new Ct(0);let $=0,Z=e.width,V=e.height,J=1,X=null,pt=null;const mt=new _e(0,0,Z,V),wt=new _e(0,0,Z,V);let ie=!1;const le=new Ja;let q=!1,nt=!1;const yt=new Xt,gt=new Xt,kt=new C,It=new _e,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Zt(){return A===null?J:1}let L=n;function Ze(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const U="webgl2";if(L=Ze(U,b),L===null)throw Ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $t,te,Ut,ge,Ot,E,y,O,K,tt,Y,Et,lt,vt,ee,it,_t,Nt,Ft,xt,qt,Bt,pe,D;function ut(){$t=new Xm(L),$t.init(),Bt=new Fu(L,$t),te=new km(L,$t,t,Bt),Ut=new Eg(L),te.reverseDepthBuffer&&Ut.buffers.depth.setReversed(!0),ge=new Ym(L),Ot=new dg,E=new Ag(L,$t,Ut,Ot,te,Bt,ge),y=new Gm(x),O=new Wm(x),K=new tf(L),pe=new Om(L,K),tt=new $m(L,K,ge,pe),Y=new jm(L,tt,K,ge),Ft=new Km(L,te,E),it=new Bm(Ot),Et=new ug(x,y,O,$t,te,pe,it),lt=new Ug(x,Ot),vt=new pg,ee=new Mg($t),Nt=new Fm(x,y,O,Ut,Y,d,l),_t=new bg(x,Y,te),D=new Ng(L,ge,te,Ut),xt=new zm(L,$t,ge),qt=new qm(L,$t,ge),ge.programs=Et.programs,x.capabilities=te,x.extensions=$t,x.properties=Ot,x.renderLists=vt,x.shadowMap=_t,x.state=Ut,x.info=ge}ut();const W=new Ig(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=$t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(Z,V,!1))},this.getSize=function(b){return b.set(Z,V)},this.setSize=function(b,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,V=U,e.width=Math.floor(b*J),e.height=Math.floor(U*J),z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Z*J,V*J).floor()},this.setDrawingBufferSize=function(b,U,z){Z=b,V=U,J=z,e.width=Math.floor(b*z),e.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,U,z,G){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,U,z,G),Ut.viewport(v.copy(mt).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,U,z,G){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,U,z,G),Ut.scissor(w.copy(wt).multiplyScalar(J).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){Ut.setScissorTest(ie=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(b=!0,U=!0,z=!0){let G=0;if(b){let N=!1;if(A!==null){const st=A.texture.format;N=st===Ya||st===qa||st===$a}if(N){const st=A.texture.type,ht=st===Cn||st===ri||st===as||st===Ai||st===Va||st===Wa,Mt=Nt.getClearColor(),St=Nt.getClearAlpha(),Pt=Mt.r,Dt=Mt.g,Tt=Mt.b;ht?(f[0]=Pt,f[1]=Dt,f[2]=Tt,f[3]=St,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Pt,m[1]=Dt,m[2]=Tt,m[3]=St,L.clearBufferiv(L.COLOR,0,m))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),vt.dispose(),ee.dispose(),Ot.dispose(),y.dispose(),O.dispose(),Y.dispose(),pe.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",oc),W.removeEventListener("sessionend",lc),li.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ge.autoReset,U=_t.enabled,z=_t.autoUpdate,G=_t.needsUpdate,N=_t.type;ut(),ge.autoReset=b,_t.enabled=U,_t.autoUpdate=z,_t.needsUpdate=G,_t.type=N}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const U=b.target;U.removeEventListener("dispose",Jt),Ee(U)}function Ee(b){Ke(b),Ot.remove(b)}function Ke(b){const U=Ot.get(b).programs;U!==void 0&&(U.forEach(function(z){Et.releaseProgram(z)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,G,N,st){U===null&&(U=jt);const ht=N.isMesh&&N.matrixWorld.determinant()<0,Mt=fd(b,U,z,G,N);Ut.setMaterial(G,ht);let St=z.index,Pt=1;if(G.wireframe===!0){if(St=tt.getWireframeAttribute(z),St===void 0)return;Pt=2}const Dt=z.drawRange,Tt=z.attributes.position;let ce=Dt.start*Pt,ve=(Dt.start+Dt.count)*Pt;st!==null&&(ce=Math.max(ce,st.start*Pt),ve=Math.min(ve,(st.start+st.count)*Pt)),St!==null?(ce=Math.max(ce,0),ve=Math.min(ve,St.count)):Tt!=null&&(ce=Math.max(ce,0),ve=Math.min(ve,Tt.count));const Me=ve-ce;if(Me<0||Me===1/0)return;pe.setup(N,G,Mt,z,St);let Je,ae=xt;if(St!==null&&(Je=K.get(St),ae=qt,ae.setIndex(Je)),N.isMesh)G.wireframe===!0?(Ut.setLineWidth(G.wireframeLinewidth*Zt()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(N.isLine){let At=G.linewidth;At===void 0&&(At=1),Ut.setLineWidth(At*Zt()),N.isLineSegments?ae.setMode(L.LINES):N.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else N.isPoints?ae.setMode(L.POINTS):N.isSprite&&ae.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,Ue=N._multiDrawCounts,oe=N._multiDrawCount,dn=St?K.get(St).bytesPerElement:1,Ni=Ot.get(G).currentProgram.getUniforms();for(let Qe=0;Qe<oe;Qe++)Ni.setValue(L,"_gl_DrawID",Qe),ae.render(At[Qe]/dn,Ue[Qe])}else if(N.isInstancedMesh)ae.renderInstances(ce,Me,N.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ue=Math.min(z.instanceCount,At);ae.renderInstances(ce,Me,Ue)}else ae.render(ce,Me)};function se(b,U,z){b.transparent===!0&&b.side===$e&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,lr(b,U,z),b.side=An,b.needsUpdate=!0,lr(b,U,z),b.side=$e):lr(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),p=ee.get(z),p.init(U),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let ht=0;ht<st.length;ht++){const Mt=st[ht];se(Mt,z,N),G.add(Mt)}else se(st,z,N),G.add(st)}),M.pop(),p=null,G},this.compileAsync=function(b,U,z=null){const G=this.compile(b,U,z);return new Promise(N=>{function st(){if(G.forEach(function(ht){Ot.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){N(b);return}setTimeout(st,10)}$t.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let je=null;function Ln(b){je&&je(b)}function oc(){li.stop()}function lc(){li.start()}const li=new Ru;li.setAnimationLoop(Ln),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){je=b,W.setAnimationLoop(b),b===null?li.stop():li.start()},W.addEventListener("sessionstart",oc),W.addEventListener("sessionend",lc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),p=ee.get(b,M.length),p.init(U),M.push(p),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(gt),nt=this.localClippingEnabled,q=it.init(this.clippingPlanes,nt),_=vt.get(b,g.length),_.init(),g.push(_),W.enabled===!0&&W.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&fo(st,U,-1/0,x.sortObjects)}fo(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,pt),fe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,fe&&Nt.addToRenderList(_,b),this.info.render.frame++,q===!0&&it.beginShadows();const z=p.state.shadowsArray;_t.render(z,b,U),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let ht=0,Mt=st.length;ht<Mt;ht++){const St=st[ht];hc(G,N,b,St)}fe&&Nt.render(b);for(let ht=0,Mt=st.length;ht<Mt;ht++){const St=st[ht];cc(_,b,St,St.viewport)}}else N.length>0&&hc(G,N,b,U),fe&&Nt.render(b),cc(_,b,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),pe.resetDefaultState(),I=-1,k=null,M.pop(),M.length>0?(p=M[M.length-1],q===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function fo(b,U,z,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){G&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const ht=Y.update(b),Mt=b.material;Mt.visible&&_.push(b,ht,Mt,z,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){const ht=Y.update(b),Mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),It.copy(ht.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){const St=ht.groups;for(let Pt=0,Dt=St.length;Pt<Dt;Pt++){const Tt=St[Pt],ce=Mt[Tt.materialIndex];ce&&ce.visible&&_.push(b,ht,ce,z,It.z,Tt)}}else Mt.visible&&_.push(b,ht,Mt,z,It.z,null)}}const st=b.children;for(let ht=0,Mt=st.length;ht<Mt;ht++)fo(st[ht],U,z,G)}function cc(b,U,z,G){const N=b.opaque,st=b.transmissive,ht=b.transparent;p.setupLightsView(z),q===!0&&it.setGlobalState(x.clippingPlanes,z),G&&Ut.viewport(v.copy(G)),N.length>0&&or(N,U,z),st.length>0&&or(st,U,z),ht.length>0&&or(ht,U,z),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function hc(b,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ai(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?hs:Cn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],ht=G.viewport||v;st.setSize(ht.z,ht.w);const Mt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),fe&&Nt.render(z);const St=x.toneMapping;x.toneMapping=Wn;const Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&it.setGlobalState(x.clippingPlanes,G),or(b,z,G),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Tt=0,ce=U.length;Tt<ce;Tt++){const ve=U[Tt],Me=ve.object,Je=ve.geometry,ae=ve.material,At=ve.group;if(ae.side===$e&&Me.layers.test(G.layers)){const Ue=ae.side;ae.side=Be,ae.needsUpdate=!0,uc(Me,z,G,Je,ae,At),ae.side=Ue,ae.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}x.setRenderTarget(Mt),x.setClearColor(H,$),Pt!==void 0&&(G.viewport=Pt),x.toneMapping=St}function or(b,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=b.length;N<st;N++){const ht=b[N],Mt=ht.object,St=ht.geometry,Pt=G===null?ht.material:G,Dt=ht.group;Mt.layers.test(z.layers)&&uc(Mt,U,z,St,Pt,Dt)}}function uc(b,U,z,G,N,st){b.onBeforeRender(x,U,z,G,N,st),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,z,G,b,st),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,x.renderBufferDirect(z,U,G,N,b,st),N.side=An,N.needsUpdate=!0,x.renderBufferDirect(z,U,G,N,b,st),N.side=$e):x.renderBufferDirect(z,U,G,N,b,st),b.onAfterRender(x,U,z,G,N,st)}function lr(b,U,z){U.isScene!==!0&&(U=jt);const G=Ot.get(b),N=p.state.lights,st=p.state.shadowsArray,ht=N.state.version,Mt=Et.getParameters(b,N.state,st,U,z),St=Et.getProgramCacheKey(Mt);let Pt=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Jt),Pt=new Map,G.programs=Pt);let Dt=Pt.get(St);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===ht)return fc(b,Mt),Dt}else Mt.uniforms=Et.getUniforms(b),b.onBeforeCompile(Mt,x),Dt=Et.acquireProgram(Mt,St),Pt.set(St,Dt),G.uniforms=Mt.uniforms;const Tt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=it.uniform),fc(b,Mt),G.needsLights=md(b),G.lightsStateVersion=ht,G.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function dc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Vr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function fc(b,U){const z=Ot.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function fd(b,U,z,G,N){U.isScene!==!0&&(U=jt),E.resetTextureUnits();const st=U.fog,ht=G.isMeshStandardMaterial?U.environment:null,Mt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xn,St=(G.isMeshStandardMaterial?O:y).get(G.envMap||ht),Pt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!z.morphAttributes.position,ce=!!z.morphAttributes.normal,ve=!!z.morphAttributes.color;let Me=Wn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=x.toneMapping);const Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=Je!==void 0?Je.length:0,At=Ot.get(G),Ue=p.state.lights;if(q===!0&&(nt===!0||b!==k)){const rn=b===k&&G.id===I;it.setState(G,b,rn)}let oe=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ue.state.version||At.outputColorSpace!==Mt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==St||G.fog===!0&&At.fog!==st||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Dt||At.morphTargets!==Tt||At.morphNormals!==ce||At.morphColors!==ve||At.toneMapping!==Me||At.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,At.__version=G.version);let dn=At.currentProgram;oe===!0&&(dn=lr(G,U,N));let Ni=!1,Qe=!1,po=!1;const Se=dn.getUniforms(),qn=At.uniforms;if(Ut.useProgram(dn.program)&&(Ni=!0,Qe=!0,po=!0),G.id!==I&&(I=G.id,Qe=!0),Ni||k!==b){te.reverseDepthBuffer?(yt.copy(b.projectionMatrix),Ud(yt),Nd(yt),Se.setValue(L,"projectionMatrix",yt)):Se.setValue(L,"projectionMatrix",b.projectionMatrix),Se.setValue(L,"viewMatrix",b.matrixWorldInverse);const rn=Se.map.cameraPosition;rn!==void 0&&rn.setValue(L,kt.setFromMatrixPosition(b.matrixWorld)),te.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,Qe=!0,po=!0)}if(N.isSkinnedMesh){Se.setOptional(L,N,"bindMatrix"),Se.setOptional(L,N,"bindMatrixInverse");const rn=N.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Se.setValue(L,"boneTexture",rn.boneTexture,E))}N.isBatchedMesh&&(Se.setOptional(L,N,"batchingTexture"),Se.setValue(L,"batchingTexture",N._matricesTexture,E),Se.setOptional(L,N,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",N._indirectTexture,E),Se.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",N._colorsTexture,E));const mo=z.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Ft.update(N,z,dn),(Qe||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,Se.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(qn.envMap.value=St,qn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(qn.envMapIntensity.value=U.environmentIntensity),Qe&&(Se.setValue(L,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&pd(qn,po),st&&G.fog===!0&&lt.refreshFogUniforms(qn,st),lt.refreshMaterialUniforms(qn,G,J,V,p.state.transmissionRenderTarget[b.id]),Vr.upload(L,dc(At),qn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vr.upload(L,dc(At),qn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(L,"center",N.center),Se.setValue(L,"modelViewMatrix",N.modelViewMatrix),Se.setValue(L,"normalMatrix",N.normalMatrix),Se.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const rn=G.uniformsGroups;for(let go=0,gd=rn.length;go<gd;go++){const pc=rn[go];D.update(pc,dn),D.bind(pc,dn)}}return dn}function pd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function md(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,z){Ot.get(b.texture).__webglTexture=U,Ot.get(b.depthTexture).__webglTexture=z;const G=Ot.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=Ot.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){A=b,R=U,T=z;let G=!0,N=null,st=!1,ht=!1;if(b){const St=Ot.get(b);if(St.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(St.__hasExternalTextures)E.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&Ot.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);const Dt=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][z]:N=Dt[U],st=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[z]:N=Dt,v.copy(b.viewport),w.copy(b.scissor),B=b.scissorTest}else v.copy(mt).multiplyScalar(J).floor(),w.copy(wt).multiplyScalar(J).floor(),B=ie;if(Ut.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Ut.drawBuffers(b,N),Ut.viewport(v),Ut.scissor(w),Ut.setScissorTest(B),st){const St=Ot.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,z)}else if(ht){const St=Ot.get(b.texture),Pt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.__webglTexture,z||0,Pt)}I=-1},this.readRenderTargetPixels=function(b,U,z,G,N,st,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){Ut.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const St=b.texture,Pt=St.format,Dt=St.type;if(!te.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N&&L.readPixels(U,z,G,N,Bt.convert(Pt),Bt.convert(Dt),st)}finally{const St=A!==null?Ot.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,G,N,st,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){const St=b.texture,Pt=St.format,Dt=St.type;if(!te.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N){Ut.bindFramebuffer(L.FRAMEBUFFER,Mt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(U,z,G,N,Bt.convert(Pt),Bt.convert(Dt),0);const ce=A!==null?Ot.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(L.FRAMEBUFFER,ce);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dd(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(Tt),L.deleteSync(ve),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(b.image.width*G),st=Math.floor(b.image.height*G),ht=U!==null?U.x:0,Mt=U!==null?U.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ht,Mt,N,st),Ut.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,G=null,N=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let st,ht,Mt,St,Pt,Dt;z!==null?(st=z.max.x-z.min.x,ht=z.max.y-z.min.y,Mt=z.min.x,St=z.min.y):(st=b.image.width,ht=b.image.height,Mt=0,St=0),G!==null?(Pt=G.x,Dt=G.y):(Pt=0,Dt=0);const Tt=Bt.convert(U.format),ce=Bt.convert(U.type);E.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ve=L.getParameter(L.UNPACK_ROW_LENGTH),Me=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=L.getParameter(L.UNPACK_SKIP_PIXELS),ae=L.getParameter(L.UNPACK_SKIP_ROWS),At=L.getParameter(L.UNPACK_SKIP_IMAGES),Ue=b.isCompressedTexture?b.mipmaps[N]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,St),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Pt,Dt,st,ht,Tt,ce,Ue.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Pt,Dt,Ue.width,Ue.height,Tt,Ue.data):L.texSubImage2D(L.TEXTURE_2D,N,Pt,Dt,st,ht,Tt,ce,Ue),L.pixelStorei(L.UNPACK_ROW_LENGTH,ve),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,G=null,N=0){b.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let st,ht,Mt,St,Pt,Dt,Tt,ce,ve;const Me=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(st=z.max.x-z.min.x,ht=z.max.y-z.min.y,Mt=z.max.z-z.min.z,St=z.min.x,Pt=z.min.y,Dt=z.min.z):(st=Me.width,ht=Me.height,Mt=Me.depth,St=0,Pt=0,Dt=0),G!==null?(Tt=G.x,ce=G.y,ve=G.z):(Tt=0,ce=0,ve=0);const Je=Bt.convert(U.format),ae=Bt.convert(U.type);let At;if(U.isData3DTexture)E.setTexture3D(U,0),At=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)E.setTexture2DArray(U,0),At=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ue=L.getParameter(L.UNPACK_ROW_LENGTH),oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ni=L.getParameter(L.UNPACK_SKIP_ROWS),Qe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(At,N,Tt,ce,ve,st,ht,Mt,Je,ae,Me.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(At,N,Tt,ce,ve,st,ht,Mt,Je,Me.data):L.texSubImage3D(At,N,Tt,ce,ve,st,ht,Mt,Je,ae,Me),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe),N===0&&U.generateMipmaps&&L.generateMipmap(At),Ut.unbindTexture()},this.initRenderTarget=function(b){Ot.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Ut.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Ut.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ka?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===nr?"display-p3":"srgb"}}class eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class no extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new C;class qs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ku extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const xs=new C,ji=new C,Zi=new C,Ji=new rt,Ms=new rt,Bu=new Xt,Rr=new C,ys=new C,Pr=new C,nh=new rt,Xo=new rt,ih=new rt;class Fg extends Ae{constructor(t=new ku){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zu(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new qs(n,3,0,!1)),Ki.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Lr(Rr.set(-.5,-.5,0),Zi,a,ji,s,r),Lr(ys.set(.5,-.5,0),Zi,a,ji,s,r),Lr(Pr.set(.5,.5,0),Zi,a,ji,s,r),nh.set(0,0),Xo.set(1,0),ih.set(1,1);let o=t.ray.intersectTriangle(Rr,ys,Pr,!1,xs);if(o===null&&(Lr(ys.set(-.5,.5,0),Zi,a,ji,s,r),Xo.set(0,1),o=t.ray.intersectTriangle(Rr,Pr,ys,!1,xs),o===null))return;const l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:nn.getInterpolation(xs,Rr,ys,Pr,nh,Xo,ih,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(i,t,e,n,s,r){Ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Ji.x-s*Ji.y,Ms.y=s*Ji.x+r*Ji.y):Ms.copy(Ji),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(Bu)}class Gl extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new Xt,sh=new Xt,Ir=[],rh=new $n,Og=new Xt,Ss=new bt,bs=new Di;class xi extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Og)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),rh.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),bs.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),sh.multiplyMatrices(n,Qi),Ss.matrixWorld=sh,Ss.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gl(new Float32Array(s*this.count),s,this.count,Xa,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ua extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ah=new Xt,al=new ja,Dr=new Di,Ur=new C;class ol extends Ae{constructor(t=new we,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;ah.copy(s).invert(),al.copy(t.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Ur.fromBufferAttribute(u,p),oh(Ur,p,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Ur.fromBufferAttribute(u,m),oh(Ur,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function oh(i,t,e,n,s,r,a){const o=al.distanceSqToPoint(i);if(o<e){const l=new C;al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Gu extends Fe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,l=new Xt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class io extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hu extends io{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Nr=new C,$o=new Hl,qo=new Hl,Yo=new Hl;class Vu extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),c=Nr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),$o.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),qo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),Yo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&($o.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Yo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($o.calc(l),qo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function zg(i,t){const e=1-i;return e*e*t}function kg(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function Os(i,t,e,n){return zg(i,t)+kg(i,e)+Bg(i,n)}function Gg(i,t){const e=1-i;return e*e*e*t}function Hg(i,t){const e=1-i;return 3*e*e*i*t}function Vg(i,t){return 3*(1-i)*i*i*t}function Wg(i,t){return i*i*i*t}function zs(i,t,e,n,s){return Gg(i,t)+Hg(i,e)+Vg(i,n)+Wg(i,s)}class Vl extends Mn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wu extends Mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y),zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wl extends Mn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xl extends Mn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends Mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y),Os(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(lh(o,l.x,c.x,h.x,u.x),lh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var ch=Object.freeze({__proto__:null,ArcCurve:Hu,CatmullRomCurve3:Vu,CubicBezierCurve:Vl,CubicBezierCurve3:Wu,EllipseCurve:io,LineCurve:Wl,LineCurve3:Xu,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:$u,SplineCurve:$l});class qu extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ch[s.type]().fromJSON(s))}return this}}class Na extends qu{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wl(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Xl(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Vl(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new io(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class so extends we{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new rt,f=new C,m=new C,_=new C;let p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let M=0;M<=e;M++){const x=n+M*h*s,S=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*S,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const A=l[3*T+0]*S,I=l[3*T+1],k=l[3*T+0]*R;c.push(A,I,k)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const S=x+M*t.length,R=S,T=S+t.length,A=S+t.length+1,I=S+1;r.push(R,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.points,t.segments,t.phiStart,t.phiLength)}}class ir extends so{constructor(t=1,e=1,n=4,s=8){const r=new Na;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ir(t.radius,t.length,t.capSegments,t.radialSegments)}}class ds extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function M(){const S=new C,R=new C;let T=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const k=[],v=I/r,w=v*(e-t)+t;for(let B=0;B<=s;B++){const H=B/s,$=H*l+o,Z=Math.sin($),V=Math.cos($);R.x=w*Z,R.y=-v*n+p,R.z=w*V,u.push(R.x,R.y,R.z),S.set(Z,A,V).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-v),k.push(m++)}_.push(k)}for(let I=0;I<s;I++)for(let k=0;k<r;k++){const v=_[k][I],w=_[k+1][I],B=_[k+1][I+1],H=_[k][I+1];t>0&&(h.push(v,w,H),T+=3),e>0&&(h.push(w,B,H),T+=3)}c.addGroup(g,T,0),g+=T}function x(S){const R=m,T=new rt,A=new C;let I=0;const k=S===!0?t:e,v=S===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),m++;const w=m;for(let B=0;B<=s;B++){const $=B/s*l+o,Z=Math.cos($),V=Math.sin($);A.x=k*V,A.y=p*v,A.z=k*Z,u.push(A.x,A.y,A.z),d.push(0,v,0),T.x=Z*.5+.5,T.y=V*.5*v+.5,f.push(T.x,T.y),m++}for(let B=0;B<s;B++){const H=R+B,$=w+B;S===!0?h.push($,$+1,H):h.push($+1,$,H),I+=3}c.addGroup(g,I,S===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xn extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new xn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sr extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new C,S=new C,R=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],S),f(e[T+2],R),l(x,S,R,M)}function l(M,x,S,R){const T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const k=M.clone().lerp(S,I/T),v=x.clone().lerp(S,I/T),w=T-I;for(let B=0;B<=w;B++)B===0&&I===T?A[I][B]=k:A[I][B]=k.clone().lerp(v,B/w)}for(let I=0;I<T;I++)for(let k=0;k<2*(T-I)-1;k++){const v=Math.floor(k/2);k%2===0?(d(A[I][v+1]),d(A[I+1][v]),d(A[I][v])):(d(A[I][v+1]),d(A[I+1][v+1]),d(A[I+1][v]))}}function c(M){const x=new C;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(M),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const M=new C;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const S=p(M)/2/Math.PI+.5,R=g(M)/Math.PI+.5;a.push(S,1-R)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],S=a[M+2],R=a[M+4],T=Math.max(x,S,R),A=Math.min(x,S,R);T>.9&&A<.1&&(x<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const S=M*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function m(){const M=new C,x=new C,S=new C,R=new C,T=new rt,A=new rt,I=new rt;for(let k=0,v=0;k<r.length;k+=9,v+=6){M.set(r[k+0],r[k+1],r[k+2]),x.set(r[k+3],r[k+4],r[k+5]),S.set(r[k+6],r[k+7],r[k+8]),T.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),R.copy(M).add(x).add(S).divideScalar(3);const w=p(R);_(T,v+0,M,w),_(A,v+2,x,w),_(I,v+4,S,w)}}function _(M,x,S,R){R<0&&M.x===1&&(a[x]=M.x-1),S.x===0&&S.z===0&&(a[x]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.vertices,t.indices,t.radius,t.details)}}class ql extends sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ql(t.radius,t.detail)}}class Yl extends Na{constructor(t){super(t),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Na().fromJSON(s))}return this}}const Xg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=jg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ys(r,a,e,o,l,f,0),a}};function Yu(i,t,e,n,s){let r,a;if(s===ov(i,t,e,n)>0)for(r=t;r<e;r+=n)a=hh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=hh(r,i[r],i[r+1],a);return a&&ro(a,a.next)&&(js(a),a=a.next),a}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||xe(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ev(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?qg(i,n,s,r):$g(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Yg(Ri(i),t,e),Ys(i,t,e,n,s,r,2)):a===2&&Kg(i,t,e,n,s,r):Ys(Ri(i),t,e,n,s,r,1);break}}}function $g(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ns(s,o,r,l,a,c,m.x,m.y)&&xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=ll(f,m,t,e,n),M=ll(_,p,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=g&&S&&S.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&ns(o,h,l,u,c,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&ns(o,h,l,u,c,d,S.x,S.y)&&xe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&ns(o,h,l,u,c,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&ns(o,h,l,u,c,d,S.x,S.y)&&xe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Yg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ro(s,r)&&Ku(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),js(n),js(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function Kg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sv(a,o)){let l=ju(a,o);a=Ri(a,a.next),l=Ri(l,l.next),Ys(a,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(iv(c));for(s.sort(Zg),r=0;r<s.length;r++)e=Jg(s[r],e);return e}function Zg(i,t){return i.x-t.x}function Jg(i,t){const e=Qg(i,t);if(!e)return t;const n=ju(e,i);return Ri(n,n.next),Ri(e,e.next)}function Qg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ns(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ks(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&tv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function tv(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function ev(i,t,e,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nv(s)}function nv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function iv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ns(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rv(i,t)&&(Ks(i,t)&&Ks(t,i)&&av(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||ro(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){const s=Or(xe(i,t,e)),r=Or(xe(i,t,n)),a=Or(xe(e,n,i)),o=Or(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||a===0&&Fr(e,i,n)||o===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function rv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function av(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ju(i,t){const e=new cl(i.i,i.x,i.y),n=new cl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hh(i,t,e,n){const s=new cl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ov(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ss{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ss.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uh(t),dh(n,t);let a=t.length;e.forEach(uh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dh(n,e[l]);const o=Xg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rr extends sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rr(t.radius,t.detail)}}class ls extends we{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new C,m=new rt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const g=r+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let g=0;g<n;g++){const M=g+p,x=M,S=M+n+1,R=M+n+2,T=M+1;o.push(x,S,T),o.push(S,R,T)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ao extends we{constructor(t=new Yl([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;ss.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];ss.isClockWise(M)===!0&&(m[p]=M.reverse())}const _=ss.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];f=f.concat(M)}for(let p=0,g=f.length;p<g;p++){const M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,g=_.length;p<g;p++){const M=_[p],x=M[0]+u,S=M[1]+u,R=M[2]+u;n.push(x,S,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new ao(n,t.curveSegments)}}function lv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ne extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const M=[],x=g/n;let S=0;g===0&&a===0?S=.5/e:g===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+S,1-x),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const x=h[g][M+1],S=h[g][M],R=h[g+1][M],T=h[g+1][M+1];(g!==0||a>0)&&f.push(x,S,T),(g!==n-1||l<Math.PI)&&f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zs extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,M=(s+1)*f+m;a.push(_,p,M),a.push(p,g,M)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kl extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oo extends Pn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class jl extends Pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lo extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class co extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ko=new Xt,fh=new C,ph=new C;class cv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hv extends cv{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ho extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zl extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mh(){return performance.now()}const gh=new Xt;class Jl{constructor(t,e,n=0,s=1/0){this.ray=new ja(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(vh),n}}function vh(i,t){return i.distance-t.distance}function hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const uv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:iu,AddEquation:ni,AddOperation:Qh,AdditiveBlending:$r,AgXToneMapping:ru,AlphaFormat:wl,AlwaysCompare:vu,AlwaysDepth:jr,AlwaysStencilFunc:nl,AmbientLight:Zl,ArcCurve:Hu,ArrayCamera:Ou,BackSide:Be,BasicDepthPacking:lu,Box3:$n,BoxGeometry:Ye,BufferAttribute:qe,BufferGeometry:we,ByteType:yl,Camera:Fl,CanvasTexture:Gu,CapsuleGeometry:ir,CatmullRomCurve3:Vu,CineonToneMapping:nu,CircleGeometry:ds,ClampToEdgeWrapping:ii,Clock:Zu,Color:Ct,ColorManagement:re,ConeGeometry:xn,ConstantAlphaFactor:jh,ConstantColorFactor:Yh,CubeCamera:Au,CubeReflectionMapping:Ei,CubeRefractionMapping:Ti,CubeTexture:Ol,CubeUVReflectionMapping:tr,CubicBezierCurve:Vl,CubicBezierCurve3:Wu,CullFaceBack:Qo,CullFaceFront:Dh,CullFaceNone:Ih,Curve:Mn,CurvePath:qu,CustomBlending:Uh,CustomToneMapping:su,CylinderGeometry:Le,Data3DTexture:bu,DataArrayTexture:Dl,DataTexture:Gl,DepthFormat:yi,DepthStencilFormat:Ci,DepthTexture:Bl,DirectionalLight:ho,DisplayP3ColorSpace:Ka,DodecahedronGeometry:ql,DoubleSide:$e,DstAlphaFactor:Vh,DstColorFactor:Xh,EllipseCurve:io,EqualCompare:fu,EqualDepth:Jr,EquirectangularReflectionMapping:na,EquirectangularRefractionMapping:ia,Euler:un,EventDispatcher:Ii,Float32BufferAttribute:Kt,FloatType:_n,Fog:eo,FrontSide:An,Frustum:Ja,GLSL3:il,GreaterCompare:pu,GreaterDepth:ta,GreaterEqualCompare:gu,GreaterEqualDepth:Qr,Group:Wt,HalfFloatType:hs,HemisphereLight:co,IcosahedronGeometry:rr,ImageUtils:yu,InstancedBufferAttribute:Da,InstancedMesh:xi,IntType:Ha,InterleavedBuffer:zu,InterleavedBufferAttribute:qs,KeepStencilOp:mi,LatheGeometry:so,Layers:Za,LessCompare:du,LessDepth:Zr,LessEqualCompare:Pl,LessEqualDepth:wi,Light:lo,LineCurve:Wl,LineCurve3:Xu,LinearDisplayP3ColorSpace:nr,LinearFilter:hn,LinearMipmapLinearFilter:si,LinearMipmapNearestFilter:Gr,LinearSRGBColorSpace:Xn,LinearToneMapping:tu,LinearTransfer:Hs,LuminanceAlphaFormat:Al,LuminanceFormat:Tl,Material:Pn,MathUtils:_u,Matrix3:Vt,Matrix4:Xt,MaxEquation:zh,Mesh:bt,MeshBasicMaterial:Si,MeshDepthMaterial:Uu,MeshDistanceMaterial:Nu,MeshLambertMaterial:jl,MeshStandardMaterial:Kl,MeshToonMaterial:oo,MinEquation:Oh,MirroredRepeatWrapping:sa,MixOperation:Jh,MultiplyBlending:el,MultiplyOperation:Ga,NearestFilter:ke,NearestMipmapLinearFilter:Ts,NearestMipmapNearestFilter:ou,NeutralToneMapping:au,NeverCompare:uu,NeverDepth:Kr,NoBlending:Vn,NoColorSpace:Bn,NoToneMapping:Wn,NormalBlending:Mi,NotEqualCompare:mu,NotEqualDepth:ea,Object3D:Ae,ObjectSpaceNormalMap:hu,OneFactor:Bh,OneMinusConstantAlphaFactor:Zh,OneMinusConstantColorFactor:Kh,OneMinusDstAlphaFactor:Wh,OneMinusDstColorFactor:$h,OneMinusSrcAlphaFactor:Yr,OneMinusSrcColorFactor:Hh,OrthographicCamera:zl,P3Primaries:Ws,PCFShadowMap:_l,PCFSoftShadowMap:xl,PMREMGenerator:sl,Path:Na,PerspectiveCamera:Xe,Plane:kn,PlaneGeometry:En,Points:ol,PointsMaterial:Ua,PolyhedronGeometry:sr,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:$u,Quaternion:oi,RED_GREEN_RGTC2_Format:Ra,RED_RGTC1_Format:Rl,REVISION:Ba,RGBADepthPacking:cu,RGBAFormat:sn,RGBAIntegerFormat:Ya,RGBA_ASTC_10x10_Format:ba,RGBA_ASTC_10x5_Format:Ma,RGBA_ASTC_10x6_Format:ya,RGBA_ASTC_10x8_Format:Sa,RGBA_ASTC_12x10_Format:wa,RGBA_ASTC_12x12_Format:Ea,RGBA_ASTC_4x4_Format:da,RGBA_ASTC_5x4_Format:fa,RGBA_ASTC_5x5_Format:pa,RGBA_ASTC_6x5_Format:ma,RGBA_ASTC_6x6_Format:ga,RGBA_ASTC_8x5_Format:va,RGBA_ASTC_8x6_Format:_a,RGBA_ASTC_8x8_Format:xa,RGBA_BPTC_Format:Us,RGBA_ETC2_EAC_Format:ua,RGBA_PVRTC_2BPPV1_Format:la,RGBA_PVRTC_4BPPV1_Format:oa,RGBA_S3TC_DXT1_Format:Ls,RGBA_S3TC_DXT3_Format:Is,RGBA_S3TC_DXT5_Format:Ds,RGBFormat:El,RGB_BPTC_SIGNED_Format:Ta,RGB_BPTC_UNSIGNED_Format:Aa,RGB_ETC1_Format:ca,RGB_ETC2_Format:ha,RGB_PVRTC_2BPPV1_Format:aa,RGB_PVRTC_4BPPV1_Format:ra,RGB_S3TC_DXT1_Format:Ps,RGFormat:Cl,RGIntegerFormat:qa,Ray:ja,Raycaster:Jl,Rec709Primaries:Vs,RedFormat:Xa,RedIntegerFormat:$a,ReinhardToneMapping:eu,RenderTarget:Su,RepeatWrapping:Gs,ReverseSubtractEquation:Fh,RingGeometry:ls,SIGNED_RED_GREEN_RGTC2_Format:Pa,SIGNED_RED_RGTC1_Format:Ca,SRGBColorSpace:Ve,SRGBTransfer:me,Scene:no,ShaderChunk:Ht,ShaderLib:gn,ShaderMaterial:Rn,Shape:Yl,ShapeGeometry:ao,ShapeUtils:ss,ShortType:Sl,Source:Il,Sphere:Di,SphereGeometry:Ne,SplineCurve:$l,Sprite:Fg,SpriteMaterial:ku,SrcAlphaFactor:qr,SrcAlphaSaturateFactor:qh,SrcColorFactor:Gh,StaticDrawUsage:La,SubtractEquation:Nh,SubtractiveBlending:tl,TangentSpaceNormalMap:er,Texture:Fe,TorusGeometry:Zs,Triangle:nn,UVMapping:Ml,Uint16BufferAttribute:Ul,Uint32BufferAttribute:Nl,UniformsLib:at,UniformsUtils:Tu,UnsignedByteType:Cn,UnsignedInt248Type:Ai,UnsignedInt5999Type:bl,UnsignedIntType:ri,UnsignedShort4444Type:Va,UnsignedShort5551Type:Wa,UnsignedShortType:as,VSMShadowMap:Sn,Vector2:rt,Vector3:C,Vector4:_e,WebGLCoordinateSystem:wn,WebGLCubeRenderTarget:Cu,WebGLRenderTarget:ai,WebGLRenderer:to,WebGLUtils:Fu,WebGPUCoordinateSystem:Xs,ZeroFactor:kh,createCanvasElement:Mu},Symbol.toStringTag,{value:"Module"})),Js=24,Fa=8,bi=1440,_h=1200,ul=[[9.5,4],[13,4],[9.5,7.2],[13,7.2],[9.5,10.4],[13,10.4]],Cs=[0,30,90,190,340,550,830,1200,1700,2400],dl=["Cháu mới về","Phụ ngoại","Nhà nông nhí","Tay cuốc cừ","Chủ vườn nhỏ","Chủ vườn lớn","Nông dân giỏi","Lão nông tri điền","Vua rau quê","Huyền thoại miệt vườn"],Gn=i=>{let t=1;return Cs.forEach((e,n)=>{i>=e&&(t=n+1)}),t};function _i(){return matchMedia("(pointer:coarse)").matches||/iPhone|iPad|Android/i.test(navigator.userAgent)}function Ju(i){const t=Array.from({length:Js},()=>({id:"",qty:0}));return[["hand",1],["hoe",1],["can",1],["seed_raumuong",6],["seed_caixanh",4]].forEach(([e,n],s)=>t[s]={id:e,qty:n}),{version:2,created:Date.now(),savedAt:Date.now(),look:i,player:{x:0,z:31,ry:Math.PI},money:200,inv:t,hotbar:0,plots:ul.map(([e,n],s)=>({id:s,x:e,z:n,tilled:s<2,wet:!1,crop:null,stage:0,progress:0})),built:[],nextId:1,lots:[],time:7*60,lastDay:1,xp:0,quest:null,rain:null,wishDay:-1,flags:{},friend:0,giftDay:-1,seedDay:-1,talks:0,settings:{music:.6,ambient:.7,sfx:.8,ui:.7,muted:!1,quality:_i()?"low":"medium",sens:1,fps:!1}}}function dv(i){if(!i||typeof i!="object")return null;if(i.version===1){for(i.plots=(i.plots||[]).map((t,e)=>({...t,x:ul[e]?.[0]??9.5,z:ul[e]?.[1]??4})),i.built=[],i.nextId=1,i.lots=[],i.lastDay=Math.floor((i.time||0)/bi)+1,i.xp=0,i.quest=null,i.rain=null,i.wishDay=-1;i.inv.length<Js;)i.inv.push({id:"",qty:0});i.version=2}if(i.version!==2)return null;for(i.built??(i.built=[]),i.lots??(i.lots=[]),i.nextId??(i.nextId=1+Math.max(0,...i.built.map(t=>t.id))),i.flags??(i.flags={}),i.xp??(i.xp=0),i.inv??(i.inv=[]);i.inv.length<Js;)i.inv.push({id:"",qty:0});return i.settings||(i.settings=Ju(i.look).settings),i}const zn=i=>Math.floor(i/bi)+1,Hn=i=>i%bi/60,fv=i=>{const t=Math.floor(i%bi);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};class pv{constructor(){this.m=new Map}on(t,e){return this.m.has(t)||this.m.set(t,new Set),this.m.get(t).add(e),()=>this.m.get(t).delete(e)}emit(t,...e){this.m.get(t)?.forEach(n=>{try{n(...e)}catch(s){console.error(s)}})}}const ue=new pv;class mv{constructor(t,e,n){this.canvas=t,this.joyEl=e,this.knob=n,this.keys=new Set,this.pressed=new Set,this.look={x:0,y:0},this.zoom=0,this.joy={x:0,y:0,id:-1,cx:0,cy:0},this.touchRun=!1,this.enabled=!0,this.mouse={x:0,y:0,t:-1e9},this.click=null,this.downAt={x:0,y:0,t:0,id:-1},this.lookId=-1,this.lx=0,this.ly=0,this.dragging=!1,addEventListener("keydown",s=>{if(s.target.closest("input,select,textarea"))return;const r=s.code;this.keys.has(r)||this.pressed.add(r),this.keys.add(r),["Space","Tab"].includes(r)&&s.preventDefault()}),addEventListener("keyup",s=>this.keys.delete(s.code)),addEventListener("blur",()=>this.keys.clear()),t.addEventListener("pointerdown",s=>this.down(s)),addEventListener("pointermove",s=>this.move(s)),addEventListener("pointerup",s=>this.up(s)),addEventListener("pointercancel",s=>this.up(s)),t.addEventListener("wheel",s=>{this.zoom+=Math.sign(s.deltaY),s.preventDefault()},{passive:!1}),t.addEventListener("contextmenu",s=>s.preventDefault())}down(t){if(this.downAt={x:t.clientX,y:t.clientY,t:performance.now(),id:t.pointerId},t.pointerType==="touch"&&t.clientX<innerWidth*.42&&this.joy.id<0){this.joy.id=t.pointerId,this.joy.cx=t.clientX,this.joy.cy=t.clientY,this.joyEl.style.left=t.clientX+"px",this.joyEl.style.top=t.clientY+"px",this.joyEl.classList.add("on");return}this.lookId<0&&(this.lookId=t.pointerId,this.lx=t.clientX,this.ly=t.clientY,this.dragging=!0)}move(t){if(t.pointerType==="mouse"&&t.target===this.canvas&&(this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.t=performance.now()),t.pointerId===this.joy.id){const e=t.clientX-this.joy.cx,n=t.clientY-this.joy.cy,s=54,r=Math.hypot(e,n),a=r>s?s/r:1;this.joy.x=e*a/s,this.joy.y=n*a/s,this.knob.style.transform=`translate(${e*a}px,${n*a}px)`,this.touchRun=r>s*1.25;return}t.pointerId===this.lookId&&this.dragging&&(this.look.x+=t.clientX-this.lx,this.look.y+=t.clientY-this.ly,this.lx=t.clientX,this.ly=t.clientY)}up(t){t.pointerId===this.downAt.id&&t.pointerType==="mouse"&&t.button===0&&Math.hypot(t.clientX-this.downAt.x,t.clientY-this.downAt.y)<6&&performance.now()-this.downAt.t<450&&(this.click={x:t.clientX,y:t.clientY}),this.downAt.id=-1,t.pointerId===this.joy.id&&(this.joy.id=-1,this.joy.x=this.joy.y=0,this.knob.style.transform="",this.joyEl.classList.remove("on"),this.touchRun=!1),t.pointerId===this.lookId&&(this.lookId=-1,this.dragging=!1)}tap(t){this.pressed.add(t)}hit(t){return this.pressed.has(t)}moveVec(){if(!this.enabled)return{x:0,z:0};let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.joy.x,e+=this.joy.y;const n=Math.hypot(t,e);return n>1?{x:t/n,z:e/n}:{x:t,z:e}}running(t){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchRun||t}endFrame(){this.pressed.clear(),this.look.x=this.look.y=0,this.zoom=0,this.click=null}}const Ql={value:0},et={sky:16050826,skyLow:16314804,hill:9091234,hillDark:7315340,cloud:16643804,ground:14461027,lawn:14988396,plaza:15320202,plazaLine:15980964,soilDry:10119748,soilWet:6964784,soilRaw:13210960,gold:15382588,goldDark:13211178,orange:14251068,orangeDark:12278316,tan:14461546,tanLight:15913612,trunk:6175547,stone:6041422,stone2:8013416,cap:15262170,step:13880516,rail:16118766,bench:13195866,benchDark:6961722,lamp:8307683,fountain:9410752,fountain2:11779035,water:9425116,leaf:6989402,leaf2:9224026,wood:10119748,woodDark:7227954,roof:13129020,wall:15983032};let ti=null;function tc(){if(ti)return ti;const i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]);return ti=new Gl(i,3,1,sn),ti.minFilter=ti.magFilter=ke,ti.generateMipmaps=!1,ti.needsUpdate=!0,ti}const xh=new Map;function P(i,t={}){const e=JSON.stringify([i,{...t,map:t.map?.uuid}]);let n=xh.get(e);return n||(n=new oo({color:i,gradientMap:tc(),emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??An,map:t.map??null,fog:t.fog??!0}),t.wind&&gv(n,t.wind),xh.set(e,n),n)}const Mh=(i,t={})=>new oo({color:i,gradientMap:tc(),map:t.map??null,transparent:!!t.transparent,opacity:t.opacity??1,emissive:t.emissive??0});function gv(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime=Ql,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wpos = modelMatrix * vec4(position, 1.0);
      #ifdef USE_INSTANCING
        wpos = modelMatrix * instanceMatrix * vec4(position, 1.0);
      #endif
      float hh = max(position.y, 0.0);
      transformed.x += sin(uTime * 1.7 + wpos.x * 0.35 + wpos.z * 0.21) * ${t.toFixed(3)} * hh;
      transformed.z += cos(uTime * 1.3 + wpos.z * 0.31 + wpos.x * 0.1) * ${(t*.6).toFixed(3)} * hh;`)},i.customProgramCacheKey=()=>"wind"+t}function rs(i=et.water){const t=new oo({color:i,gradientMap:tc(),transparent:!0,opacity:.92,emissive:2775654,emissiveIntensity:.25});return t.onBeforeCompile=e=>{e.uniforms.uTime=Ql,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wq = modelMatrix * vec4(position, 1.0);
      transformed.z += (sin(uTime * 1.4 + wq.x * 0.9) + cos(uTime * 1.1 + wq.z * 0.8)) * 0.035;`)},t.customProgramCacheKey=()=>"water",t}function Ui(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");e(r);const a=new Gu(s);return a.colorSpace=Ve,a.anisotropy=4,n&&(a.wrapS=a.wrapT=Gs,a.repeat.set(n[0],n[1])),a}const cs=i=>"#"+i.toString(16).padStart(6,"0"),jo={};function vv(i){if(jo[i])return jo[i];const t={gold:et.gold,orange:et.orange,tan:et.tan}[i],e={gold:et.goldDark,orange:et.orangeDark,tan:et.tanLight}[i],n=Ui(256,256,s=>{s.fillStyle=cs(t),s.fillRect(0,0,256,256),s.fillStyle=cs(e);let r=7;const a=()=>(r=(r*9301+49297)%233280)/233280;for(let o=0;o<26;o++){const l=a()*256,c=a()*256,h=9+a()*9;if(s.save(),s.translate(l,c),s.rotate(a()*6),i==="tan")for(let u=0;u<4;u++)s.rotate(Math.PI/2),s.beginPath(),s.ellipse(0,-h*.55,h*.32,h*.55,0,0,7),s.fill();else i==="gold"?(s.beginPath(),s.moveTo(0,-h),s.quadraticCurveTo(h*.7,0,0,h),s.quadraticCurveTo(-h*.7,0,0,-h),s.fill()):(s.beginPath(),s.moveTo(-h*.5,-h*.5),s.lineTo(h*.6,0),s.lineTo(-h*.5,h*.5),s.closePath(),s.fill());s.restore()}},[2,1]);return jo[i]=n}const _v=()=>Ui(128,128,i=>{i.fillStyle="#c8553c",i.fillRect(0,0,128,128),i.fillStyle="#b0442e";for(let t=0;t<128;t+=16)i.fillRect(t,0,5,128);i.fillStyle="#9a3a28";for(let t=0;t<128;t+=22)i.fillRect(0,t,128,3)},[6,3]),fl=(i=[8,5])=>Ui(128,128,t=>{t.fillStyle=cs(et.plaza),t.fillRect(0,0,128,128),t.strokeStyle=cs(et.plazaLine),t.lineWidth=4,t.strokeRect(2,2,124,124)},i),pl=(i=[4,1])=>Ui(256,64,t=>{t.fillStyle=cs(et.stone),t.fillRect(0,0,256,64),t.fillStyle=cs(et.stone2);let e=3;const n=()=>(e=(e*9301+49297)%233280)/233280;for(let s=0;s<34;s++)t.beginPath(),t.ellipse(n()*256,8+n()*48,7+n()*9,4+n()*4,n(),0,7),t.fill()},i),ec=(i,t="#f6e2b4",e="#5e3b3b")=>Ui(512,160,n=>{n.fillStyle=t,n.fillRect(0,0,512,160),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(8,8,496,144),n.fillStyle=e,n.font="bold 60px 'Baloo 2', 'Trebuchet MS', sans-serif",n.textAlign="center",n.textBaseline="middle";let s=60;for(;n.measureText(i).width>470&&s>26;)s-=4,n.font=`bold ${s}px 'Baloo 2', 'Trebuchet MS', sans-serif`;n.fillText(i,256,84)}),Q=uv;function F(i,t,e=0,n=0,s=0,r=!0){const a=new Q.Mesh(i,t);return a.position.set(e,n,s),a.castShadow=r,a.receiveShadow=!0,a}const ft=(i,t,e)=>new Q.BoxGeometry(i,t,e),Lt=(i,t,e,n=8)=>new Q.CylinderGeometry(i,t,e,n),De=(i,t=12,e=9)=>new Q.SphereGeometry(i,t,e),nc=(i,t,e=0)=>(i.rotation.x=t,i.rotation.z=e,i),We=(()=>{let i=11;return()=>(i=(i*9301+49297)%233280)/233280})();function uo(i="gold",t=1){const e=new Q.Group,n=P(et.trunk),s=P(16777215,{map:vv(i),wind:.018}),r=i==="orange"?3.2:2.8;return e.add(F(Lt(.13,.24,r,6),n,0,r/2,0)),[[.5,.35],[-.55,-.2],[.15,-.6]].forEach(([o,l],c)=>{const h=F(Lt(.05,.09,1.6,5),n,o*.6,r+.4,l*.6);if(h.rotation.set(l*.9,0,-o*1.1),e.add(h),c<2){const u=F(Lt(.03,.05,.9,4),n,o*1.2,r+1.1,l*1.1);u.rotation.set(-l,0,o*1.4),e.add(u)}}),(i==="orange"?[[0,4.6,0,1.25],[.5,3.7,.3,1.1],[-.6,3.9,-.2,1.05],[.1,3.3,-.5,.9],[.3,5.4,.1,.8]]:i==="gold"?[[0,4.2,0,1.45],[1.05,3.6,.3,1.05],[-1,3.8,-.2,1.1],[.3,5,-.3,1],[-.4,3.2,.7,.9]]:[[0,4,0,1.6],[1.1,3.5,.2,1.15],[-1.1,3.6,-.1,1.15],[.1,4.9,-.2,1.1],[.3,3.2,.9,.95]]).forEach(([o,l,c,h])=>{const u=F(De(h,14,10),s,o,l,c);u.scale.set(1,.92,1),e.add(u)}),e.scale.setScalar(t),e.userData.r=.45*t,e}function Oa(i="tan",t=1){const e=new Q.Group,n=i==="dots"?P(16777215,{map:xv(),wind:.02}):i==="green"?P(et.leaf,{wind:.02}):P(et.tan,{wind:.02});if(i==="dots"){const s=F(De(.7,12,9),n,0,.62,0);s.scale.set(.8,1.1,.8),e.add(s)}else[[0,.45,0,.6],[.55,.35,.1,.45],[-.5,.35,-.1,.48],[.1,.7,-.2,.42]].forEach(([s,r,a,o])=>e.add(F(De(o,10,8),n,s,r,a)));return e.scale.setScalar(t),e}let yh=null;function xv(){return yh||(yh=Ui(128,128,i=>{i.fillStyle="#ecc43c",i.fillRect(0,0,128,128),i.fillStyle="#c8483a";for(let t=0;t<18;t++)i.beginPath(),i.arc(t*37%128,t*53%128,3.5,0,7),i.fill()},[2,1]))}function Qu(){const i=new Q.Group,t=P(14121612,{side:Q.DoubleSide,wind:.06}),e=P(8014410);for(let n=0;n<5;n++){const s=F(new Q.SphereGeometry(.22,8,6),t,0,0,0);s.scale.set(.5,1.6,.12);const r=new Q.Group;r.add(s),s.position.y=.36,r.position.set(0,.6+n*.15,0),r.rotation.set(.5,n*1.3,.3),i.add(r),i.add(F(Lt(.015,.02,.8+n*.15,4),e,0,(.8+n*.15)/2,0))}return i}function Mv(i,t,e=.9){const n=new Q.PlaneGeometry(.7,i,1,6),s=n.attributes.position;for(let a=0;a<s.count;a++){const o=s.getY(a)+i/2,l=o/i;s.setY(a,o),s.setZ(a,-e*l*l*i*.5),s.setX(a,s.getX(a)*(1-l*.85))}n.computeVertexNormals();const r=new Q.Mesh(n,t);return r.castShadow=!0,r}function Sh(i=6,t=.12){const e=new Q.Group,n=P(10122326),s=6;for(let o=0;o<s;o++){const l=F(Lt(.16,.2,i/s+.05,6),n,Math.sin(o/s*1.2)*t*i*.4,i/s*(o+.5),0);l.rotation.z=-t*(o/s),e.add(l)}const r=new Q.Group;r.position.set(Math.sin(1.2)*t*i*.4,i,0),e.add(r);const a=P(9086042,{wind:.05,side:Q.DoubleSide});for(let o=0;o<7;o++){const l=Mv(2.5,a);l.rotation.set(1.05,o/7*Math.PI*2,0,"YXZ"),r.add(l)}return e}function bh(i=6){const t=new Q.Group,e=P(11972698),n=P(10136138,{wind:.06});for(let s=0;s<i;s++){const r=4+We()*2.5,a=(We()-.5)*1.4,o=(We()-.5)*1.4,l=F(Lt(.06,.08,r,5),e,a,r/2,o);l.rotation.z=(We()-.5)*.15,t.add(l);for(let c=0;c<3;c++){const h=F(De(.38+We()*.2,8,6),n,a+(We()-.5)*.6,r*(.6+c*.15),o+(We()-.5)*.6);h.scale.y=.6,t.add(h)}}return t}function td(i=1){const t=F(new Q.DodecahedronGeometry(.5*i,0),P(11049626),0,.25*i,0);return t.scale.y=.6,t.rotation.y=We()*6,t}function yv(){const i=new Q.Group;return i.add(F(Lt(.35,.42,.45,8),P(et.woodDark),0,.22,0)),i.add(F(Lt(.33,.33,.02,8),P(14266490),0,.46,0,!1)),i}function Sv(){const i=new Q.Group,t=P(11903562,{wind:.15});for(let e=0;e<6;e++){const n=F(new Q.ConeGeometry(.1,.5+We()*.3,3),t,(We()-.5)*.8,.28,(We()-.5)*.8);i.add(n)}return i}function ks(i){const t=new Q.Group,e=P(i.wall??et.wall),n=P(i.trim??et.woodDark);t.add(F(ft(i.w+1,.4,i.d+(i.porch?3:1)),P(12946026),0,.2,i.porch?1:0));const s=i.d/2,r=i.w/2,a=1.7,o=2.4,l=1.3,c=1.1,h=1.4;t.add(F(ft(i.w,i.h,.25),e,0,.4+i.h/2,-s)),t.add(F(ft(.25,i.h,i.d),e,-r,.4+i.h/2,0)),t.add(F(ft(.25,i.h,i.d),e,r,.4+i.h/2,0));const u=(R,T,A,I)=>{T-R>.01&&I-A>.01&&t.add(F(ft(T-R,I-A,.25),e,(R+T)/2,.4+(A+I)/2,s))},d=Math.min(3.4,r-1.2);u(-r,-d-h/2,0,i.h),u(d+h/2,r,0,i.h),u(-d+h/2,-a/2,0,i.h),u(a/2,d-h/2,0,i.h),u(-a/2,a/2,o,i.h);const f=P(i.shutter??5937818);if([-d,d].forEach(R=>{u(R-h/2,R+h/2,0,l),u(R-h/2,R+h/2,l+c,i.h),t.add(F(ft(.6,c,.08),f,R-h/2-.32,.4+l+c/2,s+.16)),t.add(F(ft(.6,c,.08),f,R+h/2+.32,.4+l+c/2,s+.16)),t.add(F(ft(h,c,.05),P(4864586),R,.4+l+c/2,s-.05,!1));for(let T=-1;T<=1;T++)t.add(F(ft(.06,c,.06),n,R+T*.4,.4+l+c/2,s+.05))}),t.add(F(ft(a,o,.05),P(3811882),0,.4+o/2,s-.1,!1)),i.door!==!1){const R=P(et.woodDark),T=F(ft(a/2,o,.1),R,-a/2-.05,.4+o/2,s+.45);T.rotation.y=1.2,t.add(T);const A=F(ft(a/2,o,.1),R,a/2+.05,.4+o/2,s+.45);A.rotation.y=-1.2,t.add(A)}const m=i.porch?3.2:.8,_=2.2,p=i.d/2,g=i.roofTex?P(16777215,{map:_v()}):P(i.roofColor??et.roof),M=(R,T,A)=>{const I=Math.abs(T-R),k=Math.hypot(I,_),v=F(ft(i.w+1.4,.18,k),g,0,.4+i.h+_/2,(R+T)/2);return v.rotation.x=A*Math.atan2(_,I),v};t.add(M(0,p+m,1)),t.add(M(0,-p-.8,-1));const x=F(Lt(.16,.16,i.w+1.5,6),P(9058858),0,.4+i.h+_+.05,0);x.rotation.z=Math.PI/2,t.add(x);const S=new Q.Shape([new Q.Vector2(-p,0),new Q.Vector2(p,0),new Q.Vector2(0,_)]);if([-r,r].forEach(R=>{const T=F(new Q.ShapeGeometry(S),P(i.wall??et.wall,{side:Q.DoubleSide}),R,.4+i.h,0);T.rotation.y=Math.PI/2,t.add(T)}),i.porch){const R=P(et.woodDark);[-r+.4,-1.8,1.8,r-.4].forEach(T=>t.add(F(Lt(.12,.14,i.h+.3),R,T,.4+(i.h+.3)/2-.15,p+m-.4)))}return t}function bv(){const i=ks({w:4.4,d:3.6,h:2.4,wall:13210718,roofColor:8030888,door:!1});return i.add(F(ft(1.5,2.2,.12),P(et.woodDark),0,1.5,1.86)),i}function wv(){const i=new Q.Group;i.add(F(ft(3.4,.3,3),P(12946026),0,.15,0));const t=P(14859650);i.add(F(ft(3,2.2,.15),t,0,1.4,-1.3)),i.add(F(ft(.15,2.2,2.6),t,-1.45,1.4,0)),i.add(F(ft(.15,2.2,2.6),t,1.45,1.4,0));const e=F(new Q.ConeGeometry(2.7,1.8,4),P(14067802),0,3.4,0);return e.rotation.y=Math.PI/4,i.add(e),i.add(F(ft(.9,.5,.9),P(10123882),.6,.55,-.6)),i.add(F(Lt(.3,.38,.6,8),P(9063980),-.7,.6,.6)),i}function Ev(){const i=F(De(.55,10,8),P(10115642),0,.6,0);i.scale.y=1.15;const t=new Q.Group;return t.add(i),t.add(F(Lt(.3,.3,.05,10),P(3811882),0,1.22,0,!1)),t}function za(i=2.2){const t=new Q.Group,e=P(et.bench),n=P(et.benchDark);for(let s=0;s<3;s++)t.add(F(ft(i,.07,.17),e,0,.48,-.2+s*.2));for(let s=0;s<3;s++){const r=F(ft(i,.15,.06),e,0,.7+s*.19,-.33-s*.03);r.rotation.x=-.12,t.add(r)}return[-i/2+.2,i/2-.2].forEach(s=>{t.add(F(ft(.08,.48,.08),n,s,.24,.18));const r=F(ft(.08,1.1,.08),n,s,.55,-.3);r.rotation.x=-.12,t.add(r),t.add(F(ft(.08,.06,.6),n,s,.44,-.05))}),t}function Tv(){const i=new Q.Group,t=P(et.wood);return i.add(F(ft(.6,.08,.6),t,0,.48,0)),i.add(F(ft(.6,.6,.08),t,0,.8,-.27)),[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]].forEach(([e,n])=>i.add(F(ft(.07,.48,.07),t,e,.24,n))),i}function Av(){const i=new Q.Group,t=P(et.wood);return i.add(F(Lt(.6,.6,.08,12),t,0,.7,0)),i.add(F(Lt(.08,.12,.7,6),t,0,.35,0)),i}function Wr(i,t=2.4){const e=new Q.Group,n=P(et.woodDark);e.add(F(Lt(.06,.06,1.4,5),n,-t/2+.2,.7,0)),e.add(F(Lt(.06,.06,1.4,5),n,t/2-.2,.7,0));const s=P(16777215,{map:ec(i)});return e.add(F(ft(t,t*.31,.08),[n,n,n,n,s,s],0,1.3,0)),e}function Cv(){const i=new Q.Group,t=P(et.wood);i.add(F(ft(2.8,.1,1.2),t,0,.9,0)),[[-1.3,-.5],[1.3,-.5],[-1.3,.5],[1.3,.5]].forEach(([s,r])=>i.add(F(ft(.1,.9,.1),t,s,.45,r))),[[-1.3,-.55],[1.3,-.55]].forEach(([s,r])=>i.add(F(ft(.1,2.3,.1),t,s,1.15,r)));for(let s=0;s<6;s++){const r=F(ft(.5,.06,1.6),P(s%2?16511968:et.bench),-1.25+s*.5,2.3,.1);r.rotation.x=-.3,i.add(r)}const e=[et.leaf2,et.gold,et.orange,9067062];for(let s=0;s<4;s++)i.add(F(ft(.5,.3,.5),P(13210718),-.95+s*.63,1.1,0)),i.add(F(ft(.42,.06,.42),P(e[s]),-.95+s*.63,1.27,0));const n=Wr("Sạp cô Út",2.2);return n.position.set(0,1.4,-.7),n.scale.setScalar(.7),i.add(n),i}function Rv(i){const t=new Q.Group,e=F(new Q.TorusGeometry(i,.38,6,32),P(et.fountain2),0,.08,0,!1);e.rotation.x=Math.PI/2,t.add(e);const n=P(8040042,{side:Q.DoubleSide}),s=P(15902908),r=P(15913546);for(let a=0;a<14;a++){const o=We()*Math.PI*2,l=Math.sqrt(We())*(i-1),c=F(new Q.CircleGeometry(.45+We()*.35,12,.4,Math.PI*1.8),n,Math.cos(o)*l,.1,Math.sin(o)*l,!1);if(c.rotation.x=-Math.PI/2,c.rotation.z=We()*6,t.add(c),a%3===0){const h=new Q.Group;h.position.set(Math.cos(o)*l+.2,.15,Math.sin(o)*l);for(let u=0;u<6;u++){const d=F(new Q.ConeGeometry(.12,.38,4),s,Math.cos(u)*.1,.18,Math.sin(u)*.1);d.rotation.set(Math.sin(u)*.5,0,-Math.cos(u)*.5),h.add(d)}h.add(F(Lt(.07,.07,.06,6),r,0,.2,0)),t.add(h)}}return t}function ed(i,t=.9){const e=new Q.Group,n=pl([Math.max(1,Math.round(i/3)),1]);return e.add(F(ft(i,t,.6),[P(et.stone),P(et.stone),P(et.cap),P(et.stone),P(16777215,{map:n}),P(16777215,{map:n})],0,t/2,0)),e.add(F(ft(i+.1,.14,.72),P(et.cap),0,t+.07,0)),e}function Rs(i){const t=new Q.Group,e=P(et.rail),n=Math.max(1,Math.round(i/1.4));for(let s=0;s<=n;s++)t.add(F(Lt(.05,.05,.75,5),e,-i/2+i*s/n,.38,0));[.4,.72].forEach(s=>{const r=F(Lt(.045,.045,i,5),e,0,s,0);r.rotation.z=Math.PI/2,t.add(r)});for(let s=0;s<n;s++){const r=F(new Q.TorusGeometry(.22,.025,4,10,Math.PI),e,-i/2+i*(s+.5)/n,.42,0,!1);t.add(r)}return t}function Pv(i=3,t=4){const e=new Q.Group,n=P(et.step);for(let s=0;s<t;s++)e.add(F(ft(i,.22,.45),n,0,.11+s*.22,-s*.45));return[-i/2-.2,i/2+.2].forEach(s=>{const r=F(ft(.4,.22*t+.1,.45*t),P(et.rail),s,(.22*t+.1)/2,-.45*(t-1)/2);e.add(r)}),e}const nd=new Q.MeshBasicMaterial({color:16773560});function ml(){const i=new Q.Group,t=P(et.lamp),e=P(5214128);i.add(F(Lt(.18,.24,.3,8),e,0,.15,0)),i.add(F(Lt(.07,.09,3.4,8),t,0,1.9,0)),i.add(F(Lt(.22,.12,.18,6),e,0,3.65,0)),i.add(F(Lt(.2,.16,.55,6),nd,0,4,0,!1)),i.add(F(new Q.ConeGeometry(.3,.32,6),e,0,4.42,0)),i.add(F(new Q.ConeGeometry(.05,.25,4),e,0,4.7,0));const n=new Q.Sprite(gl);return n.position.y=4,n.scale.setScalar(2.2),n.userData.halo=!0,i.add(n),i}const gl=new Q.SpriteMaterial({map:Ui(64,64,i=>{const t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,240,180,.9)"),t.addColorStop(1,"rgba(255,240,180,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)}),transparent:!0,depthWrite:!1,opacity:0,blending:Q.AdditiveBlending});function id(i=1){const t=new Q.Group,e=P(et.fountain),n=P(et.fountain2),s=P(14278127);t.add(F(Lt(2.6,2.8,.35,28),e,0,.18,0)),t.add(nc(F(new Q.TorusGeometry(2.45,.22,6,28),n,0,.62,0),Math.PI/2)),t.add(F(Lt(2.45,2.55,.5,28),e,0,.4,0));for(let a=0;a<12;a++){const o=a/12*Math.PI*2;t.add(F(De(.1,6,5),s,Math.cos(o)*2.72,.2,Math.sin(o)*2.72,!1))}const r=F(new Q.CircleGeometry(2.3,28),rs(11132138),0,.6,0,!1);return r.rotation.x=-Math.PI/2,t.add(r),t.add(F(Lt(.32,.5,1.3,10),n,0,1.2,0)),t.add(F(Lt(1.25,.55,.35,18),e,0,1.95,0)),t.add(F(Lt(1.18,1.18,.05,18),P(11132138),0,2.12,0,!1)),t.add(F(Lt(.18,.3,.9,10),n,0,2.55,0)),t.add(F(Lt(.7,.3,.25,14),e,0,3.05,0)),t.add(F(De(.22,10,8),n,0,3.4,0)),t.userData.spouts=[new Q.Vector3(0,3.5,0),new Q.Vector3(0,3.1,0),new Q.Vector3(0,2.15,0)],t.userData.r=2.8,t.scale.setScalar(i),t}function Lv(i){const t=new Q.Group,e=P(et.stone),n=P(et.cap);[-2.9,2.9].forEach(a=>{t.add(F(ft(.8,2.2,.8),[e,e,n,e,P(16777215,{map:pl([1,2])}),P(16777215,{map:pl([1,2])})],a,1.1,0)),t.add(F(ft(1,.2,1),n,a,2.3,0)),t.add(F(De(.28,10,8),P(et.lamp),a,2.65,0))});const s=F(ft(6.6,.18,.2),P(et.rail),0,3.2,0);t.add(s),[-2.9,2.9].forEach(a=>t.add(F(Lt(.06,.06,1,5),P(et.rail),a,2.8,0)));const r=new Q.Mesh(new Q.PlaneGeometry(3,.95),new Q.MeshBasicMaterial({map:ec(i,"#f6e2b4","#9a3a2a"),side:Q.DoubleSide}));return r.position.set(0,3.2,.12),t.add(r),t}function vl(i=!1){const t=new Q.Group,e=F(De(.26,10,8),P(i?16512750:13203514),0,.36,0);e.scale.set(.9,.85,1.2),t.add(e);const n=F(new Q.ConeGeometry(.12,.3,5),P(i?15656666:6175547),0,.5,-.3);n.rotation.x=-.6,t.add(n);const s=new Q.Group;s.position.set(0,.6,.24),t.add(s),s.add(F(De(.13,8,6),P(i?16512750:14256714))),s.add(F(ft(.04,.1,.12),P(14172986),0,.13,.02));const r=F(new Q.ConeGeometry(.035,.1,4),P(15904826),0,0,.15);return r.rotation.x=Math.PI/2,s.add(r),[-.08,.08].forEach(a=>t.add(F(Lt(.015,.015,.25,4),P(15904826),a,.12,0))),t.userData.head=s,t}function Iv(){const i=new Q.Group,t=P(et.woodDark);return[[0,-1.2,2.9,.18],[0,1.2,2.9,.18],[-1.4,0,.18,2.4],[1.4,0,.18,2.4]].forEach(([e,n,s,r])=>i.add(F(ft(s,.28,r),t,e,.14,n))),i}function Dv(){const i=new Q.Group,t=P(13210718),e=P(et.woodDark);i.add(F(ft(2.2,1.6,1.8),t,-.9,1,-.6)),i.add(F(ft(2.3,.3,1.9),e,-.9,.15,-.6));const n=F(ft(2.6,.12,2.3),P(et.roof),-.9,2,-.6);n.rotation.x=.18,i.add(n),i.add(F(ft(.5,.6,.05),P(3811882),-.9,.6,.31,!1));const s=F(ft(.4,.05,.9),e,-.9,.25,.7);s.rotation.x=.5,i.add(s);const r=P(et.rail);[[-2,1.2],[2,1.2],[2,-1.5],[-2,-1.5]].forEach(([h,u])=>i.add(F(Lt(.04,.04,.7,4),r,h,.35,u))),[[0,1.2,4,0],[2,-.15,2.7,1]].forEach(([h,u,d,f])=>{const m=F(Lt(.03,.03,d,4),r,h,.55,u);m.rotation.set(f?Math.PI/2:0,0,f?0:Math.PI/2),i.add(m)});const a=F(Lt(.3,.25,.15,10),P(14860906),1.1,.08,-.9);i.add(a);const o=new Q.Group;o.userData.keep=!0,o.position.set(1.1,.16,-.9),i.add(o),i.userData.eggs=o;const l=vl(),c=vl(!0);return l.userData.keep=c.userData.keep=!0,l.position.set(.6,0,.3),c.position.set(1.2,0,-.2),i.add(l,c),i.userData.hens=[l,c],i}const Uv=()=>{const i=F(De(.08,8,6),P(16511712));return i.scale.y=1.3,i};function Nv(){const i=new Q.Group,t=P(12103864),e=P(et.woodDark);i.add(F(Lt(.9,1,.9,14),t,0,.45,0)),i.add(nc(F(new Q.TorusGeometry(.9,.12,5,16),P(et.cap),0,.92,0),Math.PI/2));const n=F(new Q.CircleGeometry(.78,14),rs(6994120),0,.7,0,!1);n.rotation.x=-Math.PI/2,i.add(n),[-.85,.85].forEach(a=>i.add(F(ft(.12,1.9,.12),e,a,1.4,0)));const s=F(Lt(.06,.06,1.8,6),e,0,2.05,0);s.rotation.z=Math.PI/2,i.add(s);const r=F(new Q.ConeGeometry(1.4,.8,4),P(et.roof),0,2.7,0);return r.rotation.y=Math.PI/4,i.add(r),i.add(F(Lt(.18,.15,.25,8),P(et.wood),.3,1.5,0)),i}function Fv(){const i=new Q.Group,t=P(et.woodDark);i.add(F(Lt(.05,.06,2.2,5),t,0,1.1,0));const e=F(Lt(.04,.04,1.6,5),t,0,1.55,0);return e.rotation.z=Math.PI/2,i.add(e),i.add(F(ft(.7,.75,.3),P(5933760),0,1.4,0)),i.add(F(De(.25,10,8),P(15917744),0,2,0)),i.add(F(new Q.ConeGeometry(.55,.35,12),P(14860906),0,2.3,0)),i.add(F(Lt(.55,.55,.03,12),P(14860906),0,2.13,0)),[-.8,.8].forEach(n=>i.add(nc(F(new Q.ConeGeometry(.1,.3,5),P(14860906),n,1.5,0),0,n>0?-Math.PI/2:Math.PI/2))),[-.08,.08].forEach(n=>i.add(F(De(.03,5,4),P(3811882),n,2.03,.22,!1))),i}function Ov(){const i=new Q.Group,t=P(12089674),e=P(11037246),n=4.2,s=3.6,r=2.4;i.add(F(ft(n+.6,.3,s+1.4),P(10128010),0,.15,.4));for(let c=0;c<6;c++){const h=.5+c*.4,u=c%2?t:e;i.add(F(ft(n,.4,.2),u,0,h,-s/2)),i.add(F(ft(.2,.4,s),u,-n/2,h,0)),i.add(F(ft(.2,.4,s),u,n/2,h,0)),i.add(F(ft(1.45,.4,.2),u,-n/2+.72,h,s/2)),i.add(F(ft(1.45,.4,.2),u,n/2-.72,h,s/2)),h>2.1&&i.add(F(ft(1.3,.4,.2),u,0,h,s/2))}i.add(F(ft(1.2,2,.08),P(7227954),0,1.3,s/2+.06)),i.add(F(ft(.7,.6,.06),P(16773560),-1.35,1.6,s/2+.11,!1));const a=1.6,o=P(14251068);[1,-1].forEach(c=>{const h=Math.hypot(s/2+.5,a),u=F(ft(n+.9,.16,h),o,0,.3+r+a/2,c*(s/4+.25));u.rotation.x=c*Math.atan2(a,s/2+.5),i.add(u)});const l=new Q.Shape([new Q.Vector2(-s/2,0),new Q.Vector2(s/2,0),new Q.Vector2(0,a)]);return[-n/2,n/2].forEach(c=>{const h=F(new Q.ShapeGeometry(l),P(12089674,{side:Q.DoubleSide}),c,.3+r,0);h.rotation.y=Math.PI/2,i.add(h)}),i.add(F(ft(.5,1.2,.5),P(10128010),1.3,.3+r+1.2,-.6)),i}function zv(){return ks({w:7,d:5,h:3,wall:16181452,roofTex:!0,porch:!0,trim:7227954,shutter:13195866})}function kv(){const i=new Q.Group,t=P(et.woodDark);i.add(F(Lt(1.9,2,.25,8),P(et.step),0,.12,0));for(let s=0;s<6;s++){const r=s/6*Math.PI*2;i.add(F(Lt(.08,.1,2.4,6),t,Math.cos(r)*1.6,1.4,Math.sin(r)*1.6))}const e=F(new Q.ConeGeometry(2.5,1.5,6),P(14858346),0,3.3,0);i.add(e),i.add(F(De(.15,6,5),P(et.roof),0,4.1,0));const n=za(1.8);return n.position.set(0,.2,-.9),i.add(n),i.add(F(Lt(.45,.45,.06,10),P(et.wood),0,.85,.4)),i.add(F(Lt(.08,.1,.6,6),P(et.wood),0,.55,.4)),i}function Bv(){const i=new Q.Group,t=P(et.wood),e=P(et.woodDark);i.add(F(ft(1.3,.8,.9),t,0,.4,0)),[-.5,0,.5].forEach(s=>i.add(F(ft(.08,.82,.92),e,s,.4,0)));const n=F(ft(1.4,.1,1),e,0,.85,-.05);return n.rotation.x=-.15,i.add(n),i.add(F(ft(.5,.3,.02),P(16777215,{map:ec("Thùng hàng")}),0,.5,.46,!1)),i}function Gv(){const i=new Q.Group,t=F(new Q.CircleGeometry(1.4,20),rs(),0,.06,0,!1);t.rotation.x=-Math.PI/2,i.add(t);for(let n=0;n<12;n++){const s=n/12*Math.PI*2,r=td(.6+n%3*.15);r.position.set(Math.cos(s)*1.55,.1,Math.sin(s)*1.55),i.add(r)}const e=F(new Q.CircleGeometry(.35,10,.3,5.5),P(8040042,{side:Q.DoubleSide}),.4,.08,-.3,!1);return e.rotation.x=-Math.PI/2,i.add(e),i.userData.water=t,i}function Hv(i=15231626){const t=new Q.Group;t.add(F(Lt(.32,.24,.45,10),P(13135946),0,.22,0)),t.add(F(Lt(.34,.34,.06,10),P(11558974),0,.46,0));const e=P(i,{wind:.05});for(let n=0;n<5;n++){const s=n*1.26;t.add(F(De(.11,7,5),e,Math.cos(s)*.16,.72+n%2*.08,Math.sin(s)*.16))}return t.add(F(De(.22,8,6),P(et.leaf,{wind:.04}),0,.56,0)),t}function Vv(){const i=F(new Q.BoxGeometry(2,.05,2),[P(et.plazaLine),P(et.plazaLine),P(16777215,{map:fl([1,1])}),P(et.plazaLine),P(et.plazaLine),P(et.plazaLine)],0,.03,0,!1),t=new Q.Group;return t.add(i),t}function Wv(){return Rs(2)}function Xv(){return ed(2,.8)}function $v(){const i=new Q.Group;return i.add(F(De(.08,8,6),P(15221562),0,.05,0,!1)),i.add(F(De(.07,8,6),P(16512750),0,.12,0,!1)),i}const qv=[{id:"farm",name:"Nông trại"},{id:"decor",name:"Trang trí"},{id:"struct",name:"Công trình"},{id:"house",name:"Nhà ở"}],be={},ye=i=>be[i.id]=i,sd=(i,t)=>{const e=new Wt;return i.position.z=t,e.add(i),e};ye({id:"plot",name:"Luống đất",cat:"farm",price:80,level:1,w:3,d:2.6,col:"none",kind:"plot",desc:"Thêm một luống để trồng rau.",max:30,model:()=>Iv()});ye({id:"shipbox",name:"Thùng hàng",cat:"farm",price:120,level:1,w:1.4,d:1,col:"box",box:[-.7,-.5,.7,.5],door:[0,1.1],kind:"shipbox",desc:"Bán nông sản ngay tại vườn.",model:()=>Bv()});ye({id:"scarecrow",name:"Bù nhìn",cat:"farm",price:90,level:2,w:1,d:1,col:"circle",r:.3,kind:"info",desc:"Luống trong 6 m lớn nhanh hơn 25%.",model:()=>Fv()});ye({id:"coop",name:"Chuồng gà",cat:"farm",price:300,level:2,w:4.4,d:3.2,col:"box",box:[-2.1,-1.6,2.1,1.3],door:[0,2],kind:"coop",desc:"Mỗi sáng có 2 trứng gà để lượm.",max:4,model:()=>Dv()});ye({id:"well",name:"Giếng nước",cat:"farm",price:220,level:3,w:2.2,d:2.2,col:"circle",r:1,kind:"well",desc:"Tưới một lượt mọi luống trong 7 m.",model:()=>Nv()});ye({id:"path",name:"Gạch lát",cat:"decor",price:10,level:1,w:2,d:2,col:"none",kind:null,desc:"Lát lối đi cho đẹp.",model:()=>Vv()});ye({id:"flowerpot",name:"Chậu hoa",cat:"decor",price:15,level:1,w:.8,d:.8,col:"circle",r:.3,kind:null,desc:"Chậu hoa hồng xinh.",model:()=>Hv()});ye({id:"bush",name:"Bụi cây",cat:"decor",price:20,level:1,w:1.6,d:1.2,col:"circle",r:.6,kind:null,desc:"Bụi cây màu nâu thu.",model:()=>Oa("tan")});ye({id:"bushdots",name:"Bụi hoa vàng",cat:"decor",price:25,level:1,w:1.2,d:1.2,col:"circle",r:.5,kind:null,desc:"Bụi vàng điểm hạt đỏ.",model:()=>Oa("dots")});ye({id:"feather",name:"Cây lá hồng",cat:"decor",price:30,level:2,w:1,d:1,col:"circle",r:.25,kind:null,desc:"Lá hồng phơn phớt như lông vũ.",model:()=>Qu()});ye({id:"lamp",name:"Đèn đường",cat:"decor",price:60,level:1,w:.8,d:.8,col:"circle",r:.25,kind:null,desc:"Tự sáng khi trời tối.",model:()=>ml()});ye({id:"bench",name:"Ghế đỏ",cat:"decor",price:50,level:1,w:2.4,d:1,col:"box",box:[-1.15,-.45,1.15,.3],door:[0,.8],kind:"sit",desc:"Ngồi nghỉ ngắm vườn.",model:()=>za(2.2)});ye({id:"tree_gold",name:"Cây lá vàng",cat:"decor",price:70,level:1,w:2,d:2,col:"circle",r:.45,kind:null,desc:"Tán vàng rực mùa thu.",model:()=>uo("gold",.9)});ye({id:"tree_orange",name:"Cây lá cam",cat:"decor",price:70,level:2,w:2,d:2,col:"circle",r:.45,kind:null,desc:"Tán cam cao vút.",model:()=>uo("orange",.9)});ye({id:"tree_tan",name:"Cây lá nâu",cat:"decor",price:70,level:2,w:2.4,d:2.4,col:"circle",r:.45,kind:null,desc:"Tán tròn hoa văn chữ thập.",model:()=>uo("tan",.9)});ye({id:"fountain",name:"Đài phun nước",cat:"decor",price:600,level:4,w:6,d:6,col:"circle",r:2.8,kind:"wish",desc:"Đài phun ba tầng. Ước một điều mỗi ngày!",max:2,model:()=>id(1)});ye({id:"fence",name:"Hàng rào trắng",cat:"struct",price:12,level:1,w:2,d:.4,col:"box",kind:null,desc:"Rào trắng dài 2 m.",model:()=>Wv()});ye({id:"wall",name:"Tường đá",cat:"struct",price:25,level:1,w:2,d:.7,col:"box",kind:null,desc:"Tường đá tím dài 2 m.",model:()=>Xv()});ye({id:"pond",name:"Ao cá nhỏ",cat:"struct",price:260,level:3,w:3.4,d:3.4,col:"circle",r:1.5,kind:"fish",desc:"Thả câu ngay trong vườn.",model:()=>Gv()});ye({id:"gazebo",name:"Chòi nghỉ",cat:"struct",price:350,level:3,w:4.2,d:4.2,col:"posts",kind:"sit",desc:"Chòi lá có ghế và bàn trà.",model:()=>kv()});ye({id:"cabin",name:"Nhà gỗ",cat:"house",price:800,level:3,w:5,d:5.4,col:"box",box:[-2.25,-2.3,2.25,1.45],door:[0,2.2],kind:"sleep",desc:"Căn nhà gỗ ấm cúng, vô ngủ được.",max:3,model:()=>sd(Ov(),-.4)});ye({id:"villa",name:"Nhà ngói",cat:"house",price:1800,level:5,w:8,d:8.6,col:"box",box:[-3.65,-3.65,3.65,1.6],door:[0,2.6],kind:"sleep",desc:"Nhà ngói đỏ có hiên rộng.",max:2,model:()=>sd(zv(),-1)});const Xr=(i,t)=>t%2?{w:i.d,d:i.w}:{w:i.w,d:i.d},Qs=[{id:"east",name:"Vườn Đông",price:400,level:2,rect:[26,-24,46,26],sign:[24.6,0,-Math.PI/2],desc:"Có con rạch nhỏ để câu cá."},{id:"west",name:"Vườn Tây",price:800,level:3,rect:[-46,-24,-26,26],sign:[-24.6,4,Math.PI/2],desc:"Đất rộng, có bụi tre và ruộng nhỏ."},{id:"north",name:"Đồi Bắc",price:1500,level:4,rect:[-46,-46,46,-24],sign:[-12,-22.6,0],desc:"Khu đồi sau nhà, rộng nhất."}],Yv=[-26,-24,26,26];function Kv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=wh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const m=wh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function wh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new qe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function jv(i,t=()=>!1){i.updateMatrixWorld(!0);const e=new Xt().copy(i.matrixWorld).invert(),n=new Map,s=[],r=o=>{if(o!==i&&(t(o)||o.userData.keep)){s.push(o);return}const l=o;if(l.isMesh&&!l.isInstancedMesh&&!Array.isArray(l.material)&&o.visible){const c=l.geometry;if(c.attributes.color||!c.attributes.normal||!c.attributes.uv){s.push(o);return}let h=c.index?c.toNonIndexed():c.clone();for(const f of Object.keys(h.attributes))["position","normal","uv"].includes(f)||h.deleteAttribute(f);h.applyMatrix4(new Xt().multiplyMatrices(e,l.matrixWorld));const u=l.material.uuid,d=n.get(u)||{m:l.material,geos:[],cast:!1,recv:!1};d.geos.push(h),d.cast||(d.cast=l.castShadow),d.recv||(d.recv=l.receiveShadow),n.set(u,d)}else if(o!==i&&(l.isMesh||o.isSprite||o.isPoints)){s.push(o);return}o.children.forEach(r)};r(i);const a=new Wt;return a.name="merged",n.forEach(o=>{const l=o.geos.length===1?o.geos[0]:Kv(o.geos,!1);if(!l)return;const c=new bt(l,o.m);c.castShadow=o.cast,c.receiveShadow=o.recv,a.add(c),o.geos.forEach(h=>h!==l&&h.dispose())}),s.forEach(o=>{const l=new Xt().multiplyMatrices(e,o.matrixWorld);o.parent?.remove(o),l.decompose(o.position,o.quaternion,o.scale),a.add(o)}),a}function Bs(i,t){const e={p:i.position.clone(),q:i.quaternion.clone(),s:i.scale.clone(),parent:i.parent},n=jv(i,t);return i.clear(),n.children.slice().forEach(s=>i.add(s)),i.position.copy(e.p),i.quaternion.copy(e.q),i.scale.copy(e.s),i}const Qt={x0:-48,x1:48,z0:-48,z1:46},On=26;class rd{constructor(t){this.quality=t,this.group=new Wt,this.colliders=[],this.items=[],this.noBuild=[],this.smokeAt=new C(9.2,3.6,-16.4),this.waterMeshes=[],this.roofPerches=[],this.flowerSpots=[],this.occluders=[],this.lamps=[],this.fountains=[],this.lotGroup=new Wt,this.lotColliders=[],this.lotItems=[],this.build();const e=new Set([...this.occluders,...this.fountains]);e.forEach(n=>Bs(n)),Bs(this.group,n=>e.has(n)),this.group.add(this.lotGroup)}add(t,e=0,n=0,s=0,r=0){return t.position.set(e,n,s),t.rotation.y=r,this.group.add(t),t}circ(t,e,n){this.colliders.push({t:"c",x:t,z:e,r:n})}rect(t,e,n,s,r=this.colliders){r.push({t:"b",x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s)})}tree(t,e,n,s=1){this.add(uo(t,s),e,0,n,(e*7+n)%6),this.circ(e,n,.45*s),this.noBuild.push([e-1,n-1,e+1,n+1])}flat(t,e,n,s,r,a=.02,o=0){const l=new bt(new En(t,e),n);return l.rotation.set(-Math.PI/2,0,o),l.position.set(s,a,r),l.receiveShadow=!0,this.group.add(l),l}build(){const t=this.quality,e=new En(280,280,70,70);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=[],r=new Ct,a=new Ct(et.ground),o=new Ct(et.lawn),l=new Ct(13218394);for(let f=0;f<n.count;f++){const m=n.getX(f),_=n.getZ(f),p=Math.sin(m*.13)*Math.cos(_*.11)*.5+Math.sin(m*.04+_*.05)*.5,g=Math.max(Math.abs(m)-52,_-50,-_-52,0);g>0&&n.setY(f,g*.18+Math.max(0,p)*1.2),r.copy(a).lerp(o,Math.max(0,p)),p<-.35&&r.lerp(l,.5),s.push(r.r,r.g,r.b)}e.setAttribute("color",new Kt(s,3)),e.computeVertexNormals();const c=new bt(e,new jl({vertexColors:!0}));c.receiveShadow=!0,this.group.add(c);const h=P(et.plaza);this.flat(3,34,h,0,9),this.flat(2.4,10,h,9,1.5),this.flat(14,2,h,6,-3),this.flat(16,9,P(16777215,{map:fl([8,4])}),0,-4.5,.03),this.occluders.push(this.add(ks({w:12,d:7,h:3.2,roofTex:!0,porch:!0}),0,0,-15.5)),this.rect(-6.6,-19.4,6.6,-11.8),[-5.6,-1.8,1.8,5.6].forEach(f=>this.circ(f,-9.4,.25)),this.items.push({id:"door",kind:"door",x:0,z:-11.4,r:1.6,label:"Vô nhà"}),this.add(za(2.4),-3.6,.4,-10.6),this.add(Tv(),3.4,.4,-10.7),this.add(Av(),4.4,.4,-10.4),this.items.push({id:"bench",kind:"sit",x:-3.6,z:-10.2,r:1.4,data:{x:-3.6,z:-10.55,ry:0,y:.95},label:"Ngồi nghỉ trên ghế"}),this.add(Ev(),7.2,0,-11.2),this.circ(7.2,-11.2,.6),this.items.push({id:"jar",kind:"jar",x:7.2,z:-11.2,r:1.5,label:"Múc nước lu"}),this.occluders.push(this.add(wv(),9.2,0,-16.4)),this.rect(7.4,-17.9,11,-14.9),this.occluders.push(this.add(bv(),17,0,-15)),this.rect(14.4,-17.2,19.6,-12.8),this.roofPerches.push(new C(-2.5,6.05,-15.5),new C(1.5,6.05,-15.5),new C(4,6.05,-15.5)),this.noBuild.push([-7,-20,20,-8.2],[-8,-9,8,0],[-2,0,2,25.5],[7.6,2.2,14.9,12.2]);const u=P(et.woodDark);[[11.25,2.35,5.8,.3],[11.25,12.05,5.8,.3]].forEach(([f,m,_,p])=>this.group.add(F(new Ye(_,.28,p),u,f,.14,m))),this.add(Wr("Vườn rau",2),7.2,0,2.4,.4),this.flowers(),this.tree("gold",-14,4,1.05),this.tree("orange",-19,10),this.tree("tan",-10,-2,.9),this.tree("orange",-21,-6),this.tree("gold",-21,-15,1.1),this.tree("tan",22,-6,.95),this.tree("gold",22,20,.9),[[-23,-21],[23.5,-21]].forEach(([f,m])=>{this.add(bh(t==="low"?4:6),f,0,m),this.circ(f,m,.9),this.noBuild.push([f-1.5,m-1.5,f+1.5,m+1.5])}),[[-6,23,"tan"],[6,23,"dots"],[-16,-10,"tan"],[3.6,22.8,"tan"]].forEach(([f,m,_])=>{this.add(Oa(_),f,0,m),this.circ(f,m,.6),this.noBuild.push([f-1,m-1,f+1,m+1])});const d=new bt(new ls(.01,6,36,6),rs());d.rotation.x=-Math.PI/2,d.position.set(-12,.04,16),this.group.add(d),this.waterMeshes.push(d),this.add(Rv(6),-12,0,16),this.circ(-12,16,6.1),this.noBuild.push([-18.6,9.4,-5.4,22.6]),this.items.push({id:"pond",kind:"pond",x:-12,z:16,r:7.4,label:"Câu cá ở ao sen",data:{x:-12,z:16,r:6}}),[[2.4,6],[-2.4,14],[2.4,21]].forEach(([f,m])=>{const _=this.add(ml(),f,0,m);this.lamps.push(_),this.circ(f,m,.25),this.noBuild.push([f-.6,m-.6,f+.6,m+.6])}),this.occluders.push(this.add(Lv("Nhà Ngoại"),0,0,On)),this.circ(-2.9,On,.55),this.circ(2.9,On,.55),this.wallRun(Qt.x0,On,-3.3,On),this.wallRun(3.3,On,Qt.x1,On),this.wallRun(Qt.x0,Qt.z0,Qt.x1,Qt.z0),this.wallRun(Qt.x0,Qt.z0,Qt.x0,Qt.z1),this.wallRun(Qt.x1,Qt.z0,Qt.x1,Qt.z1),this.wallRun(Qt.x0,Qt.z1,-14,Qt.z1),this.wallRun(-10,Qt.z1,10,Qt.z1),this.wallRun(14,Qt.z1,Qt.x1,Qt.z1),[-12,12].forEach(f=>{this.add(Pv(3.6,4),f,0,Qt.z1-.2,Math.PI),this.rect(f-2,Qt.z1-.4,f+2,Qt.z1+2)}),this.add(Rs(26),31,.95,Qt.z1),this.add(Rs(26),-31,.95,Qt.z1),this.rect(-60,-60,Qt.x0-.3,60),this.rect(Qt.x1+.3,-60,60,60),this.rect(-60,-60,60,Qt.z0-.3),this.rect(-60,Qt.z1+.3,60,60),this.plaza(),this.lotFeatures(),this.outside()}wallRun(t,e,n,s){const r=Math.hypot(n-t,s-e);if(r<.5)return;const a=ed(r,.9);a.position.set((t+n)/2,0,(e+s)/2),a.rotation.y=Math.abs(n-t)>Math.abs(s-e)?0:Math.PI/2,this.group.add(a),this.rect(Math.min(t,n)-.35,Math.min(e,s)-.35,Math.max(t,n)+.35,Math.max(e,s)+.35)}plaza(){const t=P(16777215,{map:fl([10,10])}),e=new bt(new ds(10,40),t);e.rotation.x=-Math.PI/2,e.position.set(0,.025,36),e.receiveShadow=!0,this.group.add(e);const n=new bt(new ls(9.7,10.2,40),P(et.plazaLine));n.rotation.x=-Math.PI/2,n.position.set(0,.03,36),this.group.add(n),this.flat(60,3,P(et.plaza),0,36,.02),this.flat(3,20,P(et.plaza),0,36,.021);const s=id(1);this.add(s,0,0,36),this.fountains.push(s),this.circ(0,36,2.85),this.items.push({id:"fountainP",kind:"wish",x:0,z:36,r:4.6,label:"Ước một điều (1 xu)"}),[[-6.5,31.5,Math.PI/4+Math.PI],[6.5,31.5,-Math.PI/4+Math.PI],[-6.5,40.5,-Math.PI/4],[6.5,40.5,Math.PI/4]].forEach(([r,a,o],l)=>{const c=this.add(za(2.2),r,0,a,o+Math.PI),h=Math.sin(o+Math.PI),u=Math.cos(o+Math.PI);this.colliders.push({t:"c",x:r-h*.1,z:a-u*.1,r:.75}),this.items.push({id:"pbench"+l,kind:"sit",x:r+h*.6,z:a+u*.6,r:1.3,data:{x:r+h*.05,z:a+u*.05,ry:o+Math.PI,y:.57},label:"Ngồi ghế đá công viên"}),c.userData.bench=!0}),[[-4,29.5],[4,29.5],[-10.5,36],[10.5,36],[-4,43],[4,43]].forEach(([r,a])=>{const o=this.add(ml(),r,0,a);this.lamps.push(o),this.circ(r,a,.25)}),[["gold",-16,42.5,1.1],["orange",-22,40],["tan",16,42.5],["orange",22,40,1.05],["tan",-30,42],["gold",30,42.5],["gold",-40,38,1.1],["orange",40,38],["tan",-36,30],["gold",34,30]].forEach(([r,a,o,l])=>this.tree(r,a,o,l||1)),[[-9,44,"tan"],[9,44,"dots"],[-19,44.5,"tan"],[19,44.5,"tan"],[8.5,30,"dots"],[-26,44,"dots"]].forEach(([r,a,o])=>{this.add(Oa(o),r,0,a),this.circ(r,a,.55)}),[[3.6,39.6],[-3.6,32.4]].forEach(([r,a])=>{this.add(Qu(),r,0,a),this.circ(r,a,.25)}),this.occluders.push(this.add(Cv(),-12,0,31.5,0)),this.rect(-13.5,30.8,-10.5,32.2),this.items.push({id:"shop",kind:"shop",x:-12,z:33,r:2.1,label:"Mua bán ở sạp cô Út"}),this.occluders.push(this.add(ks({w:7,d:5,h:2.8,wall:12179686,roofColor:8030888,shutter:13195866}),-38,0,34,Math.PI/2)),this.rect(-41.5,29.5,-34.5,38.5),this.occluders.push(this.add(ks({w:6,d:5,h:2.6,wall:15911096,roofTex:!0}),40,0,32,-Math.PI/2)),this.rect(37,28,43.5,36),this.add(Wr("Quảng trường làng",2.8),6,0,28.2,Math.PI)}lotFeatures(){const t=new bt(new En(3.2,50,3,30),rs(8833238));t.rotation.x=-Math.PI/2,t.position.set(40,.03,1),this.group.add(t),this.waterMeshes.push(t),[-1.7,1.7].forEach(l=>this.flat(.5,50,P(13213808),40+l,1,.035)),this.rect(38.4,-24,41.6,-2),this.rect(38.4,2,41.6,26),this.noBuild.push([37.5,-24,42.5,26]);const e=new Wt;for(let l=0;l<9;l++)e.add(F(new Ye(.42,.1,3),P(l%2?et.wood:et.woodDark),-2+l*.5,.25,0));e.add(Rs(4.4)),e.children[e.children.length-1].position.set(0,.3,1.4);const n=Rs(4.4);n.position.set(0,.3,-1.4),e.add(n),this.add(e,40,0,0),this.items.push({id:"creekN",kind:"pond",x:40,z:6,r:3,label:"Câu cá ở rạch",data:{x:40,z:8,r:1.4,lot:"east"}},{id:"creekS",kind:"pond",x:40,z:-6,r:3,label:"Câu cá ở rạch",data:{x:40,z:-8,r:1.4,lot:"east"}}),this.tree("gold",33,-16),this.tree("tan",44,18,.9),this.tree("orange",31,20),[[-43,-20],[-43,22],[-30,22]].forEach(([l,c])=>{this.add(bh(5),l,0,c),this.circ(l,c,.9),this.noBuild.push([l-1.5,c-1.5,l+1.5,c+1.5])});const s=this.flat(10,7,P(11125338,{wind:.02}),-38,-8,.04);s.userData.k=1,this.noBuild.push([-43,-11.5,-33,-4.5]);const r=new xn(.06,.7,3);r.translate(0,.35,0);const a=new xi(r,P(9418826,{wind:.2}),70),o=new Xt;for(let l=0;l<70;l++)o.makeTranslation(-42.5+l%10*1,0,-11+Math.floor(l/10)*1),a.setMatrixAt(l,o);this.group.add(a),this.tree("orange",-32,-18),this.tree("gold",-40,8),[[-36,-36,"gold"],[-24,-40,"orange"],[-12,-36,"tan"],[12,-38,"gold"],[24,-34,"orange"],[36,-40,"tan"],[0,-42,"gold"]].forEach(([l,c,h])=>this.tree(h,l,c))}outside(){const t=new bt(new En(6,160,4,40),rs(8175820));t.rotation.x=-Math.PI/2,t.position.set(55,.05,0),this.group.add(t),this.waterMeshes.push(t);for(let e=-44;e<=44;e+=11)this.add(Sh(5.5+e*7%3,.12),50.8,0,e,Math.PI);for(let e=-40;e<=40;e+=16)this.add(Sh(6,.1),e,0,-51,0);this.flat(10,90,P(12174682,{wind:.02}),-54,0,.06)}flowers(){const t=this.quality==="low"?60:this.quality==="medium"?110:180,e=new Le(.02,.025,.5,4);e.translate(0,.25,0);const n=new rr(.13,1);n.translate(0,.52,0);const s=new xi(e,P(8034890,{wind:.12}),t),r=new xi(n,P(16777215,{wind:.12}),t),a=[15902908,15910986,15299644,14172986,16511968,13208280].map(p=>new Ct(p)),o=new Xt,l=new oi,c=new C,h=new C,u=[[-7.5,-8.6,3,1],[7.5,-8.6,3,1],[-8.8,-2,1,5],[8.8,-1.5,.8,3],[-3.5,1.2,2.2,.7],[3.5,1.2,2.2,.7]];for(let p=0;p<t;p++){const[g,M,x,S]=u[p%u.length];h.set(g+(Math.random()-.5)*x*2,0,M+(Math.random()-.5)*S*2),c.setScalar(.7+Math.random()*.6),l.setFromAxisAngle(new C(0,1,0),Math.random()*6),o.compose(h,l,c),s.setMatrixAt(p,o),r.setMatrixAt(p,o),r.setColorAt(p,a[p%a.length]),p%8===0&&this.flowerSpots.push(h.clone())}s.castShadow=r.castShadow=this.quality!=="low",this.group.add(s,r);const d=this.quality==="low"?160:this.quality==="medium"?360:640,f=new xn(.08,.4,3);f.translate(0,.2,0);const m=new xi(f,P(12165194,{wind:.18}),d);let _=0;for(let p=0;p<d*3&&_<d;p++){const g=(Math.random()-.5)*92,M=-46+Math.random()*70;Math.abs(g)<2.2&&M>-2||g>-9&&g<9&&M>-20&&M<.5||g>7.5&&g<15&&M>2&&M<12.5||Math.hypot(g+12,M-16)<6.4||g>37&&g<43||(h.set(g,0,M),c.set(1,.6+Math.random()*.9,1),l.setFromAxisAngle(new C(0,1,0),Math.random()*6),o.compose(h,l,c),m.setMatrixAt(_++,o))}m.count=_,this.group.add(m)}applyLots(t){this.lotGroup.clear(),this.lotColliders=[],this.lotItems=[];const e=o=>o==="home"||t.includes(o),n=P(15917744),s=P(et.woodDark),r=(o,l,c,h)=>{const u=Math.hypot(c-o,h-l),d=Math.max(1,Math.round(u/2.5));for(let f=0;f<=d;f++)this.lotGroup.add(F(new Le(.07,.08,1,5),s,o+(c-o)*f/d,.5,l+(h-l)*f/d));[.45,.85].forEach(f=>{const m=F(new Le(.025,.025,u,4),n,(o+c)/2,f,(l+h)/2);m.rotation.z=Math.PI/2,m.rotation.y=-Math.atan2(h-l,c-o),this.lotGroup.add(m)}),this.rect(o-.25,l-.25,c+.25,h+.25,this.lotColliders)};[["home","east",26,-24,26,On],["home","west",-26,-24,-26,On],["home","north",-26,-24,26,-24],["north","east",26,-24,Qt.x1,-24],["north","west",Qt.x0,-24,-26,-24]].forEach(([o,l,c,h,u,d])=>{e(o)&&e(l)||r(c,h,u,d)});for(const o of Qs){if(e(o.id))continue;const[l,c,h,u]=o.rect;let d=l*13+c;const f=()=>(d=(d*9301+49297)%233280)/233280;for(let M=0;M<26;M++){const x=l+2+f()*(h-l-4),S=c+2+f()*(u-c-4);if(o.id==="east"&&x>37&&x<43)continue;const R=f(),T=R<.5?Sv():R<.8?td(1+f()):yv();T.position.set(x,0,S),this.lotGroup.add(T)}const[m,_,p]=o.sign,g=Wr(`${o.name}: ${o.price} xu`,2.8);g.position.set(m,0,_),g.rotation.y=p,this.lotGroup.add(g),this.lotItems.push({id:"lot_"+o.id,kind:"lot",x:o.id==="north"?m:m-Math.sign(m)*.8,z:o.id==="north"?_+1.2:_,r:2.4,data:o.id,label:`Mua ${o.name} (${o.price} xu)`})}Bs(this.lotGroup)}static owned(t,e,n,s=.4){const r=a=>e>a[0]+s&&e<a[2]-s&&n>a[1]+s&&n<a[3]-s;return r(Yv)||Qs.some(a=>t.includes(a.id)&&r(a.rect))}}const ei=[[0,2500698,4864618,.15,.55,.25],[4.8,3027554,5915762,.15,.55,.25],[6,15907210,16309422,.9,.8,.35],[8,15785058,16182696,1.5,1,.45],[16,15785058,16182696,1.5,1,.45],[17.8,15902826,16306842,1,.85,.4],[19.2,5259386,9067130,.25,.6,.3],[24,2500698,4864618,.15,.55,.25]],Zv=new Ct(12171432),Jv=new Ct(14210758);class Qv{constructor(t,e,n,s){this.scene=t,this.smokeAt=e,this.lamps=s,this.sun=new ho(16774364,1.5),this.hemi=new co(16774872,13213808,1),this.amb=new Zl(16777215,.4),this.skyU={top:{value:new Ct(et.sky)},low:{value:new Ct(et.skyLow)}},this.clouds=[],this.smoke=[],this.rainDrops=[],this.raining=0,this.wantRain=!1,this.night=0,this.c1=new Ct,this.c2=new Ct,this.m4=new Xt,t.add(this.sun,this.sun.target,this.hemi,this.amb),this.setShadows(n),t.fog=new eo(et.skyLow,95,280),t.background=new Ct(et.skyLow),this.sky=new bt(new Ne(400,24,12),new Rn({side:Be,depthWrite:!1,fog:!1,uniforms:this.skyU,vertexShader:"varying float vy; void main(){ vy = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 low; varying float vy; void main(){ float t = smoothstep(-0.02, 0.45, vy); gl_FragColor = vec4(mix(low, top, t), 1.0);
#include <colorspace_fragment>
}`})),this.sky.renderOrder=-1,t.add(this.sky),this.hills=new Wt,t.add(this.hills),[[150,et.hill,26,34],[118,et.hillDark,20,22]].forEach(([u,d,f,m])=>{const _=P(d,{fog:!0});for(let p=0;p<f;p++){const g=p/f*Math.PI*2+u*.01,M=18+p*37%11*2.4,x=new bt(new Ne(1,18,8,0,Math.PI*2,0,Math.PI/2),_);x.scale.set(M*1.8,m*(.55+p*53%7/10),M),x.position.set(Math.cos(g)*u,-2,Math.sin(g)*u),x.rotation.y=-g,this.hills.add(x)}});const r=P(et.cloud,{emissive:16774360,emissiveIntensity:.5,fog:!1});for(let u=0;u<10;u++){const d=new Wt,f=3+u%3;for(let _=0;_<f;_++){const p=new bt(new Ne(3+(u+_)%3*1.4,14,10),r);p.position.set(_*4-f*2,_%2*1.2,0),p.scale.set(1,.78,.6),d.add(p)}const m=new bt(new Ye(f*4.6,1.8,3.4),r);m.position.y=-1.6,d.add(m),d.position.set(-150+u*32,48+u%4*7,-110+u%5*50),this.clouds.push(d),t.add(d)}const a=new we,o=[];for(let u=0;u<360;u++){const d=Math.random()*Math.PI*2,f=Math.random()*1.2+.25;o.push(Math.cos(d)*Math.cos(f)*300,Math.sin(f)*300,Math.sin(d)*Math.cos(f)*300)}a.setAttribute("position",new Kt(o,3)),this.stars=new ol(a,new Ua({color:16774872,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1})),t.add(this.stars);const l=new we;this.ffBase=new Float32Array(50*3);for(let u=0;u<50;u++){const d=u<25,f=Math.random()*6.28,m=Math.random()*(d?7.5:14);this.ffBase.set(d?[-12+Math.cos(f)*m,.5+Math.random()*1.5,16+Math.sin(f)*m]:[Math.cos(f)*m,.5+Math.random()*1.6,36+Math.sin(f)*m],u*3)}l.setAttribute("position",new qe(this.ffBase.slice(),3)),this.ff=new ol(l,new Ua({color:16773258,size:.24,transparent:!0,opacity:0,blending:$r,depthWrite:!1})),t.add(this.ff);const c=new jl({color:15789024,transparent:!0,opacity:.6,depthWrite:!1});for(let u=0;u<10;u++){const d=new bt(new Ne(.35,10,8),c.clone());d.userData.t=u/10,this.smoke.push(d),t.add(d)}const h=new Ye(.03,.7,.03);this.rain=new xi(h,new Si({color:14675702,transparent:!0,opacity:.6}),420),this.rain.frustumCulled=!1,this.rain.count=0,t.add(this.rain);for(let u=0;u<420;u++)this.rainDrops.push(new C((Math.random()-.5)*40,Math.random()*18,(Math.random()-.5)*40))}setShadows(t){if(this.sun.castShadow=t>0,this.sun.shadow.intensity=.45,t>0){this.sun.shadow.mapSize.set(t,t);const e=this.sun.shadow.camera;e.left=-30,e.right=30,e.top=30,e.bottom=-30,e.near=1,e.far=140,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,e.updateProjectionMatrix(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null}}sample(t){let e=ei[0],n=ei[ei.length-1];for(let r=0;r<ei.length-1;r++)if(t>=ei[r][0]&&t<=ei[r+1][0]){e=ei[r],n=ei[r+1];break}const s=(t-e[0])/Math.max(.001,n[0]-e[0]);return{a:e,b:n,s:s*s*(3-2*s)}}update(t,e,n,s){const r=Hn(e),{a,b:o,s:l}=this.sample(r);this.raining+=((this.wantRain?1:0)-this.raining)*Math.min(1,t*.6);const c=this.raining,h=this.c1.setHex(a[1]).lerp(this.c2.setHex(o[1]),l).clone(),u=this.c1.setHex(a[2]).lerp(this.c2.setHex(o[2]),l).clone(),d=r>6&&r<18.5?1:.3;h.lerp(Zv,c*.7*d),u.lerp(Jv,c*.7*d),this.skyU.top.value.copy(h),this.skyU.low.value.copy(u),this.scene.background.copy(u),this.scene.fog.color.copy(u),this.scene.fog.near=95-c*55,this.scene.fog.far=280-c*150,this.sun.intensity=(a[3]+(o[3]-a[3])*l)*(1-c*.55),this.hemi.intensity=a[4]+(o[4]-a[4])*l,this.amb.intensity=a[5]+(o[5]-a[5])*l,this.night=r>=19.2||r<5?1:r>18?(r-18)/1.2:r<6?1-(r-5):0,this.hemi.color.setHex(this.night>.5?9079504:16774872),this.hemi.groundColor.setHex(this.night>.5?4864602:13213808);const f=r>5.6&&r<18.6,m=(r-6)/12*Math.PI,_=Math.sin(m),p=f?new C(Math.cos(m)*.8,Math.max(.3,_),.45):new C(-.4,.8,.3);if(this.sun.color.setHex(f?_<.35?16763034:16774364:11056383),this.sun.position.copy(n).addScaledVector(p.normalize(),60),this.sun.target.position.copy(n),this.sky.position.copy(n),this.hills.position.set(n.x*0,0,n.z*0),this.stars.material.opacity=this.night*.9*(1-c),this.ff.material.opacity=this.night*(.7+Math.sin(s*3)*.3)*(1-c),this.night>.05){const S=this.ff.geometry.attributes.position;for(let R=0;R<S.count;R++)S.setXYZ(R,this.ffBase[R*3]+Math.sin(s*.7+R)*.6,this.ffBase[R*3+1]+Math.sin(s*1.3+R*2)*.3,this.ffBase[R*3+2]+Math.cos(s*.6+R)*.6);S.needsUpdate=!0}const g=this.night>.3||c>.6;nd.color.setHex(g?16773560:15262928),gl.opacity+=((g?.85:0)-gl.opacity)*Math.min(1,t*2),this.clouds.forEach((S,R)=>{S.position.x+=t*(.8+R*.06),S.position.x>170&&(S.position.x=-170)});const M=r>10.3&&r<12.5||r>16.8&&r<19.5||r>5.5&&r<7;this.smoke.forEach(S=>{S.userData.t=(S.userData.t+t*.18)%1;const R=S.userData.t;S.position.set(this.smokeAt.x+Math.sin(R*6+s)*.3+R*1.2,this.smokeAt.y+R*4,this.smokeAt.z),S.scale.setScalar(.4+R*1.6),S.material.opacity=M?.55*(1-R):0,S.visible=M});const x=Math.floor(this.rainDrops.length*c);this.rain.count=x;for(let S=0;S<x;S++){const R=this.rainDrops[S];R.y-=t*16,R.y<0&&(R.y=16+Math.random()*4,R.x=(Math.random()-.5)*40,R.z=(Math.random()-.5)*40),this.m4.makeTranslation(n.x+R.x,R.y,n.z+R.z),this.rain.setMatrixAt(S,this.m4)}this.rain.instanceMatrix.needsUpdate=!0}}class t_{constructor(t,e,n,s){this.bf=[],this.birds=[],this.hens=[];const r=[15910986,15902908,16512750,10146016,15299644];for(let a=0;a<s;a++){const o=new Wt,l=P(r[a%r.length],{side:$e}),c=new ds(.13,6),h=new bt(c,l),u=new bt(c,l);h.position.x=-.1,u.position.x=.1,h.rotation.x=u.rotation.x=-Math.PI/2,o.add(h,u,new bt(new ir(.02,.12,2,4),P(3811872)));const d=e[a%Math.max(1,e.length)]?.clone()||new C;o.position.copy(d).add(new C(0,1,0)),t.add(o),this.bf.push({g:o,wl:h,wr:u,home:d,ph:Math.random()*6,tgt:o.position.clone()})}n.forEach(a=>{const o=new Wt,l=new bt(new Ne(.16,8,6),P(6969930));l.scale.set(1,.9,1.3),o.add(l);const c=new bt(new Ne(.1,8,6),P(5917242));c.position.set(0,.13,.14),o.add(c);const h=new bt(new xn(.03,.08,4),P(15904826));h.rotation.x=Math.PI/2,h.position.set(0,.12,.26),o.add(h),o.position.copy(a),t.add(o),this.birds.push({g:o,base:a.clone(),t:Math.random()*5,hop:0})});for(let a=0;a<3;a++){const o=vl(a===1),l=o.userData.head;o.traverse(h=>{h.isMesh&&(h.castShadow=!0)});const c=new C(-4+a*3,0,3+a);o.position.copy(c),t.add(o),this.hens.push({g:o,head:l,pos:c,tgt:c.clone(),wait:1+a,peck:0})}}update(t,e,n,s){this.bf.forEach(r=>{if(r.g.visible=n<.5,!r.g.visible)return;r.ph+=t*18;const a=Math.sin(r.ph)*1.1;r.wl.rotation.y=a,r.wr.rotation.y=-a,r.g.position.distanceTo(r.tgt)<.3&&r.tgt.set(r.home.x+(Math.random()-.5)*5,.6+Math.random()*1.4,r.home.z+(Math.random()-.5)*5);const o=r.tgt.clone().sub(r.g.position);r.g.position.addScaledVector(o.normalize(),t*1.2),r.g.position.y+=Math.sin(e*5+r.ph)*t*.3,r.g.rotation.y=Math.atan2(o.x,o.z)}),this.birds.forEach(r=>{r.t-=t,r.t<0&&(r.t=2+Math.random()*5,r.hop=1,r.g.rotation.y=Math.random()*6),r.hop>0&&(r.hop-=t*3,r.g.position.y=r.base.y+Math.sin(Math.max(0,r.hop)*Math.PI)*.25,r.g.position.x=r.base.x+(1-Math.max(0,r.hop))*.3*Math.sin(r.g.rotation.y))}),this.hens.forEach(r=>{const a=r.tgt.clone().sub(r.pos);a.y=0;const o=r.pos.distanceTo(s);o<1.6&&r.tgt.copy(r.pos).add(r.pos.clone().sub(s).setY(0).normalize().multiplyScalar(2.5)),a.length()>.2?(r.pos.addScaledVector(a.normalize(),t*(o<1.6?2.6:.9)),r.g.rotation.y=Math.atan2(a.x,a.z),r.g.position.y=Math.abs(Math.sin(e*12))*.03,r.head.rotation.x=0):(r.wait-=t,r.peck+=t*9,r.head.rotation.x=Math.max(0,Math.sin(r.peck))*.9,r.wait<0&&(r.wait=2+Math.random()*4,r.tgt.set(-6+Math.random()*12,0,-1+Math.random()*8))),r.pos.x=Math.max(-8,Math.min(8,r.pos.x)),r.pos.z=Math.max(-2.5,Math.min(9,r.pos.z)),r.g.position.x=r.pos.x,r.g.position.z=r.pos.z})}}class e_{constructor(t){this.cam=t,this.yaw=Math.PI,this.pitch=.42,this.dist=7.5,this.pov=!1,this.target=new C,this.sens=1,this.occluders=[],this.ray=new Jl,this.cur=7.5}input(t,e,n){this.yaw-=t*.005*this.sens,this.pitch+=e*.004*this.sens,this.pitch=this.pov?Math.max(-1.2,Math.min(1.2,this.pitch)):Math.max(-.15,Math.min(1.25,this.pitch)),n&&(this.dist=Math.max(3.2,Math.min(13,this.dist+n*.8)))}toggle(){this.pov=!this.pov,this.pitch=this.pov?.05:.42}update(t,e,n){const s=1-Math.pow(5e-4,t);if(this.pov){this.target.set(e.x,e.y+n,e.z),this.cam.position.copy(this.target),this.cam.lookAt(this.target.x-Math.sin(this.yaw)*Math.cos(this.pitch),this.target.y-Math.sin(this.pitch),this.target.z-Math.cos(this.yaw)*Math.cos(this.pitch));return}this.target.lerp(new C(e.x,e.y+1.25,e.z),s);const r=new C(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(this.dist);let a=this.dist;if(this.occluders.length){this.ray.set(this.target,r.clone().normalize()),this.ray.far=this.dist;const l=this.ray.intersectObjects(this.occluders,!0)[0];l&&(a=Math.max(1.4,l.distance-.35))}this.cur+=(a-this.cur)*(a<this.cur?1:Math.min(1,s*.8)),r.setLength(this.cur);const o=this.target.clone().add(r);o.y<.6&&(o.y=.6),this.cam.position.lerp(o,this.cur<this.dist-.2?1:Math.min(1,s*1.6)),this.cam.lookAt(this.target)}basis(){return{fx:-Math.sin(this.yaw),fz:-Math.cos(this.yaw),rx:Math.cos(this.yaw),rz:-Math.sin(this.yaw)}}}const ad=[16241328,15645842,14262126,11893326],od=[2759186,5911840,9067050,14262346,6974074],n_=["Ngắn","Xù","Đuôi ngựa","Hai búi","Tóc dài"],ld=[{name:"Áo cam, quần jean",shirt:15895098,pants:3828400,skirt:!1},{name:"Áo xanh ngọc",shirt:3126688,pants:13217930,skirt:!1},{name:"Áo bà ba hồng",shirt:15899320,pants:2763315,skirt:!1},{name:"Áo sọc vàng",shirt:15910986,pants:5221962,skirt:!1},{name:"Áo trắng, váy đỏ",shirt:16184558,pants:14172986,skirt:!0}],Eh={by:0,bp:0,hp:0,hy:0,alx:0,alz:.12,arx:0,arz:-.12,llx:0,lrx:0,sq:1},ts=(i,t)=>new ir(i,t,3,8),yn=(i,t=12,e=9)=>new Ne(i,t,e);function Yt(i,t,e=0,n=0,s=0){const r=new bt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}class ka{constructor(t,e=!1){this.root=new Wt,this.hips=new Wt,this.body=new Wt,this.head=new Wt,this.armL=new Wt,this.armR=new Wt,this.legL=new Wt,this.legR=new Wt,this.handR=new Wt,this.eyes=[],this.held={},this.pose={...Eh},this.phase=0,this.blinkT=2,this.t=0,this.sitting=!1,this.elder=e,this.build(t)}build(t){const e=this.elder,n=P(e?1578e4:ad[t?.skin??0],{flat:!1}),s=e?{shirt:9071264,pants:2500142,skirt:!1}:ld[t?.outfit??0],r=P(s.shirt,{flat:!1}),a=P(s.pants,{flat:!1}),o=P(e?5913130:16185078,{flat:!1});this.root.add(this.hips),this.hips.position.y=e?.52:.55,this.hips.add(this.body);const l=Yt(ts(e?.27:.25,e?.28:.24),r,0,.3,0);if(l.scale.set(1.05,1,.85),this.body.add(l),s.skirt){const k=Yt(new xn(.34,.36,10),a,0,.06,0);this.body.add(k)}if(e)for(let k=0;k<3;k++)this.body.add(Yt(yn(.025,6,4),P(15919312),0,.42-k*.12,.23));this.head.position.y=e?.86:.9,this.body.add(this.head);const c=e?.38:.42,h=Yt(yn(c,16,12),n);h.scale.set(1,.95,.95),this.head.add(h);const u=P(2365974,{flat:!1}),d=P(16777215,{flat:!1});[-1,1].forEach(k=>{const v=Yt(ts(.045,.05),u,k*c*.36,.02,c*.86);this.head.add(v),this.eyes.push(v),e||this.head.add(Yt(yn(.018,6,4),d,k*c*.36+.015,.06,c*.92));const w=Yt(yn(.06,8,6),P(16748431,{flat:!1}),k*c*.6,-.1,c*.74);w.scale.z=.3,this.head.add(w),this.head.add(Yt(yn(.07,8,6),n,k*c*.98,0,0))});const f=Yt(new Zs(.05,.012,4,10,Math.PI),P(9058858),0,-.13,c*.9);if(f.rotation.z=Math.PI,this.head.add(f),this.buildHair(t,c),e){const k=P(6965802);[-1,1].forEach(v=>{const w=Yt(new Zs(.075,.012,4,12),k,v*c*.36,.02,c*.93);this.head.add(w)})}[[this.armL,-1],[this.armR,1]].forEach(([k,v])=>{k.position.set(v*(e?.31:.3),.48,0),this.body.add(k);const w=Yt(ts(.075,.2),r,0,-.16,0);k.add(w);const B=Yt(yn(.085,8,6),n,0,-.36,0);k.add(B)}),this.handR.position.set(0,-.38,.02),this.armR.add(this.handR),[[this.legL,-1],[this.legR,1]].forEach(([k,v])=>{k.position.set(v*.12,.02,0),this.hips.add(k),k.add(Yt(ts(.09,e?.22:.2),a,0,-.2,0));const w=Yt(ts(.08,.1),o,0,-.46,.05);w.rotation.x=Math.PI/2,k.add(w)});const m=new Wt;m.add(Yt(new Le(.11,.13,.22,10),P(3842970),0,-.05,.12));const _=Yt(new Le(.02,.03,.3,5),P(3842970),0,0,.32);_.rotation.x=1,m.add(_);const p=new Wt;p.add(Yt(new Le(.025,.025,1.1,5),P(10119740),0,0,.1));const g=Yt(new Ye(.22,.05,.16),P(10133672),0,-.55,.18);p.add(g);const M=new Wt;M.add(Yt(new Le(.025,.025,1.1,5),P(13214810),0,-.15,.1)),M.add(Yt(new xn(.16,.35,6),P(14267498),0,-.75,.12));const x=new Wt;x.add(Yt(new Le(.025,.025,.4,5),P(10119740),0,0,.08)),x.add(Yt(new Ye(.16,.08,.08),P(9080728),0,-.2,.1));const S=new Wt;S.add(Yt(yn(.1,6,5),P(14201978),0,-.04,.08));const R=new Wt;R.add(Yt(new xn(.12,.3,6),P(5221962),0,.05,.1));const T=new Wt,A=Yt(new Le(.015,.03,2.2,5),P(10119740),0,0,0);A.rotation.x=Math.PI/2-.5,A.position.set(0,.5,.95),T.add(A);const I=Yt(new Le(.05,.05,.05,8),P(5925498),.05,0,.1);I.rotation.z=Math.PI/2,T.add(I),Object.entries({can:m,hoe:p,broom:M,ham:x,seeds:S,veg:R,rod:T}).forEach(([k,v])=>{v.visible=!1,this.handR.add(v),this.held[k]=v}),this.root.traverse(k=>{k.isMesh&&(k.castShadow=!0)})}buildHair(t,e){const n=P(this.elder?14474460:od[t?.hairColor??0],{flat:!1}),s=this.head,r=new Ne(e*1.06,16,10,0,Math.PI*2,0,Math.PI*.55),a=Yt(r,n,0,.04,-.02);a.rotation.x=-.25,s.add(a);const o=Yt(new Ne(e*1.02,14,6,Math.PI*1.15,Math.PI*.7,.35,.5),n,0,.06,.02);if(s.add(o),this.elder){s.add(Yt(yn(.17,10,8),n,0,.05,-e*1.02));return}const l=t?.hair??0;if(l===1)for(let c=0;c<7;c++){const h=Yt(new xn(.1,.24,5),n,Math.cos(c)*.25,e*.85,Math.sin(c)*.25-.05);h.rotation.set(Math.sin(c)*.5,0,-Math.cos(c)*.5),s.add(h)}if(l===2){const c=Yt(ts(.1,.3),n,0,-.1,-e*1.05);c.rotation.x=.5,s.add(c),s.add(Yt(yn(.05,6,5),P(15886986),0,.12,-e*1))}if(l===3&&[-1,1].forEach(c=>s.add(Yt(yn(.15,10,8),n,c*e*.75,e*.62,-.05))),l===4){const c=Yt(new Le(e*.95,e*.9,.6,12,1,!0,Math.PI*.5,Math.PI),n,0,-.2,-.05);s.add(c)}}hold(t){Object.entries(this.held).forEach(([e,n])=>n.visible=e===t)}update(t,e,n,s,r){this.t+=t;const a=e>4.2,o=this.elder,l={...Eh},c=Math.min(e/(o?1.8:3.2),1.6);if(this.phase+=t*(o?5:8.5)*(a?1.35:1)*Math.max(.6,Math.min(e/3,1.4)),this.sitting)l.by=-.18,l.llx=-1.45,l.lrx=-1.45,l.alx=-.35,l.arx=-.35,l.hp=.05+Math.sin(this.t*1.2)*.03;else if(n)l.llx=-.9,l.lrx=.3,l.alz=.9,l.arz=-.9,l.sq=1.05;else if(e>.15){const m=Math.sin(this.phase),_=.75*Math.min(c,1.25);l.llx=m*_,l.lrx=-m*_,l.alx=-m*_*.9,l.arx=m*_*.9,l.by=Math.abs(Math.cos(this.phase))*(a?.07:.04),l.bp=a?.18:.05}else l.by=Math.sin(this.t*2.1)*.012,l.sq=1+Math.sin(this.t*2.1)*.012,l.hy=Math.sin(this.t*.6)*.15;if(o&&(l.bp+=.16),s){const m=Math.sin(Math.min(r,1)*Math.PI);switch(s){case"plant":l.by-=.22*m,l.bp+=.55*m,l.arx=-1.2*m,l.alx=-.5*m,l.llx=-.6*m,l.lrx=.2*m;break;case"till":{const _=Math.sin(r*Math.PI*3);l.bp+=.3,l.arx=-1.2-_*.9,l.alx=-1.2-_*.9,l.by-=.05;break}case"water":l.arx=-1.1,l.arz=-.15-.3*m,l.bp+=.15,l.hp=.25;break;case"harvest":l.by-=.2*m,l.bp+=.5*m,l.arx=-1.3*m+(r>.6?1.6*(r-.6):0),l.alx=-1.3*m;break;case"build":{const _=Math.sin(r*Math.PI*6);l.arx=-1.6-_*.6,l.bp+=.15;break}case"talk":l.hp=Math.sin(r*14)*.08,l.arx=-.5-Math.sin(r*9)*.2,l.arz=-.35;break;case"wave":l.arz=-2.6,l.arx=0,l.arz+=Math.sin(r*22)*.3,l.hy=.1;break;case"sweep":{const _=Math.sin(this.t*3.2);l.bp+=.35,l.arx=-.6+_*.15,l.alx=-.7+_*.15,l.arz=.3+_*.3,l.alz=-.1+_*.3;break}case"fish":l.arx=-.9+Math.sin(this.t*1.5)*.04,l.alx=-.8,l.alz=-.3,l.bp+=.05;break;case"reel":l.arx=-1.6-m*.6,l.alx=-1.4-m*.5,l.bp-=.15*m,l.by+=.04*m;break;case"pet":l.by-=.25*m,l.bp+=.5*m,l.arx=-1.2*m+Math.sin(r*18)*.15;break}}const h=1-Math.pow(8e-4,t),u=this.pose,d=l;for(const m in u)u[m]+=(d[m]-u[m])*h;this.hips.position.y=(o?.52:.55)+u.by,this.body.rotation.x=u.bp,this.body.scale.set(1/Math.sqrt(u.sq),u.sq,1/Math.sqrt(u.sq)),this.head.rotation.set(u.hp,u.hy,0),this.armL.rotation.set(u.alx,0,u.alz),this.armR.rotation.set(u.arx,0,u.arz),this.legL.rotation.x=u.llx,this.legR.rotation.x=u.lrx,this.blinkT-=t;const f=this.blinkT<.12?.15:1;this.blinkT<0&&(this.blinkT=2+Math.random()*3),this.eyes.forEach(m=>m.scale.y=f)}}class i_{constructor(t){this.pos=new C,this.vel=new C,this.vy=0,this.ry=0,this.air=!1,this.speed=0,this.action=null,this.at=0,this.dur=1,this.onActionHit=null,this.hitDone=!1,this.seat=null,this.stepAcc=0,this.av=new ka(t)}rebuild(t,e){e.remove(this.av.root),this.av=new ka(t),e.add(this.av.root)}busy(){return!!this.action&&this.at<1}doAction(t,e,n,s){this.action=t,this.at=0,this.dur=e,this.av.hold(n),this.onActionHit=s||null,this.hitDone=!1}sit(t){this.seat=t,this.av.sitting=!0,this.pos.set(t.x,0,t.z),this.ry=t.ry}stand(){this.seat&&(this.pos.z+=.8*Math.cos(this.ry),this.pos.x+=.8*Math.sin(this.ry),this.seat=null,this.av.sitting=!1)}update(t,e,n,s,r,a,o,l){if(this.seat)if(e.x||e.z||s)this.stand();else{this.av.root.position.set(this.seat.x,(this.seat.y??.95)-.32,this.seat.z),this.av.root.rotation.y=this.seat.ry,this.av.update(t,0,!1,this.action,this.at),this.tickAction(t);return}const c=this.busy()&&this.action!=="talk"&&this.action!=="wave",h=new C(r.rx*e.x-r.fx*e.z,0,r.rz*e.x-r.fz*e.z),u=Math.min(1,Math.hypot(e.x,e.z)),d=n?6:3.2;if(c?h.set(0,0,0):h.lengthSq()>0&&h.normalize().multiplyScalar(d*u),this.vel.lerp(h,1-Math.pow(1e-4,t)),this.pos.addScaledVector(this.vel,t),this.collide(a),this.speed=Math.hypot(this.vel.x,this.vel.z),o!=null)this.ry=o+Math.PI;else if(this.speed>.3){let m=Math.atan2(this.vel.x,this.vel.z)-this.ry;m=Math.atan2(Math.sin(m),Math.cos(m)),this.ry+=m*(1-Math.pow(5e-4,t))}s&&!this.air&&!c&&(this.vy=5.4,this.air=!0),this.air&&(this.vy-=15*t,this.pos.y+=this.vy*t,this.pos.y<=0&&(this.pos.y=0,this.vy=0,this.air=!1,l(!0))),!this.air&&this.speed>.6&&(this.stepAcc+=t*this.speed,this.stepAcc>(n?1.3:1.05)&&(this.stepAcc=0,l(n))),this.av.root.position.copy(this.pos),this.av.root.rotation.y=this.ry,this.av.update(t,this.air?0:this.speed,this.air,this.action,this.at),this.tickAction(t)}tickAction(t){this.action&&(this.at+=t/this.dur,!this.hitDone&&this.at>.55&&(this.hitDone=!0,this.onActionHit?.()),this.at>=1&&(this.action=null,this.av.hold(null)))}collide(t){for(const n of t)if(n.t==="c"){const s=this.pos.x-n.x,r=this.pos.z-n.z,a=Math.hypot(s,r),o=n.r+.36;a<o&&a>1e-4&&(this.pos.x=n.x+s/a*o,this.pos.z=n.z+r/a*o)}else{const s=Math.max(n.x0,Math.min(this.pos.x,n.x1)),r=Math.max(n.z0,Math.min(this.pos.z,n.z1)),a=this.pos.x-s,o=this.pos.z-r,l=Math.hypot(a,o);if(l<.36)if(l>1e-4)this.pos.x=s+a/l*.36,this.pos.z=r+o/l*.36;else{const c=this.pos.x-n.x0,h=n.x1-this.pos.x,u=this.pos.z-n.z0,d=n.z1-this.pos.z,f=Math.min(c,h,u,d);f===c?this.pos.x=n.x0-.36:f===h?this.pos.x=n.x1+.36:f===u?this.pos.z=n.z0-.36:this.pos.z=n.z1+.36}}}}const ws=[{from:5,spots:[{x:-3,z:-4,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"},{x:3,z:-6,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"},{x:0,z:-2,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"}]},{from:8,spots:[{x:7.6,z:-8.6,act:"plant",hold:"can",label:"Ngoại đang tưới hoa"},{x:-7.6,z:-8.4,act:"plant",hold:"can",label:"Ngoại đang tưới hoa"}]},{from:10.5,spots:[{x:9.2,z:-14,act:null,hold:null,face:Math.PI,label:"Ngoại đang nấu cơm"}]},{from:13,spots:[{x:3.4,z:-10.5,act:null,hold:null,sit:{x:3.4,z:-10.55,ry:0,y:.95},label:"Ngoại đang ngồi nghỉ ngoài hiên"}]},{from:16.5,spots:[{x:-9.2,z:-1,act:"plant",hold:null,label:"Ngoại đang chăm vườn"},{x:-12,z:3,act:"plant",hold:null,label:"Ngoại đang chăm vườn"}]},{from:18,spots:[{x:4.4,z:-9.6,act:null,hold:null,face:Math.PI,label:"Ngoại dọn mâm cơm"}]},{from:21,spots:[{x:0,z:-12.2,act:null,hold:null,inside:!0,label:"Ngoại đã vô nhà nghỉ"}]}];class s_{constructor(){this.av=new ka(null,!0),this.pos=new C(0,0,23),this.ry=Math.PI,this.spot=null,this.idx=0,this.wait=0,this.talking=!1,this.visible=!0,this.speed=0,this.actT=0,this.greet=!1,this.label="",this.av.root.position.copy(this.pos)}routine(t){let e=ws[ws.length-1];for(const n of ws)t>=n.from&&(e=n);return t<5&&(e=ws[ws.length-1]),e}update(t,e,n,s){const r=Hn(e),a=this.routine(r);(!this.spot||!a.spots.includes(this.spot))&&(this.spot=a.spots[0],this.idx=0,this.av.sitting=!1),this.label=this.spot.label;let o=this.greet?new C(0,0,23):new C(this.spot.x,0,this.spot.z);const l=Math.hypot(o.x-this.pos.x,o.z-this.pos.z);let c=null;if(this.talking){this.speed=0;const u=Math.atan2(n.x-this.pos.x,n.z-this.pos.z);this.turn(u,t),c="talk",this.av.sitting=!1}else if(l>.35){this.av.sitting=!1;const u=1.5;this.speed=u;const d=(o.x-this.pos.x)/l,f=(o.z-this.pos.z)/l;this.pos.x+=d*u*t,this.pos.z+=f*u*t,this.turn(Math.atan2(d,f),t),this.collide(s)}else this.speed=0,this.spot.sit&&!this.greet?(this.av.sitting=!0,this.pos.set(this.spot.sit.x,0,this.spot.sit.z),this.ry=this.spot.sit.ry):(this.spot.face!=null&&this.turn(this.spot.face,t),c=this.spot.act,this.wait+=t,a.spots.length>1&&this.wait>9&&(this.wait=0,this.idx=(this.idx+1)%a.spots.length,this.spot=a.spots[this.idx]));!this.talking&&!this.greet&&Math.hypot(n.x-this.pos.x,n.z-this.pos.z)<2.2&&this.speed===0&&!this.av.sitting&&(this.turn(Math.atan2(n.x-this.pos.x,n.z-this.pos.z),t),c=c==="sweep"?null:c),this.visible=!(this.spot.inside&&l<.5&&!this.talking),this.av.root.visible=this.visible,this.av.hold(this.talking?null:c==="sweep"?"broom":this.spot.hold&&c?this.spot.hold:null),this.actT=(this.actT+t*.5)%1;const h=this.av.sitting&&this.spot.sit?this.spot.sit.y-.3:0;this.av.root.position.set(this.pos.x,h,this.pos.z),this.av.root.rotation.y=this.ry,this.av.update(t,this.speed,!1,c,c==="talk"?this.actT:c==="plant"?.5:this.actT)}turn(t,e){let n=t-this.ry;n=Math.atan2(Math.sin(n),Math.cos(n)),this.ry+=n*(1-Math.pow(.01,e))}collide(t){for(const n of t){if(n.t!=="c")continue;const s=this.pos.x-n.x,r=this.pos.z-n.z,a=Math.hypot(s,r),o=n.r+.35;a<o&&a>1e-4&&(this.pos.x=n.x+s/a*o,this.pos.z=n.z+r/a*o)}}}const de={hand:{id:"hand",name:"Tay không",kind:"tool",buy:null,sell:null,stack:1,desc:"Thu hoạch, trò chuyện, tương tác."},hoe:{id:"hoe",name:"Cuốc",kind:"tool",buy:null,sell:null,stack:1,desc:"Xới đất trước khi gieo hạt."},can:{id:"can",name:"Bình tưới",kind:"tool",buy:null,sell:null,stack:1,desc:"Tưới cho đất ẩm để cây lớn."},rod:{id:"rod",name:"Cần câu",kind:"tool",buy:60,sell:null,stack:1,desc:"Câu cá ở ao sen, rạch và ao nhỏ.",level:1},seed_raumuong:{id:"seed_raumuong",name:"Hạt rau muống",kind:"seed",buy:10,sell:4,stack:99,desc:"Lớn nhanh, cắt xong mọc lại.",crop:"raumuong"},seed_caixanh:{id:"seed_caixanh",name:"Hạt cải xanh",kind:"seed",buy:15,sell:6,stack:99,desc:"Cải xanh lá to, bán được giá.",crop:"caixanh"},seed_cachua:{id:"seed_cachua",name:"Hạt cà chua",kind:"seed",buy:20,sell:8,stack:99,desc:"Ra nhiều trái, hái xong ra tiếp.",crop:"cachua"},seed_daubap:{id:"seed_daubap",name:"Hạt đậu bắp",kind:"seed",buy:18,sell:7,stack:99,desc:"Cây cao, trái dài, hái hoài.",crop:"daubap"},seed_muoigio:{id:"seed_muoigio",name:"Hạt hoa mười giờ",kind:"seed",buy:12,sell:5,stack:99,desc:"Hoa nở rực mỗi sáng.",crop:"muoigio"},seed_bido:{id:"seed_bido",name:"Hạt bí đỏ",kind:"seed",buy:30,sell:12,stack:99,desc:"Lâu lớn nhưng trái to, bán đắt.",crop:"bido"},raumuong:{id:"raumuong",name:"Bó rau muống",kind:"produce",buy:null,sell:15,stack:99,desc:"Rau muống xanh giòn, xào tỏi là hết sảy."},caixanh:{id:"caixanh",name:"Cải xanh",kind:"produce",buy:null,sell:28,stack:99,desc:"Nấu canh cải với tôm khô."},cachua:{id:"cachua",name:"Cà chua",kind:"produce",buy:null,sell:12,stack:99,desc:"Đỏ mọng, nấu canh chua ngon."},daubap:{id:"daubap",name:"Đậu bắp",kind:"produce",buy:null,sell:10,stack:99,desc:"Luộc chấm chao là nhứt."},muoigio:{id:"muoigio",name:"Bó hoa mười giờ",kind:"produce",buy:null,sell:20,stack:99,desc:"Cắm bình cho ngoại vui."},bido:{id:"bido",name:"Trái bí đỏ",kind:"produce",buy:null,sell:75,stack:99,desc:"Nấu chè hay hầm xương đều ngon."},egg:{id:"egg",name:"Trứng gà",kind:"produce",buy:null,sell:20,stack:99,desc:"Trứng gà ta còn ấm."},caro:{id:"caro",name:"Cá rô",kind:"produce",buy:null,sell:25,stack:99,desc:"Cá rô đồng kho tộ."},caloc:{id:"caloc",name:"Cá lóc",kind:"produce",buy:null,sell:45,stack:99,desc:"Nướng trui cuốn bánh tráng."},cavang:{id:"cavang",name:"Cá chép vàng",kind:"produce",buy:null,sell:120,stack:99,desc:"Hiếm lắm, đem may mắn."}};class r_{constructor(t){this.s=t}count(t){return this.s.inv.reduce((e,n)=>e+(n.id===t?n.qty:0),0)}add(t,e){const n=de[t];if(!n||e<=0)return 0;let s=e;for(const r of this.s.inv)if(r.id===t&&r.qty<n.stack){const a=Math.min(s,n.stack-r.qty);if(r.qty+=a,s-=a,!s)break}for(const r of this.s.inv){if(!s)break;if(!r.id){const a=Math.min(s,n.stack);r.id=t,r.qty=a,s-=a}}return ue.emit("inv"),e-s}remove(t,e){if(this.count(t)<e)return!1;let n=e;for(let s=this.s.inv.length-1;s>=0&&n;s--){const r=this.s.inv[s];if(r.id!==t)continue;const a=Math.min(n,r.qty);r.qty-=a,n-=a,r.qty||(r.id="")}return ue.emit("inv"),!0}swap(t,e){if(t<0||e<0||t>=Js||e>=Js)return;const n=this.s.inv[t];this.s.inv[t]=this.s.inv[e],this.s.inv[e]=n,ue.emit("inv")}selected(){return this.s.inv[this.s.hotbar]||{id:"",qty:0}}buy(t,e){const n=de[t];if(!n||n.buy==null)return"Món này không bán.";if(e<1)return"Số lượng không hợp lệ.";const s=n.buy*e;return this.s.money<s?"Không đủ xu.":this.room(t)<e?"Kho đồ đầy rồi.":(this.s.money-=s,this.add(t,e),ue.emit("money",-s),null)}sell(t,e){const n=de[t];if(!n||n.sell==null)return"Món này không bán được.";if(e<1||this.count(t)<e)return"Không đủ hàng để bán.";this.remove(t,e);const s=n.sell*e;return this.s.money+=s,ue.emit("money",s),null}room(t){const e=de[t];let n=0;for(const s of this.s.inv)s.id?s.id===t&&(n+=e.stack-s.qty):n+=e.stack;return n}}const cn={raumuong:{id:"raumuong",name:"Rau muống",seedItem:"seed_raumuong",produceItem:"raumuong",seedPrice:10,sellPrice:15,stageSeconds:[35,40,45],yield:[2,3],regrow:1,enabled:!0,level:1},caixanh:{id:"caixanh",name:"Cải xanh",seedItem:"seed_caixanh",produceItem:"caixanh",seedPrice:15,sellPrice:28,stageSeconds:[45,55,60],yield:[1,2],regrow:null,enabled:!0,level:1},cachua:{id:"cachua",name:"Cà chua",seedItem:"seed_cachua",produceItem:"cachua",seedPrice:20,sellPrice:12,stageSeconds:[55,65,75],yield:[3,5],regrow:2,enabled:!0,level:2},bido:{id:"bido",name:"Bí đỏ",seedItem:"seed_bido",produceItem:"bido",seedPrice:30,sellPrice:70,stageSeconds:[80,90,100],yield:[1,1],regrow:null,enabled:!0,level:4},muoigio:{id:"muoigio",name:"Hoa mười giờ",seedItem:"seed_muoigio",produceItem:"muoigio",seedPrice:12,sellPrice:20,stageSeconds:[40,45,50],yield:[2,3],regrow:2,enabled:!0,level:3},daubap:{id:"daubap",name:"Đậu bắp",seedItem:"seed_daubap",produceItem:"daubap",seedPrice:18,sellPrice:10,stageSeconds:[50,60,60],yield:[3,4],regrow:2,enabled:!0,level:3}},ln=3;class a_{constructor(t,e){this.s=t,this.inv=e,this.boost=()=>1,this.raining=!1}tick(t){for(const e of this.s.plots){if(this.raining&&e.tilled&&e.crop&&e.stage<ln&&(e.wet=!0),!e.crop||!e.wet||e.stage>=ln)continue;const n=cn[e.crop];let s=t*this.boost(e);for(;s>0&&e.stage<ln&&e.wet;){const r=n.stageSeconds[e.stage]*(1-e.progress),a=Math.min(s,r);e.progress+=a/n.stageSeconds[e.stage],s-=a,e.progress>=.999&&(e.stage++,e.progress=0,e.wet=e.stage<ln&&!this.raining?!1:e.wet,e.stage>=ln&&(e.wet=!1),ue.emit("plotGrow",e))}}}rain(){for(const t of this.s.plots)t.tilled&&(t.wet=!0)}actionFor(t){const e=this.inv.selected().id;if(!t.tilled)return{kind:"till",label:"Xới đất"};if(!t.crop){const r=de[e]?.kind==="seed"&&this.inv.count(e)>0?e:Object.keys(de).find(o=>de[o].kind==="seed"&&this.inv.count(o)>0)||"";if(!r)return{kind:"wait",label:"Hết hạt giống, ghé sạp mua nha"};const a=de[r].crop;return{kind:"plant",label:`Gieo ${cn[a].name.toLowerCase()}`,crop:a}}const n=cn[t.crop];if(t.stage>=ln)return{kind:"harvest",label:`Thu hoạch ${n.name.toLowerCase()}`};if(!t.wet)return{kind:"water",label:`Tưới ${n.name.toLowerCase()}`};const s=Math.ceil(n.stageSeconds[t.stage]*(1-t.progress));return{kind:"wait",label:`${n.name} đang lớn · còn ~${s} giây`}}till(t){return t.tilled?!1:(t.tilled=!0,ue.emit("plot",t,"till"),!0)}plant(t,e){const n=cn[e];return!t.tilled||t.crop||!n?.enabled||!this.inv.remove(n.seedItem,1)?!1:(t.crop=e,t.stage=0,t.progress=0,ue.emit("plot",t,"plant"),!0)}water(t){return!t.crop||t.wet||t.stage>=ln?!1:(t.wet=!0,ue.emit("plot",t,"water"),!0)}harvest(t){if(!t.crop||t.stage<ln)return 0;const e=cn[t.crop],n=e.yield[0]+Math.floor(Math.random()*(e.yield[1]-e.yield[0]+1)),s=this.inv.add(e.produceItem,n);return s?(e.regrow!=null?(t.stage=e.regrow,t.progress=0,t.wet=!1):(t.crop=null,t.stage=0,t.progress=0,t.wet=!1),ue.emit("plot",t,"harvest"),s):0}}const cd=(()=>{const i=new Yl;return i.moveTo(0,.36),i.lineTo(.13,.04),i.lineTo(.06,.07),i.lineTo(0,-.02),i.lineTo(-.06,.07),i.lineTo(-.13,.04),i.closePath(),new ao(i)})(),ar=new Le(.018,.022,1,5);ar.translate(0,.5,0);const o_=new Ne(.035,5,4),hd=new Ne(.06,6,4),l_=new Ne(1,8,6);function fs(i,t){const e=P(t);for(let n=0;n<6;n++){const s=new bt(o_,e);s.position.set((n%3-1)*.5,.24,(Math.floor(n/3)-.5)*.7),i.add(s)}}function c_(i,t){const e=P(10473578,{wind:.18}),n=P(4168250,{wind:.2,side:$e});if(t===0)return fs(i,8018490);const s=[[-.7,-.45],[0,-.45],[.7,-.45],[-.7,.45],[0,.45],[.7,.45]],r=[0,3,5,8][t],a=[0,.12,.32,.55][t];s.forEach(([o,l])=>{for(let c=0;c<r;c++){const h=c/r*Math.PI*2+o,u=.06+c%2*.05,d=a*(.75+c%3*.15),f=new bt(ar,e);f.scale.y=d,f.position.set(o+Math.cos(h)*u,.22,l+Math.sin(h)*u),f.rotation.set(Math.sin(h)*.35,0,-Math.cos(h)*.35),f.castShadow=!0,i.add(f);const m=new bt(cd,n),_=t===1?.45:t===2?.75:1.05;m.scale.setScalar(_),m.position.set(o+Math.cos(h)*(u+d*.35),.22+d,l+Math.sin(h)*(u+d*.35)),m.rotation.set(-.6,h+Math.PI/2,0),m.castShadow=!0,i.add(m)}})}function h_(i,t){if(t===0)return fs(i,4864554);const e=[[-.6,-.5],[.6,-.5],[-.6,.5],[.6,.5]],n=P(t===3?3115578:6271050,{wind:.1}),s=P(13625512);e.forEach(([r,a])=>{if(t===1){[-1,1].forEach(c=>{const h=new bt(hd,n);h.scale.set(1,.4,.7),h.position.set(r+c*.06,.28,a),i.add(h)});return}const o=t===2?4:7,l=t===2?.2:.34;for(let c=0;c<o;c++){const h=c/o*Math.PI*2+r*3,u=new bt(l_,n);u.scale.set(l*.55,.03,l);const d=t===3?.9+c%2*.25:.6,f=new Wt;if(f.position.set(r,.24,a),f.rotation.set(0,h,0),i.add(f),u.position.set(0,Math.sin(d)*l,Math.cos(d)*l*.9),u.rotation.x=-d,u.castShadow=!0,f.add(u),t===3){const m=new bt(new Ye(.02,.01,l*1.6),s);m.position.copy(u.position).add(new C(0,.02,0)),m.rotation.x=-d,f.add(m)}}if(t===3){const c=new bt(new Ne(.09,7,5),P(8372314));c.position.set(r,.36,a),i.add(c)}})}const Pi=i=>new Ne(i,8,6),ud=[[-.6,-.5],[.6,-.5],[-.6,.5],[.6,.5]];function ic(i,t){const e=P(t,{wind:.12});ud.forEach(([n,s])=>[-1,1].forEach(r=>{const a=new bt(hd,e);a.scale.set(1,.4,.7),a.position.set(n+r*.06,.3,s),i.add(a)}))}function u_(i,t){if(t===0)return fs(i,13213792);if(t===1)return ic(i,6989402);const e=P(5937738,{wind:.1}),n=P(9071172),s=P(14697786),r=P(10141786);[[-.6,0],[.6,0]].forEach(([a,o])=>{const l=t===2?.6:1,c=new bt(ar,n);c.scale.set(1.4,l+.25,1.4),c.position.set(a,.22,o),i.add(c);for(let h=0;h<6;h++){const u=new bt(Pi(.16),e);u.position.set(a+Math.cos(h*2)*.18,.35+h*l/6,o+Math.sin(h*2)*.18),u.scale.y=.7,u.castShadow=!0,i.add(u)}if(t===3)for(let h=0;h<4;h++){const u=new bt(Pi(.1),h===3?r:s);u.position.set(a+Math.cos(h*1.7)*.26,.45+h*.18,o+Math.sin(h*1.7)*.26),i.add(u)}})}function d_(i,t){if(t===0)return fs(i,9079386);if(t===1)return ic(i,8040538);const e=P(8036426,{wind:.08}),n=P(6989402,{wind:.12,side:$e}),s=P(10143834),r=P(16179850);ud.forEach(([a,o])=>{const l=t===2?.55:1.05,c=new bt(ar,e);c.scale.set(1.8,l,1.8),c.position.set(a,.22,o),i.add(c);for(let h=0;h<3;h++){const u=new bt(cd,n);u.scale.setScalar(t===2?.8:1.1),u.position.set(a,.3+l*(.4+h*.25),o),u.rotation.set(-.8,h*2.1,0),i.add(u)}if(t===3){for(let u=0;u<2;u++){const d=new bt(new xn(.05,.3,5),s);d.position.set(a+(u?.1:-.1),.55+u*.25,o),d.rotation.z=u?.3:-.3,i.add(d)}const h=new bt(Pi(.07),r);h.position.set(a,.22+l+.05,o),i.add(h)}})}function f_(i,t){if(t===0)return fs(i,6965818);const e=P(8042570,{wind:.08}),n=[15224970,15902778,13130456,16179274,15221562],s=t===1?4:t===2?6:8;for(let r=0;r<s;r++){const a=(r%4-1.5)*.45,o=(Math.floor(r/4)-.5)*.7+r%2*.1,l=new bt(Pi(t===1?.1:.17),e);if(l.scale.y=.6,l.position.set(a,.3,o),i.add(l),t===3){const c=new bt(new ds(.11,5),P(n[r%n.length],{side:$e}));c.rotation.x=-Math.PI/2,c.position.set(a,.42,o),i.add(c);const h=new bt(Pi(.03),P(16179274));h.position.set(a,.43,o),i.add(h)}}}function p_(i,t){if(t===0)return fs(i,15259816);if(t===1)return ic(i,8040538);const e=P(6989402,{wind:.06}),n=P(9089098),s=t===2?5:8;for(let r=0;r<s;r++){const a=r/s*Math.PI*2,o=t===2?.5:.85,l=new bt(Pi(.26),e);l.scale.set(1,.3,1),l.position.set(Math.cos(a)*o,.32,Math.sin(a)*o*.8),l.castShadow=!0,i.add(l);const c=new bt(ar,n);c.scale.set(1,o,1),c.position.set(0,.3,0),c.rotation.set(Math.PI/2,0,-a+Math.PI/2),i.add(c)}if(t===3){const r=P(15303738),a=new Wt;for(let l=0;l<6;l++){const c=new bt(Pi(.32),r);c.scale.set(.45,.85,1),c.rotation.y=l/6*Math.PI,a.add(c)}const o=new bt(new Le(.04,.05,.16,5),P(6969914));o.position.y=.3,a.add(o),a.position.set(.1,.48,.05),a.traverse(l=>l.castShadow=!0),i.add(a)}}function Th(i,t){const e=new Wt;return{raumuong:c_,caixanh:h_,cachua:u_,daubap:d_,muoigio:f_,bido:p_}[i]?.(e,t),Bs(e)}const zr={untilled:et.soilRaw,dry:et.soilDry,wet:et.soilWet};class m_{constructor(t,e=160){this.scene=t,this.ps=[],this.m4=new Xt,this.q=new oi,this.sc=new C,this.pops=[],this.max=e,this.im=new xi(new rr(1,0),new Kl({roughness:.6,flatShading:!0}),e),this.im.count=0,this.im.frustumCulled=!1,this.im.instanceColor=new Da(new Float32Array(e*3),3),t.add(this.im)}burst(t,e,n,s={}){for(let r=0;r<e&&this.ps.length<this.max;r++){const a=Math.random()*Math.PI*2,o=(s.speed??1.5)*(.5+Math.random()*.7),l=s.spread??1;this.ps.push({p:t.clone().add(new C((Math.random()-.5)*.3*l,0,(Math.random()-.5)*.3*l)),v:new C(Math.cos(a)*o*l,(s.up??2)*(.6+Math.random()*.6),Math.sin(a)*o*l),life:0,max:(s.life??.8)*(.7+Math.random()*.6),s:(s.size??.05)*(.7+Math.random()*.6),g:s.grav??9,c:new Ct(n).offsetHSL(0,0,(Math.random()-.5)*.1)})}}pour(t,e){for(let n=0;n<3&&this.ps.length<this.max;n++)this.ps.push({p:t.clone(),v:e.clone().multiplyScalar(1.2+Math.random()*.5).add(new C((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)),life:0,max:.6,s:.04,g:9,c:new Ct(8048880)})}popItem(t,e,n){t.position.copy(e),this.scene.add(t),this.pops.push({o:t,t:0,from:e.clone(),to:n})}update(t){for(let e=this.ps.length-1;e>=0;e--){const n=this.ps[e];if(n.life+=t,n.life>n.max||n.p.y<.02){this.ps.splice(e,1);continue}n.v.y-=n.g*t,n.p.addScaledVector(n.v,t)}this.ps.forEach((e,n)=>{const s=1-e.life/e.max;this.sc.setScalar(e.s*(.4+s*.6)),this.m4.compose(e.p,this.q,this.sc),this.im.setMatrixAt(n,this.m4),this.im.setColorAt(n,e.c)}),this.im.count=this.ps.length,this.im.instanceMatrix.needsUpdate=!0,this.im.instanceColor&&(this.im.instanceColor.needsUpdate=!0);for(let e=this.pops.length-1;e>=0;e--){const n=this.pops[e];n.t+=t;const s=n.t;if(s<.45){const r=s/.45;n.o.position.copy(n.from).add(new C(0,Math.sin(r*Math.PI)*1.1+r*.5,0)),n.o.scale.setScalar(.6+Math.sin(r*Math.PI)*.6),n.o.rotation.y+=t*8}else{const r=Math.min(1,(s-.45)/.35);n.o.position.lerpVectors(n.from.clone().setY(n.from.y+.5),n.to(),r),n.o.scale.setScalar(1-r*.8)}s>.8&&(this.scene.remove(n.o),this.pops.splice(e,1))}}}const g_=[0,2,5,7,9],v_=i=>440*Math.pow(2,(i-69)/12);class __{constructor(){this.ctx=null,this.g={},this.vol={music:.6,ambient:.7,sfx:.8,ui:.7},this.muted=!1,this.hour=8,this.nextNote=0,this.stp=0,this.phrase=[],this.windSrc=null,this.amb=0,this.timer=0,this.paused=!1,this.rainG=null,this.rainOn=!1}unlock(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),["music","ambient","sfx","ui"].forEach(a=>{const o=e.createGain();o.connect(n),this.g[a]=o}),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const s=this.noise.getChannelData(0);for(let a=0;a<s.length;a++)s[a]=Math.random()*2-1;this.windG=e.createGain(),this.windG.gain.value=0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=420,this.windG.connect(r),r.connect(this.g.ambient),this.windSrc=e.createBufferSource(),this.windSrc.buffer=this.noise,this.windSrc.loop=!0,this.windSrc.connect(this.windG),this.windSrc.start(),this.apply(),this.nextNote=e.currentTime+.3,this.timer=window.setInterval(()=>this.schedule(),90)}set(t,e){Object.assign(this.vol,t),e!=null&&(this.muted=e),this.apply()}apply(){this.ctx&&Object.keys(this.g).forEach(t=>this.g[t].gain.setTargetAtTime(this.muted?0:this.vol[t]*(t==="music"?.45:t==="ambient"?.5:.7),this.ctx.currentTime,.05))}pause(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}get t(){return this.ctx.currentTime}tranh(t,e,n=1.6,s=.25,r="music"){const a=this.ctx,o=a.createOscillator(),l=a.createOscillator(),c=a.createGain(),h=a.createBiquadFilter();o.type="triangle",l.type="sawtooth",o.frequency.setValueAtTime(t,e),l.frequency.setValueAtTime(t,e),Math.random()<.35&&(o.frequency.setValueAtTime(t,e+.25),o.frequency.linearRampToValueAtTime(t*1.06,e+.45),o.frequency.linearRampToValueAtTime(t,e+.7),l.frequency.setValueAtTime(t,e+.25),l.frequency.linearRampToValueAtTime(t*1.06,e+.45),l.frequency.linearRampToValueAtTime(t,e+.7)),h.type="lowpass",h.frequency.setValueAtTime(t*8,e),h.frequency.exponentialRampToValueAtTime(t*1.5,e+n);const u=a.createGain();u.gain.value=.18,l.connect(u),u.connect(h),o.connect(h),h.connect(c),c.connect(this.g[r]),c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(s,e+.005),c.gain.exponentialRampToValueAtTime(8e-4,e+n),o.start(e),l.start(e),o.stop(e+n+.05),l.stop(e+n+.05)}sao(t,e,n,s=.12){const r=this.ctx,a=r.createOscillator(),o=r.createGain(),l=r.createOscillator(),c=r.createGain();a.type="sine",a.frequency.setValueAtTime(t*.97,e),a.frequency.linearRampToValueAtTime(t,e+.08),l.frequency.value=5.2,c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.012,e+n*.6),l.connect(c),c.connect(a.frequency);const h=r.createBufferSource();h.buffer=this.noise;const u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=t*2,u.Q.value=3;const d=r.createGain();d.gain.value=.25,h.connect(u),u.connect(d),d.connect(o),a.connect(o),o.connect(this.g.music),o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(s,e+.09),o.gain.setValueAtTime(s*.9,e+n*.8),o.gain.linearRampToValueAtTime(0,e+n),a.start(e),l.start(e),h.start(e,Math.random()),a.stop(e+n+.05),l.stop(e+n+.05),h.stop(e+n+.05)}bass(t,e){const n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.value=t,s.connect(r),r.connect(this.g.music),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.18,e+.02),r.gain.exponentialRampToValueAtTime(.001,e+1.8),s.start(e),s.stop(e+1.9)}note(t,e=62){const n=Math.floor(t/5),s=(t%5+5)%5;return v_(e+n*12+g_[s])}schedule(){if(!this.ctx||this.paused)return;const t=this.ctx,e=this.hour<5.5||this.hour>=19,n=e?.62:.46;for(;this.nextNote<t.currentTime+.4;){const s=this.nextNote,r=Math.floor(this.stp/8),a=this.stp%8;if(a===0){if(!this.phrase.length||r%2===0){let l=5+Math.floor(Math.random()*3);this.phrase=Array.from({length:8},(c,h)=>(l+=[-1,0,1,1,-1,2,-2][Math.floor(Math.random()*7)],l=Math.max(2,Math.min(10,l)),h%2&&Math.random()<.3?-99:l)),this.phrase[7]=-99}this.bass(this.note([0,3,4,0][r%4],38),s)}const o=this.phrase[a];o!==-99&&(r%8>=4&&!e?this.sao(this.note(o+2),s,n*1.8):this.tranh(this.note(o),s,1.8,e?.13:.18),a%4===0&&this.tranh(this.note(o-5),s+n/2,1.2,.08)),this.nextNote+=n*(a%2?.9:1.1),this.stp++,r%16===15&&a===7&&(this.nextNote+=n*4)}this.ambience()}ambience(){const t=this.ctx,e=this.hour,n=e<5||e>=19;this.amb-=.09,this.windG.gain.setTargetAtTime(n?.04:.09,t.currentTime,1.5),!(this.amb>0)&&(this.amb=.6+Math.random()*1.6,n?(this.cricket(),Math.random()<.45&&this.frog()):(Math.random()<.7&&this.bird(),e>5&&e<6.6&&Math.random()<.25&&this.rooster()))}bird(){const t=this.ctx,e=t.currentTime+Math.random()*.3,n=2+Math.floor(Math.random()*4),s=2400+Math.random()*1800;for(let r=0;r<n;r++){const a=t.createOscillator(),o=t.createGain(),l=e+r*.11;a.type="sine",a.frequency.setValueAtTime(s,l),a.frequency.exponentialRampToValueAtTime(s*(Math.random()<.5?1.5:.7),l+.08),o.gain.setValueAtTime(0,l),o.gain.linearRampToValueAtTime(.05,l+.01),o.gain.linearRampToValueAtTime(0,l+.09),a.connect(o),o.connect(this.g.ambient),a.start(l),a.stop(l+.1)}}rooster(){const t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createBiquadFilter();n.type="sawtooth",r.type="bandpass",r.frequency.value=1200,r.Q.value=2,[[0,500],[.15,760],[.5,820],[.9,620],[1.2,450]].forEach(([a,o])=>n.frequency.linearRampToValueAtTime(o,e+a)),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.06,e+.05),s.gain.setValueAtTime(.06,e+1),s.gain.linearRampToValueAtTime(0,e+1.25),n.connect(r),r.connect(s),s.connect(this.g.ambient),n.start(e),n.stop(e+1.3)}cricket(){const t=this.ctx,e=t.currentTime;for(let n=0;n<3;n++){const s=t.createOscillator(),r=t.createGain(),a=e+n*.32;s.frequency.value=4300+Math.random()*200;for(let o=0;o<6;o++)r.gain.setValueAtTime(.025,a+o*.035),r.gain.setValueAtTime(0,a+o*.035+.02);s.connect(r),r.connect(this.g.ambient),r.gain.value=0,s.start(a),s.stop(a+.25)}}frog(){const t=this.ctx,e=t.currentTime+Math.random()*.4;for(let n=0;n<2;n++){const s=t.createOscillator(),r=t.createGain(),a=e+n*.22;s.type="square",s.frequency.setValueAtTime(150,a),s.frequency.exponentialRampToValueAtTime(90,a+.12);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=600,r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.05,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.15),s.connect(o),o.connect(r),r.connect(this.g.ambient),s.start(a),s.stop(a+.16)}}nz(t,e,n,s,r="bandpass",a="sfx",o=0){if(!this.ctx)return;const l=this.ctx,c=l.currentTime+o,h=l.createBufferSource(),u=l.createBiquadFilter(),d=l.createGain();h.buffer=this.noise,u.type=r,u.frequency.value=e,u.Q.value=n,d.gain.setValueAtTime(s,c),d.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(u),u.connect(d),d.connect(this.g[a]),h.start(c,Math.random()),h.stop(c+t+.02)}tone(t,e,n,s,r="sine",a="sfx",o=0){if(!this.ctx)return;const l=this.ctx,c=l.currentTime+o,h=l.createOscillator(),u=l.createGain();h.type=r,h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+n),u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(s,c+.008),u.gain.exponentialRampToValueAtTime(.001,c+n),h.connect(u),u.connect(this.g[a]),h.start(c),h.stop(c+n+.02)}step(t,e){this.nz(.09,t==="brick"?2200:t==="dirt"?900:1500,1.2,e?.16:.1)}land(){this.nz(.15,500,.8,.22,"lowpass")}jump(){this.tone(300,520,.12,.06,"sine")}hoe(){this.nz(.18,400,.9,.35,"lowpass"),this.tone(160,70,.15,.15,"triangle"),this.nz(.12,700,1,.15,"bandpass","sfx",.25)}seed(){for(let t=0;t<5;t++)this.nz(.03,3500+Math.random()*1500,4,.12,"bandpass","sfx",t*.05)}water(){this.nz(.9,1800,.7,.18,"highpass");for(let t=0;t<6;t++)this.tone(900+Math.random()*900,400,.06,.04,"sine","sfx",.1+t*.12)}harvest(){this.nz(.08,1200,1.5,.25),this.tone(523,784,.12,.1,"triangle","sfx",.05),this.tone(784,1046,.18,.1,"triangle","sfx",.15)}pickup(){this.tone(880,1320,.1,.08,"triangle")}place(){this.tone(220,110,.12,.15,"triangle"),this.nz(.06,800,1,.12)}coin(){this.tone(1318,1318,.08,.08,"square","sfx"),this.tone(1760,1760,.22,.07,"square","sfx",.07)}grow(){this.tone(660,990,.25,.05,"sine")}npc(){if(this.ctx)for(let t=0;t<4;t++)this.tone(260+Math.random()*90,220+Math.random()*60,.09,.07,"triangle","sfx",t*.1)}click(){this.tone(900,700,.05,.08,"triangle","ui")}hover(){this.tone(1200,1100,.03,.03,"sine","ui")}open(){this.tone(500,900,.12,.07,"triangle","ui")}close(){this.tone(800,450,.1,.06,"triangle","ui")}error(){this.tone(220,180,.18,.08,"square","ui")}rain(t){if(!this.ctx||t===this.rainOn)return;this.rainOn=t;const e=this.ctx;if(!this.rainG){this.rainG=e.createGain(),this.rainG.gain.value=0;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=2600,n.Q.value=.4;const s=e.createBufferSource();s.buffer=this.noise,s.loop=!0,s.connect(n),n.connect(this.rainG),this.rainG.connect(this.g.ambient),s.start()}this.rainG.gain.setTargetAtTime(t?.35:0,e.currentTime,1.2)}levelUp(){this.ctx&&([0,2,4,5,7].forEach((t,e)=>this.tranh(this.note(t+5),this.t+e*.09,1.4,.2,"sfx")),this.tone(1046,1568,.4,.06,"triangle","sfx",.45))}build(){this.nz(.1,600,1,.3,"lowpass"),this.tone(180,90,.12,.18,"triangle"),this.nz(.08,900,1,.2,"lowpass","sfx",.16),this.tone(200,100,.1,.12,"triangle","sfx",.16),this.tone(660,990,.2,.05,"sine","sfx",.3)}cast(){this.nz(.25,2500,1,.08,"highpass"),this.nz(.2,800,1,.15,"bandpass","sfx",.35)}bite(){this.tone(880,440,.08,.12,"square"),this.tone(880,440,.08,.12,"square","sfx",.12),this.nz(.15,900,1,.2,"bandpass")}splash(){this.nz(.4,1200,.6,.35,"bandpass"),this.tone(400,150,.2,.08,"sine")}chime(){[0,2,4].forEach((t,e)=>this.ctx&&this.tranh(this.note(t+5),this.t+e*.12,1.2,.18,"sfx"))}}const Rt=new __,x_=(i,t,e)=>{const n=e*Math.PI/2,s=Math.cos(n),r=Math.sin(n);return[i*s+t*r,-i*r+t*s]};class M_{constructor(t,e,n){this.s=t,this.world=e,this.group=new Wt,this.objs=new Map,this.colliders=[],this.items=[],this.rects=new Map,this.mode="off",this.type="",this.rot=0,this.ghost=null,this.pad=null,this.gx=0,this.gz=0,this.valid=!1,this.reason="",this.moving=null,this.target=null,this.lampsBuilt=[],this.fountains=[],this.ghostOk=new Si({color:5953642,transparent:!0,opacity:.45,depthWrite:!1}),this.ghostBad=new Si({color:15221562,transparent:!0,opacity:.45,depthWrite:!1}),n.add(this.group),this.marker=new bt(new ls(.9,1.1,32),new Si({color:15221562,transparent:!0,opacity:.8,depthWrite:!1,side:$e})),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,n.add(this.marker),t.built.forEach(s=>this.spawn(s))}def(t){return be[typeof t=="string"?t:t.type]}rectOf(t,e,n,s){const r=Xr(be[t],s);return[e-r.w/2,n-r.d/2,e+r.w/2,n+r.d/2]}spawn(t){const e=this.def(t);if(!e)return;const n=Bs(e.model());n.position.set(t.x,0,t.z),n.rotation.y=t.rot*Math.PI/2,n.userData.builtId=t.id,this.group.add(n),this.objs.set(t.id,n),this.rects.set(t.id,this.rectOf(t.type,t.x,t.z,t.rot)),t.type==="lamp"&&this.lampsBuilt.push(n),t.type==="fountain"&&this.fountains.push((n.children[0],n)),this.rebuildPhysics()}physicsFor(t){const e=this.def(t),n=[],s=[],r=(c,h)=>{const[u,d]=x_(c,h,t.rot);return[t.x+u,t.z+d]};if(e.col==="box"){const c=e.box??[-e.w/2+.1,-e.d/2+.1,e.w/2-.1,e.d/2-.1],[h,u]=r(c[0],c[1]),[d,f]=r(c[2],c[3]);n.push({t:"b",x0:Math.min(h,d),z0:Math.min(u,f),x1:Math.max(h,d),z1:Math.max(u,f)})}else if(e.col==="circle")n.push({t:"c",x:t.x,z:t.z,r:e.r??.4});else if(e.col==="posts")for(let c=0;c<6;c++){const h=c/6*Math.PI*2,[u,d]=r(Math.cos(h)*1.6,Math.sin(h)*1.6);n.push({t:"c",x:u,z:d,r:.14})}const a=e.door?r(e.door[0],e.door[1]):[t.x,t.z],o=t.rot*Math.PI/2,l="b"+t.id;switch(e.kind){case"sit":{const c=t.type==="gazebo"?r(0,-.85):r(0,.05);s.push({id:l,kind:"sit",x:t.type==="gazebo"?t.x:a[0],z:t.type==="gazebo"?t.z:a[1],r:t.type==="gazebo"?1.8:1.3,label:t.type==="gazebo"?"Ngồi nghỉ trong chòi":"Ngồi ghế",data:{x:c[0],z:c[1],ry:o,y:t.type==="gazebo"?.8:.57}});break}case"well":s.push({id:l,kind:"well",x:t.x,z:t.z,r:2.3,label:"Kéo nước giếng tưới vườn",data:t.id});break;case"coop":s.push({id:l,kind:"coop",x:a[0],z:a[1],r:1.8,label:"Lượm trứng gà",data:t.id});break;case"shipbox":s.push({id:l,kind:"shipbox",x:a[0],z:a[1],r:1.4,label:"Bỏ hàng vô thùng",data:t.id});break;case"fish":s.push({id:l,kind:"pond",x:t.x,z:t.z,r:2.7,label:"Câu cá ở ao nhỏ",data:{x:t.x,z:t.z,r:1.2}});break;case"sleep":s.push({id:l,kind:"sleep",x:a[0],z:a[1],r:1.6,label:"Vô nhà nghỉ ngơi",data:t.id});break;case"wish":s.push({id:l,kind:"wish",x:t.x,z:t.z,r:4.6,label:"Ước một điều (1 xu)"});break;case"info":s.push({id:l,kind:"info",x:t.x,z:t.z,r:1.2,label:"Bù nhìn canh vườn",data:"Bù nhìn đuổi chim, luống gần đây lớn nhanh hơn!"});break}return{cols:n,items:s}}rebuildPhysics(){this.colliders=[],this.items=[];for(const t of this.s.built){const e=this.physicsFor(t);this.colliders.push(...e.cols),this.items.push(...e.items)}ue.emit("physics")}hitsCollider(t,e){if(e.t==="b")return t[0]<e.x1&&t[2]>e.x0&&t[1]<e.z1&&t[3]>e.z0;const n=Math.max(t[0],Math.min(e.x,t[2])),s=Math.max(t[1],Math.min(e.z,t[3]));return Math.hypot(e.x-n,e.z-s)<e.r}check(t,e,n,s,r,a=-1){const o=be[t],l=this.s;if(!o)return{ok:!1,reason:"?"};if(Gn(l.xp)<o.level)return{ok:!1,reason:`Cần cấp ${o.level}`};const c=l.built.filter(d=>d.type===t&&d.id!==a).length;if(o.max&&c>=o.max)return{ok:!1,reason:`Tối đa ${o.max} cái`};const h=this.rectOf(t,e,n,s),u=[h[0]+.05,h[1]+.05,h[2]-.05,h[3]-.05];for(const[d,f]of[[u[0],u[1]],[u[2],u[1]],[u[0],u[3]],[u[2],u[3]],[e,n]])if(!rd.owned(l.lots,d,f,.2))return{ok:!1,reason:"Ngoài đất của mình"};for(const d of this.world.colliders)if(this.hitsCollider(u,d))return{ok:!1,reason:"Vướng đồ vật"};for(const d of this.world.lotColliders)if(this.hitsCollider(u,d))return{ok:!1,reason:"Vướng hàng rào"};for(const d of this.world.noBuild)if(u[0]<d[2]&&u[2]>d[0]&&u[1]<d[3]&&u[3]>d[1])return{ok:!1,reason:"Chỗ này để trống"};for(const d of l.built){if(d.id===a)continue;const f=this.rects.get(d.id);if(!(t==="path"!=(d.type==="path")&&t!=="plot"&&d.type!=="plot")&&u[0]<f[2]&&u[2]>f[0]&&u[1]<f[3]&&u[3]>f[1])return{ok:!1,reason:"Đè lên công trình khác"}}if(o.col!=="none"&&o.col!=="posts"){const d={t:"c",x:r.x,z:r.z,r:.45};if(this.hitsCollider(u,d))return{ok:!1,reason:"Đang đứng chỗ đó"}}return{ok:!0,reason:""}}startPlace(t,e=null){this.clearGhost(),this.mode=e?"move":"place",this.type=t,this.moving=e,this.rot=e?e.rot:this.rot;const n=be[t],s=new Wt,r=n.model();r.traverse(o=>{const l=o;l.isMesh&&(l.material=this.ghostOk,l.castShadow=!1),o.isSprite&&(o.visible=!1)}),s.add(r);const a=Xr(n,0);this.pad=new bt(new En(a.w,a.d),this.ghostOk),this.pad.rotation.x=-Math.PI/2,this.pad.position.y=.05,s.add(this.pad),this.ghost=s,this.group.add(s)}clearGhost(){this.ghost&&this.group.remove(this.ghost),this.ghost=null,this.pad=null}rotate(){this.rot=(this.rot+1)%4}aim(t,e){if(this.mode==="remove"||this.mode==="move"&&!this.moving){if(this.marker.material.color.setHex(this.mode==="remove"?15221562:3836648),this.target=this.pick(t),this.target){const o=this.rects.get(this.target.id);this.marker.visible=!0,this.marker.position.set((o[0]+o[2])/2,.08,(o[1]+o[3])/2),this.marker.scale.setScalar(Math.max(o[2]-o[0],o[3]-o[1])*.6+.3)}else this.marker.visible=!1;return}if(!this.ghost)return;const n=Xr(be[this.type],this.rot),s=(o,l)=>Math.round(l)%2?Math.floor(o)+.5:Math.round(o);this.gx=s(t.x,n.w),this.gz=s(t.z,n.d),this.ghost.position.set(this.gx,0,this.gz),this.ghost.rotation.y=this.rot*Math.PI/2;const r=this.check(this.type,this.gx,this.gz,this.rot,e,this.moving?.id??-1);this.valid=r.ok,this.reason=r.reason;const a=r.ok?this.ghostOk:this.ghostBad;this.ghost.traverse(o=>{o.isMesh&&(o.material=a)}),this.ghost.position.y=.02+Math.sin(performance.now()/200)*.03}pick(t){let e=null,n=2.2;for(const s of this.s.built){const r=this.rects.get(s.id),a=Math.max(r[0],Math.min(t.x,r[2])),o=Math.max(r[1],Math.min(t.z,r[3])),l=Math.hypot(t.x-a,t.z-o);l<n&&(n=l,e=s)}return e}place(){if(!this.valid||!this.ghost)return null;const t=this.s;if(this.moving){const n=this.moving;n.x=this.gx,n.z=this.gz,n.rot=this.rot,this.despawn(n.id),this.spawn(n);const s=t.plots.find(r=>r.built===n.id);return s&&(s.x=n.x,s.z=n.z),this.moving=null,this.mode="off",this.clearGhost(),ue.emit("built",n,"move"),n}const e={id:t.nextId++,type:this.type,x:this.gx,z:this.gz,rot:this.rot};if(e.type==="coop"&&(e.data={eggs:0}),t.built.push(e),this.spawn(e),e.type==="plot"){const s={id:Math.max(-1,...t.plots.map(r=>r.id))+1,x:e.x,z:e.z,tilled:!1,wet:!1,crop:null,stage:0,progress:0,built:e.id};t.plots.push(s),ue.emit("plotAdd",s)}return ue.emit("built",e,"place"),e}beginMove(t){const e=this.s.plots.find(s=>s.built===t.id);if(e&&e.crop)return"Luống đang có cây, thu hoạch trước nha";const n=this.objs.get(t.id);return n&&(n.visible=!1),this.startPlace(t.type,t),null}cancel(){if(this.moving){const t=this.objs.get(this.moving.id);t&&(t.visible=!0)}this.moving=null,this.clearGhost(),this.mode="off",this.marker.visible=!1,this.target=null}remove(t){const e=this.s,n=e.plots.find(s=>s.built===t.id);return n&&n.crop?"Luống đang có cây, thu hoạch trước nha":(n&&(e.plots.splice(e.plots.indexOf(n),1),ue.emit("plotRemove",n)),e.built.splice(e.built.indexOf(t),1),this.despawn(t.id),this.rebuildPhysics(),this.marker.visible=!1,this.target=null,ue.emit("built",t,"remove"),Math.floor(be[t.type].price*.5))}despawn(t){const e=this.objs.get(t);e&&(this.group.remove(e),this.lampsBuilt=this.lampsBuilt.filter(n=>n!==e),this.fountains=this.fountains.filter(n=>n!==e)),this.objs.delete(t),this.rects.delete(t)}update(t){for(const e of this.s.built){if(e.type!=="coop")continue;const n=this.objs.get(e.id);if(!n)continue;const s=n.children[0]??n;(n.userData.hens||s.userData?.hens)?.forEach((l,c)=>{const h=l.userData.head;h.rotation.x=Math.max(0,Math.sin(t*6+c*2))*.9,l.position.x=(c?1.2:.6)+Math.sin(t*.5+c)*.4,l.rotation.y=Math.sin(t*.5+c)>0?1.2:-1.2});const a=n.userData.eggs,o=e.data?.eggs||0;if(a&&a.children.length!==o){a.clear();for(let l=0;l<o;l++){const c=Uv();c.position.set((l%3-1)*.12,0,Math.floor(l/3)*.12-.06),a.add(c)}}}}defOf(t){return be[t]}}const bn=i=>i[Math.floor(Math.random()*i.length)];function Zo(i){const t=Hn(i.time),e=i.flags;return e.talk?e.harvest&&!e.talkHarvest?(e.talkHarvest=i.time,"Hồi sáng ngoại thấy con cắt rau rồi đó nghen. Rau tự tay trồng ăn ngọt lắm, bữa nay ngoại xào tỏi cho con ăn."):e.plant&&!e.talkPlant?(e.talkPlant=i.time,"Con gieo hạt rồi hả? Nhớ tưới nước cho đất ẩm, cây mới chịu lớn. Đừng lo, cây của con hổng có héo đâu, ngoại coi chừng cho."):t<9?bn(["Dậy sớm dữ ta! Sáng sớm tưới rau là mát nhứt đó con.","Ngoại quét sân xong là đi chợ. Con muốn ăn gì hông?","Nghe tiếng gà gáy chưa? Ở quê sáng nào cũng vậy đó con."]):t<13?bn(["Trưa nắng gắt, con vô hiên ngồi cho mát, đội nón vô nghen.","Ngoại đang nấu canh chua cá lóc nè, chút nữa ăn cơm.","Hồi nhỏ má con cũng hay trốn ngủ trưa ra ao sen chơi đó."]):t<18?bn(["Chiều mát rồi, ra vườn coi rau có lớn chưa con.","Con thấy quê buồn hông? Ở lâu rồi con sẽ thương lắm cho coi.","Cây xoài đó ông ngoại con trồng hồi má con mới sinh ra."]):t<21?bn(["Cháu ơi! Vô ăn cơm, để nguội hết bây giờ!","Tối rồi, đom đóm bay ngoài ao sen kìa, đẹp lắm.","Ăn cơm xong ngoại kể chuyện hồi xưa cho nghe nghen."]):bn(["Khuya rồi, đi ngủ sớm mai còn dậy tưới rau con.","Nghe tiếng dế kêu hông? Ngủ ngon nghen cháu."]):"Trời ơi, cháu ngoại của ngoại về rồi nè! Đi đường xa có mệt hông con? Vô đây ngoại coi coi, ốm nhom hà."}const y_=i=>bn([`Ui, ${i} con trồng hả? Ngoại cảm ơn cháu nghen, để ngoại nấu canh.`,`Cháu ngoại giỏi quá! ${i} tươi rói luôn nè.`,"Thiệt hả con? Ngoại vui lắm đó. Để dành nấu cho con ăn."]),S_=()=>"Hết hạt giống rồi hả? Ngoại còn mấy gói trong nhà kho nè, con cầm đi gieo tiếp nghen.",Ah=["Hồi xưa nhà mình nghèo lắm, ông ngoại con chèo xuồng đi bán trái cây ngoài chợ nổi, sáng nào cũng đi từ lúc gà gáy.","Cái lu nước đầu hè đó là của bà cố để lại. Nước mưa hứng trong lu uống ngọt lắm con.","Ao sen này hồi trước là ao cá. Má con hồi nhỏ hay ra đây hái gương sen, té xuống ao hoài.","Ngoại hay để dành mấy hột giống ngon nhứt mỗi mùa. Mai mốt ngoại chỉ con cách giữ giống nghen."],b_=(i,t,e)=>bn([`Bữa nay ngoại cần ${i} ${t} để nấu cơm. Con kiếm giúp ngoại nghen, ngoại gửi ${e} xu mua bánh.`,`Con ơi, nhà mình hết ${t} rồi. Con đem cho ngoại ${i} cái nghen, ngoại cho ${e} xu.`,`Mai có khách, ngoại cần ${i} ${t}. Con giúp ngoại hông? Ngoại thưởng ${e} xu đó.`]),w_=()=>bn(["Trời ơi cháu ngoại giỏi quá! Đây, ngoại gửi tiền nè, cất kỹ nghen.","Có cháu về ngoại đỡ cực biết bao nhiêu. Thương con quá!","Đủ rồi đủ rồi! Để ngoại đi nấu liền. Tiền này con mua kẹo nghen."]),E_=()=>bn(["Trời mưa rồi, khỏi tưới rau nghen con. Mưa xuống là cây lớn vù vù.","Mưa giông chiều nè, con vô hiên đứng cho khỏi ướt."]),Ch=["Con ước ngoại luôn mạnh khoẻ!","Ước vườn rau năm nay trúng mùa!","Ước cả nhà được sum vầy Tết này.","Ước mai trời đẹp để ra đồng chơi.","Ước con câu được cá chép vàng!"],Rh=i=>i<17?"Còn sớm mà con, chiều tối hẵng ngủ nghen.":bn(["Ngủ ngon nghen cháu. Mai dậy sớm tưới rau.","Tắt đèn ngủ thôi con, khuya rồi."]),T_="ngoai-oi",Li="saves",sc="slot1",rc="ngoai-oi-slot1";function ac(){return new Promise((i,t)=>{try{const e=indexedDB.open(T_,1);e.onupgradeneeded=()=>e.result.createObjectStore(Li),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}catch(e){t(e)}})}async function A_(i){i.savedAt=Date.now();const t=JSON.parse(JSON.stringify(i));try{localStorage.setItem(rc,JSON.stringify(t))}catch{}try{const e=await ac();return await new Promise((n,s)=>{const r=e.transaction(Li,"readwrite");r.objectStore(Li).put(t,sc),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)}),e.close(),!0}catch{return!1}}async function C_(){let i=null,t=null;try{const n=await ac();i=await new Promise(s=>{const a=n.transaction(Li,"readonly").objectStore(Li).get(sc);a.onsuccess=()=>s(a.result||null),a.onerror=()=>s(null)}),n.close()}catch{}try{const n=localStorage.getItem(rc);n&&(t=JSON.parse(n))}catch{}const e=[i,t].filter(Boolean).sort((n,s)=>(s.savedAt||0)-(n.savedAt||0))[0]||null;try{return dv(e)}catch{return null}}async function R_(){try{localStorage.removeItem(rc)}catch{}try{const i=await ac();await new Promise(t=>{const e=i.transaction(Li,"readwrite");e.objectStore(Li).delete(sc),e.oncomplete=()=>t(),e.onerror=()=>t()}),i.close()}catch{}}const kr={low:0,medium:1024,high:2048},Ph={low:1,medium:1.5,high:2};class P_{constructor(t,e,n){this.quality=e,this.scene=new no,this.cam=new Xe(55,1,.1,600),this.grandma=new s_,this.s=null,this.mode="title",this.running=!0,this.runBtn=!1,this.elapsed=0,this.clock=new Zu,this.hiddenAt=0,this.views=new Map,this.cols=[],this.near=null,this.buildOn=!1,this.fishing=null,this.sleeping=!1,this.saveT=0,this.saveSoonT=-1,this.hudT=0,this.sparkT=0,this.fpsT=0,this.fpsN=0,this.fps=0,this.v=new C,this.ray=new Jl,this.ground=new kn(new C(0,1,0),0),this.scarecrows=[],this.fountainT=0,this.ui=n,this.renderer=new to({canvas:t,antialias:e!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ve,this.renderer.shadowMap.type=xl,this.renderer.setPixelRatio(Math.min(devicePixelRatio,Ph[e])),this.renderer.shadowMap.enabled=kr[e]>0,this.world=new rd(e),this.scene.add(this.world.group),this.world.applyLots([]),this.env=new Qv(this.scene,this.world.smokeAt,kr[e],this.world.lamps),this.critters=new t_(this.scene,this.world.flowerSpots,this.world.roofPerches,e==="low"?4:8),this.fx=new m_(this.scene,220),this.scene.add(this.grandma.av.root),this.rig=new e_(this.cam),this.rig.occluders=this.world.occluders,this.input=new mv(t,document.getElementById("joy"),document.querySelector("#joy .knob")),ue.on("plot",(s,r)=>{this.refreshPlot(s.id);const a=this.views.get(s.id);a&&r!=="water"&&(a.bounce=1)}),ue.on("plotGrow",s=>{this.refreshPlot(s.id);const r=this.views.get(s.id);r&&(r.bounce=1),this.mode==="play"&&this.player&&Math.hypot(this.player.pos.x-s.x,this.player.pos.z-s.z)<14&&(Rt.grow(),s.stage>=ln&&this.ui.toast(`${cn[s.crop].name} chín rồi, hái được rồi nè!`,"good"))}),ue.on("plotAdd",s=>this.makePlotView(s)),ue.on("plotRemove",s=>this.dropPlotView(s.id)),ue.on("physics",()=>this.rebuildCols()),ue.on("built",()=>{this.scarecrows=this.s?this.s.built.filter(s=>s.type==="scarecrow").map(s=>({x:s.x,z:s.z})):[]}),addEventListener("resize",()=>this.resize()),this.resize(),document.addEventListener("visibilitychange",()=>this.visibility()),window.__game=this,this.rebuildCols(),requestAnimationFrame(()=>this.frame())}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e),this.cam.aspect=t/e,this.cam.fov=t<e?68:55,this.cam.updateProjectionMatrix()}visibility(){if(document.hidden)this.running=!1,this.hiddenAt=performance.now(),Rt.pause(!0),this.s&&this.save();else if(!this.running){this.running=!0;const t=(performance.now()-this.hiddenAt)/1e3;this.s&&t>1&&this.farming.tick(t),this.clock.getDelta(),Rt.pause(!1),requestAnimationFrame(()=>this.frame())}}rebuildCols(){this.cols=[...this.world.colliders,...this.world.lotColliders,...this.build?this.build.colliders:[]]}allItems(){const t=[...this.world.items,...this.world.lotItems,...this.build?this.build.items:[]];if(this.s)for(const e of this.s.plots)t.push({id:"plot"+e.id,kind:"plot",x:e.x,z:e.z,r:2.1,data:e.id});return t}start(t,e){if(this.s=t,this.inv=new r_(t),this.farming=new a_(t,this.inv),this.farming.boost=n=>this.scarecrows.some(s=>Math.hypot(s.x-n.x,s.z-n.z)<6)?1.25:1,this.world.applyLots(t.lots),this.build=new M_(t,this.world,this.scene),this.scarecrows=t.built.filter(n=>n.type==="scarecrow").map(n=>({x:n.x,z:n.z})),this.rebuildCols(),this.player=new i_(t.look),this.scene.add(this.player.av.root),this.player.pos.set(t.player.x,0,t.player.z),this.player.ry=t.player.ry,this.rig.yaw=t.player.ry-Math.PI,this.cam.position.set(t.player.x,4,t.player.z+8),t.plots.forEach(n=>this.makePlotView(n)),!e){const n=(Date.now()-t.savedAt)/1e3,s=t.plots.map(r=>r.stage).join();n>3&&this.farming.tick(n),s!==t.plots.map(r=>r.stage).join()&&setTimeout(()=>this.ui.toast("Lúc con đi vắng, rau ngoài vườn đã lớn thêm đó!","good"),1200)}this.grandma.greet=!t.flags.talk,this.grandma.greet&&(this.grandma.pos.set(0,0,23),this.grandma.ry=Math.PI),t.quest||this.newQuest(),this.ui.mountHUD(t,this),this.applySettings(),this.mode="play",this.ui.toast(e?"Đi qua cổng gặp ngoại nha — bấm E để chào!":`Chào mừng ${t.look.name} quay lại!`),e&&this.save()}applySettings(){if(!this.s)return;const t=this.s.settings,e=t.quality;Rt.set({music:t.music,ambient:t.ambient,sfx:t.sfx,ui:t.ui},t.muted),this.rig.sens=t.sens,this.renderer.setPixelRatio(Math.min(devicePixelRatio,Ph[e])),this.resize();const n=kr[e]>0;n!==this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{const r=s.material;r&&(Array.isArray(r)?r:[r]).forEach(a=>a.needsUpdate=!0)})),this.env.setShadows(kr[e]),this.ui.fpsEl.style.display=t.fps?"block":"none"}save(){return this.s?(this.s.player={x:this.player.pos.x,z:this.player.pos.z,ry:this.player.ry},this.saveT=0,this.saveSoonT=-1,A_(this.s)):Promise.resolve(!1)}saveSoon(){this.saveSoonT=1.5}flag(t){this.s&&this.s.flags[t]==null&&(this.s.flags[t]=this.s.time)}count(t,e=1){this.s&&(this.s.flags[t]=(this.s.flags[t]||0)+e)}restart(){sessionStorage.setItem("ngoai-new","1"),R_().then(()=>location.reload())}level(){return Gn(this.s.xp)}addXP(t){const e=this.s,n=Gn(e.xp);e.xp+=t;const s=Gn(e.xp);s>n&&(Rt.levelUp(),this.ui.levelUp(s,dl[s-1],this.unlocksAt(s)),this.fx.burst(this.player.pos.clone().setY(1.6),26,15910986,{up:4,speed:2,size:.06,grav:4})),this.ui.renderHUD()}unlocksAt(t){const e=[];return Object.values(cn).forEach(n=>n.level===t&&e.push("hạt "+n.name.toLowerCase())),Object.values(be).forEach(n=>n.level===t&&e.push(n.name.toLowerCase())),Qs.forEach(n=>n.level===t&&e.push("mua "+n.name)),e}onNewDay(t){const e=this.s;e.lastDay=t,e.built.forEach(n=>{n.type==="coop"&&(n.data=n.data||{},n.data.eggs=Math.min(6,(n.data.eggs||0)+2))}),e.rain=t>1&&Math.random()<.28?{day:t,until:10+Math.random()*8}:null,(!e.quest||e.quest.day<t)&&this.newQuest(),this.ui.toast(`Ngày ${t} bắt đầu${e.rain?" · trời có mưa":" · trời nắng đẹp"}`)}isRaining(){const t=this.s;return!!t.rain&&t.rain.day===zn(t.time)&&Hn(t.time)>=5.5&&Hn(t.time)<t.rain.until}newQuest(){const t=this.s,e=this.level(),n=Object.values(cn).filter(a=>a.level<=e).map(a=>a.produceItem);t.built.some(a=>a.type==="coop")&&n.push("egg"),this.inv.count("rod")&&n.push("caro");const s=n[Math.floor(Math.random()*n.length)],r=s==="bido"?1:2+Math.floor(Math.random()*3);t.quest={day:zn(t.time),item:s,qty:r,reward:Math.round(de[s].sell*r*1.8+20),done:!1}}makePlotView(t){if(this.views.has(t.id))return;const e=new Wt;e.position.set(t.x,0,t.z),this.scene.add(e);const n=Mh(zr.untilled),s=new bt(new Ye(2.6,.22,2.2),n);s.position.y=.11,s.receiveShadow=!0,e.add(s);const r=Mh(8016438),a=new Wt;[-.75,0,.75].forEach(l=>{const c=new bt(new Ye(2.3,.09,.32),r);c.position.set(0,.24,l),c.receiveShadow=!0,a.add(c)}),e.add(a);const o=t.built!=null?this.s.built.find(l=>l.id===t.built):null;o&&(e.rotation.y=o.rot%2?Math.PI/2:0),this.views.set(t.id,{a:e,soil:s,m:n,ridges:a,rm:r,crop:null,key:"-",bounce:0}),this.refreshPlot(t.id)}dropPlotView(t){const e=this.views.get(t);e&&this.scene.remove(e.a),this.views.delete(t)}refreshPlot(t){if(!this.s)return;const e=this.s.plots.find(r=>r.id===t),n=this.views.get(t);if(!e||!n)return;n.a.position.set(e.x,0,e.z),n.m.color.setHex(e.tilled?e.wet?zr.wet:zr.dry:zr.untilled),n.ridges.visible=e.tilled,n.rm.color.setHex(e.wet?5585446:8673338);const s=e.crop?e.crop+e.stage:"";n.key!==s&&(n.crop&&n.a.remove(n.crop),n.crop=null,n.key=s,e.crop&&(n.crop=Th(e.crop,e.stage),n.a.add(n.crop)))}findNear(){const t=this.player.pos,e=this.grandma,n=this.s;if(this.fishing)return{kind:"fishing",label:this.fishing.phase==="bite"?"Giật cần!":"Đang chờ cá… (đi để thôi câu)"};if(this.player.seat)return{kind:"stand",label:"Đứng dậy (đi để đứng)"};if(e.visible&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<2.4)return{kind:"npc",label:e.greet?"Chào ngoại":"Nói chuyện với ngoại"};const s=Math.sin(this.player.ry),r=Math.cos(this.player.ry);let a=null,o=1e9;for(const l of this.allItems()){const c=l.x-t.x,h=l.z-t.z,u=Math.hypot(c,h);if(u>l.r)continue;const d=u-(u>.01?(c*s+h*r)/u:1)*.6+(l.kind==="plot"?0:.3);d<o&&(o=d,a=l)}if(!a)return null;if(a.kind==="plot"){const l=n.plots.find(c=>c.id===a.data);return l?{kind:"plot",label:this.farming.actionFor(l).label,it:a}:null}if(a.kind==="pond")return{kind:"pond",label:this.inv.count("rod")?a.label:"Cần có cần câu (mua ở sạp)",it:a};if(a.kind==="coop"){const l=n.built.find(c=>c.id===a.data);return{kind:"coop",label:l?.data?.eggs?`Lượm ${l.data.eggs} trứng gà`:"Gà chưa đẻ, mai quay lại nha",it:a}}return{kind:a.kind,label:a.label||"",it:a}}selectTool(t){const e=this.s.inv.findIndex(n=>n.id===t);e>=0&&e<Fa&&this.s.hotbar!==e&&(this.s.hotbar=e,this.ui.renderHotbar())}face(t,e){this.player.ry=Math.atan2(t-this.player.pos.x,e-this.player.pos.z)}interact(){const t=this.near;if(t?.kind==="fishing")return this.reel();if(!t||this.player.busy())return;const e=this.s;if(t.kind==="npc")return this.talk();const n=t.it;if(t.kind==="plot")return this.plotAction(e.plots.find(s=>s.id===n.data));switch(t.kind){case"shop":this.ui.toggleShop();break;case"sit":this.player.sit(n.data),this.flag("sit"),this.ui.toast("Gió mát rượi…"),Rt.place();break;case"jar":this.selectTool("can"),this.player.doAction("water",.8,"can",()=>{Rt.water(),this.ui.toast("Múc nước lu đổ đầy bình tưới rồi!")});break;case"door":case"sleep":this.trySleep();break;case"pond":this.startFishing(n);break;case"lot":this.buyLot(n.data);break;case"wish":this.wish();break;case"well":this.wellWater(n);break;case"coop":this.collectEggs(n.data);break;case"shipbox":this.ui.toggleShop(!0);break;case"info":this.ui.toast(n.data);break}}plotAction(t){const e=this.farming.actionFor(t);this.face(t.x,t.z);const n=new C(t.x,.3,t.z);if(e.kind==="till")this.selectTool("hoe"),this.player.doAction("till",1,"hoe",()=>{this.farming.till(t)&&(Rt.hoe(),this.fx.burst(n,14,9068608,{up:2.5,speed:1.2,size:.07}),this.flag("till"),this.addXP(1),this.saveSoon())});else if(e.kind==="plant"){const s=cn[e.crop];if(s.level>this.level()){this.ui.toast(`${s.name} mở ở cấp ${s.level}`,"bad");return}this.selectTool(s.seedItem),this.player.doAction("plant",.85,"seeds",()=>{this.farming.plant(t,e.crop)&&(Rt.seed(),this.fx.burst(n,10,14201978,{up:1.5,speed:.8,size:.04}),this.flag("plant"),this.addXP(2),this.saveSoon())})}else e.kind==="water"?(this.selectTool("can"),this.player.doAction("water",1.3,"can",()=>{this.farming.water(t)&&(Rt.water(),this.flag("water"),this.addXP(1),this.saveSoon())})):e.kind==="harvest"?(this.selectTool("hand"),this.player.doAction("harvest",.85,"veg",()=>{const s=t.crop,r=this.farming.harvest(t);if(!r){this.ui.toast("Kho đồ đầy rồi, bán bớt nha!","bad"),Rt.error();return}Rt.harvest(),this.fx.burst(n.clone().setY(.6),12,8376410,{up:2.4,speed:1,size:.05}),this.fx.burst(n.clone().setY(.8),8,16773792,{up:1.5,speed:.6,size:.04,grav:1});const a=Th(s,ln);a.scale.setScalar(.5),this.fx.popItem(a,n.clone().setY(.4),()=>this.player.pos.clone().setY(1)),this.floatAt(n.clone().setY(1.4),`+${r} ${de[cn[s].produceItem].name}`),setTimeout(()=>Rt.pickup(),700),this.flag("harvest"),this.count("harvestN"),this.addXP(3+r),this.saveSoon()})):this.ui.toast(e.label)}floatAt(t,e){const n=t.clone().project(this.cam);this.ui.float((n.x+1)/2*innerWidth,(1-n.y)/2*innerHeight,e)}trySleep(){const t=Hn(this.s.time);if(t>=5&&t<17){this.ui.toast(Rh(t));return}this.sleep()}sleep(){if(this.sleeping)return;this.sleeping=!0;const t=this.s;Rt.close(),this.ui.sleepFade(Rh(20),()=>{const e=(zn(t.time)-(Hn(t.time)<5?1:0))*bi+360,n=Math.max(0,e-t.time);t.time=e,this.farming.tick(n*_h/bi),this.player.stand(),this.flag("sleep"),this.count("sleepN")},()=>{this.sleeping=!1,this.save()})}buyLot(t){const e=Qs.find(s=>s.id===t),n=this.s;if(!n.lots.includes(t)){if(this.level()<e.level){this.ui.toast(`Cần đạt cấp ${e.level} mới mua được ${e.name}`,"bad"),Rt.error();return}this.ui.confirm(`Mua ${e.name}?`,`${e.desc} Giá ${e.price} xu. Mua xong đất được dọn sạch và mở rộng chỗ xây.`,`Mua · ${e.price} xu`,()=>{if(n.money<e.price){this.ui.toast("Không đủ xu rồi con","bad"),Rt.error();return}n.money-=e.price,ue.emit("money",-e.price),n.lots.push(t),this.world.applyLots(n.lots),this.rebuildCols(),this.flag("lot"),this.addXP(20),Rt.chime(),new C((e.rect[0]+e.rect[2])/2,1,(e.rect[1]+e.rect[3])/2),this.fx.burst(this.player.pos.clone().setY(1.5),30,15910986,{up:4,speed:2.4,size:.07}),this.ui.toast(`Đã mua ${e.name}! Bấm B để xây trên đất mới.`,"good"),this.save()})}}wish(){const t=this.s,e=zn(t.time);if(t.wishDay===e){this.ui.toast("Hôm nay ước rồi, mai ước tiếp nha");return}if(t.money<1){this.ui.toast("Cần 1 xu để ước","bad");return}t.money-=1,ue.emit("money",-1),t.wishDay=e,this.addXP(3),t.friend=Math.min(100,t.friend+1),Rt.chime(),this.flag("wish");const n=this.nearestFountain();this.fx.burst(new C(n.x,1,n.z),18,16773792,{up:3,speed:1.2,size:.05,grav:3}),this.ui.toast("“"+Ch[Math.floor(Math.random()*Ch.length)]+"”","good")}nearestFountain(){const t=[...this.world.fountains,...this.build.fountains];let e=t[0].position,n=1e9;return t.forEach(s=>{const r=s.position.distanceTo(this.player.pos);r<n&&(n=r,e=s.position)}),e}wellWater(t){const e=this.s;this.selectTool("can"),this.face(t.x,t.z),this.player.doAction("water",1.4,"can",()=>{const n=e.plots.filter(s=>s.crop&&!s.wet&&s.stage<ln&&Math.hypot(s.x-t.x,s.z-t.z)<7);if(!n.length){this.ui.toast("Mấy luống gần giếng đều ướt rồi");return}n.forEach(s=>{this.farming.water(s),this.fx.burst(new C(s.x,.6,s.z),10,8048880,{up:1.6,speed:.8,size:.04})}),Rt.water(),this.addXP(n.length),this.flag("water"),this.ui.toast(`Đã tưới ${n.length} luống bằng nước giếng`,"good"),this.saveSoon()})}collectEggs(t){const e=this.s.built.find(r=>r.id===t),n=e?.data?.eggs||0;if(!n){this.ui.toast("Gà chưa đẻ, mai quay lại nha");return}const s=this.inv.add("egg",n);if(!s){this.ui.toast("Kho đồ đầy rồi","bad");return}e.data.eggs=n-s,Rt.pickup(),this.floatAt(this.player.pos.clone().setY(2),`+${s} trứng gà`),this.addXP(2*s),this.flag("egg"),this.count("eggN",s),this.saveSoon()}startFishing(t){if(!this.inv.count("rod")){this.ui.toast("Mua cần câu ở sạp cô Út trước nha (60 xu)","bad");return}const e=t.data,n=this.player.pos,s=new C(e.x-n.x,0,e.z-n.z),r=s.length();s.normalize();const a=Math.max(1.2,Math.min(3.2,r-e.r*.4)),o=n.clone().addScaledVector(s,a);Math.hypot(o.x-e.x,o.z-e.z)>e.r&&o.set(e.x,0,e.z).addScaledVector(s,-e.r*.5),o.y=.06,this.face(e.x,e.z);const l=$v();l.position.copy(o),this.scene.add(l),this.fishing={phase:"wait",t:0,bite:2.5+Math.random()*4,bob:l,at:o},this.player.action="fish",this.player.at=0,this.player.dur=9999,this.player.av.hold("rod"),Rt.cast(),this.fx.burst(o,8,12576496,{up:1.2,speed:.6,size:.04})}stopFishing(t){this.fishing&&(this.scene.remove(this.fishing.bob),this.fishing=null,this.player.action=null,this.player.av.hold(null),t&&this.ui.toast(t))}reel(){const t=this.fishing;if(t.phase!=="bite"){this.stopFishing("Kéo lên sớm quá, cá chưa cắn câu");return}const e=Math.random(),n=e<.06?"cavang":e<.33?"caloc":"caro",s=this.inv.add(n,1);if(this.fx.burst(t.at.clone().setY(.2),14,12576496,{up:2.5,speed:1,size:.05}),Rt.splash(),this.stopFishing(),this.player.doAction("reel",.6,"rod"),!s){this.ui.toast("Kho đồ đầy, thả cá về ao","bad");return}this.floatAt(this.player.pos.clone().setY(2),`+1 ${de[n].name}`),this.addXP(n==="cavang"?15:5),this.flag("fish"),this.count("fishN"),n==="cavang"&&this.ui.toast("Trời ơi! Cá chép vàng hiếm lắm đó!","good"),this.saveSoon()}updateFishing(t,e){const n=this.fishing;if(!n)return;if(e)return this.stopFishing("Thôi câu");n.t+=t;const s=n.bob;s.position.y=n.at.y+Math.sin(this.elapsed*3)*.02,n.phase==="wait"&&n.t>n.bite&&(n.phase="bite",n.t=0,Rt.bite(),this.ui.toast("Cá cắn câu! Bấm E / Làm ngay!","good")),n.phase==="bite"&&(s.position.y=n.at.y-.08-Math.abs(Math.sin(this.elapsed*18))*.06,n.t>1.3&&(n.phase="wait",n.t=0,n.bite=2+Math.random()*4,this.ui.toast("Cá sổng mất rồi… chờ con khác")))}toggleBuild(t=!this.buildOn){t&&(this.fishing||this.player.seat)&&(this.stopFishing(),this.player.stand()),this.buildOn=t,t||this.build.cancel(),this.ui.buildMode(t),t&&this.flag("buildOpen")}selectBuild(t){const e=be[t];if(e.level>this.level()){this.ui.toast(`${e.name} mở ở cấp ${e.level}`,"bad"),Rt.error();return}this.build.startPlace(t),Rt.click()}setBuildTool(t){this.build.cancel(),t!=="off"&&(this.build.mode=t),this.ui.buildStatus()}confirmBuild(){const t=this.build,e=this.s;if(t.mode==="remove"||t.mode==="move"&&!t.moving){const o=t.target;if(!o){this.ui.toast("Đưa khung tới món muốn chọn","bad");return}if(t.mode==="move"){const c=t.beginMove(o);c?(this.ui.toast(c,"bad"),Rt.error()):Rt.click(),t.marker.visible=!1,this.ui.buildStatus();return}const l=be[o.type].name;this.ui.confirm(`Dỡ ${l}?`,`Nhận lại ${Math.floor(be[o.type].price*.5)} xu (một nửa giá).`,"Dỡ",()=>{o.type==="coop"&&o.data?.eggs&&this.inv.add("egg",o.data.eggs);const c=t.remove(o);if(typeof c=="string"){this.ui.toast(c,"bad"),Rt.error();return}e.money+=c,ue.emit("money",c),Rt.place(),this.fx.burst(new C(o.x,.5,o.z),16,13213808,{up:2,speed:1.4,size:.07}),this.ui.toast(`Đã dỡ ${l} · +${c} xu`),this.saveSoon()});return}if(t.mode!=="place"&&t.mode!=="move")return;const n=be[t.type];if(!t.valid){this.ui.toast(t.reason||"Không đặt được chỗ này","bad"),Rt.error();return}const s=!!t.moving;if(!s&&e.money<n.price){this.ui.toast("Không đủ xu","bad"),Rt.error();return}const r=t.place();if(!r)return;s||(e.money-=n.price,ue.emit("money",-n.price),this.addXP(n.cat==="house"?25:n.price>=200?10:3),this.flag("build"),this.count("buildN")),Rt.build(),this.fx.burst(new C(r.x,.3,r.z),18,15320202,{up:2.2,speed:1.6,size:.07});const a=t.objs.get(r.id);a&&(a.scale.setScalar(.2),a.userData.pop=0),!s&&e.money>=n.price&&t.startPlace(t.type),this.ui.buildStatus(),this.saveSoon()}buildCursor(){const t=this.input;if(performance.now()-t.mouse.t<2500&&!this.rig.pov){const s=new rt(t.mouse.x/innerWidth*2-1,-(t.mouse.y/innerHeight)*2+1);this.ray.setFromCamera(s,this.cam);const r=new C;if(this.ray.ray.intersectPlane(this.ground,r)&&r.distanceTo(this.player.pos)<22)return r}const e=this.build.ghost&&be[this.build.type]?Xr(be[this.build.type],this.build.rot):{w:1,d:1},n=Math.max(e.w,e.d)/2+1.4;return this.player.pos.clone().add(new C(Math.sin(this.player.ry)*n,0,Math.cos(this.player.ry)*n))}talk(){const t=this.s,e=this.grandma,n=!t.flags.talk;e.talking=!0,this.face(e.pos.x,e.pos.z),n&&this.player.doAction("wave",1.2,null);const s=n?Zo(t):this.isRaining()&&Math.random()<.5?E_():Zo(t);n&&(this.flag("talk"),e.greet=!1,t.friend=Math.min(100,t.friend+5)),this.showTalk(s),this.saveSoon()}showTalk(t){const e=this.s,n=zn(e.time),s=e.inv.find(o=>o.id&&de[o.id].kind==="produce"),r=e.quest,a=r&&!r.done&&this.inv.count(r.item)>=r.qty;this.ui.dialog(t,[r&&!r.done?a?{k:"qgive",t:`Đưa ngoại ${r.qty} ${de[r.item].name.toLowerCase()}`,icon:"gift"}:{k:"qask",t:"Ngoại cần con giúp gì?",icon:"book"}:{k:"chat",t:"Ngoại kể chuyện đi",icon:"chat"},{k:"gift",t:s?`Tặng ngoại ${de[s.id].name.toLowerCase()}`:"Tặng quà (chưa có gì)",icon:"heart",off:!s},{k:"seed",t:e.seedDay===n?"Đã xin hạt hôm nay rồi":"Xin ngoại hạt giống",icon:"seed_raumuong",off:e.seedDay===n},{k:"bye",t:"Dạ, con đi chơi nghen",icon:"wave"}],o=>this.pick(o))}pick(t){const e=this.s,n=zn(e.time);if(t==="bye")return this.endTalk();if(t==="chat"){const s=e.talks%2?Zo(e):Ah[Math.floor(e.talks/2)%Ah.length];e.talks++,e.flags["chat"+n]==null&&(e.flags["chat"+n]=e.time,e.friend=Math.min(100,e.friend+2)),this.showTalk(s)}if(t==="qask"){const s=e.quest;this.showTalk(b_(s.qty,de[s.item].name.toLowerCase(),s.reward)),this.flag("questSeen")}if(t==="qgive"){const s=e.quest;if(!this.inv.remove(s.item,s.qty))return;s.done=!0,e.money+=s.reward,ue.emit("money",s.reward),e.friend=Math.min(100,e.friend+8),this.addXP(25),this.count("questN"),this.flag("quest"),Rt.chime(),this.showTalk(w_())}if(t==="gift"){const s=e.inv.find(a=>a.id&&de[a.id].kind==="produce");if(!s)return;const r=s.id;this.inv.remove(r,1),e.friend=Math.min(100,e.friend+(e.giftDay===n?2:10)),e.giftDay=n,this.flag("gift"),this.addXP(3),Rt.chime(),this.showTalk(y_(de[r].name.toLowerCase()))}if(t==="seed"){if(e.seedDay===n)return;e.seedDay=n;const s=this.level(),r=Object.values(cn).filter(o=>o.level<=s),a=r[Math.floor(Math.random()*r.length)];this.inv.add("seed_raumuong",3),this.inv.add(a.seedItem,2),Rt.pickup(),this.ui.toast(`Ngoại cho 3 hạt rau muống + 2 ${de[a.seedItem].name.toLowerCase()}`,"good"),this.showTalk(S_())}this.ui.renderHUD(),this.saveSoon()}endTalk(){this.ui.closeDialog(),this.grandma.talking=!1,this.saveSoon()}surface(){const t=this.player.pos;return t.x>-8&&t.x<8&&t.z>-9&&t.z<0||Math.hypot(t.x,t.z-36)<10?"brick":Math.abs(t.x)<1.6&&t.z>-2||this.s.plots.some(e=>Math.abs(e.x-t.x)<1.4&&Math.abs(e.z-t.z)<1.2)?"dirt":"grass"}fountainSpray(t){if(this.fountainT-=t,!(this.fountainT>0)){this.fountainT=.12;for(const e of[...this.world.fountains,...this.build?this.build.fountains:[]])this.player&&e.position.distanceTo(this.player.pos)>35&&this.mode==="play"||(e.userData.spouts??e.children[0]?.userData.spouts??[]).forEach((n,s)=>this.fx.burst(e.position.clone().add(n),s===0?3:2,14217466,{up:s===0?2.2:.6,speed:s===0?.5:1.1,size:.05,grav:7,life:.9}))}}frame(){if(!this.running)return;requestAnimationFrame(()=>this.frame());const t=Math.min(this.clock.getDelta(),.05);if(this.elapsed+=t,Ql.value=this.elapsed,this.fpsN++,this.fpsT+=t,this.fpsT>.5&&(this.fps=Math.round(this.fpsN/this.fpsT),this.fpsN=0,this.fpsT=0,this.ui.fpsEl&&(this.ui.fpsEl.textContent=this.fps+" FPS")),this.mode==="title"||!this.s){const f=this.elapsed*.04;this.cam.position.set(Math.sin(f)*26,11,26+Math.cos(f)*18),this.cam.lookAt(0,2,18),this.env.update(t,15.5*60,new C(0,0,18),this.elapsed),this.critters.update(t,this.elapsed,0,new C(99,0,99)),this.fountainSpray(t),this.fx.update(t),this.grandma.update(t,8*60,new C(99,0,99),this.world.colliders),this.renderer.render(this.scene,this.cam),this.input.endFrame();return}const e=this.s,n=this.input,s=this.ui;this.sleeping||(e.time+=t*bi/_h),Rt.hour=Hn(e.time);const r=zn(e.time);r>e.lastDay&&this.onNewDay(r);const a=this.isRaining();if(this.farming.raining=a,this.env.wantRain=a,Rt.rain(a),a&&this.flag("rain"),this.farming.tick(t),n.hit("Escape")&&(s.panel==="dialog"?this.endTalk():s.panel?s.closeAll():this.buildOn?this.build.mode!=="off"?(this.build.cancel(),s.buildStatus()):this.toggleBuild(!1):this.fishing?this.stopFishing("Thôi câu"):s.toggleMenu()),s.panel==="dialog"){(n.hit("KeyE")||n.hit("Enter"))&&s.dialogKey(-1);for(let f=0;f<4;f++)n.hit("Digit"+(f+1))&&s.dialogKey(f)}else if(s.panel==="confirm")(n.hit("Enter")||n.hit("KeyE"))&&s.confirmKey(!0);else if(n.hit("KeyI")&&(s.panel===null||s.panel==="inv")&&s.toggleInv(),!s.panel)if(n.hit("KeyB")&&this.toggleBuild(),n.hit("KeyV")&&(this.rig.toggle(),s.toast(this.rig.pov?"Góc nhìn thứ nhất":"Góc nhìn thứ ba")),this.buildOn)n.hit("KeyR")&&(this.build.rotate(),Rt.click()),n.hit("KeyX")&&this.setBuildTool(this.build.mode==="remove"?"off":"remove"),n.hit("KeyM")&&this.setBuildTool(this.build.mode==="move"?"off":"move"),(n.hit("KeyE")||n.click)&&this.confirmBuild();else{for(let f=0;f<Fa;f++)n.hit("Digit"+(f+1))&&(e.hotbar=f,s.renderHotbar());n.hit("KeyE")&&this.interact()}const o=!!s.panel||this.sleeping,l=o?{x:0,z:0}:n.moveVec(),c=!o&&n.hit("Space")&&!this.fishing;o||this.rig.input(n.look.x,n.look.y,n.zoom),c&&!this.player.air&&!this.player.busy()&&!this.player.seat&&Rt.jump();const h=this.player.air,u=this.fishing?this.player.action:null;if(this.fishing&&(this.player.at=.5),this.player.update(t,l,n.running(this.runBtn),c,this.rig.basis(),this.cols,this.rig.pov?this.rig.yaw:null,f=>Rt.step(this.surface(),f)),this.fishing&&u&&(this.player.action=u,this.player.av.hold("rod")),this.updateFishing(t,Math.hypot(l.x,l.z)>.2),h&&!this.player.air&&Rt.land(),this.player.action==="water"&&this.player.at>.15&&this.player.at<.9){this.player.av.handR.getWorldPosition(this.v);const f=new C(Math.sin(this.player.ry)*.8,-.4,Math.cos(this.player.ry)*.8);this.fx.pour(this.v.add(f.clone().multiplyScalar(.35)),f)}this.buildOn&&this.build.mode!=="off"&&(this.build.aim(this.buildCursor(),this.player.pos),s.buildStatus()),this.build.objs.forEach(f=>{if(f.userData.pop!=null){f.userData.pop+=t*3;const m=Math.min(1,f.userData.pop);f.scale.setScalar(m<1?1+Math.sin(m*Math.PI)*.15-(1-m)*.8:1),m>=1&&(f.scale.setScalar(1),delete f.userData.pop)}}),this.build.update(this.elapsed);const d=this.grandma;d.update(t,e.time,this.player.pos,this.cols.filter(f=>f.t==="c")),d.greet&&!d.talking&&!s.panel&&Math.hypot(d.pos.x-this.player.pos.x,d.pos.z-this.player.pos.z)<3&&d.speed===0&&this.talk(),d.talking&&s.panel!=="dialog"&&(d.talking=!1),this.near=o||this.buildOn?null:this.findNear(),s.prompt(this.buildOn?null:this.near?.label||null),this.env.update(t,e.time,this.player.pos,this.elapsed),this.critters.update(t,this.elapsed,this.env.night,this.player.pos),this.fountainSpray(t),this.fx.update(t),this.views.forEach(f=>{if(f.bounce<=0||!f.crop)return;f.bounce=Math.max(0,f.bounce-t*2.2);const m=f.bounce;f.crop.scale.set(1+Math.sin(m*9)*.12*m,1+Math.sin(m*9+1)*.25*m,1+Math.sin(m*9)*.12*m)}),this.sparkT-=t,this.sparkT<0&&(this.sparkT=.9,e.plots.forEach(f=>{f.crop&&f.stage>=ln&&Math.hypot(f.x-this.player.pos.x,f.z-this.player.pos.z)<30&&this.fx.burst(new C(f.x,.9,f.z),2,16773792,{up:.6,speed:.5,grav:-.4,size:.035,life:1.2,spread:3})})),this.rig.update(t,this.player.pos,1.42),this.player.av.root.visible=!this.rig.pov,this.hudT-=t,this.hudT<0&&(this.hudT=.5,s.renderHUD()),this.saveT+=t,this.saveT>30&&this.save(),this.saveSoonT>0&&(this.saveSoonT-=t,this.saveSoonT<=0&&this.save()),this.renderer.render(this.scene,this.cam),n.endFrame()}}const Gt=(i,t="0 0 48 48")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,ot='stroke="#4a3220" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"',Lh={hand:Gt(`<path ${ot} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),hoe:Gt(`<path ${ot} fill="#c98a4a" d="M33 6l4 3-22 31-4-3z"/><path ${ot} fill="#a8b0b8" d="M30 4l12 4-3 7-12-4z"/>`),can:Gt(`<path ${ot} fill="#3fb0a4" d="M10 18h22v20a4 4 0 01-4 4H14a4 4 0 01-4-4z"/><path ${ot} fill="none" d="M14 18c0-6 14-6 14 0"/><path ${ot} fill="#3fb0a4" d="M32 24l10-8 2 3-10 10z"/><circle cx="43" cy="14" r="1.6" fill="#7ad0f0"/><circle cx="46" cy="18" r="1.4" fill="#7ad0f0"/>`),seed_raumuong:Gt(`<path ${ot} fill="#f2dcae" d="M10 12h28l-2 30H12z"/><path ${ot} fill="#e2c48e" d="M10 12l4-5h20l4 5"/><path ${ot} fill="#5fb04a" d="M24 36V24m0 0c-6 0-8-5-8-5s5-2 8 5zm0 0c6 0 8-6 8-6s-6-1-8 6z"/>`),seed_caixanh:Gt(`<path ${ot} fill="#d8ecd0" d="M10 12h28l-2 30H12z"/><path ${ot} fill="#bcd8b0" d="M10 12l4-5h20l4 5"/><ellipse ${ot} cx="24" cy="28" rx="7" ry="8" fill="#3f9a3a"/><path stroke="#cfe8a8" stroke-width="2" d="M24 21v14"/>`),raumuong:Gt(`<g ${ot}><path fill="#9fd06a" d="M18 44l4-22m4 22l-1-24m6 24l-4-22"/><path fill="#3f9a3a" d="M22 22l-10-10 12 2zM25 20l2-14 6 12zM28 22l12-8-4 12z"/></g><path ${ot} fill="#e8433a" d="M16 34h18v4H16z"/>`),caixanh:Gt(`<g ${ot}><path fill="#2f8a3a" d="M24 44c-10 0-14-10-12-22 4 2 8 8 12 22zM24 44c10 0 14-10 12-22-4 2-8 8-12 22z"/><path fill="#5fb04a" d="M24 44c-6-6-6-24 0-36 6 12 6 30 0 36z"/></g><path stroke="#dff0c0" stroke-width="2" d="M24 14v28"/>`),coin:Gt(`<circle ${ot} cx="24" cy="24" r="17" fill="#f2c84a"/><circle cx="24" cy="24" r="11" fill="none" stroke="#c9952a" stroke-width="2.4"/><path stroke="#c9952a" stroke-width="3" d="M24 17v14M20 21h8"/>`),heart:Gt(`<path ${ot} fill="#ef6a7a" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),heartE:Gt(`<path ${ot} fill="#f3e2cf" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),sun:Gt(`<circle ${ot} cx="24" cy="24" r="9" fill="#f6c33a"/><g ${ot}><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></g>`),moon:Gt(`<path ${ot} fill="#f2e6b0" d="M30 6a18 18 0 1012 30A15 15 0 0130 6z"/>`),bag:Gt(`<path ${ot} fill="#c98a4a" d="M8 18h32l-3 24H11z"/><path ${ot} fill="none" d="M17 18c0-10 14-10 14 0"/><path ${ot} fill="#e0a868" d="M8 18h32v6H8z"/>`),menu:Gt(`<g ${ot}><path d="M10 14h28M10 24h28M10 34h28"/></g>`),jump:Gt(`<g ${ot} fill="none"><path d="M24 40V12M14 22l10-10 10 10"/></g>`),run:Gt(`<g ${ot} fill="none"><circle cx="30" cy="9" r="4" fill="#4a3220"/><path d="M18 20l8-4 6 6 6 2M26 16l-4 12 8 6-2 10M22 28l-8 2-4 8"/></g>`),act:Gt(`<path ${ot} fill="#fff6e6" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),eye:Gt(`<path ${ot} fill="#fff6e6" d="M4 24s8-13 20-13 20 13 20 13-8 13-20 13S4 24 4 24z"/><circle cx="24" cy="24" r="6" fill="#4a3220"/>`),hammer:Gt(`<path ${ot} fill="#c98a4a" d="M22 20l5 5-16 16-5-5z"/><path ${ot} fill="#a8b0b8" d="M20 10l10-4 12 12-4 10-6-6-4 2-6-6 2-4z"/>`),close:Gt(`<g ${ot}><path d="M14 14l20 20M34 14L14 34"/></g>`),book:Gt(`<path ${ot} fill="#e8605a" d="M8 8h24a6 6 0 016 6v26H14a6 6 0 01-6-6z"/><path ${ot} fill="#fff6e6" d="M14 34h24v6H14a3 3 0 010-6z"/>`),gear:Gt(`<circle ${ot} cx="24" cy="24" r="7" fill="#fff6e6"/><path ${ot} fill="none" d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/>`),save:Gt(`<path ${ot} fill="#5a9ad8" d="M8 8h26l6 6v26H8z"/><path ${ot} fill="#fff6e6" d="M14 8h16v10H14zM14 28h20v12H14z"/>`),home:Gt(`<path ${ot} fill="#e8a05a" d="M6 24L24 8l18 16"/><path ${ot} fill="#fff6e6" d="M11 21v19h26V21"/><path ${ot} fill="#c98a4a" d="M20 40V29h8v11"/>`),chat:Gt(`<path ${ot} fill="#fff6e6" d="M6 10h36v22H20l-8 8v-8H6z"/><g fill="#4a3220"><circle cx="16" cy="21" r="2.4"/><circle cx="24" cy="21" r="2.4"/><circle cx="32" cy="21" r="2.4"/></g>`),gift:Gt(`<path ${ot} fill="#ef6a7a" d="M8 20h32v20H8z"/><path ${ot} fill="#f2c84a" d="M6 14h36v6H6zM21 14h6v26h-6z"/><path ${ot} fill="none" d="M24 14c-4-8-12-6-8 0m8 0c4-8 12-6 8 0"/>`),rod:Gt(`<path ${ot} fill="none" d="M8 42L40 6"/><path stroke="#9a6a3c" stroke-width="4" stroke-linecap="round" d="M8 42L22 26"/><path stroke="#4a3220" stroke-width="1.4" fill="none" d="M40 6c4 10 2 24-4 30"/><circle ${ot} cx="36" cy="38" r="3" fill="#e8433a"/><circle ${ot} cx="13" cy="37" r="3.5" fill="#7a8a9a"/>`),seed_cachua:Br("#f6d2c8",`<circle ${ot} cx="24" cy="29" r="7" fill="#e0453a"/><path fill="#5a9a4a" d="M20 22l4 3 4-3-2 4h-4z"/>`),seed_daubap:Br("#e2efcf",`<path ${ot} fill="#9ac85a" d="M24 20c4 6 4 14 0 18-4-4-4-12 0-18z"/>`),seed_muoigio:Br("#f6d6ea",`<g ${ot} fill="#e8508a"><circle cx="24" cy="24" r="4"/><circle cx="24" cy="34" r="4"/><circle cx="19" cy="29" r="4"/><circle cx="29" cy="29" r="4"/></g><circle cx="24" cy="29" r="2.6" fill="#f6e04a"/>`),seed_bido:Br("#f8e0c4",`<ellipse ${ot} cx="24" cy="30" rx="9" ry="7" fill="#e9843a"/><path ${ot} fill="none" d="M24 23v14M18 24c-2 4-2 8 0 12M30 24c2 4 2 8 0 12"/>`),cachua:Gt(`<circle ${ot} cx="24" cy="27" r="15" fill="#e0453a"/><path ${ot} fill="#5a9a4a" d="M16 14l8 5 8-5-3 7h-10z"/><circle cx="18" cy="23" r="3" fill="#fff" opacity=".45"/>`),daubap:Gt(`<g ${ot}><path fill="#9ac85a" d="M14 40C10 28 18 12 30 6c2 10-4 28-16 34z"/><path fill="#7ab04a" d="M26 42c-2-12 6-26 16-30 0 10-6 26-16 30z"/></g><path stroke="#cfe8a8" stroke-width="2" fill="none" d="M16 36c2-10 8-20 12-26"/>`),muoigio:Gt(`<g ${ot}><path fill="#7ab84a" d="M24 44V24"/><circle cx="24" cy="14" r="5" fill="#e8508a"/><circle cx="16" cy="20" r="5" fill="#f2a83a"/><circle cx="32" cy="20" r="5" fill="#c85ad8"/><circle cx="20" cy="28" r="5" fill="#f6e04a"/><circle cx="29" cy="29" r="5" fill="#e8433a"/></g>`),bido:Gt(`<g ${ot}><ellipse cx="24" cy="29" rx="18" ry="13" fill="#e9843a"/><path fill="none" d="M24 16v26M14 18c-4 6-4 16 0 22M34 18c4 6 4 16 0 22"/><path fill="#6a5a3a" d="M22 10h4v7h-4z"/></g>`),egg:Gt(`<ellipse ${ot} cx="24" cy="26" rx="12" ry="16" fill="#fbf2e0"/><ellipse cx="19" cy="20" rx="3" ry="5" fill="#fff" opacity=".8"/>`),caro:Jo("#8a9a6a","#c9d08a"),caloc:Jo("#5a6a7a","#a8b4be"),cavang:Jo("#f2b83a","#fbe08a"),rain:Gt(`<path ${ot} fill="#e8e6dc" d="M12 26a8 8 0 010-16 10 10 0 0119-2 7 7 0 015 13z"/><g stroke="#5aa0d8" stroke-width="3" stroke-linecap="round"><path d="M16 32l-3 8M26 32l-3 8M36 32l-3 8"/></g>`),star:Gt(`<path ${ot} fill="#f2c84a" d="M24 5l5.6 12 13 1.4-9.8 8.8 2.8 12.8L24 33.4 12.4 40l2.8-12.8L5.4 18.4l13-1.4z"/>`),land:Gt(`<path ${ot} fill="#c9a070" d="M4 34l12-10 10 6 8-8 10 12v8H4z"/><path ${ot} fill="#e8433a" d="M30 8v14"/><path ${ot} fill="#e8433a" d="M30 8l10 4-10 4z"/>`),rotate:Gt(`<g ${ot} fill="none"><path d="M38 24a14 14 0 11-4-10"/><path d="M36 6v9h-9"/></g>`),move:Gt(`<g ${ot} fill="none"><path d="M24 6v36M6 24h36M24 6l-5 5M24 6l5 5M24 42l-5-5M24 42l5-5M6 24l5-5M6 24l5 5M42 24l-5-5M42 24l-5 5"/></g>`),trash:Gt(`<g ${ot}><path fill="#e8605a" d="M12 14h24l-2 28H14z"/><path fill="none" d="M8 14h32M19 14V8h10v6M20 20v16M28 20v16"/></g>`),check:Gt(`<g ${ot} fill="none" stroke-width="4"><path d="M10 25l9 9 19-20"/></g>`),wave:Gt(`<path ${ot} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/><g ${ot} fill="none"><path d="M6 8c-3 4-3 8 0 12M42 34c3-4 3-8 0-12"/></g>`)};function Br(i,t){return Gt(`<path ${ot} fill="${i}" d="M10 12h28l-2 30H12z"/><path ${ot} fill="#d9bf9c" d="M10 12l4-5h20l4 5"/>${t}`)}function Jo(i,t){return Gt(`<path ${ot} fill="${i}" d="M6 24c8-12 24-12 32 0-8 12-24 12-32 0z"/><path ${ot} fill="${i}" d="M38 24l8-8v16z"/><path fill="${t}" d="M12 26c8 4 18 4 24 0-6 6-18 6-24 0z"/><circle cx="14" cy="22" r="2.2" fill="#241a16"/>`)}const ne=i=>Lh[i]||Lh.hand,Es={};function L_(){if(Object.keys(Es).length)return Es;let i;try{i=new to({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return Es}i.setSize(112,112,!1),i.outputColorSpace=Ve;const t=new no,e=new Xe(30,1,.1,200);t.add(new co(16774872,13213808,1.4));const n=new ho(16774364,1.6);n.position.set(3,6,4),t.add(n),t.add(new Zl(16777215,.4));for(const s of Object.values(be)){const r=s.model();r.traverse(u=>{u.isSprite&&(u.visible=!1)}),t.add(r);const a=new $n().setFromObject(r),o=a.getCenter(new C),l=a.getSize(new C),h=(Math.max(l.x,l.y,l.z)*.62+.2)/Math.sin(_u.degToRad(15));e.position.set(o.x+h*.55,o.y+h*.5,o.z+h*.67),e.lookAt(o),i.render(t,e),Es[s.id]=i.domElement.toDataURL("image/png"),t.remove(r)}return i.dispose(),i.forceContextLoss(),Es}const zt=(i,t=document)=>t.querySelector(i),on=i=>{const t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},I_=i=>"#"+i.toString(16).padStart(6,"0"),D_='<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="20" fill="#f0c8a0" stroke="#4a3220" stroke-width="2.4"/><path d="M12 32c0-14 10-20 20-20s20 6 20 20c-4-6-10-9-20-9s-16 3-20 9z" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="32" cy="10" r="7" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="24" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="40" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="24" cy="37" r="1.8" fill="#241a16"/><circle cx="40" cy="37" r="1.8" fill="#241a16"/><path d="M27 46q5 4 10 0" stroke="#8a3a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="18" cy="44" r="3" fill="#ff9f9f" opacity=".6"/><circle cx="46" cy="44" r="3" fill="#ff9f9f" opacity=".6"/></svg>';class U_{constructor(){this.root=zt("#ui"),this.panel=null,this.typing=0,this.selSlot=-1,this.shopQty={},this.sellOnly=!1,this.buildCat="farm",this.buildEl=null,this.confirmYes=null,document.addEventListener("pointerdown",t=>{t.target.closest("button,.slot,.sw")&&Rt.click()},!0)}blocking(){return!!this.panel}title(t,e,n){this.panel="title";const s=on(`<div class="screen title"><div class="logo"><small>một mùa hè ở miền Tây</small><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div>
      <div class="col">${t?'<button class="btn big" data-k="c">Chơi tiếp</button>':""}<button class="btn ${t?"":"big"}" data-k="n">Chơi mới</button>
      <a class="btn ghost" href="../index.html">← Game Hội Bạn</a></div><p class="hint">${_i()?"Cần xoay ngang để chơi thoải mái nhất":"WASD đi · kéo chuột xoay · E tương tác"} · bản 1.0</p></div>`);s.addEventListener("click",r=>{const a=r.target.closest("[data-k]")?.getAttribute("data-k");a&&(Rt.unlock(),!(a==="n"&&t&&!confirm("Bắt đầu lại sẽ xoá lần chơi cũ. Chắc chưa?"))&&(s.classList.add("out"),setTimeout(()=>s.remove(),400),a==="c"?e():n()))}),this.root.append(s)}story(t){this.panel="story";const e=["Hè năm nay, ba má bận làm ăn trên thành phố.","Cháu được gửi về quê ngoại ở miền Tây — nơi có ao sen, vườn rau và tiếng gà gáy mỗi sáng.","Ngoại đã đứng đợi ở cổng từ sớm…"];let n=0;const s=on('<div class="screen story"><p></p><button class="btn">Tiếp →</button><button class="skip">Bỏ qua</button></div>'),r=zt("p",s),a=()=>{r.classList.remove("in"),r.offsetWidth,r.textContent=e[n],r.classList.add("in")},o=()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400),t()};zt("button.btn",s).onclick=()=>{n++,n>=e.length?o():a()},zt(".skip",s).onclick=o,this.root.append(s),a()}creator(t,e){this.panel="creator";const n={gender:"nu",hair:2,hairColor:0,skin:0,outfit:0,name:""},s=(l,c)=>l.map((h,u)=>`<button class="sw" data-key="${c}" data-v="${u}" style="--c:${I_(h)}"></button>`).join(""),r=(l,c)=>l.map((h,u)=>`<button class="chip" data-key="${c}" data-v="${u}">${h}</button>`).join(""),a=on(`<div class="screen creator"><div class="pv"><canvas id="pv"></canvas><div class="spin">↻ kéo để xoay</div></div><div class="card">
      <h2>Cháu ngoại là ai?</h2>
      <label>Tên<input id="cname" maxlength="14" placeholder="Bé Na"></label>
      <div class="row"><span>Cháu là</span><button class="chip" data-key="gender" data-v="nam">Bé trai</button><button class="chip" data-key="gender" data-v="nu">Bé gái</button></div>
      <div class="row"><span>Kiểu tóc</span>${r(n_,"hair")}</div>
      <div class="row"><span>Màu tóc</span>${s(od,"hairColor")}</div>
      <div class="row"><span>Màu da</span>${s(ad,"skin")}</div>
      <div class="row"><span>Trang phục</span>${r(ld.map(l=>l.name),"outfit")}</div>
      <button class="btn big" id="go">Về nhà ngoại →</button></div></div>`),o=()=>{a.querySelectorAll("[data-key]").forEach(l=>l.classList.toggle("on",String(n[l.dataset.key])===l.dataset.v)),t(n)};a.addEventListener("click",l=>{const c=l.target.closest("[data-key]");if(!c)return;const h=c.dataset.key;n[h]=h==="gender"?c.dataset.v:+c.dataset.v,h==="gender"&&(n.hair=n.gender==="nam"?0:2,n.outfit=n.gender==="nam"?0:4),o()}),zt("#go",a).onclick=()=>{n.name=zt("#cname",a).value.trim()||(n.gender==="nam"?"Bé Tí":"Bé Na"),a.classList.add("out"),setTimeout(()=>a.remove(),400),e(n)},this.root.append(a),n.outfit=4,o()}mountHUD(t,e){this.s=t,this.g=e,this.panel=null,this.root.querySelectorAll(".hudwrap").forEach(r=>r.remove());const n=on(`<div class="hudwrap"><div class="hud"><div class="clock"><i class="ic"></i><div><b class="day"></b><span class="time"></span></div></div><div class="money"><i>${ne("coin")}</i><b></b></div>
        <div class="lvl" title="Cấp độ"><i>${ne("star")}</i><div><b class="lv"></b><span class="xpbar"><em></em></span></div></div></div>
      <div class="quest"></div>
      <div class="hudr"><div class="hearts" title="Tình cảm với ngoại"></div><button class="rb hb" data-a="KeyB" aria-label="Xây dựng" title="Xây dựng (B)">${ne("hammer")}</button><button class="rb" data-a="Escape" aria-label="Menu">${ne("menu")}</button></div>
      <div class="hotbar"></div><div class="prompt"></div><div class="toasts"></div><div class="fps"></div>
      <div class="mob">
        <div class="btns"><button class="mb act" data-a="KeyE">${ne("act")}<span>Làm</span></button><button class="mb jump" data-a="Space">${ne("jump")}</button>
        <button class="mb run" data-hold="run">${ne("run")}</button><button class="mb sm bag" data-a="KeyI">${ne("bag")}</button><button class="mb sm view" data-a="KeyV">${ne("eye")}</button></div></div>
      <div class="rot">Xoay ngang điện thoại để chơi thoải mái hơn <button>OK</button></div></div>`);this.root.append(n),this.hudEl=n,this.hotEl=zt(".hotbar",n),this.promptEl=zt(".prompt",n),this.toastEl=zt(".toasts",n),this.fpsEl=zt(".fps",n),_i()&&document.body.classList.add("touch"),n.querySelectorAll("[data-a]").forEach(r=>r.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),Rt.unlock(),e.input.tap(r.dataset.a),r.dataset.a==="Space"&&e.input.keys.add("Space")})),n.querySelectorAll("[data-a=Space]").forEach(r=>{const a=()=>e.input.keys.delete("Space");r.addEventListener("pointerup",a),r.addEventListener("pointerleave",a)});const s=zt("[data-hold=run]",n);s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),e.runBtn=!e.runBtn,s.classList.toggle("on",e.runBtn)}),zt(".rot button",n).onclick=()=>zt(".rot",n).remove(),this.hotEl.addEventListener("click",r=>{const a=r.target.closest(".slot");a&&(t.hotbar=+a.dataset.i,this.renderHotbar())}),ue.on("inv",()=>{this.renderHotbar(),this.panel==="inv"&&this.renderInv(),this.panel==="shop"&&this.renderShop()}),ue.on("money",r=>{this.renderHUD();const a=zt(".money",n);a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump"),r>0&&Rt.coin()}),this.renderHotbar(),this.renderHUD()}renderHUD(){if(!this.hudEl)return;const t=this.s,e=Hn(t.time),n=e<5.5||e>=18.5;zt(".day",this.hudEl).textContent=`Ngày ${zn(t.time)} · Mùa hè`,zt(".time",this.hudEl).textContent=fv(t.time),zt(".clock .ic",this.hudEl).innerHTML=ne(n?"moon":"sun"),zt(".money b",this.hudEl).textContent=String(t.money);const s=Math.floor(t.friend/20);zt(".hearts",this.hudEl).innerHTML=Array.from({length:5},(d,f)=>`<i>${ne(f<s?"heart":"heartE")}</i>`).join(""),this.g?.isRaining?.()&&(zt(".clock .ic",this.hudEl).innerHTML=ne("rain"));const a=Gn(t.xp),o=Cs[a-1],l=Cs[a]??o;zt(".lv",this.hudEl).textContent=`Cấp ${a}`,zt(".xpbar em",this.hudEl).style.width=(l>o?Math.min(100,(t.xp-o)/(l-o)*100):100)+"%",zt(".lvl",this.hudEl).title=`${dl[a-1]} · ${t.xp} XP`;const c=t.quest,h=zt(".quest",this.hudEl),u=c&&!c.done?`${ne(c.item)}<span>Ngoại cần <b>${Math.min(this.g.inv.count(c.item),c.qty)}/${c.qty}</b> ${de[c.item].name.toLowerCase()}</span>`:"";h.dataset.t!==u&&(h.dataset.t=u,h.innerHTML=u,h.classList.toggle("on",!!u))}slotHTML(t,e,n){const s=de[t.id];return`<div class="slot${n?" sel":""}${t.id?"":" empty"}" data-i="${e}" title="${s?s.name:""}">${s?ne(t.id):""}${s&&s.stack>1?`<b>${t.qty}</b>`:""}${e<Fa?`<em>${e+1}</em>`:""}</div>`}renderHotbar(){if(!this.hotEl)return;const t=this.s;this.hotEl.innerHTML=t.inv.slice(0,Fa).map((e,n)=>this.slotHTML(e,n,n===t.hotbar)).join("")+`<div class="selname">${de[t.inv[t.hotbar]?.id]?.name||"Trống"}</div>`}prompt(t){if(!this.promptEl)return;const e=t||"";this.promptEl.dataset.t!==e&&(this.promptEl.dataset.t=e,this.promptEl.innerHTML=e?`<kbd>${_i()?"Làm":"E"}</kbd>${e}`:"",this.promptEl.classList.toggle("on",!!e),zt(".mb.act span",this.hudEl).textContent=e?e.split(" ").slice(0,2).join(" "):"Làm")}toast(t,e=""){if(!this.toastEl)return;const n=on(`<div class="toast ${e}">${t}</div>`);this.toastEl.append(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100)}float(t,e,n,s=""){const r=on(`<div class="float ${s}" style="left:${t}px;top:${e}px">${n}</div>`);this.root.append(r),setTimeout(()=>r.remove(),1400)}modal(t,e,n,s){this.closeModal();const r=on(`<div class="modal ${t}"><div class="sheet"><header><h3>${e}</h3><button class="x" aria-label="Đóng">${ne("close")}</button></header><div class="body">${n}</div></div></div>`);return r.addEventListener("pointerdown",a=>{a.target===r&&this.closeAll()}),zt(".x",r).onclick=()=>this.closeAll(),r._close=s,this.root.append(r),Rt.open(),r}closeModal(){this.root.querySelectorAll(".modal").forEach(t=>{t._close?.(),t.remove()})}closeAll(){this.root.querySelector(".modal")&&Rt.close(),this.closeModal(),this.panel=null,this.selSlot=-1}toggleInv(){if(this.panel==="inv")return this.closeAll();this.panel="inv",this.modal("inv","Kho đồ",'<div class="grid"></div><div class="desc"></div><p class="tip">Bấm một ô rồi bấm ô khác để đổi chỗ. Hàng trên cùng là thanh công cụ.</p>'),this.renderInv()}renderInv(){const t=zt(".modal.inv");if(!t)return;const e=zt(".grid",t);e.innerHTML=this.s.inv.map((s,r)=>this.slotHTML(s,r,r===this.selSlot)).join(""),e.onclick=s=>{const r=s.target.closest(".slot");if(!r)return;const a=+r.dataset.i;this.selSlot>=0&&this.selSlot!==a?(this.g.inv.swap(this.selSlot,a),this.selSlot=-1,Rt.place()):this.selSlot=this.selSlot===a?-1:a,this.renderInv()};const n=de[this.s.inv[this.selSlot]?.id];zt(".desc",t).innerHTML=n?`<b>${n.name}</b> — ${n.desc}${n.sell?` <span class="pr">${ne("coin")}${n.sell}</span>`:""}`:"Chọn một món để xem."}toggleShop(t=!1){if(this.panel==="shop")return this.closeAll();this.panel="shop",this.sellOnly=t,this.modal("shop",t?"Thùng hàng":"Sạp cô Út",'<div class="shopbody"></div>'),this.renderShop()}renderShop(){const t=zt(".modal.shop");if(!t)return;const e=zt(".shopbody",t),n=this.g.inv,s=Gn(this.s.xp),r=Object.values(de).filter(l=>l.buy!=null&&!(l.kind==="tool"&&n.count(l.id))),a=Object.values(de).filter(l=>l.kind==="produce"&&n.count(l.id)>0),o=l=>l.crop?cn[l.crop].level:l.level||1;e.innerHTML=`${this.sellOnly?'<p class="who">Bỏ nông sản vô thùng, xe của cô Út ghé lấy và trả tiền liền.</p>':`<p class="who">“Hạt giống mới về nè con, rau trồng được thì đem ra cô mua cho!”</p><h4>Mua</h4>${r.map(l=>{const c=this.shopQty[l.id]||1,h=o(l)>s;return`<div class="line${h?" dim":""}"><i>${ne(l.id)}</i><div><b>${l.name}</b><small>${h?`Mở ở cấp ${o(l)}`:l.desc}</small></div>${l.stack>1?`<div class="qty"><button data-q="-" data-id="${l.id}">−</button><span>${c}</span><button data-q="+" data-id="${l.id}">+</button></div>`:""}<button class="btn sm" data-buy="${l.id}" ${h?"disabled":""}>${ne("coin")}${l.buy*(l.stack>1?c:1)}</button></div>`}).join("")}`}
      <h4>Bán nông sản</h4>${a.length?a.map(l=>{const c=n.count(l.id);return`<div class="line"><i>${ne(l.id)}</i><div><b>${l.name}</b><small>Đang có ${c} · ${l.sell} xu/món</small></div><button class="btn sm" data-sell="${l.id}">Bán 1</button><button class="btn sm" data-sellall="${l.id}">Bán hết</button></div>`}).join(""):'<p class="tip">Chưa có gì để bán. Trồng rau, lượm trứng hay câu cá rồi quay lại nha!</p>'}
      <p class="wallet">${ne("coin")} Con đang có <b>${this.s.money}</b> xu</p>`,e.onclick=l=>{const c=l.target.closest("button");if(!c)return;const h=c.dataset.id||c.dataset.buy||c.dataset.sell||c.dataset.sellall;if(c.dataset.q)return this.shopQty[h]=Math.max(1,Math.min(20,(this.shopQty[h]||1)+(c.dataset.q==="+"?1:-1))),this.renderShop();let u=null,d=0;c.dataset.buy&&(d=de[h].stack>1&&this.shopQty[h]||1,u=n.buy(h,d),u||(this.toast(`Đã mua ${d} ${de[h].name.toLowerCase()}`),Rt.coin(),this.g.flag("buy"))),c.dataset.sell&&(u=n.sell(h,1),d=1),c.dataset.sellall&&(d=n.count(h),u=n.sell(h,d)),(c.dataset.sell||c.dataset.sellall)&&!u&&(this.toast(`Bán ${d} ${de[h].name.toLowerCase()} · +${de[h].sell*d} xu`,"good"),this.g.flag("sell"),this.g.count("soldN",d),this.g.addXP(Math.max(1,Math.round(de[h].sell*d/25)))),u&&(this.toast(u,"bad"),Rt.error()),this.renderShop(),this.g.saveSoon()}}toggleMenu(){if(this.panel==="menu")return this.closeAll();this.panel="menu";const t=this.modal("menu","Tạm nghỉ",`<nav class="tabs"><button data-t="j" class="on">${ne("book")}Nhật ký</button><button data-t="s">${ne("gear")}Cài đặt</button><button data-t="h">Phím</button></nav><div class="tab"></div>
      <div class="acts"><button class="btn" data-m="resume">Chơi tiếp</button><button class="btn" data-m="save">${ne("save")}Lưu game</button><button class="btn ghost" data-m="new">Chơi mới</button><a class="btn ghost" href="../index.html">${ne("home")}Game Hội Bạn</a></div>`),e=zt(".tab",t),n=s=>{t.querySelectorAll(".tabs button").forEach(r=>r.classList.toggle("on",r.dataset.t===s)),e.innerHTML=s==="j"?this.journal():s==="s"?this.settingsHTML():this.keysHTML(),s==="s"&&this.bindSettings(e)};zt(".tabs",t).onclick=s=>{const r=s.target.closest("button");r&&n(r.dataset.t)},zt(".acts",t).onclick=async s=>{const r=s.target.closest("[data-m]");if(!r)return;const a=r.dataset.m;if(a==="resume"&&this.closeAll(),a==="save"){const o=await this.g.save();this.toast(o?"Đã lưu vào máy":"Lưu tạm (trình duyệt chặn IndexedDB)",o?"good":"")}a==="new"&&confirm("Chơi lại từ đầu? Lần chơi hiện tại sẽ bị xoá.")&&this.g.restart()},n("j")}journal(){const t=this.s.flags,e=this.s,n=Gn(e.xp),s=(r,a)=>`<li class="${t[r]!=null?"ok":""}">${t[r]!=null?"✔":"○"} ${a}</li>`;return`<h4>Nhật ký của ${e.look.name} · Cấp ${n} “${dl[n-1]}”</h4><ul class="jr">${s("talk","Gặp ngoại ở cổng")}${s("till","Xới luống đất")}${s("plant","Gieo hạt giống")}${s("water","Tưới nước cho cây")}${s("harvest","Thu hoạch lần đầu")}${s("gift","Tặng quà cho ngoại")}${s("sell","Bán hàng")}${s("quest","Giúp ngoại việc nhà")}${s("build","Xây công trình đầu tiên")}${s("lot","Mua thêm đất")}${s("fish","Câu được cá")}${s("egg","Lượm trứng gà")}${s("wish","Ước ở đài phun nước")}${s("sleep","Ngủ một đêm ở quê")}${s("rain","Gặp mưa quê")}${s("sit","Ngồi ghế ngắm vườn")}</ul>
      <p class="stat">Thu hoạch <b>${t.harvestN||0}</b> lần · Bán <b>${t.soldN||0}</b> món · Câu <b>${t.fishN||0}</b> cá · Trứng <b>${t.eggN||0}</b> · Xây <b>${e.built.length}</b> công trình · Đất: <b>${1+e.lots.length}/${1+Qs.length}</b> khu · Tình cảm <b>${e.friend}</b>/100 · Ngày ${zn(e.time)}</p>
      <p class="soon">${n<Cs.length?`Còn ${Cs[n]-e.xp} XP nữa lên cấp ${n+1}.`:"Đã đạt cấp cao nhất!"} Kiếm XP bằng cách trồng trọt, giúp ngoại, xây dựng, câu cá.</p>`}settingsHTML(){const t=this.s.settings,e=(n,s)=>`<label class="sl">${s}<input type="range" min="0" max="1" step="0.05" data-s="${n}" value="${t[n]}"></label>`;return`${e("music","Nhạc nền")}${e("ambient","Âm thanh môi trường")}${e("sfx","Hiệu ứng")}${e("ui","Giao diện")}
      <label class="ck"><input type="checkbox" data-s="muted" ${t.muted?"checked":""}> Tắt toàn bộ âm thanh</label>
      <label class="sl">Đồ hoạ<select data-s="quality">${["low","medium","high"].map(n=>`<option value="${n}" ${t.quality===n?"selected":""}>${{low:"Thấp (máy yếu)",medium:"Vừa",high:"Cao"}[n]}</option>`).join("")}</select></label>
      <label class="sl">Độ nhạy xoay camera<input type="range" min="0.3" max="2.5" step="0.1" data-s="sens" value="${t.sens}"></label>
      <label class="ck"><input type="checkbox" data-s="fps" ${t.fps?"checked":""}> Hiện FPS</label><p class="tip">Đổi đồ hoạ: độ nét và bóng đổ áp dụng ngay; mật độ cỏ hoa áp dụng khi tải lại trang.</p>`}bindSettings(t){t.querySelectorAll("[data-s]").forEach(e=>e.oninput=e.onchange=()=>{const n=e.dataset.s,s=this.s.settings;s[n]=e.type==="checkbox"?e.checked:e.tagName==="SELECT"?e.value:+e.value,this.g.applySettings(),this.g.saveSoon()})}keysHTML(){return'<table class="keys"><tr><td>W A S D</td><td>Đi</td></tr><tr><td>Kéo chuột / vuốt phải</td><td>Xoay camera · lăn chuột: phóng to</td></tr><tr><td>Shift</td><td>Chạy</td></tr><tr><td>Space</td><td>Nhảy</td></tr><tr><td>E</td><td>Tương tác (xới · gieo · tưới · hái · nói chuyện · câu cá · ngủ)</td></tr><tr><td>1 – 8</td><td>Chọn món trên thanh công cụ</td></tr><tr><td>I</td><td>Kho đồ</td></tr><tr><td>V</td><td>Đổi góc nhìn thứ ba / thứ nhất</td></tr><tr><td>B</td><td>Bật/tắt chế độ xây dựng</td></tr><tr><td>R · X · M</td><td>Khi xây: xoay · dỡ · dời đồ</td></tr><tr><td>Click / E</td><td>Khi xây: đặt món đang chọn</td></tr><tr><td>Esc</td><td>Menu</td></tr></table>'}confirm(t,e,n,s){this.panel="confirm",this.confirmYes=s;const r=this.modal("confirm",t,`<p class="ctext">${e}</p><div class="acts"><button class="btn big" data-y>${n}</button><button class="btn ghost" data-n>Thôi</button></div>`);zt("[data-y]",r).onclick=()=>this.confirmKey(!0),zt("[data-n]",r).onclick=()=>this.closeAll()}confirmKey(t){const e=this.confirmYes;this.confirmYes=null,this.closeAll(),t&&e&&e()}levelUp(t,e,n){const s=on(`<div class="lvup"><div class="burst">${ne("star")}</div><b>Lên cấp ${t}!</b><span>“${e}”</span>${n.length?`<small>Mở khoá: ${n.join(", ")}</small>`:""}</div>`);this.root.append(s),setTimeout(()=>s.classList.add("out"),3200),setTimeout(()=>s.remove(),3800)}sleepFade(t,e,n){const s=on(`<div class="sleep"><div class="zz">Z<i>z</i><i>z</i></div><p>${t}</p></div>`);this.root.append(s),setTimeout(()=>{e(),this.renderHUD()},1300),setTimeout(()=>s.classList.add("out"),2600),setTimeout(()=>{s.remove(),n(),this.toast("Chào buổi sáng! Một ngày mới ở quê ngoại.")},3300)}buildMode(t){if(document.body.classList.toggle("building",t),this.buildEl?.remove(),this.buildEl=null,!t)return;const e=L_(),n=on(`<div class="buildui"><div class="bstatus"></div><div class="btools"><button data-t="rot" title="Xoay (R)">${ne("rotate")}<span>Xoay</span></button><button data-t="move" title="Dời đồ (M)">${ne("move")}<span>Dời</span></button><button data-t="remove" title="Dỡ (X)">${ne("trash")}<span>Dỡ</span></button><button data-t="ok" class="ok">${ne("check")}<span>Đặt</span></button><button data-t="exit" title="Thoát (B)">${ne("close")}<span>Xong</span></button></div>
      <div class="bcat">${qv.map(r=>`<button data-c="${r.id}">${r.name}</button>`).join("")}</div><div class="bitems"></div></div>`);this.root.append(n),this.buildEl=n;const s=()=>{const r=Gn(this.s.xp);n.querySelectorAll(".bcat button").forEach(a=>a.classList.toggle("on",a.dataset.c===this.buildCat)),zt(".bitems",n).innerHTML=Object.values(be).filter(a=>a.cat===this.buildCat).map(a=>{const o=a.level>r,l=this.s.built.filter(c=>c.type===a.id).length;return`<button class="bitem${o?" lock":""}" data-b="${a.id}" title="${a.desc}"><img alt="" src="${e[a.id]||""}"><b>${a.name}</b><span>${o?`Cấp ${a.level}`:`${ne("coin")}${a.price}`}</span>${a.max?`<em>${l}/${a.max}</em>`:""}</button>`}).join(""),this.buildStatus()};n.addEventListener("pointerdown",r=>r.stopPropagation()),n.addEventListener("click",r=>{const a=r.target,o=a.closest("[data-c]"),l=a.closest("[data-b]"),c=a.closest("[data-t]");if(o&&(this.buildCat=o.dataset.c,s()),l&&(this.g.selectBuild(l.dataset.b),s()),c){const h=c.dataset.t;h==="rot"&&this.g.build.rotate(),h==="ok"&&this.g.confirmBuild(),h==="exit"&&this.g.toggleBuild(!1),(h==="move"||h==="remove")&&this.g.setBuildTool(this.g.build.mode===h?"off":h),this.buildStatus()}}),n._render=s,s()}buildStatus(){const t=this.buildEl;if(!t)return;const e=this.g.build,n=zt(".bstatus",t);let s="",r="";if(e.mode==="place"||e.mode==="move"&&e.moving){const o=be[e.type];s=`<b>${o.name}</b> ${e.mode==="move"?"· dời miễn phí":`· ${o.price} xu`} · ${e.valid?"Đặt được ✓":e.reason}`,r=e.valid?"ok":"bad"}else e.mode==="remove"?(s=e.target?`Dỡ <b>${be[e.target.type].name}</b> · nhận lại ${Math.floor(be[e.target.type].price/2)} xu`:"Đưa khung đỏ tới món muốn dỡ",r=e.target?"bad":""):e.mode==="move"?s=e.target?`Dời <b>${be[e.target.type].name}</b> · bấm Đặt để nhấc lên`:"Đưa khung tới món muốn dời":s=_i()?"Chọn một món bên dưới, đi tới chỗ muốn đặt rồi bấm Đặt":"Chọn món bên dưới · rê chuột chọn chỗ · Click/E đặt · R xoay";n.dataset.t!==s+r&&(n.dataset.t=s+r,n.innerHTML=s,n.className="bstatus "+r),t.querySelectorAll(".btools [data-t]").forEach(o=>o.classList.toggle("on",o.dataset.t===e.mode));const a=String(Gn(this.s.xp))+this.s.built.length;t._key!==a&&(t._key=a,t._render?.())}dialog(t,e,n){this.panel="dialog";let s=zt(".dlg");s||(s=on(`<div class="dlg"><div class="face">${D_}</div><div class="box"><b class="who">Ngoại</b><p></p><div class="ch"></div></div></div>`),this.root.append(s));const r=zt("p",s),a=zt(".ch",s);clearInterval(this.typing),r.textContent="",a.innerHTML="";let o=0;Rt.npc();const l=()=>{clearInterval(this.typing),r.textContent=t,a.innerHTML=e.map((c,h)=>`<button class="opt" data-k="${c.k}" ${c.off?"disabled":""}>${c.icon?ne(c.icon):""}<span>${_i()?"":`<kbd>${h+1}</kbd>`}${c.t}</span></button>`).join("")};this.typing=window.setInterval(()=>{o+=2,r.textContent=t.slice(0,o),o>=t.length&&l()},22),r.onclick=l,s._finish=l,s._choices=e,a.onclick=c=>{const h=c.target.closest(".opt");h&&!h.hasAttribute("disabled")&&n(h.dataset.k)},s._pick=n}dialogKey(t){const e=zt(".dlg");if(!e)return;if(!e.querySelector(".opt"))return e._finish();const n=e._choices[t];n&&!n.off&&e._pick(n.k)}closeDialog(){clearInterval(this.typing),zt(".dlg")?.remove(),this.panel==="dialog"&&(this.panel=null)}loading(t,e=""){let n=zt(".loading");t&&!n?(n=on(`<div class="loading"><div class="pot"></div><p>${e}</p></div>`),this.root.append(n)):!t&&n&&(n.classList.add("out"),setTimeout(()=>n.remove(),500))}}async function N_(){const i=new U_;i.loading(!0,"Đang về quê ngoại…"),addEventListener("pointerdown",()=>Rt.unlock(),{once:!0}),addEventListener("keydown",()=>Rt.unlock(),{once:!0});const t=await C_(),e=document.getElementById("c");let n;try{n=new P_(e,t?.settings.quality??(_i()?"low":"medium"),i)}catch{i.loading(!1),document.getElementById("ui").innerHTML='<div class="screen title"><div class="logo"><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div><p class="hint">Trình duyệt này chưa bật WebGL nên không chạy được game 3D. Thử Chrome/Safari bản mới nha.</p><a class="btn" href="../index.html">← Game Hội Bạn</a></div>';return}setTimeout(()=>i.loading(!1),300);const s=()=>i.story(()=>i.creator(r=>(F_||(F_=O_()))(r),r=>{dd(),n.start(Ju(r),!0)}));if(sessionStorage.getItem("ngoai-new")){sessionStorage.removeItem("ngoai-new"),s();return}i.title(!!t,()=>n.start(t,!1),s)}let dd=()=>{},F_=null;function O_(){const i=document.getElementById("pv");let t=null;const e=new no;if(!i)return()=>{};const n=new to({canvas:i,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.outputColorSpace=Ve;const s=new Xe(32,1,.1,20);s.position.set(0,1.15,5.6),s.lookAt(0,.95,0),e.add(new co(16774368,9083498,1.6));const r=new ho(16777215,1.8);r.position.set(2,4,3),e.add(r);const a=new bt(new Le(.9,1,.12,24),new Kl({color:10275946,flatShading:!0}));a.position.y=-.06,e.add(a);let o=.4,l=!1,c=0,h=!0;i.addEventListener("pointerdown",d=>{l=!0,c=d.clientX}),addEventListener("pointerup",()=>l=!1),addEventListener("pointermove",d=>{l&&(o+=(d.clientX-c)*.01,c=d.clientX)});const u=()=>{if(!h)return;requestAnimationFrame(u);const d=i.clientWidth,f=i.clientHeight;i.width!==Math.floor(d*n.getPixelRatio())&&(n.setSize(d,f,!1),s.aspect=d/f,s.updateProjectionMatrix()),t&&(l||(o+=.004),t.root.rotation.y=o,t.update(1/60,0,!1,null,0)),n.render(e,s)};return u(),dd=()=>{h=!1,n.dispose()},d=>{t&&e.remove(t.root),t=new ka(d),e.add(t.root)}}N_();
