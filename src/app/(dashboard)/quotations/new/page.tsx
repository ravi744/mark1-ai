import GenerateQuoteCard from "@/components/quotation/GenerateQuoteCard";
import { supabase } from "@/lib/supabase";

type Props = {
  searchParams: Promise<{
    rfq?: string;
  }>;
};

export default async function NewQuotationPage({ searchParams }: Props) {
  const params = await searchParams;
  const rfqId = Number(params.rfq ?? 1);

  const { data: rfq, error } = await supabase
    .from("rfqs")
    .select(`
      id,
      rfq_number,
      part_name,
      quantity,
      customers (
        company_name
      )
    `)
    .eq("id", rfqId)
    .single();

  if (error || !rfq) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold text-red-500">
          RFQ Not Found
        </h1>

        <p className="mt-4 text-gray-400">
          {error?.message}
        </p>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          AI Quotation
        </h1>

        <p className="mt-2 text-gray-400">
          Generate an AI-powered manufacturing quotation.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">
        <h2 className="text-2xl font-semibold">
          RFQ Selected
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-gray-500">Customer</p>
            <p>{(rfq.customers as any)?.company_name}</p>
          </div>

          <div>
            <p className="text-gray-500">RFQ</p>
            <p>{rfq.rfq_number}</p>
          </div>

          <div>
            <p className="text-gray-500">Part</p>
            <p>{rfq.part_name}</p>
          </div>

          <div>
            <p className="text-gray-500">Quantity</p>
            <p>{rfq.quantity}</p>
          </div>
        </div>
      </div>

      <GenerateQuoteCard rfqId={rfq.id} />
    </main>
  );
}