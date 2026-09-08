import mascote from '../assets/mascote.jpg';
import pizzaHero from '../assets/pizza-3.jpg';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="container-app grid items-center gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-olive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-olive">
            Pizzaria artesanal
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-olive-dark sm:text-5xl lg:text-6xl">
            Pizzas com <span className="italic text-tomato">sabor de verdade</span>, do jeito que você pedir
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-olive-dark/70 sm:text-lg lg:mx-0">
            Massa de fermentação natural, ingredientes frescos e forno a lenha. Cada pizza é montada na hora, do seu jeito.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#cardapio"
              className="w-full rounded-full bg-tomato px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-tomato-dark sm:w-auto"
            >
              Ver cardápio
            </a>
            <a
              href="#contato"
              className="w-full rounded-full border-2 border-olive/20 px-8 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-olive-dark transition-colors hover:border-olive hover:bg-olive/5 sm:w-auto"
            >
              Fazer pedido
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gold/20 blur-3xl" />
            <img
              src={pizzaHero}
              alt="Pizza artesanal de pepperoni com manjericão fresco e parmesão, recém-saída do forno a lenha"
              className="h-72 w-72 rounded-[2rem] object-cover shadow-card sm:h-96 sm:w-96"
              loading="eager"
            />
            <img
              src={mascote}
              alt="Mascote da Sabore Mio, uma pizza animada com chapéu de chef e avental"
              className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border-4 border-cream bg-olive-dark object-cover shadow-card sm:h-32 sm:w-32"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
