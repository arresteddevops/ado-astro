**Bridget:** [00:00:00] Hola, muchas gracias. Está maravilloso. It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your host, Bridget Kromhout. Joining me for this very special episode is a voice you don't hear often on ADO, our audio editor, Joe. Say hi, Joe.

**Joe:** Hello, internet! Yes, if this podcast were the Beatles, I'd be Ringo.

**Bridget:** Okay, today we're going to share some audio we recorded back in October. Joe comes along for most of the conference stuff that sounds fun. Usually, I rely on his AV expertise, but this time he also needed that high school Spanish.

**Joe:** My ancient high school Spanish. Bridget and I were invited to participate in the very first DevOpsDays in Havana, Cuba. The event was organized by Rudy from DevOpsDays Ghent as a joint venture between the University of Ghent and the University of Information Sciences in Havana.

**Bridget:** [00:01:16] In addition to the local speakers, we were joining fellow DevOpsDays organizers, the Belgian contingent of Patrick, Bernard, and Rudy, plus Mike from Dallas. It is a good thing, by the way, that Mike is fluent in Spanish. Because I gotta say, explaining vegetarian is always fun. They were like, here's the meat soup, we took the meat out.

**Joe:** What you're gonna hear here in a second, once we're done explaining it, is the wrap-up session from the last day. And I have to apologize in advance for some of the audio quality. If it sounds like we were in a big echoey room, it's because we were in fact in a big echoey room. Also, you hear a couple references to UC. That's the University of Information Sciences. I'm the host for the event.

**Bridget:** Yeah, they're actually pretty awesome. They have a giant Android lab and their own Linux distro.

**Joe:** Yeah, if you go, they're worth checking out. It's only about a 30-minute drive out of Havana on an old Soviet military base. We drove down a road that when they needed to, they would actually use as an airstrip to land airplanes on.

**Bridget:** [00:02:22] Yeah, you should definitely go to Cuba for the classic cars alone. But tourism aside, Now for the show.

**Hugo:** Okay, hello everyone, it's Hugo.

**Bridget:** Namaste.

**Hugo:** Who is still awake?

**Mike:** Some.

**Hugo:** Okay, so we reached the end of our fourth—

**Patrick:** yeah, it's, it's project.

**Hugo:** No, no, yeah, okay, so we reached the end of our fourth day. It's been a very intensive couple of days. I saw many people learning a lot of new stuff, but also I must say I'm very impressed of some of the things I've seen you present. Certainly the Ignites, everybody was on fire. So first of all, I would like to thank our invited speakers. First of all, Patrick. I think it's a very rare opportunity for Cuba to have the founding father, or one of the founding fathers of DevOps here. I'm very happy he accepted the invitation. Speech!

**Mike:** [00:03:41] Speech!

**Bridget:** Say a word or two.

**Patrick:** Two words: thank you.

**Hugo:** Very well summarized. Next, I would like to thank Bernard for all the help and also for the workshop presentation. Also Bridget. He's done a great job. And thank you very much to Mike because he was initially not in our team, but I'm very happy— I'm glad you are in my team. I really think without the help of Mike, many things would have been lost, not in translation, but he made it clearly very understandable for everybody here. So also Joe is doing the podcast. Also, we also should thank the local team. So I see Manuel in the room. Also Enrique, who's done an immense of a job in coordinating everything here. And also Yatje, who has done immense stuff here at UCI because it was not very easy. And of course we should thank our sponsors, like I should mention Flerios who paid for all of the expenses, so we should give them a very big thanks.

**Bridget:** [00:05:44] And there's, there's one person who he's not thanking himself, but we need to all thank Rudy. He's come here for years putting a lot of effort into making sure that the Belgian and Cuban cooperation and relationship is so good. So this, none of this would have happened if it weren't for Rudy. So let's clap for Rudy.

**Patrick:** Rudy, Rudy!

**Bridget:** We have a standing ovation for Rudy, let it be noted.

