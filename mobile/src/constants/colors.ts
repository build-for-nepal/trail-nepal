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

// White on the web's forecast blue (--color-forecast-card), 5.3:1. Secondary text is 90%
// white, 4.66:1; 85% is 4.36:1 and the web's 55-70% lower still, all short of AA's 4.5:1.
// Controls darken the blue, so white on them is 6.8:1, where a white tint gave 4.0:1.
export const forecastColor = {
  card: '#376BB6',
  text: '#FFFFFF',
  muted: 'rgba(255, 255, 255, 0.9)',
  divider: 'rgba(255, 255, 255, 0.18)',
  control: 'rgba(0, 0, 0, 0.15)',
  controlBorder: 'rgba(255, 255, 255, 0.45)',
  placeholder: 'rgba(255, 255, 255, 0.16)',
  fresh: '#6EE7B7',
  stale: '#FCD34D',
} as const;
