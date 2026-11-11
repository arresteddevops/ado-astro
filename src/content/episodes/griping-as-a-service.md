---
title: Griping as a Service with Katie Kodes
description: "Katie Kodes, a DevOps architect, and Matty talk about griping to an LLM as a way to dig up what requirements documents leave out. They get into what the model does with your feelings, who should read the output before anyone else, and why Katie tells people to start on paper."
date: 2027-01-06T06:00:00.000Z
publishDate: 2027-01-06T06:00:00.000Z
episodeNumber: "215"
podcastFile: arrested-devops-podcast-episode215.mp3
podcastDuration: "00:32:01"
podcastBytes: 15436806
episodeImage: episode-img/griping-as-a-service.png
episodeBanner: episode-img/griping-as-a-service-banner.png
images: []
guests:
  - person: kkodes
    snapshot: kkodes
hosts:
  - mstratton
sponsors: []
aliases:
  - /215
  - /gripingasaservice
youtube: 6Ev-JzqA_H8
transcript: griping-as-a-service
explicit: "no"
---
## Not Allowed to Have Fun on Computers

As a kid, Katie couldn't have an AOL email or a GeoCities page. She had to Telnet and Elm and Emacs to check her email and FTP HTML onto a server, because she "wasn't really allowed to do fun things on computers unless they involved an enterprise lesson to be learned." Her career started with data entry, since she was a very fast typist, then database development on Salesforce and Oracle. Typing fast also got her into the room when people started talking about the runtime of applications and lifting and shifting from cloud to cloud. Her advice from that stretch: "be friends with a DevRel because you'll find out that things have names that you can Google and buy O'Reilly books about." What she took from following the DevOps movement is that CI/CD, data, app dev and ops are all things the whole software development life cycle touches.

## A Departing Junior and a Talk Nobody Had Given

Griping as a Service started when Katie described her process of chatting with LLMs to help with requirements analysis in tough situations, and someone asked whether she could gripe to an LLM about something she had just witnessed. A junior developer was leaving without having learned enough, because people were protective of the systems and wouldn't let them touch anything, which felt like a wasted opportunity to automate. "Yeah, probably. It's kind of griping as a service." Katie isn't sure whether the phrase was hers or the other person's. Matty's verdict: "good DevOps copy, great DevOps deal."

About a year and a half ago Katie was hearing a lot about vibe coding, prompt engineering and software factories, and not much about the linguistic side of using LLMs in the more personal parts of the software development life cycle. She Googled it, found nothing, and thought, "Well, now it's just becoming a talk."

## What a Requirements Doc Leaves Out

Requirements describe what you know you want to build, maybe with a footnote about areas to research. What they leave out, Katie says, is why things didn't make it into the document in the first place. Those are decisions that got axed, buried under "a lot of hard feelings" and memories of interpersonal conflict and calls you thought were stupid for the organization. Griping brings them back. An LLM can help you remember the stories of why something didn't make it, compare them against your actual requirements, and bring in what it knows from having "read the whole internet about the technology at hand," which gives you "aha moments" you might not otherwise have.

Matty calls it rubber duck debugging with extras. The conversation is captured, context comes in quickly, and a memory system can do what a colleague does when they remember you complaining about the same thing before, at a larger scale.

## Your Boss Has a Point

Katie's example starts with a plain request to restart a server, which gets you a PowerShell script. Add the feelings: "I want to automate our server restarts, but my boss won't let me touch anything and won't tell me the password. I think that's a terrible idea. I'm so frustrated we never do anything around here." Now the LLM comes back with "Your boss has a point." Moving from interactive to unattended means the job could run at 2:00 in the morning with nobody there, so you may want an orchestrator that requires two humans to sign off. The password can't live in the Git repository next to the script either, so "you're gonna need to ask purchasing to get you some sort of secrets vault from your enterprise cloud provider."

Katie doesn't know why this works. Her theory involves the nearest neighbor math under the hood, and that "desperate people got better answers on Q&A forums."

## Monitoring Versus Observability

Matty calls griping to an LLM an effective yak shave, as long as you tweak how you work with it. His system prompt tells it to push back, question decisions and not be sycophantic, because a model that says every idea is great takes the pressure testing away. He tries a DevOps metaphor: the standard requirements process is monitoring, and griping to the LLM is observability. With monitoring, "the first thing I have to do is go back in time and put a monitor on this six weeks ago so I was capturing this data." He admits he isn't sure how well the metaphor holds up.

## Where It Goes Wrong

"You run out of tokens," Katie says, and then gives the longer answer. You can get too much information, but usually too little is the bigger problem. You have to be skeptical and play devil's advocate, because the models "are programmed to produce an answer," and "even if you tell them to say no, that's kind of just another form of yes to them." They also favor a certain answer length, so a summary can drop detail and de-emphasize something that mattered. Her fix is to keep reintroducing context the model might lose. Then there is plain distraction, which she compares to looking up a recipe and ending up three hours into Wikipedia without having made dinner. Matty adds that you end up learning to grow herbs on your windowsill.

