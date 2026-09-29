**Trevor:** [00:00:00] So you're that guy from Office Space?

**Edward:** I am exactly that guy from Office Space.

**Trevor:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Trevor Hess, and I have a great guest with me today. But first, a word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same.

**Edward:** We do not talk about change, we do change.

**Trevor:** Join the community and learn about our solutions at chef.io.

**Edward:** This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Trevor:** [00:01:20] I'm joined today by Ed Thompson. Thanks for joining me, Ed. Care to tell me a little bit about yourself?

**Edward:** Yeah. So I'm a program manager at Microsoft. I work on the Azure DevOps team and I'm— I've been a program manager there for about a year and a half. I'm finally starting to understand a little bit about what my job entails. Finally, after that long, because I came from an engineering background, I used to write software at Microsoft and at GitHub.

**Trevor:** Awesome.

**Edward:** Yeah.

**Trevor:** So what is a program manager role?

**Edward:** Right. That's a great question. So different people do different things. I guess it's the people involved in putting software together who don't actually write code. And so around Microsoft, we have what are called feature PMs. So we split up a team building a piece of software.

**Trevor:** And that's still program manager, right? Yes.

**Edward:** Yeah, I'm sorry. Program manager. Yeah, it gets weird because we've also got product managers.

**Trevor:** Right. Well, there's like project, product, and—

**Edward:** Right. It's crazy. We love our acronyms at Microsoft and we love them so much that they get ambiguous. But yeah, so there are feature PMs and they shape the direction of an area of a product. So let me give you an example. If we're looking at Azure DevOps, we've just split it up into a bunch of different components like Azure Repos, for instance, which is the Git repository management. So Azure Repos will have a feature PM that guides the direction of the product, what it looks like, what features are added, and in what order. So they're like mastering the backlog, I guess you could say.

**Trevor:** [00:02:54] Interesting. And so is that like traditional product ownership in other organizations where you're doing like customer interviews and pulling, like kind of teasing out the next features, what they should be?

**Edward:** In some sense, yes. It gets a little vague. Again, PM is kind of a vague term. So some people are more customer-focused than others. I would say I am one of the customer-focused people on our team. So I actually don't own a feature. I take the requirements from the customers and I bring them to the feature PMs. So I don't even bring them to the engineers. I'm that far removed from the code at this point.

**Trevor:** So you're that guy from Office Space.

**Edward:** I am exactly that guy from Office Space. But somebody's got to do it.

**Trevor:** Absolutely. I mean, we had a conversation with Steve— or I should say, there was no we at that moment in time. I had a conversation yesterday with Steve Murawski, which will be in another episode. And that was one of the things we were talking about is how important it is to have someone who's going and talking to the customers to figure out what it is that they're not getting, what it is that they need, what is it— Where does it hurt?

**Edward:** [00:04:04] Right. That's exactly right. And so I just like hanging out with people and talking to people. So I'm really fortunate to have this role. And so I started at Microsoft. Yeah, like I said, I came back to Microsoft about a year and a half ago. And so I started doing this. And most of what I was doing was around Git and version control because I've been writing version control software forever, it feels like. So I was trying to, I guess, help them with their version control challenges. And I realized that a lot of people are getting better with Git. And what a lot of people are now having trouble with is the rest of the pipeline. So I'm looking a lot more at CI and CD these days as well.

**Trevor:** Gotcha. So yes, you mentioned also that you've got this very deep history in source control. What can you tell us kind of— so like how long have you been in source control? Not you, like, you're not like stored in a Git repository, but—

**Edward:** That would be great if I could be. Some days you wake up and you're like, I wish I could just like reset to yesterday's. No, but so that's a great question. I'm trying to think back. So immediately, like my first, where I first started writing code was in scientific computing, like supercomputing. And then I ended up at a little company in central Illinois called SourceGear, and they had a product at the time called Source Offsite, which was an extension to Microsoft Visual SourceSafe. Oh, wow. So Visual SourceSafe had this nasty habit of corrupting itself. And yeah, so Source Offsite helped that. It basically added a TCP/IP server on top, like a custom one that arbitrated access. So because the problems were always around contention.

**Trevor:** [00:06:03] Right.

**Edward:** And so that was the first product, first version control product I ever worked on. And that would have been—

**Trevor:** That must be where all the locks came from in Team Foundation Server.

