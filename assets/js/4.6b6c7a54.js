(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,n,a){var e=a(2);e(e.P,"Array",{fill:a(178)}),a(94)("fill")},178:function(t,n,a){"use strict";var e=a(18),o=a(95),i=a(12);t.exports=function(t){for(var n=e(this),a=i(n.length),r=arguments.length,c=o(r>1?arguments[1]:void 0,a),s=r>2?arguments[2]:void 0,h=void 0===s?a:o(s,a);h>c;)n[c++]=t;return n}},179:function(t,n,a){},189:function(t,n,a){"use strict";var e=a(179);a.n(e).a},204:function(t,n,a){"use strict";a.r(n);a(177);var e={name:"canvasuse",data:function(){return{}},mounted:function(){var t=document.getElementById("canvas11");console.log(t);var n,a,e=t.getContext("2d"),o=[],i=10;function r(t,n,a){this.index=t,this.x=n,this.y=a,this.r=2*Math.random()+2;var e=(Math.floor(10*Math.random())+1)/7,o=parseInt(255*Math.random()),i=parseInt(255*Math.random()),r=parseInt(255*Math.random());this.color="rgba(".concat(o,",").concat(i,",").concat(r,",").concat(e,")")}function c(){for(var t in e.clearRect(0,0,n,a),o)o[t].move();requestAnimationFrame(c)}n=document.documentElement.clientWidth,a=document.documentElement.clientHeight,t.width=n,t.height=a,r.prototype.draw=function(){e.fillStyle=this.color,e.shadowBlur=2*this.r,e.beginPath(),e.arc(this.x,this.y,this.r,0,2*Math.PI,!1),e.closePath(),e.fill()},r.prototype.move=function(){this.y+=.5,this.y>=n+10&&(this.y=-10),this.draw()},function(){for(var t=0;t<i;t++)o[t]=new r(t,Math.random()*n,Math.random()*a),o[t].draw();c()}()},methods:{}},o=(a(189),a(0)),i=Object(o.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("canvas",{attrs:{id:"canvas11"}})])}],!1,null,null,null);n.default=i.exports}}]);