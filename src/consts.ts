// Where the show can be listened to. Order is deliberate: it drives both the
// subscribe page's grid and the compact row used in the footer, on episode
// pages, and on the homepage. `featured` marks the entries that appear in the
// compact row — see docs/adr/0005-listen-links-are-site-wide.md.
export type Platform = {
  id: string;
  name: string;
  url: string;
  featured: boolean;
};

export const SUBSCRIBE_LINKS: Platform[] = [
  { id: "apple", name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/arrested-devops/id773888088", featured: true },
  { id: "spotify", name: "Spotify", url: "https://open.spotify.com/show/7hHA2ZlfOmbwv96wEBaMR2", featured: true },
  { id: "pocketcasts", name: "Pocket Casts", url: "https://pca.st/VqEP", featured: true },
  // Overcast derives show URLs from the Apple ID. Unverified — overcast.fm
  // serves a login wall, so this could not be confirmed from outside.
  { id: "overcast", name: "Overcast", url: "https://overcast.fm/itunes773888088", featured: false },
  { id: "iheart", name: "iHeartRadio", url: "https://www.iheart.com/podcast/256-arrested-devops-43075205", featured: false },
  { id: "amazon", name: "Amazon Music", url: "https://www.amazon.com/dp/B08K5862TB", featured: false },
  { id: "audible", name: "Audible", url: "https://www.audible.com/podcast/Arrested-DevOps/B08K56VQJ1", featured: false },
];

// The feed is not a "platform" — it has its own treatment in every placement
// (filled pill, not an outline one) and must stay the canonical path, never the
// /feed/podcast/ compatibility alias.
export const FEED_PATH = "/episode/index.xml";

// Audio is hosted on Blubrry, never by this site — see CONTEXT.md "Media Prefix".
export const MEDIA_PREFIX =
  "https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/";

// Plausible Analytics — see https://plausible.io. Must match the domain
// registered in the Plausible dashboard exactly, or events silently go nowhere.
export const PLAUSIBLE_DOMAIN = "arresteddevops.com";

// Default social-card image for pages that don't have a more specific one.
// Not the same file as the podcast's square RSS artwork (ado-podcast-logo.png) -
// that one has to stay square for podcast-app requirements, this one is
// the usual 1200x630 link-preview shape. See scripts/generate-og-images.mjs.
export const DEFAULT_OG_IMAGE = "/img/social/og/default.jpg";
