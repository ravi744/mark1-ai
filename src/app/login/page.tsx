export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gray-950 p-10">

        <h1 className="text-4xl font-bold text-center">
          MARK-1 AI
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Sign in to your manufacturing workspace
        </p>

        <form className="mt-10 space-y-6">

          <div>
            <label className="mb-2 block text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </button>

          </div>

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500"
          >
            Login
          </button>

        </form>

      </div>

    </main>
  );
}