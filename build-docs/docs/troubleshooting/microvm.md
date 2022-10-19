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
- Last but not least: try turning it off and on again. Delete the wired interface
	**making sure you are SSH-ed over a different interface first! That is such an annoying
	thing to forget!**. Then simply bring the interface back.
	Using `nmcli` as an example:
	```bash
	nmcli connection show
	NAME                UUID                                  TYPE      DEVICE
	Wired connection 1  8c190b45-e190-3454-aef8-155f29ccda56  ethernet  eth0
	BT-6MCW5R           44c19953-95d8-4761-b935-d7fb183623ec  wifi      wlan0

	nmcli connection delete 8c190b45-e190-3454-aef8-155f29ccda56
	Connection 'Wired connection 1' (8c190b45-e190-3454-aef8-155f29ccda56) successfully deleted.

	nmcli connection add type ethernet autoconnect yes con-name eth0 ifname eth0
	Connection 'eth0' (1070923d-0fa3-408c-bb76-df3b09da8746) successfully added.

	nmcli connection show
	NAME       UUID                                  TYPE      DEVICE
	eth0       1070923d-0fa3-408c-bb76-df3b09da8746  ethernet  eth0
	BT-5MCW5R  44c19953-95d8-4761-b935-d7fb183623ec  wifi      wlan0
	```

	It seems that the name of the interface shown here, which honestly I assumed was
	just a label, seems to impact whether the `eth0` interface is usable, which is really
	weird so make sure you create the interface with matching `name` and `device` indentifiers.

	If it still doesn't work after this, try taking the interface down and up a
	couple more times. `ip link set down eth0 && ip link set up eth0`. No joke.

### Cannot SSH into MicroVM

- Check that you set a public SSH in the spec `user-data`.
- Check the `firecracker.stdout` boot logs of the MicroVM to make sure you have
	the correct IP, or that one has been set at all (see the above section).
