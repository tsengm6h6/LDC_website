import b from"./ContentSlot.47eb1215.js";import{u as k,a as _}from"./entry.f5e22ec4.js";import{a as h,x as s,y as u,I as i,O as f,P as $,Q as g,u as o,J as x,C as n,L as l}from"./swiper-vue.75882043.js";import"./utils.fda22699.js";import"./preview.cd1ab825.js";const v={class:"mt-12"},C={class:"flex items-center justify-start border-b-2 border-solid border-b-main-bg-gray text-base md:text-lg"},B=["onClick"],L={class:"py-12 md:px-4"},A={__name:"DetailTab",setup(D){const{path:c}=k(),m=_(),t=h("detail"),d=e=>{m.push({path:c,query:{tab:e}}),t.value=e},p=[{name:"行程細節",key:"detail"},{name:"費用包含",key:"include"},{name:"注意事項",key:"notice"},{name:"取消政策",key:"policy"}];return(e,R)=>{const a=b;return s(),u("div",v,[i("ul",C,[(s(),u(f,null,$(p,(r,y)=>i("li",{key:`tab-${y}-${r.name}`,class:g(`relative top-[0.125rem] cursor-pointer border-b-4 px-2 py-2 text-center transition-all duration-300 hover:text-[#8A6659] md:px-4 ${o(t)===r.key?"border-b-highlight":"border-b-transparent"}`),onClick:S=>d(r.key)},x(r.name),11,B)),64))]),i("div",L,[o(t)==="detail"?(s(),n(a,{key:0,use:e.$slots.detail},null,8,["use"])):l("",!0),o(t)==="include"?(s(),n(a,{key:1,use:e.$slots.include},null,8,["use"])):l("",!0),o(t)==="notice"?(s(),n(a,{key:2,use:e.$slots.notice},null,8,["use"])):l("",!0),o(t)==="policy"?(s(),n(a,{key:3,use:e.$slots.policy},null,8,["use"])):l("",!0)])])}}};export{A as default};