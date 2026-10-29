# Modern Backups with Gilles Chehade

**Matty:** [00:00:00] It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. We are gonna talk about an interesting topic today, one we've... I don't think we've ever really talked about on this show before. So let's jump right into it. Joining me today is, Gilles. Gilles, welcome to the show

**Gilles:** Hey, thank you for having me. It's a pleasure. I'm Gilles Chehade, working as a co-founder and, CTO at Plakar, which is a backup company. I have a long history in open source and, started an open source project, over a decade ago, which I turned into a company

**Matty:** Excellent. Well, that's, that's, that's the way to do it. We're gonna talk about something that nobody ever talks about, but everyone should, which is backups. When we started thinking about this topic, I, I'm gonna admit, [00:01:00] as someone who spent decades as a cis admin, it, it did start to bring back a lot of old memories of fighting with things like, Arcserve and tape libraries, which was also a bunch of stuff that was really cool.

I remember back in, you know, 20 years ago, oh geez, 20, 20-plus years ago, about getting our first tape libraries in our data centers that ... 'Cause how many times I, I used to, you know, have to go into the data center, go into the thing, change the tape, especially when you'd have a, a server that would have a backup that would take more than one tape. One, one, one of my absolute favorites was remembering getting called in the middle of the night by the, you know, third shift, computer operator who would say, "Oh, you know, Matt, the, the backup failed. What should I do?" It was like, "The same thing you do every time. Go and rerun the job." But, you know, he was bored and wanted to talk to somebody.

But yeah, we talk about all these old ways we used to back up and, and, and some ways not as old as that. And the, the world's different, right? Like, like the stories I'm telling about when I used to [00:02:00] have, you know, dozens of physical boxes sitting in a computer center and would need to back them up, and they had their challenges, but workloads are substantially different to say the least. So like what's, what's changed that changes the way that we need to think about backing up and restoring our data? I guess that's the other thing too. Every- I, at the beginning I said nobody ever talks about backups. I feel like we talk about backups all the time. Nobody ever talks about restoring the data,

**Gilles:** Ja, det, det

**Matty:** different problem

**Gilles:** That's the issue. Most people think of backups as a one-shot thing you do, and you forget about it until you are actually in a very stressful situation and trying to, to, to get out of it. And, it was fun when you say decades ago because that's when I started, like 30 years ago. When I f-- when I started working with backups, I was a student and doing some sysadmin gigs on the side to, to, like, manage to get, my weeks out just to go out with my friend and pay my, my beers.

And so I was usually doing s-- ad-- like sysadmin, installing stuff, installing [00:03:00] servers, and, and then people would no longer call me until they ran into a situation where whatever machine died, and they had to, to find a way out with-- of this. Yeah. And so this was a, like, a highlight that people never look at the backups.

They are very stressed because, like, they just have a copy somewhere that they never look at and, and, ex-- like, hope that it works when they actually need it. Yeah. And back then it was a very different landscape with where there was not a, a lot of virtualization. It was mostly dedicated servers that you would have, at, at a data center.

You would have, like, very concrete stuff, like hardware that you knew existed, for real. It would not just spawn and, and, and be, despawned on demand. And so it was much easier to, to work with that. But also, using old tech, which we assumed that everything was file system, you would get your, your, you would get a TAR and that TAR would be copied somewhere, or you would have it on a magnetic disk or a magnetic tape or, like you would deal with these units which are not, like, not suitable for, for our [00:04:00] new era of, highly dynamic stuff.

Yeah. As time progressed and you had multiple, layers of virtualization, you had the ability to, to auto-spawn, auto-scale, de-scale, and you had a lot of transient ephemeral, computes, that came with it. So that's o-one side where you could no longer say, "I have something. I know that it exists today.

I know it will exist tomorrow." It's, it's no longer like this. You c-- you, you have to sync your backups in a much, much, different way. But also, back then, like gigabytes and hundreds of gigabytes were the, were the unit. So it was, kind of, easy to wrap your he- your head around how you would cope with that.

