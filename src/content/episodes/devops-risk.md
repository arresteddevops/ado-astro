---
title: Risky Business with Nicole Johnson, Matt Curry, and Anthony Lee
description: Bridget and Matt chat with Nicole Johnson (Chef), Matt Curry (Allstate), and Anthony Lee (Allstate).
date: 2017-06-19T00:59:40.000Z
publishDate: 2017-06-19T00:59:40.000Z
episodeNumber: "88"
podcastFile: arrested-devops-podcast-episode088.mp3
episodeImage: episode/img/devops-risk.png
episodeBanner: /episode/img/devops-risk-banner.png
images:
  - /img/social/fb/devops-risk.png
guests:
  - person: njohnson
    snapshot: njohnson
  - person: mcurry
    snapshot: mcurry2
  - person: alee
    snapshot: alee
hosts:
  - bkromhout
  - mstratton
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /88
  - /devopsrisk
youtube: jgXB4b-B_ic
explicit: yes
transcript: devops-risk
---

Bridget and Matty record at GOTO Chicago about risk, security and compliance in a DevOps pipeline. Nicole Johnson, who gave a talk on incorporating compliance and security testing into the release process, works with Matty at Chef, and Matty realizes Matty's own "shifting left securely" talk says nearly the same things. The other guests are Matt Curry, a director of cloud engineering at Allstate who leads the organization taking Allstate into the cloud and building its platform as a service, and Anthony Lee, who says Anthony is patient zero for the digital transformation initiative known as Compose, now 2.5 years in. The cold open is Matty's line: "people lie. Computers don't lie."

## Bringing Audit Along

Bridget asks how an insurance company's customers and regulators shape this. Matt says the compliance and security teams were the tough part of the continuous integration journey, because "explain your job in an algorithm" puts people on the defensive, as if they're being replaced by a robot or a shell script. Anthony adds that insurance means state-by-state regulation plus PCI and SOX. The team reached out to its internal audit organization early and asked them to look at the work, and the greatest outcome was that the lead auditor eventually worked for Matt as a product manager. Anthony relays that auditors saw every production deploy trace back to a GitHub commit, and the reaction was, "I've never walked out of an audit with a smile on my face."

Matty says every company has compliance with a lowercase c, meaning the standards important to the organization, and everybody thinks they're special. The "dirty little secret" is that one of the biggest ways Chef gets into companies is through audit and compliance, "because people lie. Computers don't lie." Nicole says compliance teams get scared when you go fast without them and hand over a spreadsheet or PDF, but once they're part of the process, they see the value and can collect data programmatically. Matty adds that nobody is automated out of a job, since the risk officer's big brain still decides what's important and the task is describing it consistently. Matt says engaging audit early made communication bidirectional, educated them on what new tools could do, and let the team understand their incentives, which turn out not to be checking the box. That was a chance to "build a bridge rather than kind of pile another brick on the wall," and Bridget notes that bricks into a bridge instead of a wall sounds suspiciously like DevOps.

## Audit Theater and the Compliance Sine Wave

Matty draws a sine wave of compliance: a company does its regular business and drifts down, then scrambles before the quarterly audit, the auditors show up and leave, and it drifts down again. Bridget asks whether it's really more of a cliff. Matty says that when compliance is part of the process, you're continuously compliant, and a compliance officer knows an auditor could walk in at any time. Anthony describes the typical response as adding process on top of process: one audit finds a missing document, so a process is added to check for the document, and the next audit finds that the checking process failed. "That's what the system solves for you."

## Shifting Left, Hardening Sprints, and Democratized Compliance

Matty describes a project that ends with a hardening sprint for security testing, which fails because nobody has looked all along, leaving a choice between delaying or getting an exception. Matty's point is that "the bad guys on the internet don't care that you have a note from your mom that says it's okay you didn't patch Heartbleed." Nobody would accept saving QA for the last sprint, and the closer to a defect's introduction you find it, the cheaper it is to fix. Bridget adds what happens if you find out six weeks later, after eight dependencies rely on the hole. Matty says you have to "democratize your compliance."

