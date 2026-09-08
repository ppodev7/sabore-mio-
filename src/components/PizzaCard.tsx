import type { Pizza } from '../types/menu';

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={`Pizza ${pizza.name}`}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {pizza.tags?.[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-olive-dark shadow-sm">
            {pizza.tags[0]}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-olive-dark">{pizza.name}</h3>
          <span className="whitespace-nowrap font-display text-lg font-semibold text-tomato">
            {priceFormatter.format(pizza.price)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-olive-dark/70">{pizza.description}</p>
      </div>
    </article>
  );
}
