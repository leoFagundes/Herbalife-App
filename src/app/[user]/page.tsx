"use client";

import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserProps {
  params: {
    user: string;
  };
}

export default function User({ params }: UserProps) {
  const [users, setUsers] = useState(["leozin"]);
  const router = useRouter();

  useEffect(() => {
    const specialRoutes = ["login"];

    if (!users.includes(params.user)) {
      router.push("/");
    }

    if (specialRoutes.includes(params.user)) {
      router.push(`/${params.user}`);
    } else {
      router.push(`/${params.user}/about`);
    }
  }, [router, params]);

  return (
    <div className="flex h-screen fixed top-0 left-0 w-full justify-center items-center">
      <Loader />
    </div>
  );
}
