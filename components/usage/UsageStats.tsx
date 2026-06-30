import StatCard from "@/components/ui/StatCard";

export default function UsageStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Requests Today"
        value="—"
      />

      <StatCard
        label="This Month"
        value="—"
      />

      <StatCard
        label="Average Latency"
        value="—"
      />

      <StatCard
        label="Success Rate"
        value="—"
      />
    </div>
  );
}