You, you had less, like you had slower network, so it was still an issue to transfer a lot of things, but it was still manageable, volumes. Whereas now you have, terabytes is the new low unit. You have, lots, lots of companies that ha-- that go petabyte, scale. And so a lot of the things that you could do are now physical issues, that, that even if you had, the network, even if you [00:05:00] had, like every resource, the hardware resources that you need, you would not have the time to do it in the timeframe that you would expect.

So stuff like, having daily backups become an issue because you have to reason about this in a much, much different way. So yeah, it was not built for modern workloads and, a lot of, lot of, research has been done in that, in that area, but we still use the, the old tools because, backups is not-- absolutely not a sexy area.

No one wants to deal with that. Usually when you deal with that, it's because you've been tasked to deal with that, in a, in a hurry, let's say. And you try to get rid of your task as fast as possible and hope that you never have to look at it again. Yeah.

**Matty:** Yeah, I, I, I think about it too, that like you said, a lot of it was based on the idea that we're just sort of doing things, the file system, and even decades ago there were scenarios where that was not appropriate, right? You know, and two that, that come to mind, that I always think about were database backups, and we probably didn't spend a bunch of time thinking about that.

But even one was, you know, and this [00:06:00] is, this is, gonna trigger some pain as, you know, I spent time, as a Microsoft Exchange admin as part of where my job would do. And so when we think about... And Microsoft Exchange for people who are listening who don't know, is like a mail scheduling whatever. Now you'd just be like, "Oh, it's Gmail," or whatever.

But one of the scenarios that would come up with that was, 'cause if you were just backing up your entire data store of your whole mail system, that didn't really solve for the kind of problem you would run into, which would be, oh man, a user accidentally deleted their mailbox. You know, like you need to be able to restore.

And that was sort of like thinking about like kind of a block level backup about like how do you reason with a, with a more native approach versus just, okay. 'Cause, 'cause I guess there's... When we think about why we back things up, there's kind of two main reasons that you do it, right? One is disaster recovery.

One is like the system is jacked and I have to get it back. Something terrible happened or, know, we now living much more in the cloud, we don't run into this as more, but back in those data center days, we'd [00:07:00] say, "What would we do if our main data center in Chicago went south and we had to restore service to a data center in Columbus, Ohio?" And we would do fun things like disaster recovery drills and, and, and pretend. But then there's also when it's data has to be restored because something happened to the data, and something, sometime, oftentimes it's sort of like re- restore because of a system level problem, and then there's restore because of a, for lack of a better word, user level

**Gilles:** Yeah

**Matty:** You know, like we're like, "Oh man, know, we, we did this wrong. We have to, we have to put things back to the way that they were." There's sort of like restoring a system because it went south and then there's rewind time, you know? Right?

**Gilles:** And there's, there's a... Well, that's a fun anecdote. I'm not going to blame a company because anyway, it was a long time ago. But when I was, when I was a student and, and doing these, freelance gigs, I used to work for many small companies where the... basically the sysadmin is the, the only techie guy that's in the company.

And it's [00:08:00] usually--

**Matty:** whole tech department,

**Gilles:** Yeah. And, and the guy is supposedly not supposed to touch this, so he's going to give access to whoever request it. And if there's a, like, say, a director of something who's absolutely not tech, he's going to have full access to, to these things. And in many cases, I would go and restore stuff that were accidentally deleted because someone just typed...

Someone w-was not supposed to touch that data, a-actually typed a command that he should not have typed and wiped a entire set of, of data. And yeah, it's, it's a mix of, hardware failure, of, yeah, and human disaster, disaster skills, let's say. But w-what, what's, what's been turned to, like interesting situation for me is, is how the world evolved, in the last few years with, mainly AI, yeah, and r-and ransomware.

I'll do it in a other way. R- Just talking about ransomware first because when I was, younger, there was a trend about the crypto, cryptovirus, which was a new f- new field where people would, would not even talk about ransomware yet. It was just, well, you, you had these viruses that, that [00:09:00] were spread a-across the internet just for fun.

