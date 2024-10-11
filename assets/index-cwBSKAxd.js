(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function En(e,t){const s=new Set(e.split(","));return n=>s.has(n)}const Q={},jt=[],qe=()=>{},vo=()=>!1,js=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Cn=e=>e.startsWith("onUpdate:"),fe=Object.assign,Sn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},mo=Object.prototype.hasOwnProperty,z=(e,t)=>mo.call(e,t),B=Array.isArray,It=e=>Is(e)==="[object Map]",Gr=e=>Is(e)==="[object Set]",N=e=>typeof e=="function",ce=e=>typeof e=="string",dt=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Xr=e=>(ne(e)||N(e))&&N(e.then)&&N(e.catch),Zr=Object.prototype.toString,Is=e=>Zr.call(e),bo=e=>Is(e).slice(8,-1),Jr=e=>Is(e)==="[object Object]",Rn=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},wo=/-(\w)/g,De=Ds(e=>e.replace(wo,(t,s)=>s?s.toUpperCase():"")),xo=/\B([A-Z])/g,Et=Ds(e=>e.replace(xo,"-$1").toLowerCase()),Ms=Ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gs=Ds(e=>e?`on${Ms(e)}`:""),pt=(e,t)=>!Object.is(e,t),Xs=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Qr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},yo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kn;const Yr=()=>Kn||(Kn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ft(e){if(B(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ce(n)?Co(n):Ft(n);if(r)for(const i in r)t[i]=r[i]}return t}else if(ce(e)||ne(e))return e}const _o=/;(?![^(]*\))/g,Ao=/:([^]+)/,Eo=/\/\*[^]*?\*\//g;function Co(e){const t={};return e.replace(Eo,"").split(_o).forEach(s=>{if(s){const n=s.split(Ao);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ls(e){let t="";if(ce(e))t=e;else if(B(e))for(let s=0;s<e.length;s++){const n=Ls(e[s]);n&&(t+=n+" ")}else if(ne(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const So="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ro=En(So);function ei(e){return!!e||e===""}const ti=e=>!!(e&&e.__v_isRef===!0),le=e=>ce(e)?e:e==null?"":B(e)||ne(e)&&(e.toString===Zr||!N(e.toString))?ti(e)?le(e.value):JSON.stringify(e,si,2):String(e),si=(e,t)=>ti(t)?si(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],i)=>(s[Zs(n,i)+" =>"]=r,s),{})}:Gr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Zs(s))}:dt(t)?Zs(t):ne(t)&&!B(t)&&!Jr(t)?String(t):t,Zs=(e,t="")=>{var s;return dt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class Po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Ce;try{return Ce=this,t()}finally{Ce=s}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function To(){return Ce}let te;const Js=new WeakSet;class ni{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Js.has(this)&&(Js.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Zt,Zt=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wn(this),ii(this);const t=te,s=je;te=this,je=!0;try{return this.fn()}finally{oi(this),te=t,je=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$n(t);this.deps=this.depsTail=void 0,Wn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Js.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){an(this)&&this.run()}get dirty(){return an(this)}}let ri=0,Zt;function Pn(){ri++}function Tn(){if(--ri>0)return;let e;for(;Zt;){let t=Zt;for(Zt=void 0;t;){const s=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function ii(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oi(e){let t,s=e.depsTail;for(let n=s;n;n=n.prevDep)n.version===-1?(n===s&&(s=n.prevDep),$n(n),$o(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0;e.deps=t,e.depsTail=s}function an(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&li(t.dep.computed)===!1||t.dep.version!==t.version)return!0;return!!e._dirty}function li(e){if(e.flags&2)return!1;if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ns))return;e.globalVersion=ns;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!an(e)){e.flags&=-3;return}const s=te,n=je;te=e,je=!0;try{ii(e);const r=e.fn();(t.version===0||pt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{te=s,je=n,oi(e),e.flags&=-3}}function $n(e){const{dep:t,prevSub:s,nextSub:n}=e;if(s&&(s.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)$n(r)}}function $o(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let je=!0;const ci=[];function ht(){ci.push(je),je=!1}function gt(){const e=ci.pop();je=e===void 0?!0:e}function Wn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=te;te=void 0;try{t()}finally{te=s}}}let ns=0;class On{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!te||!je)return;let s=this.activeLink;if(s===void 0||s.sub!==te)s=this.activeLink={dep:this,sub:te,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},te.deps?(s.prevDep=te.depsTail,te.depsTail.nextDep=s,te.depsTail=s):te.deps=te.depsTail=s,te.flags&4&&ai(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=te.depsTail,s.nextDep=void 0,te.depsTail.nextDep=s,te.depsTail=s,te.deps===s&&(te.deps=n)}return s}trigger(t){this.version++,ns++,this.notify(t)}notify(t){Pn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()}finally{Tn()}}}function ai(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)ai(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}const pn=new WeakMap,_t=Symbol(""),un=Symbol(""),rs=Symbol("");function ve(e,t,s){if(je&&te){let n=pn.get(e);n||pn.set(e,n=new Map);let r=n.get(s);r||n.set(s,r=new On),r.track()}}function et(e,t,s,n,r,i){const o=pn.get(e);if(!o){ns++;return}let l=[];if(t==="clear")l=[...o.values()];else{const c=B(e),d=c&&Rn(s);if(c&&s==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===rs||!dt(h)&&h>=u)&&l.push(f)})}else{const u=f=>f&&l.push(f);switch(s!==void 0&&u(o.get(s)),d&&u(o.get(rs)),t){case"add":c?d&&u(o.get("length")):(u(o.get(_t)),It(e)&&u(o.get(un)));break;case"delete":c||(u(o.get(_t)),It(e)&&u(o.get(un)));break;case"set":It(e)&&u(o.get(_t));break}}}Pn();for(const c of l)c.trigger();Tn()}function Tt(e){const t=G(e);return t===e?t:(ve(t,"iterate",rs),Ie(e)?t:t.map(de))}function Fs(e){return ve(e=G(e),"iterate",rs),e}const Oo={__proto__:null,[Symbol.iterator](){return Qs(this,Symbol.iterator,de)},concat(...e){return Tt(this).concat(...e.map(t=>B(t)?Tt(t):t))},entries(){return Qs(this,"entries",e=>(e[1]=de(e[1]),e))},every(e,t){return Xe(this,"every",e,t,void 0,arguments)},filter(e,t){return Xe(this,"filter",e,t,s=>s.map(de),arguments)},find(e,t){return Xe(this,"find",e,t,de,arguments)},findIndex(e,t){return Xe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xe(this,"findLast",e,t,de,arguments)},findLastIndex(e,t){return Xe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ys(this,"includes",e)},indexOf(...e){return Ys(this,"indexOf",e)},join(e){return Tt(this).join(e)},lastIndexOf(...e){return Ys(this,"lastIndexOf",e)},map(e,t){return Xe(this,"map",e,t,void 0,arguments)},pop(){return qt(this,"pop")},push(...e){return qt(this,"push",e)},reduce(e,...t){return zn(this,"reduce",e,t)},reduceRight(e,...t){return zn(this,"reduceRight",e,t)},shift(){return qt(this,"shift")},some(e,t){return Xe(this,"some",e,t,void 0,arguments)},splice(...e){return qt(this,"splice",e)},toReversed(){return Tt(this).toReversed()},toSorted(e){return Tt(this).toSorted(e)},toSpliced(...e){return Tt(this).toSpliced(...e)},unshift(...e){return qt(this,"unshift",e)},values(){return Qs(this,"values",de)}};function Qs(e,t,s){const n=Fs(e),r=n[t]();return n!==e&&!Ie(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=s(i.value)),i}),r}const jo=Array.prototype;function Xe(e,t,s,n,r,i){const o=Fs(e),l=o!==e&&!Ie(e),c=o[t];if(c!==jo[t]){const f=c.apply(e,i);return l?de(f):f}let d=s;o!==e&&(l?d=function(f,h){return s.call(this,de(f),h,e)}:s.length>2&&(d=function(f,h){return s.call(this,f,h,e)}));const u=c.call(o,d,n);return l&&r?r(u):u}function zn(e,t,s,n){const r=Fs(e);let i=s;return r!==e&&(Ie(e)?s.length>3&&(i=function(o,l,c){return s.call(this,o,l,c,e)}):i=function(o,l,c){return s.call(this,o,de(l),c,e)}),r[t](i,...n)}function Ys(e,t,s){const n=G(e);ve(n,"iterate",rs);const r=n[t](...s);return(r===-1||r===!1)&&Mn(s[0])?(s[0]=G(s[0]),n[t](...s)):r}function qt(e,t,s=[]){ht(),Pn();const n=G(e)[t].apply(e,s);return Tn(),gt(),n}const Io=En("__proto__,__v_isRef,__isVue"),pi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dt));function Do(e){dt(e)||(e=String(e));const t=G(this);return ve(t,"has",e),t.hasOwnProperty(e)}class ui{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){const r=this._isReadonly,i=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return i;if(s==="__v_raw")return n===(r?i?zo:gi:i?hi:di).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=B(t);if(!r){let c;if(o&&(c=Oo[s]))return c;if(s==="hasOwnProperty")return Do}const l=Reflect.get(t,s,ge(t)?t:n);return(dt(s)?pi.has(s):Io(s))||(r||ve(t,"get",s),i)?l:ge(l)?o&&Rn(s)?l:l.value:ne(l)?r?mi(l):Bs(l):l}}class fi extends ui{constructor(t=!1){super(!1,t)}set(t,s,n,r){let i=t[s];if(!this._isShallow){const c=At(i);if(!Ie(n)&&!At(n)&&(i=G(i),n=G(n)),!B(t)&&ge(i)&&!ge(n))return c?!1:(i.value=n,!0)}const o=B(t)&&Rn(s)?Number(s)<t.length:z(t,s),l=Reflect.set(t,s,n,ge(t)?t:r);return t===G(r)&&(o?pt(n,i)&&et(t,"set",s,n):et(t,"add",s,n)),l}deleteProperty(t,s){const n=z(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&et(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!dt(s)||!pi.has(s))&&ve(t,"has",s),n}ownKeys(t){return ve(t,"iterate",B(t)?"length":_t),Reflect.ownKeys(t)}}class Mo extends ui{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Lo=new fi,Fo=new Mo,Ho=new fi(!0);const jn=e=>e,Hs=e=>Reflect.getPrototypeOf(e);function gs(e,t,s=!1,n=!1){e=e.__v_raw;const r=G(e),i=G(t);s||(pt(t,i)&&ve(r,"get",t),ve(r,"get",i));const{has:o}=Hs(r),l=n?jn:s?Ln:de;if(o.call(r,t))return l(e.get(t));if(o.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function vs(e,t=!1){const s=this.__v_raw,n=G(s),r=G(e);return t||(pt(e,r)&&ve(n,"has",e),ve(n,"has",r)),e===r?s.has(e):s.has(e)||s.has(r)}function ms(e,t=!1){return e=e.__v_raw,!t&&ve(G(e),"iterate",_t),Reflect.get(e,"size",e)}function Gn(e,t=!1){!t&&!Ie(e)&&!At(e)&&(e=G(e));const s=G(this);return Hs(s).has.call(s,e)||(s.add(e),et(s,"add",e,e)),this}function Xn(e,t,s=!1){!s&&!Ie(t)&&!At(t)&&(t=G(t));const n=G(this),{has:r,get:i}=Hs(n);let o=r.call(n,e);o||(e=G(e),o=r.call(n,e));const l=i.call(n,e);return n.set(e,t),o?pt(t,l)&&et(n,"set",e,t):et(n,"add",e,t),this}function Zn(e){const t=G(this),{has:s,get:n}=Hs(t);let r=s.call(t,e);r||(e=G(e),r=s.call(t,e)),n&&n.call(t,e);const i=t.delete(e);return r&&et(t,"delete",e,void 0),i}function Jn(){const e=G(this),t=e.size!==0,s=e.clear();return t&&et(e,"clear",void 0,void 0),s}function bs(e,t){return function(n,r){const i=this,o=i.__v_raw,l=G(o),c=t?jn:e?Ln:de;return!e&&ve(l,"iterate",_t),o.forEach((d,u)=>n.call(r,c(d),c(u),i))}}function ws(e,t,s){return function(...n){const r=this.__v_raw,i=G(r),o=It(i),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=r[e](...n),u=s?jn:t?Ln:de;return!t&&ve(i,"iterate",c?un:_t),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:l?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bo(){const e={get(i){return gs(this,i)},get size(){return ms(this)},has:vs,add:Gn,set:Xn,delete:Zn,clear:Jn,forEach:bs(!1,!1)},t={get(i){return gs(this,i,!1,!0)},get size(){return ms(this)},has:vs,add(i){return Gn.call(this,i,!0)},set(i,o){return Xn.call(this,i,o,!0)},delete:Zn,clear:Jn,forEach:bs(!1,!0)},s={get(i){return gs(this,i,!0)},get size(){return ms(this,!0)},has(i){return vs.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:bs(!0,!1)},n={get(i){return gs(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return vs.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ws(i,!1,!1),s[i]=ws(i,!0,!1),t[i]=ws(i,!1,!0),n[i]=ws(i,!0,!0)}),[e,s,t,n]}const[No,ko,Vo,Uo]=Bo();function In(e,t){const s=t?e?Uo:Vo:e?ko:No;return(n,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(z(s,r)&&r in n?s:n,r,i)}const qo={get:In(!1,!1)},Ko={get:In(!1,!0)},Wo={get:In(!0,!1)};const di=new WeakMap,hi=new WeakMap,gi=new WeakMap,zo=new WeakMap;function Go(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(e){return e.__v_skip||!Object.isExtensible(e)?0:Go(bo(e))}function Bs(e){return At(e)?e:Dn(e,!1,Lo,qo,di)}function vi(e){return Dn(e,!1,Ho,Ko,hi)}function mi(e){return Dn(e,!0,Fo,Wo,gi)}function Dn(e,t,s,n,r){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Xo(e);if(o===0)return e;const l=new Proxy(e,o===2?n:s);return r.set(e,l),l}function Dt(e){return At(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function Mn(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Zo(e){return Object.isExtensible(e)&&Qr(e,"__v_skip",!0),e}const de=e=>ne(e)?Bs(e):e,Ln=e=>ne(e)?mi(e):e;function ge(e){return e?e.__v_isRef===!0:!1}function ut(e){return bi(e,!1)}function Jo(e){return bi(e,!0)}function bi(e,t){return ge(e)?e:new Qo(e,t)}class Qo{constructor(t,s){this.dep=new On,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:G(t),this._value=s?t:de(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ie(t)||At(t);t=n?t:G(t),pt(t,s)&&(this._rawValue=t,this._value=n?t:de(t),this.dep.trigger())}}function ue(e){return ge(e)?e.value:e}const Yo={get:(e,t,s)=>ue(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return ge(r)&&!ge(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function wi(e){return Dt(e)?e:new Proxy(e,Yo)}class el{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new On(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){te!==this&&(this.flags|=16,this.dep.notify())}get value(){const t=this.dep.track();return li(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tl(e,t,s=!1){let n,r;return N(e)?n=e:(n=e.get,r=e.set),new el(n,r,s)}const xs={},Ss=new WeakMap;let xt;function sl(e,t=!1,s=xt){if(s){let n=Ss.get(s);n||Ss.set(s,n=[]),n.push(e)}}function nl(e,t,s=Q){const{immediate:n,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=s,d=$=>r?$:Ie($)||r===!1||r===0?Qe($,1):Qe($);let u,f,h,v,O=!1,T=!1;if(ge(e)?(f=()=>e.value,O=Ie(e)):Dt(e)?(f=()=>d(e),O=!0):B(e)?(T=!0,O=e.some($=>Dt($)||Ie($)),f=()=>e.map($=>{if(ge($))return $.value;if(Dt($))return d($);if(N($))return c?c($,2):$()})):N(e)?t?f=c?()=>c(e,2):e:f=()=>{if(h){ht();try{h()}finally{gt()}}const $=xt;xt=u;try{return c?c(e,3,[v]):e(v)}finally{xt=$}}:f=qe,t&&r){const $=f,Y=r===!0?1/0:r;f=()=>Qe($(),Y)}const k=To(),F=()=>{u.stop(),k&&Sn(k.effects,u)};if(i)if(t){const $=t;t=(...Y)=>{$(...Y),F()}}else{const $=f;f=()=>{$(),F()}}let D=T?new Array(e.length).fill(xs):xs;const M=$=>{if(!(!(u.flags&1)||!u.dirty&&!$))if(t){const Y=u.run();if(r||O||(T?Y.some((pe,re)=>pt(pe,D[re])):pt(Y,D))){h&&h();const pe=xt;xt=u;try{const re=[Y,D===xs?void 0:T&&D[0]===xs?[]:D,v];c?c(t,3,re):t(...re),D=Y}finally{xt=pe}}}else u.run()};return l&&l(M),u=new ni(f),u.scheduler=o?()=>o(M,!1):M,v=$=>sl($,!1,u),h=u.onStop=()=>{const $=Ss.get(u);if($){if(c)c($,4);else for(const Y of $)Y();Ss.delete(u)}},t?n?M(!0):D=u.run():o?o(M.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Qe(e,t=1/0,s){if(t<=0||!ne(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,ge(e))Qe(e.value,t,s);else if(B(e))for(let n=0;n<e.length;n++)Qe(e[n],t,s);else if(Gr(e)||It(e))e.forEach(n=>{Qe(n,t,s)});else if(Jr(e)){for(const n in e)Qe(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Qe(e[n],t,s)}return e}/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function us(e,t,s,n){try{return n?e(...n):e()}catch(r){Ns(r,t,s)}}function We(e,t,s,n){if(N(e)){const r=us(e,t,s,n);return r&&Xr(r)&&r.catch(i=>{Ns(i,t,s)}),r}if(B(e)){const r=[];for(let i=0;i<e.length;i++)r.push(We(e[i],t,s,n));return r}}function Ns(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Q;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,d)===!1)return}l=l.parent}if(i){ht(),us(i,null,10,[e,c,d]),gt();return}}rl(e,s,r,n,o)}function rl(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}let is=!1,fn=!1;const Se=[];let yt=0;const Mt=[];let lt=null,$t=0;const xi=Promise.resolve();let Fn=null;function yi(e){const t=Fn||xi;return e?t.then(this?e.bind(this):e):t}function il(e){let t=is?yt+1:0,s=Se.length;for(;t<s;){const n=t+s>>>1,r=Se[n],i=os(r);i<e||i===e&&r.flags&2?t=n+1:s=n}return t}function Hn(e){if(!(e.flags&1)){const t=os(e),s=Se[Se.length-1];!s||!(e.flags&2)&&t>=os(s)?Se.push(e):Se.splice(il(t),0,e),e.flags&4||(e.flags|=1),_i()}}function _i(){!is&&!fn&&(fn=!0,Fn=xi.then(Ei))}function ol(e){B(e)?Mt.push(...e):lt&&e.id===-1?lt.splice($t+1,0,e):e.flags&1||(Mt.push(e),e.flags&4||(e.flags|=1)),_i()}function Qn(e,t,s=is?yt+1:0){for(;s<Se.length;s++){const n=Se[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Se.splice(s,1),s--,n(),n.flags&=-2}}}function Ai(e){if(Mt.length){const t=[...new Set(Mt)].sort((s,n)=>os(s)-os(n));if(Mt.length=0,lt){lt.push(...t);return}for(lt=t,$t=0;$t<lt.length;$t++){const s=lt[$t];s.flags&8||s(),s.flags&=-2}lt=null,$t=0}}const os=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ei(e){fn=!1,is=!0;try{for(yt=0;yt<Se.length;yt++){const t=Se[yt];t&&!(t.flags&8)&&(us(t,t.i,t.i?15:14),t.flags&=-2)}}finally{yt=0,Se.length=0,Ai(),is=!1,Fn=null,(Se.length||Mt.length)&&Ei()}}let Re=null,Ci=null;function Rs(e){const t=Re;return Re=e,Ci=e&&e.type.__scopeId||null,t}function ll(e,t=Re,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&cr(-1);const i=Rs(t);let o;try{o=e(...r)}finally{Rs(i),n._d&&cr(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Yn(e,t){if(Re===null)return e;const s=Ks(Re),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,c=Q]=t[r];i&&(N(i)&&(i={mounted:i,updated:i}),i.deep&&Qe(o),n.push({dir:i,instance:s,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function bt(e,t,s,n){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[n];c&&(ht(),We(c,s,8,[e.el,l,e,t]),gt())}}const cl=Symbol("_vte"),al=e=>e.__isTeleport;function Si(e,t){e.shapeFlag&6&&e.component?Si(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Le(e,t){return N(e)?fe({name:e.name},t,{setup:e}):e}function Ri(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function dn(e,t,s,n,r=!1){if(B(e)){e.forEach((v,O)=>dn(v,t&&(B(t)?t[O]:t),s,n,r));return}if(Jt(n)&&!r)return;const i=n.shapeFlag&4?Ks(n.component):n.el,o=r?null:i,{i:l,r:c}=e,d=t&&t.r,u=l.refs===Q?l.refs={}:l.refs,f=l.setupState,h=f===Q?()=>!1:v=>z(f,v)&&!(Object.getOwnPropertyDescriptor(u,v)||Q).get;if(d!=null&&d!==c&&(ce(d)?(u[d]=null,h(d)&&(f[d]=null)):ge(d)&&(d.value=null)),N(c))us(c,l,12,[o,u]);else{const v=ce(c),O=ge(c);if(v||O){const T=()=>{if(e.f){const k=v?h(c)?f[c]:u[c]:c.value;r?B(k)&&Sn(k,i):B(k)?k.includes(i)||k.push(i):v?(u[c]=[i],h(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else v?(u[c]=o,h(c)&&(f[c]=o)):O&&(c.value=o,e.k&&(u[e.k]=o))};o?(T.id=-1,Ee(T,s)):T()}}}const Jt=e=>!!e.type.__asyncLoader,Pi=e=>e.type.__isKeepAlive;function pl(e,t){Ti(e,"a",t)}function ul(e,t){Ti(e,"da",t)}function Ti(e,t,s=he){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ks(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Pi(r.parent.vnode)&&fl(n,t,s,r),r=r.parent}}function fl(e,t,s,n){const r=ks(t,e,n,!0);$i(()=>{Sn(n[t],r)},s)}function ks(e,t,s=he,n=!1){if(s){const r=s[e]||(s[e]=[]),i=t.__weh||(t.__weh=(...o)=>{ht();const l=fs(s),c=We(t,s,e,o);return l(),gt(),c});return n?r.unshift(i):r.push(i),i}}const tt=e=>(t,s=he)=>{(!qs||e==="sp")&&ks(e,(...n)=>t(...n),s)},dl=tt("bm"),kt=tt("m"),hl=tt("bu"),gl=tt("u"),vl=tt("bum"),$i=tt("um"),ml=tt("sp"),bl=tt("rtg"),wl=tt("rtc");function xl(e,t=he){ks("ec",e,t)}const yl="components";function _l(e,t){return El(yl,e,!0,t)||e}const Al=Symbol.for("v-ndc");function El(e,t,s=!0,n=!1){const r=Re||he;if(r){const i=r.type;{const l=fc(i,!1);if(l&&(l===t||l===De(t)||l===Ms(De(t))))return i}const o=er(r[e]||i[e],t)||er(r.appContext[e],t);return!o&&n?i:o}}function er(e,t){return e&&(e[t]||e[De(t)]||e[Ms(De(t))])}function Ye(e,t,s,n){let r;const i=s,o=B(e);if(o||ce(e)){const l=o&&Dt(e);l&&(e=Fs(e)),r=new Array(e.length);for(let c=0,d=e.length;c<d;c++)r[c]=t(l?de(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(ne(e))if(e[Symbol.iterator])r=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];r[c]=t(e[u],u,c,i)}}else r=[];return r}const hn=e=>e?Xi(e)?Ks(e):hn(e.parent):null,Qt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hn(e.parent),$root:e=>hn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bn(e),$forceUpdate:e=>e.f||(e.f=()=>{Hn(e.update)}),$nextTick:e=>e.n||(e.n=yi.bind(e.proxy)),$watch:e=>Kl.bind(e)}),en=(e,t)=>e!==Q&&!e.__isScriptSetup&&z(e,t),Cl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:i,accessCache:o,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return i[t]}else{if(en(n,t))return o[t]=1,n[t];if(r!==Q&&z(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&z(d,t))return o[t]=3,i[t];if(s!==Q&&z(s,t))return o[t]=4,s[t];gn&&(o[t]=0)}}const u=Qt[t];let f,h;if(u)return t==="$attrs"&&ve(e.attrs,"get",""),u(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(s!==Q&&z(s,t))return o[t]=4,s[t];if(h=c.config.globalProperties,z(h,t))return h[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:i}=e;return en(r,t)?(r[t]=s,!0):n!==Q&&z(n,t)?(n[t]=s,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,propsOptions:i}},o){let l;return!!s[o]||e!==Q&&z(e,o)||en(t,o)||(l=i[0])&&z(l,o)||z(n,o)||z(Qt,o)||z(r.config.globalProperties,o)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:z(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function tr(e){return B(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let gn=!0;function Sl(e){const t=Bn(e),s=e.proxy,n=e.ctx;gn=!1,t.beforeCreate&&sr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:d,created:u,beforeMount:f,mounted:h,beforeUpdate:v,updated:O,activated:T,deactivated:k,beforeDestroy:F,beforeUnmount:D,destroyed:M,unmounted:$,render:Y,renderTracked:pe,renderTriggered:re,errorCaptured:Fe,serverPrefetch:st,expose:He,inheritAttrs:nt,components:mt,directives:Be,filters:Vt}=t;if(d&&Rl(d,n,null),o)for(const X in o){const U=o[X];N(U)&&(n[X]=U.bind(s))}if(r){const X=r.call(s,s);ne(X)&&(e.data=Bs(X))}if(gn=!0,i)for(const X in i){const U=i[X],Ge=N(U)?U.bind(s,s):N(U.get)?U.get.bind(s,s):qe,rt=!N(U)&&N(U.set)?U.set.bind(s):qe,Ne=Oe({get:Ge,set:rt});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:xe=>Ne.value=xe})}if(l)for(const X in l)Oi(l[X],n,s,X);if(c){const X=N(c)?c.call(s):c;Reflect.ownKeys(X).forEach(U=>{_s(U,X[U])})}u&&sr(u,e,"c");function ae(X,U){B(U)?U.forEach(Ge=>X(Ge.bind(s))):U&&X(U.bind(s))}if(ae(dl,f),ae(kt,h),ae(hl,v),ae(gl,O),ae(pl,T),ae(ul,k),ae(xl,Fe),ae(wl,pe),ae(bl,re),ae(vl,D),ae($i,$),ae(ml,st),B(He))if(He.length){const X=e.exposed||(e.exposed={});He.forEach(U=>{Object.defineProperty(X,U,{get:()=>s[U],set:Ge=>s[U]=Ge})})}else e.exposed||(e.exposed={});Y&&e.render===qe&&(e.render=Y),nt!=null&&(e.inheritAttrs=nt),mt&&(e.components=mt),Be&&(e.directives=Be),st&&Ri(e)}function Rl(e,t,s=qe){B(e)&&(e=vn(e));for(const n in e){const r=e[n];let i;ne(r)?"default"in r?i=Ke(r.from||n,r.default,!0):i=Ke(r.from||n):i=Ke(r),ge(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[n]=i}}function sr(e,t,s){We(B(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Oi(e,t,s,n){let r=n.includes(".")?Ki(s,n):()=>s[n];if(ce(e)){const i=t[e];N(i)&&Yt(r,i)}else if(N(e))Yt(r,e.bind(s));else if(ne(e))if(B(e))e.forEach(i=>Oi(i,t,s,n));else{const i=N(e.handler)?e.handler.bind(s):t[e.handler];N(i)&&Yt(r,i,e)}}function Bn(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!s&&!n?c=t:(c={},r.length&&r.forEach(d=>Ps(c,d,o,!0)),Ps(c,t,o)),ne(t)&&i.set(t,c),c}function Ps(e,t,s,n=!1){const{mixins:r,extends:i}=t;i&&Ps(e,i,s,!0),r&&r.forEach(o=>Ps(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const l=Pl[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Pl={data:nr,props:rr,emits:rr,methods:Gt,computed:Gt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Gt,directives:Gt,watch:$l,provide:nr,inject:Tl};function nr(e,t){return t?e?function(){return fe(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function Tl(e,t){return Gt(vn(e),vn(t))}function vn(e){if(B(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Gt(e,t){return e?fe(Object.create(null),e,t):t}function rr(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:fe(Object.create(null),tr(e),tr(t??{})):t}function $l(e,t){if(!e)return t;if(!t)return e;const s=fe(Object.create(null),e);for(const n in t)s[n]=be(e[n],t[n]);return s}function ji(){return{app:null,config:{isNativeTag:vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function jl(e,t){return function(n,r=null){N(n)||(n=fe({},n)),r!=null&&!ne(r)&&(r=null);const i=ji(),o=new WeakSet,l=[];let c=!1;const d=i.app={_uid:Ol++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:hc,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&N(u.install)?(o.add(u),u.install(d,...f)):N(u)&&(o.add(u),u(d,...f))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,f){return f?(i.components[u]=f,d):i.components[u]},directive(u,f){return f?(i.directives[u]=f,d):i.directives[u]},mount(u,f,h){if(!c){const v=d._ceVNode||oe(n,r);return v.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(v,u):e(v,u,h),c=!0,d._container=u,u.__vue_app__=d,Ks(v.component)}},onUnmount(u){l.push(u)},unmount(){c&&(We(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,f){return i.provides[u]=f,d},runWithContext(u){const f=Lt;Lt=d;try{return u()}finally{Lt=f}}};return d}}let Lt=null;function _s(e,t){if(he){let s=he.provides;const n=he.parent&&he.parent.provides;n===s&&(s=he.provides=Object.create(n)),s[e]=t}}function Ke(e,t,s=!1){const n=he||Re;if(n||Lt){const r=Lt?Lt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&N(t)?t.call(n&&n.proxy):t}}const Ii={},Di=()=>Object.create(Ii),Mi=e=>Object.getPrototypeOf(e)===Ii;function Il(e,t,s,n=!1){const r={},i=Di();e.propsDefaults=Object.create(null),Li(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);s?e.props=n?r:vi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Dl(e,t,s,n){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=G(r),[c]=e.propsOptions;let d=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Vs(e.emitsOptions,h))continue;const v=t[h];if(c)if(z(i,h))v!==i[h]&&(i[h]=v,d=!0);else{const O=De(h);r[O]=mn(c,l,O,v,e,!1)}else v!==i[h]&&(i[h]=v,d=!0)}}}else{Li(e,t,r,i)&&(d=!0);let u;for(const f in l)(!t||!z(t,f)&&((u=Et(f))===f||!z(t,u)))&&(c?s&&(s[f]!==void 0||s[u]!==void 0)&&(r[f]=mn(c,l,f,void 0,e,!0)):delete r[f]);if(i!==l)for(const f in i)(!t||!z(t,f))&&(delete i[f],d=!0)}d&&et(e.attrs,"set","")}function Li(e,t,s,n){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(Xt(c))continue;const d=t[c];let u;r&&z(r,u=De(c))?!i||!i.includes(u)?s[u]=d:(l||(l={}))[u]=d:Vs(e.emitsOptions,c)||(!(c in n)||d!==n[c])&&(n[c]=d,o=!0)}if(i){const c=G(s),d=l||Q;for(let u=0;u<i.length;u++){const f=i[u];s[f]=mn(r,c,f,d[f],e,!z(d,f))}}return o}function mn(e,t,s,n,r,i){const o=e[s];if(o!=null){const l=z(o,"default");if(l&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&N(c)){const{propsDefaults:d}=r;if(s in d)n=d[s];else{const u=fs(r);n=d[s]=c.call(null,t),u()}}else n=c;r.ce&&r.ce._setProp(s,n)}o[0]&&(i&&!l?n=!1:o[1]&&(n===""||n===Et(s))&&(n=!0))}return n}const Ml=new WeakMap;function Fi(e,t,s=!1){const n=s?Ml:t.propsCache,r=n.get(e);if(r)return r;const i=e.props,o={},l=[];let c=!1;if(!N(e)){const u=f=>{c=!0;const[h,v]=Fi(f,t,!0);fe(o,h),v&&l.push(...v)};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ne(e)&&n.set(e,jt),jt;if(B(i))for(let u=0;u<i.length;u++){const f=De(i[u]);ir(f)&&(o[f]=Q)}else if(i)for(const u in i){const f=De(u);if(ir(f)){const h=i[u],v=o[f]=B(h)||N(h)?{type:h}:fe({},h),O=v.type;let T=!1,k=!0;if(B(O))for(let F=0;F<O.length;++F){const D=O[F],M=N(D)&&D.name;if(M==="Boolean"){T=!0;break}else M==="String"&&(k=!1)}else T=N(O)&&O.name==="Boolean";v[0]=T,v[1]=k,(T||z(v,"default"))&&l.push(f)}}const d=[o,l];return ne(e)&&n.set(e,d),d}function ir(e){return e[0]!=="$"&&!Xt(e)}const Hi=e=>e[0]==="_"||e==="$stable",Nn=e=>B(e)?e.map(Ue):[Ue(e)],Ll=(e,t,s)=>{if(t._n)return t;const n=ll((...r)=>Nn(t(...r)),s);return n._c=!1,n},Bi=(e,t,s)=>{const n=e._ctx;for(const r in e){if(Hi(r))continue;const i=e[r];if(N(i))t[r]=Ll(r,i,n);else if(i!=null){const o=Nn(i);t[r]=()=>o}}},Ni=(e,t)=>{const s=Nn(t);e.slots.default=()=>s},ki=(e,t,s)=>{for(const n in t)(s||n!=="_")&&(e[n]=t[n])},Fl=(e,t,s)=>{const n=e.slots=Di();if(e.vnode.shapeFlag&32){const r=t._;r?(ki(n,t,s),s&&Qr(n,"_",r,!0)):Bi(t,n)}else t&&Ni(e,t)},Hl=(e,t,s)=>{const{vnode:n,slots:r}=e;let i=!0,o=Q;if(n.shapeFlag&32){const l=t._;l?s&&l===1?i=!1:ki(r,t,s):(i=!t.$stable,Bi(t,r)),o=t}else t&&(Ni(e,t),o={default:1});if(i)for(const l in r)!Hi(l)&&o[l]==null&&delete r[l]},Ee=Ql;function Bl(e){return Nl(e)}function Nl(e,t){const s=Yr();s.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:d,setElementText:u,parentNode:f,nextSibling:h,setScopeId:v=qe,insertStaticContent:O}=e,T=(a,p,g,w=null,m=null,y=null,C=void 0,E=null,A=!!p.dynamicChildren)=>{if(a===p)return;a&&!Kt(a,p)&&(w=b(a),xe(a,m,y,!0),a=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:_,ref:L,shapeFlag:R}=p;switch(_){case Us:k(a,p,g,w);break;case ls:F(a,p,g,w);break;case As:a==null&&D(p,g,w,C);break;case se:mt(a,p,g,w,m,y,C,E,A);break;default:R&1?Y(a,p,g,w,m,y,C,E,A):R&6?Be(a,p,g,w,m,y,C,E,A):(R&64||R&128)&&_.process(a,p,g,w,m,y,C,E,A,j)}L!=null&&m&&dn(L,a&&a.ref,y,p||a,!p)},k=(a,p,g,w)=>{if(a==null)n(p.el=l(p.children),g,w);else{const m=p.el=a.el;p.children!==a.children&&d(m,p.children)}},F=(a,p,g,w)=>{a==null?n(p.el=c(p.children||""),g,w):p.el=a.el},D=(a,p,g,w)=>{[a.el,a.anchor]=O(a.children,p,g,w,a.el,a.anchor)},M=({el:a,anchor:p},g,w)=>{let m;for(;a&&a!==p;)m=h(a),n(a,g,w),a=m;n(p,g,w)},$=({el:a,anchor:p})=>{let g;for(;a&&a!==p;)g=h(a),r(a),a=g;r(p)},Y=(a,p,g,w,m,y,C,E,A)=>{p.type==="svg"?C="svg":p.type==="math"&&(C="mathml"),a==null?pe(p,g,w,m,y,C,E,A):st(a,p,m,y,C,E,A)},pe=(a,p,g,w,m,y,C,E)=>{let A,_;const{props:L,shapeFlag:R,transition:I,dirs:H}=a;if(A=a.el=o(a.type,y,L&&L.is,L),R&8?u(A,a.children):R&16&&Fe(a.children,A,null,w,m,tn(a,y),C,E),H&&bt(a,null,w,"created"),re(A,a,a.scopeId,C,w),L){for(const ee in L)ee!=="value"&&!Xt(ee)&&i(A,ee,null,L[ee],y,w);"value"in L&&i(A,"value",null,L.value,y),(_=L.onVnodeBeforeMount)&&Ve(_,w,a)}H&&bt(a,null,w,"beforeMount");const V=kl(m,I);V&&I.beforeEnter(A),n(A,p,g),((_=L&&L.onVnodeMounted)||V||H)&&Ee(()=>{_&&Ve(_,w,a),V&&I.enter(A),H&&bt(a,null,w,"mounted")},m)},re=(a,p,g,w,m)=>{if(g&&v(a,g),w)for(let y=0;y<w.length;y++)v(a,w[y]);if(m){let y=m.subTree;if(p===y||zi(y.type)&&(y.ssContent===p||y.ssFallback===p)){const C=m.vnode;re(a,C,C.scopeId,C.slotScopeIds,m.parent)}}},Fe=(a,p,g,w,m,y,C,E,A=0)=>{for(let _=A;_<a.length;_++){const L=a[_]=E?ct(a[_]):Ue(a[_]);T(null,L,p,g,w,m,y,C,E)}},st=(a,p,g,w,m,y,C)=>{const E=p.el=a.el;let{patchFlag:A,dynamicChildren:_,dirs:L}=p;A|=a.patchFlag&16;const R=a.props||Q,I=p.props||Q;let H;if(g&&wt(g,!1),(H=I.onVnodeBeforeUpdate)&&Ve(H,g,p,a),L&&bt(p,a,g,"beforeUpdate"),g&&wt(g,!0),(R.innerHTML&&I.innerHTML==null||R.textContent&&I.textContent==null)&&u(E,""),_?He(a.dynamicChildren,_,E,g,w,tn(p,m),y):C||U(a,p,E,null,g,w,tn(p,m),y,!1),A>0){if(A&16)nt(E,R,I,g,m);else if(A&2&&R.class!==I.class&&i(E,"class",null,I.class,m),A&4&&i(E,"style",R.style,I.style,m),A&8){const V=p.dynamicProps;for(let ee=0;ee<V.length;ee++){const K=V[ee],ye=R[K],me=I[K];(me!==ye||K==="value")&&i(E,K,ye,me,m,g)}}A&1&&a.children!==p.children&&u(E,p.children)}else!C&&_==null&&nt(E,R,I,g,m);((H=I.onVnodeUpdated)||L)&&Ee(()=>{H&&Ve(H,g,p,a),L&&bt(p,a,g,"updated")},w)},He=(a,p,g,w,m,y,C)=>{for(let E=0;E<p.length;E++){const A=a[E],_=p[E],L=A.el&&(A.type===se||!Kt(A,_)||A.shapeFlag&70)?f(A.el):g;T(A,_,L,null,w,m,y,C,!0)}},nt=(a,p,g,w,m)=>{if(p!==g){if(p!==Q)for(const y in p)!Xt(y)&&!(y in g)&&i(a,y,p[y],null,m,w);for(const y in g){if(Xt(y))continue;const C=g[y],E=p[y];C!==E&&y!=="value"&&i(a,y,E,C,m,w)}"value"in g&&i(a,"value",p.value,g.value,m)}},mt=(a,p,g,w,m,y,C,E,A)=>{const _=p.el=a?a.el:l(""),L=p.anchor=a?a.anchor:l("");let{patchFlag:R,dynamicChildren:I,slotScopeIds:H}=p;H&&(E=E?E.concat(H):H),a==null?(n(_,g,w),n(L,g,w),Fe(p.children||[],g,L,m,y,C,E,A)):R>0&&R&64&&I&&a.dynamicChildren?(He(a.dynamicChildren,I,g,m,y,C,E),(p.key!=null||m&&p===m.subTree)&&Vi(a,p,!0)):U(a,p,g,L,m,y,C,E,A)},Be=(a,p,g,w,m,y,C,E,A)=>{p.slotScopeIds=E,a==null?p.shapeFlag&512?m.ctx.activate(p,g,w,C,A):Vt(p,g,w,m,y,C,A):St(a,p,A)},Vt=(a,p,g,w,m,y,C)=>{const E=a.component=lc(a,w,m);if(Pi(a)&&(E.ctx.renderer=j),cc(E,!1,C),E.asyncDep){if(m&&m.registerDep(E,ae,C),!a.el){const A=E.subTree=oe(ls);F(null,A,p,g)}}else ae(E,a,p,g,m,y,C)},St=(a,p,g)=>{const w=p.component=a.component;if(Zl(a,p,g))if(w.asyncDep&&!w.asyncResolved){X(w,p,g);return}else w.next=p,w.update();else p.el=a.el,w.vnode=p},ae=(a,p,g,w,m,y,C)=>{const E=()=>{if(a.isMounted){let{next:R,bu:I,u:H,parent:V,vnode:ee}=a;{const _e=Ui(a);if(_e){R&&(R.el=ee.el,X(a,R,C)),_e.asyncDep.then(()=>{a.isUnmounted||E()});return}}let K=R,ye;wt(a,!1),R?(R.el=ee.el,X(a,R,C)):R=ee,I&&Xs(I),(ye=R.props&&R.props.onVnodeBeforeUpdate)&&Ve(ye,V,R,ee),wt(a,!0);const me=sn(a),$e=a.subTree;a.subTree=me,T($e,me,f($e.el),b($e),a,m,y),R.el=me.el,K===null&&Jl(a,me.el),H&&Ee(H,m),(ye=R.props&&R.props.onVnodeUpdated)&&Ee(()=>Ve(ye,V,R,ee),m)}else{let R;const{el:I,props:H}=p,{bm:V,m:ee,parent:K,root:ye,type:me}=a,$e=Jt(p);if(wt(a,!1),V&&Xs(V),!$e&&(R=H&&H.onVnodeBeforeMount)&&Ve(R,K,p),wt(a,!0),I&&ie){const _e=()=>{a.subTree=sn(a),ie(I,a.subTree,a,m,null)};$e?me.__asyncHydrate(I,a,_e):_e()}else{ye.ce&&ye.ce._injectChildStyle(me);const _e=a.subTree=sn(a);T(null,_e,g,w,a,m,y),p.el=_e.el}if(ee&&Ee(ee,m),!$e&&(R=H&&H.onVnodeMounted)){const _e=p;Ee(()=>Ve(R,K,_e),m)}(p.shapeFlag&256||K&&Jt(K.vnode)&&K.vnode.shapeFlag&256)&&a.a&&Ee(a.a,m),a.isMounted=!0,p=g=w=null}};a.scope.on();const A=a.effect=new ni(E);a.scope.off();const _=a.update=A.run.bind(A),L=a.job=A.runIfDirty.bind(A);L.i=a,L.id=a.uid,A.scheduler=()=>Hn(L),wt(a,!0),_()},X=(a,p,g)=>{p.component=a;const w=a.vnode.props;a.vnode=p,a.next=null,Dl(a,p.props,w,g),Hl(a,p.children,g),ht(),Qn(a),gt()},U=(a,p,g,w,m,y,C,E,A=!1)=>{const _=a&&a.children,L=a?a.shapeFlag:0,R=p.children,{patchFlag:I,shapeFlag:H}=p;if(I>0){if(I&128){rt(_,R,g,w,m,y,C,E,A);return}else if(I&256){Ge(_,R,g,w,m,y,C,E,A);return}}H&8?(L&16&&Te(_,m,y),R!==_&&u(g,R)):L&16?H&16?rt(_,R,g,w,m,y,C,E,A):Te(_,m,y,!0):(L&8&&u(g,""),H&16&&Fe(R,g,w,m,y,C,E,A))},Ge=(a,p,g,w,m,y,C,E,A)=>{a=a||jt,p=p||jt;const _=a.length,L=p.length,R=Math.min(_,L);let I;for(I=0;I<R;I++){const H=p[I]=A?ct(p[I]):Ue(p[I]);T(a[I],H,g,null,m,y,C,E,A)}_>L?Te(a,m,y,!0,!1,R):Fe(p,g,w,m,y,C,E,A,R)},rt=(a,p,g,w,m,y,C,E,A)=>{let _=0;const L=p.length;let R=a.length-1,I=L-1;for(;_<=R&&_<=I;){const H=a[_],V=p[_]=A?ct(p[_]):Ue(p[_]);if(Kt(H,V))T(H,V,g,null,m,y,C,E,A);else break;_++}for(;_<=R&&_<=I;){const H=a[R],V=p[I]=A?ct(p[I]):Ue(p[I]);if(Kt(H,V))T(H,V,g,null,m,y,C,E,A);else break;R--,I--}if(_>R){if(_<=I){const H=I+1,V=H<L?p[H].el:w;for(;_<=I;)T(null,p[_]=A?ct(p[_]):Ue(p[_]),g,V,m,y,C,E,A),_++}}else if(_>I)for(;_<=R;)xe(a[_],m,y,!0),_++;else{const H=_,V=_,ee=new Map;for(_=V;_<=I;_++){const Ae=p[_]=A?ct(p[_]):Ue(p[_]);Ae.key!=null&&ee.set(Ae.key,_)}let K,ye=0;const me=I-V+1;let $e=!1,_e=0;const Ut=new Array(me);for(_=0;_<me;_++)Ut[_]=0;for(_=H;_<=R;_++){const Ae=a[_];if(ye>=me){xe(Ae,m,y,!0);continue}let ke;if(Ae.key!=null)ke=ee.get(Ae.key);else for(K=V;K<=I;K++)if(Ut[K-V]===0&&Kt(Ae,p[K])){ke=K;break}ke===void 0?xe(Ae,m,y,!0):(Ut[ke-V]=_+1,ke>=_e?_e=ke:$e=!0,T(Ae,p[ke],g,null,m,y,C,E,A),ye++)}const Un=$e?Vl(Ut):jt;for(K=Un.length-1,_=me-1;_>=0;_--){const Ae=V+_,ke=p[Ae],qn=Ae+1<L?p[Ae+1].el:w;Ut[_]===0?T(null,ke,g,qn,m,y,C,E,A):$e&&(K<0||_!==Un[K]?Ne(ke,g,qn,2):K--)}}},Ne=(a,p,g,w,m=null)=>{const{el:y,type:C,transition:E,children:A,shapeFlag:_}=a;if(_&6){Ne(a.component.subTree,p,g,w);return}if(_&128){a.suspense.move(p,g,w);return}if(_&64){C.move(a,p,g,j);return}if(C===se){n(y,p,g);for(let R=0;R<A.length;R++)Ne(A[R],p,g,w);n(a.anchor,p,g);return}if(C===As){M(a,p,g);return}if(w!==2&&_&1&&E)if(w===0)E.beforeEnter(y),n(y,p,g),Ee(()=>E.enter(y),m);else{const{leave:R,delayLeave:I,afterLeave:H}=E,V=()=>n(y,p,g),ee=()=>{R(y,()=>{V(),H&&H()})};I?I(y,V,ee):ee()}else n(y,p,g)},xe=(a,p,g,w=!1,m=!1)=>{const{type:y,props:C,ref:E,children:A,dynamicChildren:_,shapeFlag:L,patchFlag:R,dirs:I,cacheIndex:H}=a;if(R===-2&&(m=!1),E!=null&&dn(E,null,g,a,!0),H!=null&&(p.renderCache[H]=void 0),L&256){p.ctx.deactivate(a);return}const V=L&1&&I,ee=!Jt(a);let K;if(ee&&(K=C&&C.onVnodeBeforeUnmount)&&Ve(K,p,a),L&6)hs(a.component,g,w);else{if(L&128){a.suspense.unmount(g,w);return}V&&bt(a,null,p,"beforeUnmount"),L&64?a.type.remove(a,p,g,j,w):_&&!_.hasOnce&&(y!==se||R>0&&R&64)?Te(_,p,g,!1,!0):(y===se&&R&384||!m&&L&16)&&Te(A,p,g),w&&Rt(a)}(ee&&(K=C&&C.onVnodeUnmounted)||V)&&Ee(()=>{K&&Ve(K,p,a),V&&bt(a,null,p,"unmounted")},g)},Rt=a=>{const{type:p,el:g,anchor:w,transition:m}=a;if(p===se){Pt(g,w);return}if(p===As){$(a);return}const y=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(a.shapeFlag&1&&m&&!m.persisted){const{leave:C,delayLeave:E}=m,A=()=>C(g,y);E?E(a.el,y,A):A()}else y()},Pt=(a,p)=>{let g;for(;a!==p;)g=h(a),r(a),a=g;r(p)},hs=(a,p,g)=>{const{bum:w,scope:m,job:y,subTree:C,um:E,m:A,a:_}=a;or(A),or(_),w&&Xs(w),m.stop(),y&&(y.flags|=8,xe(C,a,p,g)),E&&Ee(E,p),Ee(()=>{a.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(a,p,g,w=!1,m=!1,y=0)=>{for(let C=y;C<a.length;C++)xe(a[C],p,g,w,m)},b=a=>{if(a.shapeFlag&6)return b(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const p=h(a.anchor||a.el),g=p&&p[cl];return g?h(g):p};let P=!1;const S=(a,p,g)=>{a==null?p._vnode&&xe(p._vnode,null,null,!0):T(p._vnode||null,a,p,null,null,null,g),p._vnode=a,P||(P=!0,Qn(),Ai(),P=!1)},j={p:T,um:xe,m:Ne,r:Rt,mt:Vt,mc:Fe,pc:U,pbc:He,n:b,o:e};let q,ie;return{render:S,hydrate:q,createApp:jl(S,q)}}function tn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function wt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function kl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vi(e,t,s=!1){const n=e.children,r=t.children;if(B(n)&&B(r))for(let i=0;i<n.length;i++){const o=n[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=ct(r[i]),l.el=o.el),!s&&l.patchFlag!==-2&&Vi(o,l)),l.type===Us&&(l.el=o.el)}}function Vl(e){const t=e.slice(),s=[0];let n,r,i,o,l;const c=e.length;for(n=0;n<c;n++){const d=e[n];if(d!==0){if(r=s[s.length-1],e[r]<d){t[n]=r,s.push(n);continue}for(i=0,o=s.length-1;i<o;)l=i+o>>1,e[s[l]]<d?i=l+1:o=l;d<e[s[i]]&&(i>0&&(t[n]=s[i-1]),s[i]=n)}}for(i=s.length,o=s[i-1];i-- >0;)s[i]=o,o=t[o];return s}function Ui(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ui(t)}function or(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ul=Symbol.for("v-scx"),ql=()=>Ke(Ul);function Yt(e,t,s){return qi(e,t,s)}function qi(e,t,s=Q){const{immediate:n,deep:r,flush:i,once:o}=s,l=fe({},s);let c;if(qs)if(i==="sync"){const h=ql();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||n)l.once=!0;else return{stop:qe,resume:qe,pause:qe};const d=he;l.call=(h,v,O)=>We(h,d,v,O);let u=!1;i==="post"?l.scheduler=h=>{Ee(h,d&&d.suspense)}:i!=="sync"&&(u=!0,l.scheduler=(h,v)=>{v?h():Hn(h)}),l.augmentJob=h=>{t&&(h.flags|=4),u&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const f=nl(e,t,l);return c&&c.push(f),f}function Kl(e,t,s){const n=this.proxy,r=ce(e)?e.includes(".")?Ki(n,e):()=>n[e]:e.bind(n,n);let i;N(t)?i=t:(i=t.handler,s=t);const o=fs(this),l=qi(r,i.bind(n),s);return o(),l}function Ki(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const Wl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${Et(t)}Modifiers`];function zl(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||Q;let r=s;const i=t.startsWith("update:"),o=i&&Wl(n,t.slice(7));o&&(o.trim&&(r=s.map(u=>ce(u)?u.trim():u)),o.number&&(r=s.map(yo)));let l,c=n[l=Gs(t)]||n[l=Gs(De(t))];!c&&i&&(c=n[l=Gs(Et(t))]),c&&We(c,e,6,r);const d=n[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,We(d,e,6,r)}}function Wi(e,t,s=!1){const n=t.emitsCache,r=n.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!N(e)){const c=d=>{const u=Wi(d,t,!0);u&&(l=!0,fe(o,u))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(ne(e)&&n.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):fe(o,i),ne(e)&&n.set(e,o),o)}function Vs(e,t){return!e||!js(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Et(t))||z(e,t))}function sn(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:d,renderCache:u,props:f,data:h,setupState:v,ctx:O,inheritAttrs:T}=e,k=Rs(e);let F,D;try{if(s.shapeFlag&4){const $=r||n,Y=$;F=Ue(d.call(Y,$,u,f,v,h,O)),D=l}else{const $=t;F=Ue($.length>1?$(f,{attrs:l,slots:o,emit:c}):$(f,null)),D=t.props?l:Gl(l)}}catch($){es.length=0,Ns($,e,1),F=oe(ls)}let M=F;if(D&&T!==!1){const $=Object.keys(D),{shapeFlag:Y}=M;$.length&&Y&7&&(i&&$.some(Cn)&&(D=Xl(D,i)),M=Ht(M,D,!1,!0))}return s.dirs&&(M=Ht(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(s.dirs):s.dirs),s.transition&&(M.transition=s.transition),F=M,Rs(k),F}const Gl=e=>{let t;for(const s in e)(s==="class"||s==="style"||js(s))&&((t||(t={}))[s]=e[s]);return t},Xl=(e,t)=>{const s={};for(const n in e)(!Cn(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Zl(e,t,s){const{props:n,children:r,component:i}=e,{props:o,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return n?lr(n,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Vs(d,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:n===o?!1:n?o?lr(n,o,d):!0:!!o;return!1}function lr(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(t[i]!==e[i]&&!Vs(s,i))return!0}return!1}function Jl({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const zi=e=>e.__isSuspense;function Ql(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):ol(e)}const se=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),ls=Symbol.for("v-cmt"),As=Symbol.for("v-stc"),es=[];let Pe=null;function Z(e=!1){es.push(Pe=e?null:[])}function Yl(){es.pop(),Pe=es[es.length-1]||null}let cs=1;function cr(e){cs+=e,e<0&&Pe&&(Pe.hasOnce=!0)}function ec(e){return e.dynamicChildren=cs>0?Pe||jt:null,Yl(),cs>0&&Pe&&Pe.push(e),e}function J(e,t,s,n,r,i){return ec(x(e,t,s,n,r,i,!0))}function bn(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Gi=({key:e})=>e??null,Es=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||ge(e)||N(e)?{i:Re,r:e,k:t,f:!!s}:e:null);function x(e,t=null,s=null,n=0,r=null,i=e===se?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&Es(t),scopeId:Ci,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return l?(kn(c,s),i&128&&e.normalize(c)):s&&(c.shapeFlag|=ce(s)?8:16),cs>0&&!o&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const oe=tc;function tc(e,t=null,s=null,n=0,r=null,i=!1){if((!e||e===Al)&&(e=ls),bn(e)){const l=Ht(e,t,!0);return s&&kn(l,s),cs>0&&!i&&Pe&&(l.shapeFlag&6?Pe[Pe.indexOf(e)]=l:Pe.push(l)),l.patchFlag=-2,l}if(dc(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:l,style:c}=t;l&&!ce(l)&&(t.class=Ls(l)),ne(c)&&(Mn(c)&&!B(c)&&(c=fe({},c)),t.style=Ft(c))}const o=ce(e)?1:zi(e)?128:al(e)?64:ne(e)?4:N(e)?2:0;return x(e,t,s,n,r,o,i,!0)}function sc(e){return e?Mn(e)||Mi(e)?fe({},e):e:null}function Ht(e,t,s=!1,n=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=e,d=t?rc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Gi(d),ref:t&&t.ref?s&&i?B(i)?i.concat(Es(t)):[i,Es(t)]:Es(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&Si(u,c.clone(u)),u}function ft(e=" ",t=0){return oe(Us,null,e,t)}function nc(e,t){const s=oe(As,null,e);return s.staticCount=t,s}function Ue(e){return e==null||typeof e=="boolean"?oe(ls):B(e)?oe(se,null,e.slice()):typeof e=="object"?ct(e):oe(Us,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function kn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(B(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),kn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!Mi(t)?t._ctx=Re:r===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:Re},s=32):(t=String(t),n&64?(s=16,t=[ft(t)]):s=8);e.children=t,e.shapeFlag|=s}function rc(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Ls([t.class,n.class]));else if(r==="style")t.style=Ft([t.style,n.style]);else if(js(r)){const i=t[r],o=n[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=n[r])}return t}function Ve(e,t,s,n=null){We(e,t,7,[s,n])}const ic=ji();let oc=0;function lc(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||ic,i={uid:oc++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fi(n,r),emitsOptions:Wi(n,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:n.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=zl.bind(null,i),e.ce&&e.ce(i),i}let he=null,Ts,wn;{const e=Yr(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ts=t("__VUE_INSTANCE_SETTERS__",s=>he=s),wn=t("__VUE_SSR_SETTERS__",s=>qs=s)}const fs=e=>{const t=he;return Ts(e),e.scope.on(),()=>{e.scope.off(),Ts(t)}},ar=()=>{he&&he.scope.off(),Ts(null)};function Xi(e){return e.vnode.shapeFlag&4}let qs=!1;function cc(e,t=!1,s=!1){t&&wn(t);const{props:n,children:r}=e.vnode,i=Xi(e);Il(e,n,i,t),Fl(e,r,s);const o=i?ac(e,t):void 0;return t&&wn(!1),o}function ac(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cl);const{setup:n}=s;if(n){const r=e.setupContext=n.length>1?uc(e):null,i=fs(e);ht();const o=us(n,e,0,[e.props,r]);if(gt(),i(),Xr(o)){if(Jt(e)||Ri(e),o.then(ar,ar),t)return o.then(l=>{pr(e,l,t)}).catch(l=>{Ns(l,e,0)});e.asyncDep=o}else pr(e,o,t)}else Zi(e,t)}function pr(e,t,s){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=wi(t)),Zi(e,s)}let ur;function Zi(e,t,s){const n=e.type;if(!e.render){if(!t&&ur&&!n.render){const r=n.template||Bn(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:c}=n,d=fe(fe({isCustomElement:i,delimiters:l},o),c);n.render=ur(r,d)}}e.render=n.render||qe}{const r=fs(e);ht();try{Sl(e)}finally{gt(),r()}}}const pc={get(e,t){return ve(e,"get",""),e[t]}};function uc(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,pc),slots:e.slots,emit:e.emit,expose:t}}function Ks(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wi(Zo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Qt)return Qt[s](e)},has(t,s){return s in t||s in Qt}})):e.proxy}function fc(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function dc(e){return N(e)&&"__vccOpts"in e}const Oe=(e,t)=>tl(e,t,qs);function Ji(e,t,s){const n=arguments.length;return n===2?ne(t)&&!B(t)?bn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&bn(s)&&(s=[s]),oe(e,t,s))}const hc="3.5.1";/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xn;const fr=typeof window<"u"&&window.trustedTypes;if(fr)try{xn=fr.createPolicy("vue",{createHTML:e=>e})}catch{}const Qi=xn?e=>xn.createHTML(e):e=>e,gc="http://www.w3.org/2000/svg",vc="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,dr=Je&&Je.createElement("template"),mc={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?Je.createElementNS(gc,e):t==="mathml"?Je.createElementNS(vc,e):s?Je.createElement(e,{is:s}):Je.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,i){const o=s?s.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===i||!(r=r.nextSibling)););else{dr.innerHTML=Qi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=dr.content;if(n==="svg"||n==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},bc=Symbol("_vtc");function wc(e,t,s){const n=e[bc];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const $s=Symbol("_vod"),Yi=Symbol("_vsh"),hr={beforeMount(e,{value:t},{transition:s}){e[$s]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):Wt(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:n}){!t!=!s&&(n?t?(n.beforeEnter(e),Wt(e,!0),n.enter(e)):n.leave(e,()=>{Wt(e,!1)}):Wt(e,t))},beforeUnmount(e,{value:t}){Wt(e,t)}};function Wt(e,t){e.style.display=t?e[$s]:"none",e[Yi]=!t}const xc=Symbol(""),yc=/(^|;)\s*display\s*:/;function _c(e,t,s){const n=e.style,r=ce(s);let i=!1;if(s&&!r){if(t)if(ce(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&Cs(n,l,"")}else for(const o in t)s[o]==null&&Cs(n,o,"");for(const o in s)o==="display"&&(i=!0),Cs(n,o,s[o])}else if(r){if(t!==s){const o=n[xc];o&&(s+=";"+o),n.cssText=s,i=yc.test(s)}}else t&&e.removeAttribute("style");$s in e&&(e[$s]=i?n.display:"",e[Yi]&&(n.display="none"))}const gr=/\s*!important$/;function Cs(e,t,s){if(B(s))s.forEach(n=>Cs(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Ac(e,t);gr.test(s)?e.setProperty(Et(n),s.replace(gr,""),"important"):e[n]=s}}const vr=["Webkit","Moz","ms"],nn={};function Ac(e,t){const s=nn[t];if(s)return s;let n=De(t);if(n!=="filter"&&n in e)return nn[t]=n;n=Ms(n);for(let r=0;r<vr.length;r++){const i=vr[r]+n;if(i in e)return nn[t]=i}return t}const mr="http://www.w3.org/1999/xlink";function br(e,t,s,n,r,i=Ro(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(mr,t.slice(6,t.length)):e.setAttributeNS(mr,t,s):s==null||i&&!ei(s)?e.removeAttribute(t):e.setAttribute(t,i?"":dt(s)?String(s):s)}function Ec(e,t,s,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Qi(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(o!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=ei(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(t)}function Cc(e,t,s,n){e.addEventListener(t,s,n)}function Sc(e,t,s,n){e.removeEventListener(t,s,n)}const wr=Symbol("_vei");function Rc(e,t,s,n,r=null){const i=e[wr]||(e[wr]={}),o=i[t];if(n&&o)o.value=n;else{const[l,c]=Pc(t);if(n){const d=i[t]=Oc(n,r);Cc(e,l,d,c)}else o&&(Sc(e,l,o,c),i[t]=void 0)}}const xr=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(xr.test(e)){t={};let n;for(;n=e.match(xr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let rn=0;const Tc=Promise.resolve(),$c=()=>rn||(Tc.then(()=>rn=0),rn=Date.now());function Oc(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;We(jc(n,s.value),t,5,[n])};return s.value=e,s.attached=$c(),s}function jc(e,t){if(B(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const yr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ic=(e,t,s,n,r,i)=>{const o=r==="svg";t==="class"?wc(e,n,o):t==="style"?_c(e,s,n):js(t)?Cn(t)||Rc(e,t,s,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Dc(e,t,n,o))?(Ec(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&br(e,t,n,o,i,t!=="value")):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),br(e,t,n,o))};function Dc(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&yr(t)&&N(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yr(t)&&ce(s)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!ce(s)))}const Mc=fe({patchProp:Ic},mc);let _r;function Lc(){return _r||(_r=Bl(Mc))}const Fc=(...e)=>{const t=Lc().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=Bc(n);if(!r)return;const i=t._component;!N(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=s(r,!1,Hc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Hc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Bc(e){return ce(e)?document.querySelector(e):e}const ze=(e,t)=>{const s=e.__vccOpts||e;for(const[n,r]of t)s[n]=r;return s},Nc={},kc={class:"tc-footer"};function Vc(e,t){return Z(),J("div",kc,t[0]||(t[0]=[nc('<div class="tc-footer-flex" data-v-a2eff4d2><div data-v-a2eff4d2><p class="tc-footer-p" data-v-a2eff4d2>联系我们</p><p class="tc-footer-p2" data-v-a2eff4d2>联系邮箱：office@chineseteas.net</p></div></div><div class="tc-footer-policy" data-v-a2eff4d2><span data-v-a2eff4d2>@ 2024 Chinese teas</span><span class="tc-marginLeft60" data-v-a2eff4d2>隐私政策</span></div>',2)]))}const Uc=ze(Nc,[["render",Vc],["__scopeId","data-v-a2eff4d2"]]),qc={class:"tc-main"},Kc=Le({__name:"App",setup(e){return(t,s)=>{const n=_l("router-view");return Z(),J("div",qc,[oe(n),oe(Uc)])}}}),Wc=ze(Kc,[["__scopeId","data-v-323fcb18"]]);/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function zc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const W=Object.assign;function on(e,t){const s={};for(const n in t){const r=t[n];s[n]=Me(r)?r.map(e):e(r)}return s}const ts=()=>{},Me=Array.isArray,eo=/#/g,Gc=/&/g,Xc=/\//g,Zc=/=/g,Jc=/\?/g,to=/\+/g,Qc=/%5B/g,Yc=/%5D/g,so=/%5E/g,ea=/%60/g,no=/%7B/g,ta=/%7C/g,ro=/%7D/g,sa=/%20/g;function Vn(e){return encodeURI(""+e).replace(ta,"|").replace(Qc,"[").replace(Yc,"]")}function na(e){return Vn(e).replace(no,"{").replace(ro,"}").replace(so,"^")}function yn(e){return Vn(e).replace(to,"%2B").replace(sa,"+").replace(eo,"%23").replace(Gc,"%26").replace(ea,"`").replace(no,"{").replace(ro,"}").replace(so,"^")}function ra(e){return yn(e).replace(Zc,"%3D")}function ia(e){return Vn(e).replace(eo,"%23").replace(Jc,"%3F")}function oa(e){return e==null?"":ia(e).replace(Xc,"%2F")}function as(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const la=/\/$/,ca=e=>e.replace(la,"");function ln(e,t,s="/"){let n,r={},i="",o="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(n=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),r=e(i)),l>-1&&(n=n||t.slice(0,l),o=t.slice(l,t.length)),n=fa(n??t,s),{fullPath:n+(i&&"?")+i+o,path:n,query:r,hash:as(o)}}function aa(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pa(e,t,s){const n=t.matched.length-1,r=s.matched.length-1;return n>-1&&n===r&&Bt(t.matched[n],s.matched[r])&&io(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function io(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!ua(e[s],t[s]))return!1;return!0}function ua(e,t){return Me(e)?Er(e,t):Me(t)?Er(t,e):e===t}function Er(e,t){return Me(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function fa(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let i=s.length-1,o,l;for(o=0;o<n.length;o++)if(l=n[o],l!==".")if(l==="..")i>1&&i--;else break;return s.slice(0,i).join("/")+"/"+n.slice(o).join("/")}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ps;(function(e){e.pop="pop",e.push="push"})(ps||(ps={}));var ss;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ss||(ss={}));function da(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ca(e)}const ha=/^[^#]+#/;function ga(e,t){return e.replace(ha,"#")+t}function va(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const Ws=()=>({left:window.scrollX,top:window.scrollY});function ma(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;t=va(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Cr(e,t){return(history.state?history.state.position-t:-1)+e}const _n=new Map;function ba(e,t){_n.set(e,t)}function wa(e){const t=_n.get(e);return _n.delete(e),t}let xa=()=>location.protocol+"//"+location.host;function oo(e,t){const{pathname:s,search:n,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Ar(c,"")}return Ar(s,e)+n+r}function ya(e,t,s,n){let r=[],i=[],o=null;const l=({state:h})=>{const v=oo(e,location),O=s.value,T=t.value;let k=0;if(h){if(s.value=v,t.value=h,o&&o===O){o=null;return}k=T?h.position-T.position:0}else n(v);r.forEach(F=>{F(s.value,O,{delta:k,type:ps.pop,direction:k?k>0?ss.forward:ss.back:ss.unknown})})};function c(){o=s.value}function d(h){r.push(h);const v=()=>{const O=r.indexOf(h);O>-1&&r.splice(O,1)};return i.push(v),v}function u(){const{history:h}=window;h.state&&h.replaceState(W({},h.state,{scroll:Ws()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:d,destroy:f}}function Sr(e,t,s,n=!1,r=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:r?Ws():null}}function _a(e){const{history:t,location:s}=window,n={value:oo(e,s)},r={value:t.state};r.value||i(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,d,u){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:xa()+e+c;try{t[u?"replaceState":"pushState"](d,"",h),r.value=d}catch(v){console.error(v),s[u?"replace":"assign"](h)}}function o(c,d){const u=W({},t.state,Sr(r.value.back,c,r.value.forward,!0),d,{position:r.value.position});i(c,u,!0),n.value=c}function l(c,d){const u=W({},r.value,t.state,{forward:c,scroll:Ws()});i(u.current,u,!0);const f=W({},Sr(n.value,c,null),{position:u.position+1},d);i(c,f,!1),n.value=c}return{location:n,state:r,push:l,replace:o}}function Aa(e){e=da(e);const t=_a(e),s=ya(e,t.state,t.location,t.replace);function n(i,o=!0){o||s.pauseListeners(),history.go(i)}const r=W({location:"",base:e,go:n,createHref:ga.bind(null,e)},t,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ea(e){return typeof e=="string"||e&&typeof e=="object"}function lo(e){return typeof e=="string"||typeof e=="symbol"}const co=Symbol("");var Rr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rr||(Rr={}));function Nt(e,t){return W(new Error,{type:e,[co]:!0},t)}function Ze(e,t){return e instanceof Error&&co in e&&(t==null||!!(e.type&t))}const Pr="[^/]+?",Ca={sensitive:!1,strict:!1,start:!0,end:!0},Sa=/[.+*?^${}()[\]/\\]/g;function Ra(e,t){const s=W({},Ca,t),n=[];let r=s.start?"^":"";const i=[];for(const d of e){const u=d.length?[]:[90];s.strict&&!d.length&&(r+="/");for(let f=0;f<d.length;f++){const h=d[f];let v=40+(s.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Sa,"\\$&"),v+=40;else if(h.type===1){const{value:O,repeatable:T,optional:k,regexp:F}=h;i.push({name:O,repeatable:T,optional:k});const D=F||Pr;if(D!==Pr){v+=10;try{new RegExp(`(${D})`)}catch($){throw new Error(`Invalid custom RegExp for param "${O}" (${D}): `+$.message)}}let M=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(M=k&&d.length<2?`(?:/${M})`:"/"+M),k&&(M+="?"),r+=M,v+=20,k&&(v+=-8),T&&(v+=-20),D===".*"&&(v+=-50)}u.push(v)}n.push(u)}if(s.strict&&s.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}s.strict||(r+="/?"),s.end?r+="$":s.strict&&(r+="(?:/|$)");const o=new RegExp(r,s.sensitive?"":"i");function l(d){const u=d.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const v=u[h]||"",O=i[h-1];f[O.name]=v&&O.repeatable?v.split("/"):v}return f}function c(d){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const v of h)if(v.type===0)u+=v.value;else if(v.type===1){const{value:O,repeatable:T,optional:k}=v,F=O in d?d[O]:"";if(Me(F)&&!T)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const D=Me(F)?F.join("/"):F;if(!D)if(k)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${O}"`);u+=D}}return u||"/"}return{re:o,score:n,keys:i,parse:l,stringify:c}}function Pa(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ao(e,t){let s=0;const n=e.score,r=t.score;for(;s<n.length&&s<r.length;){const i=Pa(n[s],r[s]);if(i)return i;s++}if(Math.abs(r.length-n.length)===1){if(Tr(n))return 1;if(Tr(r))return-1}return r.length-n.length}function Tr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ta={type:0,value:""},$a=/[a-zA-Z0-9_]/;function Oa(e){if(!e)return[[]];if(e==="/")return[[Ta]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${s})/"${d}": ${v}`)}let s=0,n=s;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,d="",u="";function f(){d&&(s===0?i.push({type:0,value:d}):s===1||s===2||s===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&s!==2){n=s,s=4;continue}switch(s){case 0:c==="/"?(d&&f(),o()):c===":"?(f(),s=1):h();break;case 4:h(),s=n;break;case 1:c==="("?s=2:$a.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:s=3:u+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),o(),r}function ja(e,t,s){const n=Ra(Oa(e.path),s),r=W(n,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ia(e,t){const s=[],n=new Map;t=jr({strict:!1,end:!0,sensitive:!1},t);function r(f){return n.get(f)}function i(f,h,v){const O=!v,T=Da(f);T.aliasOf=v&&v.record;const k=jr(t,f),F=[T];if("alias"in f){const $=typeof f.alias=="string"?[f.alias]:f.alias;for(const Y of $)F.push(W({},T,{components:v?v.record.components:T.components,path:Y,aliasOf:v?v.record:T}))}let D,M;for(const $ of F){const{path:Y}=$;if(h&&Y[0]!=="/"){const pe=h.record.path,re=pe[pe.length-1]==="/"?"":"/";$.path=h.record.path+(Y&&re+Y)}if(D=ja($,h,k),v?v.alias.push(D):(M=M||D,M!==D&&M.alias.push(D),O&&f.name&&!Or(D)&&o(f.name)),po(D)&&c(D),T.children){const pe=T.children;for(let re=0;re<pe.length;re++)i(pe[re],D,v&&v.children[re])}v=v||D}return M?()=>{o(M)}:ts}function o(f){if(lo(f)){const h=n.get(f);h&&(n.delete(f),s.splice(s.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=s.indexOf(f);h>-1&&(s.splice(h,1),f.record.name&&n.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return s}function c(f){const h=Fa(f,s);s.splice(h,0,f),f.record.name&&!Or(f)&&n.set(f.record.name,f)}function d(f,h){let v,O={},T,k;if("name"in f&&f.name){if(v=n.get(f.name),!v)throw Nt(1,{location:f});k=v.record.name,O=W($r(h.params,v.keys.filter(M=>!M.optional).concat(v.parent?v.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&$r(f.params,v.keys.map(M=>M.name))),T=v.stringify(O)}else if(f.path!=null)T=f.path,v=s.find(M=>M.re.test(T)),v&&(O=v.parse(T),k=v.record.name);else{if(v=h.name?n.get(h.name):s.find(M=>M.re.test(h.path)),!v)throw Nt(1,{location:f,currentLocation:h});k=v.record.name,O=W({},h.params,f.params),T=v.stringify(O)}const F=[];let D=v;for(;D;)F.unshift(D.record),D=D.parent;return{name:k,path:T,params:O,matched:F,meta:La(F)}}e.forEach(f=>i(f));function u(){s.length=0,n.clear()}return{addRoute:i,resolve:d,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:r}}function $r(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function Da(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ma(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ma(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function Or(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function La(e){return e.reduce((t,s)=>W(t,s.meta),{})}function jr(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}function Fa(e,t){let s=0,n=t.length;for(;s!==n;){const i=s+n>>1;ao(e,t[i])<0?n=i:s=i+1}const r=Ha(e);return r&&(n=t.lastIndexOf(r,n-1)),n}function Ha(e){let t=e;for(;t=t.parent;)if(po(t)&&ao(e,t)===0)return t}function po({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ba(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(to," "),o=i.indexOf("="),l=as(o<0?i:i.slice(0,o)),c=o<0?null:as(i.slice(o+1));if(l in t){let d=t[l];Me(d)||(d=t[l]=[d]),d.push(c)}else t[l]=c}return t}function Ir(e){let t="";for(let s in e){const n=e[s];if(s=ra(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(Me(n)?n.map(i=>i&&yn(i)):[n&&yn(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+s,i!=null&&(t+="="+i))})}return t}function Na(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=Me(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return t}const ka=Symbol(""),Dr=Symbol(""),zs=Symbol(""),uo=Symbol(""),An=Symbol("");function zt(){let e=[];function t(n){return e.push(n),()=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function at(e,t,s,n,r,i=o=>o()){const o=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const d=h=>{h===!1?c(Nt(4,{from:s,to:t})):h instanceof Error?c(h):Ea(h)?c(Nt(2,{from:t,to:h})):(o&&n.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),l())},u=i(()=>e.call(n&&n.instances[r],t,s,d));let f=Promise.resolve(u);e.length<3&&(f=f.then(d)),f.catch(h=>c(h))})}function cn(e,t,s,n,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let c=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Va(c)){const u=(c.__vccOpts||c)[t];u&&i.push(at(u,s,n,o,l,r))}else{let d=c();i.push(()=>d.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const f=zc(u)?u.default:u;o.components[l]=f;const v=(f.__vccOpts||f)[t];return v&&at(v,s,n,o,l,r)()}))}}return i}function Va(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Mr(e){const t=Ke(zs),s=Ke(uo),n=Oe(()=>{const c=ue(e.to);return t.resolve(c)}),r=Oe(()=>{const{matched:c}=n.value,{length:d}=c,u=c[d-1],f=s.matched;if(!u||!f.length)return-1;const h=f.findIndex(Bt.bind(null,u));if(h>-1)return h;const v=Lr(c[d-2]);return d>1&&Lr(u)===v&&f[f.length-1].path!==v?f.findIndex(Bt.bind(null,c[d-2])):h}),i=Oe(()=>r.value>-1&&Wa(s.params,n.value.params)),o=Oe(()=>r.value>-1&&r.value===s.matched.length-1&&io(s.params,n.value.params));function l(c={}){return Ka(c)?t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(ts):Promise.resolve()}return{route:n,href:Oe(()=>n.value.href),isActive:i,isExactActive:o,navigate:l}}const Ua=Le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mr,setup(e,{slots:t}){const s=Bs(Mr(e)),{options:n}=Ke(zs),r=Oe(()=>({[Fr(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[Fr(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const i=t.default&&t.default(s);return e.custom?i:Ji("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},i)}}}),qa=Ua;function Ka(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wa(e,t){for(const s in t){const n=t[s],r=e[s];if(typeof n=="string"){if(n!==r)return!1}else if(!Me(r)||r.length!==n.length||n.some((i,o)=>i!==r[o]))return!1}return!0}function Lr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fr=(e,t,s)=>e??t??s,za=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=Ke(An),r=Oe(()=>e.route||n.value),i=Ke(Dr,0),o=Oe(()=>{let d=ue(i);const{matched:u}=r.value;let f;for(;(f=u[d])&&!f.components;)d++;return d}),l=Oe(()=>r.value.matched[o.value]);_s(Dr,Oe(()=>o.value+1)),_s(ka,l),_s(An,r);const c=ut();return Yt(()=>[c.value,l.value,e.name],([d,u,f],[h,v,O])=>{u&&(u.instances[f]=d,v&&v!==u&&d&&d===h&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!Bt(u,v)||!h)&&(u.enterCallbacks[f]||[]).forEach(T=>T(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,f=l.value,h=f&&f.components[u];if(!h)return Hr(s.default,{Component:h,route:d});const v=f.props[u],O=v?v===!0?d.params:typeof v=="function"?v(d):v:null,k=Ji(h,W({},O,t,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Hr(s.default,{Component:k,route:d})||k}}});function Hr(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Ga=za;function Xa(e){const t=Ia(e.routes,e),s=e.parseQuery||Ba,n=e.stringifyQuery||Ir,r=e.history,i=zt(),o=zt(),l=zt(),c=Jo(ot);let d=ot;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=on.bind(null,b=>""+b),f=on.bind(null,oa),h=on.bind(null,as);function v(b,P){let S,j;return lo(b)?(S=t.getRecordMatcher(b),j=P):j=b,t.addRoute(j,S)}function O(b){const P=t.getRecordMatcher(b);P&&t.removeRoute(P)}function T(){return t.getRoutes().map(b=>b.record)}function k(b){return!!t.getRecordMatcher(b)}function F(b,P){if(P=W({},P||c.value),typeof b=="string"){const p=ln(s,b,P.path),g=t.resolve({path:p.path},P),w=r.createHref(p.fullPath);return W(p,g,{params:h(g.params),hash:as(p.hash),redirectedFrom:void 0,href:w})}let S;if(b.path!=null)S=W({},b,{path:ln(s,b.path,P.path).path});else{const p=W({},b.params);for(const g in p)p[g]==null&&delete p[g];S=W({},b,{params:f(p)}),P.params=f(P.params)}const j=t.resolve(S,P),q=b.hash||"";j.params=u(h(j.params));const ie=aa(n,W({},b,{hash:na(q),path:j.path})),a=r.createHref(ie);return W({fullPath:ie,hash:q,query:n===Ir?Na(b.query):b.query||{}},j,{redirectedFrom:void 0,href:a})}function D(b){return typeof b=="string"?ln(s,b,c.value.path):W({},b)}function M(b,P){if(d!==b)return Nt(8,{from:P,to:b})}function $(b){return re(b)}function Y(b){return $(W(D(b),{replace:!0}))}function pe(b){const P=b.matched[b.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let j=typeof S=="function"?S(b):S;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),W({query:b.query,hash:b.hash,params:j.path!=null?{}:b.params},j)}}function re(b,P){const S=d=F(b),j=c.value,q=b.state,ie=b.force,a=b.replace===!0,p=pe(S);if(p)return re(W(D(p),{state:typeof p=="object"?W({},q,p.state):q,force:ie,replace:a}),P||S);const g=S;g.redirectedFrom=P;let w;return!ie&&pa(n,j,S)&&(w=Nt(16,{to:g,from:j}),Ne(j,j,!0,!1)),(w?Promise.resolve(w):He(g,j)).catch(m=>Ze(m)?Ze(m,2)?m:rt(m):U(m,g,j)).then(m=>{if(m){if(Ze(m,2))return re(W({replace:a},D(m.to),{state:typeof m.to=="object"?W({},q,m.to.state):q,force:ie}),P||g)}else m=mt(g,j,!0,a,q);return nt(g,j,m),m})}function Fe(b,P){const S=M(b,P);return S?Promise.reject(S):Promise.resolve()}function st(b){const P=Pt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(b):b()}function He(b,P){let S;const[j,q,ie]=Za(b,P);S=cn(j.reverse(),"beforeRouteLeave",b,P);for(const p of j)p.leaveGuards.forEach(g=>{S.push(at(g,b,P))});const a=Fe.bind(null,b,P);return S.push(a),Te(S).then(()=>{S=[];for(const p of i.list())S.push(at(p,b,P));return S.push(a),Te(S)}).then(()=>{S=cn(q,"beforeRouteUpdate",b,P);for(const p of q)p.updateGuards.forEach(g=>{S.push(at(g,b,P))});return S.push(a),Te(S)}).then(()=>{S=[];for(const p of ie)if(p.beforeEnter)if(Me(p.beforeEnter))for(const g of p.beforeEnter)S.push(at(g,b,P));else S.push(at(p.beforeEnter,b,P));return S.push(a),Te(S)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),S=cn(ie,"beforeRouteEnter",b,P,st),S.push(a),Te(S))).then(()=>{S=[];for(const p of o.list())S.push(at(p,b,P));return S.push(a),Te(S)}).catch(p=>Ze(p,8)?p:Promise.reject(p))}function nt(b,P,S){l.list().forEach(j=>st(()=>j(b,P,S)))}function mt(b,P,S,j,q){const ie=M(b,P);if(ie)return ie;const a=P===ot,p=Ot?history.state:{};S&&(j||a?r.replace(b.fullPath,W({scroll:a&&p&&p.scroll},q)):r.push(b.fullPath,q)),c.value=b,Ne(b,P,S,a),rt()}let Be;function Vt(){Be||(Be=r.listen((b,P,S)=>{if(!hs.listening)return;const j=F(b),q=pe(j);if(q){re(W(q,{replace:!0}),j).catch(ts);return}d=j;const ie=c.value;Ot&&ba(Cr(ie.fullPath,S.delta),Ws()),He(j,ie).catch(a=>Ze(a,12)?a:Ze(a,2)?(re(a.to,j).then(p=>{Ze(p,20)&&!S.delta&&S.type===ps.pop&&r.go(-1,!1)}).catch(ts),Promise.reject()):(S.delta&&r.go(-S.delta,!1),U(a,j,ie))).then(a=>{a=a||mt(j,ie,!1),a&&(S.delta&&!Ze(a,8)?r.go(-S.delta,!1):S.type===ps.pop&&Ze(a,20)&&r.go(-1,!1)),nt(j,ie,a)}).catch(ts)}))}let St=zt(),ae=zt(),X;function U(b,P,S){rt(b);const j=ae.list();return j.length?j.forEach(q=>q(b,P,S)):console.error(b),Promise.reject(b)}function Ge(){return X&&c.value!==ot?Promise.resolve():new Promise((b,P)=>{St.add([b,P])})}function rt(b){return X||(X=!b,Vt(),St.list().forEach(([P,S])=>b?S(b):P()),St.reset()),b}function Ne(b,P,S,j){const{scrollBehavior:q}=e;if(!Ot||!q)return Promise.resolve();const ie=!S&&wa(Cr(b.fullPath,0))||(j||!S)&&history.state&&history.state.scroll||null;return yi().then(()=>q(b,P,ie)).then(a=>a&&ma(a)).catch(a=>U(a,b,P))}const xe=b=>r.go(b);let Rt;const Pt=new Set,hs={currentRoute:c,listening:!0,addRoute:v,removeRoute:O,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:T,resolve:F,options:e,push:$,replace:Y,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ae.add,isReady:Ge,install(b){const P=this;b.component("RouterLink",qa),b.component("RouterView",Ga),b.config.globalProperties.$router=P,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Ot&&!Rt&&c.value===ot&&(Rt=!0,$(r.location).catch(q=>{}));const S={};for(const q in ot)Object.defineProperty(S,q,{get:()=>c.value[q],enumerable:!0});b.provide(zs,P),b.provide(uo,vi(S)),b.provide(An,c);const j=b.unmount;Pt.add(b),b.unmount=function(){Pt.delete(b),Pt.size<1&&(d=ot,Be&&Be(),Be=null,c.value=ot,Rt=!1,X=!1),j()}}};function Te(b){return b.reduce((P,S)=>P.then(()=>st(S)),Promise.resolve())}return hs}function Za(e,t){const s=[],n=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(d=>Bt(d,l))?n.push(l):s.push(l));const c=e.matched[o];c&&(t.matched.find(d=>Bt(d,c))||r.push(c))}return[s,n,r]}function vt(){return Ke(zs)}const Ja="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+l1vpCgAAAAFzUkdCAK7OHOkAAAAEc0JJVAgICAh8CGSIAAAGt0lEQVR4nO2cX4hU1xnAf9+5y+5sY6waDIoPYiQGUmGzhiIkupvNlJJao6TS9sWYB0UCNtqEFKNx16srDqRLTVH7ENZCq6UQsaGLBAoNmm6VCqFbwRKyohsfSmI2+weTMLPL3vP1YWb/z935d+/MHTe/t733nO8cfpx798455ztCOXHdWI0ZabSYRlFdi+hqxawQ7FKQhUAsUzIFek8x/YL9Hyq3VOSGwfaM2boeXDdVri5L6C20H1plVF8QdBPwFFBfYsQkcFWR963Ie7Qe6yu9k/6EI+j11x9wFtb+FNgFPB1KG5NcATq9e6Pn6ej4JujgwQpyX11inPpXRNkDLA00dm6+VOW0TelJEomBoIIGI8h1Y8YZ3SfKr4CHAolZPIOqdNgHk2/z2olkqcFKFlRz5GDcCu8IPFJqrCBR6DNido+1Hvt7KXGKF+S6CxwzkgD5RSkdKAO/8+rG3mD/W18VU7k4Qe2HHjVqLwqsKap+mVHotVafx030FlrXFFrBaT+wyVF7rVrkAAiscYz8yzmy/8eF1nUKKWyOvvmywFngO4U2FAHqMebn0tL0hV7q/ijfSnkLMkcO7hPhFEWMughhBDbLMxuH9XL3tXwq5CXIHH3z5Yyc+wIRnpOWprv5jKScL2mn/cAmVLoo8HGsAjxEt3itiffnKjS3oPZDjzpqrwGLg+xZhBjyxKyn9dhNvwL+7xPXXWDUXuT+lQOw2Ki9iOsu8CvgK8gxI4lq+ldeLOlPgJHEHPdnU3PkYFyFkj7Rqw1RfjB2+PgHs67PKum6MWNG/xu131Zho3Db2trvzZyMm/WIGWd033yTAyDwiHFG92W5PgX31SWOqe+l8lMWlWLAs8k1uCcGxy9MG0HGqX+F+SsH4KGMgwkmR1B6mrSP8s8ERo1+797oqvHp24kRlJlDnu9yAJZmXADTH7FdFehMVJlwkRbUfmgV4a8+BMqZLdvY0bAurPBPZ5ykBRnVF8JqKQzamuO81LCO34coadyJAcgs6lUFbc1x2pqenfg7LEnjTgTXjTlmdJDSVzxDZ6acqWx79xx//eTjIJtLerZ2iakxI41UuRyAvesDf4XW15iRRmMxjUFHDppccq5//hnb3j0XeLsW02hEdW3gkQMkHznxs50Mp4Lf8CGqaw2iqwOPHBCVlAOA6GqjmBXhRJ9kUSyWu9AMKi4HUMwKk968FB5tzXE+eHFXQZL2rn9qTjmfDg/xk/N/ClUOgGCXmszOrlAYHwUNy5ZzZsu2vOrsaFjHb37ovwD66fAQ8bNnuDM8FFQ350AWGia3vQXKzEdk62OP55S0I/N17Ed55QAQC2WV1O/98VLDOl9JEZQDpH9qBP4gL6rzH5TZJEVVDpByTMuGvSAPBBn1b7dusnLRYp5Ytjzr/SeWLQcRPrzTR/PKVfzlZ9t9Y1VQDqCDNemttvpw0KF3dl0A0iMmG21Nz7Lyu4vY+tjjvjEqKwcU0++Ylg1bQUL5WOz65OOcIylWU5P1XqXlAAj6H4PKrTAb2dl1gT9c/3dBdaIgBwCVW0ZFboTdzs6uC1z//LO8yg6nUtGQA6jIDWOwPeVoLH62M6ek4VSK+B87IyEHwGB7zJit6yG9vT9U0iPDX9K4nOt38xtpZSA5Zut6TGYt+mo5WvSTFEE5AFdx3ZQBUGTOXVZBMlNSROVMODEAVuS9cjY+LunDO32RlAOTTiaWnp2jB/9Jla2NhcgVr+34Bpi+stpZoc5EkQkXE4K8e6PngS8r0p1o0Z9xAUwdQR0d36hyuiJdihAqnJ6amDdtPsim9CQwOKvWfEEYsF7y5NRL0yfMEokBVTrK2qkIofDrqbvLIMseRftg8m2FUBNlo4jCbevV/nbm9dlTrq+dSBoxu8vSqwhhlN3Z0s2z5l/YS/+4bVo2Pgx8P/SeRQI95R1OZP0H5Ttp79WNvaFQcIZetaHQ69m6A373/Vc19r/1lbX6PBCNuYdwGLJiNuO6X/sVmHvZx030ot6LCF7gXas8HqLb58r0gTxywPTylZvS0vSFwObg+lZ5FNlj247/OVe5vJLk9FL3R/LMxmERniu9a5VHlV/aw8fz+tWQdxahXu6+Ji1NdwV+RPXmrXqK7MlXDhSRN59J0TxH9SXaDSG6PVcK5kzmz8ECYjbneiFno7hHpfXYTWtrnwStgkxoPWVt7ZPFyIH7+3CT20bZnS2LsBBKTvW2l7v7tDn+jhjva4FGKn8qw4AKR62t3WHd9qJGzVTupwOW+lU4bb3kyZlTFqXw7RFdOfj2kLcchC9oKlV4TOD/AUJU3ux8R18yAAAAAElFTkSuQmCC",Qa="/assets/new1-CJggwjZP.jpg",Ya="/assets/new2-VtX4kiva.jpg",ep="/assets/new3-BqVPnSFR.jpg",tp="/assets/new4-BbNmmfRx.jpg",fo="/assets/huodong1-BOsabTb4.jpg",ho="/assets/huodong2-z1CcdJyG.jpg",sp="/assets/about1-DFrioy68.png",np="/assets/about2-DN7vePX9.png",rp="/assets/about3-BvJtaPpp.png",ip="/assets/naicha1-BGpMadRJ.jpg",op="/assets/naicha2-BcvnmeZE.jpg",lp="/assets/naicha3-BKbj2zDB.jpg",cp="/assets/naicha4-DyF2FyRS.jpg",ys={cultureTitle:"中国茶文化",cultureText:"“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者，一般均以此为据，认为茶与人类的第一次亲密接触，是从距今五千多年前上古时期的神农时代开始的。",btnText:"查看更多",teaTypeTitle:"茶的种类",teaTypeText:"中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类(茶叶中发酵程度的轻重不是绝对的，当有小幅度的误差)：绿茶（不发酵）、白茶（轻微发酵）、黄茶（轻发酵）、青茶（乌龙茶、半发酵）、黑茶（后发酵）、红茶（全发酵）。外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变。今天我们首先来介绍白茶。"};function we(e,t){var s;{var s=document.createEvent("StorageEvent");return{setItem:function(i,o){sessionStorage.setItem(i,o),s.initStorageEvent("setItem",!1,!1,i,null,o),window.dispatchEvent(s)}}.setItem(e,t)}}const ap=[{img:Qa,id:"11-1",title:"奶茶的潜在健康风险",des:"在当今快节奏的生活中，奶茶作为一种时尚饮品，已经成为许多年轻人的“必需品”。然而，在享受其美味的同时，健康专家警告，奶茶潜藏的健康隐患不容小觑......"},{img:Ya,id:"11-2",title:"奶茶对健康的负面影响",des:"在城市的每个角落，奶茶店如雨后春笋般涌现，成为年轻人社交生活的重要组成部分。然而，随着奶茶的流行，潜藏的健康问题也逐渐浮出水面。......"},{img:ep,id:"11-3",title:"普洱茶的魅力与健康益处",des:"普洱茶，这种源自中国云南省的独特茶叶，以其独特的发酵过程和独特的风味而闻名。......"},{img:tp,id:"11-4",title:"红茶的魅力与健康益处",des:"红茶作为世界上最受欢迎的茶类之一，以其浓郁的香气和独特的口感，吸引了全球的茶爱好者。它不仅是一种饮品，更被认为具有多种健康益处。......"}],pp=[{img:cp,id:"11-1",title:"奶茶的潜在健康风险",des:"在当今快节奏的生活中，奶茶作为一种时尚饮品，已经成为许多年轻人的“必需品”。然而，在享受其美味的同时，健康专家警告，奶茶潜藏的健康隐患不容小觑......"},{img:op,id:"11-2",title:"奶茶对健康的负面影响",des:"在城市的每个角落，奶茶店如雨后春笋般涌现，成为年轻人社交生活的重要组成部分。然而，随着奶茶的流行，潜藏的健康问题也逐渐浮出水面。......"},{img:lp,id:"11-3",title:"普洱茶的魅力与健康益处",des:"普洱茶，这种源自中国云南省的独特茶叶，以其独特的发酵过程和独特的风味而闻名。......"},{img:ip,id:"11-4",title:"红茶的魅力与健康益处",des:"红茶作为世界上最受欢迎的茶类之一，以其浓郁的香气和独特的口感，吸引了全球的茶爱好者。它不仅是一种饮品，更被认为具有多种健康益处。......"}],up=[{img:fo,title:"茗香飘万里 何须恋糖精",type:1,des:"中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具；到现在，普通人也可以享受到品茶的宁静与优雅，并享受茶对健康所带来的益处。茶有茶道，陆羽所著的《茶经》洋洋七千余言，讲茶的一......"},{img:ho,title:"茶与养生保健",type:2,des:"昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如下。李时珍在《本草纲目》中记载：“茶体轻浮，采摘之时芽蘖初萌，正得春生之气。味虽苦......"}],fp=[{img:sp,title:"为什么创办网站"},{img:np,title:"社团介绍"},{img:rp,title:"如何联系"}],dp="/assets/img1-pq0K08RB.png",hp="/assets/img2-oY-fNdGp.png",gp="/assets/img3-B05TXOzN.png",vp="/assets/img4-DpuCbjKU.png",mp="/assets/img5-ChL3zTBe.jpg",bp="/assets/img7-BppTMYfK.jpg",wp="/assets/img8-CuZgycm7.jpg",xp="/assets/img9-TL6DsI7_.jpg",Br="/assets/green-tea-hm6SGLtG.png",Nr="/assets/red-tea-C-ePOgFe.png",kr="/assets/white-tea-B6dMVTws.png",Vr="/assets/black-tea-BbkDQhjT.png",Ur="/assets/qing-tea-B0T4Kfra.png",qr="/assets/yellow-tea-CpvI_F1u.png",Kr="/assets/puer-tea-C9ujGNd9.png",yp="/assets/tea-dishes-CftahaQg.png",_p="/assets/tea-culture-C5-McdvI.png",Ap="/assets/practical-activity-DQtDhtYZ.png",Os=[{img:Vr,title:"六大茶类之黑茶",id:"4",text:"黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长......",children:[{id:"4-1",icon:Vr,title:"黑茶",text:"黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长，因而叶色油黑或黑褐色，故称为黑茶。......"},{icon:yp,title:"六堡茶",id:"4-2",text:"六堡茶(LIU PAO TEA)是历史名茶,因原产于广西梧州市苍梧县六堡镇而得名。据《广西通志稿》记载“六堡茶在苍梧，茶叶出产之盛，以多贤乡之六堡及五堡为最，六堡尤为著名......"},{icon:mp,title:"六堡茶的功效",id:"4-3",text:"茶饮的养生功效，在中国古代早已有文献记载。三国医学家吴普作注、清人辑录的《神农本草经》中提到:“苦茶，一名荼草，一名选......"},{icon:bp,title:"细数那些曾经在东洋茶桌占领“C位”的六堡茶",id:"4-4",text:"六堡茶与日本的渊源不可谓不深，而中茶六堡的“旅日”经历，更是可以用奇妙来形容——由于经过一批日本黑茶专家的前期研究......"}]},{img:kr,title:"六大茶类之白茶",id:"3",text:"中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类......",children:[{id:"3-1",icon:kr,title:"白茶",text:"中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类(茶叶中发酵程度的轻重不是绝对的，当有小幅度的误差)......"}]},{img:Br,title:"六大茶类之绿茶",id:"1",text:`绿茶是历史上最早出现的茶类，绿茶的出现距今已经有3000多年了。
            陆羽的《茶经》中已经记载有绿茶的蒸汽杀青技术......`,children:[{icon:Br,title:"绿茶",id:"1-1",text:`绿茶是历史上最早出现的茶类，绿茶的出现距今已经有3000多年了。
            陆羽的《茶经》中已经记载有绿茶的蒸汽杀青技术。宋徽宗在《大观茶论》中对......`}]},{img:Nr,title:"六大茶类之红茶",text:"作为世界红茶鼻祖，“正山小种”迄今已有四百五十多年历史，由福建武夷山茶区的茶农发明，一直延续至今......",id:"2",children:[{icon:Nr,title:"红茶",id:"2-1",text:"作为世界红茶鼻祖，“正山小种”迄今已有四百五十多年历史，由福建武夷山茶区的茶农发明，一直延续至今。现在印度、斯里兰卡的红茶均是由“......"}]},{img:Ur,title:"六大茶类之青茶",id:"5",text:"青茶俗称乌龙茶，属半发酵茶，是我国六大基本茶类中独具特色的一个茶类。青茶的总体品质，介于红茶与绿茶之间，兼具两种茶的品质特征......",children:[{id:"5-1",icon:Ur,title:"青茶",text:"青茶俗称乌龙茶，属半发酵茶，是我国六大基本茶类中独具特色的一个茶类。青茶的总体品质，介于红茶与绿茶之间，兼具两种茶的品质特征，即色泽青褐，汤色黄亮，具有浓郁的花香，叶底绿叶红镶边......"}]},{img:qr,title:"六大茶类之黄茶",id:"6",text:"中国茶根据制作方法和发酵程度的不同，可分为六大类：不发酵的绿茶，轻微发酵的白茶，轻发酵的黄茶......",children:[{id:"6-1",icon:qr,title:"黄茶",text:"中国茶根据制作方法和发酵程度的不同，可分为六大类：不发酵的绿茶，轻微发酵的白茶，轻发酵的黄茶，半发酵的青茶（乌龙茶），后发酵的黑茶和全发酵的红茶，外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变，霍山，黄芽的茶株本身也绿中泛黄......"}]},{img:Kr,title:"普洱茶",id:"7",text:"普洱茶作为一种中国特色的茶叶，在茶叶市场上一直备受瞩目......",children:[{id:"7-1",icon:Kr,title:"普洱茶",text:"普洱茶作为一种中国特色的茶叶，在茶叶市场上一直备受瞩目......"}]},{img:_p,title:"茶文化",id:"9",text:"“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏......",children:[{icon:dp,title:"茶与神农（理工版）",id:"9-1",text:"“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏......"},{icon:hp,title:"茶与神农（文史哲版）",id:"9-2",text:"“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者......"}]},{img:Ap,title:"我们的实践活动",id:"10",text:"中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药......",children:[{icon:gp,id:"10-1",title:"茗香飘万里 何须恋糖精",text:"中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具......"},{icon:vp,id:"10-2",title:"茶与养生保健",text:"昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如......"},{icon:wp,id:"10-3",title:"六堡茶韵绕京彩，三伏时节享清欢",text:"京彩瓷博物馆的馆长史琴，是我的茶友，也是我忘年交。在六大茶类中，史馆长偏好黑茶，其中以广西六堡为最爱。......"},{icon:xp,id:"10-4",title:"小小的叶子 大大的健康",text:"茶，一片片绿叶，一年年发芽，却承载着几千年的文化底蕴，它不仅是饮品，更是滋养身心的良药......"}]}],Ep={class:"header"},Cp={class:"header-right"},Sp=["onClick"],Rp=Le({__name:"Header",setup(e){const t=vt(),s=()=>{t.push("/home"),i("首页")},n=ut([{name:"首页",id:1,active:!0},{name:"茶类科普",id:2,active:!1},{name:"活动",id:3,active:!1},{name:"新闻",id:4,active:!1},{name:"加入",id:5,active:!1},{name:"关于我们",id:6,active:!1}]),r=o=>{let l={茶类科普:"/teaProduct",首页:"/home",活动:"/teaCulture?id=10",新闻:"/news",加入:"/joinUs",关于我们:"/aboutUs"};we("wellData",o),i(o),t.push(l[o])},i=o=>{n.value.forEach(l=>{l.name==o?l.active=!0:l.active=!1})};return kt(()=>{window.addEventListener("setItem",()=>{let c=sessionStorage.getItem("wellData");c&&i(c)});const o=sessionStorage.getItem("wellData")||"";(o!==""||o!==void 0||o!=null)&&i(o)}),(o,l)=>(Z(),J("div",Ep,[x("span",{class:"header-span",onClick:s},"茶文化研究"),x("div",Cp,[(Z(!0),J(se,null,Ye(n.value,c=>(Z(),J("span",{class:"header_font",onClick:d=>r(c.name),style:Ft({color:c.active?"rgba(242, 153, 74, 1)":"white"})},le(c.name),13,Sp))),256))])]))}}),Ct=ze(Rp,[["__scopeId","data-v-cfdb5d8b"]]),Pp={class:"tc-container"},Tp={class:"tc-container-content"},$p={class:"tc-container-title"},Op={class:"tc-container-text"},jp={class:"tc-carousel-warpper"},Ip={class:"tc-news-content tc-box-flex h-center"},Dp=["onClick"],Mp={class:"tc-carousel-content"},Lp={class:"tc-carousel-title"},Fp={class:"tc-carousel-des"},Hp={class:"tc-news-content"},Bp=["src"],Np={class:"tc-text-box"},kp={class:"tc-activity-title"},Vp={class:"tc-activity-des"},Up={style:{"text-align":"center",display:"flex","justify-content":"center"}},qp={class:"tc-container-btn margintop30"},Kp={class:"tc-news-content tc-box-flex"},Wp=["src"],zp={class:"padding20"},Gp={class:"tc-news-title"},Xp={class:"tc-news-des"},Zp={class:"tc-add-warpper"},Jp={class:"tc-add-right"},Qp={class:"tc-add-p"},Yp={class:"tc-add-title"},eu={class:"tc-news-content tc-box-flex"},tu=Le({__name:"index",setup(e){const t=vt();we("wellData","首页");const s=ut(Os.slice(0,8)),n=()=>{we("wellData","关于我们"),t.push({path:"/aboutUs"})},r=()=>{we("wellData","加入"),t.push({path:"/joinUs"})},i=()=>{we("wellData","茶类科普"),t.push({path:"/teaProduct"})},o=ut([{title:"通过公众号"},{title:"通过联系电话"},{title:"欢迎想要了解茶文化的学生联系我们"},{title:"欢迎想做茶文化推广的学生联系我们"}]),l=u=>{we("wellData","活动"),t.push(`/teaCulture?id=${u}`)},c=u=>{u=="10"?we("wellData","活动"):we("wellData","茶类科普"),t.push(`/teaCulture?id=${u}`)},d=()=>{we("wellData","新闻"),t.push("/news")};return kt(()=>{}),(u,f)=>(Z(),J(se,null,[x("div",Pp,[oe(Ct),x("div",Tp,[x("h1",$p,le(ue(ys).cultureTitle),1),x("div",Op,le(ue(ys).cultureText),1),x("div",{class:"tc-container-btn",onClick:i},le(ue(ys).btnText),1)])]),x("div",jp,[f[2]||(f[2]=x("div",{class:"tc-center"},[x("span",{class:"tc-title"},"茶类科普"),x("div",{class:"tc-title-bg"})],-1)),x("div",Ip,[(Z(!0),J(se,null,Ye(s.value,(h,v)=>(Z(),J("div",{class:"tc-carousel-inner",ref_for:!0,ref:"bannerImg",key:v,style:Ft({backgroundImage:`url(${h.img})`}),onClick:O=>c(h.id)},[f[1]||(f[1]=x("div",{class:"tc-warp"},null,-1)),x("div",Mp,[x("div",Lp,le(h.title),1),x("div",Fp,le(h.text),1)])],12,Dp))),128))])]),x("div",null,[f[8]||(f[8]=x("div",{class:"tc-center"},[x("span",{class:"tc-title"},"活动"),x("div",{class:"tc-title-bg"})],-1)),x("div",Hp,[(Z(!0),J(se,null,Ye(ue(up),h=>(Z(),J("div",{class:Ls(["tc-box-flex",h.type==2?"flex-reverse":""]),onClick:f[0]||(f[0]=v=>l("10"))},[x("img",{src:h.img},null,8,Bp),x("div",Np,[x("div",kp,le(h.title),1),x("div",Vp,le(h.des),1),x("div",Up,[x("div",qp,le(ue(ys).btnText),1)])])],2))),256))]),f[9]||(f[9]=x("div",{class:"tc-center"},[x("span",{class:"tc-title"},"新闻"),x("div",{class:"tc-title-bg"})],-1)),x("div",Kp,[(Z(!0),J(se,null,Ye(ue(pp),h=>(Z(),J("div",{class:"tc-w-50",onClick:d},[x("img",{src:h.img,class:"tc-news-img"},null,8,Wp),x("div",zp,[x("div",Gp,le(h.title),1),x("div",Xp,le(h.des),1)])]))),256))]),f[10]||(f[10]=x("div",{class:"tc-center"},[x("span",{class:"tc-title"},"加入我们"),x("div",{class:"tc-title-bg"})],-1)),x("div",{class:"tc-add-box",onClick:r},[x("div",Zp,[x("div",Jp,[f[4]||(f[4]=x("p",{class:"font18"},"提问",-1)),f[5]||(f[5]=x("p",{class:"colorWhite"},[ft("如何"),x("br"),ft("加入我们")],-1)),(Z(!0),J(se,null,Ye(o.value,h=>(Z(),J("div",Qp,[f[3]||(f[3]=x("img",{src:Ja},null,-1)),x("span",Yp,le(h.title),1)]))),256)),f[6]||(f[6]=x("div",{class:"tc-container-btn marginTop40"},"查看详情",-1))])])]),f[11]||(f[11]=x("div",{class:"tc-center"},[x("span",{class:"tc-title"},"关于我们"),x("div",{class:"tc-title-bg"})],-1)),x("div",eu,[(Z(!0),J(se,null,Ye(ue(fp),h=>(Z(),J("div",{class:"tc-w-33",style:Ft({backgroundImage:"url("+h.img+")"}),onClick:n},[x("div",null,le(h.title),1),f[7]||(f[7]=x("div",{class:"tc-container-btn tc-mini-btn"},"查看详情",-1))],4))),256))])])],64))}}),Wr=ze(tu,[["__scopeId","data-v-95b8980e"]]),ds="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAADFBMVEVHcEwRERESEhIRERFLFh4KAAAAA3RSTlMAv4B0k/WJAAAACXBIWXMAAAsSAAALEgHS3X78AAAAKklEQVQoU2NgoBlgwmEyIzN2GUZmRqw6Bps4Ay4HMQxyGVwRgkuckpQBAGcJAFc+OwbvAAAAAElFTkSuQmCC",su={class:"tc-nav"},nu=["onClick"],ru=["src"],iu={class:"tc-nav-wrap"},ou={class:"tc-nav-title"},lu={class:"tc-nav-text"},cu=Le({__name:"index",setup(e){const t=vt(),s=()=>{we("wellData","茶类科普"),t.push("/teaProduct")},n=ut();kt(()=>{var i;n.value=(i=Os.find(o=>o.id===t.currentRoute.value.query.id))==null?void 0:i.children}),Yt(()=>t.currentRoute.value.query.id,i=>{var o;n.value=(o=Os.find(l=>l.id===i))==null?void 0:o.children});const r=(i,o)=>{t.push({path:"/teaDetail",query:{id:i,title:o,parentId:t.currentRoute.value.query.id}})};return(i,o)=>(Z(),J(se,null,[oe(Ct),x("div",su,[x("header",{onClick:s,class:"tc-header"},o[0]||(o[0]=[x("img",{src:ds,width:"15px"},null,-1),ft(" 返回 ")])),(Z(!0),J(se,null,Ye(n.value,l=>(Z(),J("div",{key:l.id,class:"tc-nav-div",onClick:c=>r(l.id,l.title)},[x("img",{src:l.icon,class:"tc-nav-img"},null,8,ru),x("div",iu,[x("span",ou,le(l.title),1),x("span",lu,le(l.text),1)])],8,nu))),128))])],64))}}),au=ze(cu,[["__scopeId","data-v-288eaa37"]]),pu="/assets/white-tea1-pSZ2VwnJ.jpg",uu="/assets/qing-tea4-eIdiN3O_.jpg",fu="/assets/white-tea4-CLa9LWZI.png",du="/assets/white-tea5-BSQtx_zi.png",hu="/assets/white-tea6-Bm3UUrpV.jpg",gu="/assets/green-tea1-B4LMJfgn.jpg",vu="/assets/green-tea2-DaRraeYa.jpg",mu="/assets/green-tea3-DhJZWegG.jpg",bu="/assets/green-tea4-CVVc-QoT.png",wu="/assets/green-tea5-BihP_vio.png",xu="/assets/green-tea6-Dnqa6zYY.jpg",yu="/assets/red-tea1-Dr881GD4.jpg",_u="/assets/red-tea2-ClnrQCcj.jpg",Au="/assets/red-tea3-DEne4bxe.jpg",Eu="/assets/red-tea4-D71T5nC5.jpg",Cu="/assets/red-tea5-Di9oD5-H.jpg",Su="/assets/red-tea6-Cie1CJho.jpg",Ru="/assets/red7-z7xIUldU.jpg",Pu="/assets/red9-C4hTHN4A.jpg",Tu="/assets/red10-DM3f3Wnm.jpg",$u="/assets/red11-W1WP_75H.jpg",Ou="/assets/red12-BYra0d-8.jpg",zr="/assets/nong1-CNUj7R9H.jpg",ju="/assets/nong2-WcwOJQKd.jpg",Iu="/assets/nong3-BKpSrG-A.jpg",Du="/assets/huodong3-Su82M0bR.jpg",Mu="/assets/health-DjN-dYee.jpg",Lu="/assets/health2-DKyEyAHo.png",Fu="/assets/health3-4xfqnmmX.png",Hu="/assets/health4-saHAJ__w.png",Bu="/assets/black-tea1-BSnkQwkK.jpg",Nu="/assets/black-tea2-1ZUCDy2I.jpg",ku="/assets/black-tea3-DSskojvU.jpg",Vu="/assets/black-tea4-0bN97R6y.jpg",Uu="/assets/black-tea5-2a6mXyMW.jpg",qu="/assets/black-tea6-rg5Bea1e.jpg",Ku="/assets/black-tea7-BawjIE0m.jpg",Wu="/assets/black-tea8-BfUlzOgY.jpg",zu="/assets/black-tea9-B4QIYXXS.jpg",Gu="/assets/qing-tea1-CIa1VmjL.jpg",Xu="/assets/qing-tea2-bqDQMtqS.jpg",Zu="/assets/qing-tea3-Cz5HpIDy.png",Ju="/assets/qing-tea4-eIdiN3O_.jpg",Qu="/assets/qing-tea5-BzFyCj13.jpg",Yu="/assets/qing-tea6-D5NM198R.jpg",ef="/assets/qing-tea7-CnBizYEB.jpg",tf="/assets/puer1-DN-H03B3.png",sf="/assets/puer2-C-4bP2g1.png",nf="/assets/puer3-DcYDlolq.png",rf="/assets/puer4-B6jry0ma.jpg",of="/assets/puer5-CY6dq-7t.jpg",lf="/assets/puer6-CGZORUgg.jpg",cf="/assets/puer7-Cr3xVPd-.jpg",af="/assets/puer8-V2M45FOE.jpg",pf="/assets/puer9-mux_EqcA.jpg",uf="/assets/huang1-D9BMo9MT.png",ff="/assets/huang2-BJOPDd1u.png",df="/assets/huang3-D-3_uiYy.jpg",hf="/assets/huang4-D8jiN3hy.jpg",gf="/assets/huang5-CMOFBCIv.jpg",vf="/assets/huang6-CI_icDC_.jpg",mf="/assets/red7-z7xIUldU.jpg",bf="/assets/liubao2-DCgtczAJ.jpg",wf="/assets/liubao3-f2i0xn5G.jpg",xf="/assets/liu1-TNrwWPnt.png",yf="/assets/liu2-icvfeITr.png",_f="/assets/liu3-Cbl-1LDT.png",Af="/assets/liu4-wYVJqXVv.png",Ef="/assets/cbao1-k9Gwtn4z.png",Cf="/assets/cbao2-Cssl31sv.png",Sf="/assets/cbao3-CYlTeKPF.png",Rf="/assets/cbao4-C--z7Ghz.png",Pf="/assets/cbao5-DiYvMcMc.png",Tf="/assets/cbao6-39phAeQ3.png",$f="/assets/cbao7-1-a0ZLJN.png",Of="/assets/cbao8-Bzmdude3.png",jf="/assets/cbao9-G1K1fOUw.png",If="/assets/dong4-1-aDKVY116.png",Df="/assets/dong4-2-BE6eC8dx.png",Mf="/assets/dong4-3-ha6SkfTr.png",Lf="/assets/dong4-4-NJEgZXFd.png",Ff="/assets/dong3-1-BvdFRnJf.png",Hf="/assets/dong3-2-0F0IQEld.png",Bf="/assets/dong3-3-7n57vrue.png",Nf="/assets/dong3-4-Dy4wbSKW.png",kf="/assets/dong3-5-CNFia2RL.png",Vf="/assets/naicha1-Dr1XDjQv.jpg",Uf="/assets/naicha2-BgeFHL7P.jpg",qf="/assets/naicha3-L_pdErcH.jpg",Kf="/assets/naicha4-YeBtaiFR.jpg",Wf="/assets/naicha5-5dDQT83m.jpg",zf="/assets/naicha6-B-sg194W.jpg",Gf="/assets/naicha7-ezBAAjo6.jpg",Xf="/assets/naicha8-BND6MtX4.jpg",Zf="/assets/naicha9-BAjoEZag.jpg",Jf="/assets/naicha10-DrrD4oeX.jpg",Qf="/assets/naicha11-fjof98rl.jpg",Yf="/assets/naicha12-DkZRBPVr.jpg",ed={白茶:{title:"白茶",text:`<p>中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类(茶叶中发酵程度的轻重不是绝对的，当有小幅度的误差)：绿茶（不发酵）、白茶（轻微发酵）、黄茶（轻发酵）、青茶（乌龙茶、半发酵）、黑茶（后发酵）、红茶（全发酵）。外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变。今天我们首先来介绍白茶。</p>
      <p>一、白茶的文献记载</p>
      <p><img src="${fu}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>白茶的名字最早出现在唐朝陆羽的《茶经》七之事中，其记载：“永嘉县东三百里有白茶山。”陈橼教授在《茶叶通史》中指出：“永嘉东三百里是海，是南三百里之误，南三百里是福建福鼎（唐为长溪县轄区），系白茶原产地。”可见唐代长溪县，也就是现在福建福鼎已培育出“白茶”品种，因成品茶多为芽头，满披白毫，如银似雪而得名。</p>
      <p>
      从历史上看，陆羽的《茶经》之后，宋徽宗在《大观茶论》中也明确记载，“白茶，自为一种，与常茶不同。”而且宋代茶人斗茶，把丰美雪白的芽茶视为天下精品。当时白茶产量极少，仅供皇帝御用，极为珍贵。北苑茶农把白茶视为“茶瑞”，把这吉祥茶作为斗茶的绝品。
      </p>
      <p>再到后来，明代田艺衡《煮泉小品》中，也记载了类似白茶的制法，“茶者以火作者为次，生晒者为上。”</p>
      <p>二、白茶的传说</p>
      <p> <img src="${pu}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"></p>
      <p>据《宁德茶叶志》传，尧帝時，太姥山下有一田舍家，因避战乱，逃至山中，以种蓝为业，乐善好施，人称蓝姑。那年太姥山時疫肆虐，乡亲们成群结队上山采药，为家人治病，但都徒劳无功。瘟疫夺去了一个又一个人的生命，山村里处处闻淒哭声，山坡上日日添新坟，蓝姑那颗善良的心每天都在滴血。</p>
      <p>一天夜裡，蓝姑在睡夢中夢见了南极仙翁，仙翁指點，"蓝姑，在你棲身的鸿雪洞顶有一株树，名叫大白茶，它的叶子晒干后，泡入沸水，是治疗瘟疫的良药，你赶快去采了给乡亲们吧。”蓝姑一觉醒来，趁月色攀上了鸿雪洞顶，顶上岩石磊磊，早草丛生，荆棘遍布，蓝姑太想找到那株茶树了，身上被划得伤痕累累都顾不上。当爬到崖顶，她发现在榛莽之中有一株与众不同、亭亭玉立的大树，她眼睛一亮，是大白茶树，这就是大白茶树。</p>
      <p>蓝姑遵照仙翁的嘱咐，她迫不及待地将茶树上的嫩叶采下来，装进竹篓。当采满一筐后，她往山下走，回头一看，惊奇地发现树上又长出来了新芽，原来这就是仙翁赐予的仙茶。</p>
      <p>为了普救穷苦农家的人们，蓝姑拼命地採摘、晒茶，然后把茶叶送到每个山村，教乡亲们如何泡茶为药，给患者们服用，乡亲们终于战胜了瘟疫病魔。</p>
      <p>蓝姑以茶救人的动人故事也在民间流传开来，蓝姑因此被万民敬仰为太姥娘娘，茶也被视为功同犀角、麻疹圣药的仙茶。</p>
      <p>所以，白茶在民间流传为“一年成茶，三年成药，七年成宝”之說。</p>
      <p>三、白茶的产地和分类</p>
      <p>
      白茶主产于福建福鼎、政和、松溪、建阳、云南景谷等地。台湾地区也有生产白茶。
      </p>
      <p > <img src="${uu}" align="right" width="40%" hspace="15" vspace="5" width="50%" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"></p>
      <p>白茶按茶树的品种不同，可分为大白、水仙白和小白三种。1971年以后白茶保留了建阳小白和政和大白，取消了水仙白，因为水仙白长出的芽叶沒有其他品种好喝。</p>
      <p>白茶按照采摘标准又可分为白毫银针、白牡丹、寿眉三种。</p>
      <p>白毫银针是肥壯的芽头；白牡丹是一芽兩叶；寿眉是抽掉芽头后的余叶，也就是抽掉白毫银针以后的余叶。</p>
      <p>四、白茶的加工工艺</p>
      <p>白茶的加工制作方法正式形成在清嘉庆年间，约1796年前后。白茶的加工工艺就是采摘、萎凋、干燥。</p>
      <p>据福建茶史记载，由于当时红茶市场不畅销，而导致大量的积压，政和县的茶农就改制白茶外銷，从此白茶成为一种正式的茶类，其加工方法一直延传至今。白茶的加工工艺最为简单，以生晒为上。因此对于白茶来說，制作工艺中起到决定性作用就是阳光。</p>
      <p>一款上好的白茶，非得由纯阳光干燥而成不可。如果这一年采茶季节因为出现连绵阴雨，不见太阳的情況下，需要用到机器来干燥，这茶就缺了它最重要的能量来源，大大的损失了它日后转化成药性的可能性。</p>
      <p > <img src="${hu}"  align="left" width="40%" hspace="15" vspace="5" width="50%" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"></p>
      <p>白茶的制作，只有鲜叶采摘是人为的，其他均为天成。白茶不需要经过杀青或揉捻，只要在屋子里边放蔫了，放在太阳底下反复晾晒干，这就是纯阳光干燥。</p>
      <p>五、白茶的干茶与茶汤</p>
      <p>白毫银针，外形上芽针肥壮，满披白毫，色泽银亮，内质香气清鲜，毫味鲜甜，滋味鲜爽微甜。汤色清澈、明亮，呈杏黄色。</p>
      
      <p>白牡丹，其外形自然舒展，芽叶连梗，兩叶抱芽，叶底芽叶各半，叶子肥嫩，白毫满披，色泽银白、灰绿，叶脈微红，内质汤色橙黄，清新明亮，香气清和。</p>
      <p>寿眉，是用去掉芽头的叶片制作而成，所以色泽灰绿稍黄，叶底黄绿，叶脈帶红，香气鲜纯，汤色黄亮，滋味清甜，但色、香、味均不及白牡丹。</p>
      
      <p>如果寿眉中还帶一些有芽头的，称为貢眉。</p>
      <p>寿眉的转化會比較快，所以当平时的口粮茶喝就非常好。</p>
      <p>其他的白茶茶品，云南目前会有一部分将乔木的茶青用来做白茶，但是由于树种的不同，叶片比较肥厚，茶叶性质会更寒一些。</p>
      <p><img src="${du}" width="25%" align="right" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
      云南的白茶后期转化會快一些，但是其药性不如福建的寿眉。</p>
      <p>还有广东产的白毛茶，斯里兰卡和大吉岭也生产少量的白茶。</p>
      <p>六、白茶的功效和它的药用价值
      
      </p>
      <p>经过纯阳光干燥的白茶，慢慢从寒性转换成凉性，在经年累月的存放过程中，逐渐变成了可以治疗慢性咽炎、荨麻疹、风热感冒，还是祛暑、祛邪的家居必备良药。
      </p>
    
      <p>如果小孩发烧，可能是食积、着凉，或者受惊吓导致，此時煮一壶阳光干燥的老白茶喝，可以缓解症状。如果发了荨麻疹，可以用茶水来擦拭。小孩子受了惊吓、高烧時可以喝点老白茶退烧。</p>
      <p>在福建福鼎当地，自古有家家存白茶，以备发热、惊搐、荨麻疹之类的病症時内服和外用。</p>
      <p>从性价比来讲，一般储存寿眉，五年后即可转换成凉性，药性足。白毫银针十年以上才能转换成凉性，但是药效更佳，有“功同犀角”之说（出自《闽小记》）。</p>
      <p>白茶一年四季都能喝，随着年份的增长，会出现枣香、陈香、药香、参香、荷香。</p>
      <p>白茶饼在2000年后开始出现的，水蒸气、高温压饼，茶的活性被破坏了。而白茶干燥后，酶具有一定的活性，可以继续发酵。</p>
      <p>最后要强调一下，就是只有在正宗产地，用正宗树种和正宗加工工艺制成的茶叶，才能有茶叶的药用价值。</p>
      <p>七、白茶的沖泡方法</p>
      <p>简单的說，白茶可泡、可闷、可煮。如果煮茶的話，老白茶更适合。</p>
      `},绿茶:{title:"绿茶",text:`<p>一、绿茶的历史</p>
      <p>绿茶是历史上最早出现的茶类，绿茶的出现距今已经有3000多年了。</p>
      <p>陆羽的《茶经》中已经记载有绿茶的蒸汽杀青技术。</p>
      <p > <img  align="left" src="${gu}" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"></p>
      <p>宋徽宗在《大观茶论》中对採摘、蒸压、制作、烘焙等制作过程又进行了更加细致的描述。</p>
      <p>到了明代，朱元璋罢团改散，炒青、烘青制作方法出现，绿茶的制作工艺在当时基本上和我们现在所见到的工艺基本是类似的。</p>
      <p>二、绿茶的产地</p>
      <p>绿茶几乎遍佈所有的产茶产茶区，也是产量最多，消费群体最广的茶类。我国有华南茶区、西南茶区、江南茶区和江北茶区四个一级茶区，都生产绿茶。</p>
      
      <p>三、绿茶的加工工艺</p>
      <p>绿茶属不发酵茶类，也就是说茶树的鲜叶不经过发酵工序，直接杀青，成品干茶成绿色，总体品质特徵是清汤绿叶。</p>
      <p>尽管不同的绿茶加工方法有很多差异，但是基本的加工工序是一致的，即採摘、杀青、揉捻、干燥。</p>
      <p>1.第一步，鲜叶採摘</p>
      <p><img src="${bu}"  align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>绿茶的採摘突出一个早和嫩。</p>
      <p>早，是指明前茶，春分以后才清明前上市。</p>
      <p>嫩，是指单芽，一芽一叶，或者一芽两叶，各类茶品有相应的採摘标準，只是茶的名字不代表茶叶的等级。</p>
      <p>2. 第二步，杀青</p>
      <p>茶的鲜叶中含有多种酶，尤其是氧化酶，它能引起多酚类物质的氧化，形成红梗红叶。而绿茶就是要避免茶叶的氧化，所以杀青形成绿茶的“清汤绿叶”、“香高味醇”品质特徵的关键工序。</p>
      <p>杀青的目的主要有三个：</p>
      <p>一是通过高温破坏和钝化鲜叶中氧化酶的活性，抑制鲜叶中的茶多酚等没处氧化。</p>
      <p>二是蒸发鲜叶的部分水分，使茶便於揉捻成型。</p>
      <p>三是散发青味，促进良好的香气的形成。</p>
      <p>按杀青方式可分为蒸青绿茶和炒青绿茶。</p>
      <p>蒸青绿茶利用是蒸汽的高温，蒸青绿茶具有干茶色绿、茶汤浅绿、叶底青绿的三绿品质特徵，其香气带清气、滋味醇、悦色。我国目前所产的蒸青绿茶主要是恩施玉露、玉叶长春等。</p>
      <p>炒青绿茶分为锅式杀青和滚筒杀青。</p>
      <p ><img src="${vu}" width="40%" align="left" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
      <p>锅式杀青是传统手工制茶工艺中所採用的杀青方式，一般是在平底锅或者斜锅中进行。锅式杀青原则是高温杀青，先高后低，抛闷结合，多抛少闷，嫩叶老杀、老叶嫩杀。这种杀青方法在明代得到发展与完善，并一直沿用至今，是现在大多数民用绿茶的制法。</p>
      <p>滚筒杀青，茶鲜叶在一个直径50～80釐米的滚筒杀青机里头进行杀青，此方法生产效率高，目前在绿茶生产加工中被广泛的使用。</p>
      <p>3. 第三步，揉捻</p>
      <p>揉捻的目的是破坏叶细胞，使茶汁外溢，增加茶汤的口感，塑造不同的外形，便於储存。</p>
      <p>揉捻的原则是：老叶长时间的揉、重揉、热揉。嫩叶短时间揉、轻揉、冷揉。</p>
      <p>4. 第四步，干燥</p>
      <p>干燥的目的是除去多餘水分，稳定茶叶香气，固定茶叶外形，便於运输和储存。</p>
      <p>干燥的方法是炒青、烘青、晒青。</p>
      <p>炒青干燥的绿茶是利用炒干的方法制作，我国几乎各产茶省均有生产。鲜叶原料不同及制法存在的差异，品质也略有不同，但高级茶都有共同的品质要求，那就是干茶外形条索紧直，匀整，有分苗，不断碎，色泽翠绿，丰润，茶叶内质要求香高持久，香气纯正，汤色清澈明亮，滋味浓醇爽口，叶底嫩绿。</p>
      <p ><img src="${xu}" width="40%" align="right" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
      <p>炒青干燥的绿茶，代表品种有西湖龙井、碧螺春、蒙顶甘露、信阳毛尖、南京雨花茶、竹叶青等。</p>
      <p>烘青干燥的绿茶，工艺上是半烘炒绿茶，因为开始是在锅里杀青，最后一道工序是用焙火。烘青绿茶原料採摘细緻，干茶外形细秀，多锋苗，显毫，色泽翠绿鲜活，内质香气清香持久，滋味鲜醇，叶底匀整，嫩绿明亮。</p>
      <p>烘青干燥的绿茶代表品种有黄山毛峰、六安瓜片、太平猴魁、安吉白茶。</p>
      <p>晒青绿茶是在日光下晒乾的绿茶，主产于云南、四川、陕西等省区。其干茶外形条索紧结，色泽乌绿，白毫明显，香气清高，藏有日晒气，汤色明亮，叶底肥厚。</p>
      <p>晒青绿茶以云南大叶种品质是最好的，称为滇绿。</p>
      <p>四、绿茶的功效和药用价值</p>
      <p><img src="${wu}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>绿茶性质寒凉，伤胃、泻火，如果喝新的绿茶，火在上，寒在下，喝了会胃不舒服，且容易上火。虚寒体质的人不建议喝绿茶，如果想喝的话，可以适当的放一点盛放一年以上的老绿茶。</p>
      <p>绿茶要考虑地域和人体差异。</p>
      <p>绿茶适合干燥地区的人，北方冬天开暖气或者吃火锅，适合喝点陈年的绿茶。</p>
      <p>西北地方一年四季都可以喝点绿茶。</p>
      <p>春天在江南地区喝新绿茶，是因为江南地下的气蒸腾上来，人容易觉得燥，喝新绿茶可以接引一下地气。</p>
      <p>四川一带吃火锅，虽然祛湿，但胃里会生火，需要靠竹叶青把胃里的麻辣火拔掉，所以吃火锅一定要泡杯绿茶来漱口。</p>
      <p>经常上火、下寒、长口疮的人，可用绿茶来漱口后吐掉，它能化掉嘴里的水泡和口疮的。</p>
      <p>五、绿茶的储存</p>
      <p>首先，还是要避光、干燥。</p>
      <p ><img src="${mu}" width="40%" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
      <p>其次，因为加工工艺的原因，採摘后就杀青，为了保持其鲜灵度，最好的保存器皿是瓷罐，瓷罐因为有釉水的密封，整个空间会更利於保持茶的香气和鲜爽度。</p>
      <p>六、绿茶的冲泡手法</p>
      <p>主要分三种——上投法、中投法和下投法。</p>
      <p>所谓的上投法，就是往玻璃壶里边倒满水，慢慢的往里拨茶。茶芽慢慢在水中舒展开来，把壶收到胸前闻香。绿茶有淡淡的青草气，高档的绿茶有淡淡的花香。都匀毛尖、碧螺春、蒙顶甘露、南京雨花茶等小芽头的茶，就适合用上投法冲泡。</p>
      <p>所谓的中投法，往盖碗里边倒1/2的水，用茶针轻轻地把茶投入茶碗中，这时候再续1/2的水，也是沿著边缘慢慢的注水，用盖子把茶收拢，拇指、中指握起盖碗，到公道杯稍微停一下，慢慢的出茶汤，拿起我们的杯托，闻香。扁平状的龙井，还有扁条状的竹叶青适合中投法。</p>
      <p>所谓下投法，用茶针将茶拨入盖碗中，将茶轻轻捋平。採用85度到100度的水温冲泡绿茶。条索状的安吉白茶、黄山毛峰，就适合下投法。安吉白茶因为氨基酸含量高，所以闻茶香有淡淡的，像我们说的熬鸡汤的味道，鲜灵度特别高，茶汤清澈透亮，鲜爽度极高，特别的爽滑。</p>
        `},红茶:{title:"红茶",text:`
      <h3>一、红茶的历史</h3>
      <p>作为世界红茶鼻祖，“正山小种”迄今已有四百五十多年历史，由福建武夷山茶区的茶农发明，一直延续至今。现在印度、斯里兰卡的红茶均是由“正山小种”演变而来。</p >
      <p>明末时期，时局动荡不安，而桐木关是外地入闽的咽喉要道之一。相传，在1568年，时值采茶季节，一支军队从江西进入福建过境桐木关，占驻茶场，当地茶农纷纷外出躲避士兵。</p >
      <p><img align="right" width="40%" hspace="15" vspace="5" src="${yu}" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>待到第二天军队离去，茶农才返回茶场，而前一天采好的茶青因无法得到及时处理，已经产生红变，为了挽回损失，茶农迅速将这些茶叶搓揉，并用当地易燃的马尾松木加温烘干。</p >
      <p>
      这批由马尾松木烘干的茶叶，无意间形成一股特有浓醇松香味。茶农将这批茶叶挑到集市贱价出售，没想到第二年竟有人花数倍的价钱来收购此茶。因此，世界上最早的红茶——正山小种由此诞生。</p >
      <p>武夷山终年云雾缭绕，山多谷陡，土地矿物质丰富，极其适应茶树生长。在宋朝已经是皇家的御茶园。但到了明朝，朱元璋改团为散，由于散茶制作工艺不成熟，武夷茶因此在明朝一落千丈，直到这次偶然得到了“正山小种”，不仅开创了红茶的历史，也从此让“正山小种”声名远扬，享誉海内外。</p >
      <p>印度总督将武夷山茶树种带至印度种植，在小种红茶之后又演变成了工夫红茶。随着功夫红茶制法的远播，红茶产区不断的扩大，国内广泛的生产出工夫红茶，如祁红、湘红、宁红、闽红等，每种红茶均有其独特的品质风格。</p >
      <h3>二、红茶的分类</h3>
      <p>中国红茶按生产的先后和加工的不同，分为小种红茶、工夫红茶和红碎茶。</p >
      <p>红茶为深度发酵茶，品质特点为红汤、红叶。绿茶、白茶、黄茶、乌龙茶继续发酵后，都可以用来制作红茶。</p >
      <p>通常来说，红茶的加工工艺为采摘、萎凋、揉捻、发酵、干燥。</p >
      <p><img src="${_u}"  align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>第一步，鲜叶采摘。</p >
      <p>
      鲜叶要求具有较高的滋润度，一般以开叶面的一芽两、三叶为准，老嫩匀整，以嫩为贵。由于红茶需要鲜叶中的多酚类化合物含量较高，叶绿素含量低，所以采摘时间一般以立夏左右为宜。</p >
      <p>一般做完绿茶就做红茶，但也有明显材质的红茶，比如芽头细嫩的金骏眉。</p >
      <p>国外的红茶因热带地区茶叶生长周期短，全年采摘，全年制作，茶韵不太明显，工业化生产，价格低廉。</p >
      <p>第二步，萎凋。</p >
      <p>萎凋是为了去除鲜叶中的部分水分，发展茶香，提升酶的浓度。</p >
      <p>第三步，揉捻。</p >
      <p>揉捻能起到破坏叶肉细胞，使茶多酚与多酚氧化酶接触的作用。</p >
      <p>红茶揉捻的细胞破坏率要达到80%以上，揉捻时间长，否则发酵会不够充分，影响红茶香气、滋味等，甚至会造成叶体的返青。</p >
      <p>第四步，发酵。
      </p >
      <p>发酵是红茶品质形成的关键过程，发酵是在酵素的作用下，以多酚类化合物氧化为主的一系列化学变化的过程，通过湿热的环境，使茶的自有酶和茶多酚发生氧化，形成茶黄素、茶红素，奠定了红汤、红叶的品质特征。</p >
      <p>第五步，干燥。</p >
      <p>红茶干燥的目的是，制止酶促氧化，蒸发水分，提高茶叶香气。</p >
      <h3>三、红茶的分类</h3>
      <p>1.小种红茶</p >
      <p><img src="${Au}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>小种红茶是福建特有的一种条形红茶，分正山小种和外山小种，它们之间的区别在于产地、制作工艺和风味特点。</p >
      <p>正山小种产于福建武夷山市星村镇桐木关以及周边地区，严格限定在武夷山自然保护区内。这个地区的地理环境独特，气候适宜，土壤富含矿物质，赋予了正山小种独特的品质。</p >
      <p>正山小种按照上述“采摘—萎凋—揉捻—发酵—干燥”传统制作工艺。目前，部分正山小种采用松木烟熏这一特殊工序，形成“烟正山小种”（即烟小种），也有不进行烟熏处理的“无烟正山小种”。</p >
      <p>正山小种以其独特的“桂圆汤香”和“松烟香”著称。无烟正山小种汤色红艳、清澈，香气高长且带甜香，滋味醇厚甘爽。烟正山小种则因熏制而带有明显的松烟香和蜜糖香，汤色更为明艳，口感醇和，具有独特的烟熏风味。</p >
      <p>外山小种是指产自武夷山自然保护区之外的其他地区，如坦洋、北岭、展南、古田等地。虽然也模仿正山小种的制作工艺，但因其地理条件、生态环境与正山地区存在差异，品质上相对较次。</p >
      <p>外山小种与正山小种相比，香气和滋味可能不够纯正，缺乏正山小种特有的地域特征。其香气、汤色和口感略逊于正山小种，表现在香气较淡、汤色较浅、滋味较薄，或者烟熏风味不够纯正。</p >
      <p>外山小种的出现主要是因为市场对正山小种的需求量远远大于供给量，正山小种的产量相对有限，价格较高。为了满足市场需求，茶农就开始尝试在离保护区较近的区域开发外山小种茶园，这也是外山小种产生的原因之一。</p >
      <p>2.工夫红茶</p >
      <p><img src="${Su}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
      <p>功夫红茶是我国独特的传统的茶品，因初制揉捻工序特别注意条索紧结完整，制作时颇费工夫而得名。</p>
      <p>功夫红茶一般包括祁红、滇红、闽红、湖红、宁红、川红、宜红、湘红、粤红。其中，闽红又包括我们熟知的政和工夫、白琳工夫和坦洋工夫。</p>
      <p>下面介绍集中有代表性的功夫红茶。</p>
      <p>祁红功夫产于安徽祁门及周边，以“香高、味醇、形美、色艳”四绝闻名于世，被誉为世界四大高香红茶之首。祁红属于小叶种，外形条索细秀而稍弯曲，有锋苗，色泽乌润带宝光。香气馥郁持久，以独特的“祁门香”著称，融合了花香、果香、蜜香，被形容为“似花、似果、似蜜”的复合香型。汤色红亮明亮，滋味醇厚鲜爽，回甘明显。</p>
      <p>滇红功夫产于云南临沧、保山、凤庆、西双版纳、德宏等地，属于大叶种，外形肥硕紧实，金毫显露，色泽乌润，又称为“金丝滇红”。汤色红艳明亮，金圈显著。香气鲜浓高扬，带有浓郁的蜜糖香和花果香，有时还带有独特的焦糖香。滋味浓厚，刺激性强，叶底肥厚、红叶鲜明。</p>
      <p>坦洋功夫产于福建省福安市坦洋村及周边地区，属小叶种茶青，干茶条索细薄，带白毫，色泽乌黑有光，香气稍低，茶汤呈深金黄色，滋味清新、甜和，叶底光滑。</p>
      <p>3.红碎茶</p >
      <p><img src="${Eu}"  align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>红碎茶的茶青在初制时经过充分的揉切，细胞破坏率高，有利于多酚类酶促氧化，形成了香气高锐持久、滋味浓强鲜爽。加糖或牛奶后仍有较强茶味的品质特徵。</p>
      <p>因揉切方法不同，分为传统红碎茶、CTC红碎茶、转子红碎茶、LTP红碎茶和不萎凋红碎茶五种。</p>
      <p>各种红碎茶又因叶型不同，分为叶茶、碎茶、片茶和末茶四类。我们喝的袋泡茶通常就属于红碎茶。</p>
      <p>
      叶茶，是红碎茶中最完整的一种形态，保留了茶叶的部分叶片形状，外形条索紧结挺直、匀整，色泽乌润，内质香气芬芳，汤色红亮，滋味醇厚，叶底红亮多嫩茎。</p>
      <p>碎茶，经进一步切割，呈颗粒状。颗粒大小均匀，重实匀齐，色泽乌润，或者泛灰棕，香气馥郁，汤色红艳，滋味浓强鲜爽，叶底红匀。</p>
      <p>片茶，经过更深度的切碎，外形扁平且薄，类似木耳形的屑片。片茶的茶叶较碎茶更小，但相比末茶稍大。冲泡后茶汤颜色更深，香气尚纯，滋味尚浓略涩，叶底红匀。</p>
      <p><img src="${Cu}" width="40%" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
      <p>末茶，是最细小的红碎茶形态。外形呈砂粒状，极为细碎，色泽乌黑或乌褐。末茶在冲泡时释放速度极快，常用于速溶茶、袋泡茶或与其它茶叶拼配以增加茶汤浓度。</p>
      <h3>四、红茶的功效及药用价值</h3>
      <p>红茶的品质较为温和，可以养胃，帮助肠胃消化，尤其适合北方区域的人饮用。在盛夏酷暑的时节，现在人大多都在空调房里，脾胃虚寒，适宜喝一些红茶来滋补。</p>
      <p>红茶中的正山小种，茶气充足，又兼具扶正驱邪功效。工艺到位的正山小种，可以说是一味药。其它的红茶大多相对温和，温补脾胃都是不错的选择。</p>
      <p>高香的祁红也是红茶独特的一味，女性经期可以来一杯，可以解郁舒心。</p>
      <p>古树滇红，也具有强劲的茶气，可以驱寒暖身。</p>
      
      <h3>五、红茶的储存</h3>
      <p>红茶因为发酵度比较高，虽然后期还有再发酵的空间，但是也要以密封为主。紫砂罐、瓷罐都是利于红茶长期储存和转化的。工艺到位的红茶，可以经年长存，尤其是古树滇红、正山小种，随着年份的增加，药力也会增强。</p>`},黑茶:{title:"黑茶（dark green tea）",text:`<p>黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长，因而叶色油黑或黑褐色，故称为黑茶。</p >
    <p>早期的黑茶主要供边区少数民族饮用，所以又称为边销茶。各种黑茶的紧压茶是藏族、蒙古族等日常生活的必需品，有“宁可三日无食，不可一日无茶”之说。</p >
    <h2><img src="${ku}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>一、黑茶的起源</h2>
    <p>最早的黑茶据说是四川的“邛崃黑茶”，公元 903 年（前蜀天复元年）火番饼就销往西蕃、党项，称为当地最为重要的商品。</p >
    <p>但是“黑茶”二字最早的记载，是在《甘肃通志》内载明陈讲写的《茶马志》上（明嘉靖三年，公元 1524 年）说：“茶商低伪，悉征黑茶，……官商对分，官茶易马，商茶给买。”此茶系蒸后采包之茶，具有发酵特征，实为黑茶无疑。易马政策，用粗老梗和叶片压制成砖，运至内蒙，用茶叶换马匹。</p >
    <p>目前，界内普遍认为黑茶的生产历史最早始于唐代，兴盛于宋、明两代，衰落于清朝。当时西南地区生产的绿茶被打包成砖形、饼状、方形和快状，以便于运输。茶叶在翻山越岭运送到西藏、新疆等地的途中，经过长时间的日晒雨淋，茶叶颜色渐渐变黑，香气不再具有收敛性，而这种品质风格的茶叶似乎更受西藏和新疆的消费者喜欢。久而久之，人们将绿茶初制或者精制过程加上一个渥堆的工序，便产生了后来的黑茶。</p >
    <h2>二、黑茶的种类</h2>
    <p>黑茶从产生至今，经过几百年的发展与传承，形成了以四川黑茶、湖南黑茶、湖北黑茶、云南黑茶和广西黑茶为代表的黑茶种类。这几类茶虽然同属于黑茶，却各自有着自己独特的加工工艺和品质特征，同时犹豫地域文化的差异，这几类茶也有着不同的起源与文化差异。</p >
    <h3>1.四川黑茶</h3>
    <p>尽管黑茶最早记录是湖南曲江安化一带的黑茶薄片，但是从黑茶真正的产生，或者说加工工艺之渥堆兴盛的起源地则在四川，其年代可追溯到唐宋时期的茶马交易。</p >
    <img src="${Ku}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>早在 11 世纪的唐宋时期，就有绿毛茶变黑的记载，远早于出现在 16 世纪的湖南安化黑茶，只是当时的人们并没有意识到这种变黑的绿茶是另外一种茶类。由此可见，四川黑茶历史之悠久，其作为黑茶起源地毋庸置疑。</p >
    <p>唐代，四川西南部的茶叶以正规渠道输入西藏，当时的边茶是没有经过专门“渥堆”变黑的蒸青团茶，实际上是蒸青绿茶类。然而由于道路崎岖，交通不便，边茶运输主要靠人背马驮，往返一次要徒步 5000 公里以上，历时一年多。茶叶在长时背运过程中，受到人畜体温的影响，茶叶叶温升高，内含物发生非酶性自动氧化。加上日晒雨淋，茶叶极易发生霉变。因此，从产区运出的蒸青绿茶到达销区时，已变成黑茶。久而久之，边区人民也逐渐习惯了这种茶叶的品质风格，并形成了“越陈越香”的饮茶经验。后来，经过全面总结，增加了专门促进茶叶变黑的工序——渥堆，使边茶的品质风格更受消费者的喜爱。</p >
    <p>四川省是我国黑茶生产的大省，也是最早生产黑茶的省份，因茶销路的不同，分为南路边茶和西路边茶两大类。</p >
    <p><strong>南路边茶:</strong> 包括康砖和金尖茶等，主销西藏、青海和四川甘孜藏族自治州等地。南路边茶原料较粗老，主要利用茶树的修剪枝，毛茶分为做庄茶和毛庄茶两种。</p >
    <p>做庄茶分为四级八等。茶叶质感粗老，含有部分茶梗，色泽棕褐。</p>
    <p>毛庄茶又称为金玉茶，叶子粗老、不成条，均为堆片，色泽枯黄，外形香气滋味不及做庄茶的品质优异</p>
    <p><strong>西路边茶:</strong> 主要有“人民团结品牌”茯砖茶和方包庄茶（亦称为马茶），主销四川省阿坝藏族自治州，以及甘孜藏族自治州，少量销往甘肃和青海。</p >
    <p>西路边茶原料较南路边茶更为粗老，初制工艺较为简单。
    茯砖原采用金玉茶作为主要原料，近些年改成了做庄茶为原料。包庄茶仍采用晒干后一、二年生的茶树枝条为主要原料，含梗量达60%左右。
    </p>
    <h3>2.湖南黑茶</h3>
    <p>最早的湖南黑茶起源于秦汉时期的安化，渠江黑茶薄片，渠江黑茶薄片成形状不一的薄片状，源于安化县渠江镇。黑茶薄片又称为黑茶“宗祖薄片”，民间相传为张良所制，俗称“张良薄片”。</p >
    <p><img src="${Nu}" width="40%" align="right" hspace="15" vspace="5" style="margin-left:20px;" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
    <p>汉代时黑茶薄片成为皇家贡茶，称之为“皇家薄片”或“渠江皇家薄片”。</p >
    
    <p>湖南是黑茶的生产大省，分黑毛茶和成品茶两大类。</p >
    <p>湖南黑茶的成品茶主要包括“三尖”、“三砖”和“一卷”。</p><p>其中三尖是指天尖、贡尖、生尖；</p><p>三砖是指花砖、茯砖、黑砖；</p>
    <p>一卷是指花卷茶，因一卷茶重量合称一千两，故又名为“千两茶”，按规格大小还有“百两茶”、“十两茶”。</p >
    <p><strong>黑毛茶</strong>分为四级：</p>
    <p>一级毛茶主制天尖和贡尖；</p>
    <p>二级毛茶主制贡尖和生尖；</p>
    <img  src="${Bu}" width="40%" align="left" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>三级毛茶主制花砖、花卷和特制茯砖；</p>
    <p>四级毛茶主制黑砖和普通茯砖。</p >
    <p>茯砖原料采用特制茯叶，全部用三级黑毛茶。普通茯砖约 45%左右的三级茶青，10%左右的四级茶青，其他茶占 50%。外形，茶砖棱角清晰，四角分明，砖面平整，色泽褐润，内质醇香浓，汤色橙黄，滋味醇和，叶底褐色。茯砖茶还有一个特点就是“金花”。金花其实是“冠突散囊菌”，是对人体有益的酵素类菌。金花能分泌淀粉酶和氧化酶，可催化茶叶中的蛋白质、淀粉转化为单糖，催化多酚类化合物氧化，转化成对人体有益的物质，同时也可以提升茶叶的口感。</p >
    <p>黑砖原料约 80%的三级黑毛茶，有 15%四级黑毛茶和 5%的其他茶。砖面端正，四角平整，模纹清晰、色泽黑褐，内质香气纯正，滋味浓厚微涩，汤色深黄微暗，叶底暗褐尚匀。</p >
    <p>花卷的原料大部分为三级黑茶，外形圆柱形，干茶结构紧密坚实，色泽黑润油亮，内质汤色红黄明淨，滋味醇厚，口感纯正，常有寥叶、竹黄、糯米香气等。</p >
    <h3>3.广西六堡茶
    <img src="${Vu}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    </h3>
    <p>广西黑茶主要是指广西的六堡茶，六堡茶历史悠久，其有文字记载的历史已有 1500 年之久。清朝初期，在广州、潮州一带，六堡茶渐渐兴盛起来。至清朝嘉庆年间，以其“红、浓、陈、醇”四绝被列为全国名茶之一，而其特殊的槟榔香味更是享誉海内外。</p >
    <p>六堡茶不但有著显著的自身特色，更有著深厚的历史文化积攒。《苍梧县志》记载：“茶产多贤乡六堡，味醇隔宿而不变，茶色香味俱佳。”</p >
    <p>六堡茶因产于广西梧州六堡镇而得名，选用苍梧县群体种、广西大中叶种及其分离、选育的品种。以茶树的鲜叶为原料，按特定的工艺进行加工，是具有独特品质特征的黑茶。六堡茶一般以一芽两、三叶，或者一芽三、四叶为原料，产品有散装或者篓装两种形式。</p >
    <p>散装茶外形条索粗壮，色泽黑润有光泽，内质香气醇陈，汤色红浓，滋味甘醇爽口，并带有松木烟味和槟榔味，叶底铜褐色。</p >
    <img src="${Uu}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>篓装茶外形为圆柱形。</p >
    <p>六堡茶的香型基本可分为槟榔香、兰香、樟香、木香、沉香等。</p >
    <p>从明代到今天，六堡的工艺有两次大的变化。最早是传统堆闷工艺（杀青-揉捻-堆闷-干燥-蒸压-陈化），后来改为双蒸双压法（杀青-揉捻-干燥-双蒸压-陈化），上世纪五十年代改良为冷水渥堆法（杀青-揉捻-干燥-冷水发酵-蒸压-陈化）。</p >
    <h3>4.湖北老青茶</h3>
    <p>湖北黑茶主要指湖北赵李桥茶厂生产的青砖茶，每件 27 片砖，称 27 砖，以老青茶为原料，经筛分、拼配、汽蒸、压制而成。</p >
    <p>老青茶分里茶和面茶，面茶又分为洒面和洒底。青砖茶主要供应内蒙古、青海、甘肃和新疆等省、自治区，少部分则出口俄罗斯和蒙古等国。</p >
    <p>青砖茶外形为砖形，重量为两公斤，砖面平整、紧结、光滑，棱角分明，色泽黑褐，压印纹理清晰，内质香气纯正，汤色纯红明亮，滋味醇和。叶底暗褐粗老。</p >
    <p ><img src="${qu}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
    <h3>5.云南普洱茶</h3>
    <p>云南黑茶只用云南大叶晒青毛茶经后发酵所制成的散茶或者紧压茶，其主要成品为普洱茶及其制成的各种紧压茶。普洱茶详情将另做介绍。</p >
    <h2>三、黑茶的加工工艺</h2>
    <p>黑茶产区较广，尽管各地的加工方法不尽相同，但基本工艺都可以概括为杀青、揉捻、渥堆和干燥四个工序。其中，渥堆是形成黑茶品质风格的关键工序。黑茶加工工艺既包括了绿茶的杀青过程，也包含了红茶的发酵变化。然而，其品质特征却跟这两种茶相差甚远，形成了茶香味醇不涩，汤色橙黄不绿，叶底黄褐不青的独特品质。黑毛茶是压制各种紧压黑茶的主要原料，其基本的制作工艺如下。</p >
    <h3>1.杀青</h3>
    <p>由于黑茶原料比较粗老，为了避免黑茶水分不足，杀不匀透，一般除雨水叶、露水叶和幼嫩芽叶外，都要按 10:1 的比例洒水后再杀青，洒水要均匀，以便于黑茶杀青能杀匀杀透。</p >
    <p>杀青又可以分为手工杀青和机械杀青。</p >
    <h3>2.初揉</h3>
    <p>黑茶原料粗老，揉捻要掌握轻压、短时、慢揉的原则，初揉中的揉捻机转速以 40 转/每分钟左右，揉捻时间 15 分钟左右为好，待黑茶嫩叶成条，粗老叶成皱叠时即可。</p >
    <h3>3.渥堆</h3>
    <p>初揉后的茶坯，不经解块立即堆积起来，堆高约一米左右，上面加盖湿布、蓑衣等物，以求保温保湿。黑茶渥堆要在背窗、洁净的地面，避免阳光直射，室温在 25℃以上，相对湿度保持在 85%左右。渥堆过程中要进行一次翻堆，以便发酵均匀。堆积 24 小时左右时，茶坯表面出现水珠，叶色由暗绿色变为黄褐，带有酒糟气或酸辣气味，手伸入茶堆感觉到发热，茶团粘性变小，一打即散，即为渥堆适度。</p >
    <h3>4.复揉</h3>
    <p>将渥堆适度的黑茶茶坯解块后，上机复揉，压力较初柔稍小，一般时间 6-8 分钟，下机解块，及时干燥。</p >
    <h3>5.干燥</h3>
    <img src="${zu}" width="40%" align="left"  hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>干燥是黑茶初制中最后一道工序，经过干燥形成黑茶特有的品质，即外形颜色油黑色和松烟香味。干燥方法采取松柴旺火烘焙，不忌烟味，分层累加湿坯和长时间的一次干燥，与其他茶类不同。</p >
    <p>摊凉,茶叶色泽渐渐变为乌黑油润，香气则呈现出独特的松烟香。至此，黑毛茶的制作才算完成。</p >
    <h3>6.精制</h3>
    <p>高温汽蒸，目的在于促使茶坯吸收一定的蒸汽湿热，变软，以便于压造成型。同时，在湿热作用下，一定程度上促进内含物质的转化，达到黑茶独特品质的要求。黑茶成品都需要经过压造成型，便于长途运输和贮藏保管。黑茶在压模内冷却，使其形状紧实固定之后退出，送烘房进行缓慢干燥。</p >
    <h2>四、黑茶的功效及药用价值</h2>
    <p>老的黑茶会有扶正祛邪的功效。</p >
    <p>六堡茶经过渥堆发酵，成分等过程，茶性由凉转温，除具备其他茶类所共有的保健作用外，更含有人体所需的多种氨基酸、维生素和微量元素，所含脂肪分解酵素亦高于其他茶类，故六堡茶具有更强的分解能力，降低脂肪化合物、胆固醇、甘油三酯等功效。</p >
    <p>陈年老六堡茶经过岁月的洗礼，温润醇厚，带有冰兰香、药香、参香。品饮后周身微微发汗，通体舒畅，心神荡漾，令人陶醉其中，因此具有助阳等功效，对胃寒、感冒等症状有缓解作用。</p >
    <h2>五、黑茶的储存</h2>
    <p>黑茶最佳的储存器皿是紫砂罐和陶土罐，在阴凉避光的前提下，避免过于干燥，有一定湿度条件下储存，有利于黑茶的后期转化。</p >
    <h2>六、黑茶的冲泡方法</h2>
    <p>通常选用盖碗和紫砂壶冲泡，也可以用保温杯闷泡，以及煮饮。</p >
    <p><img src="${Wu}" width="40%" align="right"  hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
    <p>参考文献：</p>
    <p>1.《邛崃黑茶：世界黑茶的起源与传承之路》，成都市市场监管局，雍尚红，韩仁骏，中国品牌与防伪，2019.3</p>
    <p>2.《黑茶的发展简史》，秦大东，茶叶通报，1983.12</p>
    <p>3.《中国黑茶的起源与加工工艺》，中国农业科学研究院茶叶研究所，蒋金星，何华锋，中国农学通报，2017.9</p>`},青茶:{title:"青茶",text:`<p>青茶俗称乌龙茶，属半发酵茶，是我国六大基本茶类中独具特色的一个茶类。</p>
      <h2>一、青茶的产地与分类</h2>
      <p>青茶主产于福建、广东和台湾。按产地不同，具体分为福建乌龙、广东乌龙、台湾乌龙，其中福建乌龙按做青、发酵程度不同和地域不同，又分为闽北乌龙和闽南乌龙两种。简单来说，闽南乌龙是指福建安溪县的安溪铁观音。闽北乌龙是现在武夷山南平地区生长在岩石上的茶，称为岩茶。</p>
      <p>台湾乌龙是武夷岩茶树种传到台湾后，由于地域改变，土壤性质改变，形成了以山命名的茶。</p>
      <p>广东乌龙是指凤凰镇石古坪大叶乌龙，为乌龙茶始祖，小乔木树种，单株采摘，单株制作，称为凤凰单丛。</p>
      <p><img src="${Zu}"  width="40%" align="right" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
      <p>青茶的总体品质，介于红茶与绿茶之间，兼具两种茶的品质特征，即色泽青褐，汤色黄亮，具有浓郁的花香，叶底绿叶红镶边。</p>
      <p>青茶的品质特征形成与茶树品种、采制标准与初制工艺都有关。其中加工工序分为采摘、日光萎凋（晒青）、做青（摇青、凉青）、杀青、揉捻、干燥。其中做青是乌龙茶品质形成关键的工序。然而不同产地所产的乌龙茶均有其独特的加工工艺和品质特征。</p>
      <h2>二、闽南乌龙（安溪铁观音）</h2>
    <p>安溪铁观音主产于福建安溪县，既是茶名，又是树种名。因身骨沉重如铁，形美似观音而得名，它外形条索紧结沉重，色泽砂绿油润，青蒂绿腹蜻蜓头，兰香馥郁，汤色金黄明亮，入口淳厚回甘明显，耐冲泡，有“七泡有余香”之誉，以“兰花香”、“观音韵”闻名于世。</p>
    <p>最好的铁观音产在安溪祥华，树种是五、六年以上的树种，叶片肥硕，萎凋、杀青、揉捻时间较长，发酵时间长，老工艺的铁观音基本上发酵度45%以上，带一点的梗，因为梗能增加茶汤的浓厚度和耐泡度、颗粒包得紧实。</p>
    <p>新工艺的铁观音树苗太年轻了，是嫁接存活的，因为叶片不够肥硕，所以有时会刷叶面肥。新工艺的铁观音会特意把梗剪掉，因为老的梗会带来茶汤的苦涩气，加工工艺时间较简短，发酵度只有18～32%左右，储存上只能放进冰箱，否则容易变馊。</p>
    <p>铁观音有春水秋香的特征，也就是说春天采摘的铁观音喝的是水，因为春天的茶汤柔软、绵滑、入口圆润。秋天采的铁观音喝的是香，无论干茶，还是冲泡之后，秋观音茶气高雅，香味逼人。</p>
    <p><img src="${Gu}" align="left" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>台湾乌龙是清朝初年由福建武夷山传入台湾，制法仿效武夷岩茶。</p>
    <p>我常把春茶和秋季的茶，两种找一个平衡的比例拼配在一起饮用。斟茶既有沁能的香气，又能泡出柔醇的口感。</p>
    <p>如果拿出同一年份的春天的铁观音和秋天的铁观音各一泡品尝，而且不能看叶底，猜猜这是什么茶。大部分人喝完了两款茶后，都认为是两种截然不同的茶。这是因为茶树经过一夏天烈日暴晒，秋天采制的铁观音相较于春茶，茶气会更为霸道，茶香也更加凸显出来，与春水形成了迥异的口感。</p>
    <h2>三、台湾乌龙</h2>
    <p>清嘉庆年间，台湾人柯朝，从福建引入了青心乌龙、荔枝乌龙等乌龙品种，种于淡水沿岸之新店、蓝紫林一带，并请福建安溪的制茶名手传授了制茶工艺，以青心乌龙所制的茶品质最优。</p>
    <p>1919年，从安溪引入铁观音茶种，制作了台湾铁观音，后又培育出了台湾12号，也就是金萱等试制包种茶的高山品种。以冻顶乌龙为例，加工工序为采摘、萎凋、做青、炒青、揉捻、烘焙、整形、复焙。</p>
    <p>台湾乌龙根据萎凋、做青的程度，分为包种茶和乌龙茶。</p>
    <p>文山包种、冻顶乌龙、白毫乌龙（也就是东方美人），和高山茶合称为台湾四大特色茶。台湾乌龙茶的高山韵是因海拔、气候形成的。</p>
    <img src="${Xu}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>文山包种，包种茶茶叶四两包成长方形四方包，以防茶香外溢，包外盖上茶名及行号印章，称之为“包种”。</p>
    <p>文山包种是闽北树种，闽南加工工艺。以台北文山地区所产的品质最优，香气最佳，所以称之为文山包种茶。其外形呈条索状，色泽翠绿，汤色蜜绿鲜艳明亮，香气清香优雅似兰香，滋味甘醇滑润带活性。</p>
    <p>好的包种茶特别注重香气，越浓越好，代表品种越高，入口滋味甘润清香，指间流香，久久不散，素有“露凝香”、“雾凝春”的美誉。</p>
    <p>冻顶乌龙产于台湾南投鹿谷乡冻顶山。冻顶是凤凰山的支脉，海拔700米。传说山上种茶因多雨，山高路滑，上山茶农必须绷紧脚，踮着脚尖才能到山顶，故称为冻顶山。</p>
    
    <p>冻顶乌龙属于青心乌龙，不属于高山茶，发酵程度50%。冻顶乌龙茶为半球形包种茶，有“北文山、南冻顶”之美誉。</p>
    <p>东方美人，又称膨风茶、白毫乌龙、香槟乌龙。主产于台湾新竹县北埔、峨眉及苗栗县，是所有乌龙茶中发酵度最重的，一般发酵度是60%，有些多达75～80%左右，其加工原料主要是以青心大茶树嫩芽，采一芽一、二叶为原料，在采摘时，茶芽经小绿叶虫咬噬过，因为叶边缘破坏，所以采摘下茶叶轻微的发酵，成茶具有独特的蜂蜜香和或者熟果香，以白毫显露，枝叶连理，红、白、黄、褐、青五色相间，犹如花朵为特色，内质汤色呈琥珀色，滋味的圆润醇厚。</p>
    <p><img src="${ef}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
    <p>东方美人茶的名字由来，是据闻英国茶商将茶献给了维多利亚女王，黄橙清透的色泽和醇厚甘甜的口感，令她赞不绝口，所以她把膨风茶赐名为“东方美人茶”。</p>
    <p>高山茶是海拔1000米以上茶园所制的乌龙茶，主产地在台湾南部嘉义县，南投县内海拔1000～1500米的高山茶区。</p>
    <p>闽北的树种由于地域和环境的变化，发展出台湾当地山头的品种，主要品种有梨山、杉林溪、大禹岭、阿里山、金萱等。</p>
    <p>此外，有茶商用台湾茶的树种，在福建、广东、云南等地种植，因为树种是台湾的，加工工艺也是台湾的加工工艺，所以我们将它称之为台式乌龙。</p>
    <h2>四、广东乌龙</h2>
    <p>广东乌龙的鼻祖在石古坪，属小乔木茶，现在产于汕头地区的潮安、饶平、梅州等地，因此又名为“潮汕乌龙茶”。</p>
    <p>品种主要有水仙、浪菜、单丛、色种等。</p>
    <p><img src="${Ju}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>
    <p>潮安乌龙茶因主要产于凤凰乡，一般以水仙品种结合地名而称为“凤凰水仙”。凤凰单丛是从“凤凰水仙”的茶树品种中选育出来的优异单株，品质优于凤凰水仙。</p>
    <p>qing4广东乌龙的代表品种——凤凰单丛，凤凰单丛是单株采摘，单株制作，外形条索紧结，干茶香气具有浓密、幽兰的特点，茶汤橙黄明亮，耐冲泡，香气浓郁、持久，口感甘爽、醇浓，叶底条索肥大、挺直，黄褐色，油润有光，有天然的花香，香味悠久。</p>
    
    <p>单丛命名有几个方式：</p>
    <ul>
      <li>以成茶香气命名，有十大香型——玉兰香、芝兰香、桂花香，杏仁香、蜜兰香、夜来香、姜母香、肉桂香、茉莉香、黄枝香。</li>
      <li>以历史事件命名，如宋种、东方红等。</li>
      <li>以树种命名，如姜母香、桂花香等。</li>
    </ul>
    <p>广东乌龙茶的加工工序：采摘、日光萎凋（日光萎凋就是晒青）、做青（做青包括摇青和晾青）、杀青、揉捻（揉捻包括包揉）、干燥。</p>
    <h2>五、闽北乌龙（岩茶）</h2>
    <p>武夷山茶是最早可以追溯到南朝时期，西元420～589年，最早的文字记载则出现在唐元和年间，西元806～820年。到了宋代建茶名气大增，当时制茶工艺名为团茶，然以紧压法，磨制龙凤饼，诸原料中武夷正山一叶难求，宋徽宗谓其“擅瓯闽之秀气，钟山川之灵禀”。</p>
    <img src="${Qu}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>元明时期，武夷山茶开始作为贡茶，十七世纪武夷山茶开始远销欧美，受到上流社会的宠爱。</p>
    <p>宋朝时记录在案的茶树种两百多种，现在能够找到有名字的七十多种，能出产成茶的有三、四十种。</p>
    <p>武夷山是福建省第一名山，有典型的丹霞地貌，也是三教名山。武夷山的自然保护区是地球同纬度地区保护最好的、物种最丰富的生态系统。</p>
    <p>丹霞地貌是红色地层中的由红色岩石经长期风化剥离和流水侵蚀而形成的孤立的山峰和陡峭的奇怪岩石总称。这里土质疏松，酸性适中，年平均温度18度左右，湿度、风度、雨量、日照等条件较好，适于岩茶生长。</p>
    <p>武夷山有三十六峰、一百零八个庙，九十九个岩，七十二个岩洞，九曲溪十八弯，由于自然生态平衡，山清水秀，使各种昆虫均有天敌，相互平衡，造就武夷山岩茶生长过程无需喷施农药。所以也就既不存在农残留问题，因而岩茶是一种绿色健康的天然饮品。</p>
    <p>闽北乌龙根据品种和产地不同，有闽北水仙、闽北乌龙，武夷水仙、武夷肉桂、武夷奇种、普通名枞，还有名岩名枞等。</p>
    <p>其中武夷岩茶香味具独特的岩韵，汤色橙红、浓酽、滋味醇厚回甘，叶底肥柔，绿叶红镶边，堪称闽北乌龙茶之极品。</p>
    <p>武夷岩茶的品质一般按照三个层次来划分：那就是正岩茶、半岩茶和周茶。</p>
    <ul>
      <li>正岩茶就是武夷山的核心产区，也就是三坑两涧——牛栏坑、慧苑坑、倒水坑、流香涧、悟源涧。</li>
      <li>半岩茶是正岩茶之外，九曲溪以内。</li>
      <li>周茶就是九曲溪周边的茶区。</li>
    </ul>
    <img src="${Yu}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>岩茶最富盛名的就是四大名枞——大红袍、铁罗汉、白鸡冠、水金龟。岩茶的当家品种是肉桂、水仙。</p>
    <p>闽北乌龙茶的加工工序与其他乌龙茶是一样的，基本上是采摘、萎凋，做青、杀青、揉捻，最后是干燥。</p>
    <p>但如果只针对闽北乌龙来说，可细分为采摘，萎凋、摊凉、摇青、发酵、杀青、揉捻、烘干、毛茶、初拣、分筛、复拣、风选、初焙、匀堆、复焙、精茶。</p>
    <p>闽北乌龙茶做青时发酵程度较重，揉捻时无包揉工序，因而条索壮结弯曲、干茶色泽较乌润，香气为熟果香，汤色橙黄明亮，叶底三分红、七分绿，呈绿叶红镶边。</p>
    <h2>六、青茶的储存</h2>
    <p>青茶这个大类，储存因茶而异，总体来说，因为格外繁复的发酵工艺，所以在储存上要更加讲究。</p>
    <p>一般来说，传统的铁观音很多时候也选择用瓷器储存，如果是轻火的，则需要在三年之内消耗掉。</p>
    <p>岩茶和单丛的系列足火工艺之后，基本上选择用铁皮桶完全密封，不走气。</p>`},"茶与神农（理工版）":{title:"茶与神农（理工版）",text:`
      <p>“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者，一般均以此为据，认为茶与人类的第一次亲密接触，是从距今五千多年前上古时期的神农时代开始的。</p>
      <p>关于神农尝百草的神话，流传久远，至今不衰。“医药之祖”的称号，正是从神农尝百草的传说中而来的。</p>
      <p><img src="${zr}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />《史记·补三皇本纪》说，“神农氏作蜡祭，以赭鞭鞭草木，尝百草，始有医药。”《淮南子·修务训》说，“神农尝百草之滋味，一日而遇七十毒。”晋干宝《搜神记》说，“神农以赭鞭鞭百草，尽知其平毒寒温之性，臭味所主，以播百谷。”《述异记》说，“太原神釜冈中，有神农尝药之鼎存焉。咸阳山中，有神农鞭药处。”</p>
      <p>这些记载，都说了神农尝百草遇毒，始知如何用草药解毒，但都没有神农尝百草中毒，以茶为解药，救了性命之说。那么，为什么“茶圣”陆羽要把神农氏作为最早开始接触茶的鼻祖呢？后人的解释，一是说陆羽正是从前人关于神农尝百草的那些记载中，推断出神农发现了茶；还有一种解释，就是当时的陆羽，一定听说过不少关于神农尝百草时与茶相遇的民间传说，故果断地把神农作为茶的发现者写入《茶经》。</p>
      <p>这些年来，茶学界一直转述这样一句话：“神农尝百草，日遇七十二毒，得荼而解之。”据说这句话摘自中国古代的《神农本草经》。但是真正考据起来，目前在任何版本的《神农本草经》中都还没有找到这句话的出处。</p>
      <p>其实，神农就是一个传说人物，折射的是茶与人类时间最初关系的缘起。茶的诸多济世医人的品质，既应了先民求医之需，在口感、药性上又可作为日常保健养生食物，故在百草中占得重要一席。而在中国文化发展史的叙述之中，人们往往把一切与农业、植物相关的事物起源归结于神农氏。</p>
      <p>所以，虽然目前没有在《神农本草经》中发现“以茶解毒”的史料，但茶与人之间最终建立的药患关系，还是可以被认可的。中华传统文化基于农耕生产，民族情感的源头也就在这里。而生长在大地上的植物——茶，因为它的农耕性，为我们的先人所喜爱。历史选择了神农这样一位传说中的伟大先人，作为发现茶的第一人，茶与人类的第一次亲密接触就此拉开序幕……</p>`},"茶与神农（文史哲版）":{title:"茶与神农（文史哲版）",text:`
    <h3>一、陆羽茶经</h3>
    <p>“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者，一般均以此为据，认为茶与人类的第一次亲密接触，是从距今五千多年前上古时期的神农时代开始的。</p>
    <h3>二、神农得茶说</h3>
    <p>自小，我们就在各种神话故事中听到关于茶叶与神农的渊源，传说中，神农氏在尝百草的过程中意外发现了茶叶和它解毒的功效，从此之后茶叶进入了人们的生活。这些年来，茶学界一直转述这样一句话：“神农尝百草，日遇七十二毒，得荼而解之。”据说这句话摘自中国古代的《神农本草经》。但是真正考据起来，目前在任何版本的《神农本草经》中都还没有找到这句话的出处。</p>
    <h3><img src="${zr}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>三、神农是谁</h3>
    <p>在详细的叙述茶与神农之前，我们应当先了解神农是谁。上古时期关于神农的记载诸多且有悠久的历史，从先秦时期开始其就被广泛记载。其中，从《白虎通义·号》：“古之人民皆禽兽肉，至于神农，人民众多，禽兽不足，于是神农因天之时，分地之力，制耒耜，教民农作，神而化之，使民宜之，故谓之神农也。”可以看出，神农之名由帮助人类习得如何农耕而来。神农为人类带来农耕，发明了耕作农具，把人类从人口压力大食物缺乏的采集渔猎生活中解救出来。对于另一个神农尝百草的神话也存在于大量的记载中：《史记·补三皇本纪》说，“神农氏作蜡祭，以赭鞭鞭草木，尝百草，始有医药。”《述异记》说，“太原神釜冈中，有神农尝药之鼎存焉。咸阳山中，有神农鞭药处。”由此可见，神农作为一个神圣的形象贯穿历史上各个时期并留存在华夏族民们的心中。</p>
    <p>神农存在于新石器时期（约从公元前八千年开始，迄公元前二千年至一千四百年为止）。新石器时期人们的生产生活水平低下，基本以采集树叶野草类的植物充饥。因此，茶叶则可能作为生吃的植物而存在。此外，新石器时期原始社会先民们已经掌握火的使用，也发明了陶器。于是人们可能将茶叶用陶器蒸煮以食用。而在人们发现茶汤味道更加美妙时，茶便成为一种饮品。</p>
    <h3>四、文献考证</h3>
    <p>现代很普遍的一个观点认为：在自古以来的传说中，茶是在神农尝百草的途中被神农发现并作为百毒的解药的。只可惜，相传记载了“神农得茶”的《神农本草经》早在战国的时候就失传了，而如今的三两残句是历代人口口相传，并记录在各个策志中的。“神农得茶”最先见于清朝孙壁文的《新义录》中，原文为“饮食类，茶，学斋估毕。六经无茶字，只有荼字耳……本草则曰：神农尝百草，一日而遇七十毒,得茶以解之。”</p>
    <p ><img src="${ju}" width="40%" align="left"  hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" /></p>
    <p>孙壁文的《新义录》中的描述是否可信？在这里，《神农得茶解毒考评》中，有一段详细又不失风趣的叙述：</p>
    <p>按照常理，孙壁文找到迥然于他《本草》的《本草》，尤其是发现的茶叶可解七十二毒的佐证，理当在当时的医学、农学界掀起撼然大波，也必然反映到同时代的文献中。 于是，笔者首先搜检了日前可见医书， 特别是《本草》类书籍。 但是，无论是数十册各代医著或是医学辞书；无论是唐·苏敬《新修本草》，或是宋·唐慎微《重修政和经史证类备用本草》；无论是吐鲁番、敦煌两地出土的梁·陶弘景《神农本草经集注》残卷，或是后人辑校的魏·昊普《本草》；无论是明·李时珍《本草纲目》，或是孙壁文同时代（1616-1911年，清）人所刊著的三十四部《本草》学专著（其中包括日本·森立之1854年著《神农本草经》），直至近年曾有人引用的宋·寇宗爽《本草衍义》四个版本，共五十余部，七十多个版本，均未见到该条目的完整记载，都有意无意地“ ”、“佚”——“得茶（或茶）而解之”五字！</p>
    
    <p>笔者在百觅不得其踪的情况下，转而搜检农家杂书。如吴其浚《植物名实图考》、贾思勰《齐民要术》、徐坷《清稗类钞》等，以及现存有文字记载以来的几乎所有茶史文籍和六十余部茶叶专著， 也遗撼地未能如愿以偿。</p>
    <p ><img src="${Iu}" width="30%" align="right"  hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" /></p>
    <p>如此说来，神农得茶解毒一说竟是出自明清文人的牵强附会了。既然如此，那茶的发现者必然是另有其人，那为什么陆羽——今人所称的茶圣，仍然在自己的茶经中写道：“茶之为饮，发乎神农氏”，将神农氏作为茶的鼻祖呢？后人的解释，一是说陆羽正是从前人关于神农尝百草的那些记载中，推断出神农发现了茶；还有一种解释，就是当时的陆羽，一定听说过不少关于神农尝百草时与茶相遇的民间传说，故果断地把神农作为茶的发现者写入《茶经》。其实，神农就是一个传说人物，折射的是茶与人类时间最初关系的缘起。茶的诸多济世医人的品质，既应了先民求医之需，在口感、药性上又可作为日常保健养生食物，故在百草中占得重要一席。而在中国文化发展史的叙述之中，人们往往把一切与农业、植物相关的事物起源归结于神农氏。</p>
    <h3>五、结语</h3>
    <p>诚然，“神农得茶”说被很大程度上鉴定为虚构，但中国数千年的饮茶文化，确实实实在在存在的。早到八千余年前的跨湖桥遗址中，就有着茶籽的考古实物；早在商代时，中国的茶文化便已经逐渐形成，到了唐宋元明清，更是成为了中国的形象的代言和士大夫清幽雅致的体现；到了现代，更多茶作为修养身体、颐养性情的功能被开发了出来……是否是神农发现了茶早已无证可考，然而先民们为我们留存的这一物质及文化的遗产仍然牢牢占据着我们生活的一大重要部分。</p>
    <p>参考文献：</p>
    <ol>
      <li>
        <p>《“神农得茶解毒”考评》，中国农科院茶叶研究所，周树斌，农业考古，1991.07</p>
      </li>
      <li>
        <p>《陆羽《茶经》确立了神农的茶的地位——再论神农茶事之源流》，竺济法，农业考古，2015.11</p>
      </li>
      <li>
        <p>《试论神农与茶》，江西省中国茶文化研究中心，陈文华，农业考古，2009.04</p>
      </li>
      <li>
        <p>《神农与神农得荼的传说》，四川万源市茶叶局，薛德炳，茶叶通信，2014.12</p>
      </li>
      <li>
        <p>《神农得茶之说不可信》，林乾良，中国茶叶，2013.06</p>
      </li>
    </ol>`},"茗香飘万里 何须恋糖精":{text:`
    <p style="text-align:right"><strong>——茶社开展第一次线下活动</strong></p>
    <p style="text-align:center"><strong>李卓远 黄拙</strong></p>
    <p style="text-align:center"><strong>2023-12-06</strong></p>
    <h3><img src="${fo}"  align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>一、活动背景</h3>
    <p>中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具；到现在，普通人也可以享受到品茶的宁静与优雅，并享受茶对健康所带来的益处。茶有茶道，陆羽所著的《茶经》洋洋七千余言，讲茶的一之源、二之具、三之造、四之器、五之煮、六之饮、七之事、八之出、九之略、十之图。中国茶文化的博大精深，从此便可看出。</p>
    <p>《道德经》中曾说：五色令人目盲，五音令人耳聋，五味令人口爽。在当今这个以极甜、极鲜等五味追求极致的时代，茶这一种清新、淡雅或有些微苦的味道或是对中国哲学的诠释。茶体现了中华文化的部分精髓，因此弘扬茶文化也是对中华文化的一种继承。不仅如此，茶中的维生素、氨基酸、矿物质、茶多酚等在科学的考证下，对人体很有益。适量摄入可以降低血脂、提升免疫力等等，不只是人们单纯所认为的另一种和咖啡一样的清醒剂。</p>
   <img src="${ho}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <h3>二、活动目的</h3>
    <p>为引导同学们建立健康的饮水习惯，同时传承中国茶文化，SDSZ茶文化研究社的同学们共同倡议开展“茗香飘万里，何须恋糖精”的活动。</p>
    <h3>三、活动过程</h3>
    <img src="${Du}" width="20%" align="right" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
    <p>今天，茶文化研究社的第一次活动在推荐信的家长会前成功开展。我们在四会堂门口搭起易拉宝和小方桌，铺上茶席，为前来参加讲座的同学和家长提供免费的茶水。</p>
    <p>今天的主题是白茶，主要是两款茶叶——寿眉和白毫银针。寿眉我们提前在家煮好，用暖壶装着带来学校，直接为大家斟在杯中供大家饮用，而白毫银针则采用现场冲泡的方式供大家饮用。茶社的同学在为大家奉茶的过程中配合讲解这两款茶的茶汤滋味特点。</p>
    
    <p>白茶按照采摘部位的不同分为白毫银针、白牡丹、寿眉三种。只采芽头的称为白毫银针，一芽两叶的称为白牡丹，抽掉芽头后的余叶称为寿眉。同样一棵茶树上不同部位采摘下来的银针、牡丹、寿眉，冲泡后汤色截然不同，味道也相差甚大。银针汤色清澈呈杏色，滋味鲜爽微甜，寿眉则汤色橙黄，有浓郁的枣香味，真是慨叹于大自然的鬼斧神工！</p>
    <p>这是茶社的第一次活动，希望通过这个活动，让同学们了解中国学，熟悉中国茶，爱上中国茶，养成喝中国茶、喝热茶的好习惯，既有益于健康，又传承了中国文化。</p>
    `},茶与养生保健:{text:`
      <p style="text-align:center"><strong>李卓远</strong></p>
      <p style="text-align:center"><strong>2023年12月7日</strong></p>
      <p><img src="${Lu}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如下。</p>
      <p>李时珍在《本草纲目》中记载：“茶体轻浮，采摘之时芽蘖初萌，正得春生之气。味虽苦而气则薄，乃阴中之阳，可升可降。”这一记载说明了茶的特殊之处是能入人之五脏，可发挥出较全的滋补作用。</p>
      <p>《中华茶道》第四卷中记载，随着现代研究的逐步深入，发现茶中含有多达 500 多种化学物质，主要包括：茶碱、咖啡碱、可可碱、儿茶素、黄酮素、茶鞣质、酚类、醇类、醛类、酸类、脂类、芳香油化合物、碳水化合物、多种维生素、蛋白质及多种矿物质元素。这些成分大多对人体有益，在这些有益元素的共同作用下，可起到对人体防病、治病的功效。</p>
      <p>具体表现为以下几个方面：</p>
      <p>一、补充多种营养元素</p>
      <p>1. 饮茶可以补充人体需要的多种维生素，如维生素 C 和 B 族维生素。在中国的西北和西藏少数民族居住区域，饮茶是当地人民获取维生素的主要来源。</p>
      <p>2. 饮茶可以补充人体需要的蛋白质和氨基酸。茶叶中的氨基酸种类丰富，多达 25 种，其中有人体必需的八种氨基酸中的六种。</p>
      <p>3. 饮茶可以补充人体需要的矿物质元素。茶叶中富含人体所需的大量元素（如磷、钙、钾、钠、镁、硫等）和微量元素（如铁、锰、锌、硒、铜、氟、碘等）。</p>
      <p>二、饮茶可强身健体</p>
      <p><img src="${Fu}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>1. 喝茶可保护心脏</p>
      <p>研究结果表明，茶叶中含有大量类黄酮和维生素等可以使血细胞不易凝结成块的天然物质，每天至少喝一杯茶可以使心脏病发作的危险降低 44%。</p>
      <p>2. 多饮茶可防慢性胃炎</p>
      <p>幽门螺旋杆菌是世界上感染率最高的细菌之一，是慢性活动性胃炎的直接病因。杭州市卫生监督所和浙江大学医学院附属第一医院课题组研究发现，经常饮茶明显会减少幽门螺旋杆菌的感染，饮茶的年数越长和饮茶量越多，则幽门螺旋杆菌阳性者越少。</p>
      <p>3. 白茶可预防脑血管疾病</p>
      <p>浙江大学医学院的一位著名教授经过多年临床观察得出结论，高凝状态是血栓形成的重要条件，而白茶具有抗凝和促进纤溶作用，能改变高凝状态，且没有一般抗凝药物的副作用。</p>
      <p>4. 饮茶可降胆固醇</p>
      <p><img src=${Hu} width="40%" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>法国国立健康和医学研究所曾经进行临床试验，让 20 多名血脂含量高的病人每天喝一杯云南沱茶，两个月后，病人平均血脂含量下降 22%。我国昆明医学研究所也开展过类似研究，结论相似。</p>
      <p>5. 饮茶可增强人体免疫力</p>
      <p>人体免疫防御系统是通过免疫球蛋白体形成的，可识别入侵的病原，再由白细胞和淋巴细胞产生抗体和巨噬细胞对病原体进行围歼。而经常饮茶能够提高人体中白细胞和淋巴细胞的数量和活力，能够促进脾脏细胞中白细胞间介素的形成，提高人体的免疫力。</p>
      <p>6. 茶可防龋齿和流感</p>
      <p>茶中含有的氟离子与牙齿的钙质产生一种较难溶于酸的“氟磷灰石”，提高牙齿的防酸抗龋能力。茶叶中的儿茶素则有抑制流感病毒活性的作用。</p>
      <p>7. 饮茶抗白血病、抗癌</p>
      <p>1945 年 8 月，广岛和长崎原子弹爆炸幸存者的人群中受到不同程度的核辐射，多数患了白血病或其他癌症后相继死亡。但是，事后调查发现，三种人得白血病或其他癌症的比例较低：茶农、茶商和长期饮茶者。这一现象被医学界称为“广岛现象”。可见，长期饮茶具有抗辐射作用。</p>
      <p>8. 饮茶防治动脉粥样硬化</p>
      <p>浙江医科大学附属第二医院在临床实践中发现，茶色素对 120 名高脂血症伴纤维蛋白原增高病人有明显的抗纤溶作用，而且没有副作用。而同样，用丹参治疗的病人则有效率仅为 55%。茶叶中的胆固醇能调节脂肪代谢，从而降低血液中的胆固醇，防治动脉粥样硬化。</p>
      <img src=${Mu} width="30%" align="left" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/>
      <p>9. 饮茶防治肝病</p>
      <p>茶能清热解毒，自古人们就知道。随着现代科技的推进，人们逐步认识到，茶中的儿茶素能防治血液、肝脏中的胆固醇、中性脂肪的积累，因此饮茶能够清肝。据资料介绍，茶中的某种儿茶素已经被国外研制成肝脏保护剂，对慢性肝炎具有较好的防治功效。</p>
      <p>10. 饮茶防治眼病</p>
      <p>饮茶具有“明目”、“清头目”的功效，在《茶谱》、《本草通元》、《神农本草经》、《本草备要》等古书中都有记载。</p>
      <p>参考文献：《中华茶道》第四卷，刘铭忠、郑红峰主编，吉林出版集团有限责任公司出版，ISBN：978-7-5463-5946-5。</p>
      `},黄茶:{title:"六大茶类之黄茶",text:`<h3>一、霍山黄芽</h3>
<p>中国茶根据制作方法和发酵程度的不同，可分为六大类：不发酵的绿茶，轻微发酵的白茶，轻发酵的黄茶，半发酵的青茶（乌龙茶），后发酵的黑茶和全发酵的红茶，外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变，霍山，黄芽的茶株本身也绿中泛黄。</p>
<p>黄茶属于轻发酵茶，可分为三种，黄芽茶、黄大茶和黄小茶。茶的品质特点在于“黄叶黄汤”。霍山黄芽是六大茶类中黄茶的一种。</p>
<p>当地也有黄大茶，其发酵程度较其他两种程度略高，茶叶个体较大，民间对于霍山的黄大茶有一种说法叫做“叶能包盐，杆能撑船”，霍山黄芽则相对精致小巧，发酵程度相对是最低的。</p>
<img src="${uf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>霍山黄芽优异的品质与茶树生长的地域有很大的关系。霍山地处大别山腹地，光、热、水资源丰富，霍山黄芽茶主要分布在 700 米以下的中山、低山地带，山高岭大，云雾缭绕，土壤肥沃，坡积、残积物较厚，非常适宜茶树生长，霍山是全国的重点产茶县，也是北方最古老的茶区。霍山黄芽传统制作工艺已经成为第一批入选省级非物质文化遗产名录的项目。其工艺制作流程与绿茶相似但又有着明显的不同，简单概括由杀青、毛火、闷黄、堆放、足火、提炼复火构成。其核心工艺在于闷黄和堆放，该工艺实际操作复杂，发酵程度完全凭靠工艺人经验把握，上品的霍山黄茶至少要经过 8 至 9 道工序制作完成。</p>
<h3>二、传统制作工艺</h3>
<p>霍山黄芽原料新鲜优良，传统制作工艺也相当有特色。简而言之，霍山黄芽传统制作工艺的制作流程可以分为:采摘、鲜叶处理、杀青、做形、摊凉、初烘、闷黄、复烘、堆放、拣剔、复火等工序。</p>
<p>1. 采摘:分品种选择、采摘、拣剔、薄摊。鲜叶品种为当地金鸡种、棋江种，采摘期清明前后，时间２０天左右。采摘一芽一叶至二叶初展，采摘时要求“三个一致”和“四不采”，即形状、大小、色泽一致，开口芽不采、虫伤芽不采、霜冻芽不采、紫色芽不采。</p>
<p>2. 鲜叶处理：鲜叶采回后按照“四不要”进行拣剔，除去老叶、茶梗、杂质和不合标准的鲜叶，然后将鲜叶薄摊在团簸内，晴天无露水叶 2 - 3 小时，阴雨天 4 - 5 小时。鲜叶上午采，下午制，不制过夜茶。</p>
<p>3. 杀青、做形：分生锅、熟锅(做形)。每锅投叶量 20 - 30 克左右，生锅鲜叶用特制的芒花把挑、拔、抖，充分散发水分，熟锅，主要是做形，芒花把在锅中呈三点头或升子底按同一方向运动，挑、拔结合，做形使叶身绉缩成芽稍挺直，形似雀舌，发出清香，为适度出锅。</p>
<img src="${ff}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>4. 摊凉：时间 15 - 20 分钟，厚度 1 厘米，待叶冷回软上烘。</p>
<p>5. 初烘：温度 110 - 120℃，投叶量 2 - 4 锅杀青叶，采取高温、勤翻、快烘，烘至茶稍有刺手感觉下烘。</p>
<p>6. 闷黄：闷黄是霍山黄芽品质形成关键工序。毛火下烘时趁热摊放于团簸内，厚度 5 - 6 厘米，上覆八成干的棉布，摊放 8 - 10 个小时，直至叶色微黄，花香显露，然后剔去黄片、杂质。</p>
<p>7. 复供：温度９０°Ｃ左右，投叶量 0.5 - 0.75 公斤，3 - 4 分钟翻烘一次，动作轻快，时间约 15 分钟，至九成干。</p>
<p>8. 摊放：是黄芽黄色黄汤品质形成的延伸。堆放时间 2 - 3 天，至干茶色泽黄绿润泽。</p>
<p>9. 拣剔：拣去飘叶、黄片、芒花毛及杂质等。</p>
<p>10. 复火：是茶叶香气高低的关键工序。温度掌握在 75℃ - 80℃，每烘投叶量 1.5 - 2 公斤，翻烘要求轻、快、勤，直至手捻茶叶成末，茶香浓郁白毫显露下烘趁热装筒密封。</p>
<img src="${hf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>该套传统制作工艺由历史传承演变而来，工艺和工具的制造使用都是我国古代劳动人民的智慧结晶，也是我国黄茶历史发展传承延续的见证。真正上品的霍山黄芽皆是由如此工艺精心制作，工艺之中的核心工艺“闷黄”和“堆放”的工时把握完全依靠个人的经验和技巧，需要长时间的实践和学习才能熟练掌握。</p>
<h3>三、霍山黄芽的历史</h3>
<p>关于霍山茶叶有明确相关记载的文献可以追溯到陆羽的《茶经》中的记载“淮南以光州上，义阳郡、舒州次，寿州下，蕲州、黄州又下。”其原注中有“盛唐县生霍山者与衡山同也。”也就是说原霍山即是盛唐县，隶属于寿州，划归于六安。而霍山黄芽之名则最早出于李肇的《唐国补史》卷下，其中有这么一段记载“风俗贵茶，茶之名品益众。剑南……白露。寿州有霍山之黄芽，蕲州有蕲门团黄，而浮梁之商货不在焉。”这里已经可以看到霍山黄芽的出现，但是和现在的黄茶还是有这一定的区别，只能算作是如今流传下来的黄茶的前身。其制作工艺普遍于绿茶相似。另外，当时的茶叶都是以茶团为主，杨华所著《膳夫经手录》中就有记载“寿州霍山小团，其绝好者，上于汉美，所阙者，馨花颖脱。”</p>
<p>到了宋朝，霍山的茶叶的规模得到了很大的发展，据《册府元龟》记载:“唐宪宗元和十一年(861 年)二月诏寿州以兵三千保其境内之茶园。”还有沈括《梦溪笔谈》也有提及“国朝六榷贷务，十三山场都买茶。霍山场卖茶 53.239 万斤，卖钱 3559 贯 489。”占到了当时全国出售茶叶总量的百分之一。除了规模的扩大，茶叶本身的制作也在随着时代的变迁而改变。在宋代人们将茶叶改捣为碾，茶叶开始倾向于制作散茶，这是一个很重要的变化，正是因为流通方式的改变，其制作工艺才会有相应的变化。</p>
<img src="${gf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>到了明朝，霍山黄芽己经成为珍贵的贡茶，规定年贡二十斤，这个规定额度是相当高的，体现了当时人们对于霍山黄芽的认可。同时，有关霍山黄芽的文献记载也丰富起来。如李时珍的《本草纲目(金陵本)》记载:“楚之茶，……寿州霍山之黄芽。”张谦德的《茶经》其中记载了茶产地 31 州，名茶 41 个。名茶中便有寿州之霍山黄芽。许次纡的《茶疏》中记载:“天下名山,必产灵草。江南地暖故独宜茶,大江以北则称六安。然六安乃其郡名,其实产霍山县大蜀山也。茶生最多,名品亦振,河南山陕人皆用之。南方谓其能消垢腻,去积滞亦甚宝爱。顾彼山中不善制法,就于食档火薪焙炒,未及出釜业已枯焦,诅堪用哉。兼以竹造巨苟乘热便贮,虽有绿枝紫笋辄就萎黄,仅供下食、奚堪品斗。”闻龙的《茶笺》中提到:“六安茶品亦精,入药最效。但不善妙,不能发香而味苦,茶之本质实佳。”这里值得一提的是文中所说的茶叶制作方法“滥觞”和“渥黄”和现在我们流传下来的传统黄芽制作工艺相类似，正是我们现在黄茶制作工艺中所用的“闷黄”和“堆放”。这也是黄茶和绿茶的制作过程中的根本区别。从众多的古籍文献中我们不难看出，霍山黄芽茶本身在发展变化的同时，规模不断的壮大，开始走向辉煌。</p>
<p>清代的霍山黄芽作为名茶流通也相当广泛。据《江南通志》记载:“物产六安州茶及英、霍二邑并产名茶，而霍邑为多”。《六安州志》记载:“茶通贸迁,礼遗煮沦,其用颇广,六安名亦最著,但自霍邑分治区,茶山数十处皆在霍……开市列肆，商贾骈迹者十不及一，乃人习而不察，尽自之为六安，殊不知霍享其实，六当其名尔。”另外，作为贡茶需求量大增。据徐珂所撰《清稗类钞》中记载:“六安州贡茶礼部主客司岁额，六安州霍山县进芽茶七百斤，计四百袋，袋重一斤十二两。由安徽布政司解部，其奉檄摧茶者，则六安州学正也。”并定额数为:“庐州府六安州霍山县三百斤(原注:实解三百六十袋,每袋一斤十二两,共芽茶六百三十斤)。”可见当时霍山黄芽当时很受欢迎。</p>
<img src="${df}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>清代霍山出现了适合民间需要和颇具特色的茶馆，民国时更盛，大家饮茶更加讲究好水泡好茶。霍山有一句口头禅:“南岳天池水，霍山黄大茶”。据说，霍山的富豪们专门到南岳山挑天池水沏茶，一般殷商巨贾也到淠河挑水沏茶，次一点店铺也要挑“开运寺”井水沏茶。可见，当时霍山黄大茶的品质之优越及茶文化氛围之浓厚。</p>
<p>随着大清王朝的逐渐衰败，到最后灭亡。贡茶的不复存在，再加上战乱等等因素，霍山黄芽的市场大为削减。民国以后，霍山黄芽已濒临绝迹，而霍山黄大茶得以长足发展，制茶工艺有了较大提高，鲜叶采摘要求更加细嫩、匀齐，炒制工艺到位，品质也有了大幅提升，霍山黄大茶逐渐成为霍山茶叶的主力军，年产量百万公斤以上,以优良的品质，赢得消费者喜爱。每到茶季，客商云集霍山黄大茶产区大化坪、漫水河、诸佛庵、单龙寺等地坐收茶叶，行成了霍山黄大茶的专业市场。这些地方也因茶叶为龙头而带动了其它行业的发展，地方经济异常繁荣。</p>
<img src="${vf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>二十二年的国共鏖战，期间还有十四年抗战都让百姓生无宁日。据不完全统计，1949 年霍山县零散的茶园仅仅只有 27900 亩，茶产量只有 18 万斤，每亩产茶量少茶糙。但是建国后政府开始重视茶叶的市场发展，在大力扶持和新技术的引进下，茶园开始兴盛起来，成为皖西重点茶县。</p>
<p>1981 年、1983 - 84 年茶园的面积已经增加到 66048.85 亩。全县七区一镇 44 乡皆产茶，茶农占到 89%。1950 - 1969 年，应政策变化，霍山茶大胆走向国际，产出的红茶达到出口的标准，命名为“霍红”。随后的 1970 年又应市场变化“红改绿”，霍山红茶和部分黄大茶产区改制青绿茶。这些都对霍山黄芽传统制作工艺产生了一定的冲击，所谓非物质文化遗产的传承如果失去了经济利益价值，在民间遗存传承下来还有有一定难度的。但是好在从 1971 年开始恢复霍山黄芽的茶叶生茶开始，政府就很重视这一块，并于 1972 年由县农业局派茶叶技工与老茶农一起恢复生产这项传统工艺，并将其发扬光大。在 2007 年成为了第一批入选省级非物质文化遗产的项日。</p>`},普洱茶:{title:"普洱茶",text:`<p>普洱茶作为一种中国特色的茶叶，在茶叶市场上一直备受瞩目。它不仅因为其独特的发酵工艺而受到青睐，还因其丰富的口感和健康益处而备受推崇。</p>
<p>普洱茶的产地主要为云南省昆明市、楚雄州、玉溪市、红河州、文山州、普洱市、西双版纳州、大理州、保山市、德宏州、临沧市等 11 个州部分现辖行政区域，该区域均为普洱茶的地理标志产品保护范围，种植遍布云南省全境，其主要分为西双版纳、临沧、普洱以及保山四大产区。</p>
<img src="${tf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h3>一、按照产区、山头划分</h3>
<p><span style="font-weight: bold;">保山：</span>主要分布在腾冲以及高黎贡山周边产区。</p>
<p><span style="font-weight: bold;">临沧：</span>临沧产茶区域主要集中在沧源、双江、凤庆、云县等地，是非常重要的普洱茶产茶区。茶树资源十分丰富，有“天下茶仓”之称，主要产地包括：勐库、冰岛、昔归、勐库大雪山、坝糯、凤庆香竹箐、永德大雪山。</p>
<p><span style="font-weight: bold;">普洱：</span>普洱茶区包括了澜沧县、景谷县与景东县，主要产地包括：景迈、景谷、困鹿山、镇沅千家寨、景东、邦崴、江城、景谷苦竹山、马邓茶山。</p>
<p><span style="font-weight: bold;">西双版纳：</span>西双版纳茶区可以分为勐海县与勐腊县两大块，主要产地包括古六大茶山——革登山、莽枝山、倚邦山、蛮砖山、曼撒山（易武山）、攸乐山；新六大茶山——南糯山、布朗山、巴达山、南峤（勐遮）茶山、勐宋茶山（勐海区域）。</p>
<img src="${sf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h3>二、按照茶树品种划分</h3>
<p><span style="font-weight: bold;">乔木茶：</span>乔木茶就是传统意义上的普洱茶，是用乔木生长的树叶作为茶箐，经过加工压制成普洱茶，也叫“大树茶”，“古树茶”。大叶种普洱茶具有浓厚的香气和独特的口感，茶汤呈红褐色。</p>
<p><span style="font-weight: bold;">灌木茶：</span>灌木茶也称台地茶，小叶种普洱茶是用小叶种茶树的叶子制成的，因此茶叶的叶片较小。内含物质相对来说较少，以人工培育和机器加工为主。小叶种普洱茶的茶汤呈红亮色，口感醇和。</p>
<h3>三、按照加工工艺划分</h3>
<p><span style="font-weight: bold;">生茶：</span>生茶也被称为青茶，是指经过采摘和初步处理后，未经过发酵或仅经过浅发酵的普洱茶。生茶茶叶的外观呈现出鲜嫩的绿色，茶汤清澈，口感清爽。</p>
<p><span style="font-weight: bold;">熟茶：</span>熟茶是指经过特殊微生物发酵处理的普洱茶。熟茶的茶叶颜色较深，茶汤呈红褐色，口感醇厚，带有独特的陈香。</p> <h3>四、按照年份划分</h3>
    <img src="${nf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p><span style="font-weight: bold;">新茶：</span>新茶是指当年鲜叶采摘制成的普洱茶。新茶具有鲜嫩的茶叶和清爽的口感，茶汤呈绿黄色。</p>
    <p><span style="font-weight: bold;">老茶：</span>老茶是指经过一定年限保存的普洱茶。老茶的茶叶经过时间的沉淀，口感更醇厚，茶汤呈红亮色，有着独特的陈香。</p>
    <h3>五、据仓储形式划分</h3>
    <p><span style="font-weight: bold;">干仓普洱：</span>新鲜采摘的普洱茶会被储藏在特制的干仓中进行发酵和陈化。干仓的特点是通风性差、湿度高、温度稳定，这样有利于茶叶的微生物发酵和化学反应。茶叶在干仓中进行长期陈化，时间一般为数年至数十年。</p>
    <p><span style="font-weight: bold;">湿仓普洱：</span>通常放置于较潮湿的地方，如地下室、地窖，以加快其发酵速度。由于茶叶内含物破坏较多，常有泥味或霉味，湿仓普洱陈化速度虽较干仓普洱快，但容易产生霉变，对人体健康不利，所以一般尽量买干仓存放的普洱茶。</p>
    <img src="${rf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <h3>六、根据茶叶的外形划分</h3>
    <p><span style="font-weight: bold;">散茶：</span>普洱茶仍旧保持茶叶原本的零散的叶形，没有被紧压成特殊的形状。</p>
    <p><span style="font-weight: bold;">饼茶：</span>扁平圆盘状，以每饼357g居多。</p>
    <p><span style="font-weight: bold;">沱茶：</span>形状跟饭碗一般大小，普洱茶的中级、上级品大都以沱茶及饼茶居多。</p>
    <p><span style="font-weight: bold;">砖茶：</span>大小约是砖块的一半左右，同样也是长方形。</p>`},六堡茶的功效:{title:"六堡茶的功效",text:`<p>茶饮的养生功效，在中国古代早已有文献记载。三国医学家吴普作注、清人辑录的《神农本草经》中提到:“苦茶，一名荼草，一名选。味苦寒。生川谷。治五脏邪气，厌谷胃痹。”到了明代，李时珍所著《本草纲目》中记载:“茶苦而寒，阴中之阴，沉也、降也，最能降火。”。经过多个朝代多名医学家、药学家的研究证明，茶确实有一定的保健功效。</p>
<img src="${wf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>而属黑茶的六堡茶，其养生功效更为消费者所接受。根据现代设备检测，茶叶中含有有机化合物 450 多种、香气成分 700 多种，其中水溶性物质主要包括多酚类物质(如儿茶素等)、含氮物质(如氨基酸、咖啡碱等)、碳水化合物(如葡萄糖、果糖等)，还有一些维生素等物质。其中，茶多酚、茶氨酸、咖啡碱这三类物质是茶叶区别于其他植物的主要内含物。</p>
<p>茶多酚是茶叶中多酚类物质的总称，又称为茶单宁，占茶叶干物质的 18%~36%。茶多酚又可分为儿茶素类、黄酮及黄酮苷类、花青素和花白素类、酚酸和缩酚酸类等四大类别、较为重要的是儿茶素类，约占茶多酚总含量的 70%。</p>
<img src="${mf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>六堡茶中的茶多酚有降低血清总胆固醇含量、降低肝脏 MDA、分解脂肪的作用。经实验证明，通过对小鼠注射一定剂量的六堡茶水，小鼠血清中的血清脂肪含量有了明显的下降、降低了三酸甘油酯和胆固醇在血液中的含量。这也直接说明了六堡茶具有预防动脉硬化、降脂减肥的作用。</p>
<p>六堡茶还具有促进细胞内糖脂新陈代谢的作用。湖南农业大学滕翠琴、刘仲华等专家学者通过实登证明、六堡茶能够提高胰岛素抵抗 3T3-L1 脂肪细胞对葡萄糖的摄取能力，同时促进细胞内糖脂代谢，有改善 3T3-L1 脂肪细胞胰岛素抵抗的作用。这说明，六堡茶对人体血糖有改善的作用，适合糖尿病者饮用。六堡茶对非酒精性脂肪肝具有辅助治疗的作用。云南农业大学的刘家奇教授、邵宛芳教授等人进行了相关对比实验。
实验通过大鼠灌胃受试物水浸提物 35 天后采血测定总胆固醇和甘油三酯的含量、丙谷转氨酶和谷草转氨酶的活性，分别对比普洱茶(熟茶)茶粉、黑茶茶粉、六堡茶的功效。<img src="${bf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" /> 实验果证明、这三类茶叶都具有促进脂肪消化的功能，能防止脂肪在血管内和肝脏中沉积，起到预防脂肪肝和动脉粥样硬化的作用，其中六堡茶的效果最好。</p>

<p>六堡茶中含有多种维生素，其中维生素 E 是很好的抗氧化剂。据研究表明，在生物体内，天然维生素 E 能够阻断细胞膜脂质过氧化物的链式反映，从而使生物体细胞、组织、器官免受自由基的攻击，具有抗衰老、抗癌、抗肿瘤和防治心血管疾病等功能。</p>
<p>湖南农业大学刘仲华教授通过多年的研究，总结出六堡茶的八大功效:</p>
<p>第一、具有降血脂的功效，可以显著地调节人体脂类平衡，修复高血脂导致的肝损伤。</p>
<p>第二、具有减肥塑体的功效，可以有效抑制脂肪细胞的分化，降低肥胖对身体的危害。</p>
<p>第三、具有降血糖的功效，对糖尿病患者而言，可以增强胰岛素的抵抗能力。</p>
<p>第四、具有降尿酸的功效，可以有效降低尿酸的浓度，减缓痛风的症状。</p>
<p>第五、具有醒酒护肝的功效，提高肝的抗氧化能力，抵御酒精对肝的损伤。</p>
<p>第六、具有调理肠胃的功效，能够维持胃肠道微生态平衡，活化益生菌群。</p>
<p>第七、六堡茶能够修复细胞的损伤，恢复细胞蛋白质的活性，从而达到美容养颜和抗衰老的功效。</p>
<p>第八、六堡茶能够抵御紫外线引起的皮肤老化，抑制皮肤色素沉淀，防止老年斑的产生，令皮肤焕发活力。</p>
<p>参考文献：中茶窖藏六堡茶图谱，广西科学技术出版社，ISBN978-7-5551-0915-0，2017 年 12 月第一版。</p>
`},六堡茶:{title:"六堡茶",text:`<p>六堡茶(LIU PAO TEA)是历史名茶,因原产于广西梧州市苍梧县六堡镇而得名。据《广西通志稿》记载“六堡茶在苍梧，茶叶出产之盛，以多贤乡之六堡及五堡为最，六堡尤为著名，畅销于穗、佛、港、澳等埠”。<img src="${xf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />六堡茶属我国六大茶类之一的黑茶，是一种后发酵茶，为广西梧州传统出口的土特产品。其品质优良，风味独特，外形条索长整紧结，色泽黑褐油润，间有黄花（又称发“金花”），汤色红浓明亮，滋味醇厚甘爽，香气陈纯，带有槟榔香（传统六堡茶还带有松烟味和槟榔香味特点），叶底铜褐色，耐于久藏越陈越好。六堡茶的品质特点是“红、浓、陈、醇”带槟榔香。</p>
    <p>制造六堡茶的原料，大部分采用当地大叶种、中小叶种茶树，采摘一芽二、三叶新梢，其制作分为初制：鲜叶稍经日晒——杀青——揉捻——渥堆——复揉——干燥成毛茶。再进行精制：分级——拼配——渥堆发酵——干燥——蒸压——晾置陈化——成品包装。</p>
    <img src="${yf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>六堡茶产制历史悠久，从相关的资料记载看，已有1500多年的历史。清朝嘉庆年间列为当时全国名茶之一。六堡茶属于温性茶，除了具有其他茶类所共有的保健作用外，更具有消暑祛湿，健胃养胃，帮助消化的效用，既可饱食之后饮之助消化，亦可空腹饮之清肠胃。六堡茶除含有人体必需的多种氨基酸，维生素和微量元素外，所含脂肪分解酵素高于其他茶类，故六堡茶具有更强的分解油腻、减低人体类脂肪化含物、胆固醇、三酸甘油脂的作用。长期饮用可健胃养生，减肥健身、防衰老。</p>
    <p>传统六堡茶采用竹篓包装、经高温蒸压后，茶叶内部保存了一定的温湿度，使得茶叶在贮存时内含物质得以继续转化，滋味变醇，汤色加深、陈香显露，因而越陈越香，有的还可见到金黄色的“金花”，这是有益品质的一种菌类，又称冠突散囊菌，它能分泌淀粉酶和氧化酶，可催化茶叶中的淀粉转化成单糖，催化多酚类化合物氧化，为六堡茶中的“上品”。</p>
    <img src="${Af}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>在港澳地区，经销茶庄多以“不知年”，“陈年”“远年”，标明“正宗梧州六堡茶”出售，以突出其“陈茶”的特征。在日本则作为保健药品，以“健美瘦身茶”，“油解茶”名称在各地药店出售。1991年日本黑茶协会会长堤定藏先生专程到梧州茶叶进出口公司考察，后经日本药业界检测证实：六堡茶含有丰富的各种营养素，有强力的降脂解腻，减肥健美功效。这一消息传开后，六堡茶曾一度风靡日本东京。在气候炎热的马来西亚、新加坡，当地华侨多用六堡茶作消暑祛湿、治病驱痢的生活必需品。</p>
    <img src="${_f}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>近年来随着传统侨销黑茶云南普洱茶需求量和影响力的扩大，同属传统黑茶类的梧州六堡茶也为国内众多爱茶人士所推崇，其特有的风味品质和保健作用逐渐被人们重新认识，喝六堡茶，谈论六堡茶，收藏六堡茶已成为饮茶爱好者追求的新时尚。 中茶公司生产的“多特利”，“中茶”牌六堡茶因其选料纯正，加工精良，品质独特而一直深受海外侨胞喜爱，近年也已成为国内喜爱六堡茶人士之首选。特别是我司上世纪80年代出口日本的200克黑盒装黑茶六堡茶、90年代产制的“中茶”牌、“西江”牌500克装山水盒和250克装黄盒已成为茶中珍品，深受消费者追捧，目前已是身价百倍，一盒难求。</p>`},"细数那些曾经在东洋茶桌占领“C位”的六堡茶":{title:"细数那些曾经在东洋茶桌占领“C位”的六堡茶",text:`<img src="${Ef}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" /><p>六堡茶与日本的渊源不可谓不深，而中茶六堡的“旅日”经历，更是可以用奇妙来形容——由于经过一批日本黑茶专家的前期研究，发表过多篇学术论文，论述六堡茶的优异性，所以在八十年代初，最早一批“到达”日本的六堡茶，是摆在药店中出售的。</p>
    
    <p>当时，日方茶商纷纷从当年的广西茶叶分公司梧州支公司（现梧州中茶茶业有限公司）购进六堡茶，一经推出，就受到了日本各阶层的欢迎，掀起了一场持久的黑茶消费热潮。此时日本的各大媒体都出现了大量关于六堡茶的报道和广告，许多广告被传为经典，至今仍为茶友们津津乐道。</p>
    
    <p>在2006年以前，由于出口六堡茶需要凭外经贸部（商务部）颁发的“特种茶出口配额许可证”或广西外经委颁发的“红茶出口配额许可证”才能出口，<img src="${Cf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />1962年，梧州茶叶土产进出口支公司（现梧州中茶茶业有限公司）获得自营出口权，并通过梧州口岸独家经营以六堡茶为主的茶叶出口业务。一直到2006年取消茶叶的出口配额许可证管理，可以说中茶窖藏六堡茶基本承包了近半个世纪海内外茶客对六堡茶的味觉口感记忆。</p>

    <p>自改革开放以来，中日双方保持着良好的茶叶贸易关系，日本作为茶叶消费大国，茶叶消费量巨大，是中国重要的茶叶出口国之一。一份1991年与日本签订的供货合同显示，梧州茶叶进出口公司向日本A.J.D公司供应茶号为5101的六堡茶共11.25吨。而当时日本全国黑茶产量仅30吨，可见其影响力。</p>
    <img src="${Sf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <img src="${Rf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    
    <p>专供日本出口的5101规格为25KG/箱，出口到日本后，大部分经过再包装后销往消费者手中，这就是后来风靡日本的六堡茶，开始谱写一段六堡茶名扬海外的佳话。</p>
    <br/>
    <p>【外贸5101】</p>
    <img src="${Pf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>沿袭了原5101的配方和工艺，还原了外贸风味，传承了系列经典，又加以“一茶多窖、一茶多藏”窖藏工艺的陈化和沉淀，保证了产品良好的品质。本产品精选特级六堡茶原料制作，干茶条索紧细、匀整，色泽黑褐带金毫；开汤后，汤色红亮，如朝阳映雪；浓浓陈香随茶汤热气升腾，扑鼻而来，似山风抚雪，沁人心脾。</p>
    <br/>
    <p>【黑盒六堡茶】</p>
    <img src="${Tf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>第一代“黑盒六堡茶”在日本热销，也就是由“中国土产畜产进出口公司 广西壮族自治区分公司梧州支公司”生产的“黑茶六保茶”，被茶友们称为“无土黑盒”。日本人认为六堡茶具有较多的保健功效，特将“堡”改为“保”，这就是“无土黑盒”的由来。</p>
    <img src="${$f}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>早期生产的“无土黑盒”如今已一盒难求，身价上涨百倍。为了回顾历史，重现经典，让茶人能更好的感受外贸六堡茶的魅力，中茶公司复刻了十版黑盒六堡茶，每一次的上市都掀起狂潮。</p>
    <br/>
    <p>【中茶108】</p>
    
    <p>茶饮，一直被视为健康的天然饮品，因此在日本，喝茶被视为一种健康生活习惯。<img src="${Of}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />设计上，【中茶108】沿用了80年代日本纸媒的“老人安享茶乐”的经典广告画面，表达了健康的喝茶观念和“乐享茶趣”的饮茶理念，就如主画面上的长者，喝到好茶后的会心一笑，也是品饮茶叶的另一种真谛。</p>
    <p>茶起源于中国，盛行于世界，由来已历千年。<img src="${jf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />这枚小小的“东方神叶”，在不同国度、不同文化的群体中广泛晕染，展现出人类对和平安宁的期盼，对美好生活的向往。“和而不同、美美与共”在经典的【黑盒】、【5101】、【中茶108】的悠悠茶韵中感受文明的互鉴和文化的流传，在复刻传承中品茗论道，以其不可替代的意义和价值奉献给各位。</p>
    
    <p>来源：中茶窖藏六堡茶</p>
    `},"六堡茶韵绕京彩，三伏时节享清欢":{title:"六堡茶韵绕京彩，三伏时节享清欢",text:`
    <p>京彩瓷博物馆的馆长史琴，是我的茶友，也是我忘年交。在六大茶类中，史馆长偏好黑茶，其中以广西六堡为最爱。<img src="${Ff}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />今年夏天的一次茶会中，我采访了史馆长，听她讲述了她与广西六堡黑茶之间的不解之缘</p>
    
    <p>以下是史馆长的叙述。</p>
    
    <p>初识六堡茶，是在一个偶然的午后，阳光透过古老的窗棂，斑驳地洒在案头的古籍上，空气中弥漫着一种难以言喻的宁静与古朴。好友马老师带来了一壶刚焖泡好的中茶六堡，那深邃的色泽，仿佛能洞察人心，又似藏着千年的故事，等待着有缘人的倾听。轻啜一口，那独特的韵味便在舌尖缓缓绽放，既有岁月的沉淀，又不失清新的活力，仿佛能瞬间穿越回那个茶马古道上的辉煌年代。那一刻，我深知，这份来自大山的馈赠，将成为我生命中不可或缺的一部分。</p>
    
    <p>“茶之为物，生于青山，长于幽谷，结庐林间，得烟霞而秀媚，历风雨而芳馨。”这是古人对茶之美的颂歌，而六堡茶，更是将这份美演绎得淋漓尽致。它不仅仅是一种饮品，更是一种文化的传承，一种生活的态度。在快节奏的现代生活中，人们往往忽略了内心的宁静与平和，而六堡茶，就像是一位智者，用它那独特的韵味，引导我们回归自然，寻找心灵的栖息之地。</p>
    <img src="${Hf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>我对于六堡的偏爱，与多数人追求茶香袅袅不同，我更看重的是它那份不为人尽知的健康功效——降脂、降压、降糖、美容、塑体、排湿......每一项都精准地契合了现代人的健康需求。尤其对于女性而言，随着年龄的增长，身体对自然的调节能力逐渐减弱，六堡茶便成了我餐桌上的秘密武器。每当品尝佳肴后，一杯温热的中茶六堡下肚，油腻感瞬间消散，让我尽享美食而无负担。更令人欣喜的是，那些日常的小不适，在六堡茶的温柔呵护下，也悄然退却，无需依赖药物，自然恢复平衡。</p>
    <img src="${Bf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>自第一届“有’伏’共享”三伏天打卡六堡茶饮茶活动启幕以来，我便满怀热忱地参与其中，这一坚持，便是三个春秋。每年的三伏，对于许多人来说，是难熬的酷暑，但对于我而言，却是与中茶六堡相约的美好时光。每年的这个时节，我都会提前准备好中茶六堡，邀请博物馆的同仁们一同品茗，分享彼此的故事与感悟。在那热气腾腾的茶香中，我们仿佛忘记了外界的炎热与喧嚣，只愿沉浸在这份宁静与和谐之中。</p>
    
    <p>“茶之为用，味至寒，为饮最宜精行俭德之人。”唐代茶圣陆羽的这句话，道出了茶与人的深刻联系。在我看来，六堡茶不仅具有许多健康功效，更是一种精神的寄托。它教会我们如何在繁忙与浮躁中保持内心的平静与淡泊，如何在物欲横流的社会中坚守自己的本心与原则。每当慢啜中茶六堡时，我都会想起那些在历史长河中默默坚守的匠人，他们用一生的时间，去追寻那份纯粹与完美，正如这六堡茶一般，历经岁月的洗礼，依旧保持着那份独特的韵味与品质。　　</p>
    <img src="${Nf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>为了更好地推广健康养生的生活方式，我将这份对六堡茶的热爱带入团队，发起了一场关于健康茶饮的“革命”。我们不仅在三伏天组织打卡活动，更在日常工作中普及茶文化，让每一位员工都能感受到茶的魅力与力量。我们会在忙碌的工作间隙，煮上一壶中茶六堡，围坐一起，分享工作的心得与生活的点滴。这份共同的爱好，不仅让我们的工作氛围更加轻松愉悦，更在无形中增强了团队的凝聚力与向心力。我们深知，只有拥有健康的身体与积极的心态，才能更好地传承与发扬京彩瓷博物馆的文化与精神。</p>
    <p>“茶之为饮，发乎神农氏，闻于鲁周公。”茶的历史源远流长，而六堡茶作为其中的佼佼者，更是承载着无数人的情感与记忆。我始终相信，美好的事物应该与更多人分享。因此，我不仅将中茶六堡推荐给身边的亲人朋友，还将其作为一份特别的礼物分享给客户与访客。在博物馆的每一个角落，你都能感受到六堡茶的气息与韵味。我们会在特定的时节举办茶会活动，邀请各界人士前来品鉴与交流，让这份来自大自然的馈赠，温暖每一位到访者的心田。</p>
    <img src="${kf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>“三伏天，就喝中茶六堡！大品牌，值得信赖！”这不仅仅是一句口号，更是我对六堡茶品质的坚定信心与健康生活方式的热情倡导。在这个炎炎夏日，让我们携手以一杯好茶滋养身心，共赴一场关于健康与美好的旅程。</p>
    <p>写在最后：史琴馆长与广西六堡茶之间的不解之缘，讲出了茶友们的心声。中国茶，既可俗饮，也可雅品；既是饮品，也是文化。不了解中国，何能知世界？期待更多的同学加入到茶文化社，让我们年青人一起形成联盟，一起品味中国茶的韵味，感受茶文化的魅力，共同传承和发扬这份宝贵的文化遗产。</p>
    `},"小小的叶子 大大的健康":{title:"小小的叶子 大大的健康",text:`<p>茶，一片片绿叶，一年年发芽，却承载着几千年的文化底蕴，它不仅是饮品，更是滋养身心的良药。<img src="${If}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />六堡以其独特的工艺，更是茶中最耐得住寂寞，最坚守健康屏障的保护伞。</p>
    <p>喝六堡五年，三伏天打卡六堡茶三年，五年来我用自己的体验和中茶的品质带动了身边的人和我一起品饮六堡。从最开始的自己，到一两个人，到现在的一群人；从我听讲学习去传达到我言传身教到现在我们一起交流，六堡使我收获了很多。“结庐在人境，而无车马喧。问君何能尔，心远地自偏。” 陶渊明笔下的茶香袅袅，心静如水是当下快节奏生活多么宝贵的心境，通过茶我体会到了。“喝茶当于瓦屋纸窗下，清泉绿茶，用素雅的陶瓷茶具，同二三人共饮，得半日之闲，可抵十年的尘梦。<img src="${Df}" align="left" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />”周作人笔下可抵十年尘梦的半日之闲，通过茶我受益了。“一饮涤昏寐，情思爽朗满天地；再饮清我神，忽如飞雨洒轻尘；三饮便得道，何须苦心破烦恼。”皎然用他的生活经历与茶的淡淡的苦涩和回甘相结合，告诉了我们喝茶的美妙感受我契合了。</p>
    <p>如果说通过茶，我们在岁月的长河中与古人同频同感，那么近三年，每年打卡六堡茶的日趋完善，我们在专业的茶人、专家团队的保驾护航中，健康的饮茶，饮健康的茶。</p>
    <img src="${Mf}" align="right" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <p>我们知道了茶叶中所含的咖啡因，可以提神醒脑；茶多酚及其他功能性成分能抑制脂肪吸收，促进新陈代谢；抗氧化剂能中和自由基，保护细胞免受损伤；茶多芬抗菌，抗炎，抗衰老，预防肿瘤等慢性病等。我们也了解了，与那些很少喝茶的人相比，经常喝茶的人患致命心脏病或中风的风险要低22%，过早死亡风险要低15%。对于长期保持饮茶习惯的人来说，这些数字分别上升到了56%和29%。习惯性饮茶的50岁人群（每周至少饮茶三次）患冠心病或中风的年龄比那些很少或从不喝茶的人晚1.41年，寿命长1.26年。 我们在交流中，用这些准确的专业术语代替以往的“也许是”“我觉得”，用精准的数据解读六堡茶的九大功效，让更多人放下了怀疑和犹豫，坚定地和我们共饮共情。<img src="${Lf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />暑期出行六人，五人带茶，三人带六堡茶，最后六人每晚都喝闷泡的六堡茶，十一天坚持下来，无一人上火便秘，发烧感冒。出行结束后，我每天增至20克投茶量，不知不觉中，体重减轻四斤，上厕所轻松了。上厕所轻松是我喝六堡茶的初衷，前两年打卡，我都有记录，但收效甚微，今年6月4日，秋玲发圈祛湿提示，告知坚持21天会有惊喜，果然不负我们。其实喝茶健康大家都很清楚，而喝六堡茶只能是更健康，我们在专家团队的指导下科学饮茶，喝有千年传承的茶，喝有科研、品控把关的安全之茶。而喝茶又能洗去尘世的浮躁，留下清香淡雅，让人心静如水，从容开朗。</p>
    <p>人与人的关系一定是敬于才华，合于性格，久于善良，终于人品。人生如茶，香至味长，感恩美好的相遇，感恩耐心的等待。“且将新火试新茶，诗酒趁年华。”在这美好的年华里，与茶相伴，与友相携，寻找内心的安宁与满足，获得身心的滋养和慰藉，才是最佳的修身养性的健康之路。</p>
    `},奶茶的潜在健康风险:{title:"奶茶的潜在健康风险",text:`<p>在当今快节奏的生活中，奶茶作为一种时尚饮品，已经成为许多年轻人的“必需品”。然而，在享受其美味的同时，健康专家警告，奶茶潜藏的健康隐患不容小觑。<img src="${Vf}" align="right" width="22%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />本文将深入探讨奶茶的坏处，从多个角度分析其对身体健康的潜在影响。</p>
    <h3>一、奶茶的成分及其影响</h3>
<p>奶茶的主要成分包括茶、奶、糖及各种配料。这些成分的组合，虽然创造了丰富的口感，却也带来了高热量和高糖分的问题。一杯普通奶茶的热量可以高达 300 卡路里，其中的糖分往往超过 30 克，这一数字远超美国心脏协会推荐的每日糖分摄入量。</p>
<h4>1.1 高糖饮食的健康危害</h4>
<p>长期摄入过量糖分，会导致胰岛素抵抗，增加患糖尿病的风险。此外，糖分过高还与肥胖密切相关，肥胖本身又是多种慢性病的高危因素。根据世界卫生组织的研究，全球肥胖率逐年上升，主要与高糖饮食有关，而奶茶无疑是这一饮食趋势的推手之一。</p>
<h4>1.2 心血管健康的隐患</h4>

<p>奶茶中的高糖、高热量成分还会对心血管健康造成威胁。研究显示，摄入过多糖分与心血管疾病的发病率呈正相关。长期高糖饮食会导致血脂异常，增加动脉硬化的风险，从而引发心脏病、中风等严重后果。</p>
<img src="${Uf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />

<h3>二、饮用奶茶对口腔健康的影响</h3>
<p>奶茶中含有大量的糖分，这对口腔健康的影响同样不容忽视。糖是导致龋齿的重要因素，细菌在口腔中以糖为食，产生酸性物质，损害牙齿。</p>
<h4>2.1 龋齿的高发人群</h4>
<p>研究表明，频繁饮用含糖饮品的青少年，其龋齿发生率显著高于普通饮水的青少年。长期以来，儿童和青少年对口腔卫生的关注度较低，加上奶茶的流行，使得龋齿问题日益严重。</p>
<h4>2.2 牙周病的潜在风险</h4>
<img src="${qf}" align="right" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>除了龋齿，奶茶还可能导致牙周病的发生。糖分不仅滋养了导致龋齿的细菌，还可能引发炎症反应，影响牙龈健康。长期以来，口腔健康问题与整体健康息息相关，忽视牙齿健康可能导致其他系统性疾病的发生。</p>
<h3>三、珍珠及其他配料的营养价值</h3>
<p>奶茶中的珍珠、椰果等配料，虽然口感独特，却往往缺乏营养价值。珍珠主要由木薯淀粉制成，热量高而营养成分几乎为零。长期依赖这种配料可能导致营养不均衡，影响身体健康。</p>
<h4>3.1 热量负担</h4>
<p>一杯奶茶中添加的珍珠，可能让整体热量增加 100 卡路里以上。这对于需要控制体重的人群来说，无疑是一个不小的负担。</p>
<h4>3.2 对消化系统的影响</h4>
<img src="${Kf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>某些珍珠可能含有添加剂，长期食用可能对消化系统产生不利影响。尤其是对肠胃较为敏感的人，奶茶中的一些成分可能导致不适。</p>
<h3>四、心理健康的影响</h3>
<p>饮用奶茶的习惯，可能与心理健康状态有关。研究显示，过度依赖高糖饮品的人群，往往会出现焦虑和抑郁等心理问题。虽然奶茶可以带来短暂的愉悦感，但长期的糖分摄入可能导致情绪波动，甚至加重心理负担。</p>
<h4>4.1 糖与情绪的关系</h4>
<p>糖分摄入可以刺激大脑释放多巴胺，使人产生愉悦感。然而，这种快感是短暂的，随之而来的可能是情绪的低落。研究发现，常饮高糖饮品的人，往往更易感到疲惫和焦虑。</p>
<img src="${Wf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>4.2 依赖性的问题</h4>
<p>对于一些年轻人来说，奶茶已成为一种“舒适食品”。这种依赖性可能会导致他们在面对压力时，选择通过饮用奶茶来缓解焦虑，形成恶性循环。</p>
<h3>五、市场监管与消费者教育</h3>
<p>面对奶茶的健康隐患，市场监管和消费者教育显得尤为重要。许多奶茶店并未标明糖分和热量，使得消费者在选择时缺乏足够的信息。</p>
<h4>5.1 加强市场监管</h4>

<p>相关部门应加强对奶茶市场的监管，确保所有饮品的成分和营养信息透明，以便消费者做出更明智的选择。</p>
<img src="${zf}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>5.2 提升消费者意识</h4>

<p>消费者也应提高自身的健康意识，了解饮品的成分和可能带来的健康风险，减少高糖饮品的摄入，转向更健康的饮品选择。</p>
<h3>结论</h3>
<p>奶茶虽然美味，但其潜在的健康隐患不容忽视。消费者在享受奶茶的同时，必须意识到其可能带来的健康风险。保持理性消费、适量饮用，才能实现真正的健康生活。</p>`},奶茶对健康的负面影响:{title:"奶茶对健康的负面影响",text:`<p>在城市的每个角落，奶茶店如雨后春笋般涌现，成为年轻人社交生活的重要组成部分。然而，随着奶茶的流行，潜藏的健康问题也逐渐浮出水面。本文将全面审视奶茶对健康的负面影响，探讨饮用习惯的改变如何影响身体健康。</p>
<img src="${Gf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <h3>一、奶茶的流行与成分分析</h3>
<p>奶茶之所以能够迅速风靡，除了其独特的口感，还与多样的选择密切相关。从经典的珍珠奶茶到各类花果茶，消费者几乎可以找到任意口味的奶茶。然而，许多消费者对其成分却知之甚少。</p>
<h4>1.1 热量和糖分的隐忧</h4>
<p>一杯奶茶的热量普遍较高，加之添加了大量糖分，成为现代年轻人热量过剩的重要来源。根据调查，许多消费者每日的糖分摄入超过推荐标准，而奶茶正是其主要来源之一。长期以往，可能导致肥胖等健康问题的发生。</p>
<img src="${Xf}" align="right" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>1.2 饮品成分的多样性</h4>
<p>除了茶和奶，奶茶中的添加剂和调味品也需要关注。一些奶茶店为了追求口感，可能使用大量香料和甜味剂，这些成分的安全性和长期影响仍需进一步研究。</p>
<h3>二、健康问题的广泛影响</h3>
<p>随着奶茶的消费量激增，相关的健康问题也愈加明显。这些问题不仅影响到个人健康，也对公共健康构成威胁。</p>
<h4>2.1 高糖饮食与慢性病</h4>
<img src="${Zf}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>高糖饮食与慢性病的发生有着明确的关联。根据世卫组织的数据，过量摄入糖分会导致糖尿病、心血管疾病等健康问题。对于年轻人而言，长期饮用奶茶将会增加未来的健康风险。</p>
<h4>2.2 心理健康的影响</h4>
<p>饮用奶茶的习惯还可能影响心理健康。过量糖分的摄入与焦虑、抑郁等心理问题相关。奶茶作为“舒适食品”，虽然能提供短暂的愉悦感，但却可能加重情绪波动。</p>
<h3>三、口腔健康的隐患</h3>
<p>高糖饮品对口腔健康的影响同样显著。糖分是龋齿的主要诱因，细菌以糖为养分，产生酸性物质，侵蚀牙齿。频繁饮用奶茶的消费者，龋齿和牙周病的发生率明显高于普通饮水者。</p>
<h4>3.1 龋齿的加剧</h4>
<img src="${Jf}" align="right" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>龋齿不仅是口腔健康的问题，长期未治疗的龋齿还可能导致牙髓炎等更严重的问题。因此，奶茶的普及使得口腔健康问题更加严重。</p>
<h4>3.2 牙周病的风险</h4>
<p>长期饮用高糖饮品还可能引发牙周病，影响牙龈健康。良好的口腔卫生与身体整体健康息息相关，忽视口腔健康可能导致其他系统性疾病的发生。</p>
<h3>四、珍珠的营养考量</h3>
<p>奶茶中常见的珍珠，主要由木薯淀粉制成，营养价值相对较低。虽然珍珠增添了口感，但其所含的热量和碳水化合物相对较高，长期食用可能导致营养不均衡。</p>
<h4>4.1 热量负担与饮食习惯</h4>
<p>珍珠的添加使得奶茶的热量迅速增加，许多消费者未能意识到这一点。长期以来，过量摄入热量可能导致肥胖和相关健康问题的出现。</p>
<img src="${Qf}" align="left" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>4.2 对消化的影响</h4>

<p>某些珍珠可能含有添加剂，长期食用可能对消化系统产生不利影响。特别是对肠胃敏感的人，奶茶中的成分可能导致不适。</p>
<h3>五、市场监管与消费者意识</h3>
<p>在奶茶流行的同时，市场监管和消费者教育显得尤为重要。许多消费者对奶茶的成分缺乏了解，导致在选择饮品时面临困惑。</p>
<h4>5.1 加强市场监管</h4>
<img src="${Yf}" align="right" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>相关部门应加强对奶茶市场的监管，确保所有饮品的成分和营养信息透明，以便消费者做出更明智的选择。同时，提升对饮品标准的制定，有助于维护消费者权益。</p>
<h4>5.2 提升健康意识</h4>
<p>消费者应增强自身的健康意识，了解饮品的成分和可能带来的健康风险，减少高糖饮品的摄入，转向更健康的饮品选择。</p>
<h3>结论</h3>
<p>奶茶的流行带来了便利与享受，但其潜在的健康隐患不容忽视。面对健康问题，消费者需保持警觉，做到理性消费和适量饮用，以实现真正的健康生活。在享受生活的同时，关注身体与心理健康，才是现代生活的智慧选择。</p>`},普洱茶的魅力与健康益处:{title:"普洱茶的魅力与健康益处",text:`<p>普洱茶，这种源自中国云南省的独特茶叶，以其独特的发酵过程和独特的风味而闻名。普洱茶不仅因其独特的口感而受到茶友的喜爱，同时它的健康益处也逐渐被人们所认识。本文将深入探讨普洱茶的起源、制作过程、健康益处及饮用方法，帮助读者更好地了解这款茶饮的魅力。</p>
    <img src="${of}" align="left" width="40%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <h3>一、普洱茶的起源与历史</h3>
<p>普洱茶的历史可以追溯到千年前的中国，最早在唐朝时就已被使用。普洱茶的名字源于云南省普洱市，那个时期，普洱茶主要用于商业贸易，成为西南地区与其他地区交流的重要商品。</p>
<h4>1.1 传统制作工艺</h4>
<p>普洱茶的制作工艺独特，主要分为生茶和熟茶两种。生茶是通过新鲜茶叶自然发酵而成，具有较强的茶香和清新的口感；熟茶则经过人工发酵，口感更加醇厚，适合于长期保存。</p>
<h4>1.2 文化背景</h4>
<p>普洱茶不仅是一种饮品，更是云南当地文化的重要组成部分。茶马古道的兴起，使普洱茶成为西南地区与藏族、蒙古族等民族文化交流的重要载体。</p>
<img src="${lf}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h3>二、普洱茶的健康益处</h3>
<p>普洱茶的健康益处多种多样，近年来越来越多的研究证实了它对健康的积极影响。</p>

<h4>2.1 促进消化</h4>
<p>普洱茶被广泛认为具有促进消化的功能，特别是在进食油腻食物后，普洱茶能帮助身体消化脂肪。研究表明，普洱茶中的多酚类物质可以促进肠道蠕动，有助于缓解消化不良的问题。</p>
<h4>2.2 降低血脂</h4>
<p>普洱茶中的生物活性成分，如茶多酚和儿茶素，能够降低血液中的胆固醇水平，有助于预防动脉硬化等心血管疾病的发生。多项研究显示，长期饮用普洱茶可有效降低血脂水平。</p>
<img src="${cf}" align="left" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>2.3 促进新陈代谢</h4>

<p>普洱茶具有促进新陈代谢的效果，帮助身体更有效地燃烧脂肪，从而达到减肥的效果。研究发现，普洱茶能够增强身体的热量消耗，有助于控制体重。</p>
<h4>2.4 抗氧化与抗衰老</h4>
<p>普洱茶富含多种抗氧化物质，能够有效抵抗自由基的损伤，减缓衰老过程。抗氧化物质有助于维护细胞健康，降低慢性疾病的发生风险。</p>
<h4>2.5 增强免疫力</h4>
<p>普洱茶中的茶多酚和氨基酸能够增强免疫力，帮助身体抵御疾病。研究表明，长期饮用普洱茶的人群，其免疫功能普遍较强，感冒和其他疾病的发病率较低。</p>
<img src="${af}" align="right" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h3>三、普洱茶的饮用方法</h3>
<h4>3.1 正确的泡茶技巧</h4>
<p>泡普洱茶需要掌握正确的方法，以充分发挥其香气和滋味。首先，选择优质的普洱茶饼或散茶，使用沸水进行洗茶，以去除茶叶表面的杂质和异味。接着，按个人口味调节泡茶时间和水温，通常生茶适宜用 95 - 100℃的水，熟茶则可以稍微降低水温。</p>
<h4>3.2 合理的饮用时间</h4>
<p>普洱茶可以在饭后饮用，帮助消化；但也可以在空腹时饮用，以提升身体的代谢率。尤其是在夏季，普洱茶的清爽口感能够带来良好的解渴效果。</p>
<img src="${pf}" align="left" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h3>四、普洱茶的储存与保养</h3>
<p>普洱茶的储存条件对其口感和香气有着重要影响。普洱茶应存放在干燥、阴凉、通风的地方，避免阳光直射和潮湿环境。随着时间的推移，普洱茶的口感会逐渐变化，成熟的普洱茶会散发出独特的香气和醇厚的味道。</p>
<h4>结论</h4>
<p>普洱茶作为一种独特的茶饮，其丰富的历史和文化背景，加上多种健康益处，使其成为茶友们心中的“佳品”。无论是日常饮用，还是作为养生保健的饮品，普洱茶都能为人们的健康生活增添一份色彩。</p>`},红茶的魅力与健康益处:{title:"红茶的魅力与健康益处",text:`<p>红茶作为世界上最受欢迎的茶类之一，以其浓郁的香气和独特的口感，吸引了全球的茶爱好者。它不仅是一种饮品，更被认为具有多种健康益处。本文将深入探讨红茶的起源、制作过程、健康益处以及饮用方法，让读者全面了解这一经典茶饮的魅力。</p>
    <img src="${Ru}" align="left" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
    <h3>一、红茶的起源与历史</h3>
<p>红茶的历史悠久，可以追溯到中国的唐朝和宋朝。最初，红茶被称为“红茶”，因其泡制后茶汤呈红色而得名。随着茶叶贸易的兴起，红茶逐渐传播到世界各地，成为各国人民日常饮用的饮品。</p>
<h4>1.1 制作工艺</h4>
<p>红茶的制作工艺相对简单，主要包括萎凋、揉捻、发酵和干燥四个步骤。通过完全的发酵，红茶呈现出浓厚的香气和甜润的口感。这种工艺不仅保留了茶叶的营养成分，还赋予了红茶独特的风味。</p>
<img src="${Ou}" align="right" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>1.2 文化背景</h4>
<p>红茶在中国乃至世界茶文化中占据着重要地位。在英国，红茶成为了下午茶的象征，而在中国，红茶与地方文化紧密结合，如祁门红茶和云南红茶等，体现了各地独特的风味。</p>

<h3>二、红茶的健康益处</h3>

<p>红茶的健康益处引起了越来越多的关注。研究表明，适量饮用红茶对身体健康有诸多积极影响。</p>

<h4>2.1 改善心血管健康</h4>
<p>红茶中含有丰富的黄酮类化合物，这些物质对心血管健康具有保护作用。研究表明，长期饮用红茶能够降低心脏病和中风的风险，改善血液循环。</p>
<img src="${Tu}" align="left" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>2.2 增强免疫力</h4>
<p>红茶富含多种抗氧化物质，能够增强免疫系统的功能。研究发现，适量饮用红茶的人群，感冒和流感的发生率明显低于不饮茶的人群。</p>

<h4>2.3 促进消化</h4>

<p>红茶中的单宁酸能够刺激胃液分泌，有助于消化。饮用红茶不仅能缓解胃部不适，还能提高食欲，适合在用餐后饮用。</p>
<h4>2.4 改善心理健康</h4>
<p>红茶的香气和温暖的口感能缓解压力，提高情绪。研究发现，饮用红茶能够降低焦虑和抑郁的发生率，帮助改善心理健康。</p>
<img src="${Pu}" align="right" width="35%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<h4>2.5 促进新陈代谢</h4>
<p>红茶能够提高身体的基础代谢率，促进脂肪的氧化和能量的消耗。对于想要减肥的人群，适量饮用红茶是一种有效的辅助方法。</p>
<h3>三、红茶的饮用方法</h3>
<h4>3.1 泡茶技巧</h4>
<p>泡红茶的水温通常在 90 - 95℃，泡茶时间一般控制在 3 - 5 分钟。根据个人口味，可以适量调节泡茶时间，以获得理想的口感。对于初次尝试红茶的人，可以选择一些较为温和的品种，逐渐适应其浓郁的味道。</p>

<h4>3.2 饮用时间</h4>
<img src="${$u}" align="left" width="25%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;" />
<p>红茶适合在早餐时饮用，搭配面包或点心，能有效提神醒脑。午后也适合饮用红茶，帮助缓解疲劳，提升工作效率。</p>
<h3>四、红茶的储存与保养</h3>
<p>红茶的储存应注意避免潮湿和阳光直射，最佳存放环境是阴凉干燥的地方。密封的茶叶罐可以有效防止红茶的氧化，保持其新鲜的香气和口感。</p>
<h3>结论</h3>
<p>红茶不仅是一种美味的饮品，更是健康生活的良伴。无论是享受浓郁的红茶，还是体验其带来的健康益处，红茶都在全球范围内赢得了无数爱好者的喜爱。通过科学饮用红茶，能够在日常生活中实现健康与享受的完美结合。</p>`}},td={class:"tc-detail"},sd={class:"tc-detail-title"},nd=["innerHTML"],rd=Le({__name:"index",setup(e){const t=vt(),s=ut(),n=ed;kt(()=>{if(t.currentRoute.value.query.id){let i=t.currentRoute.value.query.title||"绿茶";typeof i=="string"&&(s.value=n[i].text)}});const r=()=>{t.currentRoute.value.query.type=="news"?(we("wellData","新闻"),t.push("/news")):t.push({path:"/teaCulture",query:{id:t.currentRoute.value.query.parentId}})};return(i,o)=>(Z(),J(se,null,[oe(Ct),x("div",td,[x("header",{onClick:r,class:"tc-header"},o[0]||(o[0]=[x("img",{src:ds,width:"15px"},null,-1),ft("返回 ")])),x("p",sd,le(ue(t).currentRoute.value.query.title),1),x("p",{innerHTML:s.value,class:"tc-detail-p"},null,8,nd)])],64))}}),id=ze(rd,[["__scopeId","data-v-e6107a4f"]]),od={class:"tc-product-content"},ld={class:"tc-product-main"},cd=["onClick"],ad=["src"],pd={class:"tc-span-title"},ud={class:"tc-div-tooltip"},fd=Le({__name:"index",setup(e){const t=ut(Os),s=vt(),n=ut(!1),r=(i,o)=>{i.length>0?(o=="10"&&we("wellData","活动"),s.push({path:"/teaCulture",query:{id:o}})):(n.value=!n.value,setTimeout(()=>{n.value=!1},1500))};return(i,o)=>(Z(),J("div",od,[oe(Ct),x("div",ld,[(Z(!0),J(se,null,Ye(t.value,l=>Yn((Z(),J("div",{key:l.id,class:"tc-div-wrapper",onClick:c=>r(l.children,l.id)},[x("img",{src:l.img},null,8,ad),x("span",pd,le(l.title),1)],8,cd)),[[hr,l.title!=="我们的实践活动"]])),128)),Yn(x("div",ud,"敬请期待!",512),[[hr,n.value]])])]))}}),dd=ze(fd,[["__scopeId","data-v-8a7068c6"]]),hd={class:"tc-nav"},gd=["onClick"],vd=["src"],md={class:"tc-nav-wrap"},bd={class:"tc-nav-title"},wd={class:"tc-nav-text"},xd=Le({__name:"index",setup(e){const t=vt(),s=()=>{we("wellData","首页"),t.push("/home")};kt(()=>{window.scrollTo(0,0)});const n=(r,i)=>{t.push({path:"/teaDetail",query:{id:r,title:i,type:"news"}})};return(r,i)=>(Z(),J(se,null,[oe(Ct),x("div",hd,[x("header",{onClick:s,class:"tc-header"},i[0]||(i[0]=[x("img",{src:ds,width:"15px"},null,-1),ft(" 返回 ")])),(Z(!0),J(se,null,Ye(ue(ap),(o,l)=>(Z(),J("div",{key:l,class:"tc-nav-div",onClick:c=>n(o.id,o.title)},[x("img",{src:o.img,class:"tc-nav-img"},null,8,vd),x("div",md,[x("span",bd,le(o.title),1),x("span",wd,le(o.des),1)])],8,gd))),128))])],64))}}),yd=ze(xd,[["__scopeId","data-v-1e72aa90"]]),_d="/assets/aboutus1-CJXUQtio.jpg",Ad="/assets/aboutus2-BKoZ6N5B.jpg",Ed="/assets/addus2-DrI8fhxV.jpg",Cd=`<p>大家好，欢迎来到茶文化研究网站！这个网站是由北京师范大学附属实验中学 2025 届学生为宣传中国茶文化成立的一个网站。</p>
<img src="${Ad}" align="left" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25);  border-radius:12px;"/>

<p>茶最古老的源头是神农氏尝百草尝到了茶树。后来，茶文化自唐朝陆羽写的《茶经》开始兴盛，至今为止中国的茶文化已经兴盛一千三百年左右。</p>
<p>“柴米油盐酱醋茶，琴棋书画诗酒茶。”茶也是唯一的雅俗共赏之物。</p>

<p>关于茶有很多有意思的故事也有很深的奥秘，今后期望与大家一同携手学习研究中国茶文化。我们的网站是一个科普公益型网站，今后有任何活动都会在网站里公告，欢迎大家一起学习茶文化，感受中国茶带给我们的健康和意境。</p>
`,Sd=`
<p><img src="${_d}" align="right" width="30%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25);  border-radius:12px;"/>中国茶文化源远流长，不仅包括茶叶的种类与品饮，更融入了丰富的礼仪与哲学。茶在中国被视为一种生活艺术，承载着人际交往和文化传承的深厚内涵。希望借此网站，在广大的青少年同学中建立一个传播中国茶文化的联盟，能够在全球范围内推广这种独特的文化。通过组织茶艺表演、文化讲座和品茶活动，我们可以更深入地探讨茶的故事与魅力，从而激发人们对这一传统的热爱与认同，共同守护和传承这一珍贵的文化遗产。<img src="${Ed}" align="left" width="15%" hspace="15" vspace="5" style="box-shadow: 0px 0.208333vw 0.833333vw rgba(0, 0, 0, 0.25); border-radius:12px;"/></p>

<p>Chinese tea culture has a long history, including not only the types and drinking of tea, but also the rich etiquette and philosophy. Tea is regarded as an art of life in China, carrying profound connotations of interpersonal communication and cultural inheritance. I hope to use this website to establish an alliance to spread Chinese tea culture among the majority of young students, and to promote this unique culture around the world. By organizing tea art performances, cultural lectures and tea tasting activities, we can explore the story and charm of tea more deeply, so as to stimulate people's love and recognition of this tradition, and jointly protect and inherit this precious cultural heritage.</p>

`,Rd={class:"tc-detail"},Pd=["innerHTML"],Td=Le({__name:"index",setup(e){const t=vt(),s=()=>{we("wellData","首页"),t.push("/home")};return(n,r)=>(Z(),J(se,null,[oe(Ct),x("div",Rd,[x("header",{onClick:s,class:"tc-header"},r[0]||(r[0]=[x("img",{src:ds,width:"15px"},null,-1),ft("返回 ")])),r[1]||(r[1]=x("p",{class:"tc-detail-title"},"关于我们",-1)),x("p",{innerHTML:ue(Cd),class:"tc-detail-p"},null,8,Pd),r[2]||(r[2]=x("div",null,[x("p",{class:"tc-contact-p"},"联系我们"),x("p",{class:"tc-contact-p"},"公 众 号：SDSZ茶文化研究社"),x("p",{class:"tc-contact-p"},"联系邮箱：office@chineseteas.net")],-1))])],64))}}),$d=ze(Td,[["__scopeId","data-v-a3dba352"]]),Od={class:"tc-detail"},jd=["innerHTML"],Id=Le({__name:"index",setup(e){const t=vt(),s=()=>{we("wellData","首页"),t.push("/home")};return(n,r)=>(Z(),J(se,null,[oe(Ct),x("div",Od,[x("header",{onClick:s,class:"tc-header"},r[0]||(r[0]=[x("img",{src:ds,width:"15px"},null,-1),ft("返回 ")])),r[1]||(r[1]=x("p",{class:"tc-detail-title"},"加入",-1)),x("p",{innerHTML:ue(Sd),class:"tc-detail-p"},null,8,jd),r[2]||(r[2]=x("div",null,[x("p",{class:"tc-contact-p"},"联系我们"),x("p",{class:"tc-contact-p"},"公 众 号：SDSZ茶文化研究社"),x("p",{class:"tc-contact-p"},"联系邮箱：office@chineseteas.net")],-1))])],64))}}),Dd=ze(Id,[["__scopeId","data-v-ca58d1f2"]]),Md=Xa({history:Aa(),routes:[{path:"/",component:Wr},{path:"/home",component:Wr},{path:"/teaCulture",component:au},{path:"/teaDetail",component:id},{path:"/teaProduct",component:dd},{path:"/news",component:yd},{path:"/aboutUs",component:$d},{path:"/joinUs",component:Dd}],scrollBehavior(e,t,s){return s?(console.log("to-from-",e,t),s):{top:0}}});(function(t,s){var n=s.documentElement,r=t.devicePixelRatio||1;function i(){s.body?s.body.style.fontSize=12*r+"px":s.addEventListener("DOMContentLoaded",i)}i();function o(){var d=n.clientWidth/10;n.style.fontSize=d+"px"}if(o(),t.addEventListener("resize",o),t.addEventListener("pageshow",function(d){d.persisted&&o()}),r>=2){var l=s.createElement("body"),c=s.createElement("div");c.style.border=".5px solid transparent",l.appendChild(c),n.appendChild(l),c.offsetHeight===1&&n.classList.add("hairlines"),n.removeChild(l)}})(window,document);const go=Fc(Wc);go.use(Md);go.mount("#app");
