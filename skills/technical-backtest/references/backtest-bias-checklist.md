# Backtest Bias Checklist

Run this before interpreting performance.

## Leakage

- Signals use only information available before the trade.
- Fundamentals and earnings dates are lagged.
- Rebalance prices are realistic for the signal timestamp.

## Universe Bias

- Delisted names are included when testing historical universes.
- Index constituents use point-in-time membership when relevant.
- Selection rules are documented before results are reviewed.

## Execution Reality

- Include commissions, bid/ask spread, slippage, borrow costs for shorts, and liquidity caps.
- Turnover is measured and plausible.
- Position sizes do not exceed realistic volume participation.

## Robustness

- Compare to buy-and-hold or benchmark.
- Test multiple regimes.
- Avoid choosing the best parameter after seeing the whole sample.
- Use out-of-sample or walk-forward checks for optimized strategies.

