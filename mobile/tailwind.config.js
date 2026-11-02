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
        brand: '#8EB125',
        difficulty: {
          easy: '#047857',
          moderate: '#4D7C0F',
          challenging: '#B45309',
        },
        // Pack-weight bands on the gear checklist, all AA on white. Light keeps the web's
        // blue; the web's green and amber (#22c55e, #f59e0b) fail AA, so darker shades.
        load: {
          light: '#376BB6',
          optimal: '#047857',
          heavy: '#B45309',
          over: '#DC2626',
        },
        // The trivia game's sky and answer states. Fills and borders are the web's; its
        // green and red text on the sky (#5F7C0D 3.6:1, #EB542D 2.7:1) fail AA, so text
        // takes the -text shades, 4.6:1 and 4.9:1. Buttons are bg-brand with ink text,
        // since white on the web's #88B112 is 2.5:1.
        trivia: {
          sky: '#BDE4FA',
          // The hub's paler sky, as the web's home-page trivia.
          'hub-sky': '#C2E6FE',
          right: '#88B112',
          'right-tile': '#9BC331',
          'right-tint': '#F3F7E7',
          'right-text': '#4A6B00',
          wrong: '#EB542D',
          'wrong-tint': '#FFF0ED',
          'wrong-text': '#A8361A',
          // "OOPS" and the explanation's copy, 5.9:1 on the sky; muted is 4.4:1 there.
          slate: '#40545A',
          // Questions not reached yet, on the progress bar.
          pending: '#9CA3AF',
        },
      },
      // One family per weight: don't add font-bold or font-medium on top.
      fontFamily: {
        fraunces: ['Fraunces_700Bold'],
        poppins: ['Poppins_400Regular'],
        'poppins-medium': ['Poppins_500Medium'],
        'poppins-semibold': ['Poppins_600SemiBold'],
      },
    },
  },
  plugins: [],
};
