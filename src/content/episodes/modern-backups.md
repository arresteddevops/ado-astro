---
title: Modern Backups with Gilles Chehade
description: "Gilles Chehade, co-founder and CTO of PlakarKorp, joins Matty to talk about why backups need rethinking now that ransomware is routine, AI agents run inside the network, and terabytes are the low end. They get into treating resilience like infrastructure as code, with an inventory, policies, and a reconciliation loop, and why restores are the part nobody tests."
date: 2026-11-11T06:00:00.000Z
publishDate: 2026-11-11T06:00:00.000Z
episodeNumber: "211"
podcastFile: arrested-devops-podcast-episode211.mp3
podcastDuration: "00:30:09"
podcastBytes: 14475962
episodeImage: episode-img/modern-backups.jpg
episodeBanner: episode-img/modern-backups-banner.jpg
images: []
guests:
  - person: gchehade
    snapshot: gchehade
hosts:
  - mstratton
sponsors: []
aliases:
  - /211
  - /modernbackups
transcript: modern-backups
explicit: "no"
---
## Nobody Talks About Restoring

Matty opens by admitting that, as someone who spent decades as a sysadmin, the topic drags up Arcserve and tape libraries, and a third-shift computer operator who would call in the middle of the night to say the backup failed and ask what to do. "The same thing you do every time. Go and rerun the job." The operator, Matty figures, was bored and wanted to talk to somebody. Gilles started doing backups about 30 years ago as a student with sysadmin gigs on the side, and says nobody called him until a machine had died. His diagnosis hasn't changed: "Most people think of backups as a one-shot thing you do, and you forget about it until you are actually in a very stressful situation." Matty puts the same point from the other direction. Everybody talks about backups. "Nobody ever talks about restoring the data."

## Terabytes Are the New Low Unit

Gilles describes the old landscape: dedicated servers in a data center, hardware you knew existed for real, a tar copied to disk or magnetic tape, and data measured in gigabytes or hundreds of gigabytes. Virtualization then brought compute that spawns and despawns on demand, so you can no longer assume the thing you back up today will exist tomorrow. Now "terabytes is the new low unit," some companies are at petabyte scale, and some old habits turn into physical limits. Even with the network and the hardware, you can't finish inside the window, so daily backups become a problem. The old tools survive anyway, in Gilles's telling, because backups are "absolutely not a sexy area," and whoever gets handed the job wants to be rid of it as fast as possible. Matty adds that file-level thinking was wrong even decades ago, and he reaches for Microsoft Exchange: backing up the whole data store didn't help when a user deleted their own mailbox.

## Disaster Recovery Versus Rewinding Time

Matty splits the reasons to restore into two. One is disaster recovery: "What would we do if our main data center in Chicago went south and we had to restore service to a data center in Columbus, Ohio?" His team ran drills and pretended. The other is putting data back because of something people did, which he calls "rewind time." Gilles has the user-level version from his student days, working for small companies where the sysadmin was the only techie and gave access to whoever asked. Including a non-technical director, who typed a command he shouldn't have and wiped an entire set of data. Gilles was the one who came in to restore it.

## The Agent Is Already Inside

Gilles lists what changed since then. Ransomware was a curiosity when he was younger, when cryptography first got plugged into viruses, and now he says a company in the French news gets locked up every few months. On top of that, AI lets people administer infrastructure without understanding the pieces, delegating a lot of tokens and letting agents do far more than they should. He brings up the head of AI security at Facebook posting publicly that her mailbox was wiped while she was at lunch, because an agent decided to delete the data. The threat model flips. Before, you stacked layers to raise the cost for an outside attacker. Now the agent runs inside, so you have to guard against it as you would a user deleting your data, which is "a very, very different threat model." Admins he talked to recently told him a heatwave caused a lot of disks to malfunction, and he has been contacted by people with data in "data centers that were struck by missiles." He calls it "Interesting, nonetheless."

Matty notes that an agent dropping a production table is not something backups solve, and that the next line of those stories is usually "I didn't have it backed up because it was a POC." He calls getting teams to productionize their apps an episode of its own. Gilles agrees backups aren't the fix, but says they have to be reasoned about differently. The odds used to be low if you had enough redundancy and a high enough bar for attackers. Now it's not "I have low odds that it's going to happen." It's "It's going to happen."

## Resilience as Code

