import {
  DashboardStats,
  ProjectOverview,
  QuickActions,
  RecentActivity,
  WelcomeBanner,
} from ".";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <DashboardStats />

      <div className="grid gap-6 xl:grid-cols-2">
        <ProjectOverview />
        <QuickActions />
      </div>

      <RecentActivity />
    </div>
  );
}