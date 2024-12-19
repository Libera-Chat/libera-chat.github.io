---
title: Connecting to Libera.Chat
category: connecting
credits: web7
weight: 10
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

Libera.Chat is reachable via [Tor](https://www.torproject.org/) using our
[onion service](https://community.torproject.org/onion-services/).

Configuration requirements with details below:

- Update `torrc` configuration file to map to the onion service.
- Configure your client to use your Tor SOCKS proxy (typically `localhost:9050`).
- Configure *public-key* (not plain) SASL authentication.
- Connect to `palladium.libera.chat`.

```config
# torrc entry for libera.chat onion service
MapAddress palladium.libera.chat libera75jm6of4wxpxt4aynol3xjmbtxgfyjpu34ss4d7r7q2v5zrpyd.onion
```

This service requires public-key SASL authentication using either the
`EXTERNAL` or `ECDSA-NIST256P-CHALLENGE` (but not `PLAIN`) mechanisms.  See our
[guide on setting up CertFP](/guides/certfp.html) for more information.

Some clients lack SOCKS4a or later support. In this case you will need to
either launch your client with a wrapper such as `torsocks`, or change your
`torrc` file to map a private IP address to the onion service address instead
and disable TLS hostname verification in your client. Onion service names
securely identify a service. The connection will still be secure.

The default tor configuration only optimizes some ports for long-lived
connections: For IRC, only `6667` and `6697`. If you use a different port, you
may face frequent disconnects unless you update `LongLivedPorts` in your `torrc`
file.
