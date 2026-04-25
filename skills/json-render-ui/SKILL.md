---
name: json-render-ui
description: Render JSON, structured outputs, event streams, and tool call results as usable UI instead of raw dumps.
---

# JSON Render UI

## When to Use

- The user asks to display structured data, AI tool calls, logs, traces, or generated JSON.
- Raw JSON is too hard to scan or act on.
- A UI needs loading, partial, invalid, and error states for structured output.

## Workflow

1. Identify the schema, audience, and main actions.
2. Render domain concepts first, raw JSON second.
3. Provide expand/collapse, copy, search, and error context when useful.
4. Validate malformed, empty, partial, and large payloads.
5. Browser-test wrapping, overflow, keyboard access, and responsiveness.

## Guardrails

- Avoid hiding important fields behind decoration.
- Do not execute or trust arbitrary JSON content.
- Keep timestamps, IDs, and source references copyable.
