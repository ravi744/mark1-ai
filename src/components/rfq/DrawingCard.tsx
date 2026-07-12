export default function DrawingCard() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0d1324] p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Drawing Attachment
        </h2>

        <button className="rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800">
          Download
        </button>
      </div>

      <div className="rounded-xl border-2 border-dashed border-gray-700 bg-[#090d18] h-[420px] flex flex-col items-center justify-center">

        <svg
          className="w-20 h-20 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3h7l5 5v13H7V3z"
          />
        </svg>

        <h3 className="mt-6 text-xl font-semibold">
          Technical Drawing
        </h3>

        <p className="text-gray-500 mt-2">
          RFQ-2451_DriveShaft.pdf
        </p>

        <p className="text-sm text-gray-600 mt-4">
          PDF Preview Coming Soon
        </p>

      </div>

    </div>
  );
}