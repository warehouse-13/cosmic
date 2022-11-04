#!/bin/bash

REG_ADDRESS='192.168.10.2'
REG_PORT='5001'

configure_daemon() {
	cat <<EOF >/etc/docker/daemon.json
{
	"insecure-registries": ["$REG_ADDRESS:$REG_PORT"]
}
EOF
  systemctl restart docker.service
}

load_image() {
	local image="$1"
	local tag="${image##*/}"

	docker pull "$image"

  docker tag "$image" "${REG_ADDRESS}:${REG_PORT}/${tag%@*}"
  docker push "${REG_ADDRESS}:${REG_PORT}/${tag%@*}"
}

load_image "k8s.gcr.io/kube-apiserver:v1.21.14"
load_image "k8s.gcr.io/kube-apiserver:v1.21.8"
load_image "k8s.gcr.io/kube-controller-manager:v1.21.14"
load_image "k8s.gcr.io/kube-controller-manager:v1.21.8"
load_image "k8s.gcr.io/kube-scheduler:v1.21.14"
load_image "k8s.gcr.io/kube-scheduler:v1.21.8"
load_image "k8s.gcr.io/kube-proxy:v1.21.14"
load_image "k8s.gcr.io/kube-proxy:v1.21.8"
load_image "k8s.gcr.io/pause:3.4.1"
load_image "k8s.gcr.io/pause:3.6"
load_image "k8s.gcr.io/pause:3.2"
load_image "k8s.gcr.io/etcd:3.4.13-0"
load_image "k8s.gcr.io/coredns/coredns:v1.8.0"
load_image "ghcr.io/kube-vip/kube-vip:v0.4.0"
load_image "docker.io/rancher/mirrored-flannelcni-flannel-cni-plugin:v1.1.0"
load_image "docker.io/rancher/mirrored-flannelcni-flannel:v0.19.2"
