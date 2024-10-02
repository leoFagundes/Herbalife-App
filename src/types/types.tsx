export interface ProductProps {
  id: string;
  name: string;
  description: string;
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
}

export interface UserProps {}
