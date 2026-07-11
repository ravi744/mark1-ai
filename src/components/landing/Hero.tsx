export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        <span className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          AI Powered Manufacturing Platform
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Manufacturing
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
            Intelligence
          </span>
          <br />
          Starts Here.
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-gray-400 md:text-xl">
          Manage RFQs, generate AI quotations, plan production,
          monitor inventory and make smarter manufacturing
          decisions from one intelligent platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition">
            Start Free Trial
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 hover:border-blue-500 transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}