import kitchenPhoto from '../assets/pizza-1.jpg';
import ovenPhoto from '../assets/pizza-5.jpg';
import { Button } from './ui/Button';
import { Mascot } from './ui/Mascot';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function About() {
  return (
    <section id="sobre" className="bg-cream py-24 sm:py-32">
      <div className="container-app grid items-center gap-16 lg:grid-cols-2">
        {/* Composição de duas fotos reais + mascote.
            As fotos são verticais e feitas na cozinha: o recorte com
            object-bottom mantém a pizza em quadro e corta o fundo escuro. */}
        <div className="relative order-2 pb-14 lg:order-1">
          <Reveal variant="left" duration={1100}>
            <img
              src={kitchenPhoto}
              alt="Pizza de brócolis com bacon na tábua, recém-tirada do forno na cozinha da Sabore Mio"
              className="aspect-square w-full rounded-[1.75rem] object-cover object-bottom shadow-card"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            variant="scale"
            delay={240}
            className="absolute -right-2 bottom-0 w-36 sm:-right-6 sm:w-48"
          >
            <img
              src={ovenPhoto}
              alt="Detalhe da borda alta e tostada de uma pizza assada no forno a lenha"
              className="aspect-square w-full rounded-2xl border-4 border-cream object-cover object-center shadow-float"
              loading="lazy"
            />
          </Reveal>

          <Mascot className="absolute -left-4 -top-8 h-24 w-24 sm:h-28 sm:w-28" />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre a Sabore Mio"
            title="Receita tradicional, pizza do seu jeito"
            highlight={['do', 'seu', 'jeito']}
            align="left"
          />

          <Reveal delay={220}>
            <p className="mt-6 leading-relaxed text-forest-700/75">
              Desde 1985 fazemos pizza do mesmo jeito: massa de fermentação natural descansada por
              48 horas, ingredientes frescos selecionados toda semana e um forno a lenha de tijolo
              refratário que dá o sabor defumado que ninguém consegue imitar.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-4 leading-relaxed text-forest-700/75">
              Mais do que um cardápio fixo, acreditamos em pizzas personalizadas. Você escolhe a
              combinação e a gente cuida do resto, com a mesma atenção de quatro décadas atrás.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <figure className="mt-8 border-l-2 border-gold pl-6">
              <blockquote className="font-display text-lg italic leading-relaxed text-forest-800">
                “Pizza boa não tem atalho. Tem tempo, fogo e ingrediente de verdade.”
              </blockquote>
              <figcaption className="mt-3 text-xs font-bold uppercase tracking-widest text-forest-700/50">
                Nonno Giuseppe · fundador
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={520}>
            <div className="mt-9">
              <Button href="#cardapio" variant="outline">
                Conhecer o cardápio
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
