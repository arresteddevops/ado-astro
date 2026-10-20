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
| `descriptLink` | Descript recording room. Matty creates it by hand (no tool can) |
| `agendaDoc` | the guest's copy of the agenda template |
| `calendarId`, `calendarEventId` | the SavvyCal booking on the Gmail calendar (source of truth) |
| `workBlockCalendarId`, `workBlockEventId` | Matty's manual copy on the work calendar. Leave it alone |
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

## Not built yet

Prep and calendar-sync procedures are written as skills after the first real run, so they
describe what worked. Sponsors become a second collection once guests have survived a
recording.
