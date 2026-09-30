---
title: Runtime Analysis with Brian Kelly
description: "Most developers are familiar with two sources of data about their applications: 1) static code analysis, and 2) observability tools monitoring their system in production. However, a new data source is gaining popularity: Runtime analysis. Runtime analysis is a technique where an application's dynamic behavior is recorded and analyzed during development time, allowing flaws and other insights to be revealed before that code is deployed to production."
date: 2023-11-23T21:52:59.000Z
publishDate: 2023-11-23T21:52:59.000Z
episodeNumber: "197"
podcastFile: arrested-devops-podcast-episode197.mp3
podcastDuration: 38:55
podcastBytes: 17800000
episodeImage: episode/img/runtime-analysis.jpg
episodeBanner: episode/img/runtime-analysis-banner.jpg
images:
  - img/social/fb/runtime-analysis.png
guests:
  - person: bkelly
    snapshot: bkelly
hosts:
  - mstratton
sponsors:
  - uffizzi
  - gliffy
  - gitbook
aliases:
  - /197
  - /runtimeanalysis
explicit: no
transcript: runtime-analysis
---

Matty talks with Brian Kelly of AppMap, a runtime analysis company, about what runtime analysis is and where it fits between static analysis and production observability. Brian is originally from Ireland, has lived in the Boston area for over 20 years, and came to AppMap from distributed systems, SaaS and a cybersecurity company. The guest's employer sells the category under discussion, which the guest says plainly when it comes up, and AppMap also appears in the links below. The cold open is Brian: "We won't say the Log4j word."

## Where Runtime Analysis Fits

Matty's guess at the definition is "analyzing during runtime," and Brian confirms it. The difference from the APM and observability tools the industry is used to is where in the workflow it happens: on the developer's laptop or in CI, before deployment. Static analysis has become a commodity for classes of problems like vulnerable dependencies, and Brian says a team that isn't using it is delinquent. But there are problems developers assume they can only catch by sending code to production and watching it with an observability tool. Brian says "I hate to say shift left, so I'm going to say shift closer."

The cost of finding out late, Brian says, is context switching: a developer who has moved on to another pull request hears days later that a change is a problem, and the issue tends to land on a Jira backlog, where an SRE compensates by adding CPUs and RAM, which Brian ties to crazy upside-down hosting costs. Tests and manual QA already generate runtime data that many teams ignore. Matty adds that the point is getting 80 percent: fewer defects reach production, so the remaining ones might actually get fixed, and Matty compares the backlog to Homer Simpson balancing the garbage. Brian says Dependabot and static analysis didn't end pen testing or dynamic testing, and each of them is a signal, but teams over-rely on observability tools and crank up APM spend.

## What It Finds

Brian's best-known example is the N+1 query from an ORM such as Hibernate or ActiveRecord, where a static analyzer sees that an ORM is in use but not the queries generated at runtime or how many identical ones are issued while paginating. Others are dependency injection and dynamic library loading: a static tool sees a config file and can't see what gets loaded. Runtime analysis watches where "the infinite gets constrained down to the finite," and can show that seven or eight listed libraries are never used and whether the ones in use are used in a vulnerable way. Matty connects this to the Sysdig report finding of loaded but unused JavaScript packages in the Cloud Native Security episode.

## What It Looks Like in a Workflow

Brian says tools in this class have to be automated, fast and fit the existing workflow: in VS Code, IntelliJ or PyCharm, pressing the run button instruments the application, watching bytecode in Java's case. That sounds like an APM, but it collects more specific data, between observability and a profiler, building a dataset of which functions, queries and libraries run. Analysis comes in automated form, like flagging an N+1 query, and human form. Brian's example: a unit test triggers six occurrences of an N+1 query that's a tiny fraction of CPU time, but the developer knows production data would make that six million. It's also definitive: "this really happened," not a fuzzy prediction.

Brian expects the concerns to be noise, since static analyzers started out with many false positives, and expectation of magic, but runtime analysis only observes, and is bound by how long the tests take, which developers run anyway.

## The OWASP Top 10

Brian points to the OWASP Top 10 as an illustration: around 2010 SQL injection was at the top, and then tools and frameworks commoditized the fixes. Brian recalls a 33,000-page automated pen test report for a big bank where prepared statements fixed about 27,000 pages. What replaced it are harder problems like broken authorization and authentication, cryptography and secrets handling, which static analysis mostly can't detect. A secret might pass through a framework that logs it, and a runtime analyzer can find the code paths.

## Getting Started and AI

Matty mentions Adam Jacob's approach for Habitat, installing the gnarliest enterprise software to prove it, and says that's not the way to start. Brian's answer splits on whether you have automated tests. With tests, put runtime analysis in the editor and in CI. Without tests, instrument locally, on a laptop or a UAT environment, and look at the reports, or "personal observability," which is safe because nobody needs tests to run in production. Matty: "monitoring is simply testing with a time dimension." Brian says you should still write tests.

On AI, Brian says most AI code reviewer apps just look at the same static diff, while runtime analysis data is a new dataset. In experiments, adding runtime data to an LLM prompt stripped out noise and produced answers like how to mitigate a known N+1 query. For anti-patterns, Brian can't think of one on the spot, and says the risk is overreach: a tool that becomes "a mosquito in your eardrum," as static analyzers did with their 79 vulnerabilities until Dependabot started opening pull requests. Brian ties the category to the DevOps hangover of overspending on observability.

- [OWASP Top 10](https://owasp.org/Top10/)
- Stripe: [The developer coefficient](https://stripe.com/files/reports/the-developer-coefficient.pdf) (quantifies the cost of bad code to companies to be $59B annually)
- Facebook: [FAUSTA: Scaling Dynamic Analysis with Traffic Generation](https://research.facebook.com/publications/fausta-scaling-dynamic-analysis-with-traffic-generation-at-whatsapp/) (how runtime analysis was used at WhatsApp to catch design flaws before they reached production)
- Dragan Stepanović - [Async code reviews are choking your company’s throughput](https://vimeo.com/774651621) (from LAS 2022, a talk which highlights the systemic problems with developers trying to do manual code reviews of large PRs)
- [AppMap](https://appmap.io/), the runtime analysis company which Brian works for
- [Cloud Native Security with Michael Isbitski](/cloud-native-security/) ADO Episode
