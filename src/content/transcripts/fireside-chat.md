**Bryan:** [00:00:00] We're a couple of apathetic Xers, right? I mean, we're just like— community sense is something that you make fun of on The Simpsons, as far as we're concerned, right?

**Bridget:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude. This episode is sponsored by VictorOps, the company that makes being on call suck less. Built by a team of avid DevOps practitioners, VictorOps is the most innovative platform available to support modern IT and DevOps incident management. They do it with an unmatched feature set that's designed to support teams through the entire incident lifecycle, from first alert to final retrospective. This means you can respond to incidents more effectively, which in turn helps you release faster, minimize downtime, and get your life back. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention Arrested DevOps, and you'll be eligible for some great discounts too. Welcome to Arrested DevOps. Episode number, I have no idea, and we haven't actually come up with a title for this. Containers and some containers and something.

**Bryan:** [00:01:43] I think we'll figure out the title as we move along. The title will reveal itself.

**Bridget:** Title will reveal itself. Excellent. So I'm here with— I'm very excited to have guest on the show, new guest, Brian Cantrell. Let's see, I'm gonna go with CTO of Joyent, agent provocateur.

**Bryan:** Perfect, nailed it in the fewest possible words, I think.

**Bridget:** So tell us a little bit about yourself, Brian. What have you been up to?

**Bryan:** What have I been up to? Well, I just got— we just had HashiConf last week. So this is kind of my most immediate term, which is a very interesting conference. It's fun. They have— I like that kind of the HashiConf not just ecosystem, but dare I say zeitgeist. You know, there's kind of a way of thinking about the way things are put together. And they had like 500 people there or something like that. I mean, a ton of people, um, and a great crowd. Um, I got privileged to be able to give the closing keynote, which was a lot of fun. So yeah, it was great.

**Bridget:** I saw Kelsey Hightower tweeting about that. It looked like a lot of fun.

**Bryan:** [00:02:45] Kelsey was live tweeting it, which he says he does not do. Yeah, exactly. Which is, he says he does not do very frequently. I took it as a That's a huge compliment. I did take it as high praise. And no, it was fun. It was fun to be able to— I kind of referred to his talk earlier in the day. And it was fun.

**Bridget:** Tell me about this swapping of slots. I saw something on Twitter about how you and another keynoter swapped slots. So you weren't always going to be the closer? Did you just kind of go like, keynotes are for closers. I'm going to do this?

**Bryan:** No. No. I feel that that was their idea. I think that he— I think some of the other folks at Hashi were like, you don't want to follow a control group. And I don't necessarily take that as praise. I think that's more just like, look, this guy is just manic and you want to— so I think he was pretty comfortable and he had a much more technical presentation, to be honest. So I think it was fine with me. I mean, just totally greedily, I was able to get an additional 15 minutes out of it. And I knew I had 30 minutes for me. 30 minutes is a bit tight, especially for the amount of content that I wanted to present.

**Bridget:** [00:03:51] So it all worked out.

**Bryan:** It was great. And it was, again, a great crowd, fun to kind of go out with a bang, fun to actually show— I had a prop for the first time.

**Bridget:** Wait, a prop?

**Bryan:** An actual physical prop. What? I had a 3.5-inch floppy that I used to send the point home about hardware virtualization. And I just feel that that 3.5-inch floppy, I mean, kind of the current rising generation of technologists, certainly, I mean, if you're 22, 23 years old, you have seen a 3.5-inch floppy.

**Bridget:** Probably not really used it.

**Bryan:** Probably feel like they kind of fell out maybe 10 years ago, so you probably used it like in middle school kind of a thing. But that will not be true in another like 5 to 8 years. You are going to get a generation that does not know what it is at all.

**Bridget:** And this is kind of the— I mean, complete tangent of all of our icons. Like, what is this picture that means save?

**Bryan:** Absolutely. It's, you know, it's, it's a skeuomorph. If you're not— one of my favorite— I mean, it's like, God, I gotta love English. Yeah, exactly. I love English that we have a word. We actually have a word for this. Um, it's very skeuomorphic. Uh, it's, it's like the wood grain panel on the side of the station wagon. It's the—

**Bridget:** [00:05:07] but it's the wood grain that doesn't exist.

**Bryan:** It does not exist at all. No, it is. And it's going to be, um, I mean, it, it's, it's kind of funny, these things that we hold on to long after they've, they've out— long after the artifacts themselves are gone.

**Bridget:** Yeah, I was, I was on a city bus with a friend's child a couple years ago. At the time, this little girl was 5. She looked up at all the things that were forbidden, you know, and she said, no eating, no drinking, no bench.

**Bryan:** Right.

**Bridget:** She had no idea what the boombox was.

**Bryan:** Right, right, right.

**Bridget:** Like, no couch? Like, what is that? Right. I was like, oh dear.

**Bryan:** Right, it does kind of— yeah, I thought about that, that actually has got no meaning. And you look at it, you're like, what the hell even is that thing? That's like some sort of like cybertruck Mickey Mouse or something. It's got like the— yeah, that makes no sense. It's true.

**Bridget:** Yeah, so this is the stuff you were talking about at HashiConf, and just based on the stuff from the live tweets, I mean, I didn't get a chance to watch video of it yet, though I assume that that's coming real soon now, TM. But I know you've been talking a lot in the last year or so about the future of fill-in-the-blank, containers, virtualization, platforms, operating systems, kernels, right, in their large and small forms. So, like, do you want to give me the Brian Cantrell magic 8-ball?

**Bryan:** [00:06:30] Right. Dangerous. The Brian Cantrell magic 8-ball, I think, is hot to the touch. Yeah, I mean, I think from my perspective, I think the big kind of difference between where we are now and where I feel we really have to get to is right now, containers, by and large, not a joint, not with Triton, but everywhere else, containers are currently running in virtual machines. And it's a layer that we don't necessarily see. When you go to provision on EC2, when you go to provision in VMware, you don't necessarily appreciate that there is this layer between this guest operating system that you've just spun up and the actual hardware. And indeed, there are lots of things that even hide that even further. I mean, if you're using Kubernetes, if you're using ECS, if you're using BOSH, if you're using these other kinds of higher-level orchestration things, you're even further off of the VM layer, and you don't even know that it exists, right, to a degree, right?

**Bridget:** I mean, that's not necessarily a bad thing.

**Bryan:** No, no, that's a great thing. But you've kind of forgotten it still does exist. And for my— I'm talking about, you know, skeuomorph. I do think that VMs are skeuomorph. I think that we— and, you know, I was featuring the floppy because to remind people that, your VM has a floppy controller on it. Like, all of these, you know, modern container architecture, yeah, but you've got these incredibly legacy devices that have no place in kind of this modern future. And I think worse, it's not just kind of an aesthetics issue. There are resource inefficiencies that when you are— when the hardware is provisioning a virtual machine, and then the virtual machine is provisioning containers on top of that, We don't use our hardware resources efficiently, and this can't last forever.

**Bridget:** [00:08:18] No. I mean, like the talks you were giving last year about polar ice caps. Right, exactly.

**Bryan:** Right. It can't last forever because it's too inefficient.

**Bridget:** But then what people come back and say, and I know that I saw some conversations going on, is sure, maybe we all wanna get to this exciting world of unprivileged containers. I know, you know, like, people are doing work in the Linux kernel. I know Jesse Frazell and others have done work in this area. But do we consider that to be production ready enough that we can actually run the containers without something else putting a security layer around it?

**Bryan:** Right.

**Bridget:** And so in some people's cases, that could cause problems.

**Bryan:** Sure. And this is why I'm very much talking my book, because as the VCs say, because in SmartOS and Triton, we do run containers securely on the metal and have for a decade plus. And the whole design center, this is really in contrast to the Linux design center. The design center was around making container zones completely secure, completely isolated from one another, and the ability to run those in production. And that again was the design center. In my experience, things really have to be designed for production. And if you look at some of— I think it is a contrast, honestly, between the way that zones are developed and the way that Linux containers were developed. And when we say containers, we really got to throw some air quotes on that, right? Because it's not containers, it's namespaces, right? And that's the—

**Bridget:** [00:09:42] yeah, cgroups and namespaces.

**Bryan:** And the cgroups we're doing, the resource It's the namespaces that are doing the isolation, and the namespaces are really taking this— are cutting across the system in a lot of ways. It doesn't have the same design center as jails, as zones, as the OpenVZ containers. I mean, I think that the—

**Bridget:** let's just go back to Chroot.

**Bryan:** Right, exactly. Well, and I think it's a real— it is a real difference, and you see that in other parts of the stack as well. I mean, I think you see that if you look at the contrast between Btrfs and ZFS. I mean, ZFS Was—

**Bridget:** we have to talk about ButterFS.

