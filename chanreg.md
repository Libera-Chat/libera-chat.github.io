---
title: Channel registration
---

## Channel Namespaces

Our [policies](/policies) outline that channels on Libera.Chat fall into one
of three categories and two namespaces. Channels that begin with only a single
`#` character are either project or community channels. Channels that begin
with two `#` characters are informal channels.

### Project Channels

Project channels are reserved for on-topic channels as per our
[on-topic projects](#on-topic-projects), represented by owners with an official
claim to that name. A registered project as per the
[registration below](#registering-a-channel) can claim ownership over project
channels bearing the group's names or name prefixes. For example, Libera.Chat
itself owns the channel `#libera` and all channels beginning with `#libera-`.
As per our [policies](/policies), these channels do not expire.

### Community Channels

Community channels are reserved for on-topic channels as per our
[community groups](#community-registration). An official claim to the name is
not needed, but not having it bears the risk of losing the channel should an
on-topic entity with a valid claim start an official presence on Libera.Chat.
Staff will try to find a good solution for both parties in such cases.

### Informal Channels

Informal channels are for topics not covered by our
[on-topic projects](#on-topic-projects). As per our [policies](/policies),
such channels can exist on Libera.Chat as long as they do not disturb the
operations of our network and our project and community channels, and adhere
to the network policies. Informal channels are given out on a first-come,
first-served basis. They will expire if unused for a long time, see our
[policies](/policies) for details regarding when this occurs. You can
contact us on IRC with a request to take over an expired secondary channel.

## Registering a channel

How to register a channel depends on what type of channel described above it
is.

### Project channels

Primary channels in the namespace of an already registered project can be
registered directly via ChanServ's `REGISTER` command. So if e.g. the project
"MyFossCalendar" wants to add `#myfosscalendar-social` to the existing
channels, they can just grab it. For Projects not yet registered as such with
us, please see [project registration](#project-registration). If you like to add
additional channel namespaces to your existing project, please contact the
projects and community team at <projects@libera.chat>.

### Community channels

Community channels in the namespace of an already exiting community can be
registered directly via ChanServs `REGISTER` command. So if e.g. the owners of
`#linux` would like to add `#linux-social` to the existing channels, they can
just grab it. For namespaces not yet registered as such with us, please see
[community registration](#community-registration).

### Informal channels

Informal channels that are not already taken can be registered by any user in
it who has channel operator status, which is usually the first user to join an
empty, unregistered channel. In this case you can use the `REGISTER` command
in chanserv to register it to your account. See `/msg ChanServ help REGISTER`
for details. If a channel is unregistered but nobody has operator status,
please contact network staff and we shall see if we can find a solution that
is acceptable for the local community.

## Project registration

Project registration allows your project or organisation to have an official
representation on our services and relationship with us.

### On-topic projects

Projects considered to be on-topic for Libera.Chat are primarily free and
open-source software projects, and other peer-directed projects, for instance
Linux User Groups (LUGs), student societies, hacker- or makerspaces and other
collaborative efforts. It can also cover projects/companies of general
interest to our user base.

### Claim to the name and representation

A claim to the name is given if your project is on-topic as per the above and
named like that, or commonly called / abbreviated that. In case of name
clashes, e.g. other on-topic projects already present using the same name or
there being obvious trademark issues, our team will try to find a good
solution. The same applies if your name contains characters that can't be used
on our services for technical reasons.

The registration should be either done by or have received the official
blessing of someone who is able to speak for the project. This could be:

- The project founder
- A lead developer
- Someone in a management position
- A board member
- ...

### How to register as a project

We recommend you contact us as per the
[Projects & Community team](#the-projects--community-team) section
before registering, so we can already check whether your project is likely to
be considered eligible to a registration. Once done, we will need the
following information from you:

```
# About your project
Your project name(s):
Your project description:
Can we list your project publicly, such as on the libera.chat website:
Libera Chat staff member you have discussed this registration with:
Links to places we can find out more about your project:
(e.g. website, source code repositories or similar)

# About you and your staff
Your NickServ account:
Your relationship to / position in the project:
NickServ of group contacts and if they're primary/secondary, hidden/public:

# Channels and cloaks (see below)
Channels you'd like to claim:
(typically #projectname and #projectname-*)
Would you like ONLY group contacts to be able to register these channels with
ChanServ?:
Cloak namespaces you'd like to claim:
(typically projectname/*)
```

Group contacts are the members in your project that will be the
official interface between Libera.Chat and your organization.
They are the ones who can claim channels in your namespace(s) and
request cloaks for your members/users.
You can tell us whether these should be visible to the public or not.
There are different categories of group contacts, check with our team to get
the option that fits your structure best.

Please send this information as an e-mail to <projects@libera.chat>.

Our team will then get in touch with you and do a claim verification. These
are done per case and usually contain some sort of check of domain / code
repository ownership or the likes.

### Benefits of registered projects

Registered projects can profit from the following benefits:

- Channels in their namespace can be claimed
- Optional cloaks are available for members.
  These replace the hostname part with a custom string, e.g.
  `@yourproject/developer/alex` or `@yourproject/taylor`
- We offer to send messages about important releases or events of your project
  as a "wallop" message to all our users who opted in to receiving these

## Community registration

Community channels on Libera.Chat are for topics that would otherwise be
eligible for a project registration but do not have an official representation
(e.g. `#linux`), or are significantly relevant to our intended userbase (e.g.
`#windows`).

### How to register as a community

We recommend you contact us as per the
[Projects & Community team](#the-projects--community-team) section
before registering, so we can already check whether your community is likely
to be considered eligible to a registration. Once done, we will need the
following information from you:

```
# About your community
Your community name(s):
Your community description:
Can we list your community publicly, such as on the libera.chat website:
Libera Chat staff member you have discussed this registration with:

# About you and your staff
Your NickServ account:
Your relationship / affiliation with the community:
NickServ of group contacts and if they're primary/secondary, hidden/public:

# Channels and cloaks (see below)
Channels you'd like to claim:
(typically #communityname and #communityname-*)
Would you like ONLY group contacts to be able to register these channels with
ChanServ?:
(The cloaks will be formatted like this:
about/YourCommunityNameHere/accountname)
```

group contacts are the members in your community that will be the official
interface between you and Libera.Chat.
They are the ones who can claim channels in your namespace(s) and request
cloaks for your members/users.
You can tell us whether these should be visible to the public or not.
There are different categories of group contacts, check with our team to get
the option that fits your structure best.

Please send this information as an e-mail to <projects@libera.chat>, our team
will then get in touch with you.

### Benefits of a community

Registered communities can profit from the following benefits:

- Channels in their namespace can be claimed (with `/msg ChanServ CLAIM`)
- Optional cloaks are available for members.
  These replace the hostname part with `@about/yourcommunity/username`,
  and can be requested on `#libera-communities`.

## The Projects & Community Team

The Projects & Community Team comprises, among others, e, Fuchs, kline, glguy
and Swant; together they will act as your liaisons during the project
registration or topic claiming process and throughout your tenure on the
Libera.Chat network. If you wish to discuss the registration process, find out
if Libera.Chat could be a good fit for your project or register your project,
please feel free to drop any of the team members a line on IRC. If none are
online, feel free to reach out to staff in general and they will forward your
request to the team, which will get back to you as soon as possible. Once you
have discussed your project with a staff member, you'll be asked to email
<projects@libera.chat> with the details of your request as per the above.
