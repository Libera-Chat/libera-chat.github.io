---
title: Login Failure Notice Opt-Out
author: jess
---

Hello everyone,

We're deploying an update to our Services software (the thing that supplies
the network with NickServ, ChanServ, etc.) to support turning off the
incessant `"failed to login as <you>"` messages a lot of our users get.

Those messages are almost always a false-positive, if what you're wanting to
know is if someone is attempting to brute force your account. They're almost
always [misconfigured Thunderbird][0] clients that are simply retrying the
same password over and over again, for months-if-not-years.

The [changes][1] we've made in the Services software we use ([Atheme][2])
change two main things; it adds much tighter throttles to failed login
attempts, and adds a system by which people can explicitly opt-in or opt-out
of receiving a notification when someone fails to log in to their account.

Network staff will still see and react to brute force attempts against our
users, whether they're opted-in or opted-out. When we first launch this
change, we intend to by-default opt users in to receiving these messages, but
plan to, in the long run, by-default opt users out of receiving these
messages. If you explicitly opt-in to or opt-out of receiving these messages,
your preferences will be retained regardless of what we set the default to.

We recognise that our plan to opt users out of these messages by default may
be contentious, but our reasoning for it is well-grounded; in our collective
long experience, these messages have never been helpful to the average user,
and explaining this to people has taken up considerable staff time.
Interacting with Services has a dreadful user experience, and we'd like to
minimise how much time the average user will have to spend learning the arcane
incantations involved in `/msg NickServ ...`, by minimising how many things
they'll have to change to make their account configuration suitable to their
needs.

To explicitly opt-in to these messages, `/msg NickServ SET BADPASSWDMSG ON`.

To explicitly opt-out of these messages, `/msg NickServ SET BADPASSWDMSG OFF`.

To reset your preference to whatever the network-wide default is,
`/msg NickServ SET BADPASSWDMSG DEFAULT`.

We'll further communicate when we intend to change the default dehaviour.

[0]: https://bugzilla.mozilla.org/show_bug.cgi?id=1618061
[1]: https://github.com/atheme/atheme/commit/d671237
[2]: https://atheme.org/
