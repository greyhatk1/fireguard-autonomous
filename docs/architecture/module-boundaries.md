# Module Boundaries

| Module | Owns | Must not own |
|---|---|---|
| Core | shared schemas, persistence, events, config | robot behavior |
| Property | properties, zones, structures, map metadata | risk decisions |
| Vision | imagery -> observations | robot commands |
| Risk | observations -> explainable risk | robot control |
| Mission | approved recommendations -> missions | motor control |
| Fleet | robot registry, assignment, telemetry | safety bypass |
| Robotics | simulation and robot adapters | business risk scoring |
| Safety | authorization, geofence, emergency states | LLM reasoning |
| Verification | before/after evidence and reports | mission authorization |
| Command Center | operator UI | hidden policy logic |

Cross-module behavior requires an explicit contract in `packages/schemas` or `packages/events` and architectural review.
