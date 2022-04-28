"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[3615],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49446:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],a={title:"git submodule \u64cd\u4f5c",date:"2014-05-05 13:59:46 +8000",authors:"wKevin",categories:["it"],tags:["git","submodule"]},l=void 0,c={permalink:"/blog/2014/05/05/git-submodule",source:"@site/blog/2014-05-05-git-submodule/index.md",title:"git submodule \u64cd\u4f5c",description:"\u5e38\u89c4\u64cd\u4f5c",date:"2014-05-05T13:59:46.000Z",formattedDate:"May 5, 2014",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"submodule",permalink:"/blog/tags/submodule"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"git submodule \u64cd\u4f5c",date:"2014-05-05 13:59:46 +8000",authors:"wKevin",categories:["it"],tags:["git","submodule"]},prevItem:{title:"Sublime Text",permalink:"/blog/2014/05/12/sublimetext"},nextItem:{title:"Free software licenses",permalink:"/blog/2014/05/04/free-software-licenses"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5e38\u89c4\u64cd\u4f5c",id:"\u5e38\u89c4\u64cd\u4f5c",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e38\u89c4\u64cd\u4f5c"},"\u5e38\u89c4\u64cd\u4f5c"),(0,i.kt)("p",null,"\u53d1\u5e03\u8005\uff1a\u7ef4\u62a4\u7236\u9879\u76ee\u4e0e submodule \u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git submodule add https://......\n$ git commit\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u8005\uff1a\u4f7f\u7528\u7236\u9879\u76ee\uff0c\u900f\u660e\u5904\u7406\u6216\u66f4\u65b0 submodule\uff0c\u4f46\u4e0d\u4fee\u6539\u4f9d\u8d56\u5173\u7cfb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/wkevin/iOS.grocery.git\n$ cd iOS.grocery\n$ git submodule init\n$ git submodule update\n")))}f.isMDXComponent=!0}}]);