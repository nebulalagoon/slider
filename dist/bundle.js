!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);function r(n,t){$(n).animate({right:t+"px"})}$(document).ready(function(){for(var n=1;n<=5.5;n++)$("#row1").append('<img src="Assets/slider-images/slider-image-'.concat(n,'.jpg"/>'));for(var t=Math.floor(6.5);t<=9;t++)$("#row2").append('<img src="Assets/slider-images/slider-image-'.concat(t,'.jpg"/>'));var e=$("#row1"),i=$("#row2"),o=$(window).width();setTimeout(function(){for(var n=o-($("#description").offset().left-20),t=e.find("img").length-1;t>=0;t--)r(e.find("img")[t],n),n+=e.find("img")[t].clientWidth+10;for(var a=o-($("#description").offset().left-180),f=i.find("img").length-1;f>=0;f--)r(i.find("img")[f],a),a+=i.find("img")[f].clientWidth+10},100),$("#arrowLeft").on("click",function(){for(var n=e.find("img").first().innerWidth(),t=i.find("img").first().innerWidth(),a=e.find("img").toArray(),f=i.find("img").toArray(),s=n+(o-($("#description").offset().left-30)),d=e.find("img").length-1;d>0;d--)r(e.find("img")[d],s),s+=e.find("img")[d].clientWidth+10;for(var c=t+(o-($("#description").offset().left-190)),l=i.find("img").length-1;l>0;l--)r(i.find("img")[l],c),c+=i.find("img")[l].clientWidth+10;e.append(a[0]),e.find("img").last().css("right",o-$("#description").offset().left-n-20+"px"),r(e.find("img").last(),o-($("#description").offset().left-20)),i.append(f[0]),i.find("img").last().css("right",o-$("#description").offset().left-t-20+"px"),r(i.find("img").last(),o-($("#description").offset().left-180))}),jQuery("#arrowRight").on("click",function(){for(var n=e.find("img").last().innerWidth(),t=i.find("img").last().innerWidth(),a=e.find("img").toArray(),f=i.find("img").toArray(),s=o-($("#description").offset().left-30),d=0;d<e.find("img").length;d++)s+=e.find("img")[d].clientWidth+10;for(var c=o-($("#description").offset().left-190),l=0;l<i.find("img").length;l++)c+=i.find("img")[l].clientWidth+10;e.prepend(a[a.length-1]),r(e.find("img").first(),o-$("#description").offset().left-n-20),e.find("img").first().fadeOut(10),e.find("img").first().css("right",s-(n+10)+"px"),setTimeout(function(){e.find("img").first().fadeIn(10)},1),i.prepend(f[f.length-1]),r(i.find("img").first(),o-$("#description").offset().left-t-20),i.find("img").first().fadeOut(10),i.find("img").first().css("right",c-(t+10)+"px"),setTimeout(function(){i.find("img").first().fadeIn(10)},1);for(var p=0;p<e.find("img").length;p++)s-=e.find("img")[p].clientWidth+10,r(e.find("img")[p],s);for(var u=0;u<i.find("img").length;u++)c-=i.find("img")[u].clientWidth+10,r(i.find("img")[u],c)})})},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(9)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){t=n.exports=e(3)(!1);var r=e(4),i=r(e(5)),o=r(e(6)),a=r(e(7)),f=r(e(8));t.push([n.i,'html {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0px; }\n\n#outerContainer {\n  display: grid;\n  grid-template-rows: 100px 410px 100px;\n  grid-row-gap: 60px;\n  grid-template-columns: 1fr 940px 1fr;\n  grid-template-areas: ". header ." "slider slider ." ". footer ."; }\n\nheader {\n  grid-area: header;\n  width: 940px;\n  margin: 0px auto;\n  display: grid;\n  grid-template-columns: 300px 620px;\n  grid-column-gap: 20px; }\n\nfooter {\n  grid-area: footer;\n  width: 940px;\n  margin: 0px auto; }\n\n#slider {\n  grid-area: slider;\n  align-self: middle;\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  grid-template-rows: calc(2*$image-height);\n  grid-column-gap: 20px; }\n\n#container {\n  display: grid;\n  grid-template-rows: 200px 200px;\n  grid-row-gap: 10px; }\n  #container .imageRow {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    z-index: -10;\n    overflow-x: hidden; }\n    #container .imageRow > img {\n      flex: 0 1 auto;\n      height: 200px;\n      margin-left: 10px;\n      max-width: 100%;\n      position: absolute; }\n  #container #sliderRow2 {\n    display: grid;\n    grid-template-columns: 1fr 80px;\n    grid-column-gap: 100px; }\n  #container #arrows {\n    display: inline-block; }\n\nhtml {\n  font-family: "Fira Sans", "Arial", sans-serif; }\n\nheader div, footer div {\n  background-color: #DDDDDD;\n  color: white;\n  height: 100px; }\n\nheader div {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n  header div p {\n    line-height: 100px;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0px 80px; }\n\nfooter div {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  height: 100px; }\n  footer div p {\n    line-height: 100px;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0px 80px; }\n\n#description {\n  background-color: white; }\n  #description h1 {\n    margin-top: 0px;\n    color: #134880;\n    font-size: 1.8rem;\n    font-weight: bold;\n    line-height: 40px; }\n  #description p {\n    font-size: 1rem;\n    color: #484A4C;\n    line-height: 30px; }\n\n#container img {\n  border-radius: 5px; }\n\n#arrows div {\n  background-color: white;\n  border-style: solid;\n  border-color: #DDDDDD;\n  border-width: 1px;\n  border-radius: 5px; }\n\n#arrowLeft {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-left: auto;\n  background-image: url('+i+");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 60px;\n  width: 60px; }\n\n#arrowRight {\n  margin-top: 10px;\n  margin-right: 0px;\n  margin-left: auto;\n  background-image: url("+o+");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 60px;\n  width: 60px; }\n\n#arrowLeft:hover, #arrowLeft:active {\n  background-image: url("+a+");\n  border-color: #134880; }\n\n#arrowRight:hover, #arrowRight:active {\n  background-image: url("+f+");\n  border-color: #134880; }\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(a=r,f=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(f),"/*# ".concat(s," */")),o=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(o).concat([i]).join("\n")}var a,f,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<n.length;a++){var f=n[a];null!=f[0]&&r[f[0]]||(e&&!f[2]?f[2]=e:e&&(f[2]="(".concat(f[2],") and (").concat(e,")")),t.push(f))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){n.exports=e.p+"b6be5feb1cb9f34a749b0b1f89ceb2cc.png"},function(n,t,e){n.exports=e.p+"c471b2b4996be9badcf0ad59abceeadb.png"},function(n,t,e){n.exports=e.p+"02670f8f9a32830dcd946459ade90d86.png"},function(n,t,e){n.exports=e.p+"8f2806300c398f15237371be9e30d7b3.png"},function(n,t,e){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),f=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),s=null,d=0,c=[],l=e(10);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{var f=[];for(a=0;a<r.parts.length;a++)f.push(v(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:f}}}}function u(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=t.base?o[0]+t.base:o[0],f={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(f):e.push(r[a]={id:a,parts:[f]})}return e}function g(n,t){var e=f(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=f(n.insertAt.before,e);e.insertBefore(t,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),g(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=d++;e=s||(s=h(t)),r=w.bind(null,e,a,!1),i=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),g(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),f=n.href;n.href=URL.createObjectURL(a),f&&URL.revokeObjectURL(f)}.bind(null,e,t),i=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=u(n,t);return p(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var a=e[i];(f=o[a.id]).refs--,r.push(f)}n&&p(u(n,t),t);for(i=0;i<r.length;i++){var f;if(0===(f=r[i]).refs){for(var s=0;s<f.parts.length;s++)f.parts[s]();delete o[f.id]}}}};var x,y=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function w(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);