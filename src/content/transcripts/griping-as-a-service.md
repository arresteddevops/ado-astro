# Griping as a Service with Katie Kodes

[00:00:00]

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. That is a technical term, by the way, maximum DevOps awesomeness. That's one of the, uh, lesser-known DORA metrics, by the way.

But anyway, I'm Matty Stratton, and joining me today for our show is Katie Kodes. Katie, I'm so excited to have you on Arrested Develop- uh, the hell is the name of my podcast? Arrested DevOps. We were just talking about Arrested Development before, so anyway, welcome to the show. I'm so, so excited to have you here.

**Katie Kodes:** I am so excited to be here, Matty. Uh, it's been a long time of following each other and circling around, and I am so excited to be on the show

**Matty:** Yeah, I feel like we've talked about this, about this for a while, which is, uh, not an uncommon thing to happen with potential guests. But today we are gonna talk about [00:01:00] griping, you know. And, you know, as a longtime CIS admin infrastructure person, I am full of gripes. And, you know, we all like to gripe. We all like to have things that we'd like to be done differently.

But maybe we can- maybe we'll be talking a little bit about our experience with that and how maybe properly done griping can even affect institutional and organizational change, or not. We'll find out. but a little bit as we kinda get into that, maybe a little bit of background. Katie, uh, you wanna share with us how did you get involved in, like, the CI/CD world, AppDev, DataOps?

There's all these different things that you've, you've touched and done. Like, maybe give us a, a brief little origin story 'cause

**Katie Kodes:** Yeah. Well, well you, to some degree, uh, you know, we, we go, we go back to social dancing hobbies and this and that, so I've had the chance to follow your career. And as my home and work lives have progressed through all this, I was, as a kid, not allowed to get an [00:02:00] AOL email or a GeoCities webpage because I was forced to Telnet and Elm and Emacs to check my email and to FTP HTML onto a server because, I'm not-- I wasn't really allowed to do fun things on computers unless they in- involved an enterprise lesson to be learned.

And so

**Matty:** Fun in

**Katie Kodes:** yeah, that...

**Matty:** you know?

**Katie Kodes:** Yes. And, and so through that journey, and then into work and, starting out doing data entry 'cause I was a very fast typist, and then database development on both Salesforce and Oracle, and then, uh, again, I can type very, very fast, so I said, "Hey, let me into the room," as people were starting to talk about the runtime of these applications and lift and shifting from cloud to cloud.

And so as all of these projects unfolded, um, it was kind of, you know, I guess my advice is be friends with a DevRel because you'll find out that things have names that you can Google and buy O'Reilly books about. And so I would say that, that through that journey of [00:03:00] following what was going on in the DevOps movement, I was able to realize that CI/CD and data and AppDev and Ops, they, they were all things that, that the whole software development life cycle touches, and that you really gotta stay on top of all of them.

**Matty:** I will say I really enjoy, I will get like several times a year I will get this, this long text from Katie that's like, "Here's a thing I was thinking about. Is this a thing? Does this make sense? Does this..." And I'm always like, "Ooh, that is definitely a thing, and we haven't thought of that yet, so this is gonna be, this is gonna be cool." So let's think about this idea of like griping as a service. You know? Can you kinda tell, tell us a little bit about where this idea came from

**Katie Kodes:** Yeah. It came from I was describing my process of chatting with LLMs to help people with requirements analysis in tough situations, actually to someone who said, "Oh, I wonder if I could gripe to an LLM like that about a situation w- that I just witnessed," which was that we had a departing junior developer who didn't get to [00:04:00] learn enough 'cause people were being protective of the systems and not really letting them touch things, and they felt like it was a wasted opportunity to automate.

And I said, "Yeah, probably. It's kind of griping as a service." I, I think it was mine. I don't know, it might've gone the other way. It might've been hers. But,

**Matty:** hey, as, as we like to say, you know, good DevOps copy, great DevOps deal. So, you know

