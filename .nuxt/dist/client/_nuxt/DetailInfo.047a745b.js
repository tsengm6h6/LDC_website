import n from"./DetailImage.c2842402.js";import{x as s,y as a,I as e,z as i,J as r,L as c,M as d}from"./swiper-vue.75882043.js";import"./useAssets.450043fa.js";import"./entry.63d5d6c3.js";import"./logo-gray.983ad52d.js";import"./subtract-front-2.c2546fa9.js";const m={class:"mt-8 flex flex-col gap-8 md:flex-row"},f={class:"md:min-h-[519px] md:w-1/2"},u={class:"flex flex-col items-start justify-between md:w-1/2"},g={class:"text-xl md:text-2xl"},x={key:0,class:"-ml-1 mt-2 rounded bg-danger-light px-2 py-1 text-sm font-medium tracking-normal text-danger"},_={class:"mb-4 mt-8 flex flex-1 flex-col items-start justify-start gap-6"},h=["href"],p=e("button",{class:"btn btn-secondary mt-4 w-full md:mt-0"},"立即報名",-1),y=[p],D={__name:"DetailInfo",props:{src:{type:String,required:!0},alt:{type:String,required:!0},title:{type:String,required:!0},tag:{type:String,default:""},link:{type:String,default:""}},setup(t){return(l,b)=>{const o=n;return s(),a("div",m,[e("div",f,[i(o,{src:t.src,alt:t.alt},null,8,["src","alt"])]),e("div",u,[e("h1",g,r(t.title),1),t.tag?(s(),a("span",x,r(t.tag),1)):c("",!0),e("div",_,[d(l.$slots,"default")]),e("a",{class:"block w-full",href:t.link,target:"_blank",rel:"noopener noreferrer"},y,8,h)])])}}};export{D as default};
