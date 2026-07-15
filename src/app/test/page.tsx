import { calculateMaterialCost } from "@/engines/costing/material.engine";

export default function TestPage() {
  const result = calculateMaterialCost({
    materialCode: "EN24",
    weight: 2.5,
    quantity: 500,
    scrapPercent: 8,
  });

  return (
    <main className="p-10 space-y-4">
      <h1 className="text-4xl font-bold">
        Material Engine Test
      </h1>

      <div className="rounded-xl border p-6 space-y-2">

        <p>
          <strong>Material :</strong> {result.materialName}
        </p>

        <p>
          <strong>Rate :</strong> ₹{result.rate}/kg
        </p>

        <p>
          <strong>Net Weight :</strong> {result.netWeight} kg
        </p>

        <p>
          <strong>Gross Weight :</strong> {result.grossWeight.toFixed(2)} kg
        </p>

        <p className="text-xl font-bold text-green-600">
          Total Material Cost : ₹
          {result.totalMaterialCost.toLocaleString()}
        </p>

      </div>
    </main>
  );
}