**Alyssa:** [00:00:00] No, no, no. Gates break DevOps, period. You can't do it.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton.

**Jessica:** I'm Jessica Kerr.

**Matty:** We have a super interesting show today, but before you hear the super interesting show, you need to hear a word from our sponsors. The worst thing about the Arrested DevOps podcast is when it ends, you're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app.

[00:01:28] Joining Jessa and me today is Alyssa Miller. Welcome to the show, Alyssa.

**Alyssa:** Hey, thanks, guys.

**Jessica:** How are you doing?

**Matty:** Super excited to have you on the show. We're going to be talking about open source security today. But before we go into the topic, let's hear a little bit about you, Alyssa. Where are you working these days and what have you been up to?

**Alyssa:** Oh God, lots to tell, but I'll keep it short. I'm currently an application security advocate for Snyk, and our focus is all around securing the open source community, cloud-native technologies, and working with developers, producing developer tools, not creating security tools for developers to use, but literally creating developer tools that help them be more secure. I've been in security 15 years now. Yeah, I started, as a lot of us do, as a hacker. I mean, I've been hacking since I was 12, so there is that. But yeah, my focus has always been more around app security because I'm, I myself, a recovering developer for, you know, probably most of a decade working in financial services in particular.

**Matty:** [00:02:38] Fantastic. And yeah, so you're at Snyk, and we had a whole conversation before about how to pronounce that. I know Corey has complained about it. Corey Quinn has complained about it on Twitter, but we know we've heard it. It is Snyk. And Snyk—

**Jessica:** And how do you spell that?

**Matty:** Oh yeah.

**Alyssa:** S-N-Y-K, which is why everybody gets it wrong or they're confused. I shouldn't say all get it wrong. Most get it right, but—

**Jessica:** Do you have the logo of the little dog with the pointy ears?

**Alyssa:** Yeah, that's Patch. Patch the dog.

**Matty:** So Snyk recently published this year's State of Open Source Security Report, right?

**Jessica:** Right?

**Matty:** And if I recall correctly, this is the second year that y'all have had that, if that sounds right. At least the third.

**Alyssa:** I think there might be a fourth.

**Matty:** Oh, there you go. Shows what I know. Well, that's why you're the expert on this show talking about it and not me. But can you tell us just a little bit about, yeah, about the report? Where does it come from and why do y'all do it?

**Jessica:** [00:03:38] Yeah.

**Alyssa:** So, you know, ultimately it's an annual report that we create just on the, as the name would imply, state of open source security. Where are we at in the open source ecosystem in terms of our security posture? The report is a combination of a couple of things. We do a lot of research in the open source community, so leveraging data that we can pull from GitHub and GitLab and Bitbucket and places like that, so all the major repositories wherever we can find open source data, certainly able to leverage that. We do leverage aggregated data from our own product. We've got hundreds of thousands of developers and maintainers that are using Snyk every day to scan their projects. We pull quite a bit of aggregated data, get some stats from that as well. Finally, we actually conduct a survey every year with folks in the community, whether they're security practitioners, developers, operations personnel, whomever. We get a wide range of folks. We pull all of that data together, and the goal is really just to understand where are we at in these ecosystems. We've got developers creating and using, whether it's software packages, container images, other things from the open source community. And of course, again, like I said before, for Snyk, I mean, open source security is the heart and soul of what we do. It's our passion. And so we really want to understand, are we getting better? Are we getting worse? What are the challenges? And what are the things that people are doing right that we can really build on?

**Matty:** [00:05:25] So we'll put a link to the report in the show notes too, so everyone can kind of check it out and also find out that there's many more of them than I thought there were. But when you're looking at that, so you said, you know, we're kind of looking at this Let's talk a little bit about what are some of the biggest trends maybe that we saw in this year's report from year over year?

**Alyssa:** Yeah, I think one of the trends that we see, and it just continues to play out, is the level of just use of open source dependencies. There's significant growth year over year just in terms of the number of packages available. Indeed, we go out and we query npm. The number of packages available through npm alone is astronomical, and it grows by almost double every year. Again, we saw that once again this year. Anyone who's developed in npm or in Node.js understands the concept. Open up your project, npm says, hey, I'm going to go load your dependencies. Meanwhile, you go get lunch or maybe take the dog for a walk or something because you're going to be there a while. One of the things that's really interesting about it is you look at what we find in the way of vulnerabilities, and so often, they come from not those dependencies that you've defined. You go and you build a Node.js app, you define your dependencies, but every one of those packages has its own dependency, and that's whether you're in Node, whether you're in Java, .NET, whatever you're using. Especially in the Java and JavaScript ecosystems, the bulk of the vulnerabilities that we find come from those indirect dependencies, not from the direct ones that you easily know about. They're the ones that you really have to dig to figure out, oh yeah, I have 3 different versions of this Struts framework running in my app at the same time. That's probably not a good thing.

**Jessica:** [00:07:20] Those are the ones you really don't want to think about.

**Alyssa:** Right.

**Jessica:** The ones you listed are the ones you want to think about, but you listed 10, and npm is like, 30,000 packages loaded.

**Alyssa:** Exactly. I mean, I love it. We have an example we use of this 80-line JavaScript code. It has 7 dependencies, and that blows up into 59 additional, and suddenly, your 80 lines of JavaScript or of Java turn into 750,000 lines. That's the world we're in. I mean, that's not where I grew up. I grew up, if you had a 100,000-line app, you wrote 100,000 lines of code. It's not that way anymore.

