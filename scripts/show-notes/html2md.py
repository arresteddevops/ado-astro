# Converts the raw-HTML part of an episode body to markdown, changing nothing but markup.
# Bullets: <li> lines, lines that START with a link, and any run of 2+ consecutive content lines
# (raw HTML collapses newlines, but markdown would too, so a bare run becomes a list).
# Single plain lines stay paragraphs. Heading levels never skip (clamped to one below the previous).
import re, sys, html

def _inline(s):
    def link(mm):
        url = html.unescape(mm.group(1))
        text = re.sub(r"</?(em|i)>", "*", mm.group(2))
        text = html.unescape(re.sub(r"<[^>]+>", "", text))
        return (" " if text != text.lstrip() else "") + f"[{text.strip()}]({url})" + (" " if text != text.rstrip() else "")
    s = re.sub(r'<a href="([^"]+)"[^>]*>(.*?)</a>', link, s)
    s = re.sub(r"</?(em|i)>", "*", s)
    return html.unescape(s)

def convert(body, start_level=2):
    items = []  # (kind, text): h / blank / li / a / text
    levels = [int(x) for x in re.findall(r"<h([2-6])[ >]", body)]
    shift = (min(levels) - start_level) if levels else 0  # shallowest heading becomes H2
    last = start_level
    first_heading = True
    for line in body.split("\n"):
        s = line.strip()
        if not s:
            items.append(("blank", ""))
            continue
        if s == "</ul>":
            items.append(("ulend", ""))  # a list boundary
            continue
        if s == "<ul>":
            continue
        m = re.fullmatch(r"<h([2-6])[^>]*>(.*?)</h\1>", s)
        if m:
            level = start_level if first_heading else min(int(m.group(1)) - shift, last + 1)
            first_heading = False
            last = level
            items.append(("h", "#" * level + " " + html.unescape(re.sub(r"<[^>]+>", "", m.group(2)))))
            continue
        m = re.fullmatch(r"<li>(.*)</li>", s)
        if m:
            items.append(("li", _inline(m.group(1))))
        elif s.startswith("<a "):
            items.append(("a", _inline(s)))
        else:
            items.append(("text", _inline(s)))
    out, i = [], 0
    while i < len(items):
        kind, text = items[i]
        if kind in ("blank", "ulend", "h"):
            out.append("" if kind == "ulend" else text)
            i += 1
            continue
        j = i
        while j < len(items) and items[j][0] in ("li", "a", "text"):
            j += 1
        run = items[i:j]
        after_ul = i > 0 and items[i - 1][0] == "ulend"
        for k, t in run:
            if len(run) == 1 and k == "a" and after_ul:
                out.append(t)  # a lone link right after a list is a paragraph, not another item
            elif len(run) > 1 or k in ("li", "a"):
                t = re.sub(r"^-(?=\S)", "", t)  # bare "-Item" outline markers
                out.append("- " + t)
            else:
                out.append(t)
        i = j
    md = "\n".join(out)
    md = re.sub(r"\n(#{2,6} )", r"\n\n\1", md)
    md = re.sub(r"(#{2,6} [^\n]*)\n(?!\n)", r"\1\n\n", md)
    md = re.sub(r"(\n- [^\n]*)\n(?![-\n])", r"\1\n\n", md)  # blank line after a bullet run
    return re.sub(r"\n{3,}", "\n\n", md).strip("\n") + "\n"

if __name__ == "__main__":
    print(convert(sys.stdin.read()), end="")
