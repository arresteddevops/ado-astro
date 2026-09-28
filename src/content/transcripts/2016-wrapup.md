**Bridget:** [00:00:00] Oh my God, we're not going to start talking about the process of podcasting again. Moving on.

**Matty:** No, I'm just saying there's just not a lot of words on our pages, so there's not a lot of— like, if we put—

**Bridget:** this is me making the moving on gesture.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and co-hosting with me is our Trevor Hess, Bridget Kramhaupt. So yeah, it's December of 2016, which means it's time for us to wrap up the year. This is a special host-only episode with Bridget, Trevor, and myself. You can check out the show notes for this episode, such as they are, at arresteddevops.com/2016-wrapup. And first, a word from our sponsors.

**Bridget:** Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. Tenth Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude. This episode is sponsored by VictorOps, the company that makes being on call suck less. Built by a team of avid DevOps practitioners, VictorOps is the most innovative platform available to support modern IT and DevOps incident management. They do it with an unmatched feature set that's designed to support teams through the entire incident lifecycle, from first alert to final retrospective. This means you can respond to incidents more effectively, which in turn helps you release faster, minimize downtime, and get your life back. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention Arrested DevOps and you'll be eligible for some great discounts too. This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** [00:02:27] As I mentioned before, this is our year-end wrap-up with no guests, just your fearless hosts. And to kind of get us started, here's a fun supercut of all the cold opens of this year's episodes.

**Trevor:** My goal for 2016 is to be more like Kelsey Hightower. Me too.

**Matty:** Good luck. It drives me nuts when people talk about, oh, look at this new idea that we just came up with, and it's never been new.

**Trevor:** 4 years ago was a different time. 6 months ago was a different time. Hey, you're the guy from the podcast. I want to work with you because sometimes you sound smart, although usually you don't really say anything.

**Matty:** This sounds like Chicago politics to me. I feel right at home. I wonder what the influence of that water bucket-driven development would be. This episode is about marketing, and we've screwed up speaking for both of our sponsors, so clearly we know what we're talking about.

**Bridget:** [00:03:32] I build Debian packages because I'm a sick fuck who really enjoys it. Exposure doesn't pay my goddamn rent.

**Matty:** YAML is readable by humans. If your humans are going through a stroke.

**Bridget:** This is gonna be one of those awkward silences Joe has to edit out. Serverless is nonsense because there are still servers. You just can't SSH into them.

**Matty:** I hate to break it to people, there are always servers.

**Bridget:** I'm making the GitHub resume is bullshit face.

**Trevor:** I've been hearing a lot of, well, what are we gonna do for DevOps 2.0? And I'm like, dear God, don't call it DevOps 2.0.

**Matty:** DevOps 2.0.

**Trevor:** My hope is that by saying it on here and the ridicule it will receive, it will never see the light of day.

**Matty:** But you know what?

**Bridget:** Teams deliver software, individuals don't. Teams perform, individuals don't. Because there's nothing worse than the individual rockstar asshole.

**Matty:** [00:04:33] Every infrastructure program will grow until it becomes a full-blown half-assed version of Kubernetes.

**Bridget:** So like, of course people contribute to open source because they're excited and passionate about it, but people also like to sleep and see their families.

**Matty:** I definitely take most of my DevOps advice from '90s music. Yeah, absolutely. From '90s slow jams. We're a couple of apathetic Xers, right?

**Trevor:** I mean, like, we're just like—

**Matty:** community sense is something that you make fun of on The Simpsons as far as we're concerned, right?

**Trevor:** I wanted to say heroes, but I didn't want to introduce like a hero complex to Nathan or protein beyond what they already have.

**Matty:** Yeah, and besides, if you're up on your myth, heroes always get brutally punished.

**Trevor:** Don't ever use a pie chart. You'll make—

**Matty:** you'll kill baby Jesus or fairies or something. When I was at Orbitz, Graphite was developed there.

**Trevor:** I had nothing to do with it except for complaining about the UI.

**Matty:** As a great conductor, I don't know how to play every instrument, but I know how they should sound and how they should sound together. I did not know you could run out of iNodes, and I was like, I will tell the world that you can run out of iNodes.

**Bridget:** [00:05:39] There are several thrones in this building, which is fascinating. I've got to get a picture of myself sitting on one of them.

**Matty:** Something DevOps Illuminati. That was super cool. Did you guys enjoy that?

**Trevor:** Absolutely. That was incredible. That was super touching and well, well thought out.

**Matty:** That was probably the finest bit of audio editing I've ever heard in my life.

**Bridget:** Memories, both misty and watercolored.

**Trevor:** Yes.

**Matty:** Those of you who are listening to the produced episode, that supercut doesn't exist yet, so we'll see what it is. It might be—

**Bridget:** we're assuming Stratton doesn't make it something really terrible.

**Matty:** Yeah. I mean, at least this is— I will say I feel like I did better than I did in our first year-end wrap-up. Where at this point I told myself, I said, I'm just going to take the cold opens and that's what it's going to be because that's not going to require a lot of thinking. What I tried to do, and if you go back and listen to that first year in review show, didn't we not have cold opens then? Well, first of all, we didn't have cold opens. We'll talk about that in a minute. But I tried to put together like a highlight reel of the year, and that was really hard because it meant I had to listen to like every single episode for the year. To find little nuggets of cleverness. And I'm like, this way at least I know it's like the first 5 seconds of every episode, so I could just snip them off and throw them in there. Because now that we do cold opens, the highlight of the episode is right there at the beginning. So here's your pro tip: you only have to listen to the first 5 seconds of our show. That's everything. The rest of it is all bullshit.

**Bridget:** [00:07:33] It's your moment of zen, only at the beginning.

**Matty:** Yeah, for efficiency's sake.

**Trevor:** Yeah, so some more show backstory because I'm assuming that we're going to keep this in now because it's funny. How many times now have we tried to use something other than Hangouts?

**Matty:** Tried?

**Bridget:** Sometimes?

**Matty:** At least half a dozen.

**Trevor:** Every time we actually go to do it, something goes catastrophically wrong.

**Matty:** Today was— Incorrect. I have recorded a couple episodes where—

**Trevor:** Not incorrect. Episodes that are one-on-one or maybe like—

**Bridget:** So Trevor, Trevor just pointed out we, when we as a unit try to do this.

**Trevor:** Thank you, Bridget.

**Matty:** Yes.

**Bridget:** Yeah.

**Matty:** So we—

**Trevor:** Matt's got this on lock. It's Bridget and I that can't handle it.

**Bridget:** Okay. So like everyone probably has figured out, Matt's good at podcasting. We're color commentary. It's fine. It's probably fine.

**Matty:** But, but as Trevor said, yeah, every time. So the thing is, and this happens quite a bit, And we get feedback from listeners who are like, you know, the one thing that would make your show way more awesome is if you had better audio quality. And we're like, yes, we know Hangouts suck for audio quality. Everybody knows this. But the problem is we've tried to move off of Hangouts many, many, many times. And there have been various and sundry reasons to not— sometimes we're like, well, why don't we use Skype? And it's like, well, sometimes people are allergic to Skype or they might not have a Skype account. Hangouts.

**Bridget:** [00:09:07] I'm not allergic to Skype.

**Matty:** Oh, I'm not even talking about you anymore. I've recorded on Skype.

**Bridget:** Oh, you mean guests.

**Matty:** Yeah, like, that's right.

**Bridget:** That's the thing.

**Trevor:** I was a super bad Skype for like 6 months. Yeah, I did give up, but right.

**Matty:** But Hangouts is fairly ubiquitous. I cannot think of a single instance where we've had a guest where we said we do a Google Hangout and they went, I don't have a Google account, I can't do that, or that won't work for me.

**Bridget:** So what you're saying is it's the shittiest, lower, lowest common denominator.

**Matty:** It is literally the shittiest, lowest common denominator. So, uh, then a while back, and this going on maybe 2 years ago, and, and Trevor, maybe you'll remember how we got clued into this, but through some random happenstance, somebody was talking to Trevor at a meetup or something, or, or maybe to me, I don't know, and was like, oh, it was—

**Trevor:** I think it was a tweet at both of us that— no, no, you know what, it was in DevOps Library, I think, or Hangouts.

**Matty:** No, where somebody mentioned to us I think you're— yeah, no, because it's okay.

**Trevor:** [00:10:07] Maybe we're thinking of different moments in time.

**Matty:** The whole point was someone we knew, like, had a buddy who was doing this new thing that was being shadow launched to do with podcasting, and they're like, oh, this is the original one. This is TriCast, right? And so I was like, oh, well, we'll totally try that out. And we played with it a little bit, and we did like, uh, this is— this is also usually how this goes. Trevor and I go like, hey, you got a few minutes right now? Cool. Let's jump on and let's try this thing. That totally worked. Awesome. So a week from now when we do a podcast with 5 guests, it goes to shit because it doesn't scale, blah, blah, blah, blah, blah. So yeah, so we kind of played with that. We've had problems with that. Then there's this Zencastr thing that Scott Hanselman says is super awesome. And I'm like, well, his blog is, you know, I mean, people know him. He's a person, right?

**Bridget:** And he's great at podcasting. I mean, clearly he's using that software in a way that's more successful for him.

**Matty:** Right. And so we thought we had solved for— and there's all sorts of things we run into with this. And without getting like too much into it, it's like stuff like, well, we still want to be able to have video because like Bridget says, podcasting without video as a participant feels way too much like talking on the phone.

**Bridget:** [00:11:18] And talking on the phone is bad. I worked at ISPs in the '90s. I assume like everyone who has ever been in that situation has like an allergic reaction to talking on the phone.

**Matty:** I just generally don't want to talk on the phone, but I'll WebEx with you all day long. Like, if I can see you and we can do mouth words, that's fine, but otherwise no.

**Trevor:** Right. But I was totally right. You think you're conflating 2 times because you're— you're— because TriCast is actually the second one we use. I don't remember what it was called, but there was another one that we used before TriCast and they got bought by someone.

**Matty:** They got— and they wound up turning into like some like video blog thing that went away. Yeah. Yeah.

