"use strict";(self.webpackChunkproje=self.webpackChunkproje||[]).push([[150],{18377:(e,t,s)=>{s.d(t,{A:()=>p});var a=s(79434);const l="styles_refrechBox__ZmZDf",n="styles_refreshBtn__ZVOkx",r="styles_svgIcon__gf6n-",o="styles_active__QHwFR";var i=s(46552),d=s.n(i),u=s(66536),c=s(78900),m=s(51486),h=s(9250);const p=e=>{let{resetFields:t}=e;c.A.useFormInstance();const[s,i]=(0,a.useState)(!1);return(0,h.jsx)("div",{onClick:()=>{if(s)return!0;i(!0),setTimeout((()=>{i(!1)}),300),null===t||void 0===t||t()},className:l,children:(0,h.jsx)(m.Ay,{className:d()(n,{[o]:s}),shape:"circle",icon:(0,h.jsx)(u.z,{className:r}),htmlType:"reset"})})}},57422:(e,t,s)=>{s.d(t,{A:()=>x});var a=s(79434);const l="styles_selectWrapper__uvXPV",n="styles_selectKuang__zeHag",r="styles_selectArea__V73yr",o="styles_frozenCon__nLypo",i="styles_selectItem__VHwUY",d="styles_actItem__1QiLa",u="styles_active__1ArqX",c="styles_frozenAct__in31y",m="styles_emptyDataText__2-7Zy";var h=s(4612),p=s(98138),y=s(46552),v=s.n(y),b=s(93423),_=s(9250);const x=e=>{let{width:t,height:s,list:y,placeHolder:x,selectHandler:N,contentHeight:g,activeItem:S,isFilter:T,emptyDataText:f}=e;const w=(0,a.useRef)(null),[A,j]=(0,a.useState)(!1),[C,O]=(0,a.useState)(void 0);(0,b.A)((e=>{j(!1),k(C)}),w),(0,a.useEffect)((()=>{if(S){const{value:e,label:t}=S;O(t),null===N||void 0===N||N(e)}}),[S]);const I=()=>M.length<=0?(0,_.jsx)("span",{className:v()(i,m),children:f||"Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p"}):(0,_.jsx)(_.Fragment,{children:M.map((e=>(0,_.jsx)("span",{className:v()(i,{[d]:e.label===C}),"data-value":e.value,"data-label":e.label,children:e.label},e.value)))}),[H,k]=(0,a.useState)(""),M=(0,a.useMemo)((()=>y.filter((e=>{var t;if(!H)return!0;let s=H;return null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t.toLowerCase().includes(s.toLowerCase())}))),[H,y]);return(0,_.jsxs)("div",{className:v()("selectWrapper",l),style:{"--wid":t},ref:w,children:[(0,_.jsxs)("div",{className:v()("selectKuang",n),style:{"--hei":s},onClick:e=>{j((e=>!e)),T||A||(k(void 0),O(void 0)),e.stopPropagation()},children:[T?(0,_.jsx)("input",{placeholder:x,value:H,onChange:e=>{k(e.target.value),j(!0)}}):(0,_.jsx)("span",{children:C||x}),T?H&&A?(0,_.jsx)(h.CQ,{onClick:e=>(e=>{k(""),e.stopPropagation()})(e)}):(0,_.jsx)(h.p8,{}):(0,_.jsx)(h.Os,{color:"#5a5a5a",style:(0,p.Lk)(A,180)})]}),(0,_.jsx)("span",{className:v()(r,{[u]:A},{[c]:A}),onClick:e=>{const{value:t,label:s}=e.target.dataset;O(s),null===N||void 0===N||N(t),j(!1),e.stopPropagation(),k(s)},children:g?(0,_.jsx)("div",{className:o,children:(0,_.jsx)(I,{})}):(0,_.jsx)("div",{children:(0,_.jsx)(I,{})})})]})}},14599:(e,t,s)=>{s.d(t,{A:()=>n});s(79434);var a=s(98138),l=s(9250);const n=e=>{let{classNames:t,winLost:s}=e;return(0,l.jsxs)("span",{className:null!==t&&void 0!==t?t:"",style:{color:(e=>e>0?"#00B31D":e<0?"#D40000":"#4098D8")(s),fontWeight:520},children:[s>0?"+":"",(0,a.kr)(s)]})}},77011:(e,t,s)=>{s.d(t,{G4:()=>m,KH:()=>x,Kv:()=>N,L:()=>g,LF:()=>u,N4:()=>v,O1:()=>S,TW:()=>f,VC:()=>p,VY:()=>T,XT:()=>h,ap:()=>_,co:()=>b,fr:()=>d,pP:()=>c,pu:()=>w,rO:()=>y});var a=s(15153),l=(s(54469),s(97467),s(39194)),n=s(98138),r=(s(3083),s(19501)),o=s.n(r),i=s(24881);const d=[{id:1,txt:"H\xf4m nay",time:(0,n.Mu)(0,0)},{id:2,txt:"H\xf4m qua",time:(0,n.Mu)(1,1)},{id:3,txt:"7 ng\xe0y tr\u01b0\u1edbc",time:(0,n.Mu)(6,0)},{id:4,txt:"1 th\xe1ng tr\u01b0\u1edbc",time:(0,n.Mu)(30,0)},{id:5,txt:"2 th\xe1ng tr\u01b0\u1edbc",time:(0,n.Mu)(60,0)}],u=[{value:"",label:"T\u1ea5t c\u1ea3"},{value:1,label:"Slot"},{value:2,label:"Game Vi\u1ec7t"},{value:3,label:"B\u1eafn c\xe1"},{value:4,label:"Casino"},{value:5,label:"Th\u1ec3 thao"},{value:6,label:"X\u1ed5 s\u1ed1"}],c=new Map([[1,"SLOTS"],[2,"GAME VI\u1ec6T"],[3,"B\u1eaeN C\xc1"],[4,"TR\u1ef0C TUY\u1ebeN"],[5,"TH\u1ec2 THAO"],[6,"X\u1ed4 S\u1ed0"],[8,"ESPORT"]]),m=[{value:null,label:"T\u1ea5t c\u1ea3"},{value:5,label:"\u0110\xe3 thanh to\xe1n"},{value:3,label:"\u0110\xe3 h\u1ee7y"},{value:2,label:"\u0110\xe3 t\u1eeb ch\u1ed1i"}],h=(new Map([[0,{label:"Ch\u01b0a k\xea\u0301t toa\u0301n",type:""}],[1,{label:"Th\u0103\u0301ng",type:"success"}],[2,{label:"Thua",type:"danger"}],[3,{label:"\u0110a\u0303 thu h\xf4\u0300i/hu\u0309y",type:"info"}],[4,{label:"K\xea\u0301t toa\u0301n la\u0323i",type:"warning"}]]),new Map([[!0,"#00B31D"],[!1,"#D40000"]]),new l.jS({fixedWidth:!0,defaultHeight:401}),(e,t)=>{const s=t.orderInfo[0].oddsValue;if([3,4].includes(t.oddsType)&&s<0)return e+e*Math.abs(-s);const a=[2,3,4].includes(t.oddsType)?s+1:s;return Number(new(o())(e).times(a).toFixed(2,o().ROUND_DOWN))}),p=async(e,t,s)=>{let{thirdOrderNo:l,seriesType:n}=e,r={userName:localStorage.getItem("userName"),channelType:1,orderNo:l,cashOutAmount:Number(t),unitCashOutPayoutAmount:s,acceptOddsChange:!0,seriesType:n};return await(0,a.MR)(r)},y=async(e,t,s)=>{let{thirdOrderNo:l,seriesType:n}=e,r={channelType:1,orderNo:l,cashOutAmount:t,cashOutPayoutAmount:s,seriesType:n};return await(0,a.HE)(r)},v=async e=>{let{cashOutOrders:t}=e;let s={channelType:1,reserveCashOutId:t.at(-1).reserveCashOutId};return await(0,a.SQ)(s)},b=(e,t)=>(0,n.kr)(""+e*t),_=(e,t)=>{let s=e.orderInfo[0].oddsValue;return[i.Y.odds_type_3,i.Y.odds_type_4].includes(e.oddsType)&&s<0?Number((0,n.kr)(Number(t)*Math.abs(-s))):Number((0,n.kr)(t))},x=(e,t)=>{let s=e.orderInfo[0].oddsValue;return[i.Y.odds_type_3,i.Y.odds_type_4].includes(e.oddsType)&&s<0?Number((0,n.kr)(Number(t)*Math.abs(-s))):Number((0,n.kr)(t))},N=(e,t)=>{var s;t=null!==(s=t)&&void 0!==s?s:g(e.betAmount,e);let a=e.orderInfo[0].oddsValue;return[i.Y.odds_type_3,i.Y.odds_type_4].includes(e.oddsType)&&a<0?Number((0,n.kr)(Number(t)/Math.abs(-a))):Number((0,n.kr)(t))},g=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return null!==t&&void 0!==t&&t.cashOutPayoutAmount?s?e-t.cashOutAmount:(0,n.kr)(e-t.cashOutAmount):e},S=function(e,t){var s;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,l=a>=0?a:e.cashOutAmount>0?new(o())(e.betAmount).minus(e.cashOutAmount).toNumber():e.betAmount,r=e.orderInfo[0].oddsValue;if(-1==a&&[i.Y.odds_type_3,i.Y.odds_type_4].includes(e.oddsType)&&r<0){var d;return(0,n.kr)(new(o())(l).times(null!==(d=t.amt)&&void 0!==d?d:0).toNumber()/Math.abs(-r))}return(0,n.kr)(new(o())(l).times(null!==(s=t.amt)&&void 0!==s?s:0).toNumber())},T=e=>{let t=e.orderInfo[0].oddsValue;return[i.Y.odds_type_3,i.Y.odds_type_4].includes(e.oddsType)&&t<0?new(o())(e.betAmount).minus(e.cashOutAmount).toNumber()/Math.abs(-t):((e,t)=>Number(new(o())(e).times(t).toFixed(2,o().ROUND_DOWN)))(new(o())(e.betAmount).minus(e.cashOutAmount).toNumber(),e.oddsType===i.Y.odds_type_1?t-1:t)},f=e=>{const t=e.oddsType;let s=e.orderInfo.map((e=>e.oddsValue));const[a,l]=e.betType.split("*");let r=a.split("x"),o=[];if(1===+r[1])o=A(s,+r[0]);else for(let n=2;n<=s.length;n++)o.push(...A(s,n));const i=e.betAmount/+l,d=o.map((e=>e.reduce(((e,s)=>e*(2===t?s+1:s)),1))).reduce(((e,t)=>e+t*i),0);return(0,n.kr)(d-e.betAmount)},w=e=>new(o())(e.maxWinAmount).add(e.betAmount).toNumber();function A(e,t){let s=[];return function e(t,a,l){let n=t.length;if(!(a>n))if(a==n)s.push([].concat(l,t));else for(let r=0;r<n;r++){let n=[].concat(l);if(n.push(t[r]),1==a)s.push(n);else{let s=[].concat(t);s.splice(0,r+1),e(s,a-1,n)}}}(e,t,[]),s}},91150:(e,t,s)=>{s.r(t),s.d(t,{default:()=>L});var a=s(78900),l=s(10132),n=s(51486),r=s(96797),o=s(47100),i=s(38630);const d="styles_betHistoryWrap__uoz1A",u="styles_sumData__Mpayy",c="styles_searchHeader__JyWgD",m="styles_searchForm__KkyM5",h="styles_button__CGjCs",p="styles_emptyWrap__PBSNe",y="styles_tips__f1wB7",v="styles_table__CrYLs",b="styles_matchName__jJUp0",_="styles_itemImage__X-+kC",x="styles_footerTable__XUnZn";var N=s(98138),g=s(77011),S=s(79434),T=s(59641),f=s(15153),w=s(49091),A=s(97542),j=s(14599),C=s(88297),O=s(39097),I=s(57422),H=s(18377),k=s(4612),M=s(7079),P=s(9250);const V=e=>{let{getSearchParams:t,defaultValue:s}=e;const[r]=a.A.useForm(),[o,i]=(0,S.useState)(null),[d,u]=(0,S.useState)(null);(0,S.useEffect)((()=>{if(s){const{selectId:e,gameType:t}=s,a=g.fr.find((t=>t.id===e));i({label:null===a||void 0===a?void 0:a.txt,value:null===a||void 0===a?void 0:a.id});const l=g.LF.find((e=>+e.value==+t));u({label:null===l||void 0===l?void 0:l.label,value:null===l||void 0===l?void 0:l.value})}}),[s]);return(0,P.jsx)("div",{className:c,children:(0,P.jsxs)(a.A,{form:r,className:m,layout:"inline",name:"complex-form",onFinish:e=>{t(e)},onReset:()=>{r.resetFields(),t(r.getFieldsValue(!0))},labelCol:{span:8},wrapperCol:{span:16},children:[(0,P.jsx)(a.A.Item,{name:"selectId",children:(0,P.jsx)(I.A,{width:189,list:g.fr.map((e=>({label:e.txt,value:e.id}))),placeHolder:"H\xf4m nay",activeItem:o,selectHandler:e=>r.setFieldValue("selectId",+e)})}),(0,P.jsx)(a.A.Item,{name:"gameType",children:(0,P.jsx)(I.A,{width:188,list:g.LF.map((e=>({...e,value:e.value?e.value:""}))),placeHolder:"Tr\xf2 ch\u01a1i",activeItem:d,selectHandler:e=>r.setFieldValue("gameType",e)})}),(0,P.jsx)(a.A.Item,{colon:!1,children:(0,P.jsxs)(l.A,{children:[(0,P.jsx)(n.Ay,{className:h,type:"primary",htmlType:"submit",icon:(0,P.jsx)(k.p8,{}),children:"T\xecm ki\u1ebfm"}),(0,P.jsx)(H.A,{})]})})]})})},D=()=>{const e=(0,C.Zp)();return(0,P.jsxs)("div",{className:p,children:[(0,P.jsx)("img",{src:s(60071),alt:""}),(0,P.jsx)("p",{className:y,children:"QU\xdd H\u1ed8I VI\xcaN CH\u01afA PH\xc1T SINH \u0110\u01a0N C\u01af\u1ee2C N\xc0O"}),(0,P.jsx)(A.A,{btnText:"C\u01af\u1ee2C NGAY",width:200,height:55,handleSubmit:()=>{e("/sports",{state:"game"})}})]})},F=[{width:300,render:()=>"T\u1ed4NG"},{dataIndex:"bettingTimes",align:"center",width:212},{dataIndex:"betAmountSum",align:"center",width:228,render:e=>(0,N.kr)(e)},{dataIndex:"totalWinSum",align:"center",width:222,render:e=>(0,P.jsx)(j.A,{winLost:e})}],L=()=>{var e;const t=(0,C.Zp)(),s=(0,C.zy)(),[a,l]=(0,S.useState)([]),[n,c]=(0,S.useState)({betAmountSum:0,betValidSum:0,bettingTimes:0,totalWinSum:0}),[m,h]=(0,S.useState)(!1),p=(0,S.useRef)(),y=(0,S.useRef)(null);(0,S.useEffect)((()=>{var e,t;let a,l;if(window.scrollTo(0,0),"back"===(null===s||void 0===s?void 0:s.state)){var n,r;const e=M.x.get("betHistory");y.current=e.searchParams,a=null===(n=e.searchParams)||void 0===n?void 0:n.selectId,l=null===(r=e.searchParams)||void 0===r?void 0:r.gameType}const[o,i]=p.current=null!==(e=null===(t=g.fr.find((e=>e.id===a)))||void 0===t?void 0:t.time)&&void 0!==e?e:g.fr[0].time;return A({startTime:o,endTime:i,gameType:l}),()=>{h(!1)}}),[s.state]);const{run:A,loading:I}=(0,T.A)((e=>(0,f.E2)({...e,gameDevice:"2"})),{cacheKey:"betHistory",manual:!0,onSuccess:e=>{const{code:t,data:s}=e;if(!t){const e=s.reduce(((e,t)=>(e.betAmountSum+=t.betAmountSum,e.betValidSum+=t.betValidSum,e.bettingTimes+=t.bettingTimes,e.totalWinSum+=t.totalWinSum,e)),{betAmountSum:0,betValidSum:0,bettingTimes:0,totalWinSum:0});c(e),h(0===s.length),l(s.map(((e,t)=>({...e,key:t}))))}}}),H=(0,S.useCallback)((e=>{var t,s;let{selectId:a,gameType:l}=e;y.current={selectId:a,gameType:l};const[n,r]=p.current=null!==(t=null===(s=g.fr.find((e=>e.id===a)))||void 0===s?void 0:s.time)&&void 0!==t?t:g.fr[0].time;A({startTime:n,endTime:r,gameType:l})}),[]),k=[{title:"NH\xc0 CUNG C\u1ea4P",align:"center",width:300,render:e=>(0,P.jsxs)("div",{className:b,children:[(0,P.jsxs)(w.A,{bool:""!==e.casinoGameLogo,children:[(0,P.jsx)("img",{src:`${(0,N.Pe)()}${null===e||void 0===e?void 0:e.casinoGameLogo}`,alt:""}),(0,P.jsx)("div",{style:{background:"white"},className:_})]}),(0,P.jsx)("span",{children:e.casinoGameName||e.platform})]})},{title:"S\u1ed0 \u0110\u01a0N C\u01af\u1ee2C",dataIndex:"bettingTimes",align:"center",width:212,render:e=>(0,P.jsx)("span",{onClick:()=>{},style:{cursor:"pointer",color:"#6C7AAB"},children:e})},{title:"TI\u1ec0N \u0110\u1eb6T C\u01af\u1ee2C",dataIndex:"betAmountSum",align:"center",width:228,render:e=>(0,N.kr)(e)},{title:"TH\u1eaeNG / THUA",dataIndex:"totalWinSum",classNames:"totalWinSum",align:"center",width:222,render:e=>(0,P.jsx)(j.A,{winLost:e})}],L=(0,S.useMemo)((()=>{var e;return[void 0,1].includes(null===(e=y.current)||void 0===e?void 0:e.selectId)}),[null===(e=y.current)||void 0===e?void 0:e.selectId]);return(0,P.jsxs)("div",{className:d,children:[(0,P.jsxs)("p",{className:u,children:["DOANH THU C\u01af\u1ee2C: ",(0,N.kr)(n.betValidSum)]}),(0,P.jsx)(V,{getSearchParams:H,defaultValue:y.current}),(0,P.jsx)(i.Ay,{theme:{components:{Table:{headerBg:"#35C0FF",headerColor:"#FFF"}}},renderEmpty:()=>m&&(L?(0,P.jsx)(D,{}):(0,P.jsx)(O.A,{})),children:(0,P.jsx)(o.A,{footer:()=>a.length?(0,P.jsx)(o.A,{dataSource:[n],columns:F,className:x,pagination:!1,bordered:!1,showHeader:!1}):(0,P.jsx)(r.A,{defaultCurrent:1,total:1}),className:v,columns:k,dataSource:a,bordered:!1,rowKey:e=>e.casinoGameName,pagination:{position:["bottomCenter"],pageSize:11},onRow:e=>({onClick:()=>{M.x.get("betHistory")&&M.x.remove("betHistory"),M.x.set("betHistory",{searchParams:y.current}),t("/mine/detail",{state:{record:e,timeArr:p.current}})}})})})]})}},54469:(e,t,s)=>{s.d(t,{B3:()=>v,BF:()=>u,Gi:()=>r,J6:()=>h,L8:()=>b,Nh:()=>d,V9:()=>o,bA:()=>c,bS:()=>_,fM:()=>i,g0:()=>g,hi:()=>m,nM:()=>x,xC:()=>p,xW:()=>y,yO:()=>N});var a=s(97467),l=s.n(a);const n=(0,s(17096).vt)(((e,t)=>({betOptionList:[{marketId:65054516,odds:7.25,optionType:1,oddsFormat:1},{marketId:64407233,odds:1.94,optionType:1,oddsFormat:1}],unSettleList:[],settleList:[],timesShip:{startTime:l()().startOf("date").valueOf(),endTime:l()().endOf("date").valueOf()},active:"unSettle",isShowDialog:!0,userName:"",orderNo:null,seriesType:null,cashOutAmount:0,cashOutPayoutAmount:0,betAmount:0,amt:0,oddsValue:0,sMins:0,pMis:0,isShowButton:!1,totalPage:1,orderNumber:0,betTotalAmount:0,winOrLoss:0,id:0,vs:{have:!1},as:[],type:0,sid:0,eventsList:[],orderUnSettleNumber:0,preDetail:null,cancelDetail:null,showPanel:!1,showMatchBetHistoryPanel:!1,orderNoSet:new Set,showMatchResult:!1,showSportRule:!1,setTimesShip:(t,s)=>e({timesShip:{startTime:t,endTime:s}}),setUnSettleOrderNum:t=>e({orderUnSettleNumber:t}),setPreSettleDetail:t=>e({preDetail:t}),setCancelDetail:t=>e({cancelDetail:t}),setShowPanel:t=>e({showPanel:t}),setShowMatchBetHistoryPanel:t=>e({showMatchBetHistoryPanel:t}),setOrderSet:t=>e({orderNoSet:t}),setShowMatchResult:t=>e({showMatchResult:t}),setShowSportRule:t=>e({showSportRule:t})}))),r=()=>n((e=>e.setUnSettleOrderNum)),o=()=>n((e=>e.orderUnSettleNumber)),i=()=>n((e=>e.preDetail)),d=()=>n((e=>e.setPreSettleDetail)),u=()=>n((e=>e.cancelDetail)),c=()=>n((e=>e.setCancelDetail)),m=()=>n((e=>e.showPanel)),h=()=>n((e=>e.setShowPanel)),p=()=>n((e=>e.showMatchBetHistoryPanel)),y=()=>n((e=>e.setShowMatchBetHistoryPanel)),v=()=>n((e=>e.showMatchResult)),b=()=>n((e=>e.setShowMatchResult)),_=()=>n((e=>e.showSportRule)),x=()=>n((e=>e.setShowSportRule)),N=()=>n((e=>e.orderNoSet)),g=()=>n((e=>e.setOrderSet))},60071:(e,t,s)=>{e.exports=s.p+"static/media/betting-no-data.dab9aa7337ec63c9b922.png"}}]);