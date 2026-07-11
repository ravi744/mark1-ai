export default function DashboardPreview() {
  return (
    <div className="mx-auto mt-20 max-w-6xl rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">

      <div className="mb-8 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

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
          <p className="text-gray-400">Production Jobs</p>
          <h2 className="mt-3 text-4xl font-bold">8</h2>
        </div>

      </div>
    </div>
  );
}