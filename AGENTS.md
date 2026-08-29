# FireGuard Agent Operating Rules

## Purpose

This repository is designed for parallel AI-assisted development. Agents are workers, not autonomous project owners.

## Non-negotiable rules

1. Read `docs/architecture/system.md`, `docs/architecture/module-boundaries.md`, and `docs/agents/agent-registry.md` before coding.
2. Work only within the assigned module unless the Architect approves a cross-module change.
3. Never commit secrets, credentials, private keys, tokens, or customer data.
4. Never bypass tests to make CI green.
5. Never remove a safety check to make a simulation or integration pass.
6. Never connect an LLM directly to physical motor/actuator commands.
7. Never introduce an undocumented public interface.
8. Never merge your own pull request.
9. Keep changes small and reviewable.
10. Document architectural decisions that affect module boundaries or contracts.

## Branch naming

Use one of:

- `feat/<module>-<short-description>`
- `fix/<module>-<short-description>`
- `test/<module>-<short-description>`
- `docs/<area>-<short-description>`
- `chore/<area>-<short-description>`
- `refactor/<module>-<short-description>`

Examples:

`feat/risk-zone-scoring`
`fix/fleet-battery-state`
`test/simulator-geofence`

## Commit convention

Use concise conventional-style commits:

- `feat:`
- `fix:`
- `test:`
- `docs:`
- `refactor:`
- `chore:`

## Pull requests

Every PR must explain:

- what changed
- why it changed
- affected modules
- API/schema changes
- tests performed
- safety implications
- known limitations

## Cross-module changes

Stop and request Architect review before changing another module's contract, shared schema, event, or public API.

## Definition of done

A task is not done until code, tests, documentation, and integration impact are addressed.
