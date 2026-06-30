import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
}

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 font-medium transition-colors",
        {
          "bg-black text-white hover:bg-gray-900":
            variant === "primary",

          "bg-gray-100 text-gray-900 hover:bg-gray-200":
            variant === "secondary",

          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}