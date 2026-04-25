---
name: openai-docs-research
description: Research OpenAI APIs, models, SDKs, and product behavior using official documentation and cite the sources used.
---

# OpenAI Docs Research

## When to Use

- The user asks how to build with OpenAI APIs, models, SDKs, agents, tools, files, embeddings, or multimodal features.
- The answer depends on current model names, SDK methods, pricing-sensitive behavior, or product capabilities.
- Code needs to be updated to follow current OpenAI guidance.

## Workflow

1. Prefer official sources
   Use OpenAI docs, cookbook examples, and official SDK repositories before blogs or secondary summaries.
2. Confirm recency
   Check whether model names, endpoints, parameters, or SDK APIs may have changed.
3. Map docs to the codebase
   Identify the local language, framework, package manager, and SDK version before changing code.
4. Implement minimally
   Follow existing code style and avoid new dependencies unless the project already uses them or the user requested them.
5. Cite sources
   Include source links in the final explanation when the task used external documentation.

## Tool Guidance

- Search official domains or repositories first.
- For SDK usage, inspect installed package versions and local examples before writing code.
- For migrations, preserve existing environment variable names and deployment assumptions unless the user asks to change them.

## Output Expectations

- Name the official sources used.
- State the model or API version assumptions.
- Include verification output such as tests, typecheck, or a small runtime smoke test when code changed.
