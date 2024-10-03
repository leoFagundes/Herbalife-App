"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { FiLock, FiUser, FiUsers } from "react-icons/fi";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import productsJSON from "@/utils/products-data.json";
import { ProductProps } from "@/types/types";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [users, setUsers] = useState([
    "Leonardo",
    "Rodrigo",
    "Valéria",
    "Juliana",
    "Marcelo",
    "Patrícia",
    "Carlos",
    "Fernanda",
    "Rafael",
    "Mariana",
    "Gustavo",
    "Renata",
    "Paulo",
    "Thiago",
    "Isabela",
    "Eduardo",
    "Camila",
    "Bruno",
  ]);
  const router = useRouter();

  const products: ProductProps[] = productsJSON as ProductProps[];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!users.includes(username)) {
      setUsernameError("Esse distribuidor não existe!");
      return;
    }

    if (password !== "1235") {
      setPasswordError("Senha inválida, tente novamente.");
      return;
    }

    if (
      await UserRepositorie.create({
        username: username,
        password: "1235",
        personalDescription: "a",
        apresentationVideoLink: "a",
        apresentationVideoDescription: "a",
        whatsapp: "a",
        instagram: "a",
        email: "a",
        image: "a",
        products: products,
      })
    ) {
      console.log("uhuuuul");
    }

    router.push(`/admin/products`);
  };

  useEffect(() => {
    setUsernameError("");
  }, [username]);

  useEffect(() => {
    setPasswordError("");
  }, [password]);

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="font-medium text-lg">Área de administração</h2>
          <Input
            data={users}
            value={username}
            error={usernameError}
            setValue={setUsername}
            placeholder="Username"
            icon={<FiUser size={18} />}
          />
          <Input
            type="password"
            value={password}
            error={passwordError}
            setValue={setPassword}
            placeholder="Senha"
            icon={<FiLock size={18} />}
          />
          <Button type="submit">Entrar</Button>
          <span
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-xs text-primary hover:cursor-pointer hover:underline"
          >
            Encontre o seu distribuidor <FiUsers size={12} />
          </span>
        </form>
      </div>
    </section>
  );
}
