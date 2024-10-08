"use client";

import Loader from "@/components/loader";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserProps {
  params: {
    user: string;
  };
}

export default function User({ params }: UserProps) {
  const [users, setUsers] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersFetched = await UserRepositorie.getAll();
        if (usersFetched) {
          setUsers(usersFetched?.map((user) => user.username));
        }
      } catch (error) {
        console.log("Erro ao carregar usuários: ", error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const specialRoutes = ["login", "register"];

    if (users.length > 0) {
      if (
        !users.includes(params.user) &&
        !specialRoutes.includes(params.user)
      ) {
        router.push("/");
      } else {
        if (specialRoutes.includes(params.user)) {
          router.push(`/${params.user}`);
        } else {
          router.push(`/${params.user}/about`);
        }
      }
    }
  }, [router, params, users]);

  return (
    <div className="flex h-screen fixed top-0 left-0 w-full justify-center items-center">
      <Loader />
    </div>
  );
}
