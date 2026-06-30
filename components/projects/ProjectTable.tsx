import Table from "@/components/ui/Table";
import ProjectRow from "./ProjectRow";

export default function ProjectTable() {
  return (
    <Table
      headers={[
        "Project",
        "Plan",
        "API Keys",
        "Requests",
        "Created",
        "",
      ]}
    >
      <ProjectRow />
    </Table>
  );
}