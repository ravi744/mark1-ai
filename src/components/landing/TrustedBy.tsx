export default function TrustedBy() {
  const companies = [
    "Tata Motors",
    "Mahindra",
    "JCB",
    "John Deere",
    "Cummins",
    "Bosch",
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-center uppercase tracking-[0.3em] text-gray-500">
          Trusted by Manufacturing Leaders
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-gray-800 bg-gray-950 py-8 text-center text-gray-300 transition hover:border-blue-500 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}