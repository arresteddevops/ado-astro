---
title: CI, CD, Oh My! with Jez Humble
description: Bridget chats with Jez Humble (DORA) about continuous everything.
date: 2017-08-23T22:55:48.000Z
publishDate: 2017-08-23T22:55:48.000Z
episodeNumber: "92"
podcastFile: arrested-devops-podcast-episode092.mp3
episodeImage: episode/img/ci-cd.png
episodeBanner: /episode/img/ci-cd-banner.png
images:
  - /img/social/fb/ci-cd.png
guests:
  - person: jhumble
    snapshot: jhumble2
hosts:
  - bkromhout
sponsors:
  - thoughtworks
  - victorops
  - 10thmagnitude
aliases:
  - /92
  - /cicd
youtube: qKQ7pqQwRmM
explicit: yes
transcript: ci-cd
---

Bridget talks with Jez Humble, who was last on the show in episode 15, about three years earlier, on continuous delivery. Since then Jez spent a year at 18F, a team inside the US federal government, working on infrastructure and on cloud.gov, a platform as a service built with Amazon and open source Pivotal Cloud Foundry to show agencies that continuous practices work in government. Now Jez works at DORA, DevOps Research and Assessment, with Nicole Forsgren, Sue Choi and Gene Kim, the team that produced the State of DevOps report with Puppet Labs. The cold open is a story about a Zen temple that returns at the end of the episode.

## What DORA Measures

DORA's assessment surveys an organization's people against 20 capabilities the research has linked to IT performance, from culture to practices like automated deployment and managing work in process. It compares the organization to the industry, and with a group of 50 or more people it can say which investments give the most return. Bridget raises the customer who wants a RACI chart for who should do each thing. Jez's answer is that an organization should have a few strategic priorities and each team should work out how to collaborate, agreeing on a measurable goal for the next month. There's no way of knowing in advance who will have to change, "but, you know, my money is on everyone." Jez says DORA is "all about data," including measurable culture, and that picking a fight with Nicole over stats is a losing one.

## What the Continuous Things Are

Jez defines continuous integration as building and testing every change, working off a shared trunk and not long-lived feature branches, with a quick, comprehensive automated test suite, so that the default state of the system is a working one. Jez tests people with three questions: does everyone check into a shared trunk at least once a day, do tests run on every check-in, and when the build breaks, is it typically fixed within 10 minutes? Most people can't answer yes to all three. Running Jenkins against feature branches and ignoring it when it turns red isn't continuous integration: "It's a practice and mindset, not a tool." Bridget notes the CI/CD theater, and Jez says DORA uses yes/no and agree/disagree questions, and that "asking the questions is, in many ways, the hard part," and "People love redefining terms so they can say they're already doing it."

Continuous deployment means a passing build goes to production automatically, with high performers deploying hundreds or thousands of times a day. Continuous delivery is behaving as if you'd do that without deploying every build, which suits firmware or mobile apps, and still improves quality, cost, time to market and feedback loops. Bridget plays devil's advocate with Schrödinger's deployment, where a build could go out but a schema migration wasn't accounted for. Jez says to "do continuous deployment wherever you can," and that Jez wouldn't build non-web software unless forced to, noting people at Facebook who deploy mobile apps every couple of weeks aren't happy about it. Jez points to a recent Charity Majors blog post about testing in production, and agrees that production needs good monitoring, logging and tracing, and cheap, low-risk deploys through blue-green deployments, canaries, feature flags and circuit breakers. Jez says to accept that "failure is inevitable," and recalls that John Allspaw's focus on mean time to restore over mean time between failures was an aha moment. Bridget adds Andrew Clay Shafer's state of continuous partial failure.

## Organizations That Keep Improving

Asked about the common thread among organizations on the path, Jez's answer is that "The best organizations are always trying to get better," and are never satisfied. Even Amazon and Facebook invested huge effort, and Jez notes Amazon was a monolith that spent four years re-architecting after making it a priority at all levels, consistently and with money. Jez adds that Amazon has miserable, dysfunctional pockets too, and Bridget asks whether that means software is made of humans.

## The Agile 2017 Keynote

Bridget asks for the Cliff Notes of the end of Jez's Agile 2017 keynote. Jez explains that an ex-Google employee, James Damore, had written a 10-page document about Google and the causes of low representation of women and people of color in the industry, and that Jez was angry we're still having the discussion in 2017, like being angry about talking about continuous integration after 15 years. Jez holds up Douglas McGregor's The Human Side of Enterprise, from 1960, on motivating teams. Jez says there are biological differences, but real outcomes come from a complex interaction of genetics, epigenetics and environment, and "you can't go from those biological differences straight to differences in ability." Jez recalls telling the audience that math and science can't explain the lack of diversity, but sharing a work environment with people like Damore can, and some people walked out. Jez argues that unequal access to highly paid, high-status tech jobs is inequitable, produces worse products and affects the economy, and that people who care about the minutiae of tech but not how teams are composed will do worse, since these are systemic problems and the system is what dominates.

