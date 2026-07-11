export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between border-b border-gray-800">
      <h1 className="text-2xl font-bold text-white">
        MARK-1 AI
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>

        <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
}