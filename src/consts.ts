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

// From the legacy Hugo config's [services.googleAnalytics] block.
export const GA_MEASUREMENT_ID = "G-45939822";

// Default social-card image for pages that don't have a more specific one.
export const DEFAULT_OG_IMAGE = "/img/ado-podcast-logo.png";
