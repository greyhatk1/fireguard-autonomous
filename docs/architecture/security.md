# Security Architecture

Principles:
- Secrets never enter source control.
- Least privilege for users, agents, services, and robot interfaces.
- Validate all external input, including AI-generated output.
- Audit authorization and safety decisions.
- Separate development/simulation credentials from future production credentials.
- Treat telemetry and imagery as potentially sensitive operational data.
- No agent receives credentials or permissions it does not need.

AI-generated plans are untrusted data and must pass schema validation and deterministic policy checks before execution.
