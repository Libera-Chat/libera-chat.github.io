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
`user/<your-account-name>`. If you are involved with a registered
project or community, you may be able to get a cloak that indicates your
affiliation with that group.

You may also sometimes see some temporary or `gateway` cloaks associated with
gateway services, such as when using our
[Tor hidden service](/guides/connect#accessing-liberachat-via-tor). These only
last for the duration that the user is connected through that service and help
users of the service be differentiated from each other. You cannot request
these cloaks.

## Generic user cloaks

Accounts registered after March 2024 that have a verified email address are
automatically assigned a generic user cloak. If your account does not
currently have a cloak, you may [contact staff][contact] to receive one.

If your account name (the nickname you registered with) contains characters
that are not valid in a hostname (e.g. underscores or brackets), a colon and
number will be added to the end to help ensure uniqueness.
If you have a generic user cloak and you wish to change the nickname in it to
reflect a change in account name, you will need to [contact staff][contact].
This is to prevent abuse.

### Generic bot cloaks

If you run a bot on the network, it is encouraged to register an account for
it that is separate from your personal user account. It is also encouraged
to get a bot cloak for your bot's account by [contacting staff][contact].
Staff will likely ask you to verify that you own the account by having you
PM a specific message from the bot (or a connection using its account).

Bot cloaks look like `user/<your-account-name>/bot/<bot-account-name>`
and help others to find you if something goes wrong with the bot.

## Project or community cloaks

[Projects and communities](/chanreg#what-is-on-topic) that are
aligned with our mission are eligible for group registrations. One of the
perks of group registration is the ability to request cloaks for participants.

### Getting project or community cloaks

If you are involved with a registered project or community, you may
request a cloak indicating your affiliation. Rules and procedures for project
or community cloaks vary by group. For help with this, ask a group contact for
your project or community. If your project has listed group contacts publicly,
they will be listed as "Public contacts" in `/msg ChanServ INFO <channel>`.
If not, ask for help in the relevant channel.

### Instructions for Group Contacts

If your project or community has had an official group registration approved,
then you are probably able to request cloaks for your users and contributors.
Registered projects are represented by Group Contacts (also known as GCs).
Only these people have the right to request cloaks for group members.
If you are a GC, then you will have a standing invite to `#libera-communities`
where you may request cloaks for projects that you are a registered GC for.

While it is not mandatory, we do recommend having some internal standards for
your users to meet to be eligible for your project's cloaks. Bearers of your
cloaks are seen by others as representatives of your community and as such
the bearer's behaviour will reflect onto the reputation of
your project or community.

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

Cloak removal is not automated. To remove your user cloak,
[contact staff][contact] for help. You can also request for your
project or community affiliation cloak to be reset to a generic user cloak.
In most cases, staff will impose a cooldown of several weeks before you can
personally request a cloak change again.

## Anonymity and privacy

Once you are cloaked, only you and Libera.Chat staff can see
your connecting host. Staff will refuse requests to disclose the
IP addresses, host names, or connection metadata of cloaked users
as per Libera.Chat's [privacy policy](/privacy).

While a cloak helps limit the exposure of your IP address, other tools can
more reliably provide a greater degree of privacy protection, including
bouncers, cloud-based hosts, and Tor. To connect to Libera.Chat via Tor, see
[Connecting to Libera.Chat](/guides/connect#accessing-liberachat-via-tor).

Additionally, your IP address can be exposed if your client features a
link preview feature, DCC functionality or similar.

### Limitations of cloaks

When using a cloak, it is strongly recommended to use [SASL](/guides/sasl)
instead of `/msg NickServ identify` to log into your account.
SASL allows you to automatically log in and be cloaked before
your connection is visible to the rest of the Libera.Chat network,
which prevents IP address exposures like this from happening:

```irc
--> jsmith (~jsmith@10-10-32-1.res.dsl.example.com) has joined #channel
<-- jsmith (~jsmith@10-10-32-1.res.dsl.example.com) has quit (Changing host)
--> jsmith (~jsmith@user/jsmith) has joined #channel
```

When using SASL, consider ensuring that your client disconnects if
it doesn't authenticate; some clients do not do this by default and
must be specifically configured to do so. This ensures that your
IP address will not be exposed whenever `NickServ` is
briefly unavailable due to maintenance.

[contact]: /guides/faq#how-to-find-libera-chat-staff
