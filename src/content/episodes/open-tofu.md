---
title: What's Up With Open Terraform?
description: Matty is joined by Ohad Maislish and Cory O'Daniel for some updates on the Open Terraform project.
date: 2023-09-21T11:00:15.000Z
publishDate: 2023-09-21T11:00:15.000Z
episodeNumber: "193"
podcastFile: arrested-devops-podcast-episode193.mp3
podcastDuration: 38:54
podcastBytes: 17800000
episodeImage: episode/img/open-tofu.png
episodeBanner: episode/img/open-tofu-banner.png
images:
  - img/social/fb/open-tofu.png
guests:
  - person: codaniel
    snapshot: codaniel
  - person: omaislish
    snapshot: omaislish
hosts:
  - mstratton
sponsors:
  - devopsworld
  - uffizzi
aliases:
  - /193
  - /openterraform
  - /opentofu
  - /open-terraform
explicit: yes
transcript: open-tofu
---

Matty talks with Ohad Maislish, co-founder and CEO of env0, which manages Terraform, Pulumi and CloudFormation, and Cory O'Daniel, CEO and co-founder of Massdriver, a visual environment for cloud infrastructure that depends heavily on Terraform, about the community fork then called Open Terraform. Both guests run companies with a stake in the outcome, which Matty says up front while insisting it's not a criticism of their motives. Matty's own history is with Chef and Pulumi, and Matty says there is no dog in this hunt. The episode's URL and title predate a rebrand announced partway through. The cold open is Matty: "definitely GitHub is just effed right now."

## What Happened

Ohad's account, as a participant: on August 10th HashiCorp changed the licenses of several projects, including Terraform, and a group of vendors and individuals wrote a manifesto asking that Terraform stay open source forever. When HashiCorp kept its decision, which Ohad calls "totally legit," the group started working on a fork. Cory adds that some CNCF projects began pulling away from HashiCorp tools, and that Massdriver wants to bet on a tool that the open source community keeps investing in, the "new lingua franca of infrastructure as code."

Matty asks why a license change matters to an ordinary engineer. Matty's concern is vagueness: depending on how a lawyer reads the license, distributing a project that uses Terraform could be a violation, and you can't always know who is competitive with HashiCorp. Ohad says the license was followed by a binding blog post of clarifications on August 21st and changes to the Terraform Registry terms on August 24th, which shows the community didn't understand the implications. Every fundraising round, Ohad says, means sending the license to investors, and a BSL license with a binding blog post and more updates is harder to explain than a clear alternative. Ohad contrasts it with SSPL, which exists to stop others from reselling a vendor's product as a service, and calls BSL flexible and, in Ohad's opinion, still vague.

Matty adds that enterprises already fight compliance just to use open source at all, and a complicated license makes that harder. Cory says Massdriver was affected and then wasn't, since it competes with Waypoint, which was carved out of the FAQ a week later, and that dynamism is what worries people. Cory gives examples of transitive dependencies: a CNCF project that uses Consul, projects pulling out Vagrant, and Jaeger considering removing a Go plugin, which is still MPL. "It is very much email us to figure out if you owe us money," Cory says, compared with how other projects handled BUSL changes.

## OpenTofu

Asked what to call it, Ohad says OpenTF, and Cory breaks the news that will go public the day after recording: the Linux Foundation recommended a rebrand because TF could be confused with Terraform, so the project becomes OpenTofu and the binary is tofu. Ohad and Matty make the fork and tofu jokes. The project now belongs to the Linux Foundation, the natural step toward CNCF, and Ohad says it is meant to be a drop-in replacement: no code changes, just a different binary and registry. Gruntwork, the creators of Terragrunt and Terratest, and Harness are among the supporters, and Gruntwork has released a sneak peek of state encryption, which Matty recalls as a Pulumi differentiator since a Terraform state file can hold secrets in plain text.

Matty asks what makes the fork more than a burst of pledges, recalling a maintainer maxim: "as a maintainer, no is temporary. Yes is forever." Ohad points out that Terraform core was open source but stopped accepting community pull requests about two years ago, while OpenTofu has a five-member steering committee under Linux Foundation and CNCF guidelines, and has already deferred a community change to a later version as a new capability. Ohad says RFCs and voting rules are a work in progress. Cory hopes that teams replacing HashiCorp tooling will contribute and speed up a project that "really has been bogged down for the past couple of years."

## The Registry

For modules and providers, Cory says the first registry will proxy requests to GitHub and resolve module names to repositories, and Ohad adds that provider naming conventions map to GitHub URLs. So publishers won't have to submit anything. Cory sees an opportunity to support OCI-compliant registries later.

## How to Help

Ohad suggests starring the repo, joining the community Slack, filing and voting on issues, and sending pull requests, and sees an opening for large vendors and cloud providers to shape the project under CNCF. Cory suggests putting OpenTofu into CI pipelines, for example with Terratest, once the alpha registry is out, to surface edge cases in loading providers and modules. Cory's closing point is that the group is "a consortium of competitors" that get along well because they love the language. Matty promises to file a first pull request to nominate Cory's Instagram-famous Australian Labradoodle, Ziggy O'Doodle, as mascot.

- [https://www.instagram.com/ziggy.odoodle/?hl=en](https://www.instagram.com/ziggy.odoodle/?hl=en)
- [https://twitter.com/opentofuorg](https://twitter.com/opentofuorg)
- [https://github.com/opentofu](https://github.com/opentofu)
- [https://linkedin.com/company/opentofuorg](https://linkedin.com/company/opentofuorg)
- [https://github.com/opentofu/opentofu](https://github.com/opentofu/opentofu)

<hr>

*DevOps World is back for 2023, and you won't want to miss out on this one-of-a-kind event! This year's program is packed with exclusive insights, immersive workshops, and unparalleled networking opportunities taking place across multiple cities in the US, UK, and Asia. Elevate your DevOps game and register using the following links: [NYC area](https://reg.rainfocus.com/flow/cloudbees/devopsnyc/webinar3/page/landing), [Chicago](https://reg.rainfocus.com/flow/cloudbees/devopschicago/webinar3/page/landing), [Silicon Valley](https://reg.rainfocus.com/flow/cloudbees/devopssiliconv/webinar3/page/landing), [Singapore](https://reg.rainfocus.com/flow/cloudbees/devopssingapore/webinar3/page/landing), and [London](https://reg.rainfocus.com/flow/cloudbees/devopslondon/webinar3/page/landing).*
