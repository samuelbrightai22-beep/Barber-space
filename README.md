# Brass &amp; Blade — Master Barbershop

A modern barbershop marketing site built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

Sections: Hero with opening hours, Services grid, Why Choose Us, Team, Testimonial, Pricing table, Booking CTA, Footer with newsletter signup.

## Tech Stack

| Layer       | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 16 (App Router)                 |
| UI          | React 19 + TypeScript 5                 |
| Styling     | Tailwind CSS 4 + shadcn/ui (New York)   |
| Fonts       | Inter (body) + Playfair Display (heads) |
| Icons       | lucide-react                            |
| Animations  | framer-motion (available, not required) |

## Local Development

```bash
bun install
bun run dev
```

Site runs on http://localhost:3000.

## Build

```bash
bun run build
bun run start
```

Production build outputs to `.next/standalone/`.

---

## Deploy Targets

This project deploys cleanly to **any** Next.js-capable host. Configs are included for all three.

### 1. Vercel (recommended, zero config)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new
3. Import the GitHub repo.
4. Vercel auto-detects Next.js — leave all settings as default.
5. Click **Deploy**.

Optional env vars (Project Settings &rarr; Environment Variables): see `.env.example`.

### 2. Netlify

1. Push this repo to GitHub.
2. Go to https://app.netlify.com/start
3. Connect the GitHub repo.
4. Build settings are auto-read from `netlify.toml`:
   - Build command: `bun run build`
   - Publish dir: `.next`
   - Next.js runtime: provided by `@netlify/plugin-nextjs` (already in `devDependencies`)
5. Click **Deploy site**.

### 3. z.ai sandbox

This project was originally scaffolded by z.ai's fullstack-dev skill and runs without modification on any z.ai sandbox. The auto-dev server runs `next dev -p 3000` and the preview is exposed at the sandbox URL.

---

## Project Structure

```
.
├── public/
│   ├── images/                  # All barbershop photos
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind 4 + custom theme (cream/brass palette)
│   │   ├── layout.tsx           # Fonts + metadata
│   │   ├── page.tsx             # Single-page composition
│   │   └── api/route.ts
│   ├── components/
│   │   ├── sections/            # Hero, Services, Team, etc.
│   │   ├── site/                # Header, Footer
│   │   └── ui/                  # shadcn/ui primitives
│   ├── hooks/
│   └── lib/
│       ├── site-data.ts         # Services, team, testimonials, hours data
│       ├── utils.ts             # cn() helper
│       └── db.ts                # Prisma client (unused, kept for future)
├── prisma/schema.prisma
├── next.config.ts
├── netlify.toml
├── vercel.json
├── .env.example
└── package.json
```

## Editing Content

All site copy lives in `src/lib/site-data.ts`:
- `services` — name, price, description, image
- `team` — name, role, bio, photo
- `testimonials` — quote, author, photo
- `openingHours` — day-by-day hours shown in hero card
- `navItems` — top nav links

To swap an image, drop a file in `public/images/` and update the path in `site-data.ts`.

## Theme

Colors are defined as CSS variables in `src/app/globals.css`:

| Token       | Value     | Use                    |
| ----------- | --------- | ---------------------- |
| background  | `#fbf6ec` | Page background (cream)|
| foreground  | `#1b2028` | Body text              |
| primary     | `#b5732a` | Brass/copper accent    |
| accent      | `#d29951` | Bright brass highlight  |
| secondary   | `#eae1ce` | Soft tan cards         |
| border      | `#ddd2bc` | Hairline borders       |

Fonts: `--font-inter` (body) and `--font-playfair` (headings) loaded via `next/font/google` in `layout.tsx`.
