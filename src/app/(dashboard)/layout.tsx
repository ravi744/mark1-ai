import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen bg-black">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </div>
    </main>
  );
}