**Jessica:** Yeah, those were the days.

**Matty:** So when you think about that, and I want to go into it, but when you think about where, though, let's take a second to talk down this trade-off that happens with the simplicity of just pulling in some other package that just does a thing, that maybe does a thing that you could do yourself, but it's just easier to grab someone else's package. But then you also don't know all the other things that's in. And is this one of those things where we could get better about determining this, or is it that we just make our peace with the fact that this is how we code now, and you're going to have your 80— your 80-line Java is going to be huge, and that rather than trying to— like, where do we solve for this, I guess?

**Alyssa:** [00:08:39] I mean, I think it's really— yeah, we have to be aware of it. And we have to do— I think it's steps that we just have to take in the development process, because honestly, I don't think it's something that would go away. I don't think it's something where we can easily say, oh, we're going to stop doing this, and, you know, yeah, you can grab this package and it would be really easy, but no, you have to write that code yourself. Especially from a security perspective, we spend how much time telling developers, don't do that. Don't roll your own encryption. Don't create your own encoding. Use what's available and proven. Quite honestly, what we have in ecosystems today where we can leverage these packages that other people have written, I mean, this was— when I was a developer, this was kind of like the panacea, right? This is what we wanted, that ultimate in reuse. You create it once, you open source it, everybody else can use it, and they don't have to reinvent the wheel. So I don't think you're going to see it go away, but I think the issue is we need to have the awareness and then just understand what, what the things are that we can do, what tools are available to us, whether it's through npm, whether it's through third-party products like Snyk, to actually be able to investigate and build not only just, you know, hey, we understand what's here, but think about this, the concept you're hearing more and more about the idea of an SBOM and being able to say, this is my software bill of materials.

**Jessica:** [00:10:08] This is—

**Alyssa:** oh, oh, S-B-O-M. Sorry. Yeah, but software bill of materials is something that's getting a lot of attention, especially in the healthcare space. You know, last year FDA released an advisory about— boy, I want to say it was— I don't recall what package it was, but it was a rather popular package.

**Jessica:** Did you say the FDA?

**Alyssa:** Yeah, the FDA.

**Jessica:** The Food and Drug Administration.

**Alyssa:** Sorry, I should be clearer.

**Jessica:** It's into open source packages now?

**Alyssa:** Oh God, you have manufacturers of medical devices that are using open source packages as part of their firmware and their software. But that was the issue, right? So normally the FDA issues an advisory and they can say these devices from these manufacturers are impacted. They couldn't say that because none of these medical device makers understood what was in their software. They just knew that it was commonplace and that it was showing up. And so when the Food and Drug Administration in the US said, hey, there's this vulnerability in this package, it was kind of— it was just like we saw with Heartbleed 7, 8 years ago, whatever that was, where everybody suddenly was scrambling to figure out, do I have that open source package in any of my software? Where does it exist? And what do I have to do about it?

**Jessica:** [00:11:29] Yeah, we're getting better at realizing that, yes, we're going to use this open-source software that is the professional way to develop, but we need to be open and clear and be able to publish what we are using. It's funny that you wouldn't want to write it yourself because if you write it yourself, you're still going to have vulnerabilities. It's just that no one's going to send you mail about it.

**Alyssa:** Pretty much, right? I mean, at least when you grab something from the open source community, in theory, there's been some scrutiny just by the fact that other people have used it. And— oh, go ahead.

**Matty:** I was going to say that, but that's one that I think is like, needs to, needs to come with a big caveat that there— what I'd say is there could have been some scrutiny, right?

**Alyssa:** Right.

**Jessica:** Sometimes doubling of packages on npm every day.

**Matty:** Sometimes, like, the advocate— like, I'm very much wound up on work as imagined versus work as done today, where we talk about these things that, like, yes, because if it's open source, then it will have been reviewed. Like, it could have. Like, maybe that's what we would like to be true.

**Jessica:** [00:12:37] It's theoretically possible, yeah.

**Matty:** Right, right, right. So, I think we have to be careful. Now, I'm not discounting that. Put it this way, if it's not open source, it most definitely didn't get looked at by other people. It's plot, you know, so, but I, anyway, but yeah, if you, back to your point, I just think we need to be, sometimes we get zealous. Some people can be like, yes, we have this, or I'm gonna open source my own thing. And then all these people are going, I'm like, well, are they though?

**Jessica:** No, no, no, trust me. Nobody looks at what I published on npm. It's so easy. It's easier to like publish it on npm than to get it from one computer to another any other way half the time.

**Alyssa:** Yeah, well, and yeah, I've seen— I know people that do it that way. It's much easier, right? But then this brings up the exact topic of package health, right? And that's a— that's an important concept when we talk about the awareness of open source and open source security. It's how do I determine what packages I trust, right?

**Jessica:** [00:13:39] Right.