## Bureaucracy, InfoSec and Lunch

Bridget asks about siloes. Jez says it's highly variable and depends on who leads each team. A high point of Jez's career was the federal government, where Jez met mission-driven, brilliant, hardworking people, including in InfoSec, and learned from Mark Schwartz's talk that bureaucracy can be helpful because it encodes what people think is the right way to do things. Jez's "number one DevOps hack" is to find the person everyone slags off, often InfoSec in the dev world, take them to lunch, and spend an hour actively listening to what's in their way. Bridget asks for a British-to-American translation of "slag off," and Jez says it means trash-talking someone.

Bridget asks what individual contributors can do. Jez says it's making friends and understanding different perspectives, as in learning why a rule exists from the person who had the problem. Jez argues that "Most of the problems we face are due to a lack of empathy," pushing back on the idea that the obstacle is a failure to systemize. DORA measures collaboration between Dev and Ops, asking whether the outcome is win-win, and measures culture with the Westrum model, a construct from sociologist Ron Westrum, which John Allspaw also pointed Jez to, studying safety outcomes in healthcare and aviation along six axes. Jez says information flow is critical for resilient organizations, and "You can build the best systems in the world and use the best tools in the world, but if your cultural organizational structure is wrong, it just won't work."

## Cargo Culting and the Andon Cord

Jez says large agile frameworks get adopted without changing procurement, contracting, leadership or organizational structure, and then "you're just shuffling around the chairs on the Titanic." The point of practices is to change the organization's behavior, and Jez objects to cargo culting. Jez says knowing where you are and where you're going in measurable terms comes first, and when people copied Toyota, "You're copying the practices, you're not copying the mindset and the culture of continuous improvement." Bridget gives the example of an andon cord in a place where pulling it gets you fired. Jez points to the NUMMI story on This American Life, where other GM factories copied the cord, but managers were rewarded by how many cars came off the line whether or not they worked, so pulling it got you fired.

## Where Change Needs Buy-In

Jez cites John Kotter's Leading Change, whose first step is that most employees, about 75% of management and virtually all top executives need to believe that considerable change is essential. That shows up as ruthless prioritization, and it's "much easier to change an organization where there's a burning platform than it is to change an organization where everyone thinks that everything's just fine." Some leaders won't state priorities in measurable terms because it takes away the ability to change their minds. Jez says individuals can still effect change, though the impact will be limited and making it stick is the hard part, and organizations have backslid after people left. The original Continuous Delivery book came from a team of eight and colleagues working on miserable projects with Bash and CVS, transforming how an application was deployed, which shows "you can achieve great things with small teams." Jez adds "There is no linear path from A to B."

Jez closes with the Zen temple story from the opening, told by the teacher at an introduction to meditation: sometimes you come to the temple feeling down, sometimes feeling great, "But don't worry, because that feeling will pass too." Jez thinks that sums up DevOps and the human condition. Jez also encourages listeners to speak at conferences, since you're probably doing things other people would be excited to hear about.

Bridget chats with Jez Humble (DORA) about continuous... everything!


* [Continuous Delivery - ADO Ep 15](https://www.arresteddevops.com/continuous-delivery/) - Jez's previous ADO episode
* [DORA](https://devops-research.com/) - DevOps Research and Assessment
* [Westrum model of organizational culture](https://continuousdelivery.com/implementing/culture/)
* [The course website for Info 290M Lean/Agile Product Management, a three unit graduate class taught by Jez Humble at the UC Berkeley School of Information](https://leanagile.pm/)
* [Jobs at 18F](https://18f.gsa.gov/join/) - director job opening soon!

## Check outs

### Jez

- [Manjula's Kitchen](http://www.manjulaskitchen.com/)
- [Plutopia - Nuclear families, Atomic Cities and the Great Soviet and American Plutonium Disasters](http://www.plutopia.net/)

### Bridget
- Favorite food blog: [Smitten Kitchen](https://smittenkitchen.com/)
- New-to-me food blog: [Mountain Mama Cooks](http://www.mountainmamacooks.com/)
- [Great Electric American Roadtrip](https://twitter.com/search?f=tweets&vertical=default&q=%23gear2017&src=typd)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences
Use code "ADO2017" for 20% off at [Velocity New York](https://conferences.oreilly.com/velocity/vl-ny) Oct 1-4.

Bridget will be at [Uptime](https://uptime.events/) in Pittsburgh this week.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)

Use code "ADO2017" for a discount on many devopsdays.
