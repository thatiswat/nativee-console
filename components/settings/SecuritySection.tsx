import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SecuritySection() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">
        Security
      </h2>

      <div className="mt-6 space-y-4">
        <Input
          id="current-password"
          label="Current Password"
          type="password"
        />

        <Input
          id="new-password"
          label="New Password"
          type="password"
        />

        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
        />
      </div>

      <div className="mt-6">
        <Button>
          Update Password
        </Button>
      </div>
    </Card>
  );
}