**Edward:** Well, yeah, in a sense. Actually, where the locks came from in Team Foundation Server was for the Windows team, teams like Windows and Office that are just ginormous.

**Trevor:** Right.

**Edward:** So the Windows source tree is about, well, it's actually split up over multiple repositories, but there is one big one and it's about 350 gigs. So if you have a 350 gigabyte, we call it an enlistment. If you have 350 gigs of source on your disk, and you want to run, say, git status, or at the time it was Team Foundation Version Control, or the Windows team actually used a custom piece of version control technology that they wrote called Source Depot, which looks a lot like Team Foundation Version Control. If you run status on that repository and it has to go actually scan all those files to see what's changed, it would take forever. So that's actually why you have to explicitly check out files in the early versions of Team Foundation Version Control so that it could scale to those types of codebases. Because if you explicitly check it out, now you're limiting what you have to go look at to run git status or tf status. So that's why it was the way it was. And we fixed that in later versions. We had an opt-in mode, and I think it became the default eventually, where it would just go scan the disk because most people don't work on 350-gigabyte source trees, we learned very quickly.

**Trevor:** [00:07:46] Yeah, most people want that little slice of their world.

**Edward:** Right. And understandably.

**Trevor:** Right.

**Edward:** Yeah. So when moving the Windows team to Git was an incredible challenge as well because of that, because it's so big. So now they—

**Trevor:** Is that why LFS was written?

**Edward:** Actually, it's— so LFS was written for the really big files. So it kind of pages very large files in on demand. But if you just have a giant tree, LFS doesn't help very much, it turns out. It helps a little bit, but you would still have to download like 350 gigabytes worth of stub files, those LFS pointer files. So we created something called the Virtual File System for Git, which is in a sense similar to LFS in that it pages things in on demand. And so what it does is it sits at a layer, it's actually a kernel driver. We worked with the Windows team on this, thankfully, because nobody should trust me writing kernel code. It sits at a layer between the actual file system and like the user mode. So if you run— if you clone this repository, you get nothing. You get a little bit of metadata about the way the repository is laid out, the files that are in it, but you don't get any of the files and you certainly don't get any of the history. So you run clone, It's still called clone even though it's not really cloning anything. On the Windows repository, it takes about, I don't know, a minute or 2. And this is incredible because the first time we tried to put that 350-gig repo into a Git repository and just clone it, we ran git clone and— well, actually, then we went home. And when we came back the next morning, it had finally finished. And then we ran git status and it took like 8 minutes or so to tell us that nothing had changed at all. So yeah, so using VFS for Git, now you run git clone and you just get that metadata and it takes about 2 minutes. And the key is that driver that sits in between. And so when you run dir, that driver intercepts that and says, oh, hold on, let me look at the Git repository and see what should be there had I done a clone. And feeds that back. Then when you open a file, that driver grabs that and says, oh, okay, well, that actually doesn't exist on disk yet. Let me go grab it from Azure Repos, download it, puts it on disk, and then lets it proceed. That actually solved our scaling problems. Then we changed a little bit in Git so that it could handle things at this scale and page things in on demand and understand that these files didn't necessarily need to exist. And I got to tell you, I was a little surprised. But like you said, most people only work in their little slice of the universe. So if you're working on Notepad, you don't need all the Xbox source and it just works. So I couldn't believe it.

**Trevor:** [00:10:45] And it's funny to think that people actually have been working on Notepad recently.

**Edward:** Oh, I know. It handles Unix line endings now.

**Trevor:** Yes.

**Edward:** The dream has come true.

**Trevor:** I know. Open any file and it works.

**Edward:** I can't believe it.

**Trevor:** So we should just ship Visual Studio Code in Windows now. Oh man.

**Edward:** Oh, that would be great, right? Yeah, I'm a big fan of VS Code.

**Trevor:** That's probably my favorite tool right now. So my background, I was— I started doing .NET development like 2009 and there was like, there was a minute before somebody told me what Git was that I thought like being a TFS admin would be a really cool job. Like I actually, so my first degree was in, or my second degree actually was in game design with a focus on programming. And we were, this was early days on the Unity 3D engine.

**Edward:** Okay.

**Trevor:** And so I'd actually written an integration to get inside of Unity. You could submit a bug report directly to TFS. It was super cool, except it wasn't.

