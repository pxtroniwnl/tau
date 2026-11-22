"""Traceability check (REGLA #1): every `@trace T-xx` tag in the code must have a
row in docs/traceability.md, and every row marked `implemented` must be tagged
somewhere in the code. Run: `uv run python -m tau.tools.check_trace`."""

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[4]
DOC = REPO / "docs" / "traceability.md"
SKIP_DIRS = {".git", "node_modules", ".venv", ".next", "dist", "build", "__pycache__", "docs"}
CODE_SUFFIXES = {".py", ".ts", ".tsx", ".glsl", ".frag", ".vert", ".css"}
TAG = re.compile(r"@trace\s+(T-\d{2,})")
ROW = re.compile(r"^\|\s*(T-\d{2,})\s*\|.*\|\s*(planned|implemented)\s*\|\s*$")


def doc_rows(text: str) -> dict[str, str]:
    """Map trace ID -> status from the markdown table."""
    return {m[1]: m[2] for line in text.splitlines() if (m := ROW.match(line.strip()))}


def code_tags(root: Path) -> dict[str, set[str]]:
    """Map trace ID -> files that tag it."""
    tags: dict[str, set[str]] = {}
    for path in root.rglob("*"):
        if path.suffix not in CODE_SUFFIXES or SKIP_DIRS & set(path.relative_to(root).parts):
            continue
        for trace_id in TAG.findall(path.read_text(encoding="utf-8", errors="ignore")):
            tags.setdefault(trace_id, set()).add(str(path.relative_to(root)))
    return tags


def problems(rows: dict[str, str], tags: dict[str, set[str]]) -> list[str]:
    out = [
        f"{t} tagged in {sorted(tags[t])} but missing from traceability.md"
        for t in tags
        if t not in rows
    ]
    out += [
        f"{t} marked implemented but not tagged in code"
        for t, s in rows.items()
        if s == "implemented" and t not in tags
    ]
    return sorted(out)


def main() -> int:
    errors = problems(doc_rows(DOC.read_text(encoding="utf-8")), code_tags(REPO))
    for error in errors:
        print(f"TRACE ERROR: {error}", file=sys.stderr)
    print(f"check_trace: {len(errors)} problem(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
