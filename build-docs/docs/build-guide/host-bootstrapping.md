---
title: Bootstrap the hosts
---

The Raspberry Pi boards will be bootstrapped to run MicroVMs.
For more info on each component check out the [Liquid Metal docs site][lm-docs].

## Components/setup TL;DR:
- **Flintlock** is the entrypoint API for creating MicroVMs. It wraps firecracker
  and containerd to provide a usable management experience.
- **Firecracker** is what will actually start MicroVMs as processes
- **Containerd** is used to provide root volumes and kernel binaries (from snapshots of images)
  to the MicroVMs, as well as to store state.
- Containerd uses **devicemapper** to store images and snapshots. In this build I
  am using a development setup with **thinpool** storage. If you have spare disks
  for each board, you _could_ skip the `--dev` flag in the command below.
- Each MicroVM is created with 2 network interfaces. One of those is a **macvtap**
  interface in bridge mode which gives the MicroVM its network access. This is something
  needs to be enabled in the host kernel. (Flintlock also allows for a standard bridge/tap
  setup, but we are going with `macvtap` here.

## Install

Check that KVM is enabled:

```bash
sudo apt update
sudo apt install cpu-checker

kvm-ok
# INFO: /dev/kvm exists
# KVM acceleration can be used
```

Load the `macvlan` (`macvtap`) module:

```bash
modprobe macvlan
lsmod | grep macvlan
# macvlan                36864  1 macvtap
```

If you don't have the module (likely on ubuntu 22.04), install extra linux modules for pi:

```bash
sudo apt install linux-modules-extra-raspi
```


:::tip
If `modprobe macvlan` errors with
```
modprobe: FATAL: Module macvlan not found in directory /lib/modules/5.15.0-1015-raspi
```

reboot the Pi and try again afterwards.
:::

We will use a script to bootstrap the rest. Download it onto each board:

```bash
wget https://raw.githubusercontent.com/weaveworks-liquidmetal/flintlock/main/hack/scripts/provision.sh
chmod +x provision.sh
```

Run the script:

```sh
./provision.sh all -y \
  --dev \
  --insecure \
  --grpc-address 0.0.0.0:9090
```

:::note
For this we are not setting up the flintlock server with any sort of auth.
Since it is running on your LAN this is not really a problem, but you can add some
certs if you want later. Check out the [flintlock security docs][sec-docs] for instructions.
:::

<details><summary>Output</summary>

```sh
[flintlock provision.sh] 2022-10-18 16:03:27 UTC: Provisioning host rp1
[flintlock provision.sh] The following subcommands will be performed: apt, firecracker, containerd, flintlock, direct_lvm|devpool
[flintlock provision.sh] Will install binaries for architecture: arm64
[flintlock provision.sh] Installing required apt packages
...
[flintlock provision.sh] Packages installed
[flintlock provision.sh] Creating containerd directory /var/lib/containerd-dev/snapshotter/devmapper
[flintlock provision.sh] Creating containerd directory /run/containerd-dev
[flintlock provision.sh] Creating containerd directory /etc/containerd
[flintlock provision.sh] All containerd directories created
[flintlock provision.sh] Will create loop-back thinpool flintlock-dev-thinpool
[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/data of size 100G
[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/data created
[flintlock provision.sh] Creating sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata of size 10G
[flintlock provision.sh] Sparse file /var/lib/containerd-dev/snapshotter/devmapper/metadata created
[flintlock provision.sh] Associating loop devices with sparse files
[flintlock provision.sh] Loop devices /dev/loop13 and /dev/loop14 associated
[flintlock provision.sh] Creating thinpool flintlock-dev-thinpool with devices /dev/loop13 and /dev/loop14
[flintlock provision.sh] Thinpool flintlock-dev-thinpool created
[flintlock provision.sh] Dev thinpool creation complete
[flintlock provision.sh] Installing firecracker version latest to /usr/local/bin
[flintlock provision.sh] Firecracker version v1.1.1-macvtap successfully installed
[flintlock provision.sh] Installing containerd version latest to /usr/local/bin
[flintlock provision.sh] Containerd version v1.6.8 successfully installed
[flintlock provision.sh] Writing containerd config to /etc/containerd/config-dev.toml
[flintlock provision.sh] Containerd config saved
[flintlock provision.sh] Starting containerd service with /etc/systemd/system/containerd-dev.service
[flintlock provision.sh] Containerd running
[flintlock provision.sh] Installing flintlockd version latest to /usr/local/bin
[flintlock provision.sh] Flintlockd version v0.4.0 successfully installed
[flintlock provision.sh] Writing flintlockd config to /etc/opt/flintlockd/config.yaml.
[flintlock provision.sh] Flintlockd config saved
[flintlock provision.sh] Starting flintlockd service with /etc/systemd/system/flintlockd.service
[flintlock provision.sh] Flintlockd running at 0.0.0.0:9090 via interface eth0
[flintlock provision.sh] 2022-10-18 16:04:22 UTC: Host rp1 provisioned
```
</details>

## Optional: VLAN

The above instructions give you the most basic setup. If you want more control
and observability of the network that the MicroVMs are created in, you can [copy my
_exact_ demo setup and create a VLAN][demo].

[lm-docs]: https://weaveworks-liquidmetal.github.io/site/
[sec-docs]: https://weaveworks-liquidmetal.github.io/site/docs/guides/authn/
[demo]: /docs/build-guide/demo-build