**Bryan:** I think I did just bring that in here. I think I just opened the door and let that scent kind of waft in. What I think that the difference is that ZFS and DTrace and Zones all came out of that same kind of period. And that's the same zeitgeist that we had around designing for production-ready on day zero. And the difference between a facility as it's born and a facility over time is not production ready versus not production ready. Um, it is the, it is the scope of features. In other words, you, you always are ready for production. It's just that, that you, you slowly over time add more and more features.

**Bridget:** [00:10:56] And it's also where you've made trade-offs.

**Bryan:** Yeah, absolutely.

**Bridget:** Like, we can— those of us who may or may not have spent a fair amount of time in the Solaris and SunOS and BSD worlds may rail against Linux is, say, TCP stack. But guess what? Even if mostly we only run Linux when people pay us to, it's still won. Like the mass market commoditization of Unix is Linux.

**Bryan:** That is absolutely true.

**Bridget:** It kills me to say that, but it's true.

**Bryan:** Well, it's true. And I think our view is that, all right, look, what won, true. And when you say, I mean, it's really Linux and x86 that won. I mean, that's the reason that won.

**Bridget:** From our perspective, how precise you are.

**Bryan:** From our perspective, what won is the Linux binary interface for sure. And now that that has— and this has been true for the last really half decade, if not more— because that binary interface is so settled, it actually now allows us collectively to go innovate underneath that. So what we've done with Triton is we've implemented a Linux system call table for SmartOS. So you can run your Linux stack in a Triton zone. You get a Linux, what we call Linux infrastructure container, looks, feels, smells like a virtual machine, but it's actually a container running on the metal. And so, when we did that, I think it felt a little insane to a lot of people.

**Bridget:** [00:12:19] When does that ever stop you?

**Bryan:** That definitely does not stop me. That actually only encourages me. I think I'm a contrarian at such a deep level that if everybody agrees with me, I almost get uncomfortable. So, no, that definitely empowered us. But I think what's interesting is Since we did that, if you look at FreeBSD and then you look at Windows, they've done the same thing. And I mean, FreeBSD had kind of a Linux emulation that they kind of took off the shelf and have started to modernize. It's the Windows thing that is really interesting with the whole Drawbridge thing and actually getting— they've done effectively what we have done and allowed Linux binaries to execute on a Windows kernel, which, like, Bash on Windows is not something I thought I would ever hear in a sentence or see happening, right? No, I'm accustomed to bashing Windows, not running Bash on Windows.

**Bridget:** I mean, yeah, it's actually a really exciting new world. Like, in some ways, we live in the oppressive cyberpunk dystopia we were promised, right? But in other ways, it's like, wow, it's kind of an era of peace and love and understanding. It is. Age of Aquarius is finally upon us.

**Bryan:** [00:13:21] The age of cyber dystopian Aquarius is finally upon us. No, I think you're right. I think, and I think you're right on both counts. I think that, um, you, you're— that certainly one can find dystopian elements, but I think that broadly, and I do think we are still struggling to internalize the degree to which open source has won an unconditional victory. And that is what has really won, is open source.

**Bridget:** When you see Mark Russinovich sitting up there saying, you know, at a conference saying, yeah, we really would like to open-source Windows. Right. That's just like, whoa.

**Bryan:** Yeah. It is a whole new universe. And one of the things that's most interesting about the container ecosystem as we see it today it is all open source. There is nothing proprietary anywhere. Now, I mean, for all of these rivals, you know, kind of Kubernetes versus Docker Swarm versus the HashiStack versus BOSH versus whatever, all of this stuff is open. What it means is you're going to get, from my perspective, one, it means that what is actually won is open source. Two, it means that we're going to see a lot of cross-pollination. I think that we're going to see more of what we have been seeing where, I mean, another thing that we did that people thought we were kind of nutty for is implementing the Docker Remote API. So having Docker without having the Docker Engine.

**Bridget:** [00:14:44] Nutty or prescient?

**Bryan:** Nutty or prescient, exactly. One person's nutty is another person's prescience. Certainly, we've been insane and wrong, but on this particular account, I think we were insane and right. I do think that a lot of others have followed suit, and a bunch of others that didn't follow suit have You know, said private, boy, I wish we had. And we should be able to separate API from implementation. And I think people think that, you know, committing to an API or an ABI actually stagnates things. And to the contrary, it's only when we commit to those things that we can go innovate in the engine itself and really begin to actually, like, you should be able to compare, I think, should be able to compete on the engine without actually breaking everything up stack.

**Bridget:** Now, so, and this is all leading to, of course, the last few weeks of the giant controversial questions in the container ecosystem. So prognosticate, what's your opinion of the rumored possible Docker fork?

**Bryan:** [00:15:48] Yeah, so the Docker fork, I think, is interesting. I mean, first of all, I think that in general with forking, people shouldn't talk about it. Just do it or don't. And so to me, there's a little— there's a degree to which I think that some of the folks kind of talking about it are deliberately trying to goad others into doing it.

**Bridget:** Or maybe test the waters, find out what public sentiment is. I mean, there could be all sorts of stuff going on in terms of—

**Bryan:** Sure. But I think code speaks volumes. I mean, so I think if you want to fork it, go fork it. So, there's a part of me which is like, this is just a little bit of chattering as opposed to actually doing. I think that to me, I would rather focus on getting that, and I do think that Docker Inc. has vacillated on this to a degree. I think we should demand a relatively stable Docker Remote API. I think that that allows for alternate implementations, that allows for— because I think forking the Docker engine per se, is probably not the right path. I feel that, I mean, I would rather see de novo implementations that implement that API, I think, are stronger.

**Bridget:** [00:17:08] But well, and what about, I mean, just like the idea of the OCI image format being kind of this phantom thing? Like, is it really the Docker image format at this specific rev on this date? Like, what's the image format that everyone is theoretically adhering to. Right.

**Bryan:** I think that there's a lot of straw man drawing around that as well.

**Bridget:** And I think it matters to people's implementations.

**Bryan:** Oh, it definitely matters.

**Bridget:** We care in the Pivotal ecosystem and, you know, Red Hat cares and a lot of people care.

**Bryan:** Yes. And I think there's a lot to kind of still be worked out there. And I think that one of those, one of the crazy elements of the world we live in is that you have these initiatives where you've got a lot of people putting a lot of money on, betting a lot of money on one horse or another. And yet it's all open source. So that ultimately to me kind of trumps everything. So, you know, yes, the de facto standards are great, but I can also go like just look at the source code. So we can actually go fork it if and as needs arise. And I mean, I think that Docker has become, it has obviously become a de facto standard from a container format perspective. I think it's a lot more to be determined what's happening in Substack. And I think also, you know, everyone has kind of assumed in you kind of hear companies talk about, oh, the next VMware, it's like, well, VMware existed in a proprietary world, there might not be a next VMware at all. I mean, one of the things that I wonder is like, well, I actually think that, you know, historically, and if you go out to VMware, have you ever been to VMware's corporate campus in Palo Alto?

**Bridget:** [00:18:45] I have not. I went to VMworld last year. What I learned is that they put Vs in front of every word.

**Bryan:** They do put Vs in front of every word. As is a corporation's wont, if you go to VMware's corporate campus in Palo Alto. It is beautiful. So it's up by, up like near where Xerox PARC used to be, kind of up in the hills there. If I were VMware, I would never have a customer go out there because it's such a beautiful campus. If you're a customer, your first reaction is not like, wow, this is beautiful.

**Bridget:** It's like, how much did I pay?

**Bryan:** Exactly. It's like, so my last license on it was to like pay for your lawn.

**Bridget:** It's like, what they should do is get goats. Isn't that the thing that Palo Alto people do now? They get goats to like eat the lawn. I think that it's like ecologically sound and doesn't cost as much, or maybe it costs way more, but you have less guilt.

**Bryan:** I guess, right. The— I think that maybe some goats on the lawn would just, you know, maybe a broken window or two, something to like imply that they are on— that they're not taking all of that, this kind of rich proprietors off of revenues and plowing it into groundskeeping.

**Bridget:** [00:19:50] Because I think you're right that there's not a single proprietary answer or whatever to any of this stuff. Because I know I go out and talk to a lot of customers, and I talk to a lot of people in the ecosystem with similar jobs that are customer-facing that also go out and talk to a lot of customers. And as far as I can tell, the customers are focused on the stuff they're trying to accomplish. And they pick a technology and a partner usually to work with because it meets their needs for however they're describing their needs when they figure that out. Yes. I don't think that there is, and I work at a vendor and I'm still gonna say it, I don't think there's a right answer for every use case.

**Bryan:** There's definitely not. And I mean, God bless technologists who are still out there just making the right decision because I think one of the things that I want people to not fall into is there are a lot of vendors talking a lot and people are talking their agenda. And, you know, the people that are talking like ginning up a Docker fork, you kind of take those people apart, and they've got their agenda. Like, they're not wanting to fork Docker because they've got a problem to solve. They're wanting to fork Docker because they've got a solution to—

