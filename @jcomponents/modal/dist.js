"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);function n(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}n(".jcomponents__modal-background{height:100%;left:0;position:fixed;top:0;width:100%;z-index:1}.jcomponents__modal-container{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;transition:none;width:100%}.jcomponents__modal{background-color:#fff;border-radius:1.4rem;height:fit-content;padding:30px 30px 40px;position:relative;width:80%;z-index:2}.jcomponents__modal:hover{cursor:grab}.jcomponents__modal:active{cursor:grabbing}.jcomponents__modal-content{cursor:default;overflow-wrap:anywhere}");n('.icon-close{align-items:center;background-color:red;border:1px solid #000;border-radius:100%;cursor:pointer;display:flex;height:20px;justify-content:center;position:absolute;right:1rem;top:1rem;width:20px;z-index:1}.icon-close:hover{background-color:#b60c0c}.icon-close:after{right:1.5px;transform:rotate(-45deg)}.icon-close:after,.icon-close:before{background-color:#000;border-radius:3px;content:"";height:15px;position:relative;width:3px}.icon-close:before{right:-1.5px;transform:rotate(45deg)}'),exports.default=function({open:t,setOpen:n,children:r,opacity:a=.5,width:c,unclosable:d=!1,maxWidth:i,...s}){const[l,u]=e.useState({x:null,y:null}),[m,p]=e.useState({x:null,y:null}),[f,x]=e.useState({x:0,y:0}),[h,g]=e.useState({x:0,y:0});function v(e){u({x:e.pageX,y:e.pageY}),g(f),document.addEventListener("mousemove",y),document.addEventListener("mouseup",b)}const y=e=>p({x:e.pageX,y:e.pageY});function b(e){document.removeEventListener("mouseup",b),document.removeEventListener("mousemove",y),document.removeEventListener("mousedown",v)}e.useEffect((()=>{x({x:h.x+m.x-l.x,y:h.y+m.y-l.y})}),[m]);const _=()=>!d&&n(!1),E=e=>"Escape"===e.key&&_();return e.useEffect((()=>(document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E))),[]),o.default.createElement(o.default.Fragment,null,t&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"jcomponents__modal-background",style:{backgroundColor:`rgba(0.1, 0.1, 0.1, ${a})`},onClick:e=>_()})," ",o.default.createElement("div",{className:"jcomponents__modal-container"},o.default.createElement("div",{className:"jcomponents__modal",style:{maxWidth:i||c||"none",width:c||"fit-content",top:`${f.y}px`,left:`${f.x}px`},onMouseDown:e=>document.addEventListener("mousedown",v)},!d&&o.default.createElement("span",{className:"icon-close",onClick:e=>_()}),o.default.createElement("div",{className:"jcomponents__modal-content",onClick:e=>e.stopPropagation()},r)))))};
