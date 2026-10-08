import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/** Base comum: traço de 1.6, sem preenchimento, herda a cor do texto. */
function strokeProps(props: IconProps) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };
}

export function DoughIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.6 9.4c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8" />
      <path d="M13.4 14.2c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8" />
      <circle cx="9.3" cy="14.6" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M5 19c0-8 4-13 14-13 0 10-5 14-13 14H5v-1Z" />
      <path d="M6 18c3-3 6-6 12-11" />
    </svg>
  );
}

export function FireIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 3s4.2 3.4 4.2 7.4a4.2 4.2 0 1 1-8.4 0c0-1.1.4-2 1-2.8-.3 1.7.3 2.7 1.1 3.2-.3-2.2 1-3.8 1-5.2 0-.9-.4-1.8-1-2.6" />
      <path d="M10.3 16.4c0 1 .8 1.7 1.7 1.7s1.7-.8 1.7-1.7-.7-1.4-1.1-2.2c-.6.8-2.3 1.1-2.3 2.2Z" />
    </svg>
  );
}

export function BikeIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17l4-8h4l3 8" />
      <path d="M10 9h4M13.5 6H16l2 3" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 1.9" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M6.2 3.5h3l1.5 3.8-2 1.3a12 12 0 0 0 5.7 5.7l1.3-2 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  );
}

/** Logotipo do WhatsApp — sólido, não segue o padrão de traço. */
export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 0 0 4.87 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 1.81a8.13 8.13 0 0 1 8.14 8.15c0 4.5-3.65 8.15-8.15 8.15a8.1 8.1 0 0 1-4.14-1.14l-.3-.17-3.07.8.82-3-.2-.3a8.1 8.1 0 0 1-1.25-4.34 8.14 8.14 0 0 1 8.15-8.15Zm-2.5 4.1c-.17 0-.45.07-.69.33-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.76 4.37 3.76.61.24 1.09.38 1.46.49.61.19 1.17.16 1.61.1.49-.08 1.51-.62 1.73-1.22.21-.6.21-1.11.15-1.22-.07-.1-.24-.17-.5-.3-.26-.13-1.52-.75-1.76-.84-.23-.08-.4-.13-.57.13-.17.26-.65.84-.8 1.01-.14.18-.29.2-.55.07-.26-.13-1.08-.4-2.07-1.28-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.57-1.4-.79-1.92-.2-.5-.4-.43-.56-.44h-.48Z" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
    </svg>
  );
}
