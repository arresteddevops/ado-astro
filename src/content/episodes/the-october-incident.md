---
title: The October Incident with Ali Diamond
description: "Ali Diamond, a backend engineer who covers cybersecurity news on the side, and Matty look back at the October 21st PHP vulnerability and why it felt different from every other bad security week. They get into AI agents with too much access, the things you don't know you don't know, and getting budget while everyone is scared."
date: 2026-12-23T06:00:00.000Z
publishDate: 2026-12-23T06:00:00.000Z
episodeNumber: "214"
podcastFile: arrested-devops-podcast-episode214.mp3
podcastDuration: "00:37:17"
podcastBytes: 17899301
episodeImage: episode-img/the-october-incident.jpg
episodeBanner: episode-img/the-october-incident-banner.jpg
images: []
guests:
  - person: adiamond
    snapshot: adiamond
hosts:
  - mstratton
sponsors: []
aliases:
  - /214
  - /theoctoberincident
youtube: 2r1H3kAp7OE
transcript: the-october-incident
explicit: "yes"
---
## A Cybersecurity Critic

Ali is a backend software engineer by day and a content creator and cybersecurity news host by night, and lately has been calling herself a cybersecurity critic. The reasoning is movie critics: they know movies deeply and have a keen eye, but put one behind a camera and they couldn't make the thing. Ali has that knowledge of the industry and its operations, but "if you put me in front of Burp Suite," that isn't the forte.

## The Day the World Became Cyber Aware

Matty and Ali recorded this on November 4th, 2026, two weeks after October 21st, which Ali calls "the day the world became cyber aware." Matty remembers Heartbleed and SQL Slammer and jokes that this was the fifth time we became cyber aware, but says this one felt different, and not because it was PHP. He points to the landscape, with robots that can write all the code for us. Ali says that is not the cause. It comes from the summer, when OpenAI's hacks, Anthropic starting to publish its own, and OpenAI admitting its agents were running rogue "hit major news cycles." OpenAI, Ali adds, "kind of used cybersecurity as a marketing tactic," which is good for awareness. October is also Cybersecurity Awareness Month, so maybe they finally achieved a real one.

Ali does not want to call it unprecedented. WannaCry almost touched every piece of technology in the world, and defenders were still handling other incidents that same week. PHP is a large share of the internet, Wikipedia runs on it, and a public dashboard shows how many exposed PHP endpoints are actively vulnerable, so the scale was real. But what spooked people was a general population that was suddenly watching, plus the realization that agents make everything go faster. "This kind of week is not unusual" for someone who does this for a living. Ali saw someone post "Oh no, not again" about another batch of Node.js vulnerabilities, and wanted to say these happen all the time and you will get used to it. The usual fix is to "just slam patch next, move on." Ali also brings up the AWS outage from a year earlier, the longest ever, caused by a bad config pushed to US East One that broke network load balancer health checks and then a DynamoDB DNS error, and which nobody remembers.

## Consumers, Practitioners, and Agents With the Keys

Ali splits security into two fields. Consumers hear "don't download weird things, don't click weird links." Practitioners have ten AWS servers configured ten different ways, an EC2 instance left open, an old PHP version on another provider's box, traffic trying to take the service offline, and a junior engineer who just clicked a phishing link. People are becoming aware of the consumer kind, Ali says, while letting their agents have too much power. "Tee hee, hey agent, access my Gmail." Matty adds "sure, why not give Meta access to my bank account." Ali: "Have we learned nothing?"

## Two Websites, One of Which Is a Database

Matty reads a text thread from his 16-year-old, who was building a Christmas wish list site with ChatGPT and wanted Google sign-in. When Matty suggested a simple password setup, one for viewers and one for editing, the reply was that it would take two separate websites, one to host the site and one to store the passwords and data. He meant a database. Matty adds that if you know to ask for pre-signed keys and a sensible architecture, coding agents can build fairly robust things. If you just ask for a thing to download, you may end up with an unprotected S3 bucket whose direct URL is sitting in the page source, behind a password that only looks like security. Ali says it reminds her of her dad asking about Kubernetes years ago, and calls the problem a "conundrum": you don't know what you don't know, so how do you find out what you need to learn?

