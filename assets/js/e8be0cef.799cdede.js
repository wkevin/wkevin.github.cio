"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[1102],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return y}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=c(t),y=r,k=m["".concat(s,".").concat(y)]||m[y]||u[y]||i;return t?a.createElement(k,l(l({ref:e},p),{},{components:t})):a.createElement(k,l({ref:e},p))}));function y(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88506:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={title:"python asyncio \u534f\u7a0b\u5e93\u4e00\u9875\u7eb8\u8bf4\u660e",date:"2021-01-17 18:45:38 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["python","asyncio"]},s=void 0,c={permalink:"/blog/2021/01/17/python.asyncio",source:"@site/blog/2021-01-17-python.asyncio/index.md",title:"python asyncio \u534f\u7a0b\u5e93\u4e00\u9875\u7eb8\u8bf4\u660e",description:" ",date:"2021-01-17T18:45:38.000Z",formattedDate:"January 17, 2021",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"asyncio",permalink:"/blog/tags/asyncio"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"python asyncio \u534f\u7a0b\u5e93\u4e00\u9875\u7eb8\u8bf4\u660e",date:"2021-01-17 18:45:38 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["python","asyncio"]},prevItem:{title:"Python \u76f8\u5bf9\u5f15\u7528\u5bfc\u5165",permalink:"/blog/2021/02/10/python.elative.import"},nextItem:{title:"Python \u4e2d import \u5f15\u5165\u548c file \u5bfb\u627e\u7684\u7edd\u5bf9\u548c\u76f8\u5bf9\u8def\u5f84",permalink:"/blog/2021/01/03/python.relevate.import"}},p={authorsImageUrls:[void 0]},u=[{value:"\u5b9a\u4e49\u534f\u7a0b",id:"\u5b9a\u4e49\u534f\u7a0b",level:2},{value:"await \u963b\u585e\u5f0f\u8c03\u7528\u534f\u7a0b",id:"await-\u963b\u585e\u5f0f\u8c03\u7528\u534f\u7a0b",level:2},{value:"task \u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u534f\u7a0b",id:"task-\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u534f\u7a0b",level:2},{value:"\u6280\u672f\u603b\u7ed3",id:"\u6280\u672f\u603b\u7ed3",level:2}],m={toc:u};function y(n){var e=n.components,t=(0,r.Z)(n,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"asyncio \u662f python \u529b\u63a8\u591a\u5e74\u7684\u643a\u7a0b\u5e93\uff0c\u4e0e\u5176 \u7ebf\u7a0b\u5e93 \u76f8\u5f97\u76ca\u5f70\uff0c\u66f4\u8f7b\u91cf\uff0c\u5e76\u4e14\u534f\u7a0b\u53ef\u4ee5\u8bbf\u95ee\u540c\u4e00\u8fdb\u7a0b\u4e2d\u7684\u53d8\u91cf\uff0c\u4e0d\u9700\u8981\u8fdb\u7a0b\u95f4\u901a\u4fe1\u6765\u4f20\u9012\u6570\u636e\uff0c\u6240\u4ee5\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u987a\u624b\u3002"),(0,i.kt)("p",null,"asyncio \u5b98\u65b9\u6587\u6863\u5199\u7684\u975e\u5e38\u7b80\u7ec3\u548c\u6709\u6548\uff0c\u534a\u5c0f\u65f6\u5185\u53ef\u4ee5\u5b66\u4e60\u548c\u6d4b\u8bd5\u5b8c\uff0c\u4e0b\u9762\u4e3a\u6211\u7684\u4e00\u6bb5 HelloWrold\uff0c\u611f\u89c9\u53ef\u4ee5\u66f4\u5feb\u901f\u7684\u5e2e\u4f60\u8ba4\u8bc6 ",(0,i.kt)("strong",{parentName:"p"},"\u534f\u7a0b"),"\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u534f\u7a0b"},"\u5b9a\u4e49\u534f\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport time\n\n\nasync def say_after(delay, what):\n    await asyncio.sleep(delay)\n    print(what)\n\n")),(0,i.kt)("p",null,"async \u5173\u952e\u5b57\u7528\u6765\u58f0\u660e\u4e00\u4e2a\u534f\u7a0b\u51fd\u6570\uff0c\u8fd9\u79cd\u51fd\u6570\u4e0d\u80fd\u76f4\u63a5\u8c03\u7528\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u6b63\u786e\u7684\u8c03\u7528\u59ff\u52bf\u6709\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"await \u534f\u7a0b()")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"await asyncio.gather(\u534f\u7a0b1()\uff0c \u534f\u7a0b2())")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"await asyncio.waite([\u534f\u7a0b1()\uff0c \u534f\u7a0b2()])")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"asyncio.create_task(\u534f\u7a0b())"))),(0,i.kt)("h2",{id:"await-\u963b\u585e\u5f0f\u8c03\u7528\u534f\u7a0b"},"await \u963b\u585e\u5f0f\u8c03\u7528\u534f\u7a0b"),(0,i.kt)("p",null,"\u5148\u6765\u6d4b\u8bd5\u524d 3 \u79cd await \u7684\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nasync def main1():\n    # \u76f4\u63a5 await\uff0c\u987a\u5e8f\u6267\u884c\n    await say_after(2, "2s")\n    await say_after(1, "1s")\n\n\nasync def main2():\n    # \u4f7f\u7528 gather\uff0c\u5e76\u53d1\u6267\u884c\n    await asyncio.gather(say_after(2, "2s"), say_after(1, "1s"))\n\n\nasync def main3():\n    # \u4f7f\u7528 wait\uff0c\u7b80\u5355\u7b49\u5f85\n    # 3.8 \u7248\u540e\u5df2\u5e9f\u5f03: \u5982\u679c aws \u4e2d\u7684\u67d0\u4e2a\u53ef\u7b49\u5f85\u5bf9\u8c61\u4e3a\u534f\u7a0b\uff0c\u5b83\u5c06\u81ea\u52a8\u4f5c\u4e3a\u4efb\u52a1\u52a0\u5165\u65e5\u7a0b\u3002\u76f4\u63a5\u5411 wait() \u4f20\u5165\u534f\u7a0b\u5bf9\u8c61\u5df2\u5f03\u7528\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u5bfc\u81f4 \u4ee4\u4eba\u8ff7\u60d1\u7684\u884c\u4e3a\u3002\n    # 3.10 \u7248\u540e\u79fb\u9664\n    await asyncio.wait([say_after(2, "2s"), say_after(1, "1s")])\n')),(0,i.kt)("p",null,"python \u89c4\u5b9a\uff1a \u8c03\u7528\u534f\u7a0b\u53ef\u4ee5\u7528 await\uff0c\u4f46 await \u5fc5\u987b\u5728\u53e6\u4e00\u4e2a\u534f\u7a0b\u4e2d \u2014\u2014 \u8fd9\u4e0d\u6b7b\u5faa\u73af\u4e86\uff1f\u4e0d\u4f1a\u7684\uff0casyncio \u63d0\u4f9b\u4e86\u591a\u4e2a\u80fd\u591f\u6700\u521d\u8c03\u7528\u534f\u7a0b\u7684\u5165\u53e3\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"asyncio.get_event_loop().run_until_complete(\u534f\u7a0b)")," \uff1a \u8fd9\u79cd\u65b9\u5f0f\u80cc\u540e\u4f7f\u7528\u4e86 asyncio \u5e95\u5c42\u7684\u5bf9\u8c61\uff1a\u7ebf\u7a0b\u6c60 loop\uff0cloop \u53ef\u4ee5\u53cd\u590d\u5229\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"asyncio.run(\u534f\u7a0b)"),"\uff1arun \u51fd\u6570\u662f python 3.7 \u540e\u65b0\u589e\u7684\uff0c\u662f\u5bf9 loop \u7684\u5c01\u88c5\uff0c\u4f46\u6bcf\u6b21\u4f1a\u5bf9 loop.close()\uff0c\u6240\u4ee5\u53cd\u590d\u4f7f\u7528\u4f1a\u6027\u80fd\u53d7\u5f71\u54cd\uff0c\u6587\u6863\u91cc\u4e5f\u8bf4\u9002\u5408\u505a\u603b\u5165\u53e3\u3002")),(0,i.kt)("p",null,"\u5c01\u88c5\u4e00\u4e2a\u8ba1\u7b97\u65f6\u95f4\u7684\u51fd\u6570\uff0c\u7136\u540e\u628a 2 \u79cd\u65b9\u5f0f\u90fd\u8bd5\u4e00\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def runtime(entry, func):\n    print("-" * 10 + func.__name__)\n    start = time.perf_counter()\n    entry(func())\n    print("=" * 10 + "{:.5f}".format(time.perf_counter() - start))\n\nprint("########### \u7528 loop \u5165\u53e3\u534f\u7a0b ###########")\n\nloop = asyncio.get_event_loop()\nruntime(loop.run_until_complete, main1)\nruntime(loop.run_until_complete, main2)\nruntime(loop.run_until_complete, main3)\nloop.close()\n\nprint("########### \u7528 run \u5165\u53e3\u534f\u7a0b ###########")\n\nruntime(asyncio.run, main1)\nruntime(asyncio.run, main2)\nruntime(asyncio.run, main3)\n')),(0,i.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"########### \u7528 loop \u5165\u53e3\u534f\u7a0b ###########\n----------main1\n2s\n1s\n==========3.00923\n----------main2\n1s\n2s\n==========2.00600\n----------main3\n1s\n2s\n==========2.00612\n########### \u7528 run \u5165\u53e3\u534f\u7a0b ###########\n----------main1\n2s\n1s\n==========3.01193\n----------main2\n1s\n2s\n==========2.00681\n----------main3\n1s\n2s\n==========2.00592\n")),(0,i.kt)("p",null,"\u53ef\u89c1\uff0c2 \u79cd\u534f\u7a0b\u5165\u53e3\u8c03\u7528\u65b9\u5f0f\u5dee\u522b\u4e0d\u5927"),(0,i.kt)("p",null,"\u4e0b\u9762\uff0c\u9700\u8981\u660e\u786e 2 \u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u534f\u7a0b\u95f4\u7684\u5e76\u53d1\u95ee\u9898"),"\uff1a\u9664\u4e86 main1 \u8017\u65f6 3s \u5916\uff0c\u5176\u4ed6\u90fd\u662f 2s\uff0c\u8bf4\u660e main1 \u65b9\u5f0f\u4e32\u884c\u6267\u884c 2 \u4e2a\u534f\u7a0b\uff0c\u5176\u4ed6\u662f\u5e76\u53d1\u6267\u884c\u534f\u7a0b\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u534f\u7a0b\u662f\u5426\u963b\u585e\u7236\u534f\u7a0b/\u7236\u8fdb\u7a0b\u7684\u95ee\u9898"),"\uff1a\u4e0a\u8ff0\u6d4b\u8bd5\u90fd\u4f7f\u7528\u4e86 await\uff0c\u5373\u7b49\u5f85\u534f\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e\u518d\u7ee7\u7eed\u5f80\u4e0b\u8d70\uff0c\u6240\u4ee5\u90fd\u662f\u963b\u585e\u5f0f\u7684\uff0c\u4e3b\u8fdb\u7a0b\u90fd\u5728\u6b64\u7b49\u5f85\u534f\u7a0b\u7684\u6267\u884c\u5b8c\u3002\u2014\u2014 \u90a3\u4e48\u5982\u4f55\u624d\u80fd\u4e0d\u963b\u585e\u7236\u534f\u7a0b\u5462\uff1f \u4e0d\u52a0 await \u884c\u4e48\uff1f \u2014\u2014 \u4e0a\u9762 3 \u79cd\u65b9\u5f0f\u90fd\u4e0d\u884c\uff01")),(0,i.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u53ef\u4ee5\u4e0d\u963b\u585e\u4e3b\u534f\u7a0b\u7684\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"task-\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u534f\u7a0b"},"task \u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u534f\u7a0b"),(0,i.kt)("p",null,"\u4e00\u5207\u90fd\u5728\u4ee3\u7801\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\n# \u9a8c\u8bc1 task \u542f\u52a8\u534f\u7a0b\u662f\u7acb\u5373\u6267\u884c\u7684\nasync def main4():\n    # create_task() Python 3.7 \u4e2d\u88ab\u52a0\u5165\n    task1 = asyncio.create_task(say_after(2, "2s"))\n    task2 = asyncio.create_task(say_after(1, "1s"))\n    # \u521b\u5efa\u4efb\u52a1\u540e\u4f1a\u7acb\u5373\u5f00\u59cb\u6267\u884c\uff0c\u540e\u7eed\u53ef\u4ee5\u7528 await \u6765\u7b49\u5f85\u5176\u5b8c\u6210\u540e\u518d\u7ee7\u7eed\uff0c\u4e5f\u53ef\u4ee5\u88ab cancle\n    await task1  # \u7b49\u5f85 task1 \u6267\u884c\u5b8c\uff0c\u5176\u5b9e\u8fd4\u56de\u65f6 2 \u4e2atask \u90fd\u5df2\u7ecf\u6267\u884c\u5b8c\n    print("--")  # \u6700\u540e\u624d\u4f1a\u88ab\u6253\u5370\uff0c\u56e0\u4e3a 2 \u4e2atask \u90fd\u5df2\u7ecf\u6267\u884c\u5b8c\n    await task2\n    # \u8fd9\u91cc\u662f\u7b49\u5f85\u6240\u6709 task \u7ed3\u675f\u624d\u7ee7\u7eed\u8fd0\u884c\u3002\n\n\n# \u9a8c\u8bc1\u7236\u534f\u7a0b\u4e0e\u5b50\u534f\u7a0b\u7684\u5173\u95ed\u5173\u7cfb\nasync def main5():\n    task1 = asyncio.create_task(say_after(2, "2s"))\n    task2 = asyncio.create_task(say_after(1, "1s"))\n    # \u5982\u679c\u4e0d\u7b49\u5f85\uff0c\u51fd\u6570\u4f1a\u76f4\u63a5 return\uff0cmain5 \u534f\u7a0b\u7ed3\u675f\uff0ctask1/2 \u5b50\u534f\u7a0b\u4e5f\u7ed3\u675f\uff0c\u6240\u4ee5\u770b\u4e0d\u5230\u6253\u5370\n    # \u6b64\u5904\u7b49\u5f85 1s\uff0c\u5219\u4f1a\u53ea\u770b\u5230 1 \u4e2a\uff0c\u7b49\u5f85 >2s\uff0c\u5219\u4f1a\u770b\u5230 2 \u4e2a task \u7684\u6253\u5370\n    await asyncio.sleep(2)\n\n\n# python3.8 \u540e python \u4e3a asyncio \u7684 task \u589e\u52a0\u4e86\u5f88\u591a\u529f\u80fd\uff1a\n# get/set name\u3001\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684 task\u3001cancel \u529f\u80fd\n# \u9a8c\u8bc1 task \u7684 cancel() \u529f\u80fd\nasync def cancel_me(t):\n    # \u5b9a\u4e49\u4e00\u4e2a\u53ef\u5904\u7406 CancelledError \u7684\u534f\u7a0b\n    print("cancel_me(): before sleep")\n    try:\n        await asyncio.sleep(t)\n    except asyncio.CancelledError:\n        print("cancel_me(): cancel sleep")\n        raise\n    finally:\n        print("cancel_me(): after sleep")\n    return "I hate be canceled"\n\n\nasync def main6():\n    async def test(t1, t2):\n        task = asyncio.create_task(cancel_me(t1))\n        await asyncio.sleep(t2)\n        task.cancel()  # \u4f1a\u5728 task \u5185\u5f15\u53d1\u4e00\u4e2a CancelledError\n        try:\n            await task\n        except asyncio.CancelledError:\n            print("main(): cancel_me is cancelled now")\n        try:\n            print(task.result())\n        except asyncio.CancelledError:\n            print("main(): cancel_me is cancelled now")\n\n    # \u8ba9\u5176\u8fd0\u884c2s\uff0c\u4f46\u57281s\u65f6 cancel \u5b83\n    await test(2, 1)  # await \u548c result \u65f6\u90fd\u4f1a\u5f15\u53d1 CancelledError\n    await test(1, 2)  # await \u548c result \u65f6\u4e0d\u4f1a\u5f15\u53d1\uff0c\u5e76\u4e14 result \u4f1a\u5f97\u5230\u51fd\u6570\u7684\u8fd4\u56de\u503c\n\nruntime(asyncio.run, main4)\nruntime(asyncio.run, main5)\nruntime(asyncio.run, main6)\n')),(0,i.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"----------main4\n1s\n2s\n--\n==========2.00557\n----------main5\n1s\n2s\n==========3.00160\n----------main6\ncancel_me(): before sleep\ncancel_me(): cancel sleep\ncancel_me(): after sleep\nmain(): cancel_me is cancelled now\nmain(): cancel_me is cancelled now\ncancel_me(): before sleep\ncancel_me(): after sleep\nI hate be canceled\n==========3.00924\n")),(0,i.kt)("h2",{id:"\u6280\u672f\u603b\u7ed3"},"\u6280\u672f\u603b\u7ed3"),(0,i.kt)("p",null,"\u7ec6\u8282\u90fd\u5728\u6ce8\u91ca\u91cc\u76f4\u63a5\u63cf\u8ff0\u4e86\uff0c\u603b\u7ed3\u4e00\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"await \u4f1a\u963b\u585e\u4e3b\u534f\u7a0b\uff0c\u7b49\u5f85\u5b50\u534f\u7a0b\u5b8c\u6210"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"await asyncio.gather/wait()")," \u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a\u5b50\u534f\u7a0b\u7684\u5e76\u53d1\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"await \u672c\u8eab\u8981\u5728\u534f\u7a0b\u4e2d\u6267\u884c\uff0c\u5373\u5728\u7236\u534f\u7a0b\u4e2d\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asyncio.get_event_loop().run_until_complete()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"asyncio.run()")," \u53ef\u4f5c\u4e3a\u6700\u521d\u7684\u534f\u7a0b\u5f00\u59cb\u5165\u53e3"),(0,i.kt)("li",{parentName:"ul"},"task \u662f\u6700\u65b0\u3001\u6700\u63a8\u8350\u7684\u534f\u7a0b\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5b8c\u6210\u963b\u585e\u3001\u975e\u963b\u585e\uff0c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"task = asyncio.create_task(\u534f\u7a0b)")," \u540e\u76f4\u63a5\u5f00\u59cb\u6267\u884c\u4e86\uff0c\u5e76\u4e0d\u4f1a\u7b49\u5f85\u5176\u4ed6\u6307\u4ee4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"await task")," \u662f\u963b\u585e\u5f0f\uff0c\u7b49\u5f85 task \u6267\u884c\u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d await\uff0c\u975e\u963b\u585e\uff0c\u4f46\u8981\u6b64\u65f6\u7236\u534f\u7a0b\u4e0d\u80fd\u9000\u51fa\uff0c\u5426\u5219 task \u4f5c\u4e3a\u5b50\u534f\u7a0b\u4e5f\u88ab\u9000\u51fa"),(0,i.kt)("li",{parentName:"ul"},"task \u53ef ",(0,i.kt)("inlineCode",{parentName:"li"},"cancel()")," \u53d6\u6d88\u529f\u80fd\uff0c\u53ef ",(0,i.kt)("inlineCode",{parentName:"li"},"result()")," \u83b7\u53d6\u5b50\u534f\u7a0b\u7684\u8fd4\u56de\u503c")))))}y.isMDXComponent=!0}}]);