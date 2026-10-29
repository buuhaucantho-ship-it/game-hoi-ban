(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="169",Sl=0,no=1,El=2,xo=1,Mo=2,dn=3,pn=0,De=1,Ze=2,An=0,si=1,nr=2,io=3,so=4,bl=5,kn=100,Tl=101,wl=102,Al=103,Rl=104,Cl=200,Pl=201,Ll=202,Il=203,ir=204,sr=205,Dl=206,Ul=207,Nl=208,Fl=209,Ol=210,zl=211,Bl=212,kl=213,Hl=214,rr=0,ar=1,or=2,ai=3,cr=4,lr=5,hr=6,ur=7,yo=0,Gl=1,Vl=2,Rn=0,Wl=1,Xl=2,ql=3,$l=4,Yl=5,Kl=6,Zl=7,So=300,oi=301,ci=302,dr=303,fr=304,xs=306,hs=1e3,Hn=1001,pr=1002,Le=1003,Jl=1004,ts=1005,Je=1006,js=1007,Gn=1008,mn=1009,Eo=1010,bo=1011,Bi=1012,Yr=1013,Vn=1014,cn=1015,Gi=1016,Kr=1017,Zr=1018,li=1020,To=35902,wo=1021,Ao=1022,Qe=1023,Ro=1024,Co=1025,ri=1026,hi=1027,Jr=1028,jr=1029,Po=1030,Qr=1031,ta=1033,ns=33776,is=33777,ss=33778,rs=33779,mr=35840,gr=35841,_r=35842,vr=35843,xr=36196,Mr=37492,yr=37496,Sr=37808,Er=37809,br=37810,Tr=37811,wr=37812,Ar=37813,Rr=37814,Cr=37815,Pr=37816,Lr=37817,Ir=37818,Dr=37819,Ur=37820,Nr=37821,as=36492,Fr=36494,Or=36495,Lo=36283,zr=36284,Br=36285,kr=36286,jl=3200,Ql=3201,Io=0,th=1,Tn="",Oe="srgb",Pn="srgb-linear",ea="display-p3",Ms="display-p3-linear",us="linear",ce="srgb",ds="rec709",fs="p3",ti=7680,ro=519,eh=512,nh=513,ih=514,Do=515,sh=516,rh=517,ah=518,oh=519,ao=35044,oo="300 es",fn=2e3,ps=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,co=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Qh(i,t){return(i%t+t)%t}function Ea(i,t,e){return(1-e)*i+e*t}function Xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],M=s[1],x=s[4],y=s[7],C=s[2],T=s[5],w=s[8];return r[0]=a*v+o*M+c*C,r[3]=a*m+o*x+c*T,r[6]=a*f+o*y+c*w,r[1]=l*v+h*M+u*C,r[4]=l*m+h*x+u*T,r[7]=l*f+h*y+u*w,r[2]=d*v+p*M+g*C,r[5]=d*m+p*x+g*T,r[8]=d*f+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ot;function ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=Hr("canvas");return i.style.display="block",i}const dc={};function Qs(i){i in dc||(dc[i]=!0,console.warn(i))}function tu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function eu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fc=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qi={[Pn]:{transfer:us,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:ce,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ms]:{transfer:us,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(pc),fromReference:i=>i.applyMatrix3(fc)},[ea]:{transfer:ce,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(pc),fromReference:i=>i.applyMatrix3(fc).convertLinearToSRGB()}},iu=new Set([Pn,Ms]),jt={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!iu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=qi[t].toReference,s=qi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return qi[i].primaries},getTransfer:function(i){return i===Tn?us:qi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(qi[t].luminanceCoefficients)}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Hr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class Uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class Ae extends pi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Hn,s=Hn,r=Je,a=Gn,o=Qe,c=mn,l=Ae.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Vi(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==So)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=So;Ae.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(p+1)/2,C=(f+1)/2,T=(h+d)/4,w=(u+v)/4,L=(g+m)/4;return x>y&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uh extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends uh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class No extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*v,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,f*M);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const y=o*M;if(c=c*m+d*y,l=l*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new R,mc=new Xn;class qn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Ts.subVectors(this.max,$i),xi.subVectors(t.a,$i),Mi.subVectors(t.b,$i),yi.subVectors(t.c,$i),In.subVectors(Mi,xi),Dn.subVectors(yi,Mi),Yn.subVectors(xi,yi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Yn.z,Yn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Yn.z,0,-Yn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Yn.y,Yn.x,0];return!Ra(e,xi,Mi,yi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,xi,Mi,yi,Ts))?!1:(ws.crossVectors(In,Dn),e=[ws.x,ws.y,ws.z],Ra(e,xi,Mi,yi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,bs=new qn,xi=new R,Mi=new R,yi=new R,In=new R,Dn=new R,Yn=new R,$i=new R,Ts=new R,ws=new R,Kn=new R;function Ra(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const au=new qn,Yi=new R,Ca=new R;class mi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Ca)),this.expandByPoint(Yi.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new R,Pa=new R,As=new R,Un=new R,La=new R,Rs=new R,Ia=new R;class na{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pa.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Un.dot(this.direction),c=-Un.dot(As),l=Un.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pa).addScaledVector(As,d),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){La.subVectors(e,t),Rs.subVectors(n,t),Ia.crossVectors(La,Rs);let a=this.direction.dot(Ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);const c=o*this.direction.dot(Rs.crossVectors(Un,Rs));if(c<0)return null;const l=o*this.direction.dot(La.cross(Un));if(l<0||c+l>a)return null;const h=-o*Un.dot(Ia);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,cu)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Nn.crossVectors(n,We),Nn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Nn.crossVectors(n,We)),Nn.normalize(),Cs.crossVectors(We,Nn),s[0]=Nn.x,s[4]=Cs.x,s[8]=We.x,s[1]=Nn.y,s[5]=Cs.y,s[9]=We.y,s[2]=Nn.z,s[6]=Cs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],M=n[3],x=n[7],y=n[11],C=n[15],T=s[0],w=s[4],L=s[8],V=s[12],_=s[1],b=s[5],z=s[9],B=s[13],W=s[2],Z=s[6],k=s[10],J=s[14],G=s[3],lt=s[7],ht=s[11],xt=s[15];return r[0]=a*T+o*_+c*W+l*G,r[4]=a*w+o*b+c*Z+l*lt,r[8]=a*L+o*z+c*k+l*ht,r[12]=a*V+o*B+c*J+l*xt,r[1]=h*T+u*_+d*W+p*G,r[5]=h*w+u*b+d*Z+p*lt,r[9]=h*L+u*z+d*k+p*ht,r[13]=h*V+u*B+d*J+p*xt,r[2]=g*T+v*_+m*W+f*G,r[6]=g*w+v*b+m*Z+f*lt,r[10]=g*L+v*z+m*k+f*ht,r[14]=g*V+v*B+m*J+f*xt,r[3]=M*T+x*_+y*W+C*G,r[7]=M*w+x*b+y*Z+C*lt,r[11]=M*L+x*z+y*k+C*ht,r[15]=M*V+x*B+y*J+C*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+v*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],M=u*m*l-v*d*l+v*c*p-o*m*p-u*c*f+o*d*f,x=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,y=h*v*l-g*u*l+g*o*p-a*v*p-h*o*f+a*u*f,C=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,T=e*M+n*x+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=M*w,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*w,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*f+n*c*f)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*w,t[4]=x*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*w,t[8]=y*w,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*w,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*w,t[12]=C*w,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,M=c*l,x=c*h,y=c*u,C=n.x,T=n.y,w=n.z;return s[0]=(1-(v+f))*C,s[1]=(p+y)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*w,s[9]=(m-M)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const a=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const l=1/r,h=1/a,u=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===fn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ps)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h;let g,v;if(o===fn)g=(a+r)*u,v=-2*u;else if(o===ps)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new R,sn=new Xt,ou=new R(0,0,0),cu=new R(1,1,1),Nn=new R,Cs=new R,We=new R,gc=new Xt,_c=new Xn;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class ia{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const vc=new R,Ei=new Xn,Mn=new Xt,Ps=new R,Ki=new R,hu=new R,uu=new Xn,xc=new R(1,0,0),Mc=new R(0,1,0),yc=new R(0,0,1),Sc={type:"added"},du={type:"removed"},bi={type:"childadded",child:null},Da={type:"childremoved",child:null};class xe extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new R,e=new ln,n=new Xn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ot}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ki,Ps,this.up):Mn.lookAt(Ps,Ki,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(du),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new R(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,yn=new R,Ua=new R,Sn=new R,Ti=new R,wi=new R,Ec=new R,Na=new R,Fa=new R,Oa=new R,za=new ue,Ba=new ue,ka=new ue;class je{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),yn.subVectors(n,e),Ua.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(yn),c=rn.dot(Ua),l=yn.dot(yn),h=yn.dot(Ua),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return za.setScalar(0),Ba.setScalar(0),ka.setScalar(0),za.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(ka,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),yn.subVectors(t,e),rn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),rn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ti.subVectors(s,n),wi.subVectors(r,n),Na.subVectors(t,n);const c=Ti.dot(Na),l=wi.dot(Na);if(c<=0&&l<=0)return e.copy(n);Fa.subVectors(t,s);const h=Ti.dot(Fa),u=wi.dot(Fa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ti,a);Oa.subVectors(t,r);const p=Ti.dot(Oa),g=wi.dot(Oa);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(wi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ec.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ec,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(Ti,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Qh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ha(a,r,t+1/3),this.g=Ha(a,r,t),this.b=Ha(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(we(Ce.r*255,0,255))*65536+Math.round(we(Ce.g*255,0,255))*256+Math.round(we(Ce.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Oe){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ls);const n=Ea(Fn.h,Ls.h,e),s=Ea(Fn.s,Ls.s,e),r=Ea(Fn.l,Ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Nt;Nt.NAMES=fh;let fu=0;class gi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=si,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sa extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new R,Is=new at;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ao,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ao&&(t.usage=this.usage),t}}class Fo extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oo extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pu=0;const Ke=new Xt,Ga=new xe,Ai=new R,Xe=new qn,Zi=new qn,Ee=new R;class Me extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?Oo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Xe.min,Zi.min),Xe.expandByPoint(Ee),Ee.addVectors(Xe.max,Zi.max),Xe.expandByPoint(Ee)):(Xe.expandByPoint(Zi.min),Xe.expandByPoint(Zi.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ee.fromBufferAttribute(o,l),c&&(Ai.fromBufferAttribute(t,l),Ee.add(Ai)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new R,c[L]=new R;const l=new R,h=new R,u=new R,d=new at,p=new at,g=new at,v=new R,m=new R;function f(L,V,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),o[L].add(v),o[V].add(v),o[_].add(v),c[L].add(m),c[V].add(m),c[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,V=M.length;L<V;++L){const _=M[L],b=_.start,z=_.count;for(let B=b,W=b+z;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new R,y=new R,C=new R,T=new R;function w(L){C.fromBufferAttribute(s,L),T.copy(C);const V=o[L];x.copy(V),x.sub(C.multiplyScalar(C.dot(V))).normalize(),y.crossVectors(T,V);const b=y.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,b)}for(let L=0,V=M.length;L<V;++L){const _=M[L],b=_.start,z=_.count;for(let B=b,W=b+z;B<W;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new Xt,Zn=new na,Ds=new mi,Tc=new R,Us=new R,Ns=new R,Fs=new R,Va=new R,Os=new R,wc=new R,zs=new R;class Lt extends xe{constructor(t=new Me,e=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Va.fromBufferAttribute(u,t),a?Os.addScaledVector(Va,h):Os.addScaledVector(Va.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Ds,Tc)===null||Zn.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(bc.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,C=x;y<C;y+=3){const T=o.getX(y),w=o.getX(y+1),L=o.getX(y+2);s=Bs(this,f,t,n,l,h,u,T,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=Bs(this,a,t,n,l,h,u,M,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,C=x;y<C;y+=3){const T=y,w=y+1,L=y+2;s=Bs(this,f,t,n,l,h,u,T,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=m,x=m+1,y=m+2;s=Bs(this,a,t,n,l,h,u,M,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===pn,o),c===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(l,Fs);const h=mu(i,t,e,n,Us,Ns,Fs,wc);if(h){const u=new R;je.getBarycoord(wc,Us,Ns,Fs,u),s&&(h.uv=je.getInterpolatedAttribute(s,o,c,l,u,new at)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,c,l,u,new at)),a&&(h.normal=je.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};je.getNormal(Us,Ns,Fs,d.normal),h.face=d,h.barycoord=u}return h}class $e extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(v,m,f,M,x,y,C,T,w,L,V){const _=y/w,b=C/L,z=y/2,B=C/2,W=T/2,Z=w+1,k=L+1;let J=0,G=0;const lt=new R;for(let ht=0;ht<k;ht++){const xt=ht*b-B;for(let Kt=0;Kt<Z;Kt++){const ie=Kt*_-z;lt[v]=ie*M,lt[m]=xt*x,lt[f]=W,l.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[f]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Kt/w),u.push(1-ht/L),J+=1}}for(let ht=0;ht<L;ht++)for(let xt=0;xt<w;xt++){const Kt=d+xt+Z*ht,ie=d+xt+Z*(ht+1),X=d+(xt+1)+Z*(ht+1),Q=d+(xt+1)+Z*ht;c.push(Kt,ie,Q),c.push(ie,X,Q),G+=6}o.addGroup(p,G,V),p+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=ki(i[e]);for(const s in n)t[s]=n[s]}return t}function gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const mh={clone:ki,merge:Pe};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zo extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new R,Ac=new at,Rc=new at;class ze extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Rc),e.subVectors(Rc,Ac)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class gh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new ze(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const a=new ze(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const o=new ze(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const c=new ze(Ri,Ci,t,e);c.layers=this.layers,this.add(c);const l=new ze(Ri,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bo extends Ae{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _h extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:An});r.uniforms.tEquirect.value=e;const a=new Lt(s,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Je),new gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Wa=new R,xu=new R,Mu=new Ot;class Bn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wa.subVectors(n,e).cross(xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mu.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new mi,ks=new R;class ra{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-p,y-f).normalize(),n[1].setComponents(c+r,d+l,m+p,y+f).normalize(),n[2].setComponents(c+a,d+h,m+g,y+M).normalize(),n[3].setComponents(c-a,d-h,m-g,y-M).normalize(),n[4].setComponents(c-o,d-u,m-v,y-x).normalize(),e===fn)n[5].setComponents(c+o,d+u,m+v,y+x).normalize();else if(e===ps)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class an extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-M,0),v.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const x=M+l*f,y=M+l*(f+1),C=M+1+l*(f+1),T=M+1+l*f;p.push(x,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
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
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
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
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
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
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
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
#endif`,Fu=`#ifdef USE_BUMPMAP
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xu=`#define PI 3.141592653589793
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
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$u=`vec3 transformedNormal = objectNormal;
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
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`
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
}`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
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
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
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
#endif`,Md=`struct PhysicalMaterial {
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
}`,yd=`
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
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
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,of=`float getShadowMask() {
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
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
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
}`,Cf=`#if DEPTH_PACKING == 3200
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`#define DISTANCE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#include <common>
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
}`,Of=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,Bf=`#define LAMBERT
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
}`,kf=`#define MATCAP
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
}`,Hf=`#define MATCAP
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
}`,Gf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define PHONG
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
}`,qf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
}`,Yf=`#define TOON
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
}`,Kf=`#define TOON
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
}`,Zf=`uniform float size;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,jf=`#include <common>
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
}`,Qf=`uniform vec3 color;
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
}`,tp=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Su,alphahash_pars_fragment:Eu,alphamap_fragment:bu,alphamap_pars_fragment:Tu,alphatest_fragment:wu,alphatest_pars_fragment:Au,aomap_fragment:Ru,aomap_pars_fragment:Cu,batching_pars_vertex:Pu,batching_vertex:Lu,begin_vertex:Iu,beginnormal_vertex:Du,bsdfs:Uu,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:ku,color_fragment:Hu,color_pars_fragment:Gu,color_pars_vertex:Vu,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:$u,displacementmap_pars_vertex:Yu,displacementmap_vertex:Ku,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,colorspace_fragment:ju,colorspace_pars_fragment:Qu,envmap_fragment:td,envmap_common_pars_fragment:ed,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:sd,fog_vertex:rd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:cd,gradientmap_pars_fragment:ld,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:yd,lights_fragment_maps:Sd,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Ad,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:zd,normal_fragment_begin:Bd,normal_fragment_maps:kd,normal_pars_fragment:Hd,normal_pars_vertex:Gd,normal_vertex:Vd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Yd,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:Jd,project_vertex:jd,dithering_fragment:Qd,dithering_pars_fragment:tf,roughnessmap_fragment:ef,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:rf,shadowmap_vertex:af,shadowmask_pars_fragment:of,skinbase_vertex:cf,skinning_pars_vertex:lf,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:_f,uv_pars_fragment:vf,uv_pars_vertex:xf,uv_vertex:Mf,worldpos_vertex:yf,background_vert:Sf,background_frag:Ef,backgroundCube_vert:bf,backgroundCube_frag:Tf,cube_vert:wf,cube_frag:Af,depth_vert:Rf,depth_frag:Cf,distanceRGBA_vert:Pf,distanceRGBA_frag:Lf,equirect_vert:If,equirect_frag:Df,linedashed_vert:Uf,linedashed_frag:Nf,meshbasic_vert:Ff,meshbasic_frag:Of,meshlambert_vert:zf,meshlambert_frag:Bf,meshmatcap_vert:kf,meshmatcap_frag:Hf,meshnormal_vert:Gf,meshnormal_frag:Vf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:$f,meshtoon_vert:Yf,meshtoon_frag:Kf,points_vert:Zf,points_frag:Jf,shadow_vert:jf,shadow_frag:Qf,sprite_vert:tp,sprite_frag:ep},nt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},on={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};on.physical={uniforms:Pe([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Hs={r:0,b:0,g:0},jn=new ln,np=new Xt;function ip(i,t,e,n,s,r,a){const o=new Nt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const y=g(M);y===null?f(o,c):y&&y.isColor&&(f(y,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===xs)?(h===void 0&&(h=new Lt(new $e(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ki(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(x.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(jn)),h.material.toneMapped=jt.getTransfer(y.colorSpace)!==ce,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new an(2,2),new Cn({name:"BackgroundMaterial",uniforms:ki(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=jt.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,x){M.getRGB(Hs,ph(i)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:v,addToRenderList:m}}function sp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,b,z,B,W){let Z=!1;const k=u(B,z,b);r!==k&&(r=k,l(r.object)),Z=p(_,B,z,W),Z&&g(_,B,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(_,b,z,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,b,z){const B=z.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let Z=W[b.id];Z===void 0&&(Z={},W[b.id]=Z);let k=Z[B];return k===void 0&&(k=d(c()),Z[B]=k),k}function d(_){const b=[],z=[],B=[];for(let W=0;W<e;W++)b[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,b,z,B){const W=r.attributes,Z=b.attributes;let k=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const ht=W[G];let xt=Z[G];if(xt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),ht===void 0||ht.attribute!==xt||xt&&ht.data!==xt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(_,b,z,B){const W={},Z=b.attributes;let k=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let ht=Z[G];ht===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor));const xt={};xt.attribute=ht,ht&&ht.data&&(xt.data=ht.data),W[G]=xt,k++}r.attributes=W,r.attributesNum=k,r.index=B}function v(){const _=r.newAttributes;for(let b=0,z=_.length;b<z;b++)_[b]=0}function m(_){f(_,0)}function f(_,b){const z=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;z[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),W[_]!==b&&(i.vertexAttribDivisor(_,b),W[_]=b)}function M(){const _=r.newAttributes,b=r.enabledAttributes;for(let z=0,B=b.length;z<B;z++)b[z]!==_[z]&&(i.disableVertexAttribArray(z),b[z]=0)}function x(_,b,z,B,W,Z,k){k===!0?i.vertexAttribIPointer(_,b,z,W,Z):i.vertexAttribPointer(_,b,z,B,W,Z)}function y(_,b,z,B){v();const W=B.attributes,Z=z.getAttributes(),k=b.defaultAttributeValues;for(const J in Z){const G=Z[J];if(G.location>=0){let lt=W[J];if(lt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),lt!==void 0){const ht=lt.normalized,xt=lt.itemSize,Kt=t.get(lt);if(Kt===void 0)continue;const ie=Kt.buffer,X=Kt.type,Q=Kt.bytesPerElement,_t=X===i.INT||X===i.UNSIGNED_INT||lt.gpuType===Yr;if(lt.isInterleavedBufferAttribute){const ut=lt.data,Dt=ut.stride,Tt=lt.offset;if(ut.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)f(G.location+Gt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Gt=0;Gt<G.locationSize;Gt++)x(G.location+Gt,xt/G.locationSize,X,ht,Dt*Q,(Tt+xt/G.locationSize*Gt)*Q,_t)}else{if(lt.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)f(G.location+ut,lt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ut=0;ut<G.locationSize;ut++)m(G.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ut=0;ut<G.locationSize;ut++)x(G.location+ut,xt/G.locationSize,X,ht,xt*Q,xt/G.locationSize*ut*Q,_t)}}else if(k!==void 0){const ht=k[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}M()}function C(){L();for(const _ in n){const b=n[_];for(const z in b){const B=b[z];for(const W in B)h(B[W].object),delete B[W];delete b[z]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const z in b){const B=b[z];for(const W in B)h(B[W].object),delete B[W];delete b[z]}delete n[_.id]}function w(_){for(const b in n){const z=n[b];if(z[_.id]===void 0)continue;const B=z[_.id];for(const W in B)h(B[W].object),delete B[W];delete z[_.id]}}function L(){V(),a=!0,r!==s&&(r=s,l(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function rp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ap(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function op(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let y=f.clippingState||null;c.value=y,y=h(g,d,x,p);for(let C=0;C!==x;++C)y[C]=e[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function cp(i){let t=new WeakMap;function e(a,o){return o===dr?a.mapping=oi:o===fr&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dr||o===fr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _h(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ko extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Cc=[.125,.215,.35,.446,.526,.582],ni=20,Xa=new ko,Pc=new Nt;let qa=null,$a=0,Ya=0,Ka=!1;const ei=(1+Math.sqrt(5))/2,Pi=1/ei,Lc=[new R(-ei,Pi,0),new R(ei,Pi,0),new R(-Pi,0,ei),new R(Pi,0,ei),new R(0,ei,-Pi),new R(0,ei,Pi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,$a,Ya),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Gi,format:Qe,colorSpace:Pn,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=hp(r,t,e)}return s}_compileMaterial(t){const e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,s){const o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pc),h.toneMapping=Rn,h.autoClear=!1;const p=new sa({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Lt(new $e,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Pc),v=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;Gs(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===oi||t.mapping===ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Lt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ni-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const f=[];let M=0;for(let w=0;w<ni;++w){const L=w/v,V=Math.exp(-L*L/2);f.push(V),w===0?M+=V:w<m&&(M+=2*V)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[s],C=3*y*(s>x-Ui?s-x+Ui:0),T=4*(this._cubeSize-y);Gs(e,C,T,3*y,2*y),c.setRenderTarget(e),c.render(u,Xa)}}function lp(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+Cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ui?c=Cc[a-i+Ui-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,L=T>2?0:-1,V=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(V,v*g*T),x.set(d,m*g*T);const _=[T,T,T,T,T,T];y.set(_,f*g*T)}const C=new Me;C.setAttribute("position",new qe(M,v)),C.setAttribute("uv",new qe(x,m)),C.setAttribute("faceIndex",new qe(y,f)),t.push(C),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hp(i,t,e){const n=new Float32Array(ni),s=new R(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Dc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Uc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function up(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===dr||c===fr,h=c===oi||c===ci;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new lo(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new lo(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let x=0,y=M.length;x<y;x+=3){const C=M[x+0],T=M[x+1],w=M[x+2];d.push(C,T,T,w,w,C)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const C=x+0,T=x+1,w=x+2;d.push(C,T,T,w,w,C)}}else return;const m=new(ch(d)?Oo:Fo)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function pp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M];for(let M=0;M<v.length;M++)e.update(f,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gp(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let _=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*T*4*u),L=new No(w,C,T,u);L.type=cn,L.needsUpdate=!0;const V=y*4;for(let b=0;b<u;b++){const z=f[b],B=M[b],W=x[b],Z=C*T*4*b;for(let k=0;k<z.count;k++){const J=k*V;g===!0&&(s.fromBufferAttribute(z,k),w[Z+J+0]=s.x,w[Z+J+1]=s.y,w[Z+J+2]=s.z,w[Z+J+3]=0),v===!0&&(s.fromBufferAttribute(B,k),w[Z+J+4]=s.x,w[Z+J+5]=s.y,w[Z+J+6]=s.z,w[Z+J+7]=0),m===!0&&(s.fromBufferAttribute(W,k),w[Z+J+8]=s.x,w[Z+J+9]=s.y,w[Z+J+10]=s.z,w[Z+J+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new at(C,T)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _p(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Go extends Ae{constructor(t,e,n,s,r,a,o,c,l,h=ri){if(h!==ri&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=Vn),n===void 0&&h===hi&&(n=li),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=c!==void 0?c:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xh=new Ae,Nc=new Go(1,1),Mh=new No,yh=new dh,Sh=new Bo,Fc=[],Oc=[],zc=new Float32Array(16),Bc=new Float32Array(9),kc=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),Se(e,n)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),Se(e,n)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),Se(e,n)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=Do,r=Nc):r=xh,e.setTexture2D(t||r,s)}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function Op(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Mp;case 35666:return yp;case 35674:return Sp;case 35675:return Ep;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Lp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}function zp(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function kp(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hp(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Gp(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vp(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wp(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xp(i,t){i.uniform1iv(this.addr,t)}function qp(i,t){i.uniform2iv(this.addr,t)}function $p(i,t){i.uniform3iv(this.addr,t)}function Yp(i,t){i.uniform4iv(this.addr,t)}function Kp(i,t){i.uniform1uiv(this.addr,t)}function Zp(i,t){i.uniform2uiv(this.addr,t)}function Jp(i,t){i.uniform3uiv(this.addr,t)}function jp(i,t){i.uniform4uiv(this.addr,t)}function Qp(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||xh,r[a])}function tm(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function em(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sh,r[a])}function nm(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mh,r[a])}function im(i){switch(i){case 5126:return zp;case 35664:return Bp;case 35665:return kp;case 35666:return Hp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return $p;case 35669:case 35673:return Yp;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Op(e.type)}}class rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=im(e.type)}}class am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function om(i,t,e){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hc(e,l===void 0?new sm(o,i,t):new rm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new am(o),Hc(e,u)),e=u}}}class tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);om(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cm=37297;let lm=0;function hm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function um(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===fs&&e===ds?n="LinearDisplayP3ToLinearSRGB":t===ds&&e===fs&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case Ms:return[n,"LinearTransferOETF"];case Oe:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hm(i.getShaderSource(t),a)}else return s}function dm(i,t){const e=um(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fm(i,t){let e;switch(t){case Wl:e="Linear";break;case Xl:e="Reinhard";break;case ql:e="Cineon";break;case $l:e="ACESFilmic";break;case Kl:e="AgX";break;case Zl:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new R;function pm(){jt.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function gm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _m(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function Wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(vm,Mm)}const xm=new Map;function Mm(i,t){let e=Ft[t];if(e===void 0){const n=xm.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(ym,Sm)}function Sm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Em(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case ci:t="ENVMAP_TYPE_CUBE";break;case xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function wm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Am(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Em(e),l=bm(e),h=Tm(e),u=wm(e),d=Am(e),p=mm(e),g=gm(r),v=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),f.length>0&&(f+=`
`)):(m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),f=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Rn?fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,dm("linearToOutputTexel",e.outputColorSpace),pm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=ho(a),a=Wc(a,e),a=Xc(a,e),o=ho(o),o=Wc(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+a,y=M+f+o,C=Gc(s,s.VERTEX_SHADER,x),T=Gc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(b){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),W=s.getShaderInfoLog(T).trim();let Z=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const J=Vc(s,C,"vertex"),G=Vc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(k=!1);k&&(b.diagnostics={runnable:Z,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(C),s.deleteShader(T),L=new tr(s,v),V=_m(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let V;this.getAttributes=function(){return V===void 0&&w(this),V};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,cm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Cm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lm(t),e.set(t,n)),n}}class Lm{constructor(t){this.id=Cm++,this.code=t,this.usedTimes=0}}function Im(i,t,e,n,s,r,a){const o=new ia,c=new Pm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,b,z,B,W){const Z=B.fog,k=W.geometry,J=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),lt=G&&G.mapping===xs?G.image.height:null,ht=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=xt!==void 0?xt.length:0;let ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let X,Q,_t,ut;if(ht){const Ne=on[ht];X=Ne.vertexShader,Q=Ne.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,c.update(_),_t=c.getVertexShaderID(_),ut=c.getFragmentShaderID(_);const Dt=i.getRenderTarget(),Tt=W.isInstancedMesh===!0,Gt=W.isBatchedMesh===!0,re=!!_.map,Vt=!!_.matcap,P=!!G,He=!!_.aoMap,Bt=!!_.lightMap,qt=!!_.bumpMap,Rt=!!_.normalMap,le=!!_.displacementMap,It=!!_.emissiveMap,A=!!_.metalnessMap,S=!!_.roughnessMap,N=_.anisotropy>0,$=_.clearcoat>0,j=_.dispersion>0,q=_.iridescence>0,Mt=_.sheen>0,it=_.transmission>0,dt=N&&!!_.anisotropyMap,$t=$&&!!_.clearcoatMap,tt=$&&!!_.clearcoatNormalMap,pt=$&&!!_.clearcoatRoughnessMap,Ct=q&&!!_.iridescenceMap,Pt=q&&!!_.iridescenceThicknessMap,mt=Mt&&!!_.sheenColorMap,kt=Mt&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,oe=!!_.specularColorMap,I=!!_.specularIntensityMap,ot=it&&!!_.transmissionMap,H=it&&!!_.thicknessMap,K=!!_.gradientMap,st=!!_.alphaMap,ct=_.alphaTest>0,Wt=!!_.alphaHash,ge=!!_.extensions;let Ue=Rn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const Zt={shaderID:ht,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&W._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&W.instanceColor!==null,instancingMorph:Tt&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Pn,alphaToCoverage:!!_.alphaToCoverage,map:re,matcap:Vt,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:lt,aoMap:He,lightMap:Bt,bumpMap:qt,normalMap:Rt,displacementMap:p&&le,emissiveMap:It,normalMapObjectSpace:Rt&&_.normalMapType===th,normalMapTangentSpace:Rt&&_.normalMapType===Io,metalnessMap:A,roughnessMap:S,anisotropy:N,anisotropyMap:dt,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:tt,clearcoatRoughnessMap:pt,dispersion:j,iridescence:q,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:Mt,sheenColorMap:mt,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:oe,specularIntensityMap:I,transmission:it,transmissionMap:ot,thicknessMap:H,gradientMap:K,opaque:_.transparent===!1&&_.blending===si&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ct,alphaHash:Wt,combine:_.combine,mapUv:re&&m(_.map.channel),aoMapUv:He&&m(_.aoMap.channel),lightMapUv:Bt&&m(_.lightMap.channel),bumpMapUv:qt&&m(_.bumpMap.channel),normalMapUv:Rt&&m(_.normalMap.channel),displacementMapUv:le&&m(_.displacementMap.channel),emissiveMapUv:It&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:S&&m(_.roughnessMap.channel),anisotropyMapUv:dt&&m(_.anisotropyMap.channel),clearcoatMapUv:$t&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(_.sheenRoughnessMap.channel),specularMapUv:Ut&&m(_.specularMap.channel),specularColorMapUv:oe&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:ot&&m(_.transmissionMap.channel),thicknessMapUv:H&&m(_.thicknessMap.channel),alphaMapUv:st&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Rt||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(re||st),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:re&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function M(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)b.push(z),b.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(x(b,_),y(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const b=v[_.type];let z;if(b){const B=on[b];z=mh.clone(B.uniforms)}else z=_.uniforms;return z}function T(_,b){let z;for(let B=0,W=h.length;B<W;B++){const Z=h[B];if(Z.cacheKey===b){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new Rm(i,b,_,r),h.push(z)),z}function w(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function L(_){c.remove(_)}function V(){c.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:V}}function Dm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Um),n.length>1&&n.sort(d||Yc),s.length>1&&s.sort(d||Yc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Nm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zm=0;function Bm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){const t=new Fm,e=Om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Xt,a=new Xt;function o(l){let h=0,u=0,d=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,M=0,x=0,y=0,C=0,T=0,w=0;l.sort(Bm);for(let V=0,_=l.length;V<_;V++){const b=l[V],z=b.color,B=b.intensity,W=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(b.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(b.sh.coefficients[k],B);w++}else if(b.isDirectionalLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=b.shadow.matrix,M++}n.directional[p]=k,p++}else if(b.isSpotLight){const k=t.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(z).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,n.spot[v]=k;const J=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,J.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,b.castShadow){const G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Z,y++}v++}else if(b.isRectAreaLight){const k=t.get(b);k.color.copy(z).multiplyScalar(B),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=k,m++}else if(b.isPointLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const J=b.shadow,G=e.get(b);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=k,g++}else if(b.isHemisphereLight){const k=t.get(b);k.skyColor.copy(b.color).multiplyScalar(B),k.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=w,n.version=zm++)}function c(l,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const x=l[f];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Zc(i){const t=new km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Hm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Eh extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bh extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
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
}`;function Wm(i,t,e){let n=new ra;const s=new at,r=new at,a=new ue,o=new Eh({depthPacking:Ql}),c=new bh,l={},h=e.maxTextureSize,u={[pn]:De,[De]:pn,[Ze]:Ze},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Gm,fragmentShader:Vm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let f=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const V=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),z=i.state;z.setBlending(An),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==dn&&this.type===dn,W=f===dn&&this.type!==dn;for(let Z=0,k=T.length;Z<k;Z++){const J=T[Z],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const lt=G.getFrameExtents();if(s.multiply(lt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){const xt=this.type!==dn?{minFilter:Le,magFilter:Le}:{};G.map!==null&&G.map.dispose(),G.map=new Wn(s.x,s.y,xt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let xt=0;xt<ht;xt++){const Kt=G.getViewport(xt);a.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),z.viewport(a),G.updateMatrices(J,xt),n=G.getFrustum(),y(w,L,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===dn&&M(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(V,_,b)};function M(T,w){const L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,p,v,null)}function x(T,w,L,V){let _=null;const b=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)_=b;else if(_=L.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=_.uuid,B=w.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Z=W[B];Z===void 0&&(Z=_.clone(),W[B]=Z,w.addEventListener("dispose",C)),_=Z}if(_.visible=w.visible,_.wireframe=w.wireframe,V===dn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=i.properties.get(_);z.light=L}return _}function y(T,w,L,V,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),W=T.material;if(Array.isArray(W)){const Z=B.groups;for(let k=0,J=Z.length;k<J;k++){const G=Z[k],lt=W[G.materialIndex];if(lt&&lt.visible){const ht=x(T,lt,V,_);T.onBeforeShadow(i,T,w,L,B,ht,G),i.renderBufferDirect(L,null,B,ht,T,G),T.onAfterShadow(i,T,w,L,B,ht,G)}}}else if(W.visible){const Z=x(T,W,V,_);T.onBeforeShadow(i,T,w,L,B,Z,null),i.renderBufferDirect(L,null,B,Z,T,null),T.onAfterShadow(i,T,w,L,B,Z,null)}}const z=T.children;for(let B=0,W=z.length;B<W;B++)y(z[B],w,L,V,_)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const V=l[L],_=T.target.uuid;_ in V&&(V[_].dispose(),delete V[_])}}}const Xm={[rr]:ar,[or]:hr,[cr]:ur,[ai]:lr,[ar]:rr,[hr]:or,[ur]:cr,[lr]:ai};function qm(i){function t(){let I=!1;const ot=new ue;let H=null;const K=new ue(0,0,0,0);return{setMask:function(st){H!==st&&!I&&(i.colorMask(st,st,st,st),H=st)},setLocked:function(st){I=st},setClear:function(st,ct,Wt,ge,Ue){Ue===!0&&(st*=ge,ct*=ge,Wt*=ge),ot.set(st,ct,Wt,ge),K.equals(ot)===!1&&(i.clearColor(st,ct,Wt,ge),K.copy(ot))},reset:function(){I=!1,H=null,K.set(-1,0,0,0)}}}function e(){let I=!1,ot=!1,H=null,K=null,st=null;return{setReversed:function(ct){ot=ct},setTest:function(ct){ct?_t(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ct){H!==ct&&!I&&(i.depthMask(ct),H=ct)},setFunc:function(ct){if(ot&&(ct=Xm[ct]),K!==ct){switch(ct){case rr:i.depthFunc(i.NEVER);break;case ar:i.depthFunc(i.ALWAYS);break;case or:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case cr:i.depthFunc(i.EQUAL);break;case lr:i.depthFunc(i.GEQUAL);break;case hr:i.depthFunc(i.GREATER);break;case ur:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){I=ct},setClear:function(ct){st!==ct&&(i.clearDepth(ct),st=ct)},reset:function(){I=!1,H=null,K=null,st=null}}}function n(){let I=!1,ot=null,H=null,K=null,st=null,ct=null,Wt=null,ge=null,Ue=null;return{setTest:function(Zt){I||(Zt?_t(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!I&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,Ne,_n){(H!==Zt||K!==Ne||st!==_n)&&(i.stencilFunc(Zt,Ne,_n),H=Zt,K=Ne,st=_n)},setOp:function(Zt,Ne,_n){(ct!==Zt||Wt!==Ne||ge!==_n)&&(i.stencilOp(Zt,Ne,_n),ct=Zt,Wt=Ne,ge=_n)},setLocked:function(Zt){I=Zt},setClear:function(Zt){Ue!==Zt&&(i.clearStencil(Zt),Ue=Zt)},reset:function(){I=!1,ot=null,H=null,K=null,st=null,ct=null,Wt=null,ge=null,Ue=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,M=null,x=null,y=null,C=null,T=new Nt(0,0,0),w=0,L=!1,V=null,_=null,b=null,z=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,k=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=k>=2);let G=null,lt={};const ht=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Kt=new ue().fromArray(ht),ie=new ue().fromArray(xt);function X(I,ot,H,K){const st=new Uint8Array(4),ct=i.createTexture();i.bindTexture(I,ct),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<H;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ot+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ct}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(ai),Bt(!1),qt(no),_t(i.CULL_FACE),P(An);function _t(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function ut(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Dt(I,ot){return h[I]!==ot?(i.bindFramebuffer(I,ot),h[I]=ot,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Tt(I,ot){let H=d,K=!1;if(I){H=u.get(ot),H===void 0&&(H=[],u.set(ot,H));const st=I.textures;if(H.length!==st.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Wt=st.length;ct<Wt;ct++)H[ct]=i.COLOR_ATTACHMENT0+ct;H.length=st.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function Gt(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const re={[kn]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[wl]:i.FUNC_REVERSE_SUBTRACT};re[Al]=i.MIN,re[Rl]=i.MAX;const Vt={[Cl]:i.ZERO,[Pl]:i.ONE,[Ll]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[Ol]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Dl]:i.DST_ALPHA,[Il]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[Fl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[zl]:i.CONSTANT_COLOR,[Bl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Hl]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,ot,H,K,st,ct,Wt,ge,Ue,Zt){if(I===An){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),I!==bl){if(I!==v||Zt!==L){if((m!==kn||x!==kn)&&(i.blendEquation(i.FUNC_ADD),m=kn,x=kn),Zt)switch(I){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,M=null,y=null,C=null,T.set(0,0,0),w=0,v=I,L=Zt}return}st=st||ot,ct=ct||H,Wt=Wt||K,(ot!==m||st!==x)&&(i.blendEquationSeparate(re[ot],re[st]),m=ot,x=st),(H!==f||K!==M||ct!==y||Wt!==C)&&(i.blendFuncSeparate(Vt[H],Vt[K],Vt[ct],Vt[Wt]),f=H,M=K,y=ct,C=Wt),(ge.equals(T)===!1||Ue!==w)&&(i.blendColor(ge.r,ge.g,ge.b,Ue),T.copy(ge),w=Ue),v=I,L=!1}function He(I,ot){I.side===Ze?ut(i.CULL_FACE):_t(i.CULL_FACE);let H=I.side===De;ot&&(H=!H),Bt(H),I.blending===si&&I.transparent===!1?P(An):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){V!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),V=I)}function qt(I){I!==Sl?(_t(i.CULL_FACE),I!==_&&(I===no?i.cullFace(i.BACK):I===El?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),_=I}function Rt(I){I!==b&&(Z&&i.lineWidth(I),b=I)}function le(I,ot,H){I?(_t(i.POLYGON_OFFSET_FILL),(z!==ot||B!==H)&&(i.polygonOffset(ot,H),z=ot,B=H)):ut(i.POLYGON_OFFSET_FILL)}function It(I){I?_t(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+W-1),G!==I&&(i.activeTexture(I),G=I)}function S(I,ot,H){H===void 0&&(G===null?H=i.TEXTURE0+W-1:H=G);let K=lt[H];K===void 0&&(K={type:void 0,texture:void 0},lt[H]=K),(K.type!==I||K.texture!==ot)&&(G!==H&&(i.activeTexture(H),G=H),i.bindTexture(I,ot||Q[I]),K.type=I,K.texture=ot)}function N(){const I=lt[G];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Kt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function mt(I){ie.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function kt(I,ot){let H=c.get(ot);H===void 0&&(H=new WeakMap,c.set(ot,H));let K=H.get(I);K===void 0&&(K=i.getUniformBlockIndex(ot,I.name),H.set(I,K))}function Ut(I,ot){const K=c.get(ot).get(I);o.get(ot)!==K&&(i.uniformBlockBinding(ot,K,I.__bindingPointIndex),o.set(ot,K))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,lt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,M=null,x=null,y=null,C=null,T=new Nt(0,0,0),w=0,L=!1,V=null,_=null,b=null,z=null,B=null,Kt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:ut,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:Gt,setBlending:P,setMaterial:He,setFlipSided:Bt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:le,setScissorTest:It,activeTexture:A,bindTexture:S,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:pt,texImage3D:Ct,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:$t,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:Pt,viewport:mt,reset:oe}}function Jc(i,t,e,n){const s=$m(n);switch(e){case wo:return i*t;case Ro:return i*t;case Co:return i*t*2;case Jr:return i*t/s.components*s.byteLength;case jr:return i*t/s.components*s.byteLength;case Po:return i*t*2/s.components*s.byteLength;case Qr:return i*t*2/s.components*s.byteLength;case Ao:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ss:case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gr:case vr:return Math.max(i,16)*Math.max(t,8)/4;case mr:case _r:return Math.max(i,8)*Math.max(t,8)/2;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Er:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case br:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ar:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ur:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case as:case Fr:case Or:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lo:case zr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Br:case kr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case mn:case Eo:return{byteLength:1,components:1};case Bi:case bo:case Gi:return{byteLength:2,components:1};case Kr:case Zr:return{byteLength:2,components:4};case Vn:case Yr:case cn:return{byteLength:4,components:1};case To:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ym(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Hr("canvas")}function v(A,S,N){let $=1;const j=It(A);if((j.width>N||j.height>N)&&($=N/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor($*j.width),Mt=Math.floor($*j.height);u===void 0&&(u=g(q,Mt));const it=S?g(q,Mt):u;return it.width=q,it.height=Mt,it.getContext("2d").drawImage(A,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Mt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Le&&A.minFilter!==Je}function f(A){i.generateMipmap(A)}function M(A,S,N,$,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),S===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),S===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),S===i.RGBA){const Mt=j?us:jt.getTransfer($);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=Mt===ce?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,S){let N;return A?S===null||S===Vn||S===li?N=i.DEPTH24_STENCIL8:S===cn?N=i.DEPTH32F_STENCIL8:S===Bi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vn||S===li?N=i.DEPTH_COMPONENT24:S===cn?N=i.DEPTH_COMPONENT32F:S===Bi&&(N=i.DEPTH_COMPONENT16),N}function y(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==Je?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&h.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),V(S)}function w(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,$=d.get(N);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(A),Object.keys($).length===0&&d.delete(N)}n.remove(A)}function L(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const N=A.source,$=d.get(N);delete $[S.__cacheKey],a.memory.textures--}function V(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[$][j]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=A.textures;for(let $=0,j=N.length;$<j;$++){const q=n.get(N[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(A)}let _=0;function b(){_=0}function z(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function B(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const N=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,A,S);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+S)}function Z(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ie(N,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+S)}function k(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ie(N,A,S);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+S)}function J(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){X(N,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+S)}const G={[hs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},lt={[Le]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ht={[eh]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[Do]:i.LEQUAL,[ih]:i.EQUAL,[ah]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function xt(A,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Je||S.magFilter===js||S.magFilter===ts||S.magFilter===Gn||S.minFilter===Je||S.minFilter===js||S.minFilter===ts||S.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Le||S.minFilter!==ts&&S.minFilter!==Gn||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Kt(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const q=B(S);if(q!==A.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[q].usedTimes++;const Mt=j[A.__cacheKey];Mt!==void 0&&(j[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(S)),A.__cacheKey=q,A.__webglTexture=j[q].texture}return N}function ie(A,S,N){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const j=Kt(A,S),q=S.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+N);const Mt=n.get(q);if(q.version!==Mt.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const it=jt.getPrimaries(jt.workingColorSpace),dt=S.colorSpace===Tn?null:jt.getPrimaries(S.colorSpace),$t=S.colorSpace===Tn||it===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=v(S.image,!1,s.maxTextureSize);tt=le(S,tt);const pt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type);let Pt=M(S.internalFormat,pt,Ct,S.colorSpace,S.isVideoTexture);xt($,S);let mt;const kt=S.mipmaps,Ut=S.isVideoTexture!==!0,oe=Mt.__version===void 0||j===!0,I=q.dataReady,ot=y(S,tt);if(S.isDepthTexture)Pt=x(S.format===hi,S.type),oe&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Ct,null));else if(S.isDataTexture)if(kt.length>0){Ut&&oe&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,kt[0].width,kt[0].height);for(let H=0,K=kt.length;H<K;H++)mt=kt[H],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Ct,mt.data);S.generateMipmaps=!1}else Ut?(oe&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,tt.width,tt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Ct,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Ct,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Pt,kt[0].width,kt[0].height,tt.depth);for(let H=0,K=kt.length;H<K;H++)if(mt=kt[H],S.format!==Qe)if(pt!==null)if(Ut){if(I)if(S.layerUpdates.size>0){const st=Jc(mt.width,mt.height,S.format,S.type);for(const ct of S.layerUpdates){const Wt=mt.data.subarray(ct*st/mt.data.BYTES_PER_ELEMENT,(ct+1)*st/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ct,mt.width,mt.height,1,pt,Wt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,pt,Ct,mt.data)}else{Ut&&oe&&e.texStorage2D(i.TEXTURE_2D,ot,Pt,kt[0].width,kt[0].height);for(let H=0,K=kt.length;H<K;H++)mt=kt[H],S.format!==Qe?pt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(S.isDataArrayTexture)if(Ut){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Pt,tt.width,tt.height,tt.depth),I)if(S.layerUpdates.size>0){const H=Jc(tt.width,tt.height,S.format,S.type);for(const K of S.layerUpdates){const st=tt.data.subarray(K*H/tt.data.BYTES_PER_ELEMENT,(K+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,pt,Ct,st)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,pt,Ct,tt.data);else if(S.isData3DTexture)Ut?(oe&&e.texStorage3D(i.TEXTURE_3D,ot,Pt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,pt,Ct,tt.data);else if(S.isFramebufferTexture){if(oe)if(Ut)e.texStorage2D(i.TEXTURE_2D,ot,Pt,tt.width,tt.height);else{let H=tt.width,K=tt.height;for(let st=0;st<ot;st++)e.texImage2D(i.TEXTURE_2D,st,Pt,H,K,0,pt,Ct,null),H>>=1,K>>=1}}else if(kt.length>0){if(Ut&&oe){const H=It(kt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Pt,H.width,H.height)}for(let H=0,K=kt.length;H<K;H++)mt=kt[H],Ut?I&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,pt,Ct,mt):e.texImage2D(i.TEXTURE_2D,H,Pt,pt,Ct,mt);S.generateMipmaps=!1}else if(Ut){if(oe){const H=It(tt);e.texStorage2D(i.TEXTURE_2D,ot,Pt,H.width,H.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,Ct,tt);m(S)&&f($),Mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function X(A,S,N){if(S.image.length!==6)return;const $=Kt(A,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const q=n.get(j);if(j.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+N);const Mt=jt.getPrimaries(jt.workingColorSpace),it=S.colorSpace===Tn?null:jt.getPrimaries(S.colorSpace),dt=S.colorSpace===Tn||Mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const $t=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!$t&&!tt?pt[K]=v(S.image[K],!0,s.maxCubemapSize):pt[K]=tt?S.image[K].image:S.image[K],pt[K]=le(S,pt[K]);const Ct=pt[0],Pt=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),kt=M(S.internalFormat,Pt,mt,S.colorSpace),Ut=S.isVideoTexture!==!0,oe=q.__version===void 0||$===!0,I=j.dataReady;let ot=y(S,Ct);xt(i.TEXTURE_CUBE_MAP,S);let H;if($t){Ut&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,Ct.width,Ct.height);for(let K=0;K<6;K++){H=pt[K].mipmaps;for(let st=0;st<H.length;st++){const ct=H[st];S.format!==Qe?Pt!==null?Ut?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,ct.width,ct.height,Pt,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,kt,ct.width,ct.height,0,Pt,mt,ct.data)}}}else{if(H=S.mipmaps,Ut&&oe){H.length>0&&ot++;const K=It(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,kt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Pt,mt,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,pt[K].width,pt[K].height,0,Pt,mt,pt[K].data);for(let st=0;st<H.length;st++){const Wt=H[st].image[K].image;Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,Wt.width,Wt.height,Pt,mt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,kt,Wt.width,Wt.height,0,Pt,mt,Wt.data)}}else{Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,mt,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Pt,mt,pt[K]);for(let st=0;st<H.length;st++){const ct=H[st];Ut?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,Pt,mt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,kt,Pt,mt,ct.image[K])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,N,$,j,q){const Mt=r.convert(N.format,N.colorSpace),it=r.convert(N.type),dt=M(N.internalFormat,Mt,it,N.colorSpace);if(!n.get(S).__hasExternalTextures){const tt=Math.max(1,S.width>>q),pt=Math.max(1,S.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,dt,tt,pt,S.depth,0,Mt,it,null):e.texImage2D(j,q,dt,tt,pt,0,Mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,n.get(N).__webglTexture,0,Bt(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,n.get(N).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,S,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=x(S.stencilBuffer,j),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=Bt(S);qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,q,S.width,S.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const $=S.textures;for(let j=0;j<$.length;j++){const q=$[j],Mt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),dt=M(q.internalFormat,Mt,it,q.colorSpace),$t=Bt(S);N&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,dt,S.width,S.height):qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,dt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,j=Bt(S);if(S.depthTexture.format===ri)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===hi)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Dt(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),_t(S.__webglDepthbuffer[$],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_t(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,S,N){const $=n.get(A);S!==void 0&&Q($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Dt(A)}function Gt(A){const S=A.texture,N=n.get(A),$=n.get(S);A.addEventListener("dispose",T);const j=A.textures,q=A.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[it]=[];for(let dt=0;dt<S.mipmaps.length;dt++)N.__webglFramebuffer[it][dt]=i.createFramebuffer()}else N.__webglFramebuffer[it]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)N.__webglFramebuffer[it]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let it=0,dt=j.length;it<dt;it++){const $t=n.get(j[it]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const dt=j[it];N.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[it]);const $t=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),pt=M(dt.internalFormat,$t,tt,dt.colorSpace,A.isXRRenderTarget===!0),Ct=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,N.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(N.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Q(N.__webglFramebuffer[it][dt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else Q(N.__webglFramebuffer[it],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let it=0,dt=j.length;it<dt;it++){const $t=j[it],tt=n.get($t);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),xt(i.TEXTURE_2D,$t),Q(N.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m($t)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),xt(it,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Q(N.__webglFramebuffer[dt],A,S,i.COLOR_ATTACHMENT0,it,dt);else Q(N.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,it,0);m(S)&&f(it),e.unbindTexture()}A.depthBuffer&&Dt(A)}function re(A){const S=A.textures;for(let N=0,$=S.length;N<$;N++){const j=S[N];if(m(j)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(j).__webglTexture;e.bindTexture(q,Mt),f(q),e.unbindTexture()}}}const Vt=[],P=[];function He(A){if(A.samples>0){if(qt(A)===!1){const S=A.textures,N=A.width,$=A.height;let j=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),it=S.length>1;if(it)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const $t=n.get(S[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,j,i.NEAREST),c===!0&&(Vt.length=0,P.length=0,Vt.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Vt.push(q),P.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const $t=n.get(S[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function le(A,S){const N=A.colorSpace,$=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Pn&&N!==Tn&&(jt.getTransfer(N)===ce?($!==Qe||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=Tt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function Th(i,t){function e(n,s=Tn){let r;const a=jt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===To)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eo)return i.BYTE;if(n===bo)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===wo)return i.ALPHA;if(n===Ao)return i.RGB;if(n===Qe)return i.RGBA;if(n===Ro)return i.LUMINANCE;if(n===Co)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Jr)return i.RED;if(n===jr)return i.RED_INTEGER;if(n===Po)return i.RG;if(n===Qr)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===ns||n===is||n===ss||n===rs)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mr||n===gr||n===_r||n===vr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xr||n===Mr||n===yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xr||n===Mr)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sr||n===Er||n===br||n===Tr||n===wr||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Ur||n===Nr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Er)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===br)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ar)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ir)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ur)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nr)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===Fr||n===Or)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===as)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Or)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===zr||n===Br||n===kr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===as)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class wh extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jm=`
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

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Zm,fragmentShader:Jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends pi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const v=new jm,m=e.getContextAttributes();let f=null,M=null;const x=[],y=[],C=new at;let T=null;const w=new ze;w.layers.enable(1),w.viewport=new ue;const L=new ze;L.layers.enable(2),L.viewport=new ue;const V=[w,L],_=new wh;_.layers.enable(1),_.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Ja,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Ja,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Ja,x[X]=Q),Q.getHandSpace()};function B(X){const Q=y.indexOf(X.inputSource);if(Q===-1)return;const _t=x[Q];_t!==void 0&&(_t.update(X.inputSource,X.frame,l||a),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const Q=y[X];Q!==null&&(y[X]=null,x[X].disconnect(Q))}b=null,z=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wn(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,_t=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?hi:ri,_t=m.stencil?li:Vn);const Dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Wn(d.textureWidth,d.textureHeight,{format:Qe,type:mn,depthTexture:new Go(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let Q=0;Q<X.removed.length;Q++){const _t=X.removed[Q],ut=y.indexOf(_t);ut>=0&&(y[ut]=null,x[ut].disconnect(_t))}for(let Q=0;Q<X.added.length;Q++){const _t=X.added[Q];let ut=y.indexOf(_t);if(ut===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=y.length){y.push(_t),ut=Tt;break}else if(y[Tt]===null){y[Tt]=_t,ut=Tt;break}if(ut===-1)break}const Dt=x[ut];Dt&&Dt.connect(_t)}}const k=new R,J=new R;function G(X,Q,_t){k.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const ut=k.distanceTo(J),Dt=Q.projectionMatrix.elements,Tt=_t.projectionMatrix.elements,Gt=Dt[14]/(Dt[10]-1),re=Dt[14]/(Dt[10]+1),Vt=(Dt[9]+1)/Dt[5],P=(Dt[9]-1)/Dt[5],He=(Dt[8]-1)/Dt[0],Bt=(Tt[8]+1)/Tt[0],qt=Gt*He,Rt=Gt*Bt,le=ut/(-He+Bt),It=le*-He;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Dt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Gt+le,S=re+le,N=qt-It,$=Rt+(ut-It),j=Vt*re/S*A,q=P*re/S*A;X.projectionMatrix.makePerspective(N,$,j,q,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function lt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,_t=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),_.near=L.near=w.near=Q,_.far=L.far=w.far=_t,(b!==_.near||z!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,z=_.far);const ut=X.parent,Dt=_.cameras;lt(_,ut);for(let Tt=0;Tt<Dt.length;Tt++)lt(Dt[Tt],ut);Dt.length===2?G(_,w,L):_.projectionMatrix.copy(w.projectionMatrix),ht(X,_,ut)};function ht(X,Q,_t){_t===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=co*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let xt=null;function Kt(X,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;_t.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Tt=0;Tt<_t.length;Tt++){const Gt=_t[Tt];let re=null;if(p!==null)re=p.getViewport(Gt);else{const P=u.getViewSubImage(d,Gt);re=P.viewport,Tt===0&&(t.setRenderTargetTextures(M,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Vt=V[Tt];Vt===void 0&&(Vt=new ze,Vt.layers.enable(Tt),Vt.viewport=new ue,V[Tt]=Vt),Vt.matrix.fromArray(Gt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Gt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(re.x,re.y,re.width,re.height),Tt===0&&(_.matrix.copy(Vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(Vt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Tt=u.getDepthInformation(_t[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let _t=0;_t<x.length;_t++){const ut=y[_t],Dt=x[_t];ut!==null&&Dt!==void 0&&Dt.update(ut,Q,l||a)}xt&&xt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ie=new vh;ie.setAnimationLoop(Kt),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}}const Qn=new ln,t0=new Xt;function e0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ph(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),x=M.envMap,y=M.envMapRotation;x&&(m.envMap.value=x,Qn.copy(y),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(Qn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function l(M,x){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(M,C);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const y=i.createBuffer(),C=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=y.length;T<w;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let V=0,_=L.length;V<_;V++){const b=L[V];if(p(b,T,V,C)===!0){const z=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let Z=0;Z<B.length;Z++){const k=B[Z],J=v(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+W,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,y,C){const T=M.value,w=x+"_"+y;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const L=C[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(M){const x=M.uniforms;let y=0;const C=16;for(let w=0,L=x.length;w<L;w++){const V=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,b=V.length;_<b;_++){const z=V[_],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Z=B.length;W<Z;W++){const k=B[W],J=v(k),G=y%C,lt=G%J.boundary,ht=G+lt;y+=lt,ht!==0&&C-ht<J.storage&&(y+=C-ht),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=J.storage}}}const T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Vo{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Rn,this.toneMappingExposure=1;const x=this;let y=!1,C=0,T=0,w=null,L=-1,V=null;const _=new ue,b=new ue;let z=null;const B=new Nt(0);let W=0,Z=e.width,k=e.height,J=1,G=null,lt=null;const ht=new ue(0,0,Z,k),xt=new ue(0,0,Z,k);let Kt=!1;const ie=new ra;let X=!1,Q=!1;const _t=new Xt,ut=new Xt,Dt=new R,Tt=new ue,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Vt(){return w===null?J:1}let P=n;function He(E,D){return e.getContext(E,D)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$r}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const D="webgl2";if(P=He(D,E),P===null)throw He(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,qt,Rt,le,It,A,S,N,$,j,q,Mt,it,dt,$t,tt,pt,Ct,Pt,mt,kt,Ut,oe,I;function ot(){Bt=new dp(P),Bt.init(),Ut=new Th(P,Bt),qt=new ap(P,Bt,t,Ut),Rt=new qm(P),qt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),le=new mp(P),It=new Dm,A=new Ym(P,Bt,Rt,It,qt,Ut,le),S=new cp(x),N=new up(x),$=new yu(P),oe=new sp(P,$),j=new fp(P,$,le,oe),q=new _p(P,j,$,le),Pt=new gp(P,qt,A),tt=new op(It),Mt=new Im(x,S,N,Bt,qt,oe,tt),it=new e0(x,It),dt=new Nm,$t=new Hm(Bt),Ct=new ip(x,S,N,Rt,q,d,c),pt=new Wm(x,q,qt),I=new n0(P,le,qt,Rt),mt=new rp(P,Bt,le),kt=new pp(P,Bt,le),le.programs=Mt.programs,x.capabilities=qt,x.extensions=Bt,x.properties=It,x.renderLists=dt,x.shadowMap=pt,x.state=Rt,x.info=le}ot();const H=new Qm(x,P);this.xr=H,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(Z,k,!1))},this.getSize=function(E){return E.set(Z,k)},this.setSize=function(E,D,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,k=D,e.width=Math.floor(E*J),e.height=Math.floor(D*J),F===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Z*J,k*J).floor()},this.setDrawingBufferSize=function(E,D,F){Z=E,k=D,J=F,e.width=Math.floor(E*F),e.height=Math.floor(D*F),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,D,F,O){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,D,F,O),Rt.viewport(_.copy(ht).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,D,F,O){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,D,F,O),Rt.scissor(b.copy(xt).multiplyScalar(J).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){Rt.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,D=!0,F=!0){let O=0;if(E){let U=!1;if(w!==null){const et=w.texture.format;U=et===ta||et===Qr||et===jr}if(U){const et=w.texture.type,rt=et===mn||et===Vn||et===Bi||et===li||et===Kr||et===Zr,gt=Ct.getClearColor(),vt=Ct.getClearAlpha(),Et=gt.r,wt=gt.g,yt=gt.b;rt?(p[0]=Et,p[1]=wt,p[2]=yt,p[3]=vt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Et,g[1]=wt,g[2]=yt,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else O|=P.COLOR_BUFFER_BIT}D&&(O|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),$t.dispose(),It.dispose(),S.dispose(),N.dispose(),q.dispose(),oe.dispose(),I.dispose(),Mt.dispose(),H.dispose(),H.removeEventListener("sessionstart",sc),H.removeEventListener("sessionend",rc),$n.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=le.autoReset,D=pt.enabled,F=pt.autoUpdate,O=pt.needsUpdate,U=pt.type;ot(),le.autoReset=E,pt.enabled=D,pt.autoUpdate=F,pt.needsUpdate=O,pt.type=U}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const D=E.target;D.removeEventListener("dispose",Wt),ge(D)}function ge(E){Ue(E),It.remove(E)}function Ue(E){const D=It.get(E).programs;D!==void 0&&(D.forEach(function(F){Mt.releaseProgram(F)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,F,O,U,et){D===null&&(D=Gt);const rt=U.isMesh&&U.matrixWorld.determinant()<0,gt=Kh(E,D,F,O,U);Rt.setMaterial(O,rt);let vt=F.index,Et=1;if(O.wireframe===!0){if(vt=j.getWireframeAttribute(F),vt===void 0)return;Et=2}const wt=F.drawRange,yt=F.attributes.position;let se=wt.start*Et,he=(wt.start+wt.count)*Et;et!==null&&(se=Math.max(se,et.start*Et),he=Math.min(he,(et.start+et.count)*Et)),vt!==null?(se=Math.max(se,0),he=Math.min(he,vt.count)):yt!=null&&(se=Math.max(se,0),he=Math.min(he,yt.count));const fe=he-se;if(fe<0||fe===1/0)return;oe.setup(U,O,gt,F,vt);let Ge,Qt=mt;if(vt!==null&&(Ge=$.get(vt),Qt=kt,Qt.setIndex(Ge)),U.isMesh)O.wireframe===!0?(Rt.setLineWidth(O.wireframeLinewidth*Vt()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(U.isLine){let St=O.linewidth;St===void 0&&(St=1),Rt.setLineWidth(St*Vt()),U.isLineSegments?Qt.setMode(P.LINES):U.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else U.isPoints?Qt.setMode(P.POINTS):U.isSprite&&Qt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,Te=U._multiDrawCounts,te=U._multiDrawCount,en=vt?$.get(vt).bytesPerElement:1,_i=It.get(O).currentProgram.getUniforms();for(let Ve=0;Ve<te;Ve++)_i.setValue(P,"_gl_DrawID",Ve),Qt.render(St[Ve]/en,Te[Ve])}else if(U.isInstancedMesh)Qt.renderInstances(se,fe,U.count);else if(F.isInstancedBufferGeometry){const St=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Te=Math.min(F.instanceCount,St);Qt.renderInstances(se,fe,Te)}else Qt.render(se,fe)};function Zt(E,D,F){E.transparent===!0&&E.side===Ze&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,Es(E,D,F),E.side=pn,E.needsUpdate=!0,Es(E,D,F),E.side=Ze):Es(E,D,F)}this.compile=function(E,D,F=null){F===null&&(F=E),m=$t.get(F),m.init(D),M.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==F&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const O=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let rt=0;rt<et.length;rt++){const gt=et[rt];Zt(gt,F,U),O.add(gt)}else Zt(et,F,U),O.add(et)}),M.pop(),m=null,O},this.compileAsync=function(E,D,F=null){const O=this.compile(E,D,F);return new Promise(U=>{function et(){if(O.forEach(function(rt){It.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){U(E);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ne=null;function _n(E){Ne&&Ne(E)}function sc(){$n.stop()}function rc(){$n.start()}const $n=new vh;$n.setAnimationLoop(_n),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(E){Ne=E,H.setAnimationLoop(E),E===null?$n.stop():$n.start()},H.addEventListener("sessionstart",sc),H.addEventListener("sessionend",rc),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,w),m=$t.get(E,M.length),m.init(D),M.push(m),ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ie.setFromProjectionMatrix(ut),Q=this.localClippingEnabled,X=tt.init(this.clippingPlanes,Q),v=dt.get(E,f.length),v.init(),f.push(v),H.enabled===!0&&H.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&va(et,D,-1/0,x.sortObjects)}va(E,D,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,lt),re=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,re&&Ct.addToRenderList(v,E),this.info.render.frame++,X===!0&&tt.beginShadows();const F=m.state.shadowsArray;pt.render(F,E,D),X===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=v.opaque,U=v.transmissive;if(m.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let rt=0,gt=et.length;rt<gt;rt++){const vt=et[rt];oc(O,U,E,vt)}re&&Ct.render(E);for(let rt=0,gt=et.length;rt<gt;rt++){const vt=et[rt];ac(v,E,vt,vt.viewport)}}else U.length>0&&oc(O,U,E,D),re&&Ct.render(E),ac(v,E,D);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,D),oe.resetDefaultState(),L=-1,V=null,M.pop(),M.length>0?(m=M[M.length-1],X===!0&&tt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function va(E,D,F,O){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){O&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const rt=q.update(E),gt=E.material;gt.visible&&v.push(E,rt,gt,F,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const rt=q.update(E),gt=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Tt.copy(rt.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(gt)){const vt=rt.groups;for(let Et=0,wt=vt.length;Et<wt;Et++){const yt=vt[Et],se=gt[yt.materialIndex];se&&se.visible&&v.push(E,rt,se,F,Tt.z,yt)}}else gt.visible&&v.push(E,rt,gt,F,Tt.z,null)}}const et=E.children;for(let rt=0,gt=et.length;rt<gt;rt++)va(et[rt],D,F,O)}function ac(E,D,F,O){const U=E.opaque,et=E.transmissive,rt=E.transparent;m.setupLightsView(F),X===!0&&tt.setGlobalState(x.clippingPlanes,F),O&&Rt.viewport(_.copy(O)),U.length>0&&Ss(U,D,F),et.length>0&&Ss(et,D,F),rt.length>0&&Ss(rt,D,F),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function oc(E,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Wn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Gi:mn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=m.state.transmissionRenderTarget[O.id],rt=O.viewport||_;et.setSize(rt.z,rt.w);const gt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),re&&Ct.render(F);const vt=x.toneMapping;x.toneMapping=Rn;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),X===!0&&tt.setGlobalState(x.clippingPlanes,O),Ss(E,F,O),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,se=D.length;yt<se;yt++){const he=D[yt],fe=he.object,Ge=he.geometry,Qt=he.material,St=he.group;if(Qt.side===Ze&&fe.layers.test(O.layers)){const Te=Qt.side;Qt.side=De,Qt.needsUpdate=!0,cc(fe,F,O,Ge,Qt,St),Qt.side=Te,Qt.needsUpdate=!0,wt=!0}}wt===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}x.setRenderTarget(gt),x.setClearColor(B,W),Et!==void 0&&(O.viewport=Et),x.toneMapping=vt}function Ss(E,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=E.length;U<et;U++){const rt=E[U],gt=rt.object,vt=rt.geometry,Et=O===null?rt.material:O,wt=rt.group;gt.layers.test(F.layers)&&cc(gt,D,F,vt,Et,wt)}}function cc(E,D,F,O,U,et){E.onBeforeRender(x,D,F,O,U,et),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,D,F,O,E,et),U.transparent===!0&&U.side===Ze&&U.forceSinglePass===!1?(U.side=De,U.needsUpdate=!0,x.renderBufferDirect(F,D,O,U,E,et),U.side=pn,U.needsUpdate=!0,x.renderBufferDirect(F,D,O,U,E,et),U.side=Ze):x.renderBufferDirect(F,D,O,U,E,et),E.onAfterRender(x,D,F,O,U,et)}function Es(E,D,F){D.isScene!==!0&&(D=Gt);const O=It.get(E),U=m.state.lights,et=m.state.shadowsArray,rt=U.state.version,gt=Mt.getParameters(E,U.state,et,D,F),vt=Mt.getProgramCacheKey(gt);let Et=O.programs;O.environment=E.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(E.isMeshStandardMaterial?N:S).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Wt),Et=new Map,O.programs=Et);let wt=Et.get(vt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===rt)return hc(E,gt),wt}else gt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(gt,x),wt=Mt.acquireProgram(gt,vt),Et.set(vt,wt),O.uniforms=gt.uniforms;const yt=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=tt.uniform),hc(E,gt),O.needsLights=Jh(E),O.lightsStateVersion=rt,O.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function lc(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function hc(E,D){const F=It.get(E);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Kh(E,D,F,O,U){D.isScene!==!0&&(D=Gt),A.resetTextureUnits();const et=D.fog,rt=O.isMeshStandardMaterial?D.environment:null,gt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Pn,vt=(O.isMeshStandardMaterial?N:S).get(O.envMap||rt),Et=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!F.morphAttributes.position,se=!!F.morphAttributes.normal,he=!!F.morphAttributes.color;let fe=Rn;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ge=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qt=Ge!==void 0?Ge.length:0,St=It.get(O),Te=m.state.lights;if(X===!0&&(Q===!0||E!==V)){const Ye=E===V&&O.id===L;tt.setState(O,E,Ye)}let te=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Te.state.version||St.outputColorSpace!==gt||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==vt||O.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==wt||St.morphTargets!==yt||St.morphNormals!==se||St.morphColors!==he||St.toneMapping!==fe||St.morphTargetsCount!==Qt)&&(te=!0):(te=!0,St.__version=O.version);let en=St.currentProgram;te===!0&&(en=Es(O,D,U));let _i=!1,Ve=!1,xa=!1;const me=en.getUniforms(),Ln=St.uniforms;if(Rt.useProgram(en.program)&&(_i=!0,Ve=!0,xa=!0),O.id!==L&&(L=O.id,Ve=!0),_i||V!==E){qt.reverseDepthBuffer?(_t.copy(E.projectionMatrix),eu(_t),nu(_t),me.setValue(P,"projectionMatrix",_t)):me.setValue(P,"projectionMatrix",E.projectionMatrix),me.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ye=me.map.cameraPosition;Ye!==void 0&&Ye.setValue(P,Dt.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&me.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&me.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Ve=!0,xa=!0)}if(U.isSkinnedMesh){me.setOptional(P,U,"bindMatrix"),me.setOptional(P,U,"bindMatrixInverse");const Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),me.setValue(P,"boneTexture",Ye.boneTexture,A))}U.isBatchedMesh&&(me.setOptional(P,U,"batchingTexture"),me.setValue(P,"batchingTexture",U._matricesTexture,A),me.setOptional(P,U,"batchingIdTexture"),me.setValue(P,"batchingIdTexture",U._indirectTexture,A),me.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&me.setValue(P,"batchingColorTexture",U._colorsTexture,A));const Ma=F.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&Pt.update(U,F,en),(Ve||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,me.setValue(P,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ln.envMap.value=vt,Ln.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Ln.envMapIntensity.value=D.environmentIntensity),Ve&&(me.setValue(P,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&Zh(Ln,xa),et&&O.fog===!0&&it.refreshFogUniforms(Ln,et),it.refreshMaterialUniforms(Ln,O,J,k,m.state.transmissionRenderTarget[E.id]),tr.upload(P,lc(St),Ln,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(tr.upload(P,lc(St),Ln,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&me.setValue(P,"center",U.center),me.setValue(P,"modelViewMatrix",U.modelViewMatrix),me.setValue(P,"normalMatrix",U.normalMatrix),me.setValue(P,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ye=O.uniformsGroups;for(let ya=0,jh=Ye.length;ya<jh;ya++){const uc=Ye[ya];I.update(uc,en),I.bind(uc,en)}}return en}function Zh(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Jh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,F){It.get(E.texture).__webglTexture=D,It.get(E.depthTexture).__webglTexture=F;const O=It.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const F=It.get(E);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,F=0){w=E,C=D,T=F;let O=!0,U=null,et=!1,rt=!1;if(E){const vt=It.get(E);if(vt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(P.FRAMEBUFFER,null),O=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(vt.__hasExternalTextures)A.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const yt=E.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&It.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(rt=!0);const wt=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?U=wt[D][F]:U=wt[D],et=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=It.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[F]:U=wt,_.copy(E.viewport),b.copy(E.scissor),z=E.scissorTest}else _.copy(ht).multiplyScalar(J).floor(),b.copy(xt).multiplyScalar(J).floor(),z=Kt;if(Rt.bindFramebuffer(P.FRAMEBUFFER,U)&&O&&Rt.drawBuffers(E,U),Rt.viewport(_),Rt.scissor(b),Rt.setScissorTest(z),et){const vt=It.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,F)}else if(rt){const vt=It.get(E.texture),Et=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,F||0,Et)}L=-1},this.readRenderTargetPixels=function(E,D,F,O,U,et,rt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(gt=gt[rt]),gt){Rt.bindFramebuffer(P.FRAMEBUFFER,gt);try{const vt=E.texture,Et=vt.format,wt=vt.type;if(!qt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-O&&F>=0&&F<=E.height-U&&P.readPixels(D,F,O,U,Ut.convert(Et),Ut.convert(wt),et)}finally{const vt=w!==null?It.get(w).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,D,F,O,U,et,rt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(gt=gt[rt]),gt){const vt=E.texture,Et=vt.format,wt=vt.type;if(!qt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-O&&F>=0&&F<=E.height-U){Rt.bindFramebuffer(P.FRAMEBUFFER,gt);const yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(D,F,O,U,Ut.convert(Et),Ut.convert(wt),0);const se=w!==null?It.get(w).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,se);const he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tu(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et),P.deleteBuffer(yt),P.deleteSync(he),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,F=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(E.image.width*O),et=Math.floor(E.image.height*O),rt=D!==null?D.x:0,gt=D!==null?D.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,rt,gt,U,et),Rt.unbindTexture()},this.copyTextureToTexture=function(E,D,F=null,O=null,U=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let et,rt,gt,vt,Et,wt;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,gt=F.min.x,vt=F.min.y):(et=E.image.width,rt=E.image.height,gt=0,vt=0),O!==null?(Et=O.x,wt=O.y):(Et=0,wt=0);const yt=Ut.convert(D.format),se=Ut.convert(D.type);A.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const he=P.getParameter(P.UNPACK_ROW_LENGTH),fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),St=P.getParameter(P.UNPACK_SKIP_IMAGES),Te=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Et,wt,et,rt,yt,se,Te.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Et,wt,Te.width,Te.height,yt,Te.data):P.texSubImage2D(P.TEXTURE_2D,U,Et,wt,et,rt,yt,se,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,he),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,St),U===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,D,F=null,O=null,U=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let et,rt,gt,vt,Et,wt,yt,se,he;const fe=E.isCompressedTexture?E.mipmaps[U]:E.image;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,gt=F.max.z-F.min.z,vt=F.min.x,Et=F.min.y,wt=F.min.z):(et=fe.width,rt=fe.height,gt=fe.depth,vt=0,Et=0,wt=0),O!==null?(yt=O.x,se=O.y,he=O.z):(yt=0,se=0,he=0);const Ge=Ut.convert(D.format),Qt=Ut.convert(D.type);let St;if(D.isData3DTexture)A.setTexture3D(D,0),St=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)A.setTexture2DArray(D,0),St=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Te=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),_i=P.getParameter(P.UNPACK_SKIP_ROWS),Ve=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(St,U,yt,se,he,et,rt,gt,Ge,Qt,fe.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(St,U,yt,se,he,et,rt,gt,Ge,fe.data):P.texSubImage3D(St,U,yt,se,he,et,rt,gt,Ge,Qt,fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,_i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve),U===0&&D.generateMipmaps&&P.generateMipmap(St),Rt.unbindTexture()},this.initRenderTarget=function(E){It.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,Rt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ea?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===Ms?"display-p3":"srgb"}}class oa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wo extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ah extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Le,h=Le,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new Xt,jc=new Xt,Ws=[],Qc=new qn,i0=new Xt,Ji=new Lt,ji=new mi;class ii extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),Qc.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(Qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),ji.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),jc.multiplyMatrices(n,Li),Ji.matrixWorld=jc,Ji.raycast(t,Ws);for(let a=0,o=Ws.length;a<o;a++){const c=Ws[a];c.instanceId=r,c.object=this,e.push(c)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ah(new Float32Array(s*this.count),s,this.count,Jr,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vr extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tl=new Xt,uo=new na,Xs=new mi,qs=new R;class fo extends xe{constructor(t=new Me,e=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;tl.copy(s).invert(),uo.copy(t.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=l.getX(g);qs.fromBufferAttribute(u,m),el(qs,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p;g<v;g++)qs.fromBufferAttribute(u,g),el(qs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function el(i,t,e,n,s,r,a){const o=uo.distanceSqToPoint(i);if(o<e){const c=new R;uo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Rh extends Ae{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,c=new Xt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ca extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ch extends ca{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const $s=new R,ja=new Xo,Qa=new Xo,to=new Xo;class Ph extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),l=$s);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ja.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Qa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),to.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Qa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),to.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ja.calc(c),Qa.calc(c),to.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function s0(i,t){const e=1-i;return e*e*t}function r0(i,t){return 2*(1-i)*i*t}function a0(i,t){return i*i*t}function os(i,t,e,n){return s0(i,t)+r0(i,e)+a0(i,n)}function o0(i,t){const e=1-i;return e*e*e*t}function c0(i,t){const e=1-i;return 3*e*e*i*t}function l0(i,t){return 3*(1-i)*i*i*t}function h0(i,t){return i*i*i*t}function cs(i,t,e,n,s){return o0(i,t)+c0(i,e)+l0(i,n)+h0(i,s)}class qo extends hn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lh extends hn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y),cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $o extends hn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends hn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yo extends hn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(os(t,s.x,r.x,a.x),os(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends hn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(os(t,s.x,r.x,a.x),os(t,s.y,r.y,a.y),os(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ko extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nl(o,c.x,l.x,h.x,u.x),nl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var il=Object.freeze({__proto__:null,ArcCurve:Ch,CatmullRomCurve3:Ph,CubicBezierCurve:qo,CubicBezierCurve3:Lh,EllipseCurve:ca,LineCurve:$o,LineCurve3:Ih,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Dh,SplineCurve:Ko});class Uh extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new il[s.type]().fromJSON(s))}return this}}class Wr extends Uh{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $o(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yo(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new qo(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new ca(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class la extends Me{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new R,d=new at,p=new R,g=new R,v=new R;let m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,y=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const w=c[3*T+0]*y,L=c[3*T+1],V=c[3*T+0]*C;l.push(w,L,V)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const y=x+M*t.length,C=y,T=y+t.length,w=y+t.length+1,L=y+1;r.push(C,T,L),r.push(w,L,T)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("uv",new Ht(o,2)),this.setAttribute("normal",new Ht(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.points,t.segments,t.phiStart,t.phiLength)}}class ys extends la{constructor(t=1,e=1,n=4,s=8){const r=new Wr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ys(t.radius,t.length,t.capSegments,t.radialSegments)}}class ha extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function M(){const y=new R,C=new R;let T=0;const w=(e-t)/n;for(let L=0;L<=r;L++){const V=[],_=L/r,b=_*(e-t)+t;for(let z=0;z<=s;z++){const B=z/s,W=B*c+o,Z=Math.sin(W),k=Math.cos(W);C.x=b*Z,C.y=-_*n+m,C.z=b*k,u.push(C.x,C.y,C.z),y.set(Z,w,k).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-_),V.push(g++)}v.push(V)}for(let L=0;L<s;L++)for(let V=0;V<r;V++){const _=v[V][L],b=v[V+1][L],z=v[V+1][L+1],B=v[V][L+1];t>0&&(h.push(_,b,B),T+=3),e>0&&(h.push(b,z,B),T+=3)}l.addGroup(f,T,0),f+=T}function x(y){const C=g,T=new at,w=new R;let L=0;const V=y===!0?t:e,_=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const b=g;for(let z=0;z<=s;z++){const W=z/s*c+o,Z=Math.cos(W),k=Math.sin(W);w.x=V*k,w.y=m*_,w.z=V*Z,u.push(w.x,w.y,w.z),d.push(0,_,0),T.x=Z*.5+.5,T.y=k*.5*_+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){const B=C+z,W=b+z;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),L+=3}l.addGroup(f,L,y===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends be{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new R,y=new R,C=new R;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],y),p(e[T+2],C),c(x,y,C,M)}function c(M,x,y,C){const T=C+1,w=[];for(let L=0;L<=T;L++){w[L]=[];const V=M.clone().lerp(y,L/T),_=x.clone().lerp(y,L/T),b=T-L;for(let z=0;z<=b;z++)z===0&&L===T?w[L][z]=V:w[L][z]=V.clone().lerp(_,z/b)}for(let L=0;L<T;L++)for(let V=0;V<2*(T-L)-1;V++){const _=Math.floor(V/2);V%2===0?(d(w[L][_+1]),d(w[L+1][_]),d(w[L][_])):(d(w[L][_+1]),d(w[L+1][_+1]),d(w[L+1][_]))}}function l(M){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const M=new R;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;a.push(y,1-C)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],y=a[M+2],C=a[M+4],T=Math.max(x,y,C),w=Math.min(x,y,C);T>.9&&w<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,x){const y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const M=new R,x=new R,y=new R,C=new R,T=new at,w=new at,L=new at;for(let V=0,_=0;V<r.length;V+=9,_+=6){M.set(r[V+0],r[V+1],r[V+2]),x.set(r[V+3],r[V+4],r[V+5]),y.set(r[V+6],r[V+7],r[V+8]),T.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),L.set(a[_+4],a[_+5]),C.copy(M).add(x).add(y).divideScalar(3);const b=m(C);v(T,_+0,M,b),v(w,_+2,x,b),v(L,_+4,y,b)}}function v(M,x,y,C){C<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Wr{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Wr().fromJSON(s))}return this}}const u0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=g0(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return ms(r,a,e,o,c,p,0),a}};function Nh(i,t,e,n,s){let r,a;if(s===A0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=sl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=sl(r,i[r],i[r+1],a);return a&&da(a,a.next)&&(_s(a),a=a.next),a}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(da(e,e.next)||de(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ms(i,t,e,n,s,r,a){if(!i)return;!a&&r&&y0(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?f0(i,n,s,r):d0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),_s(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=p0(ui(i),t,e),ms(i,t,e,n,s,r,2)):a===2&&m0(i,t,e,n,s,r):ms(ui(i),t,e,n,s,r,1);break}}}function d0(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ni(s,o,r,c,a,l,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f0(i,t,e,n){const s=i.prev,r=i,a=i.next;if(de(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=po(p,g,t,e,n),M=po(v,m,t,e,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=f&&y&&y.z<=M;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ni(o,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ni(o,h,c,u,l,d,y.x,y.y)&&de(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ni(o,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ni(o,h,c,u,l,d,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function p0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!da(s,r)&&Fh(s,n,n.next,r)&&gs(s,r)&&gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_s(n),_s(n.next),n=i=r),n=n.next}while(n!==i);return ui(n)}function m0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b0(a,o)){let c=Oh(a,o);a=ui(a,a.next),c=ui(c,c.next),ms(a,t,e,n,s,r,0),ms(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function g0(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Nh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(E0(l));for(s.sort(_0),r=0;r<s.length;r++)e=v0(s[r],e);return e}function _0(i,t){return i.x-t.x}function v0(i,t){const e=x0(i,t);if(!e)return t;const n=Oh(e,i);return ui(n,n.next),ui(e,e.next)}function x0(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ni(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),gs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&M0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function M0(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function y0(i,t,e,n){let s=i;do s.z===0&&(s.z=po(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function po(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function E0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ni(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function b0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T0(i,t)&&(gs(i,t)&&gs(t,i)&&w0(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||da(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function da(i,t){return i.x===t.x&&i.y===t.y}function Fh(i,t,e,n){const s=Ks(de(i,t,e)),r=Ks(de(i,t,n)),a=Ks(de(e,n,i)),o=Ks(de(e,n,t));return!!(s!==r&&a!==o||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||a===0&&Ys(e,i,n)||o===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ks(i){return i>0?1:i<0?-1:0}function T0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gs(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function w0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){const e=new mo(i.i,i.x,i.y),n=new mo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sl(i,t,e,n){const s=new mo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class zi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return zi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];rl(t),al(n,t);let a=t.length;e.forEach(rl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,al(n,e[c]);const o=u0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function rl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function al(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class di extends ua{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new di(t.radius,t.detail)}}class fa extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new R,g=new at;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const M=f+m,x=M,y=M+n+1,C=M+n+2,T=M+1;o.push(x,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pa extends Me{constructor(t=new Zo([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(r,3)),this.setAttribute("uv",new Ht(a,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;zi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const M=g[m];zi.isClockWise(M)===!0&&(g[m]=M.reverse())}const v=zi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){const M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=v.length;m<f;m++){const M=v[m],x=M[0]+u,y=M[1]+u,C=M[2]+u;n.push(x,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return R0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new pa(n,t.curveSegments)}}function R0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ie extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,d=new R,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const M=[],x=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+y,1-x),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const x=h[f][M+1],y=h[f][M],C=h[f+1][M],T=h[f+1][M+1];(f!==0||a>0)&&p.push(x,y,T),(f!==n-1||c<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vs extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;a.push(v,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gn extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ma extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jo extends ma{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const eo=new Xt,ol=new R,cl=new R;class C0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class P0 extends C0{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jo extends ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new P0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zh extends ma{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ll();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ll(){return performance.now()}const hl=new Xt;class kh{constructor(t,e,n=0,s=1/0){this.ray=new na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(t,e=!0,n=[]){return go(t,this,n,e),n.sort(ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)go(t[s],this,n,e);return n.sort(ul),n}}function ul(i,t){return i.distance-t.distance}function go(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)go(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);const L0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$l,AddEquation:kn,AddOperation:Vl,AdditiveBlending:nr,AgXToneMapping:Kl,AlphaFormat:wo,AlwaysCompare:oh,AlwaysDepth:ar,AlwaysStencilFunc:ro,AmbientLight:zh,ArcCurve:Ch,ArrayCamera:wh,BackSide:De,BasicDepthPacking:jl,Box3:qn,BoxGeometry:$e,BufferAttribute:qe,BufferGeometry:Me,ByteType:Eo,Camera:zo,CanvasTexture:Rh,CapsuleGeometry:ys,CatmullRomCurve3:Ph,CineonToneMapping:ql,CircleGeometry:ha,ClampToEdgeWrapping:Hn,Clock:Bh,Color:Nt,ColorManagement:jt,ConeGeometry:tn,ConstantAlphaFactor:kl,ConstantColorFactor:zl,CubeCamera:gh,CubeReflectionMapping:oi,CubeRefractionMapping:ci,CubeTexture:Bo,CubeUVReflectionMapping:xs,CubicBezierCurve:qo,CubicBezierCurve3:Lh,CullFaceBack:no,CullFaceFront:El,CullFaceNone:Sl,Curve:hn,CurvePath:Uh,CustomBlending:bl,CustomToneMapping:Yl,CylinderGeometry:be,Data3DTexture:dh,DataArrayTexture:No,DataTexture:Ah,DepthFormat:ri,DepthStencilFormat:hi,DepthTexture:Go,DirectionalLight:jo,DisplayP3ColorSpace:ea,DoubleSide:Ze,DstAlphaFactor:Dl,DstColorFactor:Nl,EllipseCurve:ca,EqualCompare:ih,EqualDepth:cr,EquirectangularReflectionMapping:dr,EquirectangularRefractionMapping:fr,Euler:ln,EventDispatcher:pi,Float32BufferAttribute:Ht,FloatType:cn,Fog:oa,FrontSide:pn,Frustum:ra,GLSL3:oo,GreaterCompare:sh,GreaterDepth:hr,GreaterEqualCompare:ah,GreaterEqualDepth:lr,Group:ne,HalfFloatType:Gi,HemisphereLight:Jo,IcosahedronGeometry:di,ImageUtils:hh,InstancedBufferAttribute:Gr,InstancedMesh:ii,IntType:Yr,KeepStencilOp:ti,LatheGeometry:la,Layers:ia,LessCompare:nh,LessDepth:or,LessEqualCompare:Do,LessEqualDepth:ai,Light:ma,LineCurve:$o,LineCurve3:Ih,LinearDisplayP3ColorSpace:Ms,LinearFilter:Je,LinearMipmapLinearFilter:Gn,LinearMipmapNearestFilter:js,LinearSRGBColorSpace:Pn,LinearToneMapping:Wl,LinearTransfer:us,LuminanceAlphaFormat:Co,LuminanceFormat:Ro,Material:gi,Matrix3:Ot,Matrix4:Xt,MaxEquation:Rl,Mesh:Lt,MeshBasicMaterial:sa,MeshDepthMaterial:Eh,MeshDistanceMaterial:bh,MeshStandardMaterial:gn,MinEquation:Al,MirroredRepeatWrapping:pr,MixOperation:Gl,MultiplyBlending:so,MultiplyOperation:yo,NearestFilter:Le,NearestMipmapLinearFilter:ts,NearestMipmapNearestFilter:Jl,NeutralToneMapping:Zl,NeverCompare:eh,NeverDepth:rr,NoBlending:An,NoColorSpace:Tn,NoToneMapping:Rn,NormalBlending:si,NotEqualCompare:rh,NotEqualDepth:ur,Object3D:xe,ObjectSpaceNormalMap:th,OneFactor:Pl,OneMinusConstantAlphaFactor:Hl,OneMinusConstantColorFactor:Bl,OneMinusDstAlphaFactor:Ul,OneMinusDstColorFactor:Fl,OneMinusSrcAlphaFactor:sr,OneMinusSrcColorFactor:Il,OrthographicCamera:ko,P3Primaries:fs,PCFShadowMap:xo,PCFSoftShadowMap:Mo,PMREMGenerator:lo,Path:Wr,PerspectiveCamera:ze,Plane:Bn,PlaneGeometry:an,Points:fo,PointsMaterial:Vr,PolyhedronGeometry:ua,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Dh,Quaternion:Xn,RED_GREEN_RGTC2_Format:Br,RED_RGTC1_Format:Lo,REVISION:$r,RGBADepthPacking:Ql,RGBAFormat:Qe,RGBAIntegerFormat:ta,RGBA_ASTC_10x10_Format:Dr,RGBA_ASTC_10x5_Format:Pr,RGBA_ASTC_10x6_Format:Lr,RGBA_ASTC_10x8_Format:Ir,RGBA_ASTC_12x10_Format:Ur,RGBA_ASTC_12x12_Format:Nr,RGBA_ASTC_4x4_Format:Sr,RGBA_ASTC_5x4_Format:Er,RGBA_ASTC_5x5_Format:br,RGBA_ASTC_6x5_Format:Tr,RGBA_ASTC_6x6_Format:wr,RGBA_ASTC_8x5_Format:Ar,RGBA_ASTC_8x6_Format:Rr,RGBA_ASTC_8x8_Format:Cr,RGBA_BPTC_Format:as,RGBA_ETC2_EAC_Format:yr,RGBA_PVRTC_2BPPV1_Format:vr,RGBA_PVRTC_4BPPV1_Format:_r,RGBA_S3TC_DXT1_Format:is,RGBA_S3TC_DXT3_Format:ss,RGBA_S3TC_DXT5_Format:rs,RGBFormat:Ao,RGB_BPTC_SIGNED_Format:Fr,RGB_BPTC_UNSIGNED_Format:Or,RGB_ETC1_Format:xr,RGB_ETC2_Format:Mr,RGB_PVRTC_2BPPV1_Format:gr,RGB_PVRTC_4BPPV1_Format:mr,RGB_S3TC_DXT1_Format:ns,RGFormat:Po,RGIntegerFormat:Qr,Ray:na,Raycaster:kh,Rec709Primaries:ds,RedFormat:Jr,RedIntegerFormat:jr,ReinhardToneMapping:Xl,RenderTarget:uh,RepeatWrapping:hs,ReverseSubtractEquation:wl,RingGeometry:fa,SIGNED_RED_GREEN_RGTC2_Format:kr,SIGNED_RED_RGTC1_Format:zr,SRGBColorSpace:Oe,SRGBTransfer:ce,Scene:Wo,ShaderChunk:Ft,ShaderLib:on,ShaderMaterial:Cn,Shape:Zo,ShapeGeometry:pa,ShapeUtils:zi,ShortType:bo,Source:Uo,Sphere:mi,SphereGeometry:Ie,SplineCurve:Ko,SrcAlphaFactor:ir,SrcAlphaSaturateFactor:Ol,SrcColorFactor:Ll,StaticDrawUsage:ao,SubtractEquation:Tl,SubtractiveBlending:io,TangentSpaceNormalMap:Io,Texture:Ae,TorusGeometry:vs,Triangle:je,UVMapping:So,Uint16BufferAttribute:Fo,Uint32BufferAttribute:Oo,UniformsLib:nt,UniformsUtils:mh,UnsignedByteType:mn,UnsignedInt248Type:li,UnsignedInt5999Type:To,UnsignedIntType:Vn,UnsignedShort4444Type:Kr,UnsignedShort5551Type:Zr,UnsignedShortType:Bi,VSMShadowMap:dn,Vector2:at,Vector3:R,Vector4:ue,WebGLCoordinateSystem:fn,WebGLCubeRenderTarget:_h,WebGLRenderTarget:Wn,WebGLRenderer:Vo,WebGLUtils:Th,WebGPUCoordinateSystem:ps,ZeroFactor:Cl,createCanvasElement:lh},Symbol.toStringTag,{value:"Module"})),_o=20,Xr=8,ga=1440,I0=1200;function Fi(){return matchMedia("(pointer:coarse)").matches||/iPhone|iPad|Android/i.test(navigator.userAgent)}function D0(i){const t=Array.from({length:_o},()=>({id:"",qty:0}));return[["hand",1],["hoe",1],["can",1],["seed_raumuong",6],["seed_caixanh",4]].forEach(([e,n],s)=>t[s]={id:e,qty:n}),{version:1,created:Date.now(),savedAt:Date.now(),look:i,player:{x:0,z:22,ry:Math.PI},money:200,inv:t,hotbar:0,plots:Array.from({length:6},(e,n)=>({id:n,tilled:n<2,wet:!1,crop:null,stage:0,progress:0})),time:7*60,flags:{},friend:0,giftDay:-1,seedDay:-1,talks:0,settings:{music:.6,ambient:.7,sfx:.8,ui:.7,muted:!1,quality:Fi()?"low":"medium",sens:1,fps:!1}}}const ls=i=>Math.floor(i/ga)+1,Hi=i=>i%ga/60,U0=i=>{const t=Math.floor(i%ga);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};class N0{constructor(){this.m=new Map}on(t,e){return this.m.has(t)||this.m.set(t,new Set),this.m.get(t).add(e),()=>this.m.get(t).delete(e)}emit(t,...e){this.m.get(t)?.forEach(n=>{try{n(...e)}catch(s){console.error(s)}})}}const Be=new N0;class F0{constructor(t,e,n){this.canvas=t,this.joyEl=e,this.knob=n,this.keys=new Set,this.pressed=new Set,this.look={x:0,y:0},this.zoom=0,this.joy={x:0,y:0,id:-1,cx:0,cy:0},this.touchRun=!1,this.enabled=!0,this.lookId=-1,this.lx=0,this.ly=0,this.dragging=!1,addEventListener("keydown",s=>{if(s.target.closest("input,select,textarea"))return;const r=s.code;this.keys.has(r)||this.pressed.add(r),this.keys.add(r),["Space","Tab"].includes(r)&&s.preventDefault()}),addEventListener("keyup",s=>this.keys.delete(s.code)),addEventListener("blur",()=>this.keys.clear()),t.addEventListener("pointerdown",s=>this.down(s)),addEventListener("pointermove",s=>this.move(s)),addEventListener("pointerup",s=>this.up(s)),addEventListener("pointercancel",s=>this.up(s)),t.addEventListener("wheel",s=>{this.zoom+=Math.sign(s.deltaY),s.preventDefault()},{passive:!1}),t.addEventListener("contextmenu",s=>s.preventDefault())}down(t){if(t.pointerType==="touch"&&t.clientX<innerWidth*.42&&this.joy.id<0){this.joy.id=t.pointerId,this.joy.cx=t.clientX,this.joy.cy=t.clientY,this.joyEl.style.left=t.clientX+"px",this.joyEl.style.top=t.clientY+"px",this.joyEl.classList.add("on");return}this.lookId<0&&(this.lookId=t.pointerId,this.lx=t.clientX,this.ly=t.clientY,this.dragging=!0)}move(t){if(t.pointerId===this.joy.id){const e=t.clientX-this.joy.cx,n=t.clientY-this.joy.cy,s=54,r=Math.hypot(e,n),a=r>s?s/r:1;this.joy.x=e*a/s,this.joy.y=n*a/s,this.knob.style.transform=`translate(${e*a}px,${n*a}px)`,this.touchRun=r>s*1.25;return}t.pointerId===this.lookId&&this.dragging&&(this.look.x+=t.clientX-this.lx,this.look.y+=t.clientY-this.ly,this.lx=t.clientX,this.ly=t.clientY)}up(t){t.pointerId===this.joy.id&&(this.joy.id=-1,this.joy.x=this.joy.y=0,this.knob.style.transform="",this.joyEl.classList.remove("on"),this.touchRun=!1),t.pointerId===this.lookId&&(this.lookId=-1,this.dragging=!1)}tap(t){this.pressed.add(t)}hit(t){return this.pressed.has(t)}moveVec(){if(!this.enabled)return{x:0,z:0};let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.joy.x,e+=this.joy.y;const n=Math.hypot(t,e);return n>1?{x:t/n,z:e/n}:{x:t,z:e}}running(t){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchRun||t}endFrame(){this.pressed.clear(),this.look.x=this.look.y=0,this.zoom=0}}const Qo={value:0},dl=new Map;function Y(i,t={}){const e=JSON.stringify([i,t]);let n=dl.get(e);return n||(n=new gn({color:i,roughness:t.rough??.92,metalness:0,flatShading:t.flat??!0,emissive:t.emissive??0,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??pn}),t.wind&&O0(n,t.wind),dl.set(e,n),n)}function O0(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime=Qo,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wpos = modelMatrix * vec4(position, 1.0);
      #ifdef USE_INSTANCING
        wpos = modelMatrix * instanceMatrix * vec4(position, 1.0);
      #endif
      float hh = max(position.y, 0.0);
      transformed.x += sin(uTime * 1.7 + wpos.x * 0.35 + wpos.z * 0.21) * ${t.toFixed(3)} * hh;
      transformed.z += cos(uTime * 1.3 + wpos.z * 0.31 + wpos.x * 0.1) * ${(t*.6).toFixed(3)} * hh;`)},i.customProgramCacheKey=()=>"wind"+t}function fl(i=6080217){const t=new gn({color:i,roughness:.25,metalness:.05,transparent:!0,opacity:.86,flatShading:!0});return t.onBeforeCompile=e=>{e.uniforms.uTime=Qo,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wq = modelMatrix * vec4(position, 1.0);
      transformed.z += (sin(uTime * 1.4 + wq.x * 0.9) + cos(uTime * 1.1 + wq.z * 0.8)) * 0.045;`)},t.customProgramCacheKey=()=>"water",t}function tc(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");e(r);const a=new Rh(s);return a.colorSpace=Oe,a.anisotropy=4,n&&(a.wrapS=a.wrapT=hs,a.repeat.set(n[0],n[1])),a}const z0=()=>tc(128,128,i=>{i.fillStyle="#c4452e",i.fillRect(0,0,128,128);for(let t=0;t<128;t+=16){const e=i.createLinearGradient(t,0,t+16,0);e.addColorStop(0,"#9e3322"),e.addColorStop(.5,"#d9573c"),e.addColorStop(1,"#9e3322"),i.fillStyle=e,i.fillRect(t,0,16,128)}i.fillStyle="rgba(80,20,10,.35)";for(let t=0;t<128;t+=22)i.fillRect(0,t,128,3)},[6,3]),B0=()=>tc(128,128,i=>{for(let t=0;t<4;t++)for(let e=0;e<4;e++){const n=200+Math.random()*25;i.fillStyle=`rgb(${n},${n*.52},${n*.36})`,i.fillRect(e*32+1,t*32+1,30,30)}i.strokeStyle="#a8836a",i.lineWidth=2;for(let t=0;t<=128;t+=32)i.beginPath(),i.moveTo(t,0),i.lineTo(t,128),i.moveTo(0,t),i.lineTo(128,t),i.stroke()},[7,4]),Hh=(i,t="#f3dcb4",e="#5a3a1e")=>tc(512,160,n=>{n.fillStyle=t,n.fillRect(0,0,512,160),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(8,8,496,144),n.fillStyle=e,n.font="bold 64px 'Baloo 2', 'Trebuchet MS', sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,84)}),At=L0;function ft(i,t,e=0,n=0,s=0,r=!0){const a=new At.Mesh(i,t);return a.position.set(e,n,s),a.castShadow=r,a.receiveShadow=!0,a}const Jt=(i,t,e)=>new At.BoxGeometry(i,t,e),ke=(i,t,e,n=7)=>new At.CylinderGeometry(i,t,e,n),_a=(i,t=0)=>new At.IcosahedronGeometry(i,t);function k0(i=1){const t=new At.Group;t.add(ft(ke(.22,.34,2.2),Y(9067062),0,1.1,0));const e=Y(4168260,{wind:.025}),n=Y(5681230,{wind:.03});[[0,3,0,1.6,e],[1,2.6,.4,1.15,n],[-.9,2.7,-.3,1.2,n],[.2,3.6,-.6,1.05,e],[-.3,2.5,.9,1,e]].forEach(([a,o,c,l,h])=>{const u=ft(_a(l,1),h,a,o,c);u.scale.y=.85,t.add(u)});const s=Y(15123002),r=new At.SphereGeometry(.14,6,5);return[[.9,2.1,.8],[-1,2.2,.5],[.5,2.3,-1.1],[-.4,2,1.2]].forEach(([a,o,c])=>{const l=ft(r,s,a,o,c);l.scale.y=1.4,t.add(l)}),t.scale.setScalar(i),t}function Gh(i,t,e=.9){const n=new At.PlaneGeometry(.7,i,1,6),s=n.attributes.position;for(let a=0;a<s.count;a++){const o=s.getY(a)+i/2,c=o/i;s.setY(a,o),s.setZ(a,-e*c*c*i*.5),s.setX(a,s.getX(a)*(1-c*.85))}n.computeVertexNormals();const r=new At.Mesh(n,t);return r.castShadow=!0,r}function pl(i=6,t=.12){const e=new At.Group,n=Y(10254930),s=7;for(let l=0;l<s;l++){const h=ft(ke(.18,.22,i/s+.05,6),n,Math.sin(l/s*1.2)*t*i*.4,i/s*(l+.5),0);h.rotation.z=-t*(l/s),e.add(h)}const r=new At.Group;r.position.set(Math.sin(1.2)*t*i*.4,i,0),e.add(r);const a=Y(5221962,{wind:.06,side:At.DoubleSide});for(let l=0;l<8;l++){const h=Gh(2.6,a);h.rotation.set(1.05,l/8*Math.PI*2,0,"YXZ"),r.add(h)}const o=Y(7244338),c=_a(.2,0);return[[.25,-.2,0],[-.2,-.25,.15],[0,-.22,-.25]].forEach(([l,h,u])=>r.add(ft(c,o,l,h,u))),e}function H0(){const i=new At.Group,t=Y(10275930),e=Y(7127114,{wind:.05,side:At.DoubleSide});for(let s=0;s<4;s++){const r=s*1.7,a=s?.6:0,o=Math.cos(r)*a,c=Math.sin(r)*a,l=1.8+s%2*.6;i.add(ft(ke(.12,.18,l,6),t,o,l/2,c));for(let h=0;h<4;h++){const u=Gh(2,e,.6);u.scale.x=1.5,u.position.set(o,l,c),u.rotation.set(.85,r+h*1.6,0,"YXZ"),i.add(u)}}const n=ft(new At.ConeGeometry(.28,.6,6),Y(10469946),.25,1.6,.1);return n.rotation.z=Math.PI,i.add(n),i.add(ft(new At.SphereGeometry(.14,6,5),Y(9055818),.27,1.15,.1)),i}function G0(i=6){const t=new At.Group,e=Y(9158478),n=Y(6270526,{wind:.08});for(let s=0;s<i;s++){const r=4+Math.random()*2.5,a=(Math.random()-.5)*1.4,o=(Math.random()-.5)*1.4,c=ft(ke(.06,.08,r,5),e,a,r/2,o);c.rotation.z=(Math.random()-.5)*.15,t.add(c);for(let l=0;l<3;l++)t.add(ft(_a(.35+Math.random()*.2,0),n,a+(Math.random()-.5)*.6,r*(.6+l*.15),o+(Math.random()-.5)*.6))}return t}function er(i){const t=new At.Group,e=Y(i.wall),n=Y(i.trim??7031340);t.add(ft(Jt(i.w+1,.4,i.d+(i.porch?3:1)),Y(12152922),0,.2,i.porch?1:0));const s=i.d/2,r=i.w/2,a=1.7,o=2.4,c=1.3,l=1.1,h=1.4;t.add(ft(Jt(i.w,i.h,.25),e,0,.4+i.h/2,-s)),t.add(ft(Jt(.25,i.h,i.d),e,-r,.4+i.h/2,0)),t.add(ft(Jt(.25,i.h,i.d),e,r,.4+i.h/2,0));const u=(y,C,T,w)=>t.add(ft(Jt(C-y,w-T,.25),e,(y+C)/2,.4+(T+w)/2,s)),d=Math.min(3.4,r-1.2);if(u(-r,-d-h/2,0,i.h),u(d+h/2,r,0,i.h),u(-d+h/2,-a/2,0,i.h),u(a/2,d-h/2,0,i.h),u(-a/2,a/2,o,i.h),[-d,d].forEach(y=>{u(y-h/2,y+h/2,0,c),u(y-h/2,y+h/2,c+l,i.h);const C=Y(3842970);t.add(ft(Jt(.6,l,.08),C,y-h/2-.32,.4+c+l/2,s+.16)),t.add(ft(Jt(.6,l,.08),C,y+h/2+.32,.4+c+l/2,s+.16)),t.add(ft(Jt(h,l,.05),Y(3811872),y,.4+c+l/2,s-.05,!1));for(let T=-1;T<=1;T++)t.add(ft(Jt(.06,l,.06),n,y+T*.4,.4+c+l/2,s+.05))}),t.add(ft(Jt(a,o,.05),Y(2760216),0,.4+o/2,s-.1,!1)),i.door!==!1){const y=Y(8015404),C=ft(Jt(a/2,o,.1),y,-a/2-.05,.4+o/2,s+.45);C.rotation.y=1.2,t.add(C);const T=ft(Jt(a/2,o,.1),y,a/2+.05,.4+o/2,s+.45);T.rotation.y=-1.2,t.add(T)}const p=i.porch?3.2:.8,g=2.4,v=i.d/2,m=i.roofTex?new At.MeshStandardMaterial({map:z0(),roughness:.85,flatShading:!0}):Y(i.roofColor??9085104),f=(y,C,T)=>{const w=Math.abs(C-y),L=Math.hypot(w,g),V=ft(Jt(i.w+1.4,.18,L),m,0,.4+i.h+g/2,(y+C)/2);return V.rotation.x=T*Math.atan2(g,w),V};t.add(f(0,v+p,1)),t.add(f(0,-v-.8,-1));const M=ft(ke(.16,.16,i.w+1.5,6),Y(i.roofTex?10367778:6978698),0,.4+i.h+g+.05,0);M.rotation.z=Math.PI/2,t.add(M);const x=new At.Shape([new At.Vector2(-v,0),new At.Vector2(v,0),new At.Vector2(0,g)]);if([-r,r].forEach(y=>{const C=ft(new At.ShapeGeometry(x),Y(i.wall,{side:At.DoubleSide}),y,.4+i.h,0);C.rotation.y=Math.PI/2,t.add(C)}),i.porch){const y=Y(8015404);[-r+.4,-1.8,1.8,r-.4].forEach(C=>t.add(ft(ke(.12,.14,i.h+.3),y,C,.4+(i.h+.3)/2-.15,v+p-.4)))}return t}function V0(){const i=er({w:4.4,d:3.6,h:2.4,wall:12094042,roofColor:8361384,door:!1});return i.add(ft(Jt(1.5,2.2,.12),Y(7031340),0,1.5,1.86)),i}function W0(){const i=new At.Group;i.add(ft(Jt(3.4,.3,3),Y(12152922),0,.15,0));const t=Y(14201978);i.add(ft(Jt(3,2.2,.15),t,0,1.4,-1.3)),i.add(ft(Jt(.15,2.2,2.6),t,-1.45,1.4,0)),i.add(ft(Jt(.15,2.2,2.6),t,1.45,1.4,0));const e=Y(13214810),n=ft(new At.ConeGeometry(2.7,1.8,4),e,0,3.4,0);return n.rotation.y=Math.PI/4,i.add(n),i.add(ft(Jt(.9,.5,.9),Y(9071194),.6,.55,-.6)),i.add(ft(ke(.3,.38,.6,8),Y(9063980),-.7,.6,.6)),i}function X0(i,t){const e=ft(new At.SphereGeometry(.55,9,7),Y(9065778),i,.6,t);return e.scale.y=1.15,e}function q0(i=2.2){const t=new At.Group,e=Y(9067062);return t.add(ft(Jt(i,.12,.7),e,0,.5,0)),[-i/2+.15,i/2-.15].forEach(n=>t.add(ft(Jt(.12,.5,.6),e,n,.25,0))),t}function $0(){const i=new At.Group,t=Y(10119740);return i.add(ft(Jt(.6,.08,.6),t,0,.48,0)),i.add(ft(Jt(.6,.6,.08),t,0,.8,-.27)),[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]].forEach(([e,n])=>i.add(ft(Jt(.07,.48,.07),t,e,.24,n))),i}function Y0(){const i=new At.Group,t=Y(9067062);return i.add(ft(ke(.6,.6,.08,10),t,0,.7,0)),i.add(ft(ke(.08,.12,.7,6),t,0,.35,0)),i}function vo(i,t=2.4){const e=new At.Group;e.add(ft(ke(.06,.06,1.4,5),Y(8015404),-t/2+.2,.7,0)),e.add(ft(ke(.06,.06,1.4,5),Y(8015404),t/2-.2,.7,0));const n=ft(Jt(t,t*.31,.08),[Y(8015404),Y(8015404),Y(8015404),Y(8015404),new At.MeshStandardMaterial({map:Hh(i)}),Y(8015404)],0,1.3,0);return e.add(n),e}function K0(){const i=new At.Group,t=Y(10119740);i.add(ft(Jt(2.8,.1,1.2),t,0,.9,0)),[[-1.3,-.5],[1.3,-.5],[-1.3,.5],[1.3,.5]].forEach(([s,r])=>i.add(ft(Jt(.1,.9,.1),t,s,.45,r))),[[-1.3,-.55],[1.3,-.55]].forEach(([s,r])=>i.add(ft(Jt(.1,2.3,.1),t,s,1.15,r)));for(let s=0;s<6;s++){const r=ft(Jt(.5,.06,1.6),Y(s%2?15921382:3842970),-1.25+s*.5,2.3,.1);r.rotation.x=-.3,i.add(r)}const e=[7127114,15249978,15229002,9067062];for(let s=0;s<4;s++)i.add(ft(Jt(.5,.3,.5),Y(12094042),-.95+s*.63,1.1,0)),i.add(ft(Jt(.42,.06,.42),Y(e[s]),-.95+s*.63,1.27,0));const n=vo("Sạp hạt giống",2.2);return n.position.set(0,1.4,-.7),n.scale.setScalar(.7),i.add(n),i}function Z0(i){const t=new At.Group,e=ft(new At.TorusGeometry(i,.35,5,28),Y(9075274),0,.05,0,!1);e.rotation.x=Math.PI/2,t.add(e);const n=Y(4168260,{side:At.DoubleSide}),s=Y(15899320),r=Y(15231638),a=Y(15913546);for(let o=0;o<16;o++){const c=Math.random()*Math.PI*2,l=Math.sqrt(Math.random())*(i-1),h=ft(new At.CircleGeometry(.45+Math.random()*.35,10,.4,Math.PI*1.8),n,Math.cos(c)*l,.08,Math.sin(c)*l,!1);if(h.rotation.x=-Math.PI/2,h.rotation.z=Math.random()*6,t.add(h),o%3===0){const u=new At.Group;u.position.set(Math.cos(c)*l+.2,.15,Math.sin(c)*l);for(let d=0;d<6;d++){const p=ft(new At.ConeGeometry(.12,.38,4),s,Math.cos(d)*.1,.18,Math.sin(d)*.1);p.rotation.set(Math.sin(d)*.5,0,-Math.cos(d)*.5),u.add(p)}u.add(ft(new At.CylinderGeometry(.07,.07,.06,6),a,0,.2,0)),t.add(u)}if(o%5===1){const u=ft(new At.ConeGeometry(.1,.32,5),r,Math.cos(c)*l-.3,.45,Math.sin(c)*l);t.add(u),t.add(ft(ke(.02,.02,.4,4),Y(5933626),Math.cos(c)*l-.3,.2,Math.sin(c)*l))}}return t}function J0(i){const t=new At.Group,e=Y(10123836);[-2.6,2.6].forEach(a=>t.add(ft(ke(.18,.2,3.4,7),e,a,1.7,0)));const n=ft(ke(.14,.14,6,6),e,0,3.3,0);n.rotation.z=Math.PI/2,t.add(n);const s=new At.Mesh(new At.PlaneGeometry(3,.95),new At.MeshStandardMaterial({map:Hh(i,"#f6e7c4","#9e3322"),side:At.DoubleSide}));s.position.set(0,2.8,.05),t.add(s);const r=Y(15231648,{wind:.05});for(let a=0;a<9;a++)t.add(ft(_a(.28,0),a%2?r:Y(6270526,{wind:.05}),-2.6+a%3*.2,3.2+a%2*.2,(a%3-1)*.25));return t}const j0=[[9.5,4],[13,4],[9.5,7.2],[13,7.2],[9.5,10.4],[13,10.4]],ml={x0:-26,x1:26,z0:-24,z1:26,gate:2.6};class Q0{constructor(t){this.quality=t,this.group=new ne,this.colliders=[],this.items=[],this.plotMeshes=[],this.plotAnchors=[],this.smokeAt=new R(9.2,3.6,-16.4),this.porchSeats=[],this.waterMeshes=[],this.roofPerches=[],this.flowerSpots=[],this.occluders=[],this.build()}add(t,e=0,n=0,s=0,r=0){return t.position.set(e,n,s),t.rotation.y=r,this.group.add(t),t}circ(t,e,n){this.colliders.push({t:"c",x:t,z:e,r:n})}rect(t,e,n,s){this.colliders.push({t:"b",x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s)})}build(){const t=this.quality,e=new an(160,160,64,64);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=[],r=new Nt;for(let f=0;f<n.count;f++){const M=n.getX(f),x=n.getZ(f),y=Math.sin(M*.21)*Math.cos(x*.17)*.5+Math.sin(M*.05+x*.07)*.5;Math.max(Math.abs(M),Math.abs(x))>45&&n.setY(f,Math.max(0,(Math.max(Math.abs(M),Math.abs(x))-45)*.12+y*.8)),r.setHSL(.27+y*.02,.5,.47+y*.05),s.push(r.r,r.g,r.b)}e.setAttribute("color",new Ht(s,3)),e.computeVertexNormals();const a=new Lt(e,new gn({vertexColors:!0,roughness:1,flatShading:!0}));a.receiveShadow=!0,this.group.add(a);const o=Y(13213802,{flat:!1}),c=(f,M,x,y,C=0)=>{const T=new Lt(new an(f,M),o);T.rotation.set(-Math.PI/2,0,C),T.position.set(x,.015,y),T.receiveShadow=!0,this.group.add(T)};c(3,26,0,14),c(3,22,0,37),c(30,3,14,38),c(2.4,12,9,1.5,0),c(14,2,6,-3);const l=new Lt(new an(16,9),new gn({map:B0(),roughness:.95}));l.rotation.x=-Math.PI/2,l.position.set(0,.03,-4.5),l.receiveShadow=!0,this.group.add(l);const h=er({w:12,d:7,h:3.2,wall:15850670,roofTex:!0,porch:!0,trim:8015404});this.occluders.push(this.add(h,0,0,-15.5)),this.rect(-6.6,-19.4,6.6,-11.8),[-5.6,-1.8,1.8,5.6].forEach(f=>this.circ(f,-9.4,.25)),this.items.push({id:"door",kind:"door",x:0,z:-11.4,r:1.6,label:"Vô nhà"});const u=q0(2.4);this.add(u,-3.6,.4,-10.6),this.porchSeats.push({x:-3.6,z:-10.5,ry:0});const d=$0();this.add(d,3.4,.4,-10.7,0),this.porchSeats.push({x:3.4,z:-10.5,ry:0}),this.add(Y0(),4.4,.4,-10.4),this.items.push({id:"bench",kind:"sit",x:-3.6,z:-10.2,r:1.4,data:{x:-3.6,z:-10.55,ry:0,y:.95},label:"Ngồi nghỉ trên ghế"}),this.add(X0(7.2,-11.2)),this.circ(7.2,-11.2,.6),this.items.push({id:"jar",kind:"jar",x:7.2,z:-11.2,r:1.5,label:"Múc nước lu"}),this.occluders.push(this.add(W0(),9.2,0,-16.4)),this.rect(7.4,-17.9,11,-14.9),this.occluders.push(this.add(V0(),17,0,-15)),this.rect(14.4,-17.2,19.6,-12.8),this.roofPerches.push(new R(-2.5,6.05,-15.5),new R(1.5,6.05,-15.5),new R(4,6.05,-15.5)),j0.forEach(([f,M],x)=>{const y=new ne;y.position.set(f,0,M),this.group.add(y),this.plotAnchors.push(y);const C=new Lt(new $e(2.6,.22,2.2),Y(10121288));C.position.y=.11,C.receiveShadow=!0,y.add(C),this.plotMeshes.push(C),this.items.push({id:"plot"+x,kind:"plot",x:f,z:M,r:2.1,data:x})});const p=Y(9068608);[[11.25,2.35,5.8,.3],[11.25,12.05,5.8,.3]].forEach(([f,M,x,y])=>{const C=ft(new $e(x,.28,y),p,f,.14,M);this.group.add(C)}),this.add(vo("Vườn rau",2),7.2,0,2.4,.4),this.flowers(),[[-14,4,1.15],[-19,10,1],[-10,-2,.9]].forEach(([f,M,x])=>{this.add(k0(x),f,0,M,Math.random()*6),this.circ(f,M,.5)}),[[-21,-6],[-23,-1],[-19.5,-12]].forEach(([f,M])=>{this.add(H0(),f,0,M,Math.random()*6),this.circ(f,M,.8)}),[[-24,-21],[23.5,-21],[-24,23],[23.5,23]].forEach(([f,M])=>{this.add(G0(t==="low"?4:7),f,0,M),this.circ(f,M,.9)});const g=new Lt(new fa(.01,6,36,6),fl());g.rotation.x=-Math.PI/2,g.position.set(-12,.04,17),this.group.add(g),this.waterMeshes.push(g),this.add(Z0(6),-12,0,17),this.circ(-12,17,6.1),this.items.push({id:"pond",kind:"pond",x:-12,z:17,r:7.4,label:"Ngắm ao sen"});const v=new Lt(new an(5,120,4,40),fl(5223364));v.rotation.x=-Math.PI/2,v.position.set(35,.03,0),this.group.add(v),this.waterMeshes.push(v),this.rect(32.6,-60,37.4,60);for(let f=-34;f<=40;f+=7)this.add(pl(5.5+Math.random()*2,.1+Math.random()*.1),30.5,0,f+Math.random()*2,Math.PI+Math.random()*.4),this.circ(30.5,f,.4);for(let f=-20;f<=20;f+=10)this.add(pl(6,.12),-28.8,0,f,Math.random()*6),this.circ(-28.8,f,.4);const m=new Lt(new an(30,14,30,1),Y(10275914,{wind:.02}));m.rotation.x=-Math.PI/2,m.position.set(-20,.05,38),this.group.add(m),this.ricePlants(),this.occluders.push(this.add(er({w:7,d:5,h:2.8,wall:11130600,roofColor:9085104,trim:5925498}),15,0,46,Math.PI)),this.rect(10.5,42.5,19.5,50),this.occluders.push(this.add(er({w:6,d:5,h:2.6,wall:15911096,roofTex:!0}),-34,0,-6,Math.PI/2)),this.rect(-37.5,-10,-30.5,-2),this.occluders.push(this.add(J0("Nhà Ngoại"),0,0,ml.z1)),this.fence(),this.occluders.push(this.add(K0(),-7,0,20.5,0)),this.rect(-8.5,19.8,-5.5,21.2),this.items.push({id:"shop",kind:"shop",x:-7,z:21.7,r:2,label:"Mua bán ở sạp"}),this.buildZone(),this.rect(-60,-60,-40,60),this.rect(40,-60,60,60),this.rect(-60,-60,60,-40),this.rect(-60,50,60,60)}flowers(){const t=this.quality==="low"?60:this.quality==="medium"?120:200,e=new be(.02,.025,.5,4);e.translate(0,.25,0);const n=new di(.13,0);n.translate(0,.52,0);const s=new ii(e,Y(5216826,{wind:.12}),t),r=new ii(n,Y(16777215,{wind:.12}),t),a=[15895216,15910986,15759930,15221578,16777215,13073128].map(m=>new Nt(m)),o=new Xt,c=new Xn,l=new R,h=new R,u=[[-7.5,-8.6,3,1],[7.5,-8.6,3,1],[-8.8,-2,1,5],[8.8,-1.5,.8,3],[-3.5,1.2,2.2,.7],[3.5,1.2,2.2,.7]];for(let m=0;m<t;m++){const[f,M,x,y]=u[m%u.length];h.set(f+(Math.random()-.5)*x*2,0,M+(Math.random()-.5)*y*2),l.setScalar(.7+Math.random()*.6),c.setFromAxisAngle(new R(0,1,0),Math.random()*6),o.compose(h,c,l),s.setMatrixAt(m,o),r.setMatrixAt(m,o),r.setColorAt(m,a[m%a.length]),m%8===0&&this.flowerSpots.push(h.clone())}s.castShadow=r.castShadow=this.quality!=="low",this.group.add(s,r);const d=this.quality==="low"?220:this.quality==="medium"?520:900,p=new tn(.09,.45,3);p.translate(0,.22,0);const g=new ii(p,Y(6270526,{wind:.18}),d);let v=0;for(let m=0;m<d*3&&v<d;m++){const f=(Math.random()-.5)*84,M=(Math.random()-.5)*84;Math.abs(f)<2&&M>-2||f>-9&&f<9&&M>-20&&M<.5||f>8&&f<15&&M>2&&M<12.5||Math.hypot(f+12,M-17)<6.4||f>32&&f<38||(h.set(f,0,M),l.set(1,.6+Math.random()*.9,1),c.setFromAxisAngle(new R(0,1,0),Math.random()*6),o.compose(h,c,l),g.setMatrixAt(v++,o))}g.count=v,this.group.add(g)}ricePlants(){const t=this.quality==="low"?150:400,e=new tn(.06,.7,3);e.translate(0,.35,0);const n=new ii(e,Y(8372026,{wind:.2}),t),s=new Xt;for(let r=0;r<t;r++)s.makeTranslation(-34+r%28*1.04+Math.random()*.2,0,32+Math.floor(r/28)*.9+Math.random()*.2),n.setMatrixAt(r,s);this.group.add(n)}fence(){const{x0:t,x1:e,z0:n,z1:s,gate:r}=ml,a=[],o=[],c=(p,g,v,m)=>{const f=Math.hypot(v-p,m-g),M=Math.max(1,Math.round(f/1.2));for(let x=0;x<=M;x++)a.push([p+(v-p)*x/M,g+(m-g)*x/M]);o.push([p,g,v,m]),this.rect(p-.15,g-.15,v+.15,m+.15)};c(t,n,e,n),c(t,n,t,s),c(e,n,e,s),c(t,s,-r,s),c(r,s,e,s);const l=new be(.07,.08,1.4,5);l.translate(0,.7,0);const h=new ii(l,Y(11901530),a.length),u=new Xt;a.forEach(([p,g],v)=>{u.makeTranslation(p,0,g),h.setMatrixAt(v,u)}),h.castShadow=!0,this.group.add(h);const d=Y(11045450);o.forEach(([p,g,v,m])=>{const f=Math.hypot(v-p,m-g);[.5,1.1].forEach(M=>{const x=ft(new be(.04,.04,f,4),d,(p+v)/2,M,(g+m)/2);x.rotation.z=Math.PI/2,x.rotation.y=-Math.atan2(m-g,v-p),this.group.add(x)})})}buildZone(){const r=Y(9067062),a=Y(15917744),o=[[16,14],[24,14],[24,22],[16,22]];o.forEach(([l,h])=>this.group.add(ft(new be(.06,.06,.8,5),r,l,.4,h))),o.forEach(([l,h],u)=>{const[d,p]=o[(u+1)%4],g=Math.hypot(d-l,p-h),v=ft(new be(.02,.02,g,3),a,(l+d)/2,.7,(h+p)/2);v.rotation.z=Math.PI/2,v.rotation.y=-Math.atan2(p-h,d-l),this.group.add(v)});const c=new Lt(new an(8,8),Y(11569754));c.rotation.x=-Math.PI/2,c.position.set(20,.02,18),c.receiveShadow=!0,this.group.add(c),this.add(vo("Đất xây dựng",2.4),20,0,13.4),this.items.push({id:"build",kind:"build",x:20,z:13.2,r:2,label:"Xem khu đất xây dựng"})}}const zn=[[0,1780298,0,.35,1780298],[4.8,2241624,0,.35,2241624],[6,16037002,.8,.6,15909024],[8,9425908,2.3,.9,12575730],[16,9425908,2.3,.9,12575730],[17.8,15964778,1.2,.7,15904906],[19.2,3816042,.1,.42,3816042],[24,1780298,0,.35,1780298]];class tg{constructor(t,e,n){this.scene=t,this.smokeAt=e,this.sun=new jo(16773590,2),this.hemi=new Jo(12575743,6982218,.9),this.amb=new zh(16777215,.15),this.clouds=[],this.smoke=[],this.night=0,this.c1=new Nt,this.c2=new Nt,t.add(this.sun,this.sun.target,this.hemi,this.amb),this.setShadows(n),t.fog=new oa(12575730,45,120),t.background=new Nt(9425908);const s=Y(16777215,{rough:1});for(let l=0;l<9;l++){const h=new ne;for(let u=0;u<4;u++){const d=new Lt(new di(1.6+Math.random()*1.4,1),s);d.position.set(u*2-3,Math.random(),Math.random()*1.5),d.scale.y=.6,h.add(d)}h.position.set(-80+l*20+Math.random()*8,26+Math.random()*8,-60+Math.random()*120),this.clouds.push(h),t.add(h)}const r=new Me,a=[];for(let l=0;l<400;l++){const h=Math.random()*Math.PI*2,u=Math.random()*1.2+.2;a.push(Math.cos(h)*Math.cos(u)*140,Math.sin(u)*140,Math.sin(h)*Math.cos(u)*140)}r.setAttribute("position",new Ht(a,3)),this.stars=new fo(r,new Vr({color:16777215,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1})),t.add(this.stars);const o=new Me;this.ffBase=new Float32Array(45*3);for(let l=0;l<45;l++){const h=l<25,u=Math.random()*6.28,d=Math.random()*(h?7.5:14);this.ffBase.set(h?[-12+Math.cos(u)*d,.5+Math.random()*1.5,17+Math.sin(u)*d]:[Math.cos(u)*d,.5+Math.random()*1.6,-2+Math.sin(u)*d],l*3)}o.setAttribute("position",new qe(this.ffBase.slice(),3)),this.ff=new fo(o,new Vr({color:16773258,size:.22,transparent:!0,opacity:0,blending:nr,depthWrite:!1})),t.add(this.ff);const c=new gn({color:14606046,transparent:!0,opacity:.6,roughness:1,depthWrite:!1});for(let l=0;l<10;l++){const h=new Lt(new di(.35,1),c.clone());h.userData.t=l/10,this.smoke.push(h),t.add(h)}this.disc=new Lt(new Ie(5,16,12),new sa({color:16773808,fog:!1})),t.add(this.disc)}setShadows(t){if(this.sun.castShadow=t>0,t>0){this.sun.shadow.mapSize.set(t,t);const e=this.sun.shadow.camera;e.left=-28,e.right=28,e.top=28,e.bottom=-28,e.near=1,e.far=120,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,e.updateProjectionMatrix(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null}}sample(t){let e=zn[0],n=zn[zn.length-1];for(let a=0;a<zn.length-1;a++)if(t>=zn[a][0]&&t<=zn[a+1][0]){e=zn[a],n=zn[a+1];break}const s=(t-e[0])/Math.max(.001,n[0]-e[0]),r=s*s*(3-2*s);return{a:e,b:n,s:r}}update(t,e,n,s){const r=Hi(e),{a,b:o,s:c}=this.sample(r);this.scene.background.copy(this.c1.setHex(a[1]).lerp(this.c2.setHex(o[1]),c)),this.scene.fog.color.copy(this.c1.setHex(a[4]).lerp(this.c2.setHex(o[4]),c));const l=(r-6)/12,h=l*Math.PI,u=Math.sin(h),d=r>5.6&&r<18.6;this.sun.intensity=a[2]+(o[2]-a[2])*c,this.hemi.intensity=a[3]+(o[3]-a[3])*c,this.night=Math.max(0,Math.min(1,d?0:1-Math.abs(u)*0+(r>18.6&&r<19.6?r-18.6-1+1:1))),this.night=r>=19.2||r<5?1:r>18?(r-18)/1.2:r<6?1-(r-5):0;const p=d?new R(Math.cos(h)*.9,Math.max(.15,u),.35):new R(-.4,.8,.3);this.sun.color.setHex(d?u<.35?16763034:16773590:10137855),d||(this.sun.intensity=.35),this.sun.position.copy(n).addScaledVector(p.normalize(),50),this.sun.target.position.copy(n),this.disc.position.copy(n).addScaledVector(p,130),this.disc.material.color.setHex(d?16773808:15659775),this.disc.scale.setScalar(d?1:.6),this.hemi.color.setHex(this.night>.5?5925536:12575743),this.stars.material.opacity=this.night*.9;const g=this.ff.material;if(g.opacity=this.night*(.7+Math.sin(s*3)*.3),this.night>.05){const m=this.ff.geometry.attributes.position;for(let f=0;f<m.count;f++)m.setXYZ(f,this.ffBase[f*3]+Math.sin(s*.7+f)*.6,this.ffBase[f*3+1]+Math.sin(s*1.3+f*2)*.3,this.ffBase[f*3+2]+Math.cos(s*.6+f)*.6);m.needsUpdate=!0}this.clouds.forEach((m,f)=>{m.position.x+=t*(.6+f*.05),m.position.x>90&&(m.position.x=-90)});const v=r>10.3&&r<12.5||r>16.8&&r<19.5||r>5.5&&r<7;this.smoke.forEach(m=>{m.userData.t=(m.userData.t+t*.18)%1;const f=m.userData.t;m.position.set(this.smokeAt.x+Math.sin(f*6+s)*.3+f*1.2,this.smokeAt.y+f*4,this.smokeAt.z),m.scale.setScalar(.4+f*1.6),m.material.opacity=v?.55*(1-f):0,m.visible=v})}}class eg{constructor(t,e,n,s){this.bf=[],this.birds=[],this.hens=[];const r=[15910986,15895216,16777215,8048880,15759930];for(let a=0;a<s;a++){const o=new ne,c=Y(r[a%r.length],{side:Ze}),l=new ha(.13,6),h=new Lt(l,c),u=new Lt(l,c);h.position.x=-.1,u.position.x=.1,h.rotation.x=u.rotation.x=-Math.PI/2,o.add(h,u,new Lt(new ys(.02,.12,2,4),Y(3811872)));const d=e[a%Math.max(1,e.length)]?.clone()||new R;o.position.copy(d).add(new R(0,1,0)),t.add(o),this.bf.push({g:o,wl:h,wr:u,home:d,ph:Math.random()*6,tgt:o.position.clone()})}n.forEach(a=>{const o=new ne,c=new Lt(new Ie(.16,8,6),Y(6969930));c.scale.set(1,.9,1.3),o.add(c);const l=new Lt(new Ie(.1,8,6),Y(5917242));l.position.set(0,.13,.14),o.add(l);const h=new Lt(new tn(.03,.08,4),Y(15904826));h.rotation.x=Math.PI/2,h.position.set(0,.12,.26),o.add(h),o.position.copy(a),t.add(o),this.birds.push({g:o,base:a.clone(),t:Math.random()*5,hop:0})});for(let a=0;a<3;a++){const o=new ne,c=new Lt(new Ie(.26,9,7),Y(a===1?16777215:13203514));c.scale.set(.9,.85,1.2),c.position.y=.36,c.castShadow=!0,o.add(c);const l=new Lt(new tn(.12,.3,5),Y(a===1?15658734:3811872));l.position.set(0,.5,-.3),l.rotation.x=-.6,o.add(l);const h=new ne;h.position.set(0,.6,.24),o.add(h),h.add(new Lt(new Ie(.13,8,6),Y(a===1?16777215:14256714)));const u=new Lt(new $e(.04,.1,.12),Y(15217466));u.position.set(0,.13,.02),h.add(u);const d=new Lt(new tn(.035,.1,4),Y(15904826));d.rotation.x=Math.PI/2,d.position.set(0,0,.15),h.add(d),[-.08,.08].forEach(g=>{const v=new Lt(new be(.015,.015,.25,4),Y(15904826));v.position.set(g,.12,0),o.add(v)});const p=new R(-4+a*3,0,3+a);o.position.copy(p),t.add(o),this.hens.push({g:o,head:h,pos:p,tgt:p.clone(),wait:1+a,peck:0})}}update(t,e,n,s){this.bf.forEach(r=>{if(r.g.visible=n<.5,!r.g.visible)return;r.ph+=t*18;const a=Math.sin(r.ph)*1.1;r.wl.rotation.y=a,r.wr.rotation.y=-a,r.g.position.distanceTo(r.tgt)<.3&&r.tgt.set(r.home.x+(Math.random()-.5)*5,.6+Math.random()*1.4,r.home.z+(Math.random()-.5)*5);const o=r.tgt.clone().sub(r.g.position);r.g.position.addScaledVector(o.normalize(),t*1.2),r.g.position.y+=Math.sin(e*5+r.ph)*t*.3,r.g.rotation.y=Math.atan2(o.x,o.z)}),this.birds.forEach(r=>{r.t-=t,r.t<0&&(r.t=2+Math.random()*5,r.hop=1,r.g.rotation.y=Math.random()*6),r.hop>0&&(r.hop-=t*3,r.g.position.y=r.base.y+Math.sin(Math.max(0,r.hop)*Math.PI)*.25,r.g.position.x=r.base.x+(1-Math.max(0,r.hop))*.3*Math.sin(r.g.rotation.y))}),this.hens.forEach(r=>{const a=r.tgt.clone().sub(r.pos);a.y=0;const o=r.pos.distanceTo(s);o<1.6&&r.tgt.copy(r.pos).add(r.pos.clone().sub(s).setY(0).normalize().multiplyScalar(2.5)),a.length()>.2?(r.pos.addScaledVector(a.normalize(),t*(o<1.6?2.6:.9)),r.g.rotation.y=Math.atan2(a.x,a.z),r.g.position.y=Math.abs(Math.sin(e*12))*.03,r.head.rotation.x=0):(r.wait-=t,r.peck+=t*9,r.head.rotation.x=Math.max(0,Math.sin(r.peck))*.9,r.wait<0&&(r.wait=2+Math.random()*4,r.tgt.set(-6+Math.random()*12,0,-1+Math.random()*8))),r.pos.x=Math.max(-8,Math.min(8,r.pos.x)),r.pos.z=Math.max(-2.5,Math.min(9,r.pos.z)),r.g.position.x=r.pos.x,r.g.position.z=r.pos.z})}}class ng{constructor(t){this.cam=t,this.yaw=Math.PI,this.pitch=.42,this.dist=7.5,this.pov=!1,this.target=new R,this.sens=1,this.occluders=[],this.ray=new kh,this.cur=7.5}input(t,e,n){this.yaw-=t*.005*this.sens,this.pitch+=e*.004*this.sens,this.pitch=this.pov?Math.max(-1.2,Math.min(1.2,this.pitch)):Math.max(-.15,Math.min(1.25,this.pitch)),n&&(this.dist=Math.max(3.2,Math.min(13,this.dist+n*.8)))}toggle(){this.pov=!this.pov,this.pitch=this.pov?.05:.42}update(t,e,n){const s=1-Math.pow(5e-4,t);if(this.pov){this.target.set(e.x,e.y+n,e.z),this.cam.position.copy(this.target),this.cam.lookAt(this.target.x-Math.sin(this.yaw)*Math.cos(this.pitch),this.target.y-Math.sin(this.pitch),this.target.z-Math.cos(this.yaw)*Math.cos(this.pitch));return}this.target.lerp(new R(e.x,e.y+1.25,e.z),s);const r=new R(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(this.dist);let a=this.dist;if(this.occluders.length){this.ray.set(this.target,r.clone().normalize()),this.ray.far=this.dist;const c=this.ray.intersectObjects(this.occluders,!0)[0];c&&(a=Math.max(1.4,c.distance-.35))}this.cur+=(a-this.cur)*(a<this.cur?1:Math.min(1,s*.8)),r.setLength(this.cur);const o=this.target.clone().add(r);o.y<.6&&(o.y=.6),this.cam.position.lerp(o,this.cur<this.dist-.2?1:Math.min(1,s*1.6)),this.cam.lookAt(this.target)}basis(){return{fx:-Math.sin(this.yaw),fz:-Math.cos(this.yaw),rx:Math.cos(this.yaw),rz:-Math.sin(this.yaw)}}}const Vh=[16241328,15645842,14262126,11893326],Wh=[2759186,5911840,9067050,14262346,6974074],ig=["Ngắn","Xù","Đuôi ngựa","Hai búi","Tóc dài"],Xh=[{name:"Áo cam, quần jean",shirt:15895098,pants:3828400,skirt:!1},{name:"Áo xanh ngọc",shirt:3126688,pants:13217930,skirt:!1},{name:"Áo bà ba hồng",shirt:15899320,pants:2763315,skirt:!1},{name:"Áo sọc vàng",shirt:15910986,pants:5221962,skirt:!1},{name:"Áo trắng, váy đỏ",shirt:16184558,pants:14172986,skirt:!0}],gl={by:0,bp:0,hp:0,hy:0,alx:0,alz:.12,arx:0,arz:-.12,llx:0,lrx:0,sq:1},Ii=(i,t)=>new ys(i,t,3,8),un=(i,t=12,e=9)=>new Ie(i,t,e);function Yt(i,t,e=0,n=0,s=0){const r=new Lt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}class qr{constructor(t,e=!1){this.root=new ne,this.hips=new ne,this.body=new ne,this.head=new ne,this.armL=new ne,this.armR=new ne,this.legL=new ne,this.legR=new ne,this.handR=new ne,this.eyes=[],this.held={},this.pose={...gl},this.phase=0,this.blinkT=2,this.t=0,this.sitting=!1,this.elder=e,this.build(t)}build(t){const e=this.elder,n=Y(e?1578e4:Vh[t?.skin??0],{flat:!1}),s=e?{shirt:9071264,pants:2500142,skirt:!1}:Xh[t?.outfit??0],r=Y(s.shirt,{flat:!1}),a=Y(s.pants,{flat:!1}),o=Y(e?5913130:16185078,{flat:!1});this.root.add(this.hips),this.hips.position.y=e?.52:.55,this.hips.add(this.body);const c=Yt(Ii(e?.27:.25,e?.28:.24),r,0,.3,0);if(c.scale.set(1.05,1,.85),this.body.add(c),s.skirt){const T=Yt(new tn(.34,.36,10),a,0,.06,0);this.body.add(T)}if(e)for(let T=0;T<3;T++)this.body.add(Yt(un(.025,6,4),Y(15919312),0,.42-T*.12,.23));this.head.position.y=e?.86:.9,this.body.add(this.head);const l=e?.38:.42,h=Yt(un(l,16,12),n);h.scale.set(1,.95,.95),this.head.add(h);const u=Y(2365974,{flat:!1}),d=Y(16777215,{flat:!1});[-1,1].forEach(T=>{const w=Yt(Ii(.045,.05),u,T*l*.36,.02,l*.86);this.head.add(w),this.eyes.push(w),e||this.head.add(Yt(un(.018,6,4),d,T*l*.36+.015,.06,l*.92));const L=Yt(un(.06,8,6),Y(16748431,{flat:!1}),T*l*.6,-.1,l*.74);L.scale.z=.3,this.head.add(L),this.head.add(Yt(un(.07,8,6),n,T*l*.98,0,0))});const p=Yt(new vs(.05,.012,4,10,Math.PI),Y(9058858),0,-.13,l*.9);if(p.rotation.z=Math.PI,this.head.add(p),this.buildHair(t,l),e){const T=Y(6965802);[-1,1].forEach(w=>{const L=Yt(new vs(.075,.012,4,12),T,w*l*.36,.02,l*.93);this.head.add(L)})}[[this.armL,-1],[this.armR,1]].forEach(([T,w])=>{T.position.set(w*(e?.31:.3),.48,0),this.body.add(T);const L=Yt(Ii(.075,.2),r,0,-.16,0);T.add(L);const V=Yt(un(.085,8,6),n,0,-.36,0);T.add(V)}),this.handR.position.set(0,-.38,.02),this.armR.add(this.handR),[[this.legL,-1],[this.legR,1]].forEach(([T,w])=>{T.position.set(w*.12,.02,0),this.hips.add(T),T.add(Yt(Ii(.09,e?.22:.2),a,0,-.2,0));const L=Yt(Ii(.08,.1),o,0,-.46,.05);L.rotation.x=Math.PI/2,T.add(L)});const g=new ne;g.add(Yt(new be(.11,.13,.22,10),Y(3842970),0,-.05,.12));const v=Yt(new be(.02,.03,.3,5),Y(3842970),0,0,.32);v.rotation.x=1,g.add(v);const m=new ne;m.add(Yt(new be(.025,.025,1.1,5),Y(10119740),0,0,.1));const f=Yt(new $e(.22,.05,.16),Y(10133672),0,-.55,.18);m.add(f);const M=new ne;M.add(Yt(new be(.025,.025,1.1,5),Y(13214810),0,-.15,.1)),M.add(Yt(new tn(.16,.35,6),Y(14267498),0,-.75,.12));const x=new ne;x.add(Yt(new be(.025,.025,.4,5),Y(10119740),0,0,.08)),x.add(Yt(new $e(.16,.08,.08),Y(9080728),0,-.2,.1));const y=new ne;y.add(Yt(un(.1,6,5),Y(14201978),0,-.04,.08));const C=new ne;C.add(Yt(new tn(.12,.3,6),Y(5221962),0,.05,.1)),Object.entries({can:g,hoe:m,broom:M,ham:x,seeds:y,veg:C}).forEach(([T,w])=>{w.visible=!1,this.handR.add(w),this.held[T]=w}),this.root.traverse(T=>{T.isMesh&&(T.castShadow=!0)})}buildHair(t,e){const n=Y(this.elder?14474460:Wh[t?.hairColor??0],{flat:!1}),s=this.head,r=new Ie(e*1.06,16,10,0,Math.PI*2,0,Math.PI*.55),a=Yt(r,n,0,.04,-.02);a.rotation.x=-.25,s.add(a);const o=Yt(new Ie(e*1.02,14,6,Math.PI*1.15,Math.PI*.7,.35,.5),n,0,.06,.02);if(s.add(o),this.elder){s.add(Yt(un(.17,10,8),n,0,.05,-e*1.02));return}const c=t?.hair??0;if(c===1)for(let l=0;l<7;l++){const h=Yt(new tn(.1,.24,5),n,Math.cos(l)*.25,e*.85,Math.sin(l)*.25-.05);h.rotation.set(Math.sin(l)*.5,0,-Math.cos(l)*.5),s.add(h)}if(c===2){const l=Yt(Ii(.1,.3),n,0,-.1,-e*1.05);l.rotation.x=.5,s.add(l),s.add(Yt(un(.05,6,5),Y(15886986),0,.12,-e*1))}if(c===3&&[-1,1].forEach(l=>s.add(Yt(un(.15,10,8),n,l*e*.75,e*.62,-.05))),c===4){const l=Yt(new be(e*.95,e*.9,.6,12,1,!0,Math.PI*.5,Math.PI),n,0,-.2,-.05);s.add(l)}}hold(t){Object.entries(this.held).forEach(([e,n])=>n.visible=e===t)}update(t,e,n,s,r){this.t+=t;const a=e>4.2,o=this.elder,c={...gl},l=Math.min(e/(o?1.8:3.2),1.6);if(this.phase+=t*(o?5:8.5)*(a?1.35:1)*Math.max(.6,Math.min(e/3,1.4)),this.sitting)c.by=-.18,c.llx=-1.45,c.lrx=-1.45,c.alx=-.35,c.arx=-.35,c.hp=.05+Math.sin(this.t*1.2)*.03;else if(n)c.llx=-.9,c.lrx=.3,c.alz=.9,c.arz=-.9,c.sq=1.05;else if(e>.15){const g=Math.sin(this.phase),v=.75*Math.min(l,1.25);c.llx=g*v,c.lrx=-g*v,c.alx=-g*v*.9,c.arx=g*v*.9,c.by=Math.abs(Math.cos(this.phase))*(a?.07:.04),c.bp=a?.18:.05}else c.by=Math.sin(this.t*2.1)*.012,c.sq=1+Math.sin(this.t*2.1)*.012,c.hy=Math.sin(this.t*.6)*.15;if(o&&(c.bp+=.16),s){const g=Math.sin(Math.min(r,1)*Math.PI);switch(s){case"plant":c.by-=.22*g,c.bp+=.55*g,c.arx=-1.2*g,c.alx=-.5*g,c.llx=-.6*g,c.lrx=.2*g;break;case"till":{const v=Math.sin(r*Math.PI*3);c.bp+=.3,c.arx=-1.2-v*.9,c.alx=-1.2-v*.9,c.by-=.05;break}case"water":c.arx=-1.1,c.arz=-.15-.3*g,c.bp+=.15,c.hp=.25;break;case"harvest":c.by-=.2*g,c.bp+=.5*g,c.arx=-1.3*g+(r>.6?1.6*(r-.6):0),c.alx=-1.3*g;break;case"build":{const v=Math.sin(r*Math.PI*6);c.arx=-1.6-v*.6,c.bp+=.15;break}case"talk":c.hp=Math.sin(r*14)*.08,c.arx=-.5-Math.sin(r*9)*.2,c.arz=-.35;break;case"wave":c.arz=-2.6,c.arx=0,c.arz+=Math.sin(r*22)*.3,c.hy=.1;break;case"sweep":{const v=Math.sin(this.t*3.2);c.bp+=.35,c.arx=-.6+v*.15,c.alx=-.7+v*.15,c.arz=.3+v*.3,c.alz=-.1+v*.3;break}case"pet":c.by-=.25*g,c.bp+=.5*g,c.arx=-1.2*g+Math.sin(r*18)*.15;break}}const h=1-Math.pow(8e-4,t),u=this.pose,d=c;for(const g in u)u[g]+=(d[g]-u[g])*h;this.hips.position.y=(o?.52:.55)+u.by,this.body.rotation.x=u.bp,this.body.scale.set(1/Math.sqrt(u.sq),u.sq,1/Math.sqrt(u.sq)),this.head.rotation.set(u.hp,u.hy,0),this.armL.rotation.set(u.alx,0,u.alz),this.armR.rotation.set(u.arx,0,u.arz),this.legL.rotation.x=u.llx,this.legR.rotation.x=u.lrx,this.blinkT-=t;const p=this.blinkT<.12?.15:1;this.blinkT<0&&(this.blinkT=2+Math.random()*3),this.eyes.forEach(g=>g.scale.y=p)}}class sg{constructor(t){this.pos=new R,this.vel=new R,this.vy=0,this.ry=0,this.air=!1,this.speed=0,this.action=null,this.at=0,this.dur=1,this.onActionHit=null,this.hitDone=!1,this.seat=null,this.stepAcc=0,this.av=new qr(t)}rebuild(t,e){e.remove(this.av.root),this.av=new qr(t),e.add(this.av.root)}busy(){return!!this.action&&this.at<1}doAction(t,e,n,s){this.action=t,this.at=0,this.dur=e,this.av.hold(n),this.onActionHit=s||null,this.hitDone=!1}sit(t){this.seat=t,this.av.sitting=!0,this.pos.set(t.x,0,t.z),this.ry=t.ry}stand(){this.seat&&(this.pos.z+=.8*Math.cos(this.ry),this.pos.x+=.8*Math.sin(this.ry),this.seat=null,this.av.sitting=!1)}update(t,e,n,s,r,a,o,c){if(this.seat)if(e.x||e.z||s)this.stand();else{this.av.root.position.set(this.seat.x,(this.seat.y??.95)-.32,this.seat.z),this.av.root.rotation.y=this.seat.ry,this.av.update(t,0,!1,this.action,this.at),this.tickAction(t);return}const l=this.busy()&&this.action!=="talk"&&this.action!=="wave",h=new R(r.rx*e.x-r.fx*e.z,0,r.rz*e.x-r.fz*e.z),u=Math.min(1,Math.hypot(e.x,e.z)),d=n?6:3.2;if(l?h.set(0,0,0):h.lengthSq()>0&&h.normalize().multiplyScalar(d*u),this.vel.lerp(h,1-Math.pow(1e-4,t)),this.pos.addScaledVector(this.vel,t),this.collide(a),this.speed=Math.hypot(this.vel.x,this.vel.z),o!=null)this.ry=o+Math.PI;else if(this.speed>.3){let g=Math.atan2(this.vel.x,this.vel.z)-this.ry;g=Math.atan2(Math.sin(g),Math.cos(g)),this.ry+=g*(1-Math.pow(5e-4,t))}s&&!this.air&&!l&&(this.vy=5.4,this.air=!0),this.air&&(this.vy-=15*t,this.pos.y+=this.vy*t,this.pos.y<=0&&(this.pos.y=0,this.vy=0,this.air=!1,c(!0))),!this.air&&this.speed>.6&&(this.stepAcc+=t*this.speed,this.stepAcc>(n?1.3:1.05)&&(this.stepAcc=0,c(n))),this.av.root.position.copy(this.pos),this.av.root.rotation.y=this.ry,this.av.update(t,this.air?0:this.speed,this.air,this.action,this.at),this.tickAction(t)}tickAction(t){this.action&&(this.at+=t/this.dur,!this.hitDone&&this.at>.55&&(this.hitDone=!0,this.onActionHit?.()),this.at>=1&&(this.action=null,this.av.hold(null)))}collide(t){for(const n of t)if(n.t==="c"){const s=this.pos.x-n.x,r=this.pos.z-n.z,a=Math.hypot(s,r),o=n.r+.36;a<o&&a>1e-4&&(this.pos.x=n.x+s/a*o,this.pos.z=n.z+r/a*o)}else{const s=Math.max(n.x0,Math.min(this.pos.x,n.x1)),r=Math.max(n.z0,Math.min(this.pos.z,n.z1)),a=this.pos.x-s,o=this.pos.z-r,c=Math.hypot(a,o);if(c<.36)if(c>1e-4)this.pos.x=s+a/c*.36,this.pos.z=r+o/c*.36;else{const l=this.pos.x-n.x0,h=n.x1-this.pos.x,u=this.pos.z-n.z0,d=n.z1-this.pos.z,p=Math.min(l,h,u,d);p===l?this.pos.x=n.x0-.36:p===h?this.pos.x=n.x1+.36:p===u?this.pos.z=n.z0-.36:this.pos.z=n.z1+.36}}}}const Qi=[{from:5,spots:[{x:-3,z:-4,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"},{x:3,z:-6,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"},{x:0,z:-2,act:"sweep",hold:"broom",label:"Ngoại đang quét sân"}]},{from:8,spots:[{x:7.6,z:-8.6,act:"plant",hold:"can",label:"Ngoại đang tưới hoa"},{x:-7.6,z:-8.4,act:"plant",hold:"can",label:"Ngoại đang tưới hoa"}]},{from:10.5,spots:[{x:9.2,z:-14,act:null,hold:null,face:Math.PI,label:"Ngoại đang nấu cơm"}]},{from:13,spots:[{x:3.4,z:-10.5,act:null,hold:null,sit:{x:3.4,z:-10.55,ry:0,y:.95},label:"Ngoại đang ngồi nghỉ ngoài hiên"}]},{from:16.5,spots:[{x:-9.2,z:-1,act:"plant",hold:null,label:"Ngoại đang chăm vườn"},{x:-12,z:3,act:"plant",hold:null,label:"Ngoại đang chăm vườn"}]},{from:18,spots:[{x:4.4,z:-9.6,act:null,hold:null,face:Math.PI,label:"Ngoại dọn mâm cơm"}]},{from:21,spots:[{x:0,z:-12.2,act:null,hold:null,inside:!0,label:"Ngoại đã vô nhà nghỉ"}]}];class rg{constructor(){this.av=new qr(null,!0),this.pos=new R(0,0,19),this.ry=Math.PI,this.spot=null,this.idx=0,this.wait=0,this.talking=!1,this.visible=!0,this.speed=0,this.actT=0,this.greet=!1,this.label="",this.av.root.position.copy(this.pos)}routine(t){let e=Qi[Qi.length-1];for(const n of Qi)t>=n.from&&(e=n);return t<5&&(e=Qi[Qi.length-1]),e}update(t,e,n,s){const r=Hi(e),a=this.routine(r);(!this.spot||!a.spots.includes(this.spot))&&(this.spot=a.spots[0],this.idx=0,this.av.sitting=!1),this.label=this.spot.label;let o=this.greet?new R(0,0,19):new R(this.spot.x,0,this.spot.z);const c=Math.hypot(o.x-this.pos.x,o.z-this.pos.z);let l=null;if(this.talking){this.speed=0;const u=Math.atan2(n.x-this.pos.x,n.z-this.pos.z);this.turn(u,t),l="talk",this.av.sitting=!1}else if(c>.35){this.av.sitting=!1;const u=1.5;this.speed=u;const d=(o.x-this.pos.x)/c,p=(o.z-this.pos.z)/c;this.pos.x+=d*u*t,this.pos.z+=p*u*t,this.turn(Math.atan2(d,p),t),this.collide(s)}else this.speed=0,this.spot.sit&&!this.greet?(this.av.sitting=!0,this.pos.set(this.spot.sit.x,0,this.spot.sit.z),this.ry=this.spot.sit.ry):(this.spot.face!=null&&this.turn(this.spot.face,t),l=this.spot.act,this.wait+=t,a.spots.length>1&&this.wait>9&&(this.wait=0,this.idx=(this.idx+1)%a.spots.length,this.spot=a.spots[this.idx]));!this.talking&&!this.greet&&Math.hypot(n.x-this.pos.x,n.z-this.pos.z)<2.2&&this.speed===0&&!this.av.sitting&&(this.turn(Math.atan2(n.x-this.pos.x,n.z-this.pos.z),t),l=l==="sweep"?null:l),this.visible=!(this.spot.inside&&c<.5&&!this.talking),this.av.root.visible=this.visible,this.av.hold(this.talking?null:l==="sweep"?"broom":this.spot.hold&&l?this.spot.hold:null),this.actT=(this.actT+t*.5)%1;const h=this.av.sitting&&this.spot.sit?this.spot.sit.y-.3:0;this.av.root.position.set(this.pos.x,h,this.pos.z),this.av.root.rotation.y=this.ry,this.av.update(t,this.speed,!1,l,l==="talk"?this.actT:l==="plant"?.5:this.actT)}turn(t,e){let n=t-this.ry;n=Math.atan2(Math.sin(n),Math.cos(n)),this.ry+=n*(1-Math.pow(.01,e))}collide(t){for(const n of t){if(n.t!=="c")continue;const s=this.pos.x-n.x,r=this.pos.z-n.z,a=Math.hypot(s,r),o=n.r+.35;a<o&&a>1e-4&&(this.pos.x=n.x+s/a*o,this.pos.z=n.z+r/a*o)}}}const ve={hand:{id:"hand",name:"Tay không",kind:"tool",buy:null,sell:null,stack:1,desc:"Thu hoạch, trò chuyện, tương tác."},hoe:{id:"hoe",name:"Cuốc",kind:"tool",buy:null,sell:null,stack:1,desc:"Xới đất trước khi gieo hạt."},can:{id:"can",name:"Bình tưới",kind:"tool",buy:null,sell:null,stack:1,desc:"Tưới cho đất ẩm để cây lớn."},seed_raumuong:{id:"seed_raumuong",name:"Hạt rau muống",kind:"seed",buy:10,sell:4,stack:99,desc:"Lớn nhanh, cắt xong mọc lại.",crop:"raumuong"},seed_caixanh:{id:"seed_caixanh",name:"Hạt cải xanh",kind:"seed",buy:15,sell:6,stack:99,desc:"Cải xanh lá to, bán được giá.",crop:"caixanh"},raumuong:{id:"raumuong",name:"Bó rau muống",kind:"produce",buy:null,sell:15,stack:99,desc:"Rau muống xanh giòn, xào tỏi là hết sảy."},caixanh:{id:"caixanh",name:"Cải xanh",kind:"produce",buy:null,sell:28,stack:99,desc:"Nấu canh cải với tôm khô."}};class ag{constructor(t){this.s=t}count(t){return this.s.inv.reduce((e,n)=>e+(n.id===t?n.qty:0),0)}add(t,e){const n=ve[t];if(!n||e<=0)return 0;let s=e;for(const r of this.s.inv)if(r.id===t&&r.qty<n.stack){const a=Math.min(s,n.stack-r.qty);if(r.qty+=a,s-=a,!s)break}for(const r of this.s.inv){if(!s)break;if(!r.id){const a=Math.min(s,n.stack);r.id=t,r.qty=a,s-=a}}return Be.emit("inv"),e-s}remove(t,e){if(this.count(t)<e)return!1;let n=e;for(let s=this.s.inv.length-1;s>=0&&n;s--){const r=this.s.inv[s];if(r.id!==t)continue;const a=Math.min(n,r.qty);r.qty-=a,n-=a,r.qty||(r.id="")}return Be.emit("inv"),!0}swap(t,e){if(t<0||e<0||t>=_o||e>=_o)return;const n=this.s.inv[t];this.s.inv[t]=this.s.inv[e],this.s.inv[e]=n,Be.emit("inv")}selected(){return this.s.inv[this.s.hotbar]||{id:"",qty:0}}buy(t,e){const n=ve[t];if(!n||n.buy==null)return"Món này không bán.";if(e<1)return"Số lượng không hợp lệ.";const s=n.buy*e;return this.s.money<s?"Không đủ xu.":this.room(t)<e?"Kho đồ đầy rồi.":(this.s.money-=s,this.add(t,e),Be.emit("money",-s),null)}sell(t,e){const n=ve[t];if(!n||n.sell==null)return"Món này không bán được.";if(e<1||this.count(t)<e)return"Không đủ hàng để bán.";this.remove(t,e);const s=n.sell*e;return this.s.money+=s,Be.emit("money",s),null}room(t){const e=ve[t];let n=0;for(const s of this.s.inv)s.id?s.id===t&&(n+=e.stack-s.qty):n+=e.stack;return n}}const wn={raumuong:{id:"raumuong",name:"Rau muống",seedItem:"seed_raumuong",produceItem:"raumuong",seedPrice:10,sellPrice:15,stageSeconds:[35,40,45],yield:[2,3],regrow:1,enabled:!0},caixanh:{id:"caixanh",name:"Cải xanh",seedItem:"seed_caixanh",produceItem:"caixanh",seedPrice:15,sellPrice:28,stageSeconds:[45,55,60],yield:[1,2],regrow:null,enabled:!0},cachua:{id:"cachua",name:"Cà chua",seedItem:"seed_cachua",produceItem:"cachua",seedPrice:20,sellPrice:12,stageSeconds:[60,70,80],yield:[3,5],regrow:2,enabled:!1},bido:{id:"bido",name:"Bí đỏ",seedItem:"seed_bido",produceItem:"bido",seedPrice:30,sellPrice:70,stageSeconds:[80,90,100],yield:[1,1],regrow:null,enabled:!1},muoigio:{id:"muoigio",name:"Hoa mười giờ",seedItem:"seed_muoigio",produceItem:"muoigio",seedPrice:12,sellPrice:20,stageSeconds:[40,40,50],yield:[1,2],regrow:2,enabled:!1},daubap:{id:"daubap",name:"Đậu bắp",seedItem:"seed_daubap",produceItem:"daubap",seedPrice:18,sellPrice:10,stageSeconds:[50,60,60],yield:[3,4],regrow:2,enabled:!1}},bn=3;class og{constructor(t,e){this.s=t,this.inv=e}tick(t){for(const e of this.s.plots){if(!e.crop||!e.wet||e.stage>=bn)continue;const n=wn[e.crop];let s=t;for(;s>0&&e.stage<bn&&e.wet;){const r=n.stageSeconds[e.stage]*(1-e.progress),a=Math.min(s,r);e.progress+=a/n.stageSeconds[e.stage],s-=a,e.progress>=.999&&(e.stage++,e.progress=0,e.wet=e.stage<bn?!1:e.wet,Be.emit("plotGrow",e))}}}rain(){for(const t of this.s.plots)t.tilled&&(t.wet=!0)}actionFor(t){const e=this.inv.selected().id;if(!t.tilled)return{kind:"till",label:"Xới đất"};if(!t.crop){const r=ve[e]?.kind==="seed"?e:["seed_raumuong","seed_caixanh"].find(o=>this.inv.count(o)>0)||"";if(!r)return{kind:"wait",label:"Hết hạt giống, ghé sạp mua nha"};const a=ve[r].crop;return{kind:"plant",label:`Gieo ${wn[a].name.toLowerCase()}`,crop:a}}const n=wn[t.crop];if(t.stage>=bn)return{kind:"harvest",label:`Thu hoạch ${n.name.toLowerCase()}`};if(!t.wet)return{kind:"water",label:`Tưới ${n.name.toLowerCase()}`};const s=Math.ceil(n.stageSeconds[t.stage]*(1-t.progress));return{kind:"wait",label:`${n.name} đang lớn · còn ~${s} giây`}}till(t){return t.tilled?!1:(t.tilled=!0,Be.emit("plot",t,"till"),!0)}plant(t,e){const n=wn[e];return!t.tilled||t.crop||!n?.enabled||!this.inv.remove(n.seedItem,1)?!1:(t.crop=e,t.stage=0,t.progress=0,Be.emit("plot",t,"plant"),!0)}water(t){return!t.crop||t.wet||t.stage>=bn?!1:(t.wet=!0,Be.emit("plot",t,"water"),!0)}harvest(t){if(!t.crop||t.stage<bn)return 0;const e=wn[t.crop],n=e.yield[0]+Math.floor(Math.random()*(e.yield[1]-e.yield[0]+1)),s=this.inv.add(e.produceItem,n);return s?(e.regrow!=null?(t.stage=e.regrow,t.progress=0,t.wet=!1):(t.crop=null,t.stage=0,t.progress=0,t.wet=!1),Be.emit("plot",t,"harvest"),s):0}}const cg=(()=>{const i=new Zo;return i.moveTo(0,.36),i.lineTo(.13,.04),i.lineTo(.06,.07),i.lineTo(0,-.02),i.lineTo(-.06,.07),i.lineTo(-.13,.04),i.closePath(),new pa(i)})(),qh=new be(.018,.022,1,5);qh.translate(0,.5,0);const lg=new Ie(.035,5,4),hg=new Ie(.06,6,4),ug=new Ie(1,8,6);function $h(i,t){const e=Y(t);for(let n=0;n<6;n++){const s=new Lt(lg,e);s.position.set((n%3-1)*.5,.24,(Math.floor(n/3)-.5)*.7),i.add(s)}}function dg(i,t){const e=Y(10473578,{wind:.18}),n=Y(4168250,{wind:.2,side:Ze});if(t===0)return $h(i,8018490);const s=[[-.7,-.45],[0,-.45],[.7,-.45],[-.7,.45],[0,.45],[.7,.45]],r=[0,3,5,8][t],a=[0,.12,.32,.55][t];s.forEach(([o,c])=>{for(let l=0;l<r;l++){const h=l/r*Math.PI*2+o,u=.06+l%2*.05,d=a*(.75+l%3*.15),p=new Lt(qh,e);p.scale.y=d,p.position.set(o+Math.cos(h)*u,.22,c+Math.sin(h)*u),p.rotation.set(Math.sin(h)*.35,0,-Math.cos(h)*.35),p.castShadow=!0,i.add(p);const g=new Lt(cg,n),v=t===1?.45:t===2?.75:1.05;g.scale.setScalar(v),g.position.set(o+Math.cos(h)*(u+d*.35),.22+d,c+Math.sin(h)*(u+d*.35)),g.rotation.set(-.6,h+Math.PI/2,0),g.castShadow=!0,i.add(g)}})}function fg(i,t){if(t===0)return $h(i,4864554);const e=[[-.6,-.5],[.6,-.5],[-.6,.5],[.6,.5]],n=Y(t===3?3115578:6271050,{wind:.1}),s=Y(13625512);e.forEach(([r,a])=>{if(t===1){[-1,1].forEach(l=>{const h=new Lt(hg,n);h.scale.set(1,.4,.7),h.position.set(r+l*.06,.28,a),i.add(h)});return}const o=t===2?4:7,c=t===2?.2:.34;for(let l=0;l<o;l++){const h=l/o*Math.PI*2+r*3,u=new Lt(ug,n);u.scale.set(c*.55,.03,c);const d=t===3?.9+l%2*.25:.6,p=new ne;if(p.position.set(r,.24,a),p.rotation.set(0,h,0),i.add(p),u.position.set(0,Math.sin(d)*c,Math.cos(d)*c*.9),u.rotation.x=-d,u.castShadow=!0,p.add(u),t===3){const g=new Lt(new $e(.02,.01,c*1.6),s);g.position.copy(u.position).add(new R(0,.02,0)),g.rotation.x=-d,p.add(g)}}if(t===3){const l=new Lt(new Ie(.09,7,5),Y(8372314));l.position.set(r,.36,a),i.add(l)}})}function _l(i,t){const e=new ne;return i==="raumuong"?dg(e,t):fg(e,t),e}const Zs={untilled:9083482,dry:10121288,wet:6176808};class pg{constructor(t,e=160){this.scene=t,this.ps=[],this.m4=new Xt,this.q=new Xn,this.sc=new R,this.pops=[],this.max=e,this.im=new ii(new di(1,0),new gn({roughness:.6,flatShading:!0}),e),this.im.count=0,this.im.frustumCulled=!1,this.im.instanceColor=new Gr(new Float32Array(e*3),3),t.add(this.im)}burst(t,e,n,s={}){for(let r=0;r<e&&this.ps.length<this.max;r++){const a=Math.random()*Math.PI*2,o=(s.speed??1.5)*(.5+Math.random()*.7),c=s.spread??1;this.ps.push({p:t.clone().add(new R((Math.random()-.5)*.3*c,0,(Math.random()-.5)*.3*c)),v:new R(Math.cos(a)*o*c,(s.up??2)*(.6+Math.random()*.6),Math.sin(a)*o*c),life:0,max:(s.life??.8)*(.7+Math.random()*.6),s:(s.size??.05)*(.7+Math.random()*.6),g:s.grav??9,c:new Nt(n).offsetHSL(0,0,(Math.random()-.5)*.1)})}}pour(t,e){for(let n=0;n<3&&this.ps.length<this.max;n++)this.ps.push({p:t.clone(),v:e.clone().multiplyScalar(1.2+Math.random()*.5).add(new R((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)),life:0,max:.6,s:.04,g:9,c:new Nt(8048880)})}popItem(t,e,n){t.position.copy(e),this.scene.add(t),this.pops.push({o:t,t:0,from:e.clone(),to:n})}update(t){for(let e=this.ps.length-1;e>=0;e--){const n=this.ps[e];if(n.life+=t,n.life>n.max||n.p.y<.02){this.ps.splice(e,1);continue}n.v.y-=n.g*t,n.p.addScaledVector(n.v,t)}this.ps.forEach((e,n)=>{const s=1-e.life/e.max;this.sc.setScalar(e.s*(.4+s*.6)),this.m4.compose(e.p,this.q,this.sc),this.im.setMatrixAt(n,this.m4),this.im.setColorAt(n,e.c)}),this.im.count=this.ps.length,this.im.instanceMatrix.needsUpdate=!0,this.im.instanceColor&&(this.im.instanceColor.needsUpdate=!0);for(let e=this.pops.length-1;e>=0;e--){const n=this.pops[e];n.t+=t;const s=n.t;if(s<.45){const r=s/.45;n.o.position.copy(n.from).add(new R(0,Math.sin(r*Math.PI)*1.1+r*.5,0)),n.o.scale.setScalar(.6+Math.sin(r*Math.PI)*.6),n.o.rotation.y+=t*8}else{const r=Math.min(1,(s-.45)/.35);n.o.position.lerpVectors(n.from.clone().setY(n.from.y+.5),n.to(),r),n.o.scale.setScalar(1-r*.8)}s>.8&&(this.scene.remove(n.o),this.pops.splice(e,1))}}}const mg=[0,2,5,7,9],gg=i=>440*Math.pow(2,(i-69)/12);class _g{constructor(){this.ctx=null,this.g={},this.vol={music:.6,ambient:.7,sfx:.8,ui:.7},this.muted=!1,this.hour=8,this.nextNote=0,this.stp=0,this.phrase=[],this.windSrc=null,this.amb=0,this.timer=0,this.paused=!1}unlock(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),["music","ambient","sfx","ui"].forEach(a=>{const o=e.createGain();o.connect(n),this.g[a]=o}),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const s=this.noise.getChannelData(0);for(let a=0;a<s.length;a++)s[a]=Math.random()*2-1;this.windG=e.createGain(),this.windG.gain.value=0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=420,this.windG.connect(r),r.connect(this.g.ambient),this.windSrc=e.createBufferSource(),this.windSrc.buffer=this.noise,this.windSrc.loop=!0,this.windSrc.connect(this.windG),this.windSrc.start(),this.apply(),this.nextNote=e.currentTime+.3,this.timer=window.setInterval(()=>this.schedule(),90)}set(t,e){Object.assign(this.vol,t),e!=null&&(this.muted=e),this.apply()}apply(){this.ctx&&Object.keys(this.g).forEach(t=>this.g[t].gain.setTargetAtTime(this.muted?0:this.vol[t]*(t==="music"?.45:t==="ambient"?.5:.7),this.ctx.currentTime,.05))}pause(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}get t(){return this.ctx.currentTime}tranh(t,e,n=1.6,s=.25,r="music"){const a=this.ctx,o=a.createOscillator(),c=a.createOscillator(),l=a.createGain(),h=a.createBiquadFilter();o.type="triangle",c.type="sawtooth",o.frequency.setValueAtTime(t,e),c.frequency.setValueAtTime(t,e),Math.random()<.35&&(o.frequency.setValueAtTime(t,e+.25),o.frequency.linearRampToValueAtTime(t*1.06,e+.45),o.frequency.linearRampToValueAtTime(t,e+.7),c.frequency.setValueAtTime(t,e+.25),c.frequency.linearRampToValueAtTime(t*1.06,e+.45),c.frequency.linearRampToValueAtTime(t,e+.7)),h.type="lowpass",h.frequency.setValueAtTime(t*8,e),h.frequency.exponentialRampToValueAtTime(t*1.5,e+n);const u=a.createGain();u.gain.value=.18,c.connect(u),u.connect(h),o.connect(h),h.connect(l),l.connect(this.g[r]),l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(s,e+.005),l.gain.exponentialRampToValueAtTime(8e-4,e+n),o.start(e),c.start(e),o.stop(e+n+.05),c.stop(e+n+.05)}sao(t,e,n,s=.12){const r=this.ctx,a=r.createOscillator(),o=r.createGain(),c=r.createOscillator(),l=r.createGain();a.type="sine",a.frequency.setValueAtTime(t*.97,e),a.frequency.linearRampToValueAtTime(t,e+.08),c.frequency.value=5.2,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(t*.012,e+n*.6),c.connect(l),l.connect(a.frequency);const h=r.createBufferSource();h.buffer=this.noise;const u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=t*2,u.Q.value=3;const d=r.createGain();d.gain.value=.25,h.connect(u),u.connect(d),d.connect(o),a.connect(o),o.connect(this.g.music),o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(s,e+.09),o.gain.setValueAtTime(s*.9,e+n*.8),o.gain.linearRampToValueAtTime(0,e+n),a.start(e),c.start(e),h.start(e,Math.random()),a.stop(e+n+.05),c.stop(e+n+.05),h.stop(e+n+.05)}bass(t,e){const n=this.ctx,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.value=t,s.connect(r),r.connect(this.g.music),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.18,e+.02),r.gain.exponentialRampToValueAtTime(.001,e+1.8),s.start(e),s.stop(e+1.9)}note(t,e=62){const n=Math.floor(t/5),s=(t%5+5)%5;return gg(e+n*12+mg[s])}schedule(){if(!this.ctx||this.paused)return;const t=this.ctx,e=this.hour<5.5||this.hour>=19,n=e?.62:.46;for(;this.nextNote<t.currentTime+.4;){const s=this.nextNote,r=Math.floor(this.stp/8),a=this.stp%8;if(a===0){if(!this.phrase.length||r%2===0){let c=5+Math.floor(Math.random()*3);this.phrase=Array.from({length:8},(l,h)=>(c+=[-1,0,1,1,-1,2,-2][Math.floor(Math.random()*7)],c=Math.max(2,Math.min(10,c)),h%2&&Math.random()<.3?-99:c)),this.phrase[7]=-99}this.bass(this.note([0,3,4,0][r%4],38),s)}const o=this.phrase[a];o!==-99&&(r%8>=4&&!e?this.sao(this.note(o+2),s,n*1.8):this.tranh(this.note(o),s,1.8,e?.13:.18),a%4===0&&this.tranh(this.note(o-5),s+n/2,1.2,.08)),this.nextNote+=n*(a%2?.9:1.1),this.stp++,r%16===15&&a===7&&(this.nextNote+=n*4)}this.ambience()}ambience(){const t=this.ctx,e=this.hour,n=e<5||e>=19;this.amb-=.09,this.windG.gain.setTargetAtTime(n?.04:.09,t.currentTime,1.5),!(this.amb>0)&&(this.amb=.6+Math.random()*1.6,n?(this.cricket(),Math.random()<.45&&this.frog()):(Math.random()<.7&&this.bird(),e>5&&e<6.6&&Math.random()<.25&&this.rooster()))}bird(){const t=this.ctx,e=t.currentTime+Math.random()*.3,n=2+Math.floor(Math.random()*4),s=2400+Math.random()*1800;for(let r=0;r<n;r++){const a=t.createOscillator(),o=t.createGain(),c=e+r*.11;a.type="sine",a.frequency.setValueAtTime(s,c),a.frequency.exponentialRampToValueAtTime(s*(Math.random()<.5?1.5:.7),c+.08),o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.05,c+.01),o.gain.linearRampToValueAtTime(0,c+.09),a.connect(o),o.connect(this.g.ambient),a.start(c),a.stop(c+.1)}}rooster(){const t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createBiquadFilter();n.type="sawtooth",r.type="bandpass",r.frequency.value=1200,r.Q.value=2,[[0,500],[.15,760],[.5,820],[.9,620],[1.2,450]].forEach(([a,o])=>n.frequency.linearRampToValueAtTime(o,e+a)),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.06,e+.05),s.gain.setValueAtTime(.06,e+1),s.gain.linearRampToValueAtTime(0,e+1.25),n.connect(r),r.connect(s),s.connect(this.g.ambient),n.start(e),n.stop(e+1.3)}cricket(){const t=this.ctx,e=t.currentTime;for(let n=0;n<3;n++){const s=t.createOscillator(),r=t.createGain(),a=e+n*.32;s.frequency.value=4300+Math.random()*200;for(let o=0;o<6;o++)r.gain.setValueAtTime(.025,a+o*.035),r.gain.setValueAtTime(0,a+o*.035+.02);s.connect(r),r.connect(this.g.ambient),r.gain.value=0,s.start(a),s.stop(a+.25)}}frog(){const t=this.ctx,e=t.currentTime+Math.random()*.4;for(let n=0;n<2;n++){const s=t.createOscillator(),r=t.createGain(),a=e+n*.22;s.type="square",s.frequency.setValueAtTime(150,a),s.frequency.exponentialRampToValueAtTime(90,a+.12);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=600,r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.05,a+.01),r.gain.exponentialRampToValueAtTime(.001,a+.15),s.connect(o),o.connect(r),r.connect(this.g.ambient),s.start(a),s.stop(a+.16)}}nz(t,e,n,s,r="bandpass",a="sfx",o=0){if(!this.ctx)return;const c=this.ctx,l=c.currentTime+o,h=c.createBufferSource(),u=c.createBiquadFilter(),d=c.createGain();h.buffer=this.noise,u.type=r,u.frequency.value=e,u.Q.value=n,d.gain.setValueAtTime(s,l),d.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(u),u.connect(d),d.connect(this.g[a]),h.start(l,Math.random()),h.stop(l+t+.02)}tone(t,e,n,s,r="sine",a="sfx",o=0){if(!this.ctx)return;const c=this.ctx,l=c.currentTime+o,h=c.createOscillator(),u=c.createGain();h.type=r,h.frequency.setValueAtTime(t,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,e),l+n),u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(s,l+.008),u.gain.exponentialRampToValueAtTime(.001,l+n),h.connect(u),u.connect(this.g[a]),h.start(l),h.stop(l+n+.02)}step(t,e){this.nz(.09,t==="brick"?2200:t==="dirt"?900:1500,1.2,e?.16:.1)}land(){this.nz(.15,500,.8,.22,"lowpass")}jump(){this.tone(300,520,.12,.06,"sine")}hoe(){this.nz(.18,400,.9,.35,"lowpass"),this.tone(160,70,.15,.15,"triangle"),this.nz(.12,700,1,.15,"bandpass","sfx",.25)}seed(){for(let t=0;t<5;t++)this.nz(.03,3500+Math.random()*1500,4,.12,"bandpass","sfx",t*.05)}water(){this.nz(.9,1800,.7,.18,"highpass");for(let t=0;t<6;t++)this.tone(900+Math.random()*900,400,.06,.04,"sine","sfx",.1+t*.12)}harvest(){this.nz(.08,1200,1.5,.25),this.tone(523,784,.12,.1,"triangle","sfx",.05),this.tone(784,1046,.18,.1,"triangle","sfx",.15)}pickup(){this.tone(880,1320,.1,.08,"triangle")}place(){this.tone(220,110,.12,.15,"triangle"),this.nz(.06,800,1,.12)}coin(){this.tone(1318,1318,.08,.08,"square","sfx"),this.tone(1760,1760,.22,.07,"square","sfx",.07)}grow(){this.tone(660,990,.25,.05,"sine")}npc(){if(this.ctx)for(let t=0;t<4;t++)this.tone(260+Math.random()*90,220+Math.random()*60,.09,.07,"triangle","sfx",t*.1)}click(){this.tone(900,700,.05,.08,"triangle","ui")}hover(){this.tone(1200,1100,.03,.03,"sine","ui")}open(){this.tone(500,900,.12,.07,"triangle","ui")}close(){this.tone(800,450,.1,.06,"triangle","ui")}error(){this.tone(220,180,.18,.08,"square","ui")}chime(){[0,2,4].forEach((t,e)=>this.ctx&&this.tranh(this.note(t+5),this.t+e*.12,1.2,.18,"sfx"))}}const ee=new _g,Di=i=>i[Math.floor(Math.random()*i.length)];function vl(i){const t=Hi(i.time),e=i.flags;return e.talk?e.harvest&&!e.talkHarvest?(e.talkHarvest=i.time,"Hồi sáng ngoại thấy con cắt rau rồi đó nghen. Rau tự tay trồng ăn ngọt lắm, bữa nay ngoại xào tỏi cho con ăn."):e.plant&&!e.talkPlant?(e.talkPlant=i.time,"Con gieo hạt rồi hả? Nhớ tưới nước cho đất ẩm, cây mới chịu lớn. Đừng lo, cây của con hổng có héo đâu, ngoại coi chừng cho."):t<9?Di(["Dậy sớm dữ ta! Sáng sớm tưới rau là mát nhứt đó con.","Ngoại quét sân xong là đi chợ. Con muốn ăn gì hông?","Nghe tiếng gà gáy chưa? Ở quê sáng nào cũng vậy đó con."]):t<13?Di(["Trưa nắng gắt, con vô hiên ngồi cho mát, đội nón vô nghen.","Ngoại đang nấu canh chua cá lóc nè, chút nữa ăn cơm.","Hồi nhỏ má con cũng hay trốn ngủ trưa ra ao sen chơi đó."]):t<18?Di(["Chiều mát rồi, ra vườn coi rau có lớn chưa con.","Con thấy quê buồn hông? Ở lâu rồi con sẽ thương lắm cho coi.","Cây xoài đó ông ngoại con trồng hồi má con mới sinh ra."]):t<21?Di(["Cháu ơi! Vô ăn cơm, để nguội hết bây giờ!","Tối rồi, đom đóm bay ngoài ao sen kìa, đẹp lắm.","Ăn cơm xong ngoại kể chuyện hồi xưa cho nghe nghen."]):Di(["Khuya rồi, đi ngủ sớm mai còn dậy tưới rau con.","Nghe tiếng dế kêu hông? Ngủ ngon nghen cháu."]):"Trời ơi, cháu ngoại của ngoại về rồi nè! Đi đường xa có mệt hông con? Vô đây ngoại coi coi, ốm nhom hà."}const vg=i=>Di([`Ui, ${i} con trồng hả? Ngoại cảm ơn cháu nghen, để ngoại nấu canh.`,`Cháu ngoại giỏi quá! ${i} tươi rói luôn nè.`,"Thiệt hả con? Ngoại vui lắm đó. Để dành nấu cho con ăn."]),xg=()=>"Hết hạt giống rồi hả? Ngoại còn mấy gói trong nhà kho nè, con cầm đi gieo tiếp nghen.",xl=["Hồi xưa nhà mình nghèo lắm, ông ngoại con chèo xuồng đi bán trái cây ngoài chợ nổi, sáng nào cũng đi từ lúc gà gáy.","Cái lu nước đầu hè đó là của bà cố để lại. Nước mưa hứng trong lu uống ngọt lắm con.","Ao sen này hồi trước là ao cá. Má con hồi nhỏ hay ra đây hái gương sen, té xuống ao hoài.","Ngoại hay để dành mấy hột giống ngon nhứt mỗi mùa. Mai mốt ngoại chỉ con cách giữ giống nghen."],Mg="ngoai-oi",fi="saves",ec="slot1",nc="ngoai-oi-slot1";function ic(){return new Promise((i,t)=>{try{const e=indexedDB.open(Mg,1);e.onupgradeneeded=()=>e.result.createObjectStore(fi),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}catch(e){t(e)}})}async function yg(i){i.savedAt=Date.now();const t=JSON.parse(JSON.stringify(i));try{localStorage.setItem(nc,JSON.stringify(t))}catch{}try{const e=await ic();return await new Promise((n,s)=>{const r=e.transaction(fi,"readwrite");r.objectStore(fi).put(t,ec),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)}),e.close(),!0}catch{return!1}}async function Sg(){let i=null,t=null;try{const n=await ic();i=await new Promise(s=>{const a=n.transaction(fi,"readonly").objectStore(fi).get(ec);a.onsuccess=()=>s(a.result||null),a.onerror=()=>s(null)}),n.close()}catch{}try{const n=localStorage.getItem(nc);n&&(t=JSON.parse(n))}catch{}const e=[i,t].filter(Boolean).sort((n,s)=>(s.savedAt||0)-(n.savedAt||0))[0]||null;return e&&e.version===1?e:null}async function Eg(){try{localStorage.removeItem(nc)}catch{}try{const i=await ic();await new Promise(t=>{const e=i.transaction(fi,"readwrite");e.objectStore(fi).delete(ec),e.oncomplete=()=>t(),e.onerror=()=>t()}),i.close()}catch{}}const Js={low:0,medium:1024,high:2048},Ml={low:1,medium:1.5,high:2};class bg{constructor(t,e,n){this.quality=e,this.scene=new Wo,this.cam=new ze(55,1,.1,220),this.grandma=new rg,this.s=null,this.mode="title",this.running=!0,this.runBtn=!1,this.elapsed=0,this.clock=new Bh,this.hiddenAt=0,this.plotMats=[],this.crops=[],this.ridges=[],this.bounce=[0,0,0,0,0,0],this.near=null,this.saveT=0,this.saveSoonT=-1,this.hudT=0,this.sparkT=0,this.fpsT=0,this.fpsN=0,this.fps=0,this.v=new R,this.ui=n,this.renderer=new Vo({canvas:t,antialias:e!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=Oe,this.renderer.shadowMap.type=Mo,this.renderer.setPixelRatio(Math.min(devicePixelRatio,Ml[e])),this.renderer.shadowMap.enabled=Js[e]>0,this.world=new Q0(e),this.scene.add(this.world.group),this.env=new tg(this.scene,this.world.smokeAt,Js[e]),this.critters=new eg(this.scene,this.world.flowerSpots,this.world.roofPerches,e==="low"?4:8),this.fx=new pg(this.scene),this.scene.add(this.grandma.av.root),this.rig=new ng(this.cam),this.rig.occluders=this.world.occluders,this.input=new F0(t,document.getElementById("joy"),document.querySelector("#joy .knob")),this.world.plotMeshes.forEach((s,r)=>{const a=new gn({color:Zs.untilled,roughness:1,flatShading:!0});s.material=a,this.plotMats.push(a),this.crops.push(null);const o=new ne,c=new gn({color:8016438,roughness:1,flatShading:!0});[-.75,0,.75].forEach(l=>{const h=new Lt(new $e(2.3,.09,.32),c);h.position.set(0,.24,l),h.receiveShadow=!0,o.add(h)}),o.visible=!1,this.world.plotAnchors[r].add(o),this.ridges.push(o)}),Be.on("plot",(s,r)=>{this.refreshPlot(s.id),r!=="water"&&(this.bounce[s.id]=1)}),Be.on("plotGrow",s=>{this.refreshPlot(s.id),this.bounce[s.id]=1,this.mode==="play"&&this.player&&this.player.pos.distanceTo(this.world.plotAnchors[s.id].position)<14&&(ee.grow(),s.stage>=bn&&this.ui.toast(`${wn[s.crop].name} chín rồi, hái được rồi nè!`,"good"))}),addEventListener("resize",()=>this.resize()),this.resize(),document.addEventListener("visibilitychange",()=>this.visibility()),window.__game=this,requestAnimationFrame(()=>this.frame())}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e),this.cam.aspect=t/e,this.cam.fov=t<e?68:55,this.cam.updateProjectionMatrix()}visibility(){if(document.hidden)this.running=!1,this.hiddenAt=performance.now(),ee.pause(!0),this.s&&this.save();else if(!this.running){this.running=!0;const t=(performance.now()-this.hiddenAt)/1e3;this.s&&t>1&&this.farming.tick(t),this.clock.getDelta(),ee.pause(!1),requestAnimationFrame(()=>this.frame())}}start(t,e){if(this.s=t,this.inv=new ag(t),this.farming=new og(t,this.inv),this.player=new sg(t.look),this.scene.add(this.player.av.root),this.player.pos.set(t.player.x,0,t.player.z),this.player.ry=t.player.ry,this.rig.yaw=t.player.ry-Math.PI,this.cam.position.set(t.player.x,4,t.player.z+8),!e){const n=(Date.now()-t.savedAt)/1e3,s=t.plots.map(r=>r.stage).join();n>3&&this.farming.tick(n),s!==t.plots.map(r=>r.stage).join()&&setTimeout(()=>this.ui.toast("Lúc con đi vắng, rau ngoài vườn đã lớn thêm đó!","good"),1200)}this.grandma.greet=!t.flags.talk,this.grandma.greet&&(this.grandma.pos.set(0,0,19),this.grandma.ry=0),this.ui.mountHUD(t,this),this.applySettings(),t.plots.forEach(n=>this.refreshPlot(n.id)),this.mode="play",this.ui.toast(e?"Đi về phía ngoại nha — bấm E để chào!":`Chào mừng ${t.look.name} quay lại!`),e&&this.save()}applySettings(){if(!this.s)return;const t=this.s.settings,e=t.quality;ee.set({music:t.music,ambient:t.ambient,sfx:t.sfx,ui:t.ui},t.muted),this.rig.sens=t.sens,this.renderer.setPixelRatio(Math.min(devicePixelRatio,Ml[e])),this.resize();const n=Js[e]>0;n!==this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{const r=s.material;r&&(Array.isArray(r)?r:[r]).forEach(a=>a.needsUpdate=!0)})),this.env.setShadows(Js[e]),this.ui.fpsEl.style.display=t.fps?"block":"none"}save(){return this.s?(this.s.player={x:this.player.pos.x,z:this.player.pos.z,ry:this.player.ry},this.saveT=0,this.saveSoonT=-1,yg(this.s)):Promise.resolve(!1)}saveSoon(){this.saveSoonT=1.5}flag(t){this.s&&this.s.flags[t]==null&&(this.s.flags[t]=this.s.time)}restart(){sessionStorage.setItem("ngoai-new","1"),Eg().then(()=>location.reload())}refreshPlot(t){if(!this.s)return;const e=this.s.plots[t],n=this.plotMats[t],s=this.world.plotAnchors[t];n.color.setHex(e.tilled?e.wet?Zs.wet:Zs.dry:Zs.untilled),n.roughness=e.wet?.55:1,this.ridges[t].visible=e.tilled,this.ridges[t].children[0].material&&this.ridges[t].children[0].material.color.setHex(e.wet?5125152:8016438);const r=e.crop?e.crop+e.stage:"";if(this.crops[t]?.userData.key!==r&&(this.crops[t]&&s.remove(this.crops[t]),this.crops[t]=null,e.crop)){const a=_l(e.crop,e.stage);a.userData.key=r,s.add(a),this.crops[t]=a}}findNear(){const t=this.player.pos,e=this.grandma;if(this.player.seat)return{kind:"stand",label:"Đứng dậy (đi để đứng)"};if(e.visible&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<2.4)return{kind:"npc",label:e.greet?"Chào ngoại":"Nói chuyện với ngoại"};const n=Math.sin(this.player.ry),s=Math.cos(this.player.ry);let r=null,a=1e9;for(const o of this.world.items){const c=o.x-t.x,l=o.z-t.z,h=Math.hypot(c,l);if(h>o.r)continue;const u=h-(h>.01?(c*n+l*s)/h:1)*.6;u<a&&(a=u,r=o)}return r?r.kind==="plot"?{kind:"plot",label:this.farming.actionFor(this.s.plots[r.data]).label,it:r}:{kind:r.kind,label:r.label||"",it:r}:null}selectTool(t){const e=this.s.inv.findIndex(n=>n.id===t);e>=0&&e<Xr&&this.s.hotbar!==e&&(this.s.hotbar=e,this.ui.renderHotbar())}face(t,e){this.player.ry=Math.atan2(t-this.player.pos.x,e-this.player.pos.z)}interact(){const t=this.near;if(!t||this.player.busy())return;const e=this.s;if(t.kind==="npc")return this.talk();const n=t.it;if(t.kind==="plot"){const s=e.plots[n.data],r=this.farming.actionFor(s),a=this.world.plotAnchors[n.data].position;this.face(a.x,a.z);const o=a.clone().setY(.3);if(r.kind==="till")this.selectTool("hoe"),this.player.doAction("till",1,"hoe",()=>{this.farming.till(s),ee.hoe(),this.fx.burst(o,14,9068608,{up:2.5,speed:1.2,size:.07}),this.flag("till"),this.saveSoon()});else if(r.kind==="plant"){const c=wn[r.crop].seedItem;this.selectTool(c),this.player.doAction("plant",.85,"seeds",()=>{this.farming.plant(s,r.crop)&&(ee.seed(),this.fx.burst(o,10,14201978,{up:1.5,speed:.8,size:.04}),this.flag("plant"),this.saveSoon())})}else r.kind==="water"?(this.selectTool("can"),this.player.doAction("water",1.3,"can",()=>{this.farming.water(s),ee.water(),this.flag("water"),this.saveSoon()})):r.kind==="harvest"?(this.selectTool("hand"),this.player.doAction("harvest",.85,"veg",()=>{const c=s.crop,l=this.farming.harvest(s);if(!l){this.ui.toast("Kho đồ đầy rồi, bán bớt nha!","bad"),ee.error();return}ee.harvest(),this.fx.burst(o.clone().setY(.6),12,8376410,{up:2.4,speed:1,size:.05}),this.fx.burst(o.clone().setY(.8),8,16773792,{up:1.5,speed:.6,size:.04,grav:1});const h=_l(c,bn);h.scale.setScalar(.5),this.fx.popItem(h,o.clone().setY(.4),()=>this.player.pos.clone().setY(1)),this.floatAt(o.clone().setY(1.4),`+${l} ${ve[wn[c].produceItem].name}`),setTimeout(()=>ee.pickup(),700),this.flag("harvest"),e.flags.harvestN=(e.flags.harvestN||0)+1,this.saveSoon()})):this.ui.toast(r.label);return}switch(t.kind){case"shop":this.ui.toggleShop();break;case"sit":this.player.sit(n.data),this.flag("sit"),this.ui.toast("Gió ngoài hiên mát rượi…"),ee.place();break;case"jar":this.selectTool("can"),this.player.doAction("water",.8,"can",()=>{ee.water(),this.ui.toast("Múc nước lu đổ đầy bình tưới rồi!")});break;case"door":this.ui.toast("Ngoại đang dọn trong nhà — bản sau mới vô được nghen!");break;case"pond":this.ui.toast(Hi(e.time)>=18.5?"Đom đóm bay lập lòe trên mặt ao sen…":"Sen nở thơm ngát. Có con cá rô vừa quẫy nước!");break;case"build":this.ui.toast("Khu xây dựng sẽ mở ở bản 0.3 nha!");break}}floatAt(t,e){const n=t.clone().project(this.cam);this.ui.float((n.x+1)/2*innerWidth,(1-n.y)/2*innerHeight,e)}talk(){const t=this.s,e=this.grandma,n=!t.flags.talk;e.talking=!0,this.face(e.pos.x,e.pos.z),n&&this.player.doAction("wave",1.2,null);const s=vl(t);n&&(this.flag("talk"),e.greet=!1,t.friend=Math.min(100,t.friend+5)),this.showTalk(s),this.saveSoon()}showTalk(t){const e=this.s,n=ls(e.time),s=e.inv.find(r=>r.id&&ve[r.id].kind==="produce");this.ui.dialog(t,[{k:"chat",t:"Ngoại kể chuyện đi",icon:"chat"},{k:"gift",t:s?`Tặng ngoại ${ve[s.id].name.toLowerCase()}`:"Tặng rau (chưa có rau)",icon:"gift",off:!s},{k:"seed",t:e.seedDay===n?"Đã xin hạt hôm nay rồi":"Xin ngoại hạt giống",icon:"seed_raumuong",off:e.seedDay===n},{k:"bye",t:"Dạ, con đi chơi nghen",icon:"wave"}],r=>this.pick(r))}pick(t){const e=this.s,n=ls(e.time);if(t==="bye")return this.endTalk();if(t==="chat"){const s=e.talks%2?vl(e):xl[Math.floor(e.talks/2)%xl.length];e.talks++,e.flags["chat"+n]==null&&(e.flags["chat"+n]=e.time,e.friend=Math.min(100,e.friend+2)),this.showTalk(s)}if(t==="gift"){const s=e.inv.find(a=>a.id&&ve[a.id].kind==="produce");if(!s)return;const r=s.id;this.inv.remove(r,1),e.friend=Math.min(100,e.friend+(e.giftDay===n?2:10)),e.giftDay=n,this.flag("gift"),ee.chime(),this.showTalk(vg(ve[r].name.toLowerCase()))}if(t==="seed"){if(e.seedDay===n)return;e.seedDay=n,this.inv.add("seed_raumuong",3),this.inv.add("seed_caixanh",2),ee.pickup(),this.ui.toast("Ngoại cho 3 hạt rau muống + 2 hạt cải","good"),this.showTalk(xg())}this.ui.renderHUD(),this.saveSoon()}endTalk(){this.ui.closeDialog(),this.grandma.talking=!1,this.saveSoon()}surface(){const t=this.player.pos;return t.x>-8&&t.x<8&&t.z>-9&&t.z<0?"brick":Math.abs(t.x)<1.6&&t.z>-2||t.x>8&&t.x<14.5&&t.z>2&&t.z<12?"dirt":"grass"}frame(){if(!this.running)return;requestAnimationFrame(()=>this.frame());const t=Math.min(this.clock.getDelta(),.05);if(this.elapsed+=t,Qo.value=this.elapsed,this.fpsN++,this.fpsT+=t,this.fpsT>.5&&(this.fps=Math.round(this.fpsN/this.fpsT),this.fpsN=0,this.fpsT=0,this.ui.fpsEl&&(this.ui.fpsEl.textContent=this.fps+" FPS")),this.mode==="title"||!this.s){const h=this.elapsed*.05;this.cam.position.set(Math.sin(h)*30,13,Math.cos(h)*30+2),this.cam.lookAt(0,1.5,-2);const u=16.6*60;this.env.update(t,u,new R,this.elapsed),this.critters.update(t,this.elapsed,0,new R(99,0,99)),this.grandma.update(t,8*60,new R(99,0,99),this.world.colliders),this.renderer.render(this.scene,this.cam),this.input.endFrame();return}const e=this.s,n=this.input,s=this.ui;if(e.time+=t*ga/I0,ee.hour=Hi(e.time),this.farming.tick(t),n.hit("Escape")&&(s.panel==="dialog"?this.endTalk():s.panel?s.closeAll():s.toggleMenu()),s.panel==="dialog"){(n.hit("KeyE")||n.hit("Enter"))&&s.dialogKey(-1);for(let h=0;h<4;h++)n.hit("Digit"+(h+1))&&s.dialogKey(h)}else if(n.hit("KeyI")&&(s.panel===null||s.panel==="inv")&&s.toggleInv(),!s.panel){for(let h=0;h<Xr;h++)n.hit("Digit"+(h+1))&&(e.hotbar=h,s.renderHotbar());n.hit("KeyV")&&(this.rig.toggle(),s.toast(this.rig.pov?"Góc nhìn thứ nhất":"Góc nhìn thứ ba")),n.hit("KeyB")&&s.toast("Chế độ xây dựng sẽ có ở bản 0.3 — khu đất đã chừa sẵn cạnh vườn!"),n.hit("KeyE")&&this.interact()}const r=!!s.panel,a=r?{x:0,z:0}:n.moveVec(),o=!r&&n.hit("Space");r||this.rig.input(n.look.x,n.look.y,n.zoom),o&&!this.player.air&&!this.player.busy()&&!this.player.seat&&ee.jump();const c=this.player.air;if(this.player.update(t,a,n.running(this.runBtn),o,this.rig.basis(),this.world.colliders,this.rig.pov?this.rig.yaw:null,h=>ee.step(this.surface(),h)),c&&!this.player.air&&ee.land(),this.player.action==="water"&&this.player.at>.15&&this.player.at<.9){this.player.av.handR.getWorldPosition(this.v);const h=new R(Math.sin(this.player.ry)*.8,-.4,Math.cos(this.player.ry)*.8);this.fx.pour(this.v.add(h.clone().multiplyScalar(.35)),h)}const l=this.grandma;l.update(t,e.time,this.player.pos,this.world.colliders),l.greet&&!l.talking&&!s.panel&&Math.hypot(l.pos.x-this.player.pos.x,l.pos.z-this.player.pos.z)<3&&l.speed===0&&this.talk(),l.talking&&s.panel!=="dialog"&&(l.talking=!1),this.near=r?null:this.findNear(),s.prompt(this.near?.label||null),this.env.update(t,e.time,this.player.pos,this.elapsed),this.critters.update(t,this.elapsed,this.env.night,this.player.pos),this.fx.update(t),this.bounce.forEach((h,u)=>{if(h<=0||!this.crops[u])return;this.bounce[u]=Math.max(0,h-t*2.2);const d=this.bounce[u];this.crops[u].scale.set(1+Math.sin(d*9)*.12*d,1+Math.sin(d*9+1)*.25*d,1+Math.sin(d*9)*.12*d)}),this.sparkT-=t,this.sparkT<0&&(this.sparkT=.9,e.plots.forEach(h=>{h.crop&&h.stage>=bn&&this.fx.burst(this.world.plotAnchors[h.id].position.clone().setY(.9),2,16773792,{up:.6,speed:.5,grav:-.4,size:.035,life:1.2,spread:3})})),this.rig.update(t,this.player.pos,1.42),this.player.av.root.visible=!this.rig.pov,this.hudT-=t,this.hudT<0&&(this.hudT=.5,s.renderHUD()),this.saveT+=t,this.saveT>30&&this.save(),this.saveSoonT>0&&(this.saveSoonT-=t,this.saveSoonT<=0&&this.save()),this.renderer.render(this.scene,this.cam),n.endFrame()}}const ae=(i,t="0 0 48 48")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,bt='stroke="#4a3220" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"',yl={hand:ae(`<path ${bt} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),hoe:ae(`<path ${bt} fill="#c98a4a" d="M33 6l4 3-22 31-4-3z"/><path ${bt} fill="#a8b0b8" d="M30 4l12 4-3 7-12-4z"/>`),can:ae(`<path ${bt} fill="#3fb0a4" d="M10 18h22v20a4 4 0 01-4 4H14a4 4 0 01-4-4z"/><path ${bt} fill="none" d="M14 18c0-6 14-6 14 0"/><path ${bt} fill="#3fb0a4" d="M32 24l10-8 2 3-10 10z"/><circle cx="43" cy="14" r="1.6" fill="#7ad0f0"/><circle cx="46" cy="18" r="1.4" fill="#7ad0f0"/>`),seed_raumuong:ae(`<path ${bt} fill="#f2dcae" d="M10 12h28l-2 30H12z"/><path ${bt} fill="#e2c48e" d="M10 12l4-5h20l4 5"/><path ${bt} fill="#5fb04a" d="M24 36V24m0 0c-6 0-8-5-8-5s5-2 8 5zm0 0c6 0 8-6 8-6s-6-1-8 6z"/>`),seed_caixanh:ae(`<path ${bt} fill="#d8ecd0" d="M10 12h28l-2 30H12z"/><path ${bt} fill="#bcd8b0" d="M10 12l4-5h20l4 5"/><ellipse ${bt} cx="24" cy="28" rx="7" ry="8" fill="#3f9a3a"/><path stroke="#cfe8a8" stroke-width="2" d="M24 21v14"/>`),raumuong:ae(`<g ${bt}><path fill="#9fd06a" d="M18 44l4-22m4 22l-1-24m6 24l-4-22"/><path fill="#3f9a3a" d="M22 22l-10-10 12 2zM25 20l2-14 6 12zM28 22l12-8-4 12z"/></g><path ${bt} fill="#e8433a" d="M16 34h18v4H16z"/>`),caixanh:ae(`<g ${bt}><path fill="#2f8a3a" d="M24 44c-10 0-14-10-12-22 4 2 8 8 12 22zM24 44c10 0 14-10 12-22-4 2-8 8-12 22z"/><path fill="#5fb04a" d="M24 44c-6-6-6-24 0-36 6 12 6 30 0 36z"/></g><path stroke="#dff0c0" stroke-width="2" d="M24 14v28"/>`),coin:ae(`<circle ${bt} cx="24" cy="24" r="17" fill="#f2c84a"/><circle cx="24" cy="24" r="11" fill="none" stroke="#c9952a" stroke-width="2.4"/><path stroke="#c9952a" stroke-width="3" d="M24 17v14M20 21h8"/>`),heart:ae(`<path ${bt} fill="#ef6a7a" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),heartE:ae(`<path ${bt} fill="#f3e2cf" d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/>`),sun:ae(`<circle ${bt} cx="24" cy="24" r="9" fill="#f6c33a"/><g ${bt}><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></g>`),moon:ae(`<path ${bt} fill="#f2e6b0" d="M30 6a18 18 0 1012 30A15 15 0 0130 6z"/>`),bag:ae(`<path ${bt} fill="#c98a4a" d="M8 18h32l-3 24H11z"/><path ${bt} fill="none" d="M17 18c0-10 14-10 14 0"/><path ${bt} fill="#e0a868" d="M8 18h32v6H8z"/>`),menu:ae(`<g ${bt}><path d="M10 14h28M10 24h28M10 34h28"/></g>`),jump:ae(`<g ${bt} fill="none"><path d="M24 40V12M14 22l10-10 10 10"/></g>`),run:ae(`<g ${bt} fill="none"><circle cx="30" cy="9" r="4" fill="#4a3220"/><path d="M18 20l8-4 6 6 6 2M26 16l-4 12 8 6-2 10M22 28l-8 2-4 8"/></g>`),act:ae(`<path ${bt} fill="#fff6e6" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/>`),eye:ae(`<path ${bt} fill="#fff6e6" d="M4 24s8-13 20-13 20 13 20 13-8 13-20 13S4 24 4 24z"/><circle cx="24" cy="24" r="6" fill="#4a3220"/>`),hammer:ae(`<path ${bt} fill="#c98a4a" d="M22 20l5 5-16 16-5-5z"/><path ${bt} fill="#a8b0b8" d="M20 10l10-4 12 12-4 10-6-6-4 2-6-6 2-4z"/>`),close:ae(`<g ${bt}><path d="M14 14l20 20M34 14L14 34"/></g>`),book:ae(`<path ${bt} fill="#e8605a" d="M8 8h24a6 6 0 016 6v26H14a6 6 0 01-6-6z"/><path ${bt} fill="#fff6e6" d="M14 34h24v6H14a3 3 0 010-6z"/>`),gear:ae(`<circle ${bt} cx="24" cy="24" r="7" fill="#fff6e6"/><path ${bt} fill="none" d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/>`),save:ae(`<path ${bt} fill="#5a9ad8" d="M8 8h26l6 6v26H8z"/><path ${bt} fill="#fff6e6" d="M14 8h16v10H14zM14 28h20v12H14z"/>`),home:ae(`<path ${bt} fill="#e8a05a" d="M6 24L24 8l18 16"/><path ${bt} fill="#fff6e6" d="M11 21v19h26V21"/><path ${bt} fill="#c98a4a" d="M20 40V29h8v11"/>`),chat:ae(`<path ${bt} fill="#fff6e6" d="M6 10h36v22H20l-8 8v-8H6z"/><g fill="#4a3220"><circle cx="16" cy="21" r="2.4"/><circle cx="24" cy="21" r="2.4"/><circle cx="32" cy="21" r="2.4"/></g>`),gift:ae(`<path ${bt} fill="#ef6a7a" d="M8 20h32v20H8z"/><path ${bt} fill="#f2c84a" d="M6 14h36v6H6zM21 14h6v26h-6z"/><path ${bt} fill="none" d="M24 14c-4-8-12-6-8 0m8 0c4-8 12-6 8 0"/>`),wave:ae(`<path ${bt} fill="#f6cfa4" d="M14 26V14a3 3 0 016 0v9-13a3 3 0 016 0v13-11a3 3 0 016 0v12-7a3 3 0 016 0v13c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-6-8a3 3 0 015-4z"/><g ${bt} fill="none"><path d="M6 8c-3 4-3 8 0 12M42 34c3-4 3-8 0-12"/></g>`)},pe=i=>yl[i]||yl.hand,zt=(i,t=document)=>t.querySelector(i),En=i=>{const t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild},Tg=i=>"#"+i.toString(16).padStart(6,"0"),wg='<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="20" fill="#f0c8a0" stroke="#4a3220" stroke-width="2.4"/><path d="M12 32c0-14 10-20 20-20s20 6 20 20c-4-6-10-9-20-9s-16 3-20 9z" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="32" cy="10" r="7" fill="#dcdcdc" stroke="#4a3220" stroke-width="2.4"/><circle cx="24" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="40" cy="37" r="5" fill="none" stroke="#6a4a2a" stroke-width="2"/><circle cx="24" cy="37" r="1.8" fill="#241a16"/><circle cx="40" cy="37" r="1.8" fill="#241a16"/><path d="M27 46q5 4 10 0" stroke="#8a3a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="18" cy="44" r="3" fill="#ff9f9f" opacity=".6"/><circle cx="46" cy="44" r="3" fill="#ff9f9f" opacity=".6"/></svg>';class Ag{constructor(){this.root=zt("#ui"),this.panel=null,this.typing=0,this.selSlot=-1,this.shopQty={},document.addEventListener("pointerdown",t=>{t.target.closest("button,.slot,.sw")&&ee.click()},!0)}blocking(){return!!this.panel}title(t,e,n){this.panel="title";const s=En(`<div class="screen title"><div class="logo"><small>một mùa hè ở miền Tây</small><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div>
      <div class="col">${t?'<button class="btn big" data-k="c">Chơi tiếp</button>':""}<button class="btn ${t?"":"big"}" data-k="n">Chơi mới</button>
      <a class="btn ghost" href="../index.html">← Game Hội Bạn</a></div><p class="hint">${Fi()?"Cần xoay ngang để chơi thoải mái nhất":"WASD đi · kéo chuột xoay · E tương tác"} · bản 0.1</p></div>`);s.addEventListener("click",r=>{const a=r.target.closest("[data-k]")?.getAttribute("data-k");a&&(ee.unlock(),!(a==="n"&&t&&!confirm("Bắt đầu lại sẽ xoá lần chơi cũ. Chắc chưa?"))&&(s.classList.add("out"),setTimeout(()=>s.remove(),400),a==="c"?e():n()))}),this.root.append(s)}story(t){this.panel="story";const e=["Hè năm nay, ba má bận làm ăn trên thành phố.","Cháu được gửi về quê ngoại ở miền Tây — nơi có ao sen, vườn rau và tiếng gà gáy mỗi sáng.","Ngoại đã đứng đợi ở cổng từ sớm…"];let n=0;const s=En('<div class="screen story"><p></p><button class="btn">Tiếp →</button><button class="skip">Bỏ qua</button></div>'),r=zt("p",s),a=()=>{r.classList.remove("in"),r.offsetWidth,r.textContent=e[n],r.classList.add("in")},o=()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400),t()};zt("button.btn",s).onclick=()=>{n++,n>=e.length?o():a()},zt(".skip",s).onclick=o,this.root.append(s),a()}creator(t,e){this.panel="creator";const n={gender:"nu",hair:2,hairColor:0,skin:0,outfit:0,name:""},s=(c,l)=>c.map((h,u)=>`<button class="sw" data-key="${l}" data-v="${u}" style="--c:${Tg(h)}"></button>`).join(""),r=(c,l)=>c.map((h,u)=>`<button class="chip" data-key="${l}" data-v="${u}">${h}</button>`).join(""),a=En(`<div class="screen creator"><div class="pv"><canvas id="pv"></canvas><div class="spin">↻ kéo để xoay</div></div><div class="card">
      <h2>Cháu ngoại là ai?</h2>
      <label>Tên<input id="cname" maxlength="14" placeholder="Bé Na"></label>
      <div class="row"><span>Cháu là</span><button class="chip" data-key="gender" data-v="nam">Bé trai</button><button class="chip" data-key="gender" data-v="nu">Bé gái</button></div>
      <div class="row"><span>Kiểu tóc</span>${r(ig,"hair")}</div>
      <div class="row"><span>Màu tóc</span>${s(Wh,"hairColor")}</div>
      <div class="row"><span>Màu da</span>${s(Vh,"skin")}</div>
      <div class="row"><span>Trang phục</span>${r(Xh.map(c=>c.name),"outfit")}</div>
      <button class="btn big" id="go">Về nhà ngoại →</button></div></div>`),o=()=>{a.querySelectorAll("[data-key]").forEach(c=>c.classList.toggle("on",String(n[c.dataset.key])===c.dataset.v)),t(n)};a.addEventListener("click",c=>{const l=c.target.closest("[data-key]");if(!l)return;const h=l.dataset.key;n[h]=h==="gender"?l.dataset.v:+l.dataset.v,h==="gender"&&(n.hair=n.gender==="nam"?0:2,n.outfit=n.gender==="nam"?0:4),o()}),zt("#go",a).onclick=()=>{n.name=zt("#cname",a).value.trim()||(n.gender==="nam"?"Bé Tí":"Bé Na"),a.classList.add("out"),setTimeout(()=>a.remove(),400),e(n)},this.root.append(a),n.outfit=4,o()}mountHUD(t,e){this.s=t,this.g=e,this.panel=null,this.root.querySelectorAll(".hudwrap").forEach(r=>r.remove());const n=En(`<div class="hudwrap"><div class="hud"><div class="clock"><i class="ic"></i><div><b class="day"></b><span class="time"></span></div></div><div class="money"><i>${pe("coin")}</i><b></b></div></div>
      <div class="hudr"><div class="hearts" title="Tình cảm với ngoại"></div><button class="rb" data-a="Escape" aria-label="Menu">${pe("menu")}</button></div>
      <div class="hotbar"></div><div class="prompt"></div><div class="toasts"></div><div class="fps"></div>
      <div class="mob">
        <div class="btns"><button class="mb act" data-a="KeyE">${pe("act")}<span>Làm</span></button><button class="mb jump" data-a="Space">${pe("jump")}</button>
        <button class="mb run" data-hold="run">${pe("run")}</button><button class="mb sm bag" data-a="KeyI">${pe("bag")}</button><button class="mb sm build" data-a="KeyB">${pe("hammer")}</button><button class="mb sm view" data-a="KeyV">${pe("eye")}</button></div></div>
      <div class="rot">Xoay ngang điện thoại để chơi thoải mái hơn <button>OK</button></div></div>`);this.root.append(n),this.hudEl=n,this.hotEl=zt(".hotbar",n),this.promptEl=zt(".prompt",n),this.toastEl=zt(".toasts",n),this.fpsEl=zt(".fps",n),Fi()&&document.body.classList.add("touch"),n.querySelectorAll("[data-a]").forEach(r=>r.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),ee.unlock(),e.input.tap(r.dataset.a),r.dataset.a==="Space"&&e.input.keys.add("Space")})),n.querySelectorAll("[data-a=Space]").forEach(r=>{const a=()=>e.input.keys.delete("Space");r.addEventListener("pointerup",a),r.addEventListener("pointerleave",a)});const s=zt("[data-hold=run]",n);s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),e.runBtn=!e.runBtn,s.classList.toggle("on",e.runBtn)}),zt(".rot button",n).onclick=()=>zt(".rot",n).remove(),this.hotEl.addEventListener("click",r=>{const a=r.target.closest(".slot");a&&(t.hotbar=+a.dataset.i,this.renderHotbar())}),Be.on("inv",()=>{this.renderHotbar(),this.panel==="inv"&&this.renderInv(),this.panel==="shop"&&this.renderShop()}),Be.on("money",r=>{this.renderHUD();const a=zt(".money",n);a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump"),r>0&&ee.coin()}),this.renderHotbar(),this.renderHUD()}renderHUD(){if(!this.hudEl)return;const t=this.s,e=Hi(t.time),n=e<5.5||e>=18.5;zt(".day",this.hudEl).textContent=`Ngày ${ls(t.time)} · Mùa hè`,zt(".time",this.hudEl).textContent=U0(t.time),zt(".clock .ic",this.hudEl).innerHTML=pe(n?"moon":"sun"),zt(".money b",this.hudEl).textContent=String(t.money);const s=Math.floor(t.friend/20);zt(".hearts",this.hudEl).innerHTML=Array.from({length:5},(r,a)=>`<i>${pe(a<s?"heart":"heartE")}</i>`).join("")}slotHTML(t,e,n){const s=ve[t.id];return`<div class="slot${n?" sel":""}${t.id?"":" empty"}" data-i="${e}" title="${s?s.name:""}">${s?pe(t.id):""}${s&&s.stack>1?`<b>${t.qty}</b>`:""}${e<Xr?`<em>${e+1}</em>`:""}</div>`}renderHotbar(){if(!this.hotEl)return;const t=this.s;this.hotEl.innerHTML=t.inv.slice(0,Xr).map((e,n)=>this.slotHTML(e,n,n===t.hotbar)).join("")+`<div class="selname">${ve[t.inv[t.hotbar]?.id]?.name||"Trống"}</div>`}prompt(t){if(!this.promptEl)return;const e=t||"";this.promptEl.dataset.t!==e&&(this.promptEl.dataset.t=e,this.promptEl.innerHTML=e?`<kbd>${Fi()?"Làm":"E"}</kbd>${e}`:"",this.promptEl.classList.toggle("on",!!e),zt(".mb.act span",this.hudEl).textContent=e?e.split(" ").slice(0,2).join(" "):"Làm")}toast(t,e=""){if(!this.toastEl)return;const n=En(`<div class="toast ${e}">${t}</div>`);this.toastEl.append(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100)}float(t,e,n,s=""){const r=En(`<div class="float ${s}" style="left:${t}px;top:${e}px">${n}</div>`);this.root.append(r),setTimeout(()=>r.remove(),1400)}modal(t,e,n,s){this.closeModal();const r=En(`<div class="modal ${t}"><div class="sheet"><header><h3>${e}</h3><button class="x" aria-label="Đóng">${pe("close")}</button></header><div class="body">${n}</div></div></div>`);return r.addEventListener("pointerdown",a=>{a.target===r&&this.closeAll()}),zt(".x",r).onclick=()=>this.closeAll(),r._close=s,this.root.append(r),ee.open(),r}closeModal(){this.root.querySelectorAll(".modal").forEach(t=>{t._close?.(),t.remove()})}closeAll(){this.root.querySelector(".modal")&&ee.close(),this.closeModal(),this.panel=null,this.selSlot=-1}toggleInv(){if(this.panel==="inv")return this.closeAll();this.panel="inv",this.modal("inv","Kho đồ",'<div class="grid"></div><div class="desc"></div><p class="tip">Bấm một ô rồi bấm ô khác để đổi chỗ. Hàng trên cùng là thanh công cụ.</p>'),this.renderInv()}renderInv(){const t=zt(".modal.inv");if(!t)return;const e=zt(".grid",t);e.innerHTML=this.s.inv.map((s,r)=>this.slotHTML(s,r,r===this.selSlot)).join(""),e.onclick=s=>{const r=s.target.closest(".slot");if(!r)return;const a=+r.dataset.i;this.selSlot>=0&&this.selSlot!==a?(this.g.inv.swap(this.selSlot,a),this.selSlot=-1,ee.place()):this.selSlot=this.selSlot===a?-1:a,this.renderInv()};const n=ve[this.s.inv[this.selSlot]?.id];zt(".desc",t).innerHTML=n?`<b>${n.name}</b> — ${n.desc}${n.sell?` <span class="pr">${pe("coin")}${n.sell}</span>`:""}`:"Chọn một món để xem."}toggleShop(){if(this.panel==="shop")return this.closeAll();this.panel="shop",this.modal("shop","Sạp cô Út",'<div class="shopbody"></div>'),this.renderShop()}renderShop(){const t=zt(".modal.shop");if(!t)return;const e=zt(".shopbody",t),n=this.g.inv,s=Object.values(ve).filter(a=>a.buy!=null&&(!a.crop||wn[a.crop]?.enabled)),r=Object.values(ve).filter(a=>a.kind==="produce");e.innerHTML=`<p class="who">“Hạt giống mới về nè con, rau trồng được thì đem ra cô mua cho!”</p><h4>Mua hạt giống</h4>${s.map(a=>{const o=this.shopQty[a.id]||1;return`<div class="line"><i>${pe(a.id)}</i><div><b>${a.name}</b><small>${a.desc}</small></div><div class="qty"><button data-q="-" data-id="${a.id}">−</button><span>${o}</span><button data-q="+" data-id="${a.id}">+</button></div><button class="btn sm" data-buy="${a.id}">${pe("coin")}${a.buy*o}</button></div>`}).join("")}
      <h4>Bán nông sản</h4>${r.map(a=>{const o=n.count(a.id);return`<div class="line${o?"":" dim"}"><i>${pe(a.id)}</i><div><b>${a.name}</b><small>Đang có ${o} · ${a.sell} xu/món</small></div><button class="btn sm" data-sell="${a.id}" ${o?"":"disabled"}>Bán 1</button><button class="btn sm" data-sellall="${a.id}" ${o?"":"disabled"}>Bán hết</button></div>`}).join("")}
      <p class="wallet">${pe("coin")} Con đang có <b>${this.s.money}</b> xu</p>`,e.onclick=a=>{const o=a.target.closest("button");if(!o)return;const c=o.dataset.id||o.dataset.buy||o.dataset.sell||o.dataset.sellall;if(o.dataset.q)return this.shopQty[c]=Math.max(1,Math.min(20,(this.shopQty[c]||1)+(o.dataset.q==="+"?1:-1))),this.renderShop();let l=null,h=0;o.dataset.buy&&(h=this.shopQty[c]||1,l=n.buy(c,h),l||(this.toast(`Đã mua ${h} ${ve[c].name.toLowerCase()}`),ee.coin(),this.g.flag("buy"))),o.dataset.sell&&(l=n.sell(c,1),h=1),o.dataset.sellall&&(h=n.count(c),l=n.sell(c,h)),(o.dataset.sell||o.dataset.sellall)&&!l&&(this.toast(`Bán ${h} ${ve[c].name.toLowerCase()} · +${ve[c].sell*h} xu`,"good"),this.g.flag("sell")),l&&(this.toast(l,"bad"),ee.error()),this.renderShop(),this.g.saveSoon()}}toggleMenu(){if(this.panel==="menu")return this.closeAll();this.panel="menu";const t=this.modal("menu","Tạm nghỉ",`<nav class="tabs"><button data-t="j" class="on">${pe("book")}Nhật ký</button><button data-t="s">${pe("gear")}Cài đặt</button><button data-t="h">Phím</button></nav><div class="tab"></div>
      <div class="acts"><button class="btn" data-m="resume">Chơi tiếp</button><button class="btn" data-m="save">${pe("save")}Lưu game</button><button class="btn ghost" data-m="new">Chơi mới</button><a class="btn ghost" href="../index.html">${pe("home")}Game Hội Bạn</a></div>`),e=zt(".tab",t),n=s=>{t.querySelectorAll(".tabs button").forEach(r=>r.classList.toggle("on",r.dataset.t===s)),e.innerHTML=s==="j"?this.journal():s==="s"?this.settingsHTML():this.keysHTML(),s==="s"&&this.bindSettings(e)};zt(".tabs",t).onclick=s=>{const r=s.target.closest("button");r&&n(r.dataset.t)},zt(".acts",t).onclick=async s=>{const r=s.target.closest("[data-m]");if(!r)return;const a=r.dataset.m;if(a==="resume"&&this.closeAll(),a==="save"){const o=await this.g.save();this.toast(o?"Đã lưu vào máy":"Lưu tạm (trình duyệt chặn IndexedDB)",o?"good":"")}a==="new"&&confirm("Chơi lại từ đầu? Lần chơi hiện tại sẽ bị xoá.")&&this.g.restart()},n("j")}journal(){const t=this.s.flags,e=this.s,n=(s,r)=>`<li class="${t[s]!=null?"ok":""}">${t[s]!=null?"✔":"○"} ${r}${t[s]!=null?` <small>ngày ${ls(t[s])}</small>`:""}</li>`;return`<h4>Nhật ký mùa hè của ${e.look.name}</h4><ul class="jr">${n("talk","Gặp ngoại ở cổng")}${n("till","Xới luống đất đầu tiên")}${n("plant","Gieo hạt giống")}${n("water","Tưới nước cho cây")}${n("harvest","Thu hoạch lần đầu")}${n("gift","Tặng rau cho ngoại")}${n("sell","Bán rau ở sạp cô Út")}${n("sit","Ngồi nghỉ ngoài hiên")}</ul>
      <p class="stat">Đã thu hoạch: <b>${t.harvestN||0}</b> lần · Tình cảm với ngoại: <b>${e.friend}</b>/100 · Ngày ${ls(e.time)}</p>
      <p class="soon">Sắp có: thú cưng, mưa, xây dựng (bản 0.3), chơi chung với bạn.</p>`}settingsHTML(){const t=this.s.settings,e=(n,s)=>`<label class="sl">${s}<input type="range" min="0" max="1" step="0.05" data-s="${n}" value="${t[n]}"></label>`;return`${e("music","Nhạc nền")}${e("ambient","Âm thanh môi trường")}${e("sfx","Hiệu ứng")}${e("ui","Giao diện")}
      <label class="ck"><input type="checkbox" data-s="muted" ${t.muted?"checked":""}> Tắt toàn bộ âm thanh</label>
      <label class="sl">Đồ hoạ<select data-s="quality">${["low","medium","high"].map(n=>`<option value="${n}" ${t.quality===n?"selected":""}>${{low:"Thấp (máy yếu)",medium:"Vừa",high:"Cao"}[n]}</option>`).join("")}</select></label>
      <label class="sl">Độ nhạy xoay camera<input type="range" min="0.3" max="2.5" step="0.1" data-s="sens" value="${t.sens}"></label>
      <label class="ck"><input type="checkbox" data-s="fps" ${t.fps?"checked":""}> Hiện FPS</label><p class="tip">Đổi đồ hoạ: độ nét và bóng đổ áp dụng ngay; mật độ cỏ hoa áp dụng khi tải lại trang.</p>`}bindSettings(t){t.querySelectorAll("[data-s]").forEach(e=>e.oninput=e.onchange=()=>{const n=e.dataset.s,s=this.s.settings;s[n]=e.type==="checkbox"?e.checked:e.tagName==="SELECT"?e.value:+e.value,this.g.applySettings(),this.g.saveSoon()})}keysHTML(){return'<table class="keys"><tr><td>W A S D</td><td>Đi</td></tr><tr><td>Kéo chuột / vuốt phải</td><td>Xoay camera · lăn chuột: phóng to</td></tr><tr><td>Shift</td><td>Chạy</td></tr><tr><td>Space</td><td>Nhảy</td></tr><tr><td>E</td><td>Tương tác (xới · gieo · tưới · hái · nói chuyện)</td></tr><tr><td>1 – 8</td><td>Chọn món trên thanh công cụ</td></tr><tr><td>I</td><td>Kho đồ</td></tr><tr><td>V</td><td>Đổi góc nhìn thứ ba / thứ nhất</td></tr><tr><td>B</td><td>Xây dựng (bản 0.3)</td></tr><tr><td>Esc</td><td>Menu</td></tr></table>'}dialog(t,e,n){this.panel="dialog";let s=zt(".dlg");s||(s=En(`<div class="dlg"><div class="face">${wg}</div><div class="box"><b class="who">Ngoại</b><p></p><div class="ch"></div></div></div>`),this.root.append(s));const r=zt("p",s),a=zt(".ch",s);clearInterval(this.typing),r.textContent="",a.innerHTML="";let o=0;ee.npc();const c=()=>{clearInterval(this.typing),r.textContent=t,a.innerHTML=e.map((l,h)=>`<button class="opt" data-k="${l.k}" ${l.off?"disabled":""}>${l.icon?pe(l.icon):""}<span>${Fi()?"":`<kbd>${h+1}</kbd>`}${l.t}</span></button>`).join("")};this.typing=window.setInterval(()=>{o+=2,r.textContent=t.slice(0,o),o>=t.length&&c()},22),r.onclick=c,s._finish=c,s._choices=e,a.onclick=l=>{const h=l.target.closest(".opt");h&&!h.hasAttribute("disabled")&&n(h.dataset.k)},s._pick=n}dialogKey(t){const e=zt(".dlg");if(!e)return;if(!e.querySelector(".opt"))return e._finish();const n=e._choices[t];n&&!n.off&&e._pick(n.k)}closeDialog(){clearInterval(this.typing),zt(".dlg")?.remove(),this.panel==="dialog"&&(this.panel=null)}loading(t,e=""){let n=zt(".loading");t&&!n?(n=En(`<div class="loading"><div class="pot"></div><p>${e}</p></div>`),this.root.append(n)):!t&&n&&(n.classList.add("out"),setTimeout(()=>n.remove(),500))}}async function Rg(){const i=new Ag;i.loading(!0,"Đang về quê ngoại…"),addEventListener("pointerdown",()=>ee.unlock(),{once:!0}),addEventListener("keydown",()=>ee.unlock(),{once:!0});const t=await Sg(),e=document.getElementById("c");let n;try{n=new bg(e,t?.settings.quality??(Fi()?"low":"medium"),i)}catch{i.loading(!1),document.getElementById("ui").innerHTML='<div class="screen title"><div class="logo"><h1>Ngoại ơi,<br><b>cháu về!</b></h1></div><p class="hint">Trình duyệt này chưa bật WebGL nên không chạy được game 3D. Thử Chrome/Safari bản mới nha.</p><a class="btn" href="../index.html">← Game Hội Bạn</a></div>';return}setTimeout(()=>i.loading(!1),300);const s=()=>i.story(()=>i.creator(r=>(Cg||(Cg=Pg()))(r),r=>{Yh(),n.start(D0(r),!0)}));if(sessionStorage.getItem("ngoai-new")){sessionStorage.removeItem("ngoai-new"),s();return}i.title(!!t,()=>n.start(t,!1),s)}let Yh=()=>{},Cg=null;function Pg(){const i=document.getElementById("pv");let t=null;const e=new Wo;if(!i)return()=>{};const n=new Vo({canvas:i,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.outputColorSpace=Oe;const s=new ze(32,1,.1,20);s.position.set(0,1.15,5.6),s.lookAt(0,.95,0),e.add(new Jo(16774368,9083498,1.6));const r=new jo(16777215,1.8);r.position.set(2,4,3),e.add(r);const a=new Lt(new be(.9,1,.12,24),new gn({color:10275946,flatShading:!0}));a.position.y=-.06,e.add(a);let o=.4,c=!1,l=0,h=!0;i.addEventListener("pointerdown",d=>{c=!0,l=d.clientX}),addEventListener("pointerup",()=>c=!1),addEventListener("pointermove",d=>{c&&(o+=(d.clientX-l)*.01,l=d.clientX)});const u=()=>{if(!h)return;requestAnimationFrame(u);const d=i.clientWidth,p=i.clientHeight;i.width!==Math.floor(d*n.getPixelRatio())&&(n.setSize(d,p,!1),s.aspect=d/p,s.updateProjectionMatrix()),t&&(c||(o+=.004),t.root.rotation.y=o,t.update(1/60,0,!1,null,0)),n.render(e,s)};return u(),Yh=()=>{h=!1,n.dispose()},d=>{t&&e.remove(t.root),t=new qr(d),e.add(t.root)}}Rg();
