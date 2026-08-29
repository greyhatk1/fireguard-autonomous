# Initial Domain Model

Core entities:

- Property
- Zone
- Asset
- Observation
- RiskAssessment
- Mission
- Robot
- RobotTelemetry
- RobotCapability
- SafetyDecision
- VerificationReport

Relationships:

```text
Property -> Zones
Zone -> Observations
Observations -> RiskAssessments
RiskAssessment -> Mission
Mission -> Robot
Robot -> RobotTelemetry
Mission -> SafetyDecision
Mission -> VerificationReport
```

These are conceptual contracts for Phase 0. Concrete persistence schemas should be added by the Core agent and reviewed before other services depend on them.
