---
title: Borders
description: Lightweight border helpers for cards, sections, and controls.
previews:
  - title: Border Utilities
    code: |
      <div class="stack">
        <div class="border rounded p-4">border + rounded</div>
        <div class="border border-primary rounded p-4">border-primary</div>
        <div class="border-b p-4">border-b (bottom only)</div>
        <div class="border-t p-4">border-t (top only)</div>
      </div>
  - title: Cards & Panels
    code: |
      <div class="stack">
        <div class="card p-4">Card component</div>
        <div class="panel p-4">Panel component</div>
      </div>
---

# Borders

Use `.border` for a 1px solid border using `--ns-border`. Combine with `.rounded`, `.rounded-sm`, or `.rounded-lg` for radius. Use `.border-b` and `.border-t` for single-side borders.

```html
<div class="border rounded p-4">Bordered box</div>
<div class="card p-4">Card with shadow</div>
```
