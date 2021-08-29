---
title: Frequently Asked Questions
category: about-irc
---

- TOC
{:toc}

## How to find Libera Chat staff?

Most [staff](/about#wider-staff-and-organisation-membership) have the
Operator mode in `#libera` to make them easy to find when they're connected.
There are also some robots, currently `ChanServ` and `ozone`, with that mode.
The robots do not answer questions.

You can confirm that someone you are talking to is a member of network
staff by their `@libera/staff/<TheirNick>` vhost, also known as a
[cloak](/guides/cloaks).

In many clients the cloak might appear at the top of a PM window. If not, it
will show in the information you get when you `/whois <TheirNick>`. For
example, the first line of the output for `/whois el` looks like:

```irc
06:50 -- [el] (~el@libera/staff/el): el
```

Staff make use of `/stats p` to highlight staff who are immediately available.
They will only be listed by this command if they have set themselves as "on
call."

If no staff are listed by `/stats p`, you can find staff you share channels
with by doing:

```irc
/who libera/staff/*
```

**You do not need to ask permission to send private messages to any staff
member.** They will answer if they notice your message in time. If they're not
responsive, you may attempt to talk to other staff members instead.

If you are unable to [connect to the network](/guides/connect) at all, you can
contact staff on the support address: <support@libera.chat>.

## You need to identify via SASL to use this server

You have tried to connect from a
[SASL access only range](/guides/sasl#sasl-access-only-ip-ranges)

## Cannot send to nick/channel

## Cannot change nickname while banned on channel

First, check that you are [registered](/guides/registration).

If you already have an account then [identify](/guides/registration#logging-in)
to it.

Some channels require users to be registered to participate. This is because
most botnets and disruptive people do not make accounts.

If you are both registered and identified and still cannot join or talk, you
might be [banned or quieted](/guides/faq#how-do-i-get-unbanned-or-unquieted)
in that channel.

## You must log in with services to message this user

Some people do not wish to get messages from unregistered users. If you are
not currently logged in then you will also be affected.

This is probably **not** targetted at you personally.

First, check if you are [registered](/guides/registration). If you do have
an account then make sure you have
[identified](/guides/registration#logging-in) to it.

## How do I get unbanned or unquieted?

If you have been banned from or quieted in a channel, you will need to resolve
the issue with the people who run the channel. If you cannot remember who
banned or quieted you, there are a few options.

You can try to find your ban/quiet, and the operator who set it, by viewing
the ban and quiet lists for the channel (this may output a lot of lines):

```irc
/mode #channelname bq
```

If that is too overwhelming, or if `PUBACL` (public access control lists) is
off, or if all the bans are attributed to Libera.Chat domains, you can instead
try to
[find out who runs the channel](faq#how-to-find-out-who-runs-a-channel).

Remember, channel ops are **not** obligated to negotiate with you, and evading
bans (sneaking back in) usually makes the matter worse.

Asking network staff will not work as we **will not** override a ban or quiet
set by a channel operator, and will not reveal information that is private. We
also **will not** confiscate channels for "unfair" banning practices.

If all this fails it is likely best for everyone involved if you just move on.

## How to find out who runs a channel?

There are several ways to find who owns or runs a channel. `ChanServ` might
show you some information.

```irc
/msg ChanServ info #channelname
/msg ChanServ flags #channelname
```

You can also see if there is a `-ops` or `-mods` channel mentioned in the
topic:

```irc
/topic #channelname
```

If the channel is set `PRIVATE` then you will not get information with those
commands.

Your only remaining option is to find someone else in the channel who might
help you get in contact.

**Be considerate of other channels when doing this as it can be seen as
dragging drama in from other places!**

## Nick/channel is temporarily unavailable

## Why is my nickname in use?

Nicknames are only reserved for you if you have [registered](/guides/registration)
them and they have not [expired](/guides/registration#nickname-expiry).

If someone else is currently using an unexpired nick you have registered, you
can use `RELEASE` to bounce them off it onto a Guest nick and then `REGAIN`
use of that nick for yourself. If you are not logged in, please first
[identify](/guides/registration#logging-in) to the account, then:

```irc
/msg NickServ RELEASE yournick
/msg NickServ REGAIN yournick
```

If your nickname was requested by someone else because it had expired, the
above process will not work. You may be able to request it back if it becomes
expired again.

## Why are people trying to log in as me?

Sometimes you might get alerts from NickServ or SaslServ about attempts to log
in to your account. These alerts are almost always caused by clients that are
misconfigured.

If you have lots of nicks grouped or if you have a common name or word
grouped, you will get an above average number of alerts.

You do not need to worry if you have chosen a strong password that is not used
in other places.

If the attempts are very frequent and persistent, feel welcome to let staff
know, just in case.

_At your own risk_, and depending on your client, you may be able to filter
the alerts. Ask your client's support channel if this is possible.

## Warez or Adult content sharing?

This is explicitly
[unwanted content](/policies#unwanted-content-and-behaviour) on Libera.Chat.

You can find other networks which may be ok with these activities on
[netsplit.de](https://netsplit.de).

## Are bots allowed?

Users may run bots that connect to Libera.Chat. Please get permission from the
operators of any channels that the bot is in.

While operators may not notice a quiet bot, they very likely will notice and
may take offense to unauthorised bots that are noisy or interactive.

If your bot is storing information in a publicly accessible way, you should
follow our [public logging policy](/policies#public-logging).

## Are bridges allowed?

We do allow user operated bridges on Libera.Chat. Please get permission from
the operators of channels that you bridge.

Consider informing users that what they say may be visible to people not
represented in the channel at the time. The spirit of our
[public logging policy](/policies#public-logging) applies here.

It is recommended that your bridge has an [account](/guides/registration)
and some way to identify who runs it, such as in the gecos or "real name"
field.

We prefer one to many bridging over one to one bridging, especially if the
majority of users are not on irc.

We also recommend that staff are notified about one to one bridging as it may
hit connection limits or trip anti-abuse measures. Please contact
`support@libera.chat` about such issues.

## Can I connect with Matrix?

While it is not designed as an IRC client, you can use Matrix to connect to
Libera.Chat through a bridge.

The Matrix bridge team has published a
[guide](https://matrix-org.github.io/matrix-appservice-irc/latest/usage.html)
for using the IRC bridge. If you still have questions about using the
Libera.Chat bridge, visit `#libera-matrix` from IRC or
`#libera-matrix:libera.chat` from Matrix.

The bridge has an interface called an appservice that lets you manage your
presence on the bridge. If it does not contact you automatically, start a
conversation with `@appservice:libera.chat`. For example Element has `/msg`:

```irc
/msg @appservice:libera.chat !help
```

You can use the appservice to store authentication. Please see the output of
the above `!help` command or
[the guide](https://matrix-org.github.io/matrix-appservice-irc/latest/admin_room.html)
for the options. Currently these are the `storepass` and `username` options.

To join channels on Libera.Chat through matrix, navigate to
`<channelname>:libera.chat` either through the Element.io interface or with
`/join`. For example:

```irc
/join #libera-matrix:libera.chat
```

If you wish to use network services, such as to register an account or channel
you can message them directly. The following will get their help text:

```irc
/msg @NickServ:libera.chat help
/msg @ChanServ:libera.chat help
/msg @MemoServ:libera.chat help
```

The lines in their responses might be out of order. This issue is in the
Matrix message handling. It may also affect time-critical responses elsewhere.

The bridge is run by [EMS](https://ems.element.io/). The
[EMS ToS](https://element.io/terms-of-service) and
[Privacy Policy](https://element.io/privacy) apply when using it. Libera.Chat
staff do **not** have access to EMS data.

Libera.Chat prohibits double-bridging IRC to IRC through the Libera.Chat EMS
and may request intervention if any bridged channel causes problems. We
request that idle connections are cleaned up by Matrix staff to minimize
disruptions to IRC channels during bridge restarts.
