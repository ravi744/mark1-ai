export interface Material {
  code: string;
  name: string;
  density: number;
  machinability: number;
  category: string;
  defaultRate: number;
}

export const materials: Material[] = [
  {
    code: "EN8",
    name: "EN8 Steel",
    density: 7.85,
    machinability: 0.75,
    category: "Carbon Steel",
    defaultRate: 72,
  },
  {
    code: "EN19",
    name: "EN19 Alloy Steel",
    density: 7.85,
    machinability: 0.60,
    category: "Alloy Steel",
    defaultRate: 115,
  },
  {
    code: "EN24",
    name: "EN24 Alloy Steel",
    density: 7.85,
    machinability: 0.55,
    category: "Alloy Steel",
    defaultRate: 145,
  },
  {
    code: "SS304",
    name: "Stainless Steel 304",
    density: 8.00,
    machinability: 0.45,
    category: "Stainless Steel",
    defaultRate: 220,
  },
  {
    code: "SS316",
    name: "Stainless Steel 316",
    density: 8.00,
    machinability: 0.40,
    category: "Stainless Steel",
    defaultRate: 280,
  },
  {
    code: "Al6082",
    name: "Aluminium 6082",
    density: 2.70,
    machinability: 0.90,
    category: "Aluminium",
    defaultRate: 310,
  },
];