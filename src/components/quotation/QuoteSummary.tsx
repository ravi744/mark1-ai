export default function QuoteSummary() {
  return (
    <div className="rounded-2xl border border-green-700 bg-green-900/10 p-6">

      <h2 className="text-2xl font-bold text-green-400">
        Final AI Recommendation
      </h2>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">

          <span>Manufacturing Cost</span>

          <span>₹3,72,000</span>

        </div>

        <div className="flex justify-between">

          <span>Profit Margin</span>

          <span>18%</span>

        </div>

        <div className="flex justify-between">

          <span>GST</span>

          <span>18%</span>

        </div>

        <hr className="border-gray-700"/>

        <div className="flex justify-between text-2xl font-bold">

          <span>Quotation Value</span>

          <span>₹5,17,973</span>

        </div>

      </div>

    </div>
  );
}