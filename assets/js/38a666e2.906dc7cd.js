"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Check the environment"},o=void 0,l={unversionedId:"build-guide/check-env",id:"build-guide/check-env",title:"Check the environment",description:"Have a look around each board and do some tests to make sure things are running.",source:"@site/docs/build-guide/check-env.md",sourceDirName:"build-guide",slug:"/build-guide/check-env",permalink:"/cosmic/docs/build-guide/check-env",draft:!1,editUrl:"https://github.com/warehouse-13/cosmic/tree/main/docs/build-guide/check-env.md",tags:[],version:"current",frontMatter:{title:"Check the environment"},sidebar:"docs",previous:{title:"Bootstrap the hosts",permalink:"/cosmic/docs/build-guide/host-bootstrapping"},next:{title:"Set up the management cluster",permalink:"/cosmic/docs/build-guide/management-cluster"}},c={},s=[{value:"Validate the provision succeeded",id:"validate-the-provision-succeeded",level:2},{value:"Flintlock",id:"flintlock",level:3},{value:"Containerd",id:"containerd",level:3},{value:"Devmapper",id:"devmapper",level:3},{value:"Firecracker",id:"firecracker",level:3},{value:"Create a test MicroVM",id:"create-a-test-microvm",level:2},{value:"Check what was created",id:"check-what-was-created",level:2},{value:"Flintlock",id:"flintlock-1",level:3},{value:"Firecracker",id:"firecracker-1",level:3},{value:"Containerd",id:"containerd-1",level:3},{value:"Network interfaces",id:"network-interfaces",level:3},{value:"DHCP address leases",id:"dhcp-address-leases",level:3},{value:"SSH into the MicroVM",id:"ssh-into-the-microvm",level:2},{value:"Delete the MicroVM",id:"delete-the-microvm",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Have a look around each board and do some tests to make sure things are running."),(0,r.kt)("h2",{id:"validate-the-provision-succeeded"},"Validate the provision succeeded"),(0,r.kt)("h3",{id:"flintlock"},"Flintlock"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flintlockd")," should be running as a service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status flintlockd.service\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf flintlockd.service - flintlock microvm service\n     Loaded: loaded (/etc/systemd/system/flintlockd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Tue 2022-10-18 11:06:46 BST; 6s ago\n       Docs: https://docs.flintlock.dev/\n    Process: 2688 ExecStartPre=which firecracker (code=exited, status=0/SUCCESS)\n    Process: 2690 ExecStartPre=which flintlockd (code=exited, status=0/SUCCESS)\n   Main PID: 2691 (flintlockd)\n      Tasks: 9 (limit: 4075)\n     Memory: 10.9M\n        CPU: 178ms\n     CGroup: /system.slice/flintlockd.service\n             \u2514\u25002691 /usr/local/bin/flintlockd run\n\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="flintlockd grpc api server starting"\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=warning msg="basic authentication is DISABLED"\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=warning msg="TLS is DISABLED"\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting microvm controller"\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting microvm controller with 1 workers" controller=microvm\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=debug msg="starting grpc server listening on endpoint 0.0.0.0:9090"\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="resyncing microvm specs" controller=microvm\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=trace msg="querying all microvms: map[Namespace:]" component=app controller=microvm\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting event listener" controller=microvm\nOct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="Starting workersnum_workers1" controller=microvm\n...\n'))),(0,r.kt)("p",null,"Flintlock's config can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml"),". When you start\ncreating microvms it will store the state at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm/"),"."),(0,r.kt)("h3",{id:"containerd"},"Containerd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Containerd")," should be running as a service tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"-dev"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status containerd-dev.service\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u25cf containerd-dev.service - containerd container runtime\n     Loaded: loaded (/etc/systemd/system/containerd-dev.service; disabled; vendor preset: enabled)\n     Active: active (running) since Tue 2022-10-18 11:06:10 BST; 3s ago\n       Docs: https://containerd.io\n    Process: 2651 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)\n   Main PID: 2652 (containerd)\n      Tasks: 10\n     Memory: 18.1M\n        CPU: 277ms\n     CGroup: /system.slice/containerd-dev.service\n             \u2514\u25002652 /usr/local/bin/containerd --config /etc/containerd/config-dev.toml\n\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308115963+01:00" level=info msg=serving... address=/run/containerd-dev/containerd.sock.ttrpc\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.307973148+01:00" level=info msg="Start event monitor"\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308239926+01:00" level=info msg="Start snapshots syncer"\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308290963+01:00" level=info msg="Start cni network conf syncer for default"\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308327704+01:00" level=info msg="Start streaming server"\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308422685+01:00" level=info msg=serving... address=/run/containerd-dev/containerd.sock\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308730833+01:00" level=debug msg="sd notification" error="<nil>" notified=true state="READY=1"\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308806370+01:00" level=info msg="containerd successfully booted in 0.101379s"\nOct 18 11:06:10 rp0 systemd[1]: Started containerd container runtime.\nOct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.410682398+01:00" level=debug msg="garbage collected" d=13.099893ms\n...\n'))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The service is tagged like this because we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," flag and so that\nthis containerd instance does not mix with any existing service, although it could\nuse an existing one fine. Your boards probably don't have containerd running already\nanyway, so if you like you can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd-dev")," service and either reinstall\nthe service without the ",(0,r.kt)("inlineCode",{parentName:"p"},"-dev")," tag by running ",(0,r.kt)("inlineCode",{parentName:"p"},"./provision.sh containerd"),", or just\nuse an existing service if you have it. Either way you'll need to update the reference\nto the socket that ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," has at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml")," and restart ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd"),".")),(0,r.kt)("p",null,"Containerd's config file will be at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config-dev.toml"),"."),(0,r.kt)("h3",{id:"devmapper"},"Devmapper"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"thinpool")," will have been created on loopback devices to act as containerd's devmapper storage.\nCheck this with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"losetup -a | grep data\n\ndmsetup ls\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dev/loop13: [45826]:416349 (/var/lib/containerd-dev/snapshotter/devmapper/data)\n/dev/loop14: [45826]:416352 (/var/lib/containerd-dev/snapshotter/devmapper/metadata)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flintlock-dev-thinpool  (253:0)\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The thinpool will ",(0,r.kt)("strong",{parentName:"p"},"not")," survive a reboot. If you need to switch off your Pi, getting\nthe pool back is easy:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./provision.sh devpool\nsystemctl restart containerd-dev.service\nsystemctl restart flintlockd.service\n"))),(0,r.kt)("h3",{id:"firecracker"},"Firecracker"),(0,r.kt)("p",null,"There wont be any firecracker process running yet. The binary should exist at ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/firecraker"),"."),(0,r.kt)("h2",{id:"create-a-test-microvm"},"Create a test MicroVM"),(0,r.kt)("p",null,"You can test that everything is working correctly by creating a basic MicroVM."),(0,r.kt)("p",null,"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/warehouse-13/hammertime"},(0,r.kt)("inlineCode",{parentName:"a"},"hammertime"))," ",(0,r.kt)("strong",{parentName:"p"},"to your admin machine"),"."),(0,r.kt)("p",null,"Write the following spec to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF >mvm-spec.json\n{\n    "id": "mvm0",\n    "namespace": "ns0",\n    "vcpu": 2,\n    "memory_in_mb": 2048,\n    "kernel": {\n      "image": "docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77",\n      "filename": "boot/image",\n      "add_network_config": true\n    },\n    "root_volume": {\n        "id": "root",\n        "is_read_only": false,\n        "source": {\n          "container_source": "docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8"\n        }\n      },\n    "interfaces": [\n      {\n        "device_id": "eth1",\n        "type": 0\n      }\n    ],\n    "metadata": {\n      "meta-data": "aW5zdGFuY2VfaWQ6IG5zMC9tdm0wCmxvY2FsX2hvc3RuYW1lOiBtdm0wCnBsYXRmb3JtOiBsaXF1aWRfbWV0YWwK",\n      "user-data": "I2Nsb3VkLWNvbmZpZwpob3N0bmFtZTogbXZtMAp1c2VyczoKLSBuYW1lOiByb290CiAgc3NoX2F1dGhvcml6ZWRfa2V5czoKICAtIHwKICAgIHNzaC1lZDI1NTE5IGZvb2JhcgpmaW5hbF9tZXNzYWdlOiBUaGUgTGlxdWlkIE1ldGFsIGJvb3RlZCBzeXN0ZW0gaXMgZ29vZCB0byBnbyBhZnRlciAkVVBUSU1FIHNlY29uZHMKYm9vdGNtZDoKLSBsbiAtc2YgL3J1bi9zeXN0ZW1kL3Jlc29sdmUvc3R1Yi1yZXNvbHYuY29uZiAvZXRjL3Jlc29sdi5jb25mCg=="\n    }\n}\nEOF\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to be able to SSH into MicroVMs once they are created, decode (",(0,r.kt)("inlineCode",{parentName:"p"},"base64 -d"),") the ",(0,r.kt)("inlineCode",{parentName:"p"},'"user-data"'),"\nand replace the dummy public SSH key with your own, then re-encode the text and\nadd it back to the spec.")),(0,r.kt)("p",null,"From your ",(0,r.kt)("strong",{parentName:"p"},"admin machine"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"hammertime")," to create a MicroVM on each board:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hammertime create -a <ip of board>:9090 -f mvm-spec.json\n")),(0,r.kt)("p",null,"Back on the board, find the MicroVM's boot logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f /var/lib/flintlock/vm/ns0/mvm0/<UUID>/firecracker.stdout\n")),(0,r.kt)("p",null,"Eventually you should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The Liquid Metal booted system is good to go after $UPTIME seconds\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The first time you do this may take a while. Depending on what RAM you have and what\nstorage you are using, containerd will need time to download, unpack and snapshot\nthe kernel and OS images. No boot logs will be written until ",(0,r.kt)("strong",{parentName:"p"},"after")," that.\nSubsequent creates will be much faster.")),(0,r.kt)("p",null,"If you don't see that message, or there isn't anything in that file at all after about\n5 mins, go to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/troubleshooting/"},"Troubleshooting page"),"."),(0,r.kt)("h2",{id:"check-what-was-created"},"Check what was created"),(0,r.kt)("h3",{id:"flintlock-1"},"Flintlock"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd")," logs will be followable with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -fu flintlockd.service\n")),(0,r.kt)("p",null,"Data and logs for each MicroVM will be stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm"),", with\nthe full path for a MicroVM being ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/flintlock/vm/NAMESPACE/NAME/UUID"),"."),(0,r.kt)("p",null,"Under that directory are the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.cfg"),": the configuration set by ",(0,r.kt)("inlineCode",{parentName:"li"},"flintlock")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"firecracker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.log"),": logs from the firecracker process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.metrics"),": metrics from the firecracker process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.pid"),": the pid of the running firecracker process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.stderr"),": MicroVM boot errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firecracker.stdout"),": MicroVM boot logs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata.json"),": MicroVM boot userdata")),(0,r.kt)("h3",{id:"firecracker-1"},"Firecracker"),(0,r.kt)("p",null,"Each MicroVM runs as a detached ",(0,r.kt)("inlineCode",{parentName:"p"},"firecracker")," process. You will find logs in the\nfiles given in the section above."),(0,r.kt)("p",null,"To see the processes, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux | grep firecracker\n")),(0,r.kt)("h3",{id:"containerd-1"},"Containerd"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ctr")," to inspect artifacts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# leases are a reference to other resources connected to an object created by a client\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock leases ls\n\n# images are the bases images for snapshots\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock images ls\n\n# snapshots and microvm configuration are stored in the content store\nsudo ctr -n flintlock -a /run/containerd-dev/containerd.sock content ls\n")),(0,r.kt)("h3",{id:"network-interfaces"},"Network interfaces"),(0,r.kt)("p",null,"Flintlock will create 2 interfaces per MicroVM attached to the parent interface,\nwhich in this case will be the board's ethernet interface."),(0,r.kt)("p",null,"These can be seen with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ip link ls\n")),(0,r.kt)("h3",{id:"dhcp-address-leases"},"DHCP address leases"),(0,r.kt)("p",null,"Each MicroVM requests an address from the DHCP server on the network on boot.\nIn this case we are relying on your router's DHCP pool, so you can log in there\nto see what was set."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I would much rather have used ",(0,r.kt)("inlineCode",{parentName:"p"},"virsh")," to create a bridge interface with a separate\nDHCP pool, but I just could not get that to work on my boards \ud83e\udd37\u200d\u2640\ufe0f.\nYou are free to have a go yourself, just edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/flintlockd/config.yaml"),"\nand add ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge-name: <bridge>"),", restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"flintlockd.service")," and edit the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mvm-spec.json")," to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth1")," interface with ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": 1'),". Or you can pass\n",(0,r.kt)("inlineCode",{parentName:"p"},"--bridge-name <bridge>")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"provision.sh")," if you have not run that yet.")),(0,r.kt)("h2",{id:"ssh-into-the-microvm"},"SSH into the MicroVM"),(0,r.kt)("p",null,"If you altered the ",(0,r.kt)("inlineCode",{parentName:"p"},'"user-data"')," in the spec to have your public SSH key, then you\ncan SSH into the MicroVM."),(0,r.kt)("p",null,"You can get the IP from either your DHCP logs, or from the MicroVM boot logs at\n",(0,r.kt)("inlineCode",{parentName:"p"},"firecracker.stdout"),"."),(0,r.kt)("p",null,"There won't be anything interesting to see really, it's just a VM, but if something\nis going wrong it is useful to be able to get in."),(0,r.kt)("h2",{id:"delete-the-microvm"},"Delete the MicroVM"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"hammertime")," to delete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hammertime delete -a <ip of board>:9090 -f mvm-spec.json\n")),(0,r.kt)("p",null,"Once you have validated that your boards are configured correctly, you can create\nthe cluster from your ",(0,r.kt)("strong",{parentName:"p"},"admin")," machine."))}p.isMDXComponent=!0}}]);