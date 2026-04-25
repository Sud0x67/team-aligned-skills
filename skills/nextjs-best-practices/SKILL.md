---
name: nextjs-best-practices
description: Build, debug, and maintain Next.js App Router projects using current routing, caching, Server Components, and deployment patterns.
---

# Next.js Best Practices

## When to Use

- The user asks about Next.js pages, layouts, route handlers, Server Actions, middleware, or deployment.
- A bug involves caching, data fetching, hydration, or client/server boundaries.
- A feature should fit App Router conventions.

## Workflow

1. Confirm Next.js version and router style.
2. Locate the route segment, layout, data source, and runtime boundary.
3. Keep server logic server-side unless interactivity requires a client component.
4. Be explicit about caching, revalidation, and dynamic behavior.
5. Verify with typecheck, build, tests, or browser smoke checks.

## Guardrails

- Avoid broad `use client` propagation.
- Do not mutate cache semantics casually.
- Prefer framework primitives over custom routing or fetch wrappers.
