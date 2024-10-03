"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import Input from "@/components/input";
import { FormEvent, useEffect, useState } from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { LoaderWithFullScreen } from "@/components/loader";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("teste");

    if (!users.includes(search)) {
      setSearchError("Esse distribuidor não existe!");
      return;
    }

    router.push(`/${search}`);
  };

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const usersFetched = await UserRepositorie.getAll();
        if (usersFetched) {
          setUsers(usersFetched?.map((user) => user.username));
        }
      } catch (error) {
        console.log("Erro ao carregar usuários: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    setSearchError("");
  }, [search]);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      {isLoading && <LoaderWithFullScreen />}
      <div className="flex flex-col items-center border-[2px] border-primary p-8 rounded-md shadow-card gap-4">
        <Image
          className="min-w-[180px]"
          width={180}
          height={0}
          src={logo.src}
          alt="herbalife-logo"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="font-medium text-lg">Encontre o seu distribuidor</h2>
          <Input
            data={users}
            value={search}
            error={searchError}
            setValue={setSearch}
            placeholder="ex: Rodrigo Fagundes"
            icon={<FiSearch size={18} />}
          />
          <Button>Buscar</Button>
          <span
            onClick={() => router.push("/login")}
            className="flex items-center gap-2 text-xs text-primary hover:cursor-pointer hover:underline"
          >
            Área de administrador <FiLogIn size={12} />
          </span>
        </form>
      </div>
    </section>
  );
}
