"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { ProductProps, UserProps } from "@/types/types";
import { FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { LoaderWithFullScreen } from "@/components/loader";

interface ProductsProps {
  params: {
    user: string;
  };
}

export default function Products({ params }: ProductsProps) {
  const [currentType, setCurrentType] = useState("Shakes");
  const [isLoading, setIsLoading] = useState(true);
  const ulRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

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

  // [
  //   {
  //     id: "1",
  //     name: "Shake de Morango Cremoso 550g",
  //     description: "Delicioso shake de morango",
  //     type: "Shakes",
  //     isFavorite: true,
  //     isVisible: true,
  //     image:
  //       "https://cdn.clienteherbalife.com.br/upload/produtos/1i-4996-shake-mo.webp",
  //     weight: 300,
  //   },
  //   {
  //     id: "2",
  //     name: "Shake de Cockies Cremoso 550g",
  //     description: "Delicioso shake de cockies",
  //     type: "Shakes",
  //     isFavorite: false,
  //     isVisible: true,
  //     image:
  //       "https://cdn.clienteherbalife.com.br/upload/produtos/1i-4996-shake-mo.webp",
  //     weight: 300,
  //   },
  //   {
  //     id: "3",
  //     name: "Proteína Whey",
  //     description: "Suplemento de proteína Whey",
  //     type: "Proteínas",
  //     isFavorite: false,
  //     isVisible: true,
  //     image:
  //       "https://cdn.clienteherbalife.com.br/upload/produtos/1r-1309-whey-pro.webp",
  //     weight: 500,
  //   },
  // ]

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const users: UserProps[] | undefined = await UserRepositorie.getAll();
        const currentUser = users?.filter(
          (user) => user.username === params.user
        )[0];
        const currentUserProducts = currentUser?.products;

        if (currentUserProducts) setProducts(currentUserProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

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

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div>
      <p>
        Os produtos exibidos abaixo são apenas uma{" "}
        <span className="text-primary">
          referência visual do estoque disponível
        </span>{" "}
        e não estão disponíveis para compra online. Para realizar a aquisição de
        qualquer produto, entre em{" "}
        <span
          onClick={() => router.push(`/${params.user}/contact`)}
          className="text-primary hover:cursor-pointer underline"
        >
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
