---
name: project-skill-audit
description: Audit a skill repository for metadata quality, catalog consistency, trigger descriptions, source provenance, and maintainability.
---

# Project Skill Audit

## When to Use

- The user asks whether skills are installable, discoverable, or high quality.
- A catalog or registry needs validation.
- Skill metadata, sources, or descriptions may be stale.

## Workflow

1. Enumerate all skill directories.
2. Verify each skill has a manifest, entry file, name, description, version, tags, and sources.
3. Check that descriptions clearly state trigger conditions.
4. Rebuild catalog and compare counts.
5. Report blockers, quality issues, and quick fixes.

## Quality Bar

- Skills should be concise.
- Sources should be traceable.
- Instructions should say when to use the skill and how to verify completion.
