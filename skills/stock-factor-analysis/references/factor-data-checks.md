# Factor Data Checks

## Normalization

- Use consistent periods across the universe.
- Separate trailing, forward, and point-in-time data.
- Winsorize extreme outliers when they distort ranks.
- Sector-neutralize factors when cross-sector accounting differences dominate.

## Missing Data

- Do not silently assign zero.
- Record whether missing means unavailable, not applicable, stale, or negative denominator.
- For composite scores, either exclude the factor for that name or penalize transparently.

## Common Pitfalls

- Negative earnings make PE-based value ranks misleading.
- Financials, REITs, insurers, and industrial companies often need different ratios.
- Sentiment scores are soft evidence unless tied to dated source excerpts.
- Momentum windows should exclude look-ahead data.

