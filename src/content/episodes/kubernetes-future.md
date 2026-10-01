---
title: Kubernetes & the Future
description: Bridget chats with Kelsey Hightower about Kubernetes and the future.
date: 2019-12-04T07:00:48.000Z
publishDate: 2019-12-04T07:00:49.000Z
episodeNumber: "142"
podcastFile: arrested-devops-podcast-episode142.mp3
podcastDuration: 44:50
episodeImage: episode/img/kubernetes-future.png
episodeBanner: /episode/img/kubernetes-future-banner.png
images:
  - /img/social/fb/kubernetes-future.png
guests:
  - person: khightower
    snapshot: khightower2
hosts:
  - bkromhout
sponsors:
  - sdt
aliases:
  - /142
  - /kubernetesfuture
youtube: PKcXccvE5Fo
explicit: no
transcript: kubernetes-future
---

Bridget talks with Kelsey Hightower, who describes themselves as "a minimalist" who enjoys "learning in public and helping other people do the same." The conversation grows out of a Twitter post where Kelsey said they wanted to go on podcasts and talk about where Kubernetes is going. Kelsey's answer is that it's "not the future, it's the now."

## The 56K Modem Era of Kubernetes

Kelsey compares Kubernetes to the 56K modem: some people liked the dial-up sound because it meant they were getting on the internet, and people now look at their nodes and clusters and feel like they're doing computing. The internet got interesting when that went away, with DSL and wireless routers, and now "the internet is now just a thing." Kelsey says "Things tend to get better when they disappear," and that we're in the 56K modem era of Kubernetes, and hiding it will let more people use it without learning to manage it.

Bridget raises the fast-moving release cadence, and someone stuck on 1.12 or with no Kubernetes yet. Kelsey says that's a good place to be, because "if you don't have this problem, you don't really need this solution quite yet." Linux went through the same transition, from rolling your own distributions to Red Hat and Canonical, and Android users benefit from Linux without touching the kernel. Kelsey says it's early: Kubernetes is only 6 years old, VMs still work, and some people will skip containers and go straight to serverless, but Kubernetes-style APIs are resonating, and some people will use parts of it without ever being a cluster administrator. Kelsey describes GKE, AKS, Fargate and K3s as "checkpoints" in an ever-moving project, and says Kelsey is now a consumer of Kubernetes who goes to the checkpoints and uses it as is.

## Kubernetes the Hard Way

Asked what people can still learn from Kubernetes the Hard Way, Kelsey recalls that early on there were no docs, and learning how to install it came before the first line of code or PR, which revealed what the scheduler did and what went where. Kelsey's argument is "you can't really fix a system that you don't know how it works." The guide goes step by step with no scripts, so people see what the kubelet does, how it connects to the API server, and where the certificate goes, and gain the foundation to troubleshoot and debug.

For production, Kelsey says there are many layers, and security is number one, since performance can be tuned later but "once that security hole is too big, it's a little too late to go rewind the clock on a breach." Most clusters come out of the box with flexibility and not security, so you can run random images and run things as root, and Kelsey compares it to SELinux, which every system admin turns off. Kelsey says 30% of Kubernetes the Hard Way comes from security feedback, which is why it generates certificates for each component and encrypts secrets in etcd, and why it leaves the dashboard out. Bridget says they show the dashboard in workshops with a giant disclaimer about cryptocurrency miners. Kelsey is encouraged that KubeCon talks and docs now say to do exactly 4 or 5 things, raising the security profile for many people at once. Bridget mentions Ian Coldwater's keynote and Gareth Rushgrove's work with Open Policy Agent.

## Complexity Moves

Kelsey uses CDNs as the model. People once glorified FTP and then SFTP, and thought FTP would just become more robust, but CDNs took the problem of getting files close to people and made it disappear as the complexity grew and the number of people who understood it shrank. Compute is slower because so many people believe they understand the compute problem, so a new person invents a new platform every couple of years. Serverless says there are about 80% of compute use cases that are understood and never need to be built again, but mainframes and VMs don't go away either. Kelsey says "I really look at this as we're going to have multiple things in parallel," and that if starting from scratch, "I would probably try to go as high as I could and focus on building my app and the product before going to play infrastructure again."

