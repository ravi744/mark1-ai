import { materials } from "@/manufacturing-knowledge/materials/materials";

export interface MaterialCostInput {
  materialCode: string;
  weight: number;       // Weight per part (kg)
  quantity: number;     // Number of parts
  scrapPercent?: number;
}

export interface MaterialCostResult {
  materialName: string;
  rate: number;
  netWeight: number;
  grossWeight: number;
  totalMaterialCost: number;
}

export function calculateMaterialCost(
  input: MaterialCostInput
): MaterialCostResult {
  const material = materials.find(
    (m) => m.code === input.materialCode
  );

  if (!material) {
    throw new Error("Material not found.");
  }

  const scrap = input.scrapPercent ?? 8;

  const grossWeight =
    input.weight * (1 + scrap / 100);

  const totalMaterialCost =
    grossWeight *
    input.quantity *
    material.defaultRate;

  return {
    materialName: material.name,
    rate: material.defaultRate,
    netWeight: input.weight,
    grossWeight,
    totalMaterialCost,
  };
}