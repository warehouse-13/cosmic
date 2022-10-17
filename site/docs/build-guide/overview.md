---
title: Board setup
---

### Flash the MicroSDs

Follow [this guide][flash-guide] to make your microSD cards bootable to Ubuntu.
Choose either 20.04 or 22.04. If you are using a Model 4B you'll want the 64bit
image.

BEFORE you click the `Write` button on the imager, click the cog icon in the bottom
right hand corner to open the "Advanced options".
Set the hostname to something useful. I go for `rp0`, `rp1`, etc. Click `Save` then `Write`.

:::note
While you are on the "Advanced Options" page, you'll set that you can
apparently set SSH keys or a password. I tried using this several
times to allow me to SSH in immediately after boot and not have to attach a monitor,
but just could not get it work as it always seemed to want me to do more on my first
boot. If you want to see if it works for you, skip ahead to the SSH section after flashing.
:::

Once each card for your boards are flashed, put them into the correct slots under your
boards.

### First boot

We need to set up each board one after the other.

Attach your monitor, keyboard and mouse to the first board. Plug in the power
cable and wait for it to boot up.

Click whatever it tells you to click, set up a password etc. While you are there
you can connect to Wifi if you like. We need a wired connection for later,
but there is no harm in having both.

Once all the basics are covered, you can unplug the monitor, keyboard and mouse,
and move on to the next board.

### SSH

Attach an ethernet cable to each board. Open a terminal 

[flash-guide]: https://ubuntu.com/tutorials/how-to-sdcard-ubuntu-server-raspberry-pi#1-overview
