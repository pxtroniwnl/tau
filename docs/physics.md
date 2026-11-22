# Tau physics: equations and assumptions

Base document for the paper. Each section links to its row in [traceability.md](traceability.md) and to the function that implements it in `backend/src/tau/physics/`, which is the source of truth.

## Conventions
- SI units throughout the engine. Constants from CODATA 2022 and IAU 2015 nominal values (Resolution B3).
- Light year = c × Julian year (365.25 d).
- Names carry their unit: `r_m`, `mass_kg`, `tau_s`.
- v1 uses the **Schwarzschild** metric (no rotation). Kerr is out of scope.

## Assumptions stated in the app
- The ship is hypothetical: times are exact for the chosen acceleration profile, but no known technology has the fuel for it.
- The disk is a physical model (Novikov–Thorne), not a photo.
- Masses, distances and spins are uncertain, and many spins are unmeasured.
- The animation speeds up time (the factor is shown on screen) and applies tone mapping as a camera exposure.

## 1. Travel at constant proper acceleration (T-03, T-04)
_Pending (Phase 1)._

## 2. The sky seen from the ship (T-05 – T-07)
_Pending (Phase 1)._ Design note: I_ν/ν³ is invariant, so specific intensity scales ×D³ and bolometric intensity ×D⁴. For a **point star** the solid angle compresses as dΩ' = dΩ/D², so the observed bolometric flux scales ×D². To be derived and tested in Phase 1.

## 3. Staying near the black hole (T-11 – T-15, T-17)
_Pending (Phase 1)._

## 4. Tides (T-16)
_Pending (Phase 1)._

## 5. Rendering: null geodesics, disk and exposure (T-09, T-10, T-20)
_Pending (Phase 4)._

## 6. Uncertainty (T-18)
_Pending (Phase 3)._
