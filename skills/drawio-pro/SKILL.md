---
name: drawio-pro
description: Generate professional draw.io diagrams from natural language, including architecture diagrams, ERD, UML, sequence diagrams, flowcharts, and ML model diagrams. Export .drawio files to PNG, SVG, PDF, or JPG with layout self-checks and diagrams.net fallback.
---

# Draw.io Pro

## When to Use

- The user asks for a diagram, flowchart, architecture chart, ERD, UML, sequence diagram, class diagram, network topology, ML model diagram, or process visualization.
- A system has 3+ interacting components and a visual representation would clarify relationships.
- The user needs an editable `.drawio` source file or an exported PNG/SVG/PDF/JPG.

Skip this skill when a simple list, table, Mermaid snippet, or short explanation is enough.

## Prerequisites

Prefer the native draw.io desktop CLI:

```bash
draw.io --version
drawio --version
/Applications/draw.io.app/Contents/MacOS/draw.io --version
```

If the CLI is missing, still generate the `.drawio` XML and optionally provide a diagrams.net browser URL. Do not fail the task solely because export is unavailable.

## Workflow

1. Clarify only missing essentials
   Ask at most 1-3 focused questions if the request lacks diagram type, output format, or scope. Default to PNG and the current working directory when unspecified.
2. Pick a diagram preset
   Use ERD, UML class, sequence, architecture, ML/deep learning, flowchart, or general diagram conventions.
3. Plan the layout
   Identify nodes, groups, relationships, direction, and routing corridors before writing XML.
4. Generate `.drawio`
   Write valid draw.io XML with required root cells `id="0"` and `id="1"`. Start user shapes at `id="2"`. Escape XML attributes and use `&#xa;` for multiline labels.
5. Export a preview
   Export preview PNG without `-e`, because embedded PNG output can break strict image readers.
6. Self-check layout
   Inspect the preview when vision is available. Fix overlaps, clipped labels, missing connections, off-canvas shapes, edge-shape crossings, and stacked edges.
7. Iterate
   Apply targeted XML edits for user feedback. Regenerate only for layout-wide changes.
8. Final export
   Export requested formats. For final PNG/SVG/PDF, use embedded diagram XML when available so the export remains editable in draw.io.

## Draw.io XML Rules

- Include both root cells:

```xml
<mxCell id="0" />
<mxCell id="1" parent="0" />
```

- Vertices require `vertex="1"` and `parent="1"` unless nested inside a container.
- Edges require valid `source` and `target` ids plus an `mxGeometry` child.
- Use grid-aligned coordinates: snap `x`, `y`, `width`, and `height` to multiples of 10.
- Keep shapes large enough for labels.
- Leave routing corridors between rows and columns.
- Do not put `--` inside XML comments.

## Presets

- Architecture: tiered swimlanes, services, gateways, queues, databases, external systems.
- ERD: table containers, PK/FK rows, dashed relationship edges, clear cardinality labels.
- UML class: swimlane class boxes, attributes, methods, inheritance, implementation, composition, aggregation.
- Sequence: lifelines, synchronous/asynchronous messages, returns, activation boxes.
- Flowchart: ovals for start/end, rectangles for processes, diamonds for decisions, parallelograms for I/O.
- ML/deep learning: layer blocks, tensor shape annotations, skip connections, encoder/decoder groups.

## Color Conventions

- Blue: services and clients.
- Green: databases, inputs, outputs, success states.
- Yellow: queues, decisions, asynchronous processing.
- Orange: gateways, APIs, I/O.
- Red: errors, alerts, losses.
- Grey: external or neutral systems.
- Purple: auth, security, attention/transformer layers.

## Export Commands

Use whichever command exists on the machine: `draw.io`, `drawio`, or the full app path.

```bash
# Preview PNG: no embedded diagram
draw.io -x -f png -s 2 -o diagram.png diagram.drawio

# Final editable PNG: embedded diagram XML
draw.io -x -f png -e -s 2 -o diagram.drawio.png diagram.drawio

# Final SVG/PDF
draw.io -x -f svg -e -o diagram.svg diagram.drawio
draw.io -x -f pdf -e -o diagram.pdf diagram.drawio
```

On Linux headless environments, retry export with `xvfb-run -a`; if running as root, append `--no-sandbox` at the end.

## Final PNG Repair

After any final PNG export with `-e`, repair the IEND chunk defensively:

```bash
python3 - "diagram.drawio.png" <<'PY'
import sys
p = sys.argv[1]
data = open(p, "rb").read()
iend = b"\x00\x00\x00\x00IEND\xaeB`\x82"
if not data.endswith(iend):
    if data.endswith(b"\x00\x00\x00\x00"):
        data = data[:-4]
    open(p, "wb").write(data + iend)
PY
```

## Browser Fallback

When draw.io CLI is unavailable but Python is available, encode the `.drawio` XML into a diagrams.net viewer URL. The diagram XML lives in the URL fragment and is not sent to the server.

Read `references/browser-fallback.md` when generating this URL.

## Resources

- `references/browser-fallback.md`: Use when CLI export is unavailable and a browser-editable diagrams.net URL is needed.
- `templates/basic-diagram.drawio`: Use as the minimal valid mxGraph skeleton for new `.drawio` files.

## Output Expectations

- Report the `.drawio` source path and exported artifact paths.
- Mention if export was skipped because draw.io CLI was unavailable.
- For visual work, show or reference the preview image when possible.
- Keep the source `.drawio` editable and avoid one-off raster-only deliverables unless the user asks for that.
