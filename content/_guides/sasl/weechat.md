---
title: Configuring SASL for WeeChat
category: sasl
credits: web7
---

Here's a simple guide for password-based authentication, based on the
[WeeChat quick-start guide](https://weechat.org/files/doc/stable/weechat_quickstart.en.html).

If you are using WeeChat 4.0 or later, replace 'ssl' with 'tls' in the
following instructions.

If you haven't already set up your connection to Libera.Chat, use this command:

```irc
/server add libera irc.libera.chat/6697 -ssl
```

If you have already set up a connection to Libera.Chat, or if that command
fails with a message like
`irc: server "libera" already exists, can't add it!`, then use these
commands to ensure that SSL/TLS is enabled for your connection:

```irc
/set irc.server.libera.addresses "irc.libera.chat/6697"
/set irc.server.libera.ssl on
```

Now, configure SASL:

```irc
/set irc.server.libera.sasl_mechanism plain
/set irc.server.libera.sasl_username <nickname>
/set irc.server.libera.sasl_password <password>
/save
```

It is recommended to store the password as secured data (skip setting
passphrase if already set):

```irc
/secure passphrase <passphrase>
/secure set libera_password <password>
/set irc.server.libera.sasl_password "${sec.data.libera_password}"
/save
```

For more complete instructions, including non-password-based mechanisms,
see the [official WeeChat documentation](https://www.weechat.org/files/doc/stable/weechat_user.en.html#irc_sasl_authentication).
