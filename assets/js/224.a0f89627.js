(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{631:function(t,n,a){"use strict";a.r(n);var s=a(16),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"转换后台传来的tree格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换后台传来的tree格式"}},[t._v("#")]),t._v(" 转换后台传来的tree格式")]),t._v(" "),n("p",[t._v("后台返回的格式是parentId+id,children:[],可以忽略，需要前端手动转化成children是嵌套的elementui的标准格式")]),t._v(" "),n("ul",[n("li",[t._v("非ts和eslint模式，如果开启eslint，还需修改一些配置如== 等")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * 构造树型结构数据\n * @param {*} data 数据源\n * @param {*} id id字段 默认 'id'\n * @param {*} parentId 父节点字段 默认 'parentId'\n * @param {*} children 孩子节点字段 默认 'children'\n */\nexport function handleTree(data, id, parentId, children) {\n\tlet config = {\n\t\tid: id || 'id',\n\t\tparentId: parentId || 'parentId',\n\t\tchildrenList: children || 'children'\n\t};\n\n\tvar childrenListMap = {};\n\tvar nodeIds = {};\n\tvar tree = [];\n\n\tfor (let d of data) {\n\t\tlet parentId = d[config.parentId];\n\t\tif (childrenListMap[parentId] == null) {\n\t\t\tchildrenListMap[parentId] = [];\n\t\t}\n\t\tnodeIds[d[config.id]] = d;\n\t\tchildrenListMap[parentId].push(d);\n\t}\n\n\tfor (let d of data) {\n\t\tlet parentId = d[config.parentId];\n\t\tif (nodeIds[parentId] == null) {\n\t\t\ttree.push(d);\n\t\t}\n\t}\n\n\tfor (let t of tree) {\n\t\tadaptToChildrenList(t);\n\t}\n\n\tfunction adaptToChildrenList(o) {\n\t\tif (childrenListMap[o[config.id]] !== null) {\n\t\t\to[config.childrenList] = childrenListMap[o[config.id]];\n\t\t}\n\t\tif (o[config.childrenList]) {\n\t\t\tfor (let c of o[config.childrenList]) {\n\t\t\t\tadaptToChildrenList(c);\n\t\t\t}\n\t\t}\n\t}\n\treturn tree;\n}\n\n")])])]),n("p",[t._v("在vue的element项目中使用main.js中配置")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" handleTree "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/utils/xxxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局方法挂载")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleTree "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" handleTree\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用handletree，把格式改为children嵌套的符合element的格式；")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000/9.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deptId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);