**Bridget:** [00:21:03] I mean, it's open source, but if not sell you, then at least, you know, or like, I mean, because we don't have to beat around the bush, right? I mean, this is— you're Mr. Controversy, so I can say the word Red Hat, right? I mean, Red Hat, we know that they carry a lot of patches for their customers who want to use Docker stuff. And yeah, these patches aren't making it upstream. And is that because the patches lack technical merit? Or is it because the patches further an agenda that people upstream don't want? Like, these are political questions that have to do with people's revenue.

**Bryan:** Absolutely. And of course, then you also have the question, I think whenever you're asking what someone's intents, you I mean, I am a much stronger believer in incompetence than malice. And that may be— I don't know if that makes me wise or naive. I just feel that incompetence is much more widespread than malice. And patches might not be accepted because, like, by the way, there are like 20,000 issues on these repositories, and I don't know how they keep track of anything ever.

**Bridget:** [00:22:05] Or, I mean, this is a conversation I've had with your coworker too. My former coworker, about people who come into your project and wanna drop some code, and you're like, where are the tests? And what does this accomplish? And I think that it's— I've seen some funny tweet about somebody saying, like, you know, adopting, like, a patch in your open-source ecosystem is like adopting a free puppy. Absolutely. You're gonna— Jess Rosell has a wonderful The Art of Closing blog post where she talks about You have to say no to this stuff if it's not something you want to support forever.

**Bryan:** Right. And I think you need to understand what's happening. I mean, I do think that one of the challenges that we currently have— and certainly we wanted this in both sides of Joyent. We open-sourced our stack. The operating system was always open-sourced, but we open-sourced the balance of our stack almost 2 years ago. And one of the things that took us a while to figure out is open-sourcing the stack actually was not enough because we had not open-sourced the design discussions. The design discussions were still happening in hallways, chat rooms, what have you. And what we realized, you know, about a year into it is we actually need to be open sourcing our thinking, not just our code.

**Bridget:** [00:23:20] The code is actually like the last thing that happens because the code is the result.

**Bryan:** The code is the result of the discussions. So someone has the decisions, and I mean, like, code is in that integration. Is the last thing that happens. And I think that sometimes people are like, well, I'm giving you the punchline. It's like, I don't even know the setup. Like, I don't even know this is like—

**Bridget:** so somebody walks in with code and you're like, what is this? What?

**Bryan:** Right. And I think that, uh, so one of the things that we did that I'm really glad we did, and one of those things that we kind of did accidentally and then realized like, oh my God, that was stupid enough to do a lot earlier. Um, we have, we call requests for discussion, um, RFDs. And if you Google giant RFD, you'll get, basically all the thinking that we currently have around Triton. So when people are like, well, what's the Triton roadmap? It's like, well, Google Join plus RFD plus I Feel Lucky, and you're gonna get— and there's a bunch of stuff in there. And, you know, it's been great for us because technologists are reading it, customers are reading it. So sometimes I'll have a conversation with the customer and they're like, hey, look, I can keep this quick. RFD 27, yes, do this immediately. RFD 13, what took you guys so long? RFD 44, I'm a little bit suspicious. And it's like, great. And, you know, when— because so they can now see those RFDs are kind of written in an RFC kind of fashion. And what we tried to do is take some of the rigor that we apply internally and make that available externally so people can see the narrative thinking long before they actually see the code show up. And I do think that one of the problems is that some of these projects are moving so quickly or there's so much going on that when all that discussion is happening in GitHub issues, it's like, that is an anti-pattern.

**Bridget:** [00:25:04] Um, when you design discussions, it should not be a hard place to do that.

**Bryan:** It's a really hard place to do that. And then, and then because someone comes along and is like, well, I decided to close this issue out because we're never going to do it this way. You're like, okay, well, there's a ton of valuable design discussion there.

**Bridget:** You're just going to be linking to that issue until the end of time.

**Bryan:** Right. And you really need to have a, better and kind of get ahead of it, be thinking more structurally, be actually writing down your thinking, and then getting some comments and discussion that way. So, you know, and we're still, I think we still haven't, we definitely haven't gotten it perfect in terms of figuring out better ways to, but I think that getting our thinking out there has been a big win. And it's not something I see broadly in the open source ecosystem.

**Bridget:** You know, I kind of wonder if, and this is, I guess there's always the perennial question of what role do foundations play and where does your foundation come in on this sort of thing, yada, yada, yada. But I know that in the Cloud Foundry ecosystem, the Cloud Foundry Foundation is super valuable to make sure that these discussions are happening between different foundation members who are partners with people pairing together on these teams on the open source parts of the project, but who also work at competitors. So, we have pairs where someone works at Pivotal and somebody works at IBM.

**Bryan:** [00:26:19] Which is great.

**Bridget:** They have to, obviously, having that layer in there of we're all in this together is super valuable. So, my question to you, since I know you're involved with it, is tell me about how the Cloud Native Computing Foundation plays into all of this Sturm und Drang in the container ecosystem.

**Bryan:** And I think, you know, we in the CNCF are still finding our footing to a degree. I mean, key for me is it can't be the Kubernetes Foundation. Kubernetes is obviously one of the projects in the CNCF, but we cannot be the Kubernetes Foundation. If we are the Kubernetes Foundation, then we have failed.

**Bridget:** So, it's not really a foundation then. Right. I mean, again, like, that's why Pivotal doesn't run the Cloud Foundry Foundation. We have an independent foundation, you know, Sam Ramji and company out of the Linux Foundation are, like, running it.

**Bryan:** And the Linux Foundation is, you know, this is where I'll kind of take off my CNCF hat, and I guess I'll don an Apache hat. You know, the Apache folks get kind of rightfully riled up that the Linux Foundation is a 501, not a 501. So, a 501 is a nonprofit with a public mission. 501 is an industry consortium that doesn't necessarily have any public mission. And I used to kind of think like, oh God, that seems like just such inside baseball, but I see the point. So, wait, so what direction did you go for the CNCF? CNCF is a Linux Foundation I mean, so it is opposed to, say, as opposed to the Apache Foundation, which is a 501, and it is a different disposition. And so the mission is not necessarily public. And I do think that that is, you know, one thing that we kind of struggle with in the CNCF is that we, I feel we need to have as public a mission as we can. I think we need to kind of rise above the 501 status, rise above the Linux Foundation. I mean, You know, not to denigrate the Linux Foundation, they serve an important role. But I think it's important that we— that to me, our constituents should not be the vendors that have paid a premium to have a seat at the table. To me, our ultimate constituents need to be the people actually standing this infrastructure up, running it, developers contributing to it, and so on.

**Bridget:** [00:28:30] You know, I really— one thing that I didn't really pay as much attention to before when I was not working at a vendor, and I do pay attention to now, is I have a lot of respect for all of these companies that are paying, including Joyent, that are paying employees to write open source code. It's like the GitHub resume is bullshit. We all know that. Lots of people write perfectly good code that they don't get to put on there.

**Bryan:** Right.

**Bridget:** But people whose companies are—

**Bryan:** Permit me a rant. The other thing that drives me crazy with the GitHub resume, just speaking of my strictly selfishly of my own resume. So SmartOS is actually a fork of Illumos. Illumos is the— I mean, we're not a fork, we're a downstream distro of Illumos. Illumos consists of OmniOS, SmartOS, a bunch of others. We wanted to be really good citizens about constantly upstreaming our stuff into Illumos. So in the spirit of being great citizens, SmartOS is a GitHub fork of Illumos. Illumos Joyent is a GitHub fork of Illumos. You know, if you contribute to a fork, it's like not on your activity at all. Do you know this?

**Bridget:** [00:29:32] No, I didn't know that.

**Bryan:** Yeah, it's like, it's like, no, it's so you might— my GitHub resume is like, what has this guy been doing for the last 10 years? Like, yeah, contributing to a fork.

**Bridget:** And that sounds to me like, you know, even bringing things all the way back to the Docker fork question, that sounds to me like someone at GitHub needs to have a thought about how that stuff shows up.

**Bryan:** Totally.

**Bridget:** And this is where That's got to be an oversight. It is a very strange choice if it's a choice.

**Bryan:** It's a very strange choice. And it's kind of like, it's like a lot of these things where it's like they, they've also got a business to run. I mean, they've got challenges and like, they're like GitHub resume. Like no one asked us before people started giving out their GitHub resume. We would have told you that's a terrible idea because, you know, it doesn't highlight these things anyway. No, but you're right. I mean, the GitHub resume on the one hand is, yeah, is not accurate for a lot of reasons.

**Bridget:** It's not accurate for so many reasons, forks included.

**Bryan:** Right.