**Katie Kodes:** Yeah, yeah. And it, over time this just kept thinking, I was just like, "I don't know." I'm hearing so much about vibe coding. I'm hearing so much about prompt engineering. This was maybe about a year and a half ago, and I'm, I'm hearing so much about software factories and what, you know, but am I really hearing about sort of maybe the, the language, the linguistic side of using LLMs in the parts of the software development life cycle that are more personal?

And I couldn't really find it for a while, and, uh, eventually I decided, I Googled Griping-as-a-Service, wasn't there, and I was like, "Well, now it's just becoming a talk."

**Matty:** Yeah. That's, that's how, that's how they happen. So [00:05:00] you said this is, you know, kind of looking for things that get missed in requirements. So what, what's in a gripe that maybe y- the standard requirements process would miss?

**Katie Kodes:** I think there is a certain level of f- I wanna say known unknowns and unknown unknowns. Your requirements hopefully re- describe a lot of things you know about what you wanna build. They might even have a footnote talking about, further areas to research. But there's a lot more about why things didn't make it into the document in the first place that you remember and you possibly have buried u- under a lot of hard feelings about why they got axed, that I think sometimes you forget you know until you loosen up and you start going back to those painful memories of interpersonal conflict and, you know, people having different decisions that you think was a stupid decision for the organization.

And I think that, you know, what ends up not in there, uh, what, what an LLM can do is [00:06:00] tra- you know, help you remember the stories of why it didn't make it and compare that against your actual requirements documentation, the actual things that it knows because it has read the whole internet about the technology at hand and, and give you aha moments that you might not otherwise have

**Matty:** Yeah, I think that extra context because in one hand is just rubber duck debugging, right? The same way that I might sit there and just be like, "Hey, I'm gonna vent to my colleague and talk it out," and maybe that makes me think about it differently. But with the added benefit of A, it's being captured, right?

You know, so we can kinda see how that conversation goes, and then being able to bring in very quick context and additional context and maybe with whatever memory system you're using it remembers things that you... You know, 'cause these sessions I'm sure are not singular, right? You're kinda working through that and it could be like, you know, then you have that bit of memory which sometimes your colleague can be like, "Oh yeah, Katie, this is like...

Weren't you complaining about the... What, what... Didn't this come up differently?" [00:07:00] But maybe at a, at a larger scale

**Katie Kodes:** Yeah. I think that as far as sort of, you know, w- maybe what you put in, what comes out, I, I think, uh, you know, like if I were to say just, "I need to replace a s- or restart a server," and the LLM would say, "Great, I can help you with that. Here's a PowerShell script that will do that. Go away." Um, no, it won't say that.

It'll say, "What would you like to ask next?" If I say, "I want to automate our server restarts, but my boss won't let me touch anything and won't tell me the password. I think that's a terrible idea. I'm so frustrated we never do anything around here," now you're starting to get your feelings into it. And what I have found is that the LLM will come back saying, "Your boss has a point."

The very act of moving from interactive to unattended code-based stuff is going to make it so that [00:08:00] this could potentially run at 2:00 in the morning when no one is there. So once you actually set it up, you're gonna want that orchestrator to maybe require two different humans to actually sign off, uh, before it actually runs.

And similarly, okay, you've been typing a password interactively. Where are you gonna put that password now? Are you just gonna stick it in the version control Git repository where you put that PowerShell script? No, you're gonna need to ask purchasing to get you some sort of secrets vault from your enterprise cloud provider.

And all of those things, I think I have found when I actually gripe about the situation, it does better research and helps me see the bigger picture at a technological level. And my theory, I don't know why, but I think it has something to do with the n- next, nearest neighbor math under the hood of the matrix multiplication, and that probably desperate people got better answers on Q&A forums

**Matty:** Yeah, could be. It, it's, it's kind of like in a way griping to an LLM is a, uh, an effective yak shave, right? [00:09:00] Because again, you're gonna... You're, you know, it's not just answering that. And I think maybe one of the things to be effective with this probably requires a little bit of tweaking to how you work with the LLM.

You know, I'm a big fan of telling everybody all the time, like, your system prompt, my system prompt is like push back on everything. Do not agree with me. Do not think I'm awesome. I'm an idiot. Yeah, it doesn't quite say that, but it says do not be sycophantic. Just, like, push back, question decisions, do all that.

