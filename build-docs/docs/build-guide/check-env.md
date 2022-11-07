---
title: Check the environment
---

Have a look around each board and do some tests to make sure things are running.

## Validate the provision succeeded

### Flintlock

**Flintlockd** should be running as a service:

```bash
systemctl status flintlockd.service
```

<details><summary>Output</summary>

```bash
● flintlockd.service - flintlock microvm service
     Loaded: loaded (/etc/systemd/system/flintlockd.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2022-10-18 11:06:46 BST; 6s ago
       Docs: https://docs.flintlock.dev/
    Process: 2688 ExecStartPre=which firecracker (code=exited, status=0/SUCCESS)
    Process: 2690 ExecStartPre=which flintlockd (code=exited, status=0/SUCCESS)
   Main PID: 2691 (flintlockd)
      Tasks: 9 (limit: 4075)
     Memory: 10.9M
        CPU: 178ms
     CGroup: /system.slice/flintlockd.service
             └─2691 /usr/local/bin/flintlockd run

Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="flintlockd grpc api server starting"
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=warning msg="basic authentication is DISABLED"
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=warning msg="TLS is DISABLED"
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting microvm controller"
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting microvm controller with 1 workers" controller=microvm
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=debug msg="starting grpc server listening on endpoint 0.0.0.0:9090"
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="resyncing microvm specs" controller=microvm
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=trace msg="querying all microvms: map[Namespace:]" component=app controller=microvm
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="starting event listener" controller=microvm
Oct 18 11:06:46 rp0 flintlockd[2691]: time="2022-10-18T11:06:46+01:00" level=info msg="Starting workersnum_workers1" controller=microvm
...
```

</details>

Flintlock's config can be found at `/etc/opt/flintlockd/config.yaml`. When you start
creating microvms it will store the state at `/var/lib/flintlock/vm/`.


### Containerd

**Containerd** should be running as a service tagged with `-dev`.
```bash
systemctl status containerd-dev.service
```

<details><summary>Output</summary>

```bash
● containerd-dev.service - containerd container runtime
     Loaded: loaded (/etc/systemd/system/containerd-dev.service; disabled; vendor preset: enabled)
     Active: active (running) since Tue 2022-10-18 11:06:10 BST; 3s ago
       Docs: https://containerd.io
    Process: 2651 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)
   Main PID: 2652 (containerd)
      Tasks: 10
     Memory: 18.1M
        CPU: 277ms
     CGroup: /system.slice/containerd-dev.service
             └─2652 /usr/local/bin/containerd --config /etc/containerd/config-dev.toml

Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308115963+01:00" level=info msg=serving... address=/run/containerd-dev/containerd.sock.ttrpc
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.307973148+01:00" level=info msg="Start event monitor"
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308239926+01:00" level=info msg="Start snapshots syncer"
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308290963+01:00" level=info msg="Start cni network conf syncer for default"
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308327704+01:00" level=info msg="Start streaming server"
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308422685+01:00" level=info msg=serving... address=/run/containerd-dev/containerd.sock
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308730833+01:00" level=debug msg="sd notification" error="<nil>" notified=true state="READY=1"
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.308806370+01:00" level=info msg="containerd successfully booted in 0.101379s"
Oct 18 11:06:10 rp0 systemd[1]: Started containerd container runtime.
Oct 18 11:06:10 rp0 containerd[2652]: time="2022-10-18T11:06:10.410682398+01:00" level=debug msg="garbage collected" d=13.099893ms
...
```
</details>

:::note
The service is tagged like this because we used the `--dev` flag and so that
this containerd instance does not mix with any existing service, although it could
use an existing one fine. Your boards probably don't have containerd running already
anyway, so if you like you can remove the `containerd-dev` service and either reinstall
the service without the `-dev` tag by running `./provision.sh containerd`, or just
use an existing service if you have it. Either way you'll need to:

- update the reference to the socket that `flintlockd` has at `/etc/opt/flintlockd/config.yaml` and restart `flintlockd`
- ensure you have the correct thinpool name in the containerd confid
:::

