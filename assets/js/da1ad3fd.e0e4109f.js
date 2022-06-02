"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[5234],{3905:function(n,e,t){t.d(e,{Zo:function(){return g},kt:function(){return s}});var l=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,l,i=function(n,e){if(null==n)return{};var t,l,i={},o=Object.keys(n);for(l=0;l<o.length;l++)t=o[l],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(l=0;l<o.length;l++)t=o[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var r=l.createContext({}),u=function(n){var e=l.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},g=function(n){var e=u(n.components);return l.createElement(r.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,r=n.parentName,g=p(n,["components","mdxType","originalType","parentName"]),h=u(t),s=i,d=h["".concat(r,".").concat(s)]||h[s]||c[s]||o;return t?l.createElement(d,a(a({ref:e},g),{},{components:t})):l.createElement(d,a({ref:e},g))}));function s(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=h;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=n,p.mdxType="string"==typeof n?n:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3637:function(n,e,t){t.r(e),t.d(e,{assets:function(){return g},contentTitle:function(){return r},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var l=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={title:"Go \u8c03\u7528 Python",description:"embeddding python in golang",authors:"wKevin",tags:["python","go"]},r=void 0,u={permalink:"/blog/2022/06/02/embedding.python.in.go",source:"@site/blog/2022-06-02-embedding.python.in.go/index.mdx",title:"Go \u8c03\u7528 Python",description:"embeddding python in golang",date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"go",permalink:"/blog/tags/go"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"Go \u8c03\u7528 Python",description:"embeddding python in golang",authors:"wKevin",tags:["python","go"]},nextItem:{title:"VSCode \u4e2d\u7684\u663e\u793a\u6362\u884c\u548c\u683c\u5f0f\u5316\u6362\u884c",permalink:"/blog/2022/05/19/vscode.wordwrap.lindwidth"}},g={authorsImageUrls:[void 0]},c=[{value:"pkg-config",id:"pkg-config",level:2},{value:"Python \u7684 Extending \u548c Embedding",id:"python-\u7684-extending-\u548c-embedding",level:2},{value:"pkg-config \u4e0e python",id:"pkg-config-\u4e0e-python",level:2},{value:"python \u7684 flag \u8fd8\u80fd\u8fd9\u6837\u83b7\u53d6",id:"python-\u7684-flag-\u8fd8\u80fd\u8fd9\u6837\u83b7\u53d6",level:2},{value:"cgo",id:"cgo",level:2},{value:"C API",id:"c-api",level:2},{value:"\u51c6\u5907\u5c31\u7eea\uff0c\u5f00\u59cb\u5d4c\u5165",id:"\u51c6\u5907\u5c31\u7eea\u5f00\u59cb\u5d4c\u5165",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],h={toc:c};function s(n){var e=n.components,p=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,l.Z)({},h,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Go \u4ee3\u7801\u600e\u4e48\u8c03\u7528 Python \u4ee3\u7801\uff0c\u6211\u8981\u7814\u7a76\u660e\u767d\u3002"),(0,o.kt)("h2",{id:"pkg-config"},"pkg-config"),(0,o.kt)("p",null,"pkg-config \u662f\u7528\u6765\u6536\u96c6\u7cfb\u7edf\u4e0a\u5df2\u5b89\u88c5\u5e93\u7684\u5143\u6570\u636e\u7684\u5c0f\u5de5\u5177\uff0cLinux\u3001macOS\u3001Windows \u4e0a\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u53ef\u4ee5\u7528\u5728\u5411 gcc\u3001make \u7b49\u63d0\u4f9b\u6570\u636e\u7684\u573a\u666f\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5e93\u7684\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u968f\u5e93\u7248\u672c\u4e00\u8d77\u53d1\u5e03\u548c\u5b89\u88c5 pkg-config \u6587\u4ef6\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"*.pc"),"\uff09\u53ef\u4ee5\u7b80\u5316\u7528\u6237\uff08gcc\uff09\u5bfb\u627e\u4fe1\u606f\u7684\u65b9\u6cd5\u548c\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"pkg-config \u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.pc")," \u6587\u4ef6\u7684\u8def\u5f84\u53ef\u4ee5\u7528\u4e0b\u9762\u540d\u79f0\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --variable pc_path pkg-config\n/usr/local/lib/x86_64-linux-gnu/pkgconfig:/usr/local/lib/pkgconfig:/usr/local/share/pkgconfig:/usr/lib/x86_64-linux-gnu/pkgconfig:/usr/lib/pkgconfig:/usr/share/pkgconfig\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/x86_64-linux-gnu/pkgconfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/pkgconfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/share/pkgconfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/x86_64-linux-gnu/pkgconfig")," \u2014\u2014 \u6211\u7684\u7535\u8111\u8fd9\u91cc\u6709 280+ \u4e2a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/pkgconfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/share/pkgconfig")," \u2014\u2014 40+ \u4e2a")),(0,o.kt)("p",null,"\u67e5\u770b\u5df2\u7ecf\u80fd\u591f\u4f7f\u7528\u7684\u5e93\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u6bd4\u5982\u67e5\u51fa glib-2 \u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --list-all | grep glib-2\nglib-2.0                       GLib - C Utility Library\n")),(0,o.kt)("p",null,"\u8bf4\u660e\u672c\u673a\u5df2\u7ecf\u5b89\u88c5\u4e86 glib-2.0 \u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --cflags glib-2.0\n-I/usr/include/glib-2.0 -I/usr/lib/x86_64-linux-gnu/glib-2.0/include\n$ pkg-config --libs glib-2.0\n-lglib-2.0\n")),(0,o.kt)("p",null,"\u805a\u5408\u5230 gcc \u6216 make \u4e2d\u5c31\u53ef\u4ee5\u8fd9\u6837"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ gcc `pkg-config --cflags glib-2.0` `pkg-config --libs glib-2.0` main.c -o main\n")),(0,o.kt)("h2",{id:"python-\u7684-extending-\u548c-embedding"},"Python \u7684 Extending \u548c Embedding"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(57751).Z+"#size80",width:"1055",height:"545"})),(0,o.kt)("p",null,"Python \u5b98\u65b9\u6587\u6863\u9996\u9875\u6709\u4e2a\u4e3b\u9898\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/extending/index.html"},"Extending and Embedding"),"\uff0c\u4ece python2 \u81f3\u4eca 3.10\uff0c\u4e00\u76f4\u90fd\u5728\u8fd9\u91cc\uff0c\u5176\u4e2d\u5185\u5bb9\u5206 2 \u5757\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extending\uff08\u6269\u5c55\uff09\uff1a\u4f7f\u7528 C\uff08\u800c\u4e0d\u662f python\uff09\u7f16\u5199 python \u6269\u5c55\u6a21\u5757\u3002"),(0,o.kt)("li",{parentName:"ul"},"Embedding\uff08\u5d4c\u5165\uff09\uff1a\u5c06 Python \u89e3\u91ca\u5668\u5d4c\u5165\u5230\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4ee5\u7528\u4f5c\u6269\u5c55\u8bed\u8a00\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(46e3).Z,width:"564",height:"432"})),(0,o.kt)("p",null,"\u753b\u4e86\u4e2a\u53ef\u80fd\u4e0d\u662f\u5f88\u51c6\u786e\u7684\u56fe\uff0c\u8868\u8fbe\u4e00\u4e0b\u6211\u5bf9\u6269\u5c55\u548c\u5d4c\u5165\u7684\u7406\u89e3\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u62ec\u53f7\u4e2d\u7684\u90e8\u5206(",(0,o.kt)("inlineCode",{parentName:"li"},"(Python/*.c)"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"(Lib/*.py)"),")\u8868\u793a\u8fd9\u4e9b\u6a21\u5757\u5728 CPython \u6e90\u7801\u4e2d\u7684\u6587\u4ef6\u5939\uff0c\u53ca\u5176\u5b9e\u73b0\u8bed\u8a00\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5927\u5706\u5708\u4e2d\u7684 Python Core \u4e0e Parser\u3001Objects\u3001Moudules \u7b49\u7f16\u8bd1\u540e\u751f\u6210 python \u89e3\u91ca\u5668(\u4e00\u822c\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/bin/python"),")\u548c python \u5e93\uff08\u4e00\u822c\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/x86_64_linux-gnu/libpythonx.y.a"),"\uff09,\u90fd\u662f\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5e93\u7684 python \u90e8\u5206\u6e90\u7801\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"Lib/*.py"),"\uff0c\u5b89\u88c5\u65f6\u4e0d\u7f16\u8bd1\uff0c\u4ee5\u6e90\u7801\u5f62\u5f0f\u5b89\u88c5\uff08\u4e00\u822c\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/pythonx.y/"),"\uff09")),(0,o.kt)("p",null,"python3.8 \u53ef\u6267\u884c\u6587\u4ef6\uff08\u89e3\u91ca\u5668\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ file /usr/bin/python3.8\n/usr/bin/python3.8: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=1f3df9df2b5e575fdee41890fe17f6de614f93f6, for GNU/Linux 3.2.0, stripped\n")),(0,o.kt)("p",null,"\u5bf9\u5e94\u7684 python \u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ file /usr/lib/x86_64-linux-gnu/libpython3.8.a\n./libpython3.8.a: symbolic link to ../python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a\n")),(0,o.kt)("p",null,"\u539f\u6765\u662f\u4e2a\u8f6f\u8fde\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ file /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a\n/usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a: current ar archive\n")),(0,o.kt)("p",null,"\u8fd8\u662f\u4e2a\u538b\u7f29\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shreadelf",metastring:'-h /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a |grep "^File:*"',"-h":!0,"/usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a":!0,"|grep":!0,'"^File:*"':!0},"File: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(getbuildinfo.o)\nFile: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(acceler.o)\nFile: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(grammar1.o)\nFile: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(listnode.o)\nFile: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(node.o)\nFile: /usr/lib/python3.8/config-3.8-x86_64-linux-gnu/libpython3.8.a(parser.o)\n......\n")),(0,o.kt)("p",null,"170+ .o \u5408\u5e76\u800c\u6210\uff0c\u5bf9\u5e94\u4e0a\u56fe\u4e2d\u7684\u5927\u5706\u5708\u4e2d\u76f8\u5e94\u7684 .c \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u60f3\u8868\u8fbe\u7684\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6269\u5c55\uff1a\u6307\u7684\u662f C \u8bed\u8a00\u5b9e\u73b0\u7684\u4e0e\u6807\u51c6\u5e93 C \u90e8\u5206\u7c7b\u4f3c\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 C API \u8c03\u7528 Core\u3001Object\u3001Moudules\uff0c\u4ece\u800c\u5b9e\u73b0\u7684\u529f\u80fd\u6269\u5c55\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u76f8\u6bd4 python \u5728\u4e0a\u5c42\u57fa\u4e8e\u6807\u51c6\u5e93\u5b9e\u73b0\u7684\u6269\u5c55\u6216\u6a21\u5757\uff0cC \u6269\u5c55\u53ef\u4ee5\u5b9e\u73b0\u66f4\u5e95\u5c42\u7684\u529f\u80fd\uff0c\u6bd4\u5982\uff1a\u5b9e\u73b0\u65b0\u7684\u5185\u7f6e\u5bf9\u8c61\u7c7b\u578b\u3001\u8c03\u7528 C \u7684\u5e93\u51fd\u6570\u548c\u7cfb\u7edf\u8c03\u7528 \u2014\u2014 \u8fd9\u90fd\u662f python \u8c03\u7528\u6807\u51c6\u5e93\u800c\u5b9e\u73b0\u7684\u6269\u5c55\u6a21\u5757\u505a\u4e0d\u5230\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"C \u5199\u7684\u6269\u5c55\u4e5f\u9700\u8981\u7f16\u8bd1\u4e3a\u4e8c\u8fdb\u5236\u3001\u8fde\u63a5\u540e\u624d\u80fd\u4f7f\u7528\uff0c\u4e0d\u80fd\u50cf python \u4e00\u6837\u7531\u8bcd\u6cd5\u5668\u3001\u89e3\u91ca\u5668\u8fd0\u884c\u671f\u5904\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528 disutils \u7f16\u8bd1 C \u6269\u5c55\uff0c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"python setup.py build"),"\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528 gcc \u751f\u6210 .so \u6216 .o\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7136\u540e\u6269\u5c55\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6 python \u7f16\u5199\u7684\u6269\u5c55\u4e00\u6837\uff0c\u53d1\u5e03\u5230 pypi"))),(0,o.kt)("li",{parentName:"ul"},"\u5d4c\u5165\uff1a\u6307\u7684\u662f\u5c06 python \u89e3\u91ca\u5668\u5d4c\u5165\u5230\u5176\u4ed6\u8bed\u8a00\u6216 APP \u4e2d\uff0c\u4e0d\u518d\u662f\u4e3b\u8fdb\u7a0b\uff0c\u800c\u662f\u88ab\u5176\u4ed6\u8bed\u8a00\uff08C\u3001go \u7b49\uff09\u4e3b\u8fdb\u7a0b\u8c03\u7528\u7684\u6d3e\u6210\u8fdb\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6269\u5c55\u548c\u5d4c\u5165\u90fd\u662f\u8c03\u7528 C-API")),(0,o.kt)("h2",{id:"pkg-config-\u4e0e-python"},"pkg-config \u4e0e python"),(0,o.kt)("p",null,"\u6211\u672c\u673a\u5b89\u88c5\u4e86\u591a\u4e2a\u7248\u672c\u7684 python\uff0cpkg-config \u90fd\u53ef\u4ee5\u627e\u5230\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --list-all | grep python\npython2                        Python - Python library\npython-2.7                     Python - Python library\npython3                        Python - Build a C extension for Python\npython-3.8-embed               Python - Embed Python into an application\npython-3.8                     Python - Build a C extension for Python\npython3-embed                  Python - Embed Python into an application\n")),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"PKG_CONFIG_PATH")," \u73af\u5883\u53d8\u91cf\u589e\u52a0\u641c\u7d22 ",(0,o.kt)("inlineCode",{parentName:"p"},"*.pc")," \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u5982\u65b0\u589e\u6211\u7528 pyenv \u5b89\u88c5\u7684\u66f4\u591a python\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ export PKG_CONFIG_PATH=~/.pyenv/versions/3.9.2/lib/pkgconfig\n")),(0,o.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u627e\u5230 3.9 \u7684 python \u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --list-all | grep python\npython2                        Python - Python library\npython-2.7                     Python - Python library\npython3                        Python - Build a C extension for Python\npython-3.8-embed               Python - Embed Python into an application\npython-3.9-embed               Python - Embed Python into an application\npython-3.8                     Python - Build a C extension for Python\npython-3.9                     Python - Build a C extension for Python\npython3-embed                  Python - Embed Python into an application\n")),(0,o.kt)("p",null,"\u4f60\u5e94\u8be5\u6ce8\u610f\u5230\u4e86\uff0c\u6bcf\u4e2a python \u90fd\u6709 2 \u4e2a pc \u6587\u4ef6\uff0c\u6839\u636e\u5176\u6ce8\u91ca\uff0c\u660e\u786e\u8868\u660e\u4e86 2 \u4e2a pc \u7684\u7528\u9014\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build a C extension for Python \u2014\u2014 \u6269\u5c55"),(0,o.kt)("li",{parentName:"ol"},"Embed Python into an application \u2014\u2014 \u5d4c\u5165")),(0,o.kt)("p",null,"\u6240\u4ee5\u5f53\u6211\u4eec\u5f00\u53d1\u6269\u5c55 or \u5d4c\u5165\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u4f7f\u7528\u76f8\u5e94\u7684 pc \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5bf9\u6bd4\u4e00\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /usr/lib/x86_64-linux-gnu/pkgconfig/python3.pc\n# See: man pkg-config\nprefix=/usr\nexec_prefix=${prefix}\nincludedir=${prefix}/include\n\nName: Python\nDescription: Build a C extension for Python\nRequires:\nVersion: 3.8\nLibs.private: -lcrypt -lpthread -ldl  -lutil -lm\nLibs:\nCflags: -I${includedir}/python3.8 -I${includedir}/x86_64-linux-gnu/python3.8\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /usr/lib/x86_64-linux-gnu/pkgconfig/python3-embed.pc\n# See: man pkg-config\nprefix=/usr\nexec_prefix=${prefix}\nlibdir=${exec_prefix}/lib\nincludedir=${prefix}/include\n\nName: Python\nDescription: Embed Python into an application\nRequires:\nVersion: 3.8\nLibs.private: -lcrypt -lpthread -ldl  -lutil -lm\nLibs: -L${libdir} -lpython3.8\nCflags: -I${includedir}/python3.8\n")),(0,o.kt)("p",null,"\u6240\u4ee5\u76f8\u540c\u547d\u4ee4\u5f97\u5230\u4e0d\u540c\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pkg-config --libs python3\n\n$ pkg-config --libs python3-embed\n-lpython3.8\n")),(0,o.kt)("p",null,"\u6269\u5c55\u662f\u4e0d\u9700\u8981 Libs \u914d\u7f6e\u53c2\u6570\uff0c\u5d4c\u5165\u9700\u8981 \u2014\u2014 \u60f3\u60f3\u4e3a\u4ec0\u4e48\uff1f"),(0,o.kt)("h2",{id:"python-\u7684-flag-\u8fd8\u80fd\u8fd9\u6837\u83b7\u53d6"},"python \u7684 flag \u8fd8\u80fd\u8fd9\u6837\u83b7\u53d6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ python3.9-config --cflags\n-I/home/me/.pyenv/versions/3.9.2/include/python3.9 -I/home/me/.pyenv/versions/3.9.2/include/python3.9  -Wno-unused-result -Wsign-compare  -DNDEBUG -g -fwrapv -O3 -Wall\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ python3.8-config --ldflags\n-L/usr/lib/python3.8/config-3.8-x86_64-linux-gnu -L/usr/lib  -lcrypt -lpthread -ldl  -lutil -lm -lm\n")),(0,o.kt)("p",null,"\u6bd4\u66b4\u9732\u7ed9 pkg-config \u7684\u66f4\u5b8c\u6574\u3002"),(0,o.kt)("h2",{id:"cgo"},"cgo"),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("h2",{id:"\u51c6\u5907\u5c31\u7eea\u5f00\u59cb\u5d4c\u5165"},"\u51c6\u5907\u5c31\u7eea\uff0c\u5f00\u59cb\u5d4c\u5165"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pkg-config",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://people.freedesktop.org/~dbn/pkg-config-guide.html"},"Guide to pkg-config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/210210/pkg-config-path-environment-variable#:~:text=PKG_CONFIG_PATH%20is%20a%20environment%20variable%20that%20specifies%20additional,will%20search%20in%20the%20directories%20%2Fusr%2Flib%2Fpkgconfig%20and%20%2Fusr%2Fshare%2Fpkgconfig."},"PKG_CONFIG_PATH environment variable")))),(0,o.kt)("li",{parentName:"ul"},"Embed Python into Go",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"google\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"embedding python in go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://linux.cn/article-13564-1.html"},"\u5982\u4f55\u5728 Go \u4e2d\u5d4c\u5165 Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/zh-cn/3/extending/embedding.html"},"Python \u5b98\u65b9\u6587\u6863\uff1a\u5728\u5176\u5b83\u5e94\u7528\u7a0b\u5e8f\u5d4c\u5165 Python")))),(0,o.kt)("li",{parentName:"ul"},"Embed Go into Python",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackernoon.com/extending-python-3-in-go-78f3a69552ac"},"2017.12 -- Extending Python 3 in Go")," \u2014\u2014 \u6587\u7ae0\u540d\u5b57\u4e0e\u5185\u5bb9\u4e0d\u7b26\uff0c\u4f46\u5185\u5bb9\u5199\u7684\u8fd8\u662f\u4e0d\u9519\u7684"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nathanvangheem.com/posts/2017/06/03/embedding-golang-in-python-with-groupcache.html"},"Embedding Go and groupcache in Python"))))))}s.isMDXComponent=!0},57751:function(n,e,t){e.Z=t.p+"assets/images/Selection_014-459475125fa59b537a2eab1d35be085b.png"},46e3:function(n,e,t){e.Z=t.p+"assets/images/python.extending.and.embedding-88dde1f9814ae51be1c548d1544bcb30.svg"}}]);