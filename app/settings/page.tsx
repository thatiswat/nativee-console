import ConsoleLayout from "@/components/navigation/ConsoleLayout";
import { Settings } from "@/components/settings";

export default function SettingsPage() {
  return (
    <ConsoleLayout title="Settings">
      <Settings />
    </ConsoleLayout>
  );
}