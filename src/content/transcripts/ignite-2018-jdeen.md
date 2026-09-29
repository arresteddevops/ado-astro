**Jessica:** [00:00:00] Oh, just honest. I mean, this is a space that's moving so, so quickly.

**Trevor:** Yep.

**Jessica:** Jinx.

**Trevor:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Trevor Hess, and I have a great guest with me here today. But first, a word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same.

**Jessica:** We do not talk about change, we do change.

**Trevor:** Join the community and learn about our solutions at chef.io. This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. I'm joined today by Jessica Deen. Thanks for joining me, Jessica. Care to tell us a little bit about yourself?

**Jessica:** [00:01:24] Yep, thanks for having me, Trevor. This is awesome. So my name is Jessica Deen, no relation to James Dean, so my last name is spelled with 2 Es. Uh, I am a Cloud Developer Advocate for Microsoft. I primarily focus on Azure, open source, Linux, DevOps, containers, Kubernetes. Pretty much the only direct Microsoft thing is Azure, and then everything else is a smorgasbord of open source and Linux, which is pretty awesome.

**Trevor:** That's excellent. I was going to say, yeah, that sounds like you started out sounding like it was going to be a short list of a couple of things in the open source space.

**Jessica:** And then it just keeps going. I mean, it's not even something that I plan. I like, I go down this rabbit hole and then before I know it, you have like 4 Macs and then different servers at home that are all running versions of Linux. And it just starts getting a little bit out of control.

**Trevor:** Sounds like you're having fun with it though.

**Jessica:** Oh, I absolutely am. I love every single minute of it.

**Trevor:** That's awesome. So, you're part of the League of Extraordinary Cloud DevOps Architects?

**Jessica:** Advocates.

**Trevor:** [00:02:24] Advocates.

**Jessica:** Yes.

**Trevor:** What's that like?

**Jessica:** It's awesome. So, we are led by Donovan Brown, who is otherwise known in the Microsoft world as Mr. DevOps or Black Shirt. And we try to spread the message of DevOps. So, we have a thing where anytime we get up on stage, it's always rub a little DevOps on it. Like, let's make this problem go away. Let's fix it. And it's pretty awesome because everyone on the team, we're a healthy balance. Some of us have a background where we might be more dev-focused, and then others like myself actually might be more IT or ops-focused. And we really kind of are able to embody that DevOps culture and that service-focused delivery by focusing on the end goal at the end of the day, right? Which is with DevOps is continuously delivering value. So, at the end of the day, I'm able to deliver value because I have an awesome team around me.

**Trevor:** So, how does that dynamic work?

**Jessica:** In what perspective?

**Trevor:** So, you have a great team around you. So, you do a lot of going to talk to people, talk to customers, talk at conferences. Do you often travel together and do talks? I hadn't considered how, other than talking to each other as coworkers, how that would operate as a team.

**Jessica:** [00:03:39] So, great question. We do sometimes end up at the same conferences together. Actually, at this particular conference, we have 3 members of the league, Donovan, Steven Murawski, and myself.

**Trevor:** Uh, all 3 have been on the podcast this week. Yep.

**Jessica:** And then earlier this, uh, earlier this year back at Build, we had all 5 members of the league. 2 of them this time couldn't make it due to health concerns or babies and children and all that stuff. Um, one is a new father. But overall, sometimes we'll end up at the same conferences, other times we don't. But if at any point one of us needs something, we can ping the other and we'll be right there to help. So, there'll be times where I'm on stage and I've pinged Abel for a question, or I've pinged Steven for a question, or I've had Donovan come in and ask me. And same thing for them. If they get asked with Kubernetes or Linux or open source things, we're able to tap into each other's resources. So, even if we don't see each other at a conference, we know that we're one text, ping, DM away from that kind of answer. So, it's a really comfortable team. To be a part of, to have that kind of reassurance and that backing.

**Trevor:** [00:04:43] That's fantastic. I mean, that sounds a lot like the kind of the embodiment of the culture we try to infuse in the companies and people we work with as we teach them about DevOps.

**Jessica:** Yep. I mean, truly, that's one of the reasons we always— we actually have a picture of the league, and I always point out how, like, one half of it is very dev and the other half is more ops. And yet, we're still, like, this really great team. We do try to embody the message that we're spreading. So, we try to live, like, practice what you preach kind of thing.

