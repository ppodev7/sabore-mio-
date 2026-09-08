import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 shadow-md backdrop-blur-sm' : 'bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Sabore Mio — Pizzas Personalizadas" className="h-10 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-olive-dark transition-colors hover:text-tomato"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-tomato px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-tomato-dark md:inline-flex"
        >
          Pedir agora
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-olive-dark md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-olive-dark transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-6 bg-olive-dark transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-6 bg-olive-dark transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-olive/10 bg-cream md:hidden">
          <div className="container-app flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-semibold text-olive-dark hover:bg-olive/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-tomato px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-cream"
            >
              Pedir agora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
