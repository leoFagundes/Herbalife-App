"use client";

import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface UserProps {
  params: {
    user: string;
  };
}

export default function User({ params }: UserProps) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${params.user}/about`);
  }, [router, params]);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Loader />
    </div>
  );
}
