"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6267],{16267:function(Ft,be,g){g.d(be,{f6:function(){return Lt},vJ:function(){return Rt},kc:function(){return Ot},iv:function(){return It},Fg:function(){return Nt}});var Pe="acss",je=g(91150);function te(n,e,t){return e=(0,je.Z)(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function re(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?re(Object(t),!0).forEach(function(r){te(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var m=g(50959),we=g(68190),Me=g(90396),U=g(72955),R=g(60806),L=g(18246);function ne(n,e){if(n.inserted[e.name]===void 0)return n.insert("",e,n.sheet,!0)}function ae(n,e,t){var r=[],a=(0,L.fp)(n,r,t);return r.length<2?t:a+e(r)}var X=function(e){var t=(0,U.Z)(e);t.sheet.speedy=function(c){this.isSpeedy=c},t.compat=!0;var r=function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];var f=(0,R.O)(u,t.registered,void 0);return(0,L.My)(t,f,!1),t.key+"-"+f.name},a=function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];var f=(0,R.O)(u,t.registered),d="animation-"+f.name;return ne(t,{name:f.name,styles:"@keyframes "+d+"{"+f.styles+"}"}),d},s=function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];var f=(0,R.O)(u,t.registered);ne(t,f)},o=function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];return ae(t.registered,r,ke(u))};return{css:r,cx:o,injectGlobal:s,keyframes:a,hydrate:function(l){l.forEach(function(u){t.inserted[u]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:L.fp.bind(null,t.registered),merge:ae.bind(null,t.registered,r)}},ke=function n(e){for(var t="",r=0;r<e.length;r++){var a=e[r];if(a!=null){var s=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))s=n(a);else{s="";for(var o in a)a[o]&&o&&(s&&(s+=" "),s+=o)}break}default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},k=X({key:"css"}),zt=k.flush,Bt=k.hydrate,Zt=k.cx,Gt=k.merge,Ht=k.getRegisteredStyles,$t=k.injectGlobal,Wt=k.keyframes,Vt=k.css,Ut=k.sheet,Ee=k.cache,Ae=function(){function n(){(0,we.Z)(this,n),te(this,"_cacheList",[Ee])}return(0,Me.Z)(n,[{key:"add",value:function(t){var r=this.getCache(t.key);return r||(this._cacheList.push(t),t)}},{key:"delete",value:function(t){this._cacheList=this._cacheList.filter(function(r){return r.key!==t.key})}},{key:"hasCache",value:function(t){return this._cacheList.some(function(r){return r.key===t.key})}},{key:"getCache",value:function(t){return this._cacheList.find(function(r){return r.key===t})}},{key:"getCacheList",value:function(){return this._cacheList}}]),n}(),se=typeof document<"u",oe=function(e,t){return"".concat(e,"-").concat(t)},_e=function(e,t,r,a){var s=a.hashPriority||"high";(0,L.hC)(e,t,r);var o=".".concat(oe(e.key,t.name)),c=s==="low"?":where(".concat(o,")"):o;if(e.inserted[t.name]===void 0){var l="",u=t;do{var i=e.insert(t===u?c:"",u,e.sheet,!0);!se&&i!==void 0&&(l+=i),u=u.next}while(u!==void 0);if(!se&&l.length!==0)return l}},Z=g(63509),Y=function(e){return(0,Z.Z)(e)==="object"&&"styles"in e&&"name"in e&&"toString"in e},Oe=function n(e){for(var t="",r=0;r<e.length;r++){var a=e[r];if(a!==null){var s=void 0;switch((0,Z.Z)(a)){case"boolean":break;case"object":{if(Array.isArray(a))s=n(a);else{s="";for(var o in a)a[o]&&o&&(s&&(s+=" "),s+=o)}break}default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},Re=function(e,t,r){var a=[],s=(0,L.fp)(e,a,r);return a.length<2?r:s+t(a)},Ie=function(e,t){return function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var o=(0,R.O)(a,e.registered,void 0);return _e(e,o,!1,t),oe(e.key,o.name)}},Le=function(e,t){return function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var o=a.map(function(c){return Y(c)?t(c):c});return Re(e.registered,t,Oe(o))}},ie=function(e,t){var r=Ie(e,{hashPriority:t.hashPriority||"high",label:t.label}),a=Le(e,r);return{css:r,cx:a}},z=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,R.O)(t)},Ne=function(e){return(0,m.createContext)(e)},De=g(13238),ce=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var a=e(r);return t.set(r,a),a}},le=g(46096),ue=!0,Fe={}.hasOwnProperty,B=m.createContext(typeof HTMLElement<"u"?(0,U.Z)({key:"css"}):null),Xt=B.Provider,Yt=function(){return useContext(B)},me=function(e){return(0,m.forwardRef)(function(t,r){var a=(0,m.useContext)(B);return e(t,a,r)})};ue||(me=function(e){return function(t){var r=(0,m.useContext)(B);return r===null?(r=(0,U.Z)({key:"css"}),m.createElement(B.Provider,{value:r},e(t,r))):e(t,r)}});var N=m.createContext({}),Kt=function(){return React.useContext(N)},ze=function(e,t){if(typeof t=="function"){var r=t(e);return r}return(0,De.Z)({},e,t)},Be=ce(function(n){return ce(function(e){return ze(n,e)})}),Ze=function(e){var t=m.useContext(N);return e.theme!==t&&(t=Be(t)(e.theme)),m.createElement(N.Provider,{value:t},e.children)};function Qt(n){var e=n.displayName||n.name||"Component",t=function(s,o){var c=React.useContext(N);return React.createElement(n,_extends({theme:c,ref:o},s))},r=React.forwardRef(t);return r.displayName="WithTheme("+e+")",hoistNonReactStatics(r,n)}var fe=function(e){var t=e.split(".");return t[t.length-1]},Ge=function(e){var t=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);if(t||(t=/^([A-Za-z0-9$.]+)@/.exec(e),t))return fe(t[1])},He=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),$e=function(e){return e.replace(/\$/g,"-")},Jt=function(e){if(e)for(var t=e.split(`
`),r=0;r<t.length;r++){var a=Ge(t[r]);if(a){if(He.has(a))break;if(/^[A-Z]/.test(a))return $e(a)}}},We="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qt="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",er=function(e,t){var r={};for(var a in t)Fe.call(t,a)&&(r[a]=t[a]);if(r[We]=e,!1)var s;return r},tr=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return registerStyles(t,r,a),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(t,r,a)}),null},rr=null,nr=null,ar=g(72535),sr={name:"@emotion/react",version:"11.11.4",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},or=function(e,t){var r=arguments;if(t==null||!hasOwn.call(t,"css"))return React.createElement.apply(void 0,r);var a=r.length,s=new Array(a);s[0]=Emotion,s[1]=createEmotionProps(e,t);for(var o=2;o<a;o++)s[o]=r[o];return React.createElement.apply(null,s)},ir=!1,Ve=me(function(n,e){var t=n.styles,r=(0,R.O)([t],void 0,m.useContext(N));if(!ue){for(var a,s=r.name,o=r.styles,c=r.next;c!==void 0;)s+=" "+c.name,o+=c.styles,c=c.next;var l=e.compat===!0,u=e.insert("",{name:s,styles:o},e.sheet,l);return l?null:m.createElement("style",(a={},a["data-emotion"]=e.key+"-global "+s,a.dangerouslySetInnerHTML={__html:u},a.nonce=e.sheet.nonce,a))}var i=m.useRef();return(0,le.j)(function(){var f=e.key+"-global",d=new e.sheet.constructor({key:f,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),h=!1,p=document.querySelector('style[data-emotion="'+f+" "+r.name+'"]');return e.sheet.tags.length&&(d.before=e.sheet.tags[0]),p!==null&&(h=!0,p.setAttribute("data-emotion",f),d.hydrate([p])),i.current=[d,h],function(){d.flush()}},[e]),(0,le.j)(function(){var f=i.current,d=f[0],h=f[1];if(h){f[1]=!1;return}if(r.next!==void 0&&(0,L.My)(e,r.next,!0),d.tags.length){var p=d.tags[d.tags.length-1].nextElementSibling;d.before=p,d.flush()}e.insert("",r,d,!1)},[e,r.name]),null});function Ue(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return serializeStyles(e)}var cr=function(){var e=Ue.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},lr=function n(e){for(var t=e.length,r=0,a="";r<t;r++){var s=e[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=n(s);else{o="";for(var c in s)s[c]&&c&&(o&&(o+=" "),o+=c)}break}default:o=s}o&&(a&&(a+=" "),a+=o)}}return a};function ur(n,e,t){var r=[],a=getRegisteredStyles(n,r,t);return r.length<2?t:a+e(r)}var mr=function(e){var t=e.cache,r=e.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var a=0;a<r.length;a++)insertStyles(t,r[a],!1)}),null},fr=null;if(!1)var dr,hr,vr,yr;var j=g(11527),Xe=function(e){return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(0,m.memo)(function(s){var o=e();return(0,j.jsx)(Ve,{styles:(0,R.O)(r,void 0,v(v({},s),{},{theme:o}))})})}},Ye=function(e){return function(t){var r=e(t);return function(a){var s=r(a),o=s.styles;return o}}};function Ke(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function G(n,e){if(n==null)return{};var t=Ke(n,e),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)r=s[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var Qe=g(15241),Je=["children","prefix","speedy","getStyleManager","container","nonce","insertionPoint","stylisPlugins","linters"],qe=function(e){return(0,m.memo)(function(t){var r=t.children,a=t.prefix,s=t.speedy,o=t.getStyleManager,c=t.container,l=t.nonce,u=t.insertionPoint,i=t.stylisPlugins,f=t.linters,d=G(t,Je),h=(0,m.useContext)(e),p=a??h.sheet.key,x=c??h.sheet.container,C=s??h.sheet.isSpeedy,S=(0,m.useMemo)(function(){var T=!1,b=X({speedy:C??T,key:p,container:x,nonce:l,insertionPoint:u,stylisPlugins:i});if(typeof g.g<"u"){var E=g.g.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;E&&(b.cache=E.add(b.cache))}return b},[p,C,x,l,u,i]);(0,m.useEffect)(function(){o==null||o(S)},[S]);var y=(0,j.jsx)(e.Provider,{value:S,children:r});return Object.keys(d).length||x?(0,j.jsx)(Qe.V9,v(v({linters:f,container:x},d),{},{children:y})):y})};function et(n){if(Array.isArray(n))return n}function tt(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,s,o,c=[],l=!0,u=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=s.call(t)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(i){u=!0,a=i}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}var rt=g(17229);function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,e){return et(n)||tt(n,e)||(0,rt.Z)(n,e)||nt()}var K=g(86231),Q=function(){var e=K.Z.useToken(),t=e.token;return t},at=function(e){return v(v({},e),{},{mobile:e.xs,tablet:e.md,laptop:e.lg,desktop:e.xxl})},st=function(){var e=Q(),t={xs:"@media (max-width: ".concat(e.screenXSMax,"px)"),sm:"@media (max-width: ".concat(e.screenSMMax,"px)"),md:"@media (max-width: ".concat(e.screenMDMax,"px)"),lg:"@media (max-width: ".concat(e.screenLGMax,"px)"),xl:"@media (max-width: ".concat(e.screenXLMax,"px)"),xxl:"@media (min-width: ".concat(e.screenXXLMin,"px)")};return(0,m.useMemo)(function(){return at(t)},[e])},ot=function(e,t){return Object.entries(e).map(function(r){var a=A(r,2),s=a[0],o=a[1],c=o;return Y(o)||(c=z(o)),t[s]?"".concat(t[s]," {").concat(c.styles,"}"):""}).join("")},it=["stylish","appearance","isDarkMode","prefixCls","iconPrefixCls"],ct=["prefixCls","iconPrefixCls"],lt=function(e){var t=e.hashPriority,r=e.useTheme,a=e.EmotionContext;return function(s,o){var c=o==null?void 0:o.__BABEL_FILE_NAME__,l=!!c;return function(u){var i=r(),f=(0,m.useContext)(a),d=f.cache,h=ie(d,{hashPriority:(o==null?void 0:o.hashPriority)||t,label:o==null?void 0:o.label}),p=h.cx,x=h.css,C=st(),S=(0,m.useMemo)(function(){var y;if(s instanceof Function){var T=i.stylish,b=i.appearance,E=i.isDarkMode,M=i.prefixCls,P=i.iconPrefixCls,I=G(i,it),O=function($){return ot($,C)};Object.assign(O,C),y=s({token:I,stylish:T,appearance:b,isDarkMode:E,prefixCls:M,iconPrefixCls:P,cx:p,css:z,responsive:O},u)}else y=s;return(0,Z.Z)(y)==="object"&&(Y(y)?y=x(y):y=Object.fromEntries(Object.entries(y).map(function(F){var $=A(F,2),W=$[0],V=$[1],Dt=l?"".concat(c,"-").concat(W):void 0;return(0,Z.Z)(V)==="object"?l?[W,x(V,"label:".concat(Dt))]:[W,x(V)]:[W,V]}))),y},[u,i]);return(0,m.useMemo)(function(){var y=i.prefixCls,T=i.iconPrefixCls,b=G(i,ct);return{styles:S,cx:p,theme:b,prefixCls:y,iconPrefixCls:T}},[S,i])}}},de=Ze,J=N,pr=function(e){if(!e.ThemeContext)throw"ThemeContext is required. Please check your config.";J=e.ThemeContext,de=createStyledThemeProvider(e)},he=function(e){if(e.ThemeProvider)return e.ThemeProvider;var t=e.ThemeContext;return function(r){return(0,j.jsx)(t.Provider,{value:r.theme,children:r.children})}},ut=g(91131),mt=g(21782),ft=g(98203),dt=g(82921),ve=g(30027),D=function(e){return typeof window<"u"?matchMedia&&matchMedia("(prefers-color-scheme: ".concat(e,")")):{matches:!1}},q,ye=(0,m.createContext)({appearance:"light",setAppearance:function(){},isDarkMode:!1,themeMode:"light",setThemeMode:function(){},browserPrefers:(q=D("dark"))!==null&&q!==void 0&&q.matches?"dark":"light"}),H=function(){return(0,m.useContext)(ye)},pe=(0,m.memo)(function(n){var e=n.children,t=n.theme,r=n.prefixCls,a=n.getStaticInstance,s=n.staticInstanceConfig,o=H(),c=o.appearance,l=o.isDarkMode,u=mt.ZP.useMessage(s==null?void 0:s.message),i=A(u,2),f=i[0],d=i[1],h=ft.ZP.useNotification(s==null?void 0:s.notification),p=A(h,2),x=p[0],C=p[1],S=dt.Z.useModal(),y=A(S,2),T=y[0],b=y[1];(0,m.useEffect)(function(){a==null||a({message:f,modal:T,notification:x})},[]);var E=(0,m.useMemo)(function(){var M=l?K.Z.darkAlgorithm:K.Z.defaultAlgorithm,P=t;if(typeof t=="function"&&(P=t(c)),!P)return{algorithm:M};var I=P.algorithm?P.algorithm instanceof Array?P.algorithm:[P.algorithm]:[];return v(v({},P),{},{algorithm:P.algorithm?[M].concat((0,ut.Z)(I)):M})},[t,l]);return(0,j.jsxs)(ve.ZP,{prefixCls:r,theme:E,children:[d,C,b,e]})});pe.displayName="AntdProvider";var ht=pe;function vt(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,a,s,o,c=[],l=!0,u=!1;try{if(s=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=s.call(t)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(i){u=!0,a=i}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}function yt(n,e){return pt(n)||vt(n,e)||gt(n,e)||xt()}function pt(n){if(Array.isArray(n))return n}function gt(n,e){if(n){if(typeof n=="string")return ge(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ge(n,e)}}function ge(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(n,e){var t=e||{},r=t.defaultValue,a=t.value,s=t.onChange,o=t.postState,c=m.useState(function(){return a!==void 0?a:r!==void 0?typeof r=="function"?r():r:typeof n=="function"?n():n}),l=yt(c,2),u=l[0],i=l[1],f=a!==void 0?a:u;o&&(f=o(f));function d(h){i(h),f!==h&&s&&s(h,f)}return[f,d]}var xe=Ct,ee=function(e){typeof m.startTransition=="function"?(0,m.startTransition)(e):e()},_,St=function(e){var t=e.themeMode,r=e.setAppearance,a=e.setBrowserPrefers,s=function(){ee(function(){D("dark").matches?r("dark"):r("light")})},o=function(){ee(function(){D("dark").matches?a("dark"):a("light")})};return(0,m.useLayoutEffect)(function(){if(t!=="auto"){ee(function(){r(t)});return}return setTimeout(s,1),_||(_=D("dark")),_.addEventListener("change",s),function(){_.removeEventListener("change",s)}},[t]),(0,m.useLayoutEffect)(function(){return _||(_=D("dark")),_.addEventListener("change",o),function(){_.removeEventListener("change",o)}},[]),null},Ce=(0,m.memo)(function(n){var e,t=n.children,r=n.appearance,a=n.defaultAppearance,s=n.onAppearanceChange,o=n.themeMode,c=n.defaultThemeMode,l=n.onThemeModeChange,u=n.useTheme,i=u(),f=i.appearance,d=i.themeMode,h=xe("light",{value:o,defaultValue:c??d,onChange:function(F){return l==null?void 0:l(F)}}),p=A(h,2),x=p[0],C=p[1],S=xe("light",{value:r,defaultValue:a??f,onChange:function(F){return s==null?void 0:s(F)}}),y=A(S,2),T=y[0],b=y[1],E=(0,m.useState)((e=D("dark"))!==null&&e!==void 0&&e.matches?"dark":"light"),M=A(E,2),P=M[0],I=M[1];return(0,j.jsxs)(ye.Provider,{value:{themeMode:x,setThemeMode:C,appearance:T,setAppearance:b,isDarkMode:T==="dark",browserPrefers:P},children:[typeof window<"u"&&(0,j.jsx)(St,{themeMode:x,setAppearance:b,setBrowserPrefers:I}),t]})});Ce.displayName="ThemeSwitcher";var Tt=Ce,bt=function(e){var t=e.css,r=e.token;return{buttonDefaultHover:t({backgroundColor:r.colorBgContainer,border:"1px solid ".concat(r.colorBorder),cursor:"pointer",":hover":{color:r.colorPrimaryHover,borderColor:r.colorPrimaryHover},":active":{color:r.colorPrimaryActive,borderColor:r.colorPrimaryActive}})}},Pt=function(e){return Object.fromEntries(Object.entries(e).map(function(t){var r=A(t,2),a=r[0],s=r[1];return[a,s.styles]}))},jt=function(){var e=Q(),t=H(),r=t.appearance,a=t.isDarkMode;return(0,m.useMemo)(function(){return Pt(bt({token:e,css:z,appearance:r,isDarkMode:a}))},[e,r,a])},Se=function(){var e=Q(),t=jt();return(0,m.useMemo)(function(){return v(v({},e),{},{stylish:t})},[e,t])},wt=["stylish"],Mt=function(e){var t=e.children,r=e.customToken,a=e.defaultCustomToken,s=e.customStylish,o=e.prefixCls,c=e.StyledThemeProvider,l=H(),u=l.appearance,i=l.isDarkMode,f=Se(),d=f.stylish,h=G(f,wt),p=(0,m.useMemo)(function(){return a?a instanceof Function?a({token:h,appearance:u,isDarkMode:i}):a:{}},[a,h,u]),x=(0,m.useMemo)(function(){return r instanceof Function?v(v({},p),r({token:h,appearance:u,isDarkMode:i})):v(v({},p),r)},[p,r,h,u]),C=(0,m.useMemo)(function(){return s?s({token:v(v({},h),x),stylish:d,appearance:u,isDarkMode:i,css:z}):{}},[s,h,x,d,u]),S=(0,m.useMemo)(function(){return v(v({},C),d)},[C,d]),y=v(v(v(v({},h),x),{},{stylish:S},l),{},{prefixCls:o});return(0,j.jsx)(c,{theme:y,children:t})},kt=Mt,Et=function(e){var t=e.styledConfig?he(e.styledConfig):void 0,r=e.StyleEngineContext;return(0,m.memo)(function(a){var s=a.children,o=a.customToken,c=a.customStylish,l=a.theme,u=a.getStaticInstance,i=a.prefixCls,f=a.staticInstanceConfig,d=a.appearance,h=a.defaultAppearance,p=a.onAppearanceChange,x=a.themeMode,C=a.defaultThemeMode,S=a.onThemeModeChange,y=a.styled,T=(0,m.useContext)(r),b=T.prefixCls,E=T.StyledThemeContext,M=T.CustomThemeContext,P=(0,m.useContext)(M),I=y?he(y):t||de,O=i||b;return(0,j.jsx)(r.Provider,{value:{prefixCls:O,StyledThemeContext:(y==null?void 0:y.ThemeContext)||E||J,CustomThemeContext:M},children:(0,j.jsx)(Tt,{themeMode:x,defaultThemeMode:C,onThemeModeChange:S,defaultAppearance:h,appearance:d,onAppearanceChange:p,useTheme:e.useTheme,children:(0,j.jsx)(ht,{prefixCls:O,staticInstanceConfig:f,theme:l,getStaticInstance:u,children:(0,j.jsx)(kt,{prefixCls:O,customToken:o,defaultCustomToken:P,customStylish:c,StyledThemeProvider:I,children:s})})})})})},At=function(e){return function(){var t=e.StyleEngineContext,r=(0,m.useContext)(t),a=r.StyledThemeContext,s=r.CustomThemeContext,o=r.prefixCls,c=Se(),l=H(),u=(0,m.useContext)(s),i=(0,m.useContext)(a??J)||{},f=(0,m.useContext)(ve.ZP.ConfigContext),d=f.iconPrefixCls,h=f.getPrefixCls,p=h(),x=o&&o!=="ant"?o:p,C=(0,m.useMemo)(function(){return v(v(v(v({},c),l),u),{},{prefixCls:x,iconPrefixCls:d})},[c,l,u,x,d]);return!i||Object.keys(i).length===0?C:v(v({},i),{},{prefixCls:x,iconPrefixCls:d})}},Te=new Ae;typeof g.g<"u"&&(g.g.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__=Te);var _t=function(e){var t,r,a,s=v(v({},e),{},{key:(t=e.key)!==null&&t!==void 0?t:"zcss",speedy:(r=e.speedy)!==null&&r!==void 0?r:!1}),o=X({key:s.key,speedy:s.speedy,container:s.container}),c=Ne(o),l=qe(c);o.cache=Te.add(o.cache);var u=(0,m.createContext)(s.customToken?s.customToken:{}),i=(a=s.styled)===null||a===void 0?void 0:a.ThemeContext,f=(0,m.createContext)({CustomThemeContext:u,StyledThemeContext:i,prefixCls:s==null?void 0:s.prefixCls,iconPrefixCls:s==null?void 0:s.iconPrefixCls}),d=At({StyleEngineContext:f}),h=lt({hashPriority:s.hashPriority,useTheme:d,EmotionContext:c}),p=Xe(d),x=Ye(h),C=Et({styledConfig:s.styled,StyleEngineContext:f,useTheme:d});C.displayName="AntdStyleThemeProvider";var S=ie(o.cache,{hashPriority:s.hashPriority}),y=S.cx,T=o.injectGlobal,b=o.keyframes;return{createStyles:h,createGlobalStyle:p,createStylish:x,css:z,cx:y,keyframes:b,injectGlobal:T,styleManager:o,useTheme:d,StyleProvider:l,ThemeProvider:C}},w=_t({key:Pe,speedy:!1}),Ot=w.createStyles,Rt=w.createGlobalStyle,gr=w.createStylish,It=w.css,xr=w.cx,Cr=w.keyframes,Sr=w.injectGlobal,Tr=w.styleManager,Lt=w.ThemeProvider,br=w.StyleProvider,Nt=w.useTheme}}]);
