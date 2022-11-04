
## final setup
- on board reboot don't forget to
  - `systemctl stop containerd.service`
  - `./provision.sh devpool`
  - `systemctl restart containerd-dev.service`
  - `systemctl restart flintlockd.service`
- dell
  - dhcp server
    - `/etc/dhcp/dhcpd.conf`
    - `/etc/default/isc-dhcp-server`
    - dhcp-leaase-list
    - vip ip `192.168.10.25`
  - vlan `192.168.10.2` enxf8e43b5d.100
    - `nmcli con add type vlan con-name enx.100 dev enxf8e43b5d5048 id 100 ip4 192.168.10.2/25`
  - nat rules (same as equinix)
    ```
    firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i enxf8e43b5d.100 -o enxf8e43b5d5048 -j ACCEPT
    firewall-cmd --permanent --direct --add-rule ipv4 nat POSTROUTING 0 -o enxf8e43b5d5048 -j MASQUERADE
    firewall-cmd --reload

    firewall-cmd --permanent --direct --remove-rule ipv4 filter FORWARD 0 -i enxf8e43b5d.100 -o enxf8e43b5d5048 -j ACCEPT
    firewall-cmd --permanent --direct --remove-rule ipv4 nat POSTROUTING 0 -o enxf8e43b5d5048 -j MASQUERADE
    firewall-cmd --reload
    ```
  - in `/etc/hosts`
    - `192.168.10.3    rp0`
    - `192.168.10.4    rp2`
  - sometimes the ethernet interface comes up without an ip4 for some reason
    - `nmcli con down ethernet-enxf8e43b5d5048`
    - `nmcli con delete ethernet-enxf8e43b5d5048`
    - `nmcli con add type ethernet con-name ethernet-enxf8e43b5d5048 ifname enxf8e43b5d5048 ip4 192.168.1.66/24`
    - `nmcli con up ethernet-enxf8e43b5d5048`
- board rp0
  - vlan `192.168.10.3` eth0.100
  - ubuntu 2204
  - network manager (annoying)
    - `nmcli con add type vlan con-name eth0.100 dev eth0 id 100 ip4 192.168.10.3/25`
  - in `/etc/hosts`
    - `192.168.10.4    rp2`
    - `192.168.10.2    192.168.10.2`
- board rp2
  - vlan `192.168.10.4` eth0.100
  - ubuntu 2004
  - netplan `/etc/netplan/50-cloud-init.yaml`
  - in `/etc/hosts`
    - `192.168.10.3    rp0`
    - `192.168.10.2    192.168.10.2`
- switch
  - vlan 100
  - ports 1-3, 5. tagged

----------------------------------------

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
- need to set kubeadm to ignore preflight errors on init (but also maybe join?). `SystemVerification`
- use flannel not cilium == success

## local registry
- on dell:
  - add `"insecure-registries" : ["192.168.10.2:5001"]` to `/etc/docker/daemon.json`
  - `systemctl restart docker.service`
  - `docker run -d --restart=always -p "192.168.10.2:5001:5000" --name lm-reg registry:2`
  - example tag image`docker tag quay.io/cilium/cilium 192.168.10.2:5001/cilium`
  - example load image `docker push 192.168.10.2:5001/cilium`
- on other machines:
  - add `192.168.10.2  xps` to `/etc/hosts`
  - `curl xps:5001/v2/_catalog`
  - or `curl 192.168.10.2:5001/v2/_catalog`, fine for pull too
  - example pull image in mvm `ctr -a /run/containerd/containerd.sock image pull --plain-http=true 192.168.10.2:5001/cilium:latest`
- loading images see `hack/load-images.sh`
  - should be done on a pi to make sure images are aarch
  - add `"insecure-registries" : ["192.168.10.2:5001"]` to `/etc/docker/daemon.json`
- add the following to cluster.yaml
  ```yaml
  kind: KubeadmControlPlane
  spec:
    kubeadmConfigSpec:
      files:
        - path: /etc/containerd/config.toml
          content: |
            version = 2
            [plugins]
              [plugins."io.containerd.grpc.v1.cri"]
                sandbox_image = "192.168.10.2:5001/pause:3.2"
                [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
                  [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.10.2:5001"]
                  endpoint = ["http://192.168.10.2:5001"]
                [plugins."io.containerd.grpc.v1.cri".registry.configs]
                  [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.10.2:5001".tls]
                    insecure_skip_verify = true
      clusterConfiguration:
        imageRepository: 192.168.10.2:5001
        etcd:
          local:
            imageRepository: 192.168.10.2:5001
      initConfiguration:
        nodeRegistration:
          kubeletExtraArgs:
            pod-infra-container-image: 192.168.10.2:5001/pause:3.2
      joinConfiguration:
        nodeRegistration:
          kubeletExtraArgs:
            pod-infra-container-image: 192.168.10.2:5001/pause:3.2
      preKubeadmCommands:
        - mkdir -p /etc/kubernetes/manifests && ctr images pull --plain-http=true
          192.168.10.2:5001/kube-vip:v0.4.0 && ctr run --rm --net-host 192.168.10.2:5001/kube-vip:v0.4.0
          vip /kube-vip manifest pod --arp --interface $(ip -4 -j route list default | jq -r .[0].dev)
          --address 192.168.10.25 --controlplane --leaderElection > /etc/kubernetes/manifests/kube-vip.yaml &&
          sed -i 's/ghcr.io\/kube-vip/192.168.10.2:5001/' /etc/kubernetes/manifests/kube-vip.yaml
  ---
  kind: KubeadmConfigTemplate
  spec:
    template:
      spec:
        files:
          - path: /etc/containerd/config.toml
            content: |
              version = 2
              [plugins]
                [plugins."io.containerd.grpc.v1.cri"]
                  sandbox_image = "192.168.10.2:5001/pause:3.2"
                  [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
                    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.10.2:5001"]
                    endpoint = ["http://192.168.10.2:5001"]
                  [plugins."io.containerd.grpc.v1.cri".registry.configs]
                    [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.10.2:5001".tls]
                      insecure_skip_verify = true
        joinConfiguration:
          nodeRegistration:
            kubeletExtraArgs:
              pod-infra-container-image: 192.168.10.2:5001/pause:3.2
  ```
  - also the images in flannel
    - `image: 192.168.10.2:5001/mirrored-flannelcni-flannel-cni-plugin:v1.1.0`
    - `image: 192.168.10.2:5001/mirrored-flannelcni-flannel:v0.19.2`
