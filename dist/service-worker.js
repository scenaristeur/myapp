if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const u=e=>n(e,i),t={module:{uri:i},exports:c,require:u};s[i]=Promise.all(l.map((e=>t[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"agent"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/agent/css/165.9af57d6c.css",revision:null},{url:"/agent/css/324.3dd4c5f9.css",revision:null},{url:"/agent/css/444.cc4d8120.css",revision:null},{url:"/agent/css/739.2bf21112.css",revision:null},{url:"/agent/css/app.53a9e9c7.css",revision:null},{url:"/agent/css/chunk-vendors.339c5200.css",revision:null},{url:"/agent/index.html",revision:"c78be761e3ed4bc4bc5ed6994cd7308d"},{url:"/agent/js/159.01b0e644.js",revision:null},{url:"/agent/js/165.57b28fc8.js",revision:null},{url:"/agent/js/214.11430a68.js",revision:null},{url:"/agent/js/250.4955c637.js",revision:null},{url:"/agent/js/255.f5e1a7e3.js",revision:null},{url:"/agent/js/267.2e035b31.js",revision:null},{url:"/agent/js/324.e906345c.js",revision:null},{url:"/agent/js/369.52eeaacc.js",revision:null},{url:"/agent/js/444.10ccdfb2.js",revision:null},{url:"/agent/js/675.c5ace6ad.js",revision:null},{url:"/agent/js/739.92322027.js",revision:null},{url:"/agent/js/app.ef24ce70.js",revision:null},{url:"/agent/manifest.json",revision:"b7c324c9d792aac96df56e51ee506dbf"},{url:"/agent/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
