import StatCard from "@/components/ui/StatCard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Projects"
        value="—"
      />

      <StatCard
        label="API Keys"
        value="—"
      />

      <StatCard
        label="Requests"
        value="—"
      />

      <StatCard
        label="Current Plan"
        value="Free"
      />
    </div>
  );
}