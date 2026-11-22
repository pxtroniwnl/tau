# Registro de trazabilidad

**REGLA #1:** ningún elemento físico de la escena se publica si no está en esta tabla.

- Cada fila corresponde a algo que ve u oye el usuario y que representa física.
- En el código, el lugar que lo produce se marca con `@trace T-xx` (en TS, Python o GLSL).
- `uv run python -m tau.tools.check_trace` (en `backend/`) corre en CI y falla si:
  - un `@trace` del código no tiene fila aquí, o
  - una fila `implemented` no tiene ningún `@trace` en el código.
- Lo decorativo (transiciones, micro-interacciones) no va aquí, porque no representa física.

Convención de módulos: `X` es `backend/src/tau/physics/X.py`, que es la fuente de verdad. Si además corre por frame, tiene un espejo en `frontend/src/physics/X.ts`, verificado contra `data/golden/golden.json`.

| ID | En pantalla | Ecuación / dato | Módulo · función | Referencia | Estado |
|---|---|---|---|---|---|
| T-01 | Masa ± error, distancia, fuente | catálogo | `data/black_holes.json` · `catalog` | fuente primaria por objeto | planned |
| T-02 | Posición 3D en el mapa | (RA, Dec, d) → cartesianas ICRS | `coords · equatorial_to_cartesian` | IAU/ICRS | planned |
| T-03 | Relojes del viajero y de la Tierra (viaje) | τ = (2c/a)·acosh(1 + a·d/2c²); t = (2c/a)·sinh(a·τ/2c) | `travel` (+TS) | Rindler 2006, movimiento hiperbólico | planned |
| T-04 | Velocidad, γ, distancia restante, volteo | β(τ) = tanh(a·τ/c) por mitades | `travel · state_at_proper_time` (+TS) | Rindler 2006 | planned |
| T-05 | Concentración del cielo hacia adelante | cos θ' = (cos θ + β)/(1 + β cos θ) | `sky · aberrate` (+TS, +GLSL) | Rybicki & Lightman 1979, §4 | planned |
| T-06 | Color de cada estrella en vuelo | D = 1/[γ(1 − β cos θ)]; T_obs = D·T_eff | `sky` + LUT de `blackbody` | R&L 1979; CIE 1931; IEC 61966-2-1 | planned |
| T-07 | Brillo de cada estrella en vuelo | I_ν/ν³ invariante: intensidad específica ×D³, bolométrica ×D⁴; estrella puntual: flujo ×D² | `sky · point_flux_factor` (+TS) | R&L 1979; McKinley & Doherty 1979 | planned |
| T-08 | Cielo de fondo real | Hipparcos vía HYG (posición, mag, B−V) | `pipeline/stars` → `stars.bin` | ESA 1997; HYG v4 | planned |
| T-09 | Sombra y lente | geodésicas nulas de Schwarzschild; b_c = (3√3/2)·rs | `geodesic` + `blackhole.frag` | Synge 1966; Luminet 1979 | planned |
| T-10 | Color y brillo del disco | Novikov–Thorne T(r); g = Doppler·gravitacional; I_obs = g³·I_ν | `disk` (LUT) + shader | Novikov & Thorne 1973; Page & Thorne 1974 | planned |
| T-11 | Relojes en estadía estática | dτ/dt = √(1 − rs/r) | `stay` (+TS) | Hartle 2003, cap. 9 | planned |
| T-12 | Relojes en órbita + periodo | dτ/dt = √(1 − 3rs/2r); T = 2π·√(r³/GM) | `stay` (+TS) | Hartle 2003 | planned |
| T-13 | ISCO (3 rs) y esfera de fotones (1.5 rs) como anotación + alerta | estabilidad orbital | `stay · orbit_stability` (+TS) | Hartle 2003 | planned |
| T-14 | Trayectoria y reloj en caída libre | τ radial hasta el horizonte | `stay · free_fall_proper_time` (+TS) | MTW 1973, §31 | planned |
| T-15 | Empuje para sostenerse | a = GM/(r²·√(1 − rs/r)) | `stay` (+TS) | Hartle 2003 | planned |
| T-16 | Mareas + umbral | Δa = 2GM·L/r³, L = 2 m | `tides` (+TS) | MTW 1973; umbral por definir con fuente | planned |
| T-17 | Corrimiento al azul del cielo (estático) | 1/√(1 − rs/r) | `stay` (+TS) | Hartle 2003 | planned |
| T-18 | Intervalos de incertidumbre | Monte Carlo sobre masa y distancia (semilla fija) | `uncertainty` → JSON precalculado / `POST /uncertainty` | errores del catálogo | planned |
| T-19 | Factor de aceleración temporal | Δt_anim/Δt_real (no altera proporciones) | `frontend/src/sim/timescale.ts` | convención mostrada en pantalla | planned |
| T-20 | Exposición | tone mapping tipo cámara (por definir) | `scene/tonemap` | docs/physics.md | planned |
| T-21 | Tic de los relojes (audio) | ritmo ∝ dτ/dt real | `ui/audio.ts` | T-03 / T-11 / T-12 | planned |
| T-22 | Fecha en la Tierra al volver | fecha de salida + t total | `sim/mission.ts` | T-03 + T-11 / T-12 | planned |
