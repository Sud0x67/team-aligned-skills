---
name: vercel-deploy
description: Manage and debug Vercel deployments, preview URLs, environment variables, logs, domains, and CI/CD workflows.
---

# Vercel Deploy

## When to Use

- The user asks to deploy, inspect a deployment, read logs, configure env vars, or debug a Vercel build.
- Preview and production behavior differ.
- A domain, redirect, route, or serverless function fails in Vercel.

## Workflow

1. Identify project, team, branch, deployment URL, and target environment.
2. Inspect build logs and runtime logs before changing code.
3. Confirm env vars and framework settings.
4. Reproduce locally when possible.
5. Verify the deployed URL after fixes.

## Guardrails

- Do not overwrite production env vars without explicit request.
- Avoid deploying unrelated local changes.
- Report deployment IDs, URLs, and verification evidence.
