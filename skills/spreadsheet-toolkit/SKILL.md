---
name: spreadsheet-toolkit
description: Analyze, clean, create, edit, chart, and verify CSV, TSV, XLS, and XLSX spreadsheet files.
---

# Spreadsheet Toolkit

## When to Use

- The user asks to analyze, transform, validate, or create spreadsheet data.
- Workbooks contain formulas, charts, pivot tables, filters, multiple sheets, or formatting requirements.
- A CSV or XLSX must be converted, summarized, merged, deduplicated, or visualized.

## Workflow

1. Inspect workbook shape
   Record sheets, dimensions, headers, formulas, charts, hidden rows or columns, and data types.
2. Protect formulas and formatting
   Avoid overwriting formulas, named ranges, validations, filters, and existing chart ranges unless requested.
3. Clean data explicitly
   Track assumptions for date parsing, currency, missing values, duplicates, and category normalization.
4. Verify calculations
   Spot-check formulas, totals, row counts, and key aggregates after edits.
5. Render or preview
   When presentation matters, inspect the workbook or exported view for clipped columns, unreadable charts, and broken formatting.

## Tool Guidance

- Use structured parsers rather than string manipulation.
- Use `openpyxl` or equivalent libraries for XLSX edits, `pandas` for analysis, and CSV parsers for delimited text.
- Preserve original files unless the user explicitly wants in-place edits.
- For large files, sample first and then run full transformations with row-count checks.

## Output Expectations

- Report changed sheets and key validation counts.
- Include any assumptions about data cleaning.
- For generated charts or workbooks, mention preview/render checks and final artifact paths.
