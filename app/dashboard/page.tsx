import ConsoleLayout from "@/components/navigation/ConsoleLayout";
import { Dashboard } from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <ConsoleLayout title="Dashboard">
      <Dashboard />
    </ConsoleLayout>
  );
}