**Edward:** [00:11:47] Sure.

**Trevor:** It was technically cool, but maybe not actually cool. Right.

**Edward:** No, that's awesome. Yeah, I worked on TFS for, you know, many, many years because after SourceGear, SourceGear itself kind of split up into 2 divisions. First of all, there was SourceGear, which was still building its own version control systems, and then there was Teamprise, which was building cross-platform clients for Team Foundation Server because Microsoft came out with TFS, it was pretty good, But it was not really cross-platform. It was Windows only. It was kind of stuck in Visual Studio. So we built, you know, we took that kind of cross-platform version control knowledge that we had from working on, working at SourceGear on Source Offsite and on Vault, and then we leveraged that into Teamprise. And so we built the clients there, and then eventually Microsoft realized that they wanted cross-platform clients, so they bought us. So, so yeah, I spent a lot of time on Team Foundation Server.

**Trevor:** [00:12:50] Well, thank you because that all helped because what we were doing, it was funny because I had to teach artists how to install Visual Studio so that they could pull down the source code for the, for the video game.

**Edward:** Oh man, that's tough. Yeah. One of the things we did was a standalone GUI client for Mac, which I think a lot of artists did use because game dev makes a lot of sense for, for Team Foundation Server and now Visual Studio. With Azure DevOps, Azure Repos, because we still have that same TFVC that's there that, you know, you can lock files, which is really useful for game designers and it handles really big files with ease. And, you know, centralized version control still does make sense for some, for some people and especially game dev shops.

**Trevor:** Yep. I mean, I remember doing Well, I started to and then I got sick and so I, that, that project ended, but I started to look at like TFS versus Perforce.

**Edward:** Yeah.

**Trevor:** And I basically forgot everything I started doing on the research there, but I remember liking TFS more for it.

**Edward:** [00:13:56] I, yeah, I'm not going to say anything bad about Perforce. It definitely influenced the design of Team Foundation Version Control. You know, we looked at Perforce and said, we kind of like the way that works and you can see a lot of the design decisions that we made that were informed by Perforce. But that's, you know, it's a pretty narrow use case these days, in my opinion. Git is just dominant.

**Trevor:** Yeah. I mean, it's weird going into customers and seeing that they still have like Mercurial or something, right? Or SVN. You're like, you know, there are tools that'll like convert this so that you can join the rest of us in the future, right?

**Edward:** It is funny. I appreciate Mercurial users kind of stubbornly hanging on because Mercurial is a good tool.

**Trevor:** Yeah, it's not bad.

**Edward:** It's not.

**Trevor:** It's not.

**Edward:** And so I get why you would want to use it, but SVN, boy, its time is in the past.

**Trevor:** [00:14:56] I agree. Absolutely. So you moved into TFS and then you moved into the Git world, right? So were those kind of side by side? Like, were you trying to bring Git into Microsoft during the TFS days or—

**Edward:** Yeah, that's exactly right. My buddy Martin, who actually came with me from Teamprise, so we both worked there. So, Microsoft acquired him along with me. So, he looked at me one day and he's like, hey, man, this Git thing's pretty cool. And I'm like, you're crazy. You're absolutely insane. What are you talking about? He's like, we should put it in the product. We should bake it into Team Foundation Server and what was then called Visual Studio Team Services. And I'm like, dude, come on. The source control software that Linus wrote? You really think that this is going to happen? And he is much smarter than I am. So he pushed and we figured it out. We figured out how to put some GPL code into into Visual Studio.

**Trevor:** [00:15:59] I bet that was a long legal process.

**Edward:** Oh, man. That was crazy. I have the utmost respect for the gentleman who was our lawyer then. He was the lawyer for what was called DevDiv. And we go to him and we thought this was going to be the worst thing ever because we had not too long ago come through an acquisition where Lawyers made us pore over our open source licenses on all the software that we were using in this product and just bullied us about it. And so we go into this meeting and we're like, listen, here's what we want to do. We want to put Git into Visual Studio and into Visual Studio Team Services. It was written by a guy named Linus Torvalds. I hope that name doesn't sound familiar to you. And it's under a license called the GNU Public License, which I hope also doesn't sound familiar to you. And he looked at us and I'll never forget, he was just like, you know, that'd be great because I'm tired of having to use GitHub for my projects that I work on after hours.

