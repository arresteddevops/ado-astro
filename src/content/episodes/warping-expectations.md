---
title: Warping Expectations with Robert Sweetman
description: "Robert Sweetman, a DevOps engineer who came up through project management, and Matty talk about what happens when an LLM-generated plan lands on an engineer's desk with a date already attached. They get into why the technical lever got faster while the people work didn't, and why the fix is telling people early."
date: 2027-01-20T06:00:00.000Z
publishDate: 2027-01-20T06:00:00.000Z
episodeNumber: "217"
podcastFile: arrested-devops-podcast-episode217.mp3
podcastDuration: "00:40:59"
podcastBytes: 19679351
episodeImage: episode-img/warping-expectations.jpg
episodeBanner: episode-img/warping-expectations-banner.jpg
images: []
guests:
  - person: rsweetman
    snapshot: rsweetman
hosts:
  - mstratton
sponsors: []
aliases:
  - /217
  - /warpingexpectations
youtube: 1K6qP5V5q_k
transcript: warping-expectations
explicit: "no"
---
## A Pile of Its Own Making

Robert describes himself as a "basic DevOps engineer" in the classic meme sense. He spent years in project management before getting pulled into automation through "the world's longest PowerShell script that would randomly fail," and his introduction to DevOps was adding Write-Host lines to find out which point it collapsed at overnight. The big salaries attached to the field helped, as did watching Jez Humble's talks. He hasn't escaped Terraform since.

PowerShell leads Matty to his first meeting with Jeffrey Snover, who didn't love hearing it was about as readable as Perl, and to a DevOps Cafe episode with John Willis and Damon Edwards. Snover's point there, as Matty tells it, was that Unix is easier to automate because it's file-based, while Windows is API-based and the APIs had to be built first. Robert once met Snover and immediately made disparaging comments about Linux. The Linux versus Microsoft fight is over, he says, and now it's AI versus not, or "don't rewrite it all in Rust." "There's always a campaign somewhere in the background."

## Warping, Not Changing

Matty liked Robert's word for the topic. Warping carries weight that "changing" doesn't. Robert's version starts with how delivery has moved from big design up front, to Agile that he thinks is now "two-week chunks" with little to do with business value, to a third party in the mix: an LLM that hands you a lot of confirmation bias with its answers.

The old way, someone asked the engineer how long a thing would take and got a target with caveats. Now someone can put the project into "the sausage machine at one end," get a plan out the other, and tell the team they have this much time without asking them. The same thing happens at smaller scale, with two pages of instructions for Azure that tell you to press buttons that don't exist in the UI. Within about three minutes Robert knows none of it is real, but the document is "absolutely valid" to the person who produced it, and the engineer who says it doesn't work like that is "being difficult."

## The Lever Got Faster, the People Didn't

Robert is plain that the tools are great. You have backup and something to bounce ideas off, and he wants references from it rather than taking the black box on faith. The problem is that management now assumes everything should be quicker. Moving something from on-prem to the cloud looks like a technical challenge, and it's really about which machine, whose access, who sets the password, the networking, the naming conventions. None of that got faster. "You can go around the loop quicker, and get yourself in the right pickle as well."

So the engineer inherits the work they might have been avoiding, quoting Jez Humble: nobody becomes a programmer because they want to talk to everybody. It's a social problem, and Robert says it exposes organizational maturity quickly. Do you know who owns what, and can you find out? "You can't ask Claude." Matty tried, asking an internal agent who the product owner of something was, and it named someone in marketing who has nothing to do with engineering.

Waterfall gets a turn too. Matty's example is a site redesign at apartments.com that began before Google Chrome existed and launched when Chrome was 85% of their traffic. Robert's counterpoint is that faster app-building has become the new baseline, so when a massive, integrated piece of work with sensitive data and sharp edges shows up, the assumption is that it'll go as fast as the last app. Anyone doing data work knows the data has been cleaned "seven hundred times" before it's useful, even though "it's in SQL, it's fine."

## The Lollipop Problem

Once a target date is set, Robert says, the flexibility to discover things along the way is what's missing. "You've told somebody that they can get a lollipop in six weeks, and if you wait until the day before to tell them they aren't getting their lollipop, they'll lose their minds." Getting better at that means getting better at acknowledging reality and at being disappointed, and at handling other people's disappointment. Sadness, he says, is having an expectation that wasn't met.

Matty comes at it from DevRel and marketing, where a launch date drives weeks of work and a shift to six weeks later lands hard on the person who spent three weeks on the demo. He would take "maybe we'll make it; maybe we won't" over finding out the night before. The principle is the old one, empathy and communication, and he says everything is a DevOps problem to him.

## Control Is a Communication Tool

Matty wonders whether agents are making that worse. People are "armies of one" now, and he offers another Jez Humble line, "control is a communication tool for developers," then asks whether PRs still communicate anything when they're checkpoints for your robots. Robert's version is the 200-file PR and "going for a long walk to think about your life choices." Do you wade through it or tell your own agent "summarize this, please, for the love of God"?

Matty admits to letting his Claude send Slack messages for him and then retyping the question himself. Sending someone a wall of agent output is borderline disrespectful. "You couldn't be bothered to write this, why should I read it?" Robert agrees that communication will be one of the things separating people, and fundamentals are the other. You still need to know what good looks like, and you can tell which of two people given the same deployment task understands networking. He also notes that "a non-zero number of issues" get solved faster by having an actual conversation.

## Learning While the Tests Run

Matty's internal marketing app is the example for fundamentals. He built it, and it's heavily operationalized because he knows what he wants to exist (he knows he needs a pre-signed URL, for instance). He also tells his LLMs to explain things like he's five, and prefers learning why it picked Astro over asking it to one-shot a rewrite. It doesn't come for free, he says, and it slows you down.

His test suite takes seven to eight minutes with about 7,000 tests, and he suggests that's the moment to ask the agent to explain something instead of spinning up another agent. The tests and guardrails are also what lets marketing teammates who aren't engineers push PRs safely, which he credits to fifteen years of DevOps practice: "if I care enough, I'm gonna write a test and then you can't get past my test."

Robert's grandmother's phrase is "hurry up and wait," and he adds "trust but verify." A task that took two weeks now takes two hours,, and you should spend some of that time thinking about what is being done, because it can come back and bite you later. The science fiction of the '70s promised automation would usher in leisure, and Robert notes it seems to be making everyone run faster. Matty's own SSH-from-his-phone setup to check on agents while walking his dogs got locked down by his employer, and his teammates told him that was a good thing.

## Does It Need to Exist at All

Robert closes on the 10x number of balls in the air. "You can be hella busy and achieve none of those things." If you can solve someone's problem directly, within policy, you should, but there's also a lot of stuff being created that doesn't do much because nobody asked whether it needed to exist. "Do we need code for this? Maybe we just get these people to talk to each other, on a more regular basis or something crazy and, you know, 19th century like that."

Matty says people need to unwarp their expectations of themselves too. Robert agrees: "the job is to teach everybody how to treat you," and it starts with being nice to yourself.

## Links to Resources Mentioned

- [Gergely Orosz on Waterfall in the age of AI](https://x.com/gergelyorosz/status/2120058798178009574)
