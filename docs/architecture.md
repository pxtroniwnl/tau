# Arquitectura

Monorepo con dos aplicaciones y un contrato entre ellas.

```
data/black_holes.json (a mano, con fuentes)
        │
backend/ (Python = fuente de verdad de la física)
  physics ← catalog ← pipeline ──► frontend/public/data/* (JSON, LUT, stars.bin; estáticos en la CDN)
                    ← api (FastAPI) ──► frontend/src/api/openapi.json ──► tipos TS
                      pipeline ──► data/golden/golden.json ──► tests del espejo TS
frontend/ (Next.js + React Three Fiber)
  physics (espejo) ← sim ← scene ← ui ← app
```

Las dependencias solo apuntan hacia adentro, y CI lo hace cumplir:
- Backend: `import-linter` (contratos en `backend/pyproject.toml`).
- Frontend: ESLint `no-restricted-imports` (en `frontend/eslint.config.mjs`).

Decisiones: [ADR-0001](adr/0001-layered-architecture.md) y [ADR-0002](adr/0002-python-source-of-truth-precompute.md).

## Artefactos generados
Todo lo que produce `backend` (`openapi.json`, `golden.json`, los datos de `frontend/public/data/` y `paper/`) **se versiona**. CI lo regenera y exige `git diff --exit-code`. Así:
- Vercel no necesita Python para construir el frontend.
- El paper es reproducible commit a commit.
