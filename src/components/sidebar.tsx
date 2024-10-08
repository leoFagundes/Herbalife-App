"use client";

import React, { useState } from "react";
import logo from "@/assets/svg/logo-v3.svg";
import Image from "next/image";
import { FiLayers, FiLogOut, FiSettings } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { icon: FiLayers, label: "Produtos", path: "products" },
    { icon: FiSettings, label: "Configurações", path: "configs" },
  ];
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = pathname.split("/").slice(-1)[0];

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <>
      <div className="w-[50px] sm:hidden"></div>
      <aside
        className={`w-[280px] min-h-screen border-r border-primary flex flex-col items-center p-8 pb-14 gap-8 sm:relative duration-300 bg-white fixed sm:translate-x-0 z-20 ${
          !isMenuOpen && "-translate-x-[230px]"
        }`}
      >
        <Image
          className="w-[150px]"
          width={150}
          height={0}
          src={logo.src}
          alt="herbalife-logo"
        />
        <section className="flex flex-col h-full gap-2">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <span
                onClick={() => router.push(`/admin/${item.path}`)}
                key={index}
                className={`flex items-center py-2 px-4 text-primary font-medium hover:cursor-pointer hover:underline gap-2 ${
                  item.path === currentPage && "underline font-semibold"
                }`}
              >
                <item.icon size={20} /> {item.label}
              </span>
            ))}
          </div>
          <span
            onClick={handleLogout}
            className="flex items-center py-2 px-4 text-primary font-medium hover:cursor-pointer hover:underline gap-2"
          >
            <FiLogOut size={20} /> Sair da conta
          </span>
        </section>
        <label className="sm:hidden flex lg:hidden flex-col gap-2 w-8 scale-75 absolute top-3 right-3 hover:cursor-pointer">
          <input
            className="peer hidden"
            type="checkbox"
            checked={isMenuOpen}
            onChange={(e) => setIsMenuOpen(e.target.checked)}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-primary duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </aside>
    </>
  );
}
