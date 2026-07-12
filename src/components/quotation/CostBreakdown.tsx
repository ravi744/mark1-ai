const rows = [
  ["Material", "EN24 Steel", "₹2,30,000"],
  ["Machining", "Turning + Grinding", "₹85,000"],
  ["Heat Treatment", "Hardening", "₹40,000"],
  ["Inspection", "CMM Inspection", "₹12,000"],
  ["Packing", "Export Packing", "₹5,000"],
];

export default function CostBreakdown() {
  return (
    <div className="rounded-xl border border-gray-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-900">

          <tr>

            <th className="p-4 text-left">Process</th>

            <th className="p-4 text-left">Description</th>

            <th className="p-4 text-right">Cost</th>

          </tr>

        </thead>

        <tbody>

          {rows.map((r) => (

            <tr
              key={r[0]}
              className="border-t border-gray-800"
            >

              <td className="p-4">{r[0]}</td>

              <td className="p-4 text-gray-400">{r[1]}</td>

              <td className="p-4 text-right font-semibold">{r[2]}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}