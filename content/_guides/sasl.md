---
title: Using SASL
category: connecting
credits: web7
weight: 30
---

SASL is a way for your IRC client to automatically login to
an existing [Libera.Chat account](/guides/registration).
Libera.Chat sometimes requires SASL authentication; if you were
disconnected with a message saying you need SASL, skip to the section on
[connecting from a SASL-only address](#sasl-access-only-ip-ranges).

SASL is **not** the same thing as SSL or TLS. We strongly recommend
[using TLS](/guides/connect#accessing-liberachat-via-tls) to connect.

## SASL Client Configuration

We have instructions on how to configure SASL for some clients below.
These instructions are for `PLAIN` (username+password) authentication.

- [AdiIRC](https://dev.adiirc.com/projects/adiirc/wiki/SASL)
- [AndroIRC](https://web.archive.org/web/20210319221818/http://wiki.androirc.com/nickserv_sasl)
- [catgirl](/guides/catgirl)
- [Chatzilla](/guides/chatzilla)
- [Emacs ERC](https://elpa.gnu.org/packages/doc/erc.html#SASL)
- [EPIC5](/guides/epic5)
- [glirc](https://github.com/glguy/irc-core/wiki/Automatically-authenticating-to-NickServ)
- [Goguma](https://codeberg.org/emersion/goguma/src/branch/master/doc/connect.md)
- [HexChat](/guides/hexchat)
- [IceChat](https://wiki.icechat.net/index.php/New_Server#IRCv3_tab)
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
- [ZNC](https://wiki.znc.in/Sasl#Example)
- [IRCCloud](/guides/irccloud)

If you know of any additions or corrections to the lists above, or would like
to contribute a script or (better) documentation, contact us on IRC.

Documentation on how to create certificates and add their fingerprints to
NickServ for `EXTERNAL` authentication can be found in
[the article on NickServ and certificates](/guides/certfp).

Libera.Chat also supports `ECDSA-NIST256P-CHALLENGE`.
For information on how to provide NickServ with your public key,
see `/msg NickServ help set pubkey`.

## SASL access only IP ranges

Some IP address ranges are configured to require SASL authentication to an
**existing NickServ account with a verified email address**.
If you **do not** already have an account with Libera.Chat services,
you will need to connect from an IP address that isn't restricted
to [create and verify an account](/guides/registration).

If you are using a VPN or other anonymisation service,
consider temporarily disabling it, connecting to Libera.Chat,
and only re-enabling it after you have created and verified the account.

If your home internet provider is restricted, consider using public access
wifi hotspots such as those provided by most libraries and many school or
work campuses. If you are concerned about access point privacy, you can
[change your password](/guides/sendpass) once you are on a network you trust.

Connecting bots which lack SASL support from SASL-only ranges can be
achieved if you connect the bot via a bouncer that does support SASL
authentication. [ZNC](https://wiki.znc.in/ZNC) is a popular bouncer that
supports SASL.

Remember to check your email and verify the address on your account before you
try to connect from the IP that is restricted.
Once you **do** have an account, there are
[instructions on configuring your client above](#sasl-client-configuration).

SASL-only restrictions are typically applied to address ranges that are
the source of frequent policy violations due to providing easy access to
dynamic addresses to a wide range of users. These ranges are typically used
by VPN, cloud-computing, and mobile network providers.
*These restrictions are not targeted at individual users.*