**Bridget:** Okay, so for people who don't actually plan on launching their own podcast, I think the takeaway here is software is terrible. Sorry, not sorry.

**Matty:** Yeah, it's, it's, it's super duper hard.

**Trevor:** Uh, it's okay, we can blame the developer again.

**Matty:** Yeah, which I feel awful about because like they're super— everybody that we've worked with, although I'll be— and I'm, I'm sure I just meant that we always blame me, the developer. Oh, that's right.

**Bridget:** [00:12:23] Oh, actually See, I'm sitting here thinking, actually, with a lot of the software, I think it's been demonstrably true that it's often scaling problems. So it might not be the developer's fault at all.

**Matty:** We also— I have to say, and this is something that doesn't surprise me at all, is we podcast differently than most shows. Maybe not necessarily within what we would consider the sphere of what we know, but if you look at podcasting as a business And I, again, like of the 3 of us, I'm the one who spends most of his time or the majority of the time like trying to understand podcasting as a thing. And tech podcasting is actually a very small subset of podcasting. And like ops and DevOps type tech podcasting is a tiny little slice of the podcasting universe. So now, of course, all the podcasts I listen to, if they're not about podcasting, are of the tech and ops and dev variety.

**Bridget:** So I have a very Wait, did you just tell us you listen to podcasts about podcasting?

**Matty:** [00:13:26] Absolutely.

**Bridget:** Several. That is so meta.

**Matty:** Actually, the amusing thing is it's one of the more popular— so if you really want to feel sad, the majority of podcasts out there are about entrepreneurship because people think it's a way they can make a lot of money and it's because this dude named John Lee Dumas created an entrepreneur podcast called Entrepreneur on Fire and he makes $100,000 a month. So everyone is like, oh, well, that must be because you just magically make money if you have a podcast about being an entrepreneur. That's sort of like saying like, well, clearly all I have to do is invent a social network and I will have billions of dollars because it must be that easy, right?

**Bridget:** And billions of users.

**Matty:** Right. It's really that simple. So what I'm getting at is what I've seen when I talk to fellow podcasters within these, these communities in which I'm active and where I talk is there are a lot of podcasts that have one host doing a podcast all by themselves. That's one thing. And even more often is if there's multiple people on a show, they're hosts that work together. And even if they're— and a lot of times they're in a room together. Like there's a very popular podcast called Gilmore Guys. Which is these guys who watch Gilmore Girls for the first time together and blah, blah, blah and all this stuff. And they sit in a studio and record, right? That's like what Chris Hardwick, The Nerdist, that's how those guys work. Those folks work, right? We don't do that. And then even when I talk to people and I try to solve for this, well, we're remote. They're like, oh, well, your host can record this QuickTime file and you can record this one and you send them to each other. And I'm like, yeah, well, we like try to catch, you know, Schaefer when he's like in an airport lounge and has 10 minutes. And he has, you know, that's how our guests roll. So we, and, and we make our life even more complicated by having more than one guest.

**Bridget:** [00:15:23] So it's fun when they talk to each other.

**Matty:** It's awesome. But like having, this is, uh, the, the type of show that we do, a panel-based show with very often very few repeat panelists, if you will. And I'm including us as panelists is like 0.00001% of podcasts out there. So it totally makes sense that the podcast existing software is not built with us in mind because we're not a problem that most people have to solve for. Most people want to solve for— like, this— the soft— the users of this software that we're having problems with are usually guest and host, right? Yeah, that's it. 2 people. Cool, awesome, works great. And we've never had problems with that particular scenario. So what I'm kind of getting at is I understand these problems are challenging. I also know that the Zencastr folks are like, ah, you could totally scale to 10 people, it'll be no problem. And then we couldn't even get it without me sounding like I was on helium.

**Bridget:** So it was—

**Matty:** then cast her.

**Bridget:** Did you record any of that?

**Matty:** No.

**Bridget:** I just kind of wonder if it would have sounded like that on the recording.

**Trevor:** Yeah.

**Bridget:** [00:16:24] Stratton sounded hilarious. He sounded like he, you know, huffed on a helium balloon and then was like, yeah.

**Matty:** So, so that's, that's probably a little more behind the music than everybody needs to know. So one of the things, and this, this is relevant, that we— I feel like this year we did and we didn't do I don't think we ever did it before this year was sort of these cross-podcast episodes. Like, we did episodes with people from other shows, but this year we had several episodes that we recorded and were specifically released the same on other platforms, platforms being the Goat Farm or Software Defined Talk or anything. I think like we intended to do that once before with like Food Fight show or Ship Show, but they never, you know, whatever, it never really happened. So that is taking me somewhere though. So, but that's why it was my tie-up to this year is that was something new about 2016 was releasing shows with fellow podcasters in multiple channels. But one of the things I wanted to do, I came, I floated this idea to Ship Show, DevOps Cafe, Food Fight, SDN, I'm sorry, SDT. Um, and I said, you know what? I said, it might be kind of cool to do a little roundtable episode where we just sit and talk about the nerdery of our shows. Like, hey, Jon and Damon— 'cause everybody does their shows a little different. Kind of like basically making a podcast out of this very early Google Hangout that Trevor and I had with J. Paul Reed and Nathan Harvey. And without exception, every other person from every other show that bothered to reply to me said nobody would give a shit about that. And I was like, are you kidding? I would love to hear that. That.

**Bridget:** [00:18:10] You might be an audience of one.

**Matty:** Tell you what, be an audience of one.

**Bridget:** Now that we've spent 20 minutes talking about podcasting, we've now lost everyone who doesn't give a shit. So look at the stats from this one versus every other one and you'll have your answer.

**Matty:** There we go. That's a good point. That's a good point. Um, I do want to tell you one thing, uh, speak— I want to say one thing speaking about single, uh, so one-on-one episodes. Are super easy to edit. Like when I look, I was, I was sort of taking a look back at episodes of, of this year. And again, it was kind of funny. Like, first of all, like Trevor, like you mentioned Trevor, you look at it and you're like, oh, I don't remember that episode because I wasn't involved with it. But there's episodes I was involved in that I kind of have forgotten we did. But I think about like, for example, the episode we did that I did with Uh, with Jo van der Woerd of GitLab. And that one was like basically straight— and that was, that was done with TriCast. And that was basically a straight download from TriCast, and I slapped the theme song on it and it was done. I mean, I looked through— I mean, I listened through it, but I could have done that. There was very little that had to be done. And that's, I guess, something to be said for when you only got 2 people talking. Yeah, you know, you don't, you don't have a lot of, oh wait, no, no, you go. Oh no, no, I'm sorry, I'm sorry, you go. Which, because we have a lot of very polite people on our show, I've noticed.

**Trevor:** [00:19:38] Yeah, that was one of the few episodes this year too that, uh, I was— I missed because of network connections.

**Matty:** One of the few.

**Trevor:** Yeah, I also missed the Windows episode because I couldn't— nobody could— no audio of mine would transmit, remember?

**Matty:** Oh yeah, yeah, that's one of the— also one of the rules is that if, if Trevor's going to have any audio drop out at all during a show, it's going to be when he's saying the name of a sponsor, which is why I think it's good that we've just moved to pre-recorded sponsor pre-rolls. So, and I'm sure the sponsors appreciate it because people can actually hear that they're creative now instead of it being coming from a Decepticon.

**Trevor:** I'm a good Decepticon though.

**Matty:** That, that's an oxymoron.

**Trevor:** I know. Uh, Bridget, are you intending to be talking?

**Matty:** You're muted, Bridge.

**Bridget:** See, I was coughing and then, um, if we're gonna ignore our agenda like that, it's actually entertaining to me, but we know that's—

**Matty:** [00:20:42] I've been trying to get right into that.

**Bridget:** That was a segue. There is an agenda. Yeah, he's threatened. So take us up.

**Matty:** I want to talk about some of our favorite episodes. And that was where I was trying to— I was trying to get us back into there. So anyway, so let's talk about that. So what were some of your favorite episodes? So Bridget? Yeah.

**Bridget:** Like, well, so we started out the year. I had like right after, you know, January, like as soon as 2016 kicked off, I had Kelsey Hightower and Andrew Clay Shafer on to talk about platforms. And I feel like You're kind of like, oh, crap, we started our year there. Where are we going to go? I feel like we managed to live up to that. We managed to keep having really awesome guests talk about interesting stuff. But I love that first episode of 2016. How about you, Trevor? What stood out for you?

**Trevor:** I think my favorite this year— so, I did— 2 of the ones I remember the most were at conferences. I did one at DevOps Days Dallas, which was a lot of fun. That was the one where we got to work with Software Defined Talk and with Fruit Fight, all as one kind of major super DevOps Days super episode. I also got to do one in Singapore, which hopefully will be out before this one, but that would require me to be better about things. That was super interesting because I got to hear a totally different perspective about the approach to DevOps. One of the things you'll hear when you get a chance to listen to that episode episode is it's almost like the folks in Singapore are getting all the concepts that we're talking about now, but they didn't have to go through all the pain that we had to, to figure it out, which is super interesting because like it's like 5 years ago there, but now they're just pulling all this stuff over and it's awesome.

**Bridget:** [00:22:39] This is like you don't have to run a whole bunch of landlines, you just go right to cellular service.

**Matty:** Yeah, cool.

**Trevor:** Matt, what about you? Anything else?

**Matty:** There were a couple episodes that, that stood out, and I, I'm putting them kind of in, uh, memorable, uh, slash kind of fun story maybe. Uh, one, one episode was, uh, we did, did an episode about building your personal brand with, uh, and our guests were Michael Hedgepeth from NCR and then Andrea Javor, uh, from Beam Suntory, who, you know, also now happens to be my wife. And that episode was notable for several reasons, not the least of it being that it took Trevor 15 times to figure out how to Andrea's last name.

**Bridget:** Wait, why did you have him introducing her?

