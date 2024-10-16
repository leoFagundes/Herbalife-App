"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import UseUser from "@/hooks/useUser";
import { LoaderWithFullScreen } from "@/components/loader";

interface ContactProps {
  params: {
    user: string;
  };
}

export default function Contact({ params }: ContactProps) {
  const { currentUser, isLoading } = UseUser(decodeURIComponent(params.user));

  if (isLoading) return <LoaderWithFullScreen />;

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${currentUser?.whatsapp}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${currentUser?.instagram}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${currentUser?.email}`, "_blank");
  };

  return (
    <div className="flex justify-center gap-x-16 gap-y-8 flex-wrap-reverse">
      {currentUser?.image && (
        <Image
          className="w-[350px] min-w-[350px] h-[450px] shadow-card rounded-lg"
          width={350}
          height={450}
          src={currentUser?.image}
          alt="profile"
        />
      )}
      <article className="flex flex-col gap-6 flex-1 min-w-[350px] px-4">
        <h2 className="font-semibold text-primary text-3xl">
          Entre em Contato
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="font-medium">
            {currentUser?.username}{" "}
            <span className="text-primary text-sm italic">
              (Distribuidor Independente Herbalife)
            </span>
          </li>
          {currentUser?.whatsapp && (
            <li
              className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm"
              onClick={handleWhatsappClick}
            >
              <FaWhatsapp className="text-primary w-5 h-5" />{" "}
              {currentUser?.whatsapp}
            </li>
          )}

          {currentUser?.instagram && (
            <li
              className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm"
              onClick={handleInstagramClick}
            >
              <FaInstagram className="text-primary w-5 h-5" />{" "}
              {currentUser?.instagram}
            </li>
          )}
          <li
            className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm"
            onClick={handleEmailClick}
          >
            <IoMailOutline className="text-primary w-5 h-5" />{" "}
            {currentUser?.email}
          </li>
        </ul>
        {currentUser?.personalDescription && (
          <p>{currentUser.personalDescription}</p>
        )}
      </article>
    </div>
  );
}
