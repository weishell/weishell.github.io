(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{612:function(a,s,t){"use strict";t.r(s);var e=t(42),l=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"linux部分命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux部分命令"}},[a._v("#")]),a._v(" linux部分命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /usr/local\n")])])]),t("ul",[t("li",[t("p",[a._v("查看当前目录下的文件 "),t("strong",[a._v("ls")])])]),a._v(" "),t("li",[t("p",[a._v("安装工具")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("apt install xxx\n")])])]),t("ul",[t("li",[a._v("下载文件(安装了wget)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget http://archive.apache.org/dist/kylin/apache-kylin-2.5.0//apache-kylin-2.5.0-bin-hbase1x.tar.gz\n")])])]),t("ul",[t("li",[t("p",[a._v("查看当前路径 "),t("strong",[a._v("pwd")])])]),a._v(" "),t("li",[t("p",[a._v("编辑文件")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vi /etc/bubby.txt 用vi编辑文件/etc/bubby.txt  i\n")])])]),t("ul",[t("li",[a._v("保存文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("esc :wq\n")])])]),t("ul",[t("li",[a._v("新建文件夹")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mkdir xxx\n")])])]),t("ul",[t("li",[a._v("搜索grep")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls | grep *.txt\n")])])]),t("ul",[t("li",[a._v("解压")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("unzip dist.zip \n")])])]),t("ul",[t("li",[a._v("移动文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mv a.zip book\n")])])]),t("ul",[t("li",[a._v("删除")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm xxx.zip\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm -rf xxx\n")])])]),t("ul",[t("li",[a._v("路径")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pwd\n")])])]),t("h3",{attrs:{id:"在liunx下安装node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在liunx下安装node"}},[a._v("#")]),a._v(" 在liunx下安装node")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1、去官网下载和自己系统匹配的文件：\n\n2、下载下来的tar文件上传到服务器并且解压，然后通过建立软连接变为全局；\n\n1）上传服务器可以是自己任意路径，如cd /app/software/\n\n2）解压上传（解压后的文件我这边将名字改为了nodejs，这个地方自己随意，只要在建立软连接的时候写正确就可以）\n    ① tar -xvf   node-v6.10.0-linux-x64.tar.xz   \n    ② mv node-v6.10.0-linux-x64  nodejs \n    ③确认一下nodejs下bin目录是否有node 和npm文件，如果有执行软连接，如果没有重新下载执行上边步骤；\n\n3）建立软连接，变为全局\n   ①ln -s /app/software/nodejs/bin/npm /usr/local/bin/ \n   ②ln -s /app/software/nodejs/bin/node /usr/local/bin/\n   \n4）最后一步检验nodejs是否已变为全局 \n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);