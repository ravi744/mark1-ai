export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        Revenue
      </h2>

      <div className="mt-8 flex h-56 items-end justify-around">

        {[40, 90, 70, 120, 95, 150].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}px` }}
            className="w-10 rounded-t-lg bg-blue-600"
          />
        ))}

      </div>

      <div className="mt-4 flex justify-around text-sm text-gray-400">

        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>

      </div>

    </div>
  );
}