**Alyssa:** You know, I mean, and there's, there's all sorts of mechanisms, and there's been lots of lots of conference talks on how do you measure package health. And it's unfortunately one of those things that has no answer at this point. There's no generally accepted methodology for how you measure it, but looking at how widely used it is and how long it's existed and how actively maintained it is, how many PRs are they actually accepting in a given time period, things like that can at least give you some idea that, okay, this is one that's getting a lot of attention. Or this is one that, you know, Jane Smith released last week and no one's done anything with it. Maybe I don't want to put that in my enterprise software today. So, you know, there are those things and it's— I think that's where a lot of it, you know, there has to be that awareness that, yeah, just because it's, you know, it's out there doesn't mean that it absolutely has been reviewed. Doesn't mean it's gotten scrutiny. There's more researchers doing work in that space, both from a commercial sense. You know, we do at Snyk, we have our research team is actively every day they're going out and they're looking at different projects. But even in that case, you can't tackle the world. So what do you do? You look at the ones that probably have the most wide-ranging impact if something happens. So you look at the most popular packages.

**Jessica:** [00:15:06] So the ones that are popular are likely to have scrutiny in more than one way.

**Alyssa:** Yeah.

**Jessica:** It's likely that someone has already looked at them, but also more people in the future are going to look at them because they're being used.

**Alyssa:** Exactly. So you have better opportunity that if something does come up, it's going to be discovered and, you know, notified to the community. And quite honestly, we've got academic researchers doing the same thing. We work with a number of them who report vulnerabilities to us on a pretty regular basis. One of them is SecLab at— I want to say it's UC Santa Barbara, if I recall correctly. Their researchers have reported a number of vulnerabilities to us because they're doing the same thing. They're going out and they're usually looking for a particular type of vulnerability, and so they go through a couple thousand projects from the open source community and say, can we find these patterns and identify these vulnerabilities.

**Matty:** So that, so that when we're kind of talking about, you know, things that suck, for lack of a better word, right? You know, which we can spend a lot more time talking about.

**Jessica:** [00:16:11] They're not as we would prefer.

**Matty:** Not as we would prefer. So, but, but back to like the findings from the report, like, are we getting better at this stuff? I mean, yeah, like, like, where are you seeing things changing? For the— I hate to say for the positive because that, you know, but like in the direction that we would prefer?

**Jessica:** Right.

**Alyssa:** Well, I mean, let's, you know, call a spade a spade. Sometimes, yeah, it is positive change. Um, you know, one trend that we'll be watching— I don't want to jump on the bandwagon yet and say, wow, hey, we're getting better— is that the total number of vulnerabilities across the ecosystems we looked at was— grew by less of a rate than it did last year. So there were fewer new vulnerabilities reported in 2019 than there were in 2018. That's a positive indication, I'll call it. Not ready to say, hey, we're getting better at security, because there's a long road to take to prove that, right? Um, what some of the things I did really find kind of impressive were the attitudes around, for instance, DevSecOps. And, you know, we asked the question last year, who's responsible for security of your applications? And it's a multi-answer multiple choice, so, you know, you can select more than one. Well, 80% or 85% said developers, predictably and expected. Yeah, of course. I think 23% last year said security, and, you know, operations barely even showed up on the radar. This year was much better. We saw that same 85% said developers, but then we saw 50-55% for security and operations, which is like, all right, so we're starting to get the hint that you need all 3 if you're going to run a DevSecOps development pipeline. You need all 3 of these groups of people or these different disciplines working together. That's a big one. I was really excited. To see that. I think there's some good work going there. We saw a fair amount— certainly not as good as I would like to see it, but we're seeing growth in people's awareness around things like Kubernetes and the number of organizations that are actually doing things like having reviews of their YAML or their JSON, doing audit reviews of their production clusters, looking for config issues and things like that. Numbers aren't where we want them to be, but they're definitely better than they've been. Unfortunately, there's still 31% who said, well, I don't know, or, we're not doing anything, so that's a little scary, but we're getting better in that space. With the growing number, we're up to 44% of our respondents said, yeah, we're using Kubernetes today. Obviously, that adoption is just going to continue to go up. I'm glad this idea of infrastructure as code and all that, the fact that all this stuff is defined in code, has kind of clicked, and people realize, yeah, while we do code reviews, we should be reviewing all that code too, right?

**Matty:** [00:19:30] Well, and that's the thing, right?

**Jessica:** The YAML code.

**Alyssa:** Yeah. Yeah, the YAML code. Obviously, your Helm charts and whatever else, once that's deployed in production, now you have an environment you need to deal with too, and that's that whole, what does the production cluster look like? How is it configured? And so forth. But just catching that on the way up to that point before deployment, you've got everything there in front of you that you can look at. You know what it's going to look like when you deploy.

**Matty:** Were there any surprises that you saw, either you personally or just as an organization, like things that kind of made you go, hmm?

