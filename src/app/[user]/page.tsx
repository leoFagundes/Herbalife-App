"use client";

import Loader from "@/components/loader";
import UseUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface UserProps {
  params: {
    user: string;
  };
}

export default function User({ params }: UserProps) {
  const router = useRouter();
  const { usernames } = UseUser();

  useEffect(() => {
    const specialRoutes = ["login", "register"];
    // Decodifica o nome de usuário da URL
    const decodedUsername = decodeURIComponent(params.user);

    if (usernames.length > 0) {
      if (
        !usernames.includes(decodedUsername) &&
        !specialRoutes.includes(decodedUsername)
      ) {
        router.push("/");
      } else {
        if (specialRoutes.includes(decodedUsername)) {
          router.push(`/${decodedUsername}`);
        } else {
          router.push(`/${params.user}/intro`);
        }
      }
    }
  }, [router, params, usernames]);

  return (
    <div className="flex h-screen fixed top-0 left-0 w-full justify-center items-center">
      <Loader />
    </div>
  );
}
