import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function QuickActions() {
  return (
    <Card>
      <h3 className="text-lg font-semibold">
        Quick Actions
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button>Create Project</Button>

        <Button variant="outline">
          Generate API Key
        </Button>

        <Button variant="secondary">
          View Documentation
        </Button>
      </div>
    </Card>
  );
}