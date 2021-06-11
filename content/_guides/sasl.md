---
title: Using SASL
category: connecting
credits: web7
---

SASL is a method that allows identification to services (NickServ) during the
connection process, before anything else happens - therefore eliminating the
need to `/msg NickServ identify`. To use SASL, you must
[register your nickname](/guides/registration).

## SASL Client Configuration

We have instructions on how to configure SASL for some clients, below. If
asked to choose an authentication mechanism, be aware that Libera.Chat does
not support `DH-BLOWFISH`

- [AdiIRC](https://dev.adiirc.com/projects/adiirc/wiki/SASL)
- [AndroIRC](http://wiki.androirc.com/nickserv_sasl) or
  [archived here](https://web.archive.org/web/20210319221818/http://wiki.androirc.com/nickserv_sasl)
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

To [create a NickServ account](/guides/registration) from a restricted IP
address, you can first connect with a web client such as
[our webchat](https://web.libera.chat). Webchat is not affected by the SASL
restriction. Once your NickServ account's email address has been verified you
can use that account to satisfy the SASL requirement.

SASL access only restrictions are typically applied to address ranges that are
the source of frequent policy violations due to providing easy access to
dynamic addresses to a wide range of users. These ranges are typically used
by VPN, cloud-computing, and mobile network providers.
*These restrictions are not targeted at individual users.*
