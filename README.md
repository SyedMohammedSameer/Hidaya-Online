# Hidaayah Online Quran Academy

A fast, mobile-first marketing website for an online Quran academy, built with
**Astro + Tailwind CSS**, with a few **React** islands for interactivity and
**Netlify Forms** for the free-trial / contact submissions.

Aesthetic: calm & minimal, muted teal + warm sand/cream, tasteful Arabic accents.

---

## Tech stack

- **Astro 7** (static output, ships almost no JS by default)
- **Tailwind CSS v4** (design tokens in `src/styles/global.css`)
- **React 19** islands: mobile menu + FAQ accordion (animated with Framer Motion)
- **astro-icon** + Lucide (inline SVG icons, zero JS)
- Self-hosted fonts: Fraunces (headings), Plus Jakarta Sans (body), Amiri (Arabic)

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploying to Netlify

The repo is Netlify-ready via `netlify.toml` (build `npm run build`, publish `dist`).

**Option A, drag & drop:** run `npm run build` and drag the `dist/` folder into
the Netlify dashboard.

**Option B, connect a repo / Netlify CLI:** point Netlify at this project; it
reads `netlify.toml` automatically. No environment variables required.

### Forms

The **Free Trial** and **Contact** forms use **Netlify Forms**, no backend code.
Netlify auto-detects them on deploy (each form has `data-netlify="true"` and a
hidden `form-name`). After your first deploy:

1. Go to **Netlify → your site → Forms** to see submissions (`free-trial`, `contact`).
2. Set up **email/Slack notifications** under Forms → Settings & notifications.

Successful submissions redirect to `/thank-you/`.

> Note: forms only work on the deployed Netlify site, not in local `npm run dev`.

## Editing content (no layout changes needed)

All copy lives in plain data files:

| What | File |
| --- | --- |
| Site name, WhatsApp number, **fee amount**, nav links | `src/data/site.ts` |
| Courses (titles, descriptions, bullet points) | `src/data/courses.ts` |
| FAQ questions & answers | `src/data/faqs.ts` |

**Change the WhatsApp number or fee:** edit `src/data/site.ts` (`whatsappNumber`
is digits-only with country code; `fee.amount` / `fee.currency`).

## Replacing the share image (optional)

`public/og.svg` is the social-share preview. SVG works for the favicon and most
modern crawlers; for best compatibility on Facebook/X you may replace it with a
1200×630 **PNG** named `og.png` and update the reference in `src/layouts/Layout.astro`.

## Project structure

```
src/
  data/         # editable content (site, courses, faqs, icons)
  layouts/      # base Layout (SEO, meta, fonts, scroll-reveal)
  components/   # Navbar, Footer, Button, Logo, Section, islands…
    home/       # homepage sections (Hero, About, Courses, FAQs…)
  pages/        # index, courses, fee-plans, free-trial, contact, thank-you, 404
public/         # favicon, og image, robots.txt, manifest
```
