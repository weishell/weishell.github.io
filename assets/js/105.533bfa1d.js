(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{251:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"vue项目遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue项目遇到的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" vue项目遇到的问题")]),t._v(" "),s("h4",{attrs:{id:"data数据非对象直接修改无效的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data数据非对象直接修改无效的原因","aria-hidden":"true"}},[t._v("#")]),t._v(" data数据非对象直接修改无效的原因")]),t._v(" "),s("p",[t._v("在创建时设置了一个删除按钮，删除按钮是在展示div的内部，每次点击删除，其实也触发了父级的事件，导致一直删除失败，需要@click.stop='del'即可。")]),t._v(" "),s("h4",{attrs:{id:"对比两个数组的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比两个数组的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比两个数组的数据")]),t._v(" "),s("p",[t._v("需要对比修改前后的两个数组，在vue中，数据都为arr;所以需要深拷贝一份,")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对比的方法很多，可以使用indexOf,includes等。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localarrtele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uidarr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mqmessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MQTT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sendmes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("之前做一个数是否在某一数组中，使用了一个计量值，然后看是否不符合等于最后arr.length,可以简化成以上的方法.")]),t._v(" "),s("h4",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])])])}],!1,null,null,null);a.default=e.exports}}]);