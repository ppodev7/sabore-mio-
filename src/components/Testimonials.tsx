import { testimonials } from '../data/testimonials';
import { Reveal } from './Reveal';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
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

export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-app">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-tomato">Depoimentos</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-olive-dark sm:text-4xl">
            Quem prova, vira cliente
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-olive-dark/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-olive/10 pt-4">
                  <p className="font-display text-base font-semibold text-olive-dark">{testimonial.name}</p>
                  <p className="text-xs text-olive-dark/60">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
