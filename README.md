# Café De Kloeg — Website

Een karaktervolle, productieklare landingspagina voor Café De Kloeg in Kralingen, Rotterdam. Gebouwd met Next.js 14, Tailwind CSS en TypeScript.

---

## Stijl & karakter

De site is ontworpen om de sfeer van De Kloeg te weerspiegelen:

- **Kleuren**: Bordeauxrood, warm perkament, donker eikenbruin, gebroken wit, gedempte goud — als een geleefd bruin café
- **Typografie**: Playfair Display (koppen, karakter), Lora (body, warmte), DM Sans (labels, utility)
- **Vibe**: Nostalgisch, ambachtelijk, Rotterdams direct — geen tech-design, geen poespas

---

## Technische stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Google Fonts
- **Taal**: TypeScript
- **Deployment**: Vercel (out of the box)

---

## Snel starten

### 1. Unzip en installeer

```bash
unzip cafe-de-kloeg.zip
cd dekloeg
npm install
```

### 2. Omgevingsvariabelen

```bash
cp .env.example .env.local
# Open .env.local en pas de waarden aan
```

### 3. Lokaal draaien

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Bouwen voor productie

```bash
npm run build
npm start
```

---

## Deployen naar Vercel

### Optie A — via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Optie B — via GitHub

1. Push de code naar een GitHub repository
2. Ga naar [vercel.com](https://vercel.com) → "New Project"
3. Importeer de repository
4. Voeg de environment variables toe (zie `.env.example`)
5. Klik "Deploy"

---

## Aanpassen

### Kleuren

Bewerk `/tailwind.config.ts` onder `theme.extend.colors.brand`:

```ts
brand: {
  cream:      "#F5EFE0",  // achtergrond paginakleur
  bordeaux:   "#6B1A2A",  // primaire accentkleur (knop, highlights)
  terracotta: "#9B3A2A",  // secundaire accentkleur
  oak:        "#3B2A1A",  // donkere secties achtergrond
  gold:       "#C8A84B",  // goud accent (ster, label, prijs)
  chalk:      "#FAF7F0",  // tekst op donkere achtergrond
  // ...etc
}
```

### Tekst & content

| Wat                  | Bestand                                   |
|----------------------|-------------------------------------------|
| Hero tekst           | `src/components/Hero.tsx`                 |
| Over-ons verhaal     | `src/components/About.tsx`                |
| Menu / kaart         | `src/components/Menu.tsx`                 |
| Reviews              | `src/components/Testimonials.tsx`         |
| Openingstijden       | `src/components/Footer.tsx` + `Contact.tsx` |
| SEO metadata         | `src/app/layout.tsx`                      |

### Contactformulier (e-mail versturen)

Het formulier werkt al — berichten worden in de server-log opgeslagen. Om echte e-mails te versturen:

1. Installeer Nodemailer: `npm install nodemailer @types/nodemailer`
2. Uncomment de SMTP-code in `src/app/api/contact/route.ts`
3. Voeg de SMTP-variabelen toe in `.env.local`

**Gratis opties:**
- [Resend](https://resend.com) — eenvoudig, gratis tier
- [Brevo (Sendinblue)](https://brevo.com) — gratis SMTP
- Gmail SMTP (voor kleine volumes)

### Foto's toevoegen

Vervang de stilistische achtergronden door echte foto's van de kroeg:

```tsx
// In Hero.tsx — vervang de donkere achtergrond door een foto:
<Image
  src="/foto-hero.jpg"
  alt="Sfeer binnen bij De Kloeg"
  fill
  className="object-cover opacity-40"
  priority
/>
```

Zet foto's in de `/public` map.

### Deelder-gedicht

Het gedicht staat als decoratieve achtergrond in `Hero.tsx`. Je kunt het aanpassen of verwijderen in de `<p>` met de Deelder-tekst.

---

## Projectstructuur

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API endpoint
│   ├── globals.css            # Global styles, animaties, fonts
│   ├── layout.tsx             # Root layout + metadata + SEO
│   ├── page.tsx               # Hoofdpagina
│   ├── sitemap.ts             # Automatische sitemap.xml
│   └── robots.ts              # robots.txt
├── components/
│   ├── Navigation.tsx         # Sticky navigatie + mobiel menu
│   ├── Hero.tsx               # Full-screen hero sectie
│   ├── About.tsx              # Over-ons + Deelder citaat
│   ├── Menu.tsx               # Kaart: dagschotels + dranken
│   ├── Testimonials.tsx       # Reviews
│   ├── Contact.tsx            # Contactformulier
│   ├── Footer.tsx             # Voettekst
│   └── ScrollReveal.tsx       # IntersectionObserver animaties
public/
│   └── (foto's en favicon hier plaatsen)
```

---

## Toegankelijkheid

- Semantische HTML (section, nav, article, footer)
- ARIA-labels op interactieve elementen
- Keyboard-navigeerbaar (focus states)
- Skip-to-content link
- Correct heading-hiërarchie (h1 → h2 → h3)
- Screen reader-vriendelijke review-ratings

---

## Performance tips

- Voeg echte foto's toe als geoptimaliseerde `.webp` bestanden
- Gebruik `next/image` voor automatische lazy loading
- Google Fonts worden geladen via `preconnect` voor snelheid
- Minimale dependencies — geen zware UI-bibliotheken

---

## Licentie

Gebouwd voor Café De Kloeg, Kralingen, Rotterdam.