And people started plugging cryptography into it and, cryptography, not crypto as cryptocurrency, which... And, and so you had a new, new set of viruses which, which were like mathematically locking your stuff in ways that we mathematically did not know how to, to unlock them. And that, that created a new threat.

And when I saw that the first time, it was, like I have a book behind me, about this. It was a fun topic like, oh, that's a fun technical, technical threat now. But then it turned into the ransomware and people abusing this to get, to get money out of it, out, out of this. And, it was still a very, rare event when, when I was younger.

It was not something that would happen every now and then. But now you see that it's, it's so, so widespread. Like it's, mainly the main threat is that you're going to get compromised. People are not just going to, steal your stuff. They are going to actually use ransomware to, to lock you in and, and that's, sadly in the, in the France news that you, that you have these days, it's happening like every few months you're going to, to hear [00:10:00] about someone getting ransomware locked.

Yeah. So that, that's the first thing that changed drastically. And now we have, well, crypto, crypto viruses everywhere and that, that's the new world, yeah? Then on top of that, you add the, the AI craze that... which is, it's a good thing and it's a bad thing. They're, they're just like it's a balanced, balanced topic, yeah?

But the thing is that it enabled a lot of people to, both administer their, their infrastructure without having to understand all the pieces of it, which means delegating a lot of tokens and, and allowing The, the agents to do far more than they should be able to do. But coming from a generation we did not necessarily have the, the general, understanding of the threat, the, the risk that come with that, yeah?

And then you have the fact that a lot of code is being produced, to man- to manipulate data, not, not just a code. Like, not just a bit of code that you would put on a compute with no, no side effect, but code that's actually going to access databases and write to it, and allow queries coming from external users to actually hit your database.

And this, this can lead [00:11:00] to, to, yeah, funny situations where something that you assumed would be correct code would actually, enable, like a bug to destroy data and stuff like that. And this, again, we heard a lot about this. I mentioned, I was on a-another podcast recently where I mentioned that the head of security-- of AI security at Facebook had posted publicly about her mailbox being wiped while she was having a lunch because the agent decided to just delete the data in it.

And, and having that access, like that link between AI and your data i-is, increasing the risk that, that you get data loss, yeah. Because usually what you... Well, usually. In the past, what you would assume is that your data gets lost because you get com- you get, an incident, like hardware dies, or you get, compromission from, from an external threat.

And so you will, you would like try to mitigate stuff and make the entrance cost to your data, elevated by adding layers and layers and layers of, like a protection between the outsi-outside world and your internal data. But now the agent is running internally, so you get the same threats, [00:12:00] but you, you get it from inside and you have to, to, to guard against it the, as if one of your users would be the one deleting, your data, which is, a very, very different threat model.

And, you can no longer reason in the terms of how much money I'm going to put, to higher, higher the cost of a, of an external attacker, because now it's an internal cost and it is going to be borne by, by everyone inside the company, yeah. Then, yeah, there's the climate stuff. I, I was, talking to admins at ADC recently where the heatwave actually caused a lot of disks to misfunction.

So this is a new thing that was not even in discussion before. And, and of, of course, war, which is, which is an active topic for us since we've been contacted by people that had data, in data centers that were struck by missiles. So not the kind of stuff I would hear about, a few decades ago.

Not, not that funny, but, yeah, interesting. Interesting, nonetheless.

**Matty:** So yeah, it's that, that threat landscape has, has changed substantially, right? You know, we, we, we [00:13:00] think about, different things, and it, it seems like almost every day, you know, there's some, some story about, "Oh, I accidentally... You know, my, my AI agent accidentally dropped this table in production," and things like that.

And that's not a thing you solve with backups, but, but then oftentimes how many times the, the next part of the story is, "And I didn't have it backed up because it was a POC," or, "I never properly operationalized it or anything." And that's a... That is an entirely other topic we can probably talk about on this show, which is how do you get, 

