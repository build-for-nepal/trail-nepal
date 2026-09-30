// lucide icons take a `color` prop, not className, so the tab bar cannot tint them with
// text-primary. tailwind.config.js is the palette's source of truth; keep these in step.
// A cssInterop() wrapper in components/ui/ would remove the duplication.
export const tabIconColor = {
  active: '#125B42',
  inactive: '#55685F',
} as const;