**Matty:** I don't know. It's just because it seemed like it would be weird. Like, because it was, you know, it's like when you overcompensate and you want to be like, well, even though I'm sitting next to her and we're recording this. But the thing about that episode that I loved is I found we got great reaction to it. And as someone who has friends, family, you know, people who are outside of our normal space for the show, A lot of people think it's cool and all that we do a podcast, but they're like, they never listen to the show. Because if you're totally outside, not even outside of tech, but just sort of outside of a very specific kind of slice of the world, our show is not terribly interesting, or at least it doesn't seem like it might be. Um, this episode was really broad in appeal, I found, and I've, I found it was something that was really great for friends and family or people I know who wanted to kind of have an entry into our show to be able to learn that. I learned a lot of stuff from it as well. And I also— it was the beauty of being the person that edits the show is after we completed it, Andrea said, she's like, you kind of were a jerk to me during the recording of that. And I was like, what? And she explained what happened and I was like, oh my God, you are totally right. I am so sorry. And she's like, yeah, this was— that was really an unpleasant experience, you know, because blah, blah, blah. And I'm like, well, the good news is I can fix this, right? Like, I can take out the parts where I was an asshole, right? So other people don't have to live that, right? Not so much to, like, hide that I was a jerk. Like, I apologized and everything, but more to be like, you're right, that was not a good narrative because of that. So that's— and now everybody's going to go back and listen to that episode and try to figure out the parts where— where was Stratton being a jerk?

**Bridget:** [00:25:18] And then the moral of this story is you stopped being a jerk just in time to stop doing all the editing.

**Matty:** That's correct, right? Yeah, then I didn't have to edit it. I didn't have to correct my own mistakes anymore. So it's okay. So that's also maybe a flag for Joe to know where if he's like, you ever seen an episode where I'm like, nope, man, I got this one. No problem.

**Trevor:** I'll do it.

**Matty:** Probably means I said something I want to take care of. There was another one. I was just looking at the episode list and I totally forgot about this story. And so their episode on who owns your availability. So that was right after the left pad thing, right? And I remember Bridget said to me, she's like, we need to do an episode about this, but we need to do it like in about 8 hours or we just don't need to do it. And it was okay, Charity. And I think the exact message you sent to her was, you want to come on the show and rant about shit? And she's like, okay. And we're like, Cheslock, jump on because why not? And we're like, and went to, you know, Seth went to Cheese Plus and he's like, yeah, that's cool, but I'm gonna be in an airplane on my way to Japan. We're like, well, too bad. He's like, could we do it, you know, like next week? We're like, nope, doing it now.

**Bridget:** [00:26:25] It's a left pad, dude.

**Matty:** You gotta hit it now. And it was such a good episode.

**Trevor:** Yeah.

**Matty:** And then finally, the one that I really thought was, and I'm gonna think of like 5 more that I really loved, but the career ops episode with Jill Javinski and Peter Burkholder. And the thing that I really like about that episode besides the content, besides where it was a great one for me to just sit back and listen to 2 really smart people talk to each other and talk to the rest of us listeners, was that it totally came from Peter. Like, as an idea, he reached out to me based upon a personal experience and said, hey, I've been learning about a bunch of this stuff about this idea of doing DR for your career. And I think that would be a really great episode of ADO. We should talk about it. I'm like, no, you should come on and do that show. And we did. And so lesson also for listeners, we'd love to have you on the show. Please come to us with a topic and we'll have you talk, right? Like we get this a lot too, is the, hey, I wanna be on ADO. Cool, what do you wanna talk about? I don't know. Like, all right, well come back to me when you have something to talk about, 'cause we have a long list of people and a short list of topics. Similarly, I'm going to think of one more episode and then we'll move on to kind of some other things. The operationalizing open source, that was an interesting experiment episode. That was, again, going back to Michael Hedgepeth. We had Michael hosted that episode and it was, again, he came to me with this proposal. And if you know Michael, it doesn't surprise you that his proposal was 10 paragraphs long for what he thought we should do. And he's basically that could have been summarized as in, so we should do this episode with Doug Iredon and I'll host it instead and you guys will be guests. And then it was written up as this big long proposal. I'm like, cool, rad, let's do that. You know, do you have an idea? Let's do it. And it was a— it was kind of a fun experiment. And it's also really fun to be a panelist on your own podcast. So those were a couple of the things, a couple, couple episodes that I thought were memorable or different.

**Bridget:** [00:28:31] Honestly, I just kind of felt like we had amazing guests all year. And I know that sounds ridiculous and possibly self-congratulatory. After all, we do pick them. But, you know, I feel like it's possible to pick somebody because you think it'll be great. And then afterwards you're like, I mean, I'm— that doesn't really happen to us so much, but I'm imagining that is a thing that can happen. And I feel like we're really fortunate with our guests have a lot of exciting things to say.

**Matty:** So we We, we do. I, I'll tell you, um, we couldn't do the show without the guests, as this episode is teaching you right now.

**Bridget:** We spent 20 minutes talking about podcast software and how terrible it is.

**Matty:** I figure this is my thing. We put in a shitload of work for this show for you people all year long. We release at least 24 episodes a year that are for you. We are allowed one episode a year to be self-indulgent, and you just need to listen to it. In fact, you don't even need to listen to it. You just need to not complain that you don't get an episode of ADO that you want for that half of the month.

**Trevor:** [00:29:34] And nobody was going to say anything until you said that.

**Bridget:** I know, it's probably—

**Matty:** I mean, why do you think— why do you think I said it? Oh, I know, engagement.

**Bridget:** I mean, let's be real, Stratton will actually read your email, and he'll actually read your stuff on Twitter. I will. I'll leave it at that. Stratton will read it.

**Matty:** That's that's true.

**Trevor:** I'll read it. Matt will read and respond.

**Matty:** Oh ho ho! I never said that.

**Bridget:** I have well-written Gmail filters. How's that?

**Matty:** Yes. So there you go. But we welcome your input. We really do. And and for many of you who have emailed me, and we've even had conversations over this year. And earlier about episode ideas, things you want to be on the show. We may have gotten into the short strokes on having you on the show and then maybe you never heard from me again. I apologize. If that's you, email me again and we'll figure it out in 2017.

**Trevor:** How is it—

**Bridget:** by the way, how is it going to be 2017? I know that sounds ludicrous, but 2017? That's like beyond what futuristic movies thought the years would be eventually.

**Matty:** [00:30:40] Well, right. Yeah. What's the line in Singles that Bridget Fonda has where she's talking about being 24 being old or whatever? Or whatever she's like, I thought that we'd be living— we'd be having flying cars and I'd be married with 7 kids or whatever and blah, blah, blah. Speaking of numbers like 7 kids, not that any of us have 7 kids, but let's talk about some numbers because self-indulgent. Um, these numbers mean nothing because first of all, there's lies, damn lies, and podcast statistics. Uh, but just for some interesting stuff, uh, when I kind of looked, I crunched some numbers. In 2016, there were 16,000, uh, unique visitors to the arresteddevops.com website, which, I mean, it's, it's kind of funny. I always feel interested when I, when I throw this number around because I know the people who listen to our show like run websites at scale where they're like, that's awesome, I had 16,000 visitors in the amount of time it took you to say that. But I'm like, 16,000 people came to our website, that's pretty cool, right?

**Bridget:** [00:31:46] Were they just looking for DevOps?

**Matty:** Well, so that's the thing, right?

**Bridget:** Like, wait, do we have search terms?

**Matty:** We do, we do actually. A DevOps podcast, I think, is one of the popular ways we come in. And I wish that I had thought to pull this, and I'll probably pull it in a minute and we can talk about that because we do get some fun search terms. Not fun enough that it's like super awesome. Like I've had on my personal blog like, you know, are unicorns real? How to make friends on the internet? It's all because of blog posts I write that people get there. But sometimes you look at these queries, you're like, somebody wanted that search. Like somebody went into Google and searched for are unicorns real?

**Bridget:** Like Google would tell them Um, I feel like that's one of the things Google should just put up at the top, like they do flight results.

**Matty:** Like, no, just no, they're not. They probably do. I should do the search and find out. Yeah, yeah, they do the math, right? It's like, just no, sorry, no. Or actually, they should just say yes. If you Google, are unicorns real, Google should just display the words yes at the top. Um, but speaking of which, uh, almost half of the traffic to the website does come from search. So that's kind of interesting, right? Related to how normal that is, I actually think that's a kind of low number because I think most websites get a lot of their traffic from search. We don't get as much from that. We get a fair amount of social. Twitter accounts for 6% of all of our traffic, which is a fair amount as far as referrals go. Referring stuff. Quite a bit comes from direct, which means either people are who are blocking shit. And I feel like knowing our audience, they're all blocked. There's probably a lot more of that than usual, right? Then, because if you're using Ghostery or something like that, we don't know where you came from. You look to analytics like a direct, right?

**Bridget:** [00:33:38] So yeah, I would have a hard time believing half of our traffic comes, or almost half comes from people who just type arresteddevops.com. They're just blocking stuff.

**Matty:** Well, direct is not half. I think direct was like about 25%, um, which I, I would take that as being pretty good. You know, our marketing is pretty good. Those shirts that nobody's buying that say arresteddevops.com on the back, um, we'll talk about that in a minute. Uh, one thing that I thought was interesting too is, so we use a static site generator called Hugo that, if you know me, you know I'm obsessed with, and I try to figure out how to make it be my hammer to every nail I can find. But, uh, is it your Goliath hammer? It is my Goliath hammer. Um, the— we actually get 1% of all of our traffic came from gohugo.io, just actually came from being listed on their gallery of sites. And because Hugo is incredibly popular as a static site generator, so And in fact, funny small story, and then I'll get into some more numbers. In a very random turnabout way, Bridget discovered that another podcast was using our Hugo code, which is totally fine. It's open source. And the only reason she found out about it was, you know, having— I got to Google her name, right? And it was on this other podcast.

**Bridget:** [00:35:00] I'm not— I'm not a crazy egomaniac or— sorry, that was ableist. I'm not a deranged egomaniac. But like, it's just a good idea to have a Google alert on your name. Just putting that out there.

