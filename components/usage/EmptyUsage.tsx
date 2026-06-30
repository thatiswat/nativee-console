import EmptyState from "@/components/ui/EmptyState";

export default function EmptyUsage() {
  return (
    <EmptyState
      title="No Usage Data"
      description="Usage statistics will appear once your applications begin making API requests."
    />
  );
}