Because I think if you have an LLM that is going to be like, "No, that's a great idea, a great idea," you kind of lose some of that, like, pressure testing that can, that can happen, to, to, to connect out to that. it's kind of like to, to, to really, you know, continue how do we make DevOps metaphors out of this, it's like the standard requirements process is monitoring and griping to the LLM is observability, right?

In terms of we say observability is letting us ask questions we didn't know we wanted to ask. Whereas, like, with standard monitoring, you're like, "Well, the first thing I have to do is go back in time and put a monitor on [00:10:00] this six weeks ago so I was capturing this data." So that's kind of like, yeah, maybe, I don't know, I don't know how well that'll, that'll, that'll play out.

But I think it's, it's expanding it beyond just, like, a standard process is, like, asking the questions you know you wanna ask, and this, this

**Katie Kodes:** Yes

**Matty:** that path with help but also with your own ideas to extend beyond what was written in the room. so but where do, where does it kind of go south necessarily?

You know, like where does it fall short?

**Katie Kodes:** You run out of tokens.

**Matty:** Yeah.

**Katie Kodes:** No. Um, I think that what you're talking about with the oversimplification, the, the over-sycophancy, that can be one side of the coin, and the other side can be, as you said, like the yak shaving. You get too much information. I think usually it's the too little information side that ends up being the bigger problem.

Um, so yeah, you do have to be skeptical. You have to play devil's advocate with it, um, because they are programmed to produce an answer. [00:11:00] They are, they, they are yes. They are additive, uh, things, and even if you tell them to say no, that's kind of just another form of yes to them. And, uh, also they are... They kind of favor a certain length of answer.

Uh, they are programmed to do that probably, and they will write you a great summary that will take out some of the detail, and maybe get you a little too-- not only tell you you were right, but de-emphasize something that actually was a little bit important that you'd been talking about. So it's important to be skeptical and keep reintroducing that context that it might lose.

And then I think similarly, another thing is just plain old distraction. It's not too different from when you start to look up a recipe and three hours later, down a Wikipedia rabbit hole, you haven't made dinner

**Matty:** Now you're figuring out how to grow your own herbs in your windowsill and all of that, and you're,

**Katie Kodes:** Yeah.

**Matty:** having

**Katie Kodes:** I mean, 'cause for...

**Matty:** dinner. Yeah.

**Katie Kodes:** the, the one that really kind of I was [00:12:00] describing when that whole griping as a service thing came up was I ran into a requirements conversation where it was kind of, I was consulting and a team said, "Hey, we wanna automate the boring stuff. What programming language should we choose?"

And I said, "Well, can I see the, the boring stuff? Can I see the recipe books for that?" And they said, "Well, not so much. We're still working on getting those 'cause people are being territorial about them." And so what did was I asked an LLM, "Okay, what about this product might make people territorial?" Somebody has been paged at 3:00 AM.

Somebody is not happy if they're being territorial. And so what about this product are the common pain points of these top possible programming languages that I think might be of interest? Which ones could solve common things that produce this kind of infighting, and why or why not might they solve those problems?

So again, you really are combining very technical stuff with very emotional stuff. It's not just [00:13:00] pure venting

**Matty:** That makes sense. And I think, you know, you, you touched on this, which is about the more context that can be given, the more effective this is. And so, like, being able to give, you know, the LLM you're talking to should probably be able to see the code base, to be able to see the patterns that already exist, to see the things that exist, if, if appropriate. Be able to see your Slack, you know, and kind of look... I've, I've run into this with, I've, I've done similar things, uh, where I'm sitting, I'm trying to build something, and I know we have some standards in engineering, I don't wanna reinvent the wheel, so I'll be like, "Hey, can you... What, what is everybody else doing when it comes to that?

