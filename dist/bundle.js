/*! @fliegwerk/search-popup v1.0.2. Copyright (c) 2021 by Pablo Klaschka (MIT Licensed). See oss-licenses.json for licenses of open-source projects used and packaged here. */(()=>{"use strict";var e={"./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var o=t(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),r=t.n(o),i=t(/*! ../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=t.n(i)()(r());s.push([e.id,"* {\n\tbox-sizing: border-box;\n}\n\n.search-dialog {\n\tborder-radius: 1em;\n\twidth: 480px;\n\tmax-width: 80%;\n\tposition: fixed;\n\ttop: calc(15vh - 1em);\n\tleft: 50%;\n\ttransform: translate(-50%);\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tz-index: 1600;\n\tbackground: white;\n\tpadding: 1em;\n}\n\n.search-dialog * {\n\tbox-sizing: border-box;\n}\n\n.search-dialog > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 70vh;\n\theight: 100%;\n}\n\n.search-dialog table,\n.search-dialog input,\n.search-dialog button,\n.search-dialog [type='search'] {\n\twidth: 100%;\n}\n\n.search-dialog form {\n\tbackground: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n}\n\n.search-dialog ul {\n\toverflow: auto;\n\tpadding: 0;\n\tmargin: 1rem 0;\n}\n\n.search-dialog ul li {\n\tlist-style-type: none;\n}\n\n.search-dialog ul li.active a {\n\tbackground: #eee;\n}\n\n.search-dialog ul li a {\n\tcolor: inherit !important;\n\ttext-decoration: none;\n\tdisplay: block;\n}\n\n.search-dialog ul li a:hover {\n\ttext-decoration: none;\n}\n\n.backdrop {\n\tbackground: rgba(0, 0, 0, 0.4);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 1500;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;CACC,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,cAAc;CACd,eAAe;CACf,qBAAqB;CACrB,SAAS;CACT,0BAA0B;CAC1B,SAAS;CACT,sBAAsB;CACtB,aAAa;CACb,iBAAiB;CACjB,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;CAChB,YAAY;AACb;;AAEA;;;;CAIC,WAAW;AACZ;;AAEA;CACC,uBAAuB;CACvB,SAAS;CACT,UAAU;CACV,YAAY;AACb;;AAEA;CACC,cAAc;CACd,UAAU;CACV,cAAc;AACf;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,yBAAyB;CACzB,qBAAqB;CACrB,cAAc;AACf;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,8BAA8B;CAC9B,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,aAAa;AACd",sourcesContent:["* {\n\tbox-sizing: border-box;\n}\n\n.search-dialog {\n\tborder-radius: 1em;\n\twidth: 480px;\n\tmax-width: 80%;\n\tposition: fixed;\n\ttop: calc(15vh - 1em);\n\tleft: 50%;\n\ttransform: translate(-50%);\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tz-index: 1600;\n\tbackground: white;\n\tpadding: 1em;\n}\n\n.search-dialog * {\n\tbox-sizing: border-box;\n}\n\n.search-dialog > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 70vh;\n\theight: 100%;\n}\n\n.search-dialog table,\n.search-dialog input,\n.search-dialog button,\n.search-dialog [type='search'] {\n\twidth: 100%;\n}\n\n.search-dialog form {\n\tbackground: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n}\n\n.search-dialog ul {\n\toverflow: auto;\n\tpadding: 0;\n\tmargin: 1rem 0;\n}\n\n.search-dialog ul li {\n\tlist-style-type: none;\n}\n\n.search-dialog ul li.active a {\n\tbackground: #eee;\n}\n\n.search-dialog ul li a {\n\tcolor: inherit !important;\n\ttext-decoration: none;\n\tdisplay: block;\n}\n\n.search-dialog ul li a:hover {\n\ttext-decoration: none;\n}\n\n.backdrop {\n\tbackground: rgba(0, 0, 0, 0.4);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: 1500;\n}\n"],sourceRoot:""}]);const u=s},"./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/e=>{function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done)&&(t.push(s.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}e.exports=function(e){var t=n(e,4),o=t[1],r=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),u="/*# ".concat(s," */"),l=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([u]).join("\n")}return[o].join("\n")}},"./node_modules/preact-custom-element/dist/preact-custom-element.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/preact-custom-element/dist/preact-custom-element.esm.js ***!
  \******************************************************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e){this.getChildContext=function(){return e.context};var n=e.children,t=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n.indexOf(t=i[o])>=0||(r[t]=e[t]);return r}(e,["context","children"]);return(0,o.cloneElement)(n,t)}function s(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=(0,o.h)(i,r({},this._props,{context:e.detail.context}),function e(n,t){if(3===n.nodeType)return n.data;if(1!==n.nodeType)return null;var r=[],i={},s=0,l=n.attributes,a=n.childNodes;for(s=l.length;s--;)"slot"!==l[s].name&&(i[l[s].name]=l[s].value,i[u(l[s].name)]=l[s].value);for(s=a.length;s--;){var _=e(a[s],null),d=a[s].slot;d?i[d]=(0,o.h)(c,{name:d},_):r[s]=_}var f=t?(0,o.h)(c,null,r):r;return(0,o.h)(t||n.nodeName.toLowerCase(),i,f)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?o.hydrate:o.render)(this._vdom,this._root)}function u(e){return e.replace(/-(\w)/g,(function(e,n){return n?n.toUpperCase():""}))}function l(e,n,t){if(this._vdom){var r={};r[e]=t=null==t?void 0:t,r[u(e)]=t,this._vdom=(0,o.cloneElement)(this._vdom,r),(0,o.render)(this._vdom,this._root)}}function a(){(0,o.render)(this._vdom=null,this._root)}function c(e,n){var t=this;return(0,o.h)("slot",r({},e,{ref:function(e){e?(t.ref=e,t._listener||(t._listener=function(e){e.stopPropagation(),e.detail.context=n},e.addEventListener("_preact",t._listener))):t.ref.removeEventListener("_preact",t._listener)}}))}function _(e,n,t,o){function r(){var n=Reflect.construct(HTMLElement,[],r);return n._vdomComponent=e,n._root=o&&o.shadow?n.attachShadow({mode:"open"}):n,n}return(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=s,r.prototype.attributeChangedCallback=l,r.prototype.disconnectedCallback=a,t=t||e.observedAttributes||Object.keys(e.propTypes||{}),r.observedAttributes=t,t.forEach((function(e){Object.defineProperty(r.prototype,e,{get:function(){return this._vdom.props[e]},set:function(n){this._vdom?this.attributeChangedCallback(e,null,n):(this._props||(this._props={}),this._props[e]=n,this.connectedCallback());var t=typeof n;null!=n&&"string"!==t&&"boolean"!==t&&"number"!==t||this.setAttribute(e,n)}})})),customElements.define(n||e.tagName||e.displayName||e.name,r)}},"./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/(e,n,t)=>{t.r(n),t.d(n,{render:()=>F,hydrate:()=>U,createElement:()=>p,h:()=>p,Fragment:()=>v,createRef:()=>m,isValidElement:()=>r,Component:()=>A,cloneElement:()=>N,createContext:()=>I,toChildArray:()=>w,options:()=>o});var o,r,i,s,u,l,a={},c=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var o,r,i,s=arguments,u={};for(i in n)"key"==i?o=n[i]:"ref"==i?r=n[i]:u[i]=n[i];if(arguments.length>3)for(t=[t],i=3;i<arguments.length;i++)t.push(s[i]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return h(e,u,o,r,null)}function h(e,n,t,r,i){var s={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++o.__v:i};return null!=o.vnode&&o.vnode(s),s}function m(){return{current:null}}function v(e){return e.children}function A(e,n){this.props=e,this.context=n}function g(e,n){if(null==n)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?g(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function b(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!C.__r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||s)(C)}function C(){for(var e;C.__r=i.length;)e=i.sort((function(e,n){return e.__v.__b-n.__v.__b})),i=[],e.some((function(e){var n,t,o,r,i,s;e.__d&&(i=(r=(n=e).__v).__e,(s=n.__P)&&(t=[],(o=d({},r)).__v=r.__v+1,O(s,r,o,n.__n,void 0!==s.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?g(r):i,r.__h),P(t,r),r.__e!=i&&y(r)))}))}function k(e,n,t,o,r,i,s,u,l,_){var d,f,p,m,A,y,b,C=o&&o.__k||c,k=C.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(m=t.__k[d]=null==(m=n[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?h(null,m,null,null,m):Array.isArray(m)?h(v,{children:m},null,null,null):m.__b>0?h(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(p=C[d])||p&&m.key==p.key&&m.type===p.type)C[d]=void 0;else for(f=0;f<k;f++){if((p=C[f])&&m.key==p.key&&m.type===p.type){C[f]=void 0;break}p=null}O(e,m,p=p||a,r,i,s,u,l,_),A=m.__e,(f=m.ref)&&p.ref!=f&&(b||(b=[]),p.ref&&b.push(p.ref,null,m),b.push(f,m.__c||A,m)),null!=A?(null==y&&(y=A),"function"==typeof m.type&&null!=m.__k&&m.__k===p.__k?m.__d=l=x(m,l,e):l=S(e,m,p,C,A,l),_||"option"!==t.type?"function"==typeof t.type&&(t.__d=l):e.value=""):l&&p.__e==l&&l.parentNode!=e&&(l=g(p))}for(t.__e=y,d=k;d--;)null!=C[d]&&("function"==typeof t.type&&null!=C[d].__e&&C[d].__e==t.__d&&(t.__d=g(o,d+1)),M(C[d],C[d]));if(b)for(d=0;d<b.length;d++)H(b[d],b[++d],b[++d])}function x(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,n="function"==typeof r.type?x(r,n,t):S(t,r,r,e.__k,r.__e,n));return n}function w(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){w(e,n)})):n.push(e)),n}function S(e,n,t,o,r,i){var s,u,l;if(void 0!==n.__d)s=n.__d,n.__d=void 0;else if(null==t||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),s=null;else{for(u=i,l=0;(u=u.nextSibling)&&l<o.length;l+=2)if(u==r)break e;e.insertBefore(r,i),s=i}return void 0!==s?s:r.nextSibling}function j(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||_.test(n)?t:t+"px"}function E(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||j(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||j(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?T:B,i):e.removeEventListener(n,i?T:B,i);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function B(e){this.l[e.type+!1](o.event?o.event(e):e)}function T(e){this.l[e.type+!0](o.event?o.event(e):e)}function O(e,n,t,r,i,s,u,l,a){var c,_,f,p,h,m,g,y,b,C,x,w=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(a=t.__h,l=n.__e=t.__e,n.__h=null,s=[l]),(c=o.__b)&&c(n);try{e:if("function"==typeof w){if(y=n.props,b=(c=w.contextType)&&r[c.__c],C=c?b?b.props.value:c.__:r,t.__c?g=(_=n.__c=t.__c).__=_.__E:("prototype"in w&&w.prototype.render?n.__c=_=new w(y,C):(n.__c=_=new A(y,C),_.constructor=w,_.render=L),b&&b.sub(_),_.props=y,_.state||(_.state={}),_.context=C,_.__n=r,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=w.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=d({},_.__s)),d(_.__s,w.getDerivedStateFromProps(y,_.__s))),p=_.props,h=_.state,f)null==w.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==w.getDerivedStateFromProps&&y!==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,C),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,C)||n.__v===t.__v){_.props=y,_.state=_.__s,n.__v!==t.__v&&(_.__d=!1),_.__v=n,n.__e=t.__e,n.__k=t.__k,_.__h.length&&u.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,C),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(p,h,m)}))}_.context=C,_.props=y,_.state=_.__s,(c=o.__r)&&c(n),_.__d=!1,_.__v=n,_.__P=e,c=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(r=d(d({},r),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(p,h)),x=null!=c&&c.type===v&&null==c.key?c.props.children:c,k(e,Array.isArray(x)?x:[x],n,t,r,i,s,u,l,a),_.base=n.__e,n.__h=null,_.__h.length&&u.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==s&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=D(t.__e,n,t,r,i,s,u,a);(c=o.diffed)&&c(n)}catch(e){n.__v=null,(a||null!=s)&&(n.__e=l,n.__h=!!a,s[s.indexOf(l)]=null),o.__e(e,n,t)}}function P(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function D(e,n,t,o,r,i,s,u){var l,_,d,p,h,m=t.props,v=n.props,A=n.type;if("svg"===A&&(r=!0),null!=i)for(l=0;l<i.length;l++)if(null!=(_=i[l])&&(e==_||_.localName==A)){e=_,i[l]=null;break}if(null==e){if(null===A)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",A):document.createElement(A,v.is&&v),i=null,u=!1}if(null===A)m===v||u&&e.data===v||(e.data=v);else{if(null!=i&&(i=c.slice.call(e.childNodes)),d=(m=t.props||a).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=i)for(m={},h=0;h<e.attributes.length;h++)m[e.attributes[h].name]=e.attributes[h].value;(p||d)&&(p&&(d&&p.__html==d.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||E(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||E(e,i,n[i],t[i],o)}(e,v,m,r,u),p)n.__k=[];else if(l=n.props.children,k(e,Array.isArray(l)?l:[l],n,t,o,r&&"foreignObject"!==A,i,s,e.firstChild,u),null!=i)for(l=i.length;l--;)null!=i[l]&&f(i[l]);u||("value"in v&&void 0!==(l=v.value)&&(l!==e.value||"progress"===A&&!l)&&E(e,"value",l,m.value,!1),"checked"in v&&void 0!==(l=v.checked)&&l!==e.checked&&E(e,"checked",l,m.checked,!1))}return e}function H(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function M(e,n,t){var r,i,s;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||H(r,null,n)),t||"function"==typeof e.type||(t=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&M(r[s],n,t);null!=i&&f(i)}function L(e,n,t){return this.constructor(e,t)}function F(e,n,t){var r,i,s;o.__&&o.__(e,n),i=(r="function"==typeof t)?null:t&&t.__k||n.__k,s=[],O(n,e=(!r&&t||n).__k=p(v,null,[e]),i||a,a,void 0!==n.ownerSVGElement,!r&&t?[t]:i?null:n.firstChild?c.slice.call(n.childNodes):null,s,!r&&t?t:i?i.__e:n.firstChild,r),P(s,e)}function U(e,n){F(e,n,U)}function N(e,n,t){var o,r,i,s=arguments,u=d({},e.props);for(i in n)"key"==i?o=n[i]:"ref"==i?r=n[i]:u[i]=n[i];if(arguments.length>3)for(t=[t],i=3;i<arguments.length;i++)t.push(s[i]);return null!=t&&(u.children=t),h(e.type,u,o||e.key,r||e.ref,null)}function I(e,n){var t={__c:n="__cC"+l++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(b)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}o={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e},__v:0},r=function(e){return null!=e&&void 0===e.constructor},A.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},t),this.props)),e&&d(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),b(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},A.prototype.render=v,i=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C.__r=0,l=0},"./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/(e,n,t)=>{t.r(n),t.d(n,{useState:()=>h,useReducer:()=>m,useEffect:()=>v,useLayoutEffect:()=>A,useRef:()=>g,useImperativeHandle:()=>y,useMemo:()=>b,useCallback:()=>C,useContext:()=>k,useDebugValue:()=>x,useErrorBoundary:()=>w});var o,r,i,s=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),u=0,l=[],a=s.options.__b,c=s.options.__r,_=s.options.diffed,d=s.options.__c,f=s.options.unmount;function p(e,n){s.options.__h&&s.options.__h(r,e,u||n),u=0;var t=r.__H||(r.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function h(e){return u=1,m(O,e)}function m(e,n,t){var i=p(o++,2);return i.t=e,i.__c||(i.__=[t?t(n):O(void 0,n),function(e){var n=i.t(i.__[0],e);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=r),i.__}function v(e,n){var t=p(o++,3);!s.options.__s&&T(t.__H,n)&&(t.__=e,t.__H=n,r.__H.__h.push(t))}function A(e,n){var t=p(o++,4);!s.options.__s&&T(t.__H,n)&&(t.__=e,t.__H=n,r.__h.push(t))}function g(e){return u=5,b((function(){return{current:e}}),[])}function y(e,n,t){u=6,A((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))}function b(e,n){var t=p(o++,7);return T(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function C(e,n){return u=8,b((function(){return e}),n)}function k(e){var n=r.context[e.__c],t=p(o++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(r)),n.props.value):e.__}function x(e,n){s.options.useDebugValue&&s.options.useDebugValue(n?n(e):e)}function w(e){var n=p(o++,10),t=h();return n.__=e,r.componentDidCatch||(r.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function S(){l.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(E),e.__H.__h.forEach(B),e.__H.__h=[]}catch(n){e.__H.__h=[],s.options.__e(n,e.__v)}})),l=[]}s.options.__b=function(e){r=null,a&&a(e)},s.options.__r=function(e){c&&c(e),o=0;var n=(r=e.__c).__H;n&&(n.__h.forEach(E),n.__h.forEach(B),n.__h=[])},s.options.diffed=function(e){_&&_(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==l.push(n)&&i===s.options.requestAnimationFrame||((i=s.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),j&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);j&&(n=requestAnimationFrame(t))})(S)),r=void 0},s.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(E),e.__h=e.__h.filter((function(e){return!e.__||B(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],s.options.__e(t,e.__v)}})),d&&d(e,n)},s.options.unmount=function(e){f&&f(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(E)}catch(e){s.options.__e(e,n.__v)}};var j="function"==typeof requestAnimationFrame;function E(e){var n=r;"function"==typeof e.__c&&e.__c(),r=n}function B(e){var n=r;e.__c=e.__(),r=n}function T(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function O(e,n){return"function"==typeof n?n(e):n}},"./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var o=t(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(o),i=t(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */"./node_modules/css-loader/dist/cjs.js!./src/index.css"),s={insert:"head",singleton:!1};r()(i.default,s);const u=i.default.locals||{}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/(e,n,t)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function u(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],l=n.base?i[0]+n.base:i[0],a=t[l]||0,c="".concat(l," ").concat(a);t[l]=a+1;var _=u(c),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==_?(s[_].references++,s[_].updater(d)):s.push({identifier:c,updater:m(d,n),references:1}),o.push(c)}return o}function a(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var c,_=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function d(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=_(n,r);else{var i=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(e,n){var t,o,r;if(n.singleton){var i=h++;t=p||(p=a(n)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=a(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=u(t[o]);s[r].references--}for(var i=l(e,n),a=0;a<t.length;a++){var c=u(t[a]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}t=i}}}},"./src/components/dialog-content.tsx":
/*!*******************************************!*\
  !*** ./src/components/dialog-content.tsx ***!
  \*******************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),r=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js"),i=t(/*! ./search-result */"./src/components/search-result.tsx"),s=t(/*! ../hooks/use-on-change-callback */"./src/hooks/use-on-change-callback.tsx"),u=t(/*! ./preface */"./src/components/preface.tsx"),l=t(/*! ../hooks/use-on-submit-callback */"./src/hooks/use-on-submit-callback.tsx"),a=t(/*! ./form */"./src/components/form.tsx");function c(e){var n=(0,r.useState)([]),t=n[0],c=n[1],_=(0,r.useState)(""),d=_[0],f=_[1],p=(0,r.useRef)(null),h=(0,s.useOnChangeCallback)(f,c,e,p),m=(0,l.useOnSubmitCallback)(t,e,h);return(0,o.h)("div",null,(0,o.h)(u.Preface,null),function(e){var n=e.onSubmit,t=e.query,r=e.onChange,i=e.props,s=e.results;return(0,o.h)(a.Form,{onSubmit:n,query:t,onChange:r,index:i.index,up:i.up,down:i.down,resultsLength:s.length})}({onSubmit:m,query:d,onChange:h,props:e,results:t}),function(e,n,t){return(0,o.h)("ul",{ref:e},n.map((function(e,n){return(0,o.h)(i.default,{key:e.url,active:n===t.index,result:e})})))}(p,t,e))}},"./src/components/form.tsx":
/*!*********************************!*\
  !*** ./src/components/form.tsx ***!
  \*********************************/(e,n,t)=>{t.r(n),t.d(n,{Form:()=>s});var o=t(/*! ./search-input */"./src/components/search-input.tsx"),r=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),i=t(/*! ../hooks/use-form-key-down-handler */"./src/hooks/use-form-key-down-handler.tsx");function s(e){var n=(0,i.useFormKeyDownHandler)(e);return(0,r.h)("form",{id:"search-form",onSubmit:e.onSubmit},(0,r.h)(o.SearchInput,{value:e.query,onInput:function(n){return e.onChange(n.target.value)},onKeyDown:n}))}},"./src/components/preface.tsx":
