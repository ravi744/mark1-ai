const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "5 RFQs",
      "AI Quotations",
      "Dashboard",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹4,999/mo",
    features: [
      "Unlimited RFQs",
      "AI Costing",
      "Production Planning",
      "Inventory",
      "Analytics",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited Users",
      "ERP Integration",
      "Custom AI Models",
      "Dedicated Manager",
      "24/7 Support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Simple Pricing
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Choose the plan that grows with your manufacturing business.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-10 transition duration-300
              ${
                plan.highlight
                  ? "border-blue-500 bg-blue-950/30 shadow-[0_0_50px_rgba(59,130,246,0.25)] scale-105"
                  : "border-gray-800 bg-gray-950 hover:border-blue-500"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition
                ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "border border-gray-700 hover:border-blue-500"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}