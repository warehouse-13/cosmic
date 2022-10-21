"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Create the Pi cluster"},l=void 0,i={unversionedId:"build-guide/mvm-cluster",id:"build-guide/mvm-cluster",title:"Create the Pi cluster",description:"This is the final step for this homelab.",source:"@site/docs/build-guide/mvm-cluster.md",sourceDirName:"build-guide",slug:"/build-guide/mvm-cluster",permalink:"/cosmic/docs/build-guide/mvm-cluster",draft:!1,editUrl:"https://github.com/warehouse-13/cosmic/tree/main/docs/build-guide/mvm-cluster.md",tags:[],version:"current",frontMatter:{title:"Create the Pi cluster"},sidebar:"docs",previous:{title:"Set up the management cluster",permalink:"/cosmic/docs/build-guide/management-cluster"},next:{title:"Bonus: my exact demo build",permalink:"/cosmic/docs/build-guide/demo-build"}},s={},p=[{value:"Configure",id:"configure",level:2},{value:"Generate",id:"generate",level:2},{value:"Apply",id:"apply",level:2},{value:"Use",id:"use",level:2}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the final step for this homelab."),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"Set some config options in the environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CLUSTER_NAME=lm-pi-homelab # or whatever\nexport CONTROL_PLANE_MACHINE_COUNT=1\nexport WORKER_MACHINE_COUNT=3 # don't go crazy here, consider your personal capacity\nexport KUBERNETES_VERSION=1.21.8\nexport MVM_KERNEL_IMAGE=docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77\nexport MVM_ROOT_IMAGE=docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 # this tag should match the KUBERNETES_VERSION above\n")),(0,r.kt)("p",null,"CAPMVM will use ",(0,r.kt)("a",{parentName:"p",href:"https://kube-vip.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"kube-vip"))," to assign a virtual IP to the cluster.\nChoose an address from ",(0,r.kt)("strong",{parentName:"p"},"outside")," your router's DHCP pool. Mine runs from ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.64")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".244"),"\nso I will use ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.63"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is not ideal, and I really want a different solution, but at the time of writing\nI don't have time to work on something better. I will update when I can. If you find\nsomething, please share.")),(0,r.kt)("p",null,"If you copied my ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-guide/demo-build"},"demo setup"),", then use an ip from outside ",(0,r.kt)("em",{parentName:"p"},"that")," range\ninstead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export CONTROL_PLANE_VIP="192.168.1.63" # update to suit your network\n')),(0,r.kt)("h2",{id:"generate"},"Generate"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterctl")," to generate a cluster manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clusterctl generate cluster -i microvm:$CAPMVM_VERSION -f flannel $CLUSTER_NAME > cluster.yaml\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I am using ",(0,r.kt)("inlineCode",{parentName:"p"},"flannel")," for the cluster's CNI because that is the one I got working.\nThere is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"cilium")," flavour available, or you can leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f foobar")," flag off and\napply your own choice of CNI after the fact."),(0,r.kt)("p",{parentName:"admonition"},"If you need to enable more kernel features for your CNI, you can supply a custom\nimage in the ",(0,r.kt)("inlineCode",{parentName:"p"},"_IMAGE")," env vars at the top of this page. The Liquid Metal ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks-liquidmetal/image-builder"},"images"),"\nare here if you want to use them as a base.")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," file and add the addresses of your boards' ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd"),"\nservers under the ",(0,r.kt)("inlineCode",{parentName:"p"},"MicrovmCluster"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.placement.staticPool.hosts"),".\nWhile you are there you can also add a public SSH key if you want."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see host address changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n---\napiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmCluster\nmetadata:\n  name: lm-pi-homelab\n  namespace: default\nspec:\n  sshPublicKeys:\n  - user: "root"\n    authorizedKeys:\n    - "ssh-ed25519 foobar" # add your own or remove the sshPublicKeys section\n  controlPlaneEndpoint:\n    host: 192.168.1.63\n    port: 6443\n  placement:\n    staticPool:\n      hosts:\n      - controlplaneAllowed: true\n        endpoint: 192.168.1.216:9090\n      - controlplaneAllowed: true\n        endpoint: 192.168.1.217:9090\n      # etc as necessary\n...\n'))),(0,r.kt)("p",null,"Because we are on ARM, the kernel binary in the image will be at a different\nlocation (it defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"x86"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"boot/vmlinux"),"). ",(0,r.kt)("em",{parentName:"p"},'I say "will be" like I didn\'t\nput it there. Sorry I have not had time to rebuild and move that yet, on my list'),".\nWe need to edit the section of the manifest which points to that binary (at some point\nthese more fiddly bits of config will go)."),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("strong",{parentName:"p"},"2/two")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MicrovmMachineTemplate")," specs at ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.kernel.filename"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see kernel binary path changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n---\napiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nmetadata:\n  name: lm-pi-homelab-control-plane\n  namespace: default\nspec:\n  template:\n    spec:\n      kernel:\n        filename: boot/image\n        image: docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77\n      kernelCmdline: {}\n...\n---\napiVersion: infrastructure.cluster.x-k8s.io/v1alpha1\nkind: MicrovmMachineTemplate\nmetadata:\n  name: lm-pi-homelab-md-0\n  namespace: default\nspec:\n  template:\n    spec:\n      kernel:\n        filename: boot/image\n        image: docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77\n      kernelCmdline: {}\n...\n"))),(0,r.kt)("p",null,"Once you have made those changes, save and close the file."),(0,r.kt)("h2",{id:"apply"},"Apply"),(0,r.kt)("p",null,"Once you are happy with the manifest, apply it to your management cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f cluster.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cluster.cluster.x-k8s.io/lm-pi-homelab created\nmicrovmcluster.infrastructure.cluster.x-k8s.io/lm-pi-homelab created\nkubeadmcontrolplane.controlplane.cluster.x-k8s.io/lm-pi-homelab created\nmicrovmmachinetemplate.infrastructure.cluster.x-k8s.io/lm-pi-homelab created\nmachinedeployment.cluster.x-k8s.io/lm-pi-homelab created\nmicrovmmachinetemplate.infrastructure.cluster.x-k8s.io/lm-pi-homelab created\nkubeadmconfigtemplate.bootstrap.cluster.x-k8s.io/lm-pi-homelab created\nclusterresourceset.addons.cluster.x-k8s.io/crs-flannel created\nconfigmap/flannel-addon created\n"))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"After a moment, you can fetch the MicroVMs workload cluster's ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," from\nyour management cluster. This ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," is written to a secret by CAPI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret $CLUSTER_NAME-kubeconfig -o json | jq -r .data.value | base64 -d > config.yaml\n")),(0,r.kt)("p",null,"With that ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," you can target the Liquid Metal cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --kubeconfig config.yaml get nodes\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This may not return anything for a few moments; you will need to wait for the MicroVMs\nto start and for the cluster control-plane to then be bootstrapped.\nPrepend the command with ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," and eventually (<=5m) you\nwill see the errors stop and the cluster come up."),(0,r.kt)("p",{parentName:"admonition"},"An expected error for the first 2-3 minutes is:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Unable to connect to the server: dial tcp 192.168.1.63:6443: connect: no route to host\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                STATUS   ROLES                  AGE     VERSION\nlm-pi-homelab-control-plane-hdpkj   Ready    control-plane,master   4m35s   v1.21.8\nlm-pi-homelab-md-0-9444f            Ready    <none>                 3m41s   v1.21.8\nlm-pi-homelab-md-0-bdqwj            Ready    <none>                 3m43s   v1.21.8\nlm-pi-homelab-md-0-gfgbq            Ready    <none>                 3m41s   v1.21.8\n"))),(0,r.kt)("p",null,"From there you can use the cluster as you would normally. The management ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," cluster can\nbe thrown away if you like."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"running cluster",src:n(541).Z,width:"1887",height:"573"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When/if you want to delete your Raspberry Pi cluster, DO NOT ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete -f cluster.yaml"),".\nRun ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete cluster $CLUSTER_NAME"),".")))}m.isMDXComponent=!0},541:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/running-cluster-8e0dc2dcbfeade92151b7427fe0190eb.png"}}]);