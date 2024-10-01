"use client";

import Image from "next/image";
import financialIndependence1 from "@/assets/image/Indepedência Financeira_01.png";
import financialIndependence3 from "@/assets/image/Indepedência Financeira_03.png";
import lifesGood from "@/assets/image/Viva sua melhor vida.png";
import React from "react";

interface EmployProps {
  params: {
    user: string;
  };
}

export default function Employ({ params }: EmployProps) {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Faça parte do time Herbalife
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap">
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
          </article>
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card"
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
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap">
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card"
              width={300}
              height={0}
              src={financialIndependence1.src}
              alt="financialIndependence"
            />
          </div>
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
          </article>
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card"
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
          </article>
        </div>
        <div className="flex w-full justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g0JeI9dSnYE?si=W3Q1NYx-MKv-UINg"
            title="Faça parte do time Herbalife"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          onClick={() => ""}
          className="flex justify-center py-2 px-4 bg-primary text-white rounded-md shadow-card md:shadow-none hover:shadow-card hover:cursor-pointer"
        >
          CLIQUE AQUI! Entre em contato para que eu possa te explicar em
          detalhes como você pode começar a construir seu próprio negócio
        </div>
      </section>
    </>
  );
}
