import { ReactNode } from "react";
import { Logo } from "@/components/branding";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <Logo className="text-4xl mx-auto" />

          <h1 className="mt-8 text-3xl font-semibold text-gray-900">
            {title}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}