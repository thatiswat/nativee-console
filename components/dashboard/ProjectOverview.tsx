import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function ProjectOverview() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Current Project</h3>

        <Badge variant="success">Active</Badge>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Name</span>
          <span className="font-medium">Personal Project</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Plan</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">API Keys</span>
          <span>2</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Requests</span>
          <span>12,480</span>
        </div>
      </div>
    </Card>
  );
}