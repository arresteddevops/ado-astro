---
title: Making The DevOps Transition
description: Matt and Trevor are joined by Jeanne Steinback (Rewards Network) and Chris A (MacArthur Foundation) to chat about their real-world experiences in bringing an organization through a DevOps transition.
date: 2014-06-11T17:19:38.000Z
publishDate: 2014-06-11T17:19:38.000Z
episodeNumber: "12"
podcastFile: arrested-devops-podcast-episode012.mp3
podcastDuration: 44:48
episodeImage: episode/img/implementing-devops.png
episodeBanner: /episode/img/implementing-devops-banner.png
images:
  - /img/social/fb/implementing-devops.png
guests:
  - person: jteinback
    snapshot: jteinback
  - person: candreen
    snapshot: candreen
hosts:
  - mstratton
  - thess
sponsors:
  - pagerduty
  - 10thmagnitude
aliases:
  - /12
  - /implementingdevops
youtube: QjKbSPCyKUk
transcript: implementing-devops
explicit: yes
---

## Two Routes to DevOps

Jeanne Steinback, Director of Software Delivery at Rewards Network and formerly six years at Redbox, and Chris Andreen, Director of Software Development at the MacArthur Foundation, describe what implementing DevOps meant in each of their organizations. For Chris it's about technical debt and a history of doing everything by hand: "manual deployments, manual compilation, manual everything." He calls it pulling a thread on a sweater to see how far it goes, so the foundation can spend less effort on delivery and more on the development that supports its grantmaking.

Jeanne's teams were already mature Agile teams with the low-hanging fruit picked. What surprised her was that a full-time DevOps person on the delivery team, who automated deployments and took them off the developers, "almost doubled" their velocity, since they were deploying two or three times a week and each deployment was expensive. Both cite consistency, since Chris says "nothing breaks the same way" and Jeanne says keeping environments in line used to be an enormous headache. Matty's summary is that it amounts to a release engineering practice under someone responsible for consistent releases.

## How You Know You're Happy

Matty likes to start from success criteria: how do you know when you'll be happy? Jeanne's answer is "when your velocity goes up," since the only reason to have a development team is business value, and velocity is a hard statistic. Her team tracks cycle time from analysis to production, velocity including interruptions and bug fixes, bug counts, and deployments per two-week timebox, and baselines whichever area is a bottleneck before trying to improve it.

Chris's metric is shifting the time spent cleaning up accidents toward work that adds value. His organization is unusual in that it doesn't take in money. "We actually don't take money in, so we do the opposite," and the goal is to be more efficient at giving it out and at tracking how productive the grants were.

## Resistance, and Fighting It With Data

Chris hasn't met resistance, since he oversees both software and infrastructure and "the only resistance would come from me." Jeanne met plenty at Redbox, where there was no DevOps team and the need showed up by looking at bottlenecks. She won the argument with statistics, presenting where the time went and predicting a 20% improvement in deployment time, which turned out to be much higher. She used her own team as the guinea pig, and afterward DevOps was assigned to every delivery team, which are now "big proponents." At Rewards Network there was almost no resistance, because she runs all of delivery.

Her advice is to accumulate data and make a logical presentation, not to say "I hear DevOps is really hot right now." Matty agrees, and says he's from Missouri: don't point him to a Gartner report, show him.

## Letting Go, Without Siloing

What did developers have to change? Jeanne says "letting go of the responsibility for DevOps," because "it's hard to get developers to trust other people." Chris says the mindset he's still working through is the familiar one: things have been done this way for a long time and worked fine. Jeanne adds that once you're doing continuous delivery, "you almost can't live without DevOps."

Trevor, a developer, asks whether that means siloing. Jeanne says no. The DevOps engineer sits next to the developers, and "stopped us from making so many stupid mistakes." Her point is that an Agile team calls each other out when someone's about to take a shortcut. Deployments no longer needed four, five or six people in a room, and became "hit the F5 button," because the DevOps engineers built the CI architecture together with the developers. Matty cites the John Vincent line again, and mentions the idea that it should now be called BizOps.

