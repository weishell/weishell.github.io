(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{438:function(t,o,n){},481:function(t,o,n){"use strict";n(438)},495:function(t,o,n){"use strict";n.r(o);n(88);var i={name:"DisList",data:function(){return{isgotop:!1,scroll:0,timer:"",isActive1:!1,isActive2:!1}},mounted:function(){window.addEventListener("scroll",this.debounce(this.handleScroll,500),!0)},destory:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){this.scroll=document.documentElement.scrollTop||document.body.scrollTop,this.scroll>1e3?this.isgotop=!0:this.isgotop=!1},gotop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(this.gotop),window.scrollTo(0,t-t/10))},debounce:function(t,o){var n=null;return function(){null!==n&&clearTimeout(n),n=setTimeout(t,o)}},catout:function(){}}},e=(n(481),n(15)),c=Object(e.a)(i,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return t.isgotop?n("div",{on:{mouseover:function(o){t.isActive1=!0,t.isActive2=!1},mouseout:function(o){t.isActive1=!1,t.isActive2=!0},click:t.gotop}},[n("img",{class:{tkt:t.isActive1,tkb:t.isActive2},attrs:{src:"/beifen/109.png",id:"cat"}}),t._v(" "),n("div",{staticClass:"moon kitty-top",attrs:{id:"gotop"}})]):t._e()}),[],!1,null,null,null);o.default=c.exports}}]);