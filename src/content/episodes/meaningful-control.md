---
title: Meaningful Control with Jacquie Capur
description: "Jacquie Capur, a senior developer advocate at Nebius, joins Matty to talk about keeping meaningful control over the tools you depend on: knowing what they're tied to, verifying they do the job, and having a realistic way out. The conversation runs from configuration management's first magic moment to data residency rules in healthcare, tools that change every two weeks, and the case for open models."
date: 2026-10-14T06:00:00.000Z
publishDate: 2026-10-14T06:00:00.000Z
episodeNumber: "209"
podcastFile: arrested-devops-podcast-episode209.mp3
podcastDuration: "00:41:18"
podcastBytes: 19823547
episodeImage: episode-img/meaningful-control.jpg
episodeBanner: episode-img/meaningful-control-banner.jpg
images: []
guests:
  - person: jcapur
    snapshot: jcapur
hosts:
  - mstratton
sponsors: []
aliases:
  - /209
  - /meaningfulcontrol
transcript: meaningful-control
explicit: "yes"
---
Matty and Jacquie open with the caricature below, drawn at a vendor's caricature station at the first post-pandemic KubeCon. It's supposed to show the two of them fighting, since she was at Hashi and he was at Pulumi at the time. Neither of them works at those places now, so Matty figures they can be better friends.

![Black marker caricature of Matty, with a big beard and long swept-back hair, and Jacquie, with long straight hair, both holding up their fists](/img/meaningful-control-caricature.jpg)

## The Holy Shit Moment and the Albatross

Jacquie's definition of meaningful control has three parts: you understand the dependencies you've created and what they're tied to, you can verify that they meet your needs consistently, and you have a realistic way to change course. "How easily can we pivot if we need to, and how clear are we on what it does?" Her own first magic moment was configuration management, back when she was an intern and three people were SSHing into a few hundred VMs to run four to six commands on each, except sometimes it was seven. "I can just do this thing one place, and it happens everywhere."

