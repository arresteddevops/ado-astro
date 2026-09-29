**Joe:** [00:00:00] Here we go, take 2. Slower, more intense. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Joe Laha. Co-hosting with me today, I'm Matty Stratton.

**Trevor:** I'm Trevor Hess.

**Bridget:** Bridget Kromhout.

**Jessica:** And Jessica Kerr.

**Joe:** It's been 10 years of Arrested DevOps. We have plenty to talk about, but first, a word from our sponsors.

**Matty:** Let's face it, no one likes writing or maintaining documentation. But when you start a technical project or pick up a new task, missing information can cost you valuable time. GitBook is a technical knowledge platform that fills that information gap. Making it easy for your team to capture, maintain, and find information from a single source of truth. For example, with Git Sync, you can set up a 2-way sync between your repository and GitBook so you can turn Markdown files into awesome user-friendly docs. And if you make a change in your codebase, the edits sync between the 2 automatically. Or what about when you need to find something in that knowledge base? Forget about searching. Just ask GitBook AI. You'll get a neat summarized answer that is sourced directly from your docs. These are a few examples of what GitBook can do, so why not give it a try? Head to arresteddevops.com/gitbook to find out more. Thanks to our sponsor Gliffy, the leading diagramming solution for teams using Atlassian products like Jira and Confluence. Drag and drop shapes to quickly build a diagram capturing anything from code structure to a simple concept. You can start your free evaluation by visiting gliffy.com/arresteddevops and signing up via the Atlassian Marketplace. That's gliffy.com/arresteddevops. Get started today. So Uffizzi is a platform for platform teams. You can stand up your developer platform in minutes, not months. What I like about Uffizzi is that it gives platform teams control and dev teams autonomy. It's Kubernetes native and extensible, so you can customize it with tooling that meets your team's evolving requirements. And these clusters, they spin up fast, like super fast. Out of the box, Uffizzi combines a great dev experience, secure multi-tenancy, and cost efficiency. But try it out for yourself at Uffizzi.com. Download their CLI and you can spin up your first sandbox cluster in under a minute. On their free starter tier. That's uffizzi.com. U-F-F-I-Z-Z-I dot com.

**Bridget:** [00:02:51] Can we have a supercut of all the sponsors?

**Joe:** Supercut of all, of all the sponsor reads?

**Matty:** I, I was— we were saying in the first time, and it didn't work out, which is fine because this is take 2, that would tell some sponsor stories. And I feel like it's been long enough that I can tell this story and all the parties won't really care, won't get me in any trouble or anything like that. I probably wouldn't find before. So when we first started doing Arrested DevOps and we're thinking about sponsors and stuff, we, I don't know, however many months into it, so PagerDuty reached out to us and said, hey, we would love to sponsor your podcast. And I'm sitting there and I think Trevor too, we're both like, I don't know how much a sponsorship costs or whatever. They're like, how much is it? We're like, How about you give us $50 an episode? And they're like, cool. Which should have been our first thing is how quickly they responded. And the only smart thing I did was making that a like 6-episode deal. You know what I mean? It was a time-bound several-month-only deal. So then shortly after we started doing that, I was listening to no longer running, but luminary DevOps podcast, The Ship Show, hosted by, by many people, but especially run and started by J. Paul Read. And I was listening to the Ship Show and there was an ad, a patron duty ad in it. And I was like, well, that's funny because Paul had always said that he didn't want sponsors, right? It wasn't worth it, didn't want to do whatever. So I was like, we have a sponsor, crazy. And then maybe a month later, even less, I was at a conference with Paul and we're all out in the bar and things are happening and such. And so I ask him, I'm like, this is wacky. I'm like, you have a, a sponsor now, what happened? He goes, Well, he's like, I tried to give them the like FU number so that they would go away. And they said, sure, that sounds fine. So I was like, okay. And so I start talking. I'm like, well, let's talk about like, how many listeners do you have? Like we're comparing stats. And I'm like, our shows are the same, right? I mean, well, so they had about the same audience as we do and stuff. So I'm like, well, what are they paying you? And he goes, well, no, he asked me first. He goes, what are they paying? What are you charging them? And I said, $50 an episode. And he laughs. And I said, what are they paying you? And he goes, Explicit tag coming up because this is probably— he goes, don't you fuck me, Stratton. And he's like, $1,000 an episode. And I was like, well, and then now, now I'm sitting there going, well, I'm screwed because I can't go back to PagerDuty for the renewal and ask for $1,000 because they'll, they'll, you know, know that. But we did end up going back for a substantially— a number between $50 and $1,000, and the rest is history. But But yeah, that was a very Paul Reed, just like, don't you fuck me. Paul, I did not. Although now, almost 10 years later, I have told the world what PagerDuty paid you. It's all out there now.

**Trevor:** [00:05:43] I don't know if I've just heard you tell that story 40 times, not on a podcast, but I'm 90% sure you've told that story on the podcast on this year wrap-up episode at least once before.

**Jessica:** It is the 10-year wrap-up, so we need to wrap up the wrap-ups by repeating it.

**Matty:** We do, we do. This is— it's not a year-end wrap-up, it's a decade-end wrap-up.

**Bridget:** You know, I, I need closure on that particular anecdote though, because later you went to go work for PagerDuty. So—

**Matty:** oh, I did. Oh, that one got fun. Vault.

**Bridget:** Did you get to like find out the story from their side where they were like, hahaha, we paid so little for that original? Oh dear, the renewal was Like, how did that end up later?

**Jessica:** Did you get paid?

**Matty:** Not that, but when PagerDuty— when I was working at PagerDuty and then PagerDuty wanted to sponsor us again, it was like a whole thing, like with the lawyers, because they're like, wait a minute, but we— but you work here. We can't pay you for something else. And we're like, that's not what this is, right? This is a set, you know? And it ended up going like into this big legal escalation for PagerDuty to sponsor the show when I worked there, because they had to be really clear that it wasn't double dipping, right? You know, I was like, no, this is not my job to do the podcast. This is a separate thing. But I did never hear any, you know, so I don't— I guess if Ange Chapman is listening, she might be the one who might know that story. You know, I don't think there's too many people. I don't even remember who, who was our, our connection there. But yeah, but PagerDuty has been a sponsor on and off for, for many years. You know, it's, uh, we, we've had, we've had a lot of different— we've had some sponsors that just kind of come in and they're our sponsor for like a couple episodes and You know, we've had some that keep coming back and, you know, we are always, you know, one of the nice things is the show has got a long back catalog and we're always still around.

**Jessica:** [00:07:33] But how long is that back catalog?

**Matty:** Well, this is episode 200 that we are recording right now. That was very coincidental that it turned out to— I was going through the editorial catalog and numbering episodes today and I was like, oh, this one's 200.

**Bridget:** Cool.

**Jessica:** And the centennial.

**Matty:** A bicentennial, if right, 200 bicentennial. It's a most of us are not necessarily old enough to remember the bicentennial, but probably most of us were alive.

**Trevor:** I mean, centennial specifically apply to years though.

**Bridget:** Centennial is a hundred years.

**Matty:** Yeah, I think the old.

**Trevor:** It wouldn't refer a hundred thing.

**Jessica:** Just enough.

**Matty:** Oh, I see what you're saying. Okay.

**Bridget:** Speaking of which, speaking of. Remembering the 1970s. I had a horrifying experience at the gym today. We were in a personal training studio. It was a little bit loud. I asked one of the youthful trainers to turn the music down with the, in my mind, universal signal of swizzling your hand a little bit to turn the volume down. And he looked at me kind of confused and then went and turned it off. And I was like, oh Lord, he has no idea what I'm talking about.

**Matty:** [00:08:48] Your skeuomorphic gesture.

**Bridget:** My skeuomorphic gesture of turning down an analog dial, like volume knob.

**Matty:** Well, it's like the roll down the window gesture, right? You know?

**Bridget:** Yeah. Anyway, so we have been podcasting for 8,000 years and are Methuselahs. But other than that, how did ADO actually start?

**Matty:** So there's Arrested DevOps actually started theoretically as a blog. A blog that I never wrote. So I had an idea where I wanted to start. Well, I'll tell you the name.

**Jessica:** What kind of blog?

**Matty:** Well, I had this idea I was going to start a blog to write about things I was learning from DevOps and such. And I was trying to think of a good name for it. And my friend, Jess Fritchie, who is now, at the time she was, she's a writer, she's very creative, she's a romance novelist. So she came up with Arrested DevOps as the name. And I was going to have a blog called Arrested DevOps. But I didn't start it right away. Then I got the idea that I said, well, maybe I want to make this be a podcast. And this story has definitely been told on Arrested DevOps before, what I'm about to say. In fact, I think it's in the very first episode when we explained like kind of what the vision of Arrested DevOps was. When I was first learning DevOpsy things, I learned via podcasts. I listened to podcasts like The Ship Show we just talked about, or DevOps Cafe with Damon Edwards and John Willis, or the Food Fight Show. And, but the thing was, I didn't know a lot of what they were talking about, right? You know, I was like, there would be all these things that'd be like, oh, well, you know, we're doing blah, blah, blah with Chef. And then I was at Velocity talking to AllSpa about blah, blah, blah. I'm like, I don't know what any of this shit means, but I was trying to learn, but I was like, I'm willing to push through it because I want to learn this stuff and I will just listen and eventually get context clues. So I was like, well, there should be a podcast for people that don't know who John Allspaw is or don't know these things. And I always would say I wanted the show for the people who their boss read about DevOps in the in-flight magazine and said, we have to DevOps now. No, I do not know what airlines have magazines that have articles about DevOps.

**Joe:** [00:10:55] Maybe if you ever— I was going to say, since when does SkyMall have articles about DevOps?

**Matty:** I was trying to remember the name of the United in-flight magazine earlier today. That just goes to show how little I travel anymore. But so anyway, so I, what I had realized that I'm very good at starting things. I'm not always so good at making them continue, ergo starting a blog that I never wrote in because I just had the domain. And I, I met this, this, this bright-eyed and bushy-tailed young man at a, at an Azure meetup here in Chicago. And as we were talking, and then, you know, after the meetup's over, standing outside and chatting and stuff, and was like, hey, I want to do this podcast and You know, I have this idea and I don't remember Trevor. Trevor is the person, spoiler, who, that's when Trevor and I met. And I don't remember exactly how it went down, how I invited and said we should do this together. Like I actually would love to hear Trevor's recollection of, of this first meeting, you know.

**Trevor:** I think it was actually our second meeting. I think it was, it was after I did my first presentation at the Azure DevOps group or the Azure meetup.

**Matty:** [00:12:01] It was the Azure. Yeah, it was Azure Cloud.

**Jessica:** Yeah. Trevor, your bushy tail has migrated to your face.

**Matty:** Yes, he was, he was like a little baby face then. Trevor had no beard or anything.

**Trevor:** And you know, it wouldn't be an episode of ADO where we're all together if we weren't talking about how much younger I am than everyone. We've been doing this for 10 years now.

**Bridget:** It's traditional. We give Trevor a hard time, even if he's basically an elder like us.

**Matty:** Yeah, I was gonna say, none of us are young. Fine.

**Trevor:** So yeah, we, I think it was my, it was after I did a talk, you actually pulled me aside and said, hey, I've got this idea. I wanna start a DevOps podcast. I've, I know a lot about operations, but I want somebody with a developer background to be involved. Are you interested? And I think I, I think I said, that sounds cool. Let me think about it. And then I thought about it. I thought it sounded like a great idea. And we started digging. I think before we even kicked the tires, you got, you got Nathan Harvey and J. Paul Read on the phone so that we could talk about how they do podcasting.

**Matty:** [00:13:11] I don't think it was before we recorded. That's a really fun story. We did have, there is a lost episode 0 of Arrested DevOps somewhere. I have a recording that was just us testing a Google Hangout and seeing if we knew how it worked. It's like a 5-minute video.

