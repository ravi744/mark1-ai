export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        Activity
      </h2>

      <div className="space-y-3 text-gray-300">
        <p>✓ RFQ Received</p>
        <p>✓ Drawing Uploaded</p>
        <p>⌛ Awaiting Costing</p>
        <p>○ Quote Not Generated</p>
      </div>
    </div>
  );
}