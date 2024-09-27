"use client";

import { useRef, useState } from "react";
import ProductCard from "./productCard";
import { ProductProps } from "@/types/types";

interface ProductsProps {
  params: {
    user: string;
  };
}

export default function Products({ params }: ProductsProps) {
  const [currentType, setCurrentType] = useState("Shakes");
  const ulRef = useRef<HTMLUListElement>(null);

  const types = [
    "Shakes",
    "Chás",
    "Fibras",
    "Proteínas",
    "Tabletes",
    "Sopas",
    "Produtos de beleza",
    "Nutrição Esportiva",
  ];

  const [products, setProducts] = useState<ProductProps[]>([
    {
      id: "1",
      name: "Shake de Morango Cremoso 550g",
      description: "Delicioso shake de morango",
      type: "Shakes",
      isFavorite: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1i-4996-shake-mo.webp",
      weight: 300,
    },
    {
      id: "2",
      name: "Shake de Cockies Cremoso 550g",
      description: "Delicioso shake de cockies",
      type: "Shakes",
      isFavorite: false,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1i-4996-shake-mo.webp",
      weight: 300,
    },
    {
      id: "3",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
  ]);

  const filterProducts = products.filter(
    (product) => product.type === currentType
  );

  const handleClick = (type: string, index: number) => {
    setCurrentType(type);

    if (ulRef.current) {
      const item = ulRef.current.children[index] as HTMLElement;
      const offset =
        item.offsetLeft - (ulRef.current.clientWidth - item.clientWidth) / 1.5;

      ulRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <p>
        Os produtos exibidos abaixo são apenas uma{" "}
        <span className="text-primary">
          referência visual do estoque disponível
        </span>{" "}
        e não estão disponíveis para compra online. Para realizar a aquisição de
        qualquer produto, entre em{" "}
        <span className="text-primary hover:cursor-pointer underline">
          contato
        </span>{" "}
        diretamente com <span className="text-primary">{params.user}</span>.
      </p>

      <nav className="w-full justify-center flex py-1 mt-6 mb-4">
        <ul
          ref={ulRef}
          className="flex w-fit justify-start gap-8 overflow-x-auto px-2 py-1 scroll-bar"
        >
          {types.map((type, index) => (
            <li
              key={type}
              onClick={() => handleClick(type, index)}
              className={`whitespace-nowrap font-medium text-primary text-lg hover:font-semibold hover:cursor-pointer ${
                type === currentType ? "font-semibold underline" : ""
              }`}
            >
              {type}
            </li>
          ))}
        </ul>
      </nav>

      <div className="h-[1px] w-full bg-primary" />

      <div className="flex justify-center mt-6 gap-8">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado para o tipo selecionado.</p>
        )}
      </div>
    </div>
  );
}
