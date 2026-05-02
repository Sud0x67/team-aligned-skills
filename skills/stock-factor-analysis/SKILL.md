---
name: stock-factor-analysis
description: Analyze stocks or watchlists using factor frameworks such as value, quality, momentum, growth, profitability, leverage, volatility, and sentiment. Use for factor scoring, peer comparison, screening, and thesis decomposition.
---

# Stock Factor Analysis

## When to Use

- The user asks to screen stocks or rank a watchlist.
- The request mentions value, quality, momentum, growth, profitability, leverage, volatility, sentiment, or multi-factor scoring.
- A research thesis needs decomposition into measurable drivers.

## Workflow

1. Define universe
   Record tickers, benchmark, exchange, region, currency, and inclusion/exclusion rules.
2. Select factors
   Choose only factors that match the question. Avoid adding extra factors just because data is available.
3. Collect comparable data
   Use the same dates, periods, accounting standards, and currency conversions across the universe.
4. Normalize and winsorize
   Handle outliers, missing values, negative denominators, sector effects, and stale data explicitly.
5. Score transparently
   Show raw metrics, normalized ranks, weights, and tie-breakers. Keep the scoring model simple unless the user asks for a quantitative model.
6. Validate against history
   Where possible, test factor stability across multiple periods and compare the result against benchmark or peer outcomes.

## Common Factor Families

- Value: earnings yield, free cash flow yield, EV/EBITDA, price/book, dividend yield.
- Quality: gross margin, ROIC, return on equity, accruals, balance sheet strength.
- Growth: revenue growth, EPS growth, free cash flow growth, guidance revision.
- Momentum: 3/6/12 month relative strength, earnings revisions, trend persistence.
- Risk: beta, drawdown, volatility, leverage, liquidity, concentration.
- Sentiment: news tone, transcript tone, analyst revision direction, social signal quality.

## Output Format

- Universe and benchmark
- Factor definitions
- Data freshness and gaps
- Ranked table
- Top positive and negative drivers
- Sensitivity to factor weights
- Caveats and next checks

## Guardrails

- Do not mix trailing, forward, and point-in-time data without labeling them.
- Do not compare banks, insurers, REITs, and industrial companies with the same accounting ratios unless sector adjustments are made.
- Treat sentiment and LLM-generated scores as soft evidence unless grounded in source excerpts and timestamps.

