"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[3953],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(n),s=a,k=d["".concat(i,".").concat(s)]||d[s]||c[s]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83978:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={title:"\u5982\u4f55\u521b\u5efa\u72ec\u7acb\u6587\u4ef6\u7684PDF\u6ce8\u91ca/\u6807\u6ce8",date:"2019-09-19 14:35:45 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["PDF","Xournal++"]},i=void 0,u={permalink:"/blog/2019/09/19/pdf.annotation",source:"@site/blog/2019-09-19-pdf.annotation/index.md",title:"\u5982\u4f55\u521b\u5efa\u72ec\u7acb\u6587\u4ef6\u7684PDF\u6ce8\u91ca/\u6807\u6ce8",description:" ",date:"2019-09-19T14:35:45.000Z",formattedDate:"September 19, 2019",tags:[{label:"PDF",permalink:"/blog/tags/pdf"},{label:"Xournal++",permalink:"/blog/tags/xournal"}],truncated:!0,authors:[{name:"Kevin Wang",title:"ZTEr",url:"http://wkevin.github.io/",imageURL:"/img/avastar/angry.bird.jpg",key:"wKevin"}],frontMatter:{title:"\u5982\u4f55\u521b\u5efa\u72ec\u7acb\u6587\u4ef6\u7684PDF\u6ce8\u91ca/\u6807\u6ce8",date:"2019-09-19 14:35:45 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["PDF","Xournal++"]},prevItem:{title:"\u654f\u6377\u4e66\u8c31",permalink:"/blog/2019/09/20/agile.book.map"},nextItem:{title:"set,env,export,declare \u662f\u5982\u4f55\u64cd\u4f5cshell\u53d8\u91cf\u7684",permalink:"/blog/2019/09/17/shell.var"}},m={authorsImageUrls:[void 0]},c=[],d={toc:c};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b57\u5e55\u6587\u4ef6\u901a\u5e38\u4e0d\u5d4c\u5165\u89c6\u9891\u6587\u4ef6\uff0c\u72ec\u7acb\u7684\u5b57\u5e55\u6587\u4ef6\u5229\u4e8e\uff1a\u5b58\u50a8\u3001\u4fee\u6539\u3001\u5206\u4eab\u3001\u591a\u683c\u5f0f\u3001\u591a\u7f16\u7801\u2026\u2026"),(0,l.kt)("p",null,"\u5728\u4e66\u7c4d\u4e0a\u76f4\u63a5\u6807\u6ce8\uff08Annotation\uff09\u6216\u6ce8\u91ca\uff08commention\uff09\uff0c\u5373\u5185\u5d4c\u4e3a\u4e66\u7c4d\u7684\u5143\u6570\u636e\uff08meta data\uff09\uff0c\u4e0d\u4f46\u7834\u574f\u4e86\u539f\u4e66\uff0c\u5e72\u6270\u4e86\u8bfb\u8005\uff0c\u4e5f\u4e0d\u5229\u4e8e\u4fee\u6539\u3001\u5206\u4eab\u3001\u5c24\u5176\u662f\u5408\u5e76\uff0c\u591a\u4eba\u7684\u6807\u6ce8\u80fd\u591f\u5408\u5e76\u3001\u4fee\u8ba2\u2026\u2026\u8fd9\u624d\u662f\u6211\u4eec\u60f3\u8981\u7684\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9\u4e0d\u540c\u683c\u5f0f pdf\uff08azw\u3001epub\u2026\u2026\u5bb9\u6211\u4ee5\u540e\u518d\u7814\u7a76\u7814\u7a76\uff09\u6709\u4e0d\u540c\u7684\u8f6f\u4ef6\u53ef\u4ee5\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u6b64\u5904\u5217\u4e3e\u51e0\u4e2a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"APP"),(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u91ca\u6587\u4ef6\u683c\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u51b3\u7b56"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Acrobat PDF Reader"),(0,l.kt)("td",{parentName:"tr",align:null},"Win/Linux/macOS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u8d39"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u653e\u5f03\uff01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Foxit Reader"),(0,l.kt)("td",{parentName:"tr",align:null},"Win/Linux/macOS"),(0,l.kt)("td",{parentName:"tr",align:null},".fdf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.foxitsoftware.com/blog/using-comments-data-import-and-export/"},"\u5bfc\u5165\u5bfc\u51fa\u65b9\u6cd5"),"\u6bd4\u8f83\u7e41\u7410",(0,l.kt)("br",null),"Linux \u7248\u6ca1\u6709\u6b64\u529f\u80fd"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u653e\u5f03\uff01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mendeley"),(0,l.kt)("td",{parentName:"tr",align:null},"Win/Linux/macOS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u6587\u4ef6\u4fdd\u5b58\u5728 Mendely \u7684\u670d\u52a1\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u653e\u5f03\uff01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://sourceforge.net/projects/skim-app/"},"Skim")),(0,l.kt)("td",{parentName:"tr",align:null},"macOS"),(0,l.kt)("td",{parentName:"tr",align:null},".skim"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u80fd\u7528\u4e8e macOS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u653e\u5f03\uff01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://xournal.sourceforge.net/"},"Xournal"),"\u3001",(0,l.kt)("a",{parentName:"td",href:"https://github.com/xournalpp/xournalpp"},"Xournal++")),(0,l.kt)("td",{parentName:"tr",align:null},"Win/Linux/macOS"),(0,l.kt)("td",{parentName:"tr",align:null},".xopp"),(0,l.kt)("td",{parentName:"tr",align:null},"Xournal++ \u662f Xournal \u7684 C++ \u91cd\u5199\u5347\u7ea7\u7248"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u63a8\u8350\uff01"))))),(0,l.kt)("p",null,"Xournal++ \u540c\u65f6\u8fd8\u6709\u5176\u4ed6\u975e\u5e38\u4f18\u79c0\u7684\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Github \u5f00\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u7684\u521b\u5efa\u3001\u590d\u5236\u3001\u5220\u9664\u4e00\u9875 PDF"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u5176\u5b9e\u9996\u5148\u662f\u4e2a\u753b\u677f\uff0c\u53ef\u4ee5\u7528\u4e8e\u9f20\u6807\u3001\u753b\u7b14\u7b49\u624b\u5de5\u7ed8\u56fe\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/xournalpp/xournalpp/releases"},"https://github.com/xournalpp/xournalpp/releases")),(0,l.kt)("li",{parentName:"ul"},"Ubuntu \u4e5f\u53ef\u4ee5 apt \u5b89\u88c5")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:andreasbutti/xournalpp-master\nsudo apt update\nsudo apt install xournalpp\n")))}s.isMDXComponent=!0}}]);