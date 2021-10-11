---
title: Monthly General Meeting, September 2021
author: Swant
excerpt: >
  Approval of new members, bylaws amendment about expiring quorum status,
  discussion around DNSBLs / DroneBL, update on bank account, changing the
  nick expiration policy, permanent solution for opt in user cloaking without
  staff intervention, consensus-based decision making training, and an update
  from the working group on processes for dealing with staff misconduct.
---

## Propositions and motions

### Approval of new members

The meeting approved two new staff for membership. Current staff and members
are listed on the [about page](/about).

### Bylaws: Expiry of quorum status for inactive members

In light of [discussion around staff activity during the August 2021 MGM][mgm]
the following proposal to amend the bylaws was received by the meeting and
approved:

```patch
---
 bylaws.md | 6 +++++-
 1 file changed, 5 insertions(+), 1 deletion(-)

diff --git a/bylaws.md b/bylaws.md
index d9fe835..a69fe87 100644
--- a/bylaws.md
+++ b/bylaws.md
@@ -51,7 +51,11 @@ v 2021-06-12, organisation number 802535-6448
    Members of either type may at any time switch between the two types of
    member status by notifying the board. The board are always quorum members.

-5. Membership is terminated if:
+5. Any quorum member who, in any two full, consecutive calendar months, does
+   not attend any Monthly General Meetings, becomes an ordinary member
+   immediately after the end of the second such month.
+
+6. Membership is terminated if:

    - The member withdraws their membership, or
```

[mgm]: /minutes/2021-08-27-mgm-minutes#staff-and-member-activity

### DNSBL / DroneBL

The organisational interest for the future of DNSBL usage was gauged due to
raised concerns around technical and organisational issues around DroneBL.

The organisation indicated a preference towards something new made and/or run
in collaboration with others.
The organisation also indicated a preference towards not relying on DroneBL
forever.
Lastly, the organisation indicated a preference towards not expanding the
organisation's purpose to include running abuse mitigation services.

### Update on establishing a bank account

The meeting was brought up to speed on the current progress on establishing a
bank account, circumstances indicate it will continue to be a lengthy process.

## Other questions

### Nick expiration policy

A suggestion to extend the nickname expiration to 52 weeks was made,
discussion about benefits and issues with this policy change was held.
The meeting decided to expand the nickname expiration to 20 weeks and evaluate
the effects of this change. This change will be made no earlier than 10 weeks
after it has been announced. The meeting also showed interest in discussing
reducing the maximum allowed number of grouped nicknames in the future.

### Permanent solution for opt in user cloaking without staff intervention

The [`#libera-cloak` bot](https://github.com/Libera-Chat/cloaks) has been
identified as pretty useful and there has been suggestions to allow this
permanently. The engineering team was tasked with devising how and
implementing that. This pertains to `user/` cloaks, project cloaks were not
included in this discussion.

### Consensus-based decision making training

A brief status update on our continuous staff training efforts was shared.

### Update from the working group on processes for dealing with staff misconduct

The working group updated the meeting on their current progress for devising
processes for dealing with staff misconduct.
The group had identified behaviours the process should prevent and values the
process need to uphold.
They also shared draft ideas for how the process could look and collected
feedback from the meeting.
