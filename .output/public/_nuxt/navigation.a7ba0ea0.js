import{c as m,_ as p}from"./entry.63d5d6c3.js";import{q as f,h as o,e as g,j as c}from"./query.983e44cb.js";import{w as s,s as h}from"./utils.744bcfaf.js";import{u as v}from"./preview.ad9324fa.js";const T=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=f(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${g(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(h())return(await p(()=>import("./client-db.20947555.js"),["./client-db.20947555.js","./entry.63d5d6c3.js","./swiper-vue.75882043.js","./swiper-vue.75a16bda.css","./entry.e51f02ac.css","./query.983e44cb.js","./utils.744bcfaf.js","./preview.ad9324fa.js","./index.a6ef77ff.js"],import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:c(a),previewToken:v().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{T as f};