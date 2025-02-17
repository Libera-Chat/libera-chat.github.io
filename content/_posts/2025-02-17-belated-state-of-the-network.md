---
title: A belated state of the network
author: el
---

Happy 2025 everyone!

We're now a month and a half into the new year (and a quarter of the way into
this century?!) and realized that we are overdue for a periodic state of the
network.

After a tumultuous 2023 where we [parted ways][matrix] with the official
Matrix bridge, 2024 was much quieter on the bridges front. Over the course of
the year, many projects and communities stood up their own Matrix bridges.
This has proven to be a far more stable and sustainable arrangement, and we
sincerely appreciate their work and cooperation.

In July we were looped into a coordinated security response, involving various
networks and IRC software maintainers, to mitigate a
[potentially nasty exploit][zncpsa]. We appreciated the collaboration of our
peers on other networks in ensuring that the word got out, and hope to use
this incident as guidance for responding to similar incidents in the future.

Sable development is also continuing, albeit slowly. We are of course
interested in welcoming new contributors to the project, so if you're curious,
check out [the repository][sable] and drop into `#libera-dev`.

We also managed to deliver some long-awaited improvements to our current stack
for our users:

- Account auto-cloaking. On a rather infamous day at the start of April, we
finally delivered auto-cloaking upon registration verification.
- Deprecated certificate expiry verification. As of early July,
[we no longer check the expiration of certificates][certfp] used for logging
in. Now you won't get locked out if you forget to make a new certificate in
time.

To celebrate the arrival of the auto-cloaking feature, we also had some fun
with a [temporary rebranding][meow] of the network. If you missed out on the
limited-time novelty cloak, you can still get a meowmento of the prank with
[our freewear.org merch][freewear]! Every purchase of merch from that
freewear.org page generates a donation to help the network remain sustainable.
We also have a [liberapay][liberapay] if you want to help us without buying
gear.

While most of our resources are donated, some are not. This includes costs
that ensure we will remain an independent and non-commercial platform. In this
current social media climate, we think that is very important and likewise
encourage the use and support of other community-run social protocols. Like
numerous other projects, we have retired our use of Twitter/X and Facebook,
now posting only to [the Fediverse][fosstodon] and [Bluesky][bluesky].

[matrix]: https://libera.chat/guides/matrix
[zncpsa]: https://libera.chat/news/zncpsa
[sable]: https://github.com/Libera-Chat/sable
[certfp]: https://libera.chat/news/retiring-certfp-expiries
[meow]: https://web.archive.org/web/20240401000834/https://libera.cat/
[freewear]: https://www.freewear.org/Libera.Chat
[liberapay]: https://liberapay.com/liberachat/donate
[fosstodon]: https://fosstodon.org/@liberachat
[bluesky]: https://bsky.app/profile/libera.chat
