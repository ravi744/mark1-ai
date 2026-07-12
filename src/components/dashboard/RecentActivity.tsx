const activities = [
  "RFQ-2451 received",
  "AI Quote Generated",
  "Production Started",
  "Machine Assigned",
  "Dispatch Completed",
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        {activities.map((item) => (
          <div
            key={item}
            className="flex gap-3"
          >
            <span>✓</span>

            <span className="text-gray-300">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}