**Trevor:** Absolutely. So you also obviously you spoke here a few times as well. Yeah, I think when we were talking before the show started, you spoke every day this week.

**Jessica:** So I was in Scott Hanselman's general session showing off Azure DevOps on Monday. Then I led a 75-minute solo session on container DevOps in Azure on Tuesday. Wednesday I did a Channel 9 recording. Thursday I had an interview for some of the MVPs. And then today I also led another 75-minute session with Baruch from JFrog directly before this podcast. And then actually, I did an interview for JFrog as well with him. And then now I'm on the podcast with you. So, it really has been a lot of talking all week, but like I said, I love every second of it.

**Trevor:** [00:05:55] That's fantastic. What was your favorite topic that you discussed this week?

**Jessica:** Well, I mean, my favorite, I feel like all topics—

**Trevor:** Probably a hard question.

**Jessica:** Well, but like, because it's a funny joke, like, right?

**Trevor:** Bad question.

**Jessica:** Well, I can literally say any topic, but at the end of the day, it all goes back to DevOps because all roads kind of lead back to these practices and principles we're based on. So, even when I talk about Kubernetes and containers, or Helm and Draft, those tools are fundamentally successful because they're built on DevOps practices, like infrastructure as code and automated release. And then I can use tools in a Kubernetes space for monitoring, like Prometheus. Like, there's so many different tools I can take, where at the end of the day, it's kind of like that Jim Carrey movie, where, like, the number 23, and he starts seeing everything, everything around him adds up to the number 23. Like, in my world, everything around me is like, well, that's DevOps. And even Donovan will say that. Donovan has a video he opens a lot of his sessions with where it's of a race car driver because he actually, like, professionally races cars and stuff. And he'll show a video from the old ways you used to change out tires to, like, now the new ways. And I know I'm not using technical terms. I'm not a race car driver. But the video, even when you show, like, the pit stop and the pit crew and how people come in and change things, like, he'll look at that video and go, that's DevOps. Like, you can improve this process by automation. And having backups and redundancy. And we made jokes in today's demo because one of the— there was a technical glitch and without missing a beat, we'll just switch over to my failover and here's my backup demo system because I work in ops and I consider redundancy. So yeah, it's fantastic. That's probably been my favorite this year. But as far as like announcements or new things that have been released, we've, we've had quite a few. Like there's been— you can now do serverless in your Kubernetes clusters. You can tie in ACI, which is Azure Container Instances, over into your Kubernetes service. You can also, if you're using Cosmos DB as a part of it, now you can have like multi-master nodes and it's like per microsecond billing or something like that. Like it's ridiculously— they just changed their billing aspect to an incredible rate. Azure DevOps, the big announcements there. So we, we rebranded our platform from VSTS to Azure DevOps. We announced that technically a week ago now, but that's been really cool because there's been so many sessions on how that can play into every part of this ecosystem. So it's been really powerful.

**Trevor:** [00:08:16] That's just incredible how much has been announced this week. I know Steve was talking yesterday that he got a 52-page book of all the announcements and it was just these tiny blurbs about what it was. And there's just so much that's going on.

**Jessica:** Yeah, there's so much. And it's so hard to read. In fact, even actually Corey Sanders tweeted that he forgot to put something in his blog post that was yet another announcement of things that we released, which was a virtual machine image builder. So now you can take, you can customize, let's say you're starting with like a RHEL image or something. Something and you customize your system accordingly. And then you can actually use an image builder to package that into an image based on HashiCorp's Packer technology. And right now that's supported for Ubuntu 16.04 and 18.04. Windows containers have been asked about, and that is on the roadmap. So the fact that they introduced that technology, it's in private preview. I don't want to say that it's like general, but the fact that they introduced that and then also made it a point to mention Windows containers being considered and on the roadmap, that's been super, super cool.

**Trevor:** Absolutely. I mean, I know folks have been asking for that for a long I remember the first community summit I went to for Chef back in 2015. That was like one of the big topics was, hey, how do I, how do I make it easier to test my Windows systems?