**Alyssa:** Yeah, actually, so one of the things we did that was new this year, and I— it was kind of exciting, was, uh, you know, in the past every year we've looked at vulnerability trends, right? What vulnerabilities are most reported? And that was a lot of the same old story, right? Cross-site scripting is top of the list. Um, it's all the same usual suspects, which is kind of disappointing too, but What we decided to look at this year was, okay, we know there were more reports of cross-site scripting vulnerabilities than anything else, but let's do that— let's add an extra measure here and let's compare that to the impact. So what we did was we looked at how many vulnerabilities were reported versus how many projects were impacted. And so we just laid it out in a scatter plot and, you know, so on the y-axis we had the number of vulnerabilities reported, x-axis we had the number of projects impacted, and so you're kind of expecting like, all right, the vulnerabilities that we're going to worry the most about are going to be the ones that are in the upper right, right? They're going to be the ones that have a lot of reports and they impact a lot of projects. Surprisingly, when we plotted this out, there was nothing in that upper right quadrant at all. So yeah, cross-site scripting is way up there in the left, left upper quadrant because there's a lot of reports of it, but it wasn't impacting a lot of projects. And so you can kind of conclude from that that maybe the bigger, more popular, well-established projects have figured out how to eliminate these things, or they've been eliminated because they've gone through all that scrutiny. And the ones where those reports are showing up probably aren't as popular. On the flip side, you know, way out on the far lower right, so lots of impact but low numbers, were things like prototype pollution and deserialization issues. Those are things that a lot of developers haven't heard nearly as much about. We haven't talked about them as much from the security perspective because a lot of them are newer attack vectors, like this idea of prototype pollution in particular. In fact, some developers still debate whether that's even a vulnerability, and it's only when you kind of show them the exploit or the attack vector of it that suddenly, okay, they'll pay attention a little bit more. But so those are ones where, okay, there's not as much awareness, so they probably do. And indeed, I mean, there were 2 in particular. Oh, Lodash had a significant prototype pollution vulnerability in 2019 that really skewed that number big. And it's escaping me now what the other one was. I believe it was jQuery had one as well that was you know, really significant. And it's like, okay, so that's kind of an indicator that maybe we are getting some things right. Surprising, you would have thought there would have been something in that upper right, but also a little promising that maybe, you know, these more novel attacks are the ones that have big impact now, and the attacks we've known about—

**Matty:** [00:23:09] regular hygiene is being done well. Yeah, exactly.

**Alyssa:** So, so yeah, that was, that was a really cool one.

**Matty:** So I understand why Snyk does this report and what y'all get out of it, but what— how can, uh, someone who doesn't work at Snyk get value out of this? Like, how is this report useful for whether it's your average developer, whether it's someone working, you know, in leadership in, in tech in a company? Like, how do the rest of us use this report? Like, what, what do we get out of it?

**Alyssa:** So quite a bit, right? I mean, there's that whole story, first of all, like I was talking about before We actually refer to it colloquially within Snyk as the stranger danger story. It's that, hey, I've got all these packages I don't know about that are part of my code and could have vulnerabilities. Understanding that concept and understanding where vulnerabilities are showing up is crucial for any development organization, just to know that, okay, this is something. How do we address it? Another big one that really was kind of personal to me was containers. When you think about container images, and I think there— I know because I saw it in a blog while I was doing some research for the report, that there is an assumption in the open source community that if a container image is an official Docker Hub container, that it's received scrutiny, it's been reviewed, it's generally safe. I actually read a blog where they said exactly that, that that was your best bet. Well, when you look at our report, you see that that's really not the case at all. In fact, we looked at the top 10 official container images in the last 2 reports now, and not only were the results scary, because especially for the Node image in particular, off the charts, the number of vulnerabilities, it hasn't changed year over year. It hasn't gotten any better. Some of these assumptions that we make might not be valid. It brings up that conversation again about, okay, how do I really go about securing my containers? Because I can't just assume that because I'm using an official image as my base image in my Dockerfile that somehow that's going to make me secure. That's the reality of it. We have to be more discerning about it. I tell people it's kind of like what's old is new again. In this space, because you built servers. What did you do? We preached from a security perspective, oh, you have to minimize the operating system. Don't install any more components than you need. Don't put software on there that you don't need. It's the same thing when you look at container images. That Node image, Node latest, which grabs— I think it was Node Buster— 642 vulnerabilities when I pulled it to do the research on this. Well, if I went and I pulled Node Slim instead, that 642 dropped to like 53. Right there, just by limiting the size of that container image, if you can get away with using the slim image, use it. Don't use this full-blown buster image that, as it turns out, had all these image processing libraries and other stuff in it that I'm willing to bet most Node apps don't need.

**Jessica:** [00:26:28] In production, yeah. I think that Node latest image is really convenient for development. If you're going to run a Docker image locally on your development machine and try some programs out and check out what Node can do and that kind of thing, it's super handy to have all that extra stuff. It's nice when vi is installed. But for production, that's a completely different animal. Different thing. Your ops people probably want to be aware of what version of Linux it is exactly based on and all of the packages that are installed.

**Matty:** But don't you run into— almost in a way, and I'm being a little intentionally obtuse, but this is getting us back almost into works on my machine. If you're like, well, the container that I use when I'm developing is not the one that it's going to go to, you've kind of lost some of the But that's not also just— so this is why I said I'm being intentionally obtuse, because that's also not what Jessica was saying, right? But I think that that's what people could find themselves doing because it's easier. I mean, why do we not use slim? Because it's easier to not, right?

**Alyssa:** [00:27:39] Like, you know, Buster, and it worked. You put it on slim, it didn't work. Let's just go back to using Buster rather than figure out what libraries can I add to it and create a new image that has exactly what I need.

**Jessica:** Creating a production image is a different activity from getting it to work. That's where only since starting to use Docker regularly for development, I've learned things like, what is Buster? Just yesterday, I learned that Buster is version 10 or something of Debian, but I learned that designation, it's not just about the kernel. It's about the packages, that Buster is really— yeah, it's a set of kernel bits, not a super technical term, Jess, but it's also the apt libraries. They actually freeze those, except for security and bug fixes, and that's why the version of Ruby is always ancient, which is a pain.

