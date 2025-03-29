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

<!-- markdownlint-disable MD022 -->
## Creating a self-signed certificate
{: .no_toc}


In order to follow these instructions, you will need the `openssl` utility. If
you are using Windows and do not have a copy, you might consider using Cygwin.

You can generate a certificate with the following command (recommended):

```sh
openssl req -x509 -new -newkey ed25519 -sha256 -nodes -out libera.pem -keyout libera.pem
```

If your client does not support using `ed25519`, use the following command:

```sh
openssl req -x509 -new -newkey rsa:4096 -sha256 -nodes -out libera.pem -keyout libera.pem
```

You will be prompted for various pieces of information about the certificate.
The contents do not matter for our purposes, but `openssl` needs at least one
of them to be non-empty. This certificate will have the default expiry of 30
days, as Libera.Chat no longer checks for certificate expiry.

The `.pem` file will have the same access to your NickServ account as your
password does, so take appropriate care in securing it.

## Inspecting your certificate
{: .no_toc}

The fingerprint can be checked with the following command:

```sh
openssl x509 -in libera.pem -noout -fingerprint -sha512 | awk -F= '{gsub(":",""); print tolower ($2)}'
```

## Connecting to Libera.Chat with your certificate
{: .no_toc}
<!-- markdownlint-restore -->

IRC clients generally differ in where they look for a certificate and how you
configure them to offer it to the server. If yours is not yet listed here,
advice in this section is unlikely to apply, but guides may be available
elsewhere on the web.

- TOC
{:toc}

### Irssi

1. Move the certificates you created above to ~/.irssi/certs:

   ```sh
   mkdir ~/.irssi/certs
   mv libera.pem ~/.irssi/certs
   ```

2. Configure your `/server` entry for Libera.Chat to use this certificate. You
   may need to adapt this example for your existing configuration (the network
   and hostname should match what you already use).

   ```irc
   /server add -tls_cert ~/.irssi/certs/libera.pem -network LiberaChat irc.libera.chat 6697
   ```

3. Connect to Libera.Chat using password authentication so that you can add
   the certificate fingerprint to NickServ.

   ```irc
   /connect LiberaChat
   ```

4. Now follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv).
   When done, you can switch the authentication to certificates.

   ```irc
   /disconnect LiberaChat
   /network add -sasl_password '' -sasl_mechanism EXTERNAL LiberaChat
   /connect LiberaChat
   ```

If you did everything right you should now be authenticated using your
certificate.

### weechat