Containerd's config file will be at `/etc/containerd/config-dev.toml`.

### Devmapper

A **thinpool** will have been created on loopback devices to act as containerd's devmapper storage.
Check this with:

```bash
losetup -a | grep data

dmsetup ls
```

<details><summary>Output</summary>

```bash
/dev/loop13: [45826]:416349 (/var/lib/containerd-dev/snapshotter/devmapper/data)
/dev/loop14: [45826]:416352 (/var/lib/containerd-dev/snapshotter/devmapper/metadata)
```

```bash
flintlock-dev-thinpool  (253:0)
```
</details>

:::note
The thinpool will **not** survive a reboot. If you need to switch off your Pi, getting
the pool back is easy:

```bash
./provision.sh devpool
systemctl restart containerd-dev.service
systemctl restart flintlockd.service
```
:::

### Firecracker

There won't be any firecracker process running yet. The binary should exist at `/usr/local/bin/firecracker`.

## Create a test MicroVM

You can test that everything is working correctly by creating a basic MicroVM.

Download [`hammertime`][ht] **to your admin machine**.

Write the following spec to a file:

```bash
cat << EOF >mvm-spec.json
{
    "id": "mvm0",
    "namespace": "ns0",
    "vcpu": 2,
    "memory_in_mb": 2048,
    "kernel": {
      "image": "docker.io/claudiaberesford/flintlock-kernel-arm:5.10.77",
      "filename": "boot/image",
      "add_network_config": true
    },
    "root_volume": {
        "id": "root",
        "is_read_only": false,
        "source": {
          "container_source": "docker.io/claudiaberesford/capmvm-kubernetes-arm:1.21.8"
        }
      },
    "interfaces": [
      {
        "device_id": "eth1",
        "type": 0
      }
    ],
    "metadata": {
      "meta-data": "aW5zdGFuY2VfaWQ6IG5zMC9tdm0wCmxvY2FsX2hvc3RuYW1lOiBtdm0wCnBsYXRmb3JtOiBsaXF1aWRfbWV0YWwK",
      "user-data": "I2Nsb3VkLWNvbmZpZwpob3N0bmFtZTogbXZtMAp1c2VyczoKLSBuYW1lOiByb290CiAgc3NoX2F1dGhvcml6ZWRfa2V5czoKICAtIHwKICAgIHNzaC1lZDI1NTE5IGZvb2JhcgpmaW5hbF9tZXNzYWdlOiBUaGUgTGlxdWlkIE1ldGFsIGJvb3RlZCBzeXN0ZW0gaXMgZ29vZCB0byBnbyBhZnRlciAkVVBUSU1FIHNlY29uZHMKYm9vdGNtZDoKLSBsbiAtc2YgL3J1bi9zeXN0ZW1kL3Jlc29sdmUvc3R1Yi1yZXNvbHYuY29uZiAvZXRjL3Jlc29sdi5jb25mCg=="
    }
}
EOF
```

:::tip
If you want to be able to SSH into MicroVMs once they are created, decode (`base64 -d`) the `"user-data"`
and replace the dummy public SSH key with your own, then re-encode the text and
add it back to the spec.
:::

From your **admin machine**, use `hammertime` to create a MicroVM on each board:

```bash
hammertime create -a <ip of board>:9090 -f mvm-spec.json
```

Back on the board, find the MicroVM's boot logs:

```bash
tail -f /var/lib/flintlock/vm/ns0/mvm0/<UUID>/firecracker.stdout
```

Eventually you should see something like:
```
The Liquid Metal booted system is good to go after $UPTIME seconds
```

:::info
The first time you do this may take a while. Depending on what RAM you have and what
storage you are using, containerd will need time to download, unpack and snapshot
the kernel and OS images. No boot logs will be written until **after** that.
Subsequent creates will be much faster.
:::


If you don't see that message, or there isn't anything in that file at all after about
5 mins, go to the [Troubleshooting page][trouble].

