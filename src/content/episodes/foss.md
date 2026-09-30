---
title: Fireside Chat with VM Brasseur
description: Matty is joined by VM (aka Vicky) Brasseur, Vice President of the Open Source Initiative, for a chat about contributing to open source software.
date: 2018-08-23T22:55:48.000Z
publishDate: 2018-08-23T22:55:48.000Z
episodeNumber: "114"
podcastFile: arrested-devops-podcast-episode114.mp3
episodeImage: episode/img/foss.png
episodeBanner: /episode/img/foss-banner.png
images:
  - /img/social/fb/foss.png
guests:
  - person: vbrasseur
    snapshot: vbrasseur
hosts:
  - mstratton
sponsors:
  - chef
  - datadog
aliases:
  - /114
explicit: yes
transcript: foss
---

Matty talks with VM (Vicky) Brasseur, vice president of the Open Source Initiative, a freelance open source developer, policy and strategy consultant who helps companies use, contribute to, release and comply with licenses for free and open source software in a way that balances the bottom line with the community. VM's book, Forge Your Future with Open Source, is in early release with Pragmatic Publishers, with hard copies expected in mid-October. The cold open is VM: "For fuck's sake, doc your shit!"

## Redis and the Commons Clause

Matty raises Redis's announcement of a licensing change in the previous day or two. VM explains the company posted that certain unnamed components would be relicensed under the Apache license with the Commons Clause, which prevents making money from those components. Core Redis, VM says, according to the lead developer, is and will always be BSD-3, but the Commons Clause only implies open source, since open source means the freedom to do whatever you want, including make money. VM has blogged and written on Hacker News about it, and Matty will link the post.

## Open Source Is Not a Business Model

VM says people think open source is a business model, which is foolish: "Open source is not now and never has been a business model." Open core can be a business model, but VM says few open core companies are a success, and those were exits by acquihire, since the technology is already free. VM points to John Mark Walker's article series on the subject. VCs will fund an open core company through a runway, but it then struggles to sell support or add-ons. VM does make a living from free and open source software, but thinks it needs case-by-case reevaluation.

Asked for success stories, VM says a company can't release everything and expect payment without a good reason. But free and open source software is in anywhere from the 80s to 98% of software developed in proprietary companies, which is an amazing way to bootstrap innovation, while contributing back falls short. VM cites Nadia Eghbal's Ford Foundation study on the infrastructure of software development, which set off alarm bells and the sustainability conversation, and points to Heartbleed and OpenSSL as a tiny underfunded team. Silicon Valley's answer is to throw money at it. VM believes maintainers deserve pay but says what they need most is help, including learning to let others help: "It's not actually a business issue." Matty adds burnout and thankless maintenance, citing Jess Frazelle's post The Art of Closing on learning to say no.

## Doc Your Shit

VM's advice to maintainers is to document. VM gives a talk on drive-through contributors, people who give one contribution and never return, and argues they're a good metric: if someone can show up, get a patch merged and leave, the project is doing something right that makes it easier for others to stay. In VM's research, drive-through contributors found no install docs, user docs or developer environment setup. Writing is hard, but it's the best force multiplier, and "even shitty documentation is probably better than no documentation at all." Matty says a blank page is intimidating and a half-written doc can be edited. VM adds that writing docs requires knowing the project, so "just write docs" is not good advice for newcomers, but fixing docs is, and as a maintainer, starting people off with a doc or two helps.

VM's first job was at a library automation software company, where VM learned to write everything in an issue tracker, treating it "like a scientist's lab book." Matty adds that doing PRs for oneself models the workflow for other contributors.

## Contributing From Inside a Company

Matty asks about lawyers getting in the way of customers contributing back. VM says the answer to almost everything is it depends, IP lawyers are rightly conservative, and VM's IP advice in the book boils down to "Don't fuck with IP law," a phrase the editors keep out of print. Some companies, VM says GitHub and GitLab among them, changed employment agreements to allow contributions to free and open source software on any device at any time, and some publish a checklist for when you don't need to ask permission. But a checklist varies with each company's risk profile, and VM says borrowing another company's is a load of hooey.

## Not Just Code

VM says contributing isn't only code, and that free and open source software has become programmer-centric, which is why usability is poor and there will never be a year of Linux on the desktop. Designers, usability and accessibility experts, marketers and finance people are needed, along with organizations like Software Freedom Conservancy. "Software is about all of the people that have to come together to make it happen." Matty raises the ops side, such as running crates.io for Rust with volunteers on call, and VM says at HPE, the team dedicated to upstream open source included many who ran OpenStack's contribution infrastructure. The book covers every way to contribute, not just code.

## Better Talk Proposals

Matty and VM were both at re:Deploy the week before, which VM calls content-packed, relevant and well connected. VM will have reviewed over 1,000 conference proposals this year, and offers two tests: find a unique angle on a hot topic by checking YouTube for the same talk, and "tell me audience takeaways." VM says to write, "by the end of this talk, the audience will know," and to give three things people can do afterward, which beats 95% of proposals. Employers send people to learn, VM says, and a conference is not the place for story time.

## Three Things From the Book

Put on the spot, VM says readers will be able to find a project that fits them, not just any project, and to accept feedback in an empathetic way and give it, because communication is the key to free and open source software.

## We Have Let People Down

VM closes with a rant: people are still asking how to contribute, twenty years into open source and nearly forty into free software, and "we have let people down" by not making it obvious. The GitHub Octoverse shows millions of new public repositories a year, several million new open source projects even after discounting non-OSI licenses and forks, and "this is not sustainable." VM says "we're just going to crash under the weight of our own success," so contributors should contribute and maintainers should make it easier.

Matty is joined by VM (aka Vicky) Brasseur, Vice President of the Open Source Initiative, for a chat about contributing to open source software.

- [OSI](https://opensource.org/) - open source initiative
- [Forge Your Future with Open Source](https://fossforge.com) - book
- [Redis blog post from VM](https://anonymoushash.vmbrasseur.com/2018/08/21/redis-labs-and-the-questionable-business-decision/)
- [Apache license](https://opensource.org/licenses/Apache-2.0)  + [commons clause](http://commonsclause.com)
- Ford Foundation [‘Roads & Bridges’](https://www.fordfoundation.org/about/library/reports-and-studies/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/) study by Nadia Eghbal
- [Article series by John Mark Walker](https://www.linux.com/news/how-make-money-open-source-platforms) about how to do business with open source
- [Ashley Williams PagerDuty AMA](https://www.youtube.com/watch?v=-MlqJorxtt0)
- [Public speaking repository](https://github.com/vmbrasseur/public_speaking)
