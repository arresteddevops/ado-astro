---
title: "DevOps at Etsy: Not a Unicorn, Just a Sparkly Horse"
description: The engineering team at Etsy are considered by many to be industry leaders when it comes to automation, software delivery, and general DevOps awesomeness. We will be joined by Senior Operations Engineer Jon Cowie (and others) to give an overview of how Etsy does their DevOps magic, and what we can learn from their example.
date: 2014-05-21T17:16:50.000Z
publishDate: 2014-05-21T17:16:50.000Z
episodeNumber: "11"
podcastFile: arrested-devops-podcast-episode011.mp3
podcastDuration: 57:41
episodeImage: episode/img/devops-at-etsy.png
episodeBanner: /episode/img/devops-at-etsy-banner.png
images:
  - /img/social/fb/devops-at-etsy.png
guests:
  - person: jcowie
    snapshot: jcowie
  - person: jallspaw
    snapshot: jallspaw
  - person: dyurkiewicz
    snapshot: dyurkiewicz
  - person: pbellisano
    snapshot: pbellisano
hosts:
  - thess
  - mstratton
sponsors:
  - pagerduty
  - 10thmagnitude
aliases:
  - /11
  - /devopsatetsy
youtube: IDmqD-xuzOI
transcript: devops-at-etsy
explicit: yes
---

## Not a Unicorn

The episode opens with Trevor playing back Matty's promise in episode 1 not to name-drop John Allspaw, then noting that today's guests are the Etsy ops team, which Allspaw belongs to. Matty's defense is "It's possible." (Also in the news: Trevor has joined 10th Magnitude, and Matty is leaving it for Chef.) Jon Cowie, a senior ops engineer who has written much of Etsy's Chef tooling, "resolutely" maintains they aren't a unicorn, since that implies magical powers. They have servers that break, software with bugs and pages in the middle of the night. What's different, he says, is that "from the CEO down, IT and engineering is recognized as a core competency," and they've solved enough of the easy problems to be more proactive than reactive. His shortest version: "We trust our colleagues, and we communicate with them."

With Cowie are Allspaw, who manages infrastructure and operations (roughly half of engineering), and web operations engineers Pete Bellisano and David Yurkiewicz.

## Nobody Says DevOps at Etsy

Asked about the history, Allspaw says there wasn't a concerted effort, no lunch-and-learns about DevOps, and no marketing. It "still is very, very weird to hear the word DevOps" in the office, and if someone says it they're probably referencing something from the internet. What did change was that decisions had to recognize domain expertise, in a high-trust way, and beyond that the rule was "don't be an asshole."

David calls DevOps a buzzword the industry has turned into a marketing term. Allspaw's take is that the word is "underspecified," like cloud, compliance or resilience. Nobody would say "let's add some more robustness" and treat it as an answer: "That would be the start of the conversation, not the end of the conversation." Matty agrees, calling the word a blessing and a curse, because it starts conversations and only becomes a problem if you stop there.

## Culture Isn't the Furniture

Pete left IT about ten years ago, ran his own business for seven years, and came back to Etsy's corporate IT and then ops, and says the culture is "very nurturing." David says "you can't really buy culture," and that at earlier jobs the separation between sysadmins, developers and DBAs got in the way of ideas. Cowie, who works remotely from the UK, says the open-plan office isn't the reason: "I don't think the communication is a result of the layout of the furniture." The same cross-pollination happens with him over video chat and IRC, which David says is where most communication happens.

Cowie also describes his own adjustment. He came from tiny startups where he was the only sysadmin and had "a very sort of B-O-F-H attitude," with the infrastructure his alone and someone screaming down the phone when it broke. At Etsy, he says, the idea was that with all the will in the world "you cannot defeat human error," so you ask what assumptions led to a mistake instead of yelling. Developers own their availability too, and there are developers on call who can be woken up.

## Making Misunderstandings Repairable

Allspaw questions the premise that the culture is simply awesome. His view is that they don't indoctrinate people, they make misunderstandings "easily repairable," because bad cultures happen when practices drift and nobody can detect or fix it. He uses New Yorkers and drivers as an example: ask a New Yorker whether New Yorkers are terrible drivers and they'll say they're just drivers, while someone from Kansas City in the back of a cab will say something less polite.

