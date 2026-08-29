# Event Architecture

FireGuard uses domain events to reduce tight coupling between services.

Initial event candidates:

- `property.created`
- `inspection.completed`
- `observation.created`
- `risk.assessment.created`
- `mission.created`
- `mission.approved`
- `mission.assigned`
- `mission.started`
- `mission.paused`
- `mission.completed`
- `mission.failed`
- `robot.registered`
- `robot.telemetry.updated`
- `robot.offline`
- `safety.blocked`
- `verification.completed`

Events should be versioned when their contract becomes shared. Consumers should tolerate duplicate delivery where practical.