1. Move the [certificates you created](#creating-a-self-signed-certificate)
   to `~/.weechat/certs`

   ```sh
   mkdir ~/.weechat/certs
   mv libera.pem ~/.weechat/certs
   ```

2. Configure your Libera Chat server to use your newly generated certificate.
   These commands are examples and you must adapt the `liberachat` portion of
   them to the name you gave to the network, as shown with `/server list`.

   ```irc
   # For Weechat version >= 4.0.0
   /set irc.server.liberachat.addresses irc.libera.chat/6697
   /set irc.server.liberachat.tls on
   /set irc.server.liberachat.tls_verify on
   /set irc.server.liberachat.tls_cert %h/certs/libera.pem

   # For Weechat version < 4.0.0
   /set irc.server.liberachat.addresses irc.libera.chat/6697
   /set irc.server.liberachat.ssl on
   /set irc.server.liberachat.ssl_verify on
   /set irc.server.liberachat.ssl_cert %h/certs/libera.pem
   ```

3. (Re)connect to the network.
4. Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
to your account.
5. Set the server's sasl_mechanism to `external`

   ```irc
   /set irc.server.liberachat.sasl_mechanism external
   ```

Future connections will now use your certificate to authenticate you.

Note that if you are using CertFP to connect to our tor hidden service,
either set up the alias for palladium or set `ssl_verify` to `off`.

### znc

Refer to znc's [official documentation](https://wiki.znc.in/Cert).

### soju

Soju cannot use self-generated certificates.
Instead, certificate generation and setup are handled automatically for you,
see `certfp generate` in the [IRC service manual](https://soju.im/doc/soju.1.html#IRC_SERVICE).

### HexChat

1. [Create the certificate](#creating-a-self-signed-certificate)
2. Place the file in `certs/client.pem` in the HexChat config directory
   (`~/.config/hexchat/` or `%appdata%\HexChat`). Note that the `certs`
   directory does not exist by default and you may need to create it.
3. Once the file is there, all subsequent SSL connections will use the
   certificate.

If you connect to multiple IRC networks, you should keep in mind that using
the filename `certs/client.pem` will send the same certificate to all networks.
If you prefer per-network certificates, use the name of the network exactly
as it appears in the network list (Ctrl-S), **including capitalisation and
punctuation** (e.g. `certs/libera.pem` or `certs/Example Server.pem`).

### Konversation

1. [Create a certificate](#creating-a-self-signed-certificate) using the
   `rsa:4096` algorithm, putting it wherever you want.
2. Start Konversation, then open the Identity dialogue by either pressing
   `F8` or via the Settings menu entry.
3. Choose the identity you use for Libera.Chat, or create a new one.
4. In the `Auto Identify` section, choose `SASL External (Cert)`
   as the `Type` for SASL External (requires version 1.7 or newer),
   or `SSL CLient Certificate` for CertFP.
5. (optional) Fill in your account name in the `Account` field.
6. Choose the certificate you created with the file picker or enter the path
   manually in the field next to it.
7. Apply the configuration and (re)connect to Libera.Chat.
8. Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
to your account.

Future connections will use the certificate to authenticate you.

### Revolution

1. Create the .pem file as per above.
2. Transfer it to your Android device, and place it wherever you want
   (`Downloads` is a common location).
3. Start Revolution and navigate to the `Manage servers` screen.
4. Long-press on the server you wish configure certFP for, and
   select `Edit`.
5. When presented with the `Edit a server` screen, tap on
   `Authentication mode` and select `Client certificate (CertFP)`, then tap on
   `IMPORT PEM`.
6. Navigate to where where you put the pem file and select it.
7. Tap the tick symbol on the top right of the `Edit a server` screen to save.

Alternatively, Revolution has the ability to generate a client certificate for
you:

1. When you are presented with `IMPORT PEM`, there will also be an option
   to `CREATE NEW`.
2. When you tap this option, a certificate will be randomly generated
   and a certificate fingerprint will be displayed.
3. Tap the tick symbol on the top right of the screen to save.

Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
to your account. Future connections will now use your certificate to
authenticate you.

### KVIrc

1. You can create/put `libera.pem` in your KVIrc config directory (e.g.
   `~/.config/KVIrc`).
2. In `Settings/Configure KVIrc...` expand `Connection` and click `Advanced`.
3. In the `SSL` tab ...
4. Check `Use SSL certificate`.
5. At `Certificate location` configure the location of libera.pem.
6. Check `Use SSL private key`.
7. At `Private key location` configure the location of libera.pem.
8. (optional) If you have certificate and private key in separate files, use
   these in the respective fields instead.
9. Click `OK` or `Apply`.
10. Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
    to your account.

Future connections will now use your certificate to authenticate you.

### mIRC

1. In the `File` menu, click `Select Server...`
2. In the `Connect` -> `Servers` section of the `mIRC Options` window,
   select Libera.Chat, click the hamburger menu button, then click `Edit`.
3. In the `Login Method` dropdown, select `SASL External /CAP`.
4. Click the `SSL` Tab.
5. Check `Use private certificate`.
6. Click the rectangle box below and select the certificate file.
   The file must contain both the certificate and private key.
7. Click the `OK` button.
8. Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
   to your account.

Future connections will now use your certificate to authenticate you.

### Adiirc

1. Follow the [certificate creation instructions](#creating-a-self-signed-certificate)
   above to generate a `rsa:4096` certificate.
2. Convert the cert to the needed `.pfx` format with
   `openssl pkcs12 -export -out libera.pfx -in libera.pem`
3. Add the path to the `libera.pfx` file in the `SSL` tab of the `Server List`,
   and **uncheck** the `Use global client certificate` option.
4. Click `Save`.
5. (Re)connect to the network using password authentication.
6. Follow the instructions [to add the fingerprint](#add-your-fingerprint-to-nickserv)
   to your account.
7. Change your login method to SASL (external).

Future connections will now use your certificate to authenticate you.

Note: The option to have Adiirc generate a certificate for you does not
currently generate a compatible certificate.

<!-- markdownlint-disable MD022 -->
## Add your fingerprint to NickServ
{: .no_toc}

You can then check whether you have a fingerprint by using `whois` on
yourself:

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
[connect via Tor](/guides/connect), you can enable SASL with the `EXTERNAL`
mechanism.

## Troubleshooting
{: .no_toc}

### Expecting an rsa key
{: .no_toc}
<!-- markdownlint-restore -->

This can happen if your client does not support the `ed25519` algorithm. If
you wish to continue with this client, you will need to
[make a new certificate](#creating-a-self-signed-certificate) that is using
the `rsa:4096` algorithm.
