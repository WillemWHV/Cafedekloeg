import Image from "next/image";

// Hero uses the real cafe exterior photo as background
// Logo is the actual KLO_logo webp from the brand

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welkom bij Café De Kloeg"
    >
      {/* ── Real cafe photo as background ─────────────────────────── */}
      <Image
        src="/cafe-exterior.jpg"
        alt="Café De Kloeg — hoekpand Libanonweg, Kralingen Rotterdam"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* ── Dark overlay layers ────────────────────────────────────── */}
      {/* Base darkening so text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20, 12, 6, 0.62)" }}
        aria-hidden="true"
      />
      {/* Warm colour grading — bordeaux from bottom, terracotta top-right */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 90%, rgba(107,26,42,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 10%, rgba(168,64,30,0.3) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Vignette to pull eyes centre */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(12,7,3,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #6B1A2A 15%, #C4902E 50%, #6B1A2A 85%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Real logo */}
        <div
          className="flex justify-center mb-8 animate-fade-in"
          style={{ animationDelay: "0s" }}
        >
          <Image
            src="/logo-kloeg.webp"
            alt="Café De Kloeg logo"
            width={260}
            height={320}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Gold shimmer rule */}
        <div className="shimmer-bar max-w-[200px] mx-auto mb-7" aria-hidden="true" />

        {/* Eyebrow */}
        <p
          className="label-caps text-brand-gold mb-5 vintage-badge animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Eetcafé · Kralingen · Rotterdam
        </p>

        {/* Headline */}
        <h1
          className="font-display font-black leading-[1.06] text-brand-chalk animate-fade-up mb-5"
          style={{
            fontSize: "clamp(2.2rem, 7vw, 4.8rem)",
            animationDelay: "0.3s",
          }}
        >
          Een kroeg{" "}
          <em
            className="not-italic"
            style={{
              background:
                "linear-gradient(135deg, #C55B38 0%, #E8B84B 45%, #C4902E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            zonder poespas.
          </em>
        </h1>

        {/* Sub */}
        <p
          className="font-body text-lg md:text-xl text-brand-parchment/85 max-w-lg mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.44s" }}
        >
          Verse dagschotels, lokale bieren en een goed glas wijn.
          Gewoon lekker zitten — zoals Rotterdammers dat graag doen.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.58s" }}
        >
          <a
            href="#contact"
            className="group relative inline-block overflow-hidden rounded-sm font-sans font-semibold text-sm tracking-widest uppercase px-9 py-4 text-brand-chalk shadow-warm-lg transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #6B1A2A 0%, #A8401E 100%)",
            }}
          >
            <span className="relative z-10">Reserveer een tafel</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #8B2535 0%, #C55B38 100%)",
              }}
              aria-hidden="true"
            />
          </a>
          <a
            href="#menu"
            className="inline-block border border-brand-parchment/35 text-brand-parchment rounded-sm font-sans font-semibold text-sm tracking-widest uppercase px-9 py-4 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 backdrop-blur-sm"
          >
            Bekijk de kaart
          </a>
        </div>

        {/* Hours strip */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-1.5 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            ["Wo–Do", "16–23u"],
            ["Vr–Za", "16–00u"],
            ["Zo", "15–21u"],
          ].map(([d, t]) => (
            <span key={d} className="label-caps text-brand-parchment/35 text-[10px]">
              {d} <span className="text-brand-gold/55">{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="w-px h-10 animate-pulse-slow"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(196,144,46,0.5))",
          }}
        />
        <svg
          className="w-3.5 h-3.5 animate-bounce"
          fill="none"
          stroke="#C4902E"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          style={{ opacity: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,37,53,0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
