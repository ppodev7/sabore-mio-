import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface Offset {
  x: number;
  y: number;
}

/**
 * Deslocamento suave do ponteiro, normalizado em -1..1 e multiplicado por
 * `strength`. Usa rAF para não disparar layout a cada mousemove.
 */
export function useParallax<T extends HTMLElement>(strength = 14) {
  const ref = useRef<T | null>(null);
  const frame = useRef<number | null>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReduced) return;

    // Em telas de toque o parallax de ponteiro não faz sentido.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (event: MouseEvent) => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
        setOffset({ x: relativeX * strength, y: relativeY * strength });
      });
    };

    const onLeave = () => setOffset({ x: 0, y: 0 });

    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);

    return () => {
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [strength, prefersReduced]);

  return { ref, offset };
}
