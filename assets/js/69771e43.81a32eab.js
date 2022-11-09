"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=o,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||n;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={title:"Shopping list"},i=void 0,s={unversionedId:"shopping-list",id:"shopping-list",title:"Shopping list",description:"Requirements",source:"@site/docs/shopping-list.md",sourceDirName:".",slug:"/shopping-list",permalink:"/cosmic/docs/shopping-list",draft:!1,editUrl:"https://github.com/warehouse-13/cosmic/tree/main/docs/shopping-list.md",tags:[],version:"current",frontMatter:{title:"Shopping list"},sidebar:"docs",previous:{title:"Liquid Metal RPi Homelab",permalink:"/cosmic/docs/intro"},next:{title:"Build guide",permalink:"/cosmic/docs/category/build-guide"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Minimal gear list",id:"minimal-gear-list",level:3},{value:"Upgrades",id:"upgrades",level:3},{value:"Optional",id:"optional",level:3},{value:"Credits",id:"credits",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"If you don't want to get exactly what I have, or you already have a bunch of kit\nthat you plan to re-use, here is a list of the base requirements for this homelab."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum 1 board with minimum 4GB RAM"),(0,o.kt)("li",{parentName:"ul"},"Some sort of storage",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04 or 22.04 bootable"))),(0,o.kt)("li",{parentName:"ul"},"Wired connection"),(0,o.kt)("li",{parentName:"ul"},"SSH-able"),(0,o.kt)("li",{parentName:"ul"},"Some other device (laptop, PC), running macOS or Linux. This will be where you\nwill be working from.")),(0,o.kt)("h3",{id:"minimal-gear-list"},"Minimal gear list"),(0,o.kt)("p",null,"If you are going from scratch, this should get you started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-boards/products/raspberry-pi-4-model-b"},"Raspberry Pi board(s)")," with an ",(0,o.kt)("strong",{parentName:"li"},"absolute minimum")," of 4GB RAM. 8GB is best.\n(2 or more boards is cooler but I know how hard it is to get these nowadays. I spent a day\naggressively sniping people on eBay to get mine.)\nI have only tested on 4B Models but I guess in a pinch a 3B ",(0,o.kt)("em",{parentName:"li"},"might")," be okay, but\nno promises."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cables/products/usb-a-to-usb-c-cable-1m"},"Power cable per Pi"),". 4Bs use USB-C, earlier versions use micro-USB."),(0,o.kt)("li",{parentName:"ul"},"USB power supply with enough ports for each boards. While developing I plugged mine\ninto my Dell XPS or an ",(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.co.uk/gp/product/B00VJSGT2A/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"},"Anker PowerCore 20100")," which is\na beast and can run 2 boards for ~24hrs. For the demo I used a ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-hats/products/raspberry-pi-poe-plus-hat"},"PoE HAT"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/products/sandisk-microsd-card-class-10-a1"},"microSD")," per board. I used 32GB ones, but you can get away with a 16."),(0,o.kt)("li",{parentName:"ul"},"Ethernet cable per board. I use some ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/products/rj45-cat5e-ethernet-lan-cable-2m-blue"},"Cat 5e")," ones which I had in a wire drawer."),(0,o.kt)("li",{parentName:"ul"},"Case. Strictly speaking this is a 'nice to have'. But you can get some very cute, very\ncheap cases, so it feels sad not to have one. ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cases/products/cluster-case-for-raspberry-pi"},"This one")," is nice-looking,\ncomes with CPU fans, and is extendable, so you can stack more of the same cases\nas you acquire more boards."),(0,o.kt)("li",{parentName:"ul"},"A way to flash microSD cards. If your PC/laptop does not have an SD port, you can\nget tiny ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-sd-cards-and-adapters/products/mini-usb-2-0-microsd-card-reader"},"USB card reader")," which works very well.")),(0,o.kt)("h3",{id:"upgrades"},"Upgrades"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I used a ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-hats/products/raspberry-pi-poe-plus-hat"},"PoE hat")," per board so I had fewer wires to deal with. The fans on this\nare louder than the ones I got with the case, but the setup is neater. If you go for this, you'll\nalso need a ",(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.co.uk/gp/product/B076982FVC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1"},"PoE enabled switch"),"."),(0,o.kt)("li",{parentName:"ul"},"For faster writing and just more space, swap out the microSDs for actual SSDs.")),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("p",null,"You may want some accessories depending on the OS image you choose for your boards."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.co.uk/gp/product/B08DVFMCK4/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"},"A managed switch"),". I needed one for the demo so I could have more control over\nthe network (VLAN) my MicroVMs were created in, and so I could watch dhcp lease assignment.\nThis is not strictly necessary in a homelab setup, as the MicroVMs will be able to\nget addresses from your router."),(0,o.kt)("li",{parentName:"ul"},"(If you flash your boards with a Desktop image.) A monitor and cable.\nJust one of these are necessary as after setup you won't need\nthem. Note the Model 4B takes a Micro-HDMI: I got an ",(0,o.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cables/products/hdmi-to-micro-hdmi-adapter-cable-160mm"},"adapter")," to use with one\nof my HDMI-to-HDMI cables."),(0,o.kt)("li",{parentName:"ul"},"(Again only necessary if you install Desktop images on your boards.)\nUSB keyboard and mouse. Again, just need the one for initial setup. Wireless ones\ncould also work but I have not tried.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rig",src:r(1267).Z,width:"4032",height:"3024"})),(0,o.kt)("h3",{id:"credits"},"Credits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/how-to-kubernetes-cluster-on-raspberry-pi?&_ga=2.92060063.463304713.1653983297-30417302.1648472081#1-overview"},"How to build a Raspberry Pi Kubernetes cluster using MicroK8s")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloud-native-skunkworks/raspernetes"},"Raspbernetes"))))}c.isMDXComponent=!0},1267:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rig2-356e81b6fe6996b170bf227660888eff.jpg"}}]);