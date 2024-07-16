(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[2649,9016,4855,985],{75831:function(ce,Y,e){"use strict";e.d(Y,{h:function(){return h},i:function(){return Q}});var z=e(50959),h=z.createContext({}),Q=function(){var w=z.useContext(h);return w}},71209:function(ce,Y,e){"use strict";e.d(Y,{Yq:function(){return D},r3:function(){return M},v8:function(){return g},xv:function(){return v}});var z=e(17069),h=e.n(z),Q=e(25298),E=e.n(Q),w=e(62657),L=e.n(w),_=e(21742),O=e.n(_),C=e(83136),N=e.n(C),B=e(53318),P=e.n(B),G=e(82092),K=e.n(G),M=function(A){O()(b,A);var f=N()(b);function b(){var p,U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"No Bitcoin wallet installed";return E()(this,b),p=f.call(this,U),K()(L()(p),"name",void 0),p.name=p.constructor.name,p}return h()(b)}(P()(Error)),g=function(A){O()(b,A);var f=N()(b);function b(){var p,U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"Can't get address from Bitcoin wallet";return E()(this,b),p=f.call(this,U),K()(L()(p),"name",void 0),p.name=p.constructor.name,p}return h()(b)}(P()(Error)),D=function(A){O()(b,A);var f=N()(b);function b(){var p,U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"Can't fetch the balance";return E()(this,b),p=f.call(this,U),K()(L()(p),"name",void 0),p.name=p.constructor.name,p}return h()(b)}(P()(Error)),v=function(A){O()(b,A);var f=N()(b);function b(){var p,U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"Failed to get inscriptions";return E()(this,b),p=f.call(this,U),K()(L()(p),"name",void 0),p.name=p.constructor.name,p}return h()(b)}(P()(Error))},27888:function(ce,Y,e){"use strict";e.d(Y,{ZB:function(){return P},p:function(){return B},Gi:function(){return K},bT:function(){return G}});var z=e(90228),h=e.n(z),Q=e(87999),E=e.n(Q),w=e(53258),L="https://mempool.space/api",_="https://api.hiro.so",O="https://ordinals.com",C=e(71209),N=e(11527),B=function(g){return{value:BigInt(g),decimals:8,symbol:"BTC",icon:(0,N.jsx)(w.g,{})}},P=function(){var M=E()(h()().mark(function g(D){var v,A,f,b,p;return h()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,fetch("".concat(L,"/address/").concat(D));case 2:if(v=$.sent,!v.ok){$.next=12;break}return $.next=6,v.json();case 6:return A=$.sent,f=A.chain_stats,b=f.funded_txo_sum,p=f.spent_txo_sum,$.abrupt("return",B(b-p));case 12:throw new C.Yq;case 13:case"end":return $.stop()}},g)}));return function(D){return M.apply(this,arguments)}}(),G=function(){var M=E()(h()().mark(function g(D){var v,A,f,b,p,U,$,V,x;return h()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return v=D.address,A=D.limit,f=D.offset,b={address:v,limit:"".concat(A),offset:"".concat(f)},F.next=4,fetch("".concat(_,"/ordinals/v1/inscriptions?").concat(new URLSearchParams(b)));case 4:if(p=F.sent,!p.ok){F.next=15;break}return F.next=8,p.json();case 8:return U=F.sent,$=U.results,V=U.total,x=$.map(function(I){var y=I.id,T=I.number,d=I.address,o=I.value,r=I.timestamp,i=I.content_type,a=I.content_length,t=I.offset,n=I.genesis_tx_id,l=I.location,s=I.output;return{content:"".concat(O,"/content/").concat(y),preview:"".concat(O,"/preview/").concat(y),inscriptionId:y,inscriptionNumber:T,address:d,outputValue:Number(o),contentLength:a,contentType:i,timestamp:r,offset:Number(t),genesisTransaction:n,location:l,output:s}}),F.abrupt("return",{list:x,total:V});case 15:throw new C.xv;case 16:case"end":return F.stop()}},g)}));return function(D){return M.apply(this,arguments)}}(),K=function(){var M=E()(h()().mark(function g(D){var v,A,f;return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,fetch("".concat(_,"/ordinals/v1/inscriptions/").concat(D));case 2:if(v=p.sent,!v.ok){p.next=11;break}return p.next=6,v.json();case 6:return A=p.sent,f=A.id,p.abrupt("return","".concat(O,"/content/").concat(f));case 11:throw new C.xv;case 12:case"end":return p.stop()}},g)}));return function(D){return M.apply(this,arguments)}}()},29513:function(ce,Y,e){"use strict";e.d(Y,{N:function(){return M}});var z=e(90228),h=e.n(z),Q=e(87999),E=e.n(Q),w=e(48305),L=e.n(w),_=e(50959),O=e(75831),C="@ant-design/web3-bitcoin:latest-wallet",N=function(){var D=(0,_.useRef)();(0,_.useEffect)(function(){if(typeof window<"u"&&window.localStorage){var A;D.current=(A=window.localStorage.getItem(C))!==null&&A!==void 0?A:void 0}},[]);var v=function(f){D.current=f,typeof window<"u"&&window.localStorage&&(f?window.localStorage.setItem(C,f):window.localStorage.removeItem(C))};return{latestWalletNameRef:D,cacheSelectedWallet:v}},B=e(25369),P=e(27888),G=e(11527),K=function(D){var v=D.children,A=D.locale,f=D.wallets,b=D.selectWallet,p=D.balance,U=(0,O.i)(),$=U.getBalance,V=U.account,x=(0,_.useState)(),ne=L()(x,2),F=ne[0],I=ne[1];return(0,_.useEffect)(function(){p&&($==null||$().then(function(y){return I(y)}))},[p,$]),(0,G.jsx)(B.B,{addressPrefix:!1,locale:A,availableWallets:f,balance:F,account:V,connect:function(){var y=E()(h()().mark(function T(d){return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:b(d);case 1:case"end":return r.stop()}},T)}));return function(T){return y.apply(this,arguments)}}(),disconnect:E()(h()().mark(function y(){return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:b(null);case 1:case"end":return d.stop()}},y)})),getNFTMetadata:function(){var y=E()(h()().mark(function T(d){var o,r;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=d.address,a.next=3,(0,P.Gi)(o);case 3:return r=a.sent,a.abrupt("return",{image:r});case 5:case"end":return a.stop()}},T)}));return function(T){return y.apply(this,arguments)}}(),children:v})},M=function(D){var v=D.children,A=D.wallets,f=A===void 0?[]:A,b=D.balance,p=b===void 0?!1:b,U=D.locale,$=D.autoConnect,V=(0,_.useState)({}),x=L()(V,2),ne=x[0],F=x[1],I=(0,_.useState)([]),y=L()(I,2),T=y[0],d=y[1],o=(0,O.i)(),r=o.name,i=N(),a=i.latestWalletNameRef,t=i.cacheSelectedWallet;(0,_.useEffect)(function(){f.length!==0&&d(f.map(function(l){return l.create()}))},[f]);var n=function(){var l=E()(h()().mark(function s(m){var u,W;return h()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:if(m){k.next=4;break}return ne&&F({}),t(),k.abrupt("return");case 4:return W=(u=T.find(function(c){return c.name===m.name}))===null||u===void 0?void 0:u.adapter,k.next=7,W==null?void 0:W.connect();case 7:F(W),t(m.name);case 9:case"end":return k.stop()}},s)}));return function(m){return l.apply(this,arguments)}}();return(0,_.useEffect)(function(){if($&&a.current&&!r){var l=T.find(function(s){return s.name===a.current});l&&n(l)}},[T]),(0,G.jsx)(O.h.Provider,{value:ne,children:(0,G.jsx)(K,{selectWallet:n,wallets:T,balance:p,locale:U,children:v})})}},80600:function(ce,Y,e){"use strict";e.d(Y,{Yw:function(){return I},Oq:function(){return ne},x5:function(){return F}});var z=e(83919),h=e(18393),Q=e(30505),E=e(335),w=e.n(E),L=e(90228),_=e.n(L),O=e(87999),C=e.n(O),N=e(17069),B=e.n(N),P=e(25298),G=e.n(P),K=e(82092),M=e.n(K),g=e(71209),D=e(27888),v=B()(function y(T){var d=this;G()(this,y),M()(this,"name",void 0),M()(this,"provider",void 0),M()(this,"account",void 0),M()(this,"connect",C()(_()().mark(function o(){var r;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d.provider){a.next=2;break}throw new g.r3;case 2:return a.prev=2,a.next=5,d.provider.requestAccounts();case 5:r=a.sent,d.account={address:r[0]},a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(2),a.t0;case 12:case"end":return a.stop()}},o,null,[[2,9]])}))),M()(this,"getBalance",C()(_()().mark(function o(){var r,i,a;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(d.provider){n.next=2;break}throw new g.r3;case 2:return n.next=4,d.provider.getBalance();case 4:return r=n.sent,i=r.confirmed,a=(0,D.p)(i),n.abrupt("return",a);case 8:case"end":return n.stop()}},o)}))),M()(this,"signMessage",function(){var o=C()(_()().mark(function r(i){var a;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(d.provider){n.next=2;break}throw new g.r3;case 2:return n.next=4,d.provider.signMessage(i);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}},r)}));return function(r){return o.apply(this,arguments)}}()),M()(this,"sendTransfer",function(){var o=C()(_()().mark(function r(i){var a,t,n,l;return _()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(a=i.to,t=i.sats,n=i.options,d.provider){m.next=3;break}throw new g.r3;case 3:return l="",m.prev=4,m.next=7,d.provider.sendBitcoin(a,t,n);case 7:l=m.sent,m.next=13;break;case 10:throw m.prev=10,m.t0=m.catch(4),m.t0;case 13:return m.abrupt("return",l);case 14:case"end":return m.stop()}},r,null,[[4,10]])}));return function(r){return o.apply(this,arguments)}}()),M()(this,"signPsbt",function(){var o=C()(_()().mark(function r(i){var a,t,n,l,s,m,u,W,S,k,c,ie,j,q,_e,ae;return _()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(t=i.psbt,n=i.options,l=n===void 0?{}:n,d.provider){le.next=3;break}throw new g.r3;case 3:if((a=d.account)!==null&&a!==void 0&&a.address){le.next=5;break}throw new g.v8;case 5:s=l.broadcast,m=s===void 0?!1:s,u=l.signInputs,W=u===void 0?{}:u,S=l.signHash,k=[];for(c in W){ie=w()(W[c]);try{for(ie.s();!(j=ie.n()).done;)_e=j.value,k.push({address:c,index:_e,sighashTypes:S?[S]:void 0,publicKey:(q=d.account)===null||q===void 0?void 0:q.address})}catch(re){ie.e(re)}finally{ie.f()}}return le.next=10,d.provider.signPsbt(t,{autoFinalized:m,toSignInputs:k.length===0?void 0:k});case 10:return ae=le.sent,le.abrupt("return",{psbt:ae});case 12:case"end":return le.stop()}},r)}));return function(r){return o.apply(this,arguments)}}()),M()(this,"getInscriptions",C()(_()().mark(function o(){var r,i,a,t=arguments;return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(r=t.length>0&&t[0]!==void 0?t[0]:0,i=t.length>1&&t[1]!==void 0?t[1]:20,d.provider){l.next=4;break}throw new g.r3;case 4:return l.next=6,d.provider.getInscriptions(r,i);case 6:return a=l.sent,l.abrupt("return",a);case 8:case"end":return l.stop()}},o)}))),this.name=T,this.provider=window.unisat,this.account=void 0}),A=e(48305),f=e.n(A),b=e(59953),p=B()(function y(T){var d=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"XverseProviders.BitcoinProvider";G()(this,y),M()(this,"name",void 0),M()(this,"provider",void 0),M()(this,"account",void 0),M()(this,"payment",void 0),M()(this,"connect",C()(_()().mark(function r(){var i,a,t,n;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(d.provider){s.next=2;break}throw new g.r3;case 2:return s.next=4,(0,b.WY)("getAccounts",{purposes:[b.xJ.Ordinals,b.xJ.Payment]});case 4:if(i=s.sent,i.status!=="error"){s.next=7;break}throw new Error(i.error.message);case 7:a=f()(i.result,2),t=a[0],n=a[1],d.account={address:t.address},d.payment=n.address;case 10:case"end":return s.stop()}},r)}))),M()(this,"getBalance",C()(_()().mark(function r(){var i;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(d.payment){t.next=2;break}throw new g.v8;case 2:return t.next=4,(0,D.ZB)(d.payment);case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}},r)}))),M()(this,"signMessage",function(){var r=C()(_()().mark(function i(a){var t,n;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(d.provider){s.next=2;break}throw new g.r3;case 2:if((t=d.account)!==null&&t!==void 0&&t.address){s.next=4;break}throw new g.v8;case 4:return s.next=6,(0,b.WY)("signMessage",{address:d.account.address,message:a});case 6:if(n=s.sent,n.status!=="success"){s.next=11;break}return s.abrupt("return",n.result.signature);case 11:throw new Error(n.error.message);case 12:case"end":return s.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()),M()(this,"sendTransfer",function(){var r=C()(_()().mark(function i(a){var t,n,l,s;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=a.to,n=a.sats,l="",u.next=4,(0,b.WY)("sendTransfer",{recipients:[{address:t,amount:n}]});case 4:if(s=u.sent,s.status!=="success"){u.next=9;break}l=s.result.txid,u.next=10;break;case 9:throw new Error(s.error.message);case 10:return u.abrupt("return",l);case 11:case"end":return u.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()),M()(this,"signPsbt",function(){var r=C()(_()().mark(function i(a){var t,n,l,s;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(n=a.psbt,l=a.options,d.provider){u.next=3;break}throw new g.r3;case 3:return u.next=5,(0,b.WY)("signPsbt",{psbt:n,signInputs:(t=l==null?void 0:l.signInputs)!==null&&t!==void 0?t:{},broadcast:!!(l!=null&&l.broadcast),allowedSignHash:l==null?void 0:l.signHash});case 5:if(s=u.sent,s.status!=="success"){u.next=10;break}return u.abrupt("return",s.result);case 10:throw new Error(s.error.message);case 11:case"end":return u.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()),M()(this,"getInscriptions",C()(_()().mark(function r(){var i,a,t,n,l,s=arguments;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=s.length>0&&s[0]!==void 0?s[0]:0,n=s.length>1&&s[1]!==void 0?s[1]:20,(i=d.account)!==null&&i!==void 0&&i.address){u.next=4;break}throw new g.v8;case 4:return u.next=6,(0,D.bT)({address:(a=d.account)===null||a===void 0?void 0:a.address,offset:t,limit:n});case 6:return l=u.sent,u.abrupt("return",l);case 8:case"end":return u.stop()}},r)}))),this.name=T,this.provider=(0,b.Mh)(o)}),U=B()(function y(T){var d=this,o;G()(this,y),M()(this,"name",void 0),M()(this,"provider",void 0),M()(this,"account",void 0),M()(this,"connect",C()(_()().mark(function r(){var i;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(d.provider){t.next=2;break}throw new g.r3;case 2:return t.prev=2,t.next=5,d.provider.requestAccounts();case 5:i=t.sent,d.account={address:i[0]},t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(2),t.t0;case 12:case"end":return t.stop()}},r,null,[[2,9]])}))),M()(this,"getBalance",C()(_()().mark(function r(){var i,a;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(d.provider){n.next=2;break}throw new g.r3;case 2:return n.next=4,d.provider.getBalance();case 4:return i=n.sent,a=i.confirmed,n.abrupt("return",(0,D.p)(a));case 7:case"end":return n.stop()}},r)}))),M()(this,"signMessage",function(){var r=C()(_()().mark(function i(a){return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(d.provider){n.next=2;break}throw new g.r3;case 2:return n.next=4,d.provider.signMessage(a);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()),M()(this,"sendTransfer",function(){var r=C()(_()().mark(function i(a){var t,n,l,s;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=a.to,n=a.sats,l=a.options,d.provider){u.next=3;break}throw new g.r3;case 3:return s="",u.prev=4,u.next=7,d.provider.sendBitcoin(t,n,l);case 7:s=u.sent,u.next=13;break;case 10:throw u.prev=10,u.t0=u.catch(4),u.t0;case 13:return u.abrupt("return",s);case 14:case"end":return u.stop()}},i,null,[[4,10]])}));return function(i){return r.apply(this,arguments)}}()),M()(this,"signPsbt",function(){var r=C()(_()().mark(function i(a){var t,n,l,s,m,u,W,S,k,c,ie,j,q,_e,ae,ue;return _()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(n=a.psbt,l=a.options,s=l===void 0?{}:l,d.provider){re.next=3;break}throw new g.r3;case 3:if((t=d.account)!==null&&t!==void 0&&t.address){re.next=5;break}throw new g.v8;case 5:m=s.broadcast,u=m===void 0?!1:m,W=s.signInputs,S=W===void 0?{}:W,k=s.signHash,c=[];for(ie in S){j=w()(S[ie]);try{for(j.s();!(q=j.n()).done;)ae=q.value,c.push({address:ie,index:ae,sighashTypes:k?[k]:void 0,publicKey:(_e=d.account)===null||_e===void 0?void 0:_e.address})}catch(he){j.e(he)}finally{j.f()}}return re.next=10,d.provider.signPsbt(n,{autoFinalized:u,toSignInputs:c.length===0?void 0:c});case 10:return ue=re.sent,re.abrupt("return",{psbt:ue});case 12:case"end":return re.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()),M()(this,"getInscriptions",C()(_()().mark(function r(){var i,a,t,n=arguments;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(i=n.length>0&&n[0]!==void 0?n[0]:0,a=n.length>1&&n[1]!==void 0?n[1]:20,d.provider){s.next=4;break}throw new g.r3;case 4:return s.next=6,d.provider.getInscriptions(i,a);case 6:return t=s.sent,s.abrupt("return",t);case 8:case"end":return s.stop()}},r)}))),this.name=T,this.provider=(o=window.okxwallet)===null||o===void 0?void 0:o.bitcoin,this.account=void 0}),$=e(26068),V=e.n($),x=function(T,d){return{create:function(){var r=new T(d.name);return V()(V()({},d),{},{adapter:r,hasWalletReady:function(){return Promise.resolve(!!r.provider)},hasExtensionInstalled:function(){return Promise.resolve(!!r.provider)}})}}},ne=function(){return x(v,z.S)},F=function(){return x(p,h.J)},I=function(){return x(U,Q.t)}},52033:function(ce,Y,e){"use strict";e.r(Y),e.d(Y,{CoinbaseWallet:function(){return f.G},EthWeb3jsConfigProvider:function(){return v},ImToken:function(){return V.V},MetaMask:function(){return A.M},OkxWallet:function(){return $.Y},SafeheronWallet:function(){return p.V},TokenPocket:function(){return b.g},UniversalWallet:function(){return U.M},clientToWeb3js:function(){return F},useWeb3js:function(){return I}});var z=e(26068),h=e.n(z),Q=e(15558),E=e.n(Q),w=e(67825),L=e.n(w),_=e(50959),O=e(260),C=e(72558),N=e(32917),B=e(25421),P=e(48079),G=e(79344),K=e(33320),M=e(99972),g=e(11527),D=["children","walletConnect","storage"],v=function(T){var d,o=T.children,r=T.walletConnect,i=T.storage,a=L()(T,D),t=_.useMemo(function(){var s;return((s=a.chains)!==null&&s!==void 0?s:[O.ny]).map(function(m){var u,W=(u=Object.values(G).find(function(S){return S.id===m.id}))!==null&&u!==void 0?u:null;return W!=null&&W.id||console.warn("Chain ".concat(m.id," is not supported")),W}).filter(function(m){return m!==null})},[(d=a.chains)===null||d===void 0?void 0:d.map(function(s){return s.id}).join()]),n=_.useMemo(function(){var s,m=E()((s=a.wallets)!==null&&s!==void 0?s:[]);return r&&r.projectId&&m.push((0,C.b)()),m},[a.wallets,r]),l=_.useMemo(function(){var s,m=Object.fromEntries(t.map(function(S){return[S.id,(0,B.d)()]})),u=[K.L()];if(((s=a.wallets)!==null&&s!==void 0?s:[]).forEach(function(S){S.name&&u.push(K.L({target:S.name}))}),r&&r.projectId){var W;u.push(M.a(h()(h()({},r),{},{showQrModal:(W=r.useWalletConnectOfficialModal)!==null&&W!==void 0?W:!1})))}return(0,P._)({chains:t,transports:m,connectors:u,storage:i===!1?null:i})},[t,r,a.wallets,i]);return(0,g.jsx)(N.h,h()(h()({},a),{},{config:l,wallets:n,children:o}))},A=e(69970),f=e(73696),b=e(19644),p=e(45438),U=e(99147),$=e(22765),V=e(83614),x=e(46061),ne=e(67150),F=function(T){var d=T.transport;return d.type==="fallback"?new ne.BvB(d.transports[0].value.url):new ne.BvB(d)};function I(){var y=(0,x.L)(),T=y.data;return(0,_.useMemo)(function(){return T?F(T):null},[T])}},48091:function(ce,Y,e){"use strict";e.d(Y,{G:function(){return v}});var z=e(26068),h=e.n(z),Q=e(15558),E=e.n(Q),w=e(67825),L=e.n(w),_=e(50959),O=e(260),C=e(72558),N=e(32917),B=e(25421),P=e(48079),G=e(79344),K=e(33320),M=e(99972),g=e(11527),D=["children","walletConnect","storage"],v=function(f){var b,p=f.children,U=f.walletConnect,$=f.storage,V=L()(f,D),x=_.useMemo(function(){var I;return((I=V.chains)!==null&&I!==void 0?I:[O.ny]).map(function(y){var T,d=(T=Object.values(G).find(function(o){return o.id===y.id}))!==null&&T!==void 0?T:null;return d!=null&&d.id||console.warn("Chain ".concat(y.id," is not supported")),d}).filter(function(y){return y!==null})},[(b=V.chains)===null||b===void 0?void 0:b.map(function(I){return I.id}).join()]),ne=_.useMemo(function(){var I,y=E()((I=V.wallets)!==null&&I!==void 0?I:[]);return U&&U.projectId&&y.push((0,C.b)()),y},[V.wallets,U]),F=_.useMemo(function(){var I,y=Object.fromEntries(x.map(function(o){return[o.id,(0,B.d)()]})),T=[K.L()];if(((I=V.wallets)!==null&&I!==void 0?I:[]).forEach(function(o){o.name&&T.push(K.L({target:o.name}))}),U&&U.projectId){var d;T.push(M.a(h()(h()({},U),{},{showQrModal:(d=U.useWalletConnectOfficialModal)!==null&&d!==void 0?d:!1})))}return(0,P._)({chains:x,transports:y,connectors:T,storage:$===!1?null:$})},[x,U,V.wallets,$]);return(0,g.jsx)(N.h,h()(h()({},V),{},{config:F,wallets:ne,children:p}))}},18760:function(ce,Y,e){"use strict";e.d(Y,{Z:function(){return L},j:function(){return w}});var z=e(50959),h=e(10327),Q=e(26654),E=e(9337);function w(_){var O,C=_.chain,N=_.transport,B={chainId:C.id,name:C.name,ensAddress:(O=C.contracts)===null||O===void 0||(O=O.ensRegistry)===null||O===void 0?void 0:O.address};if(N.type==="fallback"){var P=N.transports.map(function(G){var K=G.value;return new h.r6(K==null?void 0:K.url,B)});return P.length===1?P[0]:new Q.H(P)}return new h.r6(N.url,B)}function L(){var _=(0,E.m)();return(0,z.useMemo)(function(){return _?w(_):null},[_])}},22874:function(ce,Y,e){"use strict";e.d(Y,{r:function(){return w},z:function(){return L}});var z=e(50959),h=e(65178),Q=e(10327),E=e(46061);function w(_){var O,C=_.account,N=_.chain,B=_.transport,P=N?{chainId:N.id,name:N.name,ensAddress:(O=N.contracts)===null||O===void 0||(O=O.ensRegistry)===null||O===void 0?void 0:O.address}:void 0,G=new h.Q(B,P),K=new Q.C1(G,C.address);return K}function L(){var _=(0,E.L)(),O=_.data;return(0,z.useMemo)(function(){return O?w(O):null},[O])}},58814:function(ce,Y,e){"use strict";e.d(Y,{Q6:function(){return E},Zj:function(){return h},ol:function(){return Q}});var z=e(92049),h={id:z.JR.MainnetBeta,name:"Solana",network:"mainnet-beta",rpcUrls:{default:"https://api.mainnet-beta.solana.com"}},Q={id:z.JR.Devnet,name:"Solana Devnet",network:"devnet",rpcUrls:{default:"https://api.devnet.solana.com"}},E={id:z.JR.Testnet,name:"Solana Testnet",network:"testnet",rpcUrls:{default:"https://api.testnet.solana.com"}}},54554:function(ce,Y,e){"use strict";e.d(Y,{G:function(){return T}});var z=e(26068),h=e.n(z),Q=e(48305),E=e.n(Q),w=e(50959),L=e(99266),_=e(36933),O=e(82218),C=e(60791),N=e(58814),B=e(35373),P=function(o){return o===B.i1.Installed||o===B.i1.Loadable},G=function(o){return!!o.isWalletConnect},K=function(o){return o.adapter!==void 0},M=e(15558),g=e.n(M),D=e(90228),v=e.n(D),A=e(87999),f=e.n(A),b=e(25369),p=e(2978),U=e(61955),$=e(75975),V=e(56986),x=e(61925),ne=e(11527),F=function(o){var r,i,a=(0,$.O)(),t=a.publicKey,n=a.connected,l=a.connect,s=a.select,m=a.disconnect,u=a.wallet,W=a.wallets,S=(0,V.R)(),k=S.connection,c=(0,w.useRef)(),ie=(0,w.useState)(),j=E()(ie,2),q=j[0],_e=j[1],ae=(0,w.useState)(),ue=E()(ae,2),le=ue[0],re=ue[1],he=(0,w.useState)(function(){var R,H;return(R=u==null||(H=u.adapter)===null||H===void 0?void 0:H.name)!==null&&R!==void 0?R:null}),Me=E()(he,2),Ee=Me[0],De=Me[1];(0,w.useEffect)(function(){if(!(t&&n)){re(void 0);return}re({address:t.toBase58()})},[t,n,u==null||(r=u.adapter)===null||r===void 0?void 0:r.name]),(0,w.useEffect)(function(){c.current&&n&&(c.current.resolve(),c.current=void 0)},[n]),(0,w.useEffect)(function(){if(o.connectionError){var R;(R=c.current)===null||R===void 0||R.reject(o.connectionError),c.current=void 0}},[o.connectionError]),(0,w.useEffect)(function(){if(o.balance&&k&&t){var R=function(){var H=f()(v()().mark(function Z(){var J;return v()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,k.getBalance(t);case 2:J=X.sent,_e(BigInt(J));case 4:case"end":return X.stop()}},Z)}));return function(){return H.apply(this,arguments)}}();R()}},[k,t,o.balance]),(0,w.useEffect)(function(){var R;if(u!=null&&(R=u.adapter)!==null&&R!==void 0&&R.name){if(!P(u.adapter.readyState)){s(null);return}l()}else n&&m()},[u==null||(i=u.adapter)===null||i===void 0?void 0:i.name,n]);var de=(0,w.useMemo)(function(){return o.availableChains.map(function(R){var H,Z=(H=o.chainAssets)===null||H===void 0?void 0:H.find(function(J){return J.id===R.id});return Z!=null&&Z.id?h()(h()(h()({},R),Z),{},{id:Z.id,name:Z.name,icon:Z.icon}):(console.error("Can not find chain ".concat(R.id,", SolanaWeb3ConfigProvider only support Solana")),null)}).filter(function(R){return R!==null})},[o.availableChains,o.chainAssets]),ge=(0,w.useMemo)(function(){var R=o.availableWallets.map(function(J){var ee,X=W==null||(ee=W.find(function(se){return se.adapter.name===J.name}))===null||ee===void 0?void 0:ee.adapter,oe=X instanceof x.Zc;return h()(h()({},J),{},{hasExtensionInstalled:oe?void 0:f()(v()().mark(function se(){return v()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.abrupt("return",(X==null?void 0:X.readyState)===B.i1.Installed);case 1:case"end":return te.stop()}},se)})),hasWalletReady:function(){var se=f()(v()().mark(function te(){return v()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.abrupt("return",P(X==null?void 0:X.readyState));case 1:case"end":return fe.stop()}},te)}));function me(){return se.apply(this,arguments)}return me}()})});if(!o.autoAddRegisteredWallets)return R;var H=R.map(function(J){return J.name}),Z=W.filter(function(J){return!H.includes(J.adapter.name)}).map(function(J){var ee=J.adapter;return{name:ee.name,icon:ee.icon,remark:ee.name,hasExtensionInstalled:function(){var X=f()(v()().mark(function se(){return v()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.abrupt("return",ee.readyState===B.i1.Installed);case 1:case"end":return te.stop()}},se)}));function oe(){return X.apply(this,arguments)}return oe}(),hasWalletReady:function(){var X=f()(v()().mark(function se(){return v()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.abrupt("return",P(ee.readyState));case 1:case"end":return te.stop()}},se)}));function oe(){return X.apply(this,arguments)}return oe}()}});return[].concat(g()(R),g()(Z))},[o.availableWallets,W,o.autoAddRegisteredWallets]),we=(0,w.useMemo)(function(){return de.find(function(R){var H;return R.id===((H=o.currentChain)===null||H===void 0?void 0:H.id)})},[o.currentChain,de]),ve=we==null?void 0:we.nativeCurrency;return(0,ne.jsx)(b.B,{locale:o.locale,account:le,chain:we,balance:o.balance?{symbol:ve==null?void 0:ve.symbol,decimals:ve==null?void 0:ve.decimals,value:q,icon:ve==null?void 0:ve.icon}:void 0,addressPrefix:!1,availableChains:de,availableWallets:ge,switchChain:function(){var R=f()(v()().mark(function H(Z){var J,ee;return v()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:ee=de.find(function(se){return se.id===Z.id}),(J=o.onCurrentChainChange)===null||J===void 0||J.call(o,ee??de[0]),s(Ee);case 3:case"end":return oe.stop()}},H)}));return function(H){return R.apply(this,arguments)}}(),connect:function(){var R=f()(v()().mark(function H(Z,J){var ee,X,oe,se,me;return v()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return(J==null?void 0:J.connectType)==="qrCode"&&s(null),se=new Promise(function(fe,Ce){X=fe,oe=Ce}),c.current={promise:se,resolve:X,reject:oe},me=(ee=Z==null?void 0:Z.name)!==null&&ee!==void 0?ee:null,s(me),De(me),pe.abrupt("return",se);case 7:case"end":return pe.stop()}},H)}));return function(H,Z){return R.apply(this,arguments)}}(),disconnect:f()(v()().mark(function R(){return v()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:m();case 1:case"end":return Z.stop()}},R)})),getNFTMetadata:function(){var R=f()(v()().mark(function H(Z){var J,ee,X,oe,se,me,te,pe,fe;return v()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return se=Z.address,me=new p.I(k),te=me.nfts(),pe=new U.PublicKey(se),be.next=6,te.findByMint({mintAddress:pe});case 6:return fe=be.sent,be.abrupt("return",{name:(J=fe.json)===null||J===void 0?void 0:J.name,image:(ee=fe.json)===null||ee===void 0?void 0:ee.image,description:(X=fe.json)===null||X===void 0?void 0:X.description,attributes:(oe=fe.json)===null||oe===void 0?void 0:oe.attributes});case 8:case"end":return be.stop()}},H)}));return function(H){return R.apply(this,arguments)}}(),children:o.children})},I=function(o){var r=(0,w.useState)([]),i=E()(r,2),a=i[0],t=i[1],n=(0,w.useState)(!1),l=E()(n,2),s=l[0],m=l[1],u=(0,w.useState)(null),W=E()(u,2),S=W[0],k=W[1],c=y(a),ie=(0,w.useCallback)(f()(v()().mark(function j(){var q;return v()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(!S){ae.next=2;break}return ae.abrupt("return",Promise.resolve(S));case 2:return q=new Promise(function(ue){t(function(le){return[].concat(g()(le),[ue])})}),ae.abrupt("return",q);case 4:case"end":return ae.stop()}},j)})),[S]);return(0,w.useEffect)(function(){s||!o||(m(!0),Promise.all([e.e(234),e.e(8328)]).then(e.bind(e,48328)).then(function(){var j=f()(v()().mark(function q(_e){var ae,ue;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return ae=_e.UniversalProvider,re.next=3,ae.init(o);case 3:ue=re.sent,k(ue),c.current.forEach(function(he){he(ue)});case 6:case"end":return re.stop()}},q)}));return function(q){return j.apply(this,arguments)}}()))},[s,c,o]),(0,w.useEffect)(function(){return function(){m(!1)}},[]),ie};function y(d){var o=(0,w.useRef)(d);return o.current=d,o}var T=function(o){var r=o.locale,i=o.chains,a=i===void 0?[N.Zj]:i,t=o.wallets,n=t===void 0?[]:t,l=o.balance,s=o.rpcProvider,m=o.connectionConfig,u=o.autoConnect,W=o.walletConnect,S=o.autoAddRegisteredWallets,k=o.children,c=o.walletProviderProps,ie=(0,w.useState)(a[0]),j=E()(ie,2),q=j[0],_e=j[1],ae=(0,w.useState)(),ue=E()(ae,2),le=ue[0],re=ue[1],he=I(W),Me=(0,w.useMemo)(function(){return typeof s=="function"?s(q):(q??N.Zj).rpcUrls.default},[s,q]),Ee=n.map(function(de){return de.create(he)}),De=(0,w.useMemo)(function(){return n.filter(K).map(function(de){return G(de)&&(de.adapter.setWalletConnectProviderGetter(he),de.adapter.setWalletConnectConfigGetter(function(){return{walletConnect:W,currentChain:q,rpcEndpoint:Me}})),de.adapter})},[q,Me,W,he,n]);return(0,ne.jsx)(O.U,{endpoint:Me,config:m,children:(0,ne.jsx)(C.n,h()(h()({wallets:De,autoConnect:u},c),{},{onError:function(ge,we){var ve;ge instanceof _.$w&&re(ge),c==null||(ve=c.onError)===null||ve===void 0||ve.call(c,ge,we)},children:(0,ne.jsx)(F,{locale:r,chainAssets:[L.YP,L.$0,L.x$],availableWallets:Ee,balance:l,currentChain:q,onCurrentChainChange:function(ge){return _e(ge)},availableChains:a,connectionError:le,autoAddRegisteredWallets:S,children:k})}))})}},61925:function(ce,Y,e){"use strict";e.d(Y,{Zc:function(){return y}});var z=e(26068),h=e.n(z),Q=e(90228),E=e.n(Q),w=e(87999),L=e.n(w),_=e(25298),O=e.n(_),C=e(17069),N=e.n(C),B=e(62657),P=e.n(B),G=e(21742),K=e.n(G),M=e(83136),g=e.n(M),D=e(82092),v=e.n(D),A=e(35373),f=e(36933),b=e(10258),p=e(35715),U=e(31480),$=e(53956),V=e(11565),x=e.n(V),ne=e(36379).lW,F="WalletConnect",I=v()(v()({},"mainnet-beta","solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"),"devnet","solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"),y=function(T){K()(o,T);var d=g()(o);function o(){var r;return O()(this,o),r=d.call(this),v()(P()(r),"name",F),v()(P()(r),"url","https://walletconnect.org"),v()(P()(r),"icon","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+"),v()(P()(r),"supportedTransactionVersions",new Set(["legacy",0])),v()(P()(r),"_publicKey",void 0),v()(P()(r),"_connecting",void 0),v()(P()(r),"_walletProvider",void 0),v()(P()(r),"_getWalletConnectProvider",void 0),v()(P()(r),"_getWalletConnectConfigGetter",void 0),v()(P()(r),"_readyState",typeof window>"u"?A.i1.Unsupported:A.i1.Loadable),v()(P()(r),"_disconnected",function(){var i=r._walletProvider;i&&(i.off("session_delete",r._disconnected),r._walletProvider=void 0,r._publicKey=void 0,r.emit("error",new f.at),r.emit("disconnect"))}),r._connecting=!1,r}return N()(o,[{key:"publicKey",get:function(){return this._publicKey||null}},{key:"connecting",get:function(){return this._connecting}},{key:"readyState",get:function(){return this._readyState}},{key:"setWalletConnectProviderGetter",value:function(i){this._getWalletConnectProvider=function(){return i()}}},{key:"setWalletConnectConfigGetter",value:function(i){this._getWalletConnectConfigGetter=i}},{key:"connect",value:function(){var r=L()(E()().mark(function a(){var t,n,l,s,m,u,W,S;return E()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,!(this.connected||this.connecting)){c.next=3;break}return c.abrupt("return");case 3:if(this._readyState===A.i1.Loadable){c.next=5;break}throw new f.OZ;case 5:if(l=(t=this._getWalletConnectConfigGetter)===null||t===void 0?void 0:t.call(this),l){c.next=8;break}throw new Error("WalletConnect config not available");case 8:if(s=l.currentChain&&I[l.currentChain.network],s){c.next=11;break}throw new f.$w("Chain not supported");case 11:return this._connecting=!0,c.next=14,(n=this._getWalletConnectProvider)===null||n===void 0?void 0:n.call(this);case 14:if(m=c.sent,m){c.next=17;break}throw new Error("WalletConnect provider not available");case 17:return this._walletProvider=m,c.prev=18,u=this._walletProvider.client.session.map.size>0,c.next=22,m.connect({namespaces:{solana:{chains:[s],methods:["solana_signMessage","solana_signTransaction"],events:[],rpcMap:v()({},(0,$.DQe)(s).reference,l.rpcEndpoint)}},skipPairing:u});case 22:c.next=27;break;case 24:throw c.prev=24,c.t0=c.catch(18),new f.$w(c.t0===null||c.t0===void 0?void 0:c.t0.message,c.t0);case 27:m.on("session_delete",this._disconnected),W=(0,$.cwA)(this._walletProvider.session.namespaces.solana.accounts[0]),S=W.address,this._publicKey=new U.nh(S),this.emit("connect",this.publicKey),c.next=37;break;case 33:throw c.prev=33,c.t1=c.catch(0),this.emit("error",c.t1),c.t1;case 37:return c.prev=37,this._connecting=!1,c.finish(37);case 40:case"end":return c.stop()}},a,this,[[0,33,37,40],[18,24]])}));function i(){return r.apply(this,arguments)}return i}()},{key:"disconnect",value:function(){var r=L()(E()().mark(function a(){var t;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(t=this._walletProvider,!t){l.next=13;break}return t.off("session_delete",this._disconnected),this._walletProvider=void 0,this._publicKey=void 0,l.prev=5,l.next=8,t.disconnect();case 8:l.next=13;break;case 10:l.prev=10,l.t0=l.catch(5),this.emit("error",new f.UG(l.t0===null||l.t0===void 0?void 0:l.t0.message,l.t0));case 13:this.emit("disconnect");case 14:case"end":return l.stop()}},a,this,[[5,10]])}));function i(){return r.apply(this,arguments)}return i}()},{key:"signTransaction",value:function(){var r=L()(E()().mark(function a(t){var n,l,s,m,u,W,S,k,c;return E()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(j.prev=0,l=this._walletProvider,l){j.next=4;break}throw new f.oS;case 4:if(this.publicKey){j.next=6;break}throw new f.Nx;case 6:return s=(n=this._getWalletConnectConfigGetter)===null||n===void 0||(n=n.call(this).currentChain)===null||n===void 0?void 0:n.network,m=s&&I[s],(0,b.W)(t)?(u=ne.from(t.serialize()).toString("base64"),t.version==="legacy"&&(W=U.YW.from(t.serialize()))):(u=t.serialize({requireAllSignatures:!1,verifySignatures:!1}).toString("base64"),W=t),j.prev=9,j.next=12,l.request({method:"solana_signTransaction",params:h()(h()({pubkey:(S=this.publicKey)===null||S===void 0?void 0:S.toString()},W),{},{transaction:u})},m);case 12:return k=j.sent,c=k.signature,t.addSignature(this.publicKey,ne.from(x().decode(c))),j.abrupt("return",t);case 18:throw j.prev=18,j.t0=j.catch(9),new f.PY(j.t0===null||j.t0===void 0?void 0:j.t0.message,j.t0);case 21:j.next=27;break;case 23:throw j.prev=23,j.t1=j.catch(0),this.emit("error",j.t1),j.t1;case 27:case"end":return j.stop()}},a,this,[[0,23],[9,18]])}));function i(a){return r.apply(this,arguments)}return i}()},{key:"signMessage",value:function(){var r=L()(E()().mark(function a(t){var n,l,s,m,u,W,S;return E()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,l=this._walletProvider,l){c.next=4;break}throw new f.oS;case 4:return s=(n=this._getWalletConnectConfigGetter)===null||n===void 0||(n=n.call(this).currentChain)===null||n===void 0?void 0:n.network,m=s&&I[s],c.prev=6,c.next=9,l.request({method:"solana_signMessage",params:{pubkey:(u=this.publicKey)===null||u===void 0?void 0:u.toString(),message:x().encode(t)}},m);case 9:return W=c.sent,S=W.signature,c.abrupt("return",x().decode(S));case 14:throw c.prev=14,c.t0=c.catch(6),new f.fk(c.t0===null||c.t0===void 0?void 0:c.t0.message,c.t0);case 17:c.next=23;break;case 19:throw c.prev=19,c.t1=c.catch(0),this.emit("error",c.t1),c.t1;case 23:case"end":return c.stop()}},a,this,[[0,19],[6,14]])}));function i(a){return r.apply(this,arguments)}return i}()}]),o}(p.sz)},21148:function(ce,Y,e){"use strict";e.d(Y,{D2:function(){return K},GU:function(){return B},bS:function(){return M},d0:function(){return P},eM:function(){return g},j1:function(){return G}});var z=e(21013),h=e(21361),Q=e(30049),E=e(30505),w=e(72956),L=e(62839),_=e(36503),O=e(77892),C=e(61925),N=e(93355),B=function(){return(0,N.$d)(new _.A,z.p)},P=function(){return(0,N.$d)(new O.H,h.I)},G=function(){return(0,N.Oy)(Q.m)},K=function(){return(0,N.Oy)(E.t)},M=function(){return(0,N.Oy)(w.C)},g=function(){return(0,N.Ho)(new C.Zc,L.T)}},93355:function(ce,Y,e){"use strict";e.d(Y,{$d:function(){return _},Ho:function(){return C},Oy:function(){return O}});var z=e(90228),h=e.n(z),Q=e(87999),E=e.n(Q),w=e(26068),L=e.n(w),_=function(B,P){return{adapter:B,create:function(){return L()(L()({},P),{},{name:B.name,remark:P.remark,adapter:B})}}},O=function(B){return{create:function(){return L()(L()({},B),{},{isStandardWallet:!0})}}},C=function(B,P){return{isWalletConnect:!0,adapter:B,create:function(K){return L()(L()({},P),{},{name:B.name,remark:P.remark,adapter:B,getQrCode:K?E()(h()().mark(function M(){var g;return h()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,K();case 2:if(g=v.sent,g){v.next=5;break}return v.abrupt("return",Promise.reject(new Error("WalletConnect is not available")));case 5:return v.abrupt("return",new Promise(function(A){g.on("display_uri",function(f){A({uri:f})})}));case 6:case"end":return v.stop()}},M)})):void 0})}}}},85898:function(){},44087:function(){},10985:function(){},11314:function(){},79391:function(){},81388:function(){},33517:function(){},84232:function(){},14050:function(){},87942:function(){},82880:function(){}}]);