## Check what was created

### Flintlock

`flintlockd` logs will be followable with:

```bash
journalctl -fu flintlockd.service
```

Data and logs for each MicroVM will be stored under `/var/lib/flintlock/vm`, with
the full path for a MicroVM being `/var/lib/flintlock/vm/NAMESPACE/NAME/UUID`.

Under that directory are the following files:
- `firecracker.cfg`: the configuration set by `flintlock` for `firecracker`
- `firecracker.log`: logs from the firecracker process
- `firecracker.metrics`: metrics from the firecracker process
- `firecracker.pid`: the pid of the running firecracker process
- `firecracker.stderr`: MicroVM boot errors
- `firecracker.stdout`: MicroVM boot logs
- `metadata.json`: MicroVM boot userdata

### Firecracker

Each MicroVM runs as a detached `firecracker` process. You will find logs in the
files given in the section above.

To see the processes, run:

```bash
ps aux | grep firecracker
```

### Containerd

Use `ctr` to inspect artifacts:

```bash
# leases are a reference to other resources connected to an object created by a client
sudo ctr -n flintlock -a /run/containerd-dev/containerd.sock leases ls

# images are the bases images for snapshots
sudo ctr -n flintlock -a /run/containerd-dev/containerd.sock images ls

# snapshots and microvm configuration are stored in the content store
sudo ctr -n flintlock -a /run/containerd-dev/containerd.sock content ls
```

### Network interfaces

Flintlock will create 2 interfaces per MicroVM attached to the parent interface,
which in this case will be the board's ethernet interface.

These can be seen with:

```bash
ip link ls
```

### DHCP address leases

Each MicroVM requests an address from the DHCP server on the network on boot.
In this case we are relying on your router's DHCP pool, so you can log in there
to see what was set.

:::note
This process is different if you copied my exact setup, see [that page][demo] for details.
:::

## SSH into the MicroVM

If you altered the `"user-data"` in the spec to have your public SSH key, then you
can SSH into the MicroVM.

You can get the IP from either your DHCP logs, or from the MicroVM boot logs at
`firecracker.stdout`.

<details><summary>Sample network info from `firecracker.stdout`</summary>

You're looking for something like this. Here the IP `192.168.10.174` associated
with `eth0` is my MicroVM's address.

```
+--------+------+-------------------------------------------+---------------+--------+-------------------+
| Device |  Up  |                  Address                  |      Mask     | Scope  |     Hw-Address    |
+--------+------+-------------------------------------------+---------------+--------+-------------------+
|  eth0  | True |              192.168.10.174               | 255.255.255.0 | global | 3e:8e:97:12:f8:95 |
|  eth0  | True | 2a00:23c6:990:5d01:3c8e:97ff:fe12:f895/64 |       .       | global | 3e:8e:97:12:f8:95 |
|  eth0  | True |        fe80::3c8e:97ff:fe12:f895/64       |       .       |  link  | 3e:8e:97:12:f8:95 |
|  eth1  | True |                169.254.0.1                |  255.255.0.0  | global | aa:ff:00:00:00:01 |
|  eth1  | True |          fe80::a8ff:ff:fe00:1/64          |       .       |  link  | aa:ff:00:00:00:01 |
|   lo   | True |                 127.0.0.1                 |   255.0.0.0   |  host  |         .         |
|   lo   | True |                  ::1/128                  |       .       |  host  |         .         |
+--------+------+-------------------------------------------+---------------+--------+-------------------+
```

</details>

There won't be anything interesting to see really, it's just a VM, but if something
is going wrong it is useful to be able to get in.

## Delete the MicroVM

Use `hammertime` to delete:

```bash
hammertime delete -a <ip of board>:9090 -f mvm-spec.json
```

Once you have validated that your boards are configured correctly, you can create
the cluster from your **admin** machine.

[ht]: https://github.com/warehouse-13/hammertime
[trouble]: /docs/category/troubleshooting/
[demo]: /docs/build-guide/demo-build
