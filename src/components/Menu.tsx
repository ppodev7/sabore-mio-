import { menu } from '../data/menu';
import { PizzaCard } from './PizzaCard';
import { Reveal } from './Reveal';

export function Menu() {
  return (
    <section id="cardapio" className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-tomato">Cardápio</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-olive-dark sm:text-4xl">
            Feitas na hora, do jeito que você gosta
          </h2>
          <p className="mt-3 text-olive-dark/70">
            Uma seleção dos nossos sabores mais pedidos. Todas as pizzas podem ser personalizadas com os ingredientes que você preferir.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((pizza, index) => (
            <Reveal key={pizza.id} delay={index * 80}>
              <PizzaCard pizza={pizza} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
