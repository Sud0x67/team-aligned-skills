---
name: python-project-standards
description: Maintain Python project structure, dependencies, packaging, linting, typing, tests, and reproducible workflows.
---

# Python Project Standards

## When to Use

- The user asks to fix or improve a Python project.
- Dependency, packaging, lint, typecheck, or test behavior is unclear.
- A script should become a maintainable module or CLI.

## Workflow

1. Identify the package manager and Python version.
2. Inspect `pyproject.toml`, lockfiles, test layout, and entry points.
3. Follow existing formatter, linter, and typing choices.
4. Make focused changes and avoid dependency churn.
5. Run the narrowest meaningful tests, then broader checks if risk warrants.

## Guardrails

- Do not rewrite packaging systems without explicit need.
- Prefer standard library and existing dependencies.
- Keep generated artifacts and caches out of commits.
