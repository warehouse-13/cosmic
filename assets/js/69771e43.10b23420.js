"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"Shopping list"},a=void 0,s={unversionedId:"shopping-list",id:"shopping-list",title:"Shopping list",description:"The basic shopping list can be found on the Liquid Metal docs",source:"@site/docs/shopping-list.md",sourceDirName:".",slug:"/shopping-list",permalink:"/cosmic/docs/shopping-list",draft:!1,editUrl:"https://github.com/warehouse-13/cosmic/tree/main/docs/shopping-list.md",tags:[],version:"current",frontMatter:{title:"Shopping list"},sidebar:"docs",previous:{title:"Liquid Metal RPi Homelab",permalink:"/cosmic/docs/intro"},next:{title:"The demo build",permalink:"/cosmic/docs/demo-build"}},c={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The basic shopping list can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://weaveworks-liquidmetal.github.io/site/docs/tutorial-rpi/shopping-list/"},"Liquid Metal docs")),(0,o.kt)("p",null,"In addition to those items I used a ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.co.uk/gp/product/B08DVFMCK4/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"},"managed switch"),".\nI needed one for the demo for several cascading reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To create ",(0,o.kt)("inlineCode",{parentName:"li"},"macvtap")," interfaces for my microvms, my boards needed to be wired.\nComing across multiple ethernet ports on stage is not easy."),(0,o.kt)("li",{parentName:"ol"},"I wanted to have more control over the network (VLAN)\nmy MicroVMs were created in, and so I could watch dhcp lease assignment.\nThis is not strictly necessary in a homelab setup, as the MicroVMs will be\nable to get addresses from your router.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"net",src:r(6012).Z,width:"1198",height:"585"})),(0,o.kt)("p",null,"Head over to the Liquid Metal docs for the ",(0,o.kt)("a",{parentName:"p",href:"https://weaveworks-liquidmetal.github.io/site/docs/tutorial-rpi/intro/"},"build guide"),",\nand see the final page ",(0,o.kt)("a",{parentName:"p",href:"/cosmic/docs/demo-build"},"here")," for the exact setup I had for the demo."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rig",src:r(1267).Z,width:"4032",height:"3024"})))}d.isMDXComponent=!0},6012:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/net-2d01053112235c64320713311e1ad834.png"},1267:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rig2-356e81b6fe6996b170bf227660888eff.jpg"}}]);