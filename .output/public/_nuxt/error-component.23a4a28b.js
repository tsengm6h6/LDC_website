import{_ as a}from"./entry.f5e22ec4.js";import{x as d,C as f,G as E,H as g,u as s,j as n}from"./swiper-vue.75882043.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:e}=u;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),o=r===404,i=e.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=e.message||e.toString(),_=void 0,l=o?n(()=>a(()=>import("./error-404.9af2004b.js"),["./error-404.9af2004b.js","./nuxt-link.a489be9c.js","./entry.f5e22ec4.js","./swiper-vue.75882043.js","./swiper-vue.75a16bda.css","./entry.e51f02ac.css","./_plugin-vue_export-helper.c27b6911.js","./error-404.1474f64e.css"],import.meta.url).then(t=>t.default||t)):n(()=>a(()=>import("./error-500.1880b3b7.js"),["./error-500.1880b3b7.js","./entry.f5e22ec4.js","./swiper-vue.75882043.js","./swiper-vue.75a16bda.css","./entry.e51f02ac.css","./_plugin-vue_export-helper.c27b6911.js","./error-500.070dde72.css"],import.meta.url).then(t=>t.default||t));return(t,m)=>(d(),f(s(l),E(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};