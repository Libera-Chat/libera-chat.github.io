---
title: Configuring SASL for Epic5
category: sasl
credits: web7
---

EPIC5 has the sasl_auth script built-in. Mikhail contributed this explanation
of how to use it.

Open your EPIC5 configuration file, `~/.epicrc` or `~/.ircrc`, in your
preferred editor. Add the following lines:

- `load builtins`
- `load sasl_auth`
- `sasl_auth *.libera.chat plain username password`

Replace username with your primary nick. The password may be replaced with
your password or omitted, in which case EPIC5 will prompt for the password
when it connects. You may change `*.libera.chat` to something more specific
if desired, but the `*` means SASL authentication will be attempted for any
`irc.libera.chat` server.
Only `plain` is supported as the authentication mechanism. You may want to
use SSL to protect your password.

If everything has been configured correctly, the next time you connect you
should see the message: `SASL authentication successful`