**Alyssa:** [00:28:45] We don't see the types of incremental updates for Debian in particular as you do for other distros either. That's why that Node image in particular ends up being so— I mean, when you look at the graph, it's like this huge outlier. We actually had to break the x-axis to make it all fit in a page because otherwise, you've got 642 in Node, and then you go to the next highest one, which is Postgres, and it's like 72.

**Matty:** Oh man, you're like, it needs its own special graph.

**Alyssa:** We had it, we had to do some special scaling 2 years in a row because it was that way last year too. And but, and that's not to pick on the Node image. I mean, it's again, you know, it's not a production image.

**Jessica:** Don't put it in production.

**Alyssa:** Use one of the slim images that are out there and things change. You know, you get, you have a very different story. So it's so much of it comes down to what's the base image that sits behind it.

**Jessica:** Oh, and it's so hard to know.

**Alyssa:** Yeah.

**Jessica:** Like, I really wish I could be like Docker. Just tell me the base image and its base image and its base image and its base image. And I can't figure out how to do that.

**Alyssa:** [00:29:54] Do you want to write a commercial for Snyk? Because you just talked about one of the wonderful things that Snyk does. Ooh, yay! I mean, literally—

**Matty:** This episode is not sponsored by Snyk, but if that's okay. No, no, not at all.

**Jessica:** But since I'm here, I mean, I think one of us in this episode is sponsored by—

**Alyssa:** that's where tooling comes in, right? That was that conversation we were talking about before, is we need that kind of tooling that says— that gives us just that visibility into simple things like that. Like, you would think that would be so easy, like, hey, did you know you're using this and this is the base image? Um, you know, here's some other available images instead. Um, that, that's important information. Unfortunately, without using something like a third-party tool, it's oftentimes not easy for developers to discover that or for your operations teams, who, you know, a lot of organizations are the ones who are ultimately holding the bag on these Docker container images. Yeah.

**Jessica:** [00:30:56] I mean, we use these because we don't want to know everything about them.

**Matty:** Right.

**Jessica:** Because it is an abstraction, and someone else has taken the work of trying to do this thing right. But at the same time, there are things we need to know. But how do you know that? Well, I guess it's other people's job to tell us. It's getting better.

**Alyssa:** I will say that Docker has done a lot, especially I think in the last year and a half, of just adding a lot of capabilities because they're aware of it and they know, and they obviously— Docker wants it to be much safer and easier to use containers and They've been making some real strides, too. There's a lot of promising things they're doing. Oh, the name's escaping me. Not certified images, but there's a level up from official. I swear it starts with a P, but I can't spit out the term. In any event, they do have images that have received greater scrutiny. They're adding more security scanning-type capabilities into Docker itself so that, yeah, you can hopefully start to have a little better sense of what do these images mean when I'm going to introduce them into my environment.

**Jessica:** [00:32:10] Is it Docker Certified and Verified Publisher Content?

**Matty:** There's a P in there.

**Jessica:** Yeah, somewhere.

**Alyssa:** I could be totally wrong about the P. I do that all the time, but yeah, you know. I don't recall for sure what it— What the term was now, unfortunately.

**Jessica:** Yeah, there's, there's a— I just went to Docker Hub and it says Docker certified. You can get a blue checkmark.

**Alyssa:** I, I— it's probably certified. Um, I'm probably just spacing. That happens.

**Matty:** Yeah, spelling is overrated.

**Alyssa:** Yeah, you spell certified with a P, right?

**Matty:** Right, but for certified, sort of try to certify, certify, certify. I like that. It's legit. I'll take it. I'll take it. We'll say it's a Midwest thing. It's cool.

**Alyssa:** I've been on stage too much today, I'm telling you.

**Matty:** So yeah, so well, let's, let's, let's talk about that for a second. We're gonna kind of pivot maybe. Um, we talk about being on stage and such things. So there's this SneakCon thing, like what's up with that?

**Alyssa:** [00:33:12] So everybody loves conferences, right? Right.

**Matty:** Um, so do we get to have them again?

**Alyssa:** Well, virtually still, you know. I mean, it's unfortunate, but yeah, so You know, Snyk's been looking for a while at how could we do a conference really centered around the open source ecosystem and so forth, but with a little bit of Snyk flavor to it, right? I mean, don't want it to be a marketing thing or something like that, but do want to bring in, in particular, our customers or people that use Snyk in the freemium environment or whatnot, bring them some really good talks from really good people around the industry. For instance, we've got Wendy Nather, who's on the security side of things, you know, with Duo, is coming in as one of the keynotes. We've got a number of other really impressive keynotes, but give people that opportunity where they can hear some of those, you know, very non-vendor talks, but also have some exposure to sneak demos and different how-to workshops. Other of our partners will be doing some demos as well. But then you also have, again, those vendor agnostic presentations as well, some birds of a feather conversations, basically trying to create something where it, it kind of draws it all together, right? You've got this vendor sneak telling you, we've got this great product, but how does that fit into everything else that we're trying to do? And how can I learn from other people in the industry and gain? So SneakCon is our first attempt at doing that. We've done a couple other conferences this year, but SneakCon is really kind of centered around that. Um, you know, and it ultimately— we're using it as an opportunity to raise some funds as well for charity. Um, we are raising funds for the Bill and Melinda Gates Foundation. Um, obviously they do a lot of really good work that we're really interested in. So, um, charitable piece to it too, which is always good. Anytime we can find an excuse to raise money for good charities, we're there. So, that's what SneakCon's all about.