**Jessica:** [00:09:26] Yeah, and that's been a big topic overall, but it just kind of cracked me up that, I mean, there's been so many announcements, even Corey Sanders, like the VP of Azure, you can't keep track. There's just so many. But along the topic of Windows containers and shameless plug for me, one of the things that I found out this week is I got accepted to speak at KubeCon with Patrick Lang from the Windows containers team, and we will be talking about Windows containers at KubeCon.

**Trevor:** That's super awesome.

**Jessica:** Yeah, so we're really excited. We're going to have some great content for everyone.

**Trevor:** That's fantastic. So you mentioned Azure Functions, or sorry, you mentioned serverless in Kubernetes.

**Jessica:** So you can actually do serverless now. So one of the other jokes has been like, you can do serverless in your Kubernetes cluster or Kubernetes cluster in your serverless, but it's like peanut butter in your chocolate, chocolate in your peanut butter. Christina Warren's been trying to get that one going off. Ultimately, yeah, you can tie in now serverless into your Kubernetes cluster. Jeff Holland is actually one of the leads on the serverless team, and I believe he did a session demoing that. So if you want, all our content is available online and definitely go check that out.

**Trevor:** [00:10:29] That's fantastic. That's a really good point that all of the sessions at Ignite this year were recorded.

**Jessica:** Yes.

**Trevor:** So anything that you missed, if you couldn't come to the conference, you can go check it out online.

**Jessica:** Absolutely. And that's been— I think it's pretty cool because also their upload cycle has been pretty quick. Like it's available online by the end of the day or the next day. So I was able to actually see myself in Scott's session the very next day. And then, uh, I was able to see myself from my own session on Tuesday. Like, I think that night it was, it was pretty cool. It's been pretty fast.

**Trevor:** I did not know that. I'm, that makes me excited because I, I got to speak during, uh, I did, or I got to do a demo during Jeremy Winter's session.

**Jessica:** Oh, nice.

**Trevor:** Um, and I super want to see how I did.

**Jessica:** Yep. And so, and so now you can go download all that stuff as offline content. And now you have things to watch when you're on your plane back to wherever you live.

**Trevor:** That's fantastic. That's so good.

**Jessica:** Yeah.

**Trevor:** Um, cause yeah, that's, that's actually a really good point. You could totally, anything that you're like, you leave the conference, there's always talks that you wanted to go to that you couldn't go see.

**Jessica:** Yep.

**Trevor:** So you can just download them and watch them on the way home. I mean, I don't know that I would personally do that, especially given how tired I am after this week. Yeah. But that's great that you can do that.

**Jessica:** [00:11:34] You have that availability. Or if you have like more flights scheduled, like I'm flying over to Tech Bash next week. I can queue up a whole bunch of different things that I want to learn about and then sit there and I have stuff to watch on my 6-hour flight.

**Trevor:** That's so cool.

**Jessica:** Yeah. Well, people also ask like how even for us working at Microsoft, how do you stay up to date with all the technology? I have to watch a session just like everyone else. True story. Somebody, somebody asked me in my session on Tuesday at the end about the ACI and AKS and like in-cluster. We literally announced it like 3 hours before. I'm like, well, that's news to me too. So, I need to go learn about it. But it was pretty awesome.

**Trevor:** That's always fun when you get a question, you got to like, you just got to, you have to say that.

**Jessica:** Yeah. Oh, just honest. I mean, this is a space that's moving so quickly.

**Trevor:** Yep.

**Jessica:** Jinx.

**Trevor:** So, that actually leads into another question I wanted to ask you. How do you prioritize these things that you need to learn?

**Jessica:** That's a great question. I'm still working on that. I could say that I need a Kanban board for my brain. I do.

**Trevor:** [00:12:38] Sorting algorithm.