**Gilles:** But,

**Matty:** do you get, your AI teams to, or enable teams to think about productionizing, apps?

But it, it happens a lot, right?

**Gilles:** I, I would agree that you do not solve that with backup, but you have to reason about your backups in a different way. Before you would say it's, it's unlikely that I lose data 'cause it takes, like there, there's very-- There are statistics about that, yeah. But there's very low statistics, very low odds that you will lose hardware this year if you have enough, of-- enough redundancy.

And, there's, low odds that you're going to be attacked [00:14:00] if you raise the bar to that level so that an attack actually costs more than that to, to succeed. But these, these odds change drastically now, so it's no more, "I have low odds that it's going to happen." It's just, "It's going to happen." And so now you do not have any other defense than to, to do backups before s- like before running an AI and, having a plan in, in case, this deletes something.

Like you, you move the threat to, to an actual, expectation. Like it's going to happen. And so your only way out is I need to, to be sure that I can recover when it happens, and no longer in case it would happen in the next two years.

**Matty:** So I think we've done a pretty good job of talking about why everything is terrible and everyone should be scared as hell and everything. We're not always here just to tell you that, that you should just, you know, go, retire off to a kettle, and raise, raise chickens in Montana or something like that.

So let's think about how we can, we can solve this problem, right? You know, and it, it's, not quite as simple as just saying... Again, let me, let me just sort of throw... You know, first of all, because [00:15:00] the, the, the landscape is different, right? I'm not gonna just say, "Okay, I'm gonna install some appliance in my, you know, in my data center."

You know, I have lots of different, different ways to think about it and lots of different requirements. So, like, what, what are the ways people can be reasoning about what, what solutions do we have out there? How should we be thinking about this?

**Gilles:** So, I think there's two, two ways to reason about backups and, and more than backups, it's data resilience in, in a sense. The first one is that people, usually do not quite, categorize their datasets. So it's more of a, yeah, I have machines, I will back them up, and they're all backed up with the same kind of level.

So this, this, like in many cases I worked, this caused a lot of issues because the, the amount of data is huge. And, if they are not categorized, you, you spend as much to back up everything. And so the cost rises, and you actually can't back up as often as you should the more sensitive stuff because you're also capturing the stuff that's, le-less sensitive, yeah?

So the first thing is categorization. It's, actually sitting down, with an inventory [00:16:00] of all your data assets and, putting a weight in, in front of each of them, with regard to how critical they are and how much effort you should pour into making sure that, you can restore them in a, in a certain timeframe.

So some data, if you lose one hour, it's not the same issue as, as others where you, you actually can't lose even, 10 minutes of it, yeah? So that's the first thing. The second thing is, is, like an observation that, when it comes to infrastructure and, and DevOps in general, we managed to build very resilient infrastructures where you would ac-actually have, Some, inventory of some sort of what you should have, a reconciliation loop, which actually matches reality a-against what you expect to have, and then, possibly a, a fix for a human intervention to actually, like reconcile and, fix the gaps, yeah?

But that's n-not, absolutely not what we have in data protection. Usually do that be-because compute you can spawn and despawn, and you're basically good. But when it comes to data, you, you can't just do that. First of all, because the datasets are harder to, to capture. It takes a few [00:17:00] milliseconds to just, despawn and respawn something.

If you have to restore a terabyte, it's not going to be the same. So there's that, and there's the fact that, it's usually tackled as... Again, it's not a sexy topic, so it's usually tackled on the side, using whatever hack you have to, to actually get things done, yeah? And so, from my experience, what you have is, is absolutely not an inventory.

You will, yeah, you will basically note a few machines that you should have backups of. You will not have a loop. You will have a cron job, or you will have a standard timer or whatever, just running whatever task. The conflict detection between, between reconciliation loop and reality is often a report that you will get, and a human will have to look into it to see, oh, this, this should have worked, and it did not work, so I will do it.