**Trevor:** [00:17:05] That's awesome.

**Edward:** I'm like, what? It turns out that our lawyer, our then lawyer, was previously a software engineer, you know, had a master's or something from MIT. I'm like, wow, what's going on? So he knew what was up and he He made it happen. So that was great. We also had to sneak it by Steve Ballmer, which was pretty impressive. I would really like to think that we walked in and said— I wasn't in this meeting. I don't take meetings with the CEOs of companies. I'd like to think that we walked in and were like, developers want it. And he got up and did his little dance. Developers, developers, developers. So that's what I'm sure how that meeting went. But no, it was tricky. So I wrote a lot of the code for that, but I did not, I did not do the planning and the sneaky execution. That was all my buddy Martin. So props to him. That's, that's why.

**Trevor:** Thanks, Martin. Yeah, thank you.

**Edward:** Happy to help. But that's how Git got into Visual Studio and Visual Studio Team Services, which is again now Azure Repos.

**Trevor:** [00:18:13] Yeah. Yeah, I think you got— I think Microsoft needs to get a new shirt and it needs to say the artist formerly known as Visual Studio Team Services. I'm fine with Azure DevOps on the back.

**Edward:** I'll see what I can do.

**Trevor:** So if you went from there, you went into— you actually went to GitHub.

**Edward:** Yeah, I left Microsoft because I know when we were working on adding the Git support into Visual Studio and Azure Repos. We were building it on a library called libgit2. libgit2 is actually GPL'd with the linking exception. It is just a linkable library for you to use. The reason you might want to use it is because running Git and then screen scraping its output is perhaps not what you want to do in life. So instead, Libgit2 gives you a nice object model that you can use. And at the time, it was being maintained by some folks over at GitHub. So we actually built a really nice relationship between Microsoft and GitHub. And that started with, you know, in my opinion, that started with Libgit2. So we flew out there, we sat down with them, we hacked on some stuff, we realized they were doing really good work. I think we were doing pretty good work too, maybe less so from my commits, but the rest of the Microsoft team did a really great job. And so we got really close and over time I really came to respect them and like them. And so, yeah, so I actually left Microsoft and went and joined GitHub. I worked on the Git infrastructure team, which is responsible for taking the Git pushes and putting them on disk and making sure everything is nice and stable and then allowing you to run Git fetch on those contents. So as you can tell, the relationship between Microsoft and GitHub has continued to become close.

**Trevor:** [00:20:24] I didn't get that impression at all.

**Edward:** Yeah, right, right. Hopefully by the end of the year we'll be real close. Yeah, but yeah, so I went to GitHub. I had a great time there. And but what I realized was when I was still at Microsoft before I left, I was doing a lot of customer interaction. So my role was writing code, but I did a lot of talks at conferences. I did a lot of, you know, I'd show up to customers. I toured the, the central US for 2 weeks talking about our product. And I really missed that. So that was something I didn't have at GitHub, and I wanted that back. And so I realized that in my heart, perhaps I was a program manager. So I know. So now I just, I just write code at night, which is probably— it's okay, you know, it's probably for the best for now. Maybe I'll get back to it.

**Trevor:** But no, I get that. I, you know, I Well, once I called myself a developer, solutions architect is taking a better form because despite the fact that I'm capable, I can go code something when you tell me I need this thing. It's just not like— I've even lost the do the night projects thing. Oh, really?

**Edward:** [00:21:38] I can understand that. It's easy to burn out. And I— yeah. So the fact that I don't write code by day anymore lets me write write code at night. And on airplanes. I like writing code on airplanes. I don't know why.

**Trevor:** That's a line for me. I won't work on an airplane unless there is a critical thing that needs to get done. That is my solace moment. That's where I read a book or play my Switch.

**Edward:** Oh, you're so smart. I actually brought my Switch with me.

**Trevor:** So, We might have to play Mario Kart before you leave.

**Edward:** Okay. I'm terrible at it, so.

**Trevor:** I am too. Oh, great.

**Edward:** So, yeah, so I'm at Ignite this week. I was at NDC Sydney last week and I'll be at Techorama next week. So I have a Switch, I have books, I have a Kindle. I mean, I'm just spending all my time on an airplane right now is what it feels like.

**Trevor:** Yeah. And so especially if you're going on those long-haul flights, breaking it, like even if you are coding, breaking it up with some, with some other activities can to be a good idea.

