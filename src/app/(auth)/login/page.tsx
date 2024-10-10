"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import { FiAtSign, FiLock, FiUsers } from "react-icons/fi";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const { emails } = UseUser();

  // Efeito para verificar o estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está logado, redireciona para a área de administração
        router.push("/admin/products");
      }
    });

    // Limpeza do efeito para evitar vazamento de memória
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(email, password);
      router.push("/admin/products");
    } catch (error) {
      setEmailError("Dados incorretos, tente novamente.");
      setPasswordError("Dados incorretos, tente novamente.");
    }
  };

  useEffect(() => {
    setEmailError("");
  }, [email]);

  useEffect(() => {
    setPasswordError("");
  }, [password]);

  if (loading) return <LoaderWithFullScreen />;

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
            data={emails}
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
