---
title: Configuring SASL for Irssi
category: sasl
credits: web7
---

Old versions of Irssi have a [bug][CVE-2019-13045] that can cause SASL to
fail. Ensure that you are using Irssi version 1.0.8, or 1.1.3, or 1.2.1, or
later (you can find out by running `irssi -v` in your nearest shell).

## Irssi

Recent Irssi versions include built-in SASL support via `/network`:

```irc
/network add -sasl_username <login> -sasl_password <password> -sasl_mechanism PLAIN LiberaChat
/server add -auto -net LiberaChat -tls -tls_verify irc.libera.chat 6697
/save
```

### Troubleshooting

To check that the setting was correct, run `/network` and confirm that the
Libera.Chat entry looks like this:

```irc
LiberaChat: sasl_mechanism: plain, sasl_username: TheCoolestNick, sasl_password: (pass)
```

All three items (mechanism, username, and password) must be set.

[CVE-2019-13045]: https://irssi.org/security/html/irssi_sa_2019_06/
