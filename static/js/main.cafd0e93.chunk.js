(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(3),c=n.n(r),d=n(0);function s(e){return Object(d.jsx)("div",{id:"row"+e.row+"col"+e.col,style:{border:"1px solid black",height:(e.boxSize-2).toString()+"px",width:(e.boxSize-2).toString()+"px"}})}n(9);function u(){var e=20;window.addEventListener("contextmenu",(function(e){return e.preventDefault()})),window.addEventListener("mousemove",(function(t){if(0!=window.event.buttons){var n=Math.floor(t.clientX/e),o=Math.floor(t.clientY/e),i=document.getElementById("row"+o+"col"+n);1==window.event.buttons&&(i.style.backgroundColor="black"),2==window.event.buttons&&(i.style.backgroundColor="white")}}));e=e;for(var t=window.innerWidth/e,n=window.innerHeight/e,o=[],i=0;i<n;i++){o.push([]);for(var r=0;r<t;r++)o[i].push(Object(d.jsx)(s,{row:i,col:r,boxSize:e}))}return Object(d.jsx)("div",{className:"App",style:{userSelect:"none"},children:Object(d.jsx)("div",{id:"grid",children:o.map((function(e){return Object(d.jsx)("div",{className:"row",id:e,children:e.map((function(e){return e}))})}))})})}c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.cafd0e93.chunk.js.map