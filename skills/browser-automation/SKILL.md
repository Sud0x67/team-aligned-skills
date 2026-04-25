---
name: browser-automation
description: Use browser automation to verify local web apps, interactions, screenshots, console errors, responsive layout, and end-to-end flows.
---

# Browser Automation

## When to Use

- A web UI change needs visual or interaction verification.
- The user asks to open, click, inspect, screenshot, or test a page.
- Console errors, network failures, blank pages, or responsive issues are suspected.

## Workflow

1. Start or locate the dev server.
2. Visit the exact target route.
3. Check console and network errors.
4. Exercise the main user flow.
5. Capture screenshots for layout-sensitive work.

## Guardrails

- Test desktop and mobile viewports when responsive behavior matters.
- Verify dynamic data and empty/error states when relevant.
- Do not claim visual completion without looking at the rendered page.
