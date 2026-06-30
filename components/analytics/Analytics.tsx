import PageHeader from "@/components/ui/PageHeader";

import AnalyticsOverview from "./AnalyticsOverview";
import EmptyAnalytics from "./EmptyAnalytics";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="View insights into your API traffic and platform performance."
      />

      <AnalyticsOverview />

      <EmptyAnalytics />
    </div>
  );
}