**Matty:** And the thing that was interesting was because so there was some hard-coded code that had Bridget's name in it. There also had my name in it too, but I didn't— and Trevor's for that matter. And the whole thing was that I never wrote this Hugo theme to really be used by other people, you know, very much. And so we kind of did then reach out to the folks from this other show. Um, and help them, you know, clean up the code to make it a little bit better. And I apologize. I'm like, hey, there's nothing wrong with you using it. It's open source, but you're gonna have a bad day because it's shitty code for anybody other than us. Uh, and then I turned around and wrote a Hugo theme for podcasters that I haven't quite finished yet and maybe nobody will use, but whatever. Uh, but yeah. Um, so in 2016, from an audio perspective, We had 232,200 unique listens to episodes, which I'm sorry, again, maybe if you're Marc Maron or Chris Hardwick or whatever, you're like, whatever. But I'm like, holy fuck, that's a lot. That's up from about 2,004 listens in 2015. So, you know, I think we've hit a stride about like downloads, and I haven't really figured out how—

**Trevor:** [00:36:27] I think you said that wrong, Matt. What? 204,000, not 2004.

**Matty:** Oh, sorry.

**Bridget:** And I didn't even—

**Matty:** I didn't even— that would be a massive increase as opposed to the minor fall that I said it was. Yeah, so we had a—

**Bridget:** sorry, do we have the like listens per episode average? I just kind of feel like we're comparing numbers without knowing if we had a different number of episodes.

**Matty:** We, we could do that if I—

**Bridget:** I mean, it's, it's not like we don't need to be super precise, but did we have approximately the same number of episodes?

**Matty:** We had approximately the same number of episodes.

**Bridget:** Cool. So this makes sense. It's not like completely ridiculous numbers, right?

**Matty:** And, and, and once I saw that the numbers were relatively the same, but because to me that difference of 25,000 or whatever, I know this sounds silly, but it's not very much. That's a margin of error to me that like it says that Our audio popularity didn't necessarily go up very much this year, but I'm okay with it because it's still 232 fucking thousand people listen to listens of our episodes. So our most listened to episode in 2016 was our application configuration episode with Adam Jacob and Tim Gross. So I was talking about I love that episode Habitat.

**Trevor:** [00:37:39] Yeah.

**Bridget:** Speaking of episodes that we recorded airports, ugh, I was at an airport. I was at a Delta lounge in Florida. Which is not a place you ever want to be. I mean, Delta lounges are okay. Florida— sorry, Florida.

**Matty:** Not ideal for audio recording.

**Bridget:** No, I ended up tethered to my T-Mobile phone. I have 2 phones for reasons.

**Matty:** The, the good thing though was on an episode like that, as a host, you basically go into read-only mode anyway and are just like, okay, Adam and Tim, you guys just talk.

**Bridget:** Well, because— and for people who haven't listened to that episode, which you should because it's fantastic, Adam Jacobs talking about Habitat, and Tim Gross is talking about Container Pilot. And it was like, they're, you know, kind of separate brainwaves that were, like, hitting similar areas that are really interesting. And of course, container orchestration is a really important topic these days that everyone wants to talk about, and, like, exactly how you get your application configuration to work in a containerized world and stuff like that. So, super exciting stuff. You should definitely go check out that episode. At the very least, least, even if you're like, I just don't have time to listen to an episode during my exciting holiday vacation, at the very least, look at the show notes and take a look at Habitat and Container Pilot.

**Matty:** [00:38:48] And you can hear Adam's story about, like, I'm pretty sure he tells the story about coming up with the idea for Habitat with his glass of rum and cigar standing out in Mexico. And so, that is what makes everybody wanna be a software developer because they think that's what it's like.

**Trevor:** It's not.

**Bridget:** Super glamorous. Definitely rum, definitely not ping pong and all-nighters.

**Matty:** Hmm. Our most watched YouTube video this year was Bridget's fireside chat with Brian Cantrell. And to the point that I think we were talking about, that like the numbers were massively skewed. Bridget, you want to talk about that a little bit? I want to— I'm gonna pull up some data.

**Bridget:** You know, I'm not really sure what was so different about that one though. I kind of think maybe it was, as Matt was suspecting because we took a while to get the audio edited and uploaded. So what people were passing around, what people were tweeting about, was the video from YouTube. So like, it's always hard to tell when you have, you know, as opposed to a couple of days difference, you're like, I think we had a week or so there. Uh, that could have been the difference. I think maybe— I mean, Brian is of course a, you know, fiery agent provocateur, so he gets his, uh, a certain amount of attention and what have you.

**Matty:** [00:40:00] But that video has had 190 views in the last 4 weeks.

**Bridget:** Yeah, like it—

**Matty:** I mean, which for us is a lot. Like, we don't, we don't really promote video of our episodes and stuff like that.

**Trevor:** 190 views is a good peak for one of our videos.

**Bridget:** Yeah, and it's like 10 times that total. You know, I, I am kind of wondering, and maybe we can kind of experiment because we haven't really dug into these numbers, But I know we've had a couple of other episodes that are that really deep one-on-one conversation, like the one that Stratton did with Polly, stuff like that. And I kind of wonder if we'll compare those versus the panel ones and see if there's more appeal or less appeal, you know.

**Matty:** So it's hard to say because the Polly episode, we can't compare video-wise because there is no video.

**Bridget:** Well, no, no, but like just in terms of Oh, the audio even, just like the listens. I mean, I think there's some data science. We could get a data scientist. Yeah.

**Matty:** So our most popular videos in 2016. So the most popular was the Brian Cantrell episode, which had almost 2,000 views. The next one was our exciting topics like containers and security, also known as the let's get Jesse Frazell and Ben Hughes just on the show again. Because why not?

**Bridget:** [00:41:17] That was great.

**Matty:** Which, yeah, that one's had like 1,200 views, and I just chalk most of that up to Jess because we're like, hey, Jess on our podcast, people go, oh shit, I better watch it, right? You know, so that's— so basically, uh, Jess, you are our clickbait. So next time we ask to be on the show, that's totally what it's about. It's always because we think you're awesome. We just know that—

**Bridget:** oh no, it's because we think you're awesome and we know people will enjoy it.

**Matty:** Exactly.

**Bridget:** I mean, and maybe that's something to think about too. We have a completely, totally scientific method for picking topics, which is whatever we feel like talking about. And some of that, I think a lot of it actually, is stuff that our audience is really excited about. And so, we pick these topics, things like open source and monitoring and containers and Left Pad. And this is stuff that people are excited about. And so that, I think that that's not, I don't think it's a coincidence that we've had a lot of views on, you know, people who are charismatic figures in popular topics. Like, yeah.

**Matty:** [00:42:25] Our 3rd most watched video in 2016 was an episode from, that was basically recorded at the end of 2014. I think.

**Bridget:** Oh, which one was that?

**Matty:** It was— it's the episode with Jeffrey Snover. Oh, so again, it's, it's, uh, well-known personalities, right? I think can help.

**Trevor:** Yeah.

**Matty:** But it's also, again, it's, it's topics that a lot of people are interested in. Yeah. So how much of that is people watching because, oh, it's Snover, and how much is it's about DevOps and Microsoft? That's something that people are hungry to hear about, you know. Like, we recorded an episode like that we finally got around to having a follow-up episode that I haven't released yet, uh, and kind of the response I got was, okay, good, because there's not enough of this. Yeah, right, which tells us we should be— we should be doing—

**Trevor:** there you go, Matt. There's your— there's your new point of engagement. We can, at the end of every episode, we can say, what was more interesting? Tweet like #topic or #guest at Arrested Development.

**Bridget:** [00:43:30] Make people feel like, oh, my topic was this or that.

**Matty:** Well, because sometimes there's a topic and sometimes there's not. I think that goes to Bridget's point, is like, we have episodes like the fireside chat with Brian, the chatting with Paulie Comtois, where I was— where I think in both cases— I mean, my thing with the Paulie episode was like, I've been talking to Paulie for a year, basically since we started the show almost. I'm like, dude, you got to get you on the show. And he's like, uh, okay. I love the show. When is this going to happen?

**Bridget:** When?

**Matty:** Then finally I was like, we're just going to get it on the calendar. He's like, well, what are we going to talk about? I'm like, fuck if I know. We're just going to talk and it's going to be awesome and people are going to listen in on it. That's what the fireside chat was like. I think episodes like that are very cool, but then there's also episodes with the same kind of people. Doing an episode like that with James Turnbull would be super great. We've never done it. We've had James on twice talking about specific topics, and it's been super awesome. And I think the same thing could be true with Polly or Brian, where you could say if they were on a show where we were talking about something that was within their space and they were there not to just sort of chat, like, there's something kind of fun. But I think if all of our shows were the— we bring on a personality that we like, or not even that we like, But well, not that we don't like it. But I mean, like, for reasons other than just because we're buddies, you know, come on and just sort of chitchat and you get to listen in on. I don't think our show would have lasted. No, I mean, I don't think we'd still be doing this. And vice versa, if we didn't do those sometimes, I think we would have probably burnt out on doing the show too.

**Bridget:** [00:45:06] But to be fair, I think that bringing on somebody to just shoot the shit is, I think, harder in some ways because it has to be somebody you can really shoot the shit with for an hour. Whereas a show that just does that, I'm going to point to, say, for example, my favorite podcast that I'm not on is Software Defined Talk. I listen to every episode of that, and I love listening to Kotei, and Brandon, and Matt Rae just shoot the shit. And they never have guests. I mean, every once in a while, I've been on there, but for the most part, it's just the 3 of them. They talk about whatever's going on in tech. And so, it's a different kind of podcast.

**Matty:** It's, it's also to your point, it's, it's a lot, and this is gonna sound like I'm saying that, that SDT is easy to do. It's way easier to do a conversational, loosely, very loosely oriented thing with the same people because you learn each other's rhythms. It's really hard to have these conversational things with, right, with swapping guests in and out because unless it's people you already know pretty well. Right. But even then, you haven't gotten into even like you can have this person that you're really friendly with and you have great conversations with, but you've never had a conversation that you know other people are going to be listening to.

**Bridget:** [00:46:25] And that's and actually though, I should point out SDT definitely upped their difficulty level by Matt Ray moving to Australia.

