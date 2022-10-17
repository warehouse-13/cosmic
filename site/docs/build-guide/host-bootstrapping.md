---
title: Flintlock bootstrapping
---

The Raspberry Pi boards will be bootstrapped to run MicroVMs.
For more info on each component check out the [Liquid Metal docs site][lm-docs].

Components/setup TL;DR:
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
  needs to be enabled in the host kernel.

We will use a script to bootstrap the lot. Download it onto each board:

```bash
wget https://raw.githubusercontent.com/weaveworks-liquidmetal/flintlock/main/hack/scripts/provision.sh
chmod +x provision.sh
```

Check that KVM is enabled:

```bash
sudo apt update
sudo apt install cpu-checker

kvm-ok
# INFO: /dev/kvm exists
# KVM acceleration can be used
```

Install extra linux modules for pi:

```bash
sudo apt install linux-modules-extra-raspi
```

Enable `macvtap` device creation:

```bash
modprobe macvlan
lsmod | grep macvlan
# macvlan                36864  1 macvtap
```

Run the script:

```bash
./provision.sh all -y \
  --dev \
  --insecure \
  --grpc-address 0.0.0.0:9090
```

<details><summary>Output</summary>
</details>

[lm-docs]: https://weaveworks-liquidmetal.github.io/site/
