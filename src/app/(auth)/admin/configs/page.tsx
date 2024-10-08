"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";
import { auth } from "@/services/firebase";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { UserProps } from "@/types/types";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  FaImage,
  FaInstagram,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiUser, FiVideo } from "react-icons/fi";

export default function Configs() {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [usernameError, setUsernameError] = useState("");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const { usernames } = UseUser();

  useEffect(() => {
    setUsernameError("");
  }, [userData?.username]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Usuário autenticado:", user.uid);

        const userInfo = await UserRepositorie.getById(user.uid);
        setUserData(userInfo);
        setUsername(userInfo ? userInfo?.username : "");
      } else {
        console.log("Usuário não autenticado.");
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(usernames.filter((name) => name !== userData?.username));

    if (
      userData &&
      usernames.filter((name) => name !== username).includes(userData.username)
    ) {
      setUsernameError("Nome já está sendo utilizado.");
      return;
    }

    setLoading(true);
    try {
      if (userData) {
        await UserRepositorie.update(userData?.id, { ...userData });
      }
    } catch (error) {
      console.error("Erro ao salvar informações: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderWithFullScreen />;

  if (!userData) return <></>;

  return (
    <div className="flex flex-col  items-center w-full p-12 gap-8">
      <h1 className="text-primary font-semibold text-3xl">Configurações</h1>
      <div className="border border-primary rounded-lg w-full p-8 max-w-[1000px]">
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full justify-around">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center font-semibold text-xl">Credenciais</h2>
              <Input
                icon={<FiUser />}
                value={userData.username}
                error={usernameError}
                setValue={(value) =>
                  setUserData({ ...userData, username: value })
                }
                label="Username"
                placeholder="Username"
              />
            </div>

            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center font-semibold text-xl">
                Informações pessoais
              </h2>

              <Input
                value={userData.personalDescription}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    personalDescription: value,
                  })
                }
                label="Descrição Pessoal"
                placeholder="Descrição Pessoal"
                multlines
              />
              <Input
                icon={<FaWhatsapp />}
                value={userData.whatsapp}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    whatsapp: value,
                  })
                }
                label="Whatsapp"
                placeholder="Número de Whatsapp"
              />
              <Input
                icon={<FaInstagram />}
                value={userData.instagram}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    instagram: value,
                  })
                }
                label="Instagram"
                placeholder="@ do Instagram"
              />
              <Input
                icon={<FaRegEnvelope />}
                value={userData.email}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    email: value,
                  })
                }
                label="E-mail"
                placeholder="example@gmail.com"
              />
              <Input
                icon={<FaImage />}
                value={userData.image}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    image: value,
                  })
                }
                type="file"
                label="Foto de apresentação"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center font-semibold text-xl">
                Apresentação Herbalife
              </h2>

              <Input
                icon={<FiVideo />}
                value={userData.apresentationVideoLink}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    apresentationVideoLink: value,
                  })
                }
                label="Vídeo de Apresentação"
                placeholder="Link do vídeo de apresentação"
              />

              <Input
                value={userData.apresentationVideoDescription}
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    apresentationVideoDescription: value,
                  })
                }
                label="Descrição do Vídeo"
                placeholder="Descrição do vídeo de apresentação"
                multlines
              />
            </div>
          </section>
          <div className="h-[1px] bg-primary w-full" />
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </div>
  );
}