**Bridget:** But for these companies that are paying their employees to actually write code out in the open, I feel like it's a win-win. This is back to the open source winning, right? I think it's a win for all of those employees because they can write code, they can do peer review, they can work with their coworkers, they can write that open source code all day. They can go home and go for a run and relax and have their kids or whatever it is they want to do. And they don't have to be like, and then I wrote some open source code after I was exhausted from writing all that closed source all day. Right. It's like, that's not how we build better.

**Bryan:** [00:30:54] No, no, that's definitely not. And we are definitely, you know, deep in what I called, God, a decade ago, a decade and change ago, supply-side open source versus demand-side open source. Because it used to be back in the day, you were writing open-source software because you had a need that you had. And that still exists for sure, but that these kind of these engines, infrastructure, open source infrastructure is coming from companies that are dedicated to it, which is great. I think it's terrific. I would say that on the one hand, it is great that vendors like Joyent are doing that.

**Bridget:** But then there is that commercial interest.

**Bryan:** Totally.

**Bridget:** So it's like you have to balance that, right? Because it's people and it's people who care passionately about writing it.

**Bryan:** Right.

**Bridget:** And they're writing it as part of their job. Right.

**Bryan:** They're writing it as part of their job. And so the question becomes to any open source company, how do you monetize this? And the, I think the big challenge that we're, uh, you know, people love to talk about that all of the disruption, disruption seems to be kind of everyone's favorite word. Um, just, and, and there's a lot of disruption going on. Software itself has been massively disrupted and it means that the margins in software are, are changing a lot. And the, I mean, and it depends on the software, right?

**Bridget:** [00:32:11] It depends on the software, but like people are willing to pump money into the software they think is going to make them more money.

**Bryan:** They are, but I think that the era of proprietary software is going to be completely over. Totally. And I think that you—

**Bridget:** I'm just talking about like the commodity style. If, for example, somebody wanted to write their own novel public cloud, they would be fools to not at least look at your code.

**Bryan:** Oh, they'd be. It's stuff like that. Oh, absolutely. It means that there are certain software. This is why I think if you kind of take that kind of the the 30-year view. I do think that things like ZFS, anyone— this is the reason that ZFS is ultimately going to be, I think, the storage substrate that will be— it would be very hard to have a new storage substrate, to have a new file system, because you've got to make a real case for, I can't improve ZFS. That what I need is so novel and it may very well—

**Bridget:** But OverlayFS, what?

**Bryan:** [00:33:13] We may very well kind of collectively, there may be a need for it, there may be a niche need for it where you— I mean, I wouldn't want to say like, hey, don't bother, file systems innovation is over. I wouldn't say that at all. To the contrary, I would say that file system innovation, file system duplication of effort is over and we can now kind of all focus on one substrate. Now that may of course splinter and there's this room for alternatives for sure.

**Bridget:** And this kind of goes to a worldly mapping place of like exactly which pieces have we pushed from being, you know, novel implementation into, you know, kind of starting to commoditize this into like this is just utility, but we use that to feed new innovation.

**Bryan:** Absolutely. And I think that once you kind of— and just like, I mean, honestly, the ubiquity of Linux was actually very helpful in a lot of ways. It meant the ubiquity of Unix, meant the ubiquity of a lot of other ideas. So, I think that getting the sunset of proprietary software is a huge, huge, huge win, and it will fundamentally change. I mean, there are a lot of companies that actually have depended on proprietary software. People talk about VMware's lawn. There may not be a lawn for an open-source company. I mean, one of the things that you have to come to grips with is like, you may just not have the— the margins may look different, the structure may look different. Certainly, from our perspective, it looks different. You have to go to what people will pay for, and what they're not gonna pay for is the software. They will pay for, you know, the ability to run cloud, they'll pay for a service, they'll pay for metal. I mean, there's many things they'll pay for.

**Bridget:** [00:34:51] I mean, I know what we've found, and again, like, Cloud Foundry is open source, right? And Pivotal, like all of the other people with their own downstream Cloud Foundry distribution, puts some amount of, and then we do all of this ISV work and all these integrations for you. And that comes with the commercial package. And people, customers, do seem to appreciate that while nothing would stop them from building their own integrations to absolutely everything in the world, well, nothing would stop them except that they only have so much time, right? They would like to spend their engineering talent on things that actually make them money or get in some other way. If they're not a money-making, like say they're governments or whatever, right? They would like to spend their effort and their engineering talent on things that are a differentiator for them, right? Things that make a difference.

**Bryan:** Absolutely.

**Bridget:** And while I guess like the underlying everything that they're using to get this started is open source, they are going to pay for the extra work someone else has done for these integrations. Just because they don't want to redo it.

**Bryan:** [00:35:52] They don't want to redo it. And I think, you know, kind of the big question is—

**Bridget:** and I wouldn't say that, that, I mean, I guess technically that is closed in that it's, it was built specifically for the proprietary angle or whatever.

**Bryan:** Right.

**Bridget:** But I also don't see that as like giantly secret. Nothing would stop anyone else from writing an integration too. Right.

**Bryan:** And I think that the kind of the question is like, you know, how do you then monetize open source? Is that monetized via, you know, we've got some kind of proprietary bits at the edges that are Um, just, we just did a bunch of work with a vendor to give you the push button. That's right.

**Bridget:** And that's an example of something we monetize, right, that seems to work okay, right?

**Bryan:** And I, and I think for infrastructure software, I think that the— I, I do think that people are still willing to pay for service and support. Um, I mean, it gives, you know, because VCs have an allergic reaction when you say this, but I do think that like people are willing, they, they are willing to pay for the ability to pick up the phone in the middle of the night and call for an upgrade that has gone sideways. And that, to me, it has to be the— I think, and if you're not building software that people care that much about, I mean, this is where you get to really, really challenging things to monetize. Like, well, if you don't— if the software you're developing either works so robustly or is simply not in the loop at 3 in the morning, um, this is back to your production point. Right.

**Bridget:** [00:37:08] You gotta be focused on production.

**Bryan:** You gotta be focused on that production use, and you've gotta be willing to really do the things that are necessary to give value there. I mean, and invest in debuggability, invest in observability, invest in—

**Bridget:** and so when, you know, my meetings this morning were about the ongoing work with the monitoring and metrics stuff.

**Bryan:** That was great.

**Bridget:** Like, this is for the— and this is on the proprietary side of things, right? Is this is a value add. Right. If the customers, they have their logs, they can do anything they want with them. We're going to give them, we did this if you would like to use this.

**Bryan:** And I think that you need to— this is where, you know, you need to have the— when you're developing that infrastructure software, if you intend to monetize it the way we're monetizing it with support, effectively support, and then running our own infrastructure based on it, if you intend to be the one that's going to pick up the phone when something has gone horrifically wrong, it then biases you to make that infrastructure as reliable as possible.

**Bridget:** [00:38:10] I read a really great blog post that someone who apparently works at Joyent now wrote about a storage disaster at a previous job of his. He pointed me to this. I'm sure you know what I'm talking about, but like some engineer at Joyent like had a storage disaster at some previous job and as part of the recovery, recovery.

**Bryan:** You're not talking about my blog entry on this, are you?

**Bridget:** I don't think it was yours. I think it was some dude who works on your engineering team. As part of his recovery, they reassessed what they were doing and they said, well, we need to be on Triton so that we can get away from the single point of failure and sadness that they experienced. And I was just kind of having like the shaking flashbacks to the middle of the night sadness with storage that we've all experienced in our life. Yes.

**Bryan:** And you were talking about Richard Keating Sat Apocalypse blog entry, which is very good.

**Bridget:** It's a very good blog post.

**Bryan:** And it does, I think, um, Sat Apocalypse was a terrific name, um, because I think it's one of these things that shows you these little details really matter, right?

**Bridget:** And that's what I was thinking of when you're talking about production and operability, and I'm like, yep, yeah, that stuff.

**Bryan:** [00:39:13] And, you know, I, I think that, um, I kind of feel that every developer should Every software engineer, well, on the one hand, I think that having every software engineer wear a pager is not necessarily the result that you want. It doesn't necessarily mean— there's a degree to which you're trying to train a dolphin with a shock collar, which does not work. You will make it so they'll jump 3 feet whenever they're paged out. But I think that I do feel that everyone needs to develop production empathy. Where they feel the cold sweat of a production nightmare. And they— because I think that people don't understand, software engineers struggle to understand how much stress you have when you're operating as a system that was working and now is not working. And everyone around you—

**Bridget:** you would really like to find out why, but more importantly, you would really like to fix it. Those two might be related, they might not.

**Bryan:** Right, exactly. And you've got that tension of, I know I need to understand what happened so this doesn't happen again versus like, I want this pain to stop. Especially if you have a system that was working and isn't working any longer.

**Bridget:** [00:40:24] And then you were saying everybody around you is like, what's up?

**Bryan:** You know, the CEO is like, why isn't this like, why can't you just like turn back time? It's like, well, you know, it's because we've had—

**Bridget:** because that's a Cher song, but it's not actually like reality.

