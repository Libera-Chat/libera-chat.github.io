---
title: Configuring SASL for Epic5
category: sasl
credits: web7
---

EPIC5 has the sasl_auth and sasl_nistp256 scripts built-in. Mikhail
contributed this explanation of how to use it.

For SASL authentication with PLAIN method open your EPIC5 configuration
file, `~/.epicrc` or `~/.ircrc`, in your preferred editor. Add the
following lines:

- `load global`
- `load sasl_auth`
- `sasl_auth *.libera.chat plain username password`

Replace username with your primary nick. The password may be replaced with
your password or omitted, in which case EPIC5 will prompt for the password
when it connects. You may change `*.libera.chat` to something more specific
if desired, but the `*` means SASL authentication will be attempted for any
`irc.libera.chat` server.

The script supports only `plain` authentication mechanism, you must use SSL
to protect your password.

Preferred method of connecting to Libera.Chat on EPIC5 is configuring your
ircII.servers file with proper connection line. This file is located in
`$IRCLIB` directory (you must set this environment variable in your shell
configuration file like .bashrc or .zshrc). The format is described in
[this documentation](http://help.epicsol.org/server_description), as an
example you can use following line:

`irc.libera.chat:7000:password=MYPASSWORD:nick=MYNICK:type=IRC-SSL`

If you prefer more secure NISTP256 authentication (it is mandatory if you
want to connect to the network via Tor) place following in your `~/.epicrc`
or `~/.ircrc` files:

- `load global`
- `load sasl_nistp256`
- `set sasl_nistp256_ecdsatool ~/bin/ecdsatool`
- `sasl_nistp256 *.libera.chat myaccount ~/.epic/libera.pem`

`sasl_nistp256_ecdsatool` setting must point to ecdsatool binary, you must
compile your own, source code is available on
[GitHub](https://github.com/kaniini/ecdsatool).

`sasl_nistp256` command has three arguments - server mask where to attempt
the authentication, account name and PEM file, generated with ecdsatool.
Take serious consideration regarding PEM file - you should place it only on
trusted machines and with 0600 permissions, because everyone who can get
the file can access your IRC account.

For more details look comments in `sasl_auth` or `sasl_nistp256` scripts.

If everything has been configured correctly, the next time you connect you
should see the message: `SASL authentication successful`
