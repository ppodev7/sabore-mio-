import { contact } from '../data/contact';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="container-app grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-tomato">Contato</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-olive-dark sm:text-4xl">
            Peça já a sua pizza
          </h2>
          <p className="mt-3 max-w-md text-olive-dark/70">
            Estamos prontos para preparar a sua pizza personalizada. Chame no WhatsApp ou venha nos visitar.
          </p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-olive-dark/50">Endereço</dt>
              <dd className="mt-1 text-olive-dark">{contact.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-olive-dark/50">Horário</dt>
              <dd className="mt-1 space-y-0.5 text-olive-dark">
                {contact.hours.map((entry) => (
                  <p key={entry.days}>
                    {entry.days}: <span className="text-olive-dark/70">{entry.time}</span>
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-olive-dark/50">WhatsApp</dt>
              <dd className="mt-1">
                <a href={contact.whatsappHref} className="font-semibold text-tomato hover:underline">
                  {contact.whatsapp}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={contact.whatsappHref}
            className="mt-8 inline-flex rounded-full bg-tomato px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-tomato-dark"
          >
            Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="img"
            aria-label="Mapa de localização da Sabore Mio (em breve)"
            className="flex h-full min-h-[320px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-olive/20 bg-olive/5 text-center"
          >
            <p className="px-6 text-sm font-semibold uppercase tracking-wide text-olive-dark/50">
              Mapa em breve
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
