---
name: react-performance
description: Diagnose and improve React rendering, hydration, bundle size, data fetching, and interaction performance.
---

# React Performance

## When to Use

- The user reports slow UI, jank, excessive renders, large bundles, or hydration issues.
- A React or Next.js change may affect perceived performance.
- Profiling evidence is needed before optimizing.

## Workflow

1. Reproduce the slow path and define the metric.
2. Inspect render frequency, expensive components, network waterfalls, and bundle output.
3. Fix the highest-impact bottleneck first.
4. Avoid memoization unless profiling shows real benefit.
5. Verify with before/after evidence.

## Checks

- Stable keys and bounded state scope.
- No repeated fetches caused by render loops.
- Avoid client components where server rendering is sufficient.
- Dynamic imports only where they reduce initial cost without hurting UX.
