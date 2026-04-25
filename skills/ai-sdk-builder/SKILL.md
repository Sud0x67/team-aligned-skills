---
name: ai-sdk-builder
description: Build AI features with the Vercel AI SDK, including streaming chat, tool calls, structured output, multi-model routing, and persistence.
---

# AI SDK Builder

## When to Use

- The user asks for a chat UI, generation endpoint, tool call flow, structured output, or AI agent in a web app.
- A Vercel AI SDK integration needs debugging or modernization.
- Streaming behavior, message persistence, or tool rendering is broken.

## Workflow

1. Identify SDK version, framework, runtime, and provider.
2. Inspect existing API routes, hooks, message schema, and persistence.
3. Choose streaming, structured output, or tool calling based on the product need.
4. Keep server-side secrets and provider calls out of the client.
5. Verify both API behavior and UI rendering.

## Guardrails

- Preserve generation IDs and message IDs when persistence exists.
- Handle loading, partial, error, and retry states.
- Avoid model-specific assumptions unless documented.
