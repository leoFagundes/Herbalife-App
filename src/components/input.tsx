import React, { ComponentProps, ReactNode } from "react";

interface InputProps extends ComponentProps<"input"> {
  icon?: ReactNode;
  error?: string;
}

export default function Input({ icon, error = "", ...props }: InputProps) {
  return (
    <div
      className={`relative flex items-center shadow-lg group bg-white rounded-md border border-primary ${
        error && "border-2 border-red-500 focus-within:border-red-500 mb-2"
      } focus-within:shadow-card`}
    >
      {icon && (
        <span
          className={`flex justify-center bg-font-color items-center w-8 h-8 text-primary-color ${
            error && "text-red-500"
          }`}
        >
          {icon}
        </span>
      )}
      <input
        className={`bg-white text-primary-color placeholder:text-sm placeholder:text-primary-color/60 ${
          icon ? "p-2" : "py-2 px-4"
        } outline-none border rounded-md ${
          error && "placeholder:text-red-500"
        }`}
        {...props}
      />
      {error && (
        <span className="text-red-500 font-medium text-xs absolute -bottom-5 left-2">
          {error}
        </span>
      )}
    </div>
  );
}
