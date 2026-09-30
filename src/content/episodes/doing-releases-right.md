---
title: Doing Releases Right with Scott Hain
description: Releasing software is more that just having a clever pipeline. Scott Hain (Hashicorp) digs into some of the practical considerations of improving your release engineering process.
date: 2021-01-05T16:47:29.000Z
publishDate: 2021-01-05T16:47:29.000Z
episodeNumber: "165"
podcastFile: arrested-devops-podcast-episode165.mp3
podcastDuration: 48:39
episodeImage: episode/img/doing-releases-right.jpg
episodeBanner: episode/img/doing-releases-right-banner.jpg
images:
  - img/social/fb/doing-releases-right.jpg
guests:
  - person: shain
    snapshot: shain
hosts:
  - mstratton
sponsors:
  - sdt
  - circleci
aliases:
  - /165
  - /doingreleasesright
explicit: yes
transcript: doing-releases-right
---

Matty talks with Scott Hain, a quality engineer at HashiCorp and a former release engineer, engineering services person, support person and engineer, about what goes into releasing software beyond a clever pipeline. The cold open is Scott imagining a customer's reaction to a flaky product: "They're like, oh, goddammit, fucking people. Why can't they make their shit work?"

## Delivery Versus Deployment

Scott uses CD for continuous delivery, meaning making an artifact from code, whether a single binary, a binary with installers and wrappers, or something behind a SaaS. Continuous deployment is what happens when you actually ship a service or upgrade it. Matty says continuous delivery means your software is releasable at any point and shipping is a business decision, and cites Ken Mugrage's point that a holiday code freeze only freezes deployment, not the work. Scott adds that the release cadence is a human decision, and the aim is the best artifact sitting ready at any time: "if it's not ready to go, it's not ready to go, but it should be able to go." Matty notes "ready" doesn't mean complete, it means ready to make the decision to release.

Scott says a release is also blog posts, announcements and other coordination that are mostly human-driven but can be automated.

## Versioning

Once code is merged, the CI system creates a versioned, signed artifact, and the same code should yield the same binary, with caveats for Apple and Microsoft signing. Matty says it's a point in time, so you cut a new one, and versioning strategies stop you from ending up with "artifact.final.back.back.back." Scott says a rolling staged artifact removes the need for betas and release candidates, because customers could run it in their integration environments.

On versioning schemes, Scott likes SemVer but says it doesn't always make sense, since customers ask about gaps, and another common option is a date timestamp. Matty jokes about putting a year in the major version, as with Office 2003, and notes the branded version differs from the artifact version. Matty says the wrong way is to be inconsistent, and complexity costs the people who must understand it. Scott disagrees slightly that the whole organization needs one scheme, as long as each project is consistent, because "consistency breeds automation." Scott also mentions meta-versioning for bundles of multiple artifacts.

## Workflows, Mandates and Tooling

Matty says that if you try to find one true workflow for every project, nobody will love it, since compromise is when nobody's happy. Scott says mandates don't work and "do whatever works for you" doesn't either. A cross-functional release engineering or quality team can recommend tooling and set the things teams must follow, with exceptions allowed if explained, like SOX. Scott's key point is that engineering tooling has to make engineers happy, be easy to use and add value, or people will use workarounds.

## What Quality Means

Scott says measures of quality differ by company: MTTR, incidents, number of bugs, Sev 1s, or uptime for a SaaS. Matty says people work to the metric you give them, telling Jez Humble's story of adding one test per sprint and getting assert equals true, and warns against tying metrics to compensation, which Scott strongly agrees with. Matty notes that if you measure Sev 1s, teams focus on "mean time to innocence," and wants metrics that are interesting and actionable, making your ears perk up. Scott suggests ISO/IEC 25010 (SQuaRE) and the Quamoco framework as starting points, both linked in the existing notes.

Scott defines customer confidence as how much customers trust that your software does what they need, and how little they have to think about it. Matty recalls a tweet that customers want to be unaware your stuff exists and cites the Futurama line "sometimes when you do your job right, nobody even knows you did it at all." Scott says a telltale sign of low confidence is a customer saying "We're fucking tired of being your QA," and points to Nicole Forsgren's book Accelerate for why quality speeds you up.

## The Nuts and Bolts

Scott says to make PRs run as many tests as is reasonable within a reasonable time, and to build an artifact from a PR so a developer can pull it down and debug locally. When merging, run exactly the same tests, because main branch creep is real. Build a workflow with tight feedback loops and quality gates in which each stage raises confidence: quick, high-value unit tests first, notifications, tests on the binaries, notarization, load tests, a long-running instance with customer-like data, and upgrade tests. Scott says to talk to customers, since a bad upgrade experience means people won't upgrade, and then you get a Sev 1 and a four-day upgrade. At the end, you have a releasable artifact in a staging area, and a button that makes it public.

## Getting There From Here

Most organizations aren't greenfield. Scott says treat it as a migration in chunks with story mapping, noting that a year-long fix of a release process at one place was painful and that Scott isn't a fan of big bang. Matty agrees that any transformation should be iterative, since you'll miss some ifs anyway, and ivory-tower architects don't dictate everything. Scott recommends talking to engineers, without listening to everything they say, and to support staff, making a tactical plan for a small problem, writing RFCs, and tying it to company value and goals. Matty mentions a talk called Everything's a Product, applying product management to internal services such as release engineering, since your customers are the engineers, without the NPS score on a Jenkins pipeline.

Scott's parting advice is to be empathetic to customers, engineers and teammates, and quotes Adam Jacob's line "happy people make happy software, which makes for happy customers," paraphrasing slightly.

- [Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://pdfs.semanticscholar.org/57a5/b99eceff9da205e244337c9f4678b5b23d25.pdf)
- [Operationalised Product Quality Models and Assessment: The Quamoco Approach](https://elib.uni-stuttgart.de/bitstream/11682/8324/1/quamoco.pdf)
