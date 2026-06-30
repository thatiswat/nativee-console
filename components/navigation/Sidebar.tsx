"use client";

import Logo from "@/components/branding/Logo";
import { useApp } from "@/contexts/AppContext";

import NavItem from "./NavItem";
import { navigation } from "./navigation";
import { CONFIG } from "@/constants";

export default function Sidebar() {
  const { user } = useApp();

  const role = user?.role ?? "customer";

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Logo className="text-2xl" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {navigation.map((section) => {
          const items = section.items.filter((item) =>
            item.roles.includes(role)
          );

          if (!items.length) return null;

          return (
            <div key={section.title} className="mb-6">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </p>

              <div className="space-y-1">
                {items.map((item) => (
                  <NavItem
                    key={item.href}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <p className="text-xs font-medium text-gray-600">
          {CONFIG.COMPANY_NAME}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {CONFIG.APP_NAME}
        </p>
      </div>
    </aside>
  );
}