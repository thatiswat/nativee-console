import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Native<span className="text-blue-600">e</span> Console
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Manage your projects, API keys, usage, and billing from one place.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Create Account
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Nativee Developer Platform
        </p>
      </div>
    </main>
  );
}