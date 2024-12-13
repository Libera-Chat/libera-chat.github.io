---
title: Groups
category: chanop
weight: 70
---

[Projects and communities](/chanreg#what-is-on-topic) that are aligned
with our mission are eligible for group registration, which gives them extra
management tools and improves communication between their community and Libera.Chat
staff.

# Requesting a group registration

Communities wishing to register a group should choose a primary contact,
which is the person in charge of being the interface between their community
and Libera.Chat staff, and secondary contact who will fill the role in their
absence. Primary and secondary contacts are also known as Group Contacts.

Then, the primary contact should email [support@libera.chat][support],
mentioning:

* their account name and the secondary contacts'
* which contacts want to be public
* their channel namespace (eg. `#libera` for the Libera project, which contains
  `#libera` itself, in addition to `#libera-dev`, `#libera-communities`, etc.), and
* optionally a cloak namespace (eg `libera/` for the Libera project).

When accepted, this will grant permission to use the tools listed below,
and the primary and secondary contacts will be invited to the
`#libera-communities` channel.
It will also prevent unaffiliated users from registering channels in
the namespace.

# Listing Group contacts

After a group is registered, when Group Contacts of a namespace use
`/msg ChanServ INFO` for a channel registered in their namespace, they will
see a full list of both public and unlisted/private Group Contacts assigned
to their project.
Others will still only see public contacts when they use ChanServ INFO

# Claiming a channel

Group Contacts can use the `/msg ChanServ LISTGROUPCHANS` command to list every 
registered channel in their namespace, even if they were registered other users
prior to the group registration.

They can also use the `/msg ChanServ CLAIM #channel` command to add themselves
as founder to the given `#channel`. In particular, this allows them to take over
existing channels registered prior to the group registration.

# Project Cloaks

If your project or community has had an official group registration approved,
then you are probably able to request [cloaks](/guides/cloaks) for your users
and contributors.
Group Contacts have the right to request cloaks for group members,
by asking on the `#libera-communities` channel, for which they have a standing
invite.

While it is not mandatory, we do recommend having some internal standards for
your users to meet to be eligible for your project's cloaks. Bearers of your
cloaks are seen by others as representatives of your community and as such
the bearer's behaviour will reflect onto the reputation of
your project or community.

The `/msg NickServ LISTGROUPCLOAKS` command lets Group Contacts list all users
with cloaks belonging to their projects.

[support]: mailto:support@libera.chat

