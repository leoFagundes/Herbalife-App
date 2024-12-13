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
import Alert from "@/components/alert";

export default function Products() {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [alert, setAlert] = useState({
    isOpen: false,
    type: "success" as "success" | "error" | "warning",
    timeout: 3000,
    message: "",
  });
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
      let productName;
      let favoriteStatus;
      if (userData) {
        const newProductList = userData.products.map((product) => {
          if (product.id === productId) {
            productName = product.name;
            favoriteStatus = !product.isFavorite;
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
      setAlert({
        ...alert,
        message: `${productName} ${
          favoriteStatus ? "está" : "não está"
        } favoritado!`,
        isOpen: true,
        timeout: 3000,
        type: "success",
      });
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
      setAlert({
        ...alert,
        message: `Erro, recarregue a página e tente novamente.`,
        isOpen: true,
        timeout: 3000,
        type: "error",
      });
    }
  }

  async function updateVisibleProduct(productId: string) {
    try {
      let productName;
      let visibleStatus;
      if (userData) {
        const newProductList = userData.products.map((product) => {
          if (product.id === productId) {
            productName = product.name;
            visibleStatus = !product.isVisible;
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
      setAlert({
        ...alert,
        message: `${productName} está ${
          visibleStatus ? "visível" : "invisível"
        }!`,
        isOpen: true,
        timeout: 3000,
        type: "success",
      });
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
      setAlert({
        ...alert,
        message: `Erro ao mudar a visibilidade deste produto, recarregue a página e tente novamente.`,
        isOpen: true,
        timeout: 3000,
        type: "error",
      });
    }
  }

  const handleRefreshClick = async () => {
    if (!userData) return;

    setRotate(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRotate(false);

    const updatedProducts = userData.products
      .filter((userProduct) =>
        products.some((generalProduct) => generalProduct.id === userProduct.id)
      )
      .map((userProduct) => {
        const generalProduct = products.find(
          (product) => product.id === userProduct.id
        );

        if (generalProduct && userProduct.off !== generalProduct.off) {
          return { ...userProduct, off: generalProduct.off };
        }

        return userProduct;
      });

    products.forEach((generalProduct) => {
      if (
        !userData.products.some(
          (userProduct) => userProduct.id === generalProduct.id
        )
      ) {
        updatedProducts.push(generalProduct);
      }
    });

    try {
      await UserRepositorie.update(userData.id, { products: updatedProducts });
      console.log("Produtos atualizados com sucesso.");
      setAlert({
        ...alert,
        message: `Produtos atualizados com sucesso!`,
        isOpen: true,
        timeout: 3000,
        type: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Erro ao atualizar produtos: ", error);
      setAlert({
        ...alert,
        message: `Erro ao atualizar produtos.`,
        isOpen: true,
        timeout: 3000,
        type: "error",
      });
    }
  };

  if (loading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col items-center w-full p-12 gap-8">
      <h1 className="flex items-center gap-4 text-primary font-semibold text-3xl">
        Produtos Herbalife{" "}
        <IoRefresh
          className={`cursor-pointer min-w-6 w-6 ${rotate ? "rotate-360" : ""}`}
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
      <Alert
        isOpen={alert.isOpen}
        onClose={() => setAlert({ ...alert, isOpen: false })}
        message={alert.message}
        timeout={alert.timeout}
        type={alert.type}
      />
    </div>
  );
}