**Matty:** [00:35:28] I was gonna say the CFP is open, but it closes tomorrow. So, by the time you're listening to this podcast, I guess sucks to be you. So, try next year. But I am looking at some of the speakers. I mean, you've got Obviously Patrick is gonna speak at SneakCon because you probably have to let him. That's cool.

**Alyssa:** Organizing it.

**Matty:** So yeah, yeah, I see. I— we know how that works. Actually, yeah. Oh, you got— you got John Alsbaugh, James Governor. Nice, nice. Good, good, good pull there. Yeah, so that looks fun. Plus apparently many names to be released.

**Alyssa:** So yeah, October CFP is not closed yet. So there's, there's a rumor I might be presenting something on Thursday.

**Matty:** Oh, your name's on the speaker page. Don't—

**Alyssa:** yeah, so yeah, we're gonna do some hopefully practical workshop with threat modeling and talk about how we get threat modeling into the DevSecOps world. That's one of my personal passions and pet peeves is the way that people kind of assume that, and for good reason, that you can't threat model if you're doing DevOps, especially if you're CI/CD, because It's too slow and heavy. So, yeah, looking at how we can do threat modeling within DevOps and bringing it to a community that's kind of rejected it.

**Jessica:** [00:36:54] I want to hear a lot more about that. What do you mean when you talk about threat modeling?

**Alyssa:** What I do is I break it down to why do we do threat modeling? What do we mean by threat modeling? At its core, in fact, when I talk on this, I throw up the GIF of Timmy Turner, and it's basically answering the question, what could possibly go wrong? You know, threat modeling is, hey, we're going to create this system, or we're going to create, in this case, a user story, right? So I've got this user story. I can look at that and I can say, based on data that's going to be introduced or used, based on functionality that it's creating, These are the types of things that attackers would want to attack. These are the types of things that are really important to our business. So as we start to design, plan, build this piece of software, this component that's going to implement this story or whatnot, we need to be aware of what those worst-case scenarios are because now our developers, who are really smart people when you give them the information they need, can start to really consider how their design can protect those things. And so traditionally threat modeling has been this big process where you go in and you draw these data flow diagrams and you map out the whole system and you spend days analyzing it and classifying threats according to this STRIDE framework in a lot of cases. And, and it's a big heavy process and it takes days and weeks. It fits great if you're doing waterfall where you have long design cycles. It doesn't fit well to do it that way when you're in DevSecOps, even when you're in Agile and you're doing sprints and whatnot. You know, just once you get into that mode, it doesn't fit. So what I've been telling people is, all right, you've got this idea of CI/CD, continuous integration, continuous deployment. Add another CI to that. It's the continuous improvement. And so if you take— instead of trying to threat model your whole app. Let's break that down. Let's look at just the user story. If I'm throwing a user story into the backlog, I'm probably someone from the business side. I understand the business context behind that. I know what's important to me from the business perspective, and I can make some pretty logical guesses at what types of attacks from a very non-technical perspective someone's going to want to do. Are they going to want to steal something? Are they going to want to expose data? Are they going to want to deny service to it?

**Matty:** [00:39:26] Whatever.

**Alyssa:** Those are things that a business person can understand and communicate to the developer through this idea of threat modeling. Now, you can take that, and then that informs the rest of the pipeline because, okay, I know that this is something I need to protect as a developer, so I can start to plan for that. I can build that into what I code. I commit it. Now I'm moving into my build and test cycle. Well, that threat model can inform specific test cases that I now build into my test plans. So if I've got a QA team that's doing the test cycle of my pipeline, we can feed it in there. If we get really, really good at it, we can feed it into our automated tools, right? And so it flows right down the line, and it flows all the way to production when we're post-deployment and we're setting up monitoring. These are things that I need to be watching for. And so if you do that user story by user story, are you protecting the whole system and making it, quote unquote, unhackable? No, we're never going to get there anyway, but we're getting incrementally better each time we do it.

**Matty:** [00:40:31] I really like how that, you know, kind of told that story about how then it lays into, into your monitoring, right? Because like, that's the thing is, you know, monitoring is just testing with a time dimension. Right, you know, I mean, and we treat that stuff and I think we do this in security, you know, and you are the far more DevSecOps expert than I am, but like, I feel like we make the same mistake on that side too of like testing and monitoring are completely different kind of fiefdoms and capabilities and we don't, whereas, right, you know, like I've said, you know, I'm like every monitor needs to have a test and you have to have full parity between testing and monitoring or else why? 'Cause if you don't care enough about it to monitor, Why are you testing? If you don't care enough to test it, then you're really testing in production the bad way then, right? Jess, you were saying something too.

**Jessica:** Even if you haven't been doing threat modeling and your system is what it is, you can take each user story, look at it with the business, and ask them, okay, what's the worst thing that can happen? With this new functionality? What are things that really shouldn't happen? Then you can create whatever requirement thingers for those, whatever you call them in your system, and implement those and implement monitoring for, hey, did this bad thing happen? Especially with that monitoring, even if you tested that your implementation of this feature didn't cause that thing to happen, If you have that monitoring, then you can notice when that bad thing happens because of some other feature.