**Bryan:** It's not actually reality. And I think that That is really stressful in those situations. And I think, you know, I always marvel at the kind of operations psyche that is able to really keep a cool head in a storm like that.

**Bridget:** I mean, if you panic, the pain will take longer.

**Bryan:** Right. That's exactly right. But I think that software engineers do panic. And I think that that's kind of the difference between the development mindset and the operations mindset, which, I mean, we can, like, DevOps group hug as much as we want. I do think that there is a— I think that we can get very, very close, and we should get close, where you got operations with a strong dev mindset and dev with strong operations empathy. I think that there is, but when you are in the middle of an outage, the personality types do separate. And it is the operators in that kind of operations mindset who are able to keep that cool head. And I do think that the dev mindset kind of loses its mind.

**Bridget:** [00:41:43] I sometimes wonder if there's a reason that a lot of the people— I'm active in the DevOps Days community, and a lot of the people who end up running the conferences are ops people. Interesting. I think that it might just be the Event planning is—

**Bryan:** it's operations.

**Bridget:** Running live fire events is like— yeah.

**Bryan:** And when it's like everything has gone sideways and, you know, you're 15 minutes until this thing has started and, you know, but it still has to go. Yeah, it still has got to go and you've got to, you've got to think on your feet. And no, I think it's—

**Bridget:** and my, my spouse Joe does event technology and we like to say like we've had the same job for 20 years, like, because he's running live lights and sound and video and recording and live streaming for live events, right? You don't get a do-over.

**Bryan:** No, you don't.

**Bridget:** No, it's theatrical, and you just— if something goes wrong, you roll with it and you, you troubleshoot it, and you don't get to—

**Bryan:** and if it goes right, like infrastructure, if it goes right, people are like, oh man, the lights were awesome. It's like, and the sound all worked, right? And, and I mean, I mean, you and I say that because we present at conferences, right? We So, we've seen it not work. Right. And, you know, whenever you compliment, you know, the folks doing the lighting or sound, they've got the tears streaming down their face because they get it so rarely.

**Bridget:** [00:43:03] We tipped them out.

**Bryan:** Right.

**Bridget:** There you go.

**Bryan:** I'm sure.

**Bridget:** We're just like, for DevOps Days Minneapolis, I was like, thank you. Here's cash that shows how much we care that you had our video and our lighting and, like, you know, our iMAG, right? The giant human next to their slides so the back of the room can see their facial expressions.

**Bryan:** Makes a huge difference, but it's not wonderful. But, but you only really notice it when it's screwed up, right? And that does require a certain kind of mindset to be able to develop that.

**Bridget:** This is the mindset thing though about, you know, like devs and ops come together at last, only we might still be sort of different people. It makes me think so much of— back to Wardley, so much Simon Wardley.

**Bryan:** Yeah.

**Bridget:** Um, is the Pioneer Settlers Town Planners.

**Bryan:** Yeah, interesting.

**Bridget:** So if got pioneers, they're going to implement something that works 80%-ish, works for some values, it works. Like, you would never put this in production, but it's proof of concept, and it works.

**Bryan:** Right.

**Bridget:** And, but then you probably would move past that pioneering phase to this idea of, like, settlers. Okay. So, I always think of myself as being in settlers mode. It's like, okay, you got something that sort of works. Now let's make it actually reproducible. At Pivotal, we like to talk about day 2 operations. I'm like, day 2 and day 2,000, what's gonna happen if we actually try to use this? Oh, suddenly we need to find and patch all the corner cases, or we need to have at least game plans for dealing with all the corner cases. Just getting this software that, you know, works ish to like, we would actually run this in production.

**Bryan:** [00:44:40] Right.

**Bridget:** And I think that it's not even that a person has to only be a person who can only operate in one mode or another. I think people, like you're saying, have a personality where they prefer to operate in one mode or another.

**Bryan:** Yeah.

**Bridget:** But as you were also describing, they can learn to move a little closer to and understand a little bit more about what's going on with the other mode.

**Bryan:** Yeah, no, I think that that's right.

**Bridget:** And then I guess in that analogy, time planners are be like, you know, this stuff is so turnkey, it just works. We're just gonna, like, you know, we're not building this town from scratch anymore. We're just running.

**Bryan:** Right. Right. And I think that you can get— that those 2 mindsets can get very close to one another. Because, I mean, I think, honestly, even though I think I've got a— I do have a very high degree of production empathy. I've dealt with plenty of production outages. I, you know, I'm ultimately not an operator. I'm ultimately a developer.

**Bridget:** You want to instantiate things, have them spring forth, you know, spring forth from your brow.

**Bryan:** Oh, right.

**Bridget:** And I, I, I asked that not— well, I, I asked it lovingly because I don't actually ever want to.

**Bryan:** [00:45:43] You're phrasing it way more positively than I think of it. I think of it more like I actually really struggle to keep a cool head in a storm, even though I, um, I, I, the, the voice in the back of my head, which which I definitely suppress, is like, we're never gonna get it working again. It's done. It's over. Forget it. It's never gonna work again. Like, I immediately go worst case. And I mean, ultimately, I use that voice to drive me to figure out what the hell's going on. But I do, I mean, I've got a very high degree of operational empathy, obviously, because I, and I kind of constantly force myself because I know that I am a, you know, a developer heart of hearts. I think it's irresponsible not to have that operational empathy and to constantly develop my software such that I can understand production systems on their very worst day. So, my focus is really exclusively on production systems. Actually, Camille Fournier, the great technologist, Camille DM'd me that someone was complaining to her about, God, that Cantrell, man, he's always on about production this, production that, focuses way too much on production systems. And I mean, I would not, I mean, Camille supported enough productions. I mean, she's done enough production systems in her career that that's like not something I would say around her. I can imagine that. I mean, like, I mean, she was obviously laughing about that.

**Bridget:** [00:47:04] Um, I'm imagining her biting their head off.

**Bryan:** Oh, absolutely. And I can't— I mean, I hope anyone who has that attitude keeps that strictly private because I do feel that like there is a level at which you are— you— to denigrate production systems, or someone focusing on production systems, is to denigrate the very people who actually are responsible for keeping the systems up and understanding the failures. And to me, it's like everything that we do ultimately has to boil down to a production system. That's all that matters.

**Bridget:** I mean, it's in service of that. Otherwise, we're just making toys.

**Bryan:** We are just making toys, which are—

**Bridget:** toys are fun, but they are not real.

**Bryan:** They're not real.

**Bridget:** And to me, people aren't going to base their careers and their lives around a toy.

**Bryan:** Right. And ultimately, it is our— and this is where you get to kind of our responsibility to society, is that utility. I mean, I guess I'm an old schooler in that regard, is that we—

**Bridget:** that we're trying to push stuff to the point where we don't have to put the kludges and shims in all the time so that it sort of works. And this is how computers feel a lot.

**Bryan:** [00:48:04] It is how computers feel a lot. I do feel that when you kind of take the 40-year view, we're doing well, actually.

**Bridget:** Ish.

**Bryan:** Well, so, no, I think that we— I do think that it's easy to get down on things because they do kind of feel broken all the time. But the flip side of that is how much software simply just works, how much software has sedimented infrastructure.

**Bridget:** And how much hardware just works. Like, we were at the— this was right before DevOps Days Silicon Valley. Adam Jacob from Chef came by and met Tim Gross, and we were chatting, and that's how we had the earlier episode of Arrested DevOps about Container Pilot and Habitat. And after we chatted at that Hyatt in Santa Clara, we went over to Mountain View to the Computer History Museum where they were having DevOps Days Silicon Valley. And I had never actually taken the time to go through all of the Computer History Museum before.

**Bryan:** It's amazing.

**Bridget:** And one of the things that really stood out for me was on a whole bunch of these really early mainframe systems or pre-mainframe, proto-mainframe, whatever systems, they would have a label that also told you what the word length was.

**Bryan:** [00:49:11] Oh, yeah.

**Bridget:** And I was just like, you don't think about that today. Oh, you do not spend your time worrying about how many bytes are gonna be here. Oh, it's just like, okay, like, well, you know, 32-bit this and whatever. It's like, this was— it was not— there was no standardization. Like, people would just build some hardware and fit however much they could fit onto that board, and that's what you would get.

**Bryan:** Well, I mean, we were at a very low level of abstraction. We were in very much the proprietary era. We were in—

**Bridget:** and you look at general-purpose compute was like not a thing, right?

**Bryan:** And you look at how far we've come, and I think that, you know, we have achieved this kind of collectively, we've achieved this kind of critical mass where, you know, something that I've believed for a long time, I'm sure you believe as well, is that ultimately computational thinking has to become literacy. And we need a society at large we need this. This is going to be, to the degree it's not already, I mean, this is going to be an extremely important skill, the important skill.

**Bridget:** [00:50:15] Well, and I like how you put it, computational thinking, not coding necessarily.

