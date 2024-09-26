import Image from "next/image";
import logo from "@/assets/svg/logo-v2.svg";

interface AboutProps {
  params: {
    user: string;
  };
}

export default function About({ params }: AboutProps) {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          O que é a Herbalife?
        </h2>
        <div className="flex items-center">
          <article className="flex flex-col gap-3 w-full md:w-1/2 ">
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
          <div className="md:flex justify-center items-center w-1/2 hidden">
            <Image
              className="scale-110 lg:scale-150"
              width={250}
              height={0}
              src={logo.src}
              alt="herbalife-logo"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          O que é a Herbalife?
        </h2>
        <div className="flex items-center">
          <article className="flex flex-col gap-3 w-full md:w-1/2 ">
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
          <div className="md:flex justify-center items-center w-1/2 hidden">
            <Image
              className="scale-110 lg:scale-150"
              width={250}
              height={0}
              src={logo.src}
              alt="herbalife-logo"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          O que é a Herbalife?
        </h2>
        <div className="flex items-center">
          <article className="flex flex-col gap-3 w-full md:w-1/2 ">
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
          <div className="md:flex justify-center items-center w-1/2 hidden">
            <Image
              className="scale-110 lg:scale-150"
              width={250}
              height={0}
              src={logo.src}
              alt="herbalife-logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
