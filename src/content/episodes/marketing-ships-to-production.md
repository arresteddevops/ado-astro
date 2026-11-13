---
title: Marketing Ships to Production with Stephan Schmidt and Tanya Higgins
description: "Stephan Schmidt, a CTO coach, Tanya Higgins, Tiger Data's design lead, and Matty talk about non-engineers shipping software with AI, what Stephan calls Bottleneck 2.0, and why the permission model on your phone might be the answer. They also get into shadow apps, guardrails, and who plays app store inside a company."
date: 2026-11-18T06:00:00.000Z
publishDate: 2026-11-18T06:00:00.000Z
episodeNumber: "216"
podcastFile: arrested-devops-podcast-episode216.mp3
podcastDuration: "00:33:27"
podcastBytes: 16274489
episodeImage: episode-img/marketing-ships-to-production.jpg
episodeBanner: episode-img/marketing-ships-to-production-banner.jpg
images: []
guests:
  - person: sschmidt
    snapshot: sschmidt
  - person: thiggins
    snapshot: thiggins
hosts:
  - mstratton
sponsors: []
aliases:
  - /216
  - /marketingshipstoproduction
youtube: DxkIRQr-bYQ
transcript: marketing-ships-to-production
explicit: "no"
---
## Tanya's Brand Hub Grows Up

Tanya says that "now I am also a junior developer" when it comes to this AI era, which is why she's on the show. Matty discloses that he and Tanya work together. Before Tiger Data she was the sole marketing and brand designer at [Appcues](https://www.appcues.com) for eight years, which meant building systems to "scale myself": [Canva](https://www.canva.com) templates, a brand guideline in a Google Doc, and a microsite in a CMS where people could download logos.

As AI took off she built a brand hub that started as an AI search over her approved icons ("Can you give me an icon for a database?") plus a thumbnail builder with all the assets preloaded. At Tiger Data it "really took off," and she and Matty brought it into Tiger Den, the internal tool. It now has templates for thumbnails and ads, an email generator, an email signature generator, and Claude skills. For a designer on a very small team, the payoff is not being "asked for assets every single day."

## Bottleneck 2.0

Stephan's name for the new problem refers to the old one. Bottleneck 1.0 was engineering for the last twenty years: anyone who wanted something on the website got into a backlog, waited, and sometimes heard it couldn't be done. AI makes everything faster, but now everyone wants to deploy to production, so the work lands in a review queue. "Obviously, the person can build it on their own until they like it, but then they still need to wait."

Matty is careful to say "non-engineers" carries no shade. He just means people without a software engineering background.

## Where It Goes Sideways

Stephan starts with the sideways, which "depends on whether you're responsible for it or not." It shows up in shadow apps and in maintaining security. When a bottleneck blocks the company site, the AI helps: "Oh, you can't deploy to the company site? Well, we can deploy it to [Vercel](https://vercel.com) or we can deploy it anywhere." He has seen CEOs who deploy to Vercel, and then "no one knows what's running where."

Matty says it's the early cloud all over again. In place of a server that takes ten weeks to rack and stack, you could "slap down my credit card and spin up something in EC2, and kaboom." Not new problems, just "at a much larger scale because it can be done so much faster." And it's often not intentional. Someone is building a thing and the agent says, "Sure, go throw it in then Vercel." Tanya's brand hub could easily have lived in her personal GitHub and Vercel project.

## Getting Comfortable With Being Uncomfortable

