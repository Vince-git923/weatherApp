(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>f});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),d=t.n(c),s=new URL(t(738),t.b),l=new URL(t(498),t.b),p=a()(o()),u=d()(s),m=d()(l);p.push([n.id,`\n\n\n\n\n\n\n\n\n\n\n\n\n.icon{\n    width: 80px;\n    height: 80px;\n    background-image: url(${u});\n    background-size: cover;\n    background-position: center;\n}.temp-icon{\n    width: 40px;\n    height: 40px;\n   \n}.hourly-icon,.future-icon{\n    width: 40px;\n    height: 40px;\n    background-size: cover;\n    background-position: center;\n}\n.temp{\n    display: flex;\n    align-items: center;\n   \n    height: 60px;\n}.temp-text{\n    font-size: 35px;\n}.fl{\n    display: flex;\n    gap:10px\n}.center{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}.futures{\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: flex;\n    overflow: auto;\n    gap: 20px;\n    \n    \n    \n}.f-cont{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 10px;\n    gap:10px;\n\n}.future-prob{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n\n\n    \n    body{\n        color: white;\n        background-color: rgb(31, 29, 29);\n        padding-left: 10px;\n        padding-right: 10px;\n       \n    }\n\n.clock-div{\n    display: flex;\n    gap:3px;\n}.ampm{\n    \n   \n    display: flex;\n    align-items: flex-end;\n    font-size: 12px;\n}\n\n\n/* Search Bar */\n\n\n.searchBtn{\n    display: inline-block;\n    background-image: url(${m});\n    background-size: 15px;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 30px;\n    \n    background-color: rgb(101, 96, 96);\n   \n    \n}\n.searchbar{\n    padding-left: 5px;\n    border: 1px solid rgb(253, 0, 0);\n    border: none;\n    outline: none;\n    width: 30vw;\n    max-width: 400px;\n}.search{\n    display: flex;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 10px;\n    transform: scale(1.4); \n\n}.error{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    background-color: orange;\n    top:10%;\n    left:0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: rgb(255, 255, 255);\n    visibility: hidden;\n    font-size: 20px;\n}\n\n\n\n\n/* Search Bar ------------------------------------------------------ */\n\n\n\n/* Nav-Top */\n\n\n\nheader{\n    font-size: 30px;\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    align-items: center;\n    justify-content:center;\n    position: absolute;\n    width: 100%;\n    top:40%;\n    right: 0px;\n   \n    \n}\n.test{\n    font-size: 20px;\n    position: relative;\n    top:0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 4px solid black;\n    padding-bottom: 10px;\n    transition: 1s;\n}\n\n\n/* Nav-Top ----------------------------------------------------------*/\n\n.location{\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    padding:10px 10px 5px 10px;\n}.date{\n    text-align: center;\n    padding-bottom: 20px;\n}\n\n.now{\n    font-weight: 600;\n    text-align: center;\n}\n.glass{\n    \n    position: absolute;\n    top:0;\n    width: 100%;\n    height: 100%;\n    background-image:linear-gradient(75deg,rgba(48, 47, 47, 0.3),rgba(142, 141, 141, 0.3));\n    border-radius: 20px;\n    box-shadow: 0 0px 10px rgba(255, 255, 255, 0.5);\n\n}\n.current-main{\n    background-color: black;\n    position: relative;\n    color: rgb(255, 255, 255);\n    border-radius: 20px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n \n\n}.main-group{\n display: flex;\n align-items:center;\n width: 100%;\n\n justify-content: space-between;\n padding: 10px;\n \n \n\n}.main-icon{\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    /* background-color: black; */\n   \n    \n}.txt{\n    font-size: 18px;\n    font-weight: 600;\n}\n.main-aside{\n    /* background-color: purple; */\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    \n}.tile{\n    background-color: rgb(15, 97, 57);\n    height: 50px;\n}.windspeed{\n    border-left: 1px solid white;\n    border-right: 1px solid white;\n}\n.current-details{\n   \n    overflow: hidden;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n   \n\n}.main-details{\n    display: flex;\n    \n    \n}.tile{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex:1;\n}\n.sun-detail{\n display: flex;\n \n align-items: center;\n justify-content: space-evenly;\n height: 40px;\n background-color: rgb(21, 62, 83);\n}\n\n\n\n.hourly-div{\n    display: flex;\n    overflow: auto;\n    gap:10px;\n}\n\n.perHour{\n  \n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px 20px 10px 20px;\n    justify-content: center;\n    gap:10px;\n    border: 1px solid white;\n    border-radius: 10px;\n\n}\n\n\n.CONTENT {\n    display: none;\n    \n}\n\n\n\n\n\n\n\n@media screen and (min-width:600px) {\n    body{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .wrapper{\n        max-width: 650px;\n    }\n    .hourly-div{\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n   \n    \n  }.logo{\n    font-size: 30px;\n  }.searchbar{\n    max-width: 300px;\n  }.main-aside{\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n@media(hover:hover){\n    .searchBtn:hover{\n        background-color: rgb(142, 16, 90);\n    }\n}`,""]);const f=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},738:(n,e,t)=>{n.exports=t.p+"69d682f39afd5b0bd913.png"},498:(n,e,t)=>{n.exports=t.p+"7a23bf57595488fb6053.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),d=t.n(c),s=t(56),l=t.n(s),p=t(540),u=t.n(p),m=t(113),f=t.n(m),h=t(208),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=d().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),o()(h.A,x),h.A&&h.A.locals&&h.A.locals;let g=document.querySelector(".CONTENT"),y=document.querySelector(".temp-text"),b=document.querySelector(".min-temp"),v=document.querySelector(".max-temp"),C=document.querySelector(".humidity-value"),w=document.querySelector(".windspeed-value"),S=document.querySelector(".rain-value"),k=document.querySelector(".sunrise-val"),E=document.querySelector(".sunset-val"),T=document.querySelector(".futures"),q=document.querySelector(".hourly-div"),j=document.querySelector(".searchbar"),N=document.querySelector(".location"),A=document.querySelector(".description"),L=document.querySelector(".icon");const M=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],$=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let I=document.querySelector(".date"),z=document.querySelector(".error");let D=document.querySelector(".search"),R=document.querySelector(".searchBtn"),H=document.querySelector("header");function P(n){let e=5*(n-32)/9;return e=Math.round(100*e)/100,e}function B(n){let e=n.lastElementChild;for(;e;)n.removeChild(e),e=n.lastElementChild}R.addEventListener("click",(()=>{let n=new Date,e=`${M[n.getDay()]}, ${$[n.getMonth()]} ${n.getDate()}`;I.textContent=e,B(q),B(T),H.classList.add("test"),D.style.transform="scale(1)",async function(n){let e=(new Date).getHours();const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=8QKWVAKQRP4RHTFMCUX6BWHND\n`,{mode:"cors"});t.ok?(z.style.visibility="hidden",g.style.display="block"):(g.style.display="none",z.textContent="Invalid Location Parameter!",z.style.visibility="visible");const r=await t.json();N.textContent=r.resolvedAddress,A.textContent=r.currentConditions.conditions;let o=r.currentConditions.temp;var i;y.textContent=P(o)+"°C",v.textContent=P(r.days[0].tempmax)+"°C",b.textContent=P(r.days[0].tempmin)+"°C",C.textContent=r.currentConditions.humidity+"%",S.textContent=r.days[0].precipprob+"%",w.textContent=r.currentConditions.windspeed+" m/s",k.textContent=r.currentConditions.sunrise,E.textContent=r.currentConditions.sunset,i=r.currentConditions.icon,L.style.backgroundImage=`url('../assets/${i}.png')`;for(let n=e+1;n<=23;n++){let e=document.createElement("div");e.classList.add("perHour");let t=document.createElement("div");t.classList.add("hourly-icon");let o=document.createElement("div"),i=document.createElement("div"),a=r.days[0].hours[n].datetime.substr(-14,2);Number(a)>12?(a=Number(a)-12,a=a.toString()+":00 pm"):"00"==a?a="12:00 am":"12"==a?a="12:00 pm":a+=":00 am",i.textContent=a;let c=r.days[0].hours[n].icon;o.textContent=P(r.days[0].hours[n].temp)+"°C",t.style.backgroundImage=`url('../assets/${c}.png')`,e.appendChild(i),e.appendChild(t),e.appendChild(o),q.appendChild(e)}for(let n=0;n<=e;n++){let e=document.createElement("div");e.classList.add("perHour");let t=document.createElement("div");t.classList.add("hourly-icon");let o=document.createElement("div"),i=document.createElement("div"),a=r.days[1].hours[n].datetime.substr(-14,2);Number(a)>12?(a=Number(a)-12,a=a.toString()+":00 pm"):"00"==a?a="12:00 am":"12"==a?a="12:00 pm":a+=":00 am",i.textContent=a;let c=r.days[1].hours[n].icon;o.textContent=P(r.days[1].hours[n].temp)+"°C",t.style.backgroundImage=`url('../assets/${c}.png')`,e.appendChild(i),e.appendChild(t),e.appendChild(o),q.appendChild(e)}for(let n=1;n<=7;n++){let e=document.createElement("div"),t=document.createElement("div");t.classList.add("future-icon");let o=document.createElement("div"),i=document.createElement("div");i.classList.add("future-prob");let a=document.createElement("div"),c=document.createElement("div"),d=r.days[n].datetime.substr(5,5),s=r.days[n].datetime,l=r.days[n].icon,p=P(r.days[n].temp)+"°C",u=r.days[n].precipprob+"%",m=new Date(s);e.textContent=d+` (${M[m.getDay()]})`,t.style.backgroundImage=`url('../assets/${l}.png')`,o.textContent=p,a.textContent="Chance of Rain",c.textContent=u,i.appendChild(a),i.appendChild(c);let f=document.createElement("div");f.classList.add("f-cont"),f.appendChild(e),f.appendChild(t),f.appendChild(o),f.appendChild(i),T.appendChild(f)}}(j.value)}))})();