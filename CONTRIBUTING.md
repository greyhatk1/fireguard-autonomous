# Contributing to FireGuard

## Branches
- `main`: protected release/integration branch.
- `feat/<scope>-<short-name>`: feature work.
- `fix/<scope>-<short-name>`: bug fixes.
- `chore/<scope>-<short-name>`: maintenance/docs.

## Pull requests
Every change to `main` must arrive through a PR. PRs must describe scope, tests, contract changes, safety impact, and known limitations.

## Merge policy
Agents do not merge their own PRs. Architecture-impacting changes require Architect review. Safety-sensitive changes require Safety review. CI must pass before merge.

## Commit policy
Use concise conventional-style messages such as `feat(risk): add fuel score contract` or `test(fleet): cover low-battery assignment`.
