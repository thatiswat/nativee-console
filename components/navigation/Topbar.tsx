"use client";

import Avatar from "@/components/ui/Avatar";
import { useApp } from "@/contexts/AppContext";

interface TopbarProps {
  title: string;
}

export default function Topbar({
  title,
}: TopbarProps) {
  const { user } = useApp();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>

      <Avatar
        name={user?.name ?? "Guest"}
      />
    </header>
  );
}