**Trevor:** I think we did do that first, but I think we talked to both of them.

**Matty:** Okay.

**Trevor:** Before we were—

**Matty:** yeah, I don't recall. No.

**Trevor:** Okay.

**Matty:** Here's why I'm going to tell you that I think it happened later. So anyway, what the story of this was, we got on a call, a Google Hangout, because that's what we had in the olden days before Zoom and such. And with J. Paul Read, and I think it was just Paul and Nathan, we had invited maybe a couple other folks. We basically were like, hey, You know, expert tech podcasters, can we just like have a chat and like, what can we learn from you? And that conversation is where the tagline of Arrested DevOps was coined by J. Paul Read. So because Nathan Harvey was saying, you know, you need to have like, you're going to have like a tagline and he's like, and you're going to get sick of it because he said in the Food Fight show, he kind of jokingly, like not intentionally, at one point ended the show by saying, hey chefs, keep it hot. And then he's like, and then dozens and dozens of episodes, I have to keep doing it. And I think, you know, Paul was like, it could be something like, there's always DevOps in the banana stand. And here, 10 years later, I really want to—

**Bridget:** [00:14:34] happily we have Jess. We have Jess who improves it.

**Matty:** Okay.

**Jessica:** Which is because the first time I was on the show, they gave me the script. And at the end of it, Matty says, there's always DevOps. And I was supposed to say that bit about the banana stand, but I didn't remember it. And I kind of panicked at the last minute. And I'd been watching a lot of Dora the Explorer. So I said, in the banana pants.

**Matty:** And that's a thing now. And actually, I think I could be wrong, but that might have been the first time as well that we came up with this idea of having the guest do the tagline. I'll have to check because I did a little bit of like ADO spelunking today because I wanted to figure out when did we start doing the cold opens. And if you're hearing this now, it means I've decided to actually record this supercut of cold opens, which will be at the end of the show you can listen to. If I don't get around to doing that, I will edit this part out. But so if you are curious, the first episode that had a cold open is episode 44. So we've been doing them for the majority of the time. And then at some point we started adding in this idea of having the guest do the taglines. I will say there were years of ADO when Joe was more than just an occasional host. Joe was our editor. And one of my favorite things about getting— when I would get the edit back from Joe was to find out like, what did Joe pick? To be the cold open. You can tell if you listen through ADO, you see as Joe becomes more attuned to the nerdy, dorky DevOps jokes and they get better and better, like his picks get better and better as they go.

**Bridget:** [00:16:22] Maybe you just start saying more and more brilliant things. I mean, who knows?

**Matty:** Oh, they rarely would be me.

**Joe:** There was a little bit of art and science to picking the cold open. My, my usual thing is, is there any interesting profanity? If there's interesting profanity, that's the, that's the cold open.

**Jessica:** Start with the profanity. Yep.

**Matty:** I recorded an episode earlier today with, with a guest. So recorded the episode, which will actually be coming out after this one you're listening to. You have to wait a couple weeks, but with Andrew Ziegler. And I was doing my opening spiel with the guests. And so I always say the same thing. And one of the things I tell people, I say, as Bridget likes to say, We have made our peace with the explicit tag. So speak how you want to, how you want to speak. So that's part of the spiel that goes at the beginning of every ADO. Other parts that come into when, if you are a guest on Arrest DevOps that you get to hear is you get to hear that if you make a mistake, stop and start again, but don't feel like you have to be perfect. And also, if you happen to accidentally say something you shouldn't, maybe blow an NDA, we ask you to like clap real loud. And so we remember to cut it out of there. And I also say this every time, I say this has happened all of one time ever in the 10 years of Arrested DevOps where somebody said something they shouldn't and we had to cut it. So I'm pretty proud of that track record for some reason. But there's one of my favorite ADO stories. And it's funny because Bridget mentioned this also, a reference to this in our notes. So I don't remember what year it was, but one year for GOTO Chicago, Bridget lined it up to say, well, we were going to be able to podcast ADO all day long at the conference to record all the different speakers.

**Joe:** [00:18:08] Oh my God, I think I remember that.

**Bridget:** Okay. So, you know how, like, when somebody asks you to curate a conference track for one day and you think, sure, that sounds great. I'll put content, like 5 different talks in a row.

**Jessica:** Oh, cool.

**Bridget:** They would like me to do it as podcasts. I could do a podcast conference track and record live podcasts that are also the conference talk that are panels. That sounds wonderful. Okay, stop me when you figure out why this is a terrible plan. Yeah, if you're realizing now that this means Maddie and I have to record 5 live podcasts in a row back to back to back, oh my God.

**Matty:** And so Bridget comes with this idea and is saying, I want to do— we're going to do— I'm like, that sounds— she's like, can you help? I'm like, that sounds great. I said, we should break it it up. Like, I'll take half, you do half. And Bridget's like, no, I want to do them all. I'm like, that sounds absolutely bananas. And it was. If you listen to the last couple episodes, we are very slap-happy. And it goes— but the best part, and it actually ends up slightly in the cold open of the episode, the first episode of that series was called Old Geeks Yell at Cloud with Andrew Clay Shafer and Brian Cantrell. And Brian had— was walking, literally like walked off the keynote stage and then went in. And also, just so you know, this was done like in a breakout room with an audience. So people came and would watch these throughout this. So there was an audience. It was like a live studio audience. Totally cool.

**Bridget:** [00:19:41] This is important. There was an air wall. Explain for our listeners the problem with the air wall.

**Joe:** Well, air walls.

**Jessica:** Yeah.

**Joe:** Air walls are basically movable walls that divide up a much larger ballroom into smaller meeting spaces. They are, and I believe this is where the story's going, they are in no way sound canceling.

**Matty:** I'm not 100% sure that this was an air wall situation. I think this was a Brian Cantrell is very loud situation.

**Bridget:** Well, yes, but also he was very loud and there was another conference talk trying to happen on the other side of an air wall.

**Matty:** Several times, blah blah blah, several times in the recording a proctor would come into our room and say, y'all need to stop yelling. So it was just so— because he was really wound up and really excited. And yeah, that was talking about Oracle, probably. I'll have to go— the cold open of that episode actually is about Brian being loud and us getting in trouble for it, as I know because I was listening to all of them.

**Bridget:** [00:20:42] But Shafer and Brian made a great combo. It was a wonderful panel. They were all wonderful panels that day. It was bad judgment on my part to think that I could be on 5 panels in a row in front of a live audience. Turns out that's exhausting.

**Matty:** But we did a good job.

**Trevor:** It was good though.

**Bridget:** We did a good job because we had such great guests.

**Matty:** This is, this is true.

**Bridget:** Um, so maybe that's the actionable takeaway for any aspiring podcasters out there or panel hosts out there. If you're going to take on way too much, just have great guests. That'll cover a multitude of sins.

**Matty:** And then eventually maybe your guests become hosts of the show, and then they come and they join us because that was I. So if we talk a little bit about Jess's origin story of an ADO host.

**Trevor:** Hold on, we didn't we didn't talk about Bridget.

**Matty:** Oh, we didn't talk about Bridget. Okay. Oh, see, because this is take two, I forget what we've actually already talked about. So yeah, so we talked about how so gonna fix this in editing. All right, so we talked about how Trevor. You know, Trevor and I kind of started, and then the next host to join was Bridget. And if we kind of think back, and Bridget's been here almost as long as me and Trevor.

**Bridget:** [00:21:54] This is 2015.

**Matty:** No, you were. It was 2014. 2014 is when you started. Yeah, you were. I'm telling you.

**Bridget:** Where does the time go?

**Matty:** I am 90% sure that we were like all of 12 episodes into 80 when Bridget Bridget joined. I will. I will find out exactly when that happened at some point, but it was pretty early because. We had, if I remember correctly, Bridget was on the show before she was a host, and I believe it was an episode about conferences. And I distinctly remember that the episode art is a photo from Bridget of all of her conference badges. And I think that was the episode you're on. And then shortly after that, we asked Bridget to join the show. And my memory is that this happened at DevOps Days Chicago at the afterparty. Trevor, I think, has a different recollection.

**Trevor:** My recollection was we thought we were gonna— Maddie and I had been talking about it for a couple months, and then Maddie finally had a chance to ask Bridget, and Bridget said yes.

**Bridget:** [00:22:58] So exciting.

**Trevor:** Bridget, what was your recollection?

**Bridget:** I think it was cold, and I think we were in Chicago. Well, I don't know if it was cold, but it was like At the conference afterparty, maybe evening event or something, I think we had stepped out into kind of the outdoor part of the socializing area. Maybe it was a little quieter and it was just a moment where Matt could say like, hey, you want to— that was a great podcast. You want to podcast with us some more? I'm not sure if I knew what I was getting into in terms of when you say let's podcast. And I always think like, okay, we'll do a few podcasts. Years later, look at all this amazing podcasting we've had the opportunity to do. It's pretty great.

**Matty:** Now, so I think that, Bridget, I—

**Trevor:** my recollection has shifted. We— there definitely was discussion. There was discussion that Maddie and I had beforehand for a little while before Maddie asked you. But I think in that confusion, the, the not sure that you would— what you'd signed up for yet had happened. And then Maddie told me that, and then I excitedly came up to you And said, oh, you're going to be on the podcast now.

**Matty:** [00:24:09] This is 100%. I checked it. I just checked the timeline. So the first episode that Bridget was on was September— well, was posted. It was published on September 23rd, 2014, which means we probably recorded it a week or two before then. The first DevOps Days Chicago was October 7th and 8th of that year. So that adds up to be that we would have That it would have been. And I 100% now Trevor's right. I forgot about that, that it was like the you know I think Trevor came and said, "You're gonna be on it," Bridget was like, "I did not agree to anything yet." And so I'm I'm doing a quick little poke here to see if I can figure out the first episode that Bridget hosted, which aha! The first episode hosted by Bridget Kromhout was published on November 18th of 2014. And it was called DevOps in the Enterprise with guests Ross Clanton, Steve Pereira, and Michael Ducy. And then Joe, somewhere along the line, started editing stuff for us and then would be a host.

**Bridget:** [00:25:12] So yeah, Joe started editing stuff for us. I'm actually sitting here trying to remember, did we, Jesse, did we meet at a conference? I feel like we met on the conference circuit. It seems plausible. Definitely. Unless we met on Twitter. Now I don't know.

**Jessica:** Is there a difference?

**Bridget:** I mean, at the time.

**Jessica:** Yeah, yeah, we met at conferences. And at some point, y'all had me on Arrested DevOps. And I just liked it so much. I was like, I want to join your podcast.

**Matty:** So the story of that one was, so Jess, and I'm going to say used to, and you can correct me because maybe it's still true. It was definitely true for a while, was a co-host of an amazing podcast called Greater Than Code, which was one of my absolute favorite shows. And I was speaking at the first year of the Redeploy conference that Mary and Paul Reed put on. And so was Jess.

**Jessica:** Oh, that one was so good.

**Matty:** [00:26:14] And so was Jess. And I remember we went to, I think it was during lunch, because it was one of those like Modern Drama style things where like they didn't have lunch and you just went and sat and a food court. And I remember sitting with— and I was really excited because I, I was a huge fan of Jess from, from Greater Than Code and stuff. And so we're, we're talking and I'm trying not to be obnoxious, and I think I was doing a pretty good job. But it comes up about podcast, and then I was like, well, I have a show. And Jess is like, oh, I, I would like to be on it. I'm like, oh my God, okay. And then it was like 6 months later when, when we actually got Jess on. But at the end, after we're done recording, Jess was like, that was super fun. And like, do you ever look for new, like, regular panel. I can't remember what— at Greater Than Code you had a different term than host for—

**Jessica:** Oh, panelists. Yeah, we had panelists. There were usually like 2 to 4 panelists to 1 guest.

