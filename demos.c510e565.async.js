(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[2433],{95456:function(E,t,n){"use strict";n.r(t),n.d(t,{YourAdapterPropsProvider:function(){return M}});var _=n(25359),e=n.n(_),a=n(49811),s=n.n(a),o=n(54306),u=n.n(o),i=n(50959),d=n(73686),r=n(45092),c=n(11527),M=function(l){var D=l.children,P=l.availableChains,B=l.wallets,R=i.useState({address:"0xtestaccount"}),I=u()(R,2),T=I[0],K=I[1],W=i.useState(),h=u()(W,2),U=h[0],L=h[1];return(0,c.jsx)(d.BQ,{availableChains:P,chain:U,account:T,availableWallets:B,connect:function(){var v=s()(e()().mark(function O(f){return e()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return");case 1:case"end":return C.stop()}},O)}));return function(O){return v.apply(this,arguments)}}(),disconnect:s()(e()().mark(function v(){return e()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return");case 1:case"end":return f.stop()}},v)})),switchChain:function(){var v=s()(e()().mark(function O(f){return e()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return");case 1:case"end":return C.stop()}},O)}));return function(O){return v.apply(this,arguments)}}(),getNFTMetadata:function(){var v=s()(e()().mark(function O(f){var g,C;return e()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return g=f.address,C=f.tokenId,A.abrupt("return",{name:"NFT",description:"NFT description",image:"https://avatars.githubusercontent.com/u/1061968"});case 2:case"end":return A.stop()}},O)}));return function(O){return v.apply(this,arguments)}}(),children:D})};t.default=function(){return(0,c.jsx)(M,{children:(0,c.jsx)(r.Connector,{children:(0,c.jsx)(r.ConnectButton,{})})})}},74241:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(39848),a=n(51990),s=n(21063),o=n(8851),u=n(56845),i=n(22949),d=n(81552),r=n(45092),c=n(11527),M=(0,_.QB)([a.R,s.y],[(0,o.I)()]),m=M.publicClient,l=M.chains,D=(0,e._g)({autoConnect:!0,publicClient:m,connectors:[new u.i({chains:l}),new i.z({chains:l,options:{showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}})]}),P=function(){return(0,c.jsx)(d.hm,{availableChains:l,config:D,children:(0,c.jsx)(r.Connector,{children:(0,c.jsx)(r.ConnectButton,{})})})};t.default=P},35223:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(51990),a=n(39848),s=n(57603),o=n(81552),u=n(45092),i=n(11527),d=(0,_.QB)([e.R],[(0,s.$)({apiKey:"287294cbc30b44efab9455664b69b130"})]),r=d.publicClient,c=(0,a._g)({publicClient:r}),M=function(){return(0,i.jsx)(o.hm,{config:c,children:(0,i.jsx)(u.NFTImage,{width:300,address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540})})};t.default=M},7089:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(11527),s=function(){return(0,a.jsx)(e.Z,{children:(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://avatars.githubusercontent.com/u/10286961?s=60&v=4"},actionsMenu:!1})})};t.default=s},77554:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(11527),s=function(){return(0,a.jsx)(e.Z,{children:(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"test.eth"},banlance:{symbol:"ETH",decimals:18,value:1000000000000000000n}})})};t.default=s},88508:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(11527),a=function(){return(0,e.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}})};t.default=a},88699:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(75440),a=n(16933),s=n(11527),o=function(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(_.ConnectButton,{type:"primary",icon:(0,s.jsx)(e.WalletWhiteColorful,{}),account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}}),(0,s.jsx)(_.ConnectButton,{icon:(0,s.jsx)(e.WalletColorful,{}),account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}})]})};t.default=o},44763:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(11527),s=function(){var u=[{label:"Menu Item 1",key:"1",onClick:function(){console.log("Menu Item 1 clicked")}},{label:"Menu Item 2",key:"2",onClick:function(){console.log("Menu Item 2 clicked")}}];return(0,a.jsxs)(e.Z,{children:[(0,a.jsx)(_.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"No menu by default"},avatar:{src:"https://metamask.io/images/metamask-logo.png"},onMenuItemClick:function(d){return console.log("onMenuItemClick",d)}}),(0,a.jsx)(_.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Display default menu"},avatar:{src:"https://metamask.io/images/metamask-logo.png"},actionsMenu:!0}),(0,a.jsx)(_.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Insert menu items before default items"},avatar:{src:"https://metamask.io/images/metamask-logo.png"},onMenuItemClick:function(d){return console.log("onMenuItemClick",d)},actionsMenu:{extraItems:u}}),(0,a.jsx)(_.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Override menu items"},avatar:{src:"https://metamask.io/images/metamask-logo.png"},onMenuItemClick:function(d){return console.log("onMenuItemClick",d)},actionsMenu:{items:u}})]})};t.default=s},53939:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(11527),a=function(){return(0,e.jsx)(_.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"wanderingearth.eth"},tooltip:!0})};t.default=a},8638:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(17453),s=n(11527),o=function(){return(0,s.jsxs)(e.Z,{children:[(0,s.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display profileModal by default"},actionsMenu:!1}),(0,s.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Do not show profileModal"},actionsMenu:!1,profileModal:!1}),(0,s.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Customize profileModal"},actionsMenu:!1,profileModal:{width:400,footer:(0,s.jsx)(a.Z,{message:"Custom footer",type:"success",style:{textAlign:"center"}})}})]})};t.default=o},83077:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(11527),s=function(){return(0,a.jsxs)(e.Z,{children:[(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0}),(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Custom Title"},tooltip:{title:"aaaaaabbbbbbcccccc"}}),(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"UnCopyable"},tooltip:{title:"aaaaaabbbbbbcccccc",copyable:!1}}),(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Default Formatter"},tooltip:{format:!0}}),(0,a.jsx)(_.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Custom Formatter"},tooltip:{format:function(i){return i.slice(0,10)}}})]})};t.default=s},93110:function(E,t,n){"use strict";n.r(t);var _=n(45092),e=n(16933),a=n(11527),s=function(){return(0,a.jsxs)(e.Z,{children:[(0,a.jsx)(_.ConnectButton,{type:"primary",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0}),(0,a.jsx)(_.ConnectButton,{type:"dashed",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}}),(0,a.jsx)(_.ConnectButton,{type:"link",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}})]})};t.default=s},44697:function(E,t,n){"use strict";n.r(t);var _=n(16933),e=n(75440),a=n(11527),s=function(){return(0,a.jsxs)(_.Z,{wrap:!0,children:[(0,a.jsx)(e.BitcoinColorful,{}),(0,a.jsx)(e.EthereumFilled,{})]})};t.default=s},59727:function(E,t,n){"use strict";n.r(t);var _=n(16933),e=n(75440),a=n(11527),s=function(){return(0,a.jsxs)(_.Z,{wrap:!0,children:[(0,a.jsx)(e.BitcoinColorful,{style:{fontSize:48}}),(0,a.jsx)("div",{style:{fontSize:48},children:(0,a.jsx)(e.EthereumFilled,{})})]})};t.default=s},54343:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(51990),a=n(39848),s=n(8851),o=n(56845),u=n(22949),i=n(169),d=n(81552),r=n(45092),c=n(11527),M=(0,_.QB)([e.R],[(0,s.I)()]),m=M.publicClient,l=M.chains,D=(0,a._g)({autoConnect:!0,publicClient:m,connectors:[new o.i({chains:l}),new u.z({chains:l,options:{showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}}),new i.D({options:{appName:"ant.design.web3",jsonRpcUrl:"https://api.zan.top/node/v1/eth/mainnet/".concat("d0eeefc2a4da4a8ba707889259b437d6")}})]}),P=function(){return(0,c.jsx)(d.hm,{assets:[d.GU],config:D,children:(0,c.jsx)(r.Connector,{modalProps:{guide:!0},children:(0,c.jsx)(r.ConnectButton,{})})})};t.default=P},94396:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(39848),a=n(51990),s=n(21063),o=n(8851),u=n(56845),i=n(22949),d=n(81552),r=n(45092),c=n(11527),M=(0,_.QB)([a.R,s.y],[(0,o.I)()]),m=M.publicClient,l=M.chains,D=(0,e._g)({autoConnect:!0,publicClient:m,connectors:[new u.i({chains:l}),new i.z({chains:l,options:{showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}})]}),P=function(){return(0,c.jsx)(d.hm,{availableChains:l,config:D,children:(0,c.jsx)(r.Connector,{children:(0,c.jsx)(r.ConnectButton,{})})})};t.default=P},6241:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(51990),a=n(39848),s=n(8851),o=n(56845),u=n(22949),i=n(81552),d=n(45092),r=n(11527),c=(0,_.QB)([e.R],[(0,s.I)()]),M=c.publicClient,m=c.chains,l=(0,a._g)({autoConnect:!0,publicClient:M,connectors:[new o.i({chains:m}),new u.z({chains:m,options:{showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}})]}),D=function(){return(0,r.jsx)(i.hm,{ens:!0,config:l,children:(0,r.jsx)(d.Connector,{children:(0,r.jsx)(d.ConnectButton,{})})})};t.default=D},62946:function(E,t,n){"use strict";n.r(t);var _=n(14433),e=n(51990),a=n(39848),s=n(8851),o=n(56845),u=n(22949),i=n(81552),d=n(45092),r=n(11527),c=(0,_.QB)([e.R],[(0,s.I)()]),M=c.publicClient,m=c.chains,l=(0,a._g)({autoConnect:!0,publicClient:M,connectors:[new o.i,new u.z({chains:m,options:{projectId:"c07c0051c2055890eade3556618e38a6"}})]}),D=function(){return(0,r.jsx)(i.hm,{config:l,children:(0,r.jsx)(d.Connector,{children:(0,r.jsx)(d.ConnectButton,{})})})};t.default=D},10985:function(){}}]);