For Tanya the adjustment was "to get comfortable with being uncomfortable." Some days she is fully in the terminal in [Ghostty](https://ghostty.org), but most days she is still a designer, and she doesn't fully understand what the terminal says back to her. Matty's guardrails, and his repeated "It's okay, you are not gonna break it," were "exactly what I needed," because shipping to production had been "a very scary thing for me my whole career."

The guardrails also cover her forgetting. Matty will ask, "Did you use implement issue?" and she'll say, "Oh, I forgot," and everything is still okay because "all the worst-case scenarios have been thought through." Matty says you can't just tell people to do it the right way. "You have to enable for that." He credits his own 20-plus years of sysadmin scar tissue for an internal marketing app with "literally 7,000 tests" ([he wrote about it](https://dev.to/mattstratton/how-my-coworker-who-didnt-know-cd-shipped-to-production-3j6j)) and a robust CI/CD pipeline, all of it built "defensively against humans being humans."

## The Phone Already Solved This

Stephan's mental model is that companies already solved this with the phone. "You run apps from people you don't know, and they are next to your banking data, and no one is worried." Normally, if someone writes code, "it can do everything." Model it with permissions and Tanya's module can be deployed without the right to read all customers, so there is "no need to review the code if it does this. You just need to review the permissions." It's the phone asking "Can I read the camera?" and someone answering yes or no. Add a sandbox to shrink the blast radius. [Cloudflare Workers](https://workers.cloudflare.com) and [Fastly Compute](https://www.fastly.com/products/edge-compute) already let people deploy onto their systems, and DevOps may need to set up a platform like that where people can run code without harming the system.

Matty ties it to safety science. When something goes wrong the question isn't what Tanya did wrong. It's what was wrong with the system that allowed it, and how do you build it so you can't drop the production table. Agents make mistakes faster and with a larger blast radius, so he wants least privilege. Engineering knows how to do this but isn't used to doing it for people outside the department, and "nobody on their first day in the org knows the standards."

## Demystifying Engineering

Tanya is someone who learns by doing, and she says a book would never have worked. She recently figured out how to change her theme in Ghostty without asking Matty, and she was so proud. Then Matty showed her [Ponysay](https://github.com/erkin/ponysay), a terminal command that draws a cute pony saying things, and she took the idea and built a tiger version on her own, [Tigersay](https://github.com/higginst1729-cpu/tigersay), because they work at Tiger Data. "I feel like demystifying engineering has been a big part of it for me."

It demystified her audience too. She is marketing to engineers, and now she works "in the same type of programs that my customers I'm marketing to are using." Matty adds the genealogy at the end of the episode. It starts with [CowSay](https://en.wikipedia.org/wiki/Cowsay), where you pipe text in and an ASCII cow says it. Ponysay does a My Little Pony, and Tanya turned that into Tigersay. Her version of the story: "I took the pretty one and made that one into tiger." Matty's pitch to engineers is to remember the dopamine hit of "I made a thing and it's doing a thing," and what it's like to give that to someone else.

## Creators and Craftsmen

Stephan, a CTO coach at [Amazing CTO](https://www.amazingcto.com), says he realized last year, after 45 years, that he came into programming in 1981 as a creator who wanted to build the games in his head. Programming was just the tool. "The fences around things kept creators off," and AI is bringing them down. He expects engineering to become more of a platform environment where engineering, operations and DevOps merge into one thing that enables other people to create. Senior engineers may split: those who see themselves as creators keep creating, and those who see themselves as engineering craftsmen go toward guardrails and platforms.

Matty adds that platform engineering gets more necessary in smaller orgs. A team that couldn't justify a platform with 40 engineers can when it effectively has three times that. And the guardrails aren't only for non-engineers. He built the architecture of Tiger Den himself, and he loves the guardrails for the same reason he always loved good CI/CD: "It makes me feel comfortable." His line is to "make the right way the easy way," so that doing it wrong takes real effort. He builds them even into side apps where he's the sole contributor, because "I'm not gonna remember every single way that I did that."

## Who Plays App Store?

Matty asks who plays app store inside a company. Stephan's easy first step is module permissions, because in every code base he has seen, "every code trusts all the other code." That benefits existing code, and it gives engineers guardrails when they use AI. The second step is for platform engineers to ask what would enable them to take responsibility for running things other people produce. Instead of saying it can't be done, think about what would need to change or be in place.

Asked what builders of guardrails should know, Tanya says to "be kind and be understanding to the people that you're building it to," because "they're very nervous" and have had a whole career of being told they couldn't do it. Matty calls it the DevOps empathy of the last 15 years, running in a new direction. Tanya's version: "Have empathy for the designers who are just trying to build things too now." Matty adds that when a designer can ship, "your stuff looks a lot prettier and cooler," and he says plainly that he can build an app but cannot build a UX. Stephan's last advice is "Do it."

The video viewers get a bonus: Stephan's puppy, Dorothy, named after the Golden Girls character.

## Links to Resources Mentioned

- [Tigersay](https://github.com/higginst1729-cpu/tigersay), Tanya's tiger version of Ponysay
- [How My Coworker Who Didn't Know What CD Meant Ships to Production](https://dev.to/mattstratton/how-my-coworker-who-didnt-know-cd-shipped-to-production-3j6j), Matty's post about the guardrails behind this episode
- [Amazing CTO](https://www.amazingcto.com), Stephan's CTO coaching site
