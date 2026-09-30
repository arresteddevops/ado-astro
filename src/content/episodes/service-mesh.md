---
title: Service Mesh with Michelle Noorali and Delyan Raychev
description: Bridget chats with Michelle Noorali and Delyan Raychev about service mesh.
date: 2020-08-05T15:06:15.000Z
publishDate: 2020-08-05T11:09:15.000Z
episodeNumber: "157"
podcastFile: arrested-devops-podcast-episode157.mp3
podcastDuration: 35:44
episodeImage: episode/img/service-mesh.png
episodeBanner: episode/img/service-mesh-banner.jpg
images:
  - img/social/fb/service-mesh.png
guests:
  - person: mnoorali
    snapshot: mnoorali
  - person: draychev
    snapshot: draychev
hosts:
  - bkromhout
sponsors:
  - sdt
aliases:
  - /157
  - /servicemesh
youtube: 4Xy2aBWjwk0
transcript: service-mesh
explicit: no
---

Bridget talks about service mesh with Michelle Noorali, a software engineer on Microsoft's Azure containers upstream team and a core maintainer on projects including Helm, and Delyan Raychev, a software engineer on the Azure networking side who has spent about a year and a half on reverse proxies and Kubernetes. The occasion is the launch of Open Service Mesh, announced the day the episode was published. Both guests say the smallest change worth a pull request is a typo, a doc fix or a clarifying comment, and Delyan loves leaving to-dos. The cold open is Delyan: "SMI seems to be like the lingua franca of service meshes."

## What a Service Mesh Is

Michelle gives the textbook definition: a dedicated layer of infrastructure that helps you manage, secure and observe service-to-service communication. The problem is that in highly dynamic environments, where pod IPs change as things come and go, networking needs to be more dynamic as well: traffic encryption, access control, which service can talk to which, traffic shifting from one version of an application to another, and observability metrics.

Delyan frames it from the point of view of a CTO who wants observability, security and traffic management but has busy engineers: run an install command and "you get all those extra features." In the past this came from libraries tightly coupled to a language, such as Twitter's Finagle, Netflix's Hystrix and Google's Stubby. A service mesh instead bundles a sidecar reverse proxy with your workload and pipes traffic through it.

## Is It a Man in the Middle?

Bridget asks whether intercepting traffic is a man-in-the-middle attack as a service. Michelle says it's meant to prevent them. A common requirement, especially in enterprise and government settings, is mTLS, mutual TLS, where both client and server prove who they are, and it's nice not to handle that in code. Delyan lists three components: the reverse proxy sidecar, a certificate used to encrypt and decrypt traffic, and the control plane that tells the sidecar what to do. All three are open source, so you can review the code, and traffic leaving the sidecar is encrypted and flows only to services explicitly permitted.

## Do You Need One?

Michelle says "You don't need a service mesh unless you need those things," and it suits environments with lots of microservices and specialized teams, such as Twitter or Lyft, which Kubernetes and containers made possible. Delyan adds that operators get lost in Kubernetes complexity, and a mesh controls east-west traffic between namespaces, helps with zero-trust networking among teams that don't trust each other, and gives auditability of which services exist and who talks to whom. Michelle explains that east-west is service-to-service traffic, and north-south is external traffic coming into the cluster. The data plane is the set of proxies carrying user traffic, and the control plane is the source of truth that configures proxies and manages certificates. Michelle notes the sidecar approach isn't the only one, since some meshes run a proxy per node. Delyan says the data plane must run nonstop with minimal latency because customer data flows through it, while the control plane has more flexibility for upgrades.

## SMI and Open Service Mesh

Michelle says SMI, the Service Mesh Interface, is a set of APIs representing the most common functionality people want from a mesh, so that tools can build against a consistent API regardless of provider. Delyan compares it to a shared language invented by college friends from different Eastern European countries: you can try mesh A, then mesh B, without changing your policies, because SMI stays in the cluster and only the data plane swaps. SMI describes the topology, the control plane ingests it and tells the proxies what to do.

Open Service Mesh is a lightweight, Envoy-based, Kubernetes-native, SMI-compliant mesh. Michelle says SMI covers mTLS, traffic shifting, access control and metrics, and OSM chose Envoy for community momentum and WebAssembly extensions. Delyan says the goals are source that's simple to understand and contribute to, effortless to install, painless to troubleshoot and easy to configure with SMI.

The design philosophy is "no cliffs." Delyan uses the analogy of service meshes as motorcycles in a garage, each fine-tuned for different uses, so there's always room for one more. SMI doesn't cover everything in the proxy, such as circuit breaking and back pressure, so when you hit that cliff there's a dirt road instead: switch to XDS, Envoy's own configuration protocol, which is harder but lets you fine-tune the proxies.

## Getting Involved

Michelle points to the GitHub repo's install guide and demo, which work on a local cluster such as Kind or minikube, and says feedback via GitHub issues or Slack is welcome. Bridget adds that a newcomer reporting that the walkthrough did not work issue is valuable because the authors can't see what they've assumed. Delyan hopes people enjoy reading the code and rename variables to make it their own. Michelle is @michellenoorali on Twitter, and Delyan is @DelyanRaychev.

- [SMI](https://smi-spec.io)
- [Open Service Mesh](https://openservicemesh.io)


OSM logo art credit: [@flynnduism](https://twitter.com/flynnduism)
