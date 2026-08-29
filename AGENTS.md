# FireGuard Agent Operating Contract

FireGuard is being developed as a modular software/simulation MVP before physical robotics.

## Required workflow
1. Read `docs/architecture/*` and `docs/agents/*` relevant to your task.
2. Identify your assigned module.
3. Do not modify another module without explicit architectural approval.
4. Create a feature branch.
5. Implement the smallest complete change.
6. Add tests.
7. Run tests and report results.
8. Open a PR with the required checklist.
9. Wait for review; never self-merge.

## Hard safety boundary
No LLM may directly issue unrestricted physical actuator or motor commands. AI outputs are untrusted and must pass schema validation, deterministic policy/safety checks, and required human authorization before execution.

## Definition of done
Code, tests, documentation, contract compatibility, and CI must all be satisfactory. Known limitations must be disclosed.
