import { supabase } from "@/lib/supabase";

export async function getCompany(companyId: number) {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("id", companyId)
    .single();

  if (error) throw error;

  return data;
}

export async function updateCompany(
  companyId: number,
  values: any
) {
  const { data, error } = await supabase
    .from("companies")
    .update(values)
    .eq("id", companyId)
    .select()
    .single();

  if (error) throw error;

  return data;
}