**Jessica:** Yes, seriously. I do use Trello actually to kind of keep track of like my own internal projects. I'm known online also for my dotfiles. I have a really decked out terminal. We call it Badass Terminal. And I didn't name it that. The community did. It went viral on Reddit last year, primarily because it works. It works on macOS and it works on WSL, which is Windows Subsystem for Linux on Windows. But the same version that can set up and install on WSL will also work on distributions of Ubuntu. I haven't tested it on 18, but at the time of that writing, it worked on 14 and 16. So it was pretty epic that you could pretty much use it literally on any environment. So it became cross-platform dotfiles. And it doesn't arbitrarily assume you want to use mine. It prompts you and asks you how to set it up. Anyway, all that aside, I run a project where I actually will even open up PRs for the community. So I have a Trello board where I have to track that. Then I have my own like personal projects for demos I have to write and new content, things that we've announced that now I need to go play with and learn. Like back at Build, we announced Dev Spaces, which is like the Azure version kind of of Draft, which it was actually inspired by the Draft scaffolding, which is an open source project to simplify Helm chart creation, which Helm is a package manager for Kubernetes. So it's kind of like you start making like all these like priorities and it all kind of leads into each other. So when I do have free time, I kind of have to pick one that's at the top of the list that's been there for a little bit and dive into it. But sometimes it can get hard to prioritize, especially when you, you travel and speak and get to talk to awesome people like you all the time.

**Trevor:** [00:14:09] Oh, thank you. Um, yeah, it's like, that's one of the things I struggle with too, is like, I still have not learned anything about Kubernetes and I hate myself a little bit for it.

**Jessica:** Like, you know what, there's still plenty of vocabulary. Yeah.

**Trevor:** But like, I've been, my head's been in other things completely also. And so you've got like, yeah, you gotta, you gotta pick and choose and Well, if you need, I have like plenty of sessions.

**Jessica:** They're at Build or Ignite or pretty much every single conference I've done this year. I think I've talked about Kubernetes. So I have plenty of content and demos I can give you when you're ready and have the time priority to learn.

**Trevor:** That's fine. That's— this is what's another thing that Steve and I were talking about is getting like stuck in the default case statement for words.

**Jessica:** Oh yeah.

**Trevor:** And we have— we had like a 10-minute conversation about our stuck words. So, what are you excited about coming up besides KubeCon?

**Jessica:** So, KubeCon is always exciting, but I mean, there's so many other conferences I have the wonderful honor of participating in. Tech Bash is one next week. And actually, aside from speaking at the conference, I'm also one of the hosts, or I am the host for the women and non-binary event. So, that's cool. And then the following week is JAX London. I'm speaking there on a session, and I'm on a panel for something with Kubernetes. I just saw Kubernetes, they want me in a keynote panel, and I said yes. Let's talk all things Kubernetes. The week after, I'm super excited. My girlfriend and her kids and everyone, we have a family vacation planned to Disneyland.

**Trevor:** [00:15:39] That's fun.

**Jessica:** Yep. And then the week after that, another Tech Days workshop thing over in Sweden. Jenkins World France is coming up. There's a lot of really cool things in the pipeline, and I'm so incredibly blessed to go, and I'm excited for all of them equally. I mean, everywhere I go, I meet new people, new crowd, get to have more fun. And as far as anything I'm excited for with the next year, I'm really, I mean, already with, I think this was the largest Ignite ever. Like this is 26,000 people and even KubeCon coming up was the largest KubeCon ever. I'm so excited to see how this tech space continues to grow next year and then the year following. Like we're just in such a transitional period in tech, but it's like also a growth period and it's so awesome.

**Trevor:** Yeah, it's, it was really interesting. This is my first Ignite.

**Jessica:** Okay.

**Trevor:** And so I've only ever heard things about Ignite or about TechEd, like all these different things, and it's just such a much better experience than I was expecting coming from what I'd heard people complain about. So it sounds like there was a lot of really good, like again, kind of coming back to the like everything is DevOps, there was a really good feedback loop about people talking about how long it took to get to different sessions, how claustrophobic some of the expo hall was. I don't think I heard anybody talking about that this year. I mean, I heard some people complaining about, you know, time to get to places because in a conference with 27,000 people.

**Jessica:** [00:17:02] Yeah. Well, and also, I mean, this conference center is huge from end to end. I believe it's half a mile. So one of the highlights of this particular conference has been that every single person has reached their step goal for the day. It's, I mean, unbelievable. But, um, the other complaint, which I find super funny, um, because we get it all the time, but I guess a lot of the rooms, and I can attest to this, have been freezing cold. Like super, super cold. But I get that in my feedback for my sessions. So I'm reviewing it and I'm trying to learn like how I can improve my content. And all I'm seeing is room was too cold. That doesn't help me. And I didn't control the temperature. Trust me, I'm freezing too. I just have lights on me. But I think that's been the only complaint and definitely relay the, I guess the moral of the story is, is as you pointed out how like things have improved year over year, always relay your feedback to the people who can make that change. Like put it in your survey feedback. Maybe not your session feedback. So if you have made a suggestion and you didn't put it in the survey, you've put it in your session stuff in the past, perhaps change the way that you make those feedback so that the important people who actually can do something about it will be able to address that in the future.

