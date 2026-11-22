# Data sources

| Dataset | Use | Source | License |
|---|---|---|---|
| `data/black_holes.json` | Black hole catalog (T-01, T-02) | Primary source (DOI/arXiv) for every value; filled in Phase 3 | CC BY 4.0 |
| Background stars | Real sky (T-08) | Hipparcos (ESA 1997) via HYG v4 | CC BY-SA 4.0 (derivatives inherit the license) |

Rules:
- `data/raw/` is gitignored. It is downloaded by a script that verifies a checksum and is **never modified**.
- No numbers from memory: every value carries its reference. Unknown values are `null`, and the app shows them as unknown.
