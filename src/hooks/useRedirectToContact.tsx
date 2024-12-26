"use client";

import { UserProps } from "@/types/types";
import { useRouter } from "next/navigation";

export default function UseRedirectToContact(currentUser: UserProps | null) {
  const router = useRouter();
  const isMobile = window.innerWidth < 640;

  if (!currentUser) return;

  const handleClick = () => {
    if (isMobile && currentUser.whatsapp) {
      window.open(`https://wa.me/${currentUser.whatsapp}`, "_blank");
      return;
    }

    if (isMobile && currentUser.instagram) {
      window.open(
        `https://www.instagram.com/${currentUser.instagram}`,
        "_blank"
      );
      return;
    }

    if (!isMobile && currentUser.instagram) {
      window.open(
        `https://www.instagram.com/${currentUser.instagram}`,
        "_blank"
      );
      return;
    }

    router.push(`/${decodeURIComponent(currentUser.username)}/contact`);
  };

  return handleClick;
}