Matty reassures everyone that the show isn't here to tell them to retire to Montana and raise chickens, and Gilles offers two ways to think about the problem. The first is categorization. Most teams back up machines at one uniform level, which drives cost up and means the sensitive data can't be backed up as often as it should be. He suggests sitting down with an inventory of every data asset and putting a weight on each. Losing an hour of some data is fine, and other data can't lose ten minutes. The second is that infrastructure and DevOps already learned to run a reconciliation loop: an inventory, a statement of what should exist, and a fix when reality drifts. Data protection usually has a cron job and a report a human reads. Restoring is worse. Validating a restore costs far more than taking the backup, and when Gilles asks meetup rooms how many people check their backups, "two hands raised in the room" is a good turnout.

His model is a standard for what he calls resilience as code. The inventory driving backups should be the same one that spawns the machines, whether that's an Ansible inventory, a scan of Kubernetes PVCs, or the resources in an AWS account. A second, hand-written list drifts, and the result is "the wrong inventory being used at the worst time." On top of the inventory sit policies for what gets backed up, how often, and how long it's kept, then a loop comparing reality against those policies, with a fix that is either automated or a human. In one of his talks, that loop was wired to GitHub CI so the build breaks when expectation and reality disagree. Matty, a believer in infrastructure as code and policy as code, says backups are still "too much click next." He tracks his lifting in [Liftosaur](https://www.liftosaur.com/), an app that treats workouts as code, and Gilles asks if that means that when you skip a workout, "you break a CI." Matty files it as a feature request.

## Plakar, From Home Directories to Control Plane

[Plakar](https://plakar.io/) began as Gilles's own open source project. Every time he changed machines he copied the old home directory onto the new one, ending up with nested copies of the same data, which he backed up to two or three places and paid providers to store again and again. After building three or four tools for himself, he released Plakar, which compresses, encrypts end to end, and deduplicates at the source, so he can use a provider like AWS for storage without trusting it with his data. He didn't want every dataset forced to look like a file system, so Plakar has an abstract representation and [connectors](https://plakar.io/integrations/), about 30 of them, covering the file system, S3, databases, and more. "I can back up my Kindle on it." It's under the [ISC license](https://opensource.org/license/isc), which he likens to BSD, with a public SDK, and "You can actually build your business on top of it."

The second project is a proprietary [control plane](https://www.plakar.io/docs/control-plane/), the only closed-source piece. It exists for larger organizations, where some users can run backups, others can't even look at them, and both need to verify that a backup happened. It is API-first, with the UI as just one client, so it plugs into an Ansible collection, a Terraform provider, or a Kubernetes operator. CI can ask whether a resource has a policy, whether a job covered it, and flip lamps green or red. There's a free plan for up to one terabyte of processed data. Matty scans the connector list for Microsoft Exchange and doesn't find it, and Gilles points out they do have one for Active Directory. Matty says nobody runs Exchange anymore, then admits one of his most-read posts is a nearly 20-year-old walkthrough of a SharePoint Server 2003 one-way trust, and that people still reading it makes him sad for them.

## An S3 Bucket Is Not a Backup

Gilles's closing advice is to have backups whether or not you ever touch Plakar. He has horror stories, including a company that closed because it had no copy of its most critical data, and says it has happened to a lot of people around him. The cloud-era assumption that providers store your backups, that an S3 bucket is one, is wrong, and losing something there isn't unheard of. There are so many users that the stats look like it happens to no one, until it happens to you. The providers say so themselves: "We are not going to back up your data. Shared responsibility." His exercise is to look at your data, down to the pictures in Google Photos or a personal bucket, and ask what happens if you lose it and how depressed you'd be. That's enough to know you want your own copies, even if you never use them.

Matty adds that technologists are as exposed as anyone. Someone he knows keeps her photos in iCloud, which feels like a backup but is closer to a point-in-time copy, and a photo deleted three weeks ago may be gone. He wraps by saying the conversation maybe scared him a little, but that's a good thing. Gilles: "I did my job then."

## Links to Resources Mentioned

- [Plakar](https://plakar.io/), the open backup platform Gilles describes
- [Plakar on GitHub](https://github.com/PlakarKorp/plakar), the open source repo
- [Plakar control plane docs](https://www.plakar.io/docs/control-plane/), for the proprietary control plane Gilles describes
- [Liftosaur](https://www.liftosaur.com/), the workouts-as-code app Matty mentions
