import t,{useRef as e,useEffect as r}from"react";function a({src:a,selected:o,size:l=141,...n}){const d=e(null);return r((()=>{const t=d.current,e=t?.getContext("2d");if(!e)return;const r=new Image;r.src=a;var o=r.height;const n=setInterval((()=>{var t=r.width,a=r.height;e.clearRect(0,0,2*l,2*l),o<=0?o=a:o-=20;e.fillStyle="#303030",e.strokeStyle="#303030",e.rect(3,5,5,.85*l),e.fill(),e.strokeStyle="#dbaf42",e.fillStyle="#dbaf42",e.beginPath(),e.arc(5.5,5,4,0,2*Math.PI),e.stroke(),e.fill();for(var n=0;n<t;n++){var d=4*Math.sin((n+o)/18)+10;e.drawImage(r,n,0,1,a,n+3+5,d,1,a)}}),80);return()=>clearInterval(n)}),[a]),t.createElement("canvas",{style:{padding:"30px 33px",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",paddingBottom:"0",borderTop:o?"1px solid black":"1px solid transparent",borderRight:o?"1px solid black":"1px solid transparent",borderLeft:o?"1px solid black":"1px solid transparent",borderBottom:"none",backgroundColor:o?"white":void 0,zIndex:1},width:l+10+3,height:.85*l,ref:d,...n})}export{a as default};
