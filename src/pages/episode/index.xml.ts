import type { APIContext } from "astro";
import { getEntries } from "astro:content";
import { getEpisodesNewestFirst } from "../../lib/episodes";
import { renderMarkdown } from "../../lib/markdown";
import { MEDIA_PREFIX } from "../../consts";

// Values below come from the legacy Hugo site's config.toml [params.feed]
// block — this feed URL is load-bearing (podcast apps subscribe to it), so
// these are copied verbatim rather than re-derived. See ADR-0001.
const CHANNEL = {
  title: "Arrested DevOps",
  description:
    "Arrested DevOps is the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness.",
  copyright: "Copyright 2013-2024 Arrested DevOps",
  itunesSubtitle: "There's always DevOps in the Banana Stand",
  itunesAuthor: "Matt Stratton, Trevor Hess, Jessica Kerr, and Bridget Kromhout",
  ownerName: "Matt Stratton",
  ownerEmail: "matt.stratton@gmail.com",
  categories: [{ text: "Technology", sub: ["Software How-To", "Tech News"] }],
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

export async function GET(context: APIContext) {
  const site = context.site ?? new URL("https://www.arresteddevops.com/");
  const feedUrl = new URL("episode/index.xml", site).toString();
  const podcastImage = new URL("img/ado-podcast-logo.png", site).toString();

  const episodes = await getEpisodesNewestFirst();

  const items = await Promise.all(
    episodes.map(async (episode) => {
      const {
        title,
        description,
        publishDate,
        date,
        episodeNumber,
        podcastFile,
        podcastDuration,
        podcastBytes,
        hosts,
        explicit,
      } = episode.data;

      const hostEntries = await getEntries(hosts);
      const authorName = hostEntries.map((h) => h.data.name).join(", ") || CHANNEL.ownerName;
      // GUID is deterministic and must never change once published — see ADR-0001.
      const enclosureUrl = `${MEDIA_PREFIX}${podcastFile}`;
      const link = new URL(`${episode.id}/`, site).toString();
      const contentHtml = renderMarkdown(episode.body ?? "");

      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <pubDate>${(publishDate ?? date).toUTCString()}</pubDate>
      <guid>${enclosureUrl}</guid>
      <itunes:author>${escapeXml(authorName)}</itunes:author>
      <itunes:episode>${episodeNumber}</itunes:episode>
      <itunes:title>${escapeXml(title)}</itunes:title>
      <itunes:subtitle>${cdata(description)}</itunes:subtitle>
      <itunes:summary>${escapeXml(description)}</itunes:summary>
      <description>${escapeXml(description)}</description>
      <content:encoded>${cdata(contentHtml)}</content:encoded>
      <enclosure url="${enclosureUrl}" length="${podcastBytes ?? 0}" type="audio/mpeg" />
      ${podcastDuration ? `<itunes:duration>${podcastDuration}</itunes:duration>` : ""}
      <itunes:explicit>${explicit === "yes" ? "true" : "false"}</itunes:explicit>
      <googleplay:explicit>${explicit}</googleplay:explicit>
    </item>`;
    }),
  );

  const categoryXml = CHANNEL.categories
    .map(
      (c) =>
        `<itunes:category text="${c.text}">${c.sub
          .map((s) => `<itunes:category text="${s}" />`)
          .join("")}</itunes:category>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
     xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0"
    >
  <channel>
    <title>${CHANNEL.title}</title>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <link>${site.toString()}</link>
    <description>${escapeXml(CHANNEL.description)}</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-us</language>
    <copyright>${escapeXml(CHANNEL.copyright)}</copyright>
    <itunes:subtitle>${escapeXml(CHANNEL.itunesSubtitle)}</itunes:subtitle>
    <itunes:author>${escapeXml(CHANNEL.itunesAuthor)}</itunes:author>
    <itunes:type>episodic</itunes:type>
    <googleplay:author>${escapeXml(CHANNEL.itunesAuthor)}</googleplay:author>
    <googleplay:email>${CHANNEL.ownerEmail}</googleplay:email>
    <itunes:summary>${escapeXml(CHANNEL.description)}</itunes:summary>
    <googleplay:description>${escapeXml(CHANNEL.description)}</googleplay:description>
    <itunes:owner>
      <itunes:name>${escapeXml(CHANNEL.ownerName)}</itunes:name>
      <itunes:email>${CHANNEL.ownerEmail}</itunes:email>
    </itunes:owner>
    <itunes:image href="${podcastImage}" />
    <googleplay:image href="${podcastImage}"></googleplay:image>
    <image>
      <url>${podcastImage}</url>
      <title>${CHANNEL.title}</title>
      <link>${site.toString()}</link>
    </image>
    ${categoryXml}
    <generator>Astro -- astro.build</generator>
    ${items.join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
