(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{687:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("img",{attrs:{src:"/beifen/219.jpg"}}),t._v(" "),a("img",{attrs:{src:"/beifen/220.png"}}),t._v(" "),a("img",{attrs:{src:"/beifen/221.png"}}),t._v(" "),a("p",[t._v("为什么GET请求里不能用body？我寻思着平时也没什么人在GET请求里加body吧，而且一直以来都听说这么用不好。但是为什么不好呢？")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("[RFC7231] A payload within a GET request message has no defined semantics; sending a payload body on a GET request might cause some existing implementations to reject the request.")])])]),t._v(" "),a("p",[t._v("意思是你往GET请求里加body是不符合规范的，不保证所有的实现都支持（主要是以前的实现，因为以前曾经有相应的规定）。")]),t._v(" "),a("p",[t._v("但是这一条并不是强制规定。")]),t._v(" "),a("p",[t._v("那么，GET和POST的区别和应用？这问题挺复杂。简而言之，就是“安全”和“不安全”的区别。什么是安全？不用承担责任。什么是不安全？可能需要承担责任。举个例子，点击某个链接以同意某个协议，这个请求明显就是不安全的，因为需要承担责任。如果采用GET，就违反了GET应该用于安全请求的规范。因为浏览器可能在你不知情的情况下预加载这个页面（因为是“安全”的GET请求），这样相当于你在不知情的情况下同意了某个协议，这显然是我们不希望看到的。在契约式的设计里，违反契约的行为是会带来严重的后果的。浏览器按照契约预加载了安全的GET请求，但这本身是不安全的，带来的后果自然要由打破契约的人承担（将这个请求设计成GET的人出来挨打）。")]),t._v(" "),a("p",[t._v("之所以强调“安全”，而不是按照常规的说法强调副作用，因为有副作用的请求不代表不安全；举例来说，服务器有一个显示访问人数的功能，这个功能就可以用GET来做。虽然每次访问都会发送改变服务器状态（计数器）的请求，但用户不会因为这个请求承担责任，这个请求是安全的。至于什么GET请求的URL有长度限制（后来事实证明其实没有），什么GET请求的URL里不能有中文（或者说非ASCII吧），都只是实现上的区别；从最初的设计上来说区别并不在这里。")]),t._v(" "),a("p",[t._v("当然，这些都是纯粹的理论层面的东西。如果遵守RESTful的规范，采用语义化的GET/POST请求，自然也就不会有这些问题了。因为通常来说，查询是安全的；这也是GET的主要作用。")]),t._v(" "),a("p",[t._v("，经常提起RFC,原来是叫“Request For Comments”。")]),t._v(" "),a("h3",{attrs:{id:"项目中遇到的get请求参数丢失问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目中遇到的get请求参数丢失问题"}},[t._v("#")]),t._v(" 项目中遇到的get请求参数丢失问题")]),t._v(" "),a("p",[t._v("传递的参数不要设为undefined，会被自动过滤掉，"),a("strong",[t._v("？后就没参数，系统可能报错，直接改成''就好了")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("queryParams"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        deptName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        orgName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orgList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deptId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("谨慎使用301，因为使用之后，客户端一直会使用301httpcode去处理数据，就算服务器重启也无效，除非客户端主动清除缓存")])])])}),[],!1,null,null,null);s.default=e.exports}}]);