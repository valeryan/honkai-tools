import{d as _,o as h,c as v,a,b as l,w as i,F as g,r as u,e as y,f as d,g as b,h as A,i as N}from"./vendor.7332f4de.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};k();var F="/honkai-tools/assets/logo.03d6d6da.png";var w=(c,t)=>{const r=c.__vccOpts||c;for(const[s,e]of t)r[s]=e;return r};const x=_({name:"App",setup:()=>{h(()=>{console.log("App mounted")})}}),H=a("img",{alt:"Vue logo",src:F},null,-1),L=d("Home"),O=d("About");function V(c,t,r,s,e,o){const n=u("router-link"),m=u("router-view");return y(),v(g,null,[H,a("div",null,[a("ul",null,[a("li",null,[l(n,{to:"/"},{default:i(()=>[L]),_:1})]),a("li",null,[l(n,{to:"/about"},{default:i(()=>[O]),_:1})])])]),l(m)],64)}var $=w(x,[["render",V]]);const B={template:"<div>Home</div>"},C={template:"<div>About</div>"},M={template:"<div>404 Not Found</div>"},E=[{path:"/",component:B},{path:"/about",component:C},{path:"/:pathMatch(.*)*",component:M,name:"NotFound"}],p="/honkai-tools/";console.log(p);const P=b({history:A(p),routes:E}),f=N($);f.use(P);f.mount("#app");