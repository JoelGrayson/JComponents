"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}function r({children:e,color:t,...r}){const l=["jred","jyellow","jgreen","jblue"].includes(t.toLowerCase());return n.default.createElement("button",o({className:l?`jcomponent-button ${t}`:"jcomponent-button",style:{backgroundColor:l?"":t}},r),e)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".jcomponent-button{background-color:#e9e9e9;border:1.1px solid #000;border-radius:3px;padding:5px 10px;position:relative;top:0;transition:top;transition-duration:.1s;user-select:none}.jcomponent-button:hover{filter:brightness(.85) saturate(1.4);outline:2.1px solid #111;outline-offset:-2px}.jcomponent-button:active{border-radius:2px;filter:brightness(.8) saturate(1.4);top:1.1px}.jcomponent-button:disabled{outline:none}.jcomponent-button.jred{background-color:#ff8f8f}.jcomponent-button.jyellow{background-color:#ffd472}.jcomponent-button.jgreen{background-color:#90ee90}.jcomponent-button.jblue{background-color:#aed8fc}"),exports.Nav=function({gap:e=4,children:t,...o}){return n.default.createElement("nav",null,n.default.createElement("ul",{style:{display:"flex",padding:0,gap:e}},t))},exports.NavItem=function({children:t,href:o="#",Link:l=null}){const[a,u]=e.useState(!1);return e.useEffect((()=>{"undefined"!=typeof window&&u(o===window.location.pathname)}),[]),null==l?n.default.createElement("li",{style:{padding:0,listStyleType:"none"}},n.default.createElement("a",{href:o},n.default.createElement(r,{color:a?"jyellow":""},t))):n.default.createElement("li",{style:{padding:0,listStyleType:"none"}},n.default.createElement(l,{href:o},n.default.createElement("a",null,n.default.createElement(r,{color:a?"jyellow":""},t))))};
