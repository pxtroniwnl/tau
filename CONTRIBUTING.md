# Cómo contribuir

## Reglas de oro
1. **Trazabilidad:** todo lo que represente física sale de una ecuación o de un dato con fuente, y se registra en `docs/traceability.md` con su `@trace T-xx` en el código. Antes de agregar un efecto visual, pregúntate qué ecuación lo produce. Si la respuesta es "ninguna", no va.
2. **Python es la fuente de verdad:** cualquier fórmula nueva se implementa primero en `backend/src/tau/physics/`, con docstring que cite la ecuación y la referencia, y con tests. El espejo TS se valida contra `golden.json`.
3. **Las capas no se cruzan** (ver `docs/adr/0001`). CI lo verifica.
4. **Datos:** sin números de memoria. Cada valor lleva DOI/arXiv. `data/raw/` nunca se modifica.

## Flujo
- Ramas `feat/…`, `fix/…`, `docs/…` o `chore/…` desde `main`, con PR y CI en verde, y squash merge.
- Commits con [Conventional Commits](https://www.conventionalcommits.org/): `feat(physics): add hyperbolic travel`.
- Código, commits y docstrings en inglés; documentación del proyecto en español.

## Checks locales (los mismos de CI)
```bash
cd backend
uv run ruff check && uv run ruff format --check
uv run mypy && uv run lint-imports && uv run pytest
uv run python -m tau.tools.check_trace
uv run python -m tau.api.openapi && git diff --exit-code   # contrato al día

cd ../frontend
npm run lint && npm run format:check && npm run typecheck && npm test && npm run build
```
