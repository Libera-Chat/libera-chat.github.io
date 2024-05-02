---
title: Temporarily disabling the Matrix Bridge
author: Allie and el
---

{::options parse_block_html="true" /}
>Update: We no longer have an official Matrix bridge. Please see our
>[FAQ about Matrix][matrixfaq] for more information about using Matrix on
>Libera.Chat.

Hello Libera users,

As you know per [previous blogs][news], we have been liasing with
Element Matrix Services (EMS) as they transition the Matrix bridge to
an opt-in configuration that aims to allow plumbed channels (channels that
opted in to being accessed by Matrix) while deactivating
portalled channel access (where Matrix users could
roam freely on the network). This process was undertaken at our request
due to various security and privacy concerns that EMS have been unable to
address to our satisfaction due to time constraints.
During this transition period, a number of new issues have arisen, and
we have already [extended the deadline][extension] for
the deportalling transition by two weeks, at the request of
EMS. Some of these issues are specific to the bridge operated
for Libera.Chat and may not affect bridges on other networks.

When we agreed to accept the Matrix bridge onto Libera.Chat at the request of
a few projects early in 2021 part of that agreement was the following clause:

> the bridge may be subject to temporary closure (on your side or ours)
> in the event of future privacy issues, dependent on severity and
> predicted resolution timeframes, with honest public-facing explanations.

On August 2nd, we notified EMS of a serious regression in our
coordination channel after close of business London, UK time
(where EMS is based). After no response we requested acknowledgement 24 hours
later on the 3rd. At this point we were informed that no attention had been
or could be given to the issue. Having subsequently investigated and
confirmed the issue was still occuring, today, Friday August 4th at the
start of business hours, we notified EMS that they had until
1400UTC Saturday August 5th to address the issue.

Unfortunately, EMS have informed us that they cannot satisfy this deadline.

In order to protect our users and our IRC-first communities from
mounting stability, security, and privacy issues, we requested that EMS
remove the Matrix bridge from Libera.Chat until this serious regression can
be fixed, and all other outstanding issues are likewise resolved. EMS agreed
to [shut the bridge down][shutdown] by 1400UTC Saturday August 5th.
We cannot anticipate a timeline for the bridge's return,
but we hope it will be soon.

We will put together a more complete retrospective for publication
in the near future, and we invite projects to make
[alternative bridging arrangements][bridging] in the meantime.
There are various options available, such as
[catircservices][maihowto] and [heisenbridge][heisenbridge].

As always, Libera.Chat staff will be on hand via PMs,
and in `#libera-matrix` to answer any questions.

Regards,
Allie & el on behalf of the entire Libera.Chat staff body

[news]: https://libera.chat/news/
[extension]: https://libera.chat/news/deportalling-delay
[shutdown]: https://matrix.org/blog/2023/08/libera-bridge-disabled/
[bridging]: https://libera.chat/guides/faq#are-bridges-allowed
[maihowto]: https://github.com/whitequark/catircservices.org/
[heisenbridge]: https://github.com/hifi/heisenbridge
[matrixfaq]: https://libera.chat/guides/matrix
