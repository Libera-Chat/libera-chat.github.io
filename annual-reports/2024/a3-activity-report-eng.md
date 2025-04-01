---
title: Activity Report 2024 - Engineering
---

Libera Chat's engineering team is responsible for developing and maintaining
the software used to provide the IRC network and any auxiliary services as
Libera requires.

## Team Organisation

There were no changes to the team membership during the fiscal year,
remaining at 14 members.

## Activity

Engineering activity has been split into two main areas: maintenance of our
current server platform, and continued development of our experimental next-
generation software.

In the last year we have delivered several improvements to the user
experience on the network, including:

- Automatic cloaking upon verification of an account registration.

- Supporting verification of an account registration via URL in the e-mail
  instead of requiring the user to issue an IRC command.

- Rejecting the addition of certificate fingerprints that do not appear to
  be SHA-512 hexadecimal.  Services does not care about the format, but that
  is the only format that will work on this network.  Thus, this prevents
  users adding e.g. SHA-1 fingerprints and then wondering why SASL EXTERNAL
  does not work.

- Retiring the checks for certificate expiration.  The IRC server no longer
  cares about the expiration date of a client certificate.  We only care
  about certificate fingerprints, and thus, assuming the fingerprint digest
  algorithm is secure, we only care about people proving control of the
  corresponding private key.  This allows people to continue to be able to
  login to services even if they neglect to issue the certificate for a
  very long time to begin with.

Development of Sable, our experimental next-generation server, continues at a
variable pace, and we continue to welcome contributions from anyone interested.