And in many cases, the restore is, is much more painful. The restore and validation that the restore would work is much more painful than the actual backup. So it's easy to do the backup, trigger it, and, and be done. But actually making sure that the backup has been tried and restored and at least checked in some way costs so much more than to do the backup that it's [00:18:00] usually not done.

Like it's either we'll do it whenever, like whenever we can If we even do it. And, and this is not just to, to, like to ex-exaggerate the thing, 'cause I've been in many talks with many people and across the, the, the various meetups. And if I ask how many people check their backups, usually there's like if there's two hands raised in the room, that's, that's a big thing, yeah.

And, and the final thing that this is a one-shot thing. Like if you do backup check and, and restore, it's usually not in a loop when it should be in a loop because that's what you would do with Kubernetes, for example. You would have your reconciliation loop not, just a one, one shot, lookout a-at how the set of things, yeah.

And so there's, there needs to be a model, which we try to standardize ourselves, but not thru-- not only through our product. I think it's really a standardization of a process which would be resilience as code and, and what, what would be expected from that loop. And that loop should be, you should have an inventory.

That inventory should be the same one as [00:19:00] the one that you have to spawn and despawn your machine, so it should reflect reality. 'Cause otherwise, if you have a, like your production, inventory on the side and you have another file on the, the side that has a few machines that were written by humans, about what should be backed up, the thing that's going to happen is a drift, and the drift is going to be, the, the wrong inventory being used at the worst time.

So it should be the same, same inventory. So assuming I'm using, I'm using Ansible, for example, the A- the Ansible inventory should be the one that's driving my, my resilience as code, workflow. If it's kube, it's going to be a kube inventory through s- like s- scanning of, PVCs and then computes and whatnot.

And if it's something else, AWS, for example, it should be an inventory of AWS compute, compute resources, and that should be what dri-drives it. Then you should have a set of policies about what should be backed up, how often, and, and, the retention of it. Like any backup I should do should be kept for as long and that my policy for, for anything in my inventory, so that anything that evades this [00:20:00] should be detected, through a reconciliation loop between reality and your policies, yeah.

And then you, you should have a fix, which is, either this can be automated or, well, a human has to be, like in the mix. And that, in one of the talks we did was tied to a GitHub CI. So the GitHub CI would break whenever you, you actually have a mismatch between reality and expectation. And that, that regardless of the so- the solution, even if you are not using the one that my company builds, should be the, the basic workflow to at least align you with what we excel at doing with, Infra as Code.

**Matty:** That's what I was, I was just gonna say. Like, it seems like, you know, and I'm a big believer in, infra code, policy code. I mean, hell, I- the, the, the app that I use for tracking my workshops is wor- or not workshops, my workouts for my lifting is this thing called Liftasaur, and it's, it's like workouts as code, right?

You know, which, which is, which is awesome.

**Gilles:** So if, if you don't work out, you break a CI?

**Matty:** Well, oh no, see, a- see, there, yeah, there's a feature request. That's, that's, that's the thing. No, it's just that the, I [00:21:00] create like, you, you write in code kind of the like your progressions and everything like that and, But anyway, the point is, so yeah, but, but, but backups, right?

Not really being thought about that way and, and, and trustable and having those configurations, it's still, still too much click next. So, tell, tell me a little bit about your solution for this though. Like, I think people should be aware. You know, you have a project, you have, you have some, some, some primitives that, people can use.

I think, 

**Gilles:** Ja

**Matty:** people would love to hear about it

**Gilles:** So w-we have two projects. I'm going to, to explain a bit the story of that project. It, it's a project that sta- that started as an open source project by myself, on the, on the topic of interest, which was how do I m-- how do I deduplicate the large amount of copies of the same data that I have on my machines and back them up?

And, and you will... I think we'll reflect on that. I have, whenever I change machine, I copy the home directory on my machine to the new home directory on my new machine. And I have, nested the structures of similar data which, which, which are really painful to, to [00:22:00] navigate through, yeah. And whenever I want to back them up at various places, because I tend to have backups at two or three places, well, these amount to extra cost, like a lot of extra cost at various providers, for the same amount of data, yeah.

