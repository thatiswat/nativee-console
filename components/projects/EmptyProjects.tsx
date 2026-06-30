import EmptyState from "@/components/ui/EmptyState";

export default function EmptyProjects() {
  return (
    <EmptyState
      title="No Projects"
      description="Create your first project to begin using the Nativee API."
      actionLabel="Create Project"
    />
  );
}