Or are there any standards happening with that?" Because this is, you know, like in the era of, you know, I don't wanna necessarily say vibe coding, but when you're, you're enabling agentic development with folks who maybe are outside of the, the standard flow of engineering and stuff like that, this is how you end up with a whole bunch of apps that all wrote their own auth, You know, 'cause there's, there's like five or six different great ways [00:14:00] to do that, but it sure would be great if we all were using better au- we're all using something standardized. And you may not know what those standards are, And again, pre-LLM, pre-everything, like how would we have done that? We would've gone and tried to find them ourselves and read them and do all of that.

But if you can say, "Okay, let the robot absorb that and be able to have that so I can have an intelligent conversation about it," but I didn't have to go read 15 different applications' design docs and look at their code base thoroughly just to see what authentication library we apparently standardize around on, around here, you know?

**Katie Kodes:** I think you've got a good point that the closer you are to being able to do that sort of ideal, you know, software factory sort of thing where you can just let the agentic development rip, probably the farther you are away from needing to think about, "Oh yeah, the LLM also can process English and my feelings."

**Matty:** Yeah. Well, I,

**Katie Kodes:** That, that this is for when you don't have all the docs and

**Matty:** Well, and I think even if you do have all the docs and stuff like that, it's still valid because there's things that are [00:15:00] not documented, things that are about how we work as an organization necessarily, you know, who is involved, who's on call, who has to support this, you know, kind of thinking those things through. I would imagine one of the things, too, is building your own context for that over time as well, and, uh, the LLMs are getting very good at managing their own memory and, and stuff, although sometimes to the detriment because things change. And, you know, I, I, I, I continually have to remind my LLM that this particular product positioning that was true a year ago is not, even though it was, like, the most important thing, like, that was a...

And it keeps wanting to go back to, like, "Oh, well, it's about this." And I finally had to, like, go into its memory and be like, "Just forget about this." Because, because the memory is better than our memory. We for- you know, recency effect is not a thing. You know? Whereas I'm like, I already... You know, or, you know.

So being able to load that and, and continually sort of, Sometimes I find it just helpful to ask the LLM and say, "What do [00:16:00] you remember about this? What do you think is the current story about this?" And sometimes we'll know when something's, or like, sometimes you don't know how to say what's right, but you know how to say what's wrong.

**Katie Kodes:** You sa- you saying to ask it questions is reminding me, I, I, I still, I have a little bit of this theory that the more you've been to couples counseling, the better you're gonna be as an LLM prompter. A- yeah, again, you know, well, did I hear you say that? What do you think? And I do think it is a very interesting thing when we program with natural language processing machines, how much, you know, to some degree we are an, a linguistic animal, and it, it largely comes down to the thing, so many different things that we've invented about how to language as animals outside of computing

**Matty:** I, I think and what's, what's a little helpful, like the things we can learn from our experiences maybe in family or couples counseling, you can get away with it a little bit easier talking to an LLM 'cause you don't have to worry about hurting its feelings and challenging it. But, you know, I also am a big fan [00:17:00] of telling my prompt through my system prompt that I need citation for everything. You know, like tell me why you came up with

**Katie Kodes:** Yeah

**Matty:** and it can, it can come back and it can sometimes will come back and be like, "I don't know, I just... This is what people like to do," or, "There's this design doc from four years ago I found that says this." Um, because like you said, sometimes it's just like lost.

It doesn't necessarily tell you unless you, unless you ask it. so I'm have become a fa- you know, begrudgingly, you know, to, to use these agentic tools. It's the way that it is. We've got to figure out how to do it safely where it comes in. But one of the biggest keys to me with all of this is the human in the loop, the people in the loop.

You know, we don't ju- like you say, you don't just sort of let it rip and be like, "Cool, I'll come back in an hour and you've written my entire design document and already sent it to the engineers and it's all done." if you're gonna have the LLM kind of build those requirements docs for you or the output, like where do the humans in the loop come into that, into the output that comes from [00:18:00] that?

**Katie Kodes:** I think that the very first thing is if you're griping, you, you're the first person who sees it 'cause you need to do some censorship because you are still at work. Um, you know, you still shouldn't be calling people names even though you should be speaking like you're in therapy and saying how you feel.

