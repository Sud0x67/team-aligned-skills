---
name: pdf-toolkit
description: Work with PDF files: inspect metadata, extract text/tables/images, split or merge pages, render pages for visual QA, and verify outputs.
---

# PDF Toolkit

## When to Use

- The user asks to read, summarize, compare, split, merge, redact, rotate, or export a PDF.
- A PDF must be converted into text, images, tables, markdown, or another document format.
- Visual fidelity matters and rendered pages need to be checked.
- The file may contain scanned pages, signatures, tables, forms, comments, or mixed orientation pages.

## Workflow

1. Identify the intent
   Determine whether the user needs extraction, transformation, comparison, repair, or visual review.
2. Inspect before editing
   Check page count, metadata, encryption, text availability, page sizes, and whether pages are scanned.
3. Choose the lightest reliable path
   Use native text extraction for selectable text. Use OCR only for scanned pages or image-only regions.
4. Preserve page order and provenance
   Keep page numbers in summaries, table exports, citations, and comparison notes.
5. Render to verify
   For any edit or conversion, render representative pages and inspect for clipping, rotation, missing glyphs, blank pages, and layout drift.
6. Report gaps
   Call out unreadable scans, low-confidence OCR, missing fonts, password protection, or tables that need manual review.

## Tool Guidance

- Prefer existing project scripts when present.
- For Python workflows, use `pypdf` for structure edits, `pdfplumber` for text and tables, `PyMuPDF` for rendering and images, and OCR only when text extraction fails.
- For shell workflows, `pdfinfo`, `pdftotext`, `pdftoppm`, and `qpdf` are useful when available.
- For confidential PDFs, avoid uploading to external services unless the user explicitly requests it.

## Output Expectations

- Summaries should cite page numbers.
- Extracted tables should preserve headers and include a note about merged cells or uncertain columns.
- Edited PDFs should be verified by page count and rendered page checks.
- If the user asks for a new artifact, provide the final file path and the verification performed.
