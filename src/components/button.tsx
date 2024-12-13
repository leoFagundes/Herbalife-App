import { ComponentProps, ReactNode } from "react";
import Loader from "./loader";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  loading?: boolean;
}

export default function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white font-medium px-4 py-2 max-w-[250px] shadow-md hover:shadow-card rounded-lg w-full"
      {...props}
    >
      {loading ? <Loader loaderSize="extraSmall" withLogo={false} /> : children}
    </button>
  );
}
