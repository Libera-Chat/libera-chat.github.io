---
title: Frequently Asked Questions
category: about-irc
weight: 20
seo:
  type: FAQPage
---

- TOC
{:toc}

## How to find channels?

If you are using our KiwiIRC webchat and have decent internet,
type `/list`. Otherwise, please see our guide on
[finding channels](https://libera.chat/guides/findingchannels).

## How to find Libera Chat staff?

### In `#libera`

`#libera` is the main support channel for users of the network.
Staff in `#libera` are opped up,
see [this link](https://libera.chat/guides/catalyst#why-is-libera-different)
for why we do this.
There are also some bots, currently `ChanServ` and `ozone`,
that are opped at all times. The robots do not answer questions.

Note that `#libera` is one of the largest channels on the network.
Please be considerate of others' privacy when sharing information.

### Immediately available staff

[Staff](/about#wider-staff-and-organisation-membership) make use of a list
to highlight staff members who are immediately available. This allows you to
find and contact staff discreetly while being reasonably sure you will
get a timely answer.

On most clients, you can request the list with the following command:

```irc
/stats p
```

The list may appear in your network window instead of the current one.
If the list is empty, staff may still be available for private messages.

### Other ways to find staff

If no staff are listed with `/stats p`, most clients will allow you to
find staff member members that share channels with you with:

```irc
/who libera/staff/*
```

As with `/stats p`,
this list may appear in your network window instead of the current one.

### Contacting staff privately

**You do not need to ask permission to send private messages to any staff
member.** They will answer if they notice your message in time. If they're not
responsive, you may attempt to talk to other staff members instead.

You can confirm that someone you are talking to is a member of network
staff by their `libera/staff/*` [cloak](/guides/cloaks).
In many clients the cloak might appear at the top of a PM window. If not, it
will show in the information you get when you `/whois <TheirNick>`. For
example, the first line of the output for `/whois el` looks like:

```irc
06:50 -- [el] (~el@libera/staff/el): el
```

### Email

If you are unable to [connect to the network](/guides/connect) at all
or have a longer query that isn't well-expressed over IRC,
you can contact staff [by email to <support@libera.chat>](mailto:support@libera.chat).

## The server says I am banned! Why?

If you are unable to connect to the network and have received a message that you
are banned, first [ensure that you are using SASL](/guides/sasl) as sometimes we
need to restrict some IPs to require the SASL authentication method. This requires
you to have registered an account already. Use another internet connection to make
an account first, if you're unable to connect on your regular internet connection.

If you are still unable to connect, or if you get banned again once you do connect,
you can enquire about the ban by sending an email to us at <bans@libera.chat>.

## You need to identify via SASL to use this server

You have tried to connect from a
[SASL access only range](/guides/sasl#sasl-access-only-ip-ranges).

## Cannot send to nick/channel

## Cannot change nickname while banned on channel

Some channels have a quiet on `$~a`, which prevents unregistered users from
sending messages to the channel or changing nicknames while in the channel.
This is because most botnets and disruptive people do not make accounts,
and channel mode `+R` did not always exist on the network.

First, check that you are [registered](/guides/registration).
If you already have an account then [identify](/guides/registration#logging-in)
to it.

If you are both registered and identified and still cannot join or talk, you
might be [banned or quieted](/guides/faq#how-do-i-get-unbanned-or-unquieted)
in that channel.

## You must log in with services to message this user

Some people do not wish to get messages from unregistered users. If you are
not currently logged in then you will also be affected.

This is probably **not** targeted at you personally.

First, check if you are [registered](/guides/registration). If you do have
an account then make sure you have
[identified](/guides/registration#logging-in) to it.

## I have a cloak, but I still see my IP address in `/whois`!

The output you receive from commands is not indicative of the output others
receive from those same commands. The line that contains your IP address
is not shown for other users. You can confirm this for yourself by launching
[the webchat](https://web.libera.chat) and `/whois`-ing your primary
connection from the webchat.

## How do I get unbanned or unquieted?

If you have been banned from or quieted in a channel, you will need to resolve
the issue with the people who run the channel. If you cannot remember who
banned or quieted you, there are a few options.

Some channels have `-ops` channels where the operators of the channel
are available for ban appeals and other discussion about channel management.
For example, a channel named `#example` might have an `#example-ops` channel.
It is a common courtesy not to idle in such channels out of respect for the
privacy of others who might join after you.
Please note that some channels, like `#libera`, have `-ops` channels that
are private. If attempting to join an `-ops` channel gives you an error that
you must be invited, the channel is probably not meant for appeals.

You can try to find your ban/quiet and the operator who set it by viewing
the ban and quiet lists for the channel (this may output a lot of lines):

```irc
/mode #channelname bq
```

If that is too overwhelming, or if the ChanServ `PUBACL` setting
(public access control lists) is off, you can instead try to
[find out who runs the channel](faq#how-to-find-out-who-runs-a-channel).

Remember, channel ops are **not** obligated to negotiate with you, and evading
bans (sneaking back in) usually makes the matter worse. In fact, intentionally
evading channel bans is often grounds for removal from the network.

Asking network staff will not work as we **will not** override a ban or quiet
set by a channel operator, and will not reveal information that is private. We
also **will not** confiscate channels for "unfair" banning practices.

If all this fails it is likely best for everyone involved if you just move on.

## What is DroneBL?

[DroneBL](https://dronebl.org/) is a database of IP addresses that have been
sources of automated abuse in the past. Because of dynamic IP address
assignment, the data on DroneBL tends to eventually become stale. If you are
banned due to your host being on DroneBL, follow the link in the ban message
and click on the link on the page for your IP address that says
"request removal".

Libera.Chat also uses [EFnet RBL](https://rbl.efnetrbl.org/).
As with DroneBL, you will receive a link that you can use to request removal
from this list.

If, after requesting removal, you are not unbanned within a day or so,
please contact Libera.Chat staff. We can grant temporary exemptions and,
in the case of DroneBL, potentially expedite removal.

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

If the channel is has the `PRIVATE` setting
or does *not* have the `PUBACL` setting,
then you may not get information with those commands.

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

## What are Global Notices and Wallops, and can I opt out of them?

**Global Notices** are network wide messages that staff can send to everyone on
the network, and are reserved for important news, warnings, or explanations
about network related things such as netsplits or downtime. You **cannot** opt
out of global notices.

**Wallops** are messages sent to everyone who has the `+w` [user mode](/guides/usermodes)
set. These messages might be additional information about an incident
mentioned in a global notice, messages that are intended to encourage
community building, or to celebrate milestones in the projects and communities
that are the network's primary stakeholders. Messages sent with wallops
**can** be opted out of with `/mode yourname -w`. This will need to be done
each time you connect to the network as this is a default user mode on
Libera.Chat. Nearly all clients can send commands at connection time;
see their documentation or support channels for details.

## Warez or Adult content sharing?

This is explicitly
[unwanted content](/policies#unwanted-content-and-behaviour) on Libera.Chat.

You can find other networks which may be ok with these activities on
[netsplit.de](https://netsplit.de).

## What is meant by "bot", "bouncer", or "bridge"?

Bots, bouncers, and bridges are different types of client applications that
connect to the IRC network. Sometimes these clients match multiple of the
following definitions.

A **bot** is a utility client that provides automated responses to private
input or channel activity from others connected to the network.

Some bots can roam around the network without being piloted. Roaming bots
can be a big problem and are generally not allowed on Libera.Chat. You
*must* ask staff before deploying them.

A **bouncer** connects to the network on behalf of one or more clients. The
bouncer acts like both a server and a client; a client app would act like
it is a network, and a network's server would act like it is a client.

Both people and bots can connect through bouncers. Users of a bouncer can
roam around the network. They can join and leave channels, send private
messages to other users, and authenticate to network services.

Bouncers do not explicitly connect channels together. Each user on a bouncer
has their own puppeted client connected on the IRC network.

A **bridge** does explicitly connect a channel to another, and relays the
conversation and actions in each channel to the other one. In general, these
channels or rooms are on different networks and sometimes on different
protocols. IRC can be connected to IRC, or IRC can be connected to Discord,
Telegram, Matrix, XMPP, etc.

Bridging can either connect one client to represent multiple people, or one
client per participant. Most per-participant connections of bridges cannot
roam around the network and are confined to the channel that has been
connected. Additionally, some bridges also have the bouncer abilities available.

## Are bots allowed?

Users may run bots that connect to Libera.Chat. Please get permission from the
operators of any channels that the bot is in.

While operators may not notice a quiet bot, they very likely will notice and
may take offence to unauthorised bots that are noisy or interactive.

If your bot is storing information in a publicly accessible way, you should
follow our [public logging policy](/policies#public-logging).

### Flood exemptions for bots

Users and bots with the flags `+v` or `+o` within a channel have protection
against triggering flood mitigation. For this reason, it is recommended that
noisy bots have one of these flags. Please be aware that this does *not*
exempt bots from the typical rate limits for sending messages, which allow
one message to be sent every two seconds.

Additional exemptions may be allocated when the need for them is demonstrated.
If you find that your bot is hitting limits, email <support@libera.chat> for
advice.

### Workaround for bots that don't support SASL

If you're trying to run a bot on a SASL-only range, your bot will need SASL
support. If it lacks this support, you can connect it through a bouncer that
does support SASL.

## Are LLMs allowed?

We have [outlined some best practices](https://libera.chat/news/llm-etiquette)
for using LLMs on the network.

Training AIs on channel content is considered scraping or public logging,
which are covered by our [network policies](/policies#public-logging).

## Are bridges allowed?

We do allow user operated bridges on Libera.Chat. Please get permission from
the operators of channels that you bridge.

You also need to be prepared to moderate the content that is bridged.

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
<support@libera.chat> about such issues.

## Can I connect with Matrix?

Please consult our [Matrix FAQ](/guides/matrix) for information on connecting
with Matrix, getting support for Matrix, and other Matrix related questions.

## Can I connect with XMPP?

Third-party operated XMPP bridges are allowed on Libera.Chat, however we
prohibit double bridging, including over XMPP. We also request that
XMPP bridges are configured to display the JID in the connection's gecos
field to allow individuals to be banned instead of the entire bridge, since
JID hashes in idents can collide.

We prohibit bridging Matrix to IRC over XMPP due to abuse, and XMPP bridges
that allow this might end up blocked as a result.

We do not maintain a directory of XMPP bridges.
