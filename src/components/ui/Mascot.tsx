import mascote from '../../assets/mascote.jpg';

interface MascotProps {
  className?: string;
  alt?: string;
  /** Anima a flutuação contínua. */
  floating?: boolean;
}

/**
 * O arquivo do mascote tem fundo preto, não transparente. Sobre um disco
 * verde-escuro, `mix-blend-screen` transforma o preto na própria cor do
 * disco, então o recorte some e sobra só o personagem.
 */
export function Mascot({
  className = 'h-28 w-28',
  alt = 'Mascote da Sabore Mio, uma pizza com chapéu de chef segurando a bandeira do Brasil',
  floating = true,
}: MascotProps) {
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-full border-4 border-cream bg-forest-900 shadow-card ${
        floating ? 'animate-float' : ''
      } ${className}`}
    >
      <img
        src={mascote}
        alt={alt}
        className="h-full w-full object-cover [mix-blend-mode:screen]"
        loading="lazy"
        width={1156}
        height={1255}
      />
    </span>
  );
}
