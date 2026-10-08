import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Mascot } from '../components/ui/Mascot';

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream-fade px-6 py-24 text-center">
      <Link to="/" className="mb-12" aria-label="Sabore Mio — voltar ao início">
        <Logo className="h-16 w-16" />
      </Link>

      <Mascot
        className="h-40 w-40 sm:h-48 sm:w-48"
        alt="Mascote da Sabore Mio, uma pizza com chapéu de chef, com ar de quem não encontrou o que procurava"
      />

      <p className="mt-10 font-display text-[clamp(3.5rem,12vw,6rem)] font-semibold leading-none text-wine">
        404
      </p>

      <h1 className="mt-4 font-display text-2xl font-semibold text-forest-800 sm:text-3xl">
        Essa fatia não existe
      </h1>

      <p className="mt-4 max-w-sm leading-relaxed text-forest-700/70">
        A página que você procura saiu do forno há muito tempo — ou nunca esteve nele. Que tal
        voltar para o cardápio?
      </p>

      <Link
        to="/"
        className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-wine px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-cream-100 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-wine-700 hover:shadow-card-hover"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 ease-out-expo group-hover:left-[150%]"
        />
        <span className="relative">Voltar para o início</span>
      </Link>
    </main>
  );
}
