import clsx from "clsx";

interface DividerProps {
  className?: string;
}

export default function Divider({
  className,
}: DividerProps) {
  return (
    <hr
      className={clsx(
        "border-0 border-t border-gray-200",
        className
      )}
    />
  );
}