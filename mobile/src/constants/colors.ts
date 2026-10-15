// lucide icons take a `color` prop, not className, so the tab bar cannot tint them with
// text-primary. tailwind.config.js is the palette's source of truth; keep these in step.
// A cssInterop() wrapper in components/ui/ would remove the duplication.
export const tabIconColor = {
  active: '#0C1B16',
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
  selected: '#0C1B16',
} as const;

// The facts-row icons, and the photo placeholder underneath the image.
export const trekCardColor = {
  icon: '#0C1B16',
  placeholder: '#55685F',
} as const;

// The detail screen's stat, fact and back-button icons, and the photo placeholder.
export const tripDetailColor = {
  icon: '#0C1B16',
  placeholder: '#55685F',
} as const;

// The gear checklist's tick, drawn on a bg-primary box.
export const packingColor = {
  check: '#FFFFFF',
} as const;

// @gorhom/bottom-sheet styles its animated views through props, not className.
export const bottomSheetColor = {
  surface: '#FFFFFF',
  grab: '#D9D5CC',
  scrim: 'rgba(8, 20, 16, 0.42)',
} as const;

// The native slider only takes tint props.
export const sliderColor = {
  fill: '#0C1B16',
  track: '#E4E0D8',
  thumb: '#0C1B16',
} as const;

export const seasonColor = {
  containerBg: '#EBF0F8',
  cardBg: '#FFFFFF',
  ringColor: '#376BB6',
  ringOffset: '#EEF2F8',
  currentBadgeBorder: 'rgba(55, 107, 182, 0.25)',
  currentBadgeText: '#376BB6',
  currentDot: '#376BB6',
} as const;
