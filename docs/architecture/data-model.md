# Data Model Contract

Initial canonical entities:

- Property: id, name, boundary, status, created_at
- Zone: id, property_id, geometry, zone_type, attributes
- Observation: id, property_id, zone_id, source, observation_type, value, confidence, timestamp
- RiskAssessment: id, zone_id, level, score, factors, recommendation, confidence, timestamp
- Robot: id, type, capabilities, status, position, battery, connectivity
- Mission: id, property_id, zone_id, task_type, priority, required_capabilities, authorization_state, status, timestamps
- Telemetry: robot_id, position, battery, health, connectivity, timestamp
- Verification: mission_id, before_evidence, after_evidence, result, timestamp

IDs must be stable and globally unique within the platform. Timestamps are UTC ISO-8601. Contracts should evolve backward-compatibly where practical.
