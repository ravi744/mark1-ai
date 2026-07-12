import MachineUtilization from "@/components/dashboard/MachineUtilization";
import TopCustomers from "@/components/dashboard/TopCustomers";
import AIInsights from "@/components/dashboard/AIInsights";
import QuickActions from "@/components/dashboard/QuickActions";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import StatusCard from "@/components/dashboard/StatusCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingDeliveries from "@/components/dashboard/UpcomingDeliveries";

export default function DashboardPage() {
  return (
    <main className="space-y-8">

      <QuickActions />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Open RFQs"
          value="25"
          change="+5 Today"
        />

        <StatCard
          title="Pending Quotes"
          value="14"
          change="-2 Today"
          positive={false}
        />

        <StatCard
          title="Active Jobs"
          value="8"
          change="+1 Today"
        />

        <StatCard
          title="Revenue"
          value="₹18.4L"
          change="+12%"
        />

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <StatusCard />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentActivity />

        <UpcomingDeliveries />

      </div>
      <div className="grid gap-6 lg:grid-cols-3">

  <MachineUtilization />

  <TopCustomers />

  <AIInsights />

</div>

    </main>
  );
}