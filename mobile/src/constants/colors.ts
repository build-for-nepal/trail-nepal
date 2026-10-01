// lucide icons take a `color` prop, not className, so the tab bar cannot tint them with
// text-primary. tailwind.config.js is the palette's source of truth; keep these in step.
// A cssInterop() wrapper in components/ui/ would remove the duplication.
export const tabIconColor = {
  active: '#125B42',
  inactive: '#55685F',
} as const;

// TextInput's placeholderTextColor is a prop as well: the installed NativeWind maps only
// className onto TextInput's style. Kept at muted because a lighter grey fails AA on bg-field.
export const searchBarColor = {
  icon: '#55685F',
  placeholder: '#55685F',
} as const;

export const filterBarColor = {
  icon: '#0C1B16',
} as const;
