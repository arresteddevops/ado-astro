---
title: Cloud Native Security with Michael Isbitski
description: Special guest Michael Isbitski joins us to talk about cloud native security and reviews the Sysdig 2023 Cloud-Native Security and Usage Report. Michael and Matty discuss some common security challenges and findings from the report, and how to address them.
date: 2023-07-27T11:00:52.000Z
publishDate: 2023-07-27T11:00:52.000Z
episodeNumber: "189"
podcastFile: arrested-devops-podcast-episode189.mp3
podcastDuration: 55:48
podcastBytes: 25500000
episodeImage: episode/img/cloud-native-security.png
episodeBanner: episode/img/cloud-native-security-banner.png
images:
  - img/social/fb/cloud-native-security.png
guests:
  - person: misbitski
    snapshot: misbitski
hosts:
  - mstratton
sponsors:
  - drata
  - sysdig
  - devopsworld
aliases:
  - /189
  - /cloudnativesecurity
explicit: no
transcript: cloud-native-security
---

Matty talks with Michael, who began as an enterprise architect at Verizon, moved into assessing application security there, spent about five years in research and advisory at Gartner focused on application security, and is now director of cybersecurity strategy at Sysdig. Sysdig sponsors the episode, and the report the conversation starts from is Sysdig's own. The cold open is Matty: "And that's how we did security in the '90s, yo."

## What the Sysdig Report Shows

Michael says the report is based on anonymized customer data, not a survey, so it covers a slice of the industry: organizations that have acknowledged a security problem and use tools like Sysdig. The number of vulnerabilities is alarming, which says something about the state of open source and the hygiene of components, and scanning usually reveals a worse picture than anyone expected because of nested and transitive dependencies. One result Michael double-checked was the share of non-human identities, which dropped from 88 percent to 58 percent of identities in customers' cloud environments, a shift Michael attributes partly to organizations staffing up after the pandemic.

On SBOMs, Matty notes that everyone at KubeCon in LA at the end of 2021 wanted to talk about them and the report suggests the industry is mostly still talking. Michael says there are two problems: the SBOM formats aren't settled, and an SBOM has to be dynamic, since a system drifts from its design over time, and has to account for partners and suppliers as well as your own code.

## Build Dependencies, Runtime and Noise

Matty points to the report's finding that fewer than 1 percent of JavaScript packages are in use at runtime, and guesses it's because build tooling is written in JavaScript. The DevOpsDays site is a static site generator with a long package.json, none of which ships in the built artifact, yet Dependabot calls it "insecure as hell." Matty then catches a mistake in that reasoning live: the site does load Bootstrap on the front end, so there is front-end JavaScript after all.

Michael adds that a website tends to accumulate JavaScript libraries, then marketing adds tracking and payment processing adds more. A scanner will list every dependency and known vulnerability, but it can't say whether the code is reachable at runtime, which is where Sysdig's runtime insights and "in-use exposure" come in. Without that, organizations are "flying blind" and taking a best guess at what is exploitable. Michael recalls engineering teams suppressing findings in open source libraries they don't own, which gets described as false positives, and Matty calls it normalization of deviance. In cloud native, with microservices, containers and ephemeral resources, the dashboard can be "a sea of red."

## What Shift Left Means

Matty says "nuance is hard" and the shorter the phrase the more nuance it needs, and recounts writing a talk about shifting left securely out of frustration with a customer's sysadmins, on the idea that a title doesn't imply infallibility. Michael describes the traditional waterfall model with security as questionnaires and compliance, and shift left as pushing security into early design and automating tests in the IDE, at commit, in CI/CD and at runtime. Each stage produces scan results, which creates a correlation problem, and many of the problems of waterfall come back, just earlier.

Matty's definition: "shifting left to me is not shifting the work to the people on the left. It is actually moving that domain expertise earlier in the conversation." That's why NoOps never happened, since ops turned out to be a domain of expertise, and expecting software engineers to absorb InfoSec is unfair and a bit insulting to security people. Michael says many of the calls at Gartner were about pushing scanning onto other teams because the security team couldn't scale, and notes that dynamic scanning tools are "glorified fuzzers" that need good test automation to reach the functions, and that release decisions and pass or fail builds are still unsolved. Matty adds that monitoring is "just testing with the time dimension," so a check in pre-production and in production should be in parity, and that the old hardening sprint produced a note from the security team saying it was okay, which bad guys on the internet don't care about.

Matty says the tooling has improved: security scanners once cost around $15,000 a seat, and code instrumentation was limited by cost, so tracing ran on one of 30 servers. Both agree that doing this right means changing how product release and sales think, and not just engineering.

## Security as a Feature, Privacy and Zero Trust

Matty asks whether organizations treat security as a product feature, in the sense of a secure product and not AuthN. Michael says marketing still wants security features, and that more training material exists through groups like OWASP. Privacy has brought more focus, which Michael traces to GDPR, and so has the US National Cybersecurity Strategy and SEC disclosure mandates.

Michael builds zero trust from least privilege: zero trust is "least privilege on steroids," assuming the environment is compromised and authorizing continuously. It includes zero trust network access, which Michael says is what people usually think of, along with BeyondCorp, a cloudified VPN, and BeyondProd. Like shift left, people cling to one actionable piece. The report says "90% of granted permissions are not used," which Matty ties to onboarding: a new hire gets cloned from a colleague's access, the same way Chef-era teams copied an existing VM to get a new Apache server, until nobody knows what's on it. At Matty's current company, new hires get almost nothing and get annoyed, which works because the culture accepts 30 to 60 days of ramp up.

## Confessions

Matty's Netflix password is a variation on the domain admin password from Apartments.com almost ten years earlier, and it was never changed when someone left, because in four or five years only one person who knew it left. "You can have bad password policies if people don't quit." Michael admits to simple passwords that a spouse can remember, since a 3-year-old leaves little time for a password manager. Matty closes with Windows NT 4.0, where passwords expired after 30 days with warnings at 15 and no minimum age, so the team built a Visual Basic app that changed the password 15 times and then back again. Michael will be at a Gartner Security and Risk Management Summit and on LinkedIn, and Matty ends with Gartner's "rogue sessions," where an analyst argues against Gartner's own position.

- [Sysdig 2023 Cloud-Native Security and Usage Report](https://sysdig.com/2023-cloud-native-security-and-usage-report/)
- [Pushing Left With Tanya Janca](https://www.arresteddevops.com/pushing-left/) (ADO epsiode)
- [Shifting Left Securely](https://speaking.mattstratton.com/f8dw3L/shifting-left-securely) (Matt's talk)
<br>
<br>
*DevOps World is back for 2023, and you won't want to miss out on this one-of-a-kind event! This year's program is packed with exclusive insights, immersive workshops, and unparalleled networking opportunities taking place across multiple cities in the US, UK, and Asia. Elevate your DevOps game and register using the following links: [NYC area](https://reg.rainfocus.com/flow/cloudbees/devopsnyc/webinar3/page/landing), [Chicago](https://reg.rainfocus.com/flow/cloudbees/devopschicago/webinar3/page/landing), [Silicon Valley](https://reg.rainfocus.com/flow/cloudbees/devopssiliconv/webinar3/page/landing), [Singapore](https://reg.rainfocus.com/flow/cloudbees/devopssingapore/webinar3/page/landing), and [London](https://reg.rainfocus.com/flow/cloudbees/devopslondon/webinar3/page/landing).*
