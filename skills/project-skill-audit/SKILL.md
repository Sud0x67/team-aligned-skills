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
2. Verify each skill has `SKILL.md`, `skill.json`, and a catalog entry.
3. Verify Agent Skills compatibility:
   - `SKILL.md` has YAML frontmatter plus Markdown body.
   - `name` equals the parent directory, uses lowercase letters/numbers/hyphens only, has no leading/trailing hyphen, no consecutive hyphens, and is at most 64 characters.
   - `description` is non-empty, at most 1024 characters, and states both what the skill does and when to use it.
4. Verify TeamAligned metadata:
   - `skill.json` includes id, slug, name, displayName, description, version, category, tags, entry, recommendedTools, and sources.
   - `slug` equals the directory name.
   - `sources` is a non-empty array and is preserved in `catalog/skills.json`.
5. Check progressive disclosure:
   - `SKILL.md` stays concise and points to resources only when needed.
   - Long method details, domain rules, checklists, and output skeletons live in `references/` or `templates/`.
   - Any concrete reference or template path mentioned in `SKILL.md` exists.
6. Check operational quality:
   - The workflow has a default path, verification step, failure handling, and boundaries.
   - Output format is concrete when the user expects a repeatable artifact.
   - Scripts, if present, document dependencies and produce useful errors.
7. Rebuild catalog and compare counts.
8. Report blockers, quality issues, and quick fixes.

## Quality Bar

- Skills capture repeatable procedural knowledge, not generic background knowledge.
- Sources are traceable and cataloged.
- Descriptions trigger correctly without being over-broad.
- Instructions say when to use the skill, how to execute it, when to load resources, and how to verify completion.
- Necessary references and templates are bundled with the skill.

## Standard Commands

```bash
npm run build:catalog
```

After building, verify:

- Actual skill directory count equals catalog `count`.
- Every skill directory has a catalog item.
- Every catalog item has `sources`.
- No `SKILL.md` mentions a missing concrete reference or template file.
