# Module Boundaries

| Module | Owns | Must not own |
|---|---|---|
| `packages/schemas` | Shared data contracts | Business logic |
| `packages/events` | Event contracts | Robot control |
| `services/property-service` | Properties/zones/assets | Risk scoring |
| `services/inspection-service` | Inspection records | Fleet control |
| `services/risk-service` | Risk assessments | Motor commands |
| `services/mission-service` | Mission lifecycle | Robot-specific control |
| `services/fleet-service` | Fleet state and assignment | Safety bypass |
| `services/verification-service` | Before/after verification | Mission authorization |
| `ai/vision` | Image observations | Robot actuation |
| `ai/risk-analysis` | AI-assisted analysis | Safety override |
| `ai/operations-agent` | Operator assistance | Unrestricted execution |
| `robotics/simulator` | Simulated robot behavior | Production hardware |
| `robotics/drone-adapter` | Drone interface boundary | Fleet policy |
| `robotics/ground-robot-adapter` | Ground robot interface boundary | Risk decisions |
| `safety` | Deterministic safety/authorization | AI reasoning |
| `apps/command-center` | Operator UI | Direct motor control |
| `apps/api` | API composition/auth boundary | Domain ownership |

## Cross-module rule

If a change modifies a shared schema, event, public API, safety invariant, or module boundary, it requires architecture review before merge.
