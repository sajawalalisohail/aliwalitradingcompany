# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Project Settings > API
3. Add these to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 2. Database Schema

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  city_state TEXT NOT NULL,
  belt_type TEXT NOT NULL,
  ply_count TEXT NOT NULL,
  width_value TEXT,
  width_unit TEXT,
  estimated_quantity TEXT,
  quantity_unit TEXT,
  condition_notes TEXT,
  acknowledgment BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create lead_photos table
CREATE TABLE lead_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_lead_photos_lead_id ON lead_photos(lead_id);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_photos ENABLE ROW LEVEL SECURITY;

-- Create policies for leads table
CREATE POLICY "Allow public insert on leads"
  ON leads FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for lead_photos table
CREATE POLICY "Allow public insert on lead_photos"
  ON lead_photos FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on lead_photos"
  ON lead_photos FOR SELECT
  TO authenticated
  USING (true);
```

## 3. Storage Setup

### Create Storage Bucket

1. Go to Storage in your Supabase dashboard
2. Click "New bucket"
3. Bucket name: `lead-uploads`
4. Set as **Public bucket**
5. Click "Create bucket"

### Set Storage Policies

Run this SQL or use the Supabase Storage Policies UI:

```sql
-- Allow public uploads to lead-uploads bucket
CREATE POLICY "Allow public uploads"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'lead-uploads');

-- Allow public to read from lead-uploads bucket
CREATE POLICY "Allow public read"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'lead-uploads');
```

## 4. Verify Setup

Test your setup:

1. Submit a test quote through the `/sell` page
2. Check that a new row appears in the `leads` table
3. Verify photos are uploaded to the `lead-uploads` storage bucket
4. Confirm photo URLs are saved in the `lead_photos` table

## 5. Admin Access

To view submissions:

1. Use the Supabase Table Editor in your dashboard
2. Or build a simple admin panel using Next.js + Supabase Auth
3. Export data to CSV from the Supabase dashboard as needed