**Patrick:** Muchas gracias, de nada.

**Hugo:** So let's move over to the maybe fun stuff for the podcast. So who would like to come and give his impression of DevOps Days Cuba? Please come forward. Do it in Spanish very quickly. Just line up here and we'll pass the mic. Not not not this mic, but but the microphone.

**Bridget:** [00:06:57] Ah, okay.

**Hugo:** His or her impression. Please quickly state your name and then.

**Mike:** Yeah, there you go on fire.

**Hugo:** There you go on fire.

**Mike:** Mi nombre Henry on fire.

**Joe:** My name is Henry on fire, and I think the event was great, interesting, instructional, and intense. Some of the things talked about at this event will help our lives, and others will make our lives worse because we want to hurry on implementing them. But I consider the best thing about the whole event is a great amount of friendship I take away from everyone. Good afternoon. My name is Bernier. I loved the event and learned a lot of things, but definitely the best part of this event is this form of sharing information, knowledge, and experiences that we have as professionals.

**Bridget:** [00:08:17] Hola, mi nombre es María Lina.

**Mike:** Muchas gracias a todos.

**Bridget:** Hi, my name is Maria Lina. Thank you very much to everyone that has participated in this event. We're very happy, and we've had a super great time with all these experiences. Many thanks to the invited guests. Who have come and dedicated their time and knowledge to help us with a simple desire to share everything they know. Many thanks, and we hope you return. Thank you.

**Mike:** Acérquense, no le tengan miedo al micrófono. Necesitamos más retroalimentación aquí de ustedes.

**Joe:** My name is Alejandro. First of all, I would like to thank everyone on behalf of UCI for being here today to share with us and to make this university your home to share information. With regards to the materials of the event, it's been good for all. We've been able to identify bottlenecks and a lot of important things that need to be done. My name is Ray. This has been a good opportunity to share our knowledge with each other, and was a suitable space for all the enterprises and developers that are here to share their knowledge as well. Thank you very much to all, and I hope we get to do this again.

**Bridget:** [00:09:43] A doble. Bueno, gracias, repito, nuevamente. Hola, muchas gracias. Está, está maravilloso.

**Patrick:** Hi all, I'm Bernhard. Just want to say I'm very glad I got the invitation from Rudi, the chance to be here, to be part of this experience, be in Cuba, the good weather, good food, good company, good conference. I'm just very happy for this to happen.

**Mike:** [00:10:44] Thank you.

**Bridget:** Okay.

**Hugo:** Nobody has any more impressions to share?

**Bridget:** One more, one more. Patrick, come here.

**Hugo:** Come here.

**Bridget:** I'm going to make Patrick say more than 2 words. Oh, good. Because we have here the founder of DevOpsDays, Patrick Debois. And I asked him if he expected— this morning, you recall, I asked him if he expected when he started DevOpsDays in Belgium, where all good things start, in 2009, whether he expected that he would be at the first DevOpsDays in Cuba in 2016. And I would really like to hear what you thought of this DevOpsDays since you've been to so many. What did you see that was different?

**Hugo:** What did you learn?

**Patrick:** I think what was different is that when we go to other countries and we hold it there, people are kind of already saturated and they think, oh, can we learn this one thing extra? But here it was so rewarding that we brought all you people together and you started immediately sharing from the first exercise. That was really great. And the fact that you're so willing now, and I can see the same enthusiasm as in 2009 when everybody left the first conference to take it home, to take it to their friends, to take it elsewhere, maybe to Ecuador or wherever. The fact that this— I can see the same energy, it's so warming for me to see that. Thank you. So officially I retired 2 years ago from DevOps Days, but you can actually see very well that Bridget is now in a good lead. The fact that she helps a lot of the people to get it organized here in other countries, and I think she really needs also a very large applause.

