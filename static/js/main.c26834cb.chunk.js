(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var s=n(2),r=n.n(s),i=n(5),o=n.n(i),a=n(1),c=n(0);function l(t){return Object(c.jsx)("div",{id:"row"+t.row+"col"+t.col,row:t.row,col:t.col,style:{border:"1px solid black",height:(t.boxSize-2).toString()+"px",width:(t.boxSize-2).toString()+"px"}})}n(12);function d(){this.elements=[],d.prototype.add=function(t){this.elements.push(t)},d.prototype.dequeue=function(){return this.elements.shift()},d.prototype.isEmpty=function(){return 0===this.elements.length}}var u=n(6),h=n(4),m=function t(e,n,s){Object(h.a)(this,t),this.element=s,this.priority=e,this.priority2=n},f=function(){function t(){Object(h.a)(this,t),this.items=[]}return Object(u.a)(t,[{key:"put",value:function(t,e,n){for(var s=new m(t,e,n),r=!1,i=0;i<this.items.length;i++)if(this.items[i].priority>s.priority||this.items[i].priority===s.priority&&this.items[i].priority2>s.priority2){this.items.splice(i,0,s),r=!0;break}r||this.items.push(s)}},{key:"get",value:function(){return this.isEmpty()?"Underflow":this.items.shift().element}},{key:"front",value:function(){return this.isEmpty()?"No elements in Queue":this.items[0]}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"look",value:function(){return this.items}}]),t}();function p(){var t,e=void 0;function s(t){var e=t.getAttribute("row"),n=t.getAttribute("col");return[e=parseInt(e),n=parseInt(n)]}function r(t){var e=Object(a.a)(t,2),n=e[0],s=e[1];return document.getElementById("row"+n+"col"+s)}function i(t){var e=s(t),n=Object(a.a)(e,2),i=n[0],o=n[1],c=[];return c.push(r([i+1,o])),c.push(r([i-1,o])),c.push(r([i,o+1])),c.push(r([i,o-1])),c=c.filter((function(t){return t}))}function o(){clearInterval(e),t=!1,document.getElementById("goButton").style.color=""}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Math.floor((t.clientX-(window.innerWidth-document.getElementById("grid").offsetWidth)/2)/document.getElementsByClassName("row")[0].childNodes[0].offsetWidth),s=Math.floor((t.clientY-60)/h);if(0!==window.event.buttons||e){var r=document.getElementById("row"+s+"col"+n);if(!r)return;if(0===document.getElementsByClassName("start").length&&(1===window.event.buttons||e))return void document.getElementById("row"+s+"col"+n).classList.add("start");if(0===document.getElementsByClassName("end").length&&(1===window.event.buttons||e)){var i=document.getElementById("row"+s+"col"+n);if(i.classList.contains("start"))return;return void i.classList.add("end")}if(m)o=m[0],a=m[1];else var o=s,a=n;do{if(s>o?o+=1:s<o&&(o-=1),n>a?a+=1:n<a&&(a-=1),1===window.event.buttons){var c=document.getElementById("row"+o+"col"+a);c.classList.contains("start")||c.classList.contains("end")||c.classList.add("barrier")}else 2===window.event.buttons&&(document.getElementById("row"+o+"col"+a).className="")}while(o!==s||a!==n);m=[s,n]}else m=null}window.addEventListener("contextmenu",(function(t){return t.preventDefault()})),window.addEventListener("resize",(function(t){return document.getElementById("resizeAlert").style.display="block"}));var h=20,m=null,p=Math.floor((window.innerHeight-60)/h),v=Math.floor(window.innerWidth/h);var y={depthFirstSearch:function(t,r){var a=new(n(13));a.push(t);var c={},l=new Set;e=setInterval((function(){for(var e=a.pop();l.has(e);)if(e=a.pop(),a.isEmpty())return void o();l.add(e),e.classList.add("closed");for(var n=i(e),d=0;d<n.length;d++){var u=n[d];u.classList.contains("closed")||u.classList.contains("barrier")||(c[s(u)]=e,a.push(u))}if(a.isEmpty()&&o(),e!==r);else{for(;e!==t;)c[s(e)].classList.add("path"),c[s(e)].classList.remove("closed"),e=c[s(e)];o()}}),10)},breadthFirstSearch:function(t,n){var r=new d;r.add(t);var a=new Set,c={};e=setInterval((function(){if(r.isEmpty())o();else{for(var e=r.dequeue(),l=i(e),d=0;d<l.length;d++){var u=l[d];if(!(u.classList.contains("closed")||u.classList.contains("barrier")||a.has(u))&&(r.add(u),a.add(u),u.classList.add("open"),c[s(u)]=e,u===n)){for(;u!==t;)c[s(u)].classList.add("path"),c[s(u)].classList.remove("closed"),c[s(u)].classList.remove("open"),u=c[s(u)];return void o()}}e.classList.remove("open"),e.classList.add("closed")}}),10)},aStar:function(t,n){function r(t,e){var n=s(t),r=Object(a.a)(n,2),i=r[0],o=r[1],c=s(e),l=Object(a.a)(c,2),d=l[0],u=l[1];return Math.abs(i-d)+Math.abs(o-u)}var c=new f;c.put(0,0,t);var l=new Set;l.add(t);var d={},u={},h={};u[s(t)]=0,h[s(t)]=r(t,n),e=setInterval((function(){if(c.isEmpty())o();else{for(var e,a=!1;!a;)e=c.get(),a=l.delete(e);if(e!==n){for(var m=i(e),f=0;f<m.length;f++){var p=m[f];if(!p.classList.contains("barrier")){var v=u[s(e)]+1,y=u[s(p)];y||(y=1/0),v<y&&(d[s(p)]=e,u[s(p)]=v,h[s(p)]=v+r(p,n),c.put(h[s(p)],r(p,n),p),l.add(p),p.classList.add("open"))}}e.classList.remove("open"),e.classList.add("closed")}else{for(;e!==t;)d[s(e)].classList.add("path"),d[s(e)].classList.remove("closed"),d[s(e)].classList.remove("open"),e=d[s(e)];o()}}}),10)}};return Object(c.jsxs)("div",{className:"App",style:{userSelect:"none"},children:[Object(c.jsxs)("div",{id:"header",children:[Object(c.jsx)("p",{onClick:function(){return function(e){if(!t){t=!0;var n=e[document.getElementById("algorithm").value];try{var s=document.getElementsByClassName("start")[0],r=document.getElementsByClassName("end")[0];s.classList="start",r.classList="end"}catch(o){return}i(document.getElementsByClassName("closed"),"closed"),i(document.getElementsByClassName("path"),"path"),i(document.getElementsByClassName("open"),"open"),document.getElementById("goButton").style.color="grey",n(s,r)}function i(t,e){Array.from(t).forEach((function(t){return t.classList.remove(e)}))}}(y)},id:"goButton",children:"Go"}),Object(c.jsxs)("select",{id:"algorithm",children:[Object(c.jsx)("option",{value:"aStar",children:"AStar"}),Object(c.jsx)("option",{value:"breadthFirstSearch",children:"Breadth First Search"}),Object(c.jsx)("option",{value:"depthFirstSearch",children:"Depth First Search"})]})]}),Object(c.jsx)("div",{id:"grid",onMouseMove:function(t){return u(t)},onMouseDown:function(t){return u(t,!0)},children:function(){for(var t=[],e=0;e<p;e++){t.push([]);for(var n=0;n<v;n++)t[e].push(Object(c.jsx)(l,{row:e,col:n,boxSize:h}))}return t}().map((function(t,e){return Object(c.jsx)("div",{className:"row",id:e,children:t.map((function(t){return t}))})}))}),Object(c.jsxs)("span",{id:"resizeAlert",onClick:function(){return window.location.reload()},children:["Looks like you resized your window. ",Object(c.jsx)("br",{})," Click here to reset the grid"]})]})}o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c26834cb.chunk.js.map