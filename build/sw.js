if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-a586991e.css",revision:null},{url:"assets/main-a390482b.js",revision:null},{url:"assets/main-legacy-3114bd0a.js",revision:null},{url:"index.html",revision:"c0fa28f59ebcc7b15ea60544a01b68a3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./assets/images/android-chrome-192x192.png",revision:"62267fe95fca93360ed14964ead91063"},{url:"./assets/images/android-chrome-512x512.png",revision:"4eb71ece97c35e2f57c24c02cacfbf87"},{url:"manifest.webmanifest",revision:"01585fae5cc4147c4c13d718f87d0e28"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
