<p align="center"><img src="frontend/public/brand/tau.svg" width="120" alt="Tau"></p>

# Tau (τ)

τ es el **tiempo propio**: el tiempo que vive el viajero. Tau es una web 3D en la que eliges un agujero negro real, viajas hasta él y ves cuánto envejeces tú y cuánto la Tierra. Todo lo que muestra sale de una ecuación o de un dato con fuente.

Proyecto del semillero de astronomía y ciencia de datos. Es la base reproducible de un paper.

## Estructura
| Carpeta | Qué hay |
|---|---|
| `backend/` | Python (uv): motor físico (fuente de verdad), catálogo, pipeline de datos y API FastAPI |
| `frontend/` | Next.js + React Three Fiber: la experiencia 3D |
| `data/` | `black_holes.json` (con fuentes), valores dorados; `raw/` no se versiona |
| `docs/` | [physics.md](docs/physics.md), [traceability.md](docs/traceability.md), [architecture.md](docs/architecture.md), ADRs |
| `paper/` | Figuras y tablas generadas |

## Desarrollo
```bash
# backend
cd backend && uv sync
uv run pytest
uv run uvicorn tau.api.app:app --reload

# frontend
cd frontend && npm ci
npm run dev
```

Checks completos (los mismos que corre CI): ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia
- Código: MIT ([LICENSE](LICENSE)).
- Documentación y catálogo: CC BY 4.0.
- Datos estelares derivados de HYG: CC BY-SA 4.0.
