---
name: durable-workflow
description: Design and implement durable long-running workflows with step state, retries, queues, idempotency, pause/resume, and observability.
---

# Durable Workflow

## When to Use

- The user needs background jobs, long-running agents, queued work, retries, or resumable steps.
- A workflow currently loses state, double-runs work, or cannot recover after failure.
- External calls need idempotency and auditability.

## Workflow

1. Define steps, inputs, outputs, side effects, and retry policy.
2. Choose the persistence and queue boundary.
3. Make each side-effecting step idempotent.
4. Record status transitions and failure reasons.
5. Test retry, resume, cancellation, and duplicate delivery behavior.

## Guardrails

- Do not rely on in-memory state for durable progress.
- Separate orchestration from business logic.
- Keep observability sufficient for stuck workflow diagnosis.
