---
name: prep-guest
description: Prep a scheduled guest for recording. Copies the agenda template for them, fills in the Descript room link and names, updates the guest pipeline tracker row, and retitles the booking on the calendar with the Descript and agenda links. Run when Matty hands over a guest's Descript room link and episode title.
---

Run this when a guest has booked and Matty gives you their **Descript room link** and the
**episode title**. Matty creates the Descript room by hand; nothing here can. The tracker,
schema and calendar-entry format are in `docs/guest-pipeline/README.md`. Read it first.

Tracker: the artifact URL in that README, collection `guests`, doc id = name slug. Every
write pins `if_version` from a fresh read of the row.

## 1. Gather

Read the guest's row. You need `name`, `calendarId`, `calendarEventId`, and whether
`workBlockEventId` is set. If the row has no booking, stop and ask. Do not guess an event.

The episode title Matty gives you usually ends with "with <Guest Name>". The template
adds that itself, so drop it from `{{EPISODE_TITLE}}`, or the heading reads "with" twice.

## 2. Agenda doc

1. Copy `ADO Episode - TEMPLATE` (id in the README) into the `Episodes` folder with
   `copy_file`, titled `ADO Episode - <Guest Name>`. The copy is owned by whichever Google
   account the connector runs as. That's expected.
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
- `addedAttendees`: `matty@tigerdata.com`, so the work calendar block stays in sync.
  **Skip this if `workBlockEventId` is set.** That means Matty already copied the booking
  to the work calendar by hand, and inviting would create a duplicate. Ask him whether to
  delete the manual copy first.

Do not touch the work-calendar block copies. They are Matty's.

The invite can take a minute to show on the work calendar. Check with `list_events` on
that calendar before you report it as missing.

## 5. Report

One short message: the doc link, what is still a placeholder, and anything odd. Compare
the recording time with the guest's other calendar items that day and mention a meeting
that ends right when the recording starts.
