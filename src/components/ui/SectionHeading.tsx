import { Reveal } from './Reveal';
import { SplitText } from './SplitText';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Palavras do título a destacar em itálico/vinho. */
  highlight?: string[];
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
}

/** Cabeçalho de seção: sobrelinha, filete dourado, título e apoio. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  highlight = [],
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={`max-w-2xl ${isCentered ? 'mx-auto text-center' : ''}`}>
      <Reveal variant="fade">
        <span
          className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-ultra-wide ${
            isCentered ? 'justify-center' : ''
          } ${isDark ? 'text-gold-light' : 'text-wine'}`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
          {eyebrow}
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
        </span>
      </Reveal>

      <h2
        className={`mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.12] text-balance ${
          isDark ? 'text-cream' : 'text-forest-800'
        }`}
      >
        <SplitText text={title} highlight={highlight} />
      </h2>

      {description && (
        <Reveal delay={160}>
          <p className={`mt-5 text-base leading-relaxed ${isDark ? 'text-cream/70' : 'text-forest-700/70'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
