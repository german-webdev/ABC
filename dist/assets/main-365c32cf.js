/* Last build: 4:9:2023  23.31.9*/
function T(){import.meta.url,import("_").catch(()=>1);async function*t(){}}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const f of e.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function u(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=u(r);fetch(r.href,e)}})();var c="Л",a="П",l="О",p=["A","Б","В","Г","Д","Е","Ж","З","И","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Э","Ю","Я"];function M(){for(var t=p.length,o=new Array(t),u=new Array(t),i=new Array(t),r=new Array(t),e=0;e<t;e++)u[r[e]=e]=Math.random();function f(g,L,E){var k=g[L];g[L]=g[E],g[E]=k}for(var e=t-1;e>1;e--)for(var d=0;d<e;d++)u[d]>u[d+1]&&(f(u,d,d+1),f(r,d,d+1));for(var e=0;e<t;e++)switch(i[e]=p[r[e]]){case l:o[e]=l;continue;case c:o[e]=a;continue;case a:o[e]=c;continue}var s={};s[c]=s[a]=s[l]=0;for(var e=0;e<t;e++)if(!o[e]){var n,w=Math.random();if(w<.333?n=c:w<.666?n=l:n=a,o[e-1]==n&&(o[e+1]==n||o[e-2]==n))switch(n){case l:n=s[c]>s[a]?a:c;break;case c:n=s[a]>s[l]?l:a;break;case a:n=s[l]>s[c]?c:l;break}s[n]=s[n]+1,o[e]=n}return[i,o]}var h,v=p.length,m=1e3,y=document.getElementById("pauseButton");y.addEventListener("click",()=>{wg=document.getElementById("workGround"),wg.classList.toggle("active"),wg.classList.contains("active")?(y.textContent="Cтоп",y.style.background="#ff002b"):(y.textContent="Старт",y.style.background="#49b40a")});function B(){v==p.length&&(h=M(),v=0);var t=document.getElementById("workGround"),o=document.getElementById("screen");t.style.visibility="hidden";var u=o.clientWidth,i=o.clientHeight;i<50&&(i=document.body.clientHeight),t.style.left=Math.ceil(Math.random()*(u-100))+"px",t.style.top=Math.ceil(Math.random()*(i-250))+40+"px",document.getElementById("voiceLetter").innerHTML=h[0][v],document.getElementById("moveLetter").innerHTML=h[1][v],t.style.visibility="visible",v++,setTimeout(B,m)}function x(t){switch(t.keyCode){case 37:case 38:case 33:if(m<300)return;m-=50;break;case 40:case 39:case 34:if(m>9949)return;m+=50;break}document.getElementById("delayInput").value=m}window.onkeypress=x;window.onload=B;const A=document.querySelector(".button-rules"),I=document.querySelector(".modal-rules"),O=document.querySelector(".modal-button"),H=document.body;A.addEventListener("click",t=>{const o=H.classList.contains("modal-rules--active");I.classList.toggle("modal-rules--active"),O.addEventListener("click",b),o&&b()});document.addEventListener("keydown",function(t){t.keyCode==27&&b()});function b(){I.classList.remove("modal-rules--active")}export{T as __vite_legacy_guard};
