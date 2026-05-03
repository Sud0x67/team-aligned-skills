---
name: technical-backtest
description: Design and verify technical-analysis or rules-based stock strategy backtests with explicit data, indicators, transaction costs, baselines, leakage checks, and performance diagnostics.
---

# Technical Backtest

## When to Use

- The user asks to test a trading rule, technical indicator, or stock strategy.
- The request includes moving averages, RSI, MACD, breakout, mean reversion, stop loss, position sizing, or performance metrics.
- A strategy needs evidence before it is discussed as useful.

## Workflow

1. Define the rule
   Specify entry, exit, rebalance frequency, position sizing, universe, benchmark, and capital assumptions.
2. Prepare data
   Use adjusted prices when appropriate. Record source, timezone, survivorship bias, corporate actions, missing bars, and date range.
3. Prevent leakage
   Ensure signals only use information available before the trade. Lag indicators and fundamentals where needed.
4. Add frictions
   Include commissions, spread/slippage assumptions, borrow cost for shorts, and liquidity constraints.
5. Compare baselines
   Use buy-and-hold, equal-weight, benchmark index, or simple cash baseline as relevant.
6. Diagnose performance
   Report CAGR, volatility, Sharpe or Sortino, max drawdown, turnover, hit rate, exposure, and worst periods.
7. Stress test
   Run parameter sensitivity, walk-forward splits, out-of-sample windows, and regime checks before trusting the result.

## Output Format

- Strategy rule
- Data and assumptions
- Leakage and bias checks
- Performance table
- Equity curve and drawdown notes when charts are available
- Sensitivity results
- Failure modes
- Reproducibility notes

## Resources

- `templates/backtest-report.md`: Use when reporting strategy test results.
- `references/backtest-bias-checklist.md`: Use before trusting a strategy result.

## Guardrails

- Never evaluate a strategy only on in-sample optimized parameters.
- Avoid claiming profitability without transaction costs and drawdown analysis.
- Treat tiny sample sizes, high turnover, illiquid names, and extreme parameter sensitivity as major warnings.
- If using notebooks or scripts, keep inputs reproducible and save generated artifacts with clear names.
