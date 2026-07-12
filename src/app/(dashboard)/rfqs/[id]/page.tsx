import RFQHeader from "@/components/rfq/RFQHeader";
import CustomerCard from "@/components/rfq/CustomerCard";
import EngineeringNotes from "@/components/rfq/EngineeringNotes";
import DrawingCard from "@/components/rfq/DrawingCard";
import CostEstimateCard from "@/components/rfq/CostEstimateCard";
import ActivityTimeline from "@/components/rfq/ActivityTimeline";

type Props = {
  params: {
    id: string;
  };
};

export default function RFQDetails({ params }: Props) {
  return (
    <div className="space-y-8">

      <RFQHeader id={params.id} />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">

          <CustomerCard />

          <EngineeringNotes />

          <DrawingCard />

        </div>

        <div className="space-y-6">

          <CostEstimateCard />

          <ActivityTimeline />

        </div>

      </div>

    </div>
  );
}