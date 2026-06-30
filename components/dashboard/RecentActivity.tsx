import Card from "@/components/ui/Card";

const activities = [
  "Created API Key",
  "Created Project",
  "12,480 requests processed",
];

export default function RecentActivity() {
  return (
    <Card>
      <h3 className="text-lg font-semibold">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity}
            className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-none"
          >
            <span className="text-sm text-gray-700">
              {activity}
            </span>

            <span className="text-xs text-gray-400">
              Just now
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}