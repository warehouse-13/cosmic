---
title: Create the Pi cluster
---

This is the final step for this homelab.

## Configure

Set some config options in the environment

```bash
export CLUSTER_NAME=lm-pi-homelab # or whatever
export CONTROL_PLANE_MACHINE_COUNT=1
export WORKER_MACHINE_COUNT=3 # don't go crazy here, consider your personal capacity
export KUBERNETES_VERSION=1.21.8
export MVM_KERNEL_IMAGE=docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77
export MVM_ROOT_IMAGE=docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 # this tag should match the KUBERNETES_VERSION above
```

CAPMVM will use [`kube-vip`][kvip] to assign a virtual IP to the cluster.
Choose an address from **outside** your router's DHCP pool. Mine runs from `192.168.1.64` to `.244`
so I will use `192.168.1.63`.

If you copied my [demo setup][demo], then use an ip from outside _that_ range
instead.

```bash
export CONTROL_PLANE_VIP="192.168.1.63" # update to suit your network
```

## Generate

Use `clusterctl` to generate a cluster manifest:

```bash
clusterctl generate cluster -i microvm:$CAPMVM_VERSION -f flannel $CLUSTER_NAME > cluster.yaml
```

:::note
I am using `flannel` for the cluster's CNI because that is the one I got working.
There is also a `cilium` flavour available, or you can leave the `-f foobar` flag off and
apply your own choice of CNI after the fact.

If you need to enable more kernel features for your CNI, you can supply a custom
image in the `_IMAGE` env vars at the top of this page. The Liquid Metal [images][images]
are here if you want to use them as a base.
:::

Open the `cluster.yaml` file and add the addresses of your boards' `flintlockd`
servers under the `MicrovmCluster`'s `spec.placement.staticPool.hosts`.
While you are there you can also add a public SSH key if you want.

<details><summary>Expand to see host address changes</summary>

```yaml
...
---
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmCluster
metadata:
  name: lm-pi-homelab
  namespace: default
spec:
  sshPublicKeys:
  - user: "root"
    authorizedKeys:
    - "ssh-ed25519 foobar" # add your own or remove the sshPublicKeys section
  controlPlaneEndpoint:
    host: 192.168.1.63
    port: 6443
  placement:
    staticPool:
      hosts:
      # add your boards here
      - controlplaneAllowed: true
        endpoint: 192.168.1.216:9090
      - controlplaneAllowed: true
        endpoint: 192.168.1.217:9090
      # etc as necessary
...
```

</details>

Because we are on ARM, the kernel binary in the image will be at a different
location (it defaults to `x86`'s `boot/vmlinux`). _I say "will be" like I didn't
put it there. Sorry I have not had time to rebuild and move that yet, on my list_.
We need to edit the section of the manifest which points to that binary (at some point
these more fiddly bits of config will go).

Edit the **2/two** `MicrovmMachineTemplate` specs at `spec.template.spec.kernel.filename`
to be `boot/image`:

<details><summary>Expand to see kernel binary path changes</summary>

```yaml
...
---
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmMachineTemplate
metadata:
  name: lm-pi-homelab-control-plane
  namespace: default
spec:
  template:
    spec:
      kernel:
        filename: boot/image # match this line
        image: docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77
      kernelCmdline: {}
...
---
apiVersion: infrastructure.cluster.x-k8s.io/v1alpha1
kind: MicrovmMachineTemplate
metadata:
  name: lm-pi-homelab-md-0
  namespace: default
spec:
  template:
    spec:
      kernel:
        filename: boot/image # match this line
        image: docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77
      kernelCmdline: {}
...
```

</details>

Once you have made those changes, save and close the file.

## Apply

Once you are happy with the manifest, apply it to your management cluster:

```bash
kubectl apply -f cluster.yaml
```

<details><summary>Output</summary>

```bash
cluster.cluster.x-k8s.io/lm-pi-homelab created
microvmcluster.infrastructure.cluster.x-k8s.io/lm-pi-homelab created
kubeadmcontrolplane.controlplane.cluster.x-k8s.io/lm-pi-homelab created
microvmmachinetemplate.infrastructure.cluster.x-k8s.io/lm-pi-homelab created
machinedeployment.cluster.x-k8s.io/lm-pi-homelab created
microvmmachinetemplate.infrastructure.cluster.x-k8s.io/lm-pi-homelab created
kubeadmconfigtemplate.bootstrap.cluster.x-k8s.io/lm-pi-homelab created
clusterresourceset.addons.cluster.x-k8s.io/crs-flannel created
configmap/flannel-addon created
```

</details>

## Use

After a moment, you can fetch the MicroVMs workload cluster's `kubeconfig` from
your management cluster. This `kubeconfig` is written to a secret by CAPI:

```bash
kubectl get secret $CLUSTER_NAME-kubeconfig -o json | jq -r .data.value | base64 -d > config.yaml
```

With that `kubeconfig` you can target the Liquid Metal cluster with `kubectl`:

```bash
kubectl --kubeconfig config.yaml get nodes
```

:::tip
This may not return anything for a few moments; you will need to wait for the MicroVMs
to start and for the cluster control-plane to then be bootstrapped.
Prepend the command with `watch` and eventually (<=5m) you
will see the errors stop and the cluster come up.

An expected error for the first 2-3 minutes is:

```
Unable to connect to the server: dial tcp 192.168.1.63:6443: connect: no route to host
```
:::

<details><summary>Output</summary>

```bash
NAME                                STATUS   ROLES                  AGE     VERSION
lm-pi-homelab-control-plane-hdpkj   Ready    control-plane,master   4m35s   v1.21.8
lm-pi-homelab-md-0-9444f            Ready    <none>                 3m41s   v1.21.8
lm-pi-homelab-md-0-bdqwj            Ready    <none>                 3m43s   v1.21.8
lm-pi-homelab-md-0-gfgbq            Ready    <none>                 3m41s   v1.21.8
```

</details>

From there you can use the cluster as you would normally. The management `kind` cluster can
be thrown away if you like.

![running cluster](/img/running-cluster.png)

:::tip
When/if you want to delete your Raspberry Pi cluster, DO NOT `kubectl delete -f cluster.yaml`.
Run `kubectl delete cluster $CLUSTER_NAME` instead.
:::

[kvip]: https://kube-vip.io/
[net]: /docs/tutorial-basics/network
[mmt]: https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/42196e0bf388235f39211769cb8e5c0049172c10/api/v1alpha1/types.go#L103-L105
[images]: https://github.com/weaveworks-liquidmetal/image-builder
[demo]: /docs/build-guide/demo-build/#dhcp-server
