(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{494:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"nodeapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodeapi","aria-hidden":"true"}},[s._v("#")]),s._v(" nodeapi")]),s._v(" "),a("h3",{attrs:{id:"querystring-查询字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-查询字符串","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring 查询字符串")]),s._v(" "),a("p",[s._v("querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。 它可以使用以下方式访问：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" querystring "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'querystring'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"querystring-decode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-decode","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.decode()")]),s._v(" "),a("p",[s._v("querystring.parse() 的别名")]),s._v(" "),a("h4",{attrs:{id:"querystring-encode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-encode","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.encode()")]),s._v(" "),a("p",[s._v("querystring.stringify() 的别名")]),s._v(" "),a("h4",{attrs:{id:"querystring-stringify-obj-sep-eq-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-stringify-obj-sep-eq-options","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.stringify(obj[, sep[, eq[, options]]])")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("obj <Object> 要序列化为 URL 查询字符串的对象。\nsep <string> 用于在查询字符串中分隔键值对的子字符串。默认值: '&'。\neq <string> 用于在查询字符串中分隔键和值的子字符串。默认值: '='。\noptions\n\nencodeURIComponent <Function> 在查询字符串中将 URL 不安全字符转换为百分比编码时使用的函数。\n默认值: querystring.escape()。\n")])])]),a("h4",{attrs:{id:"querystring-parse-str-sep-eq-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-parse-str-sep-eq-options","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.parse(str[, sep[, eq[, options]]])")]),s._v(" "),a("p",[s._v("将&和=连接的字符串解析成对象格式")]),s._v(" "),a("h4",{attrs:{id:"querystring-unescape-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-unescape-str","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.unescape(str)")]),s._v(" "),a("p",[s._v("querystring.unescape() 方法在给定的 str 上执行 URL 百分比编码字符的解码。")]),s._v(" "),a("p",[s._v("querystring.unescape() 方法由 querystring.parse() 使用，通常不会直接使用它。 它的导出主要是为了允许应用程序代码在必要时通过将 querystring.unescape 分配给替代函数来提供替换的解码实现。")]),s._v(" "),a("p",[s._v("默认情况下， querystring.unescape() 方法将尝试使用 JavaScript 内置的 decodeURIComponent() 方法进行解码。 如果失败，将使用更安全的不会丢失格式错误的 URL 的等价方法。")]),s._v(" "),a("h4",{attrs:{id:"querystring-escape-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-escape-str","aria-hidden":"true"}},[s._v("#")]),s._v(" querystring.escape(str)")]),s._v(" "),a("p",[s._v("querystring.escape() 方法以对 URL 查询字符串的特定要求进行了优化的方式对给定的 str 执行 URL 百分比编码。")]),s._v(" "),a("p",[s._v("querystring.escape() 方法由 querystring.stringify() 使用，通常不会直接使用。 它的导出主要是为了允许应用程序代码在必要时通过将 querystring.escape 指定给替代函数来提供替换的百分比编码实现。")]),s._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[s._v("#")]),s._v(" response")]),s._v(" "),a("p",[s._v("服务端返回客户端内容")]),s._v(" "),a("h4",{attrs:{id:"response-end-data-encoding-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-end-data-encoding-callback","aria-hidden":"true"}},[s._v("#")]),s._v(" response.end([data][, encoding][, callback])")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("data <string> | <Buffer>\nencoding <string>\ncallback <Function>\n")])])]),a("p",[s._v("此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法。")]),s._v(" "),a("p",[s._v("如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)。")]),s._v(" "),a("p",[s._v("如果指定了 callback，则当响应流完成时将调用它。")]),s._v(" "),a("h4",{attrs:{id:"response-setheader-name-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-setheader-name-value","aria-hidden":"true"}},[s._v("#")]),s._v(" response.setHeader(name, value)")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("name <string>\nvalue <any>\n")])])]),a("p",[s._v("为隐式响应头设置单个响应头的值。 如果此响应头已存在于待发送的响应头中，则其值将被替换。 在这里可以使用字符串数组来发送具有相同名称的多个响应头。 非字符串值将被原样保存。 因此 response.getHeader() 可能返回非字符串值。 但是非字符串值将转换为字符串以进行网络传输。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("或：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Set-Cookie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type=ninja'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'language=javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("当使用 response.setHeader() 设置响应头时，它们将与传给 response.writeHead() 的任何响应头合并，其中 response.writeHead() 的响应头优先。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回 content-type = text/plain")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'X-Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ok'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果调用了 response.writeHead() 方法并且尚未调用此方法，则它将直接将提供的响应头值写入网络通道而不在内部进行缓存，并且响应头上的 response.getHeader() 将不会产生预期的结果。 如果需要渐进的响应头填充以及将来可能的检索和修改，则使用 response.setHeader() 而不是 response.writeHead()。")]),s._v(" "),a("h4",{attrs:{id:"response-writehead-statuscode-statusmessage-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-writehead-statuscode-statusmessage-headers","aria-hidden":"true"}},[s._v("#")]),s._v(" response.writeHead(statusCode[, statusMessage][, headers])")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("statusCode <number>\nstatusMessage <string>\nheaders <Object>\n")])])]),a("p",[s._v("此方法只能在消息上调用一次，并且必须在调用 response.end() 之前调用。")]),s._v(" "),a("p",[s._v("如果在调用此方法之前调用了 response.write() 或 response.end()，则将计算隐式或可变的响应头并调用此函数。")]),s._v(" "),a("h4",{attrs:{id:"response-write-chunk-encoding-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-write-chunk-encoding-callback","aria-hidden":"true"}},[s._v("#")]),s._v(" response.write(chunk[, encoding][, callback])")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chunk <string> | <Buffer>\nencoding <string> 默认值: 'utf8'。\ncallback <Function>\n")])])]),a("h3",{attrs:{id:"url模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url模块","aria-hidden":"true"}},[s._v("#")]),s._v(" url模块")]),s._v(" "),a("p",[s._v("url 模块用于处理与解析 URL。\nurl 模块提供了两套 API 来处理 URL：一个是旧版本遗留的 API，一个是实现了 WHATWG标准的新 API。")]),s._v(" "),a("p",[s._v("使用 WHATWG 的 API 解析 URL 字符串：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("使用遗留的 API 解析 URL 字符串：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  slashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user:pass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sub.host.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sub.host.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?query=string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query=string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/p/a/t/h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/p/a/t/h?query=string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://sub.host.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sub.host.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sub.host.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/p/a/t/h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?query=string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  searchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" URLSearchParams "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#hash'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('┌────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                           href                                             │\n├──────────┬──┬───────────────────┬───────────────────────┬──────────────────────────┬───────┤\n│ protocol │  │       auth        │         host          │          path            │ hash  │\n│          │  │                   ├────────────────┬──────┼─────────┬────────────────┤       │\n│          │  │                   │   hostname     │ port │pathname │     search     │       │\n│          │  │                   │                │      │         ├─┬──────────────┤       │\n│          │  │                   │                │      │         │ │    query     │       │\n"  https:   //   user   :   pass  @ sub.example.com : 8080  /p/a/t/h  ?  query=string   #hash"\n│          │  │         │         │   hostname     │ port │         │                │       │\n│          │  │         │         ├────────────────┴──────┤         │                │       │\n│ protocol │  │username │ password│         host          │         │                │       │\n├──────────┴──┼─────────┴─────────┼───────────────────────┤         │                │       │\n│   origin    │                   │        origin         │pathname │     search     │ hash  │\n├─────────────┴───────────────────┴───────────────────────┴─────────┴────────────────┴───────┤\n│                                           href                                             │\n└────────────────────────────────────────────────────────────────────────────────────────────┘\n')])])])])}],!1,null,null,null);t.default=e.exports}}]);