import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";

interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap items-center shadow-card rounded-lg p-8 w-[265px] h-[310px] relative">
      <Image
        className="flex-1 w-full"
        width={150}
        height={0}
        src={product.image}
        alt={`product-${product.name}`}
      />
      <p className="text-center w-full">{product.name}</p>
      {product.isFavorite && (
        <span className="flex items-center gap-1 absolute top-1 left-1 text-primary bg-white/10 py-1 px-2 rounded-sm backdrop-blur-sm">
          <FiStar /> Campeão de vendas
        </span>
      )}
    </div>
  );
}
