---
title: Fireside Chat with Alice Goldfuss
description: Bridget chats with Alice Goldfuss (GitHub).
date: 2017-11-28T19:55:48.000Z
publishDate: 2017-11-28T19:55:48.000Z
episodeNumber: "96"
podcastFile: arrested-devops-podcast-episode096.mp3
episodeImage: episode/img/alice-fireside-chat.png
episodeBanner: /episode/img/alice-fireside-chat-banner.png
images:
  - /img/social/fb/alice-fireside-chat.png
guests:
  - person: agoldfuss
    snapshot: agoldfuss
hosts:
  - bkromhout
sponsors:
  - victorops
  - thoughtworks
  - datadog
aliases:
  - /96
  - /alicefiresidechat
youtube: 2rO8iGRyIGQ
explicit: yes
transcript: alice-fireside-chat
---

Bridget sits down for a remote chat with Alice Goldfuss, a site reliability engineer at GitHub who loves systems, lower-level problems and kernel panics, and also tea, cats, chocolate and box forts. Alice joins from the rainy Northwest with a desk lamp aimed at the face. The cold open is Alice's line, "Ladies is gender-neutral now," which turns out to be the name of a t-shirt. At the end, Alice says that if it had been announced as a fireside chat, Alice would have set something on fire in the background.

## Curating LISA

Alice was talks co-chair for LISA, the Large Installation System Administration Conference, which USENIX runs and which has been around for over 30 years, back when a large installation meant 10 workstations. USENIX handles logistics and brings in people from the community each year to select talks, workshops, tutorials and keynotes. Alice likes that it is non-vendor-specific and for practitioners, and describes three days of training and workshops followed by three days of a more traditional conference. The 2017 event was in San Francisco, the next in Tennessee and the following one in Portland.

In choosing talks, Alice wants the how: "there's a difference between how to use Docker and how we used Docker to change up our infrastructure." Alice also says "I also really love a good outage story," and wanted Niantic to talk about the Pokémon GO launch. Bridget asks how to get stories with failure in them past a company's lawyers. Alice says it's hard, since companies fear customers questioning an SLA, but an engineer hearing honest failure stories is more likely to buy, and talks from Google have gotten through when the incidents were old or vague enough. LISA, Alice says, sits at the end of the year when people are tired of flashy conferences and more willing to talk.

## Reaching Out for Talks

Alice ran devopsdays Portland's vendors and MC duties, and did not choose talks that year, but encouraged people to submit who otherwise wouldn't have. A more diverse selection committee used its networks, telling people it would be a safe space. Bridget says that when you post a CFP and do nothing else, you get the people whose job it is to submit, so a broader range means reaching out. Alice's first conference talk, at LISA in 2015, happened because someone who was a chair that year reached out, and "someone reached out to me and said, I think you have something to add here." Alice adds that looking at past talks by people with PhDs would have scared Alice off.

Alice says it matters who is reaching out and why. An invitation to a Python conference said it was looking for more women, for a framework Alice hadn't worked with in years, and Alice's reaction was "you just want a woman, that's all this is." Bridget says no one wants to be a decorative prop. Reaching out works when it names something specific, which Bridget calls "conference invitation Mad Libs," and when it says why the conference is good for the speaker, since Alice has to justify conference travel to an employer.

## Learning to the Bottom of the Stack

At GitHub, Alice started on the Edge team, which handled the network tier and a custom load balancer, and now works on the Kubernetes platform that all of GitHub.com runs on, with plans for kernel-level work. Alice grew up in a very small upstate New York town with a Windows 95 computer and no internet until 16, so learning happened alone, with Compton's Encyclopedia for AP Calc. Alice has a film degree, started in tech support, tried Ruby and disliked it, then liked Python, and took an early Coursera programming class that built games in eight weeks. Alice says "I've had a career of doing one job during the day and learning to do another job at night," and prefers "self-guided" to self-taught, since other people wrote the materials. The method is the Socratic why, which keeps leading lower in the stack.

Alice's laptop was resting on Understanding the Linux Kernel, the Practical Linux Security Cookbook and Docker Up and Running, and since the kernel book's examples are in C, Alice learned C for fun. Alice brought the kernel book to jury duty. For concepts like Kubernetes, YouTube videos with diagrams help, and Stack Overflow answers supply jargon to search the man pages. Alice carries a chip on the shoulder about lacking a CS degree, but says "I've made it this far without having to know really any computer science," and that knowing arrays and hashes gets you far. Bridget notes that even with a CS degree you still Google constantly.

## Interrupt Designs

Alice made a t-shirt with a Panic! at the Colonel design after wanting shirts that weren't unisex tech swag, and when it sold, began donating the money. The first went to Women in Linux. Then came the "ladies is gender-neutral" shirt, made to answer "guys is gender neutral," offered only in fitted sizes and sold with every line conference organizers use on unisex shirts. It raised over $5,000 for Outreachy. A Manic Pixie Dream Girl shirt with PXE as the pixie benefits Free Geek, a Portland organization that refurbishes donated equipment. Alice moved from Teespring to Threadless for more cuts and colors, and includes sizes up to 4X. Fitted shirts, Alice says, should be table stakes for vendors, though they don't fit all women. Alice adds that scarves made things much easier for devopsdays Portland's swag, since no one needs a size.

