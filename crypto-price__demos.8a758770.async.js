"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[7831],{36034:function(E,o,e){var d=e(80284),u=e(28484),_=e(55250),l=e(46060),n=e(50959),c=e(82187),m=e.n(c),i=e(52869),v=e(73877),s=e(59633),t=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],r=n.forwardRef(function(a,P){var C=a.className,y=a.component,x=a.viewBox,g=a.spin,f=a.rotate,p=a.tabIndex,b=a.onClick,h=a.children,A=(0,l.Z)(a,t),M=n.useRef(),j=(0,i.x1)(M,P);(0,s.Kp)(!!(y||h),"Should have `component` prop or `children`."),(0,s.C3)(M);var I=n.useContext(v.Z),R=I.prefixCls,O=R===void 0?"anticon":R,B=I.rootClassName,S=m()(B,O,C),T=m()((0,_.Z)({},"".concat(O,"-spin"),!!g)),W=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,D=(0,u.Z)((0,u.Z)({},s.vD),{},{className:T,style:W,viewBox:x});x||delete D.viewBox;var L=function(){return y?n.createElement(y,D,h):h?((0,s.Kp)(!!x||n.Children.count(h)===1&&n.isValidElement(h)&&n.Children.only(h).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",(0,d.Z)({},D,{viewBox:x}),h)):null},U=p;return U===void 0&&b&&(U=-1),n.createElement("span",(0,d.Z)({role:"img"},A,{ref:j,tabIndex:U,onClick:b,className:S}),L())});r.displayName="AntdIcon",o.Z=r},5015:function(E,o,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var d=e(50959),u=e(49982),_=e(11527);function l(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(s){return typeof s}:l=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},l(i)}var n=function(v){if(!["undefined","string"].includes(l(v.idPrefix)))throw new Error('Invalid value passed for prop "idPrefix", expected undefined or string, got '.concat(l(v.idPrefix)));return v},c=function(v){var s=n(v),t=s.children,r=s.idPrefix,a=r===void 0?"i":r,P=(0,d.useRef)(0),C=(0,d.useCallback)(function(){return"".concat(a).concat(P.current++)},[]);return(0,_.jsx)(u.UniqueIdGeneratorContextProvider,{value:C,children:t})},m=c;o.default=m},49982:function(E,o,e){Object.defineProperty(o,"__esModule",{value:!0}),o.UniqueIdGeneratorContextProvider=o.useUniqueIdGenerator=void 0;var d=e(50959),u=function(){var c=0;return function(){return"i".concat(c++)}}(),_=(0,d.createContext)(u),l=function(){return(0,d.useContext)(_)};o.useUniqueIdGenerator=l;var n=_.Provider;o.UniqueIdGeneratorContextProvider=n},97971:function(E,o,e){var d;d={value:!0},Object.defineProperty(o,"uB",{enumerable:!0,get:function(){return u.default}}),d={enumerable:!0,get:function(){return _.default}};var u=l(e(63916)),_=l(e(5015));function l(n){return n&&n.__esModule?n:{default:n}}},63916:function(E,o,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var d=e(50959),u=e(49982);function _(t,r){return i(t)||m(t,r)||n(t,r)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(t,r){if(t){if(typeof t=="string")return c(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,r)}}function c(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,P=new Array(r);a<r;a++)P[a]=t[a];return P}function m(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var P=[],C=!0,y=!1,x,g;try{for(a=a.call(t);!(C=(x=a.next()).done)&&(P.push(x.value),!(r&&P.length===r));C=!0);}catch(f){y=!0,g=f}finally{try{!C&&a.return!=null&&a.return()}finally{if(y)throw g}}return P}}function i(t){if(Array.isArray(t))return t}var v=function(){var r=(0,u.useUniqueIdGenerator)(),a=(0,d.useState)(r),P=_(a,1),C=P[0];return C},s=v;o.default=s},47443:function(E,o,e){e.r(o);var d=e(85544),u=e(11527),_=function(){return(0,u.jsx)(d.O,{value:1230000000000000000n})};o.default=_},81567:function(E,o,e){e.r(o);var d=e(85544),u=e(20469),_=e(11527),l=function(){return(0,_.jsx)(d.O,{icon:!0,chain:{id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"WETH",decimals:18,icon:(0,_.jsx)(u.Z,{})}},value:1230000000000000000n})};o.default=l},69943:function(E,o,e){e.r(o);var d=e(85544),u=e(11527);function _(n){return n.toLocaleString()}var l=function(){var c=function(i,v){return"".concat(_(Number(i))," ").concat(v.symbol)};return(0,u.jsx)(d.O,{format:c,value:123456700000000000000000n})};o.default=l},78467:function(E,o,e){e.r(o);var d=e(85544),u=e(6754),_=e(61255),l=e(11527),n=function(){return(0,l.jsxs)(_.Z,{children:[(0,l.jsx)(d.O,{icon:!0,value:1230000000000000000n}),(0,l.jsx)(d.O,{icon:(0,l.jsx)(u.g,{}),value:1230000000000000000n})]})};o.default=n},6754:function(E,o,e){e.d(o,{g:function(){return s}});var d=e(26068),u=e.n(d),_=e(50959),l=e(36034),n=e(35591),c=e(82187),m=e.n(c),i=e(11527),v=function(r){return(0,i.jsxs)("svg",u()(u()({},r),{},{children:[(0,i.jsx)("path",{d:"M977.184 627.6c-64.051 256.924-324.274 413.282-581.227 349.213C139.11 912.761-17.25 652.523 46.83 395.621c64.025-256.952 324.246-413.322 581.12-349.27 256.936 64.052 413.286 324.318 349.226 581.255l.005-.006h.003z",fill:"#F7931A"}),(0,i.jsx)("path",{d:"M723.477 443.257c9.546-63.823-39.044-98.13-105.488-121.017l21.555-86.452-52.627-13.113-20.982 84.176c-13.835-3.45-28.043-6.701-42.165-9.925l21.135-84.733-52.594-13.112-21.566 86.425c-11.449-2.607-22.693-5.184-33.605-7.898l.062-.271-72.573-18.123-14 56.208s39.045 8.95 38.223 9.5c21.31 5.32 25.164 19.427 24.524 30.608l-24.553 98.492c1.467.371 3.372.91 5.471 1.755-1.756-.436-3.624-.912-5.563-1.377l-34.414 137.973c-2.605 6.475-9.216 16.19-24.115 12.502.528.763-38.25-9.546-38.25-9.546l-26.127 60.241 68.485 17.072c12.74 3.195 25.225 6.538 37.52 9.682l-21.777 87.444 52.566 13.113 21.566-86.516a2004.2 2004.2 0 0 0 41.94 10.883l-21.495 86.11 52.63 13.112 21.775-87.28c89.74 16.984 157.216 10.136 185.618-71.033 22.887-65.351-1.14-103.045-48.35-127.627 34.386-7.93 60.287-30.546 67.193-77.265l-.016-.012-.003.004zM603.238 611.863c-16.265 65.352-126.296 30.025-161.97 21.166l28.9-115.849c35.672 8.905 150.067 26.529 133.072 94.683h-.003zm16.275-169.553c-14.835 59.443-106.416 29.244-136.123 21.838l26.2-105.068c29.708 7.405 125.378 21.227 109.927 83.23h-.004z",fill:"#FFF"})]}))};v.defaultProps={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"};var s=_.forwardRef(function(t,r){var a=_.useContext(n.ZP.ConfigContext),P=a.getPrefixCls,C=P("web3-icon-bitcoin-circle-colorful");return(0,i.jsx)(l.Z,u()(u()({},t),{},{className:m()(C,t.className),ref:r,component:v}))});s.displayName="BitcoinCircleColorful"},20469:function(E,o,e){e.d(o,{Z:function(){return s}});var d=e(26068),u=e.n(d),_=e(50959),l=e(36034),n=e(35591),c=e(82187),m=e.n(c),i=e(11527),v=function(r){return(0,i.jsx)("svg",u()(u()({},r),{},{children:(0,i.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,i.jsx)("circle",{fill:"currentColor",cx:"513",cy:"512",r:"512"}),(0,i.jsxs)("g",{fill:"#FFF",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h1024v1024H0z"}),(0,i.jsx)("path",{d:"m286 559 226.5 129.712L739 559 512.5 870z"}),(0,i.jsx)("path",{d:"M512.529 152 286 518.453 512.529 649 739 518.453z"})]})]})}))};v.defaultProps={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"};var s=_.forwardRef(function(t,r){var a=_.useContext(n.ZP.ConfigContext),P=a.getPrefixCls,C=P("web3-icon-ethereum-circle-filled");return(0,i.jsx)(l.Z,u()(u()({},t),{},{className:m()(C,t.className),ref:r,component:v}))});s.displayName="EthereumCircleFilled"},85544:function(E,o,e){e.d(o,{O:function(){return x}});var d=e(26068),u=e.n(d),_=e(50959),l=e(23202),n=e(35591),c=e(84717),m=e(82187),i=e.n(m),v=e(44977),s=e(11527),t=function(f){var p=f.className,b=f.style,h=f.hashId,A=f.symbol,M=A===void 0?"ETH":A,j=f.decimals,I=j===void 0?18:j,R=f.value,O=R===void 0?0:R,B=f.fixed,S=f.icon,T=f.format,W=(0,_.useContext)(n.ZP.ConfigContext),D=W.getPrefixCls,L=D("web3-crypto-price-balance"),U=(0,_.useMemo)(function(){return T?T((0,v.az)(O,I,B),{symbol:M,decimals:I,fixed:B,originValue:O}):"".concat((0,v.az)(O,I,B)," ").concat(M)},[O,M,I,B,T]);return(0,s.jsxs)("span",{style:b,className:i()(p,h,L),children:[S?(0,s.jsxs)(s.Fragment,{children:[S," "]}):null,U]})};t.displayName="CryptoPriceBalance";var r=e(82092),a=e.n(r),P=e(97857),C=function(f){return a()({},f.componentCls,{})};function y(g){return(0,P.Xj)("CryptoPrice",function(f){var p=u()(u()({},f),{},{componentCls:".".concat(g)});return[C(p)]})}var x=function(f){var p,b,h,A,M,j=(0,_.useContext)(n.ZP.ConfigContext),I=j.getPrefixCls,R=I("web3-crypto-balance"),O=y(R),B=O.wrapSSR,S=O.hashId,T=(0,c.Z)({chain:f.chain}),W=T.chain,D=W===void 0?l.ny:W,L=f.value,U=L===void 0?0n:L,K=f.symbol,Z=K===void 0?(p=(b=D.nativeCurrency)===null||b===void 0?void 0:b.symbol)!==null&&p!==void 0?p:"ETH":K,N=f.decimals,w=N===void 0?(h=(A=D.nativeCurrency)===null||A===void 0?void 0:A.decimals)!==null&&h!==void 0?h:18:N,F=f.fixed,$=f.icon,G=$===void 0?!1:$,z=f.className,V={fixed:F,value:U,symbol:Z,decimals:w,className:z,hashId:S,icon:G===!0?(M=D.nativeCurrency)===null||M===void 0?void 0:M.icon:G,format:f.format};return B((0,s.jsx)(t,u()({},V)))};x.displayName="CryptoPrice"},97857:function(E,o,e){e.d(o,{Xj:function(){return s}});var d=e(26068),u=e.n(d),_=e(50959),l=e(63173),n=e(70735),c=e(35591),m=n.Z.useToken,i=function(r,a){return new TinyColor(r).setAlpha(a).toRgbString()},v=function(r,a){var P=new TinyColor(r);return P.lighten(a).toHexString()};function s(t,r){var a=m(),P=a.theme,C=a.token,y=a.hashId,x=(0,_.useContext)(c.ZP.ConfigContext),g=x.getPrefixCls,f=u()(u()({},C),{},{web3ComponentsCls:".".concat(g("web3")),antCls:".".concat(g())});return{wrapSSR:(0,l.useStyleRegister)({theme:P,token:f,hashId:y,path:[t]},function(){return r(f)}),hashId:y}}},44977:function(E,o,e){e.d(o,{C_:function(){return d},Tg:function(){return u},az:function(){return _}});var d=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0,m=arguments.length>2?arguments[2]:void 0,i=void 0;return c===void 0&&m===void 0?i="0x":c!==void 0?i=c===!1?"":c:m!==void 0&&(i=m===!1?"":m),i?n.startsWith(i)?n:"".concat(i).concat(n):n},u=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,m=[],i=n.startsWith("0x"),v=i?n.slice(2):n,s=0;s<v.length;s+=c){var t=v.slice(s,s+c);m.push(t)}var r=m.join(" ");return i?"0x ".concat(r):r},_=function(n,c,m){var i=typeof n=="bigint"?n:BigInt(n),v=BigInt(Math.pow(10,c)),s=i/v,t=i%v;if(t===0n&&m===void 0)return"".concat(s);var r=t.toString().padStart(c,"0");return m===void 0?"".concat(s,".").concat(r.replace(/0+$/,"")):(r=r.substring(0,m).padEnd(m,"0"),"".concat(s,".").concat(r))}}}]);
