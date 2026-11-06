// The web's rules, from frontend/src/components/details/altitudeSickness/
// ContactInfoSidebar.tsx and TreksAltitudeSickness.tsx.

/**
 * A trek's maximum altitude as written, e.g. '5,545m' or '3,660 m', as a number and its unit.
 * The web's own reading misses the spaced form, so Shey Phoksundo and Tilicho get no risk
 * badge there; this reads both.
 */
export function parseElevation(
  text: string,
): { metres: number; unit: string } | null {
  const match = text.trim().match(/^([\d,.]+)\s*([a-zA-Z]+)$/);
  if (!match) return null;
  const metres = Number(match[1].replace(/,/g, ''));
  return Number.isFinite(metres) ? { metres, unit: match[2] } : null;
}

export type RiskLevel = 'low' | 'moderate' | 'high' | 'extreme';

/**
 * How risky a trek's highest point is, worded as the web words it. High and extreme risk
 * pulse, to draw the eye. None below 2,000 m.
 */
export function altitudeRisk(
  metres: number,
): { level: RiskLevel; label: string; pulse: boolean } | null {
  if (metres >= 5000) {
    return {
      level: 'extreme',
      label: 'Extreme risk above 5,000m with AMS & HACE',
      pulse: true,
    };
  }
  if (metres >= 4000) {
    return { level: 'high', label: 'High risk above 4000m', pulse: true };
  }
  if (metres >= 3000) {
    return {
      level: 'moderate',
      label: 'moderate risk above 3000m',
      pulse: false,
    };
  }
  if (metres >= 2000) {
    return { level: 'low', label: 'low risk above 2000m', pulse: false };
  }
  return null;
}

export type SeverityTone = 'mild' | 'moderate' | 'severe';

/** A severity level's colour, from its name: "Possible HAPE" is mild, "Probable" moderate. */
export function severityTone(level: string): SeverityTone {
  const name = level.toLowerCase();
  if (name.includes('mild') || name.includes('possible')) return 'mild';
  if (name.includes('moderate') || name.includes('probable')) return 'moderate';
  return 'severe';
}

/** The numbers in a contact's phone list, each one something to dial. */
export function phoneNumbers(text: string): string[] {
  return text
    .split(',')
    .map((number) => number.trim())
    .filter(Boolean);
}

/**
 * The illness panels left open after a tap on `index`, by position. Any number can be open,
 * but never none: closing the last open one opens the panel at the other end instead.
 */
export function toggledPanels(
  open: readonly number[],
  index: number,
  count: number,
): number[] {
  if (!open.includes(index)) return [...open, index];
  if (open.length > 1) return open.filter((panel) => panel !== index);
  return [index === count - 1 ? 0 : count - 1];
}
