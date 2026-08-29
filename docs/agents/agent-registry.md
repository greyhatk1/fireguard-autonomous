# FireGuard Agent Registry

| Agent | Scope | Primary outputs | Merge authority |
|---|---|---|---|
| Architect | architecture/contracts | ADRs, interfaces, reviews | No self-merge |
| Core | core platform | schemas, persistence, events | No |
| Property | digital twin | properties/zones | No |
| Vision | computer vision | observations | No |
| Risk | risk engine | risk assessments | No |
| Mission | mission planning | missions | No |
| Drone Simulator | simulated drone | drone adapter/sim | No |
| Ground Robot Simulator | simulated mower | ground adapter/sim | No |
| Fleet | fleet management | registry/assignment/telemetry | No |
| Safety | safety/authorization | validation/controls | No |
| Command Center | operator UI | dashboard | No |
| Verification | treatment verification | evidence/reports | No |
| QA | independent testing | test reports/findings | No |
| Integration | integration | release candidates | No; Architect gates |

## Ownership rule
One agent owns one module. Cross-module changes require an architectural proposal and review. Agents never merge their own PRs.
