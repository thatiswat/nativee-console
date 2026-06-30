import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import EmptyProjects from "@/components/projects/EmptyProjects";

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Projects"
          description="Manage your Nativee projects."
        />

        <Button>
          Create Project
        </Button>
      </div>

      <EmptyProjects />
    </div>
  );
}