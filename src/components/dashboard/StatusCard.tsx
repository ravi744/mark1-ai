const status = [
  ["Pending", 12],
  ["Quoted", 8],
  ["Production", 6],
  ["Completed", 18],
];

export default function StatusCard() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        RFQ Status
      </h2>

      <div className="mt-6 space-y-4">

        {status.map(([name, value]) => (
          <div
            key={name}
            className="flex justify-between"
          >
            <span className="text-gray-400">
              {name}
            </span>

            <span className="font-semibold">
              {value}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}