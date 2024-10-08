"use client";

import { UserProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { useRouter } from "next/navigation";
import { LoaderWithFullScreen } from "@/components/loader";

export default function Products() {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  if (loading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col items-center w-full p-12 gap-8">
      <h1 className="text-primary font-semibold text-3xl">
        Produtos Herbalife
      </h1>
      <ul className="flex flex-wrap w-full justify-center gap-4">
        {userData?.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}
