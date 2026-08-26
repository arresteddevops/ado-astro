// Pulled from the legacy site's Hugo config ([params] block).
export const SUBSCRIBE_LINKS = {
  apple: "http://itunes.apple.com/us/podcast/arrested-devops/id773888088?mt=2&uo=4&at=11lsCi",
  spotify: "https://open.spotify.com/show/7hHA2ZlfOmbwv96wEBaMR2?si=UeVjoWIVSqqLluJd4TlEUg",
  pocketcasts: "https://pca.st/VqEP",
  android: "http://subscribeonandroid.com/www.arresteddevops.com/episode/index.xml",
  // The feed itself doesn't exist yet — that's Phase 4 (issue #4).
  rss: "/episode/index.xml",
};

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
