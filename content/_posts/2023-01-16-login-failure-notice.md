---
title: Login Failure Notice Opt-Out
author: jess
---

Hello everyone,

We've deployed an update to [the services software we use][0]
(the thing that supplies the network with NickServ, ChanServ, etc.)
to support turning off the incessant `"failed to login as <you>"` messages
a lot of our users get.

Those messages are almost always false positives rather than indications
that someone is attempting to brute force your account. They are almost
always caused by [misconfigured Thunderbird][1] clients that are simply
retrying the same password over and over again for months, if not years.

In addition to adding a system by which people can explicitly
opt-in or opt-out of receiving a notification when someone fails to log in to
their account, the [changes][2] we've made also add much tighter throttles
to failed login attempts in order to provide further peace-of-mind
to users who have opted out. Network staff will still see and react to
brute force attempts against our users, whether they've opted-in or opted-out.

At this time, we intend to opt users in to receiving these messages by default.
However, in the future, we plan to opt users out of receiving these messages
by default. If you explicitly opt-in to or opt-out of receiving these messages,
your preferences will be retained regardless of what we set the default to.

We recognise that our plan to opt users out of these messages by default may
be contentious, but our reasoning for it is well-grounded; in our collective
experience, these messages have never been helpful to the average user and
explaining this to people has taken up considerable staff time. We'd like to
minimise how much time the average user will have to spend learning the arcane
incantations involved in `/msg NickServ ...`, and part of that involves
minimising how many things they'll have to change to make their
account configurations suitable to their needs.

To explicitly opt-in to these messages, `/msg NickServ SET BADPASSWDMSG ON`.

To explicitly opt-out of these messages, `/msg NickServ SET BADPASSWDMSG OFF`.

To reset your preference to whatever the network-wide default is,
`/msg NickServ SET BADPASSWDMSG DEFAULT`.

We'll further communicate when we intend to change the default behaviour.

[0]: https://atheme.org/
[1]: https://bugzilla.mozilla.org/show_bug.cgi?id=1618061
[2]: https://github.com/atheme/atheme/commit/d671237
