# Anmol Saini — Portfolio

A fully configurable, production-ready portfolio site built with **Next.js 14 + Tailwind CSS + Framer Motion**, deployable to Vercel in one click.

> Edit one file (`src/data/config.ts`) and the entire site updates. No hunting through components.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Edit `src/data/config.ts`, save, and the page hot-reloads.

---

## Project structure

```
portfolio/
├── public/
│   ├── resume.pdf            # Your CV (already in place)
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css       # Theme tokens, base styles
│   │   ├── layout.tsx        # Root layout, fonts, SEO meta
│   │   └── page.tsx          # Composes all sections in order
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   └── SocialIcon.tsx
│   └── data/
│       └── config.ts         # ⭐ EDIT THIS FILE TO UPDATE EVERYTHING
├── tailwind.config.ts        # Theme colors live here
├── next.config.js
└── package.json
```

---

## How to customize

### 1. Update content (most common)

Open [`src/data/config.ts`](src/data/config.ts). Each section is a clearly labeled block:

- `personal` — name, title, email, phone, resume URL
- `hero` — greeting, rotating titles, bio, CTA buttons, stats
- `about` — paragraphs and quick-facts side card
- `experience` — array of jobs (timeline)
- `projects` — array of project cards
- `skills` — categorized skill chip groups
- `achievements` — awards / recognitions
- `education` — degrees
- `roles` — leadership / co-curricular
- `social` — social links shown in hero, contact, footer
- `nav` — top-bar navigation items
- `meta` — SEO title / description / keywords / OG image

To **add a project**, just add a new object to the `projects` array. Same for experience, skills, etc.

To **hide a section**, remove its component from [`src/app/page.tsx`](src/app/page.tsx).

To **reorder sections**, reorder them in [`src/app/page.tsx`](src/app/page.tsx).

### 2. Replace the resume PDF

Drop your new PDF in `public/resume.pdf` (overwrite the existing one). Keep the filename or update `personal.resumeUrl` in the config.

### 3. Add a profile photo (optional)

1. Place an image at `public/profile.jpg`
2. Set `personal.profileImage: "/profile.jpg"` in the config
3. (Optional) Render it in [`Hero.tsx`](src/components/Hero.tsx) — the variable is already wired in via `config.personal.profileImage`.

### 4. Change the color theme

Open [`tailwind.config.ts`](tailwind.config.ts) → `theme.extend.colors`. The accent color is `accent` (default purple `#7c5cff`) with `accent.glow` and `accent.alt` for the gradient. Change those three values and the entire site shifts palette.

### 5. SEO / Open Graph image

- Update `meta` block in `config.ts`.
- For a custom OG image, drop a 1200×630 PNG at `public/og.png`.

---

## Deploy to Vercel

You have two paths.

### Option A — GitHub (recommended)

```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin git@github.com:<your-username>/portfolio.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com):

1. Click **Add New → Project**
2. Import the GitHub repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Done. Every `git push` to `main` re-deploys.

### Option B — Vercel CLI (no GitHub)

```bash
npm i -g vercel
vercel        # follow prompts; first run links the project
vercel --prod # deploy to production
```

### Custom domain

In the Vercel project: **Settings → Domains → Add**. Point your domain's DNS to Vercel and they'll issue SSL automatically.

---

## Tech stack

- **Next.js 14** (App Router) — file-based routing, server components, image optimization
- **TypeScript** — type-safe config
- **Tailwind CSS** — utility-first styling, custom theme tokens
- **Framer Motion** — scroll-triggered animations
- **Lucide React** — icon set

---

## Scripts

```bash
npm run dev     # local dev server with hot reload
npm run build   # production build (Vercel runs this)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

---

## Common edits — cheat sheet

| Change | Where |
|---|---|
| Name, email, phone | `config.personal` |
| Hero bio / rotating titles | `config.hero` |
| Add a project | Append to `config.projects` |
| Add a job | Append to `config.experience` |
| Change accent color | `tailwind.config.ts` → `colors.accent` |
| Reorder/remove sections | `src/app/page.tsx` |
| Replace resume | Replace `public/resume.pdf` |
| Page title / SEO | `config.meta` |

---

Built with care. Open an issue or DM if anything breaks.
