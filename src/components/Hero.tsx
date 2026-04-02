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

      {/* Lighter background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(42,30,18,0.55) 0%, rgba(74,51,32,0.35) 50%, rgba(42,30,18,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Lighter overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20, 12, 6, 0.25)" }}
        aria-hidden="true"
      />

      {/* Subtle warm color grading */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 90%, rgba(107,26,42,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 10%, rgba(168,64,30,0.15) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Softer vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(12,7,3,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Logo container with decorative frame */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-6 w-8 h-8 border-t-2 border-l-2 border-brand-gold/40" aria-hidden="true" />
            <div className="absolute -top-4 -right-6 w-8 h-8 border-t-2 border-r-2 border-brand-gold/40" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-6 w-8 h-8 border-b-2 border-l-2 border-brand-gold/40" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-6 w-8 h-8 border-b-2 border-r-2 border-brand-gold/40" aria-hidden="true" />
            
            {/* Logo content */}
            <div className="text-center px-8 py-4">
              <p className="label-caps text-brand-gold/70 text-[11px] tracking-[0.35em] mb-1">Eetcafé</p>
              <h2 
                className="font-display text-5xl md:text-7xl font-semibold tracking-wide"
                style={{
                  color: "#F8F3E8",
                  textShadow: "0 2px 20px rgba(196,144,46,0.2)",
                }}
              >
                De Kloeg
              </h2>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="w-8 h-px bg-brand-gold/40" aria-hidden="true" />
                <p className="text-brand-parchment/70 text-xs tracking-[0.25em] uppercase">Kralingen</p>
                <span className="w-8 h-px bg-brand-gold/40" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-medium leading-[1.1] text-brand-chalk animate-fade-up mb-5"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            animationDelay: "0.3s",
          }}
        >
          Een kroeg{" "}
          <em
            className="italic"
            style={{
              color: "#E8B84B",
            }}
          >
            zonder poespas.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-lg md:text-xl text-brand-chalk/80 max-w-lg mx-auto leading-relaxed mb-10 animate-fade-up"
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
            className="group relative inline-block overflow-hidden rounded font-sans font-medium text-sm tracking-widest uppercase px-8 py-3.5 text-brand-chalk transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #8B2535 0%, #A8401E 100%)",
            }}
          >
            <span className="relative z-10">Reserveer een tafel</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #9B3040 0%, #C55B38 100%)",
              }}
              aria-hidden="true"
            />
          </a>
          <a
            href="#menu"
            className="inline-block border border-brand-chalk/40 text-brand-chalk rounded font-sans font-medium text-sm tracking-widest uppercase px-8 py-3.5 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 backdrop-blur-sm"
          >
            Bekijk de kaart
          </a>
        </div>

        {/* Hours strip */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-2 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            ["Wo–Do", "16–23u"],
            ["Vr–Za", "16–00u"],
            ["Zo", "15–21u"],
          ].map(([day, time]) => (
            <span key={day} className="label-caps text-brand-chalk/50 text-[10px]">
              {day} <span className="text-brand-gold/70">{time}</span>
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
            background: "linear-gradient(to bottom, transparent, rgba(196,144,46,0.4))",
          }}
        />
        <svg
          className="w-3.5 h-3.5 animate-bounce"
          fill="none"
          stroke="#C4902E"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          style={{ opacity: 0.4 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
