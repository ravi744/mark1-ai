export default function DashboardPreview() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-gray-800 bg-gray-950 shadow-2xl overflow-hidden">

        {/* Window Header */}
        <div className="flex items-center gap-2 border-b border-gray-800 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-gray-400 text-sm">
            MARK-1 AI Dashboard
          </span>
        </div>

        <div className="p-8">

          {/* KPI Cards */}
          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-gray-900 p-6">
              <p className="text-gray-400">Open RFQs</p>
              <h2 className="mt-3 text-4xl font-bold">25</h2>
            </div>

            <div className="rounded-2xl bg-gray-900 p-6">
              <p className="text-gray-400">Pending Quotes</p>
              <h2 className="mt-3 text-4xl font-bold">14</h2>
            </div>

            <div className="rounded-2xl bg-gray-900 p-6">
              <p className="text-gray-400">Active Jobs</p>
              <h2 className="mt-3 text-4xl font-bold">8</h2>
            </div>

          </div>

          {/* Lower Grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            {/* Recent RFQs */}
            <div className="rounded-2xl bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Recent RFQs
              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Tata Motors</span>
                  <span className="text-green-400">New</span>
                </div>

                <div className="flex justify-between">
                  <span>Mahindra</span>
                  <span className="text-yellow-400">Review</span>
                </div>

                <div className="flex justify-between">
                  <span>John Deere</span>
                  <span className="text-blue-400">Quoted</span>
                </div>

                <div className="flex justify-between">
                  <span>JCB India</span>
                  <span className="text-red-400">Urgent</span>
                </div>

              </div>
            </div>

            {/* AI Insights */}
            <div className="rounded-2xl bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                AI Insights
              </h3>

              <div className="space-y-4">

                <p>✅ RFQ #245 ready for quotation</p>

                <p>📈 Material price increased by 3%</p>

                <p>⚠ Two quotations require approval</p>

                <p>🏭 Machine utilization at 91%</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}