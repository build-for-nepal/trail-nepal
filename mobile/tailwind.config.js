/**
 * NativeWind 4 is a Tailwind v3 product. Do not align this with frontend/'s Tailwind v4.
 *
 * Palette is from mobile/design/bottom-nav.html, not the web brand tokens. Those live in
 * frontend/src/app/globals.css as oklch, which React Native cannot parse, so they still
 * need mirroring here as hex.
 *
 * Light theme only. Dark values were removed rather than left unused; bottom-nav.html
 * still documents them.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: '#0C1B16',
        // Monochrome accent, same as ink, chosen 2026-10-02 over teal and the mockup's #125B42.
        // Kept as its own token so selected states can take a colour again in one edit.
        primary: '#0C1B16',
        accent: '#E0762B',
        surface: '#FFFFFF',
        border: '#E4E0D8',
        // 6.0:1 on white. The mockup's original #6B7F76 was 4.3:1 and failed AA.
        muted: '#55685F',
        sand: '#F6F3EE',
        field: '#ECE9E3',
      },
    },
  },
  plugins: [],
};
