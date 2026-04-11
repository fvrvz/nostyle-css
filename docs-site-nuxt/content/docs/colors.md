---
title: Colors
description: Semantic colour utilities for text, backgrounds, and interactive states.
slug: /docs/colors
previews:
  - title: Text Colors
    code: |
      <div class="flex flex-col gap-3">
        <p class="text-body font-medium m-0">text-body — default copy</p>
        <p class="text-muted m-0">text-muted — secondary / subdued</p>
        <p class="text-primary font-semibold m-0">text-primary — brand colour</p>
        <p class="text-success font-semibold m-0">text-success — positive state</p>
        <p class="text-warning font-semibold m-0">text-warning — caution state</p>
        <p class="text-danger font-semibold m-0">text-danger — error / destructive</p>
      </div>
  - title: Semantic Backgrounds
    code: |
      <div class="flex flex-wrap gap-3">
        <div class="bg-primary rounded p-3 text-xs font-semibold" style="color:var(--ns-primary-ink)">bg-primary</div>
        <div class="bg-success rounded p-3 text-xs font-semibold" style="color:#fff">bg-success</div>
        <div class="bg-warning rounded p-3 text-xs font-semibold" style="color:#fff">bg-warning</div>
        <div class="bg-danger rounded p-3 text-xs font-semibold" style="color:#fff">bg-danger</div>
        <div class="bg-surface border rounded p-3 text-xs font-semibold">bg-surface</div>
      </div>
---

# Colors

NoStyle uses CSS custom properties for all colours — everything adapts automatically to light and dark mode with no extra work.

## Text Colours

| Class           | Variable       | Purpose                    |
| --------------- | -------------- | -------------------------- |
| `.text-body`    | `--ns-text`    | Default body copy          |
| `.text-muted`   | `--ns-muted`   | Secondary / hint text      |
| `.text-primary` | `--ns-primary` | Brand / interactive colour |
| `.text-success` | `--ns-success` | Positive states            |
| `.text-warning` | `--ns-warning` | Caution / alert            |
| `.text-danger`  | `--ns-danger`  | Errors / destructive       |

```html
<p class="text-primary font-semibold">Featured content</p>
<p class="text-muted text-sm">Supporting detail</p>
<p class="text-danger">Something went wrong.</p>
```

## Background Colours

| Class             | Variable       |
| ----------------- | -------------- |
| `.bg-surface`     | `--ns-surface` |
| `.bg-primary`     | `--ns-primary` |
| `.bg-success`     | `--ns-success` |
| `.bg-warning`     | `--ns-warning` |
| `.bg-danger`      | `--ns-danger`  |
| `.bg-transparent` | `transparent`  |

```html
<div class="bg-primary rounded p-4" style="color: var(--ns-primary-ink)">
  Action panel
</div>
<span class="bg-danger text-xs font-semibold rounded p-1" style="color:#fff">
  Error
</span>
```

## Foreground on Primary

Use `.text-on-primary` when you need text that contrasts against `bg-primary`. The value is `--ns-primary-ink`, which automatically flips between white (light mode) and a dark tone (dark mode) to maintain contrast.

```html
<button class="btn btn-primary">
  <!-- btn-primary applies text-on-primary automatically -->
  Save Changes
</button>
```
