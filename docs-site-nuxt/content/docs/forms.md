---
title: Forms
description: Form controls and layout patterns in NoStyle.
previews:
  - title: Login Form
    code: |
      <form class="stack max-w-xl">
        <label class="font-medium text-sm">Email</label>
        <input class="input" type="email" placeholder="you@example.com" />
        <label class="font-medium text-sm">Password</label>
        <input class="input" type="password" placeholder="••••••••" />
        <button class="btn btn-primary" type="submit">Sign In</button>
      </form>
  - title: Textarea & Select
    code: |
      <div class="stack max-w-xl">
        <textarea class="textarea" placeholder="Write a message..."></textarea>
        <select class="select">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
---

# Forms

NoStyle provides `.input`, `.textarea`, and `.select` base classes with focus ring and border transitions. Use `.stack` or `.grid` utilities for layout.

```html
<input class="input" placeholder="Email" />
<textarea class="textarea" placeholder="Message"></textarea>
<select class="select">
  <option>Choose...</option>
</select>
```
