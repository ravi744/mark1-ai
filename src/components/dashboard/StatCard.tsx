type Props = {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
};

export default function StatCard({
  title,
  value,
  change,
  positive = true,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>

    </div>
  );
}