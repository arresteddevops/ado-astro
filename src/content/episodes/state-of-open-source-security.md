---
title: State of Open Source Security with Alyssa Miller
description: Alyssa Miller (Snyk) discusses the findings of the Synk State of Open Source Security report with Matt and Jessica
date: 2020-10-12T15:59:58.000Z
publishDate: 2020-10-12T15:59:58.000Z
episodeNumber: "160"
podcastFile: arrested-devops-podcast-episode160.mp3
podcastDuration: 55:42
episodeImage: episode/img/state-of-open-source-security.png
episodeBanner: /episode/img/state-of-open-source-security-banner.png
images:
  - /img/social/fb/state-of-open-source-security.png
guests:
  - person: amiller
    snapshot: amiller
hosts:
  - mstratton
  - jkerr
sponsors:
  - sdt
aliases:
  - /160
  - /stateofopensourcesecurity
explicit: no
transcript: state-of-open-source-security
---

Matty and Jessica Kerr talk with Alyssa Miller, an application security advocate at Snyk, about findings from Snyk's annual State of Open Source Security report. Alyssa has been in security for 15 years, started as a hacker at 12, and is a self-described recovering developer who spent most of a decade in financial services. The report combines open source data from GitHub, GitLab and Bitbucket, aggregated data from Snyk's own product, and a yearly survey of practitioners, developers and ops people. The cold open is Alyssa's line: "No, no, no. Gates break DevOps, period. You can't do it."

## Dependencies Behind Dependencies

Alyssa says the number of packages keeps growing, with npm's count nearly doubling every year, and that most vulnerabilities come from indirect dependencies, not the ones you chose, especially in Java and JavaScript. An example from the report is an 80-line JavaScript app with 7 dependencies that expands to 59 more and turns into 750,000 lines. Matty asks whether to fix this or accept it, and Alyssa says we need awareness and tools because it isn't going away: security has preached "don't roll your own encryption," and reuse was the panacea when Alyssa was a developer. Alyssa raises the software bill of materials, noting an FDA advisory about a popular open source package that medical device makers couldn't answer for, because they didn't know what was in their software, much like Heartbleed.

Jessica says that if you write it yourself you'll still have vulnerabilities, only nobody sends you mail about them. Matty cautions that open source might have been reviewed, not that it was, and Jessica says nobody looks at what Jessica publishes on npm. Alyssa says package health has no generally accepted measure, but popularity, age, active maintenance and accepted PRs give an idea, and popular packages get more scrutiny now and later. Academic researchers, such as a security lab at UC Santa Barbara, report vulnerabilities to Snyk after scanning thousands of projects for patterns.

## What Improved

Alyssa says the total number of new vulnerabilities grew more slowly than the year before, with fewer reported in 2019 than in 2018, which Alyssa calls a positive indication but "not ready to say, hey, we're getting better at security." On who's responsible for application security, about 85% said developers both years, but security rose from 23% to 50-55%, and operations went from barely registering to about the same, which Alyssa reads as awareness that DevSecOps needs all three. More organizations review their YAML and JSON and audit production clusters, though 31% said they didn't know or weren't doing anything, and 44% of respondents use Kubernetes.

## The Scatter Plot Surprise

New this year was a scatter plot of vulnerabilities reported versus projects impacted. Cross-site scripting had many reports but few projects affected, while prototype pollution and deserialization had few reports but wide impact, including a Lodash vulnerability in 2019. Nothing landed in the upper right quadrant, which Alyssa reads as a sign that big, popular projects have eliminated the common flaws, while newer attack vectors have the big impact.

## Official Images Aren't Safe by Default

Alyssa calls this the "stranger danger" story and says it was personal. A blog claimed official Docker Hub images have been scrutinized, but the report found the top 10 official images still had many vulnerabilities, with the Node image off the charts. Alyssa pulled the full Node image with 642 vulnerabilities, versus about 53 with the slim image, and compares it to the old server advice to minimize the operating system. Jessica says the full image is handy for development but production is a different animal, and Matty points out the temptation to go back to the image that works. Alyssa notes Docker has been adding scanning and higher-scrutiny image programs.

## SnykCon and Threat Modeling

SnykCon is a virtual conference on October 21-22 with vendor-agnostic talks, keynotes such as Wendy Nather, and a fundraiser for the Bill and Melinda Gates Foundation. Alyssa will do a workshop on threat modeling in DevSecOps.

Alyssa says threat modeling answers "what could possibly go wrong?" Traditionally it's a heavy process of data flow diagrams taking days, fine for waterfall but not sprints. Alyssa's approach adds a continuous-improvement CI: threat model each user story, where someone from the business can guess what attackers would want to steal, expose or deny, and that informs coding, test cases, automated tools and production monitoring. You won't make the system "unhackable," but you get incrementally better. Matty adds that monitoring is testing with a time dimension, and Jessica says talking to domain experts about what it shouldn't do gives a better understanding of what it should. Alyssa points to a Puppet survey finding that collaborative work like threat modeling builds more confidence in security posture than siloed pen tests and scanners, and says it helps prioritization: which vulnerabilities protect the crown jewels, and which are exploitable at all.

## Gates Break DevOps

Alyssa has attended no fewer than 30 talks on DevSecOps that put quality gates between stages. Security has to be integrated in each phase, since "If you push motion in the pipeline back to the left with the feedback from a gate, you just broke DevSecOps." Matty adds that people who can't get through a gate figure out how to go around it, and tells of expensive security tools with few licenses that act as gates themselves. Alyssa cites a study where 85% of organizations said they'd pushed known vulnerabilities to production and 54% of those said it was to meet a timeline. So you have to accept that software ships with vulnerabilities and shorten the feedback loop. Jessica adds that gating slows security releases, since "change is on our side."

Alyssa's favorite t-shirt says "Unhackable?" with "Here, hold my beer" beneath, linked from the show notes.

- Snyk's [State of Open Source Security report](https://info.snyk.io/sooss-report-2020)
- [SnykCon](https://snyk.io/snykcon/) is coming on Oct 21-22! Register now!
- Guess what you can threat model in devsecops! More about threat modeling in [Pushing Left With Tanya Janca](https://www.arresteddevops.com/pushing-left/)
- [Alyss's awesome t-shirts](https://teespring.com/stores/alyssa-in-security-3)
