"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n,o=t(e),r={};Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(o.default);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".jcomponent-button{background-color:#e9e9e9;border:1.1px solid #000;border-radius:3px;padding:5px 10px;position:relative;top:0;transition:top;transition-duration:.1s;user-select:none}.jcomponent-button:hover{filter:brightness(.85) saturate(1.4);outline:2.1px solid #111;outline-offset:-2px}.jcomponent-button:active{border-radius:2px;filter:brightness(.8) saturate(1.4);top:1.1px}.jcomponent-button:disabled{outline:none}.jcomponent-button.jred{background-color:#ff8f8f}.jcomponent-button.jyellow{background-color:#ffd472}.jcomponent-button.jgreen{background-color:#90ee90}.jcomponent-button.jblue{background-color:#aed8fc}"),n=r.default=function({children:e,color:t,...n}){const o=["jred","jyellow","jgreen","jblue"].includes(t.toLowerCase());return l.default.createElement("button",a({className:o?`jcomponent-button ${t}`:"jcomponent-button",style:{backgroundColor:o?"":t}},n),e)};class d extends o.default.Component{render(){const e=this.props.gap??4;return o.default.createElement("nav",null,o.default.createElement("ul",{style:{display:"flex",padding:0,gap:e}},this.props.children))}}d.Item=function(t){const[r,l]=e.useState(!1),a=t.href??"#",d=t.Link??null;return e.useEffect((()=>{"undefined"!=typeof window&&l(a===window.location.pathname)}),[]),d?o.default.createElement("li",{style:{padding:0,listStyleType:"none"}},o.default.createElement(d,{href:a},o.default.createElement("a",{className:"unstyled"},o.default.createElement(n,{color:r?"jyellow":""},t.children)))):o.default.createElement("li",{style:{padding:0,listStyleType:"none"}},o.default.createElement("a",{href:a},o.default.createElement(n,{color:r?"jyellow":""},t.children)))},exports.default=d;
