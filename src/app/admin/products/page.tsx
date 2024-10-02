"use client";

import { ProductProps } from "@/types/types";
import React, { useState } from "react";
import ProductCard from "./productCard";

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([
    {
      id: "1",
      name: "Shake de Morango Cremoso 550g",
      description: "Delicioso shake de morango",
      type: "Shakes",
      isFavorite: true,
      isVisible: true,
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
      isVisible: true,
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
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "4",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "5",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "6",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "7",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "8",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
    {
      id: "9",
      name: "Proteína Whey",
      description: "Suplemento de proteína Whey",
      type: "Proteínas",
      isFavorite: false,
      isVisible: true,
      image:
        "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
      weight: 500,
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full p-12 gap-8">
      <h1 className="text-primary font-semibold text-3xl">
        Produtos Herbalife
      </h1>
      <ul className="flex flex-wrap w-full justify-center gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}
