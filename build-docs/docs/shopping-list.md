---
title: Shopping list
---

The basic shopping list can be found on the [Liquid Metal docs][list]

In addition to those items I used a [managed switch][m-switch].
I needed one for the demo for several cascading reasons:
1. To create `macvtap` interfaces for my microvms, my boards needed to be wired.
	Coming across multiple ethernet ports on stage is not easy.
1. I wanted to have more control over the network (VLAN)
my MicroVMs were created in, and so I could watch dhcp lease assignment.
This is not strictly necessary in a homelab setup, as the MicroVMs will be
able to get addresses from your router.

![net](/img/net.png)

Head over to the Liquid Metal docs for the [build guide][build-docs],
and see the final page [here][demo-build] for the exact setup I had for the demo.

![rig](/img/rig2.jpg)

[list]: https://weaveworks-liquidmetal.github.io/site/docs/tutorial-rpi/shopping-list/
[m-switch]: https://www.amazon.co.uk/gp/product/B08DVFMCK4/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1
[build-docs]: https://weaveworks-liquidmetal.github.io/site/docs/tutorial-rpi/intro/
[demo-build]: docs/demo-build.md
