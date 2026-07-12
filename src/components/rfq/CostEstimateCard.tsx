export default function CostEstimateCard() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        AI Cost Estimate
      </h2>

      <div className="space-y-4 text-lg">
        <div className="flex justify-between">
          <span>Material</span>
          <span>₹2,30,000</span>
        </div>

        <div className="flex justify-between">
          <span>Machining</span>
          <span>₹85,000</span>
        </div>

        <div className="flex justify-between">
          <span>Heat Treatment</span>
          <span>₹40,000</span>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>₹3,55,000</span>
        </div>
      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
        Generate AI Quote
      </button>
    </div>
  );
}