---
title: DevOps in a Microsoft World with Jessica DeVita and Jeffrey Snover
description: Is DevOps just for the open source world? Can you do DevOps in a Microsoft shop? What are some of the tools and capabilities available for Windows, Azure, and .NET professionals who want to approach work in a DevOps model? Microsoft DevOps Evangelist Jessica DeVita and Jeffrey Snover, a Distinguished Engineer at Microsoft and the Lead Architect for the Windows Server and System Center Division, talk with the ADO crew about how Microsoft approaches DevOps.
date: 2015-02-13T02:21:05.000Z
publishDate: 2015-02-13T02:21:05.000Z
episodeNumber: "30"
podcastFile: arrested-devops-podcast-episode030.mp3
episodeImage: episode/img/microsoft-devops.png
episodeBanner: /episode/img/microsoft-devops-banner.png
images:
  - /img/social/fb/microsoft-devops.png
guests:
  - person: jsnover
    snapshot: jsnover
  - person: jdevita
    snapshot: jdevita
hosts:
  - mstratton
  - thess
sponsors:
  - pagerduty
  - datadog
  - 10thmagnitude
aliases:
  - /30
  - /microsoftdevops
youtube: 9qfX_K-5gTk
transcript: microsoft-devops
explicit: yes
---

## The GUI as Strength and Weakness

Jeffrey Snover, a Distinguished Engineer and lead architect for Windows Server and System Center at Microsoft, found DevOps through John Willis's podcast and Gene Kim's book and "fell in love with it." Jeffrey says a lot of it was familiar, since Jeffrey wrote the Monad Manifesto behind PowerShell in 2002, and that it echoes the quality revolution of the 1980s at Storage Technology. Jessica DeVita, a technical evangelist at Microsoft, runs IT camps where Jessica talks to traditional enterprise IT people about configuration management and version control. Jessica says the IT pros at those camps are frustrated after being promised solutions that haven't worked, can't tell "the wheat from the chaff" among tools, and often work in environments that aren't supportive of the person at the console.

Jeffrey says Microsoft's strength in GUI tools is also its weakness, because "it's very hard to share a bunch of mouse clicks." Deployment guides run to huge books of screenshots that say click here, and the PowerShell equivalent is a page and a half. Some people love the change, and others hoped they were done learning. Jeffrey's advice: "If you don't want to learn anything new, get into the lumber business," since in IT "you're riding the tiger."

## The Body Follows the Head

Asked about Microsoft's turn toward open source, Jeffrey says "organizations are like gymnastics: the body follows the head." A new CEO brought a fresh approach of meeting customers where they are, and for people who'd been trying to do this for years, it had not been a friendly environment before and now is. Jeffrey's way of explaining it to skeptics is Azure, where Microsoft makes more money from 10 Linux instances than from 2 Windows ones, and its services are REST APIs usable from anything. Microsoft, Jeffrey says, is "becoming a no-adjective software company." Jessica, who joined a couple of months after the new CEO, says the open source community has cultural lessons to teach the enterprise.

Jeffrey says this is the beginning of a long journey, with things already open like OMI and Desired State Configuration, and that the only reticence Jeffrey has seen is "here's all the things on my plate." Jeffrey adds that Microsoft is "incapable of sustained error": it screws up constantly, but people call each other out without firing anyone, which works like an immune system. Matty ties it to the blamelessness episode, number 28.

## Why Not Group Policy or SCCM?

Matty says every way Microsoft has told Matty to configure Windows servers has been tried. Jeffrey agrees that Group Policy and SCCM exist and are good for enterprise client management but not for the data center. Jeffrey also recalls a Passport server admin who set a policy with no way to tell which servers got it. Desired State Configuration is focused on a DevOps way of configuring servers, and says the architecture won't be compromised to serve clients. An executive once told Jeffrey to solve server configuration management, which Jeffrey called impossible, since every group thought of itself as its own CTO. Jeffrey's guide is the DevOps line that "scale times complexity exceeds our skill set," so it has to be "simple, simple, simple."

Jeffrey wanted a platform that could configure everything in the data center, including Linux, routers and storage, and that others could build on. Why not Chef or Puppet? The core difference, Jeffrey says, is that Unix is document-oriented and Windows is API-oriented: bringing awk, grep and sed to Windows, which Jeffrey once tried, didn't help, since they don't work against the registry, WMI or Active Directory. The exception is IIS, which is why Matty says the IIS cookbook is so good. Matty adds that ConfigMgr is "a big database," which you can't version and can't treat as code, and that a common language between devs and ops lets people pick up 80% of Chef or DSC quickly.

