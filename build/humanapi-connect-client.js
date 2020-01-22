!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.HumanConnect=t():e.HumanConnect=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(0,function(e){return e&&e.__esModule?e:{default:e}}(n(1)).default)();var r=830,i=590,a="2.0.0",s={};function c(){Array.from(document.querySelectorAll("[data-hapi-token]").values()).forEach(u)}function u(e){var t=e.dataset.hapiToken,n=e.dataset.hapiMode||"auth",o=e.dataset.hapiBaseurl||"https://hapi-connect.humanapi.co",r={token:t,mode:n,version:a,baseURL:o};e.addEventListener("click",d.bind(this,r))}function l(e){var t=e.logger,n=void 0===t?function(){}:t;if(document.getElementById("human-api"))return null;if(!e||"object"!==(void 0===e?"undefined":o(e))||Array.isArray(e))throw new Error("Argument must be an object");e.__baseURL=e.baseURL||e.__baseURL||"https://hapi-connect.humanapi.co";var s=document.createElement("iframe"),u=document.createElement("div");if(n("Load with options: "+JSON.stringify(e)),!e.token)throw new Error("The token attribute is required");function l(){n("Responding to window resize");var e=s;e.style.width="100%",e.style.height="100%",window.innerWidth>=r&&window.innerHeight>=i?(e.style.maxHeight=i+"px",e.style.maxWidth=r+"px",e.style.left="calc(50% - "+r/2+"px)",e.style.top="calc(50% - "+i/2+"px)",e.style.borderRadius="8px"):(e.style.maxWidth="100%",e.style.maxHeight="100%",e.style.top="0",e.style.left="0",e.style.borderRadius="none")}function d(t){var o=t.data;n("Responding to postMessage",o);var r=function(t){return delete o.type,e[t]instanceof Function?e[t](o):null};switch(o.type.replace("hapi-connect-","")){case"connect-source":e.version===a?f("connect",o):r("onConnectSource");break;case"disconnect-source":e.version===a?f("disconnect",o):r("onDisconnectSource");break;case"close":e.version===a?f("close",o):r("onClose"),n("Cleaning up elements"),document.getElementById("human-api").remove(),document.getElementById("human-api-connect-modal-overlay").remove(),n("Unmounting listeners"),window.removeEventListener("resize",l),window.removeEventListener("message",d,!1),window.removeEventListener("click",c)}}return e.version!==a&&console.warn("Deprecation notice: Support for passing the session token as a parameter for the HumanConnect.open() method will be removed in the future. Please use the data attribute 'data-hapi-token' instead. See https://reference.humanapi.co/docs/web-guide#section-launch-connect-in-the-browser for details"),{mount:function(){return function(){n("Building iframe");var t=s;if(t.src=e.__baseURL+"/?token="+e.token,e.inviteSessionId&&(t.src+="&pisId="+e.inviteSessionId),e.mode&&(t.src+="&mode="+e.mode),"select"===e.mode){var o=e.preseededSources||[];t.src+="&clientId="+e.clientId+"&preseededSources="+btoa(JSON.stringify(o))}e.config&&(t.src+="&config="+e.config),t.id="human-api",t.style.position="fixed",t.style.zIndex="9999",t.style.margin="0",t.style.padding="0",t.style.border="none",t.style.visibility="visible",t.style.background="#fff url("+e.__baseURL+"/images/data-source-type-icons/launch-connect-text.svg) no-repeat center center",l()}(),function(){n("Building modal overlay");var t=u,o=e.overlayOpacity||"0.6";t.id="human-api-connect-modal-overlay",t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.zIndex=9990,t.style.backgroundColor="#333",t.style.opacity=o}(),n("Mounting listeners"),window.addEventListener("message",d,!1),window.addEventListener("resize",l),{iframe:s,modal:u}}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=l(e);if(!t)return null;var n=t.mount(),o=n.iframe,r=n.modal,i=document.getElementsByTagName("body")[0]||document.documentElement;i.appendChild(o),i.appendChild(r)}catch(e){throw console.error({err:e},e.stack),e}}function f(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];"object"===o(s[e])&&s[e].forEach(function(e){return e.apply(t,r)})}window.addEventListener("load",c),e.exports={open:d,on:function(e,t){"object"!==o(s[e])&&(s[e]=[]),s[e].push(t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=this.length-1;e>=0;e--)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])}}}])});