I think that adding emotions is a person- perfectly reasonable thing to do in the privacy of your LLM. Um, you know, also though, do remember you might not be the first person to see it. It might be going through a firewall that might be analyzing it. So again, keep that in mind. But overall, you should be the first person looking at it.

If you were starting to veer into complaining about a colleague, make sure that there is nothing that accidentally slipped through to that proposal of a roadmap for change

**Matty:** I,

**Katie Kodes:** might imply that anybody wasn't doing their job right.

**Matty:** and just sort of if you are using your enterprise's or your organization's agentic tool, assume that everything you typed in there might as well have been in the public Slack, [00:19:00] 'cause

**Katie Kodes:** Yes

**Matty:** where that's gonna go. So you can anonymize, you can think through the...

I mean, I don't think people are sitting and reading every single message back and forth that happens, but, you know, I've been trying to... And it's, it's hard because we become very used to this, right? We become used to just sort of getting off the cuff to that, and it's like, um, and also it will remember those things, and it will keep coming up. be like, you know, like I've, I've said things where I'm like, "Oh, I wanna make sure the CTO has seen," and then it has decided that means that our CTO has to like read every line I ever write in our blog, which is not the case. But it was because at one point I was like, "Ooh," 'cause it was something very specific that I wanted the feedback from that.

So like it will, in its, in its effort, while I'm anthropomorphizing this or whatever, wherever the math is that makes it look like effort to try to be helpful, those things will, will keep coming up. And then, also you're me and you're showing other people how to do things with LLMs, you never know.

It's not deterministic. You never know what's gonna come up in that feedback. I, [00:20:00] I have my LLM prompt set up to talk to me like a terminally online edgelord, because that amuses me, and it, it never happens in the output, right? Like if I, if I'm like writing a document, it doesn't write that.

**Katie Kodes:** Yeah

**Matty:** talks to me.

But there have been times I'm showing other people in the team, I'm like, "Oh, let me show you this skill I wrote," or, "This is how you can use Claude to do XYZ," and of course they're seeing it that way. And it's funny and laughable, but you know, I haven't yet had to do... We have a workshop, uh, that's using, uh, MCPs and stuff like that, and I haven't let it yet, but I'm, it will be slightly amusing the first time that I have to do that because, Although now that, yeah, if I, if I'm using my own system prompt, it's sort of like if you're ever demoing something, like run it somewhere else.

**Katie Kodes:** Yes

**Matty:** So Can you think about, like, maybe a time that you found tooling like this catching something that a human might have missed, or the other way around where maybe something didn't get caught?

**Katie Kodes:** I think that in general, my patterns are that it, it expands my lack of knowledge and I catch [00:21:00] its oversimplified lack of context. Um, again, I am able to take a vendor commercial off-the-shelf thing that some team that I'm consulting for is trying to better support and learn things that have literally never been blogged ever on the planet about how maybe Ansible in- would interact with that particular vendor thing, very, very quickly.

It's able to expand and make the same kinds of associative leaps that I would if I actually knew all those things, but I don't know all those things, and so I'm able to walk away with it saying like, "Oh, and by the way, this one programming language is terrible about leaking secrets, uh, unless you use it with this particular cloud architecture.

So if you choose this, you're probably gonna want that." It, it always ca- You know, it's, it can be very good at catching those kinds of things, especially when I put in, again, my emotions, my fear. Like I'm fr- afraid of something going wrong, and I can just give it a [00:22:00] very emotional prompt and it will give me tons of technical detail that I wouldn't have otherwise caught

**Matty:** That's, that's interesting. The, you know, get... But even I haven't really thought about this, but now it's, it's starting to... 'Cause one of the sort of running gags about this internal tool that I built is I was like, for an internal marketing tool, it is the most productionized, ops-oriented whatever, which part of that is just 'cause that's where my brain goes. But even taking that another way, when I'm building it, I am probably inflicting my cis admin paranoia into what I'm build- You know, sitting there and saying like, "Oh, what about..." And, and that goes back to sort of my thing with like can build secure and s- res- uh, reliable and systems using Agentic, but you can't just...

