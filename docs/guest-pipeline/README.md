# Guest pipeline tracker

Private claude.ai artifact that tracks guests from outreach to recording. It replaces
Airtable. The data lives in the artifact's database and is **never committed**: it holds
guest emails and outreach status. This folder holds only what's needed to rebuild the
tracker and to run it consistently.

- `tracker.html` is the page source. Publish it with the Artifact tool and the `db`
  capability (`capabilities: {"db": {}}`). Republish to the existing artifact URL to keep
  the data.
- Tracker: https://claude.ai/artifact/8T2oCudXKhYLRsVcsUTD6p (private, owner only).

## Data model

Collection `guests`, one document per guest, document id is the name slug
(`cassidy-williams`).

| field | meaning |
|---|---|
| `name`, `email` | guest; email comes from the SavvyCal booking |
| `status` | `scheduled`, `agreed` (said yes, hasn't booked), `link-sent`, `idea`, `recorded`, `published`, `passed` |
| `topic` | what they typed when booking, or what we settled on |
| `recordingAt` | UTC ISO string. The calendar is Central, the page displays Central |
| `linkSentAt`, `followUpAt` | `YYYY-MM-DD`. A booking link older than 14 days flags a nudge |
| `episodeTitle` | episode title without the trailing "with <guest>" (the template adds that) |
| `descriptLink` | Descript recording room. Matty creates it by hand (no tool can) |
| `agendaDoc` | the guest's copy of the agenda template |
| `calendarId`, `calendarEventId` | the SavvyCal booking on the Gmail calendar (source of truth) |
| `coGuests` | optional `[{name, email}]` for other guests on the same episode. They share this row, agenda doc and booking, so they get no row of their own |
| `notes`, `updatedAt` | free text and last write |

The page's Save does a full `set` that spreads the existing document, so fields added from
outside the page survive an edit.

## Agenda template

`ADO Episode - TEMPLATE` in the shared Drive folder `ADO` > `Episodes`. Placeholders:
`{{EPISODE_TITLE}}`, `{{GUEST_NAME}}`, `{{GUEST_FIRST}}`, `{{GUEST_FIRST_CAPS}}`,
`{{DESCRIPT_LINK}}`, `{{EPISODE_BLURB}}`, `{{SLUG}}`, `{{PLUG}}`. Per-guest copies are named
`ADO Episode - <Guest Name>`.

## Calendar entry, once a guest is prepped

SavvyCal writes the booking to the Gmail calendar. The finished entry has:

- title `Arrested DevOps Episode - <Guest Name>` (guests get the update email, which is
  the point)
- description starting with `Podcast recording studio link: <Descript link>` and
  `Agenda/Show Notes: <agenda doc link>`
- location set to the Descript link, and the agenda doc attached
- `matty@tigerdata.com` invited, so the work-calendar block stays in sync

## Guest note before recording

Guests get two emails from a SavvyCal workflow (Premium, so workflows run). Both point at
`https://www.arresteddevops.com/recording/`, a public page that isn't in the nav, the sitemap, or
search (`src/pages/recording.astro`). Change the guidance there and the emails stay the same.

The emails carry nothing per guest. SavvyCal has no variable for the booking's description, and its
API can't write to an existing event, so the Descript link and agenda doc can't go in the email.
They stay on the calendar invite, which `prep-guest` fills in. That is why the emails say "your
studio link and agenda are on the invite", and why `prep-guest` has to run before the recording.

In SavvyCal, make one workflow with two actions and attach it to the guest booking link. Set **To**
to "Guests" on both.

1. **After event scheduled**, 0 minutes. This one always runs, even for a short-notice booking
   (a "before start" action is skipped if its time had already passed when the guest booked).

   ```
   Subject: You're booked for Arrested DevOps: what to expect

   Hi {{ recipient.first_name }},

   You're on the calendar for {{ event.start_at | datetime: "full" }}. Everything you need
   before we record is here: https://www.arresteddevops.com/recording/

   The short version: we book an hour, the episode runs 30 to 40 minutes, and we record audio
   and video. If you'd rather not be on camera, tell me and we'll make it audio only. You'll get
   an updated calendar invite with your studio link and the agenda doc before we record.

   Need to move it? {{ event.reschedule_url }}

   Matty
   ```

2. **Before start of event**, 2 days.

   ```
   Subject: Arrested DevOps recording on {{ event.start_at | datetime: "full" }}

   Hi {{ recipient.first_name }},

   A reminder before we record: https://www.arresteddevops.com/recording/

   Your studio link is in the location field of your calendar invite, and the agenda doc is
   attached to the same invite. If you can't find either, reply and I'll send them.

   Need to move it? {{ event.reschedule_url }}

   Matty
   ```

SavvyCal keeps no log of workflow emails; add your own address as an extra recipient if you want a
copy. A reschedule moves the "before start" action but doesn't re-send the "after scheduled" one.

A reschedule can also overwrite what `prep-guest` wrote to the calendar event. Tracked in #155.

## Not built yet

`prep-guest` (`.claude/skills/prep-guest`) is written from the first real run, on Adriana
Villela. A `guest-sync` skill that reads the calendars and fixes drift comes later. Sponsors
become a second collection once guests have survived a recording.
