# ADR-0001: Arquitectura en capas con dependencias hacia adentro

- Estado: aceptada
- Fecha: 2026-11-22

## Contexto
La regla de trazabilidad exige que cada número y cada efecto visual salgan de una ecuación con fuente. Si la física se mezcla con la UI o con el render, esa trazabilidad se pierde.

## Decisión
- **Backend:** `physics` (puro, numpy) ← `catalog` ← `pipeline` | `api` | `tools`. `physics` no importa frameworks web ni de I/O.
- **Frontend:** `physics` (espejo TS puro) ← `sim` ← `scene` ← `ui` ← `app`. `physics` no importa React, Next ni three.
- Se hace cumplir en CI con import-linter (Python) y ESLint `no-restricted-imports` (TS).

## Consecuencias
- La física se puede testear y citar de forma aislada.
- Hay más archivos, pero cada uno tiene un solo motivo para cambiar.
