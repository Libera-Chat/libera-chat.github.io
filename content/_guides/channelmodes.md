---
title: Channel Modes
category: chanop
credits: web7
---

Various modes can be set on channels. Use `/mode #channel` to list current
channel modes and `/msg chanserv info #channel` to list modes set with MLOCK.

All channel modes will be lost when a channel becomes empty. Enable GUARD to
preserve modes.

To set a mode, use `/mode #channel +(mode)` replacing `(mode)` with the letter
that corresponds to the mode. To unset a mode, use `/mode #channel -(mode)`

## Available channel modes

{::nomarkdown}<div class="table">{:/}

| Mode (name) | Description |
| ----------- | ----------- |
| b<br>(channel ban) | Prevent users from joining or speaking. Sending `/mode #channel +b` alone will return the current ban list. While on the channel, banned users will be unable to send to the channel or change nick.<br>The most common form for a ban is `+b nick!user@host`. The wildcards * and ? are allowed, matching zero-or-more and exactly-one characters, respectively. Bans set on IP addresses will apply even if the affected user joins with a resolved or cloaked hostname. [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) is supported in bans.<br>The [second form](extbans.html) can be used for bans based on user data. You can append `$#channel` to any ban to redirect banned users to another channel. |
| c<br>(colour filter) | Strip colour and formatting codes from channel messages. |
| C<br>(block CTCPs) | Blocks CTCP commands (other than `/me` actions). |
| e<br>(ban exemption) | Takes one parameter, just like ban (above). Wildcards and [extbans](extbans.html) can be used, like ban. Ban exemption matches override +b and +q bans for all clients it matches, allowing the exempted user to join/speak as if they were not banned or quieted. This can be useful if it is necessary to ban an entire ISP due to persistent abuse, but some users from that ISP should still be allowed in. For example: `/mode #channel +bee *!*@*.example.com *!*someuser@host3.example.com $a:JohnDoe` would block all users from example.com, while still allowing someuser from host3 and JohnDoe to join.
| f<br>(forward) | Takes a channel name as a parameter. Users who cannot join the channel (because of +i, +j, +l, +S, +r, see below) are instead sent to the given channel. Clients are notified when the forward takes effect.<br>An operator can set mode +f #channel2 only if they are an op in #channel2 or if #channel2 has mode +F set (see below).<br>Usually you want to set forwards with MLOCK, because the channel will become empty over time and the channel modes are lost. You might also want to set GUARD to prevent the channel from becoming empty. An operator can use MLOCK with +f only if they have access flag +s in both channels, or if the channel to be forwarded to is +F and they have +s in the original channel. |
| F<br>(enable forwarding) | Allow operators in other channels to forward clients to this channel, without requiring ops in the target channel. |
| g<br>(free invite) | Anybody in the channel may invite others (using the `/invite` command) to the channel. |
| i<br>(invite only) | Users are unable to join invite-only channels unless they are invited or match a +I entry. |
| I<br>(invite exemption) | Takes a ban parameter. [Extbans](extbans.html) are supported and common, e.g. for setting an exemption for a specific registered user. Matching clients do not need to be invited to join the channel when it is invite-only (+i). Unlike the `/invite` command, this does not override +j, +l and +r. Only channel operators can see +I changes or see the list with `/mode #channel +I`. |
| j<br>(join throttle) | This mode takes one parameter of the form n:t, where n and t are positive integers. Only n users may join in each period of t seconds, so with e.g. 3:10 only 3 users could join within 10 seconds. Invited users can join regardless of +j, but are counted as normal. You can use this mode to prevent bot attacks. Observe the average join rate of your channel and pick a good value for +j. This mode could be combined with +f to forward throttled users to an overflow channel. |
| k<br>(password) | To enter the channel, you must specify the password on your `/join` command. Keep in mind that modes locked with ChanServ's MLOCK command can be seen by anyone recreating the channel; this includes keys. Also keep in mind that users being on the channel when +k is set will see the key as well. |
| l<br>(join limit) | Takes a positive integer parameter. Limits the number of users who can be in the channel at the same time. |
| m<br>(moderated) | Only opped and voiced users can send to the channel. This mode does not prevent users from changing nicks. |
| n<br>(prevent external send) | Users outside the channel may not send messages to it. Keep in mind that bans and quiets will not apply to external users. |
| p<br>(private) | The KNOCK command cannot be used on the channel, and users will not be shown the channel in whois output unless they share the channel with the requestor. The channel will still appear in channel lists and WHO output (set channel mode +s if this is not desired).|
| q<br>(quiet) | Works like +b (ban user), but allows matching users to join the channel. |
| Q<br>(block forwarded users) | Users cannot be forwarded (see +f above) to a channel with +Q. |
| r<br>(block unidentified) | Prevents users who are not identified to services from joining the channel. |
| s<br>(secret) | This channel will not appear on channel lists or WHO or WHOIS output unless you are on it. |
| S<br>(TLS-only) | Only users connected via TLS may join the channel while this mode is set. Users already in the channel are not affected. |
| t<br>(ops topic) | Only channel operators may set the channel topic. |
| u<br>(unfiltered) | Receive messages that are filtered server side by Libera.Chat based on content, usually spam. Set +u if you want the channel to receive these messages. Also see the corresponding user mode. |
| z<br>(reduced moderation) | The effects of +b, +q, and +m are relaxed. For each message, if that message would normally be blocked by one of these modes, it is instead sent to channel operators (+o). |

{::nomarkdown}</div>{:/}

## Restricted channel modes

The following channel modes can only be added by Libera.Chat staff.

{::nomarkdown}<div class="table">{:/}

| Mode (Name)        | Description                               |
|--------------------|-------------------------------------------|
| L (Large Ban List) | Increase maximum number of +beIq entries. |
| P (Permanent)      | Channel does not disappear when empty.    |

{::nomarkdown}</div>{:/}
