---
title: The New DevOps with Adam Jacob
description: Adam Jacob (creator of Chef and the System Initiative) and Matty talk about what DevOps has gotten right, what has been wrong, and where we go from here.
date: 2023-09-07T21:00:10.000Z
publishDate: 2023-09-07T21:00:10.000Z
episodeNumber: "192"
podcastFile: arrested-devops-podcast-episode192.mp3
podcastDuration: 58:10
podcastBytes: 26600000
episodeImage: episode/img/the-new-devops.png
episodeBanner: episode/img/the-new-devops-banner.png
images:
  - img/social/fb/the-new-devops.png
guests:
  - person: ajacob
    snapshot: ajacob2
hosts:
  - mstratton
sponsors:
  - devopsworld
  - uffizzi
aliases:
  - /192
  - /thenewdevops
explicit: yes
transcript: the-new-devops
---

Matty talks with Adam Jacob, CEO of System Initiative and, in a previous life, CTO of Chef and the person who wrote Chef originally, about what DevOps got right, where it fell short, and what a second wave of tooling might look like. Adam counts DevOps from John Allspaw and Paul Hammond's 2009 talk at Velocity, and describes being on the "loves being a systems administrator" side of the field. The episode is sponsored by Uffizzi, and System Initiative is Adam's own company. The cold open is Adam: "It didn't matter how good you were at operations if the application didn't run, and it didn't matter what your application did if there was no infrastructure to run it on."

## What DevOps Got Right

Adam starts with what went well by describing the year 2000: operations was separate from IT, siloed, and ran on long planning cycles, with developers requesting gear that took six to eight months to arrive and capacity planning a big deal. The organizations worked, Adam says, a lot like how people describe platform engineering today: operations stitches it together and builds systems so developers don't think about infrastructure, "and never the twain shall meet." The top achievement of the DevOps movement was recognizing a single continuum of work, and the pre-DevOps world was "objectively worse" in day-to-day work, tooling and what the systems could do.

Matty adds a story from leaving Chef: a customer engineer at a large Chicago financial organization apologized for not getting much done, and Matty, who'd watched them in the thick of it for years, said they had come a long way. Adam agrees and says the flip side is real, with teams wanting 100 deploys a day with no friction and still mostly making pipelines and hoping it worked out. Following the DevOps Handbook roughly as written, Adam says, leads to mediocrity, deploying once every six months, which is better than before but rarely great.

## The Platform Engineering Smell

Adam says the platform engineering rebrand comes from the feeling that DevOps failed because outcomes didn't arrive, and the proposed fix "does smell a lot like what life was like in 2001": "let ops be ops, let engineers be engineers" with some software in between. Matty puts it as accepting that the silos can't be removed, "So let's just make sure the silos are better." Adam's answer is that the people who succeeded collaborated better, and that the tooling was never designed for collaboration.

Adam's history of automation runs from 1990s compute clusters and college labs, through ratios of 10 to 1, then 100 to 1, and up to 10,000 to 1 as EC2 and Facebook apps arrived, and each stage had to make up an answer for the world of the time. DevOps then "ossified the shape of the world into that shape." The Flickr talk shows it: a portal for deploying, feature flags, dark launches, configuration management, capacity planning and metrics, with deploys started from Subversion tags, so they "literally built a platform roughly the way that we describe it." Every piece of the stack has been rebuilt ten times in ten years without an appreciable change in outcomes, and Adam insists it isn't any one tool's fault.

## Tools and Culture

Matty credits Adam with "tools influence culture, culture influences tools," which ends up in Matty's decks. Adam says regretting "the idea that it's about culture and not about tools was wrong from the jump," because culture is what you do, and a version of culture in DevOps was like being a lapsed Catholic: believing the right things hard enough. An organization will not become more collaborative without tooling that forces it, since individual people won't do it alone. "Tooling is culture because it's literally what we do all day."

Matty ties it to the book Switch, where a manufacturing machine that kept injuring hands was redesigned so that turning it on required both hands: make the right way the easy way. Matty's Asana fight over a defined process is the same thing.

## Factories, Soccer and Collaboration

