import mascote from '../assets/mascote.jpg';
import pizzaAbout from '../assets/pizza-1.jpg';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 sm:py-28">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <img
            src={pizzaAbout}
            alt="Pizza de brócolis com bacon sendo preparada na cozinha da Sabore Mio"
            className="w-full rounded-2xl object-cover shadow-card"
          />
          <img
            src={mascote}
            alt="Mascote Sabore Mio segurando a bandeira do Brasil"
            className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full border-4 border-cream bg-olive-dark object-cover shadow-card sm:h-36 sm:w-36"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-widest text-tomato">Sobre a Sabore Mio</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-olive-dark sm:text-4xl">
            Pizza artesanal, feita com carinho e do seu jeito
          </h2>
          <p className="mt-4 text-olive-dark/70">
            Nascemos da vontade de servir pizzas de verdade: massa de fermentação natural descansada por horas,
            ingredientes frescos selecionados toda semana e um forno a lenha que dá aquele sabor defumado inconfundível.
          </p>
          <p className="mt-4 text-olive-dark/70">
            Mais do que um cardápio fixo, acreditamos em pizzas personalizadas — você escolhe a combinação e a gente
            cuida do resto, com a mesma atenção de sempre.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
