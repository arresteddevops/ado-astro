---
title: The Reality of DevSecOps with Steve Giguere
description: What is DevSecOps? Is it different from DevOps? What's up with shift left? Steve Giguere joins Matt to dig into some more fun security conversations.
date: 2021-10-22T15:25:41.000Z
publishDate: 2021-10-22T15:25:41.000Z
episodeNumber: "176"
podcastFile: arrested-devops-podcast-episode176.mp3
podcastDuration: 45:36
podcastBytes: 20900000
episodeImage: episode/img/devsecops-reality.jpg
episodeBanner: episode/img/devsecops-reality-banner.jpg
images:
  - img/social/fb/devsecops-reality.jpg
guests:
  - person: sgiguere
    snapshot: sgiguere
hosts:
  - mstratton
sponsors:
  - rootly
  - bridgecrew
  - cloudsmith
aliases:
  - /176
  - /devsecopsreality
explicit: no
transcript: devsecops-reality
---

Matty talks with Steve Giguere, a developer advocate at BridgeCrew (recently acquired by Palo Alto) who previously worked at StackRox, Aqua Security and Synopsys, about what DevSecOps looks like in practice. BridgeCrew is a sponsor of the show, and Matty says Steve is on for the conversation, not because of that. The cold open is Steve on shift left: "It was just us saying it. We weren't actually shifting the word shift left."

## Is DevSecOps Different From DevOps?

Steve's cynical definition is that DevSecOps is "security self-pending an invite to the DevOps party," a term security invented in reaction to the success of DevOps. The legitimate version is embedding security by default in DevOps "so we never have to use that word again." Matty says DevOps is unfortunately named, since it was so called because Agile System Administration was too long for a conference, and recalls Julian Dunn saying security is just another aspect of quality. Steve says people misunderstand DevOps as automation when it's cultural, and that security's self-induced purgatory comes from a world of throwing work over the wall and catching it at the end, so automation feels like the best way in.

Matty adds that in most DevOps transformations, security feels bolted on, and cites a talk called The 5 Love Languages of DevOps: what makes DevOps appealing to a feature builder differs from what lands with security. Audits are theater because people lie or misremember and computers don't, and automated change control won't let a deploy through when "the lights aren't green." Steve says security has to matter to everybody, and automation has to be "drip-fed, not sledgehammered."

## NoSecOps and Shift Left

Matty asks how to get everyone to care about security without sliding into NoOps. Steve's definition of shift left is that it's not all the way left: a bit of security in the middle during CD for quick preflight checks, and sprinkles of security toward development and even education and threat modeling. Steve recalls static analysis tools that returned 10,000 findings that nobody acted on, versus everybody doing small things, like checking Dockerfile misconfigurations, so low-hanging fruit gets removed along the way. The aim is to find each person's easy version of security that takes no time and has a big impact later.

Matty adds that security tooling has been expensive and not democratized, so it lands on the right, using Qualys licensing as an example while inviting correction, and brings up "trust but verify": developers run checks at commit, and the pipeline verifies. Steve says the industry has made some things easier, with convergence on VS Code plugins that highlight issues in YAML, Terraform, Docker and Node.js, and GitOps, where a check can auto-generate a pull request or a logged suppression. The hard part is large rearchitectures, like monolith to microservices, which confuse many InfoSec people.

## What Security People Need to Learn

Matty says the change is not learning a tool but understanding what Kubernetes does well enough to threat model it, and that nobody can hold the whole system in their head anymore. Steve says it depends on whether you're InfoSec, raised on networking and firewalls, or AppSec, obsessed with the OWASP Top 10, and notes security has its own silo between those two, which should take a page from DevOps. Steve's advice is to understand your attack surface and low-hanging fruit. Basic misconfigurations without CVEs are still bad, probably worse, and misconfiguration gets a bad rap. Steve recalls a podcast in which Ian Coldwater said early Kubernetes had real attackers because of insecure defaults, and now it's mostly misconfiguration.

Steve says security needs to hang out with the DevOps people, drop the culture of no, and include developers in tool-buying decisions so they aren't mandating. Matty says security reviews of new tools are often non-collaborative, handled through a ServiceNow ticket with no context, and Steve says if developers suggest a security tool, "just buy it," because developers like to pull tools and it opens a conversation.

## Practical Tips and Learning

For starting now, Steve says use free tools: the CNCF security landscape, Trivy for container image scanning, which works in VS Code and on the command line, and Checkov from BridgeCrew for scanning infrastructure as code such as CloudFormation and Terraform for things like open S3 buckets. Steve notes that if developers use the open source tool and security wants visibility across 1,000 developers, then you buy the commercial version. Steve hosts a security-themed podcast (the transcript renders the name as CozyCast, and the existing links spell it Cosecast).

Matty shares a line from the Food Fight show's founder (name garbled in the transcript) that the dirty secret of tech podcasting is that it's how you get someone to spend an hour talking to you, and that you can't control your audience. For learning outside security, Steve recommends We Hack Purple, run by Tanya Janca, and certifications for a wide and shallow picture, and Steve did a software lifecycle practitioner certification years ago. For SREs and ops, Steve points to security chaos engineering and a red-blue exercise on a new Terraform deployment. Steve learns from short YouTube videos at 1.5x or 2x with a GitHub repo showing "what perfect looks like," going straight to the end and then back, then building and getting it wrong, and praises the CKA course for short sections followed immediately by hands-on work.

- [Matty's dog on Twitter](https://twitter.com/moxieaussie)
- [Shifting Left Securely (Matty's talk at devopsdays denver 2017)](https://speaking.mattstratton.com/f8dw3L/shifting-left-securely)
- [Steve's "Collaboration over competition" talk](https://youtu.be/vWITRlblSog)
- [Trivy](https://github.com/aquasecurity/trivy)
- [Checkov from bridgecrew](https://www.checkov.io/)
- [Cosecast](https://cosecast.com/)
- [Pushing left with Tanya Janca (ADO episode)](https://www.arresteddevops.com/pushing-left/)
- [Cosecast with Tanya Janca](https://cosecast.com/tanya-janca-episode-1/)
- [We Hack Purple](https://wehackpurple.com/)
- [Security Chaos Engineering With Aaron Rinehart (ADO epsiode)](https://www.arresteddevops.com/chaos-security/)
