export interface ProductProps {
  id: string;
  name: string;
  description: string[];
  type:
    | "Shakes"
    | "Chás"
    | "Fibras"
    | "Proteínas"
    | "Tabletes"
    | "Sopas"
    | "Produtos de beleza"
    | "Nutrição Esportiva";
  isFavorite: boolean;
  isVisible: boolean;
  image: string;
  weight: number;
  off: boolean;
}

export interface UserProps {
  id: string;
  username: string;
  password: string;
  personalDescription: string;
  apresentationVideoLink: string;
  apresentationVideoDescription: string;
  whatsapp: string;
  instagram: string;
  email: string;
  image: string;
  products: ProductProps[];
}
