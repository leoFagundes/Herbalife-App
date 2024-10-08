"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import provisoryImage from "@/assets/image/leoFagundes-ef.jpg";
import UseUser from "@/hooks/useUser";

interface ContactProps {
  params: {
    user: string;
  };
}

export default function Contact({ params }: ContactProps) {
  const { currentUser } = UseUser(params.user);

  return (
    <div className="flex justify-center gap-x-16 gap-y-8 flex-wrap-reverse">
      <Image
        className="w-[350px] h-[450px] shadow-card rounded-lg"
        width={350}
        height={450}
        src={provisoryImage.src}
        alt="profile"
      />
      <article className="flex flex-col gap-6 flex-1 min-w-[350px]">
        <h2 className="font-semibold text-primary text-3xl">
          Entre em Contato
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="font-medium">{currentUser?.username}</li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
            <FaWhatsapp className="text-primary w-5 h-5" /> (61) 99825-3228
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
            <FaInstagram className="text-primary w-5 h-5" /> seuinsta
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
            <IoMailOutline className="text-primary w-5 h-5" /> seuemail
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis
          maiores illum dolore asperiores illo officia quas cupiditate hic! At
          deserunt esse exercitationem amet tenetur laboriosam a reprehenderit
          eius perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Provident, earum cupiditate officiis aut sunt architecto
          laboriosam ipsam necessitatibus aspernatur temporibus fugiat, dolore,
          blanditiis veniam! Illum inventore ullam quas ex amet?
        </p>
      </article>
    </div>
  );
}