**Alyssa:** [00:42:13] Yeah, and that's the goal. You get it so early. We talk about push left. We've been talking about that for 2 decades now. This whole idea of taking security and pushing it left in the pipeline or in the SDLC, as we used to refer to it. Threat modeling is like the start of that. If you can do that, what's the farthest left you can push? Well, it's that user story. Nothing happens in development before the user story gets created.

**Jessica:** It's the decision of what we want the software to do. Yeah, because incorporated in that is what we wanted to not do.

**Alyssa:** Yeah, I mean, think about it. If you had an empty backlog with no user stories in it, you're not doing any work, you know? I mean, so, and, and one of the nice—

**Jessica:** I can come up with some work.

**Alyssa:** One of the nice byproducts of this too, though, is just what it does in terms of When we think about DevSecOps as a culture and getting dev and security and operations working together, threat modeling is one of the best places to do that because you want all those contexts, plus you want biz. So, you could say biz, dev, SecOps. Do we really want to go there? But, you know, the reality is get those groups together. We just did a podcast not too long ago with Anna from Puppet, and she was talking about a study they did where there's a survey, and what they found was that collaborative work like that, like threat modeling, where you've got all those groups working together, give people greater confidence in their security posture and the effectiveness of their security controls than things like pen testing and, you know, SaaS tools and things that are kind of siloed off. Oh, you can create a really good culture where everybody understands each other's perspectives on things, and they all understand what it is that the system does within their own context of the world. If I look at it from a security perspective, I get what it's doing. It's encrypting this piece of data, and it's storing it in a database. Ops gets it because they understand how people are coming in and where it's going to run. You've got dev understands, okay, so this is what the user is actually supposed to experience. Experience, and you draw all that together.

**Jessica:** [00:44:30] My favorite part is that when you talk with the domain experts about what it shouldn't do, you wind up with a better understanding of what it should do. Yes, exactly. You're able to implement it more correctly from the beginning. I like your point about how talking about these things, when you do the threat modeling, you increase communication. And that's a much bigger benefit than, well, okay, the pen test team rubber stamped it, so I guess it's fine.

**Alyssa:** I mean, really, and that's just it, right? Yeah, you're not throwing something into that black hole and assuming that something worthwhile is being done. Anything that comes to you, like, I mean, think about when you get the results, if anyone who's familiar with doing code scans, you ship it off to some code scanner somewhere, it does its thing, it comes back to you with this pile of vulnerabilities that it says exist. Well, now you have to—

**Jessica:** Which ones matter?

**Alyssa:** Right, exactly. What do I start with? Because I can't fix all of this. And, you know, and half of it's in code I don't control. Right. And so when you have people all interacting, you can say, all right, yeah, this is something that's potential, but it's not as big a deal. This is kind of like the crown jewels of our business. So this is something we really have to defend and be worried about. So now you can build that prioritization as well.

**Jessica:** [00:45:55] Yeah, this is important data and we're going to put it on a webpage. You probably want to care about those cross-site scripting vulnerabilities versus this is a server app. It's serving JSON to other services. No, I really don't care if there's cross-site scripting in some library that I'm using when I'm not putting anything in the browser.

**Matty:** Jessica, you care too much.

**Jessica:** I just care less about those and a lot more about those remote code executions.

**Alyssa:** I mean, if there's an exploitable attack vector, that's probably far more of a concern than if it's something that literally is a vulnerability but it's not really exploitable. You know, is it then even a vulnerability?

**Matty:** It's a one-hand clapping kind of thing going on there. Yeah, right.

**Jessica:** And this gets, gets us back to the beginning. Because here we're talking about, do the threat modeling upfront, you'll get way more benefits than just security and also the really relevant security. But then at the end, you do have third-party tools like Snyk coming back and giving you notifications about, say, newly discovered vulnerabilities in libraries you're using, and you also have to react to those.

**Alyssa:** [00:47:09] The issue then becomes, how do you prioritize those, right? That, again, is back to a lot of the concepts we were just talking about. Is it something that's reachable? Is there a fix available? If there's a fix available and I just need to upgrade a package, let's just upgrade that package, assuming— make sure it works and has all the functionality that we are expecting and whatever.

**Jessica:** That's where CI is really important.

**Alyssa:** Of course, yes. This is where just being able to automate. Understand, though, from that perspective. So, okay, we ran— I checked my code into this repository. Snyk said I've got these dependencies that have vulnerabilities in them. Well, if I'm doing that in the repository when I'm committing code, I've still got time to fix that before we get to the point where I'm ready to build, and I'm going to push on. Now, CI/CD, well, yeah, maybe that build happened, it pushed, it deployed, but now I know I can fix that right away. I can go out, If I've got to submit a fixed PR and get that dealt with, I can do that. I can get the fix for it. I can make those updates, and I can push those, but I'm getting— the key is I'm getting that feedback cycle a lot faster. That's the thing. I scream at security people who have been talking about DevSecOps and how do you put security into DevSecOps, and every time, I swear to God, I just said this earlier today on a talk I was giving. I've gone to no less than 30 of those talks in the last 3 years. Every one of them talks about quality gates between stages. No, no, no, no. Gates break DevOps, period. You can't do it. You have to be integrated such that whatever your security practice is, whether it's integrated with process tooling, whatever, it has to be part of that phase. It cannot be a gate that you have to cross, a bridge that you have to go over to get from one phase to the next. If you push motion in the pipeline back to the left with the feedback from a gate, you just broke DevSecOps. You're not doing DevSecOps anymore.

