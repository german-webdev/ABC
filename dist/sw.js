if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>i(e,l),t={module:{uri:l},exports:c,require:o};s[l]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-7d1307b6.js",revision:null},{url:"assets/app-legacy-d9bebb35.js",revision:null},{url:"assets/css/index-a586991e.css",revision:null},{url:"assets/main-a390482b.js",revision:null},{url:"assets/main-legacy-3114bd0a.js",revision:null},{url:"assets/modal-6dc7ae20.js",revision:null},{url:"assets/modal-legacy-ecc8e83c.js",revision:null},{url:"index.html",revision:"02fdf4972364686ca6cb4b794c8338ac"},{url:"registerSW.js",revision:"960adbfb1df7e10053cc2386b50cf7c3"},{url:"assets/images/android-chrome-192x192.png",revision:"62267fe95fca93360ed14964ead91063"},{url:"assets/images/android-chrome-512x512.png",revision:"4eb71ece97c35e2f57c24c02cacfbf87"},{url:"manifest.webmanifest",revision:"53878b6c73769d59263ee495e6b9687c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
