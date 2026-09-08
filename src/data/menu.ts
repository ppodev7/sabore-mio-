import pizza1 from '../assets/pizza-1.jpg';
import pizza2 from '../assets/pizza-2.jpg';
import pizza3 from '../assets/pizza-3.jpg';
import pizza4 from '../assets/pizza-4.jpg';
import pizza6 from '../assets/pizza-6.jpg';
import type { Pizza } from '../types/menu';

export const menu: Pizza[] = [
  {
    id: 'brocolis-bacon',
    name: 'Brócolis com Bacon Defumado',
    description:
      'Brócolis levemente tostado no forno a lenha, bacon defumado artesanal e muçarela derretida sobre massa de fermentação natural.',
    price: 54.9,
    image: pizza1,
    tags: ['Fermentação natural'],
  },
  {
    id: 'brocolis-bacon-alho',
    name: 'Brócolis, Bacon e Alho Assado',
    description:
      'A combinação clássica de brócolis e bacon ganha um toque a mais de alho assado lentamente, para um sabor mais profundo.',
    price: 57.9,
    image: pizza2,
  },
  {
    id: 'pepperoni-manjericao',
    name: 'Pepperoni, Manjericão e Parmesão',
    description:
      'Fatias generosas de pepperoni, manjericão fresco colhido na hora e lascas de parmesão sobre molho de tomate italiano.',
    price: 59.9,
    image: pizza3,
    tags: ['Mais pedida'],
  },
  {
    id: 'pepperoni-gran-reserva',
    name: 'Pepperoni Gran Reserva',
    description:
      'Dupla camada de pepperoni artesanal, manjericão fresco e parmesão curado, finalizada com um fio de azeite extra-virgem.',
    price: 62.9,
    image: pizza4,
  },
  {
    id: 'pepperoni-classica',
    name: 'Pepperoni Clássica',
    description:
      'A receita tradicional: molho de tomate, muçarela generosa e pepperoni crocante nas bordas, direto do forno a lenha.',
    price: 52.9,
    image: pizza6,
  },
];
