(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{459:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),n("p",[t._v("从上面的输出结果看出，f.__proto__指向了其构造函数F的prototype，而F.prototype本身也是一个对象，其内部也有__proto__属性，其指向的是Object.prototype,直到最后Object.prototype指向null，这条原型链才结束。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("原型对象本身也是对象，它也有自己的原型，而它自己的原型对象又可以有自己的原型，这样就组成了一条链，这个就是原型链，JavaScritp引擎在访问对象的属性时，如果在对象本身中没有找到，则会去原型链中查找，如果找到，直接返回值，如果整个链都遍历且没有找到属性，则返回undefined。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("img",{attrs:{src:"/img/prototype.png"}}),t._v("\n①__proto__和constructor属性是对象所独有的；\n"),n("p",[t._v("② prototype属性是函数所独有的。但是由于JS中函数也是一种对象，所以函数也拥有__proto__和constructor属性。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),n("img",{attrs:{src:"/beifen/137.png"}}),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),n("p",[n("a",{attrs:{href:"http://note.youdao.com/noteshare?id=013912e092c400e5a4d1bcb65cfef276&sub=6160249E104E48E5845A6E4F74755323",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料1"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://note.youdao.com/noteshare?id=7a7a9fd3a211f174597f36744dd6bb24&sub=13FBAC2F32ED491EA79A4B6C7BF53CEF",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料2"),n("OutboundLink")],1)]),t._v(" "),n("Gotop")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prototype原型对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype原型对象","aria-hidden":"true"}},[this._v("#")]),this._v(" prototype原型对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("每个函数")]),this._v(" 都有一个 "),s("strong",[this._v("默认的prototype属性")]),this._v("，其实际上还是一个 "),s("strong",[this._v("对象")]),this._v("，如果被用在继承中，姑且叫做原型对象。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f11"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tƒ f11() {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tconsole.log(100);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t}")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f11"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tconstructor: ƒ f11()")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t__proto__: Object")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f11"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tf11() {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tconsole.log(100);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("prototype")]),this._v(" "),s("p",[this._v("当你创建函数时，JS会为这个函数自动添加 prototype 属性，值是空对象。而一旦你把这个函数当作构造函数（ constructor ）调用（即通过 new 关键字调用），那么JS就会帮你创建该构造函数的实例，实例继承构造函数 prototype的所有属性和方法（实例通过设置自己的 "),s("strong",[this._v("__proto__")]),this._v(" 指向承构造函数的 "),s("strong",[this._v("prototype")]),this._v(" 来实现这种继承）。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1000")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("因此，__proto__这个神秘的属性才是原型链形成的真正原因。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Object.prototype是顶级对象，所有对象都继承自它。")]),this._v(" "),s("li",[this._v("Function 继承 Function 本身， Function.prototype 继承 Object.prototype 。")]),this._v(" "),s("li",[this._v("Function.prototype 和 Function.__proto__ 都指向 Function.prototype")]),this._v(" "),s("li",[this._v("Object.prototype.__proto__ === null ，说明原型链到 Object.prototype 终止。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("ul",[n("li",[t._v("所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（ null除外）")]),t._v(" "),n("li",[t._v("所有的引用类型（数组、对象、函数），都有一个 "),n("strong",[t._v("__proto__")]),t._v(" 属性，属性值是一个普通的对象")]),t._v(" "),n("li",[t._v("所有的函数，都有一个 "),n("strong",[t._v("prototype 属性")]),t._v("，属性值也是一个普通的对象")]),t._v(" "),n("li",[t._v("所有的引用类型（数组、对象、函数），"),n("strong",[t._v("__proto__ 属性值指向它的构造函数的prototype 属性值")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"图解constructor-prototype-proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解constructor-prototype-proto","aria-hidden":"true"}},[this._v("#")]),this._v(" 图解constructor/prototype/__proto__")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第一，"),s("code",[this._v("__proto__")]),this._v("属性，它是对象所独有的，可以看到__proto__属性都是由一个对象指向一个对象，即指向它们的"),s("strong",[this._v("原型对象")]),this._v("（也可以理解为父对象）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("它的"),s("code",[this._v("作用")]),this._v("就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（可以理解为父对象）里找，如果父对象也不存在这个属性，则继续往父对象的__proto__属性所指向的那个对象（理解为爷爷对象）里找，如果还没找到，则继续往上找….直到原型链顶端，此时若还没找到，则返回undefined（可以理解为，再往上就已经不是“人”的范畴了，找不到了，到此为止），由以上这种通过__proto__属性来连接对象直到的一条链即为我们所谓的"),s("code",[this._v("原型链")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("第二，"),n("code",[t._v("prototype属性")]),t._v("：它是函数所独有的，它是"),n("strong",[t._v("从一个函数指向一个对象")]),t._v("。它的"),n("code",[t._v("含义")]),t._v("是"),n("strong",[t._v("函数的原型对象")]),t._v("，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象，由此可知："),n("strong",[t._v("f1.__proto__ === Foo.prototype")]),t._v("，它们两个完全一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那prototype属性的作用又是什么呢？它的作用就是包含可以由特定类型的所有实例共享的属性和方法，也就是让"),s("strong",[this._v("该函数所实例化的对象们都可以找到公用的属性和方法")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后，我们来看一下"),s("code",[this._v("constructor属性")]),this._v(":\nconstructor属性也是对象才拥有的，它是"),s("strong",[this._v("从一个对象指向一个函数")]),this._v("，含义就是指向该对象的构造函数，每个对象都有构造函数，从图中可以看出Function这个对象比较特殊，它的构造函数就是它自己（因为Function可以看成是一个函数，也可以是一个对象），所有函数最终都是由Function()构造函数得来，所以constructor属性的终点就是Function()。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"原型对象总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型对象总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型对象总结")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("每个函数都有prototype,constructor和__proto__")]),t._v(" "),n("li",[t._v("对象没有prototype，对象有constructor和__proto__")]),t._v(" "),n("li",[t._v("constructor:从一个对象指向一个函数,指向该对象的构造函数")]),t._v(" "),n("li",[t._v("prototype:从一个函数指向一个对象,是函数的原型对象")]),t._v(" "),n("li",[n("strong",[t._v("实例f的构造函数指向F，而实例"),n("code",[t._v("f.__proto__")]),t._v("对象==F.prototype，"),n("code",[t._v("f.__proto__.constructor")]),t._v("==F")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分享链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 分享链接")])}],!1,null,null,null);s.default=o.exports}}]);