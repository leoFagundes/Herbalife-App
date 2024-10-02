"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import {
  FaImage,
  FaInstagram,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiLock, FiUser, FiVideo } from "react-icons/fi";

export default function Configs() {
  const [personalInfo, setPersonalInfo] = useState({
    id: "1",
    username: "",
    password: "",
    personalDescription: "",
    apresentationVideoLink: "",
    apresentationVideoDescription: "",
    whatsapp: "",
    instagram: "",
    email: "",
    image: "",
  });

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

  return (
    <div className="flex flex-col  items-center w-full p-12 gap-8">
      <h1 className="text-primary font-semibold text-3xl">Configurações</h1>
      <div className="border border-primary rounded-lg w-full p-8 max-w-[1000px]">
        <form className="flex flex-col items-center gap-5" onSubmit={() => ""}>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full justify-around">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center font-semibold text-xl">Credenciais</h2>
              <Input
                icon={<FiUser />}
                data={users}
                value={personalInfo.username}
                setValue={(value) =>
                  setPersonalInfo({ ...personalInfo, username: value })
                }
                label="Username"
                placeholder="Username"
              />
              <Input
                icon={<FiLock />}
                value={personalInfo.password}
                setValue={(value) =>
                  setPersonalInfo({ ...personalInfo, password: value })
                }
                type="password"
                label="Senha"
                placeholder="Senha"
              />
            </div>

            <div className="flex flex-col items-center gap-5">
              <h2 className="text-center font-semibold text-xl">
                Informações pessoais
              </h2>

              <Input
                value={personalInfo.personalDescription}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
                    personalDescription: value,
                  })
                }
                label="Descrição Pessoal"
                placeholder="Descrição Pessoal"
                multlines
              />
              <Input
                icon={<FaWhatsapp />}
                value={personalInfo.whatsapp}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
                    whatsapp: value,
                  })
                }
                label="Whatsapp"
                placeholder="Número de Whatsapp"
              />
              <Input
                icon={<FaInstagram />}
                value={personalInfo.instagram}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
                    instagram: value,
                  })
                }
                label="Instagram"
                placeholder="@ do Instagram"
              />
              <Input
                icon={<FaRegEnvelope />}
                value={personalInfo.email}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
                    email: value,
                  })
                }
                label="E-mail"
                placeholder="example@gmail.com"
              />
              <Input
                icon={<FaImage />}
                value={personalInfo.image}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
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
                value={personalInfo.apresentationVideoLink}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
                    apresentationVideoLink: value,
                  })
                }
                label="Vídeo de Apresentação"
                placeholder="Link do vídeo de apresentação"
              />

              <Input
                value={personalInfo.apresentationVideoDescription}
                setValue={(value) =>
                  setPersonalInfo({
                    ...personalInfo,
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
          <Button>Salvar</Button>
        </form>
      </div>
    </div>
  );
}
