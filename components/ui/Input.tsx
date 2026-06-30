import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        {...props}
        className={clsx(
          "w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-600",
          "disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
          className
        )}
      />

      {error ? (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}