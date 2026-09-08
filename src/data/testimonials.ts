import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carla Menezes',
    role: 'Cliente desde 2022',
    quote:
      'A pizza de brócolis com bacon é surpreendente. Massa levíssima e ingredientes que realmente parecem frescos.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Rafael Torres',
    role: 'Cliente frequente',
    quote:
      'Peço toda sexta-feira. O forno a lenha faz toda a diferença na borda, fica crocante por fora e macia por dentro.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Juliana Prado',
    role: 'Confraternização de trabalho',
    quote:
      'Pedimos pizzas personalizadas para um evento da empresa e todo mundo elogiou. Entrega rápida e atendimento atencioso.',
    rating: 4,
  },
];
