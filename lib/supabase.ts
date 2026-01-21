import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role key (bypasses RLS)
// Falls back to anon key if service role key is not set
export const supabaseAdmin = createClient(
  supabaseUrl, 
  supabaseServiceRoleKey || supabaseAnonKey
)

export type Lead = {
  id?: string
  full_name: string
  company_name?: string
  email: string
  phone: string
  country: string
  city_state: string
  belt_type: string
  ply_count: string
  width_value?: string
  width_unit?: string
  estimated_quantity: string
  quantity_unit?: string
  condition_notes?: string
  acknowledgment: boolean
  created_at?: string
}

export type LeadPhoto = {
  id?: string
  lead_id: string
  url: string
  filename: string
  created_at?: string
}
