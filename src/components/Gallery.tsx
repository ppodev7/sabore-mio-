import { galleryPhotos } from '../data/gallery';
import { Marquee } from './ui/Marquee';
import { Reveal } from './ui/Reveal';

/**
 * Fotos reais da cozinha em faixa contínua — prova de autenticidade, não
 * foto de produto. Pausa ao passar o ponteiro.
 */
export function Gallery() {
  return (
    <section className="overflow-hidden bg-cream-200 py-20 sm:py-24">
      <Reveal variant="fade">
        <div className="container-app mb-12 text-center">
          <span className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-ultra-wide text-wine">
            <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
            Direto do nosso forno
            <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
          </span>
          <p className="mx-auto mt-4 max-w-md text-sm text-forest-700/65">
            Sem banco de imagens: todas as fotos abaixo foram feitas na nossa cozinha.
          </p>
        </div>
      </Reveal>

      <Marquee durationSeconds={55}>
        {galleryPhotos.map((photo) => (
          <figure
            key={photo.id}
            className="group relative mx-3 h-56 w-44 shrink-0 overflow-hidden rounded-2xl shadow-card sm:h-72 sm:w-60"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover object-bottom transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-forest-900/20 transition-opacity duration-500 group-hover:opacity-0"
            />
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
