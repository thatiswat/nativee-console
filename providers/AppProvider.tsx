"use client";

import { ReactNode } from "react";

import AppContext from "@/contexts/AppContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <AppContext.Provider
      value={{
        user: null,
        authenticated: false,
        loading: false,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}