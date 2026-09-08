import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function DoughIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 9c0-1 .8-1.8 1.8-1.8S12.6 8 12.6 9" />
      <path d="M13.5 13.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8" />
      <circle cx="9.5" cy="14.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M5 19c0-8 4-13 14-13 0 10-5 14-13 14H5v-1Z" />
      <path d="M6 18c3-3 6-6 12-11" />
    </svg>
  );
}

export function FireIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M12 3s4 3.2 4 7.2a4 4 0 0 1-8 0c0-1 .4-1.8.9-2.6C9.4 8.8 9 10 9 10.8c0 .8.3 1.4.9 1.9-.2-2 1-3.4 1-4.7 0-.9-.4-1.8-1-2.6C11 4.6 12 3 12 3Z" />
      <path d="M8 15a4 4 0 0 0 8 0c0-.7-.2-1.3-.5-1.9" />
    </svg>
  );
}

export function BikeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17l4-8h4l3 8" />
      <path d="M10 9h4M13 6h3l2 3" />
    </svg>
  );
}
