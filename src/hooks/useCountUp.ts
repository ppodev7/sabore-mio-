import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Conta de 0 até `target` quando `start` vira true. */
export function useCountUp(target: number, start: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, prefersReduced]);

  return value;
}
