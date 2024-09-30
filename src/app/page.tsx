"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import Input from "@/components/input";
import { useState } from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";

export default function Home() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(["Leo", "Rodrigo", "Valéria"]);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center border-[2px] border-primary p-8 rounded-md shadow-card gap-4">
        <Image
          className="min-w-[180px]"
          width={180}
          height={0}
          src={logo.src}
          alt="herbalife-logo"
        />
        <h2 className="font-medium text-lg">Encontre o seu distribuidor</h2>
        <div className="flex flex-col items-center gap-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ex: Rodrigo Fagundes"
            icon={<FiSearch size={18} className="text-primary" />}
          />
          <span className="flex items-center gap-2 text-xs text-primary hover:cursor-pointer hover:underline">
            Área de administrador <FiLogIn size={12} />
          </span>
        </div>
      </div>
    </section>
  );
}
