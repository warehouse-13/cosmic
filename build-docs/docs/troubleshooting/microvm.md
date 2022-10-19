---
title: MicroVMs
---

Understanding common MicroVM boot/run errors

### MicroVM network configuration failure/timeout

When MicroVMs boot, they will be assigned some IPs from wherever you have a dhcp server.
This may be your home router or a dedicated pool you have configured for a bridge
or VLAN.

If you see the following logs, then it means this has failed.

```sh
A start job is running for Wait for Network to be Configured (38s / no limit)
... etc for a couple of mins. but really if it is going to work it will do
... so within 10 seconds
Failed Wait for Network to be Configured.
```

Steps:
- Check that the host can ping the router. If not, and you have access to the router,
	disconnect the device (turn it off) and remove the previous record from the router's
	list. Reconnect the device and try pinging again.
- Ensure that the correct interface has been configured in `/var/lib/flintlockd/config.yaml`.
	`parent-iface` should be set to a wired interface (eg `eth0`). Likewise, if you are
	using flintlock in bridge mode, `bridge-name` should be a bridge which is mastered
	to a wired parent interface. (_Note: I have really struggled to get a wire-backed bridge
	to work at all, so this may just not be a thing you can do with a Pi_ :woman-shrugging:_.
	I am VERY happy to be corrected on this!_)
- On the board run `tcpdump -i eth0 -vv` while creating a MicroVM. Look for dhcp
	`Discover`, `Offer`, `Request` and `ACK` messages. If you see none, it means the
	MicroVM cannot reach your dhcp server at all. If you see the first 2 but not the last,
	it means the dhcp server has offered an IP by the client for some reason does not
	receive or accept that. From here you are in the fun world of debugging dhcp
	and network errors. (_Honestly after a couple of hours of this I table-flipped
	and re-flashed my SD card with Ubuntu 20.04 which worked and I called it a day_.)

### Cannot SSH into MicroVM

- Check that you set a public SSH in the spec `user-data`.
- Check the `firecracker.stdout` boot logs of the MicroVM to make sure you have
	the correct IP, or that one has been set at all (see the above section).
