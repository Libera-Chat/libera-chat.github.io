---
title: Configuring SASL for Irssi
category: sasl
credits: web7
---

Old versions of Irssi have a [bug][CVE-2019-13045] that can cause SASL to
fail. Ensure that you are using Irssi version 1.0.8, or 1.1.3, or 1.2.1, or
later (you can find out by running `irssi -v` in your nearest shell).

## Irssi

Irssi includes built-in SASL support via the `-sasl_mechanism`,
`-sasl_username`, and `-sasl_password` options of `/network`.
The following commands assume you are using a network called "liberachat"
which is included in the default configuration for irssi 1.4.1 and later.

```irc
/network modify -sasl_mechanism PLAIN -sasl_username <login> -sasl_password <password> liberachat
/save
```

If you do not have a "liberachat" network, either replace "liberachat"
with the network name you are using or make a new network entry
and set up SASL at the same time with:

```irc
/network add -sasl_mechanism PLAIN -sasl_username <login> -sasl_password <password> liberachat
/server add -auto -net liberachat -tls -tls_verify irc.libera.chat 6697
/save
```

### Troubleshooting

To check that the setting was correct, run `/network` and confirm that the
Libera.Chat entry looks like this:

```irc
liberachat: sasl_mechanism: plain, sasl_username: TheCoolestNick, sasl_password: (pass)
```

All three items (mechanism, username, and password) must be set.

[CVE-2019-13045]: https://irssi.org/security/html/irssi_sa_2019_06/