## Humor, Loudness and the Internet Persona

Bridget asks what Alice wants people to take from posting things that poke the bear. Alice says humor works: "comedy allows you to point out things that otherwise would be considered offensive or people would instantly shut down to," like the fool in a Shakespearean play, and people remember it better than a blog post with citations. Jokes about sexism may also embolden people to talk about it at work. Alice says the loudness comes from being vocal about things that get in the way, like sexism and racism: "I talk about them a lot because I want them to go away." Alice also talks about technical things and baking.

## Chairs, Meetups and Practice Talks

Alice had been at GitHub over seven months before ordering an office chair, a Steelcase Gesture with narrow armrests that suit a smaller frame, describing the research habit as being "like the missing stair enabler of office equipment." Alice runs the PDX DevOps Meetup on the last Wednesday of the month, and encourages speakers to come, since the bar is lower than at a conference, with no recording, and a repeated talk is welcome. Bridget's tip is to give a conference talk at a local meetup the month before, pointing to a local speaker who changed about half the slides after the first run. Alice gives at least two practice talks, and plans to use the PDX meetup for the next new one. Alice likes devopsdays for the local angle, since it's harder to claim something can't be done locally when an organization three blocks away has done it.

## Planning 2018 and Containers in Production

Alice plans the year during the holidays, because of a need to manage emotional highs and introvertness, and wants to keep 2018 domestic with not too many new talks. A planned January keynote was postponed indefinitely. Alice would like to give a technical keynote on three or four years of running containers in production: at New Relic, Docker went into prod at version 0.6, and Alice has run Dockerized databases and now runs Kubernetes at GitHub. Alice calls it "the mechanic's view of containers," leaning on the podium with a rusty wrench saying it's going to break, and jokes "Your problem is all of the whales that you put all your apps in." Bridget counts 29 public talks in 2016 and calls that too many.

## Career Advice

Asked how people grow up to be Alice, the answer mixes self-guided learning with a network outside your employer. Alice says soft skills are a real deficit in tech, and that giving talks and keeping a social media presence is "kind of like a bridge between all of your jobs" and a safety net if a job ends, since you don't want your only network inside one company. Befriending women in tech has made life easier, Alice says, and the network doesn't have to be women. "Don't let your job be your whole life," because failing at work shouldn't take everything else down with it. Bridget adds that networking means connecting over common interests, and that following someone on Twitter doesn't make them your BFF. Alice adds that you can't control a promotion, but you can control learning a new language.

For listeners trying to DevOps at their own companies, Alice says things are easier with buy-in from the top, since a grassroots effort without a VP's backing is hard, and convincing a manager's manager helps. If you keep hitting obstacles and aren't enjoying work, Alice says it may be time to look elsewhere, since "your job shouldn't be your whole life."

Bridget sat down for a fireside chat with Alice Goldfuss (GitHub). No actual fires were harmed in the making of this episode.

* [LISA17](https://www.usenix.org/conference/lisa17)
* [devopsdays Portland](https://www.devopsdays.org/events/2017-portland/welcome/)
* [Charity T-Shirts - Interrupt Designs](https://www.threadless.com/discover/s/interruptdesigns) - awesome nerdy shirts with proceeds going to charity

### Checkouts

## Alice
* [Chair](https://store.steelcase.com/seating/office-chairs/gesture)
* [Baking Scale](https://www.amazon.com/dp/B0007GAWRS/?tag=thewire06-20&linkCode=xm2&ascsubtag=AgEAAAAAAAAAAOth) - round metal, good for scones
* [Increment Magazine](https://increment.com/development/center-stage-best-practices-for-staging-environments/)
* [SysAdvent](http://sysadvent.blogspot.com/)
* [Airplane food critique website](https://www.inflightfeed.com/)
* [Sailor Mercury zines](http://shop.bubblesort.io/)

## Bridget
* [Go Pirates](http://previously.tv/shows/go-pirates/) - Veronica Mars podcast
* [Bombsheller leggings](https://shop.bombsheller.com/) - again! because they’re just that great
* [Jewelbots](https://jewelbots.com/) - because I got Joe’s 10-year-old niece in the gift exchange
* [Nerdy Baby](http://www.nerdybaby.com/) - great STEM gifts



## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

Use code "ADO2017" for a discount on many devopsdays.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
* [SREcon](https://www.usenix.org/conference/srecon18americas/call-for-participation) - March 27-29 2018 - CFP closes Wednesday, November 29, 2017, 11:59 pm PST
* [ScaleConf Colombia](http://scaleconfco.com/) - April 27 - 28th 2018 - [CFP closes Jan 15](https://www.papercall.io/scaleconfco2018)
* [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca/public/cfp/611 ) - June 12-14 2018 - CFP closes Jan 17
