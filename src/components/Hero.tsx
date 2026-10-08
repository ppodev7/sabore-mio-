import heroPizza from '../assets/pizza1.jpeg';
import { useParallax } from '../hooks/useParallax';
import { Button } from './ui/Button';
import { Mascot } from './ui/Mascot';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(18);

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream-fade pt-28 sm:pt-32">
      {/* Halos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-forest/10 blur-3xl"
      />

      <div
        ref={ref}
        className="container-app relative grid items-center gap-14 pb-20 sm:pb-28 lg:grid-cols-[1fr_1.05fr] lg:gap-10"
      >
        <div className="relative z-10 text-center lg:text-left">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-cream/60 px-4 py-2 text-[10px] font-bold uppercase tracking-ultra-wide text-wine backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Pizzaria artesanal
            </span>
          </Reveal>

          <h1 className="mt-7 font-display text-[clamp(2.4rem,6.2vw,4.4rem)] font-semibold leading-[1.04] text-forest-800 text-balance">
            <SplitText text="Pizzas com" />
            <br />
            <SplitText text="sabor de verdade" delay={180} highlight={['sabor', 'de', 'verdade']} />
            <br />
            <SplitText text="do jeito que você pedir" delay={420} />
          </h1>

          <Reveal delay={620}>
            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-forest-700/75 sm:text-lg lg:mx-0">
              Massa de fermentação natural de 48 horas, ingredientes frescos e forno a lenha. Cada
              pizza é montada na hora, do seu jeito.
            </p>
          </Reveal>

          <Reveal delay={740}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button href="#cardapio">Ver cardápio</Button>
              <Button href="#contato" variant="outline">
                Fazer pedido
              </Button>
            </div>
          </Reveal>

          <Reveal delay={860}>
            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-forest-700/70">
                <strong className="font-bold text-forest-800">4,9</strong> · mais de 500 avaliações
              </p>
            </div>
          </Reveal>
        </div>

        {/* Foto de produto com parallax de ponteiro */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-md transition-transform duration-500 ease-out"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
          >
            {/* Moldura dourada deslocada atrás da foto */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />

            <Reveal variant="scale" duration={1100}>
              <img
                src={heroPizza}
                alt="Pizza de pepperoni artesanal com manjericão fresco, servida em tábua de madeira"
                className="relative h-[20rem] w-full rounded-[2rem] object-cover shadow-float sm:h-[26rem] lg:h-[30rem]"
                loading="eager"
                fetchPriority="high"
                width={1183}
                height={887}
              />
            </Reveal>

            {/* Selo de fermentação */}
            <div
              className="absolute left-0 top-6 rounded-2xl bg-cream/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-left-10"
              style={{ transform: `translate3d(${offset.x * -1.6}px, ${offset.y * -1.6}px, 0)` }}
            >
              <p className="font-display text-2xl font-semibold leading-none text-wine">48h</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-forest-700/60">
                fermentação
              </p>
            </div>

            <Mascot className="absolute -bottom-7 -left-6 h-24 w-24 sm:h-32 sm:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
