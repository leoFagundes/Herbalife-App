import React, { ReactNode } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <section
          onClick={onClose}
          className="z-50 fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-gray/30 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[300px] h-[300px] p-8 rounded-md shadow-card bg-white"
          >
            {children}
            <FiX
              onClick={onClose}
              className="absolute top-4 right-4 cursor-pointer"
              size={20}
            />
          </div>
        </section>
      )}
    </>
  );
}
