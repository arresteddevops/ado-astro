---
title: When the Levee Breaks with Jeff Smith and Mark Imbriaco
description: Bridget and Matt chat with Jeff Smith (Centro) and Mark Imbriaco (Pivotal).
date: 2017-06-04T00:59:40.000Z
publishDate: 2017-06-04T00:59:40.000Z
episodeNumber: "86"
podcastFile: arrested-devops-podcast-episode086.mp3
episodeImage: episode/img/disaster-communication.png
episodeBanner: /episode/img/disaster-communication-banner.png
images:
  - /img/social/fb/disaster-communication.png
guests:
  - person: jsmith
    snapshot: jsmith2
  - person: mimbriaco
    snapshot: mimbriaco
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /86
  - /disastercommunication
youtube: dorCcK8dklQ
explicit: yes
transcript: disaster-communication
---

Bridget and Matty record at GOTO Chicago about communicating in the middle of an incident, with Jeff Smith, a production operations manager at Centro who previously helped build out the SRE team at Grubhub, and Mark Imbriaco, who has spent about 20 years in ops at GitHub, Heroku and DigitalOcean and joined Pivotal "as of yesterday." Jeff gave a talk in Bridget's DevOps track that walked through a live postmortem of a real incident at one of Jeff's unnamed employers, in a complex microservices architecture. Bridget says Mark, a brand new coworker, got dragged to Chicago because of the postmortems Mark has written for places everyone has used. The cold open is Jeff's line, "Don't worry, it's fine. You're fired."

## Context Is Not State

Jeff's big lesson was about context. Alerting on everything can be information overload, so you have to frame the information to tell a story, because you don't want to assemble breadcrumbs mid-outage. The other trap is silencing all the annoying alerts at once, since the landscape of the incident can change, and "you end up fighting the wrong fire." Bridget notes that Bryan Cantrill's keynote made a similar point about alerts that depend on the very systems that are down. Jeff's example is a billing error that got an Azure account shut down, where the only alert was that the website couldn't be reached.

Mark says the context problem gets serious in long outages. The Heroku outage ran 67 hours for the last piece to come back, and most companies never think about what happens past 12 hours, when everybody goes into superhero mode. At Heroku they staffed shifts so that two people always worked the incident, offset by 50%, so that with an eight-hour shift, someone new arrived four hours in and could build up context while the previous person was still there. Jeff says a single person carrying an incident start to finish is probably storing all the context, which is dangerous for the organization and the individual.

Bridget asks why an oral handoff matters when documentation exists, and Mark separates "context versus state." State is what's up or down on the monitoring page, but the story that led there comes only from the person who lived it, who was too busy to write anything but notes, "marks on trees as they went through the forest solving the problem." Jeff adds that notes record facts, while context is also the theory being chased, and a test script left running overnight means nothing to whoever reads it. Mark adds "you don't write down the negative results," so the next person may walk the same trail.

## Managing Up During an Incident

Matty asks about individual contributors on a bridge with someone seven layers up asking what's going on. Jeff describes Grubhub's common bridge with business and technical people, where business people need to message customers about orders and keep asking how long the fix will take, and "you have to give a number." Matty's answer is the Scotty principle, and Jeff's number is 10, with no units.

Jeff's fix is to separate the troubleshooter from the communicator. A troubleshooter gives periodic updates to one person, who becomes the parrot of that message, instead of repeating it each time someone joins the call. The other tool is a running Google Doc, which Jeff thinks was borrowed from the Google SRE handbook. People thought it was crazy at first, then the chat room link to the doc answered the status questions. Mark says the same idea shows up as an incident command role at Heroku and GitHub: the commander captures context and remembers that Jeff is looking at the thing. And "plot twist, that person shouldn't be the one who's communicating externally to your customers either," because choosing how to word a message about bringing a database back up, without saying "recovering" and making people think of backups, takes its own effort. Jeff adds that writing a 15-minute update takes 10 minutes, and that "jumping in to help isn't always helpful" if you haven't checked in with the incident commander, since you could undercut a debugging theory.

Matty asks what a sysadmin can do in an organization that has no incident commander, and suggests offering a struggling peer to act as a firewall for communication, then taking the result to management. Bridget suggests a shared doc built from the chat logs, which Bridget says aren't publishable because of the rabbit holes, and building it during the incident might prompt someone to ask whether they missed something with the database. Jeff points out that the first person to grab an incident is already the communicator, scribe and incident commander, so offering to help means asking "what do you need?"

Mark's advice for the person being harassed for status is to say "I don't know. I'll tell you something new in 20 minutes," and to give that update even if nothing has changed. Mark compares it to calling the cable company, where the cadence matters more than the answer. Matty calls acknowledgment huge for reassurance, and Mark adds "Not knowing is worse than getting bad news."

## When an Outage Becomes a Disaster

Jeff asks how you mark the point where you concede you have a disaster rather than an outage, since a 20-minute update promises progress and a disaster declaration lets customers stop checking back every 15 minutes. Mark says "I don't know, but I know it when I see it," and describes stretching the cadence: if nothing new is expected in 20 minutes, say you'll update in an hour, or two, and promise to tell them sooner if you can.