**Matty:** It was one of those things where she's like, would we ever consider it? I was like, oh my God, yes, of course, because you're amazing. And it was amazing. And we also had— we have another host who hasn't hosted a lot of shows, but Jeff Smith, who's DevOps luminary in the Chicago area and long, huge, long friend of DevOps Days Chicago and such, was joining us as a host and then did a few episodes. And we still, once you're a host, you're always a host. So Jeff has been great to have with us. Trevor, you say in our chat, our former transcriber. What are you talking about?

**Trevor:** [00:27:41] We used to have I think her name was Mandy.

**Joe:** Mandy?

**Matty:** No, she was an editor. It was Mandy Moore, the Ruby rep. Before Joe was our editor, we, the first year or so of Arrested DevOps, we had Mandy Moore would do our, our podcast, who also, speaking of greater than code. And the only reason that we stopped using Mandy was, you know, I think the theory was if we're going to give money to somebody, we might as well give it to, you know, someone in the family. So that's so. Joe is a nepo editor, I guess. I don't know what I was gonna say. I don't know how you— nepo editor.

**Bridget:** Yeah, well, good luck with that these days because he went back to working full-time.

**Matty:** So yeah, so that's why I have to edit it now.

**Bridget:** Schedule at this point is like, good luck.

**Matty:** Yeah, that's, that's why now I, now I'm just the one stuck doing it, which is fine. Which is why if you're ever wondering, you know, why the editing quality of the shows fell off over the last few years, that might be part of it. But also the technology available to do these things has made it a little bit easier. I always would say with episodes that I would edit, you could tell as you listen that I would get bored throughout the editing because the first like 10 or 15 minutes, all the ums and dead stuff would be cut out and everything. And then you get the last few and there's— I was just like, ah, fuck it, let me just get this thing done.

**Jessica:** [00:29:04] So it's not that you were like tired as the podcast went on, It's that you got tired as an editor.

**Matty:** As an editor, yeah. But the good thing about being the one who's doing the editing of your own show is you can always make yourself— you can't necessarily make yourself sound good, but if you were bad, you can remove the parts that were bad, you know. So there have been a few episodes where I have definitely said things that I'm like, as I was editing, I'm like, this did not go the way that I wanted it to. I can rewrite history and make that happen. Listeners, we're going to take a minute now, and I want you to imagine— I want you to shout out who you think is the guest that has been on the most episodes of Arrested DevOps.

**Jessica:** I didn't look at the show notes, but I have a guess.

**Matty:** What's your guess?

**Jessica:** Andrew Clay Shafer.

**Matty:** You are correct. Andrew Clay Shafer has been on 8 episodes of Arrested DevOps, which is depending on how good you are at percent, what's 8 divided by 200? I don't know, a decent amount. 4%?

**Jessica:** [00:30:05] 4%.

**Matty:** 5%.

**Jessica:** Yeah, less than 5%.

**Matty:** No, it'd be 4%.

**Jessica:** Oh yeah, 4%. You're right, 4%.

**Matty:** And then the second— the guests, we have a, a 2-way tie for— we have for runner-up of the second most amounts of episodes, and they are Dr. Nicole Forsgren and Sasha Rosenbaum, who've both been on 7 episodes. Uh, this is assuming we are not counting ourselves as guests because on the year-end wrap-ups We usually consider ourselves guests. But even then, we probably still have not been guests as often as Shafer. So—

**Bridget:** True fact.

**Matty:** We will have to bring him back on again. Fun fact, I was— when I said I was going through my little listening to cold opens a little bit earlier, I was on the phone with my partner on speaker. So she was hearing it as it was happening. And there is an episode with Shafer. And he was very Shafer when it came up. And incidentally, Steph, my partner, had dinner with Shafer a couple of weeks ago because he got stranded in Chicago. Overnight, as he liked to say. Basically, Shafer flew to Chicago to have dinner with us. He was, he was trying to get to Munich, and this was like, was it 2 weeks ago? If your list doesn't really matter why, but anyway, long story short, he basically flew in, got stuck in O'Hare. We came out and had dinner with him, and then he had to go home the next morning. So he's like, great, I flew to Chicago and have Indian food with you too. But the point was, even listening to the cold open, that whatever the thing was that Andrew said, she was like, yep, yep, that sounds just like— I was like, yep. And not because of the voice, but the, the, the Shafer-ness of it. Um, let's, let's try to remember. We got a couple other— we already told, you know, we kind of heard the Go to Chicago story. Trevor, do you have any like storied history ADO moments either on the show or outside of the show that, that stick out to you that, that are, are some of your favorites?

**Trevor:** [00:31:45] I didn't know I was going first, but, um, I would say probably the one that, the one that comes to mind the most Is I forget what we called it, the Trevor rule or whatever it was that like, don't stop learning. If you stop learning, you're dead.

**Matty:** Oh, that was Trevor's law, which I think also was, is a different law. So that doesn't work, but it was, yeah, it was the rule of Trevor. Yeah. It was don't stop learning. If you stop learning, you're dead. When was that from? That I forgot about that, that in DevOps 2.0. I ran into a, we all have stories about when you meet people who are fans of the show, or at least are aware of the show. Maybe we won't say fans. Some of— sometimes people say they're fans. And I've got a couple that stand out to me. One was more recent when it happened, is a couple years ago I, I made a new friend through riding Peloton, and turned out she worked in tech. You know, we, like, knew each other on Twitter a little bit, and then we were doing Peloton rides together and stuff, and we start talking, and she was telling me about listening to Arrested DevOps Early, you know, how she used to listen to ADO and stuff and blah, blah, blah. And then for some reason or another, she sent me a message on LinkedIn, which meant, and I looked at it and then of course I see the LinkedIn message history and this, what, Amy, Amy Caldwell was kind of our first fan. And I don't mean the first person to listen, but I remember she, the first, I don't want to say like fan mail, she would say the same way, but had written us, written me a note and said, hey, I like the show. I love the show. This is where I'm learning the things I'm trying to do. And the worst part about this is I realize when I look at it that, you know, now, you know, 8, 9 years ago, I left her on read on LinkedIn and never actually replied to the last message about how to help her understand things. So that's, you know, not great, but we're still friends anyway. I know, you know, Bridget, you were telling me something that happened to you at KubeCon this year.

**Bridget:** [00:33:43] Oh yeah, I was. I want to say this is at KubeCon Chicago. And I made the executive decision to stay in one of the very far away from anything entertaining but connected to the conference center hotels. And I'm not sad about that decision, even though it meant that it was a very long walk to like have dinner with colleagues and that sort of thing. But I was kind of running through the connected skyways to get to the conference center and had someone who was just kind of sitting in a random hallway stop me and say, Bridget? And it turns out, fan of the podcast. He gave me just a few moments of discussion of how he apparently teaches and finds the topics from the podcast to actually be super valuable to his students. And I thought, you know, he teaches CS, and I thought, oh, I'm so sorry, but also, yeah, probably. Like, this is the reality that they're going to graduate into. So they'll, they'll learn and hopefully, uh, be warned about a lot of things.

**Trevor:** [00:34:49] I think I ran into that same person at ScoopCon.

**Bridget:** Did, did he say the same thing to you and you were like, yeah, I'm happy to help?

**Trevor:** I'm like, I haven't been on the podcast in how long and you know who I am?

**Matty:** I think it was ChefCon 2015 when Trevor was first getting recognized for the show, like, was like the first IRL, like, recognition and being excited about it. I think that— I think it was that ChefCon. I remember there was one when you're like, this is cool, people know me because of this, like, because we hadn't really, like, been at events in person or something for that.

**Trevor:** Yeah, that— I mean, that was certainly true, but I, I don't know that it was because people recognized me from the show or that people put two and two together and saw me with Bridget and Maddie. Figured out that I had to be the third person.

**Bridget:** It's the beard.

**Matty:** I don't think he had the beard then though. I think that was much shorter. Yeah.

**Bridget:** Jess, you were saying that you're actually at a conference right now, or on the way to a conference or something? I, I am.

**Jessica:** [00:35:51] I am attending a conference this time. Uh, it's— yeah, it's research. It's research. So I'm actually going to They call this conference AI.dev, which I don't think you should call your conference AI.dev when you don't have that domain name. Oh, but yeah, whatever. It's, it's Linux Foundation. They like, they took Cassandra Summit this year and they glommed on a bunch of AI stuff. So they announced this conference in like September, which is cool because, right? Yeah. Anyway.

**Bridget:** So they already had the venue. They already had the venue.

**Jessica:** They already had the venue, but everything was Cassandra Summit. Now it's both. Yes. So, so it's about like half Cassandra people and half, um, people who were there to talk about generative AI.

**Bridget:** Do they have to fight? Is this like a cage match sort of thing?

**Jessica:** I, I went to one of the Cassandra talks today and it was so empty. Yeah. And I heard the keynote about Cassandra 5. They're announcing all these features that the Cassandra people are probably excited about, but the rest of us are just looking around going, I think that's a database. But it's pretty good. The conference as a whole, I'm enjoying it. Also, I got 3 pairs of socks. Yeah. So that's what I'm doing today. It's fun to not have to speak.

**Bridget:** [00:37:20] I went to Strange Loop this year.

**Jessica:** Yep.

**Bridget:** And I went because my friend Luke Franso was actually speaking about— he had worked on GitHub Code Search, and so he was speaking about that at Strange Loop. And so my friend Ryan Brace and I, like, and Luke, who all went to college together, all went down to St. Louis and, you know, cheered for Luke and also just saw St. Louis, which was cool. We went to the City Museum, which should not be construed as a museum in any way, but it's amazing.

**Jessica:** It's— it is the best thing about St. Louis.

**Matty:** It has slides.

**Bridget:** And by slides, we don't mean like the stuff with projectors. Yeah, we mean like slides you're going to get, like kind of rug burn going down.

**Jessica:** Whoosh. Yeah, yeah, yeah. They have taken out the best slides for like liability reasons.

**Bridget:** Did you read Wikipedia about the guy who built it, maybe since—

**Jessica:** oh, well, I mean, I live in St. Louis.

**Bridget:** Yeah.

**Jessica:** Bill, what was his last name? Oh, yeah. That died a few years ago in a bulldozer accident, which was completely plausible, but actually he was killed and it was staged as a bulldozer accident. It's very sad.

**Bridget:** [00:38:34] Okay, so there's a lot to unpack there, but basically you should definitely go to any museum That the founder was later killed in a bulldozer accident while trying to build another totally legit museum.

**Jessica:** Yeah, yeah, yeah. Except it was a cover-up, the bulldozer. I just read that this year. I'm seriously— anyway, he was so awesome that somebody had him killed. Okay. But the giant work of art— school bus on a museum or sorry, he put a school bus on a roof and you can go out in it, but it sticks out over the edge of the roof and it's pretty exciting. I like to climb when I get to the roof. I like to climb up the inside of the dome and come out at the top and go up the Mantis? Obviously.

**Matty:** I got a little confused here because you started talking about the guy getting killed. I was just getting confused with my other podcast that doesn't run anymore, which is Kishanon, which is the one I did with my friend Kelly, which was your favorite podcast about conspiracy theories and food. And you should go check that show out, by the way. It's kishanon.com. We ran like 12 episodes. We had 5s of listeners. But what basically would happen is Kelly would learn about a conspiracy theory and we'd get on the show and she would drink a lot of wine and explain it to me and we would make jokes. And I will just tell you that the Scientology episode was effing dark. It is hard to make— you think it's easy, it is hard to joke about Scientology when you really start talking about like Shelly McCabbage and all this stuff. And we had to have a really, really funny episode after that one. But anyway, Wow. Love me some quiche Lorraine.

**Bridget:** [00:40:07] And speaking of food, bringing it right back to Arrested DevOps, I'm noticing eating sushi with Andrew Clay Shafer was literally one of our episode titles.

