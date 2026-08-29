# Safety Architecture

FireGuard is initially a simulation/development platform. Nothing here constitutes certification for autonomous operation.

Safety boundary:

AI analysis/recommendation -> mission -> deterministic validation -> authorization -> robot adapter.

Never permit an LLM to issue unrestricted motor commands.

Safety checks include, at minimum:
- geofence validity
- restricted/no-go zones
- mission authorization
- emergency stop state
- communication-loss handling
- battery thresholds
- invalid or stale mission rejection
- operator override

Safety must fail closed for missing/invalid authorization. Physical deployment requires qualified robotics/safety engineering, controlled testing, applicable regulations, and appropriate hardware safety mechanisms.
