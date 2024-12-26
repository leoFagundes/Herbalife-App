"use client";

import Image from "next/image";
import financialIndependence1 from "@/assets/image/Indepedência Financeira_01.png";
import financialIndependence3 from "@/assets/image/Indepedência Financeira_03.png";
import lifesGood from "@/assets/image/Viva sua melhor vida.png";
import React from "react";
import UseUser from "@/hooks/useUser";
import { LoaderWithFullScreen } from "@/components/loader";
import { FiArrowRight } from "react-icons/fi";
import UseRedirectToContact from "@/hooks/useRedirectToContact";

interface EmployProps {
  params: {
    user: string;
  };
}

export default function Employ({ params }: EmployProps) {
  const { currentUser, isLoading } = UseUser(decodeURIComponent(params.user));

  function convertToEmbedLink(youtubeLink: string | undefined): string {
    if (youtubeLink) {
      const videoId = youtubeLink.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return "";
  }

  const handleWhatsappClick = UseRedirectToContact(currentUser);

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Faça parte do time Herbalife
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-8 lg:flex-nowrap flex-wrap">
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Você está tendo uma{" "}
              <span className="text-primary">
                oportunidade única em suas mãos
              </span>{" "}
              e recomendo fortemente que leia o conteúdo dessa página e ao final{" "}
              <span className="text-primary">
                tome uma decisão que pode mudar totalmente a sua vida e a vida
                da sua família
              </span>
              !
            </p>
            <p>
              Ao se tornar parte da Herbalife, você entra em uma rede global
              dedicada ao{" "}
              <span className="text-primary">bem-estar e à saúde</span>. Aqui,
              não oferecemos apenas produtos de qualidade, mas também uma
              oportunidade de{" "}
              <span className="text-primary">
                crescimento pessoal e financeiro
              </span>
              . Se você busca novas possibilidades, tanto para ajudar os outros
              quanto para alcançar seus próprios objetivos, a Herbalife pode e
              <span className="text-primary">deve</span> ser o próximo passo na
              sua jornada.
            </p>
          </article>
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card w-[300px] sm:w-[250px]"
              width={300}
              height={0}
              src={financialIndependence3.src}
              alt="financialIndependence"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Alcance sua liberdade financeira
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-8 lg:flex-nowrap flex-wrap">
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card w-[300px] sm:w-[250px]"
              width={300}
              height={0}
              src={financialIndependence1.src}
              alt="financialIndependence"
            />
          </div>
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Imagine ter a liberdade de trabalhar de onde quiser, no seu
              próprio tempo, e com a satisfação de ajudar os outros a alcançarem
              suas metas de saúde e bem-estar. A Herbalife oferece a
              oportunidade de criar uma{" "}
              <span className="text-primary">carreira sólida</span>, onde o seu
              esforço e dedicação{" "}
              <span className="text-primary">são recompensados</span>. Se você
              está em busca de uma{" "}
              <span className="text-primary">
                mudança real em sua vida financeira
              </span>
              , a Herbalife pode ser a chave para abrir portas e garantir um
              futuro mais próspero não só para você, mas também{" "}
              <span className="text-primary">para sua família</span>. Além
              disso, o <span className="text-primary">Plano de Marketing</span>{" "}
              da Herbalife é um dos mais sólidos e eficazes do{" "}
              <span className="text-primary">mundo</span>, oferecendo
              oportunidades reais de crescimento e sucesso.
            </p>
            <p>
              Se você está pronto para transformar sua vida e ser parte de algo
              maior, a Herbalife está aqui para te apoiar em cada etapa dessa
              jornada.
            </p>
            <p
              onClick={handleWhatsappClick}
              className="flex items-center gap-2 text-primary font-semibold underline cursor-pointer"
            >
              <FiArrowRight /> Eu quero minha liberdade financeira!
            </p>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Benefícios e Viagens de incentivo
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap">
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Os benefícios vão além de uma simples oportunidade de negócio. Ao
              alcançar metas e se destacar, você tem a chance de vivenciar
              experiências únicas,{" "}
              <span className="text-primary">
                incluindo viagens internacionais, cruzeiros, resorts e eventos
                exclusivos
              </span>
              . Esses incentivos são uma forma de{" "}
              <span className="text-primary">
                reconhecer o seu esforço e sucesso
              </span>
              , além de oferecer a oportunidade de conhecer novas culturas,
              ampliar sua rede de contatos e celebrar as conquistas junto a
              outros parceiros ao redor do mundo.
            </p>
            <p>
              Seja em destinos paradisíacos ou em eventos que reúnem os melhores
              do time, as viagens de incentivo da Herbalife são uma forma de
              recompensar seu{" "}
              <span className="text-primary">empenho e dedicação</span>. Além de
              crescer financeiramente, você terá momentos inesquecíveis, que vão
              te motivar ainda mais a continuar essa jornada de sucesso. Essa
              empresa valoriza{" "}
              <span className="text-primary">
                tanto o seu esforço que faz questão de pagar as melhores viagens
                e brindes como reconhecimento pelo seu trabalho árduo
              </span>
              .
            </p>
            <p
              onClick={handleWhatsappClick}
              className="flex items-center gap-2 text-primary font-semibold underline cursor-pointer"
            >
              <FiArrowRight /> Eu quero!
            </p>
          </article>
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card w-[300px] sm:w-[250px]"
              width={300}
              height={0}
              src={lifesGood.src}
              alt="financialIndependence"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Você está pronto para mudar de vida?
        </h2>
        <div className="flex flex-col items-center gap-4 lg:gap-20">
          <article className="flex flex-col gap-3 w-full self-start">
            {currentUser?.apresentationVideoDescription && (
              <p>
                {currentUser.apresentationVideoDescription
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            )}
          </article>
        </div>
        <div className="flex w-full justify-center">
          <iframe
            className="shadow-card"
            width="560"
            height="315"
            src={convertToEmbedLink(currentUser?.apresentationVideoLink)}
            title="Faça parte do time Herbalife"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          onClick={handleWhatsappClick}
          className="flex justify-center py-2 px-4 bg-primary text-white rounded-md shadow-card md:shadow-none hover:shadow-card hover:cursor-pointer"
        >
          CLIQUE AQUI! Entre em contato para que eu possa te explicar em
          detalhes como você pode começar a construir seu próprio negócio
        </div>
      </section>
    </div>
  );
}
