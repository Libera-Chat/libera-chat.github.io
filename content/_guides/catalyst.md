---
title: Catalysing and De-escalation
category: chanop
weight: 50
---

People often use Libera.Chat to get help with something on their computer.
Technical support channels are one of the things we're here for!

If you have ever had a technical problem, you know how overwhelming it can be.
Sometimes people seeking help will get very frustrated and might have a temper
or be rude. Patient and efficient help can be vital in avoiding conflict in
these situations.

This guide will outline some good practices for both operators and helpers for
interacting with people. It will also discuss some common situations and ideal
ways of responding.

## Only be "opped up" when necessary

Most channels have a select few operators who are responsible for managing the
culture of the channel. These are the people with the `+o`
[flags in `ChanServ`](/guides/faq#how-to-find-out-who-runs-a-channel). Most
clients display an `@` or another symbol next to their nick. Libera.Chat does
not have "halfops" flags like some other networks.

We recommend that operators in channels refrain from being "opped up" unless
it is necessary for immediate channel management activities like changing a
locked topic or removing a problematic user. We discourage using the `+O`
flag, which automatically "ops up" the flagged user on join. There are other
ways for [users to find out](/guides/faq#how-to-find-out-who-runs-a-channel)
who runs the channel.

Being opped up (or even voiced `+v` for manual or `+V` for automatic) in your
channel means you appear above normal users in your channel's user list, which
creates a visible hierarchy. While this might sound desirable, it can
interfere with your ability to give support. People will see you as an
authority figure and be wary of you. It's like the difference between having a
conversation with a boss or teacher, and having a conversation with a
co-worker or a classmate. Users may view your responses as orders, threats, or
trick questions when you do not intend them to be.

Channel Ops should avoid demonstrating hierarchy and interact as regular
participants in their channels as much as possible. Try not to be someone who
only appears when things are heated. Having a rapport with your users will
make it easier to de-escalate heated situations, making it easier to avoid
having to forcefully remove people from your community.

### Why is `#libera` different?

You may have noticed that the `#libera` channel doesn't follow this guideline.

The `#libera` channel is relatively large and is a focal point for botnets and
other nefarious behaviour. It uses channel mode `+z` when dealing with unwanted
messages, which requires staff to be opped, so they don't miss messages.

Additionally, people often come to `#libera` to find network staff with
network-level permissions. Having staff highlighted in the user list makes it
clear who has those permissions. In a "normal" support channel, everyone can
provide support, so there is no need to differentiate between ops and users.

## De-escalate heated situations

### Assume good faith

When you initiate conversations, try to assume that the other person is doing
what they're doing in good faith. People don't tend to wake up one day and
decide to yell obscenities into your IRC channel. They aren't trying to cause
harm.

### Avoid public confrontation

Sometimes you can avoid escalating a situation by talking to an angry person
in private rather than publicly in a channel, which they could find
humiliating. They may still act like you're intruding into a personal space
without their consent. Consider asking to talk to them either in the channel
first or, as your first private message:

```irc
<You> Hi, can I talk to you about <problem> here in private rather than where others can see?
```

Note that some support channels discourage private interactions between
channel members. Therefore, this technique may be limited to channel ops if
that is the case in your community.

### Listen and ask questions

Asking someone why they are doing something will encourage them to reflect on
their behaviour. Once they are paying attention to their actions, they will
often self-moderate. Most people do not want to be viewed as "the bad guy."

You may disarm their defensiveness by asking for their input instead of
immediately admonishing them or levelling accusations. This centers the
conversation on them and their thoughts, instead of on yourself.

Try to appear understanding of their concern rather than dismissive, even if
you disagree. Your goal is to calm them down, and being oppositional will not
achieve this.

When requesting someone change their behaviour, instead of ordering them to do
or not do something, you can also ask them if they think they can. They will
probably be more receptive and perhaps offer ways you can help them achieve
it.

### Try to remain calm

People learn by example and often respond in kind. Thus, if you demonstrate
calmness when initiating a conversation, the conversation is more likely to
proceed that way.

Likewise, being respectful and professional when dealing with an upset person
will do a lot of work towards forming a treaty with them.

### Compromising, conceding, and resolutions with no winner

Humility is essential when in leadership positions.

Sometimes, you will need to compromise or concede. Digging in when you make a
mistake will not improve your community and could lead to distrust.

You can always amend a lenient decision or concession in the future if there
is actually a need to do so.

## Avoid policing external behaviour

People are often part of multiple communities. They often behave differently
in each space, as various communities have their own cultures.

Confronting and punishing someone for behaviour that is happening somewhere
else often escalates something small into a bigger issue affecting more
people. Pre-emptive banning is rarely a good idea.

It can also make people in your channel feel like they're being spied on,
which makes both your community and other spaces feel less friendly.

## Remember to take breaks to avoid burn-out

When previously rewarding tasks, like helping in channels, become tiring and
less enjoyable, this is a sign of burn-out.

If you manage a space alone, it is easy to feel obligated to spend all your
energy and time keeping the place in order. This can lead to burn-out, which
makes it much harder to handle channel conflicts calmly. When that happens,
your community members feel like they're walking on eggshells. It is also
easier for bad actors to weaponize you against other community members.

If you are the only channel op, we encourage you to consider giving trusted
channel users ops as well. Not only does this provide you with the freedom to
do other things without worrying about the channel, but it also gives you
another person to talk with about situations that arise.

Find others in your community who are good at talking to people to help you
manage things. They don't need to be the most knowledgeable person in your
channel, but they need to be patient, fair, and approachable.

## Appeals processes and accountability

Removing people should ideally not be a permanent thing. People make mistakes
and have bad days. One mistake or bad day shouldn't be the end of their
participation in your channel.

Also, permanently excluding users from a channel can lead to them seeking a
way of evading into the channel, becoming even more problematic.

It's an excellent idea for your channel to have a way for people to appeal a
ban and negotiate being allowed back. Consider having an "ops" channel; most
channels use `#<channelname>-ops` for this. Request that non-ops leave the
channel if they do not have an immediate issue, so that people can raise
their issues with some privacy. When talking to banned users in an `-ops`
channel, de-escalation tools and building rapport are critically important.

If many channel operators speak to a person at once in an `-ops` channel, it can
seem like "ganging up on" the person. You may want to informally limit how
many ops are involved in such discussions at once.

Operator channels also allow people a place to report issues without
escalating situations in the channel. It is a good idea to advertise it in the
channel's topic. If people cannot get into your ops channel, they cannot use
it, so banning from that should be very rare.

It is also a good idea to ensure that people can use `ChanServ` to find nicks of
channel operators so they can contact them directly. As a result, we suggest
avoiding the `PRIVATE` ChanServ flag and keeping the `PUBACL` flag unless you
have specific reasons to use them.
