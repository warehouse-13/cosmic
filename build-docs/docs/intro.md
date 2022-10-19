---
title: Liquid Metal RPi Homelab
---

Take your Kubernetes homelab cluster to the next level with Liquid Metal MicroVMs.

:::tip Info
This rig was built quickly and under budget for a Kubernetes community days
demo. I am sharing it so that other people can have fun with the experiment.

There is absolutely no guarantee that any of this will work for you. If you are
using this guide it means you are prepared to use it as a base, and that you are
very happy (excited even!) to spend potentially lots of time debugging obscure
networking and kernel errors.

That said, I have done my best to capture everything thing I did, and everything
which went wrong. I am continuing to fine-tune and improve, so will
try to publish changes. If you come across something which could be better, feel
free to contribute! :purple_heart:
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
follow these docs.

![Liquid Metal high-level illustration](/img/high-level.jpg)

### Why cosmic?

Bonus points if you got the Disney reference.

![Alt Text](https://media.tenor.com/C7BweO_X39sAAAAd/aladdin-animated.gif)

[lm-docs]: https://weaveworks-liquidmetal.github.io/site/
