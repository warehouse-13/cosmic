---
title: Prep the boards
---

This is the initial setup for Raspberry Pi, regardless of how you are going to use it.

### Flash the MicroSDs

Follow [this guide][flash-guide] to make your microSD cards bootable to Ubuntu.
Choose either 20.04 or 22.04. If you are using a Model 4B you'll want the 64bit
image. I recommend using a `Server` image not a `Desktop` one, unless you want
to see something nice when you plug your boards into a monitor. With the `Server`
image you wont need a monitor at all and can just directly SSH.

BEFORE you click the `Write` button on the imager, click the cog icon in the bottom
right hand corner to open the "Advanced options".
Set the hostname to something useful. I usually go for `rp0`, `rp1`, etc.
Select `Enable SSH` and set a username and password.
Click `Save` then `Write`.

:::note
If you selected a `Desktop` image, not a server image, SSH may not work right away and you'll
likely have to plug in a monitor for your first boot so that you can click some things
and enable the ssh daemon.
:::

### Boot

Once each card for your boards are flashed, put them into the correct slots under your
boards and power them up.

### SSH

Attach an ethernet cable to each board. Open a terminal on your main PC/Laptop,
make sure it is connected to the same network. (I will call this machine the
"admin" one from now on.)

Discover which internal LAN IPs your boards are running on. You can do this by one of the following methods:
- Looking at your router DHCP leases
- Attaching the boards to a monitor, opening a terminal and running `hostname -I`
  (it will likely be the first one), and making a note of it
- Running `arp -na | grep -i  "b8:27:eb\|dc:a6:32\|e4:5f:01"` in your admin machine.
  Any board addresses will be listed at the start of each line. _Note: if you are connected
  to both wifi and ethernet you may get back 2 addresses per board, either will do._


Open a new terminal session window per board. I like to use [`tmux`][tmux] (my config is [here][tmux-conf]).

SSH into each board:

```bash
ssh <username>@<ip address>
```

Enter the password you set up and you should be in.

#### Optional: add SSH keys

If you already have a keypair handy, copy the public half into a buffer.

If you don't have one already you can generate a new one.
On your admin machine, generate an SSH key pair:

```bash
ssh-keygen -t ed25519
```

Copy the contents of the PUBLIC key file. If you ran the command with defaults
this will be at `~/.ssh/id_rsa.pub`.

On each board, paste the public key into `~/.ssh/authorized_keys`.

Next time you SSH you can skip typing in a password with the following flag:

```bash
ssh -i <path to PRIVATE key file> <username>@<ip address>
```

### Credits
- [How to create an Ubuntu Server SDcard for Raspberry Pi][flash-guide]
- [How to install Ubuntu Server on your Raspberry Pi][ubuntu-1]

[flash-guide]: https://ubuntu.com/tutorials/how-to-sdcard-ubuntu-server-raspberry-pi#1-overview
[ubuntu-1]: https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#1-overview
[tmux]: https://github.com/tmux/tmux
[tmux-conf]: https://gist.github.com/Callisto13/b4cc217ca4f1c2f7f51405d62b941adb
