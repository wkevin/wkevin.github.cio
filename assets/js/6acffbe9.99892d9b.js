"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[9614],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(n),v=a,d=k["".concat(o,".").concat(v)]||k[v]||c[v]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"\u5230\u5e95\u7528\u54ea\u4e2a\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee",description:"how.to.create.vite.project",authors:"wKevin",tags:["vite"]},o=void 0,u={permalink:"/blog/2022/08/25/how.to.create.vite.project",source:"@site/blog/2022-08-25-how.to.create.vite.project/index.mdx",title:"\u5230\u5e95\u7528\u54ea\u4e2a\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee",description:"how.to.create.vite.project",date:"2022-08-25T00:00:00.000Z",formattedDate:"August 25, 2022",tags:[{label:"vite",permalink:"/blog/tags/vite"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"\u5230\u5e95\u7528\u54ea\u4e2a\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee",description:"how.to.create.vite.project",authors:"wKevin",tags:["vite"]},prevItem:{title:"Vue Router \u4e2d\u7684\u51e0\u4e2a\u6982\u5ff5",permalink:"/blog/2022/09/07/vue.route"},nextItem:{title:"Rust \u5f00\u6e90\u4e66",permalink:"/blog/2022/08/13/rust.resource"}},m={authorsImageUrls:[void 0]},c=[{value:"npx \u907f\u514d\u4e86\u672c\u5730\u5168\u5c40\u5b89\u88c5",id:"npx-\u907f\u514d\u4e86\u672c\u5730\u5168\u5c40\u5b89\u88c5",level:2},{value:"npm init \u662f\u4e2a\u5c01\u88c5",id:"npm-init-\u662f\u4e2a\u5c01\u88c5",level:2},{value:"npm create \u662f\u522b\u540d",id:"npm-create-\u662f\u522b\u540d",level:2},{value:"vite \u811a\u624b\u67b6\u53ea\u521b\u5efa\u4e86\u57fa\u7840",id:"vite-\u811a\u624b\u67b6\u53ea\u521b\u5efa\u4e86\u57fa\u7840",level:2},{value:"\u6700\u540e",id:"\u6700\u540e",level:2}],k={toc:c};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u81ea\u4ece vite \u88ab vue \u5b98\u65b9\u66ff\u4ee3\u4e86 vue-cli(webpack) \u7528\u6765\u521b\u5efa vue \u9879\u76ee\u4e4b\u540e\uff0c\u5148\u540e\u51fa\u73b0\u4e86\u51e0\u4e2a\u5de5\u5177\uff08\u5c01\u88c5\uff09\u6765\u4f5c\u4e3a\u521b\u5efa\u9879\u76ee\u7684\u811a\u624b\u67b6\uff0c\u5404\u79cd blog \u4e2d\u4f1a\u641c\u5230\u5404\u4e2a\u5386\u53f2\u65f6\u671f\u7684\u7528\u6cd5\uff0c\u548c\u5404\u79cd\u53d8\u6362\u7528\u6cd5\uff0c\u6211\u6765\u6574\u7406\u4e00\u4e0b\uff0c\u56e0\u4e3a\u641c\u5230\u4e86\u5e9f\u5f03\u7684\u7528\u6cd5\u8fd8\u4e0d\u5c0f\u5fc3\u7528\u4e86\u8d77\u6765\uff0c\u8fd8\u633a\u70e6\u4eba\u7684\u3002"),(0,i.kt)("p",null,"\u4e0b\u8868\u4e2d\u6bcf\u79cd\u811a\u624b\u67b6\u7684 3 \u79cd\u4f7f\u7528\u65b9\u5f0f\u6548\u679c\u662f\u7b49\u4ef7\u7684\uff0c\u5148\u8bf4\u7ed3\u8bba\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u7528\u4e0b\u8868\u4e2d\u7684 (4)\u3001(5)\uff0c\u7b49\u6548\u7684"),"\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u811a\u624b\u67b6"),(0,i.kt)("th",{parentName:"tr",align:null},"npm install"),(0,i.kt)("th",{parentName:"tr",align:null},"npx"),(0,i.kt)("th",{parentName:"tr",align:null},"npm init"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.npmmirror.com/package/create-vite-app"},"create-vite-app"),(0,i.kt)("br",null),"(\u5df2\u5e9f\u5f03)"),(0,i.kt)("td",{parentName:"tr",align:null},"(1)",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"npm install -g create-vite-app"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"create-vite-app my-project")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npx create-vite-app")),(0,i.kt)("td",{parentName:"tr",align:null},"(2)",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"npm init vite-app my-project"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"cd my-project"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"npm i"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.npmmirror.com/package/%40vitejs%2Fcreate-app"},"@vitejs/create-app"),(0,i.kt)("br",null),"(\u5df2\u5e9f\u5f03)"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npx @vitejs/create-app")),(0,i.kt)("td",{parentName:"tr",align:null},"(3)",(0,i.kt)("inlineCode",{parentName:"td"},"npm init @vitejs/app"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.npmmirror.com/package/create-vite"},"create-vite"),(0,i.kt)("br",null),"(",(0,i.kt)("strong",{parentName:"td"},"\u5b98\u65b9\u63a8\u8350"),")"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npx create-vite")),(0,i.kt)("td",{parentName:"tr",align:null},"(4)",(0,i.kt)("inlineCode",{parentName:"td"},"npm init vite@latest"),(0,i.kt)("br",null),"(5)",(0,i.kt)("inlineCode",{parentName:"td"},"npm create vite@latest"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create-vite-app \u5df2\u5e9f\u5f03\u591a\u5e74\uff0c\u7528\u5b83\u521b\u5efa\u7684\u9879\u76ee\u8fd8\u5728\u7528 vit 1.x \u7684\u7248\u672c\uff0c\u73b0\u5728\u5df2\u7ed3 3.x \u4e86\u3002\u5176\u5b98\u65b9 README \u4e2d\u5199\u7684\u7528\u6cd5\u662f (2)\uff0c\u4f46\u5f88\u591a blog \u4e2d\u7528\u7684\u662f (1)\u3002"),(0,i.kt)("li",{parentName:"ul"},"@vitejs/create-app \u770b\u540d\u5b57\u662f\u5b98\u65b9\u7684\uff0c\u4f46\u4e5f\u4e8e 2021 \u5e74\u5e9f\u5f03\uff0c\u5e94\u8be5\u662f\u7528\u4e86\u4e0d\u77ed\u7684\u65f6\u95f4\uff0c\u5f88\u591a blog \u90fd\u5728\u4f7f\u7528 (3) \u7684\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee\u3002"),(0,i.kt)("li",{parentName:"ul"},"create-vite \u662f\u73b0\u884c\u5b98\u65b9\u63a8\u8350\uff0cREADME \u4e2d\u5199\u7684\u662f\u65b9\u6cd5 (5)\uff0c\u4f46\u4e00\u4e9b blog \u5c31\u662f\u5199 (4)\uff0c\u53ef\u80fd\u662f\u4e3a\u4e86\u5c55\u793a\u4e00\u4e0b\u81ea\u5df1\u6307\u5bfc npm create \u662f npm init \u7684\u522b\u540d\u5427\u3002")),(0,i.kt)("h2",{id:"npx-\u907f\u514d\u4e86\u672c\u5730\u5168\u5c40\u5b89\u88c5"},"npx \u907f\u514d\u4e86\u672c\u5730\u5168\u5c40\u5b89\u88c5"),(0,i.kt)("p",null,"\u811a\u624b\u67b6\u90fd\u53ef\u4ee5\u7528 npx \u6267\u884c\uff0c\u5e76\u4e14\u63a8\u8350\u7528 npx \u6267\u884c\uff0c\u4f46\u53ea\u6709 create-vite-app \u8fd8\u521b\u5efa\u4e86\u547d\u4ee4\u884c\u5165\u53e3\uff0c\u6240\u4ee5\u53ef\u4ee5 shell \u542f\u52a8\u3002"),(0,i.kt)("h2",{id:"npm-init-\u662f\u4e2a\u5c01\u88c5"},"npm init \u662f\u4e2a\u5c01\u88c5"),(0,i.kt)("p",null,"\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a npx \u547d\u4ee4\uff0c\u8f6c\u6362\u89c4\u5219\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"npm init foo -> npx create-foo"),(0,i.kt)("li",{parentName:"ul"},"npm init @usr/foo -> npx @usr/create-foo"),(0,i.kt)("li",{parentName:"ul"},"npm init @usr -> npx @usr/create")),(0,i.kt)("h2",{id:"npm-create-\u662f\u522b\u540d"},"npm create \u662f\u522b\u540d"),(0,i.kt)("p",null,"2018.4 npm v6 \u4e2d\u53d1\u5e03\uff1anpm create \u662f npm init \u7684\u522b\u540d\u3002"),(0,i.kt)("h2",{id:"vite-\u811a\u624b\u67b6\u53ea\u521b\u5efa\u4e86\u57fa\u7840"},"vite \u811a\u624b\u67b6\u53ea\u521b\u5efa\u4e86\u57fa\u7840"),(0,i.kt)("p",null,"\u4e0a\u9762\u6240\u6709\u811a\u624b\u67b6\u90fd\u662f\u57fa\u4e8e vite \u7684\uff0c\u6240\u4ee5\u521b\u5efa\u7684\u53ea\u6709 vite\uff08\u6253\u5305\u3001\u70ed\u52a0\u8f7d\u3001\u52a8\u6001 server\uff09\uff0c\u5982\u679c\u60f3\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684 web app\uff0c\u8fd8\u9700\u8981\u4f7f\u7528\u66f4\u5927\u7684\u811a\u624b\u67b6\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmmirror.com/package/create-vue"},"create-vue"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm init vue@3")," \u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"npx create-vue@3")),(0,i.kt)("li",{parentName:"ul"},"vite + vue-router + pinia + eslint + prettier + ts..."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmmirror.com/package/vue-cli"},"vue-cli"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g vue-cli"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"vue init <template-name> <project-name>"),"\uff0c\u5176\u4e2d template-name \u6709 webpack\u3001browserify\u2026\u2026"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5df2\u5e9f\u5f03\uff0c2018 \u5e74\u5df2\u505c\u6b62\u5f00\u53d1"))))),(0,i.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,i.kt)("p",null,"3 \u4e2a vite \u811a\u624b\u67b6\uff0c\u52a0\u4e0a 2 \u4e2a vue APP \u811a\u624b\u67b6\uff0c5 \u4e2a\u9879\u76ee\u7684\u5f00\u53d1\u8005\u4e2d\u90fd\u6709 1 \u4e2a\u4eba\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yyx990803"},"yyx990803"),"\uff0c\u5c31\u662f\u5c24\u96e8\u6eaa\uff0c\u5927\u795e\u771f\u662f\u80fd\u6298\u817e\uff0c\u5de5\u5177\u5f00\u53d1\u4e00\u4e2a\u518d\u6765\u4e00\u6253\u7684\u4eba\u3002"))}v.isMDXComponent=!0}}]);