**Matty:** Well, I mean, if you want to make your life harder in terms of scheduling, like when it was hard to schedule Trevor when he was over in.

**Bridget:** Time zones yonder.

**Matty:** Well, I was going to say we made it hard when Trevor moved out of time zone from being the same as me and Bridget, but that never really mattered because we rarely were all home together. Yeah. I want to move on to a couple of things because we've been—

**Bridget:** This is going to be a mega long episode.

**Matty:** Whatever.

**Bridget:** Whatever. No one has to listen to it.

**Matty:** This is our one self-indulgent episode.

**Trevor:** This is like— I want to self-indulge. So we mentioned asking about Google. So I got a new toy. So, okay Google, are unicorns real?

**Bridget:** They seem so majestic.

**Matty:** Now I, I want— I need to know, did you know that was gonna happen, or—

**Trevor:** [00:47:26] It has several different answers. Okay Google, are unicorns real?

**Bridget:** I've got to admit, I'm not sure.

**Matty:** You got lucky. The first one was the best one. Yeah. So I want to hit a couple more things about the podcast. I want to talk a little bit about the year in general. So I put on here website updates because when I looked at our show notes from last year, we were like, we redid our whole website, blah, blah, blah. The website updates this year, we have episode numbers now on it.

**Bridget:** I think website updates for this year are people other than Matt actually update the website from time to time. Time, which is a big improvement from Matt has to do everything ever.

**Matty:** That's true. Even Trevor submitted a pull request for one episode. Yeah.

**Trevor:** And I totally didn't screw up the tests by not running the test first.

**Matty:** Right.

**Trevor:** Yes.

**Matty:** And he only needed a little bit of handholding through it, but it was totally okay. One of the things we did, I talked a little bit about kind of listening to podcasts about podcasting and being involved. So I did a session with a fellow named Daniel J. Lewis who has a podcast called The Audacity to Podcast, and we were a featured podcast evaluation in the Podcaster Society. And what was kind of cool, so we got a bunch of feedback from people who really know about podcasting, and some of this we've already started to implement. Mostly what I did was create a shitload of GitHub issues on our repo that we'll be getting around to, but hopefully most of these should be to make your life as a listener better and your experience better. So, and this was also, I think, yeah, this is the year that we introduced Joe as our audio editor, right? I don't think he did anything in 2015. I mean, obviously he did things, but I mean, I don't think he did anything for the show in 2015.

**Trevor:** [00:49:17] Joe didn't exist prior to 2016.

**Matty:** As far as I'm concerned, he's Schrödinger's cat, right? Like there was no Joe till we measured him.

**Bridget:** Yes. Uh, I assure you no one kept Joe in a box until 2016 to see whether or not he existed. Like this was, this was not a Schrödinger sort of thing. But yeah, it is, it is nice just because Joe probably travels less than most of us. I mean, most of us on this podcast, like he obviously travels with me some, but him having the opportunity to be, you know, not on shitty hotel Wi-Fi and able to edit and then upload an episode is certainly nice.

**Matty:** And since he— or on planes for days— right way to do this, I feel like his workflow must be slightly faster than mine.

**Bridget:** He's pretty fast.

**Matty:** Yeah, I, I— and, and so the other thing that I really think was new this year, I think this year is when we started doing cold opens. I don't think I did any in 2015.

**Trevor:** [00:50:21] That's my recollection.

**Matty:** And I, I don't remember off the top of my head. I will know when I edit, when I start editing my supercut later, which episode I started doing these in. Uh, it's possible that I was wrong and we did that before, but I was incredibly pleased because I remember the first episode that we went to have Joe do, I was like, I really— I care about these cold opens and nobody else seems to, but I just— I don't know, I just think they're funny. And whatever it was, it was like this mic drop from Joe. I was like, nailed it. And now I so look forward to getting the edit from Joe because I'm like, like, what's he gonna come up with? Which one is he gonna pick? And like, we'll record an episode and I'll just be like, I bet it's gonna be this one. No, I bet it'll be this one. And it'll be something else. So that—

**Bridget:** he has fun picking those.

**Matty:** It's hard. It's like picking talks, right? You're like, this is gonna be super fun. And you're like, no, this super sucks because there's like a bunch of ridiculous crap. Um, so some of the search terms people use to get our website— so our number one search term is Arrested DevOps. So I kind of love that. It's like people typing in Facebook into Google to get to the Facebook website, which they do. Sometime I'll post in the show notes maybe. I had a situation several years ago where my blog that usually got maybe 100 hits a day got 25,000 in one day because I wrote an article at like 3 in the morning called Thousands of Facebook Users Are Apparently Really Dumb. And it had to do with the fact that— so this website called ReadWriteWeb, which is like a tech blog, they had written an article about— this was when like I can't remember what they called it at the time. Basically, it was Facebook. They called it Facebook Connect. But you know what I mean, like how you can log into websites or OAuth through Facebook, right? So, for some randomness with Google, for a couple of days, if you Googled Facebook login, the number one hit was this article on ReadWriteWeb. Which actually used Facebook's auth for the commenting. And so what was happening is you looked at the comments and there were all these comments from people saying, why is Facebook red now? I can't get to my messages. And it was all these people who apparently the way they got to Facebook was they went to Google and typed in Facebook login and it took them there and then they went to log in. And so I wrote this article and it got But basically, front page Reddit is what happened, right? And amusingly, I had just for shits and giggles put my website behind CloudFront a couple of days before. And I'm like, wow, did I get lucky? Because it would have crushed my tiny little like 512-meg VPS that it was running on. And to this point that I've actually gotten emails, there's a user who I— who who, like I used in the example screenshot of this comment, who, um, she comes up— if you Google her, that's the only thing that comes up. And she's asked me numerous times to take it down. I'm like, kind of like, uh, no, sorry. I mean, you said something dumb. Um, maybe that's bad. I mean, it's not like, you know, terrible defam— you know, defaming things.

**Trevor:** [00:53:36] It's— as long as they're not in Europe, you're okay.

**Bridget:** Wait, is there any way you couldn't just obfuscate?

**Matty:** Uh, probably.

**Bridget:** Like, does it need to come up when people type her name? Like, couldn't you just put something—

**Matty:** well, but then that's getting it purged out of Google, right? Like, even if I take it off, it's going to take however long.

**Bridget:** Sure. But I guess, I guess what I'm saying is, if somebody really doesn't want something with their name on it up, I feel like the kind thing to do would be to change it. Unless this is like—

**Matty:** I will put it to you this way.

**Trevor:** They're evil.

**Matty:** Let me put it to you this way. It probably would be pretty easy for me to do. If she asked me again, I would probably do it. When she asked me, I was probably more of an asshole. Well, now I got to go back and find the blog post.

**Bridget:** I'm asking you.

**Matty:** Okay. I will go and fix that.

**Bridget:** Thank you.

**Matty:** I will go and fix that. The other search terms are not— Arrest a DevOpsol is one word. Switching teams.

**Bridget:** Okay.

**Matty:** And that can mean so many things.

**Trevor:** Was that the episode that I did?

**Matty:** Yes. That would be because of Trevor's episode about changing from Windows to to Linux and back again. It's always funner. It's always funner. You got to go find like the deep, the deep cuts of the search terms, like not the, not the top ones, but the ones that were like one or two, one or two very confused people, right? Yeah. That were like Chef infrastructure. These aren't funny yet.

**Bridget:** [00:55:04] Does anybody come who is looking for left pad or left sharp?

**Matty:** No, these are all like reasonable things like, you know, Etsy blameless postmortems. You know, Kyle Kingsbury, you know, I mean, you could probably find better stuff than our episode.

**Trevor:** I'm surprised there's not stuff that gets brought in because of the random things like we mentioned in the show or the tape.

**Matty:** Well, we don't write a lot of really good show notes, so—

**Bridget:** Oh my God, we're not going to start talking about the process of podcasting again. Moving on.

**Matty:** No, I'm just saying there's just not a lot of words on our pages, so there's not a lot of This is me making the moving on gesture. Yeah, okay, let's move on. All right, so we're gonna— let's just talk a little bit about what happened in 2016 that wasn't about Google or things. Um, so for me, like, this was the year when I, I didn't travel very much. Uh, I lost status on every single thing that I had status on this year.

**Bridget:** Congratulations!

**Matty:** Yeah, thanks. So traveling next year is gonna suck, uh, for the half a dozen times or whatever that I do it. I only spoke twice. So, I gave a talk at the beginning of the year at the Pink 16 conference, which is this ITSM conference I spoke at with J. Paul Reid and Damon Edwards. And it's happening again right around now, and none of us are speaking at it again this year, which is interesting. Like, I think it was just kind of not quite ready for our, you know, kilt-wearing types, I think. And then I spoke at a CloudBees Jenkins conference that was in Chicago that Trevor spoke at as well. I only went to one DevOps Days and it was in Chicago. I kind of didn't really have, you know, kind of would have imagined.

**Bridget:** [00:56:49] Didn't you kind of run that one?

**Matty:** I did, yeah. I kind of had to go to that. And I got married this year, so there was that.

**Bridget:** So you did do at least one thing that required a significant amount of time and energy.

**Matty:** You know, Trevor and I thought about doing an episode at the wedding, but the marriage would be already over if it had been proposed to actually occur.

**Trevor:** I'll say it crossed my mind. I think you thought off about it.

**Matty:** I was like, there's gotta be some time that we could even just like—

**Bridget:** and Andrea is just like, what?

**Matty:** No, no. Oh God, I didn't even bring it up. Okay, not even as a joke. I'm like— and not because she's like a bridezilla, but because it is stupid. It's like, no, come on.

**Bridget:** Yeah, usually people don't usually have time to eat at their own weddings, right?

**Matty:** Let alone record podcasts during the weekend.

**Trevor:** So we did get a couple awesome pictures though in your fun photo booth.

**Matty:** We did, we did. So there those.

**Bridget:** So, I wish I could have made it to that. I think I was on a plane. I was either on a plane or I was in Wisconsin.

**Matty:** You were camping.