/*!************************************!*\
  !*** ./src/components/preface.tsx ***!
  \************************************/(e,n,t)=>{t.r(n),t.d(n,{Preface:()=>r});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js");function r(){return(0,o.h)("div",null,(0,o.h)("h2",null,"Search"),(0,o.h)("p",null,"Press ",(0,o.h)("kbd",null,"ESC")," to exit, ",(0,o.h)("kbd",null,"↓"),", ",(0,o.h)("kbd",null,"↑")," to navigate, and ",(0,o.h)("kbd",null,"Return")," accept."))}},"./src/components/search-input.tsx":
/*!*****************************************!*\
  !*** ./src/components/search-input.tsx ***!
  \*****************************************/(e,n,t)=>{t.r(n),t.d(n,{SearchInput:()=>i});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),r=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function i(e){var n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current&&n.current.focus()}),[n]),(0,o.h)("input",{id:"search-input",autoComplete:"off",type:"search",autoFocus:!0,value:e.value,onInput:e.onInput,onKeyDown:e.onKeyDown,ref:n})}},"./src/components/search-popup.tsx":
/*!*****************************************!*\
  !*** ./src/components/search-popup.tsx ***!
  \*****************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),r=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js"),i=t(/*! ./dialog-content */"./src/components/dialog-content.tsx"),s=t(/*! ../lib/registerWindowSearchFunction */"./src/lib/registerWindowSearchFunction.tsx"),u=t(/*! ../hooks/use-open-shortcut-listener */"./src/hooks/use-open-shortcut-listener.tsx"),l=t(/*! ../hooks/use-dialog-state */"./src/hooks/use-dialog-state.tsx"),a=function(){return[]};const c=function(e){var n=(0,r.useState)(0),t=n[0],c=n[1],_=(0,l.useDialogState)(),d=_.isOpen,f=_.onOpen,p=_.onClose;return(0,s.registerWindowSearchFunction)(e,c,f),(0,u.useOpenShortcutListener)(c,f,p),(0,o.h)("div",{id:"search-wrapper"},d&&(0,o.h)(o.Fragment,null,(0,o.h)("div",{class:"backdrop",onClick:p}," "),function(e,n,t,r){var s;return(0,o.h)("div",{class:"search-dialog shadowed"},(0,o.h)(i.default,{onClose:e,searchFn:null!==(s=window[n.search])&&void 0!==s?s:a,index:t,up:function(){return r(t-1)},down:function(){return r(t+1)},reset:function(){return r(0)}}))}(p,e,t,c)))}},"./src/components/search-result.tsx":
