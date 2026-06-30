import Card from "@/components/ui/Card";

export default function WelcomeBanner() {
  return (
    <Card>
      <h2 className="text-2xl font-semibold">
        Welcome to Nativee 👋
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Create your first project to generate an API key and start building multilingual applications.
      </p>
    </Card>
  );
}