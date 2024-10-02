"use client";

import React, { ComponentProps, ReactNode, useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiTrash, FiX } from "react-icons/fi";
import { PiImageBrokenLight } from "react-icons/pi";

interface InputProps extends ComponentProps<"input"> {
  icon?: ReactNode;
  error?: string;
  data?: string[];
  value: string;
  setValue: (value: string) => void;
  label?: string;
  multlines?: boolean;
  placeholder: string;
}

export default function Input({
  icon,
  error = "",
  data,
  value,
  setValue,
  type = "text",
  label,
  multlines = false,
  placeholder,
  ...props
}: InputProps) {
  const [isBoxOpen, setIsBoxOpen] = useState(true);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const [inputType, setInputType] = useState(type);

  const highlightText = (name: string, value: string) => {
    const normalizedValue = value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const normalizedName = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const startIndex = normalizedName.indexOf(normalizedValue);

    if (startIndex === -1 || !value) {
      return <span>{name}</span>;
    }

    const beforeMatch = name.slice(0, startIndex);
    const match = name.slice(startIndex, startIndex + value.length);
    const afterMatch = name.slice(startIndex + value.length);

    return (
      <span>
        {beforeMatch}
        <span className="text-primary font-semibold">{match}</span>
        {afterMatch}
      </span>
    );
  };

  const filteredData = data?.filter((name) => {
    if (value) {
      const normalizedValue = value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const normalizedName = name
        ?.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return normalizedName.includes(normalizedValue);
    }
    return true;
  });

  const filteredEqualData = data?.filter((name) => {
    if (value) {
      return name === value;
    }
    return false;
  });

  useEffect(() => {
    if (filteredEqualData?.length && filteredEqualData?.length > 0) {
      setIsBoxOpen(false);
    } else if (!isManuallyClosed) {
      setIsBoxOpen(true);
    }
  }, [value, filteredEqualData, isManuallyClosed]);

  useEffect(() => {
    setInputType(type);
  }, []);

  return (
    <div
      className={`w-full max-w-[250px] relative flex items-center shadow-lg group bg-white ${
        filteredData && filteredData.length > 0 && value && isBoxOpen
          ? "rounded-tl-md rounded-tr-md"
          : "rounded-md"
      } border border-primary ${
        error && "border-2 border-red-500 focus-within:border-red-500 mb-3"
      } focus-within:shadow-card`}
    >
      {icon && (
        <span
          className={`flex ${
            inputType === "file" && "flex-col"
          } justify-center ${
            multlines && "hidden"
          } items-center ml-1 w-8 h-8 text-primary ${error && "text-red-500"}`}
        >
          {icon}
        </span>
      )}
      {multlines ? (
        <textarea
          className={`bg-white w-full placeholder:text-sm py-3 px-4 outline-none border rounded-md ${
            error && "placeholder:text-red-500"
          }`}
          placeholder={placeholder}
          rows={5}
        />
      ) : inputType === "file" ? (
        <div className="relative flex flex-col justify-center items-center h-full w-full p-2">
          <div className="group flex flex-col justify-center items-center pointer-events-none">
            <PiImageBrokenLight className="text-primary " size={40} />
            <span className="text-center block text-primary font-medium group-hover:underline">
              {value ? value : "Escolha seu arquivo"}
            </span>
          </div>
          <input
            type={inputType}
            onChange={(e) => {
              setValue(e.target.value);
              setIsManuallyClosed(false);
            }}
            value={value}
            placeholder={placeholder}
            className={`opacity-0 h-full w-full hover:cursor-pointer absolute`}
            {...props}
          />
        </div>
      ) : (
        <input
          type={inputType}
          onChange={(e) => {
            setValue(e.target.value);
            setIsManuallyClosed(false);
          }}
          value={value}
          placeholder={placeholder}
          className={`bg-white w-full placeholder:text-sm ${
            icon ? "p-2" : "py-2 px-4"
          } outline-none border rounded-md ${
            error && "placeholder:text-red-500"
          }`}
          {...props}
        />
      )}
      {inputType === "file" && value && (
        <FiTrash
          onClick={() => setValue("")}
          className="hover:cursor-pointer hover:text-red-500 duration-300 absolute -right-8 w-5 h-5"
        />
      )}
      {filteredData && filteredData.length > 0 && value && isBoxOpen && (
        <div className="flex rounded-bl-md rounded-br-md absolute w-full min-h-14 bg-white z-10 top-full translate-y-[2px] left-0 p-2 border border-x-primary border-b-primary shadow-card max-h-[200px]">
          <ul className="flex flex-col h-auto gap-1 overflow-y-auto w-[85%] pb-1">
            {filteredData.map((name, index) => (
              <li
                onClick={() => {
                  setValue(name);
                  setIsBoxOpen(false);
                  setIsManuallyClosed(true);
                }}
                className="hover:cursor-pointer hover:shadow-focus hover:bg-white-secondary p-2 rounded-md duration-300 transition-all w-[90%]"
                key={index}
              >
                {highlightText(name, value)}
              </li>
            ))}
          </ul>
          <FiX
            onClick={() => {
              setIsBoxOpen(false);
              setIsManuallyClosed(true);
            }}
            className="bg-white absolute w-5 h-5 top-2 right-2 hover:cursor-pointer hover:text-primary"
          />
        </div>
      )}
      {label && (
        <span
          className={`text-primary pointer-events-none ${
            error && "text-red-500 "
          } font-medium text-xs absolute bottom-full translate-y-2 bg-white px-2 left-2`}
        >
          {label}
        </span>
      )}
      {error && (
        <span className="text-red-500 font-medium text-xs absolute -bottom-5 left-2">
          {error}
        </span>
      )}
      {type === "password" && (
        <span
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
          className={`hover:cursor-pointer ${
            multlines && "hidden"
          } mr-1 hover:text-primary/80 absolute right-0 bg-white flex justify-center items-center w-8 h-8 text-primary ${
            error && "text-red-500"
          }`}
        >
          {inputType === "password" ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
    </div>
  );
}
