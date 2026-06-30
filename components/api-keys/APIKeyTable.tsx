import Table from "@/components/ui/Table";
import APIKeyRow from "./APIKeyRow";

export default function APIKeyTable() {
  return (
    <Table
      headers={[
        "Name",
        "Project",
        "Key",
        "Created",
        "Status",
        "",
      ]}
    >
      <APIKeyRow />
    </Table>
  );
}