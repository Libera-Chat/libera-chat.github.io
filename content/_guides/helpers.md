---
title: Advice for Helpers
category: chanop
weight: 60
---

Communities are healthiest when everyone works together to maintain the space
and shape the culture. If we leave all the emotional labour for operators to
deal with, they will be more likely to
[burn out](/guides/catalyst#remember-to-take-breaks-to-avoid-burn-out).

These are some things non-operator helpers can keep in mind during challenging
situations to avoid making more work for others.

## Let small things slide

The best response to minor annoying behaviour is often to _initially_ ignore
it. Drawing attention to it can encourage more bad behaviour, which is the
last thing the channel needs.

If the behaviour is persistent, it can be addressed later.

### Attention seeking

If the bad behaviour is someone wanting attention, responding to the
attention-seeking proves that it works, and they'll keep doing it. If it
doesn't work, they'll get bored and probably move on.

### Bad language and frustration

If someone is a bit snappy or using bad words out of frustration, scolding
them can make them more frustrated.

In a support channel, helping a user with their problem is much more important
than trying to make them ask in the "right" way. So unless it becomes a habit
or makes the channel uncomfortable, it's not worth derailing the support
process.

### Typos and non-fluent language

Don't draw attention to someone else's typos or pick on them for their use of
abbreviations like "u", unless they specifically request help with wording.
They could be typing from a phone keyboard, be non-fluent in the language, or
have some condition that affects their typing.

They may be sensitive and feel unwelcome if people focus more on their wording
and ignore their questions. If you can still understand what someone is
asking, answer it and ignore the typos.

### Crossposting

It may feel like a waste to answer someone asking the same question in
multiple channels. Sometimes people don't have much time, or maybe they have
a boss hurrying them! Seeking second opinions is also a perfectly normal
social practice; people do it all the time.

Confronting people about occasional crossposting makes the channel feel
hostile, and people feel like they are under surveillance, regardless of why
they do it. If someone wants to answer the question, let them. If you don't
want to answer, ignore it quietly.

## They are being rude

While it would be very nice if people were never rude, it **is** going to
happen. However,
[don't automatically assume people are rude](/guides/catalyst#assume-good-faith).
They may have different cultural norms or a language barrier that
unintentionally changes their perceived tone.

It is best to let small things slide and not raise the channel temperature by
calling them out. If a person's demeanour bothers you, quietly refrain from
engaging with them instead of telling them off. If a channel member is
hostile, it is important not to worsen the situation by responding in kind.

## They are in the wrong place

While you may know how to navigate IRC, other people might be confused or not
know where to begin. Instead of scolding people for getting the wrong channel,
it is better to say you do not know the answer and tell them the correct
channel to ask.

When you redirect people, first check if they can join the destination
channel. Otherwise, it might seem like you're pushing them away. You may need
to `/whois` them to find out if they are identified or not:

```irc
/whois Nickname
```

If they are identified, there will be a line saying so. It looks like this:

```irc
[Nickname] is logged in as Accountname
```

If they are not identified, check if they will be unable to join
because of `+r` in the channel modes, or
if they will be unable to talk because of `+R` in the channel modes or
`+q` on `$~a` (users that are not identified).
This is how you would check for the `#windows` channel:

```irc
/mode #windows
/mode #windows q
```

At the time of writing, `#windows` does not have either of these restrictions
set, but if it did, the output of the above might look like:

```irc
11:49 -- Mode #windows [+Ccnptjfr]
11:49 -- Channel #windows created on Wed, 19 May 2021 07:36:22
11:49 -- [#windows] $~a quieted by copper.libera.chat on Mon, 14 Jun 2021 10:49:19
11:49 -- [#windows] End of Channel Quiet List
```

If the user needs to be identified, and they are not, they might need
reminding. You can do this when redirecting them politely.

```irc
<You> I don't know much about Windows, but the people in #windows will! You will need to be registered to talk in there. If you have an account, see '/msg NickServ HELP IDENTIFY'. If not, see '/msg NickServ HELP REGISTER' :)
```

## They didn't read the topic

IRC can be a bit overwhelming when first joining a channel, especially for new
people. In addition, some clients may not show the whole topic on join.
Instead of just telling the person to `/topic` or "read the topic", it's
easier and more friendly to tell them the answer even if you copy and paste
directly from the topic.

## Avoid answering people with bots

If you always use a bot trigger to answer a person, the channel atmosphere
will be cold and robotic. Using bots to answer people will make them feel like
they're in a call center phone queue. Ick!

It is better to take the time to write something yourself; people can tell
the difference and will pay attention to you better than to a bot. Some people
think factoid bots are necessary because people are impatient and leave
quickly. This almost always is due to a lack of response, not a lack of
solution. If you greet them and ask them to wait, they probably will.

If _you_ need the factoid to remind you of the information, and the bot does
not give factoids in PM, explain as you're doing it. This also teaches them
how to use the bot. Also, don't just leave them hanging with the answer! Check
it yourself to ensure it has the information you think it does, and prompt the
user to confirm if it covers what they want.

## When to stop engaging

When a situation requires intervention and your own attempts to defuse it do
not seem to be working, it is sometimes best to stand down and stop
contributing to the noise. Instead, try to [seek out a channel operator](/guides/faq#how-to-find-out-who-runs-a-channel)
quietly, such as with private messages or in an `-ops` channel if there is
one.

If you know that someone else around is an operator, and they seem to be
paying attention to the channel while the disruption is occurring, they might
already be talking to the person in private. Check with the operator if you're
unsure before also trying to intervene.

When an operator starts handling the situation, continuing to engage with the
person who is misbehaving may derail the operator's efforts, as the person may
become defensive at being "ganged up on".

If necessary, use the `/ignore` functionality in your client to stop
contributing.
