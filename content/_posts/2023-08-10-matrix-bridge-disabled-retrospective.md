---
title: Matrix Bridge Temporary Shutdown, a Retrospective
author: el, She, Allie, Ben
---

{::options parse_block_html="true" /}
>Update: We no longer have an official Matrix bridge. Please see our
>[FAQ about Matrix][matrixfaq] for more information about using Matrix on
>Libera.Chat.

Hello Libera users,

Some people have requested transparency into how Libera came to the conclusion
that we needed to take the drastic action of requesting that Element Matrix
Services (EMS) [deactivate the portalling bouncer-like feature of the Matrix bridge][matrixorgdeportal]
and limit it to explicitly opted-in plumbed rooms, and then escalate to more
serious action in [requesting the bridge be disabled fully][matrixorgdisabled].
We have been reluctant to go into detail before now because the last thing we
wanted was to put our communities through another public dispute with a
for-profit company. However we believe you, our users, deserve to know the
circumstances of our decision, so this post is an attempt to satisfy your
expectation of transparency from us as an organisation. It is going to be a
long one, so fetch a snack or beverage and settle in. There is also a quick
tl;dr[^1] if you want that instead.

Back when we first launched Libera.Chat in May 2021, we did not have hopes of
becoming a large network, and we honestly did not care if we did or not. We
quickly exceeded expectations on that front because of the trust that you all
have placed in us to have the best interests of your communities as our
guiding principle. Several of these communities requested a bridge that would
allow their channels to be accessible from Matrix. We were initially vocally
reluctant due to prior experiences with the bridge on another network.
However, at the end of a very hectic May we sat down with EMS and came up
with some baseline expectations.

One of our requirements included [the rollout of the privacy filter][privacyfilter]
which prevents Matrix users being able to invisibly watch IRC conversation or
engage in abusive behaviour on the Matrix side without being seen in that
room's respective IRC channel. While this might seem like double standards
compared to "one to many" bridging in which one bot acts as a puppet for many
individuals, such bridges are observable and typically only serve one
community each. The agreement also included the statement [we quoted previously][previous]:

>the bridge may be subject to temporary closure (on your side or ours) in the
>event of future privacy issues, dependent on severity and predicted
>resolution timeframes, with honest public-facing explanations."

As 2021 progressed, we worked with EMS to address the bridge's instability,
often notifying them of pending allowance or service disruption issues before
their own monitoring did. We also kept watch for double-bridges which would
expose other networks to potential abuse by bridging their services to us. We
also found ourselves needing to prompt EMS to respond to the concerns of some
projects they hosted. Within a few months after welcoming the bridge, we were
routinely dealing with a sizable and often automated abuse load from the
bridge that made use of easy anonymous registration and the protocol's
persistent and distributed archiving of files, including images, videos, and
long messages converted to pastebins. The abuse was targeted at both plumbed
and portalled channels.

In February 2022, Matrix was chosen to host a major open source event that
went online-only during the pandemic. The event rooms were bridged to Libera.
Throughout that event, Libera's abuse mitigation folk responded to a massive
spike in bot waves whose impact favored but was not limited to the event's
channels. Late nights were spent monitoring for bots, temporarily toggling a
drastic anti-abuse measure that bounced any Matrix puppets, processing
connection data logs, manually screening for obvious false positives, and
issuing many thousands of network bans targeting individual puppets or
open-registration homeservers respectively. We provided EMS a list of
homeservers that were involved and asked that they help with outreach to get
them configured correctly and cleaned up.

Rather unexpectedly, the bot abuse continued to be bridged to Libera long
after it had ceased on the Matrix side. Some of our abuse mitigation stopped
the bots from bridging to begin with. Operating under assurances that failed
connection and messaging attempts would not be bridged, we began to relax our
abuse mitigation measures, only for some of those bots' puppets (on homeservers
that had not been cleaned up) to reconnect to Libera, join channels, and send
"federation delayed" spam even half a year later. Furthermore, these returning
bots were consuming a portion of the bridge's connection limit, and also
contributed to some misconfigured Matrix rooms filling channels to the point
of overloading some clients because the idle puppet cleanup process could not
work.

