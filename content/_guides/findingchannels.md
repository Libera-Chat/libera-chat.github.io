---
title: Finding Channels
category: using
credits: web7
weight: 40
---

## Finding Channels on Libera.Chat

With many channels already on Libera.Chat and more being registered all the
time, a good way to search for channels of interest to you is useful.

Enter `alis`, a network service designed for exactly that purpose.

At the most simple, you can use `/msg alis LIST *searchterm*` to find channels
whose name contains the term in question - for instance,
`/msg alis LIST *linux*`.

You can also search on the channel's current topic, require a minimum number of
users (to weed out barely-used channels), and use various wildcards to control
your search - for instance, `/msg alis LIST #libera* -min 10` would find all
channels in the Libera.Chat namespace with at least 10 users.

For full details on how to use alis, `/msg alis HELP LIST` will send you back
the following help text:

```irc
***** alis Help *****
Help for LIST:

LIST gives a list of channels matching the
pattern, modified by the other options.

Syntax: LIST <pattern> [options]

Options are:
    -min <n>: show only channels with at least <n> users
    -max <n>: show only channels with at most <n> users
    -skip <n>: skip first <n> matches
    -show [m][t]: show modes/topicsetter
    -mode <+|-|=><modes>: modes set/unset/equal
    -topic <pattern>: topic matches pattern
    -showsecret: show secret channels (requires chan:auspex)

The pattern can contain * and ? wildcards. The pattern has to
match the full channel name or a full topic, depending on where it
is used; the wildcards are important. The pattern is also
automatically surrounded by * wildcards if
a channel name pattern does not start with a wildcard or a #, or
a topic pattern contains no * wildcards.

For example, for channel names, from most to least specific:
?bar       - any character followed by "bar" with no other characters
#bar*      - anything starting with "#bar"
##*bar*    - anything starting with ## and containing "bar"
*cows*moo* - anything containing "cows", 0 or more characters, and "moo"
*bar*      - anything containing "bar" (equivalent to "bar")

Examples:
    /msg alis LIST searchterm
    /msg alis LIST * -topic multiple*ordered*search*terms
    /msg alis LIST * -min 50
    /msg alis LIST #foo*
    /msg alis LIST #foo* -mode =n
    /msg alis LIST *freetopic* -mode -t -show mt
    /msg alis LIST ##nocolors* -mode +c -show t
***** End of Help *****
```

An alternative method to search is to do so via the web, using
[netsplit.de](https://netsplit.de/channels/?net=libera.chat).
