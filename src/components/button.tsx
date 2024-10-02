import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white font-medium px-4 py-2 max-w-[250px] shadow-md hover:shadow-card rounded-lg w-full"
      {...props}
    >
      {children}
    </button>
  );
}
