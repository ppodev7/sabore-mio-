import logo from '../assets/logo.jpg';
import { contact } from '../data/contact';

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="bg-olive-dark py-12 text-cream/80">
      <div className="container-app flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <img src={logo} alt="Sabore Mio" className="h-10 w-auto rounded bg-cream/95 px-2 py-1" />
          <p className="mt-4 max-w-xs text-sm text-cream/60">
            Pizzas artesanais, personalizadas e feitas com ingredientes frescos, direto do forno a lenha para a sua mesa.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Links rápidos</h3>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/70 hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Redes sociais</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={contact.instagram} className="text-sm text-cream/70 hover:text-cream">
                Instagram
              </a>
            </li>
            <li>
              <a href={contact.facebook} className="text-sm text-cream/70 hover:text-cream">
                Facebook
              </a>
            </li>
            <li>
              <a href={contact.whatsappHref} className="text-sm text-cream/70 hover:text-cream">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-app mt-10 border-t border-cream/10 pt-6">
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Sabore Mio Pizzaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
