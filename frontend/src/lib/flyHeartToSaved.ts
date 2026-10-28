/** Marks the navbar control that leads to Saved Trips (the account menu). */
export const SAVED_TARGET_ATTR = 'data-saved-target';

const HEART_SIZE = 28;
const FLIGHT_MS = 700;
const HEART_PATH =
  'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';

function center(rect: DOMRect) {
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

/**
 * Sends a heart from `source` to the navbar's account menu, where Saved Trips
 * lives, then bumps that control as it lands. Does nothing when the traveller
 * prefers reduced motion or the account menu is not on screen.
 */
export function flyHeartToSaved(source: Element | null): void {
  if (!source || typeof document === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const target = document.querySelector(`[${SAVED_TARGET_ATTR}]`);
  if (!target) return;

  const to = target.getBoundingClientRect();
  if (to.width === 0 || to.bottom < 0 || to.top > window.innerHeight) return;

  const start = center(source.getBoundingClientRect());
  const end = center(to);
  const half = HEART_SIZE / 2;

  const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  heart.setAttribute('viewBox', '0 0 24 24');
  heart.setAttribute('width', String(HEART_SIZE));
  heart.setAttribute('height', String(HEART_SIZE));
  heart.setAttribute('aria-hidden', 'true');
  heart.setAttribute('fill', '#F0605D');
  heart.setAttribute('stroke', '#F0605D');
  heart.setAttribute('stroke-width', '2');
  heart.setAttribute('stroke-linecap', 'round');
  heart.setAttribute('stroke-linejoin', 'round');
  heart.style.cssText =
    'position:fixed;left:0;top:0;z-index:9999;pointer-events:none;will-change:transform,opacity;filter:drop-shadow(0 2px 4px rgba(0,0,0,.25))';
  heart.innerHTML = `<path d="${HEART_PATH}"/>`;
  document.body.appendChild(heart);

  const at = (x: number, y: number, scale: number, tilt: number) =>
    `translate(${x - half}px, ${y - half}px) scale(${scale}) rotate(${tilt}deg)`;
  // Every point sits on the straight line from button to menu; the fun comes
  // from the heart swelling and tilting on the way, not from detouring.
  const along = (progress: number) => ({
    x: start.x + (end.x - start.x) * progress,
    y: start.y + (end.y - start.y) * progress,
  });
  const early = along(0.35);
  const late = along(0.7);

  const flight = heart.animate(
    [
      { transform: at(start.x, start.y, 0.6, 0), opacity: 0.9 },
      { transform: at(early.x, early.y, 1.25, -14), opacity: 1, offset: 0.35 },
      { transform: at(late.x, late.y, 0.9, 12), opacity: 1, offset: 0.7 },
      { transform: at(end.x, end.y, 0.4, 0), opacity: 0.85 },
    ],
    { duration: FLIGHT_MS, easing: 'ease-in-out' },
  );

  flight.onfinish = () => {
    heart.remove();
    target.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.18)', offset: 0.4 },
        { transform: 'scale(1)' },
      ],
      { duration: 300, easing: 'ease-out' },
    );
  };
  flight.oncancel = () => heart.remove();
}
