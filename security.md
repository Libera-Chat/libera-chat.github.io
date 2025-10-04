---
title: Security Policy
---

If you believe you've found a flaw or flaws in a service run by Libera Chat
such that the service cannot be considered secure, you are encouraged to
submit a report. **Please read the following in full before doing so.**

## Defining Security

Within this section,

- "Staff" refers to any member of the Libera Chat organisation or a person
  who has accepted an invite but not yet had their membership confirmed.
- "Server" refers to any internet-enabled device managed by Libera Chat.
- "User" refers to any program (EXCLUDING those run by staff)
  connecting or attempting to connect to a server, regardless of whether
  the program's actions are directed by a person or not.
- "Service" refers to any software program intentionally run by staff on a
  server, regardless of purpose. It does not only refer to `irc.libera.chat`'s
  instance of Atheme.
- "Public service" refers to any service intended to be accessed by users.
- "Channel" refers to any IRC channel on an IRCd run by Libera Chat.

Libera Chat services are considered secure
only if no user can do any of the following:

### General

- Run arbitrary code on any server.
- View or modify data sent between servers.
- View or modify data sent over TLS to another user without
  having compromised that user's trust anchors.
- Deny access to any service through any mechanism other than
  a volumetric attack or triggering a ban of a host shared with other users.
- Access user data such that Libera Chat's
  [privacy policy](/privacy) would be violated.
- Access files on any server that are not intentionally served
  over HTTP/HTTPS as part of a web page or web interface to public services.
- Access and use any service that is not intended for public use
  (e.g. our ticket tracker).

### Accounts

- Acquire the login credentials to an account without the
  account owner's authorisation except by observing a password login over an
  unsecured connection. Note that IRC clients are rarely if ever vulnerable to
  TLS -> plaintext downgrade attacks by design.
- Login to an account without using its credentials.
- Modify account data without authorisation from the account owner.
- Verify the email address of an account which cannot,
  at the time of registration, receive email.

### IRC

- Gain server or network operator privileges on any IRC-related service.
  This includes not just gaining those privileges on the IRCds, but being
  considered to have those privileges by services that check for them
  (e.g. the Atheme instance or staff-only IRC bots).
- Gain elevated privileges for a registered channel, either as a
  status mode or as a `ChanServ` flag, without being granted those permissions
  by a user with the requisite permissions to grant them.
- Observe private messages between two other users.
- Observe messages sent to a channel without being joined to
  that channel except via another user that _is_ joined to that channel.
- Gain access to an invite-only channel without an invite or
  matching invite exemption. If a service is used to grant access to that
  channel, it must not send invites or set invite exemptions without
  authorisation from a user with channel operator privileges in that channel.
- Bypass a restriction targeting the user's hostname or IP address
  without reconnecting from a different hostname or IP address respectively.
  This includes channel bans as well as K-lines and D-lines.
- Successfully complete IRC connection registration on any hub server
  in the IRC network. Hub servers are named after noble gasses.
  Although the potential for harm by doing this is negligible,
  it is still unauthorised access.

## A Warning About LLMs

We understand that there are assistive technologies that researchers may
wish to use to help find vulnerabilities in codebases. Unfortunately, as
we are a fully volunteer team, we do not have the resources to cope with
[the significant drain on open-source maintainers' time and energy][curl-slop]
that is caused by LLM hallucinations.

We expect that all reports of security issues that are sent to us have
been tested, reproduced, and verified as true by the human responsible
for submitting the report. If you cannot demonstrate that you have
replicated the behaviour that is described in the report, please do not
submit it.

If an LLM is used to assist in communication, you must provide the exact
prompt that generated the output that you have sent to us, and details
about which model was used.

Submitting security reports that do not meet the above criteria is
considered spam and is grounds for being blocked from Libera Chat's
ticket, bug, and/or pull request trackers.

[curl-slop]: https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/

## Contact Info

For suspected software misconfigurations leading to vulnerabilities,
security bugs in one of Libera Chat's own projects,
or if you are a maintainer of software used by Libera Chat
looking to inform us about a vulnerability in your software,
please email [<security@libera.chat>](mailto:security@libera.chat).
The subject line must start with the string `SECURITY <name> -`
where `<name>` is the name of the software component in question.

Libera Chat relies on various open-source projects which may have their own
security policies and disclosure processes. If you believe you have discovered
a security issue in one of the projects listed below, please follow their
instructions for reporting security issues:

- **Atheme**: See [SECURITY.md][atheme].
- **Solanum**: As co-maintainers of Solanum, contact us.

[atheme]: https://github.com/atheme/atheme/blob/master/SECURITY.md

## Clients

Libera Chat is not responsible for any security vulnerabilities in IRC clients
aside from the webchat instances under the subdomain `web.libera.chat`.

However, if you are a maintainer of a widely-used IRC client and your client
has a remote code execution vulnerability that we can help mitigate,
consider contacting us. We can also provide public service announcements via
our news page, wallops, and social media. If you contact us via our security
email for this purpose, the subject line must start with the string
`CLIENT <name> -` where `<name>` is the name of the client in question.
