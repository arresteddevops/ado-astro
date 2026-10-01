---
title: Tea and Anarchy with Alice Goldfuss and Ian Coldwater
description: Bridget chats with Alice Goldfuss and Ian Coldwater.
date: 2020-10-22T16:06:22.000Z
publishDate: 2020-10-22T16:06:22.000Z
episodeNumber: "161"
podcastFile: arrested-devops-podcast-episode161.mp3
podcastDuration: 37:47
episodeImage: episode/img/tea-and-anarchy.png
episodeBanner: episode/img/tea-and-anarchy-banner.png
images:
  - img/social/fb/tea-and-anarchy.png
guests:
  - person: agoldfuss
    snapshot: agoldfuss3
  - person: icoldwater
    snapshot: icoldwater2
hosts:
  - bkromhout
sponsors:
  - sdt
aliases:
  - /161
  - /teaandanarchy
youtube: AGCTgs4Rd_4
explicit: yes
transcript: tea-and-anarchy
---

Bridget talks with Ian Coldwater, who lives in Minneapolis and specializes in hacking and hardening containers, Kubernetes and cloud-native infrastructure, and Alice Goldfuss, who lives in Portland, Oregon, and has a background in site reliability engineering, systems programming, software engineering and network engineering. The conversation covers container security, CVEs and disclosure, privacy boundaries for people with public profiles, and tea. The cold open is Alice on disclosure manners: "I think it's supposed to be bad manners to just be like, lol, your shit's broken."

## Containers Are as Secure as the Stack

Ian says container security has to be thought of holistically, because containers share resources with each other and the host, so "your containers are as secure as your stack is," including silicon, operating system, kernel and what runs in them, and defense in depth matters. Alice has never worked on a container team with a dedicated security person, and says security is usually an afterthought, a checkbox before shipping. People often choose containers for security, such as running customers' arbitrary code, while security people say an insecure box means insecure containers, possibly more so with more ports open. Alice warns about false prophets and marketing, and says if you pick containers for security, you need an expert like Ian and must implement what they say.

## CVEs and Disclosure

Ian explains a CVE as a taxonomy: someone who finds a vulnerability submits it to the CVE Numbering Authority, it gets a number, and you can look the number up in a large database. The numbers aren't memorable, so people name their vulnerabilities. Ian recently got a first credited CVE with a group, a credential leak in containerd 1.2.x, and mentions an earlier Kubernetes CVE for which friends published a proof of concept that "honked Kubernetes to death."

Alice says when a CVE lands, you need an inventory of the versions you run, since "otherwise, you find out about them on Twitter." Then ask whether you run the affected version, how likely and severe it is on your fleet, and how much of your infrastructure is affected, and set a mitigation deadline. CVEs typically aren't announced until a patch is in the works, and an older version might make patching gnarly, which is one reason to keep doing rolling upgrades.

Ian says responsible disclosure is a matter of some debate. At best you write to the security contact, get a friendly reply, file the CVE through maintainers, who set severity, and agree on a timeline. Sometimes vendors threaten to sue the finder, which is bad behavior and how "you get 0-days dropped on Twitter on you." Ian notes that someone who reports a bug is showing good faith, since they could sell or post it. Alice adds that if you get an email saying someone found a vulnerability on your site, do not respond with threats, because that person is trying to help unless the email continues with demands for payment. Bridget's analogy: "hi neighbor, your window's unlocked."

## Below the Software

Alice says the kernel is software too, and has a well-entrenched maintainership that gets patches out, while operations teams are used to patching it. Hardware has its own issues. Alice recalls an F5 announcement a couple of hours before a leap second that some load balancer versions had a vulnerability triggered by it, which meant interrupting an important meeting with executives. Alice also describes the "hotel maid" scenario of a device being placed in a laptop and security researchers scanning machines before and after travel.

## Public Life and Personal Security

Bridget asks where they draw boundaries between public work and private life. Alice takes a physical safety mindset, doesn't tag locations, shares restaurant visits only hours after leaving, and has been recognized from Twitter on the street and in restaurants. Alice is a protected voter in Oregon and currently doesn't share an employer on Twitter, because the boundary has been good for mental health. Alice enforces parasocial boundaries, inviting approach at events but not at a restaurant or crossing the street. Bridget posts about work because it fits open source, and says familiarity doesn't mean friendship.

Ian says everyone has their own threat model and comfort level. Ian tells of a single week when a parent at a kid's karate class and the person at a bodega counter both announced they followed Ian on Twitter, and Ian decided to accept being visible. Ian's advice: "err on the side of not being creepy," and "if you know for a fact that you're being creepy, maybe stop." Alice adds that constantly being watched has paid off in professional settings as a kind of trial by fire.

## Tea and Geese

Asked for the most delicious tea, Alice says it depends: coffee drinkers may like smoked teas like Lapsang Souchong or malty ones like Assam, people who like fruity flavors might try an oolong, and people who like savory might try a Japanese green like a Fukamushi sencha. Alice's recent favorites include a Weishan Bao Zhong and a Dan Cong oolong that smells like currants. Ian isn't a tea snob but enjoys friends' tea.

The goose thing came from the video game Untitled Goose Game, which Ian saw as an allegory for hacking because the goose chains together innocuous objects to exploit them. Independently, organizers of the Kubernetes Contributor Summit at KubeCon made a goose-themed CTF where GitOps makes a stuffed goose honk, and Ian's keynote was about it. Now "lots of Kubernetes people honk at each other."

## Making the Year Better

Bridget is trying to elevate voices other than Bridget's own. Alice says impact depends on bandwidth, and changed the PDX DevOps meetup, a group of about 60, to go online and host topics beyond technology, including ethical organization at a company after the George Floyd protests, resources for protesting safely, stress release and emergency preparedness after wildfires. Ian says that as someone with access to tech community resources, the answer is redistributing money and resources to BIPOC youth doing organizing on the ground. Alice agrees.

Image credit: Tea and Anarchy, modified from [Anarchist Revolt](http://anarchistrevolt.com/?id=radicalgraphics---82)

Font: [1403 Vintage Mono Pro](https://1403.slantedhall.com/) by Jeff Kellem