But you have to sort of know what you want. You have to know that that matters to you. And I, I, I'm sort of thinking backwards about how much of this was, there were times when I would sit down and I would say like, "Okay, I know I have this particular thing. We need to build this into it." [00:23:00] But there is a little bit of my personality that's come out in this application, probably just by the things that I would push back on, the th- the way that I would frame requests to the LLM, which is saying like, "Hey, build this thing, but I wanna make sure that the, you know, the URLs are, you know, with this kind of a key or something like that."

You know, that, that I'm probably not even realizing I'm doing that as a requirement or a design decision. They're just like how I'm talking to it because that's where my institutional, you know, infrastructure scar tissue comes out, right? Whereas you're not gonna see it, whereas like someone who's like a much better software engineer is gonna think about how do we make this a factory?

How do... And, and you're not gonna say, you're not gonna say that, but like the way you communicate is probably reflecting in what you're asking it to do.

**Katie Kodes:** And you know, I think, okay, yeah, what it can add that I would- would've otherwise missed, [00:24:00] I think that that could be part of how junior engineers can become senior engineers even though it's harder to get that pair programming time these days with the LLMs, is no, you don't know how to ask it to... Maybe you don't yet even know the word observability, and you don't kn- so you don't know how to ask it to add observability.

But you do know how to say, "I think so and so hates me, and I don't know why. Here's our stack. Here's the code base. Here's the docs. Why do you think they hate me?" And you know, first of all, it might help you realize, no, Steve, they probably don't hate you. They're just... But also, you will probably learn something about, and it'll say, "Have you thought about adding observability so that you can prove to them that everything's okay?"

**Matty:** Mm-hmm.

**Katie Kodes:** might learn a new vocabulary word that way. So I think that even just this, this emotional dumping and rubber ducking can help people expand their knowledge in ways that are becoming harder now that it seems like everything's too much about velocity and not about, enough about [00:25:00] mentorship.

**Matty:** I don't always remember to do it because I haven't really thought about how to like kind of codify this, but when I'm working with something that's a little bit newer to me or I'm, as a stack I don't really know as well when it comes to that, will, I will push back and say, "Explain this." I will do a lot of explain like I'm five. I will say, "Okay, so that's fine. We're doing, we're, you know, we're, we're bringing in this particular library. Te- tell me why." And part of that goes back to the like, where I've told it to cite everything and explain, but sometimes I'll just be like, "I want to understand." The same way that if I was a junior to someone more senior and they would say, "Hey, you need to go do blah, blah, blah," I'd, I might, I would say, "Why? Explain

**Katie Kodes:** Why?

**Matty:** yeah, why?" You know? And just say, "Why, why are we doing that?" And that's how we can, we can grow. And also sometimes even if you know it, just going back and pushing back and saying, "Wait, explain to me why you came up with this idea." 'Cause sometimes then we'll find the holes, and they'll say, "Oh, well, because we're, you know, blah, blah, blah."

And [00:26:00] I'll be like, "Well, no, bec- I know why, I see why you got there, but in this particular case, I want to do it this way because of this thing you don't have any context about." You know? Like, know, I will find myself building things that are using TimescaleDB that don't really need it, but because I know I'm building something and I wanna make content out of it, right?

So I'll say like, "Okay, let's go do it this way," but you explained why and now we understand. And that also is what helps... I think it does a bunch of things, right? One is it can help us learn. We learn more things, we know more things, we learn some new vocabulary words where it comes in. That also helps our understanding of what's happening, because you get to a certain point where you're just guiding it to submit PRs and going like, "Okay, all the tests pass.

Cool." Like, what value are you providing anymore? And then also you don't... And then you can get to a point where you're like, someone'll be like, "How does this work?" And you'll be like, "I don't know. Let me go ask my LLM. It built it. I don't even know what this does." And that's kind of dangerous, too. You know, when [00:27:00] you're, we were thinking, you know, security folks come to you and they're like, "Wait a minute, Katie, why is this this way?" you could always, you know, ask, ask Claude to explain it back and fix it and do whatever, but like, but at a certain point, you, you should be able to justify the decisions that were made, you know? so what... If there was a team that wanted to try doing this, or an individual, it doesn't have to be a team, you know, what, what would you tell them for, if they wanted to start playing with this idea next week? You know.

