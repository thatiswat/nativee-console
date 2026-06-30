import PageHeader from "@/components/ui/PageHeader";
import UsageStats from "./UsageStats";
import EmptyUsage from "./EmptyUsage";

export default function Usage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Usage"
        description="Monitor your API requests and platform usage."
      />

      <UsageStats />

      <EmptyUsage />
    </div>
  );
}