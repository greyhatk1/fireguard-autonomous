# FireGuard System Architecture

## Objective

Build a modular wildfire fuel-management platform that can inspect properties, analyze vegetation observations, assess maintenance risk, create missions, coordinate simulated robots, and verify completed work.

## High-level flow

```text
Inspection Sources
      |
      v
Computer Vision / Observation Layer
      |
      v
Fuel-Risk Engine
      |
      v
Mission Planner
      |
      v
Human Authorization + Safety Validation
      |
      v
Fleet Manager
      |
      v
Robot Adapter
      |
      v
Simulation or Future Physical Robot
      |
      v
Verification
      |
      v
Property State Update
```

## Core boundaries

- AI interprets data and recommends actions.
- Domain services own business state and workflows.
- Fleet management assigns missions but does not directly drive motors.
- Safety validates whether a mission/action is permitted.
- Robot adapters translate approved high-level actions to a robot implementation.
- Simulation is the first target; physical robotics are a later phase.

## Future robotics direction

The platform should be compatible with a ROS 2-based robotics stack and navigation/fleet technologies where appropriate, but no dependency is mandatory until the simulation requirements justify it.

## Trust model

AI output is untrusted input. Deterministic validation, authorization, and safety boundaries must exist before any robot execution layer.