**Matty:** It was. And do you know how long it took me to actually eat sushi with Andrew Clay Shafer? Like I—

**Jessica:** Probably hours.

**Matty:** No, no. I mean, since I, until I was able to. Yeah. Doing that also takes hours, but it was, I missed a lot. And there was one time it was Interop. In Las Vegas, we were, Shafer and I were both at the— we were on a panel together. And then after the panel was over, like around 2 or 3, and we're like, all right, what are we going to do? He's like, all right, well, let's get, you know, we'll get something to eat like in a little bit. And I was like, finally, I'm sitting here. I'm like, I'm finally going to have sushi with Andrew Clay Shafer. It's a DevOps Against Humanity card. I have to do it. And I proceeded to fall asleep in my hotel room and wake up to messages from Shafer from hours before that were like, where are you? Where are you? I want to go get sushi. Where are you?

**Bridget:** Where are you?

**Matty:** Where are you? And then like, well, fine, I'm going to go do it myself. So I think actually the first time I actually had sushi with Shafer was at DevOps Days Ghent 2019, the 10th anniversary. Like that was, it just had never lined up.

**Bridget:** [00:41:16] And then, you know, 4 years after we called a podcast episode, I did, cause we were going to like bring it in.

**Matty:** Like, weren't we? I don't think we brought some, but we were going to get like sushi from the grocery store and like bring it to the— Because we did that at DevOps Days Minneapolis. I don't know if she would look at us like that. We did it at DevOps Days Minneapolis.

**Jessica:** I thought the title was aspirational.

**Matty:** It was. I think it was our hope.

**Bridget:** It was conceptual.

**Matty:** But we did that. So, Bridget, I think that episode was recorded at a DevOps Days Minneapolis. And that's, that's a fun thing that's like, we don't do it in ADO as much anymore. But, and Bridget was really, this was your signature, but we did it a lot of places, was to record these live episodes as opposed to these ones that are not live?

**Jessica:** One live episode.

**Bridget:** Oh, we recorded a lot more than one.

**Jessica:** No, no, I meant at, at per conference at a time.

**Bridget:** Oh, yeah.

**Matty:** Oh, yeah, yeah, yeah, yeah. Only 2 more than one.

**Bridget:** Only.

**Matty:** And they were always, I, I, I think, I don't know. I think the first one we did that was live and like part of the, like with an audience, because we did work, I remember we recorded an episode at DevOps Days Chicago 2014, but it wasn't like the ADO, like, be on the stage style. It was like we just happened to go find a room and got a couple people to come into it. So it might have been DevOps Days Minneapolis 2015 might have been the first time, um, we did one of those. But I, I don't have the math, but I'm gonna say there's at least a dozen ADO episodes, and they're a little different than the regular.

**Bridget:** [00:42:45] Well, there's, there's AV considerations.

**Joe:** There's always AV considerations.

**Jessica:** But like, what did we say at the beginning? AI is easy, AV is hard.

**Joe:** Yes, yes.

**Bridget:** I mean, what, what's your pro tip for people who think they want to host a live podcast episode from a stage at a conference?

**Matty:** Don't.

**Bridget:** But if they're going to, logistically, what do they have to know?

**Joe:** Well, you usually have to, you know, line it up, line it up with the AV crew ahead of time. Don't spring it on them. You know, or you're all going to be passing one mic, or you're all going to be passing one mic around. Yes, yes, that is my— that's my pro tip.

**Jessica:** Uh, does it affect the editing? Like, can you—

**Matty:** um, I think nearly—

**Joe:** I think the live— I think the live episodes are easier to edit than, than the Zoom calls because you don't have the— you, you have more of like the, the cues of when somebody's done talking. You get a lot less You get a lot less like people talking over one another. You get a lot less awkward silences that you have to, you have to take out. But that's kind of— that's— I always found the live episodes to be easier to do than your prerecorded stuff.

**Matty:** [00:43:58] You're right. There's very little crosstalk because of the handing the mics back and forth kind of thing. Anecdotally, kind of looking, I think the first live episode was DevOps Days Minneapolis 2015, eating sushi with Andrew Clay Shafer. Then the next one was DevOps Days Toronto 2016 hosted by Bridget with guest Joe Laha. Did I own that one?

**Joe:** You were a guest, yeah. I think I remember recording that because I think we were in the green room off in the— because the DevOps Days Toronto was like a stage at the CBC studios. And I think we just went off into like a green room and recorded. I think I, I think that was the, the days where I was like, I'd travel with like a little Tascam recorder just in case, just in case the magic happened.

**Matty:** So this was technically not a, a live episode then. It sounds like this was at a conference, at a conference.

**Joe:** [00:44:59] And I don't remember if the, I don't, if the Shafer one was on stage or if that was, we just, I think I'm sitting here racking my brain like Because I have vague memories of 2015 and the room it was in, and I don't remember that we did one on stage. I think the first one we did on stage in Minneapolis was probably the next year, 2016, when we moved up to the bigger ballroom.

**Bridget:** Oh, no, I'm looking at the transcript. Coming to you live from DevOps Days Minneapolis, Matt and Bridget sit down with Andrew Clay Shafer in front of a live audience to talk about the growth of DevOps and some Et cetera, et cetera.

**Trevor:** My recollection of a lot of those was we would, we would take an open space.

**Matty:** And then we learned how to do that later, that that was a smart way to do it, you know, and then there, then it became for DevOps Days Chicago, like when you're the one who is in charge of the spreadsheet of the program, you can go and call dibs on it. And we would always put in a bit of a rest of DevOps. And by the way, the DevOps Days website does not handle that very well at all, because you end up having a speaker called ADO. Whoever wrote that code sucks. Um, spoiler, it's me. So that's why I could say that. We had— but there have been some— so this is what I was remembering too, a little bit of history. So we have a recording from DevOps Days Madison 2017, and it's, it's, it's very, it's very fun because you look at like— one of my favorite things about going through these old episodes is like seeing how all of our our guests and people who are on the show, like, have evolved and moved. So we have DevOps Days Madison 2017 with speaker Emily Freeman.

**Trevor:** [00:46:37] And that's—

**Matty:** I think this was her second. I think her— Emily's— Emily's first talk she ever gave was at DevOps Days Madison, but I think it was 2016. I think it was a year before. But this was still a new one. And we had— this was, you know, now I don't know if Emily would, you know, come on. She would totally come on our show. I'm kidding. But we look at a lot of these kind of as the— some things change and some things don't. I think that's what's been kind of fun to look back at these and see what mattered. And also how many of these episodes we're still saying the same shit 10 years later, right? I mean, you could— well, we said this about DevOpsDays. You look at the program of DevOpsDays Ghent in 2009, and half of those talks you could give today. And people probably do.

**Joe:** Well, I recall Rin Daniels' talk at DevOps Days Minneapolis in 2014 was DevOps is Dead.

**Matty:** Yep.

**Bridget:** Was it 2014 or 2015?

**Joe:** 2014.

**Bridget:** Oh my goodness.

**Jessica:** Okay.

**Trevor:** Was it?

**Bridget:** I think it was the second year though. I think it was—

**Matty:** That would have been 2015.

**Joe:** [00:47:39] No, it was our first year.

**Matty:** Well, anyway, I'm gonna solve this problem anyway.

**Bridget:** But I, I wanted to, I wanted to add to what you just said. I was sitting here looking, doing my homework, looking at what would be an episode that I have fond memories of. Do you recall Who Owns Your Availability?

**Matty:** Yes. Oh my God, that was such a— there's a great story about that.

**Bridget:** So many great things. But I'm, I'm just going to tell you from the episode description. Tell me how many of you have heard things about this in your recent work life. Who owns your availability? Recent events in the npm community have rekindled the perennial discussion about dependency management and controlling points of potential failure. Longtime operations professionals, Charity and Pete, join the ADO crew to discuss. And I'm just like, software supply chain, exactly what your dependencies and your container secure supply chain story looks like. I was literally in a meeting about such things this week.

**Jessica:** [00:48:41] Like, this is not old.

**Bridget:** I mean, the episode's from 2016, but this is current stuff.

**Matty:** Do you remember why we did that episode?

**Bridget:** I remember picking the Left Shark logo and thinking it would be hilarious.

**Matty:** Because it was about Left Pad.

**Bridget:** It was Left Pad.

**Matty:** And we did it really fast. That was one where we were like, this thing happened, we need to record something today. Who can we get? And it wasn't like we— like, it was—

**Bridget:** we wanted to talk about left— like, we wanted to talk about with the zeitgeist of the left pad disaster, we wanted to talk about this perennial topic of, yeah, this actually matters.

**Matty:** Right. But what I was getting at is this was not a planned episode. This was a— this is timely. We need to record it and ship it like today. So we were, you know, again, this sounds like when I said, who can we get? Like, I guess we settled for Charity and Cheslock. But it was a matter of like, they were awesome for this. But I think there was— I can't— and this is what's killed me is there was someone else who also would have been awesome. And it was like they just weren't available. Not instead of, but like in addition to. But this was— I was really proud of this one too, because we did— we're like, all right, let's be timely, you know?

**Bridget:** [00:49:55] So, and again, like Brittany says, nothing's changed.

**Matty:** Go listen to it. You can learn still.

**Trevor:** I remember finding a tiny little closet to go hide in for that one.

**Matty:** Now I will say, so we talk about things that have changed. I would have asked everybody on the show to say, what was your favorite ADO episode of 2023? Except none of you know what any of our episodes were this year because I've done all of them, which is fine.

**Trevor:** No, no, it's okay.

**Matty:** It's totally fine. One of the things that's funny is we had 3 platform engineering related episodes this year, I think, which have been kind of, kind of fun to see. I know we are not rebranding to Arrested Platform Engineering, although I think that's how I—

**Jessica:** Is DevOps dead, Matty? Is it platform engineering now?

**Matty:** No, it's not.

**Bridget:** By the way, Joe was right. Ryn Daniels' talk was in 2014.

**Matty:** Yep.

**Bridget:** I did go to that. Literally a decade ago.

**Matty:** Absolutely. No, we've had 3, 3 really, actually really interesting platform engineering episodes and from 3 different kinds of thoughts on it. So we had one earlier in the year. Well, they've all been earlier in the year. It's December. So Daniel Bryant, who was at Ambassador Labs at the time, had a— we had a great episode about platform engineering. And I would look at that as the very pro-platform engineering, right? You know, and then we had another episode shortly after that with Pete Cheslock, and that episode is called DevOps with Better Marketing. So maybe a little bit of a different spin on PlatEng. And then After hearing a bunch of thought leaders talk about it, we actually had someone who does the work. So Matt Kuritz, who's also one of the DevOps Days New York organizers, who is a platform engineer at The Farmer's Dog, came on the show and talked about how they actually do it. And I still think that Pete is right, that platform engineering really is DevOps with better marketing. And I think back to, I always think about, Bridget, you did an episode with Kelsey Hightower and Andrew Clay Shafer years ago about platforms.

**Bridget:** [00:51:57] About platforms.

