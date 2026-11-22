# Física de Tau: ecuaciones y supuestos

Documento base para el paper. Cada sección enlaza a su fila en [traceability.md](traceability.md) y a la función que la implementa en `backend/src/tau/physics/`, que es la fuente de verdad.

## Convenciones
- Unidades SI en todo el motor. Constantes de CODATA 2022 y valores nominales de la IAU 2015 (Resolución B3).
- Año luz = c × año juliano (365.25 d).
- Los nombres llevan la unidad: `r_m`, `mass_kg`, `tau_s`.
- v1 usa la métrica de **Schwarzschild** (sin rotación). Kerr queda fuera de alcance.

## Supuestos declarados en la app
- La nave es hipotética: los tiempos son exactos para el perfil de aceleración elegido, pero ninguna tecnología conocida tiene ese combustible.
- El disco es un modelo físico (Novikov–Thorne), no una foto.
- Masas, distancias y spins tienen incertidumbre, y muchos spins no están medidos.
- La animación acelera el tiempo (con el factor visible en pantalla) y aplica tone mapping como exposición de cámara.

## 1. Viaje con aceleración propia constante (T-03, T-04)
_Pendiente (F1)._

## 2. Cielo visto desde la nave (T-05 – T-07)
_Pendiente (F1)._ Nota de diseño: I_ν/ν³ es invariante, así que la intensidad específica escala ×D³ y la bolométrica ×D⁴. Para una **estrella puntual** el ángulo sólido se comprime como dΩ' = dΩ/D², y el flujo bolométrico observado escala ×D². Se derivará y se testeará en F1.

## 3. Estadía cerca del agujero negro (T-11 – T-15, T-17)
_Pendiente (F1)._

## 4. Mareas (T-16)
_Pendiente (F1)._

## 5. Render: geodésicas nulas, disco y exposición (T-09, T-10, T-20)
_Pendiente (F4)._

## 6. Incertidumbre (T-18)
_Pendiente (F3)._
