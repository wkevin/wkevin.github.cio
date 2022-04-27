"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[7819],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(n),g=r,N=k["".concat(u,".").concat(g)]||k[g]||d[g]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43201:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"\u5bf9\u6bd4 yarn \u548c npm \u521b\u5efa Tauri \u9879\u76ee",date:"2022-01-22 19:21:43 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["tauri"]},u=void 0,o={permalink:"/blog/2022/01/22/create-tauri-app",source:"@site/blog/2022-01-22-create-tauri-app/index.md",title:"\u5bf9\u6bd4 yarn \u548c npm \u521b\u5efa Tauri \u9879\u76ee",description:" ",date:"2022-01-22T19:21:43.000Z",formattedDate:"January 22, 2022",tags:[{label:"tauri",permalink:"/blog/tags/tauri"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"\u5bf9\u6bd4 yarn \u548c npm \u521b\u5efa Tauri \u9879\u76ee",date:"2022-01-22 19:21:43 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["tauri"]},prevItem:{title:"Docusaurus Tips",permalink:"/blog/2022/04/15/docusaurus"},nextItem:{title:"github \u65e0\u5948\u4e4b\u4e3e",permalink:"/blog/2022/01/15/github.insteadof"}},m={authorsImageUrls:[void 0]},d=[{value:"\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee",id:"\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee",level:3},{value:"npm/yarn \u51c6\u5907",id:"npmyarn-\u51c6\u5907",level:4},{value:"Create",id:"create",level:4},{value:"\u9879\u76ee\u8fd0\u884c",id:"\u9879\u76ee\u8fd0\u884c",level:3},{value:"\u8865\u5145",id:"\u8865\u5145",level:3},{value:"\u8865\u5145 2",id:"\u8865\u5145-2",level:3}],k={toc:d};function g(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(13066).Z+"#size20",width:"512",height:"512"})),(0,l.kt)("p",null,"\u4e00\u76f4\u60f3\u7528\u524d\u540e\u7aef\u6280\u672f\u6808\u505a\u4e2a\u8de8\u5e73\u53f0\uff08Win/Linux/macOS\uff09\u7684 APP\uff0c\u524d\u51e0\u5e74\u4e86\u89e3\u8fc7 Electron\uff0c\u5230\u540e\u6765\u59cb\u7ec8\u6ca1\u6709\u5e94\u7528\u573a\u666f\uff0c\u5c31\u653e\u4e0b\u4e86\uff0c\u6700\u8fd1\u53c8\u638c\u63e1\u4e86\u4e00\u4e0b\u6700\u65b0\u60c5\u51b5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6846\u67b6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Electron"),(0,l.kt)("td",{parentName:"tr",align:null},"Angular/VUE/React"),(0,l.kt)("td",{parentName:"tr",align:null},"typescript")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Wails"),(0,l.kt)("td",{parentName:"tr",align:null},"VUE/React"),(0,l.kt)("td",{parentName:"tr",align:null},"go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goxygen"),(0,l.kt)("td",{parentName:"tr",align:null},"Angular/VUE/React"),(0,l.kt)("td",{parentName:"tr",align:null},"go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tauri"),(0,l.kt)("td",{parentName:"tr",align:null},"Angular/VUE/React/Vite/..."),(0,l.kt)("td",{parentName:"tr",align:null},"rust")))),(0,l.kt)("p",null,"\u524d\u51e0\u5929\u6070\u9022\u6709\u4e2a\u573a\u666f\uff0c\u5c31\u8bd5\u4e86\u4e00\u4e0b ",(0,l.kt)("a",{parentName:"p",href:"https://tauri.studio/"},"Tauri"),"\uff0c\u76f8\u6bd4 Electron, Tauri \u4e0d\u4f1a\u628a node \u548c chromium \u6253\u5305\u5230\u6700\u7ec8 APP\uff0c\u6240\u4ee5\u6700\u7ec8\u6784\u5efa\u51fa\u7684\u7248\u672c\u4f1a\u5c0f\u5f88\u591a\uff0c\u8fd0\u884c\u901f\u5ea6\u4e5f\u5feb\u5f88\u591a\u3002"),(0,l.kt)("p",null,"\u7528\u4e86 2 \u5929\u8dd1\u8d77\u6765\u4e86\u4e00\u4e2a\u57fa\u672c\u7684 APP\uff0c\u524d\u7aef ",(0,l.kt)("inlineCode",{parentName:"p"},"Vite + VUE4 + Element-plus + TypeScript"),"\uff0c\u540e\u7aef Rust\uff0c\u8fc7\u7a0b\u8bb0\u5f55\u5982\u4e0b\u3002"),(0,l.kt)("h3",{id:"\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee"},"\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee"),(0,l.kt)("h4",{id:"npmyarn-\u51c6\u5907"},"npm/yarn \u51c6\u5907"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u662f\u5728\u516c\u53f8 Proxy \u4e4b\u540e\uff0c\u5219\u5ffd\u7565\u672c\u6bb5\uff0c\u8bbe\u7f6e\u597d\u6dd8\u5b9d\u7684 npm \u955c\u50cf\u5373\u53ef\uff0c\u6211\u662f\u5728\u516c\u53f8 Proxy \u4e4b\u540e\u6298\u817e\u7684\uff0c\u5e76\u4e14 yarn \u4e0e npm \u8fd8\u6709\u4e00\u4e9b\u5dee\u5f02\uff0c\u6240\u4ee5\u7279\u522b\u8bb0\u5f55\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u65e9\u671f(",(0,l.kt)("inlineCode",{parentName:"p"},"<1.0.0-beta8"),")\u7684 tauri \u5728\u8fd0\u884c\u811a\u624b\u67b6\u65f6\u9700\u8981\u4ece github \u4e0a\u4e0b\u8f7d\u4e1c\u897f\uff0c\u6240\u4ee5\u6211\u9700\u8981\u5904\u7406\u540c\u65f6\uff1a\u201c\u901a\u8fc7 proxy \u8bbf\u95ee github\u201d + \u201c\u516c\u53f8\u5185\u5305\u670d\u52a1\u5668\u4e0b\u8f7d npm \u5305\u201d\u7684\u60c5\u5f62\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a1.0.0-rc \u540e\u5c31\u4e0d\u9700\u8981\u4ece github \u4e0a\u4e0b\u8f7d\u4e86\uff0c\u4e00\u4e0b\u8f7b\u677e\u5f88\u591a\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"npm \u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"),(0,l.kt)("th",{parentName:"tr",align:null},"yarn"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"registry")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm config set registry <\u5305\u670d\u52a1\u5668>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 npm \u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"proxy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm config set proxy <\u4ee3\u7406\u670d\u52a1\u5668>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 npm \u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"noproxy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm config set noproxy <\u5305\u670d\u52a1\u5668>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u4f7f\u7528 npm \u6b64\u914d\u7f6e"))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/using-npm/config"},"npm \u7684 config \u8be6\u7ec6\u6587\u6863")," \u4e2d\u6709 registry\u3001proxy\u3001noproxy \u7b49\u6240\u6709\u914d\u7f6e\u9879\u7684\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5bf9\u4e8e shell \u73af\u5883\u53d8\u91cf\uff0cnpm \u548c yarn \u4e5f\u4e0d\u540c\u5904\u7406"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"shell \u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"),(0,l.kt)("th",{parentName:"tr",align:null},"yarn"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http-proxy"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https-proxy")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"no_proxy")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f7f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm_config_xxx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u63a5\u53d7")))),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u603b\u7ed3\u4e00\u4e0b\u5728\u516c\u53f8\u5185\u7f51\u5b89\u88c5\u7684\u6700\u4f73\u65b9\u6848\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u76ee\u7684"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"proxy")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"noproxy")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f51\u5305\u670d\u52a1\u5668 + npm"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u914d\uff0c\u522b\u914d\u9519\u5c31\u884c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u914d\uff0c\u522b\u914d\u9519\u5c31\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f51\u5305\u670d\u52a1\u5668 + yarn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm config delete proxy")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5916\u7f51\u5305\u670d\u52a1\u5668 + npm"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u6b63\u786e\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u6b63\u786e\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5916\u7f51\u5305\u670d\u52a1\u5668 + yarn"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 npm \u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548")))),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u540e\u68c0\u67e5\u4e00\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm update\n$ npm config list\n$ yarn config list\n")),(0,l.kt)("h4",{id:"create"},"Create"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f yarn \u548c npx \u4e24\u79cd\u7528\u811a\u624b\u67b6\u7684\u65b9\u5f0f\u5bf9\u6bd4\uff0c\u8fd0\u884c\u9636\u6bb5\u662f\u76f8\u540c\u7684\uff0c\u6574\u4f53\u6765\u8bf4 yarn \u7684\u6210\u529f\u7387\u4f1a\u9ad8\u4e00\u4e9b\uff0c\u53cd\u590d\u5b89\u88c5\u7684\u901f\u5ea6\u4e5f\u5927\u5e45\u63d0\u5347\u3002\u6240\u4ee5\u76f4\u8fde\u5916\u7f51\u7684\u8bdd\u5fc5\u987b\u9996\u9009 yarn\uff0c\u5185\u7f51\u5b89\u88c5\u7684\u8bdd\u5c31\u662f\u9762\u5bf9\u4e0a\u9762 3 \u53f7\u73af\u5883\uff0c\u7528 npm \u66f4\u5408\u9002\u4e9b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn: ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn create tauri-app")),(0,l.kt)("li",{parentName:"ul"},"npm: ",(0,l.kt)("inlineCode",{parentName:"li"},"npx create-tauri-app"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u51c6\u5907\u811a\u624b\u67b6"),(0,l.kt)("td",{parentName:"tr",align:null},"Install ",(0,l.kt)("a",{parentName:"td",href:"mailto:create-tauri-app@1.0.0-beta.4"},"create-tauri-app@1.0.0-beta.4")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea4\u4e92\u5f0f\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"app name/title/UI reciped \u7b49"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">>Running initial command(s)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5 create-vite"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">> Installing any additional"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"needed dependencies")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5 vue,vite,ts,tauri-apps/cli \u76f4\u63a5\u5305\u53ca\u5176 370+ \u4f9d\u8d56\u5305"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u79c0",(0,l.kt)("br",null),"[\u6ce8 1]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5076\u53d1\u5931\u8d25",(0,l.kt)("br",null),"[\u6ce8 2]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'>> Updating "package.json"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u9879\u76ee\u914d\u7f6e\u5199\u5165 package.json"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'>> Running "tauri init"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u5148 Download Rust CLI ","[\u6ce8 3]","\uff0c\u7136\u540e\u6267\u884c\u521d\u59cb\u5316","[\u6ce8 4]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b21\u4e0b\u8f7d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cd\u590d\u4e0b\u8f7d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'>> Updating "tauri.conf.json"')),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">> Running final command(s)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vue-tsc --noEmit && vite build")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u6ce8\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"yarn \u4e0b\u8f7d\u7684\u5305\u4f1a\u7f13\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn cache dir")," \u76ee\u5f55\u4e0b\u9762\uff0c\u7136\u540e\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u7684 node_modules \u4e0b\u521b\u5efa\u8f6f\u8fde\u63a5\uff0c\u6240\u4ee5\u91cd\u590d\u5b89\u88c5\u65f6\u4f1a\u975e\u5e38\u5feb\u901f\uff0c\u5e76\u8282\u7701\u786c\u76d8\u7a7a\u95f4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6b21\u51fa\u73b0\u5b89\u88c5\u4e0d\u5b8c\u6574\u7684\u60c5\u51b5\uff0c\u4ee5\u81f3\u4e8e\u540e\u9762\u4f7f\u7528 esbuild \u5305\u603b\u662f\u627e\u4e0d\u5230\uff0c\u5176\u5b9e esbuild \u662f vite \u6240\u4f9d\u8d56\u7684\uff0c\u5b89\u88c5 vite \u65f6\u5e94\u8be5\u88c5\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ol"},"Downloading Rust CLI \u4e0b\u8f7d\u7684\u662f rust \u7248\u672c\u7684 tauri-cli\uff0c\u4f1a\u628a\u8fd9\u4e2a\u547d\u4ee4\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules/@tauri-apps/cli/bin/")," \u4e0b\u9762\uff0c\u662f\u4ece github \u4e0a\u4e0b\u8f7d\u7684\uff0c\u51c6\u5907\u597d\u79d1\u5b66\u4e0a\u7f51\uff0c\u4e00\u65e6\u6210\u529f\u6700\u597d\u4fdd\u5b58\u597d\u3002\u4f46 yarn \u5c31\u653e\u5fc3\u5427\uff0c\u4ee5\u540e\u7528\u7684\u90fd\u662f\u8f6f\u8fde\u63a5\uff0c\u4e0d\u4f1a\u518d\u91cd\u590d\u4e0b\u8f7d\u4e86\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"$ tauri init --app-name demo --window-title demo --dist-dir ../dist --dev-path http://localhost:3000 --ci")," \u4f1a\u521b\u5efa src-tauri \u6587\u4ef6\u5939\u3002")),(0,l.kt)("h3",{id:"\u9879\u76ee\u8fd0\u884c"},"\u9879\u76ee\u8fd0\u884c"),(0,l.kt)("p",null,"\u9879\u76ee\u521b\u5efa\u6210\u529f\u540e\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff0c\u987a\u5229\u7684\u8bdd\u5c31\u76f4\u63a5\u770b\u5230 VUE \u7684\u754c\u9762\u4e86\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn: ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn tauri dev")),(0,l.kt)("li",{parentName:"ul"},"npm: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm run tauri dev"))),(0,l.kt)("p",null,"\u8fc7\u7a0b\u6709\u8fd9\u4e48\u51e0\u6b65\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"tauri-cli tauri dev"),": \u6267\u884c rust \u547d\u4ee4 tauri-cli"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 vite \u7f16\u8bd1\u548c\u6253\u5305 vue \u524d\u7aef\uff0cserver\uff1ahttp://localhost:3000/"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5fc5\u8981\u7684 rust \u4f9d\u8d56\u5305\uff0c\u5e76\u7f16\u8bd1\uff0c\u8fd9\u4e2a\u89c4\u6a21\u8fd8\u633a\u5927\uff0c\u622a\u56fe\u770b\u4e00\u4e0b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  ......\n       Fetch [=================>       ]  73.50%, (65264/114324) resolving deltas\n  ......\n  Downloaded cfg_aliases v0.1.1 (registry `sjtu`)\n  Downloaded chrono v0.4.19 (registry `sjtu`)\n  Downloaded cocoa v0.24.0 (registry `sjtu`)\n  Downloaded cocoa-foundation v0.1.0 (registry `sjtu`)\n  Downloaded bstr v0.2.17 (registry `sjtu`)\n  Downloaded constant_time_eq v0.1.5 (registry `sjtu`)\n  Downloaded 213 crates (9.8 MB) in 16.11s\n   Compiling libc v0.2.113\n   Compiling cfg-if v1.0.0\n   Compiling proc-macro2 v1.0.36\n   Compiling unicode-xid v0.2.2\n   Compiling syn v1.0.86\n")),(0,l.kt)("p",null,"\u4e00\u5207\u987a\u5229\u7684\u8bdd\uff0c\u5c31\u80fd\u770b\u5230\u5c01\u88c5\u6210 APP \u7684 VUE \u4e86\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(582).Z,width:"1824",height:"1468"})),(0,l.kt)("h3",{id:"\u8865\u5145"},"\u8865\u5145"),(0,l.kt)("p",null,"\u987a\u5229\u8fd0\u884c\u4e86 1 \u5929\uff0c\u7a81\u7136\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run tauri dev")," \u7684\u7b2c 1 \u6b65\u62a5\u9519\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Error: failed to get project out directory\n\nCaused by:\n0: failed to parse cargo config file\n1: newline in string found at line 12 column 33\n")),(0,l.kt)("p",null,"\u6211\u4ee5\u4e3a\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"src-tauri/")," \u4e0b\u7684 Cargo.toml \u6216 tauri.conf.json \u88ab\u6211\u4fee\u6539\u574f\u4e86\uff0c\u53cd\u590d\u4fee\u6539\u4e5f\u4e0d\u884c\uff0c\u540e\u6765\u7422\u78e8\u51fa\u6765\u53ef\u80fd\u4e0d\u662f\uff0c\u53bb\u770b\u4e86\u4e00\u773c ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cargo/config"),"\uff0c\u539f\u6765\u88ab\u6211\u6539\u574f\u4e86\uff0c\u54ce\uff01"),(0,l.kt)("h3",{id:"\u8865\u5145-2"},"\u8865\u5145 2"),(0,l.kt)("p",null,"2022 \u5e74 2 \u6708\uff0ctauri \u4ece beta \u5347\u7ea7\u5230 1.0.0-rc.1\uff0cDownload Rust CLI \u6b65\u9aa4\u4e0d\u518d\u4ece github \u4e0a\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u7248\u672c\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u8fde\u5916\u7f51\u4e86\uff0c\u8fdb\u800c\u90fd\u9996\u9009 yarn \u4e86\u3002"))}g.isMDXComponent=!0},582:function(t,e,n){e.Z=n.p+"assets/images/app-b83a44e6125bcad53f4a5af2bb9d0efc.png"},13066:function(t,e,n){e.Z=n.p+"assets/images/icon-ea1758656ef114d264ae3b6bdd11ed63.png"}}]);