"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"CAPMVM"},l=void 0,i={unversionedId:"troubleshooting/capmvm",id:"troubleshooting/capmvm",title:"CAPMVM",description:"Understanding common CAPMVM errors.",source:"@site/docs/troubleshooting/capmvm.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/capmvm",permalink:"/cosmic/docs/troubleshooting/capmvm",draft:!1,editUrl:"https://github.com/warehouse-13/cosmic/tree/main/docs/troubleshooting/capmvm.md",tags:[],version:"current",frontMatter:{title:"CAPMVM"},sidebar:"docs",previous:{title:"MicroVMs",permalink:"/cosmic/docs/troubleshooting/microvm"}},c={},s=[{value:"Failed to create client for Cluster default/lm-pi-homelab",id:"failed-to-create-client-for-cluster-defaultlm-pi-homelab",level:3},{value:"Deleting a cluster hangs forever",id:"deleting-a-cluster-hangs-forever",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Understanding common ",(0,o.kt)("inlineCode",{parentName:"p"},"CAPMVM")," errors."),(0,o.kt)("h3",{id:"failed-to-create-client-for-cluster-defaultlm-pi-homelab"},"Failed to create client for Cluster default/lm-pi-homelab"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'failed to create client for Cluster default/lm-pi-homelab: Get \\"https://192.168.10.25:6443/api?timeout=10s\\\n')),(0,o.kt)("p",null,"This error is expected for the first ~5mins of cluster creation. We are waiting\nfor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CAPMVM to instruct flintlock to create a MicroVM"),(0,o.kt)("li",{parentName:"ul"},"The MicroVM to boot"),(0,o.kt)("li",{parentName:"ul"},"Images to download and the kubelet process to start")),(0,o.kt)("p",null,"The time to do this will vary depending on numerous factors, including your network\nspeeds, the backing storage of your boards and how much memory is available."),(0,o.kt)("p",null,"If you still see the error after 5 mins, check to see whether the MicroVM booted correctly.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/troubleshooting/capmvm"},"troubleshooting page for MicroVMs"),". Common causes for failure are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is not enough RAM allocated to the MicroVM"),(0,o.kt)("li",{parentName:"ul"},"The MicroVM cannot access a dhcp service or get an IP"),(0,o.kt)("li",{parentName:"ul"},"The MicroVM cannot resolve addresses, so cannot pull required k8s images"),(0,o.kt)("li",{parentName:"ul"},"The address chosen for the ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-vip")," is not free or accessible on that subnet"),(0,o.kt)("li",{parentName:"ul"},"Some other kubelet issue has occurred and the service has not been able to start")),(0,o.kt)("h3",{id:"deleting-a-cluster-hangs-forever"},"Deleting a cluster hangs forever"),(0,o.kt)("p",null,"Sometimes trying to delete a cluster at the wrong moment of creation (or when something\nwent wrong with that creation to begin with) can cause a delete to hang forever."),(0,o.kt)("p",null,"Check the CAPMVM logs on your management cluster to see if something is obviously failing."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},'failed to create client for Cluster default/lm-pi-homelab: Get \\"https://192.168.10.25:6443/api?timeout=10s\\')," is expected and not an issue\nfor a delete.")),(0,o.kt)("p",null,"If you see the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'failed getting microvm: rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp 192.168.1.216:9090: i/o timeout\\\n')),(0,o.kt)("p",null,"It means your ",(0,o.kt)("inlineCode",{parentName:"p"},"flintlockd")," service is no longer accessible at that address."),(0,o.kt)("p",null,"Check that flintlock is still running on that board ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl status flintlockd.service"),".\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/troubleshooting/flintlock"},"flintlock troubleshooting")," if it is not."),(0,o.kt)("p",null,"If your flintlockd service is running fine, check that the address is correct, or that\nit is accessible on that particular interface. You won't be able to update the address on\nthe spec, but record the address for any manual clean up later."),(0,o.kt)("p",null,"To force the CAPI cluster deletion, you can edit various objects in order.\nStart with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MicrovmMachine")," and remove the finalizer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"   finalizers:\n   - microvmmachine.infrastructure.cluster.x-k8s.io\n")),(0,o.kt)("p",null,"That should do the trick, but if not, proceed to do the same to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  finalizers:\n  - machine.cluster.x-k8s.io\n")),(0,o.kt)("p",null,"And again to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  finalizers:\n  - cluster.cluster.x-k8s.io\n")),(0,o.kt)("p",null,"If there are any MicroVMs still running on the board, you can clean them up\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/warehouse-13/hammertime"},(0,o.kt)("inlineCode",{parentName:"a"},"hammertime"))," or kill the ",(0,o.kt)("inlineCode",{parentName:"p"},"firecracker")," processes and instruct ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd"),"\nto remove the lease and clear the content store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo killall firecracker\n\nctr -n flintlock -a /var/run/containerd-dev/containerd.sock leases ls\nctr -n flintlock -a /var/run/containerd-dev/containerd.sock leases del <id>\n")))}p.isMDXComponent=!0}}]);