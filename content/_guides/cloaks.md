---
title: Cloaks 
category: using
---

A cloak is a custom hostmask that obscures your client hostname or IP address,
as shown in IRC operational messages or `/whois`. 

For example, the hostmask `jsmith@10-10-32-1.res.dsl.example.com` might appear
with a cloak as `jsmith@user/jsmith`.

A cloak can help other users and bots identify you simply and consistently. It
can also help limit the exposure of your IP address on the network, although
it does not necessarily provide anonymity or prevent the discovery of your IP
address. 

As an individual, you can get a generic user cloak in the form of
`user/username`. If you are involved with a well-known project or community,
you may be able to get a cloak that indicates your affiliation with that
group. 

## Generic user cloaks

You can request a generic user cloak from the bot in `#libera-cloak`. The
cloak will be in the form of `user/<NickServ username>`. Registration with
`NickServ` is required.

### To request a cloak from the bot:

1. [Register with NickServ](/guides/registration) if you have not already
   done so.
2. `/join #libera-cloak`
3. Say `!cloakme`

The bot will give your account a generic user cloak and then — because its work
is done — politely kick and ban you from the channel. Your new cloak takes
effect immediately. 

## Project or community cloaks

If you are involved with a well-known project or community, you may request a
cloak indicating your affiliation. For help with this, ask someone associated
with your project or community who can coordinate with Libera.Chat to
administer cloaks.

## Re-identifying with NickServ

If you are not [using SASL](/guides/sasl) or a server password in your client,
you may need to re-identify with `NickServ` to associate your cloaked hostmask
with your account. See `/msg NickServ help identify` for more information.

## Checking your cloak

You should see your cloaked hostmask in `/who <yournick>`, in `/whois
<yournick>`, in `/join` or `/part` messages, and upon connection to the
network.

You may see your own IP address when you `/whois` yourself. This is visible
only to you and is not part of the hostmask visible to others.

## Anonymity and privacy

While a cloak helps limit the exposure of your IP address, other tools can
more reliably provide a greater degree of privacy protection, including
bouncers, cloud-based hosts, and Tor. To connect to Libera.Chat via Tor, see
[Connecting to Libera.Chat](/guides/connect#accessing-liberachat-via-tor).
