---
title: "Switching Teams: From Linux to Windows and Windows to Linux"
description: What are some of the gotcha's that exist when switching operating systems? Trevor talks with Matthew Walter about the differences that exist and their own challenges as they've started their journeys into new operating systems.
date: 2015-11-30T09:58:51.000Z
publishDate: 2015-11-30T09:58:51.000Z
episodeNumber: "50"
podcastFile: arrested-devops-podcast-episode050.mp3
episodeImage: episode/img/os-switching.png
episodeBanner: /episode/img/os-switching-banner.png
images:
  - /img/social/fb/os-switching.png
guests:
  - person: mwalter
    snapshot: mwalter
hosts:
  - thess
sponsors:
  - datadog
  - 10thmagnitude
aliases:
  - /50
  - /osswitching
explicit: yes
transcript: os-switching
---

Trevor hosts a one-on-one interview for the first time, admits to being a little nervous, and talks with Matthew Walter about what it's like to switch operating systems. Matthew is a Linux sysadmin at North American Power, a deregulated energy marketer in Connecticut, and has spent the last six months or so moving, partly, toward Windows. Trevor is going the other direction, with more and more Linux clients showing up in Trevor's Windows world. The show opens with Trevor asking whether learning is fun and exciting, and Matthew answering that a struggle would fit too.

## How a Linux Admin Ends Up on Windows

Matthew was told in February that the company was moving a new line of business app, which runs most of its backend, from a Linux LAMP stack with PHP to .NET. Matthew is the only ops person there, and was leery. After looking into it, Matthew found a lot that was interesting and a lot of existing knowledge that could still be used, and already ran Ansible for configuration management on the Linux side. Matthew decided to stay, though it was still scary: "I'm a Linux admin and I'm gonna try and learn Windows. It's not something I ever thought I would do."

Trevor has been working with Matthew for a couple of weeks and says Matthew can testify to how much Trevor has struggled with if statements in Bash. Matthew's summary of the learning is that "it's drinking from the fire hose most days."

## Installing Software

Trevor's background is Windows and .NET, where installing something means downloading an .exe or .msi and clicking through a wizard. Matthew explains the Linux alternative: if you know the package name, you install it through your package manager, from a reasonably secure source. Packages are signed, come with install scripts, and carry metadata about when they were updated. For anything not in the main repositories there are other people's repositories, like EPEL on RHEL, which someone maintains "through the fantastic goodness of their hearts."

Trevor says Windows is getting package managers too, with Chocolatey and, since Windows 10, OneGet. Matthew has seen Chocolatey and liked it, since it felt like a Linux package manager and "everything just kind of worked," but had heard the packages aren't signed, so wouldn't run it in production. Trevor thinks the repository is curated but the packages probably aren't signed, and tells a story about installing Notepad++ with Chocolatey. The day Notepad++ changed its package directory structure, Trevor's cookbooks stopped converging because the download no longer existed. Trevor's verdict is that it is in its infancy. Matthew adds that with Linux package managers you can mirror the whole repository, which for Ubuntu 12.04 was something like 80 gigs, to control which updates reach your servers.

## Operating System Philosophies

Trevor brings up the idea, which came up in an earlier episode with Jessica DeVita and Jeffrey Snover, that in Linux everything is a file while in Windows everything is an API or a registry key, which makes infrastructure as code harder on Windows. Matthew says on Linux it is also that everything has one job, small atomic tools chained together, and that "there's nothing that's hidden away." Trevor says every Windows machine needs its Explorer settings changed so it stops hiding files and extensions, and that on Linux you can change almost anything live, while on Windows you nearly always have to reboot, although that is changing. Trevor has been told Nano still needs the occasional reboot but far fewer than earlier Windows Servers.

Matthew asks whether Windows has a driving philosophy. Trevor's answer is that it leans toward one heavyweight tool that does everything, where Linux prefers the smallest possible tool for a job. Matthew says the old stereotype of the Windows admin as unskilled because all they did was click buttons is changing with PowerShell, DSC and Nano, toward tools that assume you know what you're doing. Trevor's counterexample is SQL Server, whose big multi-step installer makes it "like pulling teeth" to automate compared with adding flags to a Linux package install.

