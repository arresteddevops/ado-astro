---
title: Multicluster Service Mesh with Phillip Gibson and Annie Wang
description: Bridget chats with Phillip Gibson and Annie Wang about multicluster service mesh.
date: 2021-08-04T19:16:43.000Z
publishDate: 2021-08-04T19:16:43.000Z
episodeNumber: "173"
podcastFile: arrested-devops-podcast-episode173.mp3
episodeImage: episode/img/multicluster-service-mesh.png
episodeBanner: episode/img/multicluster-service-mesh-banner.jpg
images:
  - img/social/fb/multicluster-service-mesh.png
guests:
  - person: pgibson
    snapshot: pgibson
  - person: awang
    snapshot: awang
hosts:
  - bkromhout
sponsors:
  - bridgecrew
  - circleci
  - macstadium
aliases:
  - /173
  - /multiclusterservicemesh
youtube: 5LIXNtcGiWk
explicit: no
transcript: multicluster-service-mesh
---

Bridget talks about multicluster service mesh, at a "201 level" after the earlier service mesh episode, with Phil Gibson, a PM at Microsoft focused on cloud-native security projects including Open Service Mesh, and Annie Wang, a PM intern on the team that summer, in the last week of the internship and studying computer science with a focus on cloud computing. The cold open is Bridget: "This all, I'm not gonna lie, sounds very complicated."

## What Multicluster Means

Phil says the most accepted description of a multicluster service mesh is being able to manage multiple Kubernetes services connected in east-west communication across clusters, and notes it means different things to different people. Annie explains that before multicluster, pods had to exit a cluster to reach services in another cluster, which is north-south traffic, and with east-west traffic, pods can reach the other cluster's ingress without having to leave. Phil adds two pieces: a distributed control plane, so you can still configure the mesh if one system goes down, and an ingress for the service mesh, separate from the traditional ingress controller that exposes services to the world, where routes are populated and synced through the control plane so service A in cluster 1 knows the route to service B in cluster 2. On security, Phil says a cluster can itself be a security boundary with its own RBAC and policy controls.

## Why Bother

Annie lists the benefits: a mesh limited to one Kubernetes cluster is limited to that cluster's size, so multiple clusters let applications scale horizontally. Disaster recovery and failover mean you can deploy the same service to several clusters and divert traffic away from an unhealthy one, and you can get zero downtime during Kubernetes upgrades by updating one cluster at a time. Bridget asks about API deprecations across clusters on different versions. Phil says that's the hard part, that Kubernetes became popular by offloading labor-intensive configuration, and that the team wants to keep the experience simplified and shield users from the heavy lifting, which is still being worked out. Annie says the philosophy is to align with OSM: enable complex use cases while keeping things simple. Bridget notes complexity is conserved, and Phil says to expect YAML, ConfigMaps and new CRDs.

## An Intern on the Hardest Project

Annie says the internship was very overwhelming at first, with terms like Kubernetes, service mesh and even OSS new, since Kubernetes isn't taught in school. Annie is not a service mesh user, and talking to users about what they liked and disliked was valuable. Phil says the team gave the intern multicluster, the hardest thing they're dealing with. Annie says the most interesting part was learning how building features in open source differs from a regular product team, where you have a defined group of customers: you have to rally the community to figure out whether a problem is real, which is why Annie published a blog post to invite discussion.

## Project Versus Product and the Spec

Phil says the benefit of open source is fast feedback, since a project will live or die on the vine. Phil looks for gaps and pain points that customers mention repeatedly, and says "you got to have thick skin in the open source game." On the Service Mesh Interface spec, which has no code, Phil says people ask where to download it, but it's an agreed-upon specification of how APIs interact, and getting consensus from a large community is slow, but listening to the community is good hygiene.

## Who Needs It

Annie and Phil discovered that the need for multicluster is tied to maturity with Kubernetes. They assumed everyone wants it, from an enterprise mindset of a critical application, distributed service mesh, but early users had relatively simple applications. Phil says that if you've just refactored a VM application into a container and exposed it on port 80, multicluster is far away. Growth comes first by adding more apps to a cluster, and then the enterprise asks for regions and failover. Phil also explains mTLS with a shopping site: with TLS you trust the site, and with mutual TLS the site also knows who you are.

## Learning and Contributing

Annie says Kubernetes is new enough that school still uses VMs, and Annie will bring Kubernetes back to classmates but not multicluster service mesh. Annie says university teaches the fundamentals to learn the rest. Phil's career advice is to follow your passion, noting Phil left Microsoft for Docker after a container tutorial made a light bulb come on, and came back. Phil says contributing doesn't have to mean writing lots of code, and filing an issue asking why something doesn't work a certain way counts. Bridget points out Annie's one-word documentation pull request, a clarification that was valuable, and Phil likes the embrace of content as contribution. Phil's and Annie's advice for learning is to spin up every service mesh that supports multicluster and read their docs. Phil is on Twitter as @PhillipGibson, with a lot of barbecue brisket.

- Previous ADO episode about [service mesh with Michelle Noorali and Delyan Raychev](https://www.arresteddevops.com/service-mesh/)
- Annie’s blog post about [Multicluster Service Mesh](https://openservicemesh.io/blog/multicluster-service-mesh/)
- [Service Mesh Interface](https://smi-spec.io) specification
- [Open Service Mesh](https://openservicemesh.io)
- [Service Mesh Comparison](https://servicemesh.es/)


art credit: "[Spiral](https://www.flickr.com/photos/35034347371@N01/39640252)" by roland - [CC0 1.0](https://creativecommons.org/licenses/cc0/1.0/)
