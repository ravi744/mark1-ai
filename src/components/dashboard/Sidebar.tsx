export default function Sidebar() {
  const menu = [
    "Dashboard",
    "RFQs",
    "Quotations",
    "Production",
    "Inventory",
    "Analytics",
    "Settings",
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-gray-950 p-6">
      <h1 className="mb-10 text-2xl font-bold text-white">
        MARK-1 AI
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item}
            className="w-full rounded-xl px-4 py-3 text-left text-gray-300 transition hover:bg-blue-600 hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}