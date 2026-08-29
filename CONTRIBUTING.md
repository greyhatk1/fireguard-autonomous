# Contributing to FireGuard

## Workflow

1. Start from the latest `main`.
2. Create a focused feature/fix branch.
3. Read the relevant architecture and module documents.
4. Make the smallest coherent change.
5. Add or update tests.
6. Run applicable checks.
7. Open a pull request against `main`.
8. Address QA and architecture review comments.
9. Merge only after required checks pass and approval is obtained.

## Pull request policy

- One logical change per PR.
- No direct pushes to `main` for normal development.
- No self-approval or self-merge.
- Breaking changes require an ADR or explicit architecture approval.
- Shared contracts require review from the Architect.
- Safety-related changes require additional review.

## Review priorities

Reviewers should prioritize correctness, safety, clear contracts, test coverage, security, maintainability, and minimal coupling over cleverness.
