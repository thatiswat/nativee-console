import StatCard from "@/components/ui/StatCard";

export default function AnalyticsOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Requests"
        value="—"
      />

      <StatCard
        label="Languages"
        value="—"
      />

      <StatCard
        label="Average Response"
        value="—"
      />

      <StatCard
        label="Success Rate"
        value="—"
      />
    </div>
  );
}