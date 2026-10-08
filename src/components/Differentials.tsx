import { differentials } from '../data/differentials';
import type { DifferentialIcon } from '../data/differentials';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { BikeIcon, DoughIcon, FireIcon, LeafIcon } from './icons';
import type { ComponentType, SVGProps } from 'react';

const ICONS: Record<DifferentialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  dough: DoughIcon,
  leaf: LeafIcon,
  fire: FireIcon,
  bike: BikeIcon,
};

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-forest-800 py-24 text-cream sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que a nossa pizza é diferente"
          highlight={['é', 'diferente']}
          tone="dark"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.id} delay={index * 110}>
                <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:border-gold/40 hover:bg-cream/[0.07]">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-light transition-colors duration-500 group-hover:bg-gold group-hover:text-forest-800">
                    <Icon className="h-7 w-7" />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-gold/40 opacity-0 transition-opacity duration-500 group-hover:animate-ring-pulse group-hover:opacity-100"
                    />
                  </span>

                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
