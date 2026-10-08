import { useEffect, useState } from 'react';
import { contact } from '../data/contact';
import { ArrowUpIcon, WhatsAppIcon } from './icons';

/**
 * Botões flutuantes de WhatsApp e "voltar ao topo". Só aparecem depois que o
 * visitante passa do hero, para não competir com o CTA principal.
 */
export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 transition-all duration-500 ease-out-expo ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 bg-cream/90 text-forest-700 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:text-wine"
        aria-label="Voltar ao topo"
      >
        <ArrowUpIcon className="h-4 w-4" />
      </button>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-wine text-cream shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-wine-700"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ring-pulse rounded-full border-2 border-wine"
        />
      </a>
    </div>
  );
}
