(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{365:function(e,t,r){"use strict";r.r(t);var _=r(0),s=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"前端防护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端防护","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端防护")]),e._v(" "),r("h3",{attrs:{id:"xss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss","aria-hidden":"true"}},[e._v("#")]),e._v(" XSS")]),e._v(" "),r("p",[e._v("【Cross Site Script】跨站脚本攻击\n恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。")]),e._v(" "),r("p",[e._v("防御方法：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("过滤关键字：script javascript等")])]),e._v(" "),r("li",[r("p",[e._v("限制输入，规定输入的只能是某些格式的数据")])])]),e._v(" "),r("h3",{attrs:{id:"csrf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf","aria-hidden":"true"}},[e._v("#")]),e._v(" CSRF")]),e._v(" "),r("p",[e._v("【Cross Site Request Forgery】站点伪造请求\n跨站点参考伪造通过在访问用户被认为已经通过身份验证的Web应用程序的页面中包含恶意代码或链接来工作。 如果该Web应用程序的会话没有超时，攻击者可能执行未授权的命令。")]),e._v(" "),r("p",[e._v("防御方法：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("在请求地址中添加 token 并验证")])]),e._v(" "),r("li",[r("p",[e._v("在HTTP 头中自定义属性并验证")])]),e._v(" "),r("li",[r("p",[e._v("验证 HTTP Referer 字段 ;")])])]),e._v(" "),r("p",[e._v("（ps:Http协议头中的Referer主要用来让服务器判断来源页面, 即用户是从哪个页面来的,通常被网站用来统计用户来源,是从搜索页面来的,还是从其他网站链接过来,或是从书签等访问,以便网站合理定位.Referer有时也被用作防盗链, 即下载时判断来源地址是不是在网站域名之内, 否则就不能下载或显示,很多网站,如天涯就是通过Referer页面来判断用户是否能够下载图片.）")]),e._v(" "),r("h3",{attrs:{id:"sql注入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql注入","aria-hidden":"true"}},[e._v("#")]),e._v(" SQL注入")]),e._v(" "),r("p",[e._v("用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据。")]),e._v(" "),r("p",[e._v("防御方法：")]),e._v(" "),r("ol",[r("li",[e._v("采用sql语句预编译和绑定变量，是防御sql注入的最佳方法。采用JDBC的预编译语句集，它内置了处理SQL注入的能力，只要使用它的setXXX方法传值即可。")]),e._v(" "),r("li",[e._v("使用正则表达式来过滤一些sql关键字，如or、where等")])]),e._v(" "),r("h3",{attrs:{id:"文件上传攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件上传攻击","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件上传攻击")]),e._v(" "),r("p",[e._v("防御措施")]),e._v(" "),r("ol",[r("li",[e._v("文件上传的目录设置为不可执行。")]),e._v(" "),r("li",[e._v("判断文件类型。在判断文件类型的时候，可以结合使用MIME Type，后缀检查等方式。因为对于上传文件，不能简单地通过后缀名称来判断文件的类型，因为攻击者可以将可执行文件的后缀名称改为图片或其他后缀类型，诱导用户执行。")]),e._v(" "),r("li",[e._v("对上传的文件类型进行白名单校验，只允许上传可靠类型。")]),e._v(" "),r("li",[e._v("上传的文件需要进行重新命名，使攻击者无法猜想上传文件的访问路径，将极大地增加攻击成本。")]),e._v(" "),r("li",[e._v("限制上传文件的大小。")]),e._v(" "),r("li",[e._v("单独设置文件服务器的域名。")])])])}],!1,null,null,null);t.default=s.exports}}]);