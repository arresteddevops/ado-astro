---
title: Ignite 2018 Catch Up with Steven Murawski
description: Trevor is joined by Steven Murawski at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
date: 2018-10-15T23:55:48.000Z
publishDate: 2018-10-15T23:55:48.000Z
episodeNumber: "116"
podcastFile: arrested-devops-podcast-episode116.mp3
episodeImage: episode/img/ignite-2018-smurawski.png
episodeBanner: /episode/img/ignite-2018-smurawski-banner.png
images:
  - /img/social/fb/ignite-2018-smurawski.png
guests:
  - person: smurawski
    snapshot: smurawski
hosts:
  - thess
sponsors:
  - chef
  - datadog
aliases:
  - /116
  - /smurawski-ignite18
  - /ignite2018smurawski
explicit: yes
transcript: ignite-2018-smurawski
---

Trevor catches up with Steven Murawski at Microsoft Ignite 2018. Steven, a senior cloud ops advocate at Microsoft, leads a team focused on DevOps, site reliability and cloud-native scenarios from an ops perspective, and worked with Trevor at Chef, on the community engineering team there. Steven notes every appearance on the show has come with a different job, starting with Stack Overflow's site reliability work. The two joke about verbal tics: Trevor can't stop saying awesome and Steven says super excited, and Trevor calls it a switch statement hitting the default.

## A New Ops Advocacy Team

Steven's team is operations-focused advocates, started after Microsoft's developer advocacy effort, a reboot of its technical outreach about a year and a half earlier, had few people with operations backgrounds. The team became official at the end of May and spent the summer hiring and onboarding. Steven lists Jason Hand, David Blank-Edelman and Jay Gordon, with Emily Freeman joining to focus on DevOps and incident response. Steven was a developer advocate on Donovan Brown's team before that.

Microsoft's term IT pro is a huge bucket for anyone who isn't a developer, and the cloud ops advocates focus on server admins and the people moving environments into the cloud, whether on Windows or Linux. Steven's team focuses on the ops crowd around DevOps, site reliability and cloud-native, pushing practices like source control and automated delivery from a single source of truth to reduce manual intervention. All the advocates report to the same general manager, and "Our job title does not reflect the tooling and capabilities that we talk about and expose." It reflects the audience, because "the lines are blurring" between ops and developer topics. Steven likes docs.microsoft.com, which put the documentation that used to be split between TechNet and MSDN in one place, and was part of the reason to join.

## Being the Conduit

Steven says the team can be found at devopsdays, SREcon, LISA, PSConf Asia, WinOps in London and Chocolatey Fest, but best online. The foundational idea is that "we exist to help be a conduit between our communities and the product engineering teams," since product teams are incentivized when people use their services, which they won't if the services don't fit existing workflows, like Terraform, Splunk or Jenkins with Azure. Problems are chances to improve documentation, bring feature requests or support bug fixes. Trevor compares it to Chef, and Steven says it's the same work as on Chef's community team. Steven is a latecomer to IT, on a third career, and says that freely shared podcasts, blogs, code samples and IRC answers made it possible, so getting paid to give back is a blessing.

## Continuous Monitoring and SLOs

Steven's session was on continuous monitoring. After CI/CD comes the feedback loops of the second and third ways from The Phoenix Project, through monitoring and instrumentation. Azure Monitor ties together App Insights, Network Watcher, container and VM monitoring, and thresholds can feed back into CI/CD pipelines as quality gates, stopping deployments if rules evaluate unfavorably and replacing manual inspection. Steven's teammate David gave a session on setting service level objectives and indicators in Azure, using the same metrics and Log Analytics tooling that Microsoft uses to run Azure DevOps.

## Azure DevOps and Announcements

Steven doesn't love the name Azure DevOps, which is what VSTS became, but likes the componentization into Pipelines, Repos, Boards and Artifacts, so you use what complements what you have, for example tracking issues in GitHub and not using Boards. Steven tips that people not yet moved can turn on preview features in their user settings and move at their own pace.

Favorite announcements: Chef Workstation in Cloud Shell, which Steven is increasingly using as a default place to work and can be wired into Visual Studio Code through the Azure account plugin, the public preview of a managed Chef Automate service, and the rebrand of Azure Monitor, which is run out of the Azure SRE org. Steven admits the picks skew toward personal interests, and notes the announcements came as an ebook of 50-some pages of two-sentence entries.

## Slow Down and Define Quality

Steven's closing thought is that discussions of moving faster jump to automation tools, when the first step is to define what the work is and what testing and validation look like, because "you can't inspect quality into a product," a line Steven says Deming was quoting from Harold Dodge. Focus up front on what quality and done look like, and be confident what's in your environment so you can move with confidence.

Trevor is joined by Steven Murawski at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
