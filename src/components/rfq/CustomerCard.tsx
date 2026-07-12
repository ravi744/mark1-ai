export default function CustomerCard() {
  const fields = [
    ["RFQ Number", "RFQ-2451"],
    ["Customer", "Tata Motors"],
    ["Contact", "Rahul Sharma"],
    ["Email", "rahul@tatamotors.com"],
    ["Phone", "+91 9876543210"],
    ["Part", "Drive Shaft"],
    ["Material", "EN24 Steel"],
    ["Process", "Turning + Grinding"],
    ["Quantity", "500"],
    ["Delivery", "30 Jul 2026"],
    ["Priority", "High"],
    ["Engineer", "Unassigned"],
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="mb-6 text-2xl font-semibold">
        Customer Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {fields.map(([label, value]) => (
          <div key={label}>

            <p className="text-sm text-gray-400">
              {label}
            </p>

            <p className="mt-1 text-white">
              {value}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}