## Rebuilt Weekly, With No SSH

Asked about his nirvana, Chris describes a plan to move all applications to the cloud, starting on Azure and later using AWS, and to rebuild infrastructure weekly from the latest server images so "we don't have to think about patching." There will be no SSH or RDP access, and servers will live for a week. He wants to keep things "as simple and as vanilla as possible," because if he can't just spin up a box and turn on the couple of features he needs, he's over-engineered the app. Databases will stay on-prem for now. He's heard the term server huggers and says they don't want to be that: "we're more than happy to just roll through servers like water."

Matty points to an Ars Technica article on how Boeing merges its data centers with the Amazon and Microsoft clouds, and to the need to avoid provider-specific special snowflake features. He also credits Sascha Bates on the Mythbusters episode with the point that if the job is one nobody wants to do, like patching, ask why it isn't automated. He explains immutable infrastructure for listeners as the Netflix model, and quotes Steve Murawski that RDP is not an administrator tool. His joke about Chris keeping servers at arm's length is that "they're going to put them in therapy later in life because they didn't get enough love."

## Automate the Fifth Time

For what worked less well, Jeanne says her team kept repeating tasks that could have been automated because everyone was rushed. They eventually put a big piece of paper on the wall, and when a task came up five times in two weeks, it became a candidate for automation. They did this for deployments, for development, and for interruptions where people kept asking the same question.

Chris borrows the phrase "iteration zero," and says it's constant mistakes: they've been through TFS, Git and Subversion, and "restructured our repos 100 times," and he hasn't met the consultant who gets it right on every throw. On tools, Chris runs Subversion and Jenkins, and says he hasn't found anything Jenkins can't do. The one plugin besides Subversion is the Chuck Norris plugin, and a PowerShell library orchestrated by Jenkins spins up infrastructure and deploys code. Jeanne is moving from Subversion to Git and using Go and Mingle together, and lets her developers choose their own tools because she wants them happy.

## Make Work Fun

That picks up a thread Matty has been on: his job isn't to make things suck less, it's to make work fun. He credits Jez Humble with the idea that DevOps and continuous delivery are about making it fun to be at work, which doesn't mean Nerf fights but enabling people to create things. In his words: "Patching servers is not fun. Troubleshooting a deployment script is not fun."

Trevor prompts the question ops people always ask, which is what they'll do once it's automated. Matty says he heard it from his own sysadmins, and that John Allspaw said the same thing on the Etsy episode, with "are you kidding?" and a list of innovative work.

## Agenda

- What problems were you trying to solve?
- How did you (or will you) know when you are “happy”?
- What resistance did you encounter?
- What worked REALLY well?
- What worked less well?

[How Boeing merges its data centers with the Amazon and Microsoft clouds](http://arstechnica.com/information-technology/2014/04/how-boeing-merges-its-data-centers-with-the-amazon-and-microsoft-clouds/)

## Check-Outs

### Chris

- [Bands in Town](http://www.bandsintown.com/home)

### Jeanne

- [Zapp! The Lightning of Empowerment: How to Improve Quality, Productivity, and Employee Satisfaction](http://www.amazon.com/Zapp-Lightning-Empowerment-Productivity-Satisfaction/dp/0449002829/ref=sr_1_4?s=books&ie=UTF8&qid=1402635370&sr=1-4&keywords=zap%21)
- *[The Night Circus](http://www.amazon.com/Night-Circus-Erin-Morgenstern/dp/0307744434/ref=sr_1_1?s=books&ie=UTF8&qid=1402635426&sr=1-1&keywords=knight+circus)*

### Trevor

- [OxDBE](http://www.jetbrains.com/dbe/) Jetbrains tools
- Chrome dev tools - change css media state

### Matt

- Pragmatic Programming book [*tmux: Productive Mouse-Free Development*](http://pragprog.com/book/bhtmux/tmux)
- [Burnout.io](http://Burnout.io)