And I was looking into what were the solution, did my own-- I did like three or four, different software solution that I would use myself that were not meant to be public, and then came up with, Plakar, which is the solution that, that I, I released, which is an open source project that meant-- that allows you to actually back up using compression, end-to-end encryption, and deduplication at the source, so you do not have to trust the, the disk provider.

So I could host at, say AWS, trust them to provide, like the storage, but not trust them to actually not look into my data, for example, yeah. And that's one of the thing. And then the other thing is that I have a lot of different, datasets, coming from various software, and I don't want all my datasets to look like file systems because that's just not how it works for me.

So it had to provide an abstract representation that I could [00:23:00] write connectors for and write various connectors that are not necessarily FS-based. So, file system, S3 database, like we have 30, 30 or so... I can back up my Kindle on it, so just to show you. 

**Matty:** okay.

**Gilles:** it's a lot of different things, that, that you can write connector very easily for.

Software is open source, under, ISC license, which is similar to BSD. So you can fork, you can do whatever you want. You can actually build your business on top of it. That's, that's free. We have an SDK that's public, and you can write your own integration that you can keep for yourself or distribute to com-community as source or as a closed binary.

So it's very, very, let's say liberal on that, yeah. And then we have built a... So th-- Oh, sorry. Before I go into that, this is a tool that's meant to be used by everyone, geeks, small businesses, and like, whenever you want to do your backups, you can use that. Whenever you enter bigger companies, you have a lot of regular, regulatory stuff that you have to da-deal with.

Most notably the fact that users do not have the same roles, and some may be [00:24:00] able to do backups and others may not be able to even look at the backups, but they should be able to control that a backup was done. Stuff like that, that, that, introduces multi-users, multi-tenant so airbag, as I said.

And, this, gets control-- This is our control plane, basically, which is not a specific version of our open, open source stuff, but more of a different project that's proprietary, but that, allows you to control the open source stuff in a, in a, like a huge, huge, networks. Yeah, network and with a lot of people, yeah.

And so that tool is API controls. So it's built as a... You have a nice UI and stuff, but the UI is a client of the API, and the API is the one that you would use with, with an Ansible collection or a Terraform provider or a kube op- operator and, and that's how we, we ship our, our tool. And so with that, you have a lot of APIs that lets you plug into a CI, so that from, for example, the CI could check the status of jobs and check the status of policies and, that resource, does it have a policy?

Is it covered by the policy? Did a job cover this? And [00:25:00] so should I turn, a few, let's say, lamps green or red, depending on the, the current state of things. So that's, that's, the product that we're actually shipping. And the product is, is free, under one tera. For example, if you want to, to try it, you're, you're not going to have the source on that.

That's the only specific component that, we ship that's closed source. Everything else is open source. That one is, is closed source. But you still get a free plan, and the free plan lets you manage one terabyte of, of processed data. And then, you can extend it to, to whatever direction you want. If, if you want to use the UI only, well, UI only.

If you want to go, full, infra as code, you can

**Matty:** Fantastic. And now, so the product name, and I, I wanna make sure I say... I'm gonna have you say it because I'm not sure how to pronounce it, so

**Gilles:** It's Plakar.

**Matty:** Plakar. Okay, yeah,

**Gilles:** Yes

**Matty:** Plakar. So the- your website is plakar.io. It's on GitHub. We're gonna put the links, to the GitHub repo in the show notes so everyone can check that out.

But yeah, like you said, you know, there's, there's tons of integrations which goes back to, you know, we were talking about in the very beginning about [00:26:00] back, you know, I don't see one for Microsoft Exchange, but

**Gilles:** wait. We, we're-- Yeah, but we have one for Microsoft Active Directory.

**Matty:** Active Directory. Yeah, yeah. I mean, no, nobody's running Exchange anymore. They...

**Gilles:** yeah

