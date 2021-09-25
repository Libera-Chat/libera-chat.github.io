---
title: Lengthening Nickname Expiry
author: kline
---

Hello Libera Chat users,

We intend to extend the routine nickname expiry policy from 10 to 20 weeks,
doubling the time a nick must be unused to consider expired. Please read on
below to find out more about what this means and why we're doing it.

One of the unusual things about IRC is that you can group multiple nicks to
your account identity - essentially giving you what seems like multiple
usernames.

This is cool, but in order to prevent nicks becoming unusable where an account
has grouped them, but never uses them, we also have an expiration policy:
currently that policy states that any nick unused for 10 weeks can be removed
from your account, on request for re-use, at staff discretion.

This is a policy that's been extant for many years, inherited from our
previous incarnation, and it's served us well. After giving it much thought,
however, we've decided that we believe that 10 weeks is too short a period of
time. It's not been uncommon for people to take 2-3 months away from IRC and
find that their account has been dropped.

With this in mind we have considered a number of options, but decided that
simple is best, a straight doubling of the time-span. This also means that
setting your account into VACATION mode also doubles, reaching 60 weeks - a
bit over a year.

We intend to bring this policy into effect in 10 weeks time, so as to avoid
changing the status of any nicks until a full expiry period has elapsed under
the current policy. You can see the exact working of the policy change [at the
pull request here][1].

Please note that as with the current policy, expired nicks are *not*
automatically dropped. Expired nicks are only dropped on request, and subject
to staff discretion. Please do not be concerned about your account or nicks -
we are only extending the current policy to make it even less likely that they
are expired. We also plan to re-evaluate how this policy has gone in a while,
to see whether 20 weeks is working for us all.

As always, we're available on `/stats p` and in `#libera` to answer any
questions you have about this policy.

[1]: https://github.com/Libera-Chat/libera-chat.github.io/pull/173
