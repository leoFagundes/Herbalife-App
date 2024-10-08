"use client";

import { ProductProps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FiStar } from "react-icons/fi";

interface ProductCardProps {
  params: {
    user: string;
  };
  product: ProductProps;
}

export default function ProductCard({ product, params }: ProductCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/${params.user}/products/${product.id}/details`)
      }
      className={`${
        product.isVisible ? "flex" : "hidden"
      } flex-col gap-2 items-center shadow-md animate-fadein rounded-lg p-8 w-[265px] h-[350px] relative hover:cursor-pointer hover:shadow-card transition-all duration-300 bg-white-secondary`}
    >
      <Image
        className="flex-1 w-full max-w-[250px] max-h-[220px]"
        width={200}
        height={200}
        src={`/assets/image/products/${product.image}`}
        alt={`product-${product.name}`}
      />

      <p className="text-center w-full text-lg">{product.name}</p>
      {product.isFavorite && (
        <span className="flex items-center gap-1 absolute top-1 left-1 text-primary bg-white/10 py-1 px-2 rounded-sm backdrop-blur-sm font-semibold">
          <FiStar /> Campeão de vendas
        </span>
      )}
    </div>
  );
}
