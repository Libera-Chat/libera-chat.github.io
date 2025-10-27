---
title: Updates on the matrix<>IRC bridge
author: Allie
---

{::options parse_block_html="true" /}
>Update: We no longer have an official Matrix bridge. Please see our
>[FAQ about Matrix][matrixfaq] for more information about using Matrix on
>Libera.Chat.

Hello Libera.Chat users,

We are aware that the Libera.Chat matrix<>IRC bridge
(operated by Element Matrix Services, 'EMS') has experienced
a number of issues as of late, including
silently dropping messages, dropping connections,
and leaking information about the existence of `+s` ([secret]) channels to
users not in those channels.

As a number of you rely on the bridge to act as an IRC bouncer,
we understand the current situation is not sustainable in the long-term.
We are in conversations with EMS to better define a long-term future for
the bridge and the users who rely on it,
as well as the wider Libera.Chat userbase.

As a reminder, there are two kinds of bridged channel:

- **Portalled channels** behave much like an IRC bouncer: a matrix user
joins, say, `#libera-matrix:libera.chat` and this causes the bridge to
join a 'puppet' to `#libera-matrix` on IRC. This requires no involvement
on IRC, and crucially presents no opt-out for channel operators.
- **Plumbed rooms** are the traditional 'IRC bridge' experience, and
requires involvement from IRC channel operators and matrix room admins.

Whilst we're hoping for the most minimally disruptive outcome of
these conversations, if a long-term 'business as usual' solution is not
possible we may need to make some changes that will disrupt
the function of the matrix<>IRC bridge. In the interest of giving you
as much time possible to prepare,
**on July 30th 2023 we will be taking one of the following actions**:

1. **Business as usual, no changes.**
2. **We will ask EMS to disable portalled channels.**
This has the effect of making the bridge 'opt-in' from
a Libera.Chat channel operator perspective.
3. **We will ask EMS to disable the bridge in its entirety.**
We do not intend to do this, but it is an option available to us.

We will endeavour to provide 28 days' notice
about the action we have chosen to take.

These changes will **only affect the EMS-run general purpose bridge** -
that is, the one that appears as the `libera.chat` homeserver.
Individuals and homeservers are of course welcome to
facilitate their own access to IRC
(although we ask you be mindful of our [guidelines] on the subject).

In the meantime, users should continue to report any issues with the bridge
directly to [EMS][support].

_NB: A previous version of this post linked to the matrix.org contact page.
EMS have now set up an issue tracker specifically for Libera.Chat bridge
issues, and the link above has been updated to reflect this._

We'd really like to stress that EMS are working very hard to find a
solution to the long-term sustainability of the bridge, and the work
they're doing is appreciated; the road ahead is not a trivial endeavour
and we will continue to work closely with EMS to find a solution that
is minimally disruptive to Libera.Chat users.

Cheers,
Allie @ Libera.Chat

[guidelines]: https://libera.chat/guides/faq#are-bridges-allowed
[support]: https://github.com/matrix-org/libera-chat/issues
[secret]: https://libera.chat/guides/channelmodes
[matrixfaq]: https://libera.chat/guides/matrix