**Edward:** [00:22:45] That's right. That's right. Yeah. Once dinner comes and they're like, Mr. Thompson, would you like a glass of wine? It's like, okay, time to put the code away.

**Trevor:** Yep.

**Edward:** Can't, can't write code after, after drinking otherwise.

**Trevor:** Uh, yeah, that was— I made that mistake once in college. I was working on a game. First, it was the, the inspiration was like the reverse of Missile Command.

**Edward:** Okay.

**Trevor:** So you were, you were the planes trying to take out the The Missile Command silos.

**Edward:** Oh, neat.

**Trevor:** Um, and I got one of the features working to get them to fly across. They could shoot down, but in my, in my drinking while coding, I had forgotten to clean up the objects. And so I'm like watching as it's just like continuously slowing down, like, and it's like, it's not happening quickly, like in space, like the Space Invaders bug. Uh, it's just like, I'm just watching the memory spike. It's like, oh, what am I— and at the time, like, I hadn't even— didn't like Memory Lake didn't even cross my mind, even though I'm like watching this get bigger. Like, what is going on?

**Edward:** [00:23:51] Oh, that's funny. Yeah. The garbage collector is just going and going and nothing is being reclaimed.

**Trevor:** Yeah.

**Edward:** Yeah. Meanwhile, your laptop is slowly melting.

**Trevor:** It's weird though, to recreate that. Do you know the Space Invaders bug?

**Edward:** I don't. You mentioned that and I, I, I was going to go Google it and pretend that, you know, I got that reference because I'm clever. But in fact, I don't know it.

**Trevor:** So it's super interesting. So, you know how in space you get Space Invaders and they come down the screen and as you play the game, they move faster?

**Edward:** Okay. Yeah, that's right.

**Trevor:** So that was actually because there were too many Space Invaders on the screen at the beginning. And so it was a clock issue with the computer. So the less Space Invaders there are on the screen, the faster it can calculate the game loop.

**Edward:** That's amazing.

**Trevor:** And so one of the like early, like difficulty challenges in a game was totally an incident of the architecture.

**Edward:** That's incredible. Incredible. Oh, wow. That's so cool. I had no idea.

**Trevor:** That's one of my favorite, like programming stories.

**Edward:** Yeah. What a, what an amazing bit of trivia. Right. Okay, cool.

**Trevor:** [00:24:55] So we're obviously, we're, well, not, maybe not obviously to anybody listening. We know because we're actually here in the real like meatspace right now. We're here at Ignite. So we just had the big rebranding for Azure DevOps.

**Edward:** Yes.

**Trevor:** Tell us a little bit about that.

**Edward:** Yeah. So I wouldn't call it a rebranding per se because rebranding suggests that all we did was change the name. What we really did was we split it up into several individual products. So if you looked at Visual Studio Team Services, we had all these features. We had Kanban boards for agile planning. We had Git repository hosting. We had continuous integration and continuous delivery pipelines. But it was all in one place, right? It was all in VSTS. And so, it was tough if you were, say, a shop that used Jira for your planning and GitHub for your source control. You would often not think of Visual Studio Team Services for the build and release pipelines, even though it's great, because you would think of it as this big monolith. So we wanted to split it up so that we can make sure that you could adopt what is now Azure Pipelines, the continuous integration and continuous delivery part, to fit in. And in fact, we've changed a little bit of the pricing so that we can make that more attractive. All of the services in, in the Azure DevOps family, so Azure Boards, Azure Repos, are free for up to 5 users and, you know, then priced per user after that. But Azure Pipelines is actually priced a little bit differently and we've got this really incredible open source offer. So if you're using Azure Pipelines for open source to build your open source project for pull request validation, for continuous integration on the master branch, then it's totally free. We just give you 10 pipelines in parallel. So you get 10 builds in parallel at a time for free, totally free, no limits on the number of minutes. So, so that's really what we've done with, with Azure DevOps. And I'm super excited about it, especially the open source part, because, you know, I maintain open source projects.

**Trevor:** [00:27:12] Yeah.

