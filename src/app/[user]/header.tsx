"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import { CiLogin } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiGrid,
  FiTrendingUp,
  FiUser,
  FiMinimize2,
  FiMaximize2,
} from "react-icons/fi";
import React from "react";
import UseUser from "@/hooks/useUser";
import { LoaderWithFullScreen } from "@/components/loader";

interface HeaderProps {
  params: {
    user: string;
  };
}

export default function Header({ params }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMaximize, setISMenuMaximize] = useState(false);

  const { usernames, isLoading } = UseUser();

  const pathname = usePathname();
  const router = useRouter();

  const currentPage = pathname.split("/").slice(-1)[0];
  const currentUser = pathname.split("/").slice(1)[0];

  useEffect(() => {
    const decodedUsername = decodeURIComponent(params.user);

    if (usernames.length > 0) {
      if (!usernames.includes(decodedUsername)) {
        router.push("/");
      }
    }
  }, [router, params, usernames]);

  console.log(currentUser);

  const menuItems = [
    { name: "Sobre", path: "about", icon: <FiTrendingUp size={24} /> },
    { name: "Produtos", path: "products", icon: <FiGrid size={24} /> },
    { name: "Contato", path: "contact", icon: <FiUser size={24} /> },
    {
      name: "Quero ser Herbalife",
      path: "employ",
      icon: <FiBriefcase size={24} />,
    },
  ];

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <>
      <header className="flex justify-center items-center fixed top-0 left-0 h-20 w-screen bg-white/50 backdrop-blur-sm z-40">
        <nav className="flex justify-center lg:justify-between gap-8 items-center w-11/12 lg:w-9/12 py-3 box-border relative max-w-[1300px]">
          <Image
            className="hover:cursor-pointer"
            onClick={() => router.push(`/${currentUser}`)}
            width={150}
            height={0}
            src={logo.src}
            alt="herbalife-logo"
          />
          <>
            <ul className="hidden items-center gap-8 text-primary font-medium lg:flex">
              {menuItems.map((item) => (
                <li
                  onClick={() => router.push(`/${currentUser}/${item.path}`)}
                  key={item.path}
                  className={`${
                    currentPage === item.path ? "active-item" : ""
                  } hover:cursor-pointer hover:font-semibold`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <CiLogin
              onClick={() => router.push("/login")}
              size={22}
              className="text-primary hover:cursor-pointer hidden lg:flex"
            />
          </>
          <>
            <label className="flex lg:hidden flex-col gap-2 w-8 scale-75 absolute right-3 hover:cursor-pointer">
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
            {isMenuOpen && (
              <div className="flex lg:hidden flex-col animate-fadein opacity-0 absolute -right-2 top-16 z-20 bg-white">
                <div className="flex-col border border-white-secondary py-3 flex gap-4 shadow-card rounded-md">
                  {menuItems.map((item, index) => (
                    <div
                      onClick={() =>
                        router.push(`/${currentUser}/${item.path}`)
                      }
                      key={index}
                      className={`${
                        currentPage === item.path ? "active-item" : ""
                      } group relative px-4 cursor-pointer`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-primary">
                        {item.icon}
                      </div>
                      <span
                        className={`text-center absolute top-0 right-0 w-[180px] -translate-x-14 z-20 origin-left ${
                          !isMenuMaximize ? "scale-0" : "scale-100"
                        } rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}

                  <div className="h-[1px] w-full bg-black/50" />
                  <span className="flex flex-col items-center text-xs hover:cursor-pointer">
                    <CiLogin onClick={() => router.push("/login")} size={22} />{" "}
                    Login
                  </span>

                  <span
                    onClick={() => setISMenuMaximize(!isMenuMaximize)}
                    className="flex flex-col items-center text-xs hover:cursor-pointer"
                  >
                    {!isMenuMaximize ? (
                      <>
                        <FiMaximize2 /> expandir
                      </>
                    ) : (
                      <>
                        <FiMinimize2 /> comprimir
                      </>
                    )}
                  </span>
                </div>
              </div>
            )}
          </>
        </nav>
      </header>
      <div className="h-20" />
    </>
  );
}
