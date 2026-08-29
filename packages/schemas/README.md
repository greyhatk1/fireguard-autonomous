# FireGuard Shared Schemas

Canonical cross-module data contracts live here.

Rules:
- Schemas are versioned.
- Changes require backward-compatibility review.
- AI-generated payloads must validate before entering trusted execution paths.
- Robot actuator commands are intentionally outside AI-facing schemas.

Initial entities are documented in `docs/architecture/data-model.md`.