Mark describes the Heroku case. In 2011 EBS went dark in US East, with a cascading control plane failure across multiple availability zones, and for the first part you couldn't launch apps or restart idled dynos, which took about eight hours to resolve. The long tail was the 200,000 Postgres databases, where some EBS volumes took up to 67 hours to come back or for AWS to give up. Jeff says that with consumer apps you can time a visitor's lifecycle and declare a disaster once the pizza order isn't coming. Bridget says sometimes you know immediately, and describes the 3:00 AM call from an on-call developer saying the HBase cluster was gone and Amazon said it was terminated. Bridget remembers knowing right away that the startup might be done, and it took days to resolve with broken backups, though the company did not go out of business and was later acquired. Jeff's takeaway is "the cloud is just someone else's computer," which doesn't absolve you of recovering from an Amazon failure. Bridget points listeners to the Who Owns Your Availability episode and tells them that if they haven't checked their backups, "you have Schrödinger's backups."

## A Plan Before You Need One

Mark says that joining a company, one of the first things to look at is how it communicates during problems, because it's all about managing expectations. The plan covers frequency of updates, tone for the audience, like Heroku's technical readers versus Basecamp's small businesses, and canned responses. It should be prescriptive enough that nobody makes value judgments mid-incident, usually less than a page, and "you should be completely transparent," since misleading people and later finding you undersold the problem is the worst outcome.

Jeff says the way to test an incident process is to simulate incidents. Jeff has been thinking about a talk on pulling the environment's incident creation into the system, like Chaos Monkey for incident management. They ran Failure Fridays and War Room Wednesdays, and Jeff's example prompt is "I just socked Cassandra in the face." Jeff adds that it's best if someone outside the exercise says what's dying, and that with a War Room Wednesday coming you can pre-generate your templates. Bridget warns listeners to clear it with people before taking production down for fun. Matty says to start on paper: "Make your database cluster a sticky note on the board" and pull it off, as good a test as breaking the database. Jeff describes a tool called NetImpair that adds jitter, injects latency or cuts off a node's communications, which simulates failure from that node's perspective. Matty tells a story of turning off the wrong server at Allstate years earlier, with no way to decode the naming scheme, and waiting in the cafeteria to see if anyone came running.

## Please Don't Be Me

Bridget says the reaction inside a company can't be "am I fired?" Jeff describes the week's AWS cost-savings cleanup, in which everyone agreed to delete 67 terabytes of logs on EBS volumes and shut down instances, which broke things. The engineer who ran it was paranoid about being walked out, and Jeff says you can't assume people know they're in the clear, so you have to reinforce it, before repeating the cold-open joke, "Don't worry, it's fine, you're fired." Matty adds that it has to actually be true first.

Matty says even when blamelessness is true, nobody believes it until they break something and don't get fired. Matty also says punishing mistakes doesn't reduce them: "It makes them become subject matter experts in hiding mistakes." Matty recalls John Cowie of Etsy on an earlier show asking "how amazing is it when the only thing that happens when you make a mistake is you learn something new?" and cites Etsy's three-armed sweater. Mark says you'll always have the first reaction of "oh my God, what did I just do," but the healthier one is "Please let that be me," because then you know the problem. Jeff says senior people can give air cover by publicly owning mistakes, and Mark notes that a GitHub co-founder wrote a public post about deleting the production database, thinking it was a test database.

Bridget says that even at a place that understood all this, the morning after the HBase loss came with the sinking feeling of being probably fired, and Mark says the healthy fear is whether you let customers down, not whether you will lose your job. Matty adds that someone who doesn't care about mistakes isn't someone to run the systems.

Jeff says a related burden is being on the hook for not knowing something about a system with 5 million lines of code, and Matty's example is the CTO who asks why you weren't monitoring for that. Jeff says "You're always fighting yesterday's war." Mark points to research by Richard Cook and David Woods: "The way that complex systems fail is fundamentally unknowable," so "Give yourself a pass to be human." Bridget says Tim Gross once sent an email quoting Etsy's principles of blamelessness after an outage when Tim was a director of operations at Drama Fever.

## Dialects and Postmortems

Jeff describes a people-heavy practice: one scribe passes updates to key contacts across the organization, who translate them into their audience's dialect, so developers get a developer version and business gets a business version, and marketing gets what it will publish.

Asked for a final word, Mark gives a formula for public postmortems: apologize and mean it, demonstrate a thorough understanding of what happened, and describe what you're going to do, saying "we think it'll reduce the likelihood of this kind of thing happening again" instead of promising it never will. Mark says that can rebuild confidence to a higher level than before the outage. Jeff says to bring the people you communicate with into the process and ask what they needed that they didn't get, and that there are three axes for action items: reduce severity, reduce likelihood, and get better at detection.

Bridget and Matt chat with Jeff Smith (Centro) and Mark Imbriaco (Pivotal).

* [Who Owns Your Availability?](https://www.arresteddevops.com/availability/)
* [Wide Columns, Shaggy Yaks: HBase on EMR](http://sysadvent.blogspot.com/2013/12/day-18-wide-columns-shaggy-yaks-hbase.html)

### Jeff
* [Troubleshooting Tiered Tragedy: A Peek Into Failure](https://gotochgo.com/2017/sessions/44)
* [DevOps in the Windy City](https://www.arresteddevops.com/windycity)

### Mark
* [Disasters!](https://www.arresteddevops.com/disasters/)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

- [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) - discount code "ADO2017" gives 20% off for Gold, Silver, and Bronze passes.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