**Matty:** [00:49:16] Well, and I think, and, you know, it's been a while since I've thought hard about this, but I used to really preach really hard about democratizing your security tools because that was a big problem. I imagine it's still a problem because you've kind of alluded to it with the heaviness of it. Is that it was so much, and that heaviness can be in process or it can be in cost. And I'm gonna blow my trope because I forgot the name of the tool, but it was this common tool that was so expensive. And it was like, you know, you're paying thousands of dollars a seat for this security tool. So you're like, there's only a few, you know, kind of high priests of security in our enterprise that can run this. So that's that gate.

**Alyssa:** Right?

**Matty:** So it's like, well, then that's a flaw in that tool, right? If you can't push it, literally push it left, right, you know, by democratizing it so that anybody can do it, yeah, you're gonna— yeah, yeah.

**Alyssa:** Unfortunately, the listeners can't see me laughing right now. As a security person, I can think of a few of those tools. I know a couple in particular that fit right into that description. I could probably within 3 guesses guess which one it is, but we won't go there. I don't want to name and shame.

**Matty:** [00:50:27] I will. Qualys. That was it. I couldn't remember the name. Yeah. Yeah. Well, maybe things have changed. I made that joke like 4 years ago. Maybe, maybe it's gotten a little better.

**Alyssa:** Reality. I mean, that, that security tool market alone is $177 billion. Like, there are so many tools out there and so many of them that do have super complex licensing and super expensive licensing. I mean, I worked for— before I came to Snyk, I worked for Avar, and so we resold all that. And I mean, like, we had to have licensed specialists at the vendors that we worked with so we could figure out how to license it for our customers, right? So these are things that security— and this is why it's so important to like create tools and to choose tools that developers want to use, not grab a security tool and say, here, you have to use this now, because that doesn't work.

**Jessica:** Because you can't gate on those and also publish software quickly. If you gate and slow down the change, then you're slowing down rolling out the security releases, and you're messing up security. Yeah, and new vulnerabilities come up every day and change is on our side. We have to be able to change quickly in order to be secure, not we have to change slowly enough to be secure.

**Matty:** [00:51:56] You know what happens when someone can't get through a gate? They figure out how to go around it.

**Alyssa:** Exactly.

**Jessica:** They get their job done, right?

**Matty:** Yeah.

**Alyssa:** Yeah, and the thing is, to your point, Jessica, there is— we just had a study earlier this year where we found something like 85% of organizations report that they've pushed known vulnerabilities to production. They've deployed software with known vulnerabilities, and like 54% of those said it was because they had to meet a timeline. They had commitments they had to hit. So yeah, your gates don't work when that's the scenario. So you have to, unfortunately, from a security perspective, It hurts to say this as a security idealist, right? You have to accept that you're going to push software to production that has vulnerabilities. But that's why this continuous improvement idea, and especially when you're doing CI/CD anyway, you know, okay, great, we know that that's there. Let's get that right back and let's prioritize that fix and go.

**Jessica:** [00:52:58] Right. Well, even if you were able to have no vulnerabilities before you pushed, It's tomorrow. There's vulnerabilities that are known in that software now. Yeah. No vulnerabilities is not a thing.

**Alyssa:** Exactly. It's unrealistic. And I could preach that one till I'm blue in the face. My favorite, my favorite t-shirt that I sell to people, it just says across the front, it says unhackable, question mark. And underneath it says, here, hold my beer.

**Jessica:** Yeah.

**Alyssa:** Tell me you're unhackable. What's going to happen? Hackers like me are going to go out and we're going to destroy you. So don't do it. Understand that that's not realistic. Just keep getting better.

**Jessica:** Do the right things to get better. Right, right. Because if you don't have a vulnerability for long, then it's really unlikely anybody's gonna find it and use it before you wipe it out.

**Matty:** And you know what? I think that's probably a place where we can end that, right? Like unhackable, question mark? Actually, yes. Unhackable? Well, this has been super awesome. We're going to have some great stuff in the show notes, and you can find those show notes if you go to arrestodevops.com/stateofopensourcesecurity. If you go to arrestodevops.com/itunes, you can leave us a review in the iTunes store. Supposedly, that helps other people find the podcast. I don't know if that's true. Let's find out. Leave us a review. We might read it. We might not. I can guarantee if anybody does, it's probably just me. But we're also on Spotify and iHeartRadio if you're into those places. So find us anywhere great podcasts are purveyed. Alyssa, thank you very much for joining us. We're going to put a link to your Teespring in the show notes too. So if you want to get yourself one of those cool unhackable t-shirts, check out those show notes I just talked about. But thank you for being on the show. This was great.

**Alyssa:** [00:54:52] Yeah, I really enjoyed it. I appreciate you guys having me on. This was definitely a lot of fun, and hopefully everybody listening had as much fun as we did.

**Matty:** Yeah, it's— I was going to say it's a surprisingly Midwestern Rest of DevOps, except that all the Rest of DevOps are usually surprisingly Midwestern because we're all in the Midwest, but our guests are not always. So there we go. And yeah. Um, we're pros. So as, as always, um, this is Arrested DevOps.

**Jessica:** Remember, there's always DevOps in the Medana stand.
