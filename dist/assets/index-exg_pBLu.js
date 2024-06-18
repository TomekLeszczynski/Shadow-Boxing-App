const __vite__fileDeps=["assets/BasicTrainingDisplay-CEU6HRot.js","assets/nextCommandDelay-CUy3jAid.js","assets/AdvancedTrainingDisplay-D4BW-vTq.js","assets/SignupView-C1QW4CuN.js","assets/ProcessingLabel.vue_vue_type_script_setup_true_lang-CMewoVnT.js","assets/index-DZ5iST2V.js","assets/LoginView-D6Um6UaE.js","assets/PasswordResetView-CsXTllyh.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Le={},as=[],Ut=()=>{},Qy=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pl=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yy=Object.prototype.hasOwnProperty,Te=(t,e)=>Yy.call(t,e),ie=Array.isArray,cs=t=>Ui(t)==="[object Map]",bs=t=>Ui(t)==="[object Set]",Mh=t=>Ui(t)==="[object Date]",he=t=>typeof t=="function",ze=t=>typeof t=="string",An=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",fp=t=>(Ne(t)||he(t))&&he(t.then)&&he(t.catch),pp=Object.prototype.toString,Ui=t=>pp.call(t),Xy=t=>Ui(t).slice(8,-1),mp=t=>Ui(t)==="[object Object]",kl=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jy=/-(\w)/g,un=_a(t=>t.replace(Jy,(e,n)=>n?n.toUpperCase():"")),Zy=/\B([A-Z])/g,Ss=_a(t=>t.replace(Zy,"-$1").toLowerCase()),ya=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=_a(t=>t?`on${ya(t)}`:""),or=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ev=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let Fh;const _p=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?sv(r):xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ne(t))return t}const tv=/;(?![^(]*\))/g,nv=/:([^]+)/,rv=/\/\*[^]*?\*\//g;function sv(t){const e={};return t.replace(rv,"").split(tv).forEach(n=>{if(n){const r=n.split(nv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bi(t){let e="";if(ze(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Bi(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ov=Sl(iv);function yp(t){return!!t||t===""}function av(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Mr(t[r],e[r]);return n}function Mr(t,e){if(t===e)return!0;let n=Mh(t),r=Mh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=An(t),r=An(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?av(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Mr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ol(t,e){return t.findIndex(n=>Mr(n,e))}const Ei=t=>ze(t)?t:t==null?"":ie(t)||Ne(t)&&(t.toString===pp||!he(t.toString))?JSON.stringify(t,vp,2):String(t),vp=(t,e)=>e&&e.__v_isRef?vp(t,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:An(e)?pc(e):Ne(e)&&!ie(e)&&!mp(e)?String(e):e,pc=(t,e="")=>{var n;return An(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class Ep{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wp(t){return new Ep(t)}function cv(t,e=kt){e&&e.active&&e.effects.push(t)}function Tp(){return kt}function lv(t){kt&&kt.cleanups.push(t)}let xr;class Nl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cv(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(uv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),mr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=er,n=xr;try{return er=!0,xr=this,this._runnings++,Uh(this),this.fn()}finally{Bh(this),this._runnings--,xr=n,er=e}}stop(){this.active&&(Uh(this),Bh(this),this.onStop&&this.onStop(),this.active=!1)}}function uv(t){return t.value}function Uh(t){t._trackId++,t._depsLength=0}function Bh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ip(t.deps[e],t);t.deps.length=t._depsLength}}function Ip(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let er=!0,Mc=0;const Ap=[];function pr(){Ap.push(er),er=!1}function mr(){const t=Ap.pop();er=t===void 0?!0:t}function Dl(){Mc++}function Vl(){for(Mc--;!Mc&&Fc.length;)Fc.shift()()}function Rp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ip(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fc=[];function bp(t,e,n){Dl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Fc.push(r.scheduler)))}Vl()}const Sp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Go=new WeakMap,Or=Symbol(""),Uc=Symbol("");function bt(t,e,n){if(er&&xr){let r=Go.get(t);r||Go.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Sp(()=>r.delete(n))),Rp(xr,s)}}function Tn(t,e,n,r,s,i){const o=Go.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(r);o.forEach((h,d)=>{(d==="length"||!An(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ie(t)?kl(n)&&c.push(o.get("length")):(c.push(o.get(Or)),cs(t)&&c.push(o.get(Uc)));break;case"delete":ie(t)||(c.push(o.get(Or)),cs(t)&&c.push(o.get(Uc)));break;case"set":cs(t)&&c.push(o.get(Or));break}Dl();for(const l of c)l&&bp(l,4);Vl()}function hv(t,e){const n=Go.get(t);return n&&n.get(e)}const dv=Sl("__proto__,__v_isRef,__isVue"),Pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(An)),$h=fv();function fv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pr(),Dl();const r=Ie(this)[e].apply(this,n);return Vl(),mr(),r}}),t}function pv(t){An(t)||(t=String(t));const e=Ie(this);return bt(e,"has",t),e.hasOwnProperty(t)}class Cp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Sv:Np:i?Op:xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){if(o&&Te($h,n))return Reflect.get($h,n,r);if(n==="hasOwnProperty")return pv}const c=Reflect.get(e,n,r);return(An(n)?Pp.has(n):dv(n))||(s||bt(e,"get",n),i)?c:Ze(c)?o&&kl(n)?c:c.value:Ne(c)?s?Vp(c):$i(c):c}}class kp extends Cp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=wi(i);if(!Qo(r)&&!wi(r)&&(i=Ie(i),r=Ie(r)),!ie(e)&&Ze(i)&&!Ze(r))return l?!1:(i.value=r,!0)}const o=ie(e)&&kl(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?or(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!An(n)||!Pp.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",ie(e)?"length":Or),Reflect.ownKeys(e)}}class mv extends Cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gv=new kp,_v=new mv,yv=new kp(!0);const Ll=t=>t,va=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(or(e,i)&&bt(s,"get",e),bt(s,"get",i));const{has:o}=va(s),c=r?Ll:n?Bl:Ti;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(or(t,s)&&bt(r,"has",t),bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vo(t,e=!1){return t=t.__v_raw,!e&&bt(Ie(t),"iterate",Or),Reflect.get(t,"size",t)}function jh(t){t=Ie(t);const e=Ie(this);return va(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function qh(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=va(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?or(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Hh(t){const e=Ie(this),{has:n,get:r}=va(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tn(e,"delete",t,void 0),i}function zh(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function Eo(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?Ll:t?Bl:Ti;return!t&&bt(c,"iterate",Or),o.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function wo(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=cs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Ll:e?Bl:Ti;return!e&&bt(i,"iterate",l?Uc:Or),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Fn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vv(){const t={get(i){return _o(this,i)},get size(){return vo(this)},has:yo,add:jh,set:qh,delete:Hh,clear:zh,forEach:Eo(!1,!1)},e={get(i){return _o(this,i,!1,!0)},get size(){return vo(this)},has:yo,add:jh,set:qh,delete:Hh,clear:zh,forEach:Eo(!1,!0)},n={get(i){return _o(this,i,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Eo(!0,!1)},r={get(i){return _o(this,i,!0,!0)},get size(){return vo(this,!0)},has(i){return yo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wo(i,!1,!1),n[i]=wo(i,!0,!1),e[i]=wo(i,!1,!0),r[i]=wo(i,!0,!0)}),[t,n,e,r]}const[Ev,wv,Tv,Iv]=vv();function Ml(t,e){const n=e?t?Iv:Tv:t?wv:Ev;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const Av={get:Ml(!1,!1)},Rv={get:Ml(!1,!0)},bv={get:Ml(!0,!1)};const xp=new WeakMap,Op=new WeakMap,Np=new WeakMap,Sv=new WeakMap;function Pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cv(t){return t.__v_skip||!Object.isExtensible(t)?0:Pv(Xy(t))}function $i(t){return wi(t)?t:Fl(t,!1,gv,Av,xp)}function Dp(t){return Fl(t,!1,yv,Rv,Op)}function Vp(t){return Fl(t,!0,_v,bv,Np)}function Fl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cv(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Nr(t){return wi(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Ul(t){return Object.isExtensible(t)&&gp(t,"__v_skip",!0),t}const Ti=t=>Ne(t)?$i(t):t,Bl=t=>Ne(t)?Vp(t):t;class Mp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Nl(()=>e(this._value),()=>No(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&or(e._value,e._value=e.effect.run())&&No(e,4),Fp(e),e.effect._dirtyLevel>=2&&No(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function kv(t,e,n=!1){let r,s;const i=he(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new Mp(r,s,i||!s,n)}function Fp(t){var e;er&&xr&&(t=Ie(t),Rp(xr,(e=t.dep)!=null?e:t.dep=Sp(()=>t.dep=void 0,t instanceof Mp?t:void 0)))}function No(t,e=4,n){t=Ie(t);const r=t.dep;r&&bp(r,e)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function ar(t){return Up(t,!1)}function xv(t){return Up(t,!0)}function Up(t,e){return Ze(t)?t:new Ov(t,e)}class Ov{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Ti(e)}get value(){return Fp(this),this._value}set value(e){const n=this.__v_isShallow||Qo(e)||wi(e);e=n?e:Ie(e),or(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ti(e),No(this,4))}}function lt(t){return Ze(t)?t.value:t}const Nv={get:(t,e,n)=>lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bp(t){return Nr(t)?t:new Proxy(t,Nv)}function Dv(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Lv(t,n);return e}class Vv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hv(Ie(this._object),this._key)}}function Lv(t,e,n){const r=t[e];return Ze(r)?r:new Vv(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(t,e,n,r){try{return r?t(...r):t()}catch(s){Ea(s,e,n)}}function Bt(t,e,n,r){if(he(t)){const s=tr(t,e,n,r);return s&&fp(s)&&s.catch(i=>{Ea(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){pr(),tr(l,null,10,[t,o,c]),mr();return}}Mv(t,n,s,r)}function Mv(t,e,n,r=!0){console.error(t)}let Ii=!1,Bc=!1;const _t=[];let nn=0;const ls=[];let Hn=null,Sr=0;const $p=Promise.resolve();let $l=null;function wa(t){const e=$l||$p;return t?e.then(this?t.bind(this):t):e}function Fv(t){let e=nn+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Ai(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function jl(t){(!_t.length||!_t.includes(t,Ii&&t.allowRecurse?nn+1:nn))&&(t.id==null?_t.push(t):_t.splice(Fv(t.id),0,t),jp())}function jp(){!Ii&&!Bc&&(Bc=!0,$l=$p.then(Hp))}function Uv(t){const e=_t.indexOf(t);e>nn&&_t.splice(e,1)}function Bv(t){ie(t)?ls.push(...t):(!Hn||!Hn.includes(t,t.allowRecurse?Sr+1:Sr))&&ls.push(t),jp()}function Kh(t,e,n=Ii?nn+1:0){for(;n<_t.length;n++){const r=_t[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r()}}}function qp(t){if(ls.length){const e=[...new Set(ls)].sort((n,r)=>Ai(n)-Ai(r));if(ls.length=0,Hn){Hn.push(...e);return}for(Hn=e,Sr=0;Sr<Hn.length;Sr++)Hn[Sr]();Hn=null,Sr=0}}const Ai=t=>t.id==null?1/0:t.id,$v=(t,e)=>{const n=Ai(t)-Ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hp(t){Bc=!1,Ii=!0,_t.sort($v);try{for(nn=0;nn<_t.length;nn++){const e=_t[nn];e&&e.active!==!1&&tr(e,null,14)}}finally{nn=0,_t.length=0,qp(),Ii=!1,$l=null,(_t.length||ls.length)&&Hp()}}function jv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[d]||Le;m&&(s=n.map(I=>ze(I)?I.trim():I)),p&&(s=n.map(Wo))}let c,l=r[c=fc(e)]||r[c=fc(un(e))];!l&&i&&(l=r[c=fc(Ss(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function zp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const d=zp(h,e,!0);d&&(c=!0,Xe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):Xe(o,i),Ne(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Ss(e))||Te(t,e))}let Ye=null,Kp=null;function Yo(t){const e=Ye;return Ye=t,Kp=t&&t.type.__scopeId||null,e}function Rn(t,e=Ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=Yo(e);let o;try{o=t(...s)}finally{Yo(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:I,ctx:P,inheritAttrs:O}=t,x=Yo(t);let M,B;try{if(n.shapeFlag&4){const W=s||r,ne=W;M=tn(h.call(ne,W,d,p,I,m,P)),B=c}else{const W=e;M=tn(W.length>1?W(p,{attrs:c,slots:o,emit:l}):W(p,null)),B=e.props?c:qv(c)}}catch(W){ui.length=0,Ea(W,t,1),M=Se(Ot)}let j=M;if(B&&O!==!1){const W=Object.keys(B),{shapeFlag:ne}=j;W.length&&ne&7&&(i&&W.some(Pl)&&(B=Hv(B,i)),j=cr(j,B,!1,!0))}return n.dirs&&(j=cr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),M=j,Yo(x),M}const qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},Hv=(t,e)=>{const n={};for(const r in t)(!Pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ta(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Wh(r,o,h):!0:!!o;return!1}function Wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function Kv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wp="components";function Ia(t,e){return Qp(Wp,t,!0,e)||t}const Gp=Symbol.for("v-ndc");function $c(t){return ze(t)?Qp(Wp,t,!1)||t:t||Gp}function Qp(t,e,n=!0,r=!1){const s=Ye||nt;if(s){const i=s.type;{const c=qE(i,!1);if(c&&(c===e||c===un(e)||c===ya(un(e))))return i}const o=Gh(s[t]||i[t],e)||Gh(s.appContext[t],e);return!o&&r?i:o}}function Gh(t,e){return t&&(t[e]||t[un(e)]||t[ya(un(e))])}const Wv=t=>t.__isSuspense;function Gv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Bv(t)}const Qv=Symbol.for("v-scx"),Yv=()=>$t(Qv),To={};function ai(t,e,n){return Yp(t,e,n)}function Yp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Le){if(e&&i){const Q=e;e=(...R)=>{Q(...R),ne()}}const l=nt,h=Q=>r===!0?Q:Cr(Q,r===!1?1:void 0);let d,p=!1,m=!1;if(Ze(t)?(d=()=>t.value,p=Qo(t)):Nr(t)?(d=()=>h(t),p=!0):ie(t)?(m=!0,p=t.some(Q=>Nr(Q)||Qo(Q)),d=()=>t.map(Q=>{if(Ze(Q))return Q.value;if(Nr(Q))return h(Q);if(he(Q))return tr(Q,l,2)})):he(t)?e?d=()=>tr(t,l,2):d=()=>(I&&I(),Bt(t,l,3,[P])):d=Ut,e&&r){const Q=d;d=()=>Cr(Q())}let I,P=Q=>{I=j.onStop=()=>{tr(Q,l,4),I=j.onStop=void 0}},O;if(Pa)if(P=Ut,e?n&&Bt(e,l,3,[d(),m?[]:void 0,P]):d(),s==="sync"){const Q=Yv();O=Q.__watcherHandles||(Q.__watcherHandles=[])}else return Ut;let x=m?new Array(t.length).fill(To):To;const M=()=>{if(!(!j.active||!j.dirty))if(e){const Q=j.run();(r||p||(m?Q.some((R,_)=>or(R,x[_])):or(Q,x)))&&(I&&I(),Bt(e,l,3,[Q,x===To?void 0:m&&x[0]===To?[]:x,P]),x=Q)}else j.run()};M.allowRecurse=!!e;let B;s==="sync"?B=M:s==="post"?B=()=>Rt(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),B=()=>jl(M));const j=new Nl(d,Ut,B),W=Tp(),ne=()=>{j.stop(),W&&Cl(W.effects,j)};return e?n?M():x=j.run():s==="post"?Rt(j.run.bind(j),l&&l.suspense):j.run(),O&&O.push(ne),ne}function Xv(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Xp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=qi(this),c=Yp(s,i.bind(r),n);return o(),c}function Xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Cr(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ze(t))Cr(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Cr(t[r],e,n);else if(bs(t)||cs(t))t.forEach(r=>{Cr(r,e,n)});else if(mp(t))for(const r in t)Cr(t[r],e,n);return t}function ex(t,e){if(Ye===null)return t;const n=Ca(Ye)||Ye.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Le]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Cr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(pr(),Bt(l,n,8,[t.el,c,t,e]),mr())}}const zn=Symbol("_leaveCb"),Io=Symbol("_enterCb");function Jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{t.isMounted=!0}),nm(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Jp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Zv={name:"BaseTransition",props:Jp,setup(t,{slots:e}){const n=FE(),r=Jv();return()=>{const s=e.default&&em(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==Ot){i=m;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return gc(i);const l=Qh(i);if(!l)return gc(i);const h=jc(l,o,r,n);qc(l,h);const d=n.subTree,p=d&&Qh(d);if(p&&p.type!==Ot&&!Pr(l,p)){const m=jc(p,o,r,n);if(qc(p,m),c==="out-in"&&l.type!==Ot)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},gc(i);c==="in-out"&&l.type!==Ot&&(m.delayLeave=(I,P,O)=>{const x=Zp(r,p);x[String(p.key)]=p,I[zn]=()=>{P(),I[zn]=void 0,delete h.delayedLeave},h.delayedLeave=O})}return i}}},eE=Zv;function Zp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function jc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:I,onLeaveCancelled:P,onBeforeAppear:O,onAppear:x,onAfterAppear:M,onAppearCancelled:B}=e,j=String(t.key),W=Zp(n,t),ne=(_,y)=>{_&&Bt(_,r,9,y)},Q=(_,y)=>{const w=y[1];ne(_,y),ie(_)?_.every(b=>b.length<=1)&&w():_.length<=1&&w()},R={mode:i,persisted:o,beforeEnter(_){let y=c;if(!n.isMounted)if(s)y=O||c;else return;_[zn]&&_[zn](!0);const w=W[j];w&&Pr(t,w)&&w.el[zn]&&w.el[zn](),ne(y,[_])},enter(_){let y=l,w=h,b=d;if(!n.isMounted)if(s)y=x||l,w=M||h,b=B||d;else return;let A=!1;const E=_[Io]=Ce=>{A||(A=!0,Ce?ne(b,[_]):ne(w,[_]),R.delayedLeave&&R.delayedLeave(),_[Io]=void 0)};y?Q(y,[_,E]):E()},leave(_,y){const w=String(t.key);if(_[Io]&&_[Io](!0),n.isUnmounting)return y();ne(p,[_]);let b=!1;const A=_[zn]=E=>{b||(b=!0,y(),E?ne(P,[_]):ne(I,[_]),_[zn]=void 0,W[w]===t&&delete W[w])};W[w]=t,m?Q(m,[_,A]):A()},clone(_){return jc(_,e,n,r)}};return R}function gc(t){if(Aa(t))return t=cr(t),t.children=null,t}function Qh(t){if(!Aa(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function qc(t,e){t.shapeFlag&6&&t.component?qc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function em(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&s++,r=r.concat(em(o.children,e,c))):(e||o.type!==Ot)&&r.push(c!=null?cr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function At(t,e){return he(t)?Xe({name:t.name},e,{setup:t}):t}const ci=t=>!!t.type.__asyncLoader,Aa=t=>t.type.__isKeepAlive;function tE(t,e){tm(t,"a",e)}function nE(t,e){tm(t,"da",e)}function tm(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Aa(s.parent.vnode)&&rE(r,e,n,s),s=s.parent}}function rE(t,e,n,r){const s=Ra(e,t,r,!0);rm(()=>{Cl(r[e],s)},n)}function Ra(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pr();const c=qi(n),l=Bt(e,n,t,o);return c(),mr(),l});return r?s.unshift(i):s.push(i),i}}const kn=t=>(e,n=nt)=>(!Pa||t==="sp")&&Ra(t,(...r)=>e(...r),n),sE=kn("bm"),ba=kn("m"),iE=kn("bu"),oE=kn("u"),nm=kn("bum"),rm=kn("um"),aE=kn("sp"),cE=kn("rtg"),lE=kn("rtc");function uE(t,e=nt){Ra("ec",t,e)}function Hc(t,e,n,r){let s;const i=n;if(ie(t)||ze(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function tx(t,e,n={},r,s){if(Ye.isCE||Ye.parent&&ci(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),Se("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),be();const o=i&&sm(i(n)),c=hn(at,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function sm(t){return t.some(e=>Jo(e)?!(e.type===Ot||e.type===at&&!sm(e.children)):!0)?t:null}const zc=t=>t?vm(t)?Ca(t)||t.proxy:zc(t.parent):null,li=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zc(t.parent),$root:t=>zc(t.root),$emit:t=>t.emit,$options:t=>ql(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,jl(t.update)}),$nextTick:t=>t.n||(t.n=wa.bind(t.proxy)),$watch:t=>Xv.bind(t)}),_c=(t,e)=>t!==Le&&!t.__isScriptSetup&&Te(t,e),hE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_c(r,e))return o[e]=1,r[e];if(s!==Le&&Te(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Te(h,e))return o[e]=3,i[e];if(n!==Le&&Te(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const d=li[e];let p,m;if(d)return e==="$attrs"&&bt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Le&&Te(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Te(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _c(s,e)?(s[e]=n,!0):r!==Le&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Le&&Te(t,o)||_c(e,o)||(c=i[0])&&Te(c,o)||Te(r,o)||Te(li,o)||Te(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function dE(t){const e=ql(t),n=t.proxy,r=t.ctx;Kc=!1,e.beforeCreate&&Xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:I,updated:P,activated:O,deactivated:x,beforeDestroy:M,beforeUnmount:B,destroyed:j,unmounted:W,render:ne,renderTracked:Q,renderTriggered:R,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:b,components:A,directives:E,filters:Ce}=e;if(h&&fE(h,r,null),o)for(const ye in o){const me=o[ye];he(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Ne(ye)&&(t.data=$i(ye))}if(Kc=!0,i)for(const ye in i){const me=i[ye],St=he(me)?me.bind(n,n):he(me.get)?me.get.bind(n,n):Ut,qt=!he(me)&&he(me.set)?me.set.bind(n):Ut,Dt=xt({get:St,set:qt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Fe=>Dt.value=Fe})}if(c)for(const ye in c)im(c[ye],r,n,ye);if(l){const ye=he(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{Do(me,ye[me])})}d&&Xh(d,t,"c");function pe(ye,me){ie(me)?me.forEach(St=>ye(St.bind(n))):me&&ye(me.bind(n))}if(pe(sE,p),pe(ba,m),pe(iE,I),pe(oE,P),pe(tE,O),pe(nE,x),pe(uE,_),pe(lE,Q),pe(cE,R),pe(nm,B),pe(rm,W),pe(aE,y),ie(w))if(w.length){const ye=t.exposed||(t.exposed={});w.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:St=>n[me]=St})})}else t.exposed||(t.exposed={});ne&&t.render===Ut&&(t.render=ne),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),E&&(t.directives=E)}function fE(t,e,n=Ut){ie(t)&&(t=Wc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),Ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Xh(t,e,n){Bt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function im(t,e,n,r){const s=r.includes(".")?Xp(n,r):()=>n[r];if(ze(t)){const i=e[t];he(i)&&ai(s,i)}else if(he(t))ai(s,t.bind(n));else if(Ne(t))if(ie(t))t.forEach(i=>im(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&ai(s,i,t)}}function ql(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Xo(l,h,o,!0)),Xo(l,e,o)),Ne(e)&&i.set(e,l),l}function Xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xo(t,i,n,!0),s&&s.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=pE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const pE={data:Jh,props:Zh,emits:Zh,methods:Zs,computed:Zs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Zs,directives:Zs,watch:gE,provide:Jh,inject:mE};function Jh(t,e){return e?t?function(){return Xe(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function mE(t,e){return Zs(Wc(t),Wc(e))}function Wc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?Xe(Object.create(null),t,e):e}function Zh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Yh(t),Yh(e??{})):e}function gE(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function om(){return{app:null,config:{isNativeTag:Qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _E=0;function yE(t,e){return function(r,s=null){he(r)||(r=Xe({},r)),s!=null&&!Ne(s)&&(s=null);const i=om(),o=new WeakSet;let c=!1;const l=i.app={_uid:_E++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zE,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(l,...d)):he(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const m=Se(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),c=!0,l._container=h,h.__vue_app__=l,Ca(m.component)||m.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=us;us=l;try{return h()}finally{us=d}}};return l}}let us=null;function Do(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=nt||Ye;if(r||us){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:us._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function vE(){return!!(nt||Ye||us)}const am={},cm=()=>Object.create(am),lm=t=>Object.getPrototypeOf(t)===am;function EE(t,e,n,r=!1){const s={},i=cm();t.propsDefaults=Object.create(null),um(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ta(t.emitsOptions,m))continue;const I=e[m];if(l)if(Te(i,m))I!==i[m]&&(i[m]=I,h=!0);else{const P=un(m);s[P]=Gc(l,c,P,I,t,!1)}else I!==i[m]&&(i[m]=I,h=!0)}}}else{um(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=Ss(p))===p||!Te(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Gc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function um(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(oi(l))continue;const h=e[l];let d;s&&Te(s,d=un(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Ta(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ie(n),h=c||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Gc(s,l,p,h[p],t,!Te(h,p))}}return o}function Gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Te(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=qi(s);r=h[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ss(n))&&(r=!0))}return r}function hm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const d=p=>{l=!0;const[m,I]=hm(p,e,!0);Xe(o,m),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ne(t)&&r.set(t,as),as;if(ie(i))for(let d=0;d<i.length;d++){const p=un(i[d]);ed(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=un(d);if(ed(p)){const m=i[d],I=o[p]=ie(m)||he(m)?{type:m}:Xe({},m);if(I){const P=rd(Boolean,I.type),O=rd(String,I.type);I[0]=P>-1,I[1]=O<0||P<O,(P>-1||Te(I,"default"))&&c.push(p)}}}const h=[o,c];return Ne(t)&&r.set(t,h),h}function ed(t){return t[0]!=="$"&&!oi(t)}function td(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function nd(t,e){return td(t)===td(e)}function rd(t,e){return ie(e)?e.findIndex(n=>nd(n,t)):he(e)&&nd(e,t)?0:-1}const dm=t=>t[0]==="_"||t==="$stable",Hl=t=>ie(t)?t.map(tn):[tn(t)],TE=(t,e,n)=>{if(e._n)return e;const r=Rn((...s)=>Hl(e(...s)),n);return r._c=!1,r},fm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dm(s))continue;const i=t[s];if(he(i))e[s]=TE(s,i,r);else if(i!=null){const o=Hl(i);e[s]=()=>o}}},pm=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},IE=(t,e)=>{const n=t.slots=cm();if(t.vnode.shapeFlag&32){const r=e._;r?(Xe(n,e),gp(n,"_",r,!0)):fm(e,n)}else e&&pm(t,e)},AE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Xe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,fm(e,s)),o=e}else e&&(pm(t,e),o={default:1});if(i)for(const c in s)!dm(c)&&o[c]==null&&delete s[c]};function Qc(t,e,n,r,s=!1){if(ie(t)){t.forEach((m,I)=>Qc(m,e&&(ie(e)?e[I]:e),n,r,s));return}if(ci(r)&&!s)return;const i=r.shapeFlag&4?Ca(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Le?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(ze(h)?(d[h]=null,Te(p,h)&&(p[h]=null)):Ze(h)&&(h.value=null)),he(l))tr(l,c,12,[o,d]);else{const m=ze(l),I=Ze(l);if(m||I){const P=()=>{if(t.f){const O=m?Te(p,l)?p[l]:d[l]:l.value;s?ie(O)&&Cl(O,i):ie(O)?O.includes(i)||O.push(i):m?(d[l]=[i],Te(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else m?(d[l]=o,Te(p,l)&&(p[l]=o)):I&&(l.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Rt(P,n)):P()}}}const Rt=Gv;function RE(t){return bE(t)}function bE(t,e){const n=_p();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:I=Ut,insertStaticContent:P}=t,O=(v,T,C,V=null,N=null,q=null,K=void 0,$=null,H=!!T.dynamicChildren)=>{if(v===T)return;v&&!Pr(v,T)&&(V=D(v),Fe(v,N,q,!0),v=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:U,ref:Y,shapeFlag:se}=T;switch(U){case Sa:x(v,T,C,V);break;case Ot:M(v,T,C,V);break;case Vo:v==null&&B(T,C,V,K);break;case at:A(v,T,C,V,N,q,K,$,H);break;default:se&1?ne(v,T,C,V,N,q,K,$,H):se&6?E(v,T,C,V,N,q,K,$,H):(se&64||se&128)&&U.process(v,T,C,V,N,q,K,$,H,Z)}Y!=null&&N&&Qc(Y,v&&v.ref,q,T||v,!T)},x=(v,T,C,V)=>{if(v==null)r(T.el=c(T.children),C,V);else{const N=T.el=v.el;T.children!==v.children&&h(N,T.children)}},M=(v,T,C,V)=>{v==null?r(T.el=l(T.children||""),C,V):T.el=v.el},B=(v,T,C,V)=>{[v.el,v.anchor]=P(v.children,T,C,V,v.el,v.anchor)},j=({el:v,anchor:T},C,V)=>{let N;for(;v&&v!==T;)N=m(v),r(v,C,V),v=N;r(T,C,V)},W=({el:v,anchor:T})=>{let C;for(;v&&v!==T;)C=m(v),s(v),v=C;s(T)},ne=(v,T,C,V,N,q,K,$,H)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),v==null?Q(T,C,V,N,q,K,$,H):y(v,T,N,q,K,$,H)},Q=(v,T,C,V,N,q,K,$)=>{let H,U;const{props:Y,shapeFlag:se,transition:re,dirs:te}=v;if(H=v.el=o(v.type,q,Y&&Y.is,Y),se&8?d(H,v.children):se&16&&_(v.children,H,null,V,N,yc(v,q),K,$),te&&wr(v,null,V,"created"),R(H,v,v.scopeId,K,V),Y){for(const we in Y)we!=="value"&&!oi(we)&&i(H,we,null,Y[we],q,v.children,V,N,et);"value"in Y&&i(H,"value",null,Y.value,q),(U=Y.onVnodeBeforeMount)&&en(U,V,v)}te&&wr(v,null,V,"beforeMount");const ae=SE(N,re);ae&&re.beforeEnter(H),r(H,T,C),((U=Y&&Y.onVnodeMounted)||ae||te)&&Rt(()=>{U&&en(U,V,v),ae&&re.enter(H),te&&wr(v,null,V,"mounted")},N)},R=(v,T,C,V,N)=>{if(C&&I(v,C),V)for(let q=0;q<V.length;q++)I(v,V[q]);if(N){let q=N.subTree;if(T===q){const K=N.vnode;R(v,K,K.scopeId,K.slotScopeIds,N.parent)}}},_=(v,T,C,V,N,q,K,$,H=0)=>{for(let U=H;U<v.length;U++){const Y=v[U]=$?Kn(v[U]):tn(v[U]);O(null,Y,T,C,V,N,q,K,$)}},y=(v,T,C,V,N,q,K)=>{const $=T.el=v.el;let{patchFlag:H,dynamicChildren:U,dirs:Y}=T;H|=v.patchFlag&16;const se=v.props||Le,re=T.props||Le;let te;if(C&&Tr(C,!1),(te=re.onVnodeBeforeUpdate)&&en(te,C,T,v),Y&&wr(T,v,C,"beforeUpdate"),C&&Tr(C,!0),U?w(v.dynamicChildren,U,$,C,V,yc(T,N),q):K||me(v,T,$,null,C,V,yc(T,N),q,!1),H>0){if(H&16)b($,T,se,re,C,V,N);else if(H&2&&se.class!==re.class&&i($,"class",null,re.class,N),H&4&&i($,"style",se.style,re.style,N),H&8){const ae=T.dynamicProps;for(let we=0;we<ae.length;we++){const xe=ae[we],He=se[xe],Pt=re[xe];(Pt!==He||xe==="value")&&i($,xe,He,Pt,N,v.children,C,V,et)}}H&1&&v.children!==T.children&&d($,T.children)}else!K&&U==null&&b($,T,se,re,C,V,N);((te=re.onVnodeUpdated)||Y)&&Rt(()=>{te&&en(te,C,T,v),Y&&wr(T,v,C,"updated")},V)},w=(v,T,C,V,N,q,K)=>{for(let $=0;$<T.length;$++){const H=v[$],U=T[$],Y=H.el&&(H.type===at||!Pr(H,U)||H.shapeFlag&70)?p(H.el):C;O(H,U,Y,null,V,N,q,K,!0)}},b=(v,T,C,V,N,q,K)=>{if(C!==V){if(C!==Le)for(const $ in C)!oi($)&&!($ in V)&&i(v,$,C[$],null,K,T.children,N,q,et);for(const $ in V){if(oi($))continue;const H=V[$],U=C[$];H!==U&&$!=="value"&&i(v,$,U,H,K,T.children,N,q,et)}"value"in V&&i(v,"value",C.value,V.value,K)}},A=(v,T,C,V,N,q,K,$,H)=>{const U=T.el=v?v.el:c(""),Y=T.anchor=v?v.anchor:c("");let{patchFlag:se,dynamicChildren:re,slotScopeIds:te}=T;te&&($=$?$.concat(te):te),v==null?(r(U,C,V),r(Y,C,V),_(T.children||[],C,Y,N,q,K,$,H)):se>0&&se&64&&re&&v.dynamicChildren?(w(v.dynamicChildren,re,C,N,q,K,$),(T.key!=null||N&&T===N.subTree)&&mm(v,T,!0)):me(v,T,C,Y,N,q,K,$,H)},E=(v,T,C,V,N,q,K,$,H)=>{T.slotScopeIds=$,v==null?T.shapeFlag&512?N.ctx.activate(T,C,V,K,H):Ce(T,C,V,N,q,K,H):qe(v,T,H)},Ce=(v,T,C,V,N,q,K)=>{const $=v.component=ME(v,V,N);if(Aa(v)&&($.ctx.renderer=Z),UE($),$.asyncDep){if(N&&N.registerDep($,pe),!v.el){const H=$.subTree=Se(Ot);M(null,H,T,C)}}else pe($,v,T,C,N,q,K)},qe=(v,T,C)=>{const V=T.component=v.component;if(zv(v,T,C))if(V.asyncDep&&!V.asyncResolved){ye(V,T,C);return}else V.next=T,Uv(V.update),V.effect.dirty=!0,V.update();else T.el=v.el,V.vnode=T},pe=(v,T,C,V,N,q,K)=>{const $=()=>{if(v.isMounted){let{next:Y,bu:se,u:re,parent:te,vnode:ae}=v;{const Vt=gm(v);if(Vt){Y&&(Y.el=ae.el,ye(v,Y,K)),Vt.asyncDep.then(()=>{v.isUnmounted||$()});return}}let we=Y,xe;Tr(v,!1),Y?(Y.el=ae.el,ye(v,Y,K)):Y=ae,se&&Oo(se),(xe=Y.props&&Y.props.onVnodeBeforeUpdate)&&en(xe,te,Y,ae),Tr(v,!0);const He=mc(v),Pt=v.subTree;v.subTree=He,O(Pt,He,p(Pt.el),D(Pt),v,N,q),Y.el=He.el,we===null&&Kv(v,He.el),re&&Rt(re,N),(xe=Y.props&&Y.props.onVnodeUpdated)&&Rt(()=>en(xe,te,Y,ae),N)}else{let Y;const{el:se,props:re}=T,{bm:te,m:ae,parent:we}=v,xe=ci(T);if(Tr(v,!1),te&&Oo(te),!xe&&(Y=re&&re.onVnodeBeforeMount)&&en(Y,we,T),Tr(v,!0),se&&ke){const He=()=>{v.subTree=mc(v),ke(se,v.subTree,v,N,null)};xe?T.type.__asyncLoader().then(()=>!v.isUnmounted&&He()):He()}else{const He=v.subTree=mc(v);O(null,He,C,V,v,N,q),T.el=He.el}if(ae&&Rt(ae,N),!xe&&(Y=re&&re.onVnodeMounted)){const He=T;Rt(()=>en(Y,we,He),N)}(T.shapeFlag&256||we&&ci(we.vnode)&&we.vnode.shapeFlag&256)&&v.a&&Rt(v.a,N),v.isMounted=!0,T=C=V=null}},H=v.effect=new Nl($,Ut,()=>jl(U),v.scope),U=v.update=()=>{H.dirty&&H.run()};U.id=v.uid,Tr(v,!0),U()},ye=(v,T,C)=>{T.component=v;const V=v.vnode.props;v.vnode=T,v.next=null,wE(v,T.props,V,C),AE(v,T.children,C),pr(),Kh(v),mr()},me=(v,T,C,V,N,q,K,$,H=!1)=>{const U=v&&v.children,Y=v?v.shapeFlag:0,se=T.children,{patchFlag:re,shapeFlag:te}=T;if(re>0){if(re&128){qt(U,se,C,V,N,q,K,$,H);return}else if(re&256){St(U,se,C,V,N,q,K,$,H);return}}te&8?(Y&16&&et(U,N,q),se!==U&&d(C,se)):Y&16?te&16?qt(U,se,C,V,N,q,K,$,H):et(U,N,q,!0):(Y&8&&d(C,""),te&16&&_(se,C,V,N,q,K,$,H))},St=(v,T,C,V,N,q,K,$,H)=>{v=v||as,T=T||as;const U=v.length,Y=T.length,se=Math.min(U,Y);let re;for(re=0;re<se;re++){const te=T[re]=H?Kn(T[re]):tn(T[re]);O(v[re],te,C,null,N,q,K,$,H)}U>Y?et(v,N,q,!0,!1,se):_(T,C,V,N,q,K,$,H,se)},qt=(v,T,C,V,N,q,K,$,H)=>{let U=0;const Y=T.length;let se=v.length-1,re=Y-1;for(;U<=se&&U<=re;){const te=v[U],ae=T[U]=H?Kn(T[U]):tn(T[U]);if(Pr(te,ae))O(te,ae,C,null,N,q,K,$,H);else break;U++}for(;U<=se&&U<=re;){const te=v[se],ae=T[re]=H?Kn(T[re]):tn(T[re]);if(Pr(te,ae))O(te,ae,C,null,N,q,K,$,H);else break;se--,re--}if(U>se){if(U<=re){const te=re+1,ae=te<Y?T[te].el:V;for(;U<=re;)O(null,T[U]=H?Kn(T[U]):tn(T[U]),C,ae,N,q,K,$,H),U++}}else if(U>re)for(;U<=se;)Fe(v[U],N,q,!0),U++;else{const te=U,ae=U,we=new Map;for(U=ae;U<=re;U++){const vt=T[U]=H?Kn(T[U]):tn(T[U]);vt.key!=null&&we.set(vt.key,U)}let xe,He=0;const Pt=re-ae+1;let Vt=!1,Ds=0;const Dn=new Array(Pt);for(U=0;U<Pt;U++)Dn[U]=0;for(U=te;U<=se;U++){const vt=v[U];if(He>=Pt){Fe(vt,N,q,!0);continue}let Lt;if(vt.key!=null)Lt=we.get(vt.key);else for(xe=ae;xe<=re;xe++)if(Dn[xe-ae]===0&&Pr(vt,T[xe])){Lt=xe;break}Lt===void 0?Fe(vt,N,q,!0):(Dn[Lt-ae]=U+1,Lt>=Ds?Ds=Lt:Vt=!0,O(vt,T[Lt],C,null,N,q,K,$,H),He++)}const Qr=Vt?PE(Dn):as;for(xe=Qr.length-1,U=Pt-1;U>=0;U--){const vt=ae+U,Lt=T[vt],Yr=vt+1<Y?T[vt+1].el:V;Dn[U]===0?O(null,Lt,C,Yr,N,q,K,$,H):Vt&&(xe<0||U!==Qr[xe]?Dt(Lt,C,Yr,2):xe--)}}},Dt=(v,T,C,V,N=null)=>{const{el:q,type:K,transition:$,children:H,shapeFlag:U}=v;if(U&6){Dt(v.component.subTree,T,C,V);return}if(U&128){v.suspense.move(T,C,V);return}if(U&64){K.move(v,T,C,Z);return}if(K===at){r(q,T,C);for(let se=0;se<H.length;se++)Dt(H[se],T,C,V);r(v.anchor,T,C);return}if(K===Vo){j(v,T,C);return}if(V!==2&&U&1&&$)if(V===0)$.beforeEnter(q),r(q,T,C),Rt(()=>$.enter(q),N);else{const{leave:se,delayLeave:re,afterLeave:te}=$,ae=()=>r(q,T,C),we=()=>{se(q,()=>{ae(),te&&te()})};re?re(q,ae,we):we()}else r(q,T,C)},Fe=(v,T,C,V=!1,N=!1)=>{const{type:q,props:K,ref:$,children:H,dynamicChildren:U,shapeFlag:Y,patchFlag:se,dirs:re}=v;if($!=null&&Qc($,null,C,v,!0),Y&256){T.ctx.deactivate(v);return}const te=Y&1&&re,ae=!ci(v);let we;if(ae&&(we=K&&K.onVnodeBeforeUnmount)&&en(we,T,v),Y&6)Zt(v.component,C,V);else{if(Y&128){v.suspense.unmount(C,V);return}te&&wr(v,null,T,"beforeUnmount"),Y&64?v.type.remove(v,T,C,N,Z,V):U&&(q!==at||se>0&&se&64)?et(U,T,C,!1,!0):(q===at&&se&384||!N&&Y&16)&&et(H,T,C),V&&Ue(v)}(ae&&(we=K&&K.onVnodeUnmounted)||te)&&Rt(()=>{we&&en(we,T,v),te&&wr(v,null,T,"unmounted")},C)},Ue=v=>{const{type:T,el:C,anchor:V,transition:N}=v;if(T===at){Nn(C,V);return}if(T===Vo){W(v);return}const q=()=>{s(C),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:$}=N,H=()=>K(C,q);$?$(v.el,q,H):H()}else q()},Nn=(v,T)=>{let C;for(;v!==T;)C=m(v),s(v),v=C;s(T)},Zt=(v,T,C)=>{const{bum:V,scope:N,update:q,subTree:K,um:$}=v;V&&Oo(V),N.stop(),q&&(q.active=!1,Fe(K,v,T,C)),$&&Rt($,T),Rt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},et=(v,T,C,V=!1,N=!1,q=0)=>{for(let K=q;K<v.length;K++)Fe(v[K],T,C,V,N)},D=v=>v.shapeFlag&6?D(v.component.subTree):v.shapeFlag&128?v.suspense.next():m(v.anchor||v.el);let X=!1;const G=(v,T,C)=>{v==null?T._vnode&&Fe(T._vnode,null,null,!0):O(T._vnode||null,v,T,null,null,null,C),X||(X=!0,Kh(),qp(),X=!1),T._vnode=v},Z={p:O,um:Fe,m:Dt,r:Ue,mt:Ce,mc:_,pc:me,pbc:w,n:D,o:t};let ve,ke;return{render:G,hydrate:ve,createApp:yE(G,ve)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function SE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mm(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Kn(s[i]),c.el=o.el),n||mm(o,c)),c.type===Sa&&(c.el=o.el)}}function PE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gm(e)}const CE=t=>t.__isTeleport,at=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),ui=[];let Kt=null;function be(t=!1){ui.push(Kt=t?null:[])}function kE(){ui.pop(),Kt=ui[ui.length-1]||null}let Ri=1;function sd(t){Ri+=t}function _m(t){return t.dynamicChildren=Ri>0?Kt||as:null,kE(),Ri>0&&Kt&&Kt.push(t),t}function Ge(t,e,n,r,s,i){return _m(fe(t,e,n,r,s,i,!0))}function hn(t,e,n,r,s){return _m(Se(t,e,n,r,s,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const ym=({key:t})=>t??null,Lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Ze(t)||he(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ym(e),ref:e&&Lo(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return c?(zl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),Ri>0&&!o&&Kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Kt.push(l),l}const Se=xE;function xE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gp)&&(t=Ot),Jo(t)){const c=cr(t,e,!0);return n&&zl(c,n),Ri>0&&!i&&Kt&&(c.shapeFlag&6?Kt[Kt.indexOf(t)]=c:Kt.push(c)),c.patchFlag|=-2,c}if(HE(t)&&(t=t.__vccOpts),e){e=OE(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=Bi(c)),Ne(l)&&(Lp(l)&&!ie(l)&&(l=Xe({},l)),e.style=xl(l))}const o=ze(t)?1:Wv(t)?128:CE(t)?64:Ne(t)?4:he(t)?2:0;return fe(t,e,n,r,s,o,i,!0)}function OE(t){return t?Lp(t)||lm(t)?Xe({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?DE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ym(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(d.transition=l.clone(d)),d}function ji(t=" ",e=0){return Se(Sa,null,t,e)}function NE(t,e){const n=Se(Vo,null,t);return n.staticCount=e,n}function zt(t="",e=!1){return e?(be(),hn(Ot,null,t)):Se(Ot,null,t)}function tn(t){return t==null||typeof t=="boolean"?Se(Ot):ie(t)?Se(at,null,t.slice()):typeof t=="object"?Kn(t):Se(Sa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lm(e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),r&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function DE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Bi([e.class,r.class]));else if(s==="style")e.style=xl([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Bt(t,e,7,[n,r])}const VE=om();let LE=0;function ME(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VE,i={uid:LE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hm(r,s),emitsOptions:zp(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jv.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const FE=()=>nt||Ye;let Zo,Yc;{const t=_p(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),Yc=e("__VUE_SSR_SETTERS__",n=>Pa=n)}const qi=t=>{const e=nt;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},id=()=>{nt&&nt.scope.off(),Zo(null)};function vm(t){return t.vnode.shapeFlag&4}let Pa=!1;function UE(t,e=!1){e&&Yc(e);const{props:n,children:r}=t.vnode,s=vm(t);EE(t,n,s,e),IE(t,r);const i=s?BE(t,e):void 0;return e&&Yc(!1),i}function BE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hE);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?jE(t):null,i=qi(t);pr();const o=tr(r,t,0,[t.props,s]);if(mr(),i(),fp(o)){if(o.then(id,id),e)return o.then(c=>{od(t,c,e)}).catch(c=>{Ea(c,t,0)});t.asyncDep=o}else od(t,o,e)}else Em(t,e)}function od(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Bp(e)),Em(t,n)}let ad;function Em(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||ql(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Xe(Xe({isCustomElement:i,delimiters:c},o),l);r.render=ad(s,h)}}t.render=r.render||Ut}{const s=qi(t);pr();try{dE(t)}finally{mr(),s()}}}const $E={get(t,e){return bt(t,"get",""),t[e]}};function jE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$E),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(Ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}}))}function qE(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function HE(t){return he(t)&&"__vccOpts"in t}const xt=(t,e)=>kv(t,e,Pa);function Kl(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!ie(e)?Jo(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jo(n)&&(n=[n]),Se(t,e,n))}const zE="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const KE="http://www.w3.org/2000/svg",WE="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,cd=Wn&&Wn.createElement("template"),GE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Wn.createElementNS(KE,t):e==="mathml"?Wn.createElementNS(WE,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=cd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Un="transition",Gs="animation",bi=Symbol("_vtc"),ka=(t,{slots:e})=>Kl(eE,QE(t),e);ka.displayName="Transition";const wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ka.props=Xe({},Jp,wm);const Ir=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},ld=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function QE(t){const e={};for(const A in t)A in wm||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,P=YE(s),O=P&&P[0],x=P&&P[1],{onBeforeEnter:M,onEnter:B,onEnterCancelled:j,onLeave:W,onLeaveCancelled:ne,onBeforeAppear:Q=M,onAppear:R=B,onAppearCancelled:_=j}=e,y=(A,E,Ce)=>{Ar(A,E?d:c),Ar(A,E?h:o),Ce&&Ce()},w=(A,E)=>{A._isLeaving=!1,Ar(A,p),Ar(A,I),Ar(A,m),E&&E()},b=A=>(E,Ce)=>{const qe=A?R:B,pe=()=>y(E,A,Ce);Ir(qe,[E,pe]),ud(()=>{Ar(E,A?l:i),Bn(E,A?d:c),ld(qe)||hd(E,r,O,pe)})};return Xe(e,{onBeforeEnter(A){Ir(M,[A]),Bn(A,i),Bn(A,o)},onBeforeAppear(A){Ir(Q,[A]),Bn(A,l),Bn(A,h)},onEnter:b(!1),onAppear:b(!0),onLeave(A,E){A._isLeaving=!0;const Ce=()=>w(A,E);Bn(A,p),Bn(A,m),ZE(),ud(()=>{A._isLeaving&&(Ar(A,p),Bn(A,I),ld(W)||hd(A,r,x,Ce))}),Ir(W,[A,Ce])},onEnterCancelled(A){y(A,!1),Ir(j,[A])},onAppearCancelled(A){y(A,!0),Ir(_,[A])},onLeaveCancelled(A){w(A),Ir(ne,[A])}})}function YE(t){if(t==null)return null;if(Ne(t))return[vc(t.enter),vc(t.leave)];{const e=vc(t);return[e,e]}}function vc(t){return ev(t)}function Bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bi]||(t[bi]=new Set)).add(e)}function Ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bi];n&&(n.delete(e),n.size||(t[bi]=void 0))}function ud(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let XE=0;function hd(t,e,n,r){const s=t._endId=++XE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=JE(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=I=>{I.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,m)}function JE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Un}Delay`),i=r(`${Un}Duration`),o=dd(s,i),c=r(`${Gs}Delay`),l=r(`${Gs}Duration`),h=dd(c,l);let d=null,p=0,m=0;e===Un?o>0&&(d=Un,p=o,m=i.length):e===Gs?h>0&&(d=Gs,p=h,m=l.length):(p=Math.max(o,h),d=p>0?o>h?Un:Gs:null,m=d?d===Un?i.length:l.length:0);const I=d===Un&&/\b(transform|all)(,|$)/.test(r(`${Un}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:I}}function dd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>fd(n)+fd(t[r])))}function fd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ZE(){return document.body.offsetHeight}function ew(t,e,n){const r=t[bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pd=Symbol("_vod"),tw=Symbol("_vsh"),nw=Symbol(""),rw=/(^|;)\s*display\s*:/;function sw(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Mo(r,c,"")}else for(const o in e)n[o]==null&&Mo(r,o,"");for(const o in n)o==="display"&&(i=!0),Mo(r,o,n[o])}else if(s){if(e!==n){const o=r[nw];o&&(n+=";"+o),r.cssText=n,i=rw.test(n)}}else e&&t.removeAttribute("style");pd in t&&(t[pd]=i?r.display:"",t[tw]&&(r.display="none"))}const md=/\s*!important$/;function Mo(t,e,n){if(ie(n))n.forEach(r=>Mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iw(t,e);md.test(n)?t.setProperty(Ss(r),n.replace(md,""),"important"):t[r]=n}}const gd=["Webkit","Moz","ms"],Ec={};function iw(t,e){const n=Ec[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Ec[e]=r;r=ya(r);for(let s=0;s<gd.length;s++){const i=gd[s]+r;if(i in t)return Ec[e]=i}return e}const _d="http://www.w3.org/1999/xlink";function ow(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_d,e.slice(6,e.length)):t.setAttributeNS(_d,e,n);else{const i=ov(e);n==null||i&&!yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function aw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n??"";(h!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=yp(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yn(t,e,n,r){t.addEventListener(e,n,r)}function cw(t,e,n,r){t.removeEventListener(e,n,r)}const yd=Symbol("_vei");function lw(t,e,n,r,s=null){const i=t[yd]||(t[yd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=uw(e);if(r){const h=i[e]=fw(r,s);yn(t,c,h,l)}else o&&(cw(t,c,o,l),i[e]=void 0)}}const vd=/(?:Once|Passive|Capture)$/;function uw(t){let e;if(vd.test(t)){e={};let r;for(;r=t.match(vd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let wc=0;const hw=Promise.resolve(),dw=()=>wc||(hw.then(()=>wc=0),wc=Date.now());function fw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(pw(r,n.value),e,5,[r])};return n.value=t,n.attached=dw(),n}function pw(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ed=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mw=(t,e,n,r,s,i,o,c,l)=>{const h=s==="svg";e==="class"?ew(t,r,h):e==="style"?sw(t,n,r):ga(e)?Pl(e)||lw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gw(t,e,r,h))?aw(t,e,r,i,o,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ow(t,e,r,h))};function gw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ed(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ed(e)&&ze(n)?!1:e in t}const lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Oo(e,n):e};function _w(t){t.target.composing=!0}function wd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jt=Symbol("_assign"),Td={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jt]=lr(s);const i=r||s.props&&s.props.type==="number";yn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Wo(c)),t[jt](c)}),n&&yn(t,"change",()=>{t.value=t.value.trim()}),e||(yn(t,"compositionstart",_w),yn(t,"compositionend",wd),yn(t,"change",wd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[jt]=lr(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Wo(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},yw={deep:!0,created(t,e,n){t[jt]=lr(n),yn(t,"change",()=>{const r=t._modelValue,s=ms(t),i=t.checked,o=t[jt];if(ie(r)){const c=Ol(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(bs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Tm(t,i))})},mounted:Id,beforeUpdate(t,e,n){t[jt]=lr(n),Id(t,e,n)}};function Id(t,{value:e,oldValue:n},r){t._modelValue=e,ie(e)?t.checked=Ol(e,r.props.value)>-1:bs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Mr(e,Tm(t,!0)))}const vw={created(t,{value:e},n){t.checked=Mr(e,n.props.value),t[jt]=lr(n),yn(t,"change",()=>{t[jt](ms(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[jt]=lr(r),e!==n&&(t.checked=Mr(e,r.props.value))}},Ew={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=bs(e);yn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wo(ms(o)):ms(o));t[jt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wa(()=>{t._assigning=!1})}),t[jt]=lr(r)},mounted(t,{value:e,modifiers:{number:n}}){Ad(t,e)},beforeUpdate(t,e,n){t[jt]=lr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Ad(t,e)}};function Ad(t,e,n){const r=t.multiple,s=ie(e);if(!(r&&!s&&!bs(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=ms(c);if(r)if(s){const h=typeof l;h==="string"||h==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=Ol(e,l)>-1}else c.selected=e.has(l);else if(Mr(ms(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ms(t){return"_value"in t?t._value:t.value}function Tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nx={created(t,e,n){Ao(t,e,n,null,"created")},mounted(t,e,n){Ao(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Ao(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Ao(t,e,n,r,"updated")}};function ww(t,e){switch(t){case"SELECT":return Ew;case"TEXTAREA":return Td;default:switch(e){case"checkbox":return yw;case"radio":return vw;default:return Td}}}function Ao(t,e,n,r,s){const o=ww(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Tw=["ctrl","shift","alt","meta"],Iw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},hi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Iw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Aw=Xe({patchProp:mw},GE);let Rd;function Rw(){return Rd||(Rd=RE(Aw))}const bw=(...t)=>{const e=Rw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pw(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Sw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pw(t){return ze(t)?document.querySelector(t):t}var Cw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Im;const xa=t=>Im=t,Am=Symbol();function Xc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var di;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(di||(di={}));function kw(){const t=wp(!0),e=t.run(()=>ar({}));let n=[],r=[];const s=Ul({install(i){xa(s),s._a=i,i.provide(Am,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Cw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Rm=()=>{};function bd(t,e,n,r=Rm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Tp()&&lv(s),s}function ts(t,...e){t.slice().forEach(n=>{n(...e)})}const xw=t=>t();function Jc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Xc(s)&&Xc(r)&&t.hasOwnProperty(n)&&!Ze(r)&&!Nr(r)?t[n]=Jc(s,r):t[n]=r}return t}const Ow=Symbol();function Nw(t){return!Xc(t)||!t.hasOwnProperty(Ow)}const{assign:qn}=Object;function Dw(t){return!!(Ze(t)&&t.effect)}function Vw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=Dv(n.state.value[t]);return qn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Ul(xt(()=>{xa(n);const I=n._s.get(t);return o[m].call(I,I)})),p),{}))}return l=bm(t,h,e,n,r,!0),l}function bm(t,e,n={},r,s,i){let o;const c=qn({actions:{}},n),l={deep:!0};let h,d,p=[],m=[],I;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),ar({});let O;function x(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:di.patchFunction,storeId:t,events:I}):(Jc(r.state.value[t],_),y={type:di.patchObject,payload:_,storeId:t,events:I});const w=O=Symbol();wa().then(()=>{O===w&&(h=!0)}),d=!0,ts(p,y,r.state.value[t])}const M=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{qn(b,w)})}:Rm;function B(){o.stop(),p=[],m=[],r._s.delete(t)}function j(_,y){return function(){xa(r);const w=Array.from(arguments),b=[],A=[];function E(pe){b.push(pe)}function Ce(pe){A.push(pe)}ts(m,{args:w,name:_,store:ne,after:E,onError:Ce});let qe;try{qe=y.apply(this&&this.$id===t?this:ne,w)}catch(pe){throw ts(A,pe),pe}return qe instanceof Promise?qe.then(pe=>(ts(b,pe),pe)).catch(pe=>(ts(A,pe),Promise.reject(pe))):(ts(b,qe),qe)}}const W={_p:r,$id:t,$onAction:bd.bind(null,m),$patch:x,$reset:M,$subscribe(_,y={}){const w=bd(p,_,y.detached,()=>b()),b=o.run(()=>ai(()=>r.state.value[t],A=>{(y.flush==="sync"?d:h)&&_({storeId:t,type:di.direct,events:I},A)},qn({},l,y)));return w},$dispose:B},ne=$i(W);r._s.set(t,ne);const R=(r._a&&r._a.runWithContext||xw)(()=>r._e.run(()=>(o=wp()).run(e)));for(const _ in R){const y=R[_];if(Ze(y)&&!Dw(y)||Nr(y))i||(P&&Nw(y)&&(Ze(y)?y.value=P[_]:Jc(y,P[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=j(_,y);R[_]=w,c.actions[_]=y}}return qn(ne,R),qn(Ie(ne),R),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:_=>{x(y=>{qn(y,_)})}}),r._p.forEach(_=>{qn(ne,o.run(()=>_({store:ne,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(ne.$state,P),h=!0,d=!0,ne}function Oa(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const h=vE();return c=c||(h?$t(Am,null):null),c&&xa(c),c=Im,c._s.has(r)||(i?bm(r,e,s,c):Vw(r,s,c)),c._s.get(r)}return o.$id=r,o}var Sd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Lw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,I=h&63;l||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Mw;const m=i<<2|c>>4;if(r.push(m),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fw=function(t){const e=Sm(t);return Pm.encodeByteArray(e,!0)},ea=function(t){return Fw(t).replace(/\./g,"")},Cm=function(t){try{return Pm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=()=>Uw().__FIREBASE_DEFAULTS__,$w=()=>{if(typeof process>"u"||typeof Sd>"u")return;const t=Sd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cm(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return Bw()||$w()||jw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},km=t=>{var e,n;return(n=(e=Na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xm=t=>{const e=km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Om=()=>{var t;return(t=Na())===null||t===void 0?void 0:t.config},Nm=t=>{var e;return(e=Na())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function zw(){var t;const e=(t=Na())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ww(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gw(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qw(){return!zw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Xw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jw,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Jt(s,c,r)}}function Zw(t,e){return t.replace(eT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eT=/\{\$([^}]+)}/g;function tT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pd(i)&&Pd(o)){if(!ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nT(t,e){const n=new rT(t,e);return n.subscribe.bind(n)}class rT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tc),s.error===void 0&&(s.error=Tc),s.complete===void 0&&(s.complete=Tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aT(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oT(t){return t===br?void 0:t}function aT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const lT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},uT=_e.INFO,hT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},dT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wl{constructor(e){this.name=e,this._logLevel=uT,this._logHandler=dT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const fT=(t,e)=>e.some(n=>t instanceof n);let Cd,kd;function pT(){return Cd||(Cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mT(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,Zc=new WeakMap,Lm=new WeakMap,Ic=new WeakMap,Gl=new WeakMap;function gT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vm.set(n,t)}).catch(()=>{}),Gl.set(e,t),e}function _T(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let el={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yT(t){el=t(el)}function vT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ac(this),e,...n);return Lm.set(r,e.sort?e.sort():[e]),nr(r)}:mT().includes(t)?function(...e){return t.apply(Ac(this),e),nr(Vm.get(this))}:function(...e){return nr(t.apply(Ac(this),e))}}function ET(t){return typeof t=="function"?vT(t):(t instanceof IDBTransaction&&_T(t),fT(t,pT())?new Proxy(t,el):t)}function nr(t){if(t instanceof IDBRequest)return gT(t);if(Ic.has(t))return Ic.get(t);const e=ET(t);return e!==t&&(Ic.set(t,e),Gl.set(e,t)),e}const Ac=t=>Gl.get(t);function wT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const TT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],Rc=new Map;function xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Rc.set(e,i),i}yT(t=>({...t,get:(e,n,r)=>xd(e,n)||t.get(e,n,r),has:(e,n)=>!!xd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tl="@firebase/app",Od="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Wl("@firebase/app"),bT="@firebase/app-compat",ST="@firebase/analytics-compat",PT="@firebase/analytics",CT="@firebase/app-check-compat",kT="@firebase/app-check",xT="@firebase/auth",OT="@firebase/auth-compat",NT="@firebase/database",DT="@firebase/database-compat",VT="@firebase/functions",LT="@firebase/functions-compat",MT="@firebase/installations",FT="@firebase/installations-compat",UT="@firebase/messaging",BT="@firebase/messaging-compat",$T="@firebase/performance",jT="@firebase/performance-compat",qT="@firebase/remote-config",HT="@firebase/remote-config-compat",zT="@firebase/storage",KT="@firebase/storage-compat",WT="@firebase/firestore",GT="@firebase/vertexai-preview",QT="@firebase/firestore-compat",YT="firebase",XT="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="[DEFAULT]",JT={[tl]:"fire-core",[bT]:"fire-core-compat",[PT]:"fire-analytics",[ST]:"fire-analytics-compat",[kT]:"fire-app-check",[CT]:"fire-app-check-compat",[xT]:"fire-auth",[OT]:"fire-auth-compat",[NT]:"fire-rtdb",[DT]:"fire-rtdb-compat",[VT]:"fire-fn",[LT]:"fire-fn-compat",[MT]:"fire-iid",[FT]:"fire-iid-compat",[UT]:"fire-fcm",[BT]:"fire-fcm-compat",[$T]:"fire-perf",[jT]:"fire-perf-compat",[qT]:"fire-rc",[HT]:"fire-rc-compat",[zT]:"fire-gcs",[KT]:"fire-gcs-compat",[WT]:"fire-fst",[QT]:"fire-fst-compat",[GT]:"fire-vertex","fire-js":"fire-js",[YT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map,ZT=new Map,rl=new Map;function Nd(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(rl.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of na.values())Nd(n,t);for(const n of ZT.values())Nd(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Hi("app","Firebase",eI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=XT;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=Om()),!n)throw rr.create("no-options");const i=na.get(s);if(i){if(ta(n,i.options)&&ta(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new cT(s);for(const l of rl.values())o.addComponent(l);const c=new tI(n,r,o);return na.set(s,c),c}function Ql(t=nl){const e=na.get(t);if(!e&&t===nl&&Om())return Mm();if(!e)throw rr.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=JT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(c.join(" "));return}Ur(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebase-heartbeat-database",rI=1,Si="firebase-heartbeat-store";let bc=null;function Fm(){return bc||(bc=wT(nI,rI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Si)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),bc}async function sI(t){try{const n=(await Fm()).transaction(Si),r=await n.objectStore(Si).get(Um(t));return await n.done,r}catch(e){if(e instanceof Jt)Fr.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function Dd(t,e){try{const r=(await Fm()).transaction(Si,"readwrite");await r.objectStore(Si).put(e,Um(t)),await r.done}catch(n){if(n instanceof Jt)Fr.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function Um(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=1024,oI=30*24*60*60*1e3;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=oI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vd(),{heartbeatsToSend:r,unsentEntries:s}=cI(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vd(){return new Date().toISOString().substring(0,10)}function cI(t,e=iI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ld(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ld(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ld(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){Ur(new ur("platform-logger",e=>new AT(e),"PRIVATE")),Ur(new ur("heartbeat",e=>new aI(e),"PRIVATE")),rn(tl,Od,t),rn(tl,Od,"esm2017"),rn("fire-js","")}uI("");function Yl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=Bm,$m=new Hi("auth","Firebase",Bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Wl("@firebase/auth");function dI(t,...e){ra.logLevel<=_e.WARN&&ra.warn(`Auth (${zr}): ${t}`,...e)}function Fo(t,...e){ra.logLevel<=_e.ERROR&&ra.error(`Auth (${zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Xl(t,...e)}function sn(t,...e){return Xl(t,...e)}function jm(t,e,n){const r=Object.assign(Object.assign({},hI()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function on(t){return jm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $m.create(t,...e)}function ce(t,e,...n){if(!t)throw Xl(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function bn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fI(){return Md()==="http:"||Md()==="https:"}function Md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fI()||Kw()||"connection"in navigator)?navigator.onLine:!0}function mI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||Ww()}get(){return pI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Ki(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fn(t,e,n,r,s={}){return Hm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qm.fetch()(zm(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Hm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gI),e);try{const s=new vI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jm(t,d,h);Qt(t,d)}}catch(s){if(s instanceof Jt)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function Wi(t,e,n,r,s={}){const i=await fn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jl(t.config,s):`${t.config.apiScheme}://${s}`}function yI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),_I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class EI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wI(t,e){return fn(t,"GET","/v2/recaptchaConfig",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return fn(t,"POST","/v1/accounts:delete",e)}async function Km(t,e){return fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function II(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=Zl(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(Sc(s.auth_time)),issuedAtTime:fi(Sc(s.iat)),expirationTime:fi(Sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Zl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cm(n);return s?JSON.parse(s):(Fo("Failed to decode base64 JWT payload"),null)}catch(s){return Fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ud(t){const e=Zl(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&AI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gs(t,Km(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wm(i.providerUserInfo):[],c=SI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new il(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function bI(t){const e=je(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wm(t){return t.map(e=>{var{providerId:n}=e,r=Yl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await Hm(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",qm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CI(t,e){return fn(t,"POST","/v2/accounts:revokeToken",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return II(this,e)}reload(){return bI(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await gs(this,TI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:W,isAnonymous:ne,providerData:Q,stsTokenManager:R}=n;ce(j&&R,e,"internal-error");const _=hs.fromJSON(this.name,R);ce(typeof j=="string",e,"internal-error"),$n(p,e.name),$n(m,e.name),ce(typeof W=="boolean",e,"internal-error"),ce(typeof ne=="boolean",e,"internal-error"),$n(I,e.name),$n(P,e.name),$n(O,e.name),$n(x,e.name),$n(M,e.name),$n(B,e.name);const y=new En({uid:j,auth:e,email:m,emailVerified:W,displayName:p,isAnonymous:ne,photoURL:P,phoneNumber:I,tenantId:O,stsTokenManager:_,createdAt:M,lastLoginAt:B});return Q&&Array.isArray(Q)&&(y.providerData=Q.map(w=>Object.assign({},w))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new hs;s.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new hs;c.updateFromIdToken(r);const l=new En({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function wn(t){bn(t instanceof Function,"Expected a class definition");let e=Bd.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gm.type="NONE";const $d=Gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(wn($d),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||wn($d);const o=Uo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=En._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(eg(e))return"Webos";if(eu(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qm(t=ht()){return/firefox\//i.test(t)}function eu(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(t=ht()){return/crios\//i.test(t)}function Xm(t=ht()){return/iemobile/i.test(t)}function Jm(t=ht()){return/android/i.test(t)}function Zm(t=ht()){return/blackberry/i.test(t)}function eg(t=ht()){return/webos/i.test(t)}function Va(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kI(t=ht()){var e;return Va(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xI(){return Gw()&&document.documentMode===10}function tg(t=ht()){return Va(t)||Jm(t)||eg(t)||Zm(t)||/windows phone/i.test(t)||Xm(t)}function OI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e=[]){let n;switch(t){case"Browser":n=jd(ht());break;case"Worker":n=`${jd(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e={}){return fn(t,"GET","/v2/passwordPolicy",xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=6;class LI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Km(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(on(this));const n=e?je(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new LI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function On(t){return je(t)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=nT(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(t){La=t}function rg(t){return La.loadJS(t)}function UI(){return La.recaptchaEnterpriseScript}function BI(){return La.gapiScript}function $I(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jI="recaptcha-enterprise",qI="NO_RECAPTCHA";class HI{constructor(e){this.type=jI,this.auth=On(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{wI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new EI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(qI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Fd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=UI();l.length!==0&&(l+=c),rg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Hd(t,e,n,r=!1){const s=new HI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ia(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){const n=Da(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ta(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WI(t,e,n){const r=On(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sg(e),{host:o,port:c}=GI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QI()}function sg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GI(t){const e=sg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zd(o)}}}function zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function YI(t,e){return fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}async function ig(t,e){return fn(t,"POST","/v1/accounts:sendOobCode",xn(t,e))}async function JI(t,e){return ig(t,e)}async function ZI(t,e){return ig(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function tA(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,n,"signInWithPassword",XI);case"emailLink":return eA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,r,"signUpPassword",YI);case"emailLink":return tA(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="http://localhost";class Br extends tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:nA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sA(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class nu{constructor(e){var n,r,s,i,o,c;const l=ei(ti(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=rA((s=l.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=sA(e);try{return new nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nu.parseLink(n);return ce(r,"argument-error"),Pi._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Gi{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Gi{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e){return Wi(t,"POST","/v1/accounts:signUp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await En._fromIdTokenResponse(e,r,s),o=Kd(r);return new Sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kd(r);return new Sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t){var e;if(Wt(t.app))return Promise.reject(on(t));const n=On(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ag(n,{returnSecureToken:!0}),s=await Sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Jt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function cg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function oA(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(on(r));const s="reauthenticate";try{const i=await gs(t,cg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Zl(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Sn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e,n=!1){if(Wt(t.app))return Promise.reject(on(t));const r="signIn",s=await cg(t,r,e),i=await Sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cA(t,e){return lg(On(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t){const e=On(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rx(t,e,n){const r=On(t);await ia(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ZI)}async function lA(t,e,n){if(Wt(t.app))return Promise.reject(on(t));const r=On(t),o=await ia(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ag).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ug(t),l}),c=await Sn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function uA(t,e,n){return Wt(t.app)?Promise.reject(on(t)):cA(je(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ug(t),r})}async function hA(t,e){const n=je(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await JI(n.auth,s);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e){return fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,dA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pA(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function mA(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function hg(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function gA(t){return je(t).signOut()}const aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){const t=ht();return eu(t)||Va(t)}const yA=1e3,vA=10;class fg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_A()&&OI(),this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fg.type="LOCAL";const EA=fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pg.type="SESSION";const mg=pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await wA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ru("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function IA(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function AA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bA(){return gg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",SA=1,ca="firebaseLocalStorage",yg="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fa(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function PA(){const t=indexedDB.deleteDatabase(_g);return new Qi(t).toPromise()}function ol(){const t=indexedDB.open(_g,SA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:yg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await PA(),e(await ol()))})})}async function Wd(t,e,n){const r=Fa(t,!0).put({[yg]:e,value:n});return new Qi(r).toPromise()}async function CA(t,e){const n=Fa(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function Gd(t,e){const n=Fa(t,!0).delete(e);return new Qi(n).toPromise()}const kA=800,xA=3;class vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AA(),!this.activeServiceWorker)return;this.sender=new TA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await Wd(e,aa,"1"),await Gd(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fa(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vg.type="LOCAL";const OA=vg;new Ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t,e){return e?wn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DA(t){return lg(t.auth,new su(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),aA(n,new su(t),t.bypassAuthState)}async function LA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),oA(n,new su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DA;case"linkViaPopup":case"linkViaRedirect":return LA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:Qt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Ki(2e3,1e4);class os extends Eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MA.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="pendingRedirect",Bo=new Map;class UA extends Eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await BA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BA(t,e){const n=qA(e),r=jA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $A(t,e){Bo.set(t._key(),e)}function jA(t){return wn(t._redirectPersistence)}function qA(t){return Uo(FA,t.config.apiKey,t.name)}async function HA(t,e,n=!1){if(Wt(t.app))return Promise.reject(on(t));const r=On(t),s=NA(r,e),o=await new UA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qd(e))}saveEventToCache(e){this.cachedEventUids.add(Qd(e)),this.lastProcessedEventTime=Date.now()}}function Qd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e={}){return fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YA=/^https?/;async function XA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GA(t);for(const n of e)try{if(JA(n))return}catch{}Qt(t,"unauthorized-domain")}function JA(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YA.test(n))return!1;if(QA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Ki(3e4,6e4);function Yd(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function e0(t){return new Promise((e,n)=>{var r,s,i;function o(){Yd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yd(),n(sn(t,"network-request-failed"))},timeout:ZA.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const c=$I("iframefcb");return an()[c]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},rg(`${BI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function t0(t){return $o=$o||e0(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Ki(5e3,15e3),r0="__/auth/iframe",s0="emulator/auth/iframe",i0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jl(e,s0):`https://${t.config.authDomain}/${r0}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=o0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function c0(t){const e=await t0(t),n=an().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:a0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},n0.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u0=500,h0=600,d0="_blank",f0="http://localhost";class Xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p0(t,e,n,r=u0,s=h0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},l0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(c=Ym(h)?d0:n),Qm(h)&&(e=e||f0,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[I,P])=>`${m}${I}=${P},`,"");if(kI(h)&&c!=="_self")return m0(e||"",c),new Xd(null);const p=window.open(e||"",c,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Xd(p)}function m0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="__/auth/handler",_0="emulator/auth/handler",y0=encodeURIComponent("fac");async function Jd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof og){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${y0}=${encodeURIComponent(l)}`:"";return`${v0(t)}?${zi(c).slice(1)}${h}`}function v0({config:t}){return t.emulator?Jl(t,_0):`https://${t.authDomain}/${g0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class E0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mg,this._completeRedirectFn=HA,this._overrideRedirectResult=$A}async _openPopup(e,n,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jd(e,n,r,sl(),s);return p0(e,o,ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jd(e,n,r,sl(),s);return IA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await c0(e),r=new KA(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tg()||eu()||Va()}}const w0=E0;var Zd="@firebase/auth",ef="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A0(t){Ur(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(t)},h=new MI(r,s,i,l);return KI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ur("auth-internal",e=>{const n=On(e.getProvider("auth").getImmediate());return(r=>new T0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Zd,ef,I0(t)),rn(Zd,ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=5*60,b0=Nm("authIdTokenMaxAge")||R0;let tf=null;const S0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b0)return;const s=n==null?void 0:n.token;tf!==s&&(tf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tg(t=Ql()){const e=Da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zI(t,{popupRedirectResolver:w0,persistence:[OA,EA,mg]}),r=Nm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=S0(i.toString());mA(n,o,()=>o(n.currentUser)),pA(n,c=>o(c))}}const s=km("auth");return s&&WI(n,`http://${s}`),n}function P0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",P0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A0("Browser");var C0="firebase",k0="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(C0,k0,"app");const Kr=Oa("Auth",{state:()=>({user:null,authCompleted:!1,authError:""}),actions:{async getAccessAsAnAnonymous(){try{await iA(Js)}catch(t){this.errorsHandling(t)}},async createUser(t,e,n){try{const r=await lA(Js,t,e);await fA(r.user,{displayName:n}),await hA(r.user)}catch(r){this.errorsHandling(r)}},async signInUser(t,e){if(!this.user)try{const r=(await uA(Js,t,e)).user;if(r&&r.emailVerified)this.user=r;else throw new Error("User not authenticated or email not verified.")}catch(n){this.errorsHandling(n)}},async logoutUser(t){try{await gA(Js),t({name:"home"})}catch(e){this.errorsHandling(e)}},async checkUserAuthState(){hg(Js,t=>{t!==null&&(t.emailVerified||t.isAnonymous)?this.user=t:this.user=null,this.authCompleted=!0})},errorsHandling(t){if(t instanceof Jt)switch(console.error("Firebase Error:",t.code,t.message),t.code){case"auth/email-already-exists":this.authError="Registration failed. The email address is already associated with an existing account. Please use a different email address or try to log in.";break;case"auth/user-not-found":this.authError="Invalid login credentials. User not found. Please check your email or sign up for an account.";break;case"auth/invalid-email":this.authError="Invalid email. Please check the email and try again.";break;case"auth/invalid-password":this.authError="Invalid password. Please check the password and try again.";break;case"auth/invalid-credential":this.authError="Invalid login credentials. Please check your email and password and try again.";break;case"auth/too-many-requests":this.authError="Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";break;default:this.authError="Oops! Something went wrong on our end. Please try again later or contact support if the issue persists"}else{switch(console.error("Unexpected Error:",t),t){case"Error: User not authenticated or email not verified.":this.authError="Authentication Failed: Your account has not been authenticated or your email address is not verified.";break;default:this.authError="Oops! Something went wrong on our end. Please try again later or contact support if the issue persists"}throw new Error("Unexpected Error")}}}}),sx=Oa("TrainingState",{state:()=>({countdownFinished:!1})}),x0=Oa("BasicTrainingStore",{state:()=>({punches:0,intensity:0,displayMode:"figures",status:null}),actions:{setTrainingData(t){this.punches=t.punches,this.intensity=t.intensity,this.displayMode=t.displayMode},toggleStatus(){this.status=="work"?this.status="paused":this.status="work"}}}),O0=Oa("AdvTrainingStore",{state:()=>({rounds:1,complexity:0,intensity:0,status:null}),actions:{setTrainingData(t){this.rounds=t.rounds,this.complexity=t.complexity,this.intensity=t.intensity},toggleStatus(){this.status==="work"?this.status="paused":this.status="work"}}}),Ua=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},N0={};function D0(t,e){const n=Ia("router-link");return be(),hn(n,{to:"/"},{default:Rn(()=>[ji("Home")]),_:1})}const V0=Ua(N0,[["render",D0]]),L0=At({__name:"ShadowBoxingLink",setup(t){const e=Kr();return(n,r)=>{const s=Ia("router-link");return lt(e).user?(be(),hn(s,{key:0,to:{name:"shadow-boxing",params:{userId:lt(e).user.uid}}},{default:Rn(()=>[ji(" Shadow Boxing ")]),_:1},8,["to"])):zt("",!0)}}}),M0=At({__name:"WeightMonitorLink",setup(t){const e=Kr();return(n,r)=>{const s=Ia("router-link");return lt(e).user?(be(),hn(s,{key:0,to:{name:"weight-monitor",params:{userId:lt(e).user.uid}}},{default:Rn(()=>[ji(" Weight Monitor ")]),_:1},8,["to"])):zt("",!0)}}});/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ns=typeof document<"u";function F0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const pi=()=>{},Yt=Array.isArray,Ig=/#/g,U0=/&/g,B0=/\//g,$0=/=/g,j0=/\?/g,Ag=/\+/g,q0=/%5B/g,H0=/%5D/g,Rg=/%5E/g,z0=/%60/g,bg=/%7B/g,K0=/%7C/g,Sg=/%7D/g,W0=/%20/g;function iu(t){return encodeURI(""+t).replace(K0,"|").replace(q0,"[").replace(H0,"]")}function G0(t){return iu(t).replace(bg,"{").replace(Sg,"}").replace(Rg,"^")}function al(t){return iu(t).replace(Ag,"%2B").replace(W0,"+").replace(Ig,"%23").replace(U0,"%26").replace(z0,"`").replace(bg,"{").replace(Sg,"}").replace(Rg,"^")}function Q0(t){return al(t).replace($0,"%3D")}function Y0(t){return iu(t).replace(Ig,"%23").replace(j0,"%3F")}function X0(t){return t==null?"":Y0(t).replace(B0,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const J0=/\/$/,Z0=t=>t.replace(J0,"");function kc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=rR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ci(o)}}function eR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&Pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nR(t[n],e[n]))return!1;return!0}function nR(t,e){return Yt(t)?rf(t,e):Yt(e)?rf(e,t):t===e}function rf(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mi||(mi={}));function sR(t){if(!t)if(ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z0(t)}const iR=/^[^#]+#/;function oR(t,e){return t.replace(iR,"#")+e}function aR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function cR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sf(t,e){return(history.state?history.state.position-e:-1)+t}const cl=new Map;function lR(t,e){cl.set(t,e)}function uR(t){const e=cl.get(t);return cl.delete(t),e}let hR=()=>location.protocol+"//"+location.host;function Cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),nf(l,"")}return nf(n,t)+r+s}function dR(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const I=Cg(t,location),P=n.value,O=e.value;let x=0;if(m){if(n.value=I,e.value=m,o&&o===P){o=null;return}x=O?m.position-O.position:0}else r(I);s.forEach(M=>{M(n.value,P,{delta:x,type:ki.pop,direction:x?x>0?mi.forward:mi.back:mi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const I=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(I),I}function d(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:Ba()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ba():null}}function fR(t){const{history:e,location:n}=window,r={value:Cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:hR()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(I){console.error(I),n[d?"replace":"assign"](m)}}function o(l,h){const d=Pe({},e.state,of(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Pe({},s.value,e.state,{forward:l,scroll:Ba()});i(d.current,d,!0);const p=Pe({},of(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function pR(t){t=sR(t);const e=fR(t),n=dR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:oR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mR(t){return typeof t=="string"||t&&typeof t=="object"}function kg(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xg=Symbol("");var af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(af||(af={}));function ys(t,e){return Pe(new Error,{type:t,[xg]:!0},e)}function gn(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const cf="[^/]+?",gR={sensitive:!1,strict:!1,start:!0,end:!0},_R=/[.+*?^${}()[\]/\\]/g;function yR(t,e){const n=Pe({},gR,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let I=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(_R,"\\$&"),I+=40;else if(m.type===1){const{value:P,repeatable:O,optional:x,regexp:M}=m;i.push({name:P,repeatable:O,optional:x});const B=M||cf;if(B!==cf){I+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${P}" (${B}): `+W.message)}}let j=O?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(j=x&&h.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),s+=j,I+=20,x&&(I+=-8),O&&(I+=-20),B===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const I=d[m]||"",P=i[m-1];p[P.name]=I&&P.repeatable?I.split("/"):I}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of m)if(I.type===0)d+=I.value;else if(I.type===1){const{value:P,repeatable:O,optional:x}=I,M=P in h?h[P]:"";if(Yt(M)&&!O)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const B=Yt(M)?M.join("/"):M;if(!B)if(x)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function vR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ER(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lf(r))return 1;if(lf(s))return-1}return s.length-r.length}function lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wR={type:0,value:""},TR=/[a-zA-Z0-9_]/;function IR(t){if(!t)return[[]];if(t==="/")return[[wR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${h}": ${I}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:TR.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function AR(t,e,n){const r=yR(IR(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RR(t,e){const n=[],r=new Map;e=df({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const I=!m,P=bR(d);P.aliasOf=m&&m.record;const O=df(e,d),x=[P];if("alias"in d){const j=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of j)x.push(Pe({},P,{components:m?m.record.components:P.components,path:W,aliasOf:m?m.record:P}))}let M,B;for(const j of x){const{path:W}=j;if(p&&W[0]!=="/"){const ne=p.record.path,Q=ne[ne.length-1]==="/"?"":"/";j.path=p.record.path+(W&&Q+W)}if(M=AR(j,p,O),m?m.alias.push(M):(B=B||M,B!==M&&B.alias.push(M),I&&d.name&&!hf(M)&&o(d.name)),P.children){const ne=P.children;for(let Q=0;Q<ne.length;Q++)i(ne[Q],M,m&&m.children[Q])}m=m||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return B?()=>{o(B)}:pi}function o(d){if(kg(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){let p=0;for(;p<n.length&&ER(d,n[p])>=0&&(d.record.path!==n[p].record.path||!Og(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!hf(d)&&r.set(d.record.name,d)}function h(d,p){let m,I={},P,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw ys(1,{location:d});O=m.record.name,I=Pe(uf(p.params,m.keys.filter(B=>!B.optional).concat(m.parent?m.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),d.params&&uf(d.params,m.keys.map(B=>B.name))),P=m.stringify(I)}else if(d.path!=null)P=d.path,m=n.find(B=>B.re.test(P)),m&&(I=m.parse(P),O=m.record.name);else{if(m=p.name?r.get(p.name):n.find(B=>B.re.test(p.path)),!m)throw ys(1,{location:d,currentLocation:p});O=m.record.name,I=Pe({},p.params,d.params),P=m.stringify(I)}const x=[];let M=m;for(;M;)x.unshift(M.record),M=M.parent;return{name:O,path:P,params:I,matched:x,meta:PR(x)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:SR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function SR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PR(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Og(t,e){return e.children.some(n=>n===t||Og(t,n))}function CR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ag," "),o=i.indexOf("="),c=Ci(o<0?i:i.slice(0,o)),l=o<0?null:Ci(i.slice(o+1));if(c in e){let h=e[c];Yt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function ff(t){let e="";for(let n in t){const r=t[n];if(n=Q0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&al(i)):[r&&al(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const xR=Symbol(""),pf=Symbol(""),$a=Symbol(""),ou=Symbol(""),ll=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(ys(4,{from:n,to:e})):m instanceof Error?l(m):mR(m)?l(ys(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(OR(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Gn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=F0(d)?d.default:d;o.components[c]=p;const I=(p.__vccOpts||p)[e];return I&&Gn(I,n,r,o,c,s)()}))}}return i}function OR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mf(t){const e=$t($a),n=$t(ou),r=xt(()=>{const l=lt(t.to);return e.resolve(l)}),s=xt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(_s.bind(null,d));if(m>-1)return m;const I=gf(l[h-2]);return h>1&&gf(d)===I&&p[p.length-1].path!==I?p.findIndex(_s.bind(null,l[h-2])):m}),i=xt(()=>s.value>-1&&VR(n.params,r.value.params)),o=xt(()=>s.value>-1&&s.value===n.matched.length-1&&Pg(n.params,r.value.params));function c(l={}){return DR(l)?e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(pi):Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const NR=At({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mf,setup(t,{slots:e}){const n=$i(mf(t)),{options:r}=$t($a),s=xt(()=>({[_f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Kl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ng=NR;function DR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function gf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _f=(t,e,n)=>t??e??n,LR=At({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(ll),s=xt(()=>t.route||r.value),i=$t(pf,0),o=xt(()=>{let h=lt(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=xt(()=>s.value.matched[o.value]);Do(pf,xt(()=>o.value+1)),Do(xR,c),Do(ll,s);const l=ar();return ai(()=>[l.value,c.value,t.name],([h,d,p],[m,I,P])=>{d&&(d.instances[p]=h,I&&I!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!_s(d,I)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return yf(n.default,{Component:m,route:h});const I=p.props[d],P=I?I===!0?h.params:typeof I=="function"?I(h):I:null,x=Kl(m,Pe({},P,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return yf(n.default,{Component:x,route:h})||x}}});function yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dg=LR;function MR(t){const e=RR(t.routes,t),n=t.parseQuery||CR,r=t.stringifyQuery||ff,s=t.history,i=Qs(),o=Qs(),c=Qs(),l=xv(jn);let h=jn;ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Cc.bind(null,D=>""+D),p=Cc.bind(null,X0),m=Cc.bind(null,Ci);function I(D,X){let G,Z;return kg(D)?(G=e.getRecordMatcher(D),Z=X):Z=D,e.addRoute(Z,G)}function P(D){const X=e.getRecordMatcher(D);X&&e.removeRoute(X)}function O(){return e.getRoutes().map(D=>D.record)}function x(D){return!!e.getRecordMatcher(D)}function M(D,X){if(X=Pe({},X||l.value),typeof D=="string"){const T=kc(n,D,X.path),C=e.resolve({path:T.path},X),V=s.createHref(T.fullPath);return Pe(T,C,{params:m(C.params),hash:Ci(T.hash),redirectedFrom:void 0,href:V})}let G;if(D.path!=null)G=Pe({},D,{path:kc(n,D.path,X.path).path});else{const T=Pe({},D.params);for(const C in T)T[C]==null&&delete T[C];G=Pe({},D,{params:p(T)}),X.params=p(X.params)}const Z=e.resolve(G,X),ve=D.hash||"";Z.params=d(m(Z.params));const ke=eR(r,Pe({},D,{hash:G0(ve),path:Z.path})),v=s.createHref(ke);return Pe({fullPath:ke,hash:ve,query:r===ff?kR(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:v})}function B(D){return typeof D=="string"?kc(n,D,l.value.path):Pe({},D)}function j(D,X){if(h!==D)return ys(8,{from:X,to:D})}function W(D){return R(D)}function ne(D){return W(Pe(B(D),{replace:!0}))}function Q(D){const X=D.matched[D.matched.length-1];if(X&&X.redirect){const{redirect:G}=X;let Z=typeof G=="function"?G(D):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Pe({query:D.query,hash:D.hash,params:Z.path!=null?{}:D.params},Z)}}function R(D,X){const G=h=M(D),Z=l.value,ve=D.state,ke=D.force,v=D.replace===!0,T=Q(G);if(T)return R(Pe(B(T),{state:typeof T=="object"?Pe({},ve,T.state):ve,force:ke,replace:v}),X||G);const C=G;C.redirectedFrom=X;let V;return!ke&&tR(r,Z,G)&&(V=ys(16,{to:C,from:Z}),Dt(Z,Z,!0,!1)),(V?Promise.resolve(V):w(C,Z)).catch(N=>gn(N)?gn(N,2)?N:qt(N):me(N,C,Z)).then(N=>{if(N){if(gn(N,2))return R(Pe({replace:v},B(N.to),{state:typeof N.to=="object"?Pe({},ve,N.to.state):ve,force:ke}),X||C)}else N=A(C,Z,!0,v,ve);return b(C,Z,N),N})}function _(D,X){const G=j(D,X);return G?Promise.reject(G):Promise.resolve()}function y(D){const X=Nn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(D):D()}function w(D,X){let G;const[Z,ve,ke]=FR(D,X);G=xc(Z.reverse(),"beforeRouteLeave",D,X);for(const T of Z)T.leaveGuards.forEach(C=>{G.push(Gn(C,D,X))});const v=_.bind(null,D,X);return G.push(v),et(G).then(()=>{G=[];for(const T of i.list())G.push(Gn(T,D,X));return G.push(v),et(G)}).then(()=>{G=xc(ve,"beforeRouteUpdate",D,X);for(const T of ve)T.updateGuards.forEach(C=>{G.push(Gn(C,D,X))});return G.push(v),et(G)}).then(()=>{G=[];for(const T of ke)if(T.beforeEnter)if(Yt(T.beforeEnter))for(const C of T.beforeEnter)G.push(Gn(C,D,X));else G.push(Gn(T.beforeEnter,D,X));return G.push(v),et(G)}).then(()=>(D.matched.forEach(T=>T.enterCallbacks={}),G=xc(ke,"beforeRouteEnter",D,X,y),G.push(v),et(G))).then(()=>{G=[];for(const T of o.list())G.push(Gn(T,D,X));return G.push(v),et(G)}).catch(T=>gn(T,8)?T:Promise.reject(T))}function b(D,X,G){c.list().forEach(Z=>y(()=>Z(D,X,G)))}function A(D,X,G,Z,ve){const ke=j(D,X);if(ke)return ke;const v=X===jn,T=ns?history.state:{};G&&(Z||v?s.replace(D.fullPath,Pe({scroll:v&&T&&T.scroll},ve)):s.push(D.fullPath,ve)),l.value=D,Dt(D,X,G,v),qt()}let E;function Ce(){E||(E=s.listen((D,X,G)=>{if(!Zt.listening)return;const Z=M(D),ve=Q(Z);if(ve){R(Pe(ve,{replace:!0}),Z).catch(pi);return}h=Z;const ke=l.value;ns&&lR(sf(ke.fullPath,G.delta),Ba()),w(Z,ke).catch(v=>gn(v,12)?v:gn(v,2)?(R(v.to,Z).then(T=>{gn(T,20)&&!G.delta&&G.type===ki.pop&&s.go(-1,!1)}).catch(pi),Promise.reject()):(G.delta&&s.go(-G.delta,!1),me(v,Z,ke))).then(v=>{v=v||A(Z,ke,!1),v&&(G.delta&&!gn(v,8)?s.go(-G.delta,!1):G.type===ki.pop&&gn(v,20)&&s.go(-1,!1)),b(Z,ke,v)}).catch(pi)}))}let qe=Qs(),pe=Qs(),ye;function me(D,X,G){qt(D);const Z=pe.list();return Z.length?Z.forEach(ve=>ve(D,X,G)):console.error(D),Promise.reject(D)}function St(){return ye&&l.value!==jn?Promise.resolve():new Promise((D,X)=>{qe.add([D,X])})}function qt(D){return ye||(ye=!D,Ce(),qe.list().forEach(([X,G])=>D?G(D):X()),qe.reset()),D}function Dt(D,X,G,Z){const{scrollBehavior:ve}=t;if(!ns||!ve)return Promise.resolve();const ke=!G&&uR(sf(D.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return wa().then(()=>ve(D,X,ke)).then(v=>v&&cR(v)).catch(v=>me(v,D,X))}const Fe=D=>s.go(D);let Ue;const Nn=new Set,Zt={currentRoute:l,listening:!0,addRoute:I,removeRoute:P,hasRoute:x,getRoutes:O,resolve:M,options:t,push:W,replace:ne,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:pe.add,isReady:St,install(D){const X=this;D.component("RouterLink",Ng),D.component("RouterView",Dg),D.config.globalProperties.$router=X,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(l)}),ns&&!Ue&&l.value===jn&&(Ue=!0,W(s.location).catch(ve=>{}));const G={};for(const ve in jn)Object.defineProperty(G,ve,{get:()=>l.value[ve],enumerable:!0});D.provide($a,X),D.provide(ou,Dp(G)),D.provide(ll,l);const Z=D.unmount;Nn.add(D),D.unmount=function(){Nn.delete(D),Nn.size<1&&(h=jn,E&&E(),E=null,l.value=jn,Ue=!1,ye=!1),Z()}}};function et(D){return D.reduce((X,G)=>X.then(()=>y(G)),Promise.resolve())}return Zt}function FR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>_s(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>_s(h,l))||s.push(l))}return[n,r,s]}function au(){return $t($a)}function UR(){return $t(ou)}const vf=At({__name:"LogoutLink",setup(t){const e=au(),n=Kr(),r=()=>n.logoutUser(e.push);return(s,i)=>lt(n).user?(be(),Ge("button",{key:0,onClick:hi(r,["prevent"])},"Log Out")):zt("",!0)}}),Ef=At({__name:"LoginLink",setup(t){const e=Kr();return(n,r)=>{const s=Ia("router-link");return lt(e).user?zt("",!0):(be(),hn(s,{key:0,to:"login"},{default:Rn(()=>[ji("Log in")]),_:1}))}}}),BR={},$R={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},jR=fe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),qR=[jR];function HR(t,e){return be(),Ge("svg",$R,qR)}const zR=Ua(BR,[["render",HR]]),KR={},WR={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},GR=fe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"},null,-1),QR=[GR];function YR(t,e){return be(),Ge("svg",WR,QR)}const XR=Ua(KR,[["render",YR]]),JR={class:"flex flex-col text-center animate-appear-smooth"},ZR={class:"py-3 px-6 text-md md:text-lg lg:text-2xl hidden xs:block h-10"},eb={key:0,class:"w-100 flex justify-between items-center animate-appear-smooth"},tb=At({__name:"MainNav",setup(t){const e=Kr(),n=x0(),r=O0(),s=ar(!1),i=[{name:"home",component:V0,text:"Home"},{name:"shadow-boxing",component:L0,text:"Shadow Boxing"},{name:"weight-monitor",component:M0,text:"Weight Monitor"},{name:"login",component:Ef,text:"Login"},{name:"logout",component:vf,text:"Logout"}],o=()=>{s.value=!s.value},c=xt(()=>n.status==null&&r.status==null);return(l,h)=>(be(),Ge(at,null,[lt(e).authCompleted&&c.value?(be(),Ge("div",{key:0,class:"inline-block absolute top-0 right-0 p-3 xs:hidden z-50",onClick:o},[s.value?zt("",!0):(be(),hn(zR,{key:0,class:"w-8 h-8"})),s.value?(be(),hn(XR,{key:1,class:"w-8 h-8"})):zt("",!0)])):zt("",!0),Se(ka,{mode:"out-in","enter-active-class":"transition-transform duration-1000","leave-active-class":"transition-transform duration-1000","enter-from-class":"transform translate-x-full","leave-to-class":"transform translate-x-full"},{default:Rn(()=>[s.value?(be(),Ge("div",{key:0,class:"flex-col flex justify-center absolute h-full text-5xl items-center w-full bg-red-500 z-20",onWheel:h[0]||(h[0]=hi(()=>{},["prevent"])),onTouchmove:h[1]||(h[1]=hi(()=>{},["prevent"])),onScroll:h[2]||(h[2]=hi(()=>{},["prevent"]))},[fe("div",JR,[(be(),Ge(at,null,Hc(i,d=>Se($c(d.component),{key:d.name,onClick:o,text:d.text,class:"border-t py-2 hover:bg-custom-white hover:bg-opacity-30 hover:duration-300 font-semibold"},null,8,["text"])),64))])],32)):zt("",!0)]),_:1}),fe("div",ZR,[lt(e).authCompleted?(be(),Ge("div",eb,[(be(),Ge(at,null,Hc(i,d=>Se($c(d.component),{key:d.name,text:d.text,class:Bi(["active:text-red-500",d.component===Ef||d.component===vf?"bg-custom-white text-custom-black hover:bg-red-500 hover:text-custom-white px-5 py-2 hover:duration-200":"hover:text-custom-orange-light hover:duration-200"])},null,8,["text","class"])),64))])):zt("",!0)])],64))}}),nb="/assets/github-mark-white-BsLkggKK.png",rb={class:"flex flex-row mx-auto justify-center items-center gap-5"},sb={class:"text-md"},ib=fe("a",{class:"size-8 hover:scale-90 hover:duration-200",href:"https://github.com/TomekLeszczynski",target:"_blank"},[fe("img",{src:nb,alt:"github icon"})],-1),ob=At({__name:"AuthorCredits",setup(t){const e=new Date().getFullYear();return(n,r)=>(be(),Ge("div",rb,[fe("p",sb,Ei(lt(e))+" | Tomasz Leszczyński | For all boxing lovers and adepts",1),ib]))}}),ab="/assets/video06-qg5W03pb.mp4",cb={class:"flex items-center justify-center text-nowrap"},lb=fe("span",{class:"group-hover:translate-x-3 transition duration-300 ease-in-out"},[fe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[fe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1),cu=At({__name:"ButtonLabel",props:["labelText"],setup(t){return(e,n)=>(be(),Ge("div",cb,[fe("span",null,Ei(t.labelText),1),lb]))}}),wf=[{quote:"“Float like a butterfly, sting like a bee.”",author:"Muhammad Ali"},{quote:'"It’s not about how hard you can hit, it’s about how hard you can get hit and keep moving forward."',author:"Rocky Balboa"},{quote:'"I hated every minute of training, but I said - Don’t quit. Suffer now and live the rest of your life as a champion."',author:"Muhammad Ali"},{quote:'"A champion is someone who gets up when they can’t."',author:"Jack Dempsey"},{quote:'"Every time I step into the ring, I’m looking for a knockout. I’m there to make a statement."',author:"Mike Tyson"},{quote:'"Fighting is not physical, fighting is spiritual. It’s the determination and the will in the guy"',author:"Mike Tyson"},{quote:'"Knowing is not enough, we must apply. Willing is not enough, we must do."',author:"Bruce Lee"},{quote:'"Use only that which works, and take it from any place you can find it."',author:"Bruce Lee"},{quote:'"Take things as they are. Punch when you have to punch. Kick when you have to kick."',author:"Bruce Lee"},{quote:'"My opponent is my teacher. My ego is my enemy."',author:"Unknown"},{quote:'"The fighter who give their all will be around next year. Don’t save anything. Give it all you got."',author:"George Foreman"},{quote:'"Train with the energy of a warrior and soon you will have the heart of a warrior."',author:"Shifu Yan Lei "}],ub={class:"flex justify-center items-center absolute inset-0 origin-bottom","aria-live":"polite"},hb={class:"flex flex-col container justify-between sm:justify-evenly h-full p-5"},db=fe("video",{class:"absolute inset-0 h-full w-full opacity-30 -z-20 overflow-hidden object-cover",src:ab,autoplay:"",muted:"",loop:"",tabindex:"0"},null,-1),fb=fe("p",{class:"flex flex-col text-xl leading-none","aria-label":"Shadow Boxing Workout Logotype"},[fe("span",null,"Shadow"),fe("span",null,"Boxing"),fe("span",null,"Workout")],-1),pb={id:"quote",class:"text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-5 animate-text-show-up-delayed","aria-label":"quote"},mb={id:"author",class:"text-xl md:text-3xl lg:text-4xl text-end animate-text-show-up-delayed pt-9","aria-label":"quote's author"},gb={class:"flex justify-center animate-appear-slow-and-delayed"},_b=At({__name:"preloaderComp",setup(t){const e=ar("“Hard work beats talent when talent doesn't work hard.”"),n=ar("Tim Notke"),r=()=>{const s=Math.floor(Math.random()*wf.length),i=wf[s];e.value=i.quote,n.value=i.author};return ba(()=>{r()}),(s,i)=>(be(),Ge("div",ub,[fe("div",hb,[db,fb,fe("div",null,[fe("p",pb,Ei(e.value),1),fe("p",mb," ~ "+Ei(n.value),1)]),fe("div",gb,[fe("button",{onClick:i[0]||(i[0]=o=>s.$emit("skipped")),class:"mt-3 sm:mt-0 py-4 px-12 group md:w-96 w-full border","aria-label":"Skip preloader and get to Home View"},[Se(cu,{labelText:"Skip"})])])])]))}}),yb={key:1,class:"flex flex-col relative h-lvh"},vb={class:"flex flex-1 container mx-auto"},Eb={class:"flex flex-row justify-between items-center px-5 text-custom-white py-3"},wb=At({__name:"App",setup(t){const e=ar(!1),n=ar(!1),r=()=>{n.value=!0,setTimeout(()=>{e.value=!1},700)},s=UR(),i=au();return ba(async()=>{await i.isReady(),s.name==="home"?e.value=!0:e.value=!1,await Kr().checkUserAuthState()}),(o,c)=>(be(),Ge(at,null,[e.value?(be(),hn(_b,{key:0,onSkipped:r,class:Bi(n.value?"animate-preloader":"")},null,8,["class"])):zt("",!0),e.value?zt("",!0):(be(),Ge("div",yb,[fe("nav",null,[Se(tb)]),fe("main",vb,[Se(lt(Dg),null,{default:Rn(({Component:l})=>[Se(ka,{mode:"out-in","enter-active-class":"transition-opacity duration-350","leave-active-class":"transition-opacity duration-350","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:Rn(()=>[(be(),hn($c(l)))]),_:2},1024)]),_:1})]),fe("footer",Eb,[Se(ob)])]))],64))}}),Tb="modulepreload",Ib=function(t){return"/"+t},Tf={},_n=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=Ib(c),c in Tf)return;Tf[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Tb,l||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Vg="/assets/hero-halftone_opt-DLBIa6-f.webp",Ab={class:"overflow-hidden grid grid-cols-1 animate-text-show-up","aria-live":"polite"},Rb={class:"flex"},bb=["aria-label"],Sb=At({__name:"InfiniteScrollBanner",props:["bannerText"],setup(t){return(e,n)=>(be(),Ge("div",Ab,[fe("div",Rb,[(be(),Ge(at,null,Hc(4,r=>fe("div",{key:r},[fe("div",{class:"text-2xl lg:text-3xl whitespace-nowrap animate-infinite-scroll pl-5","aria-label":t.bannerText},Ei(t.bannerText),9,bb)])),64))])]))}}),Pb={},Cb={class:"flex flex-col lg:h-full lg:mb-6 md:mb-0 overflow-hidden relative"},kb=NE('<div class="animate-appear-slow-and-delayed lg:h-full"><img src="'+Vg+'" alt="halftone-image-woman-during-boxing-training" class="absolute inset-0 h-full w-full object-cover hidden lg:block opacity-35 -z-10" aria-hidden="true"></div><h2 class="text-4xl xl:text-5xl pb-2 z-10 animate-text-show-up-02 border-b hidden lg:block" aria-label="For the Love of Boxing"><span class="block">For</span><span class="block">The Love</span><span class="block">Of Boxing</span></h2>',2),xb=[kb];function Ob(t,e){return be(),Ge("div",Cb,xb)}const Nb=Ua(Pb,[["render",Ob]]),Db=At({__name:"TryAsGuest",setup(t){const e=au(),n=Kr(),r=async()=>{var s;try{await n.getAccessAsAnAnonymous(),e.push({name:"shadow-boxing",params:{userId:((s=n.user)==null?void 0:s.uid)||"Guest"}})}catch(i){console.error("Unexpected error during getting access as an anonymous user:"+i)}};return(s,i)=>(be(),Ge("button",{onClick:hi(r,["prevent"]),"aria-label":"Try as Guest - Access all features without an account",class:"bg-custom-orange-dark text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide w-full animate-button-show-from-left",tabindex:"0"},[Se(cu,{class:"text-custom-black",labelText:"Try As Guest"})]))}}),Vb={class:"grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:mt-16 md:mt-6"},Lb={class:"flex flex-col justify-between"},Mb=fe("p",{class:"animate-text-show-up-02 mt-5 md:mt-0 text-xs md:text-base"}," Unlock the full experience by creating an account. Save your training sessions and weight measurements for personalized tracking and progress analysis. ",-1),Fb={class:"flex flex-col justify-between"},Ub=fe("p",{class:"animate-text-show-up-02 mt-5 md:mt-0 text-xs md:text-base"}," Instantly access all features without the need for an account. Explore the app's functionality, but keep in mind that data won't be saved without registration. ",-1),Bb=At({__name:"GetAccess",setup(t){return(e,n)=>(be(),Ge("div",Vb,[fe("div",Lb,[Mb,Se(lt(Ng),{to:"/signup",class:"bg-red-500 text-md md:text-lg font-semibold mt-5 py-4 md:py-5 md:px-6 flex items-center justify-center group tracking-wide animate-button-show-from-left text-custom-black",role:"button",tabindex:"0","aria-label":"Get Started - Unlock the full experience by creating an account","data-testid":"get-started"},{default:Rn(()=>[Se(cu,{labelText:"Get Started"})]),_:1})]),fe("div",Fb,[Ub,Se(Db,{"data-testid":"try-as-guest"})])]))}}),$b={class:"grid grid-cols-1 gap-2 md:gap-3 p-4 relative","aria-live":"polite"},jb=fe("img",{src:Vg,alt:"halftone-image-woman-during-boxing-training",class:"absolute inset-0 h-full w-full object-contain opacity-30 -z-20 lg:hidden","aria-hidden":"true"},null,-1),qb=fe("h1",{class:"text-red-500 font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] tracking-tighter py-3 lg:mb-12"}," Shadow Boxing Workout ",-1),Hb={class:"grid grid-cols-full lg:grid-cols-2 gap-2 md:gap-8 mb-9"},zb={class:"h-full flex flex-col justify-between"},Kb=fe("div",{class:"text-base sm:text-xl md:text-2xl xl:text-3xl lg:mb-12 animate-text-show-up"},[fe("p",{class:"mb-3 indent-10"}," This app takes boxing training to a new level. With our app, you can practice 'shadow boxing,' refining your combinations, footwork, and head movement. "),fe("p",{class:"mb-3"}," Whether you're an experienced boxer or just starting your journey in the sport, our app adapts to your skill level. Additionally, track your progress by saving your workouts and weight measurements, allowing you to monitor your achievements. ")],-1),Wb=At({__name:"HomeView",setup(t){return(e,n)=>(be(),Ge("div",$b,[jb,qb,fe("div",Hb,[Se(Nb),fe("div",zb,[Kb,Se(Bb)])]),Se(Sb,{bannerText:"Online store and Blog section coming soon!"})]))}}),Gb=[{path:"/",name:"home",component:Wb},{path:"/profile/:userId/shadow-boxing",name:"shadow-boxing",component:()=>_n(()=>import("./ShadowBoxingView-aVsV7TI6.js"),[]),meta:{requiresAuth:!0},props:!0},{path:"/profile/:userId/shadow-boxing/basic",name:"basic",component:()=>_n(()=>import("./BasicTrainingDisplay-CEU6HRot.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0},props:!0},{path:"/profile/:userId/shadow-boxing/advanced",name:"advanced",component:()=>_n(()=>import("./AdvancedTrainingDisplay-D4BW-vTq.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0},props:!0},{path:"/signup",name:"signup",component:()=>_n(()=>import("./SignupView-C1QW4CuN.js"),__vite__mapDeps([3,4,5]))},{path:"/login",name:"login",component:()=>_n(()=>import("./LoginView-D6Um6UaE.js"),__vite__mapDeps([6,4]))},{path:"/password-reset",name:"password-reset",component:()=>_n(()=>import("./PasswordResetView-CsXTllyh.js"),__vite__mapDeps([7,5]))},{path:"/done",name:"done",component:()=>_n(()=>import("./RegisterConfirmationView-DoRcd7G5.js"),[])},{path:"/profile/:userId/weight-monitor",name:"weight-monitor",component:()=>_n(()=>import("./WeightMonitorView-DuOOWkox.js"),[]),meta:{requiresAuth:!0},props:!0},{path:"/404",name:"404",component:()=>_n(()=>import("./PageNotFound-C541UQ0K.js"),[])}],Lg=MR({history:pR(),routes:Gb,scrollBehavior(){return{top:0,left:0,behavior:"smooth"}}});function Qb(){return new Promise((t,e)=>{const n=hg(Tg(),r=>{n(),t(r)},e)})}Lg.beforeEach(async(t,e,n)=>{t.meta.requiresAuth&&!await Qb()?n({name:"login"}):n()});var If=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,_){function y(){}y.prototype=_.prototype,R.D=_.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(w,b,A){for(var E=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)E[Ce-2]=arguments[Ce];return _.prototype[b].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=R.g[0],y=R.g[1],b=R.g[2];var A=R.g[3],E=_+(A^y&(b^A))+w[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=A+(b^_&(y^b))+w[1]+3905402710&4294967295,A=_+(E<<12&4294967295|E>>>20),E=b+(y^A&(_^y))+w[2]+606105819&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(_^b&(A^_))+w[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(A^y&(b^A))+w[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(b^_&(y^b))+w[5]+1200080426&4294967295,A=_+(E<<12&4294967295|E>>>20),E=b+(y^A&(_^y))+w[6]+2821735955&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(_^b&(A^_))+w[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(A^y&(b^A))+w[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(b^_&(y^b))+w[9]+2336552879&4294967295,A=_+(E<<12&4294967295|E>>>20),E=b+(y^A&(_^y))+w[10]+4294925233&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(_^b&(A^_))+w[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(A^y&(b^A))+w[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(b^_&(y^b))+w[13]+4254626195&4294967295,A=_+(E<<12&4294967295|E>>>20),E=b+(y^A&(_^y))+w[14]+2792965006&4294967295,b=A+(E<<17&4294967295|E>>>15),E=y+(_^b&(A^_))+w[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(b^A&(y^b))+w[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(_^y))+w[6]+3225465664&4294967295,A=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(A^_))+w[11]+643717713&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(b^A))+w[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^A&(y^b))+w[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(_^y))+w[10]+38016083&4294967295,A=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(A^_))+w[15]+3634488961&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(b^A))+w[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^A&(y^b))+w[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(_^y))+w[14]+3275163606&4294967295,A=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(A^_))+w[3]+4107603335&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(b^A))+w[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^A&(y^b))+w[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^b&(_^y))+w[2]+4243563512&4294967295,A=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(A^_))+w[7]+1735328473&4294967295,b=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(b^A))+w[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(y^b^A)+w[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^b)+w[8]+2272392833&4294967295,A=_+(E<<11&4294967295|E>>>21),E=b+(A^_^y)+w[11]+1839030562&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^_)+w[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^A)+w[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^b)+w[4]+1272893353&4294967295,A=_+(E<<11&4294967295|E>>>21),E=b+(A^_^y)+w[7]+4139469664&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^_)+w[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^A)+w[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^b)+w[0]+3936430074&4294967295,A=_+(E<<11&4294967295|E>>>21),E=b+(A^_^y)+w[3]+3572445317&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^_)+w[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^A)+w[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^b)+w[12]+3873151461&4294967295,A=_+(E<<11&4294967295|E>>>21),E=b+(A^_^y)+w[15]+530742520&4294967295,b=A+(E<<16&4294967295|E>>>16),E=y+(b^A^_)+w[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(b^(y|~A))+w[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~b))+w[7]+1126891415&4294967295,A=_+(E<<10&4294967295|E>>>22),E=b+(_^(A|~y))+w[14]+2878612391&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~_))+w[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~A))+w[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~b))+w[3]+2399980690&4294967295,A=_+(E<<10&4294967295|E>>>22),E=b+(_^(A|~y))+w[10]+4293915773&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~_))+w[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~A))+w[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~b))+w[15]+4264355552&4294967295,A=_+(E<<10&4294967295|E>>>22),E=b+(_^(A|~y))+w[6]+2734768916&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~_))+w[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~A))+w[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~b))+w[11]+3174756917&4294967295,A=_+(E<<10&4294967295|E>>>22),E=b+(_^(A|~y))+w[2]+718787259&4294967295,b=A+(E<<15&4294967295|E>>>17),E=y+(A^(b|~_))+w[9]+3951481745&4294967295,R.g[0]=R.g[0]+_&4294967295,R.g[1]=R.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+A&4294967295}r.prototype.u=function(R,_){_===void 0&&(_=R.length);for(var y=_-this.blockSize,w=this.B,b=this.h,A=0;A<_;){if(b==0)for(;A<=y;)s(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<_;)if(w[b++]=R.charCodeAt(A++),b==this.blockSize){s(this,w),b=0;break}}else for(;A<_;)if(w[b++]=R[A++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var _=1;_<R.length-8;++_)R[_]=0;var y=8*this.o;for(_=R.length-8;_<R.length;++_)R[_]=y&255,y/=256;for(this.u(R),R=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)R[y++]=this.g[_]>>>w&255;return R};function i(R,_){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=_(R)}function o(R,_){this.h=_;for(var y=[],w=!0,b=R.length-1;0<=b;b--){var A=R[b]|0;w&&A==_||(y[b]=A,w=!1)}this.g=y}var c={};function l(R){return-128<=R&&128>R?i(R,function(_){return new o([_|0],0>_?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return x(h(-R));for(var _=[],y=1,w=0;R>=y;w++)_[w]=R/y|0,y*=4294967296;return new o(_,0)}function d(R,_){if(R.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R.charAt(0)=="-")return x(d(R.substring(1),_));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),w=p,b=0;b<R.length;b+=8){var A=Math.min(8,R.length-b),E=parseInt(R.substring(b,b+A),_);8>A?(A=h(Math.pow(_,A)),w=w.j(A).add(h(E))):(w=w.j(y),w=w.add(h(E)))}return w}var p=l(0),m=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var R=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);R+=(0<=w?w:4294967296+w)*_,_*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(O(this))return"-"+x(this).toString(R);for(var _=h(Math.pow(R,6)),y=this,w="";;){var b=W(y,_).g;y=M(y,b.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=b,P(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var _=0;_<R.g.length;_++)if(R.g[_]!=0)return!1;return!0}function O(R){return R.h==-1}t.l=function(R){return R=M(this,R),O(R)?-1:P(R)?0:1};function x(R){for(var _=R.g.length,y=[],w=0;w<_;w++)y[w]=~R.g[w];return new o(y,~R.h).add(m)}t.abs=function(){return O(this)?x(this):this},t.add=function(R){for(var _=Math.max(this.g.length,R.g.length),y=[],w=0,b=0;b<=_;b++){var A=w+(this.i(b)&65535)+(R.i(b)&65535),E=(A>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);w=E>>>16,A&=65535,E&=65535,y[b]=E<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function M(R,_){return R.add(x(_))}t.j=function(R){if(P(this)||P(R))return p;if(O(this))return O(R)?x(this).j(x(R)):x(x(this).j(R));if(O(R))return x(this.j(x(R)));if(0>this.l(I)&&0>R.l(I))return h(this.m()*R.m());for(var _=this.g.length+R.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<R.g.length;b++){var A=this.i(w)>>>16,E=this.i(w)&65535,Ce=R.i(b)>>>16,qe=R.i(b)&65535;y[2*w+2*b]+=E*qe,B(y,2*w+2*b),y[2*w+2*b+1]+=A*qe,B(y,2*w+2*b+1),y[2*w+2*b+1]+=E*Ce,B(y,2*w+2*b+1),y[2*w+2*b+2]+=A*Ce,B(y,2*w+2*b+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function B(R,_){for(;(R[_]&65535)!=R[_];)R[_+1]+=R[_]>>>16,R[_]&=65535,_++}function j(R,_){this.g=R,this.h=_}function W(R,_){if(P(_))throw Error("division by zero");if(P(R))return new j(p,p);if(O(R))return _=W(x(R),_),new j(x(_.g),x(_.h));if(O(_))return _=W(R,x(_)),new j(x(_.g),_.h);if(30<R.g.length){if(O(R)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=_;0>=w.l(R);)y=ne(y),w=ne(w);var b=Q(y,1),A=Q(w,1);for(w=Q(w,2),y=Q(y,2);!P(w);){var E=A.add(w);0>=E.l(R)&&(b=b.add(y),A=E),w=Q(w,1),y=Q(y,1)}return _=M(R,b.j(_)),new j(b,_)}for(b=p;0<=R.l(_);){for(y=Math.max(1,Math.floor(R.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=h(y),E=A.j(_);O(E)||0<E.l(R);)y-=w,A=h(y),E=A.j(_);P(A)&&(A=m),b=b.add(A),R=M(R,E)}return new j(b,R)}t.A=function(R){return W(this,R).h},t.and=function(R){for(var _=Math.max(this.g.length,R.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&R.i(w);return new o(y,this.h&R.h)},t.or=function(R){for(var _=Math.max(this.g.length,R.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|R.i(w);return new o(y,this.h|R.h)},t.xor=function(R){for(var _=Math.max(this.g.length,R.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^R.i(w);return new o(y,this.h^R.h)};function ne(R){for(var _=R.g.length+1,y=[],w=0;w<_;w++)y[w]=R.i(w)<<1|R.i(w-1)>>>31;return new o(y,R.h)}function Q(R,_){var y=_>>5;_%=32;for(var w=R.g.length-y,b=[],A=0;A<w;A++)b[A]=0<_?R.i(A+y)>>>_|R.i(A+y+1)<<32-_:R.i(A+y);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Dr=o}).apply(typeof If<"u"?If:typeof self<"u"?self:typeof window<"u"?window:{});var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fg,Ug,ni,Bg,jo,ul,$g,jg,qg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bo=="object"&&bo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,k){for(var z=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)z[Oe-2]=arguments[Oe];return u.prototype[S].apply(g,z)}}function O(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function x(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,k=g.length||0;a.length=S+k;for(let z=0;z<k;z++)a[S+z]=g[z]}else a.push(g)}}class M{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ne=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Q(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function R(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let k=0;k<y.length;k++)f=y[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function E(){var a=St;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ce{constructor(){this.h=this.g=null}add(u,f){const g=qe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new M(()=>new pe,a=>a.reset());class pe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,St=new Ce,qt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){A(f)}var u=qe;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Nn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{W(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}P(Zt,Ue);var et={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),X=0;function G(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++X,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,u,f,g,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var z=v(a,u,g,S);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new G(u,this.src,k,!!g,S),u.fa=f,a.push(u)),u};function ke(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(g,S,1),k&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,u,f,g){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),C={};function V(a,u,f,g,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)V(a,u[k],f,g,S);return null}return f=re(f),a&&a[D]?a.K(u,f,h(g)?!!g.capture:!!g,S):N(a,u,f,!1,g,S)}function N(a,u,f,g,S,k){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,Oe=Y(a);if(Oe||(a[T]=Oe=new ve(a)),f=Oe.add(u,f,g,z,k),f.proxy)return f;if(g=q(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Nn||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(H(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function K(a,u,f,g,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)K(a,u[k],f,g,S);else g=h(g)?!!g.capture:!!g,f=re(f),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=v(k,f,g,S),-1<f&&(Z(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,f,g,S)),(f=-1<a?u[a]:null)&&$(f))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])ke(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(H(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(ke(f,a),f.h==0&&(f.src=null,u[T]=null)):Z(a)}}}function H(a){return a in C?C[a]:C[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&$(a),a=f.call(g,u)}return a}function Y(a){return a=a[T],a instanceof ve?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function te(){Fe.call(this),this.i=new ve(this),this.M=this,this.F=null}P(te,Fe),te.prototype[D]=!0,te.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function ae(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var S=u;u=new Ue(g,a),w(u,S)}if(S=!0,f)for(var k=f.length-1;0<=k;k--){var z=u.g=f[k];S=we(z,g,!0,u)&&S}if(z=u.g=a,S=we(z,g,!0,u)&&S,S=we(z,g,!1,u)&&S,f)for(k=0;k<f.length;k++)z=u.g=f[k],S=we(z,g,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},te.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},te.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function we(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var z=u[k];if(z&&!z.da&&z.capture==f){var Oe=z.listener,it=z.ha||z.src;z.fa&&ke(a.i,z),S=Oe.call(it,g)!==!1&&S}}return S&&!g.defaultPrevented}function xe(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function He(a){a.g=xe(()=>{a.g=null,a.i&&(a.i=!1,He(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Pt extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(a){Fe.call(this),this.h=a,this.g={}}P(Vt,Fe);var Ds=[];function Dn(a){Q(a.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},a),a.g={}}Vt.prototype.N=function(){Vt.aa.N.call(this),Dn(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=c.JSON.stringify,vt=c.JSON.parse,Lt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function Ku(a){return a.h||(a.h=a.i())}function Wu(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Za(){Ue.call(this,"d")}P(Za,Ue);function ec(){Ue.call(this,"c")}P(ec,Ue);var _r={},Gu=null;function no(){return Gu=Gu||new te}_r.La="serverreachability";function Qu(a){Ue.call(this,_r.La,a)}P(Qu,Ue);function Ls(a){const u=no();ae(u,new Qu(u))}_r.STAT_EVENT="statevent";function Yu(a,u){Ue.call(this,_r.STAT_EVENT,a),this.stat=u}P(Yu,Ue);function Et(a){const u=no();ae(u,new Yu(u,a))}_r.Ma="timingevent";function Xu(a,u){Ue.call(this,_r.Ma,a),this.size=u}P(Xu,Ue);function Ms(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function by(a,u,f,g,S,k){a.info(function(){if(a.g)if(k)for(var z="",Oe=k.split("&"),it=0;it<Oe.length;it++){var Ae=Oe[it].split("=");if(1<Ae.length){var dt=Ae[0];Ae=Ae[1];var ft=dt.split("_");z=2<=ft.length&&ft[1]=="type"?z+(dt+"="+Ae+"&"):z+(dt+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+z})}function Sy(a,u,f,g,S,k,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+z})}function Xr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cy(a,f)+(g?" "+g:"")})}function Py(a,u){a.info(function(){return"TIMEOUT: "+u})}Fs.prototype.info=function(){};function Cy(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return Qr(f)}catch{return u}}var ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function so(){}P(so,Yr),so.prototype.g=function(){return new XMLHttpRequest},so.prototype.i=function(){return{}},tc=new so;function Vn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new Vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var eh={},nc={};function rc(a,u,f){a.L=1,a.v=co(pn(u)),a.m=f,a.P=!0,th(a,null)}function th(a,u){a.F=Date.now(),io(a),a.A=pn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Zu,a.g=Nh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Pt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ds[0]=S.toString()),S=Ds);for(var k=0;k<S.length;k++){var z=V(f,S[k],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ls(),by(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const u=this.M;u&&mn(a)==3?u.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=mn(this.g);var u=this.g.Ba();const es=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Th(this.g)))){this.J||ft!=4||u==7||(u==8||0>=es?Ls(3):Ls(2)),sc(this);var f=this.g.Z();this.X=f;t:if(nh(this)){var g=Th(this.g);a="";var S=g.length,k=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Us(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Sy(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,it=this.g;if((Oe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Oe)){var Ae=Oe;break t}}Ae=null}if(f=Ae)Xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,f);else{this.o=!1,this.s=3,Et(12),yr(this),Us(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<z.length;)if(Ht=ky(this,z),Ht==nc){ft==4&&(this.s=4,Et(14),f=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==eh){this.s=4,Et(15),Xr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Xr(this.i,this.l,Ht,null),ic(this,Ht);if(nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Xr(this.i,this.l,z,"[Invalid Chunked Response]"),yr(this),Us(this);else if(0<z.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),hc(dt),dt.M=!0,Et(11))}}else Xr(this.i,this.l,z,null),ic(this,z);ft==4&&yr(this),this.o&&!this.J&&(ft==4?Ch(this.j,this):(this.o=!1,io(this)))}else Wy(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),yr(this),Us(this)}}}catch{}finally{}};function nh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ky(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?nc:(f=Number(u.substring(f,g)),isNaN(f)?eh:(g+=1,g+f>u.length?nc:(u=u.slice(g,g+f),a.C=g+f,u)))}Vn.prototype.cancel=function(){this.J=!0,yr(this)};function io(a){a.S=Date.now()+a.I,rh(a,a.I)}function rh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(m(a.ba,a),u)}function sc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Py(this.i,this.A),this.L!=2&&(Ls(),Et(17)),yr(this),this.s=2,Us(this)):rh(this,this.S-a)};function Us(a){a.j.G==0||a.J||Ch(a.j,a)}function yr(a){sc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Dn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ic(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||oc(f.h,a))){if(!a.K&&oc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)po(f),ho(f);else break e;uc(f),Et(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ms(m(f.Za,f),6e3));if(1>=oh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Er(f,11)}else if((a.K||f.g==a)&&po(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Ae=S[u];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const dt=Ae[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Ae[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const es=Ae[5];es!=null&&typeof es=="number"&&0<es&&(g=1.5*es,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=a.g;if(Ht){const go=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(go){var k=g.h;k.g||go.indexOf("spdy")==-1&&go.indexOf("quic")==-1&&go.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ac(k,k.h),k.h=null))}if(g.D){const dc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,Ve(g.I,g.D,dc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=Oh(g,g.J?g.ia:null,g.W),z.K){ah(g.h,z);var Oe=z,it=g.L;it&&(Oe.I=it),Oe.B&&(sc(Oe),io(Oe)),g.g=z}else Sh(g);0<f.i.length&&fo(f)}else Ae[0]!="stop"&&Ae[0]!="close"||Er(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Er(f,7):lc(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}Ls(4)}catch{}}var xy=class{constructor(a,u){this.g=a,this.map=u}};function sh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oh(a){return a.h?1:a.g?a.g.size:0}function oc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ac(a,u){a.g?a.g.add(u):a.h=u}function ah(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}sh.prototype.cancel=function(){if(this.i=ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ch(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return O(a.i)}function Oy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function Ny(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function lh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Ny(a),g=Oy(a),S=g.length,k=0;k<S;k++)u.call(void 0,g[k],f&&f[k],a)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var k=a[f].substring(0,g);S=a[f].substring(g+1)}else k=a[f];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,oo(this,a.j),this.o=a.o,this.g=a.g,ao(this,a.s),this.l=a.l;var u=a.i,f=new js;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),hh(this,f),this.m=a.m}else a&&(u=String(a).match(uh))?(this.h=!1,oo(this,u[1]||"",!0),this.o=Bs(u[2]||""),this.g=Bs(u[3]||"",!0),ao(this,u[4]),this.l=Bs(u[5]||"",!0),hh(this,u[6]||"",!0),this.m=Bs(u[7]||"")):(this.h=!1,this.i=new js(null,this.h))}vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push($s(u,dh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push($s(u,dh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push($s(f,f.charAt(0)=="/"?My:Ly,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",$s(f,Uy)),a.join("")};function pn(a){return new vr(a)}function oo(a,u,f){a.j=f?Bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ao(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function hh(a,u,f){u instanceof js?(a.i=u,By(a.i,a.h)):(f||(u=$s(u,Fy)),a.i=new js(u,a.h))}function Ve(a,u,f){a.i.set(u,f)}function co(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $s(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Vy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dh=/[#\/\?@]/g,Ly=/[#\?:]/g,My=/[#\?]/g,Fy=/[#\?@]/g,Uy=/#/g;function js(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&Dy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=js.prototype,t.add=function(a,u){Ln(this),this.i=null,a=Jr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function fh(a,u){Ln(a),u=Jr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ph(a,u){return Ln(a),u=Jr(a,u),a.g.has(u)}t.forEach=function(a,u){Ln(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let k=0;k<S.length;k++)f.push(u[g])}return f},t.V=function(a){Ln(this);let u=[];if(typeof a=="string")ph(this,a)&&(u=u.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Ln(this),this.i=null,a=Jr(this,a),ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function mh(a,u,f){fh(a,u),0<f.length&&(a.i=null,a.g.set(Jr(a,u),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var S=k;z[g]!==""&&(S+="="+encodeURIComponent(String(z[g]))),a.push(S)}}return this.i=a.join("&")};function Jr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function By(a,u){u&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(fh(this,g),mh(this,S,f))},a)),a.j=u}function $y(a,u){const f=new Fs;if(c.Image){const g=new Image;g.onload=I(Mn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=I(Mn,f,"TestLoadImage: error",!1,u,g),g.onabort=I(Mn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(Mn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function jy(a,u){const f=new Fs,g=new AbortController,S=setTimeout(()=>{g.abort(),Mn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Mn(f,"TestPingServer: ok",!0,u):Mn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Mn(f,"TestPingServer: error",!1,u)})}function Mn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function qy(){this.g=new Lt}function Hy(a,u,f){const g=f||"";try{lh(a,function(S,k){let z=S;h(S)&&(z=Qr(S)),u.push(g+k+"="+encodeURIComponent(z))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function qs(a){this.l=a.Ub||null,this.j=a.eb||!1}P(qs,Yr),qs.prototype.g=function(){return new lo(this.l,this.j)},qs.prototype.i=function(a){return function(){return a}}({});function lo(a,u){te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(lo,te),t=lo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Hs(this):zs(this),this.readyState==3&&gh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _h(a){let u="";return Q(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function cc(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ve(a,u,f))}function $e(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,te);var zy=/^https?$/i,Ky=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?Ku(this.o):Ku(tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){yh(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ky,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of f)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){yh(this,k)}};function yh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,vh(a),uo(a)}function vh(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Eh(this):this.bb())},t.bb=function(){Eh(this)};function Eh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)xe(a.Ea,0,a);else if(ae(a,"readystatechange"),mn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var S=String(a.D).match(uh)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!zy.test(S?S.toLowerCase():"")}f=g}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var k=2<mn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",vh(a)}}finally{uo(a)}}}}function uo(a,u){if(a.g){wh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ae(a,"ready");try{f.onreadystatechange=g}catch{}}}function wh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vt(u)}};function Th(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wy(a){const u={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=b(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Ih(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sh(a&&a.concurrentRequestLimit),this.Da=new qy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ih.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){Et(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Oh(this,null,this.W),fo(this)};function lc(a){if(Ah(a),a.G==3){var u=a.U++,f=pn(a.I);if(Ve(f,"SID",a.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Ws(a,f),u=new Vn(a,a.j,u),u.L=2,u.v=co(pn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),io(u)}xh(a)}function ho(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function Ah(a){ho(a),a.u&&(c.clearTimeout(a.u),a.u=null),po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function fo(a){if(!ih(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||qt(),me||(ye(),me=!0),St.add(u,a),a.B=0}}function Gy(a,u){return oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(m(a.Ga,a,u),kh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Vn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=bh(this,S,u),f=pn(this.I),Ve(f,"RID",a),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Ws(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(_h(k)))+"&"+u:this.m&&cc(f,this.m,k)),ac(this.h,S),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),S.T=!0,rc(S,f,null)):rc(S,f,u),this.G=2}}else this.G==3&&(a?Rh(this,a):this.i.length==0||ih(this.h)||Rh(this))};function Rh(a,u){var f;u?f=u.l:f=a.U++;const g=pn(a.I);Ve(g,"SID",a.K),Ve(g,"RID",f),Ve(g,"AID",a.T),Ws(a,g),a.m&&a.o&&cc(g,a.m,a.o),f=new Vn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=bh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,f),rc(f,g,u)}function Ws(a,u){a.H&&Q(a.H,function(f,g){Ve(u,g,f)}),a.l&&lh({},function(f,g){Ve(u,g,f)})}function bh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const z=["count="+f];k==-1?0<f?(k=S[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let Oe=!0;for(let it=0;it<f;it++){let Ae=S[it].g;const dt=S[it].map;if(Ae-=k,0>Ae)k=Math.max(0,S[it].g-100),Oe=!1;else try{Hy(dt,z,"req"+Ae+"_")}catch{g&&g(dt)}}if(Oe){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Sh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||qt(),me||(ye(),me=!0),St.add(u,a),a.v=0}}function uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(m(a.Fa,a),kh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),ho(this),Ph(this))};function hc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ph(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Ws(a,u),a.m&&a.o&&cc(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=co(pn(u)),f.m=null,f.P=!0,th(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),uc(this),Et(19))};function po(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Ch(a,u){var f=null;if(a.g==u){po(a),hc(a),a.g=null;var g=2}else if(oc(a.h,u))f=u.D,ah(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=no(),ae(g,new Xu(g,f)),fo(a)}else Sh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Gy(a,u)||g==2&&uc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function kh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Er(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new vr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||oo(g,"https"),co(g),S?$y(g.toString(),f):jy(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),xh(a),Ah(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function xh(a){if(a.G=0,a.ka=[],a.l){const u=ch(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Oh(a,u,f){var g=f instanceof vr?pn(f):new vr(f);if(g.g!="")u&&(g.g=u+"."+g.g),ao(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new vr(null);g&&oo(k,g),u&&(k.g=u),S&&ao(k,S),f&&(k.l=f),g=k}return f=a.D,u=a.ya,f&&u&&Ve(g,f,u),Ve(g,"VER",a.la),Ws(a,g),g}function Nh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new qs({eb:f})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dh(){}t=Dh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mo(){}mo.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){te.call(this),this.g=new Ih(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Zr(this)}P(Ct,te),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){lc(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Qr(a),a=f);u.i.push(new xy(u.Ya++,a)),u.G==3&&fo(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Ct.aa.N.call(this)};function Vh(a){Za.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Vh,Za);function Lh(){ec.call(this),this.status=1}P(Lh,ec);function Zr(a){this.g=a}P(Zr,Dh),Zr.prototype.ua=function(){ae(this.g,"a")},Zr.prototype.ta=function(a){ae(this.g,new Vh(a))},Zr.prototype.sa=function(a){ae(this.g,new Lh)},Zr.prototype.ra=function(){ae(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,qg=function(){return new mo},jg=function(){return no()},$g=_r,ul={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,jo=ro,Ju.COMPLETE="complete",Bg=Ju,Wu.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",te.prototype.listen=te.prototype.K,ni=Wu,Ug=qs,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Fg=$e}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});const Af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Wl("@firebase/firestore");function Ys(){return $r.logLevel}function ee(t,...e){if($r.logLevel<=_e.DEBUG){const n=e.map(lu);$r.debug(`Firestore (${Cs}): ${t}`,...n)}}function Pn(t,...e){if($r.logLevel<=_e.ERROR){const n=e.map(lu);$r.error(`Firestore (${Cs}): ${t}`,...n)}}function vs(t,...e){if($r.logLevel<=_e.WARN){const n=e.map(lu);$r.warn(`Firestore (${Cs}): ${t}`,...n)}}function lu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function De(t,e){t||le()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class Xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jb{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new Hg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new mt(e)}}class Zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new tS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Je(0,0))}static max(){return new ue(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends xi{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const sS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends xi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return sS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Me.fromString(e))}static fromName(e){return new oe(Me.fromString(e).popFirst(5))}static empty(){return new oe(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Me(e.slice()))}}function iS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new hr(s,oe.empty(),e)}function oS(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ue.min(),oe.empty(),-1)}static max(){return new hr(ue.max(),oe.empty(),-1)}}function aS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==cS)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}uu.oe=-1;function ja(t){return t==null}function la(t){return t===0&&1/t==-1/0}function hS(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(e){return new bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ut(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wg("Invalid base64 string: "+i):i}}(e);return new yt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const dS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(De(!!t),typeof t=="string"){let e=0;const n=dS.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function du(t){const e=t.mapValue.fields.__previous_value__;return hu(e)?du(e):e}function Oi(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hu(t)?4:pS(t)?9007199254740991:10:le()}function dn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dr(s.timestampValue),c=dr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?la(o)===la(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Rf(o)!==Rf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dn(o[l],c[l])))return!1;return!0}(t,e);default:return le()}}function Di(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Sf(t.timestampValue,e.timestampValue);case 4:return Sf(Oi(t),Oi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const c=jr(i),l=jr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Re(c[h],l[h]);if(d!==0)return d}return Re(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Re(We(i.latitude),We(o.latitude));return c!==0?c:Re(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=ws(c[h],l[h]);if(d)return d}return Re(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Po.mapValue&&o===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Re(l[p],d[p]);if(m!==0)return m;const I=ws(c[l[p]],h[d[p]]);if(I!==0)return I}return Re(l.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function Sf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=dr(t),r=dr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Ts(t){return hl(t)}function hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hl(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dl(t){return!!t&&"integerValue"in t}function fu(t){return!!t&&"arrayValue"in t}function Cf(t){return!!t&&"nullValue"in t}function kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=gi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(gi(this.value))}}function Gg(t){const e=[];return ks(t.fields,(n,r)=>{const s=new ct([n]);if(qo(r)){const i=Gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,ue.min(),ue.min(),ue.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,ue.min(),ue.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ue.min(),ue.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.position=e,this.inclusive=n}}function xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function mS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{}class Qe extends Qg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _S(e,n,r):n==="array-contains"?new ES(e,r):n==="in"?new wS(e,r):n==="not-in"?new TS(e,r):n==="array-contains-any"?new IS(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yS(e,r):new vS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Qg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Xt(e,n)}matches(e){return Yg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yg(t){return t.op==="and"}function Xg(t){return gS(t)&&Yg(t)}function gS(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function fl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ts(t.value);if(Xg(t))return t.filters.map(e=>fl(e)).join(",");{const e=t.filters.map(n=>fl(n)).join(",");return`${t.op}(${e})`}}function Jg(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Jg(o,s.filters[c]),!0):!1}(t,e):void le()}function Zg(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ts(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(Zg).join(" ,")+"}"}(t):"Filter"}class _S extends Qe{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class yS extends Qe{constructor(e,n){super(e,"in",n),this.keys=e_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vS extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=e_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class ES extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fu(n)&&Di(n.arrayValue,this.value)}}class wS extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class TS extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class IS extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Nf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new AS(t,e,n,r,s,i,o)}function pu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),e.ue=n}return e.ue}function mu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Of(t.startAt,e.startAt)&&Of(t.endAt,e.endAt)}function pl(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RS(t,e,n,r,s,i,o,c){return new xs(t,e,n,r,s,i,o,c)}function gu(t){return new xs(t)}function Df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t_(t){return t.collectionGroup!==null}function _i(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ut(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vi(i,r))}),n.has(ct.keyField().canonicalString())||e.ce.push(new Vi(ct.keyField(),r))}return e.ce}function cn(t){const e=de(t);return e.le||(e.le=bS(e,_i(t))),e.le}function bS(t,e){if(t.limitType==="F")return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)});const n=t.endAt?new ua(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ua(t.startAt.position,t.startAt.inclusive):null;return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ml(t,e){const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gl(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qa(t,e){return mu(cn(t),cn(e))&&t.limitType===e.limitType}function n_(t){return`${pu(cn(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zg(s)).join(", ")}]`),ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ts(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ts(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=xf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,c,l){const h=xf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,_i(r),s))}(t,e)}function SS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r_(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=PS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function PS(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ws(l,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Be(oe.comparator);function Cn(){return CS}const s_=new Be(oe.comparator);function ri(...t){let e=s_;for(const n of t)e=e.insert(n.key,n);return e}function i_(t){let e=s_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return yi()}function o_(){return yi()}function yi(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const kS=new Be(oe.comparator),xS=new ut(oe.comparator);function ge(...t){let e=xS;for(const n of t)e=e.add(n);return e}const OS=new ut(Re);function NS(){return OS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function DS(t,e){return hS(e)?c_(e):a_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this._=void 0}}function VS(t,e,n){return t instanceof ha?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hu(i)&&(i=du(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Li?u_(t,e):t instanceof Mi?h_(t,e):function(s,i){const o=l_(s,i),c=Vf(o)+Vf(s.Pe);return dl(o)&&dl(s.Pe)?c_(c):a_(s.serializer,c)}(t,e)}function LS(t,e,n){return t instanceof Li?u_(t,e):t instanceof Mi?h_(t,e):n}function l_(t,e){return t instanceof da?function(r){return dl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ha extends za{}class Li extends za{constructor(e){super(),this.elements=e}}function u_(t,e){const n=d_(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mi extends za{constructor(e){super(),this.elements=e}}function h_(t,e){let n=d_(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class da extends za{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vf(t){return We(t.integerValue||t.doubleValue)}function d_(t){return fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Li&&s instanceof Li||r instanceof Mi&&s instanceof Mi?Es(r.elements,s.elements,dn):r instanceof da&&s instanceof da?dn(r.Pe,s.Pe):r instanceof ha&&s instanceof ha}(t.transform,e.transform)}class FS{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function f_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m_(t.key,In.none()):new Ji(t.key,t.data,In.none());{const n=t.data,r=Ft.empty();let s=new ut(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wr(t.key,r,new Gt(s.toArray()),In.none())}}function US(t,e,n){t instanceof Ji?function(s,i,o){const c=s.value.clone(),l=Mf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(s,i,o){if(!Ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Mf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(p_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof Ji?function(i,o,c,l){if(!Ho(i.precondition,o))return c;const h=i.value.clone(),d=Ff(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(i,o,c,l){if(!Ho(i.precondition,o))return c;const h=Ff(i.fieldTransforms,l,o),d=o.data;return d.setAll(p_(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function BS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=l_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Es(r,s,(i,o)=>MS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wr extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function p_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mf(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,LS(o,c,n[s]))}return r}function Ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,VS(i,o,e))}return r}class m_ extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $S extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&US(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=f_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>Lf(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>Lf(n,r))}}class _u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return kS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _u(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ee;function zS(t){switch(t){default:return le();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function g_(t){if(t===void 0)return Pn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ke.OK:return L.OK;case Ke.CANCELLED:return L.CANCELLED;case Ke.UNKNOWN:return L.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return L.INTERNAL;case Ke.UNAVAILABLE:return L.UNAVAILABLE;case Ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ke.NOT_FOUND:return L.NOT_FOUND;case Ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ke.ABORTED:return L.ABORTED;case Ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ke.DATA_LOSS:return L.DATA_LOSS;default:return le()}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Dr([4294967295,4294967295],0);function Uf(t){const e=KS().encode(t),n=new Mg;return n.update(e),new Uint8Array(n.digest())}function Bf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class yu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new si(`Invalid padding: ${n}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new si(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(WS)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uf(e),[r,s]=Bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Uf(e),[r,s]=Bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wa(ue.min(),s,new Be(Re),Cn(),ge())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class __{constructor(e,n){this.targetId=e,this.me=n}}class y_{constructor(e,n,r=yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $f{constructor(){this.fe=0,this.ge=qf(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Zi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=jf(),this.Qe=new Be(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(pl(i))if(r===0){const o=new oe(i.path);this.Ue(n,o,gt.newNoDocument(o,ue.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof Wg)return vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yu(o,s,i)}catch(l){return vs(l instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&pl(c.target)){const l=new oe(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Wa(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=jf(),this.Qe=new Be(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $f,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $f),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jf(){return new Be(oe.comparator)}function qf(){return new Be(oe.comparator)}const QS={asc:"ASCENDING",desc:"DESCENDING"},YS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XS={and:"AND",or:"OR"};class JS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _l(t,e){return t.useProto3Json||ja(e)?e:{value:e}}function fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZS(t,e){return fa(t,e.toTimestamp())}function ln(t){return De(!!t),ue.fromTimestamp(function(n){const r=dr(n);return new Je(r.seconds,r.nanos)}(t))}function vu(t,e){return yl(t,e).canonicalString()}function yl(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E_(t){const e=Me.fromString(t);return De(R_(e)),e}function vl(t,e){return vu(t.databaseId,e.path)}function Oc(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(T_(n))}function w_(t,e){return vu(t.databaseId,e)}function eP(t){const e=E_(t);return e.length===4?Me.emptyPath():T_(e)}function El(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T_(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hf(t,e,n){return{name:vl(t,e),fields:n.value.mapValue.fields}}function tP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(De(d===void 0||typeof d=="string"),yt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?L.UNKNOWN:g_(h.code);return new J(d,h.message||"")}(o);n=new y_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):ue.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new zo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(t,r.document),i=r.readTime?ln(r.readTime):ue.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new zo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HS(s,i),c=r.targetId;n=new __(c,o)}}return n}function nP(t,e){let n;if(e instanceof Ji)n={update:Hf(t,e.key,e.value)};else if(e instanceof m_)n={delete:vl(t,e.key)};else if(e instanceof Wr)n={update:Hf(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof $S))return le();n={verify:vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof da)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function rP(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(ue.min())&&(o=ln(i)),new FS(o,s.transformResults||[])}(n,e))):[]}function sP(t,e){return{documents:[w_(t,e.path)]}}function iP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=w_(t,s);const i=function(h){if(h.length!==0)return A_(Xt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:ss(m.field),direction:cP(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=_l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function oP(t){let e=eP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=I_(p);return m instanceof Xt&&Xg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Vi(is(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ja(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,I=p.values||[];return new ua(I,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,I=p.values||[];return new ua(I,m)}(n.endAt)),RS(e,s,o,i,c,"F",l,h)}function aP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function I_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>I_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function cP(t){return QS[t]}function lP(t){return YS[t]}function uP(t){return XS[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return ct.fromServerFormat(t.fieldPath)}function A_(t){return t instanceof Qe?function(n){if(n.op==="=="){if(kf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(Cf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(Cf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:lP(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>A_(s));return r.length===1?r[0]:{compositeFilter:{op:uP(n.op),filters:r}}}(t):le()}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.ct=e}}function fP(t){const e=oP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this._n=new mP}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(hr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class mP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Is(0)}static Ln(){return new Is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Gt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ri();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Cn();const o=yi(),c=function(){return yi()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Wr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),vi(d.mutation,h,d.mutation.getFieldMask(),Je.now())):o.set(h.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new _P(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new Be((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Gt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=o_();d.forEach(m=>{if(!i.has(m)){const I=f_(n.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(kr());let c=-1,l=i;return o.next(h=>F.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(d=>({batchId:c,changes:i_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ri();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const h=function(p,m){return new xs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let c=ri();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&vi(d.mutation,h,Gt.empty(),Je.now()),Ha(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:fP(s.bundledQuery),readTime:ln(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.overlays=new Be(oe.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=kr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return F.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qS(n,r));let i=this.hr.get(n);i===void 0&&(i=ge(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Pr=new ut(tt.Ir),this.Tr=new ut(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new oe(new Me([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new Me([])),r=new tt(n,e),s=new tt(n,e+1);let i=ge();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||Re(e.pr,n.pr)}static Er(e,n){return Re(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ut(tt.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Re);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new tt(new oe(i),0);let c=new ut(Re);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},o),F.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new tt(n,0),s=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.vr=e,this.docs=function(){return new Be(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,c=new oe(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||aS(oS(d),r)<=0||(s.has(d.key)||Ha(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return F.resolve(this.size)}}class IP extends gP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.persistence=e,this.Mr=new Os(n=>pu(n),mu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Eu,this.targetCount=0,this.Lr=Is.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.Br={},this.overlays={},this.kr=new uu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new AP(this),this.indexManager=new pP,this.remoteDocumentCache=function(s){return new TP(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new dP(n),this.$r=new vP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new bP(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class bP extends lS{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.zr=new Eu,this.jr=null}static Hr(e){return new wu(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const s=oe.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Qw()?8:uS(ht())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SP;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ys()<=_e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(Ys()<=_e.DEBUG&&ee("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ys()<=_e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):F.resolve())}ji(e,n){if(Df(n))return F.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,o,l.readTime)?this.ji(e,gl(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return Df(n)||s.isEqual(ue.min())?F.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?F.resolve(null):(Ys()<=_e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.es(e,o,n,iS(s,-1)).next(c=>c))})}Zi(e,n){let r=new ut(r_(e));return n.forEach((s,i)=>{Ha(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ys()<=_e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",rs(n)),this.zi.getDocumentsMatchingQuery(e,n,hr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Be(Re),this.rs=new Os(i=>pu(i),mu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function kP(t,e,n,r){return new CP(t,e,n,r)}async function b_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:o,addedBatchIds:c}))})})}function xP(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let I=F.resolve();return m.forEach(P=>{I=I.next(()=>d.getEntry(l,P)).next(O=>{const x=h.docVersions.get(P);De(x!==null),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function S_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function OP(t,e){const n=de(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(yt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(O,x,M){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,I,d)&&c.push(n.Qr.updateTargetData(i,I))});let l=Cn(),h=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(NP(i,o,e.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(ue.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function NP(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:o,ls:s}})}function DP(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VP(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function wl(t,e,n){const r=de(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function zf(t,e,n){const r=de(t);let s=ue.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=de(l),m=p.rs.get(d);return m!==void 0?F.resolve(p.ns.get(m)):p.Qr.getTargetData(h,d)}(r,o,cn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ge())).next(c=>(LP(r,SS(e),c),{documents:c,hs:i})))}function LP(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Kf{constructor(){this.activeTargetIds=NS()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MP{constructor(){this.no=new Kf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Kf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co=null;function Nc(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class $P extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Nc(),l=this.vo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,o),this.Mo(n,l,h,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw vs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=UP[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Nc();return new Promise((o,c)=>{const l=new Fg;l.setWithCredentials(!0),l.listenOnce(Bg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jo.NO_ERROR:const d=l.getResponseJson();ee(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case jo.TIMEOUT:ee(pt,`RPC '${e}' ${i} timed out`),c(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const p=l.getStatus();if(ee(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const P=function(x){const M=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(M)>=0?M:L.UNKNOWN}(I.status);c(new J(P,I.message))}else c(new J(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(L.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{ee(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=Nc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qg(),c=jg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Ug({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ee(pt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,I=!1;const P=new BP({lo:x=>{I?ee(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(ee(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(pt,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},ho:()=>p.close()}),O=(x,M,B)=>{x.listen(M,j=>{try{B(j)}catch(W){setTimeout(()=>{throw W},0)}})};return O(p,ni.EventType.OPEN,()=>{I||(ee(pt,`RPC '${e}' stream ${s} transport opened.`),P.mo())}),O(p,ni.EventType.CLOSE,()=>{I||(I=!0,ee(pt,`RPC '${e}' stream ${s} transport closed`),P.po())}),O(p,ni.EventType.ERROR,x=>{I||(I=!0,vs(pt,`RPC '${e}' stream ${s} transport errored:`,x),P.po(new J(L.UNAVAILABLE,"The operation could not be completed")))}),O(p,ni.EventType.MESSAGE,x=>{var M;if(!I){const B=x.data[0];De(!!B);const j=B,W=j.error||((M=j[0])===null||M===void 0?void 0:M.error);if(W){ee(pt,`RPC '${e}' stream ${s} received error:`,W);const ne=W.status;let Q=function(y){const w=Ke[y];if(w!==void 0)return g_(w)}(ne),R=W.message;Q===void 0&&(Q=L.INTERNAL,R="Unknown error status: "+ne+" with message "+W.message),I=!0,P.po(new J(Q,R)),p.close()}else ee(pt,`RPC '${e}' stream ${s} received:`,B),P.yo(B)}}),O(c,$g.STAT_EVENT,x=>{x.stat===ul.PROXY?ee(pt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ul.NOPROXY&&ee(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new JS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new P_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jP extends C_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=tP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?ln(o.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=El(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=pl(l)?{documents:sP(i,l)}:{query:iP(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=v_(i,o.resumeToken);const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=fa(i,o.snapshotVersion.toTimestamp());const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=aP(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=El(this.serializer),n.removeTarget=e,this.i_(n)}}class qP extends C_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=rP(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.A_(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=El(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nP(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,yl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,yl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class zP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Pn(n),this.y_=!1):ee("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.M_.add(4),await eo(h),h.N_.set("Unknown"),h.M_.delete(4),await Qa(h)}(this))})}),this.N_=new zP(r,s)}}async function Qa(t){if(Gr(t))for(const e of t.x_)await e(!0)}async function eo(t){for(const e of t.x_)await e(!1)}function k_(t,e){const n=de(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),bu(n)?Ru(n):Ns(n).Xo()&&Au(n,e))}function Iu(t,e){const n=de(t),r=Ns(n);n.F_.delete(e),r.Xo()&&x_(n,e),n.F_.size===0&&(r.Xo()?r.n_():Gr(n)&&n.N_.set("Unknown"))}function Au(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).P_(e)}function x_(t,e){t.L_.xe(e),Ns(t).I_(e)}function Ru(t){t.L_=new GS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.N_.w_()}function bu(t){return Gr(t)&&!Ns(t).Zo()&&t.F_.size>0}function Gr(t){return de(t).M_.size===0}function O_(t){t.L_=void 0}async function WP(t){t.N_.set("Online")}async function GP(t){t.F_.forEach((e,n)=>{Au(t,e)})}async function QP(t,e){O_(t),bu(t)?(t.N_.D_(e),Ru(t)):t.N_.set("Unknown")}async function YP(t,e,n){if(t.N_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pa(t,r)}else if(e instanceof zo?t.L_.Ke(e):e instanceof __?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await S_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),x_(i,l);const p=new Zn(d.target,l,h,d.sequenceNumber);Au(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await pa(t,r)}}async function pa(t,e,n){if(!Xi(e))throw e;t.M_.add(1),await eo(t),t.N_.set("Offline"),n||(n=()=>S_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Qa(t)})}function N_(t,e){return e().catch(n=>pa(t,n,e))}async function Ya(t){const e=de(t),n=fr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;XP(e);)try{const s=await DP(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,JP(e,s)}catch(s){await pa(e,s)}D_(e)&&V_(e)}function XP(t){return Gr(t)&&t.v_.length<10}function JP(t,e){t.v_.push(e);const n=fr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function D_(t){return Gr(t)&&!fr(t).Zo()&&t.v_.length>0}function V_(t){fr(t).start()}async function ZP(t){fr(t).V_()}async function eC(t){const e=fr(t);for(const n of t.v_)e.d_(n.mutations)}async function tC(t,e,n){const r=t.v_.shift(),s=_u.from(r,e,n);await N_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ya(t)}async function nC(t,e){e&&fr(t).E_&&await async function(r,s){if(function(o){return zS(o)&&o!==L.ABORTED}(s.code)){const i=r.v_.shift();fr(r).t_(),await N_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ya(r)}}(t,e),D_(t)&&V_(t)}async function Gf(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.M_.add(3),await eo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Qa(n)}async function rC(t,e){const n=de(t);e?(n.M_.delete(2),await Qa(n)):e||(n.M_.add(2),await eo(n),n.N_.set("Unknown"))}function Ns(t){return t.B_||(t.B_=function(n,r,s){const i=de(n);return i.f_(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:WP.bind(null,t),To:GP.bind(null,t),Ao:QP.bind(null,t),h_:YP.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),bu(t)?Ru(t):t.N_.set("Unknown")):(await t.B_.stop(),O_(t))})),t.B_}function fr(t){return t.k_||(t.k_=function(n,r,s){const i=de(n);return i.f_(),new qP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:ZP.bind(null,t),Ao:nC.bind(null,t),R_:eC.bind(null,t),A_:tC.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ya(t)):(await t.k_.stop(),t.v_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Su(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Xi(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ri(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.q_=new Be(oe.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new As(e,n,ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class iC{constructor(){this.queries=new Os(e=>n_(e),qa),this.onlineState="Unknown",this.z_=new Set}}async function L_(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new sC,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Pu(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Cu(n)}async function M_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oC(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&Cu(n)}function aC(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Cu(t){t.z_.forEach(e=>{e.next()})}var Tl,Yf;(Yf=Tl||(Tl={})).J_="default",Yf.Cache="cache";class F_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Tl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.key=e}}class B_{constructor(e){this.key=e}}class cC{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=r_(e),this.Ta=new ps(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Qf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),I=Ha(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),O=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?P!==O&&(r.track({type:3,doc:I}),x=!0):this.Ra(m,I)||(r.track({type:2,doc:I}),x=!0,(l&&this.Ia(I,l)>0||h&&this.Ia(I,h)<0)&&(c=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(l||h)&&(c=!0)),x&&(I?(o=o.add(I),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(I,P){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return O(I)-O(P)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,o.length!==0||h?{snapshot:new As(this.query,e.Ta,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Qf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new B_(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new U_(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return As.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class lC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uC{constructor(e){this.key=e,this.wa=!1}}class hC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Os(c=>n_(c),qa),this.Da=new Map,this.Ca=new Set,this.va=new Be(oe.comparator),this.Fa=new Map,this.Ma=new Eu,this.xa={},this.Oa=new Map,this.Na=Is.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function dC(t,e,n=!0){const r=K_(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await $_(r,e,n,!0),s}async function fC(t,e){const n=K_(t);await $_(n,e,!0,!1)}async function $_(t,e,n,r){const s=await VP(t.localStore,cn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await pC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&k_(t.remoteStore,s),c}async function pC(t,e,n,r,s){t.Ba=(p,m,I)=>async function(O,x,M,B){let j=x.view.da(M);j.Xi&&(j=await zf(O.localStore,x.query,!1).then(({documents:R})=>x.view.da(R,j)));const W=B&&B.targetChanges.get(x.targetId),ne=B&&B.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(j,O.isPrimaryClient,W,ne);return Jf(O,x.targetId,Q.fa),Q.snapshot}(t,p,m,I);const i=await zf(t.localStore,e,!0),o=new cC(e,i.hs),c=o.da(i.documents),l=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Jf(t,n,h.fa);const d=new lC(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function mC(t,e,n){const r=de(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!qa(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Iu(r.remoteStore,s.targetId),Il(r,s.targetId)}).catch(Yi)):(Il(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function gC(t,e){const n=de(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Iu(n.remoteStore,r.targetId))}async function _C(t,e,n){const r=AC(t);try{const s=await function(o,c){const l=de(o),h=Je.now(),d=c.reduce((I,P)=>I.add(P.key),ge());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Cn(),O=ge();return l.os.getEntries(I,d).next(x=>{P=x,P.forEach((M,B)=>{B.isValidDocument()||(O=O.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,P)).next(x=>{p=x;const M=[];for(const B of c){const j=BS(B,p.get(B.key).overlayedDocument);j!=null&&M.push(new Wr(B.key,j,Gg(j.value.mapValue),In.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,M,c)}).next(x=>{m=x;const M=x.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(I,x.batchId,M)})}).then(()=>({batchId:m.batchId,changes:i_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.xa[o.currentUser.toKey()];h||(h=new Be(Re)),h=h.insert(c,l),o.xa[o.currentUser.toKey()]=h}(r,s.batchId,n),await to(r,s.changes),await Ya(r.remoteStore)}catch(s){const i=Pu(s,"Failed to persist write");n.reject(i)}}async function j_(t,e){const n=de(t);try{const r=await OP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?De(o.wa):s.removedDocuments.size>0&&(De(o.wa),o.wa=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function Xf(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(c)&&(h=!0)}),h&&Cu(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yC(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Be(oe.comparator);o=o.insert(i,gt.newNoDocument(i,ue.min()));const c=ge().add(i),l=new Wa(ue.min(),new Map,new Be(Re),o,c);await j_(r,l),r.va=r.va.remove(i),r.Fa.delete(e),ku(r)}else await wl(r.localStore,e,!1).then(()=>Il(r,e,n)).catch(Yi)}async function vC(t,e){const n=de(t),r=e.batch.batchId;try{const s=await xP(n.localStore,e);H_(n,r,null),q_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function EC(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(De(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);H_(r,e,n),q_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function q_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function H_(t,e,n){const r=de(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||z_(t,r)})}function z_(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Iu(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ku(t))}function Jf(t,e,n){for(const r of n)r instanceof U_?(t.Ma.addReference(r.key,e),wC(t,r)):r instanceof B_?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||z_(t,r.key)):le()}function wC(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ku(t))}function ku(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new oe(Me.fromString(e)),r=t.Na.next();t.Fa.set(r,new uC(n)),t.va=t.va.insert(n,r),k_(t.remoteStore,new Zn(cn(gu(n.path)),r,"TargetPurposeLimboResolution",uu.oe))}}async function to(t,e,n){const r=de(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Tu.Ki(l.targetId,h);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,h){const d=de(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,m=>F.forEach(m.qi,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>F.forEach(m.Qi,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Xi(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const I=d.ns.get(m),P=I.snapshotVersion,O=I.withLastLimboFreeSnapshotVersion(P);d.ns=d.ns.insert(m,O)}}}(r.localStore,i))}async function TC(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await b_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new J(L.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.us)}}function IC(t,e){const n=de(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let s=ge();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function K_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yC.bind(null,e),e.Sa.h_=oC.bind(null,e.eventManager),e.Sa.ka=aC.bind(null,e.eventManager),e}function AC(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EC.bind(null,e),e}class Zf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kP(this.persistence,new PP,e.initialUser,this.serializer)}createPersistence(e){return new RP(wu.Hr,this.serializer)}createSharedClientState(e){return new MP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TC.bind(null,this.syncEngine),await rC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iC}()}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=function(i){return new $P(i)}(e.databaseInfo);return function(i,o,c,l){return new HP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new KP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Xf(this.syncEngine,n,0),function(){return Wf.D()?new Wf:new FP}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new hC(s,i,o,c,l,h);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=de(r);ee("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await eo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=zg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await b_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ep(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PC(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gf(e.remoteStore,s)),t._onlineComponents=e}function SC(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SC(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Zf)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new Zf);return t._offlineComponents}async function G_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await ep(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await ep(t,new RC))),t._onlineComponents}function CC(t){return G_(t).then(e=>e.syncEngine)}async function Al(t){const e=await G_(t),n=e.eventManager;return n.onListen=dC.bind(null,e.syncEngine),n.onUnlisten=mC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gC.bind(null,e.syncEngine),n}function kC(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new W_({next:m=>{o.enqueueAndForget(()=>M_(i,p)),m.fromCache&&l.source==="server"?h.reject(new J(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new F_(c,d,{includeMetadataChanges:!0,ra:!0});return L_(i,p)}(await Al(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xC(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function np(t){if(!oe.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rp(t){if(oe.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yb;switch(r.type){case"firstParty":return new eS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),tp.delete(n),r.terminate())}(this),Promise.resolve()}}function OC(t,e,n,r={}){var s;const i=(t=Vr(t,Ja))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=Dm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(h)}t._authCredentials=new Xb(new Hg(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gr(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class ir extends gr{constructor(e,n,r){super(e,n,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new oe(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function cx(t,e,...n){if(t=je(t),Y_("collection","path",e),t instanceof Ja){const r=Me.fromString(e,...n);return rp(r),new ir(t,null,r)}{if(!(t instanceof Nt||t instanceof ir))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return rp(r),new ir(t.firestore,null,r)}}function NC(t,e,...n){if(t=je(t),arguments.length===1&&(e=zg.newId()),Y_("doc","path",e),t instanceof Ja){const r=Me.fromString(e,...n);return np(r),new Nt(t,null,new oe(r))}{if(!(t instanceof Nt||t instanceof ir))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return np(r),new Nt(t.firestore,t instanceof ir?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new P_(this,"async_queue_retry"),this.hu=()=>{const n=Dc();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new sr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Xi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Su.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function ip(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Fi extends Ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new DC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||X_(this),this._firestoreClient.terminate()}}function VC(t,e){const n=typeof t=="object"?t:Ql(),r=typeof t=="string"?t:"(default)",s=Da(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xm("firestore");i&&OC(s,...i)}return s}function xu(t){return t._firestoreClient||X_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function X_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new fS(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Q_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new bC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(yt.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=/^__.*__$/;class MC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Du{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ma(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Z_(this.fu)&&LC.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class FC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(e)}Fu(e,n,r,s=!1){return new Du({fu:e,methodName:n,vu:r,path:ct.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ey(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new FC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UC(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);ry("Data must be an object, but it was:",o,r);const c=ty(r,o);let l,h;if(i.merge)l=new Gt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=$C(e,p,n);if(!o.contains(m))throw new J(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qC(d,m)||d.push(m)}l=new Gt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new MC(new Ft(c),l,h)}function BC(t,e,n,r=!1){return Vu(n,t.Fu(r?4:3,e))}function Vu(t,e){if(ny(t=je(t)))return ry("Unsupported field value:",e,t),ty(t,e);if(t instanceof J_)return function(r,s){if(!Z_(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Vu(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:fa(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fa(s.serializer,i)}}if(r instanceof Nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:v_(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Xa(r)}`)}(t,e)}function ty(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=Vu(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ny(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Nu||t instanceof Rs||t instanceof Nt||t instanceof J_)}function ry(t,e,n){if(!ny(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xa(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function $C(t,e,n){if((e=je(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return sy(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const jC=new RegExp("[~\\*/\\[\\]]");function sy(t,e,n){if(e.search(jC)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(L.INVALID_ARGUMENT,c+t+l)}function qC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HC extends iy{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?sy(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}class ay extends Mu{}function lx(t,e,...n){let r=[];e instanceof Mu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Uu).length,c=i.filter(l=>l instanceof Fu).length;if(o>1||o>0&&c>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fu extends ay{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fu(e,n,r)}_apply(e){const n=this._parse(e);return cy(e._query,n),new gr(e.firestore,e.converter,ml(e._query,n))}_parse(e){const n=ey(e.firestore);return function(i,o,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ap(p,d);const I=[];for(const P of p)I.push(op(l,i,P));m={arrayValue:{values:I}}}else m=op(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ap(p,d),m=BC(c,o,p,d==="in"||d==="not-in");return Qe.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Uu extends Mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Uu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)cy(o,l),o=ml(o,l)}(e._query,n),new gr(e.firestore,e.converter,ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bu extends ay{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)}(e._query,this._field,this._direction);return new gr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ux(t,e="asc"){const n=e,r=Lu("orderBy",t);return Bu._create(r,n)}function op(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t_(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!oe.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pf(t,new oe(r))}if(n instanceof Nt)return Pf(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function ap(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zC{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Nu(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=dr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);De(R_(r));const s=new Ni(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ly extends iy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ko extends ly{data(e={}){return super.data(e)}}class uy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ko(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ko(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ko(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:WC(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class $u extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function hx(t){t=Vr(t,gr);const e=Vr(t.firestore,Fi),n=xu(e),r=new $u(e);return oy(t._query),kC(n,t._query).then(s=>new uy(e,r,t,s))}function dx(t,e){const n=Vr(t.firestore,Fi),r=NC(t),s=KC(t.converter,e);return GC(n,[UC(ey(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,In.exists(!1))]).then(()=>r)}function fx(t,...e){var n,r,s;t=je(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ip(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ip(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof Nt)h=Vr(t.firestore,Fi),d=gu(t._key.path),l={next:p=>{e[o]&&e[o](QC(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Vr(t,gr);h=Vr(p.firestore,Fi),d=p._query;const m=new $u(h);l={next:I=>{e[o]&&e[o](new uy(h,m,p,I))},error:e[o+1],complete:e[o+2]},oy(t._query)}return function(m,I,P,O){const x=new W_(O),M=new F_(I,x,P);return m.asyncQueue.enqueueAndForget(async()=>L_(await Al(m),M)),()=>{x.$a(),m.asyncQueue.enqueueAndForget(async()=>M_(await Al(m),M))}}(xu(h),d,c,l)}function GC(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>_C(await CC(r),s,i)),i.promise}(xu(t),e)}function QC(t,e,n){const r=n.docs.get(e._key),s=new $u(t);return new ly(t,s,e._key,r,new ii(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Cs=s})(zr),Ur(new ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Fi(new Jb(r.getProvider("auth-internal")),new nS(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),rn(Af,"4.6.3",e),rn(Af,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="firebasestorage.googleapis.com",dy="storageBucket",YC=2*60*1e3,XC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Jt{constructor(e,n,r=0){super(Lc(e),`Firebase Storage: ${n} (${Lc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Lc(t){return"storage/"+t}function fy(){const t="An unknown error occurred, please check the error payload for server response.";return new st(rt.UNKNOWN,t)}function JC(t){return new st(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ZC(t){return new st(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ek(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(rt.UNAUTHENTICATED,t)}function tk(){return new st(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nk(t){return new st(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rk(){return new st(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sk(){return new st(rt.CANCELED,"User canceled the upload/download.")}function ik(t){return new st(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function ok(t){return new st(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ak(){return new st(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dy+"' property when initializing the app?")}function ck(){return new st(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Rl(t){return new st(rt.INVALID_ARGUMENT,t)}function py(){return new st(rt.APP_DELETED,"The Firebase app was deleted.")}function lk(t){return new st(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xs(t){throw new st(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw ok(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(W){W.path_=decodeURIComponent(W.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},O=n===hy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",M=new RegExp(`^https?://${O}/${s}/${x}`,"i"),j=[{regex:c,indices:l,postModify:i},{regex:I,indices:P,postModify:h},{regex:M,indices:{bucket:1,path:2},postModify:h}];for(let W=0;W<j.length;W++){const ne=j[W],Q=ne.regex.exec(e);if(Q){const R=Q[ne.indices.bucket];let _=Q[ne.indices.path];_||(_=""),r=new It(R,_),ne.postModify(r);break}}if(r==null)throw ik(e);return r}}class uk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...x){h||(h=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,t(I,l())},x)}function m(){i&&clearTimeout(i)}function I(x,...M){if(h){m();return}if(x){m(),d.call(null,x,...M);return}if(l()||o){m(),d.call(null,x,...M);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let P=!1;function O(x){P||(P=!0,m(),!h&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function dk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){return t!==void 0}function pk(t){return typeof t=="object"&&!Array.isArray(t)}function my(t){return typeof t=="string"||t instanceof String}function bl(t,e,n,r){if(r<e)throw Rl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lr||(Lr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,s,i,o,c,l,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,P)=>{this.resolve_=I,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ko(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Lr.NO_ERROR,l=i.getStatus();if(!c||mk(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Lr.ABORT;r(!1,new ko(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new ko(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());fk(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=fy();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?py():sk();o(l)}else{const l=rk();o(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=hk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _k(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ek(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wk(t,e,n,r,s,i,o=!0){const c=gy(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return vk(h,e),_k(h,n),yk(h,i),Ek(h,r),new gk(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){let e;try{e=JSON.parse(t)}catch{return null}return pk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ik(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _y(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Ak}}let xo=null;function Rk(t){return!my(t)||t.length<2?t:_y(t)}function bk(){if(xo)return xo;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return Rk(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),xo=t,xo}function Sk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new It(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Pk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Sk(r,t),r}function Ck(t,e,n){const r=qu(e);return r===null?null:Pk(t,r,n)}function kk(t,e,n,r){const s=qu(e);if(s===null||!my(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),I=ju(m,n,r),P=gy({alt:"media",token:h});return I+P})[0]}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="prefixes",lp="items";function xk(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[cp])for(const s of n[cp]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new It(e,i));r.prefixes.push(o)}if(n[lp])for(const s of n[lp]){const i=t._makeStorageReference(new It(e,s.name));r.items.push(i)}return r}function Ok(t,e,n){const r=qu(n);return r===null?null:xk(t,e,r)}class yy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){if(!t)throw fy()}function Nk(t,e){function n(r,s){const i=Ok(t,e,s);return vy(i!==null),i}return n}function Dk(t,e){function n(r,s){const i=Ck(t,s,e);return vy(i!==null),kk(i,s,t.host,t._protocol)}return n}function Ey(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=tk():s=ek():n.getStatus()===402?s=ZC(t.bucket):n.getStatus()===403?s=nk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Vk(t){const e=Ey(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=JC(t.path)),i.serverResponse=s.serverResponse,i}return n}function Lk(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),c=ju(o,t.host,t._protocol),l="GET",h=t.maxOperationRetryTime,d=new yy(c,l,Nk(t,e.bucket),h);return d.urlParams=i,d.errorHandler=Ey(e),d}function Mk(t,e,n){const r=e.fullServerUrl(),s=ju(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new yy(s,i,Dk(t,n),o);return c.errorHandler=Vk(e),c}class Fk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Uk extends Fk{initXhr(){this.xhr_.responseType="text"}}function wy(){return new Uk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _y(this._location.path)}get storage(){return this._service}get parent(){const e=Tk(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lk(e)}}function Bk(t){const e={prefixes:[],items:[]};return Ty(t,e).then(()=>e)}async function Ty(t,e,n){const s=await $k(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Ty(t,e,s.nextPageToken)}function $k(t,e){e!=null&&typeof e.maxResults=="number"&&bl("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Lk(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,wy)}function jk(t){t._throwIfRoot("getDownloadURL");const e=Mk(t.storage,t._location,bk());return t.storage.makeRequestWithTokens(e,wy).then(n=>{if(n===null)throw ck();return n})}function qk(t,e){const n=Ik(t._location.path,e),r=new It(t._location.bucket,n);return new Hr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){return/^[A-Za-z]+:\/\//.test(t)}function zk(t,e){return new Hr(t,e)}function Iy(t,e){if(t instanceof Hu){const n=t;if(n._bucket==null)throw ak();const r=new Hr(n,n._bucket);return Iy(r,e)}else return qk(t,e)}function Kk(t,e){if(Hk(e)){if(t instanceof Hu)return zk(t,e);throw Rl("To use ref(service, url), the first argument must be a Storage instance.")}else return Iy(t,e)}function up(t,e){const n=e==null?void 0:e[dy];return n==null?null:It.makeFromBucketSpec(n,t)}function Wk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Dm(s,t.app.options.projectId))}class Hu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=hy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YC,this._maxUploadRetryTime=XC,this._requests=new Set,s!=null?this._bucket=It.makeFromBucketSpec(s,this._host):this._bucket=up(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=up(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new uk(py());{const o=wk(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const hp="@firebase/storage",dp="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="storage";function px(t){return t=je(t),Bk(t)}function mx(t){return t=je(t),jk(t)}function gx(t,e){return t=je(t),Kk(t,e)}function Gk(t=Ql(),e){t=je(t);const r=Da(t,Ay).getImmediate({identifier:e}),s=xm("storage");return s&&Qk(r,...s),r}function Qk(t,e,n,r={}){Wk(t,e,n,r)}function Yk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Hu(n,r,s,e,zr)}function Xk(){Ur(new ur(Ay,Yk,"PUBLIC").setMultipleInstances(!0)),rn(hp,dp,""),rn(hp,dp,"esm2017")}Xk();var Rr={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Jk={apiKey:Rr.VITE_API_KEY,authDomain:Rr.VITE_AUTH_DOMAIN,projectId:Rr.VITE_PROJECT_ID,storageBucket:Rr.VITE_STORAGE_BUCKET,messagingSenderId:Rr.VITE_MESSAGING_SENDER_ID,appId:Rr.VITE_APP_ID,measurementId:Rr.VITE_MEASUREMENT_ID},Ry=Mm(Jk),_x=VC(Ry),yx=Gk(Ry),zu=bw(wb),Zk=kw(),Js=Tg();zu.use(Zk);zu.use(Lg);zu.mount("#app");export{NE as $,lt as A,ji as B,cx as C,_x as D,dx as E,at as F,gx as G,yx as H,px as I,mx as J,nm as K,$i as L,Td as M,rx as N,Js as O,FE as P,sE as Q,Ng as R,Ze as S,ka as T,Nr as U,wi as V,$t as W,Do as X,wa as Y,Ua as Z,cu as _,fe as a,xv as a0,Kl as a1,zE as a2,Ie as a3,Lp as a4,fx as a5,lx as a6,ux as a7,hx as a8,ar as b,Ge as c,At as d,au as e,Hc as f,Se as g,hi as h,O0 as i,xt as j,sx as k,ba as l,Rn as m,Bi as n,be as o,hn as p,$c as q,tx as r,zt as s,Ei as t,x0 as u,nx as v,ex as w,Kr as x,ai as y,rm as z};
