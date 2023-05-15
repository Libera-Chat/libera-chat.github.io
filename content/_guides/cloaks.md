---
title: Cloaks 
category: using
weight: 30
---

A cloak is a custom hostmask that replaces your client hostname or IP address,
as shown in IRC operational messages or `/whois`.

For example, the hostmask `jsmith@10-10-32-1.res.dsl.example.com` might appear
with a cloak as `jsmith@user/jsmith`.

A cloak can help other users and bots identify you simply and consistently. It
can also help limit the exposure of your IP address on the network, although
it does not necessarily provide anonymity or prevent the discovery of your IP
address, see [below](#limitations-of-cloaks).

As an individual, you can get a generic user cloak in the form of
`user/username`. If you are involved with a well-known project or community,
you may be able to get a cloak that indicates your affiliation with that
group.

You may also sometimes see some temporary or `gateway` cloaks associated with
gateway services, such as when using our
[tor hidden service](/guides/connect#accessing-liberachat-via-tor). These only
last for the duration that the user is connected through that service and help
users of the service be differentiated from each other. You cannot request
these cloaks.

## Generic user cloaks

You can request a generic user cloak from the bot in `#libera-cloak`. The
cloak will be in the form of `user/<NickServ username>`. Registration with
`NickServ` is required.

### Requesting a self-service user cloak

Please note: This process may change in the future.

1. [Register with NickServ](/guides/registration) if you have not already
   done so. You will also need to be
   [identified](/guides/registration#logging-in).
2. `/join #libera-cloak`
3. Say `!cloakme`

The bot will give your account a generic user cloak and then — because its
work is done — politely kick and ban you from the channel.

Your new cloak takes effect immediately. It will automatically activate each
time you log in to your nickserv account in the future.

### If it does not work

If you already have a cloak and wish to change the nickname in it, you will
need to have a staff member update it. This is to prevent abuse.

Also for abuse prevention, accounts sometimes get flagged. When this happens
it will require a human to approve the cloak. Please contact a staff member
directly if the self-service channel does not cloak you.

### Generic bot cloaks

If you run a bot on the network, you should also get the bot cloaked. While
you can simply obtain a self-service user cloak for the bot, it is strongly
recommended to get a proper bot cloak by
[contacting staff](/guides/faq#how-to-find-libera-chat-staff). These look
like `user/<your username>/bot/<bot's username>` and help others to find
you if something goes wrong with the bot.

## Project or community cloaks

[Projects](/chanreg#project-registration) and
[communities](/chanreg#community-registration) that are
aligned with our mission are eligible for group registrations. One of the
perks of group registration is the ability to request cloaks for participants.

### Getting project or community cloaks

If you are involved with a registered project or community, you may
request a cloak indicating your affiliation. Rules and procedures for project
or community cloaks vary by group. For help with this, ask a group contact for
your project or community. If your project has listed group contacts publicly,
they will be listed as "Public contacts" in `/msg ChanServ INFO <channel>`. If
not, ask for help in the relevant channel.

### Instructions for Group Contacts

If your project or community has had an official group registration approved,
then you are probably able to request cloaks for your users and contributors.
Registered projects are represented by Group Contacts (also referred to as GCs).
Only these people have the right to request cloaks for group members.
If you are a GC, then you will have a standing invite to #libera-communities
where you may request cloaks for projects that you are a registered GC for.

While it is not mandatory, we do recommend having some internal standards for
your users to meet to be eligible for your project's cloaks. Bearers of your
cloaks are seen by others as representatives of your community and as such the
bearer's behaviour will reflect onto the reputation of your project or community.

## Re-identifying with NickServ

Assigned cloaks must be associated with an account and will not appear if you
are not identified. If you are not [using SASL](/guides/sasl) or a server
password in your client, you may need to re-identify with `NickServ` before
getting cloaked or before the cloak is active. See
`/msg NickServ HELP IDENTIFY` for more information.

## Checking your cloak

You should see your cloaked hostmask in `/who <yournick>`, in
`/whois <yournick>`, in `/join` or `/part` messages, and upon connection to
the network.

You may see your own IP address when you `/whois` yourself. This is visible
only to you and network staff, and is not part of the hostmask visible to
others users.

## Removing your cloak

Cloak removal is not automated. To remove your user cloak, ask [someone on
staff](/about#wider-staff-and-organisation-membership) for
help. To remove your project or community affiliation cloak, ask the group
contact for your project or community.

## Anonymity and privacy

Cloaks are not intended to be used solely as a privacy feature.

While a cloak helps limit the exposure of your IP address, other tools can
more reliably provide a greater degree of privacy protection, including
bouncers, cloud-based hosts, and Tor. To connect to Libera.Chat via Tor, see
[Connecting to Libera.Chat](/guides/connect#accessing-liberachat-via-tor).

Additionally, your IP address can be exposed if your client features a
link preview feature, DCC functionality or similar.

### Limitations of cloaks

Before your account has been assigned a cloak, your IP address or
hostname will be visible, especially if you have joined any channels.
Even when you have not joined any, your connecting host will be
visible in `/whowas <yournick>`.

Additionally,
**you must use [SASL](/guides/sasl) or your IP will be exposed briefly**
when using e.g automatic `/msg NickServ identify` as provided by your client.
It will look like this to other users:

```irc
--> jsmith (~jsmith@10-10-32-1.res.dsl.example.com) has joined #channel
<-- jsmith (~jsmith@10-10-32-1.res.dsl.example.com) has quit (Changing host)
--> jsmith (~jsmith@user/jsmith) has joined #channel
```

Other than that, only Libera.Chat staff can see your connecting host
after that, which is only looked at in cases of abuse.
