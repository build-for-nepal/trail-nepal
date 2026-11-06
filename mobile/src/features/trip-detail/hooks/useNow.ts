import { useEffect, useState } from 'react';

/** The time in ms, updated every minute, for labels like 'Updated 5 min ago'. */
export function useNow(): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  return now;
}
