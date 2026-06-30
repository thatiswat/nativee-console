import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ProfileSection() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">
        Profile
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input
          id="name"
          label="Full Name"
          placeholder="Your Name"
        />

        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@company.com"
        />
      </div>

      <div className="mt-6">
        <Button>
          Save Changes
        </Button>
      </div>
    </Card>
  );
}