**Edward:** And libgit2, for instance, has You know, it's C. It's cross-platform C code. And then, you know, we've got bindings on top of it for like Ruby or .NET or whatever. But at its heart, it's C. And what we used to have was several configurations for all the different platforms that we wanted to build on with multiple CI providers. And it was— some of them were fast, some of them were a lot less fast, and some of them we were even paying for and still weren't that fast. So that was really frustrating. So we moved everything over to Azure Pipelines because we've got Mac, Linux, and Windows build agents all hosted in the cloud, all for free. So, so not only did I reduce my cost because, you know, I was paying for this out of pocket, which is always a bummer, but we also got faster builds.

**Trevor:** You pushed for that for yourself too. That's—

**Edward:** oh, oh, that's exactly right. You know, if somebody asked me, hey, what do you think open source projects might want? It's like, make it free.

**Trevor:** [00:28:17] Exactly. Yeah. I mean, that's kind of— that's actually a really effective way for Microsoft to contribute back to open source is to make it easier for open source to do its maintenance.

**Edward:** That's exactly right. Yeah. And we use so much open source at Microsoft now. You know, when I was saying that when I came in, we had this product that used so much open source and the lawyers objected. I mean, 10 years later, It's completely different. And in fact, our lawyer at DevDiv, the one who hacked on code at night and made Git happen, he has been really instrumental in changing the Microsoft culture. Jason Barnwell is his name, and shout out to Jason. I think that he was one of the key people in Microsoft's understanding and adoption of open source. And so now you can see It's just incredible the difference between then and now. Like we use open source all the time and we create open source all the time. We open source the .NET framework, we open— Visual Studio Code is open source. There's so much open source coming out of Microsoft now. It's just amazing.

**Trevor:** [00:29:25] It's so great.

**Edward:** Yeah.

**Trevor:** So that actually, that explanation kind of made the name click a little bit more for me.

**Edward:** Okay.

**Trevor:** Because I know I've seen it all over the place. People are taking issue with the name.

**Edward:** Some people are, yeah.

**Trevor:** But that totally makes sense because you're changing that vision of TFS or the Visual Studio frame around everything and saying, no, it's not the monolith anymore. It's just a collection of the tools you need to do The DevOps.

**Edward:** That's exactly— to do the DevOps. Yeah, that's exactly right. And I know people, some people are taking issue with the name, which is funny because I'm— I didn't even really think about that because I'm like, well, I work mostly on Azure Repos and Azure Pipelines and then, you know, they're part of the Azure DevOps family. And but I get it. I do get it. But yeah, for sure, we don't think this is like some DevOps in a box, like, right, get Azure DevOps and now you'll do DevOps. I mean, no, not at all. But we can help you on your DevOps transformation. I do.

**Trevor:** [00:30:33] Does the CIO know that? Not your CIO, not the Microsoft CIO, the average CIO who sees the DevOps word on there, who's been asking for DevOps in a box.

**Edward:** I get it. I don't know. And so I do get the frustration, but yeah, it didn't really occur to me, to be honest with you. That's awesome. Whoops.

**Trevor:** No, I mean, I think that the— I think the motivation behind it makes a lot of sense. It's unfortunately, it's just not the, like, the most obvious off without looking into it more. Right. If you— if all you see is the tagline, sure, you may not get to see the— and understand the why. Yeah, that's interesting. Yeah. Because that's when I was working with a lot of those tools, it was— that was always the complaint was like, Yeah, but you're just using the source control. We've got Jenkins and we've got, you know, Pivotal or, you know, all these different tools and we're paying for this giant thing when Git's for free. Right, right.

**Edward:** [00:31:35] And yeah, exactly. So I'm really excited about the changes that we've made.

**Trevor:** So they're super cool.

**Edward:** Yeah.

**Trevor:** Awesome. So let's say outside of the Azure DevOps space, what's some of the most exciting things you've heard this week?

**Edward:** Whoa, that's a great question. So here's my conference— here's the way I attack conferences. I show up, I sit in the speaker room and focus on my talk. I go home and rehearse my talk, and then I give my talk, and then I start paying attention to the conference, which is terrible when your talk is the last one of the last day, which mine was. So I've missed so many of these announcements. And so what my next week is, and I'm hoping I can actually load these up to watch on my, on my next flight to download them because all of the content has been recorded here. So you can watch it on demand, which is exactly what I intend to do. So I wish I had like a lot of, of great, exciting stories from around Microsoft that I'd learned, but I haven't. I haven't yet. So, so yeah, ask me again next week and we'll, we'll chat about the really exciting stuff. What's the most exciting thing you saw?

