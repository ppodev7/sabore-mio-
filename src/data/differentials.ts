export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: 'dough' | 'leaf' | 'fire' | 'bike';
}

export const differentials: Differential[] = [
  {
    id: 'fermentacao',
    title: 'Fermentação natural',
    description: 'Massa de longa fermentação, descansada por até 48 horas para leveza e sabor.',
    icon: 'dough',
  },
  {
    id: 'ingredientes',
    title: 'Ingredientes frescos',
    description: 'Selecionamos fornecedores locais e recebemos hortaliças e queijos toda semana.',
    icon: 'leaf',
  },
  {
    id: 'forno',
    title: 'Forno a lenha',
    description: 'Assamos em altas temperaturas para uma borda crocante e um sabor defumado único.',
    icon: 'fire',
  },
  {
    id: 'entrega',
    title: 'Entrega rápida',
    description: 'Sua pizza sai do forno direto para a sua casa, sempre quentinha e no tempo certo.',
    icon: 'bike',
  },
];