/*!******************************************!*\
  !*** ./src/components/search-result.tsx ***!
  \******************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var o=t(/*! preact */"./node_modules/preact/dist/preact.module.js"),r=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function i(e){var n=e.active,t=e.result,i=(0,r.useRef)(null);return(0,r.useLayoutEffect)((function(){i.current&&n&&i.current.scrollIntoView({behavior:"smooth",block:"nearest"})}),[n,i]),(0,o.h)("li",{key:t.url,"aria-type":"options","aria-selected":n,className:n?"active":""},(0,o.h)("a",{href:t.url,ref:i},(0,o.h)("p",null,(0,o.h)("small",null,t.url)),(0,o.h)("h5",null,t.name),(0,o.h)("p",null,t.text)))}},"./src/hooks/use-dialog-state.tsx":
/*!****************************************!*\
  !*** ./src/hooks/use-dialog-state.tsx ***!
  \****************************************/(e,n,t)=>{t.r(n),t.d(n,{useDialogState:()=>r});var o=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function r(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return{isOpen:n,onOpen:function(){return t(!0)},onClose:function(){return t(!1)}}}},"./src/hooks/use-form-key-down-handler.tsx":
/*!*************************************************!*\
  !*** ./src/hooks/use-form-key-down-handler.tsx ***!
  \*************************************************/(e,n,t)=>{t.r(n),t.d(n,{useFormKeyDownHandler:()=>r});var o=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function r(e){return(0,o.useCallback)((function(n){"ArrowUp"===n.code?(n.preventDefault(),e.index>0&&e.up()):"ArrowDown"===n.code&&(n.preventDefault(),e.index<e.resultsLength-1&&e.down())}),[e.index,e.up,e.down,e.resultsLength])}},"./src/hooks/use-on-change-callback.tsx":
