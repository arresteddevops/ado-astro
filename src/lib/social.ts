interface SocialFields {
  website?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

const isUrl = (value: string) => /^https?:\/\//.test(value);

// Most guest/host data stores a bare username, but some legacy entries
// carry a full profile URL (including old linkedin.com/pub/... links);
// use it as-is rather than re-wrapping it into a broken double URL. A
// bare website domain (e.g. "verica.io") renders as a broken relative
// link with no scheme, so that one always gets https:// added.
export function resolveSocialLinks({ website, twitter, github, linkedin }: SocialFields) {
  return {
    website: website && (isUrl(website) ? website : `https://${website}`),
    twitter: twitter && (isUrl(twitter) ? twitter : `https://twitter.com/${twitter}`),
    github: github && (isUrl(github) ? github : `https://github.com/${github}`),
    linkedin: linkedin && (isUrl(linkedin) ? linkedin : `https://linkedin.com/in/${linkedin}`),
  };
}