**Trevor:** You had a family thing.

**Matty:** [00:57:49] Boundary Waters or whatever thing.

**Bridget:** No, that was during DevOps Days Chicago. I think I was at Joe's family reunion and then leaving like the next day to go. Yeah. And then leaving the next day to go to Copenhagen.

**Matty:** Yeah. And one other thing I just want to talk about 2016. I was thinking a little bit and we We're probably not gonna have time to get into, like, the deep DevOps things of 2016 and what happened, which is good because I didn't actually go anywhere or talk to anybody, as we just pointed out. But—

**Bridget:** Except, like, a billion people on your podcast.

**Matty:** Well, except a billion people on my podcast and, like, a billion customers. And my perspective on this has changed because my role has moved down into further along the process to people that are actually doing stuff rather than just thinking about doing stuff, which kind of plays into what I thought about for this year. And when I thought about conversations that I see happening online, the talks that I see at DevOps Days, even though I'm not at them, I'm watching them, conversations I'm having with customers, I feel like I was like, you know what, this was a year when we stopped talking about doing shit and we just started doing shit. That's sort of how I take DevOps for this year.

**Bridget:** [00:59:02] Year.

**Matty:** Now, it may be kind of clouded by the fact that I'm now working with customers who are doing stuff versus talking about doing stuff because I'm in a different part of the cycle. But I feel like a lot of our hand waving has kind of gone past. And I, I don't think that that's by no means like a, a shot at, at how we talked about stuff over the last couple years because I think we needed to. We needed to have 2014 the year of the empathy talks, right? We needed to have last year a lot of thinking about how do we take those things and turn it into things we can do. And then now it's like, OK, well, now people really just want to know, how did you do it, right? And more often, let's sit— actually not even how did you do it. This is something I thought was really interesting I saw like in the open spaces in Chicago is they weren't even even people wanting to be like, oh cool, okay, so you did that, how'd you do it? It was more like, here's what I did and you're doing it too, so now let's both talk as peers because now lots of us are doing this. So now it's not even like, let me sit at the feet of the great thought leaders. It's like, okay, you practitioner, you practitioner, we're all peers now, we're cross-pollinating. And it's a bit— that has kind of been my take of this year.

**Bridget:** [01:00:17] Yeah.

**Matty:** And I feel like what Trevor talked about with, um, Asia-Pac and with being in Singapore seems— and I should say he wasn't making a generalization about Asia-Pac, he was speaking specifically of Singapore, right, um, when he was there— that seems to speak to that a little bit, right? Which is like in this mode of doing. So Bridget, what, what's your take on what you did in 2016? What's your take on 2016?

**Bridget:** Oh, I, I don't know. You just actually brought up Trevor's like Asia-Pac trip, so I feel like we should go to Trevor next and then me because that's our segue right Trevor, what were you doing exactly in Asia for all those months?

**Trevor:** I was leading a data center transformation project for one of the— one of my clients. Um, and so that was all kinds of varying levels of fun. Um, but I got to see— I got to see Hong Kong, get to Singapore. I got to go to Tokyo for the first time. That was super awesome. Got to see all that.

**Bridget:** Um, does it really look like the It kind of does.

**Trevor:** [01:01:20] I mean, like, Hong Kong, I think, was the one that struck me the most, um, because it, it's like this crazy dense city but on top of a mountain range. Yeah, it's a city in the mountains and super cool because I've only ever seen cities that are kind of like between mountains. And so like, obviously there's a couple valleys where there's like crazy dense But throughout the mountain ranges, you just see these skyscrapers on top of mountains. It's so cool and beautiful and like, wow, interesting. That's super weird. It was super different. Now, what kind of the downside of that was, I was going, you know, fortunately getting the opportunity to come back and forth to home and see family, see Jen. But what I did a poor job myself was to say, No, I'm not going to remain on Singapore hours. Oh, um, because I was thinking, oh yeah, it makes sense. I'm gonna do this for the client. It's gonna be great. You know, I can just change my sleep schedule. It'll be fine. Everything's gonna be awesome.

**Bridget:** [01:02:29] That doesn't sound awesome.

**Trevor:** It was awful, and I understand what burnout is now. Oh, and you only did it for like Um, but it was, it was totally because I was thinking that I was like this superhuman that I could do all this crazy stuff and it would like wouldn't break me in some way. Surprise! It broke me in some way.

**Matty:** Part of 2016 was, was Drago in Rocky IV going, I will break you, Trevor.

**Trevor:** And he did.

**Bridget:** 2016 wanted to make a lot of us sad in many ways, but this episode is not about that. So Correct. Tell us about you speaking up and going to conferences this year.

**Trevor:** [01:03:35] Yeah. So I got to go to several different conferences this year. I got to go to the PowerShell Summit, 2 PowerShell Summits actually. I got to go to the one in Bellevue and the one in Singapore. I got to speak at the one in Singapore, which was super fun. I got to speak at ChefConf again this year, which was also super fun. Like Matt said, at the CloudBees conference, which was fun. I think I went to other conferences, but as I said, there's some memory issues with that time period.

**Bridget:** It's all a rich tapestry.

**Trevor:** Yeah, that's the thing. But in that time, I also moved to California, so I'm down in LA now, and I work for Chef now too.

**Bridget:** Yeah, if our listeners hadn't caught that, tell us how that happened.

**Trevor:** Happened.

**Bridget:** You were a consultant and you just consulted on enough chef stuff that chef was like, why don't you just work for us?

**Trevor:** Well, no, it didn't quite work like that. It was more like, again, one of those realizations that A, that was what I wanted to do, and B, that, um, you can't actually— people aren't going to ask you that when you're that closely related to things. You have to ask yourself, um, because reasons. But you figured it Yes, I did figure that out, and now I work for Chef. Um, but it actually—

**Matty:** [01:04:58] it's interesting too, exact same job now.

**Trevor:** Yes, which is funny. We have the same role, and Matt isn't going anywhere. Yeah, for, for people with, with prior knowledge of the show and, and what happened when I joined 10th.

**Bridget:** Oh yeah, you were like, I'm gonna be your co-worker, and Matt was like, about that.

**Trevor:** Peace.

**Matty:** Yeah, we, we had quite a, quite a few people who made that joke or not, you know, said when Trevor said he was joining Chef, or like in his welcome, in his welcome into the Chef Slack, that Rock was like, so does this mean Matt's leaving?

**Trevor:** No, but that, that actually, that, that question actually raises a, a good point, Bridget, too, because another lesson I learned was there was a job I heard about first, um, at Chef that I was excited about and interested in But I didn't stop to think about what my current state of mind was because it was kind of like this— I saw this position while I was kind of at the lowest low point of this kind of understanding and grokking the burnout. And I applied for an evangelist position while I was super depressed. Oh, I feel like you don't do that.

**Bridget:** [01:06:05] I feel like you have to be super happy and perky to want to do evangelism.

**Trevor:** Well, right, it is something that like that the me that is actually me would love to do, but it wasn't like trying to convey that while I was super depressed and like contemplating not doing the podcast anymore and like not wanting to do anything. Like, that was the wrong time to do that, but the right time to learn that lesson.

**Bridget:** Learning it in a non-harmful way. Like, it's not like you took the job and then were like, oh, FML, right?

**Trevor:** Like, I wasn't going to get the job.

**Bridget:** Well, sure.

**Matty:** Well, and I think there's, there's some interesting lessons around this too, which is when you have a scenario, and again, I can't speak for Chef, the entire organism, but I know our organization fairly well, know a lot of the people involved, is it's not uncommon when you have an individual that you know in the community that you're like, it just seems natural that this person should be working here, right? And what happens is, you know, but the stars don't always align when the person is available and a role that is appropriate is available. And that sometimes what we do, and we do this as humans with our relationships sometimes, is we stay in this bad relationship or we get into the relationship at the wrong time, right? And that kind of thing can happen, which is to say, well, we so badly want Trevor to work at Chef and this job really isn't the right job for Trevor at Chef. I'm not saying this is a good thing, but what some organizations might do or some individuals might say is, but I'll get in there and I'll do that. And it just ends up being kind of toxic for everybody, or at least non-delightful. And so I think there was a lot of that going on with this situation too, which it could— and I think it took some, some good maturity on the level of, you know, folks didn't hire Trevor that, that time around because there's probably not a person in the organization that wouldn't be— that doesn't love the fact that Trevor worked with us. Now. And it takes, you know, kind of a pretty mature hiring manager to sit there and say, Trevor, you're a rad dude. And I know, but this is not going to be right for you right now. You know? Um, and all that's going to happen here is make everybody involved sad. And it fortunately worked out kind of nicely that then the right stars aligned pretty quickly. But I, you know, sometimes, and this is for people who are listening, um, there have been probably quite a few times you may have kind of pitched at a company you really want to be a part of, and they've had to say no. And it's, it's, it's just because it's not the right time, you know, that role isn't right, but they really want you to be part of it. And the right thing is not to bring you in for the wrong thing just to get you in the company. That's all kinds of bad news, you know.

**Bridget:** [01:08:50] So totally, totally true. And I'm also going to say that there's places that I probably could have ended up working except that they were like, must relocate to San Francisco. And I was like, that's a ridiculous meme. And keep in mind, like, when you're changing jobs, when you're picking the right job, don't compromise on things like what are you going to be happy doing and where do you want to live? Like, don't let somebody change your mind on stuff that is really important to you.

**Matty:** The where do you want to live thing is kind of a thing that's probably, if it's important to you, you should should zero compromise on that because you know what? That's like the one thing that is like all of your stuff, right? Like when they say the one thing you can't change about your house is where it is, right? You know, so, um, so yeah, so Bridget, your turn to talk about 2016. Now I'm going to mute.

