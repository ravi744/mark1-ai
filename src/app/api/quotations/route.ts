import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase
      .from("quotations")
      .insert([
        {
          rfq_id: body.rfq_id,
          material_cost: body.material_cost,
          machining_cost: body.machining_cost,
          heat_treatment_cost: body.heat_treatment_cost,
          inspection_cost: body.inspection_cost,
          packing_cost: body.packing_cost,
          manufacturing_cost: body.manufacturing_cost,
          margin_percent: body.margin_percent,
          margin_amount: body.margin_amount,
          final_price: body.final_price,
          status: "Draft",
        },
      ]);

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quotation saved successfully.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}