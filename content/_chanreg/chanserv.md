---
title: Registering a channel with ChanServ
category: chanreg
---

How to register a channel on the network is similar for each of the types
we describe below. Each type comes with it's own considerations.

### Project channels

Primary channels in the namespace of an already registered project can be
registered directly via ChanServ's `REGISTER` command. So if e.g. the project
"MyFossCalendar" wants to add `#myfosscalendar-social` to the existing
channels, they can just grab it. For Projects not yet registered as such with
us, please see [project registration](/chanreg/registration-projects). If you
like to add additional channel namespaces to your existing project, please
contact the projects and community team at <projects@libera.chat>.

### Community channels

Community channels in the namespace of an already existing community can be
registered directly via ChanServ's `REGISTER` command. So if e.g. the owners of
`#linux` would like to add `#linux-social` to the existing channels, they can
just grab it. For namespaces not yet registered as such with us, please see
[community registration](/chanreg/registration-communities).

### Informal channels

Informal channels that are not already taken can be registered by any user in
it who has channel operator status, which is usually the first user to join an
empty, unregistered channel. In this case you can use the `REGISTER` command
in chanserv to register it to your account. See `/msg ChanServ help REGISTER`
for details. If a channel is unregistered but nobody has operator status,
please contact network staff and we shall see if we can find a solution that
is acceptable for the local community.
