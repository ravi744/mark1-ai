import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("companies")
      .update(body)
      .eq("id", 1);

    if (error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Company updated successfully",
    });

  } catch (err) {
    return NextResponse.json(
      { message: "Unexpected error" },
      { status: 500 }
    );
  }
}