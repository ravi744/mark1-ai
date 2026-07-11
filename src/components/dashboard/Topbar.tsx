export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-black px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-blue-600" />
      </div>
    </header>
  );
}