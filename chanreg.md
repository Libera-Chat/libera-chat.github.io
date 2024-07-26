---
title: Channel and group registration
---

This document aims to explain how to register a channel or group here on
Libera.Chat as well as our policies surrounding channels and channel
namespaces.

## Registering a channel

When joining an unregistered and empty channel, you will automatically be
given channel operator access on the channel. After verifying that your
channel is in the correct namespace, you should
[register it with ChanServ](/guides/creatingchannels) in order to establish
long-term control over the channel. We recommend that you choose the
[appropriate namespace](#channel-namespaces) to avoid a disruptive move later.

Should the channel already exist but is
[expired or otherwise unused](#expiration-and-disputes), Libera.Chat staff may
be able to assist you in taking over the channel. For channels in the on-topic
project and community namespace, this may involve proceeding with a
[formal group registration](#formal-group-registration) with us. For informal
channels, we will check if it is expired and if there is consensus within the
channel's existing community for you to take it over.

Once your channel is registered with ChanServ, regardless of channel
namespace, you are free to use it in accordance with
[network policy](/policies). You do **not** need the explicit approval of
Libera.Chat staff in order to register a channel and start using it on our
network. Formal group registration is **not** required to make use of channels
in the on-topic project and community channel namespace, and we recommend that
new initiatives do not immediately attempt a formal group registration.

## Channel namespaces

Our [policies](/policies) outline that channels on Libera.Chat fall into one
of three categories and two namespaces. Channels that begin with only a single
`#` character are primarily for on-topic project and community channels
(e.g. `#linux`). Channels that begin with two or more `#` characters are for
informal channels (e.g. `##chat`).

[Registered groups](#formal-group-registration) additionally have their own
channel namespaces that they control. This includes the "main" channel for
that namespace (e.g. `#libera`) as well as all channels beginning with that
name followed by a hyphen (e.g. `#libera-dev`). A registered group may have
control over multiple channel namespaces. To check if a registered channel
belongs to a particular group's channel namespace, you can use the
`/msg ChanServ INFO` command on that channel; if it is, you will receive a
line like the following towards the bottom of the output:

```irc
The #libera namespace is registered to the libera.chat project
```

### What is on-topic?

Projects considered to be on-topic for Libera.Chat are primarily free and
open-source software projects, and other peer-directed projects, for instance
Linux User Groups (LUGs), student societies, hacker- or makerspaces and other
collaborative efforts. At staff discretion, it can also cover projects or
companies of general interest to our user base.

If your channel fits the above criteria and you are or have the official
blessing of someone who is able to speak for the project or group, then you
would qualify for an on-topic project channel. If your channel fits the above
criteria but is otherwise unofficial, then you would qualify for an on-topic
community channel. If your channel does not fit the above criteria, and it is
not otherwise
[off-topic for Libera.Chat](/policies/#unwanted-content-and-behaviour), then
you would qualify for an informal channel.

### Expiration and disputes

On-topic project channels and on-topic community channels do not expire. An
official claim to the name of an on-topic community channel is not needed, but
not having it bears the risk of losing the channel should an on-topic entity
with a valid claim start an official presence on Libera.Chat. Staff will try
to find a good solution for both parties in such cases.

Informal channels are claimed on a first-come, first-served basis. They will
expire if unused for a long time, see our [policies](/policies/#channels) for
details regarding when this occurs. You can
[contact a staff member on IRC](/guides/faq#how-to-find-libera-chat-staff)
with a request to take over an expired informal channel; they are not
automatically deleted once they expire. Such requests are not automatically
granted; we will ask you to work with the channel's other members to determine
if you are the best person to take it over or not.

Staff reserve the right to reassign control over any channel, regardless of
which channel namespace it was registered in and regardless of its expiration
status. This is not an action we take lightly, but may become necessary if
disputes regarding channel control cannot be resolved via other means.

## Formal group registration

Established on-topic projects and communities are able to formally register
their project or community with Libera.Chat. This typically happens after the
channel is already registered with ChanServ and both the channel as well as
the project have existed for a while, and the channel decides it wishes to
establish a larger IRC presence on Libera.Chat. There is no requirement for
on-topic projects and communities to formally register with us.

A formal project registration is done for on-topic project channels, and
requires someone who is able to speak on behalf of the project to reach out to
us to initiate the registration. This could be:

- The project founder
- A lead developer
- Someone in a management position
- A board member
- ...

A formal community registration is done for on-topic community channels, and
does not require the registrant to have an official claim to the channel's
name. Libera.Chat staff will assist in determining which type of formal
registration is appropriate for your project or community.

### Benefits of group registration

On-topic projects and communities who have formally registered with
Libera.Chat have extra tools at their disposal to help manage their
IRC presence:

- Your liaisons with us, known as group contacts, will be invited to
  `#libera-communities` where they can more easily reach Libera.Chat staff and
  can be involved in discussions concerning potential future directions and
  improvements for Libera.Chat.
- Control over their group's channel namespaces. For example,
  Libera.Chat itself owns the channel `#libera` and all channels beginning
  with `#libera-`. Group contacts can register or take over channels within
  their group's channel namespace with the `/msg ChanServ CLAIM` command.
- By default, any user will be able to register channels within your channel
  namespaces with ChanServ. This makes it easier for users to create topical
  sub-channels for purposes such as a more in-depth discussion than the main
  channel can accommodate or as social hangout spots. You can optionally
  restrict this so that only group contacts are able to register channels
  within your namespace with ChanServ, for tighter control over your project's
  presence on Libera.Chat. Regardless of the setting you choose, group
  contacts will receive notice of all channels registered under their
  namespace and can audit their channel list at any time with
  `/msg ChanServ LISTGROUPCHANS`.
- Group contacts will be able request cloaks for their group's members which
  highlight that member's involvement or association with their group. For
  example, Libera.Chat staff each have cloaks beginning with `libera/staff/`
  and official bots managed by Libera.Chat have cloaks beginning with
  `libera/bot/` to represent their respective associations with Libera.Chat.
  Formal community registration cloaks will begin with an `about/` prefix to
  indicate that the community is not official. Group contacts can audit the
  list of users with cloaks under their project at any time with
  `/msg NickServ LISTGROUPCLOAKS`.
- We offer to send messages about important releases or events of formally
  registered project as a "wallop" message to our users.

### Group contacts

Group contacts are the people ultimately responsible for your project here on
Libera.Chat. They are empowered to claim channels within your namespace,
assign cloaks to other users, and act as liaisons between Libera.Chat staff
and your project. We **strongly recommend** having between 2-4 group contacts
and that at least one group contact is publicly listed to act as a point of
contact for any users interested in your project.

Group contacts must have registered accounts with NickServ on Libera.Chat.
Usually, you will want to establish yourself as one of the group contacts if
you are formally registering a group with us. The list of group contacts for
your project or community can be modified later by sending an email to
<projects@libera.chat> as the need arises.

Group contacts can be either publicly listed or hidden, and this choice can be
made individually per group contact. Publicly listed contacts will be shown in
`/msg ChanServ INFO` output for all channels within your group's channel
namespaces. Hidden group contacts are known only to you and Libera.Chat staff.

### Registering a group

The [Projects & Community team](/about#projects-and-community-team) will act
as your liaisons during the formal group registration process and throughout
your tenure on the Libera.Chat network. If you wish to discuss the
registration process, find out if Libera.Chat could be a good fit for your
group or register your group, please feel free to drop any of the team members
a line on IRC. If none are online, feel free to reach out to staff in general
and they will forward your request to the team, which will get back to you as
soon as possible. Once you have discussed your project or community with a
staff member, you’ll be asked to email <projects@libera.chat> with the details
of your request.

Do not email us without having first discussed your registration on IRC with a
member of staff. This helps ensure that your project or community is deemed to
be on-topic, that we have a chance to answer any questions you may have about
the group registration process, and that you have a point of contact
throughout the group registration process to ensure your email is not
overlooked or forgotten.

Please note that we only register established projects and communities. If
your project or community does not yet exist, you are still free to register a
channel with ChanServ to discuss and bootstrap your project or community. Once
you feel your project or community is established enough to move forward with
a formal registration, reach out to us.

To ensure the registration process goes as smoothly as possible, please be
prepared with the answers to the following questions:

- Which staff member did you discuss your registration with prior to emailing?
- What is the name of your project or community?
- What is a brief description (1-2 sentences) of your project or community?
- Which URLs can we visit to find out more information about your project or
  community? For example, a project website or source code repositories.
- Can we list your project publicly, such as on the Libera.Chat website?
- What is your relationship to or position in the project or community?
- What are the NickServ account names for the group contacts for your project
  and community (including yourself if desired), and should they be publicly
  listed or hidden?
- Which channel namespaces should be controlled by your project or community
  (typically `#projectname` and `#projectname-*`)?
- Would you like to restrict channel registration in your channel namespaces
  such that only group contacts are able to register channels with ChanServ?
- What cloaks would you like to be available for your project or community's
  members (typically `projectname/*` for project registrations and
  `about/communityname/*` for community registrations)?
