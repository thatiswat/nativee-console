import ConsoleLayout from "@/components/navigation/ConsoleLayout";
import { APIKeys } from "@/components/api-keys";

export default function APIKeysPage() {
  return (
    <ConsoleLayout title="API Keys">
      <APIKeys />
    </ConsoleLayout>
  );
}