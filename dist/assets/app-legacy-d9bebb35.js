/* Last build: 4:9:2023  21.52.33*/
System.register([],(function(e,t){"use strict";return{execute:function(){var e,t="Л",n="П",r="О",a=["A","Б","В","Г","Д","Е","Ж","З","И","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Э","Ю","Я"],c=a.length,i=1e3,o=document.getElementById("pauseButton");o.addEventListener("click",(()=>{wg=document.getElementById("workGround"),wg.classList.toggle("active"),wg.classList.contains("active")?(o.textContent="Cтоп",o.style.background="#ff002b"):(o.textContent="Старт",o.style.background="#49b40a")})),window.onkeypress=function(e){switch(e.keyCode){case 37:case 38:case 33:if(i<300)return;i-=50;break;case 40:case 39:case 34:if(i>9949)return;i+=50}document.getElementById("delayInput").value=i},window.onload=function o(){c==a.length&&(e=function(){for(var e=a.length,c=new Array(e),i=new Array(e),o=new Array(e),s=new Array(e),d=0;d<e;d++)i[s[d]=d]=Math.random();function l(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}for(d=e-1;d>1;d--)for(var u=0;u<d;u++)i[u]>i[u+1]&&(l(i,u,u+1),l(s,u,u+1));for(d=0;d<e;d++)switch(o[d]=a[s[d]]){case r:c[d]=r;continue;case t:c[d]=n;continue;case n:c[d]=t;continue}var y={};for(y[t]=y[n]=y[r]=0,d=0;d<e;d++)if(!c[d]){var m,g=Math.random();if(m=g<.333?t:g<.666?r:n,c[d-1]==m&&(c[d+1]==m||c[d-2]==m))switch(m){case r:m=y[t]>y[n]?n:t;break;case t:m=y[n]>y[r]?r:n;break;case n:m=y[r]>y[t]?t:r}y[m]=y[m]+1,c[d]=m}return[o,c]}(),c=0);var s=document.getElementById("workGround"),d=document.getElementById("screen");s.style.visibility="hidden";var l=d.clientWidth,u=d.clientHeight;u<50&&(u=document.body.clientHeight),s.style.left=Math.ceil(Math.random()*(l-100))+"px",s.style.top=Math.ceil(Math.random()*(u-250))+40+"px",document.getElementById("voiceLetter").innerHTML=e[0][c],document.getElementById("moveLetter").innerHTML=e[1][c],s.style.visibility="visible",c++,setTimeout(o,i)}}}}));
