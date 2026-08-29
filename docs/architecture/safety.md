# Safety Architecture

FireGuard is initially a software/simulation project. These rules define the architecture for future robotics work; they are not a claim of certification or operational readiness.

## Safety boundary

```text
AI recommendation
      |
      v
Mission validation
      |
      v
Human authorization when required
      |
      v
Deterministic safety checks
      |
      v
Robot adapter
```

LLMs must never directly issue unrestricted actuator or motor commands.

## Required controls

- Geofencing
- Restricted zones
- Authorization state
- Emergency stop state
- Pause/cancel behavior
- Communication-loss behavior
- Battery constraints
- Sensor-health constraints
- Invalid-command rejection
- Audit logging

## Fail-closed principle

Missing authorization, invalid mission data, violated geofence, or failed safety prerequisites must prevent execution rather than silently falling back to autonomous behavior.

## Physical deployment

Before any physical deployment, the system requires dedicated engineering review, hardware safety mechanisms, controlled testing, applicable regulatory analysis, and qualified human supervision.
