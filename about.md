---
title: About Libera Chat
---

Libera Chat is a Swedish nonprofit organisation with organisation number
802535-6448, feel free to [read our bylaws](/bylaws). The organisation is run
entirely by volunteer staff who are the members of, and have equal voting power
in, the organisation. Libera Chat's purpose is to provide services such as a
community platform for free open-source software and peer directed projects on
a volunteer basis.

Most decisions are taken by the membership as a whole. The board
primarily deals with organisational tasks like managing our bookkeeping
and keeping the member list in sync. There are also three teams within
the organisation specialising on certain areas: Projects and Community,
Engineering, and Operations. Members can choose to be part of these teams.

The board of the organisation comprises a chair, a treasurer and a
representative from each of our specialised teams. Board seats are elected
by the membership. The current board members are:

- **Chair**: moonmoon
- **Treasurer**: Swant
- **Projects and Community Rep**: Allie
- **Engineering Rep, Vice Chair**: spb
- **Operations Rep**: tomaw

In addition to this the organisation has two auditors elected by the membership.
Their role is to audit the board's actions on behalf of the membership.
Their yearly audit report, along with the annual report and bookkeeping of the
organisation, will be published in a yearly
[transparency report](/annual-reports/).
The current auditors are:

- **Auditor**: amdj

The organisation additionally has a general secretary whose role is to ensure
the timely completion and publication of meeting minutes.

- **General Secretary**: She

## Projects and community team

The projects and community team manages our relationships with
[projects and communities](/chanreg) on the network, taking care of project
and community registration, coordinating with projects and communities, and
managing our social media.

{% assign staff = site.data.staff %}
{% assign pac_team = staff | where: "projects and community", "y" %}
The Projects and community team comprises:
{{ pac_team | map: "nick" | join: ", " }}.

## Engineering team

The engineering team handles development of the software we use to run the
network such as contributions to the [Solanum IRCd](https://solanum.chat),
and [Atheme Services](https://atheme.github.io/) as well as our websites,
tools and bots.

{% assign eng_team = staff | where: "engineering team", "y" %}
The engineering team comprises: {{ eng_team | map: "nick" | join: ", " }}.

## Operations team

The operations team manage our infrastructure, making sure the network stays
operational and ensuring we have the right hardware and server platforms to
operate the services we provide.

{% assign ops_team = staff | where: "operations team", "y" %}
The operations team comprises: {{ ops_team | map: "nick" | join: ", " }}.

## Wider staff and organisation membership

There are several staff and members who are not involved in any of the
specialised teams, yet without them the efforts of the specialised teams would
be in vain and more importantly day to day operation of the network would be
impossible.

Staff and membership comprises: {{ staff | map: "nick" | join: ", " }}.

Staff who are immediately available for contact can be found with `/stats p`.
See our [FAQ](/guides/faq#how-to-find-libera-chat-staff) for other ways to
find staff.
