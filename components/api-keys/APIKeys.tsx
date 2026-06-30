import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import APIKeyTable from "./APIKeyTable";

export default function APIKeys() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader
          title="API Keys"
          description="Manage API keys for your projects."
        />

        <Button>
          Generate API Key
        </Button>
      </div>

      <APIKeyTable />
    </div>
  );
}