Matty has the same origin story with a Windows vulnerability (maybe SQL Slammer, he doesn't remember): multiple days across three shifts in the data center, physically logged into servers over KVM, with a different login for each of something like 250 Windows NT domains. Then patch management tools showed up and you could just group machines and tell them to go. The trouble is what comes after the magic. The tool becomes load-bearing, then an albatross, because its opinions are now baked into how you work. It was great because the competition was Do Nothing Incorporated.

## Everything Changes Every Two Weeks

The new twist is speed. Matty describes starting the year by building a plugin and skills for his team, then watching people adopt it at wildly different rates, some still working up to opening ChatGPT. When the way of working is defined by the tool, and the tool changes every two weeks, "it all becomes yak shaves." He wonders how anyone preps a conference talk three months out when it will be stale by the time they give it. Jacquie says DevRel has the same problem: every release means being expected to be an expert on it, with demos, within 48 hours.

Her description of the process is a pipeline from discovery to something dependable: try it, break it, break it again, then ask whether it works three times in a row or once out of ten, and where the guardrails go. She also names the social side. Everyone's posting highlight reels, so "you're comparing your own friction points with everyone else's highlights," and there are too many launches to try them all the day they land. Python to Go to Rust felt fast at the time, she says, but "it objectively wasn't."

Matty's favorite counterexample is a Chef meetup in Austin, where a presenter explained how migrating from Chef to Ansible proved Ansible was better. Matty, who worked at Chef, sat there thinking: "No, you're just smarter now." He gets the same feeling when people insist a different model should do the code review so it isn't reviewing its own work. The analogy to humans breaks down, since Opus is not a person.

## Abstraction All the Way Down

Matty points out this isn't purely an AI problem, since every layer of abstraction removes some understanding of what's underneath it. He remembers a Gartner session from the early days of cloud predicting that the sysadmin's job would become vendor manager. You don't know Apache's internals the way you used to either, because you run the module that encodes best practice. Now Claude Code can write a whole website in a JavaScript framework he doesn't understand, and he suspects the people who build reliable systems this way are the ones who already had first principles.

The counterargument is the photographers who never learned in a darkroom. Photoshop's metaphors came from that world, dodge and burn included, and a whole generation learned it another way anyway. The difference, Matty says, is that photography didn't move as fast as this.

## Meetups With No Slides

Jacquie remembers a more vibrant meetup and conference scene a decade ago, when she could go to a DevOps one, a DevOps Enterprise one, and a Polyhack one, her favorite and now gone. They were places to scratch beneath the surface and hear what actually came out of a project, not a highlight reel. She misses that kind of under-the-hood writing too, citing the Netflix chaos engineering blog.

Matty thinks meetups drifted into mini conferences and mini webinars, and that funding now tends to mean vendors who want to talk about their product. His version of the original: the first Chef meetup in Chicago, seven or eight people at a bar, "nobody had slides, nobody had a mic." The Chef Community Summit was two to three days of open spaces and no presentations, and he doesn't think you could fund one today.

They also talk about the cost of being visible. Matty did a livestream at Pulumi where he did something dumb with Docker, someone politely pointed it out, and he spent the rest of the day feeling like he should have known. Jacquie has done upwards of 40 livestreams of learning in public and still runs into the same pull, because after 11 years people expect her to have answers. Her reasoning for doing it anyway: "If I can't do it, how do I expect anyone else to?" Matty adds the economy as a factor, since being on the record as imperfect feels riskier when jobs are scarce. Her line for the rest of it: "No one cares as much as you think they will."

## Data Residency Made It Real

When Matty asks when meaningful control clicked for her, Jacquie goes to a healthcare job in Canada. Data residency rules meant they used AWS but not S3, which she says is a global service that could replicate to any other region. Control meant answering where the data goes, who can access it, how it's retained or used, and "how do we know what we're using is what we think we're using?" Those questions led her to a lot of Kubernetes, to learning the CAP theorem, and eventually to building their own managed database services in Kubernetes. Later, some of the industry tools grew data residency features of their own, and the question became how to make it easy to pivot out of what they'd built.

The other half of control is who supports the tool. Jacquie points to the ingress-nginx retirement as the kind of thing happening more often: tools that were stable for years no longer being stable. She ties it to the economy, since open source has less funding and everyone has less time to give away, and the floodgates of PRs make communities harder to get involved in. She mentions Linus Torvalds gatekeeping which AI commits are allowed into Linux, and asks the same list of questions about every new tool: the maintainers, the documentation writers, the community knowledge base, the sponsors, the investors. "I don't have any answers here so much as it's just things that we look at."

## Make the Right Way the Easy Way

Matty says the thing that makes all of this hard is that the boring parts, the plumbing, are what make the magic dependable, and there's no time to bake those practices in while the sand is shifting. AI-generated code is quick to make, but who maintains it? His internal marketing tool is the most heavily operationalized AI-built tool in his company, with ridiculous tests and CI and CD pipelines, only because he's been in ops for so long. The agent may not think of any of that, and neither will someone who doesn't live in that world.

Jacquie says Terraform is the apt comparison. Plans can run to 70,000 lines of changes, so her teams flagged every delete for close human eyes, and she thinks the open question is what the deletes are in the agent world. Matty's skills and Agent.md files are built around what could go wrong, which he thinks isn't the normal instinct. He also worries that the guardrails he writes are all Claude-specific, so they go away if the tool does. He wrote up the practical version in a post about a designer on his team who can ship to production without knowing what CD means.

His answer comes from the book Switch: make the right way the easy way. The story he always tells from it is the machine with a blade that kept cutting people's hands. Instead of signs and safety training, the plant redesigned it so you needed both hands to turn it on. If you have to actively opt into the safety, "it doesn't happen."

## Open Models and the TiVo Problem

Jacquie thinks the questions are familiar from ten years ago: multi-cloud, disaster recovery, vendor lock-in, being able to take a backup and pivot. With proprietary models that can change pricing, push you out, or change how everything works, she expects a move toward open models, open weights you can adjust yourself, and small models trained to do one thing at a time.

Matty pushes back on the friction. People use the central services because they're easier, and he'd happily buy an appliance for this, in the spirit of buying a TiVo because "I just wanna record the Cubs game." Jacquie hadn't planned to bring it up (it's literally not in her notes), but she works at Nebius, where one of the products is Token Factory, a set of open models the company has done its own accuracy and training work on. You switch between them by changing the endpoint. She runs them through Hermes and OpenCode for things like video editing and making video games for fun, and her sign-off is the Nebius builder program, with credits, and an online hackathon with up to $50,000 in prizes that runs through the end of October. Matty promises to ship the episode before then.

## Wrath Babies

The conversation ends with a long tangent on World of Warcraft. Jacquie was a competitive player who paid her rent doing it, and started in Wrath of the Lich King, when veterans complained about "all these Wrath babies." Matty uses it to make a point about DevOps: when the movement was three years old, being there for one year wasn't much of it, but when it's twenty years old and you missed only the first two, that's almost all of it. Jacquie jokes about a follow-up called "What playing video games competitively taught me about working in tech," and Matty suggests a joint episode with Kat Cosgrove, who didn't play competitively but sure plays a lot of damn video games.

Matty also points back to his recent episode with Marino Wijay, [WTF Is Going On](/wtf-is-going-on/), for more on keeping up with all of this.

## Links to Resources Mentioned

- [Ingress NGINX Retirement: What You Need to Know](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/), the Kubernetes blog announcement
- [How My Coworker Who Didn't Know 'cd' Shipped to Production](https://www.mattstratton.com/writing/how-my-coworker-who-didnt-know-cd-shipped-to-production/), Matty's post
- *[Switch: How to Change Things When Change Is Hard](https://www.amazon.com/Switch-Dan-Heath-Chip-Heath-audiobook/dp/B0038NLX9S)*
- [Nebius builder program](https://dev.nebius.com/builders), with credits and the online hackathon Jacquie mentions