**Matty:** And it's like, I, and I will tell you, every episode of Platform Engineering, if you go in the show notes, there's a link back to that episode where, where those, those things came from. It would not be a wrap-up episode if we didn't talk about numbers a little bit. We already talked about a few. We talked about who has been on the show the most and such. Um, but as of tonight, we are getting very close to 2 million downloads of Arrested DevOps over the 10 years. It's, it's closer than you even might think because I pulled up our stats and we have 1,911,233 listens as of like an hour or two ago, maybe a few more. But Spotify messes this all up because of the numbers, because the way Spotify— this is the part where Bridget nods off because I'm going to talk about the how podcasting works and she hates this, but The TL;DR is Spotify does not— like every other podcast app you have, when you listen, all it does— Apple iTunes Store, all that stuff— they just point you to our MP3 file that's sitting out there in S3 or whatever. Spotify like slurps it in and then serves it from their own stuff. So it means all— anybody who listens to our show on Spotify doesn't show up in our regular stats. But that said, we have had 35,000 listens on Spotify, so that puts us to, you know, about 50,000 listens away from 2 million. And also, we did see— we got our little Spotify Wrapped for podcasts, and I— we are in more people's top 5 or number 1 podcast on Spotify than I realized people actually even listen to podcasts on Spotify. So thank you. But there's quite a few people— we've got thousands of people who listen to us on Spotify, so that's neat. But also, where's our Joe Rogan money is what I want to know. Spotify, you know, it would be better spent on us is all I'm saying. And then we said, so we always said that the episode number 1 is the one that has the highest number of listens, which, I mean, that makes sense. It's been around the longest, you know, that's fair. But the second highest episode ever was episode 92, which was about— it's called CI/CD Oh My with Jez Humble. And that was hosted only by Bridget. That was a Bridget and Jess show, which means I've never listened to it. So But apparently everybody else did. That's hilarious.

**Bridget:** [00:54:14] You know, I—

**Jessica:** when you could listen to it, Maddie, you could be number 2 million. Yeah, yeah.

**Bridget:** You put this in the notes. I went and I looked. I remembered doing an episode, or more than one episode I think, with Jez. We've had him on a few times, but, but I didn't remember that specific one by the title. I went and looked it up and I thought, 2017. We were so young then. 2017 seems like an eternity ago. It really does.

**Matty:** It really is funny looking back at the old ones though, because like I said, when I was stepping through, it's like you look at this, you're like, we definitely recorded this, there is literally proof that this happened, but I do not remember this, you know? And, and then sometimes you do, and then sometimes you go, oh, that's right, that was really That was a really special moment. I'm just looking through guests right now and, and there's always, you know, there's a lot of folks like Kyle Kingsbury was on our show many years ago, you know, and that one was super fun. Uh, you should go look that one up. We have had, let's see, Kelsey. Kelsey's been on twice. The platforms one is the one that I always think about as like kind of the ultimate of that. Joe has, Joe has only been a guest twice. So I guess that's fine. Strangely enough, Allspaw has only been on the show one time.

**Jessica:** [00:55:35] You know, he's been spoken of many more.

**Matty:** Yes, we— yes. One of the things I promised in the very first episode of Arrested DevOps is that I— we would not do any name dropping and you would never hear me say, well, I was talking to John Allspaw at Velocity, which is true. I've not said those words because I've spoken to John Allspaw many, you know, Except for when I say it that way. Actually, the cold open of an episode with Corey Quinn is me saying, we always say on the show we don't name drop except for when we do. So that's—

**Joe:** was that Kyle Kingsbury? Was one of those episodes— was that one of those live on stage Echo 2? Yeah, yeah.

**Matty:** Oh wait, was—

**Bridget:** oh, he was— we were hanging out with Kyle. I remember Chicago. He was wearing full leathers.

**Matty:** It was great because that's not that episode though.

**Joe:** I think that I remember he did an episode.

**Bridget:** I remember, I remember recording, but he spoke in my track, my actual track, not my podcast track, right?

**Matty:** But so the episode with Kyle was a regular episode, not a live episode, and it's called Podcast Me Maybe with Kyle Kingsbury.

**Joe:** [00:56:41] And we, uh, we recorded one because I remember, I remember plugging my my little Tascam thing into, into the board in that, in that crazy room at Navy Pier.

**Bridget:** Is it possible that we have more lost episodes that we haven't seen?

**Matty:** Well, I will tell you that up until a couple hours ago, looking on our website to see who was guest was not trustable because as I went through this, I found a whole bunch of bad data. But I have fixed it all. I was like going and I'm like going through the pagination, like onto the 3rd page of the episodes. I'm like, why are all these images broken? And get blame, it was me. I fixed one problem and created another one 3 months ago apparently. But also, because there was a point, so the REST in DevOps website has gone through a couple different incarnations. Originally, its very first ever, it was a Jekyll website for a brief amount of time. And then it was on WordPress for a long time. And I wrote like a very— I wrote this custom WordPress plugin that was to manage all the way that ADO worked. And Bridget hated it because she wanted to do everything with Git and was like, I don't want to have to go and do this. I mean, it's not wrong.

**Bridget:** [00:57:57] WordPress upset me. Not right.

**Matty:** It was, it was fine. I, I, but I was kind of proud with it. And then, and what I don't remember is I don't remember what the chicken and the egg was with Hugo, if it was The ADO website I did on Hugo first, and that's why I wanted to rewrite the DevOps Days website in Hugo, or the other way around. But I'm pretty sure it was— I think ADO went first, and because that was also easier.

**Bridget:** But Hugo is a much easier move.

**Matty:** But it wasn't Jekyll to Hugo, it was Jekyll to WordPress. And the Jekyll to WordPress was almost not even a migration. We were on Jekyll for like 7 episodes maybe. So the Hugo, coming off Hugo from WordPress was tricky. And, but then there was also a change when I changed the way the code worked. So this is a fun little goofy story. I'd say it's fun and y'all are going to say no. So I had written, you know, we had a custom theme for Hugo that I'd written that was running the ADO website. And I don't remember, I think Bridget, you found this in like Google What's the thing called when Google tells you if it finds you on the web? It's like a Google alert. So Bridget got a Google alert that her name was like embedded in some other weird-ass podcast. And because what had happened is they had just taken— and it wasn't like bad. I mean, it was open source. They had just taken it. But there was so much stuff was hardcoded in it around the hosts. So it was in like, you know, in the metadata was Bridget's name. And I was like, you know what? Maybe I should take this Hugo theme and kind of like abstract it away and turn it into a theme. And I wrote most of the— the theme is called Castanet now, and I wrote a lot of it in one night. I just sat down. I was like, it was like about 7 o'clock. I'm like, I'm going to try to do this. And it is to this day, I believe, still one of the only Hugo themes for podcasts, and it's used by a bunch of shows. But it's, it's also poorly maintained as I went poking around and I'm like, oh, look at these issues I haven't looked at in a while. And in fact, actually, I think ADO is even several versions behind of the Castanet theme. And like, it doesn't even work on the, the theme doesn't work on the current version. I got it in or whatever. Anyway, the point was in the migrating of data, there's a whole bunch of episodes that came over and their guests didn't come over with them. They came over and didn't have a guest attached. Because I was looking through the guests, I'm like, well, there's John Allspaugh, but he has no episodes. And then I went and found, you know, so anyway, I did a bunch of stuff. It's all, it's all much better now. Point is, I still think, but I don't think that's true with Kyle. Like, so I don't know, maybe, maybe it was a different podcast, Joe.

**Joe:** [01:00:40] Maybe it was The Ship Show. It was the, I think you were, you track hosted twice, I think. Yeah. I think it was the second year that you were, that you were track host at GOTO.

**Bridget:** Let's go with it's a rich tapestry. Let's go.

**Joe:** She spoke at a lot of conferences.

**Matty:** Okay, this is wacky. This is true. There is an episode for GOTO Chicago 2018, and Kyle Kingsbury is referenced, but he is not listed as a guest.

**Bridget:** Was he on the episode?

**Matty:** I believe so, because under show notes, you list all the guests. And their talk. And I can't imagine you would have just randomly put Kyle's talk on the list. And I think, let's see, there's 1, 2, 3, 4, 5. 1, 2, 3, 4, 5. Yeah, I, like in the video, the video, you can see, like here, look at this. You can see him. I just don't know why. Okay, we got to fix that.

**Bridget:** Oh yeah, okay. I'll go back and just— GoToChicago 2018. We actually have all the panelists in a photo, in a photo as the art, and Kyle is not on it.

**Matty:** [01:01:52] So I don't know. We just need to go in and fix the data.

**Bridget:** I—

**Joe:** you could— I could not— if you put a gun to my head, I would not be able to tell you what the content was. But I remembered— I remember going up to the— I remember going up to the booth and having the audio guy plug my— plug my little Tascam recorder into the, into the board so I could get a feed. Now remember that, that weird, that weird— it was like the, the big hall at the very end of Navy Pier.

**Matty:** Yeah, I think I figured out what happened. So I'm looking at live debugging the data. We are, we are. This is going to— I'm going to cut this shit out. Maybe I'll leave a little of it. It's a little bit. So if you go into the episode, the guest that's listed is Kay Kingsbury 2. But there is no Kay Kingsbury 2. But this happened to Nathan Harvey also. There's only an N. Harvey. So somewhere along the line, like, some guest files got lost apparently, like, you know, the adjusted one. So the real fix for this, to be quite honest, is just to change it to Kay Kingsbury. Like, nobody gives a crap anymore if it was, you know, Bridget. Bridget has strong beliefs about not rewriting history with these things, but I also feel like it's— I don't know. I wouldn't know what it was supposed to say.

**Jessica:** [01:03:06] Okay. Anyway, what I'm learning from this episode is that our memory is terrible and our data is also crap.

**Matty:** And there's the cold open.

**Trevor:** I think, I think we may have already hit the 2 million, the 2 million listens. Because you know what I forgot completely about? We used to put these on YouTube.

**Matty:** Oh, oh, you're saying you're gonna count views on YouTube towards our listens?

**Jessica:** Oh, yes.

**Joe:** Well, you were, you were the, you insisted on doing that.

**Bridget:** I always wanted video. And people People would come up to me at conferences and say, I love watching you on Arrested DevOps. And I would always be confused at first and then go, oh yeah, we publish video.

**Trevor:** So I actually pulled up the statistics from YouTube. What do you think our most viewed video was on YouTube? Oh gosh.

**Matty:** Kubernetes in the Future with Kelsey Hightower. No, no, it's not. It's Old Geeks Yell at Cloud, isn't it? It is. Yeah. Guess how many views that video has?

**Jessica:** [01:04:06] 16. What's that?

**Trevor:** I thought he said it had 5 views. No. Kubernetes in the Future is the 5th highest watched video.

**Bridget:** Oh, okay. Wait, so for the, for the All Geeks Yell at Cloud, I would say, did Brian even stay on the stage? I think I remember running or jumping. Wasn't there jumping?

**Matty:** He does, he does get up off of his chair at some point and starts running around.

**Joe:** He got very animated.

**Matty:** I'm looking at the video now. Um, oh dear, I'm gonna drop this. I'm gonna put this video in the show notes. I don't know if he really moved around. I'm trying to tell now. But anyway, 16,000 views of Old Geeks Yell at Cloud. So what I'm hearing here is that we have to have Cantrell on the show more because I think he's good for our—

**Trevor:** well, he's also the second most watched video. Oh really?

**Matty:** The other one is, is the fireside chat with Brian Cantrell is the second most watched video, which has 8,000 views.

**Bridget:** Yeah, I do think those live ones are fun, but I also really like the ones where— and I think Jess has done a few of these— where you kind of pick a person that you really want to go in depth with and you just have like that, you know, one-on-one or a couple of, a couple few people in a conversation Can you remind us just like which of those stand out in your mind as like, I'm really glad I had this in-depth discussion?

**Jessica:** [01:05:31] I was on the website just now and one of them popped up, which was Gene Connolly. And so he's, let's see, he worked for Meltwater, I think it was. But I use Arrested DevOps as an excuse to get those kind of deep conversations with somebody. Because if I— like Gene, for instance, he was talking about what they were implementing in their enterprise. And I love those real stories of things happening in real companies where it's not easy. And you have to get specific and stuff like that. And so that was a good excuse to really dig into How is this going? What is hard? And my goal is that other people who are trying to move forward further into the future in their enterprises feel like they're not alone.