**Trevor:** [00:18:09] That's a really good point. I mean, and I don't know that everybody thinks about that. That session feedback in general, unless it explicitly states otherwise, is for the speaker so that they can make things better.

**Jessica:** And make things better for the content we're delivering, not so much from your overall experience sitting in the room. From sitting in the room perspective, or if you've had any other complaints as far as food or walking or distances or hotel locations or anything, that's stuff that definitely relate back to the survey. So again, as you pointed out, we can make improvements for that going forward.

**Trevor:** What else is new?

**Jessica:** What else is new? That's a good question. My latest big priority has been trying to— so I spent the first half of the year and probably now I guess we're into October almost. So, it's like the better half of the year, really working on educating people in the containers and Kubernetes space. So, most of my content is really like 200, touching on 300 level. I don't have deep dive content. And it's also, I've noticed that it's really kind of hard to have that deep dive content kind of available from a production scenario. So, my goal is to create it and to kind of explain a little bit more. There's a lot of questions as far as, okay, how do I do Kubernetes with databases? And then how do I tie in and make this with a DevOps DevOps perspective, so that way I can restand up my application, restore a backup of the database, and then add in things like canary and blue-green deployments and do that with Kubernetes simply. Like, from default, there's so many different tools that I've mentioned already, right? You have the base vanilla Kubernetes, you have Helm, you can start tying in ingress controllers, whether that's NGINX or Azure has HTTP routing, which is a form of NGINX. You can tie in Istio for a service mesh network, and then you can use Istio to direct your traffic accordingly for your services. Put 90% here and 10% there and allocate.

**Trevor:** [00:19:57] That's cool.

**Jessica:** It is, but there's so many different tools. It's like, how do you get this stuff set up simply and in a DevOps automated way? Where do I start? Even doing something simple like WordPress. Like, okay, so I have WordPress, which is a stateful application, and I need my database. I have Helm charts that'll spin up a WordPress deployment and MySQL using a persistent volume claim, but is doing database in Kubernetes really the best option, or should I use an external service, or How do I do this? How do I get started? Like you start thinking it, because even if it's, I mean, WordPress is just a simple blogging platform, but how many websites out there, um, are using some sort of where you have a web application with a database component? How do you, how do you do that from production with high availability, with failover, um, load balancing, your blue-green deployments? Like I want to start having a real-world scenario demo for that and I don't have it yet.

**Trevor:** So that's something that's such a hard thing to do. Yeah. I mean, that's— I've been working with trying to frame legacy app migrations. And it's so hard to find a legacy application that's open source that you can just go pull and run without having to get a crazy complicated license that has a complex enough architecture that makes it interesting, like WordPress. And so like I actually found, um, the old Movie Database sample that they released with ASP.NET MVC 1.

**Jessica:** [00:21:25] Oh, wow.

**Trevor:** Um, and I packaged that up and deployed it out through there. But yeah, it's, it's, it's interesting to try and think about how you— that's often the hardest problem is, is having a reference space and figuring out what a good reference space will look like so that other people can identify with it and understand and translate it into their world.

**Jessica:** Yeah. And I mean, like I said, we talked about session feedback earlier. Like, I read all of my feedback and that's definitely been a request has been how do I— like, it's great that I have all these getting started tools, but now what do I do with them? And like, for realsies, maybe that should be like my session is like Kubernetes for realsies. That's going to be the title. But I mean, it's true, right? Because even for me, like, I'm trying to wrap my head around all this stuff and I've actually been using WordPress for, for years, like Um, back before you just, it would set it up on a virtual machine and then you like even FTP over and you like copy your plugins directory and all this stuff. But now how do you do it from this like container space and then have it with, again, like, as I said, like failover and all like the, the DevOps things that we also talk about. So we rub a little DevOps on all this. And how do we like do it to where it's, where do I even know where to begin? Um, and put it into something that's digestible. Like there's plenty of tools and I have seen like a few blog posts where you can tie it into like paid services, but I'm trying to do it with the open source world? Because if I can take something that is like legacy, that can run on-prem or on my local system, and then expand it out ultimately into the cloud and into orchestration, how can I take it utilizing all these best practices? That's probably the newest thing that is on my top priority list that I'm excited for. And also, sometimes I sit there and I blink at my computer and I'm like, what? Where do I start? Okay.

