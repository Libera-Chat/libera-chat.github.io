---
title: Configuring SASL for WeeChat
category: sasl
---

Here's a simple guide for password-based authentication, based on the
[WeeChat quick-start guide](https://weechat.org/files/doc/stable/weechat_quickstart.en.html).

If you haven't already set up your connection to Libera.Chat, use this command:

    /server add liberachat irc.libera.chat/6697 -ssl

If you have already set up a connection to Libera.Chat, or if that command
fails with a message like
`irc: server "liberachat" already exists, can't add it!`, then use these
commands to ensure that SSL/TLS is enabled for your connection:

    /set irc.server.liberachat.addresses "irc.libera.chat/6697"
    /set irc.server.liberachat.ssl on

Now, configure SASL:

    /set irc.server.liberachat.sasl_mechanism PLAIN
    /set irc.server.liberachat.sasl_username <nickname>
    /set irc.server.liberachat.sasl_password <password>
    /save

For more complete instructions, including non-password-based mechanisms,
see the [official WeeChat documentation](https://www.weechat.org/files/doc/stable/weechat_user.en.html#irc_sasl_authentication).
