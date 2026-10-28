import { useRef, useState } from 'react';
import { flyHeartToSaved } from '@/lib/flyHeartToSaved';

/**
 * Drives the celebration after a traveller saves a trip: the heart pops and a
 * copy flies up to the navbar's Saved Trips menu. It is tied to the click, not
 * to the saved state, so hearts that are already saved when the page loads
 * stay still. Attach `anchorRef` to the button that was clicked.
 */
export function useHeartPop() {
  const [popping, setPopping] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  return {
    popping,
    anchorRef,
    pop: () => {
      setPopping(true);
      flyHeartToSaved(anchorRef.current);
    },
    onAnimationEnd: () => setPopping(false),
  };
}
