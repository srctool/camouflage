#!/usr/bin/env python3
"""Generate the Components reference of the usage docs from the library sources.

Reads the public Dart widgets (dart-lib) and Kotlin composables (kotlin-lib), their doc comments and
parameters, and writes one page per component into docs/usage/docs/components/. Hand-written
examples live in scripts/examples/<component>.{kotlin,dart}; a component without one gets the
signature and the properties only.

    python3 scripts/gen_components.py

Run it from docs/usage after the libraries change; the pages are generated, so edit the sources
(doc comments) or the examples, not the pages.
"""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]  # the umbrella repository
USAGE = ROOT / "docs" / "usage"
OUT = USAGE / "docs" / "components"
EXAMPLES = Path(__file__).resolve().parent / "examples"
DART = ROOT / "dart-lib" / "packages"
KOTLIN = ROOT / "kotlin-lib"
INTERNAL = ROOT / "docs" / "internal" / "development" / "components"

CATEGORIES = {
    "01-primitives": ("Primitives", "Text, icons, surfaces and dividers: the pieces everything else is built from."),
    "02-actions": ("Actions", "Buttons and the controls that start something."),
    "03-inputs": ("Inputs and forms", "Fields, choices, pickers and forms."),
    "04-containers-and-lists": ("Containers and lists", "Cards, list rows, paged lists and accordions."),
    "05-data-display": ("Data display", "Chips, badges, avatars, images, ratings, carousels, tables and trees."),
    "06-feedback": ("Feedback", "Progress, snackbars, banners, skeletons and step indicators."),
    "07-overlays": ("Overlays", "Dialogs, sheets, menus, tooltips and popovers."),
    "08-navigation": ("Navigation", "Top bars, tabs, navigation bars, rails and drawers, pagination and breadcrumbs."),
    "09-charts": ("Charts", "Line, bar, pie and sparkline charts, without a chart library."),
}

# ---------------------------------------------------------------------------------------------------------
# Source indexes


def read_all(globs: list[Path]) -> dict[Path, str]:
    return {p: p.read_text(encoding="utf-8") for p in globs}


def dart_files() -> dict[Path, str]:
    files = [p for p in DART.glob("*/lib/**/*.dart") if p.parts[len(DART.parts)] in ("camouflage_core", "camouflage_charts")]
    return read_all(files)


def kotlin_files() -> dict[Path, str]:
    files = []
    for module in ("camouflage-core", "camouflage-charts"):
        files += list((KOTLIN / module / "src" / "commonMain").rglob("*.kt"))
    return read_all(files)


def split_top_level(text: str) -> list[str]:
    """Splits on commas that are not nested in (), [], {} or <>."""
    parts, depth, cur, i = [], 0, [], 0
    while i < len(text):
        c = text[i]
        if c == "-" and text[i : i + 2] == "->":
            cur.append("->")
            i += 2
            continue
        if c in "([{<":
            depth += 1
        elif c in ")]}>":
            depth -= 1
        if c == "," and depth == 0:
            parts.append("".join(cur).strip())
            cur = []
        else:
            cur.append(c)
        i += 1
    tail = "".join(cur).strip()
    if tail:
        parts.append(tail)
    return parts


def balanced(text: str, start: int, open_c: str, close_c: str) -> int:
    """Index of the bracket that closes the one at [start]."""
    depth = 0
    for i in range(start, len(text)):
        if text[i] == open_c:
            depth += 1
        elif text[i] == close_c:
            depth -= 1
            if depth == 0:
                return i
    return -1


def mdx_safe(text: str) -> str:
    """Escapes what MDX would read as JSX or an expression, outside code spans."""
    out, in_code = [], False
    for ch in text:
        if ch == "`":
            in_code = not in_code
            out.append(ch)
        elif not in_code and ch in "{}<>":
            out.append({"{": "&#123;", "}": "&#125;", "<": "&lt;", ">": "&gt;"}[ch])
        else:
            out.append(ch)
    return "".join(out)


def prose(lines: list[str]) -> str:
    text = "\n".join(lines).strip()
    text = re.sub(r"\[([A-Za-z_][\w.]*)\]", r"`\1`", text)
    return mdx_safe(text)


# ---------------------------------------------------------------------------------------------------------
# Dart


class Prop:
    def __init__(self, name: str, type_: str, default: str, required: bool, doc: str):
        self.name, self.type, self.default, self.required, self.doc = name, type_, default, required, doc


