"use client";

import { LoaderWithFullScreen } from "@/components/loader";
import UseUser from "@/hooks/useUser";
import Image from "next/image";
import valeria from "@/assets/image/valeria.png";
import rodrigo from "@/assets/image/rodrigo.png";
import get from "@/assets/image/pins/Pin_GET.png";
import presidente1 from "@/assets/image/pins/Pin Presidente 1 Diamante.png";
import presidente from "@/assets/image/pins/Pin Presidentes PT.png";

interface TestimonialsProps {
  params: {
    user: string;
  };
}

export default function Testimonials({ params }: TestimonialsProps) {
  const { isLoading } = UseUser(decodeURIComponent(params.user));

  if (isLoading) return <LoaderWithFullScreen />;

  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <h2 className="font-semibold text-primary text-3xl sm:text-4xl">
        Testemunhos
      </h2>
      <section>
        <div className="flex justify-center gap-4 lg:flex-nowrap flex-wrap">
          <Image
            className="rounded-md shadow-card sm:min-w-[500px] min-w-max w-[300px] sm:h-[333px] h-[200px]"
            src={valeria.src}
            width={500}
            height={0}
            alt="Resultado Valéria"
          />
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-primary">
              Valéria Fagundes
            </h3>
            <p>
              Meu nome é Valéria Fagundes, sou Coach de Bem-Estar e uso
              Herbalife há 29 anos! Tenho 57 anos e sou apaixonada pelos
              produtos Herbalife! Sinto-me ótima, com muita disposição e
              energia! Mas nem sempre foi assim…
            </p>
            <p>
              Eu costumava ser preguiçosa para treinar, tomava refrigerantes,
              sucos com açúcar, comia as comidas mais práticas, doces sempre que
              queria, sem nenhum controle, e pão todos os dias, porque é muito
              bom! Cheguei a estar com 6 kg a mais e muita gordura abdominal.
              Também sofria de gastrite e, em certo ponto, cheguei a desenvolver
              princípio de úlcera!
            </p>
            <p>
              Foi então que comecei a usar Herbalife. Reduzi 22 centímetros de
              circunferência abdominal, perdi 6 kg, e minha gastrite
              desapareceu! Imagina a felicidade! Herbalife é vida! Uso todos os
              produtos da nossa linha, e, no momento, estou buscando novos
              resultados para ganho muscular!
            </p>
          </article>
        </div>
      </section>
      <section>
        <div className="flex justify-center gap-4 lg:flex-nowrap flex-wrap">
          <Image
            className="rounded-md shadow-card sm:min-w-[500px] min-w-max w-[300px] sm:h-[333px] h-[200px]"
            src={rodrigo.src}
            width={500}
            height={0}
            alt="Resultado Valéria"
          />
          <article className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-primary">
              Rodrigo Fagundes
            </h3>
            <p>
              Meu nome é Valéria Fagundes, sou Coach de Bem-Estar e uso
              Herbalife há 29 anos! Tenho 57 anos e sou apaixonada pelos
              produtos Herbalife! Sinto-me ótima, com muita disposição e
              energia! Mas nem sempre foi assim…
            </p>
            <p>
              Eu costumava ser preguiçosa para treinar, tomava refrigerantes,
              sucos com açúcar, comia as comidas mais práticas, doces sempre que
              queria, sem nenhum controle, e pão todos os dias, porque é muito
              bom! Cheguei a estar com 6 kg a mais e muita gordura abdominal.
              Também sofria de gastrite e, em certo ponto, cheguei a desenvolver
              princípio de úlcera!
            </p>
            <p>
              Foi então que comecei a usar Herbalife. Reduzi 22 centímetros de
              circunferência abdominal, perdi 6 kg, e minha gastrite
              desapareceu! Imagina a felicidade! Herbalife é vida! Uso todos os
              produtos da nossa linha, e, no momento, estou buscando novos
              resultados para ganho muscular!
            </p>
          </article>
        </div>
      </section>
      <h2 className="font-semibold text-primary text-3xl sm:text-4xl">
        Histórias de Sucesso
      </h2>
      <section className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <Image
            className="w-[80px] h-[80px]"
            src={get.src}
            width={200}
            height={0}
            alt="Resultado Valéria"
          />
          <h2 className="font-semibold text-primary text-2xl sm:text-3xl">
            Ornelas e Flávia_Almeida
          </h2>
        </div>
        <video width="100%" height="auto" controls>
          <source
            src="/assets/video/Novas_GET_Brasil_Ornelas_&_Flávia_Almeida.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>

      <section className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <Image
            className="w-[80px] h-[80px]"
            src={get.src}
            width={200}
            height={0}
            alt="Resultado Valéria"
          />
          <h2 className="font-semibold text-primary text-2xl sm:text-3xl">
            Joelma e Laurindo Pires
          </h2>
        </div>

        <video width="100%" height="auto" controls>
          <source
            src="/assets/video/Novos GET_Brasil_Joelma & Laurindo Pires.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>

      <section className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <Image
            className="w-[110px] h-[110px]"
            src={presidente1.src}
            width={200}
            height={0}
            alt="Resultado Valéria"
          />
          <h2 className="font-semibold text-primary text-2xl sm:text-3xl">
            Ana Raquel Hernández e Juan Camparini (Guatemala)
          </h2>
        </div>

        <video width="100%" height="auto" controls>
          <source
            src="/assets/video/Novo 1D_ Guatemala_Ana_Raquel_Hernández & Juan Camparini.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>

      <section className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <Image
            className="w-[80px] h-[80px]"
            src={presidente.src}
            width={200}
            height={0}
            alt="Resultado Valéria"
          />
          <h2 className="font-semibold text-primary text-2xl sm:text-3xl">
            Arnulfo Castro e Marta Sunuc (Guatemala)
          </h2>
        </div>

        <video width="100%" height="auto" controls>
          <source
            src="/assets/video/Novos PT_Guatemala_Arnulfo_Castro_& _Marta Sunuc.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>
    </div>
  );
}