**Matty:** You just said something that reminded me of a— one of my favorite little comments about podcasting, and it was from Brian Barry. He was one of the original hosts of the Food Fight show with, with Nathan Harvey and people, and, and he wrote this blog post many, many, many, many years ago about, you know, it was like something called like, so you want to start a tech podcast? Or actually, I think that might have been my blog post called that. But anyway, but one of the things he said was he said the dirty secret of hosting a tech podcast is this gives you the opportunity to sit and talk to people for an hour that you would not be able to get that time, right? You know, it's funny because you think about it, you're like saying— and, and none of this is because like, oh, they're too good to talk to, but like It would be a bananas thing to go up to someone at a conference and be like, hey, do you want to sit down and just talk to me for an hour? And they'd be like, dude, I can't, I got all this stuff. But you're like, you want to come be on my show? Absolutely, we'll totally go and do it. And it's funny because I, I owe— I believe strongly still that I owe a fair amount, if not all of my career, to this podcast. Because when I was starting out, we did this, we did this show and stuff, and there was a certain amount of authority that I feel like I had because I did this show. And it was kind of like, I don't know, I always say, like, people like, well, I wouldn't just give anybody a podcast. But it's true because we're able to sit and, and go. And I will say now, those of us who are podcast hosts, which are all of us, isn't it delightful to be a guest on someone else's show? It's so easy. You just sit there and talk. You don't have to manage the time. I was, I was poking around looking for episodes that Jess did and realized that I have made the joke in a title of the database calls are coming from inside the twice in episodes. So we had a show, we did an episode with, with Baron Schwartz back in 2019, and the episode is called The Database Calls Are Coming from Inside the DevOps. And recently back in October, there was an episode called The Database Calls Are Coming from Inside the House with Grant Fritchie. So, yeah, I have made jokes. Mine was sillier. Yours was better. Yours was better. But I think, you know, it's— there's one thing I realized. There's a tradition of the year-end wrap-up that didn't quite happen, and I'm going to blame Elon Musk for this one, which is because Twitter is fucked. Because I tweeted like, hey, we're doing our year-end wrap-up. Who has questions for us? And we always would do this, and we would get lots of questions. From Josh Zimmerman. They were usually about Babylon 5 directed at Joe and we didn't even get that. I should have asked on Mastodon maybe, I don't know.

**Trevor:** [01:09:09] On Babylon 5, I just have to say I have watched it and it is currently what my partner is watching in the other room.

**Matty:** Awesome. There we go, it all comes together.

**Joe:** Is there a new thing that we're still waiting to watch? We did a rewatch earlier this year And we kind of petered out once we got to season 5, as often, as often happens. And we have not yet made it around to watch the animated movie. It's sitting in my, it's sitting in my, in my Up Next on Apple TV, the Apple TV app. I still have it like sitting there waiting for me.

**Trevor:** I'm looking forward to rewatching it once we finish this watch through because there's a, there's a whole lot of lore that was not cemented in my brain. That I wasn't— they were like little things I wasn't catching that now I'm watching through it again, I'm like, nice.

**Bridget:** Yes, yes, very important TV show.

**Joe:** One would say the most— one of the most important TV shows you've never heard of. I think somebody gave that Ignite talk.

**Matty:** It was our last best hope for Beans. Yeah. So as we come to an end of this decade, end of decade wrap-up. What has everybody been up to? You know, a little bit like this, it's been, it's been a minute. It's been a couple of years since we've had a self-indulgent year-end wrap-up show. So we'll start with you, Trevor. You know, what's, what have you been, been up to? What are you currently up to? And what are you looking forward to in the next 10 years of Arrested DevOps or just life or DevOps? Because it's not dead.

**Trevor:** [01:10:44] Well, I'm looking forward to whatever the hell my next job is. I am unemployed right now, so that's fun. So I've been doing a little bit of playing games here and there, a little bit of learning some new things here and there, and painting, woodworking, and job hunting. Did you say painting? Yeah.

**Matty:** Like walls or art? Art, like miniature things.

**Trevor:** I mean, that's a fair question.

**Matty:** Yeah. What, what, what kind of a job are you, are you looking for, Trevor?

**Trevor:** And I'm looking to do something like in the solution architecture, customer architect space, or potentially going into DevRel. Although it seems like there's not a whole lot of that happening right now.

**Matty:** Well, if you want to be the first hire in some crypto bullshit company as a DevRel, there's lots of jobs, you know. So fair enough. Or actually now mostly they're AI ones, but yeah, there's a—

**Bridget:** yeah, so that's actually a lot better. But I like your solution architect idea because that sounds like something enterprises actually need.

**Matty:** [01:11:51] Yeah, let's say most of us— I shouldn't say most of us, I don't want to speak for other people, but at least for me, I'm trying to figure out what I do besides DevRel. So there's like you know, a connection to like other kinds of marketing or things like that, because I don't know that, you know, because it's, it's rough out there unless again you want to be the first hire and be an army of one at a, you know, which spoiler alert, you do not want that job. Um, so Jess, what have you been up to? What are you looking forward to, etc.?

**Jessica:** Uh, oh, me, me. Okay, so I am I'm in my second year now as the engineering manager of developer relations at Honeycomb. I love it so much. I love Honeycomb so much because it's like observability and it's important to like systems and DevOps and things. And the company is just so great and wonderful. And I love my job because I get to do DevRel things like coding for frustration's sake and then blogging about it. And I get to do managerial things, but there's only 2 people on the team, so not too many of them. And I get to do strategy things because I'm the head of the DevRel department, such as it is. But also, a lot of Honeycomb does DevRel things. Yeah, it's wonderful. And things I'm looking forward to, I am looking forward to having— we should have some Arrested DevOps about how you DevOps the LLM integrations. Right? I, I don't know if I wanna get totally into MLOps, although I guess we should talk about that. I am at this little conference about these things, and I went to a workshop on MLOps today, and Red Hat dude gave us a laundry list of letters and things that I have now heard of and have still have no understanding of. So that's interesting. But also, I'm like, I'm actually really excited about the LLMs. I think we're calling them generative AI now. Because they're really interesting and new. And I know I met another one today, so I know 3 people who have come out of like semi-retirement or thinking about retirement because this is so cool.

**Matty:** [01:14:01] There is, by the time that you're listening to this episode, I will have released an episode on AI and DevOps with Tiffany Jaika that recorded recently, but we can definitely do more. We definitely should do more. So maybe you'll like find some cool people at this conference and be like, come be on the show.

**Jessica:** Yes, I'm hoping so. Maybe tomorrow there'll be a talk about MLOps that, that I can recommend.

**Matty:** That would be amazing. All right, Bridget, what are you up to and what are you looking forward to?

**Bridget:** I'm gonna look at Joe and say, you know how, speaking of, you know how I used to be in DevRel and spend a bunch of time on planes and try to do podcast episodes from hotel rooms, etc., etc. Turns out I now work in product mostly from this exact room right here, usually on a Teams call instead of a Zoom meeting. But other than that, this is where I'm planted. Joe, on the other hand, has started getting on planes to go work far away places, which is hilarious to me.

**Joe:** [01:15:07] Yeah, our, our roles kind of, kind of switched in the last— well, not switched, I mean Now they just, instead of me going to, well, I still do go to hotels and conference centers around, around the Twin Cities and do my stuff. They have also started sending me other fabulous places like Cleveland and Nashville to do this, this kind of, this kind of nonsense.

**Bridget:** So much Nashville.

**Joe:** Yeah, I've been to Nashville like 3 times in the last year.

**Jessica:** Bridget, do you go with him?

**Bridget:** I did not because I had actual work. And also we have 2 cats who require constant love. And we would have to get a pet sitter if both of us went out of town, and it would just be a whole thing.

**Joe:** And it's not like— I mean, I go to Nashville or any of these other places, and I see the inside of a hotel ballroom for 3 days. Like, my last trip to Nashville was back in November. I checked into the hotel on Sunday, and I did not leave the hotel until Thursday when I was like getting in my Lyft to go back to the airport.

**Bridget:** [01:16:14] Like the building. You know, the building.

**Joe:** Yuck. Yeah, it's, it's— I see the, I see the inside of a, of a hotel ballroom, and that's basically it.

**Bridget:** So yeah, so basically things for us are fine, but most of our exciting activities involve things like going to the gym to work out with our personal trainer. It turns out if you pay someone money, they will make you lift up heavy things and then set them back down. It's terrible, but somebody's got to do it. And so we do that, and then occasionally escape rooms still, and occasionally, you know, yell at the football game.

**Joe:** Yeah, there was, there was, there was some yelling. There was some yelling at the TV last night. I will, I will admit that.

**Bridget:** And, and I'm really enjoying working at Microsoft, and I'm really enjoying being in product, and I have a really great team. And it's interesting that I spend a lot more time internalizing and listening to other people's stories about software right now instead of telling my stories about software, which is fine. It's a phase of life that sometimes we're telling more stories, sometimes we're listening to more stories. So, yeah, that's pretty much what's going on here.

**Matty:** [01:17:30] It's funny because I've been Summit about a year and a half now. I'm, you know, the Director of Developer Relations and Growth at Aiven. We're a data platform company. And I also, you know, I'm looking and I didn't make past gold on United this year. This is the first time in many, many years I'm not 1K. And, and I remember a colleague of mine years ago at Chef said, you know, when you travel for work, there's 2 milestones. There's when you achieve elite status, when you— and when you lose it. And they're both amazing. And I, I love that because on one hand I'm like, okay, so I barely made gold, but that means I was home a lot. Don't get me wrong, I'm gonna cry like a baby every time I have to be on an airplane next year and don't have any of my stuff. So that's okay. But also you talked about needing a pet sitter. So I have 2 dogs now, and you know what you can't expense? Dog care. It costs me over $100 a day out of my own pocket to travel at all, even if it's for work. And sometimes if the schedule is right, if my partner doesn't— my partner lives with me half the time, and when she has her kids, when she doesn't, you know, whatnot. And unfortunately, the last few work trips I've had to do have been at the wrong week, you know. So, but I was looking like we have a, a work, uh, offsite in April, and I was looking at when it was. I'm like, oh good, it's when Steph won't have her kids. So I don't know, that'll save me $500, you know, for having to go do that. But I— it's been interesting with leading the team. So I'm also doing less of the doing, um, probably still doing more than I should. But being— what's helped me, uh, be able to do this better, because we always say like, um, when you're going from being an IC to a, to a leader, to a manager, you know, the temptation is always to, you know, do the things right instead of lead the things. And This is not my first rodeo as management, but it's— I intentionally took about 10 years off. In fact, very shortly, last time I was a manager was like right before all this happened. And I said, come back. But because, Ivan, what we do is not my expertise, it's made me very good at leading the team, but not trying to do it. No one wants to see me go give a talk about Kafka. Nobody should want me to do that. So, but what I do know how to do is how to do the work of DevRel, how to do that. But I'm not the one who's going to necessarily do the talks, write the workshops, do all, do all of those things. But I, I should be learning a little bit more. And I actually did lead a Kafka workshop last week, and you can find that on YouTube, and maybe you will find it hilarious to watch Maddie try to teach Kafka. I think I did okay. But I've been enjoying, like, again, kind of being in a, in a role where I have, I have a great team. Most of my most of my team and most of my colleagues are in Europe, so I have really early mornings and my afternoons usually— and, you know, my day usually ends a little bit earlier. But it's really fun when you're in a mostly European company and you have colleagues in North America and you get really excited when you meet with them because their whole calendar is open all afternoon and it's really easy to find a time. And you're like, cool, I can have a meeting. But needless to say, yeah, my first call tomorrow is at 6:30 in the morning, which is Technically not early, but, but it's pretty exciting and I'm really enjoying it. It's a great, great company. The last thing I'll just say about it that I think is funny is, so the Ivan is, the headquarters is in Helsinki. Our founders are Finnish. It's kind of a big tech company in Finland and nobody else knows about us over here in the US, but we're working on it. Anyway, when I was at our company offsite last spring, I was talking to one of our people on the people, one of the people on our people team. And she was asking me, so, hey, Matt, have you ever worked for a European company before? And I was like, no, you know, this is my first time really. And she's like, well, what do you think? And I was talking about all the things I like about the company, and a bunch of my colleagues who were British or German or Italian that were standing around were going, no, you don't get it, Matty. That's not— those aren't things you like because it's European. They're things you like because it's a Nordic company, you know. And I will just say, I think it's— there's a really interesting, like, cognitive dissonance thing that happens when You have a massive appreciation for like some of the way the culture works where I'm like, that's amazing that in Finland, you guys just go and fuck off for 5 weeks out of the summer and just disappear. That's amazing for your work-life balance. Also, it is incredibly annoying, right? You know, I'm just like, because again, I had one of my coworkers, we were working on a thing and I was like, oh, cool, we're doing this thing. And I was like, all right, let's set up a call for next week. She's like, no, I'm going on holiday. I'll be back in 5 weeks. And I'm like, oh, okay. This is awesome.

