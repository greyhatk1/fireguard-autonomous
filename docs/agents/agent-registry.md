# FireGuard Agent Registry

| Agent | Scope | Primary responsibility | Merge authority |
|---|---|---|---|
| ARCHITECT | Entire system | Architecture, contracts, ADRs, integration decisions | No self-merge |
| CORE | `packages/`, core API foundations | Shared schemas, data models, platform foundations | No |
| PROPERTY | `services/property-service` | Digital property model | No |
| VISION | `ai/vision` | Image-to-observation pipeline | No |
| RISK | `services/risk-service`, `ai/risk-analysis` | Fuel-risk assessment | No |
| MISSION | `services/mission-service` | Mission lifecycle/planning | No |
| DRONE-SIM | `robotics/simulator`, drone simulation | Virtual inspection drone | No |
| GROUND-SIM | `robotics/simulator`, ground robot simulation | Virtual ground robot | No |
| FLEET | `services/fleet-service` | Robot state and assignment | No |
| SAFETY | `safety/` | Authorization and deterministic safety checks | No |
| COMMAND | `apps/command-center` | Operator dashboard | No |
| VERIFICATION | `services/verification-service` | Before/after verification | No |
| QA | `tests/` and cross-module review | Adversarial testing and regression coverage | No |
| INTEGRATOR | Cross-module | Integration validation and merge preparation | No; Architect/owner approval required |

## Parallelism rules

Agents may work in parallel only when their interfaces are already defined. Shared contracts are owned by CORE and reviewed by ARCHITECT.

Agents must stop and request architecture review when they discover that their task requires changing another module's public contract.

## Initial execution order

1. ARCHITECT bootstrap
2. CORE
3. PROPERTY
4. RISK
5. MISSION
6. DRONE-SIM + GROUND-SIM
7. FLEET
8. COMMAND
9. SAFETY
10. VERIFICATION
11. QA
12. INTEGRATOR
13. Full simulation milestone
