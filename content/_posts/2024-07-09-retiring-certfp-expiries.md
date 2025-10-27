---
title: "Retiring CertFP Expiration Verification"
author: el
---

Here is some good news for folks who use [CertFP][certfp] to log in to
`NickServ`: we have rolled out a change that means SaslServ will no longer
reject expired certificates when used for identifying to accounts.

Why are we doing this? We don't have a rotation policy on passwords, which are
generally less secure, so it makes no sense for certificates to have one.
Meanwhile, certificate expiries are quite disruptive, particularly for folks
who use our [tor hidden service][tor] which does not allow other forms of
authentication. Respecting the expiry of the certificate provides no benefit
but does cause annoyance for both users and staff.

We do still recommend that you practice good certificate hygiene, such as
cycling your certificates, using unique certificates for each network, and
keeping your `CERT LIST` clean.

[tor]: https://libera.chat/guides/connect#accessing-liberachat-via-tor
[certfp]: https://libera.chat/guides/certfp
