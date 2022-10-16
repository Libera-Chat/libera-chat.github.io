---
title: Using Channels
category: using
credits: web7
weight: 50
---

## Channel Policies

In general, local policy and rules for each channel are set by that channel's
operators. While we encourage all channel operators to adopt our
[guidelines](/guidelines), if a project or community decides to operate
otherwise then we respect their decisions providing network policies are
respected. If you believe that the way in which a particular channel is run
contravenes our [ground rules](/policies) then you should raise your concerns
first with the channel owners, and then with Libera.Chat staff who will
address cases on an individual basis.

## Why can't I join a channel?

There are several things that might prevent you from joining a particular
channel. In most cases the server will tell you the reason, but some clients
do not correctly display that information to you, so it's useful to be able
to check for yourself. Some of the common causes, in no particular order, are:

- Check that you're logged in with services. You can log in by running
  `/msg NickServ IDENTIFY YourNickname YourPassword`.
  Some channels use mode `+r`, which prevents unregistered users, or users who
  aren't logged in, from joining.
- Check whether the channel has modes `+i` or `+k` set. These will prevent
  anyone from joining who isn't explicitly invited or doesn't know the channel
  password.
- Check whether mode `+j` is set. This is a join throttle, which prevents
  lots of users from joining in a short period of time. If this is the case,
  it might be worth trying again after a minute or two, to see whether the
  join throttle is the reason.
- If you are logged in to services, check the channel ban list -- you can do
  this using `/mode #channel b`.

If you've not been in the channel in question recently, it's possible that
you're affected by a wide-ranging ban, so pay attention to any bans that
include `*` or `?` wildcards and to extended bans starting with `$`.
You can read more about the different types of ban masks in the
[masks guide](/guides/channelmodes#masks).

If you find a ban which matches you but you feel wasn't intended to keep
you out, then talk to one of the channel operators to see about having it
removed. You can find a list of channel operators via the
`/msg ChanServ FLAGS #channel` command.

If you're still stuck, feel free to ask a staff member for help in working
out what's preventing you from joining.

## Why can't I talk in a channel?

The three most common causes for this are a quiet mask -- use
`/mode #channel q` to see the list and then check the advice above regarding
bans -- mode `+m`, which prevents anyone who isn't voiced from talking,
or mode `+R`, which prevents anyone who isn't logged in from talking.
If you're still unsure, again, feel free to ask staff for help in working
out what the problem might be.
