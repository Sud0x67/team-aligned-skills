---
name: git-commit-conventions
description: Prepare clean commits with scoped diffs, decision context, trailers, and honest verification notes.
---

# Git Commit Conventions

## When to Use

- The user asks to commit changes, write a commit message, or prepare a PR.
- A repository uses commit trailers, conventional commits, or custom lore.
- The staged diff needs review before commit.

## Workflow

1. Inspect `git status` and separate unrelated changes.
2. Review the staged or intended diff.
3. Write an intent-first subject that explains why.
4. Include constraints, rejected alternatives, risk, and verification when useful.
5. Commit only the requested files.

## Guardrails

- Never stage unrelated user changes.
- Be honest about unrun tests.
- Follow repository-specific commit protocol when present.