def dart_component(name: str, files: dict[Path, str]):
    pat = re.compile(rf"^class {name}(?:<[^>]*>)? extends \w*Widget\s*\{{", re.M)
    for path, src in files.items():
        m = pat.search(src)
        if not m:
            continue
        # class doc: the /// lines (and annotations) right above
        before = src[: m.start()].rstrip("\n").split("\n")
        doc: list[str] = []
        while before and (before[-1].startswith("///") or before[-1].startswith("@")):
            line = before.pop()
            if line.startswith("///"):
                doc.insert(0, line[3:].strip())
        body_start = m.end() - 1
        body_end = balanced(src, body_start, "{", "}")
        body = src[body_start + 1 : body_end]
        # fields: doc lines then `final Type name;`
        fields: dict[str, tuple[str, str]] = {}
        pending: list[str] = []
        for line in body.split("\n"):
            s = line.strip()
            if s.startswith("///"):
                pending.append(s[3:].strip())
                continue
            fm = re.match(r"final\s+(.+?)\s+(\w+);$", s)
            if fm:
                fields[fm.group(2)] = (fm.group(1), prose(pending))
            if s and not s.startswith("///"):
                pending = []
        # constructor
        cm = re.search(rf"(?:const )?{name}\(\{{", body)
        props: list[Prop] = []
        if cm:
            open_i = body.index("(", cm.start())
            close_i = balanced(body, open_i, "(", ")")
            inner = body[open_i + 2 : close_i].rsplit("}", 1)[0]  # skip "({"
            for item in split_top_level(inner):
                item = re.sub(r"//.*", "", item).strip()
                if not item or item == "super.key":
                    continue
                required = item.startswith("required ")
                item = item.removeprefix("required ").strip()
                default = ""
                if "=" in item:
                    item, default = (x.strip() for x in item.split("=", 1))
                pname = item.removeprefix("this.").removeprefix("super.")
                typ, pdoc = fields.get(pname, ("", ""))
                props.append(Prop(pname, typ, default, required, pdoc))
        return path, prose(doc), props
    return None


# ---------------------------------------------------------------------------------------------------------
# Kotlin


def kotlin_component(name: str, files: dict[Path, str]):
    pat = re.compile(rf"^public (?:inline )?fun (?:<[^>]*> )?{name}\(", re.M)
    for path, src in files.items():
        m = pat.search(src)
        if not m:
            continue
        before = src[: m.start()].rstrip("\n").split("\n")
        while before and before[-1].startswith("@"):
            before.pop()
        doc: list[str] = []
        if before and before[-1].strip() == "*/":
            before.pop()
            while before and not before[-1].strip().startswith("/**"):
                doc.insert(0, re.sub(r"^\s*\*\s?", "", before.pop()))
        open_i = m.end() - 1
        close_i = balanced(src, open_i, "(", ")")
        raw = src[open_i + 1 : close_i]
        props: list[Prop] = []
        for item in split_top_level(raw):
            item = re.sub(r"//.*", "", item).strip()
            if not item:
                continue
            default = ""
            if " = " in item:
                item, default = (x.strip() for x in item.split(" = ", 1))
            pname, _, typ = item.partition(":")
            props.append(Prop(pname.strip(), typ.strip(), default, not default and not typ.strip().endswith("?"), ""))
        sig = src[m.start() : close_i + 1]
        return path, prose(doc), props, sig
    return None


# ---------------------------------------------------------------------------------------------------------
# Pages


def code_cell(text: str) -> str:
    return "`" + text.replace("|", "\\|").replace("`", "'") + "`" if text else ""


def table(props: list[Prop], dart: bool) -> str:
    rows = [p for p in props]
    if not rows:
        return "_No parameters._\n"
    head = "| Name | Type | Default | Description |\n|---|---|---|---|\n" if dart else "| Name | Type | Default |\n|---|---|---|\n"
    out = head
    for p in rows:
        default = "required" if (p.required and not p.default and dart) else p.default
        if dart:
            desc = p.doc.replace("\n", " ").replace("|", "\\|")
            out += f"| `{p.name}` | {code_cell(p.type)} | {code_cell(default)} | {desc} |\n"
        else:
            out += f"| `{p.name}` | {code_cell(p.type)} | {code_cell(p.default or ('required' if p.required else ''))} |\n"
    return out


def first_sentence(text: str) -> str:
    text = re.sub(r"\s+", " ", text.replace("`", "")).strip()
    m = re.match(r"(.+?[.!?])(\s|$)", text)
    return (m.group(1) if m else text)[:200]


def example(name: str, ext: str) -> str:
    f = EXAMPLES / f"{name}.{ext}"
    return f.read_text(encoding="utf-8").rstrip() + "\n" if f.exists() else ""


def snake(name: str) -> str:
    return re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()


# Pages whose entry points are not named after the page.
ALIASES = {
    "CamoDatePicker": ["CamoDateField", "CamoDateRangeField"],
    "CamoTimePicker": ["CamoTimeField"],
    "CamoProgress": ["CamoProgressBar", "CamoProgressCircle"],
    "CamoMenu": ["CamoMenuAnchor"],
}


def symbols_for(name: str, dfiles, kfiles):
    """[(symbol, dart, kotlin)] for a page; one entry unless the page has aliases."""
    names = ALIASES.get(name, [name])
    found = []
    for sym in names:
        d, k = dart_component(sym, dfiles), kotlin_component(sym, kfiles)
        if d or k:
            found.append((sym, d, k))
    return found


