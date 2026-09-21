# AGENTS.md

## IMPORTANT

Read and follow this file before making any changes.

The existing codebase is the source of truth.

**Do not invent new patterns when an existing pattern already exists.**

---

## General Rules

- Make the smallest change necessary to complete the task.
- Do not modify unrelated files.
- Do not refactor unrelated code.
- Do not rewrite working code unnecessarily.
- Preserve existing comments.
- Preserve existing functionality unless the task explicitly requires changing it.
- Reuse existing components, utilities, hooks, and patterns.
- Inspect the existing code before creating anything new.
- Do not introduce new architecture unless explicitly required.

---

# UI & Layout

## IMPORTANT

**Do NOT design the layout from scratch if an existing page or component can be used as a reference.**

Before implementing UI:

1. Find the closest existing page/component.
2. Inspect its implementation.
3. Reuse its structure.
4. Reuse its components.
5. Reuse its spacing.
6. Reuse its typography.
7. Reuse its responsive behavior.
8. Only change what the task actually requires.

The result should look like it belongs to the existing application.

Do not create a completely new visual language.

---

# Tailwind CSS

## REQUIRED

**Use Tailwind CSS for styling.**

Tailwind is the project's primary styling system.

### DO

Use Tailwind utility classes:

```tsx
<div className="flex items-center gap-4 rounded-lg p-4">
```

Use existing Tailwind classes and project design tokens whenever possible.

Follow the existing Tailwind patterns already present in the codebase.

### DO NOT

**Do NOT create CSS Module files.**

Do not create:

```text
Component.module.css
Component.module.scss
styles.module.css
```

Do not create standalone CSS files for component styling.

Do not create:

```text
Component.css
styles.css
```

unless the task explicitly requires a global stylesheet.

Do not create styled-components or another CSS-in-JS solution.

Do not introduce another styling system.

Do not replace Tailwind with CSS modules.

### Never do this

```tsx
import styles from "./Component.module.css";

<div className={styles.container}>
```

Instead:

```tsx
<div className="flex flex-col gap-4">
```

---

# Styling Priority

When styling a component, use this order:

1. Existing shared component
2. Existing Tailwind classes/patterns
3. Existing project design tokens
4. Tailwind utility classes
5. Only as an absolute last resort, an existing project-approved styling mechanism

**Do not create a new styling mechanism.**

---

# Avoid Arbitrary Tailwind Values

Prefer existing Tailwind values:

```tsx
className = 'mt-4 px-6 gap-4';
```

instead of:

```tsx
className = 'mt-[17px] px-[23px] gap-[13px]';
```

Use arbitrary values only when they are genuinely required for pixel-accurate implementation and there is no appropriate existing token/value.

Do not use arbitrary values simply because they are convenient.

---

# Inline Styles

Avoid:

```tsx
style={{
  marginTop: 16,
  display: "flex",
}}
```

Prefer Tailwind:

```tsx
className = 'mt-4 flex';
```

Do not use inline styles when the same result can be achieved with Tailwind.

---

# Component Reuse

Before creating a new component:

- Search the repository for similar components.
- Search shared component directories.
- Search the existing design system.
- Search for similar UI patterns.

If an existing component can be reused, reuse it.

Do not duplicate:

- Buttons
- Modals
- Inputs
- Selects
- Cards
- Popovers
- Dropdowns
- Tables
- Layout containers
- Typography components

unless there is a real reason.

---

# TypeScript

- Use TypeScript properly.
- Do not use `any`.
- Do not weaken existing types.
- Reuse existing types when possible.
- Do not create duplicate types unnecessarily.
- Avoid unnecessary type assertions.

Never introduce:

```ts
const data: any = ...
```

Find or create the correct type instead.

---

# React

Follow the existing React architecture.

- Reuse existing hooks.
- Reuse existing state management.
- Reuse existing data-fetching patterns.
- Reuse existing utilities.
- Follow existing component composition patterns.
- Do not introduce a new state-management library.
- Do not introduce unnecessary `useEffect`.
- Do not introduce unnecessary abstraction.

---

# Responsive Design

Follow the existing responsive patterns.

Before adding responsive classes:

1. Inspect nearby components.
2. Check which breakpoints are already being used.
3. Follow the existing breakpoint conventions.

Do not invent new breakpoints unless necessary.

---

# File Creation

Before creating a new file, ask:

**Does this actually need to be a new file?**

Prefer modifying/reusing an existing file when appropriate.

For UI styling specifically:

**NEVER create a CSS Module file.**

Do not create:

```text
*.module.css
*.module.scss
```

for styling.

Use Tailwind in the component instead.

---

# Minimal Diff

Keep changes focused.

If the task requires changing one component:

Do:

```text
Component.tsx
```

and only the supporting files that are genuinely required.

Do not:

```text
Component.tsx
Component.module.css
newStyles.css
newUtils.ts
newHook.ts
```

just to implement a relatively simple UI change.

Avoid unnecessary files.

---

# Existing Design System

If the repository contains shared components or a design system, use it.

For example:

```text
carepilot-components
```

should be preferred over creating duplicate components.

Before implementing a UI element, search for an existing equivalent.

---

# Design Reference

If the user provides or references an existing page/component as a design reference:

**That implementation is the source of truth.**

Do not create your own interpretation.

Match:

- Layout
- Spacing
- Typography
- Colors
- Borders
- Radius
- Shadows
- Component hierarchy
- Responsive behavior
- Interactions

Only change the parts explicitly requested.

---

# Do Not Redesign

Unless the user explicitly asks for a redesign:

- Do not change colors.
- Do not change typography.
- Do not change spacing.
- Do not change component sizes.
- Do not change layout structure.
- Do not add animations.
- Do not add gradients.
- Do not add decorative elements.
- Do not introduce new UI patterns.

The goal is to implement the request, not redesign the application.

---

# Before Coding

Always perform this process:

```text
Read AGENTS.md
      ↓
Inspect relevant files
      ↓
Search for similar implementations
      ↓
Find reusable components
      ↓
Identify existing layout/styling pattern
      ↓
Implement using existing patterns
      ↓
Verify the change
```

Do not skip the repository inspection step.

---

# Verification

After implementation:

- Check TypeScript errors.
- Check imports.
- Check Tailwind classes.
- Check that no unnecessary CSS/module files were created.
- Check that existing components were reused where appropriate.
- Check that unrelated files were not modified.
- Check that the implementation follows the existing design.

Do not run browser tests unless explicitly requested.

---

# Final Response

Keep the final response concise.

Mention:

1. What changed.
2. Existing components/patterns reused.
3. Any important implementation detail.
4. Verification performed.

Do not provide unnecessary explanations.

---

# Non-Negotiable Rules

These rules should always be followed:

**1. Use Tailwind for component styling.**

**2. Do NOT create CSS Module files.**

**3. Do NOT create standalone CSS files for component styling.**

**4. Reuse existing components before creating new ones.**

**5. Inspect the existing code before designing a solution.**

**6. Use existing pages/components as layout references.**

**7. Do not redesign unless explicitly asked.**

**8. Do not use `any`.**

**9. Keep diffs small.**

**10. Do not modify unrelated code.**
