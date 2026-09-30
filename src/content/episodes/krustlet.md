---
title: WebAssembly, Krustlet, and the Future
description: Bridget chats with Taylor Thomas and Brian Ketelsen about WebAssembly, Krustlet, and the Future.
date: 2020-04-14T13:00:00.000Z
publishDate: 2020-04-14T13:00:00.000Z
episodeNumber: "151"
podcastFile: arrested-devops-podcast-episode151.mp3
podcastDuration: 42:49
episodeImage: episode/img/krustlet.png
episodeBanner: episode/img/krustlet-banner.png
images:
  - img/social/fb/krustlet.png
guests:
  - person: tthomas
    snapshot: tthomas
  - person: bketelsen
    snapshot: bketelsen2
hosts:
  - bkromhout
sponsors:
  - circleci
  - logzio
  - sdt
aliases:
  - /151
youtube: sygr4qZ-X8g
explicit: no
transcript: krustlet
---

Bridget talks with Taylor Thomas, an engineer on Microsoft Azure's Deis Labs team who works on containers and Kubernetes, and Brian Ketelsen, a Cloud Developer Advocate at Microsoft who leads a group contributing to upstream open source and has been active in the Go community as a GopherCon organizer and author of Go in Action. Both work on Krustlet, a project released the week before. Bridget picked the guests by looking at the project's commit history. The cold open is Brian on Rust: "It's moving the direction of the foot gun so that it's not pointed at you."

## What WebAssembly Is

Taylor says WebAssembly is a compiled language invented for the web, running in a complete sandbox, with modules importable into JavaScript in a browser. WASI, the WebAssembly System Interface from the Mozilla Foundation, lets WebAssembly modules run anywhere and not just in a browser. Brian says it's a binary format that executes anywhere there's an interpreter, so the same file works on a Linux AMD server and an ARM32 Raspberry Pi, the "write once, run anywhere promise Java brought us so long ago and we all laughed at."

On security, Brian says execution is entirely sandboxed and memory has to be explicitly exposed in or pulled out, so "unless there's a bug in the implementation of your WebAssembly host, it's completely secure." Taylor adds you can only do what you explicitly expose to the runtime.

## What Krustlet Does

Brian says Krustlet is an implementation of the kubelet specification, written in Rust, that executes WebAssembly instead of Docker containers. It takes a pod spec, fetches the WebAssembly file and runs it, with no containers involved, so workloads are more secure, though the Kubernetes installation is only as secure as you made it. Taylor says you don't have to worry about AppArmor, SELinux or a Linux file system in a Wasm pod, which cuts the attack surface and lets platform builders worry less about Linux permissions.

Brian says WebAssembly on the server is a new concept for most people, and the cost angle is big, since the same files run on a 96-core ARM processor that is more energy efficient than an AMD processor. Taylor says everything runs as a thread in one process, so idle work parks its thread, unlike containerd's shim, a separate process per container, which helps on edge devices with a gig of RAM. Brian adds that WebAssembly is designed to be interpreted as a stream, so you don't load the whole file to start and the memory footprint is lower. Brian doesn't expect it to stop Internet of Things vendors from making insecure configurations.

## Two Runtimes and an Evil Capability

Krustlet has two execution runtimes. WASI currently has no networking, so pods can't listen on a port. The other is waSCC, WebAssembly Secure Capabilities, created by folks at Capital One, which uses RPC between host and module and so can do network calls. Capabilities, such as logging, key-value storage and databases, are configured once on the host, and modules just request a key-value store. Brian says you can hot-swap a capability, such as Consul to Redis, without the actors knowing.

Brian describes building "95% of an evil thing" that afternoon, a capability called Shell that lets the sandboxed module make an RPC call to the host and run a shell command as the host process, such as `ls` or `rm -rf`. It shows capabilities are "just as smart as you make them." Taylor finds it terrifying but a demonstration of flexibility, and notes WASI is very new, with only two or three languages having strong support. Brian says this is a least common denominator interface, so you won't get every feature of each provider, similar to the Service Mesh Interface spec. WASI's specification work is done through the Bytecode Alliance.

## Is It Ready?

Taylor says the repo has construction-sign warnings that it's not ready for production, since a provider lacks networking and init containers and volumes are missing, though basic pods run. They want people trying it for feedback. Outside Krustlet, Taylor says most major websites use WebAssembly in the browser, and gives Autodesk's web AutoCAD as an example, while server-side WASI has few production examples. Brian names edge providers Cloudflare and Fastly, which let you upload WebAssembly to run on the edge, and says Brian's own website runs on WebAssembly in Cloudflare.

## Ways to Get Involved

Taylor suggests a demo with one Krustlet running the Wasm provider and another running the WASI provider, doing HTTP-triggered job processing, or serving a low-traffic API or web page from a Wasm module. Brian wants to turn a Go-based Raspberry Pi controller for a barbecue pit, which turns a fan on and off, into a WebAssembly module with a smaller memory footprint. Brian adds that the Krustlet process can run on anything from a Linux server to a micro:bit, extending a cluster across the globe, and Bridget reminds listeners the devices should be theirs. Krustlet is a virtual kubelet in the sense that it tells the control plane it's a kubelet, and differs in being written in Rust and not Go.

## Why Rust

Taylor says the reasons are that Rust has some of the best WASI support and most of the related projects are in Rust, and that its compile-time safety guarantees around how long data lives prevented bugs. Brian says there's an opportunity cost, since Rust is harder to read and start with, and it took more than a month, closer to two, before Brian wrote useful code, leaning on Taylor. Once past the learning curve, you appreciate how much the compiler does. Taylor disagrees that Go is easier to follow as projects grow, and likes Rust's match blocks and error handling. Taylor, a core maintainer of Helm, says updating Kubernetes libraries in Go has been "an absolute nightmare," and calls Cargo "an absolute gem," with conditional compilation through features, making the dependency story "infinitely better than Go."

Brian streams live coding of Krustlet on Twitch, and Taylor jokes it's good for anyone with imposter syndrome. Taylor invites contributors with experience on EKS, GKE, DigitalOcean, IBM and other clouds, and stresses it's not meant to be a Microsoft-focused product.

- [WebAssembly](https://webassembly.org/)

- [WASI](https://wasi.dev/)

- [Bytecode Alliance](https://bytecodealliance.org/)

- [Krustlet](https://github.com/deislabs/krustlet)

- [Kubernetes Rust Kubelet](https://github.com/deislabs/krustlet) on GitHub

- [Introducing Krustlet, the WebAssembly Kubelet](https://deislabs.io/posts/introducing-krustlet/) by Matt Fisher

- [Kubernetes and waSCC](http://www.brianketelsen.com/blog/Kubernetes-and-waSCC) by Brian Ketelsen

- [waSCC capability that will make your ops folks cry](https://github.com/bketelsen/shell) - GitHub link to evil project (don't install this)

- [Kubernetes: A Rusty Friendship](https://deislabs.io/posts/kubernetes-a-rusty-friendship/) - Taylor Thomas

- [WebAssembly meets Kubernetes with Krustlet](https://cloudblogs.microsoft.com/opensource/2020/04/07/announcing-krustlet-kubernetes-rust-kubelet-webassembly-wasm/) by Ralph Squillace
