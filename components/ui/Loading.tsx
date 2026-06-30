import clsx from "clsx";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
}

export default function Loading({
  size = "md",
}: LoadingProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          "animate-spin rounded-full border-2 border-gray-200 border-t-blue-600",
          {
            "h-4 w-4": size === "sm",
            "h-6 w-6": size === "md",
            "h-8 w-8": size === "lg",
          }
        )}
      />
    </div>
  );
}