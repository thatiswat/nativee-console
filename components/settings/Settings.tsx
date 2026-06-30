import PageHeader from "@/components/ui/PageHeader";

import ProfileSection from "./ProfileSection";
import AccountSection from "./AccountSection";
import SecuritySection from "./SecuritySection";
import DangerZone from "./DangerZone";

export default function Settings() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your account and workspace preferences."
      />

      <ProfileSection />

      <AccountSection />

      <SecuritySection />

      <DangerZone />
    </div>
  );
}