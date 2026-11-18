import gsap from 'gsap';

const HEART_PATH =
  'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';
const SIZE = 28;

/** Marks the element a saved heart flies to (the navbar's account menu). */
export const HEART_TARGET_ATTR = 'data-heart-target';

/**
 * Confirms a save: the heart on `source` pops, then a copy flies to the
 * account menu in the navbar, where Saved Trips lives. Does nothing when the
 * visitor prefers reduced motion, or when `source` is no longer on the page.
 */
export function flyHeart(source: HTMLElement | null | undefined): void {
  if (!source?.isConnected) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const from = source.getBoundingClientRect();
  const target = document.querySelector<HTMLElement>(`[${HEART_TARGET_ATTR}]`);

  gsap.fromTo(
    source,
    { scale: 1 },
    {
      scale: 1.25,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      clearProps: 'transform',
    },
  );

  const startX = from.left + from.width / 2 - SIZE / 2;
  const startY = from.top + from.height / 2 - SIZE / 2;

  const heart = document.createElement('div');
  heart.setAttribute('aria-hidden', 'true');
  heart.style.cssText = `position:fixed;left:${startX}px;top:${startY}px;width:${SIZE}px;height:${SIZE}px;z-index:100;pointer-events:none;`;
  heart.innerHTML = `<svg viewBox="0 0 24 24" width="${SIZE}" height="${SIZE}" fill="#F0605D" stroke="#F0605D" stroke-width="2" stroke-linejoin="round"><path d="${HEART_PATH}"/></svg>`;
  document.body.appendChild(heart);

  const to = target?.getBoundingClientRect();
  // With no target on screen, drift up and fade instead.
  const dx = to ? to.left + to.width / 2 - SIZE / 2 - startX : 0;
  const dy = to ? to.top + to.height / 2 - SIZE / 2 - startY : -80;

  const done = () => {
    heart.remove();
    if (target) {
      gsap.fromTo(
        target,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          clearProps: 'transform',
        },
      );
    }
  };

  // Separate x and y easing curves the path into an arc.
  gsap.set(heart, { scale: 1.3, opacity: 1 });
  gsap.to(heart, {
    x: dx,
    duration: 0.8,
    ease: 'power1.inOut',
    onComplete: done,
  });
  gsap.to(heart, { y: dy, duration: 0.8, ease: 'power2.in' });
  gsap.to(heart, {
    scale: 0.6,
    opacity: to ? 0.9 : 0,
    duration: 0.8,
    ease: 'power1.in',
  });
}
