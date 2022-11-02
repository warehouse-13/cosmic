---
title: "Bonus: my exact demo build"
---

The final pieces if you want to copy exactly what I had on stage.

![](/img/IMG_1249.jpg)

- 2 x Rpi4 4GB RAM
- 2 x 32GB microSD
  - 1 With Ubuntu 2204, the other with 2004 (I prefer 2004 for this but did not
    get around to changing the first one yet)
- 2 x PoE hat
- Case
- 4 x ethernet cable
- Managed switch (`802.1q` VLAN and `802.3af/at` PoE capable)
- Wifi extender with ethernet port
- Extension cable

To get this all to work the way I wanted it to, I needed a wired connection (`macvtap`
interfaces cannot be created on a wireless interface) and I needed a way to reserve
or predict a free internal IP. Both things hard to come by on stage, hence
the extension cable and the wifi extender. These combined with everything else
gave me a wired connection and a VLAN with an address pool just for me.

![](/img/chain.jpg)

# Configuration

## Switch

VLAN `100` with outgoing ports to all devices and incoming port from extender
added and tagged.

## Dell (ubuntu 2204)

### VLAN

```bash
# enxf8e43b5d5048 is my ethernet interface
# 100 is my VLAN id on the switch
# 192.168.10.2/25 is an address from a range that was not in use on the main network
# this CIDR will be used in the dhcp pool
nmcli con add type vlan con-name enx.100 dev enxf8e43b5d5048 id 100 ip4 192.168.10.2/25
```

Creates VLAN device `enxf8e43b5d.100`.

:::info
I prefer to use `ip` or `netplan` for this but Ubuntu 2204 makes some annoying
decisions around networking tools which I could not be bothered to argue with.

`ip` example:
```bash
modprobe 8021q
echo "8021q" >> /etc/modules-load.d/networking.conf

ip link add link eth0 name eth0.100 type vlan id 100
ip addr add "192.168.10.2/25" dev eth0.100
ip -d link set dev eth0.100 up
```

Interface names have a length limit (except for the ones generated at boot, for
whatever reason). It is common to pick a VLAN interface name based on the parent
interface (eg. if you are creating a VLAN device linked to `eth0`, most docs would
tell you call it `eth0.100`). This is fine if the parent has a nice, short name,
but often they don't and you may end up with an `invalid arguement` error.

The VLAN device name can be anything so pick something shorter. If you want it to
be obvious what it is linked to, just abbreviate the name of the parent.
:::

### DHCP server

I started a new dhcp server in my VLAN to respond to address requests from the MicroVMs.

I set the cluster `vip` address to be from outside the pool `192.168.10.25`.

```bash
apt update
apt install -y isc-dhcp-server


mv /etc/dhcp/dhcpd.conf{,.backup}

# 192.168.10.0/25 a subnet not in use on the main network
cat <<EOF >/etc/dhcp/dhcpd.conf
default-lease-time 600;
max-lease-time 7200;
authoritative;
subnet 192.168.10.0 netmask 255.255.255.128 {
  range 192.168.10.26 192.168.10.126;
  option routers 192.168.10.2;
  option domain-name-servers 8.8.8.8, 8.8.4.4;
}
EOF

# enxf8e43b5d.100 is my vlan interface
sed -i "s/INTERFACESv4.*/INTERFACESv4=\"enxf8e43b5d.100\"/g" /etc/default/isc-dhcp-server

systemctl restart isc-dhcp-server.service
```

Leases can be viewed with `dhcp-lease-list`.

### NAT forwarding

To make sure addresses which come up in the `192.168.10.0/25` dhcp range can access
the internet without being explicitly added to the VLAN.

```bash
apt update
apt install -y firewalld

echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
sysctl -p

# enxf8e43b5d.100 is my VLAN interface
# enxf8e43b5d5048 is my ethernet interface
# basically send anything which comes over the VLAN (which the MicroVMs will be
# parented to) out through the VLAN's parent

firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i enxf8e43b5d.100 -o enxf8e43b5d5048 -j ACCEPT
firewall-cmd --permanent --direct --add-rule ipv4 nat POSTROUTING 0 -o enxf8e43b5d5048 -j MASQUERADE
firewall-cmd --reload
```

## Rp0 (ubuntu 2204)

### VLAN

```bash
# eth0 is the ethernet interface on the board
# 100 is the switch VLAN id
# 192.168.10.3 is the next ip in the VLAN subnet after the one my dell took
nmcli con add type vlan con-name eth0.100 dev eth0 id 100 ip4 192.168.10.3/25
```

## Rp1 (ubuntu 2004)

### VLAN

```bash
# eth0 is the ethernet interface on the board
# 100 is the switch VLAN id
# 192.168.10.4 is the next ip in the VLAN subnet after the ones taken by the dell
# and rp0
cat <<EOF >/etc/dhcp/dhcpd.conf
network:
	version: 2
	ethernets:
		eth0:
			dhcp4: true
			optional: true
	vlans:
		eth0.100:
			id: 100
			link: eth0
			addresses: [192.168.10.4/25]
EOF

netplan apply
```

![](/img/IMG_1255.jpg)
