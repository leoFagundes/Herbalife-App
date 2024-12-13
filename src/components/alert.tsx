"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export interface AlertProps {
  isOpen: boolean;
  onClose: VoidFunction;
  type?: "success" | "error" | "warning";
  message: string;
  timeout?: number;
}

export default function Alert({
  isOpen,
  onClose,
  type = "success",
  message,
  timeout = 3000,
}: AlertProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, timeout, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`flex items-center gap-2 fixed bottom-2 right-2 z-50 p-4 min-w-[160px] rounded shadow-lg animate-fadein text-center ${
        type === "success"
          ? "bg-primary text-white"
          : type === "error"
          ? "bg-error text-white"
          : "bg-warning text-black"
      }`}
    >
      <span className="flex-1">{message}</span>
      <FiX onClick={onClose} className="cursor-pointer" />
    </div>
  );
}