Cowie asks him to tell the NFS over WAN story. About a year earlier, Cowie had made an enthusiastic suggestion, and Allspaw, on a large conference call, called it the dumbest idea they could go with. His team told him afterward it hadn't come out the way he meant, and they were right. Cowie points out that Allspaw was then his boss's boss, and that in many companies you can't tell someone at that level they're being an asshole without being fired: "And now we're telling a story about it, and I still work here."

Matty's view is that he probably wouldn't be fired, but the fear is enough. He once had a sysadmin ask what would happen when the CTO came running down the hall yelling to get the release out. Matty repeated it to the CTO, who said, "when have I ever done that?"

## Bare Metal, Small Deploys

Cowie says Etsy's infrastructure is still "pretty much entirely bare metal," with S3 for some image storage and backups. The reason isn't aversion to the cloud but capacity planning, which Allspaw "literally wrote the book on." They run a monolithic PHP application on the LAMP stack, understand their seasonal traffic, and actually use the hardware they have, so moving to EC2 doesn't make commercial sense.

They do a lot of continuous delivery. Chef manages everything under the application, while a separate tool called Deployinator ships the code, currently 50 or 60 times a day, mostly behind feature flags. The same ethos applies to Chef, where about 40 people have knife keys and make a couple hundred changes a month. Cowie says he expected the culture to fade as the company went from 250 or 300 people to nearly 500, and that instead, when his KnifeSpork workflow started slowing people down, the team simply sat down and changed it. He says he could take it on board without being defensive, and that there's "no defensiveness or empire building."

## Developers Who Deploy, and Ops Who Are Busy Anyway

Allspaw introduced postmortems to Etsy, with the requirement that the room have diverse perspectives, including finance, legal, customer support, fraud detection and design. He says the effect of developers deploying their own code is that they care much more about how it runs in production: "we're not so secretly turning software developers who come work at Etsy into ops people." When people ask what operations does if developers deploy, his answer is "Are you joking?" and that there's an immense amount of proactive work. Matty says his own sysadmins asked the same thing about automation, and his answer was that they'd do cool stuff rather than copy files around.

David describes designated ops people assigned to product teams whose job is to show them how to set up Nagios checks and Graphite graphs, and not to hold anything back. Cowie adds that a developer on the DevTools team asked to be in the on-call rotation and has been in it for about a year. Matty: "Somebody asked to be on call."

## Context in the Page, and What They Learned

For the small problems they've solved, Cowie describes a teammate adding context to Nagios alerts: the page now includes a graph of the partitions, a Ganglia graph of disk space over time, and how far over the threshold it is, so at 4 in the morning you can tell whether you have to get out of bed. David's is host building: bare metal servers built in about 5 to 10 minutes each, so a new data center wouldn't mean building 100 servers by hand.

Asked what they've learned, David says it's okay not to know everything, Pete says to keep asking questions, and Allspaw says every time he thinks a size barrier exists, he's proven wrong: "things fail at a certain size because you expect them to." Cowie's is "the consequence for failure is learning more stuff."

- [Episode 11: Etsy Examined - How the Best Do Their Business](http://foodfightshow.org/2012/05/episode-11-etsy-examined-how-best-do.html) by Food Fight
- [BOFH](http://bofh.ntk.net/BOFH/) (the Bastard Operator From Hell)

## Check Outs

### Jon Cowie

- [dmg cookbook](http://community.opscode.com/cookbooks/dmg)
- [rbenv cookbook](http://community.opscode.com/cookbooks/rbenv)

### David Yurkiewicz

- [Pushover.net](http://pushover.net)

### Pete Bellisano

Buffalo Trace whiskey

### John Allspaw

Lloyd Taylor ["Hacking Your Organization"](http://www.infoq.com/presentations/Hacking-Your-Organization)

### Trevor

- Shortcut-Fu
- Agents of Shield

### Matt

- [Vimium](http://vimium.github.io/) - Google Chrome extension which provides keyboard shortcuts for navigation and control in the spirit of the Vim editor
- [Release! The Game](http://www.kickstarter.com/projects/627324241/release-the-game)
