---
title: Liquid Metal RPi Homelab
---

Take your Kubernetes homelab cluster to the next level with Liquid Metal MicroVMs.

As demoed at [Kubernetes Community Days UK 2022][kcduk].

:::warning Important info
The detailed build docs have moved to live under the official [Liquid Metal documentation][build-docs].

These docs only contain demo specific notes.
:::

![rig](/img/rig1.jpg)

### Liquid Metal?

TL;DR:

Liquid Metal is a "kubernetes on bare-metal solution" owned by Weaveworks and
built by OSS contributors. Check out the [Liquid Metal docs][lm-docs] to learn
more about the components we will be installing.

One reason why Liquid Metal is a hit is because it allows you to use your bare-metal
devices to their absolute max. Where normally you would setup a homelab k8s cluster
with 1 node per Pi board, with Liquid Metal you can cram multiple nodes (within reason)
onto the same board. It does this by creating MicroVMs, which are just about as
fast and light as containers, but with the security of VMs.

So that's what Cosmic is.

### What are we building?

Here is a very high-level diagram which shows what you will end up with if you
follow [the build docs][build-docs].

![Liquid Metal high-level illustration](/img/high-level.jpg)
_Diagram by [Josh Michielsen](https://github.com/jmickey)._

### Why cosmic?

Bonus points if you got the Disney reference.

![Alt Text](https://media.tenor.com/C7BweO_X39sAAAAd/aladdin-animated.gif)

[lm-docs]: https://weaveworks-liquidmetal.github.io/site/
[build-docs]: https://weaveworks-liquidmetal.github.io/site/docs/tutorial-rpi/intro/
[kcduk]: https://www.youtube.com/watch?v=8GjFLRpyilw&list=PLX3geWFOgXozvW1avyeZfgPJXrWrzHgYV&index=29&ab_channel=KubernetesCommunityDaysUK
