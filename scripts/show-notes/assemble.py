# Assemble an episode's new show notes for issue #84 (see .claude/skills/enhance-show-notes).
#
#   python3 scripts/show-notes/assemble.py <slug> <prose.md> [--description "..."] [--body body.md]
#
# New body = your prose + the episode's EXISTING links body, preserved. If the existing body is raw
# HTML it is converted to markdown by html2md.py (markup only, every URL byte-identical). Pass
# --body to supply a hand-converted body instead, for bodies the converter can't handle (messy
# inline HTML). Frontmatter is untouched except an optional --description.
#
# Run from the repo root on an UNTOUCHED episode file: it prepends prose to whatever body is there,
# so to redo one, `git checkout src/content/episodes/<slug>.md` first.
import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from html2md import convert

ap = argparse.ArgumentParser()
ap.add_argument("slug")
ap.add_argument("prose")
ap.add_argument("--description")
ap.add_argument("--body")
args = ap.parse_args()

path = Path(f"src/content/episodes/{args.slug}.md")
frontmatter, body = path.read_text().split("\n---\n", 1)
body = body.strip("\n")
if args.body:
    body = Path(args.body).read_text().strip("\n")
elif re.search(r"<(ul|li|h\d|a |p)[ >]", body):
    body = convert(body).strip("\n")
if args.description:
    assert re.search(r"^description: .*$", frontmatter, re.M), "no description field"
    frontmatter = re.sub(
        r"^description: .*$", lambda m: "description: " + args.description, frontmatter, count=1, flags=re.M
    )
prose = Path(args.prose).read_text().strip("\n")
path.write_text(frontmatter + "\n---\n\n" + prose + "\n\n" + body + "\n")
