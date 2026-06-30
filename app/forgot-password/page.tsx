import {
  AuthLayout,
  ForgotPasswordForm,
} from "@/components/auth";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We'll send you a password reset link."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}