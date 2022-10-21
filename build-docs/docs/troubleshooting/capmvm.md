---
title: CAPMVM
---

Understanding common `CAPMVM` errors.

### Failed to create client for Cluster default/lm-pi-homelab

```
failed to create client for Cluster default/lm-pi-homelab: Get \"https://192.168.10.25:6443/api?timeout=10s\
```

This error is expected for the first ~5mins of cluster creation. We are waiting
for:
- CAPMVM to instruct flintlock to create a MicroVM
- The MicroVM to boot
- Images to download and the kubelet process to start

The time to do this will vary depending on numerous factors, including your network
speeds, the backing storage of your boards and how much memory is available.

If you still see the error after 5 mins, check to see whether the MicroVM booted correctly.
See the [troubleshooting page for MicroVMs][mvm-tr]. Common causes for failure are:
- There is not enough RAM allocated to the MicroVM
- The MicroVM cannot access a dhcp service or get an IP
- The MicroVM cannot resolve addresses, so cannot pull required k8s images
- The address chosen for the `kube-vip` is not free or accessible on that subnet
- Some other kubelet issue has occurred and the service has not been able to start

### Deleting a cluster hangs forever

Sometimes trying to delete a cluster at the wrong moment of creation (or when something
went wrong with that creation to begin with) can cause a delete to hang forever.

Check the CAPMVM logs on your management cluster to see if something is obviously failing.

:::note
`failed to create client for Cluster default/lm-pi-homelab: Get \"https://192.168.10.25:6443/api?timeout=10s\` is expected and not an issue
for a delete.
:::

If you see the following:

```
failed getting microvm: rpc error: code = Unavailable desc = connection error: desc = \"transport: Error while dialing dial tcp 192.168.1.216:9090: i/o timeout\
```

It means your `flintlockd` service is no longer accessible at that address.

Check that flintlock is still running on that board `systemctl status flintlockd.service`.
Refer to the [flintlock troubleshooting][fl-tr] if it is not.

If your flintlockd service is running fine, check that the address is correct, or that
it is accessible on that particular interface. You won't be able to update the address on
the spec, but record the address for any manual clean up later.

To force the CAPI cluster deletion, you can edit various objects in order.
Start with the `MicrovmMachine` and remove the finalizer.

```yaml
   finalizers:
   - microvmmachine.infrastructure.cluster.x-k8s.io
```

That should do the trick, but if not, proceed to do the same to the `Machine`:
```yaml
  finalizers:
  - machine.cluster.x-k8s.io
```
And again to the `Cluster`:
```yaml
  finalizers:
  - cluster.cluster.x-k8s.io
```

If there are any MicroVMs still running on the board, you can clean them up
with [`hammertime`][ht] or kill the `firecracker` processes and instruct `containerd`
to remove the lease and clear the content store.

```bash
sudo killall firecracker

ctr -n flintlock -a /var/run/containerd-dev/containerd.sock leases ls
ctr -n flintlock -a /var/run/containerd-dev/containerd.sock leases del <id>
```

[ht]: https://github.com/warehouse-13/hammertime
[fl-tr]: /docs/troubleshooting/flintlock
[mvm-tr]: /docs/troubleshooting/capmvm
