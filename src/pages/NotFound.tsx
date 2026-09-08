import { Link } from 'react-router-dom';
import mascote from '../assets/mascote.jpg';

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-24 text-center">
      <img
        src={mascote}
        alt="Mascote da Sabore Mio com expressão de dúvida"
        className="h-40 w-40 rounded-full border-4 border-olive-dark/10 bg-olive-dark object-cover shadow-card sm:h-48 sm:w-48"
      />
      <p className="mt-8 font-display text-6xl font-semibold text-tomato sm:text-7xl">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-olive-dark sm:text-3xl">
        Essa fatia não existe
      </h1>
      <p className="mt-3 max-w-sm text-olive-dark/70">
        A página que você procura foi comida ou nunca existiu. Que tal voltar para o cardápio?
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-tomato px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-tomato-dark"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
