import { testimonials } from '../data/testimonials';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={index < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.2}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

/** Iniciais do nome, como avatar tipográfico. */
function initialsOf(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-app">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem prova, vira cliente"
          highlight={['vira', 'cliente']}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 130}>
              <figure className="relative flex h-full flex-col rounded-[1.5rem] bg-cream-100 p-8 shadow-card transition-all duration-700 ease-out-expo hover:-translate-y-2 hover:shadow-card-hover">
                <span
                  aria-hidden="true"
                  className="absolute right-7 top-4 font-display text-6xl leading-none text-gold/25"
                >
                  &rdquo;
                </span>

                <StarRating rating={testimonial.rating} />

                <blockquote className="mt-5 flex-1 leading-relaxed text-forest-700/80">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-forest/10 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 font-display text-sm font-semibold text-forest-700"
                  >
                    {initialsOf(testimonial.name)}
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-forest-800">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-forest-700/55">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
