import{u as y,o as g,c as w,l as C}from"./entry.63d5d6c3.js";import{u as h,b as v,n as D,l as S,R as _,m as r}from"./swiper-vue.75882043.js";import b from"./ContentRenderer.5008a94a.js";import q from"./ContentQuery.e797b17d.js";import"./ContentRendererMarkdown.b3ae4908.js";import"./index.a6ef77ff.js";import"./preview.ad9324fa.js";import"./query.983e44cb.js";import"./utils.744bcfaf.js";const a=(u,e=y())=>{const s=h(u),p=w();v(()=>h(u),(t=s)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const m=(n==null?void 0:n.description)||(t==null?void 0:t.description);m&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:m}),n!=null&&n.image||(t==null||t.image),D(()=>g(n))},{immediate:!0})},T=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=_(),{tag:s,excerpt:p,path:f,query:t,head:n}=u,c={...t||{},path:f||(t==null?void 0:t.path)||C(y().path),find:"one"},m=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(q,c,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&a(i),r(b,{value:i,excerpt:p,tag:s,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):m("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
