import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function Dashboard() {
  return (
    <main className="flex h-screen bg-black">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="grid flex-1 gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">

          {["Open RFQs", "Pending Quotes", "Active Jobs", "Revenue"].map(
            (title) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
              >
                <h3 className="text-gray-400">{title}</h3>

                <p className="mt-4 text-4xl font-bold text-white">
                  --
                </p>
              </div>
            )
          )}

        </div>
      </div>
    </main>
  );
}