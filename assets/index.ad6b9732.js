var $=Object.defineProperty,P=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,i,t)=>i in e?$(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,b=(e,i)=>{for(var t in i||(i={}))F.call(i,t)&&w(e,t,i[t]);if(G)for(var t of G(i))V.call(i,t)&&w(e,t,i[t]);return e},S=(e,i)=>P(e,H(i));var C=(e,i,t)=>(w(e,typeof i!="symbol"?i+"":i,t),t);import{r as U,a as L,d as E,o as N,c as u,b as s,e as h,w as v,f as k,g as d,h as _,F as y,t as g,i as D,n as x,j as B,k as O,l as W,m as q,p as z,q as j,s as X}from"./vendor.55b32c93.js";const Y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};Y();class Q{constructor(){C(this,"state");let i=this.data();this.setup(i),this.state=U(i)}setup(i){}getState(){return L(this.state)}}class Z extends Q{data(){return{valkyries:[],recommendations:[],signetGroups:[],emblems:[],supports:[]}}setValkyries(i){this.state.valkyries=i}setRecommendations(i){this.state.recommendations=i}setSignets(i){this.state.signetGroups=i}setEmblems(i){this.state.emblems=i}setSupports(i){this.state.supports=i}}const p=new Z,J=[{id:1,name:"The Moth Insignia",description:"Reduces Total DMG taken by 25% and restores 15% HP after the battle.",slug:"the-moth-insignia"},{id:2,name:"Home Lost",description:"Grants 3 portal resets but locks Remembrance Sigil and Support Valkyrie.",slug:"home-lost"},{id:3,name:"False Hope",description:"Valkyrie receives 50% less Total DMG when debuffed.",slug:"false-hope"},{id:4,name:"Tin Flask",description:"Flame-Chaser support Skills are triggered more often.",slug:"tin-flask"},{id:5,name:"Ruined Legacy",description:"Grants 30 bonus initial SP but consumes 10% current HP after battle.",slug:"ruined-legacy"},{id:6,name:"Burden",description:"Portals carrying Signets of Deliverance appear more often.",slug:"burden"},{id:7,name:"Gold Goblet",description:"Portals carrying Signets of Gold appear more often.",slug:"gold-goblet"},{id:8,name:"Mad King's Mask",description:"Portals carrying Signets of Decimation appear more often.",slug:"mad-kings-mask"},{id:9,name:"Bodhi Leaf",description:"Portals carrying Signets of Bodhi appear more often.",slug:"bodhi-leaf"},{id:10,name:"Forget-Me-Not",description:"Portals carrying Signets of Setsuna appear more often.",slug:"forget-me-not"},{id:11,name:"Forbidden Seed",description:"Portals carrying Signets of Infinity appear more often.",slug:"forbidden-seed"},{id:12,name:"Memory",description:"Portals carrying Signets of Vicissitude appear more often.",slug:"memory"},{id:13,name:"Crystal Rose",description:"Portals carrying Signets of &#9633; &#9633; appear more often.",slug:"crystal-rose"},{id:14,name:"Abandoned",description:"Grants 1 extra level when choosing a Deliverance signet. Killing enemies reduces Ultimate CD by 20%. CD: 10s.",slug:"abandoned"},{id:15,name:"Good Old Days",description:"Grants 1 extra level when choosing a Signet of Gold. Consuming 50 SP or more in on go drops an SP Pack which grants 10 SP.",slug:"good-old-days"},{id:16,name:"Shattered Shackles",description:"Grants 1 extra level when choosing a Signet of Decimation. At below 33% HP, Valkyrie is immune to most debuffs; at below 20% HP, Valkyrie will not be interrupted when hit.",slug:"shattered-shackles"},{id:17,name:"Heavy as a Million Lives",description:"Grants 1 extra level when choosing a Signet of Bodhi. Combo count will not be reset; the first hit that lands grants an additional 50 combo count.",slug:"heavy-as-a-million-lives"},{id:18,name:"Stained Sakura",description:"Grants 1 extra level when choosing a Signet of Setsuna. When signet Setsuna Blade: Sakura Screen is active, every time Sakura Screen is triggered, its DMG conversion ration increase by 10%.",slug:"stained-sakura"},{id:19,name:"The First Scale",description:"Grants 1 extra level when choosing a Signet of Infinity. When the Signet of Infinite [X] are active, Valkyrie will enter a 8-sec Mind Sync when battle starts.",slug:"the-first-scale"},{id:20,name:"Resolve",description:"Grants 1 extra level when choosing a Vicissitude Signet. When signet of Vivid Vicissitude is Active, Soldier's Resolve starts with 1 more stack and grants temporary invincibility when blocking DMG.",slug:"word"},{id:21,name:"Thorny Crown",description:"???",slug:"thorny-crown"}],ee=[{id:1,slug:"HOT",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Divine Penalty",description:"In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG.",type:"Exclusive"},{id:2,name:"Blessing of Tsukuyomi",description:"Tap [ATK] after evasion to connect into Basic ATK sequence 4. Basic ATK sequence 4 boosts Total DMG by 40% for 5s.",type:"Exclusive"},{id:3,name:"Blessing of Hazy Moon",description:"Basic ATK sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK of Lightning DMG on hit.",type:"Exclusive"},{id:4,name:"Blessing of Mitama",description:"Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK sequence 5 restores 100 bonus Herrscher Charge.",type:"Exclusive"},{id:5,name:"Blessing of Narukami",description:"Finisher unleashes 8 bolts of thundering sanction each dealing 900% ATK of Lightning DMG on hit.",type:"Exclusive"}]},{id:2,slug:"HOR",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Creation",description:"In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit.",type:"Exclusive"},{id:2,name:"Blessing of Truth",description:"Triggering Ultimate Evasion fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill.",type:"Exclusive"},{id:3,name:"Blessing of Reason",description:"Every hit from hover guns reduces weapon active CD by 0.7s.",type:"Exclusive"},{id:4,name:"Blessing of Wisdom",description:"In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG.",type:"Exclusive"},{id:5,name:"Blessing of Inspiration",description:"Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG.",type:"Exclusive"}]},{id:3,slug:"HOFS",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Reburn",description:"Triggering an Ultimate Evasion Skill removes Overheat and clears Heat.",type:"Exclusive"},{id:2,name:"Blessing of Tempered Warrior",description:"Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s.",type:"Exclusive"},{id:3,name:"Blessing of Flamescion",description:"For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG.",type:"Exclusive"},{id:4,name:"Blessing of Starfire",description:"When a black hole created by the Herrscher of Flamescion disappears, a smaller black hole lasting 5s is generated, dealing 300% ATK of Fire DMG per second. CD: 3s.",type:"Exclusive"},{id:5,name:"Blessing of Heatflow",description:"Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole dealing 1200% ATK of Fire DMG.",type:"Exclusive"}]},{id:4,slug:"SN",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Kindred",description:"Any mark resonance triggers the effect twice. CD: 5s.",type:"Exclusive"},{id:2,name:"Blessing of Vulnerable Duality",description:"Triggering Ultimate Evasion Skill reduces Ultimate CD by 40%.",type:"Exclusive"},{id:3,name:"Blessing of Union",description:"Within 12s after switching between Saule and Veliona, resonances of either Sunnebrands or Veilmarks trigger the resonance effects of both marks.",type:"Exclusive"},{id:4,name:"Blessing of Intergrowth",description:"Switching between Saule and Veliona restores full Ultimate Evasion Skill charges.",type:"Exclusive"},{id:5,name:"Blessing of Might of Duality",description:"Casting Ultimate creates a resonance field (up to 3 can be present). Resonances of Sunnebrands or Veilmarks deal 160% ATK of bonus Physical DMG to enemies within the field.",type:"Exclusive"}]},{id:5,slug:"AKA",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Cold Moon",description:"Inflicting Ice Cell also creates a Frost Ring around the Valkyrie that lasts 6s and deals 180% ATK of Ice DMG per 0.3s to nearby enemies.",type:"Exclusive"},{id:2,name:"Blessing of Frost Scythe",description:"Tap [ATK] after an evasion to hurl a Frost Guisarmier which spins for 5s, gathers enemies nearby, and deals 5400% ATK of Ice DMG. CD: 10s.",type:"Exclusive"},{id:3,name:"Blessing of Winter Harvest",description:"Enemies recovering from Ice Cell are inflicted with 1 stack of Hypothermia.",type:"Exclusive"},{id:4,name:"Blessing of Uranian Mirror",description:"Burst mode costs double SP to maintain. In Burst mode, Valkyrie deals 90% extra Total DMG.",type:"Exclusive"},{id:5,name:"Blessing of Stellar Trails",description:"Inflicting Ice Cell in burst mode also creates a Frost Ring centered around the target, lasting 2s and dealing 480% ATK of Ice DMG per 0.3s to nearby enemies.",type:"Exclusive"}]},{id:6,slug:"RI",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Torch",description:"When a Combo ATK that consumes KE hits an enemy, all gun turrets fire a laser beam at the target to deal Physical DMG equal to the number of Combo ATK stacks x 1600% ATK.",type:"Exclusive"},{id:2,name:"Blessing of Dawn",description:"At full KE, the next Combo ATK consumes all of it to constitute 4 stacks and additionally fire 4 homing missiles dealing 3600% ATK of Physical DMG in total.",type:"Exclusive"},{id:3,name:"Blessing of Blossom",description:"Homing missiles restore 2 SP on hit. Basic ATK Sequence 6 additionally fires 4 homing missiles, each dealing 450% ATK of Physical DMG.",type:"Exclusive"},{id:4,name:"Blessing of Prosperity",description:"Tap [ATK] after an evasion to dash to enemies and deliver an aerial kick, which can be connected into Basic ATK Sequence 4. Basic ATK Sequence 6 restores 150 KE every time it lands.",type:"Exclusive"},{id:5,name:"Blessing of Fertility",description:"Ultimate replenishes 40 light bullets for every gun turret and boosts their Tech Level by 1 (caps at 3). Each turret restores KE at a rate of Tech Level x 30 per second.",type:"Exclusive"}]},{id:7,slug:"VG",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Impetus",description:"Entering Sprint triggers Stage 2 and until Sprint ends, attacks cost 40 Resolve more on hit to deal 200% ATK of Fire DMG. CD: 0.1s.",type:"Exclusive"},{id:2,name:"Blessing of Gloria",description:"The last hit of Charged ATK or Throw ATK inflicts Magnifica Mark on enemies, which explodes after a short delay, dealing 1500% ATK of Fire DMG.",type:"Exclusive"},{id:3,name:"Blessing of Sol",description:"Within 3s of performing an Ultimate Evasion, Basic ATK Sequence 5 or the last hit of Charged ATK inflicts Magnifica Mark on enemies, which explodes after a short delay, dealing 1200% ATK of Fire DMG.",type:"Exclusive"},{id:4,name:"Blessing of Battle Song",description:"Weapon Actives deal 200% bonus Total DMG. Hitting an enemy with a Charged ATK in Aura Ignis resets the Weapon Active CD.",type:"Exclusive"},{id:5,name:"Blessing of Triumph",description:"Triggering an Ultimate Evasion Skill or detonating Magnifica Mark restores 15 SP.",type:"Exclusive"}]},{id:8,slug:"PV",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Dark Wings",description:"When Ultimate Evasion Skill is triggered, Oz unleashes dark lightning that deals 4200% ATK of Lightning DMG.",type:"Exclusive"},{id:2,name:"Blessing of Retribution",description:"QTE creates a small lightning field which lasts 5s and deals 3x200% ATK of Lightning DMG per second to enemies within it.",type:"Exclusive"},{id:3,name:"Blessing of Nightfall",description:"Weapon Actives deal 200% bonus Total DMG. Summoning Oz with Charged ATK or casting Ultimate refills 2 weapon active charges.",type:"Exclusive"},{id:4,name:"Blessing of Fate",description:"When hitting an enemy with a weapon active, Oz unleashes dark lightning to deal 2000% ATK of Lightning DMG.",type:"Exclusive"},{id:5,name:"Blessing of Midnight",description:"During Ultimate, Oz lingers for 7s after the arrow rain. Every 7 hits from Oz on enemies within the Ultimate range summons dark lightning that deals 1500% ATK of Lightning DMG.",type:"Exclusive"}]},{id:9,slug:"ELY",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Purity",description:"Ultimate lasts 15s longer. While Ultimate is active, a wave of ricochet occurs under Flawless Dome every second. The ricochets triggered in this way only ricochet 3 times but deal 130% ATK of Physical DMG (DMG source: Ultimate).",type:"Exclusive"},{id:2,name:"Blessing of Zenith",description:"While Ultimate is active, each ricochet deals 15% ATK of bonus Physical DMG on hit. Every wave of ricochet reduces weapon active's CD by 0.6s.",type:"Exclusive"},{id:3,name:"Blessing of Love",description:"While Ultimate is active, Charged Shot: Cupid's Bolt consumes 100% bonus Infatuation and deals 700% ATK of bonus Physical DMG.",type:"Exclusive"},{id:4,name:"Blessing of Benevolence",description:"Infatuation is fully restored when Ultimate Evasion Skill is triggered. If Infatuation drops below 100 after using Charged Shot: Cupid's Bolt, you can consume 1 Ultimate Evasion charge to trigger Ultimate Evasion Skill.",type:"Exclusive"},{id:5,name:"Blessing of Beauty",description:"Using weapon active restores 1 additional Ultimate Evasion charge. Enemies take 25% bonus Total DMG when a Crystalline Seed is attached to them.",type:"Exclusive"}]},{id:10,slug:"BKE",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Holy Lance",description:"During Basic ATK SEQ 4, tap ATK repeatedly.",type:"Exclusive"},{id:2,name:"Blessing of Formation",description:"Basic ATK SEQ 5 creates a 3-sec Grav Singularity.",type:"Exclusive"},{id:3,name:"Blessing of Glory",description:"In Burst mode, Weapon Active has 70% shorter CD.",type:"Exclusive"},{id:4,name:"Blessing of Paragon",description:"Casting Weapon Active shortens Ultimate CD. Ultimate grants 5 stacks of Paragon.",type:"Exclusive"},{id:5,name:"Blessing of Gambit",description:"Triggering Retaliation or Ultimate Evasion boosts Physical DMG.",type:"Exclusive"}]},{id:11,slug:"LK",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:12,slug:"VB",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:13,slug:"NYX",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:14,slug:"IO",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:15,slug:"RVN",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:16,slug:"HOS",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:17,slug:"TP",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:18,slug:"SNS",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:19,slug:"DA",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"Blessing of Stars",description:"Ultimate deals bonus Total DMG.",type:"Exclusive"},{id:2,name:"Blessing of Gale",description:"In Astral Harness, all attacks ignite enemies.",type:"Exclusive"},{id:3,name:"Blessing of Sheen",description:"Ultimates do not suspend Astrum consumption.",type:"Exclusive"},{id:4,name:"Blessing of Halo",description:"Ultimates deal bonus Fire DMG within 8 meters of target hit.",type:"Exclusive"},{id:5,name:"Blessing of Brilliance",description:"Ultimate costs no SP and restores SP.",type:"Exclusive"}]},{id:20,slug:"SW",flameChaser:"Elysia",name:"Exclusive Signets",signets:[{id:1,name:"",description:"",type:"Exclusive"},{id:2,name:"",description:"",type:"Exclusive"},{id:3,name:"",description:"",type:"Exclusive"},{id:4,name:"",description:"",type:"Exclusive"},{id:5,name:"",description:"",type:"Exclusive"}]},{id:201,slug:"kevin",flameChaser:"Kevin",name:"Signet of Deliverance",signets:[{id:1,name:"Goblet of the Giver",description:"Ultimate boosts Total DMG by 35% for 5s.",type:"Normal"},{id:2,name:"Pendant of the Watcher",description:"Ultimate boosts Physical DMG by 30% for 5s.",type:"Normal"},{id:3,name:"Brand of the Undead",description:"Ultimate boosts Elemental DMG by 30% for 5s.",type:"Normal"},{id:4,name:"Mask of the Predator",description:"Ultimate boosts Physical Breach by 25% for 5s.",type:"Normal"},{id:5,name:"Artifact of the Inhibitor",description:"Ultimate boosts Elemental Breach by 20% for 5s.",type:"Normal"},{id:6,name:"Rochet of the Pilgrim",description:"Ultimate restores 3 SP per second for 5s.",type:"Normal"},{id:7,name:"Blade of the Deliverer",description:"Ultimate triggers Final Battle status during which all buffs provided by Normal Signets of Deliverance increase by 50% for 5s.",type:"Core"},{id:8,name:"Flock of the Deliverer",description:"Final Battle is also considered burst mode. Total DMG increases by 20% in burst mode.",nexus:7,type:"Enhanced"},{id:9,name:"Crusade of the Deliverer",description:"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%.",nexus:7,type:"Enhanced"},{id:10,name:"Echo of the Deliverer",description:"Duration of Final Battle and all buffs provided by Normal Signets of Deliverance are extended to 8s.",nexus:7,type:"Enhanced"},{id:11,name:"Shadow of the Deliverer",description:"When ultimate or burst mode attacks hit enemies 50 times, gain War of Deliverance which activates all Deliverance signets.",type:"Core"},{id:12,name:"Dream of the Deliverer",description:"In War of Deliverance, all buffs provided by Normal Signets of Deliverance increase by 50%.",nexus:11,type:"Enhanced"},{id:13,name:"Resolve of the Deliverer",description:"For every ultimate or burst mode attack hit, gain 0.5% Total Damage, max 50%.",nexus:11,type:"Enhanced"},{id:14,name:"Triumph of the Deliverer",description:"When entering War of Deliverance, ignore enemy defence and elemental resists for 6s.",nexus:11,type:"Enhanced"}]}],ie=[{id:1,name:"Valkyrie Chariot",tagline:"Black Hole",description:"Valkyrie Chariot unleashes a black hole to gather enemies nearby and bleed them. CD: 30s.",slug:"VC"},{id:2,name:"Divine Prayer",tagline:"Divine Retribution",description:"Divine Prayer creates a global time fracture during which enemies suffer from Divine Penalty, take Lightning DMG, and stay impaired. CD: 40s.",slug:"DP"},{id:3,name:"Snowy Sniper",tagline:"Arctic Snow",description:"Snowy Sniper summons Arctic Snow to freeze enemies and make them take bonus Physical DMG. CD: 60s.",slug:"SS"},{id:4,name:"Lightning Empress",tagline:"Lightning Charge",description:"Lightning Empress restores SP for the Valkyrie deployed.",slug:"LE"},{id:5,name:"Vermilion Knight: Eclipse",tagline:"Ravaging Flame",description:"Vermilion Knight: Eclipse wields Might of An-Utu to deal massive AoE Fire DMG (reduced below Difficulty 85) and ignite enemies. CD: 60s.",slug:"VKE"},{id:6,name:"Bright Knight: Excelsis",tagline:"Knightly Bulwark",description:"Bright Knight: Excelsis deals hight Physical DMG (reduced below Difficulty 85) and blocks all attacks for the Valkyrie deployed in a short duration. CD: 30s.",slug:"BKE"},{id:7,name:"Azure Empyrea",tagline:"Empyrean Sunder",description:"Azure Empyrea casts Empyrean Sunder to gather enemies, deal AoE Fire DMG (reduced below Difficulty 85), and enhance the Valkyrie deployed. CD: 50s.",slug:"AE"},{id:8,name:"Blood Rose",tagline:"Blood Boost",description:"Blood Rose enables the Valkyrie deployed to consume HP for a huge Total DMG boost.",slug:"BR"}],se=[{id:1,slug:"IO",name:"Mobius",battleSuit:"Infinite Ouroboros"},{id:2,slug:"SW",name:"Bronya Zaychik",battleSuit:"Silverwing N-EX"},{id:3,slug:"AKA",name:"Rita Rossweise",battleSuit:"Argent Knight Artemis"},{id:4,slug:"HOFS",name:"Kiana Kaslana",battleSuit:"Herrscher of Flamescion"},{id:5,slug:"DA",name:"Bianka Ataegina",battleSuit:"Dea Anchora"},{id:6,slug:"NYX",name:'"Seele" Vollerei',battleSuit:"Starchasm Nyx"},{id:7,slug:"HOS",name:"Fu Hua",battleSuit:"Herrscher of Sentience"},{id:8,slug:"HOR",name:"Bronya Zaychik",battleSuit:"Herrscher of Reason"},{id:9,slug:"PV",name:"Fischl",battleSuit:"Prinzessin Der Verurteilung"},{id:10,slug:"HOT",name:"Raiden Mei",battleSuit:"Herrscher of Thunder"},{id:11,slug:"RVN",name:"Natasha Cioara",battleSuit:"Midnight Absinthe"},{id:12,slug:"ELY",name:"Elysia",battleSuit:"Miss Pink Elf"},{id:13,slug:"TP",name:"Theresa Apocalypse",battleSuit:"Twilight Paladin"},{id:14,slug:"VB",name:"Raiden Mei",battleSuit:"Striker Fulminata"},{id:15,slug:"SN",name:"Seele Vollerei",battleSuit:"Stygian Nymph Seele"},{id:16,slug:"BKE",name:"Durandal",battleSuit:"Bright Knight Excelsis"},{id:17,slug:"VG",name:"Bianka Ataegina",battleSuit:"Valkyrie Gloria"},{id:18,slug:"RI",name:"Kallen Kaslana",battleSuit:"Ritual Imayoh"},{id:19,slug:"LK",name:"Theresa Apocalypse",battleSuit:"Luna Kindred"},{id:20,slug:"SNS",name:"Carole Peppers",battleSuit:"Sweet 'N Spicy"}];var te="/honkai-tools/assets/honkai_web.69150024.png",A=(e,i)=>{const t=e.__vccOpts||e;for(const[o,a]of i)t[o]=a;return t};const ne=E({name:"App",setup:()=>{p.setValkyries(se),p.setSignets(ee),p.setEmblems(J),p.setSupports(ie),N(()=>{console.log("App mounted")})}}),ae={class:"container"},oe={class:"navbar navbar-expand-lg navbar-light bg-light"},le={class:"container-fluid"},re=s("img",{alt:"Vue logo",src:te},null,-1),ce=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),de={class:"collapse navbar-collapse",id:"navbarSupportedContent"},ue={class:"navbar-nav me-auto mb-2 mb-lg-0"},ge={class:"nav-item"},pe=_("Home"),me={class:"nav-item"},he=_("Elysian Realm"),fe={class:"nav-item dropdown"},ye=s("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown",-1),ve={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},be=_("Action"),Se=_("Another action"),Ee=s("li",null,[s("hr",{class:"dropdown-divider"})],-1),ke=_("Something else here");function _e(e,i,t,o,a,r){const c=k("router-link"),m=k("router-view");return d(),u("div",ae,[s("nav",oe,[s("div",le,[h(c,{class:"navbar-brand",to:"/"},{default:v(()=>[re]),_:1}),ce,s("div",de,[s("ul",ue,[s("li",ge,[h(c,{class:"nav-link",to:"/"},{default:v(()=>[pe]),_:1})]),s("li",me,[h(c,{class:"nav-link",to:"/elysian-realm"},{default:v(()=>[he]),_:1})]),s("li",fe,[ye,s("ul",ve,[s("li",null,[h(c,{class:"dropdown-item",to:"/"},{default:v(()=>[be]),_:1})]),s("li",null,[h(c,{class:"dropdown-item",to:"/"},{default:v(()=>[Se]),_:1})]),Ee,s("li",null,[h(c,{class:"dropdown-item",to:"/"},{default:v(()=>[ke]),_:1})])])])])])])]),h(m)])}var Ae=A(ne,[["render",_e]]);const xe=E({name:"HomePage",setup:()=>({appState:p.getState()})}),De=s("h1",null,"Home",-1),Be=s("p",null,"This is the homepage of Honkai Tools",-1);function we(e,i,t,o,a,r){return d(),u(y,null,[De,Be],64)}var Te=A(xe,[["render",we]]),Ge="/honkai-tools/assets/AKA.3c88922b.png",Ce="/honkai-tools/assets/AKA.3c88922b.png",Ke="/honkai-tools/assets/AKA.3c88922b.png",Ie="/honkai-tools/assets/AKA.3c88922b.png",Me="/honkai-tools/assets/AKA.3c88922b.png",Re="/honkai-tools/assets/AKA.3c88922b.png",$e="/honkai-tools/assets/AKA.3c88922b.png",Pe="/honkai-tools/assets/AKA.3c88922b.png";const He=E({name:"ElysianRealmSignetList",props:{signetGroup:{type:Object,require:!0}},methods:{shouldShowSignet(e){var i;if(e.type.toLowerCase()=="core"&&(!e.choice||e.choice=="No"))return!1;if(e.type.toLowerCase()=="enhanced"){const t=(i=this.signetGroup)==null?void 0:i.signets.find(o=>o.id==e.nexus);if(!t||!t.choice||t.choice=="No")return!1}return!0}}}),Fe={class:"signets"},Ve={class:"card"},Ue={class:"list-group list-group-flush"},Le={class:"ms-2 me-auto"},Ne={class:"fw-bold"};function Oe(e,i,t,o,a,r){var c,m,l;return d(),u("div",Fe,[s("div",Ve,[s("h2",null,g((c=e.signetGroup)==null?void 0:c.flameChaser)+" - "+g((m=e.signetGroup)==null?void 0:m.name),1),s("ul",Ue,[(d(!0),u(y,null,D((l=e.signetGroup)==null?void 0:l.signets,f=>{var T;return d(),u(y,{key:f.id},[e.shouldShowSignet(f)?(d(),u("li",{key:0,class:x(["list-group-item d-flex justify-content-between align-items-start",f.type.toLowerCase()])},[s("div",Le,[s("div",Ne,g(f.name),1),_(" "+g(f.description),1)]),s("span",{class:x(["badge rounded-pill","bg-"+((T=f.choice)==null?void 0:T.toLowerCase())])},g(f.choice),3)],2)):B("",!0)],64)}),128))])])])}var We=A(He,[["render",Oe]]);const qe=E({name:"ElysianRealmSetup",props:{setupGroup:{type:Object,require:!0}},methods:{getEmblem(e){var i=this.appState.emblems.find(a=>a.id==e.slot1),t=i==null?void 0:i.name;if(e.slot2!==void 0){var o=this.appState.emblems.find(a=>a.id==e.slot2);t=t+" / "+(o==null?void 0:o.name)}return t},getSupport(e,i){var t=e["slot"+i],o=this.appState.supports.find(a=>a.id==t);return o==null?void 0:o.name}},setup:()=>({appState:p.getState()})}),ze={class:"card"},je={key:0,class:"table table-striped"},Xe=s("thead",null,[s("tr",null,[s("th",null,"Floors"),s("th",null,"Remembrance Sigil"),s("th",null,"Support 1"),s("th",null,"Support 2")])],-1),Ye=s("td",null,"1-8",-1),Qe=s("td",null,"9-12",-1),Ze=s("td",null,"13-16",-1);function Je(e,i,t,o,a,r){return d(),u("div",ze,[e.setupGroup?(d(),u("table",je,[Xe,s("tbody",null,[s("tr",null,[Ye,s("td",null,g(e.getEmblem(e.setupGroup.early.emblem)),1),s("td",null,g(e.getSupport(e.setupGroup.early.support,1)),1),s("td",null,g(e.getSupport(e.setupGroup.early.support,2)),1)]),s("tr",null,[Qe,s("td",null,g(e.getEmblem(e.setupGroup.mid.emblem)),1),s("td",null,g(e.getSupport(e.setupGroup.mid.support,1)),1),s("td",null,g(e.getSupport(e.setupGroup.mid.support,2)),1)]),s("tr",null,[Ze,s("td",null,g(e.getEmblem(e.setupGroup.late.emblem)),1),s("td",null,g(e.getSupport(e.setupGroup.late.support,1)),1),s("td",null,g(e.getSupport(e.setupGroup.late.support,2)),1)])])])):B("",!0)])}var ei=A(qe,[["render",Je]]),n;(function(e){e.first="1st",e.second="2nd",e.start="Start",e.filler="Filler"})(n||(n={}));const ii=[{id:1,slug:"DA",difficulty:130,rank:"S",exclusive:{signet:"DA",choices:[{id:1,signetId:1,choice:n.start},{id:2,signetId:2,choice:n.filler},{id:3,signetId:3,choice:n.first},{id:4,signetId:4,choice:n.second},{id:5,signetId:5,choice:n.filler}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:n.second},{id:3,signetId:3,choice:n.second},{id:5,signetId:5,choice:n.first},{id:6,signetId:6,choice:n.first},{id:7,signetId:7,choice:n.first},{id:8,signetId:8,choice:n.filler},{id:9,signetId:9,choice:n.first}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},setup:{early:{emblem:{slot1:1},support:{slot1:1,slot2:3}},mid:{emblem:{slot1:1,slot2:2},support:{slot1:2,slot2:3}},late:{emblem:{slot1:1},support:{slot1:1,slot2:3}}}}],si=[{id:1,slug:"HOFS",difficulty:140,rank:"S",exclusive:{signet:"HOFS",choices:[{id:1,signetId:1,choice:n.start},{id:2,signetId:2,choice:n.first}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.filler},{id:3,signetId:4,choice:n.second}]},setup:{early:{emblem:{slot1:1},support:{slot1:1,slot2:3}},mid:{emblem:{slot1:1,slot2:2},support:{slot1:2,slot2:3}},late:{emblem:{slot1:1},support:{slot1:1,slot2:3}}}}],ti=[{id:1,slug:"HOT",difficulty:140,rank:"S",variant:"Burst Mode Spam",exclusive:{signet:"HOT",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.start}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.filler},{id:3,signetId:4,choice:n.second}]},setup:{early:{emblem:{slot1:1},support:{slot1:1,slot2:3}},mid:{emblem:{slot1:1,slot2:2},support:{slot1:2,slot2:3}},late:{emblem:{slot1:1},support:{slot1:1,slot2:3}}}},{id:2,slug:"HOT",difficulty:140,rank:"S",variant:"Basic ATK Spam",exclusive:{signet:"HOT",choices:[{id:1,signetId:1,choice:n.start},{id:2,signetId:2,choice:n.first}]},signet1:{signet:"kalpas",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet2:{signet:"kevin",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.second}]},signet3:{signet:"eden",choices:[{id:1,signetId:1,choice:n.first},{id:2,signetId:2,choice:n.filler},{id:3,signetId:4,choice:n.second}]},setup:{early:{emblem:{slot1:1},support:{slot1:1,slot2:3}},mid:{emblem:{slot1:1,slot2:2},support:{slot1:2,slot2:3}},late:{emblem:{slot1:1},support:{slot1:1,slot2:3}}}}];class ni{load(i){if(i===void 0){p.setRecommendations([]);return}switch(i.slug){case"DA":p.setRecommendations(ii);break;case"HOFS":p.setRecommendations(si);break;case"HOT":p.setRecommendations(ti);break;default:p.setRecommendations([]);break}}}const K=new ni;const ai=E({name:"ElysianRealmRecommend",props:{valkyrie:{type:Object,require:!0}},components:{ElysianRealmSignetList:We,ElysianRealmSetup:ei},methods:{findVariantName(e,i){return e<=1?"":i.variant?i.variant:"Variant "+i.id},getSignetGroup(e,i){const t=this.getChoiceGroupBySlug(e,i),o=this.getSignetGroupBySlug(t==null?void 0:t.signet);if(t===void 0||o===void 0)return;const a=o.signets.map(r=>{const c=t.choices.find(l=>l.signetId==r.id),m=c?c.choice:"No";return S(b({},r),{choice:m})});return S(b({},o),{signets:a})},getChoiceGroupBySlug(e,i){switch(e){case"exclusive":return i.exclusive;case"signet1":return i.signet1;case"signet2":return i.signet2;case"signet3":return i.signet3;default:return}},getSignetGroupBySlug(e){if(e!==void 0)return this.appState.signetGroups.find(i=>i.slug==e)},setActiveRecommend(e){const i=S(b({},e),{isActive:!0}),t=this.recommends.map(o=>o.id===i.id?S(b({},o),{isActive:!0}):S(b({},o),{isActive:!1}));this.recommends=t,console.log("active"),console.log(t)}},watch:{valkyrie:{immediate:!0,deep:!0,handler(e){K.load(e),this.recommends=p.getState().recommendations,this.setActiveRecommend(this.recommends[0]),console.log("watch")}}},setup:e=>{K.load(e.valkyrie);const i=p.getState();let t=O(i.recommendations);return console.log("setup"),{appState:i,recommends:t}}}),oi={key:0,class:"nav nav-tabs",role:"tablist"},li={role:"presentation",class:"nav-item"},ri=["onClick"],ci={key:1,id:"recommendations",class:"tab-content"},di={class:"row"},ui={class:"row"},gi={class:"col-5"},pi={class:"col"},mi={key:2,id:"recommendations"},hi=s("p",null,"This Valkyrie does not have any recommendations.",-1),fi=[hi];function yi(e,i,t,o,a,r){const c=k("ElysianRealmSetup"),m=k("ElysianRealmSignetList");return d(),u(y,null,[s("h1",null,g(e.valkyrie?e.valkyrie.battleSuit+" - "+e.valkyrie.name:""),1),e.recommends.length>1?(d(),u("ul",oi,[(d(!0),u(y,null,D(e.recommends,l=>(d(),u("li",li,[s("a",{href:"#",onClick:W(f=>e.setActiveRecommend(l),["stop","prevent"]),class:x([{active:l.isActive},"nav-link"])},g(e.findVariantName(e.recommends.length,l)),11,ri)]))),256))])):B("",!0),e.recommends.length>0?(d(),u("div",ci,[(d(!0),u(y,null,D(e.recommends,l=>(d(),u("div",{key:l.id,class:x(["tab-pane fade",{show:l.isActive,active:l.isActive}])},[s("div",di,[s("h2",null,g(l.difficulty+"D")+" "+g(e.findVariantName(e.recommends.length,l)),1)]),s("div",ui,[s("div",gi,[h(c,{"setup-group":l.setup},null,8,["setup-group"]),h(m,{"signet-group":e.getSignetGroup("exclusive",l)},null,8,["signet-group"])]),s("div",pi,[h(m,{"signet-group":e.getSignetGroup("signet1",l)},null,8,["signet-group"]),h(m,{"signet-group":e.getSignetGroup("signet2",l)},null,8,["signet-group"]),h(m,{"signet-group":e.getSignetGroup("signet3",l)},null,8,["signet-group"])])])],2))),128))])):(d(),u("div",mi,fi))],64)}var vi=A(ai,[["render",yi]]);const bi=E({name:"ElysianRealm",methods:{getImageUrl:e=>new URL({"../assets/valkyries/AKA.png":Ge,"../assets/valkyries/DA.png":Ce,"../assets/valkyries/HOFS.png":Ke,"../assets/valkyries/HOR.png":Ie,"../assets/valkyries/HOS.png":Me,"../assets/valkyries/IO.png":Re,"../assets/valkyries/NYX.png":$e,"../assets/valkyries/SW.png":Pe}[`../assets/valkyries/${e}.png`],self.location).href,isActiveLink(e){return e===this.$route.params.slug}},computed:{foundValkyrie(){var t;const e=this.$route.params.slug;return(t=this.appState.valkyries)==null?void 0:t.find(o=>o.slug==e)}},components:{ElysianRealmRecommend:vi},setup:()=>({appState:p.getState()})}),Si=s("h1",null,"Elysian Realm",-1),Ei={class:"nav"},ki=["alt","src"];function _i(e,i,t,o,a,r){const c=k("router-link"),m=k("ElysianRealmRecommend");return d(),u(y,null,[Si,s("nav",null,[s("ul",Ei,[(d(!0),u(y,null,D(e.appState.valkyries,l=>(d(),u("li",{key:l.id,class:"nav-item"},[h(c,{to:{name:"ElysianRealm",params:{slug:l.slug}},class:x([{active:e.isActiveLink(l.slug)},"nav-link text-center"])},{default:v(()=>[s("img",{class:"valk-img",alt:l.battleSuit,src:e.getImageUrl(l.slug)},null,8,ki),s("span",null,g(l.battleSuit),1)]),_:2},1032,["to","class"])]))),128))])]),e.foundValkyrie?(d(),q(m,{key:0,valkyrie:e.foundValkyrie},null,8,["valkyrie"])):B("",!0)],64)}var I=A(bi,[["render",_i]]);const Ai={template:"<div>404 Not Found</div>"},xi=[{path:"/",component:Te},{path:"/elysian-realm",component:I},{path:"/elysian-realm/:slug",name:"ElysianRealm",component:I},{path:"/:pathMatch(.*)*",component:Ai,name:"NotFound"}];const M="/honkai-tools/";console.log(M);const Di=z({history:j(M),routes:xi}),R=X(Ae);R.use(Di);R.mount("#app");