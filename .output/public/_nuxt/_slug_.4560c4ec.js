import{_ as d}from"./BreadcrumbNav.2ec915a3.js";import g from"./ContentDoc.86f32a8a.js";import{u as f,q as v}from"./entry.4a9fc5ed.js";import{u as x,q as h}from"./query.43cbd28f.js";import{N as y,y as $,z as _,x as b}from"./swiper-vue.38cc38d4.js";import"./Icon.d8f377c7.js";import"./config.02c84d77.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.d11a9cfc.js";import"./navigation.2fdf2423.js";import"./utils.df34c69a.js";import"./preview.8fb98784.js";import"./ContentRenderer.0f053a40.js";import"./ContentRendererMarkdown.339dfc7c.js";import"./index.a6ef77ff.js";import"./ContentQuery.d785f572.js";const q={class:"container mx-auto px-6 pb-24 pt-12"},H={__name:"[slug]",async setup(w){var i,s,r,n,m,p,c;let e,o;const{path:a}=f(),{data:t}=([e,o]=y(()=>x(`content-${a}`,()=>h().where({_path:a}).only(["title","description","img"]).findOne())),e=await e,o(),e);return v({title:((i=t.value)==null?void 0:i.title)||"",ogTitle:((s=t.value)==null?void 0:s.title)||"",description:((r=t.value)==null?void 0:r.description)||((n=t.value)==null?void 0:n.title),ogDescription:((m=t.value)==null?void 0:m.description)||((p=t.value)==null?void 0:p.title),ogImage:`_nuxt/assets/image/${(c=t.value)==null?void 0:c.img}`||"_nuxt/assets/image/about-1.jpg"}),(B,C)=>{const u=d,l=g;return b(),$("div",q,[_(u),_(l)])}}};export{H as default};
