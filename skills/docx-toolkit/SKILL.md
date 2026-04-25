---
name: docx-toolkit
description: Create, edit, review, redline, comment, render, and export Microsoft Word .docx documents.
---

# DOCX Toolkit

## When to Use

- The user asks to create or modify a `.docx` file.
- A Word document needs tracked changes, comments, formatting cleanup, or section restructuring.
- Content must be exported to PDF or rendered for visual verification.
- The task involves templates, headers, footers, tables, page breaks, or styles.

## Workflow

1. Inspect the document package
   Confirm the file opens, identify styles, sections, images, tables, comments, and tracked changes.
2. Preserve structure
   Reuse existing styles and numbering whenever possible instead of hand-formatting individual runs.
3. Make focused edits
   Keep content, layout, and metadata changes scoped to the user's request.
4. Validate the package
   Ensure the `.docx` remains a valid zipped OOXML package and opens cleanly.
5. Render when layout matters
   Export or render pages to check pagination, table overflow, image placement, and missing fonts.

## Tool Guidance

- Use high-level document libraries for creation and simple edits.
- Use OOXML package editing only when high-level libraries cannot represent required comments, tracked changes, or exact formatting.
- Use LibreOffice or an available renderer for layout checks when visual fidelity matters.
- Never silently discard comments, tracked changes, headers, footers, footnotes, or embedded media.

## Output Expectations

- State which file was changed or created.
- Mention whether comments or tracked changes were preserved.
- Include render/export verification when formatting or pagination was part of the task.
