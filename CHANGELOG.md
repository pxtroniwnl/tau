# Changelog

All notable changes to this project are recorded here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [Unreleased]

### Fixed
- Frontend lint broken on `main` by TypeScript 7 (unsupported by typescript-eslint): pinned TypeScript to ~6.0 and told Dependabot to skip TS ≥ 6.1.

### Added
- Monorepo scaffold: `backend/` (uv, FastAPI `GET /health`, ruff, mypy, pytest, import-linter layer contracts) and `frontend/` (Next.js, React Three Fiber persistent canvas, design tokens from the logo, layer lint rules, WCAG AA contrast test).
- Traceability registry (`docs/traceability.md`, T-01…T-22 planned) and `check_trace` CI check.
- Architecture docs and ADR-0001 (layers) and ADR-0002 (Python as source of truth, precomputation).
- CI jobs: backend, frontend, contract, trace and changelog. GitHub issue/PR templates and Dependabot.
- `AGENTS.md` with the documentation duty and repo conventions.

### Changed
- All documentation, templates and UI text are now in English.