## Getting People Off Click-Next

Jessica says the challenge is Windows admins who've lived in the GUI and never developed command line skills, a generalization. Jessica likes that Server 2012 R2 shows the PowerShell before the Finish button, so you can copy it and learn, and says more of that is needed. Trevor asks about places still on 2003 and 2008, and Jessica says "you should just already love PowerShell," calling it a different podcast. Matty's line is that it's called PowerShell, not PowerScript. It's not a scripting language but how you interact with a system, so start by telling someone to "crack open a PowerShell prompt and type this in."

Jeffrey points to Don Jones's PowerShell in a Month of Lunches and a Microsoft Virtual Academy course, and tells managers to promote and reward the people who are moving you toward repeatable, automatable IT: "If you're going to retire in the next 3 years, like, forget it, you know, just click next and learn, you know, practice Bridge." Matty says there are still jobs for AS/400 admins, but it would drive Matty crazy. Jessica says automation buys time, "the real currency," and captures what a brilliant sysadmin figured out so nobody has to keep rediscovering it, "a way to really version control your culture," which Jeffrey answers with "I like that."

## Undifferentiated IT and Healthy Fear

Jeffrey doubts the click-next jobs will last, since if you're offering undifferentiated IT, the cloud will offer it cheaper, more securely and with better data protection. But if you understand the mission and provide differentiated IT, "you're printing money for your company," and they won't take a generic cheeseburger from the cloud. Jessica says the fear should be of more interesting things: automation is what people should learn, and companies will hire you to automate their infrastructure.

Jeffrey goes further: "fear, uncertainty, and doubt, these are your friends." Jeffrey tells of a karate student whose hands kept dropping until the instructor decked the student once. Jeffrey is a college dropout who comes in every day with imposter complex, and responds by working hard and performing. Jessica dropped out too, and Trevor says dropping out seemed to mean never succeeding in technology. Matty: "Is there ever anyone on this show that has a degree?"

## The Best Tool, or the Safe Bet

Matty asks how to help people who avoid non-Microsoft tools, like Lync versus HipChat for ChatOps or SCOM versus Nagios, on the "nobody got fired for buying IBM" theory. Jessica says chat culture matters more than the tool, and uses Yammer. Jeffrey says some parts of Microsoft got DevOps in focus earlier than others, that as more teams run their own services they demand better tools, and that with about $10 billion a year in R&D, "we can move fast." Jeffrey teases what's coming.

Jeffrey also argues that the best tool has to be around next year. Jeffrey worked at Digital Equipment, Apollo, Greystone, Royce Data Systems and Storage Technology, and "zero of those guys are around." Jessica says weighing whether a tool would last was always part of the job as a consultant, checking who the founder is and where it's hosted. Matty's answer is to pilot: make a small experiment with people who are on fire about the goal, the way Agile was introduced, and Matty cites the GE story from ChefConf. Jeffrey offers a dissent about letting teams choose freely, because a developer's Erlang, or an inherited product at Digital written in 18 languages including Ada ("Brad took the night course in Ada"), is a mess when that person leaves. Jessica says a language is a different level of impact than a chat tool.

## The WinRM Question

Matty asks on behalf of Brian Barry of the Food Fight Show why you can't copy a file to a server over WinRM. Jeffrey says someone is prototyping it, and that the performance can be terrible compared with SMB, and tells Matty to come talk at Build and Ignite. Matty says it will do as a minimum viable product.

## Discussion Outline

### What are some of the challenges traditional Microsoft IT Pro’s deal with moving to a more automated DevOps pattern?
- Jessica:
	- Hard to tell which tools are really going to make their lives easier.
	- Are the cultures of the companies benefiting the human side of the IT Pro?
- Jeffrey:
	- Because Microsoft has great GUI tools, they become the biggest strength and weakness of the DevOps/IT-Pro
	- The process of using a GUI is much harder to replicate in documentation. Because most of the community uses powershell  commands, Microsoft IT-Pros really need to get on board.
	- IT-Pros are never done with learning. If you don’t want to learn anything new, get into the lumber business.
