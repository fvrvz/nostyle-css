---
title: Border Radius
description: Radius utilities for compact and large components.
previews:
  - title: Radius Scale
    code: |
      <div class="stack">
        <div class="rounded-sm border p-4">rounded-sm — 0.375rem</div>
        <div class="rounded border p-4">rounded — 0.625rem</div>
        <div class="rounded-lg border p-4">rounded-lg — 0.875rem</div>
        <div class="rounded-xl border p-4">rounded-xl — 1.25rem</div>
      </div>
---

# Border Radius

Four radius tokens mapped to CSS variables:

| Class        | Variable         | Value    |
| ------------ | ---------------- | -------- |
| `rounded-sm` | `--ns-radius-sm` | 0.375rem |
| `rounded`    | `--ns-radius-md` | 0.625rem |
| `rounded-lg` | `--ns-radius-lg` | 0.875rem |
| `rounded-xl` | `--ns-radius-xl` | 1.25rem  |

```html
<div class="rounded-lg border p-4">Large radius</div>
```
