import { supabase } from "@/lib/supabase";

export default async function RFQsPage() {
  const { data: rfqs, error } = await supabase
    .from("rfqs")
    .select(`
      *,
      customers (
        company_name
      )
    `);

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-red-500">
          Database Error
        </h1>

        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold">RFQs</h1>

        <p className="mt-2 text-gray-400">
          Request For Quotations
        </p>
      </div>

      {/* RFQ Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0d1324]">
        <table className="w-full">
          <thead className="bg-[#111827]">
  <tr>
    <th className="p-4 text-left">RFQ</th>
    <th className="p-4 text-left">Customer</th>
    <th className="p-4 text-left">Part</th>
    <th className="p-4 text-left">Material</th>
    <th className="p-4 text-left">Quantity</th>
    <th className="p-4 text-left">Status</th>
    <th className="p-4 text-center">Action</th>
  </tr>
</thead>

          <tbody>
  {rfqs?.map((rfq: any) => (
    <tr
      key={rfq.id}
      className="border-t border-gray-800 hover:bg-[#111827]"
    >
      <td className="p-4 font-medium">
        {rfq.rfq_number}
      </td>

      <td className="p-4">
        {rfq.customers?.company_name}
      </td>

      <td className="p-4">
        {rfq.part_name}
      </td>

      <td className="p-4">
        {rfq.material}
      </td>

      <td className="p-4">
        {rfq.quantity}
      </td>

      <td className="p-4">
        <span className="rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300">
          {rfq.status}
        </span>
      </td>

      <td className="p-4 text-center">
        <a
          href={`/quotations/new?rfq=${rfq.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Generate Quote
        </a>
      </td>
    </tr>
  ))}
</tbody>
        </table>

        {rfqs?.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No RFQs found.
          </div>
        )}
      </div>
    </main>
  );
}