Matty describes an internal tool of his own that is "the most operationally sound" thing he has built because it carries decades of sysadmin scar tissue, with the CI/CD tests to match. The other end of the spectrum is a personal iPhone app that lives in TestFlight with a market of one. Would he feel comfortable going fully AI-driven on something other people would use, holding their data? No. There the robot is more of a helper.

## Trained on Bad Code

Ali has a controversial take: agents won't be the best engineers for a while, because the models were trained on bad code. Every well-hardened, production-worthy code base is behind closed doors, so what is public is, in Ali's estimate, perhaps 1% well-formed, securely written code against the "300 million GitHub repos" of "just slop." Matty agrees that your hardened enterprise app is not on GitHub, and Ali wonders whether agents deploying things are following least privilege either.

Matty's counter is that what makes AI-created software work is everything we should have been doing all along: guardrails, tests, and, the irony, great documentation because the agents read it. His own controversial take is that the best AI-assisted coders will be security people, SREs and sysadmins, who spent careers "guarding against dangerous developers." He says the blog post is called How My Coworker Who Didn't Know What CD Meant Ships to Production, about a design lead who ships safely because guardrails say "you can't do this." Ali's contribution: "DevRel is for documentation engineers."

## Blameless Postmortems and Guardrails

Matty brings up blameless postmortems: the question is not what Ali did but what in the system let it happen. Ali's response is that "we can't be having blameless postmortems" and that it's time to point fingers at engineers who misuse agents. Matty is open to it, floats having John Allspaw back to ask how this works in the age of AI, and then restates the core idea. If someone could drop the whole production table, "the problem isn't that you did that, the problem is that you were able to." The goal is to make the right way the only way. Back at Chef, doing work with InSpec, his line was "if you care enough about something, you care enough to write the test," so the security person hands over the rules in a form that can go into a pipeline or a hook, and bad changes get stopped by what they defined.

The same goes for shift left, which Matty says doesn't mean moving the work to the people on the left. "It means you move the considerations into the left in the process." If you want builders thinking about security, you give them the tools, guidance and systems to do it, not one more thing to worry about, "good luck, have fun." Ali agrees that developers are often not the ones setting this stuff up.

## Supply Chains and a Lost Train of Thought

Ali says that years ago, before everything that happened a year ago, the prediction was that software supply chain attacks were going to be a huge problem and developers needed educating. Now agents download whatever packages they want onto laptops full of sensitive information, and a hit of npm install starts running. If a model is poisoned to pick a bad package and you accept it, "what are you gonna do?" There is, Ali says, no smart way to double-check how secure the package an agent wants to install is. Matty calls it the next evolution of running npm install and not knowing what it did, a level higher than copying from Stack Overflow. Ali loses the thread of the next point partway through, and Matty offers that this is a new attack, the lose-your-train-of-thought attack. The conversation then drifts into reading glasses, a phone-sized Kindle and why you never buy the first generation of a folding iPhone.

## Make Hay While the Sun Is Shining

Ali returns to October 21st. There were CVSS 10.0 vulnerabilities, leaks of upcoming major CVEs before they were published, and data breaches at the same time, and none of this is new for a practitioner. What Ali would tell a security practitioner: ask management for more money, because management will finally care, and "security is only a place to lose money until it's too late."

Matty names the pattern: you do a pile of work and someone says you didn't need to, because nothing happened. He lived through Y2K, and says it came up in the Stella report too, where managers asked why a system was disabled when it turned out to be nothing, and the answer was that it was nothing because they fixed it. So if it has to be on fire, get something out of it. Ali's last word is to pay security teams more and give them budget and vacations. "Force them all to go on vacation. Buy the massages." They burn out a lot.

Ali is @endingwithali on everything, Minecraft included, and the weekly cybersecurity news show is on YouTube. Ali is aiming for 100K on Instagram.

## Links to Resources Mentioned

- [How My Coworker Who Didn't Know What CD Meant Ships to Production](https://dev.to/mattstratton/how-my-coworker-who-didnt-know-cd-shipped-to-production-3j6j), Matty's post about guardrails for non-engineers shipping with agents
- [Ali's site](https://ali.dev)
