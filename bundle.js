(()=>{"use strict";var e={711:(e,n,t)=>{e.exports=t.p+"ee97e8e7380876ecf9f4.svg"},426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  background-color: #fff;\n  color: gray;\n}\n\n.container {\n  height: 100%;\n  position: fixed;\n  overflow-y: scroll;\n  top: 20px;\n  left: 0;\n  right: 0;\n}\n\n.search-bar {\n  width: 768px;\n  display: flex;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n.search-bar #movie-input {\n  width: 70%;\n  line-height: 1.25rem;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid gray;\n}\n\n::placeholder {\n  font-style: italic;\n}\n\n.search-bar #search-button {\n  margin-left: 5px;\n  width: 30%;\n  height: 32px;\n  outline: none;\n  border: none;\n  background-color: gold;\n  border-radius: 5px;\n  color: #000;\n}\n.results-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: 1024px;\n}\n\n.card {\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n}\n\n.message-text {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-style: italic;\n}\n\n.movie-img img {\n  width: 300px;\n}\n\n.movie-details {\n  padding: 5px 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.title {\n  font-weight: 600;\n  width: 50%;\n}\n\n.showDetails {\n  font-size: 12px;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.details-container {\n  font-size: 14px;\n  width: 100%;\n  transition: 0.2s ease-out;\n}\n.view-movie-details {\n  padding: 0px 15px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0px 150px 72px -6px rgb(0 0 0 / 25%);\n}\n.view-movie-details > div {\n  padding: 5px;\n  text-align: justify;\n}\n\n@media screen and (max-width: 768px) {\n  .container {\n    font-size: 14px;\n    padding: 14px 14px;\n  }\n  .results-container {\n    width: 100%;\n  }\n  .card {\n    margin: 0 auto;\n  }\n  .search-bar {\n    width: 100%;\n  }\n  .movie-img {\n    width: 100%;\n  }\n  .movie-img img {\n    width: 300px;\n  }\n}\n",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],d=i.base?c[0]+i.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(m)):n.push({identifier:u,updater:r(m,i),references:1}),a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var c=i(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e="https://www.omdbapi.com/?apikey=ff79cce7",n=`${e}&s=`,i=`${e}&plot=full&t=`;var r=t(711);function o(e,n={}){const{movies:t}=n,o=document.getElementById(`${e}`);if(t){if(!t||"error"!==t&&0!==t.length)return n.getDetails=async function(e){return await async function(e){let n;try{let t=await fetch(`${i}${e}`);return n=await t.json(),n}catch(e){return"error"}}(e)},function(e,n={}){const{movies:t,getDetails:i}=n;let o=document.getElementById(e);o.innerHTML="",t.forEach((e=>{e.Poster=e.Poster&&"N/A"!==e.Poster?e.Poster:r,o.appendChild(function(e){const n=document.createElement("div");return n.setAttribute("class","card"),n.innerHTML=`\n                <div class="movie-img">\n                <img src="${e.Poster}"/>\n                </div>\n                <div class="movie-details" id="movie-details-${e.imdbID}">\n                    <div class="title"> \n                    ${e.Title}\n                    \n                    </div>\n                       \n                </div>\n                 <div class="details-container" id="details-container-${e.imdbID}">\n                    </div>`,n}(e));const n=document.getElementById(`movie-details-${e.imdbID}`);n.appendChild(function(e){const n=document.createElement("div");return n.innerText="View Details",n.setAttribute("id",`show-details-${e.imdbID}`),n.setAttribute("class","showDetails"),n.addEventListener("click",(async()=>{const t=document.getElementById(`details-container-${e.imdbID}`),r=document.getElementById(`hide-details-${e.imdbID}`),o=await i(e.Title);t.style.display="block",function(e,n={}){const{movieDetails:t}=n;document.getElementById(`${e}`).innerHTML=`<div class="view-movie-details">\n                            <div><strong>Year:</strong> ${t.Year}</div>\n                            <div> <strong> Rated:</strong> ${t.Rated} </div>\n                            <div> <strong> Rating:</strong>${function(e){return e.Ratings.map((e=>(e.Source="Internet Movie Database"===e.Source?"IMDB":e.Source,` ${e.Source} ${e.Value} `)))}(t)}</div>\n                            <div> <strong>Actors:</strong> ${t.Actors}</div>\n\n                            <div> <strong>Plot:</strong> ${t.Plot}</div>\n                        </div>`}(t.id,{movieDetails:o}),r.style.display="block",n.style.display="none"})),n}(e)),n.appendChild(function(e){const n=document.createElement("div");return n.innerText="Hide Details",n.setAttribute("id",`hide-details-${e.imdbID}`),n.setAttribute("class","showDetails"),n.style.display="none",n.addEventListener("click",(()=>{const t=document.getElementById(`details-container-${e.imdbID}`),i=document.getElementById(`show-details-${e.imdbID}`);t.style.display="none",i.style.display="block",n.style.display="none"})),n}(e))}))}(e,n);o.innerHTML='<div class="message-text">\n                            Sorry we couldn\'t find any such movie.\n                        </div>'}else o.innerHTML='<div class="message-text">\n                            Search your favorite movies by movie name e.g Rambo\n                        </div>'}var a=t(379),s=t.n(a),c=t(795),d=t.n(c),l=t(569),u=t.n(l),p=t(565),m=t.n(p),f=t(216),v=t.n(f),h=t(589),g=t.n(h),y=t(426),b={};b.styleTagTransform=g(),b.setAttributes=m(),b.insert=u().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=v(),s()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,document.getElementById("app").innerHTML='<div class="container">\n                        <div class="search-container" id="search-container"></div>\n                        <div class="results-container" id="results-container"></div>\n                    </div>',function(e,n={}){document.getElementById(`${e}`).innerHTML='<form class="search-bar" id="search-bar">\n                                <input type="text" id="movie-input" placeholder="movie name e.g Rambo "/>\n                                <button id="search-button">Search</button>\n                            </form>',document.getElementById("search-bar").addEventListener("submit",(e=>{e.preventDefault();let t=document.getElementById("movie-input").value;n.getMoviesResult(t)}))}("search-container",{getMoviesResult:async function(e){o("results-container",{movies:await async function(e){let t=[];try{let i=await fetch(`${n}${e}`),r=await i.json();return r.Error?"error":(t=r.Search,t)}catch(e){return"error"}}(e)})}}),o("results-container",{})})()})();