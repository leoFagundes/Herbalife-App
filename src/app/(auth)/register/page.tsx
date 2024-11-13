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

  const [createUserWithEmailAndPassword, loading] =
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
      console.error("Error: ", error);
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
      <svg
        className="absolute top-0 right-0 lg:translate-x-20 lg:-translate-y-28 md:-translate-y-36 md:translate-x-32 -translate-y-44 translate-x-40 overflow-visible lg:scale-100 md:scale-75 scale-50"
        width="448"
        height="488"
        viewBox="0 0 448 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo-herbalife-stroke">
          <path
            className="origin-center animate-leaf1"
            id="leaft3"
            d="M232.376 304.706C234.1 304.214 233.454 302.719 232.838 301.935C232.54 301.556 224.164 286.128 219.751 278.379C217.903 275.135 211.591 261.597 207.434 253.129C202.661 243.406 192.533 220.678 185.725 208.479C174.64 188.618 170.483 179.996 161.399 167.525C148.726 150.127 141.076 142.359 133.069 135.808C119.521 124.723 108.589 119.431 104.432 117.333C91.1914 110.649 77.9506 108.033 72.7158 107.171C60.5527 105.17 44.8485 105.748 35.7646 106.555C19.1366 108.033 6.35759 111.605 2.04659 113.33C0.199033 114.069 1.22536 115.581 1.89263 116.409C6.35765 121.952 20.5223 148.741 25.757 161.828L46.8499 206.478C58.7975 230.25 72.0486 248.92 77.1807 255.284C85.0031 264.984 87.9583 272.066 112.746 290.542C120.445 296.28 134.609 303.475 142.307 305.784C159.243 310.865 170.175 312.251 178.335 312.251C188.958 312.251 200.044 311.302 204.662 310.557C218.981 308.248 230.22 305.322 232.376 304.706Z"
            stroke="#006429"
            stroke-width="2"
          />
          <path
            className="origin-center animate-leaf2"
            id="leaf2"
            d="M254.903 275.25C255.829 276.786 257.103 275.771 257.699 274.972C257.987 274.586 270.696 262.476 277.026 256.194C279.676 253.564 291.098 243.938 298.189 237.716C306.329 230.572 325.629 214.867 335.629 205.112C351.911 189.229 359.15 182.967 368.819 170.944C382.309 154.172 387.812 144.76 392.048 135.322C399.215 119.351 401.472 107.417 402.413 102.857C405.411 88.331 404.483 74.866 403.949 69.5878C402.708 57.3237 398.054 42.3141 394.904 33.7554C389.14 18.0886 382.358 6.68392 379.569 2.97202C378.373 1.38122 377.182 2.76641 376.556 3.62666C372.37 9.38297 350.203 30.0456 338.935 38.5129L301.334 70.523C281.502 88.2581 266.934 105.921 262.129 112.535C254.806 122.617 248.74 127.318 237.37 156.067C233.839 164.995 230.588 180.547 230.367 188.581C229.88 206.256 231.394 217.17 233.523 225.047C236.294 235.303 240.102 245.757 242.026 250.022C247.99 263.242 253.746 273.329 254.903 275.25Z"
            stroke="#006429"
            stroke-width="2"
          />
          <path
            className="origin-center animate-leaf3"
            id="leaf1"
            d="M254.135 484.961C255.061 486.497 256.335 485.483 256.931 484.684C257.219 484.298 269.928 472.187 276.258 465.905C278.908 463.275 290.331 453.649 297.421 447.427C305.562 440.283 324.861 424.578 334.861 414.823C351.143 398.94 358.382 392.678 368.052 380.655C381.541 363.883 387.045 354.471 391.28 345.033C398.447 329.062 400.704 317.128 401.645 312.568C404.643 298.042 403.715 284.577 403.181 279.299C401.941 267.035 397.286 252.025 394.137 243.466C388.372 227.8 381.59 216.395 378.801 212.683C377.606 211.092 376.414 212.477 375.788 213.338C371.602 219.094 349.435 239.757 338.167 248.224L300.566 280.234C280.734 297.969 266.166 315.632 261.362 322.247C254.038 332.328 247.972 337.029 236.603 365.778C233.072 374.707 229.821 390.258 229.599 398.292C229.112 415.967 230.626 426.881 232.755 434.759C235.526 445.014 239.334 455.468 241.258 459.733C247.223 472.953 252.979 483.04 254.135 484.961Z"
            stroke="#006429"
            stroke-width="2"
          />
        </g>
      </svg>
      <svg
        className="absolute bottom-0 left-0 lg:-translate-x-28 lg:translate-y-28 md:translate-y-36 md:-translate-x-32 translate-y-44 -translate-x-40 overflow-visible lg:scale-100 md:scale-75 scale-50"
        width="448"
        height="488"
        viewBox="0 0 448 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo-herbalife-stroke">
          <path
            className="origin-center animate-leaf1"
            id="leaft3"
            d="M232.376 304.706C234.1 304.214 233.454 302.719 232.838 301.935C232.54 301.556 224.164 286.128 219.751 278.379C217.903 275.135 211.591 261.597 207.434 253.129C202.661 243.406 192.533 220.678 185.725 208.479C174.64 188.618 170.483 179.996 161.399 167.525C148.726 150.127 141.076 142.359 133.069 135.808C119.521 124.723 108.589 119.431 104.432 117.333C91.1914 110.649 77.9506 108.033 72.7158 107.171C60.5527 105.17 44.8485 105.748 35.7646 106.555C19.1366 108.033 6.35759 111.605 2.04659 113.33C0.199033 114.069 1.22536 115.581 1.89263 116.409C6.35765 121.952 20.5223 148.741 25.757 161.828L46.8499 206.478C58.7975 230.25 72.0486 248.92 77.1807 255.284C85.0031 264.984 87.9583 272.066 112.746 290.542C120.445 296.28 134.609 303.475 142.307 305.784C159.243 310.865 170.175 312.251 178.335 312.251C188.958 312.251 200.044 311.302 204.662 310.557C218.981 308.248 230.22 305.322 232.376 304.706Z"
            stroke="#006429"
            stroke-width="2"
          />
          <path
            className="origin-center animate-leaf2"
            id="leaf2"
            d="M254.903 275.25C255.829 276.786 257.103 275.771 257.699 274.972C257.987 274.586 270.696 262.476 277.026 256.194C279.676 253.564 291.098 243.938 298.189 237.716C306.329 230.572 325.629 214.867 335.629 205.112C351.911 189.229 359.15 182.967 368.819 170.944C382.309 154.172 387.812 144.76 392.048 135.322C399.215 119.351 401.472 107.417 402.413 102.857C405.411 88.331 404.483 74.866 403.949 69.5878C402.708 57.3237 398.054 42.3141 394.904 33.7554C389.14 18.0886 382.358 6.68392 379.569 2.97202C378.373 1.38122 377.182 2.76641 376.556 3.62666C372.37 9.38297 350.203 30.0456 338.935 38.5129L301.334 70.523C281.502 88.2581 266.934 105.921 262.129 112.535C254.806 122.617 248.74 127.318 237.37 156.067C233.839 164.995 230.588 180.547 230.367 188.581C229.88 206.256 231.394 217.17 233.523 225.047C236.294 235.303 240.102 245.757 242.026 250.022C247.99 263.242 253.746 273.329 254.903 275.25Z"
            stroke="#006429"
            stroke-width="2"
          />
          <path
            className="origin-center animate-leaf3"
            id="leaf1"
            d="M254.135 484.961C255.061 486.497 256.335 485.483 256.931 484.684C257.219 484.298 269.928 472.187 276.258 465.905C278.908 463.275 290.331 453.649 297.421 447.427C305.562 440.283 324.861 424.578 334.861 414.823C351.143 398.94 358.382 392.678 368.052 380.655C381.541 363.883 387.045 354.471 391.28 345.033C398.447 329.062 400.704 317.128 401.645 312.568C404.643 298.042 403.715 284.577 403.181 279.299C401.941 267.035 397.286 252.025 394.137 243.466C388.372 227.8 381.59 216.395 378.801 212.683C377.606 211.092 376.414 212.477 375.788 213.338C371.602 219.094 349.435 239.757 338.167 248.224L300.566 280.234C280.734 297.969 266.166 315.632 261.362 322.247C254.038 332.328 247.972 337.029 236.603 365.778C233.072 374.707 229.821 390.258 229.599 398.292C229.112 415.967 230.626 426.881 232.755 434.759C235.526 445.014 239.334 455.468 241.258 459.733C247.223 472.953 252.979 483.04 254.135 484.961Z"
            stroke="#006429"
            stroke-width="2"
          />
        </g>
      </svg>
    </section>
  );
}
