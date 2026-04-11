---
title: Theming
description: Customise NoStyle via CSS variables and configure dark mode.
slug: /docs/theming
---

# Theming

NoStyle is built entirely on CSS custom properties. Override any variable in your own stylesheet to rebrand the framework instantly — no build step required.

## CSS Variables

All tokens live on `:root`. The full set:

```css
:root {
  /* Brand */
  --ns-primary: #0c6cf2;
  --ns-primary-hover: #0a5ad4;
  --ns-primary-ink: #ffffff; /* Text on primary bg */

  /* Semantic states */
  --ns-success: #0f9f6e;
  --ns-warning: #d38a15;
  --ns-danger: #d84057;

  /* Surfaces */
  --ns-surface: #ffffff; /* Page / card background */
  --ns-surface-alt: #f1f5f9; /* Subtle alt background */

  /* Text */
  --ns-text: #162031; /* Body copy */
  --ns-muted: #5a667a; /* Subdued / placeholder */
  --ns-border: #dbe2ea; /* Dividers and borders */

  /* Typography */
  --ns-font-body: system-ui, sans-serif;
  --ns-font-mono: ui-monospace, "Cascadia Code", monospace;

  /* Radius */
  --ns-radius-sm: 4px;
  --ns-radius-md: 8px;
  --ns-radius-lg: 12px;
  --ns-radius-xl: 16px;

  /* Shadows */
  --ns-shadow-sm: 0 1px 3px rgb(0 0 0 / 0.06);
  --ns-shadow-md: 0 4px 12px rgb(0 0 0 / 0.08);
}
```

## Rebranding

Override one or more variables after the NoStyle import:

```css
/* your-theme.css */
:root {
  --ns-primary: #7c3aed;
  --ns-primary-hover: #6d28d9;
  --ns-primary-ink: #ffffff;
  --ns-radius-md: 12px;
  --ns-radius-lg: 20px;
}
```

Every component and utility that references `--ns-primary` will pick up the new colour automatically.

## Dark Mode

Dark mode variables are declared under both a class and a media query:

```css
/* Triggered by data-theme="dark" attribute */
:root[data-theme="dark"] { ... }

/* Also responds to the OS preference */
@media (prefers-color-scheme: dark) { ... }
```

Toggle programmatically with JavaScript:

```js
// Force dark
document.documentElement.setAttribute("data-theme", "dark");

// Force light
document.documentElement.setAttribute("data-theme", "light");

// Follow the OS
document.documentElement.removeAttribute("data-theme");
```

## Scoped Overrides

You can scope overrides to a single component without touching globals:

```html
<div
  class="card p-6 rounded-xl"
  style="--ns-primary: #e11d48; --ns-radius-lg: 4px;"
>
  <button class="btn btn-primary">Custom Brand</button>
</div>
```

## Using Variables in Your Own CSS

You can consume any NoStyle token in your own styles, ensuring your custom components automatically adapt to theme changes:

```css
.my-badge {
  background: color-mix(in srgb, var(--ns-primary) 12%, transparent);
  color: var(--ns-primary);
  border: 1px solid color-mix(in srgb, var(--ns-primary) 25%, transparent);
  border-radius: var(--ns-radius-sm);
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}
```
