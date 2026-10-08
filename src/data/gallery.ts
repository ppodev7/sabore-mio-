import pizza1 from '../assets/pizza-1.jpg';
import pizza2 from '../assets/pizza-2.jpg';
import pizza3 from '../assets/pizza-3.jpg';
import pizza4 from '../assets/pizza-4.jpg';
import pizza5 from '../assets/pizza-5.jpg';
import pizza6 from '../assets/pizza-6.jpg';
import type { GalleryPhoto } from '../types/menu';

/**
 * Fotos reais feitas na cozinha. Entram como prova de autenticidade na
 * galeria e na seção "sobre" — não como foto de produto do cardápio.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g1',
    src: pizza1,
    alt: 'Pizza de brócolis com bacon descansando na tábua de madeira, ainda soltando vapor',
  },
  {
    id: 'g2',
    src: pizza2,
    alt: 'Pizza de brócolis com bacon recém-saída do forno na cozinha da pizzaria',
  },
  {
    id: 'g3',
    src: pizza3,
    alt: 'Pizza de pepperoni com manjericão e parmesão sobre tábua de madeira',
  },
  {
    id: 'g4',
    src: pizza4,
    alt: 'Pizza de pepperoni finalizada com lascas de parmesão e folhas de manjericão',
  },
  {
    id: 'g5',
    src: pizza5,
    alt: 'Detalhe da borda alta e tostada de uma pizza artesanal da casa',
  },
  {
    id: 'g6',
    src: pizza6,
    alt: 'Pizza de pepperoni clássica ao lado dos queijos selecionados para o preparo',
  },
];
