"use client";

import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";
import { ProductProps } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiStar } from "react-icons/fi";

interface ProductDetailsProps {
  params: {
    user: string;
    id: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const [product, setProduct] = useState<ProductProps | null>(null);

  const { currentUser, isLoading } = UseUser(decodeURIComponent(params.user));
  const router = useRouter();

  useEffect(() => {
    const currentProduct = currentUser?.products.filter(
      (product) => product.id === params.id
    );

    if (currentProduct) {
      setProduct(currentProduct[0]);
    }
  }, [currentUser, params.id]);

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col gap-6">
      <span
        onClick={() => router.back()}
        className="flex items-center gap-2 text-primary hover:cursor-pointer hover:underline font-medium"
      >
        <FiArrowLeft /> voltar
      </span>
      <section className="flex gap-8 lg:flex-nowrap flex-wrap justify-center">
        <div className="relative border border-primary rounded-md shadow-card min-w-[350px] p-6 h-fit">
          <Image
            className="max-w-[350px]"
            height={0}
            width={400}
            src={`/assets/image/products/${product?.image}`}
            layout="responsive"
            alt={product?.name ? product.name : "product"}
          />
          {product?.isFavorite && (
            <span className="flex items-center gap-1 absolute top-1 left-1 text-primary bg-white/10 py-1 px-2 rounded-sm backdrop-blur-sm font-semibold">
              <FiStar /> Campeão de vendas
            </span>
          )}
        </div>
        <article className="flex flex-col gap-6">
          <h1 className="text-2xl text-primary font-semibold">
            {product?.name}
          </h1>
          <div className="flex flex-col gap-3">
            {product?.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
