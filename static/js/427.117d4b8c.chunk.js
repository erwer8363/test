"use strict";(self.webpackChunkproje=self.webpackChunkproje||[]).push([[427],{46575:(e,s,l)=>{l.d(s,{h:()=>c});var a,t=l(9950);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},i.apply(this,arguments)}const n=(e,s)=>{let{title:l,titleId:n,...c}=e;return t.createElement("svg",i({width:30,height:27,viewBox:"0 0 30 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":n},c),l?t.createElement("title",{id:n},l):null,a||(a=t.createElement("path",{d:"M12.6314 26.8655C12.6272 26.8655 12.6223 26.8655 12.6181 26.8655C12.4446 26.862 12.2809 26.7878 12.1634 26.6605L0.167929 13.617C-0.0377559 13.3931 -0.0566453 13.0559 0.123154 12.8104C0.302953 12.5655 0.630369 12.4816 0.906015 12.6103L11.885 17.751C11.9773 17.7944 12.0864 17.7734 12.1571 17.6999L28.9043 0.196448C29.131 -0.0407191 29.5018 -0.0666046 29.7592 0.137681C30.0167 0.341966 30.0762 0.708561 29.8964 0.983507L13.2373 26.5038C13.2135 26.5409 13.1855 26.5745 13.1547 26.6059L13.0813 26.6794C12.9617 26.7983 12.7993 26.8655 12.6314 26.8655Z",fill:"#4098D8"})))},c=(0,t.forwardRef)(n);l.p},76882:(e,s,l)=>{l.d(s,{A:()=>m});const a="styles_alertPanel__ty9Ok",t="styles_closeBtn__lYyNi";var i=l(11155),n=l(53127),c=l(10930),r=l(48738),d=l.n(r),o=l(44414);const m=e=>{let{visible:s,hasClose:l=!0,children:r,close:m,className:h}=e;return(0,o.jsxs)(i.g_,{visible:s,className:d()(a,h),children:[m&&(0,o.jsx)(n.A,{src:c.hQ.get("close"),classNames:t,handleClick:()=>{m()}}),r]})}},427:(e,s,l)=>{l.r(s),l.d(s,{Discount:()=>te,default:()=>ie});var a=l(85061);const t="styles_discountPage__LACeB",i="styles_searchArea__rm4PM",n="styles_title__a1iZ-",c="styles_content__KT9Tx",r="styles_date__kL9vT",d="styles_icon__YxENO",o="styles_game__Kw22O",m="styles_search__Fjuvu",h="styles_listCon__AdPRI",u="styles_listItem__rktl3",_="styles_img__PyjHD",x="styles_info__egI+2",p="styles_detail__1AkTJ",y="styles_last__xEQwi",j="styles_nodataCon__cEl+L",N="styles_noData__v4ozn",g="styles_pickerTitle__cFPt8",v="styles_bottomPop__KaHx5",b="styles_popHeader__Ft5Dn",f="styles_popContent__rEEJS",C="styles_item__CrtWl",A="styles_selected__SusnM",k="styles_selectTxt__wVxnR",T="styles_detailPanel__Ky85m",D="styles_detailItem__GF+Gq",w="styles_left__ddHb5",S="styles_right__4gJos",V="styles_bold__NyQo9",Y="styles_status__++rJU",I="styles_btn__EMoeH";var M=l(3074),P=l(11155),O=l(14735),L=l(68066),E=l(4159),H=l.n(E),R=l(9950),z=l(3814),K=l(73636),Q=l(67385),B=l(48738),F=l.n(B),G=l(54672),J=l(53127),Z=l(10930),q=(l(85224),l(76882)),U=l(70399),W=l(70992),X=l(91331),$=l(46575),ee=l(13),se=l(44414);const le=new Date,ae=new Map([[0,{txt:"\u0110\u1ee3i x\xe9t duy\u1ec7t",color:"#4098D8"}],[1,{txt:"\u0110\xe3 duy\u1ec7t",color:"#00B31D"}],[2,{txt:"\u0110\xe3 t\u1eeb ch\u1ed1i",color:"#D40000"}]]),te=()=>{var e,s,l,E,B,te,ie,ne;const ce=(0,G.kZ)(),re=(0,G.yA)(),[de,oe]=(0,L.e)({startVisible:!1,endVisible:!1,gameVisible:!1}),[me,he]=(0,L.e)({start:"",end:"",startTime:"",endTime:"",game:"",pageNum:1,pageSize:10,totalPage:0}),[ue,_e]=(0,R.useState)(void 0),[xe,pe]=(0,L.e)({list:[],curItem:void 0}),[ye,je]=(0,R.useState)(!1),[Ne,ge]=(0,R.useState)(!1),[ve,be]=(0,R.useState)(null),fe=(0,R.useRef)(null);(0,K.A)((async()=>{if(ce.length>0)return;const{code:e,data:s}=await(0,z.GZ)();if(!e){const e=s.map((e=>({text:e.vnName,key:e.id})));re([{text:"T\u1ea5t c\u1ea3".toUpperCase(),key:""},...e])}}),[]),(0,K.A)((async()=>{await Ae()}),[me.pageNum]);const{ref:Ce}=(0,U.Wx)({threshold:.5,onChange:(e,s)=>{e&&me.pageNum<me.totalPage&&(he((e=>{e.pageNum=e.pageNum+1})),ge(!0))}}),Ae=async()=>{const e={startApplyTime:me.startTime?H()(me.startTime).startOf("d").valueOf():null,endApplyTime:me.endTime?H()(me.endTime).endOf("d").valueOf():null,navigationCatalogId:me.game||null,pageNum:me.pageNum,pageSize:me.pageSize};je(1===me.pageNum);try{const{code:s,data:l}=await(0,z.QM)(e);if(je(!1),!s){const{list:e,totalPage:s}=l;pe((s=>{s.list=e})),he((e=>{e.totalPage=s}))}}catch(s){}finally{je(!1)}},ke=e=>()=>{pe((s=>{s.curItem=e}))},Te=(0,R.useMemo)((()=>{var e;return xe.curItem?fe.current=xe.curItem.auditStatus?(0,Q.Yq)(null===(e=xe.curItem)||void 0===e?void 0:e.updateTime,!0):"--":fe.current}),[xe]);return(0,se.jsxs)(a.A,{title:"khuy\u1ebfn m\xe3i c\u1ee7a t\xf4i".toUpperCase(),classNames:t,children:[(0,se.jsxs)("div",{className:i,children:[(0,se.jsx)("span",{className:n,children:"Th\u1eddi gian:"}),(0,se.jsxs)("span",{className:c,children:[(0,se.jsxs)("span",{className:r,onClick:()=>oe((e=>{e.startVisible=!0})),children:[me.start?(0,se.jsx)("i",{style:{color:"#5a5a5a",flex:"1",textAlign:"center"},children:me.start}):(0,se.jsx)("i",{style:{color:"#5A5A5A73"},children:"T\u1eeb:"}),(0,se.jsx)(M.Vv,{fill:"#5A5A5A",className:d})]}),(0,se.jsx)(P.lr,{title:(0,se.jsx)("span",{className:g,children:"Ch\u1ecdn th\u1eddi gian"}),visible:de.startVisible,onConfirm:e=>he((s=>{s.start=H()(e).format("DD-MM-YYYY"),s.startTime=H()(e).toString()})),max:me.endTime?H()(me.endTime).toDate():le,onClose:()=>oe((e=>{e.startVisible=!1})),defaultValue:new Date}),(0,se.jsxs)("span",{className:r,onClick:()=>oe((e=>{e.endVisible=!0})),children:[me.end?(0,se.jsx)("i",{style:{color:"#5a5a5a",flex:"1",textAlign:"center"},children:me.end}):(0,se.jsx)("i",{style:{color:"#5A5A5A73"},children:"\u0110\u1ebfn:"}),(0,se.jsx)(M.Vv,{fill:"#5A5A5A",className:d})]}),(0,se.jsx)(P.lr,{title:(0,se.jsx)("span",{className:g,children:"Ch\u1ecdn th\u1eddi gian"}),visible:de.endVisible,onConfirm:e=>he((s=>{s.end=H()(e).format("DD-MM-YYYY"),s.endTime=H()(e).toString()})),min:me.startTime?H()(me.startTime).toDate():void 0,max:le,onClose:()=>oe((e=>{e.endVisible=!1})),defaultValue:new Date})]})]}),(0,se.jsxs)("div",{className:i,children:[(0,se.jsx)("span",{className:n,children:"Lo\u1ea1i khuy\u1ebfn m\xe3i:"}),(0,se.jsxs)("span",{className:c,children:[(0,se.jsxs)("span",{className:o,onClick:()=>oe((e=>{e.gameVisible=!0})),children:[null!==ue&&void 0!==ue?ue:(0,se.jsx)("i",{style:{color:"#5A5A5A73"},children:"Vui l\xf2ng ch\u1ecdn"}),(0,se.jsx)(M.yd,{className:d})]}),(0,se.jsx)(O.A,{btnText:"T\xecm",classNames:m,handleSubmit:Ae})]})]}),(0,se.jsxs)(W.A,{bool:xe.list.length>0,children:[(0,se.jsxs)("ul",{className:h,children:[xe.list.map((e=>(0,se.jsxs)("li",{className:u,onClick:ke(e),children:[(0,se.jsx)(J.A,{src:"".concat("https://banca2q.com/file").concat(e.image),classNames:_}),(0,se.jsxs)("span",{className:x,children:[(0,se.jsxs)("p",{children:[e.activeName,(0,se.jsx)("i",{children:H()(e.createTime).format("DD-MM-YYYY")})]}),(0,se.jsx)("p",{className:F()(p),style:{color:ae.get(e.auditStatus).color},children:ae.get(e.auditStatus).txt})]})]},e.id))),(0,se.jsx)("li",{className:y,ref:Ce,children:(0,se.jsx)(X.A,{hasMore:Ne})})]}),(0,se.jsxs)("div",{className:j,children:[(0,se.jsx)(J.A,{src:Z.hQ.get("manage"),classNames:N}),"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"]})]}),(0,se.jsx)(P.zD,{visible:de.gameVisible,onMaskClick:()=>{},bodyStyle:{borderTopLeftRadius:(0,Q.a8)(15),borderTopRightRadius:(0,Q.a8)(15)},children:(0,se.jsxs)("div",{className:v,children:[(0,se.jsxs)("div",{className:b,children:[(0,se.jsx)("span",{onClick:()=>{oe((e=>{e.gameVisible=!1}))},children:"H\u1ee7y"}),(0,se.jsx)("span",{className:n,children:"Ch\u1ecdn lo\u1ea1i khuy\u1ebfn m\xe3i"}),(0,se.jsx)("span",{onClick:()=>{ve&&(he((e=>{e.game=ve.key})),_e(ve.text)),oe((e=>{e.gameVisible=!1}))},children:"X\xe1c nh\u1eadn"})]}),(0,se.jsx)("ul",{className:f,children:ce.map(((e,s)=>{return(0,se.jsxs)("li",{className:F()(C,{[k]:e.key===(null===ve||void 0===ve?void 0:ve.key)}),onClick:(l=e,()=>{be(l)}),children:[e.text,(0,se.jsx)(ee.A,{visible:e.key===(null===ve||void 0===ve?void 0:ve.key),children:(0,se.jsx)($.h,{className:A})})]},s);var l}))})]})}),(0,se.jsx)(q.A,{visible:!!xe.curItem,children:(0,se.jsxs)("div",{className:T,children:[(0,se.jsx)("h3",{children:"chi ti\u1ebft khuy\u1ebfn m\xe3i"}),(0,se.jsxs)("span",{className:D,children:[(0,se.jsx)("span",{className:w,children:"T\xean khuy\u1ebfn m\xe3i: "}),(0,se.jsx)("span",{className:F()(S,V),children:null===(e=xe.curItem)||void 0===e?void 0:e.activeName})]}),(0,se.jsxs)("span",{className:D,children:[(0,se.jsx)("span",{className:w,children:"Ng\xe0y \u0111\u0103ng k\xfd: "}),(0,se.jsx)("span",{className:F()(S),children:H()(null===(s=xe.curItem)||void 0===s?void 0:s.createTime).format("DD-MM-YYYY")})]}),(0,se.jsxs)("span",{className:D,children:[(0,se.jsx)("span",{className:w,children:"Tr\u1ea1ng th\xe1i: "}),(0,se.jsx)("span",{className:F()(S,Y),style:{color:null===(l=ae.get(null===(E=xe.curItem)||void 0===E?void 0:E.auditStatus))||void 0===l?void 0:l.color},children:null===(B=ae.get(null===(te=xe.curItem)||void 0===te?void 0:te.auditStatus))||void 0===B?void 0:B.txt})]}),(0,se.jsxs)("span",{className:D,children:[(0,se.jsx)("span",{className:w,children:"Th\u1eddi gian x\u1eed l\xfd: "}),(0,se.jsx)("span",{className:F()(S),children:Te})]}),(0,se.jsxs)("span",{className:D,children:[(0,se.jsx)("span",{className:w,children:"Ghi ch\xfa: "}),(0,se.jsx)("span",{className:F()(S),children:null!==(ie=null===(ne=xe.curItem)||void 0===ne?void 0:ne.remark)&&void 0!==ie?ie:"\u0110ang \u0111\u1ee3i x\xe9t duy\u1ec7t"})]}),(0,se.jsx)(O.A,{btnText:"X\xc1C NH\u1eacN",classNames:I,handleSubmit:()=>pe((e=>{e.curItem=null}))})]})})]})},ie=R.memo(te)}}]);