**Bridget:** [00:12:51] Oh, thank you. I know I have a little bit of time, but I do want Enrique for just a minute, and perhaps maybe Mike, you can help translate my question. Come, come. I want Enrique to come. Because I have a question for you about DevOps Days in Cuba. Tell us about what you see as the future of it. You've done it once now, and I'm going to put you on the spot. I'm going to say, tell us about what happens next.

**Mike:** Mike, la luz porque no quiero confundirme.

**Bridget:** Can you maybe explain that question to the audience too?

**Mike:** Lo que quiere saber es cuál es tu opinión, qué es lo que tú has visto de DevOps Days, cómo tú ves el futuro yendo hacia adelante, qué fue lo que te impresionó, lo que te gustó de esta conferencia y dónde tú ves el futuro de DevOps Days para Cuba.

**Bridget:** [00:13:59] And also, not just the conference, but DevOps in Cuba in general. What happens next?

**Mike:** Así que no solamente la conferencia, sino para DevOps también en Cuba, ¿qué va a ser el futuro de él?

**Joe:** Ambiciosa.

**Mike:** En español.

**Hugo:** Bueno, la pregunta, le decíamos ahí, es un poco ambiciosa, pero bueno, vamos a tratar de responderla.

**Mike:** Con respecto a la conferencia, me parece que—

**Joe:** Well, the question is a bit ambitious, but let's try to answer it. With regards to the conference, you will see the results from the survey. We all want to do this every year and to continue developing the cultural movement of DevOps. And the idea is to share, after all. If the idea is to have the disposition to share, then great. We all leave here with the willingness to share and work with all companies to try to advance, thanks to everything you all have shared at DevOps Days Cuba.

**Bridget:** Thank you. I feel so lucky, like so privileged that we could be part of this. At conferences all over the world this year.

**Joe:** [00:15:05] 5 continents.

**Bridget:** Too many cities to count. But this one stands out as significant. It's exciting seeing what they're doing there. We'll put links in the show notes at arresteddevops.com/devopsdays-cuba-2016 of people to follow on Twitter to see what's next in Cuba and participate in future events with them.

**Joe:** One of the things that stuck out for me, because I'm sort of a fan of the whole Ignite format, is we were talking to Patrick, and apparently the folks in Cuba were completely unfamiliar with the idea or the format of the Ignite talk right before they were all supposed to give Ignites, and they took to it like fish in water, especially the guy Henry, one of the people you heard in the— the on fire guy that you heard in the audio there. His Ignite, one of the lead-off Ignites, was really good. And Maria Elena also gave a really good Ignite talk, especially the one she did at the evening reception about telenovelas was really funny.

**Bridget:** [00:16:06] Yeah, absolutely. And for those of our listeners who have not made it to a DevOps Days yet and aren't familiar with the Ignite format, you want to kind of explain, like, why is this so uniquely suitable?

**Joe:** I will extend this. I will extend this conclusion even even longer. And Ignite, it's, it's a 5-minute talk. You have 20 slides. The slides auto-advance every 15 seconds. The, the speaker is not in control of the, the advancement of the slides. They happen automatically. So it's a, it's a little more of a, of a difficult talk type to do, especially for first-timers.

**Bridget:** Well, and I think English-speaking Ignite speakers can often maybe manage about 3 sentences per slide. And I think the Spanish speakers in Cuba were probably putting about 6 or 7 sentences per second.

**Joe:** They were going a mile a minute. It was a very impressive thing to watch. Even if I could only catch every 4th or 5th word, they were really good.

**Bridget:** [00:17:06] Yeah, it was a really cool DevOps Days to be at.

**Joe:** And to wrap that up, and with that, I'm Joe, @joelaha on Twitter.

**Bridget:** And I'm Bridget. @bridgetkromhout on Twitter. Somos Arrested DevOps.

**Joe:** Y recuerda, siempre hay DevOps en el puesto de plátano.

**Bridget:** Especially if those bananas are actually plantains, because Cuba.

**Joe:** Yeah, hasta luego, folks.
