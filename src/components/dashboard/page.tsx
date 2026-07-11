import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function Dashboard() {
  const stats = [
    { title: "Open RFQs", value: "25" },
    { title: "Pending Quotes", value: "14" },
    { title: "Active Jobs", value: "8" },
    { title: "Revenue", value: "₹18.4L" },
  ];

  const rfqs = [
    { customer: "Tata Motors", status: "New" },
    { customer: "Mahindra", status: "Review" },
    { customer: "John Deere", status: "Quoted" },
    { customer: "JCB India", status: "Urgent" },
  ];

  const insights = [
    "RFQ #245 ready for quotation",
    "Material price increased by 3%",
    "Two quotations require approval",
    "Machine utilization at 91%",
  ];

  const machines = [
    { name: "CNC-01", status: "Running" },
    { name: "VMC-02", status: "Idle" },
    { name: "Laser-01", status: "Running" },
    { name: "Press-03", status: "Maintenance" },
  ];

  return (
    <main className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-y-auto">
        <Topbar />

        <div className="p-8 space-y-8">

          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6"
              >
                <p className="text-sm text-gray-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-bold">
                  {card.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Second Row */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Recent RFQs
              </h2>

              <div className="space-y-4">
                {rfqs.map((rfq) => (
                  <div
                    key={rfq.customer}
                    className="flex justify-between border-b border-gray-800 pb-3"
                  >
                    <span>{rfq.customer}</span>

                    <span className="text-blue-400">
                      {rfq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                AI Insights
              </h2>

              <div className="space-y-4">
                {insights.map((item) => (
                  <div key={item}>
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Third Row */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Today's Production
              </h2>

              <div className="space-y-3">
                <p>Completed Jobs : 18</p>
                <p>Running Jobs : 8</p>
                <p>Delayed Jobs : 2</p>
                <p>Efficiency : 91%</p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Revenue Trend
              </h2>

              <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-gray-700 text-gray-500">
                Revenue Chart Coming Soon
              </div>
            </div>

          </div>

          {/* Machine Status */}

          <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Machine Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {machines.map((machine) => (
                <div
                  key={machine.name}
                  className="rounded-xl border border-gray-800 p-4"
                >
                  <h3 className="font-semibold">
                    {machine.name}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {machine.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}