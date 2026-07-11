export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "RFQ Management",
      desc: "Organize customer RFQs in one place.",
    },
    {
      icon: "🤖",
      title: "AI Quotation",
      desc: "Generate quotations within seconds.",
    },
    {
      icon: "⚙️",
      title: "Process Planning",
      desc: "Prepare routing and machining plans.",
    },
    {
      icon: "🏭",
      title: "Production",
      desc: "Track jobs across every machine.",
    },
    {
      icon: "📦",
      title: "Inventory",
      desc: "Monitor stock and raw materials.",
    },
    {
      icon: "📊",
      title: "Analytics",
      desc: "Business intelligence powered by AI.",
    },
  ];

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-4 text-center text-gray-400">
          One intelligent platform for the entire manufacturing lifecycle.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-800 bg-gray-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}