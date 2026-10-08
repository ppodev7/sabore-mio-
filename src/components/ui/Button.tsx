import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'gold';
type ButtonSize = 'md' | 'lg';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-wine text-cream-100 hover:bg-wine-700 shadow-card hover:shadow-card-hover',
  outline: 'border border-forest/25 text-forest-700 hover:border-forest hover:bg-forest/5',
  ghost: 'text-cream-100 border border-cream/30 hover:bg-cream/10 hover:border-cream/60',
  gold: 'bg-gold text-forest-800 hover:bg-gold-light shadow-card hover:shadow-card-hover',
};

const SIZES: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * CTA em forma de link. O brilho que atravessa no hover é puramente
 * decorativo e fica atrás do rótulo.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-bold uppercase tracking-[0.14em] transition-all duration-500 ease-out-expo hover:-translate-y-0.5 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 ease-out-expo group-hover:left-[150%]"
      />
      <span className="relative">{children}</span>
    </a>
  );
}
