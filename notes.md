## images

https://github.com/weaveworks-liquidmetal/image-builder/tree/arm

- docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77
- docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8

Notes:
- copied kernel config from firecracker (5.10.77)
- stuck with 2004 ubuntu to not change too much
- otherwise build was more or less the same
- had to use docker buildx to cross-compile
- kernel binary needs to be PE formatted.
- placed at boot/image (might move it later)
- some configs added but may not need them as i think they were for bridging
  CONFIG_BRIDGE_NETFILTER=y
  CONFIG_NETFILTER_NETLINK=m
  CONFIG_NETFILTER_FAMILY_BRIDGE=y
  CONFIG_NETFILTER_FAMILY_ARP=y
  CONFIG_NETFILTER_NETLINK_ACCT=m
  CONFIG_NETFILTER_NETLINK_QUEUE=m
  CONFIG_NETFILTER_NETLINK_LOG=m
  CONFIG_NETFILTER_NETLINK_OSF=m
- options for cilium/iptables to work
  bacically copy all CONFIG_NETFILTER_XT_ options from the x86 config file

## firecracker
- seems to be working fine, compiled bin on the pi

## flintlock
- smt not supported on ARM, we hardcode true, had to make false will expose later

## networking
- macvtap did not work at first, had to `sudo apt install linux-modules-extra-raspi`
  then all was good, pi could create macvtap interfaces
- before i got macvtap working i tried the bridge setup but could not get it to
  work in any combination even on a wired network.
- the macvtap only option is not going to work for the demo i don't think. i can't
  predict the kube-vip ip from the conf router settings, so i need a network i can
  control. i need a vlan or something with nat? idk
  - try again to get bridge mode working (wired), that way i have a range i control
  - use virsh to create a vlan. the microvms can be created in the standard dhcp pool,
    but i have a small network for the kube-vip ip and set up nat rules between them

## hardware
- because i can only do macvtap, the connection to the pi must be wired. i will not
  have a router on stage so:
  - extension cable plugged on the stage
  - wifi extender logged into wifi
  - ethernet cable
  - switch
  - ethernet cables x 2
  - rpis x 2

## capmvm/cilium
- had to bump to 1.11.8 for 2 reasons:
  - there were no arm images in the old version we were on (containers could not start because of wrong bin format exec errors)
  - cilium was trying to run some envoy check which was failing and really not necessary, https://github.com/cilium/cilium/issues/17467
    but the flag to skip (enable-l7-proxy) that check was still running the envoy check until 1.11.8 backport
- kubeproxy:
  - solved: Failed to load kernel module ip_vs with modprobe. etc You can ignore this message when kube-proxy is running inside container without mounting /lib/modules
- cilium:
  - solved: level=warning msg="Waiting for k8s node information" error="required IPv4 PodCIDR not available" subsys=k8s
  - cannot create devices, this error but not the solution https://github.com/cilium/cilium/issues/20858
- cilium-operator:
  - fails to list things at cluster scope, not sure if this matters? solved to give clusterrole power over nodes

