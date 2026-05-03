---
name: portfolio-risk-review
description: Review portfolio, watchlist, or proposed stock basket risk using exposure, concentration, correlation, drawdown, liquidity, scenario, and thesis-risk checks.
---

# Portfolio Risk Review

## When to Use

- The user asks whether a stock basket, watchlist, or strategy is too risky.
- The work involves position sizing, diversification, hedging, drawdowns, correlations, sector exposure, or scenario analysis.
- A generated stock idea needs risk review before presentation.

## Workflow

1. Inventory positions
   Capture tickers, weights, currencies, regions, sectors, strategy labels, cost basis if provided, and time horizon.
2. Measure exposure
   Summarize sector, factor, country, currency, market-cap, liquidity, and single-name concentration.
3. Check co-movement
   Use rolling correlations, common drivers, and crisis-period behavior rather than only full-period averages.
4. Stress scenarios
   Consider rate shocks, earnings misses, commodity moves, FX changes, recession, sector rotation, and liquidity gaps.
5. Review sizing
   Compare position sizes to conviction, volatility, drawdown tolerance, liquidity, and thesis fragility.
6. Produce actions
   Suggest research follow-ups, risk limits, monitoring triggers, hedging ideas, or simplifications. Keep them non-personalized unless the user gives an explicit mandate.

## Output Format

- Portfolio snapshot
- Key concentrations
- Correlation and common-driver notes
- Drawdown and liquidity concerns
- Scenario table
- Monitoring triggers
- Suggested risk controls
- Unknowns and missing data

## Resources

- `templates/risk-review.md`: Use when producing a full portfolio risk memo.
- `references/risk-checklist.md`: Use when identifying common concentration and scenario risks.

## Guardrails

- Do not infer the user's personal risk tolerance, objectives, tax status, or constraints unless provided.
- Do not treat diversification by ticker count as real diversification.
- Flag stale, missing, or mismatched price data before calculating risk.
- Prefer transparent scenario analysis over false precision.