Bridget recalls a line from Nicole's talk that Bridget tweeted: a raise of hands for whose job security and compliance are, with the point that all hands should be up. Nicole says it's not a joke. Anyone who touches a system is responsible for compliance, and before you even get to testing, the systems should be hardened, or you reach production with a gold-standard image and find the hardened images break the app. Nicole says you can't make everything compliant right away, so start with the lowest barrier to entry.

## Make the Right Thing the Easy Thing

Anthony tells of a security team's preferred scanning tool, which Anthony won't name beyond a company that starts with an I and ends with an M, that the devs tried to get into their pipelines and could not. Once security acknowledged it wouldn't work for agile and went with another tool, about 60 dev teams switched in around two weeks, and every commit now goes through the scan. Bridget cites Andrew Clay Shafer's "make the right thing the easy thing," and Matty recalls the example from the book Switch of a machine redesigned so both hands had to be away from the blade.

Bridget asks what leadership does when it needs to impose a choice. Matt says "if you have a problem that every developer needs to solve, that should become a platform concern," and imagines a world where you don't opt out of certain parts of the CI pipeline. Artisanship is fine inside constraints, and Matt explains the thinking in systems terms: "committees are not scalable," since teams that haven't moved this way can't get a meeting for months. Matty adds that the list of things needing human intervention is shorter than people think. Writing the standard needs a human brain, while checking a system against it does not, and Matty quotes the Continuous Delivery book saying that asking a highly skilled person to do a boring, monotonous task "introduces more errors than inebriation or sleep deprivation." Nicole adds that the standards still need the right humans, those who interact with the systems, to supply context to committees, since you'll never slap a CIS benchmark document on and be 100% done.

## One Pipeline Shape

Matty says Allstate's decision that there's one way of doing CI and CD means not 60 different teams, and a feature team's core competency isn't building a pipeline. Bridget calls that resume-driven development, and Matty offers "excitement-driven development." Matt says consistency matters for compliance because it makes deployments auditable, predictable and boring. Matty explains the shape stays the same even when Maven differs from another build, so you can look in one Jenkins log no matter the project. Bridget asks Anthony how to motivate people away from what's on the front page of Hacker News, and Anthony says it's a never-ending fight between good and evil, kept grounded by user focus. A team shipped from start to production without talking to the platform team once, which makes it worth it, and constraining the outcome leaves flexibility over tooling.

## Culture, Tools, and Vendors

Nicole asks how hard it was to change the culture. Matt credits open-minded partners in security and compliance, and says the process is often based on tools already bought, so it becomes a financial conversation, with a sales rep having promised the tool would solve world hunger. Matty adds that organizations tend to throw good money after bad because a decision was made. Bridget notes vendors outnumber customers on the panel. Anthony says that when choosing between Cloud Foundry and OpenShift, the team minimized vendor interaction to judge how well they could run the software on their own, though some vendors won't give access to a download site until a big check is signed. Anthony doesn't advocate cutting vendors off, and credits a great partnership with one.

Matty says a good vendor partner wants to understand what you're trying to do, not force it a particular way, and Nicole, who is on the presales side, says it means asking the hard questions, such as why do it like that, and serving as a go-between for teams. Matty tells of Bridget referring a contact, who was having compliance problems, to Nicole about Inspect, which surprised the contact because Bridget works at Pivotal and Inspect is seen as a competitor's product. Bridget says the best thing for that customer is often Cloud Foundry, and Cloud Foundry is not Inspect. Matt adds a test for vendors: ask whether they say "yes, totally, I've done this before," or go find the one person in a 10,000-person company who may have kludged it once.

## Closing Advice

Anthony says to apply the DevOps habit of small, frequent changes to organizations and people: "Small things, small incremental things." Matt says partnership, trust and credibility are the foundation, and that you may have to invest upfront in establishing them. Nicole says everyone is working toward the same goal, even with different paths to getting compliant or secure. Matty says if competitors can hug at a DevOps conference and "give each other hug ops," teams inside one company can too.

Bridget and Matt chat with Nicole Johnson (Chef), Matt Curry (Allstate), and Anthony Lee (Allstate).

* Nicole's GOTO Chicago talk: [Automating Security & Compliance (for Fun & Profit)](https://gotochgo.com/2017/sessions/89)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

- [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) - discount code "ADO2017" gives 20% off for Gold, Silver, and Bronze passes.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
