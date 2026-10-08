import type { FeaturedPizza } from '../types/menu';
import { formatPrice } from '../utils/format';

interface FeaturedCardProps {
  pizza: FeaturedPizza;
}

/** Card grande de sabor em destaque, com foto de produto. */
export function FeaturedCard({ pizza }: FeaturedCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-100 shadow-card transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={`Pizza ${pizza.name}`}
          className="h-64 w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.07] sm:h-72"
          loading="lazy"
          width={1183}
          height={887}
        />

        {/* Véu que escurece de baixo para cima no hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {pizza.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-wine shadow-soft backdrop-blur-sm">
            {pizza.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight text-forest-800">
            {pizza.name}
          </h3>
          <span className="whitespace-nowrap font-display text-2xl font-semibold text-wine">
            {formatPrice(pizza.price)}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/70">{pizza.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {pizza.ingredients.map((ingredient) => (
            <li
              key={ingredient}
              className="rounded-full border border-forest/15 px-3 py-1 text-[11px] font-semibold text-forest-700/80"
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