**Matty:** say this, and I'm gonna get someone to be like, "You know, we still have..." I always joke about one of my most blog posts is still this thing I wrote, God, I can't remember how long ago. It had to be almost 20 years ago, about configuring SharePoint Server 2003 in a one-way trust scenario, and the fact that people are still reading that blog post makes me sad for folks that have to deal with it.

But yeah, there's, you know, connectors for Postgres, MySQL, the various blob storage thing, you know. So this is, this is very, very cool. People should definitely check this out, and, and again, you know, we're, we're big fans in, in this show of, of, of everything as code. So I think that's, that's, that, that's, that's really rad.

As we wrap up, if, if there's one thing that you want people to take away and say like, "Okay, cement this and, you know, tattoo it on the inside of your eyeballs about thinking about your data [00:27:00] protection," what's, what's the thing that, that people should, should go... You know, first thing is go check out the Plakar repo for

**Gilles:** Yeah, of course.

**Matty:** after

**Gilles:** Now,

**Matty:** that

**Gilles:** s-secondly is really to take this into, into consideration that you should have backup regardless of Plakar or anything else. You should have your backups because I, I have a lot of horror stories. I've not shared a lot of it here, but, I-I've seen company close because they lost the, the wrong co...

They had no copy for the most critical part. That, that has happened. And, that it happened to a lot of people around me, and I'm just one guy. So I'm sure if you ask around you, you will find people that will tell you they lost something. And a big part of the, the cloud, era is that we have a assumption that, cloud providers store backups.

That your S3 buckets is a backup. It's not the case, and, it's not uncommon that you actually lose something there. It's just that there are so many users that you, you f- you see the stats are being biased. Like it happens to no one, yeah, but well, when it happens to you, you're going to be very sorry if you do not have, copies.

So you should actually, [00:28:00] like do an asse- assess- assessment, sorry, of your data, be it your pictures on Google Photo or your, personal bucket and stuff, and just wonder what would happen if I lost that? How, how depressed would I be? And that, that should be enough to s- to tell you, "Okay, I should do my own backups, and maybe I will never use them, but, like I will, I will feel, a bit more comfortable and relaxed if I know I have them."

**Matty:** I, I, yeah, I, I feel like that's, that's sort of the key in so much in the consumerification or, or where that comes in and people think about. And just even in, at the consumer level, and even us as technologists probably misunderstanding. I mean, I, I had a conversation with, with, with my ex the other day.

She was,... She's like, "I don't understand why I don't have any room on my iPhone." And by the way, I'm not talking trash here. Like, this is a common thing. She's like, " 'Cause I have it all in iCloud and, and my photos." I'm like, "Well, it doesn't move them over there." And it's, even that is not really ... I mean, it's a point-in-time backup, right?

You can say, I wanna go to that, but if you accidentally deleted a ph- a photo three weeks ago, it's, you can't [00:29:00] really, you know. So we, it's, it's, know. It,

**Gilles:** a really a

**Matty:** we as technologists think that we're immune to that, but we make those same kinds of

**Gilles:** Yeah. It's really a false sense of, of sec- of security in the sense of, not losing your data. But, people who have lost them have been feeling very sorry about this because they, they write it, they write, "We are not going to back up your data. Shared responsibility. You have to do your backups because we can't necessarily restore."

And the day it falls, upon you, you are like, you're helpless.

**Matty:** Yep. Fantastic. So, everyone, if you head over to arresteddevops.com/modernbackups, that will have this episode show notes, with, with, lots of helpful links. And if you visit arresteddevops.com/itunes, you can leave us a review in the Apple Podcast store. That helps other people find the podcast. I might even read them sometimes. You can, find us on Spotify, iHeartRadio, Audible, all the places that fine and less fine podcasts can be found. So thanks so much, Gil, for joining me today. This has been a great conversation, and maybe scared me a little bit, but that's a [00:30:00] good thing.

**Gilles:** I did my job then.

**Matty:** This has been Arrested DevOps, and remember, there is always DevOps

**Gilles:** In the banana stand
