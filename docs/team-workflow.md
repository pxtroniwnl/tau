# Team workflow

How we split and track work. Repo rules and conventions live in [AGENTS.md](../AGENTS.md); this file covers *who does what, when*.

## Tools (all on GitHub)
- **Issues**: every piece of work is an issue created from the **Task** template.
- **Project "Tau roadmap"**: the board, with columns Backlog → Ready → In progress → In review → Done.
- **Milestones**: one per phase (`Phase 1 — Physics engine` … `Phase 6 — Polish & paper`).
- **Labels**: `area:*` (physics, data, api, frontend, 3d, docs, infra), `size:S/M/L`, `priority:high`, `good first issue`, `blocked`, `needs-research`.

## Roles
- **Lead**:
  - Owns the roadmap and priorities.
  - Writes or approves issues and moves them to *Ready*.
  - Reviews physics, data and architecture changes (CODEOWNERS requests the review automatically).
- **Contributors**: pick *Ready* issues, deliver PRs and review each other's work.

## Definition of Ready
An issue may move to **Ready** only when the Task template is complete:
- Context and goal.
- Scope, with an explicit out-of-scope list.
- Spec, including function signatures, units and equations with their reference frame.
- References.
- Files, trace IDs and acceptance criteria.
- Tests, dependencies and a size of L or smaller.

If you have to ask the lead a question to start, the issue was not Ready. Fix the issue so the next person doesn't have to ask.

## Lifecycle
1. **Pick:** assign yourself to a *Ready* issue and move it to *In progress*. Keep **one issue in progress per person**.
2. **Branch:** `type/<issue#>-short-slug`, e.g. `feat/12-hyperbolic-travel`.
3. **Work:** small Conventional Commits. Ask questions as comments on the issue, not in private chats, so the answers stay with the work.
4. **Blocked for more than half a day?** Add the `blocked` label, comment what you need, and ping the lead.
5. **PR:** use the template, add `Closes #<issue>`, and move the issue to *In review*.
6. **Review:**
   - 1 approval is required. Physics and data PRs need the lead; the lead's PRs need a contributor.
   - Reviewers check the acceptance criteria one by one.
7. **Merge:** squash only. The branch is deleted automatically and the issue closes and moves to *Done*.

## Cadence (small team)
- **Weekly planning (30 min):** the lead fills *Ready* with the week's issues and each person picks one.
- **Async daily update:** one comment on your issue covering done, next and blockers.
- **End of phase:** a demo of what works, plus a 15-minute retro (keep / change / try) recorded in the milestone description.

## Writing a good issue
- **One outcome per issue.** If the title needs "and", split it.
- **Explicit spec:** exact function names and signatures, SI units, and the reference frame of every angle and time.
- **No numbers from memory:** reference values must come with a citation. If a source still has to be found, add `needs-research` and make finding it part of the acceptance criteria.
- **Acceptance criteria a reviewer can tick objectively** ("test X passes", "row T-03 is `implemented`"), not "works well".
- **Name the files**, so newcomers know where to look.
