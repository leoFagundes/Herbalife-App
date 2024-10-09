"use client";

import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";
import { ProductProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      console.log(currentProduct);
      setProduct(currentProduct[0]);
    }
  }, [currentUser]);

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div>
      <button onClick={() => router.back()}>voltar</button> details{" "}
      {product?.name}
    </div>
  );
}
