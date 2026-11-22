# Architecture

A monorepo with two applications and a contract between them.

```
data/black_holes.json (hand-curated, with sources)
        │
backend/ (Python = source of truth for the physics)
  physics ← catalog ← pipeline ──► frontend/public/data/* (JSON, LUTs, stars.bin; static on the CDN)
                    ← api (FastAPI) ──► frontend/src/api/openapi.json ──► TS types
                      pipeline ──► data/golden/golden.json ──► TS mirror tests
frontend/ (Next.js + React Three Fiber)
  physics (mirror) ← sim ← scene ← ui ← app
```

Dependencies only point inward, and CI enforces it:
- Backend: `import-linter` (contracts in `backend/pyproject.toml`).
- Frontend: ESLint `no-restricted-imports` (in `frontend/eslint.config.mjs`).

Decisions: [ADR-0001](adr/0001-layered-architecture.md) and [ADR-0002](adr/0002-python-source-of-truth-precompute.md). Any architecture change needs a new ADR and an update to this file (see [AGENTS.md](../AGENTS.md)).

## Generated artifacts
Everything `backend` produces (`openapi.json`, `golden.json`, the data in `frontend/public/data/` and `paper/`) **is committed**. CI regenerates it and requires `git diff --exit-code`. As a result:
- Vercel does not need Python to build the frontend.
- The paper is reproducible commit by commit.
