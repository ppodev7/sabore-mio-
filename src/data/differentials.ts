export type DifferentialIcon = 'dough' | 'leaf' | 'fire' | 'bike';

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: DifferentialIcon;
}

export const differentials: Differential[] = [
  {
    id: 'fermentacao',
    title: 'Fermentação natural',
    description:
      'Massa descansada por 48 horas com fermento natural. Mais leve, mais digestiva e com aquele sabor que só o tempo dá.',
    icon: 'dough',
  },
  {
    id: 'ingredientes',
    title: 'Ingredientes frescos',
    description:
      'Hortaliças e queijos chegam toda semana de fornecedores locais selecionados. Nada congelado, nada industrializado.',
    icon: 'leaf',
  },
  {
    id: 'forno',
    title: 'Forno a lenha',
    description:
      'Assadas a 450°C em forno de tijolo refratário. Borda crocante por fora, macia por dentro, com defumado natural.',
    icon: 'fire',
  },
  {
    id: 'entrega',
    title: 'Entrega rápida',
    description:
      'Embalagem térmica e rota otimizada no bairro. Sua pizza sai do forno e chega quente à sua mesa.',
    icon: 'bike',
  },
];

/** Frases da faixa em rolagem contínua, logo abaixo do hero. */
export const tickerItems: string[] = [
  'Massa de fermentação natural',
  'Forno a lenha a 450°C',
  'Ingredientes frescos toda semana',
  'Pizzas personalizadas',
  'Receita tradicional desde 1985',
  'Entrega no bairro',
];
