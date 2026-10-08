import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Duração de um ciclo completo. Maior = mais lento. */
  durationSeconds?: number;
  className?: string;
}

/**
 * Faixa em rolagem infinita. O conteúdo é duplicado e a animação percorre
 * -50%, então o ponto de emenda nunca aparece. A cópia fica aria-hidden.
 */
export function Marquee({ children, durationSeconds = 40, className = '' }: MarqueeProps) {
  return (
    <div className={`mask-fade-x group overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
