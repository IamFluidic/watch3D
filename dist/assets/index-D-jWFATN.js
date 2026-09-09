(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Vn=[{id:"steel",name:"01. Steel Classic",subtitle:"316L Surgical Stainless Steel",dialColor:"#1B2A4A",dialName:"Cobalt Sunray",caseColor:"#E2E8F0",caseMetalness:.95,caseRoughness:.22,bezelColor:"#E2E8F0",strapType:"metal",strapColor:"#CBD5E1",handsColor:"#F8FAFC",lumeColor:"#38BDF8",accentColor:"#38BDF8",price:"$2,450",description:"Cold-forged from marine-grade 316L stainless steel with vertical satin brushing, polished chamfered bevels, and a deep cobalt sunray dial."},{id:"dlc",name:"02. Midnight Phantom",subtitle:"Metallic Black DLC Coated",dialColor:"#09090B",dialName:"Obsidian Black",caseColor:"#111318",caseMetalness:.96,caseRoughness:.14,bezelColor:"#0A0B0E",strapType:"metal",strapColor:"#0F1115",handsColor:"#CBD5E1",lumeColor:"#38BDF8",accentColor:"#38BDF8",price:"$2,850",description:"Vapor-deposited DLC coating bonds to the surgical steel core at the atomic level, creating an obsidian-black surface with 3,500 Vickers hardness and mirror-metallic sheen."},{id:"rose",name:"03. Champagne 18K",subtitle:"18K Rose Gold & Opaline",dialColor:"#FBF6EE",dialName:"Ivory Opaline",caseColor:"#E6B89C",caseMetalness:.92,caseRoughness:.2,bezelColor:"#C99276",strapType:"leather",strapColor:"#3A2118",handsColor:"#B4654A",lumeColor:"#FDE047",accentColor:"#B4654A",price:"$4,200",description:"Cast in proprietary 18-karat rose gold alloy enriched with copper and platinum for lasting lustre, paired with an opaline dial and French calfskin."},{id:"titanium",name:"04. Racing Titanium",subtitle:"Grade 5 Satin Titanium",dialColor:"#0D2818",dialName:"Racing Emerald",caseColor:"#94A3B8",caseMetalness:.88,caseRoughness:.42,bezelColor:"#041B0E",strapType:"leather",strapColor:"#1E2228",handsColor:"#F8FAFC",lumeColor:"#4ADE80",accentColor:"#22C55E",price:"$3,150",description:"Ultra-light Grade 5 aerospace titanium bead-blasted to a satin sheen, boasting 40% less weight than steel with double the tensile resistance."}],bs=[{id:"sapphire",name:"Dual-Domed Sapphire Crystal",metric:"2.1mm thickness • 9 Mohs hardness",offsetZ:3.4,description:"Synthetic corundum crystal with five anti-reflective interior vapor layers, virtually scratch-proof."},{id:"bezel",name:"Brushed Steel Bezel Ring",metric:"6 Recessed Hex Screws • 316L Surgical Steel",offsetZ:2.3,description:"Cold-forged steel bezel insert with concentric satin grain and mirror-polished chamfers matching the case."},{id:"dial",name:"Dial & Applied Baton Indices",metric:"Sunray radial grain • Grade X1 Super-LumiNova",offsetZ:1.2,description:"Individually hand-applied faceted markers with chamfered edges and photoluminescent compound reservoirs."},{id:"hands",name:"Diamond-Cut Dauphine Hands",metric:"Rhomboid profile • Continuous sweep seconds",offsetZ:.6,description:"Balanced diamond-cut hour and minute hands paired with a needle-thin central seconds hand counterweighted for 4Hz sweep."},{id:"movement",name:"Calibre A3016 Nepal Automatic Engine",metric:"28,800 vph (4Hz) • 26 Jewels • 48h Reserve",offsetZ:-.6,description:"In-house mechanical movement with Glucydur balance wheel, perlage circular graining, and Incabloc shock protection."},{id:"case",name:"Monobloc Middle Case",metric:"40.0mm diameter • 10.8mm thin • 100m Water Resistant",offsetZ:-1.6,description:"CNC-milled from a single solid block of 316L alloy with integrated screw-down crown and O-ring twin seal gaskets."},{id:"caseback",name:"Solid Plane Steel Caseback",metric:"Threaded screw-in • Surgical 316L",offsetZ:-2.6,description:"Solid surgical steel back laser-engraved with the iconic ALUNA italic script and model reference A3016."}],nc=[{label:"Manufacture & Calibre",value:"ALUNA Calibre A3016 In-House Automatic"},{label:"Origin",value:"Handcrafted & Regulated in Nepal"},{label:"Frequency",value:"28,800 A/h (4 Hz / 8 Beats per Second)"},{label:"Power Reserve",value:"48 Hours Extended Reserve"},{label:"Jewels",value:"26 Synthetic Rubies"},{label:"Case Dimensions",value:"40.0 mm Diameter • 10.8 mm Profile • 47.2 mm Lug-to-Lug"},{label:"Lug Width",value:"20.0 mm (Tapered to 16.0 mm Deployant)"},{label:"Case Material",value:"Cold-Forged 316L Surgical Steel (1.4404)"},{label:"Water Resistance",value:"10 ATM / 100 Meters / 330 Feet (Dual O-Ring Hermetic)"},{label:"Crystal",value:"Dual-Domed Anti-Reflective Synthetic Sapphire"},{label:"Luminescence",value:"Nepal Super-LumiNova® Grade X1 Glow"},{label:"Chronometer Precision",value:"-2 / +4 sec / day (Kathmandu Observatory Standard)"},{label:"Bracelet",value:"Solid 316L 3-Link Steel with Micro-Adjust Deployant"},{label:"Warranty",value:"5-Year International Manufacture Warranty"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="186",ic=0,Ja=1,rc=2,Er=1,il=2,Ni=3,In=0,Ut=1,It=2,_n=0,Oi=1,Qa=2,ja=3,eo=4,sc=5,ui=100,ac=101,oc=102,lc=103,cc=104,hc=200,uc=201,dc=202,fc=203,rl=204,sl=205,pc=206,mc=207,gc=208,_c=209,vc=210,xc=211,Mc=212,Sc=213,yc=214,Ts=0,As=1,ws=2,Gi=3,Cs=4,Rs=5,Ps=6,Ls=7,al=0,Ec=1,bc=2,an=0,ol=1,ll=2,cl=3,Ma=4,hl=5,ul=6,dl=7,fl=300,qn=301,xi=302,Vr=303,kr=304,Fr=306,Is=1e3,gn=1001,Ds=1002,Et=1003,Tc=1004,ji=1005,wt=1006,Wr=1007,kn=1008,zt=1009,pl=1010,ml=1011,Hi=1012,Sa=1013,on=1014,rn=1015,ln=1016,ya=1017,Ea=1018,Vi=1020,gl=35902,_l=35899,vl=1021,xl=1022,Kt=1023,Mn=1026,Wn=1027,Ml=1028,ba=1029,Yn=1030,Ta=1031,Aa=1033,br=33776,Tr=33777,Ar=33778,wr=33779,Ns=35840,Us=35841,Fs=35842,Os=35843,Bs=36196,zs=37492,Gs=37496,Hs=37488,Vs=37489,Rr=37490,ks=37491,Ws=37808,Xs=37809,qs=37810,Ys=37811,Zs=37812,$s=37813,Ks=37814,Js=37815,Qs=37816,js=37817,ea=37818,ta=37819,na=37820,ia=37821,ra=36492,sa=36494,aa=36495,oa=36283,la=36284,Pr=36285,ca=36286,Ac=3200,ha=0,wc=1,Pn="",Vt="srgb",Lr="srgb-linear",Ir="linear",at="srgb",Xr=7680,Cc=519,Rc=512,Pc=513,Lc=514,wa=515,Ic=516,Dc=517,Ca=518,Nc=519,Uc=35044,to="300 es",sn=2e3,ki=2001;function Fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=Dr("canvas");return i.style.display="block",i}const no={};function io(...i){const e="THREE."+i.shift();console.log(e,...i)}function Sl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Sl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=Sl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){const e=i.join(" ");e in no||(no[e]=!0,Xe(...i))}function Bc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const zc={[Ts]:As,[ws]:Ps,[Cs]:Ls,[Gi]:Rs,[As]:Ts,[Ps]:ws,[Ls]:Cs,[Rs]:Gi};class $n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,ua=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Gc(i,e){return(i%e+e)%e}function Yr(i,e,t){return(1-t)*i+t*e}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fa=class Fa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fa.prototype.isVector2=!0;let ye=Fa;class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(d!==y||l!==h||c!==m||u!==_){let p=l*h+c*m+u*_+d*y;p<0&&(h=-h,m=-m,_=-_,y=-y,p=-p);let f=1-o;if(p<.9995){const R=Math.acos(p),I=Math.sin(R);f=Math.sin(f*R)/I,o=Math.sin(o*R)/I,l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+y*o}else{l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+y*o;const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*m-c*h,e[t+1]=l*_+u*h+c*d-o*m,e[t+2]=c*_+u*m+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oa=class Oa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oa.prototype.isVector3=!0;let z=Oa;const Zr=new z,ro=new Ei,Ba=class Ba{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],y=r[0],p=r[3],f=r[6],R=r[1],I=r[4],S=r[7],E=r[2],b=r[5],P=r[8];return s[0]=a*y+o*R+l*E,s[3]=a*p+o*I+l*b,s[6]=a*f+o*S+l*P,s[1]=c*y+u*R+d*E,s[4]=c*p+u*I+d*b,s[7]=c*f+u*S+d*P,s[2]=h*y+m*R+_*E,s[5]=h*p+m*I+_*b,s[8]=h*f+m*S+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*d+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-u*n)*y,e[2]=(o*n-r*a)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($r.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($r.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ba.prototype.isMatrix3=!0;let Ze=Ba;const $r=new Ze,so=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hc(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Ir:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const tt=Hc();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class Vc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=Dr("canvas")),Qn.width=e.width,Qn.height=e.height;const r=Qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kc=0;class Ra{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kr(r[a].image)):s.push(Kr(r[a]))}else s=Kr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Wc=0;const Jr=new z;class Ct extends $n{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=gn,r=gn,s=wt,a=kn,o=Kt,l=zt,c=Ct.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=yi(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=fl;Ct.DEFAULT_ANISOTROPY=1;const za=class za{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,S=(m+1)/2,E=(f+1)/2,b=(u+h)/4,P=(d+y)/4,v=(_+p)/4;return I>S&&I>E?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=b/n,s=P/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=v/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=P/s,r=v/s),this.set(n,r,s,t),this}let R=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(d-y)/R,this.z=(h-u)/R,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};za.prototype.isVector4=!0;let dt=za;class Xc extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ct(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qc extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ur=class Ur{constructor(e,t,n,r,s,a,o,l,c,u,d,h,m,_,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,m,_,y,p)}set(e,t,n,r,s,a,o,l,c,u,d,h,m,_,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ur().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,y=c*d;t[0]=h+y*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+_,t[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yc,e,Zc)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),bn.crossVectors(n,Ot),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),bn.crossVectors(n,Ot)),bn.normalize(),er.crossVectors(Ot,bn),r[0]=bn.x,r[4]=er.x,r[8]=Ot.x,r[1]=bn.y,r[5]=er.y,r[9]=Ot.y,r[2]=bn.z,r[6]=er.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],y=n[6],p=n[10],f=n[14],R=n[3],I=n[7],S=n[11],E=n[15],b=r[0],P=r[4],v=r[8],A=r[12],N=r[1],L=r[5],O=r[9],G=r[13],w=r[2],U=r[6],X=r[10],H=r[14],ae=r[3],K=r[7],C=r[11],M=r[15];return s[0]=a*b+o*N+l*w+c*ae,s[4]=a*P+o*L+l*U+c*K,s[8]=a*v+o*O+l*X+c*C,s[12]=a*A+o*G+l*H+c*M,s[1]=u*b+d*N+h*w+m*ae,s[5]=u*P+d*L+h*U+m*K,s[9]=u*v+d*O+h*X+m*C,s[13]=u*A+d*G+h*H+m*M,s[2]=_*b+y*N+p*w+f*ae,s[6]=_*P+y*L+p*U+f*K,s[10]=_*v+y*O+p*X+f*C,s[14]=_*A+y*G+p*H+f*M,s[3]=R*b+I*N+S*w+E*ae,s[7]=R*P+I*L+S*U+E*K,s[11]=R*v+I*O+S*X+E*C,s[15]=R*A+I*G+S*H+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],f=e[15],R=l*m-c*h,I=o*m-c*d,S=o*h-l*d,E=a*m-c*u,b=a*h-l*u,P=a*d-o*u;return t*(y*R-p*I+f*S)-n*(_*R-p*E+f*b)+r*(_*I-y*E+f*P)-s*(_*S-y*b+p*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],f=e[15],R=t*o-n*a,I=t*l-r*a,S=t*c-s*a,E=n*l-r*o,b=n*c-s*o,P=r*c-s*l,v=u*y-d*_,A=u*p-h*_,N=u*f-m*_,L=d*p-h*y,O=d*f-m*y,G=h*f-m*p,w=R*G-I*O+S*L+E*N-b*A+P*v;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/w;return e[0]=(o*G-l*O+c*L)*U,e[1]=(r*O-n*G-s*L)*U,e[2]=(y*P-p*b+f*E)*U,e[3]=(h*b-d*P-m*E)*U,e[4]=(l*N-a*G-c*A)*U,e[5]=(t*G-r*N+s*A)*U,e[6]=(p*S-_*P-f*I)*U,e[7]=(u*P-h*S+m*I)*U,e[8]=(a*O-o*N+c*v)*U,e[9]=(n*N-t*O-s*v)*U,e[10]=(_*b-y*S+f*R)*U,e[11]=(d*S-u*b-m*R)*U,e[12]=(o*A-a*L-l*v)*U,e[13]=(t*L-n*A+r*v)*U,e[14]=(y*I-_*E-p*R)*U,e[15]=(u*E-d*I+h*R)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,_=s*d,y=a*u,p=a*d,f=o*d,R=l*c,I=l*u,S=l*d,E=n.x,b=n.y,P=n.z;return r[0]=(1-(y+f))*E,r[1]=(m+S)*E,r[2]=(_-I)*E,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(h+f))*b,r[6]=(p+R)*b,r[7]=0,r[8]=(_+I)*P,r[9]=(p-R)*P,r[10]=(1-(h+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=jn.set(r[0],r[1],r[2]).length();const o=jn.set(r[4],r[5],r[6]).length(),l=jn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xt.copy(this);const c=1/a,u=1/o,d=1/l;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=sn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===sn)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ki)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=sn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===sn)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===ki)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ur.prototype.isMatrix4=!0;let pt=Ur;const jn=new z,Xt=new pt,Yc=new z(0,0,0),Zc=new z(1,1,1),bn=new z,er=new z,Ot=new z,oo=new pt,lo=new Ei;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const co=new z,ei=new Ei,un=new pt,tr=new z,wi=new z,Kc=new z,Jc=new Ei,ho=new z(1,0,0),uo=new z(0,1,0),fo=new z(0,0,1),po={type:"added"},Qc={type:"removed"},ti={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Rt extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new z,t=new Dn,n=new Ei,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(fo,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(wi,tr,this.up):un.lookAt(tr,wi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(un),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(po),ti.child=e,this.dispatchEvent(ti),ti.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qc),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(po),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new z(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jc={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jc)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Gc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=es(a,s,e+1/3),this.g=es(a,s,e),this.b=es(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return tt.workingToColorSpace(At.copy(this),e),Math.round(je(At.r*255,0,255))*65536+Math.round(je(At.g*255,0,255))*256+Math.round(je(At.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Vt){tt.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(nr);const n=Yr(Tn.h,nr.h,t),r=Yr(Tn.s,nr.s,t),s=Yr(Tn.l,nr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=bl;class Tl extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new z,dn=new z,ts=new z,fn=new z,ni=new z,ii=new z,mo=new z,ns=new z,is=new z,rs=new z,ss=new dt,as=new dt,os=new dt;class $t{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),dn.subVectors(n,t),ts.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(dn),l=qt.dot(ts),c=dn.dot(dn),u=dn.dot(ts),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ss.setScalar(0),as.setScalar(0),os.setScalar(0),ss.fromBufferAttribute(e,t),as.fromBufferAttribute(e,n),os.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ss,s.x),a.addScaledVector(as,s.y),a.addScaledVector(os,s.z),a}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),dn.subVectors(e,t),qt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ni.subVectors(r,n),ii.subVectors(s,n),ns.subVectors(e,n);const l=ni.dot(ns),c=ii.dot(ns);if(l<=0&&c<=0)return t.copy(n);is.subVectors(e,r);const u=ni.dot(is),d=ii.dot(is);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ni,a);rs.subVectors(e,s);const m=ni.dot(rs),_=ii.dot(rs);if(_>=0&&m<=_)return t.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ii,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return mo.subVectors(s,r),o=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(mo,o);const f=1/(p+y+h);return a=y*f,o=h*f,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $i{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),rr.subVectors(this.max,Ci),ri.subVectors(e.a,Ci),si.subVectors(e.b,Ci),ai.subVectors(e.c,Ci),An.subVectors(si,ri),wn.subVectors(ai,si),Un.subVectors(ri,ai);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-Un.z,Un.y,An.z,0,-An.x,wn.z,0,-wn.x,Un.z,0,-Un.x,-An.y,An.x,0,-wn.y,wn.x,0,-Un.y,Un.x,0];return!ls(t,ri,si,ai,rr)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,ri,si,ai,rr))?!1:(sr.crossVectors(An,wn),t=[sr.x,sr.y,sr.z],ls(t,ri,si,ai,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new z,new z,new z,new z,new z,new z,new z,new z],Yt=new z,ir=new $i,ri=new z,si=new z,ai=new z,An=new z,wn=new z,Un=new z,Ci=new z,rr=new z,sr=new z,Fn=new z;function ls(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fn.fromArray(i,s);const o=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),u=n.dot(Fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xt=new z,ar=new ye;let eh=0;class xn extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Al extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wl extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const th=new $i,Ri=new z,cs=new z;class Pa{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):th.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(cs)),this.expandByPoint(Ri.copy(e.center).sub(cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nh=0;const Ht=new pt,hs=new Rt,oi=new z,Bt=new $i,Pi=new $i,yt=new z;class Ft extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?wl:Al)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return hs.lookAt(e),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Bt.min,Pi.min),Bt.expandByPoint(yt),yt.addVectors(Bt.max,Pi.max),Bt.expandByPoint(yt)):(Bt.expandByPoint(Pi.min),Bt.expandByPoint(Pi.max))}Bt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(e,c),yt.add(oi)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;const c=new z,u=new z,d=new z,h=new ye,m=new ye,_=new ye,y=new z,p=new z;function f(v,A,N){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),h.fromBufferAttribute(s,v),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,N),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),o[v].add(y),o[A].add(y),o[N].add(y),l[v].add(p),l[A].add(p),l[N].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let v=0,A=R.length;v<A;++v){const N=R[v],L=N.start,O=N.count;for(let G=L,w=L+O;G<w;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const I=new z,S=new z,E=new z,b=new z;function P(v){E.fromBufferAttribute(r,v),b.copy(E);const A=o[v];I.copy(A),I.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(b,A);const L=S.dot(l[v])<0?-1:1;a.setXYZW(v,I.x,I.y,I.z,L)}for(let v=0,A=R.length;v<A;++v){const N=R[v],L=N.start,O=N.count;for(let G=L,w=L+O;G<w;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new xn(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const us=new z,ih=new z,rh=new Ze;class Rn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=us.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(us),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rh.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sh=0;class bi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Oi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new z,ds=new z,or=new z,lr=new z;class ah{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ds.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(ds);const s=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=lr.dot(this.direction),l=-lr.dot(or),c=lr.lengthSq(),u=Math.abs(1-a*a);let d,h,m,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const y=1/u;d*=y,h*=y,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ds).addScaledVector(or,h),m}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,m=e.z-a.z,_=t.x-a.x,y=t.y-a.y,p=t.z-a.z,f=n.x-a.x,R=n.y-a.y,I=n.z-a.z,S=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let P,v,A,N,L,O,G,w,U,X,H,ae;if(S>=E&&S>=b?(A=l,O=d,U=_,ae=f,l>=0?(P=c,v=u,N=h,L=m,G=y,w=p,X=R,H=I):(P=u,v=c,N=m,L=h,G=p,w=y,X=I,H=R)):E>=b?(A=c,O=h,U=y,ae=R,c>=0?(P=u,v=l,N=m,L=d,G=p,w=_,X=I,H=f):(P=l,v=u,N=d,L=m,G=_,w=p,X=f,H=I)):(A=u,O=m,U=p,ae=I,u>=0?(P=l,v=c,N=d,L=h,G=_,w=y,X=f,H=R):(P=c,v=l,N=h,L=d,G=y,w=_,X=R,H=f)),A===0)return null;const K=P/A,C=v/A,M=1/A,se=N-K*O,te=L-C*O,Ee=G-K*U,_e=w-C*U,Te=X-K*ae,V=H-C*ae,Y=Te*_e-V*Ee,he=se*V-te*Te,be=Ee*te-_e*se;if(r){if(Y<0||he<0||be<0)return null}else if((Y<0||he<0||be<0)&&(Y>0||he>0||be>0))return null;const fe=Y+he+be;if(fe===0)return null;const ee=M*(Y*O+he*U+be*ae);return(fe>0?ee<0:ee>0)?null:this.at(ee/fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const go=new pt,On=new ah,cr=new Pa,_o=new z,hr=new z,ur=new z,dr=new z,fs=new z,fr=new z,vo=new z,pr=new z;class Ye extends Rt{constructor(e=new Ft,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(fs.fromBufferAttribute(d,e),a?fr.addScaledVector(fs,u):fr.addScaledVector(fs.sub(t),u))}t.add(fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(cr.containsPoint(On.origin)===!1&&(On.intersectSphere(cr,_o)===null||On.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(go.copy(s).invert(),On.copy(e.ray).applyMatrix4(go),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=a[p.materialIndex],R=Math.max(p.start,m.start),I=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=R,E=I;S<E;S+=3){const b=o.getX(S),P=o.getX(S+1),v=o.getX(S+2);r=mr(this,f,e,n,c,u,d,b,P,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const R=o.getX(p),I=o.getX(p+1),S=o.getX(p+2);r=mr(this,a,e,n,c,u,d,R,I,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],f=a[p.materialIndex],R=Math.max(p.start,m.start),I=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=R,E=I;S<E;S+=3){const b=S,P=S+1,v=S+2;r=mr(this,f,e,n,c,u,d,b,P,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const R=p,I=p+1,S=p+2;r=mr(this,a,e,n,c,u,d,R,I,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function oh(i,e,t,n,r,s,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===In,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);const u=oh(i,e,t,n,hr,ur,dr,vo);if(u){const d=new z;$t.getBarycoord(vo,hr,ur,dr,d),r&&(u.uv=$t.getInterpolatedAttribute(r,o,l,c,d,new ye)),s&&(u.uv1=$t.getInterpolatedAttribute(s,o,l,c,d,new ye)),a&&(u.normal=$t.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};$t.getNormal(hr,ur,dr,h.normal),u.face=h,u.barycoord=d}return u}class lh extends Ct{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Et,u=Et,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bn=new Pa,ch=new ye(.5,.5),gr=new z;class La{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],m=s[7],_=s[8],y=s[9],p=s[10],f=s[11],R=s[12],I=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,m-u,f-_,E-R).normalize(),r[1].setComponents(c+a,m+u,f+_,E+R).normalize(),r[2].setComponents(c+o,m+d,f+y,E+I).normalize(),r[3].setComponents(c-o,m-d,f-y,E-I).normalize(),n)r[4].setComponents(l,h,p,S).normalize(),r[5].setComponents(c-l,m-h,f-p,E-S).normalize();else if(r[4].setComponents(c-l,m-h,f-p,E-S).normalize(),t===sn)r[5].setComponents(c+l,m+h,f+p,E+S).normalize();else if(t===ki)r[5].setComponents(l,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){Bn.center.set(0,0,0);const t=ch.distanceTo(e.center);return Bn.radius=.7071067811865476+t,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gr.x=r.normal.x>0?e.max.x:e.min.x,gr.y=r.normal.y>0?e.max.y:e.min.y,gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cl extends Ct{constructor(e=[],t=qn,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ki extends Ct{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi extends Ct{constructor(e,t,n=on,r,s,a,o=Et,l=Et,c,u=Mn,d=1){if(u!==Mn&&u!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hh extends Wi{constructor(e,t=on,n=qn,r,s,a=Et,o=Et,l,c=Mn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nt extends Ft{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function _(y,p,f,R,I,S,E,b,P,v,A){const N=S/P,L=E/v,O=S/2,G=E/2,w=b/2,U=P+1,X=v+1;let H=0,ae=0;const K=new z;for(let C=0;C<X;C++){const M=C*L-G;for(let se=0;se<U;se++){const te=se*N-O;K[y]=te*R,K[p]=M*I,K[f]=w,c.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[f]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(se/P),d.push(1-C/v),H+=1}}for(let C=0;C<v;C++)for(let M=0;M<P;M++){const se=h+M+U*C,te=h+M+U*(C+1),Ee=h+(M+1)+U*(C+1),_e=h+(M+1)+U*C;l.push(se,te,_e),l.push(te,Ee,_e),ae+=6}o.addGroup(m,ae,A),m+=ae,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fi extends Ft{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const m=n+d/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gn extends Ft{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],m=[];let _=0;const y=[],p=n/2;let f=0;R(),a===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(m,2));function R(){const S=new z,E=new z;let b=0;const P=(t-e)/n;for(let v=0;v<=s;v++){const A=[],N=v/s,L=N*(t-e)+e;for(let O=0;O<=r;O++){const G=O/r,w=G*l+o,U=Math.sin(w),X=Math.cos(w);E.x=L*U,E.y=-N*n+p,E.z=L*X,d.push(E.x,E.y,E.z),S.set(U,P,X).normalize(),h.push(S.x,S.y,S.z),m.push(G,1-N),A.push(_++)}y.push(A)}for(let v=0;v<r;v++)for(let A=0;A<s;A++){const N=y[A][v],L=y[A+1][v],O=y[A+1][v+1],G=y[A][v+1];(e>0||A!==0)&&(u.push(N,L,G),b+=3),(t>0||A!==s-1)&&(u.push(L,O,G),b+=3)}c.addGroup(f,b,0),f+=b}function I(S){const E=_,b=new ye,P=new z;let v=0;const A=S===!0?e:t,N=S===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,p*N,0),h.push(0,N,0),m.push(.5,.5),_++;const L=_;for(let O=0;O<=r;O++){const w=O/r*l+o,U=Math.cos(w),X=Math.sin(w);P.x=A*X,P.y=p*N,P.z=A*U,d.push(P.x,P.y,P.z),h.push(0,N,0),b.x=U*.5+.5,b.y=X*.5*N+.5,m.push(b.x,b.y),_++}for(let O=0;O<r;O++){const G=E+O,w=L+O;S===!0?u.push(w,w+1,G):u.push(w+1,w,G),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,m=(a-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ye:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,r=[],s=[],a=[],o=new z,l=new pt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(je(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(je(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ia extends hn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*d+this.aX,c=h*d+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uh extends Ia{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,m*=u,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const xo=new z,Mo=new z,ps=new Da,ms=new Da,gs=new Da;class dh extends hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Mo.subVectors(r[0],r[1]).add(r[0]),c=Mo);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(xo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);y<1e-4&&(y=1),_<1e-4&&(_=y),p<1e-4&&(p=y),ps.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,y,p),ms.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,y,p),gs.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,y,p)}else this.curveType==="catmullrom"&&(ps.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ms.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),gs.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ps.calc(l),ms.calc(l),gs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function So(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function fh(i,e){const t=1-i;return t*t*e}function ph(i,e){return 2*(1-i)*i*e}function mh(i,e){return i*i*e}function Bi(i,e,t,n){return fh(i,e)+ph(i,t)+mh(i,n)}function gh(i,e){const t=1-i;return t*t*t*e}function _h(i,e){const t=1-i;return 3*t*t*i*e}function vh(i,e){return 3*(1-i)*i*i*e}function xh(i,e){return i*i*i*e}function zi(i,e,t,n,r){return gh(i,e)+_h(i,t)+vh(i,n)+xh(i,r)}class Pl extends hn{constructor(e=new ye,t=new ye,n=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zi(e,r.x,s.x,a.x,o.x),zi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends hn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zi(e,r.x,s.x,a.x,o.x),zi(e,r.y,s.y,a.y,o.y),zi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ll extends hn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends hn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Il extends hn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bi(e,r.x,s.x,a.x),Bi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends hn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bi(e,r.x,s.x,a.x),Bi(e,r.y,s.y,a.y),Bi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(So(o,l.x,c.x,u.x,d.x),So(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:dh,CubicBezierCurve:Pl,CubicBezierCurve3:Mh,EllipseCurve:Ia,LineCurve:Ll,LineCurve3:Sh,QuadraticBezierCurve:Il,QuadraticBezierCurve3:yh,SplineCurve:Dl});class Eh extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new da[r.type]().fromJSON(r))}return this}}class Nr extends Eh{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ll(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Il(this.currentPoint.clone(),new ye(e,t),new ye(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Pl(this.currentPoint.clone(),new ye(e,t),new ye(n,r),new ye(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Ia(e,t,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class di extends Nr{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Nr().fromJSON(r))}return this}}function bh(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Nl(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Rh(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<r;h+=t){const m=i[h],_=i[h+1];m<o&&(o=m),_<l&&(l=_),m>u&&(u=m),_>d&&(d=_)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Xi(s,a,t,o,l,c,0),a}function Nl(i,e,t,n,r){let s;if(r===Gh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=yo(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=yo(a/n|0,i[a],i[a+1],s);return s&&Mi(s,s.next)&&(Yi(s),s=s.next),s}function Zn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mi(t,t.next)||ft(t.prev,t,t.next)===0)){if(Yi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Nh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Ah(i,n,r,s):Th(i)){e.push(l.i,i.i,c.i),Yi(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=wh(Zn(i),e),Xi(i,e,t,n,r,s,2)):a===2&&Ch(i,e,t,n,r,s):Xi(Zn(i),e,t,n,r,s,1);break}}}function Th(i){const e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),d=Math.min(o,l,c),h=Math.max(r,s,a),m=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=m&&Ui(r,o,s,l,a,c,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ah(i,e,t,n){const r=i.prev,s=i,a=i.next;if(ft(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,d=s.y,h=a.y,m=Math.min(o,l,c),_=Math.min(u,d,h),y=Math.max(o,l,c),p=Math.max(u,d,h),f=fa(m,_,e,t,n),R=fa(y,p,e,t,n);let I=i.prevZ,S=i.nextZ;for(;I&&I.z>=f&&S&&S.z<=R;){if(I.x>=m&&I.x<=y&&I.y>=_&&I.y<=p&&I!==r&&I!==a&&Ui(o,u,l,d,c,h,I.x,I.y)&&ft(I.prev,I,I.next)>=0||(I=I.prevZ,S.x>=m&&S.x<=y&&S.y>=_&&S.y<=p&&S!==r&&S!==a&&Ui(o,u,l,d,c,h,S.x,S.y)&&ft(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;I&&I.z>=f;){if(I.x>=m&&I.x<=y&&I.y>=_&&I.y<=p&&I!==r&&I!==a&&Ui(o,u,l,d,c,h,I.x,I.y)&&ft(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;S&&S.z<=R;){if(S.x>=m&&S.x<=y&&S.y>=_&&S.y<=p&&S!==r&&S!==a&&Ui(o,u,l,d,c,h,S.x,S.y)&&ft(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function wh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Mi(n,r)&&Fl(n,t,t.next,r)&&qi(n,r)&&qi(r,n)&&(e.push(n.i,t.i,r.i),Yi(t),Yi(t.next),t=i=r),t=t.next}while(t!==i);return Zn(t)}function Ch(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Oh(a,o)){let l=Ol(a,o);a=Zn(a,a.next),l=Zn(l,l.next),Xi(a,e,t,n,r,s,0),Xi(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Rh(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Nl(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Fh(c))}r.sort(Ph);for(let s=0;s<r.length;s++)t=Lh(r[s],t);return t}function Ph(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Lh(i,e){const t=Ih(i,e);if(!t)return e;const n=Ol(t,i);return Zn(n,n.next),Zn(t,t.next)}function Ih(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Mi(i,t))return t;do{if(Mi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ul(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);qi(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Dh(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Dh(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function Nh(i,e,t,n){let r=i;do r.z===0&&(r.z=fa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Uh(r)}function Uh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function fa(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Fh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ul(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ui(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Ul(i,e,t,n,r,s,a,o)}function Oh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bh(i,e)&&(qi(i,e)&&qi(e,i)&&zh(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||Mi(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mi(i,e){return i.x===e.x&&i.y===e.y}function Fl(i,e,t,n){const r=vr(ft(i,e,t)),s=vr(ft(i,e,n)),a=vr(ft(t,n,i)),o=vr(ft(t,n,e));return!!(r!==s&&a!==o||r===0&&_r(i,t,e)||s===0&&_r(i,n,e)||a===0&&_r(t,i,n)||o===0&&_r(t,e,n))}function _r(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vr(i){return i>0?1:i<0?-1:0}function Bh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qi(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function zh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ol(i,e){const t=pa(i.i,i.x,i.y),n=pa(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yo(i,e,t,n){const r=pa(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Yi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Hh{static triangulate(e,t,n=2){return bh(e,t,n)}}class pi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Eo(e),bo(n,e);let a=e.length;t.forEach(Eo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,bo(n,t[l]);const o=Hh.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Eo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Hn extends Ft{constructor(e=new di([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Vh;let I,S=!1,E,b,P,v;if(f){I=f.getSpacedPoints(u),S=!0,h=!1;const W=f.isCatmullRomCurve3?f.closed:!1;E=f.computeFrenetFrames(u,W),b=new z,P=new z,v=new z}h||(p=0,m=0,_=0,y=0);const A=o.extractPoints(c);let N=A.shape;const L=A.holes;if(!pi.isClockWise(N)){N=N.reverse();for(let W=0,ie=L.length;W<ie;W++){const le=L[W];pi.isClockWise(le)&&(L[W]=le.reverse())}}function G(W){const le=10000000000000001e-36;let ce=W[0];for(let de=1;de<=W.length;de++){const Ue=de%W.length,Le=W[Ue],Fe=Le.x-ce.x,Ge=Le.y-ce.y,D=Fe*Fe+Ge*Ge,Ke=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(ce.x),Math.abs(ce.y)),Me=le*Ke*Ke;if(D<=Me){W.splice(Ue,1),de--;continue}ce=Le}}G(N),L.forEach(G);const w=L.length,U=N;for(let W=0;W<w;W++){const ie=L[W];N=N.concat(ie)}function X(W,ie,le){return ie||it("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(ie,le)}const H=N.length;function ae(W,ie,le){let ce,de,Ue;const Le=W.x-ie.x,Fe=W.y-ie.y,Ge=le.x-W.x,D=le.y-W.y,Ke=Le*Le+Fe*Fe,Me=Le*D-Fe*Ge;if(Math.abs(Me)>Number.EPSILON){const T=Math.sqrt(Ke),g=Math.sqrt(Ge*Ge+D*D),k=ie.x-Fe/T,q=ie.y+Le/T,Q=le.x-D/g,pe=le.y+Ge/g,ge=((Q-k)*D-(pe-q)*Ge)/(Le*D-Fe*Ge);ce=k+Le*ge-W.x,de=q+Fe*ge-W.y;const j=ce*ce+de*de;if(j<=2)return new ye(ce,de);Ue=Math.sqrt(j/2)}else{let T=!1;Le>Number.EPSILON?Ge>Number.EPSILON&&(T=!0):Le<-Number.EPSILON?Ge<-Number.EPSILON&&(T=!0):Math.sign(Fe)===Math.sign(D)&&(T=!0),T?(ce=-Fe,de=Le,Ue=Math.sqrt(Ke)):(ce=Le,de=Fe,Ue=Math.sqrt(Ke/2))}return new ye(ce/Ue,de/Ue)}const K=[];for(let W=0,ie=U.length,le=ie-1,ce=W+1;W<ie;W++,le++,ce++)le===ie&&(le=0),ce===ie&&(ce=0),K[W]=ae(U[W],U[le],U[ce]);const C=[];let M,se=K.concat();for(let W=0,ie=w;W<ie;W++){const le=L[W];M=[];for(let ce=0,de=le.length,Ue=de-1,Le=ce+1;ce<de;ce++,Ue++,Le++)Ue===de&&(Ue=0),Le===de&&(Le=0),M[ce]=ae(le[ce],le[Ue],le[Le]);C.push(M),se=se.concat(M)}let te;if(p===0)te=pi.triangulateShape(U,L);else{const W=[],ie=[];for(let le=0;le<p;le++){const ce=le/p,de=m*Math.cos(ce*Math.PI/2),Ue=_*Math.sin(ce*Math.PI/2)+y;for(let Le=0,Fe=U.length;Le<Fe;Le++){const Ge=X(U[Le],K[Le],Ue);he(Ge.x,Ge.y,-de),ce===0&&W.push(Ge)}for(let Le=0,Fe=w;Le<Fe;Le++){const Ge=L[Le];M=C[Le];const D=[];for(let Ke=0,Me=Ge.length;Ke<Me;Ke++){const T=X(Ge[Ke],M[Ke],Ue);he(T.x,T.y,-de),ce===0&&D.push(T)}ce===0&&ie.push(D)}}te=pi.triangulateShape(W,ie)}const Ee=te.length,_e=_+y;for(let W=0;W<H;W++){const ie=h?X(N[W],se[W],_e):N[W];S?(P.copy(E.normals[0]).multiplyScalar(ie.x),b.copy(E.binormals[0]).multiplyScalar(ie.y),v.copy(I[0]).add(P).add(b),he(v.x,v.y,v.z)):he(ie.x,ie.y,0)}for(let W=1;W<=u;W++)for(let ie=0;ie<H;ie++){const le=h?X(N[ie],se[ie],_e):N[ie];S?(P.copy(E.normals[W]).multiplyScalar(le.x),b.copy(E.binormals[W]).multiplyScalar(le.y),v.copy(I[W]).add(P).add(b),he(v.x,v.y,v.z)):he(le.x,le.y,d/u*W)}for(let W=p-1;W>=0;W--){const ie=W/p,le=m*Math.cos(ie*Math.PI/2),ce=_*Math.sin(ie*Math.PI/2)+y;for(let de=0,Ue=U.length;de<Ue;de++){const Le=X(U[de],K[de],ce);he(Le.x,Le.y,d+le)}for(let de=0,Ue=L.length;de<Ue;de++){const Le=L[de];M=C[de];for(let Fe=0,Ge=Le.length;Fe<Ge;Fe++){const D=X(Le[Fe],M[Fe],ce);S?he(D.x,D.y+I[u-1].y,I[u-1].x+le):he(D.x,D.y,d+le)}}}Te(),V();function Te(){const W=r.length/3;if(h){let ie=0,le=H*ie;for(let ce=0;ce<Ee;ce++){const de=te[ce];be(de[2]+le,de[1]+le,de[0]+le)}ie=u+p*2,le=H*ie;for(let ce=0;ce<Ee;ce++){const de=te[ce];be(de[0]+le,de[1]+le,de[2]+le)}}else{for(let ie=0;ie<Ee;ie++){const le=te[ie];be(le[2],le[1],le[0])}for(let ie=0;ie<Ee;ie++){const le=te[ie];be(le[0]+H*u,le[1]+H*u,le[2]+H*u)}}n.addGroup(W,r.length/3-W,0)}function V(){const W=r.length/3;let ie=0;Y(U,ie),ie+=U.length;for(let le=0,ce=L.length;le<ce;le++){const de=L[le];Y(de,ie),ie+=de.length}n.addGroup(W,r.length/3-W,1)}function Y(W,ie){let le=W.length;for(;--le>=0;){const ce=le;let de=le-1;de<0&&(de=W.length-1);for(let Ue=0,Le=u+p*2;Ue<Le;Ue++){const Fe=H*Ue,Ge=H*(Ue+1),D=ie+ce+Fe,Ke=ie+de+Fe,Me=ie+de+Ge,T=ie+ce+Ge;fe(D,Ke,Me,T)}}}function he(W,ie,le){l.push(W),l.push(ie),l.push(le)}function be(W,ie,le){ee(W),ee(ie),ee(le);const ce=r.length/3,de=R.generateTopUV(n,r,ce-3,ce-2,ce-1);Ae(de[0]),Ae(de[1]),Ae(de[2])}function fe(W,ie,le,ce){ee(W),ee(ie),ee(ce),ee(ie),ee(le),ee(ce);const de=r.length/3,Ue=R.generateSideWallUV(n,r,de-6,de-3,de-2,de-1);Ae(Ue[0]),Ae(Ue[1]),Ae(Ue[3]),Ae(Ue[1]),Ae(Ue[2]),Ae(Ue[3])}function ee(W){r.push(l[W*3+0]),r.push(l[W*3+1]),r.push(l[W*3+2])}function Ae(W){s.push(W.x),s.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new da[r.type]().fromJSON(r)),new Hn(n,e.options)}}const Vh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,a),new ye(o,l),new ye(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],m=e[r*3+1],_=e[r*3+2],y=e[s*3],p=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-d),new ye(h,1-_),new ye(y,1-f)]:[new ye(o,1-l),new ye(u,1-d),new ye(m,1-_),new ye(p,1-f)]}};function kh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ln extends Ft{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,m=[],_=[],y=[],p=[];for(let f=0;f<u;f++){const R=f*h-a;for(let I=0;I<c;I++){const S=I*d-s;_.push(S,-R,0),y.push(0,0,1),p.push(I/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const I=R+c*f,S=R+c*(f+1),E=R+1+c*(f+1),b=R+1+c*f;m.push(I,S,b),m.push(S,E,b)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Or extends Ft{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,m=new z,_=new ye;for(let y=0;y<=r;y++){for(let p=0;p<=n;p++){const f=s+p/n*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let y=0;y<r;y++){const p=y*(n+1);for(let f=0;f<n;f++){const R=f+p,I=R,S=R+n+1,E=R+n+2,b=R+1;o.push(I,S,b),o.push(S,E,b)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mi extends Ft{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],d=[],h=new z,m=new z,_=new z;for(let y=0;y<=n;y++){const p=a+y/n*o;for(let f=0;f<=r;f++){const R=f/r*s;m.x=(e+t*Math.cos(p))*Math.cos(R),m.y=(e+t*Math.cos(p))*Math.sin(R),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),h.x=e*Math.cos(R),h.y=e*Math.sin(R),_.subVectors(m,h).normalize(),u.push(_.x,_.y,_.z),d.push(f/r),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=r;p++){const f=(r+1)*y+p-1,R=(r+1)*(y-1)+p-1,I=(r+1)*(y-1)+p,S=(r+1)*y+p;l.push(f,R,S),l.push(R,I,S)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Wh extends bi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(To(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(To(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function To(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const qh={clone:Si,merge:Lt};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $h extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zt extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ao extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kh extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jh extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zl extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _s=new pt,wo=new z,Co=new z;class Qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(wo),Co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Co),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){_s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_s,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ki||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xr=new z,Mr=new Ei,en=new z;class Gl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xr,Mr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xr,Mr,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new z,Ro=new ye,Po=new ye;class kt extends Gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,Po),t.subVectors(Po,Ro)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Na extends Gl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jh extends Qh{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Li extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class eu extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const li=-90,ci=1;class tu extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(li,ci,e,t);r.layers=this.layers,this.add(r);const s=new kt(li,ci,e,t);s.layers=this.layers,this.add(s);const a=new kt(li,ci,e,t);a.layers=this.layers,this.add(a);const o=new kt(li,ci,e,t);o.layers=this.layers,this.add(o);const l=new kt(li,ci,e,t);l.layers=this.layers,this.add(l);const c=new kt(li,ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nu extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ga=class Ga{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ga.prototype.isMatrix2=!0;let Lo=Ga;function Io(i,e,t,n){const r=ru(n);switch(t){case vl:return i*e;case Ml:return i*e/r.components*r.byteLength;case ba:return i*e/r.components*r.byteLength;case Yn:return i*e*2/r.components*r.byteLength;case Ta:return i*e*2/r.components*r.byteLength;case xl:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case Aa:return i*e*4/r.components*r.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Us:case Os:return Math.max(i,16)*Math.max(e,8)/4;case Ns:case Fs:return Math.max(i,8)*Math.max(e,8)/2;case Bs:case zs:case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Rr:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $s:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ra:case sa:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oa:case la:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pr:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ru(i){switch(i){case zt:case pl:return{byteLength:1,components:1};case Hi:case ml:case ln:return{byteLength:2,components:1};case ya:case Ea:return{byteLength:2,components:4};case on:case Sa:case rn:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function su(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],y=d[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const y=d[m];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ou=`#ifdef USE_ALPHAHASH
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
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,du=`#ifdef USE_AOMAP
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
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Mu=`#ifdef USE_BUMPMAP
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qu=`#ifdef USE_FOG
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
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,rd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
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
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tf=`#ifdef USE_TRANSMISSION
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
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
}`,pf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mf=`#define DISTANCE
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
}`,gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,yf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Tf=`#define MATCAP
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
}`,Af=`#define MATCAP
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
}`,wf=`#define NORMAL
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
}`,Cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rf=`#define PHONG
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
}`,Pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lf=`#define STANDARD
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
}`,If=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Df=`#define TOON
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
}`,Nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Uf=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,Bf=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,zf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:au,alphahash_pars_fragment:ou,alphamap_fragment:lu,alphamap_pars_fragment:cu,alphatest_fragment:hu,alphatest_pars_fragment:uu,aomap_fragment:du,aomap_pars_fragment:fu,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:_u,bsdfs:vu,iridescence_fragment:xu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Eu,clipping_planes_vertex:bu,color_fragment:Tu,color_pars_fragment:Au,color_pars_vertex:wu,color_vertex:Cu,common:Ru,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Du,emissivemap_fragment:Nu,emissivemap_pars_fragment:Uu,colorspace_fragment:Fu,colorspace_pars_fragment:Ou,envmap_fragment:Bu,envmap_common_pars_fragment:zu,envmap_pars_fragment:Gu,envmap_pars_vertex:Hu,envmap_physical_pars_fragment:Qu,envmap_vertex:Vu,fog_vertex:ku,fog_pars_vertex:Wu,fog_fragment:Xu,fog_pars_fragment:qu,gradientmap_pars_fragment:Yu,lightmap_pars_fragment:Zu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:Ku,lights_pars_begin:Ju,lights_toon_fragment:ju,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:rd,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:od,lightprobes_pars_fragment:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphinstance_vertex:xd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:yd,morphtarget_vertex:Ed,normal_fragment_begin:bd,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:wd,normal_vertex:Cd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Nd,packing:Ud,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:zd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:kd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:$d,specularmap_fragment:Kd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:ef,transmission_pars_fragment:tf,uv_pars_fragment:nf,uv_pars_vertex:rf,uv_vertex:sf,worldpos_vertex:af,background_vert:of,background_frag:lf,backgroundCube_vert:cf,backgroundCube_frag:hf,cube_vert:uf,cube_frag:df,depth_vert:ff,depth_frag:pf,distance_vert:mf,distance_frag:gf,equirect_vert:_f,equirect_frag:vf,linedashed_vert:xf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:yf,meshlambert_vert:Ef,meshlambert_frag:bf,meshmatcap_vert:Tf,meshmatcap_frag:Af,meshnormal_vert:wf,meshnormal_frag:Cf,meshphong_vert:Rf,meshphong_frag:Pf,meshphysical_vert:Lf,meshphysical_frag:If,meshtoon_vert:Df,meshtoon_frag:Nf,points_vert:Uf,points_frag:Ff,shadow_vert:Of,shadow_frag:Bf,sprite_vert:zf,sprite_frag:Gf},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},nn={basic:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Lt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Lt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Lt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Lt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Lt([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Lt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Lt([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Lt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Lt([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Lt([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Lt([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};nn.physical={uniforms:Lt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Sr={r:0,b:0,g:0},Hf=new pt,Vl=new Ze;Vl.set(-1,0,0,0,1,0,0,0,1);function Vf(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function m(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const S=R.backgroundBlurriness>0;I=e.get(I,S)}return I}function _(R){let I=!1;const S=m(R);S===null?p(a,o):S&&S.isColor&&(p(S,1),I=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(R,I){const S=m(I);S&&(S.isCubeTexture||S.mapping===Fr)?(c===void 0&&(c=new Ye(new Nt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Si(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vl),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ye(new Ln(2,2),new cn({name:"BackgroundMaterial",uniforms:Si(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,I){R.getRGB(Sr,Bl(i)),t.buffers.color.setClear(Sr.r,Sr.g,Sr.b,I,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,I=1){a.set(R),o=I,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,p(a,o)},render:_,addToRenderList:y,dispose:f}}function kf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(L,O,G,w,U){let X=!1;const H=d(L,w,G,O);s!==H&&(s=H,c(s.object)),X=m(L,w,G,U),X&&_(L,w,G,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,O,G,w),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,O,G,w){const U=w.wireframe===!0;let X=n[O.id];X===void 0&&(X={},n[O.id]=X);const H=L.isInstancedMesh===!0?L.id:0;let ae=X[H];ae===void 0&&(ae={},X[H]=ae);let K=ae[G.id];K===void 0&&(K={},ae[G.id]=K);let C=K[U];return C===void 0&&(C=h(l()),K[U]=C),C}function h(L){const O=[],G=[],w=[];for(let U=0;U<t;U++)O[U]=0,G[U]=0,w[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:w,object:L,attributes:{},index:null}}function m(L,O,G,w){const U=s.attributes,X=O.attributes;let H=0;const ae=G.getAttributes();for(const K in ae)if(ae[K].location>=0){const M=U[K];let se=X[K];if(se===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),M===void 0||M.attribute!==se||se&&M.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==w}function _(L,O,G,w){const U={},X=O.attributes;let H=0;const ae=G.getAttributes();for(const K in ae)if(ae[K].location>=0){let M=X[K];M===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(M=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(M=L.instanceColor));const se={};se.attribute=M,M&&M.data&&(se.data=M.data),U[K]=se,H++}s.attributes=U,s.attributesNum=H,s.index=w}function y(){const L=s.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function p(L){f(L,0)}function f(L,O){const G=s.newAttributes,w=s.enabledAttributes,U=s.attributeDivisors;G[L]=1,w[L]===0&&(i.enableVertexAttribArray(L),w[L]=1),U[L]!==O&&(i.vertexAttribDivisor(L,O),U[L]=O)}function R(){const L=s.newAttributes,O=s.enabledAttributes;for(let G=0,w=O.length;G<w;G++)O[G]!==L[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function I(L,O,G,w,U,X,H){H===!0?i.vertexAttribIPointer(L,O,G,U,X):i.vertexAttribPointer(L,O,G,w,U,X)}function S(L,O,G,w){y();const U=w.attributes,X=G.getAttributes(),H=O.defaultAttributeValues;for(const ae in X){const K=X[ae];if(K.location>=0){let C=U[ae];if(C===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const M=C.normalized,se=C.itemSize,te=e.get(C);if(te===void 0)continue;const Ee=te.buffer,_e=te.type,Te=te.bytesPerElement,V=_e===i.INT||_e===i.UNSIGNED_INT||C.gpuType===Sa;if(C.isInterleavedBufferAttribute){const Y=C.data,he=Y.stride,be=C.offset;if(Y.isInstancedInterleavedBuffer){for(let fe=0;fe<K.locationSize;fe++)f(K.location+fe,Y.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<K.locationSize;fe++)p(K.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let fe=0;fe<K.locationSize;fe++)I(K.location+fe,se/K.locationSize,_e,M,he*Te,(be+se/K.locationSize*fe)*Te,V)}else{if(C.isInstancedBufferAttribute){for(let Y=0;Y<K.locationSize;Y++)f(K.location+Y,C.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let Y=0;Y<K.locationSize;Y++)p(K.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Y=0;Y<K.locationSize;Y++)I(K.location+Y,se/K.locationSize,_e,M,se*Te,se/K.locationSize*Y*Te,V)}}else if(H!==void 0){const M=H[ae];if(M!==void 0)switch(M.length){case 2:i.vertexAttrib2fv(K.location,M);break;case 3:i.vertexAttrib3fv(K.location,M);break;case 4:i.vertexAttrib4fv(K.location,M);break;default:i.vertexAttrib1fv(K.location,M)}}}}R()}function E(){A();for(const L in n){const O=n[L];for(const G in O){const w=O[G];for(const U in w){const X=w[U];for(const H in X)u(X[H].object),delete X[H];delete w[U]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const O=n[L.id];for(const G in O){const w=O[G];for(const U in w){const X=w[U];for(const H in X)u(X[H].object),delete X[H];delete w[U]}}delete n[L.id]}function P(L){for(const O in n){const G=n[O];for(const w in G){const U=G[w];if(U[L.id]===void 0)continue;const X=U[L.id];for(const H in X)u(X[H].object),delete X[H];delete U[L.id]}}}function v(L){for(const O in n){const G=n[O],w=L.isInstancedMesh===!0?L.id:0,U=G[w];if(U!==void 0){for(const X in U){const H=U[X];for(const ae in H)u(H[ae].object),delete H[ae];delete U[X]}delete G[w],Object.keys(G).length===0&&delete n[O]}}}function A(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:p,disableUnusedAttributes:R}}function Wf(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Xf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Kt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zt&&P!==rn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:S,maxSamples:E,samples:b}}function qf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Rn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||r;return r=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const R=s?0:n,I=R*4;let S=f.clippingState||null;l.value=S,S=u(_,h,I,m);for(let E=0;E!==I;++E)S[E]=t[E];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const f=m+y*4,R=h.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<f)&&(p=new Float32Array(f));for(let I=0,S=m;I!==y;++I,S+=4)a.copy(d[I]).applyMatrix4(R,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const gi=4,Yf=6,Zf=20,$f=256,Ii=new Na,Do=new $e;let vs=null,xs=0,Ms=0,Ss=!1;const Kf=new z,zn=new z;class ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Kf}=s;vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,xs,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ln,format:Kt,colorSpace:Lr,depthBuffer:!1},r=No(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jf(s)),this._blurMaterial=jf(s,e,t),this._ggxMaterial=Qf(s,e,t)}return r}_compileMaterial(e){const t=new Ye(new Ft,e);this._renderer.compile(t,Ii)}_sceneToCubeUV(e,t,n,r,s){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Do),d.toneMapping=an,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Nt,new Xn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let f=!1;const R=e.background;R?R.isColor&&(p.color.copy(R),e.background=null,f=!0):(p.color.copy(Do),f=!0);for(let I=0;I<6;I++){const S=I%3;S===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[I],s.y,s.z)):S===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[I]));const E=this._cubeSize;hi(r,S*E,I>2?E:0,E,E),d.setRenderTarget(r),f&&d.render(y,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===qn||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ii)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:_}=this,y=this._sizeLods[n],p=3*y*(n>_-gi?n-_+gi:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,hi(s,p,f,3*y,2*y),r.setRenderTarget(s),r.render(o,Ii),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,hi(e,p,f,3*y,2*y),r.setRenderTarget(e),r.render(o,Ii)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-gi?r-this._lodMax+gi:0),h=4*(this._cubeSize-u);hi(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Ii)}}function Jf(i){const e=[],t=[];let n=i;const r=i-gi+1+Yf;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,_=new Float32Array(m*h*d),y=new Float32Array(m*h*d);for(let f=0;f<d;f++){const R=f%3*2/3-1,I=f>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];_.set(S,m*h*f);for(let E=0;E<h;E++){const b=u[E*2]*2-1,P=u[E*2+1]*2-1;f===0?zn.set(1,P,b):f===1?zn.set(-b,1,-P):f===2?zn.set(-b,P,1):f===3?zn.set(-1,P,-b):f===4?zn.set(-b,-1,P):zn.set(b,P,-1),zn.toArray(y,(f*h+E)*m)}}const p=new Ft;p.setAttribute("position",new xn(_,m)),p.setAttribute("outputDirection",new xn(y,m)),t.push(new Ye(p,null)),n>gi&&n--}return{lodMeshes:t,sizeLods:e}}function No(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qf(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$f,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function jf(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Uo(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Fo(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kl extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nt(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:_n});s.uniforms.tEquirect.value=t;const a=new Ye(r,s),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=wt),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function ep(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Vr||m===kr)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new kl(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===Vr||m===kr,y=m===qn||m===xi;if(_||y){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ma(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const R=h.image;return _&&R&&R.height>0||y&&R&&l(R)?(n===null&&(n=new ma(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Vr?h.mapping=qn:m===kr&&(h.mapping=xi),h}function l(h){let m=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_i("WebGLRenderer: "+n+" extension not supported."),r}}}function np(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(_===void 0)return;if(m!==null){const R=m.array;y=m.version;for(let I=0,S=R.length;I<S;I+=3){const E=R[I+0],b=R[I+1],P=R[I+2];h.push(E,b,b,P,P,E)}}else{const R=_.array;y=_.version;for(let I=0,S=R.length/3-1;I<S;I+=3){const E=I+0,b=I+1,P=I+2;h.push(E,b,b,P,P,E)}}const p=new(_.count>=65535?wl:Al)(h,1);p.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ip(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,d*a,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,m);let y=0;for(let p=0;p<m;p++)y+=h[p];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sp(i,e,t){const n=new WeakMap,r=new dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let N=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var m=N;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),p===!0&&(S=3);let E=o.attributes.position.count*S,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const P=new Float32Array(E*b*4*d),v=new yl(P,E,b,d);v.type=rn,v.needsUpdate=!0;const A=S*4;for(let L=0;L<d;L++){const O=f[L],G=R[L],w=I[L],U=E*b*4*L;for(let X=0;X<O.count;X++){const H=X*A;_===!0&&(r.fromBufferAttribute(O,X),P[U+H+0]=r.x,P[U+H+1]=r.y,P[U+H+2]=r.z,P[U+H+3]=0),y===!0&&(r.fromBufferAttribute(G,X),P[U+H+4]=r.x,P[U+H+5]=r.y,P[U+H+6]=r.z,P[U+H+7]=0),p===!0&&(r.fromBufferAttribute(w,X),P[U+H+8]=r.x,P[U+H+9]=r.y,P[U+H+10]=r.z,P[U+H+11]=w.itemSize===4?r.w:1)}}h={count:d,texture:v,size:new ye(E,b)},n.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function ap(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const op={[ol]:"LINEAR_TONE_MAPPING",[ll]:"REINHARD_TONE_MAPPING",[cl]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function lp(i,e,t,n,r,s){const a=new Jt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ft;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(c,u),h=new Na(-1,1,1,-1,0,1);let m=null,_=null,y=!1,p,f=null,R=[],I=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let b=0;b<R.length;b++){const P=R[b];P.setSize&&P.setSize(S,E)}},this.setEffects=function(S){R=S,I=R.length>0&&R[0].isRenderPass===!0;const E=a.width,b=a.height;R.length>0&&o===null&&(o=new Jt(E,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(E,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<R.length;P++){const v=R[P];v.setSize&&v.setSize(E,b)}},this.begin=function(S,E){if(y||S.toneMapping===an&&R.length===0)return!1;if(f=E,E!==null){const b=E.width,P=E.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return I===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=an,!0},this.hasRenderPass=function(){return I},this.end=function(S,E){S.toneMapping=p,y=!0;let b=a,P=o;for(let v=0;v<R.length;v++){const A=R[v];A.enabled!==!1&&(A.render(S,P,b,E),A.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,u.defines={},tt.getTransfer(m)===at&&(u.defines.SRGB_TRANSFER="");const v=op[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(f),S.render(d,h),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Wl=new Ct,ga=new Wi(1,1),Xl=new yl,ql=new qc,Yl=new Cl,Oo=[],Bo=[],zo=new Float32Array(16),Go=new Float32Array(9),Ho=new Float32Array(4);function Ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oo[r];if(s===void 0&&(s=new Float32Array(r),Oo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Ho.set(n),i.uniformMatrix2fv(this.addr,!1,Ho),St(t,n)}}function pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Go.set(n),i.uniformMatrix3fv(this.addr,!1,Go),St(t,n)}}function mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;zo.set(n),i.uniformMatrix4fv(this.addr,!1,zo),St(t,n)}}function gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ga.compareFunction=t.isReversedDepthBuffer()?Ca:wa,s=ga):s=Wl,t.setTexture2D(e||s,r)}function Tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ql,r)}function Ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yl,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xl,r)}function Cp(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return Mp;case 36294:return Sp;case 36295:return yp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return wp}}function Rp(i,e){i.uniform1fv(this.addr,e)}function Pp(i,e){const t=Ti(e,this.size,2);i.uniform2fv(this.addr,t)}function Lp(i,e){const t=Ti(e,this.size,3);i.uniform3fv(this.addr,t)}function Ip(i,e){const t=Ti(e,this.size,4);i.uniform4fv(this.addr,t)}function Dp(i,e){const t=Ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Np(i,e){const t=Ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Up(i,e){const t=Ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fp(i,e){i.uniform1iv(this.addr,e)}function Op(i,e){i.uniform2iv(this.addr,e)}function Bp(i,e){i.uniform3iv(this.addr,e)}function zp(i,e){i.uniform4iv(this.addr,e)}function Gp(i,e){i.uniform1uiv(this.addr,e)}function Hp(i,e){i.uniform2uiv(this.addr,e)}function Vp(i,e){i.uniform3uiv(this.addr,e)}function kp(i,e){i.uniform4uiv(this.addr,e)}function Wp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ga:a=Wl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Xp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ql,s[a])}function qp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yl,s[a])}function Yp(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xl,s[a])}function Zp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Gp;case 36294:return Hp;case 36295:return Vp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function Vo(i,e){i.seq.push(e),i.map[e.id]=e}function Qp(i,e,t){const n=i.name,r=n.length;for(ys.lastIndex=0;;){const s=ys.exec(n),a=ys.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vo(t,c===void 0?new $p(o,i,e):new Kp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Jp(o),Vo(t,d)),t=d}}}class Cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qp(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ko(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jp=37297;let em=0;function tm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wo=new Ze;function nm(i){tt._getMatrix(Wo,tt.workingColorSpace,i);const e=`mat3( ${Wo.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+tm(i.getShaderSource(e),o)}else return s}function im(i,e){const t=nm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rm={[ol]:"Linear",[ll]:"Reinhard",[cl]:"Cineon",[Ma]:"ACESFilmic",[ul]:"AgX",[dl]:"Neutral",[hl]:"Custom"};function sm(i,e){const t=rm[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new z;function am(){tt.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function lm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fi(i){return i!==""}function qo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(hm,dm)}const um=new Map;function dm(i,e){let t=Qe[e];if(t===void 0){const n=um.get(e);if(n!==void 0)t=Qe[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _a(t)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(i){return i.replace(fm,pm)}function pm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $o(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mm={[Er]:"SHADOWMAP_TYPE_PCF",[Ni]:"SHADOWMAP_TYPE_VSM"};function gm(i){return mm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _m={[qn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function vm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_m[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const xm={[xi]:"ENVMAP_MODE_REFRACTION"};function Mm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sm={[al]:"ENVMAP_BLENDING_MULTIPLY",[Ec]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function ym(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sm[i.combine]||"ENVMAP_BLENDING_NONE"}function Em(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gm(t),c=vm(t),u=Mm(t),d=ym(t),h=Em(t),m=om(t),_=lm(s),y=r.createProgram();let p,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fi).join(`
`),f.length>0&&(f+=`
`)):(p=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),f=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Qe.tonemapping_pars_fragment:"",t.toneMapping!==an?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,im("linearToOutputTexel",t.outputColorSpace),am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=_a(a),a=qo(a,t),a=Yo(a,t),o=_a(o),o=qo(o,t),o=Yo(o,t),a=Zo(a),o=Zo(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const I=R+p+a,S=R+f+o,E=ko(r,r.VERTEX_SHADER,I),b=ko(r,r.FRAGMENT_SHADER,S);r.attachShader(y,E),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",G=r.getShaderInfoLog(E)||"",w=r.getShaderInfoLog(b)||"",U=O.trim(),X=G.trim(),H=w.trim();let ae=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,E,b);else{const C=Xo(r,E,"vertex"),M=Xo(r,b,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+C+`
`+M)}else U!==""?Xe("WebGLProgram: Program Info Log:",U):(X===""||H==="")&&(K=!1);K&&(L.diagnostics={runnable:ae,programLog:U,vertexShader:{log:X,prefix:p},fragmentShader:{log:H,prefix:f}})}r.deleteShader(E),r.deleteShader(b),v=new Cr(r,y),A=cm(r,y)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,jp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=em++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}let Tm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wm(e),t.set(e,n)),n}}class wm{constructor(e){this.id=Tm++,this.code=e,this.usedTimes=0}}function Cm(i){return i===Yn||i===Rr||i===Pr}function Rm(i,e,t,n,r,s){const a=new El,o=new Am,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,A,N,L,O,G){const w=L.fog,U=O.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ae=e.get(v.envMap||X,H),K=ae&&ae.mapping===Fr?ae.image.height:null,C=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const M=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=M!==void 0?M.length:0;let te=0;U.morphAttributes.position!==void 0&&(te=1),U.morphAttributes.normal!==void 0&&(te=2),U.morphAttributes.color!==void 0&&(te=3);let Ee,_e,Te,V;if(C){const ct=nn[C];Ee=ct.vertexShader,_e=ct.fragmentShader}else{Ee=v.vertexShader,_e=v.fragmentShader;const ct=o.getVertexShaderStage(v),rt=o.getFragmentShaderStage(v);o.update(v,ct,rt),Te=ct.id,V=rt.id}const Y=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,fe=O.isBatchedMesh===!0,ee=!!v.map,Ae=!!v.matcap,W=!!ae,ie=!!v.aoMap,le=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,Ue=!!v.displacementMap,Le=!!v.emissiveMap,Fe=!!v.metalnessMap,Ge=!!v.roughnessMap,D=v.anisotropy>0,Ke=v.clearcoat>0,Me=v.dispersion>0,T=v.retroreflectivity>0,g=v.iridescence>0,k=v.sheen>0,q=v.transmission>0,Q=D&&!!v.anisotropyMap,pe=Ke&&!!v.clearcoatMap,ge=Ke&&!!v.clearcoatNormalMap,j=Ke&&!!v.clearcoatRoughnessMap,re=g&&!!v.iridescenceMap,xe=g&&!!v.iridescenceThicknessMap,Oe=k&&!!v.sheenColorMap,Se=k&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Ie=!!v.specularColorMap,He=!!v.specularIntensityMap,qe=q&&!!v.transmissionMap,F=q&&!!v.thicknessMap,me=!!v.gradientMap,ne=!!v.alphaMap,ve=v.alphaTest>0,Ce=!!v.alphaHash,ue=!!v.extensions;let Ve=an;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const ke={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:Ee,fragmentShader:_e,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:fe,batchingColor:fe&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Ae,envMap:W,envMapMode:W&&ae.mapping,envMapCubeUVHeight:K,aoMap:ie,lightMap:le,bumpMap:ce,normalMap:de,displacementMap:Ue,emissiveMap:Le,normalMapObjectSpace:de&&v.normalMapType===wc,normalMapTangentSpace:de&&v.normalMapType===ha,packedNormalMap:de&&v.normalMapType===ha&&Cm(v.normalMap.format),metalnessMap:Fe,roughnessMap:Ge,anisotropy:D,anisotropyMap:Q,clearcoat:Ke,clearcoatMap:pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:j,dispersion:Me,retroreflection:T,iridescence:g,iridescenceMap:re,iridescenceThicknessMap:xe,sheen:k,sheenColorMap:Oe,sheenRoughnessMap:Se,specularMap:oe,specularColorMap:Ie,specularIntensityMap:He,transmission:q,transmissionMap:qe,thicknessMap:F,gradientMap:me,opaque:v.transparent===!1&&v.blending===Oi&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:Ce,combine:v.combine,mapUv:ee&&_(v.map.channel),aoMapUv:ie&&_(v.aoMap.channel),lightMapUv:le&&_(v.lightMap.channel),bumpMapUv:ce&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:Ue&&_(v.displacementMap.channel),emissiveMapUv:Le&&_(v.emissiveMap.channel),metalnessMapUv:Fe&&_(v.metalnessMap.channel),roughnessMapUv:Ge&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:pe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(v.sheenRoughnessMap.channel),specularMapUv:oe&&_(v.specularMap.channel),specularColorMapUv:Ie&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:qe&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||D),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(ee||ne),fog:!!w,useFog:v.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:te,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:Le&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function p(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)A.push(N),A.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(f(A,v),R(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function R(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function I(v){const A=m[v.type];let N;if(A){const L=nn[A];N=qh.clone(L.uniforms)}else N=v.uniforms;return N}function S(v,A){let N=u.get(A);return N!==void 0?++N.usedTimes:(N=new bm(i,A,v,r),c.push(N),u.set(A,N)),N}function E(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:I,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:P}}function Pm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,y,p,f){let R=i[e];return R===void 0?(R={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:f},i[e]=R):(R.id=h.id,R.object=h,R.geometry=m,R.material=_,R.materialVariant=a(h),R.groupOrder=y,R.renderOrder=h.renderOrder,R.z=p,R.group=f),e++,R}function l(h,m,_,y,p,f,R){R.reversedDepth===!0&&(p=-p);const I=o(h,m,_,y,p,f);_.transmission>0?n.push(I):_.transparent===!0?r.push(I):t.push(I)}function c(h,m,_,y,p,f){const R=o(h,m,_,y,p,f);_.transmission>0?n.unshift(R):_.transparent===!0?r.unshift(R):t.unshift(R)}function u(h,m){t.length>1&&t.sort(h||Lm),n.length>1&&n.sort(m||Ko),r.length>1&&r.sort(m||Ko)}function d(){for(let h=e,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Im(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Jo,i.set(n,[a])):r>=s.length?(a=new Jo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Nm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Um=0;function Fm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Om(i){const e=new Dm,t=Nm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new pt,a=new pt;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,_=0,y=0,p=0,f=0,R=0,I=0,S=0,E=0,b=0,P=0,v=0,A=0,N=0;c.sort(Fm);for(let O=0,G=c.length;O<G;O++){const w=c[O],U=w.color,X=w.intensity,H=w.distance;let ae=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Yn?ae=w.shadow.map.texture:ae=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=U.r*X,d+=U.g*X,h+=U.b*X;else if(w.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(w.sh.coefficients[K],X);N++}else if(w.isSunLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const C=w.shadow,M=t.get(w);M.shadowIntensity=C.intensity,M.shadowBias=C.bias,M.shadowNormalBias=C.normalBias,M.shadowRadius=C.radius,M.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[_]=M,n.sunShadowMap[_]=ae;const se=C.getViewportCount();for(let te=0;te<se;te++)n.sunShadowMatrix[y+te]=C.getMatrix(te),n.sunShadowCascade[y+te]=C._cascadeData[te];y+=se,_++}n.sun[m]=K,m++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const C=w.shadow,M=t.get(w);M.shadowIntensity=C.intensity,M.shadowBias=C.bias,M.shadowNormalBias=C.normalBias,M.shadowRadius=C.radius,M.shadowMapSize=C.mapSize,n.directionalShadow[p]=M,n.directionalShadowMap[p]=ae,n.directionalShadowMatrix[p]=w.shadow.matrix,E++}n.directional[p]=K,p++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(U).multiplyScalar(X),K.distance=H,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,n.spot[R]=K;const C=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,C.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[R]=C.matrix,w.castShadow){const M=t.get(w);M.shadowIntensity=C.intensity,M.shadowBias=C.bias,M.shadowNormalBias=C.normalBias,M.shadowRadius=C.radius,M.shadowMapSize=C.mapSize,n.spotShadow[R]=M,n.spotShadowMap[R]=ae,P++}R++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy(U).multiplyScalar(X),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),n.rectArea[I]=K,I++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){const C=w.shadow,M=t.get(w);M.shadowIntensity=C.intensity,M.shadowBias=C.bias,M.shadowNormalBias=C.normalBias,M.shadowRadius=C.radius,M.shadowMapSize=C.mapSize,M.shadowCameraNear=C.camera.near,M.shadowCameraFar=C.camera.far,n.pointShadow[f]=M,n.pointShadowMap[f]=ae,n.pointShadowMatrix[f]=w.shadow.matrix,b++}n.point[f]=K,f++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(X),K.groundColor.copy(w.groundColor).multiplyScalar(X),n.hemi[S]=K,S++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==f||L.spotLength!==R||L.rectAreaLength!==I||L.hemiLength!==S||L.numSunShadows!==_||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==P||L.numSpotMaps!==v||L.numLightProbes!==N)&&(n.sun.length=m,n.directional.length=p,n.spot.length=R,n.rectArea.length=I,n.point.length=f,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,L.sunLength=m,L.directionalLength=p,L.pointLength=f,L.spotLength=R,L.rectAreaLength=I,L.hemiLength=S,L.numSunShadows=_,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=P,L.numSpotMaps=v,L.numLightProbes=N,n.version=Um++)}function l(c,u){let d=0,h=0,m=0,_=0,y=0,p=0;const f=u.matrixWorldInverse;for(let R=0,I=c.length;R<I;R++){const S=c[R];if(S.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),d++}else if(S.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),h++}else if(S.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const E=n.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Qo(i){const e=new Om(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Bm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Qo(i),e.set(r,[o])):s>=a.length?(o=new Qo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hm=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Vm=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],jo=new pt,Di=new z,Es=new z;function km(i,e,t){let n=new La;const r=new ye,s=new ye,a=new dt,o=new Kh,l=new Jh,c={},u=t.maxTextureSize,d={[In]:Ut,[Ut]:In,[It]:It},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:zm,fragmentShader:Gm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ye(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(b,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===il&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);const A=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(_n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=f!==this.type;G&&P.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(U=>U.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,U=b.length;w<U;w++){const X=b[w],H=X.shadow;if(H===void 0){Xe("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ae=H.getFrameExtents();r.multiply(ae),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,H.mapSize.y=s.y));const K=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ni){if(X.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Jt(r.x,r.y,{format:Yn,type:ln,minFilter:wt,magFilter:wt,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Wi(r.x,r.y,rn),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Mn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et}else X.isPointLight?(H.map=new kl(r.x),H.map.depthTexture=new hh(r.x,on)):(H.map=new Jt(r.x,r.y),H.map.depthTexture=new Wi(r.x,r.y,on)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Mn,this.type===Er?(H.map.depthTexture.compareFunction=K?Ca:wa,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const C=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,v);for(let M=0;M<C;M++){const se=H.getCamera(M);if(X.isPointLight){const te=H.camera,Ee=H.matrix,_e=X.distance||te.far;_e!==te.far&&(te.far=_e,te.updateProjectionMatrix()),Di.setFromMatrixPosition(X.matrixWorld),te.position.copy(Di),Es.copy(te.position),Es.add(Hm[M]),te.up.copy(Vm[M]),te.lookAt(Es),te.updateMatrixWorld(),Ee.makeTranslation(-Di.x,-Di.y,-Di.z),jo.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jo,te.coordinateSystem,te.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,M),i.clear();else{M===0&&(i.setRenderTarget(H.map),i.clear());const te=H.getViewport(M);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),O.viewport(a)}n=H.getFrustum(M),S(P,v,se,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ni&&R(H,v),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(A,N,L)};function R(b,P){const v=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Jt(r.x,r.y,{format:Yn,type:ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,v,m,y,null)}function I(b,P,v,A){let N=null;const L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)N=L;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=N.uuid,G=P.uuid;let w=c[O];w===void 0&&(w={},c[O]=w);let U=w[G];U===void 0&&(U=N.clone(),w[G]=U,P.addEventListener("dispose",E)),N=U}if(N.visible=P.visible,N.wireframe=P.wireframe,A===Ni?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:d[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const O=i.properties.get(N);O.light=v}return N}function S(b,P,v,A,N){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Ni)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const G=e.update(b),w=b.material;if(Array.isArray(w)){const U=G.groups;for(let X=0,H=U.length;X<H;X++){const ae=U[X],K=w[ae.materialIndex];if(K&&K.visible){const C=I(b,K,A,N);b.onBeforeShadow(i,b,P,v,G,C,ae),i.renderBufferDirect(v,null,G,C,b,ae),b.onAfterShadow(i,b,P,v,G,C,ae)}}}else if(w.visible){const U=I(b,w,A,N);b.onBeforeShadow(i,b,P,v,G,U,null),i.renderBufferDirect(v,null,G,U,b,null),b.onAfterShadow(i,b,P,v,G,U,null)}}const O=b.children;for(let G=0,w=O.length;G<w;G++)S(O[G],P,v,A,N)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const A=c[v],N=b.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function Wm(i,e){function t(){let F=!1;const me=new dt;let ne=null;const ve=new dt(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!F&&(i.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,ue,Ve,ke,ct){ct===!0&&(Ce*=ke,ue*=ke,Ve*=ke),me.set(Ce,ue,Ve,ke),ve.equals(me)===!1&&(i.clearColor(Ce,ue,Ve,ke),ve.copy(me))},reset:function(){F=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,ne=null,ve=null,Ce=null;return{setReversed:function(ue){if(me!==ue){const Ve=e.get("EXT_clip_control");ue?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),me=ue;const ke=Ce;Ce=null,this.setClear(ke)}},getReversed:function(){return me},setTest:function(ue){ue?Y(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ue){ne!==ue&&!F&&(i.depthMask(ue),ne=ue)},setFunc:function(ue){if(me&&(ue=zc[ue]),ve!==ue){switch(ue){case Ts:i.depthFunc(i.NEVER);break;case As:i.depthFunc(i.ALWAYS);break;case ws:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Cs:i.depthFunc(i.EQUAL);break;case Rs:i.depthFunc(i.GEQUAL);break;case Ps:i.depthFunc(i.GREATER);break;case Ls:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Ce!==ue&&(Ce=ue,me&&(ue=1-ue),i.clearDepth(ue))},reset:function(){F=!1,ne=null,ve=null,Ce=null,me=!1}}}function r(){let F=!1,me=null,ne=null,ve=null,Ce=null,ue=null,Ve=null,ke=null,ct=null;return{setTest:function(rt){F||(rt?Y(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!F&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,Wt,Qt){(ne!==rt||ve!==Wt||Ce!==Qt)&&(i.stencilFunc(rt,Wt,Qt),ne=rt,ve=Wt,Ce=Qt)},setOp:function(rt,Wt,Qt){(ue!==rt||Ve!==Wt||ke!==Qt)&&(i.stencilOp(rt,Wt,Qt),ue=rt,Ve=Wt,ke=Qt)},setLocked:function(rt){F=rt},setClear:function(rt){ct!==rt&&(i.clearStencil(rt),ct=rt)},reset:function(){F=!1,me=null,ne=null,ve=null,Ce=null,ue=null,Ve=null,ke=null,ct=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},m=new WeakMap,_=[],y=null,p=!1,f=null,R=null,I=null,S=null,E=null,b=null,P=null,v=new $e(0,0,0),A=0,N=!1,L=null,O=null,G=null,w=null,U=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ae=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=ae>=1):K.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=ae>=2);let C=null,M={};const se=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Ee=new dt().fromArray(se),_e=new dt().fromArray(te);function Te(F,me,ne,ve){const Ce=new Uint8Array(4),ue=i.createTexture();i.bindTexture(F,ue),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(me+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return ue}const V={};V[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Gi),ce(!1),de(Ja),Y(i.CULL_FACE),ie(_n);function Y(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function he(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function be(F,me){return h[F]!==me?(i.bindFramebuffer(F,me),h[F]=me,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function fe(F,me){let ne=_,ve=!1;if(F){ne=m.get(me),ne===void 0&&(ne=[],m.set(me,ne));const Ce=F.textures;if(ne.length!==Ce.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ve=Ce.length;ue<Ve;ue++)ne[ue]=i.COLOR_ATTACHMENT0+ue;ne.length=Ce.length,ve=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ne)}function ee(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const Ae={[ui]:i.FUNC_ADD,[ac]:i.FUNC_SUBTRACT,[oc]:i.FUNC_REVERSE_SUBTRACT};Ae[lc]=i.MIN,Ae[cc]=i.MAX;const W={[hc]:i.ZERO,[uc]:i.ONE,[dc]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[vc]:i.SRC_ALPHA_SATURATE,[gc]:i.DST_COLOR,[pc]:i.DST_ALPHA,[fc]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[_c]:i.ONE_MINUS_DST_COLOR,[mc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[Mc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[yc]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(F,me,ne,ve,Ce,ue,Ve,ke,ct,rt){if(F===_n){p===!0&&(he(i.BLEND),p=!1);return}if(p===!1&&(Y(i.BLEND),p=!0),F!==sc){if(F!==f||rt!==N){if((R!==ui||E!==ui)&&(i.blendEquation(i.FUNC_ADD),R=ui,E=ui),rt)switch(F){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}I=null,S=null,b=null,P=null,v.set(0,0,0),A=0,f=F,N=rt}return}Ce=Ce||me,ue=ue||ne,Ve=Ve||ve,(me!==R||Ce!==E)&&(i.blendEquationSeparate(Ae[me],Ae[Ce]),R=me,E=Ce),(ne!==I||ve!==S||ue!==b||Ve!==P)&&(i.blendFuncSeparate(W[ne],W[ve],W[ue],W[Ve]),I=ne,S=ve,b=ue,P=Ve),(ke.equals(v)===!1||ct!==A)&&(i.blendColor(ke.r,ke.g,ke.b,ct),v.copy(ke),A=ct),f=F,N=!1}function le(F,me){F.side===It?he(i.CULL_FACE):Y(i.CULL_FACE);let ne=F.side===Ut;me&&(ne=!ne),ce(ne),F.blending===Oi&&F.transparent===!1?ie(_n):ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;o.setTest(ve),ve&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function de(F){F!==ic?(Y(i.CULL_FACE),F!==O&&(F===Ja?i.cullFace(i.BACK):F===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),O=F}function Ue(F){F!==G&&(H&&i.lineWidth(F),G=F)}function Le(F,me,ne){F?(Y(i.POLYGON_OFFSET_FILL),(w!==me||U!==ne)&&(w=me,U=ne,a.getReversed()&&(me=-me),i.polygonOffset(me,ne))):he(i.POLYGON_OFFSET_FILL)}function Fe(F){F?Y(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Ge(F){F===void 0&&(F=i.TEXTURE0+X-1),C!==F&&(i.activeTexture(F),C=F)}function D(F,me,ne){ne===void 0&&(C===null?ne=i.TEXTURE0+X-1:ne=C);let ve=M[ne];ve===void 0&&(ve={type:void 0,texture:void 0},M[ne]=ve),(ve.type!==F||ve.texture!==me)&&(C!==ne&&(i.activeTexture(ne),C=ne),i.bindTexture(F,me||V[F]),ve.type=F,ve.texture=me)}function Ke(){const F=M[C];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function k(){try{i.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function pe(){try{i.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ge(){try{i.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function j(){try{i.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function re(){try{i.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Oe(F,me){d[F]!==me&&(i.pixelStorei(F,me),d[F]=me)}function Se(F){Ee.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ee.copy(F))}function oe(F){_e.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),_e.copy(F))}function Ie(F,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let ve=ne.get(F);ve===void 0&&(ve=i.getUniformBlockIndex(me,F.name),ne.set(F,ve))}function He(F,me){const ve=c.get(me).get(F);l.get(me)!==ve&&(i.uniformBlockBinding(me,ve,F.__bindingPointIndex),l.set(me,ve))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,M={},h={},m=new WeakMap,_=[],y=null,p=!1,f=null,R=null,I=null,S=null,E=null,b=null,P=null,v=new $e(0,0,0),A=0,N=!1,L=null,O=null,G=null,w=null,U=null,Ee.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:he,bindFramebuffer:be,drawBuffers:fe,useProgram:ee,setBlending:ie,setMaterial:le,setFlipSided:ce,setCullFace:de,setLineWidth:Ue,setPolygonOffset:Le,setScissorTest:Fe,activeTexture:Ge,bindTexture:D,unbindTexture:Ke,compressedTexImage2D:Me,compressedTexImage3D:T,texImage2D:j,texImage3D:re,pixelStorei:Oe,getParameter:xe,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:pe,texStorage3D:ge,texSubImage2D:g,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:Se,viewport:oe,reset:qe}}function Xm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return _?new OffscreenCanvas(T,g):Dr("canvas")}function p(T,g,k){let q=1;const Q=Me(T);if((Q.width>k||Q.height>k)&&(q=k/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const pe=Math.floor(q*Q.width),ge=Math.floor(q*Q.height);h===void 0&&(h=y(pe,ge));const j=g?y(pe,ge):h;return j.width=pe,j.height=ge,j.getContext("2d").drawImage(T,0,0,pe,ge),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pe+"x"+ge+")."),j}else return"data"in T&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function f(T){return T.generateMipmaps}function R(T){i.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,g,k,q,Q,pe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ge;q&&(ge=e.get("EXT_texture_norm16"),ge||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8),k===i.UNSIGNED_SHORT&&ge&&(j=ge.R16_EXT),k===i.SHORT&&ge&&(j=ge.R16_SNORM_EXT)),g===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),g===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8),k===i.UNSIGNED_SHORT&&ge&&(j=ge.RG16_EXT),k===i.SHORT&&ge&&(j=ge.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),g===i.RGB&&(k===i.UNSIGNED_SHORT&&ge&&(j=ge.RGB16_EXT),k===i.SHORT&&ge&&(j=ge.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),g===i.RGBA){const re=pe?Ir:tt.getTransfer(Q);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=re===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ge&&(j=ge.RGBA16_EXT),k===i.SHORT&&ge&&(j=ge.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(T,g){let k;return T?g===null||g===on||g===Vi?k=i.DEPTH24_STENCIL8:g===rn?k=i.DEPTH32F_STENCIL8:g===Hi&&(k=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===on||g===Vi?k=i.DEPTH_COMPONENT24:g===rn?k=i.DEPTH_COMPONENT32F:g===Hi&&(k=i.DEPTH_COMPONENT16),k}function b(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==wt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function P(T){const g=T.target;g.removeEventListener("dispose",P),A(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function v(T){const g=T.target;g.removeEventListener("dispose",v),L(g)}function A(T){const g=n.get(T);if(g.__webglInit===void 0)return;const k=T.source,q=m.get(k);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(T),Object.keys(q).length===0&&m.delete(k)}n.remove(T)}function N(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const k=T.source,q=m.get(k);delete q[g.__cacheKey],a.memory.textures--}function L(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const k=T.textures;for(let q=0,Q=k.length;q<Q;q++){const pe=n.get(k[q]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(T)}let O=0;function G(){O=0}function w(){return O}function U(T){O=T}function X(){const T=O;return T>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,T}function H(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ae(T,g){const k=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const q=T.image;if(q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,T,g);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+g)}function K(T,g){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){he(k,T,g);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+g)}function C(T,g){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){he(k,T,g);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+g)}function M(T,g){const k=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){be(k,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+g)}const se={[Is]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},te={[Et]:i.NEAREST,[Tc]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Ee={[Rc]:i.NEVER,[Nc]:i.ALWAYS,[Pc]:i.LESS,[wa]:i.LEQUAL,[Lc]:i.EQUAL,[Ca]:i.GEQUAL,[Ic]:i.GREATER,[Dc]:i.NOTEQUAL};function _e(T,g){if(g.type===rn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wt||g.magFilter===Wr||g.magFilter===ji||g.magFilter===kn||g.minFilter===wt||g.minFilter===Wr||g.minFilter===ji||g.minFilter===kn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,se[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,te[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,te[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Et||g.minFilter!==ji&&g.minFilter!==kn||g.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(T,g){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",P));const q=g.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const pe=H(g);if(pe!==T.__cacheKey){Q[pe]===void 0&&(Q[pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[pe].usedTimes++;const ge=Q[T.__cacheKey];ge!==void 0&&(Q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&N(g)),T.__cacheKey=pe,T.__webglTexture=Q[pe].texture}return k}function V(T,g,k){return Math.floor(Math.floor(T/k)/g)}function Y(T,g,k,q){const pe=T.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,k,q,g.data);else{pe.sort((Oe,Se)=>Oe.start-Se.start);let ge=0;for(let Oe=1;Oe<pe.length;Oe++){const Se=pe[ge],oe=pe[Oe],Ie=Se.start+Se.count,He=V(oe.start,g.width,4),qe=V(Se.start,g.width,4);oe.start<=Ie+1&&He===qe&&V(oe.start+oe.count-1,g.width,4)===He?Se.count=Math.max(Se.count,oe.start+oe.count-Se.start):(++ge,pe[ge]=oe)}pe.length=ge+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Oe=0,Se=pe.length;Oe<Se;Oe++){const oe=pe[Oe],Ie=Math.floor(oe.start/4),He=Math.ceil(oe.count/4),qe=Ie%g.width,F=Math.floor(Ie/g.width),me=He,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,qe,F,me,ne,k,q,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function he(T,g,k){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const Q=Te(T,g),pe=g.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+k);const ge=n.get(pe);if(pe.version!==ge.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=tt.getPrimaries(tt.workingColorSpace),ve=g.colorSpace===Pn?null:tt.getPrimaries(g.colorSpace),Ce=g.colorSpace===Pn||ne===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let re=p(g.image,!1,r.maxTextureSize);re=Ke(g,re);const xe=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Se=S(g.internalFormat,xe,Oe,g.normalized,g.colorSpace,g.isVideoTexture);_e(q,g);let oe;const Ie=g.mipmaps,He=g.isVideoTexture!==!0,qe=ge.__version===void 0||Q===!0,F=pe.dataReady,me=b(g,re);if(g.isDepthTexture)Se=E(g.format===Wn,g.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,Se,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Se,re.width,re.height,0,xe,Oe,null));else if(g.isDataTexture)if(Ie.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,me,Se,Ie[0].width,Ie[0].height);for(let ne=0,ve=Ie.length;ne<ve;ne++)oe=Ie[ne],He?F&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,xe,Oe,oe.data):t.texImage2D(i.TEXTURE_2D,ne,Se,oe.width,oe.height,0,xe,Oe,oe.data);g.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,me,Se,re.width,re.height),F&&Y(g,re,xe,Oe)):t.texImage2D(i.TEXTURE_2D,0,Se,re.width,re.height,0,xe,Oe,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,Ie[0].width,Ie[0].height,re.depth);for(let ne=0,ve=Ie.length;ne<ve;ne++)if(oe=Ie[ne],g.format!==Kt)if(xe!==null)if(He){if(F)if(g.layerUpdates.size>0){const Ce=Io(oe.width,oe.height,g.format,g.type);for(const ue of g.layerUpdates){const Ve=oe.data.subarray(ue*Ce/oe.data.BYTES_PER_ELEMENT,(ue+1)*Ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ue,oe.width,oe.height,1,xe,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,re.depth,xe,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Se,oe.width,oe.height,re.depth,0,oe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,re.depth,xe,Oe,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Se,oe.width,oe.height,re.depth,0,xe,Oe,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,me,Se,Ie[0].width,Ie[0].height);for(let ne=0,ve=Ie.length;ne<ve;ne++)oe=Ie[ne],g.format!==Kt?xe!==null?He?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,xe,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Se,oe.width,oe.height,0,oe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,xe,Oe,oe.data):t.texImage2D(i.TEXTURE_2D,ne,Se,oe.width,oe.height,0,xe,Oe,oe.data)}else if(g.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Se,re.width,re.height,re.depth),F)if(g.layerUpdates.size>0){const ne=Io(re.width,re.height,g.format,g.type);for(const ve of g.layerUpdates){const Ce=re.data.subarray(ve*ne/re.data.BYTES_PER_ELEMENT,(ve+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,re.width,re.height,1,xe,Oe,Ce)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Oe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,re.width,re.height,re.depth,0,xe,Oe,re.data);else if(g.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,me,Se,re.width,re.height,re.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Oe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Se,re.width,re.height,re.depth,0,xe,Oe,re.data);else if(g.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,me,Se,re.width,re.height);else{let ne=re.width,ve=re.height;for(let Ce=0;Ce<me;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Se,ne,ve,0,xe,Oe,null),ne>>=1,ve>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),re.parentNode!==ne){ne.appendChild(re),d.add(g),ne.onpaint=ve=>{const Ce=ve.changedElements;for(const ue of d)Ce.includes(ue.image)&&(ue.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const Ce=i.RGBA,ue=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,ue,Ve,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(He&&qe){const ne=Me(Ie[0]);t.texStorage2D(i.TEXTURE_2D,me,Se,ne.width,ne.height)}for(let ne=0,ve=Ie.length;ne<ve;ne++)oe=Ie[ne],He?F&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,xe,Oe,oe):t.texImage2D(i.TEXTURE_2D,ne,Se,xe,Oe,oe);g.generateMipmaps=!1}else if(He){if(qe){const ne=Me(re);t.texStorage2D(i.TEXTURE_2D,me,Se,ne.width,ne.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Oe,re)}else t.texImage2D(i.TEXTURE_2D,0,Se,xe,Oe,re);f(g)&&R(q),ge.__version=pe.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function be(T,g,k){if(g.image.length!==6)return;const q=Te(T,g),Q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const pe=n.get(Q);if(Q.version!==pe.__version||q===!0){t.activeTexture(i.TEXTURE0+k);const ge=tt.getPrimaries(tt.workingColorSpace),j=g.colorSpace===Pn?null:tt.getPrimaries(g.colorSpace),re=g.colorSpace===Pn||ge===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Oe=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!xe&&!Oe?Se[ue]=p(g.image[ue],!0,r.maxCubemapSize):Se[ue]=Oe?g.image[ue].image:g.image[ue],Se[ue]=Ke(g,Se[ue]);const oe=Se[0],Ie=s.convert(g.format,g.colorSpace),He=s.convert(g.type),qe=S(g.internalFormat,Ie,He,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,me=pe.__version===void 0||q===!0,ne=Q.dataReady;let ve=b(g,oe);_e(i.TEXTURE_CUBE_MAP,g);let Ce;if(xe){F&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,oe.width,oe.height);for(let ue=0;ue<6;ue++){Ce=Se[ue].mipmaps;for(let Ve=0;Ve<Ce.length;Ve++){const ke=Ce[Ve];g.format!==Kt?Ie!==null?F?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,qe,ke.width,ke.height,0,ke.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,0,0,ke.width,ke.height,Ie,He,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve,qe,ke.width,ke.height,0,Ie,He,ke.data)}}}else{if(Ce=g.mipmaps,F&&me){Ce.length>0&&ve++;const ue=Me(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Oe){F?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ie,He,Se[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Se[ue].width,Se[ue].height,0,Ie,He,Se[ue].data);for(let Ve=0;Ve<Ce.length;Ve++){const ct=Ce[Ve].image[ue].image;F?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,0,0,ct.width,ct.height,Ie,He,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,qe,ct.width,ct.height,0,Ie,He,ct.data)}}else{F?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ie,He,Se[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Ie,He,Se[ue]);for(let Ve=0;Ve<Ce.length;Ve++){const ke=Ce[Ve];F?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,0,0,Ie,He,ke.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve+1,qe,Ie,He,ke.image[ue])}}}f(g)&&R(i.TEXTURE_CUBE_MAP),pe.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function fe(T,g,k,q,Q,pe){const ge=s.convert(k.format,k.colorSpace),j=s.convert(k.type),re=S(k.internalFormat,ge,j,k.normalized,k.colorSpace),xe=n.get(g),Oe=n.get(k);if(Oe.__renderTarget=g,!xe.__hasExternalTextures){const Se=Math.max(1,g.width>>pe),oe=Math.max(1,g.height>>pe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,pe,re,Se,oe,g.depth,0,ge,j,null):t.texImage2D(Q,pe,re,Se,oe,0,ge,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Oe.__webglTexture,0,Fe(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Oe.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(T,g,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,pe=E(g.stencilBuffer,Q),ge=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(g),pe,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(g),pe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,pe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,T)}else{const q=g.textures;for(let Q=0;Q<q.length;Q++){const pe=q[Q],ge=s.convert(pe.format,pe.colorSpace),j=s.convert(pe.type),re=S(pe.internalFormat,ge,j,pe.normalized,pe.colorSpace);Ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(g),re,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(g),re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,re,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,g,k){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),_e(i.TEXTURE_CUBE_MAP,g.depthTexture);const xe=s.convert(g.depthTexture.format),Oe=s.convert(g.depthTexture.type);let Se;g.depthTexture.format===Mn?Se=i.DEPTH_COMPONENT24:g.depthTexture.format===Wn&&(Se=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Se,g.width,g.height,0,xe,Oe,null)}}else ae(g.depthTexture,0);const pe=Q.__webglTexture,ge=Fe(g),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,re=g.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Mn)Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,j,pe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,re,j,pe,0);else if(g.depthTexture.format===Wn)Ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,j,pe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,re,j,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(T){const g=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)Ae(g.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Ae(g.__webglFramebuffer[0],T,0):Ae(g.__webglFramebuffer,T,0)}else if(k){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),ee(g.__webglDepthbuffer[q],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ee(g.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,g,k){const q=n.get(T);g!==void 0&&fe(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&W(T)}function le(T){const g=T.texture,k=n.get(T),q=n.get(g);T.addEventListener("dispose",v);const Q=T.textures,pe=T.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),pe){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let re=0;re<g.mipmaps.length;re++)k.__webglFramebuffer[j][re]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ge)for(let j=0,re=Q.length;j<re;j++){const xe=n.get(Q[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ge(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const re=Q[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const xe=s.convert(re.format,re.colorSpace),Oe=s.convert(re.type),Se=S(re.internalFormat,xe,Oe,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),oe=Fe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Se,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),_e(i.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)fe(k.__webglFramebuffer[j][re],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re);else fe(k.__webglFramebuffer[j],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(g)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let j=0,re=Q.length;j<re;j++){const xe=Q[j],Oe=n.get(xe);let Se=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Oe.__webglTexture),_e(Se,xe),fe(k.__webglFramebuffer,T,xe,i.COLOR_ATTACHMENT0+j,Se,0),f(xe)&&R(Se)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),_e(j,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)fe(k.__webglFramebuffer[re],T,g,i.COLOR_ATTACHMENT0,j,re);else fe(k.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,j,0);f(g)&&R(j),t.unbindTexture()}T.depthBuffer&&W(T)}function ce(T){const g=T.textures;for(let k=0,q=g.length;k<q;k++){const Q=g[k];if(f(Q)){const pe=I(T),ge=n.get(Q).__webglTexture;t.bindTexture(pe,ge),R(pe),t.unbindTexture()}}}const de=[],Ue=[];function Le(T){if(T.samples>0){if(Ge(T)===!1){const g=T.textures,k=T.width,q=T.height;let Q=i.COLOR_BUFFER_BIT;const pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(T),j=g.length>1;if(j)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const re=T.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Oe=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,Q,i.NEAREST),l===!0&&(de.length=0,Ue.length=0,de.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(de.push(pe),Ue.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Oe=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Fe(T){return Math.min(r.maxSamples,T.samples)}function Ge(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Ke(T,g){const k=T.colorSpace,q=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Lr&&k!==Pn&&(tt.getTransfer(k)===at?(q!==Kt||Q!==zt)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",k)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=w,this.setTextureUnits=U,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=C,this.setTextureCube=M,this.rebindTextures=ie,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qm(i,e){function t(n,r=Pn){let s;const a=tt.getTransfer(r);if(n===zt)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===xl)return i.RGB;if(n===Kt)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===Yn)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===wr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ns||n===Us||n===Fs||n===Os)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Us)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bs||n===zs||n===Gs||n===Hs||n===Vs||n===Rr||n===ks)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bs||n===zs)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hs)return s.COMPRESSED_R11_EAC;if(n===Vs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return s.COMPRESSED_RG11_EAC;if(n===ks)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ws||n===Xs||n===qs||n===Ys||n===Zs||n===$s||n===Ks||n===Js||n===Qs||n===js||n===ea||n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ws)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ys)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$s)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ks)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Js)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===js)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===sa||n===aa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ra)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oa||n===la||n===Pr||n===ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===la)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
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

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Ym,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends $n{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",p=new $m,f={},R=t.getContextAttributes();let I=null,S=null;const E=[],b=[],P=new ye;let v=null,A=null;const N=new kt;N.viewport=new dt;const L=new kt;L.viewport=new dt;const O=[N,L],G=new nu;let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=E[V];return Y===void 0&&(Y=new jr,E[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=E[V];return Y===void 0&&(Y=new jr,E[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=E[V];return Y===void 0&&(Y=new jr,E[V]=Y),Y.getHandSpace()};function X(V){const Y=b.indexOf(V.inputSource);if(Y===-1)return;const he=E[Y];he!==void 0&&(he.update(V.inputSource,V.frame,c||a),he.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",ae);for(let V=0;V<E.length;V++){const Y=b[V];Y!==null&&(b[V]=null,E[V].disconnect(Y))}w=null,U=null,p.reset();for(const V in f)delete f[V];if(e.setRenderTarget(I),m=null,h=null,d=null,r=null,S=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),A!==null){const V=A.camera;V.fov=A.fov,V.zoom=A.zoom,V.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",H),r.addEventListener("inputsourceschange",ae),R.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,fe=null;R.depth&&(fe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=R.stencil?Wn:Mn,be=R.stencil?Vi:on);const ee={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Jt(h.textureWidth,h.textureHeight,{format:Kt,type:zt,depthTexture:new Wi(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Jt(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ae(V){for(let Y=0;Y<V.removed.length;Y++){const he=V.removed[Y],be=b.indexOf(he);be>=0&&(b[be]=null,E[be].disconnect(he))}for(let Y=0;Y<V.added.length;Y++){const he=V.added[Y];let be=b.indexOf(he);if(be===-1){for(let ee=0;ee<E.length;ee++)if(ee>=b.length){b.push(he),be=ee;break}else if(b[ee]===null){b[ee]=he,be=ee;break}if(be===-1)break}const fe=E[be];fe&&fe.connect(he)}}const K=new z,C=new z;function M(V,Y,he){K.setFromMatrixPosition(Y.matrixWorld),C.setFromMatrixPosition(he.matrixWorld);const be=K.distanceTo(C),fe=Y.projectionMatrix.elements,ee=he.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),W=fe[14]/(fe[10]+1),ie=(fe[9]+1)/fe[5],le=(fe[9]-1)/fe[5],ce=(fe[8]-1)/fe[0],de=(ee[8]+1)/ee[0],Ue=Ae*ce,Le=Ae*de,Fe=be/(-ce+de),Ge=Fe*-ce;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ge),V.translateZ(Fe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),fe[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const D=Ae+Fe,Ke=W+Fe,Me=Ue-Ge,T=Le+(be-Ge),g=ie*W/Ke*D,k=le*W/Ke*D;V.projectionMatrix.makePerspective(Me,T,g,k,D,Ke),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function se(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Y=V.near,he=V.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(he=p.depthFar)),G.near=L.near=N.near=Y,G.far=L.far=N.far=he,(w!==G.near||U!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),w=G.near,U=G.far),G.layers.mask=V.layers.mask|6,N.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;const be=V.parent,fe=G.cameras;se(G,be);for(let ee=0;ee<fe.length;ee++)se(fe[ee],be);fe.length===2?M(G,N,L):G.projectionMatrix.copy(N.projectionMatrix),A===null&&V.isPerspectiveCamera&&(A={camera:V,fov:V.fov,zoom:V.zoom}),te(V,G,be)};function te(V,Y,he){he===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ua*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(V){return f[V]};let Ee=null;function _e(V,Y){if(u=Y.getViewerPose(c||a),_=Y,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let be=!1;he.length!==G.cameras.length&&(G.cameras.length=0,be=!0);for(let W=0;W<he.length;W++){const ie=he[W];let le=null;if(m!==null)le=m.getViewport(ie);else{const de=d.getViewSubImage(h,ie);le=de.viewport,W===0&&(e.setRenderTargetTextures(S,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(S))}let ce=O[W];ce===void 0&&(ce=new kt,ce.layers.enable(W),ce.viewport=new dt,O[W]=ce),ce.matrix.fromArray(ie.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ie.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),W===0&&(G.matrix.copy(ce.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),be===!0&&G.cameras.push(ce)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const W=d.getDepthInformation(he[0]);W&&W.isValid&&W.texture&&p.init(W,r.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let W=0;W<he.length;W++){const ie=he[W].camera;if(ie){let le=f[ie];le||(le=new Rl,f[ie]=le);const ce=d.getCameraImage(ie);le.sourceTexture=ce}}}}for(let he=0;he<E.length;he++){const be=b[he],fe=E[he];be!==null&&fe!==void 0&&fe.update(be,Y,c||a)}Ee&&Ee(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Te=new Hl;Te.setAnimationLoop(_e),this.setAnimationLoop=function(V){Ee=V},this.dispose=function(){}}}const Jm=new pt,Zl=new Ze;Zl.set(-1,0,0,0,1,0,0,0,1);function Qm(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Bl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,R,I,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,R,I):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ut&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ut&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const R=e.get(f),I=R.envMap,S=R.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zl),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,I){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=I*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,R){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const R=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const b=E.program;n.uniformBlockBinding(S,b)}function c(S,E){let b=r[S.id];b===void 0&&(p(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",R));const P=E.program;n.updateUBOMapping(S,P);const v=e.render.frame;s[S.id]!==v&&(h(S),s[S.id]=v)}function u(S){const E=d();S.__bindingPointIndex=E;const b=i.createBuffer(),P=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=r[S.id],b=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,A=b.length;v<A;v++){const N=b[v];if(Array.isArray(N))for(let L=0,O=N.length;L<O;L++)m(N[L],v,L,P);else m(N,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,E,b,P){if(y(S,E,b,P)===!0){const v=S.__offset,A=S.value;if(Array.isArray(A)){let N=0;for(let L=0;L<A.length;L++){const O=A[L],G=f(O);_(O,S.__data,N),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function _(S,E,b){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,b)}function y(S,E,b,P){const v=S.value,A=E+"_"+b;if(P[A]===void 0)return typeof v=="number"||typeof v=="boolean"?P[A]=v:ArrayBuffer.isView(v)?P[A]=v.slice():P[A]=v.clone(),!0;{const N=P[A];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return P[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function p(S){const E=S.uniforms;let b=0;const P=16;for(let A=0,N=E.length;A<N;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let O=0,G=L.length;O<G;O++){const w=L[O],U=Array.isArray(w.value)?w.value:[w.value];for(let X=0,H=U.length;X<H;X++){const ae=U[X],K=f(ae),C=b%P,M=C%K.boundary,se=C+M;b+=M,se!==0&&P-se<K.storage&&(b+=P-se),w.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=K.storage}}}const v=b%P;return v>0&&(b+=P-v),S.__size=b,S.__cache={},this}function f(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",S),E}function R(S){const E=S.target;E.removeEventListener("dispose",R);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function I(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:I}}const e0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function t0(){return tn===null&&(tn=new lh(e0,16,16,Yn,ln),tn.name="DFG_LUT",tn.minFilter=wt,tn.magFilter=wt,tn.wrapS=gn,tn.wrapT=gn,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class n0{constructor(e={}){const{canvas:t=Oc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=zt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const y=m,p=new Set([Aa,Ta,ba]),f=new Set([zt,on,Hi,Vi,ya,Ea]),R=new Uint32Array(4),I=new Int32Array(4),S=new z;let E=null,b=null;const P=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,O=null,G=null,w=null,U=null;this._outputColorSpace=Vt;let X=0,H=0,ae=null,K=-1,C=null;const M=new dt,se=new dt;let te=null;const Ee=new $e(0);let _e=0,Te=t.width,V=t.height,Y=1,he=null,be=null;const fe=new dt(0,0,Te,V),ee=new dt(0,0,Te,V);let Ae=!1;const W=new La;let ie=!1,le=!1;const ce=new pt,de=new z,Ue=new dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ge(){return ae===null?Y:1}let D=n;function Ke(x,B){return t.getContext(x,B)}let Me,T,g,k,q,Q,pe,ge,j,re,xe,Oe,Se,oe,Ie,He,qe,F,me,ne,ve,Ce,ue;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),D===null){const B="webgl2";if(D=Ke(B,x),D===null)throw Ke(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(x){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),it("WebGLRenderer: "+x.message),x}function Ve(){Me=new tp(D),Me.init(),ve=new qm(D,Me),T=new Xf(D,Me,e,ve),g=new Wm(D,Me),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=D.createFramebuffer(),w=D.createFramebuffer(),U=D.createFramebuffer(),k=new rp(D),q=new Pm,Q=new Xm(D,Me,g,q,T,ve,k),pe=new ep(N),ge=new su(D),Ce=new kf(D,ge),j=new np(D,ge,k,Ce),re=new ap(D,j,ge,Ce,k),F=new sp(D,T,Q),Ie=new qf(q),xe=new Rm(N,pe,Me,T,Ce,Ie),Oe=new Qm(N,q),Se=new Im,oe=new Bm(Me),qe=new Vf(N,pe,g,re,_,l),He=new km(N,re,T),ue=new jm(D,k,T,g),me=new Wf(D,Me,k),ne=new ip(D,Me,k),k.programs=xe.programs,N.capabilities=T,N.extensions=Me,N.properties=q,N.renderLists=Se,N.shadowMap=He,N.state=g,N.info=k}y!==zt&&(A=new lp(y,t.width,t.height,o,r,s));const ke=new Km(N,D);this.xr=ke,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Me.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Me.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(Te,V,!1))},this.getSize=function(x){return x.set(Te,V)},this.setSize=function(x,B,J=!0){if(ke.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=x,V=B,t.width=Math.floor(x*Y),t.height=Math.floor(B*Y),J===!0&&(t.style.width=x+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(Te*Y,V*Y).floor()},this.setDrawingBufferSize=function(x,B,J){Te=x,V=B,Y=J,t.width=Math.floor(x*J),t.height=Math.floor(B*J),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(y===zt){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(M)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,B,J,Z){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,B,J,Z),g.viewport(M.copy(fe).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,B,J,Z){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,B,J,Z),g.scissor(se.copy(ee).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(x){g.setScissorTest(Ae=x)},this.setOpaqueSort=function(x){he=x},this.setTransparentSort=function(x){be=x},this.getClearColor=function(x){return x.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,J=!0){let Z=0;if(x){let $=!1;if(ae!==null){const Pe=ae.texture.format;$=p.has(Pe)}if($){const Pe=ae.texture.type,Ne=f.has(Pe),Re=qe.getClearColor(),Be=qe.getClearAlpha(),We=Re.r,Je=Re.g,et=Re.b;Ne?(R[0]=We,R[1]=Je,R[2]=et,R[3]=Be,D.clearBufferuiv(D.COLOR,0,R)):(I[0]=We,I[1]=Je,I[2]=et,I[3]=Be,D.clearBufferiv(D.COLOR,0,I))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),qe.dispose(),Se.dispose(),oe.dispose(),q.dispose(),pe.dispose(),re.dispose(),Ce.dispose(),ue.dispose(),xe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Va),ke.removeEventListener("sessionend",ka),Nn.stop()};function ct(x){x.preventDefault(),io("WebGLRenderer: Context Lost."),L=!0}function rt(){io("WebGLRenderer: Context Restored."),L=!1;const x=k.autoReset,B=He.enabled,J=He.autoUpdate,Z=He.needsUpdate,$=He.type;Ve(),k.autoReset=x,He.enabled=B,He.autoUpdate=J,He.needsUpdate=Z,He.type=$}function Wt(x){it("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Qt(x){const B=x.target;B.removeEventListener("dispose",Qt),$l(B)}function $l(x){Kl(x),q.remove(x)}function Kl(x){const B=q.get(x).programs;B!==void 0&&(B.forEach(function(J){xe.releaseProgram(J)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,J,Z,$,Pe){B===null&&(B=Le);const Ne=$.isMesh&&$.matrixWorld.determinantAffine()<0,Re=jl(x,B,J,Z,$);g.setMaterial(Z,Ne);let Be=J.index,We=1;if(Z.wireframe===!0){if(Be=j.getWireframeAttribute(J),Be===void 0)return;We=2}const Je=J.drawRange,et=J.attributes.position;let ze=Je.start*We,st=(Je.start+Je.count)*We;Pe!==null&&(ze=Math.max(ze,Pe.start*We),st=Math.min(st,(Pe.start+Pe.count)*We)),Be!==null?(ze=Math.max(ze,0),st=Math.min(st,Be.count)):et!=null&&(ze=Math.max(ze,0),st=Math.min(st,et.count));const vt=st-ze;if(vt<0||vt===1/0)return;Ce.setup($,Z,Re,J,Be);let ut,lt=me;if(Be!==null&&(ut=ge.get(Be),lt=ne,lt.setIndex(ut)),$.isMesh)Z.wireframe===!0?(g.setLineWidth(Z.wireframeLinewidth*Ge()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if($.isLine){let bt=Z.linewidth;bt===void 0&&(bt=1),g.setLineWidth(bt*Ge()),$.isLineSegments?lt.setMode(D.LINES):$.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else $.isPoints?lt.setMode(D.POINTS):$.isSprite&&lt.setMode(D.TRIANGLES);if($.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const bt=$._multiDrawStarts,De=$._multiDrawCounts,Pt=$._multiDrawCount,nt=Be?ge.get(Be).bytesPerElement:1,Gt=q.get(Z).currentProgram.getUniforms();for(let jt=0;jt<Pt;jt++)Gt.setValue(D,"_gl_DrawID",jt),lt.render(bt[jt]/nt,De[jt])}else if($.isInstancedMesh)lt.renderInstances(ze,vt,$.count);else if(J.isInstancedBufferGeometry){const bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,De=Math.min(J.instanceCount,bt);lt.renderInstances(ze,vt,De)}else lt.render(ze,vt)};function Ha(x,B,J,Z){O!==null&&x.isNodeMaterial&&O.setObject(Z,x),ie===!0&&Ie.setState(x,J,!1),x.transparent===!0&&x.side===It&&x.forceSinglePass===!1?(x.side=Ut,x.needsUpdate=!0,Qi(x,B,Z),x.side=In,x.needsUpdate=!0,Qi(x,B,Z),x.side=It):Qi(x,B,Z)}this.compile=function(x,B,J=null){J===null&&(J=x),O!==null&&O.renderStart(x,B,J),b=oe.get(J),b.init(B),v.push(b),J.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),x!==J&&x.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),le=this.localClippingEnabled,ie=Ie.init(this.clippingPlanes,le),ie===!0&&Ie.setGlobalState(this.clippingPlanes,B),O!==null&&He.render(b.state.shadowsArray,J,B);const Z=new Set;return x.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let Ne=0;Ne<Pe.length;Ne++){const Re=Pe[Ne];Ha(Re,J,B,$),Z.add(Re)}else Ha(Pe,J,B,$),Z.add(Pe)}),b=v.pop(),O!==null&&O.renderEnd(),Z},this.compileAsync=function(x,B,J=null){const Z=this.compile(x,B,J);return new Promise($=>{function Pe(){if(Z.forEach(function(Ne){const Be=q.get(Ne).currentProgram;(Be===void 0||Be.isReady())&&Z.delete(Ne)}),Z.size===0){$(x);return}setTimeout(Pe,10)}Me.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Gr=null;function Jl(x){Gr&&Gr(x)}function Va(){Nn.stop()}function ka(){Nn.start()}const Nn=new Hl;Nn.setAnimationLoop(Jl),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(x){Gr=x,ke.setAnimationLoop(x),x===null?Nn.stop():Nn.start()},ke.addEventListener("sessionstart",Va),ke.addEventListener("sessionend",ka),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(x,B);const J=ke.enabled===!0&&ke.isPresenting===!0,Z=A!==null&&(ae===null||J)&&A.begin(N,ae);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(B),B=ke.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,B,ae),b=oe.get(x,v.length),b.init(B),b.state.textureUnits=Q.getTextureUnits(),v.push(b),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(ce,sn,B.reversedDepth),le=this.localClippingEnabled,ie=Ie.init(this.clippingPlanes,le),E=Se.get(x,P.length),E.init(),P.push(E),ke.enabled===!0&&ke.isPresenting===!0){const Ne=N.xr.getDepthSensingMesh();Ne!==null&&Hr(Ne,B,-1/0,N.sortObjects)}Hr(x,B,0,N.sortObjects),E.finish(),O!==null&&O.updateLights(b.state.lightsArray),N.sortObjects===!0&&E.sort(he,be),Fe=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Fe&&qe.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Ie.beginShadows();const $=b.state.shadowsArray;if(He.render($,x,B),ie===!0&&Ie.endShadows(),(Z&&A.hasRenderPass())===!1){const Ne=E.opaque,Re=E.transmissive;if(b.setupLights(),B.isArrayCamera){const Be=B.cameras;if(Re.length>0)for(let We=0,Je=Be.length;We<Je;We++){const et=Be[We];Xa(Ne,Re,x,et)}Fe&&qe.render(x);for(let We=0,Je=Be.length;We<Je;We++){const et=Be[We];Wa(E,x,et,et.viewport)}}else Re.length>0&&Xa(Ne,Re,x,B),Fe&&qe.render(x),Wa(E,x,B)}ae!==null&&H===0&&(Q.updateMultisampleRenderTarget(ae),Q.updateRenderTargetMipmap(ae)),Z&&A.end(N),x.isScene===!0&&x.onAfterRender(N,x,B),Ce.resetDefaultState(),K=-1,C=null,v.pop(),v.length>0?(b=v[v.length-1],Q.setTextureUnits(b.state.textureUnits),ie===!0&&Ie.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,O!==null&&O.renderEnd()};function Hr(x,B,J,Z){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)J=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(W)){Z&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ce);const Ne=re.update(x),Re=x.material;Re.visible&&E.push(x,Ne,Re,J,Ue.z,null,B)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(W))){const Ne=re.update(x),Re=x.material;if(Z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ue.copy(Ne.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(ce)),Array.isArray(Re)){const Be=Ne.groups;for(let We=0,Je=Be.length;We<Je;We++){const et=Be[We],ze=Re[et.materialIndex];ze&&ze.visible&&E.push(x,Ne,ze,J,Ue.z,et,B)}}else Re.visible&&E.push(x,Ne,Re,J,Ue.z,null,B)}}const Pe=x.children;for(let Ne=0,Re=Pe.length;Ne<Re;Ne++)Hr(Pe[Ne],B,J,Z)}function Wa(x,B,J,Z){const{opaque:$,transmissive:Pe,transparent:Ne}=x;b.setupLightsView(J),ie===!0&&Ie.setGlobalState(N.clippingPlanes,J),Z&&g.viewport(M.copy(Z)),$.length>0&&Ji($,B,J),Pe.length>0&&Ji(Pe,B,J),Ne.length>0&&Ji(Ne,B,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xa(x,B,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){const ze=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new Jt(1,1,{generateMipmaps:!0,type:ze?ln:zt,minFilter:kn,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Pe=b.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||M;Pe.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const Re=N.getRenderTarget(),Be=N.getActiveCubeFace(),We=N.getActiveMipmapLevel();N.setRenderTarget(Pe),N.getClearColor(Ee),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),Fe&&qe.render(J);const Je=N.toneMapping;N.toneMapping=an;const et=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),ie===!0&&Ie.setGlobalState(N.clippingPlanes,Z),Ji(x,J,Z),Q.updateMultisampleRenderTarget(Pe),Q.updateRenderTargetMipmap(Pe),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let st=0,vt=B.length;st<vt;st++){const ut=B[st],{object:lt,geometry:bt,material:De,group:Pt}=ut;if(De.side===It&&lt.layers.test(Z.layers)){const nt=De.side;De.side=Ut,De.needsUpdate=!0,qa(lt,J,Z,bt,De,Pt),De.side=nt,De.needsUpdate=!0,ze=!0}}ze===!0&&(Q.updateMultisampleRenderTarget(Pe),Q.updateRenderTargetMipmap(Pe))}N.setRenderTarget(Re,Be,We),N.setClearColor(Ee,_e),et!==void 0&&(Z.viewport=et),N.toneMapping=Je}function Ji(x,B,J){const Z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Pe=x.length;$<Pe;$++){const Ne=x[$],{object:Re,geometry:Be,group:We}=Ne;let Je=Ne.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Re.layers.test(J.layers)&&qa(Re,B,J,Be,Je,We)}}function qa(x,B,J,Z,$,Pe){O!==null&&$.isNodeMaterial&&O.setObject(x,$),x.onBeforeRender(N,B,J,Z,$,Pe),x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),$.onBeforeRender(N,B,J,Z,x,Pe),$.transparent===!0&&$.side===It&&$.forceSinglePass===!1?($.side=Ut,$.needsUpdate=!0,N.renderBufferDirect(J,B,Z,$,x,Pe),$.side=In,$.needsUpdate=!0,N.renderBufferDirect(J,B,Z,$,x,Pe),$.side=It):N.renderBufferDirect(J,B,Z,$,x,Pe),x.onAfterRender(N,B,J,Z,$,Pe)}function Qi(x,B,J){B.isScene!==!0&&(B=Le);const Z=q.get(x),$=b.state.lights,Pe=b.state.shadowsArray,Ne=$.state.version,Re=xe.getParameters(x,$.state,Pe,B,J,b.state.lightProbeGridArray),Be=xe.getProgramCacheKey(Re);let We=Z.programs;Z.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;const Je=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;Z.envMap=pe.get(x.envMap||Z.environment,Je),Z.envMapRotation=Z.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,We===void 0&&(x.addEventListener("dispose",Qt),We=new Map,Z.programs=We);let et=We.get(Be);if(et!==void 0){if(Z.currentProgram===et&&Z.lightsStateVersion===Ne)return Za(x,Re),et}else Re.uniforms=xe.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,J,Re),x.onBeforeCompile(Re,N),et=xe.acquireProgram(Re,Be),We.set(Be,et),Z.uniforms=Re.uniforms;const ze=Z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ze.clippingPlanes=Ie.uniform),Za(x,Re),Z.needsLights=tc(x),Z.lightsStateVersion=Ne,Z.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.sunLights.value=$.state.sun,ze.sunLightShadows.value=$.state.sunShadow,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.sunShadowMatrix.value=$.state.sunShadowMatrix,ze.sunShadowCascade.value=$.state.sunShadowCascade,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=et,Z.uniformsList=null,et}function Ya(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=Cr.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function Za(x,B){const J=q.get(x);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Ql(x,B){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let J=0,Z=x.length;J<Z;J++){const $=x[J];if($.texture!==null&&$.boundingBox.containsPoint(S))return $}return null}function jl(x,B,J,Z,$){B.isScene!==!0&&(B=Le),Q.resetTextureUnits();const Pe=B.fog,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,Re=ae===null?N.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tt.workingColorSpace,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,We=pe.get(Z.envMap||Ne,Be),Je=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,vt=!!J.morphAttributes.color;let ut=an;Z.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ut=N.toneMapping);const lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=lt!==void 0?lt.length:0,De=q.get(Z),Pt=b.state.lights;if(ie===!0&&(le===!0||x!==C)){const ht=x===C&&Z.id===K;Ie.setState(Z,x,ht)}let nt=!1;Z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Pt.state.version||De.outputColorSpace!==Re||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==We||Z.fog===!0&&De.fog!==Pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ie.numPlanes||De.numIntersection!==Ie.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==et||De.morphTargets!==ze||De.morphNormals!==st||De.morphColors!==vt||De.toneMapping!==ut||De.morphTargetsCount!==bt||!!De.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,De.__version=Z.version);let Gt=De.currentProgram;nt===!0&&(Gt=Qi(Z,B,$),O&&Z.isNodeMaterial&&O.onUpdateProgram(Z,Gt,De));let jt=!1,Sn=!1,Kn=!1;const ot=Gt.getUniforms(),_t=De.uniforms;if(g.useProgram(Gt.program)&&(jt=!0,Sn=!0,Kn=!0),Z.id!==K&&(K=Z.id,Sn=!0),De.needsLights){const ht=Ql(b.state.lightProbeGridArray,$);De.lightProbeGrid!==ht&&(De.lightProbeGrid=ht,Sn=!0)}if(jt||C!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",x.projectionMatrix),ot.setValue(D,"viewMatrix",x.matrixWorldInverse);const En=ot.map.cameraPosition;En!==void 0&&En.setValue(D,de.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ot.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),C!==x&&(C=x,Sn=!0,Kn=!0)}if(De.needsLights&&(Pt.state.sunShadowMap.length>0&&ot.setValue(D,"sunShadowMap",Pt.state.sunShadowMap,Q),Pt.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Pt.state.directionalShadowMap,Q),Pt.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Pt.state.spotShadowMap,Q),Pt.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Pt.state.pointShadowMap,Q)),$.isSkinnedMesh){ot.setOptional(D,$,"bindMatrix"),ot.setOptional(D,$,"bindMatrixInverse");const ht=$.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ot.setValue(D,"boneTexture",ht.boneTexture,Q))}$.isBatchedMesh&&(ot.setOptional(D,$,"batchingTexture"),ot.setValue(D,"batchingTexture",$._matricesTexture,Q),ot.setOptional(D,$,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",$._indirectTexture,Q),ot.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",$._colorsTexture,Q));const yn=J.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&F.update($,J,Gt),(Sn||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,ot.setValue(D,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(_t.envMapIntensity.value=B.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=t0()),Sn){if(ot.setValue(D,"toneMappingExposure",N.toneMappingExposure),De.needsLights&&ec(_t,Kn),Pe&&Z.fog===!0&&Oe.refreshFogUniforms(_t,Pe),Oe.refreshMaterialUniforms(_t,Z,Y,V,b.state.transmissionRenderTarget[x.id]),De.needsLights&&De.lightProbeGrid){const ht=De.lightProbeGrid;_t.probesSH.value=ht.texture,_t.probesMin.value.copy(ht.boundingBox.min),_t.probesMax.value.copy(ht.boundingBox.max),_t.probesResolution.value.copy(ht.resolution)}Cr.upload(D,Ya(De),_t,Q)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Cr.upload(D,Ya(De),_t,Q),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ot.setValue(D,"center",$.center),ot.setValue(D,"modelViewMatrix",$.modelViewMatrix),ot.setValue(D,"normalMatrix",$.normalMatrix),ot.setValue(D,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){const ht=Z.uniformsGroups;for(let En=0,Jn=ht.length;En<Jn;En++){const Ka=ht[En];ue.update(Ka,Gt),ue.bind(Ka,Gt)}}return Gt}function ec(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.sunLights.needsUpdate=B,x.sunLightShadows.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function tc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(x,B,J){const Z=q.get(x);Z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(x.texture).__webglTexture=B,q.get(x.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const J=q.get(x);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(x,B=0,J=0){ae=x,X=B,H=J;let Z=null,$=!1,Pe=!1;if(x){const Re=q.get(x);if(Re.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,Re.__webglFramebuffer),M.copy(x.viewport),se.copy(x.scissor),te=x.scissorTest,g.viewport(M),g.scissor(se),g.setScissorTest(te),K=-1;return}else if(Re.__webglFramebuffer===void 0)Q.setupRenderTarget(x);else if(Re.__hasExternalTextures)Q.rebindTextures(x,q.get(x.texture).__webglTexture,q.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Je=x.depthTexture;if(Re.__boundDepthTexture!==Je){if(Je!==null&&q.has(Je)&&(x.width!==Je.image.width||x.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(x)}}const Be=x.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Pe=!0);const We=q.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(We[B])?Z=We[B][J]:Z=We[B],$=!0):x.samples>0&&Q.useMultisampledRTT(x)===!1?Z=q.get(x).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[J]:Z=We,M.copy(x.viewport),se.copy(x.scissor),te=x.scissorTest}else M.copy(fe).multiplyScalar(Y).floor(),se.copy(ee).multiplyScalar(Y).floor(),te=Ae;if(J!==0&&(Z=G),g.bindFramebuffer(D.FRAMEBUFFER,Z)&&g.drawBuffers(x,Z),g.viewport(M),g.scissor(se),g.setScissorTest(te),$){const Re=q.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,J)}else if(Pe){const Re=B;for(let Be=0;Be<x.textures.length;Be++){const We=q.get(x.textures[Be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Be,We.__webglTexture,J,Re)}}else if(x!==null&&J!==0){const Re=q.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,J)}K=-1};function $a(x){const B=q.get(x);return(B.__readFormat!==x.format||B.__readType!==x.type)&&(B.__readFormat=x.format,B.__readType=x.type,B.__formatReadable=T.textureFormatReadable(x.format),B.__typeReadable=T.textureTypeReadable(x.type)),B}this.readRenderTargetPixels=function(x,B,J,Z,$,Pe,Ne,Re=0){if(!(x&&x.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=q.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){g.bindFramebuffer(D.FRAMEBUFFER,Be);try{const We=x.textures[Re],Je=We.format,et=We.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re);const ze=$a(We);if(ze.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-Z&&J>=0&&J<=x.height-$&&D.readPixels(B,J,Z,$,ve.convert(Je),ve.convert(et),Pe)}finally{const We=ae!==null?q.get(ae).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(x,B,J,Z,$,Pe,Ne,Re=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=q.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(B>=0&&B<=x.width-Z&&J>=0&&J<=x.height-$){g.bindFramebuffer(D.FRAMEBUFFER,Be);const We=x.textures[Re],Je=We.format,et=We.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re);const ze=$a(We);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,Pe.byteLength,D.STREAM_READ),D.readPixels(B,J,Z,$,ve.convert(Je),ve.convert(et),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const vt=ae!==null?q.get(ae).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,vt);const ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bc(D,ut,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(st),D.deleteSync(ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,J=0){const Z=Math.pow(2,-J),$=Math.floor(x.image.width*Z),Pe=Math.floor(x.image.height*Z),Ne=B!==null?B.x:0,Re=B!==null?B.y:0;Q.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ne,Re,$,Pe),g.unbindTexture()},this.copyTextureToTexture=function(x,B,J=null,Z=null,$=0,Pe=0){let Ne,Re,Be,We,Je,et,ze,st,vt;const ut=x.isCompressedTexture?x.mipmaps[Pe]:x.image;if(J!==null)Ne=J.max.x-J.min.x,Re=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,We=J.min.x,Je=J.min.y,et=J.isBox3?J.min.z:0;else{const _t=Math.pow(2,-$);Ne=Math.floor(ut.width*_t),Re=Math.floor(ut.height*_t),x.isDataArrayTexture?Be=ut.depth:x.isData3DTexture?Be=Math.floor(ut.depth*_t):Be=1,We=0,Je=0,et=0}Z!==null?(ze=Z.x,st=Z.y,vt=Z.z):(ze=0,st=0,vt=0);const lt=ve.convert(B.format),bt=ve.convert(B.type);let De;B.isData3DTexture?(Q.setTexture3D(B,0),De=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),De=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),De=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Pt=g.getParameter(D.UNPACK_ROW_LENGTH),nt=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Gt=g.getParameter(D.UNPACK_SKIP_PIXELS),jt=g.getParameter(D.UNPACK_SKIP_ROWS),Sn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,We),g.pixelStorei(D.UNPACK_SKIP_ROWS,Je),g.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Kn=x.isDataArrayTexture||x.isData3DTexture,ot=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const _t=q.get(x),yn=q.get(B),ht=q.get(_t.__renderTarget),En=q.get(yn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ht.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Jn=0;Jn<Be;Jn++)Kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(x).__webglTexture,$,et+Jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Pe,vt+Jn)),D.blitFramebuffer(We,Je,Ne,Re,ze,st,Ne,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||x.isRenderTargetTexture||q.has(x)){const _t=q.get(x),yn=q.get(B);g.bindFramebuffer(D.READ_FRAMEBUFFER,w),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,U);for(let ht=0;ht<Be;ht++)Kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,$,et+ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,$),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,Pe,vt+ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,Pe),$!==0?D.blitFramebuffer(We,Je,Ne,Re,ze,st,Ne,Re,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(De,Pe,ze,st,vt+ht,We,Je,Ne,Re):D.copyTexSubImage2D(De,Pe,ze,st,We,Je,Ne,Re);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(De,Pe,ze,st,vt,Ne,Re,Be,lt,bt,ut.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(De,Pe,ze,st,vt,Ne,Re,Be,lt,ut.data):D.texSubImage3D(De,Pe,ze,st,vt,Ne,Re,Be,lt,bt,ut):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Pe,ze,st,Ne,Re,lt,bt,ut.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Pe,ze,st,ut.width,ut.height,lt,ut.data):D.texSubImage2D(D.TEXTURE_2D,Pe,ze,st,Ne,Re,lt,bt,ut);g.pixelStorei(D.UNPACK_ROW_LENGTH,Pt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(D.UNPACK_SKIP_ROWS,jt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Sn),Pe===0&&B.generateMipmaps&&D.generateMipmap(De),g.unbindTexture()},this.initRenderTarget=function(x){q.get(x).__webglFramebuffer===void 0&&Q.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Q.setTextureCube(x,0):x.isData3DTexture?Q.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Q.setTexture2DArray(x,0):Q.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){X=0,H=0,ae=null,g.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function el(i){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d"),n=512,r=512,s=470;let a=i.id==="dlc"?"#0D0F12":i.id==="rose"?"#1A1412":i.id==="gold"?"#161410":"#14171D",o=i.id==="dlc"?"#20242C":i.id==="rose"?"#2A221D":i.id==="gold"?"#242018":"#2A303C";const l=t.createRadialGradient(n,r,30,n,r,s);l.addColorStop(0,o),l.addColorStop(.65,a),l.addColorStop(1,"#080A0D"),t.fillStyle=l,t.beginPath(),t.arc(n,r,s,0,Math.PI*2),t.fill(),t.save(),t.translate(n,r);const c=720;for(let L=0;L<c;L++){const O=L*(360/c)*Math.PI/180,G=L%2===0;t.strokeStyle=G?"rgba(0, 0, 0, 0.35)":"rgba(255, 255, 255, 0.06)",t.lineWidth=1,t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(O)*s,Math.sin(O)*s),t.stroke()}t.restore(),t.save(),t.translate(n,r);for(let L=70;L<s;L+=14)t.strokeStyle="rgba(255, 255, 255, 0.025)",t.lineWidth=.75,t.beginPath(),t.arc(0,0,L,0,Math.PI*2),t.stroke();t.restore(),t.save(),t.translate(n,r);const u=s-16,d=s-38;t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=1.2,t.beginPath(),t.arc(0,0,u,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.25)",t.beginPath(),t.arc(0,0,d,0,Math.PI*2),t.stroke();for(let L=0;L<300;L++){const O=L*1.2*Math.PI/180,G=L%25===0,w=L%5===0;t.rotate(O),G?(t.strokeStyle="#FFFFFF",t.lineWidth=3,t.beginPath(),t.moveTo(0,-d+2),t.lineTo(0,-u),t.stroke()):w?(t.strokeStyle="rgba(255, 255, 255, 0.7)",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-d+6),t.lineTo(0,-u),t.stroke()):(t.strokeStyle="rgba(255, 255, 255, 0.25)",t.lineWidth=.8,t.beginPath(),t.moveTo(0,-d+10),t.lineTo(0,-u),t.stroke()),t.rotate(-O)}t.restore();const h=308;t.save(),t.fillStyle="#FFFFFF",t.font='600 48px "Inter", "Syne", -apple-system, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="rgba(0, 0, 0, 0.9)",t.shadowBlur=8,t.shadowOffsetY=2,[{h:1,angleDeg:30},{h:2,angleDeg:60},{h:4,angleDeg:120},{h:5,angleDeg:150},{h:7,angleDeg:210},{h:8,angleDeg:240},{h:10,angleDeg:300},{h:11,angleDeg:330},{h:12,angleDeg:0,overrideR:h+15}].forEach(L=>{const O=L.overrideR||h,G=(L.angleDeg-90)*Math.PI/180,w=n+Math.cos(G)*O,U=r+Math.sin(G)*O;t.fillText(L.h.toString(),w,U)}),t.restore();const _=n,y=r-145,p=82;t.save();const f=t.createRadialGradient(_,y,10,_,y,p);f.addColorStop(0,"#101318"),f.addColorStop(.85,"#181C24"),f.addColorStop(1,"#2E3544"),t.fillStyle=f,t.beginPath(),t.arc(_,y,p,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.45)",t.lineWidth=2,t.stroke(),t.fillStyle="rgba(255, 255, 255, 0.7)",t.font='500 13px "Space Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("60",_,y-p+14),t.fillText("20",_+p-16,y+8),t.fillText("40",_-p+16,y+8),t.save(),t.translate(_,y);for(let L=0;L<360;L+=12){const O=L*Math.PI/180;t.rotate(O),t.strokeStyle=L%60===0?"#FFFFFF":"rgba(255, 255, 255, 0.35)",t.lineWidth=L%60===0?1.5:.8,t.beginPath(),t.moveTo(0,-p+2),t.lineTo(0,-p+7),t.stroke(),t.rotate(-O)}t.restore(),t.fillStyle="#060B18",t.beginPath(),t.arc(_,y+12,42,0,Math.PI*2),t.fill(),t.fillStyle="#E2C275",t.shadowColor="rgba(226, 194, 117, 0.6)",t.shadowBlur=6,t.beginPath(),t.arc(_-4,y+8,14,0,Math.PI*2),t.fill(),t.fillStyle="#060B18",t.shadowBlur=0,t.beginPath(),t.arc(_+3,y+5,12,0,Math.PI*2),t.fill(),t.fillStyle="#FFFFFF",[[_+16,y+2],[_+22,y+18],[_-20,y+14],[_+5,y+24]].forEach(([L,O])=>{t.beginPath(),t.arc(L,O,1.2,0,Math.PI*2),t.fill()}),t.fillStyle="#181C24",t.beginPath(),t.arc(_-24,y+32,24,Math.PI*1.2,Math.PI*1.9),t.arc(_+24,y+32,24,Math.PI*1.1,Math.PI*1.8),t.fill(),t.restore();const R=n+250,I=r;t.save(),t.fillStyle="#C5CCD6",t.shadowColor="rgba(0, 0, 0, 0.7)",t.shadowBlur=8,t.fillRect(R-32,I-24,64,48),t.shadowBlur=0,t.fillStyle="#0E1117",t.fillRect(R-28,I-20,56,40),t.fillStyle="#FFFFFF",t.font='bold 26px "Space Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("9",R,I+2),t.fillStyle="#E2E8F0",t.font='600 13px "Space Mono", monospace',t.textAlign="right",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=4,t.fillText("AUTOMATIC",R-44,I-6),t.font='500 11px "Space Mono", monospace',t.fillStyle="rgba(255, 255, 255, 0.7)",t.fillText("CHRONOGRAPH",R-44,I+10),t.restore();const S=n,E=r+155,b=76;t.save();const P=t.createRadialGradient(S,E,15,S,E,b);P.addColorStop(0,"#05070A"),P.addColorStop(.7,"#11141A"),P.addColorStop(1,"#05070A"),t.fillStyle=P,t.beginPath(),t.arc(S,E,b,0,Math.PI*2),t.fill(),t.strokeStyle="#D4AF37",t.lineWidth=2.5,t.stroke(),t.strokeStyle="#F3D270",t.lineWidth=3.2,t.shadowColor="rgba(243, 210, 112, 0.4)",t.shadowBlur=6,t.beginPath(),t.arc(S,E,b-14,0,Math.PI*2),t.stroke();for(let L=0;L<3;L++){const O=L*120*Math.PI/180;t.beginPath(),t.moveTo(S,E),t.quadraticCurveTo(S+Math.cos(O+.3)*(b*.5),E+Math.sin(O+.3)*(b*.5),S+Math.cos(O)*(b-14),E+Math.sin(O)*(b-14)),t.stroke()}t.shadowBlur=0,t.strokeStyle="#38BDF8",t.lineWidth=1,t.beginPath();for(let L=0;L<Math.PI*7;L+=.15){const O=4+L*2.2,G=S+Math.cos(L)*O,w=E+Math.sin(L)*O;L===0?t.moveTo(G,w):t.lineTo(G,w)}t.stroke(),t.fillStyle="#8E99A8",t.beginPath(),t.moveTo(S-42,E+10),t.lineTo(S+42,E+10),t.lineTo(S+32,E+28),t.lineTo(S-32,E+28),t.closePath(),t.fill(),t.fillStyle="#E11D48",t.shadowColor="rgba(225, 29, 72, 0.8)",t.shadowBlur=8,t.beginPath(),t.arc(S,E,5.5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(S+18,E-18,3.5,0,Math.PI*2),t.fill(),t.restore();const v=n-250,A=r;t.save(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.arc(v,A,18,0,Math.PI*2),t.stroke(),t.fillStyle="#FFFFFF",t.font='bold 14px "Space Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("01",v,A),t.fillStyle="#FFFFFF",t.font='800 24px "Inter", "Syne", sans-serif',t.textAlign="left",t.shadowColor="rgba(0, 0, 0, 0.8)",t.shadowBlur=6,t.fillText("A3016",v+30,A-4),t.font='600 11px "Space Mono", monospace',t.fillStyle="rgba(255, 255, 255, 0.7)",t.fillText("ALUNA • NEPAL",v+30,A+14),t.restore(),t.save(),t.fillStyle="#FFFFFF",t.font='italic 700 26px "Cormorant Garamond", Georgia, serif',t.textAlign="center",t.shadowColor="rgba(0, 0, 0, 0.85)",t.shadowBlur=8,t.fillText("ALUNA",_,y-p-16),t.restore(),t.save(),t.fillStyle="rgba(255, 255, 255, 0.6)",t.font='600 11px "Space Mono", monospace',t.textAlign="center",t.fillText("NEPAL   MADE",n,r+s-52),t.restore();const N=new Ki(e);return N.anisotropy=16,N.needsUpdate=!0,N}function tl(i){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d"),n=512,r=512,s=480;let a=(i==null?void 0:i.id)==="dlc"?"#12151B":(i==null?void 0:i.id)==="rose"?"#453830":(i==null?void 0:i.id)==="gold"?"#4A422D":"#8E98A6",o=(i==null?void 0:i.id)==="dlc"?"#252B35":(i==null?void 0:i.id)==="rose"?"#7A6456":(i==null?void 0:i.id)==="gold"?"#8C7C58":"#C4CDD8",l=(i==null?void 0:i.id)==="dlc"?"#090B0E":(i==null?void 0:i.id)==="rose"?"#2A201A":(i==null?void 0:i.id)==="gold"?"#2E2718":"#606976";const c=t.createRadialGradient(n-100,r-100,50,n,r,s);c.addColorStop(0,o),c.addColorStop(.5,a),c.addColorStop(1,l),t.fillStyle=c,t.beginPath(),t.arc(n,r,s,0,Math.PI*2),t.fill(),t.save(),t.translate(n,r);for(let d=40;d<s;d+=2){const h=.05+Math.random()*.1,m=Math.random()>.45;t.strokeStyle=m?`rgba(255, 255, 255, ${h})`:`rgba(0, 0, 0, ${h*1.5})`,t.lineWidth=1,t.beginPath(),t.arc(0,0,d,0,Math.PI*2),t.stroke()}t.restore(),t.strokeStyle="rgba(0, 0, 0, 0.35)",t.lineWidth=2.5,t.beginPath(),t.arc(n,r,s-25,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.arc(n,r,s-23,0,Math.PI*2),t.stroke(),t.save(),t.shadowColor="rgba(0, 0, 0, 0.75)",t.shadowBlur=4,t.shadowOffsetX=1,t.shadowOffsetY=2,t.fillStyle=(i==null?void 0:i.id)==="dlc"?"#07090C":"#333A44",t.font='italic 700 78px "Cormorant Garamond", "Playfair Display", Georgia, serif',t.textAlign="center",t.textBaseline="middle",t.fillText("ALUNA",n,r-26),t.shadowColor="transparent",t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=1,t.strokeText("ALUNA",n-.5,r-27),t.restore(),t.save(),t.shadowColor="rgba(0, 0, 0, 0.65)",t.shadowBlur=3,t.shadowOffsetX=1,t.shadowOffsetY=1.5,t.fillStyle=(i==null?void 0:i.id)==="dlc"?"#07090C":"#333A44",t.font='600 32px "Space Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("A3016",n,r+42),t.font='500 13px "Space Mono", monospace',t.fillStyle=(i==null?void 0:i.id)==="dlc"?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.55)",t.shadowBlur=0,t.fillText("ALL STAINLESS STEEL  •  NEPAL AUTOMATIC  •  100M WATER RESISTANT",n,r+s-70),t.restore();const u=new Ki(e);return u.anisotropy=16,u.needsUpdate=!0,u}function nl(i){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d"),n=512,r=512,s=500,a=410,o=(i==null?void 0:i.bezelColor)||"#E2E8F0";t.fillStyle=o,t.beginPath(),t.arc(n,r,s,0,Math.PI*2),t.arc(n,r,a,0,Math.PI*2,!0),t.fill(),t.save(),t.translate(n,r);for(let u=a;u<s;u+=1.5){const d=.03+Math.random()*.08,h=Math.random()>.5;t.strokeStyle=h?`rgba(255, 255, 255, ${d*1.5})`:`rgba(0, 0, 0, ${d*.9})`,t.lineWidth=1.2,t.beginPath(),t.arc(0,0,u,0,Math.PI*2),t.stroke()}t.restore();const l=(a+s)/2;for(let u=0;u<6;u++){const d=(u*60+30)*Math.PI/180,h=n+Math.cos(d)*l,m=r+Math.sin(d)*l;t.save(),t.translate(h,m),t.fillStyle="rgba(0, 0, 0, 0.3)",t.beginPath(),t.arc(0,0,18,0,Math.PI*2),t.fill();const _=t.createLinearGradient(-12,-12,12,12);_.addColorStop(0,"#FFFFFF"),_.addColorStop(.5,"#CBD5E1"),_.addColorStop(1,"#64748B"),t.fillStyle=_,t.beginPath(),t.arc(0,0,15,0,Math.PI*2),t.fill(),t.rotate(d+Math.PI/4),t.fillStyle="#1A1E24",t.fillRect(-12,-2.5,24,5),t.restore()}const c=new Ki(e);return c.anisotropy=16,c.needsUpdate=!0,c}function i0(){const i=document.createElement("canvas");i.width=1024,i.height=1024;const e=i.getContext("2d");e.fillStyle="#D6DCE5",e.fillRect(0,0,1024,1024);const t=35;for(let o=0;o<1024;o+=t)for(let l=0;l<1024;l+=t){const c=e.createRadialGradient(l,o,4,l,o,t*.9);c.addColorStop(0,"rgba(255,255,255,0.4)"),c.addColorStop(.7,"rgba(180,190,205,0.5)"),c.addColorStop(1,"rgba(120,130,145,0.1)"),e.fillStyle=c,e.beginPath(),e.arc(l,o,t*.9,0,Math.PI*2),e.fill()}e.save(),e.rotate(Math.PI/6);const n=50;for(let o=-500;o<1500;o+=n){const l=e.createLinearGradient(o,0,o+n,0);l.addColorStop(0,"rgba(255,255,255,0.15)"),l.addColorStop(.5,"rgba(0,0,0,0.08)"),l.addColorStop(1,"rgba(255,255,255,0.12)"),e.fillStyle=l,e.fillRect(o,-500,n,2e3)}e.restore(),[[320,280,18],[720,310,16],[480,520,24],[360,680,15],[680,690,20],[540,780,14]].forEach(([o,l,c])=>{e.fillStyle="#D4AF37",e.beginPath(),e.arc(o,l,c+6,0,Math.PI*2),e.fill();const u=e.createRadialGradient(o,l,2,o,l,c);u.addColorStop(0,"#FF4D6D"),u.addColorStop(.6,"#C9184A"),u.addColorStop(1,"#590D22"),e.fillStyle=u,e.beginPath(),e.arc(o,l,c,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.75)",e.beginPath(),e.arc(o-c*.3,l-c*.3,c*.25,0,Math.PI*2),e.fill()}),[[240,420],[780,440],[420,360],[600,380],[450,720],[620,740]].forEach(([o,l])=>{const c=e.createRadialGradient(o,l,2,o,l,14);c.addColorStop(0,"#38BDF8"),c.addColorStop(.7,"#1E40AF"),c.addColorStop(1,"#0F172A"),e.fillStyle=c,e.beginPath(),e.arc(o,l,14,0,Math.PI*2),e.fill(),e.fillStyle="#05070B",e.fillRect(o-11,l-2,22,4)});const a=new Ki(i);return a.anisotropy=16,a.needsUpdate=!0,a}function r0(){const i=document.createElement("canvas");return i.width=16,i.height=16,new Ki(i)}function s0(i){const e=new gt,t={case:new Zt({color:new $e(i.caseColor),metalness:i.caseMetalness??.98,roughness:i.caseRoughness??.16,envMapIntensity:1.8}),caseback:new Zt({map:tl(i),metalness:i.caseMetalness??.96,roughness:.22,envMapIntensity:1.8}),bezelInsert:new Ao({color:16777215,map:nl(i),roughness:i.caseRoughness??.18,metalness:i.caseMetalness??.95,envMapIntensity:1.6}),dial:new Zt({map:el(i),roughness:.32,metalness:.12,side:It,depthWrite:!0,envMapIntensity:1.4}),hands:new Zt({color:new $e(i.handsColor),metalness:.98,roughness:.08,envMapIntensity:2.2}),secondsHand:new Zt({color:new $e(i.accentColor||"#38BDF8"),metalness:.9,roughness:.12,emissive:new $e(i.accentColor||"#38BDF8"),emissiveIntensity:.15,envMapIntensity:2}),lume:new Zt({color:16777215,emissive:new $e(i.lumeColor),emissiveIntensity:0,roughness:.4}),sapphire:new Ao({color:16777215,transparent:!0,opacity:.12,roughness:.02,metalness:.05,reflectivity:.9,clearcoat:1,clearcoatRoughness:.01,depthWrite:!1,side:In}),movement:new Zt({map:i0(),metalness:.94,roughness:.18,envMapIntensity:1.8}),balanceWheel:new Zt({color:13938487,metalness:.98,roughness:.12,envMapIntensity:2.4}),rotor:new Zt({map:r0(),metalness:.92,roughness:.18,transparent:!0,side:It,envMapIntensity:2}),strap:new Zt({color:new $e(i.strapColor),metalness:i.strapType==="metal"?i.caseMetalness??.98:.05,roughness:i.strapType==="metal"?.22:.75,envMapIntensity:1.6})},n=new gt,r=new gt,s=new gt,a=new gt,o=new gt,l=new gt,c=new gt,u=new gt,d={sapphire:n,bezel:r,dial:s,hands:a,movement:o,case:l,caseback:c,rotor:u},h=new fi(2.36,64),m=new Ye(h,t.sapphire);m.position.z=.28,n.add(m);const _=new mi(2.37,.03,16,64),y=new Ye(_,t.case);y.position.z=.28,n.add(y);const p=new di;p.absarc(0,0,2.65,0,Math.PI*2,!1);const f=new Nr;f.absarc(0,0,2.36,0,Math.PI*2,!0),p.holes.push(f);const R=new Hn(p,{depth:.2,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.02,bevelThickness:.02,curveSegments:64}),I=new Ye(R,t.case);I.position.z=-.1,r.add(I);const S=new Or(2.37,2.64,64),E=new Ye(S,t.bezelInsert);E.position.z=.12,r.add(E);const b=new Gn(.045,.045,.03,16),P=new Nt(.07,.012,.035),v=new Xn({color:1119775});for(let oe=0;oe<6;oe++){const Ie=(oe*60+30)*Math.PI/180,He=2.505,qe=Math.cos(Ie)*He,F=Math.sin(Ie)*He,me=new gt;me.position.set(qe,F,.13),me.rotation.z=Ie+Math.PI/4;const ne=new Ye(b,t.case);ne.rotation.x=Math.PI/2,me.add(ne);const ve=new Ye(P,v);ve.position.z=.012,me.add(ve),r.add(me)}r.position.z=.24;const A=new fi(2.35,64),N=new Ye(A,t.dial);s.add(N);const L=new Gn(.18,.18,.02,32),O=new Ye(L,t.case);O.rotation.x=Math.PI/2,O.position.z=.01,s.add(O),s.position.z=.1;const G=new gt,w=new Gn(.14,.14,.16,32),U=new Ye(w,t.hands);U.rotation.x=Math.PI/2,U.position.z=.1,G.add(U);const X=new gt,H=new di;H.moveTo(0,-.25),H.lineTo(-.11,.35),H.lineTo(-.02,1.28),H.lineTo(0,1.35),H.lineTo(.02,1.28),H.lineTo(.11,.35),H.closePath();const ae=new Hn(H,{depth:.035,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012}),K=new Ye(ae,t.hands);X.add(K);const C=new Nt(.05,.65,.04),M=new Ye(C,t.lume);M.position.set(0,.65,.02),X.add(M),G.add(X);const se=new gt,te=new di;te.moveTo(0,-.3),te.lineTo(-.09,.45),te.lineTo(-.02,1.9),te.lineTo(0,1.98),te.lineTo(.02,1.9),te.lineTo(.09,.45),te.closePath();const Ee=new Hn(te,{depth:.035,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012}),_e=new Ye(Ee,t.hands);_e.position.z=.04,se.add(_e);const Te=new Nt(.045,1.15,.04),V=new Ye(Te,t.lume);V.position.set(0,1.05,.06),se.add(V),G.add(se);const Y=new gt,he=new di;he.moveTo(-.02,-.6),he.lineTo(.02,-.6),he.lineTo(.012,2.15),he.lineTo(0,2.22),he.lineTo(-.012,2.15),he.closePath();const be=new Hn(he,{depth:.02,bevelEnabled:!1}),fe=new Ye(be,t.secondsHand);Y.add(fe);const ee=new mi(.12,.03,16,32),Ae=new Ye(ee,t.secondsHand);Ae.position.y=-.38,Y.add(Ae);const W=new fi(.05,16),ie=new Ye(W,t.lume);ie.position.set(0,1.7,.025),Y.add(ie),Y.position.z=.08,G.add(Y),a.add(G),a.position.z=.16;const le=new Gn(2.32,2.32,.28,64),ce=new Ye(le,t.movement);ce.rotation.x=Math.PI/2,o.add(ce);const de=new gt,Ue=new mi(.5,.03,16,32),Le=new Ye(Ue,t.balanceWheel);de.add(Le);for(let oe=0;oe<3;oe++){const Ie=new Nt(.04,.48,.02),He=new Ye(Ie,t.balanceWheel);He.rotation.z=oe*Math.PI*2/3,de.add(He)}de.position.set(-.7,-.6,-.15),o.add(de),o.position.z=-.05;const Fe=new gt,Ge=new di;Ge.absarc(0,0,2.65,0,Math.PI*2,!1);const D=new Nr;D.absarc(0,0,2.35,0,Math.PI*2,!0),Ge.holes.push(D);const Ke=new Hn(Ge,{depth:.5,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.02,bevelThickness:.02,curveSegments:64}),Me=new Ye(Ke,t.case);Me.position.z=-.3,Fe.add(Me);const T=new Nt(.32,1.1,.35);[{x:-1.45,y:2.55,z:-.15},{x:1.45,y:2.55,z:-.15},{x:-1.45,y:-2.55,z:-.15},{x:1.45,y:-2.55,z:-.15}].forEach(oe=>{const Ie=new Ye(T,t.case);Ie.position.set(oe.x,oe.y,oe.z),Ie.rotation.z=(oe.x>0?-1:1)*(oe.y>0?.18:-.18),Fe.add(Ie)});const k=new Gn(.32,.32,.35,24),q=new Ye(k,t.case);q.rotation.z=Math.PI/2,q.position.set(2.82,0,0),Fe.add(q);const Q=new Nt(.3,.45,.35),pe=new Ye(Q,t.case);pe.position.set(2.62,.4,0),Fe.add(pe);const ge=new Ye(Q,t.case);ge.position.set(2.62,-.4,0),Fe.add(ge),a0(Fe,t.strap,i.strapType),l.add(Fe),l.position.z=-.05;const j=new gt,re=new fi(2.35,64),xe=new Ye(re,t.caseback);xe.rotation.y=Math.PI,xe.position.z=-.31,j.add(xe);const Oe=new mi(2.35,.05,16,64),Se=new Ye(Oe,t.case);return Se.position.z=-.31,j.add(Se),c.add(j),c.position.z=0,u.position.z=-.28,e.add(n),e.add(r),e.add(s),e.add(a),e.add(o),e.add(l),e.add(c),e.add(u),{root:e,layers:d,materials:t,hands:{hour:X,minute:se,second:Y},balanceWheel:de,rotor:u,updateEdition(oe){t.case.color.set(oe.caseColor),t.case.metalness=oe.caseMetalness,t.case.roughness=oe.caseRoughness,t.bezelInsert.color.set(16777215),t.bezelInsert.map=nl(oe),t.bezelInsert.map.needsUpdate=!0,t.bezelInsert.roughness=oe.caseRoughness??.18,t.bezelInsert.metalness=oe.caseMetalness??.95,t.caseback.map=tl(oe),t.caseback.map.needsUpdate=!0,t.dial.map=el(oe),t.dial.map.needsUpdate=!0,t.hands.color.set(oe.handsColor),t.secondsHand.color.set(oe.accentColor||"#38BDF8"),t.secondsHand.emissive.set(oe.accentColor||"#38BDF8"),t.lume.emissive.set(oe.lumeColor),t.strap.color.set(oe.strapColor),t.strap.metalness=oe.strapType==="metal"?oe.caseMetalness:.05,t.strap.roughness=oe.strapType==="metal"?.3:.8},setNightLume(oe){t.lume.emissiveIntensity=oe?2.5:0,t.secondsHand.emissiveIntensity=oe?1.8:.1}}}function a0(i,e,t){for(let r of[1,-1])for(let s=0;s<7;s++){const a=2.45+s*.72,o=-Math.pow(s*.28,1.8);if(t==="metal"){const l=new Nt(.7,.65,.22),c=new Nt(.85,.65,.24),u=new Ye(c,e);u.position.set(0,r*a,o),u.rotation.x=-r*(s*.18),i.add(u);const d=new Ye(l,e);d.position.set(-.85,r*a,o),d.rotation.x=-r*(s*.18),i.add(d);const h=new Ye(l,e);h.position.set(.85,r*a,o),h.rotation.x=-r*(s*.18),i.add(h)}else{const l=new Nt(2.35-s*.08,.7,.2),c=new Ye(l,e);c.position.set(0,r*a,o),c.rotation.x=-r*(s*.18),i.add(c)}}}class o0{constructor(e){this.layers=e,this.isExploded=!1,this.progress=0,this.targetProgress=0,this.basePositions={sapphire:this.layers.sapphire.position.z,bezel:this.layers.bezel.position.z,dial:this.layers.dial.position.z,hands:this.layers.hands.position.z,movement:this.layers.movement.position.z,case:this.layers.case.position.z,caseback:this.layers.caseback.position.z,rotor:this.layers.rotor.position.z}}toggle(){this.setExploded(!this.isExploded)}setExploded(e){this.isExploded=e,this.targetProgress=e?1:0}update(e=.016){return this.progress+=(this.targetProgress-this.progress)*.08,bs.forEach(n=>{const r=this.layers[n.id];if(r){const s=this.basePositions[n.id]||0,a=s+n.offsetZ;r.position.z=s+(a-s)*this.progress}}),this.progress}getActiveLayerInfo(){return bs}}class l0{constructor(){this.ctx=null,this.isMuted=!0,this.tickInterval=null,this.tickState=0}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.init(),this.isMuted=!this.isMuted,this.isMuted?this.stopTicking():(this.startTicking(),this.playClick(600,.04)),!this.isMuted}startTicking(){this.tickInterval||this.isMuted||!this.ctx||(this.tickInterval=setInterval(()=>{if(this.isMuted||!this.ctx)return;this.tickState=1-this.tickState;const e=this.tickState===0,t=this.ctx.createOscillator(),n=this.ctx.createGain(),r=this.ctx.createBiquadFilter(),s=e?3800:3200;t.type="sine",t.frequency.setValueAtTime(s,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.015),r.type="bandpass",r.frequency.setValueAtTime(s,this.ctx.currentTime),r.Q.setValueAtTime(3,this.ctx.currentTime),n.gain.setValueAtTime(.045,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.018),t.connect(r),r.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.02)},125))}stopTicking(){this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}playClick(e=520,t=.03){if(!(this.isMuted||!this.ctx))try{const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+t),r.gain.setValueAtTime(.06,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),n.connect(r),r.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+t)}catch{}}}const Zi=new l0,c0=[{id:"sapphire",badge:"CRYSTAL",label:"Sapphire Crystal",metric:"9 Mohs • Anti-Reflective",desc:"Synthetic corundum crystal with dual-sided anti-glare coating for optical clarity.",localPos:new z(0,0,.48),normal:new z(0,0,1),targetRotX:.1,targetRotY:-.15,zoom:9.5},{id:"bezel",badge:"BEZEL",label:"Ceramic Bezel",metric:"120-Click Unidirectional",desc:"Zirconia ceramic insert impervious to scratches, UV degradation, and corrosion.",localPos:new z(0,2.5,.25),normal:new z(0,.5,.85).normalize(),targetRotX:.4,targetRotY:0,zoom:9},{id:"crown",badge:"CROWN",label:"Twinlock Crown",metric:"Screw-Down • 100M Water Resistant",desc:"Dual polymer sealing gaskets create a hermetic seal against moisture and dust.",localPos:new z(2.8,0,0),normal:new z(1,0,0),targetRotX:0,targetRotY:-Math.PI/2.2,zoom:9},{id:"dial",badge:"DIAL",label:"Applied Dial & Hands",metric:"Nepal Super-LumiNova® X1",desc:"Sunburst guilloché dial with hand-applied faceted hour markers and luminescent hands.",localPos:new z(-.8,-.6,.2),normal:new z(0,0,1),targetRotX:.05,targetRotY:.2,zoom:8.8},{id:"caseback",badge:"CASEBACK",label:"Solid Engraved Caseback",metric:"316L Surgical Steel • Hermetic Seal",desc:"Laser-engraved ALUNA italic signature and A3016 reference with circular satin graining.",localPos:new z(0,-.5,-.45),normal:new z(0,0,-1),targetRotX:.1,targetRotY:Math.PI,zoom:9.5}];class h0{constructor(e,t){this.container=document.getElementById(e),this.onPinClick=t,this.pins=[],this.isVisible=!1,this.initDOM()}initDOM(){this.container&&(this.container.innerHTML="",c0.forEach(e=>{const t=document.createElement("div");t.className="watch-hotspot-pin",t.dataset.hotspotId=e.id,t.innerHTML=`
        <button class="hotspot-core" aria-label="Inspect ${e.label}">
          <span class="hotspot-ping"></span>
          <span class="hotspot-dot"></span>
        </button>
        <div class="hotspot-card">
          <div class="hotspot-card-header">
            <span class="hotspot-badge">${e.badge}</span>
            <span class="hotspot-metric">${e.metric}</span>
          </div>
          <span class="hotspot-label">${e.label}</span>
          <p class="hotspot-desc">${e.desc}</p>
        </div>
      `,t.addEventListener("mouseenter",()=>{this.isVisible&&Zi.playTick()}),t.addEventListener("click",n=>{n.stopPropagation(),Zi.playClick(680,.03),this.onPinClick&&this.onPinClick(e)}),this.container.appendChild(t),this.pins.push({data:e,el:t})}))}update(e,t){if(!this.container||this.pins.length===0||!this.isVisible)return;const n=this.container.clientWidth,r=this.container.clientHeight;this.pins.forEach(s=>{const a=s.data.localPos.clone();a.applyMatrix4(t.matrixWorld);const o=s.data.normal.clone().applyQuaternion(t.quaternion),l=e.position.clone().sub(a).normalize();if(o.dot(l)<.12){s.el.style.opacity="0",s.el.style.pointerEvents="none";return}const u=a.clone().project(e);if(u.z>1){s.el.style.opacity="0",s.el.style.pointerEvents="none";return}const d=(u.x+1)/2*n,h=(-u.y+1)/2*r;s.el.style.transform=`translate3d(${d}px, ${h}px, 0)`,s.el.style.opacity="1",s.el.style.pointerEvents="auto"})}setVisible(e){this.isVisible=e,this.container&&(this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents="none",this.pins.forEach(t=>{t.el.style.pointerEvents=e?"auto":"none",e||(t.el.style.opacity="0")}))}}function u0(i){const e=new ma(i);e.compileEquirectangularShader();const t=new Tl;t.background=new $e(1119e3);const n=new Ye(new Ln(16,16),new Xn({color:16777215,side:It}));n.position.set(0,12,0),n.rotation.x=Math.PI/2,t.add(n);const r=new Ye(new Ln(3,20),new Xn({color:16777215,side:It}));r.position.set(-9,2,5),r.rotation.y=Math.PI/3,t.add(r);const s=new Ye(new Ln(3,20),new Xn({color:14083327,side:It}));s.position.set(9,2,-5),s.rotation.y=-Math.PI/3,t.add(s);const a=new Ye(new Or(2.5,6,32),new Xn({color:16777215,side:It}));a.position.set(0,0,12),t.add(a);const o=e.fromScene(t,.04).texture;return e.dispose(),o}function d0(i,e="watch-hotspots-overlay"){const t=document.getElementById(i);if(!t)return;const n=t.clientWidth||window.innerWidth,r=t.clientHeight||window.innerHeight,s=new Tl,a=new kt(35,n/r,.1,100);a.position.set(0,0,11);const o=new n0({alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setSize(n,r),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=il,o.toneMapping=Ma,o.toneMappingExposure=1.55;const l=u0(o);s.environment=l,t.innerHTML="",t.appendChild(o.domElement);const c=new eu(16777215,.7);s.add(c);const u=new Li(16777215,3.2);u.position.set(0,2,9),s.add(u);const d=new Li(16777215,3.8);d.position.set(6,10,8),d.castShadow=!0,s.add(d);const h=new Li(12111615,1.2);h.position.set(-8,-3,5),s.add(h);const m=new Li(16777215,4.8);m.position.set(0,10,-7),s.add(m);const _=new Li(13690111,2.2);_.position.set(-6,-8,-4),s.add(_);const y=new Ln(16,16),p=new Wh({opacity:.18}),f=new Ye(y,p);f.position.z=-2.2,f.receiveShadow=!0,s.add(f);const R=new gt;s.add(R);let I=Vn[0],S=!1;const E=s0(I);R.add(E.root);const b=new o0(E.layers);let P=!1;const v=new h0(e,ee=>{M>=.82&&(X=ee.targetRotX,H=ee.targetRotY,G=ee.zoom,Ee=!0)});v.setVisible(!1);let A=!1,N=0,L=0,O=11,G=9.8,w=.08,U=.04,X=.08,H=.04,ae=0,K=0,C=!1,M=0,se=0,te=0,Ee=!1;t.style.cursor="grab",t.addEventListener("mousedown",ee=>{A=!0,N=ee.clientX,L=ee.clientY,t.style.cursor="grabbing"}),window.addEventListener("mouseup",()=>{A=!1,t.style.cursor="grab"}),window.addEventListener("mousemove",ee=>{if(A){const Ae=ee.clientX-N,W=ee.clientY-L;H+=Ae*.008,X=Math.max(-1.4,Math.min(1.4,X+W*.008)),M>=.82&&(Ee=!0),te+=(Math.abs(Ae)+Math.abs(W))*.04,N=ee.clientX,L=ee.clientY}}),t.addEventListener("wheel",ee=>{M>=.82&&(G=Math.min(Math.max(G+ee.deltaY*.004,7.5),15))},{passive:!0}),t.addEventListener("touchstart",ee=>{ee.touches.length===1&&(A=!0,N=ee.touches[0].clientX,L=ee.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",ee=>{if(A&&ee.touches.length===1){const Ae=ee.touches[0].clientX-N,W=ee.touches[0].clientY-L;H+=Ae*.008,X+=W*.008,M>=.82&&(Ee=!0),te+=(Math.abs(Ae)+Math.abs(W))*.04,N=ee.touches[0].clientX,L=ee.touches[0].clientY}},{passive:!0}),window.addEventListener("touchend",()=>{A=!1});const _e=document.getElementById("scrolly-narrative");function Te(){var re,xe,Oe,Se,oe,Ie,He,qe;const ee=_e?_e.offsetHeight:document.documentElement.scrollHeight,Ae=Math.max(ee-window.innerHeight,1);M=Math.min(Math.max(window.scrollY/Ae,0),1);const W=M<.05,ie=M>=.05&&M<.16,le=M>=.16&&M<.29,ce=M>=.29&&M<.42,de=M>=.42&&M<.55,Ue=M>=.55&&M<.68,Le=M>=.68&&M<.82,Fe=M>=.82;(re=document.getElementById("story-launch"))==null||re.classList.toggle("is--active",W),(xe=document.getElementById("story-title"))==null||xe.classList.toggle("is--active",ie),(Oe=document.getElementById("story-identity"))==null||Oe.classList.toggle("is--active",le),(Se=document.getElementById("story-dial"))==null||Se.classList.toggle("is--active",ce),(oe=document.getElementById("story-movement"))==null||oe.classList.toggle("is--active",de),(Ie=document.getElementById("story-exploded"))==null||Ie.classList.toggle("is--active",Ue),(He=document.getElementById("story-rotor"))==null||He.classList.toggle("is--active",Le),(qe=document.getElementById("story-studio"))==null||qe.classList.toggle("is--active",Fe),document.body.classList.toggle("step-identity-active",le),document.body.classList.toggle("step-dial-active",ce),document.body.classList.toggle("step-movement-active",de),document.body.classList.toggle("step-exploded-active",Ue),document.body.classList.toggle("step-bracelet-active",Le),document.body.classList.toggle("story-completed",Fe);let Ge=.9;if(M<.02)Ge=.9;else if(M>=.02&&M<.05){const F=(M-.02)/.03;Ge=.9*(1-F)+.1*F}else M>=.05&&M<.16?Ge=.1:Ge=.08;document.documentElement.style.setProperty("--bg-name-opacity",`${Ge.toFixed(3)}`);let D=100,Ke=!1;if(M<.04)D=100;else if(M>=.04&&M<.07){const F=(M-.04)/.03,me=1-Math.pow(1-F,3);D=(1-me)*100,Ke=me>.1}else if(M>=.07&&M<.13)D=0,Ke=!0;else if(M>=.13&&M<.16){const F=(M-.13)/.03;D=-Math.pow(F,2.2)*100,Ke=F<.9}else D=-100;document.documentElement.style.setProperty("--curtain-x",`${D.toFixed(2)}%`),document.body.classList.toggle("curtain--active",Ke);function Me(F,me,ne,ve,Ce){if(F<me)return{y:65,opacity:0};if(F>=me&&F<ne){const ue=(F-me)/(ne-me),Ve=1-Math.pow(1-ue,2.5);return{y:(1-Ve)*65,opacity:Ve}}else{if(F>=ne&&F<ve)return{y:0,opacity:1};if(F>=ve&&F<Ce){const ue=(F-ve)/(Ce-ve);return{y:-Math.pow(ue,2.2)*65,opacity:Math.max(1-ue*1.5,0)}}else return{y:-65,opacity:0}}}const T=Me(M,.16,.19,.26,.29),g=Me(M,.29,.32,.39,.42),k=Me(M,.42,.45,.52,.55),q=Me(M,.55,.58,.65,.68),Q=Me(M,.68,.71,.78,.82);document.documentElement.style.setProperty("--feat1-y",`${T.y.toFixed(2)}vh`),document.documentElement.style.setProperty("--feat1-opacity",`${T.opacity.toFixed(3)}`),document.documentElement.style.setProperty("--feat2-y",`${g.y.toFixed(2)}vh`),document.documentElement.style.setProperty("--feat2-opacity",`${g.opacity.toFixed(3)}`),document.documentElement.style.setProperty("--feat3-y",`${k.y.toFixed(2)}vh`),document.documentElement.style.setProperty("--feat3-opacity",`${k.opacity.toFixed(3)}`),document.documentElement.style.setProperty("--feat4-y",`${q.y.toFixed(2)}vh`),document.documentElement.style.setProperty("--feat4-opacity",`${q.opacity.toFixed(3)}`),document.documentElement.style.setProperty("--feat5-y",`${Q.y.toFixed(2)}vh`),document.documentElement.style.setProperty("--feat5-opacity",`${Q.opacity.toFixed(3)}`),document.body.classList.toggle("is--night-mode",de),v.setVisible(Fe),document.body.classList.toggle("is--free-rotate",Fe);const ge=(_e?_e.offsetTop:0)+(_e?_e.offsetHeight:0),j=window.scrollY+window.innerHeight>=ge-40;document.body.classList.toggle("dossier-revealed",j),fe(M)}window.addEventListener("scroll",Te,{passive:!0}),Te();function V(){const ee=t.clientWidth||window.innerWidth,Ae=t.clientHeight||window.innerHeight;a.aspect=ee/Ae,a.updateProjectionMatrix(),o.setSize(ee,Ae)}window.addEventListener("resize",V);let Y=new iu,he=!0;function be(){if(!he)return;requestAnimationFrame(be);const ee=Y.getDelta(),Ae=Date.now(),W=Ae%6e4/1e3,ie=-(W/60)*Math.PI*2;E.hands.second.rotation.z=ie;const le=new Date,ce=le.getMinutes()+W/60,de=-(ce/60)*Math.PI*2;E.hands.minute.rotation.z=de;const Le=-((le.getHours()%12+ce/60)/12)*Math.PI*2;E.hands.hour.rotation.z=Le;const Fe=Math.sin(Ae*.025)*.55;if(E.balanceWheel.rotation.z=Fe,te*=.94,se+=te,E.rotor.rotation.z=se,!A)if(M<.16)X=0,H=0,G=9.2,K=0,P||b.setExploded(!1);else if(M>=.16&&M<.29){const Me=(M-.16)/.13;X=0+Me*.12,H=0-.58*Me,G=9.2+Me*.8,K=window.innerWidth>900?1.3:0,P||b.setExploded(!1)}else if(M>=.29&&M<.42){const Me=(M-.29)/.13;X=.12*(1-Me)+.01*Me,H=-.58*(1-Me)+.06*Me,G=10*(1-Me)+6.8*Me,K=window.innerWidth>900?1.3:0,P||b.setExploded(!1)}else if(M>=.42&&M<.55){const Me=(M-.42)/.13;X=.01*(1-Me)+.02*Me,H=.06*(1-Me)+Math.PI*Me,G=6.8*(1-Me)+7.6*Me,K=window.innerWidth>900?1.3:0,te+=.02,P||b.setExploded(!1)}else if(M>=.55&&M<.68){const Me=(M-.55)/.13;X=.02*(1-Me)+.28*Me,H=Math.PI*(1-Me)+(Math.PI+.5)*Me,G=7.6*(1-Me)+13*Me,K=window.innerWidth>900?1.3:0,b.targetProgress=Math.max(Me,P?1:0)}else if(M>=.68&&M<.82){const Me=(M-.68)/.14;X=.28*(1-Me)+.1*Me,H=(Math.PI+.5)*(1-Me)+Math.PI*2*Me,G=13*(1-Me)+7.8*Me,K=window.innerWidth>900?1.3:0,b.targetProgress=0}else K=0,Ee||(X=.15,H+=ee*.25,G=10),b.targetProgress=P?1:0;const Ge=document.getElementById("launch-scroll-cue");Ge&&(M>.04?Ge.classList.add("is--hidden"):Ge.classList.remove("is--hidden")),b.update(ee),w+=(X-w)*.08,U+=(H-U)*.08,ae+=(K-ae)*.08,O+=(G-O)*.08,R.rotation.x=w,R.rotation.y=U,R.position.x=ae,a.position.z=O;const D=C?.04:.7,Ke=C?.1:3.8;c.intensity+=(D-c.intensity)*.1,d.intensity+=(Ke-d.intensity)*.1,v.update(a,R),o.render(s,a)}be();function fe(ee){const Ae=document.querySelectorAll(".vertical-timeline-tracker .timeline-step");let W=0;ee>=.05&&ee<.16?W=1:ee>=.16&&ee<.29?W=2:ee>=.29&&ee<.42?W=3:ee>=.42&&ee<.55?W=4:ee>=.55&&ee<.68?W=5:ee>=.68&&ee<.82?W=6:ee>=.82&&(W=7),Ae.forEach((le,ce)=>{le.classList.toggle("is--active",ce===W)});const ie=document.getElementById("scroll-progress-bar");ie&&(ie.style.width=`${(ee*100).toFixed(1)}%`)}return{toggleExploded(){return P=!P,b.setExploded(P),G=P?13:11,P},isExploded(){return P||b.progress>.5},setEdition(ee){const Ae=Vn.find(W=>W.id===ee);return Ae&&(I=Ae,E.updateEdition(Ae)),Ae},previewEdition(ee){const Ae=Vn.find(W=>W.id===ee);Ae&&(S=!0,E.updateEdition(Ae))},restoreEdition(){S&&(S=!1,E.updateEdition(I))},toggleNightLume(){return C=!C,E.setNightLume(C),C},isNightMode(){return C},setPresetView(ee){ee==="front"?(X=0,H=0,G=9.2):ee==="side"?(X=0,H=-Math.PI/2,G=8.5):ee==="back"?(X=0,H=Math.PI,G=7.6):ee==="angle"&&(X=.25,H=-.45,G=9.8)},focusOn(ee,Ae,W){X=ee,H=Ae,G=W},destroy(){he=!1,window.removeEventListener("resize",V),window.removeEventListener("scroll",Te),o.dispose(),t.innerHTML=""}}}function f0(){p0(),m0(),g0()}function p0(){document.querySelectorAll(".edition-card, .layer-card, .spec-tile, .movement-visual-card, .reserve-card").forEach(e=>{e.addEventListener("mouseenter",()=>{Zi.playClick(440,.015)})})}function m0(){document.querySelectorAll(".btn-swiss-primary, .hud-pill-btn, .hud-angle-btn, .watch-nav-link").forEach(e=>{e.addEventListener("mouseenter",()=>{Zi.playClick(580,.02)}),e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,s=t.clientY-n.top-n.height/2,a=.28;e.style.transform=`translate3d(${r*a}px, ${s*a}px, 0)`}),e.addEventListener("mouseleave",()=>{e.style.transform="translate3d(0, 0, 0)"})})}function g0(){const i=document.getElementById("cursor-dot"),e=document.getElementById("cursor-ring");if(!i||!e)return;let t=window.innerWidth/2,n=window.innerHeight/2,r=t,s=n;window.addEventListener("mousemove",l=>{t=l.clientX,n=l.clientY,i.style.transform=`translate3d(${t}px, ${n}px, 0)`});function a(){r+=(t-r)*.18,s+=(n-s)*.18,e.style.transform=`translate3d(${r}px, ${s}px, 0)`,requestAnimationFrame(a)}a(),document.querySelectorAll("button, a, input, select, .layer-card, .edition-card, .canvas-3d-target, .hud-edition-pill").forEach(l=>{l.addEventListener("mouseenter",()=>{e.classList.add("is--active")}),l.addEventListener("mouseleave",()=>{e.classList.remove("is--active")})})}var Ua={};(function i(e,t,n,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),M=C.getContext("2d");M.fillRect(0,0,1,1);var se=C.transferToImageBitmap();M.createPattern(se,"no-repeat")}catch{return!1}return!0}();function l(){}function c(C){var M=t.exports.Promise,se=M!==void 0?M:e.Promise;return typeof se=="function"?new se(C):(C(l,l),null)}var u=function(C,M){return{transform:function(se){if(C)return se;if(M.has(se))return M.get(se);var te=new OffscreenCanvas(se.width,se.height),Ee=te.getContext("2d");return Ee.drawImage(se,0,0),M.set(se,te),te},clear:function(){M.clear()}}}(o,new Map),d=function(){var C=Math.floor(16.666666666666668),M,se,te={},Ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(_e){var Te=Math.random();return te[Te]=requestAnimationFrame(function V(Y){Ee===Y||Ee+C-1<Y?(Ee=Y,delete te[Te],_e()):te[Te]=requestAnimationFrame(V)}),Te},se=function(_e){te[_e]&&cancelAnimationFrame(te[_e])}):(M=function(_e){return setTimeout(_e,C)},se=function(_e){return clearTimeout(_e)}),{frame:M,cancel:se}}(),h=function(){var C,M,se={};function te(Ee){function _e(Te,V){Ee.postMessage({options:Te||{},callback:V})}Ee.init=function(V){var Y=V.transferControlToOffscreen();Ee.postMessage({canvas:Y},[Y])},Ee.fire=function(V,Y,he){if(M)return _e(V,null),M;var be=Math.random().toString(36).slice(2);return M=c(function(fe){function ee(Ae){Ae.data.callback===be&&(delete se[be],Ee.removeEventListener("message",ee),M=null,u.clear(),he(),fe())}Ee.addEventListener("message",ee),_e(V,be),se[be]=ee.bind(null,{data:{callback:be}})}),M},Ee.reset=function(){Ee.postMessage({reset:!0});for(var V in se)se[V](),delete se[V]}}return function(){if(C)return C;if(!n&&s){var Ee=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([Ee])))}catch(_e){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",_e),null}te(C)}return C}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(C,M){return M?M(C):C}function y(C){return C!=null}function p(C,M,se){return _(C&&y(C[M])?C[M]:m[M],se)}function f(C){return C<0?0:Math.floor(C)}function R(C,M){return Math.floor(Math.random()*(M-C))+C}function I(C){return parseInt(C,16)}function S(C){return C.map(E)}function E(C){var M=String(C).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:I(M.substring(0,2)),g:I(M.substring(2,4)),b:I(M.substring(4,6))}}function b(C){var M=p(C,"origin",Object);return M.x=p(M,"x",Number),M.y=p(M,"y",Number),M}function P(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function v(C){var M=C.getBoundingClientRect();C.width=M.width,C.height=M.height}function A(C){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=C,M}function N(C,M,se,te,Ee,_e,Te,V,Y){C.save(),C.translate(M,se),C.rotate(_e),C.scale(te,Ee),C.arc(0,0,1,Te,V,Y),C.restore()}function L(C){var M=C.angle*(Math.PI/180),se=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-M+(.5*se-Math.random()*se),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function O(C,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var se=M.tick++/M.totalTicks,te=M.x+M.random*M.tiltCos,Ee=M.y+M.random*M.tiltSin,_e=M.wobbleX+M.random*M.tiltCos,Te=M.wobbleY+M.random*M.tiltSin;if(C.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-se)+")",C.beginPath(),a&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))C.fill(H(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(_e-te)*.1,Math.abs(Te-Ee)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var V=Math.PI/10*M.wobble,Y=Math.abs(_e-te)*.1,he=Math.abs(Te-Ee)*.1,be=M.shape.bitmap.width*M.scalar,fe=M.shape.bitmap.height*M.scalar,ee=new DOMMatrix([Math.cos(V)*Y,Math.sin(V)*Y,-Math.sin(V)*he,Math.cos(V)*he,M.x,M.y]);ee.multiplySelf(new DOMMatrix(M.shape.matrix));var Ae=C.createPattern(u.transform(M.shape.bitmap),"no-repeat");Ae.setTransform(ee),C.globalAlpha=1-se,C.fillStyle=Ae,C.fillRect(M.x-be/2,M.y-fe/2,be,fe),C.globalAlpha=1}else if(M.shape==="circle")C.ellipse?C.ellipse(M.x,M.y,Math.abs(_e-te)*M.ovalScalar,Math.abs(Te-Ee)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):N(C,M.x,M.y,Math.abs(_e-te)*M.ovalScalar,Math.abs(Te-Ee)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var W=Math.PI/2*3,ie=4*M.scalar,le=8*M.scalar,ce=M.x,de=M.y,Ue=5,Le=Math.PI/Ue;Ue--;)ce=M.x+Math.cos(W)*le,de=M.y+Math.sin(W)*le,C.lineTo(ce,de),W+=Le,ce=M.x+Math.cos(W)*ie,de=M.y+Math.sin(W)*ie,C.lineTo(ce,de),W+=Le;else C.moveTo(Math.floor(M.x),Math.floor(M.y)),C.lineTo(Math.floor(M.wobbleX),Math.floor(Ee)),C.lineTo(Math.floor(_e),Math.floor(Te)),C.lineTo(Math.floor(te),Math.floor(M.wobbleY));return C.closePath(),C.fill(),M.tick<M.totalTicks}function G(C,M,se,te,Ee){var _e=M.slice(),Te=C.getContext("2d"),V,Y,he=c(function(be){function fe(){V=Y=null,Te.clearRect(0,0,te.width,te.height),u.clear(),Ee(),be()}function ee(){n&&!(te.width===r.width&&te.height===r.height)&&(te.width=C.width=r.width,te.height=C.height=r.height),!te.width&&!te.height&&(se(C),te.width=C.width,te.height=C.height),Te.clearRect(0,0,te.width,te.height),_e=_e.filter(function(Ae){return O(Te,Ae)}),_e.length?V=d.frame(ee):fe()}V=d.frame(ee),Y=fe});return{addFettis:function(be){return _e=_e.concat(be),he},canvas:C,promise:he,reset:function(){V&&d.cancel(V),Y&&Y()}}}function w(C,M){var se=!C,te=!!p(M||{},"resize"),Ee=!1,_e=p(M,"disableForReducedMotion",Boolean),Te=s&&!!p(M||{},"useWorker"),V=Te?h():null,Y=se?P:v,he=C&&V?!!C.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,fe;function ee(W,ie,le){for(var ce=p(W,"particleCount",f),de=p(W,"angle",Number),Ue=p(W,"spread",Number),Le=p(W,"startVelocity",Number),Fe=p(W,"decay",Number),Ge=p(W,"gravity",Number),D=p(W,"drift",Number),Ke=p(W,"colors",S),Me=p(W,"ticks",Number),T=p(W,"shapes"),g=p(W,"scalar"),k=!!p(W,"flat"),q=b(W),Q=ce,pe=[],ge=C.width*q.x,j=C.height*q.y;Q--;)pe.push(L({x:ge,y:j,angle:de,spread:Ue,startVelocity:Le,color:Ke[Q%Ke.length],shape:T[R(0,T.length)],ticks:Me,decay:Fe,gravity:Ge,drift:D,scalar:g,flat:k}));return fe?fe.addFettis(pe):(fe=G(C,pe,Y,ie,le),fe.promise)}function Ae(W){var ie=_e||p(W,"disableForReducedMotion",Boolean),le=p(W,"zIndex",Number);if(ie&&be)return c(function(Le){Le()});se&&fe?C=fe.canvas:se&&!C&&(C=A(le),document.body.appendChild(C)),te&&!he&&Y(C);var ce={width:C.width,height:C.height};V&&!he&&V.init(C),he=!0,V&&(C.__confetti_initialized=!0);function de(){if(V){var Le={getBoundingClientRect:function(){if(!se)return C.getBoundingClientRect()}};Y(Le),V.postMessage({resize:{width:Le.width,height:Le.height}});return}ce.width=ce.height=null}function Ue(){fe=null,te&&(Ee=!1,e.removeEventListener("resize",de)),se&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,he=!1)}return te&&!Ee&&(Ee=!0,e.addEventListener("resize",de,!1)),V?V.fire(W,ce,Ue):ee(W,ce,Ue)}return Ae.reset=function(){V&&V.reset(),fe&&fe.reset()},Ae}var U;function X(){return U||(U=w(null,{useWorker:!0,resize:!0})),U}function H(C,M,se,te,Ee,_e,Te){var V=new Path2D(C),Y=new Path2D;Y.addPath(V,new DOMMatrix(M));var he=new Path2D;return he.addPath(Y,new DOMMatrix([Math.cos(Te)*Ee,Math.sin(Te)*Ee,-Math.sin(Te)*_e,Math.cos(Te)*_e,se,te])),he}function ae(C){if(!a)throw new Error("path confetti are not supported in this browser");var M,se;typeof C=="string"?M=C:(M=C.path,se=C.matrix);var te=new Path2D(M),Ee=document.createElement("canvas"),_e=Ee.getContext("2d");if(!se){for(var Te=1e3,V=Te,Y=Te,he=0,be=0,fe,ee,Ae=0;Ae<Te;Ae+=2)for(var W=0;W<Te;W+=2)_e.isPointInPath(te,Ae,W,"nonzero")&&(V=Math.min(V,Ae),Y=Math.min(Y,W),he=Math.max(he,Ae),be=Math.max(be,W));fe=he-V,ee=be-Y;var ie=10,le=Math.min(ie/fe,ie/ee);se=[le,0,0,le,-Math.round(fe/2+V)*le,-Math.round(ee/2+Y)*le]}return{type:"path",path:M,matrix:se}}function K(C){var M,se=1,te="#000000",Ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?M=C:(M=C.text,se="scalar"in C?C.scalar:se,Ee="fontFamily"in C?C.fontFamily:Ee,te="color"in C?C.color:te);var _e=10*se,Te=""+_e+"px "+Ee,V=new OffscreenCanvas(_e,_e),Y=V.getContext("2d");Y.font=Te;var he=Y.measureText(M),be=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),fe=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),ee=2,Ae=he.actualBoundingBoxLeft+ee,W=he.actualBoundingBoxAscent+ee;be+=ee+ee,fe+=ee+ee,V=new OffscreenCanvas(be,fe),Y=V.getContext("2d"),Y.font=Te,Y.fillStyle=te,Y.fillText(M,Ae,W);var ie=1/se;return{type:"bitmap",bitmap:V.transferToImageBitmap(),matrix:[ie,0,0,ie,-be*ie/2,-fe*ie/2]}}t.exports=function(){return X().apply(this,arguments)},t.exports.reset=function(){X().reset()},t.exports.create=w,t.exports.shapeFromPath=ae,t.exports.shapeFromText=K})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ua,!1);const _0=Ua.exports;Ua.exports.create;document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("loader"),e=document.getElementById("stopwatch-main"),t=document.getElementById("stopwatch-ms"),n=1250,r=performance.now(),s=23*60+59;function a(w){const U=w-r,X=Math.min(U/n,1),H=Math.max(0,(1-X)*s),ae=Math.floor(H/60),K=Math.floor(H%60),C=X>=1?0:Math.floor((1-X*24%1)*99),M=`${String(ae).padStart(2,"0")}:${String(K).padStart(2,"0")}`,se=`:${String(C).padStart(2,"0")}`;e&&(e.textContent=M),t&&(t.textContent=se),X<1?requestAnimationFrame(a):setTimeout(()=>{i&&i.classList.add("is--hidden"),document.body.classList.add("hero-revealed"),document.querySelectorAll(".hero-metrics-ribbon .counter-number").forEach(te=>va(te))},100)}requestAnimationFrame(a);let o=null;try{o=d0("canvas-wrapper","watch-hotspots-overlay")}catch(w){console.error("Three.js Watch Viewer failed to initialize:",w)}const l=document.getElementById("nav-sound-btn"),c=document.getElementById("sound-icon"),u=document.getElementById("sound-label");l&&l.addEventListener("click",()=>{const w=Zi.toggleMute();l.classList.toggle("is--active",w),c&&(c.textContent=w?"🔊":"🔇"),u&&(u.textContent=w?"Escapement ON":"Sound OFF")});let d=Vn[0];const h=document.getElementById("hud-editions-container");h&&(h.innerHTML=Vn.map((w,U)=>`
      <button class="hud-edition-pill ${U===0?"is--active":""}" data-edition-id="${w.id}">
        <span class="edition-swatch" style="background-color: ${w.dialColor}; border-color: ${w.caseColor}"></span>
        <span>${w.id.toUpperCase()}</span>
      </button>
    `).join(""),h.querySelectorAll(".hud-edition-pill").forEach(w=>{const U=w.getAttribute("data-edition-id");w.addEventListener("click",()=>{E(U)}),w.addEventListener("mouseenter",()=>{o&&o.previewEdition(U)}),w.addEventListener("mouseleave",()=>{o&&o.restoreEdition()})}));const m=document.getElementById("hud-explode-btn"),_=document.getElementById("explode-btn-text");m&&o&&m.addEventListener("click",()=>{const w=o.toggleExploded();m.classList.toggle("is--active",w),_&&(_.textContent=w?"Assemble Watch":"Explode Calibre")});const y=document.getElementById("hud-lume-btn"),p=document.getElementById("nav-lume-btn");function f(){if(!o)return;const w=o.toggleNightLume();document.body.classList.toggle("is--night-mode",w),y&&y.classList.toggle("is--active",w),p&&(p.classList.toggle("is--active",w),p.querySelector(".lume-label").textContent=w?"Studio Mode":"Lume Mode")}y==null||y.addEventListener("click",f),p==null||p.addEventListener("click",f),document.querySelectorAll(".hud-angle-btn").forEach(w=>{w.addEventListener("click",()=>{document.querySelectorAll(".hud-angle-btn").forEach(X=>X.classList.remove("is--active")),w.classList.add("is--active");const U=w.getAttribute("data-angle");o&&o.setPresetView(U)})});const R=document.getElementById("layers-breakdown-container");R&&(R.innerHTML=bs.map((w,U)=>`
      <div class="layer-card scroll-reveal stagger-${U%8+1}">
        <div>
          <span class="layer-num">LAYER 0${U+1}</span>
          <h3 class="layer-title">${w.name}</h3>
          <p class="layer-metric">${w.metric}</p>
          <p class="layer-desc">${w.description}</p>
        </div>
      </div>
    `).join(""));const I=document.getElementById("editions-cards-container");I&&(I.innerHTML=Vn.map((w,U)=>`
      <div class="edition-card scroll-reveal stagger-${U%4+1} ${U===0?"is--selected":""}" data-card-edition="${w.id}">
        <div>
          <div class="edition-badge-bar">
            <span class="mono-badge">EDITION 0${U+1}</span>
            <span class="edition-color-pip" style="background:${w.dialColor}; border-color:${w.caseColor}"></span>
          </div>
          <h3 class="edition-title">${w.name}</h3>
          <p class="edition-subtitle">${w.subtitle}</p>
          <p class="edition-desc">${w.description}</p>
        </div>
        <div class="edition-price-row">
          <span class="edition-price">${w.price}</span>
          <button class="btn-select-edition">${U===0?"Active":"Configure"}</button>
        </div>
      </div>
    `).join(""),I.querySelectorAll(".edition-card").forEach(w=>{const U=w.getAttribute("data-card-edition");w.addEventListener("click",()=>{E(U)}),w.addEventListener("mouseenter",()=>{o&&o.previewEdition(U)}),w.addEventListener("mouseleave",()=>{o&&o.restoreEdition()})}));const S=document.getElementById("specs-table-container");S&&(S.innerHTML=nc.map((w,U)=>`
      <div class="specs-row scroll-reveal stagger-${U%6+1}">
        <span class="specs-label">${w.label.toUpperCase()}</span>
        <span class="specs-value">${w.value}</span>
      </div>
    `).join(""));function E(w){const U=Vn.find(K=>K.id===w);if(!U)return;d=U,o&&o.setEdition(w),document.querySelectorAll(".hud-edition-pill").forEach(K=>{K.classList.toggle("is--active",K.getAttribute("data-edition-id")===w)}),document.querySelectorAll(".edition-card").forEach(K=>{const C=K.getAttribute("data-card-edition")===w;K.classList.toggle("is--selected",C);const M=K.querySelector(".btn-select-edition");M&&(M.textContent=C?"Active":"Configure")});const X=document.getElementById("header-price"),H=document.getElementById("reserve-price-display"),ae=document.getElementById("reserve-active-edition");X&&(X.textContent=U.price),H&&(H.textContent=U.price),ae&&(ae.textContent=`${U.name} (${U.dialName})`)}const b=document.getElementById("reserve-form"),P=document.getElementById("order-modal"),v=document.getElementById("modal-close"),A=document.getElementById("modal-dismiss-btn"),N=document.getElementById("modal-summary-text"),L=document.getElementById("modal-serial-code");b&&b.addEventListener("submit",w=>{w.preventDefault();const U=document.getElementById("caseback-engraving"),X=(U==null?void 0:U.value.trim())||"NONE",H=`SN-60P-${Math.floor(1e3+Math.random()*9e3)}`;L&&(L.textContent=H),N&&(N.innerHTML=`
          Your commission for <strong>${d.name}</strong> (${d.price}) has been prioritized in atelier queue. 
          Caseback Engraving: <em>"${X}"</em>.
        `),P&&P.classList.add("is--open");try{_0({particleCount:60,spread:70,origin:{y:.6},colors:["#0A0A0C","#0284C7","#E2E8F0","#38BDF8"]})}catch{}});function O(){P&&P.classList.remove("is--open")}v==null||v.addEventListener("click",O),A==null||A.addEventListener("click",O),window.addEventListener("keydown",w=>{w.key==="Escape"&&(P!=null&&P.classList.contains("is--open"))&&O()}),document.querySelectorAll(".timeline-step").forEach(w=>{w.style.pointerEvents="auto",w.style.cursor="pointer",w.addEventListener("click",()=>{const U=parseInt(w.getAttribute("data-step")||"0",10),X=["story-launch","story-identity","story-sapphire","story-dial","story-movement","story-rotor","story-exploded","specs-dossier"],H=document.getElementById(X[U]);H&&H.scrollIntoView({behavior:"smooth"})})}),v0(),f0(),x0();function G(){const w=document.getElementById("scrolly-narrative"),U=w?w.offsetHeight:document.documentElement.scrollHeight,X=Math.max(U-window.innerHeight,1),ae=Math.min(Math.max(window.scrollY/X,0),1)>=.82;document.body.classList.toggle("story-completed",ae)}window.addEventListener("scroll",G,{passive:!0}),G()});function v0(){const i=document.querySelectorAll(".scroll-reveal"),e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is--revealed"),r.target.querySelectorAll(".counter-number").forEach(a=>va(a)),r.target.classList.contains("counter-number")&&va(r.target),e.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});i.forEach(n=>e.observe(n));const t=new IntersectionObserver(n=>{n.forEach(r=>{const s=r.target.id;r.isIntersecting?(r.target.classList.add("is--active"),s==="story-identity"&&document.body.classList.add("step-identity-active"),s==="story-dial"&&document.body.classList.add("step-dial-active"),s==="story-movement"&&document.body.classList.add("step-movement-active"),s==="story-rotor"&&document.body.classList.add("step-rotor-active"),s==="story-exploded"&&document.body.classList.add("step-exploded-active")):(r.target.classList.remove("is--active"),s==="story-identity"&&document.body.classList.remove("step-identity-active"),s==="story-dial"&&document.body.classList.remove("step-dial-active"),s==="story-movement"&&document.body.classList.remove("step-movement-active"),s==="story-rotor"&&document.body.classList.remove("step-rotor-active"),s==="story-exploded"&&document.body.classList.remove("step-exploded-active"))})},{threshold:.55,rootMargin:"-80px 0px -80px 0px"});document.querySelectorAll(".story-step").forEach(n=>t.observe(n))}function va(i){if(i.dataset.animated==="true")return;i.dataset.animated="true";const e=parseFloat(i.dataset.target)||0,t=i.dataset.format,n=i.dataset.suffix||"",r=1400,s=performance.now();function a(o){const l=o-s,c=Math.min(l/r,1),u=1-Math.pow(1-c,3),d=Math.floor(e*u);let h=d.toString();if(t==="comma"&&(h=d.toLocaleString()),i.textContent=h+n,c<1)requestAnimationFrame(a);else{let m=e.toString();t==="comma"&&(m=e.toLocaleString()),i.textContent=m+n}}requestAnimationFrame(a)}function x0(){const i=document.querySelector(".hero-editorial-top"),e=document.querySelector(".watch-hud-toolbar");window.addEventListener("mousemove",t=>{const n=(t.clientX/window.innerWidth-.5)*2,r=(t.clientY/window.innerHeight-.5)*2;i&&(i.style.transform=`translate3d(${n*6}px, ${r*4}px, 0)`),e&&(e.style.transform=`translate3d(calc(-50% + ${n*8}px), ${r*5}px, 0)`)})}
