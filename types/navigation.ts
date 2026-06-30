import { LucideIcon } from "lucide-react";
import { UserRole } from "./user";

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  roles: UserRole[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}