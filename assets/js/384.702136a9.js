(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{856:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree-shaking")]),t._v(" "),e("p",[t._v("Tree-Shaking这个名词，很多前端coder已经耳熟能详了，它代表的大意就是删除没用到的代码。\nwebpack目前只支持ES6方式引入可以tree-shaking(ES 模块引入是静态引入，而用commonjs require这种引入则是动态引入)")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//webpack.config.js")]),t._v("\noptimization"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tusedExports"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("但是如果如 import 'xxx1'这样没有导出具体的内容tree-shaking会忽略这些。所以在package.json中配置'sideEffects:[\"xxx1\"]'即可不影响改内容")]),t._v(" "),e("p",[t._v("在webpack打包的development环境，不会去除未被使用部分的内容，但是会标注信息在文件中。")]),t._v(" "),e("p",[t._v("在production环境中optimization默认配置好了，不需要自行配置了.")])])}),[],!1,null,null,null);s.default=n.exports}}]);