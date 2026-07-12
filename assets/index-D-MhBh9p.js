(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="170",Ph=0,Vo=1,Dh=2,pc=1,Lh=2,un=3,In=0,Le=1,nn=2,Dn=0,Ai=1,os=2,Wo=3,Xo=4,Ih=5,qn=100,Uh=101,Nh=102,Fh=103,Oh=104,kh=200,Bh=201,zh=202,Gh=203,ua=204,fa=205,Hh=206,Vh=207,Wh=208,Xh=209,qh=210,$h=211,Yh=212,Kh=213,jh=214,pa=0,ma=1,ga=2,Pi=3,va=4,_a=5,xa=6,Ma=7,uo=0,Zh=1,Jh=2,Ln=0,Qh=1,td=2,ed=3,nd=4,id=5,sd=6,rd=7,mc=300,Di=301,Li=302,ya=303,Sa=304,gr=306,ba=1e3,Kn=1001,wa=1002,Qe=1003,ad=1004,ys=1005,sn=1006,Sr=1007,jn=1008,Mn=1009,gc=1010,vc=1011,ls=1012,fo=1013,Qn=1014,mn=1015,fs=1016,po=1017,mo=1018,Ii=1020,_c=35902,xc=1021,Mc=1022,Je=1023,yc=1024,Sc=1025,Ri=1026,Ui=1027,bc=1028,go=1029,wc=1030,vo=1031,_o=1033,Qs=33776,tr=33777,er=33778,nr=33779,Ea=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,ka=37814,Ba=37815,za=37816,Ga=37817,Ha=37818,Va=37819,Wa=37820,Xa=37821,ir=36492,qa=36494,$a=36495,Ec=36283,Ya=36284,Ka=36285,ja=36286,od=3200,ld=3201,Tc=0,cd=1,Pn="",Pe="srgb",ki="srgb-linear",vr="linear",Zt="srgb",ni=7680,qo=519,hd=512,dd=513,ud=514,Ac=515,fd=516,pd=517,md=518,gd=519,Za=35044,$o="300 es",gn=2e3,ar=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yo=1234567;const ns=Math.PI/180,cs=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[s&255]+ge[s>>8&255]+ge[s>>16&255]+ge[s>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function xo(s,t){return(s%t+t)%t}function vd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function _d(s,t,e){return s!==t?(e-s)/(t-s):0}function is(s,t,e){return(1-e)*s+e*t}function xd(s,t,e,n){return is(s,t,1-Math.exp(-e*n))}function Md(s,t=1){return t-Math.abs(xo(s,t*2)-t)}function yd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wd(s,t){return s+Math.random()*(t-s)}function Ed(s){return s*(.5-Math.random())}function Td(s){s!==void 0&&(Yo=s);let t=Yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ad(s){return s*ns}function Rd(s){return s*cs}function Cd(s){return(s&s-1)===0&&s!==0}function Pd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ld(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:ns,RAD2DEG:cs,generateUUID:vn,clamp:Te,euclideanModulo:xo,mapLinear:vd,inverseLerp:_d,lerp:is,damp:xd,pingpong:Md,smoothstep:yd,smootherstep:Sd,randInt:bd,randFloat:wd,randFloatSpread:Ed,seededRandom:Td,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:Cd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ld,normalize:Kt,denormalize:Ze};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],v=i[0],m=i[3],u=i[6],w=i[1],b=i[4],_=i[7],L=i[2],C=i[5],A=i[8];return r[0]=a*v+o*w+l*L,r[3]=a*m+o*b+l*C,r[6]=a*u+o*_+l*A,r[1]=c*v+h*w+d*L,r[4]=c*m+h*b+d*C,r[7]=c*u+h*_+d*A,r[2]=f*v+p*w+g*L,r[5]=f*m+p*b+g*C,r[8]=f*u+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new It;function Rc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Id(){const s=or("canvas");return s.style.display="block",s}const Ko={};function Qi(s){s in Ko||(Ko[s]=!0,console.warn(s))}function Ud(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?vr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const jo=[.64,.33,.3,.6,.15,.06],Zo=[.2126,.7152,.0722],Jo=[.3127,.329],Qo=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[ki]:{primaries:jo,whitePoint:Jo,transfer:vr,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:Zo,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:jo,whitePoint:Jo,transfer:Zt,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:Zo,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let ii;class Od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=or("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kd=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(wr(i[a].image)):r.push(wr(i[a]))}else r=wr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function wr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bd=0;class Ae extends Bi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Kn,i=Kn,r=sn,a=jn,o=Je,l=Mn,c=Ae.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=vn(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=mc;Ae.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,_=(p+1)/2,L=(u+1)/2,C=(h+f)/4,A=(d+v)/4,P=(g+m)/4;return b>_&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=A/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=C/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=P/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gd extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*v,w=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const L=Math.sqrt(b),C=Math.atan2(L,u*w);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const _=o*w;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,d=d*m+v*_,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-o*p,t[e+2]=c*g+h*p+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new R,el=new ke;class ps{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),bs.subVectors(this.max,Vi),si.subVectors(t.a,Vi),ri.subVectors(t.b,Vi),ai.subVectors(t.c,Vi),bn.subVectors(ri,si),wn.subVectors(ai,ri),kn.subVectors(si,ai);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-kn.z,kn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-kn.y,kn.x,0];return!Tr(e,si,ri,ai,bs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,si,ri,ai,bs))?!1:(ws.crossVectors(bn,wn),e=[ws.x,ws.y,ws.z],Tr(e,si,ri,ai,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new R,new R,new R,new R,new R,new R,new R,new R],$e=new R,Ss=new ps,si=new R,ri=new R,ai=new R,bn=new R,wn=new R,kn=new R,Vi=new R,bs=new R,ws=new R,Bn=new R;function Tr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hd=new ps,Wi=new R,Ar=new R;class ms{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Ar)),this.expandByPoint(Wi.copy(t.center).sub(Ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new R,Rr=new R,Es=new R,En=new R,Cr=new R,Ts=new R,Pr=new R;class Mo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=En.dot(this.direction),l=-En.dot(Es),c=En.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Rr).addScaledVector(Es,f),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){Cr.subVectors(e,t),Ts.subVectors(n,t),Pr.crossVectors(Cr,Ts);let a=this.direction.dot(Pr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const l=o*this.direction.dot(Ts.crossVectors(En,Ts));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(Pr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,a,o,l,c,h,d,f,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,f,p,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,d,f,p,g,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Wd)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),As.crossVectors(Ne,Tn),i[0]=Tn.x,i[4]=As.x,i[8]=Ne.x,i[1]=Tn.y,i[5]=As.y,i[9]=Ne.y,i[2]=Tn.z,i[6]=As.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],w=n[3],b=n[7],_=n[11],L=n[15],C=i[0],A=i[4],P=i[8],S=i[12],M=i[1],E=i[5],D=i[9],I=i[13],B=i[2],W=i[6],V=i[10],Y=i[14],k=i[3],J=i[7],Q=i[11],rt=i[15];return r[0]=a*C+o*M+l*B+c*k,r[4]=a*A+o*E+l*W+c*J,r[8]=a*P+o*D+l*V+c*Q,r[12]=a*S+o*I+l*Y+c*rt,r[1]=h*C+d*M+f*B+p*k,r[5]=h*A+d*E+f*W+p*J,r[9]=h*P+d*D+f*V+p*Q,r[13]=h*S+d*I+f*Y+p*rt,r[2]=g*C+v*M+m*B+u*k,r[6]=g*A+v*E+m*W+u*J,r[10]=g*P+v*D+m*V+u*Q,r[14]=g*S+v*I+m*Y+u*rt,r[3]=w*C+b*M+_*B+L*k,r[7]=w*A+b*E+_*W+L*J,r[11]=w*P+b*D+_*V+L*Q,r[15]=w*S+b*I+_*Y+L*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-i*o*h-e*l*d+e*o*f+i*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],w=d*m*c-v*f*c+v*l*p-o*m*p-d*l*u+o*f*u,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,_=h*v*c-g*d*c+g*o*p-a*v*p-h*o*u+a*d*u,L=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,C=e*w+n*b+i*_+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=w*A,t[1]=(v*f*r-d*m*r-v*i*p+n*m*p+d*i*u-n*f*u)*A,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*u+n*l*u)*A,t[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*A,t[4]=b*A,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*u+e*f*u)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*u-e*l*u)*A,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*A,t[8]=_*A,t[9]=(g*d*r-h*v*r-g*n*p+e*v*p+h*n*u-e*d*u)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*u+e*o*u)*A,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*A,t[12]=L*A,t[13]=(h*v*i-g*d*i+g*n*f-e*v*f-h*n*m+e*d*m)*A,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,v=a*h,m=a*d,u=o*d,w=l*c,b=l*h,_=l*d,L=n.x,C=n.y,A=n.z;return i[0]=(1-(v+u))*L,i[1]=(p+_)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(p-_)*C,i[5]=(1-(f+u))*C,i[6]=(m+w)*C,i[7]=0,i[8]=(g+b)*A,i[9]=(m-w)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=oi.set(i[0],i[1],i[2]).length();const a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/a,d=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===gn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*c,p=(n+i)*h;let g,v;if(o===gn)g=(a+r)*d,v=-2*d;else if(o===ar)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new R,Ye=new se,Vd=new R(0,0,0),Wd=new R(1,1,1),Tn=new R,As=new R,Ne=new R,nl=new se,il=new ke;class Ie{constructor(t=0,e=0,n=0,i=Ie.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ie.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xd=0;const sl=new R,li=new ke,cn=new se,Rs=new R,Xi=new R,qd=new R,$d=new ke,rl=new R(1,0,0),al=new R(0,1,0),ol=new R(0,0,1),ll={type:"added"},Yd={type:"removed"},ci={type:"childadded",child:null},Dr={type:"childremoved",child:null};class ce extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new R,e=new Ie,n=new ke,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new It}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(rl,t)}rotateY(t){return this.rotateOnAxis(al,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return sl.copy(t).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rl,t)}translateY(t){return this.translateOnAxis(al,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Xi,Rs,this.up):cn.lookAt(Rs,Xi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ll),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ll),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new R(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new R,hn=new R,Lr=new R,dn=new R,hi=new R,di=new R,cl=new R,Ir=new R,Ur=new R,Nr=new R,Fr=new oe,Or=new oe,kr=new oe;class He{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),hn.subVectors(n,e),Lr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(hn),l=Ke.dot(Lr),c=hn.dot(hn),h=hn.dot(Lr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Fr.setScalar(0),Or.setScalar(0),kr.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(Or,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),hn.subVectors(t,e),Ke.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ke.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;hi.subVectors(i,n),di.subVectors(r,n),Ir.subVectors(t,n);const l=hi.dot(Ir),c=di.dot(Ir);if(l<=0&&c<=0)return e.copy(n);Ur.subVectors(t,i);const h=hi.dot(Ur),d=di.dot(Ur);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(hi,a);Nr.subVectors(t,r);const p=hi.dot(Nr),g=di.dot(Nr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(di,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return cl.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(cl,o);const u=1/(m+v+f);return a=v*u,o=f*u,e.copy(n).addScaledVector(hi,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Br(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=xo(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Br(a,r,t+1/3),this.g=Br(a,r,t),this.b=Br(a,r,t-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Vt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Te(ve.r*255,0,255))*65536+Math.round(Te(ve.g*255,0,255))*256+Math.round(Te(ve.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,r=ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Pe){Vt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(Cs);const n=is(An.h,Cs.h,e),i=is(An.s,Cs.s,e),r=is(An.l,Cs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Tt;Tt.NAMES=Lc;let Kd=0;class Nn extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=vn(),this.name="",this.blending=Ai,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gs extends Nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new R,Ps=new Ot;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ze(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ze(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ze(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ze(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class Ic extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uc extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jd=0;const ze=new se,zr=new ce,ui=new R,Fe=new ps,qi=new ps,ue=new R;class ye extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rc(t)?Uc:Ic)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Fe.min,qi.min),Fe.expandByPoint(ue),ue.addVectors(Fe.max,qi.max),Fe.expandByPoint(ue)):(Fe.expandByPoint(qi.min),Fe.expandByPoint(qi.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ue.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ue.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(t,c),ue.add(ui)),i=Math.max(i,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,d=new R,f=new Ot,p=new Ot,g=new Ot,v=new R,m=new R;function u(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),o[P].add(v),o[S].add(v),o[M].add(v),l[P].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const M=w[P],E=M.start,D=M.count;for(let I=E,B=E+D;I<B;I+=3)u(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const b=new R,_=new R,L=new R,C=new R;function A(P){L.fromBufferAttribute(i,P),C.copy(L);const S=o[P];b.copy(S),b.sub(L.multiplyScalar(L.dot(S))).normalize(),_.crossVectors(C,S);const E=_.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,E)}for(let P=0,S=w.length;P<S;++P){const M=w[P],E=M.start,D=M.count;for(let I=E,B=E+D;I<B;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new se,zn=new Mo,Ds=new ms,dl=new R,Ls=new R,Is=new R,Us=new R,Gr=new R,Ns=new R,ul=new R,Fs=new R;class Et extends ce{constructor(t=new ye,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Gr.fromBufferAttribute(d,t),a?Ns.addScaledVector(Gr,h):Ns.addScaledVector(Gr.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(Ds.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ds,dl)===null||zn.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(hl.copy(r).invert(),zn.copy(t.ray).applyMatrix4(hl),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,L=b;_<L;_+=3){const C=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);i=Os(this,u,t,n,c,h,d,C,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=Os(this,a,t,n,c,h,d,w,b,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,L=b;_<L;_+=3){const C=_,A=_+1,P=_+2;i=Os(this,u,t,n,c,h,d,C,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=m,b=m+1,_=m+2;i=Os(this,a,t,n,c,h,d,w,b,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Zd(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===In,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:s}}function Os(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ls),s.getVertexPosition(l,Is),s.getVertexPosition(c,Us);const h=Zd(s,t,e,n,Ls,Is,Us,ul);if(h){const d=new R;He.getBarycoord(ul,Ls,Is,Us,d),i&&(h.uv=He.getInterpolatedAttribute(i,o,l,c,d,new Ot)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,l,c,d,new Ot)),a&&(h.normal=He.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};He.getNormal(Ls,Is,Us,f.normal),h.face=f,h.barycoord=d}return h}class ae extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(v,m,u,w,b,_,L,C,A,P,S){const M=_/A,E=L/P,D=_/2,I=L/2,B=C/2,W=A+1,V=P+1;let Y=0,k=0;const J=new R;for(let Q=0;Q<V;Q++){const rt=Q*E-I;for(let dt=0;dt<W;dt++){const kt=dt*M-D;J[v]=kt*w,J[m]=rt*b,J[u]=B,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[u]=C>0?1:-1,h.push(J.x,J.y,J.z),d.push(dt/A),d.push(1-Q/P),Y+=1}}for(let Q=0;Q<P;Q++)for(let rt=0;rt<A;rt++){const dt=f+rt+W*Q,kt=f+rt+W*(Q+1),q=f+(rt+1)+W*(Q+1),et=f+(rt+1)+W*Q;l.push(dt,kt,et),l.push(kt,q,et),k+=6}o.addGroup(p,k,S),p+=k,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const n=Ni(s[e]);for(const i in n)t[i]=n[i]}return t}function Jd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const Qd={clone:Ni,merge:be};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fc extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,fl=new Ot,pl=new Ot;class Ge extends Fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,fl,pl),e.subVectors(pl,fl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class nu extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(fi,pi,t,e);i.layers=this.layers,this.add(i);const r=new Ge(fi,pi,t,e);r.layers=this.layers,this.add(r);const a=new Ge(fi,pi,t,e);a.layers=this.layers,this.add(a);const o=new Ge(fi,pi,t,e);o.layers=this.layers,this.add(o);const l=new Ge(fi,pi,t,e);l.layers=this.layers,this.add(l);const c=new Ge(fi,pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oc extends Ae{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iu extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Oc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ae(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Dn});r.uniforms.tEquirect.value=e;const a=new Et(i,r),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=sn),new nu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Hr=new R,su=new R,ru=new It;class Wn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Hr.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ru.getNormalMatrix(t),i=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ms,ks=new R;class yo{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],p=i[8],g=i[9],v=i[10],m=i[11],u=i[12],w=i[13],b=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-p,_-u).normalize(),n[1].setComponents(l+r,f+c,m+p,_+u).normalize(),n[2].setComponents(l+a,f+h,m+g,_+w).normalize(),n[3].setComponents(l-a,f-h,m-g,_-w).normalize(),n[4].setComponents(l-o,f-d,m-v,_-b).normalize(),e===gn)n[5].setComponents(l+o,f+d,m+v,_+b).normalize();else if(e===ar)n[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ks.x=i.normal.x>0?t.max.x:t.min.x,ks.y=i.normal.y>0?t.max.y:t.min.y,ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function au(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class xn extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const w=u*f-a;for(let b=0;b<c;b++){const _=b*d-r;g.push(_,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const b=w+c*u,_=w+c*(u+1),L=w+1+c*(u+1),C=w+1+c*u;p.push(b,_,C),p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lu=`#ifdef USE_ALPHAHASH
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
#endif`,cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
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
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
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
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
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
#endif`,yu=`#ifdef USE_BUMPMAP
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
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pu=`#define PI 3.141592653589793
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
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lu=`vec3 transformedNormal = objectNormal;
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yu=`#ifdef USE_GRADIENTMAP
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
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
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
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
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
#endif`,af=`struct PhysicalMaterial {
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
}`,of=`
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
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
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,wp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define PHONG
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,kp=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:ou,alphahash_pars_fragment:lu,alphamap_fragment:cu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:uu,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:vu,beginnormal_vertex:_u,bsdfs:xu,iridescence_fragment:Mu,bumpmap_pars_fragment:yu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:wu,clipping_planes_vertex:Eu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:Ru,color_vertex:Cu,common:Pu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Uu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Fu,colorspace_fragment:Ou,colorspace_pars_fragment:ku,envmap_fragment:Bu,envmap_common_pars_fragment:zu,envmap_pars_fragment:Gu,envmap_pars_vertex:Hu,envmap_physical_pars_fragment:Qu,envmap_vertex:Vu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:qu,fog_pars_fragment:$u,gradientmap_pars_fragment:Yu,lightmap_pars_fragment:Ku,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Zu,lights_pars_begin:Ju,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:vf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphinstance_vertex:Mf,morphcolor_vertex:yf,morphnormal_vertex:Sf,morphtarget_pars_vertex:bf,morphtarget_vertex:wf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:Af,normal_pars_vertex:Rf,normal_vertex:Cf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:kf,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:$f,skinning_pars_vertex:Yf,skinning_vertex:Kf,skinnormal_vertex:jf,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:Qf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:rp,worldpos_vertex:ap,background_vert:op,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:hp,cube_vert:dp,cube_frag:up,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:vp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:Mp,meshbasic_vert:yp,meshbasic_frag:Sp,meshlambert_vert:bp,meshlambert_frag:wp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:Ap,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Dp,meshphysical_frag:Lp,meshtoon_vert:Ip,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:Op,shadow_frag:kp,sprite_vert:Bp,sprite_frag:zp},st={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},en={basic:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:be([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:be([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:be([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:be([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:be([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:be([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:be([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:be([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:be([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:be([st.lights,st.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};en.physical={uniforms:be([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Bs={r:0,b:0,g:0},Hn=new Ie,Gp=new se;function Hp(s,t,e,n,i,r,a){const o=new Tt(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function v(w){let b=!1;const _=g(w);_===null?u(o,l):_&&_.isColor&&(u(_,1),b=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===gr)?(h===void 0&&(h=new Et(new ae(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ni(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(b.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Hn)),h.material.toneMapped=Vt.getTransfer(_.colorSpace)!==Zt,(d!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Et(new xn(2,2),new Un({name:"BackgroundMaterial",uniforms:Ni(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(_.colorSpace)!==Zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,b){w.getRGB(Bs,Nc(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:v,addToRenderList:m}}function Vp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,E,D,I,B){let W=!1;const V=d(I,D,E);r!==V&&(r=V,c(r.object)),W=p(M,I,D,B),W&&g(M,I,D,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(M,E,D,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,E,D){const I=D.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let W=B[E.id];W===void 0&&(W={},B[E.id]=W);let V=W[I];return V===void 0&&(V=f(l()),W[I]=V),V}function f(M){const E=[],D=[],I=[];for(let B=0;B<e;B++)E[B]=0,D[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,E,D,I){const B=r.attributes,W=E.attributes;let V=0;const Y=D.getAttributes();for(const k in Y)if(Y[k].location>=0){const Q=B[k];let rt=W[k];if(rt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function g(M,E,D,I){const B={},W=E.attributes;let V=0;const Y=D.getAttributes();for(const k in Y)if(Y[k].location>=0){let Q=W[k];Q===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),B[k]=rt,V++}r.attributes=B,r.attributesNum=V,r.index=I}function v(){const M=r.newAttributes;for(let E=0,D=M.length;E<D;E++)M[E]=0}function m(M){u(M,0)}function u(M,E){const D=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,I[M]===0&&(s.enableVertexAttribArray(M),I[M]=1),B[M]!==E&&(s.vertexAttribDivisor(M,E),B[M]=E)}function w(){const M=r.newAttributes,E=r.enabledAttributes;for(let D=0,I=E.length;D<I;D++)E[D]!==M[D]&&(s.disableVertexAttribArray(D),E[D]=0)}function b(M,E,D,I,B,W,V){V===!0?s.vertexAttribIPointer(M,E,D,B,W):s.vertexAttribPointer(M,E,D,I,B,W)}function _(M,E,D,I){v();const B=I.attributes,W=D.getAttributes(),V=E.defaultAttributeValues;for(const Y in W){const k=W[Y];if(k.location>=0){let J=B[Y];if(J===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const Q=J.normalized,rt=J.itemSize,dt=t.get(J);if(dt===void 0)continue;const kt=dt.buffer,q=dt.type,et=dt.bytesPerElement,ft=q===s.INT||q===s.UNSIGNED_INT||J.gpuType===fo;if(J.isInterleavedBufferAttribute){const it=J.data,St=it.stride,Rt=J.offset;if(it.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)u(k.location+Ft,it.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Ft=0;Ft<k.locationSize;Ft++)b(k.location+Ft,rt/k.locationSize,q,Q,St*et,(Rt+rt/k.locationSize*Ft)*et,ft)}else{if(J.isInstancedBufferAttribute){for(let it=0;it<k.locationSize;it++)u(k.location+it,J.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let it=0;it<k.locationSize;it++)m(k.location+it);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let it=0;it<k.locationSize;it++)b(k.location+it,rt/k.locationSize,q,Q,rt*et,rt/k.locationSize*it*et,ft)}}else if(V!==void 0){const Q=V[Y];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(k.location,Q);break;case 3:s.vertexAttrib3fv(k.location,Q);break;case 4:s.vertexAttrib4fv(k.location,Q);break;default:s.vertexAttrib1fv(k.location,Q)}}}}w()}function L(){P();for(const M in n){const E=n[M];for(const D in E){const I=E[D];for(const B in I)h(I[B].object),delete I[B];delete E[D]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const E=n[M.id];for(const D in E){const I=E[D];for(const B in I)h(I[B].object),delete I[B];delete E[D]}delete n[M.id]}function A(M){for(const E in n){const D=n[E];if(D[M.id]===void 0)continue;const I=D[M.id];for(const B in I)h(I[B].object),delete I[B];delete D[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Wp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Je&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function qp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Wn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,b=w*4;let _=u.clippingState||null;l.value=_,_=h(g,f,b,p);for(let L=0;L!==b;++L)_[L]=e[L];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $p(s){let t=new WeakMap;function e(a,o){return o===ya?a.mapping=Di:o===Sa&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===Sa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bc extends Fc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,ml=[.125,.215,.35,.446,.526,.582],$n=20,Vr=new Bc,gl=new Tt;let Wr=null,Xr=0,qr=0,$r=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,vl=[new R(-Xn,mi,0),new R(Xn,mi,0),new R(-mi,0,Xn),new R(mi,0,Xn),new R(0,Xn,-mi),new R(0,Xn,mi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class _l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),this._renderer.xr.enabled=$r,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:fs,format:Je,colorSpace:ki,depthBuffer:!1},i=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(r)),this._blurMaterial=Kp(r,t,e)}return i}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,i){const o=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(gl),h.toneMapping=Ln,h.autoClear=!1;const p=new gs({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Et(new ae,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(gl),v=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const b=this._cubeSize;zs(i,w*b,u>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vl[(i-r-1)%vl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const u=[];let w=0;for(let A=0;A<$n;++A){const P=A/v,S=Math.exp(-P*P/2);u.push(S),A===0?w+=S:A<m&&(w+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const _=this._sizeLods[i],L=3*_*(i>b-wi?i-b+wi:0),C=4*(this._cubeSize-_);zs(e,L,C,3*_,2*_),l.setRenderTarget(e),l.render(d,Vr)}}function Yp(s){const t=[],e=[],n=[];let i=s;const r=s-wi+1+ml.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-wi?l=ml[a-s+wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*p),b=new Float32Array(m*g*p),_=new Float32Array(u*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,P=C>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(S,v*g*C),b.set(f,m*g*C);const M=[C,C,C,C,C,C];_.set(M,u*g*C)}const L=new ye;L.setAttribute("position",new Me(w,v)),L.setAttribute("uv",new Me(b,m)),L.setAttribute("faceIndex",new Me(_,u)),t.push(L),i>wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(s,t,e){const n=new ti(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Kp(s,t,e){const n=new Float32Array($n),i=new R(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:So(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ml(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function jp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ya||l===Sa,h=l===Di||l===Li;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _l(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new _l(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jp(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let b=0,_=w.length;b<_;b+=3){const L=w[b+0],C=w[b+1],A=w[b+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,_=w.length/3-1;b<_;b+=3){const L=b+0,C=b+1,A=b+2;f.push(L,C,C,A,A,L)}}else return;const m=new(Rc(f)?Uc:Ic)(f,1);m.version=v;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Qp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*v[w];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function em(s,t,e){const n=new WeakMap,i=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let L=o.attributes.position.count*_,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*C*4*d),P=new Pc(A,L,C,d);P.type=mn,P.needsUpdate=!0;const S=_*4;for(let E=0;E<d;E++){const D=u[E],I=w[E],B=b[E],W=L*C*4*E;for(let V=0;V<D.count;V++){const Y=V*S;g===!0&&(i.fromBufferAttribute(D,V),A[W+Y+0]=i.x,A[W+Y+1]=i.y,A[W+Y+2]=i.z,A[W+Y+3]=0),v===!0&&(i.fromBufferAttribute(I,V),A[W+Y+4]=i.x,A[W+Y+5]=i.y,A[W+Y+6]=i.z,A[W+Y+7]=0),m===!0&&(i.fromBufferAttribute(B,V),A[W+Y+8]=i.x,A[W+Y+9]=i.y,A[W+Y+10]=i.z,A[W+Y+11]=B.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new Ot(L,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function nm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class zc extends Ae{constructor(t,e,n,i,r,a,o,l,c,h=Ri){if(h!==Ri&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=Qn),n===void 0&&h===Ui&&(n=Ii),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Ae,Sl=new zc(1,1),Hc=new Pc,Vc=new Gd,Wc=new Oc,bl=[],wl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function zi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=bl[i];if(r===void 0&&(r=new Float32Array(i),bl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function de(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _r(s,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),de(e,t)}}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),de(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),de(e,t)}}function om(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;Al.set(n),s.uniformMatrix2fv(this.addr,!1,Al),de(e,n)}}function lm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;Tl.set(n),s.uniformMatrix3fv(this.addr,!1,Tl),de(e,n)}}function cm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;El.set(n),s.uniformMatrix4fv(this.addr,!1,El),de(e,n)}}function hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),de(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),de(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),de(e,t)}}function pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),de(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),de(e,t)}}function vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),de(e,t)}}function _m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sl.compareFunction=Ac,r=Sl):r=Gc,e.setTexture2D(t||r,i)}function xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vc,i)}function Mm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wc,i)}function ym(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hc,i)}function Sm(s){switch(s){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}function bm(s,t){s.uniform1fv(this.addr,t)}function wm(s,t){const e=zi(t,this.size,2);s.uniform2fv(this.addr,e)}function Em(s,t){const e=zi(t,this.size,3);s.uniform3fv(this.addr,e)}function Tm(s,t){const e=zi(t,this.size,4);s.uniform4fv(this.addr,e)}function Am(s,t){const e=zi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rm(s,t){const e=zi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cm(s,t){const e=zi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pm(s,t){s.uniform1iv(this.addr,t)}function Dm(s,t){s.uniform2iv(this.addr,t)}function Lm(s,t){s.uniform3iv(this.addr,t)}function Im(s,t){s.uniform4iv(this.addr,t)}function Um(s,t){s.uniform1uiv(this.addr,t)}function Nm(s,t){s.uniform2uiv(this.addr,t)}function Fm(s,t){s.uniform3uiv(this.addr,t)}function Om(s,t){s.uniform4uiv(this.addr,t)}function km(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Gc,r[a])}function Bm(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Vc,r[a])}function zm(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wc,r[a])}function Gm(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);he(n,r)||(s.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function Hm(s){switch(s){case 5126:return bm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Rl(s,t){s.seq.push(t),s.map[t.id]=t}function qm(s,t,e){const n=s.name,i=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rl(e,c===void 0?new Vm(o,s,t):new Wm(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Xm(o),Rl(e,d)),e=d}}}class sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);qm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Cl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const $m=37297;let Ym=0;function Km(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pl=new It;function jm(s){Vt._getMatrix(Pl,Vt.workingColorSpace,s);const t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(s)){case vr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Km(s.getShaderSource(t),a)}else return i}function Zm(s,t){const e=jm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(s,t){let e;switch(t){case Qh:e="Linear";break;case td:e="Reinhard";break;case ed:e="Cineon";break;case nd:e="ACESFilmic";break;case sd:e="AgX";break;case rd:e="Neutral";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new R;function Qm(){Vt.getLuminanceCoefficients(Gs);const s=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function e0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ts(s){return s!==""}function Ll(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(s){return s.replace(i0,r0)}const s0=new Map;function r0(s,t){let e=Nt[t];if(e===void 0){const n=s0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(s){return s.replace(a0,o0)}function o0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function c0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Li:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Jh:t="ENVMAP_BLENDING_ADD";break}return t}function u0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=l0(e),c=c0(e),h=h0(e),d=d0(e),f=u0(e),p=t0(e),g=e0(r),v=i.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),u.length>0&&(u+=`
`)):(m=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),u=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=Ja(a),a=Ll(a,e),a=Il(a,e),o=Ja(o),o=Ll(o,e),o=Il(o,e),a=Ul(a),o=Ul(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=w+m+a,_=w+u+o,L=Cl(i,i.VERTEX_SHADER,b),C=Cl(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(E){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(C).trim();let W=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,C);else{const Y=Dl(i,L,"vertex"),k=Dl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+Y+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||B==="")&&(V=!1);V&&(E.diagnostics={runnable:W,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:u}})}i.deleteShader(L),i.deleteShader(C),P=new sr(i,v),S=n0(i,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,$m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function v0(s,t,e,n,i,r,a){const o=new Dc,l=new m0,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,E,D,I){const B=D.fog,W=I.geometry,V=S.isMeshStandardMaterial?D.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),k=Y&&Y.mapping===gr?Y.image.height:null,J=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=Q!==void 0?Q.length:0;let dt=0;W.morphAttributes.position!==void 0&&(dt=1),W.morphAttributes.normal!==void 0&&(dt=2),W.morphAttributes.color!==void 0&&(dt=3);let kt,q,et,ft;if(J){const Yt=en[J];kt=Yt.vertexShader,q=Yt.fragmentShader}else kt=S.vertexShader,q=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),ft=l.getFragmentShaderID(S);const it=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Rt=I.isInstancedMesh===!0,Ft=I.isBatchedMesh===!0,jt=!!S.map,Ct=!!S.matcap,Jt=!!Y,N=!!S.aoMap,pe=!!S.lightMap,Bt=!!S.bumpMap,zt=!!S.normalMap,bt=!!S.displacementMap,ee=!!S.emissiveMap,yt=!!S.metalnessMap,T=!!S.roughnessMap,x=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,Z=S.iridescence>0,$=S.sheen>0,xt=S.transmission>0,ot=x&&!!S.anisotropyMap,ut=z&&!!S.clearcoatMap,Ht=z&&!!S.clearcoatNormalMap,tt=z&&!!S.clearcoatRoughnessMap,pt=Z&&!!S.iridescenceMap,wt=Z&&!!S.iridescenceThicknessMap,At=$&&!!S.sheenColorMap,mt=$&&!!S.sheenRoughnessMap,Gt=!!S.specularMap,Ut=!!S.specularColorMap,Qt=!!S.specularIntensityMap,U=xt&&!!S.transmissionMap,at=xt&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Dt=!!S.extensions;let re=Ln;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(re=s.toneMapping);const me={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:q,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&I._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ki,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Ct,envMap:Jt,envMapMode:Jt&&Y.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:pe,bumpMap:Bt,normalMap:zt,displacementMap:f&&bt,emissiveMap:ee,normalMapObjectSpace:zt&&S.normalMapType===cd,normalMapTangentSpace:zt&&S.normalMapType===Tc,metalnessMap:yt,roughnessMap:T,anisotropy:x,anisotropyMap:ot,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Ht,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:wt,sheen:$,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:Qt,transmission:xt,transmissionMap:U,thicknessMap:at,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:jt&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:pe&&v(S.lightMap.channel),bumpMapUv:Bt&&v(S.bumpMap.channel),normalMapUv:zt&&v(S.normalMap.channel),displacementMapUv:bt&&v(S.displacementMap.channel),emissiveMapUv:ee&&v(S.emissiveMap.channel),metalnessMapUv:yt&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:ot&&v(S.anisotropyMap.channel),clearcoatMapUv:ut&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(S.sheenRoughnessMap.channel),specularMapUv:Gt&&v(S.specularMap.channel),specularColorMapUv:Ut&&v(S.specularColorMap.channel),specularIntensityMapUv:Qt&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:at&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(zt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(jt||j),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:St,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&Vt.getTransfer(S.map.colorSpace)===Zt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(S.emissiveMap.colorSpace)===Zt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const E in S.defines)M.push(E),M.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(w(M,S),b(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const M=g[S.type];let E;if(M){const D=en[M];E=Qd.clone(D.uniforms)}else E=S.uniforms;return E}function L(S,M){let E;for(let D=0,I=h.length;D<I;D++){const B=h[D];if(B.cacheKey===M){E=B,++E.usedTimes;break}}return E===void 0&&(E=new f0(s,M,S,r),h.push(E)),E}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:P}}function _0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function x0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ol(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,p,g,v,m){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function o(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):e.push(u)}function l(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||x0),n.length>1&&n.sort(f||Fl),i.length>1&&i.sort(f||Fl)}function h(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function M0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ol,s.set(n,[a])):i>=r.length?(a=new Ol,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Tt};break;case"SpotLight":e={position:new R,direction:new R,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function w0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function E0(s){const t=new y0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new se,a=new se;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,w=0,b=0,_=0,L=0,C=0,A=0;c.sort(w0);for(let S=0,M=c.length;S<M;S++){const E=c[S],D=E.color,I=E.intensity,B=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=D.r*I,d+=D.g*I,f+=D.b*I;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],I);A++}else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,k=e.get(E);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=E.shadow.matrix,w++}n.directional[p]=V,p++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(D).multiplyScalar(I),V.distance=B,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[v]=V;const Y=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,Y.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[v]=Y.matrix,E.castShadow){const k=e.get(E);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=W,_++}v++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(D).multiplyScalar(I),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=V,m++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Y=E.shadow,k=e.get(E);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=E.shadow.matrix,b++}n.point[g]=V,g++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(I),V.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[u]=V,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=A,n.version=b0++)}function l(c,h){let d=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const b=c[u];if(b.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(b.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function kl(s){const t=new E0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function T0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new kl(s),t.set(i,[o])):r>=a.length?(o=new kl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class A0 extends Nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function D0(s,t,e){let n=new yo;const i=new Ot,r=new Ot,a=new oe,o=new A0({depthPacking:ld}),l=new R0,c={},h=e.maxTextureSize,d={[In]:Le,[Le]:In,[nn]:nn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:C0,fragmentShader:P0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let u=this.type;this.render=function(C,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Dn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=u!==un&&this.type===un,B=u===un&&this.type!==un;for(let W=0,V=C.length;W<V;W++){const Y=C[W],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const J=k.getFrameExtents();if(i.multiply(J),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||I===!0||B===!0){const rt=this.type!==un?{minFilter:Qe,magFilter:Qe}:{};k.map!==null&&k.map.dispose(),k.map=new ti(i.x,i.y,rt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const Q=k.getViewportCount();for(let rt=0;rt<Q;rt++){const dt=k.getViewport(rt);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),D.viewport(a),k.updateMatrices(Y,rt),n=k.getFrustum(),_(A,P,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===un&&w(k,P),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,E)};function w(C,A){const P=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,P,p,v,null)}function b(C,A,P,S){let M=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)M=E;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=M.uuid,I=A.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let W=B[I];W===void 0&&(W=M.clone(),B[I]=W,A.addEventListener("dispose",L)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,S===un?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=P}return M}function _(C,A,P,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const I=t.update(C),B=C.material;if(Array.isArray(B)){const W=I.groups;for(let V=0,Y=W.length;V<Y;V++){const k=W[V],J=B[k.materialIndex];if(J&&J.visible){const Q=b(C,J,S,M);C.onBeforeShadow(s,C,A,P,I,Q,k),s.renderBufferDirect(P,null,I,Q,C,k),C.onAfterShadow(s,C,A,P,I,Q,k)}}}else if(B.visible){const W=b(C,B,S,M);C.onBeforeShadow(s,C,A,P,I,W,null),s.renderBufferDirect(P,null,I,W,C,null),C.onAfterShadow(s,C,A,P,I,W,null)}}const D=C.children;for(let I=0,B=D.length;I<B;I++)_(D[I],A,P,S,M)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const S=c[P],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const L0={[pa]:ma,[ga]:xa,[va]:Ma,[Pi]:_a,[ma]:pa,[xa]:ga,[Ma]:va,[_a]:Pi};function I0(s,t){function e(){let U=!1;const at=new oe;let X=null;const j=new oe(0,0,0,0);return{setMask:function(ht){X!==ht&&!U&&(s.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){U=ht},setClear:function(ht,lt,Dt,re,me){me===!0&&(ht*=re,lt*=re,Dt*=re),at.set(ht,lt,Dt,re),j.equals(at)===!1&&(s.clearColor(ht,lt,Dt,re),j.copy(at))},reset:function(){U=!1,X=null,j.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,X=null,j=null,ht=null;return{setReversed:function(lt){if(at!==lt){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const re=ht;ht=null,this.setClear(re)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?it(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(lt){X!==lt&&!U&&(s.depthMask(lt),X=lt)},setFunc:function(lt){if(at&&(lt=L0[lt]),j!==lt){switch(lt){case pa:s.depthFunc(s.NEVER);break;case ma:s.depthFunc(s.ALWAYS);break;case ga:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case va:s.depthFunc(s.EQUAL);break;case _a:s.depthFunc(s.GEQUAL);break;case xa:s.depthFunc(s.GREATER);break;case Ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=lt}},setLocked:function(lt){U=lt},setClear:function(lt){ht!==lt&&(at&&(lt=1-lt),s.clearDepth(lt),ht=lt)},reset:function(){U=!1,X=null,j=null,ht=null,at=!1}}}function i(){let U=!1,at=null,X=null,j=null,ht=null,lt=null,Dt=null,re=null,me=null;return{setTest:function(Yt){U||(Yt?it(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(Yt){at!==Yt&&!U&&(s.stencilMask(Yt),at=Yt)},setFunc:function(Yt,Xe,rn){(X!==Yt||j!==Xe||ht!==rn)&&(s.stencilFunc(Yt,Xe,rn),X=Yt,j=Xe,ht=rn)},setOp:function(Yt,Xe,rn){(lt!==Yt||Dt!==Xe||re!==rn)&&(s.stencilOp(Yt,Xe,rn),lt=Yt,Dt=Xe,re=rn)},setLocked:function(Yt){U=Yt},setClear:function(Yt){me!==Yt&&(s.clearStencil(Yt),me=Yt)},reset:function(){U=!1,at=null,X=null,j=null,ht=null,lt=null,Dt=null,re=null,me=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,b=null,_=null,L=null,C=null,A=new Tt(0,0,0),P=0,S=!1,M=null,E=null,D=null,I=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Y>=2);let J=null,Q={};const rt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),kt=new oe().fromArray(rt),q=new oe().fromArray(dt);function et(U,at,X,j){const ht=new Uint8Array(4),lt=s.createTexture();s.bindTexture(U,lt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<X;Dt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(at+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return lt}const ft={};ft[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(Pi),Bt(!1),zt(Vo),it(s.CULL_FACE),N(Dn);function it(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Rt(U,at){return d[U]!==at?(s.bindFramebuffer(U,at),d[U]=at,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ft(U,at){let X=p,j=!1;if(U){X=f.get(at),X===void 0&&(X=[],f.set(at,X));const ht=U.textures;if(X.length!==ht.length||X[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Dt=ht.length;lt<Dt;lt++)X[lt]=s.COLOR_ATTACHMENT0+lt;X.length=ht.length,j=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,j=!0);j&&s.drawBuffers(X)}function jt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Ct={[qn]:s.FUNC_ADD,[Uh]:s.FUNC_SUBTRACT,[Nh]:s.FUNC_REVERSE_SUBTRACT};Ct[Fh]=s.MIN,Ct[Oh]=s.MAX;const Jt={[kh]:s.ZERO,[Bh]:s.ONE,[zh]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[Wh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[Gh]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[Xh]:s.ONE_MINUS_DST_COLOR,[Vh]:s.ONE_MINUS_DST_ALPHA,[$h]:s.CONSTANT_COLOR,[Yh]:s.ONE_MINUS_CONSTANT_COLOR,[Kh]:s.CONSTANT_ALPHA,[jh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(U,at,X,j,ht,lt,Dt,re,me,Yt){if(U===Dn){v===!0&&(St(s.BLEND),v=!1);return}if(v===!1&&(it(s.BLEND),v=!0),U!==Ih){if(U!==m||Yt!==S){if((u!==qn||_!==qn)&&(s.blendEquation(s.FUNC_ADD),u=qn,_=qn),Yt)switch(U){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case os:s.blendFunc(s.ONE,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case os:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,L=null,C=null,A.set(0,0,0),P=0,m=U,S=Yt}return}ht=ht||at,lt=lt||X,Dt=Dt||j,(at!==u||ht!==_)&&(s.blendEquationSeparate(Ct[at],Ct[ht]),u=at,_=ht),(X!==w||j!==b||lt!==L||Dt!==C)&&(s.blendFuncSeparate(Jt[X],Jt[j],Jt[lt],Jt[Dt]),w=X,b=j,L=lt,C=Dt),(re.equals(A)===!1||me!==P)&&(s.blendColor(re.r,re.g,re.b,me),A.copy(re),P=me),m=U,S=!1}function pe(U,at){U.side===nn?St(s.CULL_FACE):it(s.CULL_FACE);let X=U.side===Le;at&&(X=!X),Bt(X),U.blending===Ai&&U.transparent===!1?N(Dn):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function zt(U){U!==Ph?(it(s.CULL_FACE),U!==E&&(U===Vo?s.cullFace(s.BACK):U===Dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),E=U}function bt(U){U!==D&&(V&&s.lineWidth(U),D=U)}function ee(U,at,X){U?(it(s.POLYGON_OFFSET_FILL),(I!==at||B!==X)&&(s.polygonOffset(at,X),I=at,B=X)):St(s.POLYGON_OFFSET_FILL)}function yt(U){U?it(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function T(U){U===void 0&&(U=s.TEXTURE0+W-1),J!==U&&(s.activeTexture(U),J=U)}function x(U,at,X){X===void 0&&(J===null?X=s.TEXTURE0+W-1:X=J);let j=Q[X];j===void 0&&(j={type:void 0,texture:void 0},Q[X]=j),(j.type!==U||j.texture!==at)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(U,at||ft[U]),j.type=U,j.texture=at)}function z(){const U=Q[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){kt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),kt.copy(U))}function mt(U){q.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Gt(U,at){let X=c.get(at);X===void 0&&(X=new WeakMap,c.set(at,X));let j=X.get(U);j===void 0&&(j=s.getUniformBlockIndex(at,U.name),X.set(U,j))}function Ut(U,at){const j=c.get(at).get(U);l.get(at)!==j&&(s.uniformBlockBinding(at,j,U.__bindingPointIndex),l.set(at,j))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,Q={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,b=null,_=null,L=null,C=null,A=new Tt(0,0,0),P=0,S=!1,M=null,E=null,D=null,I=null,B=null,kt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:St,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:jt,setBlending:N,setMaterial:pe,setFlipSided:Bt,setCullFace:zt,setLineWidth:bt,setPolygonOffset:ee,setScissorTest:yt,activeTexture:T,bindTexture:x,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:pt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Ht,texStorage3D:tt,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:mt,reset:Qt}}function Bl(s,t,e,n){const i=U0(n);switch(e){case xc:return s*t;case yc:return s*t;case Sc:return s*t*2;case bc:return s*t/i.components*i.byteLength;case go:return s*t/i.components*i.byteLength;case wc:return s*t*2/i.components*i.byteLength;case vo:return s*t*2/i.components*i.byteLength;case Mc:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case _o:return s*t*4/i.components*i.byteLength;case Qs:case tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(s,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(s,8)*Math.max(t,8)/2;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ir:case qa:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ec:case Ya:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ka:case ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U0(s){switch(s){case Mn:case gc:return{byteLength:1,components:1};case ls:case vc:case fs:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Qn:case fo:case mn:return{byteLength:4,components:1};case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):or("canvas")}function v(T,x,z){let K=1;const Z=yt(T);if((Z.width>z||Z.height>z)&&(K=z/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(K*Z.width),xt=Math.floor(K*Z.height);d===void 0&&(d=g($,xt));const ot=x?g($,xt):d;return ot.width=$,ot.height=xt,ot.getContext("2d").drawImage(T,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+xt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,x,z,K,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),x===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),x===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),x===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),x===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),x===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),x===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),x===s.RGBA){const xt=Z?vr:Vt.getTransfer(K);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=xt===Zt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,x){let z;return T?x===null||x===Qn||x===Ii?z=s.DEPTH24_STENCIL8:x===mn?z=s.DEPTH32F_STENCIL8:x===ls&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===Ii?z=s.DEPTH_COMPONENT24:x===mn?z=s.DEPTH_COMPONENT32F:x===ls&&(z=s.DEPTH_COMPONENT16),z}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),P(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x)}function P(T){const x=n.get(T);if(x.__webglInit===void 0)return;const z=T.source,K=f.get(z);if(K){const Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(K).length===0&&f.delete(z)}n.remove(T)}function S(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const z=T.source,K=f.get(z);delete K[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Z=0;Z<x.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,Z=z.length;K<Z;K++){const $=n.get(z[K]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[K])}n.remove(T)}let E=0;function D(){E=0}function I(){const T=E;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),E+=1,T}function B(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function W(T,x){const z=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,x);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+x)}function V(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+x)}function Y(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+x)}function k(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){et(z,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+x)}const J={[ba]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},Q={[Qe]:s.NEAREST,[ad]:s.NEAREST_MIPMAP_NEAREST,[ys]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},rt={[hd]:s.NEVER,[gd]:s.ALWAYS,[dd]:s.LESS,[Ac]:s.LEQUAL,[ud]:s.EQUAL,[md]:s.GEQUAL,[fd]:s.GREATER,[pd]:s.NOTEQUAL};function dt(T,x){if(x.type===mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Sr||x.magFilter===ys||x.magFilter===jn||x.minFilter===sn||x.minFilter===Sr||x.minFilter===ys||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Q[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qe||x.minFilter!==ys&&x.minFilter!==jn||x.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function kt(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const $=B(x);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[$].usedTimes++;const xt=Z[T.__cacheKey];xt!==void 0&&(Z[T.__cacheKey].usedTimes--,xt.usedTimes===0&&S(x)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return z}function q(T,x,z){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const Z=kt(T,x),$=x.source;e.bindTexture(K,T.__webglTexture,s.TEXTURE0+z);const xt=n.get($);if($.version!==xt.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const ot=Vt.getPrimaries(Vt.workingColorSpace),ut=x.colorSpace===Pn?null:Vt.getPrimaries(x.colorSpace),Ht=x.colorSpace===Pn||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let tt=v(x.image,!1,i.maxTextureSize);tt=ee(x,tt);const pt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let At=b(x.internalFormat,pt,wt,x.colorSpace,x.isVideoTexture);dt(K,x);let mt;const Gt=x.mipmaps,Ut=x.isVideoTexture!==!0,Qt=xt.__version===void 0||Z===!0,U=$.dataReady,at=L(x,tt);if(x.isDepthTexture)At=_(x.format===Ui,x.type),Qt&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,pt,wt,null));else if(x.isDataTexture)if(Gt.length>0){Ut&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,At,Gt[0].width,Gt[0].height);for(let X=0,j=Gt.length;X<j;X++)mt=Gt[X],Ut?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,X,At,mt.width,mt.height,0,pt,wt,mt.data);x.generateMipmaps=!1}else Ut?(Qt&&e.texStorage2D(s.TEXTURE_2D,at,At,tt.width,tt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,wt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,pt,wt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,At,Gt[0].width,Gt[0].height,tt.depth);for(let X=0,j=Gt.length;X<j;X++)if(mt=Gt[X],x.format!==Je)if(pt!==null)if(Ut){if(U)if(x.layerUpdates.size>0){const ht=Bl(mt.width,mt.height,x.format,x.type);for(const lt of x.layerUpdates){const Dt=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,lt,mt.width,mt.height,1,pt,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,At,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,wt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,At,mt.width,mt.height,tt.depth,0,pt,wt,mt.data)}else{Ut&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,At,Gt[0].width,Gt[0].height);for(let X=0,j=Gt.length;X<j;X++)mt=Gt[X],x.format!==Je?pt!==null?Ut?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,X,At,mt.width,mt.height,0,pt,wt,mt.data)}else if(x.isDataArrayTexture)if(Ut){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,At,tt.width,tt.height,tt.depth),U)if(x.layerUpdates.size>0){const X=Bl(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const ht=tt.data.subarray(j*X/tt.data.BYTES_PER_ELEMENT,(j+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,pt,wt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,wt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,pt,wt,tt.data);else if(x.isData3DTexture)Ut?(Qt&&e.texStorage3D(s.TEXTURE_3D,at,At,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,wt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,pt,wt,tt.data);else if(x.isFramebufferTexture){if(Qt)if(Ut)e.texStorage2D(s.TEXTURE_2D,at,At,tt.width,tt.height);else{let X=tt.width,j=tt.height;for(let ht=0;ht<at;ht++)e.texImage2D(s.TEXTURE_2D,ht,At,X,j,0,pt,wt,null),X>>=1,j>>=1}}else if(Gt.length>0){if(Ut&&Qt){const X=yt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,at,At,X.width,X.height)}for(let X=0,j=Gt.length;X<j;X++)mt=Gt[X],Ut?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,pt,wt,mt):e.texImage2D(s.TEXTURE_2D,X,At,pt,wt,mt);x.generateMipmaps=!1}else if(Ut){if(Qt){const X=yt(tt);e.texStorage2D(s.TEXTURE_2D,at,At,X.width,X.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,wt,tt)}else e.texImage2D(s.TEXTURE_2D,0,At,pt,wt,tt);m(x)&&u(K),xt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function et(T,x,z){if(x.image.length!==6)return;const K=kt(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+z);const $=n.get(Z);if(Z.version!==$.__version||K===!0){e.activeTexture(s.TEXTURE0+z);const xt=Vt.getPrimaries(Vt.workingColorSpace),ot=x.colorSpace===Pn?null:Vt.getPrimaries(x.colorSpace),ut=x.colorSpace===Pn||xt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!Ht&&!tt?pt[j]=v(x.image[j],!0,i.maxCubemapSize):pt[j]=tt?x.image[j].image:x.image[j],pt[j]=ee(x,pt[j]);const wt=pt[0],At=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Gt=b(x.internalFormat,At,mt,x.colorSpace),Ut=x.isVideoTexture!==!0,Qt=$.__version===void 0||K===!0,U=Z.dataReady;let at=L(x,wt);dt(s.TEXTURE_CUBE_MAP,x);let X;if(Ht){Ut&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,wt.width,wt.height);for(let j=0;j<6;j++){X=pt[j].mipmaps;for(let ht=0;ht<X.length;ht++){const lt=X[ht];x.format!==Je?At!==null?Ut?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,At,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,At,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,lt.width,lt.height,0,At,mt,lt.data)}}}else{if(X=x.mipmaps,Ut&&Qt){X.length>0&&at++;const j=yt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,At,mt,pt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,pt[j].width,pt[j].height,0,At,mt,pt[j].data);for(let ht=0;ht<X.length;ht++){const Dt=X[ht].image[j].image;Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Dt.width,Dt.height,At,mt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,Dt.width,Dt.height,0,At,mt,Dt.data)}}else{Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,mt,pt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,At,mt,pt[j]);for(let ht=0;ht<X.length;ht++){const lt=X[ht];Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,At,mt,lt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,At,mt,lt.image[j])}}}m(x)&&u(s.TEXTURE_CUBE_MAP),$.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ft(T,x,z,K,Z,$){const xt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),ut=b(z.internalFormat,xt,ot,z.colorSpace),Ht=n.get(x),tt=n.get(z);if(tt.__renderTarget=x,!Ht.__hasExternalTextures){const pt=Math.max(1,x.width>>$),wt=Math.max(1,x.height>>$);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ut,pt,wt,x.depth,0,xt,ot,null):e.texImage2D(Z,$,ut,pt,wt,0,xt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,tt.__webglTexture,0,Bt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,tt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(T,x,z){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=_(x.stencilBuffer,Z),xt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Bt(x);zt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,$,x.width,x.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,$,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,T)}else{const K=x.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],xt=r.convert($.format,$.colorSpace),ot=r.convert($.type),ut=b($.internalFormat,xt,ot,$.colorSpace),Ht=Bt(x);z&&zt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,ut,x.width,x.height):zt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const Z=K.__webglTexture,$=Bt(x);if(x.depthTexture.format===Ri)zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Ui)zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(T){const x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=s.createRenderbuffer(),it(x.__webglDepthbuffer[K],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),it(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(T,x,z){const K=n.get(T);x!==void 0&&ft(K.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Rt(T)}function jt(T){const x=T.texture,z=n.get(T),K=n.get(x);T.addEventListener("dispose",A);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)z.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(xt)for(let ot=0,ut=Z.length;ot<ut;ot++){const Ht=n.get(Z[ot]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&zt(T)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ut=Z[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const Ht=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),pt=b(ut.internalFormat,Ht,tt,ut.colorSpace,T.isXRRenderTarget===!0),wt=Bt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),it(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),dt(s.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)ft(z.__webglFramebuffer[ot][ut],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else ft(z.__webglFramebuffer[ot],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=Z.length;ot<ut;ot++){const Ht=Z[ot],tt=n.get(Ht);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),dt(s.TEXTURE_2D,Ht),ft(z.__webglFramebuffer,T,Ht,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Ht)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),dt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)ft(z.__webglFramebuffer[ut],T,x,s.COLOR_ATTACHMENT0,ot,ut);else ft(z.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ot,0);m(x)&&u(ot),e.unbindTexture()}T.depthBuffer&&Rt(T)}function Ct(T){const x=T.textures;for(let z=0,K=x.length;z<K;z++){const Z=x[z];if(m(Z)){const $=w(T),xt=n.get(Z).__webglTexture;e.bindTexture($,xt),u($),e.unbindTexture()}}}const Jt=[],N=[];function pe(T){if(T.samples>0){if(zt(T)===!1){const x=T.textures,z=T.width,K=T.height;let Z=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(T),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Ht=n.get(x[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,Z,s.NEAREST),l===!0&&(Jt.length=0,N.length=0,Jt.push(s.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Jt.push($),N.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Ht=n.get(x[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Bt(T){return Math.min(i.maxSamples,T.samples)}function zt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ee(T,x){const z=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==ki&&z!==Pn&&(Vt.getTransfer(z)===Zt?(K!==Je||Z!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=zt}function F0(s,t){function e(n,i=Pn){let r;const a=Vt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===po)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return s.BYTE;if(n===vc)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===fo)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===fs)return s.HALF_FLOAT;if(n===xc)return s.ALPHA;if(n===Mc)return s.RGB;if(n===Je)return s.RGBA;if(n===yc)return s.LUMINANCE;if(n===Sc)return s.LUMINANCE_ALPHA;if(n===Ri)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===bc)return s.RED;if(n===go)return s.RED_INTEGER;if(n===wc)return s.RG;if(n===vo)return s.RG_INTEGER;if(n===_o)return s.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===Ba||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===qa||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Ya||n===Ka||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class O0 extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oe extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:B0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends Bi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const v=new G0,m=e.getContextAttributes();let u=null,w=null;const b=[],_=[],L=new Ot;let C=null;const A=new Ge;A.viewport=new oe;const P=new Ge;P.viewport=new oe;const S=[A,P],M=new O0;let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=b[q];return et===void 0&&(et=new Kr,b[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=b[q];return et===void 0&&(et=new Kr,b[q]=et),et.getGripSpace()},this.getHand=function(q){let et=b[q];return et===void 0&&(et=new Kr,b[q]=et),et.getHandSpace()};function I(q){const et=_.indexOf(q.inputSource);if(et===-1)return;const ft=b[et];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let q=0;q<b.length;q++){const et=_[q];et!==null&&(_[q]=null,b[q].disconnect(et))}E=null,D=null,v.reset(),t.setRenderTarget(u),p=null,f=null,d=null,i=null,w=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ti(p.framebufferWidth,p.framebufferHeight,{format:Je,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ft=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ui:Ri,ft=m.stencil?Ii:Qn);const St={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ti(f.textureWidth,f.textureHeight,{format:Je,type:Mn,depthTexture:new zc(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(q){for(let et=0;et<q.removed.length;et++){const ft=q.removed[et],it=_.indexOf(ft);it>=0&&(_[it]=null,b[it].disconnect(ft))}for(let et=0;et<q.added.length;et++){const ft=q.added[et];let it=_.indexOf(ft);if(it===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=_.length){_.push(ft),it=Rt;break}else if(_[Rt]===null){_[Rt]=ft,it=Rt;break}if(it===-1)break}const St=b[it];St&&St.connect(ft)}}const V=new R,Y=new R;function k(q,et,ft){V.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(ft.matrixWorld);const it=V.distanceTo(Y),St=et.projectionMatrix.elements,Rt=ft.projectionMatrix.elements,Ft=St[14]/(St[10]-1),jt=St[14]/(St[10]+1),Ct=(St[9]+1)/St[5],Jt=(St[9]-1)/St[5],N=(St[8]-1)/St[0],pe=(Rt[8]+1)/Rt[0],Bt=Ft*N,zt=Ft*pe,bt=it/(-N+pe),ee=bt*-N;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ee),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ft+bt,T=jt+bt,x=Bt-ee,z=zt+(it-ee),K=Ct*jt/T*yt,Z=Jt*jt/T*yt;q.projectionMatrix.makePerspective(x,z,K,Z,yt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,ft=q.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(ft=v.depthFar)),M.near=P.near=A.near=et,M.far=P.far=A.far=ft,(E!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const it=q.parent,St=M.cameras;J(M,it);for(let Rt=0;Rt<St.length;Rt++)J(St[Rt],it);St.length===2?k(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),Q(q,M,it)};function Q(q,et,ft){ft===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let rt=null;function dt(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let it=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Rt=0;Rt<ft.length;Rt++){const Ft=ft[Rt];let jt=null;if(p!==null)jt=p.getViewport(Ft);else{const Jt=d.getViewSubImage(f,Ft);jt=Jt.viewport,Rt===0&&(t.setRenderTargetTextures(w,Jt.colorTexture,f.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(w))}let Ct=S[Rt];Ct===void 0&&(Ct=new Ge,Ct.layers.enable(Rt),Ct.viewport=new oe,S[Rt]=Ct),Ct.matrix.fromArray(Ft.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ft.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Ct)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){const Rt=d.getDepthInformation(ft[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,i.renderState)}}for(let ft=0;ft<b.length;ft++){const it=_[ft],St=b[ft];it!==null&&St!==void 0&&St.update(it,et,c||a)}rt&&rt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const kt=new kc;kt.setAnimationLoop(dt),this.setAnimationLoop=function(q){rt=q},this.dispose=function(){}}}const Vn=new Ie,V0=new se;function W0(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Nc(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,w,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Le&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Le&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),b=w.envMap,_=w.envMapRotation;b&&(m.envMap.value=b,Vn.copy(_),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Vn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=b*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X0(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const _=b.program;n.uniformBlockBinding(w,_)}function c(w,b){let _=i[w.id];_===void 0&&(g(w),_=h(w),i[w.id]=_,w.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(w,L);const C=t.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function h(w){const b=d();w.__bindingPointIndex=b;const _=s.createBuffer(),L=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=i[w.id],_=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,A=_.length;C<A;C++){const P=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,M=P.length;S<M;S++){const E=P[S];if(p(E,C,S,L)===!0){const D=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let W=0;W<I.length;W++){const V=I[W],Y=v(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,D+B,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,b,_,L){const C=w.value,A=b+"_"+_;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const P=L[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(w){const b=w.uniforms;let _=0;const L=16;for(let A=0,P=b.length;A<P;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,E=S.length;M<E;M++){const D=S[M],I=Array.isArray(D.value)?D.value:[D.value];for(let B=0,W=I.length;B<W;B++){const V=I[B],Y=v(V),k=_%L,J=k%Y.boundary,Q=k+J;_+=J,Q!==0&&L-Q<Y.storage&&(_+=L-Q),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Y.storage}}}const C=_%L;return C>0&&(_+=L-C),w.__size=_,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function u(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class q0{constructor(t={}){const{canvas:e=Id(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let L=!1,C=0,A=0,P=null,S=-1,M=null;const E=new oe,D=new oe;let I=null;const B=new Tt(0);let W=0,V=e.width,Y=e.height,k=1,J=null,Q=null;const rt=new oe(0,0,V,Y),dt=new oe(0,0,V,Y);let kt=!1;const q=new yo;let et=!1,ft=!1;const it=new se,St=new se,Rt=new R,Ft=new oe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Jt(){return P===null?k:1}let N=n;function pe(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const F="webgl2";if(N=pe(F,y),N===null)throw pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Bt,zt,bt,ee,yt,T,x,z,K,Z,$,xt,ot,ut,Ht,tt,pt,wt,At,mt,Gt,Ut,Qt,U;function at(){Bt=new Zp(N),Bt.init(),Ut=new F0(N,Bt),zt=new Xp(N,Bt,t,Ut),bt=new I0(N,Bt),zt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),ee=new tm(N),yt=new _0,T=new N0(N,Bt,bt,yt,zt,Ut,ee),x=new $p(_),z=new jp(_),K=new au(N),Qt=new Vp(N,K),Z=new Jp(N,K,ee,Qt),$=new nm(N,Z,K,ee),At=new em(N,zt,T),tt=new qp(yt),xt=new v0(_,x,z,Bt,zt,Qt,tt),ot=new W0(_,yt),ut=new M0,Ht=new T0(Bt),wt=new Hp(_,x,z,bt,$,p,l),pt=new D0(_,$,zt),U=new X0(N,ee,zt,bt),mt=new Wp(N,Bt,ee),Gt=new Qp(N,Bt,ee),ee.programs=xt.programs,_.capabilities=zt,_.extensions=Bt,_.properties=yt,_.renderLists=ut,_.shadowMap=pt,_.state=bt,_.info=ee}at();const X=new H0(_,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(V,Y,!1))},this.getSize=function(y){return y.set(V,Y)},this.setSize=function(y,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,Y=F,e.width=Math.floor(y*k),e.height=Math.floor(F*k),G===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(V*k,Y*k).floor()},this.setDrawingBufferSize=function(y,F,G){V=y,Y=F,k=G,e.width=Math.floor(y*G),e.height=Math.floor(F*G),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(rt)},this.setViewport=function(y,F,G,H){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,F,G,H),bt.viewport(E.copy(rt).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(dt)},this.setScissor=function(y,F,G,H){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,F,G,H),bt.scissor(D.copy(dt).multiplyScalar(k).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(y){bt.setScissorTest(kt=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,F=!0,G=!0){let H=0;if(y){let O=!1;if(P!==null){const nt=P.texture.format;O=nt===_o||nt===vo||nt===go}if(O){const nt=P.texture.type,ct=nt===Mn||nt===Qn||nt===ls||nt===Ii||nt===po||nt===mo,gt=wt.getClearColor(),vt=wt.getClearAlpha(),Pt=gt.r,Lt=gt.g,_t=gt.b;ct?(g[0]=Pt,g[1]=Lt,g[2]=_t,g[3]=vt,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Pt,v[1]=Lt,v[2]=_t,v[3]=vt,N.clearBufferiv(N.COLOR,0,v))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Ht.dispose(),yt.dispose(),x.dispose(),z.dispose(),$.dispose(),Qt.dispose(),U.dispose(),xt.dispose(),X.dispose(),X.removeEventListener("sessionstart",No),X.removeEventListener("sessionend",Fo),On.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=ee.autoReset,F=pt.enabled,G=pt.autoUpdate,H=pt.needsUpdate,O=pt.type;at(),ee.autoReset=y,pt.enabled=F,pt.autoUpdate=G,pt.needsUpdate=H,pt.type=O}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Dt(y){const F=y.target;F.removeEventListener("dispose",Dt),re(F)}function re(y){me(y),yt.remove(y)}function me(y){const F=yt.get(y).programs;F!==void 0&&(F.forEach(function(G){xt.releaseProgram(G)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,G,H,O,nt){F===null&&(F=jt);const ct=O.isMesh&&O.matrixWorld.determinant()<0,gt=Ah(y,F,G,H,O);bt.setMaterial(H,ct);let vt=G.index,Pt=1;if(H.wireframe===!0){if(vt=Z.getWireframeAttribute(G),vt===void 0)return;Pt=2}const Lt=G.drawRange,_t=G.attributes.position;let Wt=Lt.start*Pt,te=(Lt.start+Lt.count)*Pt;nt!==null&&(Wt=Math.max(Wt,nt.start*Pt),te=Math.min(te,(nt.start+nt.count)*Pt)),vt!==null?(Wt=Math.max(Wt,0),te=Math.min(te,vt.count)):_t!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,_t.count));const ne=te-Wt;if(ne<0||ne===1/0)return;Qt.setup(O,H,gt,G,vt);let Re,qt=mt;if(vt!==null&&(Re=K.get(vt),qt=Gt,qt.setIndex(Re)),O.isMesh)H.wireframe===!0?(bt.setLineWidth(H.wireframeLinewidth*Jt()),qt.setMode(N.LINES)):qt.setMode(N.TRIANGLES);else if(O.isLine){let Mt=H.linewidth;Mt===void 0&&(Mt=1),bt.setLineWidth(Mt*Jt()),O.isLineSegments?qt.setMode(N.LINES):O.isLineLoop?qt.setMode(N.LINE_LOOP):qt.setMode(N.LINE_STRIP)}else O.isPoints?qt.setMode(N.POINTS):O.isSprite&&qt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Mt=O._multiDrawStarts,an=O._multiDrawCounts,$t=O._multiDrawCount,qe=vt?K.get(vt).bytesPerElement:1,ei=yt.get(H).currentProgram.getUniforms();for(let Ue=0;Ue<$t;Ue++)ei.setValue(N,"_gl_DrawID",Ue),qt.render(Mt[Ue]/qe,an[Ue])}else if(O.isInstancedMesh)qt.renderInstances(Wt,ne,O.count);else if(G.isInstancedBufferGeometry){const Mt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,an=Math.min(G.instanceCount,Mt);qt.renderInstances(Wt,ne,an)}else qt.render(Wt,ne)};function Yt(y,F,G){y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,Ms(y,F,G),y.side=In,y.needsUpdate=!0,Ms(y,F,G),y.side=nn):Ms(y,F,G)}this.compile=function(y,F,G=null){G===null&&(G=y),u=Ht.get(G),u.init(F),b.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),y!==G&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const gt=nt[ct];Yt(gt,G,O),H.add(gt)}else Yt(nt,G,O),H.add(nt)}),b.pop(),u=null,H},this.compileAsync=function(y,F,G=null){const H=this.compile(y,F,G);return new Promise(O=>{function nt(){if(H.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){O(y);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Xe=null;function rn(y){Xe&&Xe(y)}function No(){On.stop()}function Fo(){On.start()}const On=new kc;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(y){Xe=y,X.setAnimationLoop(y),y===null?On.stop():On.start()},X.addEventListener("sessionstart",No),X.addEventListener("sessionend",Fo),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,F,P),u=Ht.get(y,b.length),u.init(F),b.push(u),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(St),ft=this.localClippingEnabled,et=tt.init(this.clippingPlanes,ft),m=ut.get(y,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&yr(nt,F,-1/0,_.sortObjects)}yr(y,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,Q),Ct=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ct&&wt.addToRenderList(m,y),this.info.render.frame++,et===!0&&tt.beginShadows();const G=u.state.shadowsArray;pt.render(G,y,F),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){const nt=F.cameras;if(O.length>0)for(let ct=0,gt=nt.length;ct<gt;ct++){const vt=nt[ct];ko(H,O,y,vt)}Ct&&wt.render(y);for(let ct=0,gt=nt.length;ct<gt;ct++){const vt=nt[ct];Oo(m,y,vt,vt.viewport)}}else O.length>0&&ko(H,O,y,F),Ct&&wt.render(y),Oo(m,y,F);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(_,y,F),Qt.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],et===!0&&tt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function yr(y,F,G,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){H&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const ct=$.update(y),gt=y.material;gt.visible&&m.push(y,ct,gt,G,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const ct=$.update(y),gt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(gt)){const vt=ct.groups;for(let Pt=0,Lt=vt.length;Pt<Lt;Pt++){const _t=vt[Pt],Wt=gt[_t.materialIndex];Wt&&Wt.visible&&m.push(y,ct,Wt,G,Ft.z,_t)}}else gt.visible&&m.push(y,ct,gt,G,Ft.z,null)}}const nt=y.children;for(let ct=0,gt=nt.length;ct<gt;ct++)yr(nt[ct],F,G,H)}function Oo(y,F,G,H){const O=y.opaque,nt=y.transmissive,ct=y.transparent;u.setupLightsView(G),et===!0&&tt.setGlobalState(_.clippingPlanes,G),H&&bt.viewport(E.copy(H)),O.length>0&&xs(O,F,G),nt.length>0&&xs(nt,F,G),ct.length>0&&xs(ct,F,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ko(y,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?fs:Mn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[H.id],ct=H.viewport||E;nt.setSize(ct.z,ct.w);const gt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&wt.render(G);const vt=_.toneMapping;_.toneMapping=Ln;const Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),et===!0&&tt.setGlobalState(_.clippingPlanes,H),xs(y,G,H),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _t=0,Wt=F.length;_t<Wt;_t++){const te=F[_t],ne=te.object,Re=te.geometry,qt=te.material,Mt=te.group;if(qt.side===nn&&ne.layers.test(H.layers)){const an=qt.side;qt.side=Le,qt.needsUpdate=!0,Bo(ne,G,H,Re,qt,Mt),qt.side=an,qt.needsUpdate=!0,Lt=!0}}Lt===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}_.setRenderTarget(gt),_.setClearColor(B,W),Pt!==void 0&&(H.viewport=Pt),_.toneMapping=vt}function xs(y,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,nt=y.length;O<nt;O++){const ct=y[O],gt=ct.object,vt=ct.geometry,Pt=H===null?ct.material:H,Lt=ct.group;gt.layers.test(G.layers)&&Bo(gt,F,G,vt,Pt,Lt)}}function Bo(y,F,G,H,O,nt){y.onBeforeRender(_,F,G,H,O,nt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(_,F,G,H,y,nt),O.transparent===!0&&O.side===nn&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,_.renderBufferDirect(G,F,H,O,y,nt),O.side=In,O.needsUpdate=!0,_.renderBufferDirect(G,F,H,O,y,nt),O.side=nn):_.renderBufferDirect(G,F,H,O,y,nt),y.onAfterRender(_,F,G,H,O,nt)}function Ms(y,F,G){F.isScene!==!0&&(F=jt);const H=yt.get(y),O=u.state.lights,nt=u.state.shadowsArray,ct=O.state.version,gt=xt.getParameters(y,O.state,nt,F,G),vt=xt.getProgramCacheKey(gt);let Pt=H.programs;H.environment=y.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(y.isMeshStandardMaterial?z:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Pt===void 0&&(y.addEventListener("dispose",Dt),Pt=new Map,H.programs=Pt);let Lt=Pt.get(vt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ct)return Go(y,gt),Lt}else gt.uniforms=xt.getUniforms(y),y.onBeforeCompile(gt,_),Lt=xt.acquireProgram(gt,vt),Pt.set(vt,Lt),H.uniforms=gt.uniforms;const _t=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(_t.clippingPlanes=tt.uniform),Go(y,gt),H.needsLights=Ch(y),H.lightsStateVersion=ct,H.needsLights&&(_t.ambientLightColor.value=O.state.ambient,_t.lightProbe.value=O.state.probe,_t.directionalLights.value=O.state.directional,_t.directionalLightShadows.value=O.state.directionalShadow,_t.spotLights.value=O.state.spot,_t.spotLightShadows.value=O.state.spotShadow,_t.rectAreaLights.value=O.state.rectArea,_t.ltc_1.value=O.state.rectAreaLTC1,_t.ltc_2.value=O.state.rectAreaLTC2,_t.pointLights.value=O.state.point,_t.pointLightShadows.value=O.state.pointShadow,_t.hemisphereLights.value=O.state.hemi,_t.directionalShadowMap.value=O.state.directionalShadowMap,_t.directionalShadowMatrix.value=O.state.directionalShadowMatrix,_t.spotShadowMap.value=O.state.spotShadowMap,_t.spotLightMatrix.value=O.state.spotLightMatrix,_t.spotLightMap.value=O.state.spotLightMap,_t.pointShadowMap.value=O.state.pointShadowMap,_t.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function zo(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=sr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Go(y,F){const G=yt.get(y);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ah(y,F,G,H,O){F.isScene!==!0&&(F=jt),T.resetTextureUnits();const nt=F.fog,ct=H.isMeshStandardMaterial?F.environment:null,gt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,vt=(H.isMeshStandardMaterial?z:x).get(H.envMap||ct),Pt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_t=!!G.morphAttributes.position,Wt=!!G.morphAttributes.normal,te=!!G.morphAttributes.color;let ne=Ln;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ne=_.toneMapping);const Re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=Re!==void 0?Re.length:0,Mt=yt.get(H),an=u.state.lights;if(et===!0&&(ft===!0||y!==M)){const Be=y===M&&H.id===S;tt.setState(H,y,Be)}let $t=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==an.state.version||Mt.outputColorSpace!==gt||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==vt||H.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==Lt||Mt.morphTargets!==_t||Mt.morphNormals!==Wt||Mt.morphColors!==te||Mt.toneMapping!==ne||Mt.morphTargetsCount!==qt)&&($t=!0):($t=!0,Mt.__version=H.version);let qe=Mt.currentProgram;$t===!0&&(qe=Ms(H,F,O));let ei=!1,Ue=!1,Gi=!1;const ie=qe.getUniforms(),tn=Mt.uniforms;if(bt.useProgram(qe.program)&&(ei=!0,Ue=!0,Gi=!0),H.id!==S&&(S=H.id,Ue=!0),ei||M!==y){bt.buffers.depth.getReversed()?(it.copy(y.projectionMatrix),Nd(it),Fd(it),ie.setValue(N,"projectionMatrix",it)):ie.setValue(N,"projectionMatrix",y.projectionMatrix),ie.setValue(N,"viewMatrix",y.matrixWorldInverse);const yn=ie.map.cameraPosition;yn!==void 0&&yn.setValue(N,Rt.setFromMatrixPosition(y.matrixWorld)),zt.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ie.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ue=!0,Gi=!0)}if(O.isSkinnedMesh){ie.setOptional(N,O,"bindMatrix"),ie.setOptional(N,O,"bindMatrixInverse");const Be=O.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ie.setValue(N,"boneTexture",Be.boneTexture,T))}O.isBatchedMesh&&(ie.setOptional(N,O,"batchingTexture"),ie.setValue(N,"batchingTexture",O._matricesTexture,T),ie.setOptional(N,O,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",O._indirectTexture,T),ie.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",O._colorsTexture,T));const Hi=G.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&At.update(O,G,qe),(Ue||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,ie.setValue(N,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=vt,tn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),Ue&&(ie.setValue(N,"toneMappingExposure",_.toneMappingExposure),Mt.needsLights&&Rh(tn,Gi),nt&&H.fog===!0&&ot.refreshFogUniforms(tn,nt),ot.refreshMaterialUniforms(tn,H,k,Y,u.state.transmissionRenderTarget[y.id]),sr.upload(N,zo(Mt),tn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(sr.upload(N,zo(Mt),tn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ie.setValue(N,"center",O.center),ie.setValue(N,"modelViewMatrix",O.modelViewMatrix),ie.setValue(N,"normalMatrix",O.normalMatrix),ie.setValue(N,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Be=H.uniformsGroups;for(let yn=0,Sn=Be.length;yn<Sn;yn++){const Ho=Be[yn];U.update(Ho,qe),U.bind(Ho,qe)}}return qe}function Rh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ch(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,F,G){yt.get(y.texture).__webglTexture=F,yt.get(y.depthTexture).__webglTexture=G;const H=yt.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const G=yt.get(y);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,G=0){P=y,C=F,A=G;let H=!0,O=null,nt=!1,ct=!1;if(y){const vt=yt.get(y);if(vt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(vt.__hasExternalTextures)T.rebindTextures(y,yt.get(y.texture).__webglTexture,yt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const _t=y.depthTexture;if(vt.__boundDepthTexture!==_t){if(_t!==null&&yt.has(_t)&&(y.width!==_t.image.width||y.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);const Lt=yt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?O=Lt[F][G]:O=Lt[F],nt=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?O=yt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?O=Lt[G]:O=Lt,E.copy(y.viewport),D.copy(y.scissor),I=y.scissorTest}else E.copy(rt).multiplyScalar(k).floor(),D.copy(dt).multiplyScalar(k).floor(),I=kt;if(bt.bindFramebuffer(N.FRAMEBUFFER,O)&&H&&bt.drawBuffers(y,O),bt.viewport(E),bt.scissor(D),bt.setScissorTest(I),nt){const vt=yt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,G)}else if(ct){const vt=yt.get(y.texture),Pt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,G||0,Pt)}S=-1},this.readRenderTargetPixels=function(y,F,G,H,O,nt,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){bt.bindFramebuffer(N.FRAMEBUFFER,gt);try{const vt=y.texture,Pt=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&G>=0&&G<=y.height-O&&N.readPixels(F,G,H,O,Ut.convert(Pt),Ut.convert(Lt),nt)}finally{const vt=P!==null?yt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,F,G,H,O,nt,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const vt=y.texture,Pt=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-H&&G>=0&&G<=y.height-O){bt.bindFramebuffer(N.FRAMEBUFFER,gt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,nt.byteLength,N.STREAM_READ),N.readPixels(F,G,H,O,Ut.convert(Pt),Ut.convert(Lt),0);const Wt=P!==null?yt.get(P).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Wt);const te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ud(N,te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,nt),N.deleteBuffer(_t),N.deleteSync(te),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,G=0){y.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-G),O=Math.floor(y.image.width*H),nt=Math.floor(y.image.height*H),ct=F!==null?F.x:0,gt=F!==null?F.y:0;T.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ct,gt,O,nt),bt.unbindTexture()},this.copyTextureToTexture=function(y,F,G=null,H=null,O=0){y.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let nt,ct,gt,vt,Pt,Lt,_t,Wt,te;const ne=y.isCompressedTexture?y.mipmaps[O]:y.image;G!==null?(nt=G.max.x-G.min.x,ct=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,vt=G.min.x,Pt=G.min.y,Lt=G.isBox3?G.min.z:0):(nt=ne.width,ct=ne.height,gt=ne.depth||1,vt=0,Pt=0,Lt=0),H!==null?(_t=H.x,Wt=H.y,te=H.z):(_t=0,Wt=0,te=0);const Re=Ut.convert(F.format),qt=Ut.convert(F.type);let Mt;F.isData3DTexture?(T.setTexture3D(F,0),Mt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Mt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const an=N.getParameter(N.UNPACK_ROW_LENGTH),$t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qe=N.getParameter(N.UNPACK_SKIP_PIXELS),ei=N.getParameter(N.UNPACK_SKIP_ROWS),Ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt);const Gi=y.isDataArrayTexture||y.isData3DTexture,ie=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const tn=yt.get(y),Hi=yt.get(F),Be=yt.get(tn.__renderTarget),yn=yt.get(Hi.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,Be.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Sn=0;Sn<gt;Sn++)Gi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(y).__webglTexture,O,Lt+Sn),y.isDepthTexture?(ie&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.get(F).__webglTexture,O,te+Sn),N.blitFramebuffer(vt,Pt,nt,ct,_t,Wt,nt,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):ie?N.copyTexSubImage3D(Mt,O,_t,Wt,te+Sn,vt,Pt,nt,ct):N.copyTexSubImage2D(Mt,O,_t,Wt,te+Sn,vt,Pt,nt,ct);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Mt,O,_t,Wt,te,nt,ct,gt,Re,qt,ne.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,O,_t,Wt,te,nt,ct,gt,Re,ne.data):N.texSubImage3D(Mt,O,_t,Wt,te,nt,ct,gt,Re,qt,ne):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,_t,Wt,nt,ct,Re,qt,ne.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,_t,Wt,ne.width,ne.height,Re,ne.data):N.texSubImage2D(N.TEXTURE_2D,O,_t,Wt,nt,ct,Re,qt,ne);N.pixelStorei(N.UNPACK_ROW_LENGTH,an),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),O===0&&F.generateMipmaps&&N.generateMipmap(Mt),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,F,G=null,H=null,O=0){return y.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,G,H,O)},this.initRenderTarget=function(y){yt.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,bt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class bo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $0 extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ie,this.environmentIntensity=1,this.environmentRotation=new Ie,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Y0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Se=new R;class lr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ze(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ze(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ze(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ze(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fi extends Nn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gi;const $i=new R,vi=new R,_i=new R,xi=new Ot,Yi=new Ot,Xc=new se,Hs=new R,Ki=new R,Vs=new R,zl=new Ot,jr=new Ot,Gl=new Ot;class hs extends ce{constructor(t=new Fi){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Y0(e,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new lr(n,3,0,!1)),gi.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=gi,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),Xc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-_i.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ws(Hs.set(-.5,-.5,0),_i,a,vi,i,r),Ws(Ki.set(.5,-.5,0),_i,a,vi,i,r),Ws(Vs.set(.5,.5,0),_i,a,vi,i,r),zl.set(0,0),jr.set(1,0),Gl.set(1,1);let o=t.ray.intersectTriangle(Hs,Ki,Vs,!1,$i);if(o===null&&(Ws(Ki.set(-.5,.5,0),_i,a,vi,i,r),jr.set(0,1),o=t.ray.intersectTriangle(Hs,Vs,Ki,!1,$i),o===null))return;const l=t.ray.origin.distanceTo($i);l<t.near||l>t.far||e.push({distance:l,point:$i.clone(),uv:He.getInterpolation($i,Hs,Ki,Vs,zl,jr,Gl,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(s,t,e,n,i,r){xi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Yi.x=r*xi.x-i*xi.y,Yi.y=i*xi.x+r*xi.y):Yi.copy(xi),s.copy(t),s.x+=Yi.x,s.y+=Yi.y,s.applyMatrix4(Xc)}class wo extends Nn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cr=new R,hr=new R,Hl=new se,ji=new Mo,Xs=new ms,Zr=new R,Vl=new R;class qc extends ce{constructor(t=new ye,e=new wo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)cr.fromBufferAttribute(e,i-1),hr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=cr.distanceTo(hr);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Hl.copy(i).invert(),ji.copy(t.ray).applyMatrix4(Hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=h.getX(v),w=h.getX(v+1),b=qs(this,t,ji,l,u,w);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),u=qs(this,t,ji,l,v,m);u&&e.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=qs(this,t,ji,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=qs(this,t,ji,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qs(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(cr.fromBufferAttribute(a,i),hr.fromBufferAttribute(a,r),e.distanceSqToSegment(cr,hr,Zr,Vl)>n)return;Zr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zr);if(!(l<t.near||l>t.far))return{distance:l,point:Vl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Wl=new R,Xl=new R;class K0 extends qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wl.distanceTo(Xl);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $c extends Nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ql=new se,Qa=new Mo,$s=new ms,Ys=new R;class j0 extends ce{constructor(t=new ye,e=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;ql.copy(i).invert(),Qa.copy(t.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Ys.fromBufferAttribute(d,m),$l(Ys,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Ys.fromBufferAttribute(d,g),$l(Ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(s,t,e,n,i,r,a){const o=Qa.distanceSqToPoint(s);if(o<e){const l=new R;Qa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Eo extends Ae{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new Ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ve extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const v=[],m=n/2;let u=0;w(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(p,2));function w(){const _=new R,L=new R;let C=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,E=M*(e-t)+t;for(let D=0;D<=i;D++){const I=D/i,B=I*l+o,W=Math.sin(B),V=Math.cos(B);L.x=E*W,L.y=-M*n+m,L.z=E*V,d.push(L.x,L.y,L.z),_.set(W,A,V).normalize(),f.push(_.x,_.y,_.z),p.push(I,1-M),S.push(g++)}v.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=v[S][P],E=v[S+1][P],D=v[S+1][P+1],I=v[S][P+1];(t>0||S!==0)&&(h.push(M,E,I),C+=3),(e>0||S!==r-1)&&(h.push(E,D,I),C+=3)}c.addGroup(u,C,0),u+=C}function b(_){const L=g,C=new Ot,A=new R;let P=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const E=g;for(let D=0;D<=i;D++){const B=D/i*l+o,W=Math.cos(B),V=Math.sin(B);A.x=S*V,A.y=m*M,A.z=S*W,d.push(A.x,A.y,A.z),f.push(0,M,0),C.x=W*.5+.5,C.y=V*.5*M+.5,p.push(C.x,C.y),g++}for(let D=0;D<i;D++){const I=L+D,B=E+D;_===!0?h.push(B,B+1,I):h.push(B+1,B,I),P+=3}c.addGroup(u,P,_===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dr extends Ve{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new dr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xr extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new R,f=new R,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const w=[],b=u/n;let _=0;u===0&&a===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const C=L/e;d.x=-t*Math.cos(i+C*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(i+C*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(C+_,1-b),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const b=h[u][w+1],_=h[u][w],L=h[u+1][w],C=h[u+1][w+1];(u!==0||a>0)&&p.push(b,_,C),(u!==n-1||l<Math.PI)&&p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class we extends Nn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yc extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Z0 extends Yc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Jr=new se,Yl=new R,Kl=new R;class J0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),Jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Q0 extends J0{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends Yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new Q0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function Oi(){const s=window.visualViewport;return{w:Math.round(s?.width??window.innerWidth),h:Math.round(s?.height??window.innerHeight)}}function eg(s){window.addEventListener("resize",s),window.visualViewport?.addEventListener("resize",s)}class Yn{touch=null;keys=new Set;smoothed={pitch:0,roll:0,yaw:0};throttle=.7;afterburner=!1;mouseFly=!1;mouseStick={x:0,y:0};mousePx={x:0,y:0};padButtonsPrev=[];padActivated=!1;firing=!1;mouseDown=!1;cameraToggleRequested=!1;padlock=!1;respawnRequested=!1;menuRequested=!1;weaponToggleRequested=!1;lockRequested=!1;flareRequested=!1;muteToggleRequested=!1;blackBoxRequested=!1;pauseRequested=!1;wingmanOrderRequested=!1;onKeyDown=t=>{if(!t.repeat&&(this.keys.add(t.code),t.code==="KeyC"&&(this.cameraToggleRequested=!0),t.code==="KeyL"&&(this.padlock=!0),t.code==="KeyR"&&(this.respawnRequested=!0),t.code==="Escape"&&(this.menuRequested=!0),t.code==="KeyM"&&(this.mouseFly=!this.mouseFly),t.code==="KeyF"&&(this.weaponToggleRequested=!0),t.code==="KeyT"&&(this.lockRequested=!0),t.code==="KeyX"&&(this.flareRequested=!0),t.code==="KeyV"&&(this.muteToggleRequested=!0),t.code==="KeyK"&&(this.blackBoxRequested=!0),t.code==="KeyP"&&(this.pauseRequested=!0),t.code==="KeyG"&&(this.wingmanOrderRequested=!0),t.code==="Tab"&&(this.afterburner=!this.afterburner,t.preventDefault()),t.code.startsWith("Digit"))){const e=Number(t.code.slice(5));this.throttle=e===0?1:e/10}};onKeyUp=t=>{this.keys.delete(t.code),t.code==="KeyL"&&(this.padlock=!1)};onMouseMove=t=>{this.mousePx.x=t.clientX,this.mousePx.y=t.clientY};onMouseDown=t=>{t.button===0&&(this.mouseDown=!0)};onMouseUp=t=>{t.button===0&&(this.mouseDown=!1)};attach(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp)}detach(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),this.keys.clear(),this.mouseDown=!1}axis(t,e){let n=0;return t.some(i=>this.keys.has(i))&&(n-=1),e.some(i=>this.keys.has(i))&&(n+=1),n}static dead(t,e=.1){return Math.abs(t)<e?0:(t-Math.sign(t)*e)/(1-e)}update(t,e){const n=this.axis(["KeyW","ArrowUp"],["KeyS","ArrowDown"]),i=this.axis(["KeyA","ArrowLeft"],["KeyD","ArrowRight"]),r=this.axis(["KeyQ"],["KeyE"]),a=e/.18,o=(v,m)=>{const u=v+Math.sign(m-v)*Math.min(Math.abs(m-v),a);return Math.abs(m)<.01?u*Math.max(0,1-e/.05):u};this.smoothed.pitch=o(this.smoothed.pitch,n),this.smoothed.roll=o(this.smoothed.roll,i),this.smoothed.yaw=o(this.smoothed.yaw,r);let l=this.smoothed.pitch,c=this.smoothed.roll,h=this.smoothed.yaw,d=this.keys.has("KeyB"),f=!1;if(this.mouseFly){const v=Oi(),m=.33*Math.min(v.w,v.h);this.mouseStick.x=Math.max(-1,Math.min(1,(this.mousePx.x-v.w/2)/m)),this.mouseStick.y=Math.max(-1,Math.min(1,(this.mousePx.y-v.h/2)/m));const u=Yn.dead(this.mouseStick.x,.06),w=Yn.dead(this.mouseStick.y,.06);Math.abs(u)>Math.abs(c)&&(c=u),Math.abs(w)>Math.abs(l)&&(l=w)}if(this.touch?.stick.active){const v=this.touch.stick;Math.abs(v.x)>Math.abs(c)&&(c=v.x),Math.abs(v.y)>Math.abs(l)&&(l=v.y),h=c*.3}this.touch?.brake&&(d=!0);const p=typeof navigator<"u"&&navigator.getGamepads?navigator.getGamepads():[],g=p&&Array.from(p).find(v=>v&&v.connected);if(g&&!this.padActivated&&(this.padActivated=g.axes.some(v=>Math.abs(v)>.35)||g.buttons.some(v=>v.pressed)),g&&this.padActivated){const v=Yn.dead(g.axes[0]??0),m=Yn.dead(g.axes[1]??0),u=Yn.dead(g.axes[2]??0);Math.abs(v)>Math.abs(c)&&(c=v),Math.abs(m)>Math.abs(l)&&(l=m),Math.abs(u)>Math.abs(h)&&(h=u);const w=g.buttons[7]?.value??0,b=g.buttons[6]?.value??0;this.throttle=Math.max(0,Math.min(1,this.throttle+(w-b)*e*.6));const _=L=>!!g.buttons[L]?.pressed;_(0)&&!this.padButtonsPrev[0]&&(this.afterburner=!this.afterburner),_(1)&&!this.padButtonsPrev[1]&&(this.flareRequested=!0),_(2)&&(d=!0),_(3)&&!this.padButtonsPrev[3]&&(this.cameraToggleRequested=!0),_(5)&&(f=!0),_(4)&&!this.padButtonsPrev[4]&&(this.weaponToggleRequested=!0),this.padButtonsPrev=g.buttons.map(L=>L.pressed)}(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&(this.throttle=Math.min(1,this.throttle+e*.5)),(this.keys.has("ControlLeft")||this.keys.has("ControlRight"))&&(this.throttle=Math.max(0,this.throttle-e*.5)),t.pitch=l,t.roll=c,t.yaw=h,t.throttle=this.throttle,t.afterburner=this.afterburner,t.brake=d,this.firing=this.keys.has("Space")||this.mouseFly&&this.mouseDown||f||!!this.touch?.firing}}function xe(s,t){let e=Math.imul(s|0,374761393)^Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function ng(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=xe(e,n),c=xe(e+1,n),h=xe(e,n+1),d=xe(e+1,n+1);return(l+(c-l)*a)*(1-o)+(h+(d-h)*a)*o}function ig(s,t,e){let n=0,i=.5,r=1;for(let a=0;a<e;a++)n+=i*ng(s*r,t*r),i*=.5,r*=2.05;return n}function sg(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Eo(s);return n.colorSpace=Pe,n}function Qr(s){const n=document.createElement("canvas");n.width=256,n.height=128;const i=n.getContext("2d"),r=11;for(let o=0;o<r;o++){const l=o/(r-1),c=256*(.14+.72*l)+(xe(s*31+o,5)-.5)*22,h=128*.62-Math.sin(l*Math.PI)*128*.22*(.6+xe(s,o)*.8),d=(128*.16+xe(s*7,o)*128*.2)*(.7+Math.sin(l*Math.PI)*.5),f=i.createRadialGradient(c,h,0,c,h,d);f.addColorStop(0,"rgba(255,255,255,0.85)"),f.addColorStop(.6,"rgba(255,255,255,0.4)"),f.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=f,i.fillRect(c-d,h-d,d*2,d*2)}const a=new Eo(n);return a.colorSpace=Pe,a}const Kc={wwi:["flanders","coast"],modern:["desert","arctic","ocean"]};function rg(s){const t=Kc[s];return t[Math.floor(Math.random()*t.length)]}function jc(){const s=["dawn","day","day","day","dusk","night"],t=["clear","clear","scattered","scattered","overcast"];return{time:s[Math.floor(Math.random()*s.length)],weather:t[Math.floor(Math.random()*t.length)]}}const Mi=16e3,jl=220;function ag(s){const t=Math.min(Math.max(s,0),1);return t*t*(3-2*t)}function og(s,t,e){const n=t??(s==="modern"?"desert":"flanders"),i=e??{time:"day",weather:"scattered"},r=new Oe,a=s==="modern"?900:120,o=n==="ocean"?1/3e3:s==="modern"?1/4200:1/1600,l=n==="ocean"||n==="coast",c=(k,J)=>{const Q=ig(k*o,J*o,5);if(n==="ocean")return Math.pow(Q,1.6)*800-300;let rt=Math.pow(Q,s==="modern"?1.8:1.2)*a;return s==="modern"&&(rt=Math.max(rt-60,0)*1.1),n==="coast"&&(rt-=ag((-k-2200)/2e3)*260),rt},h=(k,J)=>l?Math.max(c(k,J),0):c(k,J),d=new xn(Mi,Mi,jl,jl);d.rotateX(-Math.PI/2);const f=d.attributes.position,p=new Float32Array(f.count*3),g=new Tt;for(let k=0;k<f.count;k++){const J=f.getX(k),Q=f.getZ(k),rt=c(J,Q);f.setY(k,rt);const dt=Math.max(rt,0)/a,kt=xe(Math.floor(J/90),Math.floor(Q/90));if(rt<0){const q=Math.min(-rt/220,1);g.setRGB(.55-q*.42,.55-q*.34,.42-q*.18)}else n==="flanders"||n==="coast"?(kt>.82?g.setRGB(.32+dt*.1,.26,.16):g.setRGB(.24+dt*.15,.34+dt*.12,.16),kt<.08&&g.multiplyScalar(.8),n==="coast"&&rt<8&&g.setRGB(.72,.66,.5)):n==="arctic"?(dt<.05?g.setRGB(.8,.85,.9):dt<.45?g.setRGB(.44+dt*.2,.47+dt*.2,.52+dt*.2):g.setRGB(.88,.91,.96),kt>.88&&g.multiplyScalar(.92)):n==="ocean"?(rt<12?g.setRGB(.8,.72,.52):dt<.3?g.setRGB(.25+dt*.2,.45+dt*.1,.24):g.setRGB(.5+dt*.2,.5+dt*.18,.46+dt*.15),kt>.9&&g.multiplyScalar(.9)):(dt<.05?g.setRGB(.78,.68,.5):dt<.5?g.setRGB(.62+dt*.15,.4+dt*.1,.28):g.setRGB(.7+dt*.15,.62+dt*.12,.55),kt>.9&&g.multiplyScalar(.9));p[k*3]=g.r,p[k*3+1]=g.g,p[k*3+2]=g.b}d.setAttribute("color",new Me(p,3)),d.computeVertexNormals();const v=new Et(d,new we({vertexColors:!0,flatShading:!0}));if(v.name="terrain",r.add(v),l){const k=new Et(new xn(Mi*4,Mi*4),new we({color:n==="ocean"?1990030:4025204,transparent:!0,opacity:.88}));k.rotation.x=-Math.PI/2,k.position.y=.2,r.add(k)}const m={dawn:{pos:[4500,1400,-1200],color:16756848,mult:.62},day:{pos:[-3e3,5e3,-2e3],color:16777215,mult:1},dusk:{pos:[-4800,1100,1600],color:16747088,mult:.55},night:{pos:[-2e3,4200,2500],color:11059199,mult:.13}}[i.time],u=i.weather==="overcast"?.75:1,w=new tg(m.color,(s==="modern"?2.6:1.9)*m.mult*u);w.position.set(m.pos[0],m.pos[1],m.pos[2]),r.add(w);const b=w.position.clone().normalize(),_=sg(),L=(k,J,Q)=>{const rt=new hs(new Fi({map:_,color:Q,transparent:!0,opacity:J,blending:os,depthWrite:!1,fog:!1}));return rt.position.copy(b).multiplyScalar(18e3),rt.scale.setScalar(k),rt};if(i.time==="night"){r.add(L(1100,.85,15265535));const k=new Float32Array(450*3);for(let Q=0;Q<450;Q++){const rt=xe(Q,11)*Math.PI*2,dt=.06+xe(Q,13)*1.4;k[Q*3]=Math.cos(dt)*Math.sin(rt)*19e3,k[Q*3+1]=Math.sin(dt)*19e3,k[Q*3+2]=Math.cos(dt)*Math.cos(rt)*19e3}const J=new ye;J.setAttribute("position",new Me(k,3)),r.add(new j0(J,new $c({color:14674175,size:42,sizeAttenuation:!0,fog:!1,transparent:!0,opacity:.9})))}else{const k=i.time!=="day";r.add(L(2600,.9,k?16756832:16774096),L(7e3,.28,k?16747088:s==="modern"?16771504:16115400))}const C=[Qr(1),Qr(2),Qr(3)],A=i.weather==="clear"?7:i.weather==="scattered"?26:55,P=i.weather==="overcast"?1.6:1;let S=s==="modern"?2400:1100;i.weather==="overcast"&&(S*=.72);const M=i.time==="night"?2765896:i.time==="dawn"?16767160:i.time==="dusk"?16762016:16777215;for(let k=0;k<A;k++){const J=new hs(new Fi({map:C[k%C.length],color:M,transparent:!0,depthWrite:!1,opacity:(i.weather==="overcast"?.66:.5)+xe(k,7)*.3}));J.position.set((xe(k,1)-.5)*Mi*.9,S+xe(k,2)*(i.weather==="overcast"?350:900),(xe(k,3)-.5)*Mi*.9),J.scale.set((500+xe(k,4)*700)*P,(130+xe(k,5)*160)*P,1),r.add(J)}const E=i.time==="night"?.22:i.time==="day"?1:.72,D=new Z0(i.time==="night"?2767448:s==="modern"?12572927:13621456,s==="modern"?9072463:4016687,(s==="modern"?.9:.8)*E*(i.weather==="overcast"?.85:1));r.add(D);const B={desert:{sky:8042216,fog:13621730,density:55e-6},arctic:{sky:10274024,fog:14871282,density:4e-5},ocean:{sky:7319784,fog:12901612,density:4e-5},flanders:{sky:10466493,fog:12174530,density:13e-5},coast:{sky:10335940,fog:12175564,density:1e-4}}[n],W=new Tt(B.sky),V=new Tt(B.fog);let Y=B.density;return i.time==="dawn"?(W.lerp(new Tt(16751194),.28).multiplyScalar(.92),V.lerp(new Tt(16756864),.35)):i.time==="dusk"?(W.lerp(new Tt(13656122),.35).multiplyScalar(.82),V.lerp(new Tt(13664352),.4).multiplyScalar(.88)):i.time==="night"&&(W.multiplyScalar(.1).lerp(new Tt(660516),.7),V.multiplyScalar(.12).lerp(new Tt(66e4),.6)),i.weather==="overcast"&&(W.lerp(V,i.time==="night"?.3:.55),Y*=1.7),{terrainHeight:h,theater:n,waterY:l?0:null,group:r,skyColor:W,fogColor:V,fogDensity:Y}}function lg(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Eo(s)}const cg=96;class hg{puffs=[];texture=lg();constructor(t){for(let e=0;e<cg;e++){const n=new Fi({map:this.texture,transparent:!0,depthWrite:!1,opacity:0}),i=new hs(n);i.visible=!1,t.add(i),this.puffs.push({sprite:i,life:0,maxLife:1,growth:0,baseOpacity:1})}}spawn(t,e){const n=this.puffs.find(i=>i.life<=0);n&&(n.life=n.maxLife=e.life??1.6,n.growth=e.growth??3,n.baseOpacity=e.opacity??.55,n.sprite.visible=!0,n.sprite.position.copy(t),n.sprite.scale.setScalar(e.size),n.sprite.material.color.setHex(e.color??2236962))}explosion(t){this.spawn(t,{size:20,growth:55,life:.25,color:16777215,opacity:1}),this.spawn(t,{size:14,growth:30,life:.55,color:16752688,opacity:.95}),this.spawn(t,{size:8,growth:20,life:.9,color:16733456,opacity:.9}),this.spawn(t,{size:10,growth:130,life:.45,color:16769200,opacity:.35});for(let e=0;e<9;e++){const n=new R((Math.random()-.5)*16,Math.random()*12-2,(Math.random()-.5)*16);this.spawn(n.add(t),{size:4+Math.random()*5,growth:4+Math.random()*4,life:1.8+Math.random()*1.6,color:Math.random()<.3?5583650:1710618,opacity:.6})}}update(t){for(const e of this.puffs){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}const n=e.life/e.maxLife;e.sprite.scale.addScalar(e.growth*t),e.sprite.material.opacity=e.baseOpacity*n}}dispose(){for(const t of this.puffs)t.sprite.material.dispose(),t.sprite.removeFromParent();this.texture.dispose()}}const Zl=1.94384,dg=2.23694,rr=3.28084,pn=180/Math.PI;class Zc{constructor(t,e,n){this.container=t,this.model=e,this.input=n,this.canvas=document.createElement("canvas"),this.canvas.style.cssText="position:absolute;inset:0;pointer-events:none;",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}canvas;ctx;w=0;h=0;crashEl=null;resize(){const t=Math.min(window.devicePixelRatio||1,2),{w:e,h:n}=Oi();this.w=e,this.h=n,this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`,this.canvas.width=e*t,this.canvas.height=n*t,this.ctx.setTransform(t,0,0,t,0,0)}showCrash(t="✝ CRASHED — press R to fly again"){if(this.crashEl)return;this.crashEl=document.createElement("div"),this.crashEl.className="crash-banner";const e=navigator.maxTouchPoints>0;this.crashEl.textContent=e?t.replace(/press R.*$/,"tap to fly again"):t,this.crashEl.addEventListener("pointerdown",()=>{this.input.respawnRequested=!0}),this.container.appendChild(this.crashEl)}clearCrash(){this.crashEl?.remove(),this.crashEl=null}dispose(){this.clearCrash(),this.canvas.remove()}}const Ce="rgba(80,255,130,0.95)",je="rgba(80,255,130,0.55)";class ug extends Zc{maxG=1;update(t,e,n){const i=this.ctx,r=this.model.sample,{w:a,h:o}=this,l=a/2,c=o/2,h=o/32;this.maxG=Math.max(this.maxG,r.gLoad),i.clearRect(0,0,a,o),i.strokeStyle=Ce,i.fillStyle=Ce,i.lineWidth=1.6,i.font="15px Consolas, Menlo, monospace",i.textBaseline="middle",i.shadowColor="rgba(60,255,110,0.6)",i.shadowBlur=4;const d=r.pitchRad*pn,f=r.bankRad;i.save(),i.translate(l,c),i.rotate(f),i.beginPath(),i.rect(-a*.24,-o*.34,a*.48,o*.68),i.clip();for(let E=-90;E<=90;E+=5){const D=(d-E)*h;if(Math.abs(D)>o*.36)continue;const I=E===0?a*.22:a*.085,B=E===0?a*.05:a*.03;i.beginPath(),E<0&&i.setLineDash([8,6]);for(const W of[-1,1])i.moveTo(W*B,D),i.lineTo(W*(B+I),D),E!==0&&i.lineTo(W*(B+I),D+Math.sign(E)*7);i.stroke(),i.setLineDash([]),E!==0&&E%10===0&&(i.textAlign="left",i.fillText(String(Math.abs(E)),B+I+6,D),i.textAlign="right",i.fillText(String(Math.abs(E)),-(B+I+6),D))}i.restore();const p=l+r.betaRad*pn*h,g=c+r.alphaRad*pn*h;i.beginPath(),i.arc(p,g,7,0,Math.PI*2),i.moveTo(p-7,g),i.lineTo(p-17,g),i.moveTo(p+7,g),i.lineTo(p+17,g),i.moveTo(p,g-7),i.lineTo(p,g-13),i.stroke(),i.beginPath(),i.moveTo(l-14,c),i.lineTo(l-5,c),i.lineTo(l,c+6),i.lineTo(l+5,c),i.lineTo(l+14,c),i.stroke();const v=(r.headingRad*pn+360)%360,m=Math.max(o*.075,42),u=a*.016;i.textAlign="center";for(let E=-25;E<=25;E++){const D=(Math.round(v)+E+360)%360;if(D%5!==0)continue;const I=(D-v+540)%360-180,B=l+I*u;i.beginPath(),i.moveTo(B,m),i.lineTo(B,m-(D%10===0?10:6)),i.stroke(),D%10===0&&i.fillText(String(D/10).padStart(2,"0"),B,m-20)}i.beginPath(),i.moveTo(l-6,m+10),i.lineTo(l,m+2),i.lineTo(l+6,m+10),i.stroke(),i.strokeRect(l-26,m+12,52,22),i.fillText(String(Math.round(v)).padStart(3,"0"),l,m+23);const w=Math.max(a*.2,290),b=Math.min(a*.8,a-160),_=c-12;i.textAlign="right",i.strokeRect(w-78,_,78,26),i.font="19px Consolas, Menlo, monospace",i.fillText(String(Math.round(r.speedMs*Zl)),w-8,_+13),i.font="14px Consolas, Menlo, monospace",i.fillText(`M ${r.mach.toFixed(2)}`,w-8,_+42);const L=Math.round(this.model.controls.throttle*100);if(i.fillText(`THR ${L}${this.model.controls.afterburner?" AB":""}${this.model.controls.brake?" BRK":""}`,w-8,_+62),n.weapon){const E=n.weapon,D=E.kind==="gun"?`GUN ${n.ammo}`:`${E.name} ×${E.missiles}`;E.kind==="gun"&&n.ammo<120&&(i.fillStyle="rgba(255,120,60,0.95)"),i.fillText(D,w-8,_+82),i.fillStyle=Ce,i.fillStyle=je,i.fillText(`FLR ${E.flares}`,w-8,_+102),i.fillStyle=Ce,(E.kind==="msl"||E.kind==="bvr")&&!E.locked&&i.fillText("NO LOCK",w-8,_+122)}else i.fillText(`GUN ${n.ammo}`,w-8,_+82);i.textAlign="left",i.strokeRect(b,_,92,26),i.font="19px Consolas, Menlo, monospace",i.fillText(String(Math.round(r.altitudeM*rr)),b+8,_+13),i.font="14px Consolas, Menlo, monospace",i.fillStyle=je,i.fillText(`R ${Math.max(0,Math.round(t*rr))}`,b+8,_+42),i.fillStyle=Ce;const C=r.climbRateMs*rr*60;i.fillText(`${C>=0?"+":""}${Math.round(C/10)*10}`,b+8,_+62),i.textAlign="left",i.fillText(`G  ${r.gLoad.toFixed(1)}`,w-78,_-64),i.fillStyle=je,i.fillText(`MX ${this.maxG.toFixed(1)}`,w-78,_-44),i.fillStyle=Ce,i.fillText(`α  ${(r.alphaRad*pn).toFixed(1)}`,w-78,_-24);const A=o*.17,P=c+o*.27;for(const E of[-60,-45,-30,-20,-10,0,10,20,30,45,60]){const D=(E-90)*Math.PI/180,I=E%30===0?12:7,B=l+Math.cos(D)*A,W=P+Math.sin(D)*A,V=l+Math.cos(D)*(A+I),Y=P+Math.sin(D)*(A+I);i.beginPath(),i.moveTo(B,W),i.lineTo(V,Y),i.stroke()}const S=(-f*pn-90)*Math.PI/180;i.beginPath(),i.moveTo(l+Math.cos(S)*(A-3),P+Math.sin(S)*(A-3)),i.lineTo(l+Math.cos(S)*(A-14),P+Math.sin(S)*(A-14)),i.stroke();const M=n.target;if(M)if(M.onScreen)i.strokeStyle=Ce,i.strokeRect(M.sx-16,M.sy-16,32,32),M.locked&&(i.beginPath(),i.arc(M.sx,M.sy,26,0,Math.PI*2),i.stroke(),i.font="12px Consolas, Menlo, monospace",i.textAlign="center",i.fillText("LOCK",M.sx,M.sy-34)),i.font="13px Consolas, Menlo, monospace",i.textAlign="center",i.fillStyle=Ce,i.fillText(`${Math.round(M.rangeM)}m`,M.sx,M.sy+30);else{let E=M.dirX,D=-M.dirY;M.behind&&(E=-E,D=-D);const I=Math.max(Math.abs(E),Math.abs(D),1e-4),B=l+E/I*a*.42,W=c+D/I*o*.4,V=Math.atan2(D,E);i.save(),i.translate(B,W),i.rotate(V),i.fillStyle=je,i.beginPath(),i.moveTo(12,0),i.lineTo(-6,-7),i.lineTo(-6,7),i.closePath(),i.fill(),i.restore()}if(n.mission){const E=n.mission;i.textAlign="center",i.font="14px Consolas, Menlo, monospace",i.fillStyle=E.state==="failed"?"rgba(255,90,60,0.95)":E.state==="complete"?Ce:je;const D=(E.distanceM/1e3).toFixed(1),I=String(Math.round((E.bearingRad*pn%360+360)%360)).padStart(3,"0"),B=`${E.state==="running"?E.text:E.text.toUpperCase()} · BRG ${I} · ${D} KM`;i.fillText(B,l,m+52)}if(i.font="14px Consolas, Menlo, monospace",i.textAlign="right",i.fillStyle=Ce,i.fillText(`KILLS ${n.kills}${n.best?` · BEST ${n.best}`:""}`,a-24,28),n.hpFrac<1&&(i.fillStyle=n.hpFrac>.5?je:"rgba(255,90,60,0.9)",i.fillText(`AIRFRAME ${Math.round(n.hpFrac*100)}%`,a-24,48)),n.wingman){const E=n.wingman.name?n.wingman.name.toUpperCase():"WM";i.fillStyle=n.wingman.alive?je:"rgba(255,90,60,0.75)",i.fillText(n.wingman.alive?`${E} ${n.wingman.mode.toUpperCase()} [G]`:`${E} DOWN`,a-24,n.hpFrac<1?68:48)}if(n.ccip?.onScreen&&(i.strokeStyle=Ce,i.lineWidth=1.8,i.beginPath(),i.arc(n.ccip.sx,n.ccip.sy,9,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(n.ccip.sx,n.ccip.sy,1.6,0,Math.PI*2),i.fill(),i.save(),i.globalAlpha=.45,i.beginPath(),i.moveTo(p,g+10),i.lineTo(n.ccip.sx,n.ccip.sy-9),i.stroke(),i.restore()),n.contacts&&this.drawRadarScope(n),n.approach){const E=n.approach,D=a-84,I=c,B=52;i.strokeStyle=Ce,i.fillStyle=Ce,i.lineWidth=1.4,i.beginPath(),i.moveTo(D-16,I),i.lineTo(D-5,I),i.moveTo(D+5,I),i.lineTo(D+16,I),i.stroke();for(const Y of[-1,-.5,.5,1])i.beginPath(),i.moveTo(D-4,I-Y*B),i.lineTo(D+4,I-Y*B),i.stroke();const W=I-Math.max(-1.4,Math.min(1.4,E.dev))*B,V=Math.abs(E.dev)<.25;i.fillStyle=V?"rgba(120,255,150,1)":Math.abs(E.dev)>.9?"rgba(255,90,60,0.95)":"rgba(255,210,80,0.95)",i.beginPath(),i.arc(D,W,5,0,Math.PI*2),i.fill(),i.font="12px Consolas, Menlo, monospace",i.textAlign="center",i.fillStyle=je,i.fillText("GS",D,I-B-16),i.fillStyle=E.speed==="ON SPD"?Ce:"rgba(255,210,80,0.95)",i.fillText(E.speed,D,I+B+18),i.fillStyle=je,i.fillText(`${(E.distanceM/1e3).toFixed(1)}`,D,I+B+34)}if(i.textAlign="center",r.stalled&&(i.fillStyle="rgba(255,70,60,0.95)",i.font="bold 22px Consolas, Menlo, monospace",Math.floor(performance.now()/250)%2===0&&i.fillText("STALL",l,c-o*.2)),n.rwr&&!n.threat){const E=Math.floor(performance.now()/400)%2===0;i.fillStyle="rgba(255,210,80,0.9)",E&&(i.font="bold 16px Consolas, Menlo, monospace",i.fillText("SPIKE",l,c+o*.13));let D=n.rwr.dirX,I=-n.rwr.dirY;n.rwr.behind&&(D=-D,I=-I);const B=Math.max(Math.abs(D),Math.abs(I),1e-4),W=l+D/B*a*.3,V=c+I/B*o*.28;i.save(),i.translate(W,V),i.rotate(Math.atan2(I,D)),i.beginPath(),i.moveTo(10,0),i.lineTo(-5,-6),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore()}if(n.threat){Math.floor(performance.now()/180)%2===0&&(i.fillStyle="rgba(255,60,50,0.95)",i.font="bold 24px Consolas, Menlo, monospace",i.fillText("MISSILE",l,c+o*.16));let D=n.threat.dirX,I=-n.threat.dirY;n.threat.behind&&(D=-D,I=-I);const B=Math.max(Math.abs(D),Math.abs(I),1e-4),W=l+D/B*a*.34,V=c+I/B*o*.32;i.save(),i.translate(W,V),i.rotate(Math.atan2(I,D)),i.fillStyle="rgba(255,70,50,0.9)",i.beginPath(),i.moveTo(14,0),i.lineTo(-7,-8),i.lineTo(-7,8),i.closePath(),i.fill(),i.restore()}if(this.input.mouseFly){i.fillStyle=je,i.font="12px Consolas, Menlo, monospace",i.fillText("MOUSE FLY",l,o-18);const E=.33*Math.min(a,o);i.beginPath(),i.arc(l+this.input.mouseStick.x*E,c+this.input.mouseStick.y*E,4,0,Math.PI*2),i.stroke()}}drawRadarScope(t){const e=this.ctx,{h:n}=this,i=Math.min(132,n*.24),r=20,a=n-26,o=a-i,l=Math.PI/3;e.save(),e.strokeStyle="rgba(60,255,110,0.55)",e.fillStyle=je,e.lineWidth=1,e.font="10px Consolas, Menlo, monospace",e.strokeRect(r,o,i,i),e.setLineDash([2,4]);for(const h of[1/3,2/3]){const d=a-i*h;e.beginPath(),e.moveTo(r,d),e.lineTo(r+i,d),e.stroke()}e.beginPath(),e.moveTo(r+i/2,o),e.lineTo(r+i/2,a),e.stroke(),e.setLineDash([]),e.textAlign="left",e.fillText("RDR 30",r+2,o-7);let c=null;for(const h of t.contacts){const d=r+i/2+h.bearingRad/l*(i/2),f=a-Math.min(h.rangeM/3e4,1)*i;h.hostile?(e.fillStyle=h.bugged?"rgba(120,255,150,1)":"rgba(60,255,110,0.85)",e.fillRect(d-2.5,f-1.5,5,3)):(e.fillStyle="rgba(120,180,255,0.8)",e.beginPath(),e.arc(d,f,2,0,Math.PI*2),e.fill()),h.bugged&&(c={x:d,y:f,rangeM:h.rangeM,closureMs:h.closureMs})}if(c&&(e.strokeStyle="rgba(120,255,150,0.95)",e.strokeRect(c.x-5.5,c.y-4.5,11,9),e.fillStyle="rgba(120,255,150,0.95)",e.textAlign="left",e.fillText(`${(c.rangeM/1e3).toFixed(1)} km`,r+2,a+10),c.closureMs!==void 0)){const h=Math.round(c.closureMs*Zl);e.fillText(`${h>=0?"CLOSING":"OPENING"} ${Math.abs(h)} kt`,r+54,a+10)}e.restore()}}class fg extends Zc{update(t,e,n){const i=this.ctx,r=this.model.sample,{w:a,h:o}=this;i.clearRect(0,0,a,o);const l=r.speedMs*dg,c=r.altitudeM*rr,h=(r.headingRad*pn+360)%360,d=this.model.controls.brake,f=(d?.15:this.model.controls.throttle)*1250*(.85+.15*Math.random());if(!e){if(i.fillStyle="rgba(30,22,12,0.65)",i.fillRect(0,o-40,a,40),i.fillStyle="#f0dfae",i.font="16px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText(`ASI ${Math.round(l)} mph    ALT ${Math.round(c)} ft    CMP ${String(Math.round(h)).padStart(3,"0")}°    RPM ${Math.round(f)}    ROUNDS ${n.ammo}${r.stalled?"    ⚠ STALL":""}${d?"    BLIP":""}`,a/2,o-20),n.mission){const _=n.mission;i.font="15px Georgia, serif",i.fillStyle=_.state==="failed"?"#ff7a5a":_.state==="complete"?"#b8e6a0":"#f0e2c4",i.fillText(`${_.text} — ${(_.distanceM/1e3).toFixed(1)} km`,a/2,24)}if(n.approach){const _=n.approach;i.font="14px Georgia, serif",i.fillStyle=Math.abs(_.dev)<.25?"#b8e6a0":"#ffd98a",i.fillText(`Glide: ${_.dev>.25?"high":_.dev<-.25?"LOW":"good"} · ${_.speed==="ON SPD"?"speed good":_.speed.toLowerCase()}`,a/2,44)}this.drawBombsight(n),this.victories(n.kills);return}const p=a/2,g=o*.42;i.strokeStyle="rgba(25,25,25,0.9)",i.lineWidth=3,i.beginPath(),i.arc(p,g,34,0,Math.PI*2),i.stroke(),i.lineWidth=2;for(const[_,L,C,A]of[[-34,0,-14,0],[34,0,14,0],[0,-34,0,-14],[0,34,0,14]])i.beginPath(),i.moveTo(p+_,g+L),i.lineTo(p+C,g+A),i.stroke();i.fillStyle="rgba(200,170,60,0.95)",i.beginPath(),i.arc(p,g,3,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(48,34,18,0.95)",i.lineWidth=10,i.beginPath(),i.moveTo(a*.16,o*.72),i.lineTo(a*.3,o*.18),i.moveTo(a*.84,o*.72),i.lineTo(a*.7,o*.18),i.moveTo(a*.3,o*.185),i.quadraticCurveTo(a*.5,o*.13,a*.7,o*.185),i.stroke();const v=o*.74,m=i.createLinearGradient(0,v,0,o);m.addColorStop(0,"#3a2a16"),m.addColorStop(.15,"#57391c"),m.addColorStop(1,"#2a1c0e"),i.fillStyle=m,i.beginPath(),i.moveTo(a*.08,o),i.quadraticCurveTo(a*.1,v,a*.28,v-8),i.lineTo(a*.72,v-8),i.quadraticCurveTo(a*.9,v,a*.92,o),i.closePath(),i.fill();for(const _ of[-.075,.075]){const L=a/2+a*_;i.fillStyle="#1c1c1e",i.beginPath(),i.roundRect(L-13,o*.6,26,o*.16,6),i.fill(),i.fillStyle="#333338",i.fillRect(L-4,o*.575,8,o*.04)}const u=v+(o-v)*.44,w=Math.min(o*.085,a*.055),b=n.mission?n.mission.bearingRad*pn:void 0;if(this.gauge(a*.2,u,w,"M.P.H.",0,160,l,20),this.gauge(a*.36,u,w,"ALT ×1000",0,20,c/1e3,5),this.compass(a*.5,u+w*.15,w*.92,h,b),this.gauge(a*.64,u,w,"R.P.M. ×100",0,16,f/100,4),this.slipBall(a*.8,u,w,r.betaRad),n.mission){const _=n.mission;i.textAlign="center",i.font=`${Math.max(13,o*.022)}px Georgia, serif`,i.fillStyle=_.state==="failed"?"#ff7a5a":_.state==="complete"?"#b8e6a0":"#f0e2c4";const L=(_.distanceM/1e3).toFixed(1);i.fillText(`${_.text} — ${L} km`,a/2,o*.05)}if(n.approach){const _=n.approach;i.textAlign="center",i.font=`${Math.max(12,o*.019)}px Georgia, serif`,i.fillStyle=Math.abs(_.dev)<.25?"#b8e6a0":"#ffd98a",i.fillText(`Glide: ${_.dev>.25?"high":_.dev<-.25?"LOW":"good"} · ${_.speed==="ON SPD"?"speed good":_.speed.toLowerCase()}`,a/2,o*.05+22)}this.drawBombsight(n),r.stalled&&Math.floor(performance.now()/300)%2===0&&(i.fillStyle="rgba(255,80,60,0.9)",i.font="bold 20px Georgia, serif",i.textAlign="center",i.fillText("— STALL —",a/2,o*.3)),d&&(i.fillStyle="#ffd98a",i.font="15px Georgia, serif",i.textAlign="center",i.fillText("BLIP",a*.64,u+w+18)),this.input.mouseFly&&(i.fillStyle="rgba(240,223,174,0.6)",i.font="12px Georgia, serif",i.textAlign="center",i.fillText("MOUSE FLY",a/2,o-8)),i.fillStyle="#c9b98a",i.font=`${Math.max(11,o*.016)}px Georgia, serif`,i.textAlign="center",i.fillText(`ROUNDS ${n.ammo}`,a*.5,o*.985),n.hpFrac<1&&(i.fillStyle=n.hpFrac>.5?"#c9b98a":"#ff7a5a",i.fillText(n.hpFrac>.5?"AIRFRAME HOLED":"BADLY SHOT UP",a*.5,o*.755)),this.victories(n.kills)}drawBombsight(t){if(t.weapon?.kind!=="bomb")return;const e=this.ctx;if(e.textAlign="center",e.font="15px Georgia, serif",e.fillStyle=t.weapon.missiles>0?"#f0e2c4":"#a08a6a",e.fillText(`Cooper bombs: ${t.weapon.missiles} [F]`,this.w/2,this.h-28),t.ccip?.onScreen&&t.weapon.missiles>0){const{sx:n,sy:i}=t.ccip;e.strokeStyle="rgba(240,223,174,0.9)",e.lineWidth=2,e.beginPath(),e.moveTo(n-10,i),e.lineTo(n-3,i),e.moveTo(n+3,i),e.lineTo(n+10,i),e.moveTo(n,i-10),e.lineTo(n,i-3),e.moveTo(n,i+3),e.lineTo(n,i+10),e.stroke()}}victories(t){if(t<=0)return;const e=this.ctx;e.fillStyle="rgba(240,223,174,0.85)",e.font="16px Georgia, serif",e.textAlign="right",e.fillText(`VICTORIES  ${t}`,this.w-24,30)}gauge(t,e,n,i,r,a,o,l){const c=this.ctx,h=c.createRadialGradient(t-n*.3,e-n*.3,n*.2,t,e,n*1.15);h.addColorStop(0,"#d8b46a"),h.addColorStop(1,"#6d5423"),c.fillStyle=h,c.beginPath(),c.arc(t,e,n*1.12,0,Math.PI*2),c.fill(),c.fillStyle="#efe6cd",c.beginPath(),c.arc(t,e,n,0,Math.PI*2),c.fill();const d=Math.PI*.75,f=Math.PI*1.5;c.strokeStyle="#221a10",c.fillStyle="#221a10",c.textAlign="center",c.textBaseline="middle",c.font=`${Math.max(9,n*.22)}px Georgia, serif`;for(let g=r;g<=a;g+=l){const v=d+f*((g-r)/(a-r)),m=Math.cos(v),u=Math.sin(v);c.lineWidth=2,c.beginPath(),c.moveTo(t+m*n*.82,e+u*n*.82),c.lineTo(t+m*n*.95,e+u*n*.95),c.stroke(),c.fillText(String(g),t+m*n*.62,e+u*n*.62)}c.font=`${Math.max(8,n*.17)}px Georgia, serif`,c.fillText(i,t,e-n*.34);const p=d+f*Math.max(0,Math.min(1,(o-r)/(a-r)));c.strokeStyle="#101010",c.lineWidth=3,c.beginPath(),c.moveTo(t-Math.cos(p)*n*.15,e-Math.sin(p)*n*.15),c.lineTo(t+Math.cos(p)*n*.78,e+Math.sin(p)*n*.78),c.stroke(),c.fillStyle="#8a6d35",c.beginPath(),c.arc(t,e,n*.09,0,Math.PI*2),c.fill()}compass(t,e,n,i,r){const a=this.ctx,o=a.createRadialGradient(t-n*.3,e-n*.3,n*.2,t,e,n*1.15);o.addColorStop(0,"#d8b46a"),o.addColorStop(1,"#6d5423"),a.fillStyle=o,a.beginPath(),a.arc(t,e,n*1.12,0,Math.PI*2),a.fill(),a.fillStyle="#181614",a.beginPath(),a.arc(t,e,n,0,Math.PI*2),a.fill(),a.save(),a.translate(t,e),a.rotate(-i*Math.PI/180),a.fillStyle="#efe6cd",a.strokeStyle="#efe6cd",a.textAlign="center",a.textBaseline="middle",a.font=`${Math.max(10,n*.3)}px Georgia, serif`;const l=[["N",0],["E",90],["S",180],["W",270]];for(const[c,h]of l){const d=(h-90)*Math.PI/180;a.fillText(c,Math.cos(d)*n*.62,Math.sin(d)*n*.62)}for(let c=0;c<360;c+=30){const h=(c-90)*Math.PI/180;a.lineWidth=2,a.beginPath(),a.moveTo(Math.cos(h)*n*.82,Math.sin(h)*n*.82),a.lineTo(Math.cos(h)*n*.94,Math.sin(h)*n*.94),a.stroke()}if(a.restore(),a.strokeStyle="#ffd98a",a.lineWidth=3,a.beginPath(),a.moveTo(t,e-n*.98),a.lineTo(t,e-n*.72),a.stroke(),r!==void 0){const c=(r-i-90)*Math.PI/180;a.strokeStyle="#e8b64a",a.lineWidth=2.5,a.beginPath(),a.moveTo(t+Math.cos(c)*n*.2,e+Math.sin(c)*n*.2),a.lineTo(t+Math.cos(c)*n*.85,e+Math.sin(c)*n*.85),a.stroke(),a.fillStyle="#e8b64a",a.beginPath(),a.arc(t+Math.cos(c)*n*.85,e+Math.sin(c)*n*.85,2.5,0,Math.PI*2),a.fill()}}slipBall(t,e,n,i){const r=this.ctx;r.strokeStyle="#6d5423",r.lineWidth=n*.42,r.lineCap="round",r.beginPath(),r.arc(t,e-n*.9,n*1.5,Math.PI*.37,Math.PI*.63),r.stroke(),r.strokeStyle="#efe6cd",r.lineWidth=n*.32,r.beginPath(),r.arc(t,e-n*.9,n*1.5,Math.PI*.37,Math.PI*.63),r.stroke(),r.lineCap="butt";const a=Math.max(-1,Math.min(1,i*6)),o=Math.PI*.5+a*Math.PI*.1;r.fillStyle="#181614",r.beginPath(),r.arc(t+Math.cos(o)*n*1.5,e-n*.9+Math.sin(o)*n*1.5,n*.15,0,Math.PI*2),r.fill(),r.font=`${Math.max(8,n*.17)}px Georgia, serif`,r.fillStyle="#efe6cd",r.textAlign="center",r.fillText("SLIP",t,e+n*1.05)}}function pg(s,t,e){return t.spec.era==="modern"?new ug(s,t,e):new fg(s,t,e)}const mg={name:"Twin .303",rateHz:16,muzzleVelMs:745,dispersionRad:.01,magazine:500,damage:1,effectiveRangeM:280,tracerColor:16762995,muzzleOffsets:[-.35,.35]},gg={name:"M61A1",rateHz:100,muzzleVelMs:1035,dispersionRad:.004,magazine:511,damage:1,effectiveRangeM:1100,tracerColor:16746564,muzzleOffsets:[0]},ta=512,vg=9.80665,ea=.014;class _g{rounds=[];line;positions;colors;constructor(t){for(let n=0;n<ta;n++)this.rounds.push({active:!1,owner:-1,damage:0,life:0,color:new Tt,pos:new R,prev:new R,vel:new R});this.positions=new Float32Array(ta*6),this.colors=new Float32Array(ta*6);const e=new ye;e.setAttribute("position",new Me(this.positions,3)),e.setAttribute("color",new Me(this.colors,3)),this.line=new K0(e,new wo({vertexColors:!0,blending:os,transparent:!0,depthWrite:!1})),this.line.frustumCulled=!1,t.add(this.line)}spawn(t,e,n,i,r){const a=this.rounds.find(l=>!l.active);if(!a)return;a.active=!0,a.owner=t,a.damage=e.damage,a.life=3,a.color.setHex(e.tracerColor),a.pos.copy(n),a.prev.copy(n);const o=i.clone().add(new R((Math.random()-.5)*2*e.dispersionRad,(Math.random()-.5)*2*e.dispersionRad,(Math.random()-.5)*2*e.dispersionRad)).normalize();a.vel.copy(r).addScaledVector(o,e.muzzleVelMs)}update(t,e,n){const i=new R,r=new R;for(const a of this.rounds)if(a.active){if(a.life-=t,a.prev.copy(a.pos),a.vel.y-=vg*t,a.pos.addScaledVector(a.vel,t),a.life<=0||a.pos.y<n(a.pos.x,a.pos.z)){a.active=!1;continue}for(const o of e){if(o.id===a.owner)continue;i.subVectors(a.pos,a.prev),r.subVectors(o.position,a.prev);const l=Math.max(i.lengthSq(),1e-6),c=Math.max(0,Math.min(1,r.dot(i)/l));if(r.addScaledVector(i,-c).lengthSq()<o.radiusM*o.radiusM){o.onHit(a.damage,a.owner),a.active=!1;break}}}this.rebuildGeometry()}rebuildGeometry(){let t=0;for(const n of this.rounds){if(!n.active)continue;const i=t*6;this.positions[i]=n.pos.x,this.positions[i+1]=n.pos.y,this.positions[i+2]=n.pos.z,this.positions[i+3]=n.pos.x-n.vel.x*ea,this.positions[i+4]=n.pos.y-n.vel.y*ea,this.positions[i+5]=n.pos.z-n.vel.z*ea,this.colors[i]=n.color.r,this.colors[i+1]=n.color.g,this.colors[i+2]=n.color.b,this.colors[i+3]=n.color.r*.25,this.colors[i+4]=n.color.g*.25,this.colors[i+5]=n.color.b*.25,t++}const e=this.line.geometry;e.setDrawRange(0,t*2),e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.line.removeFromParent()}}class xg{constructor(t){this.spec=t,this.ammo=t.magazine}ammo;cooldown=0;muzzleIndex=0;reload(){this.ammo=this.spec.magazine,this.cooldown=0}regenFrac=0;regenerate(t,e){if(this.ammo>=this.spec.magazine)return;this.regenFrac+=e*t;const n=Math.floor(this.regenFrac);n>0&&(this.regenFrac-=n,this.ammo=Math.min(this.spec.magazine,this.ammo+n))}update(t,e,n,i,r,a,o){const l=1/this.spec.rateHz;if(this.cooldown=Math.max(this.cooldown-t,-l),!(!e||this.ammo<=0))for(;this.cooldown<=0&&this.ammo>0;){const c=this.spec.muzzleOffsets[this.muzzleIndex%this.spec.muzzleOffsets.length];this.muzzleIndex++;const h=new R(c,0,-2.5).applyQuaternion(r).add(i),d=new R(0,0,-1).applyQuaternion(r);o.spawn(n,this.spec,h,d,a),this.ammo--,this.cooldown+=l}}}const Ks={name:"AIM-9",seeker:"ir",accelMs2:230,burnS:5,maxSpeedMs:900,turnG:35,seekerConeRad:.7,lockRangeM:6e3,proxFuseM:9,damage:5,flareResistance:.74},Jl={name:"R-73",seeker:"ir",accelMs2:240,burnS:4.6,maxSpeedMs:880,turnG:40,seekerConeRad:.85,lockRangeM:5500,proxFuseM:9,damage:5,flareResistance:.5},na={name:"AIM-120",seeker:"radar",accelMs2:300,burnS:6.5,maxSpeedMs:1250,turnG:30,seekerConeRad:1,lockRangeM:15e3,proxFuseM:12,damage:6,flareResistance:.66},Ql={name:"R-77",seeker:"radar",accelMs2:280,burnS:6,maxSpeedMs:1150,turnG:28,seekerConeRad:1,lockRangeM:13e3,proxFuseM:12,damage:6,flareResistance:.55},Mg={name:"AIM-54",seeker:"radar",accelMs2:320,burnS:8,maxSpeedMs:1400,turnG:18,seekerConeRad:1,lockRangeM:24e3,proxFuseM:14,damage:8,flareResistance:.7},ia={name:"SA-8",seeker:"radar",accelMs2:260,burnS:7,maxSpeedMs:950,turnG:22,seekerConeRad:1.2,lockRangeM:8e3,proxFuseM:15,damage:6,flareResistance:.5},tc=9.80665,yg=18,sa=3.2;class Sg{constructor(t,e,n=Math.random){this.scene=t,this.fx=e,this.rng=n}missiles=[];flares=[];flareId=0;get activeMissiles(){return this.missiles.filter(t=>t.active).length}launch(t,e,n,i,r,a){const o=new Et(new Ve(.12,.12,2.4,6),new gs({color:15921906}));o.geometry.rotateX(Math.PI/2),this.scene.add(o),this.missiles.push({active:!0,spec:t,ownerId:e,targetId:a,decoy:null,guided:!0,pos:n.clone(),vel:r.clone().addScaledVector(i.clone().normalize(),30),age:0,smokeTimer:0,consideredFlares:new Set,mesh:o})}dropFlare(t,e,n,i="flare"){let r=null;r=new hs(new Fi({color:i==="flare"?16765562:14211304,transparent:!0,opacity:i==="flare"?.95:.6})),r.scale.setScalar(i==="flare"?3.2:4.5),this.scene.add(r),this.flares.push({id:this.flareId++,ownerId:t,kind:i,pos:e.clone(),vel:n.clone().multiplyScalar(.55).add(new R((this.rng()-.5)*20,-22,(this.rng()-.5)*20)),life:sa,sprite:r})}inboundFor(t){for(const e of this.missiles)if(e.active&&e.guided&&!e.decoy&&e.targetId===t)return e;return null}update(t,e,n,i){for(const r of this.flares)r.life-=t,r.vel.y-=tc*.6*t,r.vel.multiplyScalar(1-.8*t),r.pos.addScaledVector(r.vel,t),r.sprite&&(r.sprite.position.copy(r.pos),r.sprite.material.opacity=Math.max(0,r.life/sa),r.life<=0&&(r.sprite.removeFromParent(),r.sprite.material.dispose()));this.flares=this.flares.filter(r=>r.life>0);for(const r of this.missiles){if(!r.active)continue;r.age+=t;const a=r.vel.length();r.age<r.spec.burnS&&a<r.spec.maxSpeedMs?r.vel.addScaledVector(r.vel.clone().normalize(),r.spec.accelMs2*t):r.vel.multiplyScalar(1-.05*t);const o=e.find(d=>d.id===r.targetId);let l=null;if(r.decoy)l=r.decoy.life>0?r.decoy.pos:null,l||(r.guided=!1);else if(r.guided&&o?.alive){const d=o.position.clone().sub(r.pos),f=d.length(),p=r.vel.clone().normalize();if(Math.acos(Xt.clamp(d.clone().normalize().dot(p),-1,1))>r.spec.seekerConeRad)r.guided=!1;else{const v=r.spec.seeker==="ir"?"flare":"chaff";for(const m of this.flares){if(m.ownerId!==r.targetId||m.kind!==v||r.consideredFlares.has(m.id)||m.life<sa-1.2)continue;const u=m.pos.clone().sub(r.pos);if(!(u.length()>2500||Math.acos(Xt.clamp(u.normalize().dot(p),-1,1))>r.spec.seekerConeRad)&&(r.consideredFlares.add(m.id),this.rng()>r.spec.flareResistance)){r.decoy=m;break}}if(r.decoy)l=r.decoy.pos;else{const m=f/Math.max(a,150);l=o.position.clone().addScaledVector(o.velocity,m*.85)}}}else r.guided=!1;if(l){const d=r.vel.clone().normalize(),f=l.clone().sub(r.pos).normalize(),p=Math.acos(Xt.clamp(d.dot(f),-1,1)),g=r.spec.turnG*tc/Math.max(a,100)*t;if(p>1e-4){const v=new R().crossVectors(d,f).normalize();if(v.lengthSq()>.5){const m=new ke().setFromAxisAngle(v,Math.min(p,g));r.vel.applyQuaternion(m)}}}r.pos.addScaledVector(r.vel,t),r.mesh.position.copy(r.pos);const c=r.vel.clone().normalize();r.mesh.quaternion.setFromUnitVectors(new R(0,0,1),c),r.smokeTimer-=t,r.age<r.spec.burnS+1&&r.smokeTimer<=0&&(r.smokeTimer=.035,this.fx.spawn(r.pos.clone(),{size:1.3,growth:2.6,life:1.5,color:14211288,opacity:.45}));const h=r.decoy?r.decoy.pos:o?.alive?o.position:null;if(h&&r.pos.distanceTo(h)<r.spec.proxFuseM){this.detonate(r),!r.decoy&&o?.alive&&r.pos.distanceTo(o.position)<r.spec.proxFuseM*1.6&&i(o.id,r.spec.damage,r.ownerId);continue}(r.age>yg||r.pos.y<n(r.pos.x,r.pos.z))&&this.detonate(r)}}detonate(t){t.active=!1,this.fx.explosion(t.pos.clone()),t.mesh.removeFromParent();const e=t.mesh;e.geometry?.dispose(),e.material?.dispose()}dispose(){for(const t of this.missiles)t.active&&this.detonate(t);for(const t of this.flares)t.sprite&&(t.sprite.removeFromParent(),t.sprite.material.dispose());this.missiles=[],this.flares=[]}}const bg=45;class wg{constructor(t,e,n=Math.random){this.fx=t,this.era=e,this.rng=n}timer=2;update(t,e,n,i){if(!e)return this.timer=Math.min(this.timer,1.2),null;if(this.timer-=t,this.timer>0)return null;const r=this.era==="wwi";this.timer=r?1.1+this.rng()*1.5:.7+this.rng()*1.1;const a=r?130:90,o=n.position.clone().addScaledVector(n.velocity,.9+this.rng()*1).add(new R((this.rng()-.5)*2*a,(this.rng()-.5)*2*a*.7,(this.rng()-.5)*2*a));this.fx.spawn(o,{size:r?7:5,growth:r?4:6,life:r?2.2:1.4,color:r?1842204:3354668,opacity:.85}),this.fx.spawn(o,{size:2.5,growth:12,life:.25,color:16764006,opacity:.9});const l=o.distanceTo(n.position);return l<bg&&i(1),l}}const yi=90,Eg=.06;class Tg{lines=[];buffers=[];timer=0;material;constructor(t,e,n){this.material=new wo({color:e,transparent:!0,opacity:n,depthWrite:!1});for(let i=0;i<2;i++){const r=new Float32Array(yi*3),a=new ye;a.setAttribute("position",new Me(r,3));const o=new qc(a,this.material);o.frustumCulled=!1,o.visible=!1,t.add(o),this.buffers.push(r),this.lines.push(o)}}reset(t,e){for(const n of[0,1]){const i=new R(n===0?-e:e,0,.4).applyQuaternion(t.quaternion).add(t.position),r=this.buffers[n];for(let a=0;a<yi;a++)r[a*3]=i.x,r[a*3+1]=i.y,r[a*3+2]=i.z}}update(t,e,n,i){if(this.timer-=t,this.timer>0)return;this.timer=Eg;let r=!1;for(const a of[0,1]){const o=this.buffers[a];o.copyWithin(3,0,(yi-1)*3);const l=new R(a===0?-n:n,0,.4).applyQuaternion(e.quaternion).add(e.position);i?(o[0]=l.x,o[1]=l.y,o[2]=l.z):(o[0]=l.x,o[1]=l.y,o[2]=l.z,o[3]=l.x,o[4]=l.y,o[5]=l.z);const c=this.lines[a].geometry.getAttribute("position");c.needsUpdate=!0;const h=o[0]-o[(yi-1)*3],d=o[1]-o[(yi-1)*3+1],f=o[2]-o[(yi-1)*3+2],p=h*h+d*d+f*f>25;this.lines[a].visible=i||p,r=r||this.lines[a].visible}}dispose(){for(const t of this.lines)t.removeFromParent(),t.geometry.dispose();this.material.dispose()}}function Ag(s){const t=s.sample;return s.spec.era==="modern"?t.altitudeM>5200||Math.abs(t.gLoad)>5.6:t.speedMs>s.spec.cruiseSpeedMs*1.22}const Jc=9.80665,Qc=.02,ra=20,ec=48,Rg=6;function Cg(s,t,e,n){const i=s.clone(),r=t.clone(),a=.1;for(let o=0;o<25;o+=a)if(r.y-=Jc*a,r.multiplyScalar(1-Qc*a),i.addScaledVector(r,a),i.y<=e(i.x,i.z))return n.copy(i),n.y=e(i.x,i.z),!0;return!1}class Pg{constructor(t,e){this.scene=t,this.fx=e}bombs=[];drop(t,e,n){const i=new Et(new Ve(.16,.1,1.6,6),new we({color:3817528}));i.geometry.rotateX(Math.PI/2),this.scene.add(i),this.bombs.push({active:!0,ownerId:t,pos:e.clone(),vel:n.clone(),mesh:i})}update(t,e,n,i){for(const r of this.bombs){if(!r.active)continue;r.vel.y-=Jc*t,r.vel.multiplyScalar(1-Qc*t),r.pos.addScaledVector(r.vel,t),r.mesh.position.copy(r.pos),r.vel.lengthSq()>1&&r.mesh.quaternion.setFromUnitVectors(new R(0,0,1),r.vel.clone().normalize());const a=e(r.pos.x,r.pos.z);if(!(r.pos.y>a)){r.active=!1,r.pos.y=a,r.mesh.removeFromParent(),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.fx.explosion(r.pos.clone()),this.fx.spawn(r.pos.clone(),{size:10,growth:26,life:1.2,color:7035456,opacity:.8}),i?.(r.pos);for(const o of n){const l=o.position.distanceTo(r.pos)-o.radiusM;if(l>ec)continue;const c=l<=ra?1:1-(l-ra)/(ec-ra);o.onHit(Math.max(1,Math.round(Rg*c)),r.ownerId)}}}this.bombs=this.bombs.filter(r=>r.active)}dispose(){for(const t of this.bombs)t.mesh.removeFromParent(),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.bombs=[]}}const th=new R,ur=new ke;function To(s,t,e=1){const n=s.controls;ur.copy(s.quaternion).invert();const i=th.copy(t).sub(s.position).normalize().applyQuaternion(ur),r=Math.atan2(i.x,i.y),a=Math.hypot(i.x,i.y),o=Xt.clamp((a-.03)/.12,0,1),l=Math.cos(r);n.roll=Xt.clamp(r*1.6*e,-1,1)*o,n.pitch=Xt.clamp(Math.atan2(i.y,-i.z)*3.5*e*Math.max(.15,l),-1,1),n.yaw=Xt.clamp(i.x*.6,-.4,.4)}class Dg{constructor(t,e=.75){this.route=t,this.cruiseThrottle=e}wantsFire=!1;index=0;finished=!1;update(t,e,n,i){const r=e.controls;if(r.throttle=this.cruiseThrottle,r.afterburner=!1,r.brake=!1,i<150){r.roll=Xt.clamp(-e.sample.bankRad*2.5,-1,1),r.pitch=.8;return}if(this.finished){r.roll=Xt.clamp((.3-e.sample.bankRad)*1.5,-1,1),r.pitch=Xt.clamp((0-e.sample.pitchRad)*2+.06,-1,1);return}const a=this.route[this.index],o=a.clone().setY(e.position.y);To(e,o,.7),Math.hypot(a.x-e.position.x,a.z-e.position.z)<300&&(this.index++,this.index>=this.route.length&&(this.finished=!0))}}class Lg{constructor(t,e,n=.6){this.dest=t,this.ai=new Ti(e,n)}wantsFire=!1;ai;update(t,e,n,i){if(n&&e.position.distanceTo(n.position)<3200){this.ai.update(t,e,n,i),this.wantsFire=this.ai.wantsFire;return}this.wantsFire=!1;const a=e.controls;if(a.throttle=1,a.afterburner=!0,a.brake=!1,i<200){a.roll=Xt.clamp(-e.sample.bankRad*2.5,-1,1),a.pitch=.9;return}const o=this.dest.clone().setY(e.position.y);To(e,o,.8)}}class Si{constructor(t,e,n=.7,i=1){this.leader=e,this.slotSide=i,this.ai=new Ti(t,n)}wantsFire=!1;mode="engage";ai;update(t,e,n,i){const r=n?n.position.distanceTo(this.leader.position)<(this.mode==="cover"?3500:99999):!1;if(n&&r){this.ai.update(t,e,n,i),this.wantsFire=this.ai.wantsFire;return}this.wantsFire=!1;const a=e.controls,o=new R(60*this.slotSide,15,80).applyQuaternion(this.leader.quaternion).add(this.leader.position),l=e.position.distanceTo(o);if(i<200){a.roll=Xt.clamp(-e.sample.bankRad*2.5,-1,1),a.pitch=.8,a.throttle=1;return}To(e,o,l>400?.9:.45);const c=this.leader.sample.speedMs;a.throttle=Xt.clamp(c/Math.max(e.sample.speedMs,40)*.8+(l-120)/800,.35,1),a.afterburner=l>1500,a.brake=!1}}class Ti{constructor(t,e=.7){this.gun=t,this.skill=e,this.maxPull=.55+.45*this.skill}wantsFire=!1;jinkSign=1;jinkTimer=0;aimWander=new R;wanderTimer=0;maxPull;update(t,e,n,i){const r=e.controls;this.wantsFire=!1,this.jinkTimer-=t,this.wanderTimer-=t;const a=e.sample.climbRateMs<0?-e.sample.climbRateMs:0,o=a>1?i/a:1/0;if(i<200||o<4){r.roll=Xt.clamp(-e.sample.bankRad*2.5,-1,1),r.pitch=1,r.yaw=0,r.throttle=1,r.afterburner=!0;return}if(!n){r.roll=Xt.clamp((.35-e.sample.bankRad)*1.5,-1,1),r.pitch=Xt.clamp((0-e.sample.pitchRad)*2+.08,-1,1),r.throttle=.65,r.afterburner=!1;return}const l=e.position.distanceTo(n.position);if(this.wanderTimer<=0){this.wanderTimer=.7;const b=(1-this.skill)*60;this.aimWander.set((Math.random()-.5)*b,(Math.random()-.5)*b,(Math.random()-.5)*b)}const c=l/this.gun.muzzleVelMs,h=n.position.clone().addScaledVector(n.velocity,c).add(this.aimWander);ur.copy(e.quaternion).invert();const d=th.copy(h).sub(e.position).normalize().applyQuaternion(ur),f=Math.acos(Xt.clamp(-d.z,-1,1));if(-d.z<-.2&&l<700){this.jinkTimer<=0&&(this.jinkTimer=1.8+Math.random(),this.jinkSign=-this.jinkSign),r.roll=this.jinkSign,r.pitch=Math.min(.85,this.maxPull),r.yaw=0,r.throttle=1,r.afterburner=!0;return}const g=Math.atan2(d.x,d.y),v=Math.hypot(d.x,d.y),m=Xt.clamp((v-.03)/.12,0,1),u=Math.cos(g);r.roll=Xt.clamp(g*1.6,-1,1)*m,r.pitch=Xt.clamp(Math.atan2(d.y,-d.z)*3.5*Math.max(.15,u),-this.maxPull,this.maxPull),r.yaw=Xt.clamp(d.x*.6,-.4,.4);const w=l>this.gun.effectiveRangeM*1.5;r.throttle=w?1:.75,r.afterburner=w&&l>2e3,r.brake=!1,this.wantsFire=f<.05&&l<this.gun.effectiveRangeM}}const nc=9.80665,eh=1.225;function nh(s){return eh*Math.exp(-Math.max(0,s)/8500)}function _e(s,t,e){return s<t?t:s>e?e:s}function Ig(s,t,e){const n=_e((e-s)/(t-s),0,1);return n*n*(3-2*n)}function Ug(s,t){const e=_e(s.cl0+s.clAlpha*t,-s.clMax,s.clMax),n=Ig(s.alphaStallRad,s.alphaStallRad+.15,Math.abs(t)),i=Math.sin(2*t)*.85,r=e*(1-n)+i*n,a=r*r/(Math.PI*s.aspectRatio*s.oswald),o=s.cd0+a+n*.18;return{cl:r,cd:o,stalled:n}}function ih(s){const t=Math.max(216.65,288.15-.0065*Math.max(0,s));return 340.29*Math.sqrt(t/288.15)}const Ng=new R,aa=new ke,Fg=new R;class sh{spec;position=new R;quaternion=new ke;velocity=new R;angVelBody=new R;controls={pitch:0,roll:0,yaw:0,throttle:.7,afterburner:!1,brake:!1};lastSample={speedMs:0,altitudeM:0,alphaRad:0,betaRad:0,gLoad:1,headingRad:0,pitchRad:0,bankRad:0,mach:0,climbRateMs:0,stalled:!1,thrustN:0};gRate=0;alphaRate=0;prevAlpha=0;assists=!0;heldBank=null;heldPitch=null;constructor(t){this.spec=t}spawn(t,e,n,i,r=0){this.heldBank=null,this.heldPitch=null,this.gRate=0,this.alphaRate=0,this.prevAlpha=0,this.position.set(t,e,n),this.quaternion.setFromEuler(new Ie(0,r,0,"YXZ"));const a=new R(0,0,-1).applyQuaternion(this.quaternion);this.velocity.copy(a.multiplyScalar(i)),this.angVelBody.set(0,0,0)}get sample(){return this.lastSample}step(t){const e=Math.max(1,Math.ceil(t/.004166666666666667)),n=t/e;for(let i=0;i<e;i++)this.substep(n)}substep(t){const e=this.spec,n=e.massKg,i=nh(this.position.y),r=Math.max(this.velocity.length(),.5),o=.5*i*r*r*e.wingAreaM2;aa.copy(this.quaternion).invert();const l=Ng.copy(this.velocity).applyQuaternion(aa),c=Math.atan2(-l.y,-l.z),h=Math.asin(_e(l.x/r,-1,1));let d=this.controls.pitch,f=this.controls.roll,p=this.controls.yaw;const g=this.lastSample.gLoad;if(e.fbw){const ft=Math.abs(d)<.05&&this.assists;if(ft){const Ct=Math.abs(this.lastSample.bankRad)<1.75&&Math.abs(this.lastSample.pitchRad)<1.3;if(this.heldPitch===null||!Ct)d=_e(-this.angVelBody.x*.8,-.5,.5),Ct&&Math.abs(this.angVelBody.x)<.15&&(this.heldPitch=this.lastSample.pitchRad);else{const Jt=this.angVelBody.clone().applyQuaternion(this.quaternion),N=new R(0,Jt.y,0).applyQuaternion(aa.copy(this.quaternion).invert()).x,pe=_e((this.heldPitch-this.lastSample.pitchRad)*1.5,-.8,.8)+_e(N,-.6,.6);d=_e((pe-this.angVelBody.x)*.9,-.6,.6)}}else this.heldPitch=null;const it=c+this.alphaRate*.16,St=Math.max(0,it-e.fbw.alphaLimitRad)/.07,Rt=g+this.gRate*.18,Ft=Math.max(0,Rt-(e.fbw.gLimit-.5))/.8;d=_e(d-St-Ft-(ft?0:this.angVelBody.x*.15),-1,1);let jt;if(Math.abs(f)<.05&&this.assists){if(this.controls.pitch>.1&&this.heldBank!==null){const Ct=this.lastSample.bankRad;if(Math.abs(Ct)>.26&&Math.abs(this.heldBank)<1.45){const Jt=Math.acos(_e(1/Math.max(g,1.05),.05,1)),N=Math.sign(Ct)*Math.min(Math.max(Math.abs(this.heldBank),Jt),1.45),pe=1.1*t;this.heldBank+=_e(N-this.heldBank,-pe,pe)}}if(this.heldBank===null)jt=0,Math.abs(this.angVelBody.z)<.12&&(this.heldBank=this.lastSample.bankRad);else{let Ct=this.heldBank-this.lastSample.bankRad;Ct=Math.atan2(Math.sin(Ct),Math.cos(Ct)),jt=Math.abs(this.lastSample.pitchRad)<1.2?_e(-Ct*2.2,-1.5,1.5):0}}else this.heldBank=null,jt=-f*4.6;f=_e((this.angVelBody.z-jt)*.6,-1,1),p=_e(p+1*h+1.5*this.angVelBody.y-.6*this.angVelBody.z*c,-1,1)}let{cl:v,cd:m,stalled:u}=Ug(e,c);this.controls.brake&&e.brakeDrag&&(m+=e.brakeDrag);const w=l.clone().divideScalar(r),b=new R(1,0,0).cross(w);b.lengthSq()>1e-8?b.normalize():b.set(0,1,0);const _=Fg.set(0,0,0);_.addScaledVector(b,o*v),_.addScaledVector(w,-o*m),_.x+=-o*.3*h;let L=0;const C=e.propulsion;if(C.kind==="prop"){const it=e.blipSwitch&&this.controls.brake?0:this.controls.throttle;L=Math.min(C.maxStaticThrustN,C.maxPowerW*C.propEfficiency*it/Math.max(r,8))}else L=C.milThrustN*this.controls.throttle,this.controls.afterburner&&C.abThrustN>0&&(L=C.abThrustN),L*=i/eh;_.z-=L;const A=_.y/(n*nc),P=_.applyQuaternion(this.quaternion);P.y-=n*nc,this.velocity.addScaledVector(P,t/n),this.position.addScaledVector(this.velocity,t);const S=this.angVelBody,M=o*e.chordM,E=o*e.wingSpanM,D=2*r,I=1-.55*u;let B=M*(e.cm0+e.cmAlpha*c+e.cmDe*I*d);B-=M*e.pitchDamp*(S.x*e.chordM/D);let W=-E*(e.cnDr*p+e.cnBeta*h);W+=E*e.adverseYaw*f,W-=E*e.yawDamp*(S.y*e.wingSpanM/D);let V=-E*e.clDa*f;if(V+=E*e.dihedralEffect*h,V-=E*e.rollDamp*(S.z*e.wingSpanM/D),e.engineAngularMomentum!==0&&this.controls.throttle>.05){const ft=new R(0,0,-e.engineAngularMomentum),it=new R().crossVectors(S,ft).multiplyScalar(-1);B+=it.x,W+=it.y,V+=it.z}const Y=e.inertia,k=new R(S.x*Y.pitch,S.y*Y.yaw,S.z*Y.roll),J=new R().crossVectors(S,k);B-=J.x,W-=J.y,V-=J.z,S.x+=B/Y.pitch*t,S.y+=W/Y.yaw*t,S.z+=V/Y.roll*t;const Q=new ke(S.x*.5*t,S.y*.5*t,S.z*.5*t,0);Q.multiplyQuaternions(this.quaternion,Q),this.quaternion.x+=Q.x,this.quaternion.y+=Q.y,this.quaternion.z+=Q.z,this.quaternion.w+=Q.w,this.quaternion.normalize();const rt=_e((A-this.lastSample.gLoad)/t,-60,60);this.gRate+=(rt-this.gRate)*Math.min(1,t/.06);const dt=_e((c-this.prevAlpha)/t,-8,8);this.prevAlpha=c,this.alphaRate+=(dt-this.alphaRate)*Math.min(1,t/.05);const kt=new R(0,0,-1).applyQuaternion(this.quaternion),q=new R(1,0,0).applyQuaternion(this.quaternion),et=new R(0,1,0).applyQuaternion(this.quaternion);this.lastSample={speedMs:this.velocity.length(),altitudeM:this.position.y,alphaRad:c,betaRad:h,gLoad:A,headingRad:Math.atan2(kt.x,-kt.z),pitchRad:Math.asin(_e(kt.y,-1,1)),bankRad:Math.atan2(-q.y,et.y),mach:this.velocity.length()/ih(this.position.y),climbRateMs:this.velocity.y,stalled:u>.4,thrustN:L}}}const Zi=9.80665;function Og(s){const t=s.era==="modern"?{pitchRate:1.15,rollRate:3.1,yawRate:.45,gMax:9,vMax:290,vMaxAb:390,vCorner:130,vMin:75}:{pitchRate:.95,rollRate:2,yawRate:.5,gMax:4.5,vMax:s.cruiseSpeedMs*1.25,vMaxAb:s.cruiseSpeedMs*1.25,vCorner:30,vMin:17},e={f16:{rollRate:3.4},fa18:{pitchRate:1.3,rollRate:2.7,gMax:7.5,vMax:265,vMaxAb:350,vCorner:110,vMin:66},f22:{pitchRate:1.2,rollRate:2.4,vMax:330,vMaxAb:470,vCorner:150,vMin:80},f14:{pitchRate:.9,rollRate:2.1,gMax:7.5,vMax:305,vMaxAb:430,vCorner:145,vMin:85},"sopwith-camel":{rollRate:2.4,pitchRate:1.05},"fokker-dr1":{pitchRate:1.12,rollRate:2.2,vMax:s.cruiseSpeedMs*1.18},spad13:{rollRate:1.7,gMax:5,vMax:s.cruiseSpeedMs*1.35,vCorner:36},"fokker-d7":{pitchRate:1.05,vMin:14,vCorner:26},se5a:{rollRate:1.8,vMax:s.cruiseSpeedMs*1.32,vCorner:34},albatros:{rollRate:1.9,vMax:s.cruiseSpeedMs*1.3}};return{...t,...e[s.id]}}const kg=new R,oa=new R,js=new ke,Bg=new R(0,1,0);class zg{spec;position=new R;quaternion=new ke;velocity=new R;controls={pitch:0,roll:0,yaw:0,throttle:.7,afterburner:!1,brake:!1};tuning;rates=new R;lastSample={speedMs:0,altitudeM:0,alphaRad:0,betaRad:0,gLoad:1,headingRad:0,pitchRad:0,bankRad:0,mach:0,climbRateMs:0,stalled:!1,thrustN:0};constructor(t){this.spec=t,this.tuning=Og(t)}get sample(){return this.lastSample}spawn(t,e,n,i,r=0){this.position.set(t,e,n),this.quaternion.setFromEuler(new Ie(0,r,0,"YXZ"));const a=new R(0,0,-1).applyQuaternion(this.quaternion);this.velocity.copy(a.multiplyScalar(i)),this.rates.set(0,0,0)}step(t){const e=this.tuning,n=this.controls,i=Math.max(this.velocity.length(),5),r=Xt.clamp((i-e.vMin*.6)/(e.vCorner-e.vMin*.6),.25,1),a=this.lastSample.bankRad,o=Math.sin(a),l=Math.max(0,n.pitch)*Math.abs(o);if(Math.abs(a)>.09&&i>e.vMin*.8){const I=Math.tan(Xt.clamp(a,-1.42,1.42)),B=1+2.2*l,W=e.gMax*Zi/i*1.05,V=Xt.clamp(-2.2*(Zi*I/i)*B*r,-W,W);js.setFromAxisAngle(Bg,V*t),this.quaternion.premultiply(js)}const c=r*(1-.62*l),h=1-Math.exp(-t/.09);this.rates.x+=(n.pitch*e.pitchRate*c-this.rates.x)*h,this.rates.z+=(-n.roll*e.rollRate*r-this.rates.z)*h,this.rates.y+=(-n.yaw*e.yawRate*r-this.rates.y)*h;const d=new ke(this.rates.x*.5*t,this.rates.y*.5*t,this.rates.z*.5*t,0);d.multiplyQuaternions(this.quaternion,d),this.quaternion.x+=d.x,this.quaternion.y+=d.y,this.quaternion.z+=d.z,this.quaternion.w+=d.w,this.quaternion.normalize();const f=new R(0,0,-1).applyQuaternion(this.quaternion),p=kg.copy(this.velocity).divideScalar(i),g=Math.acos(Xt.clamp(p.dot(f),-1,1));let v=0;if(g>1e-4){const I=e.gMax*Zi/i*r;v=Math.min(g*6,I),oa.crossVectors(p,f).normalize(),oa.lengthSq()>.5&&(js.setFromAxisAngle(oa,v*t),p.applyQuaternion(js))}const m=Math.asin(Xt.clamp(p.y,-1,1));if(i<e.vMin*1.15&&m>-.5){const I=(1-i/(e.vMin*1.15))*.45;p.y-=I*t,p.normalize()}const u=nh(this.position.y)/1.225;let w=0;const b=this.spec.propulsion;b.kind==="prop"?w=this.spec.blipSwitch&&n.brake?0:b.maxStaticThrustN*n.throttle:w=(n.afterburner?b.abThrustN:b.milThrustN*n.throttle)*u;const _=b.kind==="jet"&&n.afterburner?e.vMaxAb:e.vMax,C=(b.kind==="jet"?n.afterburner?b.abThrustN:b.milThrustN:b.maxStaticThrustN)/(_*_),A=1+v*i/Zi;let P=C*i*i*(1+.12*Math.max(0,A-1.5));n.brake&&this.spec.brakeDrag&&(P*=2.2);const S=(w-P)/this.spec.massKg-Zi*Math.sin(m),M=Math.max(i+S*t,e.vMin*.55);this.velocity.copy(p).multiplyScalar(M),this.position.addScaledVector(this.velocity,t);const E=new R(1,0,0).applyQuaternion(this.quaternion),D=new R(0,1,0).applyQuaternion(this.quaternion);this.lastSample={speedMs:M,altitudeM:this.position.y,alphaRad:g*Xt.clamp(f.y-p.y>=0?1:-1,-1,1),betaRad:0,gLoad:A,headingRad:Math.atan2(f.x,-f.z),pitchRad:Math.asin(Xt.clamp(f.y,-1,1)),bankRad:Math.atan2(-E.y,D.y),mach:M/ih(this.position.y),climbRateMs:this.velocity.y,stalled:M<e.vMin,thrustN:w}}}function Ee(s){return new we({color:s,flatShading:!0})}function Cn(s,t,e,n){return new Et(new ae(s,t,e),Ee(n))}function la(s,t,e,n,i){const r=new ae(s,t,e),a=r.attributes.position;for(let o=0;o<a.count;o++){a.setZ(o,a.getZ(o)+Math.abs(a.getX(o))*n);const l=1-Math.abs(a.getX(o))/(s/2)*.45;a.setZ(o,a.getZ(o)*Math.max(l,.4)+Math.abs(a.getX(o))*n*.25)}return r.computeVertexNormals(),new Et(r,Ee(i))}function rh(){const s=new hs(new Fi({color:16768392,transparent:!0,opacity:.95,blending:os,depthWrite:!1}));return s.scale.setScalar(1.6),s.visible=!1,s.name="muzzleFlash",s}function ic(s){const t=new Oe,e=s.id==="fokker-dr1",n=s.id==="spad13",i=s.id==="fokker-d7",r=s.id==="se5a",a=s.id==="albatros",o=e?11542560:n?11573858:i?5597262:r?7039812:a?10257492:10126409,l=e?3:2,c=s.id==="sopwith-camel"||n||r,h=s.wingSpanM,d=Cn(.95,1,2.4,o);d.position.set(0,0,-1.2),t.add(d);const f=new ae(.9,.95,3.6),p=f.attributes.position;for(let A=0;A<p.count;A++)p.getZ(A)>1&&(p.setX(A,p.getX(A)*.35),p.setY(A,p.getY(A)*.45));f.computeVertexNormals();const g=new Et(f,Ee(o));g.position.set(0,.02,1.8),t.add(g);for(let A=0;A<l;A++){const P=Cn(h-A*.5,.13,1.45,o);if(P.position.set(0,-.35+A*.85,-.7-A*.18),t.add(P),c&&A===l-1)for(const S of[-h*.32,h*.32]){const M=new Et(new Ei(.5,16),Ee(1718922));M.rotation.x=-Math.PI/2,M.position.set(S,.075,-.7-A*.18);const E=new Et(new Ei(.32,16),Ee(15790320));E.rotation.x=-Math.PI/2,E.position.set(S,.078,M.position.z);const D=new Et(new Ei(.15,16),Ee(11542560));D.rotation.x=-Math.PI/2,D.position.set(S,.081,M.position.z),t.add(M,E,D)}}for(const A of[-h*.34,h*.34]){const P=Cn(.07,(l-1)*.85+.2,.07,4864808);P.position.set(A,-.35+(l-1)*.425,-.7),t.add(P)}const v=Cn(2.5,.09,1.05,o);v.position.set(0,.12,3.1),t.add(v);const m=new ae(.09,1,1.05),u=m.attributes.position;for(let A=0;A<u.count;A++)u.setZ(A,u.getZ(A)+Math.max(0,u.getY(A))*.5);m.computeVertexNormals();const w=new Et(m,Ee(e?15790320:o));w.name="fin",w.position.set(0,.6,3.2),t.add(w);const b=n||i||r||a?new Et(new ae(.95,.9,.6),Ee(7237234)):new Et(new Ve(.58,.52,.7,12),Ee(7237234));b.rotation.x=Math.PI/2,b.position.set(0,0,-2.65),t.add(b);const _=new Et(new Ei(1.35,24),new gs({color:3355443,transparent:!0,opacity:.22,side:nn}));_.position.set(0,0,-3.05),_.name="propDisc",t.add(_);for(const A of[-.55,.55]){const P=Cn(.06,.7,.06,4864808);P.position.set(A,-.8,-1),t.add(P)}const L=Cn(1.4,.08,.5,o);L.position.set(0,-1.12,-1),t.add(L);const C=rh();return C.position.set(0,.45,-2.2),t.add(C),t}function sc(s){const t=new Oe,e=s.id==="mig29"||s.id==="su27",n=s.id==="su27",i=s.id==="fa18",r=s.id==="f22",a=s.id==="f14",o=n?8230061:e?6122357:i?10134701:r?7569031:a?9344930:9147809,l=n?6256272:e?4608603:i?8358290:r?6187121:a?7765898:7831692,c=new Ve(.62,.55,9.6,10);c.rotateX(Math.PI/2);const h=new Et(c,Ee(o));h.position.z=.4,t.add(h);const d=new Et(new dr(.6,2.8,10),Ee(o));d.rotation.x=-Math.PI/2,d.position.z=-5.7,t.add(d);const f=new Et(new xr(.58,12,8),new we({color:2768213}));if(f.scale.set(.85,.75,2),f.position.set(0,.55,-2.9),t.add(f),e||i||r||a)for(const b of e?[-.75,.75]:a?[-.85,.85]:[-.58,.58]){const _=new Ve(e?.42:.38,e?.4:.36,6.2,8);_.rotateX(Math.PI/2);const L=new Et(_,Ee(l));L.position.set(b,-.25,2),t.add(L)}else{const b=new Ve(.42,.46,2.6,8);b.rotateX(Math.PI/2);const _=new Et(b,Ee(l));_.position.set(0,-.55,-1),t.add(_)}if(a)for(const b of[-1,1]){const _=la(9,.16,3.1,.4,o);_.position.x=b*4.2;const L=new Oe;L.name=b<0?"swingL":"swingR",L.add(_),L.position.set(b*.9,-.05,.9),t.add(L)}else{const b=la(9.6,.16,3.6,.55,o);b.position.set(0,-.08,.6),t.add(b)}for(const b of[-4.7,4.7]){const _=new Ve(.09,.09,2.6,6);_.rotateX(Math.PI/2);const L=new Et(_,Ee(15263976));L.position.set(b,-.08,1),t.add(L)}const p=la(4.6,.12,1.8,.5,o);p.position.set(0,-.05,4.7),t.add(p);const g=(b,_)=>{const L=new ae(.12,2.5,2.1),C=L.attributes.position;for(let P=0;P<C.count;P++)C.setZ(P,C.getZ(P)+Math.max(0,C.getY(P))*.85);L.computeVertexNormals();const A=new Et(L,Ee(l));return A.name="fin",A.position.set(b,1.3,3.9),A.rotation.z=_,A};e?t.add(g(-.75,.16),g(.75,-.16)):i?t.add(g(-.62,.35),g(.62,-.35)):r?t.add(g(-.7,.42),g(.7,-.42)):a?t.add(g(-.85,.06),g(.85,-.06)):t.add(g(0,0)),r&&t.scale.setScalar(1.15),a&&t.scale.setScalar(1.3),n&&t.scale.setScalar(1.2);const v=new Et(new dr(.45,2.4,8),new gs({color:16742178,transparent:!0,opacity:.85}));v.rotation.x=Math.PI/2,v.position.set(0,0,6.7),v.visible=!1,v.name="abFlame",t.add(v);const m=new Oe;m.name="gear";const u=(b,_)=>{const L=Cn(.1,1,.1,9080726);L.position.set(b,-1,_);const C=Cn(.22,.5,.5,1842204);C.position.set(b,-1.55,_),m.add(L,C)};u(0,-3.4),u(-1.15,1.3),u(1.15,1.3),m.visible=!1,t.add(m);const w=rh();return w.position.set(-.45,.1,-4.6),t.add(w),t}function Gg(s){if(s.id==="gotha"||s.id==="backfire"){const t=s.era==="wwi"?2.4:2.1,e={...s,wingSpanM:s.wingSpanM/t},n=s.era==="wwi"?ic(e):sc(e);return n.scale.setScalar(t),n}return s.era==="wwi"?ic(s):sc(s)}function fn(s){return s.era==="wwi"?mg:gg}function rc(s){return s.id==="gotha"?24:s.id==="backfire"?16:s.id==="su27"?9:s.era==="wwi"?14:7}const Hg={f16:{ir:Ks,irCount:4,bvr:na,bvrCount:2,bombs:4,decoys:30},fa18:{ir:Ks,irCount:2,bvr:na,bvrCount:4,bombs:6,decoys:30},f22:{ir:Ks,irCount:2,bvr:na,bvrCount:6,bombs:2,decoys:24},f14:{ir:Ks,irCount:4,bvr:Mg,bvrCount:4,bombs:4,decoys:30},mig29:{ir:Jl,irCount:4,bvr:Ql,bvrCount:2,bombs:0,decoys:30},su27:{ir:Jl,irCount:6,bvr:Ql,bvrCount:4,bombs:0,decoys:40},backfire:{ir:null,irCount:0,bvr:null,bvrCount:0,bombs:0,decoys:30}};function Vg(s){const t=Hg[s.id];return t||{ir:null,irCount:0,bvr:null,bvrCount:0,bombs:4,decoys:0}}class Wg{constructor(t,e,n,i,r=1,a=!1){this.id=t,this.effects=i,this.side=r,this.model=a?new zg(n):new sh(n),this.mesh=Gg(n),e.add(this.mesh),this.gun=new xg(fn(n)),this.maxHp=rc(n),this.hp=this.maxHp;const o=Vg(n);this.missileSpec=o.ir,this.bvrSpec=o.bvr,this.missileCap=o.irCount,this.bvrCap=o.bvrCount,this.bombCap=o.bombs,this.decoyCap=o.decoys,this.rearm()}model;mesh;gun;maxHp;hp;alive=!0;lastHitBy=-1;missileSpec;bvrSpec;missiles=0;bvrMissiles=0;flares=0;chaff=0;missileCap=4;bvrCap=2;decoyCap=30;bombs=0;bombCap=4;smokeTimer=0;rearm(){this.bombs=this.bombCap,this.missileSpec&&(this.missiles=this.missileCap,this.bvrMissiles=this.bvrCap,this.flares=this.decoyCap,this.chaff=this.decoyCap)}applyPerks(t){this.maxHp=Math.round(rc(this.spec)*t.hpMult),this.hp=this.maxHp,this.missileSpec&&(this.missileCap+=t.missileBonus),this.bvrSpec&&(this.bvrCap+=t.bvrBonus),this.decoyCap>0&&(this.decoyCap+=t.decoyBonus),this.rearm()}get spec(){return this.model.spec}get radiusM(){return this.spec.wingSpanM*.55}hit(t,e){this.alive&&(this.hp-=t,this.lastHitBy=e,this.effects.spawn(this.model.position.clone(),{size:2.5,growth:4,life:.5,color:16768392,opacity:.8}),this.hp<=0&&this.kill())}kill(){if(!this.alive)return;this.alive=!1;const t=this.model.controls;t.pitch=0,t.roll=.3,t.yaw=0,t.throttle=0,t.afterburner=!1,t.brake=!1,this.effects.explosion(this.model.position.clone())}respawn(t,e,n,i,r){this.alive=!0,this.hp=this.maxHp,this.lastHitBy=-1,this.gun.reload(),this.rearm(),this.model.spawn(t,e,n,i,r),this.mesh.visible=!0}updateEffects(t){if(this.smokeTimer-=t,(this.hp<=this.maxHp*.5||!this.alive)&&this.smokeTimer<=0){this.smokeTimer=this.alive?.09:.05;const n=this.model.position.clone();this.alive||this.effects.spawn(n,{size:3,growth:6,life:1.2,color:16740384,opacity:.75}),this.effects.spawn(n,{size:this.alive?2.2:4,growth:5,life:1.8,color:1842204,opacity:.55})}}dispose(){this.mesh.removeFromParent(),this.mesh.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n?.dispose()})}}const Ao={id:"fokker-dr1",name:"Fokker Dr.I",era:"wwi",massKg:585,inertia:{pitch:1700,yaw:2600,roll:1400},wingAreaM2:18.7,wingSpanM:7.2,chordM:2.6,aspectRatio:2.77,oswald:.7,cl0:.15,clAlpha:4,clMax:1.5,alphaStallRad:.29,cd0:.046,cmDe:.15,clDa:.05,cnDr:.07,adverseYaw:.015,cmAlpha:-.3,cm0:.013,cnBeta:.1,dihedralEffect:.06,pitchDamp:8,rollDamp:.5,yawDamp:.35,engineAngularMomentum:1300,blipSwitch:!0,propulsion:{kind:"prop",maxPowerW:82e3,propEfficiency:.75,maxStaticThrustN:2600},cruiseSpeedMs:38},Ro={id:"sopwith-camel",name:"Sopwith Camel",era:"wwi",massKg:660,inertia:{pitch:1900,yaw:2900,roll:1700},wingAreaM2:21.5,wingSpanM:8.5,chordM:2.5,aspectRatio:3.36,oswald:.72,cl0:.14,clAlpha:4.2,clMax:1.4,alphaStallRad:.27,cd0:.045,cmDe:.14,clDa:.055,cnDr:.07,adverseYaw:.018,cmAlpha:-.26,cm0:.012,cnBeta:.09,dihedralEffect:.05,pitchDamp:6.5,rollDamp:.5,yawDamp:.32,engineAngularMomentum:1550,blipSwitch:!0,propulsion:{kind:"prop",maxPowerW:97e3,propEfficiency:.75,maxStaticThrustN:2900},cruiseSpeedMs:42},Co={id:"spad13",name:"SPAD S.XIII",era:"wwi",massKg:845,inertia:{pitch:2300,yaw:3400,roll:2e3},wingAreaM2:21.1,wingSpanM:8.1,chordM:2.4,aspectRatio:3.1,oswald:.72,cl0:.13,clAlpha:4.3,clMax:1.35,alphaStallRad:.26,cd0:.04,cmDe:.15,clDa:.05,cnDr:.07,adverseYaw:.012,cmAlpha:-.32,cm0:.012,cnBeta:.1,dihedralEffect:.045,pitchDamp:8,rollDamp:.55,yawDamp:.35,engineAngularMomentum:260,propulsion:{kind:"prop",maxPowerW:164e3,propEfficiency:.76,maxStaticThrustN:3400},cruiseSpeedMs:50},Po={id:"fokker-d7",name:"Fokker D.VII",era:"wwi",massKg:700,inertia:{pitch:2e3,yaw:3e3,roll:1700},wingAreaM2:20.5,wingSpanM:8.9,chordM:2.3,aspectRatio:3.86,oswald:.74,cl0:.18,clAlpha:4.4,clMax:1.65,alphaStallRad:.31,cd0:.044,cmDe:.16,clDa:.052,cnDr:.07,adverseYaw:.013,cmAlpha:-.24,cm0:.013,cnBeta:.1,dihedralEffect:.05,pitchDamp:8.5,rollDamp:.52,yawDamp:.34,engineAngularMomentum:350,propulsion:{kind:"prop",maxPowerW:138e3,propEfficiency:.75,maxStaticThrustN:3100},cruiseSpeedMs:46},Do={id:"se5a",name:"S.E.5a",era:"wwi",massKg:880,inertia:{pitch:2500,yaw:3600,roll:2100},wingAreaM2:22.7,wingSpanM:8.1,chordM:2.5,aspectRatio:3.24,oswald:.73,cl0:.14,clAlpha:4.3,clMax:1.4,alphaStallRad:.27,cd0:.041,cmDe:.15,clDa:.05,cnDr:.07,adverseYaw:.011,cmAlpha:-.34,cm0:.012,cnBeta:.11,dihedralEffect:.05,pitchDamp:8.5,rollDamp:.55,yawDamp:.36,engineAngularMomentum:240,propulsion:{kind:"prop",maxPowerW:149e3,propEfficiency:.76,maxStaticThrustN:3200},cruiseSpeedMs:49},fr={id:"albatros",name:"Albatros D.Va",era:"wwi",massKg:730,inertia:{pitch:2100,yaw:3100,roll:1800},wingAreaM2:21.2,wingSpanM:9,chordM:2.4,aspectRatio:3.75,oswald:.73,cl0:.15,clAlpha:4.3,clMax:1.45,alphaStallRad:.28,cd0:.042,cmDe:.15,clDa:.05,cnDr:.07,adverseYaw:.013,cmAlpha:-.28,cm0:.012,cnBeta:.1,dihedralEffect:.05,pitchDamp:8,rollDamp:.53,yawDamp:.34,engineAngularMomentum:320,propulsion:{kind:"prop",maxPowerW:134e3,propEfficiency:.75,maxStaticThrustN:3e3},cruiseSpeedMs:47},Xg={id:"gotha",name:"Gotha G.V",era:"wwi",massKg:3600,inertia:{pitch:26e3,yaw:38e3,roll:3e4},wingAreaM2:89.5,wingSpanM:23.7,chordM:3.9,aspectRatio:6.3,oswald:.75,cl0:.2,clAlpha:4.6,clMax:1.4,alphaStallRad:.24,cd0:.05,cmDe:.1,clDa:.02,cnDr:.05,adverseYaw:.01,cmAlpha:-.4,cm0:.015,cnBeta:.12,dihedralEffect:.06,pitchDamp:12,rollDamp:.8,yawDamp:.5,engineAngularMomentum:0,propulsion:{kind:"prop",maxPowerW:388e3,propEfficiency:.72,maxStaticThrustN:9200},cruiseSpeedMs:32},qg=[Ao,Ro,Co,Po,Do,fr],Fn={id:"f16",name:"F-16C Viper",era:"modern",massKg:12e3,inertia:{pitch:75674,yaw:85552,roll:12875},wingAreaM2:27.9,wingSpanM:9.45,chordM:3.45,aspectRatio:3.2,oswald:.85,cl0:.05,clAlpha:3.7,clMax:1.6,alphaStallRad:.52,cd0:.018,cmDe:.5,clDa:.06,cnDr:.06,adverseYaw:.002,cmAlpha:-.08,cm0:.004,cnBeta:.12,dihedralEffect:.01,pitchDamp:7,rollDamp:.4,yawDamp:.35,engineAngularMomentum:0,fbw:{alphaLimitRad:.44,gLimit:9},brakeDrag:.055,propulsion:{kind:"jet",milThrustN:76e3,abThrustN:129e3},cruiseSpeedMs:180},ah={...Fn,id:"fa18",name:"F/A-18C Hornet",massKg:16800,inertia:{pitch:11e4,yaw:125e3,roll:22e3},wingAreaM2:37.2,wingSpanM:11.4,chordM:3.5,aspectRatio:3.5,cd0:.02,clMax:1.8,alphaStallRad:.61,fbw:{alphaLimitRad:.56,gLimit:7.5},brakeDrag:.05,propulsion:{kind:"jet",milThrustN:97e3,abThrustN:158e3},cruiseSpeedMs:170},to={...Fn,id:"mig29",name:"MiG-29 Fulcrum",massKg:12500,inertia:{pitch:79e3,yaw:89e3,roll:14500},wingAreaM2:38,wingSpanM:11.36,chordM:3.35,aspectRatio:3.4,cd0:.021,fbw:{alphaLimitRad:.42,gLimit:9},propulsion:{kind:"jet",milThrustN:99e3,abThrustN:163e3},cruiseSpeedMs:175},oh={...Fn,id:"f22",name:"F-22A Raptor",massKg:19700,inertia:{pitch:165e3,yaw:19e4,roll:38e3},wingAreaM2:78,wingSpanM:13.6,chordM:5.1,aspectRatio:2.36,cd0:.015,clMax:1.7,alphaStallRad:.6,fbw:{alphaLimitRad:.6,gLimit:9},brakeDrag:.05,propulsion:{kind:"jet",milThrustN:232e3,abThrustN:312e3},cruiseSpeedMs:220},lh={...Fn,id:"f14",name:"F-14B Tomcat",massKg:27700,inertia:{pitch:31e4,yaw:36e4,roll:82e3},wingAreaM2:94,wingSpanM:19.5,chordM:4.9,aspectRatio:4.05,cd0:.021,clMax:1.5,alphaStallRad:.42,fbw:{alphaLimitRad:.38,gLimit:7.5},brakeDrag:.06,propulsion:{kind:"jet",milThrustN:13e4,abThrustN:214e3},cruiseSpeedMs:210},ch={...Fn,id:"su27",name:"Su-27 Flanker",massKg:23e3,inertia:{pitch:23e4,yaw:27e4,roll:52e3},wingAreaM2:62,wingSpanM:14.7,chordM:4.6,aspectRatio:3.5,cd0:.019,clMax:1.7,alphaStallRad:.52,fbw:{alphaLimitRad:.5,gLimit:9},brakeDrag:.05,propulsion:{kind:"jet",milThrustN:15e4,abThrustN:245e3},cruiseSpeedMs:200},$g={...Fn,id:"backfire",name:"Tu-22M Backfire",massKg:58e3,inertia:{pitch:9e5,yaw:11e5,roll:4e5},wingAreaM2:175,wingSpanM:23.3,chordM:7.5,aspectRatio:3.1,cd0:.024,clMax:1.4,alphaStallRad:.3,fbw:{alphaLimitRad:.26,gLimit:2.5},brakeDrag:.04,propulsion:{kind:"jet",milThrustN:49e4,abThrustN:49e4},cruiseSpeedMs:235},Yg=[Fn,ah,lh,oh];function Lo(){return typeof window<"u"&&(navigator.maxTouchPoints>0||"ontouchstart"in window)}const Zs=56,ca=84;class Kg{constructor(t,e){this.input=e,this.root=document.createElement("div"),this.root.className="touch-ui",this.root.innerHTML=`
      <div class="tstick-zone"></div>
      <div class="tstick-base"></div>
      <div class="tstick-knob"></div>
      <div class="tthrottle"><div class="tthrottle-fill"></div><span>THR</span></div>
      <button class="tbtn tfire">FIRE</button>
      <button class="tbtn tab">AB</button>
      <button class="tbtn tbrk">BRK</button>
      <button class="tbtn twpn">WPN</button>
      <button class="tbtn tflr">FLR</button>
      <button class="tbtn tlck">LCK</button>
      <button class="tbtn twm">WM</button>
      <button class="tbtn tmenu">☰</button>
      <button class="tbtn tcam">CAM</button>`,t.appendChild(this.root);const n=i=>this.root.querySelector(i);this.base=n(".tstick-base"),this.knob=n(".tstick-knob"),this.fill=n(".tthrottle-fill"),this.abBtn=n(".tab"),this.bindStick(n(".tstick-zone")),this.bindThrottle(n(".tthrottle")),this.bindHold(n(".tfire"),i=>{this.firing=i}),this.bindHold(n(".tbrk"),i=>{this.brake=i}),n(".tab").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.afterburner=!this.input.afterburner}),n(".twpn").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.weaponToggleRequested=!0,this.input.lockRequested=!0}),n(".tflr").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.flareRequested=!0}),n(".tlck").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.lockRequested=!0}),n(".twm").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.wingmanOrderRequested=!0}),n(".tmenu").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.menuRequested=!0}),n(".tcam").addEventListener("pointerdown",i=>{i.preventDefault(),this.input.cameraToggleRequested=!0})}stick={active:!1,x:0,y:0};firing=!1;brake=!1;root;base;knob;fill;abBtn;anchor={x:0,y:0};stickPointer=-1;bindStick(t){t.addEventListener("pointerdown",n=>{this.stickPointer===-1&&(n.preventDefault(),this.stickPointer=n.pointerId,t.setPointerCapture(n.pointerId),this.anchor.x=Math.min(n.clientX,window.innerWidth-ca),this.anchor.y=Math.max(Math.min(n.clientY,window.innerHeight-ca),ca*.7),this.stick.active=!0,this.base.style.display=this.knob.style.display="block",this.applyStick(n.clientX,n.clientY))}),t.addEventListener("pointermove",n=>{n.pointerId===this.stickPointer&&this.applyStick(n.clientX,n.clientY)});const e=n=>{n.pointerId===this.stickPointer&&(this.stickPointer=-1,this.stick.active=!1,this.stick.x=0,this.stick.y=0,this.base.style.display=this.knob.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}applyStick(t,e){let n=t-this.anchor.x,i=e-this.anchor.y;const r=Math.hypot(n,i);if(r>Zs){const a=r-Zs;this.anchor.x+=n/r*a,this.anchor.y+=i/r*a,n=t-this.anchor.x,i=e-this.anchor.y}this.stick.x=Math.max(-1,Math.min(1,n/Zs)),this.stick.y=Math.max(-1,Math.min(1,i/Zs)),this.placeStickVisuals(this.anchor.x+n,this.anchor.y+i)}placeStickVisuals(t,e){this.base.style.left=`${this.anchor.x-60}px`,this.base.style.top=`${this.anchor.y-60}px`,this.knob.style.left=`${t-26}px`,this.knob.style.top=`${e-26}px`}bindThrottle(t){const e=n=>{const i=t.getBoundingClientRect(),r=1-(n.clientY-i.top)/i.height;this.input.throttle=Math.max(0,Math.min(1,r))};t.addEventListener("pointerdown",n=>{n.preventDefault(),t.setPointerCapture(n.pointerId),e(n)}),t.addEventListener("pointermove",n=>{t.hasPointerCapture(n.pointerId)&&e(n)})}bindHold(t,e){t.addEventListener("pointerdown",i=>{i.preventDefault(),t.setPointerCapture(i.pointerId),t.classList.add("active"),e(!0)});const n=()=>{t.classList.remove("active"),e(!1)};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}sync(){this.fill.style.height=`${Math.round(this.input.throttle*100)}%`,this.abBtn.classList.toggle("active",this.input.afterburner)}dispose(){this.root.remove()}}const hh="jets.handling";function ss(){try{return localStorage.getItem(hh)==="sim"?"sim":"arcade"}catch{return"arcade"}}function jg(s){try{localStorage.setItem(hh,s)}catch{}}const dh="jets.skirmish.v1",ac={count:2,foe:"mixed"};function rs(){try{const s=localStorage.getItem(dh);if(!s)return{...ac};const t=JSON.parse(s);return{count:t.count===1||t.count===4?t.count:2,foe:t.foe==="mig29"||t.foe==="su27"?t.foe:"mixed"}}catch{return{...ac}}}function oc(s){try{localStorage.setItem(dh,JSON.stringify(s))}catch{}}const Zg={rookie:{skill:.35,hpMult:.7,flareBurstCooldown:6,flareCount:8,missileCadence:[14,22]},pilot:{skill:.6,hpMult:1,flareBurstCooldown:3.5,flareCount:16,missileCadence:[8,14]},ace:{skill:.85,hpMult:1.2,flareBurstCooldown:2.2,flareCount:30,missileCadence:[5,9]}},uh="jets.difficulty";function eo(){try{const s=localStorage.getItem(uh);return s==="rookie"||s==="ace"?s:"pilot"}catch{return"pilot"}}function Jg(s){try{localStorage.setItem(uh,s)}catch{}}function bi(){return Zg[eo()]}const lc=250;function Qg(s,t){s.chronicle=s.chronicle??[],s.chronicle.push(t),s.chronicle.length>lc&&s.chronicle.splice(0,s.chronicle.length-lc),Zn(s)}const cc={entente:["2nd Lieutenant","Lieutenant","Captain","Major"],central:["Leutnant","Oberleutnant","Hauptmann","Major"],nato:["2nd Lieutenant","1st Lieutenant","Captain","Major"]},tv={entente:"No. 46 Squadron RFC",central:"Jagdstaffel 11",nato:"555th Fighter Squadron"},ev={entente:[{at:1,id:"mid",name:"Mentioned in Dispatches"},{at:5,id:"mc",name:"Military Cross"},{at:10,id:"dso",name:"Distinguished Service Order"},{at:20,id:"vc",name:"Victoria Cross"}],central:[{at:1,id:"ek2",name:"Iron Cross 2nd Class"},{at:5,id:"ek1",name:"Iron Cross 1st Class"},{at:15,id:"plm",name:"Pour le Mérite"}],nato:[{at:1,id:"am",name:"Air Medal"},{at:5,id:"dfc",name:"Distinguished Flying Cross"},{at:10,id:"ss",name:"Silver Star"},{at:20,id:"moh",name:"Medal of Honor"}]},nv={wwi:"1917-04-01",modern:"2026-07-01"},fh="jets.dynasty.v1";function ds(){try{const s=localStorage.getItem(fh);return s?JSON.parse(s):null}catch{return null}}function Zn(s){try{localStorage.setItem(fh,JSON.stringify(s))}catch{}}function iv(s){return{surname:s,createdISO:new Date().toISOString(),pilots:[],unlocks:[]}}function sv(s,t,e,n="wwi"){const i=s.pilots.length+1,r=[...s.pilots].reverse().find(o=>o.era===n),a={id:`p${i}-${Math.random().toString(36).slice(2,8)}`,firstName:t,era:n,side:e,generation:i,rankIndex:0,squadron:tv[e],sorties:0,victories:0,medals:[],status:"active",legacy:0,dateISO:r?r.dateISO:nv[n]};return s.pilots.push(a),a}function Ji(s,t){return s.pilots.find(e=>e.status==="active"&&(!t||e.era===t))??null}function ph(s){return s.pilots.reduce((t,e)=>t+e.legacy,0)}function no(s){const t=s.pilots.filter(e=>e.era==="wwi"&&e.victories>=5);return t.length?t.reduce((e,n)=>n.victories>e.victories?n:e):null}function es(s){return cc[s.side][Math.min(s.rankIndex,cc[s.side].length-1)]}function rv(s,t,e){const n=t.victories>=5;t.sorties+=1,t.victories+=e.victories,t.legacy+=e.victories*10+(e.missionComplete?5:0);const i=new Date(t.dateISO+"T12:00:00Z");i.setUTCDate(i.getUTCDate()+1+Math.floor(Math.random()*3)),t.dateISO=i.toISOString().slice(0,10);const r={newMedals:[],promotedTo:null,becameAce:!1,kia:!1};for(const o of ev[t.side])if(t.victories>=o.at&&!t.medals.some(l=>l.id===o.id)){const l={id:o.id,name:o.name,dateISO:t.dateISO};t.medals.push(l),r.newMedals.push(l)}const a=t.sorties>=25||t.victories>=15?3:t.sorties>=12||t.victories>=8?2:t.sorties>=5||t.victories>=3?1:0;return a>t.rankIndex&&(t.rankIndex=a,r.promotedTo=es(t)),r.becameAce=!n&&t.victories>=5,e.survived||(t.status="kia",r.kia=!0),Zn(s),r}function as(s){return new Date(s+"T12:00:00Z").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}const Io=[{id:"dispensers",name:"Deep Countermeasure Bins",desc:"Flare and chaff capacity 30 → 45. The family knows a loadmaster.",cost:30,era:"modern"},{id:"armorer",name:"Armorer's Favor",desc:"Belts refill 60% faster between bursts (arcade handling). Your guns are never waiting on the depot.",cost:40,era:"both"},{id:"rails",name:"Extra Rails",desc:"+2 IR missiles and +1 radar missile over any airframe's standard load. Somebody signed for the extra pylons; nobody asks who.",cost:60,era:"modern"},{id:"airframe",name:"Veteran Airframe",desc:"Your mount absorbs 30% more damage. A century of family notes on what breaks first.",cost:80,era:"both"},{id:"late-birds",name:"Late-War Fighters",desc:"The SPAD S.XIII (heavy, fast, dives like an anvil) and the Fokker D.VII (hangs on its prop) join the family stable.",cost:100,era:"wwi"},{id:"fa18",name:"F/A-18C Hornet",desc:"A second modern mount: slower than the Viper, but it turns like a knife fight and holds alpha the Viper's limiter won't allow. Six-bomb rack.",cost:120,era:"modern"},{id:"aces-birds",name:"The Aces' Mounts",desc:"The S.E.5a (fast, steady, forgiving) and the Albatros D.Va (the Jastas' plywood shark) join the stable.",cost:80,era:"wwi"},{id:"f14",name:"F-14B Tomcat",desc:"The fleet interceptor: heavy and mushy up close, but four AIM-54 Phoenix kill from 24 km — twice any other missile.",cost:150,era:"modern"},{id:"f22",name:"F-22A Raptor",desc:"Speed, altitude, six internal AMRAAMs, and a radar return the size of a bird — enemies engage you at half range. The Viper still out-rolls it.",cost:200,era:"modern"}];function De(s,t){return!!s?.unlocks.includes(t)}function av(s){return Io.filter(t=>s.unlocks.includes(t.id)).reduce((t,e)=>t+e.cost,0)}function io(s){return ph(s)-av(s)}function ov(s,t){const e=Io.find(n=>n.id===t);return!e||s.unlocks.includes(t)||io(s)<e.cost?!1:(s.unlocks.push(t),Zn(s),!0)}function lv(s){return{hpMult:De(s,"airframe")?1.3:1,gunRegenMult:De(s,"armorer")?1.6:1,missileBonus:De(s,"rails")?2:0,bvrBonus:De(s,"rails")?1:0,decoyBonus:De(s,"dispensers")?15:0}}const ha=1/120,da={name:"Tail gun",rateHz:10,muzzleVelMs:720,dispersionRad:.045,magazine:1e5,damage:1,effectiveRangeM:640,tracerColor:16752720,muzzleOffsets:[0]},hc={wwi:600,modern:1500},cv=["fokker-dr1","fokker-d7","albatros"],hv=[to,to,ch],dv=[fr,fr,Ao,Po],uv=[Ro,Do,Co];function so(s){return s[Math.floor(Math.random()*s.length)]}function mh(s){return s.era==="modern"?hv:cv.includes(s.id)?uv:dv}function fv(s){if(s.era==="modern"){const t=rs().foe;if(t==="mig29")return to;if(t==="su27")return ch}return so(mh(s))}class gh{constructor(t,e,n,i=null,r=null){this.renderer=t,this.mission=i,this.audio=r;const a=new URLSearchParams(window.location.search),o=a.get("theater"),l=o&&Kc[n.era].includes(o)?o:i?.theater??rg(n.era),c=i?.conditions??jc(),h=a.get("time"),d=a.get("weather");if(h&&["dawn","day","dusk","night"].includes(h)&&(c.time=h),d&&["clear","scattered","overcast"].includes(d)&&(c.weather=d),this.env=og(n.era,l,c),this.scene.add(this.env.group),this.scene.background=this.env.skyColor,this.scene.fog=new bo(this.env.fogColor,this.env.fogDensity),this.camera=new Ge(70,window.innerWidth/window.innerHeight,.5,4e4),this.effects=new hg(this.scene),this.projectiles=new _g(this.scene),n.era==="modern"){const f={spawn:this.effects.spawn.bind(this.effects),explosion:p=>{this.effects.explosion(p),this.audio?.explosionAt(p.distanceTo(this.player.model.position))}};this.missileSystem=new Sg(this.scene,f)}if(this.flak=new wg({spawn:this.effects.spawn.bind(this.effects),explosion:this.effects.explosion.bind(this.effects)},n.era),this.bombSystem=new Pg(this.scene,{spawn:this.effects.spawn.bind(this.effects),explosion:this.effects.explosion.bind(this.effects)}),this.buildAirfield(n.era),this.player=this.addCombatant(n,0,ss()==="arcade"),this.perks=lv(ds()),this.player.applyPerks(this.perks),i)this.startGroundRoll();else{const f=this.env.terrainHeight(0,0)+hc[n.era];this.player.respawn(0,f,0,n.cruiseSpeedMs*1.1,0)}if(this.spawnWingman(),i)this.missionState="running",this.setupMission(i);else{const f=rs();this.furball=f.count>=4;for(let p=0;p<f.count;p++)this.spawnSkirmishBandit();this.furball&&this.spawnWingman()}try{this.bestStreak=Number(localStorage.getItem(`jets.best.${n.era}`))||0}catch{}this.hud=pg(e,this.player.model,this.input),this.input.attach(),this.input.throttle=this.groundRoll?0:n.propulsion.kind==="jet"?.85:.8,Lo()&&(this.touch=new Kg(e,this.input),this.input.touch=this.touch)}scene=new $0;camera;env;effects;projectiles;combatants=[];pilots=new Map;trails=new Map;player;wingman=null;wingman2=null;wingman3=null;furball=!1;raidBombers=new Set;tailGunTimers=new Map;radioBox=null;vectorTimer=14;wingmanEngaged=new Map;radioCooldown=0;prevInbound=!1;killCam=null;escortee=null;respawnTimers=new Map;nextId=0;balloon=null;groundTargets=[];nextGroundId=990;flak;homeField=null;homeDeckY=null;groundRoll=!1;groundSpeed=0;hud;input=new Yn;touch=null;accumulator=0;cameraMode="cockpit";flybyPos=new R;blackBox=[];blackBoxTimer=0;gunRegenDelay=0;missileRegenTimer=20;bvrRegenTimer=30;flareRegenTimer=6;paused=!1;bestStreak=0;perks;chasePos=new R;playerDown="flying";kills=0;wingmanKills=0;wingman2Kills=0;aceCombatant=null;aceKilled=!1;missileSystem=null;selectedWeapon="gun";bombSystem;bombCooldown=0;bombRegenTimer=25;lockedTarget=null;launchCooldown=0;prevFiring=!1;flareCooldown=0;aiMissileCooldown=new Map;aiFlareCooldown=new Map;missionState="none";completeAnnounced=!1;onExit=null;addCombatant(t,e,n=!1){const i=this.combatants.length===0,r=new Wg(this.nextId++,this.scene,t,this.effects,e,n);return!i&&r.model instanceof sh&&(r.model.assists=!1),this.combatants.push(r),this.trails.set(r,new Tg(this.scene,t.era==="modern"?15922938:15261896,t.era==="modern"?.34:.28)),r}applyDifficulty(t){const e=bi();t.maxHp=Math.max(2,Math.round(t.maxHp*e.hpMult)),t.hp=t.maxHp,t.flares=e.flareCount}setupMission(t){const e=this.player.spec.era==="modern",n=mh(this.player.spec),i=this.env.terrainHeight(t.zone.x,t.zone.z),r=new R(t.zone.x,i,t.zone.z),a=e?1500:500;if(t.heritage&&e){const o=this.player.mesh.getObjectByName("fin");o&&o.material.color.setHex(11542560)}if(t.type==="intercept"){const o=e?$g:Xg,l=r.clone().sub(this.player.model.position).normalize(),c=e?9e3:3800;for(let h=0;h<2;h++){const d=this.addCombatant(o,1),f=t.zone.x+l.x*c+(Math.random()-.5)*1200,p=t.zone.z+l.z*c+(Math.random()-.5)*1200;d.respawn(f,this.env.terrainHeight(f,p)+(e?900:700)+h*120,p,o.cruiseSpeedMs,0),this.pilots.set(d,new Lg(r.clone().setY(i+400),fn(o),.4)),this.applyDifficulty(d),this.raidBombers.add(d)}for(let h=0;h<t.enemyCount;h++){const d=so(n),f=this.addCombatant(d,1),p=t.zone.x+l.x*(c+700)+(Math.random()-.5)*1800,g=t.zone.z+l.z*(c+700)+(Math.random()-.5)*1800;f.respawn(p,this.env.terrainHeight(p,g)+(e?1300:900),g,d.cruiseSpeedMs,0),this.pilots.set(f,new Ti(fn(d),bi().skill+Math.random()*.1)),this.applyDifficulty(f)}}else for(let o=0;o<t.enemyCount;o++){const l=so(n),c=this.addCombatant(l,1),h=(Math.random()-.5)*800,d=(Math.random()-.5)*800;c.respawn(t.zone.x+h,i+a+Math.random()*300,t.zone.z+d,l.cruiseSpeedMs,Math.random()*Math.PI*2),this.pilots.set(c,new Ti(fn(l),bi().skill+Math.random()*.1)),this.applyDifficulty(c)}if(t.ace){const o=this.combatants.find(l=>l.side===1&&l.alive);o&&(this.aceCombatant=o,this.pilots.set(o,new Ti(fn(o.spec),.95)),o.maxHp+=2,o.hp=o.maxHp,this.paintAce(o),this.toast(`⚠ ${t.ace.name.toUpperCase()} IS AIRBORNE — ${t.ace.kills} KILLS`,3200))}if(t.type==="balloon"&&t.balloonAltM&&(this.balloon={mesh:this.buildBalloonMesh(),pos:new R(t.zone.x,i+t.balloonAltM,t.zone.z),hp:8,alive:!0},this.balloon.mesh.position.copy(this.balloon.pos),this.scene.add(this.balloon.mesh)),t.type==="strike"&&(this.addGroundTarget("bunker",t.zone.x,t.zone.z),this.addGroundTarget("sam",t.zone.x+900,t.zone.z-700)),t.type==="sead")for(const[o,l]of[[0,0],[1400,-900],[-1100,1100]])this.addGroundTarget("sam",t.zone.x+o,t.zone.z+l);if(t.type==="convoy"){const o=new R(Math.sin(Math.random()*Math.PI*2),0,Math.cos(Math.random()*Math.PI*2)).normalize();for(let l=0;l<4;l++){const c=this.addGroundTarget("truck",t.zone.x-o.x*l*60,t.zone.z-o.z*l*60);c.vel=o.clone().multiplyScalar(8)}}if(t.type==="strafe")for(let o=0;o<4;o++)this.addGroundTarget("mg",t.zone.x+(o-1.5)*130,t.zone.z+o%2*80);if(t.type==="escort"&&t.route){const o=this.player.spec,l=e?1400:450,c=this.addCombatant(o,0);c.respawn(-300,this.env.terrainHeight(-300,200)+l,200,o.cruiseSpeedMs*.95,0);const h=t.route.map(d=>new R(d.x,this.env.terrainHeight(d.x,d.z)+l,d.z));this.pilots.set(c,new Dg(h,e?.8:.7)),this.escortee=c}}addGroundTarget(t,e,n){const i=this.env.terrainHeight(e,n),r=new Oe,a=h=>new we({color:h,flatShading:!0});let o=6,l=3;if(t==="bunker"){const h=new Et(new ae(14,5,14),a(7830898));h.position.y=2.5;const d=new Et(new ae(8,3,8),a(6449246));d.position.y=6.5,r.add(h,d),o=10,l=4}else if(t==="sam"){const h=new Et(new ae(6,2.5,6),a(5923154));h.position.y=1.25;const d=new Et(new Ve(2.4,2.4,.5,10),a(9081218));d.rotation.z=Math.PI/3,d.position.y=4,d.name="samDish",r.add(h,d),o=6,l=3}else if(t==="truck"){const h=new Et(new ae(2.4,2.2,6.5),a(5200452));h.position.y=1.6;const d=new Et(new ae(2.4,1.6,1.8),a(4081718));d.position.set(0,1.3,-4),r.add(h,d),o=2,l=1.5}else{const h=new Et(new Ve(2.6,2.8,1.2,8),a(6970432));h.position.y=.6;const d=new Et(new ae(.3,.3,2.4),a(3355443));d.position.set(0,1.4,-.8),d.rotation.x=-.3,r.add(h,d),o=3,l=1}r.position.set(e,i,n),this.scene.add(r);const c={id:this.nextGroundId++,kind:t,mesh:r,pos:new R(e,i+l,n),hp:o,alive:!0,cooldown:6+Math.random()*4};return this.groundTargets.push(c),c}buildAirfield(t){if(this.env.theater==="ocean"){this.buildCarrier();return}const e=this.env.terrainHeight(0,-200)+.4,n=new Oe,i=new Et(new xn(t==="modern"?44:36,1200),new we({color:t==="modern"?3816768:7038272}));if(i.rotation.x=-Math.PI/2,i.position.set(0,e,-200),n.add(i),t==="modern")for(let r=-740;r<=320;r+=90){const a=new Et(new xn(1.4,30),new we({color:13619918}));a.rotation.x=-Math.PI/2,a.position.set(0,e+.1,r),n.add(a)}for(const r of[-380,-180]){const a=new Et(new ae(26,9,34),new we({color:t==="modern"?6054495:6049592,flatShading:!0}));a.position.set(-58,this.env.terrainHeight(-58,r)+4.5,r),n.add(a)}this.scene.add(n),this.homeField={xMin:-26,xMax:26,zMin:-820,zMax:420}}buildCarrier(){const t=new Oe,e=20,n=new Et(new ae(34,18,300),new we({color:6120555,flatShading:!0}));n.position.y=e-9.8,t.add(n);const i=new Et(new ae(46,1.6,312),new we({color:3948613,flatShading:!0}));i.position.y=e-.8,t.add(i);for(let a=-140;a<=140;a+=34){const o=new Et(new xn(1.2,16),new we({color:14211278}));o.rotation.x=-Math.PI/2,o.position.set(0,e+.05,a),t.add(o)}const r=new Et(new ae(9,16,24),new we({color:5330781,flatShading:!0}));r.position.set(19,e+8,42),t.add(r),t.position.set(0,0,-200),this.scene.add(t),this.homeDeckY=e,this.homeField={xMin:-23,xMax:23,zMin:-356,zMax:-44}}groundHeightAt(t,e,n=1/0){const i=this.env.terrainHeight(t,e),r=this.homeField;return this.homeDeckY!==null&&r&&n>this.homeDeckY-2&&t>r.xMin&&t<r.xMax&&e>r.zMin&&e<r.zMax?Math.max(i,this.homeDeckY):i}rotateSpeed(){const t=this.player.spec.id;return this.player.spec.era==="modern"?t==="f14"||t==="f22"?86:72:this.player.spec.cruiseSpeedMs*.75}startGroundRoll(){const t=this.homeDeckY!==null,e=t?-70:380,n=this.groundHeightAt(0,e)+1.5;this.player.model.spawn(0,n,e,0,0),this.groundRoll=!0,this.groundSpeed=0;const i=Math.round(this.rotateSpeed()*1.94384);this.toast(t?`ON THE CAT — burner up, rotate at ${i} kt`:this.player.spec.era==="modern"?`CLEARED FOR TAKEOFF — rotate at ${i} kt`:"CLEARED FOR TAKEOFF — full throttle, ease back when she's light",4500)}stepGroundRoll(t){const e=this.player.model,n=e.controls,i=this.player.spec,r=i.propulsion,a=this.homeDeckY!==null;let o=r.kind==="jet"?n.afterburner?r.abThrustN:r.milThrustN*n.throttle:r.maxStaticThrustN*n.throttle;a&&this.groundSpeed<65&&(o+=i.massKg*9);const l=.03*i.massKg*9.81,c=.5*1.225*this.groundSpeed*this.groundSpeed*i.wingAreaM2*.06;this.groundSpeed=Math.max(0,this.groundSpeed+(o-l-c)/i.massKg*t);const h=new Ie().setFromQuaternion(e.quaternion,"YXZ");h.y+=-n.yaw*.25*t*Math.min(this.groundSpeed/10,1),e.quaternion.setFromEuler(new Ie(0,h.y,0,"YXZ"));const d=new R(0,0,-1).applyQuaternion(e.quaternion);e.velocity.copy(d).multiplyScalar(this.groundSpeed),e.position.addScaledVector(e.velocity,t),e.position.y=this.groundHeightAt(e.position.x,e.position.z)+1.5;const f=e.lastSample;f.speedMs=this.groundSpeed,f.altitudeM=e.position.y,f.headingRad=Math.atan2(d.x,-d.z);const p=this.rotateSpeed();if(this.groundSpeed>p&&n.pitch>.15){this.liftOff();return}const g=this.homeField;g&&(e.position.x<g.xMin||e.position.x>g.xMax||e.position.z<g.zMin||e.position.z>g.zMax)&&(this.groundRoll=!1,this.groundSpeed>p*.85&&this.liftOff())}liftOff(){this.groundRoll=!1,this.player.model.velocity.y=3,this.toast("AIRBORNE",2e3)}updateFlak(t){const e=this.player.model.position;let n=!1;if(this.mission&&this.missionState==="running"&&this.playerDown==="flying"&&e.y-this.env.terrainHeight(e.x,e.z)<2600)if(this.player.spec.era==="wwi"){const a=this.mission;n=Math.hypot(e.x-a.zone.x,e.z-a.zone.z)<2600}else for(const a of this.groundTargets)a.alive&&Math.hypot(e.x-a.pos.x,e.z-a.pos.z)<2400&&(n=!0);const i=this.flak.update(t,n,{position:this.player.model.position,velocity:this.player.model.velocity},r=>this.onCombatantHit(this.player,r,-1));i!==null&&this.audio?.explosionAt(i)}buildBalloonMesh(){const t=new Oe,e=new Et(new xr(9,12,10),new we({color:12103824,flatShading:!0}));e.scale.set(1,.75,1.4),t.add(e);const n=new Et(new ae(1.6,1.2,1.6),new we({color:4864808}));return n.position.y=-10,t.add(n),t}noteAceDown(t){t!==this.aceCombatant||this.aceKilled||!this.mission?.ace||(this.aceKilled=!0,this.toast(`★ ${this.mission.ace.name.toUpperCase()} GOES DOWN ★`,3600),this.audio?.sting("ace"))}paintAce(t){const e=new Tt(11542560);t.spec.era==="wwi"?t.mesh.traverse(n=>{const r=n.material;r?.color&&r.color.lerp(e,.7)}):t.mesh.traverse(n=>{if(n.name!=="fin")return;const i=n.material;i?.color&&i.color.setHex(11542560)})}spawnWingman(){const t=this.player.spec;this.wingman||(this.wingman=this.addCombatant(t,0),this.pilots.set(this.wingman,new Si(fn(t),this.player.model,this.mission?.wingman?.skill??.75)));const e=this.player.model.position,n=new R(70,12,90).applyQuaternion(this.player.model.quaternion);if(this.wingman.respawn(e.x+n.x,Math.max(e.y+n.y,this.env.terrainHeight(e.x+n.x,e.z+n.z)+200),e.z+n.z,t.cruiseSpeedMs*1.1,this.player.model.sample.headingRad),this.resetTrail(this.wingman),this.mission?.wingman2||this.furball){this.wingman2||(this.wingman2=this.addCombatant(t,0),this.pilots.set(this.wingman2,new Si(fn(t),this.player.model,this.mission?.wingman2?.skill??.7,-1)));const i=new R(-70,12,90).applyQuaternion(this.player.model.quaternion);this.wingman2.respawn(e.x+i.x,Math.max(e.y+i.y,this.env.terrainHeight(e.x+i.x,e.z+i.z)+220),e.z+i.z,t.cruiseSpeedMs*1.1,this.player.model.sample.headingRad),this.resetTrail(this.wingman2)}if(this.furball){this.wingman3||(this.wingman3=this.addCombatant(t,0),this.pilots.set(this.wingman3,new Si(fn(t),this.player.model,.7,1)));const i=new R(130,24,170).applyQuaternion(this.player.model.quaternion);this.wingman3.respawn(e.x+i.x,Math.max(e.y+i.y,this.env.terrainHeight(e.x+i.x,e.z+i.z)+240),e.z+i.z,t.cruiseSpeedMs*1.1,this.player.model.sample.headingRad),this.resetTrail(this.wingman3)}}resetTrail(t){this.trails.get(t)?.reset(t.model,t.spec.wingSpanM/2)}spawnSkirmishBandit(t){const e=fv(this.player.spec);let n=t;n||(n=this.addCombatant(e,1),this.pilots.set(n,new Ti(fn(e),bi().skill)));const i=e.era==="modern"?4e3:1200,r=this.player.model.position,a=Math.random()*Math.PI*2,o=r.x+Math.sin(a)*i,l=r.z-Math.cos(a)*i,c=Math.max(r.y+(Math.random()-.3)*400,this.env.terrainHeight(o,l)+400);n.respawn(o,c,l,e.cruiseSpeedMs,Math.random()*Math.PI*2),this.resetTrail(n),this.applyDifficulty(n)}respawnAll(){const t=this.env.terrainHeight(0,0)+hc[this.player.spec.era];if(this.player.respawn(0,t,0,this.player.spec.cruiseSpeedMs*1.1,0),this.playerDown="flying",this.spawnWingman(),!this.mission){for(const e of this.combatants)e.side===1&&this.spawnSkirmishBandit(e);this.respawnTimers.clear()}}getResult(){return{kills:this.kills,survived:this.playerDown==="flying"||this.playerDown==="landed",missionComplete:this.mission?this.missionState==="complete":null,wingmanKills:this.wingmanKills,wingmanLost:!!this.wingman&&!this.wingman.alive,wingman2Kills:this.wingman2Kills,wingman2Lost:!!this.wingman2&&!this.wingman2.alive,aceKilled:this.aceKilled,landed:this.playerDown==="landed"}}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.hud.resize()}update(t){if(this.input.menuRequested)return this.input.menuRequested=!1,!1;if(this.input.cameraToggleRequested&&(this.input.cameraToggleRequested=!1,this.cameraMode=this.cameraMode==="cockpit"?"chase":this.cameraMode==="chase"?"flyby":"cockpit"),this.input.respawnRequested&&(this.input.respawnRequested=!1,this.mission||(this.hud.clearCrash(),this.respawnAll())),this.input.muteToggleRequested&&(this.input.muteToggleRequested=!1,this.audio?.toggleMute()),this.input.blackBoxRequested&&(this.input.blackBoxRequested=!1,this.dumpBlackBox()),this.input.wingmanOrderRequested){this.input.wingmanOrderRequested=!1;const r=this.wingman?this.pilots.get(this.wingman):null;if(r instanceof Si){r.mode=r.mode==="engage"?"cover":"engage";const a=this.wingman2?this.pilots.get(this.wingman2):null;a instanceof Si&&(a.mode=r.mode),this.toast(r.mode==="engage"?"WINGMEN: ENGAGE — cleared to hunt":"WINGMEN: COVER — on your wing",1800)}}if(this.input.pauseRequested&&(this.input.pauseRequested=!1,this.paused=!this.paused,this.toast(this.paused?"⏸ PAUSED — P to resume":"▶ RESUMED",this.paused?6e4:1200)),this.paused)return this.renderer.render(this.scene,this.camera),!0;for(this.recordBlackBox(t),this.killCam&&(this.killCam.t-=t,this.killCam.t<=0?this.killCam=null:t*=.35),this.updateArcadeResupply(t),this.handleWeaponInputs(t),this.playerDown==="flying"&&this.input.update(this.player.model.controls,t),this.accumulator+=Math.min(t,.1);this.accumulator>=ha;)this.stepPhysics(ha),this.accumulator-=ha;if(!this.mission)for(const r of this.combatants){if(r===this.player||r.alive){this.respawnTimers.delete(r);continue}const a=r===this.wingman||r===this.wingman2||r===this.wingman3,o=(this.respawnTimers.get(r)??(a?15:7))-t;o<=0?(this.respawnTimers.delete(r),a?this.spawnWingman():this.spawnSkirmishBandit(r)):this.respawnTimers.set(r,o)}this.updateFlak(t),this.updateRadio(t);const e=this.missionState;this.evaluateMission(),e==="running"&&this.missionState==="failed"&&this.audio?.sting("defeat");for(const r of this.combatants)r.updateEffects(t);for(const[r,a]of this.trails)a.update(t,r.model,r.spec.wingSpanM/2,r.alive&&Ag(r.model)&&!this.groundRoll);this.effects.update(t);for(const r of this.combatants){r.mesh.position.copy(r.model.position),r.mesh.quaternion.copy(r.model.quaternion);const a=r.mesh.getObjectByName("abFlame");a&&(a.visible=r.model.controls.afterburner&&r.alive);const o=r.mesh.getObjectByName("propDisc"),l=r.spec.blipSwitch&&r.model.controls.brake;o&&(o.rotation.z+=t*40*(l?.05:r.model.controls.throttle));const c=r.mesh.getObjectByName("muzzleFlash");if(c){const h=r===this.player?this.playerDown==="flying"&&this.input.firing&&this.selectedWeapon==="gun"&&r.gun.ammo>0:!!this.pilots.get(r)?.wantsFire&&r.alive&&r.gun.ammo>0;c.visible=h&&Math.random()>.35,c.visible&&c.scale.setScalar(1.2+Math.random()*1.2)}if(r.spec.id==="f14"){const h=Xt.clamp((r.model.sample.speedMs-130)/170,0,1)*.55,d=r.mesh.getObjectByName("swingL"),f=r.mesh.getObjectByName("swingR");d&&(d.rotation.y=h),f&&(f.rotation.y=-h)}}{const r=this.player.mesh.getObjectByName("gear");if(r){const a=this.player.model.position.y-this.env.terrainHeight(this.player.model.position.x,this.player.model.position.z);r.visible=this.groundRoll||this.playerDown==="landed"||a<250&&this.player.model.sample.speedMs<130}}if(this.updateCamera(t),this.touch?.sync(),this.audio){const r=this.player.model.controls,a=this.playerDown==="flying";this.audio.update(t,{era:this.player.spec.era,throttle:a?r.throttle:0,speedMs:this.player.model.sample.speedMs,afterburner:r.afterburner&&a,firingGun:a&&this.input.firing&&this.selectedWeapon==="gun"&&this.player.gun.ammo>0,gunRateHz:this.player.gun.spec.rateHz,growl:this.player.missileSpec&&this.selectedWeapon==="msl"?this.lockedTarget?"lock":"seek":"off",inbound:!!this.missileSystem?.inboundFor(this.player.id),combat:(()=>{const o=this.pickTarget(this.player);if(!o||this.playerDown!=="flying")return 0;const l=o.model.position.distanceTo(this.player.model.position);return Xt.clamp(1-l/4500,0,1)})()})}const n=this.player.model.position,i=n.y-this.env.terrainHeight(n.x,n.z);return this.hud.update(i,this.cameraMode==="cockpit",this.combatInfo()),this.renderer.render(this.scene,this.camera),!0}toastEl=null;toast(t,e=2200){this.toastEl?.remove();const n=document.createElement("div");n.className="kill-toast",n.textContent=t,document.getElementById("ui")?.appendChild(n),this.toastEl=n,setTimeout(()=>{this.toastEl===n&&(n.remove(),this.toastEl=null)},e)}announceKill(){const e=this.player.spec.era==="wwi"?["VICTORY!","HE GOES DOWN!","GOT HIM!"]:["SPLASH ONE!","GOOD KILL!","BANDIT DOWN!"];if(this.toast(e[Math.min(e.length-1,Math.floor(Math.random()*e.length))]),this.kills>this.bestStreak){this.bestStreak=this.kills;try{localStorage.setItem(`jets.best.${this.player.spec.era}`,String(this.bestStreak))}catch{}}}recordBlackBox(t){if(this.blackBoxTimer-=t,this.blackBoxTimer>0)return;this.blackBoxTimer=.1;const e=this.player.model,n=e.sample,i=navigator.getGamepads?navigator.getGamepads():[],r=i&&Array.from(i).find(a=>a&&a.connected);this.blackBox.push({pad:r?r.axes.slice(0,4).map(a=>+a.toFixed(2)):null,t:+performance.now().toFixed(0),inP:+e.controls.pitch.toFixed(2),inR:+e.controls.roll.toFixed(2),inY:+e.controls.yaw.toFixed(2),thr:+e.controls.throttle.toFixed(2),bank:Math.round(n.bankRad*57.3),pitch:Math.round(n.pitchRad*57.3),hdg:Math.round((n.headingRad*57.3+360)%360),g:+n.gLoad.toFixed(1),aoa:+(n.alphaRad*57.3).toFixed(1),beta:+(n.betaRad*57.3).toFixed(1),spd:Math.round(n.speedMs),alt:Math.round(n.altitudeM),cam:this.cameraMode}),this.blackBox.length>300&&this.blackBox.shift()}dumpBlackBox(){const t=navigator.getGamepads?Array.from(navigator.getGamepads()).filter(o=>o&&o.connected):[],e={build:"2026-07-12 15:11Z",aircraft:this.player.spec.id,handling:ss(),mouseFly:this.input.mouseFly,touch:!!this.touch,gamepads:t.map(o=>({id:o.id,axes:o.axes.map(l=>+l.toFixed(3))})),samples:this.blackBox},n=JSON.stringify(e);navigator.clipboard?.writeText(n).catch(()=>{});const i=new Blob([n],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(i),r.download="flight-data.json",r.click(),URL.revokeObjectURL(r.href);const a=document.createElement("div");a.className="crash-banner",a.style.borderColor="#7ec8ff",a.style.color="#7ec8ff",a.textContent="FLIGHT DATA SAVED (copied + downloaded) — paste it to Claude",document.getElementById("ui")?.appendChild(a),setTimeout(()=>a.remove(),3500)}updateArcadeResupply(t){if(ss()!=="arcade"||this.playerDown!=="flying")return;const e=this.input.firing&&this.selectedWeapon==="gun";this.gunRegenDelay=e?1.2:Math.max(0,this.gunRegenDelay-t),!e&&this.gunRegenDelay<=0&&this.player.gun.regenerate(t,(this.player.spec.era==="modern"?35:12)*this.perks.gunRegenMult);const n=this.player;n.missileSpec&&n.missiles<n.missileCap&&(this.missileRegenTimer-=t,this.missileRegenTimer<=0&&(this.missileRegenTimer=20,n.missiles++)),n.bvrSpec&&n.bvrMissiles<n.bvrCap&&(this.bvrRegenTimer-=t,this.bvrRegenTimer<=0&&(this.bvrRegenTimer=30,n.bvrMissiles++)),n.bombs<n.bombCap&&(this.bombRegenTimer-=t,this.bombRegenTimer<=0&&(this.bombRegenTimer=25,n.bombs++)),n.missileSpec&&(n.flares<n.decoyCap||n.chaff<n.decoyCap)&&(this.flareRegenTimer-=t,this.flareRegenTimer<=0&&(this.flareRegenTimer=6,n.flares<n.decoyCap&&n.flares++,n.chaff<n.decoyCap&&n.chaff++))}handleWeaponInputs(t){if(this.launchCooldown-=t,this.flareCooldown-=t,this.input.weaponToggleRequested){this.input.weaponToggleRequested=!1;const i=this.player.missileSpec?["gun","msl","bvr","bomb"]:["gun","bomb"];this.selectedWeapon=i[(i.indexOf(this.selectedWeapon)+1)%i.length],this.lockedTarget=null}this.input.lockRequested&&(this.input.lockRequested=!1,this.tryLock()),this.input.flareRequested&&(this.input.flareRequested=!1,this.missileSystem&&this.flareCooldown<=0&&this.playerDown==="flying"&&(this.flareCooldown=.25,this.player.flares>0&&(this.player.flares--,this.missileSystem.dropFlare(this.player.id,this.player.model.position,this.player.model.velocity,"flare")),this.player.chaff>0&&(this.player.chaff--,this.missileSystem.dropFlare(this.player.id,this.player.model.position,this.player.model.velocity,"chaff"))));const e=this.selectedWeapon==="bvr"?(this.player.bvrSpec?.lockRangeM??16e3)*1.05:9e3;this.lockedTarget&&(!this.lockedTarget.alive||!this.inSeekerEnvelope(this.lockedTarget,1,e))&&(this.lockedTarget=null),(this.selectedWeapon==="msl"||this.selectedWeapon==="bvr")&&!this.lockedTarget&&this.tryLock();const n=this.playerDown==="flying"&&this.input.firing;if(this.bombCooldown-=t,this.selectedWeapon==="bomb"&&n&&this.bombCooldown<=0&&this.player.bombs>0&&!this.groundRoll){this.bombCooldown=.45,this.player.bombs--;const i=this.player.model,r=new R(0,-1.6,0).applyQuaternion(i.quaternion).add(i.position);this.bombSystem.drop(this.player.id,r,i.velocity),this.audio?.launch()}if(n&&!this.prevFiring&&(this.selectedWeapon==="msl"||this.selectedWeapon==="bvr")&&this.missileSystem){const i=this.selectedWeapon==="bvr",r=i?this.player.bvrSpec:this.player.missileSpec,a=i?this.player.bvrMissiles:this.player.missiles;if(this.lockedTarget&&r&&a>0&&this.launchCooldown<=0){this.launchCooldown=1,i?this.player.bvrMissiles--:this.player.missiles--;const o=this.player.model,l=new R(0,0,-1).applyQuaternion(o.quaternion);this.missileSystem.launch(r,this.player.id,o.position.clone().addScaledVector(l,3),l,o.velocity,this.lockedTarget.id),this.audio?.launch()}}this.prevFiring=n}inSeekerEnvelope(t,e,n){const i=this.player.model,r=t.model.position.clone().sub(i.position);if(r.length()>n)return!1;const o=new R(0,0,-1).applyQuaternion(i.quaternion);return r.normalize().dot(o)>Math.cos(e)}tryLock(){const t=this.selectedWeapon==="bvr"?this.player.bvrSpec:this.player.missileSpec;if(!t)return;let e=null,n=1/0;for(const i of this.combatants){if(!i.alive||i.side===this.player.side||!this.inSeekerEnvelope(i,Math.min(t.seekerConeRad*.7,.5),t.lockRangeM))continue;const r=i.model.position.distanceToSquared(this.player.model.position);r<n&&(n=r,e=i)}this.lockedTarget=e}updateAiWeapons(t){if(this.missileSystem)for(const e of this.combatants){if(e===this.player||!e.alive||!e.missileSpec)continue;const n=(this.aiMissileCooldown.get(e)??3)-t;this.aiMissileCooldown.set(e,n);const i=this.pickTarget(e);if(n<=0&&i&&e.missiles>0){const a=i.model.position.clone().sub(e.model.position),o=a.length(),l=new R(0,0,-1).applyQuaternion(e.model.quaternion),c=Math.acos(Xt.clamp(a.normalize().dot(l),-1,1)),h=i===this.player&&this.player.spec.id==="f22"?.55:1,d=e.bvrSpec&&e.bvrMissiles>0&&o>4500*h&&o<9500*h&&c<.25,f=o>1200&&o<5500&&c<.35&&e.missiles>0;if(d||f){const p=d?e.bvrSpec:e.missileSpec;d?e.bvrMissiles--:e.missiles--;const[g,v]=bi().missileCadence;this.aiMissileCooldown.set(e,g+Math.random()*(v-g)),this.missileSystem.launch(p,e.id,e.model.position.clone().addScaledVector(l,3),l,e.model.velocity,i.id),e.model.position.distanceTo(this.player.model.position)<4e3&&this.audio?.launch()}}const r=(this.aiFlareCooldown.get(e)??0)-t;if(this.aiFlareCooldown.set(e,r),r<=0&&(e.flares>0||e.chaff>0)&&this.missileSystem.inboundFor(e.id)){this.aiFlareCooldown.set(e,bi().flareBurstCooldown);for(let a=0;a<2;a++)e.flares>0&&(e.flares--,this.missileSystem.dropFlare(e.id,e.model.position,e.model.velocity,"flare")),e.chaff>0&&(e.chaff--,this.missileSystem.dropFlare(e.id,e.model.position,e.model.velocity,"chaff"))}}}stepPhysics(t){for(const r of this.combatants){const a=this.pilots.get(r);if(!a||!r.alive)continue;const o=r.model.position,l=o.y-this.env.terrainHeight(o.x,o.z);a.update(t,r.model,this.pickTarget(r)?.model??null,l)}for(const r of this.combatants){if(r===this.player&&this.groundRoll){this.stepGroundRoll(t);continue}r.model.step(t)}for(const r of this.combatants){const a=this.pilots.get(r),o=r===this.player?this.playerDown==="flying"&&this.input.firing&&this.selectedWeapon==="gun":!!a&&r.alive&&a.wantsFire,l=r.model;r.gun.update(t,o,r.id,l.position,l.quaternion,l.velocity,this.projectiles)}for(const r of this.raidBombers){if(!r.alive)continue;const a=(this.tailGunTimers.get(r)??.5)-t;if(a>0){this.tailGunTimers.set(r,a);continue}let o=null,l=da.effectiveRangeM;for(const f of this.combatants){if(!f.alive||f.side===r.side||f===this.player&&this.playerDown!=="flying")continue;const p=f.model.position.distanceTo(r.model.position);p<l&&(l=p,o=f)}if(!o){this.tailGunTimers.set(r,.3);continue}this.tailGunTimers.set(r,.2+Math.random()*.25);const c=r.model.position.clone().add(new R(0,1.5,7).applyQuaternion(r.model.quaternion)),d=o.model.position.clone().addScaledVector(o.model.velocity,l/da.muzzleVelMs).sub(c).normalize();this.projectiles.spawn(r.id,da,c,d,r.model.velocity)}if(this.missileSystem){this.updateAiWeapons(t);for(const a of this.groundTargets){if(a.kind!=="sam"||!a.alive||this.playerDown!=="flying")continue;a.cooldown-=t;const o=a.mesh.getObjectByName("samDish");o&&(o.rotation.y+=t*1.5);const l=a.pos.distanceTo(this.player.model.position),c=this.player.spec.id==="f22"?.55:1;if(a.cooldown<=0&&l<ia.lockRangeM*c){a.cooldown=13+Math.random()*6;const h=this.player.model.position.clone().sub(a.pos).normalize().add(new R(0,.6,0)).normalize();this.missileSystem.launch(ia,a.id,a.pos.clone().addScaledVector(h,4),h,new R,this.player.id),this.audio?.launch(),this.toast("⚠ SAM LAUNCH",1600)}}const r=this.combatants.map(a=>({id:a.id,alive:a.alive,position:a.model.position,velocity:a.model.velocity}));this.missileSystem.update(t,r,this.env.terrainHeight,(a,o,l)=>{const c=this.combatants.find(h=>h.id===a);c&&this.onCombatantHit(c,o,l)})}const e=[];for(const r of this.combatants)r.alive&&e.push({id:r.id,position:r.model.position,radiusM:r.radiusM,onHit:(a,o)=>this.onCombatantHit(r,a,o)});const n={bunker:10,sam:7,truck:4,mg:3.5},i={bunker:"TARGET DESTROYED",sam:"SAM DESTROYED",truck:"TRUCK DESTROYED",mg:"MG POST SILENCED"};for(const r of this.groundTargets)r.alive&&e.push({id:r.id,position:r.pos,radiusM:n[r.kind],onHit:a=>{r.hp-=a,this.effects.spawn(r.pos.clone(),{size:3.5,growth:6,life:.6,color:16764006,opacity:.8}),r.hp<=0&&r.alive&&(r.alive=!1,this.effects.explosion(r.pos.clone()),this.audio?.explosionAt(r.pos.distanceTo(this.player.model.position)),r.mesh.visible=!1,r.kind!=="bunker"&&this.kills++,this.toast(i[r.kind]))}});if(this.balloon?.alive){const r=this.balloon;e.push({id:999,position:r.pos,radiusM:11,onHit:a=>{r.hp-=a,this.effects.spawn(r.pos.clone(),{size:3,growth:5,life:.5,color:16764006,opacity:.8}),r.hp<=0&&r.alive&&(r.alive=!1,this.effects.explosion(r.pos.clone()),this.effects.spawn(r.pos.clone(),{size:20,growth:25,life:1.4,color:16738832,opacity:.9}),r.mesh.visible=!1,this.kills++)}})}for(const r of this.groundTargets)r.kind!=="truck"||!r.alive||!r.vel||(r.pos.addScaledVector(r.vel,t),r.pos.y=this.env.terrainHeight(r.pos.x,r.pos.z)+1.5,r.mesh.position.set(r.pos.x,r.pos.y-1.5,r.pos.z),r.mesh.quaternion.setFromUnitVectors(new R(0,0,-1),r.vel.clone().normalize()));this.projectiles.update(t,e,this.env.terrainHeight),this.bombSystem.update(t,this.env.terrainHeight,e,r=>this.audio?.explosionAt(r.distanceTo(this.player.model.position)));for(const r of this.combatants)this.groundCheck(r)}pickTarget(t){let e=null,n=1/0;for(const i of this.combatants){if(i===t||!i.alive||i.side===t.side||i===this.player&&this.playerDown!=="flying")continue;const r=t.model.position.distanceToSquared(i.model.position);r<n&&(n=r,e=i)}return e}onCombatantHit(t,e,n){const i=t.alive;if(t.hit(e,n),i&&!t.alive&&this.audio?.explosionAt(t.model.position.distanceTo(this.player.model.position)),t===this.player){this.audio?.hitThud(),!this.player.alive&&this.playerDown==="flying"&&(this.playerDown="shot-down",this.hud.showCrash(this.mission?"✝ SHOT DOWN — press Esc":"✝ SHOT DOWN — press R"),this.startKillCam(this.player));return}if(i&&!t.alive&&t.side!==this.player.side){if(t.lastHitBy===this.player.id){if(this.kills++,this.announceKill(),this.startKillCam(t),this.wingman?.alive&&Math.random()<.45){const r=this.mission?.wingman?.name??(this.player.spec.era==="wwi"?"Wingman":"Two");this.radio(this.player.spec.era==="wwi"?`${r}: Oh, well done!`:`${r}: good kill, good kill.`)}}else if(this.wingman&&t.lastHitBy===this.wingman.id){this.wingmanKills++;const r=this.mission?.wingman?.name;this.toast(this.player.spec.era==="wwi"?`${r?r.toUpperCase():"YOUR WINGMAN"} GETS ONE!`:`${r?r.toUpperCase():"WINGMAN"}: SPLASH ONE`)}else if(this.wingman2&&t.lastHitBy===this.wingman2.id){this.wingman2Kills++;const r=this.mission?.wingman2?.name;this.toast(this.player.spec.era==="wwi"?`${r?r.toUpperCase():"YOUR WINGMAN"} GETS ONE!`:`${r?r.toUpperCase():"WINGMAN"}: SPLASH ONE`)}}if(i&&!t.alive&&t===this.wingman2){const r=this.mission?.wingman2?.name;this.toast(`${r?r.toUpperCase():"YOUR SECOND WINGMAN"} IS DOWN`,2600)}if(i&&!t.alive&&t===this.wingman){const r=this.mission?.wingman?.name;this.toast(this.player.spec.era==="wwi"?`${r?r.toUpperCase():"YOUR WINGMAN"} GOES DOWN`:`${r?r.toUpperCase():"WINGMAN"} IS DOWN`,2600)}i&&!t.alive&&this.noteAceDown(t)}groundCheck(t){if(t===this.player&&this.groundRoll)return;const e=t.model.position,n=t===this.player?this.groundHeightAt(e.x,e.z,e.y):this.env.terrainHeight(e.x,e.z);if(!(e.y>=n+1.5))if(t===this.player){if(this.playerDown==="landed"){e.y=n+1.5,t.model.velocity.setScalar(0);return}if(this.playerDown==="flying"){const i=this.homeField,r=t.model.sample,a=!!i&&e.x>i.xMin&&e.x<i.xMax&&e.z>i.zMin&&e.z<i.zMax,o=t.model.velocity.y>-4.5&&r.speedMs<(t.spec.era==="modern"?105:34)&&Math.abs(r.bankRad)<.35;if(a&&o){this.playerDown="landed",e.y=n+1.5,t.model.velocity.setScalar(0);const l=this.homeDeckY!==null;this.toast(l?"TRAP — GOOD WIRE":"WHEELS DOWN",2400),this.hud.showCrash(this.missionState==="complete"?l?"✔ GOOD TRAP — welcome aboard, press Esc":"✔ WHEELS DOWN — home safe, press Esc":this.mission?"LANDED — objective incomplete, press Esc":"✔ LANDED — press R to fly again");return}this.playerDown="crashed",this.player.kill(),this.audio?.explosionAt(0),this.hud.showCrash(this.mission?"✝ CRASHED — press Esc":"✝ CRASHED — press R to fly again")}e.y=n+1.5,t.model.velocity.setScalar(0)}else t.alive&&this.audio?.explosionAt(e.distanceTo(this.player.model.position)),t.alive&&(t.kill(),t.side!==this.player.side&&(this.kills++,this.announceKill()),this.noteAceDown(t)),this.effects.explosion(e.clone()),t.mesh.visible=!1,e.y=n-100,t.model.velocity.setScalar(0)}evaluateMission(){if(!this.mission||this.missionState!=="running")return;const t=this.mission;if(this.playerDown!=="flying"){this.missionState="failed";return}const e=this.combatants.filter(i=>i.side===1).every(i=>!i.alive);let n=!1;if(t.type==="patrol")n=e;else if(t.type==="balloon")n=!!this.balloon&&!this.balloon.alive;else if(t.type==="strike"){const i=this.groundTargets.find(r=>r.kind==="bunker");n=!!i&&!i.alive}else if(t.type==="sead"){const i=this.groundTargets.filter(r=>r.kind==="sam");n=i.length>0&&i.every(r=>!r.alive)}else if(t.type==="convoy"){const i=this.groundTargets.filter(r=>r.kind==="truck");n=i.filter(r=>!r.alive).length>=3;for(const r of i)if(r.alive&&Math.hypot(r.pos.x-t.zone.x,r.pos.z-t.zone.z)>6e3&&!n){this.missionState="failed",this.hud.showCrash("THE CONVOY GOT THROUGH — press Esc");return}}else if(t.type==="strafe"){const i=this.groundTargets.filter(r=>r.kind==="mg");n=i.length>0&&i.every(r=>!r.alive)}else if(t.type==="intercept"){for(const i of this.raidBombers.size?this.raidBombers:this.combatants){if(i.side!==1||!i.alive)continue;if(Math.hypot(i.model.position.x-t.zone.x,i.model.position.z-t.zone.z)<1200){this.missionState="failed",this.hud.showCrash("THE BOMBERS GOT THROUGH — press Esc");return}}n=this.raidBombers.size?[...this.raidBombers].every(i=>!i.alive):e}else if(t.type==="escort"){if(this.escortee&&!this.escortee.alive){this.missionState="failed",this.hud.showCrash("THE TWO-SEATER IS DOWN — press Esc");return}n=!!(this.escortee?this.pilots.get(this.escortee):null)?.finished}n&&(this.missionState="complete",this.completeAnnounced||(this.completeAnnounced=!0,this.hud.showCrash("✔ MISSION COMPLETE — press Esc to return"),this.audio?.sting("victory")))}combatInfo(){const t={ammo:this.player.gun.ammo,kills:this.kills,best:this.bestStreak,hpFrac:Math.max(0,this.player.hp/this.player.maxHp)},e=this.lockedTarget??this.pickTarget(this.player);if(e){const n=Oi(),i=e.model.position.clone().project(this.camera),r=i.z<1&&Math.abs(i.x)<1&&Math.abs(i.y)<1;t.target={onScreen:r,sx:(i.x+1)/2*n.w,sy:(1-i.y)/2*n.h,dirX:i.x,dirY:i.y,behind:i.z>=1,rangeM:e.model.position.distanceTo(this.player.model.position),locked:e===this.lockedTarget}}if(this.wingman){const n=this.pilots.get(this.wingman),i=this.wingman2?.alive?this.mission?.wingman2?.name:void 0;t.wingman={alive:this.wingman.alive,mode:n instanceof Si?n.mode:"engage",name:this.mission?.wingman?.name?`${this.mission.wingman.name}${i?` + ${i}`:""}`:void 0}}if(this.player.missileSpec){const n=this.player.model.position,i=this.player.model.sample.headingRad,r=[];for(const a of this.combatants){if(a===this.player||!a.alive)continue;const o=a.model.position.distanceTo(n);if(o>3e4)continue;const l=a.model.position.x-n.x,c=a.model.position.z-n.z;let h=Math.atan2(l,-c)-i;if(h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI),Math.abs(h)>Math.PI/3)continue;const d=a===this.lockedTarget;let f;if(d){const p=a.model.position.clone().sub(n).normalize();f=this.player.model.velocity.clone().sub(a.model.velocity).dot(p)}r.push({bearingRad:h,rangeM:o,hostile:a.side!==0,bugged:d,closureMs:f})}t.contacts=r}if(this.player.missileSpec){t.weapon={kind:this.selectedWeapon,name:this.selectedWeapon==="gun"?"GUN":this.selectedWeapon==="bomb"?"MK-82":this.selectedWeapon==="bvr"?this.player.bvrSpec.name:this.player.missileSpec.name,missiles:this.selectedWeapon==="bomb"?this.player.bombs:this.selectedWeapon==="bvr"?this.player.bvrMissiles:this.player.missiles,flares:this.player.flares,locked:!!this.lockedTarget};const n=this.missileSystem?.inboundFor(this.player.id);if(n){const i=n.pos.clone().project(this.camera);t.threat={dirX:i.x,dirY:i.y,behind:i.z>=1}}else{for(const i of this.combatants){if(!i.alive||i.side===this.player.side||!i.bvrSpec)continue;const r=this.player.model.position.clone().sub(i.model.position);if(r.length()>11e3)continue;const o=new R(0,0,-1).applyQuaternion(i.model.quaternion);if(r.normalize().dot(o)>Math.cos(.3)){const l=i.model.position.clone().project(this.camera);t.rwr={dirX:l.x,dirY:l.y,behind:l.z>=1};break}}if(!t.rwr){for(const i of this.groundTargets)if(!(i.kind!=="sam"||!i.alive)&&i.pos.distanceTo(this.player.model.position)<ia.lockRangeM*1.2){const r=i.pos.clone().project(this.camera);t.rwr={dirX:r.x,dirY:r.y,behind:r.z>=1};break}}}}if(!this.player.missileSpec&&this.selectedWeapon==="bomb"&&(t.weapon={kind:"bomb",name:"COOPER",missiles:this.player.bombs,flares:0,locked:!1}),this.selectedWeapon==="bomb"&&this.player.bombs>0&&this.playerDown==="flying"&&!this.groundRoll){const n=this.player.model,i=new R;if(Cg(n.position,n.velocity,this.env.terrainHeight,i)){const r=i.project(this.camera),a=Oi();t.ccip={onScreen:r.z<1&&Math.abs(r.x)<1&&Math.abs(r.y)<1,sx:(r.x+1)/2*a.w,sy:(1-r.y)/2*a.h}}}if(this.mission){const n=this.mission,i=this.player.model.position,r=this.missionState==="complete"||this.missionState==="failed",a=r?0:n.type==="escort"&&this.escortee?.alive?this.escortee.model.position.x:n.zone.x,o=r?-200:n.type==="escort"&&this.escortee?.alive?this.escortee.model.position.z:n.zone.z,l=Math.atan2(a-i.x,-(o-i.z)),c=Math.hypot(a-i.x,o-i.z),h=this.combatants.filter(g=>g.side===1&&g.alive).length,d=this.player.spec.era==="modern",f=this.homeDeckY!==null?"the boat":"home plate",p=this.missionState==="complete"?`Mission complete — RTB ${f}`:this.missionState==="failed"?`Mission failed — RTB ${f}`:n.type==="patrol"?`${d?"CAP":"Patrol"}: clear the sector (${h} hostile)`:n.type==="balloon"?"Destroy the observation balloon":n.type==="strike"?`Strike: destroy the bunker${this.groundTargets.some(g=>g.kind==="sam"&&g.alive)?" (SAM active)":""}`:n.type==="sead"?`SEAD: kill the SAM ring (${this.groundTargets.filter(g=>g.kind==="sam"&&g.alive).length} up)`:n.type==="convoy"?`Convoy: stop the trucks (${this.groundTargets.filter(g=>g.kind==="truck"&&g.alive).length} rolling)`:n.type==="strafe"?`Silence the machine-gun line (${this.groundTargets.filter(g=>g.kind==="mg"&&g.alive).length} firing)`:n.type==="intercept"?`Intercept: stop the bombers (${h} inbound)`:d?"Protect the strike package":"Escort the two-seater";t.mission={text:p,bearingRad:l,distanceM:c,state:this.missionState}}if(this.homeField&&this.playerDown==="flying"&&(!this.mission||this.missionState!=="running")){const n=this.player.model.position,i=this.homeDeckY!==null?-90:240,r=this.groundHeightAt(0,i)+2,a=Math.hypot(n.x,n.z-i);if(a<6e3&&a>120&&n.y-r<900){const o=r+a*.0612,l=Xt.clamp((n.y-o)/Math.max(a*.05,25),-1.5,1.5),c=this.player.model.sample.speedMs,h=this.player.spec.era==="modern"?this.homeDeckY!==null?78:88:this.player.spec.cruiseSpeedMs*.8;t.approach={dev:l,speed:c>h*1.12?"FAST":c<h*.85?"SLOW":"ON SPD",distanceM:a}}}return t}radio(t){this.radioBox||(this.radioBox=document.createElement("div"),this.radioBox.className=`radio-box ${this.player.spec.era}`,document.getElementById("ui")?.appendChild(this.radioBox)),this.audio?.radioSquelch();const e=document.createElement("div");for(e.className="radio-line",e.textContent=t,this.radioBox.appendChild(e);this.radioBox.children.length>3;)this.radioBox.firstChild?.remove();setTimeout(()=>{e.classList.add("fade"),setTimeout(()=>e.remove(),900)},4500)}clockOf(t){const e=this.player.model,n=t.model.position.clone().sub(e.position);let i=Math.atan2(n.x,-n.z)-e.sample.headingRad;for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return`${(Math.round(i/(Math.PI/6))+12-1+12)%12+1} o'clock`}updateRadio(t){if(this.playerDown!=="flying")return;this.radioCooldown-=t;const e=this.player.spec.era==="wwi";for(const[i,r]of[[this.wingman,this.mission?.wingman?.name],[this.wingman2,this.mission?.wingman2?.name]]){if(!i?.alive)continue;const a=this.pickTarget(i),o=!!a&&a.model.position.distanceTo(i.model.position)<2600,l=this.wingmanEngaged.get(i)??!1;if(o&&!l&&this.radioCooldown<=0&&a){this.radioCooldown=6;const c=r??(e?"Wingman":"Two");this.radio(e?`${c}: Tally-ho! Going in — ${this.clockOf(a)}.`:`${c}: engaged, bandit ${this.clockOf(a)}.`)}this.wingmanEngaged.set(i,o)}const n=!!this.missileSystem?.inboundFor(this.player.id);if(n&&!this.prevInbound){const i=this.wingman?.alive?this.mission?.wingman?.name:null;this.radio(i?`${i}: BREAK — missile inbound!`:"RWR: MISSILE — defend!")}if(this.prevInbound=n,this.vectorTimer-=t,this.vectorTimer<=0){this.vectorTimer=24+Math.random()*10;const i=this.pickTarget(this.player);if(i){const r=this.player.model.position,a=i.model.position.clone().sub(r),o=String(Math.round((Math.atan2(a.x,-a.z)*180/Math.PI%360+360)%360)).padStart(3,"0"),l=a.length()/1e3;if(e){const c=i.model.position.y>r.y+150?", above you":i.model.position.y<r.y-150?", below":"";this.radio(`Flight: enemy machines about, ${this.clockOf(i)}${c}.`)}else this.radio(`OVERLORD: bandits bearing ${o}, ${(l*.539957).toFixed(0)} miles.`)}}}startKillCam(t){this.killCam||this.mission?.type==="balloon"||(this.killCam={victim:t,t:2.4})}updateCamera(t){if(this.killCam){const i=this.killCam.victim.model.position,r=performance.now()*5e-4,a=Math.max(this.killCam.victim.spec.wingSpanM*3.2,34);this.camera.position.set(i.x+Math.cos(r)*a,i.y+a*.35,i.z+Math.sin(r)*a),this.camera.up.set(0,1,0),this.camera.lookAt(i.x,i.y,i.z),this.player.mesh.visible=!0;return}const e=this.player.model,n=e.quaternion;if(this.cameraMode==="flyby"){this.player.mesh.visible=!0;const i=this.flybyPos.clone().sub(e.position),r=new R(0,0,-1).applyQuaternion(n),a=-i.dot(r);if(this.flybyPos.lengthSq()===0||a<-240||a>950||i.length()>1300){const o=e.velocity.lengthSq()>1?e.velocity.clone().normalize():r;this.flybyPos.copy(e.position).addScaledVector(o,430).add(new R((Math.random()-.5)*180,18+Math.random()*45,(Math.random()-.5)*180)),this.flybyPos.y=Math.max(this.flybyPos.y,this.env.terrainHeight(this.flybyPos.x,this.flybyPos.z)+10)}this.camera.position.copy(this.flybyPos),this.camera.up.set(0,1,0),this.camera.lookAt(e.position);return}if(this.cameraMode==="cockpit"){const i=new R(0,.65,-.8).applyQuaternion(n).add(e.position);if(this.input.padlock){const r=this.lockedTarget?.alive?this.lockedTarget:this.pickTarget(this.player);if(r){this.camera.position.copy(i),this.camera.up.copy(new R(0,1,0).applyQuaternion(n)),this.camera.lookAt(r.model.position),this.player.mesh.visible=!1;return}}this.camera.position.copy(i),this.camera.quaternion.copy(n),this.player.mesh.visible=!1}else{this.player.mesh.visible=!0;const i=e.spec.era==="modern"?26:14,r=new R(0,i*.22,i).applyQuaternion(n).add(e.position),a=1-Math.exp(-t*5);this.chasePos.lerp(r,this.chasePos.lengthSq()===0?1:a),this.camera.position.copy(this.chasePos);const o=new R(0,1,0).applyQuaternion(n).lerp(new R(0,1,0),.1).normalize();this.camera.up.copy(o),this.camera.lookAt(e.position)}}dispose(){this.input.detach(),this.touch?.dispose(),this.hud.dispose(),this.missileSystem?.dispose(),this.bombSystem.dispose(),this.radioBox?.remove();for(const t of this.trails.values())t.dispose();this.projectiles.dispose(),this.effects.dispose();for(const t of this.combatants)t.dispose();this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n?.dispose()})}}const ro="jets.mount.v1",pv={fa18:"fa18",f14:"f14",f22:"f22",spad13:"late-birds","fokker-d7":"late-birds",se5a:"aces-birds",albatros:"aces-birds"};function vh(s){const t=ds();if(s==="nato"){const n=[Fn];return De(t,"fa18")&&n.push(ah),De(t,"f14")&&n.push(lh),De(t,"f22")&&n.push(oh),n}if(s==="entente"){const n=[Ro];return De(t,"late-birds")&&n.push(Co),De(t,"aces-birds")&&n.push(Do),n}const e=[Ao];return De(t,"late-birds")&&e.push(Po),De(t,"aces-birds")&&e.push(fr),e}function dc(s){const t=vh(s);try{const e=JSON.parse(localStorage.getItem(ro)??"{}");return t.find(n=>n.id===e[s])??t[0]}catch{return t[0]}}function mv(s,t){try{const e=JSON.parse(localStorage.getItem(ro)??"{}");e[s]=t,localStorage.setItem(ro,JSON.stringify(e))}catch{}}class gv{root;constructor(t,e,n){this.root=document.createElement("div"),this.root.className="menu",this.root.innerHTML=`
      <h1>PROJECT&nbsp;JETS</h1>
      <p class="tagline">A CENTURY OF AIR COMBAT — ONE BLOODLINE</p>
      <div class="eras">
        <section class="era era-wwi">
          <h2>1917 · THE GREAT WAR</h2>
          <div class="planes"></div>
          <button class="career-btn" data-era="wwi">CAREER — THE DYNASTY BEGINS</button>
        </section>
        <section class="era era-modern">
          <h2>2026 · MODERN ERA</h2>
          <div class="planes"></div>
          <button class="career-btn" data-era="modern">CAREER — THE LINE CONTINUES</button>
        </section>
      </div>
      <div class="settings-row">
        <button class="handling-btn"></button>
        <button class="handling-btn difficulty-btn"></button>
        <button class="handling-btn skirmish-count-btn"></button>
        <button class="handling-btn skirmish-foe-btn"></button>
      </div>
      <p class="controls-hint">${Lo()?"Right thumb: stick · Left edge: throttle · FIRE / AB / BRK buttons · ☰ menu · a bandit patrols each map":"W/S pitch · A/D roll · Q/E rudder · Space fire · F weapon · T lock · X flare · G wingman orders · Shift/Ctrl throttle · Tab afterburner · B brake/blip · P pause · M mouse-fly · V sound · C camera · R respawn · Esc menu"}</p>
      <p class="build-stamp">build 2026-07-12 15:11Z</p>`;const i=this.root.querySelectorAll(".planes"),r=ds(),a=(v,m)=>{for(const u of m){const w=document.createElement("button"),b=pv[u.id];b&&!De(r,b)?(w.textContent=`🔒 ${u.name} — LEGACY SHOP`,w.disabled=!0,w.classList.add("locked")):(w.textContent=`SKIRMISH — ${u.name}`,w.addEventListener("click",()=>e(u))),v.appendChild(w)}};a(i[0],qg),a(i[1],Yg),this.root.querySelectorAll(".career-btn").forEach(v=>{v.addEventListener("click",()=>n(v.dataset.era))});const o=this.root.querySelector(".handling-btn"),l=()=>{const v=ss();o.innerHTML=v==="arcade"?"HANDLING: <b>ARCADE</b> — direct control, no hidden assists <small>(click for SIM)</small>":"HANDLING: <b>SIM</b> — full aerodynamics + FCS <small>(click for ARCADE)</small>"};l(),o.addEventListener("click",()=>{jg(ss()==="arcade"?"sim":"arcade"),l()});const c=this.root.querySelector(".difficulty-btn"),h={rookie:"ENEMIES: <b>ROOKIE</b> — forgiving foes <small>(click to change)</small>",pilot:"ENEMIES: <b>PILOT</b> — a fair fight <small>(click to change)</small>",ace:"ENEMIES: <b>ACE</b> — they want you dead <small>(click to change)</small>"},d=()=>{c.innerHTML=h[eo()]};d(),c.addEventListener("click",()=>{const v=["rookie","pilot","ace"];Jg(v[(v.indexOf(eo())+1)%v.length]),d()});const f=this.root.querySelector(".skirmish-count-btn"),p=this.root.querySelector(".skirmish-foe-btn"),g=()=>{const v=rs();f.innerHTML=`SKIRMISH: <b>${v.count===1?"1v1":v.count===2?"2v2":"4v4 FURBALL"}</b> <small>(click to change)</small>`,p.innerHTML=`FOES: <b>${v.foe==="mixed"?"MIXED":v.foe==="mig29"?"FULCRUMS":"FLANKERS"}</b> <small>(modern skirmish)</small>`};g(),f.addEventListener("click",()=>{const v=rs();v.count=v.count===1?2:v.count===2?4:1,oc(v),g()}),p.addEventListener("click",()=>{const v=rs();v.foe=v.foe==="mixed"?"mig29":v.foe==="mig29"?"su27":"mixed",oc(v),g()}),t.appendChild(this.root)}dispose(){this.root.remove()}}const _h={entente:["Willoughby","Hart","Baker","Chapman","Ellis","Pryce","Whitmore","Dunn","Cole","Farrell"],central:["Vogel","Brandt","Keller","Sachs","Lehmann","Falk","Winter","Roth","Krause","Adler"],nato:["Duke","Static","Torch","Gypsy","Havoc","Reaper","Frost","Mongoose","Saber","Tex"]},vv={entente:["Manfred von Richthofen","Werner Voss","Ernst Udet","Lothar von Richthofen","Kurt Wolff"],central:["Albert Ball","James McCudden","Mick Mannock","Billy Bishop","Georges Guynemer"],nato:['Col. V. "DRAKON" Baranov','Maj. I. "WRAITH" Sorokin','Col. A. "KHAN" Nazarov','Maj. R. "VULTURE" Petrov','Col. D. "TEMPEST" Volkov']};function Uo(s,t,e,n){const i=vv[s].filter(a=>!t.includes(a));return{name:i.length?i[Math.floor(e()*i.length)]:`The New ${n==="wwi"?"Baron":"Colonel"}`,kills:n==="wwi"?8+Math.floor(e()*18):2+Math.floor(e()*5),alive:!0,sinceDeath:0}}const _v=12,xh="jets.campaign.v1";function Mh(){try{const s=localStorage.getItem(xh);return s?JSON.parse(s):{}}catch{return{}}}function ao(s){try{const t=Mh();t[s.era]=s,localStorage.setItem(xh,JSON.stringify(t))}catch{}}function xv(s,t){const e=[..._h[s]],n=[];for(let i=0;i<6;i++){const r=Math.floor(t()*e.length);n.push({name:e.splice(r,1)[0],skill:.55+t()*.3,kills:0,status:"active"})}return n}function Mv(s,t,e=Math.random){return{era:s,side:t,front:0,missionsFlown:0,aircraft:10,roster:xv(t,e),ace:Uo(t,[],e,s),deadAces:[],over:null}}function Js(s,t){const e=Mh()[s];if(e&&e.side===t&&!e.over)return e.ace||(e.ace=Uo(t,[],Math.random,s),e.deadAces=e.deadAces??[],ao(e)),e;const n=Mv(s,t);return ao(n),n}function yv(s,t=Math.random){const e=s.roster.filter(n=>n.status==="active");return e.length?e[Math.floor(t()*e.length)]:null}function Sv(s,t,e=Math.random){const n={frontDelta:0,wingmanFate:null,wingman2Fate:null,replacement:null,newAce:null,ended:null};if(s.over)return n;s.ace.alive&&t.aceKilled?(s.ace.alive=!1,s.ace.sinceDeath=0,s.deadAces.push(s.ace.name),n.frontDelta+=4):s.ace.alive?s.ace.kills+=e()<.5?1:0:++s.ace.sinceDeath>=2&&(s.ace=Uo(s.side,s.deadAces,e,s.era),n.newAce=s.ace.name);const i=(e()-.45)*4,r=t.missionComplete?7+e()*5:-(5+e()*4);n.frontDelta+=Math.round(r+i),s.front=Math.max(-100,Math.min(100,s.front+n.frontDelta)),t.playerPlaneLost&&s.aircraft--,t.wingmanLost&&s.aircraft--,t.wingman2Lost&&s.aircraft--,s.missionsFlown++,s.missionsFlown%2===0&&s.aircraft<_v&&s.aircraft++;const a=[{name:t.wingmanName,kills:t.wingmanKills,lost:t.wingmanLost,fate:"wingmanFate"},{name:t.wingman2Name??null,kills:t.wingman2Kills??0,lost:t.wingman2Lost??!1,fate:"wingman2Fate"}];for(const l of a){const c=l.name?s.roster.find(h=>h.name===l.name&&h.status==="active"):null;c&&(c.kills+=l.kills,l.lost&&(e()<.55?(c.status="kia",n[l.fate]="kia"):n[l.fate]="down"))}if(s.roster.filter(l=>l.status==="active").length<4){const l=new Set(s.roster.map(d=>d.name)),c=_h[s.side].filter(d=>!l.has(d)),h=c.length?c[Math.floor(e()*c.length)]:`Rookie ${s.missionsFlown}`;s.roster.push({name:h,skill:.5+e()*.2,kills:0,status:"active"}),n.replacement=h}return s.front>=100?s.over="won":(s.front<=-100||s.aircraft<=0)&&(s.over="lost"),n.ended=s.over,ao(s),n}function oo(s){const t=s.front;return t>=70?"The enemy is in full retreat. One more push.":t>=35?"The front is moving our way. Keep the pressure on.":t>=10?"We hold a slight edge, sector by sector.":t>-10?"The war is deadlocked. Every sortie counts.":t>-35?"We are losing ground. The squadron feels it.":t>-70?"The front is buckling. It gets worse every day.":"Collapse is near. Fly like everything depends on it — it does."}const yh=["jets.dynasty.v1","jets.campaign.v1","jets.mount.v1","jets.best.wwi","jets.best.modern","jets.handling","jets.difficulty"],lo="JETS1.";function bv(){const s={};for(const e of yh)try{const n=localStorage.getItem(e);n!==null&&(s[e]=n)}catch{}const t=JSON.stringify(s);return lo+btoa(unescape(encodeURIComponent(t)))}function wv(s){const t=s.trim();if(!t.startsWith(lo))return"That does not look like a JETS save code.";let e;try{e=JSON.parse(decodeURIComponent(escape(atob(t.slice(lo.length)))))}catch{return"Code is damaged — check that the whole thing was copied."}if(typeof e!="object"||e===null||!e["jets.dynasty.v1"])return"Code decodes, but there is no dynasty inside it.";try{JSON.parse(e["jets.dynasty.v1"])}catch{return"The dynasty in this code is corrupted."}try{for(const n of yh)e[n]!==void 0&&localStorage.setItem(n,e[n])}catch{return"Could not write the save (private browsing?)."}return null}const uc={entente:["Arras","Vimy Ridge","Douai","Cambrai","Lens"],central:["Ypres","Messines","Armentières","the Scarpe","Monchy"]},Ev=["Red Canyon","the Dagger Range","Sector Bravo","the Rift Valley","Point Mugu East"];function Jn(s){return s[Math.floor(Math.random()*s.length)]}function Tv(s){const t=Jn(["patrol","patrol","balloon","escort","intercept","strafe"]),e=Jn(["flanders","flanders","coast"]),n=Jn(uc[s.side]??uc.entente),i=as(s.dateISO),r=Math.random()*Math.PI*2,a=2800+Math.random()*1800,o={x:Math.sin(r)*a,z:-Math.cos(r)*a},l=Math.min(2,1+Math.floor(s.victories/6));if(t==="balloon")return{era:"wwi",type:t,theater:e,side:s.side,zone:o,enemyCount:1,balloonAltM:500+Math.random()*200,title:`Balloon Attack — ${n}`,briefing:`${i}. An enemy observation balloon near ${n} has been directing artillery onto our trenches all week. Fly to the marked position and burn it down. Expect a defending scout — balloons are never left alone.`};if(t==="strafe")return{era:"wwi",type:t,theater:e,side:s.side,zone:o,enemyCount:1,title:`Trench Strafe — ${n}`,briefing:`${i}. A machine-gun line near ${n} has our infantry pinned and the push stalls tomorrow unless it goes quiet tonight. Four posts, dug in along the trench. Cooper bombs or guns — come in low along the line, not across it, and mind the archie.`};if(t==="intercept")return{era:"wwi",type:t,theater:e,side:s.side,zone:o,enemyCount:l,title:`Bomber Raid — ${n}`,briefing:`${i}. Observers report Gothas crossing the lines, heading for the aerodrome at ${n} with a scout escort. They are slow, they are huge, and they carry more guns than you'd like. Get above them, watch the gunners, and bring them down before they reach the field.`};if(t==="escort"){const c=[{x:o.x*.25,z:o.z*.25},{x:o.x*.55+600,z:o.z*.55},o];return{era:"wwi",type:t,theater:e,side:s.side,zone:o,enemyCount:l,route:c,title:`Escort Duty — ${n}`,briefing:`${i}. A reconnaissance two-seater is photographing the lines near ${n}. Stay with it until the camera run is complete. If the enemy scouts get through to it, the whole show is wasted — and the crew won't be coming home.`}}return{era:"wwi",type:"patrol",theater:e,side:s.side,zone:o,enemyCount:l,title:`Dawn Patrol — ${n}`,briefing:`${i}. Offensive patrol over ${n}. Enemy scouts have been working our side of the lines at first light. Sweep the marked sector and clear it. Watch the sun — that's where they'll come from.`}}function Av(s,t){const e=Jn(["patrol","patrol","escort","intercept","strike","sead","convoy"]),n=Jn(e==="strike"||e==="intercept"||e==="sead"||e==="convoy"?["desert","arctic"]:["desert","arctic","ocean"]),i=Jn(Ev),r=as(s.dateISO),a=Math.random()*Math.PI*2,o=7e3+Math.random()*5e3,l={x:Math.sin(a)*o,z:-Math.cos(a)*o},c=Math.min(2,1+Math.floor(s.victories/5)),h=t?no(t):null,d=h?{name:`${h.firstName} ${t.surname}`,victories:h.victories}:void 0,f=d?` The red tail flash is your family's: ${d.name} scored ${d.victories} over the trenches a century ago. Fly like it.`:"";if(e==="escort"){const p=[{x:l.x*.3,z:l.z*.3},{x:l.x*.65-1200,z:l.z*.65},l];return{era:"modern",type:e,theater:n,side:"nato",zone:l,enemyCount:c,route:p,heritage:d,title:`Strike Escort — ${i}`,briefing:`${r}. A strike package is going through ${i} at medium level and hostile CAPs are up. You are the sweep: keep the Fulcrums off the package until it is off target. Lose the strikers, lose the war that day.`+f}}return e==="strike"?{era:"modern",type:e,theater:n,side:"nato",zone:l,enemyCount:1,heritage:d,title:`Deep Strike — ${i}`,briefing:`${r}. A hardened command bunker in ${i} is coordinating everything hostile in this sector, and it is defended: an SA-8 ring sits 900 meters east, and a CAP is up. Kill the radar or stay low and fast; either way the bunker dies today. Guns and missiles both work on soft structures.`+f}:e==="sead"?{era:"modern",type:e,theater:n,side:"nato",zone:l,enemyCount:1,heritage:d,title:`SEAD — ${i}`,briefing:`${r}. Three SA-8 sites went active in ${i} overnight and the whole strike schedule is grounded until they're dirt. This is Weasel work: make them launch, make them miss, kill the radars. Chaff is life. All three sites, no survivors.`+f}:e==="convoy"?{era:"modern",type:e,theater:n,side:"nato",zone:l,enemyCount:1,heritage:d,title:`Convoy Hunt — ${i}`,briefing:`${r}. A resupply convoy is running the road through ${i} under AAA escort — four trucks carrying enough materiel to matter. Stop at least three before they clear the sector. Bombs work; the gun works; sitting at altitude does not.`+f}:e==="intercept"?{era:"modern",type:e,theater:n,side:"nato",zone:l,enemyCount:c,heritage:d,title:`Alert Scramble — ${i}`,briefing:`${r}. A pair of Backfires with fighter escort is inbound toward the forward base at ${i}, coming in fast. You are the alert bird. The bombers are the mission — splash them before they reach the field. Burner is authorized, fuel is not your problem today.`+f}:{era:"modern",type:"patrol",theater:n,side:"nato",zone:l,enemyCount:c,heritage:d,title:`Combat Air Patrol — ${i}`,briefing:`${r}. Establish CAP over ${i}. Intel says Fulcrums have been probing the sector at random intervals. Sanitize the airspace: nothing hostile flies home.`+f}}function Rv(s,t=null,e=null){const n=s.era==="modern"?Av(s,t):Tv(s);n.conditions=jc();const i={dawn:"Time on target: first light.",day:"",dusk:"Time on target: last light — the sun will be in somebody's eyes.",night:"A night sortie. Navigation lights off, eyes open."}[n.conditions.time],r={clear:"",scattered:"",overcast:" A solid deck sits over the sector; the fight happens under it."}[n.conditions.weather];if((i||r)&&(n.briefing+=` ${i}${r}`),n.theater==="ocean"&&(n.briefing+=" You launch from the carrier — full burner off the deck, and the wire is waiting when it's done."),e){n.briefing+=` ${oo(e)}`,e.front<=-35&&(n.enemyCount=Math.min(3,n.enemyCount+1));const a=yv(e);a&&(n.wingman={name:a.name,skill:a.skill,kills:a.kills});const o=e.roster.filter(l=>l.status==="active"&&l.name!==a?.name);if(a&&o.length>=4){const l=o[Math.floor(Math.random()*o.length)];n.wingman2={name:l.name,skill:l.skill,kills:l.kills}}e.ace.alive&&n.type!=="balloon"&&Math.random()<.35&&(n.ace={name:e.ace.name,kills:e.ace.kills},n.briefing+=n.era==="wwi"?` One more thing: ${e.ace.name} hunts this sector — ${e.ace.kills} of ours went down to him. You'll know the aircraft when you see it.`:` Intel flags ${e.ace.name} airborne in the sector — ${e.ace.kills} allied losses to his name. Watch for the red-finned aircraft.`)}return n}class Sh{constructor(t,e,n){this.era=e,this.opts=n,this.root=document.createElement("div"),this.root.className="menu career",t.appendChild(this.root),this.dynasty=ds(),this.showHome()}root;dynasty;pendingMission=null;showDebrief(t,e){const n=this.dynasty,i=n?Ji(n,this.era):null;if(!n||!i){this.showHome();return}let r=e.survived,a="";!r&&Math.random()<.4&&(r=!0,a=this.era==="wwi"?"Pulled from the wreckage alive — bruised, lucky, and flying again within the week.":"Good chute. Combat search and rescue had you back on base by nightfall.");const o=rv(n,i,{victories:e.kills,survived:r,missionComplete:e.missionComplete===!0}),l=Js(this.era,i.side),c=Sv(l,{missionComplete:e.missionComplete===!0,playerPlaneLost:!e.survived,wingmanName:t.wingman?.name??null,wingmanKills:e.wingmanKills,wingmanLost:e.wingmanLost,wingman2Name:t.wingman2?.name??null,wingman2Kills:e.wingman2Kills,wingman2Lost:e.wingman2Lost,aceKilled:e.aceKilled});t.ace&&e.aceKilled&&(i.legacy+=25,Zn(n)),e.landed&&e.missionComplete&&(i.legacy+=5,Zn(n));const h=[];h.push(e.missionComplete?"Mission accomplished.":r?"Mission failed.":this.era==="wwi"?"The patrol did not return.":"Aircraft lost, pilot with it."),e.kills>0&&h.push(`${e.kills} ${e.kills===1?"victory":"victories"} confirmed.`),e.landed&&e.missionComplete&&h.push("Wheels down on the home strip, airframe intact. +5 legacy."),a&&h.push(a);for(const[p,g,v]of[[t.wingman,e.wingmanKills,c.wingmanFate],[t.wingman2,e.wingman2Kills,c.wingman2Fate]])p&&(g>0&&h.push(`${p.name} claimed ${g} — buy him a drink.`),v==="kia"?h.push(`${p.name} did not come back. His bunk is empty tonight.`):v==="down"&&h.push(`${p.name} went down but walked away. He'll fly again.`));t.ace&&e.aceKilled?h.push(`${t.ace.name} — ${t.ace.kills} victories — will never fly again. The whole front knows by nightfall. +25 legacy.`):t.ace&&!e.aceKilled&&h.push(`${t.ace.name} slipped away. His score keeps growing.`),c.newAce&&h.push(`Word from across the lines: a new champion rises — ${c.newAce}.`),c.replacement&&h.push(`A replacement pilot joined the squadron: ${c.replacement}.`),h.push(`The front ${c.frontDelta>=0?"moved our way":"slipped"} (${c.frontDelta>=0?"+":""}${c.frontDelta}). ${oo(l)}`);for(const p of o.newMedals)h.push(`Awarded the ${p.name}.`);o.promotedTo&&h.push(`Promoted to ${o.promotedTo}.`),o.becameAce&&h.push(`${i.firstName} ${n.surname} is now an ACE.`),o.kia&&h.push(`${es(i)} ${i.firstName} ${n.surname} — killed in action, ${as(i.dateISO)}. The line endures.`);const d=[];t.ace&&e.aceKilled&&d.push(`Downed ${t.ace.name}`);for(const p of o.newMedals)d.push(`Awarded the ${p.name}`);o.promotedTo&&d.push(`Promoted to ${o.promotedTo}`),c.ended==="won"?d.push("CAMPAIGN VICTORY"):c.ended==="lost"&&d.push("The campaign was lost"),c.ended==="won"&&(n.warsWon=(n.warsWon??0)+1),Qg(n,{dateISO:i.dateISO,pilotId:i.id,era:this.era,title:t.title,kills:e.kills,outcome:o.kia?"kia":e.missionComplete?"complete":"failed",note:d.length?d.join(" · "):void 0});let f="";c.ended==="won"?(i.legacy+=50,Zn(n),f=`<div class="war-end won">CAMPAIGN VICTORY — the ${this.era==="wwi"?"front":"theater"} is ours. +50 legacy.</div>`):c.ended==="lost"&&(f=`<div class="war-end lost">CAMPAIGN LOST — ${l.aircraft<=0?"the squadron has no aircraft left to fly":"the front collapsed"}. A new war begins.</div>`),this.root.innerHTML=`
      <h2 class="career-h">${t.title}</h2>
      ${f}
      <div class="debrief ${o.kia?"kia":e.missionComplete?"ok":""}">
        ${h.map(p=>`<p>${p}</p>`).join("")}
      </div>
      <div class="career-actions">
        <button data-act="home">${o.kia?"THE NEXT OF KIN":"CONTINUE"}</button>
      </div>`,this.bind()}showHome(){const t=this.dynasty,e=t?Ji(t,this.era):null;if(!t||!e){this.showCreation(!t);return}const n=e.medals.length?e.medals.map(c=>`<span class="medal">${c.name}</span>`).join(""):'<span class="medal none">No decorations yet</span>',i=t.pilots.filter(c=>c.status==="kia"),r=i.length?`<div class="fallen">In memoriam: ${i.map(c=>`${c.firstName} ${t.surname} (${c.era==="wwi"?"1917":"2026"}, ${c.victories} victories)`).join(" · ")}</div>`:"",a=no(t),o=this.era==="modern"&&a?`<div class="heritage">Heritage: ${a.firstName} ${t.surname}, ${a.victories} victories over the
         Western Front. Your Viper wears the family's red tail.</div>`:"",l=this.buildWarPanel(Js(this.era,e.side));this.root.innerHTML=`
      <h2 class="career-h">${t.surname.toUpperCase()} DYNASTY · ${this.era==="wwi"?"1917":"2026"}</h2>
      ${l}
      <div class="pilot-card">
        <div class="pilot-name">${es(e)} ${e.firstName} ${t.surname}</div>
        <div class="pilot-sub">${e.squadron} · ${as(e.dateISO)} · Generation ${e.generation}</div>
        <div class="pilot-stats">
          <span><b>${e.victories}</b> victories${e.victories>=5?" — ACE":""}</span>
          <span><b>${e.sorties}</b> sorties</span>
          <span><b>${ph(t)}</b> dynasty legacy</span>
        </div>
        <div class="pilot-medals">${n}</div>
      </div>
      ${o}
      ${r}
      <div class="career-actions">
        <button data-act="fly" class="primary">FLY NEXT MISSION</button>
        <button data-act="shop">LEGACY · ${io(t)} PTS</button>
        <button data-act="chronicle">CHRONICLE</button>
        <button data-act="backup">SAVE CODE</button>
        <button data-act="exit">MAIN MENU</button>
      </div>`,this.bind(),this.drawWarMap(Js(this.era,e.side))}drawWarMap(t){const e=this.root.querySelector(".war-map");if(!e)return;const n=e.getContext("2d"),i=e.width,r=e.height,a=this.era==="wwi";n.fillStyle=a?"#4a5236":"#8a744e",n.fillRect(0,0,i,r);for(let c=0;c<240;c++){const h=c*127.1%1*0+(Math.sin(c*12.9898)*43758.5453%1+1)%1*i,d=(Math.sin(c*78.233)*12543.123%1+1)%1*r;n.fillStyle=a?"rgba(30,36,20,0.35)":"rgba(60,48,30,0.3)",n.fillRect(h,d,2.2,2.2)}const o=i*(.5-t.front/200*.9);n.fillStyle="rgba(160,40,30,0.18)",n.fillRect(0,0,o,r),n.fillStyle=a?"rgba(90,110,60,0.15)":"rgba(60,110,160,0.14)",n.fillRect(o,0,i-o,r),n.strokeStyle=a?"#e0d6b0":"#ffd98a",n.lineWidth=2,n.beginPath();for(let c=0;c<=r;c+=6){const h=o+Math.sin(c*.09+t.missionsFlown)*9+Math.sin(c*.031)*14;c===0?n.moveTo(h,c):n.lineTo(h,c)}if(n.stroke(),a){n.strokeStyle="rgba(30,30,24,0.5)",n.lineWidth=1;for(const c of[-14,14]){n.beginPath();for(let h=0;h<=r;h+=6){const d=o+c+Math.sin(h*.09+t.missionsFlown)*9+Math.sin(h*.031)*14;h===0?n.moveTo(d,h):n.lineTo(d,h)}n.stroke()}}const l=a?t.side==="central"?["Ypres","Messines","the Scarpe"]:["Arras","Cambrai","Lens"]:["Red Canyon","Sector Bravo","the Rift"];n.font="10px Georgia, serif",n.fillStyle="rgba(240,226,196,0.55)",l.forEach((c,h)=>{n.fillText(c,i*.12+h*i*.3,r*(.2+h%2*.55))}),n.fillStyle="#b8e6a0",n.fillRect(i-26,r/2-3,14,6),n.font="9px Consolas, monospace",n.fillText("HOME",i-40,r/2+16),t.ace.alive&&(n.fillStyle="#ff8a70",n.font="13px Georgia, serif",n.fillText("✠",Math.max(14,o*.35),r*.32),n.font="9px Georgia, serif",n.fillText(t.ace.name.split(" ").pop()??"",Math.max(6,o*.35-12),r*.32+13))}buildWarPanel(t){const e=t.roster.map(r=>`<span class="roster-pilot ${r.status==="kia"?"kia":""}">${r.name}${r.kills>0?` (${r.kills})`:""}</span>`).join(""),n=t.ace.alive?`<div class="ace-line">Their champion: <b>${t.ace.name}</b> — ${t.ace.kills} kills and counting.</div>`:'<div class="ace-line fallen">Their champion has fallen. The enemy flies leaderless — for now.</div>',i=t.deadAces.length?`<div class="ace-trophies">Aces downed: ${t.deadAces.join(" · ")}</div>`:"";return`
      <div class="war-panel">
        <div class="war-line">${oo(t)}</div>
        ${n}
        ${i}
        <canvas class="war-map" width="520" height="190"></canvas>
        <div class="war-meta">
          <span>THEIR GROUND</span>
          <span>${t.aircraft} aircraft · mission ${t.missionsFlown+1}</span>
          <span>OURS</span>
        </div>
        <div class="roster">${e}</div>
      </div>`}showBackup(){const t=bv();this.root.innerHTML=`
      <h2 class="career-h">DYNASTY SAVE CODE</h2>
      <p class="career-sub">Your whole family history lives in this browser. Copy this code somewhere
        safe — paste it back on any device to restore the dynasty, campaigns, and unlocks.</p>
      <textarea class="save-code" readonly>${t}</textarea>
      <div class="career-actions"><button data-act="copy-code" class="primary">COPY CODE</button></div>
      <p class="career-sub">Restore from a code:</p>
      <textarea class="save-code restore" placeholder="Paste a JETS save code here..."></textarea>
      <div class="save-msg"></div>
      <div class="career-actions">
        <button data-act="restore-code">RESTORE</button>
        <button data-act="home">BACK</button>
      </div>`;const e=this.root.querySelector(".save-msg");this.root.querySelector('button[data-act="copy-code"]')?.addEventListener("click",()=>{navigator.clipboard?.writeText(t).catch(()=>{}),e.textContent="Copied to clipboard.",e.className="save-msg ok"}),this.root.querySelector('button[data-act="restore-code"]')?.addEventListener("click",()=>{const n=this.root.querySelector(".save-code.restore").value,i=wv(n);i?(e.textContent=i,e.className="save-msg bad"):(this.dynasty=ds(),e.textContent="Restored. Welcome back.",e.className="save-msg ok",setTimeout(()=>this.showHome(),900))}),this.bind()}showChronicle(){const t=this.dynasty,e=t.chronicle??[],n=e.filter(o=>o.note?.includes("Downed ")).length,i=t.pilots.reduce((o,l)=>o+l.victories,0),r=t.pilots.reduce((o,l)=>o+l.sorties,0),a=[...t.pilots].reverse().map(o=>{const c=e.filter(d=>d.pilotId===o.id).slice(-10).reverse().map(d=>`
        <div class="chron-entry ${d.outcome}">
          <span class="chron-date">${as(d.dateISO)}</span>
          <span class="chron-title">${d.title}</span>
          ${d.kills>0?`<span class="chron-kills">${d.kills} ✕</span>`:""}
          ${d.note?`<div class="chron-note">${d.note}</div>`:""}
        </div>`).join(""),h=o.medals.map(d=>`<span class="medal">${d.name}</span>`).join("");return`
        <div class="chron-pilot ${o.status}">
          <div class="chron-head">
            <span>Generation ${o.generation} · ${es(o)} ${o.firstName} ${t.surname} · ${o.era==="wwi"?"1917":"2026"}</span>
            <span class="chron-stat">${o.victories} victories · ${o.sorties} sorties${o.status==="kia"?" · ✝ fell in action":o.status==="active"?" · flying":""}</span>
          </div>
          ${h?`<div class="pilot-medals chron-medals">${h}</div>`:""}
          ${c||'<div class="chron-note none">No sorties recorded yet.</div>'}
        </div>`}).join("");this.root.innerHTML=`
      <h2 class="career-h">THE ${t.surname.toUpperCase()} CHRONICLE</h2>
      <div class="pilot-stats chron-totals">
        <span><b>${i}</b> family victories</span>
        <span><b>${r}</b> sorties flown</span>
        <span><b>${t.warsWon??0}</b> wars won</span>
        <span><b>${n}</b> enemy aces downed</span>
      </div>
      <div class="chronicle">${a||'<p class="career-sub">The book is empty. Go write it.</p>'}</div>
      <div class="career-actions"><button data-act="home">BACK</button></div>`,this.bind()}showShop(){const t=this.dynasty,e=io(t),n=Io.map(i=>{const r=De(t,i.id),a=e>=i.cost,o=i.era==="modern"?"2026":i.era==="wwi"?"1917":"1917 + 2026",l=r?'<span class="shop-owned">OWNED</span>':`<button data-buy="${i.id}" ${a?"":"disabled"}>${i.cost} PTS</button>`;return`
        <div class="shop-item ${r?"owned":""}">
          <div class="shop-info">
            <div class="shop-name">${i.name} <small>· ${o}</small></div>
            <div class="shop-desc">${i.desc}</div>
          </div>
          <div class="shop-buy">${l}</div>
        </div>`}).join("");this.root.innerHTML=`
      <h2 class="career-h">THE FAMILY LEGACY</h2>
      <p class="career-sub">Every victory and every mission flown by the ${t.surname} line earns legacy.
        Spend it on advantages that pass down the generations — both wars, forever.</p>
      <div class="pilot-stats shop-balance"><span><b>${e}</b> legacy available</span></div>
      <div class="shop-list">${n}</div>
      <div class="career-actions"><button data-act="home">BACK</button></div>`,this.root.querySelectorAll("button[data-buy]").forEach(i=>{i.addEventListener("click",()=>{ov(t,i.dataset.buy)&&this.showShop()})}),this.bind()}showCreation(t){const e=this.dynasty,n=this.era==="modern",i=e?no(e):null,r=t?n?"Every dynasty starts somewhere. Yours starts in a Viper, 2026.":"One family of aviators, a century of war. It begins over the trenches, 1917.":n?i?`A century after ${i.firstName} ${e.surname} ruled the skies over the trenches, the family name reports to a fighter squadron once more.`:`The ${e.surname} line answers the call again — this time at Mach 1.`:`The ${e.surname} family sends another of its own to the front.`,a=n?'<button data-side="nato" class="side-btn">REPORT FOR DUTY<br><small>F-16C Viper · 555th FS</small></button>':`<button data-side="entente" class="side-btn">ROYAL FLYING CORPS<br><small>Sopwith Camel</small></button>
         <button data-side="central" class="side-btn">LUFTSTREITKRÄFTE<br><small>Fokker Dr.I</small></button>`;this.root.innerHTML=`
      <h2 class="career-h">${t?"FOUND YOUR DYNASTY":"THE LINE CONTINUES"}</h2>
      <p class="career-sub">${r}</p>
      <div class="create-form">
        ${t?'<input id="cf-surname" placeholder="Family name" maxlength="16" autocomplete="off">':""}
        <input id="cf-first" placeholder="Pilot first name" maxlength="16" autocomplete="off">
        <div class="side-pick">${a}</div>
      </div>
      <div class="career-actions"><button data-act="exit">BACK</button></div>`,this.root.querySelectorAll(".side-btn").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.side,c=this.root.querySelector("#cf-first")?.value.trim()||"Jack";if(t){const h=this.root.querySelector("#cf-surname")?.value.trim()||"Moore";this.dynasty=iv(h)}sv(this.dynasty,c,l,this.era),Zn(this.dynasty),this.showHome()})}),this.bind()}showBriefing(){const t=this.dynasty,e=Ji(t,this.era);this.pendingMission=Rv(e,t,Js(this.era,e.side)),this.renderBriefing()}renderBriefing(){const t=this.dynasty,e=Ji(t,this.era),n=this.pendingMission,i=[n.wingman,n.wingman2].filter(Boolean).map(c=>`${c.name}${c.kills>0?` (${c.kills} kills)`:""}`).join(" and "),r=i?`<p class="briefing-meta">On your wing: ${i}.</p>`:"",a=vh(e.side),o=dc(e.side),l=a.length>1?`<div class="mount-pick">${a.map(c=>`<button data-mount="${c.id}" class="${c.id===o.id?"active":""}">${c.name}</button>`).join("")}</div>`:"";this.root.innerHTML=`
      <h2 class="career-h">${n.title}</h2>
      <div class="briefing">
        <p>${n.briefing}</p>
        ${r}
        <p class="briefing-meta">${es(e)} ${e.firstName} ${t.surname} · ${e.squadron} ·
          mount: ${o.name}</p>
      </div>
      ${l}
      <div class="career-actions">
        <button data-act="takeoff" class="primary">TAKE OFF</button>
        <button data-act="home">STAND DOWN</button>
      </div>`,this.root.querySelectorAll("button[data-mount]").forEach(c=>{c.addEventListener("click",()=>{mv(e.side,c.dataset.mount),this.renderBriefing()})}),this.bind()}bind(){this.root.querySelectorAll("button[data-act]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.act;if(e==="exit")this.opts.onExit();else if(e==="home")this.showHome();else if(e==="shop")this.showShop();else if(e==="chronicle")this.showChronicle();else if(e==="backup")this.showBackup();else if(e==="fly")this.showBriefing();else if(e==="takeoff"&&this.pendingMission){const n=Ji(this.dynasty,this.era);this.opts.onFly(this.pendingMission,dc(n.side))}})})}dispose(){this.root.remove()}}class Cv{ctx=null;master=null;noiseBuf=null;muted=!1;engGain=null;engOscA=null;engOscB=null;engFilter=null;engLfo=null;turbGain=null;turbFilter=null;windGain=null;growlOsc=null;growlLfo=null;growlGain=null;warnGain=null;gunTimer=0;padOscs=[];padGain=null;tensionGain=null;chordTimer=0;chordIdx=0;constructor(){const t=()=>this.ensure();window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t)}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;const t=window.AudioContext??window.webkitAudioContext;if(!t)return!1;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(e.destination);const n=e.createBuffer(1,e.sampleRate*2,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return this.noiseBuf=n,this.buildContinuousLayers(),!0}noiseSource(t=!1){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=t,e}buildContinuousLayers(){const t=this.ctx;this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=350,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engOscA=t.createOscillator(),this.engOscA.type="sawtooth",this.engOscA.frequency.value=60,this.engOscB=t.createOscillator(),this.engOscB.type="square",this.engOscB.frequency.value=121;const e=t.createGain();e.gain.value=.35,this.engOscA.connect(this.engFilter),this.engOscB.connect(e).connect(this.engFilter),this.engFilter.connect(this.engGain).connect(this.master),this.engLfo=t.createOscillator(),this.engLfo.frequency.value=11;const n=t.createGain();n.gain.value=.35,this.engLfo.connect(n).connect(this.engGain.gain),this.engOscA.start(),this.engOscB.start(),this.engLfo.start(),this.turbFilter=t.createBiquadFilter(),this.turbFilter.type="bandpass",this.turbFilter.frequency.value=400,this.turbFilter.Q.value=.8,this.turbGain=t.createGain(),this.turbGain.gain.value=0,this.turbFilter.connect(this.turbGain).connect(this.master);const i=this.noiseSource(!0);i.connect(this.turbFilter),i.start();const r=t.createBiquadFilter();r.type="highpass",r.frequency.value=900,this.windGain=t.createGain(),this.windGain.gain.value=0;const a=this.noiseSource(!0);a.connect(r).connect(this.windGain).connect(this.master),a.start(),this.growlOsc=t.createOscillator(),this.growlOsc.type="square",this.growlOsc.frequency.value=750,this.growlLfo=t.createOscillator(),this.growlLfo.frequency.value=14;const o=t.createGain();o.gain.value=120,this.growlLfo.connect(o).connect(this.growlOsc.frequency),this.growlGain=t.createGain(),this.growlGain.gain.value=0,this.growlOsc.connect(this.growlGain).connect(this.master),this.growlOsc.start(),this.growlLfo.start();const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=750,this.padGain=t.createGain(),this.padGain.gain.value=0,l.connect(this.padGain).connect(this.master);for(let u=0;u<3;u++){const w=t.createOscillator();w.type="triangle",w.frequency.value=[110,165,220][u],w.connect(l),w.start(),this.padOscs.push(w)}const c=t.createOscillator();c.type="square",c.frequency.value=55;const h=t.createOscillator();h.type="square",h.frequency.value=2.4;const d=t.createGain();d.gain.value=.5;const f=t.createGain();f.gain.value=0,h.connect(d).connect(f.gain),this.tensionGain=t.createGain(),this.tensionGain.gain.value=0,c.connect(f).connect(this.tensionGain).connect(this.master),c.start(),h.start();const p=t.createOscillator();p.type="square",p.frequency.value=1350;const g=t.createOscillator();g.type="square",g.frequency.value=7;const v=t.createGain();v.gain.value=.5,this.warnGain=t.createGain(),this.warnGain.gain.value=0,g.connect(v);const m=t.createGain();m.gain.value=0,v.connect(m.gain),p.connect(m).connect(this.warnGain).connect(this.master),p.start(),g.start()}toggleMute(){this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:.55)}update(t,e){if(!this.ctx||!this.master)return;const n=this.ctx.currentTime,i=(r,a)=>r.setTargetAtTime(a,n,.08);if(e.era==="wwi"){const r=45+e.throttle*75;i(this.engOscA.frequency,r),i(this.engOscB.frequency,r*2.02),i(this.engGain.gain,.05+e.throttle*.1),i(this.turbGain.gain,0)}else i(this.engGain.gain,.015+e.throttle*.02),i(this.engOscA.frequency,70+e.throttle*60),i(this.engOscB.frequency,141+e.throttle*130),i(this.turbFilter.frequency,300+e.throttle*900+e.speedMs*1.2),i(this.turbGain.gain,.05+e.throttle*.09+(e.afterburner?.1:0));if(i(this.windGain.gain,Math.min(Math.max((e.speedMs-40)/400,0),1)*.1),e.growl==="off"?i(this.growlGain.gain,0):(i(this.growlGain.gain,.028),i(this.growlLfo.frequency,e.growl==="lock"?38:12),i(this.growlOsc.frequency,e.growl==="lock"?950:720)),i(this.warnGain.gain,e.inbound?.06:0),this.chordTimer-=t,this.chordTimer<=0){this.chordTimer=8+Math.random()*4,this.chordIdx++;const r=e.era==="wwi"?[[110,165,220],[98,147,196],[87.3,130.8,174.6],[104,156,196]]:[[82.4,123.5,164.8],[73.4,110,146.8],[65.4,98,130.8],[92.5,138.6,185]],a=r[this.chordIdx%r.length];this.padOscs.forEach((o,l)=>o.frequency.setTargetAtTime(a[l],n,1.2))}if(i(this.padGain.gain,(e.era==="wwi"?.024:.03)+e.combat*.014),i(this.tensionGain.gain,e.combat*.05),this.gunTimer-=t,e.firingGun&&this.gunTimer<=0){const r=Math.min(e.gunRateHz,28);this.gunTimer=1/r,this.gunShot(e.era)}}gunShot(t){if(!this.ctx)return;const e=this.ctx,n=this.noiseSource(),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=t==="wwi"?850:480,i.Q.value=.7;const r=e.createGain(),a=e.currentTime;r.gain.setValueAtTime(t==="wwi"?.3:.22,a),r.gain.exponentialRampToValueAtTime(.001,a+(t==="wwi"?.07:.05)),n.connect(i).connect(r).connect(this.master),n.start(a,Math.random()),n.stop(a+.09)}launch(){if(!this.ensure())return;const t=this.ctx,e=this.noiseSource(),n=t.createBiquadFilter();n.type="lowpass";const i=t.currentTime;n.frequency.setValueAtTime(3200,i),n.frequency.exponentialRampToValueAtTime(280,i+1.3);const r=t.createGain();r.gain.setValueAtTime(.4,i),r.gain.exponentialRampToValueAtTime(.001,i+1.4),e.connect(n).connect(r).connect(this.master),e.start(i,Math.random()),e.stop(i+1.5)}explosionAt(t){if(!this.ctx)return;const e=Math.min(.6,90/Math.max(t,30));if(e<.01)return;const n=this.ctx,i=this.noiseSource(),r=n.createBiquadFilter();r.type="lowpass";const a=n.currentTime;r.frequency.setValueAtTime(400,a),r.frequency.exponentialRampToValueAtTime(60,a+.9);const o=n.createGain();o.gain.setValueAtTime(e,a),o.gain.exponentialRampToValueAtTime(.001,a+1.1),i.connect(r).connect(o).connect(this.master),i.start(a,Math.random()),i.stop(a+1.2)}radioSquelch(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=this.noiseSource(),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=1.5;const r=t.createGain();r.gain.setValueAtTime(.09,e),r.gain.exponentialRampToValueAtTime(.001,e+.07),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+.09)}sting(t){if(!this.ensure())return;const e=this.ctx,n=e.currentTime,i=t==="victory"?[523.3,659.3,784,1046.5]:t==="ace"?[587.3,880,1174.7]:[392,349.2,311.1,261.6],r=t==="defeat"?.22:.12;i.forEach((a,o)=>{const l=e.createOscillator();l.type="triangle",l.frequency.value=a;const c=e.createGain(),h=n+o*r;c.gain.setValueAtTime(1e-4,h),c.gain.exponentialRampToValueAtTime(.12,h+.02),c.gain.exponentialRampToValueAtTime(.001,h+.5),l.connect(c).connect(this.master),l.start(h),l.stop(h+.55)})}hitThud(){if(!this.ctx)return;const t=this.ctx,e=this.noiseSource(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=250;const i=t.createGain(),r=t.currentTime;i.gain.setValueAtTime(.35,r),i.gain.exponentialRampToValueAtTime(.001,r+.12),e.connect(n).connect(i).connect(this.master),e.start(r,Math.random()),e.stop(r+.15)}}const Pv=document.getElementById("scene"),vs=document.getElementById("ui");if(Lo()){document.body.classList.add("touch");const s=document.createElement("div");s.className="rotate-hint",s.textContent="↻ Rotate to landscape for the best cockpit",document.body.appendChild(s)}const _s=new q0({canvas:Pv,antialias:!0});_s.setPixelRatio(Math.min(window.devicePixelRatio,2));{const{w:s,h:t}=Oi();_s.setSize(s,t)}const bh=new Cv;let We=null,co=null,us=null,pr=null,wh="wwi";function Mr(){co?.dispose(),co=null,us?.dispose(),us=null}function mr(){Mr(),We?.dispose(),We=null,document.body.classList.add("in-menu"),co=new gv(vs,Lv,Dv)}function Dv(s){Mr(),document.body.classList.add("in-menu"),wh=s,us=new Sh(vs,s,{onFly:Eh,onExit:mr})}function Lv(s){Mr(),document.body.classList.remove("in-menu"),pr=null,We=new gh(_s,vs,s,null,bh)}function Eh(s,t){Mr(),document.body.classList.remove("in-menu"),pr=s,We=new gh(_s,vs,t,s,bh)}function Iv(){if(!We)return;const s=We.getResult(),t=pr;pr=null,We.dispose(),We=null,t?(document.body.classList.add("in-menu"),us=new Sh(vs,wh,{onFly:Eh,onExit:mr}),us.showDebrief(t,s)):mr()}eg(()=>{const{w:s,h:t}=Oi();_s.setSize(s,t),We?.resize(s,t)});let fc=performance.now();function Th(s){const t=Math.min((s-fc)/1e3,.25);fc=s,We&&!We.update(t)&&Iv(),window.__jets={session:We},requestAnimationFrame(Th)}mr();requestAnimationFrame(Th);
