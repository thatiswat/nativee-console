import {
  AuthLayout,
  RegisterForm,
} from "@/components/auth";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start building with Nativee."
    >
      <RegisterForm />
    </AuthLayout>
  );
}