import{S as e,i as t,s as r,I as s,N as n,c as a,a as o,e as c,b as l,d as i,f as u,g as p,h as f,m as h,j as m,k as $,l as d,t as g,n as v,o as y,p as b,q as w,r as E,u as S,v as x,w as P,x as _,y as R,z as k,A,B as L,C as j,D as C,E as q,F as N}from"./index.651eddda.js";const D={},U=()=>({});function I(e){var t;return{c(){t=w("Docs")},l(e){t=E(e,"Docs")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function O(e){var t;return{c(){t=w("Svelte")},l(e){t=E(e,"Svelte")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function H(e){var t,r=new S({props:{name:"message-square"}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){h(r,e,s),t=!0},p:x,i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){y(r,e)}}}function T(e){var t,r=new S({props:{name:"github"}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){h(r,e,s),t=!0},p:x,i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){y(r,e)}}}function B(e){var t,r,s,n,a=new b({props:{segment:"docs",$$slots:{default:[I]},$$scope:{ctx:e}}}),c=new b({props:{external:"https://svelte.dev",$$slots:{default:[O]},$$scope:{ctx:e}}}),i=new b({props:{external:"https://svelte.dev/chat",title:"Discord Chat",$$slots:{default:[H]},$$scope:{ctx:e}}}),u=new b({props:{external:"https://github.com/sveltejs/sapper",title:"GitHub Repo",$$slots:{default:[T]},$$scope:{ctx:e}}});return{c(){a.$$.fragment.c(),t=o(),c.$$.fragment.c(),r=o(),i.$$.fragment.c(),s=o(),u.$$.fragment.c()},l(e){a.$$.fragment.l(e),t=l(e),c.$$.fragment.l(e),r=l(e),i.$$.fragment.l(e),s=l(e),u.$$.fragment.l(e)},m(e,o){h(a,e,o),m(e,t,o),h(c,e,o),m(e,r,o),h(i,e,o),m(e,s,o),h(u,e,o),n=!0},p(e,t){var r={};e.$$scope&&(r.$$scope={changed:e,ctx:t}),a.$set(r);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),c.$set(s);var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),i.$set(n);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),u.$set(o)},i(e){n||(g(a.$$.fragment,e),g(c.$$.fragment,e),g(i.$$.fragment,e),g(u.$$.fragment,e),n=!0)},o(e){v(a.$$.fragment,e),v(c.$$.fragment,e),v(i.$$.fragment,e),v(u.$$.fragment,e),n=!1},d(e){y(a,e),e&&p(t),y(c,e),e&&p(r),y(i,e),e&&p(s),y(u,e)}}}function G(e){var t,r,b,w,E=new s({}),S=new n({props:{segment:e.segment,page:e.page,logo:"sapper-logo-horizontal.svg",$$slots:{default:[B]},$$scope:{ctx:e}}});const x=e.$$slots.default,P=a(x,e,null);return{c(){E.$$.fragment.c(),t=o(),S.$$.fragment.c(),r=o(),b=c("main"),P&&P.c(),this.h()},l(e){E.$$.fragment.l(e),t=l(e),S.$$.fragment.l(e),r=l(e),b=i(e,"MAIN",{class:!0},!1);var s=u(b);P&&P.l(s),s.forEach(p),this.h()},h(){f(b,"class","svelte-d6kcga")},m(e,s){h(E,e,s),m(e,t,s),h(S,e,s),m(e,r,s),m(e,b,s),P&&P.m(b,null),w=!0},p(e,t){var r={};e.segment&&(r.segment=t.segment),e.$$scope&&(r.$$scope={changed:e,ctx:t}),S.$set(r),P&&P.p&&e.$$scope&&P.p($(x,t,e,null),d(x,t,null))},i(e){w||(g(E.$$.fragment,e),g(S.$$.fragment,e),g(P,e),w=!0)},o(e){v(E.$$.fragment,e),v(S.$$.fragment,e),v(P,e),w=!1},d(e){y(E,e),e&&p(t),y(S,e),e&&(p(r),p(b)),P&&P.d(e)}}}function J(e,t,r){let{segment:s}=t;const{page:n}=Be();let{$$slots:a={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&r("segment",s=e.segment),"$$scope"in e&&r("$$scope",o=e.$$scope)},{segment:s,page:n,$$slots:a,$$scope:o}}class V extends e{constructor(e){super(),t(this,e,J,G,r,["segment"])}}function K(e){var t,r,s,n,a;return{c(){t=c("h1"),r=w("It looks like you're offline"),s=o(),n=c("p"),a=w("Reload the page once you've found the internet."),this.h()},l(e){t=i(e,"H1",{class:!0},!1);var o=u(t);r=E(o,"It looks like you're offline"),o.forEach(p),s=l(e),n=i(e,"P",{class:!0},!1);var c=u(n);a=E(c,"Reload the page once you've found the internet."),c.forEach(p),this.h()},h(){f(t,"class","svelte-u533s9"),f(n,"class","svelte-u533s9")},m(e,o){m(e,t,o),P(t,r),m(e,s,o),m(e,n,o),P(n,a)},p:x,d(e){e&&(p(t),p(s),p(n))}}}function Y(e){var t,r,s,n,a;function h(e,t){return t.error.message?F:z}var $=h(0,e),d=$(e);function g(e,t){return t.dev&&t.error.stack?W:M}var v=g(0,e),y=v(e);return{c(){t=c("h1"),r=w("Yikes!"),s=o(),d.c(),n=o(),y.c(),a=_(),this.h()},l(e){t=i(e,"H1",{class:!0},!1);var o=u(t);r=E(o,"Yikes!"),o.forEach(p),s=l(e),d.l(e),n=l(e),y.l(e),a=_(),this.h()},h(){f(t,"class","svelte-u533s9")},m(e,o){m(e,t,o),P(t,r),m(e,s,o),d.m(e,o),m(e,n,o),y.m(e,o),m(e,a,o)},p(e,t){$===($=h(0,t))&&d?d.p(e,t):(d.d(1),(d=$(t))&&(d.c(),d.m(n.parentNode,n))),v===(v=g(0,t))&&y?y.p(e,t):(y.d(1),(y=v(t))&&(y.c(),y.m(a.parentNode,a)))},d(e){e&&(p(t),p(s)),d.d(e),e&&p(n),y.d(e),e&&p(a)}}}function z(e){var t,r,s,n;return{c(){t=c("p"),r=w("Encountered a "),s=w(e.status),n=w(" error"),this.h()},l(a){t=i(a,"P",{class:!0},!1);var o=u(t);r=E(o,"Encountered a "),s=E(o,e.status),n=E(o," error"),o.forEach(p),this.h()},h(){f(t,"class","error svelte-u533s9")},m(e,a){m(e,t,a),P(t,r),P(t,s),P(t,n)},p(e,t){e.status&&R(s,t.status)},d(e){e&&p(t)}}}function F(e){var t,r,s,n,a=e.error.message+"";return{c(){t=c("p"),r=w(e.status),s=w(": "),n=w(a),this.h()},l(o){t=i(o,"P",{class:!0},!1);var c=u(t);r=E(c,e.status),s=E(c,": "),n=E(c,a),c.forEach(p),this.h()},h(){f(t,"class","error svelte-u533s9")},m(e,a){m(e,t,a),P(t,r),P(t,s),P(t,n)},p(e,t){e.status&&R(r,t.status),e.error&&a!==(a=t.error.message+"")&&R(n,a)},d(e){e&&p(t)}}}function M(e){var t,r,s,n,a,h,$,d,g,v=e.status>=500&&X();return{c(){v&&v.c(),t=o(),r=c("p"),s=w("If the error persists, please drop by "),n=c("a"),a=w("Discord chatroom"),h=w(" and let us know, or raise an issue on "),$=c("a"),d=w("GitHub"),g=w(". Thanks!"),this.h()},l(e){v&&v.l(e),t=l(e),r=i(e,"P",{class:!0},!1);var o=u(r);s=E(o,"If the error persists, please drop by "),n=i(o,"A",{href:!0},!1);var c=u(n);a=E(c,"Discord chatroom"),c.forEach(p),h=E(o," and let us know, or raise an issue on "),$=i(o,"A",{href:!0},!1);var f=u($);d=E(f,"GitHub"),f.forEach(p),g=E(o,". Thanks!"),o.forEach(p),this.h()},h(){f(n,"href","https://svelte.dev/chat"),f($,"href","https://github.com/sveltejs/svelte"),f(r,"class","svelte-u533s9")},m(e,o){v&&v.m(e,o),m(e,t,o),m(e,r,o),P(r,s),P(r,n),P(n,a),P(r,h),P(r,$),P($,d),P(r,g)},p(e,r){r.status>=500?v||((v=X()).c(),v.m(t.parentNode,t)):v&&(v.d(1),v=null)},d(e){v&&v.d(e),e&&(p(t),p(r))}}}function W(e){var t,r,s=e.error.stack+"";return{c(){t=c("pre"),r=w(s)},l(e){t=i(e,"PRE",{},!1);var n=u(t);r=E(n,s),n.forEach(p)},m(e,s){m(e,t,s),P(t,r)},p(e,t){e.error&&s!==(s=t.error.stack+"")&&R(r,s)},d(e){e&&p(t)}}}function X(e){var t,r;return{c(){t=c("p"),r=w("Please try reloading the page."),this.h()},l(e){t=i(e,"P",{class:!0},!1);var s=u(t);r=E(s,"Please try reloading the page."),s.forEach(p),this.h()},h(){f(t,"class","svelte-u533s9")},m(e,s){m(e,t,s),P(t,r)},d(e){e&&p(t)}}}function Q(e){var t,r,s;document.title=t=e.status;var n=function(e,t){return t.online?Y:K}(0,e)(e);return{c(){r=o(),s=c("div"),n.c(),this.h()},l(e){r=l(e),s=i(e,"DIV",{class:!0},!1);var t=u(s);n.l(t),t.forEach(p),this.h()},h(){f(s,"class","container svelte-u533s9")},m(e,t){m(e,r,t),m(e,s,t),n.m(s,null)},p(e,r){e.status&&t!==(t=r.status)&&(document.title=t),n.p(e,r)},i:x,o:x,d(e){e&&(p(r),p(s)),n.d()}}}function Z(e,t,r){let{status:s,error:n}=t,a="undefined"==typeof navigator||navigator.onLine;return e.$set=e=>{"status"in e&&r("status",s=e.status),"error"in e&&r("error",n=e.error)},{dev:!1,status:s,error:n,online:a}}class ee extends e{constructor(e){super(),t(this,e,Z,Q,r,["status","error"])}}function te(e){var t,r,s=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var r=0;r<s.length;r+=1)t=k(t,s[r]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=_()},l(e){o&&o.$$.fragment.l(e),t=_()},m(e,s){o&&h(o,e,s),m(e,t,s),r=!0},p(e,r){var c=e.level1?A(s,[r.level1.props]):{};if(n!==(n=r.level1.component)){if(o){j();const e=o;v(e.$$.fragment,1,0,()=>{y(e,1)}),C()}n?((o=new n(a())).$$.fragment.c(),g(o.$$.fragment,1),h(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){r||(o&&g(o.$$.fragment,e),r=!0)},o(e){o&&v(o.$$.fragment,e),r=!1},d(e){e&&p(t),o&&y(o,e)}}}function re(e){var t,r=new ee({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){h(r,e,s),t=!0},p(e,t){var s={};e.error&&(s.error=t.error),e.status&&(s.status=t.status),r.$set(s)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){y(r,e)}}}function se(e){var t,r,s,n,a=[re,te],o=[];function c(e,t){return t.error?0:1}return t=c(0,e),r=o[t]=a[t](e),{c(){r.c(),s=_()},l(e){r.l(e),s=_()},m(e,r){o[t].m(e,r),m(e,s,r),n=!0},p(e,n){var l=t;(t=c(0,n))===l?o[t].p(e,n):(j(),v(o[l],1,1,()=>{o[l]=null}),C(),(r=o[t])||(r=o[t]=a[t](n)).c(),g(r,1),r.m(s.parentNode,s))},i(e){n||(g(r),n=!0)},o(e){v(r),n=!1},d(e){o[t].d(e),e&&p(s)}}}function ne(e){var t,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[se]},$$scope:{ctx:e}};for(var n=0;n<r.length;n+=1)s=k(s,r[n]);var a=new V({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,r){h(a,e,r),t=!0},p(e,t){var s=e.segments||e.level0?A(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(s.$$scope={changed:e,ctx:t}),a.$set(s)},i(e){t||(g(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){y(a,e)}}}function ae(e,t,r){let{stores:s,error:n,status:a,segments:o,level0:c,level1:l=null}=t;return L(D,s),e.$set=e=>{"stores"in e&&r("stores",s=e.stores),"error"in e&&r("error",n=e.error),"status"in e&&r("status",a=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",c=e.level0),"level1"in e&&r("level1",l=e.level1)},{stores:s,error:n,status:a,segments:o,level0:c,level1:l}}class oe extends e{constructor(e){super(),t(this,e,ae,ne,r,["stores","error","status","segments","level0","level1"])}}const ce=[/^\/migrating.json$/,/^\/docs.json$/],le=[{js:()=>import("./index.827050fd.js"),css:["index.651eddda.css"]},{js:()=>import("./index.d0e59487.js"),css:["index.651eddda.css"]},{js:()=>import("./index.b708c54c.js"),css:["index.651eddda.css"]}],ie=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/migrating\/?$/,parts:[{i:1}]},{pattern:/^\/docs\/?$/,parts:[{i:2}]}];const ue="undefined"!=typeof __SAPPER__&&__SAPPER__;let pe,fe,he,me=!1,$e=[],de="{}";const ge={page:q({}),preloading:q(null),session:q(ue&&ue.session)};let ve,ye;ge.session.subscribe(async e=>{if(ve=e,!me)return;ye=!0;const t=Re(new URL(location.href)),r=fe={},{redirect:s,props:n,branch:a}=await je(t);r===fe&&await Le(s,a,n,t.page)});let be,we=null;let Ee,Se=1;const xe="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},Pe={};function _e(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(s):t[r]=s}),t}function Re(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ue.baseUrl))return null;let t=e.pathname.slice(ue.baseUrl.length);if(""===t&&(t="/"),!ce.some(e=>e.test(t)))for(let r=0;r<ie.length;r+=1){const s=ie[r],n=s.pattern.exec(t);if(n){const r=_e(e.search),a=s.parts[s.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:r,params:o};return{href:e.href,route:s,match:n,page:c}}}}function ke(){return{x:pageXOffset,y:pageYOffset}}async function Ae(e,t,r,s){if(t)Ee=t;else{const e=ke();Pe[Ee]=e,t=Ee=++Se,Pe[Ee]=r?e:{x:0,y:0}}Ee=t,pe&&ge.preloading.set(!0);const n=we&&we.href===e.href?we.promise:je(e);we=null;const a=fe={},{redirect:o,props:c,branch:l}=await n;if(a===fe&&(await Le(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=Pe[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Pe[Ee]=e,e&&scrollTo(e.x,e.y)}}async function Le(e,t,r,s){if(e)return function(e,t={replaceState:!1}){const r=Re(new URL(e,document.baseURI));return r?(xe[t.replaceState?"replaceState":"pushState"]({id:Ee},"",e),Ae(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ge.page.set(s),ge.preloading.set(!1),pe)pe.$set(r);else{r.stores={page:{subscribe:ge.page.subscribe},preloading:{subscribe:ge.preloading.subscribe},session:ge.session},r.level0={props:await he};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)qe(e.nextSibling);qe(e),qe(t)}pe=new oe({target:be,props:r,hydrate:!0})}$e=t,de=JSON.stringify(s.query),me=!0,ye=!1}async function je(e){const{route:t,page:r}=e,s=r.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;he||(he=ue.preloaded[0]||U.call(o,{host:r.host,path:r.path,query:r.query,params:{}},ve));let l=1;try{const n=JSON.stringify(r.query),i=t.pattern.exec(r.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const p=s[c];if(function(e,t,r,s){if(s!==de)return!0;const n=$e[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0))}(c,p,i,n)&&(u=!0),a.segments[l]=s[c+1],!t)return{segment:p};const f=l++;if(!ye&&!u&&$e[c]&&$e[c].part===t.i)return $e[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Ce);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(le[t.i]);let $;return $=me||!ue.preloaded[c+1]?m?await m.call(o,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},ve):{}:ue.preloaded[c+1],a[`level${f}`]={component:h,props:$,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Ce(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=()=>e(),s.onerror=r,document.head.appendChild(s)})}function qe(e){e.parentNode.removeChild(e)}function Ne(e){const t=Re(new URL(e,document.baseURI));if(t)return we&&e===we.href||function(e,t){we={href:e,promise:t}}(e,je(t)),we.promise}let De;function Ue(e){clearTimeout(De),De=setTimeout(()=>{Ie(e)},20)}function Ie(e){const t=He(e.target);t&&"prefetch"===t.rel&&Ne(t.href)}function Oe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=He(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=Re(n);if(a){Ae(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),xe.pushState({id:Ee},"",n.href)}}function He(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Te(e){if(Pe[Ee]=ke(),e.state){const t=Re(new URL(location.href));t?Ae(t,e.state.id):location.href=location.href}else(function(e){Ee=e})(Se=Se+1),xe.replaceState({id:Ee},"",location.href)}const Be=()=>N(D);var Ge;Ge={target:document.querySelector("#sapper")},"scrollRestoration"in xe&&(xe.scrollRestoration="manual"),function(e){be=e}(Ge.target),addEventListener("click",Oe),addEventListener("popstate",Te),addEventListener("touchstart",Ie),addEventListener("mousemove",Ue),Promise.resolve().then(()=>{const{hash:e,href:t}=location;xe.replaceState({id:Se},"",t);const r=new URL(location.href);if(ue.error)return function(e){const{host:t,pathname:r,search:s}=location,{session:n,preloaded:a,status:o,error:c}=ue;he||(he=a&&a[0]),Le(null,[],{error:c,status:o,session:n,level0:{props:he},level1:{props:{status:o,error:c},component:ee},segments:a},{host:t,path:r,query:_e(s),params:{}})}();const s=Re(r);return s?Ae(s,Se,!0,e):void 0});
