---
title: What's the Deal with AWS Billing...? with Corey Quinn and Pete Cheslock
description: Jessica and Matt spend a little time with Corey Quinn and Pete Cheslock of the Duckbill Group to dig into the mysteries of AWS billing, why product names are all terrible, and what exactly is a "cloud economist" anyway?
date: 2020-04-23T11:28:55.000Z
publishDate: 2020-04-23T11:28:55.000Z
episodeNumber: "152"
podcastFile: arrested-devops-podcast-episode152.mp3
podcastDuration: 54:05
episodeImage: episode/img/cloud-costs.png
episodeBanner: episode/img/cloud-costs-banner.png
images:
  - img/social/fb/cloud-costs.png
guests:
  - person: cquinn
    snapshot: cquinn
  - person: pcheslock
    snapshot: pcheslock3
hosts:
  - jkerr
  - mstratton
sponsors:
  - logzio
  - circleci
  - sdt
aliases:
  - /152
  - /cloud-costs
  - /cloudcosts
explicit: yes
transcript: cloud-costs
---

Matty and Jessica Kerr talk with Corey Quinn and Pete Cheslock of the Duckbill Group about AWS bills, during the early pandemic. Matty introduces them as cloud economists, and Matty says the show will be informative and maybe hilarious. The transcript's speaker labels for the two guests are scrambled in places, so this summary uses the phrase a guest instead of pinning most stories on one of them. The cold open is one guest on how the title came about: "Do you pay money for me to be a cloud economist? They said, yes, we do. I said, yeah, I am a cloud economist."

## What a Cloud Economist Does

A guest explains that the title was made up because they're two words nobody can define, then found out other people use it, including someone with a PhD in cloud economics, which led to a choice between owning up and teaming up. What the Duckbill Group does, in a guest's words, is look at companies' AWS bills, "because those tend to be the big ones," and help them become smaller and less terrifying. A guest's example of a typical surprise is an EMR cluster that fails to start but doesn't turn off the old one, and with no idempotence check spawns a new one every run, so "you're not building the cloud for what you use, rather for what you forget to turn off."

Matty asks why a guest who had been a cloud consultant joined Duckbill. One guest says that while consulting for a couple of years the lesson was to know only a little more than your first customer, and that the two kept saying they should do something together. The move came when projects finished early and the company was looking for people, and they slid into the CEO's DMs, a message that sat unseen for a while because of a Tweetbot bug with group DMs. As the economy got questionable, reducing spend seemed more important, since it can be the difference between laying off engineers and turning off servers nobody remembered.

## What the Customer Says Versus the Pain

A guest says that what customers say and what actually hurts aren't aligned. Someone in finance sees a bill that looks like a phone number, the concern passes through about five levels of corporate telephone, and the real pain is that it's too difficult to figure out what the cost drivers are and allocate them: "understanding, optimizing, and predicting it." Now, with a recession-style pandemic event, customers who say "we're here to save money" mean it.

Jessica notes that DevOps was supposed to give people feedback loops and cloud took that away for engineers who can't see the bill. A guest says data centers had the problem too, buried in multi-year cycles, and that you can still do financial hijinks in the cloud. Another guest says the number of pages in a large bill can be in the hundreds, and mentions a bug found in AWS data transfer pricing where it's cheaper to transfer data between us-east-1 and us-east-2 than between availability zones. Both guests tell stories about tiny charges, one of a 22-cent charge running for years and the other of spending about 5 hours to delete a 2-cent Glacier vault, to which Matty replies that they have that 22-cent charge too.

## Tagging and Enforcement

Asked about misconceptions, one guest says to tag your cloud usage, thinking about how your company makes money, since "current you is going to have the CFO roll over to you one day and say, what is our cost of goods sold?" The harder part is assuming users won't follow the policy and enforcing it, and the guest's approach is to delete untagged resources, which the guest calls the scorched earth approach, with the gentler alternative being permissions and security rules, "but no one understands IAM." A guest describes customers fixated on the wrong thing, like a company building tooling to cut its dev environment spend when development was 3% of the bill, and says an unbiased third party helps by avoiding internal narratives about the bill. Another points to Terraform plugins that estimate cost, and worries about Kubernetes, where containers make it unclear what's underneath and how to tag it.

Matty adds that a dollar amount without context means nothing, such as a $500 a month button. A guest adds that attributing cost to teams or users also fails without context, as when accounting asks who Jenkins is, and a data science user costs a king's ransom because that's what they do.

## First Steps and Over-Specing

For the one thing to do first, a guest says to turn on the AWS billing reports, which aren't on by default and deliver data to S3, and since some take weeks to produce useful insights, do it on day one. Someone should own the Amazon bill, since "someone should have a number on their head in some way." Matty notes the old pitch was to move from CapEx to OpEx, and a guest says most people are still over-specing, picking an instance, hearing "it's slow," doubling it with no metrics, and never going back. One guest tells of quietly moving developers' unused workloads to a smaller instance type and no one noticing.

Asked if Lambda will fix this, a guest says Lambda solves a different problem, and jokes that many AWS blog posts conclude with "fix it your damn self" with a Lambda function.

## Worst Names in AWS

Matty asks for the worst-named AWS thing. One guest says Snowball, and another says the many Systems Manager services and invents Systems Manager Cost Manager in the moment, then finds AWS Cost Categories was announced that day. A guest thinks any service starting with the word Simple sends the message that it's easy. For the worst name in cloud, a guest says Azure DevOps, because a hiring manager junk-piled a resume for listing it as if it were a skill. Jessica says it should have been called Arrested DevOps. Matty adds that you can't buy DevOps, "but I sure as hell can sell it to you."

## Pandemic Bills

The pandemic brought new work. Customers made multi-year commitments assuming spend would rise forever, and now ask how to deal with commitments they may not meet. Traffic is skyrocketing for some and falling for others, but bills don't fall as much, because people "misunderstood auto-scaling to mean it only ever scales up." A guest adds that billing systems run on at least an 8-hour consistency model, so you don't learn what an expensive change cost until later. The guests close by saying that companies still paying retail prices should negotiate, since no one really pays retail, and Jessica's line on elasticity is that "the definition of elastic is not that it stretches, it's that it snaps back after it stretches, sometimes with lawsuits."