**Bridget:** [01:22:12] But also, yeah, yeah, yeah. It's a very common thing when you're, when you're doing things in the open source world. And all of us US types are like, I will be answering this on the evenings and weekends. And the European types are like, I'll see you after August.

**Matty:** But like I said, it's not just— there's plenty of parts of Europe that are very much like the States when it comes to that kind of thing. Like your Brits, you know, the UK folks, they're just as bad as we are. And I will tell you this, this was the last little bit of this was when I was starting with the team, we were going through and I said, okay, let's set our kind of rules of engagement. And so we call it our social contract where we say these are the norms and expectations of our team. And one of the things, and I do this all the time with my teams, and I said, I think it's really important that if you're on holiday or you're off, you are off. And this is the thing we did it with my team in PagerDuty. We did it at Pulumi. And it was always said, they're basically saying like, If you're supposed to be off work and we see you in Slack, I'm going to bully you out of Slack. I'm going to say, get the fuck out of here. And so I'm explaining this and my team is like, I don't get it. What do you mean? What are you going to do? Like, you would be off. Why would you do it? Now, they're all liars, by the way, because every one of them is on Slack when they're off and everything like that. But it was— they did talk a good game, but they're still better than that. But yeah, it's a— Actually, yeah, one of my, one of my, uh, team members is on leave for the whole month of December, and even she was like, she's like, well, I'm gonna try to stay out of the Slack. And I'm like, if I see you anywhere but in like our little social channel, gonna yell at you, you know. That's fine, you can come in there and post some pictures and stuff, but you better not be doing any, any work.

**Bridget:** [01:23:53] So, um, I think we've been self-indulgent enough, but I think you've also hit upon something that's maybe something our audience can take away with them, which is Those of us who have been doing this for a bit, we've been doing it for a minute, and we've been talking about it for a minute, and we are willing to say, you know what, we can take a step back. We can let other people talk. We can, instead of giving the conference talk ourselves, we can help a colleague prep their conference talk. So many conference talk rehearsal sessions, and you know what, the colleagues did great. And it's like, you know what, I didn't speak at that KubeCon, and Like, you know, a dozen of my colleagues did, and they were really well prepared and they did great. And so maybe that's that, is if you're looking for something to refresh your energy about how you are carrying on with all the stuff that seems like, wow, we've been telling the same stories and yada, yada, yada. But you know what? We can always make room to inspire someone else or to teach someone else or to go to a conference that we're not even speaking at. And talking to someone else.

**Jessica:** [01:25:01] Or Jess, yeah, I attended this conference today.

**Matty:** Does not suck. These are really insightful, very insightful things that everybody has to hear. It's adorable that we think anyone's still listening to this episode at this point to have heard that. So, but if you are, Josh, Josh Zimmerman, who's the only one who's still listening, Take this to heart. Uh, hello, Josh. Yeah, thanks for listening. So yeah, that kind of brings us to the, to the end. All right, let's see.

**Joe:** Head on over to arresteddevops.com/10yearsofarresteddevops for this episode's show notes. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store if you want to help other people find the podcast. Although if you've just spent the last hour listening to this, I don't know why you would want to do that.

**Jessica:** I feel like it's 11 years by now. Yeah, probably.

**Matty:** It's, it's close.

**Joe:** We're also apparently on Spotify, iHeartRadio, probably on Stitcher or—

**Matty:** [01:26:05] I think Stitcher is gone. Is Stitcher gone?

**Joe:** I thought I— see, this, this like Packers-themed radio show that I, that I listen to is always mentioning Stitcher and I, and I don't know why.

**Matty:** I thought it would. Maybe not. Okay, there's one like Stitcher that recently that they were like, I got—

**Jessica:** are we talking about podcasting again?

**Matty:** It is, it is. Sorry. Yeah, Sirius. Oh, okay, SiriusXM acquired Stitcher in 2020 and then they're shutting it down. This was as of June.

**Joe:** Oh, so pour one out for Stitcher.

**Matty:** But we were on Stitcher and probably, and probably SiriusXM too by now.

**Joe:** Who knows?

**Bridget:** By the way, I know that we're wrapping, but I have to say something about this. Did you notice he casually mentioned a radio show? Radio show he listens to? Okay, what he actually means is 3 hours every weekday morning. 3 hours of Packers-themed radio. And if you think that that's a lot, you're right.

**Jessica:** Does he yell at it?

**Bridget:** [01:27:06] Oh yes. Joe is scratching his head and looking really embarrassed right now. And they discuss in detail what happened on the game, but since there's only so many things you can discuss about the games, they also discuss a vast panoply of other exciting topics. Does it include Babylon 5?

**Joe:** Never. They never bring up Babylon 5. It's mostly Wisconsin sports. Adjacent.

**Trevor:** And maybe Michael O'Hara, tell them what the name of the place is then.

**Bridget:** Oh, this is—

**Joe:** oh, this is— this is—

**Jessica:** it used to be— used to be called Green and Gold Today.

**Joe:** Well, a million years ago it was Green and Gold Today. These days it's Wildey and Tausch.

**Bridget:** So if you would like Packers-themed radio and lots of it and all Wisconsin sports, that's what you need.

**Joe:** ESPNMadison.com. Anyway, You want me to do that all over again?

**Matty:** No, no, you don't need to do it again. But if you— the way I always do is I've been doing— how many years I've been saying I know it's not called iTunes anymore, but I'm too lazy to change the 301 redirect that goes to that, and I stick by that.

**Joe:** [01:28:17] No, it's called Apple Music. What's Apple Podcasts? Apple Podcasts. Oh, they have— they, they split up.

**Matty:** It's separate.

**Joe:** Yeah, yeah, it's now a separate thing.

**Matty:** Yeah, it's actually probably been that way for like 6 years.

**Joe:** I stopped using Apple Podcasts like a million years ago. I, I moved to— I just— I moved to— yeah, I moved to Overcast.

**Matty:** But it's still in the store, the iTunes Store. That's the podcast directory. Anyway, the point is it's not called iTunes anymore, but I—

**Bridget:** for this podcast about podcasts— yes, we've now gone—

**Joe:** we've now gone down a, a giant rabbit hole. So, so go find us in whatever method is most convenient for you is what we're really trying to— there's a, there's a vast galaxy of ways you can get podcasts.

**Matty:** And we're probably on all of them. And we're probably there.

**Joe:** You can, you can probably find us if this has not convinced you to, to stop.

**Jessica:** [01:29:22] If this is your first— where we talk about DevOps.

**Matty:** If this is the first episode of Arrested DevOps you've ever listened to, I hope you're asleep by now. Yeah. I was going to say that is like, yeah, you are. That's like those people with their Twitter account when they have like a banger tweet that is very different than their regular stuff. And then they're like, everyone's going to be very disappointed when they start following me. Cause I think I tweet about tech and I really tweet about ducks, but anyway, and how to make them pay. Take us out, Joe. All right. So.

**Joe:** I'm Joe, @joelaha. I'm Bridget, @bridgetkromhout.

**Trevor:** I'm Trevor, @trevorghess.

**Jessica:** I'm Jessica, @jessitron.

**Matty:** And I'm Matt. The fact that this script still has us read our Twitter handles tells you how long ago it was the last time we did one of these and I copied it from, because I don't even know how many of us are even paying attention to our Twitters. But anyway, I'm @mattstratton. I'm there almost everywhere.

**Joe:** And I think we can all just We're all just mentally adding the, the .bluesky.social onto the end of these.

**Matty:** [01:30:27] I am, I am, I am matty.wtf on Bluesky, and that's about the only place you can find me these days anyway. All right.

**Trevor:** We're Arrested DevOps.

**Matty:** And remember, there's always DevOps in the banana pants or the banana stand. As promised, we now have the supercut of all, well, almost all of the cold opens of every Arrested DevOps episode that had a cold open. Sit down, buckle up, and get yourself a nice frosty Diet Coke. Here we go. That was automation 20 years ago, was a tape robot.

**Jessica:** That feels like the greatest day of my life.

**Matty:** It's called, let's just all go on Twitter and then call it a podcast. I mean, DevOps can be a swear word depending on who you talk to. The last release and the first release of the year are always, like, the 2 worst. I wasn't sure, but I was trying to channel my inner Matt in saying, like, well, you know, it's not just the Chef show.

**Bridget:** [01:31:35] Pink-haired thought leadership as a service is valuable enough for Pivotal to pay me to do it.

**Matty:** My goal for 2016 is to be more like Kelsey Hightower. But it drives me nuts when people talk about, oh, look at this new idea that we just came up with, and it's never been new. 4 years ago was a different time. 6 months ago was a different time. Hey, you're the guy from the podcast.

**Trevor:** I want to work with you because sometimes you sound smart, although usually you don't really say anything.

**Matty:** This sounds like Chicago politics to me. I feel right at home. I wonder what the influence of that water bucket-driven development would be. This episode is about marketing, and we've screwed up speaking for both of our sponsors, so clearly we know what we're talking about.

**Jessica:** I build Debian packages because I'm a sick fuck who really enjoys it. Exposure doesn't pay my goddamn rent.

**Matty:** YAML is readable by humans if your humans are going through a stroke.

**Bridget:** [01:32:38] Serverless is nonsense because there are still servers, you just can't SSH into them.

**Matty:** I hate to break it to people, there are always servers.

**Bridget:** I'm making the, the GitHub resume is bullshit face.

**Trevor:** I've been, I've been hearing a lot of, well, well, what are we gonna, what are we gonna do for DevOps 2.0? And I'm like, dear God, don't call it DevOps 2.0.

**Matty:** DevOps 2.0.

**Trevor:** My, my hope is that by saying it on here and the ridicule it will receive, it will never see the light of day.

**Matty:** But you know what?

**Jessica:** Teams deliver software, individuals don't. Teams perform, individuals don't. Because there's nothing worse than the individual rock star asshole.

**Matty:** Every infrastructure program will grow until it becomes a full-blown, half-assed version of Kubernetes.

**Bridget:** So, like, of course, people contribute to open source because they're excited and passionate about it, but people also like to sleep and see their families.

**Matty:** I definitely take most of my DevOps advice from '90s music. From '90s slow jams. Don't ever use a pie chart. You'll make— you'll kill baby Jesus or fairies or something. When I was at Orbitz, Graphite was developed there. I had nothing to do with it except for complaining about the UI. I did not know you could run out of inodes, and I was like, I will tell the world that you can run out of inodes.

**Bridget:** [01:33:52] There are several thrones in this building, which is fascinating. I've got to get a picture of myself sitting on one of them.

**Matty:** Something, something DevOps Illuminati.

**Bridget:** Oh my God, we're not going to start talking about the process of podcasting again. Moving on.

**Matty:** No, I'm just saying there's just not a lot of words on our pages, so there's not a lot of—

