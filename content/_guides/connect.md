---
title: Connecting to Libera.Chat
category: connecting
credits: web7
---

Libera.Chat can be accessed using an [IRC client](/guides/clients).

Connect to Libera.Chat with TLS at `irc.libera.chat` on port `6697`.

Additional regional and address-specific hostnames are available:

| ------------------------- | ---------------------- |
| Default                   | `irc.libera.chat`      |
| Europe                    | `irc.eu.libera.chat`   |
| US & Canada               | `irc.us.libera.chat`   |
| Australia and New Zealand | `irc.au.libera.chat`   |
| East Asia                 | `irc.ea.libera.chat`   |
| IPv4 only                 | `irc.ipv4.libera.chat` |
| IPv6 only                 | `irc.ipv6.libera.chat` |

Additional ports are available:

| ---------- | -------------------- |
| Plain-text | 6665-6667, 8000-8002 |
| TLS        | 6697, 7000, 7070     |

## Accessing Libera.Chat Via TLS

Libera.Chat provides TLS client access on all servers, on ports 6697, 7000
and 7070. Users connecting over TLS will be given user mode +Z, and
_is using a secure  connection_ will appear in WHOIS (a 671 numeric).

In order to verify the server certificates on connection, some additional work
may be required. First, ensure that your system has an up-to-date set of root
CA certificates. On most linux distributions this will be in a package named
something like ca-certificates. Many systems install these by default, but some
(such as FreeBSD) do not. For FreeBSD, the package is named ca\_root\_nss,
which will install the appropriate root certificates in
/usr/local/share/certs/ca-root-nss.crt.

Certificate verification will generally only work when connecting to
**`libera.chat`**. If your client thinks the server's certificate is invalid,
make sure you are connecting to `irc.libera.chat` rather than any other name
that leads to Libera.Chat.

For most clients this should be sufficient. If not, you can download the
root certificate from [LetsEncrypt](https://letsencrypt.org/certificates/).

Client TLS certificates are also supported, and may be used for identification
to services. For instructions, see [our guide on CertFP](/guides/certfp).
If you  have connected with a client certificate,
_has client certificate fingerprint f1ecf46714198533cda14cccc76e5d7114be4195_
(showing your certificate's SHA512 fingerprint in place of _f1ecf46..._) will
appear in WHOIS (a 276 numeric).

## Accessing Libera.Chat Via Tor

Libera.Chat is also reachable via
[Tor](https://www.torproject.org/), bound to some restrictions. You can't
directly connect to `irc.libera.chat` via Tor; use the following onion service
as the server address instead:

```hostname
libera75jm6of4wxpxt4aynol3xjmbtxgfyjpu34ss4d7r7q2v5zrpyd.onion
```

The onion service requires SASL authentication. In addition, due to abuse
we have seen across other networks in the past, we have unfortunately had to
add another couple of restrictions:

- You must log in using SASL `EXTERNAL` or `ECDSA-NIST256P-CHALLENGE` (more
  below)
- If you log out while connected via Tor, you will not be able to log in
  without reconnecting.

If you haven't set up the requisite SASL authentication, we recommend SASL
EXTERNAL. You'll need to generate a client certificate and add that to your
NickServ account. We describe how to in detail under our
[guide on setting up CertFP](/guides/certfp.html).

Connecting using SASL EXTERNAL requires that you connect using TLS encryption.

You'll then want to tell your client to try the `EXTERNAL` mechanism. We lack
comprehensive documentation for this, but it's a feature in most modern
clients, so please check their docs for instructions for now.

### Verifying Tor TLS connections

A Tor onion service name securely identifies the service you are connecting
to. Verifying the TLS server certificate is strictly-speaking unnecessary
while using the onion service. Nonetheless you may verify the onion service's
TLS server certificate by adding the following fragment to your `torrc`
configuration file and configure your client to connect to
`palladium.libera.chat` via Tor. The TLS server certificate used by the onion
service will validate using this hostname.

```config
# torrc snippet:
MapAddress palladium.libera.chat libera75jm6of4wxpxt4aynol3xjmbtxgfyjpu34ss4d7r7q2v5zrpyd.onion
```

Older clients that don't support SOCKS4a or later will need to use `MapAddress`
with an IP address, and the certificate will not validate successfully.
In this case validation will need to be disabled.

Note that the onion service's certificate changes periodically as it is
updated. This means that the *certificate fingerprint* can not be reliably
pinned.
