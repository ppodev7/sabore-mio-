import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carla Menezes',
    role: 'Cliente desde 2022',
    quote:
      'A de brócolis com bacon é surpreendente. A massa é levíssima e dá pra sentir que os ingredientes são frescos de verdade.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Rafael Torres',
    role: 'Pede toda sexta',
    quote:
      'O forno a lenha faz toda a diferença na borda: crocante por fora e macia por dentro. Não consigo mais pedir em outro lugar.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Juliana Prado',
    role: 'Confraternização da empresa',
    quote:
      'Pedimos pizzas personalizadas para um evento e todo mundo elogiou. Entrega pontual e atendimento muito atencioso.',
    rating: 4,
  },
];