**Trevor:** [00:32:54] That's a, that's a fantastic question that I wasn't expecting.

**Edward:** Turnabout, it's fair play.

**Trevor:** Absolutely. I think Azure Blueprints are really interesting.

**Edward:** What are Azure Blueprints?

**Trevor:** Even further on. Oh, it sounds like Azure Blueprints, because I've only— because I also was kind of doing my talks and those sorts of things too.

**Edward:** I know.

**Trevor:** Um, so Azure Blueprints are like a governance framework almost, so that you can say like, I need this sort of a thing. And so you can have it deploy like a whole subscription with the resources in it, with like the policy associated to it and all that.

**Edward:** Awesome.

**Trevor:** Um, so that it comes up and it in the way you expect it to.

**Edward:** Somebody was telling me about that sort of obliquely, and it sounded really interesting. But I wasn't— they proposed it more like, I heard about this thing, but I don't know if it really exists. And I said, I don't know. I couldn't possibly tell you. But it sounds like it exists, so that's really cool. I'll have to go check that out.

**Trevor:** [00:33:59] Yeah, it sounds really interesting. So for me personally, and for Chef, the most exciting thing that was announced this week was we did we announced the private preview for the Chef Automate managed service for Azure.

**Edward:** Neat.

**Trevor:** It's using Azure Managed Services, which is important to me because I was the product owner for it. Oh, awesome. This is the first time I've ever released a product.

**Edward:** So, well, congratulations.

**Trevor:** That's amazing. So that's like, to me, that's really exciting. Yeah, there's a ton of other things going on that are also exciting, but this one affects me very personally.

**Edward:** Got it. Got it. No, that's great. That's really incredible. Yeah, very cool. Yeah, it's unfortunate that the difference between being a speaker at a conference and being an attendee at a conference is just so vast.

**Trevor:** Oh, absolutely.

**Edward:** Yeah.

**Trevor:** Or even doing speaking and being a sponsor and like—

**Edward:** Yeah, yeah. I used to just show up and work on the expo hall on the show floor when before I worked at Microsoft, you know, Team Prize, we would show up to these events, we would show up to this event, used to be called TechEd, now it's Ignite. And we would try to stay alive by selling our product. And yeah, it was, that was a long day. You'd show up, you'd work on the expo floor, you'd stand, you'd talk to people all day long, and then you'd be done and you wouldn't see any of the conference. You would have no idea what was going on. Yeah.

**Trevor:** [00:35:28] Fortunately, now we've got enough folks at like at our booth that we can do a little bit of cycling.

**Edward:** That's so— yeah, that's key. Yeah, we were, we were about a 7-person company or so. So yeah, we had, we had no cycles.

**Trevor:** I suppose not at that scale.

**Edward:** Yeah.

**Trevor:** All right. So what do you— we'll close this out here. What are you most looking forward to working on in the coming year?

**Edward:** In the coming year, I am most forward looking forward to really working with a lot of open source projects because I think Azure Pipelines is an incredible offering for open source projects. You know, I, and I think that not just because I work there, I actually use it for my open source projects. And so I think that we will, A, continue to improve it, and B, we will continue to see open source projects adopting it. So I'm I'm super excited about just seeing what people are interested in doing with it. Let me give you a concrete example. I realized that we don't just have Mac, Linux, and Windows hosted build agents because Docker can integrate with QEMU really easily. And you can go to Docker Hub and grab S390, PowerPC, ARM, whatever Docker images for Linux and run them in QEMU. And since we give you a real virtual machine, it's not— you're not running inside a Docker container. You can actually run QEMU. So our build platform for, for libgit2 is about to grow to include things like PowerPC and ARM. And so I'm— this is blowing my mind. And, and that's just like what I've been playing with. So I can't wait to see what everybody else is doing.

**Trevor:** [00:37:21] So thank you, Ed, for joining us today. Head over to arresteddevops.com/thompsonignite18 for this episode's show notes. This site also has our newsletter, merchandise, Patreon, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store. If you want to help other people find the podcast. Ed, thank you again so much for joining me today.

**Edward:** Thank you. It's been a pleasure.

**Trevor:** I'm Trevor, @TrevorGHess. This is Arrested DevOps. And remember, there's always DevOps in the banana stand.