Adam says DevOps inherited factory metaphors from lean, but software is closer to a professional sports team or an orchestra: highly motivated specialists unified on one objective and making tiny decisions together in real time. Adam's picture is a soccer team retrofitted with pipelines, review by other people and no coaching during a Scrum window. The result was process and tooling that sucked out the creativity and collaboration, where people end up "working near each other at best." The most important insight of DevOps was that what separates great teams from okay ones is "the rate of collaboration," and nobody designed tooling for it.

Matty asks how much of this is outside the control of the people who can change it, comparing it to Agile needing changes in finance, sales and marketing. Adam answers that change is hard at scale but not insurmountable, and that the LivingSocial story of sales having already sold a removed experiment is a collaboration failure. At System Initiative, which Adam describes as "everything I believe at 12," one Miro board runs from the pitch deck down to an individual story, and Adam reads the whole strategy to everyone every Monday so engineers know why and for whom they're working.

## Scale and the Enterprise

Matty asks about JPMorgan Chase scale rather than a 15-person company. Adam says large organizations can be convinced with data that DevOps is better, but they buy tools instead of building them, unlike Google and Facebook, whose tools are bespoke. The vendor's temptation is to adjust the tool to the customer's culture for a bigger check, which is "a tomorrow problem for tomorrow people," and Adam recalls a Cloud Foundry deployment that collapsed under its own integrations. The way out, Adam says, is to build a tool that teaches the right way, because enterprises reliably buy tools that promise better outcomes: "let the tool change them, not the other way around."

Matty pushes back that the cynic sees churn, and asks whether the tool will get used by the people in the middle. Adam says it will if it's good, pointing to Salesforce as sticky because "it's actually kind of good," and admits not being sure this is the only answer. What Adam is certain of is that "the status quo is not a good enough answer," since a new Terraform-like or Ansible-like tool will have roughly the value of the old ones. The thing not yet tried is changing the shape of the system: why a pipeline in the middle, why only one layer of the application, and "what even is an application?"

## Simulations Instead of Code

Matty asks how System Initiative reasons about this. Adam starts from automation, which has followed one line of thought since Mark Burgess's computer immunization paper in the 1990s, and argues that code is a poor medium for collaboration and that feedback loops of 20 minutes or more, with an opaque Terraform plan, are too slow. Looking at adjacent fields, Adam lands on digital twins: Formula 1 teams simulate every variable of the car so only promising changes are tried at the track. System Initiative is an attempt to build a high-fidelity simulation of infrastructure, removing glue code and building the workflow into the system, and Adam says more people need to pull on other threads too.

Adam's closing hope is that people become willing to change the shape of the system and "throw some of the babies out with the bathwater." Matty adds that the past was the best available with the information at the time, and that maybe it was what got us able to learn these things.

## Links to Resources Mentioned

- [10+ Deploys Per Day: Dev and Ops Cooperation at Flickr](https://www.youtube.com/watch?v=LdOe18KhtT4)
- *[*The DevOps Handbook](https://www.amazon.com/DevOps-Handbook-Second-World-Class-Organizations/dp/B09L56CT6N)*
- [The System Initiative](https://www.systeminit.com/)
- *[Switch: How to Change Things When Change Is Hard](https://www.amazon.com/Switch-Dan-Heath-Chip-Heath-audiobook/dp/B0038NLX9S)*

<hr>

*DevOps World is back for 2023, and you won't want to miss out on this one-of-a-kind event! This year's program is packed with exclusive insights, immersive workshops, and unparalleled networking opportunities taking place across multiple cities in the US, UK, and Asia. Elevate your DevOps game and register using the following links: [NYC area](https://reg.rainfocus.com/flow/cloudbees/devopsnyc/webinar3/page/landing), [Chicago](https://reg.rainfocus.com/flow/cloudbees/devopschicago/webinar3/page/landing), [Silicon Valley](https://reg.rainfocus.com/flow/cloudbees/devopssiliconv/webinar3/page/landing), [Singapore](https://reg.rainfocus.com/flow/cloudbees/devopssingapore/webinar3/page/landing), and [London](https://reg.rainfocus.com/flow/cloudbees/devopslondon/webinar3/page/landing).*
