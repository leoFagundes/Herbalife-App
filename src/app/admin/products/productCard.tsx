import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FiEye, FiEyeOff, FiStar } from "react-icons/fi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center shadow-md animate-fadein rounded-lg p-8 w-[265px] h-[350px] relative transition-all duration-300 bg-white-secondary">
      <Image
        className="flex-1 w-full max-w-[250px] max-h-[220px]"
        width={200}
        height={200}
        src={product.image}
        alt={`product-${product.name}`}
      />
      <p className="text-center w-full text-lg">{product.name}</p>

      <span className="flex items-center gap-2 absolute top-1 right-1 text-primary bg-white/10 py-1 px-2 rounded-sm backdrop-blur-sm">
        {!product.isFavorite ? (
          <IoIosStarOutline size={18} className="hover:cursor-pointer" />
        ) : (
          <IoIosStar size={18} className="hover:cursor-pointer" />
        )}
        {!product.isVisible ? (
          <FiEyeOff size={18} className="hover:cursor-pointer" />
        ) : (
          <FiEye size={18} className="hover:cursor-pointer" />
        )}
      </span>
    </div>
  );
}
