import EmptyState from "@/components/ui/EmptyState";

export default function EmptyAPIKeys() {
  return (
    <EmptyState
      title="No API Keys"
      description="Generate an API key to authenticate requests to the Nativee API."
      actionLabel="Generate API Key"
    />
  );
}