**Bryan:** Not necessarily.

**Bridget:** I mean, like teaching a kid to code with Scratch or whatever, it's fun and it's awesome. But the awesome part is watching them think through a for loop or watching them think through just if this, then that, otherwise that, right? Like logic is so important.

**Bryan:** It is.

**Bridget:** And you don't need computers to learn logic, but like, you don't.

**Bryan:** And but that ability, logic to understand computers, to think analytically, and I do think to think computationally, and I think to think that you, you want people to think that, hey, I can actually write a Python program to do this, that to do this, to do this mundane task as part of whatever it is I'm doing. And I think that, or I know how to go find such a thing and actually execute it. And again, I think we are already there in that, in terms of, I mean, I think one of, I mean, honestly, you look at, we live in a very bifurcated economy right now where there is a segment of the economy for whom life is actually awfully damn good. There is another segment of the economy for whom life is not good, has gotten worse, and the prospects are really grim. And to me, like that is the dividing line. The dividing line is to what degree are you participating in this current revolution. And I think that, you know, fortunately people are beginning to kind of put all this stuff together.

**Bridget:** [00:51:48] And there's obviously other factors there too. If you have computer— you know, we're way on a tangent here, but if you have computer science professors on the East Coast having campus security hassle them when they're going to their offices because they're Black.

**Bryan:** Oh, absolutely.

**Bridget:** No, that it's not as simple as you've bought into the digital economy, so everything will be super for you. Like, no, we have serious inequities and inequalities in our country that have, have to do with systemic barriers and problems in our society that aren't just totally, does this person have, um, you know, discrete math background or not, right?

**Bryan:** Totally. But I'll flip it around. I totally agree with you. And, and you— I don't want to minimize the current struggle. But I will flip it around that, you know, I went to an inner-city high school that was, among other things, a computer magnet school that had— for which IBM had invested millions to have a computer lab. It was great. That investment is no longer required for an inner-city high school to have access to that same computational facility. That's a really good point. So on the one hand, I mean, again, you don't want to minimize the current struggles. On the other hand, we do have the cost of acquiring this between online courses and the cloud. And these are not— these things are not panaceas. You need quality instructors. I mean, the first and foremost, right?

**Bridget:** [00:53:11] But, and we need access to a computer and free time, or you need— you need like your Maslow's hierarchy of needs. Oh, it's a little bit higher than Absolutely. Everything in my life is dangerous and terrible, right?

**Bryan:** But I do feel that it's incumbent upon all of us to kind of switch the conversation around to solving that education problem and getting the literacy, getting us— we are, you know, right now we live in this kind of medieval Europe where you've got the, you know, and we need to get—

**Bridget:** like, we can sit here and do a podcast and And then there's people who, yeah, a podcast is really not in their hierarchy of needs.

**Bryan:** Not in the hierarchy of needs.

**Bridget:** And I mean, and this is one of the things actually that we were fortunate enough with DevOps Days Minneapolis this year, which, you know, was not a small conference. We had 700 people show up. We had like more than that registered. We had 700 warm bodies. And yeah, that's a lot. Yeah. In Minneapolis.

**Bryan:** In Minneapolis. That is a lot.

**Bridget:** [00:54:11] Yeah. And so we were fortunate enough to have good sponsor support. And so we had some excess cash at the end. We're keeping some to seed next year, but we ended up taking about 10% of it and donating it to local initiatives focused— one focused on underprivileged youth and one focused on better job training for, in like technical fields. That's not one of those, you know, unaccredited for-profit things. It's, um, it's actually the American Indian Council runs an opportunity center. Interesting. And so we donated money to their Dakota Institute that trains a lot of American Indian and Black students who maybe had like, you know, $26,000 a year fast food job, and now they have a $45,000 a year data center job. Right.

**Bryan:** That's great.

**Bridget:** It's like I mean, is it Silicon Valley money? Maybe not, but it's— I mean, definitely not, but it's an opportunity that is real and accessible and gets people to the point where they might start yelling at some hard drives themselves.

**Bryan:** [00:55:16] Well, no, and I, I think that that's just—

**Bridget:** I think that's super important. Like, this is something as technologists with, with privilege in our lives and opportunity, we have to put that opportunity out there for other people.

**Bryan:** We do. And I think that, um, at least for me personally, there's no more visceral way to really appreciate this than having kids, where you kind of think of like, think of your kids kind of making their way in the world, and then you kind of realize that like their problem is, you know, everyone has got this kind of the same, the same challenge about how we take this kind of rising generation. And I, you know, I, I personally, I, I am ultimately an optimist with respect to human ingenuity, and I think that we've got the ability, we can solve some really thorny problems. I think if you make things accessible, you know, a lot— so I think it's great that you've got— you need that kind of opportunity. And I do think that as this gets more and more and more accessible, as you get more and more and more and more people writing software, thinking computationally, I think then that builds on itself. It allows more people to solve more problems You think about how many problems there are, how many inefficiencies there are in the broader world.

**Bridget:** [00:56:25] Well, and I like— and I have to mock you a little bit because here you live right here in the Bay Area, and you know how people like to say that a lot of the apps out there are for Silicon Valley are solving a problem that your mom is no longer, or your parents are no longer solving for you, right?

**Bryan:** Oh no, I think that, that one trend I think that we will definitely see is, you know, but when you get more people out there with a different set of problems, absolutely. Like, the world does not need another dating app, right? The dating app is kind of like— is ground zero for this, right? Because so many young founders are young and they are like, I need like dating apps.

**Bridget:** Their interests, right?

**Bryan:** And the world does not need another dating app.

**Bridget:** Um, I mean, maybe they could swipe up and down instead of left.

**Bryan:** Have you ever watched someone do Tinder?

**Bridget:** I have not.

**Bryan:** It is not easy.

**Bridget:** They're swiping.

**Bryan:** Oh, they're swiping.

**Bridget:** And so, I mean, but it's left and right, right?

**Bryan:** It's left and right.

**Bridget:** I don't know, disrupt that up and down.

**Bryan:** You're right. And honestly, I'm I don't even know which one's which. I can't even remember which one's which. I actually, I met my wife online, but it was old school Match.com a long time ago.

**Bridget:** [00:57:27] There was no swiping back then.

**Bryan:** There was definitely no swiping. There was stigma. It was still like, this basically felt like half a step up from the personals in the back of the local SF Weekly.

**Bridget:** Considering I met my spouse at a live-action vampire role-playing game, because it was the '90s, I'm going to say that none of us have ground to stand on in mocking others. Absolutely.

**Bryan:** Right. Total nerds. The— I do remember at one point, you know, a younger colleague was kind of having a hard time meeting someone. Like, you know, you may want to consider going online. He's like, hey, what do you think?

**Bridget:** I've been trying.

**Bryan:** Exactly. It's like every— that's the only way you meet people. And so I actually was on BART watching someone in front of me on Tinder, and it was horrifying.

**Bridget:** They're like, oh, the UI wasn't good?

**Bryan:** No, it's just like, because you get— all you're doing is reacting on just like the photo, and you're just like, yes, no, you can't learn anything about the person. Oh no. No, it's purely—

**Bridget:** I was imagining, I was imagining something with like, um, you know, I don't know, kind of like The Sims, like qualities hanging over the head.

**Bryan:** No, please, this is why you met at a vampire meetup and I met— no, please. Uh, anyway, the, the, the— I, I think that just to your point, I, I think that when you get people with a much broader set of life experiences, set of perspectives, set of— I mean, there's just a lot of there are a lot of interesting problems to go solve, a lot of inefficiencies that can go be addressed that are not necessarily going to be VC-fueled multibillion-dollar businesses, but they're going to be—

**Bridget:** [00:58:48] but they could be. I mean, desalinization, absolutely. Go. Potable water is relevant to the interests of people.

**Bryan:** Okay, so this is where it would just like tangent all over the place. Okay, so confession. I think climate change is going to be kind of exciting. So here's why.

**Bridget:** I mean, terrifying, but exciting in a everyone's going to have to come together to solve it.

**Bryan:** Everyone's gonna have to come together to solve it. That's it.

**Bridget:** I mean, disclosure, like, we have a Tesla that's showing up in like 2 weeks.

**Bryan:** Wow. The—

**Bridget:** so yeah, it's like, let's put our money where our mouths are, you know? Like, we finally got to the— we haven't had a car since 2011, right? We finally got to the point where Joe's work was such that he was— at one point he rented a car for a week just to get to the gig he needed to get to every day because it was really far away. And I was like, okay, uh, I know that you see yourself as a cycle commuter, but realistically there is enough driving here that we need to get a car. And then we decided like, it's got to be an electric car because we signed up for the wind energy at home.

**Bryan:** Yeah.

**Bridget:** And I'm like, you know what, if I can have a wind-powered Tesla, I'm gonna not feel so horrible about wasting the resources of having it.

