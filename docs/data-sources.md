# Fuentes de datos

| Dataset | Uso | Fuente | Licencia |
|---|---|---|---|
| `data/black_holes.json` | Catálogo de agujeros negros (T-01, T-02) | Fuente primaria (DOI/arXiv) por cada valor; se completa en F3 | CC BY 4.0 |
| Estrellas de fondo | Cielo real (T-08) | Hipparcos (ESA 1997) vía HYG v4 | CC BY-SA 4.0 (los derivados heredan la licencia) |

Reglas:
- `data/raw/` está gitignored. Se descarga con un script que verifica el checksum y **nunca se modifica**.
- No se usan números de memoria: cada valor lleva su referencia. Lo desconocido va como `null` y la app lo muestra como desconocido.