**Bridget:** Okay. So in 2016, I probably— this, this may be the only episode I've done sitting down because it's kind of late at night while we're recording and I'm actually kind of tired. So I'm sitting at my standing desk instead of standing, which means I'm probably rocking and bouncing more than I usually would. But this particular year, I went back and I did a rough count and there appear to be 28 different items that may or may not have been conference talks. I think at least 2 of them were Ignites and maybe one was a panel, but I think I probably gave about 25 talks. A few of those were at DevOps Days. And I say that sounding mournful because mostly I'm just kind of like, please don't anybody try to make me give my 2016 talks again. I'm so sick of them. So, I have all new abstracts for 2017. I am not giving the same talks. I don't care if you've asked me to, that's not what you're getting. But yeah, so I did give some at DevOps Days. I made it this year, I made it to London, Toronto, New York, Detroit, Havana, which was amazing, Philly, Madison, Sydney, and of course, I ran Minneapolis. I wasn't speaking at it. So, that's probably the most DevOpsDays in a year that I've ever been to. I mean, I'm not getting anywhere near as close as some of the record holders, but, like, it's a lot of DevOpsDays. And counting North America, Joe and I hit 5 continents this year. We did not make it to South America or Antarctica, but we made it to the rest.

**Matty:** [01:11:14] So, um, you gotta have something.

**Bridget:** So my plan for 2016 was to travel less, um, and that, that was clearly a giant fail because I got all the airline status, which as we all know is the gamification of poor life choices. So, um, I'm rethinking next year. Like, I'm thinking maybe I should get into webinars or something. Like, what do you guys think?

**Matty:** That, uh, I'm, I'm, I, I'm telling you, like, this remote thing like this, having done it now for a while, I absolutely hate going anywhere. Like, Trevor and I went to Boston, or just outside of Boston, earlier this week, and like, I was, I was looking for every excuse not to get on that freaking plane. You want to know how many trips I've done this year? Like, 6. Like, all year. And that includes, like, going to Disney with the kids and going to Mexico. Okay, maybe more than 6, but, like, I have no reason to hate it. And, and that's the thing that I think is super interesting, is that last year when I spent, whatever, 210 nights in Marriott properties, it was just whatever. Hey, shuttle bus driver at O'Hare that knows me on site, right? Whatever, no big deal. Now it's like, oh my God, I have to on one trip. I so don't want to do it. Please let it snow so I don't have to go. You know, it's like you just start to hate on it. And but then it makes you go like, hey, you know, you can do this remote thing. And like, yeah, like you said, doing like, if it's webinars, if it's— it just depends on where you are in your, your role, right? Like, if you can, some of it, and this is, this has been one of the super hard problems, and I suspect this would be a similar problem for you, that I had with Chef is when I sat there and I said, okay, my goal this year was to travel less. And it was a hard goal. And by hard goal, I mean like there was no question, right? It wasn't like, oh, I kind of like that. It's like, no, I specifically need to travel less in these specific ways because kids and life and things, right? Like I have to be home X number of whatever. So the problem was— so I sat there and this again is like a testament to a great organization I'm a part of who did everything they could, which was enough by the way. That makes it sound like they didn't do enough. But we did what we could to say, okay, how do we draw this Venn diagram of what gets Matt to travel less, still keeps him happy and provides the great value? One of the problems that I continually ran into when I did my own exercise was saying, where do I provide provide the best value to an organization, there's very few things don't involve me being in a room with humans, like customers. Like, if I'm going to talk about value, it's like I actually have to be with you and talk to you, and like, we have to be humans together. And that sucks when you don't want to travel because a lot of those humans don't live in the Chicagoland area. So that's kind of hard. But then there's ways— but, but it wasn't insurmountable because, as it happens, I found a role within the organization or even, you know, a way of doing that. Because again, I think you'd have a similar scenario, right? Like a lot of your value to your organization is you talking to people.

**Bridget:** [01:14:30] Yeah.

**Matty:** Like with mouth words, sharing oxygen, right?

**Bridget:** Like, like I heard from— so we have a team offsite in January. I already have my tickets lined up to fly to SF on a Monday and fly home on a Friday. Good work-life balance there. You know, not flying on the weekend. And then today, one of our top sales reps wants me to come to talk to one of his prospects, um, in California but not San Francisco, uh, that Monday. So instead of flying leisurely on Monday for our meetings that start Tuesday, I'm flying on Sunday and I'm gonna do a full day of customer stuff and then fly to San Francisco that night. It's like there's stuff like that that you— I mean, yeah, like that wasn't what I planned to do that day, but I'm clearly doing It's just the job.

**Matty:** And I think the other thing, and this is why, you know, there's certain types of roles, like sales engineers and anything like that, where you just see a lot of turnover in it. And that's totally okay, because they're just not sustainable at that rate. But it's okay to do that for a couple of years. Like, that's the same thing too. And I almost knew that almost immediately when I started in the SA role that I had at Chef was I'm like, I'm like, even without the kid stuff or whatever, I was like, I can't do this for more than a couple of years or I will just hate it and I will hate this company. I don't want that to be a thing that happens. I think anybody who expects that type of thing to be sustainable, I mean it may be sustainable for a very specific kind of person. I know some people like that. There are some people who are nomads that are happy never laying down somewhere and they love just globetrotting and doing that. They'll probably do that for the next 10 years and they will rock it. It, and they will be fulfilled beyond belief.

**Bridget:** [01:16:10] I mean, I probably, I probably can't do that for 10 years, but I definitely have lasted longer than I thought I would. And I think the sadness of airline status indicates why, which is to say I have Diamond on Delta, Joe has Platinum, so I'm not doing all this travel by myself.

**Trevor:** I'm now Executive Platinum, and it is the worst wonderful thing in the world, right?

**Bridget:** I like that. Worst wonderful thing in the world.

**Matty:** Okay, Trevor and I were talking. We're pretty sure that the airlines are also smart enough to know that just because you have the status— but it— but I think they don't give a shit if you have the status if you haven't been flying lately. Because I have noticed that with my United status, the same status last year that got me upgraded pretty much almost without fail, I have not been upgraded at all this year. Except for at the beginning of the year when I was traveling like several times a month. But I've noticed since then that it, it, it's— there must be something in the algorithm that's like a recent recency, or, you know, you're this, but you actually have only flown 10,000 miles in the last 6 months. So we don't really—

**Trevor:** [01:17:20] your dollars to donuts ratio is not high enough to get your upgrade.

**Matty:** Nice. By what?

**Bridget:** Okay, yeah, he said your dollars to donuts ratio.

**Matty:** Oh, dollars to donuts.

**Bridget:** Speaking of poor life, but I should Oh, there was one other thing I wanted to say about this year because it's actually really exciting and relevant to a bunch of episodes we did, which is that DevOps Days has been a big part of my year.

**Matty:** Oh, shit.

**Bridget:** That's exciting. And it's been growing ridiculously. I did a quick count, and I might have an off-by-one error or something, but 2015 was approximately 22 cities across the globe. 2016 was 42 cities on 6 continents. And that's not nothing. You can go look at devopsdays.org/events and see them all. But the stuff that's really stood out for me is we had a lot of people deciding they wanted to run events in places that had never run DevOps Days before. Places like Istanbul and Porto Alegre in Brazil and Raleigh. And Kansas City, you know, and Philadelphia.

**Matty:** [01:18:27] Exotic places like Kansas City.

**Bridget:** I know, but you think, like, Kansas City is gonna have a DevOps Days? And the answer is yes. And Cape Town, you know, these are super amazing. I think it's super amazing that people across the globe are all catching on to this DevOps thing, like Trevor was talking about. And I think it's pretty great. We have a bunch coming up in 2017 that are also going to be amazing. We've got people planning to run one in Moscow and one in Beijing and one in Zurich. So, these are, again, places that have not had one that are excited to have one. So, I'm pretty stoked about that.

**Matty:** I think what speaks to that as well is some of the challenges we've been running into with the website stuff. Stuff with like we need to handle for internationalization and translations now and city names that are in URLs that have weird characters. I shouldn't say weird, but have non-special characters. Yeah, it's just stuff we're not used to having to deal with.

**Bridget:** [01:19:38] And Matt has to deal with all of that because that's the other thing that's really exciting about this year. So I took over running the global org at the beginning of 2015 and I spent way too much time trying to do stuff myself in 2015. And we've been adding core organizers to carry some of that load. And one of the things I'm really excited about is that Stratton joined us as a core organizer this year. And specifically, not just a core organizer who will help other events, though he does, but with being our web team lead, meaning that we did a huge amount of work on the DevOpsDays website this year.

**Matty:** Which you wouldn't necessarily know to look at, but we did.

**Bridget:** Well, but you would. I think that this actually has a lot to do with people feeling like they can easily start up a new event.

**Matty:** I mean, as an organizer, you know that the stuff changed. I meant, like, if you're a casual visitor, if you're a consumer of devopsdays.org as a person, you'll be like, I looked in the Wayback Machine, and except for some Font Awesome icons, it looks exactly the same, which was exactly what we wanted, right? We did a bunch of stuff to Bridget's point to make it a lot easier as an organizer to update the website. And this is one of those things where if you don't kind of know, it's going to sound really dumb because everyone is going to be like, what? It's a CMS, right? Don't you just do a thing? And it always has been kind of a guiding principle of running a DevOpsDays that if you're not comfortable, like when we come to you and say, okay, the way that you put your event on the website is through Git. And you're like, what? We're like, you should not be running this event, go away. That was, I think, sort of, I think, Patrick's intentional barrier to entry of doing it that way. But the challenge was it became more than just knowing that kind of stuff. It was like you had to know, it was just hard.

**Bridget:** [01:21:26] It wasn't, it was also just kind of time passes and needing Ruby 1.8.7 in order to update a website is nightmarish.

**Matty:** So, I guess that's sort of the thing is, like I say, if you at first flush, that sounds like, what do you mean it's hard? That should be like job one is making it super easy to update the website. We're like, well, we want to make it delightful but not easy because we don't want some chief social officer of an organization being the person running the DevOps days because they know how to use WordPress. Nothing against WordPress, but we kind of expect you got to have at least someone on your team who can do Git. That was the thing. But our intent was to say move all these parts behind the scenes don't mess with the paint on the outside. And now we are messing with paint on the outside.

**Bridget:** And, um, in the next couple months.

