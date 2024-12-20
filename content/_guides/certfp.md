---
title: Using CertFP
category: connecting
credits: web7
weight: 40
---

As an alternative to password-based authentication, you can connect to
Libera.Chat with a TLS certificate and have services recognise it
automatically.

For `SASL EXTERNAL` to work, you must [connect over TLS](/guides/connect).

## Creating a self-signed certificate

In order to follow these instructions, you will need the `openssl` utility. If
you are using Windows and do not have a copy, you might consider using Cygwin.

You can generate a certificate with the following command:

```sh
openssl req -x509 -new -newkey ed25519 -sha256 -nodes -out libera.pem -keyout libera.pem
```

You will be prompted for various pieces of information about the certificate.
The contents do not matter for our purposes, but `openssl` needs at least one
of them to be non-empty. This certificate will have the default expiry of 30
days, as Libera.Chat no longer checks for certificate expiry.

The `.pem` file will have the same access to your NickServ account as your
password does, so take appropriate care in securing it.

## Inspecting your certificate

The fingerprint can be checked with the following command:

```sh
openssl x509 -in libera.pem -noout -fingerprint -sha512 | awk -F= '{gsub(":",""); print tolower ($2)}'
```

## Connecting to Libera.Chat with your certificate

IRC clients generally differ in where they look for a certificate and how you
configure them to offer it to the server. If yours is not yet listed here,
advice in this section is unlikely to apply, but guides may be available
elsewhere on the web.

### Irssi

Move the certificates you created above to ~/.irssi/certs

```sh
mkdir ~/.irssi/certs
mv libera.pem ~/.irssi/certs
```

Configure your `/server` entry for Libera.Chat to use this certificate. You
may need to adapt this example for your existing configuration (the network
and hostname should match what you already use).

```irc
/server add -tls_cert ~/.irssi/certs/libera.pem -network LiberaChat irc.libera.chat 6697
```

For the first time, connect to Libera.Chat using password authentication so
that you can add the certificate fingerprint to NickServ.

```irc
/connect LiberaChat
```

Now follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv).
When done, you can switch the authentication to certificates.

```irc
/disconnect LiberaChat
/network add -sasl_password '' -sasl_mechanism EXTERNAL LiberaChat
/connect LiberaChat
```

If you did everything right you should now be authenticated using your
certificate.

### weechat

Move the certificates you created above to ~/.weechat/certs

```sh
mkdir ~/.weechat/certs
mv libera.pem ~/.weechat/certs
```

Now disconnect and remove the current Libera.Chat server(s). Re-add it with
the SSL flag, using your newly generated certificate. Note that these commands
are just examples, you have to adapt them to your current servers.

```irc
# For Weechat version >= 4.0.0
/set irc.server.liberachat.addresses irc.libera.chat/6697
/set irc.server.liberachat.tls on
/set irc.server.liberachat.tls_verify on
/set irc.server.liberachat.tls_cert %h/certs/libera.pem
/set irc.server.liberachat.sasl_mechanism external

# For Weechat version < 4.0.0
/set irc.server.liberachat.addresses irc.libera.chat/6697
/set irc.server.liberachat.ssl on
/set irc.server.liberachat.ssl_verify on
/set irc.server.liberachat.ssl_cert %h/certs/libera.pem
/set irc.server.liberachat.sasl_mechanism external
```

and then reconnect to Libera.Chat.

### znc

Refer to znc's [official documentation](https://wiki.znc.in/Cert).

### soju

Soju cannot use self-generated certificates.
Instead, certificate generation and setup are handled automatically for you,
see `certfp generate` in the [IRC service manual](https://soju.im/doc/soju.1.html#IRC_SERVICE).

### HexChat

Place the .pem file in `certs/client.pem` in the HexChat config
directory (`~/.config/hexchat/` or `%appdata%\HexChat`). Note
that the `certs` directory does not exist by default and you will have to
create it yourself. Once the file is there, all subsequent SSL connections
will use the certificate.

If you connect to multiple IRC networks, you should keep in mind that using
the filename `certs/client.pem` will send the same certificate to all networks.
If you prefer per-network certificates, use the name of the network exactly
as it appears in the network list (Ctrl-S), including capitalisation and
punctuation (e.g. `certs/libera.pem` or `certs/Example Server.pem`).

### Konversation

Create the .pem file as per above using `rsa:4096` instead of `ed25519`,
then place it wherever you want. Start Konversation, then open the Identity
dialogue by either pressing <kbd>F8</kbd> or via the Settings menu entry.
Choose the identity you use for the Libera.Chat network or create a new one.
In the part `Auto Identify` you have to choose `SASL External (Cert)`
as the `Type` for SASL External or `SSL CLient Certificate` for CertFP.
SASL External requires at least version 1.7 of Konversation.
Optionally fill in your account name in the `Account` field.
You can then choose the certificate you created with the file picker
or enter the path manually in the field next to it.
Once done, apply the configuration and (re)connect to Libera.Chat.

### Revolution

Create the .pem file as per above, transfer it to your Android device, and
place it wherever you want (`Downloads` is a common location).
Start Revolution and navigate to the `Manage servers` screen if you are not
there already, long-press on the server you wish configure certFP for, and
select `Edit`. When presented with the `Edit a server` screen, tap on
`Authentication mode` and select `Client certificate (CertFP)`, then tap on
`IMPORT PEM` and navigate to where where you put the pem file and select it.
Tap the tick symbol on the top right of the `Edit a server` screen to save.

Alternatively, Revolution has the ability to generate a client certificate for
you. Once you are presented with `IMPORT PEM`, there will also be an option
to `CREATE NEW` and when you tap this, a certificate will be randomly generated
and a certificate fingerprint will be displayed. Tap the tick symbol on the top
right of the screen to save.

### KVIrc

1. You can create/put `libera.pem` in your KVIrc config directory (e.g.
   `~/.config/KVIrc`).
2. In `Settings/Configure KVIrc...` expand `Connection` and click `Advanced`.
3. In the `SSL` tab ...
4. Check `Use SSL certificate`.
5. At `Certificate location` configure the location of libera.pem.
6. Check `Use SSL private key`.
7. At `Private key location` configure the location of libera.pem.
8. If you have certificate and private key in separate files, use these
   respectively.
9. Click `OK` or `Apply`.

## Add your fingerprint to NickServ

You can then check whether you have a fingerprint by using `whois` on yourself:

```irc
/whois YourOwnNick
...
YourOwnNick has client certificate fingerprint 959c0bdfa9877d3466c5848f55264f72f132c657b002b79fda65dbe36c67f4bb3d2a3e2e9925cb5896a53c76169c5bb71b7853bd90192068dc77f4b20159a1d8
...
```

To allow NickServ to recognise you based on your certificate, you need to add
the **sha512** fingerprint to your account (you will need to log in by other
means in order to do so).

You can then authorise your current certificate fingerprint:

```irc
/msg NickServ CERT ADD
```

In the future, any connections you make to Libera.Chat with your certificate
will be logged into your account automatically. Optionally, or if you wish to
[connect via Tor](/guides/connect), you can enable SASL with the `EXTERNAL` mechanism.

## Troubleshooting

### Expecting an rsa key

This can happen if your client does not support the `ed25519` algorithm. If
you wish to continue with this client, you will need to replace your
certificate using the same command as above, but with `rsa:4096` in place of
`ed25519`.