After the event ended, we arranged to meet with EMS in early March 2022 to
debrief and negotiate a path forward where the workload of managing bridged
abuse by Libera staff would be reduced. It was at this meeting that we first
raised the idea of disabling portalling. As EMS agreed to work on a homeserver
blocklist and actually did implement it for us, we did not pursue deportalling
at this time. This meeting also had promises from EMS that reductions in
bridge restart noise and reliable removal of media could be expected some
time later in 2022. Currently, we do not believe there is a reliable way
to quickly remove abusive hosted media without homeserver admin intervention.

Through 2022 and into 2023 we were made aware of [various security vulnerabilities][matrixblogsecurity]
and privacy leaks in the bridge. At least one issue this year, for a recurring
privacy leak, needed us to advocate for a fix that was then released without a
transparent announcement [until that oversight was pointed out][secretchanleak]
causing third party bridges and the bridge of at least one other network to
lag in getting fixed. As a result of all this, we feel we are unable to be
confident that reported issues have been acknowledged or addressed, and some
folks have expressed a lack of motiviation to report issues due to past
experiences. Our confidence in EMS's capacity to respond to future issues was
further eroded with the ["reset" of their trust and safety team][tasreset]
during layoffs at the end of last year.

We acknowledge that the security concerns were the least visible issue for
you, our users. There have also been several serious outages this year which
EMS failed to notice until Libera staff put substantial effort into
documenting the symptoms in the coordination channel, often needing to find
alternative ways to make contact when no response was forthcoming. We likewise
continuously forwarded reports of spam originating from the Matrix network to
varying success and also requested Matrix developers find a solution to avoid
IRC users being listed in the Matrix network's expansive user directory, which
was causing some people to receive unwanted attention and problematic spam in
private messages.

After many discussions among staff and with frustrated channel operators about
the overall situation, we decided to put an item on the agenda for our
[February 2023 Monthly General Meeting (MGM)][februaryminutes] to discuss our
options for reducing the negative impacts arising from the bridge instability,
the company's ongoing communication deficits regarding security and privacy
flaws, and the difficulty in getting things addressed long term. We
acknowledged that some communities are locked into using Matrix due to their
workflows and thus ought to be able to opt-in explicitly to using the platform
while we scaled back the bridge's reach.

Those attending that MGM concluded that we should first consult the
`#libera-communities` channel to which all [Group Contacts][chanreg] on the
network have standing invites. Additionally, we committed to reaching out to
some of the key communities that originally requested Matrix bridging. During
these consultations we explained the deportalling option, and the responses we
received were ambivalent to positive. At the
[March MGM][marchminutes] we reviewed the
responses and decided to proceed with asking EMS to disable
portalling on the official Libera bridge that they operate. EMS were informed
that same day (March 31st, 2023) and were asked to communicate with us on a
plan for going forward.

At the end of May 2023, we noticed a bot named "`archive[m]`" joining
a large number of channels unsolicited, including portalled channels such as
`#libera`. After disconnecting the bot and investigating its origins, we
became aware of the [Matrix Public Archive, now known as Matrix Viewer][matrixarchive].
Given previous privacy incidents involving Matrix leaking channel info, we
became deeply concerned that this archive was violating our public logging or
scraping policies for a large number of portalled channels. Further
investigation was difficult since the archive was very clearly a
work-in-progress, often returning cryptic errors for basic operations or just
being slow to respond. EMS later assured us that the archive was mostly benign
from a privacy standpoint, and renamed it to indicate that the bot itself
didn't archive but accessed already archived data. Given it was assumed this
behaviour was opted into based on room configurations which did not disclose
that they applied to the Matrix Viewer publishing logs to the web, we
remained skeptical and unhappy that it could roam into channels without
warning or explanation. The lack of proactive communication surrounding this
bot only served to reinforce the lack of confidence we felt we could afford to
EMS on such matters.

By this point, EMS appear to have assumed the cause of the deportalling
request was entirely about stability issues, and set about working on the
previously promised measures to reduce the connection noise caused by the
bridge. This resulted in a feature known as seamless restarts, where
connections over the bridge are maintained through the bridge restart process
by a proxy, which landed earlier in 2023. Unfortunately this has led
to many new problems; message drops, which had occurred previously but were
mostly manageable, skyrocketed. The bridge began silently dropping ranges of
messages, resulting in roughly one out of every five messages being dropped
during periods of high bridge activity. These issues were often undetectable
by the average user on either side, and we have no doubt that they caused
breakdowns in communication that harmed people's relationships with projects
and frustrated their support volunteers.

