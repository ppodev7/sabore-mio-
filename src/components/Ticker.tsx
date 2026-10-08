import { tickerItems } from '../data/differentials';
import { Marquee } from './ui/Marquee';

/** Faixa escura em rolagem contínua, logo abaixo do hero. */
export function Ticker() {
  return (
    <div className="border-y border-forest-600/40 bg-forest-800 py-4">
      <Marquee durationSeconds={38}>
        {tickerItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="px-7 text-[11px] font-bold uppercase tracking-ultra-wide text-cream/80">
              {item}
            </span>
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
