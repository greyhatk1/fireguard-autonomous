# AI Agent Rules

1. Read `AGENTS.md` and architecture docs before coding.
2. Work only within the assigned module unless the Architect explicitly approves a cross-module change.
3. Create a feature branch; never work directly on `main`.
4. Keep commits small and descriptive.
5. Add or update tests for behavior changes.
6. Do not remove tests to make CI pass.
7. Never commit secrets, tokens, private keys, credentials, or generated sensitive data.
8. Treat AI output as untrusted input.
9. Never create an unrestricted path from an LLM to physical actuator/motor commands.
10. Do not weaken safety, authorization, geofence, or audit controls.
11. Do not silently change shared schemas; propose the change and update versioned contracts.
12. Open a PR when the assigned task is complete.
13. Never merge your own PR.
14. Report assumptions, known limitations, failed tests, and architectural concerns in the PR.
15. Prefer simple, deterministic, testable implementations over speculative complexity.
