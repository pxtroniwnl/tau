# ADR-0001: Layered architecture with inward-only dependencies

- Status: accepted
- Date: 2026-11-22

## Context
The traceability rule requires every number and every visual effect to come from an equation with a source. If physics gets mixed with UI or rendering code, that traceability is lost.

## Decision
- **Backend:** `physics` (pure, numpy) ← `catalog` ← `pipeline` | `api` | `tools`. `physics` must not import web or I/O frameworks.
- **Frontend:** `physics` (pure TS mirror) ← `sim` ← `scene` ← `ui` ← `app`. `physics` must not import React, Next or three.
- Enforced in CI with import-linter (Python) and ESLint `no-restricted-imports` (TS).

## Consequences
- Physics can be tested and cited in isolation.
- More files, but each one has a single reason to change.
