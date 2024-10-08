"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { FiAtSign, FiLock, FiUser, FiUsers } from "react-icons/fi";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import productsJSON from "@/utils/products-data.json";
import { ProductProps } from "@/types/types";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";
import { LoaderWithFullScreen } from "@/components/loader";

const TOKEN = "qwertyuiop";

export default function Register() {
  const [users, setUsers] = useState<string[]>([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [tokenError, setTokenError] = useState("");

  const router = useRouter();

  const products: ProductProps[] = productsJSON as ProductProps[];

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (token !== TOKEN) {
      setTokenError("Token de criação inválido.");
      return;
    }

    if (!username.trim()) {
      setUsernameError("Campo inválido.");
      return;
    }

    if (users.includes(username)) {
      setUsernameError("Nome de usuário já existe.");
      return;
    }

    if (password.trim().length < 6) {
      setPasswordError("Pelo menos 6 caracteres.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const user = userCredential.user;

        await UserRepositorie.createUserDocument(
          user,
          username,
          email,
          products
        );

        router.push(`/login`);
      }
    } catch (error) {
      setUsernameError("Erro ao criar conta. Verifique os dados.");
      setEmailError("Erro ao criar conta. Verifique os dados.");
      setPasswordError("Erro ao criar conta. Verifique os dados.");
    }
  };

  useEffect(() => {
    setUsernameError("");
  }, [username]);

  useEffect(() => {
    setPasswordError("");
  }, [password]);

  useEffect(() => {
    setEmailError("");
  }, [email]);

  if (loading || isLoading) return <LoaderWithFullScreen />;

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
          <h2 className="font-medium text-lg">Área de cadastro</h2>
          <Input
            value={username}
            error={usernameError}
            setValue={setUsername}
            placeholder="Username"
            icon={<FiUser size={18} />}
          />
          <Input
            type="email"
            value={email}
            error={emailError}
            setValue={setEmail}
            placeholder="E-mail"
            icon={<FiAtSign size={18} />}
          />
          <Input
            type="password"
            value={password}
            error={passwordError}
            setValue={setPassword}
            placeholder="Senha"
            icon={<FiLock size={18} />}
          />
          <Input
            type="password"
            value={token}
            error={tokenError}
            setValue={setToken}
            placeholder="Token de Criação"
            icon={<FiLock size={18} />}
          />
          <Button type="submit">Criar conta</Button>
          <span
            onClick={() => router.push("/login")}
            className="flex items-center gap-2 text-xs text-primary hover:cursor-pointer hover:underline"
          >
            Faça login <FiUsers size={12} />
          </span>
        </form>
      </div>
    </section>
  );
}
