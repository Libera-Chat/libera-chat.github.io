---
title: Monthly General Meeting, January 2022
author: Swant
excerpt: >
  Staff misconduct process ratification, privacy policy updates, preparations
  for upcoming chair election, loading channelmode `+T`, renaming of internal
  channels, updating oper privsets, access to organisational vs staff tools,
  minutes storage, `chm_operonly`, changes to purpose of internal channel.
---

<!-- markdownlint-disable MD033 -->

## Propositions and motions

### Ratifying process for handling staff misconduct

The working group tasked with proposing a process in cases of staff misconduct
presented their proposal and reasoning. The meeting identified some slight
wording changes it would like to see in a future update but unanimously
approved the proposal as it was presented, the proposal added the process
to the bylaws.

This has previously been discussed on the [July 2021 MGM][2021-07-sm], and the
[September 2021 MGM][2021-09-sm]

[2021-07-sm]: /minutes/2021-07-27-mgm-minutes#defining-processes-in-case-of-staff-misconduct
[2021-09-sm]: /minutes/2021-09-24-mgm-minutes#update-from-the-working-group-on-processes-for-dealing-with-staff-misconduct

<details>
<summary>Patch for bylaws change</summary>
<div markdown="1">

```patch
 bylaws.md | 89 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 89 insertions(+)

diff --git a/bylaws.md b/bylaws.md
index 0000000..0000000 100644
--- a/bylaws.md
+++ b/bylaws.md
@@ -247,6 +247,95 @@ v 2021-09-27, organisation number 802535-6448

 4. The auditors cannot be members of the board.

+## Complaints
+
+1. The membership shall appoint a Complaints Rota to handle complaints about the
+   organisation's staff. Members on the Complaints Rota must be members of the
+   organisation.
+
+2. If, at the time of a Monthly General Meeting, there are fewer than four
+   members on the Complaints Rota, the meeting should attempt to appoint more
+   members until there are at least four such members.
+
+3. On receiving a complaint, the Complaints Rota shall select two of its
+   members, at random, to hear the complaint. Members with known conflicts of
+   interest shall be excluded from selection. These members shall be known, in
+   the context of the particular complaint, as the "Complaint Processors"
+
+4. The Complaint Processors must agree on the action to be taken, if any.
+
+5. The Complaint Processors must respect the privacy of complainants and all
+   other parties. The Complaint Processors may recruit other members of the
+   organisation to assist with their investigation. Other members, including the
+   Board and Complaints Rota members who are not actively working on the
+   complaint, should not have automatic access to it.
+
+6. If any party to a complaint disagrees with the result, they can appeal it.
+   Libera Chat members require no permission to appeal, while non-members must
+   seek the permission of the Board. If the Board denies such permission, it
+   must give a reason.
+
+   There are two appeals to be used in order:
+
+   * Appeal to another two random Complaints Rota members, and
+   * Appeal to the entire membership.
+
+   Any party wishing to appeal must immediately inform the Board. If a party has
+   not informed the Board of their intention to appeal after 30 calendar days
+   from the date of the result, their right to appeal lapses.
+
+7. In the event that a complaint is appealed to the entire membership of the
+   organisation, the Board is responsible for scheduling a meeting of the
+   membership to hear the appeal.
+
+8. A complaint that is appealed to the entire membership of the organisation may
+   contain sensitive information that should not be shared widely. The Complaint
+   Processors should prepare a case for the membership, excluding such details.
+   The Auditors of the organisation may be called upon to attest that the
+   Complaint Processors' case is a faithful account of the complaint.
+
+9. Parties to complaints who are Libera Chat members have the right to speak at
+   their own final appeal, and to hear all sides' arguments. They should not be
+   present when the resulting actions are discussed. The Board should dismiss
+   any such party if they reveal, or threaten to reveal, private information
+   about the complaint, or the other parties to it.
+
+10. An appeal to the entire membership is decided by a vote between two options:
+    to carry or vacate the outcome of the complaint. This may optionally be
+    preceded by any number of votes to amend or not amend the decision. Each
+    vote is a simple majority vote between exactly two choices. If a vote to
+    amend has no majority, the decision is not amended. If a vote on the outcome
+    has no majority, the complaint is carried.
+
+11. If the outcome of any stage of a complaint is to relieve a Libera Chat staff
+    member of some or all of their duties, those duties can be temporarily
+    suspended pending the conclusion of the appeal process. If a staff member
+    whose duties are temporarily suspended is a member of Libera Chat, their
+    membership is unaffected by this status.
+
+12. At most two members can be temporarily suspended at any time.
+
+13. Time constraints are imposed on the complaints process as follows:
+
+    * Complaints must be acknowledged within 7 calendar days of receipt by the
+      Complaints Rota.
+    * An initial result must be returned by the Complaint Processors within 30
+      calendar days of receipt of the complaint by the Complaints Rota.
+    * A party wishing to appeal has 7 calendar days to prepare their appeal,
+      starting from the date they notified the Board of their intention to
+      appeal.
+    * The result of the first appeal must be returned by the Complaint
+      Processors not before all parties have exercised or waived their right to
+      appeal, and within 14 days of the end of the first 30-day appeal period.
+    * The Board must schedule the hearing for the second appeal not before all
+      parties have exercised or waived their right to appeal, and within 21 days
+      of the end of the second 30-day appeal period.
+
+14. If, at the time of any Monthly General Meeting, a member is temporarily
+    suspended, and will have been temporarily suspended for more than 59
+    calendar days by the end of the current calendar month, the Monthly General
+    Meeting must decide whether or not to continue their temporary suspension.
+
 ## Specialised Committees

 1. There are three specialised committees: Operations, Engineering, and
```

