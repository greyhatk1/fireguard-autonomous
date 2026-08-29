# ADR-001: Modular Architecture

## Status

Accepted for Phase 0.

## Decision

FireGuard will be developed as independently testable modules connected through explicit contracts and adapters.

## Why

The project is intended to be developed in parallel by humans and AI coding agents. Strong boundaries reduce conflicting implementations, accidental coupling, and unsafe changes.

## Consequences

Positive:
- Parallel development is possible.
- Simulation can precede hardware.
- Robot implementations can be replaced through adapters.
- AI capabilities remain separate from safety-critical execution.

Negative:
- More interfaces and documentation are required.
- Integration work becomes its own engineering task.

## Safety consequence

AI systems remain outside the deterministic safety boundary. Any future physical deployment requires additional engineering and validation.
