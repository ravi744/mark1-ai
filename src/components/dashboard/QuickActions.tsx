import Link from "next/link";

export default function QuickActions() {
  const actions = [
    {
      name: "New RFQ",
      href: "/rfqs",
    },
    {
      name: "Generate Quote",
      href: "/quotations/new",
    },
    {
      name: "Production",
      href: "/production",
    },
    {
      name: "Inventory",
      href: "/inventory",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">

      {actions.map((action) => (
        <Link
          key={action.name}
          href={action.href}
          className="rounded-xl bg-blue-600 p-5 text-center font-semibold transition hover:bg-blue-500"
        >
          {action.name}
        </Link>
      ))}

    </div>
  );
}