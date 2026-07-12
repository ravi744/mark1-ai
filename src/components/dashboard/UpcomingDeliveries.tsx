const deliveries = [
  ["Tata Motors", "15 Jul"],
  ["Bosch", "17 Jul"],
  ["Mahindra", "20 Jul"],
];

export default function UpcomingDeliveries() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        Upcoming Deliveries
      </h2>

      <div className="mt-6 space-y-4">

        {deliveries.map(([name, date]) => (
          <div
            key={name}
            className="flex justify-between"
          >
            <span>{name}</span>

            <span className="text-blue-400">
              {date}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}