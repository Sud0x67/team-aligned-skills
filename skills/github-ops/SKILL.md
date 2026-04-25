---
name: github-ops
description: Work with GitHub issues, pull requests, reviews, releases, and repository collaboration safely.
---

# GitHub Ops

## When to Use

- The user asks to inspect, create, update, review, or summarize GitHub issues or PRs.
- A branch, release, tag, or CI status needs to be checked.
- Work requires mapping local commits to remote review context.

## Workflow

1. Inspect local state before remote actions.
2. Prefer read-only GitHub queries until the requested write action is clear.
3. Keep branch, PR, issue, and commit references explicit.
4. Summarize CI and review status with links or identifiers.
5. For write actions, report exactly what changed remotely.

## Guardrails

- Do not push, merge, close, delete, or release unless explicitly requested.
- Preserve user-authored local changes.
- Use repository conventions for PR titles, labels, templates, and release notes.
