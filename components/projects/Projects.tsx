import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import ProjectTable from "./ProjectTable";

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

      <ProjectTable />
    </div>
  );
}