import { useInView } from '../../hooks/useInView';

interface SplitTextProps {
  text: string;
  className?: string;
  /** Atraso antes da primeira palavra, em ms. */
  delay?: number;
  /** Intervalo entre palavras, em ms. */
  stagger?: number;
  /** Palavras destacadas em itálico/vinho — comparação exata, sem acento perdido. */
  highlight?: string[];
}

/**
 * Título revelado palavra a palavra. O texto completo fica no aria-label e as
 * palavras são aria-hidden, então leitores de tela leem uma frase só.
 */
export function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 55,
  highlight = [],
}: SplitTextProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const words = text.split(' ');
  const highlighted = new Set(highlight);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span
            aria-hidden="true"
            className={`inline-block transition-all duration-700 ease-out-expo ${
              highlighted.has(word) ? 'italic text-wine' : ''
            }`}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transitionDelay: `${delay + index * stagger}ms`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
