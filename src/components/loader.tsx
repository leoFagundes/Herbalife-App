import Image from "next/image";
import logo from "@/assets/image/logo-v1.png";

interface LoaderProps {
  withLogo?: boolean;
  loaderSize?: "large" | "small";
  logoSize?: number;
}

export default function Loader({
  withLogo = true,
  loaderSize = "large",
  logoSize = loaderSize === "large" ? 40 : 18,
}: LoaderProps) {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center relative">
      <div
        className={` ${
          loaderSize === "large"
            ? "w-28 h-28 border-[6px]"
            : "w-10 h-10 border-4"
        }  text-primary text-4xl animate-spin border-white-secondary flex items-center justify-center border-t-primary rounded-full`}
      ></div>

      {withLogo && (
        <Image
          className="absolute animate-pulse"
          width={logoSize}
          height={0}
          src={logo.src}
          alt="herbalife-logo"
        />
      )}
    </div>
  );
}
