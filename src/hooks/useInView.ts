import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Fração do elemento visível para disparar (0–1). */
  threshold?: number;
  /** Margem do viewport, ex.: '0px 0px -12% 0px' antecipa o disparo. */
  rootMargin?: string;
  /** Desconecta após a primeira entrada — padrão para revelações. */
  once?: boolean;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sem suporte a IntersectionObserver, mostra o conteúdo imediatamente.
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
