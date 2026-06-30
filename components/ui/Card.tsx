import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <section
      className={clsx(
        "rounded-xl border border-gray-200 bg-white p-6",
        className
      )}
    >
      {children}
    </section>
  );
}