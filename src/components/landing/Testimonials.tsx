export default function Testimonials() {
  const testimonials = [
    {
      company: "Tata Motors",
      quote:
        "MARK-1 AI reduced our quotation turnaround time from days to hours.",
      author: "Purchase Manager",
    },
    {
      company: "Mahindra",
      quote:
        "Production planning and RFQ management became significantly more efficient.",
      author: "Plant Head",
    },
    {
      company: "JCB",
      quote:
        "One dashboard gives us complete visibility across our manufacturing operations.",
      author: "Operations Director",
    },
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Loved by Manufacturers
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Helping manufacturing companies work smarter every day.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-2xl border border-gray-800 bg-gray-950 p-8 hover:border-blue-500 transition"
            >
              <p className="text-gray-300 italic">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">
                  {item.company}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.author}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}