**Trevor:** [00:23:10] Yes. And that's actually interesting because that's very similar to some of the stuff that I've been thinking about. I want to do a talk around software forensics and how do you figure out what all these different things are? How do you decompose these old applications that we have around so that we can understand, translate them, orchestrate them, and put them in these packages that we can put anywhere?

**Jessica:** Yeah. Yeah. No, I mean, that's really important because artifacts at the end of the day, like you have to kind of break them down and know what's in them. That's been the other part. Like when I do consider writing, okay, a production, like stateful application with a database component, Let's say that it is something that's regularly used, right? Like, you have MySQL. Obviously, I can use that in something like Cosmos DB. But then I have my web application component, whether it's a WordPress-based image and I have PHP and all these different components, or it's .NET or Java. Am I using an upstream predefined version from Docker Hub where I can't control and I don't know anything that's packaged in that image? Or am I writing my own and now I'm managing it and now I'm maintaining it? If I'm writing it from a production world scenario, I should be controlling everything, including when vulnerabilities are released. I think just yesterday, Alpine Linux had a vulnerability that was announced.

**Trevor:** [00:24:19] Oh, wow.

**Jessica:** So, I mean, like, you have to kind of be prepared for, are you going to trust somebody else to handle the things that are running in your production environments? Are you going to be in control? And if so, I want to consider that again from, like, the blog post. So, when you talk about, like, again, artifacts and breaking it down from a binary level, that's super important.

**Trevor:** Yeah. And it's, it's hard.

**Jessica:** Yeah.

**Trevor:** A lot of people don't have, because we're usually thinking about how we put things together, not how we take them apart to put them somewhere else.

**Jessica:** Not how we take them apart and then make sure that the pieces that are there are safe to use when we do recompile them. Yeah.

**Trevor:** That's an, that's actually an interesting way to think about it too, because yes, how many of these old apps that we look at, when we actually look under the covers, yeah.

**Jessica:** Do you want to know what's in there?

**Trevor:** Yeah. When was the last time somebody looked at the SSL, the, the, uh, The SSL library that was associated to this.

**Jessica:** Yep.

**Trevor:** 10 years ago. Oops.

**Jessica:** Yeah, there's— that's a problem. Yeah, I think even— I mean, you can pull apart like Debian Jesse images. Like, there's actually— there's a few different image scanning tools that you can use that'll tell you like if there are any vulnerabilities in it. And if you're using that as a base image and now you're building ultimately like a multi-stage Docker build, and so you have this as your base image for FROM, and then you copy stuff over, you do a whole bunch of like restore and compiling, and then you ultimately publish your artifact within your Dockerfile, you've now built your package using an image that started at a base with vulnerabilities and bugs baked in. So, now you're going to have to rebuild all of that. And if you've tagged your image that you're basing with a specific image tag, you're now going to have to go back and update it to whatever the latest patch tag is. If you control your images and you've approved all the changes and you know that the images you have don't have any current vulnerabilities, vulnerabilities. You can safely tag maybe latest, which is usually a no-no, but you can safely do that if you're controlling your images and you're controlling the components in the build process 100%.

**Trevor:** [00:26:09] Absolutely. You've got to have this kind of— is it the right word? Striation? Yeah. You've got to have your base OS, then you've got to have that layer of configuration on top of it that is the OS config, and it's tied libraries, things that the OS has baked in. And you've got to have your application sit on top of that. It's like, it's these 3 components that make up this whole pipeline. Yeah.

**Jessica:** And it starts getting super, um, it can start getting super robust for something that you thought was incredibly simple. But I think it was, I can't even remember the context, but the gist of it was Jess Frizzell actually published something where she opened up some sort of Java package or something that had been, I guess, recompiled several times. And she found like 700 different versions of Java that were like baked into one giant image. And it's, are you even taking a look at what the base image is that you're using? Like, are you actually breaking it down or are you just trusting that whoever uploaded it to Docker Hub, even if it's a company, that they didn't make any mistakes?

