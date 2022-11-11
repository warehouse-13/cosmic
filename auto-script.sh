#!/bin/bash

########################
# include the magic
########################
. demo-magic.sh

# hide the evidence
clear

# Demo time!

export CLUSTER_NAME=kcduk-demo
export CAPMVM_VERSION=v0.7.0

# start
p "export CAPMVM_VERSION=v0.7.0\n$ export EXP_CLUSTER_RESOURCE_SET=true\n$ clusterctl init --infrastructure microvm"

pe "k9s"

p "export CLUSTER_NAME=kcduk-demo\n$ export CONTROL_PLANE_MACHINE_COUNT=1\n$ export WORKER_MACHINE_COUNT=3\n$ export CONTROL_PLANE_VIP=192.168.10.25\n$ clusterctl generate cluster -i microvm:$CAPMVM_VERSION -f flannel $CLUSTER_NAME > cluster.yaml"

# slide 6
pe "nvim cluster-demo.yaml"
clear

# slide 7
pe "kubectl apply -f cluster-demo.yaml"

pe "dhcp-lease-list"
pe "sudo firewall-cmd --direct --get-all-rules"

# slide 8
pe "kubectl get secret $CLUSTER_NAME-kubeconfig -o json | jq -r .data.value | base64 -d > config.yaml"
pe "watch kubectl --kubeconfig config.yaml get nodes"
pe "k9s --kubeconfig config.yaml"
clear
