const machines = [
  ["CNC-01", 92],
  ["CNC-02", 75],
  ["VMC-03", 63],
  ["Grinding", 88],
];

export default function MachineUtilization() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        Machine Utilization
      </h2>

      <div className="mt-6 space-y-5">

        {machines.map(([name, value]) => (

          <div key={name}>

            <div className="mb-2 flex justify-between">

              <span>{name}</span>

              <span>{value}%</span>

            </div>

            <div className="h-2 rounded-full bg-gray-800">

              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}