---
name: stock-agent-debate
description: Run a structured multi-perspective stock analysis debate across fundamental, technical, macro, sentiment, valuation, and risk lenses, then synthesize an evidence-weighted view.
---

# Stock Agent Debate

## When to Use

- The user asks for multi-agent stock analysis, bull/bear debate, investment committee review, or second opinions.
- A single thesis needs challenge from different lenses before decisions or research prioritization.
- The output should synthesize conflicting evidence rather than produce one unchecked narrative.

## Workflow

1. Set the mandate
   Define ticker, horizon, benchmark, user question, and whether the goal is research prioritization, thesis review, or hypothetical trade evaluation.
2. Assign lenses
   Use only the roles needed for the question:
   - Fundamental analyst: business quality, margins, capital allocation, balance sheet.
   - Valuation analyst: multiples, DCF assumptions, peer context, market-implied expectations.
   - Technical analyst: trend, momentum, support/resistance, volume, regime.
   - Macro analyst: rates, FX, commodity, cycle, policy, sector flows.
   - Sentiment analyst: news, transcripts, estimate revisions, positioning.
   - Risk analyst: downside scenarios, correlation, liquidity, sizing, thesis breakers.
3. Require evidence
   Each lens must cite source type, date, metric, and confidence. Unsupported claims go to open questions.
4. Debate conflicts
   Highlight where lenses disagree, why they disagree, and what evidence would resolve the conflict.
5. Synthesize
   Produce an evidence-weighted base view with bull and bear cases, not a forced consensus.

## Output Format

- Mandate
- Lens-by-lens findings
- Points of agreement
- Points of disagreement
- Key evidence table
- Bull/base/bear framing
- Decision or research next steps
- Risks, missing data, and disclaimer

## Resources

- `templates/debate-memo.md`: Use when producing an investment committee style debate memo.
- `references/lens-prompts.md`: Use when assigning or checking analysis lenses.

## Guardrails

- Do not impersonate real investors or claim to follow their proprietary methods. Use generic investing lenses instead.
- Do not let an LLM-only debate substitute for market data, filings, or calculations.
- Do not output automated execution instructions unless the user explicitly asks for a separate implementation workflow.
- Keep the final synthesis clear about confidence and uncertainty.
