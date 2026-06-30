import {
  Activity,
  BarChart3,
  FolderKanban,
  KeyRound,
  LayoutDashboard,
  Settings,
  Users,
  CreditCard,
  ServerCog,
  Database,
  Shield,
  FileText,
} from "lucide-react";

import { NavigationSection } from "@/types/navigation";
import { ROUTES } from "@/constants";

export const navigation: NavigationSection[] = [
  {
    title: "Workspace",
    items: [
      {
        name: "Dashboard",
        href: ROUTES.DASHBOARD,
        icon: LayoutDashboard,
        roles: ["customer", "admin"],
      },
      {
        name: "Projects",
        href: ROUTES.PROJECTS,
        icon: FolderKanban,
        roles: ["customer", "admin"],
      },
      {
        name: "API Keys",
        href: ROUTES.API_KEYS,
        icon: KeyRound,
        roles: ["customer", "admin"],
      },
      {
        name: "Usage",
        href: ROUTES.USAGE,
        icon: Activity,
        roles: ["customer", "admin"],
      },
      {
        name: "Analytics",
        href: ROUTES.ANALYTICS,
        icon: BarChart3,
        roles: ["customer", "admin"],
      },
      {
        name: "Settings",
        href: ROUTES.SETTINGS,
        icon: Settings,
        roles: ["customer", "admin"],
      },
    ],
  },

  {
    title: "Platform",
    items: [
      {
        name: "Platform Home",
        href: ROUTES.PLATFORM,
        icon: LayoutDashboard,
        roles: ["admin"],
      },
      {
        name: "Customers",
        href: ROUTES.CUSTOMERS,
        icon: Users,
        roles: ["admin"],
      },
      {
        name: "Providers",
        href: ROUTES.PROVIDERS,
        icon: ServerCog,
        roles: ["admin"],
      },
      {
        name: "Infrastructure",
        href: ROUTES.INFRASTRUCTURE,
        icon: Database,
        roles: ["admin"],
      },
      {
        name: "System Health",
        href: ROUTES.SYSTEM_HEALTH,
        icon: Shield,
        roles: ["admin"],
      },
      {
        name: "Logs",
        href: ROUTES.LOGS,
        icon: FileText,
        roles: ["admin"],
      },
    ],
  },
];