import e from"react";function t({open:t,setOpen:o,children:n,...i}){return e.createElement(e.Fragment,null,t&&e.createElement(e.Fragment,null,e.createElement("div",{id:"modal-background",onClick:e=>o(!1),style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0.1, 0.1, 0.1, 0.5)",zIndex:1}})," ",e.createElement("div",{id:"modal-container",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},e.createElement("div",{id:"settings-modal",style:{position:"fixed",width:"80%",maxWidth:i.maxWidth||"500px",height:"fit-content",backgroundColor:"white",zIndex:2,padding:"30px",paddingBottom:"40px",borderRadius:"1.4rem"}},e.createElement("span",{className:"icon-close",onClick:e=>o(!1)}),e.createElement("div",{id:"settings-modal-content"},n)))))}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.icon-close{align-items:center;background-color:red;border:1px solid #000;border-radius:100%;cursor:pointer;display:flex;height:20px;justify-content:center;position:absolute;right:1rem;top:1rem;width:20px;z-index:1}.icon-close:hover{background-color:#b60c0c}.icon-close:after{right:1.5px;transform:rotate(-45deg)}.icon-close:after,.icon-close:before{background-color:#000;border-radius:3px;content:"";height:15px;position:relative;width:3px}.icon-close:before{right:-1.5px;transform:rotate(45deg)}');export{t as default};
