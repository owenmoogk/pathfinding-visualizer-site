(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(3),c=n.n(i),s=n(0);function d(e){return Object(s.jsx)("div",{id:"row"+e.row+"col"+e.col,row:e.row,col:e.col,style:{border:"1px solid black",height:(e.boxSize-2).toString()+"px",width:(e.boxSize-2).toString()+"px"}})}n(9);function a(){var e=20;window.addEventListener("contextmenu",(function(e){return e.preventDefault()})),window.addEventListener("mousemove",(function(t){var n=Math.floor(t.clientX/e),o=Math.floor(t.clientY/e),r=document.getElementById("row"+o+"col"+n);1==window.event.buttons?(r.classList.add("barrier"),r):2==window.event.buttons?(r.classList.remove("barrier"),r):null}));e=e;for(var t=window.innerWidth/e,n=window.innerHeight/e,o=[],r=0;r<n;r++){o.push([]);for(var i=0;i<t;i++)o[r].push(Object(s.jsx)(d,{row:r,col:i,boxSize:e}))}return Object(s.jsx)("div",{className:"App",style:{userSelect:"none"},children:Object(s.jsx)("div",{id:"grid",children:o.map((function(e,t){return Object(s.jsx)("div",{className:"row",id:t,children:e.map((function(e){return e}))})}))})})}c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.0c0565a0.chunk.js.map