**Trevor:** I know. And that's one of the things that gets so hard too, is we're often, you know, there's the triangle of priorities and needs that you can accomplish and you can pick 2.

**Jessica:** [00:27:18] Yeah.

**Trevor:** Right. Most companies have these, like, do it as fast as possible. And not the, like, do it as fast as possible safely.

**Jessica:** Well, and so it's funny you say that because I used to tell— I used to also be a private consultant, and I used to tell people, good, fast, and cheap. You can only pick 2.

**Trevor:** Yep.

**Jessica:** And people get upset because they're like, well, I want it good and fast, but I don't want to pay a lot. Nope, you can only pick 2. Well, I want it cheap and fast. It's probably not going to be good. So when you think about it from a time management perspective, what's cheap and fast? So cheap in the sense of time I can quickly and easily go to Docker Hub, pull an image, get it up and running, and it's built. It's fast.

**Trevor:** But I have no idea what's in there.

**Jessica:** And I have no idea if it's good. Yeah.

**Trevor:** And then, like you said, you've got potential for all these different vulnerabilities because you didn't take the time to decompose it, understand what it is.

**Jessica:** And now I'm going to push that out into a production environment and just trust it?

**Trevor:** But, you know, then you get the wonderful argument of, well, it was running in the other production environment before.

**Jessica:** Well, but that's the same argument as, well, This application runs fine on my machine. Why doesn't it run on yours?

**Trevor:** [00:28:21] Yep, absolutely. Yeah. And it's just, it's one of these challenges. It's hard to kind of convey why that's risky.

**Jessica:** Yeah.

**Trevor:** And I think that's going to be one of the topics we see come to the forefront over the next year is, you know, we're moving all these old things out, but what is it we're dragging? Like, what skeletons live inside of these applications that we're moving forward?

**Jessica:** Well, and I think that's why I always try to educate people. People that when I do my sessions on Kubernetes, like, one of the very first things I talk about from a best practice perspective is build small containers. How are you going to achieve building small containers? You have to structure and know what you need for your application and your runtime environment and all your process isolation, and you have to define it and structure it accordingly. So, I actually did a blog post a few weeks ago where somebody had asked me, how do you do a git clone on a private GitHub repo. So, whether that's in Azure DevOps or like any private repo over on GitHub, do you use a personal access token? Do you use an SSH key? How can you safely bake that in? Are you caching your SSH key or your PAT as part of a layer? In which case, now there's a safety vulnerability. And so, I went back, I utilized the importance of, or reminded people the value of using multi-stage builds. So, that way I can actually do all my clone, like my clone, get everything in one particular part, and then I I pass over the artifact, which would be the cloned folder, over into another image, and then the other image gets discarded, and then I have this without my path or my SSH key, which is my, like, technical artifact. But at the very front of it, what's the base image you're using? You could do simple commands like that using Debian, but what if there's a vulnerability in that? It's also huge. So, I can do that entire image just to do a git clone and copy SSL and whatever I need to copy my SSH certificates. I can do that in about 86 megabytes. Or I can use Alpine, even though I did just say that there was a vulnerability, obviously be cognizant. But I can use Alpine and do that same image in 8 megabytes.

**Trevor:** [00:30:19] That's insane.

**Jessica:** Yeah. So, you have to be cognizant of that. Like, again, your foundation matters, what you're using, what you're adding in, your build packages. All this is super important.

**Trevor:** What would you say is your take— your big takeaway from this week at Ignite?

**Jessica:** My big takeaway is just that there's 30,000 new people that I never knew existed that are obsessed about the same technology stuff I am, and I think it's awesome.

**Trevor:** That is awesome. So, we're going to wrap up.

**Jessica:** Okay.

**Trevor:** So, head over to arresteddevops.com/deanignite18. Remember, that's 2 Es, not James, not like James Dean, for this episode's show notes. And the site also has our newsletter, merchandise, Patreon, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store if you want to help other people find the podcast. Thanks so much, Jessica, for joining me today.

**Jessica:** Thank you so much, Trevor.

**Trevor:** I'm Trevor, @trevorghs. This is Arrested DevOps, and remember, there's always DevOps in the banana stand.
