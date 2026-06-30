"use client";

import { useRouter } from "next/navigation";

import {
  login,
  logout,
  register,
} from "@/services/auth";

export function useAuth() {
  const router = useRouter();

  async function signIn(
    email: string,
    password: string
  ) {
    await login({
      email,
      password,
    });

    router.push("/dashboard");
  }

  async function signUp(
    name: string,
    email: string,
    password: string
  ) {
    await register({
      name,
      email,
      password,
    });

    router.push("/dashboard");
  }

  async function signOut() {
    await logout();

    router.push("/login");
  }

  return {
    signIn,
    signUp,
    signOut,

    authenticated: false,
    loading: false,
    user: null,
  };
}