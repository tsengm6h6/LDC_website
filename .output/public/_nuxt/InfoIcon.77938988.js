import a from"./Icon.39d053af.js";import{k as i,x as c,y as l,I as e,Q as p,u as m,z as u,J as d,M as f}from"./swiper-vue.75882043.js";import"./entry.f5e22ec4.js";import"./config.ff2379bf.js";import"./_plugin-vue_export-helper.c27b6911.js";const _={class:"col-span-4 justify-self-start md:col-span-2"},y={class:"flex items-center justify-center"},x={class:"ml-4"},h={class:"text-base font-medium"},g={class:"text-base"},I={__name:"InfoIcon",props:{icon:{type:String,required:!0},title:{type:String,required:!0},type:{type:String,required:!1,default:"primary"},color:{type:String,required:!1,default:"text-main-bg-white"}},setup(s){const t=s,o=i(()=>{switch(t.type){case"primary":return"bg-[#34b1b1] text-white";case"normal":return"bg-[#D9D9D9] text-[#3F3E3E]"}});return(r,b)=>{const n=a;return c(),l("div",_,[e("div",y,[e("div",{class:p(`flex h-[48px] w-[48px] min-w-[48px] items-center justify-center rounded-full ${m(o)}`)},[u(n,{name:t.icon,size:"24",color:s.color},null,8,["name","color"])],2),e("div",x,[e("h5",h,d(t.title),1),e("p",g,[f(r.$slots,"default")])])])])}}};export{I as default};