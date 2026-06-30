import Table from "@/components/ui/Table";
import UsageRow from "./UsageRow";

export default function UsageTable() {
  return (
    <Table
      headers={[
        "Endpoint",
        "Requests",
        "Latency",
        "Status",
      ]}
    >
      <UsageRow />
    </Table>
  );
}