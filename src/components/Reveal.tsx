import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${isInView ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: isInView ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
