# Agent Rules

## Before coding

Every agent must read:

1. `AGENTS.md`
2. `docs/architecture/system.md`
3. `docs/architecture/module-boundaries.md`
4. `docs/agents/agent-registry.md`
5. Its module-specific documentation, if present.

## While coding

- Keep scope narrow.
- Prefer existing contracts over new abstractions.
- Do not duplicate shared models.
- Add tests with behavior changes.
- Do not silently change another module.
- Do not introduce production hardware dependencies into the MVP.
- Do not expose secrets in logs or source.

## Before PR

The agent must report:

- files changed
- tests run
- test results
- API/schema changes
- dependencies added
- safety impact
- unresolved concerns

## Review hierarchy

1. Automated tests
2. QA/adversarial review
3. Module owner review
4. Architect review for cross-module/contract/safety changes
5. Repository owner approval

## Stop conditions

An agent must stop and request review if:

- a shared contract needs to change
- a safety invariant needs to change
- a new cross-service dependency is required
- physical hardware control is proposed
- credentials are required
- requirements conflict with architecture