**Matty:** Yeah. Bridget's like the worst customer I've ever had to work for from a design perspective. I just want to point out something. I'm like, hey, everybody who gives a crap, here's some wireframes. Everyone look at them. Are they cool? Okay. We talk about a little bit. Yes. Yes. They're cool. They're cool. Okay. Designer, go back, take the wireframes. Now do this. Do color and font. Okay. Everybody, the color and font look good. Yeah, it totally looks good on these 2 pages that you initially did. Head to get a general idea. Sure. Okay, cool. It's all approved. Designer, come back. Okay, here's mockups of all the pages with the color and font. Bridget goes, I hate that color and font. And I'm like, well, but what about before? And then it goes back to, oh, blah, blah, blah. Wait, why are we showing those things? I'm like, those were on the very first wireframes. Why didn't you hate them back then?

**Bridget:** [01:22:56] I don't even remember if I looked at them back then.

**Matty:** You did because you commented on them.

**Bridget:** Maybe I was commenting about different aspects of And I wasn't bike shedding as much as I did this time.

**Matty:** It's just part of— there's a great— The Oatmeal has a great comic about why your web design goes straight to hell. And it's about how you start with this thing and you eventually just become this proxy for the mouse.

**Bridget:** All right. I will point out that I told you I don't care which blue you pick. I just want it to be a blue that's not light blue fading into the gray or whatever.

**Matty:** I don't even remember what it was, but there was one where I definitely felt a very cake and eat it situation. But it's also super fun because at the end of the day, whatever is the right answer.

**Bridget:** But, um, I just want better contrast, that's all. I'm like, I don't even really care how it looks, I just want it to actually be seeable.

**Matty:** And then, uh, and then I wouldn't be sad about that. I would—

**Bridget:** you know what, I would be perfectly fine with it looking like a terminal, like a a Wyse 60 terminal or whatever.

**Matty:** [01:24:00] It's going to be a little more hipster than you want.

**Bridget:** It could be black and green.

**Matty:** So, all right, speaking of port life choices, this episode has been recording for an hour and a half. It's 11:30. My kids are waking up to go, and school is not canceled tomorrow according to Facebook, despite it being cold. So the only checkout—

**Bridget:** you live in Chicago. They cancel school for being cold.

**Matty:** Initially, they were talking about it being— well, they can't let the buses— can't break down. That's their concern. Like, if it's too far below zero, then the school buses might break down, and with little kids, that's super risky. So that is the theory behind that. Um, but apparently it's not cold enough that they're that worried about it. Uh, Trevor, how strongly do you feel about your checkouts? Because you're the only one who did any.

**Bridget:** Um, oh, I was gonna put one.

**Matty:** Oh, okay, go ahead, because I could probably come up with So then, well, you type yours.

**Trevor:** Yeah, so this year HBO released Westworld, which if you haven't watched it yet, you should. It's fun, although there's some, some moments that might hit a little close to home in the tech world. Um, but it was super entertaining and I recommend it, and the music is fun and I've been listening to it a lot. Um, lots of, um, like Western-style piano versions of some of your maybe your favorite songs. Um, there's like a really good, um, like player piano version of No Surprises.

**Matty:** [01:25:27] I like—

**Trevor:** which is awesome. Um, that one was good too. Um, and also this year was the 50th anniversary of Star Trek, and when I was at the M-Pop or whatever it is in Seattle, they had these 50th anniversary Klingon bloodwine mugs, which come with a recipe for bloodwine, which is both delicious and potent, as one would expect your Klingon bloodwine to be. There's a link in the show notes where the Star Trek people were nice enough to provide pictures of the recipe if you want to try it, or if you want to find one of these awesome mugs which make fun sounds.

**Bridget:** Whoa. Okay. So, I just have one, which is I was on the program committee for a conference called Systems We Love. And to my great regret, I did not actually make it to San Francisco for it, though I wish I had. But I watched a lot of the livestream, and it's all available to watch now. And this was talks about things from airline reservation systems to the slab memory allocator to, you know, BGP to like card-based systems. You know, going back to the Middle Ages. Like, it's basically just like the mandate was come up with some kind of system, tech or, you know, not, that you just want to talk passionately about. And people did, and it was really amazing. So, the link will be in the show notes, and you can go watch all of it now. Cool.

**Matty:** [01:27:04] So, recently, via my kids, I discovered this thing You probably haven't heard of it, but it's called Minecraft. I super suck at it. I don't—

**Bridget:** I haven't actually even tried it. I've heard it's something young people are good at.

**Matty:** Well, so there's this whole survival— there's a video game aspect of it that I totally ignore. And I do like the fact that my kids like to create, like they build stuff with it.

**Bridget:** Yeah, I've heard about the building things. It's all gray blocks, right?

**Matty:** Yeah, but it's been kind of fun. It gives me a thing that I can do. They're super— they learned recently like how you can join worlds, which means they can like sort of multi-play with each other on our LAN with their iPads. Um, although I discovered, and then I was like, well, that's cool, so you guys can play and I can play in the world with you, except you can't like connect an iPad to a computer. Like the versions are different or something. So I have to be on my iPad because I was like, oh, this is great, I can sit here at my desk and you guys can be on your iPads on the floor and blah blah blah. And then it's Yeah, no, like, yeah, screw that. Yeah, no, but they still are like super— like, they know how to do like all this trickery stuff, but they're also like, you know, 6, so their design, uh, approach is maybe not so great. So they, you know, like, with the basic stupid stuff I figured out how to do, it's still like they're like, oh, Daddy, you built a house that has 2 levels! Because it didn't occur to them to have 2 levels. And I'm like, yeah, I'm awesome because I'm your dad, right?

**Bridget:** [01:28:27] That's adorable.

**Matty:** This time is gonna last for like maybe another 6 months. So I'm enjoying it now. But this also is a reminder about the awesome website code.org, which has a bunch of great coding exercises for young kids. And right now is going on what they call the Hour of Code. So a lot of schools do this. The Obamas were involved in it as well. Microsoft has a Minecraft-related thing on code.org for the kids to be able to kind of go in and using Minecraft kind of solve logic puzzles. And it's very neat. And even as someone who's like— I recommend everybody kind of check it out even as an adult, even if you know how to code, because it's interesting to see the mechanisms by which these simple ideas of logic and, you know, programmatic design are being taught to young kids using like Angry Birds, right? Like, how does this bird— like, I need to get the Angry Bird to the piggy. How do I do that? That in a repeatable way. I'm also on this super retro kick right now where I'm rereading these fantasy books that I loved in junior high that are this trilogy called Dragonlance based on Dungeons& Dragons. And I kind of discovered a bunch of books by the original authors that I didn't realize because in the 20-plus years since I read them. So I'm back to rereading some of those. And there's a super good book called— so if you like it, you probably already know about it. It's called The Soul And it's about sort of a very transitional time in one of the main characters. So some upcoming community stuff. We have DevOps Days Charlotte will be February 6th through the 7th. I know that seems like forever and a way ago, but it's the next DevOps Days, so that's kind of cool, which also tells me this is like the one time of the year when we can like fuck around with the website maybe. So we should do that because once they have a bunch of that to do, once they start going, People don't like it if you move that underneath them. And the first DevOps Days Moscow is going to be Saturday, February 11th. And I'm confused. I think their CFP is open, but not really. I don't understand.

**Bridget:** [01:30:31] It's open-ish.

**Matty:** It's just not on our speaking page, maybe.

**Bridget:** I think we need to go change something in the way they put that PR in. I don't know.

**Matty:** Okay. So, it probably is. So, but they're probably, especially if I recall correctly, looking for people who—

**Bridget:** Oh, I know what it is. They put their CF— they embedded their CFP document, but they didn't update the YAML file.

**Matty:** Okay. What this boils down to is if you speak Russian and speak DevOps, you should totally submit to DevOps Days Moscow. That would be awesome. If you don't speak Russian, however, some other CFPs you may consider are DevOps Days Seattle is open until January 24th. ChefConf's CFP is open until January 18th. And Nathan Harvey has repeatedly said, I know you all think we always extend the CFP deadline. We will not this year. So that is a hard deadline for ChefConf. DevOps Days Zurich is open until February 1st and Salt Lake City until February 15th and Velocity San Jose until January 10th.

**Bridget:** [01:31:33] Velocity does not extend.

**Matty:** Yeah. And I've actually been finding most DevOps Days aren't doing that anymore because they don't need to. I know we at Chicago kind of always built that into as an assumption, and this year I was kind of like, we don't really need to because we already have like 30 billion more talks than we need.

**Bridget:** So, oh, and Vancouver is like on the verge of having their CFP open, and they're pretty soon. So, so keep an eye out for Vancouver.

**Matty:** Basically, go to devopsdays.org/speaking and you will see all the upcoming CFPs for DevOps Days. So by the time time you hear this episode, Vancouver should be listed. Uh, and while you're in your handy-dandy web browser, you can go to arresteddevops.com/2016-wrapup to see this episode's show notes. And on that slightly updated website we mentioned, uh, that has links to subscribing to our newsletter, The Banana Stand, to going to merchandise. We have a bunch of shows, a bunch of t-shirts and stuff. Go check them out. I designed them myself. I think they're funny. At least go look at them. And you could also support us on Patreon, and that's one of the things we added to the website. If you do support us on Patreon, we'll put your name on our website. So you should do that. All the links to do that are on our website. You can figure it out. If you can't figure it out, tweet at me @MattStratton. I'll help you. And leave us a review in the iTunes Store because that helps people find the podcast. And yeah. Keeping that in mind, this has been a really long episode, but super fun. And you know what? Take us out, Bridget, because God, I want to go to bed. I'm so tired.

**Bridget:** [01:33:09] We all want to go to sleep. Maybe we'll wake up and it won't be 2016 anymore and the world will be less terrifying. Hi, I'm Bridget @bridgetkromhout.

**Trevor:** I'm Trevor @TrevorGHess.

**Matty:** And I'm Matt @MattStratton.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.

**Matty:** Da da da da da da da da da. Paying the bills we do now. Insert a pre-roll. Insert a pre-roll. Da da da da da da.

**Bridget:** Woo!
