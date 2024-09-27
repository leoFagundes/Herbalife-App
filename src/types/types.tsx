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
  image: string;
  weight: number;
}