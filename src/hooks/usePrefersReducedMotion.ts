import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** Respeita a preferência do sistema por menos movimento. */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    setPrefersReduced(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
}
