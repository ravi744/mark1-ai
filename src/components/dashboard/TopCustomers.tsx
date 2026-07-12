const customers = [
  ["Tata Motors", "₹48L"],
  ["Mahindra", "₹34L"],
  ["Bosch", "₹29L"],
  ["JCB", "₹22L"],
];

export default function TopCustomers() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <h2 className="text-xl font-semibold">
        Top Customers
      </h2>

      <div className="mt-6 space-y-4">

        {customers.map(([name, revenue]) => (

          <div
            key={name}
            className="flex justify-between"
          >

            <span>{name}</span>

            <span className="font-semibold text-blue-400">
              {revenue}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}