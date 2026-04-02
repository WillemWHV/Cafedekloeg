# Café De Kloeg — Website

Een karaktervolle, productieklare landingspagina voor Café De Kloeg in Kralingen, Rotterdam.

## Technische stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Google Fonts
- **Taal**: TypeScript
- **Deployment**: Vercel

## Snel starten

### 1. Installeer dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Bouwen voor productie

```bash
npm run build
npm start
```

## Deployen naar Vercel

### Via GitHub (aanbevolen)

1. Push de code naar een GitHub repository
2. Ga naar [vercel.com](https://vercel.com) → "New Project"
3. Importeer de repository
4. Klik "Deploy"

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Projectstructuur

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form API
│   │   └── reviews/route.ts    # Google Reviews API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout + SEO
│   ├── page.tsx                # Homepage
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
└── components/
    ├── Hero.tsx                # Hero section
    ├── Navigation.tsx          # Sticky nav
    ├── About.tsx               # Over ons
    ├── Menu.tsx                # De kaart
    ├── GoogleReviews.tsx       # Reviews section
    ├── Contact.tsx             # Contact form
    ├── Footer.tsx              # Footer
    └── ScrollReveal.tsx        # Scroll animations
```

## Foto's toevoegen

Voeg je eigen foto's toe aan de `/public` map:

- `logo-kloeg.webp` — Logo
- `cafe-exterior.jpg` — Hero achtergrond
- `og-image.jpg` — Social media preview

## Optioneel: Google Reviews

Om live Google reviews te tonen:

1. Maak een Google Places API key aan
2. Vind de Place ID van het café
3. Voeg toe aan Vercel environment variables:
   - `GOOGLE_PLACES_API_KEY`
   - `GOOGLE_PLACE_ID`

---

Gebouwd voor Café De Kloeg, Kralingen, Rotterdam.
