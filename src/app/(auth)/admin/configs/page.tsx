"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";
import { auth, storage } from "@/services/firebase";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { UserProps } from "@/types/types";
import { onAuthStateChanged } from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
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
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const [image, setImage] = useState<null | File>(null);

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

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let imageUrl = "";

    if (
      userData &&
      usernames.filter((name) => name !== username).includes(userData.username)
    ) {
      setUsernameError("Nome já está sendo utilizado.");
      return;
    }

    setLoading(true);
    try {
      if (image) {
        if (userData?.image) {
          const oldImageRef = ref(storage, userData.image);
          await deleteObject(oldImageRef);
          console.log("Imagem antiga deletada com sucesso!");
        }
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Use uma Promise para esperar o upload terminar e obter o URL da imagem
        imageUrl = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(progress);
            },
            (error) => {
              alert(error);
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        });
      }

      console.log("URL", imageUrl);

      if (userData) {
        const updatedData = imageUrl
          ? { ...userData, image: imageUrl }
          : { ...userData };

        await UserRepositorie.update(userData.id, updatedData);
      }
    } catch (error) {
      console.error("Erro ao salvar informações: ", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteImageFunction = async () => {
    if (!userData?.image) return; // Verifica se existe uma imagem para deletar

    setLoading(true);
    try {
      // Referência da imagem no Firebase Storage
      const imageRef = ref(storage, userData.image);

      // Deletar a imagem do Storage
      await deleteObject(imageRef);
      console.log("Imagem deletada com sucesso!");

      // Atualizar o campo 'image' no banco de dados para uma string vazia
      await UserRepositorie.update(userData.id, { ...userData, image: "" });
    } catch (error) {
      console.error("Erro ao deletar a imagem: ", error);
    } finally {
      // Atualizar o estado local para refletir a remoção
      setUserData({ ...userData, image: "" });
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
                placeholder="ex: 5561998253228"
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
                value={
                  image
                    ? image.name
                    : userData.image
                    ? decodeURIComponent(
                        userData.image.split("images")[1].split("?")[0]
                      ).replace("/", "")
                    : ""
                }
                setValue={(value) =>
                  setUserData({
                    ...userData,
                    image: value,
                  })
                }
                setImage={setImage}
                type="file"
                label="Foto de apresentação"
                placeholder="example@gmail.com"
                deleteImageFunction={deleteImageFunction}
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
