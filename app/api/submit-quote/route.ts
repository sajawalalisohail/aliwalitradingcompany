import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Log received form data for debugging
    console.log("Received form data keys:", Array.from(formData.keys()))

    const leadData = {
      full_name: formData.get("full_name") as string,
      company_name: formData.get("company_name") as string | undefined,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      city_state: formData.get("city_state") as string,
      belt_type: formData.get("belt_type") as string,
      ply_count: formData.get("ply_count") as string,
      width_value: formData.get("width_value") as string | undefined,
      width_unit: formData.get("width_unit") as string | undefined,
      estimated_quantity: formData.get("estimated_quantity") as string | undefined,
      quantity_unit: formData.get("quantity_unit") as string | undefined,
      condition_notes: formData.get("condition_notes") as string | undefined,
      acknowledgment: formData.get("acknowledgment") === "true",
    }

    // Validate required fields
    if (!leadData.full_name || !leadData.email || !leadData.phone || !leadData.country || !leadData.city_state || !leadData.belt_type || !leadData.ply_count) {
      console.error("Missing required fields:", { leadData })
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    console.log("Inserting lead data:", leadData)

    const { data: lead, error: leadError } = await supabaseAdmin
      .from("leads")
      .insert([leadData])
      .select()
      .single()

    if (leadError) {
      console.error("Error inserting lead:", leadError)
      return NextResponse.json(
        { error: `Database error: ${leadError.message}` },
        { status: 500 }
      )
    }

    const photos = formData.getAll("photos") as File[]
    const photoUrls: { lead_id: string; url: string; filename: string }[] = []

    for (const photo of photos) {
      const fileExt = photo.name.split(".").pop()
      const fileName = `${lead.id}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`

      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from("lead-uploads")
        .upload(fileName, photo, {
          cacheControl: "3600",
          upsert: false,
        })

      if (uploadError) {
        console.error("Error uploading photo:", uploadError)
        continue
      }

      const { data: { publicUrl } } = supabaseAdmin.storage
        .from("lead-uploads")
        .getPublicUrl(fileName)

      photoUrls.push({
        lead_id: lead.id,
        url: publicUrl,
        filename: photo.name,
      })
    }

    if (photoUrls.length > 0) {
      const { error: photosError } = await supabaseAdmin
        .from("lead_photos")
        .insert(photoUrls)

      if (photosError) {
        console.error("Error inserting photo records:", photosError)
      }
    }

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (error) {
    console.error("Error in submit-quote:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
