/** Sabor em destaque, com foto de produto. */
export interface FeaturedPizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  /** Ingredientes exibidos como etiquetas no card. */
  ingredients: string[];
  tag?: string;
}

/** Sabor do cardápio tipográfico, sem foto. */
export interface MenuFlavor {
  id: string;
  name: string;
  ingredients: string;
  price: number;
}

/** Foto real da cozinha, usada na galeria e na seção "sobre". */
export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
}
