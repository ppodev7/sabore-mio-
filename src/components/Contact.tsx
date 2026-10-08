import { contact } from '../data/contact';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { ClockIcon, MapPinIcon, PhoneIcon } from './icons';

export function Contact() {
  return (
    <section id="contato" className="bg-cream-200 py-24 sm:py-32">
      <div className="container-app">
        <SectionHeading
          eyebrow="Contato"
          title="Peça já a sua pizza"
          highlight={['já']}
          description="Chame no WhatsApp para montar o seu pedido ou venha nos visitar — a casa é sua."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Cartão escuro com os dados */}
          <Reveal variant="left">
            <div className="flex h-full flex-col rounded-[1.75rem] bg-forest-800 p-9 text-cream sm:p-11">
              <dl className="space-y-8">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-ultra-wide text-cream/50">
                      Endereço
                    </dt>
                    <dd className="mt-1.5 leading-relaxed">{contact.address}</dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <dt className="text-[10px] font-bold uppercase tracking-ultra-wide text-cream/50">
                      Horário
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {contact.hours.map((entry) => (
                        <p key={entry.days} className="flex justify-between gap-4 text-sm">
                          <span className="text-cream/80">{entry.days}</span>
                          <span className="text-cream/55">{entry.time}</span>
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-ultra-wide text-cream/50">
                      Pedidos
                    </dt>
                    <dd className="mt-1.5 space-y-1">
                      <a
                        href={contact.whatsappHref}
                        className="block font-semibold text-gold-light transition-colors hover:text-gold"
                      >
                        {contact.whatsapp}
                      </a>
                      <p className="text-sm text-cream/60">{contact.phone}</p>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10">
                <Button href={contact.whatsappHref} variant="gold" className="w-full sm:w-auto">
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Mapa — placeholder até entrar o embed real */}
          <Reveal variant="right" delay={140}>
            <div
              role="img"
              aria-label="Mapa de localização da Sabore Mio — disponível em breve"
              className="relative flex h-full min-h-[22rem] items-center justify-center overflow-hidden rounded-[1.75rem] border border-forest/15 bg-cream"
            >
              {/* Malha decorativa de ruas */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(#2E5233 1px, transparent 1px), linear-gradient(90deg, #2E5233 1px, transparent 1px)',
                  backgroundSize: '44px 44px',
                }}
              />

              <div className="relative text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wine text-cream">
                  <MapPinIcon className="h-7 w-7" />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-ring-pulse rounded-full border-2 border-wine"
                  />
                </span>
                <p className="mt-5 font-display text-lg font-semibold text-forest-800">
                  Vila Itália, São Paulo
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-forest-700/45">
                  Mapa interativo em breve
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
