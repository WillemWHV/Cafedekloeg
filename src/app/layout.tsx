import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cafedekloeg.nl"),
  title: {
    default: "Café De Kloeg — Eetcafé in Kralingen, Rotterdam",
    template: "%s | Café De Kloeg",
  },
  description:
    "Een echte Rotterdamse kroeg in Kralingen. Verse dagschotels, lokale bieren, geen gedoe. Gewoon lekker zitten en genieten.",
  keywords: [
    "café Kralingen",
    "eetcafé Rotterdam",
    "kroeg Rotterdam",
    "dagschotels Kralingen",
    "biercafé Rotterdam",
    "De Kloeg",
  ],
  authors: [{ name: "Café De Kloeg" }],
  creator: "Café De Kloeg",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://cafedekloeg.nl",
    siteName: "Café De Kloeg",
    title: "Café De Kloeg — Eetcafé in Kralingen, Rotterdam",
    description: "Een echte Rotterdamse kroeg in Kralingen. Verse dagschotels, lokale bieren, geen gedoe.",
    images: [{ url: "/landing-exterior.png", width: 1200, height: 630, alt: "Cafe De Kloeg in Kralingen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café De Kloeg — Eetcafé in Kralingen",
    description: "Verse dagschotels, lokale bieren, geen gedoe. Gewoon lekker.",
    images: ["/landing-exterior.png"],
  },
  icons: {
    icon: "/logo-kloeg.png",
    apple: "/logo-kloeg.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Café De Kloeg",
              description: "Een echte Rotterdamse kroeg in Kralingen. Verse dagschotels, lokale bieren, geen gedoe.",
              url: "https://cafedekloeg.nl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Libanonweg 18",
                addressLocality: "Rotterdam",
                addressRegion: "Zuid-Holland",
                postalCode: "3061 KJ",
                addressCountry: "NL",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday"], opens: "16:00", closes: "23:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "16:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "15:00", closes: "21:00" },
              ],
              servesCuisine: ["Dutch", "International"],
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
