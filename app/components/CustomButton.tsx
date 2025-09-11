import type { ButtonHTMLAttributes } from "react";

interface ICustombutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
}

export default function CustomButton1({
  variant = "primary",
  title,
  onClick,
  className,
}: ICustombutton) {
  return (
    <button
      onClick={onClick}
      className={`${variant == "primary" ? "bg-blue-600 text-white block" : "bg-red-800 border-primary border text-white"} place-self-center px-2 py-2 rounded-md  cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}


