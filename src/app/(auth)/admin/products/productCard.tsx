"use client";

import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

interface ProductCardProps {
  product: ProductProps;
  updateFavoriteProduct: (id: string) => void;
  updateVisibleProduct: (id: string) => void;
}

export default function ProductCard({
  product,
  updateFavoriteProduct,
  updateVisibleProduct,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 items-center shadow-md animate-fadein rounded-lg p-8 w-[265px] h-[350px] relative transition-all duration-300 bg-white-secondary`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 pointer-events-none rounded-lg  ${
          !product.isVisible ? "bg-white/50 flex" : "hidden"
        }`}
      ></div>
      <Image
        className="flex-1 w-full max-w-[250px] max-h-[220px]"
        width={200}
        height={200}
        src={`/assets/image/products/${product.image}`}
        alt={`product-${product.name}`}
      />
      <p className="text-center w-full text-lg">{product.name}</p>

      <span className="flex items-center gap-2 absolute top-1 right-1 text-primary bg-white/10 py-1 px-2 rounded-sm backdrop-blur-sm">
        {!product.isFavorite ? (
          <IoIosStarOutline
            onClick={() => updateFavoriteProduct(product.id)}
            size={18}
            className="hover:cursor-pointer"
          />
        ) : (
          <IoIosStar
            onClick={() => updateFavoriteProduct(product.id)}
            size={18}
            className="hover:cursor-pointer"
          />
        )}
        {!product.isVisible ? (
          <FiEyeOff
            onClick={() => updateVisibleProduct(product.id)}
            size={18}
            className="hover:cursor-pointer"
          />
        ) : (
          <FiEye
            onClick={() => updateVisibleProduct(product.id)}
            size={18}
            className="hover:cursor-pointer"
          />
        )}
      </span>
    </div>
  );
}
