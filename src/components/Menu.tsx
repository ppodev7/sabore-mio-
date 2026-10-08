import { featuredPizzas, menuFlavors } from '../data/menu';
import { formatPrice } from '../utils/format';
import { FeaturedCard } from './FeaturedCard';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Menu() {
  return (
    <section id="cardapio" className="bg-cream py-24 sm:py-32">
      <div className="container-app">
        <SectionHeading
          eyebrow="Cardápio"
          title="Os clássicos da casa"
          highlight={['da', 'casa']}
          description="Todas as pizzas saem do forno a lenha e podem ser personalizadas com os ingredientes que você preferir."
        />

        {/* Destaques com foto de produto */}
        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {featuredPizzas.map((pizza, index) => (
            <Reveal key={pizza.id} variant={index === 0 ? 'left' : 'right'} delay={index * 140}>
              <FeaturedCard pizza={pizza} />
            </Reveal>
          ))}
        </div>

        {/* Demais sabores em lista tipográfica */}
        <div className="mt-20">
          <Reveal variant="fade">
            <h3 className="flex items-center gap-4 font-display text-xl font-semibold text-forest-800">
              <span className="whitespace-nowrap">Outros sabores</span>
              <span aria-hidden="true" className="h-px w-full bg-gold-line opacity-60" />
            </h3>
          </Reveal>

          <ul className="mt-9 grid gap-x-14 gap-y-7 sm:grid-cols-2">
            {menuFlavors.map((flavor, index) => (
              <Reveal key={flavor.id} as="li" delay={index * 70}>
                <div className="group">
                  <div className="flex items-baseline gap-3">
                    <h4 className="font-display text-lg font-semibold text-forest-800 transition-colors duration-300 group-hover:text-wine">
                      {flavor.name}
                    </h4>
                    {/* Linha pontilhada que liga o nome ao preço */}
                    <span
                      aria-hidden="true"
                      className="mb-1 h-px flex-1 border-b border-dotted border-forest/25"
                    />
                    <span className="font-display text-lg font-semibold text-wine">
                      {formatPrice(flavor.price)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-700/65">
                    {flavor.ingredients}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-4 rounded-[1.75rem] border border-forest/10 bg-cream-200 px-8 py-10 text-center">
            <p className="font-display text-xl font-semibold text-forest-800 sm:text-2xl">
              Não achou a combinação que queria?
            </p>
            <p className="max-w-md text-sm text-forest-700/70">
              Monte a sua pizza do zero com a gente. Você escolhe os ingredientes, nós cuidamos do
              resto.
            </p>
            <Button href="#contato" className="mt-2">
              Montar minha pizza
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
