# FireGuard Autonomous

AI-assisted wildfire fuel-management platform.

## Mission

FireGuard is a modular platform for inspecting properties, identifying vegetation/fuel-management needs, planning maintenance missions, coordinating simulated robot fleets, and verifying completed work.

## Current phase

**Phase 0: software and simulation only.** No physical robot or aircraft control is part of the MVP.

## Architecture principles

- Modular services with explicit contracts.
- AI recommends; deterministic systems validate.
- Safety and authorization are separate from AI reasoning.
- Simulated robots use adapters so future hardware can replace simulation without rewriting fleet logic.
- Every change is tested and reviewed through pull requests.

## Repository map

- `apps/` — applications and API entry points.
- `services/` — domain services.
- `ai/` — AI/ML capabilities.
- `robotics/` — simulation and robot adapters.
- `safety/` — authorization and safety boundaries.
- `packages/` — shared contracts and libraries.
- `docs/` — architecture, decisions, and agent operating rules.

## Development workflow

1. Read `AGENTS.md`.
2. Read the relevant module contract.
3. Create a focused branch.
4. Implement the smallest useful change.
5. Add tests.
6. Run checks.
7. Open a pull request.
8. QA reviews behavior.
9. Architecture reviews cross-module impact.
10. Merge only after required checks pass.

## Safety boundary

LLMs must never directly issue unrestricted motor commands. Real-world deployment would require additional engineering, testing, regulatory review, and human safety oversight beyond this prototype.
