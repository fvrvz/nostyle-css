---
title: Spacing
description: Padding, margin, and gap utilities for controlling space between and around elements.
slug: /docs/spacing
previews:
  - title: Padding Scale
    code: |
      <div class="flex flex-wrap items-end gap-3">
        <div class="p-2 border rounded text-xs text-center text-muted" style="min-width:48px">p-2</div>
        <div class="p-3 border rounded text-xs text-center text-muted" style="min-width:52px">p-3</div>
        <div class="p-4 border rounded text-xs text-center text-muted" style="min-width:60px">p-4</div>
        <div class="p-6 border rounded text-xs text-center text-muted" style="min-width:72px">p-6</div>
        <div class="p-8 border rounded text-xs text-center text-muted" style="min-width:88px">p-8</div>
      </div>
  - title: Gap Scale
    code: |
      <div class="flex flex-col gap-4">
        <div class="flex gap-1 items-center">
          <div class="card p-3 text-xs rounded">A</div>
          <div class="card p-3 text-xs rounded">B</div>
          <div class="card p-3 text-xs rounded">C</div>
          <span class="text-xs text-muted" style="margin-left:0.5rem">gap-1 — 0.25rem</span>
        </div>
        <div class="flex gap-3 items-center">
          <div class="card p-3 text-xs rounded">A</div>
          <div class="card p-3 text-xs rounded">B</div>
          <div class="card p-3 text-xs rounded">C</div>
          <span class="text-xs text-muted" style="margin-left:0.5rem">gap-3 — 0.75rem</span>
        </div>
        <div class="flex gap-6 items-center">
          <div class="card p-3 text-xs rounded">A</div>
          <div class="card p-3 text-xs rounded">B</div>
          <div class="card p-3 text-xs rounded">C</div>
          <span class="text-xs text-muted" style="margin-left:0.5rem">gap-6 — 1.5rem</span>
        </div>
      </div>
---

# Spacing

NoStyle provides padding, margin, and gap utilities on a base-4 scale (each step = 0.25 rem).

## Padding

| Class  | Value     |
| ------ | --------- |
| `.p-0` | `0`       |
| `.p-2` | `0.5rem`  |
| `.p-3` | `0.75rem` |
| `.p-4` | `1rem`    |
| `.p-6` | `1.5rem`  |
| `.p-8` | `2rem`    |

Axis helpers: `.px-*` (inline / horizontal), `.py-*` (block / vertical).

```html
<div class="p-4">All sides</div>
<div class="px-6 py-3">Horizontal + vertical</div>
```

## Margin

| Class      | Value              |
| ---------- | ------------------ |
| `.m-0`     | `0`                |
| `.mt-2`    | top `0.5rem`       |
| `.mt-4`    | top `1rem`         |
| `.mt-6`    | top `1.5rem`       |
| `.mt-8`    | top `2rem`         |
| `.mb-2`    | bottom `0.5rem`    |
| `.mb-4`    | bottom `1rem`      |
| `.mb-6`    | bottom `1.5rem`    |
| `.mb-8`    | bottom `2rem`      |
| `.my-4`    | block `1rem`       |
| `.mx-auto` | auto center inline |

```html
<h1 class="mb-4 text-2xl font-bold">Title</h1>
<div class="mx-auto max-w-xl">Centered container</div>
```

## Gap

Use `.gap-*` inside any `flex` or `grid` container.

| Class    | Value     |
| -------- | --------- |
| `.gap-1` | `0.25rem` |
| `.gap-2` | `0.5rem`  |
| `.gap-3` | `0.75rem` |
| `.gap-4` | `1rem`    |
| `.gap-6` | `1.5rem`  |
| `.gap-8` | `2rem`    |

```html
<div class="flex gap-4">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-secondary">Cancel</button>
</div>

<div class="grid grid-cols-3 gap-6">
  <div class="card p-4">One</div>
  <div class="card p-4">Two</div>
  <div class="card p-4">Three</div>
</div>
```
