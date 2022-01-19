var x=Object.defineProperty;var R=(t,e,n)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);import{r as I,a as C,d as v,o as B,c as d,b as s,e as u,w as p,f as y,g as c,h as g,F as f,t as h,i as S,j as D,k as G,l as P,m as A,n as N}from"./vendor.ac1a3988.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};T();class H{constructor(){k(this,"state");let e=this.data();this.setup(e),this.state=I(e)}setup(e){}getState(){return C(this.state)}}class M extends H{data(){return{valkyries:[],recommendations:[],signetGroups:[]}}setValkyries(e){this.state.valkyries=e}setRecommendations(e){this.state.recommendations=e}setSignets(e){this.state.signetGroups=e}}const _=new M;var V=[{id:1,slug:"silverwing-n-ex",name:"Silverwing N-Ex"},{id:2,slug:"dea-anchora",name:"Dea Anchora"},{id:3,slug:"hofs",name:"Herrscher of Flamescion"}],F=[{id:1,slug:"hofs",difficulty:140,rank:"S",exclusive:{signet:"hofs",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},sigil:{early:{slot1:1},mid:{slot1:1,slot2:2},late:{slot1:2}},supports:{early:{slot1:1,slot2:3},mid:{slot1:2,slot2:3},late:{slot1:1,slot2:3}}},{id:2,slug:"dea-anchora",difficulty:130,rank:"S",exclusive:{signet:"dea-anchora",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:"1st"},{id:2,signetId:2,choice:"2nd"}]},sigil:{early:{slot1:1},mid:{slot1:1,slot2:2},late:{slot1:2}},supports:{early:{slot1:1,slot2:3},mid:{slot1:2,slot2:3},late:{slot1:1,slot2:3}}}],K=[{id:1,slug:"silverwing-n-ex",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Grey Falcon",description:"Restore SP per second. Scatter barrier enables Combo ATK",type:"Exclusive"},{id:2,name:"Blessing of Phantom Plumes",description:"After using support, tapping ATK triggers QTE",type:"Exclusive"}]},{id:2,slug:"dea-anchora",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Grey Falcon",description:"Restore SP per second. Scatter barrier enables Combo ATK",type:"Exclusive"},{id:2,name:"Blessing of Phantom Plumes",description:"After using support, tapping ATK triggers QTE",type:"Exclusive"}]},{id:3,slug:"hofs",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Reburn",description:"Evading clears heat",type:"Exclusive"},{id:2,name:"Blessing of Heatflow",description:"Black hole deals bonus fire DMG",type:"Exclusive"}]},{id:4,slug:"kevin",flameChaser:"Kevin",name:"Signet of Deliverance",signets:[{id:1,name:"Goblet of the Giver",description:"Ultimate boosts Total DMG by 35% for 5s",type:"normal"},{id:2,name:"Pendant of the Watcher",description:"Ultimate boosts Physical DMG by 30% for 5s",type:"normal"}]},{id:5,slug:"eden",flameChaser:"Eden",name:"Signet of Gold",signets:[{id:1,name:"Recitatif of Eden",description:"Every 10 SP left boosts Total DMG by 3.0%",type:"normal"},{id:2,name:"Recitatif of Creeks",description:"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",type:"normal"}]},{id:6,slug:"kalpas",flameChaser:"Kalpas",name:"Signet of Decimation",signets:[{id:1,name:"Blade, Grave, and Scar",description:"Every 100 HP loss boosts Total DMG by 1.0%",type:"normal"},{id:2,name:"Bone, Blood, and Ribbon",description:"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",type:"normal"}]}],L="/honkai-tools/assets/honkai_web.69150024.png",b=(t,e)=>{const n=t.__vccOpts||t;for(const[a,o]of e)n[a]=o;return n};const O=v({name:"App",setup:()=>{_.setValkyries(V),_.setRecommendations(F),_.setSignets(K),B(()=>{console.log("App mounted")})}}),U={class:"container"},j={class:"navbar navbar-expand-lg navbar-light bg-light"},q={class:"container-fluid"},Q=s("img",{alt:"Vue logo",src:L},null,-1),W=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),z={class:"collapse navbar-collapse",id:"navbarSupportedContent"},J={class:"navbar-nav me-auto mb-2 mb-lg-0"},X={class:"nav-item"},Y=g("Home"),Z={class:"nav-item"},ee=g("Elysian Realm"),te={class:"nav-item dropdown"},se=s("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Dropdown ",-1),ne={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},oe=g("Action"),ae=g("Another action"),ie=s("li",null,[s("hr",{class:"dropdown-divider"})],-1),le=g("Something else here");function re(t,e,n,a,o,i){const l=y("router-link"),m=y("router-view");return c(),d("div",U,[s("nav",j,[s("div",q,[u(l,{class:"navbar-brand",to:"/"},{default:p(()=>[Q]),_:1}),W,s("div",z,[s("ul",J,[s("li",X,[u(l,{class:"nav-link",to:"/"},{default:p(()=>[Y]),_:1})]),s("li",Z,[u(l,{class:"nav-link",to:"/elysian-realm"},{default:p(()=>[ee]),_:1})]),s("li",te,[se,s("ul",ne,[s("li",null,[u(l,{class:"dropdown-item",to:"/"},{default:p(()=>[oe]),_:1})]),s("li",null,[u(l,{class:"dropdown-item",to:"/"},{default:p(()=>[ae]),_:1})]),ie,s("li",null,[u(l,{class:"dropdown-item",to:"/"},{default:p(()=>[le]),_:1})])])])])])])]),u(m)])}var ce=b(O,[["render",re]]);const de=v({name:"Home",setup:()=>({appState:_.getState()})}),ue=s("h1",null,"Home",-1),pe=s("p",null,"This is the homepage of Honkai Tools",-1);function me(t,e,n,a,o,i){return c(),d(f,null,[ue,pe],64)}var ge=b(de,[["render",me]]),he="/honkai-tools/assets/dea-anchora.3c88922b.png",_e="/honkai-tools/assets/dea-anchora.3c88922b.png",fe="/honkai-tools/assets/dea-anchora.3c88922b.png";const ve=v({name:"Recommendation",props:{valkyrie:{type:Object,require:!0}},methods:{getExclusive(){var n;const t=(n=this.recommendation)==null?void 0:n.exclusive;if(t===void 0)return;let e=this.getSignetsBySlug(t.signet);if(e!==void 0)return e=e.map(a=>{const o=t.choices.find(l=>l.signetId==a.id),i=o?o.choice:"No";return{id:a.id,name:a.name,description:a.description,type:a.type,choice:i}}),e},getSignetsBySlug(t){const e=this.appState.signetGroups.find(n=>n.slug==t);return e==null?void 0:e.signets}},watch:{"$route.params":{handler(t){const{slug:e}=t;this.recommendation=this.appState.recommendations.find(n=>n.slug==e)},immediate:!0}},setup:t=>{const e=_.getState();return{recommendation:e.recommendations.find(a=>{var o;return a.slug==((o=t.valkyrie)==null?void 0:o.slug)}),appState:e}}}),ye=s("h2",null,"Exclusive Signets",-1),be=s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Choice")],-1);function ke(t,e,n,a,o,i){var l,m;return c(),d(f,null,[s("h1",null,h((l=t.valkyrie)==null?void 0:l.name)+"("+h((m=t.recommendation)==null?void 0:m.difficulty)+"D)",1),ye,s("table",null,[be,(c(!0),d(f,null,S(t.getExclusive(),r=>(c(),d("tr",null,[s("td",null,h(r.name),1),s("td",null,h(r.description),1),s("td",null,h(r.choice),1)]))),256))])],64)}var Se=b(ve,[["render",ke]]);const Ee=v({name:"ElysianRealm",methods:{getImageUrl:t=>new URL({"../../assets/valkyries/dea-anchora.png":he,"../../assets/valkyries/hofs.png":_e,"../../assets/valkyries/silverwing-n-ex.png":fe}[`../../assets/valkyries/${t}.png`],self.location).href},computed:{showValkyrie(){var n;const t=this.$route.params.slug;return(n=this.appState.valkyries)==null?void 0:n.find(a=>a.slug==t)},showRecommends(){var n;const t=this.$route.params.slug;return(n=this.appState.recommendations)==null?void 0:n.find(a=>a.slug==t)}},components:{Recommendation:Se},setup:()=>({appState:_.getState()})}),$e=s("h1",null,"Elysian Realm",-1),we=["alt","src"];function xe(t,e,n,a,o,i){const l=y("router-link"),m=y("Recommendation");return c(),d(f,null,[$e,s("ul",null,[(c(!0),d(f,null,S(t.appState.valkyries,r=>(c(),d("li",{key:r.id},[u(l,{to:{name:"ElysianRealm",params:{slug:r.slug}}},{default:p(()=>[s("img",{class:"valk-img",alt:r.name,src:t.getImageUrl(r.slug)},null,8,we),g(" "+h(r.name),1)]),_:2},1032,["to"])]))),128))]),t.showValkyrie?(c(),D(m,{key:0,valkyrie:t.showValkyrie},null,8,["valkyrie"])):G("",!0)],64)}var E=b(Ee,[["render",xe]]);const Re={template:"<div>404 Not Found</div>"},Ie=[{path:"/",component:ge},{path:"/elysian-realm",component:E},{path:"/elysian-realm/:slug",name:"ElysianRealm",component:E},{path:"/:pathMatch(.*)*",component:Re,name:"NotFound"}];const $="/honkai-tools/";console.log($);const Ce=P({history:A($),routes:Ie}),w=N(ce);w.use(Ce);w.mount("#app");
