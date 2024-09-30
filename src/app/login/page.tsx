import Image from "next/image";
import logo from "@/assets/svg/logo-v3.svg";

export default function Login() {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center border-[2px] border-primary p-8 rounded-md shadow-card gap-4">
        <Image
          className="hover:cursor-pointer"
          width={180}
          height={0}
          src={logo.src}
          alt="herbalife-logo"
        />
        <h2 className="font-medium text-lg">Área de adminsitrador</h2>
      </div>
    </section>
  );
}
