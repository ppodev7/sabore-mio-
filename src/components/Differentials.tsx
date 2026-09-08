import { differentials } from '../data/differentials';
import { Reveal } from './Reveal';
import { BikeIcon, DoughIcon, FireIcon, LeafIcon } from './icons';

const ICONS = {
  dough: DoughIcon,
  leaf: LeafIcon,
  fire: FireIcon,
  bike: BikeIcon,
};

export function Differentials() {
  return (
    <section className="bg-olive-dark py-20 text-cream sm:py-24">
      <div className="container-app">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Diferenciais</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Por que escolher a Sabore Mio</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.id} delay={index * 80}>
                <div className="h-full rounded-2xl border border-cream/10 bg-cream/5 p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