The situation Katie was describing when the idea came up was a consulting job. A team wanted to automate the boring stuff and asked which programming language to use. Katie asked to see the recipe books, and they couldn't show her because people were being territorial about them. So she asked an LLM what about the product might make people territorial. "Somebody has been paged at 3:00 AM." She also asked which common pain points of the candidate languages might help with the infighting. In her words, "you really are combining very technical stuff with very emotional stuff. It's not just pure venting."

## Context, Memory, and Couples Counseling

Matty wants the LLM to see the codebase, the existing patterns and the Slack, so he can ask what everyone else is doing about a thing without reading 15 design docs. Without that, you get "a whole bunch of apps that all wrote their own auth," when there are five or six good ways to do it and everyone should be using the same one. Katie says the closer you get to a full software factory, the less you need an LLM that processes "English and my feelings," and that this is for when you don't have all the docs. Matty disagrees. Even with docs, plenty goes undocumented, like who is on call and who has to support the thing.

Memory cuts both ways. Matty had to go into his LLM's memory and tell it to "just forget about" a product positioning that was true a year ago and kept resurfacing. He now asks it, "What do you remember about this? What do you think is the current story about this?" because "sometimes you don't know how to say what's right, but you know how to say what's wrong."

Katie has a theory that "the more you've been to couples counseling, the better you're gonna be as an LLM prompter." Matty adds that you can challenge an LLM more easily than a person because you can't hurt its feelings, and that he makes his system prompt demand citations. Sometimes the answer comes back as "I don't know, I just... This is what people like to do," and sometimes as a design doc from four years ago.

## Read It Before Anyone Else Does

Asked who should read the output first, Katie says you should. You are still at work, so some censorship applies, and you still shouldn't be calling people names. Emotions are fine "in the privacy of your LLM," but the conversation might run through a firewall that analyzes it. Make sure nothing slips into the roadmap for change that implies a colleague wasn't doing their job.

Matty says to assume that anything typed into your organization's agentic tool "might as well have been in the public Slack." The memory makes it worse. He once mentioned wanting the CTO to see one specific thing, and the LLM decided the CTO had to read every line he ever wrote on the blog. His own system prompt makes the LLM talk to him like a terminally online edgelord, which never leaks into documents but has shown up when he demoed things to colleagues. His rule: "if you're ever demoing something, like run it somewhere else."

## "Why Do You Think They Hate Me?"

Katie's pattern is that the LLM expands her lack of knowledge and she catches its oversimplified lack of context. She has learned things "literally never been blogged ever on the planet" about how Ansible would interact with a vendor product a team was supporting. It once told her that one programming language "is terrible about leaking secrets" unless it's paired with a particular cloud architecture. Putting her fear into the prompt gets her tons of technical detail she wouldn't have otherwise caught. Matty notices the same thing from the other side. His internal marketing tool is the most operationally sound thing he has built, because his sysadmin "infrastructure scar tissue" shapes how he frames requests, and he probably doesn't realize he's stating requirements.

Katie thinks the same habit could help junior engineers become senior ones, at a moment when pair programming time is harder to get. A junior may not know the word observability, but they can say, "I think so and so hates me, and I don't know why. Here's our stack. Here's the code base. Here's the docs. Why do you think they hate me?" The first thing they may learn is "no, Steve, they probably don't hate you." The LLM might also ask, "Have you thought about adding observability so that you can prove to them that everything's okay?" Katie worries that everything is about velocity now and not about mentorship.

Matty pushes the same way. He asks it to explain like he's five, asks why it chose a library, and sometimes finds the holes. If you're only guiding it to submit PRs and saying "Okay, all the tests pass. Cool," he asks, what value are you providing? Worse is when someone asks how it works and the answer is "I don't know. Let me go ask my LLM. It built it." When the security folks ask why something is the way it is, you should be able to justify the decisions.

## Start on Paper

For a team that wants to try this next week, Katie says to start with caution. "Start on paper, start with Dictaphones." You have to get used to being emotionally open while staying professional, and she calls the practice a "budget blameless postmortem mediator." Learn your surveillance landscape, she says, and find a place where you have a little expectation of privacy. Record yourself in Windows Sound Recorder, run speech-to-text into a Word document, and backspace out the part you regret. That lets you practice "without getting fired."

Matty wonders about telling his LLM that he believes in blameless postmortems, so it applies that when they troubleshoot. Katie suggests the nonviolent communication model, with its feelings chart and needs chart, for the moment you want to say someone is a moron and know the whole prompt will end up in a shared team thread. Instead: "I feel frustrated about the logging situation. Would we be able to find a way to not max out the storage?"

## The Big Plagiarism Machine

Asked what she's still unsure about, Katie says she feels solid about the approach. The LLMs themselves are where she has "so many ethical concerns." She asks, "is it okay that we're all using the big plagiarism machine? That what we're talking about today works because of that?" Her worries are the labor and environmental implications, and she says people should follow Timnit Gebru and Emily Bender, both on Bluesky. She still thinks that bringing "our whole emotional selves" to private linguistic processing at work is "really, really a gift."

## Links to Resources Mentioned

- [Emily Bender on Bluesky](https://bsky.app/profile/emilymbender.bsky.social)
- [Timnit Gebru on Bluesky](https://bsky.app/profile/timnitgebru.blacksky.app)
