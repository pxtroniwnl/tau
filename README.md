<p align="center"><img src="frontend/public/brand/tau.svg" width="120" alt="Tau"></p>

# Tau (τ)

τ is **proper time**: the time the traveler lives through. Tau is a 3D website where you pick a real black hole, travel to it, and see how much you age versus how much time passes on Earth. Everything it shows comes from an equation or from data with a source.

A project of an astronomy and data science research group, and the reproducible basis for a paper.

## Layout
| Folder | Contents |
|---|---|
| `backend/` | Python (uv): physics engine (source of truth), catalog, data pipeline and FastAPI API |
| `frontend/` | Next.js + React Three Fiber: the 3D experience |
| `data/` | `black_holes.json` (with sources), golden values; `raw/` is not committed |
| `docs/` | [physics.md](docs/physics.md), [traceability.md](docs/traceability.md), [architecture.md](docs/architecture.md), ADRs |
| `paper/` | Generated figures and tables |

## Development
```bash
# backend
cd backend && uv sync
uv run pytest
uv run uvicorn tau.api.app:app --reload

# frontend
cd frontend && npm ci
npm run dev
```

Rules and conventions for contributors (humans and AI agents) are in [AGENTS.md](AGENTS.md). Changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## License
- Code: MIT ([LICENSE](LICENSE)).
- Documentation and catalog: CC BY 4.0.
- Star data derived from HYG: CC BY-SA 4.0.
