---
title: Getting Down With GitLab with Job van der Voort
description: GitLab's VP of Product, Job van der Voort, joins Matt for a frank discussion on GitLab's open company culture, the history of the project, and some of the challenges and benefits of working "in the open".
date: 2016-03-10T05:45:40.000Z
publishDate: 2016-03-10T05:45:40.000Z
episodeNumber: "59"
podcastFile: arrested-devops-podcast-episode059.mp3
episodeImage: episode/img/gitlab.png
episodeBanner: /episode/img/gitlab-banner.png
images:
  - /img/social/fb/gitlab.png
guests:
  - person: jvandervoort
    snapshot: jvandervoort
hosts:
  - mstratton
sponsors:
  - datadog
  - 10thmagnitude
aliases:
  - /59
explicit: yes
transcript: gitlab
---

Matty talks with Job van der Voort, GitLab's VP of Product, about how the project started and what it's like to run a company and a large open source project in the open. Job is responsible for what goes into each monthly release, did some engineering before that, and has a degree in cognitive neuroscience. Matty jokes that he should have been on the cognitive neuroscience episode, since Job says he's working backwards through the ADO archive.

## How GitLab Started

In 2011, Job says, a PHP developer in Ukraine named Dmitry wanted his company to move to Git, but the company wouldn't let him put code on GitHub off-premises and there was no good alternative. So he built one in Ruby on Rails, working through the night after his day job. Job likes to mention that Dmitry's house had no running water, so when anyone needed water he walked about 100 meters to a well with a bucket, and kept developing GitLab in between. Matty wonders what water-bucket-driven development did to the early commit patterns. Dmitry put the project on GitHub, where the programmers were, and it gained traction.

Around 2013, Sid, a Dutch guy whose real name is Sietse, thought it would make a good SaaS and told Dmitry he was going to start gitlab.com and not involve him. Dmitry said go for it. A few months later Dmitry tweeted that he'd like to work on GitLab full time, Sid saw it, and they started a company together.

## Omnibus and Time to First Delight

Matty's first encounter with GitLab was for a customer who couldn't put code on GitHub.com and was stuck on an ancient version of AccuRev, and he was won over that it installed with Omnibus, the Chef packaging. Job says GitLab hadn't always used Omnibus. Before that, installing a Rails app meant a manual with at least 12 involved steps, and switching to a one-command install made downloads go up "like 1,000%." He credits a good part of the project's success to it. There is now a package repository so you can just apt-get install gitlab. Matty calls it time to first delight, and Job says for a developer-oriented product, "it has to be extremely easy to use," installation included.

## What an Open Company Means

Job says GitLab does in the open everything it reasonably can where the community benefits. All development is public, from an idea or bug report through code review, merge and release, on the public gitlab.com instance. Then they opened the company handbook, a website of markdown files at about.gitlab.com/handbook where every page links to its file in the repository, and later support and operations. Product direction is open too. It lives on a direction page, not called a roadmap because they don't want to commit to dates, and in the public issue tracker where Job does all his work and gets feedback from customers and the community.

Matty argues that the list of things you can't share is shorter than you think, and asks how to move an organization that way. Job says there was a lot of internal resistance, his own included. Customers rarely want to be named, so a support ticket becomes a public issue with the name sanitized and a link to the private ticket, labeled as a big or medium customer. It adds some process, "but the positives massively outweigh" the negatives. Being open also means saying in public that you don't think a feature is a good idea and being open to hearing why you're wrong: "We don't want to be right. We don't want to be authoritative. We want to build a really good product." Matty says the worst feeling is being ignored, and it's better to hear no in a discussion. GitLab doesn't share revenue or salaries, which Job says wouldn't be immediately valuable to the community, unlike the things they invite people to contribute to.

## Outages in the Open

GitLab.com is free so they have a good place to load test, but it runs as production, with the team's own work on it. In 2014 it had a brownout of many hours, when there were about six people, all engineers in Europe, and part of it happened while they slept. They opened a Google Doc to discuss it and then decided to share it, put a link on Hacker News, and got a positive response. People said they had more faith in them after seeing the team work hard and disclose what was happening. It wasn't the moment they opened everything, but it led up to it. The site later carried a message saying it was slow and had downtime but the data was safe.

Job loves the GitLab status Twitter account, run by the DevOps engineers, who share their emotions, and says "I think it humanizes it." Matty read one saying that because GitLab.com has three single points of failure, they expect it to be unavailable at some point, and Job says they are now down to one. Matty connects this to HugOps and to blameless culture, recalling Charity Majors telling an engineer who had gone eight months without breaking production to step it up. Job says being visible online has never been a regret: "There has not been a single situation that we regretted being very present online."

## Growth and the Release Train

Job joined at the beginning of 2014 with six people, four of them engineers. A year later there were nine and they had been through Y Combinator, and now there are about 50, about half engineers. Dmitry released the first version on the 22nd of the month and GitLab still ships on the 22nd every month. Job calls it the release train and announces in Slack, "choo choo, the release train is going." They've done it 51 times and are going for 52 without fault.

## Dogfooding and Saying No

GitLab tries to use GitLab for everything, and when it hits a wall it builds the feature. Job's example is folding an external feedback tracker into the internal issue tracker, which gained a voting feature but then had thousands of issues instead of hundreds, so they look for ways to improve the product for that. Matty asks when a vendor should stop and integrate with something else. Job's example of a firm no is permission management on specific directories, which SVN migrants ask for. Because a clone contains the whole history, "we're not even going to try this because this is simply not the way Git works." Matty says that's cruel empathy: if your old way worked, you wouldn't be shopping.

## Community Contributors

Job says there are about 1,000 contributors, from a single commit to hundreds. Some of the best features came from the community, like the button to merge when the build succeeds, contributed by someone who was then offered an internship and is now a developer, and the fuzzy file finder. Customers contribute too. CERN, a customer, built several Enterprise Edition authentication features and worked in the open on issues and merge requests.

This year GitLab has at least one developer whose full-time job is to coach incoming community merge requests, finishing abandoned ones if needed, and an "up for grabs" label for small, quick issues that a first-time contributor with a little Ruby or JavaScript can tackle. Matty notes the parallel with the Phil Dibowitz episode about starting in open source.

## Relevant Links

* [GitLab Operations](https://gitlab.com/gitlab-com/operations/issues)
* [GitLab Status Twitter Account](https://twitter.com/gitlabstatus)
* ["Because http://GitLab.com has 3 single points of failure we expect the service to be unavailable at some point."](https://twitter.com/gitlabstatus/status/687254279321681920)
* How GitLab [learned to be open](https://news.ycombinator.com/item?id=8003601)

## Check Outs

### Job
* [iTerm2, version 3 Beta](https://www.iterm2.com/version3.html)
* [relay.fm](http://relay.fm)

### Matt
* http://10x.engineer/
* [flowstate](https://itunes.apple.com/us/app/flowstate/id1051600144?mt=12) - $9.99 in Mac App Store
