import { supabase } from "@/lib/supabase";

export default async function CompanySettingsPage() {
  const { data: company, error } = await supabase
    .from("companies")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold text-red-500">
          Failed to load Company
        </h1>

        <p className="mt-4 text-gray-400">
          {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Company Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Configure your company profile used in quotations,
          invoices, reports and exports.
        </p>
      </div>

      {/* Company Information */}
      <section className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">

        <h2 className="text-2xl font-semibold">
          Company Information
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <Input
            label="Company Name"
            value={company.company_name}
          />

          <Input
            label="Company Code"
            value={company.company_code}
          />

          <Input
            label="Industry"
            value={company.industry}
          />

          <Input
            label="Website"
            value={company.website}
          />

          <Input
            label="Email"
            value={company.email}
          />

          <Input
            label="Phone"
            value={company.phone}
          />

        </div>

      </section>

      {/* Address */}

      <section className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">

        <h2 className="text-2xl font-semibold">
          Address
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <Input
            label="Address"
            value={company.address}
          />

          <Input
            label="City"
            value={company.city}
          />

          <Input
            label="State"
            value={company.state}
          />

          <Input
            label="Country"
            value={company.country}
          />

        </div>

      </section>

      {/* Tax Information */}

      <section className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">

        <h2 className="text-2xl font-semibold">
          Tax Information
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <Input
            label="GST Number"
            value={company.gst_number}
          />

          <Input
            label="PAN Number"
            value={company.pan_number}
          />

          <Input
            label="CIN Number"
            value={company.cin_number}
          />

          <Input
            label="MSME Number"
            value={company.msme_number}
          />

        </div>

      </section>

      {/* Bank Details */}

      <section className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">

        <h2 className="text-2xl font-semibold">
          Bank Details
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <Input
            label="Bank Name"
            value={company.bank_name}
          />

          <Input
            label="Account Number"
            value={company.bank_account}
          />

          <Input
            label="IFSC Code"
            value={company.bank_ifsc}
          />

          <Input
            label="Branch"
            value={company.bank_branch}
          />

        </div>

      </section>

      {/* Authorized Signatory */}

      <section className="rounded-2xl border border-gray-800 bg-[#0d1324] p-8">

        <h2 className="text-2xl font-semibold">
          Authorized Signatory
        </h2>

        <div className="mt-6">

          <Input
            label="Authorized Signatory"
            value={company.authorised_signatory}
          />

        </div>

      </section>

      {/* Save Button */}

      <div className="flex justify-end">

        <button
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
        >
          Save Company Profile
        </button>

      </div>

    </main>
  );
}

/* ---------- Components ---------- */

function Input({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm text-gray-400">
        {label}
      </label>

      <input
        defaultValue={value ?? ""}
        className="w-full rounded-xl border border-gray-700 bg-[#111827] p-3 outline-none focus:border-blue-500"
      />

    </div>
  );
}