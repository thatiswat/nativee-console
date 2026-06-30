"use client";

import { useState } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import AuthCard from "./AuthCard";

import { useAuth } from "@/hooks/useAuth";

export default function RegisterForm() {
  const { signUp } = useAuth();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  async function handleSubmit() {
    if (password !== confirmPassword) {
      return;
    }

    try {
      await signUp(
        name,
        email,
        password
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthCard>
      <div className="space-y-5">
        <Input
          id="name"
          label="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <Input
          id="email"
          label="Email"
          type="email"
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

        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <Button
          className="w-full"
          onClick={handleSubmit}
        >
          Create Account
        </Button>

        <div className="text-center text-sm">
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}