## Bash, PowerShell, and Python

Trevor's struggle with Bash was an if statement, and the fact that spaces mean something drives Trevor crazy. Matthew found PowerShell well documented and consistent, and picked it up quickly once learning the Get-Command cmdlet. Trevor puts the difference this way: "I can express my intent in PowerShell, whereas in Bash, I need to know my intent," which leaves Trevor asking what to Google, and Matthew agrees that it's "half Google-fu."

They both wish the old command line would go away. Matthew says it is there for Microsoft's backward compatibility. Matthew's moment of delight in PowerShell came while standing up a VM in Azure: Matthew piped a Get-AzureVM cmdlet, which returns an object of the VM's attributes, into the next command, and it blew Matthew's mind. Trevor warns that some libraries from big companies send back formatted tables instead of objects, which people can read and computers can't use, and Matthew guesses "It's probably a Linux admin doing that." On the Linux side, getting a nice table out of Bash means long chains of pipes with sed and awk, and Matthew says you're often better off going to Python, which is on nearly every Linux box, or Ruby, or Go. Trevor says that after getting used to PowerShell, moving to Bash feels like losing something.

## Line Endings, Encodings, and File Permissions

Neither is confident about line endings. Matthew knows the symptom, a file opened on the other OS looks like one line or has an invisible line ending, and is trying to let Git handle all of it: "it's one of those things that will blow up in your face if you don't think about it correctly." Encodings such as UTF-8 are a different can of worms.

On permissions, Trevor says 777 looked like leet speak the first time Trevor saw someone type it. Matthew finds the Linux model simple and elegant, with user, group and everyone else, each able to read, write or execute, and file ACLs for when you need more. Windows gives you full role-based access control from the outset. Trevor realizes that outside a GUI, Windows file permissions are something Trevor has never managed, and Matthew says that is something they will have to check out.

## Monitoring, Support, and Directories

Windows has Event Viewer, and Linux has log files that are appended to line by line, which is easy to ship on to Logstash or Splunk. Matthew's impression of Windows monitoring was that everything is a product you pay for, with support from a closed source company that isn't there for you all the time. Trevor finds both models frustrating, since with open source you may be better off fixing it yourself. Matthew says when the transition started, people kept asking whether they had a support contract for the open source tools, and the answer was "we don't have a support contract with anyone." Their new Windows sysadmin asked "do we have a Microsoft Service Agreement?" and Matthew didn't know.

On LDAP and Active Directory, Matthew says that in a Linux versus Windows contest, "Active Directory wins hands down": the open source LDAP options mostly bolt on features to emulate it, and Matthew got one working, but it was not a fun experience. Trevor has only set up AD in Trevor's own Azure subscription and jokes about seeing the forest for the trees. Matthew's Linux nodes don't use LDAP at all. Ansible connects with a key and no users log in, which Trevor calls hands-off.

## Using the Other OS From Yours

Trevor notes that Boot Camp is not always the easiest way to run Windows on a Mac. Matthew says "without VirtualBox and Test Kitchen, life would be much, much worse." Matthew uses a Windows VM to get a PowerShell terminal without spinning up another box, for querying the domain or listing services. Trevor does the reverse, using VirtualBox with Test Kitchen and SSH for Linux, or an Ubuntu desktop when a GUI is needed, and ends up back in Bash anyway.

Matthew ends on the tools: the fact that Chef, Test Kitchen and similar tools now have much better Windows support was the only reason Matthew thought this move was possible. Matthew is learning concepts that apply to both, configuration management, continuous integration and infrastructure as code, which lets Matthew start from what something should look like and work out how to get there, instead of having no idea where things are headed in a whole different paradigm.

## Checkouts
### Trevor
* [Blue Yeti Microphone](http://www.amazon.com/Blue-Microphones-Yeti-USB-Microphone/dp/B002VA464S)
* [The Machine](http://www.netflix.com/watch/70273618)


### Matthew
* [Heated Blankets](http://www.amazon.com/Trillium-Worldwide-12-Volt-Heated-Blanket/dp/B0000DYVN9)
* [Mystborn Series](http://www.amazon.com/Mistborn-Trilogy-Boxed-Hero-Ascension/dp/076536543X)

---
