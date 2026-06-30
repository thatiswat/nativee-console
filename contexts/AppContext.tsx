"use client";

import { createContext, useContext } from "react";
import { User } from "@/types/user";

interface AppContextType {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
}

const AppContext = createContext<AppContextType>({
  user: null,
  authenticated: false,
  loading: false,
});

export function useApp() {
  return useContext(AppContext);
}

export default AppContext;