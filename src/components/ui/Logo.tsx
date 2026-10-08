import logo from '../../assets/logo1.jfif';

interface LogoProps {
  className?: string;
  /**
   * 'blend' funde o fundo branco do arquivo no creme (fundos claros).
   * 'plate' apoia o emblema sobre um disco creme (fundos escuros).
   */
  mode?: 'blend' | 'plate';
}

/**
 * O emblema vem com fundo branco, não transparente. Em fundo claro usamos
 * mix-blend-mode; em fundo escuro, um disco creme que vira moldura.
 */
export function Logo({ className = 'h-12 w-12', mode = 'blend' }: LogoProps) {
  if (mode === 'plate') {
    return (
      <span className={`inline-flex items-center justify-center rounded-full bg-cream p-1 ${className}`}>
        <img
          src={logo}
          alt="Sabore Mio — Pizzaria Artesanal, receita tradicional desde 1985"
          className="h-full w-full rounded-full object-cover"
        />
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt="Sabore Mio — Pizzaria Artesanal, receita tradicional desde 1985"
      className={`blend-logo rounded-full object-cover ${className}`}
    />
  );
}
