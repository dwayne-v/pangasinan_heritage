# Pangasinan Heritage Digital Showcase

A lightning-fast, mobile-first, accessible showcase of Pangasinan's
heritage tourism sites (Hundred Islands, Cape Bolinao Lighthouse,
Balungao Hot Spring, and more), built for the Provincial Tourism
Office with **Next.js 14 (App Router)** using **Brad Frost's Atomic
Design** methodology.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export -> ./out (deploy this folder to any CDN)
```

Requires Node.js 18.17+.

## Architecture

```
src/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # HeaderNavigation + skip link + <main>
│   ├── page.tsx              # Home: hero + HeritageGrid
│   ├── sites/page.tsx        # Full listing
│   ├── sites/[slug]/page.tsx # Statically generated site detail pages
│   ├── about/page.tsx
│   ├── plan-your-visit/page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── atoms/        # Button, Typography, ColorTokens, Icon, Image
│   ├── molecules/    # HeritageCard, SearchForm, NavigationItem
│   └── organisms/    # HeritageGrid, HeaderNavigation
├── data/
│   └── heritageSites.ts   # Content, decoupled from presentation
└── lib/
    └── clsx.ts        # 10-line className helper (zero extra dependency)
```

See the Atomic Design System Manual (submitted separately as a PDF)
for a full breakdown of every component: usage context, responsive
behavior, and reusable code reference.

## How this meets the brief

| Requirement | Implementation |
|---|---|
| **Lightning fast** | Static export (`output: "export"`), zero UI dependencies beyond React/Next, inline SVG icons instead of an icon font, `next/image` with lazy-loading + reserved aspect ratios, system-first font stack (no render-blocking web font request). |
| **Mobile-first** | Every Tailwind class is written unprefixed-first (mobile) with `sm:`/`lg:` overrides layered on top; header collapses to a drawer below `lg`; grid is 1 column by default. |
| **Maintainable** | Atomic Design component tree + a single `heritageSites.ts` content array standing in for a headless CMS -- adding a site or swapping copy never touches component code. |
| **Accessible (WCAG 2.1 AA)** | Skip link, semantic landmarks, one visible focus style, required `alt` text at the type level, labeled search input, `aria-current`/`aria-expanded` on interactive nav, 44px+ tap targets, AA-contrast palette (see `ColorTokens`). |
| **Deployable / JAMstack** | Static export with no server runtime; every dynamic route (`/sites/[slug]`) is pre-rendered via `generateStaticParams`, so the whole site is plain HTML/CSS/JS deployable to Netlify, Vercel, Cloudflare Pages, or any static host / CDN. |

## Content

Replace the placeholder image filenames in `public/images/` (see the
README there) with the Tourism Office's actual photography, and edit
`src/data/heritageSites.ts` to add or update sites.
