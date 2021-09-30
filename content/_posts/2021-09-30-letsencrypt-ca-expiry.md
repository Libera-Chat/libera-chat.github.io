---
title: Let's Encrypt root CA expiry
author: edk
---

Hello,

The root CA for most Let's Encrypt certificates [expired
today](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/).
Just about everyone was waiting for this, but in our case we felt there was
nothing for us to do but wait and see what happened; LE's plan for dealing with
the expiration seemed solid enough. Oops.

So what was the plan? LE have continued to provide, in the default chain in
their API, a version of their CA cert that's signed by the expiring root CA.
(This is known as cross-signing). This was done to provide a workaround for some
devices (as far as I know, mostly very old Androids) and was presumably tested
against web browsers, which regularly update their TLS libraries.

Not all other software does. Serving the cross-signed root in our chain broke
Hexchat on Windows, amongst other software combinations, because Hexchat uses a
version of OpenSSL that doesn't search exhaustively for a correct validation
path if it's served a chain that is (as in this instance) trusted but invalid.

We've chosen to remove the cross-signed root from our chains for now, fixing the
clients that we've been able to test. This will be subject to review based on
your feedback, so please let us know if you were relying on the cross-signed
root. We can be reached at <support@libera.chat>; you can of course disable
validation or connect insecurely as a workaround, but please weigh any such
workaround against the security risks it carries.

As always, thanks for using Libera Chat.
