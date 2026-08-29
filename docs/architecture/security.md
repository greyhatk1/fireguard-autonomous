# Security Baseline

## Rules

- Never commit credentials or API keys.
- Use environment variables or a future secret manager for secrets.
- Validate all API inputs.
- Authenticate operator actions.
- Authorize privileged actions server-side.
- Audit mission approvals, cancellations, safety events, and configuration changes.
- Treat AI-generated output as untrusted input.
- Minimize permissions for development agents and services.
- Keep simulation credentials separate from future production credentials.

## AI-agent security

Coding agents must not receive production secrets. Agents operate against development/simulation environments and submit code for review.
