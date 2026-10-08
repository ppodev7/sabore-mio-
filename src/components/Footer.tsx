import { contact } from '../data/contact';
import { Logo } from './ui/Logo';

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 pb-10 pt-16 text-cream/70">
      <div className="container-app">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo mode="plate" className="h-14 w-14" />
              <span className="font-display text-xl font-semibold leading-none text-cream">
                Sabore Mio
                <span className="mt-1.5 block font-sans text-[9px] font-bold uppercase tracking-ultra-wide text-gold">
                  Pizzaria artesanal
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              Pizzas artesanais e personalizadas, feitas com massa de fermentação natural e assadas
              em forno a lenha desde 1985.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="text-[10px] font-bold uppercase tracking-ultra-wide text-gold">
              Links rápidos
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-ultra-wide text-gold">
              Redes sociais
            </h3>
            <ul className="mt-5 space-y-3">
              {contact.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <address className="mt-6 text-sm not-italic leading-relaxed text-cream/55">
              {contact.address}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Sabore Mio Pizzaria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/40">
            Rua das Oliveiras, 245 · Vila Itália · São Paulo/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
