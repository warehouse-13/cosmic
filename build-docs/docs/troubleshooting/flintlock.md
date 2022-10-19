---
title: Flintlock
---

Understanding common `flintlockd` errors.

If you create a MicroVM but find that the `firecracker.stdout` or `stderr` or `log`
files for it are empty, it means that `flintlockd` was not able to start the MicroVM at
all.

Flintlock logs can be watched by running:

```bash
journatctl -fu flintlockd.service
```

### Snapshotter not loaded

```
"failed to reconcile vmid FOO/BAR/ID: executing plan: executing plan steps: executing steps: executing step runtime_volume_mount: mount images docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 for volume use: checking if image docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8 has been unpacked with snapshotter devmapper: snapshotter not loaded: devmapper: invalid argument"
```

Your containerd storage is not provisioned.

You can check this with `dmsetup ls`. It should return at least one line:

```
flintlock-dev-thinpool  (253:0)
```

The loop-backed thinpool will not survive restarts, to you'll need
to recreate this whenever you reboot.

To remedy:

- Recreated the thinpool: `provision.sh devpool`
- Restart containerd: `systemctl restart containerd-dev.service`
- Restart flintlock: `systemctl restart flintlockd.service`

### Operation not supported (network, macvtap)

I wish I had grabbed the error when I saw it, but alas I did not have the foresight
that I would be writing this page.

It was something along the lines of:

```sh
"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: Operation not supported"
# or
"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: Operation not permitted"
```

This means that your device does not have the module to create `macvtap` or `macvlan`
devices.

You may also see:

```
RTNETLINK answers: Operation not supported
```

if you try to create a device yourself.

To remedy, follow the instructions in the [build guide](/docs/build-guide/host-bootstrapping)
to install the extra kernel modules.

### A parent network device name is required for attaching a TAP interface

```sh
"failed to reconcile vmid <FOO/BAR/ID>: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: a parent network device name is required for attaching a TAP interface"
```

This means that you are trying to create a MicroVM in "bridge mode", ie: you have
set the `eth1` interface `type` to `1` in a `flintlock` spec or have set
`spec.template.spec.networkInterfaces[0].type` to `tap`, but have not set a `bridge-name`
in either the spec or the `flintlockd` config.

**Option A**: Set the MicroVM to be created with `macvtap` instead, by setting the `eth1`
interface `type` to `0` (if just using `flintlock`), or by setting
`spec.template.spec.networkInterfaces[0].type` to `macvtap`.

**Option B**: Open `/etc/opt/flintlockd/config.yaml` and set `bridge-name` to the name
of a bridge you have created. Save the file and restart the service: `systemctl restart flintlockd.service`.
This bridge will be used as a parent for all MicroVM `tap` devices.

**Option C**: Edit the flintlock or capmvm spec to use a specific bridge for that
MicroVM.

```json
// flintlock spec
...
"interfaces": [
	{
		"device_id": "eth1",
		"type": 1,
		"overrides": {
			"bridge_name": "foo"
		}
	}
],
...
```
```yaml
# capmvm spec
...
networkInterfaces:
- guestDeviceName: eth1
  type: macvtap
	overrides:
		bridgeName: foobar
...
```

### A parent network device name is required for macvtap interfaces

```sh
"failed to reconcile vmid FOO/BAR/ID: executing plan: executing plan steps: executing steps: executing step network_iface_create: creating network interface: a parent network device name is required for macvtap interfaces"
```

This means that you are trying to create a MicroVM in "macvtap mode", ie: you have
set the `eth1` interface `type` to `0` in a `flintlock` spec or have set
`spec.template.spec.networkInterfaces[0].type` to `macvtap`, but have not set a `parent-iface`
in the `flintlockd` config.

**Option A**: Set the MicroVM to be created with `tap` (bridge mode) instead, by setting the `eth1`
interface `type` to `1` (if just using `flintlock`), or by setting
`spec.template.spec.networkInterfaces[0].type` to `tap`. Requires creating a bridge
and configuring it in `/etc/opt/flintlockd/config.yaml` under `bridge-name`.

**Option B**: Open `/etc/opt/flintlockd/config.yaml` and set `parent-iface` to the name
of your device's default **wired** interface (eg `eth0`). Save the file and restart the service: `systemctl restart flintlockd.service`.
This interface will be used as a parent for all MicroVM `macvtap` devices.

