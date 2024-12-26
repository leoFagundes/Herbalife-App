"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { ProductProps } from "@/types/types";
import { FiAlertCircle } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";

interface ProductsProps {
  params: {
    user: string;
  };
}

export default function Products({ params }: ProductsProps) {
  const [currentType, setCurrentType] = useState("Shakes");
  const ulRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const [products, setProducts] = useState<ProductProps[]>([]);
  const { isLoading, currentUser } = UseUser(decodeURIComponent(params.user));

  useEffect(() => {
    if (currentUser) {
      setProducts(currentUser?.products);
    }
  }, [currentUser]);

  // Checa o parâmetro `type` na URL e atualiza o tipo atual
  useEffect(() => {
    const typeFromURL = searchParams.get("type");

    if (typeFromURL && types.includes(typeFromURL)) {
      setCurrentType(typeFromURL);

      const index = types.indexOf(typeFromURL);

      if (ulRef.current) {
        const item = ulRef.current.children[index] as HTMLElement;
        const offset =
          item.offsetLeft -
          (ulRef.current.clientWidth - item.clientWidth) / 1.5;

        ulRef.current.scrollTo({
          left: offset,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams, types]);

  const filterProducts = products.filter(
    (product) => product.type === currentType
  );

  const handleClick = (type: string) => {
    setCurrentType(type);

    // Atualiza a URL com o parâmetro `type`
    router.push(`/${params.user}/products?type=${type}`);

    // if (ulRef.current) {
    //   const item = ulRef.current.children[index] as HTMLElement;
    //   const offset =
    //     item.offsetLeft - (ulRef.current.clientWidth - item.clientWidth) / 1.5;

    //   ulRef.current.scrollTo({
    //     left: offset,
    //     behavior: "smooth",
    //   });
    // }
  };

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div>
      <p>
        Os produtos exibidos abaixo são apenas uma{" "}
        <span className="text-primary">
          referência visual do estoque disponível de um distribuidor
          independente
        </span>{" "}
        e não estão disponíveis para compra online. Para realizar a aquisição de
        qualquer produto, entre em{" "}
        <span
          onClick={() => router.push(`/${params.user}/contact`)}
          className="text-primary hover:cursor-pointer underline"
        >
          contato
        </span>{" "}
        diretamente com{" "}
        <span className="text-primary">{decodeURIComponent(params.user)}</span>.
      </p>

      <nav className="w-full justify-center flex py-1 mt-6 mb-4">
        <ul
          ref={ulRef}
          className="flex w-fit justify-start gap-8 overflow-x-auto px-2 py-1 scroll-bar"
        >
          {types.map((type) => (
            <li
              key={type}
              onClick={() => handleClick(type)}
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

      <div className="flex justify-center mt-6 gap-8 flex-wrap">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCard key={product.id} params={params} product={product} />
          ))
        ) : (
          <p className="flex items-center gap-1">
            <FiAlertCircle className="" /> Nenhum produto encontrado para o tipo
            selecionado.
          </p>
        )}
      </div>
    </div>
  );
}
