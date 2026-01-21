# ALI WALI TRADING COMPANY Website

Professional marketing website for a global buyer of used plied rubber conveyor belts. Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Features

- ✅ Modern, premium light theme with deep blue accent
- ✅ Fully responsive mobile-first design
- ✅ Quote form with multi-photo upload and Supabase integration
- ✅ SEO optimized with metadata, OpenGraph, and JSON-LD schema
- ✅ Smooth animations with Framer Motion
- ✅ Professional B2B industrial design aesthetic
- ✅ Contact forms with validation
- ✅ Gallery with category filtering
- ✅ Comprehensive FAQ section
- ✅ Legal pages (Privacy, Terms)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage
- **Deployment:** Vercel-ready

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set Up Supabase

Follow the instructions in `SUPABASE_SETUP.md` to:
- Create database tables
- Set up storage bucket
- Configure RLS policies

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aliwalitradingco/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── what-we-buy/         # What We Buy page
│   ├── sell/                # Quote form page
│   ├── how-it-works/        # Process explanation
│   ├── gallery/             # Image gallery
│   ├── faq/                 # FAQ page
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── api/                 # API routes
│   │   └── submit-quote/    # Quote submission handler
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── layout/              # Header, footer, navigation
│   ├── home/                # Homepage sections
│   ├── forms/               # Quote and contact forms
│   ├── ui/                  # shadcn/ui components
│   └── shared/              # Reusable components
├── lib/
│   ├── supabase.ts          # Supabase client
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # App constants
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets
```

## Pages

1. **Home (/)** - Hero, what we buy, how it works, gallery preview, FAQ preview, CTA
2. **What We Buy (/what-we-buy)** - Detailed specifications and requirements
3. **Sell Your Belt (/sell)** - Quote form with photo upload (PRIMARY CONVERSION PAGE)
4. **How It Works (/how-it-works)** - Detailed process explanation
5. **About (/about)** - Company story, values, capabilities
6. **Gallery (/gallery)** - Categorized photo gallery
7. **FAQ (/faq)** - Comprehensive Q&A
8. **Contact (/contact)** - Contact options and form
9. **Privacy (/privacy)** - Privacy policy
10. **Terms (/terms)** - Terms of service

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Domain Setup

1. Add custom domain in Vercel settings
2. Update DNS records for `aliwalitradingco.com`
3. Update `metadataBase` in `app/layout.tsx` to your domain

## Customization Checklist

Before going live, replace these placeholders:

### Contact Information
- [ ] Phone numbers in `lib/constants.ts`
- [ ] Email addresses (sales@, info@)
- [ ] WhatsApp number
- [ ] Office addresses

### Images
- [ ] Hero image
- [ ] OpenGraph image (`/public/og-image.jpg`)
- [ ] Gallery images (12+ photos recommended)
- [ ] Favicon

### Content
- [ ] Review all page copy for accuracy
- [ ] Verify business hours
- [ ] Update founding year if needed

## License

Proprietary - ALI WALI TRADING COMPANY © 2025