/*!**********************************************!*\
  !*** ./src/hooks/use-on-change-callback.tsx ***!
  \**********************************************/(e,n,t)=>{t.r(n),t.d(n,{useOnChangeCallback:()=>r});var o=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function r(e,n,t,r){return(0,o.useCallback)((function(o){var i;e(o),n(t.searchFn(o)),t.reset(),null===(i=r.current)||void 0===i||i.scrollTo({behavior:"smooth",top:0})}),[e,t.reset])}},"./src/hooks/use-on-submit-callback.tsx":
/*!**********************************************!*\
  !*** ./src/hooks/use-on-submit-callback.tsx ***!
  \**********************************************/(e,n,t)=>{t.r(n),t.d(n,{useOnSubmitCallback:()=>r});var o=t(/*! ../lib/open-page */"./src/lib/open-page.tsx");function r(e,n,t){return function(r){r.preventDefault();var i=e[n.index].url.split("#"),s=i[0],u=i[1];(0,o.openPage)(s,u),n.onClose(),t("")}}},"./src/hooks/use-open-shortcut-listener.tsx":
/*!**************************************************!*\
  !*** ./src/hooks/use-open-shortcut-listener.tsx ***!
  \**************************************************/(e,n,t)=>{t.r(n),t.d(n,{useOpenShortcutListener:()=>r});var o=t(/*! preact/hooks */"./node_modules/preact/hooks/dist/hooks.module.js");function r(e,n,t){(0,o.useLayoutEffect)((function(){document.onkeydown=function(o){o.ctrlKey&&"k"===o.key?(o.preventDefault(),e(0),n()):"Escape"===o.key&&(o.preventDefault(),t())}}),[])}},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/(e,n,t)=>{t.r(n);var o=t(/*! preact-custom-element */"./node_modules/preact-custom-element/dist/preact-custom-element.esm.js"),r=t(/*! ./components/search-popup */"./src/components/search-popup.tsx");t(/*! ./index.css */"./src/index.css");
/*!
 * @licence Copyright 2020 Pablo Klaschka. MIT-Licensed.
 */
window.openSearch=function(){},(0,o.default)(r.default,"search-popup",["search"])},"./src/lib/open-page.tsx":
/*!*******************************!*\
  !*** ./src/lib/open-page.tsx ***!
  \*******************************/(e,n,t)=>{function o(e,n){!function(e){return(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")!==(e.endsWith("/")?e:e+"/")}(e)?window.location.hash=n:window.location.assign(e+"#"+n)}t.r(n),t.d(n,{openPage:()=>o})},"./src/lib/registerWindowSearchFunction.tsx":
/*!**************************************************!*\
  !*** ./src/lib/registerWindowSearchFunction.tsx ***!
  \**************************************************/(e,n,t)=>{function o(e,n,t){void 0!==window[e.search]?window[e.search]():console.error("Search function passed to <search-popup> is undefined!"),window.openSearch=function(){n(0),t()}}t.r(n),t.d(n,{registerWindowSearchFunction:()=>o})}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t("./src/index.ts")})();
//# sourceMappingURL=bundle.js.map