import{o as B,u as $}from"./entry.63d5d6c3.js";import{l as b,a as C,k as N,x as l,y as p,a1 as f,J as h,u as d,C as y,O as S,P as v,z as m,A as x,L as q,I as r,Q as A,M as z,a2 as I,a3 as E}from"./swiper-vue.75882043.js";import L from"./Icon.e7e40c2c.js";import{_ as k}from"./nuxt-link.0dbe76f8.js";import{_ as H}from"./BreadcrumbNav.ed747898.js";import{u as O}from"./query.983e44cb.js";import{f as P}from"./navigation.a7ba0ea0.js";import{b as T,c as V}from"./subtract-front-2.c2546fa9.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const D=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),M=(e,t)=>(i,n)=>(B(()=>e({...D(i),...n.attrs},n)),()=>{var a,o;return t?(o=(a=n.slots).default)==null?void 0:o.call(a):null}),F={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=b({name:"Title",inheritAttrs:!1,setup:M((e,{slots:t})=>{var n,a,o;return{title:((o=(a=(n=t.default)==null?void 0:n.call(t))==null?void 0:a[0])==null?void 0:o.children)||null}})}),gt=b({name:"Meta",inheritAttrs:!1,props:{...F,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:M(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),ft=b({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var i,n;return(n=(i=t.slots).default)==null?void 0:n.call(i)}}),U={key:2,class:"absolute left-0 top-[100%] z-10 w-full bg-main-bg-white py-2 text-main-dark shadow-sm"},J={__name:"SubMenuButton",props:{subMenu:{type:Array,default:()=>[]},path:{type:String,required:!0}},setup(e){const t=e,i=C(!1),n=()=>{i.value=!i.value},a=N(()=>{var o,s;return((s=(o=t.subMenu)==null?void 0:o.find(u=>u._path===t.path))==null?void 0:s.title)||"選擇頁面"});return(o,s)=>{const u=L,c=k;return l(),p("button",{class:"relative cursor-pointer rounded-tl-[15px] bg-primary py-2 pl-8 pr-6 text-main-bg-white md:hidden",onClick:n},[f(h(d(a))+" ",1),d(i)?(l(),y(u,{key:0,name:"ic:outline-keyboard-arrow-up",size:"16",color:"text-main-bg-white"})):(l(),y(u,{key:1,name:"ic:outline-keyboard-arrow-down",size:"16",color:"text-main-bg-white"})),d(i)?(l(),p("ul",U,[(l(!0),p(S,null,v(e.subMenu,(_,w)=>(l(),p("li",{key:`submenu-${w}-${_.title}`,class:""},[m(c,{to:_._path,class:"inline-block w-full px-4 py-2 transition-colors duration-300 hover:bg-main-gray"},{default:x(()=>[f(h(_.title),1)]),_:2},1032,["to"])]))),128))])):q("",!0)])}}},Q={class:"hidden pl-12 pr-8 pt-16 md:block"},R={__name:"SubMenuSide",props:{subMenu:{type:Array,default:()=>[]},path:{type:String,required:!0}},setup(e){return(t,i)=>{const n=k;return l(),p("div",Q,[r("ul",null,[(l(!0),p(S,null,v(e.subMenu,(a,o)=>(l(),p("li",{key:`submenu-${o}-${a.title}`,class:A(["px-4 py-2 transition-colors duration-300 hover:text-primary",{"text-primary":a._path===e.path}])},[m(n,{to:a._path},{default:x(()=>[f(h(a.title),1)]),_:2},1032,["to"])],2))),128))])])}}};const g=e=>(I("data-v-cb6e84fd"),e=e(),E(),e),G={class:"container relative mx-auto py-8 md:px-6 md:py-12"},K={class:"relative min-h-[80vh] max-w-full rounded-br-30 border-b-[24px] border-b-secondary bg-main-bg-gray md:rounded-tl-30"},W=g(()=>r("span",{class:"absolute left-0 top-0 z-10 hidden h-[5%] w-[180px] rounded-tl-30 bg-primary md:inline-block"},null,-1)),X={class:"flex"},Y={class:"flex-1 px-2 py-8 md:px-4 md:py-10 md:pb-16"},Z={class:"mt-10 text-2xl"},tt={class:"relative"},et=g(()=>r("span",{class:"absolute -bottom-1 left-0 h-12 w-12 rounded-tr-30 bg-highlight"},null,-1)),nt={class:"animate__animated animate__fadeIn relative pl-4"},ot=g(()=>r("img",{src:T,alt:"overlay",class:"absolute right-0 top-[100px] hidden opacity-80 lg:inline-block"},null,-1)),at=g(()=>r("img",{src:V,alt:"overlay",class:"absolute bottom-[72px] left-0 hidden opacity-80 lg:inline-block"},null,-1)),it={__name:"ListContainer",props:{title:{type:String,required:!0}},setup(e){var a;const{path:t}=$(),{data:i}=O("navigation",()=>P()),n=(a=i.value)==null?void 0:a.reduce((o,s)=>{if(!s.children)return[...o,{title:s.title,_path:s._path}];const u=s.children.filter(c=>c.title!==s.title).map(c=>({title:c.title,_path:c._path}));return[...o,...u]},[]);return(o,s)=>{const u=J,c=R,_=H;return l(),p("div",null,[r("div",G,[m(u,{"sub-menu":d(n),path:d(t)},null,8,["sub-menu","path"]),r("div",K,[W,r("div",X,[m(c,{"sub-menu":d(n),path:d(t)},null,8,["sub-menu","path"]),r("div",Y,[m(_),r("h1",Z,[r("span",tt,[et,r("span",nt,h(e.title),1)])]),z(o.$slots,"default",{},void 0,!0)])])])]),ot,at])}}},bt=j(it,[["__scopeId","data-v-cb6e84fd"]]);export{ft as H,gt as M,ht as T,bt as _};
