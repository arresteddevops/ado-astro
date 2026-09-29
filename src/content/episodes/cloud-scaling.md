---
title: Scaling the Application Mountains
description: In today's world of web-scale IT, the ability to respond quickly to increased demand and traffic on your critical applications is an essential component of success. Scaling experts Steven Corona and Igor Papirov join Matt and Trevor to talk about why scaling matters, some good practices to keep in mind, and other tips and tricks for success in the dynamic world of modern applications.
date: 2014-05-08T17:13:44.000Z
publishDate: 2014-05-08T17:13:44.000Z
episodeNumber: "10"
podcastFile: arrested-devops-podcast-episode010.mp3
podcastDuration: 51:05
episodeImage: episode/img/cloud-scaling.png
episodeBanner: /episode/img/cloud-scaling-banner.png
images:
  - /img/social/fb/cloud-scaling.png
guests:
  - person: scorona
    snapshot: scorona
  - person: ipapirov
    snapshot: ipapirov
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /10
  - /cloudscaling
youtube: Ae2usrwum2E
transcript: cloud-scaling
explicit: yes
---

## ChefConf in a Paragraph

Matty had hoped to do a full ChefConf episode and didn't, so he points to The Ship Show's recap and calls bourbon and bacon the two best things about the conference. The remarkable part for him was Mark Russinovich of Microsoft keynoting to a room of 400-plus open source people, some of whom muttered "Here comes the sales pitch." Russinovich talked about Azure, said Titanfall runs every player on a VM in Azure, and showed Linux VMs being provisioned with Chef directly through Azure. The room was "pretty surprised and impressed," which made Matty feel good about the community.

## Scaling Is Not Performance

Guests Steve Corona and Igor Papirov start with definitions. Steve co-founded Twitpic, wrote a book on scaling PHP, and now runs the API at Life360. Igor runs Paraleap Technologies, whose AzureWatch product monitors and scales Azure applications, and was previously chief architect at Restaurant.com. Igor separates scalability from performance: performance is fast or slow, while scalability is "maintaining the same performance over different peaks of usage." Steve agrees, and adds that scaling is "more infrastructure than it is code." What you prepare for, he says, is the stuff you never see at small scale, mostly timeouts and blocking.

Matty splits the load into predictable and not. Apartments.com has a seasonal business, and Cars.com knew a Super Bowl ad was coming. The Reddit hug of death, which Matty would have called the Slashdot effect, isn't predictable. Steve's Twitpic was unplanned success: a team of about seven, at most around 90 bare metal servers at SoftLayer, and petabytes of images on Amazon S3. He learned "by cutting my knuckles," rolling over in the middle of the night to restart Apache, and by crashing the site over and over. Many of the best practices, he says, "aren't published," and the top people just know them. He also wants predictability paired with configuration management, so knowing tomorrow is a big day doesn't mean building servers by hand.

## Ninety Servers, All Doing Work

Igor says a core principle of scaling is getting every one of those 90 servers to do useful work, and that the first question is whether your design could use 200 or 500. He came up on N-tier Microsoft development, where the backend database won't scale to millions of people per hour. Steve says even at Life360, with about 100 AWS instances and plenty of scaling experts, some servers do less than they should, and distributing work evenly is "a very difficult thing to do right."

On vertical versus horizontal, Steve says everyone preaches scaling horizontally, but having more servers doesn't mean you scale horizontally; you have to plan for it. Igor adds that people scale relational databases vertically because they can't do otherwise. Matty says sysadmins were taught to start worrying at 70% utilization, because new hardware took eight weeks. Igor agrees that's enterprise legacy, and now "if you have 20 servers and they're all doing a little CPU, then you're throwing money away."

## Build It Naively, Because You'll Rewrite It

Matty asks where the balance is between analysis paralysis and painting yourself into a corner, quoting the joke that "Rails app is up in 6 hours, it's down in 6 months." Steve says he has "the secret magic balance numbers" but isn't sharing them, and Matty offers 42.5 servers as the point to start caring. Steve's real answer is that the easiest way to build something is not to worry about scaling. You can still scale vertically a long way, since on AWS "you're one restart away from 500 gigs of memory," and he steers away from research paralysis by building "as naively as possible and then figure it out."

Igor agrees: a startup should get functionality out and listen to feedback, since the system will change several times before it becomes popular. Steve says you will rewrite your app, or rip pieces out of it. If you want cheap headroom, his suggestion is several small apps in the Unix philosophy. "It's going to happen."

## Monitoring Is Not Diagnostics

For finding out what's wrong in production, Steve reaches for strace: with all the statsd and PagerDuty in the world, "you will never get the visibility that strace will give you when production is down right now." He says to learn exactly how your app runs end to end, and even read the source of the open source programs you use, because monitoring alone won't tell you. Matty says every good sysadmin still has a copy of What's Up Gold somewhere, and takes it as an example of DevOps having no demarc: quoting John Vincent, "never saying that's not my job," but also knowing when to escalate.

Igor's point is that monitoring tells you when things are broken, not why, so diagnostics is a different problem. He recommends monitoring from more than one system, since monitors go down too and each sees different things: AzureWatch knows the Azure infrastructure and New Relic knows the application code. Asked whether to pick one, his answer is "yes, you should use both," because tools that cost pennies per hour are worth it when you're making millions per hour.

## No Batch Window, No Maintenance Window

Igor says large-scale systems can't have a batch window, since someone is always using the site, and nobody approves long downtime on a Sunday at 3 AM. Matty calls it a world of rolling maintenance windows, and jokes that maybe we should take outages so customers can have lives.

Steve offers the IRS site, which closes at 5 PM for EIN registration, and Matty explains it's probably an old CGI form emailing someone. Igor has a better one: a restaurant reservation service that dialed the restaurant and waited for a person to press a button. It's "pretty scalable," he says, since the waiting is sharded across hundreds of thousands of restaurants. Steve calls it "a whole new form of blocking I/O that I've never heard of before."

## Parting Advice: Twelve Factors and the Single Brain

Steve recommends the twelve-factor guidelines from a Heroku engineer for building apps that scale more easily, with things like how to handle logs and not letting the server daemonize itself. Igor says the hardest layer to scale out is storage. A relational database is "a single brain" that can only scale up, so he'd push logic to the application layer and use object or NoSQL storage: "you're able to throw 1,000 application servers at the problem, and you can't really throw more than one SQL Server at the problem."