On trust and lock-in, Kelsey says nobody digs up a wire to connect to the backbone of the internet, and compute needs providers that earn trust with open interfaces. On compliance, Kelsey says some banks are 100% online and see a single building with a door as too much risk, so it's "different degrees of understanding the risk."

## Stop Saying Legacy

Kelsey asks engineers and executives to stop using the word legacy, since it has a derogatory context, and says "classic infrastructure" instead: "It's the stuff that actually worked cutting everyone's paycheck." Bridget calls it "the place where all the customers and money are." Kelsey asks what problems they have now, such as service discovery or scripts and large on-call rotations for failing over, which is the opportunity, since a part of Kubernetes solves that specifically. They may not need all of Kubernetes, and Kelsey asks them to have a good reason why: if 15 people maintain a scheduler that looks like Kubernetes, those people could work on another problem, or half of them could contribute to Kubernetes.

Kelsey likes to spend time on-site asking what's on the backlog, often observability and security, and says even if Kubernetes automated you out of a job, "which it won't," it would give you time back. For people deciding whether to adopt, Kelsey says the world will continue to move with or without you, so put the tool through its paces, and if the answer is no, write an internal doc on the reasons and revisit if they get solved. That's "just engineering."

## Infrastructure as Data

Kelsey has worked at Puppet Labs, used Ansible and contributed to Ansible and Terraform, and describes the last 10 to 15 years as an attempt at infrastructure as code, with DSLs, for loops and then the problems of any codebase. Kubernetes tries something slightly different: "No more infrastructure as code. Now, we're doing infrastructure as data." The logic and state machine live in the controller, which some people call operators, and on the front end you restrict yourself to data, which is YAML, even though Kubernetes itself only supports JSON and protocol buffers. The drawback is a lot of YAML, but like assembly language, any language can compile down to it. Helm can run as a preprocessor, pipe to Kustomize to patch, and go through an admission controller, which is "the dream come true" of describing infrastructure with a type system and interchanging tools.

Bridget asks whether the flexibility makes the complexity unapproachable. Kelsey says Kubernetes is "formalizing the complexity," so it can be seen in one place, and people deal with it at different levels. Someone managing the environment can create a custom resource definition that says deploy my app across 50 countries, and control loops do the heavy lifting. Kelsey says that if you just want to deploy containers, "writing CRDs and operators is the equivalent of writing kernel modules," a job for the people who need to extend the system and not for most people, who need only declare a load balancer, a certificate, a DNS name and a container.

## The End Game

Bridget says picking the technology first is resume-driven development. Kelsey says it's hard when you don't know what question to ask and every deploy goes wrong for 10 years in a row, and then you go to KubeCon and see someone deploying all over the world, and think you need some Kubernetes, which Kelsey admits to being partly responsible for. Bridget jokes, "Ask your doctor if Kubernetes is right for you."

Kelsey's story is teaching their daughter to make a GeoCities-style web page in a text editor, viewed in Chrome. When the daughter asked why a friend couldn't see it at 127.0.0.1, Kelsey used Firebase, and "she said Firebase deploy and it spit out a URL." Kelsey calls that the end game: people with an idea and finished code who want to see it come to life, and any platform that gets closer to that moment is exciting. Kubernetes will evolve that way from the ground up and serverless will work its way down to support other workloads. Bridget adds that we should remember we're building things that produce actual value, and Kelsey agrees, adding that the middle layers matter and aren't the end game. Kelsey is on Twitter, DMs open, and on YouTube, with meetups announced about two weeks ahead.

Bridget chats with Kelsey Hightower about Kubernetes and the future.

- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)


If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)


### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)

### Discount codes
- ADO2019 or ADO2020 for discounts on lots of devopsdays
