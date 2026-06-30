import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export default function Label({
  children,
  required = false,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      className={clsx(
        "mb-2 block text-sm font-medium text-gray-900",
        className
      )}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-600">*</span>
      )}
    </label>
  );
}