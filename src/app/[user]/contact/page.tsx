import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div>
      <h2 className="font-semibold text-primary text-3xl">Entre em Contato</h2>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
          <FaWhatsapp className="text-primary w-5 h-5" /> (61) 99825-3228
        </li>
        <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
          <FaInstagram className="text-primary w-5 h-5" /> (61) 99825-3228
        </li>
        <li className="flex items-center gap-2 hover:cursor-pointer hover:underline text-sm">
          <IoMailOutline className="text-primary w-5 h-5" /> (61) 99825-3228
        </li>
      </ul>
    </div>
  );
}
