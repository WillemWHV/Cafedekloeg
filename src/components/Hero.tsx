"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welkom bij Café De Kloeg"
    >
      {/* Landing image */}
      <Image
        src="/landing-exterior.png"
        alt="Buitenkant van Cafe De Kloeg in Kralingen"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(58,42,26,0.65) 0%, rgba(90,69,48,0.4) 50%, rgba(58,42,26,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Warm color grading */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 90%, rgba(123,37,53,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 10%, rgba(184,80,46,0.2) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 95% 95% at 50% 50%, transparent 40%, rgba(30,20,10,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6B1A2A 15%, #C4902E 50%, #6B1A2A 85%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Logo text */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="text-center">
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-2">Eetcafé</p>
            <h2 className="font-display text-6xl md:text-8xl font-black text-brand-chalk">DE KLOEG</h2>
            <p className="text-brand-parchment/60 text-sm tracking-[0.2em] uppercase mt-2">Kralingen · Rotterdam</p>
          </div>
        </div>

        {/* Shimmer bar */}
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
              background: "linear-gradient(135deg, #C55B38 0%, #E8B84B 45%, #C4902E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            zonder poespas.
          </em>
        </h1>

        {/* Subtitle */}
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
                background: "linear-gradient(135deg, #8B2535 0%, #C55B38 100%)",
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
          ].map(([day, time]) => (
            <span key={day} className="label-caps text-brand-parchment/60 text-[10px]">
              {day} <span className="text-brand-gold/80">{time}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="w-px h-10 animate-pulse-slow"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(196,144,46,0.5))",
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,37,53,0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
