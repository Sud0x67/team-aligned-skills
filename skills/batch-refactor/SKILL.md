---
name: batch-refactor
description: Perform safe multi-file refactors, migrations, renames, codemods, and cleanup passes with verification.
---

# Batch Refactor

## When to Use

- A repeated code pattern must be changed across files.
- An API, component, import path, or naming convention is being migrated.
- Cleanup needs behavior to stay stable.

## Workflow

1. Write the cleanup plan before editing.
2. Lock behavior with existing or focused regression tests where risk is nontrivial.
3. Search and classify all occurrences.
4. Apply the smallest mechanical change first.
5. Run typecheck, tests, and targeted search for leftovers.

## Guardrails

- Prefer AST-aware tools over text replacement for code.
- Keep unrelated style churn out of the diff.
- Do not introduce new abstractions unless they remove real duplication.
