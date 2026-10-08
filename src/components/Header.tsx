import { useEffect, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Cardápio', href: '#cardapio', id: 'cardapio' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Contato', href: '#contato', id: 'contato' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava a rolagem do corpo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Fecha o menu com Esc.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled ? 'bg-cream/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Barra de progresso da leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-gold via-gold-light to-gold transition-opacity duration-500"
        style={{ transform: `scaleX(${progress})`, opacity: isScrolled ? 1 : 0 }}
      />

      <div
        className={`container-app flex items-center justify-between transition-all duration-500 ease-out-expo ${
          isScrolled ? 'h-16' : 'h-20 sm:h-24'
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="Sabore Mio — ir para o início">
          <Logo
            className={`transition-all duration-500 ease-out-expo ${isScrolled ? 'h-11 w-11' : 'h-14 w-14'}`}
          />
          <span className="hidden font-display text-lg font-semibold leading-none tracking-wide text-forest-800 sm:block">
            Sabore Mio
            <span className="mt-1 block font-sans text-[9px] font-bold uppercase tracking-ultra-wide text-wine">
              Desde 1985
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative text-[13px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? 'text-wine' : 'text-forest-700 hover:text-wine'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-wine transition-transform duration-500 ease-out-expo ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="#contato" size="md">
            Pedir agora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-forest-800 transition-colors hover:bg-forest/5 md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out-expo ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'scale-x-0 opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out-expo ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu mobile em sobreposição, com entrada escalonada */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 ease-out-expo md:hidden ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="container-app flex h-full flex-col justify-center gap-2" aria-label="Navegação mobile">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-forest/10 py-5 font-display text-3xl font-semibold text-forest-800 transition-all duration-500 ease-out-expo"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${isMenuOpen ? 120 + index * 70 : 0}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            className="mt-8 transition-all duration-500 ease-out-expo"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${isMenuOpen ? 400 : 0}ms`,
            }}
          >
            <Button href="#contato" className="w-full" onClick={() => setIsMenuOpen(false)}>
              Pedir agora
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
