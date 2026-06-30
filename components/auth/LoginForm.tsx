"use client";

import { useState } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useAuth } from "@/hooks/useAuth";

import AuthCard from "./AuthCard";

export default function LoginForm() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSubmit() {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthCard>
      <div className="space-y-5">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button
          className="w-full"
          onClick={handleSubmit}
        >
          Sign In
        </Button>

        <div className="flex justify-between text-sm">
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>

          <Link
            href="/register"
            className="text-blue-600 hover:underline"
          >
            Create account
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}