// Netlify scheduled function: the on-time version of .github/workflows/go-live.yml
// (GitHub's scheduler runs hours late). If an episode's go-live time has passed but
// the live feed doesn't have it, POST the build hook. Idempotent: not due = no-op.
// ADR-0006. Needs NETLIFY_BUILD_HOOK in the site's env vars (scope: Functions).
import { readEpisodes, liveEpisodeNumbers } from "../../scripts/lib/episode-files.mjs";
import { isDue, fetchFeedXml } from "../../scripts/lib/feed.mjs";

const FEED_URL = "https://www.arresteddevops.com/episode/index.xml";

/** @returns {Promise<"triggered" | "not due">} */
export async function run({ episodes, now = new Date(), fetchImpl = fetch, hook = process.env.NETLIFY_BUILD_HOOK }) {
  const expected = liveEpisodeNumbers(episodes, { now, gate: true });
  if (!isDue(await fetchFeedXml(fetchImpl, FEED_URL), expected)) return "not due";
  if (!hook) throw new Error("NETLIFY_BUILD_HOOK is not set");
  const res = await fetchImpl(hook, { method: "POST" });
  if (!res.ok) throw new Error(`build hook -> ${res.status}`);
  return "triggered";
}

export default async () => {
  // Files come from `included_files` in netlify.toml, at the same relative paths.
  const root = process.env.LAMBDA_TASK_ROOT ?? process.cwd();
  console.log(`go-live: ${await run({ episodes: readEpisodes(root) })}`);
};

// 10Z and 11Z cover both sides of DST (06:00 ET); two tries each.
export const config = { schedule: "17,47 10,11 * * *" };
