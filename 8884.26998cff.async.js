"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8884],{28884:function(K,P,l){l.d(P,{EthereumProvider:function(){return W}});var y=l(72100),z=l.n(y),g=l(50373),b=l(46856);const A="wc",R="ethereum_provider",T=`${A}@2:${R}:`,S="https://rpc.walletconnect.com/v1/",w=["eth_sendTransaction","personal_sign"],D=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],I=["chainChanged","accountsChanged"],$=["chainChanged","accountsChanged","message","disconnect","connect"];var j=Object.defineProperty,U=Object.defineProperties,q=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,O=(a,s,t)=>s in a?j(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,u=(a,s)=>{for(var t in s||(s={}))N.call(s,t)&&O(a,t,s[t]);if(M)for(var t of M(s))L.call(s,t)&&O(a,t,s[t]);return a},v=(a,s)=>U(a,q(s));function m(a){return Number(a[0].split(":")[1])}function C(a){return`0x${a.toString(16)}`}function Q(a){const{chains:s,optionalChains:t,methods:e,optionalMethods:i,events:n,optionalEvents:o,rpcMap:r}=a;if(!(0,g.qt8)(s))throw new Error("Invalid chains");const c={chains:s,methods:e||w,events:n||I,rpcMap:u({},s.length?{[m(s)]:r[m(s)]}:{})},h=n==null?void 0:n.filter(p=>!I.includes(p)),d=e==null?void 0:e.filter(p=>!w.includes(p));if(!t&&!o&&!i&&!(h!=null&&h.length)&&!(d!=null&&d.length))return{required:s.length?c:void 0};const E=(h==null?void 0:h.length)&&(d==null?void 0:d.length)||!t,_={chains:[...new Set(E?c.chains.concat(t||[]):t)],methods:[...new Set(c.methods.concat(i!=null&&i.length?i:D))],events:[...new Set(c.events.concat(o!=null&&o.length?o:$))],rpcMap:r};return{required:s.length?c:void 0,optional:t.length?_:void 0}}class f{constructor(){this.events=new y.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=T,this.on=(s,t)=>(this.events.on(s,t),this),this.once=(s,t)=>(this.events.once(s,t),this),this.removeListener=(s,t)=>(this.events.removeListener(s,t),this),this.off=(s,t)=>(this.events.off(s,t),this),this.parseAccount=s=>this.isCompatibleChainId(s)?this.parseAccountId(s).address:s,this.signer={},this.rpc={}}static async init(s){const t=new f;return await t.initialize(s),t}async request(s,t){return await this.signer.request(s,this.formatChainId(this.chainId),t)}sendAsync(s,t,e){this.signer.sendAsync(s,t,this.formatChainId(this.chainId),e)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(s){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(s);const{required:t,optional:e}=Q(this.rpc);try{const i=await new Promise(async(o,r)=>{var c;this.rpc.showQrModal&&((c=this.modal)==null||c.subscribeModal(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),r(new Error("Connection request reset. Please try again.")))})),await this.signer.connect(v(u({namespaces:u({},t&&{[this.namespace]:t})},e&&{optionalNamespaces:{[this.namespace]:e}}),{pairingTopic:s==null?void 0:s.pairingTopic})).then(h=>{o(h)}).catch(h=>{r(new Error(h.message))})});if(!i)return;const n=(0,g.guN)(i.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:C(this.chainId)})}catch(i){throw this.signer.logger.error(i),i}finally{this.modal&&this.modal.closeModal()}}async authenticate(s){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:s==null?void 0:s.chains});try{const t=await new Promise(async(i,n)=>{var o;this.rpc.showQrModal&&((o=this.modal)==null||o.subscribeModal(r=>{!r.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),n(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(v(u({},s),{chains:this.rpc.chains})).then(r=>{i(r)}).catch(r=>{n(new Error(r.message))})}),e=t.session;if(e){const i=(0,g.guN)(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:i),this.setAccounts(i),this.events.emit("connect",{chainId:C(this.chainId)})}return t}catch(t){throw this.signer.logger.error(t),t}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",s=>{const{params:t}=s,{event:e}=t;e.name==="accountsChanged"?(this.accounts=this.parseAccounts(e.data),this.events.emit("accountsChanged",this.accounts)):e.name==="chainChanged"?this.setChainId(this.formatChainId(e.data)):this.events.emit(e.name,e.data),this.events.emit("session_event",s)}),this.signer.on("chainChanged",s=>{const t=parseInt(s);this.chainId=t,this.events.emit("chainChanged",C(this.chainId)),this.persist()}),this.signer.on("session_update",s=>{this.events.emit("session_update",s)}),this.signer.on("session_delete",s=>{this.reset(),this.events.emit("session_delete",s),this.events.emit("disconnect",v(u({},(0,g.D6H)("USER_DISCONNECTED")),{data:s.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",s=>{var t,e;this.rpc.showQrModal&&((t=this.modal)==null||t.closeModal(),(e=this.modal)==null||e.openModal({uri:s})),this.events.emit("display_uri",s)})}switchEthereumChain(s){this.request({method:"wallet_switchEthereumChain",params:[{chainId:s.toString(16)}]})}isCompatibleChainId(s){return typeof s=="string"?s.startsWith(`${this.namespace}:`):!1}formatChainId(s){return`${this.namespace}:${s}`}parseChainId(s){return Number(s.split(":")[1])}setChainIds(s){const t=s.filter(e=>this.isCompatibleChainId(e)).map(e=>this.parseChainId(e));t.length&&(this.chainId=t[0],this.events.emit("chainChanged",C(this.chainId)),this.persist())}setChainId(s){if(this.isCompatibleChainId(s)){const t=this.parseChainId(s);this.chainId=t,this.switchEthereumChain(t)}}parseAccountId(s){const[t,e,i]=s.split(":");return{chainId:`${t}:${e}`,address:i}}setAccounts(s){this.accounts=s.filter(t=>this.parseChainId(this.parseAccountId(t).chainId)===this.chainId).map(t=>this.parseAccountId(t).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(s){var t,e;const i=(t=s==null?void 0:s.chains)!=null?t:[],n=(e=s==null?void 0:s.optionalChains)!=null?e:[],o=i.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const r=i.length?(s==null?void 0:s.methods)||w:[],c=i.length?(s==null?void 0:s.events)||I:[],h=(s==null?void 0:s.optionalMethods)||[],d=(s==null?void 0:s.optionalEvents)||[],E=(s==null?void 0:s.rpcMap)||this.buildRpcMap(o,s.projectId),_=(s==null?void 0:s.qrModalOptions)||void 0;return{chains:i==null?void 0:i.map(p=>this.formatChainId(p)),optionalChains:n.map(p=>this.formatChainId(p)),methods:r,events:c,optionalMethods:h,optionalEvents:d,rpcMap:E,showQrModal:!!(s!=null&&s.showQrModal),qrModalOptions:_,projectId:s.projectId,metadata:s.metadata}}buildRpcMap(s,t){const e={};return s.forEach(i=>{e[i]=this.getRpcUrl(i,t)}),e}async initialize(s){if(this.rpc=this.getRpcConfig(s),this.chainId=this.rpc.chains.length?m(this.rpc.chains):m(this.rpc.optionalChains),this.signer=await b.UniversalProvider.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:s.disableProviderPing,relayUrl:s.relayUrl,storageOptions:s.storageOptions}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let t;try{const{WalletConnectModal:e}=await l.e(5707).then(l.bind(l,5707));t=e}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(t)try{this.modal=new t(u({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(e){throw this.signer.logger.error(e),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(s){if(!s)return;const{chains:t,optionalChains:e,rpcMap:i}=s;t&&(0,g.qt8)(t)&&(this.rpc.chains=t.map(n=>this.formatChainId(n)),t.forEach(n=>{this.rpc.rpcMap[n]=(i==null?void 0:i[n])||this.getRpcUrl(n)})),e&&(0,g.qt8)(e)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=e==null?void 0:e.map(n=>this.formatChainId(n)),e.forEach(n=>{this.rpc.rpcMap[n]=(i==null?void 0:i[n])||this.getRpcUrl(n)}))}getRpcUrl(s,t){var e;return((e=this.rpc.rpcMap)==null?void 0:e[s])||`${S}?chainId=eip155:${s}&projectId=${t||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const s=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),t=this.session.namespaces[`${this.namespace}:${s}`]?this.session.namespaces[`${this.namespace}:${s}`]:this.session.namespaces[this.namespace];this.setChainIds(s?[this.formatChainId(s)]:t==null?void 0:t.accounts),this.setAccounts(t==null?void 0:t.accounts)}catch(s){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(s),await this.disconnect().catch(t=>this.signer.logger.warn(t))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(s){return typeof s=="string"||s instanceof String?[this.parseAccount(s)]:s.map(t=>this.parseAccount(t))}}const W=f}}]);
