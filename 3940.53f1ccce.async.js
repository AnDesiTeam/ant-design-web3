(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3940],{8274:function(T,ee,s){"use strict";s.d(ee,{Z:function(){return N}});var n=s(80284),Q=s(50959),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},$=Y,j=s(6391),Z=function(ve,Se){return Q.createElement(j.Z,(0,n.Z)({},ve,{ref:Se,icon:$}))},W=Q.forwardRef(Z),N=W},46692:function(T,ee,s){"use strict";s.d(ee,{Z:function(){return Zn}});var n=s(50959),Q=s(8274),Y=s(82187),$=s.n(Y),j=s(80284),Z=s(28484),W=s(55250),N=s(3392),ye=s(63509),ve=s(46060),Se=s(53230),$e=s(91425),Pe=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],S=n.createContext(null),x=0;function F(t,e){var o=n.useState(function(){return x+=1,String(x)}),r=(0,N.Z)(o,1),a=r[0],i=n.useContext(S),v={data:e,canPreview:t};return n.useEffect(function(){if(i)return i.register(a,v)},[]),n.useEffect(function(){i&&i.register(a,v)},[t,e]),a}function Ie(t){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=t})}function be(t){var e=t.src,o=t.isCustomPlaceholder,r=t.fallback,a=(0,n.useState)(o?"loading":"normal"),i=(0,N.Z)(a,2),v=i[0],l=i[1],f=(0,n.useRef)(!1),d=v==="error";(0,n.useEffect)(function(){var p=!0;return Ie(e).then(function(g){!g&&p&&l("error")}),function(){p=!1}},[e]),(0,n.useEffect)(function(){o&&!f.current?l("loading"):d&&l("normal")},[e]);var w=function(){l("normal")},c=function(g){f.current=!1,v==="loading"&&g!==null&&g!==void 0&&g.complete&&(g.naturalWidth||g.naturalHeight)&&(f.current=!0,w())},I=d&&r?{src:r}:{onLoad:w,src:e};return[c,I,v]}var ft=s(2477),Ze=s(10784),He=s(11820),dt=s(36335),vt=s(23086),je={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function mt(t,e,o,r){var a=(0,n.useRef)(null),i=(0,n.useRef)([]),v=(0,n.useState)(je),l=(0,N.Z)(v,2),f=l[0],d=l[1],w=function(g){d(je),r&&!(0,dt.Z)(je,f)&&r({transform:je,action:g})},c=function(g,R){a.current===null&&(i.current=[],a.current=(0,vt.Z)(function(){d(function(y){var E=y;return i.current.forEach(function(z){E=(0,Z.Z)((0,Z.Z)({},E),z)}),a.current=null,r==null||r({transform:E,action:R}),E})})),i.current.push((0,Z.Z)((0,Z.Z)({},f),g))},I=function(g,R,y,E,z){var X=t.current,P=X.width,u=X.height,M=X.offsetWidth,h=X.offsetHeight,m=X.offsetLeft,b=X.offsetTop,O=g,C=f.scale*g;C>o?(C=o,O=o/f.scale):C<e&&(C=z?C:e,O=C/f.scale);var A=y??innerWidth/2,V=E??innerHeight/2,k=O-1,G=k*P*.5,J=k*u*.5,te=k*(A-f.x-m),U=k*(V-f.y-b),ne=f.x-(te-G),oe=f.y-(U-J);if(g<1&&C===1){var ae=M*C,ie=h*C,ue=(0,Se.g1)(),me=ue.width,K=ue.height;ae<=me&&ie<=K&&(ne=0,oe=0)}c({x:ne,y:oe,scale:C},R)};return{transform:f,resetTransform:w,updateTransform:c,dispatchZoomChange:I}}var gt=s(82285);function Ue(t,e,o,r){var a=e+o,i=(o-r)/2;if(o>r){if(e>0)return(0,W.Z)({},t,i);if(e<0&&a<r)return(0,W.Z)({},t,-i)}else if(e<0||a>r)return(0,W.Z)({},t,e<0?i:-i);return{}}function Ke(t,e,o,r){var a=(0,Se.g1)(),i=a.width,v=a.height,l=null;return t<=i&&e<=v?l={x:0,y:0}:(t>i||e>v)&&(l=(0,Z.Z)((0,Z.Z)({},Ue("x",o,t,i)),Ue("y",r,e,v))),l}var Re=1,ht=1;function pt(t,e,o,r,a,i,v){var l=a.rotate,f=a.scale,d=a.x,w=a.y,c=(0,n.useState)(!1),I=(0,N.Z)(c,2),p=I[0],g=I[1],R=(0,n.useRef)({diffX:0,diffY:0,transformX:0,transformY:0}),y=function(u){!e||u.button!==0||(u.preventDefault(),u.stopPropagation(),R.current={diffX:u.pageX-d,diffY:u.pageY-w,transformX:d,transformY:w},g(!0))},E=function(u){o&&p&&i({x:u.pageX-R.current.diffX,y:u.pageY-R.current.diffY},"move")},z=function(){if(o&&p){g(!1);var u=R.current,M=u.transformX,h=u.transformY,m=d!==M&&w!==h;if(!m)return;var b=t.current.offsetWidth*f,O=t.current.offsetHeight*f,C=t.current.getBoundingClientRect(),A=C.left,V=C.top,k=l%180!==0,G=Ke(k?O:b,k?b:O,A,V);G&&i((0,Z.Z)({},G),"dragRebound")}},X=function(u){if(!(!o||u.deltaY==0)){var M=Math.abs(u.deltaY/100),h=Math.min(M,ht),m=Re+h*r;u.deltaY>0&&(m=Re/m),v(m,"wheel",u.clientX,u.clientY)}};return(0,n.useEffect)(function(){var P,u,M,h;if(e){M=(0,Ze.Z)(window,"mouseup",z,!1),h=(0,Ze.Z)(window,"mousemove",E,!1);try{window.top!==window.self&&(P=(0,Ze.Z)(window.top,"mouseup",z,!1),u=(0,Ze.Z)(window.top,"mousemove",E,!1))}catch(m){(0,gt.Kp)(!1,"[rc-image] ".concat(m))}}return function(){var m,b,O,C;(m=M)===null||m===void 0||m.remove(),(b=h)===null||b===void 0||b.remove(),(O=P)===null||O===void 0||O.remove(),(C=u)===null||C===void 0||C.remove()}},[o,p,d,w,l,e]),{isMoving:p,onMouseDown:y,onMouseMove:E,onMouseUp:z,onWheel:X}}function De(t,e){var o=t.x-e.x,r=t.y-e.y;return Math.hypot(o,r)}function Ct(t,e,o,r){var a=De(t,o),i=De(e,r);if(a===0&&i===0)return[t.x,t.y];var v=a/(a+i),l=t.x+v*(e.x-t.x),f=t.y+v*(e.y-t.y);return[l,f]}function wt(t,e,o,r,a,i,v){var l=a.rotate,f=a.scale,d=a.x,w=a.y,c=(0,n.useState)(!1),I=(0,N.Z)(c,2),p=I[0],g=I[1],R=(0,n.useRef)({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),y=function(u){R.current=(0,Z.Z)((0,Z.Z)({},R.current),u)},E=function(u){if(e){u.stopPropagation(),g(!0);var M=u.touches,h=M===void 0?[]:M;h.length>1?y({point1:{x:h[0].clientX,y:h[0].clientY},point2:{x:h[1].clientX,y:h[1].clientY},eventType:"touchZoom"}):y({point1:{x:h[0].clientX-d,y:h[0].clientY-w},eventType:"move"})}},z=function(u){var M=u.touches,h=M===void 0?[]:M,m=R.current,b=m.point1,O=m.point2,C=m.eventType;if(h.length>1&&C==="touchZoom"){var A={x:h[0].clientX,y:h[0].clientY},V={x:h[1].clientX,y:h[1].clientY},k=Ct(b,O,A,V),G=(0,N.Z)(k,2),J=G[0],te=G[1],U=De(A,V)/De(b,O);v(U,"touchZoom",J,te,!0),y({point1:A,point2:V,eventType:"touchZoom"})}else C==="move"&&(i({x:h[0].clientX-b.x,y:h[0].clientY-b.y},"move"),y({eventType:"move"}))},X=function(){if(o){if(p&&g(!1),y({eventType:"none"}),r>f)return i({x:0,y:0,scale:r},"touchZoom");var u=t.current.offsetWidth*f,M=t.current.offsetHeight*f,h=t.current.getBoundingClientRect(),m=h.left,b=h.top,O=l%180!==0,C=Ke(O?M:u,O?u:M,m,b);C&&i((0,Z.Z)({},C),"dragRebound")}};return(0,n.useEffect)(function(){var P;return o&&e&&(P=(0,Ze.Z)(window,"touchmove",function(u){return u.preventDefault()},{passive:!1})),function(){var u;(u=P)===null||u===void 0||u.remove()}},[o,e]),{isTouching:p,onTouchStart:E,onTouchMove:z,onTouchEnd:X}}var St=s(89337),xt=s(48431),yt=function(e){var o=e.visible,r=e.maskTransitionName,a=e.getContainer,i=e.prefixCls,v=e.rootClassName,l=e.icons,f=e.countRender,d=e.showSwitch,w=e.showProgress,c=e.current,I=e.transform,p=e.count,g=e.scale,R=e.minScale,y=e.maxScale,E=e.closeIcon,z=e.onSwitchLeft,X=e.onSwitchRight,P=e.onClose,u=e.onZoomIn,M=e.onZoomOut,h=e.onRotateRight,m=e.onRotateLeft,b=e.onFlipX,O=e.onFlipY,C=e.toolbarRender,A=e.zIndex,V=(0,n.useContext)(S),k=l.rotateLeft,G=l.rotateRight,J=l.zoomIn,te=l.zoomOut,U=l.close,ne=l.left,oe=l.right,ae=l.flipX,ie=l.flipY,ue="".concat(i,"-operations-operation");n.useEffect(function(){var D=function(L){L.keyCode===He.Z.ESC&&P()};return o&&window.addEventListener("keydown",D),function(){window.removeEventListener("keydown",D)}},[o]);var me=[{icon:ie,onClick:O,type:"flipY"},{icon:ae,onClick:b,type:"flipX"},{icon:k,onClick:m,type:"rotateLeft"},{icon:G,onClick:h,type:"rotateRight"},{icon:te,onClick:M,type:"zoomOut",disabled:g<=R},{icon:J,onClick:u,type:"zoomIn",disabled:g===y}],K=me.map(function(D){var B,L=D.icon,ce=D.onClick,q=D.type,_=D.disabled;return n.createElement("div",{className:$()(ue,(B={},(0,W.Z)(B,"".concat(i,"-operations-operation-").concat(q),!0),(0,W.Z)(B,"".concat(i,"-operations-operation-disabled"),!!_),B)),onClick:ce,key:q},L)}),re=n.createElement("div",{className:"".concat(i,"-operations")},K);return n.createElement(xt.default,{visible:o,motionName:r},function(D){var B=D.className,L=D.style;return n.createElement(St.Z,{open:!0,getContainer:a??document.body},n.createElement("div",{className:$()("".concat(i,"-operations-wrapper"),B,v),style:(0,Z.Z)((0,Z.Z)({},L),{},{zIndex:A})},E===null?null:n.createElement("button",{className:"".concat(i,"-close"),onClick:P},E||U),d&&n.createElement(n.Fragment,null,n.createElement("div",{className:$()("".concat(i,"-switch-left"),(0,W.Z)({},"".concat(i,"-switch-left-disabled"),c===0)),onClick:z},ne),n.createElement("div",{className:$()("".concat(i,"-switch-right"),(0,W.Z)({},"".concat(i,"-switch-right-disabled"),c===p-1)),onClick:X},oe)),n.createElement("div",{className:"".concat(i,"-footer")},w&&n.createElement("div",{className:"".concat(i,"-progress")},f?f(c+1,p):"".concat(c+1," / ").concat(p)),C?C(re,(0,Z.Z)({icons:{flipYIcon:K[0],flipXIcon:K[1],rotateLeftIcon:K[2],rotateRightIcon:K[3],zoomOutIcon:K[4],zoomInIcon:K[5]},actions:{onFlipY:O,onFlipX:b,onRotateLeft:m,onRotateRight:h,onZoomOut:M,onZoomIn:u},transform:I},V?{current:c,total:p}:{})):re)))})},It=yt,bt=["fallback","src","imgRef"],Zt=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Rt=function(e){var o=e.fallback,r=e.src,a=e.imgRef,i=(0,ve.Z)(e,bt),v=be({src:r,fallback:o}),l=(0,N.Z)(v,2),f=l[0],d=l[1];return n.createElement("img",(0,j.Z)({ref:function(c){a.current=c,f(c)}},i,d))},Ot=function(e){var o=e.prefixCls,r=e.src,a=e.alt,i=e.fallback,v=e.movable,l=v===void 0?!0:v,f=e.onClose,d=e.visible,w=e.icons,c=w===void 0?{}:w,I=e.rootClassName,p=e.closeIcon,g=e.getContainer,R=e.current,y=R===void 0?0:R,E=e.count,z=E===void 0?1:E,X=e.countRender,P=e.scaleStep,u=P===void 0?.5:P,M=e.minScale,h=M===void 0?1:M,m=e.maxScale,b=m===void 0?50:m,O=e.transitionName,C=O===void 0?"zoom":O,A=e.maskTransitionName,V=A===void 0?"fade":A,k=e.imageRender,G=e.imgCommonProps,J=e.toolbarRender,te=e.onTransform,U=e.onChange,ne=(0,ve.Z)(e,Zt),oe=(0,n.useRef)(),ae=(0,n.useContext)(S),ie=ae&&z>1,ue=ae&&z>=1,me=(0,n.useState)(!0),K=(0,N.Z)(me,2),re=K[0],D=K[1],B=mt(oe,h,b,te),L=B.transform,ce=B.resetTransform,q=B.updateTransform,_=B.dispatchZoomChange,he=pt(oe,l,d,u,L,q,_),Le=he.isMoving,Oe=he.onMouseDown,Ne=he.onWheel,se=wt(oe,l,d,h,L,q,_),fe=se.isTouching,de=se.onTouchStart,pe=se.onTouchMove,ge=se.onTouchEnd,ze=L.rotate,Ee=L.scale,Me=$()((0,W.Z)({},"".concat(o,"-moving"),Le));(0,n.useEffect)(function(){re||D(!0)},[re]);var Be=function(){ce("close")},Ve=function(){_(Re+u,"zoomIn")},Ge=function(){_(Re/(Re+u),"zoomOut")},Ce=function(){q({rotate:ze+90},"rotateRight")},we=function(){q({rotate:ze-90},"rotateLeft")},Xe=function(){q({flipX:!L.flipX},"flipX")},ke=function(){q({flipY:!L.flipY},"flipY")},Ae=function(H){H==null||H.preventDefault(),H==null||H.stopPropagation(),y>0&&(D(!1),ce("prev"),U==null||U(y-1,y))},ct=function(H){H==null||H.preventDefault(),H==null||H.stopPropagation(),y<z-1&&(D(!1),ce("next"),U==null||U(y+1,y))},Rn=function(H){!d||!ie||(H.keyCode===He.Z.LEFT?Ae():H.keyCode===He.Z.RIGHT&&ct())},On=function(H){d&&(Ee!==1?q({x:0,y:0,scale:1},"doubleClick"):_(Re+u,"doubleClick",H.clientX,H.clientY))};(0,n.useEffect)(function(){var le=(0,Ze.Z)(window,"keydown",Rn,!1);return function(){le.remove()}},[d,ie,y]);var ut=n.createElement(Rt,(0,j.Z)({},G,{width:e.width,height:e.height,imgRef:oe,className:"".concat(o,"-img"),alt:a,style:{transform:"translate3d(".concat(L.x,"px, ").concat(L.y,"px, 0) scale3d(").concat(L.flipX?"-":"").concat(Ee,", ").concat(L.flipY?"-":"").concat(Ee,", 1) rotate(").concat(ze,"deg)"),transitionDuration:(!re||fe)&&"0s"},fallback:i,src:r,onWheel:Ne,onMouseDown:Oe,onDoubleClick:On,onTouchStart:de,onTouchMove:pe,onTouchEnd:ge,onTouchCancel:ge}));return n.createElement(n.Fragment,null,n.createElement(ft.Z,(0,j.Z)({transitionName:C,maskTransitionName:V,closable:!1,keyboard:!0,prefixCls:o,onClose:f,visible:d,classNames:{wrapper:Me},rootClassName:I,getContainer:g},ne,{afterClose:Be}),n.createElement("div",{className:"".concat(o,"-img-wrapper")},k?k(ut,(0,Z.Z)({transform:L},ae?{current:y}:{})):ut)),n.createElement(It,{visible:d,transform:L,maskTransitionName:V,closeIcon:p,getContainer:g,prefixCls:o,rootClassName:I,icons:c,countRender:X,showSwitch:ie,showProgress:ue,current:y,count:z,scale:Ee,minScale:h,maxScale:b,toolbarRender:J,onSwitchLeft:Ae,onSwitchRight:ct,onZoomIn:Ve,onZoomOut:Ge,onRotateRight:Ce,onRotateLeft:we,onFlipX:Xe,onFlipY:ke,onClose:f,zIndex:ne.zIndex!==void 0?ne.zIndex+1:void 0}))},Qe=Ot,Et=s(6399);function Mt(t){var e=n.useState({}),o=(0,N.Z)(e,2),r=o[0],a=o[1],i=n.useCallback(function(l,f){return a(function(d){return(0,Z.Z)((0,Z.Z)({},d),{},(0,W.Z)({},l,f))}),function(){a(function(d){var w=(0,Z.Z)({},d);return delete w[l],w})}},[]),v=n.useMemo(function(){return t?t.map(function(l){if(typeof l=="string")return{data:{src:l}};var f={};return Object.keys(l).forEach(function(d){["src"].concat((0,Et.Z)(Pe)).includes(d)&&(f[d]=l[d])}),{data:f}}):Object.keys(r).reduce(function(l,f){var d=r[f],w=d.canPreview,c=d.data;return w&&l.push({data:c,id:f}),l},[])},[t,r]);return[v,i]}var Pt=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],Tt=["src"],Lt=function(e){var o,r=e.previewPrefixCls,a=r===void 0?"rc-image-preview":r,i=e.children,v=e.icons,l=v===void 0?{}:v,f=e.items,d=e.preview,w=e.fallback,c=(0,ye.Z)(d)==="object"?d:{},I=c.visible,p=c.onVisibleChange,g=c.getContainer,R=c.current,y=c.movable,E=c.minScale,z=c.maxScale,X=c.countRender,P=c.closeIcon,u=c.onChange,M=c.onTransform,h=c.toolbarRender,m=c.imageRender,b=(0,ve.Z)(c,Pt),O=Mt(f),C=(0,N.Z)(O,2),A=C[0],V=C[1],k=(0,$e.Z)(0,{value:R}),G=(0,N.Z)(k,2),J=G[0],te=G[1],U=(0,n.useState)(!1),ne=(0,N.Z)(U,2),oe=ne[0],ae=ne[1],ie=((o=A[J])===null||o===void 0?void 0:o.data)||{},ue=ie.src,me=(0,ve.Z)(ie,Tt),K=(0,$e.Z)(!!I,{value:I,onChange:function(fe,de){p==null||p(fe,de,J)}}),re=(0,N.Z)(K,2),D=re[0],B=re[1],L=(0,n.useState)(null),ce=(0,N.Z)(L,2),q=ce[0],_=ce[1],he=n.useCallback(function(se,fe,de){var pe=A.findIndex(function(ge){return ge.id===se});B(!0),_({x:fe,y:de}),te(pe<0?0:pe),ae(!0)},[A]);n.useEffect(function(){D?oe||te(0):ae(!1)},[D]);var Le=function(fe,de){te(fe),u==null||u(fe,de)},Oe=function(){B(!1),_(null)},Ne=n.useMemo(function(){return{register:V,onPreview:he}},[V,he]);return n.createElement(S.Provider,{value:Ne},i,n.createElement(Qe,(0,j.Z)({"aria-hidden":!D,movable:y,visible:D,prefixCls:a,closeIcon:P,onClose:Oe,mousePosition:q,imgCommonProps:me,src:ue,fallback:w,icons:l,minScale:E,maxScale:z,getContainer:g,current:J,count:A.length,countRender:X,onTransform:M,toolbarRender:h,imageRender:m,onChange:Le},b)))},Nt=Lt,zt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],At=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],We=function(e){var o=e.src,r=e.alt,a=e.onPreviewClose,i=e.prefixCls,v=i===void 0?"rc-image":i,l=e.previewPrefixCls,f=l===void 0?"".concat(v,"-preview"):l,d=e.placeholder,w=e.fallback,c=e.width,I=e.height,p=e.style,g=e.preview,R=g===void 0?!0:g,y=e.className,E=e.onClick,z=e.onError,X=e.wrapperClassName,P=e.wrapperStyle,u=e.rootClassName,M=(0,ve.Z)(e,zt),h=d&&d!==!0,m=(0,ye.Z)(R)==="object"?R:{},b=m.src,O=m.visible,C=O===void 0?void 0:O,A=m.onVisibleChange,V=A===void 0?a:A,k=m.getContainer,G=k===void 0?void 0:k,J=m.mask,te=m.maskClassName,U=m.movable,ne=m.icons,oe=m.scaleStep,ae=m.minScale,ie=m.maxScale,ue=m.imageRender,me=m.toolbarRender,K=(0,ve.Z)(m,At),re=b??o,D=(0,$e.Z)(!!C,{value:C,onChange:V}),B=(0,N.Z)(D,2),L=B[0],ce=B[1],q=be({src:o,isCustomPlaceholder:h,fallback:w}),_=(0,N.Z)(q,3),he=_[0],Le=_[1],Oe=_[2],Ne=(0,n.useState)(null),se=(0,N.Z)(Ne,2),fe=se[0],de=se[1],pe=(0,n.useContext)(S),ge=!!R,ze=function(){ce(!1),de(null)},Ee=$()(v,X,u,(0,W.Z)({},"".concat(v,"-error"),Oe==="error")),Me=(0,n.useMemo)(function(){var Ce={};return Pe.forEach(function(we){e[we]!==void 0&&(Ce[we]=e[we])}),Ce},Pe.map(function(Ce){return e[Ce]})),Be=(0,n.useMemo)(function(){return(0,Z.Z)((0,Z.Z)({},Me),{},{src:re})},[re,Me]),Ve=F(ge,Be),Ge=function(we){var Xe=(0,Se.os)(we.target),ke=Xe.left,Ae=Xe.top;pe?pe.onPreview(Ve,ke,Ae):(de({x:ke,y:Ae}),ce(!0)),E==null||E(we)};return n.createElement(n.Fragment,null,n.createElement("div",(0,j.Z)({},M,{className:Ee,onClick:ge?Ge:E,style:(0,Z.Z)({width:c,height:I},P)}),n.createElement("img",(0,j.Z)({},Me,{className:$()("".concat(v,"-img"),(0,W.Z)({},"".concat(v,"-img-placeholder"),d===!0),y),style:(0,Z.Z)({height:I},p),ref:he},Le,{width:c,height:I,onError:z})),Oe==="loading"&&n.createElement("div",{"aria-hidden":"true",className:"".concat(v,"-placeholder")},d),J&&ge&&n.createElement("div",{className:$()("".concat(v,"-mask"),te),style:{display:(p==null?void 0:p.display)==="none"?"none":void 0}},J)),!pe&&ge&&n.createElement(Qe,(0,j.Z)({"aria-hidden":!L,visible:L,prefixCls:f,onClose:ze,mousePosition:fe,src:re,alt:r,fallback:w,getContainer:G,icons:ne,movable:U,scaleStep:oe,minScale:ae,maxScale:ie,rootClassName:u,imageRender:ue,imgCommonProps:Me,toolbarRender:me},K)))};We.PreviewGroup=Nt,We.displayName="Image";var $t=We,Je=$t,qe=s(29918),Ye=s(58105),_e=s(91852),et=s(7838),tt=s(27386),jt=s(31467),Dt=s(2429),Yt=s(57291),Xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},kt=Xt,Te=s(6391),Ht=function(e,o){return n.createElement(Te.Z,(0,j.Z)({},e,{ref:o,icon:kt}))},Wt=n.forwardRef(Ht),Ft=Wt,Bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},Vt=Bt,Gt=function(e,o){return n.createElement(Te.Z,(0,j.Z)({},e,{ref:o,icon:Vt}))},Ut=n.forwardRef(Gt),Kt=Ut,Qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Jt=Qt,qt=function(e,o){return n.createElement(Te.Z,(0,j.Z)({},e,{ref:o,icon:Jt}))},_t=n.forwardRef(qt),nt=_t,en={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},tn=en,nn=function(e,o){return n.createElement(Te.Z,(0,j.Z)({},e,{ref:o,icon:tn}))},on=n.forwardRef(nn),rn=on,an={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},sn=an,ln=function(e,o){return n.createElement(Te.Z,(0,j.Z)({},e,{ref:o,icon:sn}))},cn=n.forwardRef(ln),un=cn,ot=s(63173),xe=s(99978),fn=s(23711),dn=s(23603),vn=s(38213),mn=s(80717),gn=s(49507),rt=s(65626);const Fe=t=>({position:t||"absolute",inset:0}),hn=t=>{const{iconCls:e,motionDurationSlow:o,paddingXXS:r,marginXXS:a,prefixCls:i,colorTextLightSolid:v}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:v,background:new xe.C("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${o}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},dn.vS),{padding:`0 ${(0,ot.unit)(r)}`,[e]:{marginInlineEnd:a,svg:{verticalAlign:"baseline"}}})}},pn=t=>{const{previewCls:e,modalMaskBg:o,paddingSM:r,marginXL:a,margin:i,paddingLG:v,previewOperationColorDisabled:l,previewOperationHoverColor:f,motionDurationSlow:d,iconCls:w,colorTextLightSolid:c}=t,I=new xe.C(o).setAlpha(.1),p=I.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:a,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:a,right:{_skip_check_:!0,value:a},display:"flex",color:c,backgroundColor:I.toRgbString(),borderRadius:"50%",padding:r,outline:0,border:0,cursor:"pointer",transition:`all ${d}`,"&:hover":{backgroundColor:p.toRgbString()},[`& > ${w}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${(0,ot.unit)(v)}`,backgroundColor:I.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:r,padding:r,cursor:"pointer",transition:`all ${d}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${w}`]:{color:f},"&-disabled":{color:l,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${w}`]:{fontSize:t.previewOperationSize}}}}},Cn=t=>{const{modalMaskBg:e,iconCls:o,previewOperationColorDisabled:r,previewCls:a,zIndexPopup:i,motionDurationSlow:v}=t,l=new xe.C(e).setAlpha(.1),f=l.clone().setAlpha(.2);return{[`${a}-switch-left, ${a}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal({unit:!1}),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:l.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${v}`,userSelect:"none","&:hover":{background:f.toRgbString()},["&-disabled"]:{"&, &:hover":{color:r,background:"transparent",cursor:"not-allowed",[`> ${o}`]:{cursor:"not-allowed"}}},[`> ${o}`]:{fontSize:t.previewOperationSize}},[`${a}-switch-left`]:{insetInlineStart:t.marginSM},[`${a}-switch-right`]:{insetInlineEnd:t.marginSM}}},wn=t=>{const{motionEaseOut:e,previewCls:o,motionDurationSlow:r,componentCls:a}=t;return[{[`${a}-preview-root`]:{[o]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${o}-body`]:Object.assign(Object.assign({},Fe()),{overflow:"hidden"}),[`${o}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${r} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},Fe()),{transition:`transform ${r} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${o}-moving`]:{[`${o}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${a}-preview-root`]:{[`${o}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${a}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal({unit:!1})},"&":[pn(t),Cn(t)]}]},Sn=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},hn(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},Fe())}}},xn=t=>{const{previewCls:e}=t;return{[`${e}-root`]:(0,vn._y)(t,"zoom"),["&"]:(0,mn.J$)(t,!0)}},yn=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new xe.C(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new xe.C(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new xe.C(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5});var at=(0,gn.I$)("Image",t=>{const e=`${t.componentCls}-preview`,o=(0,rt.TS)(t,{previewCls:e,modalMaskBg:new xe.C("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[Sn(o),wn(o),(0,fn.QA)((0,rt.TS)(o,{componentCls:e})),xn(o)]},yn),In=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(o[r[a]]=t[r[a]]);return o};const it={rotateLeft:n.createElement(Ft,null),rotateRight:n.createElement(Kt,null),zoomIn:n.createElement(rn,null),zoomOut:n.createElement(un,null),close:n.createElement(jt.Z,null),left:n.createElement(Dt.Z,null),right:n.createElement(Yt.Z,null),flipX:n.createElement(nt,null),flipY:n.createElement(nt,{rotate:90})};var bn=t=>{var{previewPrefixCls:e,preview:o}=t,r=In(t,["previewPrefixCls","preview"]);const{getPrefixCls:a}=n.useContext(_e.E_),i=a("image",e),v=`${i}-preview`,l=a(),f=(0,et.Z)(i),[d,w,c]=at(i,f),[I]=(0,qe.Cn)("ImagePreview",typeof o=="object"?o.zIndex:void 0),p=n.useMemo(()=>{var g;if(o===!1)return o;const R=typeof o=="object"?o:{},y=$()(w,c,f,(g=R.rootClassName)!==null&&g!==void 0?g:"");return Object.assign(Object.assign({},R),{transitionName:(0,Ye.m)(l,"zoom",R.transitionName),maskTransitionName:(0,Ye.m)(l,"fade",R.maskTransitionName),rootClassName:y,zIndex:I})},[o]);return d(n.createElement(Je.PreviewGroup,Object.assign({preview:p,previewPrefixCls:v,icons:it},r)))},st=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(o[r[a]]=t[r[a]]);return o};const lt=t=>{var e;const{prefixCls:o,preview:r,className:a,rootClassName:i,style:v}=t,l=st(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:f,locale:d=tt.Z,getPopupContainer:w,image:c}=n.useContext(_e.E_),I=f("image",o),p=f(),g=d.Image||tt.Z.Image,R=(0,et.Z)(I),[y,E,z]=at(I,R),X=$()(i,E,z,R),P=$()(a,E,c==null?void 0:c.className),[u]=(0,qe.Cn)("ImagePreview",typeof r=="object"?r.zIndex:void 0),M=n.useMemo(()=>{var m;if(r===!1)return r;const b=typeof r=="object"?r:{},{getContainer:O,closeIcon:C}=b,A=st(b,["getContainer","closeIcon"]);return Object.assign(Object.assign({mask:n.createElement("div",{className:`${I}-mask-info`},n.createElement(Q.Z,null),g==null?void 0:g.preview),icons:it},A),{getContainer:O??w,transitionName:(0,Ye.m)(p,"zoom",b.transitionName),maskTransitionName:(0,Ye.m)(p,"fade",b.maskTransitionName),zIndex:u,closeIcon:C??((m=c==null?void 0:c.preview)===null||m===void 0?void 0:m.closeIcon)})},[r,g,(e=c==null?void 0:c.preview)===null||e===void 0?void 0:e.closeIcon]),h=Object.assign(Object.assign({},c==null?void 0:c.style),v);return y(n.createElement(Je,Object.assign({prefixCls:I,preview:M,rootClassName:X,className:P,style:h},l)))};lt.PreviewGroup=bn;var Zn=lt},10784:function(T,ee,s){"use strict";s.d(ee,{Z:function(){return Q}});var n=s(10422);function Q(Y,$,j,Z){var W=n.unstable_batchedUpdates?function(ye){n.unstable_batchedUpdates(j,ye)}:j;return Y!=null&&Y.addEventListener&&Y.addEventListener($,W,Z),{remove:function(){Y!=null&&Y.removeEventListener&&Y.removeEventListener($,W,Z)}}}},53230:function(T,ee,s){"use strict";s.d(ee,{g1:function(){return Se},os:function(){return Pe}});var n=/margin|padding|width|height|max|min|offset/,Q={left:!0,top:!0},Y={cssFloat:1,styleFloat:1,float:1};function $(S){return S.nodeType===1?S.ownerDocument.defaultView.getComputedStyle(S,null):{}}function j(S,x,F){if(x=x.toLowerCase(),F==="auto"){if(x==="height")return S.offsetHeight;if(x==="width")return S.offsetWidth}return x in Q||(Q[x]=n.test(x)),Q[x]?parseFloat(F)||0:F}function Z(S,x){var F=arguments.length,Ie=$(S);return x=Y[x]?"cssFloat"in S.style?"cssFloat":"styleFloat":x,F===1?Ie:j(S,x,Ie[x]||S.style[x])}function W(S,x,F){var Ie=arguments.length;if(x=Y[x]?"cssFloat"in S.style?"cssFloat":"styleFloat":x,Ie===3)return typeof F=="number"&&n.test(x)&&(F="".concat(F,"px")),S.style[x]=F,F;for(var be in x)x.hasOwnProperty(be)&&W(S,be,x[be]);return $(S)}function N(S){return S===document.body?document.documentElement.clientWidth:S.offsetWidth}function ye(S){return S===document.body?window.innerHeight||document.documentElement.clientHeight:S.offsetHeight}function ve(){var S=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),x=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);return{width:S,height:x}}function Se(){var S=document.documentElement.clientWidth,x=window.innerHeight||document.documentElement.clientHeight;return{width:S,height:x}}function $e(){return{scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}}function Pe(S){var x=S.getBoundingClientRect(),F=document.documentElement;return{left:x.left+(window.pageXOffset||F.scrollLeft)-(F.clientLeft||document.body.clientLeft||0),top:x.top+(window.pageYOffset||F.scrollTop)-(F.clientTop||document.body.clientTop||0)}}},38498:function(T,ee,s){var n=s(78770);function Q(Y){if(Array.isArray(Y))return n(Y)}T.exports=Q,T.exports.__esModule=!0,T.exports.default=T.exports},20698:function(T){function ee(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}T.exports=ee,T.exports.__esModule=!0,T.exports.default=T.exports},91162:function(T){function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}T.exports=ee,T.exports.__esModule=!0,T.exports.default=T.exports},15558:function(T,ee,s){var n=s(38498),Q=s(20698),Y=s(31479),$=s(91162);function j(Z){return n(Z)||Q(Z)||Y(Z)||$()}T.exports=j,T.exports.__esModule=!0,T.exports.default=T.exports}}]);
