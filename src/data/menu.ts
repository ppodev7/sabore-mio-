import pizzaBrocolisBacon from '../assets/pizza2.jpeg';
import pizzaPepperoni from '../assets/pizza1.jpeg';
import type { FeaturedPizza, MenuFlavor } from '../types/menu';

/** Os dois carros-chefe, com foto de produto. */
export const featuredPizzas: FeaturedPizza[] = [
  {
    id: 'pepperoni-artesanal',
    name: 'Pepperoni Artesanal',
    description:
      'Pepperoni curado em fatias generosas sobre molho de tomate italiano e muçarela de búfala, finalizada com manjericão fresco e azeite extra-virgem.',
    price: 62.9,
    image: pizzaPepperoni,
    ingredients: ['Pepperoni curado', 'Muçarela de búfala', 'Manjericão fresco'],
    tag: 'Mais pedida',
  },
  {
    id: 'brocolis-bacon',
    name: 'Brócolis com Bacon',
    description:
      'Brócolis tostado na boca do forno, bacon defumado artesanal e creme de muçarela sobre massa de fermentação natural de 48 horas.',
    price: 59.9,
    image: pizzaBrocolisBacon,
    ingredients: ['Brócolis tostado', 'Bacon defumado', 'Creme de muçarela'],
    tag: 'Favorita da casa',
  },
];

/** Demais sabores — cardápio tipográfico, sem foto. */
export const menuFlavors: MenuFlavor[] = [
  {
    id: 'margherita',
    name: 'Margherita di Napoli',
    ingredients: 'Molho de tomate San Marzano, muçarela de búfala, manjericão',
    price: 48.9,
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos',
    ingredients: 'Muçarela, gorgonzola, parmesão curado e catupiry',
    price: 56.9,
  },
  {
    id: 'calabresa',
    name: 'Calabresa Artesanal',
    ingredients: 'Calabresa defumada, cebola roxa caramelizada, orégano',
    price: 52.9,
  },
  {
    id: 'parma-rucula',
    name: 'Parma & Rúcula',
    ingredients: 'Presunto de parma, rúcula selvagem, lascas de parmesão',
    price: 68.9,
  },
  {
    id: 'portuguesa',
    name: 'Portuguesa da Casa',
    ingredients: 'Presunto, ovo caipira, cebola, azeitona preta e ervilha',
    price: 54.9,
  },
  {
    id: 'funghi',
    name: 'Funghi Trufado',
    ingredients: 'Mix de cogumelos, creme de trufas negras, tomilho fresco',
    price: 72.9,
  },
];
