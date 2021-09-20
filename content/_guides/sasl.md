---
title: Using SASL
category: connecting
credits: web7
weight: 30
---

SASL is a method that allows identification to services (NickServ) during the
connection process, before anything else happens - therefore eliminating the
need to `/msg NickServ identify`. To use SASL, you must
[register your nickname](/guides/registration).

Libera.Chat [**requires** the use of SASL](#sasl-access-only-ip-ranges) for
certain IP ranges.

## SASL Client Configuration

We have instructions on how to configure SASL for some clients, below. If
asked to choose an authentication mechanism, be aware that Libera.Chat does
not support `DH-BLOWFISH`

- [AdiIRC](https://dev.adiirc.com/projects/adiirc/wiki/SASL)
- [AndroIRC](https://web.archive.org/web/20210319221818/http://wiki.androirc.com/nickserv_sasl)
- [Chatzilla](/guides/chatzilla)
- [EPIC5](/guides/epic5)
- [glirc](https://github.com/glguy/irc-core/wiki/Automatically-authenticating-to-NickServ)
- [HexChat](/guides/hexchat)
- [irssi](/guides/irssi)
- [Konversation](http://userbase.kde.org/Konversation/Configuring_SASL_authentication)
- [KVIrc](/guides/kvirc)
- [LimeChat](/guides/limechat)
- [mIRC](/guides/mirc)
- [Pidgin](/guides/pidgin)
- [Quassel](/guides/quassel)
- [Revolution](/guides/revolution)
- [Textual](/guides/textual)
- [WeeChat](/guides/weechat)
- [ZNC](http://wiki.znc.in/Sasl#Example)
- [IRCCloud](/guides/irccloud)

If you know of any additions or corrections to the lists above, or would like
to contribute a script or (better) documentation, contact us on IRC.

Documentation on how to create certificates and add their fingerprints to
NickServ for `SASL EXTERNAL` can be found in
[the article on NickServ and certificates](/guides/certfp).

## SASL access only IP ranges

Some IP address ranges are configured to require SASL authentication to an
existing NickServ account with a **verified email address**. Connections from
these ranges will be refused with the message `SASL access only`. You can
follow the instructions above to configure many commonly used clients.

Our webchat clients use SASL authentication when a password is provided, but
they are **no longer exempt** from the SASL access only restriction. You will
need to find an alternative connection to register your account on before
swapping to using the SASL access only connection.

If your home internet providers are restricted, consider using public access
wifi hotspots such as those provided by most libraries and many school or
work campuses. If you are concerned about access point privacy, you can
[change your password](/guides/sendpass) once you are on a network you trust.

Connecting bots which lack SASL support from SASL access only ranges can be
achieved if you connect the bot via a bouncer that does support SASL
authentication. [ZNC](https://wiki.znc.in) is a popular bouncer that supports
SASL.

SASL access only restrictions are typically applied to address ranges that are
the source of frequent policy violations due to providing easy access to
dynamic addresses to a wide range of users. These ranges are typically used
by VPN, cloud-computing, and mobile network providers.
*These restrictions are not targeted at individual users.*