**Bryan:** [00:59:53] Right. And so there's that, there's the like, there's the how do I kind of reduce my— but it would mean ultimately, we've got a huge—

**Bridget:** I fly so much that I can't think about my carbon footprint.

**Bryan:** Right.

**Bridget:** Delta app tells me my carbon footprint is totally hosed.

**Bryan:** Yeah, right. I mean, you probably drowned the Maldives yourself. Probably.

**Bridget:** What time is it, by the way? Because I do have a flight sometime coming up.

**Bryan:** So, um, the— oh, we're okay. Um, I think that it will be a grand unifying engineering challenge, which is always exciting.

**Bridget:** Yeah.

**Bryan:** And I think that we will be— not to minimize all the lives that will be impacted, but, you know, we'll figure it out. I think that that, that sometimes people are such an optimist.

**Bridget:** I look at the track record of history as a firebrand, but no, I, I am actually—

**Bryan:** I, I am deeply optimistic. I just think that, that you look at the number, and in part because I'm pessimistic enough to— because I always kind of do go to the worst-case scenario. I've seen the number of things that drives Joe crazy, but he's like, you look at the number of things that we have conquered, look how close we came to mutual annihilation during the Cold War. And yet we didn't. Why? Because our— for a brief shining moment, our best minds were actually ultimately in government. The, you know, you look at some of that coming now.

**Bridget:** [01:01:11] I mean, Jess Humble works for 18F. I think about that for a minute.

**Bryan:** I know. I think that one of the things that I like about the rising generation is that there is a real much more of a community sense than there was. Certainly, I mean, we're a couple of apathetic Xers, right? I mean, like, we're just like, community, a community sense is something that you make fun of on The Simpsons as far as we're concerned, right?

**Bridget:** I think that we are disaffected members of Generation X, but you know just as well as I do that we secretly care. Maybe not so secretly.

**Bryan:** No, no, I know, I definitely do. I think, and I think Xers all generally, I mean, the— but I, I that there is— there's not— that there's a very strong cultural sense, and it's— I think that that's a great— a very strong kind of communal sense, one that we were too cynical and bitter to pull off generationally, that we would ultimately, like, have that communal sense would be purely ironic for us. Irony is kind of— irony is either dead or metastasized, and I don't know.

**Bridget:** [01:02:14] Is this a— are we in a post-ironic world?

**Bryan:** I think we are in a bit of a post-ironic world.

**Bridget:** Is this Alanis Morissette's fault?

**Bryan:** That's right. See, people are gonna— they're gooing Alanis Morissette. Who the hell is this?

**Bridget:** Um, I really do really think— I don't— we don't have demographics of the age range of people who listen to this podcast. Maybe— I think Stratton's running some kind of survey. Maybe we should put that in there. But I do kind of wonder how many things we talk about people do need to look up.

**Bryan:** Well, I listen.

**Bridget:** Not just tech things, right?

**Bryan:** No, I listen. I'm I'm I'm an unapologetic Xer, and there are certain things that I view as mandatory education. We did have we had a guy that that a young engineer, great engineer, had not seen War Games. Like exactly eyes popping out of the head, which is like I'm like this is a solvable problem. Go watch War Games.

**Bridget:** Right.

**Bryan:** And you know we would we have an online system of demerits here at Joyent.

**Bridget:** We give Tim was saying something about that. That sounds hilarious.

**Bryan:** We we give demerits out, and anytime that we give demerits for trolling others or being trolled, and anytime—

**Bridget:** [01:03:16] wait, do you get like a certain number of points for like, you know, house whatever, house product gets? Because if you get demerits, there has to be merit points too, right?

**Bryan:** This is very purely negative reinforcement system. And the, the, this is the canonical shock hour. But the— and anytime a WarGames reference was, was made in kind of casual conversation, I would just give this guy a demerit because it's like He's like, why are you giving me demerit? I'm like, exactly, exactly, because you don't know. He's like, well, how do you know I haven't yet seen WarGames? It's like, because the day you've seen WarGames, you're going to come into the office, say, apologizing for not having seen it, because it holds up very well. It also has got— it's— there's a certain amount of the culture that you don't understand without having seen it. Um, so finally, I mean, the only way to do it was mandatory viewing. Um, and so we, we did the mandatory viewing. He watched WarGames. Like, doesn't that feel better? And he's like, actually, that was a really good movie. Like, yes, exactly, exactly. So I do feel that WarGames is a— I'm unapologetic about you.

**Bridget:** Have you shown WarGames to your kids yet?

**Bryan:** [01:04:17] Oh, my kids saw WarGames really early. I mean, I, I, I tried not to, uh, I've tried to make sure that they go forth having seen some of the, what I consider the basics. But WarGames is not necessarily in the canon the way Back to the Future is. You can drop a Back to the Future reference and any millennial is totally with you.

**Bridget:** You know, when we were, um, test driving Teslas, we did end up going with the S, but when we were test driving the X, uh, the probably 20-something-year-old who was working at the dealership— I'm not going to say that he was a car salesperson because they have no commission— and he's like, I'll show you anything you want to see. Okay, go buy it on the website. Like, they don't sell anything to you after testing.

**Bryan:** Modern salesperson.

**Bridget:** Yeah. It's like, no. But, um, but Joe was saying, you know, hey, ever since I was like 9 or 10, I wanted a DeLorean. Like, as we're testing, of course, you know, gullwing doors on the X. And, and this kid's kind of like, oh yeah, you know, because it's like, I'm thinking, does he know what we're talking about? Oh wait, no, he's nodding, he's smiling. And I was like, this is in the canon.

**Bryan:** No, it is in the canon, which is strange.

**Bridget:** [01:05:17] And but today's young people have apparently seen, you know, uh, Marty McFly with his ridiculous life jacket on. What was with those vests?

**Bryan:** And yet Dave Lightman is just like blank stare, which is just, you know, uh, anyway, so the, um, I, I think that, um, it is, um, well, you have to get the demographics of your podcast, but, um, yeah, the other thing I think is interesting to kind of a more personal note is I find that, uh, as especially as I get older, I'm kind of viewed as the, the local historian, which is a little bit ridiculous, but, um, I find there is a lot of interest actually in— I think sometimes you're like, oh, people don't care about, you know, these things historically. I find people are very interested in the history. I think it's not something we teach.

**Bridget:** And by the history, you mean college?

**Bryan:** Well, yeah, I mean, I think, well, in terms of like people are interested in the— right, exactly. When you say antiquarian history, you mean, right? No, but I— and beyond. I think that we don't teach the history of these systems. I think people are like, oh, wow, I don't know, is that realize that, you know. And I think that it's when you understand history, you can understand the present so much better. You can better project into the future.

**Bridget:** [01:06:27] Well, and it's not even just a technical history because a lot of it does have to do with both human-computer interaction and the competing interests of different companies. And, you know, whoever Seymour Cray was mad at, and like, these things actually They had a huge effect.

**Bryan:** They made a huge effect, especially Minneapolis, with the Cray Research, Cray Computer split.

**Bridget:** You know, it's, um, I mean, I have family friends who worked for Control Data Corp, and it's just like CDC.

**Bryan:** You gotta— CDC is a really interesting company. Um, they had a—

**Bridget:** I know my mom's best friend, a woman who babysat me when I was a kid and everything, she worked as— Alice Olson worked as a punch card operator there.

**Bryan:** The CDC 6600 is one of the most interesting machines that you— there's a great book on it by Ian Thornton on the way they have to put a link in the show notes. Well, they've got parallel execution units, and you have this kind of rotating Gatling gun firing off executions at these units. Really interesting stuff. Very interesting. Cray machine. That was a Seymour Cray-designed machine. Very interesting machine.

**Bridget:** [01:07:41] Yeah. So this is a wide-ranging list of topics. I have no idea what we're going to call this episode. Have you thought of anything?

**Bryan:** I, you know, I think we should just take 3 of them, you know, 3 of the more random things we talked about and put them together into the title and see what you get. But yeah, I apologize to take everyone on the random walk.

**Bridget:** This is exactly Exactly what I wanted.

**Bryan:** All right, good. I think sometimes we think like, God, like what? I, I, you know, how short is your attention span? Can we just like live in a place for more than 30 seconds? But you know, gotta keep it in check.

**Bridget:** This is exactly what I wanted. Oh, and for anyone who's watching the video and who's noticing, we are wearing the same t-shirt. We did not plan that.

**Bryan:** Did not plan it.

**Bridget:** We just turned out to be that awesome that we happened to wear the same shirt today.

**Bryan:** This is the, the Container Summit. This is the, uh, the, the concert tour shirt.

**Bridget:** Yeah.

**Bryan:** It's got my calendar on the back.

**Bridget:** Has Brian's recent travels. Did you go to all of them?

**Bryan:** I did.

**Bridget:** Oh my goodness.

