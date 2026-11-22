# ADR-0002: Python como fuente de verdad y precálculo estático

- Estado: aceptada
- Fecha: 2026-11-22

## Contexto
- La animación necesita física a 60 fps en el navegador, y una llamada HTTP por frame no sirve.
- Un backend en serverless tiene arranque en frío.
- El paper necesita una única implementación de referencia.

## Decisión
1. **Python es la fuente de verdad.** El frontend lleva un espejo TS mínimo, solo de lo que corre por frame. Sus tests deben coincidir con `data/golden/golden.json`, que genera Python.
2. **El color de cuerpo negro y el perfil del disco** llegan al shader como texturas LUT generadas por Python, así que el shader no reimplementa esas fórmulas.
3. **Todo lo estándar se precalcula** en CI y se sirve como archivos estáticos desde la CDN. La API (FastAPI en Vercel) atiende solo parámetros personalizados, y si falla o tarda, la UI muestra el valor precalculado.

## Consecuencias
- Hay duplicación controlada entre Python y TS, pero verificada en cada CI.
- El arranque en frío nunca bloquea la experiencia.
- Los artefactos generados se versionan, así que el repo pesa algo más.
