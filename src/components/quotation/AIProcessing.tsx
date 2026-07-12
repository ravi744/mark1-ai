export default function AIProcessing() {
  const steps = [
    "Reading RFQ...",
    "Analyzing Drawing...",
    "Selecting Material...",
    "Calculating Weight...",
    "Estimating Machining Time...",
    "Calculating Tool Wear...",
    "Heat Treatment...",
    "Inspection...",
    "Packing...",
    "Finalizing Quote..."
  ];

  return (
    <div className="space-y-5">

      {steps.map((step) => (

        <div key={step}>

          <div className="flex justify-between mb-2">

            <span>{step}</span>

            <span>✓</span>

          </div>

          <div className="h-2 rounded-full bg-gray-800">

            <div className="h-2 w-full rounded-full bg-blue-600 animate-pulse"></div>

          </div>

        </div>

      ))}

    </div>
  );
}