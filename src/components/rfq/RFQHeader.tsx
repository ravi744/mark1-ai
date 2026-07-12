import Link from "next/link";

type Props = {
  id: string;
};

export default function RFQHeader({ id }: Props) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

      <div>
        <Link
          href="/rfqs"
          className="text-sm text-blue-400 hover:underline"
        >
          ← Back to RFQs
        </Link>

        <div className="mt-5 flex items-center gap-4">
          <h1 className="text-4xl font-bold">
            Drive Shaft
          </h1>

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
            Pending
          </span>
        </div>

        <p className="mt-2 text-xl text-gray-400">
          Tata Motors
        </p>

        <div className="mt-6 flex flex-wrap gap-8 text-sm">

          <div>
            <p className="text-gray-500">RFQ No</p>
            <p>{id}</p>
          </div>

          <div>
            <p className="text-gray-500">Created</p>
            <p>10 Jul 2026</p>
          </div>

          <div>
            <p className="text-gray-500">Delivery</p>
            <p>30 Jul 2026</p>
          </div>

          <div>
            <p className="text-gray-500">Priority</p>
            <p className="font-semibold text-red-400">
              High
            </p>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">

        <button className="h-12 rounded-xl border border-gray-700 px-6 text-sm font-medium transition hover:border-blue-500 hover:bg-gray-800">
          Download Drawing
        </button>

        <button className="h-12 rounded-xl border border-gray-700 px-6 text-sm font-medium transition hover:border-green-500 hover:bg-gray-800">
          Assign Engineer
        </button>

        <Link
  href="/quotations/new"
  className="flex h-12 items-center rounded-xl bg-blue-600 px-8 text-sm font-semibold transition hover:bg-blue-500"
>
  Generate AI Quote
</Link>

      </div>

    </div>
  );
}