**Bridget:** like, if we really— me making the moving on gesture.

**Matty:** We're in this age of just kind of madness, really, quite frankly.

**Jessica:** Y'all who are listening or watching, you've been warned. If you ask me, I will start.

**Matty:** When you have more than two lawyers, everything becomes harder.

**Bridget:** We we need to yell a little bit less because I guess it's causing a problem in the next room.

**Jessica:** Who do you think you support systems for? Who the f do you think you're keeping email servers up for? Who do you think pays your bills? Don't worry, it's fine.

**Matty:** You're fired. Right, right.

**Bridget:** [01:34:54] This is a this is Canada. I probably shouldn't swear. Right? I have to be super polite. I'm sorry. Wait, I'm sorry. There, I can say it like that.

**Matty:** Because people lie. Computers don't lie.

**Bridget:** Hey, I think I need some microservices. What kind of advice would you give them? Don't.

**Matty:** Like, I don't like the black part in the middle of the banana, so I usually just eat around it until I get to the vein of the banana. It's like a vein of a shrimp. It's pretty gross. I just ruined bananas for everybody here.

**Trevor:** So, you know, sometimes you'll come to the temple and you'll be feeling really down and meditation will really help you. And then sometimes you'll come to the temple and you'll be feeling really great.

**Matty:** But don't worry, because that feeling will pass too. You sure, Nicole?

**Jessica:** Yes. Yes. It's a very seminal burn in America. We don't have turkeys in Argentina. New York does finance, San Francisco does tech, DC does war.

**Bridget:** And you pick up some things when you live there.

**Jessica:** [01:35:55] Guys is gender-neutral.

**Trevor:** Well, guess what?

**Jessica:** Ladies is gender-neutral now.

**Matty:** I just wanted to talk about Stranger Things, but you know, that's— When I'm thinking of last time I took, you know, a long vacation, yeah, you come back and you have 1,000 emails and you have to at least read them all. You can't just delete them. Sure you can.

**Bridget:** For the people who have those questions, it's not the microphone, it's my stubbornness.

**Joe:** Yes, the— that's the answer to most questions. Why is it that way? Because Bridget's stubborn. Anyway, moving on.

**Matty:** Writing a book is very similar to having a baby. When you have that first baby, you're like, oh, this is amazing, I will never do this again, this is amazing.

**Jessica:** English accent. There you go. Yeah, no, no, it's horrible.

**Joe:** It's really bad.

**Matty:** It doesn't sound English, it just sounds trashy.

**Trevor:** It will be obvious when it's too late.

**Jessica:** There's something so beautiful about leading with your curiosity.

**Matty:** [01:37:00] I can force myself to think about it from your side, and if you're trying to win an argument on the internet, then that's not super important. I would say that a lot of people I know and that I've met in a DevOps role prefer Chipotle as a fast food option. I think a lot of these proofs and things like that are also based on known failure modes, right? And it's the unknown unknowns in production are what get you every time. The only people that do theater are the people who can't do anything else. Because the usual suspects submit a lot and a lot and a lot of talks, and I'm looking at a couple.

**Joe:** Actually, you can cut that out. I'm just— shut up, shut up, you shut your face.

**Bridget:** Cat. I can't do this with the cat.

**Jessica:** I'm freaking happy to be here. Everything's fetching great.

**Matty:** [01:38:01] We're— everything's darn good. I'm pulling out all my Utah swears. Excellent.

**Jessica:** And I think that like younger engineers now, they just, they don't have this like trauma from like a world where like development and operations were like super, super separate. For fuck's sake, doc your shit.

**Matty:** Let's all advance together because it's gonna work out best that way. Not gonna say awesome. How about super awesome? How about super double awesome? It's very interesting, Steve. There we go.

**Trevor:** Tell me more.

**Matty:** So you're that guy from Office Space. I am exactly that guy from Office Space. Oh, just honest. I mean, this is a space that's moving so, so quickly. Yep. Jinx.

**Bridget:** Just the amount of smart and knowledgeable people that are at this conference, it's like it's nothing I've ever really seen.

**Jessica:** Just this amount of talented people.

**Matty:** This is all stuff that could be on the show. Yeah, okay.

**Trevor:** [01:39:04] I was waiting for you to, you know, finish taking over.

**Matty:** There's kind of a running joke on this show that we don't name-drop except when we do.

**Jessica:** I have opinions about DevOps.

**Trevor:** I am the 25th best shuffleboarder in Chicago.

**Bridget:** And I don't even know if it's pronounced Bonafide or Bonafide, and I don't don't care is I don't have to.

**Jessica:** I—

**Matty:** the worst part is I think I know what you're talking about.

**Jessica:** To be present with your data in all its persistence and mindful of your queries. But also, you know that once you get to that level, you're just one amongst the dipshits.

**Matty:** Like, I used to say that I had a lot of respect for MCSEs until I became one.

**Jessica:** Making positive change in the world with DevOps.

**Matty:** I don't care how smart you are. I don't care how experienced you are. The real world will destroy all your plans.

**Jessica:** [01:40:10] Table X, like, what does that do? And I'll be like, um, let me tell you a story.

**Matty:** This might've been at some point, like, where, like, in a movie, they would take the person out in the back and you'd hear a bang and that.

**Jessica:** Come on over, bring coffee, we will worship you.

**Matty:** Computers, you don't have to be nice to them, but actually being nice to them, you get better things out of them.

**Jessica:** I want to encourage people to really look at what their business does to generate revenue and whether or not the thing you're currently building is part of that core value add. And I can't believe I just used those words.

**Bridget:** You lose data, you grieve a little, and then you put your head down and create it again.

**Jessica:** Once upon a time, kids, making software was sad.

**Matty:** This has been Arrested DevOps on 92.9 KIL 2KILL. I don't think hardly anything that we call AI is AI, so I'm just going to say it's all machine learning. It's almost as if our competitor was scissors. Yes. Oh, weird. It turns out that that algorithm is completely racist, right? It's a powerful tool, but it's also kind of a footgun.

**Jessica:** [01:41:28] Attackers actually generally are unconcerned with whether or not you have your compliance boxes checked.

**Matty:** Oh, man, I'm deploying all over the world using Kubernetes, and look, I can deploy right in front of you right now. And then you're like, oh, man, maybe I need some Kubernetes.

**Jessica:** You have a unique perspective no matter what your perspective is, whether it's that you like Britney Spears and a lot of people don't.

**Joe:** And I don't want to go on and get off on a rant on Dennis Miller, but that dude used to be funny, and then he got— and then he got all conservative and right-wingy, and he's not funny anymore. That's right, I said it, Dennis. You're not funny anymore.

**Matty:** What's the best way of reducing risk? Doing nothing. Have we exceeded our team cognitive load for the system that we're working on? And if we have, uh, let's do something about it. In all due respect, I call bullshit.

**Jessica:** And this isn't some type of snake oil. This isn't a miracle that's going to fix your organization, because I'm never saying that I'm perfect.

**Matty:** [01:42:33] There's always DevOps in the banana pants. There is.

**Trevor:** An instance is broken. It's infected, it's got a memory problem, it's got something, you just nuke it.

**Matty:** It's moving the direction of the footgun so that it's not pointed at you. Do you pay money for me to be a cloud economist? They said, yes, we do. And I said, yeah, I am a cloud economist. I can use a lot of metaphors to describe Helm, but the short version is... I mean, we're adults, but we're all kids at heart. It's amazing what you can do with, like, 30 days and someone with 50,000 Twitter followers on your side. I mean, I can make stuff up. Trust me, I'm good at that. Yeah. SMI seems to me like the lingua franca of service meshes. Well, if faults are engaging, I am exceptionally engaging. Oh shit moments are just about my favorite. No, no, no. Gates break DevOps, period.

**Jessica:** [01:43:40] You can't do it. I think it's supposed to be bad manners to just be like, lol, your shit's broken.

**Matty:** And with the Yak and with DevOps Deep Thoughts, everything else, like, it was very much DevOps Days Chicago. If you don't have Black women that are rising through your ranks, You're fucking up.

**Bridget:** I will try to apocalypse less in the future.

**Matty:** Yes, man, I'll help you bury the body.

**Trevor:** I'm the 46th best shuffle player in the world.

**Jessica:** Well, I'm in Tennessee at the moment, and the liquor store has an estate Astonishing bourbon selection.

**Joe:** Well, I'm editing this, so I can guarantee 100% Kubernetes-free conversation.

**Matty:** What's interesting about that is almost nothing. They're like, oh, goddammit, fucking people. Why can't they make their shit work?

**Jessica:** [01:44:53] Sometimes Twitter is not good. I needed the so what on Kubernetes.

**Matty:** Well, as good as CNCF isn't quite everything on the planet, sometimes it feels like it.

**Jessica:** Oh, I think I work here now, but for free. I mean, maybe they saw it, but maybe they were like, ew, gross. We don't really know what you're talking about, but it sounds kind of cool.

**Matty:** I have read the Google SRE book so you don't have to.

**Bridget:** This all, I'm not going to lie, sounds very complicated.

**Jessica:** My brother was editing a podcast for me and he was like, would you like to put the explicit tag on? I was like, have you fucking met me? Get with the program, Tyler.

**Matty:** We weren't going to just be talking about Kubernetes.

**Trevor:** And yet we've said Kubernetes so many times.

**Matty:** It was just us saying it. We weren't actually shifting the word shift left.

**Jessica:** It really is about like getting your system to teach you what you need, not about dumping fucking metrics out your butt. I just love hyping people up, Maddie. I just love it.

**Matty:** [01:45:59] Have I told you you're doing great? Because you are. Because the hackers are making the same discovery with the same speed, right? Like, except they're highly motivated to, to use them as quickly as they can, and they don't have change control review boards to go through, so they can actually move faster. Far be it for me to say, like, I have all the answers. I mostly have questions.

**Jessica:** It's important to realize that at the end of the day, we're people working with other people to create products for other people.

**Joe:** And you know what, I always look at my code and think, you know, the tales that this code could tell if only it could tell what happened back when it was, you know, used or abused.

**Matty:** We've got a bunch of data that have allowed us to bust a few myths and open a few questions and people think more deeply about these things. See, this is where I just have to change my whole way I think about the world because I'm still stuck back in 1999. Everybody, that's my disclaimer of, you know, don't try to figure out if this is me or someone else because it will be so cleverly disguised. I feel like Zoomers embrace the sysadmin concept, which is we have to shorten everything that we do, right? If Charisma was an open source app or a product, It would be called Riz, riz.io. And that's how we did security in the '90s, yo. One of my quirks is I think everything's a DevOps problem.

**Jessica:** [01:47:24] But I feel like the more you do that and the more you reach out and help other people as well, the stronger your brand is, the stronger your reputation is, the more success you have. I think it makes you a better human being and a kinder human being as well.

**Matty:** It didn't matter how good you were at operations if the application didn't run. And it didn't matter what your application did if there was no infrastructure to run it on. So definitely GitHub is just, is just effed right now. Cool. Where's Open GitHub? It really is a result, I think, of infrastructure tools and software just becoming more like real software, which is great. They're, it's just better. The nice way of saying it is, you know, you and I have had storied careers, which is a nice way of saying we are getting old, you know, and we've seen some shit. Okay. So the original problem was I couldn't get my developer environments unified and therefore I ended up with Kubernetes. What the fuck? We won't say the Log4j word. It's like saying, you know, the word that Shakespearean actors, you know, should not say. Favor process over tools doesn't say thou shalt useth Jenkins on the 5th Sunday of every you know, December or something of that nature. It just simply says focus on your people and stop worrying about the stupid shit you use to get things done. What's your biggest weakness, Ben? I work too hard. I work so hard I can't turn my computer off at night.

**Joe:** [01:48:51] Yeah, here we go, take 2. Slower, more intense.
