---
name: ai-elements-ui
description: Build polished AI interfaces with message lists, prompt inputs, citations, reasoning states, tool calls, and structured output displays.
---

# AI Elements UI

## When to Use

- The user asks for an AI chat interface or generated-output UI.
- Tool calls, streaming states, citations, reasoning, or attachments need rendering.
- Existing chat UI feels incomplete or fragile.

## Workflow

1. Inventory available component libraries and design system patterns.
2. Model all message states: submitted, streaming, tool running, completed, failed, retried.
3. Keep input controls ergonomic and accessible.
4. Render structured data with appropriate components instead of raw JSON.
5. Browser-test scrolling, keyboard input, empty states, and errors.

## Guardrails

- Do not expose provider secrets or raw internal traces.
- Keep dense operational apps restrained; avoid landing-page treatment for tools.
- Ensure long text and code blocks do not overflow.