### Microsoft has been making more open source integration moves, and changing philosophies to accept the Open Source community. “What up with that?”
- Jeffrey:  “The body follows the head”
- It helps when you have a leader with a fresh approach who focuses on customer service and helping users within the community
- Jessica: It is really exciting to get behind a leader that is welcoming to the communities.
- It is refreshing to see Microsoft becoming a software company, not a “Windows software company”
- Microsoft wants you to be successful. Tools such as RESTful APIs are becoming available across all OSs.
### What is the acceptance level of the OpenSource movement within Microsoft?
- Jessica: Whatever you’re running, we can host it for you
### Traditional Configuration Management in Microsoft has been difficult. What are the plans?
- Steve Morowski (http://stevenmurawski.com/) has good info for those interested in DevOpsing with Windows.  
- Current Microsoft tools are really good for enterprise, client management. Not so good for data center management.
- We need something different, that is simple, and usable.
- The problem is, everyone wants to do configuration their way. They want to be the CTO of their servers.
- Jeffrey describes the creation, and idea conception of a Microsoft Configuration Management platform that takes into account the deep differences between Linux, Unix, Windows. Describing different tools currently available, their faults, and how they might be able to connect them for modern, DevOps oriented, Configuration Management.
- The ability of chef and puppet, etc. are beneficial because of the ability of devs to pick it up, version it, and insert small parts of just what they need into the configuration.
- Jessica: We are getting to the point where Microsoft DevOps engineers are adapting the powershell. Until the powershell is adopted by IT-pros, modern DevOps tools will be a difficult push.
- You should already love powershell.
### How can people get more comfortable with powershell?
- Matt: It is not a scripting language. It is the way you interact with a system. Don’t write scripts in bash, write commands in bash that emulate the scripts.
- Jeffrey: Don Jones: Powershell in a Month of Lunches (http://morelunches.com/2011/04/01/learn-windows-powershell-in-a-month-of-lunches-1st-ed/) Step by step people get it, or they don’t. Managers really need to promote and reward the people giving you the IT that you want.
- Poweshell makes your environment repeatable, automatable, stable, etc. It is the future of the IT pro, and people must adopt it.
### Are we automating ourselves out of jobs?
- Jeff: The cloud is a great, cheap place to offer undifferentiated IT, however, if you can provide differentiated IT you are practically printing money vs. the cloud.
- Jessica: We do need a healthy fear. Not of automation though. Be scared of more interesting things. You need to learn automation.
### How do we work with Microsoft when its just not the best for DevOps-ing?
- As more people us Microsoft, the more Microsoft changes. Jeff discusses the many ways in which Microsoft is using flexible R&D to make a push for DevOps tooling, as well as some tools coming down the pipeline.
- Jessica: When choosing a tool, the longevity of the tool and the community around it is critical.
### Why can’t I copy a file to a server using WinRM?
- Jeff: Come talk to me at ‘Build and Ignite’.

## Checkouts

### Jessica

- The SoCal Linux Expo - Scale13 - a DevOps day Feb 20th - she has a discount code
- *The Field Guide to Understanding Human Error* (Dekker)
- *Lean Enterprise* book (Jez Humble)

### Jeffrey

- [Hardcore History podcast](http://www.dancarlin.com/hardcore-history-series/) -  I’m in love with this podcast. Dan Carlin is an awesome storyteller.
- [Brain Science Podcast](http://brainsciencepodcast.com/) - (Cool podcast about the brain. I was just telling someone about this today)
- [http://www.microsoftvirtualacademy.com/training-courses/getting-started-with-powershell-3-0-jump-start](http://www.microsoftvirtualacademy.com/training-courses/getting-started-with-powershell-3-0-jump-start) This is the start of a 2 day training session on using PowerShell. It is one of the most widely viewed jumpstarts ever.
- [http://www.leeholmes.com/blog/2011/04/01/powershell-and-html5/](http://www.leeholmes.com/blog/2011/04/01/powershell-and-html5/) One of my all time favorite PowerShell scripts.

### Trevor

- FCC Ruling on broadband
- Windows 10 on Raspberry Pi 2

### Matt

- Kitchen-windows is almost a thing! If you want to play with it, check out the Windows cookbook at [http://github.com/opscode-cookbooks/windows](http://github.com/opscode-cookbooks/windows)
- BitTorrent Sync - [http://www.getsync.com/](http://www.getsync.com/)
- *Yes, Please* by Amy Poehler
