"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".jcomponent-button{background-color:#e9e9e9;border:1.1px solid #000;border-radius:3px;padding:5px 10px;position:relative;top:0;transition:top;transition-duration:.1s;user-select:none}.jcomponent-button:hover{filter:brightness(.85) saturate(1.4);outline:2.1px solid #111;outline-offset:-2px}.jcomponent-button:active{border-radius:2px;filter:brightness(.8) saturate(1.4);top:1.1px}.jcomponent-button:disabled{outline:none}.jcomponent-button.jred{background-color:#ff8f8f}.jcomponent-button.jyellow{background-color:#ffd472}.jcomponent-button.jgreen{background-color:#90ee90}.jcomponent-button.jblue{background-color:#aed8fc}"),exports.default=function({children:e,color:n,...r}){const c=n&&["jred","jyellow","jgreen","jblue"].includes(n.toLowerCase()),u=!c&&{};return t.default.createElement("button",o({className:c?`jcomponent-button ${n}`:"jcomponent-button",style:u},r),e)};
