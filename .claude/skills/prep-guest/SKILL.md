---
name: prep-guest
description: Prep a scheduled guest for recording. Copies the agenda template for them, fills in the Descript room link and names, updates the guest pipeline tracker row, retitles the booking on the calendar with the Descript and agenda links, and drafts agenda topics for the doc. Run when Matty hands over a guest's Descript room link and episode title.
---

Run this when a guest has booked and Matty gives you their **Descript room link** and the
**episode title**. Matty creates the Descript room by hand; nothing here can. The tracker,
schema and calendar-entry format are in `docs/guest-pipeline/README.md`. Read it first.

Tracker: the artifact URL in that README, collection `guests`, doc id = name slug. Every
write pins `if_version` from a fresh read of the row.

## 1. Gather

Read the guest's row. You need `name`, `calendarId` and `calendarEventId`. If the row has
no booking, stop and ask. Do not guess an event.

If the row has `coGuests`, the episode has several guests. Below, `<Guest Name>` is every
name joined with "and" ("Stephan Schmidt and Tanya Higgins") and the first-name
placeholders get the first names joined the same way ("Stephan and Tanya"), and the doc is
named with every guest. Read the copied doc
for singular wording ("your", "you're") that no longer fits, and tell Matty.

The episode title Matty gives you usually ends with "with <Guest Name>". The template
adds that itself, so drop it from `{{EPISODE_TITLE}}`, or the heading reads "with" twice.

## 2. Agenda doc

1. Ask Matty to copy `ADO Episode - TEMPLATE` (id in the README) into the `Episodes` folder
   as `matt.stratton@gmail.com`, titled `ADO Episode - <Guest Name>`, and send you the link.
   Don't use `copy_file`: the connector runs as the tigerdata account, and a doc that
   account owns can't be shared with an external guest. The tigerdata account can still
   edit the gmail-owned copy through the folder, so fill it with `update_doc` (confirmed on
   Stephan Schmidt's doc).
2. One `update_doc` batch, in this order:
   - `replaceAllText` `{{DESCRIPT_LINK}}` with the room URL.
   - `updateTextStyle` to hyperlink it (`link`, underline, blue `0.0667/0.3333/0.8`). In the
     current template the link text starts at index 82. The end is 82 plus the URL's
     length. If the template's header changes, read the doc and recompute.
   - `replaceAllText` for `{{EPISODE_TITLE}}`, `{{GUEST_NAME}}`, `{{GUEST_FIRST_CAPS}}`
     (first name in capitals), then `{{GUEST_FIRST}}`.
3. Leave `{{EPISODE_BLURB}}`, `{{SLUG}}` and `{{PLUG}}` alone. Matty writes the blurb and
   the plug, and the slug doesn't exist until the episode does. Say so in your report.
4. Read the doc back with `read_file_content` and confirm no placeholders remain except
   those three.

## 3. Tracker row

`update` the row with `descriptLink`, `agendaDoc` (the doc's `/edit` URL), `episodeTitle`,
and `topic` if Matty settled on one. Keep the guest's own words in `notes` when they
offered several topics.

## 4. Calendar

`update_event` on the booking (`calendarId` / `calendarEventId` from the row):

- `summary`: `Arrested DevOps Episode - <Guest Name>`. The guest gets the update email.
  Matty is fine with that.
- `location`: the Descript link.
- `description`: put `Podcast recording studio link: <a href>` and
  `Agenda/Show Notes: <a href>` (separated by `<br><br>`) above the existing text. Keep
  the SavvyCal text verbatim, with `\n` turned into `<br>`, so reschedule and cancel links
  survive.
- `addedAttachments`: the agenda doc (`?usp=sharing` URL, titled with the doc name).
- `addedAttendees`: `matty@tigerdata.com`, so the work calendar block stays in sync, plus each co-guest's email from `coGuests`. Matty
  no longer copies bookings to the work calendar by hand. If you do find a hand-made copy
  of this booking there, ask him to delete it first, or the invite leaves a duplicate.

Do not edit or delete anything on the work calendar yourself.

The invite can take a minute to show on the work calendar. Check with `list_events` on
that calendar before you report it as missing.

## 5. Agenda topics

Draft topics for the `Agenda/Topics` section. Show the draft in chat and write it to the doc
only after Matty approves. The doc is attached to the invite, so the guest reads it. It is
there so they know what Matty might ask and so Matty has reminders.

Inputs: the row's `topic` and `notes`, the SavvyCal text on the booking, and any email
thread Matty pastes (ask for it when the topic is thin). Why a co-guest is on the episode
comes from Matty. Read the guest's published writing with `WebSearch` and `WebFetch`, and
say plainly what you could not find. A brand-new idea often has no public trace.

Shape of the draft:

- An italic line first: "Not a script. Things I might ask about, so nobody's surprised."
- Three to five bold group labels (one per guest, then themes), a few bullets each.
- Neutral, open prompts ("where might this fall short?"), not gotchas. Give each guest a
  story prompt ("a team you've seen") before any framework question, so the episode doesn't
  turn into a pitch for the guest's idea.
- No internal tool names or non-public details.

Keep the sharper versions (the pointed questions, where Matty plans to push) out of the doc
and give them in chat as private reminders.

To write it: `insertText` at the start of the empty bullet under the heading, with the last
line left without a trailing newline so it merges into that bullet. Then read the doc back
for exact indexes and make the label lines bold and unbulleted (`deleteParagraphBullets`,
then indent 0). Check with `read_file_content`. Do not touch the calendar event for this; it
would email the guest.

## 6. Report

One short message: the doc link, what is still a placeholder, the agenda topics if you
wrote them, and anything odd. Compare
the recording time with the guest's other calendar items that day and mention a meeting
that ends right when the recording starts.
