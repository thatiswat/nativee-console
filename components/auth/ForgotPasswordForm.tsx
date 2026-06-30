"use client";

import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import AuthCard from "./AuthCard";

export default function ForgotPasswordForm() {
  return (
    <AuthCard>
      <div className="space-y-5">
        <Input
          id="email"
          label="Email"
          type="email"
        />

        <Button className="w-full">
          Send Reset Link
        </Button>

        <div className="text-center text-sm">
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}