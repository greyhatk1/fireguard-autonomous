# ADR-001: Modular Architecture

## Status
Accepted

## Decision
FireGuard will use independently testable modules connected by explicit contracts. AI, mission planning, fleet coordination, safety, and robot adapters remain separate boundaries.

## Rationale
Parallel AI-assisted development is only useful if agents can work independently without creating incompatible implementations. Explicit contracts make changes reviewable and allow simulated robots to be replaced by physical adapters later.

## Consequences
More interfaces and contract tests are required up front. This is intentional. Safety and integration boundaries are prioritized over rapid but tightly coupled code generation.
