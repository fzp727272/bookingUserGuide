"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=i,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const c={id:"ticket-create",title:"\u65b0\u5efa\u6b21\u5361"},a=void 0,o={unversionedId:"ticket/ticket-create",id:"ticket/ticket-create",title:"\u65b0\u5efa\u6b21\u5361",description:"<iframe",source:"@site/docs/ticket/ticket-create.md",sourceDirName:"ticket",slug:"/ticket/ticket-create",permalink:"/docs/ticket/ticket-create",draft:!1,tags:[],version:"current",frontMatter:{id:"ticket-create",title:"\u65b0\u5efa\u6b21\u5361"},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u4f1a\u5458\u62db\u52df\u548c\u53c2\u4e0e\u8005\u8d2d\u4e70\u7edf\u8ba1",permalink:"/docs/report/report-member"},next:{title:"\u6b21\u5361\u5206\u914d",permalink:"/docs/ticket/ticket-distribute"}},l={},u=[{value:"1.\u70b9\u51fb\u201c\u65b0\u5efa\u6b21\u5361\u201d\u6309\u94ae\u76f4\u63a5\u8df3\u8f6c\u65b0\u5efa\u6b21\u5361\u9875\u9762\uff0c\u8bbe\u7f6e\u6b21\u5361\u7684\u540d\u79f0\u3001\u4f7f\u7528\u8303\u56f4\u7b49\u4fe1\u606f",id:"1\u70b9\u51fb\u65b0\u5efa\u6b21\u5361\u6309\u94ae\u76f4\u63a5\u8df3\u8f6c\u65b0\u5efa\u6b21\u5361\u9875\u9762\u8bbe\u7f6e\u6b21\u5361\u7684\u540d\u79f0\u4f7f\u7528\u8303\u56f4\u7b49\u4fe1\u606f",level:3},{value:"2.\u70b9\u51fb\u5217\u8868\u4e0a\u53ef\u7528\u7684\u6570\u5b57\uff0c\u8fdb\u5165\u6b21\u5361\u7528\u6237\u5217\u8868\uff0c\u53ef\u67e5\u770b\u62e5\u6709\u8be5\u6b21\u5361\u7684\u6240\u6709\u7528\u6237",id:"2\u70b9\u51fb\u5217\u8868\u4e0a\u53ef\u7528\u7684\u6570\u5b57\u8fdb\u5165\u6b21\u5361\u7528\u6237\u5217\u8868\u53ef\u67e5\u770b\u62e5\u6709\u8be5\u6b21\u5361\u7684\u6240\u6709\u7528\u6237",level:3},{value:"3.\u76f4\u63a5\u70b9\u51fb\u5217\u8868\u8fdb\u5165\u6b21\u5361\u8be6\u60c5\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u6b21\u5361\u4fe1\u606f",id:"3\u76f4\u63a5\u70b9\u51fb\u5217\u8868\u8fdb\u5165\u6b21\u5361\u8be6\u60c5\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u6b21\u5361\u4fe1\u606f",level:3}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{height:332,width:600,src:"/video/\u6b21\u5361\u521b\u5efa&\u5206\u914d.mp4",allowTransparency:!0,frameborder:0,allowfullscreen:!0}),(0,i.kt)("h3",{id:"1\u70b9\u51fb\u65b0\u5efa\u6b21\u5361\u6309\u94ae\u76f4\u63a5\u8df3\u8f6c\u65b0\u5efa\u6b21\u5361\u9875\u9762\u8bbe\u7f6e\u6b21\u5361\u7684\u540d\u79f0\u4f7f\u7528\u8303\u56f4\u7b49\u4fe1\u606f"},"1.\u70b9\u51fb\u201c\u65b0\u5efa\u6b21\u5361\u201d\u6309\u94ae\u76f4\u63a5\u8df3\u8f6c\u65b0\u5efa\u6b21\u5361\u9875\u9762\uff0c\u8bbe\u7f6e\u6b21\u5361\u7684\u540d\u79f0\u3001\u4f7f\u7528\u8303\u56f4\u7b49\u4fe1\u606f"),(0,i.kt)("h3",{id:"2\u70b9\u51fb\u5217\u8868\u4e0a\u53ef\u7528\u7684\u6570\u5b57\u8fdb\u5165\u6b21\u5361\u7528\u6237\u5217\u8868\u53ef\u67e5\u770b\u62e5\u6709\u8be5\u6b21\u5361\u7684\u6240\u6709\u7528\u6237"},"2.\u70b9\u51fb\u5217\u8868\u4e0a\u53ef\u7528\u7684\u6570\u5b57\uff0c\u8fdb\u5165\u6b21\u5361\u7528\u6237\u5217\u8868\uff0c\u53ef\u67e5\u770b\u62e5\u6709\u8be5\u6b21\u5361\u7684\u6240\u6709\u7528\u6237"),(0,i.kt)("img",{src:"/img/ticket/ticket-create_1.png",className:"normalImg"}),(0,i.kt)("h3",{id:"3\u76f4\u63a5\u70b9\u51fb\u5217\u8868\u8fdb\u5165\u6b21\u5361\u8be6\u60c5\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u6b21\u5361\u4fe1\u606f"},"3.\u76f4\u63a5\u70b9\u51fb\u5217\u8868\u8fdb\u5165\u6b21\u5361\u8be6\u60c5\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u6b21\u5361\u4fe1\u606f"),(0,i.kt)("img",{src:"/img/ticket/ticket-create_2.png",className:"normalImg"}),"\u6b21\u5361\u540d\u79f0\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u4e2d\u6b21\u5361\u5bf9\u5916\u5c55\u793a\u540d\u79f0 ",(0,i.kt)("br",null),"\u5173\u8054\u8fd0\u52a8\u5bf9\u5e94\u6b21\u5361\u5217\u8868\u548c\u8be6\u60c5\u9875\u4e2d\u5c55\u793a\u7684\u5173\u8054\u8fd0\u52a8 ",(0,i.kt)("br",null),"\u4f7f\u7528\u95e8\u5e97\u4e3a\u8be5\u6b21\u5361\u53ef\u4f7f\u7528\u7684\u95e8\u5e97 ",(0,i.kt)("br",null),"\u6b21\u5361\u83b7\u5f97\u8bf4\u660e\u4e3a\u5c0f\u7a0b\u5e8f\u4e2d\u7528\u6237\u6ca1\u6709\u6b21\u5361\u70b9\u51fb\u6d3b\u52a8\u62a5\u540d\u7684\u63d0\u793a\u6587\u6848 ",(0,i.kt)("br",null),"\u5f00\u8bfe\u8bf4\u660e\u4e3a\u6b21\u5361\u8be6\u60c5\u4e2d\u5c55\u793a\u7684\u8bf4\u660e\u6587\u6848 ",(0,i.kt)("br",null),"\u6709\u6548\u671f\u4e3a\u8bbe\u7f6e\u7528\u6237\u83b7\u5f97\u6b21\u5361\u7684\u6709\u6548\u65f6\u95f4 ",(0,i.kt)("br",null))}s.isMDXComponent=!0}}]);