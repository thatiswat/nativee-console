import EmptyState from "@/components/ui/EmptyState";

export default function EmptyAnalytics() {
  return (
    <EmptyState
      title="No Analytics Available"
      description="Analytics will be generated after your applications start making API requests."
    />
  );
}