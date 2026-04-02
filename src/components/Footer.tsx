import Image from "next/image";

const navLinks = [
  { href: "#over-ons", label: "Over ons" },
  { href: "#menu",     label: "De kaart" },
  { href: "#reviews",  label: "Reviews" },
  { href: "#contact",  label: "Contact" },
];

const hours = [
  { day: "Woensdag & Donderdag", time: "16:00–23:00", open: true },
  { day: "Vrijdag & Zaterdag",    time: "16:00–00:00", open: true },
  { day: "Zondag",                time: "15:00–21:00",  open: true },
  { day: "Maandag & Dinsdag",     time: "Gesloten",     open: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative section-dark border-t"
      style={{ borderColor: "rgba(196,144,46,0.08)" }}
      role="contentinfo"
      aria-label="Voettekst"
    >
      {/* Gold shimmer top rule */}
      <div className="shimmer-bar" aria-hidden="true" />

      {/* Warm glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(107,26,42,0.25) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand — real logo */}
          <div className="md:col-span-1">
            <Image
              src="/logo-kloeg.webp"
              alt="Café De Kloeg"
              width={80}
              height={100}
              className="object-contain mb-4"
            />
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(201,180,138,0.5)" }}>
              Eetcafé in Kralingen.<br />Geen gedoe, gewoon lekker.
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/cafedekloeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 label-caps text-[11px] transition-opacity hover:opacity-80"
              style={{ color: "rgba(196,144,46,0.55)" }}
              aria-label="Volg ons op Instagram (opent in nieuw tabblad)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @cafedekloeg
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="label-caps text-[11px] mb-5" style={{ color: "rgba(196,144,46,0.45)" }}>Navigatie</p>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm transition-colors"
                    style={{ color: "rgba(201,180,138,0.55)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <p className="label-caps text-[11px] mb-5" style={{ color: "rgba(196,144,46,0.45)" }}>Openingstijden</p>
            <ul className="space-y-2.5" role="list">
              {hours.map(({ day, time, open }) => (
                <li key={day} className="flex justify-between gap-4 font-body text-sm">
                  <span style={{ color: "rgba(201,180,138,0.55)" }}>{day}</span>
                  <span
                    className="font-sans font-medium tabular-nums"
                    style={{ color: open ? "rgba(201,180,138,0.8)" : "rgba(201,180,138,0.25)" }}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(196,144,46,0.08)" }}
        >
          <p className="label-caps text-[10px]" style={{ color: "rgba(201,180,138,0.2)" }}>
            © {year} Café De Kloeg · Libanonweg 18, 3061 KJ Rotterdam
          </p>
          <p className="label-caps text-[10px]" style={{ color: "rgba(201,180,138,0.15)" }}>
            Gemaakt met liefde voor Rotterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
