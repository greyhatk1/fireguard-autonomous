# Event Contract

Use domain events for decoupled communication. Initial event names:

- `property.created`
- `zone.updated`
- `observation.created`
- `risk.assessed`
- `mission.recommended`
- `mission.approved`
- `mission.assigned`
- `mission.started`
- `mission.paused`
- `mission.completed`
- `mission.failed`
- `robot.telemetry.updated`
- `robot.connection.changed`
- `safety.blocked`
- `verification.completed`

Events are facts, not commands. Each event includes event_id, event_type, occurred_at, producer, schema_version, and payload. Consumers must tolerate duplicate delivery.
