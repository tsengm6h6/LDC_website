import{_ as d}from"./BreadcrumbNav.c5a00ab4.js";import g from"./ContentDoc.b3770a81.js";import{u as f,q as v}from"./entry.51c62378.js";import{u as x,q as h}from"./query.4e1dade2.js";import{N as y,y as $,z as _,x as b}from"./swiper-vue.75882043.js";import"./Icon.63a96c0c.js";import"./config.f5ae89c1.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.7c529cb6.js";import"./navigation.4ce9cd07.js";import"./utils.41160d9d.js";import"./preview.6207aecb.js";import"./ContentRenderer.978711e2.js";import"./ContentRendererMarkdown.2ba8a226.js";import"./index.a6ef77ff.js";import"./ContentQuery.229e3c51.js";const q={class:"container mx-auto px-6 pb-24 pt-12"},H={__name:"[slug]",async setup(w){var i,s,r,n,m,p,c;let e,o;const{path:a}=f(),{data:t}=([e,o]=y(()=>x(`content-${a}`,()=>h().where({_path:a}).only(["title","description","img"]).findOne())),e=await e,o(),e);return v({title:((i=t.value)==null?void 0:i.title)||"",ogTitle:((s=t.value)==null?void 0:s.title)||"",description:((r=t.value)==null?void 0:r.description)||((n=t.value)==null?void 0:n.title),ogDescription:((m=t.value)==null?void 0:m.description)||((p=t.value)==null?void 0:p.title),ogImage:`_nuxt/assets/image/${(c=t.value)==null?void 0:c.img}`||"_nuxt/assets/image/about-1.jpg"}),(B,C)=>{const u=d,l=g;return b(),$("div",q,[_(u),_(l)])}}};export{H as default};
