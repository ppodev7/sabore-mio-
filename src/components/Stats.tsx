import { stats } from '../data/stats';
import type { Stat } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp(stat.value, isInView, 1500 + index * 150);

  // Valores com decimal são guardados inteiros (49 → 4,9) para contar liso.
  const display = stat.decimals
    ? (count / 10 ** stat.decimals).toFixed(stat.decimals).replace('.', ',')
    : count.toLocaleString('pt-BR');

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-none text-gold-light">
        {display}
        <span className="text-gold">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-forest-800 py-16 sm:py-20">
      <div className="container-app grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}
