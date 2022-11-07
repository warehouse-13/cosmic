---
title: Set up the management cluster
---

The rest of this will be run from your **admin machine**. This can be macOS or Linux,
basically wherever you can run docker (although I have not tested on Windows, should be fine tho).

## Kind

The Pi cluster will be created by [CAPI][capi]. We'll have the management cluster
on your admin machine. You can use a more permanent cluster if you like, but
here I am just using `kind`.

Install:

- [kind][kind]
- [docker][docker]
- [clusterctl][clusterctl]

Create a new `kind` cluster.

```bash
kind create cluster --name lm-lab-manage
```

## CAPI and CAPMVM


The Liquid Metal infra provider is [Cluster API Provider MicroVM (CAPMVM)][capmvm].

Create a `cluster-api` directory under home:

```
mkdir -p ~/.cluster-api
```

Set the CAPMVM version in your environment. First [check for the
version which is compatible][compat] with the version of `flintlockd` your boards are running.
In my case I am using Flintlock `v0.4.0`, so the latest compatible CAPMVM version is `v0.7.0`.

:::warning
When checking your `flintlockd` version, be aware of [this bug][vers-bug].
If you ran the `provision.sh` without setting either the `FLINTLOCK` env var
or the `--version` flag on the `flintlock` subcommand, then you will have the
[latest version][fl-latest] installed.
:::

```bash
export CAPMVM_VERSION=v0.7.0
```

Write the installation information to a `clusterctl` config file in the `cluster-api`
repo.

:::tip
If you already have a `~/.cluster-api/clusterctl.yaml` file, move it to a backup
first: `mv ~/.cluster-api/clusterctl.yaml ~/.cluster-api/clusterctl.yaml.bak`
:::

```bash
cat << EOF >~/.cluster-api/clusterctl.yaml
providers:
  - name: "microvm"
    url: "https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/releases/$CAPMVM_VERSION/infrastructure-components.yaml"
    type: "InfrastructureProvider"
EOF
```

Use `clusterctl` to initialise the management cluster.

```bash
export EXP_CLUSTER_RESOURCE_SET=true # required for the CNI addon we want deployed to the MicroVM cluster

clusterctl init --infrastructure microvm
```

<details><summary>Output</summary>

```bash
Fetching providers
Installing cert-manager Version="v1.5.3"
Waiting for cert-manager to be available...
Installing Provider="cluster-api" Version="v1.2.2" TargetNamespace="capi-system"
Installing Provider="bootstrap-kubeadm" Version="v1.2.2" TargetNamespace="capi-kubeadm-bootstrap-system"
I0927 13:51:15.765771  815920 request.go:665] Waited for 1.023726916s due to client-side throttling, not priority and fairness, request: GET:https://127.0.0.1:38035/apis/bootstrap.cluster.x-k8s.io/v1beta1?timeout=30s
Installing Provider="control-plane-kubeadm" Version="v1.2.2" TargetNamespace="capi-kubeadm-control-plane-system"
Installing Provider="infrastructure-microvm" Version="v0.8.0" TargetNamespace="capmvm-system"

Your management cluster has been initialized successfully!

You can now create your first workload cluster by running the following:

  clusterctl generate cluster [name] --kubernetes-version [version] | kubectl apply -f -
```

</details>

:::tip
If you see an error containing the words `"401 Bad Credentials"`, make sure you don't
have any Github auth methods set in your environment. `GITHUB_TOKEN` is a common
culprit and can be removed with `unset GITHUB_TOKEN`.
:::

[kind]: https://kind.sigs.k8s.io/
[docker]: https://docs.docker.com/get-docker/
[capi]: https://cluster-api.sigs.k8s.io/
[capmvm]: https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm
[clusterctl]: https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl
[compat]: https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/blob/main/docs/compatibility.md
[vers-bug]: https://github.com/weaveworks-liquidmetal/flintlock/issues/508
[fl-latest]: https://github.com/weaveworks-liquidmetal/flintlock/releases/latest