At our [June MGM][juneminutes] we discussed if we would
enforce the decision of the March MGM and set a deadline for deportalling.
That deadline was originally July 31st, but at EMS's request we extended it
for two weeks to August 11th. During this transition period, the bridge
management bot was unresponsive for several days while channels tried
fruitlessly to set up plumbing. After we granted the deadline extension, the
bridge was fully restarted in order to implement an attempted fix for the
silent message drops.Shortly before midnight UTC on the 31st, almost all the
bridge's connections timed out. The bridge was not brought back online until
more than 24 hours later, further disrupting people's ability to arrange
plumbing for their channels.

As mentioned in the [previous blog post][previous], on August 2nd we noticed
a serious regression and immediately notified EMS. That regression was that
the privacy filter feature, the earlier mentioned prerequisite for the
bridge's access to the network, was somehow not functioning. A Libera.Chat
staff member was able to see IRC channel comments on their Matrix account
while their Matrix puppet was not connected to the Libera.Chat network at all.
EMS informed us that this flaw could not be remedied quickly. Meanwhile the
symptoms were being mentioned by concerned users in public channels so it
became clear that it was only a matter of time before this would be noticed
and employed by bad actors; a [recently discovered bug in the blocklist][blocklistbug]
mechanism had been noticed because problematic content had been bridged as a
result. As portal removal was not yet ready for rollout, we could not reduce
the vulnerability to opted-in channels.

As a result of this network-level risk, staff consensed that the responsible
course of action was to escalate our request and asked that the whole EMS
Matrix bridge be shut down as soon as possible, until this and other critical
issues have been addressed. We gave them 36 hours to do so. At 1400UTC on
August 5th 2023, EMS shut down their Libera.Chat Matrix bridge at our request.

This is not a choice we wanted to have to make on the behalf of our users, and
we've held off as long as we could to avoid this disruption in your
communities. Throughout this whole process the employees of EMS have engaged
with us professionally with the limited resources afforded to them, and we
would like to acknowledge their efforts and thank them for their work and
patience, in particular Halfy, Thib, and Neil. We are genuinely sorry that
this is where we have ended up.

Third party bridges will remain unaffected and are not subject to the request
for shutting down. As with any bridging on the Libera.Chat network, third
party bridges will be judged on a case by case basis if problems arise. We
are hoping that this will be a temporary measure. We anticipate the official
EMS bridge will return plumbed-only, depending on the issues addressed by EMS,
at some point in the future.

As per the our prior post, staff are available for questions and concerns
about this decision in private message or in the `#libera-matrix` IRC
channel.

Regards,
el, She, Allie, Ben, and the rest of the Libera.Chat staff body.

[^1]: tl;dr: We asked for portalling to be disabled due to compounding
      concerns such as abuse mitigation workload, various privacy and security
      issues, and overall stability. We escalated to the temporary shutdown
      due to a recurring privacy issue where Matrix users not connected to
      Libera.Chat could see channel content. The issue could not be addressed
      quickly or limited to opted-in channels. Third party bridges remain
      welcome and will be judged individually if concerns arise. Questions? PM
      staff or ask in `#libera-matrix`.

[matrixorgdeportal]: https://matrix.org/blog/2023/07/postponing-libera-chat-deportalling/
[matrixorgdisabled]: https://matrix.org/blog/2023/08/libera-bridge-disabled/
[privacyfilter]: https://github.com/matrix-org/matrix-appservice-irc/pull/1337
[previous]: https://libera.chat/news/temporarily-disabling-the-matrix-bridge
[secretchanleak]: https://github.com/matrix-org/matrix-appservice-irc/pull/1700
[tasreset]: https://matrix.org/blog/2022/12/25/the-matrix-holiday-update-2022/#trust-safety
[blocklistbug]: https://github.com/matrix-org/matrix-appservice-irc/pull/1755
[matrixblogsecurity]: https://matrix.org/category/security/
[matrixarchive]: https://github.com/matrix-org/matrix-viewer/
[februaryminutes]: https://libera.chat/minutes/2023-02-24-public
[marchminutes]: https://libera.chat/minutes/2023-03-31-public
[juneminutes]: https://libera.chat/minutes/2023-06-30-public
[chanreg]: https://libera.chat/chanreg/
[matrixfaq]: https://libera.chat/guides/matrix
