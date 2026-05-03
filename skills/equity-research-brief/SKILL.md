---
name: equity-research-brief
description: Build a decision-ready public-equity research brief from filings, earnings, valuation context, catalysts, risks, and clearly labeled assumptions. Use for stock research, company analysis, earnings review, and investment thesis work.
---

# Equity Research Brief

## When to Use

- The user asks to analyze a listed company or stock.
- The work needs recent filings, earnings calls, segment performance, valuation, catalysts, or risk factors.
- The expected output is a research memo, thesis, bear/base/bull case, or monitoring brief.

## Workflow

1. Define scope
   Identify ticker, exchange, currency, target region, time horizon, and whether the user wants business quality, valuation, catalyst, or risk analysis.
2. Gather primary evidence
   Prefer company filings, investor relations materials, earnings transcripts, audited financials, and regulator sources before media or commentary.
3. Normalize the facts
   Record revenue, margins, cash flow, debt, share count, guidance, segment mix, and major one-time items with dates.
4. Separate thesis from evidence
   Keep facts, interpretation, and assumptions in distinct sections. Do not present a model output as a fact.
5. Compare context
   Use peers, historical multiples, industry growth, and market expectations only when the data source and date are clear.
6. Stress the thesis
   Include what would falsify the thesis, near-term catalysts, downside risks, and missing information.

## Output Format

- Research question
- Company snapshot
- Key facts and source dates
- Thesis summary
- Financial and operating drivers
- Valuation context
- Catalysts
- Risks and disconfirming evidence
- Open questions
- Not financial advice disclaimer

## Resources

- `templates/research-memo.md`: Use when the user wants a complete equity research memo.
- `references/source-quality.md`: Use when choosing or explaining source hierarchy and data freshness.

## Guardrails

- Do not claim real-time prices, analyst estimates, or latest filings without checking current sources.
- Do not produce personalized buy/sell advice unless the user explicitly asks for a hypothetical framework; even then, frame it as research support, not financial advice.
- For forward estimates, show assumptions and sensitivity ranges.
- For uncertain data, say what is missing rather than filling gaps with guesswork.
