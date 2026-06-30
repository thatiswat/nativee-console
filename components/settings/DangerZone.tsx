import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DangerZone() {
  return (
    <Card className="border-red-200">
      <h2 className="text-lg font-semibold text-red-600">
        Danger Zone
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Permanently delete your Nativee account and all associated projects, API keys, and usage history.
      </p>

      <div className="mt-6">
        <Button variant="danger">
          Delete Account
        </Button>
      </div>
    </Card>
  );
}