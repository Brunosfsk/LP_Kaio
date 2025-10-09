"use client";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children = "Botão",
  onClick = () => {},
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[482px] h-[70px]
        rounded-[15px]
        bg-[#ED3E03]
        text-white font-bold text-lg
        flex items-center justify-center
        hover:bg-[#d43802] active:bg-[#ba3001]
        focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:ring-offset-2
        transition-colors duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}