</div>
</details>

### Privacy policy update for abuse mitigation data

A proposal for privacy policy amendments based on the discussion on the
[October 2021 MGM][2021-10-priv] and [November 2021 MGM][2021-11-priv] was
adopted. This increases the retention period for abuse mitigation data.

[2021-10-priv]: /minutes/2021-10-29-public#data-retention
[2021-11-priv]: /minutes/2021-11-26-public#update-on-data-retention

<details>
<summary>Patch for privacy policy change</summary>
<div markdown="1">

```patch
 privacy.md | 10 ++++++++++
 1 file changed, 10 insertions(+)

diff --git a/privacy.md b/privacy.md
index 0000000..0000000 100644
--- a/privacy.md
+++ b/privacy.md
@@ -78,6 +78,16 @@ Libera Chat normally stores your data collected on the IRC network for the
 purpose of debugging and restoration for no more than 60 days after you last
 connect to the network, or delete your account. Whichever comes last.

+Data collected for the purposes of recording and mitigating abuse may be kept
+for up to 365 days after the abuse occured, or the mitigation ended, whichever
+comes last. The following information is covered by this policy:
+
+- network bans (target, setter, reason, duration, timestamp, known aliases)
+- connections affected by network bans (nickname, username, hostname,
+  IP address, timestamp of effect)
+- account registrations for the purposes of network policy violation (email
+  address, nickname, username, hostname, IP address, timestamp, known aliases)
+
 Data collected by email or our support system in relation to project
 registration, sponsorship and channel namespace management will be stored at
 least until the project is deregistered or the sponsorship is terminated, this
```

</div>
</details>

### Preparations for chair elections

The working group presented an updated version of their living document
outlining the role of the Libera Chat organisation chair, originally presented
on the [November 2021 MGM][2021-11-chair]. The meeting had no objections
to the proposed document and the working group proposed, and was tasked with,
commencing an interview process for potential chair candidates, with
the intention of producing a recommendation to the electing MGM.

[2021-11-chair]: /minutes/2021-11-26-public#update-on-chair-elections

## Other questions

### Loading channelmode `+T` (`chm_nonotice`)

The [channelmode `+T`][chm] was loaded prior to the meeting after discussion
and a consensus process outside of MGM's. Some discussion was held on
how the consensus process had worked in this case, and the meeting felt it had
worked well.

Some discontent around `+T` being necessary at all was expressed, given its
need comes from some clients handling notices badly, but given many channels
and users had requested the mode it was deemed a positive to load.

[chm]: /guides/channelmodes

### Renaming internal channel

An internal logging channel had been renamed prior to the meeting to better
describe what it does. This was brought to the MGM to allow discussion on how
the consensus process had worked outside the MGM forum. The meeting felt the
process had worked well.

### Updating oper privsets

With recent updates to Atheme a specific services command can now be granted
independently of other services privs, the priv for this command will now be
included in privsets that also have the IRCd counterpart.

### Access to organisational tools without access to staff tools

A hypothetical scenario around the link between staff and membership statuses
where someone may choose to temporarily not have their staff capabilities due
to vacations or similar, but still should have access to their organisational
capabilities to be able to take part in the consensus process were discussed,
along with its potential impact, security risks, and technical
implementations. The meeting took no action on the topic.

### Follow up on minutes storage

A follow up discussion on the discussion from the
[October 2021 MGM][2021-10-minutes] around how and where to store minutes
was held, in addition to the October 2021 MGM a discussion had been held in
another forum, as tasked by the October 2021 MGM, and its outcome was noted.

Some discussion about how the consensus process was handled in the other forum
was held, and potential steps to make the transition between MGM and
other forums more clear was suggested.

[2021-10-minutes]: /minutes/2021-10-29-public#minutes-storage

### Loading `chm_operonly`

In the interest of further securing users' personal information a suggestion
to load `chm_operonly` and restrict access to some channels that may contain
personal information was made. Whilst this would reduce risk by effectively
enforcing additional layers of required authentication, it was deemed
not practical for several technical reasons. The engineering team may
discuss alternative solutions in the future.

### Improvements to an internal channel

There was an agenda item around clarifying the purpose of an internal channel,
the meeting opted to let other forums discuss this topic.
