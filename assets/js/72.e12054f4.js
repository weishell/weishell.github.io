(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{460:function(t,s,e){"use strict";e.r(s);var i=e(33),n=Object(i.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h3",{attrs:{id:"变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[this._v("#")]),this._v(" 变量提升")]),this._v(" "),s("p",[this._v("在生成执行环境时，会有两个阶段。第一个阶段是创建的阶段，JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升。")]),this._v(" "),s("p",[this._v("var 会产生很多错误，所以在 ES6中引入了 let。let 不能在声明前使用，但是这并不是常说的 let 不会提升，let 提升了，在第一阶段内存也已经为他开辟好了空间，但是因为这个声明的特性导致了并不能在声明前使用。")])])}),[],!1,null,null,null);s.default=n.exports}}]);