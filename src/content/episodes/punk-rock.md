---
title: Punk Rock DevOps with Jay Gordon
description: In this edition of "big guys with beards and tattoos", MongoDB Developer Advocate Jay Gordon waxes philosophical about the change from being on-call to being a tech evangelist, what went wrong with the GitHub memcached DDoS, and the role of fast food in DevOps.
date: 2018-03-12T13:55:48.000Z
publishDate: 2018-03-12T13:55:48.000Z
episodeNumber: "106"
podcastFile: arrested-devops-podcast-episode106.mp3
episodeImage: episode/img/punk-rock.png
episodeBanner: /episode/img/punk-rock-banner.png
images:
  - /img/social/fb/punk-rock.png
guests:
  - person: jgordon
    snapshot: jgordon
hosts:
  - mstratton
sponsors:
  - chef
  - datadog
transcript: punk-rock
aliases:
  - /106
  - /punkrock
explicit: yes
---

Matty talks with Jay Gordon, a developer advocate at MongoDB for about a year, in what Matty calls the big dudes with tattoos and beards episode. Jay started around 2000 building small websites, spent 2002 to about 2010 as a sysadmin at DataPipe, and then worked at Courses, BuzzFeed and DigitalOcean before moving to MongoDB to get out of an on-call role, starting as a technical account manager and then moving into advocacy. The cold open is Jay saying that many people in DevOps roles prefer Chipotle as a fast food option.

## From On-Call to Advocacy

Jay relays a line from a coworker, Adrian Howard, and Mary Thengvall that "developer advocacy is kind of like the good fat on certain companies, like avocados." Matty notes that advocates, evangelists and DevRel folks have very different jobs, and that a survey of the field showed little consistency, with anonymous compensation numbers ranging from $5 to $1 million. Jay adds that advocacy rarely has definable metrics, unless you work at one of the biggest companies, which counts how many people each advocate talked to. Matty says the effect can be indirect, and at PagerDuty and MongoDB the audience includes developers, admins and architects. Matty calls the role a full-duplex connection between a user community and a product team, and describes hearing from meetups what people say in words that differ from the product team's.

Jay tells of an open space MongoDB held for users at its Chicago event the day before the conference, where MongoDB's VP of engineering sat in and by the end a Jira had been written and a pull request submitted and merged. For Jay, that is a sign of success: people who use the product told the company what didn't work, and a correction followed, though "just a minor, minor change."

Asked what was hard, Jay says learning marketing and writing, including grammar, and the public face of a company. Jay compares it to an auto mechanic for 20 years who decides to start a newsletter about being auto mechanics. Jay still looks at the phone waiting for something to do, though it's no longer a pager world.

## The Phantom Pager

Matty calls it a phantom limb and says it was a revelation to leave the phone on another floor after moving off on-call. Matty describes Nathan Harvey leaving the laptop home on a family vacation and then the phone, only telling the family once on the plane, and a summer trip to northern Minnesota with the phone turned off in a lodge and Slack uninstalled. Matty's point is "there's no such thing as a developer advocacy emergency," and that unplugging is "a muscle that you have to exercise." Jay admits to pressuring to get everything done before vacation, which doesn't work, since the work will be there no matter what.

Matty says a vacation can be planned for, finishing things or leaving them in a starting state, and a coworker declares email and Slack bankruptcy: if it was important, people will reach out again. Jay says that's a tough move at some places. Matty's answer is "you have to train the system": tell people you'll check email once a day, or that mail during vacation is deleted. Matty adds that this is a privilege not everyone has, and Jay says changing how you communicate without telling your team is the antithesis of DevOps. Matty compares it to getting a TiVo and feeling compelled to watch everything.

## The Memcached Attack on GitHub

Jay wanted to talk about the memcached DDoS on GitHub, a 1.7 terabyte attack from UDP reflection. What troubled Jay was the reach of GitHub, for businesses, teams, students and kids learning to code, and that so many systems weren't firewalled and providers weren't blocking ports by default. Memcached, Jay says, is like a dumb protocol you can exploit, and Matty adds that you have to go out of your way to open all the ports on a cloud instance. Matty says people think a dev box doesn't matter, but compromising small things affects neighbors, in the same way two-factor on Facebook matters because of OAuth. Jay says fast and loose startups leave the security team to clean up after a unicorn shitting rainbows, and "failure is a great teacher."

