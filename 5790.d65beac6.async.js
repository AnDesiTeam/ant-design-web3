"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5790],{95790:function(ge,B,l){l.d(B,{GU:function(){return ie},mg:function(){return k.mg},hm:function(){return se},be:function(){return te}});var V=l(77117),h=l.n(V),K=l(67855),X=l.n(K),Z=l(38887),z=l.n(Z),J=l(95530),Y=l.n(J),$=l(50959),R=l(186),q=l(13448),u=l.n(q),x=l(74815),m=l.n(x),_=l(28152),O=l.n(_),S=l(34609),U=l(32836);function ee(f,a){return F.apply(this,arguments)}function F(){return F=m()(u()().mark(function f(a,d){var c;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,U.Lk)({address:a.address,chainId:d});case 2:return c=e.sent,e.abrupt("return",h()(h()({},a),{},{name:c??void 0}));case 4:case"end":return e.stop()}},f)})),F.apply(this,arguments)}function ne(f,a,d){return Q.apply(this,arguments)}function Q(){return Q=m()(u()().mark(function f(a,d,c){var r,e;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,U.a4)({address:(0,S.O_)(a),args:[d],chainId:c,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return r=t.sent,t.next=5,(0,S.Xw)(r);case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}},f)})),Q.apply(this,arguments)}var E=l(11527),ae=function(a){var d,c=a.children,r=a.assets,e=a.availableChains,v=a.availableConnectors,t=a.ens,M=a.balance,N=a.locale,T=(0,R.mA)(),w=T.address,A=T.isDisconnected,j=$.useState(),D=O()(j,2),y=D[0],I=D[1],le=(0,R.$4)(),ce=le.connectAsync,oe=(0,R.g0)(),L=oe.switchNetwork,de=(0,R.LN)(),g=de.chain,fe=(0,R.qL)(),ve=fe.disconnectAsync,he=$.useState(void 0),G=O()(he,2),C=G[0],H=G[1],me=(0,R.KQ)({address:M&&y?(0,S.O_)(y.address):void 0}),b=me.data;$.useEffect(function(){if(!w||A){I(void 0);return}var s=function(){var n=m()(u()().mark(function i(){var p;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(p={address:w},o.t0=I,!t){o.next=8;break}return o.next=5,ee(p);case 5:o.t1=o.sent,o.next=9;break;case 8:o.t1=p;case 9:o.t2=o.t1,(0,o.t0)(o.t2);case 11:case"end":return o.stop()}},i)}));return function(){return n.apply(this,arguments)}}();s()},[w,A,g,t]);var pe=$.useMemo(function(){return v.map(function(s){var n=r==null?void 0:r.find(function(i){return i.name===s.name});return n!=null&&n.create?n.create(s):(console.error("Can not find wallet factory for ".concat(s.name,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(s){return s!==null})},[v,r]),ye=$.useMemo(function(){return e.map(function(s){var n=r==null?void 0:r.find(function(i){return i.id===s.id});return n!=null&&n.id?{id:n.id,name:n.name,icon:n.icon}:(console.error("Can not find chain ".concat(s.id,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(s){return s!==null})},[e,r]);return $.useEffect(function(){var s;if(!(!g&&C)){var n=g??e[0];if(n){var i=r==null?void 0:r.find(function(p){return p.id===(n==null?void 0:n.id)});(s=i)!==null&&s!==void 0&&s.id||(i={id:n.id,name:n.name}),H(i)}}},[g,r,e,C]),(0,E.jsx)(S.BQ,{locale:N,availableChains:ye,chain:C,account:y,balance:M?{symbol:b==null?void 0:b.symbol,value:b==null?void 0:b.value,decimals:b==null?void 0:b.decimals,icon:C==null||(d=C.nativeCurrency)===null||d===void 0?void 0:d.icon}:void 0,availableWallets:pe,connect:function(){var s=m()(u()().mark(function n(i){var p;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=v.find(function(P){return P.name===(i==null?void 0:i.name)}),o.next=3,ce({connector:p,chainId:C==null?void 0:C.id});case 3:case"end":return o.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),disconnect:m()(u()().mark(function s(){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,ve();case 2:case"end":return i.stop()}},s)})),switchChain:function(){var s=m()(u()().mark(function n(i){return u()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:g?L==null||L(i.id):H(i);case 1:case"end":return W.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),getNFTMetadata:function(){var s=m()(u()().mark(function n(i){var p,W;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return p=i.address,W=i.tokenId,P.abrupt("return",ne(p,W,g==null?void 0:g.id));case 2:case"end":return P.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),children:c})},k=l(52689),re={name:"MetaMask",create:function(){return h()(h()({},k.Zv),{},{hasWalletReady:function(){var a=m()(u()().mark(function c(){var r;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",!!((r=window.ethereum)!==null&&r!==void 0&&r.isMetaMask));case 1:case"end":return v.stop()}},c)}));function d(){return a.apply(this,arguments)}return d}()})}},te={name:"WalletConnect",create:function(a){var d=function(){var c=m()(u()().mark(function r(){var e;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a==null?void 0:a.getProvider();case 2:return e=t.sent,t.abrupt("return",new Promise(function(M){e.on("display_uri",function(N){M({uri:N})})}));case 4:case"end":return t.stop()}},r)}));return function(){return c.apply(this,arguments)}}();return h()(h()({},k.Tl),{},{hasWalletReady:function(){var c=m()(u()().mark(function e(){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!0);case 1:case"end":return t.stop()}},e)}));function r(){return c.apply(this,arguments)}return r}(),getQrCode:(a==null?void 0:a.options.showQrModal)===!1?d:void 0})}},ie={name:"Coinbase Wallet",create:function(){return h()(h()({},k.p_),{},{hasWalletReady:function(){var a=m()(u()().mark(function c(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}},c)}));function d(){return a.apply(this,arguments)}return d}()})}},we={name:"TokenPocket",create:function(){return h()(h()({},k.eu),{},{hasWalletReady:function(){var a=m()(u()().mark(function c(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}},c)}));function d(){return a.apply(this,arguments)}return d}()})}},ue=["children","assets","ens","locale","balance","config"];function se(f){var a=f.children,d=f.assets,c=d===void 0?[]:d,r=f.ens,e=f.locale,v=f.balance,t=f.config,M=Y()(f,ue),N=$.useMemo(function(){var T,w=[],A=z()(t.connectors),j;try{for(A.s();!(j=A.n()).done;){var D=j.value;D.chains.forEach(function(y){w.find(function(I){return I.id===y.id})||w.push(y)})}}catch(y){A.e(y)}finally{A.f()}return(T=t.publicClient.chains)===null||T===void 0||T.forEach(function(y){w.find(function(I){return I.id===y.id})||w.push(y)}),w},[t]);return(0,E.jsx)(R.eM,h()(h()({config:t},M),{},{children:(0,E.jsx)(ae,{locale:e,assets:[].concat(X()(c),[re,k.ny,k.Du]),availableChains:N,availableConnectors:t.connectors||[],ens:r,balance:v,children:a})}))}}}]);
