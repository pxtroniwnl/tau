# Traceability registry

**RULE #1:** no physical element of the scene ships unless it has a row in this table.

- Each row is something the user sees or hears that represents physics.
- In the code, the place that produces it is tagged `@trace T-xx` (in TS, Python or GLSL).
- `uv run python -m tau.tools.check_trace` (in `backend/`) runs in CI and fails if:
  - a `@trace` tag in the code has no row here, or
  - an `implemented` row has no `@trace` tag anywhere in the code.
- Decorative UI (transitions, micro-interactions) does not belong here, because it does not represent physics.

Module convention: `X` is `backend/src/tau/physics/X.py`, the source of truth. If it also runs per frame, it has a mirror in `frontend/src/physics/X.ts`, verified against `data/golden/golden.json`.

| ID | On screen | Equation / data | Module · function | Reference | Status |
|---|---|---|---|---|---|
| T-01 | Mass ± error, distance, source | catalog | `data/black_holes.json` · `catalog` | primary source per object | planned |
| T-02 | 3D position on the map | (RA, Dec, d) → ICRS Cartesian | `coords · equatorial_to_cartesian` | IAU/ICRS | planned |
| T-03 | Traveler and Earth clocks (trip) | τ = (2c/a)·acosh(1 + a·d/2c²); t = (2c/a)·sinh(a·τ/2c) | `travel` (+TS) | Rindler 2006, hyperbolic motion | planned |
| T-04 | Speed, γ, remaining distance, flip | β(τ) = tanh(a·τ/c) per half | `travel · state_at_proper_time` (+TS) | Rindler 2006 | planned |
| T-05 | Sky concentrating forward | cos θ' = (cos θ + β)/(1 + β cos θ) | `sky · aberrate` (+TS, +GLSL) | Rybicki & Lightman 1979, §4 | planned |
| T-06 | Color of each star in flight | D = 1/[γ(1 − β cos θ)]; T_obs = D·T_eff | `sky` + `blackbody` LUT | R&L 1979; CIE 1931; IEC 61966-2-1 | planned |
| T-07 | Brightness of each star in flight | I_ν/ν³ invariant: specific intensity ×D³, bolometric ×D⁴; point star: flux ×D² | `sky · point_flux_factor` (+TS) | R&L 1979; McKinley & Doherty 1979 | planned |
| T-08 | Real background sky | Hipparcos via HYG (position, mag, B−V) | `pipeline/stars` → `stars.bin` | ESA 1997; HYG v4 | planned |
| T-09 | Shadow and lensing | Schwarzschild null geodesics; b_c = (3√3/2)·rs | `geodesic` + `blackhole.frag` | Synge 1966; Luminet 1979 | planned |
| T-10 | Disk color and brightness | Novikov–Thorne T(r); g = Doppler·gravitational; I_obs = g³·I_ν | `disk` (LUT) + shader | Novikov & Thorne 1973; Page & Thorne 1974 | planned |
| T-11 | Clocks while hovering (static) | dτ/dt = √(1 − rs/r) | `stay` (+TS) | Hartle 2003, ch. 9 | planned |
| T-12 | Clocks in orbit + period | dτ/dt = √(1 − 3rs/2r); T = 2π·√(r³/GM) | `stay` (+TS) | Hartle 2003 | planned |
| T-13 | ISCO (3 rs) and photon sphere (1.5 rs) as annotations + alert | orbital stability | `stay · orbit_stability` (+TS) | Hartle 2003 | planned |
| T-14 | Free-fall trajectory and clock | radial τ to the horizon | `stay · free_fall_proper_time` (+TS) | MTW 1973, §31 | planned |
| T-15 | Thrust needed to hover | a = GM/(r²·√(1 − rs/r)) | `stay` (+TS) | Hartle 2003 | planned |
| T-16 | Tides + threshold | Δa = 2GM·L/r³, L = 2 m | `tides` (+TS) | MTW 1973; threshold source TBD | planned |
| T-17 | Blueshift of the sky (static observer) | 1/√(1 − rs/r) | `stay` (+TS) | Hartle 2003 | planned |
| T-18 | Uncertainty intervals | Monte Carlo over mass and distance (fixed seed) | `uncertainty` → precomputed JSON / `POST /uncertainty` | catalog errors | planned |
| T-19 | Animation time-scale factor | Δt_anim/Δt_real (ratios between clocks unchanged) | `frontend/src/sim/timescale.ts` | convention shown on screen | planned |
| T-20 | Exposure | camera-like tone mapping (TBD) | `scene/tonemap` | docs/physics.md | planned |
| T-21 | Clock ticks (audio) | tick rate ∝ real dτ/dt | `ui/audio.ts` | T-03 / T-11 / T-12 | planned |
| T-22 | Date on Earth when you return | departure date + total t | `sim/mission.ts` | T-03 + T-11 / T-12 | planned |