## Hiding Mistakes

Matty repeats that people punished for mistakes won't make fewer of them, "they're just going to become really good at hiding them," as with a leaked key nobody reports. Jay once took down a major site for a company and didn't hide it, which Jay credits partly to seniority and privilege. Matty says leaders set the expectation, even by making fun of a junior person in Slack. Matty recalls joking with a friend in Chef's chat about a Knife bootstrap flag, until a colleague pointed out that newer people only saw the joke as mockery: "you are, as a more experienced member of your team, and you're setting an example."

## Fast Food and DevOps

A listener asked about the role of fast food in DevOps. Jay says every topic at a conference gets compared to DevOps, then repeats the Chipotle line. Matty disagrees, since Matty dislikes cilantro, and picks In-N-Out as the most DevOps, because it's simple with lots of hacks, and you adjust for yourself without cargo culting. Jay orders double-double animal style with fries well done, and lives in Manhattan, where delis make fast food matter less.

## Punk Rock Playlist

Matty named the episode after Jay's Fugazi posts, and both give picks. Jay suggests the Void side of the Faith/Void split, Fugazi's Cassavetes, and a MongoDB metal Slack channel playlist with Entombed, Carcass, Electric Wizard, Nails, Morbid Angel and Snapcase. Matty's coding playlist has Black Flag, Misfits, Minor Threat, Dead Kennedys, Slayer and Social Distortion.

- [What is Developer Advocacy?](https://medium.com/@ashleymcnamara/what-is-developer-advocacy-3a92442b627c) - Ashley McNamara
- [Community Pulse podcast](http://communitypulse.io/)
- [Developer Avocados: The Good Kind Of Fat](https://www.marythengvall.com/blog/2018/1/31/developer-avocados-the-good-kind-of-fat)
- [The GitHub Memcached DDoS: It shouldn’t have happened](https://www.synopsys.com/blogs/software-security/github-memcached-ddos/)
- [AW.. Sh*t: Amazon S3 borkage takes down GitHub, Yahoo Mail and more](https://www.theinquirer.net/inquirer/news/3005581/aw-sh-t-amazon-s3-borkage-takes-down-github-yahoo-mail-and-more)

### What is devrel anyway?



### DevOps Music Playlist

- Wolverine Blues - Entombed
- Heartwork - Carcass
- Electric Wizard - Funeralopolis
- You Will Never Be One Of Us - Nails
- Highway 101 - Social Distortion
- Raining Blood - Slayer
- Holiday in Cambodia - Dead Kennedys
- Piles of Little Arms - Morbid Angel
- Set It Off - Madball
- Caboose - Snapcase
- Rise Above - Black Flag
- Last Caress - Misfits
- Straight Edge - Minor Threat
- Nervous Breakdown - Black Flag
- Who are You?? - Void

[view on Spotify](https://open.spotify.com/user/mugsy1274/playlist/6yqBMl3x7LB9py9fj14KZ6?si=TPbf8m33SeGh6aD-id27qg)

## Community & Event Stuff

### Where are we going to be?

Matt will be at the [devops meetup in MSP](https://www.meetup.com/DevOps-Minneapolis/events/247091630/) on March 20 and then home for a bit. In April he'll be at [DrupalCon](https://events.drupal.org/nashville2018) in Nashville, [Devopsdays Des Moines](https://www.devopsdays.org/events/2018-des-moines/welcome/), and [GOTO Chicago](https://gotochgo.com/2018). See [mattstratton.com/speaking](https://www.mattstratton.com/speaking) for more.

### Open CFPs Discounts
Lots of devopsdays: https://www.devopsdays.org/speaking/

### Discount codes

- `ADO2018` for 20% off lots of devopsdays, 10% off [ChefConf](https://chefconf.chef.io/), 5% off [GopherCon](https://www.gophercon.com/)
- [MongoDB World](https://www.mongodb.com/world18) `JAYGORDON` for 25% off

## Check Outs

- [Muzzle](https://muzzleapp.com/) - simple mac app that turns off notifications when you are screen sharing
- [Tailor](https://itunes.apple.com/us/app/tailor-screenshot-stitching/id926653095?mt=8) - iOS app that automatically detects overlapping screenshots and merges them
