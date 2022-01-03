---
title: Configuring SASL for Irssi
category: sasl
credits: web7
---

The setup for SASL on Irssi differs depending on the version you have (you can
find out by running `irssi -v` in your nearest shell).

## Irssi 1.0.8, or 1.1.3, or 1.2.1, or later

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

## Irssi 0.8.18 through 1.2.0

These versions have built-in SASL support as listed for version 1.2.1 or later
above, but _may_ have a [memory corruption bug][CVE-2019-13045] that can cause
reconnections to fail, and strange login attempts to be registered at IRC
servers from your client.  If your version is affected, an upgrade is
recommended.  Any of the versions of irssi that have been fixed may follow the
instructions for version 1.2.1 or later.

Fixed in: 1.0.8, or 1.1.3, or _1.2.1 and later_.

[CVE-2019-13045]: https://irssi.org/security/irssi_sa_2019_06.txt

## Older versions

These versions need a separate script in order to support SASL: `cap_sasl.pl`.
You can install it from <https://scripts.irssi.org>:

```sh
mkdir -p ~/.irssi/scripts/autorun
cd ~/.irssi/scripts/autorun
wget https://scripts.irssi.org/scripts/cap_sasl.pl -O ../cap_sasl.pl
ln -sf ../cap_sasl.pl .
```

Now load and configure it inside Irssi:

```irc
/script load cap_sasl
/network add LiberaChat
/server add -auto -net LiberaChat -ssl -ssl_verify irc.libera.chat 6697
/sasl set LiberaChat <login> <password> PLAIN
/sasl save
/save
```
