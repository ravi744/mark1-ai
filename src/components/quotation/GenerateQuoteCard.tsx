"use client";

import { useState } from "react";

type Props = {
  rfqId: number;
};

export default function GenerateQuoteCard({ rfqId }: Props) {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  async function generateQuote() {
    setLoading(true);

    try {
      const response = await fetch("/api/quotations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rfq_id: rfqId,
          material_cost: 230000,
          machining_cost: 85000,
          heat_treatment_cost: 40000,
          inspection_cost: 12000,
          packing_cost: 5000,
          manufacturing_cost: 372000,
          margin_percent: 18,
          margin_amount: 66960,
          final_price: 438960,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setFinished(true);
    } catch (error) {
      console.error(error);
      alert("Failed to save quotation.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">
      <h2 className="text-3xl font-bold">
        AI Costing Engine
      </h2>

      <p className="mt-2 text-gray-400">
        Generate manufacturing quotation using AI.
      </p>

      {!loading && !finished && (
        <button
          onClick={generateQuote}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
        >
          Generate AI Quote
        </button>
      )}

      {loading && (
        <div className="mt-8 space-y-4">
          <ProgressItem text="Reading RFQ..." />
          <ProgressItem text="Analyzing Drawing..." />
          <ProgressItem text="Identifying Material..." />
          <ProgressItem text="Calculating Machining..." />
          <ProgressItem text="Generating Cost..." />
        </div>
      )}

      {finished && (
        <div className="mt-8 space-y-6">
          <div className="rounded-xl bg-green-500/10 p-4 text-green-400">
            ✓ AI Quote Generated Successfully
          </div>

          <div className="space-y-3">
            <Row label="Material" value="₹2,30,000" />
            <Row label="Machining" value="₹85,000" />
            <Row label="Heat Treatment" value="₹40,000" />
            <Row label="Inspection" value="₹12,000" />
            <Row label="Packing" value="₹5,000" />

            <hr className="border-gray-700" />

            <Row
              label="Manufacturing Cost"
              value="₹3,72,000"
            />

            <Row
              label="Margin (18%)"
              value="₹66,960"
            />

            <hr className="border-gray-700" />

            <Row
              label="Final Price"
              value="₹4,38,960"
              bold
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500">
              Download PDF
            </button>

            <button className="rounded-xl border border-gray-700 px-5 py-3 hover:border-blue-500">
              Save Quote
            </button>

            <button className="rounded-xl border border-gray-700 px-5 py-3 hover:border-blue-500">
              Send Customer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressItem({ text }: { text: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>{text}</span>
        <span>✓</span>
      </div>

      <div className="h-2 rounded-full bg-gray-800">
        <div className="h-2 w-full animate-pulse rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className={bold ? "text-xl font-bold" : "text-gray-400"}>
        {label}
      </span>

      <span className={bold ? "text-xl font-bold" : ""}>
        {value}
      </span>
    </div>
  );
}