**Bryan:** Yeah, exactly.

**Bridget:** Yeah, we had a road show that I wasn't on, but I got to enjoy the Minneapolis version of it when my coworkers Casey and Fred and Kenny brought it through town. But they actually hit a bunch of US cities, a similar number perhaps to what the Container Summit road show hit. Then they also went to MEI and APJ. She's like, whoa, that's a lot. That's all the—

**Bryan:** [01:08:59] that's a lot of travel.

**Bridget:** That's all the frequent flyer miles you could ever want.

**Bryan:** Yeah, exactly.

**Bridget:** Exhaustion, right? Um, but the, uh, the Container Summit, um, city tour— and I know you've done Container Summit as like a marquee event a couple of times.

**Bryan:** Yeah.

**Bridget:** Can you talk just briefly? Because if we of course are running out of time and I do have to go get on a flight, but can you talk a little bit about what inspired you to move from— and just tell people what Container Summit originally, and what inspired you to move to the city?

**Bryan:** Yeah, so Container Summit was originally a marketing event disguised as a conference, really.

**Bridget:** As one does.

**Bryan:** As one does. And everyone— and we did such a good job disguising it, people were like, this is a great conference. It was a marketing event. Okay, great. I'm glad you think that. And we did one in New York that was really successful, did another one in San Francisco that was very successful, did another one in New York, and then kind of realized that And, you know, of course, you know this, that there are great technologists everywhere. And, you know, we wanted to take the show on the road and actually get to local technologists. Also, I wanted to have conversations. I mean, one thing that was important to me is having conversations with local technologists in front of local technologists so people can understand, like, this stuff is not just happening in the abstract. It's happening at the next company. It's happening at my company. It's happening at, you know, my university or the next university. I mean, it's happening in my area. I mean, I always think it's great to kind of connect with technologists. And I always find that, you know, the, you know, you go to a meetup anywhere in the Bay Area and, you know, we're so inundated with tech here that people are kind of disinclined, I think, to spend their, you know, the hours outside of work. Whereas I think when you go to places where there are fewer of these events, people really turn out for them, and you get a great energy. And so, you know, you get— I mean, like, we saw it certainly in Minneapolis, we saw it in Milwaukee, you saw, you know, where you get, like, you get a lot of people who are out, who are engaged, and almost very much like, wow, it's kind of great to see so many people from, you know, my city out here. But it's like, so it's been fun to kind of remind people that, hey, there is interesting technical work happening all over.

**Bridget:** [01:11:05] I think you attracted, I think, about 135 people showed up. And this was a one-off. It was not even our actual monthly meetup. We had our meetup, and then the next week, we had the DevOps meetup co-branded with Container Summit and the Docker meetup. And we had, I think, 135 people show up.

**Bryan:** Great. And speaks highly of, certainly highly of the great tech community there in Minneapolis. And I think, again, it's a theme that we see that we— and I think it's a theme that we're gonna continue to see.

**Bridget:** People being really interested in the stuff that you were bringing. I had people that I worked with at the university 20 years ago who I hadn't seen for years showed up because they were fans of you, which I think is hilarious and adorable.

**Bryan:** Yeah, that, that I'm still adjusting to. People wanting to get a selfie with you. And I kind of like— first, of course, I wish my kids were here so I could gloat in front of them because they so frequently tell me that nobody cares, that, you know. But then I also like I'm still adjusting to the, like, the selfie Instagramming kind of life. Now, the, the— I, I felt like I had a very— my, my son's birthday was over the weekend, big birthday party last night. Felt very postmodern in that the— my 4-year-old daughter started dabbing for all these 11, 12, and 13-year-old boys who were just— I mean, they were— every phone was out. Everyone is Instagramming this. So now my— exactly, my 4-year-old daughter, who admittedly does have— I mean, she— if you want to know where— if you met my oldest, you would think that like, wow, this, this— are we sure this is like— but I don't want to say paternity test, but have you— you know, uh, my oldest is— I got a very mellow disposition, super sweet kid. As they get younger, you see a little more of my personality until you get to the 4-year-old who is like, I Yeah, yeah, yeah. I'm just gonna apologize in advance for that one. She is, uh, she is a ton of fun, but it's hysterical. Yeah, she's pretty funny, but all over Instagram.

**Bridget:** [01:13:02] So yeah, but okay, so you've got— sorry, so this Container Summit, uh, this summer's tours are over, or do you still—

**Bryan:** uh, still got— still going to Denver and, uh, LA, and then I think we got Seattle and Portland on there.

**Bridget:** So wow, so you're still going strong.

**Bryan:** We're still going strong. People, um, can go to containersummit.com kitchenism.io, see the schedule, um, and suggest a city, uh, if we missed one too.

**Bridget:** So, and so where other— what other places can people, you know, stalk you online or find out what you think about, um, companies with too many lawyers?

**Bryan:** Yeah, you can always DM me on Twitter. I, I've, I've definitely— one of the features of Twitter added that I like is allowing anyone in the world to message me. So I don't need to follow you to DM me. That's a pretty good way to, to hit me up. And, you know, always excited to have a conversation. So that's probably the— sure, probably the best way.

**Bridget:** And then in terms of like exciting stuff that is going on with Joyent, apparently you have gone worldwide. There's the— so if Hallyu is our like Korean soft power wave of, you know, culture across the world, what are we— do we have a Korean word yet for Um, the, the Joyent Way?

**Bryan:** [01:14:12] Not yet, but we're working on it. We, we're definitely, uh, learning a lot about Korean culture. We were acquired by Samsung, and, um, we've been— especially as we've been making the trips to Suwon, and everyone's been— boy, if it's not— if you have not seen a baseball game in Korea, you've got to put it on your bucket list. It is amazing. There is no other word for it. It is amazing.

**Bridget:** It is.

**Bryan:** It defies description. It is really amazing. Um, and it's funny because I came back from, from Korea saying exactly that, and I think the degree kind of people believed me but thought I might be exaggerating, and they themselves went to a baseball game, they're just like, minds blown.

**Bridget:** Um, I worked at a K-drama streaming site, but I never got an excuse to go to Korea.

**Bryan:** It, it's—

**Bridget:** I did work our, uh, award show where a bunch of K-pop and K-drama stars came over to New York, and I got to like, you know, be kind of putting wristbands on the fans or whatever.

**Bryan:** There you go.

**Bridget:** And of course I'm in the line putting wristbands on the people asking them, so what do you like about the app? Interesting. Tell me more. Right. And what happened when that happened?

**Bryan:** [01:15:13] It was like, that's great.

**Bridget:** But yeah, so you got to go over to Korea. It's great.

**Bryan:** It's been great. Very interesting culture. Appreciating, of course, appreciating the differences, but also appreciating the shared values that we've got between Samsung and Joyent. So we're really excited. The great, great fit and doing some really exciting stuff.

**Bridget:** You're going to have to come up with like some kind of Korean word for like the Joyent ethos or the Joyent way. Joyer or something.

**Bryan:** The Joyer. We will work on it. We'll work on it.

**Bridget:** Yeah. All right, cool. Fantastic. Well, this has been super fun, Brian.

**Bryan:** Bridget, this is great. I, I apologize to the listener for the long random tour through seemingly disconnected things, but you know, here we are. This is, this is the, uh, this is a mental road trip with the two of us.

**Bridget:** This is fun stuff that I think our listeners appreciate.

**Bryan:** Excellent. Well, so It's been a lot of fun.

**Bridget:** All right, thank you so much.

**Bryan:** You bet.

**Bridget:** Take care.

**Bryan:** You too.

**Bridget:** Okay, community and event stuff. If you have an upcoming conference you'd like to see promoted on ADO, you can fill out the handy form at arresteddevops.com/conf. Upcoming conferences, there's discounts on lots of DevOps Days, now including Madison, and dates are announced for Sydney. Discounts on the upcoming O'Reilly Security and Velocity conferences, for 20% off pretty much everything. Open CFPs, take a look. OSCON's CFP for next May is already open. I know. We have a newsletter, arresteddevops.com/bananastand. It's the best way to know about upcoming podcast episodes and cool news with DevOps. If you want to help us bring you even more content, you can always contribute to us at patreon.com/arresteddevops. Don't forget that we have a bunch of cool new ADO merchandise available at store.arresteddevops.com. Fun t-shirts, mugs, and stickers can be yours. Thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/victorops. And loyal listeners, if you enjoy Arrested DevOps, we'd appreciate it if you would visit arresteddevops.com/itunes and leave us a review in the iTunes store. We'd love to know what you thought of this episode. Please leave us comments at arresteddevops.com/fireside-chat. You can find us on Twitter @ArrestedDevOps. We're always happy to get your input, ideas, or feedback at shows@arresteddevops.com. Please let us know any ideas you have for future episodes. I'm Bridget at Bridget Kromhout, and remember, there's always DevOps in the banana stand.