**Katie Kodes:** I think I would say mostly you're gonna wanna start with caution. Start on paper, start with Dictaphones. You're gonna have to get used to what it feels like to be emotionally open while being professional. you know, this can be kind of your budget blameless postmortem mediator, but it's, it's gonna take practice.

You might want to record it a few times before you do that. You might want to... And, you know, and learn, I wanna say learn your surveillance [00:28:00] landscape. Learn if you do actually have any text-to-speech or speech-to-text tools where you can record something in Windows Sound Recorder and then use Microsoft, speech-to-text to just get that into a Word document, that then you can backspace out the part where maybe you said something you kinda regret

**Matty:** Mm.

**Katie Kodes:** I- are those actually, you know, do you have a place where you have a little expectation of privacy? Because that could really help you actually get used to this and get used to the process, um, without getting fired.

**Matty:** Yeah. Always,

**Katie Kodes:** know

**Matty:** good, good way to... You know, that just gave me an idea which I would love to like, maybe I should train my LLM to say that I believe strongly in blameless postmortems and learning from incidents, and that we should apply that when we're trying to figure out things. Luckily, I'm, I'm not, I'm not sitting on top of production stuff too much, so if I'm having my LLM help me troubleshoot a problem, first of all, chances are it was my fault 'cause I'm probably the sole developer.

But, that's interesting [00:29:00] context to also feed into that, like kind of what your philosophy and how you think about these problems is

**Katie Kodes:** And I know that sounds silly, but I actually would tell people to look up the nonviolent communication model and get one of their little feelings charts and needs charts because it's, it's meant for difficult conversations interpersonally outside of the LLM. But if you're also looking for a way to say, "So and so is a moron.

This is a dumb idea," but you are pretty sure that all of your prompt context goes into a shared team thing that everybody's gonna l- start their morning with, with their cup of coffee on Slack the next day, that's probably... You know, having one of those on your desk will help you say, "I feel frustrated about the logging situation.

Would we be able to find a way to not max out the storage?" When, when I see CPU thrashing, not thrashing, I feel

**Matty:** Is there any, any [00:30:00] other bits around this that maybe we didn't, we didn't get into that you've, that you've observed, that you've worked with? Any other, any, maybe anything you're still maybe a little unsure about with this, uh, this approach?

**Katie Kodes:** I feel pretty solid about the approach. It's the LLMs themselves where I just, I have so many ethical concerns. Um, I think people should follow Timnit Gebru, and I think it's Emily Bender, um, on the socials right now. I think that's Blue Sky. But yes, this idea that, I don't know, is it okay that we're all using the big plagiarism machine?

That what we're talking about today works because of that? Um, I, you know, do, you know, the, the labor implications, the, the environmental implications, that's more where my concerns are. I d- I think, though, that the idea of if we're using it, bringing our whole emotional selves to this place that is now a slight place of private linguistic processing at work is really, really a [00:31:00] gift

**Matty:** I love that. I love that. Well, you head over to arresteddevops.com/gripingaservice, we'll have this episode's show notes. We'll, we'll put a link to Emily Bender's BlueSky or whatever socials we find in there and maybe some other, other goodies. if you go to arresteddevops.com/itunes, you can leave us a review in the Apple Podcast store, maybe I'll read it, uh, which is a reminder to myself I need to go look and see 'cause I've been telling people to do that and not looking. And, uh, we are found all kinds of places where fine and less fine podcasts, uh, can be found, and we have a list of all of those at arresteddevops.com/subscribe. So Katie, thank you for joining me today. This was super interesting. I have a lot to think about and a lot that I might, uh, go load into, into the way that I'm, I'm doing my work.

Hopefully it, other people have some great ideas now too.

**Katie Kodes:** Awesome. Well, thank you. It has been really exciting to be here

**Matty:** This is Arrested DevOps, and remember, there is always DevOps[00:32:00]

**Katie Kodes:** In the banana stand