def build() -> None:
    dfiles, kfiles = dart_files(), kotlin_files()
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    missing: list[str] = []
    counts = {"pages": 0, "examples": 0}

    (OUT / "_category_.json").write_text(
        '{\n  "label": "Components",\n  "position": 5,\n  "link": {"type": "doc", "id": "components/index"}\n}\n', encoding="utf-8"
    )
    (OUT / "index.mdx").write_text(
        "---\ntitle: Components\nsidebar_label: Overview\nslug: /components\n---\n\n"
        "# Components\n\n"
        "Every component takes its look from the active **skin** and **theme**: you choose what it *is* "
        "(an `appearance`, a `tone`, a size) and never a color. Switch the language above to see Kotlin or Dart.\n\n"
        + "\n".join(
            f"- **[{title}](/docs/components/{key.split('-', 1)[1]})**: {blurb}" for key, (title, blurb) in CATEGORIES.items()
        )
        + "\n\n## Conventions\n\n"
        "- **`appearance`** is the visual weight: `solid`, `soft`, `raised`, `outline`, `ghost`, `link`. `null` uses the theme's default.\n"
        "- **`tone`** is the color family: `default`, `error`, `success`, `warning`, `info`.\n"
        "- **Disabled** is `enabled = false` (Kotlin) or a `null` callback (Dart).\n"
        "- Every control needs a **name** for screen readers: a visible label, or an `onClickLabel`/`semanticLabel` for icon-only controls. "
        "A missing name fails in debug builds.\n"
        "- Touch targets are at least 48 dp; text scales with the system font size; layouts mirror in right-to-left.\n",
        encoding="utf-8",
    )

    for cat_dir, (title, blurb) in CATEGORIES.items():
        slug = cat_dir.split("-", 1)[1]
        cdir = OUT / cat_dir
        cdir.mkdir()
        (cdir / "_category_.json").write_text(
            '{\n  "label": "%s",\n  "link": {"type": "generated-index", "title": "%s", "description": "%s", "slug": "/components/%s"}\n}\n'
            % (title, title, blurb, slug),
            encoding="utf-8",
        )
        names = sorted(
            re.sub(r"^\d+-", "", p.stem)
            for p in (INTERNAL / cat_dir).glob("*.mdx")
            if not p.stem.startswith("index")
        )
        order = [re.sub(r"^\d+-", "", p.stem) for p in sorted((INTERNAL / cat_dir).glob("*.mdx")) if not p.stem.startswith("index")]
        for pos, page_slug in enumerate(order, start=1):
            if not page_slug.startswith("camo-"):
                continue  # overview pages of the design notes (chart-frame, overlays)
            name = "".join(w.capitalize() for w in page_slug.split("-"))  # camo-text-field -> CamoTextField
            syms = symbols_for(name, dfiles, kfiles)
            ex_k, ex_d = example(page_slug, "kotlin"), example(page_slug, "dart")
            intro = EXAMPLES / f"{page_slug}.md"
            if not syms and not (ex_k or ex_d or intro.exists()):
                missing.append(name)
                continue
            first_d, first_k = (syms[0][1], syms[0][2]) if syms else (None, None)
            label = name.removeprefix("Camo")
            text = (first_k[1] if first_k else "") or (first_d[1] if first_d else "")
            if intro.exists():
                text = intro.read_text(encoding="utf-8").strip()
            desc = first_sentence(text)
            parts = [
                f"---\ntitle: {name}\nsidebar_label: {label}\nsidebar_position: {pos}\ndescription: {json.dumps(desc)}\n---\n",
                f"# {name}\n",
                text + "\n",
            ]
            if ex_k or ex_d:
                counts["examples"] += 1
                parts.append("## Usage\n")
                parts.append("<LangTabs>\n")
                parts.append("<TabItem value=\"kotlin\">\n\n```kotlin\n" + (ex_k or "// see the signature below\n") + "```\n\n</TabItem>\n")
                parts.append("<TabItem value=\"dart\">\n\n```dart\n" + (ex_d or "// see the properties below\n") + "```\n\n</TabItem>\n")
                parts.append("</LangTabs>\n")
            for sym, d, k in syms:
                parts.append(f"## API: {sym}\n" if len(syms) > 1 else "## API\n")
                parts.append("<LangTabs>\n")
                kt = "<TabItem value=\"kotlin\">\n\n"
                kt += (f"```kotlin\n{k[3]}\n```\n\n" + table(k[2], dart=False) + "\n") if k else "_Not available in Kotlin._\n\n"
                parts.append(kt + "</TabItem>\n")
                dt = "<TabItem value=\"dart\">\n\n"
                dt += (table(d[2], dart=True) + "\n") if d else "_Not available in Dart._\n\n"
                parts.append(dt + "</TabItem>\n")
                parts.append("</LangTabs>\n")
            parts.append(f"\n:::tip Design notes\nWhy {name} works this way, its states and its edge cases: [contributor docs](https://camouflage-dev.srctool.com/components/{cat_dir.split('-', 1)[1]}/{page_slug}).\n:::\n")
            (cdir / f"{pos:02d}-{page_slug}.mdx").write_text("\n".join(parts), encoding="utf-8")
            counts["pages"] += 1
    print(f"wrote {counts['pages']} component pages, {counts['examples']} with examples")
    if missing:
        print("no source found for:", ", ".join(missing))


if __name__ == "__main__":
    build()
