import { supabase } from "@/lib/supabase";

export default async function CustomersPage() {
  const { data: customers, error } = await supabase
    .from("customers")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-red-500 text-2xl font-bold">
          Database Error
        </h1>

        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <p className="text-gray-400 mt-2">
          Customer Master
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0d1324]">
        <table className="w-full">
          <thead className="bg-[#111827]">
            <tr>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">GST</th>
            </tr>
          </thead>

          <tbody>
            {customers?.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-gray-800"
              >
                <td className="p-4 font-medium">
                  {customer.company_name}
                </td>

                <td className="p-4">
                  {customer.contact_person}
                </td>

                <td className="p-4">
                  {customer.email}
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.gst_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}