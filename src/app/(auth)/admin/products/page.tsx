"use client";

import { ProductProps, UserProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { useRouter } from "next/navigation";
import { LoaderWithFullScreen } from "@/components/loader";
import { IoRefresh } from "react-icons/io5";
import productsJSON from "@/utils/products-data.json";

export default function Products() {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [rotate, setRotate] = useState(false);
  const router = useRouter();

  const products: ProductProps[] = productsJSON as ProductProps[];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Usuário autenticado:", user.uid);

        const userInfo = await UserRepositorie.getById(user.uid);
        setUserData(userInfo);
      } else {
        console.log("Usuário não autenticado.");
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function updateFavoriteProduct(productId: string) {
    try {
      if (userData) {
        const newProductList = userData.products.map((product) => {
          if (product.id === productId) {
            return { ...product, isFavorite: !product.isFavorite };
          }
          return product;
        });

        await UserRepositorie.update(userData.id, {
          ...userData,
          products: newProductList,
        });

        setUserData((prevUserData) => ({
          ...prevUserData!,
          products: newProductList,
        }));
      }
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
    }
  }

  async function updateVisibleProduct(productId: string) {
    try {
      if (userData) {
        const newProductList = userData.products.map((product) => {
          if (product.id === productId) {
            return { ...product, isVisible: !product.isVisible };
          }
          return product;
        });

        await UserRepositorie.update(userData.id, {
          ...userData,
          products: newProductList,
        });

        setUserData((prevUserData) => ({
          ...prevUserData!,
          products: newProductList,
        }));
      }
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
    }
  }

  const handleRefreshClick = async () => {
    if (!userData) return;

    setRotate(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRotate(false);

    try {
      await UserRepositorie.update(userData.id, { products });
      console.log("Produtos atualizados com sucesso.");
    } catch (error) {
      console.error("Erro ao atualizar produtos: ", error);
    } finally {
      window.location.reload();
    }
  };

  if (loading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col items-center w-full p-12 gap-8">
      <h1 className="flex items-center gap-4 text-primary font-semibold text-3xl">
        Produtos Herbalife{" "}
        <IoRefresh
          className={`cursor-pointer min-w-8 ${rotate ? "rotate-360" : ""}`}
          onClick={handleRefreshClick}
        />
      </h1>
      <ul className="flex flex-wrap w-full justify-center gap-4">
        {userData?.products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            updateFavoriteProduct={updateFavoriteProduct}
            updateVisibleProduct={updateVisibleProduct}
          />
        ))}
      </ul>
    </div>
  );
}
