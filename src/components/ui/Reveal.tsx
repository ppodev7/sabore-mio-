import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

const INITIAL_TRANSFORM: Record<RevealVariant, string> = {
  up: 'translate3d(0, 36px, 0)',
  down: 'translate3d(0, -28px, 0)',
  left: 'translate3d(-36px, 0, 0)',
  right: 'translate3d(36px, 0, 0)',
  scale: 'scale(0.94)',
  fade: 'none',
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  /** Atraso em ms — use para escalonar listas. */
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Revela o conteúdo quando ele entra no viewport. O estado inicial vive em
 * CSS (.reveal), então o `<noscript>` do index.html consegue neutralizá-lo
 * caso o JS não execute.
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 900,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`reveal ${isInView ? 'reveal-visible' : ''} ${className}`}
      style={{
        transform: isInView ? undefined : INITIAL_TRANSFORM[variant],
        filter: isInView ? undefined : 'blur(6px)',
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
