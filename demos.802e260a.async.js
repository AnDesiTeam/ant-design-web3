(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[2433],{37113:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(3155),e=n(61660),i=n(29439),m=n(28739),d=n(33181),l=n(15601),u=n(14860),E=n(36975),c=n(20146),P=n(11527),A=(0,m._)({chains:[E.R],transports:s()({},E.R.id,(0,d.d)()),connectors:[(0,c.L)({target:"metaMask"})]}),D=function(){var C,p=(0,_.useAccount)(),T=p.account,v=(0,l.u)({abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]}],address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9",functionName:"balanceOf",args:[T==null?void 0:T.address]}),B=(0,u.S)(),K=B.writeContract;return(0,P.jsxs)("div",{children:[(C=v.data)===null||C===void 0?void 0:C.toString(),(0,P.jsx)(r.ZP,{onClick:function(){K({abi:[{type:"function",name:"mint",stateMutability:"payable",inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],outputs:[]}],address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9",functionName:"mint",args:[1],value:(0,i.f)("0.01")},{onSuccess:function(){e.ZP.success("Mint Success")},onError:function(g){e.ZP.error(g.message)}})},children:"mint"})]})};a.default=function(){return(0,P.jsxs)(t.hm,{config:A,wallets:[(0,t.MV)()],children:[(0,P.jsx)(_.Address,{format:!0,address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9"}),(0,P.jsx)(_.NFTCard,{address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540}),(0,P.jsx)(_.Connector,{children:(0,P.jsx)(_.ConnectButton,{})}),(0,P.jsx)(D,{})]})}},1320:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(11527),l=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"})]});a.default=function(){return(0,d.jsxs)(t.hm,{config:l,wallets:[(0,t.MV)()],children:[(0,d.jsx)(_.Address,{format:!0,address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9"}),(0,d.jsx)(_.NFTCard,{address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540}),(0,d.jsx)(_.Connector,{children:(0,d.jsx)(_.ConnectButton,{})})]})}},41729:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(3155),e=n(61660),i=n(29439),m=n(28739),d=n(33181),l=n(15601),u=n(14860),E=n(36975),c=n(64369),P=n(20146),A=n(11527),D,f=(0,m._)({chains:[E.R,c.w],transports:(D={},s()(D,E.R.id,(0,d.d)()),s()(D,c.w.id,(0,d.d)()),D),connectors:[(0,P.L)({target:"metaMask"})]}),C=function(){var T,v=(0,_.useAccount)(),B=v.account,K=(0,l.u)({abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]}],address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9",functionName:"balanceOf",args:[B==null?void 0:B.address]}),I=(0,u.S)(),L=I.writeContract;return(0,A.jsxs)("div",{children:[(T=K.data)===null||T===void 0?void 0:T.toString(),(0,A.jsx)(r.ZP,{onClick:function(){L({abi:[{type:"function",name:"mint",stateMutability:"payable",inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],outputs:[]}],address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9",functionName:"mint",args:[1],value:(0,i.f)("0.01")},{onSuccess:function(){e.ZP.success("Mint Success")},onError:function(U){e.ZP.error(U.message)}})},children:"mint"})]})};a.default=function(){return(0,A.jsxs)(t.hm,{config:f,chains:[t.Du],wallets:[(0,t.MV)()],children:[(0,A.jsx)(_.Address,{format:!0,address:"0xEcd0D12E21805803f70de03B72B1C162dB0898d9"}),(0,A.jsx)(_.NFTCard,{address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540}),(0,A.jsx)(_.Connector,{children:(0,A.jsx)(_.ConnectButton,{})}),(0,A.jsx)(C,{})]})}},72664:function(M,a,n){"use strict";n.r(a),n.d(a,{YourAdapterPropsProvider:function(){return u}});var o=n(13448),s=n.n(o),_=n(74815),t=n.n(_),r=n(28152),e=n.n(r),i=n(50959),m=n(98126),d=n(18661),l=n(11527),u=function(P){var A=P.children,D=P.availableChains,f=P.wallets,C=i.useState({address:"0xtestaccount"}),p=e()(C,1),T=p[0],v=i.useState(),B=e()(v,1),K=B[0];return(0,l.jsx)(d.BQ,{availableChains:D,chain:K,account:T,availableWallets:f,connect:function(){var I=t()(s()().mark(function L(g){return s()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return");case 1:case"end":return U.stop()}},L)}));return function(L){return I.apply(this,arguments)}}(),disconnect:t()(s()().mark(function I(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return");case 1:case"end":return g.stop()}},I)})),switchChain:t()(s()().mark(function I(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return");case 1:case"end":return g.stop()}},I)})),getNFTMetadata:t()(s()().mark(function I(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",{name:"NFT",description:"NFT description",image:"https://avatars.githubusercontent.com/u/1061968"});case 1:case"end":return g.stop()}},I)})),children:A})},E=function(){return(0,l.jsx)(u,{children:(0,l.jsx)(m.Connector,{children:(0,l.jsx)(m.ConnectButton,{})})})};a.default=E},2965:function(M,a,n){"use strict";n.r(a),n.d(a,{default:function(){return E}});var o=n(77117),s=n.n(o),_=n(50959),t=n(98126),r=n(41947),e=n(2909),i=n(63581),m=n(48513),d={token:{wireframe:!1,padding:24,paddingSM:16,paddingXS:12,fontSize:16,fontSizeLG:18,fontSizeHeading4:24,fontSizeHeading5:20,fontSizeHeading2:36,fontSizeXL:24,borderRadius:6,colorPrimary:"#8442ff",colorInfo:"#8442ff"},components:{Button:{borderRadius:16,borderRadiusLG:24,borderRadiusSM:8,controlHeight:44,marginXS:8,paddingContentHorizontal:24,fontSizeLG:18,controlHeightLG:52,controlHeightSM:36,paddingXS:16},List:{paddingLG:24,marginLG:24,marginXXL:48,paddingContentHorizontalLG:24,fontSizeLG:20,padding:16,borderRadiusLG:10,paddingContentVertical:24,paddingXS:8,paddingSM:12},Modal:{controlHeightLG:44,fontSizeHeading5:20,fontSizeLG:18,marginSM:12,margin:16,marginLG:24,marginXS:8,padding:16,paddingContentHorizontalLG:24,paddingLG:24,paddingMD:20,paddingXS:12,borderRadiusLG:24,borderRadiusSM:10}}},l=n(11527),u=function(){var P=[s()({},r.Zv),s()(s()({},r.Tl),{},{getQrCode:function(){return new Promise(function(D){return setTimeout(function(){return D({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),{icon:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",group:"More",name:"Test Wallet3",remark:"remark 3",app:{link:"https://test.com/xxx"},getQrCode:function(){return new Promise(function(D){return setTimeout(function(){return D({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}];return(0,l.jsx)(e.ZP,{theme:d,children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(m.Z,{bodyStyle:{padding:0,maxWidth:737},children:(0,l.jsx)(t.ConnectModal.ModalPanel,{walletList:P})})})})},E=u},32853:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(33493),d=n(20146),l=n(17182),u=n(59038),E=n(11527),c,P=(0,r._)({chains:[i.R,m.y],transports:(c={},s()(c,i.R.id,(0,e.d)()),s()(c,m.y.id,(0,e.d)()),c),connectors:[(0,d.L)({target:"metaMask"}),(0,l.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}),(0,u.D)({appName:"ant.design.web3",jsonRpcUrl:"https://api.zan.top/node/v1/eth/mainnet/".concat("d0eeefc2a4da4a8ba707889259b437d6")}),(0,d.L)({target:"tokenPocket"})]}),A=function(){return(0,E.jsx)(t.hm,{config:P,wallets:[(0,t.MV)(),(0,t.be)(),(0,t.gV)(),(0,t.GU)()],children:(0,E.jsx)(_.Connector,{children:(0,E.jsx)(_.ConnectButton,{})})})};a.default=A},70100:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(11527),_=function(){return(0,s.jsx)(o.Web3ConfigProvider,{locale:o.zh_CN,children:(0,s.jsx)(o.ConnectButton,{})})};a.default=_},31648:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(11527),_=function(){return(0,s.jsx)(o.Web3ConfigProvider,{locale:{ConnectButton:{connect:"\u8FDE\u63A5\u94B1\u5305"}},children:(0,s.jsx)(o.ConnectButton,{})})};a.default=_},59363:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(11527),_=function(){return(0,s.jsx)(o.ConnectButton,{locale:{connect:"\u8FDE\u63A5\u94B1\u5305"}})};a.default=_},23300:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(11527),d=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)())}),l=function(){return(0,m.jsx)(t.hm,{config:d,children:(0,m.jsx)(_.NFTImage,{width:300,address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540})})};a.default=l},56219:function(M,a,n){"use strict";n.r(a);var o=n(77117),s=n.n(o),_=n(28152),t=n.n(_),r=n(50959),e=n(98126),i=n(41947),m=n(63581),d=n(24638),l=n(2909),u=n(13601),E=n(48513),c=n(11527),P=function(){var D=r.useState("dark"),f=t()(D,2),C=f[0],p=f[1],T=[s()({},i.Zv),s()(s()({},i.Tl),{},{getQrCode:function(){return new Promise(function(B){return setTimeout(function(){return B({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),{icon:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",group:"More",name:"Test Wallet3",remark:"remark 3",app:{link:"https://test.com/xxx"},getQrCode:function(){return new Promise(function(B){return setTimeout(function(){return B({uri:"https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}];return(0,c.jsxs)(m.Z,{direction:"vertical",children:[(0,c.jsxs)(d.ZP.Group,{onChange:function(B){p(B.target.value)},value:C,children:[(0,c.jsx)(d.ZP.Button,{value:"dark",children:"Dark"}),(0,c.jsx)(d.ZP.Button,{value:"light",children:"Light"})]}),(0,c.jsx)(l.ZP,{theme:{algorithm:C==="dark"?u.Z.darkAlgorithm:void 0},children:(0,c.jsx)(E.Z,{bodyStyle:{padding:0,maxWidth:737},children:(0,c.jsx)(e.ConnectModal.ModalPanel,{walletList:T})})})]})};a.default=P},28595:function(M,a,n){"use strict";n.r(a),n.d(a,{default:function(){return an}});var o=n(28152),s=n.n(o),_=n(50959),t=n(69271),r={bannerContainer:"Y27EzktDvv0vFhE0U5PX",bgImg:"dh6UyyxvTeUTBhdGNRY7",wrap:"RxPQ9rvK0q_qAynjWdLg",titleImg:"EU6Zf2v2nmEFqWbVzkvH",btn:"lKVXIzo5FMYmCzmZ_PRU"},e=n(11527),i=function(){var h=(0,t.YB)();return(0,e.jsxs)("div",{className:r.bannerContainer,children:[(0,e.jsx)("img",{draggable:!1,className:r.bgImg,src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*x9HgRpaXSmsAAAAAAAAAAAAADlrGAQ/original",alt:"banner"}),(0,e.jsx)("div",{className:r.wrap,children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{draggable:!1,className:r.titleImg,src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*8Aj9RZXO3d0AAAAAAAAAAAAADlrGAQ/original",alt:"title"}),(0,e.jsxs)("div",{className:r.btn,children:[(0,e.jsx)(t.rU,{to:"".concat(h.locale==="zh-CN"?"/zh-CN":"","/guide"),children:h.formatMessage({id:"app.docs.site.index.banner.button-text"})}),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})]})},m=i,d={container:"w39Wsz1kRsABDR11gioL",item:"G6bowxUUgK0tvYxR_D_h",icon:"lYFXINVNGG8yLcTW89qa",title:"lTaoox5rCcAhdubADso7",desc:"QlZ0LqcxjZIAfa6jYRNG"},l=function(){var O=(0,t.YB)(),h=[{icon:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*HR6IRIi3eDIAAAAAAAAAAAAADlrGAQ/original",title:O.formatMessage({id:"app.docs.site.features.0.title"}),description:O.formatMessage({id:"app.docs.site.features.0.description"})},{icon:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*VbthS5vDlCQAAAAAAAAAAAAADlrGAQ/original",title:O.formatMessage({id:"app.docs.site.features.1.title"}),description:O.formatMessage({id:"app.docs.site.features.1.description"})},{icon:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*agjbQpbtY2kAAAAAAAAAAAAADlrGAQ/original",title:O.formatMessage({id:"app.docs.site.features.2.title"}),description:O.formatMessage({id:"app.docs.site.features.2.description"})}];return(0,e.jsx)("div",{className:d.container,children:h.map(function(R,y){return(0,e.jsxs)("div",{className:d.item,children:[(0,e.jsx)("img",{className:d.icon,src:R.icon,alt:R.title}),(0,e.jsx)("div",{className:d.title,children:R.title}),(0,e.jsx)("div",{className:d.desc,children:R.description})]},y)})})},u=n(98126),E=n(63581),c={container:"SxQLbe7vosFwKTc7yt3b",headTitle:"WnmPFLOa6oHEnwNvp0Xd",desc:"XTpMyg0NCHYaZQ8eG7tg",componentList:"X8BlC7paaWQW858f_G72",cardBg:"pBw6gBll7sspEYzIH4Sy",title:"ERxTUr1qGoo9GTcPfsDd",NTFCard:"HId4_1xgDFmorW9vTucC",connectContainer:"lSsBVC47QuUSc2VHXYAr",connectModalCardBg:"NOm3BIT8d886vuex1BLV",connectModalContainer:"GgTrzcwQFyUot50NKC14",footer:"dgwexPsz2boiNWjZT83h",footerText:"tmWhzsUvjN8M9Xr99dNh",footerDesc:"b9fK0fn34YQa01k1MLZx"},P=function(){return(0,e.jsxs)("div",{className:c.cardBg,children:[(0,e.jsx)("span",{className:c.title,children:"Address"}),(0,e.jsxs)(E.Z,{direction:"vertical",size:32,children:[(0,e.jsx)(u.Address,{ellipsis:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}),(0,e.jsx)(u.Address,{ellipsis:{headClip:4,tailClip:4},copyable:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}),(0,e.jsx)(u.Address,{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",format:!0})]})]})},A=n(77117),D=n.n(A),f=n(41947),C=n(2909),p=n(13601),T=n(84875),v=n.n(T),B=[f.Zv,D()(D()({},f.Tl),{},{getQrCode:function(){return new Promise(function(h){return setTimeout(function(){return h({uri:"https://web3.ant.design/?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),f.p_],K=function(){var O=(0,t.OI)(),h=s()(O,1),R=h[0];return(0,e.jsx)(C.ZP,{theme:{algorithm:R==="dark"?p.Z.darkAlgorithm:void 0},children:(0,e.jsxs)("div",{className:v()(c.cardBg,c.connectModalCardBg),children:[(0,e.jsx)("span",{className:c.title,children:"Connect Wallet"}),(0,e.jsx)("div",{className:v()(c.connectContainer,c.connectModalContainer),children:(0,e.jsx)(u.ConnectModal.ModalPanel,{mode:"normal",title:"Connect Wallet",footer:"Powered by AntChain",walletList:B})})]})})},I=n(13448),L=n.n(I),g=n(74815),Z=n.n(g),U=n(98576),Y=p.Z.darkAlgorithm,J=function(){var O=_.useState(f.mg),h=s()(O,2),R=h[0],y=h[1];return(0,e.jsxs)("div",{className:v()(c.cardBg,c.buttonsCard),children:[(0,e.jsx)("span",{className:c.title,children:"Connect Button"}),(0,e.jsxs)(E.Z,{direction:"vertical",size:32,children:[(0,e.jsx)(C.ZP,{theme:{algorithm:[Y]},children:(0,e.jsx)(u.ConnectButton,{icon:(0,e.jsx)(U.WalletWhiteColorful,{}),children:"Connect Wallet"})}),(0,e.jsx)(u.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0}),(0,e.jsx)(u.ConnectButton,{chain:R,availableChains:[f.ny,f.mg],account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},onSwitchChain:function(){var S=Z()(L()().mark(function x(Q){return L()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:y(Q);case 1:case"end":return w.stop()}},x)}));return function(x){return S.apply(this,arguments)}}()})]})]})},k=function(){return(0,e.jsxs)("div",{className:c.cardBg,children:[(0,e.jsx)("span",{className:c.title,children:"NFT Card"}),(0,e.jsx)("div",{className:c.NTFCard,children:(0,e.jsx)(u.NFTCard,{name:"My NFT",tokenId:16,description:"This is description",image:"https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"})})]})},q=function(){var O=(0,t.YB)();return(0,e.jsxs)("div",{className:c.container,children:[(0,e.jsx)("h3",{className:c.headTitle,children:O.formatMessage({id:"app.docs.site.case.title"})}),(0,e.jsx)("div",{className:c.desc,children:O.formatMessage({id:"app.docs.site.case.description"})}),(0,e.jsxs)("div",{className:c.componentList,children:[(0,e.jsx)(J,{}),(0,e.jsx)(P,{}),(0,e.jsx)(k,{}),(0,e.jsx)(K,{})]}),(0,e.jsxs)("div",{className:c.footer,children:[(0,e.jsx)("div",{className:c.footerText,children:"Made with \u2764 by"}),(0,e.jsx)("div",{className:c.footerDesc,children:"ANT DESIGN"})]})]})},nn=n(21320),N=n.n(nn),en=n(48513),F=n(64477),j={container:"mbzwLv2xXLMVBGrce5kw",title:"NT5N61ixmwU34umnIWs4",desc:"WcYpTkNEamAUcGPwFjbj",card:"MIedaRT2A2bS1oZfuCoD",controls:"XfpUNVPTfE2_pUdwXMQg",themeBtns:"HSzOSovV8vgKLzk47ynD",lightIcon:"CS1bQkr55ccCK4YcClMO",darkIcon:"mNgJhM0k_1UyzpGQOrP0",selected:"HDvlZFeXvpI17NHkWv_q",dark:"KtrFQibcbu0DqFwGfzFV",colorSelector:"Wr1ACyvPnbAjcdz0qlDd",colorItem:"KHem9eCB_jMwhWxW2Lsu",auto:"D4Gg8_E_lc_j16GupKof"},z="auto",V=[z,"#1677FF","#9E339F","#F2BD27","#00B96B"],tn=function(){var h=(0,t.YB)(),R=_.useState(!1),y=s()(R,2),S=y[0],x=y[1],Q=(0,t.OI)(),H=s()(Q,1),w=H[0],sn=_.useState(z),X=s()(sn,2),$=X[0],on=X[1],rn=function(W){on(W),x(W==="auto"&&w==="dark")};(0,_.useEffect)(function(){x(w==="dark")},[w]);var dn=[D()({},f.Zv),D()(D()({},f.Tl),{},{getQrCode:function(){return new Promise(function(W){return setTimeout(function(){return W({uri:"https://web3.ant.design/?timestamp=".concat(Date.now(),"&random=").concat(Math.random())})},2e3)})}}),f.eu,f.p_];return(0,e.jsxs)("div",{className:j.container,children:[(0,e.jsx)("h3",{className:j.title,children:h.formatMessage({id:"app.docs.site.theme.title"})}),(0,e.jsx)("div",{className:j.desc,children:h.formatMessage({id:"app.docs.site.theme.description"})}),(0,e.jsx)(C.ZP,{theme:{algorithm:S?p.Z.darkAlgorithm:void 0,token:{colorPrimary:$}},children:(0,e.jsx)(en.Z,{className:j.card,bodyStyle:{padding:0},children:(0,e.jsx)(u.ConnectModal.ModalPanel,{walletList:dn})})}),(0,e.jsxs)("div",{className:j.controls,children:[(0,e.jsx)("div",{className:v()(j.themeBtns,N()({},j.dark,S)),children:(0,e.jsxs)(E.Z,{children:[(0,e.jsx)(F.Z,{title:"Light Mode",children:(0,e.jsx)("span",{onClick:function(){return x(!1)},children:(0,e.jsx)("svg",{viewBox:"0 0 16 16",className:v()(j.lightIcon,N()({},j.selected,!S)),children:(0,e.jsx)("path",{fill:"currentColor",d:"M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"})})})}),(0,e.jsx)(F.Z,{title:"Dark Mode",children:(0,e.jsx)("span",{onClick:function(){return x(!0)},children:(0,e.jsx)("svg",{viewBox:"0 0 16 16",className:v()(j.darkIcon,N()({},j.selected,S)),children:(0,e.jsx)("path",{fill:"currentColor",d:"M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"})})})})]})}),(0,e.jsx)("div",{className:j.colorSelector,children:V.map(function(b){var W;return(0,e.jsx)("div",{className:v()(j.colorItem,(W={},N()(W,j.selected,b===$),N()(W,j.auto,b===V[0]),W)),style:{"--color":b},onClick:function(){return rn(b)}},b)})})]})]})},_n=tn,G={container:"A4Ll5mdsdmQo2yiUeqp3",centerbg:"K8UKI51AAb2uJWas2kRo",rightTopImage:"IAILNbXb35YfjeQUeAxC",leftBottomImage:"veYfQq89wlEIj3rnxt_U"},an=function(){var O=(0,t.OI)(),h=s()(O,2),R=h[1];return(0,_.useEffect)(function(){R==="auto"&&document.documentElement.setAttribute("data-prefers-color",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},[R]),(0,e.jsxs)("div",{className:G.container,children:[(0,e.jsx)(m,{}),(0,e.jsxs)("div",{className:G.centerbg,children:[(0,e.jsx)(l,{}),(0,e.jsx)(_n,{}),(0,e.jsx)("div",{className:G.rightTopImage}),(0,e.jsx)("div",{className:G.leftBottomImage})]}),(0,e.jsx)(q,{})]})}},92932:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(11527),t=function(){return(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(o.ConnectButton,{size:"small",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1}),(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1}),(0,_.jsx)(o.ConnectButton,{size:"large",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display custom avatar"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!1})]})};a.default=t},9116:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(11527),t=function(){return(0,_.jsx)(s.Z,{children:(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"test.eth"},balance:{symbol:"ETH",decimals:18,value:1000000000000000000n}})})};a.default=t},17710:function(M,a,n){"use strict";n.r(a);var o=n(28152),s=n.n(o),_=n(50959),t=n(98126),r=n(11527),e=function(){var m={address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},d=_.useState(m),l=s()(d,2),u=l[0],E=l[1];return(0,r.jsx)(t.ConnectButton,{account:u,onConnectClick:function(){E(m)},onDisconnectClick:function(){E(void 0)}})};a.default=e},8125:function(M,a,n){"use strict";n.r(a);var o=n(13448),s=n.n(o),_=n(74815),t=n.n(_),r=n(28152),e=n.n(r),i=n(50959),m=n(98126),d=n(41947),l=n(11527),u=function(){var c=i.useState(d.mg),P=e()(c,2),A=P[0],D=P[1];return(0,l.jsx)(m.ConnectButton,{chain:A,availableChains:[d.ny,d.mg],account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},onSwitchChain:function(){var f=t()(s()().mark(function C(p){return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:D(p);case 1:case"end":return v.stop()}},C)}));return function(C){return f.apply(this,arguments)}}()})};a.default=u},33698:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(98576),_=n(63581),t=n(11527),r=function(){return(0,t.jsxs)(_.Z,{children:[(0,t.jsx)(o.ConnectButton,{type:"primary",icon:(0,t.jsx)(s.WalletWhiteColorful,{}),account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}}),(0,t.jsx)(o.ConnectButton,{icon:(0,t.jsx)(s.WalletColorful,{}),account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}})]})};a.default=r},4824:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(11527),t=function(){var e=[{label:"Menu Item 1",key:"1",onClick:function(){console.log("Menu Item 1 clicked")}},{label:"Menu Item 2",key:"2",onClick:function(){console.log("Menu Item 2 clicked")}}];return(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(o.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Display default menu"},avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:!0}),(0,_.jsx)(o.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Insert menu items before default items"},profileModal:!1,avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},onMenuItemClick:function(m){return console.log("onMenuItemClick",m)},actionsMenu:{extraItems:e}}),(0,_.jsx)(o.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"Override menu items"},profileModal:!1,avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},onMenuItemClick:function(m){return console.log("onMenuItemClick",m)},actionsMenu:{items:e}})]})};a.default=t},46281:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(11527),_=function(){return(0,s.jsx)(o.ConnectButton,{account:{address:"0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B",name:"wanderingearth.eth"},tooltip:!0})};a.default=_},74937:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(63285),t=n(11527),r=function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Display profileModal by default"},actionsMenu:!1}),(0,t.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Do not show profileModal"},actionsMenu:!1,profileModal:!1}),(0,t.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Customize profileModal"},actionsMenu:!1,profileModal:{width:400,footer:(0,t.jsx)(_.Z,{message:"Custom footer",type:"success",style:{textAlign:"center"}})}})]})};a.default=r},1083:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(11527),t=function(){return(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0}),(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Custom Title"},tooltip:{title:"aaaaaabbbbbbcccccc"}}),(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"UnCopyable"},tooltip:{title:"aaaaaabbbbbbcccccc",copyable:!1}}),(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Default Formatter"},tooltip:{format:!0}}),(0,_.jsx)(o.ConnectButton,{account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Custom Formatter"},tooltip:{format:function(i){return i.slice(0,10)}}})]})};a.default=t},42185:function(M,a,n){"use strict";n.r(a);var o=n(98126),s=n(63581),_=n(2909),t=n(11527),r=function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.ConnectButton,{type:"primary",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0}),(0,t.jsx)(_.ZP,{theme:{token:{colorPrimary:"#8442ff"}},children:(0,t.jsx)(o.ConnectButton,{type:"primary",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"},tooltip:!0})}),(0,t.jsx)(o.ConnectButton,{type:"dashed",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}}),(0,t.jsx)(o.ConnectButton,{type:"link",account:{address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18"}})]})};a.default=r},49342:function(M,a,n){"use strict";n.r(a);var o=n(98576),s=n(63581),_=n(11527),t=function(){return(0,_.jsxs)(s.Z,{wrap:!0,children:[(0,_.jsx)(o.BitcoinCircleColorful,{}),(0,_.jsx)(o.EthereumFilled,{})]})};a.default=t},15672:function(M,a,n){"use strict";n.r(a);var o=n(98576),s=n(63581),_=n(11527),t=function(){return(0,_.jsxs)(s.Z,{wrap:!0,children:[(0,_.jsx)(o.BitcoinCircleColorful,{style:{fontSize:48}}),(0,_.jsx)("div",{style:{fontSize:48},children:(0,_.jsx)(o.EthereumFilled,{})})]})};a.default=t},3134:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(17182),l=n(11527),u=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"}),(0,d.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"})]}),E=function(){return(0,l.jsx)(t.hm,{balance:!0,wallets:[(0,t.MV)(),(0,t.GU)()],config:u,children:(0,l.jsx)(_.Connector,{children:(0,l.jsx)(_.ConnectButton,{})})})};a.default=E},24011:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(11527),l=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"})]}),u=function(){return(0,d.jsx)(t.hm,{config:l,wallets:[(0,t.MV)()],children:(0,d.jsx)(_.Connector,{children:(0,d.jsx)(_.ConnectButton,{})})})};a.default=u},19357:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(33493),d=n(20146),l=n(17182),u=n(11527),E,c=(0,r._)({chains:[i.R,m.y],transports:(E={},s()(E,i.R.id,(0,e.d)()),s()(E,m.y.id,(0,e.d)()),E),connectors:[(0,d.L)({target:"metaMask"}),(0,l.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"})]}),P=function(){return(0,u.jsx)(t.hm,{wallets:[(0,t.MV)(),(0,t.be)()],chains:[t.mg],config:c,children:(0,u.jsx)(_.Connector,{children:(0,u.jsx)(_.ConnectButton,{})})})};a.default=P},38236:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(98576),r=n(79872),e=n(28739),i=n(33181),m=n(36975),d=n(20146),l=n(17182),u=n(11527),E=(0,e._)({chains:[m.R],transports:s()({},m.R.id,(0,i.d)()),connectors:[(0,d.L)({target:"metaMask"}),(0,l.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}),(0,d.L)({target:"tokenPocket"}),(0,d.L)({target:function(){return{id:"testWallet",name:"TestWallet",provider:window.ethereum}}})]}),c=function(){return(0,u.jsx)(r.hm,{wallets:[new r.M6({name:"TestWallet",remark:"My TestWallet",icon:(0,u.jsx)(t.EthereumCircleColorful,{}),extensions:[],group:"Popular"}),(0,r.gV)({group:"Popular"}),(0,r.MV)({group:"More"})],config:E,children:(0,u.jsx)(_.Connector,{children:(0,u.jsx)(_.ConnectButton,{})})})};a.default=c},11470:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(11527),d=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)())}),l=function(){return(0,m.jsx)(t.hm,{config:d,eip6963:{autoAddInjectedWallets:!0},wallets:[(0,t.MV)()],children:(0,m.jsx)(_.Connector,{children:(0,m.jsx)(_.ConnectButton,{})})})};a.default=l},46662:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(17182),l=n(11527),u=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"}),(0,d.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"})]}),E=function(){return(0,l.jsx)(t.hm,{wallets:[(0,t.MV)(),(0,t.be)()],config:u,children:(0,l.jsx)(_.NFTCard,{address:"0x79fcdef22feed20eddacbb2587640e45491b757f",tokenId:8540})})};a.default=E},24844:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(17182),d=n(59038),l=n(11527),u=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),multiInjectedProviderDiscovery:!0,connectors:[(0,m.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"}),(0,d.D)({appName:"ant.design.web3",jsonRpcUrl:"https://api.zan.top/node/v1/eth/mainnet/".concat("d0eeefc2a4da4a8ba707889259b437d6")})]}),E=function(){return(0,l.jsx)(t.hm,{eip6963:!0,wallets:[(0,t.MV)(),(0,t.be)(),(0,t.gV)({group:"Popular"}),(0,t.GU)(),(0,t.VX)(),(0,t.Yw)()],config:u,children:(0,l.jsx)(_.Connector,{children:(0,l.jsx)(_.ConnectButton,{})})})};a.default=E},50075:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(11527),l=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"})]}),u=function(){return(0,d.jsx)(t.hm,{ens:!0,config:l,wallets:[(0,t.MV)()],children:(0,d.jsx)(_.Connector,{children:(0,d.jsx)(_.ConnectButton,{})})})};a.default=u},38373:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(17182),l=n(11527),u=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"tokenPocket"}),(0,d.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"})]}),E=function(){return(0,l.jsx)(t.hm,{wallets:[(0,t.gV)({group:"Popular"})],config:u,children:(0,l.jsx)(_.Connector,{children:(0,l.jsx)(_.ConnectButton,{})})})};a.default=E},22764:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(857),t=n(19159),r=n(98126),e=n(79872),i=n(28739),m=n(33181),d=n(36975),l=n(20146),u=n(17182),E=n(11527),c=(0,i._)({chains:[d.R],transports:s()({},d.R.id,(0,m.d)()),connectors:[(0,l.L)({target:"metaMask"}),(0,u.a)({showQrModal:!1,projectId:"c07c0051c2055890eade3556618e38a6"})]}),P=function(){return(0,E.jsx)(e.hm,{wallets:[(0,e.MV)(),(0,e.be)()],config:c,children:(0,E.jsx)(r.Connector,{modalProps:{title:"ZAN.top"},children:(0,E.jsx)(r.ConnectButton,{type:"primary",icon:(0,E.jsx)(_.Z,{}),avatar:{src:"https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original"},actionsMenu:{extraItems:[{key:"zan",icon:(0,E.jsx)(t.Z,{}),label:"About us",onClick:function(){window.open("https://zan.top/")}}]}})})})};a.default=P},95761:function(M,a,n){"use strict";n.r(a);var o=n(21320),s=n.n(o),_=n(98126),t=n(79872),r=n(28739),e=n(33181),i=n(36975),m=n(20146),d=n(17182),l=n(11527),u=(0,r._)({chains:[i.R],transports:s()({},i.R.id,(0,e.d)()),connectors:[(0,m.L)({target:"metaMask"}),(0,d.a)({showQrModal:!0,projectId:"c07c0051c2055890eade3556618e38a6"})]}),E=function(){return(0,l.jsx)(t.hm,{wallets:[(0,t.MV)(),(0,t.be)({useWalletConnectOfficialModal:!0})],config:u,children:(0,l.jsx)(_.Connector,{children:(0,l.jsx)(_.ConnectButton,{})})})};a.default=E},10985:function(){},79391:function(){},87942:function(){},82880:function(){}}]);