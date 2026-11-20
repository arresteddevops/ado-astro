---
title: Scaling Guardrails with Hazel Weakly
description: "Hazel Weakly, a Fellow of the Nivenly Foundation and the Infrastructure Witch of Hachyderm, and Matty talk about guardrails that survive scale, using Hachyderm's jump from a few hundred people to 50,000 as the case study. They get into trust, graceful degradation, one-nine uptime, and what remote attestation could do for compliance."
date: 2027-02-03T06:00:00.000Z
publishDate: 2027-02-03T06:00:00.000Z
episodeNumber: "218"
podcastFile: arrested-devops-podcast-episode218.mp3
podcastDuration: "00:37:49"
podcastBytes: 18157137
episodeImage: episode-img/scaling-guardrails.jpg
episodeBanner: episode-img/scaling-guardrails-banner.jpg
images: []
guests:
  - person: hweakly
    snapshot: hweakly
hosts:
  - mstratton
sponsors: []
aliases:
  - /218
  - /scalingguardrails
youtube: ZlhQ9IXXPAM
transcript: scaling-guardrails
explicit: "no"
---
## If You Touch It, It's Yours

Hazel got into infrastructure the way a lot of people do. She was on a team that didn't do infrastructure, something broke, nobody else was going to fix it, and "if you touch it, it's yours." She kept touching it. She also kept finding that infrastructure and community building are the two highest-leverage ways to help the people around her, and that getting better at one makes you better at the other. Alongside a day job doing guardrail work as a director of product and finance, she is a fellow of the Nivenly Foundation and on the board of directors of the Zulip Foundation.

## 700 People and 50,000 of Their Closest Friends

The system she picks as one that scaled both well and badly is Hachyderm. In late 2022, after Elon Musk bought Twitter, Chris Nova's small Mastodon server went from a couple hundred people to "700 people, us, and 50,000 of our closest friends." It was running on a development server in Nova's basement, with ZFS development edition and Linux kernels in debug mode. The migration to servers in Europe was streamed on Twitch and was, in Hazel's words, "a giant shit show, but it was also amazing." She still gets cold-sweat reactions from people when she mentions trans-Atlantic NFS.

Technically it went from a couple computers to a couple computers on fire. Socially it held, because the community trusted what the team was doing and treated the glitches as something they were all in together. Hachyderm later stabilized and became one of the more strongly moderated servers on the Fediverse. Matty points out that every system is sociotechnical, even if we mostly talk about the technical side, and that someone building a payment system shouldn't tune this out.

## Guardrails Are About Reciprocity

For Hazel the foundation is trust, specifically trust in reciprocity: a community grows when people can invest in each other to solve shared problems, and if nobody believes their contribution will be returned, nobody commits. Finance works the same way, since banking is a social concept that has to survive any one company or country. Social guardrails exist to enable reciprocity, and infrastructure guardrails let it happen naturally while keeping the system legible enough to introspect.

Transactions are her example of rigid versus flexible. People think they should be atomic, durable and irrevocable, and that's true by the time the numbers are published, "after everything's ossified." In the middle, "time flows forward and backwards. Money flows forward and backwards." Her other example is the Netherlands, where the law for some towns mandates the water level of a canal in centimeters, and buildings are put half on the water and half on land that don't flex. Matty calls that something you can't control, predict or enforce, and says it's the opposite of brittle guardrails.

Hazel adds that infrastructure has long life cycles. A system with a 30 or 40 year operating life covers about 60% of the entire history of computing, and she doesn't know what her life looks like in three years. Matty compares it to Y2K.

## No Kubernetes, and a Bash Loop

Matty asks how reliability changes with volunteers who can't be fired. Hazel says it's a hard question, and that Hachyderm was built partly as a response to the grief of watching the web go from collectively owned to value extraction. They wanted a co-op, where the community owns and operates its own infrastructure. So they "unwittingly" built for volunteers. No Kubernetes, just virtual machines and bare metal with standard operating systems and plain old Postgres. For a long time, their declarative infrastructure as code was a bash script that SCP'd and SSH'd to servers in a loop, not even Puppet or Ansible.

It didn't produce the army of contributors they hoped for. Hazel's read is that collective action stopped being a social muscle somewhere after 2004, in the Western nations. "We forgot how to memorize phone numbers, and we forgot how to organize people. Like, somehow those happened at the same time." She thinks rebuilding that knowledge is going to be one of the most important challenges of the next ten or twenty years, and it matters more in the age of AI.

## Eleven IOPS

The biggest technical surprise was the original failure. Hachyderm had a RAID 10 with two failing SSDs and was getting 11 IOPS. "Not 11,000, 11." Mastodon was still chugging along with 50,000 people on it. When they switched to a healthy file system, CPU contention dropped from 1700% to 2%.

Hazel's takeaway is that a lot of people design for pushing up to the edge and not for what happens past saturation. If the system degrades gracefully, you can blow past a memory budget by 2x or a CPU budget by 5x and bring it back later, and she says that's its own type of resilience. It still leaves you brittle in other ways: they had one database machine, "a hundred percent up time until it's a hundred percent downtime," and a cluster brings its own problems, since now the networking and disks have to be perfect.

## One Nine, Maybe Half a Nine

The bigger surprise was social. Hazel's idea of acceptable performance had come from working in places that chase five nines, and Hachyderm was "lucky to have one nine," maybe half a nine. They expected people to leave or complain. They got users joking that the server being down was a reminder to go touch grass.

That's reciprocity working, she says. It only breaks when you build in an assumption of perfection and make everything so transactional that the reciprocity fades. Her version is that there's no level of reliability you can fall to that loses human trust until you cross a threshold, and then there's almost nothing you can do to get it back. Matty ties this to outages he's worked through, where saying something, even "I have nothing," treats people like humans on both sides. He also remembers the SRE book story about a Google system where they deliberately introduced failure so it wouldn't run more reliably than promised, and asks what level of reliability people will actually accept. He's an early Hachyderm user, and notes that the people running it are the people in the community, which is the reverse of asking whether employees at a big social network use their own product.

## Attestation and the Paperwork Problem

What Hazel is excited about next is remote attestation combined with behavioral evidence. Today you read the regulation, interpret it, build the thing, and then do a lot of work afterward to gather the paperwork for your auditor. That's expensive, and it freezes the implementation details, which is why banks and regulated environments ossify. "If it takes you a year to do two months of work, you're not gonna do that two months of work very often."

Her hope is that open standards from the remote attestation and supply chain transparency working groups let a compliance and evidence chain come with the software. The example she gives is a federated social server that has to verify the media it hosts isn't illegal or malicious. Today every server that federates with it has to duplicate that work. She'd like to say that her process for verifying media is as trustworthy as she is, so anyone who trusts her and her community can take it in, and so can the next server in the chain. She thinks the foundational protocols have moved in the right direction in the last year, and even the last month, and that this could bring the humans back into computerization.
