function q(){}function P(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function Y(){return Object.create(null)}function B(t){t.forEach(W)}function Z(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function tt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function et(t){return Object.keys(t).length===0}function D(t,...e){if(t==null){for(const i of e)i(void 0);return q}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(D(e,n))}function it(t,e,n,i){if(t){const r=j(t,e,n,i);return t[0](r)}}function j(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function ct(t,e,n,i,r,o){if(r){const c=j(e,n,i,o);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let b=!1;function ot(){b=!0}function st(){b=!1}function L(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:L(1,r,M=>e[n[M]].claim_order,u))-1;i[l]=n[a]+1;const E=a+1;n[E]=l,r=Math.max(E,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function T(t,e){t.appendChild(e)}function H(t,e){if(b){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ut(t,e,n){b&&!n?H(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function ft(){return k(" ")}function dt(){return k("")}function N(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ht(t){return t.dataset.svelteH}function mt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,r=!1){F(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function G(t,e,n,i){return S(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function pt(t,e,n){return G(t,e,n,C)}function J(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function bt(t){return J(t," ")}function yt(t,e){e=""+e,t.data!==e&&(t.data=e)}function gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let m;function K(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function xt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=C("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=K();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=N(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=N(i.contentWindow,"resize",e),e()}),T(t,i),()=>{(r||o&&i.contentWindow)&&o(),I(i)}}function Q(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function wt(t,e){return new t(e)}let p;function g(t){p=t}function y(){if(!p)throw new Error("Function called outside component initialization");return p}function vt(t){y().$$.on_mount.push(t)}function kt(t){y().$$.after_update.push(t)}function Et(t){y().$$.on_destroy.push(t)}function Nt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=Q(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const _=[],A=[];let d=[];const w=[],z=Promise.resolve();let v=!1;function R(){v||(v=!0,z.then(V))}function At(){return R(),z}function U(t){d.push(t)}function jt(t){w.push(t)}const x=new Set;let f=0;function V(){if(f!==0)return;const t=p;do{try{for(;f<_.length;){const e=_[f];f++,g(e),X(e.$$)}}catch(e){throw _.length=0,f=0,e}for(g(null),_.length=0,f=0;A.length;)A.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(_.length);for(;w.length;)w.pop()();v=!1,x.clear(),g(t)}function X(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}function Ct(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{N as A,B,Nt as C,Et as D,at as E,U as F,xt as G,P as H,ht as I,jt as J,tt as K,Y as L,V as M,Z as N,et as O,Ct as P,p as Q,g as R,W as S,_ as T,R as U,ot as V,st as W,ft as a,kt as b,bt as c,I as d,dt as e,C as f,pt as g,mt as h,ut as i,_t as j,gt as k,k as l,J as m,yt as n,vt as o,A as p,wt as q,it as r,$ as s,At as t,ct as u,lt as v,rt as w,H as x,q as y,nt as z};